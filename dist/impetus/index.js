// src/impetus/index.ts
import { ThemeProvider } from "next-themes";

// src/impetus/LoadingBar.tsx
import clsx from "clsx";
import { memo } from "react";
import { jsx } from "react/jsx-runtime";
var LoadingBar = memo(({ className }) => /* @__PURE__ */ jsx("div", {
  className: clsx("loading-bar", className)
}));
// src/impetus/NavMenu.tsx
import clsx3 from "clsx";
import { createContext, useContext } from "react";
import { useLocation } from "react-router";

// src/shadcn-ui/components/navigation-menu.tsx
import { cva } from "class-variance-authority";
import clsx2 from "clsx";
import { NavigationMenu as NavigationMenuPrimitive } from "radix-ui";

// src/images/SpriteIcon.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function SpriteIcon({ url, id, ...props }) {
  return /* @__PURE__ */ jsx2("svg", {
    ...props,
    children: id ? /* @__PURE__ */ jsx2("use", {
      href: `${url}#${id}`
    }) : /* @__PURE__ */ jsx2("use", {
      href: `${url}`
    })
  });
}

// src/shadcn-ui/components/navigation-menu.tsx
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
function NavigationMenu({ className, children, viewport = true, ...props }) {
  return /* @__PURE__ */ jsxs(NavigationMenuPrimitive.Root, {
    "data-slot": "navigation-menu",
    "data-viewport": viewport,
    className: clsx2("group/navigation-menu relative flex max-w-max flex-1 items-center justify-center", className),
    ...props,
    children: [
      children,
      viewport && /* @__PURE__ */ jsx3(NavigationMenuViewport, {})
    ]
  });
}
function NavigationMenuList({ className, ...props }) {
  return /* @__PURE__ */ jsx3(NavigationMenuPrimitive.List, {
    "data-slot": "navigation-menu-list",
    className: clsx2("group flex flex-1 list-none items-center justify-center gap-1", className),
    ...props
  });
}
function NavigationMenuItem({ className, ...props }) {
  return /* @__PURE__ */ jsx3(NavigationMenuPrimitive.Item, {
    "data-slot": "navigation-menu-item",
    className: clsx2("relative", className),
    ...props
  });
}
var navigationMenuTriggerStyle = cva("group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1");
function NavigationMenuTrigger({ className, children, spriteUrl, ...props }) {
  return /* @__PURE__ */ jsxs(NavigationMenuPrimitive.Trigger, {
    "data-slot": "navigation-menu-trigger",
    className: clsx2(navigationMenuTriggerStyle(), "group", className),
    ...props,
    children: [
      children,
      " ",
      /* @__PURE__ */ jsx3(SpriteIcon, {
        id: "ChevronDown",
        url: spriteUrl,
        className: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
        "aria-hidden": "true"
      })
    ]
  });
}
function NavigationMenuContent({ className, ...props }) {
  return /* @__PURE__ */ jsx3(NavigationMenuPrimitive.Content, {
    "data-slot": "navigation-menu-content",
    className: clsx2("data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out md:absolute md:w-auto", "group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 **:data-[slot=navigation-menu-link]:focus:outline-none **:data-[slot=navigation-menu-link]:focus:ring-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in", className),
    ...props
  });
}
function NavigationMenuViewport({ className, ...props }) {
  return /* @__PURE__ */ jsx3("div", {
    className: clsx2("absolute top-full left-0 isolate z-50 flex justify-center"),
    children: /* @__PURE__ */ jsx3(NavigationMenuPrimitive.Viewport, {
      "data-slot": "navigation-menu-viewport",
      className: clsx2("data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-top-center overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=closed]:animate-out data-[state=open]:animate-in md:w-[var(--radix-navigation-menu-viewport-width)]", className),
      ...props
    })
  });
}
function NavigationMenuLink({ className, ...props }) {
  return /* @__PURE__ */ jsx3(NavigationMenuPrimitive.Link, {
    "data-slot": "navigation-menu-link",
    className: clsx2("flex flex-col gap-1 rounded-sm p-2 text-sm outline-none transition-all hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", className),
    ...props
  });
}

