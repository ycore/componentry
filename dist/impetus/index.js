import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Button as Button$1 } from "@ycore/componentry/vibrant";
import { Link as Link$1, href, useRouteError, isRouteErrorResponse, useLocation } from "react-router";
import clsx from "clsx";
import React, { memo, createContext, useState } from "react";
import { createSpriteIcon } from "@ycore/componentry/images";
import { cva } from "class-variance-authority";
import { Slot, Menubar as Menubar$1, Dialog } from "radix-ui";
const HTTP_ERROR_CONFIG = {
  400: {
    message: "400 Bad Request",
    detail: "The request was invalid."
  },
  401: {
    message: "401 Unauthorized Access",
    detail: "Please sign in with the appropriate credentials to access."
  },
  403: {
    message: "403 Access Forbidden",
    detail: "Access permission is not sufficient."
  },
  404: {
    message: "404 Not Found",
    detail: "The page does not exist."
  },
  500: {
    message: "500 Internal Server Error",
    detail: "We apologize for the inconvenience. Please try again later."
  },
  503: {
    message: "503 Website is under maintenance!",
    detail: "The site is not available at the moment. We'll be back online shortly."
  }
};
const DEFAULT_ERROR = {
  message: "Oops, something went wrong.",
  detail: "Unexpected error. Refresh to try again or contact support if the issue persists."
};
function DevErrorDisplay({ message, detail, stack }) {
  return /* @__PURE__ */ jsxs("main", { className: "container mx-auto space-y-4 p-4 pt-16", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-semibold text-lg", children: message }),
      /* @__PURE__ */ jsx("p", { className: "text-base text-muted-foreground", children: detail })
    ] }),
    stack && /* @__PURE__ */ jsx("pre", { className: "w-full overflow-x-auto rounded-lg bg-destructive/10 p-4 text-destructive text-sm", children: /* @__PURE__ */ jsx("code", { children: stack }) })
  ] });
}
function getErrorInfo(error) {
  if (!isRouteErrorResponse(error)) {
    return DEFAULT_ERROR;
  }
  const httpError = HTTP_ERROR_CONFIG[error.status];
  return {
    message: error.data?.message ?? httpError?.message ?? DEFAULT_ERROR.message,
    detail: error.data?.detail ?? httpError?.detail ?? DEFAULT_ERROR.detail
  };
}
function getErrorTitle(status) {
  const config = HTTP_ERROR_CONFIG[status];
  return config?.message ?? DEFAULT_ERROR.message;
}
function getErrorMessage(status) {
  const config = HTTP_ERROR_CONFIG[status];
  return config?.detail ?? DEFAULT_ERROR.detail;
}
function ErrorActions({ actions }) {
  const defaultActions = [{ label: "Back to home", to: "/" }];
  const actionsList = actions ?? defaultActions;
  return /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-4", children: actionsList.map((action, index) => /* @__PURE__ */ jsx(Button$1, { asChild: true, size: "lg", variant: action.variant, children: /* @__PURE__ */ jsx(Link$1, { to: href(action.to), children: action.label }) }, index)) });
}
function ErrorDevDetails({ message, stack }) {
  return /* @__PURE__ */ jsxs("details", { className: "mt-8 rounded-lg border border-border bg-muted p-6 text-left", children: [
    /* @__PURE__ */ jsx("summary", { className: "cursor-pointer font-medium text-foreground text-lg", children: "Error Details (Development Only)" }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground", children: "Message:" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: message })
      ] }),
      stack && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground", children: "Stack Trace:" }),
        /* @__PURE__ */ jsx("pre", { className: "mt-2 overflow-auto rounded bg-background p-4 text-muted-foreground text-xs", children: stack })
      ] })
    ] })
  ] });
}
function ErrorMessage({ status, message, detail }) {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
    status && /* @__PURE__ */ jsx("h1", { className: "font-bold text-8xl text-primary", children: status }),
    !status && /* @__PURE__ */ jsx("h1", { className: "font-bold text-8xl text-destructive", children: "Error" }),
    /* @__PURE__ */ jsx("h2", { className: "font-semibold text-3xl text-foreground", children: message }),
    /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground", children: detail })
  ] });
}
function ErrorLayout({ renderDocument, status, message, children }) {
  const content = /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background p-4", children: /* @__PURE__ */ jsx("div", { className: "w-full max-w-2xl space-y-6 text-center", children }) });
  if (!renderDocument) {
    return content;
  }
  const title = status ? `${status} - ${message}` : "Application Error";
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("title", { children: title })
    ] }),
    /* @__PURE__ */ jsx("body", { children: content })
  ] });
}
function GeneralErrorBoundary({ isDev = false, renderDocument = false, actions } = {}) {
  const error = useRouteError();
  if (isDev && error instanceof Error) {
    console.error("🔴 error on dev", error);
    return /* @__PURE__ */ jsx(DevErrorDisplay, { message: "Application Error", detail: error.message, stack: error.stack });
  }
  const { message, detail } = getErrorInfo(error);
  const status = isRouteErrorResponse(error) ? error.status : void 0;
  return /* @__PURE__ */ jsxs(ErrorLayout, { renderDocument, status, message, children: [
    /* @__PURE__ */ jsx(ErrorMessage, { status, message, detail }),
    /* @__PURE__ */ jsx(ErrorActions, { actions }),
    isDev && error instanceof Error && /* @__PURE__ */ jsx(ErrorDevDetails, { message: error.message, stack: error.stack })
  ] });
}
const LoadingBar = memo(({ className }) => /* @__PURE__ */ jsx("div", { className: clsx("loading-bar", className) }));
function createVariants(base, config) {
  return cva(base, config);
}
const buttonVariants = createVariants(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Slot : "button";
  return /* @__PURE__ */ jsx(Comp, { "data-slot": "button", className: clsx(buttonVariants({ variant, size, className })), ...props });
}
const SvgIcon = createSpriteIcon("lucide");
function Menubar({ className, ...props }) {
  return /* @__PURE__ */ jsx(Menubar$1.Root, { "data-slot": "menubar", className: clsx("flex h-9 items-center gap-1 rounded-md border bg-background p-1 shadow-xs", className), ...props });
}
function MenubarMenu({ ...props }) {
  return /* @__PURE__ */ jsx(Menubar$1.Menu, { "data-slot": "menubar-menu", ...props });
}
function MenubarPortal({ ...props }) {
  return /* @__PURE__ */ jsx(Menubar$1.Portal, { "data-slot": "menubar-portal", ...props });
}
function MenubarRadioGroup({ ...props }) {
  return /* @__PURE__ */ jsx(Menubar$1.RadioGroup, { "data-slot": "menubar-radio-group", ...props });
}
function MenubarTrigger({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Menubar$1.Trigger,
    {
      "data-slot": "menubar-trigger",
      className: clsx(
        "flex select-none items-center rounded-sm px-2 py-1 font-medium text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        className
      ),
      ...props
    }
  );
}
function MenubarContent({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }) {
  return /* @__PURE__ */ jsx(MenubarPortal, { children: /* @__PURE__ */ jsx(
    Menubar$1.Content,
    {
      "data-slot": "menubar-content",
      align,
      alignOffset,
      sideOffset,
      className: clsx(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in",
        className
      ),
      ...props
    }
  ) });
}
function MenubarItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Menubar$1.Item,
    {
      "data-slot": "menubar-item",
      "data-inset": inset,
      "data-variant": variant,
      className: clsx(
        "data-[variant=destructive]:*:[svg]:!text-destructive relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[disabled]:opacity-50 data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      ),
      ...props
    }
  );
}
function MenubarCheckboxItem({ className, children, checked, ...props }) {
  return /* @__PURE__ */ jsxs(
    Menubar$1.CheckboxItem,
    {
      "data-slot": "menubar-checkbox-item",
      className: clsx(
        "relative flex cursor-default select-none items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      ),
      checked,
      ...props,
      children: [
        /* @__PURE__ */ jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(Menubar$1.ItemIndicator, { children: /* @__PURE__ */ jsx(SvgIcon, { iconId: "Check", className: "size-4" }) }) }),
        children
      ]
    }
  );
}
function MenubarRadioItem({ className, children, ...props }) {
  return /* @__PURE__ */ jsxs(
    Menubar$1.RadioItem,
    {
      "data-slot": "menubar-radio-item",
      className: clsx(
        "relative flex cursor-default select-none items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(Menubar$1.ItemIndicator, { children: /* @__PURE__ */ jsx(SvgIcon, { iconId: "Circle", className: "size-2 fill-current" }) }) }),
        children
      ]
    }
  );
}
function MenubarSeparator({ className, ...props }) {
  return /* @__PURE__ */ jsx(Menubar$1.Separator, { "data-slot": "menubar-separator", className: clsx("-mx-1 my-1 h-px bg-border", className), ...props });
}
function MenubarShortcut({ className, ...props }) {
  return /* @__PURE__ */ jsx("span", { "data-slot": "menubar-shortcut", className: clsx("ml-auto text-muted-foreground text-xs tracking-widest", className), ...props });
}
function MenubarSub({ ...props }) {
  return /* @__PURE__ */ jsx(Menubar$1.Sub, { "data-slot": "menubar-sub", ...props });
}
function MenubarSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    Menubar$1.SubTrigger,
    {
      "data-slot": "menubar-sub-trigger",
      "data-inset": inset,
      className: clsx(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[inset]:pl-8 data-[state=open]:text-accent-foreground",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(SvgIcon, { iconId: "ChevronRight", className: "ml-auto h-4 w-4" })
      ]
    }
  );
}
function MenubarSubContent({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Menubar$1.SubContent,
    {
      "data-slot": "menubar-sub-content",
      className: clsx(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=closed]:animate-out data-[state=open]:animate-in",
        className
      ),
      ...props
    }
  );
}
function Sheet({ ...props }) {
  return /* @__PURE__ */ jsx(Dialog.Root, { "data-slot": "sheet", ...props });
}
function SheetTrigger({ ...props }) {
  return /* @__PURE__ */ jsx(Dialog.Trigger, { "data-slot": "sheet-trigger", ...props });
}
function SheetPortal({ ...props }) {
  return /* @__PURE__ */ jsx(Dialog.Portal, { "data-slot": "sheet-portal", ...props });
}
function SheetOverlay({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Dialog.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: clsx("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=open]:animate-in", className),
      ...props
    }
  );
}
function SheetContent({
  className,
  children,
  side = "right",
  ...props
}) {
  return /* @__PURE__ */ jsxs(SheetPortal, { children: [
    /* @__PURE__ */ jsx(SheetOverlay, {}),
    /* @__PURE__ */ jsxs(
      Dialog.Content,
      {
        "data-slot": "sheet-content",
        className: clsx(
          "fixed z-50 flex flex-col gap-4 bg-background shadow-lg transition ease-in-out data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        ),
        ...props,
        children: [
          children,
          /* @__PURE__ */ jsxs(Dialog.Close, { className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
            /* @__PURE__ */ jsx(SvgIcon, { iconId: "X", className: "size-4" }),
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
const Link = React.forwardRef(function Link2(props, ref) {
  return /* @__PURE__ */ jsx(Link$1, { ...props, to: props.href, ref });
});
const MenubarContext = createContext(null);
function renderMenubarItem(item, index, context) {
  const { currentPath, IconSprite } = context;
  if (item.separator) {
    return /* @__PURE__ */ jsx(MenubarSeparator, {}, `separator-${index}`);
  }
  if (item.component) {
    const Component = item.component;
    return /* @__PURE__ */ jsx(Component, {}, `component-${index}`);
  }
  const isActive = item.href && currentPath === item.href;
  if (item.items) {
    return /* @__PURE__ */ jsxs(MenubarSub, { children: [
      /* @__PURE__ */ jsxs(MenubarSubTrigger, { inset: item.inset, children: [
        item.iconId && /* @__PURE__ */ jsx(IconSprite, { iconId: item.iconId }),
        item.label
      ] }),
      /* @__PURE__ */ jsx(MenubarSubContent, { children: item.items.map((subItem, subIndex) => renderMenubarItem(subItem, subIndex, context)) })
    ] }, `sub-${index}`);
  }
  if (item.checked !== void 0) {
    return /* @__PURE__ */ jsxs(MenubarCheckboxItem, { checked: item.checked, disabled: item.disabled, children: [
      item.iconId && /* @__PURE__ */ jsx(IconSprite, { iconId: item.iconId }),
      item.label,
      item.shortcut && /* @__PURE__ */ jsx(MenubarShortcut, { children: item.shortcut })
    ] }, `checkbox-${index}`);
  }
  if (item.value !== void 0) {
    return /* @__PURE__ */ jsxs(MenubarRadioItem, { value: item.value, disabled: item.disabled, children: [
      item.iconId && /* @__PURE__ */ jsx(IconSprite, { iconId: item.iconId }),
      item.label,
      item.shortcut && /* @__PURE__ */ jsx(MenubarShortcut, { children: item.shortcut })
    ] }, `radio-${index}`);
  }
  const ItemContent = /* @__PURE__ */ jsxs(Fragment, { children: [
    item.iconId && /* @__PURE__ */ jsx(IconSprite, { iconId: item.iconId }),
    item.label,
    item.shortcut && /* @__PURE__ */ jsx(MenubarShortcut, { children: item.shortcut })
  ] });
  if (item.href) {
    return /* @__PURE__ */ jsx(MenubarItem, { asChild: true, disabled: item.disabled, inset: item.inset, variant: item.variant, className: clsx(isActive && "bg-accent text-accent-foreground"), children: /* @__PURE__ */ jsx(Link, { href: item.href, children: ItemContent }) }, `item-${index}`);
  }
  return /* @__PURE__ */ jsx(MenubarItem, { disabled: item.disabled, inset: item.inset, variant: item.variant, children: ItemContent }, `item-${index}`);
}
function renderMenuConfigItem(configItem, index, context) {
  const { currentPath, IconSprite, spriteKey } = context;
  if (configItem.radioGroup) {
    return /* @__PURE__ */ jsxs(MenubarMenu, { children: [
      /* @__PURE__ */ jsx(MenubarTrigger, { children: "Radio Group" }),
      /* @__PURE__ */ jsx(MenubarContent, { children: /* @__PURE__ */ jsx(MenubarRadioGroup, { value: configItem.value, children: configItem.items?.map((item, itemIndex) => renderMenubarItem(item, itemIndex, context)) }) })
    ] }, `radio-menu-${index}`);
  }
  if (configItem.component) {
    const Component = configItem.component;
    return /* @__PURE__ */ jsx(MenubarMenu, { children: /* @__PURE__ */ jsx(MenubarTrigger, { asChild: true, children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Component, { spriteKey }) }) }) }, `component-menu-${index}`);
  }
  if (configItem.href) {
    const isActive = currentPath === configItem.href;
    return /* @__PURE__ */ jsx(MenubarMenu, { children: /* @__PURE__ */ jsx(MenubarTrigger, { asChild: true, className: clsx(isActive && "bg-accent text-accent-foreground"), children: /* @__PURE__ */ jsxs(Link, { href: configItem.href, children: [
      configItem.iconId && /* @__PURE__ */ jsx(IconSprite, { iconId: configItem.iconId, className: "mr-2 size-4" }),
      configItem.label
    ] }) }) }, `nav-link-${index}`);
  }
  return /* @__PURE__ */ jsxs(MenubarMenu, { children: [
    /* @__PURE__ */ jsxs(MenubarTrigger, { children: [
      configItem.iconId && /* @__PURE__ */ jsx(IconSprite, { iconId: configItem.iconId, className: "mr-2 size-4" }),
      configItem.label || "Menu",
      /* @__PURE__ */ jsx(IconSprite, { iconId: "ChevronDown", className: "ml-2 size-3" })
    ] }),
    /* @__PURE__ */ jsx(MenubarContent, { children: configItem.items?.map((item, itemIndex) => renderMenubarItem(item, itemIndex, context)) })
  ] }, `menu-${index}`);
}
function renderSheetItem(item, index, context, onItemClick) {
  const { currentPath, IconSprite } = context;
  if (item.separator) {
    return /* @__PURE__ */ jsx("div", { className: "my-2 h-px bg-border" }, `separator-${index}`);
  }
  if (item.component) {
    const Component = item.component;
    return /* @__PURE__ */ jsx(Component, {}, `component-${index}`);
  }
  const isActive = item.href && currentPath === item.href;
  if (item.items) {
    return /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "px-4 py-2 font-medium text-muted-foreground text-sm", children: [
        item.iconId && /* @__PURE__ */ jsx(IconSprite, { iconId: item.iconId, className: "mr-2 inline size-4" }),
        item.label
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-1 pl-4", children: item.items.map((subItem, subIndex) => renderSheetItem(subItem, index + subIndex, context, onItemClick)) })
    ] }, `submenu-${index}`);
  }
  const ItemContent = /* @__PURE__ */ jsxs("div", { className: clsx("flex items-center gap-3 rounded-md px-4 py-1 transition-colors hover:bg-accent hover:text-accent-foreground", isActive && "bg-accent text-accent-foreground"), children: [
    item.iconId && /* @__PURE__ */ jsx(IconSprite, { iconId: item.iconId, className: "size-4" }),
    /* @__PURE__ */ jsx("span", { children: item.label })
  ] });
  if (item.href) {
    return /* @__PURE__ */ jsx(Link, { href: item.href, onClick: onItemClick, children: ItemContent }, `item-${index}`);
  }
  return /* @__PURE__ */ jsx("div", { children: ItemContent }, `item-${index}`);
}
function renderSheetMenuSection(configItem, index, context, onItemClick) {
  if (configItem.component) {
    const Component = configItem.component;
    return /* @__PURE__ */ jsx(Component, { spriteKey: context.spriteKey }, `component-${index}`);
  }
  if (configItem.href) {
    const isActive = context.currentPath === configItem.href;
    return /* @__PURE__ */ jsx(Link, { href: configItem.href, onClick: onItemClick, children: /* @__PURE__ */ jsxs("div", { className: clsx("flex items-center gap-3 rounded-md px-4 py-1 transition-colors hover:bg-accent hover:text-accent-foreground", isActive && "bg-accent text-accent-foreground"), children: [
      configItem.iconId && /* @__PURE__ */ jsx(context.IconSprite, { iconId: configItem.iconId, className: "size-4" }),
      /* @__PURE__ */ jsx("span", { children: configItem.label })
    ] }) }, `nav-link-${index}`);
  }
  if (configItem.items) {
    return /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ jsxs("div", { className: "border-b px-4 py-2 font-medium text-muted-foreground text-sm", children: [
        configItem.iconId && /* @__PURE__ */ jsx(context.IconSprite, { iconId: configItem.iconId, className: "mr-2 inline size-4" }),
        configItem.label || "Menu"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-1", children: configItem.items.map((item, itemIndex) => renderSheetItem(item, itemIndex, context, onItemClick)) })
    ] }, `menu-${index}`);
  }
  return null;
}
function NavMenu({ navConfigItems, spriteKey = "lucide", navFilters, className }) {
  const location = useLocation();
  const IconSprite = createSpriteIcon(spriteKey);
  const contextValue = { currentPath: location.pathname, spriteKey, IconSprite };
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const sections = navConfigItems.sections || [{ menus: navConfigItems.menus || [] }];
  const filteredSections = navFilters ? sections.map((section) => ({
    ...section,
    menus: section.menus.filter((menu) => {
      if (!menu.filter || !Array.isArray(menu.filter)) {
        return true;
      }
      return menu.filter.some((filterValue) => navFilters.includes(filterValue));
    })
  })).filter((section) => section.menus.length > 0) : sections;
  const allMenus = filteredSections.flatMap((section) => section.menus);
  return /* @__PURE__ */ jsxs(MenubarContext.Provider, { value: contextValue, children: [
    /* @__PURE__ */ jsx("div", { className: "fixed top-4 left-4 z-50 md:hidden", children: /* @__PURE__ */ jsxs(Sheet, { open: isSheetOpen, onOpenChange: setIsSheetOpen, children: [
      /* @__PURE__ */ jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", className: "flex items-center gap-2 shadow-lg", children: /* @__PURE__ */ jsx(IconSprite, { iconId: "EllipsisVertical", className: "size-4" }) }) }),
      /* @__PURE__ */ jsx(SheetContent, { side: "left", className: "w-80 px-2 pt-4", children: /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-col gap-2", children: allMenus.map((configItem, index) => renderSheetMenuSection(configItem, index, contextValue, () => setIsSheetOpen(false))) }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "hidden md:block", children: filteredSections.length <= 1 ? /* @__PURE__ */ jsx(Menubar, { className: clsx(className), children: allMenus.map((configItem, index) => renderMenuConfigItem(configItem, index, contextValue)) }) : /* @__PURE__ */ jsx(Menubar, { className: clsx(className), children: filteredSections.map((section, sectionIndex) => (
      // biome-ignore lint/suspicious/noArrayIndexKey: acceptable
      /* @__PURE__ */ jsx("div", { className: "flex gap-x-2", children: section.menus.map((configItem, menuIndex) => renderMenuConfigItem(configItem, sectionIndex + menuIndex, contextValue)) }, `section-${sectionIndex}`)
    )) }) })
  ] });
}
function Header({ children, className }) {
  return /* @__PURE__ */ jsx("header", { className: "print:hidden", children: /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col md:py-8 md:pl-8", children: /* @__PURE__ */ jsx("div", { className: clsx("flew-row flex w-full justify-around md:justify-start md:gap-x-8", className), children }) }) }) });
}
function Footer({ children, className }) {
  return /* @__PURE__ */ jsx("footer", { className: "sticky top-[100vh] flex w-full flex-col items-center bg-opacity-100 pt-12 pb-8 print:hidden", children: /* @__PURE__ */ jsx("p", { className: clsx("text-xs uppercase text-opacity-30", className), children }) });
}
export {
  ErrorActions,
  ErrorDevDetails,
  ErrorLayout,
  ErrorMessage,
  Footer,
  GeneralErrorBoundary,
  Header,
  LoadingBar,
  NavMenu,
  getErrorMessage,
  getErrorTitle
};
//# sourceMappingURL=index.js.map
