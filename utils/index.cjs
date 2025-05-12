"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/utils/index.ts
var utils_exports = {};
__export(utils_exports, {
  iconImporter: () => iconImporter
});
module.exports = __toCommonJS(utils_exports);

// src/utils/icon-importer.ts
var import_promises = __toESM(require("fs/promises"), 1);
var import_node_path = __toESM(require("path"), 1);
var import_node_url = require("url");
var import_react = __toESM(require("react"), 1);
var import_server = __toESM(require("react-dom/server"), 1);
var import_vite = require("vite");
function iconImporter(iconImportConfig) {
  let viteResolve;
  return {
    name: "vite-plugin-icon-importer",
    async buildStart() {
      for (const config of iconImportConfig) {
        await import_promises.default.mkdir(config.outputDir, { recursive: true });
        console.info(`\u{1F504} Populating ${config.outputDir}`);
        for (const fileName of config.fileNames) {
          try {
            const outputFileName = snakeToKebab(fileName.replace(/(?:Icon)?\.js$/, ".svg"));
            const outputPath = import_node_path.default.join(config.outputDir, outputFileName);
            const componentUrl = (0, import_node_url.pathToFileURL)(`${config.inputUrl}/${fileName}`).href;
            const module2 = await import(componentUrl);
            const Component = module2.default;
            const element = import_react.default.createElement(Component, null);
            const svgContent = import_server.default.renderToStaticMarkup(element);
            let existingContent = "";
            try {
              existingContent = await import_promises.default.readFile(outputPath, "utf8");
            } catch {
            }
            if (existingContent !== svgContent) {
              await import_promises.default.writeFile(outputPath, svgContent);
              console.log(` \u27A1\uFE0F Generated: ${(0, import_vite.normalizePath)(outputPath)}`);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  iconImporter
});
//# sourceMappingURL=index.cjs.map