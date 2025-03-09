import * as Headless from '@headlessui/react';
import type React from 'react';
type AvatarProps = {
    src?: string | null;
    square?: boolean;
    initials?: string;
    alt?: string;
    className?: string;
};
export declare function Avatar({ src, square, initials, alt, className, ...props }: AvatarProps & React.ComponentPropsWithoutRef<'span'>): React.JSX.Element;
export declare const AvatarButton: React.ForwardRefExoticComponent<(AvatarProps & (Omit<Headless.ButtonProps<"button">, "className" | "as"> | Omit<Omit<{
    href: string | import("react-router").LinkProps["to"];
} & Omit<import("react-router").LinkProps, "to"> & React.RefAttributes<HTMLAnchorElement>, "ref">, "className">)) & React.RefAttributes<HTMLElement>>;
export {};
//# sourceMappingURL=avatar.d.ts.map