import { type ReactNode } from 'react';
import { SidebarLayout } from '../catalyst';
type FilterProps = {
    filter?: string[];
};
type ComponentProps = {
    component: ReactNode;
};
type WithLabel = {
    label: ReactNode;
} & {
    component?: ReactNode;
};
type WithComponent = ComponentProps & {
    label?: ReactNode;
};
type WithLabelOrComponent = WithLabel | WithComponent;
type WithHref = {
    href: string;
    submenu?: never;
};
type ValidSubMenuItem = ({
    ref: string;
} & WithLabelOrComponent & WithHref) | (ComponentProps & {
    ref: string;
    href?: never;
    submenu?: never;
});
type WithSubmenu = {
    submenu: ValidSubMenuItem[];
    href?: never;
};
export type SectionItem = {
    ref: string;
} & FilterProps & ((WithLabelOrComponent & WithHref) | (WithLabelOrComponent & WithSubmenu) | (ComponentProps & {
    href?: never;
    submenu?: never;
}));
export type Section = {
    section: SectionItem[];
};
export interface NavMenuProps extends Omit<React.ComponentProps<typeof SidebarLayout>, 'navbar' | 'sidebar'> {
    navConfigItems: Section[];
    navFilters?: string[];
    menuClass?: string;
}
export declare const SideMenu: ({ navConfigItems, navFilters, menuClass, ...props }: NavMenuProps) => import("react/jsx-runtime").JSX.Element;
export declare const StackMenu: ({ navConfigItems, navFilters, menuClass, ...props }: NavMenuProps) => import("react/jsx-runtime").JSX.Element;
export declare const NavMenuFactory: ({ navConfigItems, navFilters }: NavMenuProps) => {
    navbar: import("react/jsx-runtime").JSX.Element;
    sidebar: import("react/jsx-runtime").JSX.Element;
};
export {};
