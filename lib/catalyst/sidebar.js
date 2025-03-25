import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as Headless from '@headlessui/react';
import clsx from 'clsx';
import { LayoutGroup, motion } from 'framer-motion';
import { forwardRef, useId } from 'react';
import { TouchTarget } from './button.js';
import { Link } from './link.js';
export function Sidebar({ className, ...props }) {
    return _jsx("nav", { ...props, className: clsx(className, 'flex h-full min-h-0 flex-col') });
}
export function SidebarHeader({ className, ...props }) {
    return _jsx("div", { ...props, className: clsx(className, 'flex flex-col border-zinc-950/5 border-b p-4 dark:border-white/5 [&>[data-slot=section]+[data-slot=section]]:mt-2.5') });
}
export function SidebarBody({ className, ...props }) {
    return _jsx("div", { ...props, className: clsx(className, 'flex flex-1 flex-col overflow-y-auto p-4 [&>[data-slot=section]+[data-slot=section]]:mt-8') });
}
export function SidebarFooter({ className, ...props }) {
    return _jsx("div", { ...props, className: clsx(className, 'flex flex-col border-zinc-950/5 border-t p-4 dark:border-white/5 [&>[data-slot=section]+[data-slot=section]]:mt-2.5') });
}
export function SidebarSection({ className, ...props }) {
    const id = useId();
    return (_jsx(LayoutGroup, { id: id, children: _jsx("div", { ...props, "data-slot": "section", className: clsx(className, 'flex flex-col gap-0.5') }) }));
}
export function SidebarDivider({ className, ...props }) {
    return _jsx("hr", { ...props, className: clsx(className, 'lg:-mx-4 my-4 border-zinc-950/5 border-t dark:border-white/5') });
}
export function SidebarSpacer({ className, ...props }) {
    return _jsx("div", { "aria-hidden": "true", ...props, className: clsx(className, 'mt-8 flex-1') });
}
export function SidebarHeading({ className, ...props }) {
    return _jsx("h3", { ...props, className: clsx(className, 'mb-1 px-2 font-medium text-xs/6 text-zinc-500 dark:text-zinc-400') });
}
export const SidebarItem = forwardRef(function SidebarItem({ current, className, children, ...props }, ref) {
    const classes = clsx(
    // Base
    'flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-left font-medium text-base/6 text-zinc-950 sm:py-2 sm:text-sm/5', 
    // Leading icon/icon-only
    '*:data-[slot=icon]:size-6 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:fill-zinc-500 sm:*:data-[slot=icon]:size-5', 
    // Trailing icon (down chevron or similar)
    '*:last:data-[slot=icon]:ml-auto *:last:data-[slot=icon]:size-5 sm:*:last:data-[slot=icon]:size-4', 
    // Avatar
    '*:data-[slot=avatar]:-m-0.5 *:data-[slot=avatar]:size-7 sm:*:data-[slot=avatar]:size-6 *:data-[slot=avatar]:[--ring-opacity:10%]', 
    // Hover
    'data-hover:bg-zinc-950/5 data-hover:*:data-[slot=icon]:fill-zinc-950', 
    // Active
    'data-active:bg-zinc-950/5 data-active:*:data-[slot=icon]:fill-zinc-950', 
    // Current
    'data-current:*:data-[slot=icon]:fill-zinc-950', 
    // Dark mode
    'dark:text-white dark:*:data-[slot=icon]:fill-zinc-400', 'dark:data-hover:bg-white/5 dark:data-hover:*:data-[slot=icon]:fill-white', 'dark:data-active:bg-white/5 dark:data-active:*:data-[slot=icon]:fill-white', 'dark:data-current:*:data-[slot=icon]:fill-white');
    return (_jsxs("span", { className: clsx(className, 'relative'), children: [current && _jsx(motion.span, { layoutId: "current-indicator", className: "-left-4 absolute inset-y-2 w-0.5 rounded-full bg-zinc-950 dark:bg-white" }), 'href' in props ? (_jsx(Headless.CloseButton, { as: Link, ...props, className: classes, "data-current": current ? 'true' : undefined, ref: ref, children: _jsx(TouchTarget, { children: children }) })) : (_jsx(Headless.Button, { ...props, className: clsx('cursor-default', classes), "data-current": current ? 'true' : undefined, ref: ref, children: _jsx(TouchTarget, { children: children }) }))] }));
});
export function SidebarLabel({ className, ...props }) {
    return _jsx("span", { ...props, className: clsx(className, 'truncate') });
}
//# sourceMappingURL=sidebar.js.map