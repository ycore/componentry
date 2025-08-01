import { j as e } from "./jsx-runtime--oOP9f8K.js";
import n, { clsx as Js } from "clsx";
import { Accordion as Re, Slot as U, AlertDialog as J, AspectRatio as Ks, Avatar as ra, Checkbox as Da, Collapsible as ia, Dialog as y, ContextMenu as S, DropdownMenu as k, HoverCard as bt, Label as Ys, Menubar as C, NavigationMenu as te, Popover as Ee, Progress as Ia, RadioGroup as Yt, ScrollArea as _e, Select as D, Separator as qs, Tooltip as ve, Slider as dt, Switch as za, Tabs as Nt, Toggle as Zs, ToggleGroup as Ea } from "radix-ui";
import u from "react";
import { S as L, s as p, c as h } from "./lucide-sprites-CwrWK0ek.js";
import { cva as Ne } from "class-variance-authority";
import { Command as he } from "cmdk";
import { useTheme as Oa } from "next-themes";
import { Toaster as Xs, toast as K } from "sonner";
import { Form as Qs } from "react-router";
import { iconNames as Ma } from "./shadcn-ui/types/lucide-sprites.js";
import { L as b, b as en, T as tn } from "./ThemeSwitch-C54MZyox.js";
import { a as La } from "./LazyImage-BIq5ArGy.js";
import { S as xl } from "./LazyImage-BIq5ArGy.js";
function Ga({ ...t }) {
  return /* @__PURE__ */ e.jsx(Re.Root, { "data-slot": "accordion", ...t });
}
function ut({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(Re.Item, { "data-slot": "accordion-item", className: n("border-b last:border-b-0", t), ...a });
}
function xt({ className: t, children: a, ...s }) {
  return /* @__PURE__ */ e.jsx(Re.Header, { className: "flex", children: /* @__PURE__ */ e.jsxs(
    Re.Trigger,
    {
      "data-slot": "accordion-trigger",
      className: n(
        "flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left font-medium text-sm outline-none transition-all hover:underline focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        t
      ),
      ...s,
      children: [
        a,
        /* @__PURE__ */ e.jsx(L, { id: "ChevronDown", url: p, className: "pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200" })
      ]
    }
  ) });
}
function mt({ className: t, children: a, ...s }) {
  return /* @__PURE__ */ e.jsx(Re.Content, { "data-slot": "accordion-content", className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down", ...s, children: /* @__PURE__ */ e.jsx("div", { className: n("pt-0 pb-4", t), children: a }) });
}
const Ue = Ne(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function l({
  className: t,
  variant: a,
  size: s,
  asChild: r = !1,
  ...o
}) {
  const d = r ? U.Slot : "button";
  return /* @__PURE__ */ e.jsx(d, { "data-slot": "button", className: n(Ue({ variant: a, size: s, className: t })), ...o });
}
function Ha({ ...t }) {
  return /* @__PURE__ */ e.jsx(J.Root, { "data-slot": "alert-dialog", ...t });
}
function Va({ ...t }) {
  return /* @__PURE__ */ e.jsx(J.Trigger, { "data-slot": "alert-dialog-trigger", ...t });
}
function Wa({ ...t }) {
  return /* @__PURE__ */ e.jsx(J.Portal, { "data-slot": "alert-dialog-portal", ...t });
}
function Ua({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(
    J.Overlay,
    {
      "data-slot": "alert-dialog-overlay",
      className: n("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=open]:animate-in", t),
      ...a
    }
  );
}
function Ja({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsxs(Wa, { children: [
    /* @__PURE__ */ e.jsx(Ua, {}),
    /* @__PURE__ */ e.jsx(
      J.Content,
      {
        "data-slot": "alert-dialog-content",
        className: n(
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 data-[state=closed]:animate-out data-[state=open]:animate-in sm:max-w-lg",
          t
        ),
        ...a
      }
    )
  ] });
}
function Ka({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx("div", { "data-slot": "alert-dialog-header", className: n("flex flex-col gap-2 text-center sm:text-left", t), ...a });
}
function Ya({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx("div", { "data-slot": "alert-dialog-footer", className: n("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", t), ...a });
}
function qa({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(J.Title, { "data-slot": "alert-dialog-title", className: n("font-semibold text-lg", t), ...a });
}
function Za({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(J.Description, { "data-slot": "alert-dialog-description", className: n("text-muted-foreground text-sm", t), ...a });
}
function Xa({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(J.Action, { className: n(Ue(), t), ...a });
}
function Qa({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(J.Cancel, { className: n(Ue({ variant: "outline" }), t), ...a });
}
const an = Ne(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive: "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Pe({ className: t, variant: a, ...s }) {
  return /* @__PURE__ */ e.jsx("div", { "data-slot": "alert", role: "alert", className: n(an({ variant: a }), t), ...s });
}
function Fe({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx("div", { "data-slot": "alert-title", className: n("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", t), ...a });
}
function vt({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx("div", { "data-slot": "alert-description", className: n("col-start-2 grid justify-items-start gap-1 text-muted-foreground text-sm [&_p]:leading-relaxed", t), ...a });
}
function sn({ ...t }) {
  return /* @__PURE__ */ e.jsx(Ks.Root, { "data-slot": "aspect-ratio", ...t });
}
function le({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(ra.Root, { "data-slot": "avatar", className: n("relative flex size-8 shrink-0 overflow-hidden rounded-full", t), ...a });
}
function de({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(ra.Image, { "data-slot": "avatar-image", className: n("aspect-square size-full", t), ...a });
}
function ce({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(ra.Fallback, { "data-slot": "avatar-fallback", className: n("flex size-full items-center justify-center rounded-full bg-muted", t), ...a });
}
const es = Ne(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function _({ className: t, variant: a, asChild: s = !1, ...r }) {
  const o = s ? U.Slot : "span";
  return /* @__PURE__ */ e.jsx(o, { "data-slot": "badge", className: n(es({ variant: a }), t), ...r });
}
const ts = h(p);
function ye({ ...t }) {
  return /* @__PURE__ */ e.jsx("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...t });
}
function Se({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx("ol", { "data-slot": "breadcrumb-list", className: n("flex flex-wrap items-center gap-1.5 break-words text-muted-foreground text-sm sm:gap-2.5", t), ...a });
}
function N({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx("li", { "data-slot": "breadcrumb-item", className: n("inline-flex items-center gap-1.5", t), ...a });
}
function E({
  asChild: t,
  className: a,
  ...s
}) {
  const r = t ? U.Slot : "a";
  return /* @__PURE__ */ e.jsx(r, { "data-slot": "breadcrumb-link", className: n("transition-colors hover:text-foreground", a), ...s });
}
function ke({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx("span", { "data-slot": "breadcrumb-page", role: "link", "aria-disabled": "true", "aria-current": "page", className: n("font-normal text-foreground", t), ...a });
}
function B({ children: t, className: a, ...s }) {
  return /* @__PURE__ */ e.jsx("li", { "data-slot": "breadcrumb-separator", role: "presentation", "aria-hidden": "true", className: n("[&>svg]:size-3.5", a), ...s, children: t ?? /* @__PURE__ */ e.jsx(ts, { id: "ChevronRight" }) });
}
function oa({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsxs("span", { "data-slot": "breadcrumb-ellipsis", role: "presentation", "aria-hidden": "true", className: n("flex size-9 items-center justify-center", t), ...a, children: [
    /* @__PURE__ */ e.jsx(ts, { id: "Ellipsis", className: "size-4" }),
    /* @__PURE__ */ e.jsx("span", { className: "sr-only", children: "More" })
  ] });
}
function Oe({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx("div", { "data-slot": "card", className: n("flex flex-col gap-6 rounded-xl border bg-card py-6 text-card-foreground shadow-sm", t), ...a });
}
function Le({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      "data-slot": "card-header",
      className: n("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", t),
      ...a
    }
  );
}
function Ge({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx("div", { "data-slot": "card-title", className: n("font-semibold leading-none", t), ...a });
}
function He({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx("div", { "data-slot": "card-description", className: n("text-muted-foreground text-sm", t), ...a });
}
function as({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx("div", { "data-slot": "card-action", className: n("col-start-2 row-span-2 row-start-1 self-start justify-self-end", t), ...a });
}
function Ve({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx("div", { "data-slot": "card-content", className: n("px-6", t), ...a });
}
function We({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx("div", { "data-slot": "card-footer", className: n("flex items-center px-6 [.border-t]:pt-6", t), ...a });
}
function H({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(
    Da.Root,
    {
      "data-slot": "checkbox",
      className: n(
        "peer size-4 shrink-0 rounded-[4px] border border-input shadow-xs outline-none transition-shadow focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-input/30 dark:data-[state=checked]:bg-primary dark:aria-invalid:ring-destructive/40",
        t
      ),
      ...a,
      children: /* @__PURE__ */ e.jsx(Da.Indicator, { "data-slot": "checkbox-indicator", className: "flex items-center justify-center text-current transition-none", children: /* @__PURE__ */ e.jsx(L, { id: "Check", url: p, className: "size-3.5" }) })
    }
  );
}
function ss({ ...t }) {
  return /* @__PURE__ */ e.jsx(ia.Root, { "data-slot": "collapsible", ...t });
}
function ns({ ...t }) {
  return /* @__PURE__ */ e.jsx(ia.CollapsibleTrigger, { "data-slot": "collapsible-trigger", ...t });
}
function rs({ ...t }) {
  return /* @__PURE__ */ e.jsx(ia.CollapsibleContent, { "data-slot": "collapsible-content", ...t });
}
function yt({ ...t }) {
  return /* @__PURE__ */ e.jsx(y.Root, { "data-slot": "dialog", ...t });
}
function la({ ...t }) {
  return /* @__PURE__ */ e.jsx(y.Trigger, { "data-slot": "dialog-trigger", ...t });
}
function is({ ...t }) {
  return /* @__PURE__ */ e.jsx(y.Portal, { "data-slot": "dialog-portal", ...t });
}
function da({ ...t }) {
  return /* @__PURE__ */ e.jsx(y.Close, { "data-slot": "dialog-close", ...t });
}
function os({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(
    y.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: n("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=open]:animate-in", t),
      ...a
    }
  );
}
function St({
  className: t,
  children: a,
  showCloseButton: s = !0,
  ...r
}) {
  return /* @__PURE__ */ e.jsxs(is, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ e.jsx(os, {}),
    /* @__PURE__ */ e.jsxs(
      y.Content,
      {
        "data-slot": "dialog-content",
        className: n(
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 data-[state=closed]:animate-out data-[state=open]:animate-in sm:max-w-lg",
          t
        ),
        ...r,
        children: [
          a,
          s && /* @__PURE__ */ e.jsxs(
            y.Close,
            {
              "data-slot": "dialog-close",
              className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
              children: [
                /* @__PURE__ */ e.jsx(L, { id: "X", url: p }),
                /* @__PURE__ */ e.jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function kt({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx("div", { "data-slot": "dialog-header", className: n("flex flex-col gap-2 text-center sm:text-left", t), ...a });
}
function ca({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx("div", { "data-slot": "dialog-footer", className: n("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", t), ...a });
}
function Ct({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(y.Title, { "data-slot": "dialog-title", className: n("font-semibold text-lg leading-none", t), ...a });
}
function Tt({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(y.Description, { "data-slot": "dialog-description", className: n("text-muted-foreground text-sm", t), ...a });
}
function Ce({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(he, { "data-slot": "command", className: n("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", t), ...a });
}
function nn({
  title: t = "Command Palette",
  description: a = "Search for a command to run...",
  children: s,
  className: r,
  showCloseButton: o = !0,
  ...d
}) {
  return /* @__PURE__ */ e.jsxs(yt, { ...d, children: [
    /* @__PURE__ */ e.jsxs(kt, { className: "sr-only", children: [
      /* @__PURE__ */ e.jsx(Ct, { children: t }),
      /* @__PURE__ */ e.jsx(Tt, { children: a })
    ] }),
    /* @__PURE__ */ e.jsx(St, { className: n("overflow-hidden p-0", r), showCloseButton: o, children: /* @__PURE__ */ e.jsx(Ce, { className: "**:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: s }) })
  ] });
}
function Je({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsxs("div", { "data-slot": "command-input-wrapper", className: "flex h-9 items-center gap-2 border-b px-3", children: [
    /* @__PURE__ */ e.jsx(L, { id: "Search", url: p, className: "size-4 shrink-0 opacity-50" }),
    /* @__PURE__ */ e.jsx(
      he.Input,
      {
        "data-slot": "command-input",
        className: n("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", t),
        ...a
      }
    )
  ] });
}
function Ke({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(he.List, { "data-slot": "command-list", className: n("max-h-[300px] scroll-py-1 overflow-y-auto overflow-x-hidden", t), ...a });
}
function Ye({ ...t }) {
  return /* @__PURE__ */ e.jsx(he.Empty, { "data-slot": "command-empty", className: "py-6 text-center text-sm", ...t });
}
function qe({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(
    he.Group,
    {
      "data-slot": "command-group",
      className: n(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:text-xs",
        t
      ),
      ...a
    }
  );
}
function rn({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(he.Separator, { "data-slot": "command-separator", className: n("-mx-1 h-px bg-border", t), ...a });
}
function Ze({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(
    he.Item,
    {
      "data-slot": "command-item",
      className: n(
        "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
        t
      ),
      ...a
    }
  );
}
function on({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx("span", { "data-slot": "command-shortcut", className: n("ml-auto text-muted-foreground text-xs tracking-widest", t), ...a });
}
const ua = h(p);
function ls({ ...t }) {
  return /* @__PURE__ */ e.jsx(S.Root, { "data-slot": "context-menu", ...t });
}
function ds({ ...t }) {
  return /* @__PURE__ */ e.jsx(S.Trigger, { "data-slot": "context-menu-trigger", ...t });
}
function ln({ ...t }) {
  return /* @__PURE__ */ e.jsx(S.Group, { "data-slot": "context-menu-group", ...t });
}
function dn({ ...t }) {
  return /* @__PURE__ */ e.jsx(S.Portal, { "data-slot": "context-menu-portal", ...t });
}
function cs({ ...t }) {
  return /* @__PURE__ */ e.jsx(S.Sub, { "data-slot": "context-menu-sub", ...t });
}
function us({ ...t }) {
  return /* @__PURE__ */ e.jsx(S.RadioGroup, { "data-slot": "context-menu-radio-group", ...t });
}
function xs({
  className: t,
  inset: a,
  children: s,
  ...r
}) {
  return /* @__PURE__ */ e.jsxs(
    S.SubTrigger,
    {
      "data-slot": "context-menu-sub-trigger",
      "data-inset": a,
      className: n(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[inset]:pl-8 data-[state=open]:text-accent-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        t
      ),
      ...r,
      children: [
        s,
        /* @__PURE__ */ e.jsx(ua, { id: "ChevronRight", className: "ml-auto" })
      ]
    }
  );
}
function ms({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(
    S.SubContent,
    {
      "data-slot": "context-menu-sub-content",
      className: n(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=closed]:animate-out data-[state=open]:animate-in",
        t
      ),
      ...a
    }
  );
}
function hs({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(S.Portal, { children: /* @__PURE__ */ e.jsx(
    S.Content,
    {
      "data-slot": "context-menu-content",
      className: n(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=closed]:animate-out data-[state=open]:animate-in",
        t
      ),
      ...a
    }
  ) });
}
function G({
  className: t,
  inset: a,
  variant: s = "default",
  ...r
}) {
  return /* @__PURE__ */ e.jsx(
    S.Item,
    {
      "data-slot": "context-menu-item",
      "data-inset": a,
      "data-variant": s,
      className: n(
        "data-[variant=destructive]:*:[svg]:!text-destructive relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[disabled]:opacity-50 data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
        t
      ),
      ...r
    }
  );
}
function qt({ className: t, children: a, checked: s, ...r }) {
  return /* @__PURE__ */ e.jsxs(
    S.CheckboxItem,
    {
      "data-slot": "context-menu-checkbox-item",
      className: n(
        "relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        t
      ),
      checked: s,
      ...r,
      children: [
        /* @__PURE__ */ e.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ e.jsx(S.ItemIndicator, { children: /* @__PURE__ */ e.jsx(ua, { id: "Check", className: "size-4" }) }) }),
        a
      ]
    }
  );
}
function Zt({ className: t, children: a, ...s }) {
  return /* @__PURE__ */ e.jsxs(
    S.RadioItem,
    {
      "data-slot": "context-menu-radio-item",
      className: n(
        "relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        t
      ),
      ...s,
      children: [
        /* @__PURE__ */ e.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ e.jsx(S.ItemIndicator, { children: /* @__PURE__ */ e.jsx(ua, { id: "Circle", className: "size-2 fill-current" }) }) }),
        a
      ]
    }
  );
}
function ps({
  className: t,
  inset: a,
  ...s
}) {
  return /* @__PURE__ */ e.jsx(S.Label, { "data-slot": "context-menu-label", "data-inset": a, className: n("px-2 py-1.5 font-medium text-foreground text-sm data-[inset]:pl-8", t), ...s });
}
function Ie({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(S.Separator, { "data-slot": "context-menu-separator", className: n("-mx-1 my-1 h-px bg-border", t), ...a });
}
function ht({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx("span", { "data-slot": "context-menu-shortcut", className: n("ml-auto text-muted-foreground text-xs tracking-widest", t), ...a });
}
const xa = h(p);
function ae({ ...t }) {
  return /* @__PURE__ */ e.jsx(k.Root, { "data-slot": "dropdown-menu", ...t });
}
function gs({ ...t }) {
  return /* @__PURE__ */ e.jsx(k.Portal, { "data-slot": "dropdown-menu-portal", ...t });
}
function se({ ...t }) {
  return /* @__PURE__ */ e.jsx(k.Trigger, { "data-slot": "dropdown-menu-trigger", ...t });
}
function ne({ className: t, sideOffset: a = 4, ...s }) {
  return /* @__PURE__ */ e.jsx(k.Portal, { children: /* @__PURE__ */ e.jsx(
    k.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: a,
      className: n(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=closed]:animate-out data-[state=open]:animate-in",
        t
      ),
      ...s
    }
  ) });
}
function wt({ ...t }) {
  return /* @__PURE__ */ e.jsx(k.Group, { "data-slot": "dropdown-menu-group", ...t });
}
function g({
  className: t,
  inset: a,
  variant: s = "default",
  ...r
}) {
  return /* @__PURE__ */ e.jsx(
    k.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": a,
      "data-variant": s,
      className: n(
        "data-[variant=destructive]:*:[svg]:!text-destructive relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[disabled]:opacity-50 data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
        t
      ),
      ...r
    }
  );
}
function pt({ className: t, children: a, checked: s, ...r }) {
  return /* @__PURE__ */ e.jsxs(
    k.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: n(
        "relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        t
      ),
      checked: s,
      ...r,
      children: [
        /* @__PURE__ */ e.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ e.jsx(k.ItemIndicator, { children: /* @__PURE__ */ e.jsx(xa, { id: "Check", className: "size-4" }) }) }),
        a
      ]
    }
  );
}
function js({ ...t }) {
  return /* @__PURE__ */ e.jsx(k.RadioGroup, { "data-slot": "dropdown-menu-radio-group", ...t });
}
function gt({ className: t, children: a, ...s }) {
  return /* @__PURE__ */ e.jsxs(
    k.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: n(
        "relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        t
      ),
      ...s,
      children: [
        /* @__PURE__ */ e.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ e.jsx(k.ItemIndicator, { children: /* @__PURE__ */ e.jsx(xa, { id: "Circle", className: "size-2 fill-current" }) }) }),
        a
      ]
    }
  );
}
function Xe({
  className: t,
  inset: a,
  ...s
}) {
  return /* @__PURE__ */ e.jsx(k.Label, { "data-slot": "dropdown-menu-label", "data-inset": a, className: n("px-2 py-1.5 font-medium text-sm data-[inset]:pl-8", t), ...s });
}
function V({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(k.Separator, { "data-slot": "dropdown-menu-separator", className: n("-mx-1 my-1 h-px bg-border", t), ...a });
}
function Q({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx("span", { "data-slot": "dropdown-menu-shortcut", className: n("ml-auto text-muted-foreground text-xs tracking-widest", t), ...a });
}
function ma({ ...t }) {
  return /* @__PURE__ */ e.jsx(k.Sub, { "data-slot": "dropdown-menu-sub", ...t });
}
function ha({
  className: t,
  inset: a,
  children: s,
  ...r
}) {
  return /* @__PURE__ */ e.jsxs(
    k.SubTrigger,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": a,
      className: n(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[inset]:pl-8 data-[state=open]:text-accent-foreground",
        t
      ),
      ...r,
      children: [
        s,
        /* @__PURE__ */ e.jsx(xa, { id: "ChevronRight", className: "ml-auto size-4" })
      ]
    }
  );
}
function pa({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(
    k.SubContent,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: n(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=closed]:animate-out data-[state=open]:animate-in",
        t
      ),
      ...a
    }
  );
}
function fs({ ...t }) {
  return /* @__PURE__ */ e.jsx(bt.Root, { "data-slot": "hover-card", ...t });
}
function bs({ ...t }) {
  return /* @__PURE__ */ e.jsx(bt.Trigger, { "data-slot": "hover-card-trigger", ...t });
}
function vs({ className: t, align: a = "center", sideOffset: s = 4, ...r }) {
  return /* @__PURE__ */ e.jsx(bt.Portal, { "data-slot": "hover-card-portal", children: /* @__PURE__ */ e.jsx(
    bt.Content,
    {
      "data-slot": "hover-card-content",
      align: a,
      sideOffset: s,
      className: n(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[state=closed]:animate-out data-[state=open]:animate-in",
        t
      ),
      ...r
    }
  ) });
}
function j({ className: t, type: a, ...s }) {
  return /* @__PURE__ */ e.jsx(
    "input",
    {
      type: a,
      "data-slot": "input",
      className: n(
        "flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs outline-none transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30",
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
        t
      ),
      ...s
    }
  );
}
function x({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(
    Ys.Root,
    {
      "data-slot": "label",
      className: n(
        "flex select-none items-center gap-2 font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50",
        t
      ),
      ...a
    }
  );
}
const ga = h(p);
function ws({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(C.Root, { "data-slot": "menubar", className: n("flex h-9 items-center gap-1 rounded-md border bg-background p-1 shadow-xs", t), ...a });
}
function ze({ ...t }) {
  return /* @__PURE__ */ e.jsx(C.Menu, { "data-slot": "menubar-menu", ...t });
}
function cn({ ...t }) {
  return /* @__PURE__ */ e.jsx(C.Group, { "data-slot": "menubar-group", ...t });
}
function Ns({ ...t }) {
  return /* @__PURE__ */ e.jsx(C.Portal, { "data-slot": "menubar-portal", ...t });
}
function ys({ ...t }) {
  return /* @__PURE__ */ e.jsx(C.RadioGroup, { "data-slot": "menubar-radio-group", ...t });
}
function Me({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(
    C.Trigger,
    {
      "data-slot": "menubar-trigger",
      className: n(
        "flex select-none items-center rounded-sm px-2 py-1 font-medium text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        t
      ),
      ...a
    }
  );
}
function Ae({ className: t, align: a = "start", alignOffset: s = -4, sideOffset: r = 8, ...o }) {
  return /* @__PURE__ */ e.jsx(Ns, { children: /* @__PURE__ */ e.jsx(
    C.Content,
    {
      "data-slot": "menubar-content",
      align: a,
      alignOffset: s,
      sideOffset: r,
      className: n(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in",
        t
      ),
      ...o
    }
  ) });
}
function f({
  className: t,
  inset: a,
  variant: s = "default",
  ...r
}) {
  return /* @__PURE__ */ e.jsx(
    C.Item,
    {
      "data-slot": "menubar-item",
      "data-inset": a,
      "data-variant": s,
      className: n(
        "data-[variant=destructive]:*:[svg]:!text-destructive relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[disabled]:opacity-50 data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
        t
      ),
      ...r
    }
  );
}
function Xt({ className: t, children: a, checked: s, ...r }) {
  return /* @__PURE__ */ e.jsxs(
    C.CheckboxItem,
    {
      "data-slot": "menubar-checkbox-item",
      className: n(
        "relative flex cursor-default select-none items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        t
      ),
      checked: s,
      ...r,
      children: [
        /* @__PURE__ */ e.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ e.jsx(C.ItemIndicator, { children: /* @__PURE__ */ e.jsx(ga, { id: "Check", className: "size-4" }) }) }),
        a
      ]
    }
  );
}
function jt({ className: t, children: a, ...s }) {
  return /* @__PURE__ */ e.jsxs(
    C.RadioItem,
    {
      "data-slot": "menubar-radio-item",
      className: n(
        "relative flex cursor-default select-none items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        t
      ),
      ...s,
      children: [
        /* @__PURE__ */ e.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ e.jsx(C.ItemIndicator, { children: /* @__PURE__ */ e.jsx(ga, { id: "Circle", className: "size-2 fill-current" }) }) }),
        a
      ]
    }
  );
}
function un({
  className: t,
  inset: a,
  ...s
}) {
  return /* @__PURE__ */ e.jsx(C.Label, { "data-slot": "menubar-label", "data-inset": a, className: n("px-2 py-1.5 font-medium text-sm data-[inset]:pl-8", t), ...s });
}
function F({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(C.Separator, { "data-slot": "menubar-separator", className: n("-mx-1 my-1 h-px bg-border", t), ...a });
}
function X({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx("span", { "data-slot": "menubar-shortcut", className: n("ml-auto text-muted-foreground text-xs tracking-widest", t), ...a });
}
function Qt({ ...t }) {
  return /* @__PURE__ */ e.jsx(C.Sub, { "data-slot": "menubar-sub", ...t });
}
function ea({
  className: t,
  inset: a,
  children: s,
  ...r
}) {
  return /* @__PURE__ */ e.jsxs(
    C.SubTrigger,
    {
      "data-slot": "menubar-sub-trigger",
      "data-inset": a,
      className: n(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[inset]:pl-8 data-[state=open]:text-accent-foreground",
        t
      ),
      ...r,
      children: [
        s,
        /* @__PURE__ */ e.jsx(ga, { id: "ChevronRight", className: "ml-auto h-4 w-4" })
      ]
    }
  );
}
function ta({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(
    C.SubContent,
    {
      "data-slot": "menubar-sub-content",
      className: n(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=closed]:animate-out data-[state=open]:animate-in",
        t
      ),
      ...a
    }
  );
}
function Ss({
  className: t,
  children: a,
  viewport: s = !0,
  ...r
}) {
  return /* @__PURE__ */ e.jsxs(te.Root, { "data-slot": "navigation-menu", "data-viewport": s, className: n("group/navigation-menu relative flex max-w-max flex-1 items-center justify-center", t), ...r, children: [
    a,
    s && /* @__PURE__ */ e.jsx(Cs, {})
  ] });
}
function ks({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(te.List, { "data-slot": "navigation-menu-list", className: n("group flex flex-1 list-none items-center justify-center gap-1", t), ...a });
}
function re({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(te.Item, { "data-slot": "navigation-menu-item", className: n("relative", t), ...a });
}
const ja = Ne(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
);
function fe({ className: t, children: a, ...s }) {
  return /* @__PURE__ */ e.jsxs(te.Trigger, { "data-slot": "navigation-menu-trigger", className: n(ja(), "group", t), ...s, children: [
    a,
    " ",
    /* @__PURE__ */ e.jsx(L, { id: "ChevronDown", url: p, className: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180", "aria-hidden": "true" })
  ] });
}
function be({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(
    te.Content,
    {
      "data-slot": "navigation-menu-content",
      className: n(
        "data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 **:data-[slot=navigation-menu-link]:focus:outline-none **:data-[slot=navigation-menu-link]:focus:ring-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in",
        t
      ),
      ...a
    }
  );
}
function Cs({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx("div", { className: n("absolute top-full left-0 isolate z-50 flex justify-center"), children: /* @__PURE__ */ e.jsx(
    te.Viewport,
    {
      "data-slot": "navigation-menu-viewport",
      className: n(
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-top-center overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=closed]:animate-out data-[state=open]:animate-in md:w-[var(--radix-navigation-menu-viewport-width)]",
        t
      ),
      ...a
    }
  ) });
}
function M({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(
    te.Link,
    {
      "data-slot": "navigation-menu-link",
      className: n(
        "flex flex-col gap-1 rounded-sm p-2 text-sm outline-none transition-all hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        t
      ),
      ...a
    }
  );
}
function xn({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(
    te.Indicator,
    {
      "data-slot": "navigation-menu-indicator",
      className: n("data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=hidden]:animate-out data-[state=visible]:animate-in", t),
      ...a,
      children: /* @__PURE__ */ e.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
    }
  );
}
const fa = h(p);
function Ts({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx("nav", { "aria-label": "pagination", "data-slot": "pagination", className: n("mx-auto flex w-full justify-center", t), ...a });
}
function Ds({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx("ul", { "data-slot": "pagination-content", className: n("flex flex-row items-center gap-1", t), ...a });
}
function ie({ ...t }) {
  return /* @__PURE__ */ e.jsx("li", { "data-slot": "pagination-item", ...t });
}
function we({ className: t, isActive: a, size: s = "icon", ...r }) {
  return /* @__PURE__ */ e.jsx(
    "a",
    {
      "aria-current": a ? "page" : void 0,
      "data-slot": "pagination-link",
      "data-active": a,
      className: n(
        Ue({
          variant: a ? "outline" : "ghost",
          size: s
        }),
        t
      ),
      ...r
    }
  );
}
function Is({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsxs(we, { "aria-label": "Go to previous page", size: "default", className: n("gap-1 px-2.5 sm:pl-2.5", t), ...a, children: [
    /* @__PURE__ */ e.jsx(fa, { id: "ChevronLeft" }),
    /* @__PURE__ */ e.jsx("span", { className: "hidden sm:block", children: "Previous" })
  ] });
}
function zs({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsxs(we, { "aria-label": "Go to next page", size: "default", className: n("gap-1 px-2.5 sm:pr-2.5", t), ...a, children: [
    /* @__PURE__ */ e.jsx("span", { className: "hidden sm:block", children: "Next" }),
    /* @__PURE__ */ e.jsx(fa, { id: "ChevronRight" })
  ] });
}
function Ms({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsxs("span", { "aria-hidden": !0, "data-slot": "pagination-ellipsis", className: n("flex size-9 items-center justify-center", t), ...a, children: [
    /* @__PURE__ */ e.jsx(fa, { id: "Ellipsis", className: "size-4" }),
    /* @__PURE__ */ e.jsx("span", { className: "sr-only", children: "More pages" })
  ] });
}
function Qe({ ...t }) {
  return /* @__PURE__ */ e.jsx(Ee.Root, { "data-slot": "popover", ...t });
}
function et({ ...t }) {
  return /* @__PURE__ */ e.jsx(Ee.Trigger, { "data-slot": "popover-trigger", ...t });
}
function tt({ className: t, align: a = "center", sideOffset: s = 4, ...r }) {
  return /* @__PURE__ */ e.jsx(Ee.Portal, { children: /* @__PURE__ */ e.jsx(
    Ee.Content,
    {
      "data-slot": "popover-content",
      align: a,
      sideOffset: s,
      className: n(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[state=closed]:animate-out data-[state=open]:animate-in",
        t
      ),
      ...r
    }
  ) });
}
function mn({ ...t }) {
  return /* @__PURE__ */ e.jsx(Ee.Anchor, { "data-slot": "popover-anchor", ...t });
}
function hn({ className: t, value: a, ...s }) {
  return /* @__PURE__ */ e.jsx(Ia.Root, { "data-slot": "progress", className: n("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", t), ...s, children: /* @__PURE__ */ e.jsx(Ia.Indicator, { "data-slot": "progress-indicator", className: "h-full w-full flex-1 bg-primary transition-all", style: { transform: `translateX(-${100 - (a || 0)}%)` } }) });
}
function ba({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(Yt.Root, { "data-slot": "radio-group", className: n("grid gap-3", t), ...a });
}
function me({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(
    Yt.Item,
    {
      "data-slot": "radio-group-item",
      className: n(
        "aspect-square size-4 shrink-0 rounded-full border border-input text-primary shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:ring-destructive/40",
        t
      ),
      ...a,
      children: /* @__PURE__ */ e.jsx(Yt.Indicator, { "data-slot": "radio-group-indicator", className: "relative flex items-center justify-center", children: /* @__PURE__ */ e.jsx(L, { id: "Circle", url: p, className: "-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 size-2 fill-primary" }) })
    }
  );
}
function va({ className: t, children: a, ...s }) {
  return /* @__PURE__ */ e.jsxs(_e.Root, { "data-slot": "scroll-area", className: n("relative", t), ...s, children: [
    /* @__PURE__ */ e.jsx(_e.Viewport, { "data-slot": "scroll-area-viewport", className: "size-full rounded-[inherit] outline-none transition-[color,box-shadow] focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50", children: a }),
    /* @__PURE__ */ e.jsx(wa, {}),
    /* @__PURE__ */ e.jsx(_e.Corner, {})
  ] });
}
function wa({ className: t, orientation: a = "vertical", ...s }) {
  return /* @__PURE__ */ e.jsx(
    _e.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation: a,
      className: n(
        "flex touch-none select-none p-px transition-colors",
        a === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        a === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        t
      ),
      ...s,
      children: /* @__PURE__ */ e.jsx(_e.ScrollAreaThumb, { "data-slot": "scroll-area-thumb", className: "relative flex-1 rounded-full bg-border" })
    }
  );
}
const Dt = h(p);
function at({ ...t }) {
  return /* @__PURE__ */ e.jsx(D.Root, { "data-slot": "select", ...t });
}
function ue({ ...t }) {
  return /* @__PURE__ */ e.jsx(D.Group, { "data-slot": "select-group", ...t });
}
function st({ ...t }) {
  return /* @__PURE__ */ e.jsx(D.Value, { "data-slot": "select-value", ...t });
}
function nt({
  className: t,
  size: a = "default",
  children: s,
  ...r
}) {
  return /* @__PURE__ */ e.jsxs(
    D.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": a,
      className: n(
        "flex w-fit items-center justify-between gap-2 whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[size=default]:h-9 data-[size=sm]:h-8 data-[placeholder]:text-muted-foreground *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:hover:bg-input/50 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
        t
      ),
      ...r,
      children: [
        s,
        /* @__PURE__ */ e.jsx(D.Icon, { asChild: !0, children: /* @__PURE__ */ e.jsx(Dt, { id: "ChevronDown", className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function rt({ className: t, children: a, position: s = "popper", ...r }) {
  return /* @__PURE__ */ e.jsx(D.Portal, { children: /* @__PURE__ */ e.jsxs(
    D.Content,
    {
      "data-slot": "select-content",
      className: n(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=closed]:animate-out data-[state=open]:animate-in",
        s === "popper" && "data-[side=left]:-translate-x-1 data-[side=top]:-translate-y-1 data-[side=right]:translate-x-1 data-[side=bottom]:translate-y-1",
        t
      ),
      position: s,
      ...r,
      children: [
        /* @__PURE__ */ e.jsx(As, {}),
        /* @__PURE__ */ e.jsx(D.Viewport, { className: n("p-1", s === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"), children: a }),
        /* @__PURE__ */ e.jsx(Bs, {})
      ]
    }
  ) });
}
function xe({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(D.Label, { "data-slot": "select-label", className: n("px-2 py-1.5 text-muted-foreground text-xs", t), ...a });
}
function c({ className: t, children: a, ...s }) {
  return /* @__PURE__ */ e.jsxs(
    D.Item,
    {
      "data-slot": "select-item",
      className: n(
        "relative flex w-full cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        t
      ),
      ...s,
      children: [
        /* @__PURE__ */ e.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ e.jsx(D.ItemIndicator, { children: /* @__PURE__ */ e.jsx(Dt, { id: "Check", className: "size-4" }) }) }),
        /* @__PURE__ */ e.jsx(D.ItemText, { children: a })
      ]
    }
  );
}
function pn({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(D.Separator, { "data-slot": "select-separator", className: n("-mx-1 pointer-events-none my-1 h-px bg-border", t), ...a });
}
function As({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(D.ScrollUpButton, { "data-slot": "select-scroll-up-button", className: n("flex cursor-default items-center justify-center py-1", t), ...a, children: /* @__PURE__ */ e.jsx(Dt, { id: "ChevronUp", className: "size-4" }) });
}
function Bs({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(D.ScrollDownButton, { "data-slot": "select-scroll-down-button", className: n("flex cursor-default items-center justify-center py-1", t), ...a, children: /* @__PURE__ */ e.jsx(Dt, { id: "ChevronDown", className: "size-4" }) });
}
function $e({ className: t, orientation: a = "horizontal", decorative: s = !0, ...r }) {
  return /* @__PURE__ */ e.jsx(
    qs.Root,
    {
      "data-slot": "separator",
      decorative: s,
      orientation: a,
      className: n("shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px", t),
      ...r
    }
  );
}
function It({ ...t }) {
  return /* @__PURE__ */ e.jsx(y.Root, { "data-slot": "sheet", ...t });
}
function Na({ ...t }) {
  return /* @__PURE__ */ e.jsx(y.Trigger, { "data-slot": "sheet-trigger", ...t });
}
function ya({ ...t }) {
  return /* @__PURE__ */ e.jsx(y.Close, { "data-slot": "sheet-close", ...t });
}
function gn({ ...t }) {
  return /* @__PURE__ */ e.jsx(y.Portal, { "data-slot": "sheet-portal", ...t });
}
function jn({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(
    y.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: n("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=open]:animate-in", t),
      ...a
    }
  );
}
function zt({
  className: t,
  children: a,
  side: s = "right",
  ...r
}) {
  return /* @__PURE__ */ e.jsxs(gn, { children: [
    /* @__PURE__ */ e.jsx(jn, {}),
    /* @__PURE__ */ e.jsxs(
      y.Content,
      {
        "data-slot": "sheet-content",
        className: n(
          "fixed z-50 flex flex-col gap-4 bg-background shadow-lg transition ease-in-out data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:duration-300 data-[state=open]:duration-500",
          s === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          s === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          s === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          s === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          t
        ),
        ...r,
        children: [
          a,
          /* @__PURE__ */ e.jsxs(y.Close, { className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
            /* @__PURE__ */ e.jsx(L, { id: "X", url: p, className: "size-4" }),
            /* @__PURE__ */ e.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function Mt({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx("div", { "data-slot": "sheet-header", className: n("flex flex-col gap-1.5 p-4", t), ...a });
}
function Sa({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx("div", { "data-slot": "sheet-footer", className: n("mt-auto flex flex-col gap-2 p-4", t), ...a });
}
function At({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(y.Title, { "data-slot": "sheet-title", className: n("font-semibold text-foreground", t), ...a });
}
function Bt({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(y.Description, { "data-slot": "sheet-description", className: n("text-muted-foreground text-sm", t), ...a });
}
const Et = 768;
function fn() {
  const [t, a] = u.useState(void 0);
  return u.useEffect(() => {
    const s = window.matchMedia(`(max-width: ${Et - 1}px)`), r = () => {
      a(window.innerWidth < Et);
    };
    return s.addEventListener("change", r), a(window.innerWidth < Et), () => s.removeEventListener("change", r);
  }, []), !!t;
}
function ee({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx("div", { "data-slot": "skeleton", className: n("animate-pulse rounded-md bg-accent", t), ...a });
}
function ka({ delayDuration: t = 0, ...a }) {
  return /* @__PURE__ */ e.jsx(ve.Provider, { "data-slot": "tooltip-provider", delayDuration: t, ...a });
}
function _t({ ...t }) {
  return /* @__PURE__ */ e.jsx(ka, { children: /* @__PURE__ */ e.jsx(ve.Root, { "data-slot": "tooltip", ...t }) });
}
function Pt({ ...t }) {
  return /* @__PURE__ */ e.jsx(ve.Trigger, { "data-slot": "tooltip-trigger", ...t });
}
function Ft({ className: t, sideOffset: a = 0, children: s, ...r }) {
  return /* @__PURE__ */ e.jsx(ve.Portal, { children: /* @__PURE__ */ e.jsxs(
    ve.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset: a,
      className: n(
        "fade-in-0 zoom-in-95 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) animate-in text-balance rounded-md bg-primary px-3 py-1.5 text-primary-foreground text-xs data-[state=closed]:animate-out",
        t
      ),
      ...r,
      children: [
        s,
        /* @__PURE__ */ e.jsx(ve.Arrow, { className: "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-primary fill-primary" })
      ]
    }
  ) });
}
const bn = "sidebar_state", vn = 3600 * 24 * 7, wn = "16rem", Nn = "18rem", yn = "3rem", Sn = "b", _s = u.createContext(null);
function $t() {
  const t = u.useContext(_s);
  if (!t)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return t;
}
function kn({
  defaultOpen: t = !0,
  open: a,
  onOpenChange: s,
  className: r,
  style: o,
  children: d,
  ...v
}) {
  const T = fn(), [$, q] = u.useState(!1), [it, Ws] = u.useState(t), De = a ?? it, ot = u.useCallback(
    (R) => {
      const Z = typeof R == "function" ? R(De) : R;
      s ? s(Z) : Ws(Z), document.cookie = `${bn}=${Z}; path=/; max-age=${vn}`;
    },
    [s, De]
  ), lt = u.useCallback(() => T ? q((R) => !R) : ot((R) => !R), [T, ot, q]);
  u.useEffect(() => {
    const R = (Z) => {
      Z.key === Sn && (Z.metaKey || Z.ctrlKey) && (Z.preventDefault(), lt());
    };
    return window.addEventListener("keydown", R), () => window.removeEventListener("keydown", R);
  }, [lt]);
  const Ta = De ? "expanded" : "collapsed", Us = u.useMemo(
    () => ({
      state: Ta,
      open: De,
      setOpen: ot,
      isMobile: T,
      openMobile: $,
      setOpenMobile: q,
      toggleSidebar: lt
    }),
    [Ta, De, ot, T, $, q, lt]
  );
  return /* @__PURE__ */ e.jsx(_s.Provider, { value: Us, children: /* @__PURE__ */ e.jsx(ka, { delayDuration: 0, children: /* @__PURE__ */ e.jsx(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": wn,
        "--sidebar-width-icon": yn,
        ...o
      },
      className: n("group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar", r),
      ...v,
      children: d
    }
  ) }) });
}
function Cn({
  side: t = "left",
  variant: a = "sidebar",
  collapsible: s = "offcanvas",
  className: r,
  children: o,
  ...d
}) {
  const { isMobile: v, state: T, openMobile: $, setOpenMobile: q } = $t();
  return s === "none" ? /* @__PURE__ */ e.jsx("div", { "data-slot": "sidebar", className: n("flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground", r), ...d, children: o }) : v ? /* @__PURE__ */ e.jsx(It, { open: $, onOpenChange: q, ...d, children: /* @__PURE__ */ e.jsxs(
    zt,
    {
      "data-sidebar": "sidebar",
      "data-slot": "sidebar",
      "data-mobile": "true",
      className: "w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
      style: {
        "--sidebar-width": Nn
      },
      side: t,
      children: [
        /* @__PURE__ */ e.jsxs(Mt, { className: "sr-only", children: [
          /* @__PURE__ */ e.jsx(At, { children: "Sidebar" }),
          /* @__PURE__ */ e.jsx(Bt, { children: "Displays the mobile sidebar." })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "flex h-full w-full flex-col", children: o })
      ]
    }
  ) }) : /* @__PURE__ */ e.jsxs("div", { className: "group peer hidden text-sidebar-foreground md:block", "data-state": T, "data-collapsible": T === "collapsed" ? s : "", "data-variant": a, "data-side": t, "data-slot": "sidebar", children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        "data-slot": "sidebar-gap",
        className: n(
          "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          a === "floating" || a === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
        )
      }
    ),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        "data-slot": "sidebar-container",
        className: n(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          t === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          a === "floating" || a === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          r
        ),
        ...d,
        children: /* @__PURE__ */ e.jsx(
          "div",
          {
            "data-sidebar": "sidebar",
            "data-slot": "sidebar-inner",
            className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow-sm",
            children: o
          }
        )
      }
    )
  ] });
}
function Tn({ className: t, onClick: a, ...s }) {
  const { toggleSidebar: r } = $t();
  return /* @__PURE__ */ e.jsxs(
    l,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: n("size-7", t),
      onClick: (o) => {
        a?.(o), r();
      },
      ...s,
      children: [
        /* @__PURE__ */ e.jsx(L, { id: "PanelLeft", url: p }),
        /* @__PURE__ */ e.jsx("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function Dn({ className: t, ...a }) {
  const { toggleSidebar: s } = $t();
  return /* @__PURE__ */ e.jsx(
    "button",
    {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: s,
      title: "Toggle Sidebar",
      className: n(
        "-translate-x-1/2 group-data-[side=left]:-right-4 absolute inset-y-0 z-20 hidden w-4 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=right]:left-0 sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:after:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        t
      ),
      ...a
    }
  );
}
function In({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(
    "main",
    {
      "data-slot": "sidebar-inset",
      className: n(
        "relative flex w-full flex-1 flex-col bg-background",
        "md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm",
        t
      ),
      ...a
    }
  );
}
function zn({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(j, { "data-slot": "sidebar-input", "data-sidebar": "input", className: n("h-8 w-full bg-background shadow-none", t), ...a });
}
function Mn({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx("div", { "data-slot": "sidebar-header", "data-sidebar": "header", className: n("flex flex-col gap-2 p-2", t), ...a });
}
function An({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx("div", { "data-slot": "sidebar-footer", "data-sidebar": "footer", className: n("flex flex-col gap-2 p-2", t), ...a });
}
function Bn({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx($e, { "data-slot": "sidebar-separator", "data-sidebar": "separator", className: n("mx-2 w-auto bg-sidebar-border", t), ...a });
}
function _n({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx("div", { "data-slot": "sidebar-content", "data-sidebar": "content", className: n("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", t), ...a });
}
function Pn({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx("div", { "data-slot": "sidebar-group", "data-sidebar": "group", className: n("relative flex w-full min-w-0 flex-col p-2", t), ...a });
}
function Fn({ className: t, asChild: a = !1, ...s }) {
  const r = a ? U.Slot : "div";
  return /* @__PURE__ */ e.jsx(
    r,
    {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      className: n(
        "flex h-8 shrink-0 items-center rounded-md px-2 font-medium text-sidebar-foreground/70 text-xs outline-hidden ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        t
      ),
      ...s
    }
  );
}
function $n({ className: t, asChild: a = !1, ...s }) {
  const r = a ? U.Slot : "button";
  return /* @__PURE__ */ e.jsx(
    r,
    {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      className: n(
        "absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-hidden ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:-inset-2 after:absolute md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        t
      ),
      ...s
    }
  );
}
function Rn({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx("div", { "data-slot": "sidebar-group-content", "data-sidebar": "group-content", className: n("w-full text-sm", t), ...a });
}
function En({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx("ul", { "data-slot": "sidebar-menu", "data-sidebar": "menu", className: n("flex w-full min-w-0 flex-col gap-1", t), ...a });
}
function On({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx("li", { "data-slot": "sidebar-menu-item", "data-sidebar": "menu-item", className: n("group/menu-item relative", t), ...a });
}
const Ln = Ne(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Gn({
  asChild: t = !1,
  isActive: a = !1,
  variant: s = "default",
  size: r = "default",
  tooltip: o,
  className: d,
  ...v
}) {
  const T = t ? U.Slot : "button", { isMobile: $, state: q } = $t(), it = /* @__PURE__ */ e.jsx(T, { "data-slot": "sidebar-menu-button", "data-sidebar": "menu-button", "data-size": r, "data-active": a, className: n(Ln({ variant: s, size: r }), d), ...v });
  return o ? (typeof o == "string" && (o = {
    children: o
  }), /* @__PURE__ */ e.jsxs(_t, { children: [
    /* @__PURE__ */ e.jsx(Pt, { asChild: !0, children: it }),
    /* @__PURE__ */ e.jsx(Ft, { side: "right", align: "center", hidden: q !== "collapsed" || $, ...o })
  ] })) : it;
}
function Hn({
  className: t,
  asChild: a = !1,
  showOnHover: s = !1,
  ...r
}) {
  const o = a ? U.Slot : "button";
  return /* @__PURE__ */ e.jsx(
    o,
    {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      className: n(
        "absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-hidden ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:-inset-2 after:absolute md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        s && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        t
      ),
      ...r
    }
  );
}
function Vn({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      className: n(
        "pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 font-medium text-sidebar-foreground text-xs tabular-nums",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        t
      ),
      ...a
    }
  );
}
function Wn({
  className: t,
  showIcon: a = !1,
  ...s
}) {
  const r = u.useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, []);
  return /* @__PURE__ */ e.jsxs("div", { "data-slot": "sidebar-menu-skeleton", "data-sidebar": "menu-skeleton", className: n("flex h-8 items-center gap-2 rounded-md px-2", t), ...s, children: [
    a && /* @__PURE__ */ e.jsx(ee, { className: "size-4 rounded-md", "data-sidebar": "menu-skeleton-icon" }),
    /* @__PURE__ */ e.jsx(
      ee,
      {
        className: "h-4 max-w-(--skeleton-width) flex-1",
        "data-sidebar": "menu-skeleton-text",
        style: {
          "--skeleton-width": r
        }
      }
    )
  ] });
}
function Un({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(
    "ul",
    {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-sub",
      className: n("mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-sidebar-border border-l px-2.5 py-0.5", "group-data-[collapsible=icon]:hidden", t),
      ...a
    }
  );
}
function Jn({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx("li", { "data-slot": "sidebar-menu-sub-item", "data-sidebar": "menu-sub-item", className: n("group/menu-sub-item relative", t), ...a });
}
function Kn({
  asChild: t = !1,
  size: a = "md",
  isActive: s = !1,
  className: r,
  ...o
}) {
  const d = t ? U.Slot : "a";
  return /* @__PURE__ */ e.jsx(
    d,
    {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      "data-size": a,
      "data-active": s,
      className: n(
        "-translate-x-px flex h-7 min-w-0 items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-hidden ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        a === "sm" && "text-xs",
        a === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        r
      ),
      ...o
    }
  );
}
function Yn({ className: t, defaultValue: a, value: s, min: r = 0, max: o = 100, ...d }) {
  const v = u.useMemo(() => Array.isArray(s) ? s : Array.isArray(a) ? a : [r, o], [s, a, r, o]);
  return /* @__PURE__ */ e.jsxs(
    dt.Root,
    {
      "data-slot": "slider",
      defaultValue: a,
      value: s,
      min: r,
      max: o,
      className: n(
        "relative flex w-full touch-none select-none items-center data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col data-[disabled]:opacity-50",
        t
      ),
      ...d,
      children: [
        /* @__PURE__ */ e.jsx(
          dt.Track,
          {
            "data-slot": "slider-track",
            className: n("relative grow overflow-hidden rounded-full bg-muted data-[orientation=horizontal]:h-1.5 data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-1.5"),
            children: /* @__PURE__ */ e.jsx(dt.Range, { "data-slot": "slider-range", className: n("absolute bg-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full") })
          }
        ),
        Array.from({ length: v.length }, (T, $) => /* @__PURE__ */ e.jsx(
          dt.Thumb,
          {
            "data-slot": "slider-thumb",
            className: "block size-4 shrink-0 rounded-full border border-primary bg-background shadow-sm ring-ring/50 transition-[color,box-shadow] hover:ring-4 focus-visible:outline-hidden focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50"
          },
          $
        ))
      ]
    }
  );
}
const Bo = ({ ...t }) => {
  const { theme: a = "system" } = Oa();
  return /* @__PURE__ */ e.jsx(
    Xs,
    {
      theme: a,
      className: "toaster group",
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)"
      },
      ...t
    }
  );
};
function aa({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(
    za.Root,
    {
      "data-slot": "switch",
      className: n(
        "peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input/80",
        t
      ),
      ...a,
      children: /* @__PURE__ */ e.jsx(
        za.Thumb,
        {
          "data-slot": "switch-thumb",
          className: n(
            "pointer-events-none block size-4 rounded-full bg-background ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0 dark:data-[state=checked]:bg-primary-foreground dark:data-[state=unchecked]:bg-foreground"
          )
        }
      )
    }
  );
}
function Ps({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx("div", { "data-slot": "table-container", className: "relative w-full overflow-x-auto", children: /* @__PURE__ */ e.jsx("table", { "data-slot": "table", className: n("w-full caption-bottom text-sm", t), ...a }) });
}
function Fs({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx("thead", { "data-slot": "table-header", className: n("[&_tr]:border-b", t), ...a });
}
function $s({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx("tbody", { "data-slot": "table-body", className: n("[&_tr:last-child]:border-0", t), ...a });
}
function Rs({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx("tfoot", { "data-slot": "table-footer", className: n("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", t), ...a });
}
function ft({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx("tr", { "data-slot": "table-row", className: n("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", t), ...a });
}
function Be({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx("th", { "data-slot": "table-head", className: n("h-10 whitespace-nowrap px-2 text-left align-middle font-medium text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", t), ...a });
}
function oe({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx("td", { "data-slot": "table-cell", className: n("whitespace-nowrap p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", t), ...a });
}
function Es({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx("caption", { "data-slot": "table-caption", className: n("mt-4 text-muted-foreground text-sm", t), ...a });
}
function Os({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(Nt.Root, { "data-slot": "tabs", className: n("flex flex-col gap-2", t), ...a });
}
function Ls({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(Nt.List, { "data-slot": "tabs-list", className: n("inline-flex h-9 w-fit items-center justify-center rounded-lg bg-muted p-[3px] text-muted-foreground", t), ...a });
}
function sa({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(
    Nt.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: n(
        "inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-transparent px-2 py-1 font-medium text-foreground text-sm transition-[color,box-shadow] focus-visible:border-ring focus-visible:outline-1 focus-visible:outline-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:shadow-sm dark:text-muted-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        t
      ),
      ...a
    }
  );
}
function na({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(Nt.Content, { "data-slot": "tabs-content", className: n("flex-1 outline-none", t), ...a });
}
function Te({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: n(
        "field-sizing-content flex min-h-16 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-destructive/40",
        t
      ),
      ...a
    }
  );
}
const Ca = Ne(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function pe({ className: t, variant: a, size: s, ...r }) {
  return /* @__PURE__ */ e.jsx(Zs.Root, { "data-slot": "toggle", className: n(Ca({ variant: a, size: s, className: t })), ...r });
}
const Gs = u.createContext({
  size: "default",
  variant: "default"
});
function ge({ className: t, variant: a, size: s, children: r, ...o }) {
  return /* @__PURE__ */ e.jsx(Ea.Root, { "data-slot": "toggle-group", "data-variant": a, "data-size": s, className: n("group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs", t), ...o, children: /* @__PURE__ */ e.jsx(Gs.Provider, { value: { variant: a, size: s }, children: r }) });
}
function w({ className: t, children: a, variant: s, size: r, ...o }) {
  const d = u.useContext(Gs);
  return /* @__PURE__ */ e.jsx(
    Ea.Item,
    {
      "data-slot": "toggle-group-item",
      "data-variant": d.variant || s,
      "data-size": d.size || r,
      className: n(
        Ca({
          variant: d.variant || s,
          size: d.size || r
        }),
        "min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",
        t
      ),
      ...o,
      children: a
    }
  );
}
const Y = Qs, Hs = u.createContext({}), O = ({ name: t, children: a }) => /* @__PURE__ */ e.jsx(Hs.Provider, { value: { name: t }, children: a }), Rt = () => {
  const t = u.useContext(Hs), a = u.useContext(Vs);
  if (!t)
    throw new Error("useFormField should be used within <FormField>");
  const { id: s } = a;
  return {
    id: s,
    name: t.name,
    formItemId: `${s}-form-item`,
    formDescriptionId: `${s}-form-item-description`,
    formMessageId: `${s}-form-item-message`,
    error: void 0
    // React Router handles validation differently
  };
}, Vs = u.createContext({});
function I({ className: t, ...a }) {
  const s = u.useId();
  return /* @__PURE__ */ e.jsx(Vs.Provider, { value: { id: s }, children: /* @__PURE__ */ e.jsx("div", { "data-slot": "form-item", className: n("grid gap-2", t), ...a }) });
}
function z({ className: t, ...a }) {
  const { error: s, formItemId: r } = Rt();
  return /* @__PURE__ */ e.jsx(x, { "data-slot": "form-label", "data-error": !!s, className: n("data-[error=true]:text-destructive", t), htmlFor: r, ...a });
}
function A({ ...t }) {
  const { error: a, formItemId: s, formDescriptionId: r, formMessageId: o } = Rt();
  return /* @__PURE__ */ e.jsx(U.Slot, { "data-slot": "form-control", id: s, "aria-describedby": a ? `${r} ${o}` : `${r}`, "aria-invalid": !!a, ...t });
}
function W({ className: t, ...a }) {
  const { formDescriptionId: s } = Rt();
  return /* @__PURE__ */ e.jsx("p", { "data-slot": "form-description", id: s, className: n("text-muted-foreground text-sm", t), ...a });
}
function je({ className: t, ...a }) {
  const { error: s, formMessageId: r } = Rt(), o = a.children;
  return o ? /* @__PURE__ */ e.jsx("p", { "data-slot": "form-message", id: r, className: n("text-destructive text-sm", t), ...a, children: o }) : null;
}
function qn() {
  return /* @__PURE__ */ e.jsxs(Ga, { type: "single", collapsible: !0, className: "w-full", defaultValue: "item-1", children: [
    /* @__PURE__ */ e.jsxs(ut, { value: "item-1", children: [
      /* @__PURE__ */ e.jsx(xt, { children: "Product Information" }),
      /* @__PURE__ */ e.jsxs(mt, { className: "flex flex-col gap-4 text-balance", children: [
        /* @__PURE__ */ e.jsx("p", { children: "Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability." }),
        /* @__PURE__ */ e.jsx("p", { children: "Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and experts." })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs(ut, { value: "item-2", children: [
      /* @__PURE__ */ e.jsx(xt, { children: "Shipping Details" }),
      /* @__PURE__ */ e.jsxs(mt, { className: "flex flex-col gap-4 text-balance", children: [
        /* @__PURE__ */ e.jsx("p", { children: "We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days." }),
        /* @__PURE__ */ e.jsx("p", { children: "All orders are carefully packaged and fully insured. Track your shipment in real-time through our dedicated tracking portal." })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs(ut, { value: "item-3", children: [
      /* @__PURE__ */ e.jsx(xt, { children: "Return Policy" }),
      /* @__PURE__ */ e.jsxs(mt, { className: "flex flex-col gap-4 text-balance", children: [
        /* @__PURE__ */ e.jsx("p", { children: "We stand behind our products with a comprehensive 30-day return policy. If you're not completely satisfied, simply return the item in its original condition." }),
        /* @__PURE__ */ e.jsx("p", { children: "Our hassle-free return process includes free return shipping and full refunds processed within 48 hours of receiving the returned item." })
      ] })
    ] })
  ] });
}
const Ot = h(p);
function Zn() {
  return /* @__PURE__ */ e.jsxs("div", { className: "grid w-full max-w-xl items-start gap-4", children: [
    /* @__PURE__ */ e.jsxs(Pe, { children: [
      /* @__PURE__ */ e.jsx(Ot, { id: "CircleCheck" }),
      /* @__PURE__ */ e.jsx(Fe, { children: "Success! Your changes have been saved" }),
      /* @__PURE__ */ e.jsx(vt, { children: "This is an alert with icon, title and description." })
    ] }),
    /* @__PURE__ */ e.jsxs(Pe, { children: [
      /* @__PURE__ */ e.jsx(Ot, { id: "Calendar" }),
      /* @__PURE__ */ e.jsx(Fe, { children: "This Alert has a title and an icon. No description." })
    ] }),
    /* @__PURE__ */ e.jsxs(Pe, { variant: "destructive", children: [
      /* @__PURE__ */ e.jsx(Ot, { id: "CircleAlert" }),
      /* @__PURE__ */ e.jsx(Fe, { children: "Unable to process your payment." }),
      /* @__PURE__ */ e.jsxs(vt, { children: [
        /* @__PURE__ */ e.jsx("p", { children: "Please verify your billing information and try again." }),
        /* @__PURE__ */ e.jsxs("ul", { className: "list-inside list-disc text-sm", children: [
          /* @__PURE__ */ e.jsx("li", { children: "Check your card details" }),
          /* @__PURE__ */ e.jsx("li", { children: "Ensure sufficient funds" }),
          /* @__PURE__ */ e.jsx("li", { children: "Verify billing address" })
        ] })
      ] })
    ] })
  ] });
}
const Xn = h(p);
function Qn() {
  return /* @__PURE__ */ e.jsxs(Pe, { variant: "destructive", children: [
    /* @__PURE__ */ e.jsx(Xn, { id: "CircleAlert" }),
    /* @__PURE__ */ e.jsx(Fe, { children: "Error" }),
    /* @__PURE__ */ e.jsx(vt, { children: "Your session has expired. Please log in again." })
  ] });
}
function er() {
  return /* @__PURE__ */ e.jsxs(Ha, { children: [
    /* @__PURE__ */ e.jsx(Va, { asChild: !0, children: /* @__PURE__ */ e.jsx(l, { variant: "outline", children: "Show Dialog" }) }),
    /* @__PURE__ */ e.jsxs(Ja, { children: [
      /* @__PURE__ */ e.jsxs(Ka, { children: [
        /* @__PURE__ */ e.jsx(qa, { children: "Are you absolutely sure?" }),
        /* @__PURE__ */ e.jsx(Za, { children: "This action cannot be undone. This will permanently delete your account and remove your data from our servers." })
      ] }),
      /* @__PURE__ */ e.jsxs(Ya, { children: [
        /* @__PURE__ */ e.jsx(Qa, { children: "Cancel" }),
        /* @__PURE__ */ e.jsx(Xa, { children: "Continue" })
      ] })
    ] })
  ] });
}
function tr() {
  return /* @__PURE__ */ e.jsx(sn, { ratio: 16 / 9, className: "rounded-lg bg-muted", children: /* @__PURE__ */ e.jsx(La, { src: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80", alt: "Photo by Drew Beamer", className: "h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale" }) });
}
function ar() {
  return /* @__PURE__ */ e.jsxs("div", { className: "flex flex-row flex-wrap items-center gap-12", children: [
    /* @__PURE__ */ e.jsxs(le, { children: [
      /* @__PURE__ */ e.jsx(de, { src: "https://github.com/shadcn.png", alt: "@shadcn" }),
      /* @__PURE__ */ e.jsx(ce, { children: "CN" })
    ] }),
    /* @__PURE__ */ e.jsxs(le, { className: "rounded-lg", children: [
      /* @__PURE__ */ e.jsx(de, { src: "https://github.com/evilrabbit.png", alt: "@evilrabbit" }),
      /* @__PURE__ */ e.jsx(ce, { children: "ER" })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "-space-x-2 flex *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale", children: [
      /* @__PURE__ */ e.jsxs(le, { children: [
        /* @__PURE__ */ e.jsx(de, { src: "https://github.com/shadcn.png", alt: "@shadcn" }),
        /* @__PURE__ */ e.jsx(ce, { children: "CN" })
      ] }),
      /* @__PURE__ */ e.jsxs(le, { children: [
        /* @__PURE__ */ e.jsx(de, { src: "https://github.com/leerob.png", alt: "@leerob" }),
        /* @__PURE__ */ e.jsx(ce, { children: "LR" })
      ] }),
      /* @__PURE__ */ e.jsxs(le, { children: [
        /* @__PURE__ */ e.jsx(de, { src: "https://github.com/evilrabbit.png", alt: "@evilrabbit" }),
        /* @__PURE__ */ e.jsx(ce, { children: "ER" })
      ] })
    ] })
  ] });
}
const sr = h(p);
function nr() {
  return /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center gap-2", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex w-full flex-wrap gap-2", children: [
      /* @__PURE__ */ e.jsx(_, { children: "Badge" }),
      /* @__PURE__ */ e.jsx(_, { variant: "secondary", children: "Secondary" }),
      /* @__PURE__ */ e.jsx(_, { variant: "destructive", children: "Destructive" }),
      /* @__PURE__ */ e.jsx(_, { variant: "outline", children: "Outline" })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex w-full flex-wrap gap-2", children: [
      /* @__PURE__ */ e.jsxs(_, { variant: "secondary", className: "bg-blue-500 text-white dark:bg-blue-600", children: [
        /* @__PURE__ */ e.jsx(sr, { id: "BadgeCheck" }),
        "Verified"
      ] }),
      /* @__PURE__ */ e.jsx(_, { className: "h-5 min-w-5 rounded-full px-1 font-mono tabular-nums", children: "8" }),
      /* @__PURE__ */ e.jsx(_, { className: "h-5 min-w-5 rounded-full px-1 font-mono tabular-nums", variant: "destructive", children: "99" }),
      /* @__PURE__ */ e.jsx(_, { className: "h-5 min-w-5 rounded-full px-1 font-mono tabular-nums", variant: "outline", children: "20+" })
    ] })
  ] });
}
function rr() {
  return /* @__PURE__ */ e.jsx(_, { variant: "destructive", children: "Destructive" });
}
function ir() {
  return /* @__PURE__ */ e.jsx(_, { variant: "outline", children: "Outline" });
}
function or() {
  return /* @__PURE__ */ e.jsx(_, { variant: "secondary", children: "Secondary" });
}
function lr() {
  return /* @__PURE__ */ e.jsx(ye, { children: /* @__PURE__ */ e.jsxs(Se, { children: [
    /* @__PURE__ */ e.jsx(N, { children: /* @__PURE__ */ e.jsx(E, { asChild: !0, children: /* @__PURE__ */ e.jsx(b, { href: "/", children: "Home" }) }) }),
    /* @__PURE__ */ e.jsx(B, {}),
    /* @__PURE__ */ e.jsx(N, { children: /* @__PURE__ */ e.jsxs(ae, { children: [
      /* @__PURE__ */ e.jsxs(se, { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ e.jsx(oa, { className: "size-4" }),
        /* @__PURE__ */ e.jsx("span", { className: "sr-only", children: "Toggle menu" })
      ] }),
      /* @__PURE__ */ e.jsxs(ne, { align: "start", children: [
        /* @__PURE__ */ e.jsx(g, { children: "Documentation" }),
        /* @__PURE__ */ e.jsx(g, { children: "Themes" }),
        /* @__PURE__ */ e.jsx(g, { children: "GitHub" })
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsx(B, {}),
    /* @__PURE__ */ e.jsx(N, { children: /* @__PURE__ */ e.jsx(E, { asChild: !0, children: /* @__PURE__ */ e.jsx(b, { href: "/docs/components", children: "Components" }) }) }),
    /* @__PURE__ */ e.jsx(B, {}),
    /* @__PURE__ */ e.jsx(N, { children: /* @__PURE__ */ e.jsx(ke, { children: "Breadcrumb" }) })
  ] }) });
}
const Lt = h(p);
function dr() {
  return /* @__PURE__ */ e.jsx(ye, { children: /* @__PURE__ */ e.jsxs(Se, { children: [
    /* @__PURE__ */ e.jsx(N, { children: /* @__PURE__ */ e.jsx(E, { asChild: !0, children: /* @__PURE__ */ e.jsx(b, { href: "/", children: "Home" }) }) }),
    /* @__PURE__ */ e.jsx(B, { children: /* @__PURE__ */ e.jsx(Lt, { id: "Slash" }) }),
    /* @__PURE__ */ e.jsx(N, { children: /* @__PURE__ */ e.jsxs(ae, { children: [
      /* @__PURE__ */ e.jsxs(se, { className: "flex items-center gap-1 [&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0", children: [
        "Components",
        /* @__PURE__ */ e.jsx(Lt, { id: "ChevronDown" })
      ] }),
      /* @__PURE__ */ e.jsxs(ne, { align: "start", children: [
        /* @__PURE__ */ e.jsx(g, { children: "Documentation" }),
        /* @__PURE__ */ e.jsx(g, { children: "Themes" }),
        /* @__PURE__ */ e.jsx(g, { children: "GitHub" })
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsx(B, { children: /* @__PURE__ */ e.jsx(Lt, { id: "Slash" }) }),
    /* @__PURE__ */ e.jsx(N, { children: /* @__PURE__ */ e.jsx(ke, { children: "Breadcrumb" }) })
  ] }) });
}
function cr() {
  return /* @__PURE__ */ e.jsx(ye, { children: /* @__PURE__ */ e.jsxs(Se, { children: [
    /* @__PURE__ */ e.jsx(N, { children: /* @__PURE__ */ e.jsx(E, { asChild: !0, children: /* @__PURE__ */ e.jsx(b, { href: "/", children: "Home" }) }) }),
    /* @__PURE__ */ e.jsx(B, {}),
    /* @__PURE__ */ e.jsx(N, { children: /* @__PURE__ */ e.jsx(oa, {}) }),
    /* @__PURE__ */ e.jsx(B, {}),
    /* @__PURE__ */ e.jsx(N, { children: /* @__PURE__ */ e.jsx(E, { asChild: !0, children: /* @__PURE__ */ e.jsx(b, { href: "/docs/components", children: "Components" }) }) }),
    /* @__PURE__ */ e.jsx(B, {}),
    /* @__PURE__ */ e.jsx(N, { children: /* @__PURE__ */ e.jsx(ke, { children: "Breadcrumb" }) })
  ] }) });
}
function ur() {
  return /* @__PURE__ */ e.jsx(ye, { children: /* @__PURE__ */ e.jsxs(Se, { children: [
    /* @__PURE__ */ e.jsx(N, { children: /* @__PURE__ */ e.jsx(E, { asChild: !0, children: /* @__PURE__ */ e.jsx(b, { href: "/", children: "Home" }) }) }),
    /* @__PURE__ */ e.jsx(B, {}),
    /* @__PURE__ */ e.jsx(N, { children: /* @__PURE__ */ e.jsx(E, { asChild: !0, children: /* @__PURE__ */ e.jsx(b, { href: "/components", children: "Components" }) }) }),
    /* @__PURE__ */ e.jsx(B, {}),
    /* @__PURE__ */ e.jsx(N, { children: /* @__PURE__ */ e.jsx(ke, { children: "Breadcrumb" }) })
  ] }) });
}
const Aa = h(p);
function xr() {
  return /* @__PURE__ */ e.jsx(ye, { children: /* @__PURE__ */ e.jsxs(Se, { children: [
    /* @__PURE__ */ e.jsx(N, { children: /* @__PURE__ */ e.jsx(E, { asChild: !0, children: /* @__PURE__ */ e.jsx(b, { href: "/", children: "Home" }) }) }),
    /* @__PURE__ */ e.jsx(B, { children: /* @__PURE__ */ e.jsx(Aa, { id: "Slash" }) }),
    /* @__PURE__ */ e.jsx(N, { children: /* @__PURE__ */ e.jsx(E, { asChild: !0, children: /* @__PURE__ */ e.jsx(b, { href: "/components", children: "Components" }) }) }),
    /* @__PURE__ */ e.jsx(B, { children: /* @__PURE__ */ e.jsx(Aa, { id: "Slash" }) }),
    /* @__PURE__ */ e.jsx(N, { children: /* @__PURE__ */ e.jsx(ke, { children: "Breadcrumb" }) })
  ] }) });
}
function mr() {
  return /* @__PURE__ */ e.jsx(l, { asChild: !0, children: /* @__PURE__ */ e.jsx(b, { href: "/login", children: "Login" }) });
}
function hr() {
  return /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap items-center gap-2 md:flex-row", children: /* @__PURE__ */ e.jsx(l, { children: "Button" }) });
}
function pr() {
  return /* @__PURE__ */ e.jsx(l, { variant: "destructive", children: "Destructive" });
}
function gr() {
  return /* @__PURE__ */ e.jsx(l, { variant: "ghost", children: "Ghost" });
}
const jr = h(p);
function fr() {
  return /* @__PURE__ */ e.jsx(l, { variant: "secondary", size: "icon", className: "size-8", children: /* @__PURE__ */ e.jsx(jr, { id: "ChevronRight" }) });
}
function br() {
  return /* @__PURE__ */ e.jsx(l, { variant: "link", children: "Link" });
}
const vr = h(p);
function wr() {
  return /* @__PURE__ */ e.jsxs(l, { size: "sm", disabled: !0, children: [
    /* @__PURE__ */ e.jsx(vr, { id: "Loader", className: "animate-spin" }),
    "Please wait"
  ] });
}
function Nr() {
  return /* @__PURE__ */ e.jsx(l, { variant: "outline", children: "Outline" });
}
function yr() {
  return /* @__PURE__ */ e.jsx(l, { variant: "secondary", children: "Secondary" });
}
const Sr = h(p);
function kr() {
  return /* @__PURE__ */ e.jsxs(l, { variant: "outline", size: "sm", children: [
    /* @__PURE__ */ e.jsx(Sr, { id: "Calendar" }),
    " New Branch"
  ] });
}
function Cr() {
  return /* @__PURE__ */ e.jsxs(Oe, { className: "w-full max-w-sm", children: [
    /* @__PURE__ */ e.jsxs(Le, { children: [
      /* @__PURE__ */ e.jsx(Ge, { children: "Login to your account" }),
      /* @__PURE__ */ e.jsx(He, { children: "Enter your email below to login to your account" }),
      /* @__PURE__ */ e.jsx(as, { children: /* @__PURE__ */ e.jsx(l, { variant: "link", children: "Sign Up" }) })
    ] }),
    /* @__PURE__ */ e.jsx(Ve, { children: /* @__PURE__ */ e.jsx("form", { children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-6", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ e.jsx(x, { htmlFor: "cardemail", children: "cardemail" }),
        /* @__PURE__ */ e.jsx(j, { id: "cardemail", type: "email", placeholder: "place@example.com", required: !0 })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ e.jsx(x, { htmlFor: "password", children: "Password" }),
          /* @__PURE__ */ e.jsx("a", { href: "#", className: "ml-auto inline-block text-sm underline-offset-4 hover:underline", children: "Forgot your password?" })
        ] }),
        /* @__PURE__ */ e.jsx(j, { id: "password", type: "password", required: !0 })
      ] })
    ] }) }) }),
    /* @__PURE__ */ e.jsxs(We, { className: "flex-col gap-2", children: [
      /* @__PURE__ */ e.jsx(l, { type: "submit", className: "w-full", children: "Login" }),
      /* @__PURE__ */ e.jsx(l, { variant: "outline", className: "w-full", children: "Login with Google" })
    ] })
  ] });
}
function Tr() {
  return /* @__PURE__ */ e.jsxs(Oe, { className: "w-[350px]", children: [
    /* @__PURE__ */ e.jsxs(Le, { children: [
      /* @__PURE__ */ e.jsx(Ge, { children: "Create project" }),
      /* @__PURE__ */ e.jsx(He, { children: "Deploy your new project in one-click." })
    ] }),
    /* @__PURE__ */ e.jsx(Ve, { children: /* @__PURE__ */ e.jsx("form", { children: /* @__PURE__ */ e.jsxs("div", { className: "grid w-full items-center gap-6", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ e.jsx(x, { htmlFor: "name", children: "Name" }),
        /* @__PURE__ */ e.jsx(j, { id: "name", placeholder: "Name of your project" })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ e.jsx(x, { htmlFor: "framework", children: "Framework" }),
        /* @__PURE__ */ e.jsxs(at, { children: [
          /* @__PURE__ */ e.jsx(nt, { id: "framework", className: "w-full", children: /* @__PURE__ */ e.jsx(st, { placeholder: "Select" }) }),
          /* @__PURE__ */ e.jsxs(rt, { position: "popper", children: [
            /* @__PURE__ */ e.jsx(c, { value: "next", children: "Next.js" }),
            /* @__PURE__ */ e.jsx(c, { value: "sveltekit", children: "SvelteKit" }),
            /* @__PURE__ */ e.jsx(c, { value: "astro", children: "Astro" }),
            /* @__PURE__ */ e.jsx(c, { value: "nuxt", children: "Nuxt.js" })
          ] })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ e.jsxs(We, { className: "flex justify-between", children: [
      /* @__PURE__ */ e.jsx(l, { variant: "outline", children: "Cancel" }),
      /* @__PURE__ */ e.jsx(l, { children: "Deploy" })
    ] })
  ] });
}
function Dr() {
  return /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-6", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ e.jsx(H, { id: "terms" }),
      /* @__PURE__ */ e.jsx(x, { htmlFor: "terms", children: "Accept terms and conditions" })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ e.jsx(H, { id: "terms-2", defaultChecked: !0 }),
      /* @__PURE__ */ e.jsxs("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ e.jsx(x, { htmlFor: "terms-2", children: "Accept terms and conditions" }),
        /* @__PURE__ */ e.jsx("p", { className: "text-muted-foreground text-sm", children: "By clicking this checkbox, you agree to the terms and conditions." })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ e.jsx(H, { id: "toggle", disabled: !0 }),
      /* @__PURE__ */ e.jsx(x, { htmlFor: "toggle", children: "Enable notifications" })
    ] }),
    /* @__PURE__ */ e.jsxs(x, { className: "flex items-start gap-3 rounded-lg border p-3 hover:bg-accent/50 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950", children: [
      /* @__PURE__ */ e.jsx(
        H,
        {
          id: "toggle-2",
          defaultChecked: !0,
          className: "data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "grid gap-1.5 font-normal", children: [
        /* @__PURE__ */ e.jsx("p", { className: "font-medium text-sm leading-none", children: "Enable notifications" }),
        /* @__PURE__ */ e.jsx("p", { className: "text-muted-foreground text-sm", children: "You can enable or disable notifications at any time." })
      ] })
    ] })
  ] });
}
function Ir() {
  return /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
    /* @__PURE__ */ e.jsx(H, { id: "terms2", disabled: !0 }),
    /* @__PURE__ */ e.jsx("label", { htmlFor: "terms2", className: "font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", children: "Accept terms and conditions" })
  ] });
}
const zr = [
  {
    id: "recents",
    label: "Recents"
  },
  {
    id: "home",
    label: "Home"
  },
  {
    id: "applications",
    label: "Applications"
  },
  {
    id: "desktop",
    label: "Desktop"
  },
  {
    id: "downloads",
    label: "Downloads"
  },
  {
    id: "documents",
    label: "Documents"
  }
];
function Mr() {
  const [t, a] = u.useState(["recents", "home"]);
  function s(o) {
    o.preventDefault();
    const v = new FormData(o.currentTarget).getAll("items");
    K("You submitted the following values", {
      description: /* @__PURE__ */ e.jsx("pre", { className: "mt-2 w-[320px] rounded-md bg-neutral-950 p-4", children: /* @__PURE__ */ e.jsx("code", { className: "text-white", children: JSON.stringify({ items: v }, null, 2) }) })
    });
  }
  function r(o, d) {
    a(d ? (v) => [...v, o] : (v) => v.filter((T) => T !== o));
  }
  return /* @__PURE__ */ e.jsxs(Y, { onSubmit: s, className: "space-y-8", children: [
    /* @__PURE__ */ e.jsx(O, { name: "items", children: /* @__PURE__ */ e.jsxs(I, { children: [
      /* @__PURE__ */ e.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ e.jsx(z, { className: "text-base", children: "Sidebar" }),
        /* @__PURE__ */ e.jsx(W, { children: "Select the items you want to display in the sidebar." })
      ] }),
      zr.map((o) => /* @__PURE__ */ e.jsxs(I, { className: "flex flex-row items-center gap-2", children: [
        /* @__PURE__ */ e.jsx(A, { children: /* @__PURE__ */ e.jsx(H, { name: "items", value: o.id, checked: t.includes(o.id), onCheckedChange: (d) => r(o.id, !!d) }) }),
        /* @__PURE__ */ e.jsx(z, { className: "font-normal text-sm", children: o.label })
      ] }, o.id)),
      /* @__PURE__ */ e.jsx(je, {})
    ] }) }),
    /* @__PURE__ */ e.jsx(l, { type: "submit", children: "Submit" })
  ] });
}
function Ar() {
  const [t, a] = u.useState(!1);
  function s(r) {
    r.preventDefault();
    const d = new FormData(r.currentTarget).has("mobile");
    K("You submitted the following values", {
      description: /* @__PURE__ */ e.jsx("pre", { className: "mt-2 w-[320px] rounded-md bg-neutral-950 p-4", children: /* @__PURE__ */ e.jsx("code", { className: "text-white", children: JSON.stringify({ mobile: d }, null, 2) }) })
    });
  }
  return /* @__PURE__ */ e.jsxs(Y, { onSubmit: s, className: "flex flex-col items-start gap-4", children: [
    /* @__PURE__ */ e.jsx(O, { name: "mobile", children: /* @__PURE__ */ e.jsxs(I, { className: "flex flex-row items-start gap-2 rounded-md border p-4 shadow-sm", children: [
      /* @__PURE__ */ e.jsx(A, { children: /* @__PURE__ */ e.jsx(H, { name: "mobile", checked: t, onCheckedChange: a }) }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 leading-none", children: [
        /* @__PURE__ */ e.jsx(z, { children: "Use different settings for my mobile devices" }),
        /* @__PURE__ */ e.jsxs(W, { children: [
          "You can manage your mobile notifications in the ",
          /* @__PURE__ */ e.jsx(b, { href: "/examples/forms", children: "mobile settings" }),
          " page."
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsx(l, { type: "submit", children: "Submit" })
  ] });
}
function Br() {
  return /* @__PURE__ */ e.jsxs("div", { className: "items-top flex gap-2", children: [
    /* @__PURE__ */ e.jsx(H, { id: "terms1" }),
    /* @__PURE__ */ e.jsxs("div", { className: "grid gap-1.5 leading-none", children: [
      /* @__PURE__ */ e.jsx("label", { htmlFor: "terms1", className: "font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", children: "Accept terms and conditions" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-muted-foreground text-sm", children: "You agree to our Terms of Service and Privacy Policy." })
    ] })
  ] });
}
const _r = h(p);
function Pr() {
  const [t, a] = u.useState(!1);
  return /* @__PURE__ */ e.jsxs(ss, { open: t, onOpenChange: a, className: "flex w-[350px] flex-col gap-2", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-4 px-4", children: [
      /* @__PURE__ */ e.jsx("h4", { className: "font-semibold text-sm", children: "@peduarte starred 3 repositories" }),
      /* @__PURE__ */ e.jsx(ns, { asChild: !0, children: /* @__PURE__ */ e.jsxs(l, { variant: "ghost", size: "icon", className: "size-8", children: [
        /* @__PURE__ */ e.jsx(_r, { id: "ChevronsUpDown" }),
        /* @__PURE__ */ e.jsx("span", { className: "sr-only", children: "Toggle" })
      ] }) })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "rounded-md border px-4 py-2 font-mono text-sm", children: "@radix-ui/primitives" }),
    /* @__PURE__ */ e.jsxs(rs, { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ e.jsx("div", { className: "rounded-md border px-4 py-2 font-mono text-sm", children: "@radix-ui/colors" }),
      /* @__PURE__ */ e.jsx("div", { className: "rounded-md border px-4 py-2 font-mono text-sm", children: "@stitches/react" })
    ] })
  ] });
}
const Ba = h(p), _a = [
  {
    value: "next.js",
    label: "Next.js"
  },
  {
    value: "sveltekit",
    label: "SvelteKit"
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js"
  },
  {
    value: "remix",
    label: "Remix"
  },
  {
    value: "astro",
    label: "Astro"
  }
];
function Fr() {
  const [t, a] = u.useState(!1), [s, r] = u.useState("");
  return /* @__PURE__ */ e.jsxs(Qe, { open: t, onOpenChange: a, children: [
    /* @__PURE__ */ e.jsx(et, { asChild: !0, children: /* @__PURE__ */ e.jsxs(l, { variant: "outline", role: "combobox", "aria-expanded": t, className: "w-[200px] justify-between", children: [
      s ? _a.find((o) => o.value === s)?.label : "Select framework...",
      /* @__PURE__ */ e.jsx(Ba, { id: "ChevronsUpDown", className: "opacity-50" })
    ] }) }),
    /* @__PURE__ */ e.jsx(tt, { className: "w-[200px] p-0", children: /* @__PURE__ */ e.jsxs(Ce, { children: [
      /* @__PURE__ */ e.jsx(Je, { placeholder: "Search framework...", className: "h-9" }),
      /* @__PURE__ */ e.jsxs(Ke, { children: [
        /* @__PURE__ */ e.jsx(Ye, { children: "No framework found." }),
        /* @__PURE__ */ e.jsx(qe, { children: _a.map((o) => /* @__PURE__ */ e.jsxs(
          Ze,
          {
            value: o.value,
            onSelect: (d) => {
              r(d === s ? "" : d), a(!1);
            },
            children: [
              o.label,
              /* @__PURE__ */ e.jsx(Ba, { id: "Check", className: n("ml-auto", s === o.value ? "opacity-100" : "opacity-0") })
            ]
          },
          o.value
        )) })
      ] })
    ] }) })
  ] });
}
const $r = h(p), Rr = ["feature", "bug", "enhancement", "documentation", "design", "question", "maintenance"];
function Er() {
  const [t, a] = u.useState("feature"), [s, r] = u.useState(!1);
  return /* @__PURE__ */ e.jsxs("div", { className: "flex w-full flex-col items-start justify-between rounded-md border px-4 py-3 sm:flex-row sm:items-center", children: [
    /* @__PURE__ */ e.jsxs("p", { className: "font-medium text-sm leading-none", children: [
      /* @__PURE__ */ e.jsx("span", { className: "mr-2 rounded-lg bg-primary px-2 py-1 text-primary-foreground text-xs", children: t }),
      /* @__PURE__ */ e.jsx("span", { className: "text-muted-foreground", children: "Create a new project" })
    ] }),
    /* @__PURE__ */ e.jsxs(ae, { open: s, onOpenChange: r, children: [
      /* @__PURE__ */ e.jsx(se, { asChild: !0, children: /* @__PURE__ */ e.jsx(l, { variant: "ghost", size: "sm", children: /* @__PURE__ */ e.jsx($r, { id: "Ellipsis" }) }) }),
      /* @__PURE__ */ e.jsxs(ne, { align: "end", className: "w-[200px]", children: [
        /* @__PURE__ */ e.jsx(Xe, { children: "Actions" }),
        /* @__PURE__ */ e.jsxs(wt, { children: [
          /* @__PURE__ */ e.jsx(g, { children: "Assign to..." }),
          /* @__PURE__ */ e.jsx(g, { children: "Set due date..." }),
          /* @__PURE__ */ e.jsx(V, {}),
          /* @__PURE__ */ e.jsxs(ma, { children: [
            /* @__PURE__ */ e.jsx(ha, { children: "Apply label" }),
            /* @__PURE__ */ e.jsx(pa, { className: "p-0", children: /* @__PURE__ */ e.jsxs(Ce, { children: [
              /* @__PURE__ */ e.jsx(Je, { placeholder: "Filter label...", autoFocus: !0, className: "h-9" }),
              /* @__PURE__ */ e.jsxs(Ke, { children: [
                /* @__PURE__ */ e.jsx(Ye, { children: "No label found." }),
                /* @__PURE__ */ e.jsx(qe, { children: Rr.map((o) => /* @__PURE__ */ e.jsx(
                  Ze,
                  {
                    value: o,
                    onSelect: (d) => {
                      a(d), r(!1);
                    },
                    children: o
                  },
                  o
                )) })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ e.jsx(V, {}),
          /* @__PURE__ */ e.jsxs(g, { className: "text-red-600", children: [
            "Delete",
            /* @__PURE__ */ e.jsx(Q, { children: "⌘⌫" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
const Pa = h(p), Fa = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" }
];
function Or() {
  const [t, a] = u.useState(""), [s, r] = u.useState(!1);
  function o(d) {
    d.preventDefault();
    const T = new FormData(d.currentTarget).get("language");
    K("You submitted the following values", {
      description: /* @__PURE__ */ e.jsx("pre", { className: "mt-2 w-[320px] rounded-md bg-neutral-950 p-4", children: /* @__PURE__ */ e.jsx("code", { className: "text-white", children: JSON.stringify({ language: T }, null, 2) }) })
    });
  }
  return /* @__PURE__ */ e.jsxs(Y, { onSubmit: o, className: "space-y-6", children: [
    /* @__PURE__ */ e.jsx(O, { name: "language", children: /* @__PURE__ */ e.jsxs(I, { className: "flex flex-col", children: [
      /* @__PURE__ */ e.jsx(z, { children: "Language" }),
      /* @__PURE__ */ e.jsxs(Qe, { open: s, onOpenChange: r, children: [
        /* @__PURE__ */ e.jsx(et, { asChild: !0, children: /* @__PURE__ */ e.jsx(A, { children: /* @__PURE__ */ e.jsxs(l, { variant: "outline", role: "combobox", "aria-expanded": s, className: n("w-[200px] justify-between", !t && "text-muted-foreground"), children: [
          t ? Fa.find((d) => d.value === t)?.label : "Select language",
          /* @__PURE__ */ e.jsx(Pa, { id: "ChevronsUpDown", className: "opacity-50" })
        ] }) }) }),
        /* @__PURE__ */ e.jsx(tt, { className: "w-[200px] p-0", children: /* @__PURE__ */ e.jsxs(Ce, { children: [
          /* @__PURE__ */ e.jsx(Je, { placeholder: "Search language...", className: "h-9" }),
          /* @__PURE__ */ e.jsxs(Ke, { children: [
            /* @__PURE__ */ e.jsx(Ye, { children: "No language found." }),
            /* @__PURE__ */ e.jsx(qe, { children: Fa.map((d) => /* @__PURE__ */ e.jsxs(
              Ze,
              {
                value: d.label,
                onSelect: () => {
                  a(d.value), r(!1);
                },
                children: [
                  d.label,
                  /* @__PURE__ */ e.jsx(Pa, { id: "Check", className: n("ml-auto", d.value === t ? "opacity-100" : "opacity-0") })
                ]
              },
              d.value
            )) })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ e.jsx("input", { type: "hidden", name: "language", value: t }),
      /* @__PURE__ */ e.jsx(W, { children: "This is the language that will be used in the dashboard." }),
      /* @__PURE__ */ e.jsx(je, {})
    ] }) }),
    /* @__PURE__ */ e.jsx(l, { type: "submit", children: "Submit" })
  ] });
}
const $a = [
  {
    value: "backlog",
    label: "Backlog"
  },
  {
    value: "todo",
    label: "Todo"
  },
  {
    value: "in progress",
    label: "In Progress"
  },
  {
    value: "done",
    label: "Done"
  },
  {
    value: "canceled",
    label: "Canceled"
  }
];
function Lr() {
  const [t, a] = u.useState(!1), [s, r] = u.useState(null);
  return /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-4", children: [
    /* @__PURE__ */ e.jsx("p", { className: "text-muted-foreground text-sm", children: "Status" }),
    /* @__PURE__ */ e.jsxs(Qe, { open: t, onOpenChange: a, children: [
      /* @__PURE__ */ e.jsx(et, { asChild: !0, children: /* @__PURE__ */ e.jsx(l, { variant: "outline", className: "w-[150px] justify-start", children: s ? /* @__PURE__ */ e.jsx(e.Fragment, { children: s.label }) : /* @__PURE__ */ e.jsx(e.Fragment, { children: "+ Set status" }) }) }),
      /* @__PURE__ */ e.jsx(tt, { className: "p-0", side: "right", align: "start", children: /* @__PURE__ */ e.jsxs(Ce, { children: [
        /* @__PURE__ */ e.jsx(Je, { placeholder: "Change status..." }),
        /* @__PURE__ */ e.jsxs(Ke, { children: [
          /* @__PURE__ */ e.jsx(Ye, { children: "No results found." }),
          /* @__PURE__ */ e.jsx(qe, { children: $a.map((o) => /* @__PURE__ */ e.jsx(
            Ze,
            {
              value: o.value,
              onSelect: (d) => {
                r($a.find((v) => v.value === d) || null), a(!1);
              },
              children: o.label
            },
            o.value
          )) })
        ] })
      ] }) })
    ] })
  ] });
}
function Gr() {
  return /* @__PURE__ */ e.jsxs(ls, { children: [
    /* @__PURE__ */ e.jsx(ds, { className: "flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm", children: "Right click here" }),
    /* @__PURE__ */ e.jsxs(hs, { className: "w-52", children: [
      /* @__PURE__ */ e.jsxs(G, { inset: !0, children: [
        "Back",
        /* @__PURE__ */ e.jsx(ht, { children: "⌘[" })
      ] }),
      /* @__PURE__ */ e.jsxs(G, { inset: !0, disabled: !0, children: [
        "Forward",
        /* @__PURE__ */ e.jsx(ht, { children: "⌘]" })
      ] }),
      /* @__PURE__ */ e.jsxs(G, { inset: !0, children: [
        "Reload",
        /* @__PURE__ */ e.jsx(ht, { children: "⌘R" })
      ] }),
      /* @__PURE__ */ e.jsxs(cs, { children: [
        /* @__PURE__ */ e.jsx(xs, { inset: !0, children: "More Tools" }),
        /* @__PURE__ */ e.jsxs(ms, { className: "w-44", children: [
          /* @__PURE__ */ e.jsx(G, { children: "Save Page..." }),
          /* @__PURE__ */ e.jsx(G, { children: "Create Shortcut..." }),
          /* @__PURE__ */ e.jsx(G, { children: "Name Window..." }),
          /* @__PURE__ */ e.jsx(Ie, {}),
          /* @__PURE__ */ e.jsx(G, { children: "Developer Tools" }),
          /* @__PURE__ */ e.jsx(Ie, {}),
          /* @__PURE__ */ e.jsx(G, { variant: "destructive", children: "Delete" })
        ] })
      ] }),
      /* @__PURE__ */ e.jsx(Ie, {}),
      /* @__PURE__ */ e.jsx(qt, { checked: !0, children: "Show Bookmarks" }),
      /* @__PURE__ */ e.jsx(qt, { children: "Show Full URLs" }),
      /* @__PURE__ */ e.jsx(Ie, {}),
      /* @__PURE__ */ e.jsxs(us, { value: "pedro", children: [
        /* @__PURE__ */ e.jsx(ps, { inset: !0, children: "People" }),
        /* @__PURE__ */ e.jsx(Zt, { value: "pedro", children: "Pedro Duarte" }),
        /* @__PURE__ */ e.jsx(Zt, { value: "colm", children: "Colm Tuite" })
      ] })
    ] })
  ] });
}
function Hr() {
  return /* @__PURE__ */ e.jsxs(yt, { children: [
    /* @__PURE__ */ e.jsx(la, { asChild: !0, children: /* @__PURE__ */ e.jsx(l, { variant: "outline", children: "Share" }) }),
    /* @__PURE__ */ e.jsxs(St, { className: "sm:max-w-md", children: [
      /* @__PURE__ */ e.jsxs(kt, { children: [
        /* @__PURE__ */ e.jsx(Ct, { children: "Share link" }),
        /* @__PURE__ */ e.jsx(Tt, { children: "Anyone who has this link will be able to view this." })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ e.jsxs("div", { className: "grid flex-1 gap-2", children: [
        /* @__PURE__ */ e.jsx(x, { htmlFor: "link", className: "sr-only", children: "Link" }),
        /* @__PURE__ */ e.jsx(j, { id: "link", defaultValue: "https://ui.shadcn.com/docs/installation", readOnly: !0 })
      ] }) }),
      /* @__PURE__ */ e.jsx(ca, { className: "sm:justify-start", children: /* @__PURE__ */ e.jsx(da, { asChild: !0, children: /* @__PURE__ */ e.jsx(l, { type: "button", variant: "secondary", children: "Close" }) }) })
    ] })
  ] });
}
function Vr() {
  return /* @__PURE__ */ e.jsx(yt, { children: /* @__PURE__ */ e.jsxs("form", { children: [
    /* @__PURE__ */ e.jsx(la, { asChild: !0, children: /* @__PURE__ */ e.jsx(l, { variant: "outline", children: "Open Dialog" }) }),
    /* @__PURE__ */ e.jsxs(St, { className: "sm:max-w-[425px]", children: [
      /* @__PURE__ */ e.jsxs(kt, { children: [
        /* @__PURE__ */ e.jsx(Ct, { children: "Edit profile" }),
        /* @__PURE__ */ e.jsx(Tt, { children: "Make changes to your profile here. Click save when you're done." })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "grid gap-4", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "grid gap-3", children: [
          /* @__PURE__ */ e.jsx(x, { htmlFor: "name-1", children: "Name" }),
          /* @__PURE__ */ e.jsx(j, { id: "name-1", name: "name", defaultValue: "Pedro Duarte" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "grid gap-3", children: [
          /* @__PURE__ */ e.jsx(x, { htmlFor: "username-1", children: "Username" }),
          /* @__PURE__ */ e.jsx(j, { id: "username-1", name: "username", defaultValue: "@peduarte" })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs(ca, { children: [
        /* @__PURE__ */ e.jsx(da, { asChild: !0, children: /* @__PURE__ */ e.jsx(l, { variant: "outline", children: "Cancel" }) }),
        /* @__PURE__ */ e.jsx(l, { type: "submit", children: "Save changes" })
      ] })
    ] })
  ] }) });
}
function Wr() {
  const [t, a] = u.useState(!0), [s, r] = u.useState(!1), [o, d] = u.useState(!1);
  return /* @__PURE__ */ e.jsxs(ae, { children: [
    /* @__PURE__ */ e.jsx(se, { asChild: !0, children: /* @__PURE__ */ e.jsx(l, { variant: "outline", children: "Open" }) }),
    /* @__PURE__ */ e.jsxs(ne, { className: "w-56", children: [
      /* @__PURE__ */ e.jsx(Xe, { children: "Appearance" }),
      /* @__PURE__ */ e.jsx(V, {}),
      /* @__PURE__ */ e.jsx(pt, { checked: t, onCheckedChange: a, children: "Status Bar" }),
      /* @__PURE__ */ e.jsx(pt, { checked: s, onCheckedChange: r, disabled: !0, children: "Activity Bar" }),
      /* @__PURE__ */ e.jsx(pt, { checked: o, onCheckedChange: d, children: "Panel" })
    ] })
  ] });
}
function Ur() {
  return /* @__PURE__ */ e.jsxs(ae, { children: [
    /* @__PURE__ */ e.jsx(se, { asChild: !0, children: /* @__PURE__ */ e.jsx(l, { variant: "outline", children: "Open" }) }),
    /* @__PURE__ */ e.jsxs(ne, { className: "w-56", align: "start", children: [
      /* @__PURE__ */ e.jsx(Xe, { children: "My Account" }),
      /* @__PURE__ */ e.jsxs(wt, { children: [
        /* @__PURE__ */ e.jsxs(g, { children: [
          "Profile",
          /* @__PURE__ */ e.jsx(Q, { children: "⇧⌘P" })
        ] }),
        /* @__PURE__ */ e.jsxs(g, { children: [
          "Billing",
          /* @__PURE__ */ e.jsx(Q, { children: "⌘B" })
        ] }),
        /* @__PURE__ */ e.jsxs(g, { children: [
          "Settings",
          /* @__PURE__ */ e.jsx(Q, { children: "⌘S" })
        ] }),
        /* @__PURE__ */ e.jsxs(g, { children: [
          "Keyboard shortcuts",
          /* @__PURE__ */ e.jsx(Q, { children: "⌘K" })
        ] })
      ] }),
      /* @__PURE__ */ e.jsx(V, {}),
      /* @__PURE__ */ e.jsxs(wt, { children: [
        /* @__PURE__ */ e.jsx(g, { children: "Team" }),
        /* @__PURE__ */ e.jsxs(ma, { children: [
          /* @__PURE__ */ e.jsx(ha, { children: "Invite users" }),
          /* @__PURE__ */ e.jsx(gs, { children: /* @__PURE__ */ e.jsxs(pa, { children: [
            /* @__PURE__ */ e.jsx(g, { children: "Email" }),
            /* @__PURE__ */ e.jsx(g, { children: "Message" }),
            /* @__PURE__ */ e.jsx(V, {}),
            /* @__PURE__ */ e.jsx(g, { children: "More..." })
          ] }) })
        ] }),
        /* @__PURE__ */ e.jsxs(g, { children: [
          "New Team",
          /* @__PURE__ */ e.jsx(Q, { children: "⌘+T" })
        ] })
      ] }),
      /* @__PURE__ */ e.jsx(V, {}),
      /* @__PURE__ */ e.jsx(g, { children: "GitHub" }),
      /* @__PURE__ */ e.jsx(g, { children: "Support" }),
      /* @__PURE__ */ e.jsx(g, { disabled: !0, children: "API" }),
      /* @__PURE__ */ e.jsx(V, {}),
      /* @__PURE__ */ e.jsxs(g, { children: [
        "Log out",
        /* @__PURE__ */ e.jsx(Q, { children: "⇧⌘Q" })
      ] })
    ] })
  ] });
}
function Jr() {
  const [t, a] = u.useState("bottom");
  return /* @__PURE__ */ e.jsxs(ae, { children: [
    /* @__PURE__ */ e.jsx(se, { asChild: !0, children: /* @__PURE__ */ e.jsx(l, { variant: "outline", children: "Open" }) }),
    /* @__PURE__ */ e.jsxs(ne, { className: "w-56", children: [
      /* @__PURE__ */ e.jsx(Xe, { children: "Panel Position" }),
      /* @__PURE__ */ e.jsx(V, {}),
      /* @__PURE__ */ e.jsxs(js, { value: t, onValueChange: a, children: [
        /* @__PURE__ */ e.jsx(gt, { value: "top", children: "Top" }),
        /* @__PURE__ */ e.jsx(gt, { value: "bottom", children: "Bottom" }),
        /* @__PURE__ */ e.jsx(gt, { value: "right", children: "Right" })
      ] })
    ] })
  ] });
}
function Kr() {
  return /* @__PURE__ */ e.jsxs(fs, { children: [
    /* @__PURE__ */ e.jsx(bs, { asChild: !0, children: /* @__PURE__ */ e.jsx(l, { variant: "link", children: "@nextjs" }) }),
    /* @__PURE__ */ e.jsx(vs, { className: "w-80", children: /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between gap-4", children: [
      /* @__PURE__ */ e.jsxs(le, { children: [
        /* @__PURE__ */ e.jsx(de, { src: "https://github.com/vercel.png" }),
        /* @__PURE__ */ e.jsx(ce, { children: "VC" })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ e.jsx("h4", { className: "font-semibold text-sm", children: "@nextjs" }),
        /* @__PURE__ */ e.jsx("p", { className: "text-sm", children: "The React Framework – created and maintained by @vercel." }),
        /* @__PURE__ */ e.jsx("div", { className: "text-muted-foreground text-xs", children: "Joined December 2021" })
      ] })
    ] }) })
  ] });
}
function Yr() {
  return /* @__PURE__ */ e.jsx(j, { type: "email", placeholder: "Email" });
}
function qr() {
  return /* @__PURE__ */ e.jsx(j, { disabled: !0, type: "email", placeholder: "Email" });
}
function Zr() {
  return /* @__PURE__ */ e.jsxs("div", { className: "grid w-full max-w-sm items-center gap-3", children: [
    /* @__PURE__ */ e.jsx(x, { htmlFor: "picture", children: "Picture" }),
    /* @__PURE__ */ e.jsx(j, { id: "picture", type: "file" })
  ] });
}
function Xr() {
  function t(a) {
    a.preventDefault();
    const r = new FormData(a.currentTarget).get("username");
    K("You submitted the following values", {
      description: /* @__PURE__ */ e.jsx("pre", { className: "mt-2 w-[320px] rounded-md bg-neutral-950 p-4", children: /* @__PURE__ */ e.jsx("code", { className: "text-white", children: JSON.stringify({ username: r }, null, 2) }) })
    });
  }
  return /* @__PURE__ */ e.jsxs(Y, { onSubmit: t, className: "w-2/3 space-y-6", children: [
    /* @__PURE__ */ e.jsx(O, { name: "username", children: /* @__PURE__ */ e.jsxs(I, { children: [
      /* @__PURE__ */ e.jsx(z, { children: "Username" }),
      /* @__PURE__ */ e.jsx(A, { children: /* @__PURE__ */ e.jsx(j, { name: "username", placeholder: "shadcn" }) }),
      /* @__PURE__ */ e.jsx(W, { children: "This is your public display name." }),
      /* @__PURE__ */ e.jsx(je, {})
    ] }) }),
    /* @__PURE__ */ e.jsx(l, { type: "submit", children: "Submit" })
  ] });
}
function Qr() {
  return /* @__PURE__ */ e.jsxs("div", { className: "flex w-full max-w-sm items-center gap-2", children: [
    /* @__PURE__ */ e.jsx(j, { type: "email", placeholder: "Email" }),
    /* @__PURE__ */ e.jsx(l, { type: "submit", variant: "outline", children: "Subscribe" })
  ] });
}
function ei() {
  return /* @__PURE__ */ e.jsxs("div", { className: "grid w-full max-w-sm items-center gap-3", children: [
    /* @__PURE__ */ e.jsx(x, { htmlFor: "inputemail", children: "Email" }),
    /* @__PURE__ */ e.jsx(j, { type: "inputemail", id: "email", placeholder: "Email" })
  ] });
}
function ti() {
  return /* @__PURE__ */ e.jsxs("div", { className: "grid w-full max-w-sm items-center gap-3", children: [
    /* @__PURE__ */ e.jsx(x, { htmlFor: "email-2", children: "Email" }),
    /* @__PURE__ */ e.jsx(j, { type: "email", id: "email-2", placeholder: "Email" }),
    /* @__PURE__ */ e.jsx("p", { className: "text-muted-foreground text-sm", children: "Enter your email address." })
  ] });
}
function ai() {
  return /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
    /* @__PURE__ */ e.jsx(H, { id: "terms" }),
    /* @__PURE__ */ e.jsx(x, { htmlFor: "terms", children: "Accept terms and conditions" })
  ] }) });
}
function si() {
  return /* @__PURE__ */ e.jsxs(ws, { children: [
    /* @__PURE__ */ e.jsxs(ze, { children: [
      /* @__PURE__ */ e.jsx(Me, { children: "File" }),
      /* @__PURE__ */ e.jsxs(Ae, { children: [
        /* @__PURE__ */ e.jsxs(f, { children: [
          "New Tab ",
          /* @__PURE__ */ e.jsx(X, { children: "⌘T" })
        ] }),
        /* @__PURE__ */ e.jsxs(f, { children: [
          "New Window ",
          /* @__PURE__ */ e.jsx(X, { children: "⌘N" })
        ] }),
        /* @__PURE__ */ e.jsx(f, { disabled: !0, children: "New Incognito Window" }),
        /* @__PURE__ */ e.jsx(F, {}),
        /* @__PURE__ */ e.jsxs(Qt, { children: [
          /* @__PURE__ */ e.jsx(ea, { children: "Share" }),
          /* @__PURE__ */ e.jsxs(ta, { children: [
            /* @__PURE__ */ e.jsx(f, { children: "Email link" }),
            /* @__PURE__ */ e.jsx(f, { children: "Messages" }),
            /* @__PURE__ */ e.jsx(f, { children: "Notes" })
          ] })
        ] }),
        /* @__PURE__ */ e.jsx(F, {}),
        /* @__PURE__ */ e.jsxs(f, { children: [
          "Print... ",
          /* @__PURE__ */ e.jsx(X, { children: "⌘P" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs(ze, { children: [
      /* @__PURE__ */ e.jsx(Me, { children: "Edit" }),
      /* @__PURE__ */ e.jsxs(Ae, { children: [
        /* @__PURE__ */ e.jsxs(f, { children: [
          "Undo ",
          /* @__PURE__ */ e.jsx(X, { children: "⌘Z" })
        ] }),
        /* @__PURE__ */ e.jsxs(f, { children: [
          "Redo ",
          /* @__PURE__ */ e.jsx(X, { children: "⇧⌘Z" })
        ] }),
        /* @__PURE__ */ e.jsx(F, {}),
        /* @__PURE__ */ e.jsxs(Qt, { children: [
          /* @__PURE__ */ e.jsx(ea, { children: "Find" }),
          /* @__PURE__ */ e.jsxs(ta, { children: [
            /* @__PURE__ */ e.jsx(f, { children: "Search the web" }),
            /* @__PURE__ */ e.jsx(F, {}),
            /* @__PURE__ */ e.jsx(f, { children: "Find..." }),
            /* @__PURE__ */ e.jsx(f, { children: "Find Next" }),
            /* @__PURE__ */ e.jsx(f, { children: "Find Previous" })
          ] })
        ] }),
        /* @__PURE__ */ e.jsx(F, {}),
        /* @__PURE__ */ e.jsx(f, { children: "Cut" }),
        /* @__PURE__ */ e.jsx(f, { children: "Copy" }),
        /* @__PURE__ */ e.jsx(f, { children: "Paste" })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs(ze, { children: [
      /* @__PURE__ */ e.jsx(Me, { children: "View" }),
      /* @__PURE__ */ e.jsxs(Ae, { children: [
        /* @__PURE__ */ e.jsx(Xt, { children: "Always Show Bookmarks Bar" }),
        /* @__PURE__ */ e.jsx(Xt, { checked: !0, children: "Always Show Full URLs" }),
        /* @__PURE__ */ e.jsx(F, {}),
        /* @__PURE__ */ e.jsxs(f, { inset: !0, children: [
          "Reload ",
          /* @__PURE__ */ e.jsx(X, { children: "⌘R" })
        ] }),
        /* @__PURE__ */ e.jsxs(f, { disabled: !0, inset: !0, children: [
          "Force Reload ",
          /* @__PURE__ */ e.jsx(X, { children: "⇧⌘R" })
        ] }),
        /* @__PURE__ */ e.jsx(F, {}),
        /* @__PURE__ */ e.jsx(f, { inset: !0, children: "Toggle Fullscreen" }),
        /* @__PURE__ */ e.jsx(F, {}),
        /* @__PURE__ */ e.jsx(f, { inset: !0, children: "Hide Sidebar" })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs(ze, { children: [
      /* @__PURE__ */ e.jsx(Me, { children: "Profiles" }),
      /* @__PURE__ */ e.jsxs(Ae, { children: [
        /* @__PURE__ */ e.jsxs(ys, { value: "benoit", children: [
          /* @__PURE__ */ e.jsx(jt, { value: "andy", children: "Andy" }),
          /* @__PURE__ */ e.jsx(jt, { value: "benoit", children: "Benoit" }),
          /* @__PURE__ */ e.jsx(jt, { value: "Luis", children: "Luis" })
        ] }),
        /* @__PURE__ */ e.jsx(F, {}),
        /* @__PURE__ */ e.jsx(f, { inset: !0, children: "Edit..." }),
        /* @__PURE__ */ e.jsx(F, {}),
        /* @__PURE__ */ e.jsx(f, { inset: !0, children: "Add Profile..." })
      ] })
    ] })
  ] });
}
const Ra = h(p);
function ni() {
  const { setTheme: t } = Oa();
  return /* @__PURE__ */ e.jsxs(ae, { children: [
    /* @__PURE__ */ e.jsx(se, { asChild: !0, children: /* @__PURE__ */ e.jsxs(l, { variant: "outline", size: "icon", children: [
      /* @__PURE__ */ e.jsx(Ra, { id: "Sun", className: "dark:-rotate-90 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:scale-0" }),
      /* @__PURE__ */ e.jsx(Ra, { id: "Moon", className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }),
      /* @__PURE__ */ e.jsx("span", { className: "sr-only", children: "Toggle theme" })
    ] }) }),
    /* @__PURE__ */ e.jsxs(ne, { align: "end", children: [
      /* @__PURE__ */ e.jsx(g, { onClick: () => t("light"), children: "Light" }),
      /* @__PURE__ */ e.jsx(g, { onClick: () => t("dark"), children: "Dark" }),
      /* @__PURE__ */ e.jsx(g, { onClick: () => t("system"), children: "System" })
    ] })
  ] });
}
const Gt = h(p), ri = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response."
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description: "For sighted users to preview content available behind a link."
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content."
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description: "A set of layered sections of content—known as tab panels—that are displayed one at a time."
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
  }
];
function ii() {
  return /* @__PURE__ */ e.jsx(Ss, { viewport: !1, children: /* @__PURE__ */ e.jsxs(ks, { children: [
    /* @__PURE__ */ e.jsxs(re, { children: [
      /* @__PURE__ */ e.jsx(fe, { children: "Home" }),
      /* @__PURE__ */ e.jsx(be, { children: /* @__PURE__ */ e.jsxs("ul", { className: "grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]", children: [
        /* @__PURE__ */ e.jsx("li", { className: "row-span-3", children: /* @__PURE__ */ e.jsx(M, { asChild: !0, children: /* @__PURE__ */ e.jsxs("a", { className: "flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-6 no-underline outline-hidden focus:shadow-md", href: "/", children: [
          /* @__PURE__ */ e.jsx("div", { className: "mt-4 mb-2 font-medium text-lg", children: "shadcn/ui" }),
          /* @__PURE__ */ e.jsx("p", { className: "text-muted-foreground text-sm leading-tight", children: "Beautifully designed components built with Tailwind CSS." })
        ] }) }) }),
        /* @__PURE__ */ e.jsx(ct, { href: "/docs", title: "Introduction", children: "Re-usable components built using Radix UI and Tailwind CSS." }),
        /* @__PURE__ */ e.jsx(ct, { href: "/docs/installation", title: "Installation", children: "How to install dependencies and structure your app." }),
        /* @__PURE__ */ e.jsx(ct, { href: "/docs/primitives/typography", title: "Typography", children: "Styles for headings, paragraphs, lists...etc" })
      ] }) })
    ] }),
    /* @__PURE__ */ e.jsxs(re, { children: [
      /* @__PURE__ */ e.jsx(fe, { children: "Components" }),
      /* @__PURE__ */ e.jsx(be, { children: /* @__PURE__ */ e.jsx("ul", { className: "grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]", children: ri.map((t) => /* @__PURE__ */ e.jsx(ct, { title: t.title, href: t.href, children: t.description }, t.title)) }) })
    ] }),
    /* @__PURE__ */ e.jsx(re, { children: /* @__PURE__ */ e.jsx(M, { asChild: !0, className: ja(), children: /* @__PURE__ */ e.jsx(b, { href: "/docs", children: "Docs" }) }) }),
    /* @__PURE__ */ e.jsxs(re, { children: [
      /* @__PURE__ */ e.jsx(fe, { children: "List" }),
      /* @__PURE__ */ e.jsx(be, { children: /* @__PURE__ */ e.jsx("ul", { className: "grid w-[300px] gap-4", children: /* @__PURE__ */ e.jsxs("li", { children: [
        /* @__PURE__ */ e.jsx(M, { asChild: !0, children: /* @__PURE__ */ e.jsxs(b, { href: "#", children: [
          /* @__PURE__ */ e.jsx("div", { className: "font-medium", children: "Components" }),
          /* @__PURE__ */ e.jsx("div", { className: "text-muted-foreground", children: "Browse all components in the library." })
        ] }) }),
        /* @__PURE__ */ e.jsx(M, { asChild: !0, children: /* @__PURE__ */ e.jsxs(b, { href: "#", children: [
          /* @__PURE__ */ e.jsx("div", { className: "font-medium", children: "Documentation" }),
          /* @__PURE__ */ e.jsx("div", { className: "text-muted-foreground", children: "Learn how to use the library." })
        ] }) }),
        /* @__PURE__ */ e.jsx(M, { asChild: !0, children: /* @__PURE__ */ e.jsxs(b, { href: "#", children: [
          /* @__PURE__ */ e.jsx("div", { className: "font-medium", children: "Blog" }),
          /* @__PURE__ */ e.jsx("div", { className: "text-muted-foreground", children: "Read our latest blog posts." })
        ] }) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ e.jsxs(re, { children: [
      /* @__PURE__ */ e.jsx(fe, { children: "Simple" }),
      /* @__PURE__ */ e.jsx(be, { children: /* @__PURE__ */ e.jsx("ul", { className: "grid w-[200px] gap-4", children: /* @__PURE__ */ e.jsxs("li", { children: [
        /* @__PURE__ */ e.jsx(M, { asChild: !0, children: /* @__PURE__ */ e.jsx(b, { href: "#", children: "Components" }) }),
        /* @__PURE__ */ e.jsx(M, { asChild: !0, children: /* @__PURE__ */ e.jsx(b, { href: "#", children: "Documentation" }) }),
        /* @__PURE__ */ e.jsx(M, { asChild: !0, children: /* @__PURE__ */ e.jsx(b, { href: "#", children: "Blocks" }) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ e.jsxs(re, { children: [
      /* @__PURE__ */ e.jsx(fe, { children: "With Icon" }),
      /* @__PURE__ */ e.jsx(be, { children: /* @__PURE__ */ e.jsx("ul", { className: "grid w-[200px] gap-4", children: /* @__PURE__ */ e.jsxs("li", { children: [
        /* @__PURE__ */ e.jsx(M, { asChild: !0, children: /* @__PURE__ */ e.jsxs(b, { href: "#", className: "flex-row items-center gap-2", children: [
          /* @__PURE__ */ e.jsx(Gt, { id: "CircleQuestionMark" }),
          "Backlog"
        ] }) }),
        /* @__PURE__ */ e.jsx(M, { asChild: !0, children: /* @__PURE__ */ e.jsxs(b, { href: "#", className: "flex-row items-center gap-2", children: [
          /* @__PURE__ */ e.jsx(Gt, { id: "Circle" }),
          "To Do"
        ] }) }),
        /* @__PURE__ */ e.jsx(M, { asChild: !0, children: /* @__PURE__ */ e.jsxs(b, { href: "#", className: "flex-row items-center gap-2", children: [
          /* @__PURE__ */ e.jsx(Gt, { id: "CircleCheck" }),
          "Done"
        ] }) })
      ] }) }) })
    ] })
  ] }) });
}
function ct({ title: t, children: a, href: s, ...r }) {
  return /* @__PURE__ */ e.jsx("li", { ...r, children: /* @__PURE__ */ e.jsx(M, { asChild: !0, children: /* @__PURE__ */ e.jsxs(b, { href: s, children: [
    /* @__PURE__ */ e.jsx("div", { className: "font-medium text-sm leading-none", children: t }),
    /* @__PURE__ */ e.jsx("p", { className: "line-clamp-2 text-muted-foreground text-sm leading-snug", children: a })
  ] }) }) });
}
function oi() {
  return /* @__PURE__ */ e.jsx(Ts, { children: /* @__PURE__ */ e.jsxs(Ds, { children: [
    /* @__PURE__ */ e.jsx(ie, { children: /* @__PURE__ */ e.jsx(Is, { href: "#" }) }),
    /* @__PURE__ */ e.jsx(ie, { children: /* @__PURE__ */ e.jsx(we, { href: "#", children: "1" }) }),
    /* @__PURE__ */ e.jsx(ie, { children: /* @__PURE__ */ e.jsx(we, { href: "#", isActive: !0, children: "2" }) }),
    /* @__PURE__ */ e.jsx(ie, { children: /* @__PURE__ */ e.jsx(we, { href: "#", children: "3" }) }),
    /* @__PURE__ */ e.jsx(ie, { children: /* @__PURE__ */ e.jsx(Ms, {}) }),
    /* @__PURE__ */ e.jsx(ie, { children: /* @__PURE__ */ e.jsx(zs, { href: "#" }) })
  ] }) });
}
function li() {
  return /* @__PURE__ */ e.jsxs(Qe, { children: [
    /* @__PURE__ */ e.jsx(et, { asChild: !0, children: /* @__PURE__ */ e.jsx(l, { variant: "outline", children: "Open popover" }) }),
    /* @__PURE__ */ e.jsx(tt, { className: "w-80", children: /* @__PURE__ */ e.jsxs("div", { className: "grid gap-4", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ e.jsx("h4", { className: "font-medium leading-none", children: "Dimensions" }),
        /* @__PURE__ */ e.jsx("p", { className: "text-muted-foreground text-sm", children: "Set the dimensions for the layer." })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-3 items-center gap-4", children: [
          /* @__PURE__ */ e.jsx(x, { htmlFor: "width", children: "Width" }),
          /* @__PURE__ */ e.jsx(j, { id: "width", defaultValue: "100%", className: "col-span-2 h-8" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-3 items-center gap-4", children: [
          /* @__PURE__ */ e.jsx(x, { htmlFor: "maxWidth", children: "Max. width" }),
          /* @__PURE__ */ e.jsx(j, { id: "maxWidth", defaultValue: "300px", className: "col-span-2 h-8" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-3 items-center gap-4", children: [
          /* @__PURE__ */ e.jsx(x, { htmlFor: "height", children: "Height" }),
          /* @__PURE__ */ e.jsx(j, { id: "height", defaultValue: "25px", className: "col-span-2 h-8" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-3 items-center gap-4", children: [
          /* @__PURE__ */ e.jsx(x, { htmlFor: "maxHeight", children: "Max. height" }),
          /* @__PURE__ */ e.jsx(j, { id: "maxHeight", defaultValue: "none", className: "col-span-2 h-8" })
        ] })
      ] })
    ] }) })
  ] });
}
function di() {
  const [t, a] = u.useState(13);
  return u.useEffect(() => {
    const s = setTimeout(() => a(66), 500);
    return () => clearTimeout(s);
  }, []), /* @__PURE__ */ e.jsx(hn, { value: t, className: "w-[60%]" });
}
function ci() {
  return /* @__PURE__ */ e.jsxs(ba, { defaultValue: "comfortable", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ e.jsx(me, { value: "default", id: "r1" }),
      /* @__PURE__ */ e.jsx(x, { htmlFor: "r1", children: "Default" })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ e.jsx(me, { value: "comfortable", id: "r2" }),
      /* @__PURE__ */ e.jsx(x, { htmlFor: "r2", children: "Comfortable" })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ e.jsx(me, { value: "compact", id: "r3" }),
      /* @__PURE__ */ e.jsx(x, { htmlFor: "r3", children: "Compact" })
    ] })
  ] });
}
function ui() {
  function t(a) {
    a.preventDefault();
    const r = new FormData(a.currentTarget).get("type");
    K("You submitted the following values", {
      description: /* @__PURE__ */ e.jsx("pre", { className: "mt-2 w-[320px] rounded-md bg-neutral-950 p-4", children: /* @__PURE__ */ e.jsx("code", { className: "text-white", children: JSON.stringify({ type: r }, null, 2) }) })
    });
  }
  return /* @__PURE__ */ e.jsxs(Y, { onSubmit: t, className: "w-2/3 space-y-6", children: [
    /* @__PURE__ */ e.jsx(O, { name: "type", children: /* @__PURE__ */ e.jsxs(I, { className: "space-y-3", children: [
      /* @__PURE__ */ e.jsx(z, { children: "Notify me about..." }),
      /* @__PURE__ */ e.jsx(A, { children: /* @__PURE__ */ e.jsxs(ba, { name: "type", className: "flex flex-col", children: [
        /* @__PURE__ */ e.jsxs(I, { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ e.jsx(A, { children: /* @__PURE__ */ e.jsx(me, { value: "all" }) }),
          /* @__PURE__ */ e.jsx(z, { className: "font-normal", children: "All new messages" })
        ] }),
        /* @__PURE__ */ e.jsxs(I, { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ e.jsx(A, { children: /* @__PURE__ */ e.jsx(me, { value: "mentions" }) }),
          /* @__PURE__ */ e.jsx(z, { className: "font-normal", children: "Direct messages and mentions" })
        ] }),
        /* @__PURE__ */ e.jsxs(I, { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ e.jsx(A, { children: /* @__PURE__ */ e.jsx(me, { value: "none" }) }),
          /* @__PURE__ */ e.jsx(z, { className: "font-normal", children: "Nothing" })
        ] })
      ] }) }),
      /* @__PURE__ */ e.jsx(je, {})
    ] }) }),
    /* @__PURE__ */ e.jsx(l, { type: "submit", children: "Submit" })
  ] });
}
const xi = Array.from({ length: 50 }).map((t, a, s) => `v1.2.0-beta.${s.length - a}`);
function mi() {
  return /* @__PURE__ */ e.jsx(va, { className: "h-72 w-48 rounded-md border", children: /* @__PURE__ */ e.jsxs("div", { className: "p-4", children: [
    /* @__PURE__ */ e.jsx("h4", { className: "mb-4 font-medium text-sm leading-none", children: "Tags" }),
    xi.map((t) => /* @__PURE__ */ e.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ e.jsx("div", { className: "text-sm", children: t }),
      /* @__PURE__ */ e.jsx($e, { className: "my-2" })
    ] }, t))
  ] }) });
}
const hi = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80"
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80"
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"
  }
];
function pi() {
  return /* @__PURE__ */ e.jsxs(va, { className: "w-96 whitespace-nowrap rounded-md border", children: [
    /* @__PURE__ */ e.jsx("div", { className: "flex w-max space-x-4 p-4", children: hi.map((t) => /* @__PURE__ */ e.jsxs("figure", { className: "shrink-0", children: [
      /* @__PURE__ */ e.jsx("div", { className: "overflow-hidden rounded-md", children: /* @__PURE__ */ e.jsx(La, { src: t.art, alt: `Photo by ${t.artist}`, className: "aspect-[3/4] h-fit w-fit object-cover", width: 300, height: 400 }) }),
      /* @__PURE__ */ e.jsxs("figcaption", { className: "pt-2 text-muted-foreground text-xs", children: [
        "Photo by ",
        /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-foreground", children: t.artist })
      ] })
    ] }, t.artist)) }),
    /* @__PURE__ */ e.jsx(wa, { orientation: "horizontal" })
  ] });
}
function gi() {
  return /* @__PURE__ */ e.jsxs(at, { children: [
    /* @__PURE__ */ e.jsx(nt, { className: "w-[180px]", children: /* @__PURE__ */ e.jsx(st, { placeholder: "Select a fruit" }) }),
    /* @__PURE__ */ e.jsx(rt, { children: /* @__PURE__ */ e.jsxs(ue, { children: [
      /* @__PURE__ */ e.jsx(xe, { children: "Fruits" }),
      /* @__PURE__ */ e.jsx(c, { value: "apple", children: "Apple" }),
      /* @__PURE__ */ e.jsx(c, { value: "banana", children: "Banana" }),
      /* @__PURE__ */ e.jsx(c, { value: "blueberry", children: "Blueberry" }),
      /* @__PURE__ */ e.jsx(c, { value: "grapes", children: "Grapes" }),
      /* @__PURE__ */ e.jsx(c, { value: "pineapple", children: "Pineapple" })
    ] }) })
  ] });
}
function ji() {
  function t(a) {
    a.preventDefault();
    const r = new FormData(a.currentTarget).get("email");
    K("You submitted the following values", {
      description: /* @__PURE__ */ e.jsx("pre", { className: "mt-2 w-[320px] rounded-md bg-neutral-950 p-4", children: /* @__PURE__ */ e.jsx("code", { className: "text-white", children: JSON.stringify({ email: r }, null, 2) }) })
    });
  }
  return /* @__PURE__ */ e.jsxs(Y, { onSubmit: t, className: "w-2/3 space-y-6", children: [
    /* @__PURE__ */ e.jsx(O, { name: "email", children: /* @__PURE__ */ e.jsxs(I, { children: [
      /* @__PURE__ */ e.jsx(z, { children: "Email" }),
      /* @__PURE__ */ e.jsxs(at, { name: "email", children: [
        /* @__PURE__ */ e.jsx(A, { children: /* @__PURE__ */ e.jsx(nt, { children: /* @__PURE__ */ e.jsx(st, { placeholder: "Select a verified email to display" }) }) }),
        /* @__PURE__ */ e.jsxs(rt, { children: [
          /* @__PURE__ */ e.jsx(c, { value: "joe@example.com", children: "joe@example.com" }),
          /* @__PURE__ */ e.jsx(c, { value: "joe@google.com", children: "joe@google.com" }),
          /* @__PURE__ */ e.jsx(c, { value: "joe@support.com", children: "joe@support.com" })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs(W, { children: [
        "You can manage email addresses in your ",
        /* @__PURE__ */ e.jsx(b, { href: "/examples/forms", children: "email settings" }),
        "."
      ] }),
      /* @__PURE__ */ e.jsx(je, {})
    ] }) }),
    /* @__PURE__ */ e.jsx(l, { type: "submit", children: "Submit" })
  ] });
}
function fi() {
  return /* @__PURE__ */ e.jsxs(at, { children: [
    /* @__PURE__ */ e.jsx(nt, { className: "w-[280px]", children: /* @__PURE__ */ e.jsx(st, { placeholder: "Select a timezone" }) }),
    /* @__PURE__ */ e.jsxs(rt, { children: [
      /* @__PURE__ */ e.jsxs(ue, { children: [
        /* @__PURE__ */ e.jsx(xe, { children: "North America" }),
        /* @__PURE__ */ e.jsx(c, { value: "est", children: "Eastern Standard Time (EST)" }),
        /* @__PURE__ */ e.jsx(c, { value: "cst", children: "Central Standard Time (CST)" }),
        /* @__PURE__ */ e.jsx(c, { value: "mst", children: "Mountain Standard Time (MST)" }),
        /* @__PURE__ */ e.jsx(c, { value: "pst", children: "Pacific Standard Time (PST)" }),
        /* @__PURE__ */ e.jsx(c, { value: "akst", children: "Alaska Standard Time (AKST)" }),
        /* @__PURE__ */ e.jsx(c, { value: "hst", children: "Hawaii Standard Time (HST)" })
      ] }),
      /* @__PURE__ */ e.jsxs(ue, { children: [
        /* @__PURE__ */ e.jsx(xe, { children: "Europe & Africa" }),
        /* @__PURE__ */ e.jsx(c, { value: "gmt", children: "Greenwich Mean Time (GMT)" }),
        /* @__PURE__ */ e.jsx(c, { value: "cet", children: "Central European Time (CET)" }),
        /* @__PURE__ */ e.jsx(c, { value: "eet", children: "Eastern European Time (EET)" }),
        /* @__PURE__ */ e.jsx(c, { value: "west", children: "Western European Summer Time (WEST)" }),
        /* @__PURE__ */ e.jsx(c, { value: "cat", children: "Central Africa Time (CAT)" }),
        /* @__PURE__ */ e.jsx(c, { value: "eat", children: "East Africa Time (EAT)" })
      ] }),
      /* @__PURE__ */ e.jsxs(ue, { children: [
        /* @__PURE__ */ e.jsx(xe, { children: "Asia" }),
        /* @__PURE__ */ e.jsx(c, { value: "msk", children: "Moscow Time (MSK)" }),
        /* @__PURE__ */ e.jsx(c, { value: "ist", children: "India Standard Time (IST)" }),
        /* @__PURE__ */ e.jsx(c, { value: "cst_china", children: "China Standard Time (CST)" }),
        /* @__PURE__ */ e.jsx(c, { value: "jst", children: "Japan Standard Time (JST)" }),
        /* @__PURE__ */ e.jsx(c, { value: "kst", children: "Korea Standard Time (KST)" }),
        /* @__PURE__ */ e.jsx(c, { value: "ist_indonesia", children: "Indonesia Central Standard Time (WITA)" })
      ] }),
      /* @__PURE__ */ e.jsxs(ue, { children: [
        /* @__PURE__ */ e.jsx(xe, { children: "Australia & Pacific" }),
        /* @__PURE__ */ e.jsx(c, { value: "awst", children: "Australian Western Standard Time (AWST)" }),
        /* @__PURE__ */ e.jsx(c, { value: "acst", children: "Australian Central Standard Time (ACST)" }),
        /* @__PURE__ */ e.jsx(c, { value: "aest", children: "Australian Eastern Standard Time (AEST)" }),
        /* @__PURE__ */ e.jsx(c, { value: "nzst", children: "New Zealand Standard Time (NZST)" }),
        /* @__PURE__ */ e.jsx(c, { value: "fjt", children: "Fiji Time (FJT)" })
      ] }),
      /* @__PURE__ */ e.jsxs(ue, { children: [
        /* @__PURE__ */ e.jsx(xe, { children: "South America" }),
        /* @__PURE__ */ e.jsx(c, { value: "art", children: "Argentina Time (ART)" }),
        /* @__PURE__ */ e.jsx(c, { value: "bot", children: "Bolivia Time (BOT)" }),
        /* @__PURE__ */ e.jsx(c, { value: "brt", children: "Brasilia Time (BRT)" }),
        /* @__PURE__ */ e.jsx(c, { value: "clt", children: "Chile Standard Time (CLT)" })
      ] })
    ] })
  ] });
}
function bi() {
  return /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ e.jsx("h4", { className: "font-medium text-sm leading-none", children: "Radix Primitives" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-muted-foreground text-sm", children: "An open-source UI component library." })
    ] }),
    /* @__PURE__ */ e.jsx($e, { className: "my-4" }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex h-5 items-center space-x-4 text-sm", children: [
      /* @__PURE__ */ e.jsx("div", { children: "Blog" }),
      /* @__PURE__ */ e.jsx($e, { orientation: "vertical" }),
      /* @__PURE__ */ e.jsx("div", { children: "Docs" }),
      /* @__PURE__ */ e.jsx($e, { orientation: "vertical" }),
      /* @__PURE__ */ e.jsx("div", { children: "Source" })
    ] })
  ] });
}
function vi() {
  return /* @__PURE__ */ e.jsxs(It, { children: [
    /* @__PURE__ */ e.jsx(Na, { asChild: !0, children: /* @__PURE__ */ e.jsx(l, { variant: "outline", children: "Open" }) }),
    /* @__PURE__ */ e.jsxs(zt, { children: [
      /* @__PURE__ */ e.jsxs(Mt, { children: [
        /* @__PURE__ */ e.jsx(At, { children: "Edit profile" }),
        /* @__PURE__ */ e.jsx(Bt, { children: "Make changes to your profile here. Click save when you're done." })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "grid flex-1 auto-rows-min gap-6 px-4", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "grid gap-3", children: [
          /* @__PURE__ */ e.jsx(x, { htmlFor: "sheet-demo-name", children: "Name" }),
          /* @__PURE__ */ e.jsx(j, { id: "sheet-demo-name", defaultValue: "Pedro Duarte" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "grid gap-3", children: [
          /* @__PURE__ */ e.jsx(x, { htmlFor: "sheet-demo-username", children: "Username" }),
          /* @__PURE__ */ e.jsx(j, { id: "sheet-demo-username", defaultValue: "@peduarte" })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs(Sa, { children: [
        /* @__PURE__ */ e.jsx(l, { type: "submit", children: "Save changes" }),
        /* @__PURE__ */ e.jsx(ya, { asChild: !0, children: /* @__PURE__ */ e.jsx(l, { variant: "outline", children: "Close" }) })
      ] })
    ] })
  ] });
}
const wi = ["top", "right", "bottom", "left"];
function Ni() {
  return /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-2 gap-2", children: wi.map((t) => /* @__PURE__ */ e.jsxs(It, { children: [
    /* @__PURE__ */ e.jsx(Na, { asChild: !0, children: /* @__PURE__ */ e.jsx(l, { variant: "outline", children: t }) }),
    /* @__PURE__ */ e.jsxs(zt, { side: t, children: [
      /* @__PURE__ */ e.jsxs(Mt, { children: [
        /* @__PURE__ */ e.jsx(At, { children: "Edit profile" }),
        /* @__PURE__ */ e.jsx(Bt, { children: "Make changes to your profile here. Click save when you're done." })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "grid gap-4 py-4", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-4 items-center gap-4", children: [
          /* @__PURE__ */ e.jsx(x, { htmlFor: "name", className: "text-right", children: "Name" }),
          /* @__PURE__ */ e.jsx(j, { id: "name", value: "Pedro Duarte", className: "col-span-3" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-4 items-center gap-4", children: [
          /* @__PURE__ */ e.jsx(x, { htmlFor: "username", className: "text-right", children: "Username" }),
          /* @__PURE__ */ e.jsx(j, { id: "username", value: "@peduarte", className: "col-span-3" })
        ] })
      ] }),
      /* @__PURE__ */ e.jsx(Sa, { children: /* @__PURE__ */ e.jsx(ya, { asChild: !0, children: /* @__PURE__ */ e.jsx(l, { type: "submit", children: "Save changes" }) }) })
    ] })
  ] }, t)) });
}
function yi() {
  return /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col space-y-3", children: [
    /* @__PURE__ */ e.jsx(ee, { className: "h-[125px] w-[250px] rounded-xl" }),
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ e.jsx(ee, { className: "h-4 w-[250px]" }),
      /* @__PURE__ */ e.jsx(ee, { className: "h-4 w-[200px]" })
    ] })
  ] });
}
function Si() {
  return /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-4", children: [
    /* @__PURE__ */ e.jsx(ee, { className: "h-12 w-12 rounded-full" }),
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ e.jsx(ee, { className: "h-4 w-[250px]" }),
      /* @__PURE__ */ e.jsx(ee, { className: "h-4 w-[200px]" })
    ] })
  ] });
}
function ki({ className: t, ...a }) {
  return /* @__PURE__ */ e.jsx(Yn, { defaultValue: [50], max: 100, step: 1, className: Js("w-[60%]", t), ...a });
}
function Ci() {
  return /* @__PURE__ */ e.jsx(
    l,
    {
      variant: "outline",
      onClick: () => K("Event has been created", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo")
        }
      }),
      children: "Show Toast"
    }
  );
}
function Ti() {
  return /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
    /* @__PURE__ */ e.jsx(aa, { id: "airplane-mode" }),
    /* @__PURE__ */ e.jsx(x, { htmlFor: "airplane-mode", children: "Airplane Mode" })
  ] });
}
function Di() {
  const [t, a] = u.useState(!1), [s, r] = u.useState(!0);
  function o(d) {
    d.preventDefault();
    const v = new FormData(d.currentTarget), T = v.has("marketing_emails"), $ = v.has("security_emails");
    K("You submitted the following values", {
      description: /* @__PURE__ */ e.jsx("pre", { className: "mt-2 w-[320px] rounded-md bg-neutral-950 p-4", children: /* @__PURE__ */ e.jsx("code", { className: "text-white", children: JSON.stringify({ marketing_emails: T, security_emails: $ }, null, 2) }) })
    });
  }
  return /* @__PURE__ */ e.jsxs(Y, { onSubmit: o, className: "w-full space-y-6", children: [
    /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("h3", { className: "mb-4 font-medium text-lg", children: "Email Notifications" }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ e.jsx(O, { name: "marketing_emails", children: /* @__PURE__ */ e.jsxs(I, { className: "flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-0.5", children: [
            /* @__PURE__ */ e.jsx(z, { children: "Marketing emails" }),
            /* @__PURE__ */ e.jsx(W, { children: "Receive emails about new products, features, and more." })
          ] }),
          /* @__PURE__ */ e.jsx(A, { children: /* @__PURE__ */ e.jsx(aa, { name: "marketing_emails", checked: t, onCheckedChange: a }) })
        ] }) }),
        /* @__PURE__ */ e.jsx(O, { name: "security_emails", children: /* @__PURE__ */ e.jsxs(I, { className: "flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-0.5", children: [
            /* @__PURE__ */ e.jsx(z, { children: "Security emails" }),
            /* @__PURE__ */ e.jsx(W, { children: "Receive emails about your account security." })
          ] }),
          /* @__PURE__ */ e.jsx(A, { children: /* @__PURE__ */ e.jsx(aa, { name: "security_emails", checked: s, onCheckedChange: r, disabled: !0, "aria-readonly": !0 }) })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx(l, { type: "submit", children: "Submit" })
  ] });
}
const Ii = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card"
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal"
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer"
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card"
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal"
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer"
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card"
  }
];
function zi() {
  return /* @__PURE__ */ e.jsxs(Ps, { children: [
    /* @__PURE__ */ e.jsx(Es, { children: "A list of your recent invoices." }),
    /* @__PURE__ */ e.jsx(Fs, { children: /* @__PURE__ */ e.jsxs(ft, { children: [
      /* @__PURE__ */ e.jsx(Be, { className: "w-[100px]", children: "Invoice" }),
      /* @__PURE__ */ e.jsx(Be, { children: "Status" }),
      /* @__PURE__ */ e.jsx(Be, { children: "Method" }),
      /* @__PURE__ */ e.jsx(Be, { className: "text-right", children: "Amount" })
    ] }) }),
    /* @__PURE__ */ e.jsx($s, { children: Ii.map((t) => /* @__PURE__ */ e.jsxs(ft, { children: [
      /* @__PURE__ */ e.jsx(oe, { className: "font-medium", children: t.invoice }),
      /* @__PURE__ */ e.jsx(oe, { children: t.paymentStatus }),
      /* @__PURE__ */ e.jsx(oe, { children: t.paymentMethod }),
      /* @__PURE__ */ e.jsx(oe, { className: "text-right", children: t.totalAmount })
    ] }, t.invoice)) }),
    /* @__PURE__ */ e.jsx(Rs, { children: /* @__PURE__ */ e.jsxs(ft, { children: [
      /* @__PURE__ */ e.jsx(oe, { colSpan: 3, children: "Total" }),
      /* @__PURE__ */ e.jsx(oe, { className: "text-right", children: "$2,500.00" })
    ] }) })
  ] });
}
function Mi() {
  return /* @__PURE__ */ e.jsx("div", { className: "flex w-full max-w-sm flex-col gap-6", children: /* @__PURE__ */ e.jsxs(Os, { defaultValue: "account", children: [
    /* @__PURE__ */ e.jsxs(Ls, { children: [
      /* @__PURE__ */ e.jsx(sa, { value: "account", children: "Account" }),
      /* @__PURE__ */ e.jsx(sa, { value: "password", children: "Password" })
    ] }),
    /* @__PURE__ */ e.jsx(na, { value: "account", children: /* @__PURE__ */ e.jsxs(Oe, { children: [
      /* @__PURE__ */ e.jsxs(Le, { children: [
        /* @__PURE__ */ e.jsx(Ge, { children: "Account" }),
        /* @__PURE__ */ e.jsx(He, { children: "Make changes to your account here. Click save when you're done." })
      ] }),
      /* @__PURE__ */ e.jsxs(Ve, { className: "grid gap-6", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "grid gap-3", children: [
          /* @__PURE__ */ e.jsx(x, { htmlFor: "tabs-demo-name", children: "Name" }),
          /* @__PURE__ */ e.jsx(j, { id: "tabs-demo-name", defaultValue: "Pedro Duarte" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "grid gap-3", children: [
          /* @__PURE__ */ e.jsx(x, { htmlFor: "tabs-demo-username", children: "Username" }),
          /* @__PURE__ */ e.jsx(j, { id: "tabs-demo-username", defaultValue: "@peduarte" })
        ] })
      ] }),
      /* @__PURE__ */ e.jsx(We, { children: /* @__PURE__ */ e.jsx(l, { children: "Save changes" }) })
    ] }) }),
    /* @__PURE__ */ e.jsx(na, { value: "password", children: /* @__PURE__ */ e.jsxs(Oe, { children: [
      /* @__PURE__ */ e.jsxs(Le, { children: [
        /* @__PURE__ */ e.jsx(Ge, { children: "Password" }),
        /* @__PURE__ */ e.jsx(He, { children: "Change your password here. After saving, you'll be logged out." })
      ] }),
      /* @__PURE__ */ e.jsxs(Ve, { className: "grid gap-6", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "grid gap-3", children: [
          /* @__PURE__ */ e.jsx(x, { htmlFor: "tabs-demo-current", children: "Current password" }),
          /* @__PURE__ */ e.jsx(j, { id: "tabs-demo-current", type: "password" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "grid gap-3", children: [
          /* @__PURE__ */ e.jsx(x, { htmlFor: "tabs-demo-new", children: "New password" }),
          /* @__PURE__ */ e.jsx(j, { id: "tabs-demo-new", type: "password" })
        ] })
      ] }),
      /* @__PURE__ */ e.jsx(We, { children: /* @__PURE__ */ e.jsx(l, { children: "Save password" }) })
    ] }) })
  ] }) });
}
function Ai() {
  return /* @__PURE__ */ e.jsx(Te, { placeholder: "Type your message here." });
}
function Bi() {
  return /* @__PURE__ */ e.jsx(Te, { placeholder: "Type your message here.", disabled: !0 });
}
function _i() {
  function t(a) {
    a.preventDefault();
    const r = new FormData(a.currentTarget).get("bio");
    K("You submitted the following values", {
      description: /* @__PURE__ */ e.jsx("pre", { className: "mt-2 w-[320px] rounded-md bg-neutral-950 p-4", children: /* @__PURE__ */ e.jsx("code", { className: "text-white", children: JSON.stringify({ bio: r }, null, 2) }) })
    });
  }
  return /* @__PURE__ */ e.jsxs(Y, { onSubmit: t, className: "w-2/3 space-y-6", children: [
    /* @__PURE__ */ e.jsx(O, { name: "bio", children: /* @__PURE__ */ e.jsxs(I, { children: [
      /* @__PURE__ */ e.jsx(z, { children: "Bio" }),
      /* @__PURE__ */ e.jsx(A, { children: /* @__PURE__ */ e.jsx(Te, { name: "bio", placeholder: "Tell us a little bit about yourself", className: "resize-none" }) }),
      /* @__PURE__ */ e.jsxs(W, { children: [
        "You can ",
        /* @__PURE__ */ e.jsx("span", { children: "@mention" }),
        " other users and organizations."
      ] }),
      /* @__PURE__ */ e.jsx(je, {})
    ] }) }),
    /* @__PURE__ */ e.jsx(l, { type: "submit", children: "Submit" })
  ] });
}
function Pi() {
  return /* @__PURE__ */ e.jsxs("div", { className: "grid w-full gap-2", children: [
    /* @__PURE__ */ e.jsx(Te, { placeholder: "Type your message here." }),
    /* @__PURE__ */ e.jsx(l, { children: "Send message" })
  ] });
}
function Fi() {
  return /* @__PURE__ */ e.jsxs("div", { className: "grid w-full gap-3", children: [
    /* @__PURE__ */ e.jsx(x, { htmlFor: "message", children: "Your message" }),
    /* @__PURE__ */ e.jsx(Te, { placeholder: "Type your message here.", id: "message" })
  ] });
}
function $i() {
  return /* @__PURE__ */ e.jsxs("div", { className: "grid w-full gap-3", children: [
    /* @__PURE__ */ e.jsx(x, { htmlFor: "message-2", children: "Your Message" }),
    /* @__PURE__ */ e.jsx(Te, { placeholder: "Type your message here.", id: "message-2" }),
    /* @__PURE__ */ e.jsx("p", { className: "text-muted-foreground text-sm", children: "Your message will be copied to the support team." })
  ] });
}
const P = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='0'%20height='0'%3e%3cdefs%3e%3csymbol%20class='lucide%20lucide-app-window'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20id='AppWindow'%3e%3crect%20x='2'%20y='4'%20width='20'%20height='16'%20rx='2'%20%3e%3c/rect%3e%3cpath%20d='M10%204v4'%20%3e%3c/path%3e%3cpath%20d='M2%208h20'%20%3e%3c/path%3e%3cpath%20d='M6%204v4'%20%3e%3c/path%3e%3c/symbol%3e%3csymbol%20class='lucide%20lucide-bold'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20id='Bold'%3e%3cpath%20d='M6%2012h9a4%204%200%200%201%200%208H7a1%201%200%200%201-1-1V5a1%201%200%200%201%201-1h7a4%204%200%200%201%200%208'%20%3e%3c/path%3e%3c/symbol%3e%3csymbol%20class='lucide%20lucide-file-code-2'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20id='FileCode2'%3e%3cpath%20d='M4%2022h14a2%202%200%200%200%202-2V7l-5-5H6a2%202%200%200%200-2%202v4'%20%3e%3c/path%3e%3cpath%20d='M14%202v4a2%202%200%200%200%202%202h4'%20%3e%3c/path%3e%3cpath%20d='m5%2012-3%203%203%203'%20%3e%3c/path%3e%3cpath%20d='m9%2018%203-3-3-3'%20%3e%3c/path%3e%3c/symbol%3e%3csymbol%20class='lucide%20lucide-italic'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20id='Italic'%3e%3cline%20x1='19'%20x2='10'%20y1='4'%20y2='4'%20%3e%3c/line%3e%3cline%20x1='14'%20x2='5'%20y1='20'%20y2='20'%20%3e%3c/line%3e%3cline%20x1='15'%20x2='9'%20y1='4'%20y2='20'%20%3e%3c/line%3e%3c/symbol%3e%3csymbol%20class='lucide%20lucide-popcorn'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20id='Popcorn'%3e%3cpath%20d='M18%208a2%202%200%200%200%200-4%202%202%200%200%200-4%200%202%202%200%200%200-4%200%202%202%200%200%200-4%200%202%202%200%200%200%200%204'%20%3e%3c/path%3e%3cpath%20d='M10%2022%209%208'%20%3e%3c/path%3e%3cpath%20d='m14%2022%201-14'%20%3e%3c/path%3e%3cpath%20d='M20%208c.5%200%20.9.4.8%201l-2.6%2012c-.1.5-.7%201-1.2%201H7c-.6%200-1.1-.4-1.2-1L3.2%209c-.1-.6.3-1%20.8-1Z'%20%3e%3c/path%3e%3c/symbol%3e%3csymbol%20class='lucide%20lucide-underline'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20id='Underline'%3e%3cpath%20d='M6%204v6a6%206%200%200%200%2012%200V4'%20%3e%3c/path%3e%3cline%20x1='4'%20x2='20'%20y1='20'%20y2='20'%20%3e%3c/line%3e%3c/symbol%3e%3c/defs%3e%3c/svg%3e", Ri = h(P);
function Ei() {
  return /* @__PURE__ */ e.jsx(pe, { "aria-label": "Toggle italic", children: /* @__PURE__ */ e.jsx(Ri, { id: "Bold", className: "h-4 w-4" }) });
}
const Oi = h(P);
function Li() {
  return /* @__PURE__ */ e.jsx(pe, { "aria-label": "Toggle italic", disabled: !0, children: /* @__PURE__ */ e.jsx(Oi, { id: "Underline", className: "h-4 w-4" }) });
}
const Ht = h(P);
function Gi() {
  return /* @__PURE__ */ e.jsxs(ge, { variant: "outline", type: "multiple", children: [
    /* @__PURE__ */ e.jsx(w, { value: "bold", "aria-label": "Toggle bold", children: /* @__PURE__ */ e.jsx(Ht, { id: "Bold", className: "h-4 w-4" }) }),
    /* @__PURE__ */ e.jsx(w, { value: "italic", "aria-label": "Toggle italic", children: /* @__PURE__ */ e.jsx(Ht, { id: "Italic", className: "h-4 w-4" }) }),
    /* @__PURE__ */ e.jsx(w, { value: "strikethrough", "aria-label": "Toggle strikethrough", children: /* @__PURE__ */ e.jsx(Ht, { id: "Underline", className: "h-4 w-4" }) })
  ] });
}
const Vt = h(P);
function Hi() {
  return /* @__PURE__ */ e.jsxs(ge, { type: "multiple", disabled: !0, children: [
    /* @__PURE__ */ e.jsx(w, { value: "bold", "aria-label": "Toggle bold", children: /* @__PURE__ */ e.jsx(Vt, { id: "Bold", className: "h-4 w-4" }) }),
    /* @__PURE__ */ e.jsx(w, { value: "italic", "aria-label": "Toggle italic", children: /* @__PURE__ */ e.jsx(Vt, { id: "Italic", className: "h-4 w-4" }) }),
    /* @__PURE__ */ e.jsx(w, { value: "strikethrough", "aria-label": "Toggle strikethrough", children: /* @__PURE__ */ e.jsx(Vt, { id: "Underline", className: "h-4 w-4" }) })
  ] });
}
const Wt = h(P);
function Vi() {
  return /* @__PURE__ */ e.jsxs(ge, { type: "multiple", size: "lg", children: [
    /* @__PURE__ */ e.jsx(w, { value: "bold", "aria-label": "Toggle bold", children: /* @__PURE__ */ e.jsx(Wt, { id: "Bold", className: "h-4 w-4" }) }),
    /* @__PURE__ */ e.jsx(w, { value: "italic", "aria-label": "Toggle italic", children: /* @__PURE__ */ e.jsx(Wt, { id: "Italic", className: "h-4 w-4" }) }),
    /* @__PURE__ */ e.jsx(w, { value: "strikethrough", "aria-label": "Toggle strikethrough", children: /* @__PURE__ */ e.jsx(Wt, { id: "Underline", className: "h-4 w-4" }) })
  ] });
}
const Ut = h(P);
function Wi() {
  return /* @__PURE__ */ e.jsxs(ge, { type: "multiple", variant: "outline", children: [
    /* @__PURE__ */ e.jsx(w, { value: "bold", "aria-label": "Toggle bold", children: /* @__PURE__ */ e.jsx(Ut, { id: "Bold", className: "h-4 w-4" }) }),
    /* @__PURE__ */ e.jsx(w, { value: "italic", "aria-label": "Toggle italic", children: /* @__PURE__ */ e.jsx(Ut, { id: "Italic", className: "h-4 w-4" }) }),
    /* @__PURE__ */ e.jsx(w, { value: "strikethrough", "aria-label": "Toggle strikethrough", children: /* @__PURE__ */ e.jsx(Ut, { id: "Underline", className: "h-4 w-4" }) })
  ] });
}
const Jt = h(P);
function Ui() {
  return /* @__PURE__ */ e.jsxs(ge, { type: "single", children: [
    /* @__PURE__ */ e.jsx(w, { value: "bold", "aria-label": "Toggle bold", children: /* @__PURE__ */ e.jsx(Jt, { id: "Bold", className: "h-4 w-4" }) }),
    /* @__PURE__ */ e.jsx(w, { value: "italic", "aria-label": "Toggle italic", children: /* @__PURE__ */ e.jsx(Jt, { id: "Italic", className: "h-4 w-4" }) }),
    /* @__PURE__ */ e.jsx(w, { value: "strikethrough", "aria-label": "Toggle strikethrough", children: /* @__PURE__ */ e.jsx(Jt, { id: "Underline", className: "h-4 w-4" }) })
  ] });
}
const Kt = h(P);
function Ji() {
  return /* @__PURE__ */ e.jsxs(ge, { type: "single", size: "sm", children: [
    /* @__PURE__ */ e.jsx(w, { value: "bold", "aria-label": "Toggle bold", children: /* @__PURE__ */ e.jsx(Kt, { id: "Bold", className: "h-4 w-4" }) }),
    /* @__PURE__ */ e.jsx(w, { value: "italic", "aria-label": "Toggle italic", children: /* @__PURE__ */ e.jsx(Kt, { id: "Italic", className: "h-4 w-4" }) }),
    /* @__PURE__ */ e.jsx(w, { value: "strikethrough", "aria-label": "Toggle strikethrough", children: /* @__PURE__ */ e.jsx(Kt, { id: "Underline", className: "h-4 w-4" }) })
  ] });
}
const Ki = h(P);
function Yi() {
  return /* @__PURE__ */ e.jsx(pe, { size: "lg", "aria-label": "Toggle italic", children: /* @__PURE__ */ e.jsx(Ki, { id: "Italic" }) });
}
const qi = h(P);
function Zi() {
  return /* @__PURE__ */ e.jsx(pe, { variant: "outline", "aria-label": "Toggle italic", children: /* @__PURE__ */ e.jsx(qi, { id: "Italic" }) });
}
const Xi = h(P);
function Qi() {
  return /* @__PURE__ */ e.jsx(pe, { size: "sm", "aria-label": "Toggle italic", children: /* @__PURE__ */ e.jsx(Xi, { id: "Italic" }) });
}
const eo = h(P);
function to() {
  return /* @__PURE__ */ e.jsxs(pe, { "aria-label": "Toggle italic", children: [
    /* @__PURE__ */ e.jsx(eo, { id: "Italic" }),
    "Italic"
  ] });
}
function ao() {
  return /* @__PURE__ */ e.jsxs(_t, { children: [
    /* @__PURE__ */ e.jsx(Pt, { asChild: !0, children: /* @__PURE__ */ e.jsx(l, { variant: "outline", children: "Hover" }) }),
    /* @__PURE__ */ e.jsx(Ft, { children: /* @__PURE__ */ e.jsx("p", { children: "Add to library" }) })
  ] });
}
function so() {
  return /* @__PURE__ */ e.jsx("blockquote", { className: "mt-6 border-l-2 pl-6 italic", children: `"After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the privilege."` });
}
function no() {
  return /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsx("h1", { className: "scroll-m-20 text-4xl font-extrabold tracking-tight text-balance", children: "Taxing Laughter: The Joke Tax Chronicles" }),
    /* @__PURE__ */ e.jsx("p", { className: "text-muted-foreground text-xl leading-7 [&:not(:first-child)]:mt-6", children: "Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne. One day, his advisors came to him with a problem: the kingdom was running out of money." }),
    /* @__PURE__ */ e.jsx("h2", { className: "mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0", children: "The King's Plan" }),
    /* @__PURE__ */ e.jsxs("p", { className: "leading-7 [&:not(:first-child)]:mt-6", children: [
      "The king thought long and hard, and finally came up with",
      " ",
      /* @__PURE__ */ e.jsx("a", { href: "#", className: "text-primary font-medium underline underline-offset-4", children: "a brilliant plan" }),
      ": he would tax the jokes in the kingdom."
    ] }),
    /* @__PURE__ */ e.jsx("blockquote", { className: "mt-6 border-l-2 pl-6 italic", children: `"After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the privilege."` }),
    /* @__PURE__ */ e.jsx("h3", { className: "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight", children: "The Joke Tax" }),
    /* @__PURE__ */ e.jsx("p", { className: "leading-7 [&:not(:first-child)]:mt-6", children: "The king's subjects were not amused. They grumbled and complained, but the king was firm:" }),
    /* @__PURE__ */ e.jsxs("ul", { className: "my-6 ml-6 list-disc [&>li]:mt-2", children: [
      /* @__PURE__ */ e.jsx("li", { children: "1st level of puns: 5 gold coins" }),
      /* @__PURE__ */ e.jsx("li", { children: "2nd level of jokes: 10 gold coins" }),
      /* @__PURE__ */ e.jsx("li", { children: "3rd level of one-liners : 20 gold coins" })
    ] }),
    /* @__PURE__ */ e.jsx("p", { className: "leading-7 [&:not(:first-child)]:mt-6", children: "As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was one person who refused to let the king's foolishness get him down: a court jester named Jokester." }),
    /* @__PURE__ */ e.jsx("h3", { className: "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight", children: "Jokester's Revolt" }),
    /* @__PURE__ */ e.jsx("p", { className: "leading-7 [&:not(:first-child)]:mt-6", children: "Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place: under the king's pillow, in his soup, even in the royal toilet. The king was furious, but he couldn't seem to stop Jokester." }),
    /* @__PURE__ */ e.jsx("p", { className: "leading-7 [&:not(:first-child)]:mt-6", children: "And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny that they couldn't help but laugh. And once they started laughing, they couldn't stop." }),
    /* @__PURE__ */ e.jsx("h3", { className: "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight", children: "The People's Rebellion" }),
    /* @__PURE__ */ e.jsx("p", { className: "leading-7 [&:not(:first-child)]:mt-6", children: "The people of the kingdom, feeling uplifted by the laughter, started to tell jokes and puns again, and soon the entire kingdom was in on the joke." }),
    /* @__PURE__ */ e.jsx("div", { className: "my-6 w-full overflow-y-auto", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full", children: [
      /* @__PURE__ */ e.jsx("thead", { children: /* @__PURE__ */ e.jsxs("tr", { className: "even:bg-muted m-0 border-t p-0", children: [
        /* @__PURE__ */ e.jsx("th", { className: "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right", children: "King's Treasury" }),
        /* @__PURE__ */ e.jsx("th", { className: "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right", children: "People's happiness" })
      ] }) }),
      /* @__PURE__ */ e.jsxs("tbody", { children: [
        /* @__PURE__ */ e.jsxs("tr", { className: "even:bg-muted m-0 border-t p-0", children: [
          /* @__PURE__ */ e.jsx("td", { className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right", children: "Empty" }),
          /* @__PURE__ */ e.jsx("td", { className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right", children: "Overflowing" })
        ] }),
        /* @__PURE__ */ e.jsxs("tr", { className: "even:bg-muted m-0 border-t p-0", children: [
          /* @__PURE__ */ e.jsx("td", { className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right", children: "Modest" }),
          /* @__PURE__ */ e.jsx("td", { className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right", children: "Satisfied" })
        ] }),
        /* @__PURE__ */ e.jsxs("tr", { className: "even:bg-muted m-0 border-t p-0", children: [
          /* @__PURE__ */ e.jsx("td", { className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right", children: "Full" }),
          /* @__PURE__ */ e.jsx("td", { className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right", children: "Ecstatic" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsx("p", { className: "leading-7 [&:not(:first-child)]:mt-6", children: "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax. Jokester was declared a hero, and the kingdom lived happily ever after." }),
    /* @__PURE__ */ e.jsx("p", { className: "leading-7 [&:not(:first-child)]:mt-6", children: "The moral of the story is: never underestimate the power of a good laugh and always be careful of bad ideas." })
  ] });
}
function ro() {
  return /* @__PURE__ */ e.jsx("h1", { className: "scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance", children: "Taxing Laughter: The Joke Tax Chronicles" });
}
function io() {
  return /* @__PURE__ */ e.jsx("h2", { className: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0", children: "The People of the Kingdom" });
}
function oo() {
  return /* @__PURE__ */ e.jsx("h3", { className: "scroll-m-20 text-2xl font-semibold tracking-tight", children: "The Joke Tax" });
}
function lo() {
  return /* @__PURE__ */ e.jsx("h4", { className: "scroll-m-20 text-xl font-semibold tracking-tight", children: "People stopped telling jokes" });
}
function co() {
  return /* @__PURE__ */ e.jsx("code", { className: "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold", children: "@radix-ui/react-alert-dialog" });
}
function uo() {
  return /* @__PURE__ */ e.jsx("div", { className: "text-lg font-semibold", children: "Are you absolutely sure?" });
}
function xo() {
  return /* @__PURE__ */ e.jsx("p", { className: "text-muted-foreground text-xl", children: "A modal dialog that interrupts the user with important content and expects a response." });
}
function mo() {
  return /* @__PURE__ */ e.jsxs("ul", { className: "my-6 ml-6 list-disc [&>li]:mt-2", children: [
    /* @__PURE__ */ e.jsx("li", { children: "1st level of puns: 5 gold coins" }),
    /* @__PURE__ */ e.jsx("li", { children: "2nd level of jokes: 10 gold coins" }),
    /* @__PURE__ */ e.jsx("li", { children: "3rd level of one-liners : 20 gold coins" })
  ] });
}
function ho() {
  return /* @__PURE__ */ e.jsx("p", { className: "text-muted-foreground text-sm", children: "Enter your email address." });
}
function po() {
  return /* @__PURE__ */ e.jsx("p", { className: "leading-7 [&:not(:first-child)]:mt-6", children: "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax." });
}
function go() {
  return /* @__PURE__ */ e.jsx("small", { className: "text-sm leading-none font-medium", children: "Email address" });
}
function jo() {
  return /* @__PURE__ */ e.jsx("div", { className: "my-6 w-full overflow-y-auto", children: /* @__PURE__ */ e.jsxs("table", { className: "w-full", children: [
    /* @__PURE__ */ e.jsx("thead", { children: /* @__PURE__ */ e.jsxs("tr", { className: "even:bg-muted m-0 border-t p-0", children: [
      /* @__PURE__ */ e.jsx("th", { className: "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right", children: "King's Treasury" }),
      /* @__PURE__ */ e.jsx("th", { className: "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right", children: "People's happiness" })
    ] }) }),
    /* @__PURE__ */ e.jsxs("tbody", { children: [
      /* @__PURE__ */ e.jsxs("tr", { className: "even:bg-muted m-0 border-t p-0", children: [
        /* @__PURE__ */ e.jsx("td", { className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right", children: "Empty" }),
        /* @__PURE__ */ e.jsx("td", { className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right", children: "Overflowing" })
      ] }),
      /* @__PURE__ */ e.jsxs("tr", { className: "even:bg-muted m-0 border-t p-0", children: [
        /* @__PURE__ */ e.jsx("td", { className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right", children: "Modest" }),
        /* @__PURE__ */ e.jsx("td", { className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right", children: "Satisfied" })
      ] }),
      /* @__PURE__ */ e.jsxs("tr", { className: "even:bg-muted m-0 border-t p-0", children: [
        /* @__PURE__ */ e.jsx("td", { className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right", children: "Full" }),
        /* @__PURE__ */ e.jsx("td", { className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right", children: "Ecstatic" })
      ] })
    ] })
  ] }) });
}
function fo() {
  return /* @__PURE__ */ e.jsx(
    "a",
    {
      href: "#table-of-contents",
      className: "inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 font-medium text-primary-foreground text-sm transition-colors hover:bg-primary/80 hover:text-foreground",
      "aria-label": "Return to table of contents",
      children: /* @__PURE__ */ e.jsx(L, { url: p, id: "ArrowUp", className: "h-4 w-4" })
    }
  );
}
function m({ id: t, title: a, children: s }) {
  return /* @__PURE__ */ e.jsxs("section", { id: t, className: "mb-12", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "mb-6 flex items-center justify-between border-b pb-2", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "font-bold text-3xl", children: a }),
      /* @__PURE__ */ e.jsx(fo, {})
    ] }),
    s
  ] });
}
function i({ name: t, children: a }) {
  return /* @__PURE__ */ e.jsxs("div", { className: "rounded-lg border bg-background p-6", children: [
    /* @__PURE__ */ e.jsx("h3", { className: "mb-4 font-semibold text-accent-foreground text-lg", children: t }),
    a
  ] });
}
function bo() {
  return /* @__PURE__ */ e.jsxs("div", { className: "p-6", children: [
    /* @__PURE__ */ e.jsx("h2", { className: "mb-4 font-bold text-2xl", children: "Lucide Icon Sprites" }),
    /* @__PURE__ */ e.jsxs("p", { className: "mb-6 text-gray-600", children: [
      "All ",
      Ma.length,
      " icons from the lucide sprite sheet"
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "flex flex-row flex-wrap gap-4", children: Ma.map((t) => /* @__PURE__ */ e.jsx("div", { className: "flex flex-col items-center rounded-lg border bg-background p-3 transition-colors hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:hover:bg-input/50", children: /* @__PURE__ */ e.jsxs(_t, { children: [
      /* @__PURE__ */ e.jsx(Pt, { asChild: !0, children: /* @__PURE__ */ e.jsx(L, { url: p, id: t, className: "h-6 w-6 text-accent-foreground", viewBox: "0 0 24 24" }) }),
      /* @__PURE__ */ e.jsx(Ft, { children: /* @__PURE__ */ e.jsx("p", { children: t }) })
    ] }) }, t)) })
  ] });
}
function _o() {
  const t = [
    { id: "accordion", title: "Accordion" },
    { id: "alerts", title: "Alerts" },
    { id: "avatar", title: "Avatar" },
    { id: "badges", title: "Badges" },
    { id: "breadcrumbs", title: "Breadcrumbs" },
    { id: "buttons", title: "Buttons" },
    { id: "cards", title: "Cards" },
    { id: "checkboxes", title: "Checkboxes" },
    { id: "collapsible", title: "Collapsible" },
    { id: "combobox", title: "Combobox" },
    { id: "menus", title: "Menus" },
    { id: "data", title: "Data Display" },
    { id: "date-picker", title: "Date Picker" },
    { id: "dialogs", title: "Dialogs" },
    { id: "inputs", title: "Inputs" },
    { id: "labels", title: "Labels" },
    { id: "navigation", title: "Navigation" },
    { id: "overlays", title: "Overlays" },
    { id: "radio", title: "Radio Groups" },
    { id: "scroll", title: "Scroll Areas" },
    { id: "selects", title: "Selects" },
    { id: "separators", title: "Separators" },
    { id: "sheets", title: "Sheets" },
    { id: "skeleton", title: "Skeleton" },
    { id: "sliders", title: "Sliders" },
    { id: "switches", title: "Switches" },
    { id: "tables", title: "Tables" },
    { id: "tabs", title: "Tabs" },
    { id: "textareas", title: "Textareas" },
    { id: "toggles", title: "Toggles" },
    { id: "tooltips", title: "Tooltips" },
    { id: "typography", title: "Typography" },
    { id: "notifications", title: "Notifications" }
  ];
  return /* @__PURE__ */ e.jsxs("div", { className: "container mx-auto max-w-7xl px-6 py-8", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex flex-row justify-between", children: [
        /* @__PURE__ */ e.jsx("h1", { className: "mb-4 font-bold text-4xl", children: "shadcn/ui Examples" }),
        /* @__PURE__ */ e.jsx(en, { theme: tn })
      ] }),
      /* @__PURE__ */ e.jsx("p", { className: "mb-6 text-lg text-muted-foreground", children: "A comprehensive showcase of all shadcn/ui components with live examples." }),
      /* @__PURE__ */ e.jsxs("div", { id: "table-of-contents", className: "mb-8 rounded-lg border bg-muted/10 p-6", children: [
        /* @__PURE__ */ e.jsx("h2", { className: "mb-4 font-semibold text-xl", children: "Table of Contents" }),
        /* @__PURE__ */ e.jsx("div", { className: "columns-1 gap-8 sm:columns-2 lg:columns-4", children: t.map((a) => /* @__PURE__ */ e.jsx("a", { href: `#${a.id}`, className: "mb-4 block text-primary transition-colors hover:text-primary/80 hover:underline", children: a.title }, a.id)) })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-16", children: [
      /* @__PURE__ */ e.jsx(m, { id: "sprites", title: "Sprite Examples", children: /* @__PURE__ */ e.jsx("div", { className: "max-w-2xl", children: /* @__PURE__ */ e.jsx(bo, {}) }) }),
      /* @__PURE__ */ e.jsx("h2", { className: "mb-4 font-bold text-4xl", children: "Component Examples" }),
      /* @__PURE__ */ e.jsx(m, { id: "accordion", title: "Accordion", children: /* @__PURE__ */ e.jsx("div", { className: "max-w-2xl", children: /* @__PURE__ */ e.jsx(i, { name: "Accordion Demo", children: /* @__PURE__ */ e.jsx(qn, {}) }) }) }),
      /* @__PURE__ */ e.jsx(m, { id: "alerts", title: "Alerts", children: /* @__PURE__ */ e.jsxs("div", { className: "flex max-w-2xl flex-col gap-6", children: [
        /* @__PURE__ */ e.jsx(i, { name: "Alert Demo", children: /* @__PURE__ */ e.jsx(Zn, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Alert Destructive", children: /* @__PURE__ */ e.jsx(Qn, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Alert Dialog Demo", children: /* @__PURE__ */ e.jsx(er, {}) })
      ] }) }),
      /* @__PURE__ */ e.jsx(m, { id: "avatar", title: "Avatar", children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-row gap-6", children: [
        /* @__PURE__ */ e.jsx(i, { name: "Avatar Demo", children: /* @__PURE__ */ e.jsx(ar, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Aspect Ratio Demo", children: /* @__PURE__ */ e.jsx(tr, {}) })
      ] }) }),
      /* @__PURE__ */ e.jsx(m, { id: "badges", title: "Badges", children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-row gap-6", children: [
        /* @__PURE__ */ e.jsx(i, { name: "Badge Demo", children: /* @__PURE__ */ e.jsx(nr, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Badge Destructive", children: /* @__PURE__ */ e.jsx(rr, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Badge Outline", children: /* @__PURE__ */ e.jsx(ir, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Badge Secondary", children: /* @__PURE__ */ e.jsx(or, {}) })
      ] }) }),
      /* @__PURE__ */ e.jsx(m, { id: "breadcrumbs", title: "Breadcrumbs", children: /* @__PURE__ */ e.jsxs("div", { className: "flex max-w-2xl flex-col gap-6", children: [
        /* @__PURE__ */ e.jsx(i, { name: "Breadcrumb Demo", children: /* @__PURE__ */ e.jsx(lr, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Breadcrumb Dropdown", children: /* @__PURE__ */ e.jsx(dr, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Breadcrumb Ellipsis", children: /* @__PURE__ */ e.jsx(cr, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Breadcrumb Link", children: /* @__PURE__ */ e.jsx(ur, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Breadcrumb Separator", children: /* @__PURE__ */ e.jsx(xr, {}) })
      ] }) }),
      /* @__PURE__ */ e.jsx(m, { id: "buttons", title: "Buttons", children: /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3", children: [
        /* @__PURE__ */ e.jsx(i, { name: "Button Demo", children: /* @__PURE__ */ e.jsx(hr, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Button As Child", children: /* @__PURE__ */ e.jsx(mr, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Button Destructive", children: /* @__PURE__ */ e.jsx(pr, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Button Ghost", children: /* @__PURE__ */ e.jsx(gr, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Button Icon", children: /* @__PURE__ */ e.jsx(fr, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Button Link", children: /* @__PURE__ */ e.jsx(br, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Button Loading", children: /* @__PURE__ */ e.jsx(wr, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Button Outline", children: /* @__PURE__ */ e.jsx(Nr, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Button Secondary", children: /* @__PURE__ */ e.jsx(yr, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Button With Icon", children: /* @__PURE__ */ e.jsx(kr, {}) })
      ] }) }),
      /* @__PURE__ */ e.jsx(m, { id: "cards", title: "Cards", children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-6 lg:flex-row", children: [
        /* @__PURE__ */ e.jsx(i, { name: "Card Demo", children: /* @__PURE__ */ e.jsx(Cr, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Card With Form", children: /* @__PURE__ */ e.jsx(Tr, {}) })
      ] }) }),
      /* @__PURE__ */ e.jsx(m, { id: "checkboxes", title: "Checkboxes", children: /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: [
        /* @__PURE__ */ e.jsx(i, { name: "Checkbox Demo", children: /* @__PURE__ */ e.jsx(Dr, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Checkbox Disabled", children: /* @__PURE__ */ e.jsx(Ir, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Checkbox Form Multiple", children: /* @__PURE__ */ e.jsx(Mr, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Checkbox Form Single", children: /* @__PURE__ */ e.jsx(Ar, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Checkbox With Text", children: /* @__PURE__ */ e.jsx(Br, {}) })
      ] }) }),
      /* @__PURE__ */ e.jsx(m, { id: "collapsible", title: "Collapsible", children: /* @__PURE__ */ e.jsx("div", { className: "max-w-md", children: /* @__PURE__ */ e.jsx(i, { name: "Collapsible Demo", children: /* @__PURE__ */ e.jsx(Pr, {}) }) }) }),
      /* @__PURE__ */ e.jsx(m, { id: "combobox", title: "Combobox", children: /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: [
        /* @__PURE__ */ e.jsx(i, { name: "Combobox Demo", children: /* @__PURE__ */ e.jsx(Fr, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Combobox Dropdown Menu", children: /* @__PURE__ */ e.jsx(Er, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Combobox Form", children: /* @__PURE__ */ e.jsx(Or, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Combobox Popover", children: /* @__PURE__ */ e.jsx(Lr, {}) })
      ] }) }),
      /* @__PURE__ */ e.jsx(m, { id: "menus", title: "Menus", children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-row gap-6", children: [
        /* @__PURE__ */ e.jsx(i, { name: "Context Menu Demo", children: /* @__PURE__ */ e.jsx(Gr, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Dropdown Menu Demo", children: /* @__PURE__ */ e.jsx(Ur, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Dropdown Menu Checkboxes", children: /* @__PURE__ */ e.jsx(Wr, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Dropdown Menu Radio Group", children: /* @__PURE__ */ e.jsx(Jr, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Menubar Demo", children: /* @__PURE__ */ e.jsx(si, {}) })
      ] }) }),
      /* @__PURE__ */ e.jsx(m, { id: "dialogs", title: "Dialogs", children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-row gap-6", children: [
        /* @__PURE__ */ e.jsx(i, { name: "Dialog Demo", children: /* @__PURE__ */ e.jsx(Vr, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Dialog Close Button", children: /* @__PURE__ */ e.jsx(Hr, {}) })
      ] }) }),
      /* @__PURE__ */ e.jsx(m, { id: "inputs", title: "Inputs", children: /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: [
        /* @__PURE__ */ e.jsx(i, { name: "Input Demo", children: /* @__PURE__ */ e.jsx(Yr, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Input Disabled", children: /* @__PURE__ */ e.jsx(qr, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Input File", children: /* @__PURE__ */ e.jsx(Zr, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Input Form", children: /* @__PURE__ */ e.jsx(Xr, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Input With Button", children: /* @__PURE__ */ e.jsx(Qr, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Input With Label", children: /* @__PURE__ */ e.jsx(ei, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Input With Text", children: /* @__PURE__ */ e.jsx(ti, {}) })
      ] }) }),
      /* @__PURE__ */ e.jsx(m, { id: "labels", title: "Labels", children: /* @__PURE__ */ e.jsx("div", { className: "max-w-md", children: /* @__PURE__ */ e.jsx(i, { name: "Label Demo", children: /* @__PURE__ */ e.jsx(ai, {}) }) }) }),
      /* @__PURE__ */ e.jsx(m, { id: "navigation", title: "Navigation", children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ e.jsx(i, { name: "Navigation Menu Demo", children: /* @__PURE__ */ e.jsx(ii, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Pagination Demo", children: /* @__PURE__ */ e.jsx(oi, {}) })
      ] }) }),
      /* @__PURE__ */ e.jsx(m, { id: "overlays", title: "Overlays", children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-row gap-6", children: [
        /* @__PURE__ */ e.jsx(i, { name: "Hover Card Demo", children: /* @__PURE__ */ e.jsx(Kr, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Popover Demo", children: /* @__PURE__ */ e.jsx(li, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Mode Toggle", children: /* @__PURE__ */ e.jsx(ni, {}) })
      ] }) }),
      /* @__PURE__ */ e.jsx(m, { id: "radio", title: "Radio Groups", children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-row gap-6", children: [
        /* @__PURE__ */ e.jsx(i, { name: "Radio Group Demo", children: /* @__PURE__ */ e.jsx(ci, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Radio Group Form", children: /* @__PURE__ */ e.jsx(ui, {}) })
      ] }) }),
      /* @__PURE__ */ e.jsx(m, { id: "scroll", title: "Scroll Areas", children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-6 lg:flex-row", children: [
        /* @__PURE__ */ e.jsx(i, { name: "Scroll Area Demo", children: /* @__PURE__ */ e.jsx(mi, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Scroll Area Horizontal Demo", children: /* @__PURE__ */ e.jsx(pi, {}) })
      ] }) }),
      /* @__PURE__ */ e.jsx(m, { id: "selects", title: "Selects", children: /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: [
        /* @__PURE__ */ e.jsx(i, { name: "Select Demo", children: /* @__PURE__ */ e.jsx(gi, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Select Form", children: /* @__PURE__ */ e.jsx(ji, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Select Scrollable", children: /* @__PURE__ */ e.jsx(fi, {}) })
      ] }) }),
      /* @__PURE__ */ e.jsx(m, { id: "separators", title: "Separators", children: /* @__PURE__ */ e.jsx("div", { className: "max-w-md", children: /* @__PURE__ */ e.jsx(i, { name: "Separator Demo", children: /* @__PURE__ */ e.jsx(bi, {}) }) }) }),
      /* @__PURE__ */ e.jsx(m, { id: "sheets", title: "Sheets", children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-row gap-6", children: [
        /* @__PURE__ */ e.jsx(i, { name: "Sheet Demo", children: /* @__PURE__ */ e.jsx(vi, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Sheet Side", children: /* @__PURE__ */ e.jsx(Ni, {}) })
      ] }) }),
      /* @__PURE__ */ e.jsx(m, { id: "skeleton", title: "Skeleton", children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-6 lg:flex-row", children: [
        /* @__PURE__ */ e.jsx(i, { name: "Skeleton Demo", children: /* @__PURE__ */ e.jsx(Si, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Skeleton Card", children: /* @__PURE__ */ e.jsx(yi, {}) })
      ] }) }),
      /* @__PURE__ */ e.jsx(m, { id: "sliders", title: "Sliders", children: /* @__PURE__ */ e.jsxs("div", { className: "max-w-md", children: [
        /* @__PURE__ */ e.jsx(i, { name: "Slider Demo", children: /* @__PURE__ */ e.jsx(ki, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Progress Demo", children: /* @__PURE__ */ e.jsx(di, {}) })
      ] }) }),
      /* @__PURE__ */ e.jsx(m, { id: "switches", title: "Switches", children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-row gap-6", children: [
        /* @__PURE__ */ e.jsx(i, { name: "Switch Demo", children: /* @__PURE__ */ e.jsx(Ti, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Switch Form", children: /* @__PURE__ */ e.jsx(Di, {}) })
      ] }) }),
      /* @__PURE__ */ e.jsx(m, { id: "tables", title: "Tables", children: /* @__PURE__ */ e.jsx("div", { className: "max-w-4xl", children: /* @__PURE__ */ e.jsx(i, { name: "Table Demo", children: /* @__PURE__ */ e.jsx(zi, {}) }) }) }),
      /* @__PURE__ */ e.jsx(m, { id: "tabs", title: "Tabs", children: /* @__PURE__ */ e.jsx("div", { className: "max-w-2xl", children: /* @__PURE__ */ e.jsx(i, { name: "Tabs Demo", children: /* @__PURE__ */ e.jsx(Mi, {}) }) }) }),
      /* @__PURE__ */ e.jsx(m, { id: "textareas", title: "Textareas", children: /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: [
        /* @__PURE__ */ e.jsx(i, { name: "Textarea Demo", children: /* @__PURE__ */ e.jsx(Ai, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Textarea Disabled", children: /* @__PURE__ */ e.jsx(Bi, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Textarea Form", children: /* @__PURE__ */ e.jsx(_i, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Textarea With Button", children: /* @__PURE__ */ e.jsx(Pi, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Textarea With Label", children: /* @__PURE__ */ e.jsx(Fi, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Textarea With Text", children: /* @__PURE__ */ e.jsx($i, {}) })
      ] }) }),
      /* @__PURE__ */ e.jsx(m, { id: "toggles", title: "Toggles", children: /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3", children: [
        /* @__PURE__ */ e.jsx(i, { name: "Toggle Demo", children: /* @__PURE__ */ e.jsx(Ei, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Toggle Disabled", children: /* @__PURE__ */ e.jsx(Li, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Toggle Group Demo", children: /* @__PURE__ */ e.jsx(Gi, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Toggle Group Disabled", children: /* @__PURE__ */ e.jsx(Hi, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Toggle Group Large", children: /* @__PURE__ */ e.jsx(Vi, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Toggle Group Outline", children: /* @__PURE__ */ e.jsx(Wi, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Toggle Group Single", children: /* @__PURE__ */ e.jsx(Ui, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Toggle Group Small", children: /* @__PURE__ */ e.jsx(Ji, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Toggle Large", children: /* @__PURE__ */ e.jsx(Yi, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Toggle Outline", children: /* @__PURE__ */ e.jsx(Zi, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Toggle Small", children: /* @__PURE__ */ e.jsx(Qi, {}) }),
        /* @__PURE__ */ e.jsx(i, { name: "Toggle With Text", children: /* @__PURE__ */ e.jsx(to, {}) })
      ] }) }),
      /* @__PURE__ */ e.jsx(m, { id: "tooltips", title: "Tooltips", children: /* @__PURE__ */ e.jsx("div", { className: "max-w-md", children: /* @__PURE__ */ e.jsx(i, { name: "Tooltip Demo", children: /* @__PURE__ */ e.jsx(ao, {}) }) }) }),
      /* @__PURE__ */ e.jsx(m, { id: "typography", title: "Typography", children: /* @__PURE__ */ e.jsxs("div", { className: "flex max-w-4xl flex-col gap-6", children: [
        /* @__PURE__ */ e.jsx(i, { name: "Typography Demo", children: /* @__PURE__ */ e.jsx(no, {}) }),
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: [
          /* @__PURE__ */ e.jsx(i, { name: "Typography H1", children: /* @__PURE__ */ e.jsx(ro, {}) }),
          /* @__PURE__ */ e.jsx(i, { name: "Typography H2", children: /* @__PURE__ */ e.jsx(io, {}) }),
          /* @__PURE__ */ e.jsx(i, { name: "Typography H3", children: /* @__PURE__ */ e.jsx(oo, {}) }),
          /* @__PURE__ */ e.jsx(i, { name: "Typography H4", children: /* @__PURE__ */ e.jsx(lo, {}) }),
          /* @__PURE__ */ e.jsx(i, { name: "Typography Paragraph", children: /* @__PURE__ */ e.jsx(po, {}) }),
          /* @__PURE__ */ e.jsx(i, { name: "Typography Blockquote", children: /* @__PURE__ */ e.jsx(so, {}) }),
          /* @__PURE__ */ e.jsx(i, { name: "Typography List", children: /* @__PURE__ */ e.jsx(mo, {}) }),
          /* @__PURE__ */ e.jsx(i, { name: "Typography Inline Code", children: /* @__PURE__ */ e.jsx(co, {}) }),
          /* @__PURE__ */ e.jsx(i, { name: "Typography Lead", children: /* @__PURE__ */ e.jsx(xo, {}) }),
          /* @__PURE__ */ e.jsx(i, { name: "Typography Large", children: /* @__PURE__ */ e.jsx(uo, {}) }),
          /* @__PURE__ */ e.jsx(i, { name: "Typography Small", children: /* @__PURE__ */ e.jsx(go, {}) }),
          /* @__PURE__ */ e.jsx(i, { name: "Typography Muted", children: /* @__PURE__ */ e.jsx(ho, {}) })
        ] }),
        /* @__PURE__ */ e.jsx(i, { name: "Typography Table", children: /* @__PURE__ */ e.jsx(jo, {}) })
      ] }) }),
      /* @__PURE__ */ e.jsx(m, { id: "notifications", title: "Notifications", children: /* @__PURE__ */ e.jsx("div", { className: "max-w-md", children: /* @__PURE__ */ e.jsx(i, { name: "Sonner Demo", children: /* @__PURE__ */ e.jsx(Ci, {}) }) }) })
    ] })
  ] });
}
const Po = Object.assign(Ga, {
  Item: ut,
  Trigger: xt,
  Content: mt
}), Fo = Object.assign(Ha, {
  Portal: Wa,
  Overlay: Ua,
  Trigger: Va,
  Content: Ja,
  Header: Ka,
  Footer: Ya,
  Title: qa,
  Description: Za,
  Action: Xa,
  Cancel: Qa
}), $o = Object.assign(Pe, {
  Title: Fe,
  Description: vt
}), Ro = Object.assign(le, {
  Image: de,
  Fallback: ce
}), Eo = Object.assign(_, {
  Variants: es
}), Oo = Object.assign(ye, {
  List: Se,
  Item: N,
  Link: E,
  Page: ke,
  Separator: B,
  Ellipsis: oa
}), Lo = Object.assign(l, {
  Variants: Ue
}), Go = Object.assign(Oe, {
  Header: Le,
  Footer: We,
  Title: Ge,
  Action: as,
  Description: He,
  Content: Ve
}), Ho = Object.assign(ss, {
  Trigger: ns,
  Content: rs
}), Vo = Object.assign(Ce, {
  Dialog: nn,
  Input: Je,
  List: Ke,
  Empty: Ye,
  Group: qe,
  Item: Ze,
  Shortcut: on,
  Separator: rn
}), Wo = Object.assign(ls, {
  Trigger: ds,
  Content: hs,
  Item: G,
  CheckboxItem: qt,
  RadioItem: Zt,
  Label: ps,
  Separator: Ie,
  Shortcut: ht,
  Group: ln,
  Portal: dn,
  Sub: cs,
  SubContent: ms,
  SubTrigger: xs,
  RadioGroup: us
}), Uo = Object.assign(yt, {
  Close: da,
  Content: St,
  Description: Tt,
  Footer: ca,
  Header: kt,
  Overlay: os,
  Portal: is,
  Title: Ct,
  Trigger: la
}), Jo = Object.assign(ae, {
  Portal: gs,
  Trigger: se,
  Content: ne,
  Group: wt,
  Label: Xe,
  Item: g,
  CheckboxItem: pt,
  RadioGroup: js,
  RadioItem: gt,
  Separator: V,
  Shortcut: Q,
  Sub: ma,
  SubTrigger: ha,
  SubContent: pa
}), Ko = Object.assign(fs, {
  Trigger: bs,
  Content: vs
}), Yo = Object.assign(ws, {
  Portal: Ns,
  Menu: ze,
  Trigger: Me,
  Content: Ae,
  Group: cn,
  Separator: F,
  Label: un,
  Item: f,
  Shortcut: X,
  CheckboxItem: Xt,
  RadioGroup: ys,
  RadioItem: jt,
  Sub: Qt,
  SubTrigger: ea,
  SubContent: ta
}), qo = Object.assign(Ss, {
  List: ks,
  Item: re,
  Content: be,
  Trigger: fe,
  Link: M,
  Indicator: xn,
  Viewport: Cs,
  NavigationMenuTriggerStyle: ja
}), Zo = Object.assign(Ts, {
  Content: Ds,
  Link: we,
  Item: ie,
  Previous: Is,
  Next: zs,
  Ellipsis: Ms
}), Xo = Object.assign(Qe, {
  Trigger: et,
  Content: tt,
  Anchor: mn
}), Qo = Object.assign(ba, {
  Item: me
}), el = Object.assign(va, {
  ScrollBar: wa
}), tl = Object.assign(at, {
  Content: rt,
  Group: ue,
  Item: c,
  Label: xe,
  ScrollDownButton: Bs,
  ScrollUpButton: As,
  Separator: pn,
  Trigger: nt,
  Value: st
}), al = Object.assign(It, {
  Trigger: Na,
  Close: ya,
  Content: zt,
  Header: Mt,
  Footer: Sa,
  Title: At,
  Description: Bt
}), sl = Object.assign(Cn, {
  Content: _n,
  Footer: An,
  Group: Pn,
  GroupAction: $n,
  GroupContent: Rn,
  GroupLabel: Fn,
  Header: Mn,
  Input: zn,
  Inset: In,
  Menu: En,
  MenuAction: Hn,
  MenuBadge: Vn,
  MenuButton: Gn,
  MenuItem: On,
  MenuSkeleton: Wn,
  MenuSub: Un,
  MenuSubButton: Kn,
  MenuSubItem: Jn,
  Provider: kn,
  Rail: Dn,
  Separator: Bn,
  Trigger: Tn
}), nl = Object.assign(Ps, {
  Header: Fs,
  Body: $s,
  Footer: Rs,
  Head: Be,
  Row: ft,
  Cell: oe,
  Caption: Es
}), rl = Object.assign(Os, {
  List: Ls,
  Trigger: sa,
  Content: na
}), il = Object.assign(ge, {
  Item: w
}), ol = Object.assign(pe, {
  Variants: Ca
}), ll = Object.assign(_t, {
  Trigger: Pt,
  Content: Ft,
  Provider: ka
}), dl = Object.assign(Y, {
  Item: I,
  Label: z,
  Control: A,
  Description: W,
  Message: je,
  Field: O
});
export {
  Po as Accordion,
  $o as Alert,
  Fo as AlertDialog,
  sn as AspectRatio,
  Ro as Avatar,
  Eo as Badge,
  Oo as Breadcrumb,
  Lo as Button,
  Go as Card,
  H as Checkbox,
  Ho as Collapsible,
  Vo as Command,
  _o as ComponentExamples,
  Wo as ContextMenu,
  Uo as Dialog,
  Jo as DropdownMenu,
  dl as Form,
  Ko as HoverCard,
  j as Input,
  x as Label,
  b as Link,
  Yo as Menubar,
  qo as NavigationMenu,
  Zo as Pagination,
  Xo as Popover,
  hn as Progress,
  Qo as RadioGroup,
  el as ScrollArea,
  tl as Select,
  $e as Separator,
  al as Sheet,
  sl as Sidebar,
  ee as Skeleton,
  Yn as Slider,
  xl as Spinner,
  aa as Switch,
  nl as Table,
  rl as Tabs,
  Te as Textarea,
  Bo as Toaster,
  ol as Toggle,
  il as ToggleGroup,
  ll as Tooltip,
  Ma as iconNames,
  Rt as useFormField,
  $t as useSidebar
};
//# sourceMappingURL=shadcn-ui.js.map
