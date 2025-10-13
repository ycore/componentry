import clsx from 'clsx';
import React from 'react';
import { Icon } from '../../vibrant/lib/icon';

function Spinner({ className, iconId = 'Loader', ...props }: React.ComponentProps<'svg'> & { iconId?: string }) {
  return <Icon iconId={iconId} role="status" aria-label="Loading" className={clsx('size-4 animate-spin', className)} {...props} />;
}

export { Spinner };
