import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { Fragment, type JSX } from 'react/jsx-runtime';

import { Dropdown, Navbar, Sidebar, StackedLayout } from '../catalyst/index.js';

export interface NavConfig {
  sections: Array<{
    items: Array<{
      label?: string;
      url?: string;
      tag?: JSX.Element;
      items?: NavItem[];
    }>;
  }>;
}

type NavItem = {
  heading?: string;
  url: string;
  tag?: JSX.Element;
  label?: string;
};

interface NavMenuProps {
  className?: string;
  navConfig: NavConfig;
}

export function NavMenu({ className, navConfig }: NavMenuProps) {
  return (
    navConfig.sections && (
      <StackedLayout
        navbar={
          <Navbar className={className}>
            {navConfig.sections.map((section, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey:
              <Navbar.Section key={`navbar-section-${index}`} className="max-lg:hidden">
                {section.items.map((item, itemIndex) => {
                  if (item.items) {
                    return (
                      //  biome-ignore lint/suspicious/noArrayIndexKey:
                      <Dropdown key={`dropdown-${itemIndex}`}>
                        <Dropdown.Button as={Navbar.Item} className="hidden lg:block">
                          {item.items[0]?.heading && <Navbar.Label>{item.items[0].heading}</Navbar.Label>}
                          <ChevronDownIcon />
                        </Dropdown.Button>
                        {/* biome-ignore lint/suspicious/noArrayIndexKey: */}
                        <Dropdown.Menu key={`dropdown-menu-${itemIndex}`} anchor="bottom start" className="min-w-80 lg:min-w-64">
                          {item.items.map((subItem, subIndex) => (
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
              {navConfig.sections.map((section, index) => {
                return (
                  // biome-ignore lint/suspicious/noArrayIndexKey:
                  <Sidebar.Section key={`sidebar-section-${index}`}>
                    {section.items.map((item, index) => {
                      if ('items' in item && item.items) {
                        return (
                          // biome-ignore lint/suspicious/noArrayIndexKey:
                          <Fragment key={index}>
                            {/* biome-ignore lint/suspicious/noArrayIndexKey: */}
                            <Sidebar.Divider key={`sidebar-divider-${index}`} />
                            <Sidebar.Section key={`sidebar-section2-${index}-${item.url}`}>
                              {(item.items as NavItem[]).map((item, index) => {
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
      />
    )
  );
}
