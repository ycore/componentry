import clsx from 'clsx';

import type { HeadingProps } from './@types/heading.types';

export function Heading({ className, level = 1, ...props }: HeadingProps) {
  const Element: `h${typeof level}` = `h${level}`;

  return <Element {...props} className={clsx(className, 'font-semibold text-2xl/8 text-zinc-950 sm:text-xl/8 dark:text-white')} />;
}

export function Subheading({ className, level = 2, ...props }: HeadingProps) {
  const Element: `h${typeof level}` = `h${level}`;

  return <Element {...props} className={clsx(className, 'font-semibold text-base/7 text-zinc-950 sm:text-sm/6 dark:text-white')} />;
}
