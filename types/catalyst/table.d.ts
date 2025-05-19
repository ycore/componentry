import type { ComponentPropsWithoutRef } from 'react';
export declare function Table({ bleed, dense, grid, striped, className, children, ...props }: {
    bleed?: boolean;
    dense?: boolean;
    grid?: boolean;
    striped?: boolean;
} & ComponentPropsWithoutRef<'div'>): import("react/jsx-runtime").JSX.Element;
export declare function TableHead({ className, ...props }: ComponentPropsWithoutRef<'thead'>): import("react/jsx-runtime").JSX.Element;
export declare function TableBody(props: ComponentPropsWithoutRef<'tbody'>): import("react/jsx-runtime").JSX.Element;
export declare function TableRow({ href, target, title, className, ...props }: {
    href?: string;
    target?: string;
    title?: string;
} & ComponentPropsWithoutRef<'tr'>): import("react/jsx-runtime").JSX.Element;
export declare function TableHeader({ className, ...props }: ComponentPropsWithoutRef<'th'>): import("react/jsx-runtime").JSX.Element;
export declare function TableCell({ className, children, ...props }: ComponentPropsWithoutRef<'td'>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=table.d.ts.map