// src/impetus/NavMenu.tsx
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
var LocationContext = createContext("");
var StackMenu3 = ({ navConfigItems, navFilters, menuClass, spriteUrl, children, ...props }) => {
  const location = useLocation();
  return /* @__PURE__ */ jsx4(LocationContext.Provider, {
    value: location.pathname,
    children: /* @__PURE__ */ jsxs2("div", {
      className: clsx3("flex min-h-svh w-full flex-col", menuClass),
      ...props,
      children: [
        /* @__PURE__ */ jsx4("header", {
          className: "border-b bg-background/95 backdrop-blur supports-backdrop-blur:bg-background/60",
          children: /* @__PURE__ */ jsx4("div", {
            className: "flex h-14 w-full items-center",
            children: /* @__PURE__ */ jsx4(NavMenuFactory, {
              navConfigItems,
              navFilters,
              spriteUrl
            })
          })
        }),
        children && /* @__PURE__ */ jsx4("main", {
          className: "flex-1",
          children: /* @__PURE__ */ jsx4("div", {
            className: "container py-6",
            children
          })
        })
      ]
    })
  });
};
var NavMenuFactory = ({ navConfigItems, navFilters = [], spriteUrl }) => {
  const shouldShowItem = (item) => {
    if (!item.filter || item.filter.length === 0)
      return true;
    return item.filter.some((filter) => navFilters.includes(filter));
  };
  const filteredSections = navFilters.length === 0 ? navConfigItems : navConfigItems.map((section) => ({
    section: section.section.filter(shouldShowItem).map((item) => {
      if (item.submenu) {
        return {
          ...item,
          submenu: item.submenu.filter(shouldShowItem)
        };
      }
      return item;
    })
  })).filter((section) => section.section.length > 0);
  return /* @__PURE__ */ jsx4("div", {
    className: "w-full flex-1 px-4",
    children: /* @__PURE__ */ jsx4(NavigationMenu, {
      className: "w-full max-w-none",
      viewport: false,
      children: /* @__PURE__ */ jsx4(NavigationMenuList, {
        className: "flex w-full",
        children: filteredSections.map((section, idx) => /* @__PURE__ */ jsx4("div", {
          className: "flex flex-1 items-center justify-center gap-1",
          children: section.section.map((sectionItem) => /* @__PURE__ */ jsx4(NavMenuItem, {
            sectionItem,
            spriteUrl
          }, sectionItem.ref))
        }, `section-${idx}`))
      })
    })
  });
};
var NavMenuItem = ({ sectionItem, spriteUrl }) => {
  const pathname = useContext(LocationContext);
  const isActive = !!(sectionItem.href && pathname === sectionItem.href);
  const hasActiveChild = sectionItem.submenu?.some((item) => item.href && pathname === item.href);
  if (sectionItem.submenu && sectionItem.submenu.length > 0) {
    return /* @__PURE__ */ jsxs2(NavigationMenuItem, {
      children: [
        /* @__PURE__ */ jsx4(NavigationMenuTrigger, {
          spriteUrl,
          className: clsx3(hasActiveChild && "bg-accent text-accent-foreground"),
          children: /* @__PURE__ */ jsxs2("div", {
            className: "flex items-center gap-2",
            children: [
              sectionItem.component,
              "label" in sectionItem && sectionItem.label && /* @__PURE__ */ jsx4("span", {
                children: sectionItem.label
              })
            ]
          })
        }),
        /* @__PURE__ */ jsx4(NavigationMenuContent, {
          className: "data-[motion^=from-]:fade-in-0 data-[motion^=to-]:fade-out-0 data-[motion^=from-]:zoom-in-95 data-[motion^=to-]:zoom-out-95 left-0 min-w-[250px]",
          children: /* @__PURE__ */ jsx4("div", {
            className: "grid w-full gap-1 p-2",
            children: sectionItem.submenu.map((subItem) => {
              const subIsActive = !!(subItem.href && pathname === subItem.href);
              return /* @__PURE__ */ jsx4(NavigationMenuLink, {
                asChild: true,
                className: clsx3("block select-none rounded-sm p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground", subIsActive && "bg-accent text-accent-foreground"),
                children: /* @__PURE__ */ jsx4("a", {
                  href: subItem.href || "#",
                  children: /* @__PURE__ */ jsxs2("div", {
                    className: "flex items-center gap-2",
                    children: [
                      subItem.component,
                      "label" in subItem && subItem.label && /* @__PURE__ */ jsx4("div", {
                        children: /* @__PURE__ */ jsx4("div", {
                          className: "font-medium text-sm",
                          children: subItem.label
                        })
                      })
                    ]
                  })
                })
              }, subItem.ref);
            })
          })
        })
      ]
    });
  }
  return /* @__PURE__ */ jsx4(NavigationMenuItem, {
    children: /* @__PURE__ */ jsx4(NavigationMenuLink, {
      asChild: true,
      className: clsx3(navigationMenuTriggerStyle(), isActive && "bg-accent text-accent-foreground"),
      children: /* @__PURE__ */ jsx4("a", {
        href: sectionItem.href || "#",
        children: /* @__PURE__ */ jsxs2("div", {
          className: "flex items-center gap-2",
          children: [
            sectionItem.component,
            "label" in sectionItem && sectionItem.label && /* @__PURE__ */ jsx4("span", {
              children: sectionItem.label
            })
          ]
        })
      })
    })
  });
};
// src/impetus/Page.tsx
import clsx4 from "clsx";

