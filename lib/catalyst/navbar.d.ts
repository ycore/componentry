import * as Headless from '@headlessui/react';
import React from 'react';
export declare function Navbar({ className, ...props }: React.ComponentPropsWithoutRef<'nav'>): import("react/jsx-runtime").JSX.Element;
export declare function NavbarDivider({ className, ...props }: React.ComponentPropsWithoutRef<'div'>): import("react/jsx-runtime").JSX.Element;
export declare function NavbarSection({ className, ...props }: React.ComponentPropsWithoutRef<'div'>): import("react/jsx-runtime").JSX.Element;
export declare function NavbarSpacer({ className, ...props }: React.ComponentPropsWithoutRef<'div'>): import("react/jsx-runtime").JSX.Element;
export declare const NavbarItem: React.ForwardRefExoticComponent<({
    current?: boolean;
    className?: string;
    children: React.ReactNode;
} & (Omit<Headless.ButtonProps<"button">, "className" | "as"> | Omit<Omit<{
    href: string | import("react-router").LinkProps["to"];
} & Omit<import("react-router").LinkProps, "to"> & React.RefAttributes<HTMLAnchorElement>, "ref">, "className">)) & React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>>;
export declare function NavbarLabel({ className, ...props }: React.ComponentPropsWithoutRef<'span'>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=navbar.d.ts.map