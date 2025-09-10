import clsx from 'clsx';
import type React from 'react';
import { createContext, useState } from 'react';
import { useLocation } from 'react-router';

import { createSpriteIcon } from '../../images/SpriteIcon';
import { Button } from '../../shadcn-ui/components/button';
import { Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarMenu, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from '../../shadcn-ui/components/menubar';
import { Sheet, SheetContent, SheetTrigger } from '../../shadcn-ui/components/sheet';
import { Link } from '../../shadcn-ui/custom/link';
import type { MenubarConfigItem, MenubarContextValue, MenubarItemConfig, NavMenubarProps } from '../@types/NavMenu.types';

const MenubarContext = createContext<MenubarContextValue | null>(null);

/**
 * Renders a menubar item with automatic type detection (separator, component, sub-menu, checkbox, radio, or regular item).
 * Handles active state highlighting and navigation links.
 */
function renderMenubarItem(item: MenubarItemConfig, index: number, context: MenubarContextValue): React.ReactNode {
  const { currentPath, spriteUrl: defaultSpriteUrl, IconSprite } = context;

  if (item.separator) {
    return <MenubarSeparator key={`separator-${index}`} />;
  }

  if (item.component) {
    const Component = item.component;
    return <Component key={`component-${index}`} spriteUrl={item.spriteUrl || defaultSpriteUrl} />;
  }

  const itemSpriteUrl = item.spriteUrl || defaultSpriteUrl;
  const isActive = item.href && currentPath === item.href;

  // Sub menu (has items array)
  if (item.items) {
    return (
      <MenubarSub key={`sub-${index}`}>
        <MenubarSubTrigger spriteUrl={itemSpriteUrl} inset={item.inset}>
          {item.iconId && <IconSprite iconId={item.iconId} />}
          {item.label}
        </MenubarSubTrigger>
        <MenubarSubContent>{item.items.map((subItem: MenubarItemConfig, subIndex: number) => renderMenubarItem(subItem, subIndex, context))}</MenubarSubContent>
      </MenubarSub>
    );
  }

  // Checkbox item (has checked property)
  if (item.checked !== undefined) {
    return (
      <MenubarCheckboxItem key={`checkbox-${index}`} spriteUrl={itemSpriteUrl} checked={item.checked} disabled={item.disabled}>
        {item.iconId && <IconSprite iconId={item.iconId} />}
        {item.label}
        {item.shortcut && <MenubarShortcut>{item.shortcut}</MenubarShortcut>}
      </MenubarCheckboxItem>
    );
  }

  // Radio item (has value property)
  if (item.value !== undefined) {
    return (
      <MenubarRadioItem key={`radio-${index}`} spriteUrl={itemSpriteUrl} value={item.value} disabled={item.disabled}>
        {item.iconId && <IconSprite iconId={item.iconId} />}
        {item.label}
        {item.shortcut && <MenubarShortcut>{item.shortcut}</MenubarShortcut>}
      </MenubarRadioItem>
    );
  }

  // Regular item
  const ItemContent = (
    <>
      {item.iconId && <IconSprite iconId={item.iconId} />}
      {item.label}
      {item.shortcut && <MenubarShortcut>{item.shortcut}</MenubarShortcut>}
    </>
  );

  if (item.href) {
    return (
      <MenubarItem key={`item-${index}`} asChild disabled={item.disabled} inset={item.inset} variant={item.variant} className={clsx(isActive && 'bg-accent text-accent-foreground')}>
        <Link href={item.href}>{ItemContent}</Link>
      </MenubarItem>
    );
  }

  return (
    <MenubarItem key={`item-${index}`} disabled={item.disabled} inset={item.inset} variant={item.variant}>
      {ItemContent}
    </MenubarItem>
  );
}

/**
 * Renders a top-level menubar config item (radio group, component, navigation link, or dropdown menu).
 * Automatically adds ChevronDown icon for dropdown menus and handles active state for navigation links.
 */
function renderMenuConfigItem(configItem: MenubarConfigItem, index: number, context: MenubarContextValue): React.ReactNode {
  const { currentPath, IconSprite, spriteUrl } = context;

  // Radio group
  if (configItem.radioGroup) {
    return (
      <MenubarMenu key={`radio-menu-${index}`}>
        <MenubarTrigger>Radio Group</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value={configItem.value}>{configItem.items?.map((item: MenubarItemConfig, itemIndex: number) => renderMenubarItem(item, itemIndex, context))}</MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    );
  }

  // Top-level component (without dropdown)
  if (configItem.component) {
    const Component = configItem.component;
    return (
      <MenubarMenu key={`component-menu-${index}`}>
        <MenubarTrigger asChild>
          <div>
            <Component spriteUrl={spriteUrl} />
          </div>
        </MenubarTrigger>
      </MenubarMenu>
    );
  }

  // Top-level href (nav link without dropdown)
  if (configItem.href) {
    const isActive = currentPath === configItem.href;
    return (
      <MenubarMenu key={`nav-link-${index}`}>
        <MenubarTrigger asChild className={clsx(isActive && 'bg-accent text-accent-foreground')}>
          <Link href={configItem.href}>
            {configItem.iconId && <IconSprite iconId={configItem.iconId} className="mr-2 size-4" />}
            {configItem.label}
          </Link>
        </MenubarTrigger>
      </MenubarMenu>
    );
  }

  // Regular menu with dropdown
  return (
    <MenubarMenu key={`menu-${index}`}>
      <MenubarTrigger>
        {configItem.iconId && <IconSprite iconId={configItem.iconId} className="mr-2 size-4" />}
        {configItem.label || 'Menu'}
        <IconSprite iconId="ChevronDown" className="ml-2 size-3" />
      </MenubarTrigger>
      <MenubarContent>{configItem.items?.map((item: MenubarItemConfig, itemIndex: number) => renderMenubarItem(item, itemIndex, context))}</MenubarContent>
    </MenubarMenu>
  );
}

/**
 * Renders a navigation item for mobile sheet interface with flattened layout.
 * Sub-menus are rendered as expandable sections rather than dropdowns for better touch experience.
 */
function renderSheetItem(item: MenubarItemConfig, index: number, context: MenubarContextValue, onItemClick?: () => void): React.ReactNode {
  const { currentPath, spriteUrl: defaultSpriteUrl, IconSprite } = context;

  if (item.separator) {
    return <div key={`separator-${index}`} className="my-2 h-px bg-border" />;
  }

  if (item.component) {
    const Component = item.component;
    return <Component key={`component-${index}`} spriteUrl={item.spriteUrl || defaultSpriteUrl} />;
  }

  const isActive = item.href && currentPath === item.href;

  // Sub menu items (flatten for mobile)
  if (item.items) {
    return (
      <div key={`submenu-${index}`} className="space-y-2">
        <div className="px-4 py-2 font-medium text-muted-foreground text-sm">
          {item.iconId && <IconSprite iconId={item.iconId} className="mr-2 inline size-4" />}
          {item.label}
        </div>
        <div className="space-y-1 pl-4">{item.items.map((subItem: MenubarItemConfig, subIndex: number) => renderSheetItem(subItem, index + subIndex, context, onItemClick))}</div>
      </div>
    );
  }

  // Regular item
  const ItemContent = (
    <div className={clsx('flex items-center gap-3 rounded-md px-4 py-1 transition-colors hover:bg-accent hover:text-accent-foreground', isActive && 'bg-accent text-accent-foreground')}>
      {item.iconId && <IconSprite iconId={item.iconId} className="size-4" />}
      <span>{item.label}</span>
    </div>
  );

  if (item.href) {
    return (
      <Link key={`item-${index}`} href={item.href} onClick={onItemClick}>
        {ItemContent}
      </Link>
    );
  }

  return <div key={`item-${index}`}>{ItemContent}</div>;
}

/**
 * Renders a top-level menu section for mobile sheet interface.
 * Transforms menubar config items into mobile-friendly vertical sections with clear hierarchy.
 */
function renderSheetMenuSection(configItem: MenubarConfigItem, index: number, context: MenubarContextValue, onItemClick?: () => void): React.ReactNode {
  // Top-level component
  if (configItem.component) {
    const Component = configItem.component;
    return <Component key={`component-${index}`} spriteUrl={context.spriteUrl} />;
  }

  // Top-level href
  if (configItem.href) {
    const isActive = context.currentPath === configItem.href;
    return (
      <Link key={`nav-link-${index}`} href={configItem.href} onClick={onItemClick}>
        <div className={clsx('flex items-center gap-3 rounded-md px-4 py-1 transition-colors hover:bg-accent hover:text-accent-foreground', isActive && 'bg-accent text-accent-foreground')}>
          {configItem.iconId && <context.IconSprite iconId={configItem.iconId} className="size-4" />}
          <span>{configItem.label}</span>
        </div>
      </Link>
    );
  }

  // Regular menu with items
  if (configItem.items) {
    return (
      <div key={`menu-${index}`} className="space-y-1">
        <div className="border-b px-4 py-2 font-medium text-muted-foreground text-sm">
          {configItem.iconId && <context.IconSprite iconId={configItem.iconId} className="mr-2 inline size-4" />}
          {configItem.label || 'Menu'}
        </div>
        <div className="space-y-1">{configItem.items.map((item: MenubarItemConfig, itemIndex: number) => renderSheetItem(item, itemIndex, context, onItemClick))}</div>
      </div>
    );
  }

  return null;
}

/**
 * Responsive navigation menu component that renders as a horizontal menubar on desktop
 * and a slide-out sheet on mobile devices.
 *
 * Features:
 * - Automatic responsive behavior (menubar on desktop, sheet on mobile)
 * - Active route highlighting based on current location
 * - Configurable filtering with navFilters array
 * - Support for sections-based layout with justify-between positioning
 * - Mobile sheet with fixed top-left trigger button
 *
 * @param navFilters - Array of filter values to show only matching menu items
 *
 */
export function NavMenu({ navConfigItems, spriteUrl, navFilters, className }: NavMenubarProps) {
  const location = useLocation();
  const IconSprite = createSpriteIcon(spriteUrl);
  const contextValue: MenubarContextValue = { currentPath: location.pathname, spriteUrl, IconSprite };
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Handle both legacy (menus) and new (sections) config formats
  const sections = navConfigItems.sections || [{ menus: navConfigItems.menus || [] }];

  // Filter sections/menus if navFilters is provided
  const filteredSections = navFilters
    ? sections
      .map((section: { menus: MenubarConfigItem[] }) => ({
        ...section,
        menus: section.menus.filter((menu: MenubarConfigItem) => {
          // If no filter property exists, always show
          if (!menu.filter || !Array.isArray(menu.filter)) {
            return true;
          }
          return menu.filter.some((filterValue: string) => navFilters.includes(filterValue));
        }),
      }))
      .filter((section: { menus: MenubarConfigItem[] }) => section.menus.length > 0)
    : sections;

  // Get all menus for mobile
  const allMenus = filteredSections.flatMap((section: { menus: MenubarConfigItem[] }) => section.menus);

  return (
    <MenubarContext.Provider value={contextValue}>
      {/* Responsive - Fixed in top left */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm" className="flex items-center gap-2 shadow-lg">
              <IconSprite iconId="EllipsisVertical" className="size-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" spriteUrl={spriteUrl} className="w-80 px-2 pt-4">
            <div className="mt-6 flex flex-col gap-2">{allMenus.map((configItem: MenubarConfigItem, index: number) => renderSheetMenuSection(configItem, index, contextValue, () => setIsSheetOpen(false)))}</div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Responsive - md: */}
      <div className="hidden md:block">
        {filteredSections.length <= 1 ? (
          <Menubar className={clsx(className)}>{allMenus.map((configItem: MenubarConfigItem, index: number) => renderMenuConfigItem(configItem, index, contextValue))}</Menubar>
        ) : (
          <Menubar className={clsx(className)}>
            {filteredSections.map((section: { menus: MenubarConfigItem[] }, sectionIndex: number) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: acceptable
              <div key={`section-${sectionIndex}`} className="flex gap-x-2">
                {section.menus.map((configItem: MenubarConfigItem, menuIndex: number) => renderMenuConfigItem(configItem, sectionIndex + menuIndex, contextValue))}
              </div>
            ))}
          </Menubar>
        )}
      </div>
    </MenubarContext.Provider>
  );
}
