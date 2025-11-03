import { createSpriteIcon } from '@ycore/componentry/images';
import type { IconName } from '../@types/lucide-sprites';

/**
 * Pre-configured SpriteIcon component for Lucide icons.
 *
 * Resolves sprite URLs from SpriteIconProvider context using the 'lucide' key.
 * The consuming app must configure the provider in root.tsx with:
 *
 * @example
 * ```tsx
 * import lucideSpriteUrl from '@ycore/componentry/vibrant/assets/lucide-sprites.svg?url';
 * <SpriteIconProvider sprites={{ lucide: lucideSpriteUrl }}>
 * ```
 */
export const SvgIcon: React.FC<Omit<React.ComponentProps<'svg'>, 'children'> & { iconId?: IconName }> = createSpriteIcon<IconName>('lucide');
