import { cva } from "class-variance-authority";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import clsx, { clsx as clsx$1 } from "clsx";
import React, { createContext, useState, useEffect, useId, useMemo } from "react";
import { createSpriteIcon, SpriteIcon as SpriteIcon$1 } from "@ycore/componentry/images";
import { Slot, Select as Select$2, unstable_OneTimePasswordField, Tooltip as Tooltip$2, Accordion as Accordion$2, AlertDialog as AlertDialog$2, AspectRatio as AspectRatio$1, Avatar as Avatar$2, DropdownMenu as DropdownMenu$2, Label as Label$1, Checkbox as Checkbox$1, Collapsible as Collapsible$2, Dialog as Dialog$2, Popover as Popover$2, ContextMenu as ContextMenu$2, HoverCard as HoverCard$2, Menubar as Menubar$2, NavigationMenu as NavigationMenu$2, Progress as Progress$1, RadioGroup as RadioGroup$2, ScrollArea as ScrollArea$2, Separator as Separator$1, Slider as Slider$1, Switch as Switch$1, Tabs as Tabs$2, Toggle as Toggle$2, ToggleGroup as ToggleGroup$2 } from "radix-ui";
import { Link as Link$1, Await } from "react-router";
import { useTheme as useTheme$1 } from "next-themes";
import { toast, Toaster as Toaster$1 } from "sonner";
import { Command as Command$2 } from "cmdk";
import { FormProvider, Controller, useFormContext, useFormState } from "react-hook-form";
function createVariants(base, config) {
  return cva(base, config);
}
const SvgIcon = createSpriteIcon("lucide");
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
function Button$1({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Slot : "button";
  return /* @__PURE__ */ jsx(Comp, { "data-slot": "button", className: clsx(buttonVariants({ variant, size, className })), ...props });
}
function Pagination$1({ className, ...props }) {
  return /* @__PURE__ */ jsx("nav", { role: "navigation", "aria-label": "pagination", "data-slot": "pagination", className: clsx("mx-auto flex w-full justify-center", className), ...props });
}
function PaginationContent({ className, ...props }) {
  return /* @__PURE__ */ jsx("ul", { "data-slot": "pagination-content", className: clsx("flex flex-row items-center gap-1", className), ...props });
}
function PaginationItem({ ...props }) {
  return /* @__PURE__ */ jsx("li", { "data-slot": "pagination-item", ...props });
}
function PaginationLink({ className, isActive, size = "icon", ...props }) {
  return /* @__PURE__ */ jsx(
    "a",
    {
      "aria-current": isActive ? "page" : void 0,
      "data-slot": "pagination-link",
      "data-active": isActive,
      className: clsx(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size
        }),
        className
      ),
      ...props
    }
  );
}
function PaginationPrevious({ className, ...props }) {
  return /* @__PURE__ */ jsxs(PaginationLink, { "aria-label": "Go to previous page", size: "default", className: clsx("gap-1 px-2.5 sm:pl-2.5", className), ...props, children: [
    /* @__PURE__ */ jsx(SvgIcon, { iconId: "ChevronLeft" }),
    /* @__PURE__ */ jsx("span", { className: "hidden sm:block", children: "Previous" })
  ] });
}
function PaginationNext({ className, ...props }) {
  return /* @__PURE__ */ jsxs(PaginationLink, { "aria-label": "Go to next page", size: "default", className: clsx("gap-1 px-2.5 sm:pr-2.5", className), ...props, children: [
    /* @__PURE__ */ jsx("span", { className: "hidden sm:block", children: "Next" }),
    /* @__PURE__ */ jsx(SvgIcon, { iconId: "ChevronRight" })
  ] });
}
function PaginationEllipsis({ className, ...props }) {
  return /* @__PURE__ */ jsxs("span", { "aria-hidden": true, "data-slot": "pagination-ellipsis", className: clsx("flex size-9 items-center justify-center", className), ...props, children: [
    /* @__PURE__ */ jsx(SvgIcon, { iconId: "Ellipsis", className: "size-4" }),
    /* @__PURE__ */ jsx("span", { className: "sr-only", children: "More pages" })
  ] });
}
function Select$1({ ...props }) {
  return /* @__PURE__ */ jsx(Select$2.Root, { "data-slot": "select", ...props });
}
function SelectGroup({ ...props }) {
  return /* @__PURE__ */ jsx(Select$2.Group, { "data-slot": "select-group", ...props });
}
function SelectValue({ ...props }) {
  return /* @__PURE__ */ jsx(Select$2.Value, { "data-slot": "select-value", ...props });
}
function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    Select$2.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": size,
      className: clsx(
        "flex w-fit items-center justify-between gap-2 whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[size=default]:h-9 data-[size=sm]:h-8 data-[placeholder]:text-muted-foreground *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:hover:bg-input/50 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(Select$2.Icon, { asChild: true, children: /* @__PURE__ */ jsx(SvgIcon, { iconId: "ChevronDown", className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function SelectContent({ className, children, position = "popper", align = "center", ...props }) {
  return /* @__PURE__ */ jsx(Select$2.Portal, { children: /* @__PURE__ */ jsxs(
    Select$2.Content,
    {
      "data-slot": "select-content",
      className: clsx(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=closed]:animate-out data-[state=open]:animate-in",
        position === "popper" && "data-[side=left]:-translate-x-1 data-[side=top]:-translate-y-1 data-[side=right]:translate-x-1 data-[side=bottom]:translate-y-1",
        className
      ),
      position,
      align,
      ...props,
      children: [
        /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsx(Select$2.Viewport, { className: clsx("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"), children }),
        /* @__PURE__ */ jsx(SelectScrollDownButton, {})
      ]
    }
  ) });
}
function SelectLabel({ className, ...props }) {
  return /* @__PURE__ */ jsx(Select$2.Label, { "data-slot": "select-label", className: clsx("px-2 py-1.5 text-muted-foreground text-xs", className), ...props });
}
function SelectItem({ className, children, ...props }) {
  return /* @__PURE__ */ jsxs(
    Select$2.Item,
    {
      "data-slot": "select-item",
      className: clsx(
        "relative flex w-full cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(Select$2.ItemIndicator, { children: /* @__PURE__ */ jsx(SvgIcon, { iconId: "Check", className: "size-4" }) }) }),
        /* @__PURE__ */ jsx(Select$2.ItemText, { children })
      ]
    }
  );
}
function SelectSeparator({ className, ...props }) {
  return /* @__PURE__ */ jsx(Select$2.Separator, { "data-slot": "select-separator", className: clsx("-mx-1 pointer-events-none my-1 h-px bg-border", className), ...props });
}
function SelectScrollUpButton({ className, ...props }) {
  return /* @__PURE__ */ jsx(Select$2.ScrollUpButton, { "data-slot": "select-scroll-up-button", className: clsx("flex cursor-default items-center justify-center py-1", className), ...props, children: /* @__PURE__ */ jsx(SvgIcon, { iconId: "ChevronUp", className: "size-4" }) });
}
function SelectScrollDownButton({ className, ...props }) {
  return /* @__PURE__ */ jsx(Select$2.ScrollDownButton, { "data-slot": "select-scroll-down-button", className: clsx("flex cursor-default items-center justify-center py-1", className), ...props, children: /* @__PURE__ */ jsx(SvgIcon, { iconId: "ChevronDown", className: "size-4" }) });
}
function DataPagination$1({
  currentRecords,
  pagination,
  totalRecords,
  baseRoute,
  routeParams = {},
  perPageOptions = [25, 50, 100, 200],
  fetcher,
  isLoading = false,
  loadingIcon = true
}) {
  const buildUrl = (params) => {
    const urlParams = new URLSearchParams();
    Object.entries(routeParams).forEach(([key, value]) => {
      if (value) urlParams.set(key, value);
    });
    Object.entries(params).forEach(([key, value]) => {
      urlParams.set(key, value);
    });
    const baseUrl = baseRoute;
    return `${baseUrl}?${urlParams.toString()}`;
  };
  const navigateToUrl = (url) => {
    try {
      fetcher.load(url);
      window.history.pushState({}, "", url);
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };
  const handleLimitChange = (newLimit) => {
    const url = buildUrl({
      limit: newLimit.toString(),
      page: "1"
    });
    navigateToUrl(url);
  };
  const handlePageChange = (newPage) => {
    const url = buildUrl({
      page: newPage.toString(),
      limit: pagination.limit.toString()
    });
    navigateToUrl(url);
  };
  return /* @__PURE__ */ jsx("div", { className: "border-b p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(PaginationControls, { currentPage: pagination.page, hasNextPage: pagination.hasNextPage, hasPreviousPage: pagination.hasPreviousPage, onPageChange: handlePageChange, disabled: isLoading }),
      isLoading && loadingIcon && /* @__PURE__ */ jsx(SvgIcon, { iconId: "LoaderCircle", className: "h-4 w-4 animate-spin text-muted-foreground" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsx(RowsPerPageSelector, { currentLimit: pagination.limit, options: perPageOptions, onLimitChange: handleLimitChange, disabled: isLoading }),
      /* @__PURE__ */ jsx(RecordCountDisplay, { currentPage: pagination.page, currentRecords, hasNextPage: pagination.hasNextPage, totalRecords })
    ] })
  ] }) });
}
function RowsPerPageSelector({ currentLimit, options, onLimitChange, disabled = false }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsx("label", { htmlFor: "rows-per-page", className: "font-medium text-sm", children: "Rows per page:" }),
    /* @__PURE__ */ jsxs(
      Select$1,
      {
        value: currentLimit.toString(),
        onValueChange: (value) => {
          onLimitChange(Number.parseInt(value, 10));
        },
        disabled,
        children: [
          /* @__PURE__ */ jsx(SelectTrigger, { className: "w-20", children: /* @__PURE__ */ jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsx(SelectContent, { children: options.map((option) => /* @__PURE__ */ jsx(SelectItem, { value: option.toString(), children: option }, option)) })
        ]
      }
    )
  ] });
}
function RecordCountDisplay({ currentPage, currentRecords, hasNextPage, totalRecords }) {
  if (currentRecords === 0) {
    return null;
  }
  if (totalRecords !== void 0) {
    const currentLimit = currentRecords;
    const start = (currentPage - 1) * currentLimit + 1;
    const end = Math.min(currentPage * currentLimit, totalRecords);
    return /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground text-sm", children: [
      "Showing ",
      start,
      "-",
      end,
      " of ",
      totalRecords.toLocaleString(),
      " records"
    ] });
  }
  return /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground text-sm", children: [
    "Page ",
    currentPage,
    " • ",
    currentRecords,
    " records ",
    hasNextPage ? "(more available)" : ""
  ] });
}
function PaginationControls({ currentPage, hasNextPage, hasPreviousPage, onPageChange, disabled = false }) {
  if (!hasPreviousPage && !hasNextPage) {
    return null;
  }
  const handlePageClick = (page, e) => {
    e.preventDefault();
    if (!disabled && page !== currentPage) {
      onPageChange(page);
    }
  };
  const handleNavigationClick = (page, e) => {
    e.preventDefault();
    if (!disabled) {
      onPageChange(page);
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx(Pagination$1, { children: /* @__PURE__ */ jsxs(PaginationContent, { children: [
    /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsx(PaginationPrevious, { href: "#", className: hasPreviousPage ? "" : "pointer-events-none opacity-50", onClick: (e) => handleNavigationClick(currentPage - 1, e) }) }),
    currentPage > 2 && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsx(PaginationLink, { href: "#", onClick: (e) => handlePageClick(1, e), children: "1" }) }),
      currentPage > 3 && /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsx(PaginationEllipsis, {}) })
    ] }),
    hasPreviousPage && /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsx(PaginationLink, { href: "#", onClick: (e) => handlePageClick(currentPage - 1, e), children: currentPage - 1 }) }),
    /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsx(PaginationLink, { href: "#", isActive: true, children: currentPage }) }),
    hasNextPage && /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsx(PaginationLink, { href: "#", onClick: (e) => handlePageClick(currentPage + 1, e), children: currentPage + 1 }) }),
    hasNextPage && /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsx(PaginationEllipsis, {}) }),
    /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsx(PaginationNext, { href: "#", className: hasNextPage ? "" : "pointer-events-none opacity-50", onClick: (e) => handleNavigationClick(currentPage + 1, e) }) })
  ] }) }) });
}
function InputOtp$1({ value, onValueChange, containerClassName, children, ...props }) {
  return /* @__PURE__ */ jsx(unstable_OneTimePasswordField.Root, { "data-slot": "input-otp", className: containerClassName, value, onValueChange, ...props, children });
}
function InputOtpGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "input-otp-group", className: clsx("flex items-center gap-2", className), ...props });
}
function InputOtpSlot({ className, index, ...props }) {
  return /* @__PURE__ */ jsx(
    unstable_OneTimePasswordField.Input,
    {
      "data-slot": "input-otp-slot",
      "data-index": index,
      className: clsx(
        "relative flex h-10 w-10 items-center justify-center border-2 border-input bg-background text-sm transition-all dark:border",
        "rounded-md",
        "caret-transparent selection:bg-transparent selection:text-foreground",
        "focus-visible:z-10 focus-visible:border-ring focus-visible:outline-none",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-destructive",
        "text-center font-medium",
        className
      ),
      ...props
    }
  );
}
function InputOtpHiddenInput(props) {
  return /* @__PURE__ */ jsx(unstable_OneTimePasswordField.HiddenInput, { "data-slot": "input-otp-hidden", ...props });
}
const iconNames = [
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "BadgeCheck",
  "Calendar",
  "Check",
  "ChevronsDownUp",
  "ChevronsUpDown",
  "ChevronDown",
  "ChevronLeft",
  "ChevronRight",
  "ChevronUp",
  "CircleAlert",
  "CircleCheck",
  "CircleQuestionMark",
  "CircleSmall",
  "Circle",
  "Dot",
  "EllipsisVertical",
  "Ellipsis",
  "House",
  "Info",
  "LoaderCircle",
  "Loader",
  "Moon",
  "PanelBottom",
  "PanelLeft",
  "PanelRight",
  "PanelTop",
  "Search",
  "Slash",
  "Sun",
  "Trash2",
  "UserRound",
  "X"
];
const Link = React.forwardRef(function Link2(props, ref) {
  return /* @__PURE__ */ jsx(Link$1, { ...props, to: props.href, ref });
});
createContext(null);
function SpriteIcon({ spriteUrl, iconId, ...props }) {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: acceptable
    /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", ...props, children: iconId ? /* @__PURE__ */ jsx("use", { href: `${spriteUrl}#${iconId}` }) : /* @__PURE__ */ jsx("use", { href: `${spriteUrl}` }) })
  );
}
const useTheme = useTheme$1;
const THEME_OPTIONS = { theme: { light: "light", dark: "dark" } };
const ThemeSwitchButton = ({
  themeContext,
  theme,
  spriteUrl,
  className,
  classTheme
}) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const resolvedTheme = themeContext?.resolvedTheme;
  const setTheme = themeContext?.setTheme;
  if (!mounted) return null;
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      className: clsx("size-5 hover:animate-rotate", classTheme),
      onClick: (e) => {
        if (!setTheme) return;
        setTheme(resolvedTheme === theme.theme.dark ? theme.theme.light : theme.theme.dark);
        e.preventDefault();
        e.stopPropagation();
      },
      "aria-label": "theme switch",
      children: resolvedTheme === theme.theme.dark ? /* @__PURE__ */ jsx(SpriteIcon$1, { spriteUrl, iconId: "Moon", className: clsx("size-5", className) }) : /* @__PURE__ */ jsx(SpriteIcon$1, { spriteUrl, iconId: "Sun", className: clsx("size-5", className) })
    }
  );
};
const ThemeSwitch = ({ theme = THEME_OPTIONS, spriteUrl, className, classTheme, children }) => {
  const nextThemeContext = useTheme();
  const themeContext = nextThemeContext ? { resolvedTheme: nextThemeContext.resolvedTheme, setTheme: nextThemeContext.setTheme } : null;
  if (children) {
    return children({ themeContext, theme, spriteUrl, className, classTheme });
  }
  return /* @__PURE__ */ jsx(ThemeSwitchButton, { themeContext, theme, spriteUrl, className, classTheme });
};
function TooltipProvider({ delayDuration = 0, ...props }) {
  return /* @__PURE__ */ jsx(Tooltip$2.Provider, { "data-slot": "tooltip-provider", delayDuration, ...props });
}
function Tooltip$1({ ...props }) {
  return /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsx(Tooltip$2.Root, { "data-slot": "tooltip", ...props }) });
}
function TooltipTrigger({ ...props }) {
  return /* @__PURE__ */ jsx(Tooltip$2.Trigger, { "data-slot": "tooltip-trigger", ...props });
}
function TooltipContent({ className, sideOffset = 0, children, ...props }) {
  return /* @__PURE__ */ jsx(Tooltip$2.Portal, { children: /* @__PURE__ */ jsxs(
    Tooltip$2.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset,
      className: clsx(
        "fade-in-0 zoom-in-95 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) animate-in text-balance rounded-md bg-foreground px-3 py-1.5 text-background text-xs data-[state=closed]:animate-out",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(Tooltip$2.Arrow, { className: "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground" })
      ]
    }
  ) });
}
function Accordion$1({ ...props }) {
  return /* @__PURE__ */ jsx(Accordion$2.Root, { "data-slot": "accordion", ...props });
}
function AccordionItem({ className, ...props }) {
  return /* @__PURE__ */ jsx(Accordion$2.Item, { "data-slot": "accordion-item", className: clsx("border-b last:border-b-0", className), ...props });
}
function AccordionTrigger({ className, children, ...props }) {
  return /* @__PURE__ */ jsx(Accordion$2.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
    Accordion$2.Trigger,
    {
      "data-slot": "accordion-trigger",
      className: clsx(
        "flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left font-medium text-sm outline-none transition-all hover:underline focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(SvgIcon, { iconId: "ChevronDown", className: "pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200" })
      ]
    }
  ) });
}
function AccordionContent({ className, children, ...props }) {
  return /* @__PURE__ */ jsx(Accordion$2.Content, { "data-slot": "accordion-content", className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down", ...props, children: /* @__PURE__ */ jsx("div", { className: clsx("pt-0 pb-4", className), children }) });
}
function AccordionDemo() {
  return /* @__PURE__ */ jsxs(Accordion$1, { type: "single", collapsible: true, className: "w-full", defaultValue: "item-1", children: [
    /* @__PURE__ */ jsxs(AccordionItem, { value: "item-1", children: [
      /* @__PURE__ */ jsx(AccordionTrigger, { children: "Product Information" }),
      /* @__PURE__ */ jsxs(AccordionContent, { className: "flex flex-col gap-4 text-balance", children: [
        /* @__PURE__ */ jsx("p", { children: "Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability." }),
        /* @__PURE__ */ jsx("p", { children: "Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and experts." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(AccordionItem, { value: "item-2", children: [
      /* @__PURE__ */ jsx(AccordionTrigger, { children: "Shipping Details" }),
      /* @__PURE__ */ jsxs(AccordionContent, { className: "flex flex-col gap-4 text-balance", children: [
        /* @__PURE__ */ jsx("p", { children: "We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days." }),
        /* @__PURE__ */ jsx("p", { children: "All orders are carefully packaged and fully insured. Track your shipment in real-time through our dedicated tracking portal." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(AccordionItem, { value: "item-3", children: [
      /* @__PURE__ */ jsx(AccordionTrigger, { children: "Return Policy" }),
      /* @__PURE__ */ jsxs(AccordionContent, { className: "flex flex-col gap-4 text-balance", children: [
        /* @__PURE__ */ jsx("p", { children: "We stand behind our products with a comprehensive 30-day return policy. If you're not completely satisfied, simply return the item in its original condition." }),
        /* @__PURE__ */ jsx("p", { children: "Our hassle-free return process includes free return shipping and full refunds processed within 48 hours of receiving the returned item." })
      ] })
    ] })
  ] });
}
const alertVariants = createVariants(
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
function Alert$1({ className, variant, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "alert", role: "alert", className: clsx(alertVariants({ variant }), className), ...props });
}
function AlertTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "alert-title", className: clsx("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", className), ...props });
}
function AlertDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "alert-description", className: clsx("col-start-2 grid justify-items-start gap-1 text-muted-foreground text-sm [&_p]:leading-relaxed", className), ...props });
}
function AlertDemo({ spriteUrl }) {
  return /* @__PURE__ */ jsxs("div", { className: "grid w-full max-w-xl items-start gap-4", children: [
    /* @__PURE__ */ jsxs(Alert$1, { children: [
      /* @__PURE__ */ jsx(SpriteIcon, { iconId: "CircleCheck", spriteUrl }),
      /* @__PURE__ */ jsx(AlertTitle, { children: "Success! Your changes have been saved" }),
      /* @__PURE__ */ jsx(AlertDescription, { children: "This is an alert with icon, title and description." })
    ] }),
    /* @__PURE__ */ jsxs(Alert$1, { children: [
      /* @__PURE__ */ jsx(SpriteIcon, { iconId: "Calendar", spriteUrl }),
      /* @__PURE__ */ jsx(AlertTitle, { children: "This Alert has a title and an icon. No description." })
    ] }),
    /* @__PURE__ */ jsxs(Alert$1, { variant: "destructive", children: [
      /* @__PURE__ */ jsx(SpriteIcon, { iconId: "CircleAlert", spriteUrl }),
      /* @__PURE__ */ jsx(AlertTitle, { children: "Unable to process your payment." }),
      /* @__PURE__ */ jsxs(AlertDescription, { children: [
        /* @__PURE__ */ jsx("p", { children: "Please verify your billing information and try again." }),
        /* @__PURE__ */ jsxs("ul", { className: "list-inside list-disc text-sm", children: [
          /* @__PURE__ */ jsx("li", { children: "Check your card details" }),
          /* @__PURE__ */ jsx("li", { children: "Ensure sufficient funds" }),
          /* @__PURE__ */ jsx("li", { children: "Verify billing address" })
        ] })
      ] })
    ] })
  ] });
}
function AlertDestructive({ spriteUrl }) {
  return /* @__PURE__ */ jsxs(Alert$1, { variant: "destructive", children: [
    /* @__PURE__ */ jsx(SpriteIcon, { iconId: "CircleAlert", spriteUrl }),
    /* @__PURE__ */ jsx(AlertTitle, { children: "Error" }),
    /* @__PURE__ */ jsx(AlertDescription, { children: "Your session has expired. Please log in again." })
  ] });
}
function AlertDialog$1({ ...props }) {
  return /* @__PURE__ */ jsx(AlertDialog$2.Root, { "data-slot": "alert-dialog", ...props });
}
function AlertDialogTrigger({ ...props }) {
  return /* @__PURE__ */ jsx(AlertDialog$2.Trigger, { "data-slot": "alert-dialog-trigger", ...props });
}
function AlertDialogPortal({ ...props }) {
  return /* @__PURE__ */ jsx(AlertDialog$2.Portal, { "data-slot": "alert-dialog-portal", ...props });
}
function AlertDialogOverlay({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    AlertDialog$2.Overlay,
    {
      "data-slot": "alert-dialog-overlay",
      className: clsx("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=open]:animate-in", className),
      ...props
    }
  );
}
function AlertDialogContent({ className, ...props }) {
  return /* @__PURE__ */ jsxs(AlertDialogPortal, { children: [
    /* @__PURE__ */ jsx(AlertDialogOverlay, {}),
    /* @__PURE__ */ jsx(
      AlertDialog$2.Content,
      {
        "data-slot": "alert-dialog-content",
        className: clsx(
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 data-[state=closed]:animate-out data-[state=open]:animate-in sm:max-w-lg",
          className
        ),
        ...props
      }
    )
  ] });
}
function AlertDialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "alert-dialog-header", className: clsx("flex flex-col gap-2 text-center sm:text-left", className), ...props });
}
function AlertDialogFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "alert-dialog-footer", className: clsx("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className), ...props });
}
function AlertDialogTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx(AlertDialog$2.Title, { "data-slot": "alert-dialog-title", className: clsx("font-semibold text-lg", className), ...props });
}
function AlertDialogDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx(AlertDialog$2.Description, { "data-slot": "alert-dialog-description", className: clsx("text-muted-foreground text-sm", className), ...props });
}
function AlertDialogAction({ className, ...props }) {
  return /* @__PURE__ */ jsx(AlertDialog$2.Action, { className: clsx(buttonVariants(), className), ...props });
}
function AlertDialogCancel({ className, ...props }) {
  return /* @__PURE__ */ jsx(AlertDialog$2.Cancel, { className: clsx(buttonVariants({ variant: "outline" }), className), ...props });
}
function AlertDialogDemo() {
  return /* @__PURE__ */ jsxs(AlertDialog$1, { children: [
    /* @__PURE__ */ jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button$1, { variant: "outline", children: "Show Dialog" }) }),
    /* @__PURE__ */ jsxs(AlertDialogContent, { children: [
      /* @__PURE__ */ jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsx(AlertDialogTitle, { children: "Are you absolutely sure?" }),
        /* @__PURE__ */ jsx(AlertDialogDescription, { children: "This action cannot be undone. This will permanently delete your account and remove your data from our servers." })
      ] }),
      /* @__PURE__ */ jsxs(AlertDialogFooter, { children: [
        /* @__PURE__ */ jsx(AlertDialogCancel, { children: "Cancel" }),
        /* @__PURE__ */ jsx(AlertDialogAction, { children: "Continue" })
      ] })
    ] })
  ] });
}
function Spinner({ className, iconId = "Loader", ...props }) {
  return /* @__PURE__ */ jsx(SvgIcon, { iconId, role: "status", "aria-label": "Loading", className: clsx("size-4 animate-spin", className), ...props });
}
const createRemoteImagePromise = (src, alt, width, height) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({ src, alt, width: width || img.naturalWidth, height: height || img.naturalHeight, loading: "lazy" });
    };
    img.onerror = () => {
      reject(new Error(`Failed to load image: ${src}`));
    };
    img.src = src;
  });
};
function LazyImage({ image, src, alt, width, height, className, spriteUrl, fallback = spriteUrl ? /* @__PURE__ */ jsx(Spinner, {}) : /* @__PURE__ */ jsx("div", { className: "text-slate-500/50", children: "Loading..." }) }) {
  const imagePromise = image || (src ? createRemoteImagePromise(src, alt || "", width, height) : null);
  if (!imagePromise) {
    return /* @__PURE__ */ jsx("div", { className: "text-slate-500/50", children: "Error: No image source provided" });
  }
  return /* @__PURE__ */ jsx(React.Suspense, { fallback, children: /* @__PURE__ */ jsx(TypedAwait, { resolve: imagePromise, errorElement: spriteUrl ? /* @__PURE__ */ jsx(Spinner, { className: "text-slate-500/50" }) : /* @__PURE__ */ jsx("div", { className: "text-slate-500/50", children: "Error loading image" }), children: (imageData) => /* @__PURE__ */ jsx(ImageElement, { ...imageData, className: clsx(imageData.className, className) }) }) });
}
function TypedAwait({ resolve, children, ...props }) {
  return /* @__PURE__ */ jsx(Await, { resolve, ...props, children: (data) => children(data) });
}
const ImageElement = ({ src, alt, width, height, className, loading = "lazy" }) => {
  return /* @__PURE__ */ jsx("img", { src, alt, width, height, className, loading, decoding: "async" });
};
function AspectRatio({ ...props }) {
  return /* @__PURE__ */ jsx(AspectRatio$1.Root, { "data-slot": "aspect-ratio", ...props });
}
function AspectRatioDemo() {
  return /* @__PURE__ */ jsx(AspectRatio, { ratio: 16 / 9, className: "rounded-lg bg-muted", children: /* @__PURE__ */ jsx(LazyImage, { src: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80", alt: "Photo by Drew Beamer", className: "h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale" }) });
}
function Avatar$1({ className, ...props }) {
  return /* @__PURE__ */ jsx(Avatar$2.Root, { "data-slot": "avatar", className: clsx("relative flex size-8 shrink-0 overflow-hidden rounded-full", className), ...props });
}
function AvatarImage({ className, ...props }) {
  return /* @__PURE__ */ jsx(Avatar$2.Image, { "data-slot": "avatar-image", className: clsx("aspect-square size-full", className), ...props });
}
function AvatarFallback({ className, ...props }) {
  return /* @__PURE__ */ jsx(Avatar$2.Fallback, { "data-slot": "avatar-fallback", className: clsx("flex size-full items-center justify-center rounded-full bg-muted", className), ...props });
}
function AvatarDemo() {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-row flex-wrap items-center gap-12", children: [
    /* @__PURE__ */ jsxs(Avatar$1, { children: [
      /* @__PURE__ */ jsx(AvatarImage, { src: "https://github.com/shadcn.png", alt: "@shadcn" }),
      /* @__PURE__ */ jsx(AvatarFallback, { children: "CN" })
    ] }),
    /* @__PURE__ */ jsxs(Avatar$1, { className: "rounded-lg", children: [
      /* @__PURE__ */ jsx(AvatarImage, { src: "https://github.com/evilrabbit.png", alt: "@evilrabbit" }),
      /* @__PURE__ */ jsx(AvatarFallback, { children: "ER" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "-space-x-2 flex *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale", children: [
      /* @__PURE__ */ jsxs(Avatar$1, { children: [
        /* @__PURE__ */ jsx(AvatarImage, { src: "https://github.com/shadcn.png", alt: "@shadcn" }),
        /* @__PURE__ */ jsx(AvatarFallback, { children: "CN" })
      ] }),
      /* @__PURE__ */ jsxs(Avatar$1, { children: [
        /* @__PURE__ */ jsx(AvatarImage, { src: "https://github.com/leerob.png", alt: "@leerob" }),
        /* @__PURE__ */ jsx(AvatarFallback, { children: "LR" })
      ] }),
      /* @__PURE__ */ jsxs(Avatar$1, { children: [
        /* @__PURE__ */ jsx(AvatarImage, { src: "https://github.com/evilrabbit.png", alt: "@evilrabbit" }),
        /* @__PURE__ */ jsx(AvatarFallback, { children: "ER" })
      ] })
    ] })
  ] });
}
const badgeVariants = createVariants(
  "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
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
function Badge$1({ className, variant, asChild = false, ...props }) {
  const Comp = asChild ? Slot.Slot : "span";
  return /* @__PURE__ */ jsx(Comp, { "data-slot": "badge", className: clsx(badgeVariants({ variant }), className), ...props });
}
function BadgeDemo({ spriteUrl }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-wrap gap-2", children: [
      /* @__PURE__ */ jsx(Badge$1, { children: "Badge" }),
      /* @__PURE__ */ jsx(Badge$1, { variant: "secondary", children: "Secondary" }),
      /* @__PURE__ */ jsx(Badge$1, { variant: "destructive", children: "Destructive" }),
      /* @__PURE__ */ jsx(Badge$1, { variant: "outline", children: "Outline" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-wrap gap-2", children: [
      /* @__PURE__ */ jsxs(Badge$1, { variant: "secondary", className: "bg-blue-500 text-white dark:bg-blue-600", children: [
        /* @__PURE__ */ jsx(SpriteIcon, { iconId: "BadgeCheck", spriteUrl }),
        "Verified"
      ] }),
      /* @__PURE__ */ jsx(Badge$1, { className: "h-5 min-w-5 rounded-full px-1 font-mono tabular-nums", children: "8" }),
      /* @__PURE__ */ jsx(Badge$1, { className: "h-5 min-w-5 rounded-full px-1 font-mono tabular-nums", variant: "destructive", children: "99" }),
      /* @__PURE__ */ jsx(Badge$1, { className: "h-5 min-w-5 rounded-full px-1 font-mono tabular-nums", variant: "outline", children: "20+" })
    ] })
  ] });
}
function BadgeDestructive() {
  return /* @__PURE__ */ jsx(Badge$1, { variant: "destructive", children: "Destructive" });
}
function BadgeOutline() {
  return /* @__PURE__ */ jsx(Badge$1, { variant: "outline", children: "Outline" });
}
function BadgeSecondary() {
  return /* @__PURE__ */ jsx(Badge$1, { variant: "secondary", children: "Secondary" });
}
function Breadcrumb$1({ ...props }) {
  return /* @__PURE__ */ jsx("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...props });
}
function BreadcrumbList({ className, ...props }) {
  return /* @__PURE__ */ jsx("ol", { "data-slot": "breadcrumb-list", className: clsx("flex flex-wrap items-center gap-1.5 break-words text-muted-foreground text-sm sm:gap-2.5", className), ...props });
}
function BreadcrumbItem({ className, ...props }) {
  return /* @__PURE__ */ jsx("li", { "data-slot": "breadcrumb-item", className: clsx("inline-flex items-center gap-1.5", className), ...props });
}
function BreadcrumbLink({
  asChild,
  className,
  ...props
}) {
  const Comp = asChild ? Slot.Slot : "a";
  return /* @__PURE__ */ jsx(Comp, { "data-slot": "breadcrumb-link", className: clsx("transition-colors hover:text-foreground", className), ...props });
}
function BreadcrumbPage({ className, ...props }) {
  return /* @__PURE__ */ jsx("span", { "data-slot": "breadcrumb-page", role: "link", "aria-disabled": "true", "aria-current": "page", className: clsx("font-normal text-foreground", className), ...props });
}
function BreadcrumbSeparator({ children, className, ...props }) {
  return /* @__PURE__ */ jsx("li", { "data-slot": "breadcrumb-separator", role: "presentation", "aria-hidden": "true", className: clsx("[&>svg]:size-3.5", className), ...props, children: children ?? /* @__PURE__ */ jsx(SvgIcon, { iconId: "ChevronRight" }) });
}
function BreadcrumbEllipsis({ className, ...props }) {
  return /* @__PURE__ */ jsxs("span", { "data-slot": "breadcrumb-ellipsis", role: "presentation", "aria-hidden": "true", className: clsx("flex size-9 items-center justify-center", className), ...props, children: [
    /* @__PURE__ */ jsx(SvgIcon, { iconId: "Ellipsis", className: "size-4" }),
    /* @__PURE__ */ jsx("span", { className: "sr-only", children: "More" })
  ] });
}
function DropdownMenu$1({ ...props }) {
  return /* @__PURE__ */ jsx(DropdownMenu$2.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuPortal({ ...props }) {
  return /* @__PURE__ */ jsx(DropdownMenu$2.Portal, { "data-slot": "dropdown-menu-portal", ...props });
}
function DropdownMenuTrigger({ ...props }) {
  return /* @__PURE__ */ jsx(DropdownMenu$2.Trigger, { "data-slot": "dropdown-menu-trigger", ...props });
}
function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
  return /* @__PURE__ */ jsx(DropdownMenu$2.Portal, { children: /* @__PURE__ */ jsx(
    DropdownMenu$2.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset,
      className: clsx(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=closed]:animate-out data-[state=open]:animate-in",
        className
      ),
      ...props
    }
  ) });
}
function DropdownMenuGroup({ ...props }) {
  return /* @__PURE__ */ jsx(DropdownMenu$2.Group, { "data-slot": "dropdown-menu-group", ...props });
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DropdownMenu$2.Item,
    {
      "data-slot": "dropdown-menu-item",
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
function DropdownMenuCheckboxItem({ className, children, checked, ...props }) {
  return /* @__PURE__ */ jsxs(
    DropdownMenu$2.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: clsx(
        "relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      ),
      checked,
      ...props,
      children: [
        /* @__PURE__ */ jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenu$2.ItemIndicator, { children: /* @__PURE__ */ jsx(SvgIcon, { iconId: "Check", className: "size-4" }) }) }),
        children
      ]
    }
  );
}
function DropdownMenuRadioGroup({ ...props }) {
  return /* @__PURE__ */ jsx(DropdownMenu$2.RadioGroup, { "data-slot": "dropdown-menu-radio-group", ...props });
}
function DropdownMenuRadioItem({ className, children, ...props }) {
  return /* @__PURE__ */ jsxs(
    DropdownMenu$2.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: clsx(
        "relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenu$2.ItemIndicator, { children: /* @__PURE__ */ jsx(SvgIcon, { iconId: "Circle", className: "size-2 fill-current" }) }) }),
        children
      ]
    }
  );
}
function DropdownMenuLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsx(DropdownMenu$2.Label, { "data-slot": "dropdown-menu-label", "data-inset": inset, className: clsx("px-2 py-1.5 font-medium text-sm data-[inset]:pl-8", className), ...props });
}
function DropdownMenuSeparator({ className, ...props }) {
  return /* @__PURE__ */ jsx(DropdownMenu$2.Separator, { "data-slot": "dropdown-menu-separator", className: clsx("-mx-1 my-1 h-px bg-border", className), ...props });
}
function DropdownMenuShortcut({ className, ...props }) {
  return /* @__PURE__ */ jsx("span", { "data-slot": "dropdown-menu-shortcut", className: clsx("ml-auto text-muted-foreground text-xs tracking-widest", className), ...props });
}
function DropdownMenuSub({ ...props }) {
  return /* @__PURE__ */ jsx(DropdownMenu$2.Sub, { "data-slot": "dropdown-menu-sub", ...props });
}
function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    DropdownMenu$2.SubTrigger,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": inset,
      className: clsx(
        "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[inset]:pl-8 data-[state=open]:text-accent-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(SvgIcon, { iconId: "ChevronRight", className: "ml-auto size-4" })
      ]
    }
  );
}
function DropdownMenuSubContent({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    DropdownMenu$2.SubContent,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: clsx(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=closed]:animate-out data-[state=open]:animate-in",
        className
      ),
      ...props
    }
  );
}
function BreadcrumbDemo() {
  return /* @__PURE__ */ jsx(Breadcrumb$1, { children: /* @__PURE__ */ jsxs(BreadcrumbList, { children: [
    /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbLink, { asChild: true, children: /* @__PURE__ */ jsx(Link, { href: "/", children: "Home" }) }) }),
    /* @__PURE__ */ jsx(BreadcrumbSeparator, {}),
    /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsxs(DropdownMenu$1, { children: [
      /* @__PURE__ */ jsxs(DropdownMenuTrigger, { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsx(BreadcrumbEllipsis, { className: "size-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Toggle menu" })
      ] }),
      /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "start", children: [
        /* @__PURE__ */ jsx(DropdownMenuItem, { children: "Documentation" }),
        /* @__PURE__ */ jsx(DropdownMenuItem, { children: "Themes" }),
        /* @__PURE__ */ jsx(DropdownMenuItem, { children: "GitHub" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(BreadcrumbSeparator, {}),
    /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbLink, { asChild: true, children: /* @__PURE__ */ jsx(Link, { href: "/docs/components", children: "Components" }) }) }),
    /* @__PURE__ */ jsx(BreadcrumbSeparator, {}),
    /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbPage, { children: "Breadcrumb" }) })
  ] }) });
}
function BreadcrumbWithDropdown({ spriteUrl }) {
  return /* @__PURE__ */ jsx(Breadcrumb$1, { children: /* @__PURE__ */ jsxs(BreadcrumbList, { children: [
    /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbLink, { asChild: true, children: /* @__PURE__ */ jsx(Link, { href: "/", children: "Home" }) }) }),
    /* @__PURE__ */ jsx(BreadcrumbSeparator, { children: /* @__PURE__ */ jsx(SpriteIcon, { iconId: "Slash", spriteUrl }) }),
    /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsxs(DropdownMenu$1, { children: [
      /* @__PURE__ */ jsxs(DropdownMenuTrigger, { className: "flex items-center gap-1 [&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0", children: [
        "Components",
        /* @__PURE__ */ jsx(SpriteIcon, { iconId: "ChevronDown", spriteUrl })
      ] }),
      /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "start", children: [
        /* @__PURE__ */ jsx(DropdownMenuItem, { children: "Documentation" }),
        /* @__PURE__ */ jsx(DropdownMenuItem, { children: "Themes" }),
        /* @__PURE__ */ jsx(DropdownMenuItem, { children: "GitHub" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(BreadcrumbSeparator, { children: /* @__PURE__ */ jsx(SpriteIcon, { iconId: "Slash", spriteUrl }) }),
    /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbPage, { children: "Breadcrumb" }) })
  ] }) });
}
function BreadcrumbCollapsed() {
  return /* @__PURE__ */ jsx(Breadcrumb$1, { children: /* @__PURE__ */ jsxs(BreadcrumbList, { children: [
    /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbLink, { asChild: true, children: /* @__PURE__ */ jsx(Link, { href: "/", children: "Home" }) }) }),
    /* @__PURE__ */ jsx(BreadcrumbSeparator, {}),
    /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbEllipsis, {}) }),
    /* @__PURE__ */ jsx(BreadcrumbSeparator, {}),
    /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbLink, { asChild: true, children: /* @__PURE__ */ jsx(Link, { href: "/docs/components", children: "Components" }) }) }),
    /* @__PURE__ */ jsx(BreadcrumbSeparator, {}),
    /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbPage, { children: "Breadcrumb" }) })
  ] }) });
}
function BreadcrumbWithCustomSeparator$1() {
  return /* @__PURE__ */ jsx(Breadcrumb$1, { children: /* @__PURE__ */ jsxs(BreadcrumbList, { children: [
    /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbLink, { asChild: true, children: /* @__PURE__ */ jsx(Link, { href: "/", children: "Home" }) }) }),
    /* @__PURE__ */ jsx(BreadcrumbSeparator, {}),
    /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbLink, { asChild: true, children: /* @__PURE__ */ jsx(Link, { href: "/components", children: "Components" }) }) }),
    /* @__PURE__ */ jsx(BreadcrumbSeparator, {}),
    /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbPage, { children: "Breadcrumb" }) })
  ] }) });
}
function BreadcrumbWithCustomSeparator({ spriteUrl }) {
  return /* @__PURE__ */ jsx(Breadcrumb$1, { children: /* @__PURE__ */ jsxs(BreadcrumbList, { children: [
    /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbLink, { asChild: true, children: /* @__PURE__ */ jsx(Link, { href: "/", children: "Home" }) }) }),
    /* @__PURE__ */ jsx(BreadcrumbSeparator, { children: /* @__PURE__ */ jsx(SpriteIcon, { iconId: "Slash", spriteUrl }) }),
    /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbLink, { asChild: true, children: /* @__PURE__ */ jsx(Link, { href: "/components", children: "Components" }) }) }),
    /* @__PURE__ */ jsx(BreadcrumbSeparator, { children: /* @__PURE__ */ jsx(SpriteIcon, { iconId: "Slash", spriteUrl }) }),
    /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbPage, { children: "Breadcrumb" }) })
  ] }) });
}
function ButtonAsChild() {
  return /* @__PURE__ */ jsx(Button$1, { asChild: true, children: /* @__PURE__ */ jsx(Link, { href: "/", children: "Sign in" }) });
}
function ButtonDemo() {
  return /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center gap-2 md:flex-row", children: /* @__PURE__ */ jsx(Button$1, { children: "Button" }) });
}
function ButtonDestructive() {
  return /* @__PURE__ */ jsx(Button$1, { variant: "destructive", children: "Destructive" });
}
function ButtonGhost() {
  return /* @__PURE__ */ jsx(Button$1, { variant: "ghost", children: "Ghost" });
}
function ButtonIcon({ spriteUrl }) {
  return /* @__PURE__ */ jsx(Button$1, { variant: "secondary", size: "icon", className: "size-8", children: /* @__PURE__ */ jsx(SpriteIcon, { iconId: "ChevronRight", spriteUrl }) });
}
function ButtonLink() {
  return /* @__PURE__ */ jsx(Button$1, { variant: "link", children: "Link" });
}
function ButtonLoading({ spriteUrl }) {
  return /* @__PURE__ */ jsxs(Button$1, { size: "sm", disabled: true, children: [
    /* @__PURE__ */ jsx(SpriteIcon, { iconId: "Loader", className: "animate-spin", spriteUrl }),
    "Please wait"
  ] });
}
function ButtonOutline() {
  return /* @__PURE__ */ jsx(Button$1, { variant: "outline", children: "Outline" });
}
function ButtonSecondary() {
  return /* @__PURE__ */ jsx(Button$1, { variant: "secondary", children: "Secondary" });
}
function ButtonWithIcon({ spriteUrl }) {
  return /* @__PURE__ */ jsxs(Button$1, { variant: "outline", size: "sm", children: [
    /* @__PURE__ */ jsx(SpriteIcon, { iconId: "Calendar", spriteUrl }),
    " New Branch"
  ] });
}
function Card$1({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "card", className: clsx("flex flex-col gap-6 rounded-xl border bg-card py-6 text-card-foreground shadow-sm", className), ...props });
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-header",
      className: clsx("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
      ...props
    }
  );
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "card-title", className: clsx("font-semibold leading-none", className), ...props });
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "card-description", className: clsx("text-muted-foreground text-sm", className), ...props });
}
function CardAction({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "card-action", className: clsx("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className), ...props });
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "card-content", className: clsx("px-6", className), ...props });
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "card-footer", className: clsx("flex items-center px-6 [.border-t]:pt-6", className), ...props });
}
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: clsx(
        "h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs outline-none transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30",
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
        className
      ),
      ...props
    }
  );
}
function Label({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Label$1.Root,
    {
      "data-slot": "label",
      className: clsx(
        "flex select-none items-center gap-2 font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50",
        className
      ),
      ...props
    }
  );
}
function CardDemo() {
  return /* @__PURE__ */ jsxs(Card$1, { className: "w-full max-w-sm", children: [
    /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsx(CardTitle, { children: "Login to your account" }),
      /* @__PURE__ */ jsx(CardDescription, { children: "Enter your email below to login to your account" }),
      /* @__PURE__ */ jsx(CardAction, { children: /* @__PURE__ */ jsx(Button$1, { variant: "link", children: "Sign Up" }) })
    ] }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("form", { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "cardemail", children: "cardemail" }),
        /* @__PURE__ */ jsx(Input, { id: "cardemail", type: "email", placeholder: "place@example.com", required: true })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "password", children: "Password" }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "ml-auto inline-block text-sm underline-offset-4 hover:underline", children: "Forgot your password?" })
        ] }),
        /* @__PURE__ */ jsx(Input, { id: "password", type: "password", required: true })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxs(CardFooter, { className: "flex-col gap-2", children: [
      /* @__PURE__ */ jsx(Button$1, { type: "submit", className: "w-full", children: "Login" }),
      /* @__PURE__ */ jsx(Button$1, { variant: "outline", className: "w-full", children: "Login with Google" })
    ] })
  ] });
}
function CardWithForm() {
  const nameId = React.useId();
  const frameworkId = React.useId();
  return /* @__PURE__ */ jsxs(Card$1, { className: "w-[350px]", children: [
    /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsx(CardTitle, { children: "Create project" }),
      /* @__PURE__ */ jsx(CardDescription, { children: "Deploy your new project in one-click." })
    ] }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("form", { children: /* @__PURE__ */ jsxs("div", { className: "grid w-full items-center gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: nameId, children: "Name" }),
        /* @__PURE__ */ jsx(Input, { id: nameId, placeholder: "Name of your project" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: frameworkId, children: "Framework" }),
        /* @__PURE__ */ jsxs(Select$1, { children: [
          /* @__PURE__ */ jsx(SelectTrigger, { id: frameworkId, className: "w-full", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select" }) }),
          /* @__PURE__ */ jsxs(SelectContent, { position: "popper", children: [
            /* @__PURE__ */ jsx(SelectItem, { value: "next", children: "Next.js" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "sveltekit", children: "SvelteKit" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "astro", children: "Astro" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "nuxt", children: "Nuxt.js" })
          ] })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxs(CardFooter, { className: "flex justify-between", children: [
      /* @__PURE__ */ jsx(Button$1, { variant: "outline", children: "Cancel" }),
      /* @__PURE__ */ jsx(Button$1, { children: "Deploy" })
    ] })
  ] });
}
function Checkbox({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Checkbox$1.Root,
    {
      "data-slot": "checkbox",
      className: clsx(
        "peer size-4 shrink-0 rounded-[4px] border border-input shadow-xs outline-none transition-shadow focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-input/30 dark:data-[state=checked]:bg-primary dark:aria-invalid:ring-destructive/40",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(Checkbox$1.Indicator, { "data-slot": "checkbox-indicator", className: "grid place-content-center text-current transition-none", children: /* @__PURE__ */ jsx(SvgIcon, { iconId: "Check", className: "size-3.5" }) })
    }
  );
}
function CheckboxDemo() {
  const termsId = React.useId();
  const terms2Id = React.useId();
  const toggleId = React.useId();
  const toggle2Id = React.useId();
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx(Checkbox, { id: termsId }),
      /* @__PURE__ */ jsx(Label, { htmlFor: termsId, children: "Accept terms and conditions" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsx(Checkbox, { id: terms2Id, defaultChecked: true }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: terms2Id, children: "Accept terms and conditions" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "By clicking this checkbox, you agree to the terms and conditions." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsx(Checkbox, { id: toggleId, disabled: true }),
      /* @__PURE__ */ jsx(Label, { htmlFor: toggleId, children: "Enable notifications" })
    ] }),
    /* @__PURE__ */ jsxs(Label, { className: "flex items-start gap-3 rounded-lg border p-3 hover:bg-accent/50 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950", children: [
      /* @__PURE__ */ jsx(
        Checkbox,
        {
          id: toggle2Id,
          defaultChecked: true,
          className: "data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-1.5 font-normal", children: [
        /* @__PURE__ */ jsx("p", { className: "font-medium text-sm leading-none", children: "Enable notifications" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "You can enable or disable notifications at any time." })
      ] })
    ] })
  ] });
}
function CheckboxDisabled() {
  const termsId = React.useId();
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
    /* @__PURE__ */ jsx(Checkbox, { id: termsId, disabled: true }),
    /* @__PURE__ */ jsx("label", { htmlFor: termsId, className: "font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", children: "Accept terms and conditions" })
  ] });
}
const items = [
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
function CheckboxReactHookFormMultiple() {
  const [selectedItems, setSelectedItems] = React.useState(["recents", "home"]);
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const items2 = formData.getAll("items");
    toast("You submitted the following values", {
      description: /* @__PURE__ */ jsx("pre", { className: "mt-2 w-[320px] rounded-md bg-neutral-950 p-4", children: /* @__PURE__ */ jsx("code", { className: "text-white", children: JSON.stringify({ items: items2 }, null, 2) }) })
    });
  }
  function handleCheckboxChange(itemId, checked) {
    if (checked) {
      setSelectedItems((prev) => [...prev, itemId]);
    } else {
      setSelectedItems((prev) => prev.filter((id) => id !== itemId));
    }
  }
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsx("div", { className: "text-base", children: "Sidebar" }),
      /* @__PURE__ */ jsx("div", { children: "Select the items you want to display in the sidebar." })
    ] }),
    items.map((item) => /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center gap-2", children: [
      /* @__PURE__ */ jsx(Checkbox, { name: "items", value: item.id, checked: selectedItems.includes(item.id), onCheckedChange: (checked) => handleCheckboxChange(item.id, !!checked) }),
      /* @__PURE__ */ jsx("div", { className: "font-normal text-sm", children: item.label })
    ] }, item.id)),
    /* @__PURE__ */ jsx(Button$1, { type: "submit", children: "Submit" })
  ] });
}
function CheckboxReactHookFormSingle() {
  const [mobileEnabled, setMobileEnabled] = React.useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const mobile = formData.has("mobile");
    toast("You submitted the following values", {
      description: /* @__PURE__ */ jsx("pre", { className: "mt-2 w-[320px] rounded-md bg-neutral-950 p-4", children: /* @__PURE__ */ jsx("code", { className: "text-white", children: JSON.stringify({ mobile }, null, 2) }) })
    });
  }
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "flex flex-col items-start gap-4", children: [
    /* @__PURE__ */ jsx(Checkbox, { name: "mobile", checked: mobileEnabled, onCheckedChange: setMobileEnabled }),
    /* @__PURE__ */ jsx(Button$1, { type: "submit", children: "Submit" })
  ] });
}
function CheckboxWithText() {
  const termsId = React.useId();
  return /* @__PURE__ */ jsxs("div", { className: "items-top flex gap-2", children: [
    /* @__PURE__ */ jsx(Checkbox, { id: termsId }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-1.5 leading-none", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: termsId, className: "font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", children: "Accept terms and conditions" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "You agree to our Terms of Service and Privacy Policy." })
    ] })
  ] });
}
function Collapsible$1({ ...props }) {
  return /* @__PURE__ */ jsx(Collapsible$2.Root, { "data-slot": "collapsible", ...props });
}
function CollapsibleTrigger({ ...props }) {
  return /* @__PURE__ */ jsx(Collapsible$2.CollapsibleTrigger, { "data-slot": "collapsible-trigger", ...props });
}
function CollapsibleContent({ ...props }) {
  return /* @__PURE__ */ jsx(Collapsible$2.CollapsibleContent, { "data-slot": "collapsible-content", ...props });
}
function CollapsibleDemo({ spriteUrl }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return /* @__PURE__ */ jsxs(Collapsible$1, { open: isOpen, onOpenChange: setIsOpen, className: "flex w-[350px] flex-col gap-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4 px-4", children: [
      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-sm", children: "@peduarte starred 3 repositories" }),
      /* @__PURE__ */ jsx(CollapsibleTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button$1, { variant: "ghost", size: "icon", className: "size-8", children: [
        /* @__PURE__ */ jsx(SpriteIcon, { iconId: "ChevronsUpDown", spriteUrl }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Toggle" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "rounded-md border px-4 py-2 font-mono text-sm", children: "@radix-ui/primitives" }),
    /* @__PURE__ */ jsxs(CollapsibleContent, { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsx("div", { className: "rounded-md border px-4 py-2 font-mono text-sm", children: "@radix-ui/colors" }),
      /* @__PURE__ */ jsx("div", { className: "rounded-md border px-4 py-2 font-mono text-sm", children: "@stitches/react" })
    ] })
  ] });
}
function Dialog$1({ ...props }) {
  return /* @__PURE__ */ jsx(Dialog$2.Root, { "data-slot": "dialog", ...props });
}
function DialogTrigger({ ...props }) {
  return /* @__PURE__ */ jsx(Dialog$2.Trigger, { "data-slot": "dialog-trigger", ...props });
}
function DialogPortal({ ...props }) {
  return /* @__PURE__ */ jsx(Dialog$2.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogClose({ ...props }) {
  return /* @__PURE__ */ jsx(Dialog$2.Close, { "data-slot": "dialog-close", ...props });
}
function DialogOverlay({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Dialog$2.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: clsx("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=open]:animate-in", className),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxs(
      Dialog$2.Content,
      {
        "data-slot": "dialog-content",
        className: clsx(
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 data-[state=closed]:animate-out data-[state=open]:animate-in sm:max-w-lg",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxs(
            Dialog$2.Close,
            {
              "data-slot": "dialog-close",
              className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
              children: [
                /* @__PURE__ */ jsx(SvgIcon, { iconId: "X" }),
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "dialog-header", className: clsx("flex flex-col gap-2 text-center sm:text-left", className), ...props });
}
function DialogFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "dialog-footer", className: clsx("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className), ...props });
}
function DialogTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx(Dialog$2.Title, { "data-slot": "dialog-title", className: clsx("font-semibold text-lg leading-none", className), ...props });
}
function DialogDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx(Dialog$2.Description, { "data-slot": "dialog-description", className: clsx("text-muted-foreground text-sm", className), ...props });
}
function Command$1({ className, ...props }) {
  return /* @__PURE__ */ jsx(Command$2, { "data-slot": "command", className: clsx("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", className), ...props });
}
function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs(Dialog$1, { ...props, children: [
    /* @__PURE__ */ jsxs(DialogHeader, { className: "sr-only", children: [
      /* @__PURE__ */ jsx(DialogTitle, { children: title }),
      /* @__PURE__ */ jsx(DialogDescription, { children: description })
    ] }),
    /* @__PURE__ */ jsx(DialogContent, { className: clsx("overflow-hidden p-0", className), showCloseButton, children: /* @__PURE__ */ jsx(Command$1, { className: "**:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children }) })
  ] });
}
function CommandInput({ className, ...props }) {
  return /* @__PURE__ */ jsxs("div", { "data-slot": "command-input-wrapper", className: "flex h-9 items-center gap-2 border-b px-3", children: [
    /* @__PURE__ */ jsx(SvgIcon, { iconId: "Search", className: "size-4 shrink-0 opacity-50" }),
    /* @__PURE__ */ jsx(
      Command$2.Input,
      {
        "data-slot": "command-input",
        className: clsx("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className),
        ...props
      }
    )
  ] });
}
function CommandList({ className, ...props }) {
  return /* @__PURE__ */ jsx(Command$2.List, { "data-slot": "command-list", className: clsx("max-h-[300px] scroll-py-1 overflow-y-auto overflow-x-hidden", className), ...props });
}
function CommandEmpty({ ...props }) {
  return /* @__PURE__ */ jsx(Command$2.Empty, { "data-slot": "command-empty", className: "py-6 text-center text-sm", ...props });
}
function CommandGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Command$2.Group,
    {
      "data-slot": "command-group",
      className: clsx(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:text-xs",
        className
      ),
      ...props
    }
  );
}
function CommandSeparator({ className, ...props }) {
  return /* @__PURE__ */ jsx(Command$2.Separator, { "data-slot": "command-separator", className: clsx("-mx-1 h-px bg-border", className), ...props });
}
function CommandItem({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Command$2.Item,
    {
      "data-slot": "command-item",
      className: clsx(
        "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      ),
      ...props
    }
  );
}
function CommandShortcut({ className, ...props }) {
  return /* @__PURE__ */ jsx("span", { "data-slot": "command-shortcut", className: clsx("ml-auto text-muted-foreground text-xs tracking-widest", className), ...props });
}
function Popover$1({ ...props }) {
  return /* @__PURE__ */ jsx(Popover$2.Root, { "data-slot": "popover", ...props });
}
function PopoverTrigger({ ...props }) {
  return /* @__PURE__ */ jsx(Popover$2.Trigger, { "data-slot": "popover-trigger", ...props });
}
function PopoverContent({ className, align = "center", sideOffset = 4, ...props }) {
  return /* @__PURE__ */ jsx(Popover$2.Portal, { children: /* @__PURE__ */ jsx(
    Popover$2.Content,
    {
      "data-slot": "popover-content",
      align,
      sideOffset,
      className: clsx(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[state=closed]:animate-out data-[state=open]:animate-in",
        className
      ),
      ...props
    }
  ) });
}
function PopoverAnchor({ ...props }) {
  return /* @__PURE__ */ jsx(Popover$2.Anchor, { "data-slot": "popover-anchor", ...props });
}
const frameworks = [
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
function ComboboxDemo({ spriteUrl }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  return /* @__PURE__ */ jsxs(Popover$1, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button$1, { variant: "outline", role: "combobox", "aria-expanded": open, className: "w-[200px] justify-between", children: [
      value ? frameworks.find((framework) => framework.value === value)?.label : "Select framework...",
      /* @__PURE__ */ jsx(SpriteIcon, { iconId: "ChevronsUpDown", className: "opacity-50", spriteUrl })
    ] }) }),
    /* @__PURE__ */ jsx(PopoverContent, { className: "w-[200px] p-0", children: /* @__PURE__ */ jsxs(Command$1, { children: [
      /* @__PURE__ */ jsx(CommandInput, { placeholder: "Search framework...", className: "h-9" }),
      /* @__PURE__ */ jsxs(CommandList, { children: [
        /* @__PURE__ */ jsx(CommandEmpty, { children: "No framework found." }),
        /* @__PURE__ */ jsx(CommandGroup, { children: frameworks.map((framework) => /* @__PURE__ */ jsxs(
          CommandItem,
          {
            value: framework.value,
            onSelect: (currentValue) => {
              setValue(currentValue === value ? "" : currentValue);
              setOpen(false);
            },
            children: [
              framework.label,
              /* @__PURE__ */ jsx(SpriteIcon, { iconId: "Check", className: clsx("ml-auto", value === framework.value ? "opacity-100" : "opacity-0"), spriteUrl })
            ]
          },
          framework.value
        )) })
      ] })
    ] }) })
  ] });
}
const labels = ["feature", "bug", "enhancement", "documentation", "design", "question", "maintenance"];
function ComboboxDropdownMenu({ spriteUrl }) {
  const [label, setLabel] = React.useState("feature");
  const [open, setOpen] = React.useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col items-start justify-between rounded-md border px-4 py-3 sm:flex-row sm:items-center", children: [
    /* @__PURE__ */ jsxs("p", { className: "font-medium text-sm leading-none", children: [
      /* @__PURE__ */ jsx("span", { className: "mr-2 rounded-lg bg-primary px-2 py-1 text-primary-foreground text-xs", children: label }),
      /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Create a new project" })
    ] }),
    /* @__PURE__ */ jsxs(DropdownMenu$1, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button$1, { variant: "ghost", size: "sm", children: /* @__PURE__ */ jsx(SpriteIcon, { iconId: "Ellipsis", spriteUrl }) }) }),
      /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", className: "w-[200px]", children: [
        /* @__PURE__ */ jsx(DropdownMenuLabel, { children: "Actions" }),
        /* @__PURE__ */ jsxs(DropdownMenuGroup, { children: [
          /* @__PURE__ */ jsx(DropdownMenuItem, { children: "Assign to..." }),
          /* @__PURE__ */ jsx(DropdownMenuItem, { children: "Set due date..." }),
          /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsxs(DropdownMenuSub, { children: [
            /* @__PURE__ */ jsx(DropdownMenuSubTrigger, { children: "Apply label" }),
            /* @__PURE__ */ jsx(DropdownMenuSubContent, { className: "p-0", children: /* @__PURE__ */ jsxs(Command$1, { children: [
              /* @__PURE__ */ jsx(CommandInput, { placeholder: "Filter label...", autoFocus: true, className: "h-9" }),
              /* @__PURE__ */ jsxs(CommandList, { children: [
                /* @__PURE__ */ jsx(CommandEmpty, { children: "No label found." }),
                /* @__PURE__ */ jsx(CommandGroup, { children: labels.map((label2) => /* @__PURE__ */ jsx(
                  CommandItem,
                  {
                    value: label2,
                    onSelect: (value) => {
                      setLabel(value);
                      setOpen(false);
                    },
                    children: label2
                  },
                  label2
                )) })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsxs(DropdownMenuItem, { className: "text-red-600", children: [
            "Delete",
            /* @__PURE__ */ jsx(DropdownMenuShortcut, { children: "⌘⌫" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
const languages = [
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
function ComboboxForm({ spriteUrl }) {
  const [selectedLanguage, setSelectedLanguage] = React.useState("");
  const [open, setOpen] = React.useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const language = formData.get("language");
    toast("You submitted the following values", {
      description: /* @__PURE__ */ jsx("pre", { className: "mt-2 w-[320px] rounded-md bg-neutral-950 p-4", children: /* @__PURE__ */ jsx("code", { className: "text-white", children: JSON.stringify({ language }, null, 2) }) })
    });
  }
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
    /* @__PURE__ */ jsxs(Button$1, { variant: "outline", role: "combobox", "aria-expanded": open, className: clsx("w-[200px] justify-between", !selectedLanguage && "text-muted-foreground"), children: [
      selectedLanguage ? languages.find((language) => language.value === selectedLanguage)?.label : "Select language",
      /* @__PURE__ */ jsx(SpriteIcon, { iconId: "ChevronsUpDown", className: "opacity-50", spriteUrl })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ jsxs(Popover$1, { open, onOpenChange: setOpen, children: [
        /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true }),
        /* @__PURE__ */ jsx(PopoverContent, { className: "w-[200px] p-0", children: /* @__PURE__ */ jsxs(Command$1, { children: [
          /* @__PURE__ */ jsx(CommandInput, { placeholder: "Search language...", className: "h-9" }),
          /* @__PURE__ */ jsxs(CommandList, { children: [
            /* @__PURE__ */ jsx(CommandEmpty, { children: "No language found." }),
            /* @__PURE__ */ jsx(CommandGroup, { children: languages.map((language) => /* @__PURE__ */ jsxs(
              CommandItem,
              {
                value: language.label,
                onSelect: () => {
                  setSelectedLanguage(language.value);
                  setOpen(false);
                },
                children: [
                  language.label,
                  /* @__PURE__ */ jsx(SpriteIcon, { iconId: "Check", className: clsx("ml-auto", language.value === selectedLanguage ? "opacity-100" : "opacity-0"), spriteUrl })
                ]
              },
              language.value
            )) })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("input", { type: "hidden", name: "language", value: selectedLanguage })
    ] }),
    /* @__PURE__ */ jsx(Button$1, { type: "submit", children: "Submit" })
  ] });
}
const statuses = [
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
function ComboboxPopover() {
  const [open, setOpen] = React.useState(false);
  const [selectedStatus, setSelectedStatus] = React.useState(null);
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
    /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Status" }),
    /* @__PURE__ */ jsxs(Popover$1, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button$1, { variant: "outline", className: "w-[150px] justify-start", children: selectedStatus ? selectedStatus.label : "+ Set status" }) }),
      /* @__PURE__ */ jsx(PopoverContent, { className: "p-0", side: "right", align: "start", children: /* @__PURE__ */ jsxs(Command$1, { children: [
        /* @__PURE__ */ jsx(CommandInput, { placeholder: "Change status..." }),
        /* @__PURE__ */ jsxs(CommandList, { children: [
          /* @__PURE__ */ jsx(CommandEmpty, { children: "No results found." }),
          /* @__PURE__ */ jsx(CommandGroup, { children: statuses.map((status) => /* @__PURE__ */ jsx(
            CommandItem,
            {
              value: status.value,
              onSelect: (value) => {
                setSelectedStatus(statuses.find((priority) => priority.value === value) || null);
                setOpen(false);
              },
              children: status.label
            },
            status.value
          )) })
        ] })
      ] }) })
    ] })
  ] });
}
function ContextMenu$1({ ...props }) {
  return /* @__PURE__ */ jsx(ContextMenu$2.Root, { "data-slot": "context-menu", ...props });
}
function ContextMenuTrigger({ ...props }) {
  return /* @__PURE__ */ jsx(ContextMenu$2.Trigger, { "data-slot": "context-menu-trigger", ...props });
}
function ContextMenuGroup({ ...props }) {
  return /* @__PURE__ */ jsx(ContextMenu$2.Group, { "data-slot": "context-menu-group", ...props });
}
function ContextMenuPortal({ ...props }) {
  return /* @__PURE__ */ jsx(ContextMenu$2.Portal, { "data-slot": "context-menu-portal", ...props });
}
function ContextMenuSub({ ...props }) {
  return /* @__PURE__ */ jsx(ContextMenu$2.Sub, { "data-slot": "context-menu-sub", ...props });
}
function ContextMenuRadioGroup({ ...props }) {
  return /* @__PURE__ */ jsx(ContextMenu$2.RadioGroup, { "data-slot": "context-menu-radio-group", ...props });
}
function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    ContextMenu$2.SubTrigger,
    {
      "data-slot": "context-menu-sub-trigger",
      "data-inset": inset,
      className: clsx(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[inset]:pl-8 data-[state=open]:text-accent-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(SvgIcon, { iconId: "ChevronRight", className: "ml-auto" })
      ]
    }
  );
}
function ContextMenuSubContent({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    ContextMenu$2.SubContent,
    {
      "data-slot": "context-menu-sub-content",
      className: clsx(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=closed]:animate-out data-[state=open]:animate-in",
        className
      ),
      ...props
    }
  );
}
function ContextMenuContent({ className, ...props }) {
  return /* @__PURE__ */ jsx(ContextMenu$2.Portal, { children: /* @__PURE__ */ jsx(
    ContextMenu$2.Content,
    {
      "data-slot": "context-menu-content",
      className: clsx(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=closed]:animate-out data-[state=open]:animate-in",
        className
      ),
      ...props
    }
  ) });
}
function ContextMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    ContextMenu$2.Item,
    {
      "data-slot": "context-menu-item",
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
function ContextMenuCheckboxItem({ className, children, checked, ...props }) {
  return /* @__PURE__ */ jsxs(
    ContextMenu$2.CheckboxItem,
    {
      "data-slot": "context-menu-checkbox-item",
      className: clsx(
        "relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      ),
      checked,
      ...props,
      children: [
        /* @__PURE__ */ jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(ContextMenu$2.ItemIndicator, { children: /* @__PURE__ */ jsx(SvgIcon, { iconId: "Check", className: "size-4" }) }) }),
        children
      ]
    }
  );
}
function ContextMenuRadioItem({ className, children, ...props }) {
  return /* @__PURE__ */ jsxs(
    ContextMenu$2.RadioItem,
    {
      "data-slot": "context-menu-radio-item",
      className: clsx(
        "relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(ContextMenu$2.ItemIndicator, { children: /* @__PURE__ */ jsx(SvgIcon, { iconId: "Circle", className: "size-2 fill-current" }) }) }),
        children
      ]
    }
  );
}
function ContextMenuLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsx(ContextMenu$2.Label, { "data-slot": "context-menu-label", "data-inset": inset, className: clsx("px-2 py-1.5 font-medium text-foreground text-sm data-[inset]:pl-8", className), ...props });
}
function ContextMenuSeparator({ className, ...props }) {
  return /* @__PURE__ */ jsx(ContextMenu$2.Separator, { "data-slot": "context-menu-separator", className: clsx("-mx-1 my-1 h-px bg-border", className), ...props });
}
function ContextMenuShortcut({ className, ...props }) {
  return /* @__PURE__ */ jsx("span", { "data-slot": "context-menu-shortcut", className: clsx("ml-auto text-muted-foreground text-xs tracking-widest", className), ...props });
}
function ContextMenuDemo() {
  return /* @__PURE__ */ jsxs(ContextMenu$1, { children: [
    /* @__PURE__ */ jsx(ContextMenuTrigger, { className: "flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm", children: "Right click here" }),
    /* @__PURE__ */ jsxs(ContextMenuContent, { className: "w-52", children: [
      /* @__PURE__ */ jsxs(ContextMenuItem, { inset: true, children: [
        "Back",
        /* @__PURE__ */ jsx(ContextMenuShortcut, { children: "⌘[" })
      ] }),
      /* @__PURE__ */ jsxs(ContextMenuItem, { inset: true, disabled: true, children: [
        "Forward",
        /* @__PURE__ */ jsx(ContextMenuShortcut, { children: "⌘]" })
      ] }),
      /* @__PURE__ */ jsxs(ContextMenuItem, { inset: true, children: [
        "Reload",
        /* @__PURE__ */ jsx(ContextMenuShortcut, { children: "⌘R" })
      ] }),
      /* @__PURE__ */ jsxs(ContextMenuSub, { children: [
        /* @__PURE__ */ jsx(ContextMenuSubTrigger, { inset: true, children: "More Tools" }),
        /* @__PURE__ */ jsxs(ContextMenuSubContent, { className: "w-44", children: [
          /* @__PURE__ */ jsx(ContextMenuItem, { children: "Save Page..." }),
          /* @__PURE__ */ jsx(ContextMenuItem, { children: "Create Shortcut..." }),
          /* @__PURE__ */ jsx(ContextMenuItem, { children: "Name Window..." }),
          /* @__PURE__ */ jsx(ContextMenuSeparator, {}),
          /* @__PURE__ */ jsx(ContextMenuItem, { children: "Developer Tools" }),
          /* @__PURE__ */ jsx(ContextMenuSeparator, {}),
          /* @__PURE__ */ jsx(ContextMenuItem, { variant: "destructive", children: "Delete" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(ContextMenuSeparator, {}),
      /* @__PURE__ */ jsx(ContextMenuCheckboxItem, { checked: true, children: "Show Bookmarks" }),
      /* @__PURE__ */ jsx(ContextMenuCheckboxItem, { children: "Show Full URLs" }),
      /* @__PURE__ */ jsx(ContextMenuSeparator, {}),
      /* @__PURE__ */ jsxs(ContextMenuRadioGroup, { value: "pedro", children: [
        /* @__PURE__ */ jsx(ContextMenuLabel, { inset: true, children: "People" }),
        /* @__PURE__ */ jsx(ContextMenuRadioItem, { value: "pedro", children: "Pedro Duarte" }),
        /* @__PURE__ */ jsx(ContextMenuRadioItem, { value: "colm", children: "Colm Tuite" })
      ] })
    ] })
  ] });
}
function DialogCloseButton() {
  const linkId = React.useId();
  return /* @__PURE__ */ jsxs(Dialog$1, { children: [
    /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button$1, { variant: "outline", children: "Share" }) }),
    /* @__PURE__ */ jsxs(DialogContent, { className: "sm:max-w-md", children: [
      /* @__PURE__ */ jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsx(DialogTitle, { children: "Share link" }),
        /* @__PURE__ */ jsx(DialogDescription, { children: "Anyone who has this link will be able to view this." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxs("div", { className: "grid flex-1 gap-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: linkId, className: "sr-only", children: "Link" }),
        /* @__PURE__ */ jsx(Input, { id: linkId, defaultValue: "https://ui.shadcn.com/docs/installation", readOnly: true })
      ] }) }),
      /* @__PURE__ */ jsx(DialogFooter, { className: "sm:justify-start", children: /* @__PURE__ */ jsx(DialogClose, { asChild: true, children: /* @__PURE__ */ jsx(Button$1, { type: "button", variant: "secondary", children: "Close" }) }) })
    ] })
  ] });
}
function DialogDemo() {
  const nameId = React.useId();
  const usernameId = React.useId();
  return /* @__PURE__ */ jsx(Dialog$1, { children: /* @__PURE__ */ jsxs("form", { children: [
    /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button$1, { variant: "outline", children: "Open Dialog" }) }),
    /* @__PURE__ */ jsxs(DialogContent, { className: "sm:max-w-[425px]", children: [
      /* @__PURE__ */ jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsx(DialogTitle, { children: "Edit profile" }),
        /* @__PURE__ */ jsx(DialogDescription, { children: "Make changes to your profile here. Click save when you're done." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-3", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: nameId, children: "Name" }),
          /* @__PURE__ */ jsx(Input, { id: nameId, name: "name", defaultValue: "Pedro Duarte" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-3", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: usernameId, children: "Username" }),
          /* @__PURE__ */ jsx(Input, { id: usernameId, name: "username", defaultValue: "@peduarte" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsx(DialogClose, { asChild: true, children: /* @__PURE__ */ jsx(Button$1, { variant: "outline", children: "Cancel" }) }),
        /* @__PURE__ */ jsx(Button$1, { type: "submit", children: "Save changes" })
      ] })
    ] })
  ] }) });
}
function DropdownMenuCheckboxes() {
  const [showStatusBar, setShowStatusBar] = React.useState(true);
  const [showActivityBar, setShowActivityBar] = React.useState(false);
  const [showPanel, setShowPanel] = React.useState(false);
  return /* @__PURE__ */ jsxs(DropdownMenu$1, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button$1, { variant: "outline", children: "Open" }) }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { className: "w-56", children: [
      /* @__PURE__ */ jsx(DropdownMenuLabel, { children: "Appearance" }),
      /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
      /* @__PURE__ */ jsx(DropdownMenuCheckboxItem, { checked: showStatusBar, onCheckedChange: setShowStatusBar, children: "Status Bar" }),
      /* @__PURE__ */ jsx(DropdownMenuCheckboxItem, { checked: showActivityBar, onCheckedChange: setShowActivityBar, disabled: true, children: "Activity Bar" }),
      /* @__PURE__ */ jsx(DropdownMenuCheckboxItem, { checked: showPanel, onCheckedChange: setShowPanel, children: "Panel" })
    ] })
  ] });
}
function DropdownMenuDemo() {
  return /* @__PURE__ */ jsxs(DropdownMenu$1, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button$1, { variant: "outline", children: "Open" }) }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { className: "w-56", align: "start", children: [
      /* @__PURE__ */ jsx(DropdownMenuLabel, { children: "My Account" }),
      /* @__PURE__ */ jsxs(DropdownMenuGroup, { children: [
        /* @__PURE__ */ jsxs(DropdownMenuItem, { children: [
          "Profile",
          /* @__PURE__ */ jsx(DropdownMenuShortcut, { children: "⇧⌘P" })
        ] }),
        /* @__PURE__ */ jsxs(DropdownMenuItem, { children: [
          "Billing",
          /* @__PURE__ */ jsx(DropdownMenuShortcut, { children: "⌘B" })
        ] }),
        /* @__PURE__ */ jsxs(DropdownMenuItem, { children: [
          "Settings",
          /* @__PURE__ */ jsx(DropdownMenuShortcut, { children: "⌘S" })
        ] }),
        /* @__PURE__ */ jsxs(DropdownMenuItem, { children: [
          "Keyboard shortcuts",
          /* @__PURE__ */ jsx(DropdownMenuShortcut, { children: "⌘K" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
      /* @__PURE__ */ jsxs(DropdownMenuGroup, { children: [
        /* @__PURE__ */ jsx(DropdownMenuItem, { children: "Team" }),
        /* @__PURE__ */ jsxs(DropdownMenuSub, { children: [
          /* @__PURE__ */ jsx(DropdownMenuSubTrigger, { children: "Invite users" }),
          /* @__PURE__ */ jsx(DropdownMenuPortal, { children: /* @__PURE__ */ jsxs(DropdownMenuSubContent, { children: [
            /* @__PURE__ */ jsx(DropdownMenuItem, { children: "Email" }),
            /* @__PURE__ */ jsx(DropdownMenuItem, { children: "Message" }),
            /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
            /* @__PURE__ */ jsx(DropdownMenuItem, { children: "More..." })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs(DropdownMenuItem, { children: [
          "New Team",
          /* @__PURE__ */ jsx(DropdownMenuShortcut, { children: "⌘+T" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
      /* @__PURE__ */ jsx(DropdownMenuItem, { children: "GitHub" }),
      /* @__PURE__ */ jsx(DropdownMenuItem, { children: "Support" }),
      /* @__PURE__ */ jsx(DropdownMenuItem, { disabled: true, children: "API" }),
      /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
      /* @__PURE__ */ jsxs(DropdownMenuItem, { children: [
        "Log out",
        /* @__PURE__ */ jsx(DropdownMenuShortcut, { children: "⇧⌘Q" })
      ] })
    ] })
  ] });
}
function DropdownMenuRadioGroupDemo() {
  const [position, setPosition] = React.useState("bottom");
  return /* @__PURE__ */ jsxs(DropdownMenu$1, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button$1, { variant: "outline", children: "Open" }) }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { className: "w-56", children: [
      /* @__PURE__ */ jsx(DropdownMenuLabel, { children: "Panel Position" }),
      /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
      /* @__PURE__ */ jsxs(DropdownMenuRadioGroup, { value: position, onValueChange: setPosition, children: [
        /* @__PURE__ */ jsx(DropdownMenuRadioItem, { value: "top", children: "Top" }),
        /* @__PURE__ */ jsx(DropdownMenuRadioItem, { value: "bottom", children: "Bottom" }),
        /* @__PURE__ */ jsx(DropdownMenuRadioItem, { value: "right", children: "Right" })
      ] })
    ] })
  ] });
}
function HoverCard$1({ ...props }) {
  return /* @__PURE__ */ jsx(HoverCard$2.Root, { "data-slot": "hover-card", ...props });
}
function HoverCardTrigger({ ...props }) {
  return /* @__PURE__ */ jsx(HoverCard$2.Trigger, { "data-slot": "hover-card-trigger", ...props });
}
function HoverCardContent({ className, align = "center", sideOffset = 4, ...props }) {
  return /* @__PURE__ */ jsx(HoverCard$2.Portal, { "data-slot": "hover-card-portal", children: /* @__PURE__ */ jsx(
    HoverCard$2.Content,
    {
      "data-slot": "hover-card-content",
      align,
      sideOffset,
      className: clsx(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[state=closed]:animate-out data-[state=open]:animate-in",
        className
      ),
      ...props
    }
  ) });
}
function HoverCardDemo() {
  return /* @__PURE__ */ jsxs(HoverCard$1, { children: [
    /* @__PURE__ */ jsx(HoverCardTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button$1, { variant: "link", children: "@nextjs" }) }),
    /* @__PURE__ */ jsx(HoverCardContent, { className: "w-80", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between gap-4", children: [
      /* @__PURE__ */ jsxs(Avatar$1, { children: [
        /* @__PURE__ */ jsx(AvatarImage, { src: "https://github.com/vercel.png" }),
        /* @__PURE__ */ jsx(AvatarFallback, { children: "VC" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-sm", children: "@nextjs" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm", children: "The React Framework – created and maintained by @vercel." }),
        /* @__PURE__ */ jsx("div", { className: "text-muted-foreground text-xs", children: "Joined December 2021" })
      ] })
    ] }) })
  ] });
}
function InputDemo() {
  return /* @__PURE__ */ jsx(Input, { type: "email", placeholder: "Email" });
}
function InputDisabled() {
  return /* @__PURE__ */ jsx(Input, { disabled: true, type: "email", placeholder: "Email" });
}
function InputFile() {
  const pictureId = React.useId();
  return /* @__PURE__ */ jsxs("div", { className: "grid w-full max-w-sm items-center gap-3", children: [
    /* @__PURE__ */ jsx(Label, { htmlFor: pictureId, children: "Picture" }),
    /* @__PURE__ */ jsx(Input, { id: pictureId, type: "file" })
  ] });
}
function InputForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    toast("You submitted the following values", {
      description: /* @__PURE__ */ jsx("pre", { className: "mt-2 w-[320px] rounded-md bg-neutral-950 p-4", children: /* @__PURE__ */ jsx("code", { className: "text-white", children: JSON.stringify({ username }, null, 2) }) })
    });
  }
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "w-2/3 space-y-6", children: [
    /* @__PURE__ */ jsx(Input, { name: "username", placeholder: "shadcn" }),
    /* @__PURE__ */ jsx(Button$1, { type: "submit", children: "Submit" })
  ] });
}
function InputWithButton() {
  return /* @__PURE__ */ jsxs("div", { className: "flex w-full max-w-sm items-center gap-2", children: [
    /* @__PURE__ */ jsx(Input, { type: "email", placeholder: "Email" }),
    /* @__PURE__ */ jsx(Button$1, { type: "submit", variant: "outline", children: "Subscribe" })
  ] });
}
function InputWithLabel() {
  const emailId = React.useId();
  return /* @__PURE__ */ jsxs("div", { className: "grid w-full max-w-sm items-center gap-3", children: [
    /* @__PURE__ */ jsx(Label, { htmlFor: emailId, children: "Email" }),
    /* @__PURE__ */ jsx(Input, { type: "email", id: emailId, placeholder: "Email" })
  ] });
}
function InputWithText() {
  const emailId = React.useId();
  return /* @__PURE__ */ jsxs("div", { className: "grid w-full max-w-sm items-center gap-3", children: [
    /* @__PURE__ */ jsx(Label, { htmlFor: emailId, children: "Email" }),
    /* @__PURE__ */ jsx(Input, { type: "email", id: emailId, placeholder: "Email" }),
    /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Enter your email address." })
  ] });
}
function LabelDemo() {
  const termsId = React.useId();
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
    /* @__PURE__ */ jsx(Checkbox, { id: termsId }),
    /* @__PURE__ */ jsx(Label, { htmlFor: termsId, children: "Accept terms and conditions" })
  ] }) });
}
function Menubar$1({ className, ...props }) {
  return /* @__PURE__ */ jsx(Menubar$2.Root, { "data-slot": "menubar", className: clsx("flex h-9 items-center gap-1 rounded-md border bg-background p-1 shadow-xs", className), ...props });
}
function MenubarMenu({ ...props }) {
  return /* @__PURE__ */ jsx(Menubar$2.Menu, { "data-slot": "menubar-menu", ...props });
}
function MenubarGroup({ ...props }) {
  return /* @__PURE__ */ jsx(Menubar$2.Group, { "data-slot": "menubar-group", ...props });
}
function MenubarPortal({ ...props }) {
  return /* @__PURE__ */ jsx(Menubar$2.Portal, { "data-slot": "menubar-portal", ...props });
}
function MenubarRadioGroup({ ...props }) {
  return /* @__PURE__ */ jsx(Menubar$2.RadioGroup, { "data-slot": "menubar-radio-group", ...props });
}
function MenubarTrigger({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Menubar$2.Trigger,
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
    Menubar$2.Content,
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
    Menubar$2.Item,
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
    Menubar$2.CheckboxItem,
    {
      "data-slot": "menubar-checkbox-item",
      className: clsx(
        "relative flex cursor-default select-none items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      ),
      checked,
      ...props,
      children: [
        /* @__PURE__ */ jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(Menubar$2.ItemIndicator, { children: /* @__PURE__ */ jsx(SvgIcon, { iconId: "Check", className: "size-4" }) }) }),
        children
      ]
    }
  );
}
function MenubarRadioItem({ className, children, ...props }) {
  return /* @__PURE__ */ jsxs(
    Menubar$2.RadioItem,
    {
      "data-slot": "menubar-radio-item",
      className: clsx(
        "relative flex cursor-default select-none items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(Menubar$2.ItemIndicator, { children: /* @__PURE__ */ jsx(SvgIcon, { iconId: "Circle", className: "size-2 fill-current" }) }) }),
        children
      ]
    }
  );
}
function MenubarLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsx(Menubar$2.Label, { "data-slot": "menubar-label", "data-inset": inset, className: clsx("px-2 py-1.5 font-medium text-sm data-[inset]:pl-8", className), ...props });
}
function MenubarSeparator({ className, ...props }) {
  return /* @__PURE__ */ jsx(Menubar$2.Separator, { "data-slot": "menubar-separator", className: clsx("-mx-1 my-1 h-px bg-border", className), ...props });
}
function MenubarShortcut({ className, ...props }) {
  return /* @__PURE__ */ jsx("span", { "data-slot": "menubar-shortcut", className: clsx("ml-auto text-muted-foreground text-xs tracking-widest", className), ...props });
}
function MenubarSub({ ...props }) {
  return /* @__PURE__ */ jsx(Menubar$2.Sub, { "data-slot": "menubar-sub", ...props });
}
function MenubarSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    Menubar$2.SubTrigger,
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
    Menubar$2.SubContent,
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
function MenubarDemo() {
  return /* @__PURE__ */ jsxs(Menubar$1, { children: [
    /* @__PURE__ */ jsxs(MenubarMenu, { children: [
      /* @__PURE__ */ jsx(MenubarTrigger, { children: "File" }),
      /* @__PURE__ */ jsxs(MenubarContent, { children: [
        /* @__PURE__ */ jsxs(MenubarItem, { children: [
          "New Tab ",
          /* @__PURE__ */ jsx(MenubarShortcut, { children: "⌘T" })
        ] }),
        /* @__PURE__ */ jsxs(MenubarItem, { children: [
          "New Window ",
          /* @__PURE__ */ jsx(MenubarShortcut, { children: "⌘N" })
        ] }),
        /* @__PURE__ */ jsx(MenubarItem, { disabled: true, children: "New Incognito Window" }),
        /* @__PURE__ */ jsx(MenubarSeparator, {}),
        /* @__PURE__ */ jsxs(MenubarSub, { children: [
          /* @__PURE__ */ jsx(MenubarSubTrigger, { children: "Share" }),
          /* @__PURE__ */ jsxs(MenubarSubContent, { children: [
            /* @__PURE__ */ jsx(MenubarItem, { children: "Email link" }),
            /* @__PURE__ */ jsx(MenubarItem, { children: "Messages" }),
            /* @__PURE__ */ jsx(MenubarItem, { children: "Notes" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(MenubarSeparator, {}),
        /* @__PURE__ */ jsxs(MenubarItem, { children: [
          "Print... ",
          /* @__PURE__ */ jsx(MenubarShortcut, { children: "⌘P" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(MenubarMenu, { children: [
      /* @__PURE__ */ jsx(MenubarTrigger, { children: "Edit" }),
      /* @__PURE__ */ jsxs(MenubarContent, { children: [
        /* @__PURE__ */ jsxs(MenubarItem, { children: [
          "Undo ",
          /* @__PURE__ */ jsx(MenubarShortcut, { children: "⌘Z" })
        ] }),
        /* @__PURE__ */ jsxs(MenubarItem, { children: [
          "Redo ",
          /* @__PURE__ */ jsx(MenubarShortcut, { children: "⇧⌘Z" })
        ] }),
        /* @__PURE__ */ jsx(MenubarSeparator, {}),
        /* @__PURE__ */ jsxs(MenubarSub, { children: [
          /* @__PURE__ */ jsx(MenubarSubTrigger, { children: "Find" }),
          /* @__PURE__ */ jsxs(MenubarSubContent, { children: [
            /* @__PURE__ */ jsx(MenubarItem, { children: "Search the web" }),
            /* @__PURE__ */ jsx(MenubarSeparator, {}),
            /* @__PURE__ */ jsx(MenubarItem, { children: "Find..." }),
            /* @__PURE__ */ jsx(MenubarItem, { children: "Find Next" }),
            /* @__PURE__ */ jsx(MenubarItem, { children: "Find Previous" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(MenubarSeparator, {}),
        /* @__PURE__ */ jsx(MenubarItem, { children: "Cut" }),
        /* @__PURE__ */ jsx(MenubarItem, { children: "Copy" }),
        /* @__PURE__ */ jsx(MenubarItem, { children: "Paste" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(MenubarMenu, { children: [
      /* @__PURE__ */ jsx(MenubarTrigger, { children: "View" }),
      /* @__PURE__ */ jsxs(MenubarContent, { children: [
        /* @__PURE__ */ jsx(MenubarCheckboxItem, { children: "Always Show Bookmarks Bar" }),
        /* @__PURE__ */ jsx(MenubarCheckboxItem, { checked: true, children: "Always Show Full URLs" }),
        /* @__PURE__ */ jsx(MenubarSeparator, {}),
        /* @__PURE__ */ jsxs(MenubarItem, { inset: true, children: [
          "Reload ",
          /* @__PURE__ */ jsx(MenubarShortcut, { children: "⌘R" })
        ] }),
        /* @__PURE__ */ jsxs(MenubarItem, { disabled: true, inset: true, children: [
          "Force Reload ",
          /* @__PURE__ */ jsx(MenubarShortcut, { children: "⇧⌘R" })
        ] }),
        /* @__PURE__ */ jsx(MenubarSeparator, {}),
        /* @__PURE__ */ jsx(MenubarItem, { inset: true, children: "Toggle Fullscreen" }),
        /* @__PURE__ */ jsx(MenubarSeparator, {}),
        /* @__PURE__ */ jsx(MenubarItem, { inset: true, children: "Hide Sidebar" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(MenubarMenu, { children: [
      /* @__PURE__ */ jsx(MenubarTrigger, { children: "Profiles" }),
      /* @__PURE__ */ jsxs(MenubarContent, { children: [
        /* @__PURE__ */ jsxs(MenubarRadioGroup, { value: "benoit", children: [
          /* @__PURE__ */ jsx(MenubarRadioItem, { value: "andy", children: "Andy" }),
          /* @__PURE__ */ jsx(MenubarRadioItem, { value: "benoit", children: "Benoit" }),
          /* @__PURE__ */ jsx(MenubarRadioItem, { value: "Luis", children: "Luis" })
        ] }),
        /* @__PURE__ */ jsx(MenubarSeparator, {}),
        /* @__PURE__ */ jsx(MenubarItem, { inset: true, children: "Edit..." }),
        /* @__PURE__ */ jsx(MenubarSeparator, {}),
        /* @__PURE__ */ jsx(MenubarItem, { inset: true, children: "Add Profile..." })
      ] })
    ] })
  ] });
}
function ModeToggle({ spriteUrl }) {
  const { setTheme } = useTheme$1();
  return /* @__PURE__ */ jsxs(DropdownMenu$1, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button$1, { variant: "outline", size: "icon", children: [
      /* @__PURE__ */ jsx(SpriteIcon, { iconId: "Sun", className: "dark:-rotate-90 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:scale-0", spriteUrl }),
      /* @__PURE__ */ jsx(SpriteIcon, { iconId: "Moon", className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100", spriteUrl }),
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Toggle theme" })
    ] }) }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", children: [
      /* @__PURE__ */ jsx(DropdownMenuItem, { onClick: () => setTheme("light"), children: "Light" }),
      /* @__PURE__ */ jsx(DropdownMenuItem, { onClick: () => setTheme("dark"), children: "Dark" }),
      /* @__PURE__ */ jsx(DropdownMenuItem, { onClick: () => setTheme("system"), children: "System" })
    ] })
  ] });
}
function NavigationMenu$1({
  className,
  children,
  viewport = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs(NavigationMenu$2.Root, { "data-slot": "navigation-menu", "data-viewport": viewport, className: clsx("group/navigation-menu relative flex max-w-max flex-1 items-center justify-center", className), ...props, children: [
    children,
    viewport && /* @__PURE__ */ jsx(NavigationMenuViewport, {})
  ] });
}
function NavigationMenuList({ className, ...props }) {
  return /* @__PURE__ */ jsx(NavigationMenu$2.List, { "data-slot": "navigation-menu-list", className: clsx("group flex flex-1 list-none items-center justify-center gap-1", className), ...props });
}
function NavigationMenuItem({ className, ...props }) {
  return /* @__PURE__ */ jsx(NavigationMenu$2.Item, { "data-slot": "navigation-menu-item", className: clsx("relative", className), ...props });
}
const navigationMenuTriggerStyle = createVariants(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1",
  {}
);
function NavigationMenuTrigger({ className, children, ...props }) {
  return /* @__PURE__ */ jsxs(NavigationMenu$2.Trigger, { "data-slot": "navigation-menu-trigger", className: clsx(navigationMenuTriggerStyle(), "group", className), ...props, children: [
    children,
    " ",
    /* @__PURE__ */ jsx(SvgIcon, { iconId: "ChevronDown", className: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180", "aria-hidden": "true" })
  ] });
}
function NavigationMenuContent({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    NavigationMenu$2.Content,
    {
      "data-slot": "navigation-menu-content",
      className: clsx(
        "data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 **:data-[slot=navigation-menu-link]:focus:outline-none **:data-[slot=navigation-menu-link]:focus:ring-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in",
        className
      ),
      ...props
    }
  );
}
function NavigationMenuViewport({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: clsx("absolute top-full left-0 isolate z-50 flex justify-center"), children: /* @__PURE__ */ jsx(
    NavigationMenu$2.Viewport,
    {
      "data-slot": "navigation-menu-viewport",
      className: clsx(
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-top-center overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=closed]:animate-out data-[state=open]:animate-in md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      ),
      ...props
    }
  ) });
}
function NavigationMenuLink({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    NavigationMenu$2.Link,
    {
      "data-slot": "navigation-menu-link",
      className: clsx(
        "flex flex-col gap-1 rounded-sm p-2 text-sm outline-none transition-all hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        className
      ),
      ...props
    }
  );
}
function NavigationMenuIndicator({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    NavigationMenu$2.Indicator,
    {
      "data-slot": "navigation-menu-indicator",
      className: clsx("data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=hidden]:animate-out data-[state=visible]:animate-in", className),
      ...props,
      children: /* @__PURE__ */ jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
    }
  );
}
const components = [
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
function NavigationMenuDemo({ spriteUrl }) {
  return /* @__PURE__ */ jsx(NavigationMenu$1, { viewport: false, children: /* @__PURE__ */ jsxs(NavigationMenuList, { children: [
    /* @__PURE__ */ jsxs(NavigationMenuItem, { children: [
      /* @__PURE__ */ jsx(NavigationMenuTrigger, { children: "Home" }),
      /* @__PURE__ */ jsx(NavigationMenuContent, { children: /* @__PURE__ */ jsxs("ul", { className: "grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]", children: [
        /* @__PURE__ */ jsx("li", { className: "row-span-3", children: /* @__PURE__ */ jsx(NavigationMenuLink, { asChild: true, children: /* @__PURE__ */ jsxs("a", { className: "flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-6 no-underline outline-hidden focus:shadow-md", href: "/", children: [
          /* @__PURE__ */ jsx("div", { className: "mt-4 mb-2 font-medium text-lg", children: "shadcn/ui" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm leading-tight", children: "Beautifully designed components built with Tailwind CSS." })
        ] }) }) }),
        /* @__PURE__ */ jsx(ListItem, { href: "/docs", title: "Introduction", children: "Re-usable components built using Radix UI and Tailwind CSS." }),
        /* @__PURE__ */ jsx(ListItem, { href: "/docs/installation", title: "Installation", children: "How to install dependencies and structure your app." }),
        /* @__PURE__ */ jsx(ListItem, { href: "/docs/primitives/typography", title: "Typography", children: "Styles for headings, paragraphs, lists...etc" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs(NavigationMenuItem, { children: [
      /* @__PURE__ */ jsx(NavigationMenuTrigger, { children: "Components" }),
      /* @__PURE__ */ jsx(NavigationMenuContent, { children: /* @__PURE__ */ jsx("ul", { className: "grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]", children: components.map((component) => /* @__PURE__ */ jsx(ListItem, { title: component.title, href: component.href, children: component.description }, component.title)) }) })
    ] }),
    /* @__PURE__ */ jsx(NavigationMenuItem, { children: /* @__PURE__ */ jsx(NavigationMenuLink, { asChild: true, className: navigationMenuTriggerStyle(), children: /* @__PURE__ */ jsx(Link, { href: "/docs", children: "Docs" }) }) }),
    /* @__PURE__ */ jsxs(NavigationMenuItem, { children: [
      /* @__PURE__ */ jsx(NavigationMenuTrigger, { children: "List" }),
      /* @__PURE__ */ jsx(NavigationMenuContent, { children: /* @__PURE__ */ jsx("ul", { className: "grid w-[300px] gap-4", children: /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx(NavigationMenuLink, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { href: "#", children: [
          /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Components" }),
          /* @__PURE__ */ jsx("div", { className: "text-muted-foreground", children: "Browse all components in the library." })
        ] }) }),
        /* @__PURE__ */ jsx(NavigationMenuLink, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { href: "#", children: [
          /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Documentation" }),
          /* @__PURE__ */ jsx("div", { className: "text-muted-foreground", children: "Learn how to use the library." })
        ] }) }),
        /* @__PURE__ */ jsx(NavigationMenuLink, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { href: "#", children: [
          /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Blog" }),
          /* @__PURE__ */ jsx("div", { className: "text-muted-foreground", children: "Read our latest blog posts." })
        ] }) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxs(NavigationMenuItem, { children: [
      /* @__PURE__ */ jsx(NavigationMenuTrigger, { children: "Simple" }),
      /* @__PURE__ */ jsx(NavigationMenuContent, { children: /* @__PURE__ */ jsx("ul", { className: "grid w-[200px] gap-4", children: /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx(NavigationMenuLink, { asChild: true, children: /* @__PURE__ */ jsx(Link, { href: "#", children: "Components" }) }),
        /* @__PURE__ */ jsx(NavigationMenuLink, { asChild: true, children: /* @__PURE__ */ jsx(Link, { href: "#", children: "Documentation" }) }),
        /* @__PURE__ */ jsx(NavigationMenuLink, { asChild: true, children: /* @__PURE__ */ jsx(Link, { href: "#", children: "Blocks" }) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxs(NavigationMenuItem, { children: [
      /* @__PURE__ */ jsx(NavigationMenuTrigger, { children: "With Icon" }),
      /* @__PURE__ */ jsx(NavigationMenuContent, { children: /* @__PURE__ */ jsx("ul", { className: "grid w-[200px] gap-4", children: /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx(NavigationMenuLink, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { href: "#", className: "flex-row items-center gap-2", children: [
          /* @__PURE__ */ jsx(SpriteIcon, { iconId: "CircleQuestionMark", spriteUrl }),
          "Backlog"
        ] }) }),
        /* @__PURE__ */ jsx(NavigationMenuLink, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { href: "#", className: "flex-row items-center gap-2", children: [
          /* @__PURE__ */ jsx(SpriteIcon, { iconId: "Circle", spriteUrl }),
          "To Do"
        ] }) }),
        /* @__PURE__ */ jsx(NavigationMenuLink, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { href: "#", className: "flex-row items-center gap-2", children: [
          /* @__PURE__ */ jsx(SpriteIcon, { iconId: "CircleCheck", spriteUrl }),
          "Done"
        ] }) })
      ] }) }) })
    ] })
  ] }) });
}
function ListItem({ title, children, href, ...props }) {
  return /* @__PURE__ */ jsx("li", { ...props, children: /* @__PURE__ */ jsx(NavigationMenuLink, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { href, children: [
    /* @__PURE__ */ jsx("div", { className: "font-medium text-sm leading-none", children: title }),
    /* @__PURE__ */ jsx("p", { className: "line-clamp-2 text-muted-foreground text-sm leading-snug", children })
  ] }) }) });
}
function PaginationDemo() {
  return /* @__PURE__ */ jsx(Pagination$1, { children: /* @__PURE__ */ jsxs(PaginationContent, { children: [
    /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsx(PaginationPrevious, { href: "#" }) }),
    /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsx(PaginationLink, { href: "#", children: "1" }) }),
    /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsx(PaginationLink, { href: "#", isActive: true, children: "2" }) }),
    /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsx(PaginationLink, { href: "#", children: "3" }) }),
    /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsx(PaginationEllipsis, {}) }),
    /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsx(PaginationNext, { href: "#" }) })
  ] }) });
}
function PopoverDemo() {
  const widthId = React.useId();
  const maxWidthId = React.useId();
  const heightId = React.useId();
  const maxHeightId = React.useId();
  return /* @__PURE__ */ jsxs(Popover$1, { children: [
    /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button$1, { variant: "outline", children: "Open popover" }) }),
    /* @__PURE__ */ jsx(PopoverContent, { className: "w-80", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("h4", { className: "font-medium leading-none", children: "Dimensions" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Set the dimensions for the layer." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 items-center gap-4", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: widthId, children: "Width" }),
          /* @__PURE__ */ jsx(Input, { id: widthId, defaultValue: "100%", className: "col-span-2 h-8" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 items-center gap-4", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: maxWidthId, children: "Max. width" }),
          /* @__PURE__ */ jsx(Input, { id: maxWidthId, defaultValue: "300px", className: "col-span-2 h-8" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 items-center gap-4", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: heightId, children: "Height" }),
          /* @__PURE__ */ jsx(Input, { id: heightId, defaultValue: "25px", className: "col-span-2 h-8" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 items-center gap-4", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: maxHeightId, children: "Max. height" }),
          /* @__PURE__ */ jsx(Input, { id: maxHeightId, defaultValue: "none", className: "col-span-2 h-8" })
        ] })
      ] })
    ] }) })
  ] });
}
function Progress({ className, value, ...props }) {
  return /* @__PURE__ */ jsx(Progress$1.Root, { "data-slot": "progress", className: clsx("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className), ...props, children: /* @__PURE__ */ jsx(Progress$1.Indicator, { "data-slot": "progress-indicator", className: "h-full w-full flex-1 bg-primary transition-all", style: { transform: `translateX(-${100 - (value || 0)}%)` } }) });
}
function ProgressDemo() {
  const [progress, setProgress] = React.useState(13);
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);
  return /* @__PURE__ */ jsx(Progress, { value: progress, className: "w-[60%]" });
}
function RadioGroup$1({ className, ...props }) {
  return /* @__PURE__ */ jsx(RadioGroup$2.Root, { "data-slot": "radio-group", className: clsx("grid gap-3", className), ...props });
}
function RadioGroupItem({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    RadioGroup$2.Item,
    {
      "data-slot": "radio-group-item",
      className: clsx(
        "aspect-square size-4 shrink-0 rounded-full border border-input text-primary shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:ring-destructive/40",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(RadioGroup$2.Indicator, { "data-slot": "radio-group-indicator", className: "relative flex items-center justify-center", children: /* @__PURE__ */ jsx(SvgIcon, { iconId: "Circle", className: "-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 size-2 fill-primary" }) })
    }
  );
}
function RadioGroupDemo() {
  const defaultId = React.useId();
  const comfortableId = React.useId();
  const compactId = React.useId();
  return /* @__PURE__ */ jsxs(RadioGroup$1, { defaultValue: "comfortable", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx(RadioGroupItem, { value: "default", id: defaultId }),
      /* @__PURE__ */ jsx(Label, { htmlFor: defaultId, children: "Default" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx(RadioGroupItem, { value: "comfortable", id: comfortableId }),
      /* @__PURE__ */ jsx(Label, { htmlFor: comfortableId, children: "Comfortable" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx(RadioGroupItem, { value: "compact", id: compactId }),
      /* @__PURE__ */ jsx(Label, { htmlFor: compactId, children: "Compact" })
    ] })
  ] });
}
function RadioGroupForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const type = formData.get("type");
    toast("You submitted the following values", {
      description: /* @__PURE__ */ jsx("pre", { className: "mt-2 w-[320px] rounded-md bg-neutral-950 p-4", children: /* @__PURE__ */ jsx("code", { className: "text-white", children: JSON.stringify({ type }, null, 2) }) })
    });
  }
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "w-2/3 space-y-6", children: [
    /* @__PURE__ */ jsxs(RadioGroup$1, { name: "type", className: "flex flex-col", children: [
      /* @__PURE__ */ jsx(RadioGroupItem, { value: "all" }),
      /* @__PURE__ */ jsx(RadioGroupItem, { value: "mentions" }),
      /* @__PURE__ */ jsx(RadioGroupItem, { value: "none" })
    ] }),
    /* @__PURE__ */ jsx(Button$1, { type: "submit", children: "Submit" })
  ] });
}
function ScrollArea$1({ className, children, ...props }) {
  return /* @__PURE__ */ jsxs(ScrollArea$2.Root, { "data-slot": "scroll-area", className: clsx("relative", className), ...props, children: [
    /* @__PURE__ */ jsx(ScrollArea$2.Viewport, { "data-slot": "scroll-area-viewport", className: "size-full rounded-[inherit] outline-none transition-[color,box-shadow] focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50", children }),
    /* @__PURE__ */ jsx(ScrollBar, {}),
    /* @__PURE__ */ jsx(ScrollArea$2.Corner, {})
  ] });
}
function ScrollBar({ className, orientation = "vertical", ...props }) {
  return /* @__PURE__ */ jsx(
    ScrollArea$2.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation,
      className: clsx(
        "flex touch-none select-none p-px transition-colors",
        orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(ScrollArea$2.ScrollAreaThumb, { "data-slot": "scroll-area-thumb", className: "relative flex-1 rounded-full bg-border" })
    }
  );
}
function Separator({ className, orientation = "horizontal", decorative = true, ...props }) {
  return /* @__PURE__ */ jsx(
    Separator$1.Root,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: clsx("shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px", className),
      ...props
    }
  );
}
const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);
function ScrollAreaDemo() {
  return /* @__PURE__ */ jsx(ScrollArea$1, { className: "h-72 w-48 rounded-md border", children: /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
    /* @__PURE__ */ jsx("h4", { className: "mb-4 font-medium text-sm leading-none", children: "Tags" }),
    tags.map((tag) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
      /* @__PURE__ */ jsx("div", { className: "text-sm", children: tag }),
      /* @__PURE__ */ jsx(Separator, { className: "my-2" })
    ] }, tag))
  ] }) });
}
const works = [
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
function ScrollAreaHorizontalDemo() {
  return /* @__PURE__ */ jsxs(ScrollArea$1, { className: "w-96 whitespace-nowrap rounded-md border", children: [
    /* @__PURE__ */ jsx("div", { className: "flex w-max space-x-4 p-4", children: works.map((artwork) => /* @__PURE__ */ jsxs("figure", { className: "shrink-0", children: [
      /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-md", children: /* @__PURE__ */ jsx(LazyImage, { src: artwork.art, alt: `Photo by ${artwork.artist}`, className: "aspect-[3/4] h-fit w-fit object-cover", width: 300, height: 400 }) }),
      /* @__PURE__ */ jsxs("figcaption", { className: "pt-2 text-muted-foreground text-xs", children: [
        "Photo by ",
        /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: artwork.artist })
      ] })
    ] }, artwork.artist)) }),
    /* @__PURE__ */ jsx(ScrollBar, { orientation: "horizontal" })
  ] });
}
function SelectDemo() {
  return /* @__PURE__ */ jsxs(Select$1, { children: [
    /* @__PURE__ */ jsx(SelectTrigger, { className: "w-[180px]", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select a fruit" }) }),
    /* @__PURE__ */ jsx(SelectContent, { children: /* @__PURE__ */ jsxs(SelectGroup, { children: [
      /* @__PURE__ */ jsx(SelectLabel, { children: "Fruits" }),
      /* @__PURE__ */ jsx(SelectItem, { value: "apple", children: "Apple" }),
      /* @__PURE__ */ jsx(SelectItem, { value: "banana", children: "Banana" }),
      /* @__PURE__ */ jsx(SelectItem, { value: "blueberry", children: "Blueberry" }),
      /* @__PURE__ */ jsx(SelectItem, { value: "grapes", children: "Grapes" }),
      /* @__PURE__ */ jsx(SelectItem, { value: "pineapple", children: "Pineapple" })
    ] }) })
  ] });
}
function SelectForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    toast("You submitted the following values", {
      description: /* @__PURE__ */ jsx("pre", { className: "mt-2 w-[320px] rounded-md bg-neutral-950 p-4", children: /* @__PURE__ */ jsx("code", { className: "text-white", children: JSON.stringify({ email }, null, 2) }) })
    });
  }
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "w-2/3 space-y-6", children: [
    /* @__PURE__ */ jsxs(Select$1, { name: "email", children: [
      /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select a verified email to display" }) }),
      /* @__PURE__ */ jsxs(SelectContent, { children: [
        /* @__PURE__ */ jsx(SelectItem, { value: "joe@example.com", children: "joe@example.com" }),
        /* @__PURE__ */ jsx(SelectItem, { value: "joe@google.com", children: "joe@google.com" }),
        /* @__PURE__ */ jsx(SelectItem, { value: "joe@support.com", children: "joe@support.com" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Button$1, { type: "submit", children: "Submit" })
  ] });
}
function SelectScrollable() {
  return /* @__PURE__ */ jsxs(Select$1, { children: [
    /* @__PURE__ */ jsx(SelectTrigger, { className: "w-[280px]", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select a timezone" }) }),
    /* @__PURE__ */ jsxs(SelectContent, { children: [
      /* @__PURE__ */ jsxs(SelectGroup, { children: [
        /* @__PURE__ */ jsx(SelectLabel, { children: "North America" }),
        /* @__PURE__ */ jsx(SelectItem, { value: "est", children: "Eastern Standard Time (EST)" }),
        /* @__PURE__ */ jsx(SelectItem, { value: "cst", children: "Central Standard Time (CST)" }),
        /* @__PURE__ */ jsx(SelectItem, { value: "mst", children: "Mountain Standard Time (MST)" }),
        /* @__PURE__ */ jsx(SelectItem, { value: "pst", children: "Pacific Standard Time (PST)" }),
        /* @__PURE__ */ jsx(SelectItem, { value: "akst", children: "Alaska Standard Time (AKST)" }),
        /* @__PURE__ */ jsx(SelectItem, { value: "hst", children: "Hawaii Standard Time (HST)" })
      ] }),
      /* @__PURE__ */ jsxs(SelectGroup, { children: [
        /* @__PURE__ */ jsx(SelectLabel, { children: "Europe & Africa" }),
        /* @__PURE__ */ jsx(SelectItem, { value: "gmt", children: "Greenwich Mean Time (GMT)" }),
        /* @__PURE__ */ jsx(SelectItem, { value: "cet", children: "Central European Time (CET)" }),
        /* @__PURE__ */ jsx(SelectItem, { value: "eet", children: "Eastern European Time (EET)" }),
        /* @__PURE__ */ jsx(SelectItem, { value: "west", children: "Western European Summer Time (WEST)" }),
        /* @__PURE__ */ jsx(SelectItem, { value: "cat", children: "Central Africa Time (CAT)" }),
        /* @__PURE__ */ jsx(SelectItem, { value: "eat", children: "East Africa Time (EAT)" })
      ] }),
      /* @__PURE__ */ jsxs(SelectGroup, { children: [
        /* @__PURE__ */ jsx(SelectLabel, { children: "Asia" }),
        /* @__PURE__ */ jsx(SelectItem, { value: "msk", children: "Moscow Time (MSK)" }),
        /* @__PURE__ */ jsx(SelectItem, { value: "ist", children: "India Standard Time (IST)" }),
        /* @__PURE__ */ jsx(SelectItem, { value: "cst_china", children: "China Standard Time (CST)" }),
        /* @__PURE__ */ jsx(SelectItem, { value: "jst", children: "Japan Standard Time (JST)" }),
        /* @__PURE__ */ jsx(SelectItem, { value: "kst", children: "Korea Standard Time (KST)" }),
        /* @__PURE__ */ jsx(SelectItem, { value: "ist_indonesia", children: "Indonesia Central Standard Time (WITA)" })
      ] }),
      /* @__PURE__ */ jsxs(SelectGroup, { children: [
        /* @__PURE__ */ jsx(SelectLabel, { children: "Australia & Pacific" }),
        /* @__PURE__ */ jsx(SelectItem, { value: "awst", children: "Australian Western Standard Time (AWST)" }),
        /* @__PURE__ */ jsx(SelectItem, { value: "acst", children: "Australian Central Standard Time (ACST)" }),
        /* @__PURE__ */ jsx(SelectItem, { value: "aest", children: "Australian Eastern Standard Time (AEST)" }),
        /* @__PURE__ */ jsx(SelectItem, { value: "nzst", children: "New Zealand Standard Time (NZST)" }),
        /* @__PURE__ */ jsx(SelectItem, { value: "fjt", children: "Fiji Time (FJT)" })
      ] }),
      /* @__PURE__ */ jsxs(SelectGroup, { children: [
        /* @__PURE__ */ jsx(SelectLabel, { children: "South America" }),
        /* @__PURE__ */ jsx(SelectItem, { value: "art", children: "Argentina Time (ART)" }),
        /* @__PURE__ */ jsx(SelectItem, { value: "bot", children: "Bolivia Time (BOT)" }),
        /* @__PURE__ */ jsx(SelectItem, { value: "brt", children: "Brasilia Time (BRT)" }),
        /* @__PURE__ */ jsx(SelectItem, { value: "clt", children: "Chile Standard Time (CLT)" })
      ] })
    ] })
  ] });
}
function SeparatorDemo() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm leading-none", children: "Radix Primitives" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "An open-source UI component library." })
    ] }),
    /* @__PURE__ */ jsx(Separator, { className: "my-4" }),
    /* @__PURE__ */ jsxs("div", { className: "flex h-5 items-center space-x-4 text-sm", children: [
      /* @__PURE__ */ jsx("div", { children: "Blog" }),
      /* @__PURE__ */ jsx(Separator, { orientation: "vertical" }),
      /* @__PURE__ */ jsx("div", { children: "Docs" }),
      /* @__PURE__ */ jsx(Separator, { orientation: "vertical" }),
      /* @__PURE__ */ jsx("div", { children: "Source" })
    ] })
  ] });
}
function Sheet$1({ ...props }) {
  return /* @__PURE__ */ jsx(Dialog$2.Root, { "data-slot": "sheet", ...props });
}
function SheetTrigger({ ...props }) {
  return /* @__PURE__ */ jsx(Dialog$2.Trigger, { "data-slot": "sheet-trigger", ...props });
}
function SheetClose({ ...props }) {
  return /* @__PURE__ */ jsx(Dialog$2.Close, { "data-slot": "sheet-close", ...props });
}
function SheetPortal({ ...props }) {
  return /* @__PURE__ */ jsx(Dialog$2.Portal, { "data-slot": "sheet-portal", ...props });
}
function SheetOverlay({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Dialog$2.Overlay,
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
      Dialog$2.Content,
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
          /* @__PURE__ */ jsxs(Dialog$2.Close, { className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
            /* @__PURE__ */ jsx(SvgIcon, { iconId: "X", className: "size-4" }),
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function SheetHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "sheet-header", className: clsx("flex flex-col gap-1.5 p-4", className), ...props });
}
function SheetFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "sheet-footer", className: clsx("mt-auto flex flex-col gap-2 p-4", className), ...props });
}
function SheetTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx(Dialog$2.Title, { "data-slot": "sheet-title", className: clsx("font-semibold text-foreground", className), ...props });
}
function SheetDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx(Dialog$2.Description, { "data-slot": "sheet-description", className: clsx("text-muted-foreground text-sm", className), ...props });
}
function SheetDemo() {
  const nameId = React.useId();
  const usernameId = React.useId();
  return /* @__PURE__ */ jsxs(Sheet$1, { children: [
    /* @__PURE__ */ jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button$1, { variant: "outline", children: "Open" }) }),
    /* @__PURE__ */ jsxs(SheetContent, { children: [
      /* @__PURE__ */ jsxs(SheetHeader, { children: [
        /* @__PURE__ */ jsx(SheetTitle, { children: "Edit profile" }),
        /* @__PURE__ */ jsx(SheetDescription, { children: "Make changes to your profile here. Click save when you're done." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid flex-1 auto-rows-min gap-6 px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-3", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: nameId, children: "Name" }),
          /* @__PURE__ */ jsx(Input, { id: nameId, defaultValue: "Pedro Duarte" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-3", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: usernameId, children: "Username" }),
          /* @__PURE__ */ jsx(Input, { id: usernameId, defaultValue: "@peduarte" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(SheetFooter, { children: [
        /* @__PURE__ */ jsx(Button$1, { type: "submit", children: "Save changes" }),
        /* @__PURE__ */ jsx(SheetClose, { asChild: true, children: /* @__PURE__ */ jsx(Button$1, { variant: "outline", children: "Close" }) })
      ] })
    ] })
  ] });
}
const SHEET_SIDES = ["top", "right", "bottom", "left"];
function SheetSide() {
  const nameId = React.useId();
  const usernameId = React.useId();
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2", children: SHEET_SIDES.map((side) => /* @__PURE__ */ jsxs(Sheet$1, { children: [
    /* @__PURE__ */ jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button$1, { variant: "outline", children: side }) }),
    /* @__PURE__ */ jsxs(SheetContent, { side, children: [
      /* @__PURE__ */ jsxs(SheetHeader, { children: [
        /* @__PURE__ */ jsx(SheetTitle, { children: "Edit profile" }),
        /* @__PURE__ */ jsx(SheetDescription, { children: "Make changes to your profile here. Click save when you're done." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-4 py-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-4 items-center gap-4", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: nameId, className: "text-right", children: "Name" }),
          /* @__PURE__ */ jsx(Input, { id: nameId, value: "Pedro Duarte", className: "col-span-3" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-4 items-center gap-4", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: usernameId, className: "text-right", children: "Username" }),
          /* @__PURE__ */ jsx(Input, { id: usernameId, value: "@peduarte", className: "col-span-3" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(SheetFooter, { children: /* @__PURE__ */ jsx(SheetClose, { asChild: true, children: /* @__PURE__ */ jsx(Button$1, { type: "submit", children: "Save changes" }) }) })
    ] })
  ] }, side)) });
}
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "skeleton", className: clsx("animate-pulse rounded-md bg-accent", className), ...props });
}
function SkeletonCard() {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-3", children: [
    /* @__PURE__ */ jsx(Skeleton, { className: "h-[125px] w-[250px] rounded-xl" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-[250px]" }),
      /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-[200px]" })
    ] })
  ] });
}
function SkeletonDemo() {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
    /* @__PURE__ */ jsx(Skeleton, { className: "h-12 w-12 rounded-full" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-[250px]" }),
      /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-[200px]" })
    ] })
  ] });
}
function Slider({ className, defaultValue, value, min = 0, max = 100, ...props }) {
  const _values = React.useMemo(() => Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max], [value, defaultValue, min, max]);
  return /* @__PURE__ */ jsxs(
    Slider$1.Root,
    {
      "data-slot": "slider",
      defaultValue,
      value,
      min,
      max,
      className: clsx(
        "relative flex w-full touch-none select-none items-center data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col data-[disabled]:opacity-50",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          Slider$1.Track,
          {
            "data-slot": "slider-track",
            className: clsx("relative grow overflow-hidden rounded-full bg-muted data-[orientation=horizontal]:h-1.5 data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-1.5"),
            children: /* @__PURE__ */ jsx(Slider$1.Range, { "data-slot": "slider-range", className: clsx("absolute bg-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full") })
          }
        ),
        Array.from({ length: _values.length }, (_, index) => /* @__PURE__ */ jsx(
          Slider$1.Thumb,
          {
            "data-slot": "slider-thumb",
            className: "block size-4 shrink-0 rounded-full border border-primary bg-background shadow-sm ring-ring/50 transition-[color,box-shadow] hover:ring-4 focus-visible:outline-hidden focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50"
          },
          index
        ))
      ]
    }
  );
}
function SliderDemo({ className, ...props }) {
  return /* @__PURE__ */ jsx(Slider, { defaultValue: [50], max: 100, step: 1, className: clsx$1("w-[60%]", className), ...props });
}
function SonnerDemo() {
  return /* @__PURE__ */ jsx(
    Button$1,
    {
      variant: "outline",
      onClick: () => toast("Event has been created", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
        action: {
          label: "Undo",
          onClick: () => console.info("Undo")
        }
      }),
      children: "Show Toast"
    }
  );
}
function Switch({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Switch$1.Root,
    {
      "data-slot": "switch",
      className: clsx(
        "peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input/80",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(
        Switch$1.Thumb,
        {
          "data-slot": "switch-thumb",
          className: clsx(
            "pointer-events-none block size-4 rounded-full bg-background ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0 dark:data-[state=checked]:bg-primary-foreground dark:data-[state=unchecked]:bg-foreground"
          )
        }
      )
    }
  );
}
function SwitchDemo() {
  const airplaneModeId = React.useId();
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
    /* @__PURE__ */ jsx(Switch, { id: airplaneModeId }),
    /* @__PURE__ */ jsx(Label, { htmlFor: airplaneModeId, children: "Airplane Mode" })
  ] });
}
function SwitchForm() {
  const [marketingEmails, setMarketingEmails] = React.useState(false);
  const [securityEmails, setSecurityEmails] = React.useState(true);
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const marketing_emails = formData.has("marketing_emails");
    const security_emails = formData.has("security_emails");
    toast("You submitted the following values", {
      description: /* @__PURE__ */ jsx("pre", { className: "mt-2 w-[320px] rounded-md bg-neutral-950 p-4", children: /* @__PURE__ */ jsx("code", { className: "text-white", children: JSON.stringify({ marketing_emails, security_emails }, null, 2) }) })
    });
  }
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "w-full space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h3", { className: "mb-4 font-medium text-lg", children: "Email Notifications" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm", children: [
          /* @__PURE__ */ jsx("div", { className: "space-y-0.5", children: /* @__PURE__ */ jsx(Label, { children: "Marketing emails" }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Switch, { name: "marketing_emails", checked: marketingEmails, onCheckedChange: setMarketingEmails }) })
        ] }) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm", children: [
          /* @__PURE__ */ jsx("div", { className: "space-y-0.5", children: /* @__PURE__ */ jsx(Label, { children: "Security emails" }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Switch, { name: "security_emails", checked: securityEmails, onCheckedChange: setSecurityEmails, disabled: true, "aria-readonly": true }) })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Button$1, { type: "submit", children: "Submit" })
  ] });
}
function Table$1({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "table-container", className: "relative w-full overflow-x-auto", children: /* @__PURE__ */ jsx("table", { "data-slot": "table", className: clsx("w-full caption-bottom text-sm", className), ...props }) });
}
function TableHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx("thead", { "data-slot": "table-header", className: clsx("[&_tr]:border-b", className), ...props });
}
function TableBody({ className, ...props }) {
  return /* @__PURE__ */ jsx("tbody", { "data-slot": "table-body", className: clsx("[&_tr:last-child]:border-0", className), ...props });
}
function TableFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx("tfoot", { "data-slot": "table-footer", className: clsx("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className), ...props });
}
function TableRow({ className, ...props }) {
  return /* @__PURE__ */ jsx("tr", { "data-slot": "table-row", className: clsx("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className), ...props });
}
function TableHead({ className, ...props }) {
  return /* @__PURE__ */ jsx("th", { "data-slot": "table-head", className: clsx("h-10 whitespace-nowrap px-2 text-left align-middle font-medium text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className), ...props });
}
function TableCell({ className, ...props }) {
  return /* @__PURE__ */ jsx("td", { "data-slot": "table-cell", className: clsx("whitespace-nowrap p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className), ...props });
}
function TableCaption({ className, ...props }) {
  return /* @__PURE__ */ jsx("caption", { "data-slot": "table-caption", className: clsx("mt-4 text-muted-foreground text-sm", className), ...props });
}
const invoices = [
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
function TableDemo() {
  return /* @__PURE__ */ jsxs(Table$1, { children: [
    /* @__PURE__ */ jsx(TableCaption, { children: "A list of your recent invoices." }),
    /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
      /* @__PURE__ */ jsx(TableHead, { className: "w-[100px]", children: "Invoice" }),
      /* @__PURE__ */ jsx(TableHead, { children: "Status" }),
      /* @__PURE__ */ jsx(TableHead, { children: "Method" }),
      /* @__PURE__ */ jsx(TableHead, { className: "text-right", children: "Amount" })
    ] }) }),
    /* @__PURE__ */ jsx(TableBody, { children: invoices.map((invoice) => /* @__PURE__ */ jsxs(TableRow, { children: [
      /* @__PURE__ */ jsx(TableCell, { className: "font-medium", children: invoice.invoice }),
      /* @__PURE__ */ jsx(TableCell, { children: invoice.paymentStatus }),
      /* @__PURE__ */ jsx(TableCell, { children: invoice.paymentMethod }),
      /* @__PURE__ */ jsx(TableCell, { className: "text-right", children: invoice.totalAmount })
    ] }, invoice.invoice)) }),
    /* @__PURE__ */ jsx(TableFooter, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
      /* @__PURE__ */ jsx(TableCell, { colSpan: 3, children: "Total" }),
      /* @__PURE__ */ jsx(TableCell, { className: "text-right", children: "$2,500.00" })
    ] }) })
  ] });
}
function Tabs$1({ className, ...props }) {
  return /* @__PURE__ */ jsx(Tabs$2.Root, { "data-slot": "tabs", className: clsx("flex flex-col gap-2", className), ...props });
}
function TabsList({ className, ...props }) {
  return /* @__PURE__ */ jsx(Tabs$2.List, { "data-slot": "tabs-list", className: clsx("inline-flex h-9 w-fit items-center justify-center rounded-lg bg-muted p-[3px] text-muted-foreground", className), ...props });
}
function TabsTrigger({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Tabs$2.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: clsx(
        "inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-transparent px-2 py-1 font-medium text-foreground text-sm transition-[color,box-shadow] focus-visible:border-ring focus-visible:outline-1 focus-visible:outline-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:shadow-sm dark:text-muted-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      ),
      ...props
    }
  );
}
function TabsContent({ className, ...props }) {
  return /* @__PURE__ */ jsx(Tabs$2.Content, { "data-slot": "tabs-content", className: clsx("flex-1 outline-none", className), ...props });
}
function TabsDemo() {
  const nameId = React.useId();
  const usernameId = React.useId();
  const currentPasswordId = React.useId();
  const newPasswordId = React.useId();
  return /* @__PURE__ */ jsx("div", { className: "flex w-full max-w-sm flex-col gap-6", children: /* @__PURE__ */ jsxs(Tabs$1, { defaultValue: "account", children: [
    /* @__PURE__ */ jsxs(TabsList, { children: [
      /* @__PURE__ */ jsx(TabsTrigger, { value: "account", children: "Account" }),
      /* @__PURE__ */ jsx(TabsTrigger, { value: "password", children: "Password" })
    ] }),
    /* @__PURE__ */ jsx(TabsContent, { value: "account", children: /* @__PURE__ */ jsxs(Card$1, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "Account" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "Make changes to your account here. Click save when you're done." })
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { className: "grid gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-3", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: nameId, children: "Name" }),
          /* @__PURE__ */ jsx(Input, { id: nameId, defaultValue: "Pedro Duarte" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-3", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: usernameId, children: "Username" }),
          /* @__PURE__ */ jsx(Input, { id: usernameId, defaultValue: "@peduarte" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(CardFooter, { children: /* @__PURE__ */ jsx(Button$1, { children: "Save changes" }) })
    ] }) }),
    /* @__PURE__ */ jsx(TabsContent, { value: "password", children: /* @__PURE__ */ jsxs(Card$1, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "Password" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "Change your password here. After saving, you'll be logged out." })
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { className: "grid gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-3", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: currentPasswordId, children: "Current password" }),
          /* @__PURE__ */ jsx(Input, { id: currentPasswordId, type: "password" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-3", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: newPasswordId, children: "New password" }),
          /* @__PURE__ */ jsx(Input, { id: newPasswordId, type: "password" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(CardFooter, { children: /* @__PURE__ */ jsx(Button$1, { children: "Save password" }) })
    ] }) })
  ] }) });
}
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: clsx(
        "field-sizing-content flex min-h-16 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-destructive/40",
        className
      ),
      ...props
    }
  );
}
function TextareaDemo() {
  return /* @__PURE__ */ jsx(Textarea, { placeholder: "Type your message here." });
}
function TextareaDisabled() {
  return /* @__PURE__ */ jsx(Textarea, { placeholder: "Type your message here.", disabled: true });
}
function TextareaForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const bio = formData.get("bio");
    toast("You submitted the following values", {
      description: /* @__PURE__ */ jsx("pre", { className: "mt-2 w-[320px] rounded-md bg-neutral-950 p-4", children: /* @__PURE__ */ jsx("code", { className: "text-white", children: JSON.stringify({ bio }, null, 2) }) })
    });
  }
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "w-2/3 space-y-6", children: [
    /* @__PURE__ */ jsx(Textarea, { name: "bio", placeholder: "Tell us a little bit about yourself", className: "resize-none" }),
    /* @__PURE__ */ jsx(Button$1, { type: "submit", children: "Submit" })
  ] });
}
function TextareaWithButton() {
  return /* @__PURE__ */ jsxs("div", { className: "grid w-full gap-2", children: [
    /* @__PURE__ */ jsx(Textarea, { placeholder: "Type your message here." }),
    /* @__PURE__ */ jsx(Button$1, { children: "Send message" })
  ] });
}
function TextareaWithLabel() {
  const messageId = React.useId();
  return /* @__PURE__ */ jsxs("div", { className: "grid w-full gap-3", children: [
    /* @__PURE__ */ jsx(Label, { htmlFor: messageId, children: "Your message" }),
    /* @__PURE__ */ jsx(Textarea, { placeholder: "Type your message here.", id: messageId })
  ] });
}
function TextareaWithText() {
  const messageId = React.useId();
  return /* @__PURE__ */ jsxs("div", { className: "grid w-full gap-3", children: [
    /* @__PURE__ */ jsx(Label, { htmlFor: messageId, children: "Your Message" }),
    /* @__PURE__ */ jsx(Textarea, { placeholder: "Type your message here.", id: messageId }),
    /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Your message will be copied to the support team." })
  ] });
}
const toggleVariants = createVariants(
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
function Toggle$1({ className, variant, size, ...props }) {
  return /* @__PURE__ */ jsx(Toggle$2.Root, { "data-slot": "toggle", className: clsx(toggleVariants({ variant, size, className })), ...props });
}
function ToggleDemo({ spriteUrl }) {
  return /* @__PURE__ */ jsx(Toggle$1, { "aria-label": "Toggle italic", children: /* @__PURE__ */ jsx(SpriteIcon, { iconId: "Bold", className: "h-4 w-4", spriteUrl }) });
}
function ToggleDisabled({ spriteUrl }) {
  return /* @__PURE__ */ jsx(Toggle$1, { "aria-label": "Toggle italic", disabled: true, children: /* @__PURE__ */ jsx(SpriteIcon, { iconId: "Underline", className: "h-4 w-4", spriteUrl }) });
}
const ToggleGroupContext = React.createContext({
  size: "default",
  variant: "default",
  spacing: 0
});
function ToggleGroup$1({
  className,
  variant,
  size,
  spacing = 0,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    ToggleGroup$2.Root,
    {
      "data-slot": "toggle-group",
      "data-variant": variant,
      "data-size": size,
      "data-spacing": spacing,
      style: { "--gap": spacing },
      className: clsx("group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs", className),
      ...props,
      children: /* @__PURE__ */ jsx(ToggleGroupContext.Provider, { value: { variant, size, spacing }, children })
    }
  );
}
function ToggleGroupItem({ className, children, variant, size, ...props }) {
  const context = React.useContext(ToggleGroupContext);
  return /* @__PURE__ */ jsx(
    ToggleGroup$2.Item,
    {
      "data-slot": "toggle-group-item",
      "data-variant": context.variant || variant,
      "data-size": context.size || size,
      "data-spacing": context.spacing,
      className: clsx(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size
        }),
        "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10",
        "data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:first:border-l data-[spacing=0]:first:rounded-l-md",
        className
      ),
      ...props,
      children
    }
  );
}
function ToggleGroupDemo$5({ spriteUrl }) {
  return /* @__PURE__ */ jsxs(ToggleGroup$1, { variant: "outline", type: "multiple", children: [
    /* @__PURE__ */ jsx(ToggleGroupItem, { value: "bold", "aria-label": "Toggle bold", children: /* @__PURE__ */ jsx(SpriteIcon, { iconId: "Bold", className: "h-4 w-4", spriteUrl }) }),
    /* @__PURE__ */ jsx(ToggleGroupItem, { value: "italic", "aria-label": "Toggle italic", children: /* @__PURE__ */ jsx(SpriteIcon, { iconId: "Italic", className: "h-4 w-4", spriteUrl }) }),
    /* @__PURE__ */ jsx(ToggleGroupItem, { value: "strikethrough", "aria-label": "Toggle strikethrough", children: /* @__PURE__ */ jsx(SpriteIcon, { iconId: "Underline", className: "h-4 w-4", spriteUrl }) })
  ] });
}
function ToggleGroupDemo$4({ spriteUrl }) {
  return /* @__PURE__ */ jsxs(ToggleGroup$1, { type: "multiple", disabled: true, children: [
    /* @__PURE__ */ jsx(ToggleGroupItem, { value: "bold", "aria-label": "Toggle bold", children: /* @__PURE__ */ jsx(SpriteIcon, { iconId: "Bold", className: "h-4 w-4", spriteUrl }) }),
    /* @__PURE__ */ jsx(ToggleGroupItem, { value: "italic", "aria-label": "Toggle italic", children: /* @__PURE__ */ jsx(SpriteIcon, { iconId: "Italic", className: "h-4 w-4", spriteUrl }) }),
    /* @__PURE__ */ jsx(ToggleGroupItem, { value: "strikethrough", "aria-label": "Toggle strikethrough", children: /* @__PURE__ */ jsx(SpriteIcon, { iconId: "Underline", className: "h-4 w-4", spriteUrl }) })
  ] });
}
function ToggleGroupDemo$3({ spriteUrl }) {
  return /* @__PURE__ */ jsxs(ToggleGroup$1, { type: "multiple", size: "lg", children: [
    /* @__PURE__ */ jsx(ToggleGroupItem, { value: "bold", "aria-label": "Toggle bold", children: /* @__PURE__ */ jsx(SpriteIcon, { iconId: "Bold", className: "h-4 w-4", spriteUrl }) }),
    /* @__PURE__ */ jsx(ToggleGroupItem, { value: "italic", "aria-label": "Toggle italic", children: /* @__PURE__ */ jsx(SpriteIcon, { iconId: "Italic", className: "h-4 w-4", spriteUrl }) }),
    /* @__PURE__ */ jsx(ToggleGroupItem, { value: "strikethrough", "aria-label": "Toggle strikethrough", children: /* @__PURE__ */ jsx(SpriteIcon, { iconId: "Underline", className: "h-4 w-4", spriteUrl }) })
  ] });
}
function ToggleGroupDemo$2({ spriteUrl }) {
  return /* @__PURE__ */ jsxs(ToggleGroup$1, { type: "multiple", variant: "outline", children: [
    /* @__PURE__ */ jsx(ToggleGroupItem, { value: "bold", "aria-label": "Toggle bold", children: /* @__PURE__ */ jsx(SpriteIcon, { iconId: "Bold", className: "h-4 w-4", spriteUrl }) }),
    /* @__PURE__ */ jsx(ToggleGroupItem, { value: "italic", "aria-label": "Toggle italic", children: /* @__PURE__ */ jsx(SpriteIcon, { iconId: "Italic", className: "h-4 w-4", spriteUrl }) }),
    /* @__PURE__ */ jsx(ToggleGroupItem, { value: "strikethrough", "aria-label": "Toggle strikethrough", children: /* @__PURE__ */ jsx(SpriteIcon, { iconId: "Underline", className: "h-4 w-4", spriteUrl }) })
  ] });
}
function ToggleGroupDemo$1({ spriteUrl }) {
  return /* @__PURE__ */ jsxs(ToggleGroup$1, { type: "single", children: [
    /* @__PURE__ */ jsx(ToggleGroupItem, { value: "bold", "aria-label": "Toggle bold", children: /* @__PURE__ */ jsx(SpriteIcon, { iconId: "Bold", className: "h-4 w-4", spriteUrl }) }),
    /* @__PURE__ */ jsx(ToggleGroupItem, { value: "italic", "aria-label": "Toggle italic", children: /* @__PURE__ */ jsx(SpriteIcon, { iconId: "Italic", className: "h-4 w-4", spriteUrl }) }),
    /* @__PURE__ */ jsx(ToggleGroupItem, { value: "strikethrough", "aria-label": "Toggle strikethrough", children: /* @__PURE__ */ jsx(SpriteIcon, { iconId: "Underline", className: "h-4 w-4", spriteUrl }) })
  ] });
}
function ToggleGroupDemo({ spriteUrl }) {
  return /* @__PURE__ */ jsxs(ToggleGroup$1, { type: "single", size: "sm", children: [
    /* @__PURE__ */ jsx(ToggleGroupItem, { value: "bold", "aria-label": "Toggle bold", children: /* @__PURE__ */ jsx(SpriteIcon, { iconId: "Bold", className: "h-4 w-4", spriteUrl }) }),
    /* @__PURE__ */ jsx(ToggleGroupItem, { value: "italic", "aria-label": "Toggle italic", children: /* @__PURE__ */ jsx(SpriteIcon, { iconId: "Italic", className: "h-4 w-4", spriteUrl }) }),
    /* @__PURE__ */ jsx(ToggleGroupItem, { value: "strikethrough", "aria-label": "Toggle strikethrough", children: /* @__PURE__ */ jsx(SpriteIcon, { iconId: "Underline", className: "h-4 w-4", spriteUrl }) })
  ] });
}
function ToggleLg({ spriteUrl }) {
  return /* @__PURE__ */ jsx(Toggle$1, { size: "lg", "aria-label": "Toggle italic", children: /* @__PURE__ */ jsx(SpriteIcon, { iconId: "Italic", spriteUrl }) });
}
function ToggleOutline({ spriteUrl }) {
  return /* @__PURE__ */ jsx(Toggle$1, { variant: "outline", "aria-label": "Toggle italic", children: /* @__PURE__ */ jsx(SpriteIcon, { iconId: "Italic", spriteUrl }) });
}
function ToggleSm({ spriteUrl }) {
  return /* @__PURE__ */ jsx(Toggle$1, { size: "sm", "aria-label": "Toggle italic", children: /* @__PURE__ */ jsx(SpriteIcon, { iconId: "Italic", spriteUrl }) });
}
function ToggleWithText({ spriteUrl }) {
  return /* @__PURE__ */ jsxs(Toggle$1, { "aria-label": "Toggle italic", children: [
    /* @__PURE__ */ jsx(SpriteIcon, { iconId: "Italic", spriteUrl }),
    "Italic"
  ] });
}
function TooltipDemo() {
  return /* @__PURE__ */ jsxs(Tooltip$1, { children: [
    /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button$1, { variant: "outline", children: "Hover" }) }),
    /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: "Add to library" }) })
  ] });
}
function TypographyBlockquote() {
  return /* @__PURE__ */ jsx("blockquote", { className: "mt-6 border-l-2 pl-6 italic", children: `"After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the privilege."` });
}
function TypographyDemo() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h1", { className: "scroll-m-20 text-balance font-extrabold text-4xl tracking-tight", children: "Taxing Laughter: The Joke Tax Chronicles" }),
    /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-xl leading-7 [&:not(:first-child)]:mt-6", children: "Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne. One day, his advisors came to him with a problem: the kingdom was running out of money." }),
    /* @__PURE__ */ jsx("h2", { className: "mt-10 scroll-m-20 border-b pb-2 font-semibold text-3xl tracking-tight transition-colors first:mt-0", children: "The King's Plan" }),
    /* @__PURE__ */ jsxs("p", { className: "leading-7 [&:not(:first-child)]:mt-6", children: [
      "The king thought long and hard, and finally came up with",
      " ",
      /* @__PURE__ */ jsx("a", { href: "#brilliant-plan", className: "font-medium text-primary underline underline-offset-4", children: "a brilliant plan" }),
      ": he would tax the jokes in the kingdom."
    ] }),
    /* @__PURE__ */ jsx("blockquote", { className: "mt-6 border-l-2 pl-6 italic", children: `"After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the privilege."` }),
    /* @__PURE__ */ jsx("h3", { className: "mt-8 scroll-m-20 font-semibold text-2xl tracking-tight", children: "The Joke Tax" }),
    /* @__PURE__ */ jsx("p", { className: "leading-7 [&:not(:first-child)]:mt-6", children: "The king's subjects were not amused. They grumbled and complained, but the king was firm:" }),
    /* @__PURE__ */ jsxs("ul", { className: "my-6 ml-6 list-disc [&>li]:mt-2", children: [
      /* @__PURE__ */ jsx("li", { children: "1st level of puns: 5 gold coins" }),
      /* @__PURE__ */ jsx("li", { children: "2nd level of jokes: 10 gold coins" }),
      /* @__PURE__ */ jsx("li", { children: "3rd level of one-liners : 20 gold coins" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "leading-7 [&:not(:first-child)]:mt-6", children: "As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was one person who refused to let the king's foolishness get him down: a court jester named Jokester." }),
    /* @__PURE__ */ jsx("h3", { className: "mt-8 scroll-m-20 font-semibold text-2xl tracking-tight", children: "Jokester's Revolt" }),
    /* @__PURE__ */ jsx("p", { className: "leading-7 [&:not(:first-child)]:mt-6", children: "Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place: under the king's pillow, in his soup, even in the royal toilet. The king was furious, but he couldn't seem to stop Jokester." }),
    /* @__PURE__ */ jsx("p", { className: "leading-7 [&:not(:first-child)]:mt-6", children: "And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny that they couldn't help but laugh. And once they started laughing, they couldn't stop." }),
    /* @__PURE__ */ jsx("h3", { className: "mt-8 scroll-m-20 font-semibold text-2xl tracking-tight", children: "The People's Rebellion" }),
    /* @__PURE__ */ jsx("p", { className: "leading-7 [&:not(:first-child)]:mt-6", children: "The people of the kingdom, feeling uplifted by the laughter, started to tell jokes and puns again, and soon the entire kingdom was in on the joke." }),
    /* @__PURE__ */ jsx("div", { className: "my-6 w-full overflow-y-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "m-0 border-t p-0 even:bg-muted", children: [
        /* @__PURE__ */ jsx("th", { className: "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right", children: "King's Treasury" }),
        /* @__PURE__ */ jsx("th", { className: "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right", children: "People's happiness" })
      ] }) }),
      /* @__PURE__ */ jsxs("tbody", { children: [
        /* @__PURE__ */ jsxs("tr", { className: "m-0 border-t p-0 even:bg-muted", children: [
          /* @__PURE__ */ jsx("td", { className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right", children: "Empty" }),
          /* @__PURE__ */ jsx("td", { className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right", children: "Overflowing" })
        ] }),
        /* @__PURE__ */ jsxs("tr", { className: "m-0 border-t p-0 even:bg-muted", children: [
          /* @__PURE__ */ jsx("td", { className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right", children: "Modest" }),
          /* @__PURE__ */ jsx("td", { className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right", children: "Satisfied" })
        ] }),
        /* @__PURE__ */ jsxs("tr", { className: "m-0 border-t p-0 even:bg-muted", children: [
          /* @__PURE__ */ jsx("td", { className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right", children: "Full" }),
          /* @__PURE__ */ jsx("td", { className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right", children: "Ecstatic" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("p", { className: "leading-7 [&:not(:first-child)]:mt-6", children: "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax. Jokester was declared a hero, and the kingdom lived happily ever after." }),
    /* @__PURE__ */ jsx("p", { className: "leading-7 [&:not(:first-child)]:mt-6", children: "The moral of the story is: never underestimate the power of a good laugh and always be careful of bad ideas." })
  ] });
}
function TypographyH1() {
  return /* @__PURE__ */ jsx("h1", { className: "scroll-m-20 text-balance text-center font-extrabold text-4xl tracking-tight", children: "Taxing Laughter: The Joke Tax Chronicles" });
}
function TypographyH2() {
  return /* @__PURE__ */ jsx("h2", { className: "scroll-m-20 border-b pb-2 font-semibold text-3xl tracking-tight first:mt-0", children: "The People of the Kingdom" });
}
function TypographyH3() {
  return /* @__PURE__ */ jsx("h3", { className: "scroll-m-20 font-semibold text-2xl tracking-tight", children: "The Joke Tax" });
}
function TypographyH4() {
  return /* @__PURE__ */ jsx("h4", { className: "scroll-m-20 font-semibold text-xl tracking-tight", children: "People stopped telling jokes" });
}
function TypographyInlineCode() {
  return /* @__PURE__ */ jsx("code", { className: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono font-semibold text-sm", children: "@radix-ui/react-alert-dialog" });
}
function TypographyLarge() {
  return /* @__PURE__ */ jsx("div", { className: "font-semibold text-lg", children: "Are you absolutely sure?" });
}
function TypographyLead() {
  return /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-xl", children: "A modal dialog that interrupts the user with important content and expects a response." });
}
function TypographyList() {
  return /* @__PURE__ */ jsxs("ul", { className: "my-6 ml-6 list-disc [&>li]:mt-2", children: [
    /* @__PURE__ */ jsx("li", { children: "1st level of puns: 5 gold coins" }),
    /* @__PURE__ */ jsx("li", { children: "2nd level of jokes: 10 gold coins" }),
    /* @__PURE__ */ jsx("li", { children: "3rd level of one-liners : 20 gold coins" })
  ] });
}
function TypographyMuted() {
  return /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Enter your email address." });
}
function TypographyP() {
  return /* @__PURE__ */ jsx("p", { className: "leading-7 [&:not(:first-child)]:mt-6", children: "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax." });
}
function TypographySmall() {
  return /* @__PURE__ */ jsx("small", { className: "font-medium text-sm leading-none", children: "Email address" });
}
function TypographyTable() {
  return /* @__PURE__ */ jsx("div", { className: "my-6 w-full overflow-y-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full", children: [
    /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "m-0 border-t p-0 even:bg-muted", children: [
      /* @__PURE__ */ jsx("th", { className: "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right", children: "King's Treasury" }),
      /* @__PURE__ */ jsx("th", { className: "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right", children: "People's happiness" })
    ] }) }),
    /* @__PURE__ */ jsxs("tbody", { children: [
      /* @__PURE__ */ jsxs("tr", { className: "m-0 border-t p-0 even:bg-muted", children: [
        /* @__PURE__ */ jsx("td", { className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right", children: "Empty" }),
        /* @__PURE__ */ jsx("td", { className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right", children: "Overflowing" })
      ] }),
      /* @__PURE__ */ jsxs("tr", { className: "m-0 border-t p-0 even:bg-muted", children: [
        /* @__PURE__ */ jsx("td", { className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right", children: "Modest" }),
        /* @__PURE__ */ jsx("td", { className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right", children: "Satisfied" })
      ] }),
      /* @__PURE__ */ jsxs("tr", { className: "m-0 border-t p-0 even:bg-muted", children: [
        /* @__PURE__ */ jsx("td", { className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right", children: "Full" }),
        /* @__PURE__ */ jsx("td", { className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right", children: "Ecstatic" })
      ] })
    ] })
  ] }) });
}
function ReturnToTop({ tableOfContentsId, spriteUrl }) {
  return /* @__PURE__ */ jsx(
    "a",
    {
      href: `#${tableOfContentsId}`,
      className: "inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 font-medium text-primary-foreground text-sm transition-colors hover:bg-primary/80 hover:text-foreground",
      "aria-label": "Return to table of contents",
      children: /* @__PURE__ */ jsx(SpriteIcon, { spriteUrl, iconId: "ArrowUp", className: "h-4 w-4" })
    }
  );
}
function ComponentSection({ id, title, tableOfContentsId, spriteUrl, children }) {
  return /* @__PURE__ */ jsxs("section", { id, className: "mb-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-6 flex items-center justify-between border-b pb-2", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-bold text-3xl", children: title }),
      /* @__PURE__ */ jsx(ReturnToTop, { tableOfContentsId, spriteUrl })
    ] }),
    children
  ] });
}
function ComponentExample({ name, children }) {
  return /* @__PURE__ */ jsxs("div", { className: "rounded-lg border bg-background p-6", children: [
    /* @__PURE__ */ jsx("h3", { className: "mb-4 font-semibold text-accent-foreground text-lg", children: name }),
    children
  ] });
}
function SpriteExamples({ spriteUrl }) {
  return /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
    /* @__PURE__ */ jsx("h2", { className: "mb-4 font-bold text-2xl", children: "Lucide Icon Sprites" }),
    /* @__PURE__ */ jsxs("p", { className: "mb-6 text-gray-600", children: [
      "All ",
      iconNames.length,
      " icons from the lucide sprite sheet"
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-row flex-wrap gap-4", children: iconNames.map((iconName) => /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center rounded-lg border bg-background p-3 transition-colors hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:hover:bg-input/50", children: /* @__PURE__ */ jsxs(Tooltip$1, { children: [
      /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(SpriteIcon, { spriteUrl, iconId: iconName, className: "h-6 w-6 text-accent-foreground", viewBox: "0 0 24 24" }) }),
      /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: iconName }) })
    ] }) }, iconName)) })
  ] });
}
function ComponentExamples({ spriteUrl, exampleUrl }) {
  const spritesId = useId();
  const accordionId = useId();
  const alertsId = useId();
  const avatarId = useId();
  const badgesId = useId();
  const breadcrumbsId = useId();
  const buttonsId = useId();
  const cardsId = useId();
  const checkboxesId = useId();
  const collapsibleId = useId();
  const comboboxId = useId();
  const menusId = useId();
  const dataId = useId();
  const datePickerId = useId();
  const dialogsId = useId();
  const inputsId = useId();
  const labelsId = useId();
  const navigationId = useId();
  const overlaysId = useId();
  const radioId = useId();
  const scrollId = useId();
  const selectsId = useId();
  const separatorsId = useId();
  const sheetsId = useId();
  const skeletonId = useId();
  const slidersId = useId();
  const switchesId = useId();
  const tablesId = useId();
  const tabsId = useId();
  const textareasId = useId();
  const togglesId = useId();
  const tooltipsId = useId();
  const typographyId = useId();
  const notificationsId = useId();
  const tableOfContentsId = useId();
  const sections = [
    { id: accordionId, title: "Accordion" },
    { id: alertsId, title: "Alerts" },
    { id: avatarId, title: "Avatar" },
    { id: badgesId, title: "Badges" },
    { id: breadcrumbsId, title: "Breadcrumbs" },
    { id: buttonsId, title: "Buttons" },
    { id: cardsId, title: "Cards" },
    { id: checkboxesId, title: "Checkboxes" },
    { id: collapsibleId, title: "Collapsible" },
    { id: comboboxId, title: "Combobox" },
    { id: menusId, title: "Menus" },
    { id: dataId, title: "Data Display" },
    { id: datePickerId, title: "Date Picker" },
    { id: dialogsId, title: "Dialogs" },
    { id: inputsId, title: "Inputs" },
    { id: labelsId, title: "Labels" },
    { id: navigationId, title: "Navigation" },
    { id: overlaysId, title: "Overlays" },
    { id: radioId, title: "Radio Groups" },
    { id: scrollId, title: "Scroll Areas" },
    { id: selectsId, title: "Selects" },
    { id: separatorsId, title: "Separators" },
    { id: sheetsId, title: "Sheets" },
    { id: skeletonId, title: "Skeleton" },
    { id: slidersId, title: "Sliders" },
    { id: switchesId, title: "Switches" },
    { id: tablesId, title: "Tables" },
    { id: tabsId, title: "Tabs" },
    { id: textareasId, title: "Textareas" },
    { id: togglesId, title: "Toggles" },
    { id: tooltipsId, title: "Tooltips" },
    { id: typographyId, title: "Typography" },
    { id: notificationsId, title: "Notifications" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl px-6 py-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxs("div", { id: tableOfContentsId, className: "flex flex-row justify-between", children: [
        /* @__PURE__ */ jsx("h1", { className: "mb-4 font-bold text-4xl", children: "shadcn/ui Examples" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-4", children: [
          /* @__PURE__ */ jsx(ThemeSwitch, { spriteUrl }),
          /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(SpriteIcon, { spriteUrl, iconId: "House", className: "size-5 text-accent-foreground", viewBox: "0 0 24 24" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mb-6 text-lg text-muted-foreground", children: "A comprehensive showcase of all shadcn/ui components with live examples." }),
      /* @__PURE__ */ jsxs("div", { className: "mb-8 rounded-lg border bg-muted/10 p-6", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-4 font-semibold text-xl", children: "Table of Contents" }),
        /* @__PURE__ */ jsx("div", { className: "columns-1 gap-8 sm:columns-2 lg:columns-4", children: sections.map((section) => /* @__PURE__ */ jsx("a", { href: `#${section.id}`, className: "mb-4 block text-primary transition-colors hover:text-primary/80 hover:underline", children: section.title }, section.id)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-16", children: [
      /* @__PURE__ */ jsx(ComponentSection, { id: spritesId, title: "Sprite Examples", tableOfContentsId, spriteUrl, children: /* @__PURE__ */ jsx("div", { className: "max-w-2xl", children: /* @__PURE__ */ jsx(SpriteExamples, { spriteUrl }) }) }),
      /* @__PURE__ */ jsx("h2", { className: "mb-4 font-bold text-4xl", children: "Component Examples" }),
      /* @__PURE__ */ jsx(ComponentSection, { id: accordionId, title: "Accordion", tableOfContentsId, spriteUrl, children: /* @__PURE__ */ jsx("div", { className: "max-w-2xl", children: /* @__PURE__ */ jsx(ComponentExample, { name: "Accordion Demo", children: /* @__PURE__ */ jsx(AccordionDemo, {}) }) }) }),
      /* @__PURE__ */ jsx(ComponentSection, { id: alertsId, title: "Alerts", tableOfContentsId, spriteUrl, children: /* @__PURE__ */ jsxs("div", { className: "flex max-w-2xl flex-col gap-6", children: [
        /* @__PURE__ */ jsx(ComponentExample, { name: "Alert Demo", children: /* @__PURE__ */ jsx(AlertDemo, { spriteUrl }) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Alert Destructive", children: /* @__PURE__ */ jsx(AlertDestructive, { spriteUrl }) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Alert Dialog Demo", children: /* @__PURE__ */ jsx(AlertDialogDemo, {}) })
      ] }) }),
      /* @__PURE__ */ jsx(ComponentSection, { id: avatarId, title: "Avatar", tableOfContentsId, spriteUrl, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-6", children: [
        /* @__PURE__ */ jsx(ComponentExample, { name: "Avatar Demo", children: /* @__PURE__ */ jsx(AvatarDemo, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Aspect Ratio Demo", children: /* @__PURE__ */ jsx(AspectRatioDemo, {}) })
      ] }) }),
      /* @__PURE__ */ jsx(ComponentSection, { id: badgesId, title: "Badges", tableOfContentsId, spriteUrl, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-6", children: [
        /* @__PURE__ */ jsx(ComponentExample, { name: "Badge Demo", children: /* @__PURE__ */ jsx(BadgeDemo, { spriteUrl }) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Badge Destructive", children: /* @__PURE__ */ jsx(BadgeDestructive, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Badge Outline", children: /* @__PURE__ */ jsx(BadgeOutline, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Badge Secondary", children: /* @__PURE__ */ jsx(BadgeSecondary, {}) })
      ] }) }),
      /* @__PURE__ */ jsx(ComponentSection, { id: breadcrumbsId, title: "Breadcrumbs", tableOfContentsId, spriteUrl, children: /* @__PURE__ */ jsxs("div", { className: "flex max-w-2xl flex-col gap-6", children: [
        /* @__PURE__ */ jsx(ComponentExample, { name: "Breadcrumb Demo", children: /* @__PURE__ */ jsx(BreadcrumbDemo, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Breadcrumb Dropdown", children: /* @__PURE__ */ jsx(BreadcrumbWithDropdown, { spriteUrl }) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Breadcrumb Ellipsis", children: /* @__PURE__ */ jsx(BreadcrumbCollapsed, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Breadcrumb Link", children: /* @__PURE__ */ jsx(BreadcrumbWithCustomSeparator$1, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Breadcrumb Separator", children: /* @__PURE__ */ jsx(BreadcrumbWithCustomSeparator, { spriteUrl }) })
      ] }) }),
      /* @__PURE__ */ jsx(ComponentSection, { id: buttonsId, title: "Buttons", tableOfContentsId, spriteUrl, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3", children: [
        /* @__PURE__ */ jsx(ComponentExample, { name: "Button Demo", children: /* @__PURE__ */ jsx(ButtonDemo, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Button As Child", children: /* @__PURE__ */ jsx(ButtonAsChild, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Button Destructive", children: /* @__PURE__ */ jsx(ButtonDestructive, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Button Ghost", children: /* @__PURE__ */ jsx(ButtonGhost, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Button Icon", children: /* @__PURE__ */ jsx(ButtonIcon, { spriteUrl }) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Button Link", children: /* @__PURE__ */ jsx(ButtonLink, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Button Loading", children: /* @__PURE__ */ jsx(ButtonLoading, { spriteUrl }) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Button Outline", children: /* @__PURE__ */ jsx(ButtonOutline, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Button Secondary", children: /* @__PURE__ */ jsx(ButtonSecondary, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Button With Icon", children: /* @__PURE__ */ jsx(ButtonWithIcon, { spriteUrl }) })
      ] }) }),
      /* @__PURE__ */ jsx(ComponentSection, { id: cardsId, title: "Cards", tableOfContentsId, spriteUrl, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6 lg:flex-row", children: [
        /* @__PURE__ */ jsx(ComponentExample, { name: "Card Demo", children: /* @__PURE__ */ jsx(CardDemo, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Card With Form", children: /* @__PURE__ */ jsx(CardWithForm, {}) })
      ] }) }),
      /* @__PURE__ */ jsx(ComponentSection, { id: checkboxesId, title: "Checkboxes", tableOfContentsId, spriteUrl, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: [
        /* @__PURE__ */ jsx(ComponentExample, { name: "Checkbox Demo", children: /* @__PURE__ */ jsx(CheckboxDemo, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Checkbox Disabled", children: /* @__PURE__ */ jsx(CheckboxDisabled, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Checkbox Form Multiple", children: /* @__PURE__ */ jsx(CheckboxReactHookFormMultiple, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Checkbox Form Single", children: /* @__PURE__ */ jsx(CheckboxReactHookFormSingle, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Checkbox With Text", children: /* @__PURE__ */ jsx(CheckboxWithText, {}) })
      ] }) }),
      /* @__PURE__ */ jsx(ComponentSection, { id: collapsibleId, title: "Collapsible", tableOfContentsId, spriteUrl, children: /* @__PURE__ */ jsx("div", { className: "max-w-md", children: /* @__PURE__ */ jsx(ComponentExample, { name: "Collapsible Demo", children: /* @__PURE__ */ jsx(CollapsibleDemo, { spriteUrl }) }) }) }),
      /* @__PURE__ */ jsx(ComponentSection, { id: comboboxId, title: "Combobox", tableOfContentsId, spriteUrl, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: [
        /* @__PURE__ */ jsx(ComponentExample, { name: "Combobox Demo", children: /* @__PURE__ */ jsx(ComboboxDemo, { spriteUrl }) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Combobox Dropdown Menu", children: /* @__PURE__ */ jsx(ComboboxDropdownMenu, { spriteUrl }) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Combobox Form", children: /* @__PURE__ */ jsx(ComboboxForm, { spriteUrl }) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Combobox Popover", children: /* @__PURE__ */ jsx(ComboboxPopover, {}) })
      ] }) }),
      /* @__PURE__ */ jsx(ComponentSection, { id: menusId, title: "Menus", tableOfContentsId, spriteUrl, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-6", children: [
        /* @__PURE__ */ jsx(ComponentExample, { name: "Context Menu Demo", children: /* @__PURE__ */ jsx(ContextMenuDemo, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Dropdown Menu Demo", children: /* @__PURE__ */ jsx(DropdownMenuDemo, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Dropdown Menu Checkboxes", children: /* @__PURE__ */ jsx(DropdownMenuCheckboxes, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Dropdown Menu Radio Group", children: /* @__PURE__ */ jsx(DropdownMenuRadioGroupDemo, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Menubar Demo", children: /* @__PURE__ */ jsx(MenubarDemo, {}) })
      ] }) }),
      /* @__PURE__ */ jsx(ComponentSection, { id: dialogsId, title: "Dialogs", tableOfContentsId, spriteUrl, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-6", children: [
        /* @__PURE__ */ jsx(ComponentExample, { name: "Dialog Demo", children: /* @__PURE__ */ jsx(DialogDemo, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Dialog Close Button", children: /* @__PURE__ */ jsx(DialogCloseButton, {}) })
      ] }) }),
      /* @__PURE__ */ jsx(ComponentSection, { id: inputsId, title: "Inputs", tableOfContentsId, spriteUrl, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: [
        /* @__PURE__ */ jsx(ComponentExample, { name: "Input Demo", children: /* @__PURE__ */ jsx(InputDemo, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Input Disabled", children: /* @__PURE__ */ jsx(InputDisabled, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Input File", children: /* @__PURE__ */ jsx(InputFile, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Input Form", children: /* @__PURE__ */ jsx(InputForm, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Input With Button", children: /* @__PURE__ */ jsx(InputWithButton, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Input With Label", children: /* @__PURE__ */ jsx(InputWithLabel, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Input With Text", children: /* @__PURE__ */ jsx(InputWithText, {}) })
      ] }) }),
      /* @__PURE__ */ jsx(ComponentSection, { id: labelsId, title: "Labels", tableOfContentsId, spriteUrl, children: /* @__PURE__ */ jsx("div", { className: "max-w-md", children: /* @__PURE__ */ jsx(ComponentExample, { name: "Label Demo", children: /* @__PURE__ */ jsx(LabelDemo, {}) }) }) }),
      /* @__PURE__ */ jsx(ComponentSection, { id: navigationId, title: "Navigation", tableOfContentsId, spriteUrl, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsx(ComponentExample, { name: "Navigation Menu Demo", children: /* @__PURE__ */ jsx(NavigationMenuDemo, { spriteUrl }) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Pagination Demo", children: /* @__PURE__ */ jsx(PaginationDemo, {}) })
      ] }) }),
      /* @__PURE__ */ jsx(ComponentSection, { id: overlaysId, title: "Overlays", tableOfContentsId, spriteUrl, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-6", children: [
        /* @__PURE__ */ jsx(ComponentExample, { name: "Hover Card Demo", children: /* @__PURE__ */ jsx(HoverCardDemo, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Popover Demo", children: /* @__PURE__ */ jsx(PopoverDemo, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Mode Toggle", children: /* @__PURE__ */ jsx(ModeToggle, { spriteUrl }) })
      ] }) }),
      /* @__PURE__ */ jsx(ComponentSection, { id: radioId, title: "Radio Groups", tableOfContentsId, spriteUrl, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-6", children: [
        /* @__PURE__ */ jsx(ComponentExample, { name: "Radio Group Demo", children: /* @__PURE__ */ jsx(RadioGroupDemo, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Radio Group Form", children: /* @__PURE__ */ jsx(RadioGroupForm, {}) })
      ] }) }),
      /* @__PURE__ */ jsx(ComponentSection, { id: scrollId, title: "Scroll Areas", tableOfContentsId, spriteUrl, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6 lg:flex-row", children: [
        /* @__PURE__ */ jsx(ComponentExample, { name: "Scroll Area Demo", children: /* @__PURE__ */ jsx(ScrollAreaDemo, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Scroll Area Horizontal Demo", children: /* @__PURE__ */ jsx(ScrollAreaHorizontalDemo, {}) })
      ] }) }),
      /* @__PURE__ */ jsx(ComponentSection, { id: selectsId, title: "Selects", tableOfContentsId, spriteUrl, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: [
        /* @__PURE__ */ jsx(ComponentExample, { name: "Select Demo", children: /* @__PURE__ */ jsx(SelectDemo, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Select Form", children: /* @__PURE__ */ jsx(SelectForm, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Select Scrollable", children: /* @__PURE__ */ jsx(SelectScrollable, {}) })
      ] }) }),
      /* @__PURE__ */ jsx(ComponentSection, { id: separatorsId, title: "Separators", tableOfContentsId, spriteUrl, children: /* @__PURE__ */ jsx("div", { className: "max-w-md", children: /* @__PURE__ */ jsx(ComponentExample, { name: "Separator Demo", children: /* @__PURE__ */ jsx(SeparatorDemo, {}) }) }) }),
      /* @__PURE__ */ jsx(ComponentSection, { id: sheetsId, title: "Sheets", tableOfContentsId, spriteUrl, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-6", children: [
        /* @__PURE__ */ jsx(ComponentExample, { name: "Sheet Demo", children: /* @__PURE__ */ jsx(SheetDemo, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Sheet Side", children: /* @__PURE__ */ jsx(SheetSide, {}) })
      ] }) }),
      /* @__PURE__ */ jsx(ComponentSection, { id: skeletonId, title: "Skeleton", tableOfContentsId, spriteUrl, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6 lg:flex-row", children: [
        /* @__PURE__ */ jsx(ComponentExample, { name: "Skeleton Demo", children: /* @__PURE__ */ jsx(SkeletonDemo, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Skeleton Card", children: /* @__PURE__ */ jsx(SkeletonCard, {}) })
      ] }) }),
      /* @__PURE__ */ jsx(ComponentSection, { id: slidersId, title: "Sliders", tableOfContentsId, spriteUrl, children: /* @__PURE__ */ jsxs("div", { className: "max-w-md", children: [
        /* @__PURE__ */ jsx(ComponentExample, { name: "Slider Demo", children: /* @__PURE__ */ jsx(SliderDemo, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Progress Demo", children: /* @__PURE__ */ jsx(ProgressDemo, {}) })
      ] }) }),
      /* @__PURE__ */ jsx(ComponentSection, { id: switchesId, title: "Switches", tableOfContentsId, spriteUrl, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-6", children: [
        /* @__PURE__ */ jsx(ComponentExample, { name: "Switch Demo", children: /* @__PURE__ */ jsx(SwitchDemo, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Switch Form", children: /* @__PURE__ */ jsx(SwitchForm, {}) })
      ] }) }),
      /* @__PURE__ */ jsx(ComponentSection, { id: tablesId, title: "Tables", tableOfContentsId, spriteUrl, children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl", children: /* @__PURE__ */ jsx(ComponentExample, { name: "Table Demo", children: /* @__PURE__ */ jsx(TableDemo, {}) }) }) }),
      /* @__PURE__ */ jsx(ComponentSection, { id: tabsId, title: "Tabs", tableOfContentsId, spriteUrl, children: /* @__PURE__ */ jsx("div", { className: "max-w-2xl", children: /* @__PURE__ */ jsx(ComponentExample, { name: "Tabs Demo", children: /* @__PURE__ */ jsx(TabsDemo, {}) }) }) }),
      /* @__PURE__ */ jsx(ComponentSection, { id: textareasId, title: "Textareas", tableOfContentsId, spriteUrl, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: [
        /* @__PURE__ */ jsx(ComponentExample, { name: "Textarea Demo", children: /* @__PURE__ */ jsx(TextareaDemo, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Textarea Disabled", children: /* @__PURE__ */ jsx(TextareaDisabled, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Textarea Form", children: /* @__PURE__ */ jsx(TextareaForm, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Textarea With Button", children: /* @__PURE__ */ jsx(TextareaWithButton, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Textarea With Label", children: /* @__PURE__ */ jsx(TextareaWithLabel, {}) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Textarea With Text", children: /* @__PURE__ */ jsx(TextareaWithText, {}) })
      ] }) }),
      /* @__PURE__ */ jsx(ComponentSection, { id: togglesId, title: "Toggles", tableOfContentsId, spriteUrl, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3", children: [
        /* @__PURE__ */ jsx(ComponentExample, { name: "Toggle Demo", children: /* @__PURE__ */ jsx(ToggleDemo, { spriteUrl: exampleUrl }) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Toggle Disabled", children: /* @__PURE__ */ jsx(ToggleDisabled, { spriteUrl: exampleUrl }) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Toggle Group Demo", children: /* @__PURE__ */ jsx(ToggleGroupDemo$5, { spriteUrl: exampleUrl }) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Toggle Group Disabled", children: /* @__PURE__ */ jsx(ToggleGroupDemo$4, { spriteUrl: exampleUrl }) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Toggle Group Large", children: /* @__PURE__ */ jsx(ToggleGroupDemo$3, { spriteUrl: exampleUrl }) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Toggle Group Outline", children: /* @__PURE__ */ jsx(ToggleGroupDemo$2, { spriteUrl: exampleUrl }) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Toggle Group Single", children: /* @__PURE__ */ jsx(ToggleGroupDemo$1, { spriteUrl: exampleUrl }) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Toggle Group Small", children: /* @__PURE__ */ jsx(ToggleGroupDemo, { spriteUrl: exampleUrl }) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Toggle Large", children: /* @__PURE__ */ jsx(ToggleLg, { spriteUrl: exampleUrl }) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Toggle Outline", children: /* @__PURE__ */ jsx(ToggleOutline, { spriteUrl: exampleUrl }) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Toggle Small", children: /* @__PURE__ */ jsx(ToggleSm, { spriteUrl: exampleUrl }) }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Toggle With Text", children: /* @__PURE__ */ jsx(ToggleWithText, { spriteUrl: exampleUrl }) })
      ] }) }),
      /* @__PURE__ */ jsx(ComponentSection, { id: tooltipsId, title: "Tooltips", tableOfContentsId, spriteUrl, children: /* @__PURE__ */ jsx("div", { className: "max-w-md", children: /* @__PURE__ */ jsx(ComponentExample, { name: "Tooltip Demo", children: /* @__PURE__ */ jsx(TooltipDemo, {}) }) }) }),
      /* @__PURE__ */ jsx(ComponentSection, { id: typographyId, title: "Typography", tableOfContentsId, spriteUrl, children: /* @__PURE__ */ jsxs("div", { className: "flex max-w-4xl flex-col gap-6", children: [
        /* @__PURE__ */ jsx(ComponentExample, { name: "Typography Demo", children: /* @__PURE__ */ jsx(TypographyDemo, {}) }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: [
          /* @__PURE__ */ jsx(ComponentExample, { name: "Typography H1", children: /* @__PURE__ */ jsx(TypographyH1, {}) }),
          /* @__PURE__ */ jsx(ComponentExample, { name: "Typography H2", children: /* @__PURE__ */ jsx(TypographyH2, {}) }),
          /* @__PURE__ */ jsx(ComponentExample, { name: "Typography H3", children: /* @__PURE__ */ jsx(TypographyH3, {}) }),
          /* @__PURE__ */ jsx(ComponentExample, { name: "Typography H4", children: /* @__PURE__ */ jsx(TypographyH4, {}) }),
          /* @__PURE__ */ jsx(ComponentExample, { name: "Typography Paragraph", children: /* @__PURE__ */ jsx(TypographyP, {}) }),
          /* @__PURE__ */ jsx(ComponentExample, { name: "Typography Blockquote", children: /* @__PURE__ */ jsx(TypographyBlockquote, {}) }),
          /* @__PURE__ */ jsx(ComponentExample, { name: "Typography List", children: /* @__PURE__ */ jsx(TypographyList, {}) }),
          /* @__PURE__ */ jsx(ComponentExample, { name: "Typography Inline Code", children: /* @__PURE__ */ jsx(TypographyInlineCode, {}) }),
          /* @__PURE__ */ jsx(ComponentExample, { name: "Typography Lead", children: /* @__PURE__ */ jsx(TypographyLead, {}) }),
          /* @__PURE__ */ jsx(ComponentExample, { name: "Typography Large", children: /* @__PURE__ */ jsx(TypographyLarge, {}) }),
          /* @__PURE__ */ jsx(ComponentExample, { name: "Typography Small", children: /* @__PURE__ */ jsx(TypographySmall, {}) }),
          /* @__PURE__ */ jsx(ComponentExample, { name: "Typography Muted", children: /* @__PURE__ */ jsx(TypographyMuted, {}) })
        ] }),
        /* @__PURE__ */ jsx(ComponentExample, { name: "Typography Table", children: /* @__PURE__ */ jsx(TypographyTable, {}) })
      ] }) }),
      /* @__PURE__ */ jsx(ComponentSection, { id: notificationsId, title: "Notifications", tableOfContentsId, spriteUrl, children: /* @__PURE__ */ jsx("div", { className: "max-w-md", children: /* @__PURE__ */ jsx(ComponentExample, { name: "Sonner Demo", children: /* @__PURE__ */ jsx(SonnerDemo, {}) }) }) })
    ] })
  ] });
}
const buttonGroupVariants = createVariants(
  "flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:gap-2",
  {
    variants: {
      orientation: {
        horizontal: "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
        vertical: "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none"
      }
    },
    defaultVariants: {
      orientation: "horizontal"
    }
  }
);
function ButtonGroup$1({ className, orientation, ...props }) {
  return /* @__PURE__ */ jsx("div", { role: "group", "data-slot": "button-group", "data-orientation": orientation, className: clsx(buttonGroupVariants({ orientation }), className), ...props });
}
function ButtonGroupText({
  className,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Slot : "div";
  return /* @__PURE__ */ jsx(Comp, { className: clsx("flex items-center gap-2 rounded-md border bg-muted px-4 font-medium text-sm shadow-xs [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none", className), ...props });
}
function ButtonGroupSeparator({ className, orientation = "vertical", ...props }) {
  return /* @__PURE__ */ jsx(Separator, { "data-slot": "button-group-separator", orientation, className: clsx("!m-0 relative self-stretch bg-input data-[orientation=vertical]:h-auto", className), ...props });
}
function Empty$1({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "empty", className: clsx("flex min-w-0 flex-1 flex-col items-center justify-center gap-6 text-balance rounded-lg border-dashed p-6 text-center md:p-12", className), ...props });
}
function EmptyHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "empty-header", className: clsx("flex max-w-sm flex-col items-center gap-2 text-center", className), ...props });
}
const emptyMediaVariants = createVariants("flex shrink-0 items-center justify-center mb-2 [&_svg]:pointer-events-none [&_svg]:shrink-0", {
  variants: {
    variant: {
      default: "bg-transparent",
      icon: "bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-6"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
function EmptyMedia({ className, variant = "default", ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "empty-icon", "data-variant": variant, className: clsx(emptyMediaVariants({ variant, className })), ...props });
}
function EmptyTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "empty-title", className: clsx("font-medium text-lg tracking-tight", className), ...props });
}
function EmptyDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "empty-description", className: clsx("text-muted-foreground text-sm/relaxed [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4", className), ...props });
}
function EmptyContent({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "empty-content", className: clsx("flex w-full min-w-0 max-w-sm flex-col items-center gap-4 text-balance text-sm", className), ...props });
}
function FieldSet({ className, ...props }) {
  return /* @__PURE__ */ jsx("fieldset", { "data-slot": "field-set", className: clsx("flex flex-col gap-6", "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3", className), ...props });
}
function FieldLegend({ className, variant = "legend", ...props }) {
  return /* @__PURE__ */ jsx("legend", { "data-slot": "field-legend", "data-variant": variant, className: clsx("mb-3 font-medium", "data-[variant=legend]:text-base", "data-[variant=label]:text-sm", className), ...props });
}
function FieldGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "field-group", className: clsx("group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4", className), ...props });
}
const fieldVariants = createVariants("group/field flex w-full gap-3 data-[invalid=true]:text-destructive", {
  variants: {
    orientation: {
      vertical: "flex-col [&>*]:w-full [&>.sr-only]:w-auto",
      horizontal: "flex-row items-center [&>[data-slot=field-label]]:flex-auto has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
      responsive: "flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto @md/field-group:[&>[data-slot=field-label]]:flex-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
    }
  },
  defaultVariants: {
    orientation: "vertical"
  }
});
function Field$1({ className, orientation = "vertical", ...props }) {
  return /* @__PURE__ */ jsx("div", { role: "group", "data-slot": "field", "data-orientation": orientation, className: clsx(fieldVariants({ orientation }), className), ...props });
}
function FieldContent({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "field-content", className: clsx("group/field-content flex flex-1 flex-col gap-1.5 leading-snug", className), ...props });
}
function FieldLabel({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Label,
    {
      "data-slot": "field-label",
      className: clsx(
        "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4",
        "has-data-[state=checked]:border-primary has-data-[state=checked]:bg-primary/5 dark:has-data-[state=checked]:bg-primary/10",
        className
      ),
      ...props
    }
  );
}
function FieldTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "field-label", className: clsx("flex w-fit items-center gap-2 font-medium text-sm leading-snug group-data-[disabled=true]/field:opacity-50", className), ...props });
}
function FieldDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "p",
    {
      "data-slot": "field-description",
      className: clsx(
        "font-normal text-muted-foreground text-sm leading-normal group-has-[[data-orientation=horizontal]]/field:text-balance",
        "nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5 last:mt-0",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        className
      ),
      ...props
    }
  );
}
function FieldSeparator({
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs("div", { "data-slot": "field-separator", "data-content": !!children, className: clsx("-my-2 group-data-[variant=outline]/field-group:-mb-2 relative h-5 text-sm", className), ...props, children: [
    /* @__PURE__ */ jsx(Separator, { className: "absolute inset-0 top-1/2" }),
    children && /* @__PURE__ */ jsx("span", { className: "relative mx-auto block w-fit bg-background px-2 text-muted-foreground", "data-slot": "field-separator-content", children })
  ] });
}
function FieldError({
  className,
  children,
  errors,
  ...props
}) {
  const content = useMemo(() => {
    if (children) {
      return children;
    }
    if (!errors?.length) {
      return null;
    }
    const uniqueErrors = [...new Map(errors.map((error) => [error?.message, error])).values()];
    if (uniqueErrors?.length == 1) {
      return uniqueErrors[0]?.message;
    }
    return /* @__PURE__ */ jsx("ul", { className: "ml-4 flex list-disc flex-col gap-1", children: uniqueErrors.map((error, index) => error?.message && /* @__PURE__ */ jsx("li", { children: error.message }, index)) });
  }, [children, errors]);
  if (!content) {
    return null;
  }
  return /* @__PURE__ */ jsx("div", { role: "alert", "data-slot": "field-error", className: clsx("font-normal text-destructive text-sm", className), ...props, children: content });
}
const Form$1 = FormProvider;
const FormFieldContext = React.createContext({});
const FormField = ({ ...props }) => {
  return /* @__PURE__ */ jsx(FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ jsx(Controller, { ...props }) });
};
const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  const { id } = itemContext;
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
};
const FormItemContext = React.createContext({});
function FormItem({ className, ...props }) {
  const id = React.useId();
  return /* @__PURE__ */ jsx(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ jsx("div", { "data-slot": "form-item", className: clsx("grid gap-2", className), ...props }) });
}
function FormLabel({ className, ...props }) {
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ jsx(Label, { "data-slot": "form-label", "data-error": !!error, className: clsx("data-[error=true]:text-destructive", className), htmlFor: formItemId, ...props });
}
function FormControl({ ...props }) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ jsx(Slot.Slot, { "data-slot": "form-control", id: formItemId, "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`, "aria-invalid": !!error, ...props });
}
function FormDescription({ className, ...props }) {
  const { formDescriptionId } = useFormField();
  return /* @__PURE__ */ jsx("p", { "data-slot": "form-description", id: formDescriptionId, className: clsx("text-muted-foreground text-sm", className), ...props });
}
function FormMessage({ className, ...props }) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : props.children;
  if (!body) {
    return null;
  }
  return /* @__PURE__ */ jsx("p", { "data-slot": "form-message", id: formMessageId, className: clsx("text-destructive text-sm", className), ...props, children: body });
}
function InputGroup$1({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "input-group",
      role: "group",
      className: clsx(
        "group/input-group relative flex w-full items-center rounded-md border border-input shadow-xs outline-none transition-[color,box-shadow] dark:bg-input/30",
        "h-9 min-w-0 has-[>textarea]:h-auto",
        // Variants based on alignment.
        "has-[>[data-align=inline-start]]:[&>input]:pl-2",
        "has-[>[data-align=inline-end]]:[&>input]:pr-2",
        "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3",
        "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3",
        // Focus state.
        "has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-[3px] has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50",
        // Error state.
        "has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-destructive/20 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40",
        className
      ),
      ...props
    }
  );
}
const inputGroupAddonVariants = createVariants(
  "text-muted-foreground flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium select-none [&>svg:not([class*='size-'])]:size-4 [&>kbd]:rounded-[calc(var(--radius)-5px)] group-data-[disabled=true]/input-group:opacity-50",
  {
    variants: {
      align: {
        "inline-start": "order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]",
        "inline-end": "order-last pr-3 has-[>button]:mr-[-0.45rem] has-[>kbd]:mr-[-0.35rem]",
        "block-start": "order-first w-full justify-start px-3 pt-3 [.border-b]:pb-3 group-has-[>input]/input-group:pt-2.5",
        "block-end": "order-last w-full justify-start px-3 pb-3 [.border-t]:pt-3 group-has-[>input]/input-group:pb-2.5"
      }
    },
    defaultVariants: {
      align: "inline-start"
    }
  }
);
function InputGroupAddon({ className, align = "inline-start", ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      role: "group",
      "data-slot": "input-group-addon",
      "data-align": align,
      className: clsx(inputGroupAddonVariants({ align }), className),
      onClick: (e) => {
        if (e.target.closest("button")) {
          return;
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus();
      },
      ...props
    }
  );
}
const inputGroupButtonVariants = createVariants("text-sm shadow-none flex gap-2 items-center", {
  variants: {
    size: {
      xs: "h-6 gap-1 px-2 rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-3.5 has-[>svg]:px-2",
      sm: "h-8 px-2.5 gap-1.5 rounded-md has-[>svg]:px-2.5",
      "icon-xs": "size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0",
      "icon-sm": "size-8 p-0 has-[>svg]:p-0"
    }
  },
  defaultVariants: {
    size: "xs"
  }
});
function InputGroupButton({ className, type = "button", variant = "ghost", size = "xs", ...props }) {
  return /* @__PURE__ */ jsx(Button$1, { type, "data-size": size, variant, className: clsx(inputGroupButtonVariants({ size }), className), ...props });
}
function InputGroupText({ className, ...props }) {
  return /* @__PURE__ */ jsx("span", { className: clsx("flex items-center gap-2 text-muted-foreground text-sm [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none", className), ...props });
}
function InputGroupInput({ className, ...props }) {
  return /* @__PURE__ */ jsx(Input, { "data-slot": "input-group-control", className: clsx("flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent", className), ...props });
}
function InputGroupTextarea({ className, ...props }) {
  return /* @__PURE__ */ jsx(Textarea, { "data-slot": "input-group-control", className: clsx("flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0 dark:bg-transparent", className), ...props });
}
function ItemGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { role: "list", "data-slot": "item-group", className: clsx("group/item-group flex flex-col", className), ...props });
}
function ItemSeparator({ className, ...props }) {
  return /* @__PURE__ */ jsx(Separator, { "data-slot": "item-separator", orientation: "horizontal", className: clsx("my-0", className), ...props });
}
const itemVariants = createVariants(
  "group/item flex items-center border border-transparent text-sm rounded-md transition-colors [a]:hover:bg-accent/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border-border",
        muted: "bg-muted/50"
      },
      size: {
        default: "p-4 gap-4 ",
        sm: "py-3 px-4 gap-2.5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Item$1({ className, variant = "default", size = "default", asChild = false, ...props }) {
  const Comp = asChild ? Slot.Slot : "div";
  return /* @__PURE__ */ jsx(Comp, { "data-slot": "item", "data-variant": variant, "data-size": size, className: clsx(itemVariants({ variant, size, className })), ...props });
}
const itemMediaVariants = createVariants(
  "flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "size-8 border rounded-sm bg-muted [&_svg:not([class*='size-'])]:size-4",
        image: "size-10 rounded-sm overflow-hidden [&_img]:size-full [&_img]:object-cover"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function ItemMedia({ className, variant = "default", ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "item-media", "data-variant": variant, className: clsx(itemMediaVariants({ variant, className })), ...props });
}
function ItemContent({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "item-content", className: clsx("flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none", className), ...props });
}
function ItemTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "item-title", className: clsx("flex w-fit items-center gap-2 font-medium text-sm leading-snug", className), ...props });
}
function ItemDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "p",
    {
      "data-slot": "item-description",
      className: clsx("line-clamp-2 text-balance font-normal text-muted-foreground text-sm leading-normal", "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4", className),
      ...props
    }
  );
}
function ItemActions({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "item-actions", className: clsx("flex items-center gap-2", className), ...props });
}
function ItemHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "item-header", className: clsx("flex basis-full items-center justify-between gap-2", className), ...props });
}
function ItemFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "item-footer", className: clsx("flex basis-full items-center justify-between gap-2", className), ...props });
}
function Kbd$1({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "kbd",
    {
      "data-slot": "kbd",
      className: clsx(
        "pointer-events-none inline-flex h-5 w-fit min-w-5 select-none items-center justify-center gap-1 rounded-sm bg-muted px-1 font-medium font-sans text-muted-foreground text-xs",
        "[&_svg:not([class*='size-'])]:size-3",
        "[[data-slot=tooltip-content]_&]:bg-background/20 [[data-slot=tooltip-content]_&]:text-background dark:[[data-slot=tooltip-content]_&]:bg-background/10",
        className
      ),
      ...props
    }
  );
}
function KbdGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx("kbd", { "data-slot": "kbd-group", className: clsx("inline-flex items-center gap-1", className), ...props });
}
function NativeSelect$1({ className, ...props }) {
  return /* @__PURE__ */ jsxs("div", { className: "group/native-select relative w-fit has-[select:disabled]:opacity-50", "data-slot": "native-select-wrapper", children: [
    /* @__PURE__ */ jsx(
      "select",
      {
        "data-slot": "native-select",
        className: clsx(
          "h-9 w-full min-w-0 appearance-none rounded-md border border-input bg-transparent px-3 py-2 pr-9 text-sm shadow-xs outline-none transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed dark:bg-input/30 dark:hover:bg-input/50",
          "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
          "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
          className
        ),
        ...props
      }
    ),
    /* @__PURE__ */ jsx(SvgIcon, { iconId: "ChevronDown", className: "-translate-y-1/2 pointer-events-none absolute top-1/2 right-3.5 size-4 select-none text-muted-foreground opacity-50", "aria-hidden": "true", "data-slot": "native-select-icon" })
  ] });
}
function NativeSelectOption({ ...props }) {
  return /* @__PURE__ */ jsx("option", { "data-slot": "native-select-option", ...props });
}
function NativeSelectOptGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx("optgroup", { "data-slot": "native-select-optgroup", className: clsx(className), ...props });
}
const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(void 0);
  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}
