import { SpriteIcon } from '@ycore/componentry/images';
import clsx from 'clsx';
import type { MouseEvent } from 'react';
import { useEffect, useState } from 'react';
import type { ThemeContext, ThemeSwitchProps, Themes } from '../@types/ThemeSwitch.types';
import { useTheme } from './useTheme';

export const THEME_OPTIONS: Themes = { theme: { light: 'light', dark: 'dark' } } as const;

// Internal button component
const ThemeSwitchButton = ({ themeContext, theme, spriteUrl, className, classTheme }: { themeContext: ThemeContext | null; theme: Themes; spriteUrl: string; className?: string; classTheme?: string }): React.JSX.Element | null => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const resolvedTheme = themeContext?.resolvedTheme;
  const setTheme = themeContext?.setTheme;

  if (!mounted) return null;
  return (
    <button
      type="button"
      className={clsx('size-5 hover:animate-rotate', classTheme)}
      onClick={(e: MouseEvent) => {
        if (!setTheme) return;
        setTheme(resolvedTheme === theme.theme.dark ? theme.theme.light : theme.theme.dark);
        e.preventDefault();
        e.stopPropagation();
      }}
      aria-label="theme switch"
    >
      {resolvedTheme === theme.theme.dark ? <SpriteIcon spriteUrl={spriteUrl} iconId="Moon" className={clsx('size-5', className)} /> : <SpriteIcon spriteUrl={spriteUrl} iconId="Sun" className={clsx('size-5', className)} />}
    </button>
  );
};

// Main ThemeSwitch component with render props pattern
export const ThemeSwitch = ({ theme = THEME_OPTIONS, spriteUrl, className, classTheme, children }: ThemeSwitchProps): React.ReactNode => {
  const nextThemeContext = useTheme();
  const themeContext: ThemeContext | null = nextThemeContext ? { resolvedTheme: nextThemeContext.resolvedTheme, setTheme: nextThemeContext.setTheme } : null;

  // If children prop is provided, use render props pattern
  if (children) {
    return children({ themeContext, theme, spriteUrl, className, classTheme });
  }

  // Default behavior: render the button directly
  return <ThemeSwitchButton themeContext={themeContext} theme={theme} spriteUrl={spriteUrl} className={className} classTheme={classTheme} />;
};
