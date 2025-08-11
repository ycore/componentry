import clsx from 'clsx';
import React from 'react';

import { SpriteIcon } from '../../images/SpriteIcon';
import type { IconName } from '../@types/lucide-sprites';

interface SpinnerProps {
  className?: string;
  spriteUrl: string;
  iconId?: IconName;
}

export function Spinner({ className, spriteUrl, iconId = 'Loader' }: SpinnerProps) {
  return (
    <SpriteIcon<IconName> id={iconId} url={spriteUrl} className={clsx(className, 'animate-spin')} />
  );
}
