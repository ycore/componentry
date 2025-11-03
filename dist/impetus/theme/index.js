import { jsx } from "react/jsx-runtime";
import { SpriteIcon } from "@ycore/componentry/images";
import clsx from "clsx";
import { useState, useEffect } from "react";
import { useTheme as useTheme$1, ThemeProvider as ThemeProvider$1 } from "next-themes";
const themeProviderProps = {
  attribute: "class",
  defaultTheme: "light",
  enableSystem: true,
  disableTransitionOnChange: false
};
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
      children: resolvedTheme === theme.theme.dark ? /* @__PURE__ */ jsx(SpriteIcon, { spriteUrl, iconId: "Moon", className: clsx("size-5", className) }) : /* @__PURE__ */ jsx(SpriteIcon, { spriteUrl, iconId: "Sun", className: clsx("size-5", className) })
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
const ThemeProvider = ThemeProvider$1;
export {
  THEME_OPTIONS,
  ThemeProvider,
  ThemeSwitch,
  themeProviderProps,
  useTheme
};
//# sourceMappingURL=index.js.map
