import * as Headless from '@headlessui/react';
import type { ComponentPropsWithoutRef } from 'react';
import type { Colors } from './@types/base.types';
export declare function CheckboxGroup({ className, ...props }: ComponentPropsWithoutRef<'div'>): import("react/jsx-runtime").JSX.Element;
export declare function CheckboxField({ className, ...props }: {
    className?: string;
} & Omit<Headless.FieldProps, 'as' | 'className'>): import("react/jsx-runtime").JSX.Element;
export declare function Checkbox({ color, className, ...props }: {
    color?: keyof Colors;
    className?: string;
} & Omit<Headless.CheckboxProps, 'as' | 'className'>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=checkbox.d.ts.map