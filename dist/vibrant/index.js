// src/shadcn-ui/components/pagination.tsx
import clsx2 from "clsx";

// src/vibrant/components/svg-icon.tsx
import { createSpriteIcon } from "@ycore/componentry/images";
var SvgIcon = createSpriteIcon("lucide");

// src/shadcn-ui/components/button.tsx
import { cva } from "class-variance-authority";
import clsx from "clsx";
import { Slot } from "radix-ui";
import { jsx } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx(Comp, {
    "data-slot": "button",
    className: clsx(buttonVariants({ variant, size, className })),
    ...props
  });
}

// src/shadcn-ui/components/pagination.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
function Pagination({ className, ...props }) {
  return /* @__PURE__ */ jsx2("nav", {
    role: "navigation",
    "aria-label": "pagination",
    "data-slot": "pagination",
    className: clsx2("mx-auto flex w-full justify-center", className),
    ...props
  });
}
function PaginationContent({ className, ...props }) {
  return /* @__PURE__ */ jsx2("ul", {
    "data-slot": "pagination-content",
    className: clsx2("flex flex-row items-center gap-1", className),
    ...props
  });
}
function PaginationItem({ ...props }) {
  return /* @__PURE__ */ jsx2("li", {
    "data-slot": "pagination-item",
    ...props
  });
}
function PaginationLink({ className, isActive, size = "icon", ...props }) {
  return /* @__PURE__ */ jsx2("a", {
    "aria-current": isActive ? "page" : undefined,
    "data-slot": "pagination-link",
    "data-active": isActive,
    className: clsx2(buttonVariants({
      variant: isActive ? "outline" : "ghost",
      size
    }), className),
    ...props
  });
}
function PaginationPrevious({ className, ...props }) {
  return /* @__PURE__ */ jsxs(PaginationLink, {
    "aria-label": "Go to previous page",
    size: "default",
    className: clsx2("gap-1 px-2.5 sm:pl-2.5", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx2(SvgIcon, {
        iconId: "ChevronLeft"
      }),
      /* @__PURE__ */ jsx2("span", {
        className: "hidden sm:block",
        children: "Previous"
      })
    ]
  });
}
function PaginationNext({ className, ...props }) {
  return /* @__PURE__ */ jsxs(PaginationLink, {
    "aria-label": "Go to next page",
    size: "default",
    className: clsx2("gap-1 px-2.5 sm:pr-2.5", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx2("span", {
        className: "hidden sm:block",
        children: "Next"
      }),
      /* @__PURE__ */ jsx2(SvgIcon, {
        iconId: "ChevronRight"
      })
    ]
  });
}
function PaginationEllipsis({ className, ...props }) {
  return /* @__PURE__ */ jsxs("span", {
    "aria-hidden": true,
    "data-slot": "pagination-ellipsis",
    className: clsx2("flex size-9 items-center justify-center", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx2(SvgIcon, {
        iconId: "Ellipsis",
        className: "size-4"
      }),
      /* @__PURE__ */ jsx2("span", {
        className: "sr-only",
        children: "More pages"
      })
    ]
  });
}

// src/shadcn-ui/components/select.tsx
import clsx3 from "clsx";
import { Select as SelectPrimitive } from "radix-ui";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function Select({ ...props }) {
  return /* @__PURE__ */ jsx3(SelectPrimitive.Root, {
    "data-slot": "select",
    ...props
  });
}
function SelectGroup({ ...props }) {
  return /* @__PURE__ */ jsx3(SelectPrimitive.Group, {
    "data-slot": "select-group",
    ...props
  });
}
function SelectValue({ ...props }) {
  return /* @__PURE__ */ jsx3(SelectPrimitive.Value, {
    "data-slot": "select-value",
    ...props
  });
}
function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs2(SelectPrimitive.Trigger, {
    "data-slot": "select-trigger",
    "data-size": size,
    className: clsx3("flex w-fit items-center justify-between gap-2 whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[size=default]:h-9 data-[size=sm]:h-8 data-[placeholder]:text-muted-foreground *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:hover:bg-input/50 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx3(SelectPrimitive.Icon, {
        asChild: true,
        children: /* @__PURE__ */ jsx3(SvgIcon, {
          iconId: "ChevronDown",
          className: "size-4 opacity-50"
        })
      })
    ]
  });
}
function SelectContent({ className, children, position = "popper", align = "center", ...props }) {
  return /* @__PURE__ */ jsx3(SelectPrimitive.Portal, {
    children: /* @__PURE__ */ jsxs2(SelectPrimitive.Content, {
      "data-slot": "select-content",
      className: clsx3("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=closed]:animate-out data-[state=open]:animate-in", position === "popper" && "data-[side=left]:-translate-x-1 data-[side=top]:-translate-y-1 data-[side=right]:translate-x-1 data-[side=bottom]:translate-y-1", className),
      position,
      align,
      ...props,
      children: [
        /* @__PURE__ */ jsx3(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsx3(SelectPrimitive.Viewport, {
          className: clsx3("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
          children
        }),
        /* @__PURE__ */ jsx3(SelectScrollDownButton, {})
      ]
    })
  });
}
function SelectLabel({ className, ...props }) {
  return /* @__PURE__ */ jsx3(SelectPrimitive.Label, {
    "data-slot": "select-label",
    className: clsx3("px-2 py-1.5 text-muted-foreground text-xs", className),
    ...props
  });
}
function SelectItem({ className, children, ...props }) {
  return /* @__PURE__ */ jsxs2(SelectPrimitive.Item, {
    "data-slot": "select-item",
    className: clsx3("relative flex w-full cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx3("span", {
        className: "absolute right-2 flex size-3.5 items-center justify-center",
        children: /* @__PURE__ */ jsx3(SelectPrimitive.ItemIndicator, {
          children: /* @__PURE__ */ jsx3(SvgIcon, {
            iconId: "Check",
            className: "size-4"
          })
        })
      }),
      /* @__PURE__ */ jsx3(SelectPrimitive.ItemText, {
        children
      })
    ]
  });
}
function SelectSeparator({ className, ...props }) {
  return /* @__PURE__ */ jsx3(SelectPrimitive.Separator, {
    "data-slot": "select-separator",
    className: clsx3("-mx-1 pointer-events-none my-1 h-px bg-border", className),
    ...props
  });
}
function SelectScrollUpButton({ className, ...props }) {
  return /* @__PURE__ */ jsx3(SelectPrimitive.ScrollUpButton, {
    "data-slot": "select-scroll-up-button",
    className: clsx3("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx3(SvgIcon, {
      iconId: "ChevronUp",
      className: "size-4"
    })
  });
}
function SelectScrollDownButton({ className, ...props }) {
  return /* @__PURE__ */ jsx3(SelectPrimitive.ScrollDownButton, {
    "data-slot": "select-scroll-down-button",
    className: clsx3("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx3(SvgIcon, {
      iconId: "ChevronDown",
      className: "size-4"
    })
  });
}

// src/vibrant/components/data-pagination.tsx
import { jsx as jsx4, jsxs as jsxs3, Fragment } from "react/jsx-runtime";
function DataPagination({ currentRecords, pagination, totalRecords, baseRoute, routeParams = {}, perPageOptions = [25, 50, 100, 200], fetcher, isLoading = false, loadingIcon = true }) {
  const buildUrl = (params) => {
    const urlParams = new URLSearchParams;
    Object.entries(routeParams).forEach(([key, value]) => {
      if (value)
        urlParams.set(key, value);
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
  return /* @__PURE__ */ jsx4("div", {
    className: "border-b p-4",
    children: /* @__PURE__ */ jsxs3("div", {
      className: "flex items-center justify-between",
      children: [
        /* @__PURE__ */ jsxs3("div", {
          className: "flex items-center gap-2",
          children: [
            /* @__PURE__ */ jsx4(PaginationControls, {
              currentPage: pagination.page,
              hasNextPage: pagination.hasNextPage,
              hasPreviousPage: pagination.hasPreviousPage,
              onPageChange: handlePageChange,
              disabled: isLoading
            }),
            isLoading && loadingIcon && /* @__PURE__ */ jsx4(SvgIcon, {
              iconId: "LoaderCircle",
              className: "h-4 w-4 animate-spin text-muted-foreground"
            })
          ]
        }),
        /* @__PURE__ */ jsxs3("div", {
          className: "flex items-center gap-4",
          children: [
            /* @__PURE__ */ jsx4(RowsPerPageSelector, {
              currentLimit: pagination.limit,
              options: perPageOptions,
              onLimitChange: handleLimitChange,
              disabled: isLoading
            }),
            /* @__PURE__ */ jsx4(RecordCountDisplay, {
              currentPage: pagination.page,
              currentRecords,
              hasNextPage: pagination.hasNextPage,
              totalRecords
            })
          ]
        })
      ]
    })
  });
}
function RowsPerPageSelector({ currentLimit, options, onLimitChange, disabled = false }) {
  return /* @__PURE__ */ jsxs3("div", {
    className: "flex items-center gap-2",
    children: [
      /* @__PURE__ */ jsx4("label", {
        htmlFor: "rows-per-page",
        className: "font-medium text-sm",
        children: "Rows per page:"
      }),
      /* @__PURE__ */ jsxs3(Select, {
        value: currentLimit.toString(),
        onValueChange: (value) => {
          onLimitChange(Number.parseInt(value, 10));
        },
        disabled,
        children: [
          /* @__PURE__ */ jsx4(SelectTrigger, {
            className: "w-20",
            children: /* @__PURE__ */ jsx4(SelectValue, {})
          }),
          /* @__PURE__ */ jsx4(SelectContent, {
            children: options.map((option) => /* @__PURE__ */ jsx4(SelectItem, {
              value: option.toString(),
              children: option
            }, option))
          })
        ]
      })
    ]
  });
}
function RecordCountDisplay({ currentPage, currentRecords, hasNextPage, totalRecords }) {
  if (currentRecords === 0) {
    return null;
  }
  if (totalRecords !== undefined) {
    const currentLimit = currentRecords;
    const start = (currentPage - 1) * currentLimit + 1;
    const end = Math.min(currentPage * currentLimit, totalRecords);
    return /* @__PURE__ */ jsxs3("p", {
      className: "text-muted-foreground text-sm",
      children: [
        "Showing ",
        start,
        "-",
        end,
        " of ",
        totalRecords.toLocaleString(),
        " records"
      ]
    });
  }
  return /* @__PURE__ */ jsxs3("p", {
    className: "text-muted-foreground text-sm",
    children: [
      "Page ",
      currentPage,
      " • ",
      currentRecords,
      " records ",
      hasNextPage ? "(more available)" : ""
    ]
  });
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
  return /* @__PURE__ */ jsx4("div", {
    className: "",
    children: /* @__PURE__ */ jsx4(Pagination, {
      children: /* @__PURE__ */ jsxs3(PaginationContent, {
        children: [
          /* @__PURE__ */ jsx4(PaginationItem, {
            children: /* @__PURE__ */ jsx4(PaginationPrevious, {
              href: "#",
              className: hasPreviousPage ? "" : "pointer-events-none opacity-50",
              onClick: (e) => handleNavigationClick(currentPage - 1, e)
            })
          }),
          currentPage > 2 && /* @__PURE__ */ jsxs3(Fragment, {
            children: [
              /* @__PURE__ */ jsx4(PaginationItem, {
                children: /* @__PURE__ */ jsx4(PaginationLink, {
                  href: "#",
                  onClick: (e) => handlePageClick(1, e),
                  children: "1"
                })
              }),
              currentPage > 3 && /* @__PURE__ */ jsx4(PaginationItem, {
                children: /* @__PURE__ */ jsx4(PaginationEllipsis, {})
              })
            ]
          }),
          hasPreviousPage && /* @__PURE__ */ jsx4(PaginationItem, {
            children: /* @__PURE__ */ jsx4(PaginationLink, {
              href: "#",
              onClick: (e) => handlePageClick(currentPage - 1, e),
              children: currentPage - 1
            })
          }),
          /* @__PURE__ */ jsx4(PaginationItem, {
            children: /* @__PURE__ */ jsx4(PaginationLink, {
              href: "#",
              isActive: true,
              children: currentPage
            })
          }),
          hasNextPage && /* @__PURE__ */ jsx4(PaginationItem, {
            children: /* @__PURE__ */ jsx4(PaginationLink, {
              href: "#",
              onClick: (e) => handlePageClick(currentPage + 1, e),
              children: currentPage + 1
            })
          }),
          hasNextPage && /* @__PURE__ */ jsx4(PaginationItem, {
            children: /* @__PURE__ */ jsx4(PaginationEllipsis, {})
          }),
          /* @__PURE__ */ jsx4(PaginationItem, {
            children: /* @__PURE__ */ jsx4(PaginationNext, {
              href: "#",
              className: hasNextPage ? "" : "pointer-events-none opacity-50",
              onClick: (e) => handleNavigationClick(currentPage + 1, e)
            })
          })
        ]
      })
    })
  });
}

// src/vibrant/components/input-otp.tsx
import clsx4 from "clsx";
import { unstable_OneTimePasswordField as OneTimePasswordFieldPrimitive } from "radix-ui";
import { jsx as jsx5 } from "react/jsx-runtime";
function InputOtp({ value, onValueChange, containerClassName, children, ...props }) {
  return /* @__PURE__ */ jsx5(OneTimePasswordFieldPrimitive.Root, {
    "data-slot": "input-otp",
    className: containerClassName,
    value,
    onValueChange,
    ...props,
    children
  });
}
function InputOtpGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx5("div", {
    "data-slot": "input-otp-group",
    className: clsx4("flex items-center gap-2", className),
    ...props
  });
}
function InputOtpSlot({ className, index, ...props }) {
  return /* @__PURE__ */ jsx5(OneTimePasswordFieldPrimitive.Input, {
    "data-slot": "input-otp-slot",
    "data-index": index,
    className: clsx4("relative flex h-10 w-10 items-center justify-center border-2 border-input bg-background text-sm transition-all dark:border", "rounded-md", "caret-transparent selection:bg-transparent selection:text-foreground", "focus-visible:z-10 focus-visible:border-ring focus-visible:outline-none", "disabled:cursor-not-allowed disabled:opacity-50", "aria-invalid:border-destructive", "text-center font-medium", className),
    ...props
  });
}
function InputOtpHiddenInput(props) {
  return /* @__PURE__ */ jsx5(OneTimePasswordFieldPrimitive.HiddenInput, {
    "data-slot": "input-otp-hidden",
    ...props
  });
}

// src/vibrant/@types/lucide-sprites.ts
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
// src/vibrant/components/link.tsx
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
// src/shadcn-ui/examples/examples-page.tsx
import { useId } from "react";

// src/images/SpriteIconProvider.tsx
import { createContext, useContext } from "react";
import { jsx as jsx7 } from "react/jsx-runtime";
var SpriteIconContext = createContext(null);

// src/images/SpriteIcon.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
function SpriteIcon({ spriteUrl, iconId, ...props }) {
  return /* @__PURE__ */ jsx8("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    ...props,
    children: iconId ? /* @__PURE__ */ jsx8("use", {
      href: `${spriteUrl}#${iconId}`
    }) : /* @__PURE__ */ jsx8("use", {
      href: `${spriteUrl}`
    })
  });
}

// src/impetus/theme/ThemeSwitch.tsx
import { SpriteIcon as SpriteIcon2 } from "@ycore/componentry/images";
import clsx5 from "clsx";
import { useEffect, useState } from "react";

// src/impetus/theme/useTheme.tsx
import { useTheme as useNextTheme } from "next-themes";
var useTheme = useNextTheme;

// src/impetus/theme/ThemeSwitch.tsx
import { jsx as jsx9 } from "react/jsx-runtime";
var THEME_OPTIONS = { theme: { light: "light", dark: "dark" } };
var ThemeSwitchButton = ({ themeContext, theme, spriteUrl, className, classTheme }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const resolvedTheme = themeContext?.resolvedTheme;
  const setTheme = themeContext?.setTheme;
  if (!mounted)
    return null;
  return /* @__PURE__ */ jsx9("button", {
    type: "button",
    className: clsx5("size-5 hover:animate-rotate", classTheme),
    onClick: (e) => {
      if (!setTheme)
        return;
      setTheme(resolvedTheme === theme.theme.dark ? theme.theme.light : theme.theme.dark);
      e.preventDefault();
      e.stopPropagation();
    },
    "aria-label": "theme switch",
    children: resolvedTheme === theme.theme.dark ? /* @__PURE__ */ jsx9(SpriteIcon2, {
      spriteUrl,
      iconId: "Moon",
      className: clsx5("size-5", className)
    }) : /* @__PURE__ */ jsx9(SpriteIcon2, {
      spriteUrl,
      iconId: "Sun",
      className: clsx5("size-5", className)
    })
  });
};
var ThemeSwitch = ({ theme = THEME_OPTIONS, spriteUrl, className, classTheme, children }) => {
  const nextThemeContext = useTheme();
  const themeContext = nextThemeContext ? { resolvedTheme: nextThemeContext.resolvedTheme, setTheme: nextThemeContext.setTheme } : null;
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

// src/shadcn-ui/components/tooltip.tsx
import clsx6 from "clsx";
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
      className: clsx6("fade-in-0 zoom-in-95 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) animate-in text-balance rounded-md bg-foreground px-3 py-1.5 text-background text-xs data-[state=closed]:animate-out", className),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx10(TooltipPrimitive.Arrow, {
          className: "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground"
        })
      ]
    })
  });
}

