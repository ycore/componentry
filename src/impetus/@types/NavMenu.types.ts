import type { ReactNode } from 'react';

export type FilterProps = { filter?: string[] };
export type ComponentProps = { component: ReactNode };
export type WithLabel = { label: ReactNode } & { component?: ReactNode };
export type WithComponent = ComponentProps & { label?: ReactNode };
export type WithLabelOrComponent = WithLabel | WithComponent;
export type WithHref = { href: string; submenu?: never };
export type ValidSubMenuItem = ({ ref: string } & WithLabelOrComponent & WithHref) | (ComponentProps & { ref: string; href?: never; submenu?: never });
export type WithSubmenu = { submenu: ValidSubMenuItem[]; href?: never };
export type SectionItem = { ref: string } & FilterProps & ((WithLabelOrComponent & WithHref) | (WithLabelOrComponent & WithSubmenu) | (ComponentProps & { href?: never; submenu?: never }));
export type Section = { section: SectionItem[] };

export interface StackMenuProps extends React.ComponentProps<'div'> {
  navConfigItems: Section[];
  navFilters?: string[];
  menuClass?: string;
  spriteUrl: string;
}

export interface NavMenuItemProps {
  sectionItem: SectionItem;
  spriteUrl: string;
}
