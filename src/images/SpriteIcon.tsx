import React from 'react';
import type { SpriteIconProps } from './@types/SpriteIcon.types';

/**
 * Renders an SVG icon using a sprite sheet.
 *
 * @template IconId - The type of the icon ID within the sprite sheet (defaults to string).
 * @param props - The properties for the SpriteIcon component.
 * @param props.url - The URL of the SVG sprite sheet.
 * @param props.id - The ID of the icon within the sprite sheet. If not provided, the entire sprite is used.
 * @returns An SVG element referencing the specified icon from the sprite sheet.
 */
export function SpriteIcon<IconId extends string = string>({ url, id, ...props }: SpriteIconProps<string, IconId>) {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: acceptable
    <svg {...props}>{id ? <use href={`${url}#${id}`} /> : <use href={`${url}`} />}</svg>
  );
}

/**
 * Creates a pre-configured SpriteIcon component bound to a specific sprite URL.
 *
 * @template IconId - The type of sprite icon IDs available in the sprite sheet
 * @param spriteUrl - The URL of the SVG sprite sheet
 * @returns A configured SpriteIcon component that only requires the icon ID
 */
export function createSpriteIcon<IconId extends string>(spriteUrl: string) {
  return function SpriteIconComponent({ id, ...props }: { id: IconId } & Omit<SpriteIconProps<string, IconId>, 'url'>) {
    return <SpriteIcon url={spriteUrl} id={id} {...props} />;
  };
}
