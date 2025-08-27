// src/shadcn-ui/components/accordion.tsx
import clsx from "clsx";
import { Accordion as AccordionPrimitive } from "radix-ui";

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

// src/shadcn-ui/components/accordion.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
function Accordion({ ...props }) {
  return /* @__PURE__ */ jsx2(AccordionPrimitive.Root, {
    "data-slot": "accordion",
    ...props
  });
}
function AccordionItem({ className, ...props }) {
  return /* @__PURE__ */ jsx2(AccordionPrimitive.Item, {
    "data-slot": "accordion-item",
    className: clsx("border-b last:border-b-0", className),
    ...props
  });
}
function AccordionTrigger({ className, children, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsx2(AccordionPrimitive.Header, {
    className: "flex",
    children: /* @__PURE__ */ jsxs(AccordionPrimitive.Trigger, {
      "data-slot": "accordion-trigger",
      className: clsx("flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left font-medium text-sm outline-none transition-all hover:underline focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180", className),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx2(SpriteIcon, {
          id: "ChevronDown",
          url: spriteUrl,
          className: "pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200"
        })
      ]
    })
  });
}
function AccordionContent({ className, children, ...props }) {
  return /* @__PURE__ */ jsx2(AccordionPrimitive.Content, {
    "data-slot": "accordion-content",
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx2("div", {
      className: clsx("pt-0 pb-4", className),
      children
    })
  });
}

// src/shadcn-ui/components/alert-dialog.tsx
import clsx3 from "clsx";
import { AlertDialog as AlertDialogPrimitive } from "radix-ui";

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

// src/shadcn-ui/components/alert-dialog.tsx
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
function AlertDialog({ ...props }) {
  return /* @__PURE__ */ jsx4(AlertDialogPrimitive.Root, {
    "data-slot": "alert-dialog",
    ...props
  });
}
function AlertDialogTrigger({ ...props }) {
  return /* @__PURE__ */ jsx4(AlertDialogPrimitive.Trigger, {
    "data-slot": "alert-dialog-trigger",
    ...props
  });
}
function AlertDialogPortal({ ...props }) {
  return /* @__PURE__ */ jsx4(AlertDialogPrimitive.Portal, {
    "data-slot": "alert-dialog-portal",
    ...props
  });
}
function AlertDialogOverlay({ className, ...props }) {
  return /* @__PURE__ */ jsx4(AlertDialogPrimitive.Overlay, {
    "data-slot": "alert-dialog-overlay",
    className: clsx3("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=open]:animate-in", className),
    ...props
  });
}
function AlertDialogContent({ className, ...props }) {
  return /* @__PURE__ */ jsxs2(AlertDialogPortal, {
    children: [
      /* @__PURE__ */ jsx4(AlertDialogOverlay, {}),
      /* @__PURE__ */ jsx4(AlertDialogPrimitive.Content, {
        "data-slot": "alert-dialog-content",
        className: clsx3("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 data-[state=closed]:animate-out data-[state=open]:animate-in sm:max-w-lg", className),
        ...props
      })
    ]
  });
}
function AlertDialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx4("div", {
    "data-slot": "alert-dialog-header",
    className: clsx3("flex flex-col gap-2 text-center sm:text-left", className),
    ...props
  });
}
function AlertDialogFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx4("div", {
    "data-slot": "alert-dialog-footer",
    className: clsx3("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
    ...props
  });
}
function AlertDialogTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx4(AlertDialogPrimitive.Title, {
    "data-slot": "alert-dialog-title",
    className: clsx3("font-semibold text-lg", className),
    ...props
  });
}
function AlertDialogDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx4(AlertDialogPrimitive.Description, {
    "data-slot": "alert-dialog-description",
    className: clsx3("text-muted-foreground text-sm", className),
    ...props
  });
}
function AlertDialogAction({ className, ...props }) {
  return /* @__PURE__ */ jsx4(AlertDialogPrimitive.Action, {
    className: clsx3(buttonVariants(), className),
    ...props
  });
}
function AlertDialogCancel({ className, ...props }) {
  return /* @__PURE__ */ jsx4(AlertDialogPrimitive.Cancel, {
    className: clsx3(buttonVariants({ variant: "outline" }), className),
    ...props
  });
}

// src/shadcn-ui/components/alert.tsx
import { cva as cva2 } from "class-variance-authority";
import clsx4 from "clsx";
import { jsx as jsx5 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx5("div", {
    "data-slot": "alert",
    role: "alert",
    className: clsx4(alertVariants({ variant }), className),
    ...props
  });
}
function AlertTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx5("div", {
    "data-slot": "alert-title",
    className: clsx4("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", className),
    ...props
  });
}
function AlertDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx5("div", {
    "data-slot": "alert-description",
    className: clsx4("col-start-2 grid justify-items-start gap-1 text-muted-foreground text-sm [&_p]:leading-relaxed", className),
    ...props
  });
}

// src/shadcn-ui/components/aspect-ratio.tsx
import { AspectRatio as AspectRatioPrimitive } from "radix-ui";
import { jsx as jsx6 } from "react/jsx-runtime";
function AspectRatio({ ...props }) {
  return /* @__PURE__ */ jsx6(AspectRatioPrimitive.Root, {
    "data-slot": "aspect-ratio",
    ...props
  });
}
// src/shadcn-ui/components/avatar.tsx
import clsx5 from "clsx";
import { Avatar as AvatarPrimitive } from "radix-ui";
import { jsx as jsx7 } from "react/jsx-runtime";
function Avatar({ className, ...props }) {
  return /* @__PURE__ */ jsx7(AvatarPrimitive.Root, {
    "data-slot": "avatar",
    className: clsx5("relative flex size-8 shrink-0 overflow-hidden rounded-full", className),
    ...props
  });
}
function AvatarImage({ className, ...props }) {
  return /* @__PURE__ */ jsx7(AvatarPrimitive.Image, {
    "data-slot": "avatar-image",
    className: clsx5("aspect-square size-full", className),
    ...props
  });
}
function AvatarFallback({ className, ...props }) {
  return /* @__PURE__ */ jsx7(AvatarPrimitive.Fallback, {
    "data-slot": "avatar-fallback",
    className: clsx5("flex size-full items-center justify-center rounded-full bg-muted", className),
    ...props
  });
}

// src/shadcn-ui/components/badge.tsx
import { cva as cva3 } from "class-variance-authority";
import clsx6 from "clsx";
import { Slot as SlotPrimitive2 } from "radix-ui";
import { jsx as jsx8 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx8(Comp, {
    "data-slot": "badge",
    className: clsx6(badgeVariants({ variant }), className),
    ...props
  });
}

