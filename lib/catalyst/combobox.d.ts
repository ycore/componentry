import * as Headless from '@headlessui/react';
export declare function Combobox<T>({ options, displayValue, filter, anchor, className, placeholder, autoFocus, 'aria-label': ariaLabel, children, ...props }: {
    options: T[];
    displayValue: (value: T | null) => string | undefined;
    filter?: (value: T, query: string) => boolean;
    className?: string;
    placeholder?: string;
    autoFocus?: boolean;
    'aria-label'?: string;
    children: (value: NonNullable<T>) => React.ReactElement;
} & Omit<Headless.ComboboxProps<T, false>, 'as' | 'multiple' | 'children'> & {
    anchor?: 'top' | 'bottom';
}): import("react/jsx-runtime").JSX.Element;
export declare function ComboboxOption<T>({ children, className, ...props }: {
    className?: string;
    children?: React.ReactNode;
} & Omit<Headless.ComboboxOptionProps<'div', T>, 'as' | 'className'>): import("react/jsx-runtime").JSX.Element;
export declare function ComboboxLabel({ className, ...props }: React.ComponentPropsWithoutRef<'span'>): import("react/jsx-runtime").JSX.Element;
export declare function ComboboxDescription({ className, children, ...props }: React.ComponentPropsWithoutRef<'span'>): import("react/jsx-runtime").JSX.Element;
