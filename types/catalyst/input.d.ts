import * as Headless from '@headlessui/react';
import type { ComponentPropsWithoutRef } from 'react';
import type { DateType } from './@types/input.types';
export declare function InputGroup({ children }: ComponentPropsWithoutRef<'span'>): import("react/jsx-runtime").JSX.Element;
export declare const Input: import("react").ForwardRefExoticComponent<{
    className?: string;
    type?: "email" | "number" | "password" | "search" | "tel" | "text" | "url" | DateType;
} & Omit<Headless.InputProps<"input">, "className" | "as"> & import("react").RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=input.d.ts.map