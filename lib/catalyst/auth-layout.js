import { jsx as _jsx } from "react/jsx-runtime";
export function AuthLayout({ children }) {
    return (_jsx("main", { className: "flex min-h-dvh flex-col p-2", children: _jsx("div", { className: "flex grow items-center justify-center p-6 lg:rounded-lg lg:bg-white lg:p-10 lg:shadow-xs lg:ring-1 lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10", children: children }) }));
}
