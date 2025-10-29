import clsx from 'clsx';
import { Slot } from 'radix-ui';
import React from 'react';
import { SvgIcon } from '../../vibrant/components/svg-icon';

function Breadcrumb({ ...props }: React.ComponentProps<'nav'>): React.JSX.Element | null {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<'ol'>): React.JSX.Element | null {
  return <ol data-slot="breadcrumb-list" className={clsx('flex flex-wrap items-center gap-1.5 break-words text-muted-foreground text-sm sm:gap-2.5', className)} {...props} />;
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<'li'>): React.JSX.Element | null {
  return <li data-slot="breadcrumb-item" className={clsx('inline-flex items-center gap-1.5', className)} {...props} />;
}

function BreadcrumbLink({
  asChild,
  className,
  ...props
}: React.ComponentProps<'a'> & {
  asChild?: boolean;
}): React.JSX.Element | null {
  const Comp = asChild ? Slot.Slot : 'a';

  return <Comp data-slot="breadcrumb-link" className={clsx('transition-colors hover:text-foreground', className)} {...props} />;
}

function BreadcrumbPage({ className, ...props }: React.ComponentProps<'span'>): React.JSX.Element | null {
  return <span data-slot="breadcrumb-page" role="link" aria-disabled="true" aria-current="page" className={clsx('font-normal text-foreground', className)} {...props} />;
}

function BreadcrumbSeparator({ children, className, ...props }: React.ComponentProps<'li'>): React.JSX.Element | null {
  return (
    <li data-slot="breadcrumb-separator" role="presentation" aria-hidden="true" className={clsx('[&>svg]:size-3.5', className)} {...props}>
      {children ?? <SvgIcon iconId="ChevronRight" />}
    </li>
  );
}

function BreadcrumbEllipsis({ className, ...props }: React.ComponentProps<'span'>): React.JSX.Element | null {
  return (
    <span data-slot="breadcrumb-ellipsis" role="presentation" aria-hidden="true" className={clsx('flex size-9 items-center justify-center', className)} {...props}>
      <SvgIcon iconId="Ellipsis" className="size-4" />
      <span className="sr-only">More</span>
    </span>
  );
}

export { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis };
