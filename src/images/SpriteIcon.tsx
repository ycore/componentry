import React from 'react';
import type { SpriteIconProps } from './@types/SpriteIcon.types';
import { useSpriteIcon } from './SpriteIconProvider';

/**
 * Renders an SVG icon using a sprite sheet.
 *
 * @template IconId - The type of the icon ID within the sprite sheet.
 * @param props.spriteUrl - The URL of the SVG sprite sheet.
 * @param props.iconId - The ID of the icon within the sprite sheet. If not provided, the entire sprite is used.
 * @param props - The properties for the svg element.
 * @returns An SVG element referencing the specified icon from the sprite sheet.
 */
export function SpriteIcon<IconId extends string = string>({ spriteUrl, iconId, ...props }: SpriteIconProps<string, IconId>) {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: acceptable
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      {iconId ? <use href={`${spriteUrl}#${iconId}`} /> : <use href={`${spriteUrl}`} />}
    </svg>
  );
}

/**
 * Creates a pre-configured SpriteIcon component bound to a sprite key from Context.
 *
 * @template IconId - The type of sprite icon IDs available in the sprite sheet
 * @param spriteKey - Key to look up sprite URL from SpriteIconProvider (e.g., 'lucide', 'example')
 * @returns Configured SpriteIcon component requiring only iconId prop
 *
 * @example
 * ```tsx
 * const Icon = createSpriteIcon<IconName>('lucide');
 * <Icon iconId="Home" className="size-6" />
 * ```
 */
export function createSpriteIcon<IconId extends string>(spriteKey: string) {
  return function SpriteIconComponent({ iconId, ...props }: { iconId: IconId } & Omit<SpriteIconProps<string, IconId>, 'spriteUrl'>) {
    const spriteUrl = useSpriteIcon(spriteKey);
    return <SpriteIcon spriteUrl={spriteUrl} iconId={iconId} {...props} />;
  };
}
