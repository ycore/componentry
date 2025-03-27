import { type JSX } from 'react/jsx-runtime';
export type NavConfig = {
    sections: Array<{
        items: NavItem[];
    }>;
};
type NavItem = {
    items: NavItem[];
} | {
    filter?: string[] | boolean[] | number[];
} | {
    filter?: string[] | boolean[] | number[];
    heading?: string;
    label?: never;
    tag: JSX.Element;
    url?: never;
} | {
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
export declare function NavMenu({ className, navConfig, stackClass, filters, children }: NavMenuProps): false | JSX.Element;
export {};
