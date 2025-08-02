// src/catalyst/alert.tsx
import * as Headless2 from "@headlessui/react";
import clsx2 from "clsx";

// src/catalyst/text.tsx
import clsx from "clsx";

// src/catalyst/link.tsx
import * as Headless from "@headlessui/react";
import React from "react";
import { Link as RouterLink } from "react-router";
import { jsx } from "react/jsx-runtime";
var Link = React.forwardRef(function Link2(props, ref) {
  return /* @__PURE__ */ jsx(Headless.DataInteractive, {
    children: /* @__PURE__ */ jsx(RouterLink, {
      ...props,
      to: props.href,
      ref
    })
  });
});

// src/catalyst/text.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function Text({ className, ...props }) {
  return /* @__PURE__ */ jsx2("p", {
    "data-slot": "text",
    ...props,
    className: clsx(className, "text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400")
  });
}
function TextLink({ className, ...props }) {
  return /* @__PURE__ */ jsx2(Link, {
    ...props,
    className: clsx(className, "text-zinc-950 underline decoration-zinc-950/50 data-hover:decoration-zinc-950 dark:text-white dark:decoration-white/50 dark:data-hover:decoration-white")
  });
}
function Strong({ className, ...props }) {
  return /* @__PURE__ */ jsx2("strong", {
    ...props,
    className: clsx(className, "font-medium text-zinc-950 dark:text-white")
  });
}
function Code({ className, ...props }) {
  return /* @__PURE__ */ jsx2("code", {
    ...props,
    className: clsx(className, "rounded-sm border border-zinc-950/10 bg-zinc-950/[2.5%] px-0.5 font-medium text-sm text-zinc-950 sm:text-[0.8125rem] dark:border-white/20 dark:bg-white/5 dark:text-white")
  });
}

// src/catalyst/alert.tsx
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs(Headless2.Dialog, {
    ...props,
    children: [
      /* @__PURE__ */ jsx3(Headless2.DialogBackdrop, {
        transition: true,
        className: "fixed inset-0 flex w-screen justify-center overflow-y-auto bg-zinc-950/15 px-2 py-2 transition duration-100 focus:outline-0 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in sm:px-6 sm:py-8 lg:px-8 lg:py-16 dark:bg-zinc-950/50"
      }),
      /* @__PURE__ */ jsx3("div", {
        className: "fixed inset-0 w-screen overflow-y-auto pt-6 sm:pt-0",
        children: /* @__PURE__ */ jsx3("div", {
          className: "grid min-h-full grid-rows-[1fr_auto_1fr] justify-items-center p-8 sm:grid-rows-[1fr_auto_3fr] sm:p-4",
          children: /* @__PURE__ */ jsx3(Headless2.DialogPanel, {
            transition: true,
            className: clsx2(className, sizes[size], "row-start-2 w-full rounded-2xl bg-white p-8 shadow-lg ring-1 ring-zinc-950/10 sm:rounded-2xl sm:p-6 dark:bg-zinc-900 dark:ring-white/10 forced-colors:outline", "transition duration-100 will-change-transform data-closed:data-enter:scale-95 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"),
            children
          })
        })
      })
    ]
  });
}
function AlertTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx3(Headless2.DialogTitle, {
    ...props,
    className: clsx2(className, "text-balance text-center font-semibold text-base/6 text-zinc-950 sm:text-wrap sm:text-left sm:text-sm/6 dark:text-white")
  });
}
function AlertDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx3(Headless2.Description, {
    as: Text,
    ...props,
    className: clsx2(className, "mt-2 text-pretty text-center sm:text-left")
  });
}
function AlertBody({ className, ...props }) {
  return /* @__PURE__ */ jsx3("div", {
    ...props,
    className: clsx2(className, "mt-4")
  });
}
function AlertActions({ className, ...props }) {
  return /* @__PURE__ */ jsx3("div", {
    ...props,
    className: clsx2(className, "mt-6 flex flex-col-reverse items-center justify-end gap-3 *:w-full sm:mt-4 sm:flex-row sm:*:w-auto")
  });
}

// src/catalyst/auth-layout.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
function AuthLayout({ children }) {
  return /* @__PURE__ */ jsx4("main", {
    className: "flex min-h-dvh flex-col p-2",
    children: /* @__PURE__ */ jsx4("div", {
      className: "flex grow items-center justify-center p-6 lg:rounded-lg lg:bg-white lg:p-10 lg:shadow-xs lg:ring-1 lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10",
      children
    })
  });
}
// src/catalyst/avatar.tsx
import * as Headless4 from "@headlessui/react";
import clsx4 from "clsx";
import { forwardRef as forwardRef2 } from "react";

