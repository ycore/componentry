import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
import { Link } from './link.js';
export function Text({ className, ...props }) {
    return _jsx("p", { "data-slot": "text", ...props, className: clsx(className, 'text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400') });
}
export function TextLink({ className, ...props }) {
    return _jsx(Link, { ...props, className: clsx(className, 'text-zinc-950 underline decoration-zinc-950/50 data-hover:decoration-zinc-950 dark:text-white dark:decoration-white/50 dark:data-hover:decoration-white') });
}
export function Strong({ className, ...props }) {
    return _jsx("strong", { ...props, className: clsx(className, 'font-medium text-zinc-950 dark:text-white') });
}
export function Code({ className, ...props }) {
    return (_jsx("code", { ...props, className: clsx(className, 'rounded-sm border border-zinc-950/10 bg-zinc-950/[2.5%] px-0.5 font-medium text-sm text-zinc-950 sm:text-[0.8125rem] dark:border-white/20 dark:bg-white/5 dark:text-white') }));
}
//# sourceMappingURL=text.js.map