// src/shadcn-ui/components/accordion.tsx
import clsx7 from "clsx";
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
    className: clsx7("border-b last:border-b-0", className),
    ...props
  });
}
function AccordionTrigger({ className, children, ...props }) {
  return /* @__PURE__ */ jsx11(AccordionPrimitive.Header, {
    className: "flex",
    children: /* @__PURE__ */ jsxs5(AccordionPrimitive.Trigger, {
      "data-slot": "accordion-trigger",
      className: clsx7("flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left font-medium text-sm outline-none transition-all hover:underline focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180", className),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx11(SvgIcon, {
          iconId: "ChevronDown",
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
      className: clsx7("pt-0 pb-4", className),
      children
    })
  });
}

// src/shadcn-ui/examples/accordion-demo.tsx
import { jsx as jsx12, jsxs as jsxs6 } from "react/jsx-runtime";
function AccordionDemo() {
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
import clsx8 from "clsx";
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
    className: clsx8(alertVariants({ variant }), className),
    ...props
  });
}
function AlertTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx13("div", {
    "data-slot": "alert-title",
    className: clsx8("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", className),
    ...props
  });
}
function AlertDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx13("div", {
    "data-slot": "alert-description",
    className: clsx8("col-start-2 grid justify-items-start gap-1 text-muted-foreground text-sm [&_p]:leading-relaxed", className),
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
            iconId: "CircleCheck",
            spriteUrl
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
            iconId: "Calendar",
            spriteUrl
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
            iconId: "CircleAlert",
            spriteUrl
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
        iconId: "CircleAlert",
        spriteUrl
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
import clsx9 from "clsx";
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
    className: clsx9("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=open]:animate-in", className),
    ...props
  });
}
function AlertDialogContent({ className, ...props }) {
  return /* @__PURE__ */ jsxs9(AlertDialogPortal, {
    children: [
      /* @__PURE__ */ jsx16(AlertDialogOverlay, {}),
      /* @__PURE__ */ jsx16(AlertDialogPrimitive.Content, {
        "data-slot": "alert-dialog-content",
        className: clsx9("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 data-[state=closed]:animate-out data-[state=open]:animate-in sm:max-w-lg", className),
        ...props
      })
    ]
  });
}
function AlertDialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx16("div", {
    "data-slot": "alert-dialog-header",
    className: clsx9("flex flex-col gap-2 text-center sm:text-left", className),
    ...props
  });
}
function AlertDialogFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx16("div", {
    "data-slot": "alert-dialog-footer",
    className: clsx9("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
    ...props
  });
}
function AlertDialogTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx16(AlertDialogPrimitive.Title, {
    "data-slot": "alert-dialog-title",
    className: clsx9("font-semibold text-lg", className),
    ...props
  });
}
function AlertDialogDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx16(AlertDialogPrimitive.Description, {
    "data-slot": "alert-dialog-description",
    className: clsx9("text-muted-foreground text-sm", className),
    ...props
  });
}
function AlertDialogAction({ className, ...props }) {
  return /* @__PURE__ */ jsx16(AlertDialogPrimitive.Action, {
    className: clsx9(buttonVariants(), className),
    ...props
  });
}
function AlertDialogCancel({ className, ...props }) {
  return /* @__PURE__ */ jsx16(AlertDialogPrimitive.Cancel, {
    className: clsx9(buttonVariants({ variant: "outline" }), className),
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
import clsx11 from "clsx";
import React2 from "react";
import { Await } from "react-router";

// src/shadcn-ui/components/spinner.tsx
import clsx10 from "clsx";
import { jsx as jsx18 } from "react/jsx-runtime";
function Spinner({ className, iconId = "Loader", ...props }) {
  return /* @__PURE__ */ jsx18(SvgIcon, {
    iconId,
    role: "status",
    "aria-label": "Loading",
    className: clsx10("size-4 animate-spin", className),
    ...props
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
function LazyImage({ image, src, alt, width, height, className, spriteUrl, fallback = spriteUrl ? /* @__PURE__ */ jsx19(Spinner, {}) : /* @__PURE__ */ jsx19("div", {
  className: "text-slate-500/50",
  children: "Loading..."
}) }) {
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
        className: "text-slate-500/50"
      }) : /* @__PURE__ */ jsx19("div", {
        className: "text-slate-500/50",
        children: "Error loading image"
      }),
      children: (imageData) => /* @__PURE__ */ jsx19(ImageElement, {
        ...imageData,
        className: clsx11(imageData.className, className)
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
import clsx12 from "clsx";
import { Avatar as AvatarPrimitive } from "radix-ui";
import { jsx as jsx22 } from "react/jsx-runtime";
function Avatar({ className, ...props }) {
  return /* @__PURE__ */ jsx22(AvatarPrimitive.Root, {
    "data-slot": "avatar",
    className: clsx12("relative flex size-8 shrink-0 overflow-hidden rounded-full", className),
    ...props
  });
}
function AvatarImage({ className, ...props }) {
  return /* @__PURE__ */ jsx22(AvatarPrimitive.Image, {
    "data-slot": "avatar-image",
    className: clsx12("aspect-square size-full", className),
    ...props
  });
}
function AvatarFallback({ className, ...props }) {
  return /* @__PURE__ */ jsx22(AvatarPrimitive.Fallback, {
    "data-slot": "avatar-fallback",
    className: clsx12("flex size-full items-center justify-center rounded-full bg-muted", className),
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
import clsx13 from "clsx";
import { Slot as Slot2 } from "radix-ui";
import { jsx as jsx24 } from "react/jsx-runtime";
var badgeVariants = cva3("inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
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
  const Comp = asChild ? Slot2.Slot : "span";
  return /* @__PURE__ */ jsx24(Comp, {
    "data-slot": "badge",
    className: clsx13(badgeVariants({ variant }), className),
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
                iconId: "BadgeCheck",
                spriteUrl
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
import clsx14 from "clsx";
import { Slot as Slot3 } from "radix-ui";
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
    className: clsx14("flex flex-wrap items-center gap-1.5 break-words text-muted-foreground text-sm sm:gap-2.5", className),
    ...props
  });
}
function BreadcrumbItem({ className, ...props }) {
  return /* @__PURE__ */ jsx29("li", {
    "data-slot": "breadcrumb-item",
    className: clsx14("inline-flex items-center gap-1.5", className),
    ...props
  });
}
function BreadcrumbLink({
  asChild,
  className,
  ...props
}) {
  const Comp = asChild ? Slot3.Slot : "a";
  return /* @__PURE__ */ jsx29(Comp, {
    "data-slot": "breadcrumb-link",
    className: clsx14("transition-colors hover:text-foreground", className),
    ...props
  });
}
function BreadcrumbPage({ className, ...props }) {
  return /* @__PURE__ */ jsx29("span", {
    "data-slot": "breadcrumb-page",
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: clsx14("font-normal text-foreground", className),
    ...props
  });
}
function BreadcrumbSeparator({ children, className, ...props }) {
  return /* @__PURE__ */ jsx29("li", {
    "data-slot": "breadcrumb-separator",
    role: "presentation",
    "aria-hidden": "true",
    className: clsx14("[&>svg]:size-3.5", className),
    ...props,
    children: children ?? /* @__PURE__ */ jsx29(SvgIcon, {
      iconId: "ChevronRight"
    })
  });
}
function BreadcrumbEllipsis({ className, ...props }) {
  return /* @__PURE__ */ jsxs13("span", {
    "data-slot": "breadcrumb-ellipsis",
    role: "presentation",
    "aria-hidden": "true",
    className: clsx14("flex size-9 items-center justify-center", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx29(SvgIcon, {
        iconId: "Ellipsis",
        className: "size-4"
      }),
      /* @__PURE__ */ jsx29("span", {
        className: "sr-only",
        children: "More"
      })
    ]
  });
}

// src/shadcn-ui/components/dropdown-menu.tsx
import clsx15 from "clsx";
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
      className: clsx15("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=closed]:animate-out data-[state=open]:animate-in", className),
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
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx30(DropdownMenuPrimitive.Item, {
    "data-slot": "dropdown-menu-item",
    "data-inset": inset,
    "data-variant": variant,
    className: clsx15("data-[variant=destructive]:*:[svg]:!text-destructive relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[disabled]:opacity-50 data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props
  });
}
function DropdownMenuCheckboxItem({ className, children, checked, ...props }) {
  return /* @__PURE__ */ jsxs14(DropdownMenuPrimitive.CheckboxItem, {
    "data-slot": "dropdown-menu-checkbox-item",
    className: clsx15("relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx30("span", {
        className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
        children: /* @__PURE__ */ jsx30(DropdownMenuPrimitive.ItemIndicator, {
          children: /* @__PURE__ */ jsx30(SvgIcon, {
            iconId: "Check",
            className: "size-4"
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
function DropdownMenuRadioItem({ className, children, ...props }) {
  return /* @__PURE__ */ jsxs14(DropdownMenuPrimitive.RadioItem, {
    "data-slot": "dropdown-menu-radio-item",
    className: clsx15("relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx30("span", {
        className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
        children: /* @__PURE__ */ jsx30(DropdownMenuPrimitive.ItemIndicator, {
          children: /* @__PURE__ */ jsx30(SvgIcon, {
            iconId: "Circle",
            className: "size-2 fill-current"
          })
        })
      }),
      children
    ]
  });
}
function DropdownMenuLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsx30(DropdownMenuPrimitive.Label, {
    "data-slot": "dropdown-menu-label",
    "data-inset": inset,
    className: clsx15("px-2 py-1.5 font-medium text-sm data-[inset]:pl-8", className),
    ...props
  });
}
function DropdownMenuSeparator({ className, ...props }) {
  return /* @__PURE__ */ jsx30(DropdownMenuPrimitive.Separator, {
    "data-slot": "dropdown-menu-separator",
    className: clsx15("-mx-1 my-1 h-px bg-border", className),
    ...props
  });
}
function DropdownMenuShortcut({ className, ...props }) {
  return /* @__PURE__ */ jsx30("span", {
    "data-slot": "dropdown-menu-shortcut",
    className: clsx15("ml-auto text-muted-foreground text-xs tracking-widest", className),
    ...props
  });
}
function DropdownMenuSub({ ...props }) {
  return /* @__PURE__ */ jsx30(DropdownMenuPrimitive.Sub, {
    "data-slot": "dropdown-menu-sub",
    ...props
  });
}
function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs14(DropdownMenuPrimitive.SubTrigger, {
    "data-slot": "dropdown-menu-sub-trigger",
    "data-inset": inset,
    className: clsx15("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[inset]:pl-8 data-[state=open]:text-accent-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx30(SvgIcon, {
        iconId: "ChevronRight",
        className: "ml-auto size-4"
      })
    ]
  });
}
function DropdownMenuSubContent({ className, ...props }) {
  return /* @__PURE__ */ jsx30(DropdownMenuPrimitive.SubContent, {
    "data-slot": "dropdown-menu-sub-content",
    className: clsx15("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=closed]:animate-out data-[state=open]:animate-in", className),
    ...props
  });
}

// src/shadcn-ui/examples/breadcrumb-demo.tsx
import { jsx as jsx31, jsxs as jsxs15 } from "react/jsx-runtime";
function BreadcrumbDemo() {
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
        /* @__PURE__ */ jsx31(BreadcrumbSeparator, {}),
        /* @__PURE__ */ jsx31(BreadcrumbItem, {
          children: /* @__PURE__ */ jsxs15(DropdownMenu, {
            children: [
              /* @__PURE__ */ jsxs15(DropdownMenuTrigger, {
                className: "flex items-center gap-1",
                children: [
                  /* @__PURE__ */ jsx31(BreadcrumbEllipsis, {
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
        /* @__PURE__ */ jsx31(BreadcrumbSeparator, {}),
        /* @__PURE__ */ jsx31(BreadcrumbItem, {
          children: /* @__PURE__ */ jsx31(BreadcrumbLink, {
            asChild: true,
            children: /* @__PURE__ */ jsx31(Link, {
              href: "/docs/components",
              children: "Components"
            })
          })
        }),
        /* @__PURE__ */ jsx31(BreadcrumbSeparator, {}),
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
          children: /* @__PURE__ */ jsx32(SpriteIcon, {
            iconId: "Slash",
            spriteUrl
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
                    iconId: "ChevronDown",
                    spriteUrl
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
          children: /* @__PURE__ */ jsx32(SpriteIcon, {
            iconId: "Slash",
            spriteUrl
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
function BreadcrumbCollapsed() {
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
        /* @__PURE__ */ jsx33(BreadcrumbSeparator, {}),
        /* @__PURE__ */ jsx33(BreadcrumbItem, {
          children: /* @__PURE__ */ jsx33(BreadcrumbEllipsis, {})
        }),
        /* @__PURE__ */ jsx33(BreadcrumbSeparator, {}),
        /* @__PURE__ */ jsx33(BreadcrumbItem, {
          children: /* @__PURE__ */ jsx33(BreadcrumbLink, {
            asChild: true,
            children: /* @__PURE__ */ jsx33(Link, {
              href: "/docs/components",
              children: "Components"
            })
          })
        }),
        /* @__PURE__ */ jsx33(BreadcrumbSeparator, {}),
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
function BreadcrumbWithCustomSeparator() {
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
        /* @__PURE__ */ jsx34(BreadcrumbSeparator, {}),
        /* @__PURE__ */ jsx34(BreadcrumbItem, {
          children: /* @__PURE__ */ jsx34(BreadcrumbLink, {
            asChild: true,
            children: /* @__PURE__ */ jsx34(Link, {
              href: "/components",
              children: "Components"
            })
          })
        }),
        /* @__PURE__ */ jsx34(BreadcrumbSeparator, {}),
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
          children: /* @__PURE__ */ jsx35(SpriteIcon, {
            iconId: "Slash",
            spriteUrl
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
          children: /* @__PURE__ */ jsx35(SpriteIcon, {
            iconId: "Slash",
            spriteUrl
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
      href: "/",
      children: "Sign in"
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
      iconId: "ChevronRight",
      spriteUrl
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
        iconId: "Loader",
        className: "animate-spin",
        spriteUrl
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
        iconId: "Calendar",
        spriteUrl
      }),
      " New Branch"
    ]
  });
}

// src/shadcn-ui/components/card.tsx
import clsx16 from "clsx";
import { jsx as jsx46 } from "react/jsx-runtime";
function Card({ className, ...props }) {
  return /* @__PURE__ */ jsx46("div", {
    "data-slot": "card",
    className: clsx16("flex flex-col gap-6 rounded-xl border bg-card py-6 text-card-foreground shadow-sm", className),
    ...props
  });
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx46("div", {
    "data-slot": "card-header",
    className: clsx16("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
    ...props
  });
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx46("div", {
    "data-slot": "card-title",
    className: clsx16("font-semibold leading-none", className),
    ...props
  });
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx46("div", {
    "data-slot": "card-description",
    className: clsx16("text-muted-foreground text-sm", className),
    ...props
  });
}
function CardAction({ className, ...props }) {
  return /* @__PURE__ */ jsx46("div", {
    "data-slot": "card-action",
    className: clsx16("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
    ...props
  });
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsx46("div", {
    "data-slot": "card-content",
    className: clsx16("px-6", className),
    ...props
  });
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx46("div", {
    "data-slot": "card-footer",
    className: clsx16("flex items-center px-6 [.border-t]:pt-6", className),
    ...props
  });
}

// src/shadcn-ui/components/input.tsx
import clsx17 from "clsx";
import { jsx as jsx47 } from "react/jsx-runtime";
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx47("input", {
    type,
    "data-slot": "input",
    className: clsx17("h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs outline-none transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30", "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50", "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40", className),
    ...props
  });
}

// src/shadcn-ui/components/label.tsx
import clsx18 from "clsx";
import { Label as LabelPrimitive } from "radix-ui";
import { jsx as jsx48 } from "react/jsx-runtime";
function Label({ className, ...props }) {
  return /* @__PURE__ */ jsx48(LabelPrimitive.Root, {
    "data-slot": "label",
    className: clsx18("flex select-none items-center gap-2 font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50", className),
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

// src/shadcn-ui/examples/card-with-form.tsx
import React3 from "react";
import { jsx as jsx50, jsxs as jsxs23 } from "react/jsx-runtime";
function CardWithForm() {
  const nameId = React3.useId();
  const frameworkId = React3.useId();
  return /* @__PURE__ */ jsxs23(Card, {
    className: "w-[350px]",
    children: [
      /* @__PURE__ */ jsxs23(CardHeader, {
        children: [
          /* @__PURE__ */ jsx50(CardTitle, {
            children: "Create project"
          }),
          /* @__PURE__ */ jsx50(CardDescription, {
            children: "Deploy your new project in one-click."
          })
        ]
      }),
      /* @__PURE__ */ jsx50(CardContent, {
        children: /* @__PURE__ */ jsx50("form", {
          children: /* @__PURE__ */ jsxs23("div", {
            className: "grid w-full items-center gap-6",
            children: [
              /* @__PURE__ */ jsxs23("div", {
                className: "flex flex-col gap-3",
                children: [
                  /* @__PURE__ */ jsx50(Label, {
                    htmlFor: nameId,
                    children: "Name"
                  }),
                  /* @__PURE__ */ jsx50(Input, {
                    id: nameId,
                    placeholder: "Name of your project"
                  })
                ]
              }),
              /* @__PURE__ */ jsxs23("div", {
                className: "flex flex-col gap-3",
                children: [
                  /* @__PURE__ */ jsx50(Label, {
                    htmlFor: frameworkId,
                    children: "Framework"
                  }),
                  /* @__PURE__ */ jsxs23(Select, {
                    children: [
                      /* @__PURE__ */ jsx50(SelectTrigger, {
                        id: frameworkId,
                        className: "w-full",
                        children: /* @__PURE__ */ jsx50(SelectValue, {
                          placeholder: "Select"
                        })
                      }),
                      /* @__PURE__ */ jsxs23(SelectContent, {
                        position: "popper",
                        children: [
                          /* @__PURE__ */ jsx50(SelectItem, {
                            value: "next",
                            children: "Next.js"
                          }),
                          /* @__PURE__ */ jsx50(SelectItem, {
                            value: "sveltekit",
                            children: "SvelteKit"
                          }),
                          /* @__PURE__ */ jsx50(SelectItem, {
                            value: "astro",
                            children: "Astro"
                          }),
                          /* @__PURE__ */ jsx50(SelectItem, {
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
      /* @__PURE__ */ jsxs23(CardFooter, {
        className: "flex justify-between",
        children: [
          /* @__PURE__ */ jsx50(Button, {
            variant: "outline",
            children: "Cancel"
          }),
          /* @__PURE__ */ jsx50(Button, {
            children: "Deploy"
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/examples/checkbox-demo.tsx
import React4 from "react";

// src/shadcn-ui/components/checkbox.tsx
import clsx19 from "clsx";
import { Checkbox as CheckboxPrimitive } from "radix-ui";
import { jsx as jsx51 } from "react/jsx-runtime";
function Checkbox({ className, ...props }) {
  return /* @__PURE__ */ jsx51(CheckboxPrimitive.Root, {
    "data-slot": "checkbox",
    className: clsx19("peer size-4 shrink-0 rounded-[4px] border border-input shadow-xs outline-none transition-shadow focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-input/30 dark:data-[state=checked]:bg-primary dark:aria-invalid:ring-destructive/40", className),
    ...props,
    children: /* @__PURE__ */ jsx51(CheckboxPrimitive.Indicator, {
      "data-slot": "checkbox-indicator",
      className: "grid place-content-center text-current transition-none",
      children: /* @__PURE__ */ jsx51(SvgIcon, {
        iconId: "Check",
        className: "size-3.5"
      })
    })
  });
}

// src/shadcn-ui/examples/checkbox-demo.tsx
import { jsx as jsx52, jsxs as jsxs24 } from "react/jsx-runtime";
function CheckboxDemo() {
  const termsId = React4.useId();
  const terms2Id = React4.useId();
  const toggleId = React4.useId();
  const toggle2Id = React4.useId();
  return /* @__PURE__ */ jsxs24("div", {
    className: "flex flex-col gap-6",
    children: [
      /* @__PURE__ */ jsxs24("div", {
        className: "flex items-center gap-3",
        children: [
          /* @__PURE__ */ jsx52(Checkbox, {
            id: termsId
          }),
          /* @__PURE__ */ jsx52(Label, {
            htmlFor: termsId,
            children: "Accept terms and conditions"
          })
        ]
      }),
      /* @__PURE__ */ jsxs24("div", {
        className: "flex items-start gap-3",
        children: [
          /* @__PURE__ */ jsx52(Checkbox, {
            id: terms2Id,
            defaultChecked: true
          }),
          /* @__PURE__ */ jsxs24("div", {
            className: "grid gap-2",
            children: [
              /* @__PURE__ */ jsx52(Label, {
                htmlFor: terms2Id,
                children: "Accept terms and conditions"
              }),
              /* @__PURE__ */ jsx52("p", {
                className: "text-muted-foreground text-sm",
                children: "By clicking this checkbox, you agree to the terms and conditions."
              })
            ]
          })
        ]
      }),
      /* @__PURE__ */ jsxs24("div", {
        className: "flex items-start gap-3",
        children: [
          /* @__PURE__ */ jsx52(Checkbox, {
            id: toggleId,
            disabled: true
          }),
          /* @__PURE__ */ jsx52(Label, {
            htmlFor: toggleId,
            children: "Enable notifications"
          })
        ]
      }),
      /* @__PURE__ */ jsxs24(Label, {
        className: "flex items-start gap-3 rounded-lg border p-3 hover:bg-accent/50 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950",
        children: [
          /* @__PURE__ */ jsx52(Checkbox, {
            id: toggle2Id,
            defaultChecked: true,
            className: "data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
          }),
          /* @__PURE__ */ jsxs24("div", {
            className: "grid gap-1.5 font-normal",
            children: [
              /* @__PURE__ */ jsx52("p", {
                className: "font-medium text-sm leading-none",
                children: "Enable notifications"
              }),
              /* @__PURE__ */ jsx52("p", {
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
import React5 from "react";
import { jsx as jsx53, jsxs as jsxs25 } from "react/jsx-runtime";
function CheckboxDisabled() {
  const termsId = React5.useId();
  return /* @__PURE__ */ jsxs25("div", {
    className: "flex items-center space-x-2",
    children: [
      /* @__PURE__ */ jsx53(Checkbox, {
        id: termsId,
        disabled: true
      }),
      /* @__PURE__ */ jsx53("label", {
        htmlFor: termsId,
        className: "font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        children: "Accept terms and conditions"
      })
    ]
  });
}

// src/shadcn-ui/examples/checkbox-form-multiple.tsx
import React6 from "react";
import { toast } from "sonner";
import { jsx as jsx54, jsxs as jsxs26 } from "react/jsx-runtime";
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
function CheckboxReactHookFormMultiple() {
  const [selectedItems, setSelectedItems] = React6.useState(["recents", "home"]);
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const items2 = formData.getAll("items");
    toast("You submitted the following values", {
      description: /* @__PURE__ */ jsx54("pre", {
        className: "mt-2 w-[320px] rounded-md bg-neutral-950 p-4",
        children: /* @__PURE__ */ jsx54("code", {
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
  return /* @__PURE__ */ jsxs26("form", {
    onSubmit: handleSubmit,
    className: "space-y-8",
    children: [
      /* @__PURE__ */ jsxs26("div", {
        className: "mb-4",
        children: [
          /* @__PURE__ */ jsx54("div", {
            className: "text-base",
            children: "Sidebar"
          }),
          /* @__PURE__ */ jsx54("div", {
            children: "Select the items you want to display in the sidebar."
          })
        ]
      }),
      items.map((item) => /* @__PURE__ */ jsxs26("div", {
        className: "flex flex-row items-center gap-2",
        children: [
          /* @__PURE__ */ jsx54(Checkbox, {
            name: "items",
            value: item.id,
            checked: selectedItems.includes(item.id),
            onCheckedChange: (checked) => handleCheckboxChange(item.id, !!checked)
          }),
          /* @__PURE__ */ jsx54("div", {
            className: "font-normal text-sm",
            children: item.label
          })
        ]
      }, item.id)),
      /* @__PURE__ */ jsx54(Button, {
        type: "submit",
        children: "Submit"
      })
    ]
  });
}

// src/shadcn-ui/examples/checkbox-form-single.tsx
import React7 from "react";
import { toast as toast2 } from "sonner";
import { jsx as jsx55, jsxs as jsxs27 } from "react/jsx-runtime";
function CheckboxReactHookFormSingle() {
  const [mobileEnabled, setMobileEnabled] = React7.useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const mobile = formData.has("mobile");
    toast2("You submitted the following values", {
      description: /* @__PURE__ */ jsx55("pre", {
        className: "mt-2 w-[320px] rounded-md bg-neutral-950 p-4",
        children: /* @__PURE__ */ jsx55("code", {
          className: "text-white",
          children: JSON.stringify({ mobile }, null, 2)
        })
      })
    });
  }
  return /* @__PURE__ */ jsxs27("form", {
    onSubmit: handleSubmit,
    className: "flex flex-col items-start gap-4",
    children: [
      /* @__PURE__ */ jsx55(Checkbox, {
        name: "mobile",
        checked: mobileEnabled,
        onCheckedChange: setMobileEnabled
      }),
      /* @__PURE__ */ jsx55(Button, {
        type: "submit",
        children: "Submit"
      })
    ]
  });
}

// src/shadcn-ui/examples/checkbox-with-text.tsx
import React8 from "react";
import { jsx as jsx56, jsxs as jsxs28 } from "react/jsx-runtime";
function CheckboxWithText() {
  const termsId = React8.useId();
  return /* @__PURE__ */ jsxs28("div", {
    className: "items-top flex gap-2",
    children: [
      /* @__PURE__ */ jsx56(Checkbox, {
        id: termsId
      }),
      /* @__PURE__ */ jsxs28("div", {
        className: "grid gap-1.5 leading-none",
        children: [
          /* @__PURE__ */ jsx56("label", {
            htmlFor: termsId,
            className: "font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
            children: "Accept terms and conditions"
          }),
          /* @__PURE__ */ jsx56("p", {
            className: "text-muted-foreground text-sm",
            children: "You agree to our Terms of Service and Privacy Policy."
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/examples/collapsible-demo.tsx
import React9 from "react";

// src/shadcn-ui/components/collapsible.tsx
import { Collapsible as CollapsiblePrimitive } from "radix-ui";
import { jsx as jsx57 } from "react/jsx-runtime";
function Collapsible({ ...props }) {
  return /* @__PURE__ */ jsx57(CollapsiblePrimitive.Root, {
    "data-slot": "collapsible",
    ...props
  });
}
function CollapsibleTrigger({ ...props }) {
  return /* @__PURE__ */ jsx57(CollapsiblePrimitive.CollapsibleTrigger, {
    "data-slot": "collapsible-trigger",
    ...props
  });
}
function CollapsibleContent({ ...props }) {
  return /* @__PURE__ */ jsx57(CollapsiblePrimitive.CollapsibleContent, {
    "data-slot": "collapsible-content",
    ...props
  });
}

// src/shadcn-ui/examples/collapsible-demo.tsx
import { jsx as jsx58, jsxs as jsxs29 } from "react/jsx-runtime";
function CollapsibleDemo({ spriteUrl }) {
  const [isOpen, setIsOpen] = React9.useState(false);
  return /* @__PURE__ */ jsxs29(Collapsible, {
    open: isOpen,
    onOpenChange: setIsOpen,
    className: "flex w-[350px] flex-col gap-2",
    children: [
      /* @__PURE__ */ jsxs29("div", {
        className: "flex items-center justify-between gap-4 px-4",
        children: [
          /* @__PURE__ */ jsx58("h4", {
            className: "font-semibold text-sm",
            children: "@peduarte starred 3 repositories"
          }),
          /* @__PURE__ */ jsx58(CollapsibleTrigger, {
            asChild: true,
            children: /* @__PURE__ */ jsxs29(Button, {
              variant: "ghost",
              size: "icon",
              className: "size-8",
              children: [
                /* @__PURE__ */ jsx58(SpriteIcon, {
                  iconId: "ChevronsUpDown",
                  spriteUrl
                }),
                /* @__PURE__ */ jsx58("span", {
                  className: "sr-only",
                  children: "Toggle"
                })
              ]
            })
          })
        ]
      }),
      /* @__PURE__ */ jsx58("div", {
        className: "rounded-md border px-4 py-2 font-mono text-sm",
        children: "@radix-ui/primitives"
      }),
      /* @__PURE__ */ jsxs29(CollapsibleContent, {
        className: "flex flex-col gap-2",
        children: [
          /* @__PURE__ */ jsx58("div", {
            className: "rounded-md border px-4 py-2 font-mono text-sm",
            children: "@radix-ui/colors"
          }),
          /* @__PURE__ */ jsx58("div", {
            className: "rounded-md border px-4 py-2 font-mono text-sm",
            children: "@stitches/react"
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/examples/combobox-demo.tsx
import clsx23 from "clsx";
import React10 from "react";

// src/shadcn-ui/components/command.tsx
import clsx21 from "clsx";
import { Command as CommandPrimitive } from "cmdk";

// src/shadcn-ui/components/dialog.tsx
import clsx20 from "clsx";
import { Dialog as DialogPrimitive } from "radix-ui";
import { jsx as jsx59, jsxs as jsxs30 } from "react/jsx-runtime";
function Dialog({ ...props }) {
  return /* @__PURE__ */ jsx59(DialogPrimitive.Root, {
    "data-slot": "dialog",
    ...props
  });
}
function DialogTrigger({ ...props }) {
  return /* @__PURE__ */ jsx59(DialogPrimitive.Trigger, {
    "data-slot": "dialog-trigger",
    ...props
  });
}
function DialogPortal({ ...props }) {
  return /* @__PURE__ */ jsx59(DialogPrimitive.Portal, {
    "data-slot": "dialog-portal",
    ...props
  });
}
function DialogClose({ ...props }) {
  return /* @__PURE__ */ jsx59(DialogPrimitive.Close, {
    "data-slot": "dialog-close",
    ...props
  });
}
function DialogOverlay({ className, ...props }) {
  return /* @__PURE__ */ jsx59(DialogPrimitive.Overlay, {
    "data-slot": "dialog-overlay",
    className: clsx20("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=open]:animate-in", className),
    ...props
  });
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs30(DialogPortal, {
    "data-slot": "dialog-portal",
    children: [
      /* @__PURE__ */ jsx59(DialogOverlay, {}),
      /* @__PURE__ */ jsxs30(DialogPrimitive.Content, {
        "data-slot": "dialog-content",
        className: clsx20("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 data-[state=closed]:animate-out data-[state=open]:animate-in sm:max-w-lg", className),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxs30(DialogPrimitive.Close, {
            "data-slot": "dialog-close",
            className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
            children: [
              /* @__PURE__ */ jsx59(SvgIcon, {
                iconId: "X"
              }),
              /* @__PURE__ */ jsx59("span", {
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
  return /* @__PURE__ */ jsx59("div", {
    "data-slot": "dialog-header",
    className: clsx20("flex flex-col gap-2 text-center sm:text-left", className),
    ...props
  });
}
function DialogFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx59("div", {
    "data-slot": "dialog-footer",
    className: clsx20("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
    ...props
  });
}
function DialogTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx59(DialogPrimitive.Title, {
    "data-slot": "dialog-title",
    className: clsx20("font-semibold text-lg leading-none", className),
    ...props
  });
}
function DialogDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx59(DialogPrimitive.Description, {
    "data-slot": "dialog-description",
    className: clsx20("text-muted-foreground text-sm", className),
    ...props
  });
}

// src/shadcn-ui/components/command.tsx
import { jsx as jsx60, jsxs as jsxs31 } from "react/jsx-runtime";
function Command({ className, ...props }) {
  return /* @__PURE__ */ jsx60(CommandPrimitive, {
    "data-slot": "command",
    className: clsx21("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", className),
    ...props
  });
}
function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs31(Dialog, {
    ...props,
    children: [
      /* @__PURE__ */ jsxs31(DialogHeader, {
        className: "sr-only",
        children: [
          /* @__PURE__ */ jsx60(DialogTitle, {
            children: title
          }),
          /* @__PURE__ */ jsx60(DialogDescription, {
            children: description
          })
        ]
      }),
      /* @__PURE__ */ jsx60(DialogContent, {
        className: clsx21("overflow-hidden p-0", className),
        showCloseButton,
        children: /* @__PURE__ */ jsx60(Command, {
          className: "**:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
          children
        })
      })
    ]
  });
}
function CommandInput({ className, ...props }) {
  return /* @__PURE__ */ jsxs31("div", {
    "data-slot": "command-input-wrapper",
    className: "flex h-9 items-center gap-2 border-b px-3",
    children: [
      /* @__PURE__ */ jsx60(SvgIcon, {
        iconId: "Search",
        className: "size-4 shrink-0 opacity-50"
      }),
      /* @__PURE__ */ jsx60(CommandPrimitive.Input, {
        "data-slot": "command-input",
        className: clsx21("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className),
        ...props
      })
    ]
  });
}
function CommandList({ className, ...props }) {
  return /* @__PURE__ */ jsx60(CommandPrimitive.List, {
    "data-slot": "command-list",
    className: clsx21("max-h-[300px] scroll-py-1 overflow-y-auto overflow-x-hidden", className),
    ...props
  });
}
function CommandEmpty({ ...props }) {
  return /* @__PURE__ */ jsx60(CommandPrimitive.Empty, {
    "data-slot": "command-empty",
    className: "py-6 text-center text-sm",
    ...props
  });
}
function CommandGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx60(CommandPrimitive.Group, {
    "data-slot": "command-group",
    className: clsx21("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:text-xs", className),
    ...props
  });
}
function CommandSeparator({ className, ...props }) {
  return /* @__PURE__ */ jsx60(CommandPrimitive.Separator, {
    "data-slot": "command-separator",
    className: clsx21("-mx-1 h-px bg-border", className),
    ...props
  });
}
function CommandItem({ className, ...props }) {
  return /* @__PURE__ */ jsx60(CommandPrimitive.Item, {
    "data-slot": "command-item",
    className: clsx21("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props
  });
}
function CommandShortcut({ className, ...props }) {
  return /* @__PURE__ */ jsx60("span", {
    "data-slot": "command-shortcut",
    className: clsx21("ml-auto text-muted-foreground text-xs tracking-widest", className),
    ...props
  });
}

// src/shadcn-ui/components/popover.tsx
import clsx22 from "clsx";
import { Popover as PopoverPrimitive } from "radix-ui";
import { jsx as jsx61 } from "react/jsx-runtime";
function Popover({ ...props }) {
  return /* @__PURE__ */ jsx61(PopoverPrimitive.Root, {
    "data-slot": "popover",
    ...props
  });
}
function PopoverTrigger({ ...props }) {
  return /* @__PURE__ */ jsx61(PopoverPrimitive.Trigger, {
    "data-slot": "popover-trigger",
    ...props
  });
}
function PopoverContent({ className, align = "center", sideOffset = 4, ...props }) {
  return /* @__PURE__ */ jsx61(PopoverPrimitive.Portal, {
    children: /* @__PURE__ */ jsx61(PopoverPrimitive.Content, {
      "data-slot": "popover-content",
      align,
      sideOffset,
      className: clsx22("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[state=closed]:animate-out data-[state=open]:animate-in", className),
      ...props
    })
  });
}
function PopoverAnchor({ ...props }) {
  return /* @__PURE__ */ jsx61(PopoverPrimitive.Anchor, {
    "data-slot": "popover-anchor",
    ...props
  });
}

// src/shadcn-ui/examples/combobox-demo.tsx
import { jsx as jsx62, jsxs as jsxs32 } from "react/jsx-runtime";
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
  const [open, setOpen] = React10.useState(false);
  const [value, setValue] = React10.useState("");
  return /* @__PURE__ */ jsxs32(Popover, {
    open,
    onOpenChange: setOpen,
    children: [
      /* @__PURE__ */ jsx62(PopoverTrigger, {
        asChild: true,
        children: /* @__PURE__ */ jsxs32(Button, {
          variant: "outline",
          role: "combobox",
          "aria-expanded": open,
          className: "w-[200px] justify-between",
          children: [
            value ? frameworks.find((framework) => framework.value === value)?.label : "Select framework...",
            /* @__PURE__ */ jsx62(SpriteIcon, {
              iconId: "ChevronsUpDown",
              className: "opacity-50",
              spriteUrl
            })
          ]
        })
      }),
      /* @__PURE__ */ jsx62(PopoverContent, {
        className: "w-[200px] p-0",
        children: /* @__PURE__ */ jsxs32(Command, {
          children: [
            /* @__PURE__ */ jsx62(CommandInput, {
              placeholder: "Search framework...",
              className: "h-9"
            }),
            /* @__PURE__ */ jsxs32(CommandList, {
              children: [
                /* @__PURE__ */ jsx62(CommandEmpty, {
                  children: "No framework found."
                }),
                /* @__PURE__ */ jsx62(CommandGroup, {
                  children: frameworks.map((framework) => /* @__PURE__ */ jsxs32(CommandItem, {
                    value: framework.value,
                    onSelect: (currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    },
                    children: [
                      framework.label,
                      /* @__PURE__ */ jsx62(SpriteIcon, {
                        iconId: "Check",
                        className: clsx23("ml-auto", value === framework.value ? "opacity-100" : "opacity-0"),
                        spriteUrl
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
import React11 from "react";
import { jsx as jsx63, jsxs as jsxs33 } from "react/jsx-runtime";
var labels = ["feature", "bug", "enhancement", "documentation", "design", "question", "maintenance"];
function ComboboxDropdownMenu({ spriteUrl }) {
  const [label, setLabel] = React11.useState("feature");
  const [open, setOpen] = React11.useState(false);
  return /* @__PURE__ */ jsxs33("div", {
    className: "flex w-full flex-col items-start justify-between rounded-md border px-4 py-3 sm:flex-row sm:items-center",
    children: [
      /* @__PURE__ */ jsxs33("p", {
        className: "font-medium text-sm leading-none",
        children: [
          /* @__PURE__ */ jsx63("span", {
            className: "mr-2 rounded-lg bg-primary px-2 py-1 text-primary-foreground text-xs",
            children: label
          }),
          /* @__PURE__ */ jsx63("span", {
            className: "text-muted-foreground",
            children: "Create a new project"
          })
        ]
      }),
      /* @__PURE__ */ jsxs33(DropdownMenu, {
        open,
        onOpenChange: setOpen,
        children: [
          /* @__PURE__ */ jsx63(DropdownMenuTrigger, {
            asChild: true,
            children: /* @__PURE__ */ jsx63(Button, {
              variant: "ghost",
              size: "sm",
              children: /* @__PURE__ */ jsx63(SpriteIcon, {
                iconId: "Ellipsis",
                spriteUrl
              })
            })
          }),
          /* @__PURE__ */ jsxs33(DropdownMenuContent, {
            align: "end",
            className: "w-[200px]",
            children: [
              /* @__PURE__ */ jsx63(DropdownMenuLabel, {
                children: "Actions"
              }),
              /* @__PURE__ */ jsxs33(DropdownMenuGroup, {
                children: [
                  /* @__PURE__ */ jsx63(DropdownMenuItem, {
                    children: "Assign to..."
                  }),
                  /* @__PURE__ */ jsx63(DropdownMenuItem, {
                    children: "Set due date..."
                  }),
                  /* @__PURE__ */ jsx63(DropdownMenuSeparator, {}),
                  /* @__PURE__ */ jsxs33(DropdownMenuSub, {
                    children: [
                      /* @__PURE__ */ jsx63(DropdownMenuSubTrigger, {
                        children: "Apply label"
                      }),
                      /* @__PURE__ */ jsx63(DropdownMenuSubContent, {
                        className: "p-0",
                        children: /* @__PURE__ */ jsxs33(Command, {
                          children: [
                            /* @__PURE__ */ jsx63(CommandInput, {
                              placeholder: "Filter label...",
                              autoFocus: true,
                              className: "h-9"
                            }),
                            /* @__PURE__ */ jsxs33(CommandList, {
                              children: [
                                /* @__PURE__ */ jsx63(CommandEmpty, {
                                  children: "No label found."
                                }),
                                /* @__PURE__ */ jsx63(CommandGroup, {
                                  children: labels.map((label2) => /* @__PURE__ */ jsx63(CommandItem, {
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
                  /* @__PURE__ */ jsx63(DropdownMenuSeparator, {}),
                  /* @__PURE__ */ jsxs33(DropdownMenuItem, {
                    className: "text-red-600",
                    children: [
                      "Delete",
                      /* @__PURE__ */ jsx63(DropdownMenuShortcut, {
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
import clsx24 from "clsx";
import React12 from "react";
import { toast as toast3 } from "sonner";
import { jsx as jsx64, jsxs as jsxs34 } from "react/jsx-runtime";
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
  const [selectedLanguage, setSelectedLanguage] = React12.useState("");
  const [open, setOpen] = React12.useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const language = formData.get("language");
    toast3("You submitted the following values", {
      description: /* @__PURE__ */ jsx64("pre", {
        className: "mt-2 w-[320px] rounded-md bg-neutral-950 p-4",
        children: /* @__PURE__ */ jsx64("code", {
          className: "text-white",
          children: JSON.stringify({ language }, null, 2)
        })
      })
    });
  }
  return /* @__PURE__ */ jsxs34("form", {
    onSubmit: handleSubmit,
    className: "space-y-6",
    children: [
      /* @__PURE__ */ jsxs34(Button, {
        variant: "outline",
        role: "combobox",
        "aria-expanded": open,
        className: clsx24("w-[200px] justify-between", !selectedLanguage && "text-muted-foreground"),
        children: [
          selectedLanguage ? languages.find((language) => language.value === selectedLanguage)?.label : "Select language",
          /* @__PURE__ */ jsx64(SpriteIcon, {
            iconId: "ChevronsUpDown",
            className: "opacity-50",
            spriteUrl
          })
        ]
      }),
      /* @__PURE__ */ jsxs34("div", {
        className: "flex flex-col",
        children: [
          /* @__PURE__ */ jsxs34(Popover, {
            open,
            onOpenChange: setOpen,
            children: [
              /* @__PURE__ */ jsx64(PopoverTrigger, {
                asChild: true
              }),
              /* @__PURE__ */ jsx64(PopoverContent, {
                className: "w-[200px] p-0",
                children: /* @__PURE__ */ jsxs34(Command, {
                  children: [
                    /* @__PURE__ */ jsx64(CommandInput, {
                      placeholder: "Search language...",
                      className: "h-9"
                    }),
                    /* @__PURE__ */ jsxs34(CommandList, {
                      children: [
                        /* @__PURE__ */ jsx64(CommandEmpty, {
                          children: "No language found."
                        }),
                        /* @__PURE__ */ jsx64(CommandGroup, {
                          children: languages.map((language) => /* @__PURE__ */ jsxs34(CommandItem, {
                            value: language.label,
                            onSelect: () => {
                              setSelectedLanguage(language.value);
                              setOpen(false);
                            },
                            children: [
                              language.label,
                              /* @__PURE__ */ jsx64(SpriteIcon, {
                                iconId: "Check",
                                className: clsx24("ml-auto", language.value === selectedLanguage ? "opacity-100" : "opacity-0"),
                                spriteUrl
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
          /* @__PURE__ */ jsx64("input", {
            type: "hidden",
            name: "language",
            value: selectedLanguage
          })
        ]
      }),
      /* @__PURE__ */ jsx64(Button, {
        type: "submit",
        children: "Submit"
      })
    ]
  });
}

// src/shadcn-ui/examples/combobox-popover.tsx
import React13 from "react";
import { jsx as jsx65, jsxs as jsxs35 } from "react/jsx-runtime";
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
function ComboboxPopover() {
  const [open, setOpen] = React13.useState(false);
  const [selectedStatus, setSelectedStatus] = React13.useState(null);
  return /* @__PURE__ */ jsxs35("div", {
    className: "flex items-center space-x-4",
    children: [
      /* @__PURE__ */ jsx65("p", {
        className: "text-muted-foreground text-sm",
        children: "Status"
      }),
      /* @__PURE__ */ jsxs35(Popover, {
        open,
        onOpenChange: setOpen,
        children: [
          /* @__PURE__ */ jsx65(PopoverTrigger, {
            asChild: true,
            children: /* @__PURE__ */ jsx65(Button, {
              variant: "outline",
              className: "w-[150px] justify-start",
              children: selectedStatus ? selectedStatus.label : "+ Set status"
            })
          }),
          /* @__PURE__ */ jsx65(PopoverContent, {
            className: "p-0",
            side: "right",
            align: "start",
            children: /* @__PURE__ */ jsxs35(Command, {
              children: [
                /* @__PURE__ */ jsx65(CommandInput, {
                  placeholder: "Change status..."
                }),
                /* @__PURE__ */ jsxs35(CommandList, {
                  children: [
                    /* @__PURE__ */ jsx65(CommandEmpty, {
                      children: "No results found."
                    }),
                    /* @__PURE__ */ jsx65(CommandGroup, {
                      children: statuses.map((status) => /* @__PURE__ */ jsx65(CommandItem, {
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
import clsx25 from "clsx";
import { ContextMenu as ContextMenuPrimitive } from "radix-ui";
import { jsx as jsx66, jsxs as jsxs36 } from "react/jsx-runtime";
function ContextMenu({ ...props }) {
  return /* @__PURE__ */ jsx66(ContextMenuPrimitive.Root, {
    "data-slot": "context-menu",
    ...props
  });
}
function ContextMenuTrigger({ ...props }) {
  return /* @__PURE__ */ jsx66(ContextMenuPrimitive.Trigger, {
    "data-slot": "context-menu-trigger",
    ...props
  });
}
function ContextMenuGroup({ ...props }) {
  return /* @__PURE__ */ jsx66(ContextMenuPrimitive.Group, {
    "data-slot": "context-menu-group",
    ...props
  });
}
function ContextMenuPortal({ ...props }) {
  return /* @__PURE__ */ jsx66(ContextMenuPrimitive.Portal, {
    "data-slot": "context-menu-portal",
    ...props
  });
}
function ContextMenuSub({ ...props }) {
  return /* @__PURE__ */ jsx66(ContextMenuPrimitive.Sub, {
    "data-slot": "context-menu-sub",
    ...props
  });
}
function ContextMenuRadioGroup({ ...props }) {
  return /* @__PURE__ */ jsx66(ContextMenuPrimitive.RadioGroup, {
    "data-slot": "context-menu-radio-group",
    ...props
  });
}
function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs36(ContextMenuPrimitive.SubTrigger, {
    "data-slot": "context-menu-sub-trigger",
    "data-inset": inset,
    className: clsx25("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[inset]:pl-8 data-[state=open]:text-accent-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx66(SvgIcon, {
        iconId: "ChevronRight",
        className: "ml-auto"
      })
    ]
  });
}
function ContextMenuSubContent({ className, ...props }) {
  return /* @__PURE__ */ jsx66(ContextMenuPrimitive.SubContent, {
    "data-slot": "context-menu-sub-content",
    className: clsx25("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=closed]:animate-out data-[state=open]:animate-in", className),
    ...props
  });
}
function ContextMenuContent({ className, ...props }) {
  return /* @__PURE__ */ jsx66(ContextMenuPrimitive.Portal, {
    children: /* @__PURE__ */ jsx66(ContextMenuPrimitive.Content, {
      "data-slot": "context-menu-content",
      className: clsx25("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=closed]:animate-out data-[state=open]:animate-in", className),
      ...props
    })
  });
}
function ContextMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx66(ContextMenuPrimitive.Item, {
    "data-slot": "context-menu-item",
    "data-inset": inset,
    "data-variant": variant,
    className: clsx25("data-[variant=destructive]:*:[svg]:!text-destructive relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[disabled]:opacity-50 data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props
  });
}
function ContextMenuCheckboxItem({ className, children, checked, ...props }) {
  return /* @__PURE__ */ jsxs36(ContextMenuPrimitive.CheckboxItem, {
    "data-slot": "context-menu-checkbox-item",
    className: clsx25("relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx66("span", {
        className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
        children: /* @__PURE__ */ jsx66(ContextMenuPrimitive.ItemIndicator, {
          children: /* @__PURE__ */ jsx66(SvgIcon, {
            iconId: "Check",
            className: "size-4"
          })
        })
      }),
      children
    ]
  });
}
function ContextMenuRadioItem({ className, children, ...props }) {
  return /* @__PURE__ */ jsxs36(ContextMenuPrimitive.RadioItem, {
    "data-slot": "context-menu-radio-item",
    className: clsx25("relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx66("span", {
        className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
        children: /* @__PURE__ */ jsx66(ContextMenuPrimitive.ItemIndicator, {
          children: /* @__PURE__ */ jsx66(SvgIcon, {
            iconId: "Circle",
            className: "size-2 fill-current"
          })
        })
      }),
      children
    ]
  });
}
function ContextMenuLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsx66(ContextMenuPrimitive.Label, {
    "data-slot": "context-menu-label",
    "data-inset": inset,
    className: clsx25("px-2 py-1.5 font-medium text-foreground text-sm data-[inset]:pl-8", className),
    ...props
  });
}
function ContextMenuSeparator({ className, ...props }) {
  return /* @__PURE__ */ jsx66(ContextMenuPrimitive.Separator, {
    "data-slot": "context-menu-separator",
    className: clsx25("-mx-1 my-1 h-px bg-border", className),
    ...props
  });
}
function ContextMenuShortcut({ className, ...props }) {
  return /* @__PURE__ */ jsx66("span", {
    "data-slot": "context-menu-shortcut",
    className: clsx25("ml-auto text-muted-foreground text-xs tracking-widest", className),
    ...props
  });
}

// src/shadcn-ui/examples/context-menu-demo.tsx
import { jsx as jsx67, jsxs as jsxs37 } from "react/jsx-runtime";
function ContextMenuDemo() {
  return /* @__PURE__ */ jsxs37(ContextMenu, {
    children: [
      /* @__PURE__ */ jsx67(ContextMenuTrigger, {
        className: "flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm",
        children: "Right click here"
      }),
      /* @__PURE__ */ jsxs37(ContextMenuContent, {
        className: "w-52",
        children: [
          /* @__PURE__ */ jsxs37(ContextMenuItem, {
            inset: true,
            children: [
              "Back",
              /* @__PURE__ */ jsx67(ContextMenuShortcut, {
                children: "⌘["
              })
            ]
          }),
          /* @__PURE__ */ jsxs37(ContextMenuItem, {
            inset: true,
            disabled: true,
            children: [
              "Forward",
              /* @__PURE__ */ jsx67(ContextMenuShortcut, {
                children: "⌘]"
              })
            ]
          }),
          /* @__PURE__ */ jsxs37(ContextMenuItem, {
            inset: true,
            children: [
              "Reload",
              /* @__PURE__ */ jsx67(ContextMenuShortcut, {
                children: "⌘R"
              })
            ]
          }),
          /* @__PURE__ */ jsxs37(ContextMenuSub, {
            children: [
              /* @__PURE__ */ jsx67(ContextMenuSubTrigger, {
                inset: true,
                children: "More Tools"
              }),
              /* @__PURE__ */ jsxs37(ContextMenuSubContent, {
                className: "w-44",
                children: [
                  /* @__PURE__ */ jsx67(ContextMenuItem, {
                    children: "Save Page..."
                  }),
                  /* @__PURE__ */ jsx67(ContextMenuItem, {
                    children: "Create Shortcut..."
                  }),
                  /* @__PURE__ */ jsx67(ContextMenuItem, {
                    children: "Name Window..."
                  }),
                  /* @__PURE__ */ jsx67(ContextMenuSeparator, {}),
                  /* @__PURE__ */ jsx67(ContextMenuItem, {
                    children: "Developer Tools"
                  }),
                  /* @__PURE__ */ jsx67(ContextMenuSeparator, {}),
                  /* @__PURE__ */ jsx67(ContextMenuItem, {
                    variant: "destructive",
                    children: "Delete"
                  })
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsx67(ContextMenuSeparator, {}),
          /* @__PURE__ */ jsx67(ContextMenuCheckboxItem, {
            checked: true,
            children: "Show Bookmarks"
          }),
          /* @__PURE__ */ jsx67(ContextMenuCheckboxItem, {
            children: "Show Full URLs"
          }),
          /* @__PURE__ */ jsx67(ContextMenuSeparator, {}),
          /* @__PURE__ */ jsxs37(ContextMenuRadioGroup, {
            value: "pedro",
            children: [
              /* @__PURE__ */ jsx67(ContextMenuLabel, {
                inset: true,
                children: "People"
              }),
              /* @__PURE__ */ jsx67(ContextMenuRadioItem, {
                value: "pedro",
                children: "Pedro Duarte"
              }),
              /* @__PURE__ */ jsx67(ContextMenuRadioItem, {
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
import React14 from "react";
import { jsx as jsx68, jsxs as jsxs38 } from "react/jsx-runtime";
function DialogCloseButton() {
  const linkId = React14.useId();
  return /* @__PURE__ */ jsxs38(Dialog, {
    children: [
      /* @__PURE__ */ jsx68(DialogTrigger, {
        asChild: true,
        children: /* @__PURE__ */ jsx68(Button, {
          variant: "outline",
          children: "Share"
        })
      }),
      /* @__PURE__ */ jsxs38(DialogContent, {
        className: "sm:max-w-md",
        children: [
          /* @__PURE__ */ jsxs38(DialogHeader, {
            children: [
              /* @__PURE__ */ jsx68(DialogTitle, {
                children: "Share link"
              }),
              /* @__PURE__ */ jsx68(DialogDescription, {
                children: "Anyone who has this link will be able to view this."
              })
            ]
          }),
          /* @__PURE__ */ jsx68("div", {
            className: "flex items-center gap-2",
            children: /* @__PURE__ */ jsxs38("div", {
              className: "grid flex-1 gap-2",
              children: [
                /* @__PURE__ */ jsx68(Label, {
                  htmlFor: linkId,
                  className: "sr-only",
                  children: "Link"
                }),
                /* @__PURE__ */ jsx68(Input, {
                  id: linkId,
                  defaultValue: "https://ui.shadcn.com/docs/installation",
                  readOnly: true
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx68(DialogFooter, {
            className: "sm:justify-start",
            children: /* @__PURE__ */ jsx68(DialogClose, {
              asChild: true,
              children: /* @__PURE__ */ jsx68(Button, {
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
import React15 from "react";
import { jsx as jsx69, jsxs as jsxs39 } from "react/jsx-runtime";
function DialogDemo() {
  const nameId = React15.useId();
  const usernameId = React15.useId();
  return /* @__PURE__ */ jsx69(Dialog, {
    children: /* @__PURE__ */ jsxs39("form", {
      children: [
        /* @__PURE__ */ jsx69(DialogTrigger, {
          asChild: true,
          children: /* @__PURE__ */ jsx69(Button, {
            variant: "outline",
            children: "Open Dialog"
          })
        }),
        /* @__PURE__ */ jsxs39(DialogContent, {
          className: "sm:max-w-[425px]",
          children: [
            /* @__PURE__ */ jsxs39(DialogHeader, {
              children: [
                /* @__PURE__ */ jsx69(DialogTitle, {
                  children: "Edit profile"
                }),
                /* @__PURE__ */ jsx69(DialogDescription, {
                  children: "Make changes to your profile here. Click save when you're done."
                })
              ]
            }),
            /* @__PURE__ */ jsxs39("div", {
              className: "grid gap-4",
              children: [
                /* @__PURE__ */ jsxs39("div", {
                  className: "grid gap-3",
                  children: [
                    /* @__PURE__ */ jsx69(Label, {
                      htmlFor: nameId,
                      children: "Name"
                    }),
                    /* @__PURE__ */ jsx69(Input, {
                      id: nameId,
                      name: "name",
                      defaultValue: "Pedro Duarte"
                    })
                  ]
                }),
                /* @__PURE__ */ jsxs39("div", {
                  className: "grid gap-3",
                  children: [
                    /* @__PURE__ */ jsx69(Label, {
                      htmlFor: usernameId,
                      children: "Username"
                    }),
                    /* @__PURE__ */ jsx69(Input, {
                      id: usernameId,
                      name: "username",
                      defaultValue: "@peduarte"
                    })
                  ]
                })
              ]
            }),
            /* @__PURE__ */ jsxs39(DialogFooter, {
              children: [
                /* @__PURE__ */ jsx69(DialogClose, {
                  asChild: true,
                  children: /* @__PURE__ */ jsx69(Button, {
                    variant: "outline",
                    children: "Cancel"
                  })
                }),
                /* @__PURE__ */ jsx69(Button, {
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
import React16 from "react";
import { jsx as jsx70, jsxs as jsxs40 } from "react/jsx-runtime";
function DropdownMenuCheckboxes() {
  const [showStatusBar, setShowStatusBar] = React16.useState(true);
  const [showActivityBar, setShowActivityBar] = React16.useState(false);
  const [showPanel, setShowPanel] = React16.useState(false);
  return /* @__PURE__ */ jsxs40(DropdownMenu, {
    children: [
      /* @__PURE__ */ jsx70(DropdownMenuTrigger, {
        asChild: true,
        children: /* @__PURE__ */ jsx70(Button, {
          variant: "outline",
          children: "Open"
        })
      }),
      /* @__PURE__ */ jsxs40(DropdownMenuContent, {
        className: "w-56",
        children: [
          /* @__PURE__ */ jsx70(DropdownMenuLabel, {
            children: "Appearance"
          }),
          /* @__PURE__ */ jsx70(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsx70(DropdownMenuCheckboxItem, {
            checked: showStatusBar,
            onCheckedChange: setShowStatusBar,
            children: "Status Bar"
          }),
          /* @__PURE__ */ jsx70(DropdownMenuCheckboxItem, {
            checked: showActivityBar,
            onCheckedChange: setShowActivityBar,
            disabled: true,
            children: "Activity Bar"
          }),
          /* @__PURE__ */ jsx70(DropdownMenuCheckboxItem, {
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
import { jsx as jsx71, jsxs as jsxs41 } from "react/jsx-runtime";
function DropdownMenuDemo() {
  return /* @__PURE__ */ jsxs41(DropdownMenu, {
    children: [
      /* @__PURE__ */ jsx71(DropdownMenuTrigger, {
        asChild: true,
        children: /* @__PURE__ */ jsx71(Button, {
          variant: "outline",
          children: "Open"
        })
      }),
      /* @__PURE__ */ jsxs41(DropdownMenuContent, {
        className: "w-56",
        align: "start",
        children: [
          /* @__PURE__ */ jsx71(DropdownMenuLabel, {
            children: "My Account"
          }),
          /* @__PURE__ */ jsxs41(DropdownMenuGroup, {
            children: [
              /* @__PURE__ */ jsxs41(DropdownMenuItem, {
                children: [
                  "Profile",
                  /* @__PURE__ */ jsx71(DropdownMenuShortcut, {
                    children: "⇧⌘P"
                  })
                ]
              }),
              /* @__PURE__ */ jsxs41(DropdownMenuItem, {
                children: [
                  "Billing",
                  /* @__PURE__ */ jsx71(DropdownMenuShortcut, {
                    children: "⌘B"
                  })
                ]
              }),
              /* @__PURE__ */ jsxs41(DropdownMenuItem, {
                children: [
                  "Settings",
                  /* @__PURE__ */ jsx71(DropdownMenuShortcut, {
                    children: "⌘S"
                  })
                ]
              }),
              /* @__PURE__ */ jsxs41(DropdownMenuItem, {
                children: [
                  "Keyboard shortcuts",
                  /* @__PURE__ */ jsx71(DropdownMenuShortcut, {
                    children: "⌘K"
                  })
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsx71(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsxs41(DropdownMenuGroup, {
            children: [
              /* @__PURE__ */ jsx71(DropdownMenuItem, {
                children: "Team"
              }),
              /* @__PURE__ */ jsxs41(DropdownMenuSub, {
                children: [
                  /* @__PURE__ */ jsx71(DropdownMenuSubTrigger, {
                    children: "Invite users"
                  }),
                  /* @__PURE__ */ jsx71(DropdownMenuPortal, {
                    children: /* @__PURE__ */ jsxs41(DropdownMenuSubContent, {
                      children: [
                        /* @__PURE__ */ jsx71(DropdownMenuItem, {
                          children: "Email"
                        }),
                        /* @__PURE__ */ jsx71(DropdownMenuItem, {
                          children: "Message"
                        }),
                        /* @__PURE__ */ jsx71(DropdownMenuSeparator, {}),
                        /* @__PURE__ */ jsx71(DropdownMenuItem, {
                          children: "More..."
                        })
                      ]
                    })
                  })
                ]
              }),
              /* @__PURE__ */ jsxs41(DropdownMenuItem, {
                children: [
                  "New Team",
                  /* @__PURE__ */ jsx71(DropdownMenuShortcut, {
                    children: "⌘+T"
                  })
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsx71(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsx71(DropdownMenuItem, {
            children: "GitHub"
          }),
          /* @__PURE__ */ jsx71(DropdownMenuItem, {
            children: "Support"
          }),
          /* @__PURE__ */ jsx71(DropdownMenuItem, {
            disabled: true,
            children: "API"
          }),
          /* @__PURE__ */ jsx71(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsxs41(DropdownMenuItem, {
            children: [
              "Log out",
              /* @__PURE__ */ jsx71(DropdownMenuShortcut, {
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
import React17 from "react";
import { jsx as jsx72, jsxs as jsxs42 } from "react/jsx-runtime";
function DropdownMenuRadioGroupDemo() {
  const [position, setPosition] = React17.useState("bottom");
  return /* @__PURE__ */ jsxs42(DropdownMenu, {
    children: [
      /* @__PURE__ */ jsx72(DropdownMenuTrigger, {
        asChild: true,
        children: /* @__PURE__ */ jsx72(Button, {
          variant: "outline",
          children: "Open"
        })
      }),
      /* @__PURE__ */ jsxs42(DropdownMenuContent, {
        className: "w-56",
        children: [
          /* @__PURE__ */ jsx72(DropdownMenuLabel, {
            children: "Panel Position"
          }),
          /* @__PURE__ */ jsx72(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsxs42(DropdownMenuRadioGroup, {
            value: position,
            onValueChange: setPosition,
            children: [
              /* @__PURE__ */ jsx72(DropdownMenuRadioItem, {
                value: "top",
                children: "Top"
              }),
              /* @__PURE__ */ jsx72(DropdownMenuRadioItem, {
                value: "bottom",
                children: "Bottom"
              }),
              /* @__PURE__ */ jsx72(DropdownMenuRadioItem, {
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
import clsx26 from "clsx";
import { HoverCard as HoverCardPrimitive } from "radix-ui";
import { jsx as jsx73 } from "react/jsx-runtime";
function HoverCard({ ...props }) {
  return /* @__PURE__ */ jsx73(HoverCardPrimitive.Root, {
    "data-slot": "hover-card",
    ...props
  });
}
function HoverCardTrigger({ ...props }) {
  return /* @__PURE__ */ jsx73(HoverCardPrimitive.Trigger, {
    "data-slot": "hover-card-trigger",
    ...props
  });
}
function HoverCardContent({ className, align = "center", sideOffset = 4, ...props }) {
  return /* @__PURE__ */ jsx73(HoverCardPrimitive.Portal, {
    "data-slot": "hover-card-portal",
    children: /* @__PURE__ */ jsx73(HoverCardPrimitive.Content, {
      "data-slot": "hover-card-content",
      align,
      sideOffset,
      className: clsx26("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[state=closed]:animate-out data-[state=open]:animate-in", className),
      ...props
    })
  });
}

// src/shadcn-ui/examples/hover-card-demo.tsx
import { jsx as jsx74, jsxs as jsxs43 } from "react/jsx-runtime";
function HoverCardDemo() {
  return /* @__PURE__ */ jsxs43(HoverCard, {
    children: [
      /* @__PURE__ */ jsx74(HoverCardTrigger, {
        asChild: true,
        children: /* @__PURE__ */ jsx74(Button, {
          variant: "link",
          children: "@nextjs"
        })
      }),
      /* @__PURE__ */ jsx74(HoverCardContent, {
        className: "w-80",
        children: /* @__PURE__ */ jsxs43("div", {
          className: "flex justify-between gap-4",
          children: [
            /* @__PURE__ */ jsxs43(Avatar, {
              children: [
                /* @__PURE__ */ jsx74(AvatarImage, {
                  src: "https://github.com/vercel.png"
                }),
                /* @__PURE__ */ jsx74(AvatarFallback, {
                  children: "VC"
                })
              ]
            }),
            /* @__PURE__ */ jsxs43("div", {
              className: "space-y-1",
              children: [
                /* @__PURE__ */ jsx74("h4", {
                  className: "font-semibold text-sm",
                  children: "@nextjs"
                }),
                /* @__PURE__ */ jsx74("p", {
                  className: "text-sm",
                  children: "The React Framework – created and maintained by @vercel."
                }),
                /* @__PURE__ */ jsx74("div", {
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
import { jsx as jsx75 } from "react/jsx-runtime";
function InputDemo() {
  return /* @__PURE__ */ jsx75(Input, {
    type: "email",
    placeholder: "Email"
  });
}

// src/shadcn-ui/examples/input-disabled.tsx
import { jsx as jsx76 } from "react/jsx-runtime";
function InputDisabled() {
  return /* @__PURE__ */ jsx76(Input, {
    disabled: true,
    type: "email",
    placeholder: "Email"
  });
}

// src/shadcn-ui/examples/input-file.tsx
import React18 from "react";
import { jsx as jsx77, jsxs as jsxs44 } from "react/jsx-runtime";
function InputFile() {
  const pictureId = React18.useId();
  return /* @__PURE__ */ jsxs44("div", {
    className: "grid w-full max-w-sm items-center gap-3",
    children: [
      /* @__PURE__ */ jsx77(Label, {
        htmlFor: pictureId,
        children: "Picture"
      }),
      /* @__PURE__ */ jsx77(Input, {
        id: pictureId,
        type: "file"
      })
    ]
  });
}

// src/shadcn-ui/examples/input-form.tsx
import { toast as toast4 } from "sonner";
import { jsx as jsx78, jsxs as jsxs45 } from "react/jsx-runtime";
function InputForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    toast4("You submitted the following values", {
      description: /* @__PURE__ */ jsx78("pre", {
        className: "mt-2 w-[320px] rounded-md bg-neutral-950 p-4",
        children: /* @__PURE__ */ jsx78("code", {
          className: "text-white",
          children: JSON.stringify({ username }, null, 2)
        })
      })
    });
  }
  return /* @__PURE__ */ jsxs45("form", {
    onSubmit: handleSubmit,
    className: "w-2/3 space-y-6",
    children: [
      /* @__PURE__ */ jsx78(Input, {
        name: "username",
        placeholder: "shadcn"
      }),
      /* @__PURE__ */ jsx78(Button, {
        type: "submit",
        children: "Submit"
      })
    ]
  });
}

// src/shadcn-ui/examples/input-with-button.tsx
import { jsx as jsx79, jsxs as jsxs46 } from "react/jsx-runtime";
function InputWithButton() {
  return /* @__PURE__ */ jsxs46("div", {
    className: "flex w-full max-w-sm items-center gap-2",
    children: [
      /* @__PURE__ */ jsx79(Input, {
        type: "email",
        placeholder: "Email"
      }),
      /* @__PURE__ */ jsx79(Button, {
        type: "submit",
        variant: "outline",
        children: "Subscribe"
      })
    ]
  });
}

// src/shadcn-ui/examples/input-with-label.tsx
import React19 from "react";
import { jsx as jsx80, jsxs as jsxs47 } from "react/jsx-runtime";
function InputWithLabel() {
  const emailId = React19.useId();
  return /* @__PURE__ */ jsxs47("div", {
    className: "grid w-full max-w-sm items-center gap-3",
    children: [
      /* @__PURE__ */ jsx80(Label, {
        htmlFor: emailId,
        children: "Email"
      }),
      /* @__PURE__ */ jsx80(Input, {
        type: "email",
        id: emailId,
        placeholder: "Email"
      })
    ]
  });
}

// src/shadcn-ui/examples/input-with-text.tsx
import React20 from "react";
import { jsx as jsx81, jsxs as jsxs48 } from "react/jsx-runtime";
function InputWithText() {
  const emailId = React20.useId();
  return /* @__PURE__ */ jsxs48("div", {
    className: "grid w-full max-w-sm items-center gap-3",
    children: [
      /* @__PURE__ */ jsx81(Label, {
        htmlFor: emailId,
        children: "Email"
      }),
      /* @__PURE__ */ jsx81(Input, {
        type: "email",
        id: emailId,
        placeholder: "Email"
      }),
      /* @__PURE__ */ jsx81("p", {
        className: "text-muted-foreground text-sm",
        children: "Enter your email address."
      })
    ]
  });
}

// src/shadcn-ui/examples/label-demo.tsx
import React21 from "react";
import { jsx as jsx82, jsxs as jsxs49 } from "react/jsx-runtime";
function LabelDemo() {
  const termsId = React21.useId();
  return /* @__PURE__ */ jsx82("div", {
    children: /* @__PURE__ */ jsxs49("div", {
      className: "flex items-center space-x-2",
      children: [
        /* @__PURE__ */ jsx82(Checkbox, {
          id: termsId
        }),
        /* @__PURE__ */ jsx82(Label, {
          htmlFor: termsId,
          children: "Accept terms and conditions"
        })
      ]
    })
  });
}

// src/shadcn-ui/components/menubar.tsx
import clsx27 from "clsx";
import { Menubar as MenubarPrimitive } from "radix-ui";
import { jsx as jsx83, jsxs as jsxs50 } from "react/jsx-runtime";
function Menubar({ className, ...props }) {
  return /* @__PURE__ */ jsx83(MenubarPrimitive.Root, {
    "data-slot": "menubar",
    className: clsx27("flex h-9 items-center gap-1 rounded-md border bg-background p-1 shadow-xs", className),
    ...props
  });
}
function MenubarMenu({ ...props }) {
  return /* @__PURE__ */ jsx83(MenubarPrimitive.Menu, {
    "data-slot": "menubar-menu",
    ...props
  });
}
function MenubarGroup({ ...props }) {
  return /* @__PURE__ */ jsx83(MenubarPrimitive.Group, {
    "data-slot": "menubar-group",
    ...props
  });
}
function MenubarPortal({ ...props }) {
  return /* @__PURE__ */ jsx83(MenubarPrimitive.Portal, {
    "data-slot": "menubar-portal",
    ...props
  });
}
function MenubarRadioGroup({ ...props }) {
  return /* @__PURE__ */ jsx83(MenubarPrimitive.RadioGroup, {
    "data-slot": "menubar-radio-group",
    ...props
  });
}
function MenubarTrigger({ className, ...props }) {
  return /* @__PURE__ */ jsx83(MenubarPrimitive.Trigger, {
    "data-slot": "menubar-trigger",
    className: clsx27("flex select-none items-center rounded-sm px-2 py-1 font-medium text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground", className),
    ...props
  });
}
function MenubarContent({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }) {
  return /* @__PURE__ */ jsx83(MenubarPortal, {
    children: /* @__PURE__ */ jsx83(MenubarPrimitive.Content, {
      "data-slot": "menubar-content",
      align,
      alignOffset,
      sideOffset,
      className: clsx27("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in", className),
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
  return /* @__PURE__ */ jsx83(MenubarPrimitive.Item, {
    "data-slot": "menubar-item",
    "data-inset": inset,
    "data-variant": variant,
    className: clsx27("data-[variant=destructive]:*:[svg]:!text-destructive relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[disabled]:opacity-50 data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props
  });
}
function MenubarCheckboxItem({ className, children, checked, ...props }) {
  return /* @__PURE__ */ jsxs50(MenubarPrimitive.CheckboxItem, {
    "data-slot": "menubar-checkbox-item",
    className: clsx27("relative flex cursor-default select-none items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx83("span", {
        className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
        children: /* @__PURE__ */ jsx83(MenubarPrimitive.ItemIndicator, {
          children: /* @__PURE__ */ jsx83(SvgIcon, {
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
  return /* @__PURE__ */ jsxs50(MenubarPrimitive.RadioItem, {
    "data-slot": "menubar-radio-item",
    className: clsx27("relative flex cursor-default select-none items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx83("span", {
        className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
        children: /* @__PURE__ */ jsx83(MenubarPrimitive.ItemIndicator, {
          children: /* @__PURE__ */ jsx83(SvgIcon, {
            iconId: "Circle",
            className: "size-2 fill-current"
          })
        })
      }),
      children
    ]
  });
}
function MenubarLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsx83(MenubarPrimitive.Label, {
    "data-slot": "menubar-label",
    "data-inset": inset,
    className: clsx27("px-2 py-1.5 font-medium text-sm data-[inset]:pl-8", className),
    ...props
  });
}
function MenubarSeparator({ className, ...props }) {
  return /* @__PURE__ */ jsx83(MenubarPrimitive.Separator, {
    "data-slot": "menubar-separator",
    className: clsx27("-mx-1 my-1 h-px bg-border", className),
    ...props
  });
}
function MenubarShortcut({ className, ...props }) {
  return /* @__PURE__ */ jsx83("span", {
    "data-slot": "menubar-shortcut",
    className: clsx27("ml-auto text-muted-foreground text-xs tracking-widest", className),
    ...props
  });
}
function MenubarSub({ ...props }) {
  return /* @__PURE__ */ jsx83(MenubarPrimitive.Sub, {
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
  return /* @__PURE__ */ jsxs50(MenubarPrimitive.SubTrigger, {
    "data-slot": "menubar-sub-trigger",
    "data-inset": inset,
    className: clsx27("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[inset]:pl-8 data-[state=open]:text-accent-foreground", className),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx83(SvgIcon, {
        iconId: "ChevronRight",
        className: "ml-auto h-4 w-4"
      })
    ]
  });
}
function MenubarSubContent({ className, ...props }) {
  return /* @__PURE__ */ jsx83(MenubarPrimitive.SubContent, {
    "data-slot": "menubar-sub-content",
    className: clsx27("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=closed]:animate-out data-[state=open]:animate-in", className),
    ...props
  });
}

// src/shadcn-ui/examples/menubar-demo.tsx
import { jsx as jsx84, jsxs as jsxs51 } from "react/jsx-runtime";
function MenubarDemo() {
  return /* @__PURE__ */ jsxs51(Menubar, {
    children: [
      /* @__PURE__ */ jsxs51(MenubarMenu, {
        children: [
          /* @__PURE__ */ jsx84(MenubarTrigger, {
            children: "File"
          }),
          /* @__PURE__ */ jsxs51(MenubarContent, {
            children: [
              /* @__PURE__ */ jsxs51(MenubarItem, {
                children: [
                  "New Tab ",
                  /* @__PURE__ */ jsx84(MenubarShortcut, {
                    children: "⌘T"
                  })
                ]
              }),
              /* @__PURE__ */ jsxs51(MenubarItem, {
                children: [
                  "New Window ",
                  /* @__PURE__ */ jsx84(MenubarShortcut, {
                    children: "⌘N"
                  })
                ]
              }),
              /* @__PURE__ */ jsx84(MenubarItem, {
                disabled: true,
                children: "New Incognito Window"
              }),
              /* @__PURE__ */ jsx84(MenubarSeparator, {}),
              /* @__PURE__ */ jsxs51(MenubarSub, {
                children: [
                  /* @__PURE__ */ jsx84(MenubarSubTrigger, {
                    children: "Share"
                  }),
                  /* @__PURE__ */ jsxs51(MenubarSubContent, {
                    children: [
                      /* @__PURE__ */ jsx84(MenubarItem, {
                        children: "Email link"
                      }),
                      /* @__PURE__ */ jsx84(MenubarItem, {
                        children: "Messages"
                      }),
                      /* @__PURE__ */ jsx84(MenubarItem, {
                        children: "Notes"
                      })
                    ]
                  })
                ]
              }),
              /* @__PURE__ */ jsx84(MenubarSeparator, {}),
              /* @__PURE__ */ jsxs51(MenubarItem, {
                children: [
                  "Print... ",
                  /* @__PURE__ */ jsx84(MenubarShortcut, {
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
          /* @__PURE__ */ jsx84(MenubarTrigger, {
            children: "Edit"
          }),
          /* @__PURE__ */ jsxs51(MenubarContent, {
            children: [
              /* @__PURE__ */ jsxs51(MenubarItem, {
                children: [
                  "Undo ",
                  /* @__PURE__ */ jsx84(MenubarShortcut, {
                    children: "⌘Z"
                  })
                ]
              }),
              /* @__PURE__ */ jsxs51(MenubarItem, {
                children: [
                  "Redo ",
                  /* @__PURE__ */ jsx84(MenubarShortcut, {
                    children: "⇧⌘Z"
                  })
                ]
              }),
              /* @__PURE__ */ jsx84(MenubarSeparator, {}),
              /* @__PURE__ */ jsxs51(MenubarSub, {
                children: [
                  /* @__PURE__ */ jsx84(MenubarSubTrigger, {
                    children: "Find"
                  }),
                  /* @__PURE__ */ jsxs51(MenubarSubContent, {
                    children: [
                      /* @__PURE__ */ jsx84(MenubarItem, {
                        children: "Search the web"
                      }),
                      /* @__PURE__ */ jsx84(MenubarSeparator, {}),
                      /* @__PURE__ */ jsx84(MenubarItem, {
                        children: "Find..."
                      }),
                      /* @__PURE__ */ jsx84(MenubarItem, {
                        children: "Find Next"
                      }),
                      /* @__PURE__ */ jsx84(MenubarItem, {
                        children: "Find Previous"
                      })
                    ]
                  })
                ]
              }),
              /* @__PURE__ */ jsx84(MenubarSeparator, {}),
              /* @__PURE__ */ jsx84(MenubarItem, {
                children: "Cut"
              }),
              /* @__PURE__ */ jsx84(MenubarItem, {
                children: "Copy"
              }),
              /* @__PURE__ */ jsx84(MenubarItem, {
                children: "Paste"
              })
            ]
          })
        ]
      }),
      /* @__PURE__ */ jsxs51(MenubarMenu, {
        children: [
          /* @__PURE__ */ jsx84(MenubarTrigger, {
            children: "View"
          }),
          /* @__PURE__ */ jsxs51(MenubarContent, {
            children: [
              /* @__PURE__ */ jsx84(MenubarCheckboxItem, {
                children: "Always Show Bookmarks Bar"
              }),
              /* @__PURE__ */ jsx84(MenubarCheckboxItem, {
                checked: true,
                children: "Always Show Full URLs"
              }),
              /* @__PURE__ */ jsx84(MenubarSeparator, {}),
              /* @__PURE__ */ jsxs51(MenubarItem, {
                inset: true,
                children: [
                  "Reload ",
                  /* @__PURE__ */ jsx84(MenubarShortcut, {
                    children: "⌘R"
                  })
                ]
              }),
              /* @__PURE__ */ jsxs51(MenubarItem, {
                disabled: true,
                inset: true,
                children: [
                  "Force Reload ",
                  /* @__PURE__ */ jsx84(MenubarShortcut, {
                    children: "⇧⌘R"
                  })
                ]
              }),
              /* @__PURE__ */ jsx84(MenubarSeparator, {}),
              /* @__PURE__ */ jsx84(MenubarItem, {
                inset: true,
                children: "Toggle Fullscreen"
              }),
              /* @__PURE__ */ jsx84(MenubarSeparator, {}),
              /* @__PURE__ */ jsx84(MenubarItem, {
                inset: true,
                children: "Hide Sidebar"
              })
            ]
          })
        ]
      }),
      /* @__PURE__ */ jsxs51(MenubarMenu, {
        children: [
          /* @__PURE__ */ jsx84(MenubarTrigger, {
            children: "Profiles"
          }),
          /* @__PURE__ */ jsxs51(MenubarContent, {
            children: [
              /* @__PURE__ */ jsxs51(MenubarRadioGroup, {
                value: "benoit",
                children: [
                  /* @__PURE__ */ jsx84(MenubarRadioItem, {
                    value: "andy",
                    children: "Andy"
                  }),
                  /* @__PURE__ */ jsx84(MenubarRadioItem, {
                    value: "benoit",
                    children: "Benoit"
                  }),
                  /* @__PURE__ */ jsx84(MenubarRadioItem, {
                    value: "Luis",
                    children: "Luis"
                  })
                ]
              }),
              /* @__PURE__ */ jsx84(MenubarSeparator, {}),
              /* @__PURE__ */ jsx84(MenubarItem, {
                inset: true,
                children: "Edit..."
              }),
              /* @__PURE__ */ jsx84(MenubarSeparator, {}),
              /* @__PURE__ */ jsx84(MenubarItem, {
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
import { jsx as jsx85, jsxs as jsxs52 } from "react/jsx-runtime";
function ModeToggle({ spriteUrl }) {
  const { setTheme } = useTheme2();
  return /* @__PURE__ */ jsxs52(DropdownMenu, {
    children: [
      /* @__PURE__ */ jsx85(DropdownMenuTrigger, {
        asChild: true,
        children: /* @__PURE__ */ jsxs52(Button, {
          variant: "outline",
          size: "icon",
          children: [
            /* @__PURE__ */ jsx85(SpriteIcon, {
              iconId: "Sun",
              className: "dark:-rotate-90 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:scale-0",
              spriteUrl
            }),
            /* @__PURE__ */ jsx85(SpriteIcon, {
              iconId: "Moon",
              className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100",
              spriteUrl
            }),
            /* @__PURE__ */ jsx85("span", {
              className: "sr-only",
              children: "Toggle theme"
            })
          ]
        })
      }),
      /* @__PURE__ */ jsxs52(DropdownMenuContent, {
        align: "end",
        children: [
          /* @__PURE__ */ jsx85(DropdownMenuItem, {
            onClick: () => setTheme("light"),
            children: "Light"
          }),
          /* @__PURE__ */ jsx85(DropdownMenuItem, {
            onClick: () => setTheme("dark"),
            children: "Dark"
          }),
          /* @__PURE__ */ jsx85(DropdownMenuItem, {
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
import clsx28 from "clsx";
import { NavigationMenu as NavigationMenuPrimitive } from "radix-ui";
import { jsx as jsx86, jsxs as jsxs53 } from "react/jsx-runtime";
function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs53(NavigationMenuPrimitive.Root, {
    "data-slot": "navigation-menu",
    "data-viewport": viewport,
    className: clsx28("group/navigation-menu relative flex max-w-max flex-1 items-center justify-center", className),
    ...props,
    children: [
      children,
      viewport && /* @__PURE__ */ jsx86(NavigationMenuViewport, {})
    ]
  });
}
function NavigationMenuList({ className, ...props }) {
  return /* @__PURE__ */ jsx86(NavigationMenuPrimitive.List, {
    "data-slot": "navigation-menu-list",
    className: clsx28("group flex flex-1 list-none items-center justify-center gap-1", className),
    ...props
  });
}
function NavigationMenuItem({ className, ...props }) {
  return /* @__PURE__ */ jsx86(NavigationMenuPrimitive.Item, {
    "data-slot": "navigation-menu-item",
    className: clsx28("relative", className),
    ...props
  });
}
var navigationMenuTriggerStyle = cva4("group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1");
function NavigationMenuTrigger({ className, children, ...props }) {
  return /* @__PURE__ */ jsxs53(NavigationMenuPrimitive.Trigger, {
    "data-slot": "navigation-menu-trigger",
    className: clsx28(navigationMenuTriggerStyle(), "group", className),
    ...props,
    children: [
      children,
      " ",
      /* @__PURE__ */ jsx86(SvgIcon, {
        iconId: "ChevronDown",
        className: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
        "aria-hidden": "true"
      })
    ]
  });
}
function NavigationMenuContent({ className, ...props }) {
  return /* @__PURE__ */ jsx86(NavigationMenuPrimitive.Content, {
    "data-slot": "navigation-menu-content",
    className: clsx28("data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out md:absolute md:w-auto", "group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 **:data-[slot=navigation-menu-link]:focus:outline-none **:data-[slot=navigation-menu-link]:focus:ring-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in", className),
    ...props
  });
}
function NavigationMenuViewport({ className, ...props }) {
  return /* @__PURE__ */ jsx86("div", {
    className: clsx28("absolute top-full left-0 isolate z-50 flex justify-center"),
    children: /* @__PURE__ */ jsx86(NavigationMenuPrimitive.Viewport, {
      "data-slot": "navigation-menu-viewport",
      className: clsx28("data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-top-center overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=closed]:animate-out data-[state=open]:animate-in md:w-[var(--radix-navigation-menu-viewport-width)]", className),
      ...props
    })
  });
}
function NavigationMenuLink({ className, ...props }) {
  return /* @__PURE__ */ jsx86(NavigationMenuPrimitive.Link, {
    "data-slot": "navigation-menu-link",
    className: clsx28("flex flex-col gap-1 rounded-sm p-2 text-sm outline-none transition-all hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", className),
    ...props
  });
}
function NavigationMenuIndicator({ className, ...props }) {
  return /* @__PURE__ */ jsx86(NavigationMenuPrimitive.Indicator, {
    "data-slot": "navigation-menu-indicator",
    className: clsx28("data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=hidden]:animate-out data-[state=visible]:animate-in", className),
    ...props,
    children: /* @__PURE__ */ jsx86("div", {
      className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md"
    })
  });
}

// src/shadcn-ui/examples/navigation-menu-demo.tsx
import { jsx as jsx87, jsxs as jsxs54 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx87(NavigationMenu, {
    viewport: false,
    children: /* @__PURE__ */ jsxs54(NavigationMenuList, {
      children: [
        /* @__PURE__ */ jsxs54(NavigationMenuItem, {
          children: [
            /* @__PURE__ */ jsx87(NavigationMenuTrigger, {
              children: "Home"
            }),
            /* @__PURE__ */ jsx87(NavigationMenuContent, {
              children: /* @__PURE__ */ jsxs54("ul", {
                className: "grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]",
                children: [
                  /* @__PURE__ */ jsx87("li", {
                    className: "row-span-3",
                    children: /* @__PURE__ */ jsx87(NavigationMenuLink, {
                      asChild: true,
                      children: /* @__PURE__ */ jsxs54("a", {
                        className: "flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-6 no-underline outline-hidden focus:shadow-md",
                        href: "/",
                        children: [
                          /* @__PURE__ */ jsx87("div", {
                            className: "mt-4 mb-2 font-medium text-lg",
                            children: "shadcn/ui"
                          }),
                          /* @__PURE__ */ jsx87("p", {
                            className: "text-muted-foreground text-sm leading-tight",
                            children: "Beautifully designed components built with Tailwind CSS."
                          })
                        ]
                      })
                    })
                  }),
                  /* @__PURE__ */ jsx87(ListItem, {
                    href: "/docs",
                    title: "Introduction",
                    children: "Re-usable components built using Radix UI and Tailwind CSS."
                  }),
                  /* @__PURE__ */ jsx87(ListItem, {
                    href: "/docs/installation",
                    title: "Installation",
                    children: "How to install dependencies and structure your app."
                  }),
                  /* @__PURE__ */ jsx87(ListItem, {
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
            /* @__PURE__ */ jsx87(NavigationMenuTrigger, {
              children: "Components"
            }),
            /* @__PURE__ */ jsx87(NavigationMenuContent, {
              children: /* @__PURE__ */ jsx87("ul", {
                className: "grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]",
                children: components.map((component) => /* @__PURE__ */ jsx87(ListItem, {
                  title: component.title,
                  href: component.href,
                  children: component.description
                }, component.title))
              })
            })
          ]
        }),
        /* @__PURE__ */ jsx87(NavigationMenuItem, {
          children: /* @__PURE__ */ jsx87(NavigationMenuLink, {
            asChild: true,
            className: navigationMenuTriggerStyle(),
            children: /* @__PURE__ */ jsx87(Link, {
              href: "/docs",
              children: "Docs"
            })
          })
        }),
        /* @__PURE__ */ jsxs54(NavigationMenuItem, {
          children: [
            /* @__PURE__ */ jsx87(NavigationMenuTrigger, {
              children: "List"
            }),
            /* @__PURE__ */ jsx87(NavigationMenuContent, {
              children: /* @__PURE__ */ jsx87("ul", {
                className: "grid w-[300px] gap-4",
                children: /* @__PURE__ */ jsxs54("li", {
                  children: [
                    /* @__PURE__ */ jsx87(NavigationMenuLink, {
                      asChild: true,
                      children: /* @__PURE__ */ jsxs54(Link, {
                        href: "#",
                        children: [
                          /* @__PURE__ */ jsx87("div", {
                            className: "font-medium",
                            children: "Components"
                          }),
                          /* @__PURE__ */ jsx87("div", {
                            className: "text-muted-foreground",
                            children: "Browse all components in the library."
                          })
                        ]
                      })
                    }),
                    /* @__PURE__ */ jsx87(NavigationMenuLink, {
                      asChild: true,
                      children: /* @__PURE__ */ jsxs54(Link, {
                        href: "#",
                        children: [
                          /* @__PURE__ */ jsx87("div", {
                            className: "font-medium",
                            children: "Documentation"
                          }),
                          /* @__PURE__ */ jsx87("div", {
                            className: "text-muted-foreground",
                            children: "Learn how to use the library."
                          })
                        ]
                      })
                    }),
                    /* @__PURE__ */ jsx87(NavigationMenuLink, {
                      asChild: true,
                      children: /* @__PURE__ */ jsxs54(Link, {
                        href: "#",
                        children: [
                          /* @__PURE__ */ jsx87("div", {
                            className: "font-medium",
                            children: "Blog"
                          }),
                          /* @__PURE__ */ jsx87("div", {
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
            /* @__PURE__ */ jsx87(NavigationMenuTrigger, {
              children: "Simple"
            }),
            /* @__PURE__ */ jsx87(NavigationMenuContent, {
              children: /* @__PURE__ */ jsx87("ul", {
                className: "grid w-[200px] gap-4",
                children: /* @__PURE__ */ jsxs54("li", {
                  children: [
                    /* @__PURE__ */ jsx87(NavigationMenuLink, {
                      asChild: true,
                      children: /* @__PURE__ */ jsx87(Link, {
                        href: "#",
                        children: "Components"
                      })
                    }),
                    /* @__PURE__ */ jsx87(NavigationMenuLink, {
                      asChild: true,
                      children: /* @__PURE__ */ jsx87(Link, {
                        href: "#",
                        children: "Documentation"
                      })
                    }),
                    /* @__PURE__ */ jsx87(NavigationMenuLink, {
                      asChild: true,
                      children: /* @__PURE__ */ jsx87(Link, {
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
            /* @__PURE__ */ jsx87(NavigationMenuTrigger, {
              children: "With Icon"
            }),
            /* @__PURE__ */ jsx87(NavigationMenuContent, {
              children: /* @__PURE__ */ jsx87("ul", {
                className: "grid w-[200px] gap-4",
                children: /* @__PURE__ */ jsxs54("li", {
                  children: [
                    /* @__PURE__ */ jsx87(NavigationMenuLink, {
                      asChild: true,
                      children: /* @__PURE__ */ jsxs54(Link, {
                        href: "#",
                        className: "flex-row items-center gap-2",
                        children: [
                          /* @__PURE__ */ jsx87(SpriteIcon, {
                            iconId: "CircleQuestionMark",
                            spriteUrl
                          }),
                          "Backlog"
                        ]
                      })
                    }),
                    /* @__PURE__ */ jsx87(NavigationMenuLink, {
                      asChild: true,
                      children: /* @__PURE__ */ jsxs54(Link, {
                        href: "#",
                        className: "flex-row items-center gap-2",
                        children: [
                          /* @__PURE__ */ jsx87(SpriteIcon, {
                            iconId: "Circle",
                            spriteUrl
                          }),
                          "To Do"
                        ]
                      })
                    }),
                    /* @__PURE__ */ jsx87(NavigationMenuLink, {
                      asChild: true,
                      children: /* @__PURE__ */ jsxs54(Link, {
                        href: "#",
                        className: "flex-row items-center gap-2",
                        children: [
                          /* @__PURE__ */ jsx87(SpriteIcon, {
                            iconId: "CircleCheck",
                            spriteUrl
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
  return /* @__PURE__ */ jsx87("li", {
    ...props,
    children: /* @__PURE__ */ jsx87(NavigationMenuLink, {
      asChild: true,
      children: /* @__PURE__ */ jsxs54(Link, {
        href,
        children: [
          /* @__PURE__ */ jsx87("div", {
            className: "font-medium text-sm leading-none",
            children: title
          }),
          /* @__PURE__ */ jsx87("p", {
            className: "line-clamp-2 text-muted-foreground text-sm leading-snug",
            children
          })
        ]
      })
    })
  });
}

// src/shadcn-ui/examples/pagination-demo.tsx
import { jsx as jsx88, jsxs as jsxs55 } from "react/jsx-runtime";
function PaginationDemo() {
  return /* @__PURE__ */ jsx88(Pagination, {
    children: /* @__PURE__ */ jsxs55(PaginationContent, {
      children: [
        /* @__PURE__ */ jsx88(PaginationItem, {
          children: /* @__PURE__ */ jsx88(PaginationPrevious, {
            href: "#"
          })
        }),
        /* @__PURE__ */ jsx88(PaginationItem, {
          children: /* @__PURE__ */ jsx88(PaginationLink, {
            href: "#",
            children: "1"
          })
        }),
        /* @__PURE__ */ jsx88(PaginationItem, {
          children: /* @__PURE__ */ jsx88(PaginationLink, {
            href: "#",
            isActive: true,
            children: "2"
          })
        }),
        /* @__PURE__ */ jsx88(PaginationItem, {
          children: /* @__PURE__ */ jsx88(PaginationLink, {
            href: "#",
            children: "3"
          })
        }),
        /* @__PURE__ */ jsx88(PaginationItem, {
          children: /* @__PURE__ */ jsx88(PaginationEllipsis, {})
        }),
        /* @__PURE__ */ jsx88(PaginationItem, {
          children: /* @__PURE__ */ jsx88(PaginationNext, {
            href: "#"
          })
        })
      ]
    })
  });
}

// src/shadcn-ui/examples/popover-demo.tsx
import React22 from "react";
import { jsx as jsx89, jsxs as jsxs56 } from "react/jsx-runtime";
function PopoverDemo() {
  const widthId = React22.useId();
  const maxWidthId = React22.useId();
  const heightId = React22.useId();
  const maxHeightId = React22.useId();
  return /* @__PURE__ */ jsxs56(Popover, {
    children: [
      /* @__PURE__ */ jsx89(PopoverTrigger, {
        asChild: true,
        children: /* @__PURE__ */ jsx89(Button, {
          variant: "outline",
          children: "Open popover"
        })
      }),
      /* @__PURE__ */ jsx89(PopoverContent, {
        className: "w-80",
        children: /* @__PURE__ */ jsxs56("div", {
          className: "grid gap-4",
          children: [
            /* @__PURE__ */ jsxs56("div", {
              className: "space-y-2",
              children: [
                /* @__PURE__ */ jsx89("h4", {
                  className: "font-medium leading-none",
                  children: "Dimensions"
                }),
                /* @__PURE__ */ jsx89("p", {
                  className: "text-muted-foreground text-sm",
                  children: "Set the dimensions for the layer."
                })
              ]
            }),
            /* @__PURE__ */ jsxs56("div", {
              className: "grid gap-2",
              children: [
                /* @__PURE__ */ jsxs56("div", {
                  className: "grid grid-cols-3 items-center gap-4",
                  children: [
                    /* @__PURE__ */ jsx89(Label, {
                      htmlFor: widthId,
                      children: "Width"
                    }),
                    /* @__PURE__ */ jsx89(Input, {
                      id: widthId,
                      defaultValue: "100%",
                      className: "col-span-2 h-8"
                    })
                  ]
                }),
                /* @__PURE__ */ jsxs56("div", {
                  className: "grid grid-cols-3 items-center gap-4",
                  children: [
                    /* @__PURE__ */ jsx89(Label, {
                      htmlFor: maxWidthId,
                      children: "Max. width"
                    }),
                    /* @__PURE__ */ jsx89(Input, {
                      id: maxWidthId,
                      defaultValue: "300px",
                      className: "col-span-2 h-8"
                    })
                  ]
                }),
                /* @__PURE__ */ jsxs56("div", {
                  className: "grid grid-cols-3 items-center gap-4",
                  children: [
                    /* @__PURE__ */ jsx89(Label, {
                      htmlFor: heightId,
                      children: "Height"
                    }),
                    /* @__PURE__ */ jsx89(Input, {
                      id: heightId,
                      defaultValue: "25px",
                      className: "col-span-2 h-8"
                    })
                  ]
                }),
                /* @__PURE__ */ jsxs56("div", {
                  className: "grid grid-cols-3 items-center gap-4",
                  children: [
                    /* @__PURE__ */ jsx89(Label, {
                      htmlFor: maxHeightId,
                      children: "Max. height"
                    }),
                    /* @__PURE__ */ jsx89(Input, {
                      id: maxHeightId,
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
import React23 from "react";

// src/shadcn-ui/components/progress.tsx
import clsx29 from "clsx";
import { Progress as ProgressPrimitive } from "radix-ui";
import { jsx as jsx90 } from "react/jsx-runtime";
function Progress({ className, value, ...props }) {
  return /* @__PURE__ */ jsx90(ProgressPrimitive.Root, {
    "data-slot": "progress",
    className: clsx29("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className),
    ...props,
    children: /* @__PURE__ */ jsx90(ProgressPrimitive.Indicator, {
      "data-slot": "progress-indicator",
      className: "h-full w-full flex-1 bg-primary transition-all",
      style: { transform: `translateX(-${100 - (value || 0)}%)` }
    })
  });
}

// src/shadcn-ui/examples/progress-demo.tsx
import { jsx as jsx91 } from "react/jsx-runtime";
function ProgressDemo() {
  const [progress, setProgress] = React23.useState(13);
  React23.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);
  return /* @__PURE__ */ jsx91(Progress, {
    value: progress,
    className: "w-[60%]"
  });
}

// src/shadcn-ui/examples/radio-group-demo.tsx
import React24 from "react";

// src/shadcn-ui/components/radio-group.tsx
import clsx30 from "clsx";
import { RadioGroup as RadioGroupPrimitive } from "radix-ui";
import { jsx as jsx92 } from "react/jsx-runtime";
function RadioGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx92(RadioGroupPrimitive.Root, {
    "data-slot": "radio-group",
    className: clsx30("grid gap-3", className),
    ...props
  });
}
function RadioGroupItem({ className, ...props }) {
  return /* @__PURE__ */ jsx92(RadioGroupPrimitive.Item, {
    "data-slot": "radio-group-item",
    className: clsx30("aspect-square size-4 shrink-0 rounded-full border border-input text-primary shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:ring-destructive/40", className),
    ...props,
    children: /* @__PURE__ */ jsx92(RadioGroupPrimitive.Indicator, {
      "data-slot": "radio-group-indicator",
      className: "relative flex items-center justify-center",
      children: /* @__PURE__ */ jsx92(SvgIcon, {
        iconId: "Circle",
        className: "-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 size-2 fill-primary"
      })
    })
  });
}

// src/shadcn-ui/examples/radio-group-demo.tsx
import { jsx as jsx93, jsxs as jsxs57 } from "react/jsx-runtime";
function RadioGroupDemo() {
  const defaultId = React24.useId();
  const comfortableId = React24.useId();
  const compactId = React24.useId();
  return /* @__PURE__ */ jsxs57(RadioGroup, {
    defaultValue: "comfortable",
    children: [
      /* @__PURE__ */ jsxs57("div", {
        className: "flex items-center gap-3",
        children: [
          /* @__PURE__ */ jsx93(RadioGroupItem, {
            value: "default",
            id: defaultId
          }),
          /* @__PURE__ */ jsx93(Label, {
            htmlFor: defaultId,
            children: "Default"
          })
        ]
      }),
      /* @__PURE__ */ jsxs57("div", {
        className: "flex items-center gap-3",
        children: [
          /* @__PURE__ */ jsx93(RadioGroupItem, {
            value: "comfortable",
            id: comfortableId
          }),
          /* @__PURE__ */ jsx93(Label, {
            htmlFor: comfortableId,
            children: "Comfortable"
          })
        ]
      }),
      /* @__PURE__ */ jsxs57("div", {
        className: "flex items-center gap-3",
        children: [
          /* @__PURE__ */ jsx93(RadioGroupItem, {
            value: "compact",
            id: compactId
          }),
          /* @__PURE__ */ jsx93(Label, {
            htmlFor: compactId,
            children: "Compact"
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/examples/radio-group-form.tsx
import { toast as toast5 } from "sonner";
import { jsx as jsx94, jsxs as jsxs58 } from "react/jsx-runtime";
function RadioGroupForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const type = formData.get("type");
    toast5("You submitted the following values", {
      description: /* @__PURE__ */ jsx94("pre", {
        className: "mt-2 w-[320px] rounded-md bg-neutral-950 p-4",
        children: /* @__PURE__ */ jsx94("code", {
          className: "text-white",
          children: JSON.stringify({ type }, null, 2)
        })
      })
    });
  }
  return /* @__PURE__ */ jsxs58("form", {
    onSubmit: handleSubmit,
    className: "w-2/3 space-y-6",
    children: [
      /* @__PURE__ */ jsxs58(RadioGroup, {
        name: "type",
        className: "flex flex-col",
        children: [
          /* @__PURE__ */ jsx94(RadioGroupItem, {
            value: "all"
          }),
          /* @__PURE__ */ jsx94(RadioGroupItem, {
            value: "mentions"
          }),
          /* @__PURE__ */ jsx94(RadioGroupItem, {
            value: "none"
          })
        ]
      }),
      /* @__PURE__ */ jsx94(Button, {
        type: "submit",
        children: "Submit"
      })
    ]
  });
}

// src/shadcn-ui/examples/scroll-area-demo.tsx
import React25 from "react";

// src/shadcn-ui/components/scroll-area.tsx
import clsx31 from "clsx";
import { ScrollArea as ScrollAreaPrimitive } from "radix-ui";
import { jsx as jsx95, jsxs as jsxs59 } from "react/jsx-runtime";
function ScrollArea({ className, children, ...props }) {
  return /* @__PURE__ */ jsxs59(ScrollAreaPrimitive.Root, {
    "data-slot": "scroll-area",
    className: clsx31("relative", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx95(ScrollAreaPrimitive.Viewport, {
        "data-slot": "scroll-area-viewport",
        className: "size-full rounded-[inherit] outline-none transition-[color,box-shadow] focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50",
        children
      }),
      /* @__PURE__ */ jsx95(ScrollBar, {}),
      /* @__PURE__ */ jsx95(ScrollAreaPrimitive.Corner, {})
    ]
  });
}
function ScrollBar({ className, orientation = "vertical", ...props }) {
  return /* @__PURE__ */ jsx95(ScrollAreaPrimitive.ScrollAreaScrollbar, {
    "data-slot": "scroll-area-scrollbar",
    orientation,
    className: clsx31("flex touch-none select-none p-px transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent", className),
    ...props,
    children: /* @__PURE__ */ jsx95(ScrollAreaPrimitive.ScrollAreaThumb, {
      "data-slot": "scroll-area-thumb",
      className: "relative flex-1 rounded-full bg-border"
    })
  });
}

// src/shadcn-ui/components/separator.tsx
import clsx32 from "clsx";
import { Separator as SeparatorPrimitive } from "radix-ui";
import { jsx as jsx96 } from "react/jsx-runtime";
function Separator({ className, orientation = "horizontal", decorative = true, ...props }) {
  return /* @__PURE__ */ jsx96(SeparatorPrimitive.Root, {
    "data-slot": "separator",
    decorative,
    orientation,
    className: clsx32("shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px", className),
    ...props
  });
}

// src/shadcn-ui/examples/scroll-area-demo.tsx
import { jsx as jsx97, jsxs as jsxs60 } from "react/jsx-runtime";
var tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);
function ScrollAreaDemo() {
  return /* @__PURE__ */ jsx97(ScrollArea, {
    className: "h-72 w-48 rounded-md border",
    children: /* @__PURE__ */ jsxs60("div", {
      className: "p-4",
      children: [
        /* @__PURE__ */ jsx97("h4", {
          className: "mb-4 font-medium text-sm leading-none",
          children: "Tags"
        }),
        tags.map((tag) => /* @__PURE__ */ jsxs60(React25.Fragment, {
          children: [
            /* @__PURE__ */ jsx97("div", {
              className: "text-sm",
              children: tag
            }),
            /* @__PURE__ */ jsx97(Separator, {
              className: "my-2"
            })
          ]
        }, tag))
      ]
    })
  });
}
// src/shadcn-ui/examples/scroll-area-horizontal-demo.tsx
import { jsx as jsx98, jsxs as jsxs61 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs61(ScrollArea, {
    className: "w-96 whitespace-nowrap rounded-md border",
    children: [
      /* @__PURE__ */ jsx98("div", {
        className: "flex w-max space-x-4 p-4",
        children: works.map((artwork) => /* @__PURE__ */ jsxs61("figure", {
          className: "shrink-0",
          children: [
            /* @__PURE__ */ jsx98("div", {
              className: "overflow-hidden rounded-md",
              children: /* @__PURE__ */ jsx98(LazyImage, {
                src: artwork.art,
                alt: `Photo by ${artwork.artist}`,
                className: "aspect-[3/4] h-fit w-fit object-cover",
                width: 300,
                height: 400
              })
            }),
            /* @__PURE__ */ jsxs61("figcaption", {
              className: "pt-2 text-muted-foreground text-xs",
              children: [
                "Photo by ",
                /* @__PURE__ */ jsx98("span", {
                  className: "font-semibold text-foreground",
                  children: artwork.artist
                })
              ]
            })
          ]
        }, artwork.artist))
      }),
      /* @__PURE__ */ jsx98(ScrollBar, {
        orientation: "horizontal"
      })
    ]
  });
}

// src/shadcn-ui/examples/select-demo.tsx
import { jsx as jsx99, jsxs as jsxs62 } from "react/jsx-runtime";
function SelectDemo() {
  return /* @__PURE__ */ jsxs62(Select, {
    children: [
      /* @__PURE__ */ jsx99(SelectTrigger, {
        className: "w-[180px]",
        children: /* @__PURE__ */ jsx99(SelectValue, {
          placeholder: "Select a fruit"
        })
      }),
      /* @__PURE__ */ jsx99(SelectContent, {
        children: /* @__PURE__ */ jsxs62(SelectGroup, {
          children: [
            /* @__PURE__ */ jsx99(SelectLabel, {
              children: "Fruits"
            }),
            /* @__PURE__ */ jsx99(SelectItem, {
              value: "apple",
              children: "Apple"
            }),
            /* @__PURE__ */ jsx99(SelectItem, {
              value: "banana",
              children: "Banana"
            }),
            /* @__PURE__ */ jsx99(SelectItem, {
              value: "blueberry",
              children: "Blueberry"
            }),
            /* @__PURE__ */ jsx99(SelectItem, {
              value: "grapes",
              children: "Grapes"
            }),
            /* @__PURE__ */ jsx99(SelectItem, {
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
import { jsx as jsx100, jsxs as jsxs63 } from "react/jsx-runtime";
function SelectForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    toast6("You submitted the following values", {
      description: /* @__PURE__ */ jsx100("pre", {
        className: "mt-2 w-[320px] rounded-md bg-neutral-950 p-4",
        children: /* @__PURE__ */ jsx100("code", {
          className: "text-white",
          children: JSON.stringify({ email }, null, 2)
        })
      })
    });
  }
  return /* @__PURE__ */ jsxs63("form", {
    onSubmit: handleSubmit,
    className: "w-2/3 space-y-6",
    children: [
      /* @__PURE__ */ jsxs63(Select, {
        name: "email",
        children: [
          /* @__PURE__ */ jsx100(SelectTrigger, {
            children: /* @__PURE__ */ jsx100(SelectValue, {
              placeholder: "Select a verified email to display"
            })
          }),
          /* @__PURE__ */ jsxs63(SelectContent, {
            children: [
              /* @__PURE__ */ jsx100(SelectItem, {
                value: "joe@example.com",
                children: "joe@example.com"
              }),
              /* @__PURE__ */ jsx100(SelectItem, {
                value: "joe@google.com",
                children: "joe@google.com"
              }),
              /* @__PURE__ */ jsx100(SelectItem, {
                value: "joe@support.com",
                children: "joe@support.com"
              })
            ]
          })
        ]
      }),
      /* @__PURE__ */ jsx100(Button, {
        type: "submit",
        children: "Submit"
      })
    ]
  });
}

// src/shadcn-ui/examples/select-scrollable.tsx
import { jsx as jsx101, jsxs as jsxs64 } from "react/jsx-runtime";
function SelectScrollable() {
  return /* @__PURE__ */ jsxs64(Select, {
    children: [
      /* @__PURE__ */ jsx101(SelectTrigger, {
        className: "w-[280px]",
        children: /* @__PURE__ */ jsx101(SelectValue, {
          placeholder: "Select a timezone"
        })
      }),
      /* @__PURE__ */ jsxs64(SelectContent, {
        children: [
          /* @__PURE__ */ jsxs64(SelectGroup, {
            children: [
              /* @__PURE__ */ jsx101(SelectLabel, {
                children: "North America"
              }),
              /* @__PURE__ */ jsx101(SelectItem, {
                value: "est",
                children: "Eastern Standard Time (EST)"
              }),
              /* @__PURE__ */ jsx101(SelectItem, {
                value: "cst",
                children: "Central Standard Time (CST)"
              }),
              /* @__PURE__ */ jsx101(SelectItem, {
                value: "mst",
                children: "Mountain Standard Time (MST)"
              }),
              /* @__PURE__ */ jsx101(SelectItem, {
                value: "pst",
                children: "Pacific Standard Time (PST)"
              }),
              /* @__PURE__ */ jsx101(SelectItem, {
                value: "akst",
                children: "Alaska Standard Time (AKST)"
              }),
              /* @__PURE__ */ jsx101(SelectItem, {
                value: "hst",
                children: "Hawaii Standard Time (HST)"
              })
            ]
          }),
          /* @__PURE__ */ jsxs64(SelectGroup, {
            children: [
              /* @__PURE__ */ jsx101(SelectLabel, {
                children: "Europe & Africa"
              }),
              /* @__PURE__ */ jsx101(SelectItem, {
                value: "gmt",
                children: "Greenwich Mean Time (GMT)"
              }),
              /* @__PURE__ */ jsx101(SelectItem, {
                value: "cet",
                children: "Central European Time (CET)"
              }),
              /* @__PURE__ */ jsx101(SelectItem, {
                value: "eet",
                children: "Eastern European Time (EET)"
              }),
              /* @__PURE__ */ jsx101(SelectItem, {
                value: "west",
                children: "Western European Summer Time (WEST)"
              }),
              /* @__PURE__ */ jsx101(SelectItem, {
                value: "cat",
                children: "Central Africa Time (CAT)"
              }),
              /* @__PURE__ */ jsx101(SelectItem, {
                value: "eat",
                children: "East Africa Time (EAT)"
              })
            ]
          }),
          /* @__PURE__ */ jsxs64(SelectGroup, {
            children: [
              /* @__PURE__ */ jsx101(SelectLabel, {
                children: "Asia"
              }),
              /* @__PURE__ */ jsx101(SelectItem, {
                value: "msk",
                children: "Moscow Time (MSK)"
              }),
              /* @__PURE__ */ jsx101(SelectItem, {
                value: "ist",
                children: "India Standard Time (IST)"
              }),
              /* @__PURE__ */ jsx101(SelectItem, {
                value: "cst_china",
                children: "China Standard Time (CST)"
              }),
              /* @__PURE__ */ jsx101(SelectItem, {
                value: "jst",
                children: "Japan Standard Time (JST)"
              }),
              /* @__PURE__ */ jsx101(SelectItem, {
                value: "kst",
                children: "Korea Standard Time (KST)"
              }),
              /* @__PURE__ */ jsx101(SelectItem, {
                value: "ist_indonesia",
                children: "Indonesia Central Standard Time (WITA)"
              })
            ]
          }),
          /* @__PURE__ */ jsxs64(SelectGroup, {
            children: [
              /* @__PURE__ */ jsx101(SelectLabel, {
                children: "Australia & Pacific"
              }),
              /* @__PURE__ */ jsx101(SelectItem, {
                value: "awst",
                children: "Australian Western Standard Time (AWST)"
              }),
              /* @__PURE__ */ jsx101(SelectItem, {
                value: "acst",
                children: "Australian Central Standard Time (ACST)"
              }),
              /* @__PURE__ */ jsx101(SelectItem, {
                value: "aest",
                children: "Australian Eastern Standard Time (AEST)"
              }),
              /* @__PURE__ */ jsx101(SelectItem, {
                value: "nzst",
                children: "New Zealand Standard Time (NZST)"
              }),
              /* @__PURE__ */ jsx101(SelectItem, {
                value: "fjt",
                children: "Fiji Time (FJT)"
              })
            ]
          }),
          /* @__PURE__ */ jsxs64(SelectGroup, {
            children: [
              /* @__PURE__ */ jsx101(SelectLabel, {
                children: "South America"
              }),
              /* @__PURE__ */ jsx101(SelectItem, {
                value: "art",
                children: "Argentina Time (ART)"
              }),
              /* @__PURE__ */ jsx101(SelectItem, {
                value: "bot",
                children: "Bolivia Time (BOT)"
              }),
              /* @__PURE__ */ jsx101(SelectItem, {
                value: "brt",
                children: "Brasilia Time (BRT)"
              }),
              /* @__PURE__ */ jsx101(SelectItem, {
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
import { jsx as jsx102, jsxs as jsxs65 } from "react/jsx-runtime";
function SeparatorDemo() {
  return /* @__PURE__ */ jsxs65("div", {
    children: [
      /* @__PURE__ */ jsxs65("div", {
        className: "space-y-1",
        children: [
          /* @__PURE__ */ jsx102("h4", {
            className: "font-medium text-sm leading-none",
            children: "Radix Primitives"
          }),
          /* @__PURE__ */ jsx102("p", {
            className: "text-muted-foreground text-sm",
            children: "An open-source UI component library."
          })
        ]
      }),
      /* @__PURE__ */ jsx102(Separator, {
        className: "my-4"
      }),
      /* @__PURE__ */ jsxs65("div", {
        className: "flex h-5 items-center space-x-4 text-sm",
        children: [
          /* @__PURE__ */ jsx102("div", {
            children: "Blog"
          }),
          /* @__PURE__ */ jsx102(Separator, {
            orientation: "vertical"
          }),
          /* @__PURE__ */ jsx102("div", {
            children: "Docs"
          }),
          /* @__PURE__ */ jsx102(Separator, {
            orientation: "vertical"
          }),
          /* @__PURE__ */ jsx102("div", {
            children: "Source"
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/examples/sheet-demo.tsx
import React26 from "react";

// src/shadcn-ui/components/sheet.tsx
import clsx33 from "clsx";
import { Dialog as SheetPrimitive } from "radix-ui";
import { jsx as jsx103, jsxs as jsxs66 } from "react/jsx-runtime";
function Sheet({ ...props }) {
  return /* @__PURE__ */ jsx103(SheetPrimitive.Root, {
    "data-slot": "sheet",
    ...props
  });
}
function SheetTrigger({ ...props }) {
  return /* @__PURE__ */ jsx103(SheetPrimitive.Trigger, {
    "data-slot": "sheet-trigger",
    ...props
  });
}
function SheetClose({ ...props }) {
  return /* @__PURE__ */ jsx103(SheetPrimitive.Close, {
    "data-slot": "sheet-close",
    ...props
  });
}
function SheetPortal({ ...props }) {
  return /* @__PURE__ */ jsx103(SheetPrimitive.Portal, {
    "data-slot": "sheet-portal",
    ...props
  });
}
function SheetOverlay({ className, ...props }) {
  return /* @__PURE__ */ jsx103(SheetPrimitive.Overlay, {
    "data-slot": "sheet-overlay",
    className: clsx33("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=open]:animate-in", className),
    ...props
  });
}
function SheetContent({
  className,
  children,
  side = "right",
  ...props
}) {
  return /* @__PURE__ */ jsxs66(SheetPortal, {
    children: [
      /* @__PURE__ */ jsx103(SheetOverlay, {}),
      /* @__PURE__ */ jsxs66(SheetPrimitive.Content, {
        "data-slot": "sheet-content",
        className: clsx33("fixed z-50 flex flex-col gap-4 bg-background shadow-lg transition ease-in-out data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:duration-300 data-[state=open]:duration-500", side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm", side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm", side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b", side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t", className),
        ...props,
        children: [
          children,
          /* @__PURE__ */ jsxs66(SheetPrimitive.Close, {
            className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
            children: [
              /* @__PURE__ */ jsx103(SvgIcon, {
                iconId: "X",
                className: "size-4"
              }),
              /* @__PURE__ */ jsx103("span", {
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
  return /* @__PURE__ */ jsx103("div", {
    "data-slot": "sheet-header",
    className: clsx33("flex flex-col gap-1.5 p-4", className),
    ...props
  });
}
function SheetFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx103("div", {
    "data-slot": "sheet-footer",
    className: clsx33("mt-auto flex flex-col gap-2 p-4", className),
    ...props
  });
}
function SheetTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx103(SheetPrimitive.Title, {
    "data-slot": "sheet-title",
    className: clsx33("font-semibold text-foreground", className),
    ...props
  });
}
function SheetDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx103(SheetPrimitive.Description, {
    "data-slot": "sheet-description",
    className: clsx33("text-muted-foreground text-sm", className),
    ...props
  });
}

// src/shadcn-ui/examples/sheet-demo.tsx
import { jsx as jsx104, jsxs as jsxs67 } from "react/jsx-runtime";
function SheetDemo() {
  const nameId = React26.useId();
  const usernameId = React26.useId();
  return /* @__PURE__ */ jsxs67(Sheet, {
    children: [
      /* @__PURE__ */ jsx104(SheetTrigger, {
        asChild: true,
        children: /* @__PURE__ */ jsx104(Button, {
          variant: "outline",
          children: "Open"
        })
      }),
      /* @__PURE__ */ jsxs67(SheetContent, {
        children: [
          /* @__PURE__ */ jsxs67(SheetHeader, {
            children: [
              /* @__PURE__ */ jsx104(SheetTitle, {
                children: "Edit profile"
              }),
              /* @__PURE__ */ jsx104(SheetDescription, {
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
                  /* @__PURE__ */ jsx104(Label, {
                    htmlFor: nameId,
                    children: "Name"
                  }),
                  /* @__PURE__ */ jsx104(Input, {
                    id: nameId,
                    defaultValue: "Pedro Duarte"
                  })
                ]
              }),
              /* @__PURE__ */ jsxs67("div", {
                className: "grid gap-3",
                children: [
                  /* @__PURE__ */ jsx104(Label, {
                    htmlFor: usernameId,
                    children: "Username"
                  }),
                  /* @__PURE__ */ jsx104(Input, {
                    id: usernameId,
                    defaultValue: "@peduarte"
                  })
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsxs67(SheetFooter, {
            children: [
              /* @__PURE__ */ jsx104(Button, {
                type: "submit",
                children: "Save changes"
              }),
              /* @__PURE__ */ jsx104(SheetClose, {
                asChild: true,
                children: /* @__PURE__ */ jsx104(Button, {
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
import React27 from "react";
import { jsx as jsx105, jsxs as jsxs68 } from "react/jsx-runtime";
var SHEET_SIDES = ["top", "right", "bottom", "left"];
function SheetSide() {
  const nameId = React27.useId();
  const usernameId = React27.useId();
  return /* @__PURE__ */ jsx105("div", {
    className: "grid grid-cols-2 gap-2",
    children: SHEET_SIDES.map((side) => /* @__PURE__ */ jsxs68(Sheet, {
      children: [
        /* @__PURE__ */ jsx105(SheetTrigger, {
          asChild: true,
          children: /* @__PURE__ */ jsx105(Button, {
            variant: "outline",
            children: side
          })
        }),
        /* @__PURE__ */ jsxs68(SheetContent, {
          side,
          children: [
            /* @__PURE__ */ jsxs68(SheetHeader, {
              children: [
                /* @__PURE__ */ jsx105(SheetTitle, {
                  children: "Edit profile"
                }),
                /* @__PURE__ */ jsx105(SheetDescription, {
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
                    /* @__PURE__ */ jsx105(Label, {
                      htmlFor: nameId,
                      className: "text-right",
                      children: "Name"
                    }),
                    /* @__PURE__ */ jsx105(Input, {
                      id: nameId,
                      value: "Pedro Duarte",
                      className: "col-span-3"
                    })
                  ]
                }),
                /* @__PURE__ */ jsxs68("div", {
                  className: "grid grid-cols-4 items-center gap-4",
                  children: [
                    /* @__PURE__ */ jsx105(Label, {
                      htmlFor: usernameId,
                      className: "text-right",
                      children: "Username"
                    }),
                    /* @__PURE__ */ jsx105(Input, {
                      id: usernameId,
                      value: "@peduarte",
                      className: "col-span-3"
                    })
                  ]
                })
              ]
            }),
            /* @__PURE__ */ jsx105(SheetFooter, {
              children: /* @__PURE__ */ jsx105(SheetClose, {
                asChild: true,
                children: /* @__PURE__ */ jsx105(Button, {
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
import clsx34 from "clsx";
import { jsx as jsx106 } from "react/jsx-runtime";
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsx106("div", {
    "data-slot": "skeleton",
    className: clsx34("animate-pulse rounded-md bg-accent", className),
    ...props
  });
}

// src/shadcn-ui/examples/skeleton-card.tsx
import { jsx as jsx107, jsxs as jsxs69 } from "react/jsx-runtime";
function SkeletonCard() {
  return /* @__PURE__ */ jsxs69("div", {
    className: "flex flex-col space-y-3",
    children: [
      /* @__PURE__ */ jsx107(Skeleton, {
        className: "h-[125px] w-[250px] rounded-xl"
      }),
      /* @__PURE__ */ jsxs69("div", {
        className: "space-y-2",
        children: [
          /* @__PURE__ */ jsx107(Skeleton, {
            className: "h-4 w-[250px]"
          }),
          /* @__PURE__ */ jsx107(Skeleton, {
            className: "h-4 w-[200px]"
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/examples/skeleton-demo.tsx
import { jsx as jsx108, jsxs as jsxs70 } from "react/jsx-runtime";
function SkeletonDemo() {
  return /* @__PURE__ */ jsxs70("div", {
    className: "flex items-center space-x-4",
    children: [
      /* @__PURE__ */ jsx108(Skeleton, {
        className: "h-12 w-12 rounded-full"
      }),
      /* @__PURE__ */ jsxs70("div", {
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

// src/shadcn-ui/examples/slider-demo.tsx
import { clsx as clsx36 } from "clsx";

// src/shadcn-ui/components/slider.tsx
import clsx35 from "clsx";
import { Slider as SliderPrimitive } from "radix-ui";
import React28 from "react";
import { jsx as jsx109, jsxs as jsxs71 } from "react/jsx-runtime";
function Slider({ className, defaultValue, value, min = 0, max = 100, ...props }) {
  const _values = React28.useMemo(() => Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max], [value, defaultValue, min, max]);
  return /* @__PURE__ */ jsxs71(SliderPrimitive.Root, {
    "data-slot": "slider",
    defaultValue,
    value,
    min,
    max,
    className: clsx35("relative flex w-full touch-none select-none items-center data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col data-[disabled]:opacity-50", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx109(SliderPrimitive.Track, {
        "data-slot": "slider-track",
        className: clsx35("relative grow overflow-hidden rounded-full bg-muted data-[orientation=horizontal]:h-1.5 data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-1.5"),
        children: /* @__PURE__ */ jsx109(SliderPrimitive.Range, {
          "data-slot": "slider-range",
          className: clsx35("absolute bg-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full")
        })
      }),
      Array.from({ length: _values.length }, (_, index) => /* @__PURE__ */ jsx109(SliderPrimitive.Thumb, {
        "data-slot": "slider-thumb",
        className: "block size-4 shrink-0 rounded-full border border-primary bg-background shadow-sm ring-ring/50 transition-[color,box-shadow] hover:ring-4 focus-visible:outline-hidden focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50"
      }, index))
    ]
  });
}

// src/shadcn-ui/examples/slider-demo.tsx
import { jsx as jsx110 } from "react/jsx-runtime";
function SliderDemo({ className, ...props }) {
  return /* @__PURE__ */ jsx110(Slider, {
    defaultValue: [50],
    max: 100,
    step: 1,
    className: clsx36("w-[60%]", className),
    ...props
  });
}

// src/shadcn-ui/examples/sonner-demo.tsx
import { toast as toast7 } from "sonner";
import { jsx as jsx111 } from "react/jsx-runtime";
function SonnerDemo() {
  return /* @__PURE__ */ jsx111(Button, {
    variant: "outline",
    onClick: () => toast7("Event has been created", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "Undo",
        onClick: () => console.info("Undo")
      }
    }),
    children: "Show Toast"
  });
}

// src/shadcn-ui/examples/switch-demo.tsx
import React29 from "react";

// src/shadcn-ui/components/switch.tsx
import clsx37 from "clsx";
import { Switch as SwitchPrimitive } from "radix-ui";
import { jsx as jsx112 } from "react/jsx-runtime";
function Switch({ className, ...props }) {
  return /* @__PURE__ */ jsx112(SwitchPrimitive.Root, {
    "data-slot": "switch",
    className: clsx37("peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input/80", className),
    ...props,
    children: /* @__PURE__ */ jsx112(SwitchPrimitive.Thumb, {
      "data-slot": "switch-thumb",
      className: clsx37("pointer-events-none block size-4 rounded-full bg-background ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0 dark:data-[state=checked]:bg-primary-foreground dark:data-[state=unchecked]:bg-foreground")
    })
  });
}

// src/shadcn-ui/examples/switch-demo.tsx
import { jsx as jsx113, jsxs as jsxs72 } from "react/jsx-runtime";
function SwitchDemo() {
  const airplaneModeId = React29.useId();
  return /* @__PURE__ */ jsxs72("div", {
    className: "flex items-center space-x-2",
    children: [
      /* @__PURE__ */ jsx113(Switch, {
        id: airplaneModeId
      }),
      /* @__PURE__ */ jsx113(Label, {
        htmlFor: airplaneModeId,
        children: "Airplane Mode"
      })
    ]
  });
}

// src/shadcn-ui/examples/switch-form.tsx
import React30 from "react";
import { toast as toast8 } from "sonner";
import { jsx as jsx114, jsxs as jsxs73 } from "react/jsx-runtime";
function SwitchForm() {
  const [marketingEmails, setMarketingEmails] = React30.useState(false);
  const [securityEmails, setSecurityEmails] = React30.useState(true);
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const marketing_emails = formData.has("marketing_emails");
    const security_emails = formData.has("security_emails");
    toast8("You submitted the following values", {
      description: /* @__PURE__ */ jsx114("pre", {
        className: "mt-2 w-[320px] rounded-md bg-neutral-950 p-4",
        children: /* @__PURE__ */ jsx114("code", {
          className: "text-white",
          children: JSON.stringify({ marketing_emails, security_emails }, null, 2)
        })
      })
    });
  }
  return /* @__PURE__ */ jsxs73("form", {
    onSubmit: handleSubmit,
    className: "w-full space-y-6",
    children: [
      /* @__PURE__ */ jsxs73("div", {
        children: [
          /* @__PURE__ */ jsx114("h3", {
            className: "mb-4 font-medium text-lg",
            children: "Email Notifications"
          }),
          /* @__PURE__ */ jsxs73("div", {
            className: "space-y-4",
            children: [
              /* @__PURE__ */ jsx114("div", {
                children: /* @__PURE__ */ jsxs73("div", {
                  className: "flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm",
                  children: [
                    /* @__PURE__ */ jsx114("div", {
                      className: "space-y-0.5",
                      children: /* @__PURE__ */ jsx114(Label, {
                        children: "Marketing emails"
                      })
                    }),
                    /* @__PURE__ */ jsx114("div", {
                      children: /* @__PURE__ */ jsx114(Switch, {
                        name: "marketing_emails",
                        checked: marketingEmails,
                        onCheckedChange: setMarketingEmails
                      })
                    })
                  ]
                })
              }),
              /* @__PURE__ */ jsx114("div", {
                children: /* @__PURE__ */ jsxs73("div", {
                  className: "flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm",
                  children: [
                    /* @__PURE__ */ jsx114("div", {
                      className: "space-y-0.5",
                      children: /* @__PURE__ */ jsx114(Label, {
                        children: "Security emails"
                      })
                    }),
                    /* @__PURE__ */ jsx114("div", {
                      children: /* @__PURE__ */ jsx114(Switch, {
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
      /* @__PURE__ */ jsx114(Button, {
        type: "submit",
        children: "Submit"
      })
    ]
  });
}

// src/shadcn-ui/components/table.tsx
import clsx38 from "clsx";
import { jsx as jsx115 } from "react/jsx-runtime";
function Table({ className, ...props }) {
  return /* @__PURE__ */ jsx115("div", {
    "data-slot": "table-container",
    className: "relative w-full overflow-x-auto",
    children: /* @__PURE__ */ jsx115("table", {
      "data-slot": "table",
      className: clsx38("w-full caption-bottom text-sm", className),
      ...props
    })
  });
}
function TableHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx115("thead", {
    "data-slot": "table-header",
    className: clsx38("[&_tr]:border-b", className),
    ...props
  });
}
function TableBody({ className, ...props }) {
  return /* @__PURE__ */ jsx115("tbody", {
    "data-slot": "table-body",
    className: clsx38("[&_tr:last-child]:border-0", className),
    ...props
  });
}
function TableFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx115("tfoot", {
    "data-slot": "table-footer",
    className: clsx38("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
    ...props
  });
}
function TableRow({ className, ...props }) {
  return /* @__PURE__ */ jsx115("tr", {
    "data-slot": "table-row",
    className: clsx38("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
    ...props
  });
}
function TableHead({ className, ...props }) {
  return /* @__PURE__ */ jsx115("th", {
    "data-slot": "table-head",
    className: clsx38("h-10 whitespace-nowrap px-2 text-left align-middle font-medium text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
    ...props
  });
}
function TableCell({ className, ...props }) {
  return /* @__PURE__ */ jsx115("td", {
    "data-slot": "table-cell",
    className: clsx38("whitespace-nowrap p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
    ...props
  });
}
function TableCaption({ className, ...props }) {
  return /* @__PURE__ */ jsx115("caption", {
    "data-slot": "table-caption",
    className: clsx38("mt-4 text-muted-foreground text-sm", className),
    ...props
  });
}

// src/shadcn-ui/examples/table-demo.tsx
import { jsx as jsx116, jsxs as jsxs74 } from "react/jsx-runtime";
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
      /* @__PURE__ */ jsx116(TableCaption, {
        children: "A list of your recent invoices."
      }),
      /* @__PURE__ */ jsx116(TableHeader, {
        children: /* @__PURE__ */ jsxs74(TableRow, {
          children: [
            /* @__PURE__ */ jsx116(TableHead, {
              className: "w-[100px]",
              children: "Invoice"
            }),
            /* @__PURE__ */ jsx116(TableHead, {
              children: "Status"
            }),
            /* @__PURE__ */ jsx116(TableHead, {
              children: "Method"
            }),
            /* @__PURE__ */ jsx116(TableHead, {
              className: "text-right",
              children: "Amount"
            })
          ]
        })
      }),
      /* @__PURE__ */ jsx116(TableBody, {
        children: invoices.map((invoice) => /* @__PURE__ */ jsxs74(TableRow, {
          children: [
            /* @__PURE__ */ jsx116(TableCell, {
              className: "font-medium",
              children: invoice.invoice
            }),
            /* @__PURE__ */ jsx116(TableCell, {
              children: invoice.paymentStatus
            }),
            /* @__PURE__ */ jsx116(TableCell, {
              children: invoice.paymentMethod
            }),
            /* @__PURE__ */ jsx116(TableCell, {
              className: "text-right",
              children: invoice.totalAmount
            })
          ]
        }, invoice.invoice))
      }),
      /* @__PURE__ */ jsx116(TableFooter, {
        children: /* @__PURE__ */ jsxs74(TableRow, {
          children: [
            /* @__PURE__ */ jsx116(TableCell, {
              colSpan: 3,
              children: "Total"
            }),
            /* @__PURE__ */ jsx116(TableCell, {
              className: "text-right",
              children: "$2,500.00"
            })
          ]
        })
      })
    ]
  });
}

// src/shadcn-ui/examples/tabs-demo.tsx
import React31 from "react";

// src/shadcn-ui/components/tabs.tsx
import clsx39 from "clsx";
import { Tabs as TabsPrimitive } from "radix-ui";
import { jsx as jsx117 } from "react/jsx-runtime";
function Tabs({ className, ...props }) {
  return /* @__PURE__ */ jsx117(TabsPrimitive.Root, {
    "data-slot": "tabs",
    className: clsx39("flex flex-col gap-2", className),
    ...props
  });
}
function TabsList({ className, ...props }) {
  return /* @__PURE__ */ jsx117(TabsPrimitive.List, {
    "data-slot": "tabs-list",
    className: clsx39("inline-flex h-9 w-fit items-center justify-center rounded-lg bg-muted p-[3px] text-muted-foreground", className),
    ...props
  });
}
function TabsTrigger({ className, ...props }) {
  return /* @__PURE__ */ jsx117(TabsPrimitive.Trigger, {
    "data-slot": "tabs-trigger",
    className: clsx39("inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-transparent px-2 py-1 font-medium text-foreground text-sm transition-[color,box-shadow] focus-visible:border-ring focus-visible:outline-1 focus-visible:outline-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:shadow-sm dark:text-muted-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props
  });
}
function TabsContent({ className, ...props }) {
  return /* @__PURE__ */ jsx117(TabsPrimitive.Content, {
    "data-slot": "tabs-content",
    className: clsx39("flex-1 outline-none", className),
    ...props
  });
}

// src/shadcn-ui/examples/tabs-demo.tsx
import { jsx as jsx118, jsxs as jsxs75 } from "react/jsx-runtime";
function TabsDemo() {
  const nameId = React31.useId();
  const usernameId = React31.useId();
  const currentPasswordId = React31.useId();
  const newPasswordId = React31.useId();
  return /* @__PURE__ */ jsx118("div", {
    className: "flex w-full max-w-sm flex-col gap-6",
    children: /* @__PURE__ */ jsxs75(Tabs, {
      defaultValue: "account",
      children: [
        /* @__PURE__ */ jsxs75(TabsList, {
          children: [
            /* @__PURE__ */ jsx118(TabsTrigger, {
              value: "account",
              children: "Account"
            }),
            /* @__PURE__ */ jsx118(TabsTrigger, {
              value: "password",
              children: "Password"
            })
          ]
        }),
        /* @__PURE__ */ jsx118(TabsContent, {
          value: "account",
          children: /* @__PURE__ */ jsxs75(Card, {
            children: [
              /* @__PURE__ */ jsxs75(CardHeader, {
                children: [
                  /* @__PURE__ */ jsx118(CardTitle, {
                    children: "Account"
                  }),
                  /* @__PURE__ */ jsx118(CardDescription, {
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
                      /* @__PURE__ */ jsx118(Label, {
                        htmlFor: nameId,
                        children: "Name"
                      }),
                      /* @__PURE__ */ jsx118(Input, {
                        id: nameId,
                        defaultValue: "Pedro Duarte"
                      })
                    ]
                  }),
                  /* @__PURE__ */ jsxs75("div", {
                    className: "grid gap-3",
                    children: [
                      /* @__PURE__ */ jsx118(Label, {
                        htmlFor: usernameId,
                        children: "Username"
                      }),
                      /* @__PURE__ */ jsx118(Input, {
                        id: usernameId,
                        defaultValue: "@peduarte"
                      })
                    ]
                  })
                ]
              }),
              /* @__PURE__ */ jsx118(CardFooter, {
                children: /* @__PURE__ */ jsx118(Button, {
                  children: "Save changes"
                })
              })
            ]
          })
        }),
        /* @__PURE__ */ jsx118(TabsContent, {
          value: "password",
          children: /* @__PURE__ */ jsxs75(Card, {
            children: [
              /* @__PURE__ */ jsxs75(CardHeader, {
                children: [
                  /* @__PURE__ */ jsx118(CardTitle, {
                    children: "Password"
                  }),
                  /* @__PURE__ */ jsx118(CardDescription, {
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
                      /* @__PURE__ */ jsx118(Label, {
                        htmlFor: currentPasswordId,
                        children: "Current password"
                      }),
                      /* @__PURE__ */ jsx118(Input, {
                        id: currentPasswordId,
                        type: "password"
                      })
                    ]
                  }),
                  /* @__PURE__ */ jsxs75("div", {
                    className: "grid gap-3",
                    children: [
                      /* @__PURE__ */ jsx118(Label, {
                        htmlFor: newPasswordId,
                        children: "New password"
                      }),
                      /* @__PURE__ */ jsx118(Input, {
                        id: newPasswordId,
                        type: "password"
                      })
                    ]
                  })
                ]
              }),
              /* @__PURE__ */ jsx118(CardFooter, {
                children: /* @__PURE__ */ jsx118(Button, {
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
import clsx40 from "clsx";
import { jsx as jsx119 } from "react/jsx-runtime";
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsx119("textarea", {
    "data-slot": "textarea",
    className: clsx40("field-sizing-content flex min-h-16 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-destructive/40", className),
    ...props
  });
}

// src/shadcn-ui/examples/textarea-demo.tsx
import { jsx as jsx120 } from "react/jsx-runtime";
function TextareaDemo() {
  return /* @__PURE__ */ jsx120(Textarea, {
    placeholder: "Type your message here."
  });
}

// src/shadcn-ui/examples/textarea-disabled.tsx
import { jsx as jsx121 } from "react/jsx-runtime";
function TextareaDisabled() {
  return /* @__PURE__ */ jsx121(Textarea, {
    placeholder: "Type your message here.",
    disabled: true
  });
}

// src/shadcn-ui/examples/textarea-form.tsx
import { toast as toast9 } from "sonner";
import { jsx as jsx122, jsxs as jsxs76 } from "react/jsx-runtime";
function TextareaForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const bio = formData.get("bio");
    toast9("You submitted the following values", {
      description: /* @__PURE__ */ jsx122("pre", {
        className: "mt-2 w-[320px] rounded-md bg-neutral-950 p-4",
        children: /* @__PURE__ */ jsx122("code", {
          className: "text-white",
          children: JSON.stringify({ bio }, null, 2)
        })
      })
    });
  }
  return /* @__PURE__ */ jsxs76("form", {
    onSubmit: handleSubmit,
    className: "w-2/3 space-y-6",
    children: [
      /* @__PURE__ */ jsx122(Textarea, {
        name: "bio",
        placeholder: "Tell us a little bit about yourself",
        className: "resize-none"
      }),
      /* @__PURE__ */ jsx122(Button, {
        type: "submit",
        children: "Submit"
      })
    ]
  });
}

// src/shadcn-ui/examples/textarea-with-button.tsx
import { jsx as jsx123, jsxs as jsxs77 } from "react/jsx-runtime";
function TextareaWithButton() {
  return /* @__PURE__ */ jsxs77("div", {
    className: "grid w-full gap-2",
    children: [
      /* @__PURE__ */ jsx123(Textarea, {
        placeholder: "Type your message here."
      }),
      /* @__PURE__ */ jsx123(Button, {
        children: "Send message"
      })
    ]
  });
}

// src/shadcn-ui/examples/textarea-with-label.tsx
import React32 from "react";
import { jsx as jsx124, jsxs as jsxs78 } from "react/jsx-runtime";
function TextareaWithLabel() {
  const messageId = React32.useId();
  return /* @__PURE__ */ jsxs78("div", {
    className: "grid w-full gap-3",
    children: [
      /* @__PURE__ */ jsx124(Label, {
        htmlFor: messageId,
        children: "Your message"
      }),
      /* @__PURE__ */ jsx124(Textarea, {
        placeholder: "Type your message here.",
        id: messageId
      })
    ]
  });
}

// src/shadcn-ui/examples/textarea-with-text.tsx
import React33 from "react";
import { jsx as jsx125, jsxs as jsxs79 } from "react/jsx-runtime";
function TextareaWithText() {
  const messageId = React33.useId();
  return /* @__PURE__ */ jsxs79("div", {
    className: "grid w-full gap-3",
    children: [
      /* @__PURE__ */ jsx125(Label, {
        htmlFor: messageId,
        children: "Your Message"
      }),
      /* @__PURE__ */ jsx125(Textarea, {
        placeholder: "Type your message here.",
        id: messageId
      }),
      /* @__PURE__ */ jsx125("p", {
        className: "text-muted-foreground text-sm",
        children: "Your message will be copied to the support team."
      })
    ]
  });
}

// src/shadcn-ui/components/toggle.tsx
import { cva as cva5 } from "class-variance-authority";
import clsx41 from "clsx";
import { Toggle as TogglePrimitive } from "radix-ui";
import { jsx as jsx126 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx126(TogglePrimitive.Root, {
    "data-slot": "toggle",
    className: clsx41(toggleVariants({ variant, size, className })),
    ...props
  });
}

// src/shadcn-ui/examples/toggle-demo.tsx
import { jsx as jsx127 } from "react/jsx-runtime";
function ToggleDemo({ spriteUrl }) {
  return /* @__PURE__ */ jsx127(Toggle, {
    "aria-label": "Toggle italic",
    children: /* @__PURE__ */ jsx127(SpriteIcon, {
      iconId: "Bold",
      className: "h-4 w-4",
      spriteUrl
    })
  });
}

// src/shadcn-ui/examples/toggle-disabled.tsx
import { jsx as jsx128 } from "react/jsx-runtime";
function ToggleDisabled({ spriteUrl }) {
  return /* @__PURE__ */ jsx128(Toggle, {
    "aria-label": "Toggle italic",
    disabled: true,
    children: /* @__PURE__ */ jsx128(SpriteIcon, {
      iconId: "Underline",
      className: "h-4 w-4",
      spriteUrl
    })
  });
}

// src/shadcn-ui/components/toggle-group.tsx
import clsx42 from "clsx";
import { ToggleGroup as ToggleGroupPrimitive } from "radix-ui";
import React34 from "react";
import { jsx as jsx129 } from "react/jsx-runtime";
var ToggleGroupContext = React34.createContext({
  size: "default",
  variant: "default",
  spacing: 0
});
function ToggleGroup({
  className,
  variant,
  size,
  spacing = 0,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx129(ToggleGroupPrimitive.Root, {
    "data-slot": "toggle-group",
    "data-variant": variant,
    "data-size": size,
    "data-spacing": spacing,
    style: { "--gap": spacing },
    className: clsx42("group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs", className),
    ...props,
    children: /* @__PURE__ */ jsx129(ToggleGroupContext.Provider, {
      value: { variant, size, spacing },
      children
    })
  });
}
function ToggleGroupItem({ className, children, variant, size, ...props }) {
  const context = React34.useContext(ToggleGroupContext);
  return /* @__PURE__ */ jsx129(ToggleGroupPrimitive.Item, {
    "data-slot": "toggle-group-item",
    "data-variant": context.variant || variant,
    "data-size": context.size || size,
    "data-spacing": context.spacing,
    className: clsx42(toggleVariants({
      variant: context.variant || variant,
      size: context.size || size
    }), "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10", "data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:first:border-l data-[spacing=0]:first:rounded-l-md", className),
    ...props,
    children
  });
}

// src/shadcn-ui/examples/toggle-group-demo.tsx
import { jsx as jsx130, jsxs as jsxs80 } from "react/jsx-runtime";
function ToggleGroupDemo({ spriteUrl }) {
  return /* @__PURE__ */ jsxs80(ToggleGroup, {
    variant: "outline",
    type: "multiple",
    children: [
      /* @__PURE__ */ jsx130(ToggleGroupItem, {
        value: "bold",
        "aria-label": "Toggle bold",
        children: /* @__PURE__ */ jsx130(SpriteIcon, {
          iconId: "Bold",
          className: "h-4 w-4",
          spriteUrl
        })
      }),
      /* @__PURE__ */ jsx130(ToggleGroupItem, {
        value: "italic",
        "aria-label": "Toggle italic",
        children: /* @__PURE__ */ jsx130(SpriteIcon, {
          iconId: "Italic",
          className: "h-4 w-4",
          spriteUrl
        })
      }),
      /* @__PURE__ */ jsx130(ToggleGroupItem, {
        value: "strikethrough",
        "aria-label": "Toggle strikethrough",
        children: /* @__PURE__ */ jsx130(SpriteIcon, {
          iconId: "Underline",
          className: "h-4 w-4",
          spriteUrl
        })
      })
    ]
  });
}

// src/shadcn-ui/examples/toggle-group-disabled.tsx
import { jsx as jsx131, jsxs as jsxs81 } from "react/jsx-runtime";
function ToggleGroupDemo2({ spriteUrl }) {
  return /* @__PURE__ */ jsxs81(ToggleGroup, {
    type: "multiple",
    disabled: true,
    children: [
      /* @__PURE__ */ jsx131(ToggleGroupItem, {
        value: "bold",
        "aria-label": "Toggle bold",
        children: /* @__PURE__ */ jsx131(SpriteIcon, {
          iconId: "Bold",
          className: "h-4 w-4",
          spriteUrl
        })
      }),
      /* @__PURE__ */ jsx131(ToggleGroupItem, {
        value: "italic",
        "aria-label": "Toggle italic",
        children: /* @__PURE__ */ jsx131(SpriteIcon, {
          iconId: "Italic",
          className: "h-4 w-4",
          spriteUrl
        })
      }),
      /* @__PURE__ */ jsx131(ToggleGroupItem, {
        value: "strikethrough",
        "aria-label": "Toggle strikethrough",
        children: /* @__PURE__ */ jsx131(SpriteIcon, {
          iconId: "Underline",
          className: "h-4 w-4",
          spriteUrl
        })
      })
    ]
  });
}

// src/shadcn-ui/examples/toggle-group-lg.tsx
import { jsx as jsx132, jsxs as jsxs82 } from "react/jsx-runtime";
function ToggleGroupDemo3({ spriteUrl }) {
  return /* @__PURE__ */ jsxs82(ToggleGroup, {
    type: "multiple",
    size: "lg",
    children: [
      /* @__PURE__ */ jsx132(ToggleGroupItem, {
        value: "bold",
        "aria-label": "Toggle bold",
        children: /* @__PURE__ */ jsx132(SpriteIcon, {
          iconId: "Bold",
          className: "h-4 w-4",
          spriteUrl
        })
      }),
      /* @__PURE__ */ jsx132(ToggleGroupItem, {
        value: "italic",
        "aria-label": "Toggle italic",
        children: /* @__PURE__ */ jsx132(SpriteIcon, {
          iconId: "Italic",
          className: "h-4 w-4",
          spriteUrl
        })
      }),
      /* @__PURE__ */ jsx132(ToggleGroupItem, {
        value: "strikethrough",
        "aria-label": "Toggle strikethrough",
        children: /* @__PURE__ */ jsx132(SpriteIcon, {
          iconId: "Underline",
          className: "h-4 w-4",
          spriteUrl
        })
      })
    ]
  });
}

// src/shadcn-ui/examples/toggle-group-outline.tsx
import { jsx as jsx133, jsxs as jsxs83 } from "react/jsx-runtime";
function ToggleGroupDemo4({ spriteUrl }) {
  return /* @__PURE__ */ jsxs83(ToggleGroup, {
    type: "multiple",
    variant: "outline",
    children: [
      /* @__PURE__ */ jsx133(ToggleGroupItem, {
        value: "bold",
        "aria-label": "Toggle bold",
        children: /* @__PURE__ */ jsx133(SpriteIcon, {
          iconId: "Bold",
          className: "h-4 w-4",
          spriteUrl
        })
      }),
      /* @__PURE__ */ jsx133(ToggleGroupItem, {
        value: "italic",
        "aria-label": "Toggle italic",
        children: /* @__PURE__ */ jsx133(SpriteIcon, {
          iconId: "Italic",
          className: "h-4 w-4",
          spriteUrl
        })
      }),
      /* @__PURE__ */ jsx133(ToggleGroupItem, {
        value: "strikethrough",
        "aria-label": "Toggle strikethrough",
        children: /* @__PURE__ */ jsx133(SpriteIcon, {
          iconId: "Underline",
          className: "h-4 w-4",
          spriteUrl
        })
      })
    ]
  });
}

// src/shadcn-ui/examples/toggle-group-single.tsx
import { jsx as jsx134, jsxs as jsxs84 } from "react/jsx-runtime";
function ToggleGroupDemo5({ spriteUrl }) {
  return /* @__PURE__ */ jsxs84(ToggleGroup, {
    type: "single",
    children: [
      /* @__PURE__ */ jsx134(ToggleGroupItem, {
        value: "bold",
        "aria-label": "Toggle bold",
        children: /* @__PURE__ */ jsx134(SpriteIcon, {
          iconId: "Bold",
          className: "h-4 w-4",
          spriteUrl
        })
      }),
      /* @__PURE__ */ jsx134(ToggleGroupItem, {
        value: "italic",
        "aria-label": "Toggle italic",
        children: /* @__PURE__ */ jsx134(SpriteIcon, {
          iconId: "Italic",
          className: "h-4 w-4",
          spriteUrl
        })
      }),
      /* @__PURE__ */ jsx134(ToggleGroupItem, {
        value: "strikethrough",
        "aria-label": "Toggle strikethrough",
        children: /* @__PURE__ */ jsx134(SpriteIcon, {
          iconId: "Underline",
          className: "h-4 w-4",
          spriteUrl
        })
      })
    ]
  });
}

// src/shadcn-ui/examples/toggle-group-sm.tsx
import { jsx as jsx135, jsxs as jsxs85 } from "react/jsx-runtime";
function ToggleGroupDemo6({ spriteUrl }) {
  return /* @__PURE__ */ jsxs85(ToggleGroup, {
    type: "single",
    size: "sm",
    children: [
      /* @__PURE__ */ jsx135(ToggleGroupItem, {
        value: "bold",
        "aria-label": "Toggle bold",
        children: /* @__PURE__ */ jsx135(SpriteIcon, {
          iconId: "Bold",
          className: "h-4 w-4",
          spriteUrl
        })
      }),
      /* @__PURE__ */ jsx135(ToggleGroupItem, {
        value: "italic",
        "aria-label": "Toggle italic",
        children: /* @__PURE__ */ jsx135(SpriteIcon, {
          iconId: "Italic",
          className: "h-4 w-4",
          spriteUrl
        })
      }),
      /* @__PURE__ */ jsx135(ToggleGroupItem, {
        value: "strikethrough",
        "aria-label": "Toggle strikethrough",
        children: /* @__PURE__ */ jsx135(SpriteIcon, {
          iconId: "Underline",
          className: "h-4 w-4",
          spriteUrl
        })
      })
    ]
  });
}

// src/shadcn-ui/examples/toggle-lg.tsx
import { jsx as jsx136 } from "react/jsx-runtime";
function ToggleLg({ spriteUrl }) {
  return /* @__PURE__ */ jsx136(Toggle, {
    size: "lg",
    "aria-label": "Toggle italic",
    children: /* @__PURE__ */ jsx136(SpriteIcon, {
      iconId: "Italic",
      spriteUrl
    })
  });
}

// src/shadcn-ui/examples/toggle-outline.tsx
import { jsx as jsx137 } from "react/jsx-runtime";
function ToggleOutline({ spriteUrl }) {
  return /* @__PURE__ */ jsx137(Toggle, {
    variant: "outline",
    "aria-label": "Toggle italic",
    children: /* @__PURE__ */ jsx137(SpriteIcon, {
      iconId: "Italic",
      spriteUrl
    })
  });
}

// src/shadcn-ui/examples/toggle-sm.tsx
import { jsx as jsx138 } from "react/jsx-runtime";
function ToggleSm({ spriteUrl }) {
  return /* @__PURE__ */ jsx138(Toggle, {
    size: "sm",
    "aria-label": "Toggle italic",
    children: /* @__PURE__ */ jsx138(SpriteIcon, {
      iconId: "Italic",
      spriteUrl
    })
  });
}

// src/shadcn-ui/examples/toggle-with-text.tsx
import { jsx as jsx139, jsxs as jsxs86 } from "react/jsx-runtime";
function ToggleWithText({ spriteUrl }) {
  return /* @__PURE__ */ jsxs86(Toggle, {
    "aria-label": "Toggle italic",
    children: [
      /* @__PURE__ */ jsx139(SpriteIcon, {
        iconId: "Italic",
        spriteUrl
      }),
      "Italic"
    ]
  });
}

// src/shadcn-ui/examples/tooltip-demo.tsx
import { jsx as jsx140, jsxs as jsxs87 } from "react/jsx-runtime";
function TooltipDemo() {
  return /* @__PURE__ */ jsxs87(Tooltip, {
    children: [
      /* @__PURE__ */ jsx140(TooltipTrigger, {
        asChild: true,
        children: /* @__PURE__ */ jsx140(Button, {
          variant: "outline",
          children: "Hover"
        })
      }),
      /* @__PURE__ */ jsx140(TooltipContent, {
        children: /* @__PURE__ */ jsx140("p", {
          children: "Add to library"
        })
      })
    ]
  });
}

// src/shadcn-ui/examples/typography-blockquote.tsx
import { jsx as jsx141 } from "react/jsx-runtime";
function TypographyBlockquote() {
  return /* @__PURE__ */ jsx141("blockquote", {
    className: "mt-6 border-l-2 pl-6 italic",
    children: `"After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the privilege."`
  });
}

// src/shadcn-ui/examples/typography-demo.tsx
import { jsx as jsx142, jsxs as jsxs88 } from "react/jsx-runtime";
function TypographyDemo() {
  return /* @__PURE__ */ jsxs88("div", {
    children: [
      /* @__PURE__ */ jsx142("h1", {
        className: "scroll-m-20 text-balance font-extrabold text-4xl tracking-tight",
        children: "Taxing Laughter: The Joke Tax Chronicles"
      }),
      /* @__PURE__ */ jsx142("p", {
        className: "text-muted-foreground text-xl leading-7 [&:not(:first-child)]:mt-6",
        children: "Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne. One day, his advisors came to him with a problem: the kingdom was running out of money."
      }),
      /* @__PURE__ */ jsx142("h2", {
        className: "mt-10 scroll-m-20 border-b pb-2 font-semibold text-3xl tracking-tight transition-colors first:mt-0",
        children: "The King's Plan"
      }),
      /* @__PURE__ */ jsxs88("p", {
        className: "leading-7 [&:not(:first-child)]:mt-6",
        children: [
          "The king thought long and hard, and finally came up with",
          " ",
          /* @__PURE__ */ jsx142("a", {
            href: "#brilliant-plan",
            className: "font-medium text-primary underline underline-offset-4",
            children: "a brilliant plan"
          }),
          ": he would tax the jokes in the kingdom."
        ]
      }),
      /* @__PURE__ */ jsx142("blockquote", {
        className: "mt-6 border-l-2 pl-6 italic",
        children: `"After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the privilege."`
      }),
      /* @__PURE__ */ jsx142("h3", {
        className: "mt-8 scroll-m-20 font-semibold text-2xl tracking-tight",
        children: "The Joke Tax"
      }),
      /* @__PURE__ */ jsx142("p", {
        className: "leading-7 [&:not(:first-child)]:mt-6",
        children: "The king's subjects were not amused. They grumbled and complained, but the king was firm:"
      }),
      /* @__PURE__ */ jsxs88("ul", {
        className: "my-6 ml-6 list-disc [&>li]:mt-2",
        children: [
          /* @__PURE__ */ jsx142("li", {
            children: "1st level of puns: 5 gold coins"
          }),
          /* @__PURE__ */ jsx142("li", {
            children: "2nd level of jokes: 10 gold coins"
          }),
          /* @__PURE__ */ jsx142("li", {
            children: "3rd level of one-liners : 20 gold coins"
          })
        ]
      }),
      /* @__PURE__ */ jsx142("p", {
        className: "leading-7 [&:not(:first-child)]:mt-6",
        children: "As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was one person who refused to let the king's foolishness get him down: a court jester named Jokester."
      }),
      /* @__PURE__ */ jsx142("h3", {
        className: "mt-8 scroll-m-20 font-semibold text-2xl tracking-tight",
        children: "Jokester's Revolt"
      }),
      /* @__PURE__ */ jsx142("p", {
        className: "leading-7 [&:not(:first-child)]:mt-6",
        children: "Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place: under the king's pillow, in his soup, even in the royal toilet. The king was furious, but he couldn't seem to stop Jokester."
      }),
      /* @__PURE__ */ jsx142("p", {
        className: "leading-7 [&:not(:first-child)]:mt-6",
        children: "And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny that they couldn't help but laugh. And once they started laughing, they couldn't stop."
      }),
      /* @__PURE__ */ jsx142("h3", {
        className: "mt-8 scroll-m-20 font-semibold text-2xl tracking-tight",
        children: "The People's Rebellion"
      }),
      /* @__PURE__ */ jsx142("p", {
        className: "leading-7 [&:not(:first-child)]:mt-6",
        children: "The people of the kingdom, feeling uplifted by the laughter, started to tell jokes and puns again, and soon the entire kingdom was in on the joke."
      }),
      /* @__PURE__ */ jsx142("div", {
        className: "my-6 w-full overflow-y-auto",
        children: /* @__PURE__ */ jsxs88("table", {
          className: "w-full",
          children: [
            /* @__PURE__ */ jsx142("thead", {
              children: /* @__PURE__ */ jsxs88("tr", {
                className: "m-0 border-t p-0 even:bg-muted",
                children: [
                  /* @__PURE__ */ jsx142("th", {
                    className: "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
                    children: "King's Treasury"
                  }),
                  /* @__PURE__ */ jsx142("th", {
                    className: "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
                    children: "People's happiness"
                  })
                ]
              })
            }),
            /* @__PURE__ */ jsxs88("tbody", {
              children: [
                /* @__PURE__ */ jsxs88("tr", {
                  className: "m-0 border-t p-0 even:bg-muted",
                  children: [
                    /* @__PURE__ */ jsx142("td", {
                      className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                      children: "Empty"
                    }),
                    /* @__PURE__ */ jsx142("td", {
                      className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                      children: "Overflowing"
                    })
                  ]
                }),
                /* @__PURE__ */ jsxs88("tr", {
                  className: "m-0 border-t p-0 even:bg-muted",
                  children: [
                    /* @__PURE__ */ jsx142("td", {
                      className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                      children: "Modest"
                    }),
                    /* @__PURE__ */ jsx142("td", {
                      className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                      children: "Satisfied"
                    })
                  ]
                }),
                /* @__PURE__ */ jsxs88("tr", {
                  className: "m-0 border-t p-0 even:bg-muted",
                  children: [
                    /* @__PURE__ */ jsx142("td", {
                      className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                      children: "Full"
                    }),
                    /* @__PURE__ */ jsx142("td", {
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
      /* @__PURE__ */ jsx142("p", {
        className: "leading-7 [&:not(:first-child)]:mt-6",
        children: "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax. Jokester was declared a hero, and the kingdom lived happily ever after."
      }),
      /* @__PURE__ */ jsx142("p", {
        className: "leading-7 [&:not(:first-child)]:mt-6",
        children: "The moral of the story is: never underestimate the power of a good laugh and always be careful of bad ideas."
      })
    ]
  });
}

// src/shadcn-ui/examples/typography-h1.tsx
import { jsx as jsx143 } from "react/jsx-runtime";
function TypographyH1() {
  return /* @__PURE__ */ jsx143("h1", {
    className: "scroll-m-20 text-balance text-center font-extrabold text-4xl tracking-tight",
    children: "Taxing Laughter: The Joke Tax Chronicles"
  });
}

// src/shadcn-ui/examples/typography-h2.tsx
import { jsx as jsx144 } from "react/jsx-runtime";
function TypographyH2() {
  return /* @__PURE__ */ jsx144("h2", {
    className: "scroll-m-20 border-b pb-2 font-semibold text-3xl tracking-tight first:mt-0",
    children: "The People of the Kingdom"
  });
}

// src/shadcn-ui/examples/typography-h3.tsx
import { jsx as jsx145 } from "react/jsx-runtime";
function TypographyH3() {
  return /* @__PURE__ */ jsx145("h3", {
    className: "scroll-m-20 font-semibold text-2xl tracking-tight",
    children: "The Joke Tax"
  });
}

// src/shadcn-ui/examples/typography-h4.tsx
import { jsx as jsx146 } from "react/jsx-runtime";
function TypographyH4() {
  return /* @__PURE__ */ jsx146("h4", {
    className: "scroll-m-20 font-semibold text-xl tracking-tight",
    children: "People stopped telling jokes"
  });
}

// src/shadcn-ui/examples/typography-inline-code.tsx
import { jsx as jsx147 } from "react/jsx-runtime";
function TypographyInlineCode() {
  return /* @__PURE__ */ jsx147("code", {
    className: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono font-semibold text-sm",
    children: "@radix-ui/react-alert-dialog"
  });
}

// src/shadcn-ui/examples/typography-large.tsx
import { jsx as jsx148 } from "react/jsx-runtime";
function TypographyLarge() {
  return /* @__PURE__ */ jsx148("div", {
    className: "font-semibold text-lg",
    children: "Are you absolutely sure?"
  });
}

// src/shadcn-ui/examples/typography-lead.tsx
import { jsx as jsx149 } from "react/jsx-runtime";
function TypographyLead() {
  return /* @__PURE__ */ jsx149("p", {
    className: "text-muted-foreground text-xl",
    children: "A modal dialog that interrupts the user with important content and expects a response."
  });
}

// src/shadcn-ui/examples/typography-list.tsx
import { jsx as jsx150, jsxs as jsxs89 } from "react/jsx-runtime";
function TypographyList() {
  return /* @__PURE__ */ jsxs89("ul", {
    className: "my-6 ml-6 list-disc [&>li]:mt-2",
    children: [
      /* @__PURE__ */ jsx150("li", {
        children: "1st level of puns: 5 gold coins"
      }),
      /* @__PURE__ */ jsx150("li", {
        children: "2nd level of jokes: 10 gold coins"
      }),
      /* @__PURE__ */ jsx150("li", {
        children: "3rd level of one-liners : 20 gold coins"
      })
    ]
  });
}

// src/shadcn-ui/examples/typography-muted.tsx
import { jsx as jsx151 } from "react/jsx-runtime";
function TypographyMuted() {
  return /* @__PURE__ */ jsx151("p", {
    className: "text-muted-foreground text-sm",
    children: "Enter your email address."
  });
}

// src/shadcn-ui/examples/typography-p.tsx
import { jsx as jsx152 } from "react/jsx-runtime";
function TypographyP() {
  return /* @__PURE__ */ jsx152("p", {
    className: "leading-7 [&:not(:first-child)]:mt-6",
    children: "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax."
  });
}

// src/shadcn-ui/examples/typography-small.tsx
import { jsx as jsx153 } from "react/jsx-runtime";
function TypographySmall() {
  return /* @__PURE__ */ jsx153("small", {
    className: "font-medium text-sm leading-none",
    children: "Email address"
  });
}

// src/shadcn-ui/examples/typography-table.tsx
import { jsx as jsx154, jsxs as jsxs90 } from "react/jsx-runtime";
function TypographyTable() {
  return /* @__PURE__ */ jsx154("div", {
    className: "my-6 w-full overflow-y-auto",
    children: /* @__PURE__ */ jsxs90("table", {
      className: "w-full",
      children: [
        /* @__PURE__ */ jsx154("thead", {
          children: /* @__PURE__ */ jsxs90("tr", {
            className: "m-0 border-t p-0 even:bg-muted",
            children: [
              /* @__PURE__ */ jsx154("th", {
                className: "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
                children: "King's Treasury"
              }),
              /* @__PURE__ */ jsx154("th", {
                className: "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
                children: "People's happiness"
              })
            ]
          })
        }),
        /* @__PURE__ */ jsxs90("tbody", {
          children: [
            /* @__PURE__ */ jsxs90("tr", {
              className: "m-0 border-t p-0 even:bg-muted",
              children: [
                /* @__PURE__ */ jsx154("td", {
                  className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                  children: "Empty"
                }),
                /* @__PURE__ */ jsx154("td", {
                  className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                  children: "Overflowing"
                })
              ]
            }),
            /* @__PURE__ */ jsxs90("tr", {
              className: "m-0 border-t p-0 even:bg-muted",
              children: [
                /* @__PURE__ */ jsx154("td", {
                  className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                  children: "Modest"
                }),
                /* @__PURE__ */ jsx154("td", {
                  className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                  children: "Satisfied"
                })
              ]
            }),
            /* @__PURE__ */ jsxs90("tr", {
              className: "m-0 border-t p-0 even:bg-muted",
              children: [
                /* @__PURE__ */ jsx154("td", {
                  className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                  children: "Full"
                }),
                /* @__PURE__ */ jsx154("td", {
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

// src/shadcn-ui/examples/examples-page.tsx
import { jsx as jsx155, jsxs as jsxs91 } from "react/jsx-runtime";
function ReturnToTop({ tableOfContentsId, spriteUrl }) {
  return /* @__PURE__ */ jsx155("a", {
    href: `#${tableOfContentsId}`,
    className: "inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 font-medium text-primary-foreground text-sm transition-colors hover:bg-primary/80 hover:text-foreground",
    "aria-label": "Return to table of contents",
    children: /* @__PURE__ */ jsx155(SpriteIcon, {
      spriteUrl,
      iconId: "ArrowUp",
      className: "h-4 w-4"
    })
  });
}
function ComponentSection({ id, title, tableOfContentsId, spriteUrl, children }) {
  return /* @__PURE__ */ jsxs91("section", {
    id,
    className: "mb-12",
    children: [
      /* @__PURE__ */ jsxs91("div", {
        className: "mb-6 flex items-center justify-between border-b pb-2",
        children: [
          /* @__PURE__ */ jsx155("h2", {
            className: "font-bold text-3xl",
            children: title
          }),
          /* @__PURE__ */ jsx155(ReturnToTop, {
            tableOfContentsId,
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
      /* @__PURE__ */ jsx155("h3", {
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
      /* @__PURE__ */ jsx155("h2", {
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
      /* @__PURE__ */ jsx155("div", {
        className: "flex flex-row flex-wrap gap-4",
        children: iconNames.map((iconName) => /* @__PURE__ */ jsx155("div", {
          className: "flex flex-col items-center rounded-lg border bg-background p-3 transition-colors hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:hover:bg-input/50",
          children: /* @__PURE__ */ jsxs91(Tooltip, {
            children: [
              /* @__PURE__ */ jsx155(TooltipTrigger, {
                asChild: true,
                children: /* @__PURE__ */ jsx155(SpriteIcon, {
                  spriteUrl,
                  iconId: iconName,
                  className: "h-6 w-6 text-accent-foreground",
                  viewBox: "0 0 24 24"
                })
              }),
              /* @__PURE__ */ jsx155(TooltipContent, {
                children: /* @__PURE__ */ jsx155("p", {
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
  return /* @__PURE__ */ jsxs91("div", {
    className: "container mx-auto max-w-7xl px-6 py-8",
    children: [
      /* @__PURE__ */ jsxs91("div", {
        className: "mb-8",
        children: [
          /* @__PURE__ */ jsxs91("div", {
            id: tableOfContentsId,
            className: "flex flex-row justify-between",
            children: [
              /* @__PURE__ */ jsx155("h1", {
                className: "mb-4 font-bold text-4xl",
                children: "shadcn/ui Examples"
              }),
              /* @__PURE__ */ jsxs91("div", {
                className: "flex items-center gap-x-4",
                children: [
                  /* @__PURE__ */ jsx155(ThemeSwitch, {
                    spriteUrl
                  }),
                  /* @__PURE__ */ jsx155(Link, {
                    href: "/",
                    children: /* @__PURE__ */ jsx155(SpriteIcon, {
                      spriteUrl,
                      iconId: "House",
                      className: "size-5 text-accent-foreground",
                      viewBox: "0 0 24 24"
                    })
                  })
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsx155("p", {
            className: "mb-6 text-lg text-muted-foreground",
            children: "A comprehensive showcase of all shadcn/ui components with live examples."
          }),
          /* @__PURE__ */ jsxs91("div", {
            className: "mb-8 rounded-lg border bg-muted/10 p-6",
            children: [
              /* @__PURE__ */ jsx155("h2", {
                className: "mb-4 font-semibold text-xl",
                children: "Table of Contents"
              }),
              /* @__PURE__ */ jsx155("div", {
                className: "columns-1 gap-8 sm:columns-2 lg:columns-4",
                children: sections.map((section) => /* @__PURE__ */ jsx155("a", {
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
          /* @__PURE__ */ jsx155(ComponentSection, {
            id: spritesId,
            title: "Sprite Examples",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsx155("div", {
              className: "max-w-2xl",
              children: /* @__PURE__ */ jsx155(SpriteExamples, {
                spriteUrl
              })
            })
          }),
          /* @__PURE__ */ jsx155("h2", {
            className: "mb-4 font-bold text-4xl",
            children: "Component Examples"
          }),
          /* @__PURE__ */ jsx155(ComponentSection, {
            id: accordionId,
            title: "Accordion",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsx155("div", {
              className: "max-w-2xl",
              children: /* @__PURE__ */ jsx155(ComponentExample, {
                name: "Accordion Demo",
                children: /* @__PURE__ */ jsx155(AccordionDemo, {})
              })
            })
          }),
          /* @__PURE__ */ jsx155(ComponentSection, {
            id: alertsId,
            title: "Alerts",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "flex max-w-2xl flex-col gap-6",
              children: [
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Alert Demo",
                  children: /* @__PURE__ */ jsx155(AlertDemo, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Alert Destructive",
                  children: /* @__PURE__ */ jsx155(AlertDestructive, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Alert Dialog Demo",
                  children: /* @__PURE__ */ jsx155(AlertDialogDemo, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx155(ComponentSection, {
            id: avatarId,
            title: "Avatar",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "flex flex-row gap-6",
              children: [
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Avatar Demo",
                  children: /* @__PURE__ */ jsx155(AvatarDemo, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Aspect Ratio Demo",
                  children: /* @__PURE__ */ jsx155(AspectRatioDemo, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx155(ComponentSection, {
            id: badgesId,
            title: "Badges",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "flex flex-row gap-6",
              children: [
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Badge Demo",
                  children: /* @__PURE__ */ jsx155(BadgeDemo, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Badge Destructive",
                  children: /* @__PURE__ */ jsx155(BadgeDestructive, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Badge Outline",
                  children: /* @__PURE__ */ jsx155(BadgeOutline, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Badge Secondary",
                  children: /* @__PURE__ */ jsx155(BadgeSecondary, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx155(ComponentSection, {
            id: breadcrumbsId,
            title: "Breadcrumbs",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "flex max-w-2xl flex-col gap-6",
              children: [
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Breadcrumb Demo",
                  children: /* @__PURE__ */ jsx155(BreadcrumbDemo, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Breadcrumb Dropdown",
                  children: /* @__PURE__ */ jsx155(BreadcrumbWithDropdown, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Breadcrumb Ellipsis",
                  children: /* @__PURE__ */ jsx155(BreadcrumbCollapsed, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Breadcrumb Link",
                  children: /* @__PURE__ */ jsx155(BreadcrumbWithCustomSeparator, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Breadcrumb Separator",
                  children: /* @__PURE__ */ jsx155(BreadcrumbWithCustomSeparator2, {
                    spriteUrl
                  })
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx155(ComponentSection, {
            id: buttonsId,
            title: "Buttons",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
              children: [
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Button Demo",
                  children: /* @__PURE__ */ jsx155(ButtonDemo, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Button As Child",
                  children: /* @__PURE__ */ jsx155(ButtonAsChild, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Button Destructive",
                  children: /* @__PURE__ */ jsx155(ButtonDestructive, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Button Ghost",
                  children: /* @__PURE__ */ jsx155(ButtonGhost, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Button Icon",
                  children: /* @__PURE__ */ jsx155(ButtonIcon, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Button Link",
                  children: /* @__PURE__ */ jsx155(ButtonLink, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Button Loading",
                  children: /* @__PURE__ */ jsx155(ButtonLoading, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Button Outline",
                  children: /* @__PURE__ */ jsx155(ButtonOutline, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Button Secondary",
                  children: /* @__PURE__ */ jsx155(ButtonSecondary, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Button With Icon",
                  children: /* @__PURE__ */ jsx155(ButtonWithIcon, {
                    spriteUrl
                  })
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx155(ComponentSection, {
            id: cardsId,
            title: "Cards",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "flex flex-col gap-6 lg:flex-row",
              children: [
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Card Demo",
                  children: /* @__PURE__ */ jsx155(CardDemo, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Card With Form",
                  children: /* @__PURE__ */ jsx155(CardWithForm, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx155(ComponentSection, {
            id: checkboxesId,
            title: "Checkboxes",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "grid grid-cols-1 gap-6 md:grid-cols-2",
              children: [
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Checkbox Demo",
                  children: /* @__PURE__ */ jsx155(CheckboxDemo, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Checkbox Disabled",
                  children: /* @__PURE__ */ jsx155(CheckboxDisabled, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Checkbox Form Multiple",
                  children: /* @__PURE__ */ jsx155(CheckboxReactHookFormMultiple, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Checkbox Form Single",
                  children: /* @__PURE__ */ jsx155(CheckboxReactHookFormSingle, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Checkbox With Text",
                  children: /* @__PURE__ */ jsx155(CheckboxWithText, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx155(ComponentSection, {
            id: collapsibleId,
            title: "Collapsible",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsx155("div", {
              className: "max-w-md",
              children: /* @__PURE__ */ jsx155(ComponentExample, {
                name: "Collapsible Demo",
                children: /* @__PURE__ */ jsx155(CollapsibleDemo, {
                  spriteUrl
                })
              })
            })
          }),
          /* @__PURE__ */ jsx155(ComponentSection, {
            id: comboboxId,
            title: "Combobox",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "grid grid-cols-1 gap-6 md:grid-cols-2",
              children: [
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Combobox Demo",
                  children: /* @__PURE__ */ jsx155(ComboboxDemo, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Combobox Dropdown Menu",
                  children: /* @__PURE__ */ jsx155(ComboboxDropdownMenu, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Combobox Form",
                  children: /* @__PURE__ */ jsx155(ComboboxForm, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Combobox Popover",
                  children: /* @__PURE__ */ jsx155(ComboboxPopover, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx155(ComponentSection, {
            id: menusId,
            title: "Menus",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "flex flex-row gap-6",
              children: [
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Context Menu Demo",
                  children: /* @__PURE__ */ jsx155(ContextMenuDemo, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Dropdown Menu Demo",
                  children: /* @__PURE__ */ jsx155(DropdownMenuDemo, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Dropdown Menu Checkboxes",
                  children: /* @__PURE__ */ jsx155(DropdownMenuCheckboxes, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Dropdown Menu Radio Group",
                  children: /* @__PURE__ */ jsx155(DropdownMenuRadioGroupDemo, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Menubar Demo",
                  children: /* @__PURE__ */ jsx155(MenubarDemo, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx155(ComponentSection, {
            id: dialogsId,
            title: "Dialogs",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "flex flex-row gap-6",
              children: [
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Dialog Demo",
                  children: /* @__PURE__ */ jsx155(DialogDemo, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Dialog Close Button",
                  children: /* @__PURE__ */ jsx155(DialogCloseButton, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx155(ComponentSection, {
            id: inputsId,
            title: "Inputs",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "grid grid-cols-1 gap-6 md:grid-cols-2",
              children: [
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Input Demo",
                  children: /* @__PURE__ */ jsx155(InputDemo, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Input Disabled",
                  children: /* @__PURE__ */ jsx155(InputDisabled, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Input File",
                  children: /* @__PURE__ */ jsx155(InputFile, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Input Form",
                  children: /* @__PURE__ */ jsx155(InputForm, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Input With Button",
                  children: /* @__PURE__ */ jsx155(InputWithButton, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Input With Label",
                  children: /* @__PURE__ */ jsx155(InputWithLabel, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Input With Text",
                  children: /* @__PURE__ */ jsx155(InputWithText, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx155(ComponentSection, {
            id: labelsId,
            title: "Labels",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsx155("div", {
              className: "max-w-md",
              children: /* @__PURE__ */ jsx155(ComponentExample, {
                name: "Label Demo",
                children: /* @__PURE__ */ jsx155(LabelDemo, {})
              })
            })
          }),
          /* @__PURE__ */ jsx155(ComponentSection, {
            id: navigationId,
            title: "Navigation",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "flex flex-col gap-6",
              children: [
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Navigation Menu Demo",
                  children: /* @__PURE__ */ jsx155(NavigationMenuDemo, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Pagination Demo",
                  children: /* @__PURE__ */ jsx155(PaginationDemo, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx155(ComponentSection, {
            id: overlaysId,
            title: "Overlays",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "flex flex-row gap-6",
              children: [
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Hover Card Demo",
                  children: /* @__PURE__ */ jsx155(HoverCardDemo, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Popover Demo",
                  children: /* @__PURE__ */ jsx155(PopoverDemo, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Mode Toggle",
                  children: /* @__PURE__ */ jsx155(ModeToggle, {
                    spriteUrl
                  })
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx155(ComponentSection, {
            id: radioId,
            title: "Radio Groups",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "flex flex-row gap-6",
              children: [
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Radio Group Demo",
                  children: /* @__PURE__ */ jsx155(RadioGroupDemo, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Radio Group Form",
                  children: /* @__PURE__ */ jsx155(RadioGroupForm, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx155(ComponentSection, {
            id: scrollId,
            title: "Scroll Areas",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "flex flex-col gap-6 lg:flex-row",
              children: [
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Scroll Area Demo",
                  children: /* @__PURE__ */ jsx155(ScrollAreaDemo, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Scroll Area Horizontal Demo",
                  children: /* @__PURE__ */ jsx155(ScrollAreaHorizontalDemo, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx155(ComponentSection, {
            id: selectsId,
            title: "Selects",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "grid grid-cols-1 gap-6 md:grid-cols-2",
              children: [
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Select Demo",
                  children: /* @__PURE__ */ jsx155(SelectDemo, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Select Form",
                  children: /* @__PURE__ */ jsx155(SelectForm, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Select Scrollable",
                  children: /* @__PURE__ */ jsx155(SelectScrollable, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx155(ComponentSection, {
            id: separatorsId,
            title: "Separators",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsx155("div", {
              className: "max-w-md",
              children: /* @__PURE__ */ jsx155(ComponentExample, {
                name: "Separator Demo",
                children: /* @__PURE__ */ jsx155(SeparatorDemo, {})
              })
            })
          }),
          /* @__PURE__ */ jsx155(ComponentSection, {
            id: sheetsId,
            title: "Sheets",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "flex flex-row gap-6",
              children: [
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Sheet Demo",
                  children: /* @__PURE__ */ jsx155(SheetDemo, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Sheet Side",
                  children: /* @__PURE__ */ jsx155(SheetSide, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx155(ComponentSection, {
            id: skeletonId,
            title: "Skeleton",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "flex flex-col gap-6 lg:flex-row",
              children: [
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Skeleton Demo",
                  children: /* @__PURE__ */ jsx155(SkeletonDemo, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Skeleton Card",
                  children: /* @__PURE__ */ jsx155(SkeletonCard, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx155(ComponentSection, {
            id: slidersId,
            title: "Sliders",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "max-w-md",
              children: [
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Slider Demo",
                  children: /* @__PURE__ */ jsx155(SliderDemo, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Progress Demo",
                  children: /* @__PURE__ */ jsx155(ProgressDemo, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx155(ComponentSection, {
            id: switchesId,
            title: "Switches",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "flex flex-row gap-6",
              children: [
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Switch Demo",
                  children: /* @__PURE__ */ jsx155(SwitchDemo, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Switch Form",
                  children: /* @__PURE__ */ jsx155(SwitchForm, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx155(ComponentSection, {
            id: tablesId,
            title: "Tables",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsx155("div", {
              className: "max-w-4xl",
              children: /* @__PURE__ */ jsx155(ComponentExample, {
                name: "Table Demo",
                children: /* @__PURE__ */ jsx155(TableDemo, {})
              })
            })
          }),
          /* @__PURE__ */ jsx155(ComponentSection, {
            id: tabsId,
            title: "Tabs",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsx155("div", {
              className: "max-w-2xl",
              children: /* @__PURE__ */ jsx155(ComponentExample, {
                name: "Tabs Demo",
                children: /* @__PURE__ */ jsx155(TabsDemo, {})
              })
            })
          }),
          /* @__PURE__ */ jsx155(ComponentSection, {
            id: textareasId,
            title: "Textareas",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "grid grid-cols-1 gap-6 md:grid-cols-2",
              children: [
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Textarea Demo",
                  children: /* @__PURE__ */ jsx155(TextareaDemo, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Textarea Disabled",
                  children: /* @__PURE__ */ jsx155(TextareaDisabled, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Textarea Form",
                  children: /* @__PURE__ */ jsx155(TextareaForm, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Textarea With Button",
                  children: /* @__PURE__ */ jsx155(TextareaWithButton, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Textarea With Label",
                  children: /* @__PURE__ */ jsx155(TextareaWithLabel, {})
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Textarea With Text",
                  children: /* @__PURE__ */ jsx155(TextareaWithText, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx155(ComponentSection, {
            id: togglesId,
            title: "Toggles",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
              children: [
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Toggle Demo",
                  children: /* @__PURE__ */ jsx155(ToggleDemo, {
                    spriteUrl: exampleUrl
                  })
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Toggle Disabled",
                  children: /* @__PURE__ */ jsx155(ToggleDisabled, {
                    spriteUrl: exampleUrl
                  })
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Toggle Group Demo",
                  children: /* @__PURE__ */ jsx155(ToggleGroupDemo, {
                    spriteUrl: exampleUrl
                  })
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Toggle Group Disabled",
                  children: /* @__PURE__ */ jsx155(ToggleGroupDemo2, {
                    spriteUrl: exampleUrl
                  })
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Toggle Group Large",
                  children: /* @__PURE__ */ jsx155(ToggleGroupDemo3, {
                    spriteUrl: exampleUrl
                  })
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Toggle Group Outline",
                  children: /* @__PURE__ */ jsx155(ToggleGroupDemo4, {
                    spriteUrl: exampleUrl
                  })
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Toggle Group Single",
                  children: /* @__PURE__ */ jsx155(ToggleGroupDemo5, {
                    spriteUrl: exampleUrl
                  })
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Toggle Group Small",
                  children: /* @__PURE__ */ jsx155(ToggleGroupDemo6, {
                    spriteUrl: exampleUrl
                  })
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Toggle Large",
                  children: /* @__PURE__ */ jsx155(ToggleLg, {
                    spriteUrl: exampleUrl
                  })
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Toggle Outline",
                  children: /* @__PURE__ */ jsx155(ToggleOutline, {
                    spriteUrl: exampleUrl
                  })
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Toggle Small",
                  children: /* @__PURE__ */ jsx155(ToggleSm, {
                    spriteUrl: exampleUrl
                  })
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Toggle With Text",
                  children: /* @__PURE__ */ jsx155(ToggleWithText, {
                    spriteUrl: exampleUrl
                  })
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx155(ComponentSection, {
            id: tooltipsId,
            title: "Tooltips",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsx155("div", {
              className: "max-w-md",
              children: /* @__PURE__ */ jsx155(ComponentExample, {
                name: "Tooltip Demo",
                children: /* @__PURE__ */ jsx155(TooltipDemo, {})
              })
            })
          }),
          /* @__PURE__ */ jsx155(ComponentSection, {
            id: typographyId,
            title: "Typography",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs91("div", {
              className: "flex max-w-4xl flex-col gap-6",
              children: [
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Typography Demo",
                  children: /* @__PURE__ */ jsx155(TypographyDemo, {})
                }),
                /* @__PURE__ */ jsxs91("div", {
                  className: "grid grid-cols-1 gap-6 md:grid-cols-2",
                  children: [
                    /* @__PURE__ */ jsx155(ComponentExample, {
                      name: "Typography H1",
                      children: /* @__PURE__ */ jsx155(TypographyH1, {})
                    }),
                    /* @__PURE__ */ jsx155(ComponentExample, {
                      name: "Typography H2",
                      children: /* @__PURE__ */ jsx155(TypographyH2, {})
                    }),
                    /* @__PURE__ */ jsx155(ComponentExample, {
                      name: "Typography H3",
                      children: /* @__PURE__ */ jsx155(TypographyH3, {})
                    }),
                    /* @__PURE__ */ jsx155(ComponentExample, {
                      name: "Typography H4",
                      children: /* @__PURE__ */ jsx155(TypographyH4, {})
                    }),
                    /* @__PURE__ */ jsx155(ComponentExample, {
                      name: "Typography Paragraph",
                      children: /* @__PURE__ */ jsx155(TypographyP, {})
                    }),
                    /* @__PURE__ */ jsx155(ComponentExample, {
                      name: "Typography Blockquote",
                      children: /* @__PURE__ */ jsx155(TypographyBlockquote, {})
                    }),
                    /* @__PURE__ */ jsx155(ComponentExample, {
                      name: "Typography List",
                      children: /* @__PURE__ */ jsx155(TypographyList, {})
                    }),
                    /* @__PURE__ */ jsx155(ComponentExample, {
                      name: "Typography Inline Code",
                      children: /* @__PURE__ */ jsx155(TypographyInlineCode, {})
                    }),
                    /* @__PURE__ */ jsx155(ComponentExample, {
                      name: "Typography Lead",
                      children: /* @__PURE__ */ jsx155(TypographyLead, {})
                    }),
                    /* @__PURE__ */ jsx155(ComponentExample, {
                      name: "Typography Large",
                      children: /* @__PURE__ */ jsx155(TypographyLarge, {})
                    }),
                    /* @__PURE__ */ jsx155(ComponentExample, {
                      name: "Typography Small",
                      children: /* @__PURE__ */ jsx155(TypographySmall, {})
                    }),
                    /* @__PURE__ */ jsx155(ComponentExample, {
                      name: "Typography Muted",
                      children: /* @__PURE__ */ jsx155(TypographyMuted, {})
                    })
                  ]
                }),
                /* @__PURE__ */ jsx155(ComponentExample, {
                  name: "Typography Table",
                  children: /* @__PURE__ */ jsx155(TypographyTable, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx155(ComponentSection, {
            id: notificationsId,
            title: "Notifications",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsx155("div", {
              className: "max-w-md",
              children: /* @__PURE__ */ jsx155(ComponentExample, {
                name: "Sonner Demo",
                children: /* @__PURE__ */ jsx155(SonnerDemo, {})
              })
            })
          })
        ]
      })
    ]
  });
}
// src/shadcn-ui/components/button-group.tsx
import { cva as cva6 } from "class-variance-authority";
import clsx43 from "clsx";
import { Slot as Slot4 } from "radix-ui";
import { jsx as jsx156 } from "react/jsx-runtime";
var buttonGroupVariants = cva6("flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:gap-2", {
  variants: {
    orientation: {
      horizontal: "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
      vertical: "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none"
    }
  },
  defaultVariants: {
    orientation: "horizontal"
  }
});
function ButtonGroup({ className, orientation, ...props }) {
  return /* @__PURE__ */ jsx156("div", {
    role: "group",
    "data-slot": "button-group",
    "data-orientation": orientation,
    className: clsx43(buttonGroupVariants({ orientation }), className),
    ...props
  });
}
function ButtonGroupText({
  className,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot4.Slot : "div";
  return /* @__PURE__ */ jsx156(Comp, {
    className: clsx43("flex items-center gap-2 rounded-md border bg-muted px-4 font-medium text-sm shadow-xs [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none", className),
    ...props
  });
}
function ButtonGroupSeparator({ className, orientation = "vertical", ...props }) {
  return /* @__PURE__ */ jsx156(Separator, {
    "data-slot": "button-group-separator",
    orientation,
    className: clsx43("!m-0 relative self-stretch bg-input data-[orientation=vertical]:h-auto", className),
    ...props
  });
}
// src/shadcn-ui/components/empty.tsx
import { cva as cva7 } from "class-variance-authority";
import clsx44 from "clsx";
import { jsx as jsx157 } from "react/jsx-runtime";
function Empty({ className, ...props }) {
  return /* @__PURE__ */ jsx157("div", {
    "data-slot": "empty",
    className: clsx44("flex min-w-0 flex-1 flex-col items-center justify-center gap-6 text-balance rounded-lg border-dashed p-6 text-center md:p-12", className),
    ...props
  });
}
function EmptyHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx157("div", {
    "data-slot": "empty-header",
    className: clsx44("flex max-w-sm flex-col items-center gap-2 text-center", className),
    ...props
  });
}
var emptyMediaVariants = cva7("flex shrink-0 items-center justify-center mb-2 [&_svg]:pointer-events-none [&_svg]:shrink-0", {
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
  return /* @__PURE__ */ jsx157("div", {
    "data-slot": "empty-icon",
    "data-variant": variant,
    className: clsx44(emptyMediaVariants({ variant, className })),
    ...props
  });
}
function EmptyTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx157("div", {
    "data-slot": "empty-title",
    className: clsx44("font-medium text-lg tracking-tight", className),
    ...props
  });
}
function EmptyDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx157("div", {
    "data-slot": "empty-description",
    className: clsx44("text-muted-foreground text-sm/relaxed [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4", className),
    ...props
  });
}
function EmptyContent({ className, ...props }) {
  return /* @__PURE__ */ jsx157("div", {
    "data-slot": "empty-content",
    className: clsx44("flex w-full min-w-0 max-w-sm flex-col items-center gap-4 text-balance text-sm", className),
    ...props
  });
}

// src/shadcn-ui/components/field.tsx
import { cva as cva8 } from "class-variance-authority";
import clsx45 from "clsx";
import { useMemo } from "react";
import { jsx as jsx158, jsxs as jsxs92 } from "react/jsx-runtime";
function FieldSet({ className, ...props }) {
  return /* @__PURE__ */ jsx158("fieldset", {
    "data-slot": "field-set",
    className: clsx45("flex flex-col gap-6", "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3", className),
    ...props
  });
}
function FieldLegend({ className, variant = "legend", ...props }) {
  return /* @__PURE__ */ jsx158("legend", {
    "data-slot": "field-legend",
    "data-variant": variant,
    className: clsx45("mb-3 font-medium", "data-[variant=legend]:text-base", "data-[variant=label]:text-sm", className),
    ...props
  });
}
function FieldGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx158("div", {
    "data-slot": "field-group",
    className: clsx45("group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4", className),
    ...props
  });
}
var fieldVariants = cva8("group/field flex w-full gap-3 data-[invalid=true]:text-destructive", {
  variants: {
    orientation: {
      vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],
      horizontal: ["flex-row items-center", "[&>[data-slot=field-label]]:flex-auto", "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"],
      responsive: [
        "flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto",
        "@md/field-group:[&>[data-slot=field-label]]:flex-auto",
        "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
      ]
    }
  },
  defaultVariants: {
    orientation: "vertical"
  }
});
function Field({ className, orientation = "vertical", ...props }) {
  return /* @__PURE__ */ jsx158("div", {
    role: "group",
    "data-slot": "field",
    "data-orientation": orientation,
    className: clsx45(fieldVariants({ orientation }), className),
    ...props
  });
}
function FieldContent({ className, ...props }) {
  return /* @__PURE__ */ jsx158("div", {
    "data-slot": "field-content",
    className: clsx45("group/field-content flex flex-1 flex-col gap-1.5 leading-snug", className),
    ...props
  });
}
function FieldLabel({ className, ...props }) {
  return /* @__PURE__ */ jsx158(Label, {
    "data-slot": "field-label",
    className: clsx45("group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50", "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4", "has-data-[state=checked]:border-primary has-data-[state=checked]:bg-primary/5 dark:has-data-[state=checked]:bg-primary/10", className),
    ...props
  });
}
function FieldTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx158("div", {
    "data-slot": "field-label",
    className: clsx45("flex w-fit items-center gap-2 font-medium text-sm leading-snug group-data-[disabled=true]/field:opacity-50", className),
    ...props
  });
}
function FieldDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx158("p", {
    "data-slot": "field-description",
    className: clsx45("font-normal text-muted-foreground text-sm leading-normal group-has-[[data-orientation=horizontal]]/field:text-balance", "nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5 last:mt-0", "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4", className),
    ...props
  });
}
function FieldSeparator({
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs92("div", {
    "data-slot": "field-separator",
    "data-content": !!children,
    className: clsx45("-my-2 group-data-[variant=outline]/field-group:-mb-2 relative h-5 text-sm", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx158(Separator, {
        className: "absolute inset-0 top-1/2"
      }),
      children && /* @__PURE__ */ jsx158("span", {
        className: "relative mx-auto block w-fit bg-background px-2 text-muted-foreground",
        "data-slot": "field-separator-content",
        children
      })
    ]
  });
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
    return /* @__PURE__ */ jsx158("ul", {
      className: "ml-4 flex list-disc flex-col gap-1",
      children: uniqueErrors.map((error, index) => error?.message && /* @__PURE__ */ jsx158("li", {
        children: error.message
      }, index))
    });
  }, [children, errors]);
  if (!content) {
    return null;
  }
  return /* @__PURE__ */ jsx158("div", {
    role: "alert",
    "data-slot": "field-error",
    className: clsx45("font-normal text-destructive text-sm", className),
    ...props,
    children: content
  });
}

// src/shadcn-ui/components/form.tsx
import clsx46 from "clsx";
import { Slot as Slot5 } from "radix-ui";
import React36 from "react";
import { Controller, FormProvider, useFormContext, useFormState } from "react-hook-form";
import { jsx as jsx159 } from "react/jsx-runtime";
var Form = FormProvider;
var FormFieldContext = React36.createContext({});
var FormField = ({ ...props }) => {
  return /* @__PURE__ */ jsx159(FormFieldContext.Provider, {
    value: { name: props.name },
    children: /* @__PURE__ */ jsx159(Controller, {
      ...props
    })
  });
};
var useFormField = () => {
  const fieldContext = React36.useContext(FormFieldContext);
  const itemContext = React36.useContext(FormItemContext);
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
var FormItemContext = React36.createContext({});
function FormItem({ className, ...props }) {
  const id = React36.useId();
  return /* @__PURE__ */ jsx159(FormItemContext.Provider, {
    value: { id },
    children: /* @__PURE__ */ jsx159("div", {
      "data-slot": "form-item",
      className: clsx46("grid gap-2", className),
      ...props
    })
  });
}
function FormLabel({ className, ...props }) {
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ jsx159(Label, {
    "data-slot": "form-label",
    "data-error": !!error,
    className: clsx46("data-[error=true]:text-destructive", className),
    htmlFor: formItemId,
    ...props
  });
}
function FormControl({ ...props }) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ jsx159(Slot5.Slot, {
    "data-slot": "form-control",
    id: formItemId,
    "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
    "aria-invalid": !!error,
    ...props
  });
}
function FormDescription({ className, ...props }) {
  const { formDescriptionId } = useFormField();
  return /* @__PURE__ */ jsx159("p", {
    "data-slot": "form-description",
    id: formDescriptionId,
    className: clsx46("text-muted-foreground text-sm", className),
    ...props
  });
}
function FormMessage({ className, ...props }) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : props.children;
  if (!body) {
    return null;
  }
  return /* @__PURE__ */ jsx159("p", {
    "data-slot": "form-message",
    id: formMessageId,
    className: clsx46("text-destructive text-sm", className),
    ...props,
    children: body
  });
}
// src/shadcn-ui/components/input-group.tsx
import { cva as cva9 } from "class-variance-authority";
import clsx47 from "clsx";
import { jsx as jsx160 } from "react/jsx-runtime";
function InputGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx160("div", {
    "data-slot": "input-group",
    role: "group",
    className: clsx47("group/input-group relative flex w-full items-center rounded-md border border-input shadow-xs outline-none transition-[color,box-shadow] dark:bg-input/30", "h-9 min-w-0 has-[>textarea]:h-auto", "has-[>[data-align=inline-start]]:[&>input]:pl-2", "has-[>[data-align=inline-end]]:[&>input]:pr-2", "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3", "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3", "has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-[3px] has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50", "has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-destructive/20 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40", className),
    ...props
  });
}
var inputGroupAddonVariants = cva9("text-muted-foreground flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium select-none [&>svg:not([class*='size-'])]:size-4 [&>kbd]:rounded-[calc(var(--radius)-5px)] group-data-[disabled=true]/input-group:opacity-50", {
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
});
function InputGroupAddon({ className, align = "inline-start", ...props }) {
  return /* @__PURE__ */ jsx160("div", {
    role: "group",
    "data-slot": "input-group-addon",
    "data-align": align,
    className: clsx47(inputGroupAddonVariants({ align }), className),
    onClick: (e) => {
      if (e.target.closest("button")) {
        return;
      }
      e.currentTarget.parentElement?.querySelector("input")?.focus();
    },
    ...props
  });
}
var inputGroupButtonVariants = cva9("text-sm shadow-none flex gap-2 items-center", {
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
  return /* @__PURE__ */ jsx160(Button, {
    type,
    "data-size": size,
    variant,
    className: clsx47(inputGroupButtonVariants({ size }), className),
    ...props
  });
}
function InputGroupText({ className, ...props }) {
  return /* @__PURE__ */ jsx160("span", {
    className: clsx47("flex items-center gap-2 text-muted-foreground text-sm [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none", className),
    ...props
  });
}
function InputGroupInput({ className, ...props }) {
  return /* @__PURE__ */ jsx160(Input, {
    "data-slot": "input-group-control",
    className: clsx47("flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent", className),
    ...props
  });
}
function InputGroupTextarea({ className, ...props }) {
  return /* @__PURE__ */ jsx160(Textarea, {
    "data-slot": "input-group-control",
    className: clsx47("flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0 dark:bg-transparent", className),
    ...props
  });
}
// src/shadcn-ui/components/item.tsx
import { cva as cva10 } from "class-variance-authority";
import clsx48 from "clsx";
import { Slot as Slot6 } from "radix-ui";
import { jsx as jsx161 } from "react/jsx-runtime";
function ItemGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx161("div", {
    role: "list",
    "data-slot": "item-group",
    className: clsx48("group/item-group flex flex-col", className),
    ...props
  });
}
function ItemSeparator({ className, ...props }) {
  return /* @__PURE__ */ jsx161(Separator, {
    "data-slot": "item-separator",
    orientation: "horizontal",
    className: clsx48("my-0", className),
    ...props
  });
}
var itemVariants = cva10("group/item flex items-center border border-transparent text-sm rounded-md transition-colors [a]:hover:bg-accent/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", {
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
});
function Item({ className, variant = "default", size = "default", asChild = false, ...props }) {
  const Comp = asChild ? Slot6.Slot : "div";
  return /* @__PURE__ */ jsx161(Comp, {
    "data-slot": "item",
    "data-variant": variant,
    "data-size": size,
    className: clsx48(itemVariants({ variant, size, className })),
    ...props
  });
}
var itemMediaVariants = cva10("flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5", {
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
});
function ItemMedia({ className, variant = "default", ...props }) {
  return /* @__PURE__ */ jsx161("div", {
    "data-slot": "item-media",
    "data-variant": variant,
    className: clsx48(itemMediaVariants({ variant, className })),
    ...props
  });
}
function ItemContent({ className, ...props }) {
  return /* @__PURE__ */ jsx161("div", {
    "data-slot": "item-content",
    className: clsx48("flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none", className),
    ...props
  });
}
function ItemTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx161("div", {
    "data-slot": "item-title",
    className: clsx48("flex w-fit items-center gap-2 font-medium text-sm leading-snug", className),
    ...props
  });
}
function ItemDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx161("p", {
    "data-slot": "item-description",
    className: clsx48("line-clamp-2 text-balance font-normal text-muted-foreground text-sm leading-normal", "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4", className),
    ...props
  });
}
function ItemActions({ className, ...props }) {
  return /* @__PURE__ */ jsx161("div", {
    "data-slot": "item-actions",
    className: clsx48("flex items-center gap-2", className),
    ...props
  });
}
function ItemHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx161("div", {
    "data-slot": "item-header",
    className: clsx48("flex basis-full items-center justify-between gap-2", className),
    ...props
  });
}
function ItemFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx161("div", {
    "data-slot": "item-footer",
    className: clsx48("flex basis-full items-center justify-between gap-2", className),
    ...props
  });
}

// src/shadcn-ui/components/kbd.tsx
import clsx49 from "clsx";
import { jsx as jsx162 } from "react/jsx-runtime";
function Kbd({ className, ...props }) {
  return /* @__PURE__ */ jsx162("kbd", {
    "data-slot": "kbd",
    className: clsx49("pointer-events-none inline-flex h-5 w-fit min-w-5 select-none items-center justify-center gap-1 rounded-sm bg-muted px-1 font-medium font-sans text-muted-foreground text-xs", "[&_svg:not([class*='size-'])]:size-3", "[[data-slot=tooltip-content]_&]:bg-background/20 [[data-slot=tooltip-content]_&]:text-background dark:[[data-slot=tooltip-content]_&]:bg-background/10", className),
    ...props
  });
}
function KbdGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx162("kbd", {
    "data-slot": "kbd-group",
    className: clsx49("inline-flex items-center gap-1", className),
    ...props
  });
}
// src/shadcn-ui/components/native-select.tsx
import clsx50 from "clsx";
import { jsx as jsx163, jsxs as jsxs93 } from "react/jsx-runtime";
function NativeSelect({ className, ...props }) {
  return /* @__PURE__ */ jsxs93("div", {
    className: "group/native-select relative w-fit has-[select:disabled]:opacity-50",
    "data-slot": "native-select-wrapper",
    children: [
      /* @__PURE__ */ jsx163("select", {
        "data-slot": "native-select",
        className: clsx50("h-9 w-full min-w-0 appearance-none rounded-md border border-input bg-transparent px-3 py-2 pr-9 text-sm shadow-xs outline-none transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed dark:bg-input/30 dark:hover:bg-input/50", "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50", "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40", className),
        ...props
      }),
      /* @__PURE__ */ jsx163(SvgIcon, {
        iconId: "ChevronDown",
        className: "-translate-y-1/2 pointer-events-none absolute top-1/2 right-3.5 size-4 select-none text-muted-foreground opacity-50",
        "aria-hidden": "true",
        "data-slot": "native-select-icon"
      })
    ]
  });
}
function NativeSelectOption({ ...props }) {
  return /* @__PURE__ */ jsx163("option", {
    "data-slot": "native-select-option",
    ...props
  });
}
function NativeSelectOptGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx163("optgroup", {
    "data-slot": "native-select-optgroup",
    className: clsx50(className),
    ...props
  });
}
// src/shadcn-ui/components/sidebar.tsx
import { cva as cva11 } from "class-variance-authority";
import clsx51 from "clsx";
import { Slot as Slot7 } from "radix-ui";
import React38 from "react";

// src/shadcn-ui/hooks/use-mobile.ts
import React37 from "react";
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = React37.useState(undefined);
  React37.useEffect(() => {
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

// src/shadcn-ui/components/sidebar.tsx
import { jsx as jsx164, jsxs as jsxs94 } from "react/jsx-runtime";
var SIDEBAR_COOKIE_NAME = "sidebar_state";
var SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
var SIDEBAR_WIDTH = "16rem";
var SIDEBAR_WIDTH_MOBILE = "18rem";
var SIDEBAR_WIDTH_ICON = "3rem";
var SIDEBAR_KEYBOARD_SHORTCUT = "b";
var SidebarContext = React38.createContext(null);
function useSidebar() {
  const context = React38.useContext(SidebarContext);
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
  const [openMobile, setOpenMobile] = React38.useState(false);
  const [_open, _setOpen] = React38.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React38.useCallback((value) => {
    const openState = typeof value === "function" ? value(open) : value;
    if (setOpenProp) {
      setOpenProp(openState);
    } else {
      _setOpen(openState);
    }
    document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
  }, [setOpenProp, open]);
  const toggleSidebar = React38.useCallback(() => {
    return isMobile ? setOpenMobile((open2) => !open2) : setOpen((open2) => !open2);
  }, [isMobile, setOpen, setOpenMobile]);
  React38.useEffect(() => {
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
  const contextValue = React38.useMemo(() => ({
    state,
    open,
    setOpen,
    isMobile,
    openMobile,
    setOpenMobile,
    toggleSidebar
  }), [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]);
  return /* @__PURE__ */ jsx164(SidebarContext.Provider, {
    value: contextValue,
    children: /* @__PURE__ */ jsx164(TooltipProvider, {
      delayDuration: 0,
      children: /* @__PURE__ */ jsx164("div", {
        "data-slot": "sidebar-wrapper",
        style: {
          "--sidebar-width": SIDEBAR_WIDTH,
          "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
          ...style
        },
        className: clsx51("group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar", className),
        ...props,
        children
      })
    })
  });
}
function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
  if (collapsible === "none") {
    return /* @__PURE__ */ jsx164("div", {
      "data-slot": "sidebar",
      className: clsx51("flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground", className),
      ...props,
      children
    });
  }
  if (isMobile) {
    return /* @__PURE__ */ jsx164(Sheet, {
      open: openMobile,
      onOpenChange: setOpenMobile,
      ...props,
      children: /* @__PURE__ */ jsxs94(SheetContent, {
        "data-sidebar": "sidebar",
        "data-slot": "sidebar",
        "data-mobile": "true",
        className: "w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
        style: {
          "--sidebar-width": SIDEBAR_WIDTH_MOBILE
        },
        side,
        children: [
          /* @__PURE__ */ jsxs94(SheetHeader, {
            className: "sr-only",
            children: [
              /* @__PURE__ */ jsx164(SheetTitle, {
                children: "Sidebar"
              }),
              /* @__PURE__ */ jsx164(SheetDescription, {
                children: "Displays the mobile sidebar."
              })
            ]
          }),
          /* @__PURE__ */ jsx164("div", {
            className: "flex h-full w-full flex-col",
            children
          })
        ]
      })
    });
  }
  return /* @__PURE__ */ jsxs94("div", {
    className: "group peer hidden text-sidebar-foreground md:block",
    "data-state": state,
    "data-collapsible": state === "collapsed" ? collapsible : "",
    "data-variant": variant,
    "data-side": side,
    "data-slot": "sidebar",
    children: [
      /* @__PURE__ */ jsx164("div", {
        "data-slot": "sidebar-gap",
        className: clsx51("relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)")
      }),
      /* @__PURE__ */ jsx164("div", {
        "data-slot": "sidebar-container",
        className: clsx51("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex", side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]", variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l", className),
        ...props,
        children: /* @__PURE__ */ jsx164("div", {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar-inner",
          className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow-sm",
          children
        })
      })
    ]
  });
}
function SidebarTrigger({ className, onClick, ...props }) {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsxs94(Button, {
    "data-sidebar": "trigger",
    "data-slot": "sidebar-trigger",
    variant: "ghost",
    size: "icon",
    className: clsx51("size-7", className),
    onClick: (event) => {
      onClick?.(event);
      toggleSidebar();
    },
    ...props,
    children: [
      /* @__PURE__ */ jsx164(SvgIcon, {
        iconId: "PanelLeft"
      }),
      /* @__PURE__ */ jsx164("span", {
        className: "sr-only",
        children: "Toggle Sidebar"
      })
    ]
  });
}
function SidebarRail({ className, ...props }) {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsx164("button", {
    "data-sidebar": "rail",
    "data-slot": "sidebar-rail",
    "aria-label": "Toggle Sidebar",
    tabIndex: -1,
    onClick: toggleSidebar,
    title: "Toggle Sidebar",
    className: clsx51("-translate-x-1/2 group-data-[side=left]:-right-4 absolute inset-y-0 z-20 hidden w-4 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=right]:left-0 sm:flex", "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize", "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize", "group-data-[collapsible=offcanvas]:translate-x-0 hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:after:left-full", "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", className),
    ...props
  });
}
function SidebarInset({ className, ...props }) {
  return /* @__PURE__ */ jsx164("main", {
    "data-slot": "sidebar-inset",
    className: clsx51("relative flex w-full flex-1 flex-col bg-background", "md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm", className),
    ...props
  });
}
function SidebarInput({ className, ...props }) {
  return /* @__PURE__ */ jsx164(Input, {
    "data-slot": "sidebar-input",
    "data-sidebar": "input",
    className: clsx51("h-8 w-full bg-background shadow-none", className),
    ...props
  });
}
function SidebarHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx164("div", {
    "data-slot": "sidebar-header",
    "data-sidebar": "header",
    className: clsx51("flex flex-col gap-2 p-2", className),
    ...props
  });
}
function SidebarFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx164("div", {
    "data-slot": "sidebar-footer",
    "data-sidebar": "footer",
    className: clsx51("flex flex-col gap-2 p-2", className),
    ...props
  });
}
function SidebarSeparator({ className, ...props }) {
  return /* @__PURE__ */ jsx164(Separator, {
    "data-slot": "sidebar-separator",
    "data-sidebar": "separator",
    className: clsx51("mx-2 w-auto bg-sidebar-border", className),
    ...props
  });
}
function SidebarContent({ className, ...props }) {
  return /* @__PURE__ */ jsx164("div", {
    "data-slot": "sidebar-content",
    "data-sidebar": "content",
    className: clsx51("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", className),
    ...props
  });
}
function SidebarGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx164("div", {
    "data-slot": "sidebar-group",
    "data-sidebar": "group",
    className: clsx51("relative flex w-full min-w-0 flex-col p-2", className),
    ...props
  });
}
function SidebarGroupLabel({ className, asChild = false, ...props }) {
  const Comp = asChild ? Slot7.Slot : "div";
  return /* @__PURE__ */ jsx164(Comp, {
    "data-slot": "sidebar-group-label",
    "data-sidebar": "group-label",
    className: clsx51("flex h-8 shrink-0 items-center rounded-md px-2 font-medium text-sidebar-foreground/70 text-xs outline-hidden ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", className),
    ...props
  });
}
function SidebarGroupAction({ className, asChild = false, ...props }) {
  const Comp = asChild ? Slot7.Slot : "button";
  return /* @__PURE__ */ jsx164(Comp, {
    "data-slot": "sidebar-group-action",
    "data-sidebar": "group-action",
    className: clsx51("absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-hidden ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "after:-inset-2 after:absolute md:after:hidden", "group-data-[collapsible=icon]:hidden", className),
    ...props
  });
}
function SidebarGroupContent({ className, ...props }) {
  return /* @__PURE__ */ jsx164("div", {
    "data-slot": "sidebar-group-content",
    "data-sidebar": "group-content",
    className: clsx51("w-full text-sm", className),
    ...props
  });
}
function SidebarMenu({ className, ...props }) {
  return /* @__PURE__ */ jsx164("ul", {
    "data-slot": "sidebar-menu",
    "data-sidebar": "menu",
    className: clsx51("flex w-full min-w-0 flex-col gap-1", className),
    ...props
  });
}
function SidebarMenuItem({ className, ...props }) {
  return /* @__PURE__ */ jsx164("li", {
    "data-slot": "sidebar-menu-item",
    "data-sidebar": "menu-item",
    className: clsx51("group/menu-item relative", className),
    ...props
  });
}
var sidebarMenuButtonVariants = cva11("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
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
});
function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}) {
  const Comp = asChild ? Slot7.Slot : "button";
  const { isMobile, state } = useSidebar();
  const button = /* @__PURE__ */ jsx164(Comp, {
    "data-slot": "sidebar-menu-button",
    "data-sidebar": "menu-button",
    "data-size": size,
    "data-active": isActive,
    className: clsx51(sidebarMenuButtonVariants({ variant, size }), className),
    ...props
  });
  if (!tooltip) {
    return button;
  }
  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip
    };
  }
  return /* @__PURE__ */ jsxs94(Tooltip, {
    children: [
      /* @__PURE__ */ jsx164(TooltipTrigger, {
        asChild: true,
        children: button
      }),
      /* @__PURE__ */ jsx164(TooltipContent, {
        side: "right",
        align: "center",
        hidden: state !== "collapsed" || isMobile,
        ...tooltip
      })
    ]
  });
}
function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}) {
  const Comp = asChild ? Slot7.Slot : "button";
  return /* @__PURE__ */ jsx164(Comp, {
    "data-slot": "sidebar-menu-action",
    "data-sidebar": "menu-action",
    className: clsx51("absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-hidden ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0", "after:-inset-2 after:absolute md:after:hidden", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", showOnHover && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0", className),
    ...props
  });
}
function SidebarMenuBadge({ className, ...props }) {
  return /* @__PURE__ */ jsx164("div", {
    "data-slot": "sidebar-menu-badge",
    "data-sidebar": "menu-badge",
    className: clsx51("pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 font-medium text-sidebar-foreground text-xs tabular-nums", "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", className),
    ...props
  });
}
function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}) {
  const width = React38.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);
  return /* @__PURE__ */ jsxs94("div", {
    "data-slot": "sidebar-menu-skeleton",
    "data-sidebar": "menu-skeleton",
    className: clsx51("flex h-8 items-center gap-2 rounded-md px-2", className),
    ...props,
    children: [
      showIcon && /* @__PURE__ */ jsx164(Skeleton, {
        className: "size-4 rounded-md",
        "data-sidebar": "menu-skeleton-icon"
      }),
      /* @__PURE__ */ jsx164(Skeleton, {
        className: "h-4 max-w-(--skeleton-width) flex-1",
        "data-sidebar": "menu-skeleton-text",
        style: {
          "--skeleton-width": width
        }
      })
    ]
  });
}
function SidebarMenuSub({ className, ...props }) {
  return /* @__PURE__ */ jsx164("ul", {
    "data-slot": "sidebar-menu-sub",
    "data-sidebar": "menu-sub",
    className: clsx51("mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-sidebar-border border-l px-2.5 py-0.5", "group-data-[collapsible=icon]:hidden", className),
    ...props
  });
}
function SidebarMenuSubItem({ className, ...props }) {
  return /* @__PURE__ */ jsx164("li", {
    "data-slot": "sidebar-menu-sub-item",
    "data-sidebar": "menu-sub-item",
    className: clsx51("group/menu-sub-item relative", className),
    ...props
  });
}
function SidebarMenuSubButton({
  asChild = false,
  size = "md",
  isActive = false,
  className,
  ...props
}) {
  const Comp = asChild ? Slot7.Slot : "a";
  return /* @__PURE__ */ jsx164(Comp, {
    "data-slot": "sidebar-menu-sub-button",
    "data-sidebar": "menu-sub-button",
    "data-size": size,
    "data-active": isActive,
    className: clsx51("-translate-x-px flex h-7 min-w-0 items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-hidden ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground", "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground", size === "sm" && "text-xs", size === "md" && "text-sm", "group-data-[collapsible=icon]:hidden", className),
    ...props
  });
}
// src/shadcn-ui/components/sonner.tsx
import { useTheme as useTheme3 } from "next-themes";
import { Toaster as Sonner } from "sonner";
import { jsx as jsx165 } from "react/jsx-runtime";
var Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme3();
  return /* @__PURE__ */ jsx165(Sonner, {
    theme,
    className: "toaster group",
    icons: {
      success: /* @__PURE__ */ jsx165(SvgIcon, {
        iconId: "CircleCheck",
        className: "size-4"
      }),
      info: /* @__PURE__ */ jsx165(SvgIcon, {
        iconId: "Info",
        className: "size-4"
      }),
      warning: /* @__PURE__ */ jsx165(SvgIcon, {
        iconId: "CircleAlert",
        className: "size-4"
      }),
      error: /* @__PURE__ */ jsx165(SvgIcon, {
        iconId: "CircleAlert",
        className: "size-4"
      }),
      loading: /* @__PURE__ */ jsx165(SvgIcon, {
        iconId: "Loader",
        className: "size-4 animate-spin"
      })
    },
    style: {
      "--normal-bg": "var(--popover)",
      "--normal-text": "var(--popover-foreground)",
      "--normal-border": "var(--border)",
      "--border-radius": "var(--radius)"
    },
    ...props
  });
};
// src/vibrant/index.ts
var DataPagination2 = Object.assign(DataPagination, {
  RecordCountDisplay,
  PaginationControls,
  RowsPerPageSelector
});
var InputOtp2 = Object.assign(InputOtp, {
  Group: InputOtpGroup,
  Slot: InputOtpSlot,
  HiddenInput: InputOtpHiddenInput
});
var Accordion2 = Object.assign(Accordion, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent
});
var AlertDialog2 = Object.assign(AlertDialog, {
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
var Alert2 = Object.assign(Alert, {
  Title: AlertTitle,
  Description: AlertDescription
});
var Avatar2 = Object.assign(Avatar, {
  Image: AvatarImage,
  Fallback: AvatarFallback
});
var Badge2 = Object.assign(Badge, {
  Variants: badgeVariants
});
var Breadcrumb2 = Object.assign(Breadcrumb, {
  List: BreadcrumbList,
  Item: BreadcrumbItem,
  Link: BreadcrumbLink,
  Page: BreadcrumbPage,
  Separator: BreadcrumbSeparator,
  Ellipsis: BreadcrumbEllipsis
});
var ButtonGroup2 = Object.assign(ButtonGroup, {
  Separator: ButtonGroupSeparator,
  Text: ButtonGroupText,
  ButtonGroupVariants: buttonGroupVariants
});
var Button2 = Object.assign(Button, {
  Variants: buttonVariants
});
var Card2 = Object.assign(Card, {
  Header: CardHeader,
  Footer: CardFooter,
  Title: CardTitle,
  Action: CardAction,
  Description: CardDescription,
  Content: CardContent
});
var Collapsible2 = Object.assign(Collapsible, {
  Trigger: CollapsibleTrigger,
  Content: CollapsibleContent
});
var Command2 = Object.assign(Command, {
  Dialog: CommandDialog,
  Input: CommandInput,
  List: CommandList,
  Empty: CommandEmpty,
  Group: CommandGroup,
  Item: CommandItem,
  Shortcut: CommandShortcut,
  Separator: CommandSeparator
});
var ContextMenu2 = Object.assign(ContextMenu, {
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
var Dialog2 = Object.assign(Dialog, {
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
var DropdownMenu2 = Object.assign(DropdownMenu, {
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
var Empty2 = Object.assign(Empty, {
  Header: EmptyHeader,
  Title: EmptyTitle,
  Description: EmptyDescription,
  Content: EmptyContent,
  Media: EmptyMedia
});
var Field2 = Object.assign(Field, {
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
var Form2 = Object.assign(Form, {
  Item: FormItem,
  Label: FormLabel,
  Control: FormControl,
  Description: FormDescription,
  Message: FormMessage,
  Field: FormField
});
var HoverCard2 = Object.assign(HoverCard, {
  Trigger: HoverCardTrigger,
  Content: HoverCardContent
});
var InputGroup2 = Object.assign(InputGroup, {
  Addon: InputGroupAddon,
  Button: InputGroupButton,
  Text: InputGroupText,
  Input: InputGroupInput,
  Textarea: InputGroupTextarea
});
var Item2 = Object.assign(Item, {
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
var Kbd2 = Object.assign(Kbd, {
  Group: KbdGroup
});
var Menubar2 = Object.assign(Menubar, {
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
var NativeSelect2 = Object.assign(NativeSelect, {
  OptGroup: NativeSelectOptGroup,
  Option: NativeSelectOption
});
var NavigationMenu2 = Object.assign(NavigationMenu, {
  List: NavigationMenuList,
  Item: NavigationMenuItem,
  Content: NavigationMenuContent,
  Trigger: NavigationMenuTrigger,
  Link: NavigationMenuLink,
  Indicator: NavigationMenuIndicator,
  Viewport: NavigationMenuViewport,
  NavigationMenuTriggerStyle: navigationMenuTriggerStyle
});
var Pagination2 = Object.assign(Pagination, {
  Content: PaginationContent,
  Link: PaginationLink,
  Item: PaginationItem,
  Previous: PaginationPrevious,
  Next: PaginationNext,
  Ellipsis: PaginationEllipsis
});
var Popover2 = Object.assign(Popover, {
  Trigger: PopoverTrigger,
  Content: PopoverContent,
  Anchor: PopoverAnchor
});
var RadioGroup2 = Object.assign(RadioGroup, {
  Item: RadioGroupItem
});
var ScrollArea2 = Object.assign(ScrollArea, {
  ScrollBar
});
var Select2 = Object.assign(Select, {
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
var Sheet2 = Object.assign(Sheet, {
  Trigger: SheetTrigger,
  Close: SheetClose,
  Content: SheetContent,
  Header: SheetHeader,
  Footer: SheetFooter,
  Title: SheetTitle,
  Description: SheetDescription
});
var Sidebar2 = Object.assign(Sidebar, {
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
var Table2 = Object.assign(Table, {
  Header: TableHeader,
  Body: TableBody,
  Footer: TableFooter,
  Head: TableHead,
  Row: TableRow,
  Cell: TableCell,
  Caption: TableCaption
});
var Tabs2 = Object.assign(Tabs, {
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent
});
var ToggleGroup2 = Object.assign(ToggleGroup, {
  Item: ToggleGroupItem
});
var Toggle2 = Object.assign(Toggle, {
  Variants: toggleVariants
});
var Tooltip2 = Object.assign(Tooltip, {
  Trigger: TooltipTrigger,
  Content: TooltipContent,
  Provider: TooltipProvider
});
export {
  useSidebar,
  useFormField,
  iconNames,
  Tooltip2 as Tooltip,
  ToggleGroup2 as ToggleGroup,
  Toggle2 as Toggle,
  Toaster,
  Textarea,
  Tabs2 as Tabs,
  Table2 as Table,
  Switch,
  SvgIcon,
  Spinner,
  Slider,
  Skeleton,
  Sidebar2 as Sidebar,
  Sheet2 as Sheet,
  Separator,
  Select2 as Select,
  ScrollArea2 as ScrollArea,
  RadioGroup2 as RadioGroup,
  Progress,
  Popover2 as Popover,
  Pagination2 as Pagination,
  NavigationMenu2 as NavigationMenu,
  NativeSelect2 as NativeSelect,
  Menubar2 as Menubar,
  Link,
  Label,
  Kbd2 as Kbd,
  Item2 as Item,
  InputOtp2 as InputOtp,
  InputGroup2 as InputGroup,
  Input,
  HoverCard2 as HoverCard,
  Form2 as Form,
  Field2 as Field,
  Empty2 as Empty,
  DropdownMenu2 as DropdownMenu,
  Dialog2 as Dialog,
  DataPagination2 as DataPagination,
  ContextMenu2 as ContextMenu,
  ComponentExamples,
  Command2 as Command,
  Collapsible2 as Collapsible,
  Checkbox,
  Card2 as Card,
  ButtonGroup2 as ButtonGroup,
  Button2 as Button,
  Breadcrumb2 as Breadcrumb,
  Badge2 as Badge,
  Avatar2 as Avatar,
  AspectRatio,
  AlertDialog2 as AlertDialog,
  Alert2 as Alert,
  Accordion2 as Accordion
};

//# debugId=9FB7C9CCB3680F8164756E2164756E21
