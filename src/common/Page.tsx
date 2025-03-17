import type React from 'react';

import { Link } from '../catalyst/index.js';
import { type NavConfig, NavMenu } from './NavMenu.js';
import { SvgImage } from './SvgImage.js';

interface PageProps {
  className?: string;
  footConfig: FootConfig;
  logoRef: string;
  navConfig: NavConfig;
  children: React.ReactNode;
}

interface FootConfig {
  title: string;
  from: string;
  to: () => number;
  scripts?: Array<{ props: React.HTMLProps<HTMLScriptElement> }>;
}

interface HeaderConfig {
  logoRef: string;
}

export function Page({ className, footConfig, logoRef, navConfig, children }: PageProps) {
  return (
    <div className="min-h-screen">
      <Header logoRef={logoRef} />
      <nav className="mb-6 flex-row justify-between">
        <NavMenu className={className} navConfig={navConfig} />
      </nav>
      {children}
      <Footer footConfig={footConfig} />
    </div>
  );
}

export function Header({ logoRef }: HeaderConfig) {
  return (
    <header className="print:hidden">
      <Link href="/">
        <div className="flex flex-col md:py-8 md:pl-8">
          <div className="flew-row flex w-full justify-around md:justify-start md:gap-x-8">
            <SvgImage href={logoRef} className="h-16 text-slate-700 text-opacity-70 md:h-28 dark:text-slate-200 dark:text-opacity-30" viewBox="0 0 2434 740" />
            <div className="flex flex-col items-center pt-1 md:pt-3">
              <div className="flex flex-col items-end">
                <p className="break-normal font-maharlika text-3xl text-slate-700 uppercase md:text-7xl md:tracking-[.25em] dark:text-slate-400" />
              </div>
            </div>
          </div>
        </div>
        <span className="sr-only">NOTHING</span>
      </Link>
    </header>
  );
}

export function Script(footConfig: FootConfig) {
  return <>{footConfig.scripts?.filter((script: unknown) => script)?.map((script: { props: React.HTMLProps<HTMLScriptElement> }, index: number) => script && <script key={index} {...script.props} />)}</>;
}

export function Footer({ footConfig }: { footConfig: FootConfig }) {
  return (
    <footer className="sticky top-[100vh] flex w-full flex-col items-center bg-opacity-100 pt-12 pb-8 print:hidden">
      <p className="font-lato-100 text-xs uppercase text-opacity-30">
        Copyright © {footConfig?.title} {footConfig?.from} - {footConfig?.to()}
      </p>
    </footer>
  );
}
