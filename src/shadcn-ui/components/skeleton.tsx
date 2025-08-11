import clsx from 'clsx';
import React from 'react';

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="skeleton" className={clsx('animate-pulse rounded-md bg-accent', className)} {...props} />;
}

export { Skeleton };
