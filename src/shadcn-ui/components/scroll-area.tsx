import clsx from 'clsx';
import { ScrollArea as ScrollAreaPrimitive } from 'radix-ui';
import React from 'react';

function ScrollArea({ className, children, ...props }: React.ComponentProps<typeof ScrollAreaPrimitive.Root>): React.JSX.Element | null {
  return (
    <ScrollAreaPrimitive.Root data-slot="scroll-area" className={clsx('relative', className)} {...props}>
      <ScrollAreaPrimitive.Viewport data-slot="scroll-area-viewport" className="size-full rounded-[inherit] outline-none transition-[color,box-shadow] focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50">
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
}

function ScrollBar({ className, orientation = 'vertical', ...props }: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>): React.JSX.Element | null {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={clsx(
        'flex touch-none select-none p-px transition-colors',
        orientation === 'vertical' && 'h-full w-2.5 border-l border-l-transparent',
        orientation === 'horizontal' && 'h-2.5 flex-col border-t border-t-transparent',
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb data-slot="scroll-area-thumb" className="relative flex-1 rounded-full bg-border" />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
}

export { ScrollArea, ScrollBar };
