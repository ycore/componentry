import * as Headless from '@headlessui/react';
import type { Colors } from './@types/base.types';
export declare function RadioGroup({ className, ...props }: {
    className?: string;
} & Omit<Headless.RadioGroupProps, 'as' | 'className'>): import("react/jsx-runtime").JSX.Element;
export declare function RadioField({ className, ...props }: {
    className?: string;
} & Omit<Headless.FieldProps, 'as' | 'className'>): import("react/jsx-runtime").JSX.Element;
export declare function Radio({ color, className, ...props }: {
    color?: keyof Colors;
    className?: string;
} & Omit<Headless.RadioProps, 'as' | 'className' | 'children'>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=radio.d.ts.map