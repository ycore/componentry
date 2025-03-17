import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from '../catalyst/index.js';
import { NavMenu } from './NavMenu.js';
import { SvgImage } from './SvgImage.js';
export function Page({ className, footConfig, logoRef, navConfig, children }) {
    return (_jsxs("div", { className: "min-h-screen", children: [_jsx(Header, { logoRef: logoRef }), _jsx("nav", { className: "mb-6 flex-row justify-between", children: _jsx(NavMenu, { className: className, navConfig: navConfig }) }), children, _jsx(Footer, { footConfig: footConfig })] }));
}
export function Header({ logoRef }) {
    return (_jsx("header", { className: "print:hidden", children: _jsxs(Link, { href: "/", children: [_jsx("div", { className: "flex flex-col md:py-8 md:pl-8", children: _jsxs("div", { className: "flew-row flex w-full justify-around md:justify-start md:gap-x-8", children: [_jsx(SvgImage, { href: logoRef, className: "h-16 text-slate-700 text-opacity-70 md:h-28 dark:text-slate-200 dark:text-opacity-30", viewBox: "0 0 2434 740" }), _jsx("div", { className: "flex flex-col items-center pt-1 md:pt-3", children: _jsx("div", { className: "flex flex-col items-end", children: _jsx("p", { className: "break-normal font-maharlika text-3xl text-slate-700 uppercase md:text-7xl md:tracking-[.25em] dark:text-slate-400" }) }) })] }) }), _jsx("span", { className: "sr-only", children: "NOTHING" })] }) }));
}
export function Script(footConfig) {
    return _jsx(_Fragment, { children: footConfig.scripts?.filter((script) => script)?.map((script, index) => script && _jsx("script", { ...script.props }, index)) });
}
export function Footer({ footConfig }) {
    return (_jsx("footer", { className: "sticky top-[100vh] flex w-full flex-col items-center bg-opacity-100 pt-12 pb-8 print:hidden", children: _jsxs("p", { className: "font-lato-100 text-xs uppercase text-opacity-30", children: ["Copyright \u00A9 ", footConfig?.title, " ", footConfig?.from, " - ", footConfig?.to()] }) }));
}
//# sourceMappingURL=Page.js.map