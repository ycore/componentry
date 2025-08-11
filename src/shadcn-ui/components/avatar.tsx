import clsx from 'clsx';
import { Avatar as AvatarPrimitive } from 'radix-ui';
import React from 'react';

function Avatar({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return <AvatarPrimitive.Root data-slot="avatar" className={clsx('relative flex size-8 shrink-0 overflow-hidden rounded-full', className)} {...props} />;
}

function AvatarImage({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return <AvatarPrimitive.Image data-slot="avatar-image" className={clsx('aspect-square size-full', className)} {...props} />;
}

function AvatarFallback({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return <AvatarPrimitive.Fallback data-slot="avatar-fallback" className={clsx('flex size-full items-center justify-center rounded-full bg-muted', className)} {...props} />;
}

export { Avatar, AvatarImage, AvatarFallback };
