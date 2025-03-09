import type React from 'react';
export declare function Pagination({ 'aria-label': ariaLabel, className, ...props }: React.ComponentPropsWithoutRef<'nav'>): React.JSX.Element;
export declare function PaginationPrevious({ href, className, children }: React.PropsWithChildren<{
    href?: string | null;
    className?: string;
}>): React.JSX.Element;
export declare function PaginationNext({ href, className, children }: React.PropsWithChildren<{
    href?: string | null;
    className?: string;
}>): React.JSX.Element;
export declare function PaginationList({ className, ...props }: React.ComponentPropsWithoutRef<'span'>): React.JSX.Element;
export declare function PaginationPage({ href, className, current, children }: React.PropsWithChildren<{
    href: string;
    className?: string;
    current?: boolean;
}>): React.JSX.Element;
export declare function PaginationGap({ className, children, ...props }: React.ComponentPropsWithoutRef<'span'>): React.JSX.Element;
//# sourceMappingURL=pagination.d.ts.map