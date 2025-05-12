"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/stimulus/index.ts
var stimulus_exports = {};
__export(stimulus_exports, {
  Footer: () => Footer,
  Header: () => Header,
  SideMenu: () => SideMenu,
  StackMenu: () => StackMenu,
  ThemeProvider: () => import_next_themes2.ThemeProvider,
  ThemeSwitcher: () => ThemeSwitcher
});
module.exports = __toCommonJS(stimulus_exports);

// src/stimulus/NavMenu.tsx
var import_solid = require("@heroicons/react/16/solid");
var import_utils = require("@ycore/forge/utils");
var import_react15 = require("react");
var import_clsx26 = __toESM(require("clsx"), 1);
var import_react_router2 = require("react-router");

// src/catalyst/alert.tsx
var Headless2 = __toESM(require("@headlessui/react"), 1);
var import_clsx2 = __toESM(require("clsx"), 1);

// src/catalyst/text.tsx
var import_clsx = __toESM(require("clsx"), 1);

// src/catalyst/link.tsx
var Headless = __toESM(require("@headlessui/react"), 1);
var import_react = __toESM(require("react"), 1);
var import_react_router = require("react-router");
var import_jsx_runtime = require("react/jsx-runtime");
var Link = import_react.default.forwardRef(function Link2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Headless.DataInteractive, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_router.Link, { ...props, to: props.href, ref }) });
});

// src/catalyst/text.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function Text({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { "data-slot": "text", ...props, className: (0, import_clsx.default)(className, "text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400") });
}
function TextLink({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Link, { ...props, className: (0, import_clsx.default)(className, "text-zinc-950 underline decoration-zinc-950/50 data-hover:decoration-zinc-950 dark:text-white dark:decoration-white/50 dark:data-hover:decoration-white") });
}
function Strong({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("strong", { ...props, className: (0, import_clsx.default)(className, "font-medium text-zinc-950 dark:text-white") });
}
function Code({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("code", { ...props, className: (0, import_clsx.default)(className, "rounded-sm border border-zinc-950/10 bg-zinc-950/[2.5%] px-0.5 font-medium text-sm text-zinc-950 sm:text-[0.8125rem] dark:border-white/20 dark:bg-white/5 dark:text-white") });
}

// src/catalyst/alert.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var sizes = {
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
function Alert({ size = "md", className, children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(Headless2.Dialog, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      Headless2.DialogBackdrop,
      {
        transition: true,
        className: "fixed inset-0 flex w-screen justify-center overflow-y-auto bg-zinc-950/15 px-2 py-2 transition duration-100 focus:outline-0 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in sm:px-6 sm:py-8 lg:px-8 lg:py-16 dark:bg-zinc-950/50"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "fixed inset-0 w-screen overflow-y-auto pt-6 sm:pt-0", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "grid min-h-full grid-rows-[1fr_auto_1fr] justify-items-center p-8 sm:grid-rows-[1fr_auto_3fr] sm:p-4", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      Headless2.DialogPanel,
      {
        transition: true,
        className: (0, import_clsx2.default)(
          className,
          sizes[size],
          "row-start-2 w-full rounded-2xl bg-white p-8 shadow-lg ring-1 ring-zinc-950/10 sm:rounded-2xl sm:p-6 dark:bg-zinc-900 dark:ring-white/10 forced-colors:outline",
          "transition duration-100 will-change-transform data-closed:data-enter:scale-95 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
        ),
        children
      }
    ) }) })
  ] });
}
function AlertTitle({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Headless2.DialogTitle, { ...props, className: (0, import_clsx2.default)(className, "text-balance text-center font-semibold text-base/6 text-zinc-950 sm:text-wrap sm:text-left sm:text-sm/6 dark:text-white") });
}
function AlertDescription({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Headless2.Description, { as: Text, ...props, className: (0, import_clsx2.default)(className, "mt-2 text-pretty text-center sm:text-left") });
}
function AlertBody({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { ...props, className: (0, import_clsx2.default)(className, "mt-4") });
}
function AlertActions({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { ...props, className: (0, import_clsx2.default)(className, "mt-6 flex flex-col-reverse items-center justify-end gap-3 *:w-full sm:mt-4 sm:flex-row sm:*:w-auto") });
}

// src/catalyst/auth-layout.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");

// src/catalyst/avatar.tsx
var Headless4 = __toESM(require("@headlessui/react"), 1);
var import_clsx4 = __toESM(require("clsx"), 1);
var import_react3 = require("react");

// src/catalyst/button.tsx
var Headless3 = __toESM(require("@headlessui/react"), 1);
var import_clsx3 = __toESM(require("clsx"), 1);
var import_react2 = require("react");
var import_jsx_runtime5 = require("react/jsx-runtime");
var styles = {
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
};
var Button2 = (0, import_react2.forwardRef)(function Button3({ color, outline, plain, className, children, ...props }, ref) {
  const classes = (0, import_clsx3.default)(className, styles.base, outline ? styles.outline : plain ? styles.plain : (0, import_clsx3.default)(styles.solid, styles.colors[color ?? "dark/zinc"]));
  return "href" in props ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Link, { ...props, className: classes, ref, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(TouchTarget, { children }) }) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Headless3.Button, { ...props, className: (0, import_clsx3.default)(classes, "cursor-default"), ref, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(TouchTarget, { children }) });
});
function TouchTarget({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] [@media(pointer:fine)]:hidden", "aria-hidden": "true" }),
    children
  ] });
}

// src/catalyst/avatar.tsx
var import_jsx_runtime6 = (
  // biome-ignore lint/a11y/noSvgWithoutTitle:
  require("react/jsx-runtime")
);
function Avatar({ src = null, square = false, initials, alt = "", className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    "span",
    {
      "data-slot": "avatar",
      ...props,
      className: (0, import_clsx4.default)(
        className,
        // Basic layout
        "inline-grid shrink-0 align-middle [--avatar-radius:20%] *:col-start-1 *:row-start-1",
        "-outline-offset-1 outline outline-black/10 dark:outline-white/10",
        // Border radius
        square ? "rounded-(--avatar-radius) *:rounded-(--avatar-radius)" : "rounded-full *:rounded-full"
      ),
      children: [
        initials && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("svg", { className: "size-full select-none fill-current p-[5%] font-medium text-[48px] uppercase", viewBox: "0 0 100 100", "aria-hidden": alt ? void 0 : "true", children: [
          alt && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("title", { children: alt }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("text", { x: "50%", y: "50%", alignmentBaseline: "middle", dominantBaseline: "middle", textAnchor: "middle", dy: ".125em", children: initials })
        ] }),
        src && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("img", { className: "size-full", src, alt })
      ]
    }
  );
}
var AvatarButton = (0, import_react3.forwardRef)(function AvatarButton2({ src, square = false, initials, alt, className, ...props }, ref) {
  const classes = (0, import_clsx4.default)(className, square ? "rounded-[20%]" : "rounded-full", "relative inline-grid focus:outline-hidden data-focus:outline-2 data-focus:outline-blue-500 data-focus:outline-offset-2");
  return "href" in props ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Link, { ...props, className: classes, ref, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(TouchTarget, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Avatar, { src, square, initials, alt }) }) }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Headless4.Button, { ...props, className: classes, ref, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(TouchTarget, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Avatar, { src, square, initials, alt }) }) });
});

