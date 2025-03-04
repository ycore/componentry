// tsx workspaces/componentry/scripts/build-index.ts
import fs from 'node:fs';
import path from 'node:path';

const COMPONENT_PATH = new URL('../src/catalyst', import.meta.url);
const SUFFIX = '.js';

console.log('Reading', COMPONENT_PATH.pathname);

async function generateIndexFile(componentPath: URL) {
  const files = fs.readdirSync(componentPath.pathname);

  let indexContent = '';

  for (const file of files) {
    if (!file.endsWith('.tsx')) continue;

    const filePath = path.join(componentPath.pathname, file);
    const fileName = path.basename(file, '.tsx');
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // Detect both grouped and standalone exports
    const exports = new Set<string>();
    const typeExports = new Set<string>();
    const useExports = new Set<string>();

    // 1. Process grouped exports: export { A, B, C }
    const groupedExports = fileContent.match(/export\s+{([^}]+)}/g);
    if (groupedExports) {
      for (const stmt of groupedExports) {
        const exportsContent = stmt.match(/{\s*([^}]+?)\s*}/)?.[1];
        if (!exportsContent) continue;

        for (const clause of exportsContent.split(',')) {
          const trimmed = clause.trim();
          if (trimmed.startsWith('type ')) {
            typeExports.add(trimmed.replace('type ', ''));
          } else if (trimmed.startsWith('interface ')) {
            typeExports.add(trimmed.replace('interface ', ''));
          } else if (trimmed.startsWith('use')) {
            useExports.add(trimmed);
          } else {
            exports.add(trimmed);
          }
        }
      }
    }

    // 2. Process standalone exports: export function ...() {}
    const standaloneExports = fileContent.match(/export\s+(function|const)\s+([A-Z]\w+)/g);
    if (standaloneExports) {
      for (const stmt of standaloneExports) {
        const exportName = stmt.match(/export\s+(?:function|const)\s+([A-Z]\w+)/)?.[1];
        if (exportName) exports.add(exportName);
      }
    }

    // Handle type exports
    if (typeExports.size > 0) {
      indexContent += `export { type ${Array.from(typeExports).join(', type ')} } from './${fileName}${SUFFIX}';\n`;
    }

    // Handle use exports
    if (useExports.size > 0) {
      indexContent += `export { ${Array.from(useExports).join(', ')} } from './${fileName}${SUFFIX}';\n`;
    }

    // Handle regular component exports
    const componentExports = Array.from(exports);
    if (componentExports.length === 0) continue;

    const anchorComponent = componentExports[0];
    const additionalExports = componentExports.slice(1);

    if (additionalExports.length === 0) {
      // Export single exports directly
      indexContent += `export { ${anchorComponent} } from './${fileName}${SUFFIX}';\n\n`;
    } else {
      // Append component exports
      indexContent += `import { ${anchorComponent} as ${anchorComponent}Component } from './${fileName}${SUFFIX}';\n`;
      indexContent += `import * as ${anchorComponent}Components from './${fileName}${SUFFIX}';\n`;
      indexContent += `export const ${anchorComponent} = Object.assign(${anchorComponent}Component, {\n`;

      for (const exp of additionalExports) {
        const trimmed = exp.replace(new RegExp(`^${anchorComponent}`), '');
        // Skip empty export names - trailing commas
        if (!trimmed) continue;
        indexContent += `  ${trimmed}: ${anchorComponent}Components.${exp},\n`;
      }

      indexContent += '});\n\n';
    }
  }

  const indexPath = path.join(componentPath.pathname, 'index.ts');
  fs.writeFileSync(indexPath, indexContent, 'utf-8');

  console.log(`Generated ${indexPath}`);
}

generateIndexFile(COMPONENT_PATH).catch(console.error);
