import { existsSync } from 'node:fs';
import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import type { Plugin } from 'vite';

import type { PublishAssetsOptions } from '../@types/publish-assets.types';

const ASSETS_PATH = 'public/assets';
const ASSETS_MANIFEST = 'assets-manifest.json';

/**
 * Vite plugin that publishes package assets to predictable public URLs.
 * Creates a manifest mapping URLs to actual file paths.
 */
export function publishAssets(options: PublishAssetsOptions): Plugin {
  return {
    name: 'publish-assets',

    async buildStart() {
      const manifest: Record<string, string> = {};

      // Ensure assets directory exists
      if (!existsSync(ASSETS_PATH)) {
        await mkdir(ASSETS_PATH, { recursive: true });
      }

      for (const asset of options.assets) {
        const { source, url } = asset;
        const fileName = url.split('/').pop() || 'unknown';
        const targetPath = join(ASSETS_PATH, fileName);

        // Copy asset only if it doesn't exist
        if (!existsSync(targetPath)) {
          if (existsSync(source)) {
            await copyFile(source, targetPath);
          } else {
            console.warn(`⚠️ Asset source not found: ${source}`);
            continue;
          }
        }

        // Add to manifest
        manifest[url] = targetPath;
      }

      // Write manifest file
      const manifestPath = join(ASSETS_PATH, ASSETS_MANIFEST);
      await writeFile(manifestPath, JSON.stringify(manifest, null, 2));
    },
  };
}
