import * as Headless from '@headlessui/react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { Sizes } from './@types/base.types';
import { Text } from './text';
declare const sizes: Sizes;
export declare function Dialog({ size, className, children, ...props }: {
    size?: keyof typeof sizes;
    className?: string;
    children: ReactNode;
} & Omit<Headless.DialogProps, 'as' | 'className'>): import("react/jsx-runtime").JSX.Element;
export declare function DialogTitle({ className, ...props }: {
    className?: string;
} & Omit<Headless.DialogTitleProps, 'as' | 'className'>): import("react/jsx-runtime").JSX.Element;
export declare function DialogDescription({ className, ...props }: {
    className?: string;
} & Omit<Headless.DescriptionProps<typeof Text>, 'as' | 'className'>): import("react/jsx-runtime").JSX.Element;
export declare function DialogBody({ className, ...props }: ComponentPropsWithoutRef<'div'>): import("react/jsx-runtime").JSX.Element;
export declare function DialogActions({ className, ...props }: ComponentPropsWithoutRef<'div'>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=dialog.d.ts.map