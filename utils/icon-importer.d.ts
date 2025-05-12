/**
 * A Vite plugin that imports React icon components and renders them as SVG files.
 *
 * @param iconImportConfig - Configuration array for icon imports
 * @returns A Vite plugin object
 *
 * @example
 * ```ts
 * // vite.config.ts
 * import { defineConfig } from 'vite'
 * import { iconImporter } from './vite-icon-importer-plugin'
 *
 * export default defineConfig({
 *   plugins: [
 *     iconImporter([
 *       {
 *         inputUrl: 'node_modules/@heroicons/react/24/solid',
 *         outputDir: 'resources/assets/icon-heroicons',
 *         fileNames: ['HomeIcon.js', 'UserCircleIcon.js', 'ArrowDownLeftIcon.js']
 *       }
 *     ])
 *   ]
 * })
 * ```
 */
export declare function iconImporter(iconImportConfig: any): {
    name: string;
    buildStart(): Promise<void>;
};
//# sourceMappingURL=icon-importer.d.ts.map