import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

import { Link } from '../shadcn-ui/custom/link';

type HeaderProps = PropsWithChildren & {
  className?: string;
};

type FooterProps = PropsWithChildren & {
  className?: string;
};

export function Header({ children, className }: HeaderProps) {
  return (
    <header className="print:hidden">
      <Link href="/">
        <div className="flex flex-col md:py-8 md:pl-8">
          <div className={clsx('flew-row flex w-full justify-around md:justify-start md:gap-x-8', className)}>{children}</div>
        </div>
      </Link>
    </header>
  );
}

export function Footer({ children, className }: FooterProps) {
  return (
    <footer className="sticky top-[100vh] flex w-full flex-col items-center bg-opacity-100 pt-12 pb-8 print:hidden">
      <p className={clsx('text-xs uppercase text-opacity-30', className)}>{children}</p>
    </footer>
  );
}
