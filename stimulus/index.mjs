import {
  Dropdown,
  Link,
  Navbar,
  Sidebar,
  SidebarLayout,
  StackedLayout
} from "../chunk-4KVOBAK4.mjs";

// src/stimulus/NavMenu.tsx
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { toBase } from "@ycore/forge/utils";
import { Fragment, createContext, useContext } from "react";
import clsx from "clsx";
import { useLocation } from "react-router";
import { jsx, jsxs } from "react/jsx-runtime";
var LocationContext = createContext("");
var SideMenu = ({ navConfigItems, navFilters, menuClass, ...props }) => {
  const { children, ...rest } = props;
  const location = useLocation();
  const { navbar, sidebar } = NavMenuFactory({ navConfigItems, navFilters });
  return /* @__PURE__ */ jsx(LocationContext.Provider, { value: location.pathname, children: /* @__PURE__ */ jsx(SidebarLayout, { navbar, sidebar, className: menuClass, ...rest, children }) });
};
var StackMenu = ({ navConfigItems, navFilters, menuClass, ...props }) => {
  const { children, ...rest } = props;
  const location = useLocation();
  const { navbar, sidebar } = NavMenuFactory({ navConfigItems, navFilters });
  return /* @__PURE__ */ jsx(LocationContext.Provider, { value: location.pathname, children: /* @__PURE__ */ jsx(StackedLayout, { navbar, sidebar, className: menuClass, ...rest, children }) });
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
    navbar: /* @__PURE__ */ jsx(Navbar, { children: filteredItems.map((sections, idx) => {
      const keyIdx = toBase(idx);
      return /* @__PURE__ */ jsxs(Fragment, { children: [
        idx === 1 && /* @__PURE__ */ jsx(Navbar.Spacer, {}, `space-${keyIdx}`),
        /* @__PURE__ */ jsxs(Navbar.Section, { className: "max-lg:hidden", children: [
          idx !== 0 && /* @__PURE__ */ jsx(Navbar.Divider, {}, `div-${keyIdx}`),
          sections.section.map((sectionitem) => {
            return /* @__PURE__ */ jsx(NavMenuItem, { sectionitem, type: "navbar" }, sectionitem.ref);
          })
        ] }, `section-${keyIdx}`)
      ] }, `fmt-${keyIdx}`);
    }) }),
    sidebar: /* @__PURE__ */ jsx(Sidebar, { children: /* @__PURE__ */ jsx(Sidebar.Body, { children: filteredItems.map((sections, idx) => {
      const keyIdx = toBase(idx);
      return /* @__PURE__ */ jsxs(Fragment, { children: [
        idx !== 0 && /* @__PURE__ */ jsx(Sidebar.Divider, {}, `div-${keyIdx}`),
        idx === filteredItems.length - 1 && /* @__PURE__ */ jsx(Sidebar.Spacer, {}, `space-${keyIdx}`),
        /* @__PURE__ */ jsx(Sidebar.Section, { children: sections.section.map((sectionitem, itx) => {
          return /* @__PURE__ */ jsx(NavMenuItem, { sectionitem, type: "sidebar" }, sectionitem.ref);
        }) }, `section-${keyIdx}`)
      ] }, `fmt-${keyIdx}`);
    }) }) })
  };
};
var NavMenuItem = ({ sectionitem, type, navkey, ...props }) => {
  const pathname = useContext(LocationContext);
  const hasActive = sectionitem.submenu?.some((item) => item.href && pathname === item.href);
  const isNavbar = type === "navbar";
  return sectionitem.submenu ? /* @__PURE__ */ jsxs(Dropdown, { children: [
    /* @__PURE__ */ jsxs(Dropdown.Button, { as: isNavbar ? Navbar.Item : Sidebar.Item, className: clsx(isNavbar ? "max-lg:hidden" : "lg:mb-2.5", hasActive ? "rounded-b-none border-b" : "border-current"), children: [
      sectionitem.component,
      "label" in sectionitem && sectionitem.label && (isNavbar ? /* @__PURE__ */ jsx(Navbar.Label, { children: sectionitem.label }) : /* @__PURE__ */ jsx(Sidebar.Label, { children: sectionitem.label })),
      isNavbar ? /* @__PURE__ */ jsx(ChevronDownIcon, {}) : /* @__PURE__ */ jsx(ChevronRightIcon, {})
    ] }),
    /* @__PURE__ */ jsx(Dropdown.Menu, { className: "min-w-80 lg:min-w-64", ...props, children: sectionitem.submenu.map((submenuitem, ix) => {
      return /* @__PURE__ */ jsxs(Dropdown.Item, { href: submenuitem.href, className: clsx(submenuitem.href && pathname === submenuitem.href ? "rounded-l-none border-l-2" : "border-current"), children: [
        submenuitem.component,
        "label" in submenuitem && submenuitem.label && /* @__PURE__ */ jsx(Dropdown.Label, { children: submenuitem.label })
      ] }, `drop-${toBase(ix)}`);
    }) }, navkey)
  ] }, `dd-${navkey}`) : isNavbar ? /* @__PURE__ */ jsxs(Navbar.Item, { href: sectionitem.href || "#", current: !!(sectionitem.href && pathname === sectionitem.href), children: [
    sectionitem.component,
    "label" in sectionitem && sectionitem.label && /* @__PURE__ */ jsx(Navbar.Label, { children: sectionitem.label })
  ] }, navkey) : /* @__PURE__ */ jsxs(Sidebar.Item, { href: sectionitem.href || "#", current: !!(sectionitem.href && pathname === sectionitem.href), children: [
    sectionitem.component,
    "label" in sectionitem && sectionitem.label && /* @__PURE__ */ jsx(Sidebar.Label, { children: sectionitem.label })
  ] }, navkey);
};

// src/stimulus/Page.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function Header({ children }) {
  return /* @__PURE__ */ jsx2("header", { className: "print:hidden", children: /* @__PURE__ */ jsx2(Link, { href: "/", children: /* @__PURE__ */ jsx2("div", { className: "flex flex-col md:py-8 md:pl-8", children: /* @__PURE__ */ jsx2("div", { className: "flew-row flex w-full justify-around md:justify-start md:gap-x-8", children }) }) }) });
}
function Footer({ children }) {
  return /* @__PURE__ */ jsx2("footer", { className: "sticky top-[100vh] flex w-full flex-col items-center bg-opacity-100 pt-12 pb-8 print:hidden", children: /* @__PURE__ */ jsx2("p", { className: "font-lato-100 text-xs uppercase text-opacity-30", children }) });
}

// src/stimulus/ThemeSwitcher.tsx
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var ThemeSwitcher = (option = { theme: { light: "light", dark: "dark" } }) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return /* @__PURE__ */ jsx3(
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
      children: resolvedTheme === option.theme.dark ? /* @__PURE__ */ jsx3(MoonIcon, { className: "size-5 animate-rotate" }) : /* @__PURE__ */ jsx3(SunIcon, { className: "size-5 animate-rotate" })
    }
  );
};

// src/stimulus/index.ts
import { ThemeProvider } from "next-themes";
export {
  Footer,
  Header,
  SideMenu,
  StackMenu,
  ThemeProvider,
  ThemeSwitcher
};
//# sourceMappingURL=index.mjs.map