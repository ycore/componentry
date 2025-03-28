import type React from 'react';
import { type NavConfig } from './NavMenu.js';
interface PageProps {
    className?: string;
    footConfig: FootConfig;
    logoRef: string;
    navConfig: NavConfig;
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
    logoRef: string;
}
export declare function Page({ className, footConfig, logoRef, navConfig, children }: PageProps): import("react/jsx-runtime").JSX.Element;
export declare function Header({ logoRef }: HeaderConfig): import("react/jsx-runtime").JSX.Element;
export declare function Script(footConfig: FootConfig): import("react/jsx-runtime").JSX.Element;
export declare function Footer({ footConfig }: {
    footConfig: FootConfig;
}): import("react/jsx-runtime").JSX.Element;
export {};
