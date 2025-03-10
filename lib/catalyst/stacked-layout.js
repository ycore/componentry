import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as Headless from '@headlessui/react';
import { useState } from 'react';
import { NavbarItem } from './navbar.js';
function OpenMenuIcon() {
    return (_jsx("svg", { "data-slot": "icon", viewBox: "0 0 20 20", "aria-hidden": "true", children: _jsx("path", { d: "M2 6.75C2 6.33579 2.33579 6 2.75 6H17.25C17.6642 6 18 6.33579 18 6.75C18 7.16421 17.6642 7.5 17.25 7.5H2.75C2.33579 7.5 2 7.16421 2 6.75ZM2 13.25C2 12.8358 2.33579 12.5 2.75 12.5H17.25C17.6642 12.5 18 12.8358 18 13.25C18 13.6642 17.6642 14 17.25 14H2.75C2.33579 14 2 13.6642 2 13.25Z" }) }));
}
function CloseMenuIcon() {
    return (_jsx("svg", { "data-slot": "icon", viewBox: "0 0 20 20", "aria-hidden": "true", children: _jsx("path", { d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" }) }));
}
function MobileSidebar({ open, close, children }) {
    return (_jsxs(Headless.Dialog, { open: open, onClose: close, className: "lg:hidden", children: [_jsx(Headless.DialogBackdrop, { transition: true, className: "fixed inset-0 bg-black/30 transition data-closed:opacity-0 data-enter:duration-300 data-leave:duration-200 data-enter:ease-out data-leave:ease-in" }), _jsx(Headless.DialogPanel, { transition: true, className: "data-closed:-translate-x-full fixed inset-y-0 w-full max-w-80 p-2 transition duration-300 ease-in-out", children: _jsxs("div", { className: "flex h-full flex-col rounded-lg bg-white shadow-xs ring-1 ring-zinc-950/5 dark:bg-zinc-900 dark:ring-white/10", children: [_jsx("div", { className: "-mb-3 px-4 pt-3", children: _jsx(Headless.CloseButton, { as: NavbarItem, "aria-label": "Close navigation", children: _jsx(CloseMenuIcon, {}) }) }), children] }) })] }));
}
export function StackedLayout({ navbar, sidebar, children }) {
    const [showSidebar, setShowSidebar] = useState(false);
    return (_jsxs("div", { className: "relative isolate flex min-h-svh w-full flex-col bg-white lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950", children: [_jsx(MobileSidebar, { open: showSidebar, close: () => setShowSidebar(false), children: sidebar }), _jsxs("header", { className: "flex items-center px-4", children: [_jsx("div", { className: "py-2.5 lg:hidden", children: _jsx(NavbarItem, { onClick: () => setShowSidebar(true), "aria-label": "Open navigation", children: _jsx(OpenMenuIcon, {}) }) }), _jsx("div", { className: "min-w-0 flex-1", children: navbar })] }), _jsx("main", { className: "flex flex-1 flex-col pb-2 lg:px-2", children: _jsx("div", { className: "grow p-6 lg:rounded-lg lg:bg-white lg:p-10 lg:shadow-xs lg:ring-1 lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10", children: _jsx("div", { className: "mx-auto max-w-6xl", children: children }) }) })] }));
}
//# sourceMappingURL=stacked-layout.js.map