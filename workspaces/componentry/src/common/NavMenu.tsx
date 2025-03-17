import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { Fragment, type JSX } from 'react/jsx-runtime';

import { Dropdown, Navbar, Sidebar, StackedLayout } from '../catalyst/index.js';

export type NavConfig = { sections: Array<{ items: NavItem[] }> };
type NavItem =
  | { items: NavItem[] }
  | { filter?: string[] | boolean[] | number[] }
  | { filter?: string[] | boolean[] | number[]; heading?: string; label?: never; tag: JSX.Element; url?: never }
  | {
      filter?: string[] | boolean[] | number[];
      heading?: string;
      label: string;
      tag?: JSX.Element;
      url: string;
    };

interface NavMenuProps extends React.PropsWithChildren {
  className?: string;
  navConfig: NavConfig;
  stackClass?: string;
  filters?: string[];
}

export function NavMenu({ className, navConfig, stackClass, filters = [], children }: NavMenuProps) {
  const activeNav = navFilter.filterNavConfig(navConfig, filters);

  return (
    activeNav.sections.length > 0 && (
      <StackedLayout
        className={stackClass}
        navbar={
          <Navbar className={className}>
            {activeNav.sections.map((section, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: navbar sections remain imutable
              <Navbar.Section key={`navbar-section-${index}`} className="max-lg:hidden">
                {section.items.map((item, itemIndex) => {
                  if (item.items) {
                    const headingItem = item.items.find(subItem => subItem.heading);
                    const remainderItems = headingItem ? item.items.filter(subItem => subItem !== headingItem) : item.items;

                    return (
                      // biome-ignore lint/suspicious/noArrayIndexKey: navbar items remain imutable
                      <Dropdown key={`dropdown-${itemIndex}`}>
                        <Dropdown.Button as={Navbar.Item} className="hidden lg:block">
                          {headingItem?.tag || <Navbar.Label>{headingItem?.heading}</Navbar.Label>}
                          <ChevronDownIcon />
                        </Dropdown.Button>
                        {/* biome-ignore lint/suspicious/noArrayIndexKey: navbar items remain imutable */}
                        <Dropdown.Menu key={`dropdown-menu-${itemIndex}`} anchor="bottom start" className="min-w-80 lg:min-w-64">
                          {remainderItems.map((subItem, subIndex) => (
                            <Dropdown.Item key={`dropitem-${subIndex}-${subItem.url}`} href={subItem.url}>
                              {subItem.tag}
                              {subItem.label && <Dropdown.Label>{subItem.label}</Dropdown.Label>}
                            </Dropdown.Item>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
                    );
                  }

                  return (
                    <Navbar.Item key={`navbar-${itemIndex}-${item.url}`} href={item.url}>
                      {item.tag}
                      {item.label && <Navbar.Label>{item.label}</Navbar.Label>}
                    </Navbar.Item>
                  );
                })}
              </Navbar.Section>
            ))}
          </Navbar>
        }
        sidebar={
          <Sidebar>
            <Sidebar.Body>
              {activeNav.sections.map((section, index) => {
                return (
                  // biome-ignore lint/suspicious/noArrayIndexKey: navbar items remain imutable
                  <Sidebar.Section key={`sidebar-section-${index}`}>
                    {section.items.map((item, index) => {
                      if (item.items) {
                        return (
                          // biome-ignore lint/suspicious/noArrayIndexKey: navbar items remain imutable
                          <Fragment key={index}>
                            {/* biome-ignore lint/suspicious/noArrayIndexKey: navbar items remain imutable */}
                            <Sidebar.Divider key={`sidebar-divider-${index}`} />
                            <Sidebar.Section key={`sidebar-section2-${index}-${item.url}`}>
                              {item.items.map((item, index) => {
                                return (
                                  <Sidebar.Item key={`sidebar-${index}-${item.url}`} href={item.url}>
                                    {item.tag}
                                    {item.label && <Sidebar.Label>{item.label}</Sidebar.Label>}
                                  </Sidebar.Item>
                                );
                              })}
                            </Sidebar.Section>
                          </Fragment>
                        );
                      }

                      return (
                        <Sidebar.Item key={`sidebar-${index}-${item.url}`} href={item.url ?? '#'}>
                          {item.tag}
                          {item.label && <Sidebar.Label>{item.label}</Sidebar.Label>}
                        </Sidebar.Item>
                      );
                    })}
                  </Sidebar.Section>
                );
              })}
            </Sidebar.Body>
          </Sidebar>
        }
      >
        {children}
      </StackedLayout>
    )
  );
}

const navFilter = {
  /**
   * Filters navigation configuration based on provided filter parameters
   * @param navConfig - The navigation configuration object
   * @param filterParams - Array of filter items to include (e.g. ['signed-in'])
   * @returns A filtered copy of the navigation configuration
   */
  filterNavConfig: (navConfig: NavConfig, filterParams: string[]): NavConfig => {
    const filteredNav: NavConfig = {
      sections: navConfig.sections.map(section => {
        if (navFilter.shouldIncludeItemsArray(section.items, filterParams)) {
          return { ...section, items: navFilter.filterNavItems(section.items, filterParams) };
        }
        return { ...section, items: [] };
      }),
    };

    return filteredNav;
  },

  /**
   * Checks if an items array should be included based on filter parameters
   * If any item in the array has a filter that doesn't match, the entire array should be excluded
   * @param items - Array of navigation items
   * @param filterParams - Filter parameters to match against
   * @returns boolean indicating if the items array should be included
   */
  shouldIncludeItemsArray: (items, filterParams: string[]): boolean => {
    if (!items || !Array.isArray(items)) {
      return true;
    }

    for (const item of items) {
      if (item.filter) {
        const hasMatchingFilter = item.filter.some((filterValue: string) => filterParams.includes(filterValue));

        if (!hasMatchingFilter) {
          return false;
        }
      }
    }

    return true;
  },

  /**
   * Recursively filters navigation items based on filter parameters
   * @param items - Array of navigation items
   * @param filterParams - Array of filter items to include
   * @returns Filtered array of navigation items
   */
  filterNavItems: (items, filterParams: string[]) => {
    if (!items || !Array.isArray(items)) {
      return [];
    }

    const result = [];

    for (const item of items) {
      const newItem = { ...item };

      if (newItem.items && Array.isArray(newItem.items)) {
        if (!navFilter.shouldIncludeItemsArray(newItem.items, filterParams)) {
          continue;
        }
        newItem.items = navFilter.filterNavItems(newItem.items, filterParams);
      }

      result.push(newItem);
    }

    return result;
  },
};
