// src/images/SpriteIcon.tsx
import { jsx } from "react/jsx-runtime";
function SpriteIcon({ url, id, ...props }) {
  return /* @__PURE__ */ jsx("svg", {
    ...props,
    children: id ? /* @__PURE__ */ jsx("use", {
      href: `${url}#${id}`
    }) : /* @__PURE__ */ jsx("use", {
      href: `${url}`
    })
  });
}

// src/impetus/LoadingBar.tsx
import clsx from "clsx";
import { memo } from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var LoadingBar = memo(({ className }) => /* @__PURE__ */ jsx2("div", {
  className: clsx("loading-bar", className)
}));
// src/impetus/NavMenu.tsx
import clsx5 from "clsx";
import { createContext, useState } from "react";
import { useLocation } from "react-router";

// src/shadcn-ui/components/button.tsx
import { cva } from "class-variance-authority";
import clsx2 from "clsx";
import { Slot as SlotPrimitive } from "radix-ui";
import { jsx as jsx3 } from "react/jsx-runtime";
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
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
});
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? SlotPrimitive.Slot : "button";
  return /* @__PURE__ */ jsx3(Comp, {
    "data-slot": "button",
    className: clsx2(buttonVariants({ variant, size, className })),
    ...props
  });
}

// src/shadcn-ui/components/menubar.tsx
import clsx3 from "clsx";
import { Menubar as MenubarPrimitive } from "radix-ui";
import { jsx as jsx4, jsxs } from "react/jsx-runtime";
function Menubar({ className, ...props }) {
  return /* @__PURE__ */ jsx4(MenubarPrimitive.Root, {
    "data-slot": "menubar",
    className: clsx3("flex h-9 items-center gap-1 rounded-md border bg-background p-1 shadow-xs", className),
    ...props
  });
}
function MenubarMenu({ ...props }) {
  return /* @__PURE__ */ jsx4(MenubarPrimitive.Menu, {
    "data-slot": "menubar-menu",
    ...props
  });
}
function MenubarPortal({ ...props }) {
  return /* @__PURE__ */ jsx4(MenubarPrimitive.Portal, {
    "data-slot": "menubar-portal",
    ...props
  });
}
function MenubarRadioGroup({ ...props }) {
  return /* @__PURE__ */ jsx4(MenubarPrimitive.RadioGroup, {
    "data-slot": "menubar-radio-group",
    ...props
  });
}
function MenubarTrigger({ className, ...props }) {
  return /* @__PURE__ */ jsx4(MenubarPrimitive.Trigger, {
    "data-slot": "menubar-trigger",
    className: clsx3("flex select-none items-center rounded-sm px-2 py-1 font-medium text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground", className),
    ...props
  });
}
function MenubarContent({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }) {
  return /* @__PURE__ */ jsx4(MenubarPortal, {
    children: /* @__PURE__ */ jsx4(MenubarPrimitive.Content, {
      "data-slot": "menubar-content",
      align,
      alignOffset,
      sideOffset,
      className: clsx3("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in", className),
      ...props
    })
  });
}
function MenubarItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx4(MenubarPrimitive.Item, {
    "data-slot": "menubar-item",
    "data-inset": inset,
    "data-variant": variant,
    className: clsx3("data-[variant=destructive]:*:[svg]:!text-destructive relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[disabled]:opacity-50 data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props
  });
}
function MenubarCheckboxItem({ className, children, checked, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsxs(MenubarPrimitive.CheckboxItem, {
    "data-slot": "menubar-checkbox-item",
    className: clsx3("relative flex cursor-default select-none items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx4("span", {
        className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
        children: /* @__PURE__ */ jsx4(MenubarPrimitive.ItemIndicator, {
          children: /* @__PURE__ */ jsx4(SpriteIcon, {
            id: "Check",
            className: "size-4",
            url: spriteUrl
          })
        })
      }),
      children
    ]
  });
}
function MenubarRadioItem({ className, children, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsxs(MenubarPrimitive.RadioItem, {
    "data-slot": "menubar-radio-item",
    className: clsx3("relative flex cursor-default select-none items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx4("span", {
        className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
        children: /* @__PURE__ */ jsx4(MenubarPrimitive.ItemIndicator, {
          children: /* @__PURE__ */ jsx4(SpriteIcon, {
            id: "Circle",
            className: "size-2 fill-current",
            url: spriteUrl
          })
        })
      }),
      children
    ]
  });
}
function MenubarSeparator({ className, ...props }) {
  return /* @__PURE__ */ jsx4(MenubarPrimitive.Separator, {
    "data-slot": "menubar-separator",
    className: clsx3("-mx-1 my-1 h-px bg-border", className),
    ...props
  });
}
function MenubarShortcut({ className, ...props }) {
  return /* @__PURE__ */ jsx4("span", {
    "data-slot": "menubar-shortcut",
    className: clsx3("ml-auto text-muted-foreground text-xs tracking-widest", className),
    ...props
  });
}
function MenubarSub({ ...props }) {
  return /* @__PURE__ */ jsx4(MenubarPrimitive.Sub, {
    "data-slot": "menubar-sub",
    ...props
  });
}
function MenubarSubTrigger({ className, inset, children, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsxs(MenubarPrimitive.SubTrigger, {
    "data-slot": "menubar-sub-trigger",
    "data-inset": inset,
    className: clsx3("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[inset]:pl-8 data-[state=open]:text-accent-foreground", className),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx4(SpriteIcon, {
        id: "ChevronRight",
        className: "ml-auto h-4 w-4",
        url: spriteUrl
      })
    ]
  });
}
function MenubarSubContent({ className, ...props }) {
  return /* @__PURE__ */ jsx4(MenubarPrimitive.SubContent, {
    "data-slot": "menubar-sub-content",
    className: clsx3("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=closed]:animate-out data-[state=open]:animate-in", className),
    ...props
  });
}

// src/shadcn-ui/components/sheet.tsx
import clsx4 from "clsx";
import { Dialog as SheetPrimitive } from "radix-ui";
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
function Sheet({ ...props }) {
  return /* @__PURE__ */ jsx5(SheetPrimitive.Root, {
    "data-slot": "sheet",
    ...props
  });
}
function SheetTrigger({ ...props }) {
  return /* @__PURE__ */ jsx5(SheetPrimitive.Trigger, {
    "data-slot": "sheet-trigger",
    ...props
  });
}
function SheetClose({ ...props }) {
  return /* @__PURE__ */ jsx5(SheetPrimitive.Close, {
    "data-slot": "sheet-close",
    ...props
  });
}
function SheetPortal({ ...props }) {
  return /* @__PURE__ */ jsx5(SheetPrimitive.Portal, {
    "data-slot": "sheet-portal",
    ...props
  });
}
function SheetOverlay({ className, ...props }) {
  return /* @__PURE__ */ jsx5(SheetPrimitive.Overlay, {
    "data-slot": "sheet-overlay",
    className: clsx4("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=open]:animate-in", className),
    ...props
  });
}
function SheetContent({ className, children, side = "right", spriteUrl, ...props }) {
  return /* @__PURE__ */ jsxs2(SheetPortal, {
    children: [
      /* @__PURE__ */ jsx5(SheetOverlay, {}),
      /* @__PURE__ */ jsxs2(SheetPrimitive.Content, {
        "data-slot": "sheet-content",
        className: clsx4("fixed z-50 flex flex-col gap-4 bg-background shadow-lg transition ease-in-out data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:duration-300 data-[state=open]:duration-500", side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm", side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm", side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b", side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t", className),
        ...props,
        children: [
          children,
          /* @__PURE__ */ jsxs2(SheetPrimitive.Close, {
            className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
            children: [
              /* @__PURE__ */ jsx5(SpriteIcon, {
                id: "X",
                url: spriteUrl,
                className: "size-4"
              }),
              /* @__PURE__ */ jsx5("span", {
                className: "sr-only",
                children: "Close"
              })
            ]
          })
        ]
      })
    ]
  });
}
function SheetHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx5("div", {
    "data-slot": "sheet-header",
    className: clsx4("flex flex-col gap-1.5 p-4", className),
    ...props
  });
}
function SheetFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx5("div", {
    "data-slot": "sheet-footer",
    className: clsx4("mt-auto flex flex-col gap-2 p-4", className),
    ...props
  });
}
function SheetTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx5(SheetPrimitive.Title, {
    "data-slot": "sheet-title",
    className: clsx4("font-semibold text-foreground", className),
    ...props
  });
}
function SheetDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx5(SheetPrimitive.Description, {
    "data-slot": "sheet-description",
    className: clsx4("text-muted-foreground text-sm", className),
    ...props
  });
}

// src/shadcn-ui/custom/link.tsx
import React from "react";
import { Link as RouterLink } from "react-router";
import { jsx as jsx6 } from "react/jsx-runtime";
var Link = React.forwardRef(function Link2(props, ref) {
  return /* @__PURE__ */ jsx6(RouterLink, {
    ...props,
    to: props.href,
    ref
  });
});

// src/impetus/NavMenu.tsx
import { jsx as jsx7, jsxs as jsxs3, Fragment } from "react/jsx-runtime";
var MenubarContext = createContext(null);
// src/impetus/Page.tsx
import clsx6 from "clsx";
import { jsx as jsx8 } from "react/jsx-runtime";
// src/impetus/ThemeProvider.tsx
import { ThemeProvider as NextThemeProvider } from "next-themes";
// src/impetus/ThemeSwitch.tsx
import clsx7 from "clsx";
import { useEffect, useState as useState2 } from "react";

// src/impetus/useTheme.tsx
import { useTheme as useNextTheme } from "next-themes";
var useTheme = useNextTheme;

// src/impetus/ThemeSwitch.tsx
import { jsx as jsx9 } from "react/jsx-runtime";
var THEME_OPTIONS = { theme: { light: "light", dark: "dark" } };
var ThemeSwitchButton = ({ themeContext, theme, spriteUrl, className, classTheme }) => {
  const [mounted, setMounted] = useState2(false);
  useEffect(() => setMounted(true), []);
  const resolvedTheme = themeContext?.resolvedTheme;
  const setTheme = themeContext?.setTheme;
  if (!mounted)
    return null;
  return /* @__PURE__ */ jsx9("button", {
    type: "button",
    className: clsx7("size-5 hover:animate-rotate", classTheme),
    onClick: (e) => {
      if (!setTheme)
        return;
      setTheme(resolvedTheme === theme.theme.dark ? theme.theme.light : theme.theme.dark);
      e.preventDefault();
      e.stopPropagation();
    },
    "aria-label": "theme switch",
    children: resolvedTheme === theme.theme.dark ? /* @__PURE__ */ jsx9(SpriteIcon, {
      url: spriteUrl,
      id: "Moon",
      className: clsx7("size-5", className)
    }) : /* @__PURE__ */ jsx9(SpriteIcon, {
      url: spriteUrl,
      id: "Sun",
      className: clsx7("size-5", className)
    })
  });
};
var ThemeSwitch = ({ theme = THEME_OPTIONS, spriteUrl, className, classTheme, children }) => {
  let themeContext = null;
  try {
    const nextThemeContext = useTheme();
    themeContext = nextThemeContext ? { resolvedTheme: nextThemeContext.resolvedTheme, setTheme: nextThemeContext.setTheme } : null;
  } catch {
    themeContext = null;
  }
  if (children) {
    return children({ themeContext, theme, spriteUrl, className, classTheme });
  }
  return /* @__PURE__ */ jsx9(ThemeSwitchButton, {
    themeContext,
    theme,
    spriteUrl,
    className,
    classTheme
  });
};
// src/shadcn-ui/@types/lucide-sprites.ts
var iconNames = [
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

// src/shadcn-ui/components/tooltip.tsx
import clsx8 from "clsx";
import { Tooltip as TooltipPrimitive } from "radix-ui";
import { jsx as jsx10, jsxs as jsxs4 } from "react/jsx-runtime";
function TooltipProvider({ delayDuration = 0, ...props }) {
  return /* @__PURE__ */ jsx10(TooltipPrimitive.Provider, {
    "data-slot": "tooltip-provider",
    delayDuration,
    ...props
  });
}
function Tooltip({ ...props }) {
  return /* @__PURE__ */ jsx10(TooltipProvider, {
    children: /* @__PURE__ */ jsx10(TooltipPrimitive.Root, {
      "data-slot": "tooltip",
      ...props
    })
  });
}
function TooltipTrigger({ ...props }) {
  return /* @__PURE__ */ jsx10(TooltipPrimitive.Trigger, {
    "data-slot": "tooltip-trigger",
    ...props
  });
}
function TooltipContent({ className, sideOffset = 0, children, ...props }) {
  return /* @__PURE__ */ jsx10(TooltipPrimitive.Portal, {
    children: /* @__PURE__ */ jsxs4(TooltipPrimitive.Content, {
      "data-slot": "tooltip-content",
      sideOffset,
      className: clsx8("fade-in-0 zoom-in-95 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) animate-in text-balance rounded-md bg-primary px-3 py-1.5 text-primary-foreground text-xs data-[state=closed]:animate-out", className),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx10(TooltipPrimitive.Arrow, {
          className: "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-primary fill-primary"
        })
      ]
    })
  });
}

// src/shadcn-ui/components/accordion.tsx
import clsx9 from "clsx";
import { Accordion as AccordionPrimitive } from "radix-ui";
import { jsx as jsx11, jsxs as jsxs5 } from "react/jsx-runtime";
function Accordion({ ...props }) {
  return /* @__PURE__ */ jsx11(AccordionPrimitive.Root, {
    "data-slot": "accordion",
    ...props
  });
}
function AccordionItem({ className, ...props }) {
  return /* @__PURE__ */ jsx11(AccordionPrimitive.Item, {
    "data-slot": "accordion-item",
    className: clsx9("border-b last:border-b-0", className),
    ...props
  });
}
function AccordionTrigger({ className, children, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsx11(AccordionPrimitive.Header, {
    className: "flex",
    children: /* @__PURE__ */ jsxs5(AccordionPrimitive.Trigger, {
      "data-slot": "accordion-trigger",
      className: clsx9("flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left font-medium text-sm outline-none transition-all hover:underline focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180", className),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx11(SpriteIcon, {
          id: "ChevronDown",
          url: spriteUrl,
          className: "pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200"
        })
      ]
    })
  });
}
function AccordionContent({ className, children, ...props }) {
  return /* @__PURE__ */ jsx11(AccordionPrimitive.Content, {
    "data-slot": "accordion-content",
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx11("div", {
      className: clsx9("pt-0 pb-4", className),
      children
    })
  });
}

