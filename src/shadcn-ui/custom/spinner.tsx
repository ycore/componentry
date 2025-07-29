import clsx from 'clsx';

import { SpriteIcon } from '../../images/SpriteIcon';
import type { IconName } from '../@types/lucide-sprites';
import svgSpriteUrl from '../assets/lucide-sprites.svg?url';

export function Spinner({ className }: { className?: string }) {
  return <SpriteIcon<IconName> id="Loader" url={svgSpriteUrl} className={clsx(className, 'animate-spin')} />;
}
