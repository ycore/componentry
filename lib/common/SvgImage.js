import { jsx as _jsx } from "react/jsx-runtime";
export function SvgImage({ href, ...svgProps }) {
    return (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", ...svgProps, children: _jsx("use", { href: href }) }));
}
