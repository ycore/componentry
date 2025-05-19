import * as Headless from '@headlessui/react';
import { Fragment } from 'react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
export declare function Listbox<T>({ className, placeholder, autoFocus, 'aria-label': ariaLabel, children: options, ...props }: {
    className?: string;
    placeholder?: ReactNode;
    autoFocus?: boolean;
    'aria-label'?: string;
    children?: ReactNode;
} & Omit<Headless.ListboxProps<typeof Fragment, T>, 'as' | 'multiple'>): import("react/jsx-runtime").JSX.Element;
export declare function ListboxOption<T>({ children, className, ...props }: {
    className?: string;
    children?: ReactNode;
} & Omit<Headless.ListboxOptionProps<'div', T>, 'as' | 'className'>): import("react/jsx-runtime").JSX.Element;
export declare function ListboxLabel({ className, ...props }: ComponentPropsWithoutRef<'span'>): import("react/jsx-runtime").JSX.Element;
export declare function ListboxDescription({ className, children, ...props }: ComponentPropsWithoutRef<'span'>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=listbox.d.ts.map