const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";
const SidebarContext = React.createContext(null);
function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}
function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}) {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React.useState(false);
  const [_open, _setOpen] = React.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React.useCallback(
    (value) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open]
  );
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open2) => !open2) : setOpen((open2) => !open2);
  }, [isMobile, setOpen, setOpenMobile]);
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);
  const state = open ? "expanded" : "collapsed";
  const contextValue = React.useMemo(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  );
  return /* @__PURE__ */ jsx(SidebarContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx(TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": SIDEBAR_WIDTH,
        "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
        ...style
      },
      className: clsx("group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar", className),
      ...props,
      children
    }
  ) }) });
}
function Sidebar$1({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
  if (collapsible === "none") {
    return /* @__PURE__ */ jsx("div", { "data-slot": "sidebar", className: clsx("flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground", className), ...props, children });
  }
  if (isMobile) {
    return /* @__PURE__ */ jsx(Sheet$1, { open: openMobile, onOpenChange: setOpenMobile, ...props, children: /* @__PURE__ */ jsxs(
      SheetContent,
      {
        "data-sidebar": "sidebar",
        "data-slot": "sidebar",
        "data-mobile": "true",
        className: "w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
        style: {
          "--sidebar-width": SIDEBAR_WIDTH_MOBILE
        },
        side,
        children: [
          /* @__PURE__ */ jsxs(SheetHeader, { className: "sr-only", children: [
            /* @__PURE__ */ jsx(SheetTitle, { children: "Sidebar" }),
            /* @__PURE__ */ jsx(SheetDescription, { children: "Displays the mobile sidebar." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex h-full w-full flex-col", children })
        ]
      }
    ) });
  }
  return /* @__PURE__ */ jsxs("div", { className: "group peer hidden text-sidebar-foreground md:block", "data-state": state, "data-collapsible": state === "collapsed" ? collapsible : "", "data-variant": variant, "data-side": side, "data-slot": "sidebar", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        "data-slot": "sidebar-gap",
        className: clsx(
          "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
        )
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        "data-slot": "sidebar-container",
        className: clsx(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          className
        ),
        ...props,
        children: /* @__PURE__ */ jsx(
          "div",
          {
            "data-sidebar": "sidebar",
            "data-slot": "sidebar-inner",
            className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow-sm",
            children
          }
        )
      }
    )
  ] });
}
function SidebarTrigger({ className, onClick, ...props }) {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsxs(
    Button$1,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: clsx("size-7", className),
      onClick: (event) => {
        onClick?.(event);
        toggleSidebar();
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx(SvgIcon, { iconId: "PanelLeft" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function SidebarRail({ className, ...props }) {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsx(
    "button",
    {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: toggleSidebar,
      title: "Toggle Sidebar",
      className: clsx(
        "-translate-x-1/2 group-data-[side=left]:-right-4 absolute inset-y-0 z-20 hidden w-4 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=right]:left-0 sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:after:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      ),
      ...props
    }
  );
}
function SidebarInset({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "main",
    {
      "data-slot": "sidebar-inset",
      className: clsx(
        "relative flex w-full flex-1 flex-col bg-background",
        "md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm",
        className
      ),
      ...props
    }
  );
}
function SidebarInput({ className, ...props }) {
  return /* @__PURE__ */ jsx(Input, { "data-slot": "sidebar-input", "data-sidebar": "input", className: clsx("h-8 w-full bg-background shadow-none", className), ...props });
}
function SidebarHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "sidebar-header", "data-sidebar": "header", className: clsx("flex flex-col gap-2 p-2", className), ...props });
}
function SidebarFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "sidebar-footer", "data-sidebar": "footer", className: clsx("flex flex-col gap-2 p-2", className), ...props });
}
function SidebarSeparator({ className, ...props }) {
  return /* @__PURE__ */ jsx(Separator, { "data-slot": "sidebar-separator", "data-sidebar": "separator", className: clsx("mx-2 w-auto bg-sidebar-border", className), ...props });
}
function SidebarContent({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "sidebar-content", "data-sidebar": "content", className: clsx("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", className), ...props });
}
function SidebarGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "sidebar-group", "data-sidebar": "group", className: clsx("relative flex w-full min-w-0 flex-col p-2", className), ...props });
}
function SidebarGroupLabel({ className, asChild = false, ...props }) {
  const Comp = asChild ? Slot.Slot : "div";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      className: clsx(
        "flex h-8 shrink-0 items-center rounded-md px-2 font-medium text-sidebar-foreground/70 text-xs outline-hidden ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      ),
      ...props
    }
  );
}
function SidebarGroupAction({ className, asChild = false, ...props }) {
  const Comp = asChild ? Slot.Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      className: clsx(
        "absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-hidden ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:-inset-2 after:absolute md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
}
function SidebarGroupContent({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "sidebar-group-content", "data-sidebar": "group-content", className: clsx("w-full text-sm", className), ...props });
}
function SidebarMenu({ className, ...props }) {
  return /* @__PURE__ */ jsx("ul", { "data-slot": "sidebar-menu", "data-sidebar": "menu", className: clsx("flex w-full min-w-0 flex-col gap-1", className), ...props });
}
function SidebarMenuItem({ className, ...props }) {
  return /* @__PURE__ */ jsx("li", { "data-slot": "sidebar-menu-item", "data-sidebar": "menu-item", className: clsx("group/menu-item relative", className), ...props });
}
const sidebarMenuButtonVariants = createVariants(
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
function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}) {
  const Comp = asChild ? Slot.Slot : "button";
  const { isMobile, state } = useSidebar();
  const button = /* @__PURE__ */ jsx(Comp, { "data-slot": "sidebar-menu-button", "data-sidebar": "menu-button", "data-size": size, "data-active": isActive, className: clsx(sidebarMenuButtonVariants({ variant, size }), className), ...props });
  if (!tooltip) {
    return button;
  }
  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip
    };
  }
  return /* @__PURE__ */ jsxs(Tooltip$1, { children: [
    /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: button }),
    /* @__PURE__ */ jsx(TooltipContent, { side: "right", align: "center", hidden: state !== "collapsed" || isMobile, ...tooltip })
  ] });
}
function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}) {
  const Comp = asChild ? Slot.Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      className: clsx(
        "absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-hidden ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:-inset-2 after:absolute md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className
      ),
      ...props
    }
  );
}
function SidebarMenuBadge({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      className: clsx(
        "pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 font-medium text-sidebar-foreground text-xs tabular-nums",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
}
function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}) {
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);
  return /* @__PURE__ */ jsxs("div", { "data-slot": "sidebar-menu-skeleton", "data-sidebar": "menu-skeleton", className: clsx("flex h-8 items-center gap-2 rounded-md px-2", className), ...props, children: [
    showIcon && /* @__PURE__ */ jsx(Skeleton, { className: "size-4 rounded-md", "data-sidebar": "menu-skeleton-icon" }),
    /* @__PURE__ */ jsx(
      Skeleton,
      {
        className: "h-4 max-w-(--skeleton-width) flex-1",
        "data-sidebar": "menu-skeleton-text",
        style: {
          "--skeleton-width": width
        }
      }
    )
  ] });
}
function SidebarMenuSub({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "ul",
    {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-sub",
      className: clsx("mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-sidebar-border border-l px-2.5 py-0.5", "group-data-[collapsible=icon]:hidden", className),
      ...props
    }
  );
}
function SidebarMenuSubItem({ className, ...props }) {
  return /* @__PURE__ */ jsx("li", { "data-slot": "sidebar-menu-sub-item", "data-sidebar": "menu-sub-item", className: clsx("group/menu-sub-item relative", className), ...props });
}
function SidebarMenuSubButton({
  asChild = false,
  size = "md",
  isActive = false,
  className,
  ...props
}) {
  const Comp = asChild ? Slot.Slot : "a";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      "data-size": size,
      "data-active": isActive,
      className: clsx(
        "-translate-x-px flex h-7 min-w-0 items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-hidden ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
}
const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme$1();
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      theme,
      className: "toaster group",
      icons: {
        success: /* @__PURE__ */ jsx(SvgIcon, { iconId: "CircleCheck", className: "size-4" }),
        info: /* @__PURE__ */ jsx(SvgIcon, { iconId: "Info", className: "size-4" }),
        warning: /* @__PURE__ */ jsx(SvgIcon, { iconId: "CircleAlert", className: "size-4" }),
        error: /* @__PURE__ */ jsx(SvgIcon, { iconId: "CircleAlert", className: "size-4" }),
        loading: /* @__PURE__ */ jsx(SvgIcon, { iconId: "Loader", className: "size-4 animate-spin" })
      },
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
        "--border-radius": "var(--radius)"
      },
      ...props
    }
  );
};
const DataPagination = Object.assign(DataPagination$1, {
  RecordCountDisplay,
  PaginationControls,
  RowsPerPageSelector
});
const InputOtp = Object.assign(InputOtp$1, {
  Group: InputOtpGroup,
  Slot: InputOtpSlot,
  HiddenInput: InputOtpHiddenInput
});
const Accordion = Object.assign(Accordion$1, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent
});
const AlertDialog = Object.assign(AlertDialog$1, {
  Portal: AlertDialogPortal,
  Overlay: AlertDialogOverlay,
  Trigger: AlertDialogTrigger,
  Content: AlertDialogContent,
  Header: AlertDialogHeader,
  Footer: AlertDialogFooter,
  Title: AlertDialogTitle,
  Description: AlertDialogDescription,
  Action: AlertDialogAction,
  Cancel: AlertDialogCancel
});
const Alert = Object.assign(Alert$1, {
  Title: AlertTitle,
  Description: AlertDescription
});
const Avatar = Object.assign(Avatar$1, {
  Image: AvatarImage,
  Fallback: AvatarFallback
});
const Badge = Object.assign(Badge$1, {
  Variants: badgeVariants
});
const Breadcrumb = Object.assign(Breadcrumb$1, {
  List: BreadcrumbList,
  Item: BreadcrumbItem,
  Link: BreadcrumbLink,
  Page: BreadcrumbPage,
  Separator: BreadcrumbSeparator,
  Ellipsis: BreadcrumbEllipsis
});
const ButtonGroup = Object.assign(ButtonGroup$1, {
  Separator: ButtonGroupSeparator,
  Text: ButtonGroupText,
  ButtonGroupVariants: buttonGroupVariants
});
const Button = Object.assign(Button$1, {
  Variants: buttonVariants
});
const Card = Object.assign(Card$1, {
  Header: CardHeader,
  Footer: CardFooter,
  Title: CardTitle,
  Action: CardAction,
  Description: CardDescription,
  Content: CardContent
});
const Collapsible = Object.assign(Collapsible$1, {
  Trigger: CollapsibleTrigger,
  Content: CollapsibleContent
});
const Command = Object.assign(Command$1, {
  Dialog: CommandDialog,
  Input: CommandInput,
  List: CommandList,
  Empty: CommandEmpty,
  Group: CommandGroup,
  Item: CommandItem,
  Shortcut: CommandShortcut,
  Separator: CommandSeparator
});
const ContextMenu = Object.assign(ContextMenu$1, {
  Trigger: ContextMenuTrigger,
  Content: ContextMenuContent,
  Item: ContextMenuItem,
  CheckboxItem: ContextMenuCheckboxItem,
  RadioItem: ContextMenuRadioItem,
  Label: ContextMenuLabel,
  Separator: ContextMenuSeparator,
  Shortcut: ContextMenuShortcut,
  Group: ContextMenuGroup,
  Portal: ContextMenuPortal,
  Sub: ContextMenuSub,
  SubContent: ContextMenuSubContent,
  SubTrigger: ContextMenuSubTrigger,
  RadioGroup: ContextMenuRadioGroup
});
const Dialog = Object.assign(Dialog$1, {
  Close: DialogClose,
  Content: DialogContent,
  Description: DialogDescription,
  Footer: DialogFooter,
  Header: DialogHeader,
  Overlay: DialogOverlay,
  Portal: DialogPortal,
  Title: DialogTitle,
  Trigger: DialogTrigger
});
const DropdownMenu = Object.assign(DropdownMenu$1, {
  Portal: DropdownMenuPortal,
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Group: DropdownMenuGroup,
  Label: DropdownMenuLabel,
  Item: DropdownMenuItem,
  CheckboxItem: DropdownMenuCheckboxItem,
  RadioGroup: DropdownMenuRadioGroup,
  RadioItem: DropdownMenuRadioItem,
  Separator: DropdownMenuSeparator,
  Shortcut: DropdownMenuShortcut,
  Sub: DropdownMenuSub,
  SubTrigger: DropdownMenuSubTrigger,
  SubContent: DropdownMenuSubContent
});
const Empty = Object.assign(Empty$1, {
  Header: EmptyHeader,
  Title: EmptyTitle,
  Description: EmptyDescription,
  Content: EmptyContent,
  Media: EmptyMedia
});
const Field = Object.assign(Field$1, {
  Label: FieldLabel,
  Description: FieldDescription,
  Error: FieldError,
  Group: FieldGroup,
  Legend: FieldLegend,
  Separator: FieldSeparator,
  Set: FieldSet,
  Content: FieldContent,
  Title: FieldTitle
});
const Form = Object.assign(Form$1, {
  Item: FormItem,
  Label: FormLabel,
  Control: FormControl,
  Description: FormDescription,
  Message: FormMessage,
  Field: FormField
});
const HoverCard = Object.assign(HoverCard$1, {
  Trigger: HoverCardTrigger,
  Content: HoverCardContent
});
const InputGroup = Object.assign(InputGroup$1, {
  Addon: InputGroupAddon,
  Button: InputGroupButton,
  Text: InputGroupText,
  Input: InputGroupInput,
  Textarea: InputGroupTextarea
});
const Item = Object.assign(Item$1, {
  Media: ItemMedia,
  Content: ItemContent,
  Actions: ItemActions,
  Group: ItemGroup,
  Separator: ItemSeparator,
  Title: ItemTitle,
  Description: ItemDescription,
  Header: ItemHeader,
  Footer: ItemFooter
});
const Kbd = Object.assign(Kbd$1, {
  Group: KbdGroup
});
const Menubar = Object.assign(Menubar$1, {
  Portal: MenubarPortal,
  Menu: MenubarMenu,
  Trigger: MenubarTrigger,
  Content: MenubarContent,
  Group: MenubarGroup,
  Separator: MenubarSeparator,
  Label: MenubarLabel,
  Item: MenubarItem,
  Shortcut: MenubarShortcut,
  CheckboxItem: MenubarCheckboxItem,
  RadioGroup: MenubarRadioGroup,
  RadioItem: MenubarRadioItem,
  Sub: MenubarSub,
  SubTrigger: MenubarSubTrigger,
  SubContent: MenubarSubContent
});
const NativeSelect = Object.assign(NativeSelect$1, {
  OptGroup: NativeSelectOptGroup,
  Option: NativeSelectOption
});
const NavigationMenu = Object.assign(NavigationMenu$1, {
  List: NavigationMenuList,
  Item: NavigationMenuItem,
  Content: NavigationMenuContent,
  Trigger: NavigationMenuTrigger,
  Link: NavigationMenuLink,
  Indicator: NavigationMenuIndicator,
  Viewport: NavigationMenuViewport,
  NavigationMenuTriggerStyle: navigationMenuTriggerStyle
});
const Pagination = Object.assign(Pagination$1, {
  Content: PaginationContent,
  Link: PaginationLink,
  Item: PaginationItem,
  Previous: PaginationPrevious,
  Next: PaginationNext,
  Ellipsis: PaginationEllipsis
});
const Popover = Object.assign(Popover$1, {
  Trigger: PopoverTrigger,
  Content: PopoverContent,
  Anchor: PopoverAnchor
});
const RadioGroup = Object.assign(RadioGroup$1, {
  Item: RadioGroupItem
});
const ScrollArea = Object.assign(ScrollArea$1, {
  ScrollBar
});
const Select = Object.assign(Select$1, {
  Content: SelectContent,
  Group: SelectGroup,
  Item: SelectItem,
  Label: SelectLabel,
  ScrollDownButton: SelectScrollDownButton,
  ScrollUpButton: SelectScrollUpButton,
  Separator: SelectSeparator,
  Trigger: SelectTrigger,
  Value: SelectValue
});
const Sheet = Object.assign(Sheet$1, {
  Trigger: SheetTrigger,
  Close: SheetClose,
  Content: SheetContent,
  Header: SheetHeader,
  Footer: SheetFooter,
  Title: SheetTitle,
  Description: SheetDescription
});
const Sidebar = Object.assign(Sidebar$1, {
  Content: SidebarContent,
  Footer: SidebarFooter,
  Group: SidebarGroup,
  GroupAction: SidebarGroupAction,
  GroupContent: SidebarGroupContent,
  GroupLabel: SidebarGroupLabel,
  Header: SidebarHeader,
  Input: SidebarInput,
  Inset: SidebarInset,
  Menu: SidebarMenu,
  MenuAction: SidebarMenuAction,
  MenuBadge: SidebarMenuBadge,
  MenuButton: SidebarMenuButton,
  MenuItem: SidebarMenuItem,
  MenuSkeleton: SidebarMenuSkeleton,
  MenuSub: SidebarMenuSub,
  MenuSubButton: SidebarMenuSubButton,
  MenuSubItem: SidebarMenuSubItem,
  Provider: SidebarProvider,
  Rail: SidebarRail,
  Separator: SidebarSeparator,
  Trigger: SidebarTrigger
});
const Table = Object.assign(Table$1, {
  Header: TableHeader,
  Body: TableBody,
  Footer: TableFooter,
  Head: TableHead,
  Row: TableRow,
  Cell: TableCell,
  Caption: TableCaption
});
const Tabs = Object.assign(Tabs$1, {
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent
});
const ToggleGroup = Object.assign(ToggleGroup$1, {
  Item: ToggleGroupItem
});
const Toggle = Object.assign(Toggle$1, {
  Variants: toggleVariants
});
const Tooltip = Object.assign(Tooltip$1, {
  Trigger: TooltipTrigger,
  Content: TooltipContent,
  Provider: TooltipProvider
});
export {
  Accordion,
  Alert,
  AlertDialog,
  AspectRatio,
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  ButtonGroup,
  Card,
  Checkbox,
  Collapsible,
  Command,
  ComponentExamples,
  ContextMenu,
  DataPagination,
  Dialog,
  DropdownMenu,
  Empty,
  Field,
  Form,
  HoverCard,
  Input,
  InputGroup,
  InputOtp,
  Item,
  Kbd,
  Label,
  Link,
  Menubar,
  NativeSelect,
  NavigationMenu,
  Pagination,
  Popover,
  Progress,
  RadioGroup,
  ScrollArea,
  Select,
  Separator,
  Sheet,
  Sidebar,
  Skeleton,
  Slider,
  Spinner,
  SvgIcon,
  Switch,
  Table,
  Tabs,
  Textarea,
  Toaster,
  Toggle,
  ToggleGroup,
  Tooltip,
  createVariants,
  iconNames,
  useFormField,
  useSidebar
};
//# sourceMappingURL=index.js.map