// src/catalyst/button.tsx
import * as Headless3 from "@headlessui/react";
import clsx3 from "clsx";
import { forwardRef } from "react";
import { jsx as jsx5, jsxs as jsxs2, Fragment } from "react/jsx-runtime";
var styles = {
  base: [
    "relative isolate inline-flex items-baseline justify-center gap-x-2 rounded-lg border text-base/6 font-semibold",
    "px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)] sm:text-sm/6",
    "focus:outline-hidden data-focus:outline data-focus:outline-2 data-focus:outline-offset-2 data-focus:outline-blue-500",
    "data-disabled:opacity-50",
    "*:data-[slot=icon]:-mx-0.5 *:data-[slot=icon]:my-0.5 *:data-[slot=icon]:size-5 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:self-center *:data-[slot=icon]:text-(--btn-icon) sm:*:data-[slot=icon]:my-1 sm:*:data-[slot=icon]:size-4 forced-colors:[--btn-icon:ButtonText] forced-colors:data-hover:[--btn-icon:ButtonText]"
  ],
  solid: [
    "border-transparent bg-(--btn-border)",
    "dark:bg-(--btn-bg)",
    "before:absolute before:inset-0 before:-z-10 before:rounded-[calc(var(--radius-lg)-1px)] before:bg-(--btn-bg)",
    "before:shadow-sm",
    "dark:before:hidden",
    "dark:border-white/5",
    "after:absolute after:inset-0 after:-z-10 after:rounded-[calc(var(--radius-lg)-1px)]",
    "after:shadow-[shadow:inset_0_1px_--theme(--color-white/15%)]",
    "data-active:after:bg-(--btn-hover-overlay) data-hover:after:bg-(--btn-hover-overlay)",
    "dark:after:-inset-px dark:after:rounded-lg",
    "data-disabled:before:shadow-none data-disabled:after:shadow-none"
  ],
  outline: [
    "border-zinc-950/10 text-zinc-950 data-active:bg-zinc-950/[2.5%] data-hover:bg-zinc-950/[2.5%]",
    "dark:border-white/15 dark:text-white dark:[--btn-bg:transparent] dark:data-active:bg-white/5 dark:data-hover:bg-white/5",
    "[--btn-icon:var(--color-zinc-500)] data-active:[--btn-icon:var(--color-zinc-700)] data-hover:[--btn-icon:var(--color-zinc-700)] dark:data-active:[--btn-icon:var(--color-zinc-400)] dark:data-hover:[--btn-icon:var(--color-zinc-400)]"
  ],
  plain: [
    "border-transparent text-zinc-950 data-active:bg-zinc-950/5 data-hover:bg-zinc-950/5",
    "dark:text-white dark:data-active:bg-white/10 dark:data-hover:bg-white/10",
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
var Button2 = forwardRef(function Button3({ color, outline, plain, className, children, ...props }, ref) {
  const classes = clsx3(className, styles.base, outline ? styles.outline : plain ? styles.plain : clsx3(styles.solid, styles.colors[color ?? "dark/zinc"]));
  return "href" in props ? /* @__PURE__ */ jsx5(Link, {
    ...props,
    className: classes,
    ref,
    children: /* @__PURE__ */ jsx5(TouchTarget, {
      children
    })
  }) : /* @__PURE__ */ jsx5(Headless3.Button, {
    ...props,
    className: clsx3(classes, "cursor-default"),
    ref,
    children: /* @__PURE__ */ jsx5(TouchTarget, {
      children
    })
  });
});
function TouchTarget({ children }) {
  return /* @__PURE__ */ jsxs2(Fragment, {
    children: [
      /* @__PURE__ */ jsx5("span", {
        className: "-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] [@media(pointer:fine)]:hidden",
        "aria-hidden": "true"
      }),
      children
    ]
  });
}

// src/catalyst/avatar.tsx
import { jsx as jsx6, jsxs as jsxs3 } from "react/jsx-runtime";
function Avatar({ src = null, square = false, initials, alt = "", className, ...props }) {
  return /* @__PURE__ */ jsxs3("span", {
    "data-slot": "avatar",
    ...props,
    className: clsx4(className, "inline-grid shrink-0 align-middle [--avatar-radius:20%] *:col-start-1 *:row-start-1", "-outline-offset-1 outline outline-black/10 dark:outline-white/10", square ? "rounded-(--avatar-radius) *:rounded-(--avatar-radius)" : "rounded-full *:rounded-full"),
    children: [
      initials && /* @__PURE__ */ jsxs3("svg", {
        className: "size-full select-none fill-current p-[5%] font-medium text-[48px] uppercase",
        viewBox: "0 0 100 100",
        "aria-hidden": alt ? undefined : "true",
        children: [
          alt && /* @__PURE__ */ jsx6("title", {
            children: alt
          }),
          /* @__PURE__ */ jsx6("text", {
            x: "50%",
            y: "50%",
            alignmentBaseline: "middle",
            dominantBaseline: "middle",
            textAnchor: "middle",
            dy: ".125em",
            children: initials
          })
        ]
      }),
      src && /* @__PURE__ */ jsx6("img", {
        className: "size-full",
        src,
        alt
      })
    ]
  });
}
var AvatarButton = forwardRef2(function AvatarButton2({ src, square = false, initials, alt, className, ...props }, ref) {
  const classes = clsx4(className, square ? "rounded-[20%]" : "rounded-full", "relative inline-grid focus:outline-hidden data-focus:outline-2 data-focus:outline-blue-500 data-focus:outline-offset-2");
  return "href" in props ? /* @__PURE__ */ jsx6(Link, {
    ...props,
    className: classes,
    ref,
    children: /* @__PURE__ */ jsx6(TouchTarget, {
      children: /* @__PURE__ */ jsx6(Avatar, {
        src,
        square,
        initials,
        alt
      })
    })
  }) : /* @__PURE__ */ jsx6(Headless4.Button, {
    ...props,
    className: classes,
    ref,
    children: /* @__PURE__ */ jsx6(TouchTarget, {
      children: /* @__PURE__ */ jsx6(Avatar, {
        src,
        square,
        initials,
        alt
      })
    })
  });
});

// src/catalyst/badge.tsx
import * as Headless5 from "@headlessui/react";
import clsx5 from "clsx";
import { forwardRef as forwardRef3 } from "react";
import { jsx as jsx7 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx7("span", {
    ...props,
    className: clsx5(className, "inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 font-medium text-sm/5 sm:text-xs/5 forced-colors:outline", colors[color])
  });
}
var BadgeButton = forwardRef3(function BadgeButton2({ color = "zinc", className, children, ...props }, ref) {
  const classes = clsx5(className, "group relative inline-flex rounded-md focus:outline-hidden data-focus:outline-2 data-focus:outline-blue-500 data-focus:outline-offset-2");
  return "href" in props ? /* @__PURE__ */ jsx7(Link, {
    ...props,
    className: classes,
    ref,
    children: /* @__PURE__ */ jsx7(TouchTarget, {
      children: /* @__PURE__ */ jsx7(Badge, {
        color,
        children
      })
    })
  }) : /* @__PURE__ */ jsx7(Headless5.Button, {
    ...props,
    className: classes,
    ref,
    children: /* @__PURE__ */ jsx7(TouchTarget, {
      children: /* @__PURE__ */ jsx7(Badge, {
        color,
        children
      })
    })
  });
});

// src/catalyst/checkbox.tsx
import * as Headless6 from "@headlessui/react";
import clsx6 from "clsx";
import { jsx as jsx8, jsxs as jsxs4 } from "react/jsx-runtime";
function CheckboxGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx8("div", {
    "data-slot": "control",
    ...props,
    className: clsx6(className, "space-y-3", "has-data-[slot=description]:space-y-6 has-data-[slot=description]:**:data-[slot=label]:font-medium")
  });
}
function CheckboxField({ className, ...props }) {
  return /* @__PURE__ */ jsx8(Headless6.Field, {
    "data-slot": "field",
    ...props,
    className: clsx6(className, "grid grid-cols-[1.125rem_1fr] gap-x-4 gap-y-1 sm:grid-cols-[1rem_1fr]", "*:data-[slot=control]:col-start-1 *:data-[slot=control]:row-start-1 *:data-[slot=control]:mt-0.75 sm:*:data-[slot=control]:mt-1", "*:data-[slot=label]:col-start-2 *:data-[slot=label]:row-start-1", "*:data-[slot=description]:col-start-2 *:data-[slot=description]:row-start-2", "has-data-[slot=description]:**:data-[slot=label]:font-medium")
  });
}
var base = [
  "relative isolate flex size-[1.125rem] items-center justify-center rounded-[0.3125rem] sm:size-4",
  "before:absolute before:inset-0 before:-z-10 before:rounded-[calc(0.3125rem-1px)] before:bg-white before:shadow-sm",
  "group-data-checked:before:bg-(--checkbox-checked-bg)",
  "dark:before:hidden",
  "dark:bg-white/5 dark:group-data-checked:bg-(--checkbox-checked-bg)",
  "border border-zinc-950/15 group-data-checked:border-transparent group-data-hover:group-data-checked:border-transparent group-data-hover:border-zinc-950/30 group-data-checked:bg-(--checkbox-checked-border)",
  "dark:border-white/15 dark:group-data-checked:border-white/5 dark:group-data-hover:group-data-checked:border-white/5 dark:group-data-hover:border-white/30",
  "after:absolute after:inset-0 after:rounded-[calc(0.3125rem-1px)] after:shadow-[inset_0_1px_--theme(--color-white/15%)]",
  "dark:after:-inset-px dark:after:hidden dark:after:rounded-[0.3125rem] dark:group-data-checked:after:block",
  "group-data-focus:outline group-data-focus:outline-2 group-data-focus:outline-offset-2 group-data-focus:outline-blue-500",
  "group-data-disabled:opacity-50",
  "group-data-disabled:border-zinc-950/25 group-data-disabled:bg-zinc-950/5 group-data-disabled:[--checkbox-check:var(--color-zinc-950)]/50 group-data-disabled:before:bg-transparent",
  "dark:group-data-disabled:border-white/20 dark:group-data-disabled:bg-white/[2.5%] dark:group-data-disabled:[--checkbox-check:var(--color-white)]/50 dark:group-data-checked:group-data-disabled:after:hidden",
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
  return /* @__PURE__ */ jsx8(Headless6.Checkbox, {
    "data-slot": "control",
    ...props,
    className: clsx6(className, "group inline-flex focus:outline-hidden"),
    children: /* @__PURE__ */ jsx8("span", {
      className: clsx6([base, colors2[color]]),
      children: /* @__PURE__ */ jsxs4("svg", {
        className: "size-4 stroke-(--checkbox-check) opacity-0 group-data-checked:opacity-100 sm:h-3.5 sm:w-3.5",
        viewBox: "0 0 14 14",
        fill: "none",
        children: [
          /* @__PURE__ */ jsx8("path", {
            className: "opacity-100 group-data-indeterminate:opacity-0",
            d: "M3 8L6 11L11 3.5",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }),
          /* @__PURE__ */ jsx8("path", {
            className: "opacity-0 group-data-indeterminate:opacity-100",
            d: "M3 7H11",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        ]
      })
    })
  });
}

// src/catalyst/combobox.tsx
import * as Headless7 from "@headlessui/react";
import clsx7 from "clsx";
import { useState } from "react";
import { jsx as jsx9, jsxs as jsxs5 } from "react/jsx-runtime";
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
  const [query, setQuery] = useState("");
  const filteredOptions = query === "" ? options : options.filter((option) => filter ? filter(option, query) : displayValue(option)?.toLowerCase().includes(query.toLowerCase()));
  return /* @__PURE__ */ jsxs5(Headless7.Combobox, {
    ...props,
    multiple: false,
    virtual: { options: filteredOptions },
    onClose: () => setQuery(""),
    children: [
      /* @__PURE__ */ jsxs5("span", {
        "data-slot": "control",
        className: clsx7([
          className,
          "relative block w-full",
          "before:absolute before:inset-px before:rounded-[calc(var(--radius-lg)-1px)] before:bg-white before:shadow-sm",
          "dark:before:hidden",
          "after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-transparent after:ring-inset sm:focus-within:after:ring-2 sm:focus-within:after:ring-blue-500",
          "has-data-disabled:opacity-50 has-data-disabled:before:bg-zinc-950/5 has-data-disabled:before:shadow-none",
          "has-data-invalid:before:shadow-red-500/10"
        ]),
        children: [
          /* @__PURE__ */ jsx9(Headless7.ComboboxInput, {
            autoFocus,
            "data-slot": "control",
            "aria-label": ariaLabel,
            displayValue: (option) => displayValue(option) ?? "",
            onChange: (event) => setQuery(event.target.value),
            placeholder,
            className: clsx7([
              className,
              "relative block w-full appearance-none rounded-lg py-[calc(--spacing(2.5)-1px)] sm:py-[calc(--spacing(1.5)-1px)]",
              "pr-[calc(--spacing(10)-1px)] pl-[calc(--spacing(3.5)-1px)] sm:pr-[calc(--spacing(9)-1px)] sm:pl-[calc(--spacing(3)-1px)]",
              "text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white",
              "border border-zinc-950/10 data-hover:border-zinc-950/20 dark:border-white/10 dark:data-hover:border-white/20",
              "bg-transparent dark:bg-white/5",
              "focus:outline-hidden",
              "data-invalid:data-hover:border-red-500 data-invalid:border-red-500 dark:data-invalid:data-hover:border-red-500 dark:data-invalid:border-red-500",
              "data-disabled:border-zinc-950/20 dark:data-hover:data-disabled:border-white/15 dark:data-disabled:border-white/15 dark:data-disabled:bg-white/[2.5%]",
              "dark:[color-scheme:dark]"
            ])
          }),
          /* @__PURE__ */ jsx9(Headless7.ComboboxButton, {
            className: "group absolute inset-y-0 right-0 flex items-center px-2",
            children: /* @__PURE__ */ jsxs5("svg", {
              className: "size-5 stroke-zinc-500 group-data-disabled:stroke-zinc-600 group-data-hover:stroke-zinc-700 sm:size-4 dark:stroke-zinc-400 dark:group-data-hover:stroke-zinc-300 forced-colors:stroke-[CanvasText]",
              viewBox: "0 0 16 16",
              "aria-hidden": "true",
              fill: "none",
              children: [
                /* @__PURE__ */ jsx9("path", {
                  d: "M5.75 10.75L8 13L10.25 10.75",
                  strokeWidth: 1.5,
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }),
                /* @__PURE__ */ jsx9("path", {
                  d: "M10.25 5.25L8 3L5.75 5.25",
                  strokeWidth: 1.5,
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                })
              ]
            })
          })
        ]
      }),
      /* @__PURE__ */ jsx9(Headless7.ComboboxOptions, {
        transition: true,
        anchor,
        className: clsx7("[--anchor-gap:--spacing(2)] [--anchor-padding:--spacing(4)] sm:data-[anchor~=start]:[--anchor-offset:-4px]", "isolate min-w-[calc(var(--input-width)+8px)] select-none scroll-py-1 rounded-xl p-1 empty:invisible", "outline outline-transparent focus:outline-hidden", "overflow-y-scroll overscroll-contain", "bg-white/75 backdrop-blur-xl dark:bg-zinc-800/75", "shadow-lg ring-1 ring-zinc-950/10 dark:ring-white/10 dark:ring-inset", "transition-opacity duration-100 ease-in data-closed:data-leave:opacity-0 data-transition:pointer-events-none"),
        children: ({ option }) => children(option)
      })
    ]
  });
}
function ComboboxOption2({ children, className, ...props }) {
  const sharedClasses = clsx7("flex min-w-0 items-center", "*:data-[slot=icon]:size-5 *:data-[slot=icon]:shrink-0 sm:*:data-[slot=icon]:size-4", "*:data-[slot=icon]:text-zinc-500 group-data-focus/option:*:data-[slot=icon]:text-white dark:*:data-[slot=icon]:text-zinc-400", "forced-colors:*:data-[slot=icon]:text-[CanvasText] forced-colors:group-data-focus/option:*:data-[slot=icon]:text-[Canvas]", "*:data-[slot=avatar]:-mx-0.5 *:data-[slot=avatar]:size-6 sm:*:data-[slot=avatar]:size-5");
  return /* @__PURE__ */ jsxs5(Headless7.ComboboxOption, {
    ...props,
    className: clsx7("group/option grid w-full cursor-default grid-cols-[1fr_--spacing(5)] items-baseline gap-x-2 rounded-lg py-2.5 pr-2 pl-3.5 sm:grid-cols-[1fr_--spacing(4)] sm:py-1.5 sm:pr-2 sm:pl-3", "text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white forced-colors:text-[CanvasText]", "outline-hidden data-focus:bg-blue-500 data-focus:text-white", "forced-color-adjust-none forced-colors:data-focus:bg-[Highlight] forced-colors:data-focus:text-[HighlightText]", "data-disabled:opacity-50"),
    children: [
      /* @__PURE__ */ jsx9("span", {
        className: clsx7(className, sharedClasses),
        children
      }),
      /* @__PURE__ */ jsx9("svg", {
        className: "relative col-start-2 hidden size-5 self-center stroke-current group-data-selected/option:inline sm:size-4",
        viewBox: "0 0 16 16",
        fill: "none",
        "aria-hidden": "true",
        children: /* @__PURE__ */ jsx9("path", {
          d: "M4 8.5l3 3L12 4",
          strokeWidth: 1.5,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        })
      })
    ]
  });
}
function ComboboxLabel({ className, ...props }) {
  return /* @__PURE__ */ jsx9("span", {
    ...props,
    className: clsx7(className, "ml-2.5 truncate first:ml-0 sm:ml-2 sm:first:ml-0")
  });
}
function ComboboxDescription({ className, children, ...props }) {
  return /* @__PURE__ */ jsx9("span", {
    ...props,
    className: clsx7(className, "flex flex-1 overflow-hidden text-zinc-500 before:w-2 before:min-w-0 before:shrink group-data-focus/option:text-white dark:text-zinc-400"),
    children: /* @__PURE__ */ jsx9("span", {
      className: "flex-1 truncate",
      children
    })
  });
}

// src/catalyst/description-list.tsx
import clsx8 from "clsx";
import { jsx as jsx10 } from "react/jsx-runtime";
function DescriptionList({ className, ...props }) {
  return /* @__PURE__ */ jsx10("dl", {
    ...props,
    className: clsx8(className, "grid grid-cols-1 text-base/6 sm:grid-cols-[min(50%,--spacing(80))_auto] sm:text-sm/6")
  });
}
function DescriptionTerm({ className, ...props }) {
  return /* @__PURE__ */ jsx10("dt", {
    ...props,
    className: clsx8(className, "col-start-1 border-zinc-950/5 border-t pt-3 text-zinc-500 first:border-none sm:border-zinc-950/5 sm:border-t sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5")
  });
}
function DescriptionDetails({ className, ...props }) {
  return /* @__PURE__ */ jsx10("dd", {
    ...props,
    className: clsx8(className, "pt-1 pb-3 text-zinc-950 sm:border-zinc-950/5 sm:border-t sm:nth-2:border-none sm:py-3 dark:text-white dark:sm:border-white/5")
  });
}

// src/catalyst/dialog.tsx
import * as Headless8 from "@headlessui/react";
import clsx9 from "clsx";
import { jsx as jsx11, jsxs as jsxs6 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs6(Headless8.Dialog, {
    ...props,
    children: [
      /* @__PURE__ */ jsx11(Headless8.DialogBackdrop, {
        transition: true,
        className: "fixed inset-0 flex w-screen justify-center overflow-y-auto bg-zinc-950/25 px-2 py-2 transition duration-100 focus:outline-0 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in sm:px-6 sm:py-8 lg:px-8 lg:py-16 dark:bg-zinc-950/50"
      }),
      /* @__PURE__ */ jsx11("div", {
        className: "fixed inset-0 w-screen overflow-y-auto pt-6 sm:pt-0",
        children: /* @__PURE__ */ jsx11("div", {
          className: "grid min-h-full grid-rows-[1fr_auto] justify-items-center sm:grid-rows-[1fr_auto_3fr] sm:p-4",
          children: /* @__PURE__ */ jsx11(Headless8.DialogPanel, {
            transition: true,
            className: clsx9(className, sizes2[size], "row-start-2 w-full min-w-0 rounded-t-3xl bg-white p-(--gutter) shadow-lg ring-1 ring-zinc-950/10 [--gutter:--spacing(8)] sm:mb-auto sm:rounded-2xl dark:bg-zinc-900 dark:ring-white/10 forced-colors:outline", "transition duration-100 will-change-transform data-closed:translate-y-12 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in sm:data-closed:data-enter:scale-95 sm:data-closed:translate-y-0"),
            children
          })
        })
      })
    ]
  });
}
function DialogTitle3({ className, ...props }) {
  return /* @__PURE__ */ jsx11(Headless8.DialogTitle, {
    ...props,
    className: clsx9(className, "text-balance font-semibold text-lg/6 text-zinc-950 sm:text-base/6 dark:text-white")
  });
}
function DialogDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx11(Headless8.Description, {
    as: Text,
    ...props,
    className: clsx9(className, "mt-2 text-pretty")
  });
}
function DialogBody({ className, ...props }) {
  return /* @__PURE__ */ jsx11("div", {
    ...props,
    className: clsx9(className, "mt-6")
  });
}
function DialogActions({ className, ...props }) {
  return /* @__PURE__ */ jsx11("div", {
    ...props,
    className: clsx9(className, "mt-8 flex flex-col-reverse items-center justify-end gap-3 *:w-full sm:flex-row sm:*:w-auto")
  });
}

// src/catalyst/divider.tsx
import clsx10 from "clsx";
import { jsx as jsx12 } from "react/jsx-runtime";
function Divider({ soft = false, className, ...props }) {
  return /* @__PURE__ */ jsx12("hr", {
    ...props,
    className: clsx10(className, "w-full border-t", soft && "border-zinc-950/5 dark:border-white/5", !soft && "border-zinc-950/10 dark:border-white/10")
  });
}
// src/catalyst/dropdown.tsx
import * as Headless9 from "@headlessui/react";
import clsx11 from "clsx";
import { jsx as jsx13 } from "react/jsx-runtime";
function Dropdown(props) {
  return /* @__PURE__ */ jsx13(Headless9.Menu, {
    ...props
  });
}
function DropdownButton({ as = Button2, ...props }) {
  return /* @__PURE__ */ jsx13(Headless9.MenuButton, {
    as,
    ...props
  });
}
function DropdownMenu({ anchor = "bottom", className, ...props }) {
  return /* @__PURE__ */ jsx13(Headless9.MenuItems, {
    ...props,
    transition: true,
    anchor,
    className: clsx11(className, "[--anchor-gap:--spacing(2)] [--anchor-padding:--spacing(1)] data-[anchor~=end]:[--anchor-offset:6px] data-[anchor~=start]:[--anchor-offset:-6px] sm:data-[anchor~=end]:[--anchor-offset:4px] sm:data-[anchor~=start]:[--anchor-offset:-4px]", "isolate w-max rounded-xl p-1", "outline outline-transparent focus:outline-hidden", "overflow-y-auto", "bg-white/75 backdrop-blur-xl dark:bg-zinc-800/75", "shadow-lg ring-1 ring-zinc-950/10 dark:ring-white/10 dark:ring-inset", "supports-[grid-template-columns:subgrid]:grid supports-[grid-template-columns:subgrid]:grid-cols-[auto_1fr_1.5rem_0.5rem_auto]", "transition data-closed:data-leave:opacity-0 data-leave:duration-100 data-leave:ease-in")
  });
}
function DropdownItem({ className, ...props }) {
  const classes = clsx11(className, "group cursor-default rounded-lg px-3.5 py-2.5 focus:outline-hidden sm:px-3 sm:py-1.5", "text-left text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white forced-colors:text-[CanvasText]", "data-focus:bg-blue-500 data-focus:text-white", "data-disabled:opacity-50", "forced-color-adjust-none forced-colors:data-focus:bg-[Highlight] forced-colors:data-focus:text-[HighlightText] forced-colors:data-focus:*:data-[slot=icon]:text-[HighlightText]", "col-span-full grid grid-cols-[auto_1fr_1.5rem_0.5rem_auto] items-center supports-[grid-template-columns:subgrid]:grid-cols-subgrid", "*:data-[slot=icon]:-ml-0.5 *:data-[slot=icon]:col-start-1 *:data-[slot=icon]:row-start-1 *:data-[slot=icon]:mr-2.5 *:data-[slot=icon]:size-5 sm:*:data-[slot=icon]:mr-2 sm:*:data-[slot=icon]:size-4", "data-focus:*:data-[slot=icon]:text-white *:data-[slot=icon]:text-zinc-500 dark:data-focus:*:data-[slot=icon]:text-white dark:*:data-[slot=icon]:text-zinc-400", "*:data-[slot=avatar]:-ml-1 *:data-[slot=avatar]:mr-2.5 *:data-[slot=avatar]:size-6 sm:*:data-[slot=avatar]:mr-2 sm:*:data-[slot=avatar]:size-5");
  return "href" in props ? /* @__PURE__ */ jsx13(Headless9.MenuItem, {
    as: Link,
    ...props,
    className: classes
  }) : /* @__PURE__ */ jsx13(Headless9.MenuItem, {
    as: "button",
    type: "button",
    ...props,
    className: classes
  });
}
function DropdownHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx13("div", {
    ...props,
    className: clsx11(className, "col-span-5 px-3.5 pt-2.5 pb-1 sm:px-3")
  });
}
function DropdownSection({ className, ...props }) {
  return /* @__PURE__ */ jsx13(Headless9.MenuSection, {
    ...props,
    className: clsx11(className, "col-span-full supports-[grid-template-columns:subgrid]:grid supports-[grid-template-columns:subgrid]:grid-cols-[auto_1fr_1.5rem_0.5rem_auto]")
  });
}
function DropdownHeading({ className, ...props }) {
  return /* @__PURE__ */ jsx13(Headless9.MenuHeading, {
    ...props,
    className: clsx11(className, "col-span-full grid grid-cols-[1fr_auto] gap-x-12 px-3.5 pt-2 pb-1 font-medium text-sm/5 text-zinc-500 sm:px-3 sm:text-xs/5 dark:text-zinc-400")
  });
}
function DropdownDivider({ className, ...props }) {
  return /* @__PURE__ */ jsx13(Headless9.MenuSeparator, {
    ...props,
    className: clsx11(className, "col-span-full mx-3.5 my-1 h-px border-0 bg-zinc-950/5 sm:mx-3 dark:bg-white/10 forced-colors:bg-[CanvasText]")
  });
}
function DropdownLabel({ className, ...props }) {
  return /* @__PURE__ */ jsx13(Headless9.Label, {
    ...props,
    "data-slot": "label",
    className: clsx11(className, "col-start-2 row-start-1"),
    ...props
  });
}
function DropdownDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx13(Headless9.Description, {
    "data-slot": "description",
    ...props,
    className: clsx11(className, "col-span-2 col-start-2 row-start-2 text-sm/5 text-zinc-500 group-data-focus:text-white sm:text-xs/5 dark:text-zinc-400 forced-colors:group-data-focus:text-[HighlightText]")
  });
}
function DropdownShortcut({ keys, className, ...props }) {
  return /* @__PURE__ */ jsx13(Headless9.Description, {
    as: "kbd",
    ...props,
    className: clsx11(className, "col-start-5 row-start-1 flex justify-self-end"),
    children: (Array.isArray(keys) ? keys : keys.split("")).map((char, index) => /* @__PURE__ */ jsx13("kbd", {
      className: clsx11([
        "min-w-[2ch] text-center font-sans text-zinc-400 capitalize group-data-focus:text-white forced-colors:group-data-focus:text-[HighlightText]",
        index > 0 && char.length > 1 && "pl-1"
      ]),
      children: char
    }, index))
  });
}

