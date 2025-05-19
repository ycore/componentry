import * as Headless from '@headlessui/react';
import type { ComponentPropsWithoutRef } from 'react';
import type { Colors } from './@types/base.types';
export declare function SwitchGroup({ className, ...props }: ComponentPropsWithoutRef<'div'>): import("react/jsx-runtime").JSX.Element;
export declare function SwitchField({ className, ...props }: {
    className?: string;
} & Omit<Headless.FieldProps, 'as' | 'className'>): import("react/jsx-runtime").JSX.Element;
export declare function Switch({ color, className, ...props }: {
    color?: keyof Colors;
    className?: string;
} & Omit<Headless.SwitchProps, 'as' | 'className' | 'children'>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=switch.d.ts.map