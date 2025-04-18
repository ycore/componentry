import { jsx as _jsx } from "react/jsx-runtime";
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
export const ThemeSwitcher = (option = { theme: { light: 'light', dark: 'dark' } }) => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();
    useEffect(() => setMounted(true), []);
    if (!mounted)
        return null;
    return (_jsx("button", { type: "button", className: "size-5", onClick: (e) => {
            setTheme(resolvedTheme === option.theme.dark ? option.theme.light : option.theme.dark);
            e.preventDefault();
            e.stopPropagation();
        }, "aria-label": "theme switch", children: resolvedTheme === option.theme.dark ? _jsx(MoonIcon, { className: "size-5 animate-rotate" }) : _jsx(SunIcon, { className: "size-5 animate-rotate" }) }));
};