// src/catalyst/fieldset.tsx
import * as Headless10 from "@headlessui/react";
import clsx12 from "clsx";
import { jsx as jsx14 } from "react/jsx-runtime";
function Fieldset2({ className, ...props }) {
  return /* @__PURE__ */ jsx14(Headless10.Fieldset, {
    ...props,
    className: clsx12(className, "*:data-[slot=text]:mt-1 [&>*+[data-slot=control]]:mt-6")
  });
}
function Legend2({ className, ...props }) {
  return /* @__PURE__ */ jsx14(Headless10.Legend, {
    "data-slot": "legend",
    ...props,
    className: clsx12(className, "font-semibold text-base/6 text-zinc-950 data-disabled:opacity-50 sm:text-sm/6 dark:text-white")
  });
}
function FieldGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx14("div", {
    "data-slot": "control",
    ...props,
    className: clsx12(className, "space-y-8")
  });
}
function Field3({ className, ...props }) {
  return /* @__PURE__ */ jsx14(Headless10.Field, {
    ...props,
    className: clsx12(className, "[&>[data-slot=label]+[data-slot=control]]:mt-3", "[&>[data-slot=label]+[data-slot=description]]:mt-1", "[&>[data-slot=description]+[data-slot=control]]:mt-3", "[&>[data-slot=control]+[data-slot=description]]:mt-3", "[&>[data-slot=control]+[data-slot=error]]:mt-3", "*:data-[slot=label]:font-medium")
  });
}
function Label3({ className, ...props }) {
  return /* @__PURE__ */ jsx14(Headless10.Label, {
    "data-slot": "label",
    ...props,
    className: clsx12(className, "select-none text-base/6 text-zinc-950 data-disabled:opacity-50 sm:text-sm/6 dark:text-white")
  });
}
function Description5({ className, ...props }) {
  return /* @__PURE__ */ jsx14(Headless10.Description, {
    "data-slot": "description",
    ...props,
    className: clsx12(className, "text-base/6 text-zinc-500 data-disabled:opacity-50 sm:text-sm/6 dark:text-zinc-400")
  });
}
function ErrorMessage({ className, ...props }) {
  return /* @__PURE__ */ jsx14(Headless10.Description, {
    "data-slot": "error",
    ...props,
    className: clsx12(className, "text-base/6 text-red-600 data-disabled:opacity-50 sm:text-sm/6 dark:text-red-500")
  });
}
// src/catalyst/heading.tsx
import clsx13 from "clsx";
import { jsx as jsx15 } from "react/jsx-runtime";
function Heading({ className, level = 1, ...props }) {
  const Element = `h${level}`;
  return /* @__PURE__ */ jsx15(Element, {
    ...props,
    className: clsx13(className, "font-semibold text-2xl/8 text-zinc-950 sm:text-xl/8 dark:text-white")
  });
}
function Subheading({ className, level = 2, ...props }) {
  const Element = `h${level}`;
  return /* @__PURE__ */ jsx15(Element, {
    ...props,
    className: clsx13(className, "font-semibold text-base/7 text-zinc-950 sm:text-sm/6 dark:text-white")
  });
}

