import * as Headless from '@headlessui/react';
import type { ComponentPropsWithoutRef } from 'react';
import type { AvatarProps } from './@types/avatar.types';
export declare function Avatar({ src, square, initials, alt, className, ...props }: AvatarProps & ComponentPropsWithoutRef<'span'>): import("react/jsx-runtime").JSX.Element;
export declare const AvatarButton: import("react").ForwardRefExoticComponent<(AvatarProps & (Omit<Headless.ButtonProps<"button">, "className" | "as"> | Omit<Omit<{
    href: string | import("react-router").LinkProps["to"];
} & Omit<import("react-router").LinkProps, "to"> & import("react").RefAttributes<HTMLAnchorElement>, "ref">, "className">)) & import("react").RefAttributes<HTMLElement>>;
//# sourceMappingURL=avatar.d.ts.map