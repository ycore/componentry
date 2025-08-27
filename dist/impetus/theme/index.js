// src/impetus/theme/ThemeProvider.tsx
var themeProviderProps = {
  attribute: "class",
  defaultTheme: "light",
  enableSystem: true,
  disableTransitionOnChange: false
};
// src/impetus/theme/ThemeSwitch.tsx
import clsx from "clsx";
import { useEffect, useState } from "react";

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

// src/impetus/theme/useTheme.tsx
import { useTheme as useNextTheme } from "next-themes";
var useTheme = useNextTheme;

// src/impetus/theme/ThemeSwitch.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var THEME_OPTIONS = { theme: { light: "light", dark: "dark" } };
var ThemeSwitchButton = ({ themeContext, theme, spriteUrl, className, classTheme }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const resolvedTheme = themeContext?.resolvedTheme;
  const setTheme = themeContext?.setTheme;
  if (!mounted)
    return null;
  return /* @__PURE__ */ jsx2("button", {
    type: "button",
    className: clsx("size-5 hover:animate-rotate", classTheme),
    onClick: (e) => {
      if (!setTheme)
        return;
      setTheme(resolvedTheme === theme.theme.dark ? theme.theme.light : theme.theme.dark);
      e.preventDefault();
      e.stopPropagation();
    },
    "aria-label": "theme switch",
    children: resolvedTheme === theme.theme.dark ? /* @__PURE__ */ jsx2(SpriteIcon, {
      url: spriteUrl,
      id: "Moon",
      className: clsx("size-5", className)
    }) : /* @__PURE__ */ jsx2(SpriteIcon, {
      url: spriteUrl,
      id: "Sun",
      className: clsx("size-5", className)
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
  return /* @__PURE__ */ jsx2(ThemeSwitchButton, {
    themeContext,
    theme,
    spriteUrl,
    className,
    classTheme
  });
};
// src/impetus/theme/vendor.ts
import { ThemeProvider as NextThemeProvider } from "next-themes";
var ThemeProvider = NextThemeProvider;
export {
  useTheme,
  themeProviderProps,
  ThemeSwitch,
  ThemeProvider,
  THEME_OPTIONS
};

//# debugId=2890586DFE02196F64756E2164756E21
