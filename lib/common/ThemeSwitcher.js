import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
const THEMES = {
    light: 'light',
    dark: 'dark',
};
export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();
    useEffect(() => setMounted(true), []);
    if (!mounted)
        return null;
    return (_jsxs("button", { type: "button", className: "size-5", onClick: () => setTheme(resolvedTheme === THEMES.dark ? THEMES.light : THEMES.dark), "aria-label": "theme switch", children: [_jsx(MoonIcon, { className: "sun" }), _jsx(SunIcon, { className: "moon" })] }));
};
