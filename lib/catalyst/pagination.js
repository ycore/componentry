import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import clsx from 'clsx';
import { Button } from './button.js';
export function Pagination({ 'aria-label': ariaLabel = 'Page navigation', className, ...props }) {
    return _jsx("nav", { "aria-label": ariaLabel, ...props, className: clsx(className, 'flex gap-x-2') });
}
export function PaginationPrevious({ href = null, className, children = 'Previous' }) {
    return (_jsx("span", { className: clsx(className, 'grow basis-0'), children: _jsxs(Button, { ...(href === null ? { disabled: true } : { href }), plain: true, "aria-label": "Previous page", children: [_jsx("svg", { className: "stroke-current", "data-slot": "icon", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: _jsx("path", { d: "M2.75 8H13.25M2.75 8L5.25 5.5M2.75 8L5.25 10.5", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }) }), children] }) }));
}
export function PaginationNext({ href = null, className, children = 'Next' }) {
    return (_jsx("span", { className: clsx(className, 'flex grow basis-0 justify-end'), children: _jsxs(Button, { ...(href === null ? { disabled: true } : { href }), plain: true, "aria-label": "Next page", children: [children, _jsx("svg", { className: "stroke-current", "data-slot": "icon", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: _jsx("path", { d: "M13.25 8L2.75 8M13.25 8L10.75 10.5M13.25 8L10.75 5.5", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }) })] }) }));
}
export function PaginationList({ className, ...props }) {
    return _jsx("span", { ...props, className: clsx(className, 'hidden items-baseline gap-x-2 sm:flex') });
}
export function PaginationPage({ href, className, current = false, children }) {
    return (_jsx(Button, { href: href, plain: true, "aria-label": `Page ${children}`, "aria-current": current ? 'page' : undefined, className: clsx(className, 'before:-inset-px min-w-[2.25rem] before:absolute before:rounded-lg', current && 'before:bg-zinc-950/5 dark:before:bg-white/10'), children: _jsx("span", { className: "-mx-0.5", children: children }) }));
}
export function PaginationGap({ className, children = _jsx(_Fragment, { children: "\u2026" }), ...props }) {
    return (_jsx("span", { "aria-hidden": "true", ...props, className: clsx(className, 'w-[2.25rem] select-none text-center font-semibold text-sm/6 text-zinc-950 dark:text-white'), children: children }));
}
