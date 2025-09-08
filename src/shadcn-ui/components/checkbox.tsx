import clsx from 'clsx';
import { Checkbox as CheckboxPrimitive } from 'radix-ui';
import type React from 'react';

import { SpriteIcon } from '../../images/SpriteIcon';
import type { IconName } from '../@types/lucide-sprites';

function Checkbox({ className, spriteUrl, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root> & { spriteUrl: string }) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={clsx(
        'peer size-4 shrink-0 rounded-[4px] border border-input shadow-xs outline-none transition-shadow focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-input/30 dark:data-[state=checked]:bg-primary dark:aria-invalid:ring-destructive/40',
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator data-slot="checkbox-indicator" className="flex items-center justify-center text-current transition-none">
        <SpriteIcon<IconName> iconId="Check" url={spriteUrl} className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
