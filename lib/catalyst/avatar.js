import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as Headless from '@headlessui/react';
import clsx from 'clsx';
// biome-ignore lint/style/useImportType: <explanation>
import { forwardRef } from 'react';
import { TouchTarget } from './button.js';
import { Link } from './link.js';
export function Avatar({ src = null, square = false, initials, alt = '', className, ...props }) {
    return (_jsxs("span", { "data-slot": "avatar", ...props, className: clsx(className, 
        // Basic layout
        'inline-grid shrink-0 align-middle [--avatar-radius:20%] *:col-start-1 *:row-start-1', '-outline-offset-1 outline outline-black/10 dark:outline-white/10', 
        // Border radius
        square ? 'rounded-(--avatar-radius) *:rounded-(--avatar-radius)' : 'rounded-full *:rounded-full'), children: [initials && (
            // biome-ignore lint/a11y/noSvgWithoutTitle:
            _jsxs("svg", { className: "size-full select-none fill-current p-[5%] font-medium text-[48px] uppercase", viewBox: "0 0 100 100", "aria-hidden": alt ? undefined : 'true', children: [alt && _jsx("title", { children: alt }), _jsx("text", { x: "50%", y: "50%", alignmentBaseline: "middle", dominantBaseline: "middle", textAnchor: "middle", dy: ".125em", children: initials })] })), src && _jsx("img", { className: "size-full", src: src, alt: alt })] }));
}
export const AvatarButton = forwardRef(function AvatarButton({ src, square = false, initials, alt, className, ...props }, ref) {
    const classes = clsx(className, square ? 'rounded-[20%]' : 'rounded-full', 'relative inline-grid focus:outline-hidden data-focus:outline-2 data-focus:outline-blue-500 data-focus:outline-offset-2');
    return 'href' in props ? (_jsx(Link, { ...props, className: classes, ref: ref, children: _jsx(TouchTarget, { children: _jsx(Avatar, { src: src, square: square, initials: initials, alt: alt }) }) })) : (_jsx(Headless.Button, { ...props, className: classes, ref: ref, children: _jsx(TouchTarget, { children: _jsx(Avatar, { src: src, square: square, initials: initials, alt: alt }) }) }));
});
