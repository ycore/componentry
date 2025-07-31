import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import clsx from 'clsx';

// Simple utility function for converting numbers to base-36 strings
const toBase = (num: number): string => num.toString(36);
import { createContext, Fragment, useContext } from 'react';
import { useLocation } from 'react-router';
import { Dropdown, Navbar, Sidebar, SidebarLayout, StackedLayout } from '../catalyst';
import type { NavMenuItemProps, NavMenuProps, Section, SectionItem } from './@types/NavMenu.types';

const LocationContext = createContext<string>('');

export const SideMenu = ({ navConfigItems, navFilters, menuClass, ...props }: NavMenuProps) => {
  const { children, ...rest } = props;
  const location = useLocation();
  const { navbar, sidebar } = NavMenuFactory({ navConfigItems, navFilters });
  return (
    <LocationContext.Provider value={location.pathname}>
      <SidebarLayout navbar={navbar} sidebar={sidebar} className={menuClass} {...rest}>
        {children}
      </SidebarLayout>
    </LocationContext.Provider>
  );
};

export const StackMenu = ({ navConfigItems, navFilters, menuClass, ...props }: NavMenuProps) => {
  const { children, ...rest } = props;
  const location = useLocation();
  const { navbar, sidebar } = NavMenuFactory({ navConfigItems, navFilters });
  return (
    <LocationContext.Provider value={location.pathname}>
      <StackedLayout navbar={navbar} sidebar={sidebar} className={menuClass} {...rest}>
        {children}
      </StackedLayout>
    </LocationContext.Provider>
  );
};

export const NavMenuFactory = ({ navConfigItems, navFilters = [] }: NavMenuProps) => {
  const shouldShowItem = (item: SectionItem) => {
    if (!item.filter || item.filter.length === 0) return true;

    return item.filter.some(filter => navFilters.includes(filter));
  };

  const filteredItems: Section[] =
    navFilters.length === 0
      ? (navConfigItems as Section[])
      : (navConfigItems
        .map(section => {
          return {
            section: section.section.filter(shouldShowItem).map(item => {
              if (item.submenu) {
                return {
                  ...item,
                  submenu: item.submenu.filter(shouldShowItem),
                };
              }
              return item;
            }),
          };
        })
        .filter(section => section.section.length > 0) as Section[]);

  return {
    navbar: (
      <Navbar>
        {filteredItems.map((sections, idx) => {
          const keyIdx = toBase(idx);
          return (
            <Fragment key={`fmt-${keyIdx}`}>
              {idx === 1 && <Navbar.Spacer key={`space-${keyIdx}`} />}
              <Navbar.Section key={`section-${keyIdx}`} className="max-lg:hidden">
                {idx !== 0 && <Navbar.Divider key={`div-${keyIdx}`} />}
                {sections.section.map(sectionitem => {
                  return <NavMenuItem sectionitem={sectionitem} type="navbar" key={sectionitem.ref} />;
                })}
              </Navbar.Section>
            </Fragment>
          );
        })}
      </Navbar>
    ),
    sidebar: (
      <Sidebar>
        <Sidebar.Body>
          {filteredItems.map((sections, idx) => {
            const keyIdx = toBase(idx);
            return (
              <Fragment key={`fmt-${keyIdx}`}>
                {idx !== 0 && <Sidebar.Divider key={`div-${keyIdx}`} />}
                {idx === filteredItems.length - 1 && <Sidebar.Spacer key={`space-${keyIdx}`} />}
                <Sidebar.Section key={`section-${keyIdx}`}>
                  {sections.section.map((sectionitem, itx) => {
                    return <NavMenuItem sectionitem={sectionitem} type="sidebar" key={sectionitem.ref} />;
                  })}
                </Sidebar.Section>
              </Fragment>
            );
          })}
        </Sidebar.Body>
      </Sidebar>
    ),
  };
};

const NavMenuItem = ({ sectionitem, type, navkey, ...props }: NavMenuItemProps) => {
  const pathname = useContext(LocationContext);
  const hasActive = sectionitem.submenu?.some(item => item.href && pathname === item.href);
  const isNavbar = type === 'navbar';

  return sectionitem.submenu ? (
    <Dropdown key={`dd-${navkey}`}>
      <Dropdown.Button as={isNavbar ? Navbar.Item : Sidebar.Item} className={clsx(isNavbar ? 'max-lg:hidden' : 'lg:mb-2.5', hasActive ? 'rounded-b-none border-b' : 'border-current')}>
        {sectionitem.component}
        {'label' in sectionitem && sectionitem.label && (isNavbar ? <Navbar.Label>{sectionitem.label}</Navbar.Label> : <Sidebar.Label>{sectionitem.label}</Sidebar.Label>)}
        {isNavbar ? <ChevronDownIcon /> : <ChevronRightIcon />}
      </Dropdown.Button>
      <Dropdown.Menu key={navkey} className="min-w-80 lg:min-w-64" {...props}>
        {sectionitem.submenu.map((submenuitem, ix) => {
          return (
            <Dropdown.Item key={`drop-${toBase(ix)}`} href={submenuitem.href} className={clsx(submenuitem.href && pathname === submenuitem.href ? 'rounded-l-none border-l-2' : 'border-current')}>
              {submenuitem.component}
              {'label' in submenuitem && submenuitem.label && <Dropdown.Label>{submenuitem.label}</Dropdown.Label>}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  ) : isNavbar ? (
    <Navbar.Item key={navkey} href={sectionitem.href || '#'} current={!!(sectionitem.href && pathname === sectionitem.href)}>
      {sectionitem.component}
      {'label' in sectionitem && sectionitem.label && <Navbar.Label>{sectionitem.label}</Navbar.Label>}
    </Navbar.Item>
  ) : (
    <Sidebar.Item key={navkey} href={sectionitem.href || '#'} current={!!(sectionitem.href && pathname === sectionitem.href)}>
      {sectionitem.component}
      {'label' in sectionitem && sectionitem.label && <Sidebar.Label>{sectionitem.label}</Sidebar.Label>}
    </Sidebar.Item>
  );
};
