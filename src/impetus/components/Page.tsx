import clsx from 'clsx';
import { Link } from '../../vibrant/components/link';
import type { FooterProps, HeaderProps } from '../@types/Page.types';

export function Header({ children, className }: HeaderProps): React.JSX.Element {
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

export function Footer({ children, className }: FooterProps): React.JSX.Element {
  return (
    <footer className="sticky top-[100vh] flex w-full flex-col items-center bg-opacity-100 pt-12 pb-8 print:hidden">
      <p className={clsx('text-xs uppercase text-opacity-30', className)}>{children}</p>
    </footer>
  );
}
