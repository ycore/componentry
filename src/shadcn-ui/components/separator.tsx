import clsx from 'clsx';
import { Separator as SeparatorPrimitive } from 'radix-ui';
import type * as React from 'react';

function Separator({ className, orientation = 'horizontal', decorative = true, ...props }: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={clsx('shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px', className)}
      {...props}
    />
  );
}

export { Separator };
