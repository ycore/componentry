import { existsSync } from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';
import type { Plugin } from 'vite';

import type { ResolveAssetsPluginOptions } from '../@types/resolve-assets.types';

export function resolveAssets(options: ResolveAssetsPluginOptions) {
  const virtualPrefix = 'virtual:external-asset:';

  // Convert asset to source path
  function getSourcePath(asset: string): string {
    // Transform @ycore/componentry/shadcn-ui/assets/file.svg to node_modules/@ycore/componentry/dist/shadcn-ui/assets/file.svg
    return asset.replace(/^@([^/]+)\/([^/]+)\/(.+)$/, 'node_modules/@$1/$2/dist/$3');
  }

  return {
    name: 'resolve-assets-plugin',
    resolveId(id: string) {
      // Handle virtual asset imports
      if (id.startsWith(virtualPrefix)) {
        return id;
      }

      // Handle direct package asset imports with ?url
      for (const asset of options.assets) {
        if (id === asset || id === `${asset}?url`) {
          return `${virtualPrefix}${asset}`;
        }
      }
      return null;
    },
    async load(id: string) {
      if (id.startsWith(virtualPrefix)) {
        const asset = id.replace(virtualPrefix, '');

        if (options.assets.includes(asset)) {
          const sourceFile = path.join(process.cwd(), getSourcePath(asset));

          if (existsSync(sourceFile)) {
            try {
              // Let Vite handle this as an asset - this will respect build.assetsDir
              const fileName = path.basename(sourceFile);
              const source = await fs.readFile(sourceFile);
              const assetRefId = this.emitFile({
                type: 'asset',
                name: fileName,
                source,
              });
              return `export default import.meta.ROLLUP_FILE_URL_${assetRefId}`;
            } catch (error) {
              this.error(`Failed to load asset ${sourceFile}: ${error}`);
            }
          }
        }
      }
      return null;
    },
  } satisfies Plugin<ResolveAssetsPluginOptions>;
}
