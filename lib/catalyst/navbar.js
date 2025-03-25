import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as Headless from '@headlessui/react';
import clsx from 'clsx';
import { LayoutGroup, motion } from 'framer-motion';
import { forwardRef, useId } from 'react';
import { TouchTarget } from './button.js';
import { Link } from './link.js';
export function Navbar({ className, ...props }) {
    return _jsx("nav", { ...props, className: clsx(className, 'flex flex-1 items-center gap-4 py-2.5') });
}
export function NavbarDivider({ className, ...props }) {
    return _jsx("div", { "aria-hidden": "true", ...props, className: clsx(className, 'h-6 w-px bg-zinc-950/10 dark:bg-white/10') });
}
export function NavbarSection({ className, ...props }) {
    const id = useId();
    return (_jsx(LayoutGroup, { id: id, children: _jsx("div", { ...props, className: clsx(className, 'flex items-center gap-3') }) }));
}
export function NavbarSpacer({ className, ...props }) {
    return _jsx("div", { "aria-hidden": "true", ...props, className: clsx(className, '-ml-4 flex-1') });
}
export const NavbarItem = forwardRef(function NavbarItem({ current, className, children, ...props }, ref) {
    const classes = clsx(
    // Base
    'relative flex min-w-0 items-center gap-3 rounded-lg p-2 text-left font-medium text-base/6 text-zinc-950 sm:text-sm/5', 
    // Leading icon/icon-only
    '*:data-[slot=icon]:size-6 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:fill-zinc-500 sm:*:data-[slot=icon]:size-5', 
    // Trailing icon (down chevron or similar)
    '*:not-nth-2:last:data-[slot=icon]:ml-auto *:not-nth-2:last:data-[slot=icon]:size-5 sm:*:not-nth-2:last:data-[slot=icon]:size-4', 
    // Avatar
    '*:data-[slot=avatar]:-m-0.5 *:data-[slot=avatar]:size-7 sm:*:data-[slot=avatar]:size-6 *:data-[slot=avatar]:[--avatar-radius:var(--radius)] *:data-[slot=avatar]:[--ring-opacity:10%]', 
    // Hover
    'data-hover:bg-zinc-950/5 data-hover:*:data-[slot=icon]:fill-zinc-950', 
    // Active
    'data-active:bg-zinc-950/5 data-active:*:data-[slot=icon]:fill-zinc-950', 
    // Dark mode
    'dark:text-white dark:*:data-[slot=icon]:fill-zinc-400', 'dark:data-hover:bg-white/5 dark:data-hover:*:data-[slot=icon]:fill-white', 'dark:data-active:bg-white/5 dark:data-active:*:data-[slot=icon]:fill-white');
    return (_jsxs("span", { className: clsx(className, 'relative'), children: [current && _jsx(motion.span, { layoutId: "current-indicator", className: "-bottom-2.5 absolute inset-x-2 h-0.5 rounded-full bg-zinc-950 dark:bg-white" }), 'href' in props ? (_jsx(Link, { ...props, className: classes, "data-current": current ? 'true' : undefined, ref: ref, children: _jsx(TouchTarget, { children: children }) })) : (_jsx(Headless.Button, { ...props, className: clsx('cursor-default', classes), "data-current": current ? 'true' : undefined, ref: ref, children: _jsx(TouchTarget, { children: children }) }))] }));
});
export function NavbarLabel({ className, ...props }) {
    return _jsx("span", { ...props, className: clsx(className, 'truncate') });
}
//# sourceMappingURL=navbar.js.map