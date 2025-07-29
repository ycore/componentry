import clsx from 'clsx';
import { useTheme } from 'next-themes';
import type { MouseEvent } from 'react';
import { useEffect, useState } from 'react';
import { createSpriteIcon } from '../images/SpriteIcon';
import type { IconName } from '../shadcn-ui/@types/lucide-sprites';
import svgSpriteUrl from '../shadcn-ui/assets/lucide-sprites.svg?url';
import type { Themes } from './@types/ThemeSwitch.types';

const SpriteIcon = createSpriteIcon<IconName>(svgSpriteUrl);
export const THEME_OPTIONS = { theme: { light: 'light', dark: 'dark' } };

interface ThemeSwitchProps {
  theme: Themes;
  className?: string;
  classTheme?: string;
}

export const ThemeSwitch = ({ theme = THEME_OPTIONS, className, classTheme }: ThemeSwitchProps) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <button
      type="button"
      className={clsx("size-5 hover:animate-rotate", classTheme)}
      onClick={(e: MouseEvent) => {
        setTheme(resolvedTheme === theme.theme.dark ? theme.theme.light : theme.theme.dark);
        e.preventDefault();
        e.stopPropagation();
      }}
      aria-label="theme switch"
    >
      {resolvedTheme === theme.theme.dark ? <SpriteIcon id="Moon" className={clsx('size-5', className)} /> : <SpriteIcon id="Sun" className={clsx('size-5', className)} />}
    </button>
  );
};
