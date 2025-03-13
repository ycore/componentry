import { type JSX } from 'react/jsx-runtime';
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
    tag: JSX.Element;
    url?: never;
    label?: never;
} | {
    heading?: string;
    url: string;
    label?: string;
    tag: JSX.Element;
} | {
    heading?: string;
    url: string;
    label: string;
    tag?: JSX.Element;
};
interface NavMenuProps extends React.PropsWithChildren {
    className?: string;
    navConfig: NavConfig;
    stackClass?: string;
}
export declare function NavMenu({ className, navConfig, stackClass, children }: NavMenuProps): JSX.Element;
export {};
//# sourceMappingURL=NavMenu.d.ts.map