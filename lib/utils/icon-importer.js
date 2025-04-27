var __rewriteRelativeImportExtension = (this && this.__rewriteRelativeImportExtension) || function (path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : (d + ext + "." + cm.toLowerCase() + "js");
        });
    }
    return path;
};
// vite-icon-importer-plugin.ts
import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { normalizePath } from 'vite';
export function iconImporter(iconImportConfig) {
    return {
        name: 'vite-plugin-icon-importer',
        async buildStart() {
            for (const config of iconImportConfig) {
                await fs.mkdir(config.outputDir, { recursive: true });
                for (const fileName of config.fileNames) {
                    try {
                        const outputFileName = snakeToKebab(fileName.replace(/(?:Icon)?\.js$/, '.svg'));
                        const outputPath = path.join(config.outputDir, outputFileName);
                        // Resolve component path using Vite's resolution
                        const componentPath = await this.resolve(`${config.inputUrl}/${fileName}`, undefined, { skipSelf: true });
                        if (!componentPath) {
                            throw new Error(`Could not resolve ${fileName} from ${config.inputUrl}`);
                        }
                        // Convert to file URL for dynamic import
                        const componentUrl = pathToFileURL(componentPath.id).href;
                        // Dynamically import component
                        const module = await import(__rewriteRelativeImportExtension(componentUrl));
                        const Component = module.default;
                        // Create React element
                        const element = React.createElement(Component, null);
                        // Render to SVG string
                        const svgContent = ReactDOMServer.renderToStaticMarkup(element);
                        // Check existing content
                        let existingContent = '';
                        try {
                            existingContent = await fs.readFile(outputPath, 'utf8');
                        }
                        catch { } // File doesn't exist
                        // Write if changed
                        if (existingContent !== svgContent) {
                            await fs.writeFile(outputPath, svgContent);
                            console.log(`⬆️  Generated: ${normalizePath(outputPath)}`);
                        }
                    }
                    catch (error) {
                        console.error(`❌  Error processing ${fileName}:`, error.message);
                    }
                }
            }
        },
    };
}
function snakeToKebab(str) {
    return str
        .replace(/_/g, '-')
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .toLowerCase();
}
