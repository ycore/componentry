import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
export function Spinner({ className }) {
    return _jsx("div", { className: clsx(className, 'h-4 w-4 animate-spin rounded-full border-t-2 border-t-current border-r-2 border-r-transparent'), "aria-label": "Loading" });
}
