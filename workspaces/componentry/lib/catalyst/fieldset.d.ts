import * as Headless from '@headlessui/react';
import type React from 'react';
export declare function Fieldset({ className, ...props }: {
    className?: string;
} & Omit<Headless.FieldsetProps, 'as' | 'className'>): React.JSX.Element;
export declare function Legend({ className, ...props }: {
    className?: string;
} & Omit<Headless.LegendProps, 'as' | 'className'>): React.JSX.Element;
export declare function FieldGroup({ className, ...props }: React.ComponentPropsWithoutRef<'div'>): React.JSX.Element;
export declare function Field({ className, ...props }: {
    className?: string;
} & Omit<Headless.FieldProps, 'as' | 'className'>): React.JSX.Element;
export declare function Label({ className, ...props }: {
    className?: string;
} & Omit<Headless.LabelProps, 'as' | 'className'>): React.JSX.Element;
export declare function Description({ className, ...props }: {
    className?: string;
} & Omit<Headless.DescriptionProps, 'as' | 'className'>): React.JSX.Element;
export declare function ErrorMessage({ className, ...props }: {
    className?: string;
} & Omit<Headless.DescriptionProps, 'as' | 'className'>): React.JSX.Element;
//# sourceMappingURL=fieldset.d.ts.map