// src/catalyst/badge.tsx
var Headless5 = __toESM(require("@headlessui/react"), 1);
var import_clsx5 = __toESM(require("clsx"), 1);
var import_react4 = require("react");
var import_jsx_runtime7 = require("react/jsx-runtime");
var colors = {
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
function Badge({ color = "zinc", className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { ...props, className: (0, import_clsx5.default)(className, "inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 font-medium text-sm/5 sm:text-xs/5 forced-colors:outline", colors[color]) });
}
var BadgeButton = (0, import_react4.forwardRef)(function BadgeButton2({
  color = "zinc",
  className,
  children,
  ...props
}, ref) {
  const classes = (0, import_clsx5.default)(className, "group relative inline-flex rounded-md focus:outline-hidden data-focus:outline-2 data-focus:outline-blue-500 data-focus:outline-offset-2");
  return "href" in props ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Link, { ...props, className: classes, ref, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(TouchTarget, { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Badge, { color, children }) }) }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Headless5.Button, { ...props, className: classes, ref, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(TouchTarget, { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Badge, { color, children }) }) });
});

// src/catalyst/checkbox.tsx
var Headless6 = __toESM(require("@headlessui/react"), 1);
var import_clsx6 = __toESM(require("clsx"), 1);
var import_jsx_runtime8 = require("react/jsx-runtime");
function CheckboxGroup({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    "div",
    {
      "data-slot": "control",
      ...props,
      className: (0, import_clsx6.default)(
        className,
        // Basic groups
        "space-y-3",
        // With descriptions
        "has-data-[slot=description]:space-y-6 has-data-[slot=description]:**:data-[slot=label]:font-medium"
      )
    }
  );
}
function CheckboxField({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    Headless6.Field,
    {
      "data-slot": "field",
      ...props,
      className: (0, import_clsx6.default)(
        className,
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
var base = [
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
];
var colors2 = {
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
function Checkbox2({
  color = "dark/zinc",
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Headless6.Checkbox, { "data-slot": "control", ...props, className: (0, import_clsx6.default)(className, "group inline-flex focus:outline-hidden"), children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: (0, import_clsx6.default)([base, colors2[color]]), children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("svg", { className: "size-4 stroke-(--checkbox-check) opacity-0 group-data-checked:opacity-100 sm:h-3.5 sm:w-3.5", viewBox: "0 0 14 14", fill: "none", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { className: "opacity-100 group-data-indeterminate:opacity-0", d: "M3 8L6 11L11 3.5", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { className: "opacity-0 group-data-indeterminate:opacity-100", d: "M3 7H11", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
  ] }) }) });
}

// src/catalyst/combobox.tsx
var Headless7 = __toESM(require("@headlessui/react"), 1);
var import_clsx7 = __toESM(require("clsx"), 1);
var import_react5 = require("react");
var import_jsx_runtime9 = require("react/jsx-runtime");
function Combobox2({
  options,
  displayValue,
  filter,
  anchor = "bottom",
  className,
  placeholder,
  autoFocus,
  "aria-label": ariaLabel,
  children,
  ...props
}) {
  const [query, setQuery] = (0, import_react5.useState)("");
  const filteredOptions = query === "" ? options : options.filter((option) => filter ? filter(option, query) : displayValue(option)?.toLowerCase().includes(query.toLowerCase()));
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(Headless7.Combobox, { ...props, multiple: false, virtual: { options: filteredOptions }, onClose: () => setQuery(""), children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
      "span",
      {
        "data-slot": "control",
        className: (0, import_clsx7.default)([
          className,
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
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            Headless7.ComboboxInput,
            {
              autoFocus,
              "data-slot": "control",
              "aria-label": ariaLabel,
              displayValue: (option) => displayValue(option) ?? "",
              onChange: (event) => setQuery(event.target.value),
              placeholder,
              className: (0, import_clsx7.default)([
                className,
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
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Headless7.ComboboxButton, { className: "group absolute inset-y-0 right-0 flex items-center px-2", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
            "svg",
            {
              className: "size-5 stroke-zinc-500 group-data-disabled:stroke-zinc-600 group-data-hover:stroke-zinc-700 sm:size-4 dark:stroke-zinc-400 dark:group-data-hover:stroke-zinc-300 forced-colors:stroke-[CanvasText]",
              viewBox: "0 0 16 16",
              "aria-hidden": "true",
              fill: "none",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", { d: "M5.75 10.75L8 13L10.25 10.75", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", { d: "M10.25 5.25L8 3L5.75 5.25", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      Headless7.ComboboxOptions,
      {
        transition: true,
        anchor,
        className: (0, import_clsx7.default)(
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
        children: ({ option }) => children(option)
      }
    )
  ] });
}
function ComboboxOption2({ children, className, ...props }) {
  const sharedClasses = (0, import_clsx7.default)(
    // Base
    "flex min-w-0 items-center",
    // Icons
    "*:data-[slot=icon]:size-5 *:data-[slot=icon]:shrink-0 sm:*:data-[slot=icon]:size-4",
    "*:data-[slot=icon]:text-zinc-500 group-data-focus/option:*:data-[slot=icon]:text-white dark:*:data-[slot=icon]:text-zinc-400",
    "forced-colors:*:data-[slot=icon]:text-[CanvasText] forced-colors:group-data-focus/option:*:data-[slot=icon]:text-[Canvas]",
    // Avatars
    "*:data-[slot=avatar]:-mx-0.5 *:data-[slot=avatar]:size-6 sm:*:data-[slot=avatar]:size-5"
  );
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
    Headless7.ComboboxOption,
    {
      ...props,
      className: (0, import_clsx7.default)(
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
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: (0, import_clsx7.default)(className, sharedClasses), children }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("svg", { className: "relative col-start-2 hidden size-5 self-center stroke-current group-data-selected/option:inline sm:size-4", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", { d: "M4 8.5l3 3L12 4", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }) })
      ]
    }
  );
}
function ComboboxLabel({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { ...props, className: (0, import_clsx7.default)(className, "ml-2.5 truncate first:ml-0 sm:ml-2 sm:first:ml-0") });
}
function ComboboxDescription({ className, children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { ...props, className: (0, import_clsx7.default)(className, "flex flex-1 overflow-hidden text-zinc-500 before:w-2 before:min-w-0 before:shrink group-data-focus/option:text-white dark:text-zinc-400"), children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "flex-1 truncate", children }) });
}

// src/catalyst/description-list.tsx
var import_clsx8 = __toESM(require("clsx"), 1);
var import_jsx_runtime10 = require("react/jsx-runtime");
function DescriptionList({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("dl", { ...props, className: (0, import_clsx8.default)(className, "grid grid-cols-1 text-base/6 sm:grid-cols-[min(50%,--spacing(80))_auto] sm:text-sm/6") });
}
function DescriptionTerm({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    "dt",
    {
      ...props,
      className: (0, import_clsx8.default)(className, "col-start-1 border-zinc-950/5 border-t pt-3 text-zinc-500 first:border-none sm:border-zinc-950/5 sm:border-t sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5")
    }
  );
}
function DescriptionDetails({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("dd", { ...props, className: (0, import_clsx8.default)(className, "pt-1 pb-3 text-zinc-950 sm:border-zinc-950/5 sm:border-t sm:nth-2:border-none sm:py-3 dark:text-white dark:sm:border-white/5") });
}

// src/catalyst/dialog.tsx
var Headless8 = __toESM(require("@headlessui/react"), 1);
var import_clsx9 = __toESM(require("clsx"), 1);
var import_jsx_runtime11 = require("react/jsx-runtime");
var sizes2 = {
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
function Dialog3({ size = "lg", className, children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(Headless8.Dialog, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      Headless8.DialogBackdrop,
      {
        transition: true,
        className: "fixed inset-0 flex w-screen justify-center overflow-y-auto bg-zinc-950/25 px-2 py-2 transition duration-100 focus:outline-0 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in sm:px-6 sm:py-8 lg:px-8 lg:py-16 dark:bg-zinc-950/50"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "fixed inset-0 w-screen overflow-y-auto pt-6 sm:pt-0", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grid min-h-full grid-rows-[1fr_auto] justify-items-center sm:grid-rows-[1fr_auto_3fr] sm:p-4", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      Headless8.DialogPanel,
      {
        transition: true,
        className: (0, import_clsx9.default)(
          className,
          sizes2[size],
          "row-start-2 w-full min-w-0 rounded-t-3xl bg-white p-(--gutter) shadow-lg ring-1 ring-zinc-950/10 [--gutter:--spacing(8)] sm:mb-auto sm:rounded-2xl dark:bg-zinc-900 dark:ring-white/10 forced-colors:outline",
          "transition duration-100 will-change-transform data-closed:translate-y-12 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in sm:data-closed:data-enter:scale-95 sm:data-closed:translate-y-0"
        ),
        children
      }
    ) }) })
  ] });
}
function DialogTitle3({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Headless8.DialogTitle, { ...props, className: (0, import_clsx9.default)(className, "text-balance font-semibold text-lg/6 text-zinc-950 sm:text-base/6 dark:text-white") });
}
function DialogDescription({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Headless8.Description, { as: Text, ...props, className: (0, import_clsx9.default)(className, "mt-2 text-pretty") });
}
function DialogBody({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { ...props, className: (0, import_clsx9.default)(className, "mt-6") });
}
function DialogActions({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { ...props, className: (0, import_clsx9.default)(className, "mt-8 flex flex-col-reverse items-center justify-end gap-3 *:w-full sm:flex-row sm:*:w-auto") });
}

// src/catalyst/divider.tsx
var import_clsx10 = __toESM(require("clsx"), 1);
var import_jsx_runtime12 = require("react/jsx-runtime");

// src/catalyst/dropdown.tsx
var Headless9 = __toESM(require("@headlessui/react"), 1);
var import_clsx11 = __toESM(require("clsx"), 1);
var import_jsx_runtime13 = require("react/jsx-runtime");
function Dropdown(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Headless9.Menu, { ...props });
}
function DropdownButton({ as = Button2, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Headless9.MenuButton, { as, ...props });
}
function DropdownMenu({ anchor = "bottom", className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    Headless9.MenuItems,
    {
      ...props,
      transition: true,
      anchor,
      className: (0, import_clsx11.default)(
        className,
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
function DropdownItem({ className, ...props }) {
  const classes = (0, import_clsx11.default)(
    className,
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
  return "href" in props ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Headless9.MenuItem, { as: Link, ...props, className: classes }) : /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Headless9.MenuItem, { as: "button", type: "button", ...props, className: classes });
}
function DropdownHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { ...props, className: (0, import_clsx11.default)(className, "col-span-5 px-3.5 pt-2.5 pb-1 sm:px-3") });
}
function DropdownSection({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    Headless9.MenuSection,
    {
      ...props,
      className: (0, import_clsx11.default)(
        className,
        // Define grid at the section level instead of the item level if subgrid is supported
        "col-span-full supports-[grid-template-columns:subgrid]:grid supports-[grid-template-columns:subgrid]:grid-cols-[auto_1fr_1.5rem_0.5rem_auto]"
      )
    }
  );
}
function DropdownHeading({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Headless9.MenuHeading, { ...props, className: (0, import_clsx11.default)(className, "col-span-full grid grid-cols-[1fr_auto] gap-x-12 px-3.5 pt-2 pb-1 font-medium text-sm/5 text-zinc-500 sm:px-3 sm:text-xs/5 dark:text-zinc-400") });
}
function DropdownDivider({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Headless9.MenuSeparator, { ...props, className: (0, import_clsx11.default)(className, "col-span-full mx-3.5 my-1 h-px border-0 bg-zinc-950/5 sm:mx-3 dark:bg-white/10 forced-colors:bg-[CanvasText]") });
}
function DropdownLabel({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Headless9.Label, { ...props, "data-slot": "label", className: (0, import_clsx11.default)(className, "col-start-2 row-start-1"), ...props });
}
function DropdownDescription({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    Headless9.Description,
    {
      "data-slot": "description",
      ...props,
      className: (0, import_clsx11.default)(className, "col-span-2 col-start-2 row-start-2 text-sm/5 text-zinc-500 group-data-focus:text-white sm:text-xs/5 dark:text-zinc-400 forced-colors:group-data-focus:text-[HighlightText]")
    }
  );
}
function DropdownShortcut({ keys, className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Headless9.Description, { as: "kbd", ...props, className: (0, import_clsx11.default)(className, "col-start-5 row-start-1 flex justify-self-end"), children: (Array.isArray(keys) ? keys : keys.split("")).map((char, index) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    "kbd",
    {
      className: (0, import_clsx11.default)([
        "min-w-[2ch] text-center font-sans text-zinc-400 capitalize group-data-focus:text-white forced-colors:group-data-focus:text-[HighlightText]",
        // Make sure key names that are longer than one character (like "Tab") have extra space
        index > 0 && char.length > 1 && "pl-1"
      ]),
      children: char
    },
    index
  )) });
}

// src/catalyst/fieldset.tsx
var Headless10 = __toESM(require("@headlessui/react"), 1);
var import_clsx12 = __toESM(require("clsx"), 1);
var import_jsx_runtime14 = require("react/jsx-runtime");
function Fieldset2({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Headless10.Fieldset, { ...props, className: (0, import_clsx12.default)(className, "*:data-[slot=text]:mt-1 [&>*+[data-slot=control]]:mt-6") });
}
function Legend2({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Headless10.Legend, { "data-slot": "legend", ...props, className: (0, import_clsx12.default)(className, "font-semibold text-base/6 text-zinc-950 data-disabled:opacity-50 sm:text-sm/6 dark:text-white") });
}
function FieldGroup({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { "data-slot": "control", ...props, className: (0, import_clsx12.default)(className, "space-y-8") });
}
function Field3({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    Headless10.Field,
    {
      ...props,
      className: (0, import_clsx12.default)(
        className,
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
function Label3({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Headless10.Label, { "data-slot": "label", ...props, className: (0, import_clsx12.default)(className, "select-none text-base/6 text-zinc-950 data-disabled:opacity-50 sm:text-sm/6 dark:text-white") });
}
function Description5({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Headless10.Description, { "data-slot": "description", ...props, className: (0, import_clsx12.default)(className, "text-base/6 text-zinc-500 data-disabled:opacity-50 sm:text-sm/6 dark:text-zinc-400") });
}
function ErrorMessage({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Headless10.Description, { "data-slot": "error", ...props, className: (0, import_clsx12.default)(className, "text-base/6 text-red-600 data-disabled:opacity-50 sm:text-sm/6 dark:text-red-500") });
}

// src/catalyst/heading.tsx
var import_clsx13 = __toESM(require("clsx"), 1);
var import_jsx_runtime15 = require("react/jsx-runtime");
function Heading({ className, level = 1, ...props }) {
  const Element = `h${level}`;
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Element, { ...props, className: (0, import_clsx13.default)(className, "font-semibold text-2xl/8 text-zinc-950 sm:text-xl/8 dark:text-white") });
}
function Subheading({ className, level = 2, ...props }) {
  const Element = `h${level}`;
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Element, { ...props, className: (0, import_clsx13.default)(className, "font-semibold text-base/7 text-zinc-950 sm:text-sm/6 dark:text-white") });
}

// src/catalyst/input.tsx
var Headless11 = __toESM(require("@headlessui/react"), 1);
var import_clsx14 = __toESM(require("clsx"), 1);
var import_react6 = require("react");
var import_jsx_runtime16 = require("react/jsx-runtime");
function InputGroup({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    "span",
    {
      "data-slot": "control",
      className: (0, import_clsx14.default)(
        "relative isolate block",
        "has-[[data-slot=icon]:last-child]:[&_input]:pr-10 has-[[data-slot=icon]:first-child]:[&_input]:pl-10 sm:has-[[data-slot=icon]:last-child]:[&_input]:pr-8 sm:has-[[data-slot=icon]:first-child]:[&_input]:pl-8",
        "*:data-[slot=icon]:pointer-events-none *:data-[slot=icon]:absolute *:data-[slot=icon]:top-3 *:data-[slot=icon]:z-10 *:data-[slot=icon]:size-5 sm:*:data-[slot=icon]:top-2.5 sm:*:data-[slot=icon]:size-4",
        "[&>[data-slot=icon]:first-child]:left-3 sm:[&>[data-slot=icon]:first-child]:left-2.5 [&>[data-slot=icon]:last-child]:right-3 sm:[&>[data-slot=icon]:last-child]:right-2.5",
        "*:data-[slot=icon]:text-zinc-500 dark:*:data-[slot=icon]:text-zinc-400"
      ),
      children
    }
  );
}
var dateTypes = ["date", "datetime-local", "month", "time", "week"];
var Input2 = (0, import_react6.forwardRef)(function Input3({
  className,
  ...props
}, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    "span",
    {
      "data-slot": "control",
      className: (0, import_clsx14.default)([
        className,
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
      children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
        Headless11.Input,
        {
          ref,
          ...props,
          className: (0, import_clsx14.default)([
            // Date classes
            props.type && dateTypes.includes(props.type) && [
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

// src/catalyst/listbox.tsx
var Headless12 = __toESM(require("@headlessui/react"), 1);
var import_clsx15 = __toESM(require("clsx"), 1);
var import_react7 = require("react");
var import_jsx_runtime17 = require("react/jsx-runtime");
function Listbox2({
  className,
  placeholder,
  autoFocus,
  "aria-label": ariaLabel,
  children: options,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Headless12.Listbox, { ...props, multiple: false, children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
      Headless12.ListboxButton,
      {
        autoFocus,
        "data-slot": "control",
        "aria-label": ariaLabel,
        className: (0, import_clsx15.default)([
          className,
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
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
            Headless12.ListboxSelectedOption,
            {
              as: "span",
              options,
              placeholder: placeholder && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "block truncate text-zinc-500", children: placeholder }),
              className: (0, import_clsx15.default)([
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
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("svg", { className: "size-5 stroke-zinc-500 group-data-disabled:stroke-zinc-600 sm:size-4 dark:stroke-zinc-400 forced-colors:stroke-[CanvasText]", viewBox: "0 0 16 16", "aria-hidden": "true", fill: "none", children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("path", { d: "M5.75 10.75L8 13L10.25 10.75", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("path", { d: "M10.25 5.25L8 3L5.75 5.25", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      Headless12.ListboxOptions,
      {
        transition: true,
        anchor: "selection start",
        className: (0, import_clsx15.default)(
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
        children: options
      }
    )
  ] });
}
function ListboxOption2({ children, className, ...props }) {
  const sharedClasses = (0, import_clsx15.default)(
    // Base
    "flex min-w-0 items-center",
    // Icons
    "*:data-[slot=icon]:size-5 *:data-[slot=icon]:shrink-0 sm:*:data-[slot=icon]:size-4",
    "*:data-[slot=icon]:text-zinc-500 group-data-focus/option:*:data-[slot=icon]:text-white dark:*:data-[slot=icon]:text-zinc-400",
    "forced-colors:*:data-[slot=icon]:text-[CanvasText] forced-colors:group-data-focus/option:*:data-[slot=icon]:text-[Canvas]",
    // Avatars
    "*:data-[slot=avatar]:-mx-0.5 *:data-[slot=avatar]:size-6 sm:*:data-[slot=avatar]:size-5"
  );
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Headless12.ListboxOption, { as: import_react7.Fragment, ...props, children: ({ selectedOption }) => {
    if (selectedOption) {
      return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: (0, import_clsx15.default)(className, sharedClasses), children });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
      "div",
      {
        className: (0, import_clsx15.default)(
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
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("svg", { className: "relative hidden size-5 self-center stroke-current group-data-selected/option:inline sm:size-4", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("path", { d: "M4 8.5l3 3L12 4", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: (0, import_clsx15.default)(className, sharedClasses, "col-start-2"), children })
        ]
      }
    );
  } });
}
function ListboxLabel({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { ...props, className: (0, import_clsx15.default)(className, "ml-2.5 truncate first:ml-0 sm:ml-2 sm:first:ml-0") });
}
function ListboxDescription({ className, children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { ...props, className: (0, import_clsx15.default)(className, "flex flex-1 overflow-hidden text-zinc-500 before:w-2 before:min-w-0 before:shrink group-data-focus/option:text-white dark:text-zinc-400"), children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "flex-1 truncate", children }) });
}

// src/catalyst/navbar.tsx
var Headless13 = __toESM(require("@headlessui/react"), 1);
var import_clsx16 = __toESM(require("clsx"), 1);
var import_react8 = require("react");
var import_jsx_runtime18 = require("react/jsx-runtime");
function Navbar({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("nav", { ...props, className: (0, import_clsx16.default)(className, "flex flex-1 items-center gap-4 py-2.5") });
}
function NavbarDivider({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { "aria-hidden": "true", ...props, className: (0, import_clsx16.default)(className, "h-6 w-px bg-zinc-950/10 dark:bg-white/10") });
}
function NavbarSection({ className, ...props }) {
  const id = (0, import_react8.useId)();
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { id, children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { ...props, className: (0, import_clsx16.default)(className, "flex items-center gap-3") }) });
}
function NavbarSpacer({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { "aria-hidden": "true", ...props, className: (0, import_clsx16.default)(className, "-ml-4 flex-1") });
}
var NavbarItem = (0, import_react8.forwardRef)(function NavbarItem2({
  current,
  className,
  children,
  ...props
}, ref) {
  const classes = (0, import_clsx16.default)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("span", { className: (0, import_clsx16.default)(className, "relative"), children: [
    current && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "-bottom-2.5 absolute inset-x-2 h-0.5 rounded-full bg-zinc-950 dark:bg-white" }),
    "href" in props ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Link, { ...props, className: classes, "data-current": current ? "true" : void 0, ref, children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(TouchTarget, { children }) }) : /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Headless13.Button, { ...props, className: (0, import_clsx16.default)("cursor-default", classes), "data-current": current ? "true" : void 0, ref, children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(TouchTarget, { children }) })
  ] });
});
function NavbarLabel({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { ...props, className: (0, import_clsx16.default)(className, "truncate") });
}

// src/catalyst/pagination.tsx
var import_clsx17 = __toESM(require("clsx"), 1);
var import_jsx_runtime19 = require("react/jsx-runtime");
function Pagination({ "aria-label": ariaLabel = "Page navigation", className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("nav", { "aria-label": ariaLabel, ...props, className: (0, import_clsx17.default)(className, "flex gap-x-2") });
}
function PaginationPrevious({ href = null, className, children = "Previous" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: (0, import_clsx17.default)(className, "grow basis-0"), children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(Button2, { ...href === null ? { disabled: true } : { href }, plain: true, "aria-label": "Previous page", children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("svg", { className: "stroke-current", "data-slot": "icon", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("path", { d: "M2.75 8H13.25M2.75 8L5.25 5.5M2.75 8L5.25 10.5", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }) }),
    children
  ] }) });
}
function PaginationNext({ href = null, className, children = "Next" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: (0, import_clsx17.default)(className, "flex grow basis-0 justify-end"), children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(Button2, { ...href === null ? { disabled: true } : { href }, plain: true, "aria-label": "Next page", children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("svg", { className: "stroke-current", "data-slot": "icon", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("path", { d: "M13.25 8L2.75 8M13.25 8L10.75 10.5M13.25 8L10.75 5.5", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }) })
  ] }) });
}
function PaginationList({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { ...props, className: (0, import_clsx17.default)(className, "hidden items-baseline gap-x-2 sm:flex") });
}
function PaginationPage({ href, className, current = false, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    Button2,
    {
      href,
      plain: true,
      "aria-label": `Page ${children}`,
      "aria-current": current ? "page" : void 0,
      className: (0, import_clsx17.default)(className, "before:-inset-px min-w-[2.25rem] before:absolute before:rounded-lg", current && "before:bg-zinc-950/5 dark:before:bg-white/10"),
      children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "-mx-0.5", children })
    }
  );
}
function PaginationGap({ className, children = /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_jsx_runtime19.Fragment, { children: "\u2026" }), ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { "aria-hidden": "true", ...props, className: (0, import_clsx17.default)(className, "w-[2.25rem] select-none text-center font-semibold text-sm/6 text-zinc-950 dark:text-white"), children });
}

// src/catalyst/radio.tsx
var Headless14 = __toESM(require("@headlessui/react"), 1);
var import_clsx18 = __toESM(require("clsx"), 1);
var import_jsx_runtime20 = require("react/jsx-runtime");
function RadioGroup2({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    Headless14.RadioGroup,
    {
      "data-slot": "control",
      ...props,
      className: (0, import_clsx18.default)(
        className,
        // Basic groups
        "space-y-3 **:data-[slot=label]:font-normal",
        // With descriptions
        "has-data-[slot=description]:space-y-6 has-data-[slot=description]:**:data-[slot=label]:font-medium"
      )
    }
  );
}
function RadioField({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    Headless14.Field,
    {
      "data-slot": "field",
      ...props,
      className: (0, import_clsx18.default)(
        className,
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
var base2 = [
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
];
var colors3 = {
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
function Radio2({ color = "dark/zinc", className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Headless14.Radio, { "data-slot": "control", ...props, className: (0, import_clsx18.default)(className, "group inline-flex focus:outline-hidden"), children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: (0, import_clsx18.default)([base2, colors3[color]]), children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    "span",
    {
      className: (0, import_clsx18.default)(
        "size-full rounded-full border-[4.5px] border-transparent bg-(--radio-indicator) bg-clip-padding",
        // Forced colors mode
        "forced-colors:border-[Canvas] forced-colors:group-data-checked:border-[Highlight]"
      )
    }
  ) }) });
}

// src/catalyst/select.tsx
var Headless15 = __toESM(require("@headlessui/react"), 1);
var import_clsx19 = __toESM(require("clsx"), 1);
var import_react9 = require("react");
var import_jsx_runtime21 = require("react/jsx-runtime");
var Select2 = (0, import_react9.forwardRef)(function Select3({ className, multiple, ...props }, ref) {
  const headlessRef = ref;
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
    "span",
    {
      "data-slot": "control",
      className: (0, import_clsx19.default)([
        className,
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
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
          Headless15.Select,
          {
            ref: headlessRef,
            multiple,
            ...props,
            className: (0, import_clsx19.default)([
              // Basic layout
              "relative block w-full appearance-none rounded-lg py-[calc(--spacing(2.5)-1px)] sm:py-[calc(--spacing(1.5)-1px)]",
              // Horizontal padding
              multiple ? "px-[calc(--spacing(3.5)-1px)] sm:px-[calc(--spacing(3)-1px)]" : "pr-[calc(--spacing(10)-1px)] pl-[calc(--spacing(3.5)-1px)] sm:pr-[calc(--spacing(9)-1px)] sm:pl-[calc(--spacing(3)-1px)]",
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
        !multiple && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("svg", { className: "size-5 stroke-zinc-500 group-has-data-disabled:stroke-zinc-600 sm:size-4 dark:stroke-zinc-400 forced-colors:stroke-[CanvasText]", viewBox: "0 0 16 16", "aria-hidden": "true", fill: "none", children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("path", { d: "M5.75 10.75L8 13L10.25 10.75", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("path", { d: "M10.25 5.25L8 3L5.75 5.25", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })
        ] }) })
      ]
    }
  );
});

// src/catalyst/sidebar-layout.tsx
var Headless16 = __toESM(require("@headlessui/react"), 1);
var import_clsx20 = __toESM(require("clsx"), 1);
var import_react10 = require("react");
var import_jsx_runtime22 = require("react/jsx-runtime");
function OpenMenuIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("svg", { "data-slot": "icon", viewBox: "0 0 20 20", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("path", { d: "M2 6.75C2 6.33579 2.33579 6 2.75 6H17.25C17.6642 6 18 6.33579 18 6.75C18 7.16421 17.6642 7.5 17.25 7.5H2.75C2.33579 7.5 2 7.16421 2 6.75ZM2 13.25C2 12.8358 2.33579 12.5 2.75 12.5H17.25C17.6642 12.5 18 12.8358 18 13.25C18 13.6642 17.6642 14 17.25 14H2.75C2.33579 14 2 13.6642 2 13.25Z" }) });
}
function CloseMenuIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("svg", { "data-slot": "icon", viewBox: "0 0 20 20", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("path", { d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" }) });
}
function MobileSidebar({ open, close, className, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(Headless16.Dialog, { open, onClose: close, className: "lg:hidden", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Headless16.DialogBackdrop, { transition: true, className: "fixed inset-0 bg-black/30 transition data-closed:opacity-0 data-enter:duration-300 data-leave:duration-200 data-enter:ease-out data-leave:ease-in" }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Headless16.DialogPanel, { transition: true, className: "data-closed:-translate-x-full fixed inset-y-0 w-full max-w-80 p-2 transition duration-300 ease-in-out", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: (0, import_clsx20.default)([className ?? "bg-white dark:bg-zinc-900", "flex h-full flex-col rounded-lg shadow-xs ring-1 ring-zinc-950/5 dark:ring-white/10"]), children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "-mb-3 px-4 pt-3", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Headless16.CloseButton, { as: NavbarItem, "aria-label": "Close navigation", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(CloseMenuIcon, {}) }) }),
      children
    ] }) })
  ] });
}
function SidebarLayout({ navbar, sidebar, className, children }) {
  const [showSidebar, setShowSidebar] = (0, import_react10.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: (0, import_clsx20.default)([children && "min-h-svh", className ?? "bg-white lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950", "relative isolate flex w-full flex-col"]), children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "fixed inset-y-0 left-0 w-64 max-lg:hidden", children: sidebar }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(MobileSidebar, { open: showSidebar, close: () => setShowSidebar(false), children: sidebar }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("header", { className: "flex items-center px-4 lg:hidden", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "py-2.5", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(NavbarItem, { onClick: () => setShowSidebar(true), "aria-label": "Open navigation", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(OpenMenuIcon, {}) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "min-w-0 flex-1", children: navbar })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("main", { className: "flex flex-1 flex-col pb-2 lg:min-w-0 lg:pt-2 lg:pr-2 lg:pl-64", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "grow p-6 lg:rounded-lg lg:bg-white lg:p-10 lg:shadow-xs lg:ring-1 lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "mx-auto max-w-6xl", children }) }) })
  ] });
}

// src/catalyst/sidebar.tsx
var Headless17 = __toESM(require("@headlessui/react"), 1);
var import_clsx21 = __toESM(require("clsx"), 1);
var import_react11 = require("react");
var import_jsx_runtime23 = require("react/jsx-runtime");
function Sidebar({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("nav", { ...props, className: (0, import_clsx21.default)(className, "flex h-full min-h-0 flex-col") });
}
function SidebarHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { ...props, className: (0, import_clsx21.default)(className, "flex flex-col border-zinc-950/5 border-b p-4 dark:border-white/5 [&>[data-slot=section]+[data-slot=section]]:mt-2.5") });
}
function SidebarBody({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { ...props, className: (0, import_clsx21.default)(className, "flex flex-1 flex-col overflow-y-auto p-4 [&>[data-slot=section]+[data-slot=section]]:mt-8") });
}
function SidebarFooter({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { ...props, className: (0, import_clsx21.default)(className, "flex flex-col border-zinc-950/5 border-t p-4 dark:border-white/5 [&>[data-slot=section]+[data-slot=section]]:mt-2.5") });
}
function SidebarSection({ className, ...props }) {
  const id = (0, import_react11.useId)();
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { id, children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { ...props, "data-slot": "section", className: (0, import_clsx21.default)(className, "flex flex-col gap-0.5") }) });
}
function SidebarDivider({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("hr", { ...props, className: (0, import_clsx21.default)(className, "lg:-mx-4 my-4 border-zinc-950/5 border-t dark:border-white/5") });
}
function SidebarSpacer({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { "aria-hidden": "true", ...props, className: (0, import_clsx21.default)(className, "mt-8 flex-1") });
}
function SidebarHeading({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("h3", { ...props, className: (0, import_clsx21.default)(className, "mb-1 px-2 font-medium text-xs/6 text-zinc-500 dark:text-zinc-400") });
}
var SidebarItem = (0, import_react11.forwardRef)(function SidebarItem2({ current, className, children, ...props }, ref) {
  const classes = (0, import_clsx21.default)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("span", { className: (0, import_clsx21.default)(className, "relative"), children: [
    current && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "-left-4 absolute inset-y-2 w-0.5 rounded-full bg-zinc-950 dark:bg-white" }),
    "href" in props ? /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Headless17.CloseButton, { as: Link, ...props, className: classes, "data-current": current ? "true" : void 0, ref, children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(TouchTarget, { children }) }) : /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Headless17.Button, { ...props, className: (0, import_clsx21.default)("cursor-default", classes), "data-current": current ? "true" : void 0, ref, children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(TouchTarget, { children }) })
  ] });
});
function SidebarLabel({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { ...props, className: (0, import_clsx21.default)(className, "truncate") });
}

// src/catalyst/stacked-layout.tsx
var Headless18 = __toESM(require("@headlessui/react"), 1);
var import_clsx22 = __toESM(require("clsx"), 1);
var import_react12 = require("react");
var import_jsx_runtime24 = require("react/jsx-runtime");
function OpenMenuIcon2() {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("svg", { "data-slot": "icon", viewBox: "0 0 20 20", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("path", { d: "M2 6.75C2 6.33579 2.33579 6 2.75 6H17.25C17.6642 6 18 6.33579 18 6.75C18 7.16421 17.6642 7.5 17.25 7.5H2.75C2.33579 7.5 2 7.16421 2 6.75ZM2 13.25C2 12.8358 2.33579 12.5 2.75 12.5H17.25C17.6642 12.5 18 12.8358 18 13.25C18 13.6642 17.6642 14 17.25 14H2.75C2.33579 14 2 13.6642 2 13.25Z" }) });
}
function CloseMenuIcon2() {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("svg", { "data-slot": "icon", viewBox: "0 0 20 20", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("path", { d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" }) });
}
function MobileSidebar2({ open, close, className, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(Headless18.Dialog, { open, onClose: close, className: "lg:hidden", children: [
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Headless18.DialogBackdrop, { transition: true, className: "fixed inset-0 bg-black/30 transition data-closed:opacity-0 data-enter:duration-300 data-leave:duration-200 data-enter:ease-out data-leave:ease-in" }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Headless18.DialogPanel, { transition: true, className: "data-closed:-translate-x-full fixed inset-y-0 w-full max-w-80 p-2 transition duration-300 ease-in-out", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: (0, import_clsx22.default)([className ?? "bg-white dark:bg-zinc-900", "flex h-full flex-col rounded-lg shadow-xs ring-1 ring-zinc-950/5 dark:ring-white/10"]), children: [
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "-mb-3 px-4 pt-3", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Headless18.CloseButton, { as: NavbarItem, "aria-label": "Close navigation", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(CloseMenuIcon2, {}) }) }),
      children
    ] }) })
  ] });
}
function StackedLayout({ navbar, sidebar, className, children }) {
  const [showSidebar, setShowSidebar] = (0, import_react12.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: (0, import_clsx22.default)([children && "min-h-svh", className ?? "bg-white lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950", "relative isolate flex w-full flex-col"]), children: [
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(MobileSidebar2, { open: showSidebar, close: () => setShowSidebar(false), children: sidebar }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("header", { className: "flex items-center px-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "py-2.5 lg:hidden", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(NavbarItem, { onClick: () => setShowSidebar(true), "aria-label": "Open navigation", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(OpenMenuIcon2, {}) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "min-w-0 flex-1", children: navbar })
    ] }),
    children && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("main", { className: "flex flex-1 flex-col pb-2 lg:px-2", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: (0, import_clsx22.default)(["grow p-6 lg:rounded-lg lg:bg-white lg:p-10 lg:shadow-xs lg:ring-1 lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10"]), children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "mx-auto max-w-6xl", children }) }) })
  ] });
}

// src/catalyst/switch.tsx
var Headless19 = __toESM(require("@headlessui/react"), 1);
var import_clsx23 = __toESM(require("clsx"), 1);
var import_jsx_runtime25 = require("react/jsx-runtime");
function SwitchGroup({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    "div",
    {
      "data-slot": "control",
      ...props,
      className: (0, import_clsx23.default)(
        className,
        // Basic groups
        "space-y-3 **:data-[slot=label]:font-normal",
        // With descriptions
        "has-data-[slot=description]:space-y-6 has-data-[slot=description]:**:data-[slot=label]:font-medium"
      )
    }
  );
}
function SwitchField({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    Headless19.Field,
    {
      "data-slot": "field",
      ...props,
      className: (0, import_clsx23.default)(
        className,
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
var colors4 = {
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
function Switch2({
  color = "dark/zinc",
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    Headless19.Switch,
    {
      "data-slot": "control",
      ...props,
      className: (0, import_clsx23.default)(
        className,
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
        colors4[color]
      ),
      children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
        "span",
        {
          "aria-hidden": "true",
          className: (0, import_clsx23.default)(
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

// src/catalyst/table.tsx
var import_clsx24 = __toESM(require("clsx"), 1);
var import_react13 = require("react");
var import_jsx_runtime26 = require("react/jsx-runtime");
var TableContext = (0, import_react13.createContext)({
  bleed: false,
  dense: false,
  grid: false,
  striped: false
});
function Table({
  bleed = false,
  dense = false,
  grid = false,
  striped = false,
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(TableContext.Provider, { value: { bleed, dense, grid, striped }, children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "flow-root", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { ...props, className: (0, import_clsx24.default)(className, "-mx-(--gutter) overflow-x-auto whitespace-nowrap"), children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: (0, import_clsx24.default)("inline-block min-w-full align-middle", !bleed && "sm:px-(--gutter)"), children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("table", { className: "min-w-full text-left text-sm/6 text-zinc-950 dark:text-white", children }) }) }) }) });
}
function TableHead({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("thead", { ...props, className: (0, import_clsx24.default)(className, "text-zinc-500 dark:text-zinc-400") });
}
function TableBody(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("tbody", { ...props });
}
var TableRowContext = (0, import_react13.createContext)({
  href: void 0,
  target: void 0,
  title: void 0
});
function TableRow({ href, target, title, className, ...props }) {
  const { striped } = (0, import_react13.useContext)(TableContext);
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(TableRowContext.Provider, { value: { href, target, title }, children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
    "tr",
    {
      ...props,
      className: (0, import_clsx24.default)(
        className,
        href && "has-[[data-row-link][data-focus]]:-outline-offset-2 has-[[data-row-link][data-focus]]:outline-2 has-[[data-row-link][data-focus]]:outline-blue-500 dark:focus-within:bg-white/[2.5%]",
        striped && "even:bg-zinc-950/[2.5%] dark:even:bg-white/[2.5%]",
        href && striped && "hover:bg-zinc-950/5 dark:hover:bg-white/5",
        href && !striped && "hover:bg-zinc-950/[2.5%] dark:hover:bg-white/[2.5%]"
      )
    }
  ) });
}
function TableHeader({ className, ...props }) {
  const { bleed, grid } = (0, import_react13.useContext)(TableContext);
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
    "th",
    {
      ...props,
      className: (0, import_clsx24.default)(
        className,
        "border-b border-b-zinc-950/10 px-4 py-2 font-medium first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) dark:border-b-white/10",
        grid && "border-l border-l-zinc-950/5 first:border-l-0 dark:border-l-white/5",
        !bleed && "sm:last:pr-1 sm:first:pl-1"
      )
    }
  );
}
function TableCell({ className, children, ...props }) {
  const { bleed, dense, grid, striped } = (0, import_react13.useContext)(TableContext);
  const { href, target, title } = (0, import_react13.useContext)(TableRowContext);
  const [cellRef, setCellRef] = (0, import_react13.useState)(null);
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
    "td",
    {
      ref: href ? setCellRef : void 0,
      ...props,
      className: (0, import_clsx24.default)(
        className,
        "relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2))",
        !striped && "border-zinc-950/5 border-b dark:border-white/5",
        grid && "border-l border-l-zinc-950/5 first:border-l-0 dark:border-l-white/5",
        dense ? "py-2.5" : "py-4",
        !bleed && "sm:last:pr-1 sm:first:pl-1"
      ),
      children: [
        href && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Link, { "data-row-link": true, href, target, "aria-label": title, tabIndex: cellRef?.previousElementSibling === null ? 0 : -1, className: "absolute inset-0 focus:outline-hidden" }),
        children
      ]
    }
  );
}

// src/catalyst/textarea.tsx
var Headless20 = __toESM(require("@headlessui/react"), 1);
var import_clsx25 = __toESM(require("clsx"), 1);
var import_react14 = require("react");
var import_jsx_runtime27 = require("react/jsx-runtime");
var Textarea2 = (0, import_react14.forwardRef)(function Textarea3({ className, resizable = true, ...props }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
    "span",
    {
      "data-slot": "control",
      className: (0, import_clsx25.default)([
        className,
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
      children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
        Headless20.Textarea,
        {
          ref,
          ...props,
          className: (0, import_clsx25.default)([
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
            resizable ? "resize-y" : "resize-none"
          ])
        }
      )
    }
  );
});

// src/catalyst/index.ts
var Alert2 = Object.assign(Alert, {
  Title: AlertTitle,
  Description: AlertDescription,
  Body: AlertBody,
  Actions: AlertActions
});
var Avatar2 = Object.assign(Avatar, {
  Button: AvatarButton
});
var Badge2 = Object.assign(Badge, {
  Button: BadgeButton
});
var Button8 = Object.assign(Button2, {
  TouchTarget
});
var CheckboxGroup2 = Object.assign(CheckboxGroup, {
  CheckboxField,
  Checkbox: Checkbox2
});
var Combobox3 = Object.assign(Combobox2, {
  Option: ComboboxOption2,
  Label: ComboboxLabel,
  Description: ComboboxDescription
});
var DescriptionList2 = Object.assign(DescriptionList, {
  Term: DescriptionTerm,
  Details: DescriptionDetails
});
var Dialog6 = Object.assign(Dialog3, {
  Title: DialogTitle3,
  Description: DialogDescription,
  Body: DialogBody,
  Actions: DialogActions
});
var Dropdown2 = Object.assign(Dropdown, {
  Button: DropdownButton,
  Menu: DropdownMenu,
  Item: DropdownItem,
  Header: DropdownHeader,
  Section: DropdownSection,
  Heading: DropdownHeading,
  Divider: DropdownDivider,
  Label: DropdownLabel,
  Description: DropdownDescription,
  Shortcut: DropdownShortcut
});
var Fieldset3 = Object.assign(Fieldset2, {
  Legend: Legend2,
  FieldGroup,
  Field: Field3,
  Label: Label3,
  Description: Description5,
  ErrorMessage
});
var Heading2 = Object.assign(Heading, {
  Subheading
});
var InputGroup2 = Object.assign(InputGroup, {
  Input: Input2
});
var Listbox3 = Object.assign(Listbox2, {
  Option: ListboxOption2,
  Label: ListboxLabel,
  Description: ListboxDescription
});
var Navbar2 = Object.assign(Navbar, {
  Divider: NavbarDivider,
  Section: NavbarSection,
  Spacer: NavbarSpacer,
  Item: NavbarItem,
  Label: NavbarLabel
});
var Pagination2 = Object.assign(Pagination, {
  Previous: PaginationPrevious,
  Next: PaginationNext,
  List: PaginationList,
  Page: PaginationPage,
  Gap: PaginationGap
});
var RadioGroup3 = Object.assign(RadioGroup2, {
  RadioField,
  Radio: Radio2
});
var Sidebar2 = Object.assign(Sidebar, {
  Header: SidebarHeader,
  Body: SidebarBody,
  Footer: SidebarFooter,
  Section: SidebarSection,
  Divider: SidebarDivider,
  Spacer: SidebarSpacer,
  Heading: SidebarHeading,
  Item: SidebarItem,
  Label: SidebarLabel
});
var SwitchGroup2 = Object.assign(SwitchGroup, {
  SwitchField,
  Switch: Switch2
});
var Table2 = Object.assign(Table, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Header: TableHeader,
  Cell: TableCell
});
var Text2 = Object.assign(Text, {
  Link: TextLink,
  Strong,
  Code
});

// src/stimulus/NavMenu.tsx
var import_jsx_runtime28 = require("react/jsx-runtime");
var LocationContext = (0, import_react15.createContext)("");
var SideMenu = ({ navConfigItems, navFilters, menuClass, ...props }) => {
  const { children, ...rest } = props;
  const location = (0, import_react_router2.useLocation)();
  const { navbar, sidebar } = NavMenuFactory({ navConfigItems, navFilters });
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(LocationContext.Provider, { value: location.pathname, children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(SidebarLayout, { navbar, sidebar, className: menuClass, ...rest, children }) });
};
var StackMenu = ({ navConfigItems, navFilters, menuClass, ...props }) => {
  const { children, ...rest } = props;
  const location = (0, import_react_router2.useLocation)();
  const { navbar, sidebar } = NavMenuFactory({ navConfigItems, navFilters });
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(LocationContext.Provider, { value: location.pathname, children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(StackedLayout, { navbar, sidebar, className: menuClass, ...rest, children }) });
};
var NavMenuFactory = ({ navConfigItems, navFilters = [] }) => {
  const shouldShowItem = (item) => {
    if (!item.filter || item.filter.length === 0) return true;
    return item.filter.some((filter) => navFilters.includes(filter));
  };
  const filteredItems = navFilters.length === 0 ? navConfigItems : navConfigItems.map((section) => {
    return {
      section: section.section.filter(shouldShowItem).map((item) => {
        if (item.submenu) {
          return {
            ...item,
            submenu: item.submenu.filter(shouldShowItem)
          };
        }
        return item;
      })
    };
  }).filter((section) => section.section.length > 0);
  return {
    navbar: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Navbar2, { children: filteredItems.map((sections, idx) => {
      const keyIdx = (0, import_utils.toBase)(idx);
      return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(import_react15.Fragment, { children: [
        idx === 1 && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Navbar2.Spacer, {}, `space-${keyIdx}`),
        /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(Navbar2.Section, { className: "max-lg:hidden", children: [
          idx !== 0 && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Navbar2.Divider, {}, `div-${keyIdx}`),
          sections.section.map((sectionitem) => {
            return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(NavMenuItem, { sectionitem, type: "navbar" }, sectionitem.ref);
          })
        ] }, `section-${keyIdx}`)
      ] }, `fmt-${keyIdx}`);
    }) }),
    sidebar: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Sidebar2, { children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Sidebar2.Body, { children: filteredItems.map((sections, idx) => {
      const keyIdx = (0, import_utils.toBase)(idx);
      return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(import_react15.Fragment, { children: [
        idx !== 0 && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Sidebar2.Divider, {}, `div-${keyIdx}`),
        idx === filteredItems.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Sidebar2.Spacer, {}, `space-${keyIdx}`),
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Sidebar2.Section, { children: sections.section.map((sectionitem, itx) => {
          return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(NavMenuItem, { sectionitem, type: "sidebar" }, sectionitem.ref);
        }) }, `section-${keyIdx}`)
      ] }, `fmt-${keyIdx}`);
    }) }) })
  };
};
var NavMenuItem = ({ sectionitem, type, navkey, ...props }) => {
  const pathname = (0, import_react15.useContext)(LocationContext);
  const hasActive = sectionitem.submenu?.some((item) => item.href && pathname === item.href);
  const isNavbar = type === "navbar";
  return sectionitem.submenu ? /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(Dropdown2, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(Dropdown2.Button, { as: isNavbar ? Navbar2.Item : Sidebar2.Item, className: (0, import_clsx26.default)(isNavbar ? "max-lg:hidden" : "lg:mb-2.5", hasActive ? "rounded-b-none border-b" : "border-current"), children: [
      sectionitem.component,
      "label" in sectionitem && sectionitem.label && (isNavbar ? /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Navbar2.Label, { children: sectionitem.label }) : /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Sidebar2.Label, { children: sectionitem.label })),
      isNavbar ? /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_solid.ChevronDownIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_solid.ChevronRightIcon, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Dropdown2.Menu, { className: "min-w-80 lg:min-w-64", ...props, children: sectionitem.submenu.map((submenuitem, ix) => {
      return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(Dropdown2.Item, { href: submenuitem.href, className: (0, import_clsx26.default)(submenuitem.href && pathname === submenuitem.href ? "rounded-l-none border-l-2" : "border-current"), children: [
        submenuitem.component,
        "label" in submenuitem && submenuitem.label && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Dropdown2.Label, { children: submenuitem.label })
      ] }, `drop-${(0, import_utils.toBase)(ix)}`);
    }) }, navkey)
  ] }, `dd-${navkey}`) : isNavbar ? /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(Navbar2.Item, { href: sectionitem.href || "#", current: !!(sectionitem.href && pathname === sectionitem.href), children: [
    sectionitem.component,
    "label" in sectionitem && sectionitem.label && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Navbar2.Label, { children: sectionitem.label })
  ] }, navkey) : /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(Sidebar2.Item, { href: sectionitem.href || "#", current: !!(sectionitem.href && pathname === sectionitem.href), children: [
    sectionitem.component,
    "label" in sectionitem && sectionitem.label && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Sidebar2.Label, { children: sectionitem.label })
  ] }, navkey);
};

