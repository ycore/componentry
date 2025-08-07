import clsx from 'clsx';
import { createContext, useContext } from 'react';
import { useLocation } from 'react-router';

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '../shadcn-ui/components/navigation-menu';
import type { NavMenuItemProps, Section, SectionItem, StackMenuProps } from './@types/NavMenu.types';

const LocationContext = createContext<string>('');

export const StackMenu3 = ({ navConfigItems, navFilters, menuClass, spriteUrl, children, ...props }: StackMenuProps) => {
  const location = useLocation();

  return (
    <LocationContext.Provider value={location.pathname}>
      <div className={clsx('flex min-h-svh w-full flex-col', menuClass)} {...props}>
        {/* Top Navigation Bar */}
        <header className="border-b bg-background/95 backdrop-blur supports-backdrop-blur:bg-background/60">
          <div className='flex h-14 w-full items-center'>
            <NavMenuFactory navConfigItems={navConfigItems} navFilters={navFilters} spriteUrl={spriteUrl} />
          </div>
        </header>

        {/* Content Area */}
        {children && (
          <main className="flex-1">
            <div className="container py-6">{children}</div>
          </main>
        )}
      </div>
    </LocationContext.Provider>
  );
};

const NavMenuFactory = ({ navConfigItems, navFilters = [], spriteUrl }: StackMenuProps) => {
  const shouldShowItem = (item: SectionItem) => {
    if (!item.filter || item.filter.length === 0) return true;
    return item.filter.some(filter => navFilters.includes(filter));
  };

  const filteredSections: Section[] =
    navFilters.length === 0
      ? (navConfigItems as Section[])
      : (navConfigItems
        .map(section => ({
          section: section.section.filter(shouldShowItem).map(item => {
            if (item.submenu) {
              return {
                ...item,
                submenu: item.submenu.filter(shouldShowItem),
              };
            }
            return item;
          }),
        }))
        .filter(section => section.section.length > 0) as Section[]);

  return (
    <div className="w-full flex-1 px-4">
      <NavigationMenu className="w-full max-w-none" viewport={false}>
        <NavigationMenuList className="flex w-full">
          {filteredSections.map((section, idx) => (
            <div key={`section-${idx}`} className='flex flex-1 items-center justify-center gap-1'>
              {section.section.map(sectionItem => (
                <NavMenuItem key={sectionItem.ref} sectionItem={sectionItem} spriteUrl={spriteUrl} />
              ))}
            </div>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

const NavMenuItem = ({ sectionItem, spriteUrl }: NavMenuItemProps) => {
  const pathname = useContext(LocationContext);
  const isActive = !!(sectionItem.href && pathname === sectionItem.href);
  const hasActiveChild = sectionItem.submenu?.some(item => item.href && pathname === item.href);

  // Handle items with submenus (dropdowns)
  if (sectionItem.submenu && sectionItem.submenu.length > 0) {
    return (
      <NavigationMenuItem>
        <NavigationMenuTrigger spriteUrl={spriteUrl} className={clsx(hasActiveChild && 'bg-accent text-accent-foreground')}>
          <div className="flex items-center gap-2">
            {sectionItem.component}
            {'label' in sectionItem && sectionItem.label && <span>{sectionItem.label}</span>}
          </div>
        </NavigationMenuTrigger>
        <NavigationMenuContent className='data-[motion^=from-]:fade-in-0 data-[motion^=to-]:fade-out-0 data-[motion^=from-]:zoom-in-95 data-[motion^=to-]:zoom-out-95 left-0 min-w-[250px]'>
          <div className="grid w-full gap-1 p-2">
            {sectionItem.submenu.map(subItem => {
              const subIsActive = !!(subItem.href && pathname === subItem.href);
              return (
                <NavigationMenuLink
                  key={subItem.ref}
                  asChild
                  className={clsx(
                    'block select-none rounded-sm p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                    subIsActive && 'bg-accent text-accent-foreground'
                  )}
                >
                  <a href={subItem.href || '#'}>
                    <div className="flex items-center gap-2">
                      {subItem.component}
                      {'label' in subItem && subItem.label && (
                        <div>
                          <div className='font-medium text-sm'>{subItem.label}</div>
                        </div>
                      )}
                    </div>
                  </a>
                </NavigationMenuLink>
              );
            })}
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  // Handle simple navigation items
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild className={clsx(navigationMenuTriggerStyle(), isActive && 'bg-accent text-accent-foreground')}>
        <a href={sectionItem.href || '#'}>
          <div className="flex items-center gap-2">
            {sectionItem.component}
            {'label' in sectionItem && sectionItem.label && <span>{sectionItem.label}</span>}
          </div>
        </a>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};