// src/catalyst/input.tsx
import * as Headless11 from "@headlessui/react";
import clsx14 from "clsx";
import { forwardRef as forwardRef4 } from "react";
import { jsx as jsx16 } from "react/jsx-runtime";
function InputGroup({ children }) {
  return /* @__PURE__ */ jsx16("span", {
    "data-slot": "control",
    className: clsx14("relative isolate block", "has-[[data-slot=icon]:last-child]:[&_input]:pr-10 has-[[data-slot=icon]:first-child]:[&_input]:pl-10 sm:has-[[data-slot=icon]:last-child]:[&_input]:pr-8 sm:has-[[data-slot=icon]:first-child]:[&_input]:pl-8", "*:data-[slot=icon]:pointer-events-none *:data-[slot=icon]:absolute *:data-[slot=icon]:top-3 *:data-[slot=icon]:z-10 *:data-[slot=icon]:size-5 sm:*:data-[slot=icon]:top-2.5 sm:*:data-[slot=icon]:size-4", "[&>[data-slot=icon]:first-child]:left-3 sm:[&>[data-slot=icon]:first-child]:left-2.5 [&>[data-slot=icon]:last-child]:right-3 sm:[&>[data-slot=icon]:last-child]:right-2.5", "*:data-[slot=icon]:text-zinc-500 dark:*:data-[slot=icon]:text-zinc-400"),
    children
  });
}
var dateTypes = ["date", "datetime-local", "month", "time", "week"];
var Input2 = forwardRef4(function Input3({
  className,
  ...props
}, ref) {
  return /* @__PURE__ */ jsx16("span", {
    "data-slot": "control",
    className: clsx14([
      className,
      "relative block w-full",
      "before:absolute before:inset-px before:rounded-[calc(var(--radius-lg)-1px)] before:bg-white before:shadow-sm",
      "dark:before:hidden",
      "after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-transparent after:ring-inset sm:focus-within:after:ring-2 sm:focus-within:after:ring-blue-500",
      "has-data-disabled:opacity-50 has-data-disabled:before:bg-zinc-950/5 has-data-disabled:before:shadow-none",
      "has-data-invalid:before:shadow-red-500/10"
    ]),
    children: /* @__PURE__ */ jsx16(Headless11.Input, {
      ref,
      ...props,
      className: clsx14([
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
        "relative block w-full appearance-none rounded-lg px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)]",
        "text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white",
        "border border-zinc-950/10 data-hover:border-zinc-950/20 dark:border-white/10 dark:data-hover:border-white/20",
        "bg-transparent dark:bg-white/5",
        "focus:outline-hidden",
        "data-invalid:data-hover:border-red-500 data-invalid:border-red-500 dark:data-invalid:data-hover:border-red-500 dark:data-invalid:border-red-500",
        "data-disabled:border-zinc-950/20 dark:data-hover:data-disabled:border-white/15 dark:data-disabled:border-white/15 dark:data-disabled:bg-white/[2.5%]",
        "dark:[color-scheme:dark]"
      ])
    })
  });
});
// src/catalyst/listbox.tsx
import * as Headless12 from "@headlessui/react";
import clsx15 from "clsx";
import { Fragment as Fragment2 } from "react";
import { jsx as jsx17, jsxs as jsxs7 } from "react/jsx-runtime";
function Listbox2({
  className,
  placeholder,
  autoFocus,
  "aria-label": ariaLabel,
  children: options,
  ...props
}) {
  return /* @__PURE__ */ jsxs7(Headless12.Listbox, {
    ...props,
    multiple: false,
    children: [
      /* @__PURE__ */ jsxs7(Headless12.ListboxButton, {
        autoFocus,
        "data-slot": "control",
        "aria-label": ariaLabel,
        className: clsx15([
          className,
          "group relative block w-full",
          "before:absolute before:inset-px before:rounded-[calc(var(--radius-lg)-1px)] before:bg-white before:shadow-sm",
          "dark:before:hidden",
          "focus:outline-hidden",
          "after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-transparent after:ring-inset data-focus:after:ring-2 data-focus:after:ring-blue-500",
          "data-disabled:opacity-50 data-disabled:before:bg-zinc-950/5 data-disabled:before:shadow-none"
        ]),
        children: [
          /* @__PURE__ */ jsx17(Headless12.ListboxSelectedOption, {
            as: "span",
            options,
            placeholder: placeholder && /* @__PURE__ */ jsx17("span", {
              className: "block truncate text-zinc-500",
              children: placeholder
            }),
            className: clsx15([
              "relative block w-full appearance-none rounded-lg py-[calc(--spacing(2.5)-1px)] sm:py-[calc(--spacing(1.5)-1px)]",
              "min-h-11 sm:min-h-9",
              "pr-[calc(--spacing(7)-1px)] pl-[calc(--spacing(3.5)-1px)] sm:pl-[calc(--spacing(3)-1px)]",
              "text-left text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white forced-colors:text-[CanvasText]",
              "border border-zinc-950/10 group-data-active:border-zinc-950/20 group-data-hover:border-zinc-950/20 dark:border-white/10 dark:group-data-active:border-white/20 dark:group-data-hover:border-white/20",
              "bg-transparent dark:bg-white/5",
              "group-data-hover:group-data-invalid:border-red-500 group-data-invalid:border-red-500 dark:group-data-invalid:border-red-600 dark:data-hover:group-data-invalid:border-red-600",
              "group-data-disabled:border-zinc-950/20 group-data-disabled:opacity-100 dark:group-data-disabled:border-white/15 dark:group-data-disabled:bg-white/[2.5%] dark:group-data-disabled:data-hover:border-white/15"
            ])
          }),
          /* @__PURE__ */ jsx17("span", {
            className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",
            children: /* @__PURE__ */ jsxs7("svg", {
              className: "size-5 stroke-zinc-500 group-data-disabled:stroke-zinc-600 sm:size-4 dark:stroke-zinc-400 forced-colors:stroke-[CanvasText]",
              viewBox: "0 0 16 16",
              "aria-hidden": "true",
              fill: "none",
              children: [
                /* @__PURE__ */ jsx17("path", {
                  d: "M5.75 10.75L8 13L10.25 10.75",
                  strokeWidth: 1.5,
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }),
                /* @__PURE__ */ jsx17("path", {
                  d: "M10.25 5.25L8 3L5.75 5.25",
                  strokeWidth: 1.5,
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                })
              ]
            })
          })
        ]
      }),
      /* @__PURE__ */ jsx17(Headless12.ListboxOptions, {
        transition: true,
        anchor: "selection start",
        className: clsx15("[--anchor-offset:-1.625rem] [--anchor-padding:--spacing(4)] sm:[--anchor-offset:-1.375rem]", "isolate w-max min-w-[calc(var(--button-width)+1.75rem)] select-none scroll-py-1 rounded-xl p-1", "outline outline-transparent focus:outline-hidden", "overflow-y-scroll overscroll-contain", "bg-white/75 backdrop-blur-xl dark:bg-zinc-800/75", "shadow-lg ring-1 ring-zinc-950/10 dark:ring-white/10 dark:ring-inset", "transition-opacity duration-100 ease-in data-closed:data-leave:opacity-0 data-transition:pointer-events-none"),
        children: options
      })
    ]
  });
}
function ListboxOption2({ children, className, ...props }) {
  const sharedClasses = clsx15("flex min-w-0 items-center", "*:data-[slot=icon]:size-5 *:data-[slot=icon]:shrink-0 sm:*:data-[slot=icon]:size-4", "*:data-[slot=icon]:text-zinc-500 group-data-focus/option:*:data-[slot=icon]:text-white dark:*:data-[slot=icon]:text-zinc-400", "forced-colors:*:data-[slot=icon]:text-[CanvasText] forced-colors:group-data-focus/option:*:data-[slot=icon]:text-[Canvas]", "*:data-[slot=avatar]:-mx-0.5 *:data-[slot=avatar]:size-6 sm:*:data-[slot=avatar]:size-5");
  return /* @__PURE__ */ jsx17(Headless12.ListboxOption, {
    as: Fragment2,
    ...props,
    children: ({ selectedOption }) => {
      if (selectedOption) {
        return /* @__PURE__ */ jsx17("div", {
          className: clsx15(className, sharedClasses),
          children
        });
      }
      return /* @__PURE__ */ jsxs7("div", {
        className: clsx15("group/option grid cursor-default grid-cols-[--spacing(5)_1fr] items-baseline gap-x-2 rounded-lg py-2.5 pr-3.5 pl-2 sm:grid-cols-[--spacing(4)_1fr] sm:py-1.5 sm:pr-3 sm:pl-1.5", "text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white forced-colors:text-[CanvasText]", "outline-hidden data-focus:bg-blue-500 data-focus:text-white", "forced-color-adjust-none forced-colors:data-focus:bg-[Highlight] forced-colors:data-focus:text-[HighlightText]", "data-disabled:opacity-50"),
        children: [
          /* @__PURE__ */ jsx17("svg", {
            className: "relative hidden size-5 self-center stroke-current group-data-selected/option:inline sm:size-4",
            viewBox: "0 0 16 16",
            fill: "none",
            "aria-hidden": "true",
            children: /* @__PURE__ */ jsx17("path", {
              d: "M4 8.5l3 3L12 4",
              strokeWidth: 1.5,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })
          }),
          /* @__PURE__ */ jsx17("span", {
            className: clsx15(className, sharedClasses, "col-start-2"),
            children
          })
        ]
      });
    }
  });
}
function ListboxLabel({ className, ...props }) {
  return /* @__PURE__ */ jsx17("span", {
    ...props,
    className: clsx15(className, "ml-2.5 truncate first:ml-0 sm:ml-2 sm:first:ml-0")
  });
}
function ListboxDescription({ className, children, ...props }) {
  return /* @__PURE__ */ jsx17("span", {
    ...props,
    className: clsx15(className, "flex flex-1 overflow-hidden text-zinc-500 before:w-2 before:min-w-0 before:shrink group-data-focus/option:text-white dark:text-zinc-400"),
    children: /* @__PURE__ */ jsx17("span", {
      className: "flex-1 truncate",
      children
    })
  });
}

