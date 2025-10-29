import clsx from 'clsx';
import { Label as LabelPrimitive } from 'radix-ui';
import React from 'react';

function Label({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>): React.JSX.Element | null {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={clsx(
        'flex select-none items-center gap-2 font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50',
        className
      )}
      {...props}
    />
  );
}

export { Label };
