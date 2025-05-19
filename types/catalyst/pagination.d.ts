import type { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
export declare function Pagination({ 'aria-label': ariaLabel, className, ...props }: ComponentPropsWithoutRef<'nav'>): import("react/jsx-runtime").JSX.Element;
export declare function PaginationPrevious({ href, className, children }: PropsWithChildren<{
    href?: string | null;
    className?: string;
}>): import("react/jsx-runtime").JSX.Element;
export declare function PaginationNext({ href, className, children }: PropsWithChildren<{
    href?: string | null;
    className?: string;
}>): import("react/jsx-runtime").JSX.Element;
export declare function PaginationList({ className, ...props }: ComponentPropsWithoutRef<'span'>): import("react/jsx-runtime").JSX.Element;
export declare function PaginationPage({ href, className, current, children }: PropsWithChildren<{
    href: string;
    className?: string;
    current?: boolean;
}>): import("react/jsx-runtime").JSX.Element;
export declare function PaginationGap({ className, children, ...props }: ComponentPropsWithoutRef<'span'>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=pagination.d.ts.map