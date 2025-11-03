import React from 'react';
import type { SpriteIconProps } from './@types/SpriteIcon.types';
import { useSpriteIcon } from './SpriteIconProvider';

/**
 * Renders an SVG icon using a sprite sheet.
 */
export function SpriteIcon<IconId extends string = string>({ spriteUrl, iconId, ...props }: SpriteIconProps<string, IconId>): React.JSX.Element {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: acceptable
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      {iconId ? <use href={`${spriteUrl}#${iconId}`} /> : <use href={`${spriteUrl}`} />}
    </svg>
  );
}

/**
 * Creates a pre-configured SpriteIcon component bound to a sprite key from Context or a direct URL.
 */
export function createSpriteIcon<IconId extends string>(spriteKey: string, options?: { iconSpriteUrl?: string }) {
  // If iconSpriteUrl provided, use it directly
  if (options?.iconSpriteUrl) {
    const spriteUrl = options.iconSpriteUrl;
    return function SpriteIconComponent({ iconId, ...props }: Omit<SpriteIconProps<string, IconId>, 'spriteUrl'>): React.JSX.Element {
      return <SpriteIcon spriteUrl={spriteUrl} iconId={iconId} {...props} />;
    };
  }

  // Otherwise use context lookup
  return function SpriteIconComponent({ iconId, ...props }: Omit<SpriteIconProps<string, IconId>, 'spriteUrl'>): React.JSX.Element {
    const spriteUrl = useSpriteIcon(spriteKey);
    return <SpriteIcon spriteUrl={spriteUrl} iconId={iconId} {...props} />;
  };
}
