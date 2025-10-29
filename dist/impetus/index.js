// src/impetus/components/error-boundary.tsx
import { href, isRouteErrorResponse, Link, useRouteError } from "react-router";
import { jsx, jsxs } from "react/jsx-runtime";
var HTTP_ERROR_CONFIG = {
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
var DEFAULT_ERROR = {
  message: "Oops, something went wrong.",
  detail: "Unexpected error. Refresh to try again or contact support if the issue persists."
};
function DevErrorDisplay({ message, detail, stack }) {
  return /* @__PURE__ */ jsxs("main", {
    className: "container mx-auto space-y-4 p-4 pt-16",
    children: [
      /* @__PURE__ */ jsxs("div", {
        className: "space-y-1",
        children: [
          /* @__PURE__ */ jsx("h1", {
            className: "font-semibold text-lg",
            children: message
          }),
          /* @__PURE__ */ jsx("p", {
            className: "text-base text-muted-foreground",
            children: detail
          })
        ]
      }),
      stack && /* @__PURE__ */ jsx("pre", {
        className: "w-full overflow-x-auto rounded-lg bg-destructive/10 p-4 text-destructive text-sm",
        children: /* @__PURE__ */ jsx("code", {
          children: stack
        })
      })
    ]
  });
}
function ProductionErrorDisplay({ message, detail }) {
  return /* @__PURE__ */ jsx("main", {
    className: "flex h-screen items-center justify-center p-6",
    children: /* @__PURE__ */ jsxs("div", {
      className: "mx-auto flex max-w-sm flex-col items-center gap-4 text-center",
      children: [
        /* @__PURE__ */ jsxs("div", {
          className: "space-y-1",
          children: [
            /* @__PURE__ */ jsx("h1", {
              className: "text-lg",
              children: message
            }),
            /* @__PURE__ */ jsx("p", {
              className: "text-base text-muted-foreground italic",
              children: detail
            })
          ]
        }),
        /* @__PURE__ */ jsx(Link, {
          to: href("/"),
          className: "rounded-xl bg-accent px-8 py-2",
          children: "Back to home"
        })
      ]
    })
  });
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
function GeneralErrorBoundary({ isDev = false }) {
  const error = useRouteError();
  if (isDev && error instanceof Error) {
    console.error("\uD83D\uDD34 error on dev", error);
    return /* @__PURE__ */ jsx(DevErrorDisplay, {
      message: "Application Error",
      detail: error.message,
      stack: error.stack
    });
  }
  const { message, detail } = getErrorInfo(error);
  return /* @__PURE__ */ jsx(ProductionErrorDisplay, {
    message,
    detail
  });
}
// src/impetus/components/LoadingBar.tsx
import clsx from "clsx";
import { memo } from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var LoadingBar = memo(({ className }) => /* @__PURE__ */ jsx2("div", {
  className: clsx("loading-bar", className)
}));
// src/impetus/components/NavMenu.tsx
import { createSpriteIcon as createSpriteIcon2 } from "@ycore/componentry/images";
import clsx5 from "clsx";
import { createContext, useState } from "react";
import { useLocation } from "react-router";

// src/shadcn-ui/components/button.tsx
import { cva } from "class-variance-authority";
import clsx2 from "clsx";
import { Slot } from "radix-ui";
import { jsx as jsx3 } from "react/jsx-runtime";
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
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
});
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Slot : "button";
  return /* @__PURE__ */ jsx3(Comp, {
    "data-slot": "button",
    className: clsx2(buttonVariants({ variant, size, className })),
    ...props
  });
}

// src/shadcn-ui/components/menubar.tsx
import clsx3 from "clsx";
import { Menubar as MenubarPrimitive } from "radix-ui";

// src/vibrant/components/svg-icon.tsx
import { createSpriteIcon } from "@ycore/componentry/images";
var SvgIcon = createSpriteIcon("lucide");

