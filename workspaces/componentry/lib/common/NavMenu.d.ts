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
    url: string;
    tag?: JSX.Element;
    label?: string;
};
interface NavMenuProps {
    className?: string;
    navConfig: NavConfig;
}
export declare function NavMenu({ className, navConfig }: NavMenuProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=NavMenu.d.ts.map