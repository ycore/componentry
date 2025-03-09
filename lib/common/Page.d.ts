import type React from 'react';
import { type NavConfig } from './NavMenu.js';
interface PageProps {
    footConfig: FootConfig;
    imgConfig: ImgConfig;
    navConfig: NavConfig;
    className?: string;
    children: React.ReactNode;
}
interface FootConfig {
    title: string;
    from: string;
    to: () => number;
    scripts?: Array<{
        props: React.HTMLProps<HTMLScriptElement>;
    }>;
}
interface HeaderConfig {
    imgConfig: ImgConfig;
}
interface Config<T> {
    [key: string]: T | Config<T> | Config<T>[];
}
type ImgConfig = Config<string>;
export declare function Page({ footConfig, imgConfig, navConfig, className, children }: PageProps): React.JSX.Element;
export declare function Header({ imgConfig }: HeaderConfig): React.JSX.Element;
export declare function Script(footConfig: FootConfig): React.JSX.Element;
export declare function Footer({ footConfig }: {
    footConfig: FootConfig;
}): React.JSX.Element;
export {};
//# sourceMappingURL=Page.d.ts.map