import { createSpriteIcon } from '../../images/SpriteIcon';
import type { IconName } from '../@types/lucide-sprites';
import svgSpriteUrl from '../assets/lucide-sprites.svg?url';

export const SvgIcon = createSpriteIcon<IconName>(svgSpriteUrl);
