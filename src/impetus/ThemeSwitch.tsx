import clsx from 'clsx';
import { useTheme } from 'next-themes';
import type { MouseEvent } from 'react';
import { useEffect, useState } from 'react';

import { SpriteIcon } from '../images/SpriteIcon';
import type { ThemeSwitchProps, Themes } from './@types/ThemeSwitch.types';

export const THEME_OPTIONS: Themes = { theme: { light: 'light', dark: 'dark' } } as const;

export const ThemeSwitch = ({ theme = THEME_OPTIONS, spriteUrl, className, classTheme }: ThemeSwitchProps) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <button
      type="button"
      className={clsx('size-5 hover:animate-rotate', classTheme)}
      onClick={(e: MouseEvent) => {
        setTheme(resolvedTheme === theme.theme.dark ? theme.theme.light : theme.theme.dark);
        e.preventDefault();
        e.stopPropagation();
      }}
      aria-label="theme switch"
    >
      {resolvedTheme === theme.theme.dark ? <SpriteIcon url={spriteUrl} id="Moon" className={clsx('size-5', className)} /> : <SpriteIcon url={spriteUrl} id="Sun" className={clsx('size-5', className)} />}
    </button>
  );
};
