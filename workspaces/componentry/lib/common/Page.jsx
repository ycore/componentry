import { Link } from '../catalyst/index.js';
import { NavMenu } from './NavMenu.js';
import { SvgImage } from './SvgImage.js';
export function Page({ footConfig, imgConfig, navConfig, className, children }) {
    return (<div className="min-h-screen">
      <Header imgConfig={imgConfig}/>
      <nav className="mb-6 flex-row justify-between">
        <NavMenu className={className} navConfig={navConfig}/>
      </nav>
      {children}
      <Footer footConfig={footConfig}/>
    </div>);
}
export function Header({ imgConfig }) {
    return (<header className="print:hidden">
      <Link href="/">
        <div className="flex flex-col md:py-8 md:pl-8">
          <div className="flew-row flex w-full justify-around md:justify-start md:gap-x-8">
            <SvgImage href={imgConfig.logo} className="h-16 text-slate-700 text-opacity-70 dark:text-slate-200 dark:text-opacity-30 md:h-28" viewBox="0 0 2434 740"/>
            <div className="flex flex-col items-center pt-1 md:pt-3">
              <div className="flex flex-col items-end">
                <p className="font-maharlika break-normal text-3xl uppercase text-slate-700 dark:text-slate-400 md:text-7xl md:tracking-[.25em]"></p>
              </div>
            </div>
          </div>
        </div>
        <span className="sr-only">NOTHING</span>
      </Link>
    </header>);
}
export function Script(footConfig) {
    return <>{footConfig.scripts?.filter((script) => script)?.map((script, index) => script && <script key={index} {...script.props}/>)}</>;
}
export function Footer({ footConfig }) {
    return (<footer className="sticky top-[100vh] flex w-full flex-col items-center bg-opacity-100 pb-8 pt-12 print:hidden">
      <p className="font-lato-100 text-xs uppercase text-opacity-30">
        Copyright © {footConfig?.title} {footConfig?.from} - {footConfig?.to()}
      </p>
    </footer>);
}
//# sourceMappingURL=Page.jsx.map