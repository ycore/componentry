import clsx from 'clsx';
import React from 'react';
import { SpriteIcon } from '../../images/SpriteIcon';
import type { IconName } from '../@types/lucide-sprites';
import type { SpinnerProps } from './@types/spinner.types';

export function Spinner({ className, spriteUrl, iconId = 'Loader' }: SpinnerProps) {
  return <SpriteIcon<IconName> id={iconId} url={spriteUrl} className={clsx(className, 'animate-spin')} />;
}