// src/shadcn-ui/examples/accordion-demo.tsx
import { jsx as jsx12, jsxs as jsxs6 } from "react/jsx-runtime";
function AccordionDemo({ spriteUrl }) {
  return /* @__PURE__ */ jsxs6(Accordion, {
    type: "single",
    collapsible: true,
    className: "w-full",
    defaultValue: "item-1",
    children: [
      /* @__PURE__ */ jsxs6(AccordionItem, {
        value: "item-1",
        children: [
          /* @__PURE__ */ jsx12(AccordionTrigger, {
            spriteUrl,
            children: "Product Information"
          }),
          /* @__PURE__ */ jsxs6(AccordionContent, {
            className: "flex flex-col gap-4 text-balance",
            children: [
              /* @__PURE__ */ jsx12("p", {
                children: "Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability."
              }),
              /* @__PURE__ */ jsx12("p", {
                children: "Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and experts."
              })
            ]
          })
        ]
      }),
      /* @__PURE__ */ jsxs6(AccordionItem, {
        value: "item-2",
        children: [
          /* @__PURE__ */ jsx12(AccordionTrigger, {
            spriteUrl,
            children: "Shipping Details"
          }),
          /* @__PURE__ */ jsxs6(AccordionContent, {
            className: "flex flex-col gap-4 text-balance",
            children: [
              /* @__PURE__ */ jsx12("p", {
                children: "We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days."
              }),
              /* @__PURE__ */ jsx12("p", {
                children: "All orders are carefully packaged and fully insured. Track your shipment in real-time through our dedicated tracking portal."
              })
            ]
          })
        ]
      }),
      /* @__PURE__ */ jsxs6(AccordionItem, {
        value: "item-3",
        children: [
          /* @__PURE__ */ jsx12(AccordionTrigger, {
            spriteUrl,
            children: "Return Policy"
          }),
          /* @__PURE__ */ jsxs6(AccordionContent, {
            className: "flex flex-col gap-4 text-balance",
            children: [
              /* @__PURE__ */ jsx12("p", {
                children: "We stand behind our products with a comprehensive 30-day return policy. If you're not completely satisfied, simply return the item in its original condition."
              }),
              /* @__PURE__ */ jsx12("p", {
                children: "Our hassle-free return process includes free return shipping and full refunds processed within 48 hours of receiving the returned item."
              })
            ]
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/components/alert.tsx
import { cva as cva2 } from "class-variance-authority";
import clsx10 from "clsx";
import { jsx as jsx13 } from "react/jsx-runtime";
var alertVariants = cva2("relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current", {
  variants: {
    variant: {
      default: "bg-card text-card-foreground",
      destructive: "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
function Alert({ className, variant, ...props }) {
  return /* @__PURE__ */ jsx13("div", {
    "data-slot": "alert",
    role: "alert",
    className: clsx10(alertVariants({ variant }), className),
    ...props
  });
}
function AlertTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx13("div", {
    "data-slot": "alert-title",
    className: clsx10("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", className),
    ...props
  });
}
function AlertDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx13("div", {
    "data-slot": "alert-description",
    className: clsx10("col-start-2 grid justify-items-start gap-1 text-muted-foreground text-sm [&_p]:leading-relaxed", className),
    ...props
  });
}

// src/shadcn-ui/examples/alert-demo.tsx
import { jsx as jsx14, jsxs as jsxs7 } from "react/jsx-runtime";
function AlertDemo({ spriteUrl }) {
  return /* @__PURE__ */ jsxs7("div", {
    className: "grid w-full max-w-xl items-start gap-4",
    children: [
      /* @__PURE__ */ jsxs7(Alert, {
        children: [
          /* @__PURE__ */ jsx14(SpriteIcon, {
            id: "CircleCheck",
            url: spriteUrl
          }),
          /* @__PURE__ */ jsx14(AlertTitle, {
            children: "Success! Your changes have been saved"
          }),
          /* @__PURE__ */ jsx14(AlertDescription, {
            children: "This is an alert with icon, title and description."
          })
        ]
      }),
      /* @__PURE__ */ jsxs7(Alert, {
        children: [
          /* @__PURE__ */ jsx14(SpriteIcon, {
            id: "Calendar",
            url: spriteUrl
          }),
          /* @__PURE__ */ jsx14(AlertTitle, {
            children: "This Alert has a title and an icon. No description."
          })
        ]
      }),
      /* @__PURE__ */ jsxs7(Alert, {
        variant: "destructive",
        children: [
          /* @__PURE__ */ jsx14(SpriteIcon, {
            id: "CircleAlert",
            url: spriteUrl
          }),
          /* @__PURE__ */ jsx14(AlertTitle, {
            children: "Unable to process your payment."
          }),
          /* @__PURE__ */ jsxs7(AlertDescription, {
            children: [
              /* @__PURE__ */ jsx14("p", {
                children: "Please verify your billing information and try again."
              }),
              /* @__PURE__ */ jsxs7("ul", {
                className: "list-inside list-disc text-sm",
                children: [
                  /* @__PURE__ */ jsx14("li", {
                    children: "Check your card details"
                  }),
                  /* @__PURE__ */ jsx14("li", {
                    children: "Ensure sufficient funds"
                  }),
                  /* @__PURE__ */ jsx14("li", {
                    children: "Verify billing address"
                  })
                ]
              })
            ]
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/examples/alert-destructive.tsx
import { jsx as jsx15, jsxs as jsxs8 } from "react/jsx-runtime";
function AlertDestructive({ spriteUrl }) {
  return /* @__PURE__ */ jsxs8(Alert, {
    variant: "destructive",
    children: [
      /* @__PURE__ */ jsx15(SpriteIcon, {
        id: "CircleAlert",
        url: spriteUrl
      }),
      /* @__PURE__ */ jsx15(AlertTitle, {
        children: "Error"
      }),
      /* @__PURE__ */ jsx15(AlertDescription, {
        children: "Your session has expired. Please log in again."
      })
    ]
  });
}

// src/shadcn-ui/components/alert-dialog.tsx
import clsx11 from "clsx";
import { AlertDialog as AlertDialogPrimitive } from "radix-ui";
import { jsx as jsx16, jsxs as jsxs9 } from "react/jsx-runtime";
function AlertDialog({ ...props }) {
  return /* @__PURE__ */ jsx16(AlertDialogPrimitive.Root, {
    "data-slot": "alert-dialog",
    ...props
  });
}
function AlertDialogTrigger({ ...props }) {
  return /* @__PURE__ */ jsx16(AlertDialogPrimitive.Trigger, {
    "data-slot": "alert-dialog-trigger",
    ...props
  });
}
function AlertDialogPortal({ ...props }) {
  return /* @__PURE__ */ jsx16(AlertDialogPrimitive.Portal, {
    "data-slot": "alert-dialog-portal",
    ...props
  });
}
function AlertDialogOverlay({ className, ...props }) {
  return /* @__PURE__ */ jsx16(AlertDialogPrimitive.Overlay, {
    "data-slot": "alert-dialog-overlay",
    className: clsx11("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=open]:animate-in", className),
    ...props
  });
}
function AlertDialogContent({ className, ...props }) {
  return /* @__PURE__ */ jsxs9(AlertDialogPortal, {
    children: [
      /* @__PURE__ */ jsx16(AlertDialogOverlay, {}),
      /* @__PURE__ */ jsx16(AlertDialogPrimitive.Content, {
        "data-slot": "alert-dialog-content",
        className: clsx11("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 data-[state=closed]:animate-out data-[state=open]:animate-in sm:max-w-lg", className),
        ...props
      })
    ]
  });
}
function AlertDialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx16("div", {
    "data-slot": "alert-dialog-header",
    className: clsx11("flex flex-col gap-2 text-center sm:text-left", className),
    ...props
  });
}
function AlertDialogFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx16("div", {
    "data-slot": "alert-dialog-footer",
    className: clsx11("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
    ...props
  });
}
function AlertDialogTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx16(AlertDialogPrimitive.Title, {
    "data-slot": "alert-dialog-title",
    className: clsx11("font-semibold text-lg", className),
    ...props
  });
}
function AlertDialogDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx16(AlertDialogPrimitive.Description, {
    "data-slot": "alert-dialog-description",
    className: clsx11("text-muted-foreground text-sm", className),
    ...props
  });
}
function AlertDialogAction({ className, ...props }) {
  return /* @__PURE__ */ jsx16(AlertDialogPrimitive.Action, {
    className: clsx11(buttonVariants(), className),
    ...props
  });
}
function AlertDialogCancel({ className, ...props }) {
  return /* @__PURE__ */ jsx16(AlertDialogPrimitive.Cancel, {
    className: clsx11(buttonVariants({ variant: "outline" }), className),
    ...props
  });
}

// src/shadcn-ui/examples/alert-dialog-demo.tsx
import { jsx as jsx17, jsxs as jsxs10 } from "react/jsx-runtime";
function AlertDialogDemo() {
  return /* @__PURE__ */ jsxs10(AlertDialog, {
    children: [
      /* @__PURE__ */ jsx17(AlertDialogTrigger, {
        asChild: true,
        children: /* @__PURE__ */ jsx17(Button, {
          variant: "outline",
          children: "Show Dialog"
        })
      }),
      /* @__PURE__ */ jsxs10(AlertDialogContent, {
        children: [
          /* @__PURE__ */ jsxs10(AlertDialogHeader, {
            children: [
              /* @__PURE__ */ jsx17(AlertDialogTitle, {
                children: "Are you absolutely sure?"
              }),
              /* @__PURE__ */ jsx17(AlertDialogDescription, {
                children: "This action cannot be undone. This will permanently delete your account and remove your data from our servers."
              })
            ]
          }),
          /* @__PURE__ */ jsxs10(AlertDialogFooter, {
            children: [
              /* @__PURE__ */ jsx17(AlertDialogCancel, {
                children: "Cancel"
              }),
              /* @__PURE__ */ jsx17(AlertDialogAction, {
                children: "Continue"
              })
            ]
          })
        ]
      })
    ]
  });
}

// src/images/LazyImage.tsx
import clsx13 from "clsx";
import React2 from "react";
import { Await } from "react-router";

// src/shadcn-ui/custom/spinner.tsx
import clsx12 from "clsx";
import { jsx as jsx18 } from "react/jsx-runtime";
function Spinner({ className, spriteUrl, iconId = "Loader" }) {
  return /* @__PURE__ */ jsx18(SpriteIcon, {
    id: iconId,
    url: spriteUrl,
    className: clsx12(className, "animate-spin")
  });
}

// src/images/LazyImage.tsx
import { jsx as jsx19 } from "react/jsx-runtime";
var createRemoteImagePromise = (src, alt, width, height) => {
  return new Promise((resolve, reject) => {
    const img = new Image;
    img.onload = () => {
      resolve({ src, alt, width: width || img.naturalWidth, height: height || img.naturalHeight, loading: "lazy" });
    };
    img.onerror = () => {
      reject(new Error(`Failed to load image: ${src}`));
    };
    img.src = src;
  });
};
function LazyImage({
  image,
  src,
  alt,
  width,
  height,
  className,
  spriteUrl,
  fallback = spriteUrl ? /* @__PURE__ */ jsx19(Spinner, {
    spriteUrl
  }) : /* @__PURE__ */ jsx19("div", {
    className: "text-slate-500/50",
    children: "Loading..."
  })
}) {
  const imagePromise = image || (src ? createRemoteImagePromise(src, alt || "", width, height) : null);
  if (!imagePromise) {
    return /* @__PURE__ */ jsx19("div", {
      className: "text-slate-500/50",
      children: "Error: No image source provided"
    });
  }
  return /* @__PURE__ */ jsx19(React2.Suspense, {
    fallback,
    children: /* @__PURE__ */ jsx19(TypedAwait, {
      resolve: imagePromise,
      errorElement: spriteUrl ? /* @__PURE__ */ jsx19(Spinner, {
        spriteUrl,
        className: "text-slate-500/50"
      }) : /* @__PURE__ */ jsx19("div", {
        className: "text-slate-500/50",
        children: "Error loading image"
      }),
      children: (imageData) => /* @__PURE__ */ jsx19(ImageElement, {
        ...imageData,
        className: clsx13(imageData.className, className)
      })
    })
  });
}
function TypedAwait({ resolve, children, ...props }) {
  return /* @__PURE__ */ jsx19(Await, {
    resolve,
    ...props,
    children: (data) => children(data)
  });
}
var ImageElement = ({ src, alt, width, height, className, loading = "lazy" }) => {
  return /* @__PURE__ */ jsx19("img", {
    src,
    alt,
    width,
    height,
    className,
    loading,
    decoding: "async"
  });
};

// src/shadcn-ui/components/aspect-ratio.tsx
import { AspectRatio as AspectRatioPrimitive } from "radix-ui";
import { jsx as jsx20 } from "react/jsx-runtime";
function AspectRatio({ ...props }) {
  return /* @__PURE__ */ jsx20(AspectRatioPrimitive.Root, {
    "data-slot": "aspect-ratio",
    ...props
  });
}

// src/shadcn-ui/examples/aspect-ratio-demo.tsx
import { jsx as jsx21 } from "react/jsx-runtime";
function AspectRatioDemo() {
  return /* @__PURE__ */ jsx21(AspectRatio, {
    ratio: 16 / 9,
    className: "rounded-lg bg-muted",
    children: /* @__PURE__ */ jsx21(LazyImage, {
      src: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",
      alt: "Photo by Drew Beamer",
      className: "h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
    })
  });
}

// src/shadcn-ui/components/avatar.tsx
import clsx14 from "clsx";
import { Avatar as AvatarPrimitive } from "radix-ui";
import { jsx as jsx22 } from "react/jsx-runtime";
function Avatar({ className, ...props }) {
  return /* @__PURE__ */ jsx22(AvatarPrimitive.Root, {
    "data-slot": "avatar",
    className: clsx14("relative flex size-8 shrink-0 overflow-hidden rounded-full", className),
    ...props
  });
}
function AvatarImage({ className, ...props }) {
  return /* @__PURE__ */ jsx22(AvatarPrimitive.Image, {
    "data-slot": "avatar-image",
    className: clsx14("aspect-square size-full", className),
    ...props
  });
}
function AvatarFallback({ className, ...props }) {
  return /* @__PURE__ */ jsx22(AvatarPrimitive.Fallback, {
    "data-slot": "avatar-fallback",
    className: clsx14("flex size-full items-center justify-center rounded-full bg-muted", className),
    ...props
  });
}

// src/shadcn-ui/examples/avatar-demo.tsx
import { jsx as jsx23, jsxs as jsxs11 } from "react/jsx-runtime";
function AvatarDemo() {
  return /* @__PURE__ */ jsxs11("div", {
    className: "flex flex-row flex-wrap items-center gap-12",
    children: [
      /* @__PURE__ */ jsxs11(Avatar, {
        children: [
          /* @__PURE__ */ jsx23(AvatarImage, {
            src: "https://github.com/shadcn.png",
            alt: "@shadcn"
          }),
          /* @__PURE__ */ jsx23(AvatarFallback, {
            children: "CN"
          })
        ]
      }),
      /* @__PURE__ */ jsxs11(Avatar, {
        className: "rounded-lg",
        children: [
          /* @__PURE__ */ jsx23(AvatarImage, {
            src: "https://github.com/evilrabbit.png",
            alt: "@evilrabbit"
          }),
          /* @__PURE__ */ jsx23(AvatarFallback, {
            children: "ER"
          })
        ]
      }),
      /* @__PURE__ */ jsxs11("div", {
        className: "-space-x-2 flex *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale",
        children: [
          /* @__PURE__ */ jsxs11(Avatar, {
            children: [
              /* @__PURE__ */ jsx23(AvatarImage, {
                src: "https://github.com/shadcn.png",
                alt: "@shadcn"
              }),
              /* @__PURE__ */ jsx23(AvatarFallback, {
                children: "CN"
              })
            ]
          }),
          /* @__PURE__ */ jsxs11(Avatar, {
            children: [
              /* @__PURE__ */ jsx23(AvatarImage, {
                src: "https://github.com/leerob.png",
                alt: "@leerob"
              }),
              /* @__PURE__ */ jsx23(AvatarFallback, {
                children: "LR"
              })
            ]
          }),
          /* @__PURE__ */ jsxs11(Avatar, {
            children: [
              /* @__PURE__ */ jsx23(AvatarImage, {
                src: "https://github.com/evilrabbit.png",
                alt: "@evilrabbit"
              }),
              /* @__PURE__ */ jsx23(AvatarFallback, {
                children: "ER"
              })
            ]
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/components/badge.tsx
import { cva as cva3 } from "class-variance-authority";
import clsx15 from "clsx";
import { Slot as SlotPrimitive2 } from "radix-ui";
import { jsx as jsx24 } from "react/jsx-runtime";
var badgeVariants = cva3("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
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
});
function Badge({ className, variant, asChild = false, ...props }) {
  const Comp = asChild ? SlotPrimitive2.Slot : "span";
  return /* @__PURE__ */ jsx24(Comp, {
    "data-slot": "badge",
    className: clsx15(badgeVariants({ variant }), className),
    ...props
  });
}

// src/shadcn-ui/examples/badge-demo.tsx
import { jsx as jsx25, jsxs as jsxs12 } from "react/jsx-runtime";
function BadgeDemo({ spriteUrl }) {
  return /* @__PURE__ */ jsxs12("div", {
    className: "flex flex-col items-center gap-2",
    children: [
      /* @__PURE__ */ jsxs12("div", {
        className: "flex w-full flex-wrap gap-2",
        children: [
          /* @__PURE__ */ jsx25(Badge, {
            children: "Badge"
          }),
          /* @__PURE__ */ jsx25(Badge, {
            variant: "secondary",
            children: "Secondary"
          }),
          /* @__PURE__ */ jsx25(Badge, {
            variant: "destructive",
            children: "Destructive"
          }),
          /* @__PURE__ */ jsx25(Badge, {
            variant: "outline",
            children: "Outline"
          })
        ]
      }),
      /* @__PURE__ */ jsxs12("div", {
        className: "flex w-full flex-wrap gap-2",
        children: [
          /* @__PURE__ */ jsxs12(Badge, {
            variant: "secondary",
            className: "bg-blue-500 text-white dark:bg-blue-600",
            children: [
              /* @__PURE__ */ jsx25(SpriteIcon, {
                id: "BadgeCheck",
                url: spriteUrl
              }),
              "Verified"
            ]
          }),
          /* @__PURE__ */ jsx25(Badge, {
            className: "h-5 min-w-5 rounded-full px-1 font-mono tabular-nums",
            children: "8"
          }),
          /* @__PURE__ */ jsx25(Badge, {
            className: "h-5 min-w-5 rounded-full px-1 font-mono tabular-nums",
            variant: "destructive",
            children: "99"
          }),
          /* @__PURE__ */ jsx25(Badge, {
            className: "h-5 min-w-5 rounded-full px-1 font-mono tabular-nums",
            variant: "outline",
            children: "20+"
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/examples/badge-destructive.tsx
import { jsx as jsx26 } from "react/jsx-runtime";
function BadgeDestructive() {
  return /* @__PURE__ */ jsx26(Badge, {
    variant: "destructive",
    children: "Destructive"
  });
}

// src/shadcn-ui/examples/badge-outline.tsx
import { jsx as jsx27 } from "react/jsx-runtime";
function BadgeOutline() {
  return /* @__PURE__ */ jsx27(Badge, {
    variant: "outline",
    children: "Outline"
  });
}

// src/shadcn-ui/examples/badge-secondary.tsx
import { jsx as jsx28 } from "react/jsx-runtime";
function BadgeSecondary() {
  return /* @__PURE__ */ jsx28(Badge, {
    variant: "secondary",
    children: "Secondary"
  });
}

// src/shadcn-ui/components/breadcrumb.tsx
import clsx16 from "clsx";
import { Slot as SlotPrimitive3 } from "radix-ui";
import { jsx as jsx29, jsxs as jsxs13 } from "react/jsx-runtime";
function Breadcrumb({ ...props }) {
  return /* @__PURE__ */ jsx29("nav", {
    "aria-label": "breadcrumb",
    "data-slot": "breadcrumb",
    ...props
  });
}
function BreadcrumbList({ className, ...props }) {
  return /* @__PURE__ */ jsx29("ol", {
    "data-slot": "breadcrumb-list",
    className: clsx16("flex flex-wrap items-center gap-1.5 break-words text-muted-foreground text-sm sm:gap-2.5", className),
    ...props
  });
}
function BreadcrumbItem({ className, ...props }) {
  return /* @__PURE__ */ jsx29("li", {
    "data-slot": "breadcrumb-item",
    className: clsx16("inline-flex items-center gap-1.5", className),
    ...props
  });
}
function BreadcrumbLink({ asChild, className, ...props }) {
  const Comp = asChild ? SlotPrimitive3.Slot : "a";
  return /* @__PURE__ */ jsx29(Comp, {
    "data-slot": "breadcrumb-link",
    className: clsx16("transition-colors hover:text-foreground", className),
    ...props
  });
}
function BreadcrumbPage({ className, ...props }) {
  return /* @__PURE__ */ jsx29("span", {
    "data-slot": "breadcrumb-page",
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: clsx16("font-normal text-foreground", className),
    ...props
  });
}
function BreadcrumbSeparator({ children, className, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsx29("li", {
    "data-slot": "breadcrumb-separator",
    role: "presentation",
    "aria-hidden": "true",
    className: clsx16("[&>svg]:size-3.5", className),
    ...props,
    children: children ?? /* @__PURE__ */ jsx29(SpriteIcon, {
      id: "ChevronRight",
      url: spriteUrl
    })
  });
}
function BreadcrumbEllipsis({ className, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsxs13("span", {
    "data-slot": "breadcrumb-ellipsis",
    role: "presentation",
    "aria-hidden": "true",
    className: clsx16("flex size-9 items-center justify-center", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx29(SpriteIcon, {
        id: "Ellipsis",
        className: "size-4",
        url: spriteUrl
      }),
      /* @__PURE__ */ jsx29("span", {
        className: "sr-only",
        children: "More"
      })
    ]
  });
}

// src/shadcn-ui/components/dropdown-menu.tsx
import clsx17 from "clsx";
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui";
import { jsx as jsx30, jsxs as jsxs14 } from "react/jsx-runtime";
function DropdownMenu({ ...props }) {
  return /* @__PURE__ */ jsx30(DropdownMenuPrimitive.Root, {
    "data-slot": "dropdown-menu",
    ...props
  });
}
function DropdownMenuPortal({ ...props }) {
  return /* @__PURE__ */ jsx30(DropdownMenuPrimitive.Portal, {
    "data-slot": "dropdown-menu-portal",
    ...props
  });
}
function DropdownMenuTrigger({ ...props }) {
  return /* @__PURE__ */ jsx30(DropdownMenuPrimitive.Trigger, {
    "data-slot": "dropdown-menu-trigger",
    ...props
  });
}
function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
  return /* @__PURE__ */ jsx30(DropdownMenuPrimitive.Portal, {
    children: /* @__PURE__ */ jsx30(DropdownMenuPrimitive.Content, {
      "data-slot": "dropdown-menu-content",
      sideOffset,
      className: clsx17("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=closed]:animate-out data-[state=open]:animate-in", className),
      ...props
    })
  });
}
function DropdownMenuGroup({ ...props }) {
  return /* @__PURE__ */ jsx30(DropdownMenuPrimitive.Group, {
    "data-slot": "dropdown-menu-group",
    ...props
  });
}
function DropdownMenuItem({ className, inset, variant = "default", ...props }) {
  return /* @__PURE__ */ jsx30(DropdownMenuPrimitive.Item, {
    "data-slot": "dropdown-menu-item",
    "data-inset": inset,
    "data-variant": variant,
    className: clsx17("data-[variant=destructive]:*:[svg]:!text-destructive relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[disabled]:opacity-50 data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props
  });
}
function DropdownMenuCheckboxItem({ className, children, checked, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsxs14(DropdownMenuPrimitive.CheckboxItem, {
    "data-slot": "dropdown-menu-checkbox-item",
    className: clsx17("relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx30("span", {
        className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
        children: /* @__PURE__ */ jsx30(DropdownMenuPrimitive.ItemIndicator, {
          children: /* @__PURE__ */ jsx30(SpriteIcon, {
            id: "Check",
            className: "size-4",
            url: spriteUrl
          })
        })
      }),
      children
    ]
  });
}
function DropdownMenuRadioGroup({ ...props }) {
  return /* @__PURE__ */ jsx30(DropdownMenuPrimitive.RadioGroup, {
    "data-slot": "dropdown-menu-radio-group",
    ...props
  });
}
function DropdownMenuRadioItem({ className, children, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsxs14(DropdownMenuPrimitive.RadioItem, {
    "data-slot": "dropdown-menu-radio-item",
    className: clsx17("relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx30("span", {
        className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
        children: /* @__PURE__ */ jsx30(DropdownMenuPrimitive.ItemIndicator, {
          children: /* @__PURE__ */ jsx30(SpriteIcon, {
            id: "Circle",
            className: "size-2 fill-current",
            url: spriteUrl
          })
        })
      }),
      children
    ]
  });
}
function DropdownMenuLabel({ className, inset, ...props }) {
  return /* @__PURE__ */ jsx30(DropdownMenuPrimitive.Label, {
    "data-slot": "dropdown-menu-label",
    "data-inset": inset,
    className: clsx17("px-2 py-1.5 font-medium text-sm data-[inset]:pl-8", className),
    ...props
  });
}
function DropdownMenuSeparator({ className, ...props }) {
  return /* @__PURE__ */ jsx30(DropdownMenuPrimitive.Separator, {
    "data-slot": "dropdown-menu-separator",
    className: clsx17("-mx-1 my-1 h-px bg-border", className),
    ...props
  });
}
function DropdownMenuShortcut({ className, ...props }) {
  return /* @__PURE__ */ jsx30("span", {
    "data-slot": "dropdown-menu-shortcut",
    className: clsx17("ml-auto text-muted-foreground text-xs tracking-widest", className),
    ...props
  });
}
function DropdownMenuSub({ ...props }) {
  return /* @__PURE__ */ jsx30(DropdownMenuPrimitive.Sub, {
    "data-slot": "dropdown-menu-sub",
    ...props
  });
}
function DropdownMenuSubTrigger({ className, inset, children, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsxs14(DropdownMenuPrimitive.SubTrigger, {
    "data-slot": "dropdown-menu-sub-trigger",
    "data-inset": inset,
    className: clsx17("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[inset]:pl-8 data-[state=open]:text-accent-foreground", className),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx30(SpriteIcon, {
        id: "ChevronRight",
        className: "ml-auto size-4",
        url: spriteUrl
      })
    ]
  });
}
function DropdownMenuSubContent({ className, ...props }) {
  return /* @__PURE__ */ jsx30(DropdownMenuPrimitive.SubContent, {
    "data-slot": "dropdown-menu-sub-content",
    className: clsx17("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=closed]:animate-out data-[state=open]:animate-in", className),
    ...props
  });
}

// src/shadcn-ui/examples/breadcrumb-demo.tsx
import { jsx as jsx31, jsxs as jsxs15 } from "react/jsx-runtime";
function BreadcrumbDemo({ spriteUrl }) {
  return /* @__PURE__ */ jsx31(Breadcrumb, {
    children: /* @__PURE__ */ jsxs15(BreadcrumbList, {
      children: [
        /* @__PURE__ */ jsx31(BreadcrumbItem, {
          children: /* @__PURE__ */ jsx31(BreadcrumbLink, {
            asChild: true,
            children: /* @__PURE__ */ jsx31(Link, {
              href: "/",
              children: "Home"
            })
          })
        }),
        /* @__PURE__ */ jsx31(BreadcrumbSeparator, {
          spriteUrl
        }),
        /* @__PURE__ */ jsx31(BreadcrumbItem, {
          children: /* @__PURE__ */ jsxs15(DropdownMenu, {
            children: [
              /* @__PURE__ */ jsxs15(DropdownMenuTrigger, {
                className: "flex items-center gap-1",
                children: [
                  /* @__PURE__ */ jsx31(BreadcrumbEllipsis, {
                    spriteUrl,
                    className: "size-4"
                  }),
                  /* @__PURE__ */ jsx31("span", {
                    className: "sr-only",
                    children: "Toggle menu"
                  })
                ]
              }),
              /* @__PURE__ */ jsxs15(DropdownMenuContent, {
                align: "start",
                children: [
                  /* @__PURE__ */ jsx31(DropdownMenuItem, {
                    children: "Documentation"
                  }),
                  /* @__PURE__ */ jsx31(DropdownMenuItem, {
                    children: "Themes"
                  }),
                  /* @__PURE__ */ jsx31(DropdownMenuItem, {
                    children: "GitHub"
                  })
                ]
              })
            ]
          })
        }),
        /* @__PURE__ */ jsx31(BreadcrumbSeparator, {
          spriteUrl
        }),
        /* @__PURE__ */ jsx31(BreadcrumbItem, {
          children: /* @__PURE__ */ jsx31(BreadcrumbLink, {
            asChild: true,
            children: /* @__PURE__ */ jsx31(Link, {
              href: "/docs/components",
              children: "Components"
            })
          })
        }),
        /* @__PURE__ */ jsx31(BreadcrumbSeparator, {
          spriteUrl
        }),
        /* @__PURE__ */ jsx31(BreadcrumbItem, {
          children: /* @__PURE__ */ jsx31(BreadcrumbPage, {
            children: "Breadcrumb"
          })
        })
      ]
    })
  });
}

// src/shadcn-ui/examples/breadcrumb-dropdown.tsx
import { jsx as jsx32, jsxs as jsxs16 } from "react/jsx-runtime";
function BreadcrumbWithDropdown({ spriteUrl }) {
  return /* @__PURE__ */ jsx32(Breadcrumb, {
    children: /* @__PURE__ */ jsxs16(BreadcrumbList, {
      children: [
        /* @__PURE__ */ jsx32(BreadcrumbItem, {
          children: /* @__PURE__ */ jsx32(BreadcrumbLink, {
            asChild: true,
            children: /* @__PURE__ */ jsx32(Link, {
              href: "/",
              children: "Home"
            })
          })
        }),
        /* @__PURE__ */ jsx32(BreadcrumbSeparator, {
          spriteUrl,
          children: /* @__PURE__ */ jsx32(SpriteIcon, {
            id: "Slash",
            url: spriteUrl
          })
        }),
        /* @__PURE__ */ jsx32(BreadcrumbItem, {
          children: /* @__PURE__ */ jsxs16(DropdownMenu, {
            children: [
              /* @__PURE__ */ jsxs16(DropdownMenuTrigger, {
                className: "flex items-center gap-1 [&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0",
                children: [
                  "Components",
                  /* @__PURE__ */ jsx32(SpriteIcon, {
                    id: "ChevronDown",
                    url: spriteUrl
                  })
                ]
              }),
              /* @__PURE__ */ jsxs16(DropdownMenuContent, {
                align: "start",
                children: [
                  /* @__PURE__ */ jsx32(DropdownMenuItem, {
                    children: "Documentation"
                  }),
                  /* @__PURE__ */ jsx32(DropdownMenuItem, {
                    children: "Themes"
                  }),
                  /* @__PURE__ */ jsx32(DropdownMenuItem, {
                    children: "GitHub"
                  })
                ]
              })
            ]
          })
        }),
        /* @__PURE__ */ jsx32(BreadcrumbSeparator, {
          spriteUrl,
          children: /* @__PURE__ */ jsx32(SpriteIcon, {
            id: "Slash",
            url: spriteUrl
          })
        }),
        /* @__PURE__ */ jsx32(BreadcrumbItem, {
          children: /* @__PURE__ */ jsx32(BreadcrumbPage, {
            children: "Breadcrumb"
          })
        })
      ]
    })
  });
}

// src/shadcn-ui/examples/breadcrumb-ellipsis.tsx
import { jsx as jsx33, jsxs as jsxs17 } from "react/jsx-runtime";
function BreadcrumbCollapsed({ spriteUrl }) {
  return /* @__PURE__ */ jsx33(Breadcrumb, {
    children: /* @__PURE__ */ jsxs17(BreadcrumbList, {
      children: [
        /* @__PURE__ */ jsx33(BreadcrumbItem, {
          children: /* @__PURE__ */ jsx33(BreadcrumbLink, {
            asChild: true,
            children: /* @__PURE__ */ jsx33(Link, {
              href: "/",
              children: "Home"
            })
          })
        }),
        /* @__PURE__ */ jsx33(BreadcrumbSeparator, {
          spriteUrl
        }),
        /* @__PURE__ */ jsx33(BreadcrumbItem, {
          children: /* @__PURE__ */ jsx33(BreadcrumbEllipsis, {
            spriteUrl
          })
        }),
        /* @__PURE__ */ jsx33(BreadcrumbSeparator, {
          spriteUrl
        }),
        /* @__PURE__ */ jsx33(BreadcrumbItem, {
          children: /* @__PURE__ */ jsx33(BreadcrumbLink, {
            asChild: true,
            children: /* @__PURE__ */ jsx33(Link, {
              href: "/docs/components",
              children: "Components"
            })
          })
        }),
        /* @__PURE__ */ jsx33(BreadcrumbSeparator, {
          spriteUrl
        }),
        /* @__PURE__ */ jsx33(BreadcrumbItem, {
          children: /* @__PURE__ */ jsx33(BreadcrumbPage, {
            children: "Breadcrumb"
          })
        })
      ]
    })
  });
}

// src/shadcn-ui/examples/breadcrumb-link.tsx
import { jsx as jsx34, jsxs as jsxs18 } from "react/jsx-runtime";
function BreadcrumbWithCustomSeparator({ spriteUrl }) {
  return /* @__PURE__ */ jsx34(Breadcrumb, {
    children: /* @__PURE__ */ jsxs18(BreadcrumbList, {
      children: [
        /* @__PURE__ */ jsx34(BreadcrumbItem, {
          children: /* @__PURE__ */ jsx34(BreadcrumbLink, {
            asChild: true,
            children: /* @__PURE__ */ jsx34(Link, {
              href: "/",
              children: "Home"
            })
          })
        }),
        /* @__PURE__ */ jsx34(BreadcrumbSeparator, {
          spriteUrl
        }),
        /* @__PURE__ */ jsx34(BreadcrumbItem, {
          children: /* @__PURE__ */ jsx34(BreadcrumbLink, {
            asChild: true,
            children: /* @__PURE__ */ jsx34(Link, {
              href: "/components",
              children: "Components"
            })
          })
        }),
        /* @__PURE__ */ jsx34(BreadcrumbSeparator, {
          spriteUrl
        }),
        /* @__PURE__ */ jsx34(BreadcrumbItem, {
          children: /* @__PURE__ */ jsx34(BreadcrumbPage, {
            children: "Breadcrumb"
          })
        })
      ]
    })
  });
}

// src/shadcn-ui/examples/breadcrumb-separator.tsx
import { jsx as jsx35, jsxs as jsxs19 } from "react/jsx-runtime";
function BreadcrumbWithCustomSeparator2({ spriteUrl }) {
  return /* @__PURE__ */ jsx35(Breadcrumb, {
    children: /* @__PURE__ */ jsxs19(BreadcrumbList, {
      children: [
        /* @__PURE__ */ jsx35(BreadcrumbItem, {
          children: /* @__PURE__ */ jsx35(BreadcrumbLink, {
            asChild: true,
            children: /* @__PURE__ */ jsx35(Link, {
              href: "/",
              children: "Home"
            })
          })
        }),
        /* @__PURE__ */ jsx35(BreadcrumbSeparator, {
          spriteUrl,
          children: /* @__PURE__ */ jsx35(SpriteIcon, {
            id: "Slash",
            url: spriteUrl
          })
        }),
        /* @__PURE__ */ jsx35(BreadcrumbItem, {
          children: /* @__PURE__ */ jsx35(BreadcrumbLink, {
            asChild: true,
            children: /* @__PURE__ */ jsx35(Link, {
              href: "/components",
              children: "Components"
            })
          })
        }),
        /* @__PURE__ */ jsx35(BreadcrumbSeparator, {
          spriteUrl,
          children: /* @__PURE__ */ jsx35(SpriteIcon, {
            id: "Slash",
            url: spriteUrl
          })
        }),
        /* @__PURE__ */ jsx35(BreadcrumbItem, {
          children: /* @__PURE__ */ jsx35(BreadcrumbPage, {
            children: "Breadcrumb"
          })
        })
      ]
    })
  });
}

// src/shadcn-ui/examples/button-as-child.tsx
import { jsx as jsx36 } from "react/jsx-runtime";
function ButtonAsChild() {
  return /* @__PURE__ */ jsx36(Button, {
    asChild: true,
    children: /* @__PURE__ */ jsx36(Link, {
      href: "/login",
      children: "Login"
    })
  });
}

// src/shadcn-ui/examples/button-demo.tsx
import { jsx as jsx37 } from "react/jsx-runtime";
function ButtonDemo() {
  return /* @__PURE__ */ jsx37("div", {
    className: "flex flex-wrap items-center gap-2 md:flex-row",
    children: /* @__PURE__ */ jsx37(Button, {
      children: "Button"
    })
  });
}

// src/shadcn-ui/examples/button-destructive.tsx
import { jsx as jsx38 } from "react/jsx-runtime";
function ButtonDestructive() {
  return /* @__PURE__ */ jsx38(Button, {
    variant: "destructive",
    children: "Destructive"
  });
}

// src/shadcn-ui/examples/button-ghost.tsx
import { jsx as jsx39 } from "react/jsx-runtime";
function ButtonGhost() {
  return /* @__PURE__ */ jsx39(Button, {
    variant: "ghost",
    children: "Ghost"
  });
}

// src/shadcn-ui/examples/button-icon.tsx
import { jsx as jsx40 } from "react/jsx-runtime";
function ButtonIcon({ spriteUrl }) {
  return /* @__PURE__ */ jsx40(Button, {
    variant: "secondary",
    size: "icon",
    className: "size-8",
    children: /* @__PURE__ */ jsx40(SpriteIcon, {
      id: "ChevronRight",
      url: spriteUrl
    })
  });
}

// src/shadcn-ui/examples/button-link.tsx
import { jsx as jsx41 } from "react/jsx-runtime";
function ButtonLink() {
  return /* @__PURE__ */ jsx41(Button, {
    variant: "link",
    children: "Link"
  });
}

// src/shadcn-ui/examples/button-loading.tsx
import { jsx as jsx42, jsxs as jsxs20 } from "react/jsx-runtime";
function ButtonLoading({ spriteUrl }) {
  return /* @__PURE__ */ jsxs20(Button, {
    size: "sm",
    disabled: true,
    children: [
      /* @__PURE__ */ jsx42(SpriteIcon, {
        id: "Loader",
        className: "animate-spin",
        url: spriteUrl
      }),
      "Please wait"
    ]
  });
}

// src/shadcn-ui/examples/button-outline.tsx
import { jsx as jsx43 } from "react/jsx-runtime";
function ButtonOutline() {
  return /* @__PURE__ */ jsx43(Button, {
    variant: "outline",
    children: "Outline"
  });
}

// src/shadcn-ui/examples/button-secondary.tsx
import { jsx as jsx44 } from "react/jsx-runtime";
function ButtonSecondary() {
  return /* @__PURE__ */ jsx44(Button, {
    variant: "secondary",
    children: "Secondary"
  });
}

// src/shadcn-ui/examples/button-with-icon.tsx
import { jsx as jsx45, jsxs as jsxs21 } from "react/jsx-runtime";
function ButtonWithIcon({ spriteUrl }) {
  return /* @__PURE__ */ jsxs21(Button, {
    variant: "outline",
    size: "sm",
    children: [
      /* @__PURE__ */ jsx45(SpriteIcon, {
        id: "Calendar",
        url: spriteUrl
      }),
      " New Branch"
    ]
  });
}

// src/shadcn-ui/components/card.tsx
import clsx18 from "clsx";
import { jsx as jsx46 } from "react/jsx-runtime";
function Card({ className, ...props }) {
  return /* @__PURE__ */ jsx46("div", {
    "data-slot": "card",
    className: clsx18("flex flex-col gap-6 rounded-xl border bg-card py-6 text-card-foreground shadow-sm", className),
    ...props
  });
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx46("div", {
    "data-slot": "card-header",
    className: clsx18("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
    ...props
  });
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx46("div", {
    "data-slot": "card-title",
    className: clsx18("font-semibold leading-none", className),
    ...props
  });
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx46("div", {
    "data-slot": "card-description",
    className: clsx18("text-muted-foreground text-sm", className),
    ...props
  });
}
function CardAction({ className, ...props }) {
  return /* @__PURE__ */ jsx46("div", {
    "data-slot": "card-action",
    className: clsx18("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
    ...props
  });
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsx46("div", {
    "data-slot": "card-content",
    className: clsx18("px-6", className),
    ...props
  });
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx46("div", {
    "data-slot": "card-footer",
    className: clsx18("flex items-center px-6 [.border-t]:pt-6", className),
    ...props
  });
}

// src/shadcn-ui/components/input.tsx
import clsx19 from "clsx";
import { jsx as jsx47 } from "react/jsx-runtime";
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx47("input", {
    type,
    "data-slot": "input",
    className: clsx19("flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs outline-none transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30", "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50", "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40", className),
    ...props
  });
}

// src/shadcn-ui/components/label.tsx
import clsx20 from "clsx";
import { Label as LabelPrimitive } from "radix-ui";
import { jsx as jsx48 } from "react/jsx-runtime";
function Label({ className, ...props }) {
  return /* @__PURE__ */ jsx48(LabelPrimitive.Root, {
    "data-slot": "label",
    className: clsx20("flex select-none items-center gap-2 font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50", className),
    ...props
  });
}

// src/shadcn-ui/examples/card-demo.tsx
import { jsx as jsx49, jsxs as jsxs22 } from "react/jsx-runtime";
function CardDemo() {
  return /* @__PURE__ */ jsxs22(Card, {
    className: "w-full max-w-sm",
    children: [
      /* @__PURE__ */ jsxs22(CardHeader, {
        children: [
          /* @__PURE__ */ jsx49(CardTitle, {
            children: "Login to your account"
          }),
          /* @__PURE__ */ jsx49(CardDescription, {
            children: "Enter your email below to login to your account"
          }),
          /* @__PURE__ */ jsx49(CardAction, {
            children: /* @__PURE__ */ jsx49(Button, {
              variant: "link",
              children: "Sign Up"
            })
          })
        ]
      }),
      /* @__PURE__ */ jsx49(CardContent, {
        children: /* @__PURE__ */ jsx49("form", {
          children: /* @__PURE__ */ jsxs22("div", {
            className: "flex flex-col gap-6",
            children: [
              /* @__PURE__ */ jsxs22("div", {
                className: "grid gap-2",
                children: [
                  /* @__PURE__ */ jsx49(Label, {
                    htmlFor: "cardemail",
                    children: "cardemail"
                  }),
                  /* @__PURE__ */ jsx49(Input, {
                    id: "cardemail",
                    type: "email",
                    placeholder: "place@example.com",
                    required: true
                  })
                ]
              }),
              /* @__PURE__ */ jsxs22("div", {
                className: "grid gap-2",
                children: [
                  /* @__PURE__ */ jsxs22("div", {
                    className: "flex items-center",
                    children: [
                      /* @__PURE__ */ jsx49(Label, {
                        htmlFor: "password",
                        children: "Password"
                      }),
                      /* @__PURE__ */ jsx49("a", {
                        href: "#",
                        className: "ml-auto inline-block text-sm underline-offset-4 hover:underline",
                        children: "Forgot your password?"
                      })
                    ]
                  }),
                  /* @__PURE__ */ jsx49(Input, {
                    id: "password",
                    type: "password",
                    required: true
                  })
                ]
              })
            ]
          })
        })
      }),
      /* @__PURE__ */ jsxs22(CardFooter, {
        className: "flex-col gap-2",
        children: [
          /* @__PURE__ */ jsx49(Button, {
            type: "submit",
            className: "w-full",
            children: "Login"
          }),
          /* @__PURE__ */ jsx49(Button, {
            variant: "outline",
            className: "w-full",
            children: "Login with Google"
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/components/select.tsx
import clsx21 from "clsx";
import { Select as SelectPrimitive } from "radix-ui";
import { jsx as jsx50, jsxs as jsxs23 } from "react/jsx-runtime";
function Select({ ...props }) {
  return /* @__PURE__ */ jsx50(SelectPrimitive.Root, {
    "data-slot": "select",
    ...props
  });
}
function SelectGroup({ ...props }) {
  return /* @__PURE__ */ jsx50(SelectPrimitive.Group, {
    "data-slot": "select-group",
    ...props
  });
}
function SelectValue({ ...props }) {
  return /* @__PURE__ */ jsx50(SelectPrimitive.Value, {
    "data-slot": "select-value",
    ...props
  });
}
function SelectTrigger({ className, size = "default", children, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsxs23(SelectPrimitive.Trigger, {
    "data-slot": "select-trigger",
    "data-size": size,
    className: clsx21("flex w-fit items-center justify-between gap-2 whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[size=default]:h-9 data-[size=sm]:h-8 data-[placeholder]:text-muted-foreground *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:hover:bg-input/50 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx50(SelectPrimitive.Icon, {
        asChild: true,
        children: /* @__PURE__ */ jsx50(SpriteIcon, {
          id: "ChevronDown",
          className: "size-4 opacity-50",
          url: spriteUrl
        })
      })
    ]
  });
}
function SelectContent({ className, children, position = "popper", spriteUrl, ...props }) {
  return /* @__PURE__ */ jsx50(SelectPrimitive.Portal, {
    children: /* @__PURE__ */ jsxs23(SelectPrimitive.Content, {
      "data-slot": "select-content",
      className: clsx21("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=closed]:animate-out data-[state=open]:animate-in", position === "popper" && "data-[side=left]:-translate-x-1 data-[side=top]:-translate-y-1 data-[side=right]:translate-x-1 data-[side=bottom]:translate-y-1", className),
      position,
      ...props,
      children: [
        /* @__PURE__ */ jsx50(SelectScrollUpButton, {
          spriteUrl
        }),
        /* @__PURE__ */ jsx50(SelectPrimitive.Viewport, {
          className: clsx21("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
          children
        }),
        /* @__PURE__ */ jsx50(SelectScrollDownButton, {
          spriteUrl
        })
      ]
    })
  });
}
function SelectLabel({ className, ...props }) {
  return /* @__PURE__ */ jsx50(SelectPrimitive.Label, {
    "data-slot": "select-label",
    className: clsx21("px-2 py-1.5 text-muted-foreground text-xs", className),
    ...props
  });
}
function SelectItem({ className, spriteUrl, children, ...props }) {
  return /* @__PURE__ */ jsxs23(SelectPrimitive.Item, {
    "data-slot": "select-item",
    className: clsx21("relative flex w-full cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx50("span", {
        className: "absolute right-2 flex size-3.5 items-center justify-center",
        children: /* @__PURE__ */ jsx50(SelectPrimitive.ItemIndicator, {
          children: /* @__PURE__ */ jsx50(SpriteIcon, {
            id: "Check",
            className: "size-4",
            url: spriteUrl
          })
        })
      }),
      /* @__PURE__ */ jsx50(SelectPrimitive.ItemText, {
        children
      })
    ]
  });
}
function SelectScrollUpButton({ className, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsx50(SelectPrimitive.ScrollUpButton, {
    "data-slot": "select-scroll-up-button",
    className: clsx21("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx50(SpriteIcon, {
      id: "ChevronUp",
      className: "size-4",
      url: spriteUrl
    })
  });
}
function SelectScrollDownButton({ className, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsx50(SelectPrimitive.ScrollDownButton, {
    "data-slot": "select-scroll-down-button",
    className: clsx21("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx50(SpriteIcon, {
      id: "ChevronDown",
      className: "size-4",
      url: spriteUrl
    })
  });
}

// src/shadcn-ui/examples/card-with-form.tsx
import { jsx as jsx51, jsxs as jsxs24 } from "react/jsx-runtime";
function CardWithForm({ spriteUrl }) {
  return /* @__PURE__ */ jsxs24(Card, {
    className: "w-[350px]",
    children: [
      /* @__PURE__ */ jsxs24(CardHeader, {
        children: [
          /* @__PURE__ */ jsx51(CardTitle, {
            children: "Create project"
          }),
          /* @__PURE__ */ jsx51(CardDescription, {
            children: "Deploy your new project in one-click."
          })
        ]
      }),
      /* @__PURE__ */ jsx51(CardContent, {
        children: /* @__PURE__ */ jsx51("form", {
          children: /* @__PURE__ */ jsxs24("div", {
            className: "grid w-full items-center gap-6",
            children: [
              /* @__PURE__ */ jsxs24("div", {
                className: "flex flex-col gap-3",
                children: [
                  /* @__PURE__ */ jsx51(Label, {
                    htmlFor: "name",
                    children: "Name"
                  }),
                  /* @__PURE__ */ jsx51(Input, {
                    id: "name",
                    placeholder: "Name of your project"
                  })
                ]
              }),
              /* @__PURE__ */ jsxs24("div", {
                className: "flex flex-col gap-3",
                children: [
                  /* @__PURE__ */ jsx51(Label, {
                    htmlFor: "framework",
                    children: "Framework"
                  }),
                  /* @__PURE__ */ jsxs24(Select, {
                    children: [
                      /* @__PURE__ */ jsx51(SelectTrigger, {
                        spriteUrl,
                        id: "framework",
                        className: "w-full",
                        children: /* @__PURE__ */ jsx51(SelectValue, {
                          placeholder: "Select"
                        })
                      }),
                      /* @__PURE__ */ jsxs24(SelectContent, {
                        spriteUrl,
                        position: "popper",
                        children: [
                          /* @__PURE__ */ jsx51(SelectItem, {
                            spriteUrl,
                            value: "next",
                            children: "Next.js"
                          }),
                          /* @__PURE__ */ jsx51(SelectItem, {
                            spriteUrl,
                            value: "sveltekit",
                            children: "SvelteKit"
                          }),
                          /* @__PURE__ */ jsx51(SelectItem, {
                            spriteUrl,
                            value: "astro",
                            children: "Astro"
                          }),
                          /* @__PURE__ */ jsx51(SelectItem, {
                            spriteUrl,
                            value: "nuxt",
                            children: "Nuxt.js"
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          })
        })
      }),
      /* @__PURE__ */ jsxs24(CardFooter, {
        className: "flex justify-between",
        children: [
          /* @__PURE__ */ jsx51(Button, {
            variant: "outline",
            children: "Cancel"
          }),
          /* @__PURE__ */ jsx51(Button, {
            children: "Deploy"
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/components/checkbox.tsx
import clsx22 from "clsx";
import { Checkbox as CheckboxPrimitive } from "radix-ui";
import { jsx as jsx52 } from "react/jsx-runtime";
function Checkbox({ className, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsx52(CheckboxPrimitive.Root, {
    "data-slot": "checkbox",
    className: clsx22("peer size-4 shrink-0 rounded-[4px] border border-input shadow-xs outline-none transition-shadow focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-input/30 dark:data-[state=checked]:bg-primary dark:aria-invalid:ring-destructive/40", className),
    ...props,
    children: /* @__PURE__ */ jsx52(CheckboxPrimitive.Indicator, {
      "data-slot": "checkbox-indicator",
      className: "flex items-center justify-center text-current transition-none",
      children: /* @__PURE__ */ jsx52(SpriteIcon, {
        id: "Check",
        url: spriteUrl,
        className: "size-3.5"
      })
    })
  });
}

// src/shadcn-ui/examples/checkbox-demo.tsx
import { jsx as jsx53, jsxs as jsxs25 } from "react/jsx-runtime";
function CheckboxDemo({ spriteUrl }) {
  return /* @__PURE__ */ jsxs25("div", {
    className: "flex flex-col gap-6",
    children: [
      /* @__PURE__ */ jsxs25("div", {
        className: "flex items-center gap-3",
        children: [
          /* @__PURE__ */ jsx53(Checkbox, {
            spriteUrl,
            id: "terms"
          }),
          /* @__PURE__ */ jsx53(Label, {
            htmlFor: "terms",
            children: "Accept terms and conditions"
          })
        ]
      }),
      /* @__PURE__ */ jsxs25("div", {
        className: "flex items-start gap-3",
        children: [
          /* @__PURE__ */ jsx53(Checkbox, {
            spriteUrl,
            id: "terms-2",
            defaultChecked: true
          }),
          /* @__PURE__ */ jsxs25("div", {
            className: "grid gap-2",
            children: [
              /* @__PURE__ */ jsx53(Label, {
                htmlFor: "terms-2",
                children: "Accept terms and conditions"
              }),
              /* @__PURE__ */ jsx53("p", {
                className: "text-muted-foreground text-sm",
                children: "By clicking this checkbox, you agree to the terms and conditions."
              })
            ]
          })
        ]
      }),
      /* @__PURE__ */ jsxs25("div", {
        className: "flex items-start gap-3",
        children: [
          /* @__PURE__ */ jsx53(Checkbox, {
            spriteUrl,
            id: "toggle",
            disabled: true
          }),
          /* @__PURE__ */ jsx53(Label, {
            htmlFor: "toggle",
            children: "Enable notifications"
          })
        ]
      }),
      /* @__PURE__ */ jsxs25(Label, {
        className: "flex items-start gap-3 rounded-lg border p-3 hover:bg-accent/50 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950",
        children: [
          /* @__PURE__ */ jsx53(Checkbox, {
            spriteUrl,
            id: "toggle-2",
            defaultChecked: true,
            className: "data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
          }),
          /* @__PURE__ */ jsxs25("div", {
            className: "grid gap-1.5 font-normal",
            children: [
              /* @__PURE__ */ jsx53("p", {
                className: "font-medium text-sm leading-none",
                children: "Enable notifications"
              }),
              /* @__PURE__ */ jsx53("p", {
                className: "text-muted-foreground text-sm",
                children: "You can enable or disable notifications at any time."
              })
            ]
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/examples/checkbox-disabled.tsx
import { jsx as jsx54, jsxs as jsxs26 } from "react/jsx-runtime";
function CheckboxDisabled({ spriteUrl }) {
  return /* @__PURE__ */ jsxs26("div", {
    className: "flex items-center space-x-2",
    children: [
      /* @__PURE__ */ jsx54(Checkbox, {
        spriteUrl,
        id: "terms2",
        disabled: true
      }),
      /* @__PURE__ */ jsx54("label", {
        htmlFor: "terms2",
        className: "font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        children: "Accept terms and conditions"
      })
    ]
  });
}

// src/shadcn-ui/examples/checkbox-form-multiple.tsx
import React4 from "react";
import { toast } from "sonner";

// src/shadcn-ui/custom/form.tsx
import clsx23 from "clsx";
import { Slot as SlotPrimitive4 } from "radix-ui";
import React3 from "react";
import { Form as RouterForm } from "react-router";
import { jsx as jsx55 } from "react/jsx-runtime";
var Form = RouterForm;
var FormFieldContext = React3.createContext({});
var FormField = ({ name, children }) => {
  return /* @__PURE__ */ jsx55(FormFieldContext.Provider, {
    value: { name },
    children
  });
};
var useFormField = () => {
  const fieldContext = React3.useContext(FormFieldContext);
  const itemContext = React3.useContext(FormItemContext);
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
    error: undefined
  };
};
var FormItemContext = React3.createContext({});
function FormItem({ className, ...props }) {
  const id = React3.useId();
  return /* @__PURE__ */ jsx55(FormItemContext.Provider, {
    value: { id },
    children: /* @__PURE__ */ jsx55("div", {
      "data-slot": "form-item",
      className: clsx23("grid gap-2", className),
      ...props
    })
  });
}
function FormLabel({ className, ...props }) {
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ jsx55(Label, {
    "data-slot": "form-label",
    "data-error": !!error,
    className: clsx23("data-[error=true]:text-destructive", className),
    htmlFor: formItemId,
    ...props
  });
}
function FormControl({ ...props }) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ jsx55(SlotPrimitive4.Slot, {
    "data-slot": "form-control",
    id: formItemId,
    "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
    "aria-invalid": !!error,
    ...props
  });
}
function FormDescription({ className, ...props }) {
  const { formDescriptionId } = useFormField();
  return /* @__PURE__ */ jsx55("p", {
    "data-slot": "form-description",
    id: formDescriptionId,
    className: clsx23("text-muted-foreground text-sm", className),
    ...props
  });
}
function FormMessage({ className, ...props }) {
  const { error, formMessageId } = useFormField();
  const body = props.children;
  if (!body) {
    return null;
  }
  return /* @__PURE__ */ jsx55("p", {
    "data-slot": "form-message",
    id: formMessageId,
    className: clsx23("text-destructive text-sm", className),
    ...props,
    children: body
  });
}

// src/shadcn-ui/examples/checkbox-form-multiple.tsx
import { jsx as jsx56, jsxs as jsxs27 } from "react/jsx-runtime";
var items = [
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
function CheckboxReactHookFormMultiple({ spriteUrl }) {
  const [selectedItems, setSelectedItems] = React4.useState(["recents", "home"]);
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const items2 = formData.getAll("items");
    toast("You submitted the following values", {
      description: /* @__PURE__ */ jsx56("pre", {
        className: "mt-2 w-[320px] rounded-md bg-neutral-950 p-4",
        children: /* @__PURE__ */ jsx56("code", {
          className: "text-white",
          children: JSON.stringify({ items: items2 }, null, 2)
        })
      })
    });
  }
  function handleCheckboxChange(itemId, checked) {
    if (checked) {
      setSelectedItems((prev) => [...prev, itemId]);
    } else {
      setSelectedItems((prev) => prev.filter((id) => id !== itemId));
    }
  }
  return /* @__PURE__ */ jsxs27(Form, {
    onSubmit: handleSubmit,
    className: "space-y-8",
    children: [
      /* @__PURE__ */ jsx56(FormField, {
        name: "items",
        children: /* @__PURE__ */ jsxs27(FormItem, {
          children: [
            /* @__PURE__ */ jsxs27("div", {
              className: "mb-4",
              children: [
                /* @__PURE__ */ jsx56(FormLabel, {
                  className: "text-base",
                  children: "Sidebar"
                }),
                /* @__PURE__ */ jsx56(FormDescription, {
                  children: "Select the items you want to display in the sidebar."
                })
              ]
            }),
            items.map((item) => /* @__PURE__ */ jsxs27(FormItem, {
              className: "flex flex-row items-center gap-2",
              children: [
                /* @__PURE__ */ jsx56(FormControl, {
                  children: /* @__PURE__ */ jsx56(Checkbox, {
                    spriteUrl,
                    name: "items",
                    value: item.id,
                    checked: selectedItems.includes(item.id),
                    onCheckedChange: (checked) => handleCheckboxChange(item.id, !!checked)
                  })
                }),
                /* @__PURE__ */ jsx56(FormLabel, {
                  className: "font-normal text-sm",
                  children: item.label
                })
              ]
            }, item.id)),
            /* @__PURE__ */ jsx56(FormMessage, {})
          ]
        })
      }),
      /* @__PURE__ */ jsx56(Button, {
        type: "submit",
        children: "Submit"
      })
    ]
  });
}

// src/shadcn-ui/examples/checkbox-form-single.tsx
import React5 from "react";
import { toast as toast2 } from "sonner";
import { jsx as jsx57, jsxs as jsxs28 } from "react/jsx-runtime";
function CheckboxReactHookFormSingle({ spriteUrl }) {
  const [mobileEnabled, setMobileEnabled] = React5.useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const mobile = formData.has("mobile");
    toast2("You submitted the following values", {
      description: /* @__PURE__ */ jsx57("pre", {
        className: "mt-2 w-[320px] rounded-md bg-neutral-950 p-4",
        children: /* @__PURE__ */ jsx57("code", {
          className: "text-white",
          children: JSON.stringify({ mobile }, null, 2)
        })
      })
    });
  }
  return /* @__PURE__ */ jsxs28(Form, {
    onSubmit: handleSubmit,
    className: "flex flex-col items-start gap-4",
    children: [
      /* @__PURE__ */ jsx57(FormField, {
        name: "mobile",
        children: /* @__PURE__ */ jsxs28(FormItem, {
          className: "flex flex-row items-start gap-2 rounded-md border p-4 shadow-sm",
          children: [
            /* @__PURE__ */ jsx57(FormControl, {
              children: /* @__PURE__ */ jsx57(Checkbox, {
                spriteUrl,
                name: "mobile",
                checked: mobileEnabled,
                onCheckedChange: setMobileEnabled
              })
            }),
            /* @__PURE__ */ jsxs28("div", {
              className: "space-y-1 leading-none",
              children: [
                /* @__PURE__ */ jsx57(FormLabel, {
                  children: "Use different settings for my mobile devices"
                }),
                /* @__PURE__ */ jsxs28(FormDescription, {
                  children: [
                    "You can manage your mobile notifications in the ",
                    /* @__PURE__ */ jsx57(Link, {
                      href: "/examples/forms",
                      children: "mobile settings"
                    }),
                    " page."
                  ]
                })
              ]
            })
          ]
        })
      }),
      /* @__PURE__ */ jsx57(Button, {
        type: "submit",
        children: "Submit"
      })
    ]
  });
}

// src/shadcn-ui/examples/checkbox-with-text.tsx
import { jsx as jsx58, jsxs as jsxs29 } from "react/jsx-runtime";
function CheckboxWithText({ spriteUrl }) {
  return /* @__PURE__ */ jsxs29("div", {
    className: "items-top flex gap-2",
    children: [
      /* @__PURE__ */ jsx58(Checkbox, {
        spriteUrl,
        id: "terms1"
      }),
      /* @__PURE__ */ jsxs29("div", {
        className: "grid gap-1.5 leading-none",
        children: [
          /* @__PURE__ */ jsx58("label", {
            htmlFor: "terms1",
            className: "font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
            children: "Accept terms and conditions"
          }),
          /* @__PURE__ */ jsx58("p", {
            className: "text-muted-foreground text-sm",
            children: "You agree to our Terms of Service and Privacy Policy."
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/examples/collapsible-demo.tsx
import React6 from "react";

// src/shadcn-ui/components/collapsible.tsx
import { Collapsible as CollapsiblePrimitive } from "radix-ui";
import { jsx as jsx59 } from "react/jsx-runtime";
function Collapsible({ ...props }) {
  return /* @__PURE__ */ jsx59(CollapsiblePrimitive.Root, {
    "data-slot": "collapsible",
    ...props
  });
}
function CollapsibleTrigger({ ...props }) {
  return /* @__PURE__ */ jsx59(CollapsiblePrimitive.CollapsibleTrigger, {
    "data-slot": "collapsible-trigger",
    ...props
  });
}
function CollapsibleContent({ ...props }) {
  return /* @__PURE__ */ jsx59(CollapsiblePrimitive.CollapsibleContent, {
    "data-slot": "collapsible-content",
    ...props
  });
}

// src/shadcn-ui/examples/collapsible-demo.tsx
import { jsx as jsx60, jsxs as jsxs30 } from "react/jsx-runtime";
function CollapsibleDemo({ spriteUrl }) {
  const [isOpen, setIsOpen] = React6.useState(false);
  return /* @__PURE__ */ jsxs30(Collapsible, {
    open: isOpen,
    onOpenChange: setIsOpen,
    className: "flex w-[350px] flex-col gap-2",
    children: [
      /* @__PURE__ */ jsxs30("div", {
        className: "flex items-center justify-between gap-4 px-4",
        children: [
          /* @__PURE__ */ jsx60("h4", {
            className: "font-semibold text-sm",
            children: "@peduarte starred 3 repositories"
          }),
          /* @__PURE__ */ jsx60(CollapsibleTrigger, {
            asChild: true,
            children: /* @__PURE__ */ jsxs30(Button, {
              variant: "ghost",
              size: "icon",
              className: "size-8",
              children: [
                /* @__PURE__ */ jsx60(SpriteIcon, {
                  id: "ChevronsUpDown",
                  url: spriteUrl
                }),
                /* @__PURE__ */ jsx60("span", {
                  className: "sr-only",
                  children: "Toggle"
                })
              ]
            })
          })
        ]
      }),
      /* @__PURE__ */ jsx60("div", {
        className: "rounded-md border px-4 py-2 font-mono text-sm",
        children: "@radix-ui/primitives"
      }),
      /* @__PURE__ */ jsxs30(CollapsibleContent, {
        className: "flex flex-col gap-2",
        children: [
          /* @__PURE__ */ jsx60("div", {
            className: "rounded-md border px-4 py-2 font-mono text-sm",
            children: "@radix-ui/colors"
          }),
          /* @__PURE__ */ jsx60("div", {
            className: "rounded-md border px-4 py-2 font-mono text-sm",
            children: "@stitches/react"
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/examples/combobox-demo.tsx
import clsx27 from "clsx";
import React7 from "react";

// src/shadcn-ui/components/command.tsx
import clsx25 from "clsx";
import { Command as CommandPrimitive } from "cmdk";

// src/shadcn-ui/components/dialog.tsx
import clsx24 from "clsx";
import { Dialog as DialogPrimitive } from "radix-ui";
import { jsx as jsx61, jsxs as jsxs31 } from "react/jsx-runtime";
function Dialog({ ...props }) {
  return /* @__PURE__ */ jsx61(DialogPrimitive.Root, {
    "data-slot": "dialog",
    ...props
  });
}
function DialogTrigger({ ...props }) {
  return /* @__PURE__ */ jsx61(DialogPrimitive.Trigger, {
    "data-slot": "dialog-trigger",
    ...props
  });
}
function DialogPortal({ ...props }) {
  return /* @__PURE__ */ jsx61(DialogPrimitive.Portal, {
    "data-slot": "dialog-portal",
    ...props
  });
}
function DialogClose({ ...props }) {
  return /* @__PURE__ */ jsx61(DialogPrimitive.Close, {
    "data-slot": "dialog-close",
    ...props
  });
}
function DialogOverlay({ className, ...props }) {
  return /* @__PURE__ */ jsx61(DialogPrimitive.Overlay, {
    "data-slot": "dialog-overlay",
    className: clsx24("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=open]:animate-in", className),
    ...props
  });
}
function DialogContent({ className, children, showCloseButton = true, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsxs31(DialogPortal, {
    "data-slot": "dialog-portal",
    children: [
      /* @__PURE__ */ jsx61(DialogOverlay, {}),
      /* @__PURE__ */ jsxs31(DialogPrimitive.Content, {
        "data-slot": "dialog-content",
        className: clsx24("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 data-[state=closed]:animate-out data-[state=open]:animate-in sm:max-w-lg", className),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxs31(DialogPrimitive.Close, {
            "data-slot": "dialog-close",
            className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
            children: [
              /* @__PURE__ */ jsx61(SpriteIcon, {
                id: "X",
                url: spriteUrl
              }),
              /* @__PURE__ */ jsx61("span", {
                className: "sr-only",
                children: "Close"
              })
            ]
          })
        ]
      })
    ]
  });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx61("div", {
    "data-slot": "dialog-header",
    className: clsx24("flex flex-col gap-2 text-center sm:text-left", className),
    ...props
  });
}
function DialogFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx61("div", {
    "data-slot": "dialog-footer",
    className: clsx24("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
    ...props
  });
}
function DialogTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx61(DialogPrimitive.Title, {
    "data-slot": "dialog-title",
    className: clsx24("font-semibold text-lg leading-none", className),
    ...props
  });
}
function DialogDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx61(DialogPrimitive.Description, {
    "data-slot": "dialog-description",
    className: clsx24("text-muted-foreground text-sm", className),
    ...props
  });
}

// src/shadcn-ui/components/command.tsx
import { jsx as jsx62, jsxs as jsxs32 } from "react/jsx-runtime";
function Command({ className, ...props }) {
  return /* @__PURE__ */ jsx62(CommandPrimitive, {
    "data-slot": "command",
    className: clsx25("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", className),
    ...props
  });
}
function CommandInput({ className, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsxs32("div", {
    "data-slot": "command-input-wrapper",
    className: "flex h-9 items-center gap-2 border-b px-3",
    children: [
      /* @__PURE__ */ jsx62(SpriteIcon, {
        id: "Search",
        url: spriteUrl,
        className: "size-4 shrink-0 opacity-50"
      }),
      /* @__PURE__ */ jsx62(CommandPrimitive.Input, {
        "data-slot": "command-input",
        className: clsx25("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className),
        ...props
      })
    ]
  });
}
function CommandList({ className, ...props }) {
  return /* @__PURE__ */ jsx62(CommandPrimitive.List, {
    "data-slot": "command-list",
    className: clsx25("max-h-[300px] scroll-py-1 overflow-y-auto overflow-x-hidden", className),
    ...props
  });
}
function CommandEmpty({ ...props }) {
  return /* @__PURE__ */ jsx62(CommandPrimitive.Empty, {
    "data-slot": "command-empty",
    className: "py-6 text-center text-sm",
    ...props
  });
}
function CommandGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx62(CommandPrimitive.Group, {
    "data-slot": "command-group",
    className: clsx25("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:text-xs", className),
    ...props
  });
}
function CommandItem({ className, ...props }) {
  return /* @__PURE__ */ jsx62(CommandPrimitive.Item, {
    "data-slot": "command-item",
    className: clsx25("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props
  });
}

// src/shadcn-ui/components/popover.tsx
import clsx26 from "clsx";
import { Popover as PopoverPrimitive } from "radix-ui";
import { jsx as jsx63 } from "react/jsx-runtime";
function Popover({ ...props }) {
  return /* @__PURE__ */ jsx63(PopoverPrimitive.Root, {
    "data-slot": "popover",
    ...props
  });
}
function PopoverTrigger({ ...props }) {
  return /* @__PURE__ */ jsx63(PopoverPrimitive.Trigger, {
    "data-slot": "popover-trigger",
    ...props
  });
}
function PopoverContent({ className, align = "center", sideOffset = 4, ...props }) {
  return /* @__PURE__ */ jsx63(PopoverPrimitive.Portal, {
    children: /* @__PURE__ */ jsx63(PopoverPrimitive.Content, {
      "data-slot": "popover-content",
      align,
      sideOffset,
      className: clsx26("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[state=closed]:animate-out data-[state=open]:animate-in", className),
      ...props
    })
  });
}

// src/shadcn-ui/examples/combobox-demo.tsx
import { jsx as jsx64, jsxs as jsxs33 } from "react/jsx-runtime";
var frameworks = [
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
  const [open, setOpen] = React7.useState(false);
  const [value, setValue] = React7.useState("");
  return /* @__PURE__ */ jsxs33(Popover, {
    open,
    onOpenChange: setOpen,
    children: [
      /* @__PURE__ */ jsx64(PopoverTrigger, {
        asChild: true,
        children: /* @__PURE__ */ jsxs33(Button, {
          variant: "outline",
          role: "combobox",
          "aria-expanded": open,
          className: "w-[200px] justify-between",
          children: [
            value ? frameworks.find((framework) => framework.value === value)?.label : "Select framework...",
            /* @__PURE__ */ jsx64(SpriteIcon, {
              id: "ChevronsUpDown",
              className: "opacity-50",
              url: spriteUrl
            })
          ]
        })
      }),
      /* @__PURE__ */ jsx64(PopoverContent, {
        className: "w-[200px] p-0",
        children: /* @__PURE__ */ jsxs33(Command, {
          children: [
            /* @__PURE__ */ jsx64(CommandInput, {
              spriteUrl,
              placeholder: "Search framework...",
              className: "h-9"
            }),
            /* @__PURE__ */ jsxs33(CommandList, {
              children: [
                /* @__PURE__ */ jsx64(CommandEmpty, {
                  children: "No framework found."
                }),
                /* @__PURE__ */ jsx64(CommandGroup, {
                  children: frameworks.map((framework) => /* @__PURE__ */ jsxs33(CommandItem, {
                    value: framework.value,
                    onSelect: (currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    },
                    children: [
                      framework.label,
                      /* @__PURE__ */ jsx64(SpriteIcon, {
                        id: "Check",
                        className: clsx27("ml-auto", value === framework.value ? "opacity-100" : "opacity-0"),
                        url: spriteUrl
                      })
                    ]
                  }, framework.value))
                })
              ]
            })
          ]
        })
      })
    ]
  });
}

// src/shadcn-ui/examples/combobox-dropdown-menu.tsx
import React8 from "react";
import { jsx as jsx65, jsxs as jsxs34 } from "react/jsx-runtime";
var labels = ["feature", "bug", "enhancement", "documentation", "design", "question", "maintenance"];
function ComboboxDropdownMenu({ spriteUrl }) {
  const [label, setLabel] = React8.useState("feature");
  const [open, setOpen] = React8.useState(false);
  return /* @__PURE__ */ jsxs34("div", {
    className: "flex w-full flex-col items-start justify-between rounded-md border px-4 py-3 sm:flex-row sm:items-center",
    children: [
      /* @__PURE__ */ jsxs34("p", {
        className: "font-medium text-sm leading-none",
        children: [
          /* @__PURE__ */ jsx65("span", {
            className: "mr-2 rounded-lg bg-primary px-2 py-1 text-primary-foreground text-xs",
            children: label
          }),
          /* @__PURE__ */ jsx65("span", {
            className: "text-muted-foreground",
            children: "Create a new project"
          })
        ]
      }),
      /* @__PURE__ */ jsxs34(DropdownMenu, {
        open,
        onOpenChange: setOpen,
        children: [
          /* @__PURE__ */ jsx65(DropdownMenuTrigger, {
            asChild: true,
            children: /* @__PURE__ */ jsx65(Button, {
              variant: "ghost",
              size: "sm",
              children: /* @__PURE__ */ jsx65(SpriteIcon, {
                id: "Ellipsis",
                url: spriteUrl
              })
            })
          }),
          /* @__PURE__ */ jsxs34(DropdownMenuContent, {
            align: "end",
            className: "w-[200px]",
            children: [
              /* @__PURE__ */ jsx65(DropdownMenuLabel, {
                children: "Actions"
              }),
              /* @__PURE__ */ jsxs34(DropdownMenuGroup, {
                children: [
                  /* @__PURE__ */ jsx65(DropdownMenuItem, {
                    children: "Assign to..."
                  }),
                  /* @__PURE__ */ jsx65(DropdownMenuItem, {
                    children: "Set due date..."
                  }),
                  /* @__PURE__ */ jsx65(DropdownMenuSeparator, {}),
                  /* @__PURE__ */ jsxs34(DropdownMenuSub, {
                    children: [
                      /* @__PURE__ */ jsx65(DropdownMenuSubTrigger, {
                        spriteUrl,
                        children: "Apply label"
                      }),
                      /* @__PURE__ */ jsx65(DropdownMenuSubContent, {
                        className: "p-0",
                        children: /* @__PURE__ */ jsxs34(Command, {
                          children: [
                            /* @__PURE__ */ jsx65(CommandInput, {
                              spriteUrl,
                              placeholder: "Filter label...",
                              autoFocus: true,
                              className: "h-9"
                            }),
                            /* @__PURE__ */ jsxs34(CommandList, {
                              children: [
                                /* @__PURE__ */ jsx65(CommandEmpty, {
                                  children: "No label found."
                                }),
                                /* @__PURE__ */ jsx65(CommandGroup, {
                                  children: labels.map((label2) => /* @__PURE__ */ jsx65(CommandItem, {
                                    value: label2,
                                    onSelect: (value) => {
                                      setLabel(value);
                                      setOpen(false);
                                    },
                                    children: label2
                                  }, label2))
                                })
                              ]
                            })
                          ]
                        })
                      })
                    ]
                  }),
                  /* @__PURE__ */ jsx65(DropdownMenuSeparator, {}),
                  /* @__PURE__ */ jsxs34(DropdownMenuItem, {
                    className: "text-red-600",
                    children: [
                      "Delete",
                      /* @__PURE__ */ jsx65(DropdownMenuShortcut, {
                        children: "⌘⌫"
                      })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/examples/combobox-form.tsx
import clsx28 from "clsx";
import React9 from "react";
import { toast as toast3 } from "sonner";
import { jsx as jsx66, jsxs as jsxs35 } from "react/jsx-runtime";
var languages = [
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
  const [selectedLanguage, setSelectedLanguage] = React9.useState("");
  const [open, setOpen] = React9.useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const language = formData.get("language");
    toast3("You submitted the following values", {
      description: /* @__PURE__ */ jsx66("pre", {
        className: "mt-2 w-[320px] rounded-md bg-neutral-950 p-4",
        children: /* @__PURE__ */ jsx66("code", {
          className: "text-white",
          children: JSON.stringify({ language }, null, 2)
        })
      })
    });
  }
  return /* @__PURE__ */ jsxs35(Form, {
    onSubmit: handleSubmit,
    className: "space-y-6",
    children: [
      /* @__PURE__ */ jsx66(FormField, {
        name: "language",
        children: /* @__PURE__ */ jsxs35(FormItem, {
          className: "flex flex-col",
          children: [
            /* @__PURE__ */ jsx66(FormLabel, {
              children: "Language"
            }),
            /* @__PURE__ */ jsxs35(Popover, {
              open,
              onOpenChange: setOpen,
              children: [
                /* @__PURE__ */ jsx66(PopoverTrigger, {
                  asChild: true,
                  children: /* @__PURE__ */ jsx66(FormControl, {
                    children: /* @__PURE__ */ jsxs35(Button, {
                      variant: "outline",
                      role: "combobox",
                      "aria-expanded": open,
                      className: clsx28("w-[200px] justify-between", !selectedLanguage && "text-muted-foreground"),
                      children: [
                        selectedLanguage ? languages.find((language) => language.value === selectedLanguage)?.label : "Select language",
                        /* @__PURE__ */ jsx66(SpriteIcon, {
                          id: "ChevronsUpDown",
                          className: "opacity-50",
                          url: spriteUrl
                        })
                      ]
                    })
                  })
                }),
                /* @__PURE__ */ jsx66(PopoverContent, {
                  className: "w-[200px] p-0",
                  children: /* @__PURE__ */ jsxs35(Command, {
                    children: [
                      /* @__PURE__ */ jsx66(CommandInput, {
                        spriteUrl,
                        placeholder: "Search language...",
                        className: "h-9"
                      }),
                      /* @__PURE__ */ jsxs35(CommandList, {
                        children: [
                          /* @__PURE__ */ jsx66(CommandEmpty, {
                            children: "No language found."
                          }),
                          /* @__PURE__ */ jsx66(CommandGroup, {
                            children: languages.map((language) => /* @__PURE__ */ jsxs35(CommandItem, {
                              value: language.label,
                              onSelect: () => {
                                setSelectedLanguage(language.value);
                                setOpen(false);
                              },
                              children: [
                                language.label,
                                /* @__PURE__ */ jsx66(SpriteIcon, {
                                  id: "Check",
                                  className: clsx28("ml-auto", language.value === selectedLanguage ? "opacity-100" : "opacity-0"),
                                  url: spriteUrl
                                })
                              ]
                            }, language.value))
                          })
                        ]
                      })
                    ]
                  })
                })
              ]
            }),
            /* @__PURE__ */ jsx66("input", {
              type: "hidden",
              name: "language",
              value: selectedLanguage
            }),
            /* @__PURE__ */ jsx66(FormDescription, {
              children: "This is the language that will be used in the dashboard."
            }),
            /* @__PURE__ */ jsx66(FormMessage, {})
          ]
        })
      }),
      /* @__PURE__ */ jsx66(Button, {
        type: "submit",
        children: "Submit"
      })
    ]
  });
}

// src/shadcn-ui/examples/combobox-popover.tsx
import React10 from "react";
import { jsx as jsx67, jsxs as jsxs36, Fragment as Fragment2 } from "react/jsx-runtime";
var statuses = [
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
function ComboboxPopover({ spriteUrl }) {
  const [open, setOpen] = React10.useState(false);
  const [selectedStatus, setSelectedStatus] = React10.useState(null);
  return /* @__PURE__ */ jsxs36("div", {
    className: "flex items-center space-x-4",
    children: [
      /* @__PURE__ */ jsx67("p", {
        className: "text-muted-foreground text-sm",
        children: "Status"
      }),
      /* @__PURE__ */ jsxs36(Popover, {
        open,
        onOpenChange: setOpen,
        children: [
          /* @__PURE__ */ jsx67(PopoverTrigger, {
            asChild: true,
            children: /* @__PURE__ */ jsx67(Button, {
              variant: "outline",
              className: "w-[150px] justify-start",
              children: selectedStatus ? /* @__PURE__ */ jsx67(Fragment2, {
                children: selectedStatus.label
              }) : /* @__PURE__ */ jsx67(Fragment2, {
                children: "+ Set status"
              })
            })
          }),
          /* @__PURE__ */ jsx67(PopoverContent, {
            className: "p-0",
            side: "right",
            align: "start",
            children: /* @__PURE__ */ jsxs36(Command, {
              children: [
                /* @__PURE__ */ jsx67(CommandInput, {
                  spriteUrl,
                  placeholder: "Change status..."
                }),
                /* @__PURE__ */ jsxs36(CommandList, {
                  children: [
                    /* @__PURE__ */ jsx67(CommandEmpty, {
                      children: "No results found."
                    }),
                    /* @__PURE__ */ jsx67(CommandGroup, {
                      children: statuses.map((status) => /* @__PURE__ */ jsx67(CommandItem, {
                        value: status.value,
                        onSelect: (value) => {
                          setSelectedStatus(statuses.find((priority) => priority.value === value) || null);
                          setOpen(false);
                        },
                        children: status.label
                      }, status.value))
                    })
                  ]
                })
              ]
            })
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/components/context-menu.tsx
import clsx29 from "clsx";
import { ContextMenu as ContextMenuPrimitive } from "radix-ui";
import { jsx as jsx68, jsxs as jsxs37 } from "react/jsx-runtime";
function ContextMenu({ ...props }) {
  return /* @__PURE__ */ jsx68(ContextMenuPrimitive.Root, {
    "data-slot": "context-menu",
    ...props
  });
}
function ContextMenuTrigger({ ...props }) {
  return /* @__PURE__ */ jsx68(ContextMenuPrimitive.Trigger, {
    "data-slot": "context-menu-trigger",
    ...props
  });
}
function ContextMenuSub({ ...props }) {
  return /* @__PURE__ */ jsx68(ContextMenuPrimitive.Sub, {
    "data-slot": "context-menu-sub",
    ...props
  });
}
function ContextMenuRadioGroup({ ...props }) {
  return /* @__PURE__ */ jsx68(ContextMenuPrimitive.RadioGroup, {
    "data-slot": "context-menu-radio-group",
    ...props
  });
}
function ContextMenuSubTrigger({ className, inset, children, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsxs37(ContextMenuPrimitive.SubTrigger, {
    "data-slot": "context-menu-sub-trigger",
    "data-inset": inset,
    className: clsx29("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[inset]:pl-8 data-[state=open]:text-accent-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx68(SpriteIcon, {
        id: "ChevronRight",
        className: "ml-auto",
        url: spriteUrl
      })
    ]
  });
}
function ContextMenuSubContent({ className, ...props }) {
  return /* @__PURE__ */ jsx68(ContextMenuPrimitive.SubContent, {
    "data-slot": "context-menu-sub-content",
    className: clsx29("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=closed]:animate-out data-[state=open]:animate-in", className),
    ...props
  });
}
function ContextMenuContent({ className, ...props }) {
  return /* @__PURE__ */ jsx68(ContextMenuPrimitive.Portal, {
    children: /* @__PURE__ */ jsx68(ContextMenuPrimitive.Content, {
      "data-slot": "context-menu-content",
      className: clsx29("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=closed]:animate-out data-[state=open]:animate-in", className),
      ...props
    })
  });
}
function ContextMenuItem({ className, inset, variant = "default", ...props }) {
  return /* @__PURE__ */ jsx68(ContextMenuPrimitive.Item, {
    "data-slot": "context-menu-item",
    "data-inset": inset,
    "data-variant": variant,
    className: clsx29("data-[variant=destructive]:*:[svg]:!text-destructive relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[disabled]:opacity-50 data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props
  });
}
function ContextMenuCheckboxItem({ className, children, checked, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsxs37(ContextMenuPrimitive.CheckboxItem, {
    "data-slot": "context-menu-checkbox-item",
    className: clsx29("relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx68("span", {
        className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
        children: /* @__PURE__ */ jsx68(ContextMenuPrimitive.ItemIndicator, {
          children: /* @__PURE__ */ jsx68(SpriteIcon, {
            id: "Check",
            className: "size-4",
            url: spriteUrl
          })
        })
      }),
      children
    ]
  });
}
function ContextMenuRadioItem({ className, children, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsxs37(ContextMenuPrimitive.RadioItem, {
    "data-slot": "context-menu-radio-item",
    className: clsx29("relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx68("span", {
        className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
        children: /* @__PURE__ */ jsx68(ContextMenuPrimitive.ItemIndicator, {
          children: /* @__PURE__ */ jsx68(SpriteIcon, {
            id: "Circle",
            className: "size-2 fill-current",
            url: spriteUrl
          })
        })
      }),
      children
    ]
  });
}
function ContextMenuLabel({ className, inset, ...props }) {
  return /* @__PURE__ */ jsx68(ContextMenuPrimitive.Label, {
    "data-slot": "context-menu-label",
    "data-inset": inset,
    className: clsx29("px-2 py-1.5 font-medium text-foreground text-sm data-[inset]:pl-8", className),
    ...props
  });
}
function ContextMenuSeparator({ className, ...props }) {
  return /* @__PURE__ */ jsx68(ContextMenuPrimitive.Separator, {
    "data-slot": "context-menu-separator",
    className: clsx29("-mx-1 my-1 h-px bg-border", className),
    ...props
  });
}
function ContextMenuShortcut({ className, ...props }) {
  return /* @__PURE__ */ jsx68("span", {
    "data-slot": "context-menu-shortcut",
    className: clsx29("ml-auto text-muted-foreground text-xs tracking-widest", className),
    ...props
  });
}

// src/shadcn-ui/examples/context-menu-demo.tsx
import { jsx as jsx69, jsxs as jsxs38 } from "react/jsx-runtime";
function ContextMenuDemo({ spriteUrl }) {
  return /* @__PURE__ */ jsxs38(ContextMenu, {
    children: [
      /* @__PURE__ */ jsx69(ContextMenuTrigger, {
        className: "flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm",
        children: "Right click here"
      }),
      /* @__PURE__ */ jsxs38(ContextMenuContent, {
        className: "w-52",
        children: [
          /* @__PURE__ */ jsxs38(ContextMenuItem, {
            inset: true,
            children: [
              "Back",
              /* @__PURE__ */ jsx69(ContextMenuShortcut, {
                children: "⌘["
              })
            ]
          }),
          /* @__PURE__ */ jsxs38(ContextMenuItem, {
            inset: true,
            disabled: true,
            children: [
              "Forward",
              /* @__PURE__ */ jsx69(ContextMenuShortcut, {
                children: "⌘]"
              })
            ]
          }),
          /* @__PURE__ */ jsxs38(ContextMenuItem, {
            inset: true,
            children: [
              "Reload",
              /* @__PURE__ */ jsx69(ContextMenuShortcut, {
                children: "⌘R"
              })
            ]
          }),
          /* @__PURE__ */ jsxs38(ContextMenuSub, {
            children: [
              /* @__PURE__ */ jsx69(ContextMenuSubTrigger, {
                spriteUrl,
                inset: true,
                children: "More Tools"
              }),
              /* @__PURE__ */ jsxs38(ContextMenuSubContent, {
                className: "w-44",
                children: [
                  /* @__PURE__ */ jsx69(ContextMenuItem, {
                    children: "Save Page..."
                  }),
                  /* @__PURE__ */ jsx69(ContextMenuItem, {
                    children: "Create Shortcut..."
                  }),
                  /* @__PURE__ */ jsx69(ContextMenuItem, {
                    children: "Name Window..."
                  }),
                  /* @__PURE__ */ jsx69(ContextMenuSeparator, {}),
                  /* @__PURE__ */ jsx69(ContextMenuItem, {
                    children: "Developer Tools"
                  }),
                  /* @__PURE__ */ jsx69(ContextMenuSeparator, {}),
                  /* @__PURE__ */ jsx69(ContextMenuItem, {
                    variant: "destructive",
                    children: "Delete"
                  })
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsx69(ContextMenuSeparator, {}),
          /* @__PURE__ */ jsx69(ContextMenuCheckboxItem, {
            spriteUrl,
            checked: true,
            children: "Show Bookmarks"
          }),
          /* @__PURE__ */ jsx69(ContextMenuCheckboxItem, {
            spriteUrl,
            children: "Show Full URLs"
          }),
          /* @__PURE__ */ jsx69(ContextMenuSeparator, {}),
          /* @__PURE__ */ jsxs38(ContextMenuRadioGroup, {
            value: "pedro",
            children: [
              /* @__PURE__ */ jsx69(ContextMenuLabel, {
                inset: true,
                children: "People"
              }),
              /* @__PURE__ */ jsx69(ContextMenuRadioItem, {
                spriteUrl,
                value: "pedro",
                children: "Pedro Duarte"
              }),
              /* @__PURE__ */ jsx69(ContextMenuRadioItem, {
                spriteUrl,
                value: "colm",
                children: "Colm Tuite"
              })
            ]
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/examples/dialog-close-button.tsx
import { jsx as jsx70, jsxs as jsxs39 } from "react/jsx-runtime";
function DialogCloseButton({ spriteUrl }) {
  return /* @__PURE__ */ jsxs39(Dialog, {
    children: [
      /* @__PURE__ */ jsx70(DialogTrigger, {
        asChild: true,
        children: /* @__PURE__ */ jsx70(Button, {
          variant: "outline",
          children: "Share"
        })
      }),
      /* @__PURE__ */ jsxs39(DialogContent, {
        spriteUrl,
        className: "sm:max-w-md",
        children: [
          /* @__PURE__ */ jsxs39(DialogHeader, {
            children: [
              /* @__PURE__ */ jsx70(DialogTitle, {
                children: "Share link"
              }),
              /* @__PURE__ */ jsx70(DialogDescription, {
                children: "Anyone who has this link will be able to view this."
              })
            ]
          }),
          /* @__PURE__ */ jsx70("div", {
            className: "flex items-center gap-2",
            children: /* @__PURE__ */ jsxs39("div", {
              className: "grid flex-1 gap-2",
              children: [
                /* @__PURE__ */ jsx70(Label, {
                  htmlFor: "link",
                  className: "sr-only",
                  children: "Link"
                }),
                /* @__PURE__ */ jsx70(Input, {
                  id: "link",
                  defaultValue: "https://ui.shadcn.com/docs/installation",
                  readOnly: true
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx70(DialogFooter, {
            className: "sm:justify-start",
            children: /* @__PURE__ */ jsx70(DialogClose, {
              asChild: true,
              children: /* @__PURE__ */ jsx70(Button, {
                type: "button",
                variant: "secondary",
                children: "Close"
              })
            })
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/examples/dialog-demo.tsx
import { jsx as jsx71, jsxs as jsxs40 } from "react/jsx-runtime";
function DialogDemo({ spriteUrl }) {
  return /* @__PURE__ */ jsx71(Dialog, {
    children: /* @__PURE__ */ jsxs40("form", {
      children: [
        /* @__PURE__ */ jsx71(DialogTrigger, {
          asChild: true,
          children: /* @__PURE__ */ jsx71(Button, {
            variant: "outline",
            children: "Open Dialog"
          })
        }),
        /* @__PURE__ */ jsxs40(DialogContent, {
          spriteUrl,
          className: "sm:max-w-[425px]",
          children: [
            /* @__PURE__ */ jsxs40(DialogHeader, {
              children: [
                /* @__PURE__ */ jsx71(DialogTitle, {
                  children: "Edit profile"
                }),
                /* @__PURE__ */ jsx71(DialogDescription, {
                  children: "Make changes to your profile here. Click save when you're done."
                })
              ]
            }),
            /* @__PURE__ */ jsxs40("div", {
              className: "grid gap-4",
              children: [
                /* @__PURE__ */ jsxs40("div", {
                  className: "grid gap-3",
                  children: [
                    /* @__PURE__ */ jsx71(Label, {
                      htmlFor: "name-1",
                      children: "Name"
                    }),
                    /* @__PURE__ */ jsx71(Input, {
                      id: "name-1",
                      name: "name",
                      defaultValue: "Pedro Duarte"
                    })
                  ]
                }),
                /* @__PURE__ */ jsxs40("div", {
                  className: "grid gap-3",
                  children: [
                    /* @__PURE__ */ jsx71(Label, {
                      htmlFor: "username-1",
                      children: "Username"
                    }),
                    /* @__PURE__ */ jsx71(Input, {
                      id: "username-1",
                      name: "username",
                      defaultValue: "@peduarte"
                    })
                  ]
                })
              ]
            }),
            /* @__PURE__ */ jsxs40(DialogFooter, {
              children: [
                /* @__PURE__ */ jsx71(DialogClose, {
                  asChild: true,
                  children: /* @__PURE__ */ jsx71(Button, {
                    variant: "outline",
                    children: "Cancel"
                  })
                }),
                /* @__PURE__ */ jsx71(Button, {
                  type: "submit",
                  children: "Save changes"
                })
              ]
            })
          ]
        })
      ]
    })
  });
}

// src/shadcn-ui/examples/dropdown-menu-checkboxes.tsx
import React11 from "react";
import { jsx as jsx72, jsxs as jsxs41 } from "react/jsx-runtime";
function DropdownMenuCheckboxes({ spriteUrl }) {
  const [showStatusBar, setShowStatusBar] = React11.useState(true);
  const [showActivityBar, setShowActivityBar] = React11.useState(false);
  const [showPanel, setShowPanel] = React11.useState(false);
  return /* @__PURE__ */ jsxs41(DropdownMenu, {
    children: [
      /* @__PURE__ */ jsx72(DropdownMenuTrigger, {
        asChild: true,
        children: /* @__PURE__ */ jsx72(Button, {
          variant: "outline",
          children: "Open"
        })
      }),
      /* @__PURE__ */ jsxs41(DropdownMenuContent, {
        className: "w-56",
        children: [
          /* @__PURE__ */ jsx72(DropdownMenuLabel, {
            children: "Appearance"
          }),
          /* @__PURE__ */ jsx72(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsx72(DropdownMenuCheckboxItem, {
            spriteUrl,
            checked: showStatusBar,
            onCheckedChange: setShowStatusBar,
            children: "Status Bar"
          }),
          /* @__PURE__ */ jsx72(DropdownMenuCheckboxItem, {
            spriteUrl,
            checked: showActivityBar,
            onCheckedChange: setShowActivityBar,
            disabled: true,
            children: "Activity Bar"
          }),
          /* @__PURE__ */ jsx72(DropdownMenuCheckboxItem, {
            spriteUrl,
            checked: showPanel,
            onCheckedChange: setShowPanel,
            children: "Panel"
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/examples/dropdown-menu-demo.tsx
import { jsx as jsx73, jsxs as jsxs42 } from "react/jsx-runtime";
function DropdownMenuDemo({ spriteUrl }) {
  return /* @__PURE__ */ jsxs42(DropdownMenu, {
    children: [
      /* @__PURE__ */ jsx73(DropdownMenuTrigger, {
        asChild: true,
        children: /* @__PURE__ */ jsx73(Button, {
          variant: "outline",
          children: "Open"
        })
      }),
      /* @__PURE__ */ jsxs42(DropdownMenuContent, {
        className: "w-56",
        align: "start",
        children: [
          /* @__PURE__ */ jsx73(DropdownMenuLabel, {
            children: "My Account"
          }),
          /* @__PURE__ */ jsxs42(DropdownMenuGroup, {
            children: [
              /* @__PURE__ */ jsxs42(DropdownMenuItem, {
                children: [
                  "Profile",
                  /* @__PURE__ */ jsx73(DropdownMenuShortcut, {
                    children: "⇧⌘P"
                  })
                ]
              }),
              /* @__PURE__ */ jsxs42(DropdownMenuItem, {
                children: [
                  "Billing",
                  /* @__PURE__ */ jsx73(DropdownMenuShortcut, {
                    children: "⌘B"
                  })
                ]
              }),
              /* @__PURE__ */ jsxs42(DropdownMenuItem, {
                children: [
                  "Settings",
                  /* @__PURE__ */ jsx73(DropdownMenuShortcut, {
                    children: "⌘S"
                  })
                ]
              }),
              /* @__PURE__ */ jsxs42(DropdownMenuItem, {
                children: [
                  "Keyboard shortcuts",
                  /* @__PURE__ */ jsx73(DropdownMenuShortcut, {
                    children: "⌘K"
                  })
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsx73(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsxs42(DropdownMenuGroup, {
            children: [
              /* @__PURE__ */ jsx73(DropdownMenuItem, {
                children: "Team"
              }),
              /* @__PURE__ */ jsxs42(DropdownMenuSub, {
                children: [
                  /* @__PURE__ */ jsx73(DropdownMenuSubTrigger, {
                    spriteUrl,
                    children: "Invite users"
                  }),
                  /* @__PURE__ */ jsx73(DropdownMenuPortal, {
                    children: /* @__PURE__ */ jsxs42(DropdownMenuSubContent, {
                      children: [
                        /* @__PURE__ */ jsx73(DropdownMenuItem, {
                          children: "Email"
                        }),
                        /* @__PURE__ */ jsx73(DropdownMenuItem, {
                          children: "Message"
                        }),
                        /* @__PURE__ */ jsx73(DropdownMenuSeparator, {}),
                        /* @__PURE__ */ jsx73(DropdownMenuItem, {
                          children: "More..."
                        })
                      ]
                    })
                  })
                ]
              }),
              /* @__PURE__ */ jsxs42(DropdownMenuItem, {
                children: [
                  "New Team",
                  /* @__PURE__ */ jsx73(DropdownMenuShortcut, {
                    children: "⌘+T"
                  })
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsx73(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsx73(DropdownMenuItem, {
            children: "GitHub"
          }),
          /* @__PURE__ */ jsx73(DropdownMenuItem, {
            children: "Support"
          }),
          /* @__PURE__ */ jsx73(DropdownMenuItem, {
            disabled: true,
            children: "API"
          }),
          /* @__PURE__ */ jsx73(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsxs42(DropdownMenuItem, {
            children: [
              "Log out",
              /* @__PURE__ */ jsx73(DropdownMenuShortcut, {
                children: "⇧⌘Q"
              })
            ]
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/examples/dropdown-menu-radio-group.tsx
import React12 from "react";
import { jsx as jsx74, jsxs as jsxs43 } from "react/jsx-runtime";
function DropdownMenuRadioGroupDemo({ spriteUrl }) {
  const [position, setPosition] = React12.useState("bottom");
  return /* @__PURE__ */ jsxs43(DropdownMenu, {
    children: [
      /* @__PURE__ */ jsx74(DropdownMenuTrigger, {
        asChild: true,
        children: /* @__PURE__ */ jsx74(Button, {
          variant: "outline",
          children: "Open"
        })
      }),
      /* @__PURE__ */ jsxs43(DropdownMenuContent, {
        className: "w-56",
        children: [
          /* @__PURE__ */ jsx74(DropdownMenuLabel, {
            children: "Panel Position"
          }),
          /* @__PURE__ */ jsx74(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsxs43(DropdownMenuRadioGroup, {
            value: position,
            onValueChange: setPosition,
            children: [
              /* @__PURE__ */ jsx74(DropdownMenuRadioItem, {
                spriteUrl,
                value: "top",
                children: "Top"
              }),
              /* @__PURE__ */ jsx74(DropdownMenuRadioItem, {
                spriteUrl,
                value: "bottom",
                children: "Bottom"
              }),
              /* @__PURE__ */ jsx74(DropdownMenuRadioItem, {
                spriteUrl,
                value: "right",
                children: "Right"
              })
            ]
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/components/hover-card.tsx
import clsx30 from "clsx";
import { HoverCard as HoverCardPrimitive } from "radix-ui";
import { jsx as jsx75 } from "react/jsx-runtime";
function HoverCard({ ...props }) {
  return /* @__PURE__ */ jsx75(HoverCardPrimitive.Root, {
    "data-slot": "hover-card",
    ...props
  });
}
function HoverCardTrigger({ ...props }) {
  return /* @__PURE__ */ jsx75(HoverCardPrimitive.Trigger, {
    "data-slot": "hover-card-trigger",
    ...props
  });
}
function HoverCardContent({ className, align = "center", sideOffset = 4, ...props }) {
  return /* @__PURE__ */ jsx75(HoverCardPrimitive.Portal, {
    "data-slot": "hover-card-portal",
    children: /* @__PURE__ */ jsx75(HoverCardPrimitive.Content, {
      "data-slot": "hover-card-content",
      align,
      sideOffset,
      className: clsx30("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[state=closed]:animate-out data-[state=open]:animate-in", className),
      ...props
    })
  });
}

// src/shadcn-ui/examples/hover-card-demo.tsx
import { jsx as jsx76, jsxs as jsxs44 } from "react/jsx-runtime";
function HoverCardDemo() {
  return /* @__PURE__ */ jsxs44(HoverCard, {
    children: [
      /* @__PURE__ */ jsx76(HoverCardTrigger, {
        asChild: true,
        children: /* @__PURE__ */ jsx76(Button, {
          variant: "link",
          children: "@nextjs"
        })
      }),
      /* @__PURE__ */ jsx76(HoverCardContent, {
        className: "w-80",
        children: /* @__PURE__ */ jsxs44("div", {
          className: "flex justify-between gap-4",
          children: [
            /* @__PURE__ */ jsxs44(Avatar, {
              children: [
                /* @__PURE__ */ jsx76(AvatarImage, {
                  src: "https://github.com/vercel.png"
                }),
                /* @__PURE__ */ jsx76(AvatarFallback, {
                  children: "VC"
                })
              ]
            }),
            /* @__PURE__ */ jsxs44("div", {
              className: "space-y-1",
              children: [
                /* @__PURE__ */ jsx76("h4", {
                  className: "font-semibold text-sm",
                  children: "@nextjs"
                }),
                /* @__PURE__ */ jsx76("p", {
                  className: "text-sm",
                  children: "The React Framework – created and maintained by @vercel."
                }),
                /* @__PURE__ */ jsx76("div", {
                  className: "text-muted-foreground text-xs",
                  children: "Joined December 2021"
                })
              ]
            })
          ]
        })
      })
    ]
  });
}

// src/shadcn-ui/examples/input-demo.tsx
import { jsx as jsx77 } from "react/jsx-runtime";
function InputDemo() {
  return /* @__PURE__ */ jsx77(Input, {
    type: "email",
    placeholder: "Email"
  });
}

// src/shadcn-ui/examples/input-disabled.tsx
import { jsx as jsx78 } from "react/jsx-runtime";
function InputDisabled() {
  return /* @__PURE__ */ jsx78(Input, {
    disabled: true,
    type: "email",
    placeholder: "Email"
  });
}

// src/shadcn-ui/examples/input-file.tsx
import { jsx as jsx79, jsxs as jsxs45 } from "react/jsx-runtime";
function InputFile() {
  return /* @__PURE__ */ jsxs45("div", {
    className: "grid w-full max-w-sm items-center gap-3",
    children: [
      /* @__PURE__ */ jsx79(Label, {
        htmlFor: "picture",
        children: "Picture"
      }),
      /* @__PURE__ */ jsx79(Input, {
        id: "picture",
        type: "file"
      })
    ]
  });
}

// src/shadcn-ui/examples/input-form.tsx
import { toast as toast4 } from "sonner";
import { jsx as jsx80, jsxs as jsxs46 } from "react/jsx-runtime";
function InputForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    toast4("You submitted the following values", {
      description: /* @__PURE__ */ jsx80("pre", {
        className: "mt-2 w-[320px] rounded-md bg-neutral-950 p-4",
        children: /* @__PURE__ */ jsx80("code", {
          className: "text-white",
          children: JSON.stringify({ username }, null, 2)
        })
      })
    });
  }
  return /* @__PURE__ */ jsxs46(Form, {
    onSubmit: handleSubmit,
    className: "w-2/3 space-y-6",
    children: [
      /* @__PURE__ */ jsx80(FormField, {
        name: "username",
        children: /* @__PURE__ */ jsxs46(FormItem, {
          children: [
            /* @__PURE__ */ jsx80(FormLabel, {
              children: "Username"
            }),
            /* @__PURE__ */ jsx80(FormControl, {
              children: /* @__PURE__ */ jsx80(Input, {
                name: "username",
                placeholder: "shadcn"
              })
            }),
            /* @__PURE__ */ jsx80(FormDescription, {
              children: "This is your public display name."
            }),
            /* @__PURE__ */ jsx80(FormMessage, {})
          ]
        })
      }),
      /* @__PURE__ */ jsx80(Button, {
        type: "submit",
        children: "Submit"
      })
    ]
  });
}

// src/shadcn-ui/examples/input-with-button.tsx
import { jsx as jsx81, jsxs as jsxs47 } from "react/jsx-runtime";
function InputWithButton() {
  return /* @__PURE__ */ jsxs47("div", {
    className: "flex w-full max-w-sm items-center gap-2",
    children: [
      /* @__PURE__ */ jsx81(Input, {
        type: "email",
        placeholder: "Email"
      }),
      /* @__PURE__ */ jsx81(Button, {
        type: "submit",
        variant: "outline",
        children: "Subscribe"
      })
    ]
  });
}

// src/shadcn-ui/examples/input-with-label.tsx
import { jsx as jsx82, jsxs as jsxs48 } from "react/jsx-runtime";
function InputWithLabel() {
  return /* @__PURE__ */ jsxs48("div", {
    className: "grid w-full max-w-sm items-center gap-3",
    children: [
      /* @__PURE__ */ jsx82(Label, {
        htmlFor: "inputemail",
        children: "Email"
      }),
      /* @__PURE__ */ jsx82(Input, {
        type: "inputemail",
        id: "email",
        placeholder: "Email"
      })
    ]
  });
}

// src/shadcn-ui/examples/input-with-text.tsx
import { jsx as jsx83, jsxs as jsxs49 } from "react/jsx-runtime";
function InputWithText() {
  return /* @__PURE__ */ jsxs49("div", {
    className: "grid w-full max-w-sm items-center gap-3",
    children: [
      /* @__PURE__ */ jsx83(Label, {
        htmlFor: "email-2",
        children: "Email"
      }),
      /* @__PURE__ */ jsx83(Input, {
        type: "email",
        id: "email-2",
        placeholder: "Email"
      }),
      /* @__PURE__ */ jsx83("p", {
        className: "text-muted-foreground text-sm",
        children: "Enter your email address."
      })
    ]
  });
}

// src/shadcn-ui/examples/label-demo.tsx
import { jsx as jsx84, jsxs as jsxs50 } from "react/jsx-runtime";
function LabelDemo({ spriteUrl }) {
  return /* @__PURE__ */ jsx84("div", {
    children: /* @__PURE__ */ jsxs50("div", {
      className: "flex items-center space-x-2",
      children: [
        /* @__PURE__ */ jsx84(Checkbox, {
          spriteUrl,
          id: "terms"
        }),
        /* @__PURE__ */ jsx84(Label, {
          htmlFor: "terms",
          children: "Accept terms and conditions"
        })
      ]
    })
  });
}

// src/shadcn-ui/examples/menubar-demo.tsx
import { jsx as jsx85, jsxs as jsxs51 } from "react/jsx-runtime";
function MenubarDemo({ spriteUrl }) {
  return /* @__PURE__ */ jsxs51(Menubar, {
    children: [
      /* @__PURE__ */ jsxs51(MenubarMenu, {
        children: [
          /* @__PURE__ */ jsx85(MenubarTrigger, {
            children: "File"
          }),
          /* @__PURE__ */ jsxs51(MenubarContent, {
            children: [
              /* @__PURE__ */ jsxs51(MenubarItem, {
                children: [
                  "New Tab ",
                  /* @__PURE__ */ jsx85(MenubarShortcut, {
                    children: "⌘T"
                  })
                ]
              }),
              /* @__PURE__ */ jsxs51(MenubarItem, {
                children: [
                  "New Window ",
                  /* @__PURE__ */ jsx85(MenubarShortcut, {
                    children: "⌘N"
                  })
                ]
              }),
              /* @__PURE__ */ jsx85(MenubarItem, {
                disabled: true,
                children: "New Incognito Window"
              }),
              /* @__PURE__ */ jsx85(MenubarSeparator, {}),
              /* @__PURE__ */ jsxs51(MenubarSub, {
                children: [
                  /* @__PURE__ */ jsx85(MenubarSubTrigger, {
                    spriteUrl,
                    children: "Share"
                  }),
                  /* @__PURE__ */ jsxs51(MenubarSubContent, {
                    children: [
                      /* @__PURE__ */ jsx85(MenubarItem, {
                        children: "Email link"
                      }),
                      /* @__PURE__ */ jsx85(MenubarItem, {
                        children: "Messages"
                      }),
                      /* @__PURE__ */ jsx85(MenubarItem, {
                        children: "Notes"
                      })
                    ]
                  })
                ]
              }),
              /* @__PURE__ */ jsx85(MenubarSeparator, {}),
              /* @__PURE__ */ jsxs51(MenubarItem, {
                children: [
                  "Print... ",
                  /* @__PURE__ */ jsx85(MenubarShortcut, {
                    children: "⌘P"
                  })
                ]
              })
            ]
          })
        ]
      }),
      /* @__PURE__ */ jsxs51(MenubarMenu, {
        children: [
          /* @__PURE__ */ jsx85(MenubarTrigger, {
            children: "Edit"
          }),
          /* @__PURE__ */ jsxs51(MenubarContent, {
            children: [
              /* @__PURE__ */ jsxs51(MenubarItem, {
                children: [
                  "Undo ",
                  /* @__PURE__ */ jsx85(MenubarShortcut, {
                    children: "⌘Z"
                  })
                ]
              }),
              /* @__PURE__ */ jsxs51(MenubarItem, {
                children: [
                  "Redo ",
                  /* @__PURE__ */ jsx85(MenubarShortcut, {
                    children: "⇧⌘Z"
                  })
                ]
              }),
              /* @__PURE__ */ jsx85(MenubarSeparator, {}),
              /* @__PURE__ */ jsxs51(MenubarSub, {
                children: [
                  /* @__PURE__ */ jsx85(MenubarSubTrigger, {
                    spriteUrl,
                    children: "Find"
                  }),
                  /* @__PURE__ */ jsxs51(MenubarSubContent, {
                    children: [
                      /* @__PURE__ */ jsx85(MenubarItem, {
                        children: "Search the web"
                      }),
                      /* @__PURE__ */ jsx85(MenubarSeparator, {}),
                      /* @__PURE__ */ jsx85(MenubarItem, {
                        children: "Find..."
                      }),
                      /* @__PURE__ */ jsx85(MenubarItem, {
                        children: "Find Next"
                      }),
                      /* @__PURE__ */ jsx85(MenubarItem, {
                        children: "Find Previous"
                      })
                    ]
                  })
                ]
              }),
              /* @__PURE__ */ jsx85(MenubarSeparator, {}),
              /* @__PURE__ */ jsx85(MenubarItem, {
                children: "Cut"
              }),
              /* @__PURE__ */ jsx85(MenubarItem, {
                children: "Copy"
              }),
              /* @__PURE__ */ jsx85(MenubarItem, {
                children: "Paste"
              })
            ]
          })
        ]
      }),
      /* @__PURE__ */ jsxs51(MenubarMenu, {
        children: [
          /* @__PURE__ */ jsx85(MenubarTrigger, {
            children: "View"
          }),
          /* @__PURE__ */ jsxs51(MenubarContent, {
            children: [
              /* @__PURE__ */ jsx85(MenubarCheckboxItem, {
                spriteUrl,
                children: "Always Show Bookmarks Bar"
              }),
              /* @__PURE__ */ jsx85(MenubarCheckboxItem, {
                spriteUrl,
                checked: true,
                children: "Always Show Full URLs"
              }),
              /* @__PURE__ */ jsx85(MenubarSeparator, {}),
              /* @__PURE__ */ jsxs51(MenubarItem, {
                inset: true,
                children: [
                  "Reload ",
                  /* @__PURE__ */ jsx85(MenubarShortcut, {
                    children: "⌘R"
                  })
                ]
              }),
              /* @__PURE__ */ jsxs51(MenubarItem, {
                disabled: true,
                inset: true,
                children: [
                  "Force Reload ",
                  /* @__PURE__ */ jsx85(MenubarShortcut, {
                    children: "⇧⌘R"
                  })
                ]
              }),
              /* @__PURE__ */ jsx85(MenubarSeparator, {}),
              /* @__PURE__ */ jsx85(MenubarItem, {
                inset: true,
                children: "Toggle Fullscreen"
              }),
              /* @__PURE__ */ jsx85(MenubarSeparator, {}),
              /* @__PURE__ */ jsx85(MenubarItem, {
                inset: true,
                children: "Hide Sidebar"
              })
            ]
          })
        ]
      }),
      /* @__PURE__ */ jsxs51(MenubarMenu, {
        children: [
          /* @__PURE__ */ jsx85(MenubarTrigger, {
            children: "Profiles"
          }),
          /* @__PURE__ */ jsxs51(MenubarContent, {
            children: [
              /* @__PURE__ */ jsxs51(MenubarRadioGroup, {
                value: "benoit",
                children: [
                  /* @__PURE__ */ jsx85(MenubarRadioItem, {
                    spriteUrl,
                    value: "andy",
                    children: "Andy"
                  }),
                  /* @__PURE__ */ jsx85(MenubarRadioItem, {
                    spriteUrl,
                    value: "benoit",
                    children: "Benoit"
                  }),
                  /* @__PURE__ */ jsx85(MenubarRadioItem, {
                    spriteUrl,
                    value: "Luis",
                    children: "Luis"
                  })
                ]
              }),
              /* @__PURE__ */ jsx85(MenubarSeparator, {}),
              /* @__PURE__ */ jsx85(MenubarItem, {
                inset: true,
                children: "Edit..."
              }),
              /* @__PURE__ */ jsx85(MenubarSeparator, {}),
              /* @__PURE__ */ jsx85(MenubarItem, {
                inset: true,
                children: "Add Profile..."
              })
            ]
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/examples/mode-toggle.tsx
import { useTheme as useTheme2 } from "next-themes";
import { jsx as jsx86, jsxs as jsxs52 } from "react/jsx-runtime";
function ModeToggle({ spriteUrl }) {
  const { setTheme } = useTheme2();
  return /* @__PURE__ */ jsxs52(DropdownMenu, {
    children: [
      /* @__PURE__ */ jsx86(DropdownMenuTrigger, {
        asChild: true,
        children: /* @__PURE__ */ jsxs52(Button, {
          variant: "outline",
          size: "icon",
          children: [
            /* @__PURE__ */ jsx86(SpriteIcon, {
              id: "Sun",
              className: "dark:-rotate-90 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:scale-0",
              url: spriteUrl
            }),
            /* @__PURE__ */ jsx86(SpriteIcon, {
              id: "Moon",
              className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100",
              url: spriteUrl
            }),
            /* @__PURE__ */ jsx86("span", {
              className: "sr-only",
              children: "Toggle theme"
            })
          ]
        })
      }),
      /* @__PURE__ */ jsxs52(DropdownMenuContent, {
        align: "end",
        children: [
          /* @__PURE__ */ jsx86(DropdownMenuItem, {
            onClick: () => setTheme("light"),
            children: "Light"
          }),
          /* @__PURE__ */ jsx86(DropdownMenuItem, {
            onClick: () => setTheme("dark"),
            children: "Dark"
          }),
          /* @__PURE__ */ jsx86(DropdownMenuItem, {
            onClick: () => setTheme("system"),
            children: "System"
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/components/navigation-menu.tsx
import { cva as cva4 } from "class-variance-authority";
import clsx31 from "clsx";
import { NavigationMenu as NavigationMenuPrimitive } from "radix-ui";
import { jsx as jsx87, jsxs as jsxs53 } from "react/jsx-runtime";
function NavigationMenu({ className, children, viewport = true, ...props }) {
  return /* @__PURE__ */ jsxs53(NavigationMenuPrimitive.Root, {
    "data-slot": "navigation-menu",
    "data-viewport": viewport,
    className: clsx31("group/navigation-menu relative flex max-w-max flex-1 items-center justify-center", className),
    ...props,
    children: [
      children,
      viewport && /* @__PURE__ */ jsx87(NavigationMenuViewport, {})
    ]
  });
}
function NavigationMenuList({ className, ...props }) {
  return /* @__PURE__ */ jsx87(NavigationMenuPrimitive.List, {
    "data-slot": "navigation-menu-list",
    className: clsx31("group flex flex-1 list-none items-center justify-center gap-1", className),
    ...props
  });
}
function NavigationMenuItem({ className, ...props }) {
  return /* @__PURE__ */ jsx87(NavigationMenuPrimitive.Item, {
    "data-slot": "navigation-menu-item",
    className: clsx31("relative", className),
    ...props
  });
}
var navigationMenuTriggerStyle = cva4("group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1");
function NavigationMenuTrigger({ className, children, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsxs53(NavigationMenuPrimitive.Trigger, {
    "data-slot": "navigation-menu-trigger",
    className: clsx31(navigationMenuTriggerStyle(), "group", className),
    ...props,
    children: [
      children,
      " ",
      /* @__PURE__ */ jsx87(SpriteIcon, {
        id: "ChevronDown",
        url: spriteUrl,
        className: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
        "aria-hidden": "true"
      })
    ]
  });
}
function NavigationMenuContent({ className, ...props }) {
  return /* @__PURE__ */ jsx87(NavigationMenuPrimitive.Content, {
    "data-slot": "navigation-menu-content",
    className: clsx31("data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out md:absolute md:w-auto", "group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 **:data-[slot=navigation-menu-link]:focus:outline-none **:data-[slot=navigation-menu-link]:focus:ring-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in", className),
    ...props
  });
}
function NavigationMenuViewport({ className, ...props }) {
  return /* @__PURE__ */ jsx87("div", {
    className: clsx31("absolute top-full left-0 isolate z-50 flex justify-center"),
    children: /* @__PURE__ */ jsx87(NavigationMenuPrimitive.Viewport, {
      "data-slot": "navigation-menu-viewport",
      className: clsx31("data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-top-center overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=closed]:animate-out data-[state=open]:animate-in md:w-[var(--radix-navigation-menu-viewport-width)]", className),
      ...props
    })
  });
}
function NavigationMenuLink({ className, ...props }) {
  return /* @__PURE__ */ jsx87(NavigationMenuPrimitive.Link, {
    "data-slot": "navigation-menu-link",
    className: clsx31("flex flex-col gap-1 rounded-sm p-2 text-sm outline-none transition-all hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", className),
    ...props
  });
}

// src/shadcn-ui/examples/navigation-menu-demo.tsx
import { jsx as jsx88, jsxs as jsxs54 } from "react/jsx-runtime";
var components = [
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
  return /* @__PURE__ */ jsx88(NavigationMenu, {
    viewport: false,
    children: /* @__PURE__ */ jsxs54(NavigationMenuList, {
      children: [
        /* @__PURE__ */ jsxs54(NavigationMenuItem, {
          children: [
            /* @__PURE__ */ jsx88(NavigationMenuTrigger, {
              spriteUrl,
              children: "Home"
            }),
            /* @__PURE__ */ jsx88(NavigationMenuContent, {
              children: /* @__PURE__ */ jsxs54("ul", {
                className: "grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]",
                children: [
                  /* @__PURE__ */ jsx88("li", {
                    className: "row-span-3",
                    children: /* @__PURE__ */ jsx88(NavigationMenuLink, {
                      asChild: true,
                      children: /* @__PURE__ */ jsxs54("a", {
                        className: "flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-6 no-underline outline-hidden focus:shadow-md",
                        href: "/",
                        children: [
                          /* @__PURE__ */ jsx88("div", {
                            className: "mt-4 mb-2 font-medium text-lg",
                            children: "shadcn/ui"
                          }),
                          /* @__PURE__ */ jsx88("p", {
                            className: "text-muted-foreground text-sm leading-tight",
                            children: "Beautifully designed components built with Tailwind CSS."
                          })
                        ]
                      })
                    })
                  }),
                  /* @__PURE__ */ jsx88(ListItem, {
                    href: "/docs",
                    title: "Introduction",
                    children: "Re-usable components built using Radix UI and Tailwind CSS."
                  }),
                  /* @__PURE__ */ jsx88(ListItem, {
                    href: "/docs/installation",
                    title: "Installation",
                    children: "How to install dependencies and structure your app."
                  }),
                  /* @__PURE__ */ jsx88(ListItem, {
                    href: "/docs/primitives/typography",
                    title: "Typography",
                    children: "Styles for headings, paragraphs, lists...etc"
                  })
                ]
              })
            })
          ]
        }),
        /* @__PURE__ */ jsxs54(NavigationMenuItem, {
          children: [
            /* @__PURE__ */ jsx88(NavigationMenuTrigger, {
              spriteUrl,
              children: "Components"
            }),
            /* @__PURE__ */ jsx88(NavigationMenuContent, {
              children: /* @__PURE__ */ jsx88("ul", {
                className: "grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]",
                children: components.map((component) => /* @__PURE__ */ jsx88(ListItem, {
                  title: component.title,
                  href: component.href,
                  children: component.description
                }, component.title))
              })
            })
          ]
        }),
        /* @__PURE__ */ jsx88(NavigationMenuItem, {
          children: /* @__PURE__ */ jsx88(NavigationMenuLink, {
            asChild: true,
            className: navigationMenuTriggerStyle(),
            children: /* @__PURE__ */ jsx88(Link, {
              href: "/docs",
              children: "Docs"
            })
          })
        }),
        /* @__PURE__ */ jsxs54(NavigationMenuItem, {
          children: [
            /* @__PURE__ */ jsx88(NavigationMenuTrigger, {
              spriteUrl,
              children: "List"
            }),
            /* @__PURE__ */ jsx88(NavigationMenuContent, {
              children: /* @__PURE__ */ jsx88("ul", {
                className: "grid w-[300px] gap-4",
                children: /* @__PURE__ */ jsxs54("li", {
                  children: [
                    /* @__PURE__ */ jsx88(NavigationMenuLink, {
                      asChild: true,
                      children: /* @__PURE__ */ jsxs54(Link, {
                        href: "#",
                        children: [
                          /* @__PURE__ */ jsx88("div", {
                            className: "font-medium",
                            children: "Components"
                          }),
                          /* @__PURE__ */ jsx88("div", {
                            className: "text-muted-foreground",
                            children: "Browse all components in the library."
                          })
                        ]
                      })
                    }),
                    /* @__PURE__ */ jsx88(NavigationMenuLink, {
                      asChild: true,
                      children: /* @__PURE__ */ jsxs54(Link, {
                        href: "#",
                        children: [
                          /* @__PURE__ */ jsx88("div", {
                            className: "font-medium",
                            children: "Documentation"
                          }),
                          /* @__PURE__ */ jsx88("div", {
                            className: "text-muted-foreground",
                            children: "Learn how to use the library."
                          })
                        ]
                      })
                    }),
                    /* @__PURE__ */ jsx88(NavigationMenuLink, {
                      asChild: true,
                      children: /* @__PURE__ */ jsxs54(Link, {
                        href: "#",
                        children: [
                          /* @__PURE__ */ jsx88("div", {
                            className: "font-medium",
                            children: "Blog"
                          }),
                          /* @__PURE__ */ jsx88("div", {
                            className: "text-muted-foreground",
                            children: "Read our latest blog posts."
                          })
                        ]
                      })
                    })
                  ]
                })
              })
            })
          ]
        }),
        /* @__PURE__ */ jsxs54(NavigationMenuItem, {
          children: [
            /* @__PURE__ */ jsx88(NavigationMenuTrigger, {
              spriteUrl,
              children: "Simple"
            }),
            /* @__PURE__ */ jsx88(NavigationMenuContent, {
              children: /* @__PURE__ */ jsx88("ul", {
                className: "grid w-[200px] gap-4",
                children: /* @__PURE__ */ jsxs54("li", {
                  children: [
                    /* @__PURE__ */ jsx88(NavigationMenuLink, {
                      asChild: true,
                      children: /* @__PURE__ */ jsx88(Link, {
                        href: "#",
                        children: "Components"
                      })
                    }),
                    /* @__PURE__ */ jsx88(NavigationMenuLink, {
                      asChild: true,
                      children: /* @__PURE__ */ jsx88(Link, {
                        href: "#",
                        children: "Documentation"
                      })
                    }),
                    /* @__PURE__ */ jsx88(NavigationMenuLink, {
                      asChild: true,
                      children: /* @__PURE__ */ jsx88(Link, {
                        href: "#",
                        children: "Blocks"
                      })
                    })
                  ]
                })
              })
            })
          ]
        }),
        /* @__PURE__ */ jsxs54(NavigationMenuItem, {
          children: [
            /* @__PURE__ */ jsx88(NavigationMenuTrigger, {
              spriteUrl,
              children: "With Icon"
            }),
            /* @__PURE__ */ jsx88(NavigationMenuContent, {
              children: /* @__PURE__ */ jsx88("ul", {
                className: "grid w-[200px] gap-4",
                children: /* @__PURE__ */ jsxs54("li", {
                  children: [
                    /* @__PURE__ */ jsx88(NavigationMenuLink, {
                      asChild: true,
                      children: /* @__PURE__ */ jsxs54(Link, {
                        href: "#",
                        className: "flex-row items-center gap-2",
                        children: [
                          /* @__PURE__ */ jsx88(SpriteIcon, {
                            id: "CircleQuestionMark",
                            url: spriteUrl
                          }),
                          "Backlog"
                        ]
                      })
                    }),
                    /* @__PURE__ */ jsx88(NavigationMenuLink, {
                      asChild: true,
                      children: /* @__PURE__ */ jsxs54(Link, {
                        href: "#",
                        className: "flex-row items-center gap-2",
                        children: [
                          /* @__PURE__ */ jsx88(SpriteIcon, {
                            id: "Circle",
                            url: spriteUrl
                          }),
                          "To Do"
                        ]
                      })
                    }),
                    /* @__PURE__ */ jsx88(NavigationMenuLink, {
                      asChild: true,
                      children: /* @__PURE__ */ jsxs54(Link, {
                        href: "#",
                        className: "flex-row items-center gap-2",
                        children: [
                          /* @__PURE__ */ jsx88(SpriteIcon, {
                            id: "CircleCheck",
                            url: spriteUrl
                          }),
                          "Done"
                        ]
                      })
                    })
                  ]
                })
              })
            })
          ]
        })
      ]
    })
  });
}
function ListItem({ title, children, href, ...props }) {
  return /* @__PURE__ */ jsx88("li", {
    ...props,
    children: /* @__PURE__ */ jsx88(NavigationMenuLink, {
      asChild: true,
      children: /* @__PURE__ */ jsxs54(Link, {
        href,
        children: [
          /* @__PURE__ */ jsx88("div", {
            className: "font-medium text-sm leading-none",
            children: title
          }),
          /* @__PURE__ */ jsx88("p", {
            className: "line-clamp-2 text-muted-foreground text-sm leading-snug",
            children
          })
        ]
      })
    })
  });
}

// src/shadcn-ui/components/pagination.tsx
import clsx32 from "clsx";
import { jsx as jsx89, jsxs as jsxs55 } from "react/jsx-runtime";
function Pagination({ className, ...props }) {
  return /* @__PURE__ */ jsx89("nav", {
    "aria-label": "pagination",
    "data-slot": "pagination",
    className: clsx32("mx-auto flex w-full justify-center", className),
    ...props
  });
}
function PaginationContent({ className, ...props }) {
  return /* @__PURE__ */ jsx89("ul", {
    "data-slot": "pagination-content",
    className: clsx32("flex flex-row items-center gap-1", className),
    ...props
  });
}
function PaginationItem({ ...props }) {
  return /* @__PURE__ */ jsx89("li", {
    "data-slot": "pagination-item",
    ...props
  });
}
function PaginationLink({ className, isActive, size = "icon", ...props }) {
  return /* @__PURE__ */ jsx89("a", {
    "aria-current": isActive ? "page" : undefined,
    "data-slot": "pagination-link",
    "data-active": isActive,
    className: clsx32(buttonVariants({
      variant: isActive ? "outline" : "ghost",
      size
    }), className),
    ...props
  });
}
function PaginationPrevious({ className, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsxs55(PaginationLink, {
    "aria-label": "Go to previous page",
    size: "default",
    className: clsx32("gap-1 px-2.5 sm:pl-2.5", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx89(SpriteIcon, {
        id: "ChevronLeft",
        url: spriteUrl
      }),
      /* @__PURE__ */ jsx89("span", {
        className: "hidden sm:block",
        children: "Previous"
      })
    ]
  });
}
function PaginationNext({ className, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsxs55(PaginationLink, {
    "aria-label": "Go to next page",
    size: "default",
    className: clsx32("gap-1 px-2.5 sm:pr-2.5", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx89("span", {
        className: "hidden sm:block",
        children: "Next"
      }),
      /* @__PURE__ */ jsx89(SpriteIcon, {
        id: "ChevronRight",
        url: spriteUrl
      })
    ]
  });
}
function PaginationEllipsis({ className, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsxs55("span", {
    "aria-hidden": true,
    "data-slot": "pagination-ellipsis",
    className: clsx32("flex size-9 items-center justify-center", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx89(SpriteIcon, {
        id: "Ellipsis",
        className: "size-4",
        url: spriteUrl
      }),
      /* @__PURE__ */ jsx89("span", {
        className: "sr-only",
        children: "More pages"
      })
    ]
  });
}

// src/shadcn-ui/examples/pagination-demo.tsx
import { jsx as jsx90, jsxs as jsxs56 } from "react/jsx-runtime";
function PaginationDemo({ spriteUrl }) {
  return /* @__PURE__ */ jsx90(Pagination, {
    children: /* @__PURE__ */ jsxs56(PaginationContent, {
      children: [
        /* @__PURE__ */ jsx90(PaginationItem, {
          children: /* @__PURE__ */ jsx90(PaginationPrevious, {
            spriteUrl,
            href: "#"
          })
        }),
        /* @__PURE__ */ jsx90(PaginationItem, {
          children: /* @__PURE__ */ jsx90(PaginationLink, {
            href: "#",
            children: "1"
          })
        }),
        /* @__PURE__ */ jsx90(PaginationItem, {
          children: /* @__PURE__ */ jsx90(PaginationLink, {
            href: "#",
            isActive: true,
            children: "2"
          })
        }),
        /* @__PURE__ */ jsx90(PaginationItem, {
          children: /* @__PURE__ */ jsx90(PaginationLink, {
            href: "#",
            children: "3"
          })
        }),
        /* @__PURE__ */ jsx90(PaginationItem, {
          children: /* @__PURE__ */ jsx90(PaginationEllipsis, {
            spriteUrl
          })
        }),
        /* @__PURE__ */ jsx90(PaginationItem, {
          children: /* @__PURE__ */ jsx90(PaginationNext, {
            spriteUrl,
            href: "#"
          })
        })
      ]
    })
  });
}

// src/shadcn-ui/examples/popover-demo.tsx
import { jsx as jsx91, jsxs as jsxs57 } from "react/jsx-runtime";
function PopoverDemo() {
  return /* @__PURE__ */ jsxs57(Popover, {
    children: [
      /* @__PURE__ */ jsx91(PopoverTrigger, {
        asChild: true,
        children: /* @__PURE__ */ jsx91(Button, {
          variant: "outline",
          children: "Open popover"
        })
      }),
      /* @__PURE__ */ jsx91(PopoverContent, {
        className: "w-80",
        children: /* @__PURE__ */ jsxs57("div", {
          className: "grid gap-4",
          children: [
            /* @__PURE__ */ jsxs57("div", {
              className: "space-y-2",
              children: [
                /* @__PURE__ */ jsx91("h4", {
                  className: "font-medium leading-none",
                  children: "Dimensions"
                }),
                /* @__PURE__ */ jsx91("p", {
                  className: "text-muted-foreground text-sm",
                  children: "Set the dimensions for the layer."
                })
              ]
            }),
            /* @__PURE__ */ jsxs57("div", {
              className: "grid gap-2",
              children: [
                /* @__PURE__ */ jsxs57("div", {
                  className: "grid grid-cols-3 items-center gap-4",
                  children: [
                    /* @__PURE__ */ jsx91(Label, {
                      htmlFor: "width",
                      children: "Width"
                    }),
                    /* @__PURE__ */ jsx91(Input, {
                      id: "width",
                      defaultValue: "100%",
                      className: "col-span-2 h-8"
                    })
                  ]
                }),
                /* @__PURE__ */ jsxs57("div", {
                  className: "grid grid-cols-3 items-center gap-4",
                  children: [
                    /* @__PURE__ */ jsx91(Label, {
                      htmlFor: "maxWidth",
                      children: "Max. width"
                    }),
                    /* @__PURE__ */ jsx91(Input, {
                      id: "maxWidth",
                      defaultValue: "300px",
                      className: "col-span-2 h-8"
                    })
                  ]
                }),
                /* @__PURE__ */ jsxs57("div", {
                  className: "grid grid-cols-3 items-center gap-4",
                  children: [
                    /* @__PURE__ */ jsx91(Label, {
                      htmlFor: "height",
                      children: "Height"
                    }),
                    /* @__PURE__ */ jsx91(Input, {
                      id: "height",
                      defaultValue: "25px",
                      className: "col-span-2 h-8"
                    })
                  ]
                }),
                /* @__PURE__ */ jsxs57("div", {
                  className: "grid grid-cols-3 items-center gap-4",
                  children: [
                    /* @__PURE__ */ jsx91(Label, {
                      htmlFor: "maxHeight",
                      children: "Max. height"
                    }),
                    /* @__PURE__ */ jsx91(Input, {
                      id: "maxHeight",
                      defaultValue: "none",
                      className: "col-span-2 h-8"
                    })
                  ]
                })
              ]
            })
          ]
        })
      })
    ]
  });
}

// src/shadcn-ui/examples/progress-demo.tsx
import React13 from "react";

// src/shadcn-ui/components/progress.tsx
import clsx33 from "clsx";
import { Progress as ProgressPrimitive } from "radix-ui";
import { jsx as jsx92 } from "react/jsx-runtime";
function Progress({ className, value, ...props }) {
  return /* @__PURE__ */ jsx92(ProgressPrimitive.Root, {
    "data-slot": "progress",
    className: clsx33("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className),
    ...props,
    children: /* @__PURE__ */ jsx92(ProgressPrimitive.Indicator, {
      "data-slot": "progress-indicator",
      className: "h-full w-full flex-1 bg-primary transition-all",
      style: { transform: `translateX(-${100 - (value || 0)}%)` }
    })
  });
}

// src/shadcn-ui/examples/progress-demo.tsx
import { jsx as jsx93 } from "react/jsx-runtime";
function ProgressDemo() {
  const [progress, setProgress] = React13.useState(13);
  React13.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);
  return /* @__PURE__ */ jsx93(Progress, {
    value: progress,
    className: "w-[60%]"
  });
}

// src/shadcn-ui/components/radio-group.tsx
import clsx34 from "clsx";
import { RadioGroup as RadioGroupPrimitive } from "radix-ui";
import { jsx as jsx94 } from "react/jsx-runtime";
function RadioGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx94(RadioGroupPrimitive.Root, {
    "data-slot": "radio-group",
    className: clsx34("grid gap-3", className),
    ...props
  });
}
function RadioGroupItem({ className, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsx94(RadioGroupPrimitive.Item, {
    "data-slot": "radio-group-item",
    className: clsx34("aspect-square size-4 shrink-0 rounded-full border border-input text-primary shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:ring-destructive/40", className),
    ...props,
    children: /* @__PURE__ */ jsx94(RadioGroupPrimitive.Indicator, {
      "data-slot": "radio-group-indicator",
      className: "relative flex items-center justify-center",
      children: /* @__PURE__ */ jsx94(SpriteIcon, {
        id: "Circle",
        url: spriteUrl,
        className: "-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 size-2 fill-primary"
      })
    })
  });
}

// src/shadcn-ui/examples/radio-group-demo.tsx
import { jsx as jsx95, jsxs as jsxs58 } from "react/jsx-runtime";
function RadioGroupDemo({ spriteUrl }) {
  return /* @__PURE__ */ jsxs58(RadioGroup, {
    defaultValue: "comfortable",
    children: [
      /* @__PURE__ */ jsxs58("div", {
        className: "flex items-center gap-3",
        children: [
          /* @__PURE__ */ jsx95(RadioGroupItem, {
            spriteUrl,
            value: "default",
            id: "r1"
          }),
          /* @__PURE__ */ jsx95(Label, {
            htmlFor: "r1",
            children: "Default"
          })
        ]
      }),
      /* @__PURE__ */ jsxs58("div", {
        className: "flex items-center gap-3",
        children: [
          /* @__PURE__ */ jsx95(RadioGroupItem, {
            spriteUrl,
            value: "comfortable",
            id: "r2"
          }),
          /* @__PURE__ */ jsx95(Label, {
            htmlFor: "r2",
            children: "Comfortable"
          })
        ]
      }),
      /* @__PURE__ */ jsxs58("div", {
        className: "flex items-center gap-3",
        children: [
          /* @__PURE__ */ jsx95(RadioGroupItem, {
            spriteUrl,
            value: "compact",
            id: "r3"
          }),
          /* @__PURE__ */ jsx95(Label, {
            htmlFor: "r3",
            children: "Compact"
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/examples/radio-group-form.tsx
import { toast as toast5 } from "sonner";
import { jsx as jsx96, jsxs as jsxs59 } from "react/jsx-runtime";
function RadioGroupForm({ spriteUrl }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const type = formData.get("type");
    toast5("You submitted the following values", {
      description: /* @__PURE__ */ jsx96("pre", {
        className: "mt-2 w-[320px] rounded-md bg-neutral-950 p-4",
        children: /* @__PURE__ */ jsx96("code", {
          className: "text-white",
          children: JSON.stringify({ type }, null, 2)
        })
      })
    });
  }
  return /* @__PURE__ */ jsxs59(Form, {
    onSubmit: handleSubmit,
    className: "w-2/3 space-y-6",
    children: [
      /* @__PURE__ */ jsx96(FormField, {
        name: "type",
        children: /* @__PURE__ */ jsxs59(FormItem, {
          className: "space-y-3",
          children: [
            /* @__PURE__ */ jsx96(FormLabel, {
              children: "Notify me about..."
            }),
            /* @__PURE__ */ jsx96(FormControl, {
              children: /* @__PURE__ */ jsxs59(RadioGroup, {
                name: "type",
                className: "flex flex-col",
                children: [
                  /* @__PURE__ */ jsxs59(FormItem, {
                    className: "flex items-center gap-3",
                    children: [
                      /* @__PURE__ */ jsx96(FormControl, {
                        children: /* @__PURE__ */ jsx96(RadioGroupItem, {
                          spriteUrl,
                          value: "all"
                        })
                      }),
                      /* @__PURE__ */ jsx96(FormLabel, {
                        className: "font-normal",
                        children: "All new messages"
                      })
                    ]
                  }),
                  /* @__PURE__ */ jsxs59(FormItem, {
                    className: "flex items-center gap-3",
                    children: [
                      /* @__PURE__ */ jsx96(FormControl, {
                        children: /* @__PURE__ */ jsx96(RadioGroupItem, {
                          spriteUrl,
                          value: "mentions"
                        })
                      }),
                      /* @__PURE__ */ jsx96(FormLabel, {
                        className: "font-normal",
                        children: "Direct messages and mentions"
                      })
                    ]
                  }),
                  /* @__PURE__ */ jsxs59(FormItem, {
                    className: "flex items-center gap-3",
                    children: [
                      /* @__PURE__ */ jsx96(FormControl, {
                        children: /* @__PURE__ */ jsx96(RadioGroupItem, {
                          spriteUrl,
                          value: "none"
                        })
                      }),
                      /* @__PURE__ */ jsx96(FormLabel, {
                        className: "font-normal",
                        children: "Nothing"
                      })
                    ]
                  })
                ]
              })
            }),
            /* @__PURE__ */ jsx96(FormMessage, {})
          ]
        })
      }),
      /* @__PURE__ */ jsx96(Button, {
        type: "submit",
        children: "Submit"
      })
    ]
  });
}

// src/shadcn-ui/examples/scroll-area-demo.tsx
import React14 from "react";

// src/shadcn-ui/components/scroll-area.tsx
import clsx35 from "clsx";
import { ScrollArea as ScrollAreaPrimitive } from "radix-ui";
import { jsx as jsx97, jsxs as jsxs60 } from "react/jsx-runtime";
function ScrollArea({ className, children, ...props }) {
  return /* @__PURE__ */ jsxs60(ScrollAreaPrimitive.Root, {
    "data-slot": "scroll-area",
    className: clsx35("relative", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx97(ScrollAreaPrimitive.Viewport, {
        "data-slot": "scroll-area-viewport",
        className: "size-full rounded-[inherit] outline-none transition-[color,box-shadow] focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50",
        children
      }),
      /* @__PURE__ */ jsx97(ScrollBar, {}),
      /* @__PURE__ */ jsx97(ScrollAreaPrimitive.Corner, {})
    ]
  });
}
function ScrollBar({ className, orientation = "vertical", ...props }) {
  return /* @__PURE__ */ jsx97(ScrollAreaPrimitive.ScrollAreaScrollbar, {
    "data-slot": "scroll-area-scrollbar",
    orientation,
    className: clsx35("flex touch-none select-none p-px transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent", className),
    ...props,
    children: /* @__PURE__ */ jsx97(ScrollAreaPrimitive.ScrollAreaThumb, {
      "data-slot": "scroll-area-thumb",
      className: "relative flex-1 rounded-full bg-border"
    })
  });
}

// src/shadcn-ui/components/separator.tsx
import clsx36 from "clsx";
import { Separator as SeparatorPrimitive } from "radix-ui";
import { jsx as jsx98 } from "react/jsx-runtime";
function Separator({ className, orientation = "horizontal", decorative = true, ...props }) {
  return /* @__PURE__ */ jsx98(SeparatorPrimitive.Root, {
    "data-slot": "separator",
    decorative,
    orientation,
    className: clsx36("shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px", className),
    ...props
  });
}

// src/shadcn-ui/examples/scroll-area-demo.tsx
import { jsx as jsx99, jsxs as jsxs61 } from "react/jsx-runtime";
var tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);
function ScrollAreaDemo() {
  return /* @__PURE__ */ jsx99(ScrollArea, {
    className: "h-72 w-48 rounded-md border",
    children: /* @__PURE__ */ jsxs61("div", {
      className: "p-4",
      children: [
        /* @__PURE__ */ jsx99("h4", {
          className: "mb-4 font-medium text-sm leading-none",
          children: "Tags"
        }),
        tags.map((tag) => /* @__PURE__ */ jsxs61(React14.Fragment, {
          children: [
            /* @__PURE__ */ jsx99("div", {
              className: "text-sm",
              children: tag
            }),
            /* @__PURE__ */ jsx99(Separator, {
              className: "my-2"
            })
          ]
        }, tag))
      ]
    })
  });
}
// src/shadcn-ui/examples/scroll-area-horizontal-demo.tsx
import { jsx as jsx100, jsxs as jsxs62 } from "react/jsx-runtime";
var works = [
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
  return /* @__PURE__ */ jsxs62(ScrollArea, {
    className: "w-96 whitespace-nowrap rounded-md border",
    children: [
      /* @__PURE__ */ jsx100("div", {
        className: "flex w-max space-x-4 p-4",
        children: works.map((artwork) => /* @__PURE__ */ jsxs62("figure", {
          className: "shrink-0",
          children: [
            /* @__PURE__ */ jsx100("div", {
              className: "overflow-hidden rounded-md",
              children: /* @__PURE__ */ jsx100(LazyImage, {
                src: artwork.art,
                alt: `Photo by ${artwork.artist}`,
                className: "aspect-[3/4] h-fit w-fit object-cover",
                width: 300,
                height: 400
              })
            }),
            /* @__PURE__ */ jsxs62("figcaption", {
              className: "pt-2 text-muted-foreground text-xs",
              children: [
                "Photo by ",
                /* @__PURE__ */ jsx100("span", {
                  className: "font-semibold text-foreground",
                  children: artwork.artist
                })
              ]
            })
          ]
        }, artwork.artist))
      }),
      /* @__PURE__ */ jsx100(ScrollBar, {
        orientation: "horizontal"
      })
    ]
  });
}

// src/shadcn-ui/examples/select-demo.tsx
import { jsx as jsx101, jsxs as jsxs63 } from "react/jsx-runtime";
function SelectDemo({ spriteUrl }) {
  return /* @__PURE__ */ jsxs63(Select, {
    children: [
      /* @__PURE__ */ jsx101(SelectTrigger, {
        spriteUrl,
        className: "w-[180px]",
        children: /* @__PURE__ */ jsx101(SelectValue, {
          placeholder: "Select a fruit"
        })
      }),
      /* @__PURE__ */ jsx101(SelectContent, {
        spriteUrl,
        children: /* @__PURE__ */ jsxs63(SelectGroup, {
          children: [
            /* @__PURE__ */ jsx101(SelectLabel, {
              children: "Fruits"
            }),
            /* @__PURE__ */ jsx101(SelectItem, {
              spriteUrl,
              value: "apple",
              children: "Apple"
            }),
            /* @__PURE__ */ jsx101(SelectItem, {
              spriteUrl,
              value: "banana",
              children: "Banana"
            }),
            /* @__PURE__ */ jsx101(SelectItem, {
              spriteUrl,
              value: "blueberry",
              children: "Blueberry"
            }),
            /* @__PURE__ */ jsx101(SelectItem, {
              spriteUrl,
              value: "grapes",
              children: "Grapes"
            }),
            /* @__PURE__ */ jsx101(SelectItem, {
              spriteUrl,
              value: "pineapple",
              children: "Pineapple"
            })
          ]
        })
      })
    ]
  });
}

// src/shadcn-ui/examples/select-form.tsx
import { toast as toast6 } from "sonner";
import { jsx as jsx102, jsxs as jsxs64 } from "react/jsx-runtime";
function SelectForm({ spriteUrl }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    toast6("You submitted the following values", {
      description: /* @__PURE__ */ jsx102("pre", {
        className: "mt-2 w-[320px] rounded-md bg-neutral-950 p-4",
        children: /* @__PURE__ */ jsx102("code", {
          className: "text-white",
          children: JSON.stringify({ email }, null, 2)
        })
      })
    });
  }
  return /* @__PURE__ */ jsxs64(Form, {
    onSubmit: handleSubmit,
    className: "w-2/3 space-y-6",
    children: [
      /* @__PURE__ */ jsx102(FormField, {
        name: "email",
        children: /* @__PURE__ */ jsxs64(FormItem, {
          children: [
            /* @__PURE__ */ jsx102(FormLabel, {
              children: "Email"
            }),
            /* @__PURE__ */ jsxs64(Select, {
              name: "email",
              children: [
                /* @__PURE__ */ jsx102(FormControl, {
                  children: /* @__PURE__ */ jsx102(SelectTrigger, {
                    spriteUrl,
                    children: /* @__PURE__ */ jsx102(SelectValue, {
                      placeholder: "Select a verified email to display"
                    })
                  })
                }),
                /* @__PURE__ */ jsxs64(SelectContent, {
                  spriteUrl,
                  children: [
                    /* @__PURE__ */ jsx102(SelectItem, {
                      spriteUrl,
                      value: "joe@example.com",
                      children: "joe@example.com"
                    }),
                    /* @__PURE__ */ jsx102(SelectItem, {
                      spriteUrl,
                      value: "joe@google.com",
                      children: "joe@google.com"
                    }),
                    /* @__PURE__ */ jsx102(SelectItem, {
                      spriteUrl,
                      value: "joe@support.com",
                      children: "joe@support.com"
                    })
                  ]
                })
              ]
            }),
            /* @__PURE__ */ jsxs64(FormDescription, {
              children: [
                "You can manage email addresses in your ",
                /* @__PURE__ */ jsx102(Link, {
                  href: "/examples/forms",
                  children: "email settings"
                }),
                "."
              ]
            }),
            /* @__PURE__ */ jsx102(FormMessage, {})
          ]
        })
      }),
      /* @__PURE__ */ jsx102(Button, {
        type: "submit",
        children: "Submit"
      })
    ]
  });
}

// src/shadcn-ui/examples/select-scrollable.tsx
import { jsx as jsx103, jsxs as jsxs65 } from "react/jsx-runtime";
function SelectScrollable({ spriteUrl }) {
  return /* @__PURE__ */ jsxs65(Select, {
    children: [
      /* @__PURE__ */ jsx103(SelectTrigger, {
        spriteUrl,
        className: "w-[280px]",
        children: /* @__PURE__ */ jsx103(SelectValue, {
          placeholder: "Select a timezone"
        })
      }),
      /* @__PURE__ */ jsxs65(SelectContent, {
        spriteUrl,
        children: [
          /* @__PURE__ */ jsxs65(SelectGroup, {
            children: [
              /* @__PURE__ */ jsx103(SelectLabel, {
                children: "North America"
              }),
              /* @__PURE__ */ jsx103(SelectItem, {
                spriteUrl,
                value: "est",
                children: "Eastern Standard Time (EST)"
              }),
              /* @__PURE__ */ jsx103(SelectItem, {
                spriteUrl,
                value: "cst",
                children: "Central Standard Time (CST)"
              }),
              /* @__PURE__ */ jsx103(SelectItem, {
                spriteUrl,
                value: "mst",
                children: "Mountain Standard Time (MST)"
              }),
              /* @__PURE__ */ jsx103(SelectItem, {
                spriteUrl,
                value: "pst",
                children: "Pacific Standard Time (PST)"
              }),
              /* @__PURE__ */ jsx103(SelectItem, {
                spriteUrl,
                value: "akst",
                children: "Alaska Standard Time (AKST)"
              }),
              /* @__PURE__ */ jsx103(SelectItem, {
                spriteUrl,
                value: "hst",
                children: "Hawaii Standard Time (HST)"
              })
            ]
          }),
          /* @__PURE__ */ jsxs65(SelectGroup, {
            children: [
              /* @__PURE__ */ jsx103(SelectLabel, {
                children: "Europe & Africa"
              }),
              /* @__PURE__ */ jsx103(SelectItem, {
                spriteUrl,
                value: "gmt",
                children: "Greenwich Mean Time (GMT)"
              }),
              /* @__PURE__ */ jsx103(SelectItem, {
                spriteUrl,
                value: "cet",
                children: "Central European Time (CET)"
              }),
              /* @__PURE__ */ jsx103(SelectItem, {
                spriteUrl,
                value: "eet",
                children: "Eastern European Time (EET)"
              }),
              /* @__PURE__ */ jsx103(SelectItem, {
                spriteUrl,
                value: "west",
                children: "Western European Summer Time (WEST)"
              }),
              /* @__PURE__ */ jsx103(SelectItem, {
                spriteUrl,
                value: "cat",
                children: "Central Africa Time (CAT)"
              }),
              /* @__PURE__ */ jsx103(SelectItem, {
                spriteUrl,
                value: "eat",
                children: "East Africa Time (EAT)"
              })
            ]
          }),
          /* @__PURE__ */ jsxs65(SelectGroup, {
            children: [
              /* @__PURE__ */ jsx103(SelectLabel, {
                children: "Asia"
              }),
              /* @__PURE__ */ jsx103(SelectItem, {
                spriteUrl,
                value: "msk",
                children: "Moscow Time (MSK)"
              }),
              /* @__PURE__ */ jsx103(SelectItem, {
                spriteUrl,
                value: "ist",
                children: "India Standard Time (IST)"
              }),
              /* @__PURE__ */ jsx103(SelectItem, {
                spriteUrl,
                value: "cst_china",
                children: "China Standard Time (CST)"
              }),
              /* @__PURE__ */ jsx103(SelectItem, {
                spriteUrl,
                value: "jst",
                children: "Japan Standard Time (JST)"
              }),
              /* @__PURE__ */ jsx103(SelectItem, {
                spriteUrl,
                value: "kst",
                children: "Korea Standard Time (KST)"
              }),
              /* @__PURE__ */ jsx103(SelectItem, {
                spriteUrl,
                value: "ist_indonesia",
                children: "Indonesia Central Standard Time (WITA)"
              })
            ]
          }),
          /* @__PURE__ */ jsxs65(SelectGroup, {
            children: [
              /* @__PURE__ */ jsx103(SelectLabel, {
                children: "Australia & Pacific"
              }),
              /* @__PURE__ */ jsx103(SelectItem, {
                spriteUrl,
                value: "awst",
                children: "Australian Western Standard Time (AWST)"
              }),
              /* @__PURE__ */ jsx103(SelectItem, {
                spriteUrl,
                value: "acst",
                children: "Australian Central Standard Time (ACST)"
              }),
              /* @__PURE__ */ jsx103(SelectItem, {
                spriteUrl,
                value: "aest",
                children: "Australian Eastern Standard Time (AEST)"
              }),
              /* @__PURE__ */ jsx103(SelectItem, {
                spriteUrl,
                value: "nzst",
                children: "New Zealand Standard Time (NZST)"
              }),
              /* @__PURE__ */ jsx103(SelectItem, {
                spriteUrl,
                value: "fjt",
                children: "Fiji Time (FJT)"
              })
            ]
          }),
          /* @__PURE__ */ jsxs65(SelectGroup, {
            children: [
              /* @__PURE__ */ jsx103(SelectLabel, {
                children: "South America"
              }),
              /* @__PURE__ */ jsx103(SelectItem, {
                spriteUrl,
                value: "art",
                children: "Argentina Time (ART)"
              }),
              /* @__PURE__ */ jsx103(SelectItem, {
                spriteUrl,
                value: "bot",
                children: "Bolivia Time (BOT)"
              }),
              /* @__PURE__ */ jsx103(SelectItem, {
                spriteUrl,
                value: "brt",
                children: "Brasilia Time (BRT)"
              }),
              /* @__PURE__ */ jsx103(SelectItem, {
                spriteUrl,
                value: "clt",
                children: "Chile Standard Time (CLT)"
              })
            ]
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/examples/separator-demo.tsx
import { jsx as jsx104, jsxs as jsxs66 } from "react/jsx-runtime";
function SeparatorDemo() {
  return /* @__PURE__ */ jsxs66("div", {
    children: [
      /* @__PURE__ */ jsxs66("div", {
        className: "space-y-1",
        children: [
          /* @__PURE__ */ jsx104("h4", {
            className: "font-medium text-sm leading-none",
            children: "Radix Primitives"
          }),
          /* @__PURE__ */ jsx104("p", {
            className: "text-muted-foreground text-sm",
            children: "An open-source UI component library."
          })
        ]
      }),
      /* @__PURE__ */ jsx104(Separator, {
        className: "my-4"
      }),
      /* @__PURE__ */ jsxs66("div", {
        className: "flex h-5 items-center space-x-4 text-sm",
        children: [
          /* @__PURE__ */ jsx104("div", {
            children: "Blog"
          }),
          /* @__PURE__ */ jsx104(Separator, {
            orientation: "vertical"
          }),
          /* @__PURE__ */ jsx104("div", {
            children: "Docs"
          }),
          /* @__PURE__ */ jsx104(Separator, {
            orientation: "vertical"
          }),
          /* @__PURE__ */ jsx104("div", {
            children: "Source"
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/examples/sheet-demo.tsx
import { jsx as jsx105, jsxs as jsxs67 } from "react/jsx-runtime";
function SheetDemo({ spriteUrl }) {
  return /* @__PURE__ */ jsxs67(Sheet, {
    children: [
      /* @__PURE__ */ jsx105(SheetTrigger, {
        asChild: true,
        children: /* @__PURE__ */ jsx105(Button, {
          variant: "outline",
          children: "Open"
        })
      }),
      /* @__PURE__ */ jsxs67(SheetContent, {
        spriteUrl,
        children: [
          /* @__PURE__ */ jsxs67(SheetHeader, {
            children: [
              /* @__PURE__ */ jsx105(SheetTitle, {
                children: "Edit profile"
              }),
              /* @__PURE__ */ jsx105(SheetDescription, {
                children: "Make changes to your profile here. Click save when you're done."
              })
            ]
          }),
          /* @__PURE__ */ jsxs67("div", {
            className: "grid flex-1 auto-rows-min gap-6 px-4",
            children: [
              /* @__PURE__ */ jsxs67("div", {
                className: "grid gap-3",
                children: [
                  /* @__PURE__ */ jsx105(Label, {
                    htmlFor: "sheet-demo-name",
                    children: "Name"
                  }),
                  /* @__PURE__ */ jsx105(Input, {
                    id: "sheet-demo-name",
                    defaultValue: "Pedro Duarte"
                  })
                ]
              }),
              /* @__PURE__ */ jsxs67("div", {
                className: "grid gap-3",
                children: [
                  /* @__PURE__ */ jsx105(Label, {
                    htmlFor: "sheet-demo-username",
                    children: "Username"
                  }),
                  /* @__PURE__ */ jsx105(Input, {
                    id: "sheet-demo-username",
                    defaultValue: "@peduarte"
                  })
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsxs67(SheetFooter, {
            children: [
              /* @__PURE__ */ jsx105(Button, {
                type: "submit",
                children: "Save changes"
              }),
              /* @__PURE__ */ jsx105(SheetClose, {
                asChild: true,
                children: /* @__PURE__ */ jsx105(Button, {
                  variant: "outline",
                  children: "Close"
                })
              })
            ]
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/examples/sheet-side.tsx
import { jsx as jsx106, jsxs as jsxs68 } from "react/jsx-runtime";
var SHEET_SIDES = ["top", "right", "bottom", "left"];
function SheetSide({ spriteUrl }) {
  return /* @__PURE__ */ jsx106("div", {
    className: "grid grid-cols-2 gap-2",
    children: SHEET_SIDES.map((side) => /* @__PURE__ */ jsxs68(Sheet, {
      children: [
        /* @__PURE__ */ jsx106(SheetTrigger, {
          asChild: true,
          children: /* @__PURE__ */ jsx106(Button, {
            variant: "outline",
            children: side
          })
        }),
        /* @__PURE__ */ jsxs68(SheetContent, {
          spriteUrl,
          side,
          children: [
            /* @__PURE__ */ jsxs68(SheetHeader, {
              children: [
                /* @__PURE__ */ jsx106(SheetTitle, {
                  children: "Edit profile"
                }),
                /* @__PURE__ */ jsx106(SheetDescription, {
                  children: "Make changes to your profile here. Click save when you're done."
                })
              ]
            }),
            /* @__PURE__ */ jsxs68("div", {
              className: "grid gap-4 py-4",
              children: [
                /* @__PURE__ */ jsxs68("div", {
                  className: "grid grid-cols-4 items-center gap-4",
                  children: [
                    /* @__PURE__ */ jsx106(Label, {
                      htmlFor: "name",
                      className: "text-right",
                      children: "Name"
                    }),
                    /* @__PURE__ */ jsx106(Input, {
                      id: "name",
                      value: "Pedro Duarte",
                      className: "col-span-3"
                    })
                  ]
                }),
                /* @__PURE__ */ jsxs68("div", {
                  className: "grid grid-cols-4 items-center gap-4",
                  children: [
                    /* @__PURE__ */ jsx106(Label, {
                      htmlFor: "username",
                      className: "text-right",
                      children: "Username"
                    }),
                    /* @__PURE__ */ jsx106(Input, {
                      id: "username",
                      value: "@peduarte",
                      className: "col-span-3"
                    })
                  ]
                })
              ]
            }),
            /* @__PURE__ */ jsx106(SheetFooter, {
              children: /* @__PURE__ */ jsx106(SheetClose, {
                asChild: true,
                children: /* @__PURE__ */ jsx106(Button, {
                  type: "submit",
                  children: "Save changes"
                })
              })
            })
          ]
        })
      ]
    }, side))
  });
}

// src/shadcn-ui/components/skeleton.tsx
import clsx37 from "clsx";
import { jsx as jsx107 } from "react/jsx-runtime";
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsx107("div", {
    "data-slot": "skeleton",
    className: clsx37("animate-pulse rounded-md bg-accent", className),
    ...props
  });
}

// src/shadcn-ui/examples/skeleton-card.tsx
import { jsx as jsx108, jsxs as jsxs69 } from "react/jsx-runtime";
function SkeletonCard() {
  return /* @__PURE__ */ jsxs69("div", {
    className: "flex flex-col space-y-3",
    children: [
      /* @__PURE__ */ jsx108(Skeleton, {
        className: "h-[125px] w-[250px] rounded-xl"
      }),
      /* @__PURE__ */ jsxs69("div", {
        className: "space-y-2",
        children: [
          /* @__PURE__ */ jsx108(Skeleton, {
            className: "h-4 w-[250px]"
          }),
          /* @__PURE__ */ jsx108(Skeleton, {
            className: "h-4 w-[200px]"
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/examples/skeleton-demo.tsx
import { jsx as jsx109, jsxs as jsxs70 } from "react/jsx-runtime";
function SkeletonDemo() {
  return /* @__PURE__ */ jsxs70("div", {
    className: "flex items-center space-x-4",
    children: [
      /* @__PURE__ */ jsx109(Skeleton, {
        className: "h-12 w-12 rounded-full"
      }),
      /* @__PURE__ */ jsxs70("div", {
        className: "space-y-2",
        children: [
          /* @__PURE__ */ jsx109(Skeleton, {
            className: "h-4 w-[250px]"
          }),
          /* @__PURE__ */ jsx109(Skeleton, {
            className: "h-4 w-[200px]"
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/examples/slider-demo.tsx
import { clsx as clsx39 } from "clsx";

// src/shadcn-ui/components/slider.tsx
import clsx38 from "clsx";
import { Slider as SliderPrimitive } from "radix-ui";
import React15 from "react";
import { jsx as jsx110, jsxs as jsxs71 } from "react/jsx-runtime";
function Slider({ className, defaultValue, value, min = 0, max = 100, ...props }) {
  const _values = React15.useMemo(() => Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max], [value, defaultValue, min, max]);
  return /* @__PURE__ */ jsxs71(SliderPrimitive.Root, {
    "data-slot": "slider",
    defaultValue,
    value,
    min,
    max,
    className: clsx38("relative flex w-full touch-none select-none items-center data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col data-[disabled]:opacity-50", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx110(SliderPrimitive.Track, {
        "data-slot": "slider-track",
        className: clsx38("relative grow overflow-hidden rounded-full bg-muted data-[orientation=horizontal]:h-1.5 data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-1.5"),
        children: /* @__PURE__ */ jsx110(SliderPrimitive.Range, {
          "data-slot": "slider-range",
          className: clsx38("absolute bg-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full")
        })
      }),
      Array.from({ length: _values.length }, (_, index) => /* @__PURE__ */ jsx110(SliderPrimitive.Thumb, {
        "data-slot": "slider-thumb",
        className: "block size-4 shrink-0 rounded-full border border-primary bg-background shadow-sm ring-ring/50 transition-[color,box-shadow] hover:ring-4 focus-visible:outline-hidden focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50"
      }, index))
    ]
  });
}

// src/shadcn-ui/examples/slider-demo.tsx
import { jsx as jsx111 } from "react/jsx-runtime";
function SliderDemo({ className, ...props }) {
  return /* @__PURE__ */ jsx111(Slider, {
    defaultValue: [50],
    max: 100,
    step: 1,
    className: clsx39("w-[60%]", className),
    ...props
  });
}

// src/shadcn-ui/examples/sonner-demo.tsx
import { toast as toast7 } from "sonner";
import { jsx as jsx112 } from "react/jsx-runtime";
function SonnerDemo() {
  return /* @__PURE__ */ jsx112(Button, {
    variant: "outline",
    onClick: () => toast7("Event has been created", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo")
      }
    }),
    children: "Show Toast"
  });
}

// src/shadcn-ui/components/switch.tsx
import clsx40 from "clsx";
import { Switch as SwitchPrimitive } from "radix-ui";
import { jsx as jsx113 } from "react/jsx-runtime";
function Switch({ className, ...props }) {
  return /* @__PURE__ */ jsx113(SwitchPrimitive.Root, {
    "data-slot": "switch",
    className: clsx40("peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input/80", className),
    ...props,
    children: /* @__PURE__ */ jsx113(SwitchPrimitive.Thumb, {
      "data-slot": "switch-thumb",
      className: clsx40("pointer-events-none block size-4 rounded-full bg-background ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0 dark:data-[state=checked]:bg-primary-foreground dark:data-[state=unchecked]:bg-foreground")
    })
  });
}

// src/shadcn-ui/examples/switch-demo.tsx
import { jsx as jsx114, jsxs as jsxs72 } from "react/jsx-runtime";
function SwitchDemo() {
  return /* @__PURE__ */ jsxs72("div", {
    className: "flex items-center space-x-2",
    children: [
      /* @__PURE__ */ jsx114(Switch, {
        id: "airplane-mode"
      }),
      /* @__PURE__ */ jsx114(Label, {
        htmlFor: "airplane-mode",
        children: "Airplane Mode"
      })
    ]
  });
}

// src/shadcn-ui/examples/switch-form.tsx
import React16 from "react";
import { toast as toast8 } from "sonner";
import { jsx as jsx115, jsxs as jsxs73 } from "react/jsx-runtime";
function SwitchForm() {
  const [marketingEmails, setMarketingEmails] = React16.useState(false);
  const [securityEmails, setSecurityEmails] = React16.useState(true);
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const marketing_emails = formData.has("marketing_emails");
    const security_emails = formData.has("security_emails");
    toast8("You submitted the following values", {
      description: /* @__PURE__ */ jsx115("pre", {
        className: "mt-2 w-[320px] rounded-md bg-neutral-950 p-4",
        children: /* @__PURE__ */ jsx115("code", {
          className: "text-white",
          children: JSON.stringify({ marketing_emails, security_emails }, null, 2)
        })
      })
    });
  }
  return /* @__PURE__ */ jsxs73(Form, {
    onSubmit: handleSubmit,
    className: "w-full space-y-6",
    children: [
      /* @__PURE__ */ jsxs73("div", {
        children: [
          /* @__PURE__ */ jsx115("h3", {
            className: "mb-4 font-medium text-lg",
            children: "Email Notifications"
          }),
          /* @__PURE__ */ jsxs73("div", {
            className: "space-y-4",
            children: [
              /* @__PURE__ */ jsx115(FormField, {
                name: "marketing_emails",
                children: /* @__PURE__ */ jsxs73(FormItem, {
                  className: "flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm",
                  children: [
                    /* @__PURE__ */ jsxs73("div", {
                      className: "space-y-0.5",
                      children: [
                        /* @__PURE__ */ jsx115(FormLabel, {
                          children: "Marketing emails"
                        }),
                        /* @__PURE__ */ jsx115(FormDescription, {
                          children: "Receive emails about new products, features, and more."
                        })
                      ]
                    }),
                    /* @__PURE__ */ jsx115(FormControl, {
                      children: /* @__PURE__ */ jsx115(Switch, {
                        name: "marketing_emails",
                        checked: marketingEmails,
                        onCheckedChange: setMarketingEmails
                      })
                    })
                  ]
                })
              }),
              /* @__PURE__ */ jsx115(FormField, {
                name: "security_emails",
                children: /* @__PURE__ */ jsxs73(FormItem, {
                  className: "flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm",
                  children: [
                    /* @__PURE__ */ jsxs73("div", {
                      className: "space-y-0.5",
                      children: [
                        /* @__PURE__ */ jsx115(FormLabel, {
                          children: "Security emails"
                        }),
                        /* @__PURE__ */ jsx115(FormDescription, {
                          children: "Receive emails about your account security."
                        })
                      ]
                    }),
                    /* @__PURE__ */ jsx115(FormControl, {
                      children: /* @__PURE__ */ jsx115(Switch, {
                        name: "security_emails",
                        checked: securityEmails,
                        onCheckedChange: setSecurityEmails,
                        disabled: true,
                        "aria-readonly": true
                      })
                    })
                  ]
                })
              })
            ]
          })
        ]
      }),
      /* @__PURE__ */ jsx115(Button, {
        type: "submit",
        children: "Submit"
      })
    ]
  });
}

// src/shadcn-ui/components/table.tsx
import clsx41 from "clsx";
import { jsx as jsx116 } from "react/jsx-runtime";
function Table({ className, ...props }) {
  return /* @__PURE__ */ jsx116("div", {
    "data-slot": "table-container",
    className: "relative w-full overflow-x-auto",
    children: /* @__PURE__ */ jsx116("table", {
      "data-slot": "table",
      className: clsx41("w-full caption-bottom text-sm", className),
      ...props
    })
  });
}
function TableHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx116("thead", {
    "data-slot": "table-header",
    className: clsx41("[&_tr]:border-b", className),
    ...props
  });
}
function TableBody({ className, ...props }) {
  return /* @__PURE__ */ jsx116("tbody", {
    "data-slot": "table-body",
    className: clsx41("[&_tr:last-child]:border-0", className),
    ...props
  });
}
function TableFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx116("tfoot", {
    "data-slot": "table-footer",
    className: clsx41("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
    ...props
  });
}
function TableRow({ className, ...props }) {
  return /* @__PURE__ */ jsx116("tr", {
    "data-slot": "table-row",
    className: clsx41("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
    ...props
  });
}
function TableHead({ className, ...props }) {
  return /* @__PURE__ */ jsx116("th", {
    "data-slot": "table-head",
    className: clsx41("h-10 whitespace-nowrap px-2 text-left align-middle font-medium text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
    ...props
  });
}
function TableCell({ className, ...props }) {
  return /* @__PURE__ */ jsx116("td", {
    "data-slot": "table-cell",
    className: clsx41("whitespace-nowrap p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
    ...props
  });
}
function TableCaption({ className, ...props }) {
  return /* @__PURE__ */ jsx116("caption", {
    "data-slot": "table-caption",
    className: clsx41("mt-4 text-muted-foreground text-sm", className),
    ...props
  });
}

// src/shadcn-ui/examples/table-demo.tsx
import { jsx as jsx117, jsxs as jsxs74 } from "react/jsx-runtime";
var invoices = [
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
  return /* @__PURE__ */ jsxs74(Table, {
    children: [
      /* @__PURE__ */ jsx117(TableCaption, {
        children: "A list of your recent invoices."
      }),
      /* @__PURE__ */ jsx117(TableHeader, {
        children: /* @__PURE__ */ jsxs74(TableRow, {
          children: [
            /* @__PURE__ */ jsx117(TableHead, {
              className: "w-[100px]",
              children: "Invoice"
            }),
            /* @__PURE__ */ jsx117(TableHead, {
              children: "Status"
            }),
            /* @__PURE__ */ jsx117(TableHead, {
              children: "Method"
            }),
            /* @__PURE__ */ jsx117(TableHead, {
              className: "text-right",
              children: "Amount"
            })
          ]
        })
      }),
      /* @__PURE__ */ jsx117(TableBody, {
        children: invoices.map((invoice) => /* @__PURE__ */ jsxs74(TableRow, {
          children: [
            /* @__PURE__ */ jsx117(TableCell, {
              className: "font-medium",
              children: invoice.invoice
            }),
            /* @__PURE__ */ jsx117(TableCell, {
              children: invoice.paymentStatus
            }),
            /* @__PURE__ */ jsx117(TableCell, {
              children: invoice.paymentMethod
            }),
            /* @__PURE__ */ jsx117(TableCell, {
              className: "text-right",
              children: invoice.totalAmount
            })
          ]
        }, invoice.invoice))
      }),
      /* @__PURE__ */ jsx117(TableFooter, {
        children: /* @__PURE__ */ jsxs74(TableRow, {
          children: [
            /* @__PURE__ */ jsx117(TableCell, {
              colSpan: 3,
              children: "Total"
            }),
            /* @__PURE__ */ jsx117(TableCell, {
              className: "text-right",
              children: "$2,500.00"
            })
          ]
        })
      })
    ]
  });
}

// src/shadcn-ui/components/tabs.tsx
import clsx42 from "clsx";
import { Tabs as TabsPrimitive } from "radix-ui";
import { jsx as jsx118 } from "react/jsx-runtime";
function Tabs({ className, ...props }) {
  return /* @__PURE__ */ jsx118(TabsPrimitive.Root, {
    "data-slot": "tabs",
    className: clsx42("flex flex-col gap-2", className),
    ...props
  });
}
function TabsList({ className, ...props }) {
  return /* @__PURE__ */ jsx118(TabsPrimitive.List, {
    "data-slot": "tabs-list",
    className: clsx42("inline-flex h-9 w-fit items-center justify-center rounded-lg bg-muted p-[3px] text-muted-foreground", className),
    ...props
  });
}
function TabsTrigger({ className, ...props }) {
  return /* @__PURE__ */ jsx118(TabsPrimitive.Trigger, {
    "data-slot": "tabs-trigger",
    className: clsx42("inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-transparent px-2 py-1 font-medium text-foreground text-sm transition-[color,box-shadow] focus-visible:border-ring focus-visible:outline-1 focus-visible:outline-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:shadow-sm dark:text-muted-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props
  });
}
function TabsContent({ className, ...props }) {
  return /* @__PURE__ */ jsx118(TabsPrimitive.Content, {
    "data-slot": "tabs-content",
    className: clsx42("flex-1 outline-none", className),
    ...props
  });
}

// src/shadcn-ui/examples/tabs-demo.tsx
import { jsx as jsx119, jsxs as jsxs75 } from "react/jsx-runtime";
function TabsDemo() {
  return /* @__PURE__ */ jsx119("div", {
    className: "flex w-full max-w-sm flex-col gap-6",
    children: /* @__PURE__ */ jsxs75(Tabs, {
      defaultValue: "account",
      children: [
        /* @__PURE__ */ jsxs75(TabsList, {
          children: [
            /* @__PURE__ */ jsx119(TabsTrigger, {
              value: "account",
              children: "Account"
            }),
            /* @__PURE__ */ jsx119(TabsTrigger, {
              value: "password",
              children: "Password"
            })
          ]
        }),
        /* @__PURE__ */ jsx119(TabsContent, {
          value: "account",
          children: /* @__PURE__ */ jsxs75(Card, {
            children: [
              /* @__PURE__ */ jsxs75(CardHeader, {
                children: [
                  /* @__PURE__ */ jsx119(CardTitle, {
                    children: "Account"
                  }),
                  /* @__PURE__ */ jsx119(CardDescription, {
                    children: "Make changes to your account here. Click save when you're done."
                  })
                ]
              }),
              /* @__PURE__ */ jsxs75(CardContent, {
                className: "grid gap-6",
                children: [
                  /* @__PURE__ */ jsxs75("div", {
                    className: "grid gap-3",
                    children: [
                      /* @__PURE__ */ jsx119(Label, {
                        htmlFor: "tabs-demo-name",
                        children: "Name"
                      }),
                      /* @__PURE__ */ jsx119(Input, {
                        id: "tabs-demo-name",
                        defaultValue: "Pedro Duarte"
                      })
                    ]
                  }),
                  /* @__PURE__ */ jsxs75("div", {
                    className: "grid gap-3",
                    children: [
                      /* @__PURE__ */ jsx119(Label, {
                        htmlFor: "tabs-demo-username",
                        children: "Username"
                      }),
                      /* @__PURE__ */ jsx119(Input, {
                        id: "tabs-demo-username",
                        defaultValue: "@peduarte"
                      })
                    ]
                  })
                ]
              }),
              /* @__PURE__ */ jsx119(CardFooter, {
                children: /* @__PURE__ */ jsx119(Button, {
                  children: "Save changes"
                })
              })
            ]
          })
        }),
        /* @__PURE__ */ jsx119(TabsContent, {
          value: "password",
          children: /* @__PURE__ */ jsxs75(Card, {
            children: [
              /* @__PURE__ */ jsxs75(CardHeader, {
                children: [
                  /* @__PURE__ */ jsx119(CardTitle, {
                    children: "Password"
                  }),
                  /* @__PURE__ */ jsx119(CardDescription, {
                    children: "Change your password here. After saving, you'll be logged out."
                  })
                ]
              }),
              /* @__PURE__ */ jsxs75(CardContent, {
                className: "grid gap-6",
                children: [
                  /* @__PURE__ */ jsxs75("div", {
                    className: "grid gap-3",
                    children: [
                      /* @__PURE__ */ jsx119(Label, {
                        htmlFor: "tabs-demo-current",
                        children: "Current password"
                      }),
                      /* @__PURE__ */ jsx119(Input, {
                        id: "tabs-demo-current",
                        type: "password"
                      })
                    ]
                  }),
                  /* @__PURE__ */ jsxs75("div", {
                    className: "grid gap-3",
                    children: [
                      /* @__PURE__ */ jsx119(Label, {
                        htmlFor: "tabs-demo-new",
                        children: "New password"
                      }),
                      /* @__PURE__ */ jsx119(Input, {
                        id: "tabs-demo-new",
                        type: "password"
                      })
                    ]
                  })
                ]
              }),
              /* @__PURE__ */ jsx119(CardFooter, {
                children: /* @__PURE__ */ jsx119(Button, {
                  children: "Save password"
                })
              })
            ]
          })
        })
      ]
    })
  });
}

// src/shadcn-ui/components/textarea.tsx
import clsx43 from "clsx";
import { jsx as jsx120 } from "react/jsx-runtime";
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsx120("textarea", {
    "data-slot": "textarea",
    className: clsx43("field-sizing-content flex min-h-16 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-destructive/40", className),
    ...props
  });
}

// src/shadcn-ui/examples/textarea-demo.tsx
import { jsx as jsx121 } from "react/jsx-runtime";
function TextareaDemo() {
  return /* @__PURE__ */ jsx121(Textarea, {
    placeholder: "Type your message here."
  });
}

// src/shadcn-ui/examples/textarea-disabled.tsx
import { jsx as jsx122 } from "react/jsx-runtime";
function TextareaDisabled() {
  return /* @__PURE__ */ jsx122(Textarea, {
    placeholder: "Type your message here.",
    disabled: true
  });
}

// src/shadcn-ui/examples/textarea-form.tsx
import { toast as toast9 } from "sonner";
import { jsx as jsx123, jsxs as jsxs76 } from "react/jsx-runtime";
function TextareaForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const bio = formData.get("bio");
    toast9("You submitted the following values", {
      description: /* @__PURE__ */ jsx123("pre", {
        className: "mt-2 w-[320px] rounded-md bg-neutral-950 p-4",
        children: /* @__PURE__ */ jsx123("code", {
          className: "text-white",
          children: JSON.stringify({ bio }, null, 2)
        })
      })
    });
  }
  return /* @__PURE__ */ jsxs76(Form, {
    onSubmit: handleSubmit,
    className: "w-2/3 space-y-6",
    children: [
      /* @__PURE__ */ jsx123(FormField, {
        name: "bio",
        children: /* @__PURE__ */ jsxs76(FormItem, {
          children: [
            /* @__PURE__ */ jsx123(FormLabel, {
              children: "Bio"
            }),
            /* @__PURE__ */ jsx123(FormControl, {
              children: /* @__PURE__ */ jsx123(Textarea, {
                name: "bio",
                placeholder: "Tell us a little bit about yourself",
                className: "resize-none"
              })
            }),
            /* @__PURE__ */ jsxs76(FormDescription, {
              children: [
                "You can ",
                /* @__PURE__ */ jsx123("span", {
                  children: "@mention"
                }),
                " other users and organizations."
              ]
            }),
            /* @__PURE__ */ jsx123(FormMessage, {})
          ]
        })
      }),
      /* @__PURE__ */ jsx123(Button, {
        type: "submit",
        children: "Submit"
      })
    ]
  });
}

// src/shadcn-ui/examples/textarea-with-button.tsx
import { jsx as jsx124, jsxs as jsxs77 } from "react/jsx-runtime";
function TextareaWithButton() {
  return /* @__PURE__ */ jsxs77("div", {
    className: "grid w-full gap-2",
    children: [
      /* @__PURE__ */ jsx124(Textarea, {
        placeholder: "Type your message here."
      }),
      /* @__PURE__ */ jsx124(Button, {
        children: "Send message"
      })
    ]
  });
}

// src/shadcn-ui/examples/textarea-with-label.tsx
import { jsx as jsx125, jsxs as jsxs78 } from "react/jsx-runtime";
function TextareaWithLabel() {
  return /* @__PURE__ */ jsxs78("div", {
    className: "grid w-full gap-3",
    children: [
      /* @__PURE__ */ jsx125(Label, {
        htmlFor: "message",
        children: "Your message"
      }),
      /* @__PURE__ */ jsx125(Textarea, {
        placeholder: "Type your message here.",
        id: "message"
      })
    ]
  });
}

// src/shadcn-ui/examples/textarea-with-text.tsx
import { jsx as jsx126, jsxs as jsxs79 } from "react/jsx-runtime";
function TextareaWithText() {
  return /* @__PURE__ */ jsxs79("div", {
    className: "grid w-full gap-3",
    children: [
      /* @__PURE__ */ jsx126(Label, {
        htmlFor: "message-2",
        children: "Your Message"
      }),
      /* @__PURE__ */ jsx126(Textarea, {
        placeholder: "Type your message here.",
        id: "message-2"
      }),
      /* @__PURE__ */ jsx126("p", {
        className: "text-muted-foreground text-sm",
        children: "Your message will be copied to the support team."
      })
    ]
  });
}

// src/shadcn-ui/components/toggle.tsx
import { cva as cva5 } from "class-variance-authority";
import clsx44 from "clsx";
import { Toggle as TogglePrimitive } from "radix-ui";
import { jsx as jsx127 } from "react/jsx-runtime";
var toggleVariants = cva5("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap", {
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
});
function Toggle({ className, variant, size, ...props }) {
  return /* @__PURE__ */ jsx127(TogglePrimitive.Root, {
    "data-slot": "toggle",
    className: clsx44(toggleVariants({ variant, size, className })),
    ...props
  });
}

// src/shadcn-ui/examples/toggle-demo.tsx
import { jsx as jsx128 } from "react/jsx-runtime";
function ToggleDemo({ spriteUrl }) {
  return /* @__PURE__ */ jsx128(Toggle, {
    "aria-label": "Toggle italic",
    children: /* @__PURE__ */ jsx128(SpriteIcon, {
      id: "Bold",
      className: "h-4 w-4",
      url: spriteUrl
    })
  });
}

// src/shadcn-ui/examples/toggle-disabled.tsx
import { jsx as jsx129 } from "react/jsx-runtime";
function ToggleDisabled({ spriteUrl }) {
  return /* @__PURE__ */ jsx129(Toggle, {
    "aria-label": "Toggle italic",
    disabled: true,
    children: /* @__PURE__ */ jsx129(SpriteIcon, {
      id: "Underline",
      className: "h-4 w-4",
      url: spriteUrl
    })
  });
}

// src/shadcn-ui/components/toggle-group.tsx
import clsx45 from "clsx";
import { ToggleGroup as ToggleGroupPrimitive } from "radix-ui";
import React17 from "react";
import { jsx as jsx130 } from "react/jsx-runtime";
var ToggleGroupContext = React17.createContext({
  size: "default",
  variant: "default"
});
function ToggleGroup({ className, variant, size, children, ...props }) {
  return /* @__PURE__ */ jsx130(ToggleGroupPrimitive.Root, {
    "data-slot": "toggle-group",
    "data-variant": variant,
    "data-size": size,
    className: clsx45("group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs", className),
    ...props,
    children: /* @__PURE__ */ jsx130(ToggleGroupContext.Provider, {
      value: { variant, size },
      children
    })
  });
}
function ToggleGroupItem({ className, children, variant, size, ...props }) {
  const context = React17.useContext(ToggleGroupContext);
  return /* @__PURE__ */ jsx130(ToggleGroupPrimitive.Item, {
    "data-slot": "toggle-group-item",
    "data-variant": context.variant || variant,
    "data-size": context.size || size,
    className: clsx45(toggleVariants({
      variant: context.variant || variant,
      size: context.size || size
    }), "min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l", className),
    ...props,
    children
  });
}

// src/shadcn-ui/examples/toggle-group-demo.tsx
import { jsx as jsx131, jsxs as jsxs80 } from "react/jsx-runtime";
function ToggleGroupDemo({ spriteUrl }) {
  return /* @__PURE__ */ jsxs80(ToggleGroup, {
    variant: "outline",
    type: "multiple",
    children: [
      /* @__PURE__ */ jsx131(ToggleGroupItem, {
        value: "bold",
        "aria-label": "Toggle bold",
        children: /* @__PURE__ */ jsx131(SpriteIcon, {
          id: "Bold",
          className: "h-4 w-4",
          url: spriteUrl
        })
      }),
      /* @__PURE__ */ jsx131(ToggleGroupItem, {
        value: "italic",
        "aria-label": "Toggle italic",
        children: /* @__PURE__ */ jsx131(SpriteIcon, {
          id: "Italic",
          className: "h-4 w-4",
          url: spriteUrl
        })
      }),
      /* @__PURE__ */ jsx131(ToggleGroupItem, {
        value: "strikethrough",
        "aria-label": "Toggle strikethrough",
        children: /* @__PURE__ */ jsx131(SpriteIcon, {
          id: "Underline",
          className: "h-4 w-4",
          url: spriteUrl
        })
      })
    ]
  });
}

// src/shadcn-ui/examples/toggle-group-disabled.tsx
import { jsx as jsx132, jsxs as jsxs81 } from "react/jsx-runtime";
function ToggleGroupDemo2({ spriteUrl }) {
  return /* @__PURE__ */ jsxs81(ToggleGroup, {
    type: "multiple",
    disabled: true,
    children: [
      /* @__PURE__ */ jsx132(ToggleGroupItem, {
        value: "bold",
        "aria-label": "Toggle bold",
        children: /* @__PURE__ */ jsx132(SpriteIcon, {
          id: "Bold",
          className: "h-4 w-4",
          url: spriteUrl
        })
      }),
      /* @__PURE__ */ jsx132(ToggleGroupItem, {
        value: "italic",
        "aria-label": "Toggle italic",
        children: /* @__PURE__ */ jsx132(SpriteIcon, {
          id: "Italic",
          className: "h-4 w-4",
          url: spriteUrl
        })
      }),
      /* @__PURE__ */ jsx132(ToggleGroupItem, {
        value: "strikethrough",
        "aria-label": "Toggle strikethrough",
        children: /* @__PURE__ */ jsx132(SpriteIcon, {
          id: "Underline",
          className: "h-4 w-4",
          url: spriteUrl
        })
      })
    ]
  });
}

// src/shadcn-ui/examples/toggle-group-lg.tsx
import { jsx as jsx133, jsxs as jsxs82 } from "react/jsx-runtime";
function ToggleGroupDemo3({ spriteUrl }) {
  return /* @__PURE__ */ jsxs82(ToggleGroup, {
    type: "multiple",
    size: "lg",
    children: [
      /* @__PURE__ */ jsx133(ToggleGroupItem, {
        value: "bold",
        "aria-label": "Toggle bold",
        children: /* @__PURE__ */ jsx133(SpriteIcon, {
          id: "Bold",
          className: "h-4 w-4",
          url: spriteUrl
        })
      }),
      /* @__PURE__ */ jsx133(ToggleGroupItem, {
        value: "italic",
        "aria-label": "Toggle italic",
        children: /* @__PURE__ */ jsx133(SpriteIcon, {
          id: "Italic",
          className: "h-4 w-4",
          url: spriteUrl
        })
      }),
      /* @__PURE__ */ jsx133(ToggleGroupItem, {
        value: "strikethrough",
        "aria-label": "Toggle strikethrough",
        children: /* @__PURE__ */ jsx133(SpriteIcon, {
          id: "Underline",
          className: "h-4 w-4",
          url: spriteUrl
        })
      })
    ]
  });
}

// src/shadcn-ui/examples/toggle-group-outline.tsx
import { jsx as jsx134, jsxs as jsxs83 } from "react/jsx-runtime";
function ToggleGroupDemo4({ spriteUrl }) {
  return /* @__PURE__ */ jsxs83(ToggleGroup, {
    type: "multiple",
    variant: "outline",
    children: [
      /* @__PURE__ */ jsx134(ToggleGroupItem, {
        value: "bold",
        "aria-label": "Toggle bold",
        children: /* @__PURE__ */ jsx134(SpriteIcon, {
          id: "Bold",
          className: "h-4 w-4",
          url: spriteUrl
        })
      }),
      /* @__PURE__ */ jsx134(ToggleGroupItem, {
        value: "italic",
        "aria-label": "Toggle italic",
        children: /* @__PURE__ */ jsx134(SpriteIcon, {
          id: "Italic",
          className: "h-4 w-4",
          url: spriteUrl
        })
      }),
      /* @__PURE__ */ jsx134(ToggleGroupItem, {
        value: "strikethrough",
        "aria-label": "Toggle strikethrough",
        children: /* @__PURE__ */ jsx134(SpriteIcon, {
          id: "Underline",
          className: "h-4 w-4",
          url: spriteUrl
        })
      })
    ]
  });
}

// src/shadcn-ui/examples/toggle-group-single.tsx
import { jsx as jsx135, jsxs as jsxs84 } from "react/jsx-runtime";
function ToggleGroupDemo5({ spriteUrl }) {
  return /* @__PURE__ */ jsxs84(ToggleGroup, {
    type: "single",
    children: [
      /* @__PURE__ */ jsx135(ToggleGroupItem, {
        value: "bold",
        "aria-label": "Toggle bold",
        children: /* @__PURE__ */ jsx135(SpriteIcon, {
          id: "Bold",
          className: "h-4 w-4",
          url: spriteUrl
        })
      }),
      /* @__PURE__ */ jsx135(ToggleGroupItem, {
        value: "italic",
        "aria-label": "Toggle italic",
        children: /* @__PURE__ */ jsx135(SpriteIcon, {
          id: "Italic",
          className: "h-4 w-4",
          url: spriteUrl
        })
      }),
      /* @__PURE__ */ jsx135(ToggleGroupItem, {
        value: "strikethrough",
        "aria-label": "Toggle strikethrough",
        children: /* @__PURE__ */ jsx135(SpriteIcon, {
          id: "Underline",
          className: "h-4 w-4",
          url: spriteUrl
        })
      })
    ]
  });
}

// src/shadcn-ui/examples/toggle-group-sm.tsx
import { jsx as jsx136, jsxs as jsxs85 } from "react/jsx-runtime";
function ToggleGroupDemo6({ spriteUrl }) {
  return /* @__PURE__ */ jsxs85(ToggleGroup, {
    type: "single",
    size: "sm",
    children: [
      /* @__PURE__ */ jsx136(ToggleGroupItem, {
        value: "bold",
        "aria-label": "Toggle bold",
        children: /* @__PURE__ */ jsx136(SpriteIcon, {
          id: "Bold",
          className: "h-4 w-4",
          url: spriteUrl
        })
      }),
      /* @__PURE__ */ jsx136(ToggleGroupItem, {
        value: "italic",
        "aria-label": "Toggle italic",
        children: /* @__PURE__ */ jsx136(SpriteIcon, {
          id: "Italic",
          className: "h-4 w-4",
          url: spriteUrl
        })
      }),
      /* @__PURE__ */ jsx136(ToggleGroupItem, {
        value: "strikethrough",
        "aria-label": "Toggle strikethrough",
        children: /* @__PURE__ */ jsx136(SpriteIcon, {
          id: "Underline",
          className: "h-4 w-4",
          url: spriteUrl
        })
      })
    ]
  });
}

// src/shadcn-ui/examples/toggle-lg.tsx
import { jsx as jsx137 } from "react/jsx-runtime";
function ToggleLg({ spriteUrl }) {
  return /* @__PURE__ */ jsx137(Toggle, {
    size: "lg",
    "aria-label": "Toggle italic",
    children: /* @__PURE__ */ jsx137(SpriteIcon, {
      id: "Italic",
      url: spriteUrl
    })
  });
}

// src/shadcn-ui/examples/toggle-outline.tsx
import { jsx as jsx138 } from "react/jsx-runtime";
function ToggleOutline({ spriteUrl }) {
  return /* @__PURE__ */ jsx138(Toggle, {
    variant: "outline",
    "aria-label": "Toggle italic",
    children: /* @__PURE__ */ jsx138(SpriteIcon, {
      id: "Italic",
      url: spriteUrl
    })
  });
}

// src/shadcn-ui/examples/toggle-sm.tsx
import { jsx as jsx139 } from "react/jsx-runtime";
function ToggleSm({ spriteUrl }) {
  return /* @__PURE__ */ jsx139(Toggle, {
    size: "sm",
    "aria-label": "Toggle italic",
    children: /* @__PURE__ */ jsx139(SpriteIcon, {
      id: "Italic",
      url: spriteUrl
    })
  });
}

// src/shadcn-ui/examples/toggle-with-text.tsx
import { jsx as jsx140, jsxs as jsxs86 } from "react/jsx-runtime";
function ToggleWithText({ spriteUrl }) {
  return /* @__PURE__ */ jsxs86(Toggle, {
    "aria-label": "Toggle italic",
    children: [
      /* @__PURE__ */ jsx140(SpriteIcon, {
        id: "Italic",
        url: spriteUrl
      }),
      "Italic"
    ]
  });
}

// src/shadcn-ui/examples/tooltip-demo.tsx
import { jsx as jsx141, jsxs as jsxs87 } from "react/jsx-runtime";
function TooltipDemo() {
  return /* @__PURE__ */ jsxs87(Tooltip, {
    children: [
      /* @__PURE__ */ jsx141(TooltipTrigger, {
        asChild: true,
        children: /* @__PURE__ */ jsx141(Button, {
          variant: "outline",
          children: "Hover"
        })
      }),
      /* @__PURE__ */ jsx141(TooltipContent, {
        children: /* @__PURE__ */ jsx141("p", {
          children: "Add to library"
        })
      })
    ]
  });
}

// src/shadcn-ui/examples/typography-blockquote.tsx
import { jsx as jsx142 } from "react/jsx-runtime";
function TypographyBlockquote() {
  return /* @__PURE__ */ jsx142("blockquote", {
    className: "mt-6 border-l-2 pl-6 italic",
    children: `"After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the privilege."`
  });
}

// src/shadcn-ui/examples/typography-demo.tsx
import { jsx as jsx143, jsxs as jsxs88 } from "react/jsx-runtime";
function TypographyDemo() {
  return /* @__PURE__ */ jsxs88("div", {
    children: [
      /* @__PURE__ */ jsx143("h1", {
        className: "scroll-m-20 text-4xl font-extrabold tracking-tight text-balance",
        children: "Taxing Laughter: The Joke Tax Chronicles"
      }),
      /* @__PURE__ */ jsx143("p", {
        className: "text-muted-foreground text-xl leading-7 [&:not(:first-child)]:mt-6",
        children: "Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne. One day, his advisors came to him with a problem: the kingdom was running out of money."
      }),
      /* @__PURE__ */ jsx143("h2", {
        className: "mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
        children: "The King's Plan"
      }),
      /* @__PURE__ */ jsxs88("p", {
        className: "leading-7 [&:not(:first-child)]:mt-6",
        children: [
          "The king thought long and hard, and finally came up with",
          " ",
          /* @__PURE__ */ jsx143("a", {
            href: "#",
            className: "text-primary font-medium underline underline-offset-4",
            children: "a brilliant plan"
          }),
          ": he would tax the jokes in the kingdom."
        ]
      }),
      /* @__PURE__ */ jsx143("blockquote", {
        className: "mt-6 border-l-2 pl-6 italic",
        children: `"After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the privilege."`
      }),
      /* @__PURE__ */ jsx143("h3", {
        className: "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        children: "The Joke Tax"
      }),
      /* @__PURE__ */ jsx143("p", {
        className: "leading-7 [&:not(:first-child)]:mt-6",
        children: "The king's subjects were not amused. They grumbled and complained, but the king was firm:"
      }),
      /* @__PURE__ */ jsxs88("ul", {
        className: "my-6 ml-6 list-disc [&>li]:mt-2",
        children: [
          /* @__PURE__ */ jsx143("li", {
            children: "1st level of puns: 5 gold coins"
          }),
          /* @__PURE__ */ jsx143("li", {
            children: "2nd level of jokes: 10 gold coins"
          }),
          /* @__PURE__ */ jsx143("li", {
            children: "3rd level of one-liners : 20 gold coins"
          })
        ]
      }),
      /* @__PURE__ */ jsx143("p", {
        className: "leading-7 [&:not(:first-child)]:mt-6",
        children: "As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was one person who refused to let the king's foolishness get him down: a court jester named Jokester."
      }),
      /* @__PURE__ */ jsx143("h3", {
        className: "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        children: "Jokester's Revolt"
      }),
      /* @__PURE__ */ jsx143("p", {
        className: "leading-7 [&:not(:first-child)]:mt-6",
        children: "Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place: under the king's pillow, in his soup, even in the royal toilet. The king was furious, but he couldn't seem to stop Jokester."
      }),
      /* @__PURE__ */ jsx143("p", {
        className: "leading-7 [&:not(:first-child)]:mt-6",
        children: "And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny that they couldn't help but laugh. And once they started laughing, they couldn't stop."
      }),
      /* @__PURE__ */ jsx143("h3", {
        className: "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        children: "The People's Rebellion"
      }),
      /* @__PURE__ */ jsx143("p", {
        className: "leading-7 [&:not(:first-child)]:mt-6",
        children: "The people of the kingdom, feeling uplifted by the laughter, started to tell jokes and puns again, and soon the entire kingdom was in on the joke."
      }),
      /* @__PURE__ */ jsx143("div", {
        className: "my-6 w-full overflow-y-auto",
        children: /* @__PURE__ */ jsxs88("table", {
          className: "w-full",
          children: [
            /* @__PURE__ */ jsx143("thead", {
              children: /* @__PURE__ */ jsxs88("tr", {
                className: "even:bg-muted m-0 border-t p-0",
                children: [
                  /* @__PURE__ */ jsx143("th", {
                    className: "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
                    children: "King's Treasury"
                  }),
                  /* @__PURE__ */ jsx143("th", {
                    className: "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
                    children: "People's happiness"
                  })
                ]
              })
            }),
            /* @__PURE__ */ jsxs88("tbody", {
              children: [
                /* @__PURE__ */ jsxs88("tr", {
                  className: "even:bg-muted m-0 border-t p-0",
                  children: [
                    /* @__PURE__ */ jsx143("td", {
                      className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                      children: "Empty"
                    }),
                    /* @__PURE__ */ jsx143("td", {
                      className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                      children: "Overflowing"
                    })
                  ]
                }),
                /* @__PURE__ */ jsxs88("tr", {
                  className: "even:bg-muted m-0 border-t p-0",
                  children: [
                    /* @__PURE__ */ jsx143("td", {
                      className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                      children: "Modest"
                    }),
                    /* @__PURE__ */ jsx143("td", {
                      className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                      children: "Satisfied"
                    })
                  ]
                }),
                /* @__PURE__ */ jsxs88("tr", {
                  className: "even:bg-muted m-0 border-t p-0",
                  children: [
                    /* @__PURE__ */ jsx143("td", {
                      className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                      children: "Full"
                    }),
                    /* @__PURE__ */ jsx143("td", {
                      className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                      children: "Ecstatic"
                    })
                  ]
                })
              ]
            })
          ]
        })
      }),
      /* @__PURE__ */ jsx143("p", {
        className: "leading-7 [&:not(:first-child)]:mt-6",
        children: "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax. Jokester was declared a hero, and the kingdom lived happily ever after."
      }),
      /* @__PURE__ */ jsx143("p", {
        className: "leading-7 [&:not(:first-child)]:mt-6",
        children: "The moral of the story is: never underestimate the power of a good laugh and always be careful of bad ideas."
      })
    ]
  });
}

// src/shadcn-ui/examples/typography-h1.tsx
import { jsx as jsx144 } from "react/jsx-runtime";
function TypographyH1() {
  return /* @__PURE__ */ jsx144("h1", {
    className: "scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance",
    children: "Taxing Laughter: The Joke Tax Chronicles"
  });
}

// src/shadcn-ui/examples/typography-h2.tsx
import { jsx as jsx145 } from "react/jsx-runtime";
function TypographyH2() {
  return /* @__PURE__ */ jsx145("h2", {
    className: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
    children: "The People of the Kingdom"
  });
}

// src/shadcn-ui/examples/typography-h3.tsx
import { jsx as jsx146 } from "react/jsx-runtime";
function TypographyH3() {
  return /* @__PURE__ */ jsx146("h3", {
    className: "scroll-m-20 text-2xl font-semibold tracking-tight",
    children: "The Joke Tax"
  });
}

// src/shadcn-ui/examples/typography-h4.tsx
import { jsx as jsx147 } from "react/jsx-runtime";
function TypographyH4() {
  return /* @__PURE__ */ jsx147("h4", {
    className: "scroll-m-20 text-xl font-semibold tracking-tight",
    children: "People stopped telling jokes"
  });
}

// src/shadcn-ui/examples/typography-inline-code.tsx
import { jsx as jsx148 } from "react/jsx-runtime";
function TypographyInlineCode() {
  return /* @__PURE__ */ jsx148("code", {
    className: "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
    children: "@radix-ui/react-alert-dialog"
  });
}

// src/shadcn-ui/examples/typography-large.tsx
import { jsx as jsx149 } from "react/jsx-runtime";
function TypographyLarge() {
  return /* @__PURE__ */ jsx149("div", {
    className: "text-lg font-semibold",
    children: "Are you absolutely sure?"
  });
}

// src/shadcn-ui/examples/typography-lead.tsx
import { jsx as jsx150 } from "react/jsx-runtime";
function TypographyLead() {
  return /* @__PURE__ */ jsx150("p", {
    className: "text-muted-foreground text-xl",
    children: "A modal dialog that interrupts the user with important content and expects a response."
  });
}

// src/shadcn-ui/examples/typography-list.tsx
import { jsx as jsx151, jsxs as jsxs89 } from "react/jsx-runtime";
function TypographyList() {
  return /* @__PURE__ */ jsxs89("ul", {
    className: "my-6 ml-6 list-disc [&>li]:mt-2",
    children: [
      /* @__PURE__ */ jsx151("li", {
        children: "1st level of puns: 5 gold coins"
      }),
      /* @__PURE__ */ jsx151("li", {
        children: "2nd level of jokes: 10 gold coins"
      }),
      /* @__PURE__ */ jsx151("li", {
        children: "3rd level of one-liners : 20 gold coins"
      })
    ]
  });
}

// src/shadcn-ui/examples/typography-muted.tsx
import { jsx as jsx152 } from "react/jsx-runtime";
function TypographyMuted() {
  return /* @__PURE__ */ jsx152("p", {
    className: "text-muted-foreground text-sm",
    children: "Enter your email address."
  });
}

// src/shadcn-ui/examples/typography-p.tsx
import { jsx as jsx153 } from "react/jsx-runtime";
function TypographyP() {
  return /* @__PURE__ */ jsx153("p", {
    className: "leading-7 [&:not(:first-child)]:mt-6",
    children: "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax."
  });
}

// src/shadcn-ui/examples/typography-small.tsx
import { jsx as jsx154 } from "react/jsx-runtime";
function TypographySmall() {
  return /* @__PURE__ */ jsx154("small", {
    className: "text-sm leading-none font-medium",
    children: "Email address"
  });
}

// src/shadcn-ui/examples/typography-table.tsx
import { jsx as jsx155, jsxs as jsxs90 } from "react/jsx-runtime";
function TypographyTable() {
  return /* @__PURE__ */ jsx155("div", {
    className: "my-6 w-full overflow-y-auto",
    children: /* @__PURE__ */ jsxs90("table", {
      className: "w-full",
      children: [
        /* @__PURE__ */ jsx155("thead", {
          children: /* @__PURE__ */ jsxs90("tr", {
            className: "even:bg-muted m-0 border-t p-0",
            children: [
              /* @__PURE__ */ jsx155("th", {
                className: "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
                children: "King's Treasury"
              }),
              /* @__PURE__ */ jsx155("th", {
                className: "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
                children: "People's happiness"
              })
            ]
          })
        }),
        /* @__PURE__ */ jsxs90("tbody", {
          children: [
            /* @__PURE__ */ jsxs90("tr", {
              className: "even:bg-muted m-0 border-t p-0",
              children: [
                /* @__PURE__ */ jsx155("td", {
                  className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                  children: "Empty"
                }),
                /* @__PURE__ */ jsx155("td", {
                  className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                  children: "Overflowing"
                })
              ]
            }),
            /* @__PURE__ */ jsxs90("tr", {
              className: "even:bg-muted m-0 border-t p-0",
              children: [
                /* @__PURE__ */ jsx155("td", {
                  className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                  children: "Modest"
                }),
                /* @__PURE__ */ jsx155("td", {
                  className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                  children: "Satisfied"
                })
              ]
            }),
            /* @__PURE__ */ jsxs90("tr", {
              className: "even:bg-muted m-0 border-t p-0",
              children: [
                /* @__PURE__ */ jsx155("td", {
                  className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                  children: "Full"
                }),
                /* @__PURE__ */ jsx155("td", {
                  className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                  children: "Ecstatic"
                })
              ]
            })
          ]
        })
      ]
    })
  });
}

// src/shadcn-ui/examples/index.tsx
import { jsx as jsx156, jsxs as jsxs91 } from "react/jsx-runtime";
function ReturnToTop({ spriteUrl }) {
  return /* @__PURE__ */ jsx156("a", {
    href: "#table-of-contents",
    className: "inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 font-medium text-primary-foreground text-sm transition-colors hover:bg-primary/80 hover:text-foreground",
    "aria-label": "Return to table of contents",
    children: /* @__PURE__ */ jsx156(SpriteIcon, {
      url: spriteUrl,
      id: "ArrowUp",
      className: "h-4 w-4"
    })
  });
}
function ComponentSection({ id, title, spriteUrl, children }) {
  return /* @__PURE__ */ jsxs91("section", {
    id,
    className: "mb-12",
    children: [
      /* @__PURE__ */ jsxs91("div", {
        className: "mb-6 flex items-center justify-between border-b pb-2",
        children: [
          /* @__PURE__ */ jsx156("h2", {
            className: "font-bold text-3xl",
            children: title
          }),
          /* @__PURE__ */ jsx156(ReturnToTop, {
            spriteUrl
          })
        ]
      }),
      children
    ]
  });
}
function ComponentExample({ name, children }) {
  return /* @__PURE__ */ jsxs91("div", {
    className: "rounded-lg border bg-background p-6",
    children: [
      /* @__PURE__ */ jsx156("h3", {
        className: "mb-4 font-semibold text-accent-foreground text-lg",
        children: name
      }),
      children
    ]
  });
}
function SpriteExamples({ spriteUrl }) {
  return /* @__PURE__ */ jsxs91("div", {
    className: "p-6",
    children: [
      /* @__PURE__ */ jsx156("h2", {
        className: "mb-4 font-bold text-2xl",
        children: "Lucide Icon Sprites"
      }),
      /* @__PURE__ */ jsxs91("p", {
        className: "mb-6 text-gray-600",
        children: [
          "All ",
          iconNames.length,
          " icons from the lucide sprite sheet"
        ]
      }),
      /* @__PURE__ */ jsx156("div", {
        className: "flex flex-row flex-wrap gap-4",
        children: iconNames.map((iconName) => /* @__PURE__ */ jsx156("div", {
          className: "flex flex-col items-center rounded-lg border bg-background p-3 transition-colors hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:hover:bg-input/50",
          children: /* @__PURE__ */ jsxs91(Tooltip, {
            children: [
              /* @__PURE__ */ jsx156(TooltipTrigger, {
                asChild: true,
                children: /* @__PURE__ */ jsx156(SpriteIcon, {
                  url: spriteUrl,
                  id: iconName,
                  className: "h-6 w-6 text-accent-foreground",
                  viewBox: "0 0 24 24"
                })
              }),
              /* @__PURE__ */ jsx156(TooltipContent, {
                children: /* @__PURE__ */ jsx156("p", {
                  children: iconName
                })
              })
            ]
          })
        }, iconName))
      })
    ]
  });
}
function ComponentExamples({ spriteUrl, exampleUrl }) {
  const sections = [
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
  return /* @__PURE__ */ jsxs91("div", {
    className: "container mx-auto max-w-7xl px-6 py-8",
    children: [
      /* @__PURE__ */ jsxs91("div", {
        className: "mb-8",
        children: [
          /* @__PURE__ */ jsxs91("div", {
            className: "flex flex-row justify-between",
            children: [
              /* @__PURE__ */ jsx156("h1", {
                className: "mb-4 font-bold text-4xl",
                children: "shadcn/ui Examples"
              }),
              /* @__PURE__ */ jsxs91("div", {
                className: "flex items-center gap-x-4",
                children: [
                  /* @__PURE__ */ jsx156(ThemeSwitch, {
                    spriteUrl
                  }),
                  /* @__PURE__ */ jsx156(Link, {
                    href: "/",
                    children: /* @__PURE__ */ jsx156(SpriteIcon, {
                      url: spriteUrl,
                      id: "House",
                      className: "size-5 text-accent-foreground",
                      viewBox: "0 0 24 24"
                    })
                  })
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsx156("p", {
            className: "mb-6 text-lg text-muted-foreground",
            children: "A comprehensive showcase of all shadcn/ui components with live examples."
          }),
          /* @__PURE__ */ jsxs91("div", {
            id: "table-of-contents",
            className: "mb-8 rounded-lg border bg-muted/10 p-6",
            children: [
              /* @__PURE__ */ jsx156("h2", {
                className: "mb-4 font-semibold text-xl",
                children: "Table of Contents"
              }),
              /* @__PURE__ */ jsx156("div", {
                className: "columns-1 gap-8 sm:columns-2 lg:columns-4",
                children: sections.map((section) => /* @__PURE__ */ jsx156("a", {
                  href: `#${section.id}`,
                  className: "mb-4 block text-primary transition-colors hover:text-primary/80 hover:underline",
                  children: section.title
                }, section.id))
              })
            ]
          })
        ]
      }),
      /* @__PURE__ */ jsxs91("div", {
        className: "space-y-16",
        children: [
          /* @__PURE__ */ jsx156(ComponentSection, {
            id: "sprites",
            title: "Sprite Examples",
            spriteUrl,
            children: /* @__PURE__ */ jsx156("div", {
              className: "max-w-2xl",
              children: /* @__PURE__ */ jsx156(SpriteExamples, {
                spriteUrl
              })
            })
          }),
          /* @__PURE__ */ jsx156("h2", {
            className: "mb-4 font-bold text-4xl",
            children: "Component Examples"
          }),
          /* @__PURE__ */ jsx156(ComponentSection, {
            id: "accordion",
            title: "Accordion",
            spriteUrl,
            children: /* @__PURE__ */ jsx156("div", {
              className: "max-w-2xl",
              children: /* @__PURE__ */ jsx156(ComponentExample, {
                name: "Accordion Demo",
                children: /* @__PURE__ */ jsx156(AccordionDemo, {
                  spriteUrl
                })
              })
            })
          }),
          /* @__PURE__ */ jsx156(ComponentSection, {
            id: "alerts",
            title: "Alerts",
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "flex max-w-2xl flex-col gap-6",
              children: [
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Alert Demo",
                  children: /* @__PURE__ */ jsx156(AlertDemo, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Alert Destructive",
                  children: /* @__PURE__ */ jsx156(AlertDestructive, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Alert Dialog Demo",
                  children: /* @__PURE__ */ jsx156(AlertDialogDemo, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx156(ComponentSection, {
            id: "avatar",
            title: "Avatar",
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "flex flex-row gap-6",
              children: [
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Avatar Demo",
                  children: /* @__PURE__ */ jsx156(AvatarDemo, {})
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Aspect Ratio Demo",
                  children: /* @__PURE__ */ jsx156(AspectRatioDemo, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx156(ComponentSection, {
            id: "badges",
            title: "Badges",
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "flex flex-row gap-6",
              children: [
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Badge Demo",
                  children: /* @__PURE__ */ jsx156(BadgeDemo, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Badge Destructive",
                  children: /* @__PURE__ */ jsx156(BadgeDestructive, {})
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Badge Outline",
                  children: /* @__PURE__ */ jsx156(BadgeOutline, {})
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Badge Secondary",
                  children: /* @__PURE__ */ jsx156(BadgeSecondary, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx156(ComponentSection, {
            id: "breadcrumbs",
            title: "Breadcrumbs",
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "flex max-w-2xl flex-col gap-6",
              children: [
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Breadcrumb Demo",
                  children: /* @__PURE__ */ jsx156(BreadcrumbDemo, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Breadcrumb Dropdown",
                  children: /* @__PURE__ */ jsx156(BreadcrumbWithDropdown, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Breadcrumb Ellipsis",
                  children: /* @__PURE__ */ jsx156(BreadcrumbCollapsed, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Breadcrumb Link",
                  children: /* @__PURE__ */ jsx156(BreadcrumbWithCustomSeparator, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Breadcrumb Separator",
                  children: /* @__PURE__ */ jsx156(BreadcrumbWithCustomSeparator2, {
                    spriteUrl
                  })
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx156(ComponentSection, {
            id: "buttons",
            title: "Buttons",
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
              children: [
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Button Demo",
                  children: /* @__PURE__ */ jsx156(ButtonDemo, {})
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Button As Child",
                  children: /* @__PURE__ */ jsx156(ButtonAsChild, {})
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Button Destructive",
                  children: /* @__PURE__ */ jsx156(ButtonDestructive, {})
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Button Ghost",
                  children: /* @__PURE__ */ jsx156(ButtonGhost, {})
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Button Icon",
                  children: /* @__PURE__ */ jsx156(ButtonIcon, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Button Link",
                  children: /* @__PURE__ */ jsx156(ButtonLink, {})
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Button Loading",
                  children: /* @__PURE__ */ jsx156(ButtonLoading, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Button Outline",
                  children: /* @__PURE__ */ jsx156(ButtonOutline, {})
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Button Secondary",
                  children: /* @__PURE__ */ jsx156(ButtonSecondary, {})
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Button With Icon",
                  children: /* @__PURE__ */ jsx156(ButtonWithIcon, {
                    spriteUrl
                  })
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx156(ComponentSection, {
            id: "cards",
            title: "Cards",
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "flex flex-col gap-6 lg:flex-row",
              children: [
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Card Demo",
                  children: /* @__PURE__ */ jsx156(CardDemo, {})
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Card With Form",
                  children: /* @__PURE__ */ jsx156(CardWithForm, {
                    spriteUrl
                  })
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx156(ComponentSection, {
            id: "checkboxes",
            title: "Checkboxes",
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "grid grid-cols-1 gap-6 md:grid-cols-2",
              children: [
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Checkbox Demo",
                  children: /* @__PURE__ */ jsx156(CheckboxDemo, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Checkbox Disabled",
                  children: /* @__PURE__ */ jsx156(CheckboxDisabled, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Checkbox Form Multiple",
                  children: /* @__PURE__ */ jsx156(CheckboxReactHookFormMultiple, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Checkbox Form Single",
                  children: /* @__PURE__ */ jsx156(CheckboxReactHookFormSingle, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Checkbox With Text",
                  children: /* @__PURE__ */ jsx156(CheckboxWithText, {
                    spriteUrl
                  })
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx156(ComponentSection, {
            id: "collapsible",
            title: "Collapsible",
            spriteUrl,
            children: /* @__PURE__ */ jsx156("div", {
              className: "max-w-md",
              children: /* @__PURE__ */ jsx156(ComponentExample, {
                name: "Collapsible Demo",
                children: /* @__PURE__ */ jsx156(CollapsibleDemo, {
                  spriteUrl
                })
              })
            })
          }),
          /* @__PURE__ */ jsx156(ComponentSection, {
            id: "combobox",
            title: "Combobox",
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "grid grid-cols-1 gap-6 md:grid-cols-2",
              children: [
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Combobox Demo",
                  children: /* @__PURE__ */ jsx156(ComboboxDemo, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Combobox Dropdown Menu",
                  children: /* @__PURE__ */ jsx156(ComboboxDropdownMenu, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Combobox Form",
                  children: /* @__PURE__ */ jsx156(ComboboxForm, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Combobox Popover",
                  children: /* @__PURE__ */ jsx156(ComboboxPopover, {
                    spriteUrl
                  })
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx156(ComponentSection, {
            id: "menus",
            title: "Menus",
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "flex flex-row gap-6",
              children: [
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Context Menu Demo",
                  children: /* @__PURE__ */ jsx156(ContextMenuDemo, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Dropdown Menu Demo",
                  children: /* @__PURE__ */ jsx156(DropdownMenuDemo, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Dropdown Menu Checkboxes",
                  children: /* @__PURE__ */ jsx156(DropdownMenuCheckboxes, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Dropdown Menu Radio Group",
                  children: /* @__PURE__ */ jsx156(DropdownMenuRadioGroupDemo, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Menubar Demo",
                  children: /* @__PURE__ */ jsx156(MenubarDemo, {
                    spriteUrl
                  })
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx156(ComponentSection, {
            id: "dialogs",
            title: "Dialogs",
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "flex flex-row gap-6",
              children: [
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Dialog Demo",
                  children: /* @__PURE__ */ jsx156(DialogDemo, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Dialog Close Button",
                  children: /* @__PURE__ */ jsx156(DialogCloseButton, {
                    spriteUrl
                  })
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx156(ComponentSection, {
            id: "inputs",
            title: "Inputs",
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "grid grid-cols-1 gap-6 md:grid-cols-2",
              children: [
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Input Demo",
                  children: /* @__PURE__ */ jsx156(InputDemo, {})
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Input Disabled",
                  children: /* @__PURE__ */ jsx156(InputDisabled, {})
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Input File",
                  children: /* @__PURE__ */ jsx156(InputFile, {})
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Input Form",
                  children: /* @__PURE__ */ jsx156(InputForm, {})
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Input With Button",
                  children: /* @__PURE__ */ jsx156(InputWithButton, {})
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Input With Label",
                  children: /* @__PURE__ */ jsx156(InputWithLabel, {})
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Input With Text",
                  children: /* @__PURE__ */ jsx156(InputWithText, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx156(ComponentSection, {
            id: "labels",
            title: "Labels",
            spriteUrl,
            children: /* @__PURE__ */ jsx156("div", {
              className: "max-w-md",
              children: /* @__PURE__ */ jsx156(ComponentExample, {
                name: "Label Demo",
                children: /* @__PURE__ */ jsx156(LabelDemo, {
                  spriteUrl
                })
              })
            })
          }),
          /* @__PURE__ */ jsx156(ComponentSection, {
            id: "navigation",
            title: "Navigation",
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "flex flex-col gap-6",
              children: [
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Navigation Menu Demo",
                  children: /* @__PURE__ */ jsx156(NavigationMenuDemo, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Pagination Demo",
                  children: /* @__PURE__ */ jsx156(PaginationDemo, {
                    spriteUrl
                  })
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx156(ComponentSection, {
            id: "overlays",
            title: "Overlays",
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "flex flex-row gap-6",
              children: [
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Hover Card Demo",
                  children: /* @__PURE__ */ jsx156(HoverCardDemo, {})
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Popover Demo",
                  children: /* @__PURE__ */ jsx156(PopoverDemo, {})
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Mode Toggle",
                  children: /* @__PURE__ */ jsx156(ModeToggle, {
                    spriteUrl
                  })
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx156(ComponentSection, {
            id: "radio",
            title: "Radio Groups",
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "flex flex-row gap-6",
              children: [
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Radio Group Demo",
                  children: /* @__PURE__ */ jsx156(RadioGroupDemo, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Radio Group Form",
                  children: /* @__PURE__ */ jsx156(RadioGroupForm, {
                    spriteUrl
                  })
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx156(ComponentSection, {
            id: "scroll",
            title: "Scroll Areas",
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "flex flex-col gap-6 lg:flex-row",
              children: [
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Scroll Area Demo",
                  children: /* @__PURE__ */ jsx156(ScrollAreaDemo, {})
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Scroll Area Horizontal Demo",
                  children: /* @__PURE__ */ jsx156(ScrollAreaHorizontalDemo, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx156(ComponentSection, {
            id: "selects",
            title: "Selects",
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "grid grid-cols-1 gap-6 md:grid-cols-2",
              children: [
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Select Demo",
                  children: /* @__PURE__ */ jsx156(SelectDemo, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Select Form",
                  children: /* @__PURE__ */ jsx156(SelectForm, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Select Scrollable",
                  children: /* @__PURE__ */ jsx156(SelectScrollable, {
                    spriteUrl
                  })
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx156(ComponentSection, {
            id: "separators",
            title: "Separators",
            spriteUrl,
            children: /* @__PURE__ */ jsx156("div", {
              className: "max-w-md",
              children: /* @__PURE__ */ jsx156(ComponentExample, {
                name: "Separator Demo",
                children: /* @__PURE__ */ jsx156(SeparatorDemo, {})
              })
            })
          }),
          /* @__PURE__ */ jsx156(ComponentSection, {
            id: "sheets",
            title: "Sheets",
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "flex flex-row gap-6",
              children: [
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Sheet Demo",
                  children: /* @__PURE__ */ jsx156(SheetDemo, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Sheet Side",
                  children: /* @__PURE__ */ jsx156(SheetSide, {
                    spriteUrl
                  })
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx156(ComponentSection, {
            id: "skeleton",
            title: "Skeleton",
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "flex flex-col gap-6 lg:flex-row",
              children: [
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Skeleton Demo",
                  children: /* @__PURE__ */ jsx156(SkeletonDemo, {})
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Skeleton Card",
                  children: /* @__PURE__ */ jsx156(SkeletonCard, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx156(ComponentSection, {
            id: "sliders",
            title: "Sliders",
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "max-w-md",
              children: [
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Slider Demo",
                  children: /* @__PURE__ */ jsx156(SliderDemo, {})
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Progress Demo",
                  children: /* @__PURE__ */ jsx156(ProgressDemo, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx156(ComponentSection, {
            id: "switches",
            title: "Switches",
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "flex flex-row gap-6",
              children: [
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Switch Demo",
                  children: /* @__PURE__ */ jsx156(SwitchDemo, {})
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Switch Form",
                  children: /* @__PURE__ */ jsx156(SwitchForm, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx156(ComponentSection, {
            id: "tables",
            title: "Tables",
            spriteUrl,
            children: /* @__PURE__ */ jsx156("div", {
              className: "max-w-4xl",
              children: /* @__PURE__ */ jsx156(ComponentExample, {
                name: "Table Demo",
                children: /* @__PURE__ */ jsx156(TableDemo, {})
              })
            })
          }),
          /* @__PURE__ */ jsx156(ComponentSection, {
            id: "tabs",
            title: "Tabs",
            spriteUrl,
            children: /* @__PURE__ */ jsx156("div", {
              className: "max-w-2xl",
              children: /* @__PURE__ */ jsx156(ComponentExample, {
                name: "Tabs Demo",
                children: /* @__PURE__ */ jsx156(TabsDemo, {})
              })
            })
          }),
          /* @__PURE__ */ jsx156(ComponentSection, {
            id: "textareas",
            title: "Textareas",
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "grid grid-cols-1 gap-6 md:grid-cols-2",
              children: [
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Textarea Demo",
                  children: /* @__PURE__ */ jsx156(TextareaDemo, {})
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Textarea Disabled",
                  children: /* @__PURE__ */ jsx156(TextareaDisabled, {})
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Textarea Form",
                  children: /* @__PURE__ */ jsx156(TextareaForm, {})
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Textarea With Button",
                  children: /* @__PURE__ */ jsx156(TextareaWithButton, {})
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Textarea With Label",
                  children: /* @__PURE__ */ jsx156(TextareaWithLabel, {})
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Textarea With Text",
                  children: /* @__PURE__ */ jsx156(TextareaWithText, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx156(ComponentSection, {
            id: "toggles",
            title: "Toggles",
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
              children: [
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Toggle Demo",
                  children: /* @__PURE__ */ jsx156(ToggleDemo, {
                    spriteUrl: exampleUrl
                  })
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Toggle Disabled",
                  children: /* @__PURE__ */ jsx156(ToggleDisabled, {
                    spriteUrl: exampleUrl
                  })
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Toggle Group Demo",
                  children: /* @__PURE__ */ jsx156(ToggleGroupDemo, {
                    spriteUrl: exampleUrl
                  })
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Toggle Group Disabled",
                  children: /* @__PURE__ */ jsx156(ToggleGroupDemo2, {
                    spriteUrl: exampleUrl
                  })
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Toggle Group Large",
                  children: /* @__PURE__ */ jsx156(ToggleGroupDemo3, {
                    spriteUrl: exampleUrl
                  })
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Toggle Group Outline",
                  children: /* @__PURE__ */ jsx156(ToggleGroupDemo4, {
                    spriteUrl: exampleUrl
                  })
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Toggle Group Single",
                  children: /* @__PURE__ */ jsx156(ToggleGroupDemo5, {
                    spriteUrl: exampleUrl
                  })
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Toggle Group Small",
                  children: /* @__PURE__ */ jsx156(ToggleGroupDemo6, {
                    spriteUrl: exampleUrl
                  })
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Toggle Large",
                  children: /* @__PURE__ */ jsx156(ToggleLg, {
                    spriteUrl: exampleUrl
                  })
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Toggle Outline",
                  children: /* @__PURE__ */ jsx156(ToggleOutline, {
                    spriteUrl: exampleUrl
                  })
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Toggle Small",
                  children: /* @__PURE__ */ jsx156(ToggleSm, {
                    spriteUrl: exampleUrl
                  })
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Toggle With Text",
                  children: /* @__PURE__ */ jsx156(ToggleWithText, {
                    spriteUrl: exampleUrl
                  })
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx156(ComponentSection, {
            id: "tooltips",
            title: "Tooltips",
            spriteUrl,
            children: /* @__PURE__ */ jsx156("div", {
              className: "max-w-md",
              children: /* @__PURE__ */ jsx156(ComponentExample, {
                name: "Tooltip Demo",
                children: /* @__PURE__ */ jsx156(TooltipDemo, {})
              })
            })
          }),
          /* @__PURE__ */ jsx156(ComponentSection, {
            id: "typography",
            title: "Typography",
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "flex max-w-4xl flex-col gap-6",
              children: [
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Typography Demo",
                  children: /* @__PURE__ */ jsx156(TypographyDemo, {})
                }),
                /* @__PURE__ */ jsxs91("div", {
                  className: "grid grid-cols-1 gap-6 md:grid-cols-2",
                  children: [
                    /* @__PURE__ */ jsx156(ComponentExample, {
                      name: "Typography H1",
                      children: /* @__PURE__ */ jsx156(TypographyH1, {})
                    }),
                    /* @__PURE__ */ jsx156(ComponentExample, {
                      name: "Typography H2",
                      children: /* @__PURE__ */ jsx156(TypographyH2, {})
                    }),
                    /* @__PURE__ */ jsx156(ComponentExample, {
                      name: "Typography H3",
                      children: /* @__PURE__ */ jsx156(TypographyH3, {})
                    }),
                    /* @__PURE__ */ jsx156(ComponentExample, {
                      name: "Typography H4",
                      children: /* @__PURE__ */ jsx156(TypographyH4, {})
                    }),
                    /* @__PURE__ */ jsx156(ComponentExample, {
                      name: "Typography Paragraph",
                      children: /* @__PURE__ */ jsx156(TypographyP, {})
                    }),
                    /* @__PURE__ */ jsx156(ComponentExample, {
                      name: "Typography Blockquote",
                      children: /* @__PURE__ */ jsx156(TypographyBlockquote, {})
                    }),
                    /* @__PURE__ */ jsx156(ComponentExample, {
                      name: "Typography List",
                      children: /* @__PURE__ */ jsx156(TypographyList, {})
                    }),
                    /* @__PURE__ */ jsx156(ComponentExample, {
                      name: "Typography Inline Code",
                      children: /* @__PURE__ */ jsx156(TypographyInlineCode, {})
                    }),
                    /* @__PURE__ */ jsx156(ComponentExample, {
                      name: "Typography Lead",
                      children: /* @__PURE__ */ jsx156(TypographyLead, {})
                    }),
                    /* @__PURE__ */ jsx156(ComponentExample, {
                      name: "Typography Large",
                      children: /* @__PURE__ */ jsx156(TypographyLarge, {})
                    }),
                    /* @__PURE__ */ jsx156(ComponentExample, {
                      name: "Typography Small",
                      children: /* @__PURE__ */ jsx156(TypographySmall, {})
                    }),
                    /* @__PURE__ */ jsx156(ComponentExample, {
                      name: "Typography Muted",
                      children: /* @__PURE__ */ jsx156(TypographyMuted, {})
                    })
                  ]
                }),
                /* @__PURE__ */ jsx156(ComponentExample, {
                  name: "Typography Table",
                  children: /* @__PURE__ */ jsx156(TypographyTable, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx156(ComponentSection, {
            id: "notifications",
            title: "Notifications",
            spriteUrl,
            children: /* @__PURE__ */ jsx156("div", {
              className: "max-w-md",
              children: /* @__PURE__ */ jsx156(ComponentExample, {
                name: "Sonner Demo",
                children: /* @__PURE__ */ jsx156(SonnerDemo, {})
              })
            })
          })
        ]
      })
    ]
  });
}
export {
  ComponentExamples
};

//# debugId=78580DA3CD00CFE764756E2164756E21
