import * as Headless from '@headlessui/react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
export declare function Navbar({ className, ...props }: ComponentPropsWithoutRef<'nav'>): import("react/jsx-runtime").JSX.Element;
export declare function NavbarDivider({ className, ...props }: ComponentPropsWithoutRef<'div'>): import("react/jsx-runtime").JSX.Element;
export declare function NavbarSection({ className, ...props }: ComponentPropsWithoutRef<'div'>): import("react/jsx-runtime").JSX.Element;
export declare function NavbarSpacer({ className, ...props }: ComponentPropsWithoutRef<'div'>): import("react/jsx-runtime").JSX.Element;
export declare const NavbarItem: import("react").ForwardRefExoticComponent<({
    current?: boolean;
    className?: string;
    children: ReactNode;
} & (Omit<Headless.ButtonProps<"button">, "className" | "as"> | Omit<Omit<{
    href: string | import("react-router").LinkProps["to"];
} & Omit<import("react-router").LinkProps, "to"> & import("react").RefAttributes<HTMLAnchorElement>, "ref">, "className">)) & import("react").RefAttributes<HTMLAnchorElement | HTMLButtonElement>>;
export declare function NavbarLabel({ className, ...props }: ComponentPropsWithoutRef<'span'>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=navbar.d.ts.map