// src/shadcn-ui/components/menubar.tsx
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
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
function MenubarCheckboxItem({ className, children, checked, ...props }) {
  return /* @__PURE__ */ jsxs2(MenubarPrimitive.CheckboxItem, {
    "data-slot": "menubar-checkbox-item",
    className: clsx3("relative flex cursor-default select-none items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx4("span", {
        className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
        children: /* @__PURE__ */ jsx4(MenubarPrimitive.ItemIndicator, {
          children: /* @__PURE__ */ jsx4(SvgIcon, {
            iconId: "Check",
            className: "size-4"
          })
        })
      }),
      children
    ]
  });
}
function MenubarRadioItem({ className, children, ...props }) {
  return /* @__PURE__ */ jsxs2(MenubarPrimitive.RadioItem, {
    "data-slot": "menubar-radio-item",
    className: clsx3("relative flex cursor-default select-none items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx4("span", {
        className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
        children: /* @__PURE__ */ jsx4(MenubarPrimitive.ItemIndicator, {
          children: /* @__PURE__ */ jsx4(SvgIcon, {
            iconId: "Circle",
            className: "size-2 fill-current"
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
function MenubarSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs2(MenubarPrimitive.SubTrigger, {
    "data-slot": "menubar-sub-trigger",
    "data-inset": inset,
    className: clsx3("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[inset]:pl-8 data-[state=open]:text-accent-foreground", className),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx4(SvgIcon, {
        iconId: "ChevronRight",
        className: "ml-auto h-4 w-4"
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
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
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
function SheetContent({
  className,
  children,
  side = "right",
  ...props
}) {
  return /* @__PURE__ */ jsxs3(SheetPortal, {
    children: [
      /* @__PURE__ */ jsx5(SheetOverlay, {}),
      /* @__PURE__ */ jsxs3(SheetPrimitive.Content, {
        "data-slot": "sheet-content",
        className: clsx4("fixed z-50 flex flex-col gap-4 bg-background shadow-lg transition ease-in-out data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:duration-300 data-[state=open]:duration-500", side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm", side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm", side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b", side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t", className),
        ...props,
        children: [
          children,
          /* @__PURE__ */ jsxs3(SheetPrimitive.Close, {
            className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
            children: [
              /* @__PURE__ */ jsx5(SvgIcon, {
                iconId: "X",
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

// src/vibrant/components/link.tsx
import React from "react";
import { Link as RouterLink } from "react-router";
import { jsx as jsx6 } from "react/jsx-runtime";
var Link2 = React.forwardRef(function Link3(props, ref) {
  return /* @__PURE__ */ jsx6(RouterLink, {
    ...props,
    to: props.href,
    ref
  });
});

// src/impetus/components/NavMenu.tsx
import { jsx as jsx7, jsxs as jsxs4, Fragment } from "react/jsx-runtime";
var MenubarContext = createContext(null);
function renderMenubarItem(item, index, context) {
  const { currentPath, IconSprite } = context;
  if (item.separator) {
    return /* @__PURE__ */ jsx7(MenubarSeparator, {}, `separator-${index}`);
  }
  if (item.component) {
    const Component = item.component;
    return /* @__PURE__ */ jsx7(Component, {}, `component-${index}`);
  }
  const isActive = item.href && currentPath === item.href;
  if (item.items) {
    return /* @__PURE__ */ jsxs4(MenubarSub, {
      children: [
        /* @__PURE__ */ jsxs4(MenubarSubTrigger, {
          inset: item.inset,
          children: [
            item.iconId && /* @__PURE__ */ jsx7(IconSprite, {
              iconId: item.iconId
            }),
            item.label
          ]
        }),
        /* @__PURE__ */ jsx7(MenubarSubContent, {
          children: item.items.map((subItem, subIndex) => renderMenubarItem(subItem, subIndex, context))
        })
      ]
    }, `sub-${index}`);
  }
  if (item.checked !== undefined) {
    return /* @__PURE__ */ jsxs4(MenubarCheckboxItem, {
      checked: item.checked,
      disabled: item.disabled,
      children: [
        item.iconId && /* @__PURE__ */ jsx7(IconSprite, {
          iconId: item.iconId
        }),
        item.label,
        item.shortcut && /* @__PURE__ */ jsx7(MenubarShortcut, {
          children: item.shortcut
        })
      ]
    }, `checkbox-${index}`);
  }
  if (item.value !== undefined) {
    return /* @__PURE__ */ jsxs4(MenubarRadioItem, {
      value: item.value,
      disabled: item.disabled,
      children: [
        item.iconId && /* @__PURE__ */ jsx7(IconSprite, {
          iconId: item.iconId
        }),
        item.label,
        item.shortcut && /* @__PURE__ */ jsx7(MenubarShortcut, {
          children: item.shortcut
        })
      ]
    }, `radio-${index}`);
  }
  const ItemContent = /* @__PURE__ */ jsxs4(Fragment, {
    children: [
      item.iconId && /* @__PURE__ */ jsx7(IconSprite, {
        iconId: item.iconId
      }),
      item.label,
      item.shortcut && /* @__PURE__ */ jsx7(MenubarShortcut, {
        children: item.shortcut
      })
    ]
  });
  if (item.href) {
    return /* @__PURE__ */ jsx7(MenubarItem, {
      asChild: true,
      disabled: item.disabled,
      inset: item.inset,
      variant: item.variant,
      className: clsx5(isActive && "bg-accent text-accent-foreground"),
      children: /* @__PURE__ */ jsx7(Link2, {
        href: item.href,
        children: ItemContent
      })
    }, `item-${index}`);
  }
  return /* @__PURE__ */ jsx7(MenubarItem, {
    disabled: item.disabled,
    inset: item.inset,
    variant: item.variant,
    children: ItemContent
  }, `item-${index}`);
}
function renderMenuConfigItem(configItem, index, context) {
  const { currentPath, IconSprite, spriteKey } = context;
  if (configItem.radioGroup) {
    return /* @__PURE__ */ jsxs4(MenubarMenu, {
      children: [
        /* @__PURE__ */ jsx7(MenubarTrigger, {
          children: "Radio Group"
        }),
        /* @__PURE__ */ jsx7(MenubarContent, {
          children: /* @__PURE__ */ jsx7(MenubarRadioGroup, {
            value: configItem.value,
            children: configItem.items?.map((item, itemIndex) => renderMenubarItem(item, itemIndex, context))
          })
        })
      ]
    }, `radio-menu-${index}`);
  }
  if (configItem.component) {
    const Component = configItem.component;
    return /* @__PURE__ */ jsx7(MenubarMenu, {
      children: /* @__PURE__ */ jsx7(MenubarTrigger, {
        asChild: true,
        children: /* @__PURE__ */ jsx7("div", {
          children: /* @__PURE__ */ jsx7(Component, {
            spriteKey
          })
        })
      })
    }, `component-menu-${index}`);
  }
  if (configItem.href) {
    const isActive = currentPath === configItem.href;
    return /* @__PURE__ */ jsx7(MenubarMenu, {
      children: /* @__PURE__ */ jsx7(MenubarTrigger, {
        asChild: true,
        className: clsx5(isActive && "bg-accent text-accent-foreground"),
        children: /* @__PURE__ */ jsxs4(Link2, {
          href: configItem.href,
          children: [
            configItem.iconId && /* @__PURE__ */ jsx7(IconSprite, {
              iconId: configItem.iconId,
              className: "mr-2 size-4"
            }),
            configItem.label
          ]
        })
      })
    }, `nav-link-${index}`);
  }
  return /* @__PURE__ */ jsxs4(MenubarMenu, {
    children: [
      /* @__PURE__ */ jsxs4(MenubarTrigger, {
        children: [
          configItem.iconId && /* @__PURE__ */ jsx7(IconSprite, {
            iconId: configItem.iconId,
            className: "mr-2 size-4"
          }),
          configItem.label || "Menu",
          /* @__PURE__ */ jsx7(IconSprite, {
            iconId: "ChevronDown",
            className: "ml-2 size-3"
          })
        ]
      }),
      /* @__PURE__ */ jsx7(MenubarContent, {
        children: configItem.items?.map((item, itemIndex) => renderMenubarItem(item, itemIndex, context))
      })
    ]
  }, `menu-${index}`);
}
function renderSheetItem(item, index, context, onItemClick) {
  const { currentPath, IconSprite } = context;
  if (item.separator) {
    return /* @__PURE__ */ jsx7("div", {
      className: "my-2 h-px bg-border"
    }, `separator-${index}`);
  }
  if (item.component) {
    const Component = item.component;
    return /* @__PURE__ */ jsx7(Component, {}, `component-${index}`);
  }
  const isActive = item.href && currentPath === item.href;
  if (item.items) {
    return /* @__PURE__ */ jsxs4("div", {
      className: "space-y-2",
      children: [
        /* @__PURE__ */ jsxs4("div", {
          className: "px-4 py-2 font-medium text-muted-foreground text-sm",
          children: [
            item.iconId && /* @__PURE__ */ jsx7(IconSprite, {
              iconId: item.iconId,
              className: "mr-2 inline size-4"
            }),
            item.label
          ]
        }),
        /* @__PURE__ */ jsx7("div", {
          className: "space-y-1 pl-4",
          children: item.items.map((subItem, subIndex) => renderSheetItem(subItem, index + subIndex, context, onItemClick))
        })
      ]
    }, `submenu-${index}`);
  }
  const ItemContent = /* @__PURE__ */ jsxs4("div", {
    className: clsx5("flex items-center gap-3 rounded-md px-4 py-1 transition-colors hover:bg-accent hover:text-accent-foreground", isActive && "bg-accent text-accent-foreground"),
    children: [
      item.iconId && /* @__PURE__ */ jsx7(IconSprite, {
        iconId: item.iconId,
        className: "size-4"
      }),
      /* @__PURE__ */ jsx7("span", {
        children: item.label
      })
    ]
  });
  if (item.href) {
    return /* @__PURE__ */ jsx7(Link2, {
      href: item.href,
      onClick: onItemClick,
      children: ItemContent
    }, `item-${index}`);
  }
  return /* @__PURE__ */ jsx7("div", {
    children: ItemContent
  }, `item-${index}`);
}
function renderSheetMenuSection(configItem, index, context, onItemClick) {
  if (configItem.component) {
    const Component = configItem.component;
    return /* @__PURE__ */ jsx7(Component, {
      spriteKey: context.spriteKey
    }, `component-${index}`);
  }
  if (configItem.href) {
    const isActive = context.currentPath === configItem.href;
    return /* @__PURE__ */ jsx7(Link2, {
      href: configItem.href,
      onClick: onItemClick,
      children: /* @__PURE__ */ jsxs4("div", {
        className: clsx5("flex items-center gap-3 rounded-md px-4 py-1 transition-colors hover:bg-accent hover:text-accent-foreground", isActive && "bg-accent text-accent-foreground"),
        children: [
          configItem.iconId && /* @__PURE__ */ jsx7(context.IconSprite, {
            iconId: configItem.iconId,
            className: "size-4"
          }),
          /* @__PURE__ */ jsx7("span", {
            children: configItem.label
          })
        ]
      })
    }, `nav-link-${index}`);
  }
  if (configItem.items) {
    return /* @__PURE__ */ jsxs4("div", {
      className: "space-y-1",
      children: [
        /* @__PURE__ */ jsxs4("div", {
          className: "border-b px-4 py-2 font-medium text-muted-foreground text-sm",
          children: [
            configItem.iconId && /* @__PURE__ */ jsx7(context.IconSprite, {
              iconId: configItem.iconId,
              className: "mr-2 inline size-4"
            }),
            configItem.label || "Menu"
          ]
        }),
        /* @__PURE__ */ jsx7("div", {
          className: "space-y-1",
          children: configItem.items.map((item, itemIndex) => renderSheetItem(item, itemIndex, context, onItemClick))
        })
      ]
    }, `menu-${index}`);
  }
  return null;
}
function NavMenu({ navConfigItems, spriteKey = "lucide", navFilters, className }) {
  const location = useLocation();
  const IconSprite = createSpriteIcon2(spriteKey);
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
  return /* @__PURE__ */ jsxs4(MenubarContext.Provider, {
    value: contextValue,
    children: [
      /* @__PURE__ */ jsx7("div", {
        className: "fixed top-4 left-4 z-50 md:hidden",
        children: /* @__PURE__ */ jsxs4(Sheet, {
          open: isSheetOpen,
          onOpenChange: setIsSheetOpen,
          children: [
            /* @__PURE__ */ jsx7(SheetTrigger, {
              asChild: true,
              children: /* @__PURE__ */ jsx7(Button, {
                variant: "outline",
                size: "sm",
                className: "flex items-center gap-2 shadow-lg",
                children: /* @__PURE__ */ jsx7(IconSprite, {
                  iconId: "EllipsisVertical",
                  className: "size-4"
                })
              })
            }),
            /* @__PURE__ */ jsx7(SheetContent, {
              side: "left",
              className: "w-80 px-2 pt-4",
              children: /* @__PURE__ */ jsx7("div", {
                className: "mt-6 flex flex-col gap-2",
                children: allMenus.map((configItem, index) => renderSheetMenuSection(configItem, index, contextValue, () => setIsSheetOpen(false)))
              })
            })
          ]
        })
      }),
      /* @__PURE__ */ jsx7("div", {
        className: "hidden md:block",
        children: filteredSections.length <= 1 ? /* @__PURE__ */ jsx7(Menubar, {
          className: clsx5(className),
          children: allMenus.map((configItem, index) => renderMenuConfigItem(configItem, index, contextValue))
        }) : /* @__PURE__ */ jsx7(Menubar, {
          className: clsx5(className),
          children: filteredSections.map((section, sectionIndex) => /* @__PURE__ */ jsx7("div", {
            className: "flex gap-x-2",
            children: section.menus.map((configItem, menuIndex) => renderMenuConfigItem(configItem, sectionIndex + menuIndex, contextValue))
          }, `section-${sectionIndex}`))
        })
      })
    ]
  });
}
// src/impetus/components/Page.tsx
import clsx6 from "clsx";
import { jsx as jsx8 } from "react/jsx-runtime";
function Header({ children, className }) {
  return /* @__PURE__ */ jsx8("header", {
    className: "print:hidden",
    children: /* @__PURE__ */ jsx8(Link2, {
      href: "/",
      children: /* @__PURE__ */ jsx8("div", {
        className: "flex flex-col md:py-8 md:pl-8",
        children: /* @__PURE__ */ jsx8("div", {
          className: clsx6("flew-row flex w-full justify-around md:justify-start md:gap-x-8", className),
          children
        })
      })
    })
  });
}
function Footer({ children, className }) {
  return /* @__PURE__ */ jsx8("footer", {
    className: "sticky top-[100vh] flex w-full flex-col items-center bg-opacity-100 pt-12 pb-8 print:hidden",
    children: /* @__PURE__ */ jsx8("p", {
      className: clsx6("text-xs uppercase text-opacity-30", className),
      children
    })
  });
}
export {
  ProductionErrorDisplay,
  NavMenu,
  LoadingBar,
  Header,
  GeneralErrorBoundary,
  Footer
};

//# debugId=DD0CA24711D87A9E64756E2164756E21