// src/catalyst/navbar.tsx
import * as Headless13 from "@headlessui/react";
import clsx16 from "clsx";
import { forwardRef as forwardRef5, useId } from "react";
import { jsx as jsx18, jsxs as jsxs8 } from "react/jsx-runtime";
function Navbar({ className, ...props }) {
  return /* @__PURE__ */ jsx18("nav", {
    ...props,
    className: clsx16(className, "flex flex-1 items-center gap-4 py-2.5")
  });
}
function NavbarDivider({ className, ...props }) {
  return /* @__PURE__ */ jsx18("div", {
    "aria-hidden": "true",
    ...props,
    className: clsx16(className, "h-6 w-px bg-zinc-950/10 dark:bg-white/10")
  });
}
function NavbarSection({ className, ...props }) {
  const id = useId();
  return /* @__PURE__ */ jsx18("div", {
    id,
    children: /* @__PURE__ */ jsx18("div", {
      ...props,
      className: clsx16(className, "flex items-center gap-3")
    })
  });
}
function NavbarSpacer({ className, ...props }) {
  return /* @__PURE__ */ jsx18("div", {
    "aria-hidden": "true",
    ...props,
    className: clsx16(className, "-ml-4 flex-1")
  });
}
var NavbarItem = forwardRef5(function NavbarItem2({ current, className, children, ...props }, ref) {
  const classes = clsx16("relative flex min-w-0 items-center gap-3 rounded-lg p-2 text-left font-medium text-base/6 text-zinc-950 sm:text-sm/5", "*:data-[slot=icon]:size-6 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:fill-zinc-500 sm:*:data-[slot=icon]:size-5", "*:not-nth-2:last:data-[slot=icon]:ml-auto *:not-nth-2:last:data-[slot=icon]:size-5 sm:*:not-nth-2:last:data-[slot=icon]:size-4", "*:data-[slot=avatar]:-m-0.5 *:data-[slot=avatar]:size-7 sm:*:data-[slot=avatar]:size-6 *:data-[slot=avatar]:[--avatar-radius:var(--radius-md)]", "data-hover:bg-zinc-950/5 data-hover:*:data-[slot=icon]:fill-zinc-950", "data-active:bg-zinc-950/5 data-active:*:data-[slot=icon]:fill-zinc-950", "dark:text-white dark:*:data-[slot=icon]:fill-zinc-400", "dark:data-hover:bg-white/5 dark:data-hover:*:data-[slot=icon]:fill-white", "dark:data-active:bg-white/5 dark:data-active:*:data-[slot=icon]:fill-white");
  return /* @__PURE__ */ jsxs8("span", {
    className: clsx16(className, "relative"),
    children: [
      current && /* @__PURE__ */ jsx18("span", {
        className: "-bottom-2.5 absolute inset-x-2 h-0.5 rounded-full bg-zinc-950 dark:bg-white"
      }),
      "href" in props ? /* @__PURE__ */ jsx18(Link, {
        ...props,
        className: classes,
        "data-current": current ? "true" : undefined,
        ref,
        children: /* @__PURE__ */ jsx18(TouchTarget, {
          children
        })
      }) : /* @__PURE__ */ jsx18(Headless13.Button, {
        ...props,
        className: clsx16("cursor-default", classes),
        "data-current": current ? "true" : undefined,
        ref,
        children: /* @__PURE__ */ jsx18(TouchTarget, {
          children
        })
      })
    ]
  });
});
function NavbarLabel({ className, ...props }) {
  return /* @__PURE__ */ jsx18("span", {
    ...props,
    className: clsx16(className, "truncate")
  });
}

