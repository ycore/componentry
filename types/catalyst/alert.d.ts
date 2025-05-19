import * as Headless from '@headlessui/react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { Sizes } from './@types/base.types';
import { Text } from './text';
declare const sizes: Sizes;
export declare function Alert({ size, className, children, ...props }: {
    size?: keyof typeof sizes;
    className?: string;
    children: ReactNode;
} & Omit<Headless.DialogProps, 'as' | 'className'>): import("react/jsx-runtime").JSX.Element;
export declare function AlertTitle({ className, ...props }: {
    className?: string;
} & Omit<Headless.DialogTitleProps, 'as' | 'className'>): import("react/jsx-runtime").JSX.Element;
export declare function AlertDescription({ className, ...props }: {
    className?: string;
} & Omit<Headless.DescriptionProps<typeof Text>, 'as' | 'className'>): import("react/jsx-runtime").JSX.Element;
export declare function AlertBody({ className, ...props }: ComponentPropsWithoutRef<'div'>): import("react/jsx-runtime").JSX.Element;
export declare function AlertActions({ className, ...props }: ComponentPropsWithoutRef<'div'>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=alert.d.ts.map