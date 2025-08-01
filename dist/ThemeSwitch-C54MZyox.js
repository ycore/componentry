import { j as r } from "./jsx-runtime--oOP9f8K.js";
import s from "clsx";
import u, { memo as d, useState as f, useEffect as h } from "react";
import { Link as p } from "react-router";
import { useTheme as k } from "next-themes";
import { c as x, s as g } from "./lucide-sprites-CwrWK0ek.js";
const N = d(({ className: e }) => /* @__PURE__ */ r.jsx("div", { className: s("loading-bar", e) })), w = u.forwardRef(function(t, o) {
  return /* @__PURE__ */ r.jsx(p, { ...t, to: t.href, ref: o });
}), n = x(g), j = { theme: { light: "light", dark: "dark" } }, z = ({ theme: e = j, className: t, classTheme: o }) => {
  const [m, c] = f(!1), { resolvedTheme: a, setTheme: l } = k();
  return h(() => c(!0), []), m ? /* @__PURE__ */ r.jsx(
    "button",
    {
      type: "button",
      className: s("size-5 hover:animate-rotate", o),
      onClick: (i) => {
        l(a === e.theme.dark ? e.theme.light : e.theme.dark), i.preventDefault(), i.stopPropagation();
      },
      "aria-label": "theme switch",
      children: a === e.theme.dark ? /* @__PURE__ */ r.jsx(n, { id: "Moon", className: s("size-5", t) }) : /* @__PURE__ */ r.jsx(n, { id: "Sun", className: s("size-5", t) })
    }
  ) : null;
};
export {
  w as L,
  j as T,
  N as a,
  z as b
};
//# sourceMappingURL=ThemeSwitch-C54MZyox.js.map
