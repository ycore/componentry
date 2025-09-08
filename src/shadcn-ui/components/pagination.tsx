import clsx from 'clsx';
import type React from 'react';
import { SpriteIcon } from '../../images/SpriteIcon';
import type { IconName } from '../@types/lucide-sprites';
import { type Button, buttonVariants } from './button';

function Pagination({ className, ...props }: React.ComponentProps<'nav'>) {
  return <nav aria-label="pagination" data-slot="pagination" className={clsx('mx-auto flex w-full justify-center', className)} {...props} />;
}

function PaginationContent({ className, ...props }: React.ComponentProps<'ul'>) {
  return <ul data-slot="pagination-content" className={clsx('flex flex-row items-center gap-1', className)} {...props} />;
}

function PaginationItem({ ...props }: React.ComponentProps<'li'>) {
  return <li data-slot="pagination-item" {...props} />;
}

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<React.ComponentProps<typeof Button>, 'size'> &
  React.ComponentProps<'a'>;

function PaginationLink({ className, isActive, size = 'icon', ...props }: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? 'page' : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={clsx(
        buttonVariants({
          variant: isActive ? 'outline' : 'ghost',
          size,
        }),
        className
      )}
      {...props}
    />
  );
}

function PaginationPrevious({ className, spriteUrl, ...props }: React.ComponentProps<typeof PaginationLink> & { spriteUrl: string }) {
  return (
    <PaginationLink aria-label="Go to previous page" size="default" className={clsx('gap-1 px-2.5 sm:pl-2.5', className)} {...props}>
      <SpriteIcon<IconName> iconId="ChevronLeft" url={spriteUrl} />
      <span className="hidden sm:block">Previous</span>
    </PaginationLink>
  );
}

function PaginationNext({ className, spriteUrl, ...props }: React.ComponentProps<typeof PaginationLink> & { spriteUrl: string }) {
  return (
    <PaginationLink aria-label="Go to next page" size="default" className={clsx('gap-1 px-2.5 sm:pr-2.5', className)} {...props}>
      <span className="hidden sm:block">Next</span>
      <SpriteIcon<IconName> iconId="ChevronRight" url={spriteUrl} />
    </PaginationLink>
  );
}

function PaginationEllipsis({ className, spriteUrl, ...props }: React.ComponentProps<'span'> & { spriteUrl: string }) {
  return (
    <span aria-hidden data-slot="pagination-ellipsis" className={clsx('flex size-9 items-center justify-center', className)} {...props}>
      <SpriteIcon<IconName> iconId="Ellipsis" className="size-4" url={spriteUrl} />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export { Pagination, PaginationContent, PaginationLink, PaginationItem, PaginationPrevious, PaginationNext, PaginationEllipsis };
