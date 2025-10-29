import clsx from 'clsx';
import React from 'react';
import type { IconName } from '../../vibrant/@types/lucide-sprites';
import { SvgIcon } from '../../vibrant/components/svg-icon';

function Spinner({ className, iconId = 'Loader', ...props }: React.ComponentProps<'svg'> & { iconId?: IconName }): React.JSX.Element | null {
  return <SvgIcon iconId={iconId} role="status" aria-label="Loading" className={clsx('size-4 animate-spin', className)} {...props} />;
}

export { Spinner };
