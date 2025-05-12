// src/utils/icon-importer.ts
import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { normalizePath } from "vite";
function iconImporter(iconImportConfig) {
  let viteResolve;
  return {
    name: "vite-plugin-icon-importer",
    async buildStart() {
      for (const config of iconImportConfig) {
        await fs.mkdir(config.outputDir, { recursive: true });
        console.info(`\u{1F504} Populating ${config.outputDir}`);
        for (const fileName of config.fileNames) {
          try {
            const outputFileName = snakeToKebab(fileName.replace(/(?:Icon)?\.js$/, ".svg"));
            const outputPath = path.join(config.outputDir, outputFileName);
            const componentUrl = pathToFileURL(`${config.inputUrl}/${fileName}`).href;
            const module = await import(componentUrl);
            const Component = module.default;
            const element = React.createElement(Component, null);
            const svgContent = ReactDOMServer.renderToStaticMarkup(element);
            let existingContent = "";
            try {
              existingContent = await fs.readFile(outputPath, "utf8");
            } catch {
            }
            if (existingContent !== svgContent) {
              await fs.writeFile(outputPath, svgContent);
              console.log(` \u27A1\uFE0F Generated: ${normalizePath(outputPath)}`);
            }
          } catch (error) {
            console.error(`\u274C  Error processing ${fileName}:`, error?.message || String(error));
          }
        }
      }
    }
  };
}
function snakeToKebab(str) {
  return str.replace(/_/g, "-").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
export {
  iconImporter
};
//# sourceMappingURL=index.mjs.map