// src/catalyst/pagination.tsx
import clsx17 from "clsx";
import { jsx as jsx19, jsxs as jsxs9, Fragment as Fragment3 } from "react/jsx-runtime";
function Pagination({ "aria-label": ariaLabel = "Page navigation", className, ...props }) {
  return /* @__PURE__ */ jsx19("nav", {
    "aria-label": ariaLabel,
    ...props,
    className: clsx17(className, "flex gap-x-2")
  });
}
function PaginationPrevious({ href = null, className, children = "Previous" }) {
  return /* @__PURE__ */ jsx19("span", {
    className: clsx17(className, "grow basis-0"),
    children: /* @__PURE__ */ jsxs9(Button2, {
      ...href === null ? { disabled: true } : { href },
      plain: true,
      "aria-label": "Previous page",
      children: [
        /* @__PURE__ */ jsx19("svg", {
          className: "stroke-current",
          "data-slot": "icon",
          viewBox: "0 0 16 16",
          fill: "none",
          "aria-hidden": "true",
          children: /* @__PURE__ */ jsx19("path", {
            d: "M2.75 8H13.25M2.75 8L5.25 5.5M2.75 8L5.25 10.5",
            strokeWidth: 1.5,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        children
      ]
    })
  });
}
function PaginationNext({ href = null, className, children = "Next" }) {
  return /* @__PURE__ */ jsx19("span", {
    className: clsx17(className, "flex grow basis-0 justify-end"),
    children: /* @__PURE__ */ jsxs9(Button2, {
      ...href === null ? { disabled: true } : { href },
      plain: true,
      "aria-label": "Next page",
      children: [
        children,
        /* @__PURE__ */ jsx19("svg", {
          className: "stroke-current",
          "data-slot": "icon",
          viewBox: "0 0 16 16",
          fill: "none",
          "aria-hidden": "true",
          children: /* @__PURE__ */ jsx19("path", {
            d: "M13.25 8L2.75 8M13.25 8L10.75 10.5M13.25 8L10.75 5.5",
            strokeWidth: 1.5,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        })
      ]
    })
  });
}
function PaginationList({ className, ...props }) {
  return /* @__PURE__ */ jsx19("span", {
    ...props,
    className: clsx17(className, "hidden items-baseline gap-x-2 sm:flex")
  });
}
function PaginationPage({ href, className, current = false, children }) {
  return /* @__PURE__ */ jsx19(Button2, {
    href,
    plain: true,
    "aria-label": `Page ${children}`,
    "aria-current": current ? "page" : undefined,
    className: clsx17(className, "before:-inset-px min-w-[2.25rem] before:absolute before:rounded-lg", current && "before:bg-zinc-950/5 dark:before:bg-white/10"),
    children: /* @__PURE__ */ jsx19("span", {
      className: "-mx-0.5",
      children
    })
  });
}
function PaginationGap({ className, children = /* @__PURE__ */ jsx19(Fragment3, {
  children: "…"
}), ...props }) {
  return /* @__PURE__ */ jsx19("span", {
    "aria-hidden": "true",
    ...props,
    className: clsx17(className, "w-[2.25rem] select-none text-center font-semibold text-sm/6 text-zinc-950 dark:text-white"),
    children
  });
}

// src/catalyst/radio.tsx
import * as Headless14 from "@headlessui/react";
import clsx18 from "clsx";
import { jsx as jsx20 } from "react/jsx-runtime";
function RadioGroup2({ className, ...props }) {
  return /* @__PURE__ */ jsx20(Headless14.RadioGroup, {
    "data-slot": "control",
    ...props,
    className: clsx18(className, "space-y-3 **:data-[slot=label]:font-normal", "has-data-[slot=description]:space-y-6 has-data-[slot=description]:**:data-[slot=label]:font-medium")
  });
}
function RadioField({ className, ...props }) {
  return /* @__PURE__ */ jsx20(Headless14.Field, {
    "data-slot": "field",
    ...props,
    className: clsx18(className, "grid grid-cols-[1.125rem_1fr] gap-x-4 gap-y-1 sm:grid-cols-[1rem_1fr]", "*:data-[slot=control]:col-start-1 *:data-[slot=control]:row-start-1 *:data-[slot=control]:mt-0.75 sm:*:data-[slot=control]:mt-1", "*:data-[slot=label]:col-start-2 *:data-[slot=label]:row-start-1", "*:data-[slot=description]:col-start-2 *:data-[slot=description]:row-start-2", "has-data-[slot=description]:**:data-[slot=label]:font-medium")
  });
}
var base2 = [
  "relative isolate flex size-[1.1875rem] shrink-0 rounded-full sm:size-[1.0625rem]",
  "before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-white before:shadow-sm",
  "group-data-checked:before:bg-(--radio-checked-bg)",
  "dark:before:hidden",
  "dark:bg-white/5 dark:group-data-checked:bg-(--radio-checked-bg)",
  "border border-zinc-950/15 group-data-checked:border-transparent group-data-hover:group-data-checked:border-transparent group-data-hover:border-zinc-950/30 group-data-checked:bg-(--radio-checked-border)",
  "dark:border-white/15 dark:group-data-checked:border-white/5 dark:group-data-hover:group-data-checked:border-white/5 dark:group-data-hover:border-white/30",
  "after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_1px_--theme(--color-white/15%)]",
  "dark:after:-inset-px dark:after:hidden dark:after:rounded-full dark:group-data-checked:after:block",
  "[--radio-indicator:transparent] group-data-checked:[--radio-indicator:var(--radio-checked-indicator)] group-data-hover:group-data-checked:[--radio-indicator:var(--radio-checked-indicator)] group-data-hover:[--radio-indicator:var(--color-zinc-900)]/10",
  "dark:group-data-hover:group-data-checked:[--radio-indicator:var(--radio-checked-indicator)] dark:group-data-hover:[--radio-indicator:var(--color-zinc-700)]",
  "group-data-focus:outline group-data-focus:outline-2 group-data-focus:outline-offset-2 group-data-focus:outline-blue-500",
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
  return /* @__PURE__ */ jsx20(Headless14.Radio, {
    "data-slot": "control",
    ...props,
    className: clsx18(className, "group inline-flex focus:outline-hidden"),
    children: /* @__PURE__ */ jsx20("span", {
      className: clsx18([base2, colors3[color]]),
      children: /* @__PURE__ */ jsx20("span", {
        className: clsx18("size-full rounded-full border-[4.5px] border-transparent bg-(--radio-indicator) bg-clip-padding", "forced-colors:border-[Canvas] forced-colors:group-data-checked:border-[Highlight]")
      })
    })
  });
}

// src/catalyst/select.tsx
import * as Headless15 from "@headlessui/react";
import clsx19 from "clsx";
import { forwardRef as forwardRef6 } from "react";
import { jsx as jsx21, jsxs as jsxs10 } from "react/jsx-runtime";
var Select2 = forwardRef6(function Select3({ className, multiple, ...props }, ref) {
  const headlessRef = ref;
  return /* @__PURE__ */ jsxs10("span", {
    "data-slot": "control",
    className: clsx19([
      className,
      "group relative block w-full",
      "before:absolute before:inset-px before:rounded-[calc(var(--radius-lg)-1px)] before:bg-white before:shadow-sm",
      "dark:before:hidden",
      "after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-transparent after:ring-inset has-data-focus:after:ring-2 has-data-focus:after:ring-blue-500",
      "has-data-disabled:opacity-50 has-data-disabled:before:bg-zinc-950/5 has-data-disabled:before:shadow-none"
    ]),
    children: [
      /* @__PURE__ */ jsx21(Headless15.Select, {
        ref: headlessRef,
        multiple,
        ...props,
        className: clsx19([
          "relative block w-full appearance-none rounded-lg py-[calc(--spacing(2.5)-1px)] sm:py-[calc(--spacing(1.5)-1px)]",
          multiple ? "px-[calc(--spacing(3.5)-1px)] sm:px-[calc(--spacing(3)-1px)]" : "pr-[calc(--spacing(10)-1px)] pl-[calc(--spacing(3.5)-1px)] sm:pr-[calc(--spacing(9)-1px)] sm:pl-[calc(--spacing(3)-1px)]",
          "[&_optgroup]:font-semibold",
          "text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white dark:*:text-white",
          "border border-zinc-950/10 data-hover:border-zinc-950/20 dark:border-white/10 dark:data-hover:border-white/20",
          "bg-transparent dark:bg-white/5 dark:*:bg-zinc-800",
          "focus:outline-hidden",
          "data-invalid:data-hover:border-red-500 data-invalid:border-red-500 dark:data-invalid:data-hover:border-red-600 dark:data-invalid:border-red-600",
          "data-disabled:border-zinc-950/20 data-disabled:opacity-100 dark:data-hover:data-disabled:border-white/15 dark:data-disabled:border-white/15 dark:data-disabled:bg-white/[2.5%]"
        ])
      }),
      !multiple && /* @__PURE__ */ jsx21("span", {
        className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",
        children: /* @__PURE__ */ jsxs10("svg", {
          className: "size-5 stroke-zinc-500 group-has-data-disabled:stroke-zinc-600 sm:size-4 dark:stroke-zinc-400 forced-colors:stroke-[CanvasText]",
          viewBox: "0 0 16 16",
          "aria-hidden": "true",
          fill: "none",
          children: [
            /* @__PURE__ */ jsx21("path", {
              d: "M5.75 10.75L8 13L10.25 10.75",
              strokeWidth: 1.5,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }),
            /* @__PURE__ */ jsx21("path", {
              d: "M10.25 5.25L8 3L5.75 5.25",
              strokeWidth: 1.5,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })
          ]
        })
      })
    ]
  });
});
// src/catalyst/sidebar-layout.tsx
import * as Headless16 from "@headlessui/react";
import clsx20 from "clsx";
import { useState as useState2 } from "react";
import { jsx as jsx22, jsxs as jsxs11 } from "react/jsx-runtime";
function OpenMenuIcon() {
  return /* @__PURE__ */ jsx22("svg", {
    "data-slot": "icon",
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    children: /* @__PURE__ */ jsx22("path", {
      d: "M2 6.75C2 6.33579 2.33579 6 2.75 6H17.25C17.6642 6 18 6.33579 18 6.75C18 7.16421 17.6642 7.5 17.25 7.5H2.75C2.33579 7.5 2 7.16421 2 6.75ZM2 13.25C2 12.8358 2.33579 12.5 2.75 12.5H17.25C17.6642 12.5 18 12.8358 18 13.25C18 13.6642 17.6642 14 17.25 14H2.75C2.33579 14 2 13.6642 2 13.25Z"
    })
  });
}
function CloseMenuIcon() {
  return /* @__PURE__ */ jsx22("svg", {
    "data-slot": "icon",
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    children: /* @__PURE__ */ jsx22("path", {
      d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"
    })
  });
}
function MobileSidebar({ open, close, className, children }) {
  return /* @__PURE__ */ jsxs11(Headless16.Dialog, {
    open,
    onClose: close,
    className: "lg:hidden",
    children: [
      /* @__PURE__ */ jsx22(Headless16.DialogBackdrop, {
        transition: true,
        className: "fixed inset-0 bg-black/30 transition data-closed:opacity-0 data-enter:duration-300 data-leave:duration-200 data-enter:ease-out data-leave:ease-in"
      }),
      /* @__PURE__ */ jsx22(Headless16.DialogPanel, {
        transition: true,
        className: "data-closed:-translate-x-full fixed inset-y-0 w-full max-w-80 p-2 transition duration-300 ease-in-out",
        children: /* @__PURE__ */ jsxs11("div", {
          className: clsx20([className ?? "bg-white dark:bg-zinc-900", "flex h-full flex-col rounded-lg shadow-xs ring-1 ring-zinc-950/5 dark:ring-white/10"]),
          children: [
            /* @__PURE__ */ jsx22("div", {
              className: "-mb-3 px-4 pt-3",
              children: /* @__PURE__ */ jsx22(Headless16.CloseButton, {
                as: NavbarItem,
                "aria-label": "Close navigation",
                children: /* @__PURE__ */ jsx22(CloseMenuIcon, {})
              })
            }),
            children
          ]
        })
      })
    ]
  });
}
function SidebarLayout({ navbar, sidebar, className, children }) {
  const [showSidebar, setShowSidebar] = useState2(false);
  return /* @__PURE__ */ jsxs11("div", {
    className: clsx20([children && "min-h-svh", className ?? "bg-white lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950", "relative isolate flex w-full flex-col"]),
    children: [
      /* @__PURE__ */ jsx22("div", {
        className: "fixed inset-y-0 left-0 w-64 max-lg:hidden",
        children: sidebar
      }),
      /* @__PURE__ */ jsx22(MobileSidebar, {
        open: showSidebar,
        close: () => setShowSidebar(false),
        children: sidebar
      }),
      /* @__PURE__ */ jsxs11("header", {
        className: "flex items-center px-4 lg:hidden",
        children: [
          /* @__PURE__ */ jsx22("div", {
            className: "py-2.5",
            children: /* @__PURE__ */ jsx22(NavbarItem, {
              onClick: () => setShowSidebar(true),
              "aria-label": "Open navigation",
              children: /* @__PURE__ */ jsx22(OpenMenuIcon, {})
            })
          }),
          /* @__PURE__ */ jsx22("div", {
            className: "min-w-0 flex-1",
            children: navbar
          })
        ]
      }),
      /* @__PURE__ */ jsx22("main", {
        className: "flex flex-1 flex-col pb-2 lg:min-w-0 lg:pt-2 lg:pr-2 lg:pl-64",
        children: /* @__PURE__ */ jsx22("div", {
          className: "grow p-6 lg:rounded-lg lg:bg-white lg:p-10 lg:shadow-xs lg:ring-1 lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10",
          children: /* @__PURE__ */ jsx22("div", {
            className: "mx-auto max-w-6xl",
            children
          })
        })
      })
    ]
  });
}
// src/catalyst/sidebar.tsx
import * as Headless17 from "@headlessui/react";
import clsx21 from "clsx";
import { forwardRef as forwardRef7, useId as useId2 } from "react";
import { jsx as jsx23, jsxs as jsxs12 } from "react/jsx-runtime";
function Sidebar({ className, ...props }) {
  return /* @__PURE__ */ jsx23("nav", {
    ...props,
    className: clsx21(className, "flex h-full min-h-0 flex-col")
  });
}
function SidebarHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx23("div", {
    ...props,
    className: clsx21(className, "flex flex-col border-zinc-950/5 border-b p-4 dark:border-white/5 [&>[data-slot=section]+[data-slot=section]]:mt-2.5")
  });
}
function SidebarBody({ className, ...props }) {
  return /* @__PURE__ */ jsx23("div", {
    ...props,
    className: clsx21(className, "flex flex-1 flex-col overflow-y-auto p-4 [&>[data-slot=section]+[data-slot=section]]:mt-8")
  });
}
function SidebarFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx23("div", {
    ...props,
    className: clsx21(className, "flex flex-col border-zinc-950/5 border-t p-4 dark:border-white/5 [&>[data-slot=section]+[data-slot=section]]:mt-2.5")
  });
}
function SidebarSection({ className, ...props }) {
  const id = useId2();
  return /* @__PURE__ */ jsx23("div", {
    id,
    children: /* @__PURE__ */ jsx23("div", {
      ...props,
      "data-slot": "section",
      className: clsx21(className, "flex flex-col gap-0.5")
    })
  });
}
function SidebarDivider({ className, ...props }) {
  return /* @__PURE__ */ jsx23("hr", {
    ...props,
    className: clsx21(className, "lg:-mx-4 my-4 border-zinc-950/5 border-t dark:border-white/5")
  });
}
function SidebarSpacer({ className, ...props }) {
  return /* @__PURE__ */ jsx23("div", {
    "aria-hidden": "true",
    ...props,
    className: clsx21(className, "mt-8 flex-1")
  });
}
function SidebarHeading({ className, ...props }) {
  return /* @__PURE__ */ jsx23("h3", {
    ...props,
    className: clsx21(className, "mb-1 px-2 font-medium text-xs/6 text-zinc-500 dark:text-zinc-400")
  });
}
var SidebarItem = forwardRef7(function SidebarItem2({ current, className, children, ...props }, ref) {
  const classes = clsx21("flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-left font-medium text-base/6 text-zinc-950 sm:py-2 sm:text-sm/5", "*:data-[slot=icon]:size-6 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:fill-zinc-500 sm:*:data-[slot=icon]:size-5", "*:last:data-[slot=icon]:ml-auto *:last:data-[slot=icon]:size-5 sm:*:last:data-[slot=icon]:size-4", "*:data-[slot=avatar]:-m-0.5 *:data-[slot=avatar]:size-7 sm:*:data-[slot=avatar]:size-6", "data-hover:bg-zinc-950/5 data-hover:*:data-[slot=icon]:fill-zinc-950", "data-active:bg-zinc-950/5 data-active:*:data-[slot=icon]:fill-zinc-950", "data-current:*:data-[slot=icon]:fill-zinc-950", "dark:text-white dark:*:data-[slot=icon]:fill-zinc-400", "dark:data-hover:bg-white/5 dark:data-hover:*:data-[slot=icon]:fill-white", "dark:data-active:bg-white/5 dark:data-active:*:data-[slot=icon]:fill-white", "dark:data-current:*:data-[slot=icon]:fill-white");
  return /* @__PURE__ */ jsxs12("span", {
    className: clsx21(className, "relative"),
    children: [
      current && /* @__PURE__ */ jsx23("span", {
        className: "-left-4 absolute inset-y-2 w-0.5 rounded-full bg-zinc-950 dark:bg-white"
      }),
      "href" in props ? /* @__PURE__ */ jsx23(Headless17.CloseButton, {
        as: Link,
        ...props,
        className: classes,
        "data-current": current ? "true" : undefined,
        ref,
        children: /* @__PURE__ */ jsx23(TouchTarget, {
          children
        })
      }) : /* @__PURE__ */ jsx23(Headless17.Button, {
        ...props,
        className: clsx21("cursor-default", classes),
        "data-current": current ? "true" : undefined,
        ref,
        children: /* @__PURE__ */ jsx23(TouchTarget, {
          children
        })
      })
    ]
  });
});
function SidebarLabel({ className, ...props }) {
  return /* @__PURE__ */ jsx23("span", {
    ...props,
    className: clsx21(className, "truncate")
  });
}

// src/catalyst/stacked-layout.tsx
import * as Headless18 from "@headlessui/react";
import clsx22 from "clsx";
import { useState as useState3 } from "react";
import { jsx as jsx24, jsxs as jsxs13 } from "react/jsx-runtime";
function OpenMenuIcon2() {
  return /* @__PURE__ */ jsx24("svg", {
    "data-slot": "icon",
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    children: /* @__PURE__ */ jsx24("path", {
      d: "M2 6.75C2 6.33579 2.33579 6 2.75 6H17.25C17.6642 6 18 6.33579 18 6.75C18 7.16421 17.6642 7.5 17.25 7.5H2.75C2.33579 7.5 2 7.16421 2 6.75ZM2 13.25C2 12.8358 2.33579 12.5 2.75 12.5H17.25C17.6642 12.5 18 12.8358 18 13.25C18 13.6642 17.6642 14 17.25 14H2.75C2.33579 14 2 13.6642 2 13.25Z"
    })
  });
}
function CloseMenuIcon2() {
  return /* @__PURE__ */ jsx24("svg", {
    "data-slot": "icon",
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    children: /* @__PURE__ */ jsx24("path", {
      d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"
    })
  });
}
function MobileSidebar2({ open, close, className, children }) {
  return /* @__PURE__ */ jsxs13(Headless18.Dialog, {
    open,
    onClose: close,
    className: "lg:hidden",
    children: [
      /* @__PURE__ */ jsx24(Headless18.DialogBackdrop, {
        transition: true,
        className: "fixed inset-0 bg-black/30 transition data-closed:opacity-0 data-enter:duration-300 data-leave:duration-200 data-enter:ease-out data-leave:ease-in"
      }),
      /* @__PURE__ */ jsx24(Headless18.DialogPanel, {
        transition: true,
        className: "data-closed:-translate-x-full fixed inset-y-0 w-full max-w-80 p-2 transition duration-300 ease-in-out",
        children: /* @__PURE__ */ jsxs13("div", {
          className: clsx22([className ?? "bg-white dark:bg-zinc-900", "flex h-full flex-col rounded-lg shadow-xs ring-1 ring-zinc-950/5 dark:ring-white/10"]),
          children: [
            /* @__PURE__ */ jsx24("div", {
              className: "-mb-3 px-4 pt-3",
              children: /* @__PURE__ */ jsx24(Headless18.CloseButton, {
                as: NavbarItem,
                "aria-label": "Close navigation",
                children: /* @__PURE__ */ jsx24(CloseMenuIcon2, {})
              })
            }),
            children
          ]
        })
      })
    ]
  });
}
function StackedLayout({ navbar, sidebar, className, children }) {
  const [showSidebar, setShowSidebar] = useState3(false);
  return /* @__PURE__ */ jsxs13("div", {
    className: clsx22([children && "min-h-svh", className ?? "bg-white lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950", "relative isolate flex w-full flex-col"]),
    children: [
      /* @__PURE__ */ jsx24(MobileSidebar2, {
        open: showSidebar,
        close: () => setShowSidebar(false),
        children: sidebar
      }),
      /* @__PURE__ */ jsxs13("header", {
        className: "flex items-center px-4",
        children: [
          /* @__PURE__ */ jsx24("div", {
            className: "py-2.5 lg:hidden",
            children: /* @__PURE__ */ jsx24(NavbarItem, {
              onClick: () => setShowSidebar(true),
              "aria-label": "Open navigation",
              children: /* @__PURE__ */ jsx24(OpenMenuIcon2, {})
            })
          }),
          /* @__PURE__ */ jsx24("div", {
            className: "min-w-0 flex-1",
            children: navbar
          })
        ]
      }),
      children && /* @__PURE__ */ jsx24("main", {
        className: "flex flex-1 flex-col pb-2 lg:px-2",
        children: /* @__PURE__ */ jsx24("div", {
          className: clsx22(["grow p-6 lg:rounded-lg lg:bg-white lg:p-10 lg:shadow-xs lg:ring-1 lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10"]),
          children: /* @__PURE__ */ jsx24("div", {
            className: "mx-auto max-w-6xl",
            children
          })
        })
      })
    ]
  });
}
// src/catalyst/switch.tsx
import * as Headless19 from "@headlessui/react";
import clsx23 from "clsx";
import { jsx as jsx25 } from "react/jsx-runtime";
function SwitchGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx25("div", {
    "data-slot": "control",
    ...props,
    className: clsx23(className, "space-y-3 **:data-[slot=label]:font-normal", "has-data-[slot=description]:space-y-6 has-data-[slot=description]:**:data-[slot=label]:font-medium")
  });
}
function SwitchField({ className, ...props }) {
  return /* @__PURE__ */ jsx25(Headless19.Field, {
    "data-slot": "field",
    ...props,
    className: clsx23(className, "grid grid-cols-[1fr_auto] gap-x-8 gap-y-1 sm:grid-cols-[1fr_auto]", "*:data-[slot=control]:col-start-2 *:data-[slot=control]:self-start sm:*:data-[slot=control]:mt-0.5", "*:data-[slot=label]:col-start-1 *:data-[slot=label]:row-start-1", "*:data-[slot=description]:col-start-1 *:data-[slot=description]:row-start-2", "has-data-[slot=description]:**:data-[slot=label]:font-medium")
  });
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
  return /* @__PURE__ */ jsx25(Headless19.Switch, {
    "data-slot": "control",
    ...props,
    className: clsx23(className, "group relative isolate inline-flex h-6 w-10 cursor-default rounded-full p-[3px] sm:h-5 sm:w-8", "transition duration-0 ease-in-out data-changing:duration-200", "forced-colors:outline forced-colors:[--switch-bg:Highlight] dark:forced-colors:[--switch-bg:Highlight]", "bg-zinc-200 ring-1 ring-black/5 ring-inset dark:bg-white/5 dark:ring-white/15", "data-checked:bg-(--switch-bg) data-checked:ring-(--switch-bg-ring) dark:data-checked:bg-(--switch-bg) dark:data-checked:ring-(--switch-bg-ring)", "focus:outline-hidden data-focus:outline-2 data-focus:outline-blue-500 data-focus:outline-offset-2", "data-hover:data-checked:ring-(--switch-bg-ring) data-hover:ring-black/15", "dark:data-hover:data-checked:ring-(--switch-bg-ring) dark:data-hover:ring-white/25", "data-disabled:data-checked:bg-zinc-200 data-disabled:data-checked:ring-black/5 data-disabled:bg-zinc-200 data-disabled:opacity-50", "dark:data-disabled:data-checked:bg-white/15 dark:data-disabled:data-checked:ring-white/15 dark:data-disabled:bg-white/15", colors4[color]),
    children: /* @__PURE__ */ jsx25("span", {
      "aria-hidden": "true",
      className: clsx23("pointer-events-none relative inline-block size-[1.125rem] rounded-full sm:size-3.5", "translate-x-0 transition duration-200 ease-in-out", "border border-transparent", "bg-white shadow-sm ring-1 ring-black/5", "group-data-checked:bg-(--switch) group-data-checked:shadow-(--switch-shadow) group-data-checked:ring-(--switch-ring)", "group-data-checked:translate-x-4 sm:group-data-checked:translate-x-3", "group-data-checked:group-data-disabled:bg-white group-data-checked:group-data-disabled:shadow-sm group-data-checked:group-data-disabled:ring-black/5")
    })
  });
}

// src/catalyst/table.tsx
import clsx24 from "clsx";
import { createContext, useContext, useState as useState4 } from "react";
import { jsx as jsx26, jsxs as jsxs14 } from "react/jsx-runtime";
var TableContext = createContext({
  bleed: false,
  dense: false,
  grid: false,
  striped: false
});
function Table({ bleed = false, dense = false, grid = false, striped = false, className, children, ...props }) {
  return /* @__PURE__ */ jsx26(TableContext.Provider, {
    value: { bleed, dense, grid, striped },
    children: /* @__PURE__ */ jsx26("div", {
      className: "flow-root",
      children: /* @__PURE__ */ jsx26("div", {
        ...props,
        className: clsx24(className, "-mx-(--gutter) overflow-x-auto whitespace-nowrap"),
        children: /* @__PURE__ */ jsx26("div", {
          className: clsx24("inline-block min-w-full align-middle", !bleed && "sm:px-(--gutter)"),
          children: /* @__PURE__ */ jsx26("table", {
            className: "min-w-full text-left text-sm/6 text-zinc-950 dark:text-white",
            children
          })
        })
      })
    })
  });
}
function TableHead({ className, ...props }) {
  return /* @__PURE__ */ jsx26("thead", {
    ...props,
    className: clsx24(className, "text-zinc-500 dark:text-zinc-400")
  });
}
function TableBody(props) {
  return /* @__PURE__ */ jsx26("tbody", {
    ...props
  });
}
var TableRowContext = createContext({
  href: undefined,
  target: undefined,
  title: undefined
});
function TableRow({ href, target, title, className, ...props }) {
  const { striped } = useContext(TableContext);
  return /* @__PURE__ */ jsx26(TableRowContext.Provider, {
    value: { href, target, title },
    children: /* @__PURE__ */ jsx26("tr", {
      ...props,
      className: clsx24(className, href && "has-[[data-row-link][data-focus]]:-outline-offset-2 has-[[data-row-link][data-focus]]:outline-2 has-[[data-row-link][data-focus]]:outline-blue-500 dark:focus-within:bg-white/[2.5%]", striped && "even:bg-zinc-950/[2.5%] dark:even:bg-white/[2.5%]", href && striped && "hover:bg-zinc-950/5 dark:hover:bg-white/5", href && !striped && "hover:bg-zinc-950/[2.5%] dark:hover:bg-white/[2.5%]")
    })
  });
}
function TableHeader({ className, ...props }) {
  const { bleed, grid } = useContext(TableContext);
  return /* @__PURE__ */ jsx26("th", {
    ...props,
    className: clsx24(className, "border-b border-b-zinc-950/10 px-4 py-2 font-medium first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) dark:border-b-white/10", grid && "border-l border-l-zinc-950/5 first:border-l-0 dark:border-l-white/5", !bleed && "sm:last:pr-1 sm:first:pl-1")
  });
}
function TableCell({ className, children, ...props }) {
  const { bleed, dense, grid, striped } = useContext(TableContext);
  const { href, target, title } = useContext(TableRowContext);
  const [cellRef, setCellRef] = useState4(null);
  return /* @__PURE__ */ jsxs14("td", {
    ref: href ? setCellRef : undefined,
    ...props,
    className: clsx24(className, "relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2))", !striped && "border-zinc-950/5 border-b dark:border-white/5", grid && "border-l border-l-zinc-950/5 first:border-l-0 dark:border-l-white/5", dense ? "py-2.5" : "py-4", !bleed && "sm:last:pr-1 sm:first:pl-1"),
    children: [
      href && /* @__PURE__ */ jsx26(Link, {
        "data-row-link": true,
        href,
        target,
        "aria-label": title,
        tabIndex: cellRef?.previousElementSibling === null ? 0 : -1,
        className: "absolute inset-0 focus:outline-hidden"
      }),
      children
    ]
  });
}

// src/catalyst/textarea.tsx
import * as Headless20 from "@headlessui/react";
import clsx25 from "clsx";
import { forwardRef as forwardRef8 } from "react";
import { jsx as jsx27 } from "react/jsx-runtime";
var Textarea2 = forwardRef8(function Textarea3({ className, resizable = true, ...props }, ref) {
  return /* @__PURE__ */ jsx27("span", {
    "data-slot": "control",
    className: clsx25([
      className,
      "relative block w-full",
      "before:absolute before:inset-px before:rounded-[calc(var(--radius-lg)-1px)] before:bg-white before:shadow-sm",
      "dark:before:hidden",
      "after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-transparent after:ring-inset sm:focus-within:after:ring-2 sm:focus-within:after:ring-blue-500",
      "has-data-disabled:opacity-50 has-data-disabled:before:bg-zinc-950/5 has-data-disabled:before:shadow-none"
    ]),
    children: /* @__PURE__ */ jsx27(Headless20.Textarea, {
      ref,
      ...props,
      className: clsx25([
        "relative block h-full w-full appearance-none rounded-lg px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)]",
        "text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white",
        "border border-zinc-950/10 data-hover:border-zinc-950/20 dark:border-white/10 dark:data-hover:border-white/20",
        "bg-transparent dark:bg-white/5",
        "focus:outline-hidden",
        "data-invalid:data-hover:border-red-500 data-invalid:border-red-500 dark:data-invalid:data-hover:border-red-600 dark:data-invalid:border-red-600",
        "disabled:border-zinc-950/20 dark:disabled:border-white/15 dark:disabled:bg-white/[2.5%] dark:data-hover:disabled:border-white/15",
        resizable ? "resize-y" : "resize-none"
      ])
    })
  });
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
var Checkbox3 = Object.assign(Checkbox2, {
  Field: CheckboxField,
  Group: CheckboxGroup
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
var Field6 = Object.assign(Field3, {
  Legend: Legend2,
  Group: FieldGroup,
  Set: Fieldset2,
  Label: Label3,
  Description: Description5,
  ErrorMessage
});
var Heading2 = Object.assign(Heading, {
  Sub: Subheading
});
var Input4 = Object.assign(Input2, {
  Group: InputGroup
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
var Radio3 = Object.assign(Radio2, {
  Field: RadioField,
  Group: RadioGroup2
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
var Switch3 = Object.assign(Switch2, {
  Field: SwitchField,
  Group: SwitchGroup
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
export {
  Textarea2 as Textarea,
  Text2 as Text,
  Table2 as Table,
  Switch3 as Switch,
  StackedLayout,
  SidebarLayout,
  Sidebar2 as Sidebar,
  Select2 as Select,
  Radio3 as Radio,
  Pagination2 as Pagination,
  Navbar2 as Navbar,
  Listbox3 as Listbox,
  Link,
  Label3 as Label,
  Input4 as Input,
  Heading2 as Heading,
  Field6 as Field,
  ErrorMessage,
  Dropdown2 as Dropdown,
  Divider,
  Dialog6 as Dialog,
  DescriptionList2 as DescriptionList,
  Combobox3 as Combobox,
  Checkbox3 as Checkbox,
  Button8 as Button,
  Badge2 as Badge,
  Avatar2 as Avatar,
  AuthLayout,
  Alert2 as Alert
};

//# debugId=38AC00A84038DAED64756E2164756E21
