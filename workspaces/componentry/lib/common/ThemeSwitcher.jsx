import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '../catalyst/index.js';
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
    return (<Button plain={true} onClick={() => setTheme(resolvedTheme === THEMES.dark ? THEMES.light : THEMES.dark)} aria-label="theme switch">
      <MoonIcon className="sun"/>
      <SunIcon className="moon"/>
    </Button>);
};
//# sourceMappingURL=ThemeSwitcher.jsx.map