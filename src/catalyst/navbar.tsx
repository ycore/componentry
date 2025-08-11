import * as Headless from '@headlessui/react';
import clsx from 'clsx';
import type { ComponentPropsWithoutRef, ForwardedRef, ReactNode } from 'react';
import { forwardRef, useId } from 'react';

import { TouchTarget } from './button';
import { Link } from './link';

export function Navbar({ className, ...props }: ComponentPropsWithoutRef<'nav'>) {
  return <nav {...props} className={clsx(className, 'flex flex-1 items-center gap-4 py-2.5')} />;
}

export function NavbarDivider({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
  return <div aria-hidden="true" {...props} className={clsx(className, 'h-6 w-px bg-zinc-950/10 dark:bg-white/10')} />;
}

export function NavbarSection({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
  const id = useId();

  return (
    <div id={id}>
      <div {...props} className={clsx(className, 'flex items-center gap-3')} />
    </div>
  );
}

export function NavbarSpacer({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
  return <div aria-hidden="true" {...props} className={clsx(className, '-ml-4 flex-1')} />;
}

export const NavbarItem = forwardRef(function NavbarItem(
  { current, className, children, ...props }: { current?: boolean; className?: string; children: ReactNode } & (Omit<Headless.ButtonProps, 'as' | 'className'> | Omit<ComponentPropsWithoutRef<typeof Link>, 'className'>),
  ref: ForwardedRef<HTMLAnchorElement | HTMLButtonElement>
) {
  const classes = clsx(
    // Base
    'relative flex min-w-0 items-center gap-3 rounded-lg p-2 text-left font-medium text-base/6 text-zinc-950 sm:text-sm/5',
    // Leading icon/icon-only
    '*:data-[slot=icon]:size-6 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:fill-zinc-500 sm:*:data-[slot=icon]:size-5',
    // Trailing icon (down chevron or similar)
    '*:not-nth-2:last:data-[slot=icon]:ml-auto *:not-nth-2:last:data-[slot=icon]:size-5 sm:*:not-nth-2:last:data-[slot=icon]:size-4',
    // Avatar
    '*:data-[slot=avatar]:-m-0.5 *:data-[slot=avatar]:size-7 sm:*:data-[slot=avatar]:size-6 *:data-[slot=avatar]:[--avatar-radius:var(--radius-md)]',
    // Hover
    'data-hover:bg-zinc-950/5 data-hover:*:data-[slot=icon]:fill-zinc-950',
    // Active
    'data-active:bg-zinc-950/5 data-active:*:data-[slot=icon]:fill-zinc-950',
    // Dark mode
    'dark:text-white dark:*:data-[slot=icon]:fill-zinc-400',
    'dark:data-hover:bg-white/5 dark:data-hover:*:data-[slot=icon]:fill-white',
    'dark:data-active:bg-white/5 dark:data-active:*:data-[slot=icon]:fill-white'
  );

  return (
    <span className={clsx(className, 'relative')}>
      {current && <span className="-bottom-2.5 absolute inset-x-2 h-0.5 rounded-full bg-zinc-950 dark:bg-white" />}
      {'href' in props ? (
        <Link {...props} className={classes} data-current={current ? 'true' : undefined} ref={ref as ForwardedRef<HTMLAnchorElement>}>
          <TouchTarget>{children}</TouchTarget>
        </Link>
      ) : (
        <Headless.Button {...props} className={clsx('cursor-default', classes)} data-current={current ? 'true' : undefined} ref={ref}>
          <TouchTarget>{children}</TouchTarget>
        </Headless.Button>
      )}
    </span>
  );
});

export function NavbarLabel({ className, ...props }: ComponentPropsWithoutRef<'span'>) {
  return <span {...props} className={clsx(className, 'truncate')} />;
}
