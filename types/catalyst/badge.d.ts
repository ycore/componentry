import * as Headless from '@headlessui/react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { BadgeProps } from './@types/badge.types';
export declare function Badge({ color, className, ...props }: BadgeProps & ComponentPropsWithoutRef<'span'>): import("react/jsx-runtime").JSX.Element;
export declare const BadgeButton: import("react").ForwardRefExoticComponent<(BadgeProps & ({
    className?: string;
    children: ReactNode;
} & (Omit<Headless.ButtonProps<"button">, "className" | "as"> | Omit<Omit<{
    href: string | import("react-router").LinkProps["to"];
} & Omit<import("react-router").LinkProps, "to"> & import("react").RefAttributes<HTMLAnchorElement>, "ref">, "className">))) & import("react").RefAttributes<HTMLElement>>;
//# sourceMappingURL=badge.d.ts.map