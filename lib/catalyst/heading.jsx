import clsx from 'clsx';
export function Heading({ className, level = 1, ...props }) {
    const Element = `h${level}`;
    return <Element {...props} className={clsx(className, 'font-semibold text-2xl/8 text-zinc-950 sm:text-xl/8 dark:text-white')}/>;
}
export function Subheading({ className, level = 2, ...props }) {
    const Element = `h${level}`;
    return <Element {...props} className={clsx(className, 'font-semibold text-base/7 text-zinc-950 sm:text-sm/6 dark:text-white')}/>;
}
//# sourceMappingURL=heading.jsx.map