// src/stimulus/Page.tsx
var import_jsx_runtime29 = require("react/jsx-runtime");
function Header({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("header", { className: "print:hidden", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Link, { href: "/", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "flex flex-col md:py-8 md:pl-8", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "flew-row flex w-full justify-around md:justify-start md:gap-x-8", children }) }) }) });
}
function Footer({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("footer", { className: "sticky top-[100vh] flex w-full flex-col items-center bg-opacity-100 pt-12 pb-8 print:hidden", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "font-lato-100 text-xs uppercase text-opacity-30", children }) });
}

// src/stimulus/ThemeSwitcher.tsx
var import_outline = require("@heroicons/react/24/outline");
var import_next_themes = require("next-themes");
var import_react16 = require("react");
var import_jsx_runtime30 = require("react/jsx-runtime");
var ThemeSwitcher = (option = { theme: { light: "light", dark: "dark" } }) => {
  const [mounted, setMounted] = (0, import_react16.useState)(false);
  const { resolvedTheme, setTheme } = (0, import_next_themes.useTheme)();
  (0, import_react16.useEffect)(() => setMounted(true), []);
  if (!mounted) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
    "button",
    {
      type: "button",
      className: "size-5",
      onClick: (e) => {
        setTheme(resolvedTheme === option.theme.dark ? option.theme.light : option.theme.dark);
        e.preventDefault();
        e.stopPropagation();
      },
      "aria-label": "theme switch",
      children: resolvedTheme === option.theme.dark ? /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_outline.MoonIcon, { className: "size-5 animate-rotate" }) : /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_outline.SunIcon, { className: "size-5 animate-rotate" })
    }
  );
};

// src/stimulus/index.ts
var import_next_themes2 = require("next-themes");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Footer,
  Header,
  SideMenu,
  StackMenu,
  ThemeProvider,
  ThemeSwitcher
});
//# sourceMappingURL=index.cjs.map