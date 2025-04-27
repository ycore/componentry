import { jsx as _jsx } from "react/jsx-runtime";
export function SpriteIcon({ url, id, ...props }) {
    return (
    // biome-ignore lint/a11y/noSvgWithoutTitle:
    _jsx("svg", { ...props, children: id ? _jsx("use", { href: `${url}#${id}` }) : _jsx("use", { href: `${url}` }) }));
}
