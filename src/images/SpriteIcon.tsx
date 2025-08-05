import React from 'react';
import type { SpriteIconProps } from './@types/SpriteIcon.types';

const ASSETS_URL = '/assets/assets-manifest.json';

// Cache for the asset manifest to avoid multiple fetches
let manifestCache: Record<string, string> | null = null;
let manifestPromise: Promise<Record<string, string>> | null = null;

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

/**
 * Loads the asset manifest from the public directory.
 * Uses browser caching and memory caching for performance.
 */
async function loadManifest(): Promise<Record<string, string>> {
  if (manifestCache) {
    return manifestCache;
  }

  if (manifestPromise) {
    return manifestPromise;
  }

  manifestPromise = fetch(ASSETS_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to load asset manifest: ${response.status}`);
      }
      return response.json();
    })
    .then(manifest => {
      manifestCache = manifest;
      manifestPromise = null;
      return manifest;
    })
    .catch(error => {
      console.warn('Failed to load asset manifest:', error);
      manifestPromise = null;
      return {};
    });

  return manifestPromise;
}

/**
 * Resolves an asset URL to its actual path using the asset manifest.
 * Falls back to the original URL if not found in the manifest.
 */
export function manifestAsset(url: string): string {
  // For server-side rendering, return the original URL
  if (typeof window === 'undefined') {
    return url;
  }

  // If manifest is already cached, return immediately
  if (manifestCache) {
    return manifestCache[url] || url;
  }

  // For the initial load, return the original URL and load manifest in background
  loadManifest().then(manifest => {
    // Manifest will be cached for subsequent calls
  });

  return url;
}