// src/shadcn-ui/components/breadcrumb.tsx
import clsx7 from "clsx";
import { Slot as SlotPrimitive3 } from "radix-ui";
import { jsx as jsx9, jsxs as jsxs3 } from "react/jsx-runtime";
function Breadcrumb({ ...props }) {
  return /* @__PURE__ */ jsx9("nav", {
    "aria-label": "breadcrumb",
    "data-slot": "breadcrumb",
    ...props
  });
}
function BreadcrumbList({ className, ...props }) {
  return /* @__PURE__ */ jsx9("ol", {
    "data-slot": "breadcrumb-list",
    className: clsx7("flex flex-wrap items-center gap-1.5 break-words text-muted-foreground text-sm sm:gap-2.5", className),
    ...props
  });
}
function BreadcrumbItem({ className, ...props }) {
  return /* @__PURE__ */ jsx9("li", {
    "data-slot": "breadcrumb-item",
    className: clsx7("inline-flex items-center gap-1.5", className),
    ...props
  });
}
function BreadcrumbLink({ asChild, className, ...props }) {
  const Comp = asChild ? SlotPrimitive3.Slot : "a";
  return /* @__PURE__ */ jsx9(Comp, {
    "data-slot": "breadcrumb-link",
    className: clsx7("transition-colors hover:text-foreground", className),
    ...props
  });
}
function BreadcrumbPage({ className, ...props }) {
  return /* @__PURE__ */ jsx9("span", {
    "data-slot": "breadcrumb-page",
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: clsx7("font-normal text-foreground", className),
    ...props
  });
}
function BreadcrumbSeparator({ children, className, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsx9("li", {
    "data-slot": "breadcrumb-separator",
    role: "presentation",
    "aria-hidden": "true",
    className: clsx7("[&>svg]:size-3.5", className),
    ...props,
    children: children ?? /* @__PURE__ */ jsx9(SpriteIcon, {
      id: "ChevronRight",
      url: spriteUrl
    })
  });
}
function BreadcrumbEllipsis({ className, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsxs3("span", {
    "data-slot": "breadcrumb-ellipsis",
    role: "presentation",
    "aria-hidden": "true",
    className: clsx7("flex size-9 items-center justify-center", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx9(SpriteIcon, {
        id: "Ellipsis",
        className: "size-4",
        url: spriteUrl
      }),
      /* @__PURE__ */ jsx9("span", {
        className: "sr-only",
        children: "More"
      })
    ]
  });
}

// src/shadcn-ui/components/card.tsx
import clsx8 from "clsx";
import { jsx as jsx10 } from "react/jsx-runtime";
function Card({ className, ...props }) {
  return /* @__PURE__ */ jsx10("div", {
    "data-slot": "card",
    className: clsx8("flex flex-col gap-6 rounded-xl border bg-card py-6 text-card-foreground shadow-sm", className),
    ...props
  });
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx10("div", {
    "data-slot": "card-header",
    className: clsx8("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
    ...props
  });
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx10("div", {
    "data-slot": "card-title",
    className: clsx8("font-semibold leading-none", className),
    ...props
  });
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx10("div", {
    "data-slot": "card-description",
    className: clsx8("text-muted-foreground text-sm", className),
    ...props
  });
}
function CardAction({ className, ...props }) {
  return /* @__PURE__ */ jsx10("div", {
    "data-slot": "card-action",
    className: clsx8("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
    ...props
  });
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsx10("div", {
    "data-slot": "card-content",
    className: clsx8("px-6", className),
    ...props
  });
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx10("div", {
    "data-slot": "card-footer",
    className: clsx8("flex items-center px-6 [.border-t]:pt-6", className),
    ...props
  });
}

// src/shadcn-ui/components/checkbox.tsx
import clsx9 from "clsx";
import { Checkbox as CheckboxPrimitive } from "radix-ui";
import { jsx as jsx11 } from "react/jsx-runtime";
function Checkbox({ className, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsx11(CheckboxPrimitive.Root, {
    "data-slot": "checkbox",
    className: clsx9("peer size-4 shrink-0 rounded-[4px] border border-input shadow-xs outline-none transition-shadow focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-input/30 dark:data-[state=checked]:bg-primary dark:aria-invalid:ring-destructive/40", className),
    ...props,
    children: /* @__PURE__ */ jsx11(CheckboxPrimitive.Indicator, {
      "data-slot": "checkbox-indicator",
      className: "flex items-center justify-center text-current transition-none",
      children: /* @__PURE__ */ jsx11(SpriteIcon, {
        id: "Check",
        url: spriteUrl,
        className: "size-3.5"
      })
    })
  });
}
// src/shadcn-ui/components/collapsible.tsx
import { Collapsible as CollapsiblePrimitive } from "radix-ui";
import { jsx as jsx12 } from "react/jsx-runtime";
function Collapsible({ ...props }) {
  return /* @__PURE__ */ jsx12(CollapsiblePrimitive.Root, {
    "data-slot": "collapsible",
    ...props
  });
}
function CollapsibleTrigger({ ...props }) {
  return /* @__PURE__ */ jsx12(CollapsiblePrimitive.CollapsibleTrigger, {
    "data-slot": "collapsible-trigger",
    ...props
  });
}
function CollapsibleContent({ ...props }) {
  return /* @__PURE__ */ jsx12(CollapsiblePrimitive.CollapsibleContent, {
    "data-slot": "collapsible-content",
    ...props
  });
}

// src/shadcn-ui/components/command.tsx
import clsx11 from "clsx";
import { Command as CommandPrimitive } from "cmdk";

// src/shadcn-ui/components/dialog.tsx
import clsx10 from "clsx";
import { Dialog as DialogPrimitive } from "radix-ui";
import { jsx as jsx13, jsxs as jsxs4 } from "react/jsx-runtime";
function Dialog({ ...props }) {
  return /* @__PURE__ */ jsx13(DialogPrimitive.Root, {
    "data-slot": "dialog",
    ...props
  });
}
function DialogTrigger({ ...props }) {
  return /* @__PURE__ */ jsx13(DialogPrimitive.Trigger, {
    "data-slot": "dialog-trigger",
    ...props
  });
}
function DialogPortal({ ...props }) {
  return /* @__PURE__ */ jsx13(DialogPrimitive.Portal, {
    "data-slot": "dialog-portal",
    ...props
  });
}
function DialogClose({ ...props }) {
  return /* @__PURE__ */ jsx13(DialogPrimitive.Close, {
    "data-slot": "dialog-close",
    ...props
  });
}
function DialogOverlay({ className, ...props }) {
  return /* @__PURE__ */ jsx13(DialogPrimitive.Overlay, {
    "data-slot": "dialog-overlay",
    className: clsx10("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=open]:animate-in", className),
    ...props
  });
}
function DialogContent({ className, children, showCloseButton = true, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsxs4(DialogPortal, {
    "data-slot": "dialog-portal",
    children: [
      /* @__PURE__ */ jsx13(DialogOverlay, {}),
      /* @__PURE__ */ jsxs4(DialogPrimitive.Content, {
        "data-slot": "dialog-content",
        className: clsx10("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 data-[state=closed]:animate-out data-[state=open]:animate-in sm:max-w-lg", className),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxs4(DialogPrimitive.Close, {
            "data-slot": "dialog-close",
            className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
            children: [
              /* @__PURE__ */ jsx13(SpriteIcon, {
                id: "X",
                url: spriteUrl
              }),
              /* @__PURE__ */ jsx13("span", {
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
  return /* @__PURE__ */ jsx13("div", {
    "data-slot": "dialog-header",
    className: clsx10("flex flex-col gap-2 text-center sm:text-left", className),
    ...props
  });
}
function DialogFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx13("div", {
    "data-slot": "dialog-footer",
    className: clsx10("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
    ...props
  });
}
function DialogTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx13(DialogPrimitive.Title, {
    "data-slot": "dialog-title",
    className: clsx10("font-semibold text-lg leading-none", className),
    ...props
  });
}
function DialogDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx13(DialogPrimitive.Description, {
    "data-slot": "dialog-description",
    className: clsx10("text-muted-foreground text-sm", className),
    ...props
  });
}

// src/shadcn-ui/components/command.tsx
import { jsx as jsx14, jsxs as jsxs5 } from "react/jsx-runtime";
function Command({ className, ...props }) {
  return /* @__PURE__ */ jsx14(CommandPrimitive, {
    "data-slot": "command",
    className: clsx11("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", className),
    ...props
  });
}
function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  showCloseButton = true,
  spriteUrl,
  ...props
}) {
  return /* @__PURE__ */ jsxs5(Dialog, {
    ...props,
    children: [
      /* @__PURE__ */ jsxs5(DialogHeader, {
        className: "sr-only",
        children: [
          /* @__PURE__ */ jsx14(DialogTitle, {
            children: title
          }),
          /* @__PURE__ */ jsx14(DialogDescription, {
            children: description
          })
        ]
      }),
      /* @__PURE__ */ jsx14(DialogContent, {
        spriteUrl,
        className: clsx11("overflow-hidden p-0", className),
        showCloseButton,
        children: /* @__PURE__ */ jsx14(Command, {
          className: "**:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
          children
        })
      })
    ]
  });
}
function CommandInput({ className, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsxs5("div", {
    "data-slot": "command-input-wrapper",
    className: "flex h-9 items-center gap-2 border-b px-3",
    children: [
      /* @__PURE__ */ jsx14(SpriteIcon, {
        id: "Search",
        url: spriteUrl,
        className: "size-4 shrink-0 opacity-50"
      }),
      /* @__PURE__ */ jsx14(CommandPrimitive.Input, {
        "data-slot": "command-input",
        className: clsx11("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className),
        ...props
      })
    ]
  });
}
function CommandList({ className, ...props }) {
  return /* @__PURE__ */ jsx14(CommandPrimitive.List, {
    "data-slot": "command-list",
    className: clsx11("max-h-[300px] scroll-py-1 overflow-y-auto overflow-x-hidden", className),
    ...props
  });
}
function CommandEmpty({ ...props }) {
  return /* @__PURE__ */ jsx14(CommandPrimitive.Empty, {
    "data-slot": "command-empty",
    className: "py-6 text-center text-sm",
    ...props
  });
}
function CommandGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx14(CommandPrimitive.Group, {
    "data-slot": "command-group",
    className: clsx11("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:text-xs", className),
    ...props
  });
}
function CommandSeparator({ className, ...props }) {
  return /* @__PURE__ */ jsx14(CommandPrimitive.Separator, {
    "data-slot": "command-separator",
    className: clsx11("-mx-1 h-px bg-border", className),
    ...props
  });
}
function CommandItem({ className, ...props }) {
  return /* @__PURE__ */ jsx14(CommandPrimitive.Item, {
    "data-slot": "command-item",
    className: clsx11("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props
  });
}
function CommandShortcut({ className, ...props }) {
  return /* @__PURE__ */ jsx14("span", {
    "data-slot": "command-shortcut",
    className: clsx11("ml-auto text-muted-foreground text-xs tracking-widest", className),
    ...props
  });
}

// src/shadcn-ui/components/context-menu.tsx
import clsx12 from "clsx";
import { ContextMenu as ContextMenuPrimitive } from "radix-ui";
import { jsx as jsx15, jsxs as jsxs6 } from "react/jsx-runtime";
function ContextMenu({ ...props }) {
  return /* @__PURE__ */ jsx15(ContextMenuPrimitive.Root, {
    "data-slot": "context-menu",
    ...props
  });
}
function ContextMenuTrigger({ ...props }) {
  return /* @__PURE__ */ jsx15(ContextMenuPrimitive.Trigger, {
    "data-slot": "context-menu-trigger",
    ...props
  });
}
function ContextMenuGroup({ ...props }) {
  return /* @__PURE__ */ jsx15(ContextMenuPrimitive.Group, {
    "data-slot": "context-menu-group",
    ...props
  });
}
function ContextMenuPortal({ ...props }) {
  return /* @__PURE__ */ jsx15(ContextMenuPrimitive.Portal, {
    "data-slot": "context-menu-portal",
    ...props
  });
}
function ContextMenuSub({ ...props }) {
  return /* @__PURE__ */ jsx15(ContextMenuPrimitive.Sub, {
    "data-slot": "context-menu-sub",
    ...props
  });
}
function ContextMenuRadioGroup({ ...props }) {
  return /* @__PURE__ */ jsx15(ContextMenuPrimitive.RadioGroup, {
    "data-slot": "context-menu-radio-group",
    ...props
  });
}
function ContextMenuSubTrigger({ className, inset, children, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsxs6(ContextMenuPrimitive.SubTrigger, {
    "data-slot": "context-menu-sub-trigger",
    "data-inset": inset,
    className: clsx12("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[inset]:pl-8 data-[state=open]:text-accent-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx15(SpriteIcon, {
        id: "ChevronRight",
        className: "ml-auto",
        url: spriteUrl
      })
    ]
  });
}
function ContextMenuSubContent({ className, ...props }) {
  return /* @__PURE__ */ jsx15(ContextMenuPrimitive.SubContent, {
    "data-slot": "context-menu-sub-content",
    className: clsx12("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=closed]:animate-out data-[state=open]:animate-in", className),
    ...props
  });
}
function ContextMenuContent({ className, ...props }) {
  return /* @__PURE__ */ jsx15(ContextMenuPrimitive.Portal, {
    children: /* @__PURE__ */ jsx15(ContextMenuPrimitive.Content, {
      "data-slot": "context-menu-content",
      className: clsx12("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=closed]:animate-out data-[state=open]:animate-in", className),
      ...props
    })
  });
}
function ContextMenuItem({ className, inset, variant = "default", ...props }) {
  return /* @__PURE__ */ jsx15(ContextMenuPrimitive.Item, {
    "data-slot": "context-menu-item",
    "data-inset": inset,
    "data-variant": variant,
    className: clsx12("data-[variant=destructive]:*:[svg]:!text-destructive relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[disabled]:opacity-50 data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props
  });
}
function ContextMenuCheckboxItem({ className, children, checked, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsxs6(ContextMenuPrimitive.CheckboxItem, {
    "data-slot": "context-menu-checkbox-item",
    className: clsx12("relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx15("span", {
        className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
        children: /* @__PURE__ */ jsx15(ContextMenuPrimitive.ItemIndicator, {
          children: /* @__PURE__ */ jsx15(SpriteIcon, {
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
  return /* @__PURE__ */ jsxs6(ContextMenuPrimitive.RadioItem, {
    "data-slot": "context-menu-radio-item",
    className: clsx12("relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx15("span", {
        className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
        children: /* @__PURE__ */ jsx15(ContextMenuPrimitive.ItemIndicator, {
          children: /* @__PURE__ */ jsx15(SpriteIcon, {
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
  return /* @__PURE__ */ jsx15(ContextMenuPrimitive.Label, {
    "data-slot": "context-menu-label",
    "data-inset": inset,
    className: clsx12("px-2 py-1.5 font-medium text-foreground text-sm data-[inset]:pl-8", className),
    ...props
  });
}
function ContextMenuSeparator({ className, ...props }) {
  return /* @__PURE__ */ jsx15(ContextMenuPrimitive.Separator, {
    "data-slot": "context-menu-separator",
    className: clsx12("-mx-1 my-1 h-px bg-border", className),
    ...props
  });
}
function ContextMenuShortcut({ className, ...props }) {
  return /* @__PURE__ */ jsx15("span", {
    "data-slot": "context-menu-shortcut",
    className: clsx12("ml-auto text-muted-foreground text-xs tracking-widest", className),
    ...props
  });
}

// src/shadcn-ui/components/dropdown-menu.tsx
import clsx13 from "clsx";
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui";
import { jsx as jsx16, jsxs as jsxs7 } from "react/jsx-runtime";
function DropdownMenu({ ...props }) {
  return /* @__PURE__ */ jsx16(DropdownMenuPrimitive.Root, {
    "data-slot": "dropdown-menu",
    ...props
  });
}
function DropdownMenuPortal({ ...props }) {
  return /* @__PURE__ */ jsx16(DropdownMenuPrimitive.Portal, {
    "data-slot": "dropdown-menu-portal",
    ...props
  });
}
function DropdownMenuTrigger({ ...props }) {
  return /* @__PURE__ */ jsx16(DropdownMenuPrimitive.Trigger, {
    "data-slot": "dropdown-menu-trigger",
    ...props
  });
}
function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
  return /* @__PURE__ */ jsx16(DropdownMenuPrimitive.Portal, {
    children: /* @__PURE__ */ jsx16(DropdownMenuPrimitive.Content, {
      "data-slot": "dropdown-menu-content",
      sideOffset,
      className: clsx13("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=closed]:animate-out data-[state=open]:animate-in", className),
      ...props
    })
  });
}
function DropdownMenuGroup({ ...props }) {
  return /* @__PURE__ */ jsx16(DropdownMenuPrimitive.Group, {
    "data-slot": "dropdown-menu-group",
    ...props
  });
}
function DropdownMenuItem({ className, inset, variant = "default", ...props }) {
  return /* @__PURE__ */ jsx16(DropdownMenuPrimitive.Item, {
    "data-slot": "dropdown-menu-item",
    "data-inset": inset,
    "data-variant": variant,
    className: clsx13("data-[variant=destructive]:*:[svg]:!text-destructive relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[disabled]:opacity-50 data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props
  });
}
function DropdownMenuCheckboxItem({ className, children, checked, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsxs7(DropdownMenuPrimitive.CheckboxItem, {
    "data-slot": "dropdown-menu-checkbox-item",
    className: clsx13("relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx16("span", {
        className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
        children: /* @__PURE__ */ jsx16(DropdownMenuPrimitive.ItemIndicator, {
          children: /* @__PURE__ */ jsx16(SpriteIcon, {
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
  return /* @__PURE__ */ jsx16(DropdownMenuPrimitive.RadioGroup, {
    "data-slot": "dropdown-menu-radio-group",
    ...props
  });
}
function DropdownMenuRadioItem({ className, children, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsxs7(DropdownMenuPrimitive.RadioItem, {
    "data-slot": "dropdown-menu-radio-item",
    className: clsx13("relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx16("span", {
        className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
        children: /* @__PURE__ */ jsx16(DropdownMenuPrimitive.ItemIndicator, {
          children: /* @__PURE__ */ jsx16(SpriteIcon, {
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
  return /* @__PURE__ */ jsx16(DropdownMenuPrimitive.Label, {
    "data-slot": "dropdown-menu-label",
    "data-inset": inset,
    className: clsx13("px-2 py-1.5 font-medium text-sm data-[inset]:pl-8", className),
    ...props
  });
}
function DropdownMenuSeparator({ className, ...props }) {
  return /* @__PURE__ */ jsx16(DropdownMenuPrimitive.Separator, {
    "data-slot": "dropdown-menu-separator",
    className: clsx13("-mx-1 my-1 h-px bg-border", className),
    ...props
  });
}
function DropdownMenuShortcut({ className, ...props }) {
  return /* @__PURE__ */ jsx16("span", {
    "data-slot": "dropdown-menu-shortcut",
    className: clsx13("ml-auto text-muted-foreground text-xs tracking-widest", className),
    ...props
  });
}
function DropdownMenuSub({ ...props }) {
  return /* @__PURE__ */ jsx16(DropdownMenuPrimitive.Sub, {
    "data-slot": "dropdown-menu-sub",
    ...props
  });
}
function DropdownMenuSubTrigger({ className, inset, children, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsxs7(DropdownMenuPrimitive.SubTrigger, {
    "data-slot": "dropdown-menu-sub-trigger",
    "data-inset": inset,
    className: clsx13("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[inset]:pl-8 data-[state=open]:text-accent-foreground", className),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx16(SpriteIcon, {
        id: "ChevronRight",
        className: "ml-auto size-4",
        url: spriteUrl
      })
    ]
  });
}
function DropdownMenuSubContent({ className, ...props }) {
  return /* @__PURE__ */ jsx16(DropdownMenuPrimitive.SubContent, {
    "data-slot": "dropdown-menu-sub-content",
    className: clsx13("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=closed]:animate-out data-[state=open]:animate-in", className),
    ...props
  });
}

// src/shadcn-ui/components/hover-card.tsx
import clsx14 from "clsx";
import { HoverCard as HoverCardPrimitive } from "radix-ui";
import { jsx as jsx17 } from "react/jsx-runtime";
function HoverCard({ ...props }) {
  return /* @__PURE__ */ jsx17(HoverCardPrimitive.Root, {
    "data-slot": "hover-card",
    ...props
  });
}
function HoverCardTrigger({ ...props }) {
  return /* @__PURE__ */ jsx17(HoverCardPrimitive.Trigger, {
    "data-slot": "hover-card-trigger",
    ...props
  });
}
function HoverCardContent({ className, align = "center", sideOffset = 4, ...props }) {
  return /* @__PURE__ */ jsx17(HoverCardPrimitive.Portal, {
    "data-slot": "hover-card-portal",
    children: /* @__PURE__ */ jsx17(HoverCardPrimitive.Content, {
      "data-slot": "hover-card-content",
      align,
      sideOffset,
      className: clsx14("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[state=closed]:animate-out data-[state=open]:animate-in", className),
      ...props
    })
  });
}

// src/shadcn-ui/components/input.tsx
import clsx15 from "clsx";
import { jsx as jsx18 } from "react/jsx-runtime";
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx18("input", {
    type,
    "data-slot": "input",
    className: clsx15("flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs outline-none transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30", "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50", "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40", className),
    ...props
  });
}
// src/shadcn-ui/components/label.tsx
import clsx16 from "clsx";
import { Label as LabelPrimitive } from "radix-ui";
import { jsx as jsx19 } from "react/jsx-runtime";
function Label({ className, ...props }) {
  return /* @__PURE__ */ jsx19(LabelPrimitive.Root, {
    "data-slot": "label",
    className: clsx16("flex select-none items-center gap-2 font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50", className),
    ...props
  });
}
// src/shadcn-ui/components/menubar.tsx
import clsx17 from "clsx";
import { Menubar as MenubarPrimitive } from "radix-ui";
import { jsx as jsx20, jsxs as jsxs8 } from "react/jsx-runtime";
function Menubar({ className, ...props }) {
  return /* @__PURE__ */ jsx20(MenubarPrimitive.Root, {
    "data-slot": "menubar",
    className: clsx17("flex h-9 items-center gap-1 rounded-md border bg-background p-1 shadow-xs", className),
    ...props
  });
}
function MenubarMenu({ ...props }) {
  return /* @__PURE__ */ jsx20(MenubarPrimitive.Menu, {
    "data-slot": "menubar-menu",
    ...props
  });
}
function MenubarGroup({ ...props }) {
  return /* @__PURE__ */ jsx20(MenubarPrimitive.Group, {
    "data-slot": "menubar-group",
    ...props
  });
}
function MenubarPortal({ ...props }) {
  return /* @__PURE__ */ jsx20(MenubarPrimitive.Portal, {
    "data-slot": "menubar-portal",
    ...props
  });
}
function MenubarRadioGroup({ ...props }) {
  return /* @__PURE__ */ jsx20(MenubarPrimitive.RadioGroup, {
    "data-slot": "menubar-radio-group",
    ...props
  });
}
function MenubarTrigger({ className, ...props }) {
  return /* @__PURE__ */ jsx20(MenubarPrimitive.Trigger, {
    "data-slot": "menubar-trigger",
    className: clsx17("flex select-none items-center rounded-sm px-2 py-1 font-medium text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground", className),
    ...props
  });
}
function MenubarContent({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }) {
  return /* @__PURE__ */ jsx20(MenubarPortal, {
    children: /* @__PURE__ */ jsx20(MenubarPrimitive.Content, {
      "data-slot": "menubar-content",
      align,
      alignOffset,
      sideOffset,
      className: clsx17("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in", className),
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
  return /* @__PURE__ */ jsx20(MenubarPrimitive.Item, {
    "data-slot": "menubar-item",
    "data-inset": inset,
    "data-variant": variant,
    className: clsx17("data-[variant=destructive]:*:[svg]:!text-destructive relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[disabled]:opacity-50 data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props
  });
}
function MenubarCheckboxItem({ className, children, checked, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsxs8(MenubarPrimitive.CheckboxItem, {
    "data-slot": "menubar-checkbox-item",
    className: clsx17("relative flex cursor-default select-none items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx20("span", {
        className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
        children: /* @__PURE__ */ jsx20(MenubarPrimitive.ItemIndicator, {
          children: /* @__PURE__ */ jsx20(SpriteIcon, {
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
  return /* @__PURE__ */ jsxs8(MenubarPrimitive.RadioItem, {
    "data-slot": "menubar-radio-item",
    className: clsx17("relative flex cursor-default select-none items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx20("span", {
        className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
        children: /* @__PURE__ */ jsx20(MenubarPrimitive.ItemIndicator, {
          children: /* @__PURE__ */ jsx20(SpriteIcon, {
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
function MenubarLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsx20(MenubarPrimitive.Label, {
    "data-slot": "menubar-label",
    "data-inset": inset,
    className: clsx17("px-2 py-1.5 font-medium text-sm data-[inset]:pl-8", className),
    ...props
  });
}
function MenubarSeparator({ className, ...props }) {
  return /* @__PURE__ */ jsx20(MenubarPrimitive.Separator, {
    "data-slot": "menubar-separator",
    className: clsx17("-mx-1 my-1 h-px bg-border", className),
    ...props
  });
}
function MenubarShortcut({ className, ...props }) {
  return /* @__PURE__ */ jsx20("span", {
    "data-slot": "menubar-shortcut",
    className: clsx17("ml-auto text-muted-foreground text-xs tracking-widest", className),
    ...props
  });
}
function MenubarSub({ ...props }) {
  return /* @__PURE__ */ jsx20(MenubarPrimitive.Sub, {
    "data-slot": "menubar-sub",
    ...props
  });
}
function MenubarSubTrigger({ className, inset, children, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsxs8(MenubarPrimitive.SubTrigger, {
    "data-slot": "menubar-sub-trigger",
    "data-inset": inset,
    className: clsx17("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[inset]:pl-8 data-[state=open]:text-accent-foreground", className),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx20(SpriteIcon, {
        id: "ChevronRight",
        className: "ml-auto h-4 w-4",
        url: spriteUrl
      })
    ]
  });
}
function MenubarSubContent({ className, ...props }) {
  return /* @__PURE__ */ jsx20(MenubarPrimitive.SubContent, {
    "data-slot": "menubar-sub-content",
    className: clsx17("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=closed]:animate-out data-[state=open]:animate-in", className),
    ...props
  });
}

// src/shadcn-ui/components/navigation-menu.tsx
import { cva as cva4 } from "class-variance-authority";
import clsx18 from "clsx";
import { NavigationMenu as NavigationMenuPrimitive } from "radix-ui";
import { jsx as jsx21, jsxs as jsxs9 } from "react/jsx-runtime";
function NavigationMenu({ className, children, viewport = true, ...props }) {
  return /* @__PURE__ */ jsxs9(NavigationMenuPrimitive.Root, {
    "data-slot": "navigation-menu",
    "data-viewport": viewport,
    className: clsx18("group/navigation-menu relative flex max-w-max flex-1 items-center justify-center", className),
    ...props,
    children: [
      children,
      viewport && /* @__PURE__ */ jsx21(NavigationMenuViewport, {})
    ]
  });
}
function NavigationMenuList({ className, ...props }) {
  return /* @__PURE__ */ jsx21(NavigationMenuPrimitive.List, {
    "data-slot": "navigation-menu-list",
    className: clsx18("group flex flex-1 list-none items-center justify-center gap-1", className),
    ...props
  });
}
function NavigationMenuItem({ className, ...props }) {
  return /* @__PURE__ */ jsx21(NavigationMenuPrimitive.Item, {
    "data-slot": "navigation-menu-item",
    className: clsx18("relative", className),
    ...props
  });
}
var navigationMenuTriggerStyle = cva4("group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1");
function NavigationMenuTrigger({ className, children, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsxs9(NavigationMenuPrimitive.Trigger, {
    "data-slot": "navigation-menu-trigger",
    className: clsx18(navigationMenuTriggerStyle(), "group", className),
    ...props,
    children: [
      children,
      " ",
      /* @__PURE__ */ jsx21(SpriteIcon, {
        id: "ChevronDown",
        url: spriteUrl,
        className: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
        "aria-hidden": "true"
      })
    ]
  });
}
function NavigationMenuContent({ className, ...props }) {
  return /* @__PURE__ */ jsx21(NavigationMenuPrimitive.Content, {
    "data-slot": "navigation-menu-content",
    className: clsx18("data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out md:absolute md:w-auto", "group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 **:data-[slot=navigation-menu-link]:focus:outline-none **:data-[slot=navigation-menu-link]:focus:ring-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in", className),
    ...props
  });
}
function NavigationMenuViewport({ className, ...props }) {
  return /* @__PURE__ */ jsx21("div", {
    className: clsx18("absolute top-full left-0 isolate z-50 flex justify-center"),
    children: /* @__PURE__ */ jsx21(NavigationMenuPrimitive.Viewport, {
      "data-slot": "navigation-menu-viewport",
      className: clsx18("data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-top-center overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=closed]:animate-out data-[state=open]:animate-in md:w-[var(--radix-navigation-menu-viewport-width)]", className),
      ...props
    })
  });
}
function NavigationMenuLink({ className, ...props }) {
  return /* @__PURE__ */ jsx21(NavigationMenuPrimitive.Link, {
    "data-slot": "navigation-menu-link",
    className: clsx18("flex flex-col gap-1 rounded-sm p-2 text-sm outline-none transition-all hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", className),
    ...props
  });
}
function NavigationMenuIndicator({ className, ...props }) {
  return /* @__PURE__ */ jsx21(NavigationMenuPrimitive.Indicator, {
    "data-slot": "navigation-menu-indicator",
    className: clsx18("data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=hidden]:animate-out data-[state=visible]:animate-in", className),
    ...props,
    children: /* @__PURE__ */ jsx21("div", {
      className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md"
    })
  });
}

// src/shadcn-ui/components/pagination.tsx
import clsx19 from "clsx";
import { jsx as jsx22, jsxs as jsxs10 } from "react/jsx-runtime";
function Pagination({ className, ...props }) {
  return /* @__PURE__ */ jsx22("nav", {
    "aria-label": "pagination",
    "data-slot": "pagination",
    className: clsx19("mx-auto flex w-full justify-center", className),
    ...props
  });
}
function PaginationContent({ className, ...props }) {
  return /* @__PURE__ */ jsx22("ul", {
    "data-slot": "pagination-content",
    className: clsx19("flex flex-row items-center gap-1", className),
    ...props
  });
}
function PaginationItem({ ...props }) {
  return /* @__PURE__ */ jsx22("li", {
    "data-slot": "pagination-item",
    ...props
  });
}
function PaginationLink({ className, isActive, size = "icon", ...props }) {
  return /* @__PURE__ */ jsx22("a", {
    "aria-current": isActive ? "page" : undefined,
    "data-slot": "pagination-link",
    "data-active": isActive,
    className: clsx19(buttonVariants({
      variant: isActive ? "outline" : "ghost",
      size
    }), className),
    ...props
  });
}
function PaginationPrevious({ className, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsxs10(PaginationLink, {
    "aria-label": "Go to previous page",
    size: "default",
    className: clsx19("gap-1 px-2.5 sm:pl-2.5", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx22(SpriteIcon, {
        id: "ChevronLeft",
        url: spriteUrl
      }),
      /* @__PURE__ */ jsx22("span", {
        className: "hidden sm:block",
        children: "Previous"
      })
    ]
  });
}
function PaginationNext({ className, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsxs10(PaginationLink, {
    "aria-label": "Go to next page",
    size: "default",
    className: clsx19("gap-1 px-2.5 sm:pr-2.5", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx22("span", {
        className: "hidden sm:block",
        children: "Next"
      }),
      /* @__PURE__ */ jsx22(SpriteIcon, {
        id: "ChevronRight",
        url: spriteUrl
      })
    ]
  });
}
function PaginationEllipsis({ className, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsxs10("span", {
    "aria-hidden": true,
    "data-slot": "pagination-ellipsis",
    className: clsx19("flex size-9 items-center justify-center", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx22(SpriteIcon, {
        id: "Ellipsis",
        className: "size-4",
        url: spriteUrl
      }),
      /* @__PURE__ */ jsx22("span", {
        className: "sr-only",
        children: "More pages"
      })
    ]
  });
}

// src/shadcn-ui/components/popover.tsx
import clsx20 from "clsx";
import { Popover as PopoverPrimitive } from "radix-ui";
import { jsx as jsx23 } from "react/jsx-runtime";
function Popover({ ...props }) {
  return /* @__PURE__ */ jsx23(PopoverPrimitive.Root, {
    "data-slot": "popover",
    ...props
  });
}
function PopoverTrigger({ ...props }) {
  return /* @__PURE__ */ jsx23(PopoverPrimitive.Trigger, {
    "data-slot": "popover-trigger",
    ...props
  });
}
function PopoverContent({ className, align = "center", sideOffset = 4, ...props }) {
  return /* @__PURE__ */ jsx23(PopoverPrimitive.Portal, {
    children: /* @__PURE__ */ jsx23(PopoverPrimitive.Content, {
      "data-slot": "popover-content",
      align,
      sideOffset,
      className: clsx20("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[state=closed]:animate-out data-[state=open]:animate-in", className),
      ...props
    })
  });
}
function PopoverAnchor({ ...props }) {
  return /* @__PURE__ */ jsx23(PopoverPrimitive.Anchor, {
    "data-slot": "popover-anchor",
    ...props
  });
}

// src/shadcn-ui/components/progress.tsx
import clsx21 from "clsx";
import { Progress as ProgressPrimitive } from "radix-ui";
import { jsx as jsx24 } from "react/jsx-runtime";
function Progress({ className, value, ...props }) {
  return /* @__PURE__ */ jsx24(ProgressPrimitive.Root, {
    "data-slot": "progress",
    className: clsx21("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className),
    ...props,
    children: /* @__PURE__ */ jsx24(ProgressPrimitive.Indicator, {
      "data-slot": "progress-indicator",
      className: "h-full w-full flex-1 bg-primary transition-all",
      style: { transform: `translateX(-${100 - (value || 0)}%)` }
    })
  });
}
// src/shadcn-ui/components/radio-group.tsx
import clsx22 from "clsx";
import { RadioGroup as RadioGroupPrimitive } from "radix-ui";
import { jsx as jsx25 } from "react/jsx-runtime";
function RadioGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx25(RadioGroupPrimitive.Root, {
    "data-slot": "radio-group",
    className: clsx22("grid gap-3", className),
    ...props
  });
}
function RadioGroupItem({ className, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsx25(RadioGroupPrimitive.Item, {
    "data-slot": "radio-group-item",
    className: clsx22("aspect-square size-4 shrink-0 rounded-full border border-input text-primary shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:ring-destructive/40", className),
    ...props,
    children: /* @__PURE__ */ jsx25(RadioGroupPrimitive.Indicator, {
      "data-slot": "radio-group-indicator",
      className: "relative flex items-center justify-center",
      children: /* @__PURE__ */ jsx25(SpriteIcon, {
        id: "Circle",
        url: spriteUrl,
        className: "-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 size-2 fill-primary"
      })
    })
  });
}

// src/shadcn-ui/components/scroll-area.tsx
import clsx23 from "clsx";
import { ScrollArea as ScrollAreaPrimitive } from "radix-ui";
import { jsx as jsx26, jsxs as jsxs11 } from "react/jsx-runtime";
function ScrollArea({ className, children, ...props }) {
  return /* @__PURE__ */ jsxs11(ScrollAreaPrimitive.Root, {
    "data-slot": "scroll-area",
    className: clsx23("relative", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx26(ScrollAreaPrimitive.Viewport, {
        "data-slot": "scroll-area-viewport",
        className: "size-full rounded-[inherit] outline-none transition-[color,box-shadow] focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50",
        children
      }),
      /* @__PURE__ */ jsx26(ScrollBar, {}),
      /* @__PURE__ */ jsx26(ScrollAreaPrimitive.Corner, {})
    ]
  });
}
function ScrollBar({ className, orientation = "vertical", ...props }) {
  return /* @__PURE__ */ jsx26(ScrollAreaPrimitive.ScrollAreaScrollbar, {
    "data-slot": "scroll-area-scrollbar",
    orientation,
    className: clsx23("flex touch-none select-none p-px transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent", className),
    ...props,
    children: /* @__PURE__ */ jsx26(ScrollAreaPrimitive.ScrollAreaThumb, {
      "data-slot": "scroll-area-thumb",
      className: "relative flex-1 rounded-full bg-border"
    })
  });
}

// src/shadcn-ui/components/select.tsx
import clsx24 from "clsx";
import { Select as SelectPrimitive } from "radix-ui";
import { jsx as jsx27, jsxs as jsxs12 } from "react/jsx-runtime";
function Select({ ...props }) {
  return /* @__PURE__ */ jsx27(SelectPrimitive.Root, {
    "data-slot": "select",
    ...props
  });
}
function SelectGroup({ ...props }) {
  return /* @__PURE__ */ jsx27(SelectPrimitive.Group, {
    "data-slot": "select-group",
    ...props
  });
}
function SelectValue({ ...props }) {
  return /* @__PURE__ */ jsx27(SelectPrimitive.Value, {
    "data-slot": "select-value",
    ...props
  });
}
function SelectTrigger({ className, size = "default", children, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsxs12(SelectPrimitive.Trigger, {
    "data-slot": "select-trigger",
    "data-size": size,
    className: clsx24("flex w-fit items-center justify-between gap-2 whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[size=default]:h-9 data-[size=sm]:h-8 data-[placeholder]:text-muted-foreground *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:hover:bg-input/50 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx27(SelectPrimitive.Icon, {
        asChild: true,
        children: /* @__PURE__ */ jsx27(SpriteIcon, {
          id: "ChevronDown",
          className: "size-4 opacity-50",
          url: spriteUrl
        })
      })
    ]
  });
}
function SelectContent({ className, children, position = "popper", spriteUrl, ...props }) {
  return /* @__PURE__ */ jsx27(SelectPrimitive.Portal, {
    children: /* @__PURE__ */ jsxs12(SelectPrimitive.Content, {
      "data-slot": "select-content",
      className: clsx24("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=closed]:animate-out data-[state=open]:animate-in", position === "popper" && "data-[side=left]:-translate-x-1 data-[side=top]:-translate-y-1 data-[side=right]:translate-x-1 data-[side=bottom]:translate-y-1", className),
      position,
      ...props,
      children: [
        /* @__PURE__ */ jsx27(SelectScrollUpButton, {
          spriteUrl
        }),
        /* @__PURE__ */ jsx27(SelectPrimitive.Viewport, {
          className: clsx24("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
          children
        }),
        /* @__PURE__ */ jsx27(SelectScrollDownButton, {
          spriteUrl
        })
      ]
    })
  });
}
function SelectLabel({ className, ...props }) {
  return /* @__PURE__ */ jsx27(SelectPrimitive.Label, {
    "data-slot": "select-label",
    className: clsx24("px-2 py-1.5 text-muted-foreground text-xs", className),
    ...props
  });
}
function SelectItem({ className, spriteUrl, children, ...props }) {
  return /* @__PURE__ */ jsxs12(SelectPrimitive.Item, {
    "data-slot": "select-item",
    className: clsx24("relative flex w-full cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx27("span", {
        className: "absolute right-2 flex size-3.5 items-center justify-center",
        children: /* @__PURE__ */ jsx27(SelectPrimitive.ItemIndicator, {
          children: /* @__PURE__ */ jsx27(SpriteIcon, {
            id: "Check",
            className: "size-4",
            url: spriteUrl
          })
        })
      }),
      /* @__PURE__ */ jsx27(SelectPrimitive.ItemText, {
        children
      })
    ]
  });
}
function SelectSeparator({ className, ...props }) {
  return /* @__PURE__ */ jsx27(SelectPrimitive.Separator, {
    "data-slot": "select-separator",
    className: clsx24("-mx-1 pointer-events-none my-1 h-px bg-border", className),
    ...props
  });
}
function SelectScrollUpButton({ className, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsx27(SelectPrimitive.ScrollUpButton, {
    "data-slot": "select-scroll-up-button",
    className: clsx24("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx27(SpriteIcon, {
      id: "ChevronUp",
      className: "size-4",
      url: spriteUrl
    })
  });
}
function SelectScrollDownButton({ className, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsx27(SelectPrimitive.ScrollDownButton, {
    "data-slot": "select-scroll-down-button",
    className: clsx24("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx27(SpriteIcon, {
      id: "ChevronDown",
      className: "size-4",
      url: spriteUrl
    })
  });
}

// src/shadcn-ui/components/separator.tsx
import clsx25 from "clsx";
import { Separator as SeparatorPrimitive } from "radix-ui";
import { jsx as jsx28 } from "react/jsx-runtime";
function Separator({ className, orientation = "horizontal", decorative = true, ...props }) {
  return /* @__PURE__ */ jsx28(SeparatorPrimitive.Root, {
    "data-slot": "separator",
    decorative,
    orientation,
    className: clsx25("shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px", className),
    ...props
  });
}
// src/shadcn-ui/components/sheet.tsx
import clsx26 from "clsx";
import { Dialog as SheetPrimitive } from "radix-ui";
import { jsx as jsx29, jsxs as jsxs13 } from "react/jsx-runtime";
function Sheet({ ...props }) {
  return /* @__PURE__ */ jsx29(SheetPrimitive.Root, {
    "data-slot": "sheet",
    ...props
  });
}
function SheetTrigger({ ...props }) {
  return /* @__PURE__ */ jsx29(SheetPrimitive.Trigger, {
    "data-slot": "sheet-trigger",
    ...props
  });
}
function SheetClose({ ...props }) {
  return /* @__PURE__ */ jsx29(SheetPrimitive.Close, {
    "data-slot": "sheet-close",
    ...props
  });
}
function SheetPortal({ ...props }) {
  return /* @__PURE__ */ jsx29(SheetPrimitive.Portal, {
    "data-slot": "sheet-portal",
    ...props
  });
}
function SheetOverlay({ className, ...props }) {
  return /* @__PURE__ */ jsx29(SheetPrimitive.Overlay, {
    "data-slot": "sheet-overlay",
    className: clsx26("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=open]:animate-in", className),
    ...props
  });
}
function SheetContent({ className, children, side = "right", spriteUrl, ...props }) {
  return /* @__PURE__ */ jsxs13(SheetPortal, {
    children: [
      /* @__PURE__ */ jsx29(SheetOverlay, {}),
      /* @__PURE__ */ jsxs13(SheetPrimitive.Content, {
        "data-slot": "sheet-content",
        className: clsx26("fixed z-50 flex flex-col gap-4 bg-background shadow-lg transition ease-in-out data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:duration-300 data-[state=open]:duration-500", side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm", side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm", side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b", side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t", className),
        ...props,
        children: [
          children,
          /* @__PURE__ */ jsxs13(SheetPrimitive.Close, {
            className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
            children: [
              /* @__PURE__ */ jsx29(SpriteIcon, {
                id: "X",
                url: spriteUrl,
                className: "size-4"
              }),
              /* @__PURE__ */ jsx29("span", {
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
  return /* @__PURE__ */ jsx29("div", {
    "data-slot": "sheet-header",
    className: clsx26("flex flex-col gap-1.5 p-4", className),
    ...props
  });
}
function SheetFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx29("div", {
    "data-slot": "sheet-footer",
    className: clsx26("mt-auto flex flex-col gap-2 p-4", className),
    ...props
  });
}
function SheetTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx29(SheetPrimitive.Title, {
    "data-slot": "sheet-title",
    className: clsx26("font-semibold text-foreground", className),
    ...props
  });
}
function SheetDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx29(SheetPrimitive.Description, {
    "data-slot": "sheet-description",
    className: clsx26("text-muted-foreground text-sm", className),
    ...props
  });
}

// src/shadcn-ui/components/sidebar.tsx
import { cva as cva5 } from "class-variance-authority";
import clsx29 from "clsx";
import { Slot as SlotPrimitive4 } from "radix-ui";
import React2 from "react";

// src/shadcn-ui/hooks/use-mobile.ts
import React from "react";
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(undefined);
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

// src/shadcn-ui/components/skeleton.tsx
import clsx27 from "clsx";
import { jsx as jsx30 } from "react/jsx-runtime";
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsx30("div", {
    "data-slot": "skeleton",
    className: clsx27("animate-pulse rounded-md bg-accent", className),
    ...props
  });
}

// src/shadcn-ui/components/tooltip.tsx
import clsx28 from "clsx";
import { Tooltip as TooltipPrimitive } from "radix-ui";
import { jsx as jsx31, jsxs as jsxs14 } from "react/jsx-runtime";
function TooltipProvider({ delayDuration = 0, ...props }) {
  return /* @__PURE__ */ jsx31(TooltipPrimitive.Provider, {
    "data-slot": "tooltip-provider",
    delayDuration,
    ...props
  });
}
function Tooltip({ ...props }) {
  return /* @__PURE__ */ jsx31(TooltipProvider, {
    children: /* @__PURE__ */ jsx31(TooltipPrimitive.Root, {
      "data-slot": "tooltip",
      ...props
    })
  });
}
function TooltipTrigger({ ...props }) {
  return /* @__PURE__ */ jsx31(TooltipPrimitive.Trigger, {
    "data-slot": "tooltip-trigger",
    ...props
  });
}
function TooltipContent({ className, sideOffset = 0, children, ...props }) {
  return /* @__PURE__ */ jsx31(TooltipPrimitive.Portal, {
    children: /* @__PURE__ */ jsxs14(TooltipPrimitive.Content, {
      "data-slot": "tooltip-content",
      sideOffset,
      className: clsx28("fade-in-0 zoom-in-95 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) animate-in text-balance rounded-md bg-primary px-3 py-1.5 text-primary-foreground text-xs data-[state=closed]:animate-out", className),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx31(TooltipPrimitive.Arrow, {
          className: "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-primary fill-primary"
        })
      ]
    })
  });
}

// src/shadcn-ui/components/sidebar.tsx
import { jsx as jsx32, jsxs as jsxs15 } from "react/jsx-runtime";
var SIDEBAR_COOKIE_NAME = "sidebar_state";
var SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
var SIDEBAR_WIDTH = "16rem";
var SIDEBAR_WIDTH_MOBILE = "18rem";
var SIDEBAR_WIDTH_ICON = "3rem";
var SIDEBAR_KEYBOARD_SHORTCUT = "b";
var SidebarContext = React2.createContext(null);
function useSidebar() {
  const context = React2.useContext(SidebarContext);
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
  const [openMobile, setOpenMobile] = React2.useState(false);
  const [_open, _setOpen] = React2.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React2.useCallback((value) => {
    const openState = typeof value === "function" ? value(open) : value;
    if (setOpenProp) {
      setOpenProp(openState);
    } else {
      _setOpen(openState);
    }
    document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
  }, [setOpenProp, open]);
  const toggleSidebar = React2.useCallback(() => {
    return isMobile ? setOpenMobile((open2) => !open2) : setOpen((open2) => !open2);
  }, [isMobile, setOpen, setOpenMobile]);
  React2.useEffect(() => {
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
  const contextValue = React2.useMemo(() => ({
    state,
    open,
    setOpen,
    isMobile,
    openMobile,
    setOpenMobile,
    toggleSidebar
  }), [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]);
  return /* @__PURE__ */ jsx32(SidebarContext.Provider, {
    value: contextValue,
    children: /* @__PURE__ */ jsx32(TooltipProvider, {
      delayDuration: 0,
      children: /* @__PURE__ */ jsx32("div", {
        "data-slot": "sidebar-wrapper",
        style: {
          "--sidebar-width": SIDEBAR_WIDTH,
          "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
          ...style
        },
        className: clsx29("group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar", className),
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
  spriteUrl,
  ...props
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
  if (collapsible === "none") {
    return /* @__PURE__ */ jsx32("div", {
      "data-slot": "sidebar",
      className: clsx29("flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground", className),
      ...props,
      children
    });
  }
  if (isMobile) {
    return /* @__PURE__ */ jsx32(Sheet, {
      open: openMobile,
      onOpenChange: setOpenMobile,
      ...props,
      children: /* @__PURE__ */ jsxs15(SheetContent, {
        "data-sidebar": "sidebar",
        "data-slot": "sidebar",
        "data-mobile": "true",
        className: "w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
        style: {
          "--sidebar-width": SIDEBAR_WIDTH_MOBILE
        },
        side,
        spriteUrl,
        children: [
          /* @__PURE__ */ jsxs15(SheetHeader, {
            className: "sr-only",
            children: [
              /* @__PURE__ */ jsx32(SheetTitle, {
                children: "Sidebar"
              }),
              /* @__PURE__ */ jsx32(SheetDescription, {
                children: "Displays the mobile sidebar."
              })
            ]
          }),
          /* @__PURE__ */ jsx32("div", {
            className: "flex h-full w-full flex-col",
            children
          })
        ]
      })
    });
  }
  return /* @__PURE__ */ jsxs15("div", {
    className: "group peer hidden text-sidebar-foreground md:block",
    "data-state": state,
    "data-collapsible": state === "collapsed" ? collapsible : "",
    "data-variant": variant,
    "data-side": side,
    "data-slot": "sidebar",
    children: [
      /* @__PURE__ */ jsx32("div", {
        "data-slot": "sidebar-gap",
        className: clsx29("relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)")
      }),
      /* @__PURE__ */ jsx32("div", {
        "data-slot": "sidebar-container",
        className: clsx29("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex", side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]", variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l", className),
        ...props,
        children: /* @__PURE__ */ jsx32("div", {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar-inner",
          className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow-sm",
          children
        })
      })
    ]
  });
}
function SidebarTrigger({ className, onClick, spriteUrl, ...props }) {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsxs15(Button, {
    "data-sidebar": "trigger",
    "data-slot": "sidebar-trigger",
    variant: "ghost",
    size: "icon",
    className: clsx29("size-7", className),
    onClick: (event) => {
      onClick?.(event);
      toggleSidebar();
    },
    ...props,
    children: [
      /* @__PURE__ */ jsx32(SpriteIcon, {
        id: "PanelLeft",
        url: spriteUrl
      }),
      /* @__PURE__ */ jsx32("span", {
        className: "sr-only",
        children: "Toggle Sidebar"
      })
    ]
  });
}
function SidebarRail({ className, ...props }) {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsx32("button", {
    "data-sidebar": "rail",
    "data-slot": "sidebar-rail",
    "aria-label": "Toggle Sidebar",
    tabIndex: -1,
    onClick: toggleSidebar,
    title: "Toggle Sidebar",
    className: clsx29("-translate-x-1/2 group-data-[side=left]:-right-4 absolute inset-y-0 z-20 hidden w-4 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=right]:left-0 sm:flex", "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize", "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize", "group-data-[collapsible=offcanvas]:translate-x-0 hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:after:left-full", "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", className),
    ...props
  });
}
function SidebarInset({ className, ...props }) {
  return /* @__PURE__ */ jsx32("main", {
    "data-slot": "sidebar-inset",
    className: clsx29("relative flex w-full flex-1 flex-col bg-background", "md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm", className),
    ...props
  });
}
function SidebarInput({ className, ...props }) {
  return /* @__PURE__ */ jsx32(Input, {
    "data-slot": "sidebar-input",
    "data-sidebar": "input",
    className: clsx29("h-8 w-full bg-background shadow-none", className),
    ...props
  });
}
function SidebarHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx32("div", {
    "data-slot": "sidebar-header",
    "data-sidebar": "header",
    className: clsx29("flex flex-col gap-2 p-2", className),
    ...props
  });
}
function SidebarFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx32("div", {
    "data-slot": "sidebar-footer",
    "data-sidebar": "footer",
    className: clsx29("flex flex-col gap-2 p-2", className),
    ...props
  });
}
function SidebarSeparator({ className, ...props }) {
  return /* @__PURE__ */ jsx32(Separator, {
    "data-slot": "sidebar-separator",
    "data-sidebar": "separator",
    className: clsx29("mx-2 w-auto bg-sidebar-border", className),
    ...props
  });
}
function SidebarContent({ className, ...props }) {
  return /* @__PURE__ */ jsx32("div", {
    "data-slot": "sidebar-content",
    "data-sidebar": "content",
    className: clsx29("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", className),
    ...props
  });
}
function SidebarGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx32("div", {
    "data-slot": "sidebar-group",
    "data-sidebar": "group",
    className: clsx29("relative flex w-full min-w-0 flex-col p-2", className),
    ...props
  });
}
function SidebarGroupLabel({ className, asChild = false, ...props }) {
  const Comp = asChild ? SlotPrimitive4.Slot : "div";
  return /* @__PURE__ */ jsx32(Comp, {
    "data-slot": "sidebar-group-label",
    "data-sidebar": "group-label",
    className: clsx29("flex h-8 shrink-0 items-center rounded-md px-2 font-medium text-sidebar-foreground/70 text-xs outline-hidden ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", className),
    ...props
  });
}
function SidebarGroupAction({ className, asChild = false, ...props }) {
  const Comp = asChild ? SlotPrimitive4.Slot : "button";
  return /* @__PURE__ */ jsx32(Comp, {
    "data-slot": "sidebar-group-action",
    "data-sidebar": "group-action",
    className: clsx29("absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-hidden ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "after:-inset-2 after:absolute md:after:hidden", "group-data-[collapsible=icon]:hidden", className),
    ...props
  });
}
function SidebarGroupContent({ className, ...props }) {
  return /* @__PURE__ */ jsx32("div", {
    "data-slot": "sidebar-group-content",
    "data-sidebar": "group-content",
    className: clsx29("w-full text-sm", className),
    ...props
  });
}
function SidebarMenu({ className, ...props }) {
  return /* @__PURE__ */ jsx32("ul", {
    "data-slot": "sidebar-menu",
    "data-sidebar": "menu",
    className: clsx29("flex w-full min-w-0 flex-col gap-1", className),
    ...props
  });
}
function SidebarMenuItem({ className, ...props }) {
  return /* @__PURE__ */ jsx32("li", {
    "data-slot": "sidebar-menu-item",
    "data-sidebar": "menu-item",
    className: clsx29("group/menu-item relative", className),
    ...props
  });
}
var sidebarMenuButtonVariants = cva5("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
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
  const Comp = asChild ? SlotPrimitive4.Slot : "button";
  const { isMobile, state } = useSidebar();
  const button = /* @__PURE__ */ jsx32(Comp, {
    "data-slot": "sidebar-menu-button",
    "data-sidebar": "menu-button",
    "data-size": size,
    "data-active": isActive,
    className: clsx29(sidebarMenuButtonVariants({ variant, size }), className),
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
  return /* @__PURE__ */ jsxs15(Tooltip, {
    children: [
      /* @__PURE__ */ jsx32(TooltipTrigger, {
        asChild: true,
        children: button
      }),
      /* @__PURE__ */ jsx32(TooltipContent, {
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
  const Comp = asChild ? SlotPrimitive4.Slot : "button";
  return /* @__PURE__ */ jsx32(Comp, {
    "data-slot": "sidebar-menu-action",
    "data-sidebar": "menu-action",
    className: clsx29("absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-hidden ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0", "after:-inset-2 after:absolute md:after:hidden", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", showOnHover && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0", className),
    ...props
  });
}
function SidebarMenuBadge({ className, ...props }) {
  return /* @__PURE__ */ jsx32("div", {
    "data-slot": "sidebar-menu-badge",
    "data-sidebar": "menu-badge",
    className: clsx29("pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 font-medium text-sidebar-foreground text-xs tabular-nums", "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", className),
    ...props
  });
}
function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}) {
  const width = React2.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);
  return /* @__PURE__ */ jsxs15("div", {
    "data-slot": "sidebar-menu-skeleton",
    "data-sidebar": "menu-skeleton",
    className: clsx29("flex h-8 items-center gap-2 rounded-md px-2", className),
    ...props,
    children: [
      showIcon && /* @__PURE__ */ jsx32(Skeleton, {
        className: "size-4 rounded-md",
        "data-sidebar": "menu-skeleton-icon"
      }),
      /* @__PURE__ */ jsx32(Skeleton, {
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
  return /* @__PURE__ */ jsx32("ul", {
    "data-slot": "sidebar-menu-sub",
    "data-sidebar": "menu-sub",
    className: clsx29("mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-sidebar-border border-l px-2.5 py-0.5", "group-data-[collapsible=icon]:hidden", className),
    ...props
  });
}
function SidebarMenuSubItem({ className, ...props }) {
  return /* @__PURE__ */ jsx32("li", {
    "data-slot": "sidebar-menu-sub-item",
    "data-sidebar": "menu-sub-item",
    className: clsx29("group/menu-sub-item relative", className),
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
  const Comp = asChild ? SlotPrimitive4.Slot : "a";
  return /* @__PURE__ */ jsx32(Comp, {
    "data-slot": "sidebar-menu-sub-button",
    "data-sidebar": "menu-sub-button",
    "data-size": size,
    "data-active": isActive,
    className: clsx29("-translate-x-px flex h-7 min-w-0 items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-hidden ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground", "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground", size === "sm" && "text-xs", size === "md" && "text-sm", "group-data-[collapsible=icon]:hidden", className),
    ...props
  });
}
// src/shadcn-ui/components/slider.tsx
import clsx30 from "clsx";
import { Slider as SliderPrimitive } from "radix-ui";
import React3 from "react";
import { jsx as jsx33, jsxs as jsxs16 } from "react/jsx-runtime";
function Slider({ className, defaultValue, value, min = 0, max = 100, ...props }) {
  const _values = React3.useMemo(() => Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max], [value, defaultValue, min, max]);
  return /* @__PURE__ */ jsxs16(SliderPrimitive.Root, {
    "data-slot": "slider",
    defaultValue,
    value,
    min,
    max,
    className: clsx30("relative flex w-full touch-none select-none items-center data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col data-[disabled]:opacity-50", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx33(SliderPrimitive.Track, {
        "data-slot": "slider-track",
        className: clsx30("relative grow overflow-hidden rounded-full bg-muted data-[orientation=horizontal]:h-1.5 data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-1.5"),
        children: /* @__PURE__ */ jsx33(SliderPrimitive.Range, {
          "data-slot": "slider-range",
          className: clsx30("absolute bg-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full")
        })
      }),
      Array.from({ length: _values.length }, (_, index) => /* @__PURE__ */ jsx33(SliderPrimitive.Thumb, {
        "data-slot": "slider-thumb",
        className: "block size-4 shrink-0 rounded-full border border-primary bg-background shadow-sm ring-ring/50 transition-[color,box-shadow] hover:ring-4 focus-visible:outline-hidden focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50"
      }, index))
    ]
  });
}
// src/shadcn-ui/components/sonner.tsx
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import { jsx as jsx34 } from "react/jsx-runtime";
var Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();
  return /* @__PURE__ */ jsx34(Sonner, {
    theme,
    className: "toaster group",
    style: {
      "--normal-bg": "var(--popover)",
      "--normal-text": "var(--popover-foreground)",
      "--normal-border": "var(--border)"
    },
    ...props
  });
};
// src/shadcn-ui/components/switch.tsx
import clsx31 from "clsx";
import { Switch as SwitchPrimitive } from "radix-ui";
import { jsx as jsx35 } from "react/jsx-runtime";
function Switch({ className, ...props }) {
  return /* @__PURE__ */ jsx35(SwitchPrimitive.Root, {
    "data-slot": "switch",
    className: clsx31("peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input/80", className),
    ...props,
    children: /* @__PURE__ */ jsx35(SwitchPrimitive.Thumb, {
      "data-slot": "switch-thumb",
      className: clsx31("pointer-events-none block size-4 rounded-full bg-background ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0 dark:data-[state=checked]:bg-primary-foreground dark:data-[state=unchecked]:bg-foreground")
    })
  });
}
// src/shadcn-ui/components/table.tsx
import clsx32 from "clsx";
import { jsx as jsx36 } from "react/jsx-runtime";
function Table({ className, ...props }) {
  return /* @__PURE__ */ jsx36("div", {
    "data-slot": "table-container",
    className: "relative w-full overflow-x-auto",
    children: /* @__PURE__ */ jsx36("table", {
      "data-slot": "table",
      className: clsx32("w-full caption-bottom text-sm", className),
      ...props
    })
  });
}
function TableHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx36("thead", {
    "data-slot": "table-header",
    className: clsx32("[&_tr]:border-b", className),
    ...props
  });
}
function TableBody({ className, ...props }) {
  return /* @__PURE__ */ jsx36("tbody", {
    "data-slot": "table-body",
    className: clsx32("[&_tr:last-child]:border-0", className),
    ...props
  });
}
function TableFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx36("tfoot", {
    "data-slot": "table-footer",
    className: clsx32("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
    ...props
  });
}
function TableRow({ className, ...props }) {
  return /* @__PURE__ */ jsx36("tr", {
    "data-slot": "table-row",
    className: clsx32("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
    ...props
  });
}
function TableHead({ className, ...props }) {
  return /* @__PURE__ */ jsx36("th", {
    "data-slot": "table-head",
    className: clsx32("h-10 whitespace-nowrap px-2 text-left align-middle font-medium text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
    ...props
  });
}
function TableCell({ className, ...props }) {
  return /* @__PURE__ */ jsx36("td", {
    "data-slot": "table-cell",
    className: clsx32("whitespace-nowrap p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
    ...props
  });
}
function TableCaption({ className, ...props }) {
  return /* @__PURE__ */ jsx36("caption", {
    "data-slot": "table-caption",
    className: clsx32("mt-4 text-muted-foreground text-sm", className),
    ...props
  });
}

// src/shadcn-ui/components/tabs.tsx
import clsx33 from "clsx";
import { Tabs as TabsPrimitive } from "radix-ui";
import { jsx as jsx37 } from "react/jsx-runtime";
function Tabs({ className, ...props }) {
  return /* @__PURE__ */ jsx37(TabsPrimitive.Root, {
    "data-slot": "tabs",
    className: clsx33("flex flex-col gap-2", className),
    ...props
  });
}
function TabsList({ className, ...props }) {
  return /* @__PURE__ */ jsx37(TabsPrimitive.List, {
    "data-slot": "tabs-list",
    className: clsx33("inline-flex h-9 w-fit items-center justify-center rounded-lg bg-muted p-[3px] text-muted-foreground", className),
    ...props
  });
}
function TabsTrigger({ className, ...props }) {
  return /* @__PURE__ */ jsx37(TabsPrimitive.Trigger, {
    "data-slot": "tabs-trigger",
    className: clsx33("inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-transparent px-2 py-1 font-medium text-foreground text-sm transition-[color,box-shadow] focus-visible:border-ring focus-visible:outline-1 focus-visible:outline-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:shadow-sm dark:text-muted-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props
  });
}
function TabsContent({ className, ...props }) {
  return /* @__PURE__ */ jsx37(TabsPrimitive.Content, {
    "data-slot": "tabs-content",
    className: clsx33("flex-1 outline-none", className),
    ...props
  });
}

// src/shadcn-ui/components/textarea.tsx
import clsx34 from "clsx";
import { jsx as jsx38 } from "react/jsx-runtime";
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsx38("textarea", {
    "data-slot": "textarea",
    className: clsx34("field-sizing-content flex min-h-16 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-destructive/40", className),
    ...props
  });
}
// src/shadcn-ui/components/toggle-group.tsx
import clsx36 from "clsx";
import { ToggleGroup as ToggleGroupPrimitive } from "radix-ui";
import React4 from "react";

// src/shadcn-ui/components/toggle.tsx
import { cva as cva6 } from "class-variance-authority";
import clsx35 from "clsx";
import { Toggle as TogglePrimitive } from "radix-ui";
import { jsx as jsx39 } from "react/jsx-runtime";
var toggleVariants = cva6("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap", {
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
  return /* @__PURE__ */ jsx39(TogglePrimitive.Root, {
    "data-slot": "toggle",
    className: clsx35(toggleVariants({ variant, size, className })),
    ...props
  });
}

// src/shadcn-ui/components/toggle-group.tsx
import { jsx as jsx40 } from "react/jsx-runtime";
var ToggleGroupContext = React4.createContext({
  size: "default",
  variant: "default"
});
function ToggleGroup({ className, variant, size, children, ...props }) {
  return /* @__PURE__ */ jsx40(ToggleGroupPrimitive.Root, {
    "data-slot": "toggle-group",
    "data-variant": variant,
    "data-size": size,
    className: clsx36("group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs", className),
    ...props,
    children: /* @__PURE__ */ jsx40(ToggleGroupContext.Provider, {
      value: { variant, size },
      children
    })
  });
}
function ToggleGroupItem({ className, children, variant, size, ...props }) {
  const context = React4.useContext(ToggleGroupContext);
  return /* @__PURE__ */ jsx40(ToggleGroupPrimitive.Item, {
    "data-slot": "toggle-group-item",
    "data-variant": context.variant || variant,
    "data-size": context.size || size,
    className: clsx36(toggleVariants({
      variant: context.variant || variant,
      size: context.size || size
    }), "min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l", className),
    ...props,
    children
  });
}

// src/shadcn-ui/custom/form.tsx
import clsx37 from "clsx";
import { Slot as SlotPrimitive5 } from "radix-ui";
import React5 from "react";
import { Form as RouterForm } from "react-router";
import { jsx as jsx41 } from "react/jsx-runtime";
var Form = RouterForm;
var FormFieldContext = React5.createContext({});
var FormField = ({ name, children }) => {
  return /* @__PURE__ */ jsx41(FormFieldContext.Provider, {
    value: { name },
    children
  });
};
var useFormField = () => {
  const fieldContext = React5.useContext(FormFieldContext);
  const itemContext = React5.useContext(FormItemContext);
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
var FormItemContext = React5.createContext({});
function FormItem({ className, ...props }) {
  const id = React5.useId();
  return /* @__PURE__ */ jsx41(FormItemContext.Provider, {
    value: { id },
    children: /* @__PURE__ */ jsx41("div", {
      "data-slot": "form-item",
      className: clsx37("grid gap-2", className),
      ...props
    })
  });
}
function FormLabel({ className, ...props }) {
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ jsx41(Label, {
    "data-slot": "form-label",
    "data-error": !!error,
    className: clsx37("data-[error=true]:text-destructive", className),
    htmlFor: formItemId,
    ...props
  });
}
function FormControl({ ...props }) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ jsx41(SlotPrimitive5.Slot, {
    "data-slot": "form-control",
    id: formItemId,
    "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
    "aria-invalid": !!error,
    ...props
  });
}
function FormDescription({ className, ...props }) {
  const { formDescriptionId } = useFormField();
  return /* @__PURE__ */ jsx41("p", {
    "data-slot": "form-description",
    id: formDescriptionId,
    className: clsx37("text-muted-foreground text-sm", className),
    ...props
  });
}
function FormMessage({ className, ...props }) {
  const { error, formMessageId } = useFormField();
  const body = props.children;
  if (!body) {
    return null;
  }
  return /* @__PURE__ */ jsx41("p", {
    "data-slot": "form-message",
    id: formMessageId,
    className: clsx37("text-destructive text-sm", className),
    ...props,
    children: body
  });
}
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
// src/shadcn-ui/custom/intent.tsx
import { jsx as jsx42 } from "react/jsx-runtime";
function Intent({ value, name = "intent" }) {
  return /* @__PURE__ */ jsx42("input", {
    type: "hidden",
    name,
    value
  });
}
// src/shadcn-ui/custom/link.tsx
import React6 from "react";
import { Link as RouterLink } from "react-router";
import { jsx as jsx43 } from "react/jsx-runtime";
var Link = React6.forwardRef(function Link2(props, ref) {
  return /* @__PURE__ */ jsx43(RouterLink, {
    ...props,
    to: props.href,
    ref
  });
});
// src/shadcn-ui/custom/spinner.tsx
import clsx38 from "clsx";
import { jsx as jsx44 } from "react/jsx-runtime";
function Spinner({ className, spriteUrl, iconId = "Loader" }) {
  return /* @__PURE__ */ jsx44(SpriteIcon, {
    id: iconId,
    url: spriteUrl,
    className: clsx38(className, "animate-spin")
  });
}
// src/shadcn-ui/hooks/use-media-query.ts
import * as React7 from "react";
function useMediaQuery(query) {
  const [value, setValue] = React7.useState(false);
  React7.useEffect(() => {
    function onChange(event) {
      setValue(event.matches);
    }
    const result = matchMedia(query);
    result.addEventListener("change", onChange);
    setValue(result.matches);
    return () => result.removeEventListener("change", onChange);
  }, [query]);
  return value;
}

// src/shadcn-ui/index.ts
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
var HoverCard2 = Object.assign(HoverCard, {
  Trigger: HoverCardTrigger,
  Content: HoverCardContent
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
var Form2 = Object.assign(Form, {
  Item: FormItem,
  Label: FormLabel,
  Control: FormControl,
  Description: FormDescription,
  Message: FormMessage,
  Field: FormField
});
export {
  useSidebar,
  useMediaQuery,
  useIsMobile,
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
  Menubar2 as Menubar,
  Link,
  Label,
  Intent,
  Input,
  HoverCard2 as HoverCard,
  Form2 as Form,
  DropdownMenu2 as DropdownMenu,
  Dialog2 as Dialog,
  ContextMenu2 as ContextMenu,
  Command2 as Command,
  Collapsible2 as Collapsible,
  Checkbox,
  Card2 as Card,
  Button2 as Button,
  Breadcrumb2 as Breadcrumb,
  Badge2 as Badge,
  Avatar2 as Avatar,
  AspectRatio,
  AlertDialog2 as AlertDialog,
  Alert2 as Alert,
  Accordion2 as Accordion
};

//# debugId=EDA398A5ADAD542964756E2164756E21
