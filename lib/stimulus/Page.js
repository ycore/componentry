import { jsx as _jsx } from "react/jsx-runtime";
import { Link } from '../catalyst/link.js';
export function Header({ children }) {
    return (_jsx("header", { className: "print:hidden", children: _jsx(Link, { href: "/", children: _jsx("div", { className: "flex flex-col md:py-8 md:pl-8", children: _jsx("div", { className: "flew-row flex w-full justify-around md:justify-start md:gap-x-8", children: children }) }) }) }));
}
export function Footer({ children }) {
    return (_jsx("footer", { className: "sticky top-[100vh] flex w-full flex-col items-center bg-opacity-100 pt-12 pb-8 print:hidden", children: _jsx("p", { className: "font-lato-100 text-xs uppercase text-opacity-30", children: children }) }));
}
