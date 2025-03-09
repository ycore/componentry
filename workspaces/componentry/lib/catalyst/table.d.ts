import type React from 'react';
export declare function Table({ bleed, dense, grid, striped, className, children, ...props }: {
    bleed?: boolean;
    dense?: boolean;
    grid?: boolean;
    striped?: boolean;
} & React.ComponentPropsWithoutRef<'div'>): React.JSX.Element;
export declare function TableHead({ className, ...props }: React.ComponentPropsWithoutRef<'thead'>): React.JSX.Element;
export declare function TableBody(props: React.ComponentPropsWithoutRef<'tbody'>): React.JSX.Element;
export declare function TableRow({ href, target, title, className, ...props }: {
    href?: string;
    target?: string;
    title?: string;
} & React.ComponentPropsWithoutRef<'tr'>): React.JSX.Element;
export declare function TableHeader({ className, ...props }: React.ComponentPropsWithoutRef<'th'>): React.JSX.Element;
export declare function TableCell({ className, children, ...props }: React.ComponentPropsWithoutRef<'td'>): React.JSX.Element;
//# sourceMappingURL=table.d.ts.map