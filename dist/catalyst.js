import { j as e } from "./jsx-runtime--oOP9f8K.js";
import * as c from "@headlessui/react";
import t from "clsx";
import _, { forwardRef as u, useState as z, Fragment as H, useId as D, createContext as B, useContext as w } from "react";
import { Link as M } from "react-router";
const x = _.forwardRef(function(a, o) {
  return /* @__PURE__ */ e.jsx(c.DataInteractive, { children: /* @__PURE__ */ e.jsx(M, { ...a, to: a.href, ref: o }) });
});
function C({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx("p", { "data-slot": "text", ...a, className: t(r, "text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400") });
}
function O({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx(x, { ...a, className: t(r, "text-zinc-950 underline decoration-zinc-950/50 data-hover:decoration-zinc-950 dark:text-white dark:decoration-white/50 dark:data-hover:decoration-white") });
}
function $({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx("strong", { ...a, className: t(r, "font-medium text-zinc-950 dark:text-white") });
}
function I({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx("code", { ...a, className: t(r, "rounded-sm border border-zinc-950/10 bg-zinc-950/[2.5%] px-0.5 font-medium text-sm text-zinc-950 sm:text-[0.8125rem] dark:border-white/20 dark:bg-white/5 dark:text-white") });
}
const P = {
  xs: "sm:max-w-xs",
  sm: "sm:max-w-sm",
  md: "sm:max-w-md",
  lg: "sm:max-w-lg",
  xl: "sm:max-w-xl",
  "2xl": "sm:max-w-2xl",
  "3xl": "sm:max-w-3xl",
  "4xl": "sm:max-w-4xl",
  "5xl": "sm:max-w-5xl"
};
function F({ size: r = "md", className: a, children: o, ...i }) {
  return /* @__PURE__ */ e.jsxs(c.Dialog, { ...i, children: [
    /* @__PURE__ */ e.jsx(
      c.DialogBackdrop,
      {
        transition: !0,
        className: "fixed inset-0 flex w-screen justify-center overflow-y-auto bg-zinc-950/15 px-2 py-2 transition duration-100 focus:outline-0 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in sm:px-6 sm:py-8 lg:px-8 lg:py-16 dark:bg-zinc-950/50"
      }
    ),
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 w-screen overflow-y-auto pt-6 sm:pt-0", children: /* @__PURE__ */ e.jsx("div", { className: "grid min-h-full grid-rows-[1fr_auto_1fr] justify-items-center p-8 sm:grid-rows-[1fr_auto_3fr] sm:p-4", children: /* @__PURE__ */ e.jsx(
      c.DialogPanel,
      {
        transition: !0,
        className: t(
          a,
          P[r],
          "row-start-2 w-full rounded-2xl bg-white p-8 shadow-lg ring-1 ring-zinc-950/10 sm:rounded-2xl sm:p-6 dark:bg-zinc-900 dark:ring-white/10 forced-colors:outline",
          "transition duration-100 will-change-transform data-closed:data-enter:scale-95 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
        ),
        children: o
      }
    ) }) })
  ] });
}
function A({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx(c.DialogTitle, { ...a, className: t(r, "text-balance text-center font-semibold text-base/6 text-zinc-950 sm:text-wrap sm:text-left sm:text-sm/6 dark:text-white") });
}
function R({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx(c.Description, { as: C, ...a, className: t(r, "mt-2 text-pretty text-center sm:text-left") });
}
function G({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx("div", { ...a, className: t(r, "mt-4") });
}
function W({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx("div", { ...a, className: t(r, "mt-6 flex flex-col-reverse items-center justify-end gap-3 *:w-full sm:mt-4 sm:flex-row sm:*:w-auto") });
}
function Sa({ children: r }) {
  return /* @__PURE__ */ e.jsx("main", { className: "flex min-h-dvh flex-col p-2", children: /* @__PURE__ */ e.jsx("div", { className: "flex grow items-center justify-center p-6 lg:rounded-lg lg:bg-white lg:p-10 lg:shadow-xs lg:ring-1 lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10", children: r }) });
}
const p = {
  base: [
    // Base
    "relative isolate inline-flex items-baseline justify-center gap-x-2 rounded-lg border text-base/6 font-semibold",
    // Sizing
    "px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)] sm:text-sm/6",
    // Focus
    "focus:outline-hidden data-focus:outline data-focus:outline-2 data-focus:outline-offset-2 data-focus:outline-blue-500",
    // Disabled
    "data-disabled:opacity-50",
    // Icon
    "*:data-[slot=icon]:-mx-0.5 *:data-[slot=icon]:my-0.5 *:data-[slot=icon]:size-5 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:self-center *:data-[slot=icon]:text-(--btn-icon) sm:*:data-[slot=icon]:my-1 sm:*:data-[slot=icon]:size-4 forced-colors:[--btn-icon:ButtonText] forced-colors:data-hover:[--btn-icon:ButtonText]"
  ],
  solid: [
    // Optical border, implemented as the button background to avoid corner artifacts
    "border-transparent bg-(--btn-border)",
    // Dark mode: border is rendered on `after` so background is set to button background
    "dark:bg-(--btn-bg)",
    // Button background, implemented as foreground layer to stack on top of pseudo-border layer
    "before:absolute before:inset-0 before:-z-10 before:rounded-[calc(var(--radius-lg)-1px)] before:bg-(--btn-bg)",
    // Drop shadow, applied to the inset `before` layer so it blends with the border
    "before:shadow-sm",
    // Background color is moved to control and shadow is removed in dark mode so hide `before` pseudo
    "dark:before:hidden",
    // Dark mode: Subtle white outline is applied using a border
    "dark:border-white/5",
    // Shim/overlay, inset to match button foreground and used for hover state + highlight shadow
    "after:absolute after:inset-0 after:-z-10 after:rounded-[calc(var(--radius-lg)-1px)]",
    // Inner highlight shadow
    "after:shadow-[shadow:inset_0_1px_--theme(--color-white/15%)]",
    // White overlay on hover
    "data-active:after:bg-(--btn-hover-overlay) data-hover:after:bg-(--btn-hover-overlay)",
    // Dark mode: `after` layer expands to cover entire button
    "dark:after:-inset-px dark:after:rounded-lg",
    // Disabled
    "data-disabled:before:shadow-none data-disabled:after:shadow-none"
  ],
  outline: [
    // Base
    "border-zinc-950/10 text-zinc-950 data-active:bg-zinc-950/[2.5%] data-hover:bg-zinc-950/[2.5%]",
    // Dark mode
    "dark:border-white/15 dark:text-white dark:[--btn-bg:transparent] dark:data-active:bg-white/5 dark:data-hover:bg-white/5",
    // Icon
    "[--btn-icon:var(--color-zinc-500)] data-active:[--btn-icon:var(--color-zinc-700)] data-hover:[--btn-icon:var(--color-zinc-700)] dark:data-active:[--btn-icon:var(--color-zinc-400)] dark:data-hover:[--btn-icon:var(--color-zinc-400)]"
  ],
  plain: [
    // Base
    "border-transparent text-zinc-950 data-active:bg-zinc-950/5 data-hover:bg-zinc-950/5",
    // Dark mode
    "dark:text-white dark:data-active:bg-white/10 dark:data-hover:bg-white/10",
    // Icon
    "[--btn-icon:var(--color-zinc-500)] data-active:[--btn-icon:var(--color-zinc-700)] data-hover:[--btn-icon:var(--color-zinc-700)] dark:[--btn-icon:var(--color-zinc-500)] dark:data-active:[--btn-icon:var(--color-zinc-400)] dark:data-hover:[--btn-icon:var(--color-zinc-400)]"
  ],
  colors: {
    "dark/zinc": [
      "text-white [--btn-bg:var(--color-zinc-900)] [--btn-border:var(--color-zinc-950)]/90 [--btn-hover-overlay:var(--color-white)]/10",
      "dark:text-white dark:[--btn-bg:var(--color-zinc-600)] dark:[--btn-hover-overlay:var(--color-white)]/5",
      "[--btn-icon:var(--color-zinc-400)] data-active:[--btn-icon:var(--color-zinc-300)] data-hover:[--btn-icon:var(--color-zinc-300)]"
    ],
    light: [
      "text-zinc-950 [--btn-bg:white] [--btn-border:var(--color-zinc-950)]/10 [--btn-hover-overlay:var(--color-zinc-950)]/[2.5%] data-active:[--btn-border:var(--color-zinc-950)]/15 data-hover:[--btn-border:var(--color-zinc-950)]/15",
      "dark:text-white dark:[--btn-hover-overlay:var(--color-white)]/5 dark:[--btn-bg:var(--color-zinc-800)]",
      "[--btn-icon:var(--color-zinc-500)] data-active:[--btn-icon:var(--color-zinc-700)] data-hover:[--btn-icon:var(--color-zinc-700)] dark:[--btn-icon:var(--color-zinc-500)] dark:data-active:[--btn-icon:var(--color-zinc-400)] dark:data-hover:[--btn-icon:var(--color-zinc-400)]"
    ],
    "dark/white": [
      "text-white [--btn-bg:var(--color-zinc-900)] [--btn-border:var(--color-zinc-950)]/90 [--btn-hover-overlay:var(--color-white)]/10",
      "dark:text-zinc-950 dark:[--btn-bg:white] dark:[--btn-hover-overlay:var(--color-zinc-950)]/5",
      "[--btn-icon:var(--color-zinc-400)] data-active:[--btn-icon:var(--color-zinc-300)] data-hover:[--btn-icon:var(--color-zinc-300)] dark:[--btn-icon:var(--color-zinc-500)] dark:data-active:[--btn-icon:var(--color-zinc-400)] dark:data-hover:[--btn-icon:var(--color-zinc-400)]"
    ],
    dark: [
      "text-white [--btn-bg:var(--color-zinc-900)] [--btn-border:var(--color-zinc-950)]/90 [--btn-hover-overlay:var(--color-white)]/10",
      "dark:[--btn-hover-overlay:var(--color-white)]/5 dark:[--btn-bg:var(--color-zinc-800)]",
      "[--btn-icon:var(--color-zinc-400)] data-active:[--btn-icon:var(--color-zinc-300)] data-hover:[--btn-icon:var(--color-zinc-300)]"
    ],
    white: [
      "text-zinc-950 [--btn-bg:white] [--btn-border:var(--color-zinc-950)]/10 [--btn-hover-overlay:var(--color-zinc-950)]/[2.5%] data-active:[--btn-border:var(--color-zinc-950)]/15 data-hover:[--btn-border:var(--color-zinc-950)]/15",
      "dark:[--btn-hover-overlay:var(--color-zinc-950)]/5",
      "[--btn-icon:var(--color-zinc-400)] data-active:[--btn-icon:var(--color-zinc-500)] data-hover:[--btn-icon:var(--color-zinc-500)]"
    ],
    zinc: [
      "text-white [--btn-hover-overlay:var(--color-white)]/10 [--btn-bg:var(--color-zinc-600)] [--btn-border:var(--color-zinc-700)]/90",
      "dark:[--btn-hover-overlay:var(--color-white)]/5",
      "[--btn-icon:var(--color-zinc-400)] data-active:[--btn-icon:var(--color-zinc-300)] data-hover:[--btn-icon:var(--color-zinc-300)]"
    ],
    indigo: [
      "text-white [--btn-hover-overlay:var(--color-white)]/10 [--btn-bg:var(--color-indigo-500)] [--btn-border:var(--color-indigo-600)]/90",
      "[--btn-icon:var(--color-indigo-300)] data-active:[--btn-icon:var(--color-indigo-200)] data-hover:[--btn-icon:var(--color-indigo-200)]"
    ],
    cyan: ["text-cyan-950 [--btn-bg:var(--color-cyan-300)] [--btn-border:var(--color-cyan-400)]/80 [--btn-hover-overlay:var(--color-white)]/25", "[--btn-icon:var(--color-cyan-500)]"],
    red: [
      "text-white [--btn-hover-overlay:var(--color-white)]/10 [--btn-bg:var(--color-red-600)] [--btn-border:var(--color-red-700)]/90",
      "[--btn-icon:var(--color-red-300)] data-active:[--btn-icon:var(--color-red-200)] data-hover:[--btn-icon:var(--color-red-200)]"
    ],
    orange: [
      "text-white [--btn-hover-overlay:var(--color-white)]/10 [--btn-bg:var(--color-orange-500)] [--btn-border:var(--color-orange-600)]/90",
      "[--btn-icon:var(--color-orange-300)] data-active:[--btn-icon:var(--color-orange-200)] data-hover:[--btn-icon:var(--color-orange-200)]"
    ],
    amber: ["text-amber-950 [--btn-hover-overlay:var(--color-white)]/25 [--btn-bg:var(--color-amber-400)] [--btn-border:var(--color-amber-500)]/80", "[--btn-icon:var(--color-amber-600)]"],
    yellow: [
      "text-yellow-950 [--btn-hover-overlay:var(--color-white)]/25 [--btn-bg:var(--color-yellow-300)] [--btn-border:var(--color-yellow-400)]/80",
      "[--btn-icon:var(--color-yellow-600)] data-active:[--btn-icon:var(--color-yellow-700)] data-hover:[--btn-icon:var(--color-yellow-700)]"
    ],
    lime: [
      "text-lime-950 [--btn-hover-overlay:var(--color-white)]/25 [--btn-bg:var(--color-lime-300)] [--btn-border:var(--color-lime-400)]/80",
      "[--btn-icon:var(--color-lime-600)] data-active:[--btn-icon:var(--color-lime-700)] data-hover:[--btn-icon:var(--color-lime-700)]"
    ],
    green: [
      "text-white [--btn-hover-overlay:var(--color-white)]/10 [--btn-bg:var(--color-green-600)] [--btn-border:var(--color-green-700)]/90",
      "[--btn-icon:var(--color-white)]/60 data-active:[--btn-icon:var(--color-white)]/80 data-hover:[--btn-icon:var(--color-white)]/80"
    ],
    emerald: [
      "text-white [--btn-hover-overlay:var(--color-white)]/10 [--btn-bg:var(--color-emerald-600)] [--btn-border:var(--color-emerald-700)]/90",
      "[--btn-icon:var(--color-white)]/60 data-active:[--btn-icon:var(--color-white)]/80 data-hover:[--btn-icon:var(--color-white)]/80"
    ],
    teal: [
      "text-white [--btn-hover-overlay:var(--color-white)]/10 [--btn-bg:var(--color-teal-600)] [--btn-border:var(--color-teal-700)]/90",
      "[--btn-icon:var(--color-white)]/60 data-active:[--btn-icon:var(--color-white)]/80 data-hover:[--btn-icon:var(--color-white)]/80"
    ],
    sky: [
      "text-white [--btn-hover-overlay:var(--color-white)]/10 [--btn-bg:var(--color-sky-500)] [--btn-border:var(--color-sky-600)]/80",
      "[--btn-icon:var(--color-white)]/60 data-active:[--btn-icon:var(--color-white)]/80 data-hover:[--btn-icon:var(--color-white)]/80"
    ],
    blue: [
      "text-white [--btn-hover-overlay:var(--color-white)]/10 [--btn-bg:var(--color-blue-600)] [--btn-border:var(--color-blue-700)]/90",
      "[--btn-icon:var(--color-blue-400)] data-active:[--btn-icon:var(--color-blue-300)] data-hover:[--btn-icon:var(--color-blue-300)]"
    ],
    violet: [
      "text-white [--btn-hover-overlay:var(--color-white)]/10 [--btn-bg:var(--color-violet-500)] [--btn-border:var(--color-violet-600)]/90",
      "[--btn-icon:var(--color-violet-300)] data-active:[--btn-icon:var(--color-violet-200)] data-hover:[--btn-icon:var(--color-violet-200)]"
    ],
    purple: [
      "text-white [--btn-hover-overlay:var(--color-white)]/10 [--btn-bg:var(--color-purple-500)] [--btn-border:var(--color-purple-600)]/90",
      "[--btn-icon:var(--color-purple-300)] data-active:[--btn-icon:var(--color-purple-200)] data-hover:[--btn-icon:var(--color-purple-200)]"
    ],
    fuchsia: [
      "text-white [--btn-hover-overlay:var(--color-white)]/10 [--btn-bg:var(--color-fuchsia-500)] [--btn-border:var(--color-fuchsia-600)]/90",
      "[--btn-icon:var(--color-fuchsia-300)] data-active:[--btn-icon:var(--color-fuchsia-200)] data-hover:[--btn-icon:var(--color-fuchsia-200)]"
    ],
    pink: [
      "text-white [--btn-hover-overlay:var(--color-white)]/10 [--btn-bg:var(--color-pink-500)] [--btn-border:var(--color-pink-600)]/90",
      "[--btn-icon:var(--color-pink-300)] data-active:[--btn-icon:var(--color-pink-200)] data-hover:[--btn-icon:var(--color-pink-200)]"
    ],
    rose: [
      "text-white [--btn-hover-overlay:var(--color-white)]/10 [--btn-bg:var(--color-rose-500)] [--btn-border:var(--color-rose-600)]/90",
      "[--btn-icon:var(--color-rose-300)] data-active:[--btn-icon:var(--color-rose-200)] data-hover:[--btn-icon:var(--color-rose-200)]"
    ]
  }
}, k = u(function({ color: a, outline: o, plain: i, className: n, children: d, ...s }, l) {
  const b = t(n, p.base, o ? p.outline : i ? p.plain : t(p.solid, p.colors[a ?? "dark/zinc"]));
  return "href" in s ? /* @__PURE__ */ e.jsx(x, { ...s, className: b, ref: l, children: /* @__PURE__ */ e.jsx(h, { children: d }) }) : /* @__PURE__ */ e.jsx(c.Button, { ...s, className: t(b, "cursor-default"), ref: l, children: /* @__PURE__ */ e.jsx(h, { children: d }) });
});
function h({ children: r }) {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("span", { className: "-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] [@media(pointer:fine)]:hidden", "aria-hidden": "true" }),
    r
  ] });
}
function N({ src: r = null, square: a = !1, initials: o, alt: i = "", className: n, ...d }) {
  return /* @__PURE__ */ e.jsxs(
    "span",
    {
      "data-slot": "avatar",
      ...d,
      className: t(
        n,
        // Basic layout
        "inline-grid shrink-0 align-middle [--avatar-radius:20%] *:col-start-1 *:row-start-1",
        "-outline-offset-1 outline outline-black/10 dark:outline-white/10",
        // Border radius
        a ? "rounded-(--avatar-radius) *:rounded-(--avatar-radius)" : "rounded-full *:rounded-full"
      ),
      children: [
        o && // biome-ignore lint/a11y/noSvgWithoutTitle: acceptable
        /* @__PURE__ */ e.jsxs("svg", { className: "size-full select-none fill-current p-[5%] font-medium text-[48px] uppercase", viewBox: "0 0 100 100", "aria-hidden": i ? void 0 : "true", children: [
          i && /* @__PURE__ */ e.jsx("title", { children: i }),
          /* @__PURE__ */ e.jsx("text", { x: "50%", y: "50%", alignmentBaseline: "middle", dominantBaseline: "middle", textAnchor: "middle", dy: ".125em", children: o })
        ] }),
        r && /* @__PURE__ */ e.jsx("img", { className: "size-full", src: r, alt: i })
      ]
    }
  );
}
const E = u(function({ src: a, square: o = !1, initials: i, alt: n, className: d, ...s }, l) {
  const b = t(d, o ? "rounded-[20%]" : "rounded-full", "relative inline-grid focus:outline-hidden data-focus:outline-2 data-focus:outline-blue-500 data-focus:outline-offset-2");
  return "href" in s ? /* @__PURE__ */ e.jsx(x, { ...s, className: b, ref: l, children: /* @__PURE__ */ e.jsx(h, { children: /* @__PURE__ */ e.jsx(N, { src: a, square: o, initials: i, alt: n }) }) }) : /* @__PURE__ */ e.jsx(c.Button, { ...s, className: b, ref: l, children: /* @__PURE__ */ e.jsx(h, { children: /* @__PURE__ */ e.jsx(N, { src: a, square: o, initials: i, alt: n }) }) });
}), Z = {
  red: "bg-red-500/15 text-red-700 group-data-hover:bg-red-500/25 dark:bg-red-500/10 dark:text-red-400 dark:group-data-hover:bg-red-500/20",
  orange: "bg-orange-500/15 text-orange-700 group-data-hover:bg-orange-500/25 dark:bg-orange-500/10 dark:text-orange-400 dark:group-data-hover:bg-orange-500/20",
  amber: "bg-amber-400/20 text-amber-700 group-data-hover:bg-amber-400/30 dark:bg-amber-400/10 dark:text-amber-400 dark:group-data-hover:bg-amber-400/15",
  yellow: "bg-yellow-400/20 text-yellow-700 group-data-hover:bg-yellow-400/30 dark:bg-yellow-400/10 dark:text-yellow-300 dark:group-data-hover:bg-yellow-400/15",
  lime: "bg-lime-400/20 text-lime-700 group-data-hover:bg-lime-400/30 dark:bg-lime-400/10 dark:text-lime-300 dark:group-data-hover:bg-lime-400/15",
  green: "bg-green-500/15 text-green-700 group-data-hover:bg-green-500/25 dark:bg-green-500/10 dark:text-green-400 dark:group-data-hover:bg-green-500/20",
  emerald: "bg-emerald-500/15 text-emerald-700 group-data-hover:bg-emerald-500/25 dark:bg-emerald-500/10 dark:text-emerald-400 dark:group-data-hover:bg-emerald-500/20",
  teal: "bg-teal-500/15 text-teal-700 group-data-hover:bg-teal-500/25 dark:bg-teal-500/10 dark:text-teal-300 dark:group-data-hover:bg-teal-500/20",
  cyan: "bg-cyan-400/20 text-cyan-700 group-data-hover:bg-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-300 dark:group-data-hover:bg-cyan-400/15",
  sky: "bg-sky-500/15 text-sky-700 group-data-hover:bg-sky-500/25 dark:bg-sky-500/10 dark:text-sky-300 dark:group-data-hover:bg-sky-500/20",
  blue: "bg-blue-500/15 text-blue-700 group-data-hover:bg-blue-500/25 dark:text-blue-400 dark:group-data-hover:bg-blue-500/25",
  indigo: "bg-indigo-500/15 text-indigo-700 group-data-hover:bg-indigo-500/25 dark:text-indigo-400 dark:group-data-hover:bg-indigo-500/20",
  violet: "bg-violet-500/15 text-violet-700 group-data-hover:bg-violet-500/25 dark:text-violet-400 dark:group-data-hover:bg-violet-500/20",
  purple: "bg-purple-500/15 text-purple-700 group-data-hover:bg-purple-500/25 dark:text-purple-400 dark:group-data-hover:bg-purple-500/20",
  fuchsia: "bg-fuchsia-400/15 text-fuchsia-700 group-data-hover:bg-fuchsia-400/25 dark:bg-fuchsia-400/10 dark:text-fuchsia-400 dark:group-data-hover:bg-fuchsia-400/20",
  pink: "bg-pink-400/15 text-pink-700 group-data-hover:bg-pink-400/25 dark:bg-pink-400/10 dark:text-pink-400 dark:group-data-hover:bg-pink-400/20",
  rose: "bg-rose-400/15 text-rose-700 group-data-hover:bg-rose-400/25 dark:bg-rose-400/10 dark:text-rose-400 dark:group-data-hover:bg-rose-400/20",
  zinc: "bg-zinc-600/10 text-zinc-700 group-data-hover:bg-zinc-600/20 dark:bg-white/5 dark:text-zinc-400 dark:group-data-hover:bg-white/10"
};
function L({ color: r = "zinc", className: a, ...o }) {
  return /* @__PURE__ */ e.jsx("span", { ...o, className: t(a, "inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 font-medium text-sm/5 sm:text-xs/5 forced-colors:outline", Z[r]) });
}
const Q = u(function({ color: a = "zinc", className: o, children: i, ...n }, d) {
  const s = t(o, "group relative inline-flex rounded-md focus:outline-hidden data-focus:outline-2 data-focus:outline-blue-500 data-focus:outline-offset-2");
  return "href" in n ? /* @__PURE__ */ e.jsx(x, { ...n, className: s, ref: d, children: /* @__PURE__ */ e.jsx(h, { children: /* @__PURE__ */ e.jsx(L, { color: a, children: i }) }) }) : /* @__PURE__ */ e.jsx(c.Button, { ...n, className: s, ref: d, children: /* @__PURE__ */ e.jsx(h, { children: /* @__PURE__ */ e.jsx(L, { color: a, children: i }) }) });
});
function J({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      "data-slot": "control",
      ...a,
      className: t(
        r,
        // Basic groups
        "space-y-3",
        // With descriptions
        "has-data-[slot=description]:space-y-6 has-data-[slot=description]:**:data-[slot=label]:font-medium"
      )
    }
  );
}
function K({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx(
    c.Field,
    {
      "data-slot": "field",
      ...a,
      className: t(
        r,
        // Base layout
        "grid grid-cols-[1.125rem_1fr] gap-x-4 gap-y-1 sm:grid-cols-[1rem_1fr]",
        // Control layout
        "*:data-[slot=control]:col-start-1 *:data-[slot=control]:row-start-1 *:data-[slot=control]:mt-0.75 sm:*:data-[slot=control]:mt-1",
        // Label layout
        "*:data-[slot=label]:col-start-2 *:data-[slot=label]:row-start-1",
        // Description layout
        "*:data-[slot=description]:col-start-2 *:data-[slot=description]:row-start-2",
        // With description
        "has-data-[slot=description]:**:data-[slot=label]:font-medium"
      )
    }
  );
}
const U = [
  // Basic layout
  "relative isolate flex size-[1.125rem] items-center justify-center rounded-[0.3125rem] sm:size-4",
  // Background color + shadow applied to inset pseudo element, so shadow blends with border in light mode
  "before:absolute before:inset-0 before:-z-10 before:rounded-[calc(0.3125rem-1px)] before:bg-white before:shadow-sm",
  // Background color when checked
  "group-data-checked:before:bg-(--checkbox-checked-bg)",
  // Background color is moved to control and shadow is removed in dark mode so hide `before` pseudo
  "dark:before:hidden",
  // Background color applied to control in dark mode
  "dark:bg-white/5 dark:group-data-checked:bg-(--checkbox-checked-bg)",
  // Border
  "border border-zinc-950/15 group-data-checked:border-transparent group-data-hover:group-data-checked:border-transparent group-data-hover:border-zinc-950/30 group-data-checked:bg-(--checkbox-checked-border)",
  "dark:border-white/15 dark:group-data-checked:border-white/5 dark:group-data-hover:group-data-checked:border-white/5 dark:group-data-hover:border-white/30",
  // Inner highlight shadow
  "after:absolute after:inset-0 after:rounded-[calc(0.3125rem-1px)] after:shadow-[inset_0_1px_--theme(--color-white/15%)]",
  "dark:after:-inset-px dark:after:hidden dark:after:rounded-[0.3125rem] dark:group-data-checked:after:block",
  // Focus ring
  "group-data-focus:outline group-data-focus:outline-2 group-data-focus:outline-offset-2 group-data-focus:outline-blue-500",
  // Disabled state
  "group-data-disabled:opacity-50",
  "group-data-disabled:border-zinc-950/25 group-data-disabled:bg-zinc-950/5 group-data-disabled:[--checkbox-check:var(--color-zinc-950)]/50 group-data-disabled:before:bg-transparent",
  "dark:group-data-disabled:border-white/20 dark:group-data-disabled:bg-white/[2.5%] dark:group-data-disabled:[--checkbox-check:var(--color-white)]/50 dark:group-data-checked:group-data-disabled:after:hidden",
  // Forced colors mode
  "forced-colors:[--checkbox-check:HighlightText] forced-colors:[--checkbox-checked-bg:Highlight] forced-colors:group-data-disabled:[--checkbox-check:Highlight]",
  "dark:forced-colors:[--checkbox-check:HighlightText] dark:forced-colors:[--checkbox-checked-bg:Highlight] dark:forced-colors:group-data-disabled:[--checkbox-check:Highlight]"
], V = {
  "dark/zinc": ["[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-zinc-900)] [--checkbox-checked-border:var(--color-zinc-950)]/90", "dark:[--checkbox-checked-bg:var(--color-zinc-600)]"],
  "dark/white": [
    "[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-zinc-900)] [--checkbox-checked-border:var(--color-zinc-950)]/90",
    "dark:[--checkbox-check:var(--color-zinc-900)] dark:[--checkbox-checked-bg:var(--color-white)] dark:[--checkbox-checked-border:var(--color-zinc-950)]/15"
  ],
  white: "[--checkbox-check:var(--color-zinc-900)] [--checkbox-checked-bg:var(--color-white)] [--checkbox-checked-border:var(--color-zinc-950)]/15",
  dark: "[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-zinc-900)] [--checkbox-checked-border:var(--color-zinc-950)]/90",
  zinc: "[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-zinc-600)] [--checkbox-checked-border:var(--color-zinc-700)]/90",
  red: "[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-red-600)] [--checkbox-checked-border:var(--color-red-700)]/90",
  orange: "[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-orange-500)] [--checkbox-checked-border:var(--color-orange-600)]/90",
  amber: "[--checkbox-check:var(--color-amber-950)] [--checkbox-checked-bg:var(--color-amber-400)] [--checkbox-checked-border:var(--color-amber-500)]/80",
  yellow: "[--checkbox-check:var(--color-yellow-950)] [--checkbox-checked-bg:var(--color-yellow-300)] [--checkbox-checked-border:var(--color-yellow-400)]/80",
  lime: "[--checkbox-check:var(--color-lime-950)] [--checkbox-checked-bg:var(--color-lime-300)] [--checkbox-checked-border:var(--color-lime-400)]/80",
  green: "[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-green-600)] [--checkbox-checked-border:var(--color-green-700)]/90",
  emerald: "[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-emerald-600)] [--checkbox-checked-border:var(--color-emerald-700)]/90",
  teal: "[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-teal-600)] [--checkbox-checked-border:var(--color-teal-700)]/90",
  cyan: "[--checkbox-check:var(--color-cyan-950)] [--checkbox-checked-bg:var(--color-cyan-300)] [--checkbox-checked-border:var(--color-cyan-400)]/80",
  sky: "[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-sky-500)] [--checkbox-checked-border:var(--color-sky-600)]/80",
  blue: "[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-blue-600)] [--checkbox-checked-border:var(--color-blue-700)]/90",
  indigo: "[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-indigo-500)] [--checkbox-checked-border:var(--color-indigo-600)]/90",
  violet: "[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-violet-500)] [--checkbox-checked-border:var(--color-violet-600)]/90",
  purple: "[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-purple-500)] [--checkbox-checked-border:var(--color-purple-600)]/90",
  fuchsia: "[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-fuchsia-500)] [--checkbox-checked-border:var(--color-fuchsia-600)]/90",
  pink: "[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-pink-500)] [--checkbox-checked-border:var(--color-pink-600)]/90",
  rose: "[--checkbox-check:var(--color-white)] [--checkbox-checked-bg:var(--color-rose-500)] [--checkbox-checked-border:var(--color-rose-600)]/90"
};
function X({
  color: r = "dark/zinc",
  className: a,
  ...o
}) {
  return /* @__PURE__ */ e.jsx(c.Checkbox, { "data-slot": "control", ...o, className: t(a, "group inline-flex focus:outline-hidden"), children: /* @__PURE__ */ e.jsx("span", { className: t([U, V[r]]), children: /* @__PURE__ */ e.jsxs("svg", { className: "size-4 stroke-(--checkbox-check) opacity-0 group-data-checked:opacity-100 sm:h-3.5 sm:w-3.5", viewBox: "0 0 14 14", fill: "none", children: [
    /* @__PURE__ */ e.jsx("path", { className: "opacity-100 group-data-indeterminate:opacity-0", d: "M3 8L6 11L11 3.5", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ e.jsx("path", { className: "opacity-0 group-data-indeterminate:opacity-100", d: "M3 7H11", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
  ] }) }) });
}
function Y({
  options: r,
  displayValue: a,
  filter: o,
  anchor: i = "bottom",
  className: n,
  placeholder: d,
  autoFocus: s,
  "aria-label": l,
  children: b,
  ...y
}) {
  const [v, f] = z(""), T = v === "" ? r : r.filter((g) => o ? o(g, v) : a(g)?.toLowerCase().includes(v.toLowerCase()));
  return /* @__PURE__ */ e.jsxs(c.Combobox, { ...y, multiple: !1, virtual: { options: T }, onClose: () => f(""), children: [
    /* @__PURE__ */ e.jsxs(
      "span",
      {
        "data-slot": "control",
        className: t([
          n,
          // Basic layout
          "relative block w-full",
          // Background color + shadow applied to inset pseudo element, so shadow blends with border in light mode
          "before:absolute before:inset-px before:rounded-[calc(var(--radius-lg)-1px)] before:bg-white before:shadow-sm",
          // Background color is moved to control and shadow is removed in dark mode so hide `before` pseudo
          "dark:before:hidden",
          // Focus ring
          "after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-transparent after:ring-inset sm:focus-within:after:ring-2 sm:focus-within:after:ring-blue-500",
          // Disabled state
          "has-data-disabled:opacity-50 has-data-disabled:before:bg-zinc-950/5 has-data-disabled:before:shadow-none",
          // Invalid state
          "has-data-invalid:before:shadow-red-500/10"
        ]),
        children: [
          /* @__PURE__ */ e.jsx(
            c.ComboboxInput,
            {
              autoFocus: s,
              "data-slot": "control",
              "aria-label": l,
              displayValue: (g) => a(g) ?? "",
              onChange: (g) => f(g.target.value),
              placeholder: d,
              className: t([
                n,
                // Basic layout
                "relative block w-full appearance-none rounded-lg py-[calc(--spacing(2.5)-1px)] sm:py-[calc(--spacing(1.5)-1px)]",
                // Horizontal padding
                "pr-[calc(--spacing(10)-1px)] pl-[calc(--spacing(3.5)-1px)] sm:pr-[calc(--spacing(9)-1px)] sm:pl-[calc(--spacing(3)-1px)]",
                // Typography
                "text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white",
                // Border
                "border border-zinc-950/10 data-hover:border-zinc-950/20 dark:border-white/10 dark:data-hover:border-white/20",
                // Background color
                "bg-transparent dark:bg-white/5",
                // Hide default focus styles
                "focus:outline-hidden",
                // Invalid state
                "data-invalid:data-hover:border-red-500 data-invalid:border-red-500 dark:data-invalid:data-hover:border-red-500 dark:data-invalid:border-red-500",
                // Disabled state
                "data-disabled:border-zinc-950/20 dark:data-hover:data-disabled:border-white/15 dark:data-disabled:border-white/15 dark:data-disabled:bg-white/[2.5%]",
                // System icons
                "dark:[color-scheme:dark]"
              ])
            }
          ),
          /* @__PURE__ */ e.jsx(c.ComboboxButton, { className: "group absolute inset-y-0 right-0 flex items-center px-2", children: /* @__PURE__ */ e.jsxs(
            "svg",
            {
              className: "size-5 stroke-zinc-500 group-data-disabled:stroke-zinc-600 group-data-hover:stroke-zinc-700 sm:size-4 dark:stroke-zinc-400 dark:group-data-hover:stroke-zinc-300 forced-colors:stroke-[CanvasText]",
              viewBox: "0 0 16 16",
              "aria-hidden": "true",
              fill: "none",
              children: [
                /* @__PURE__ */ e.jsx("path", { d: "M5.75 10.75L8 13L10.25 10.75", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }),
                /* @__PURE__ */ e.jsx("path", { d: "M10.25 5.25L8 3L5.75 5.25", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ e.jsx(
      c.ComboboxOptions,
      {
        transition: !0,
        anchor: i,
        className: t(
          // Anchor positioning
          "[--anchor-gap:--spacing(2)] [--anchor-padding:--spacing(4)] sm:data-[anchor~=start]:[--anchor-offset:-4px]",
          // Base styles,
          "isolate min-w-[calc(var(--input-width)+8px)] select-none scroll-py-1 rounded-xl p-1 empty:invisible",
          // Invisible border that is only visible in `forced-colors` mode for accessibility purposes
          "outline outline-transparent focus:outline-hidden",
          // Handle scrolling when menu won't fit in viewport
          "overflow-y-scroll overscroll-contain",
          // Popover background
          "bg-white/75 backdrop-blur-xl dark:bg-zinc-800/75",
          // Shadows
          "shadow-lg ring-1 ring-zinc-950/10 dark:ring-white/10 dark:ring-inset",
          // Transitions
          "transition-opacity duration-100 ease-in data-closed:data-leave:opacity-0 data-transition:pointer-events-none"
        ),
        children: ({ option: g }) => b(g)
      }
    )
  ] });
}
function q({ children: r, className: a, ...o }) {
  const i = t(
    // Base
    "flex min-w-0 items-center",
    // Icons
    "*:data-[slot=icon]:size-5 *:data-[slot=icon]:shrink-0 sm:*:data-[slot=icon]:size-4",
    "*:data-[slot=icon]:text-zinc-500 group-data-focus/option:*:data-[slot=icon]:text-white dark:*:data-[slot=icon]:text-zinc-400",
    "forced-colors:*:data-[slot=icon]:text-[CanvasText] forced-colors:group-data-focus/option:*:data-[slot=icon]:text-[Canvas]",
    // Avatars
    "*:data-[slot=avatar]:-mx-0.5 *:data-[slot=avatar]:size-6 sm:*:data-[slot=avatar]:size-5"
  );
  return /* @__PURE__ */ e.jsxs(
    c.ComboboxOption,
    {
      ...o,
      className: t(
        // Basic layout
        "group/option grid w-full cursor-default grid-cols-[1fr_--spacing(5)] items-baseline gap-x-2 rounded-lg py-2.5 pr-2 pl-3.5 sm:grid-cols-[1fr_--spacing(4)] sm:py-1.5 sm:pr-2 sm:pl-3",
        // Typography
        "text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white forced-colors:text-[CanvasText]",
        // Focus
        "outline-hidden data-focus:bg-blue-500 data-focus:text-white",
        // Forced colors mode
        "forced-color-adjust-none forced-colors:data-focus:bg-[Highlight] forced-colors:data-focus:text-[HighlightText]",
        // Disabled
        "data-disabled:opacity-50"
      ),
      children: [
        /* @__PURE__ */ e.jsx("span", { className: t(a, i), children: r }),
        /* @__PURE__ */ e.jsx("svg", { className: "relative col-start-2 hidden size-5 self-center stroke-current group-data-selected/option:inline sm:size-4", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e.jsx("path", { d: "M4 8.5l3 3L12 4", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }) })
      ]
    }
  );
}
function ee({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx("span", { ...a, className: t(r, "ml-2.5 truncate first:ml-0 sm:ml-2 sm:first:ml-0") });
}
function ae({ className: r, children: a, ...o }) {
  return /* @__PURE__ */ e.jsx("span", { ...o, className: t(r, "flex flex-1 overflow-hidden text-zinc-500 before:w-2 before:min-w-0 before:shrink group-data-focus/option:text-white dark:text-zinc-400"), children: /* @__PURE__ */ e.jsx("span", { className: "flex-1 truncate", children: a }) });
}
function re({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx("dl", { ...a, className: t(r, "grid grid-cols-1 text-base/6 sm:grid-cols-[min(50%,--spacing(80))_auto] sm:text-sm/6") });
}
function te({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx(
    "dt",
    {
      ...a,
      className: t(r, "col-start-1 border-zinc-950/5 border-t pt-3 text-zinc-500 first:border-none sm:border-zinc-950/5 sm:border-t sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5")
    }
  );
}
function oe({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx("dd", { ...a, className: t(r, "pt-1 pb-3 text-zinc-950 sm:border-zinc-950/5 sm:border-t sm:nth-2:border-none sm:py-3 dark:text-white dark:sm:border-white/5") });
}
const ie = {
  xs: "sm:max-w-xs",
  sm: "sm:max-w-sm",
  md: "sm:max-w-md",
  lg: "sm:max-w-lg",
  xl: "sm:max-w-xl",
  "2xl": "sm:max-w-2xl",
  "3xl": "sm:max-w-3xl",
  "4xl": "sm:max-w-4xl",
  "5xl": "sm:max-w-5xl"
};
function ce({ size: r = "lg", className: a, children: o, ...i }) {
  return /* @__PURE__ */ e.jsxs(c.Dialog, { ...i, children: [
    /* @__PURE__ */ e.jsx(
      c.DialogBackdrop,
      {
        transition: !0,
        className: "fixed inset-0 flex w-screen justify-center overflow-y-auto bg-zinc-950/25 px-2 py-2 transition duration-100 focus:outline-0 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in sm:px-6 sm:py-8 lg:px-8 lg:py-16 dark:bg-zinc-950/50"
      }
    ),
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 w-screen overflow-y-auto pt-6 sm:pt-0", children: /* @__PURE__ */ e.jsx("div", { className: "grid min-h-full grid-rows-[1fr_auto] justify-items-center sm:grid-rows-[1fr_auto_3fr] sm:p-4", children: /* @__PURE__ */ e.jsx(
      c.DialogPanel,
      {
        transition: !0,
        className: t(
          a,
          ie[r],
          "row-start-2 w-full min-w-0 rounded-t-3xl bg-white p-(--gutter) shadow-lg ring-1 ring-zinc-950/10 [--gutter:--spacing(8)] sm:mb-auto sm:rounded-2xl dark:bg-zinc-900 dark:ring-white/10 forced-colors:outline",
          "transition duration-100 will-change-transform data-closed:translate-y-12 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in sm:data-closed:data-enter:scale-95 sm:data-closed:translate-y-0"
        ),
        children: o
      }
    ) }) })
  ] });
}
function ne({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx(c.DialogTitle, { ...a, className: t(r, "text-balance font-semibold text-lg/6 text-zinc-950 sm:text-base/6 dark:text-white") });
}
function de({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx(c.Description, { as: C, ...a, className: t(r, "mt-2 text-pretty") });
}
function se({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx("div", { ...a, className: t(r, "mt-6") });
}
function le({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx("div", { ...a, className: t(r, "mt-8 flex flex-col-reverse items-center justify-end gap-3 *:w-full sm:flex-row sm:*:w-auto") });
}
function Ta({ soft: r = !1, className: a, ...o }) {
  return /* @__PURE__ */ e.jsx("hr", { ...o, className: t(a, "w-full border-t", r && "border-zinc-950/5 dark:border-white/5", !r && "border-zinc-950/10 dark:border-white/10") });
}
function he(r) {
  return /* @__PURE__ */ e.jsx(c.Menu, { ...r });
}
function be({ as: r = k, ...a }) {
  return /* @__PURE__ */ e.jsx(c.MenuButton, { as: r, ...a });
}
function ge({ anchor: r = "bottom", className: a, ...o }) {
  return /* @__PURE__ */ e.jsx(
    c.MenuItems,
    {
      ...o,
      transition: !0,
      anchor: r,
      className: t(
        a,
        // Anchor positioning
        "[--anchor-gap:--spacing(2)] [--anchor-padding:--spacing(1)] data-[anchor~=end]:[--anchor-offset:6px] data-[anchor~=start]:[--anchor-offset:-6px] sm:data-[anchor~=end]:[--anchor-offset:4px] sm:data-[anchor~=start]:[--anchor-offset:-4px]",
        // Base styles
        "isolate w-max rounded-xl p-1",
        // Invisible border that is only visible in `forced-colors` mode for accessibility purposes
        "outline outline-transparent focus:outline-hidden",
        // Handle scrolling when menu won't fit in viewport
        "overflow-y-auto",
        // Popover background
        "bg-white/75 backdrop-blur-xl dark:bg-zinc-800/75",
        // Shadows
        "shadow-lg ring-1 ring-zinc-950/10 dark:ring-white/10 dark:ring-inset",
        // Define grid at the menu level if subgrid is supported
        "supports-[grid-template-columns:subgrid]:grid supports-[grid-template-columns:subgrid]:grid-cols-[auto_1fr_1.5rem_0.5rem_auto]",
        // Transitions
        "transition data-closed:data-leave:opacity-0 data-leave:duration-100 data-leave:ease-in"
      )
    }
  );
}
function ue({ className: r, ...a }) {
  const o = t(
    r,
    // Base styles
    "group cursor-default rounded-lg px-3.5 py-2.5 focus:outline-hidden sm:px-3 sm:py-1.5",
    // Text styles
    "text-left text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white forced-colors:text-[CanvasText]",
    // Focus
    "data-focus:bg-blue-500 data-focus:text-white",
    // Disabled state
    "data-disabled:opacity-50",
    // Forced colors mode
    "forced-color-adjust-none forced-colors:data-focus:bg-[Highlight] forced-colors:data-focus:text-[HighlightText] forced-colors:data-focus:*:data-[slot=icon]:text-[HighlightText]",
    // Use subgrid when available but fallback to an explicit grid layout if not
    "col-span-full grid grid-cols-[auto_1fr_1.5rem_0.5rem_auto] items-center supports-[grid-template-columns:subgrid]:grid-cols-subgrid",
    // Icons
    "*:data-[slot=icon]:-ml-0.5 *:data-[slot=icon]:col-start-1 *:data-[slot=icon]:row-start-1 *:data-[slot=icon]:mr-2.5 *:data-[slot=icon]:size-5 sm:*:data-[slot=icon]:mr-2 sm:*:data-[slot=icon]:size-4",
    "data-focus:*:data-[slot=icon]:text-white *:data-[slot=icon]:text-zinc-500 dark:data-focus:*:data-[slot=icon]:text-white dark:*:data-[slot=icon]:text-zinc-400",
    // Avatar
    "*:data-[slot=avatar]:-ml-1 *:data-[slot=avatar]:mr-2.5 *:data-[slot=avatar]:size-6 sm:*:data-[slot=avatar]:mr-2 sm:*:data-[slot=avatar]:size-5"
  );
  return "href" in a ? /* @__PURE__ */ e.jsx(c.MenuItem, { as: x, ...a, className: o }) : /* @__PURE__ */ e.jsx(c.MenuItem, { as: "button", type: "button", ...a, className: o });
}
function xe({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx("div", { ...a, className: t(r, "col-span-5 px-3.5 pt-2.5 pb-1 sm:px-3") });
}
function ve({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx(
    c.MenuSection,
    {
      ...a,
      className: t(
        r,
        // Define grid at the section level instead of the item level if subgrid is supported
        "col-span-full supports-[grid-template-columns:subgrid]:grid supports-[grid-template-columns:subgrid]:grid-cols-[auto_1fr_1.5rem_0.5rem_auto]"
      )
    }
  );
}
function pe({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx(c.MenuHeading, { ...a, className: t(r, "col-span-full grid grid-cols-[1fr_auto] gap-x-12 px-3.5 pt-2 pb-1 font-medium text-sm/5 text-zinc-500 sm:px-3 sm:text-xs/5 dark:text-zinc-400") });
}
function ke({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx(c.MenuSeparator, { ...a, className: t(r, "col-span-full mx-3.5 my-1 h-px border-0 bg-zinc-950/5 sm:mx-3 dark:bg-white/10 forced-colors:bg-[CanvasText]") });
}
function me({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx(c.Label, { ...a, "data-slot": "label", className: t(r, "col-start-2 row-start-1"), ...a });
}
function fe({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx(
    c.Description,
    {
      "data-slot": "description",
      ...a,
      className: t(r, "col-span-2 col-start-2 row-start-2 text-sm/5 text-zinc-500 group-data-focus:text-white sm:text-xs/5 dark:text-zinc-400 forced-colors:group-data-focus:text-[HighlightText]")
    }
  );
}
function we({ keys: r, className: a, ...o }) {
  return /* @__PURE__ */ e.jsx(c.Description, { as: "kbd", ...o, className: t(a, "col-start-5 row-start-1 flex justify-self-end"), children: (Array.isArray(r) ? r : r.split("")).map((i, n) => /* @__PURE__ */ e.jsx(
    "kbd",
    {
      className: t([
        "min-w-[2ch] text-center font-sans text-zinc-400 capitalize group-data-focus:text-white forced-colors:group-data-focus:text-[HighlightText]",
        // Make sure key names that are longer than one character (like "Tab") have extra space
        n > 0 && i.length > 1 && "pl-1"
      ]),
      children: i
    },
    n
  )) });
}
function ze({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx(c.Fieldset, { ...a, className: t(r, "*:data-[slot=text]:mt-1 [&>*+[data-slot=control]]:mt-6") });
}
function je({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx(c.Legend, { "data-slot": "legend", ...a, className: t(r, "font-semibold text-base/6 text-zinc-950 data-disabled:opacity-50 sm:text-sm/6 dark:text-white") });
}
function ye({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx("div", { "data-slot": "control", ...a, className: t(r, "space-y-8") });
}
function Ne({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx(
    c.Field,
    {
      ...a,
      className: t(
        r,
        "[&>[data-slot=label]+[data-slot=control]]:mt-3",
        "[&>[data-slot=label]+[data-slot=description]]:mt-1",
        "[&>[data-slot=description]+[data-slot=control]]:mt-3",
        "[&>[data-slot=control]+[data-slot=description]]:mt-3",
        "[&>[data-slot=control]+[data-slot=error]]:mt-3",
        "*:data-[slot=label]:font-medium"
      )
    }
  );
}
function Le({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx(c.Label, { "data-slot": "label", ...a, className: t(r, "select-none text-base/6 text-zinc-950 data-disabled:opacity-50 sm:text-sm/6 dark:text-white") });
}
function Ce({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx(c.Description, { "data-slot": "description", ...a, className: t(r, "text-base/6 text-zinc-500 data-disabled:opacity-50 sm:text-sm/6 dark:text-zinc-400") });
}
function De({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx(c.Description, { "data-slot": "error", ...a, className: t(r, "text-base/6 text-red-600 data-disabled:opacity-50 sm:text-sm/6 dark:text-red-500") });
}
function Be({ className: r, level: a = 1, ...o }) {
  const i = `h${a}`;
  return /* @__PURE__ */ e.jsx(i, { ...o, className: t(r, "font-semibold text-2xl/8 text-zinc-950 sm:text-xl/8 dark:text-white") });
}
function Se({ className: r, level: a = 2, ...o }) {
  const i = `h${a}`;
  return /* @__PURE__ */ e.jsx(i, { ...o, className: t(r, "font-semibold text-base/7 text-zinc-950 sm:text-sm/6 dark:text-white") });
}
function Te({ children: r }) {
  return /* @__PURE__ */ e.jsx(
    "span",
    {
      "data-slot": "control",
      className: t(
        "relative isolate block",
        "has-[[data-slot=icon]:last-child]:[&_input]:pr-10 has-[[data-slot=icon]:first-child]:[&_input]:pl-10 sm:has-[[data-slot=icon]:last-child]:[&_input]:pr-8 sm:has-[[data-slot=icon]:first-child]:[&_input]:pl-8",
        "*:data-[slot=icon]:pointer-events-none *:data-[slot=icon]:absolute *:data-[slot=icon]:top-3 *:data-[slot=icon]:z-10 *:data-[slot=icon]:size-5 sm:*:data-[slot=icon]:top-2.5 sm:*:data-[slot=icon]:size-4",
        "[&>[data-slot=icon]:first-child]:left-3 sm:[&>[data-slot=icon]:first-child]:left-2.5 [&>[data-slot=icon]:last-child]:right-3 sm:[&>[data-slot=icon]:last-child]:right-2.5",
        "*:data-[slot=icon]:text-zinc-500 dark:*:data-[slot=icon]:text-zinc-400"
      ),
      children: r
    }
  );
}
const _e = ["date", "datetime-local", "month", "time", "week"], He = u(function({
  className: a,
  ...o
}, i) {
  return /* @__PURE__ */ e.jsx(
    "span",
    {
      "data-slot": "control",
      className: t([
        a,
        // Basic layout
        "relative block w-full",
        // Background color + shadow applied to inset pseudo element, so shadow blends with border in light mode
        "before:absolute before:inset-px before:rounded-[calc(var(--radius-lg)-1px)] before:bg-white before:shadow-sm",
        // Background color is moved to control and shadow is removed in dark mode so hide `before` pseudo
        "dark:before:hidden",
        // Focus ring
        "after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-transparent after:ring-inset sm:focus-within:after:ring-2 sm:focus-within:after:ring-blue-500",
        // Disabled state
        "has-data-disabled:opacity-50 has-data-disabled:before:bg-zinc-950/5 has-data-disabled:before:shadow-none",
        // Invalid state
        "has-data-invalid:before:shadow-red-500/10"
      ]),
      children: /* @__PURE__ */ e.jsx(
        c.Input,
        {
          ref: i,
          ...o,
          className: t([
            // Date classes
            o.type && _e.includes(o.type) && [
              "[&::-webkit-datetime-edit-fields-wrapper]:p-0",
              "[&::-webkit-date-and-time-value]:min-h-[1.5em]",
              "[&::-webkit-datetime-edit]:inline-flex",
              "[&::-webkit-datetime-edit]:p-0",
              "[&::-webkit-datetime-edit-year-field]:p-0",
              "[&::-webkit-datetime-edit-month-field]:p-0",
              "[&::-webkit-datetime-edit-day-field]:p-0",
              "[&::-webkit-datetime-edit-hour-field]:p-0",
              "[&::-webkit-datetime-edit-minute-field]:p-0",
              "[&::-webkit-datetime-edit-second-field]:p-0",
              "[&::-webkit-datetime-edit-millisecond-field]:p-0",
              "[&::-webkit-datetime-edit-meridiem-field]:p-0"
            ],
            // Basic layout
            "relative block w-full appearance-none rounded-lg px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)]",
            // Typography
            "text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white",
            // Border
            "border border-zinc-950/10 data-hover:border-zinc-950/20 dark:border-white/10 dark:data-hover:border-white/20",
            // Background color
            "bg-transparent dark:bg-white/5",
            // Hide default focus styles
            "focus:outline-hidden",
            // Invalid state
            "data-invalid:data-hover:border-red-500 data-invalid:border-red-500 dark:data-invalid:data-hover:border-red-500 dark:data-invalid:border-red-500",
            // Disabled state
            "data-disabled:border-zinc-950/20 dark:data-hover:data-disabled:border-white/15 dark:data-disabled:border-white/15 dark:data-disabled:bg-white/[2.5%]",
            // System icons
            "dark:[color-scheme:dark]"
          ])
        }
      )
    }
  );
});
function Me({
  className: r,
  placeholder: a,
  autoFocus: o,
  "aria-label": i,
  children: n,
  ...d
}) {
  return /* @__PURE__ */ e.jsxs(c.Listbox, { ...d, multiple: !1, children: [
    /* @__PURE__ */ e.jsxs(
      c.ListboxButton,
      {
        autoFocus: o,
        "data-slot": "control",
        "aria-label": i,
        className: t([
          r,
          // Basic layout
          "group relative block w-full",
          // Background color + shadow applied to inset pseudo element, so shadow blends with border in light mode
          "before:absolute before:inset-px before:rounded-[calc(var(--radius-lg)-1px)] before:bg-white before:shadow-sm",
          // Background color is moved to control and shadow is removed in dark mode so hide `before` pseudo
          "dark:before:hidden",
          // Hide default focus styles
          "focus:outline-hidden",
          // Focus ring
          "after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-transparent after:ring-inset data-focus:after:ring-2 data-focus:after:ring-blue-500",
          // Disabled state
          "data-disabled:opacity-50 data-disabled:before:bg-zinc-950/5 data-disabled:before:shadow-none"
        ]),
        children: [
          /* @__PURE__ */ e.jsx(
            c.ListboxSelectedOption,
            {
              as: "span",
              options: n,
              placeholder: a && /* @__PURE__ */ e.jsx("span", { className: "block truncate text-zinc-500", children: a }),
              className: t([
                // Basic layout
                "relative block w-full appearance-none rounded-lg py-[calc(--spacing(2.5)-1px)] sm:py-[calc(--spacing(1.5)-1px)]",
                // Set minimum height for when no value is selected
                "min-h-11 sm:min-h-9",
                // Horizontal padding
                "pr-[calc(--spacing(7)-1px)] pl-[calc(--spacing(3.5)-1px)] sm:pl-[calc(--spacing(3)-1px)]",
                // Typography
                "text-left text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white forced-colors:text-[CanvasText]",
                // Border
                "border border-zinc-950/10 group-data-active:border-zinc-950/20 group-data-hover:border-zinc-950/20 dark:border-white/10 dark:group-data-active:border-white/20 dark:group-data-hover:border-white/20",
                // Background color
                "bg-transparent dark:bg-white/5",
                // Invalid state
                "group-data-hover:group-data-invalid:border-red-500 group-data-invalid:border-red-500 dark:group-data-invalid:border-red-600 dark:data-hover:group-data-invalid:border-red-600",
                // Disabled state
                "group-data-disabled:border-zinc-950/20 group-data-disabled:opacity-100 dark:group-data-disabled:border-white/15 dark:group-data-disabled:bg-white/[2.5%] dark:group-data-disabled:data-hover:border-white/15"
              ])
            }
          ),
          /* @__PURE__ */ e.jsx("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2", children: /* @__PURE__ */ e.jsxs("svg", { className: "size-5 stroke-zinc-500 group-data-disabled:stroke-zinc-600 sm:size-4 dark:stroke-zinc-400 forced-colors:stroke-[CanvasText]", viewBox: "0 0 16 16", "aria-hidden": "true", fill: "none", children: [
            /* @__PURE__ */ e.jsx("path", { d: "M5.75 10.75L8 13L10.25 10.75", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }),
            /* @__PURE__ */ e.jsx("path", { d: "M10.25 5.25L8 3L5.75 5.25", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ e.jsx(
      c.ListboxOptions,
      {
        transition: !0,
        anchor: "selection start",
        className: t(
          // Anchor positioning
          "[--anchor-offset:-1.625rem] [--anchor-padding:--spacing(4)] sm:[--anchor-offset:-1.375rem]",
          // Base styles
          "isolate w-max min-w-[calc(var(--button-width)+1.75rem)] select-none scroll-py-1 rounded-xl p-1",
          // Invisible border that is only visible in `forced-colors` mode for accessibility purposes
          "outline outline-transparent focus:outline-hidden",
          // Handle scrolling when menu won't fit in viewport
          "overflow-y-scroll overscroll-contain",
          // Popover background
          "bg-white/75 backdrop-blur-xl dark:bg-zinc-800/75",
          // Shadows
          "shadow-lg ring-1 ring-zinc-950/10 dark:ring-white/10 dark:ring-inset",
          // Transitions
          "transition-opacity duration-100 ease-in data-closed:data-leave:opacity-0 data-transition:pointer-events-none"
        ),
        children: n
      }
    )
  ] });
}
function Oe({ children: r, className: a, ...o }) {
  const i = t(
    // Base
    "flex min-w-0 items-center",
    // Icons
    "*:data-[slot=icon]:size-5 *:data-[slot=icon]:shrink-0 sm:*:data-[slot=icon]:size-4",
    "*:data-[slot=icon]:text-zinc-500 group-data-focus/option:*:data-[slot=icon]:text-white dark:*:data-[slot=icon]:text-zinc-400",
    "forced-colors:*:data-[slot=icon]:text-[CanvasText] forced-colors:group-data-focus/option:*:data-[slot=icon]:text-[Canvas]",
    // Avatars
    "*:data-[slot=avatar]:-mx-0.5 *:data-[slot=avatar]:size-6 sm:*:data-[slot=avatar]:size-5"
  );
  return /* @__PURE__ */ e.jsx(c.ListboxOption, { as: H, ...o, children: ({ selectedOption: n }) => n ? /* @__PURE__ */ e.jsx("div", { className: t(a, i), children: r }) : /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: t(
        // Basic layout
        "group/option grid cursor-default grid-cols-[--spacing(5)_1fr] items-baseline gap-x-2 rounded-lg py-2.5 pr-3.5 pl-2 sm:grid-cols-[--spacing(4)_1fr] sm:py-1.5 sm:pr-3 sm:pl-1.5",
        // Typography
        "text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white forced-colors:text-[CanvasText]",
        // Focus
        "outline-hidden data-focus:bg-blue-500 data-focus:text-white",
        // Forced colors mode
        "forced-color-adjust-none forced-colors:data-focus:bg-[Highlight] forced-colors:data-focus:text-[HighlightText]",
        // Disabled
        "data-disabled:opacity-50"
      ),
      children: [
        /* @__PURE__ */ e.jsx("svg", { className: "relative hidden size-5 self-center stroke-current group-data-selected/option:inline sm:size-4", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e.jsx("path", { d: "M4 8.5l3 3L12 4", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }) }),
        /* @__PURE__ */ e.jsx("span", { className: t(a, i, "col-start-2"), children: r })
      ]
    }
  ) });
}
function $e({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx("span", { ...a, className: t(r, "ml-2.5 truncate first:ml-0 sm:ml-2 sm:first:ml-0") });
}
function Ie({ className: r, children: a, ...o }) {
  return /* @__PURE__ */ e.jsx("span", { ...o, className: t(r, "flex flex-1 overflow-hidden text-zinc-500 before:w-2 before:min-w-0 before:shrink group-data-focus/option:text-white dark:text-zinc-400"), children: /* @__PURE__ */ e.jsx("span", { className: "flex-1 truncate", children: a }) });
}
function Pe({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx("nav", { ...a, className: t(r, "flex flex-1 items-center gap-4 py-2.5") });
}
function Fe({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx("div", { "aria-hidden": "true", ...a, className: t(r, "h-6 w-px bg-zinc-950/10 dark:bg-white/10") });
}
function Ae({ className: r, ...a }) {
  const o = D();
  return /* @__PURE__ */ e.jsx("div", { id: o, children: /* @__PURE__ */ e.jsx("div", { ...a, className: t(r, "flex items-center gap-3") }) });
}
function Re({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx("div", { "aria-hidden": "true", ...a, className: t(r, "-ml-4 flex-1") });
}
const m = u(function({ current: a, className: o, children: i, ...n }, d) {
  const s = t(
    // Base
    "relative flex min-w-0 items-center gap-3 rounded-lg p-2 text-left font-medium text-base/6 text-zinc-950 sm:text-sm/5",
    // Leading icon/icon-only
    "*:data-[slot=icon]:size-6 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:fill-zinc-500 sm:*:data-[slot=icon]:size-5",
    // Trailing icon (down chevron or similar)
    "*:not-nth-2:last:data-[slot=icon]:ml-auto *:not-nth-2:last:data-[slot=icon]:size-5 sm:*:not-nth-2:last:data-[slot=icon]:size-4",
    // Avatar
    "*:data-[slot=avatar]:-m-0.5 *:data-[slot=avatar]:size-7 sm:*:data-[slot=avatar]:size-6 *:data-[slot=avatar]:[--avatar-radius:var(--radius-md)]",
    // Hover
    "data-hover:bg-zinc-950/5 data-hover:*:data-[slot=icon]:fill-zinc-950",
    // Active
    "data-active:bg-zinc-950/5 data-active:*:data-[slot=icon]:fill-zinc-950",
    // Dark mode
    "dark:text-white dark:*:data-[slot=icon]:fill-zinc-400",
    "dark:data-hover:bg-white/5 dark:data-hover:*:data-[slot=icon]:fill-white",
    "dark:data-active:bg-white/5 dark:data-active:*:data-[slot=icon]:fill-white"
  );
  return /* @__PURE__ */ e.jsxs("span", { className: t(o, "relative"), children: [
    a && /* @__PURE__ */ e.jsx("span", { className: "-bottom-2.5 absolute inset-x-2 h-0.5 rounded-full bg-zinc-950 dark:bg-white" }),
    "href" in n ? /* @__PURE__ */ e.jsx(x, { ...n, className: s, "data-current": a ? "true" : void 0, ref: d, children: /* @__PURE__ */ e.jsx(h, { children: i }) }) : /* @__PURE__ */ e.jsx(c.Button, { ...n, className: t("cursor-default", s), "data-current": a ? "true" : void 0, ref: d, children: /* @__PURE__ */ e.jsx(h, { children: i }) })
  ] });
});
function Ge({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx("span", { ...a, className: t(r, "truncate") });
}
function We({ "aria-label": r = "Page navigation", className: a, ...o }) {
  return /* @__PURE__ */ e.jsx("nav", { "aria-label": r, ...o, className: t(a, "flex gap-x-2") });
}
function Ee({ href: r = null, className: a, children: o = "Previous" }) {
  return /* @__PURE__ */ e.jsx("span", { className: t(a, "grow basis-0"), children: /* @__PURE__ */ e.jsxs(k, { ...r === null ? { disabled: !0 } : { href: r }, plain: !0, "aria-label": "Previous page", children: [
    /* @__PURE__ */ e.jsx("svg", { className: "stroke-current", "data-slot": "icon", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e.jsx("path", { d: "M2.75 8H13.25M2.75 8L5.25 5.5M2.75 8L5.25 10.5", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }) }),
    o
  ] }) });
}
function Ze({ href: r = null, className: a, children: o = "Next" }) {
  return /* @__PURE__ */ e.jsx("span", { className: t(a, "flex grow basis-0 justify-end"), children: /* @__PURE__ */ e.jsxs(k, { ...r === null ? { disabled: !0 } : { href: r }, plain: !0, "aria-label": "Next page", children: [
    o,
    /* @__PURE__ */ e.jsx("svg", { className: "stroke-current", "data-slot": "icon", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ e.jsx("path", { d: "M13.25 8L2.75 8M13.25 8L10.75 10.5M13.25 8L10.75 5.5", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }) })
  ] }) });
}
function Qe({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx("span", { ...a, className: t(r, "hidden items-baseline gap-x-2 sm:flex") });
}
function Je({ href: r, className: a, current: o = !1, children: i }) {
  return /* @__PURE__ */ e.jsx(
    k,
    {
      href: r,
      plain: !0,
      "aria-label": `Page ${i}`,
      "aria-current": o ? "page" : void 0,
      className: t(a, "before:-inset-px min-w-[2.25rem] before:absolute before:rounded-lg", o && "before:bg-zinc-950/5 dark:before:bg-white/10"),
      children: /* @__PURE__ */ e.jsx("span", { className: "-mx-0.5", children: i })
    }
  );
}
function Ke({ className: r, children: a = /* @__PURE__ */ e.jsx(e.Fragment, { children: "…" }), ...o }) {
  return /* @__PURE__ */ e.jsx("span", { "aria-hidden": "true", ...o, className: t(r, "w-[2.25rem] select-none text-center font-semibold text-sm/6 text-zinc-950 dark:text-white"), children: a });
}
function Ue({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx(
    c.RadioGroup,
    {
      "data-slot": "control",
      ...a,
      className: t(
        r,
        // Basic groups
        "space-y-3 **:data-[slot=label]:font-normal",
        // With descriptions
        "has-data-[slot=description]:space-y-6 has-data-[slot=description]:**:data-[slot=label]:font-medium"
      )
    }
  );
}
function Ve({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx(
    c.Field,
    {
      "data-slot": "field",
      ...a,
      className: t(
        r,
        // Base layout
        "grid grid-cols-[1.125rem_1fr] gap-x-4 gap-y-1 sm:grid-cols-[1rem_1fr]",
        // Control layout
        "*:data-[slot=control]:col-start-1 *:data-[slot=control]:row-start-1 *:data-[slot=control]:mt-0.75 sm:*:data-[slot=control]:mt-1",
        // Label layout
        "*:data-[slot=label]:col-start-2 *:data-[slot=label]:row-start-1",
        // Description layout
        "*:data-[slot=description]:col-start-2 *:data-[slot=description]:row-start-2",
        // With description
        "has-data-[slot=description]:**:data-[slot=label]:font-medium"
      )
    }
  );
}
const Xe = [
  // Basic layout
  "relative isolate flex size-[1.1875rem] shrink-0 rounded-full sm:size-[1.0625rem]",
  // Background color + shadow applied to inset pseudo element, so shadow blends with border in light mode
  "before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-white before:shadow-sm",
  // Background color when checked
  "group-data-checked:before:bg-(--radio-checked-bg)",
  // Background color is moved to control and shadow is removed in dark mode so hide `before` pseudo
  "dark:before:hidden",
  // Background color applied to control in dark mode
  "dark:bg-white/5 dark:group-data-checked:bg-(--radio-checked-bg)",
  // Border
  "border border-zinc-950/15 group-data-checked:border-transparent group-data-hover:group-data-checked:border-transparent group-data-hover:border-zinc-950/30 group-data-checked:bg-(--radio-checked-border)",
  "dark:border-white/15 dark:group-data-checked:border-white/5 dark:group-data-hover:group-data-checked:border-white/5 dark:group-data-hover:border-white/30",
  // Inner highlight shadow
  "after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_1px_--theme(--color-white/15%)]",
  "dark:after:-inset-px dark:after:hidden dark:after:rounded-full dark:group-data-checked:after:block",
  // Indicator color (light mode)
  "[--radio-indicator:transparent] group-data-checked:[--radio-indicator:var(--radio-checked-indicator)] group-data-hover:group-data-checked:[--radio-indicator:var(--radio-checked-indicator)] group-data-hover:[--radio-indicator:var(--color-zinc-900)]/10",
  // Indicator color (dark mode)
  "dark:group-data-hover:group-data-checked:[--radio-indicator:var(--radio-checked-indicator)] dark:group-data-hover:[--radio-indicator:var(--color-zinc-700)]",
  // Focus ring
  "group-data-focus:outline group-data-focus:outline-2 group-data-focus:outline-offset-2 group-data-focus:outline-blue-500",
  // Disabled state
  "group-data-disabled:opacity-50",
  "group-data-disabled:border-zinc-950/25 group-data-disabled:bg-zinc-950/5 group-data-disabled:[--radio-checked-indicator:var(--color-zinc-950)]/50 group-data-disabled:before:bg-transparent",
  "dark:group-data-disabled:border-white/20 dark:group-data-disabled:bg-white/[2.5%] dark:group-data-disabled:[--radio-checked-indicator:var(--color-white)]/50 dark:group-data-checked:group-data-disabled:after:hidden"
], Ye = {
  "dark/zinc": ["[--radio-checked-bg:var(--color-zinc-900)] [--radio-checked-border:var(--color-zinc-950)]/90 [--radio-checked-indicator:var(--color-white)]", "dark:[--radio-checked-bg:var(--color-zinc-600)]"],
  "dark/white": [
    "[--radio-checked-bg:var(--color-zinc-900)] [--radio-checked-border:var(--color-zinc-950)]/90 [--radio-checked-indicator:var(--color-white)]",
    "dark:[--radio-checked-bg:var(--color-white)] dark:[--radio-checked-border:var(--color-zinc-950)]/15 dark:[--radio-checked-indicator:var(--color-zinc-900)]"
  ],
  white: "[--radio-checked-bg:var(--color-white)] [--radio-checked-border:var(--color-zinc-950)]/15 [--radio-checked-indicator:var(--color-zinc-900)]",
  dark: "[--radio-checked-bg:var(--color-zinc-900)] [--radio-checked-border:var(--color-zinc-950)]/90 [--radio-checked-indicator:var(--color-white)]",
  zinc: "[--radio-checked-indicator:var(--color-white)] [--radio-checked-bg:var(--color-zinc-600)] [--radio-checked-border:var(--color-zinc-700)]/90",
  red: "[--radio-checked-indicator:var(--color-white)] [--radio-checked-bg:var(--color-red-600)] [--radio-checked-border:var(--color-red-700)]/90",
  orange: "[--radio-checked-indicator:var(--color-white)] [--radio-checked-bg:var(--color-orange-500)] [--radio-checked-border:var(--color-orange-600)]/90",
  amber: "[--radio-checked-bg:var(--color-amber-400)] [--radio-checked-border:var(--color-amber-500)]/80 [--radio-checked-indicator:var(--color-amber-950)]",
  yellow: "[--radio-checked-bg:var(--color-yellow-300)] [--radio-checked-border:var(--color-yellow-400)]/80 [--radio-checked-indicator:var(--color-yellow-950)]",
  lime: "[--radio-checked-bg:var(--color-lime-300)] [--radio-checked-border:var(--color-lime-400)]/80 [--radio-checked-indicator:var(--color-lime-950)]",
  green: "[--radio-checked-indicator:var(--color-white)] [--radio-checked-bg:var(--color-green-600)] [--radio-checked-border:var(--color-green-700)]/90",
  emerald: "[--radio-checked-indicator:var(--color-white)] [--radio-checked-bg:var(--color-emerald-600)] [--radio-checked-border:var(--color-emerald-700)]/90",
  teal: "[--radio-checked-indicator:var(--color-white)] [--radio-checked-bg:var(--color-teal-600)] [--radio-checked-border:var(--color-teal-700)]/90",
  cyan: "[--radio-checked-bg:var(--color-cyan-300)] [--radio-checked-border:var(--color-cyan-400)]/80 [--radio-checked-indicator:var(--color-cyan-950)]",
  sky: "[--radio-checked-indicator:var(--color-white)] [--radio-checked-bg:var(--color-sky-500)] [--radio-checked-border:var(--color-sky-600)]/80",
  blue: "[--radio-checked-indicator:var(--color-white)] [--radio-checked-bg:var(--color-blue-600)] [--radio-checked-border:var(--color-blue-700)]/90",
  indigo: "[--radio-checked-indicator:var(--color-white)] [--radio-checked-bg:var(--color-indigo-500)] [--radio-checked-border:var(--color-indigo-600)]/90",
  violet: "[--radio-checked-indicator:var(--color-white)] [--radio-checked-bg:var(--color-violet-500)] [--radio-checked-border:var(--color-violet-600)]/90",
  purple: "[--radio-checked-indicator:var(--color-white)] [--radio-checked-bg:var(--color-purple-500)] [--radio-checked-border:var(--color-purple-600)]/90",
  fuchsia: "[--radio-checked-indicator:var(--color-white)] [--radio-checked-bg:var(--color-fuchsia-500)] [--radio-checked-border:var(--color-fuchsia-600)]/90",
  pink: "[--radio-checked-indicator:var(--color-white)] [--radio-checked-bg:var(--color-pink-500)] [--radio-checked-border:var(--color-pink-600)]/90",
  rose: "[--radio-checked-indicator:var(--color-white)] [--radio-checked-bg:var(--color-rose-500)] [--radio-checked-border:var(--color-rose-600)]/90"
};
function qe({ color: r = "dark/zinc", className: a, ...o }) {
  return /* @__PURE__ */ e.jsx(c.Radio, { "data-slot": "control", ...o, className: t(a, "group inline-flex focus:outline-hidden"), children: /* @__PURE__ */ e.jsx("span", { className: t([Xe, Ye[r]]), children: /* @__PURE__ */ e.jsx(
    "span",
    {
      className: t(
        "size-full rounded-full border-[4.5px] border-transparent bg-(--radio-indicator) bg-clip-padding",
        // Forced colors mode
        "forced-colors:border-[Canvas] forced-colors:group-data-checked:border-[Highlight]"
      )
    }
  ) }) });
}
const _a = u(function({ className: a, multiple: o, ...i }, n) {
  const d = n;
  return /* @__PURE__ */ e.jsxs(
    "span",
    {
      "data-slot": "control",
      className: t([
        a,
        // Basic layout
        "group relative block w-full",
        // Background color + shadow applied to inset pseudo element, so shadow blends with border in light mode
        "before:absolute before:inset-px before:rounded-[calc(var(--radius-lg)-1px)] before:bg-white before:shadow-sm",
        // Background color is moved to control and shadow is removed in dark mode so hide `before` pseudo
        "dark:before:hidden",
        // Focus ring
        "after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-transparent after:ring-inset has-data-focus:after:ring-2 has-data-focus:after:ring-blue-500",
        // Disabled state
        "has-data-disabled:opacity-50 has-data-disabled:before:bg-zinc-950/5 has-data-disabled:before:shadow-none"
      ]),
      children: [
        /* @__PURE__ */ e.jsx(
          c.Select,
          {
            ref: d,
            multiple: o,
            ...i,
            className: t([
              // Basic layout
              "relative block w-full appearance-none rounded-lg py-[calc(--spacing(2.5)-1px)] sm:py-[calc(--spacing(1.5)-1px)]",
              // Horizontal padding
              o ? "px-[calc(--spacing(3.5)-1px)] sm:px-[calc(--spacing(3)-1px)]" : "pr-[calc(--spacing(10)-1px)] pl-[calc(--spacing(3.5)-1px)] sm:pr-[calc(--spacing(9)-1px)] sm:pl-[calc(--spacing(3)-1px)]",
              // Options (multi-select)
              "[&_optgroup]:font-semibold",
              // Typography
              "text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white dark:*:text-white",
              // Border
              "border border-zinc-950/10 data-hover:border-zinc-950/20 dark:border-white/10 dark:data-hover:border-white/20",
              // Background color
              "bg-transparent dark:bg-white/5 dark:*:bg-zinc-800",
              // Hide default focus styles
              "focus:outline-hidden",
              // Invalid state
              "data-invalid:data-hover:border-red-500 data-invalid:border-red-500 dark:data-invalid:data-hover:border-red-600 dark:data-invalid:border-red-600",
              // Disabled state
              "data-disabled:border-zinc-950/20 data-disabled:opacity-100 dark:data-hover:data-disabled:border-white/15 dark:data-disabled:border-white/15 dark:data-disabled:bg-white/[2.5%]"
            ])
          }
        ),
        !o && /* @__PURE__ */ e.jsx("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2", children: /* @__PURE__ */ e.jsxs("svg", { className: "size-5 stroke-zinc-500 group-has-data-disabled:stroke-zinc-600 sm:size-4 dark:stroke-zinc-400 forced-colors:stroke-[CanvasText]", viewBox: "0 0 16 16", "aria-hidden": "true", fill: "none", children: [
          /* @__PURE__ */ e.jsx("path", { d: "M5.75 10.75L8 13L10.25 10.75", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }),
          /* @__PURE__ */ e.jsx("path", { d: "M10.25 5.25L8 3L5.75 5.25", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })
        ] }) })
      ]
    }
  );
});
function ea() {
  return /* @__PURE__ */ e.jsx("svg", { "data-slot": "icon", viewBox: "0 0 20 20", "aria-hidden": "true", children: /* @__PURE__ */ e.jsx("path", { d: "M2 6.75C2 6.33579 2.33579 6 2.75 6H17.25C17.6642 6 18 6.33579 18 6.75C18 7.16421 17.6642 7.5 17.25 7.5H2.75C2.33579 7.5 2 7.16421 2 6.75ZM2 13.25C2 12.8358 2.33579 12.5 2.75 12.5H17.25C17.6642 12.5 18 12.8358 18 13.25C18 13.6642 17.6642 14 17.25 14H2.75C2.33579 14 2 13.6642 2 13.25Z" }) });
}
function aa() {
  return /* @__PURE__ */ e.jsx("svg", { "data-slot": "icon", viewBox: "0 0 20 20", "aria-hidden": "true", children: /* @__PURE__ */ e.jsx("path", { d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" }) });
}
function ra({ open: r, close: a, className: o, children: i }) {
  return /* @__PURE__ */ e.jsxs(c.Dialog, { open: r, onClose: a, className: "lg:hidden", children: [
    /* @__PURE__ */ e.jsx(c.DialogBackdrop, { transition: !0, className: "fixed inset-0 bg-black/30 transition data-closed:opacity-0 data-enter:duration-300 data-leave:duration-200 data-enter:ease-out data-leave:ease-in" }),
    /* @__PURE__ */ e.jsx(c.DialogPanel, { transition: !0, className: "data-closed:-translate-x-full fixed inset-y-0 w-full max-w-80 p-2 transition duration-300 ease-in-out", children: /* @__PURE__ */ e.jsxs("div", { className: t([o ?? "bg-white dark:bg-zinc-900", "flex h-full flex-col rounded-lg shadow-xs ring-1 ring-zinc-950/5 dark:ring-white/10"]), children: [
      /* @__PURE__ */ e.jsx("div", { className: "-mb-3 px-4 pt-3", children: /* @__PURE__ */ e.jsx(c.CloseButton, { as: m, "aria-label": "Close navigation", children: /* @__PURE__ */ e.jsx(aa, {}) }) }),
      i
    ] }) })
  ] });
}
function Ha({ navbar: r, sidebar: a, className: o, children: i }) {
  const [n, d] = z(!1);
  return /* @__PURE__ */ e.jsxs("div", { className: t([i && "min-h-svh", o ?? "bg-white lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950", "relative isolate flex w-full flex-col"]), children: [
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-y-0 left-0 w-64 max-lg:hidden", children: a }),
    /* @__PURE__ */ e.jsx(ra, { open: n, close: () => d(!1), children: a }),
    /* @__PURE__ */ e.jsxs("header", { className: "flex items-center px-4 lg:hidden", children: [
      /* @__PURE__ */ e.jsx("div", { className: "py-2.5", children: /* @__PURE__ */ e.jsx(m, { onClick: () => d(!0), "aria-label": "Open navigation", children: /* @__PURE__ */ e.jsx(ea, {}) }) }),
      /* @__PURE__ */ e.jsx("div", { className: "min-w-0 flex-1", children: r })
    ] }),
    /* @__PURE__ */ e.jsx("main", { className: "flex flex-1 flex-col pb-2 lg:min-w-0 lg:pt-2 lg:pr-2 lg:pl-64", children: /* @__PURE__ */ e.jsx("div", { className: "grow p-6 lg:rounded-lg lg:bg-white lg:p-10 lg:shadow-xs lg:ring-1 lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10", children: /* @__PURE__ */ e.jsx("div", { className: "mx-auto max-w-6xl", children: i }) }) })
  ] });
}
function ta({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx("nav", { ...a, className: t(r, "flex h-full min-h-0 flex-col") });
}
function oa({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx("div", { ...a, className: t(r, "flex flex-col border-zinc-950/5 border-b p-4 dark:border-white/5 [&>[data-slot=section]+[data-slot=section]]:mt-2.5") });
}
function ia({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx("div", { ...a, className: t(r, "flex flex-1 flex-col overflow-y-auto p-4 [&>[data-slot=section]+[data-slot=section]]:mt-8") });
}
function ca({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx("div", { ...a, className: t(r, "flex flex-col border-zinc-950/5 border-t p-4 dark:border-white/5 [&>[data-slot=section]+[data-slot=section]]:mt-2.5") });
}
function na({ className: r, ...a }) {
  const o = D();
  return /* @__PURE__ */ e.jsx("div", { id: o, children: /* @__PURE__ */ e.jsx("div", { ...a, "data-slot": "section", className: t(r, "flex flex-col gap-0.5") }) });
}
function da({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx("hr", { ...a, className: t(r, "lg:-mx-4 my-4 border-zinc-950/5 border-t dark:border-white/5") });
}
function sa({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx("div", { "aria-hidden": "true", ...a, className: t(r, "mt-8 flex-1") });
}
function la({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx("h3", { ...a, className: t(r, "mb-1 px-2 font-medium text-xs/6 text-zinc-500 dark:text-zinc-400") });
}
const ha = u(function({ current: a, className: o, children: i, ...n }, d) {
  const s = t(
    // Base
    "flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-left font-medium text-base/6 text-zinc-950 sm:py-2 sm:text-sm/5",
    // Leading icon/icon-only
    "*:data-[slot=icon]:size-6 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:fill-zinc-500 sm:*:data-[slot=icon]:size-5",
    // Trailing icon (down chevron or similar)
    "*:last:data-[slot=icon]:ml-auto *:last:data-[slot=icon]:size-5 sm:*:last:data-[slot=icon]:size-4",
    // Avatar
    "*:data-[slot=avatar]:-m-0.5 *:data-[slot=avatar]:size-7 sm:*:data-[slot=avatar]:size-6",
    // Hover
    "data-hover:bg-zinc-950/5 data-hover:*:data-[slot=icon]:fill-zinc-950",
    // Active
    "data-active:bg-zinc-950/5 data-active:*:data-[slot=icon]:fill-zinc-950",
    // Current
    "data-current:*:data-[slot=icon]:fill-zinc-950",
    // Dark mode
    "dark:text-white dark:*:data-[slot=icon]:fill-zinc-400",
    "dark:data-hover:bg-white/5 dark:data-hover:*:data-[slot=icon]:fill-white",
    "dark:data-active:bg-white/5 dark:data-active:*:data-[slot=icon]:fill-white",
    "dark:data-current:*:data-[slot=icon]:fill-white"
  );
  return /* @__PURE__ */ e.jsxs("span", { className: t(o, "relative"), children: [
    a && /* @__PURE__ */ e.jsx("span", { className: "-left-4 absolute inset-y-2 w-0.5 rounded-full bg-zinc-950 dark:bg-white" }),
    "href" in n ? /* @__PURE__ */ e.jsx(c.CloseButton, { as: x, ...n, className: s, "data-current": a ? "true" : void 0, ref: d, children: /* @__PURE__ */ e.jsx(h, { children: i }) }) : /* @__PURE__ */ e.jsx(c.Button, { ...n, className: t("cursor-default", s), "data-current": a ? "true" : void 0, ref: d, children: /* @__PURE__ */ e.jsx(h, { children: i }) })
  ] });
});
function ba({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx("span", { ...a, className: t(r, "truncate") });
}
function ga() {
  return /* @__PURE__ */ e.jsx("svg", { "data-slot": "icon", viewBox: "0 0 20 20", "aria-hidden": "true", children: /* @__PURE__ */ e.jsx("path", { d: "M2 6.75C2 6.33579 2.33579 6 2.75 6H17.25C17.6642 6 18 6.33579 18 6.75C18 7.16421 17.6642 7.5 17.25 7.5H2.75C2.33579 7.5 2 7.16421 2 6.75ZM2 13.25C2 12.8358 2.33579 12.5 2.75 12.5H17.25C17.6642 12.5 18 12.8358 18 13.25C18 13.6642 17.6642 14 17.25 14H2.75C2.33579 14 2 13.6642 2 13.25Z" }) });
}
function ua() {
  return /* @__PURE__ */ e.jsx("svg", { "data-slot": "icon", viewBox: "0 0 20 20", "aria-hidden": "true", children: /* @__PURE__ */ e.jsx("path", { d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" }) });
}
function xa({ open: r, close: a, className: o, children: i }) {
  return /* @__PURE__ */ e.jsxs(c.Dialog, { open: r, onClose: a, className: "lg:hidden", children: [
    /* @__PURE__ */ e.jsx(c.DialogBackdrop, { transition: !0, className: "fixed inset-0 bg-black/30 transition data-closed:opacity-0 data-enter:duration-300 data-leave:duration-200 data-enter:ease-out data-leave:ease-in" }),
    /* @__PURE__ */ e.jsx(c.DialogPanel, { transition: !0, className: "data-closed:-translate-x-full fixed inset-y-0 w-full max-w-80 p-2 transition duration-300 ease-in-out", children: /* @__PURE__ */ e.jsxs("div", { className: t([o ?? "bg-white dark:bg-zinc-900", "flex h-full flex-col rounded-lg shadow-xs ring-1 ring-zinc-950/5 dark:ring-white/10"]), children: [
      /* @__PURE__ */ e.jsx("div", { className: "-mb-3 px-4 pt-3", children: /* @__PURE__ */ e.jsx(c.CloseButton, { as: m, "aria-label": "Close navigation", children: /* @__PURE__ */ e.jsx(ua, {}) }) }),
      i
    ] }) })
  ] });
}
function Ma({ navbar: r, sidebar: a, className: o, children: i }) {
  const [n, d] = z(!1);
  return /* @__PURE__ */ e.jsxs("div", { className: t([i && "min-h-svh", o ?? "bg-white lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950", "relative isolate flex w-full flex-col"]), children: [
    /* @__PURE__ */ e.jsx(xa, { open: n, close: () => d(!1), children: a }),
    /* @__PURE__ */ e.jsxs("header", { className: "flex items-center px-4", children: [
      /* @__PURE__ */ e.jsx("div", { className: "py-2.5 lg:hidden", children: /* @__PURE__ */ e.jsx(m, { onClick: () => d(!0), "aria-label": "Open navigation", children: /* @__PURE__ */ e.jsx(ga, {}) }) }),
      /* @__PURE__ */ e.jsx("div", { className: "min-w-0 flex-1", children: r })
    ] }),
    i && /* @__PURE__ */ e.jsx("main", { className: "flex flex-1 flex-col pb-2 lg:px-2", children: /* @__PURE__ */ e.jsx("div", { className: t(["grow p-6 lg:rounded-lg lg:bg-white lg:p-10 lg:shadow-xs lg:ring-1 lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10"]), children: /* @__PURE__ */ e.jsx("div", { className: "mx-auto max-w-6xl", children: i }) }) })
  ] });
}
function va({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      "data-slot": "control",
      ...a,
      className: t(
        r,
        // Basic groups
        "space-y-3 **:data-[slot=label]:font-normal",
        // With descriptions
        "has-data-[slot=description]:space-y-6 has-data-[slot=description]:**:data-[slot=label]:font-medium"
      )
    }
  );
}
function pa({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx(
    c.Field,
    {
      "data-slot": "field",
      ...a,
      className: t(
        r,
        // Base layout
        "grid grid-cols-[1fr_auto] gap-x-8 gap-y-1 sm:grid-cols-[1fr_auto]",
        // Control layout
        "*:data-[slot=control]:col-start-2 *:data-[slot=control]:self-start sm:*:data-[slot=control]:mt-0.5",
        // Label layout
        "*:data-[slot=label]:col-start-1 *:data-[slot=label]:row-start-1",
        // Description layout
        "*:data-[slot=description]:col-start-1 *:data-[slot=description]:row-start-2",
        // With description
        "has-data-[slot=description]:**:data-[slot=label]:font-medium"
      )
    }
  );
}
const ka = {
  "dark/zinc": [
    "[--switch-bg-ring:var(--color-zinc-950)]/90 [--switch-bg:var(--color-zinc-900)] dark:[--switch-bg-ring:transparent] dark:[--switch-bg:var(--color-white)]/25",
    "[--switch-ring:var(--color-zinc-950)]/90 [--switch-shadow:var(--color-black)]/10 [--switch:white] dark:[--switch-ring:var(--color-zinc-700)]/90"
  ],
  "dark/white": [
    "[--switch-bg-ring:var(--color-zinc-950)]/90 [--switch-bg:var(--color-zinc-900)] dark:[--switch-bg-ring:transparent] dark:[--switch-bg:var(--color-white)]",
    "[--switch-ring:var(--color-zinc-950)]/90 [--switch-shadow:var(--color-black)]/10 [--switch:white] dark:[--switch-ring:transparent] dark:[--switch:var(--color-zinc-900)]"
  ],
  dark: [
    "[--switch-bg-ring:var(--color-zinc-950)]/90 [--switch-bg:var(--color-zinc-900)] dark:[--switch-bg-ring:var(--color-white)]/15",
    "[--switch-ring:var(--color-zinc-950)]/90 [--switch-shadow:var(--color-black)]/10 [--switch:white]"
  ],
  zinc: [
    "[--switch-bg-ring:var(--color-zinc-700)]/90 [--switch-bg:var(--color-zinc-600)] dark:[--switch-bg-ring:transparent]",
    "[--switch-shadow:var(--color-black)]/10 [--switch:white] [--switch-ring:var(--color-zinc-700)]/90"
  ],
  white: ["[--switch-bg-ring:var(--color-black)]/15 [--switch-bg:white] dark:[--switch-bg-ring:transparent]", "[--switch-shadow:var(--color-black)]/10 [--switch-ring:transparent] [--switch:var(--color-zinc-950)]"],
  red: ["[--switch-bg-ring:var(--color-red-700)]/90 [--switch-bg:var(--color-red-600)] dark:[--switch-bg-ring:transparent]", "[--switch:white] [--switch-ring:var(--color-red-700)]/90 [--switch-shadow:var(--color-red-900)]/20"],
  orange: [
    "[--switch-bg-ring:var(--color-orange-600)]/90 [--switch-bg:var(--color-orange-500)] dark:[--switch-bg-ring:transparent]",
    "[--switch:white] [--switch-ring:var(--color-orange-600)]/90 [--switch-shadow:var(--color-orange-900)]/20"
  ],
  amber: ["[--switch-bg-ring:var(--color-amber-500)]/80 [--switch-bg:var(--color-amber-400)] dark:[--switch-bg-ring:transparent]", "[--switch-ring:transparent] [--switch-shadow:transparent] [--switch:var(--color-amber-950)]"],
  yellow: [
    "[--switch-bg-ring:var(--color-yellow-400)]/80 [--switch-bg:var(--color-yellow-300)] dark:[--switch-bg-ring:transparent]",
    "[--switch-ring:transparent] [--switch-shadow:transparent] [--switch:var(--color-yellow-950)]"
  ],
  lime: ["[--switch-bg-ring:var(--color-lime-400)]/80 [--switch-bg:var(--color-lime-300)] dark:[--switch-bg-ring:transparent]", "[--switch-ring:transparent] [--switch-shadow:transparent] [--switch:var(--color-lime-950)]"],
  green: [
    "[--switch-bg-ring:var(--color-green-700)]/90 [--switch-bg:var(--color-green-600)] dark:[--switch-bg-ring:transparent]",
    "[--switch:white] [--switch-ring:var(--color-green-700)]/90 [--switch-shadow:var(--color-green-900)]/20"
  ],
  emerald: [
    "[--switch-bg-ring:var(--color-emerald-600)]/90 [--switch-bg:var(--color-emerald-500)] dark:[--switch-bg-ring:transparent]",
    "[--switch:white] [--switch-ring:var(--color-emerald-600)]/90 [--switch-shadow:var(--color-emerald-900)]/20"
  ],
  teal: [
    "[--switch-bg-ring:var(--color-teal-700)]/90 [--switch-bg:var(--color-teal-600)] dark:[--switch-bg-ring:transparent]",
    "[--switch:white] [--switch-ring:var(--color-teal-700)]/90 [--switch-shadow:var(--color-teal-900)]/20"
  ],
  cyan: ["[--switch-bg-ring:var(--color-cyan-400)]/80 [--switch-bg:var(--color-cyan-300)] dark:[--switch-bg-ring:transparent]", "[--switch-ring:transparent] [--switch-shadow:transparent] [--switch:var(--color-cyan-950)]"],
  sky: ["[--switch-bg-ring:var(--color-sky-600)]/80 [--switch-bg:var(--color-sky-500)] dark:[--switch-bg-ring:transparent]", "[--switch:white] [--switch-ring:var(--color-sky-600)]/80 [--switch-shadow:var(--color-sky-900)]/20"],
  blue: [
    "[--switch-bg-ring:var(--color-blue-700)]/90 [--switch-bg:var(--color-blue-600)] dark:[--switch-bg-ring:transparent]",
    "[--switch:white] [--switch-ring:var(--color-blue-700)]/90 [--switch-shadow:var(--color-blue-900)]/20"
  ],
  indigo: [
    "[--switch-bg-ring:var(--color-indigo-600)]/90 [--switch-bg:var(--color-indigo-500)] dark:[--switch-bg-ring:transparent]",
    "[--switch:white] [--switch-ring:var(--color-indigo-600)]/90 [--switch-shadow:var(--color-indigo-900)]/20"
  ],
  violet: [
    "[--switch-bg-ring:var(--color-violet-600)]/90 [--switch-bg:var(--color-violet-500)] dark:[--switch-bg-ring:transparent]",
    "[--switch:white] [--switch-ring:var(--color-violet-600)]/90 [--switch-shadow:var(--color-violet-900)]/20"
  ],
  purple: [
    "[--switch-bg-ring:var(--color-purple-600)]/90 [--switch-bg:var(--color-purple-500)] dark:[--switch-bg-ring:transparent]",
    "[--switch:white] [--switch-ring:var(--color-purple-600)]/90 [--switch-shadow:var(--color-purple-900)]/20"
  ],
  fuchsia: [
    "[--switch-bg-ring:var(--color-fuchsia-600)]/90 [--switch-bg:var(--color-fuchsia-500)] dark:[--switch-bg-ring:transparent]",
    "[--switch:white] [--switch-ring:var(--color-fuchsia-600)]/90 [--switch-shadow:var(--color-fuchsia-900)]/20"
  ],
  pink: [
    "[--switch-bg-ring:var(--color-pink-600)]/90 [--switch-bg:var(--color-pink-500)] dark:[--switch-bg-ring:transparent]",
    "[--switch:white] [--switch-ring:var(--color-pink-600)]/90 [--switch-shadow:var(--color-pink-900)]/20"
  ],
  rose: [
    "[--switch-bg-ring:var(--color-rose-600)]/90 [--switch-bg:var(--color-rose-500)] dark:[--switch-bg-ring:transparent]",
    "[--switch:white] [--switch-ring:var(--color-rose-600)]/90 [--switch-shadow:var(--color-rose-900)]/20"
  ]
};
function ma({
  color: r = "dark/zinc",
  className: a,
  ...o
}) {
  return /* @__PURE__ */ e.jsx(
    c.Switch,
    {
      "data-slot": "control",
      ...o,
      className: t(
        a,
        // Base styles
        "group relative isolate inline-flex h-6 w-10 cursor-default rounded-full p-[3px] sm:h-5 sm:w-8",
        // Transitions
        "transition duration-0 ease-in-out data-changing:duration-200",
        // Outline and background color in forced-colors mode so switch is still visible
        "forced-colors:outline forced-colors:[--switch-bg:Highlight] dark:forced-colors:[--switch-bg:Highlight]",
        // Unchecked
        "bg-zinc-200 ring-1 ring-black/5 ring-inset dark:bg-white/5 dark:ring-white/15",
        // Checked
        "data-checked:bg-(--switch-bg) data-checked:ring-(--switch-bg-ring) dark:data-checked:bg-(--switch-bg) dark:data-checked:ring-(--switch-bg-ring)",
        // Focus
        "focus:outline-hidden data-focus:outline-2 data-focus:outline-blue-500 data-focus:outline-offset-2",
        // Hover
        "data-hover:data-checked:ring-(--switch-bg-ring) data-hover:ring-black/15",
        "dark:data-hover:data-checked:ring-(--switch-bg-ring) dark:data-hover:ring-white/25",
        // Disabled
        "data-disabled:data-checked:bg-zinc-200 data-disabled:data-checked:ring-black/5 data-disabled:bg-zinc-200 data-disabled:opacity-50",
        "dark:data-disabled:data-checked:bg-white/15 dark:data-disabled:data-checked:ring-white/15 dark:data-disabled:bg-white/15",
        // Color specific styles
        ka[r]
      ),
      children: /* @__PURE__ */ e.jsx(
        "span",
        {
          "aria-hidden": "true",
          className: t(
            // Basic layout
            "pointer-events-none relative inline-block size-[1.125rem] rounded-full sm:size-3.5",
            // Transition
            "translate-x-0 transition duration-200 ease-in-out",
            // Invisible border so the switch is still visible in forced-colors mode
            "border border-transparent",
            // Unchecked
            "bg-white shadow-sm ring-1 ring-black/5",
            // Checked
            "group-data-checked:bg-(--switch) group-data-checked:shadow-(--switch-shadow) group-data-checked:ring-(--switch-ring)",
            "group-data-checked:translate-x-4 sm:group-data-checked:translate-x-3",
            // Disabled
            "group-data-checked:group-data-disabled:bg-white group-data-checked:group-data-disabled:shadow-sm group-data-checked:group-data-disabled:ring-black/5"
          )
        }
      )
    }
  );
}
const j = B({
  bleed: !1,
  dense: !1,
  grid: !1,
  striped: !1
});
function fa({ bleed: r = !1, dense: a = !1, grid: o = !1, striped: i = !1, className: n, children: d, ...s }) {
  return /* @__PURE__ */ e.jsx(j.Provider, { value: { bleed: r, dense: a, grid: o, striped: i }, children: /* @__PURE__ */ e.jsx("div", { className: "flow-root", children: /* @__PURE__ */ e.jsx("div", { ...s, className: t(n, "-mx-(--gutter) overflow-x-auto whitespace-nowrap"), children: /* @__PURE__ */ e.jsx("div", { className: t("inline-block min-w-full align-middle", !r && "sm:px-(--gutter)"), children: /* @__PURE__ */ e.jsx("table", { className: "min-w-full text-left text-sm/6 text-zinc-950 dark:text-white", children: d }) }) }) }) });
}
function wa({ className: r, ...a }) {
  return /* @__PURE__ */ e.jsx("thead", { ...a, className: t(r, "text-zinc-500 dark:text-zinc-400") });
}
function za(r) {
  return /* @__PURE__ */ e.jsx("tbody", { ...r });
}
const S = B({
  href: void 0,
  target: void 0,
  title: void 0
});
function ja({ href: r, target: a, title: o, className: i, ...n }) {
  const { striped: d } = w(j);
  return /* @__PURE__ */ e.jsx(S.Provider, { value: { href: r, target: a, title: o }, children: /* @__PURE__ */ e.jsx(
    "tr",
    {
      ...n,
      className: t(
        i,
        r && "has-[[data-row-link][data-focus]]:-outline-offset-2 has-[[data-row-link][data-focus]]:outline-2 has-[[data-row-link][data-focus]]:outline-blue-500 dark:focus-within:bg-white/[2.5%]",
        d && "even:bg-zinc-950/[2.5%] dark:even:bg-white/[2.5%]",
        r && d && "hover:bg-zinc-950/5 dark:hover:bg-white/5",
        r && !d && "hover:bg-zinc-950/[2.5%] dark:hover:bg-white/[2.5%]"
      )
    }
  ) });
}
function ya({ className: r, ...a }) {
  const { bleed: o, grid: i } = w(j);
  return /* @__PURE__ */ e.jsx(
    "th",
    {
      ...a,
      className: t(
        r,
        "border-b border-b-zinc-950/10 px-4 py-2 font-medium first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) dark:border-b-white/10",
        i && "border-l border-l-zinc-950/5 first:border-l-0 dark:border-l-white/5",
        !o && "sm:last:pr-1 sm:first:pl-1"
      )
    }
  );
}
function Na({ className: r, children: a, ...o }) {
  const { bleed: i, dense: n, grid: d, striped: s } = w(j), { href: l, target: b, title: y } = w(S), [v, f] = z(null);
  return /* @__PURE__ */ e.jsxs(
    "td",
    {
      ref: l ? f : void 0,
      ...o,
      className: t(
        r,
        "relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2))",
        !s && "border-zinc-950/5 border-b dark:border-white/5",
        d && "border-l border-l-zinc-950/5 first:border-l-0 dark:border-l-white/5",
        n ? "py-2.5" : "py-4",
        !i && "sm:last:pr-1 sm:first:pl-1"
      ),
      children: [
        l && /* @__PURE__ */ e.jsx(x, { "data-row-link": !0, href: l, target: b, "aria-label": y, tabIndex: v?.previousElementSibling === null ? 0 : -1, className: "absolute inset-0 focus:outline-hidden" }),
        a
      ]
    }
  );
}
const Oa = u(function({ className: a, resizable: o = !0, ...i }, n) {
  return /* @__PURE__ */ e.jsx(
    "span",
    {
      "data-slot": "control",
      className: t([
        a,
        // Basic layout
        "relative block w-full",
        // Background color + shadow applied to inset pseudo element, so shadow blends with border in light mode
        "before:absolute before:inset-px before:rounded-[calc(var(--radius-lg)-1px)] before:bg-white before:shadow-sm",
        // Background color is moved to control and shadow is removed in dark mode so hide `before` pseudo
        "dark:before:hidden",
        // Focus ring
        "after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-transparent after:ring-inset sm:focus-within:after:ring-2 sm:focus-within:after:ring-blue-500",
        // Disabled state
        "has-data-disabled:opacity-50 has-data-disabled:before:bg-zinc-950/5 has-data-disabled:before:shadow-none"
      ]),
      children: /* @__PURE__ */ e.jsx(
        c.Textarea,
        {
          ref: n,
          ...i,
          className: t([
            // Basic layout
            "relative block h-full w-full appearance-none rounded-lg px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)]",
            // Typography
            "text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white",
            // Border
            "border border-zinc-950/10 data-hover:border-zinc-950/20 dark:border-white/10 dark:data-hover:border-white/20",
            // Background color
            "bg-transparent dark:bg-white/5",
            // Hide default focus styles
            "focus:outline-hidden",
            // Invalid state
            "data-invalid:data-hover:border-red-500 data-invalid:border-red-500 dark:data-invalid:data-hover:border-red-600 dark:data-invalid:border-red-600",
            // Disabled state
            "disabled:border-zinc-950/20 dark:disabled:border-white/15 dark:disabled:bg-white/[2.5%] dark:data-hover:disabled:border-white/15",
            // Resizable
            o ? "resize-y" : "resize-none"
          ])
        }
      )
    }
  );
}), $a = Object.assign(F, {
  Title: A,
  Description: R,
  Body: G,
  Actions: W
}), Ia = Object.assign(N, {
  Button: E
}), Pa = Object.assign(L, {
  Button: Q
}), Fa = Object.assign(k, {
  TouchTarget: h
}), Aa = Object.assign(X, {
  Field: K,
  Group: J
}), Ra = Object.assign(Y, {
  Option: q,
  Label: ee,
  Description: ae
}), Ga = Object.assign(re, {
  Term: te,
  Details: oe
}), Wa = Object.assign(ce, {
  Title: ne,
  Description: de,
  Body: se,
  Actions: le
}), Ea = Object.assign(he, {
  Button: be,
  Menu: ge,
  Item: ue,
  Header: xe,
  Section: ve,
  Heading: pe,
  Divider: ke,
  Label: me,
  Description: fe,
  Shortcut: we
}), Za = Object.assign(Ne, {
  Legend: je,
  Group: ye,
  Set: ze,
  Label: Le,
  Description: Ce,
  ErrorMessage: De
}), Qa = Object.assign(Be, {
  Sub: Se
}), Ja = Object.assign(He, {
  Group: Te
}), Ka = Object.assign(Me, {
  Option: Oe,
  Label: $e,
  Description: Ie
}), Ua = Object.assign(Pe, {
  Divider: Fe,
  Section: Ae,
  Spacer: Re,
  Item: m,
  Label: Ge
}), Va = Object.assign(We, {
  Previous: Ee,
  Next: Ze,
  List: Qe,
  Page: Je,
  Gap: Ke
}), Xa = Object.assign(qe, {
  Field: Ve,
  Group: Ue
}), Ya = Object.assign(ta, {
  Header: oa,
  Body: ia,
  Footer: ca,
  Section: na,
  Divider: da,
  Spacer: sa,
  Heading: la,
  Item: ha,
  Label: ba
}), qa = Object.assign(ma, {
  Field: pa,
  Group: va
}), er = Object.assign(fa, {
  Head: wa,
  Body: za,
  Row: ja,
  Header: ya,
  Cell: Na
}), ar = Object.assign(C, {
  Link: O,
  Strong: $,
  Code: I
});
export {
  $a as Alert,
  Sa as AuthLayout,
  Ia as Avatar,
  Pa as Badge,
  Fa as Button,
  Aa as Checkbox,
  Ra as Combobox,
  Ga as DescriptionList,
  Wa as Dialog,
  Ta as Divider,
  Ea as Dropdown,
  De as ErrorMessage,
  Za as Field,
  Qa as Heading,
  Ja as Input,
  Le as Label,
  x as Link,
  Ka as Listbox,
  Ua as Navbar,
  Va as Pagination,
  Xa as Radio,
  _a as Select,
  Ya as Sidebar,
  Ha as SidebarLayout,
  Ma as StackedLayout,
  qa as Switch,
  er as Table,
  ar as Text,
  Oa as Textarea
};
//# sourceMappingURL=catalyst.js.map
