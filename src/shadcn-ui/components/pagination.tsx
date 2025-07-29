import clsx from 'clsx';
import React from 'react';
import { createSpriteIcon } from '../../images/SpriteIcon';
import type { IconName } from '../@types/lucide-sprites';
import svgSpriteUrl from '../assets/lucide-sprites.svg?url';
import { type Button, buttonVariants } from './button';

const SpriteIcon = createSpriteIcon<IconName>(svgSpriteUrl);

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

function PaginationPrevious({ className, ...props }: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink aria-label="Go to previous page" size="default" className={clsx('gap-1 px-2.5 sm:pl-2.5', className)} {...props}>
      <SpriteIcon id="ChevronLeft" />
      <span className="hidden sm:block">Previous</span>
    </PaginationLink>
  );
}

function PaginationNext({ className, ...props }: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink aria-label="Go to next page" size="default" className={clsx('gap-1 px-2.5 sm:pr-2.5', className)} {...props}>
      <span className="hidden sm:block">Next</span>
      <SpriteIcon id="ChevronRight" />
    </PaginationLink>
  );
}

function PaginationEllipsis({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span aria-hidden data-slot="pagination-ellipsis" className={clsx('flex size-9 items-center justify-center', className)} {...props}>
      <SpriteIcon id="Ellipsis" className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export { Pagination, PaginationContent, PaginationLink, PaginationItem, PaginationPrevious, PaginationNext, PaginationEllipsis };
