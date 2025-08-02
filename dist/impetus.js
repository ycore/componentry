// src/impetus/index.ts
import { ThemeProvider } from "next-themes";

// src/impetus/LoadingBar.tsx
import clsx from "clsx";
import { memo } from "react";
import { jsx } from "react/jsx-runtime";
var LoadingBar = memo(({ className }) => /* @__PURE__ */ jsx("div", {
  className: clsx("loading-bar", className)
}));
// src/impetus/Page.tsx
import clsx2 from "clsx";

// src/shadcn-ui/custom/link.tsx
import React from "react";
import { Link as RouterLink } from "react-router";
import { jsx as jsx2 } from "react/jsx-runtime";
var Link = React.forwardRef(function Link2(props, ref) {
  return /* @__PURE__ */ jsx2(RouterLink, {
    ...props,
    to: props.href,
    ref
  });
});

// src/impetus/Page.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
function Header({ children, className }) {
  return /* @__PURE__ */ jsx3("header", {
    className: "print:hidden",
    children: /* @__PURE__ */ jsx3(Link, {
      href: "/",
      children: /* @__PURE__ */ jsx3("div", {
        className: "flex flex-col md:py-8 md:pl-8",
        children: /* @__PURE__ */ jsx3("div", {
          className: clsx2("flew-row flex w-full justify-around md:justify-start md:gap-x-8", className),
          children
        })
      })
    })
  });
}
function Footer({ children, className }) {
  return /* @__PURE__ */ jsx3("footer", {
    className: "sticky top-[100vh] flex w-full flex-col items-center bg-opacity-100 pt-12 pb-8 print:hidden",
    children: /* @__PURE__ */ jsx3("p", {
      className: clsx2("text-xs uppercase text-opacity-30", className),
      children
    })
  });
}
// src/impetus/ThemeSwitch.tsx
import clsx3 from "clsx";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// src/images/SpriteIcon.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
function SpriteIcon({ url, id, ...props }) {
  return /* @__PURE__ */ jsx4("svg", {
    ...props,
    children: id ? /* @__PURE__ */ jsx4("use", {
      href: `${url}#${id}`
    }) : /* @__PURE__ */ jsx4("use", {
      href: `${url}`
    })
  });
}
function createSpriteIcon(spriteUrl) {
  return function SpriteIconComponent({ id, ...props }) {
    return /* @__PURE__ */ jsx4(SpriteIcon, {
      url: spriteUrl,
      id,
      ...props
    });
  };
}

// url-asset:../shadcn-ui/assets/lucide-sprites.svg
var lucide_sprites_default = "./../shadcn-ui/assets/lucide-sprites.svg";

// src/impetus/ThemeSwitch.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
var SpriteIcon2 = createSpriteIcon(lucide_sprites_default);
var THEME_OPTIONS = { theme: { light: "light", dark: "dark" } };
var ThemeSwitch = ({ theme = THEME_OPTIONS, className, classTheme }) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  if (!mounted)
    return null;
  return /* @__PURE__ */ jsx5("button", {
    type: "button",
    className: clsx3("size-5 hover:animate-rotate", classTheme),
    onClick: (e) => {
      setTheme(resolvedTheme === theme.theme.dark ? theme.theme.light : theme.theme.dark);
      e.preventDefault();
      e.stopPropagation();
    },
    "aria-label": "theme switch",
    children: resolvedTheme === theme.theme.dark ? /* @__PURE__ */ jsx5(SpriteIcon2, {
      id: "Moon",
      className: clsx3("size-5", className)
    }) : /* @__PURE__ */ jsx5(SpriteIcon2, {
      id: "Sun",
      className: clsx3("size-5", className)
    })
  });
};
export {
  ThemeSwitch,
  ThemeProvider,
  THEME_OPTIONS,
  LoadingBar,
  Header,
  Footer
};

//# debugId=26237ED5782B84FC64756E2164756E21