// src/shadcn-ui/custom/link.tsx
import React from "react";
import { Link as RouterLink } from "react-router";
import { jsx as jsx5 } from "react/jsx-runtime";
var Link = React.forwardRef(function Link2(props, ref) {
  return /* @__PURE__ */ jsx5(RouterLink, {
    ...props,
    to: props.href,
    ref
  });
});

// src/impetus/Page.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
function Header({ children, className }) {
  return /* @__PURE__ */ jsx6("header", {
    className: "print:hidden",
    children: /* @__PURE__ */ jsx6(Link, {
      href: "/",
      children: /* @__PURE__ */ jsx6("div", {
        className: "flex flex-col md:py-8 md:pl-8",
        children: /* @__PURE__ */ jsx6("div", {
          className: clsx4("flew-row flex w-full justify-around md:justify-start md:gap-x-8", className),
          children
        })
      })
    })
  });
}
function Footer({ children, className }) {
  return /* @__PURE__ */ jsx6("footer", {
    className: "sticky top-[100vh] flex w-full flex-col items-center bg-opacity-100 pt-12 pb-8 print:hidden",
    children: /* @__PURE__ */ jsx6("p", {
      className: clsx4("text-xs uppercase text-opacity-30", className),
      children
    })
  });
}
// src/impetus/ThemeSwitch.tsx
import clsx5 from "clsx";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { jsx as jsx7 } from "react/jsx-runtime";
var THEME_OPTIONS = { theme: { light: "light", dark: "dark" } };
var ThemeSwitch = ({ theme = THEME_OPTIONS, spriteUrl, className, classTheme }) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  if (!mounted)
    return null;
  return /* @__PURE__ */ jsx7("button", {
    type: "button",
    className: clsx5("size-5 hover:animate-rotate", classTheme),
    onClick: (e) => {
      setTheme(resolvedTheme === theme.theme.dark ? theme.theme.light : theme.theme.dark);
      e.preventDefault();
      e.stopPropagation();
    },
    "aria-label": "theme switch",
    children: resolvedTheme === theme.theme.dark ? /* @__PURE__ */ jsx7(SpriteIcon, {
      url: spriteUrl,
      id: "Moon",
      className: clsx5("size-5", className)
    }) : /* @__PURE__ */ jsx7(SpriteIcon, {
      url: spriteUrl,
      id: "Sun",
      className: clsx5("size-5", className)
    })
  });
};
export {
  ThemeSwitch,
  ThemeProvider,
  THEME_OPTIONS,
  StackMenu3,
  LoadingBar,
  Header,
  Footer
};

//# debugId=2BBB53FABEE0A4D464756E2164756E21
