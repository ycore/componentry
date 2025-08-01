import { ThemeProvider as d } from "next-themes";
import { L as o } from "./ThemeSwitch-C54MZyox.js";
import { a as n, T as h, b as u } from "./ThemeSwitch-C54MZyox.js";
import { j as e } from "./jsx-runtime--oOP9f8K.js";
import s from "clsx";
function m({ children: r, className: t }) {
  return /* @__PURE__ */ e.jsx("header", { className: "print:hidden", children: /* @__PURE__ */ e.jsx(o, { href: "/", children: /* @__PURE__ */ e.jsx("div", { className: "flex flex-col md:py-8 md:pl-8", children: /* @__PURE__ */ e.jsx("div", { className: s("flew-row flex w-full justify-around md:justify-start md:gap-x-8", t), children: r }) }) }) });
}
function x({ children: r, className: t }) {
  return /* @__PURE__ */ e.jsx("footer", { className: "sticky top-[100vh] flex w-full flex-col items-center bg-opacity-100 pt-12 pb-8 print:hidden", children: /* @__PURE__ */ e.jsx("p", { className: s("text-xs uppercase text-opacity-30", t), children: r }) });
}
export {
  x as Footer,
  m as Header,
  n as LoadingBar,
  h as THEME_OPTIONS,
  d as ThemeProvider,
  u as ThemeSwitch
};
//# sourceMappingURL=impetus.js.map
