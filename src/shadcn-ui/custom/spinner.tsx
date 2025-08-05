import clsx from 'clsx';
import React from 'react';

import { manifestAsset, SpriteIcon } from '../../images/SpriteIcon';
import type { IconName } from '../@types/lucide-sprites';

export function Spinner({ className }: { className?: string }) {
  return <SpriteIcon<IconName> id="Loader" url={manifestAsset('/assets/lucide-sprites.svg')} className={clsx(className, 'animate-spin')} />;
}
