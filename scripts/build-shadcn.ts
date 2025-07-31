// tsx workspaces/componentry/scripts/build-shadcn.ts
import fs from 'node:fs';
import path from 'node:path';

// rm -rf workspaces/componentry/src/shadcn-ui
// rm -rf workspaces/componentry/src/shadcn-ui/examples
// mkdir -p workspaces/componentry/src/shadcn-ui/{examples,hooks,styles}
// git clone https://github.com/shadcn-ui/ui.git workspaces/componentry/src/temp-shadcn
// cp -r workspaces/componentry/src/temp-shadcn/apps/v4/registry/new-york-v4/ui/* workspaces/componentry/src/shadcn-ui/
// cp -r workspaces/componentry/src/temp-shadcn/apps/v4/registry/new-york-v4/hooks/* workspaces/componentry/src/shadcn-ui/hooks/
// cp -r workspaces/componentry/src/temp-shadcn/apps/v4/styles/* workspaces/componentry/src/shadcn-ui/styles/
// cp -r workspaces/componentry/src/temp-shadcn/apps/v4/registry/new-york-v4/examples/* workspaces/componentry/src/shadcn-ui/examples/
// lucide-react, class-variance-authority, react-hook-form, input-otp
// @/registry/new-york/ui/button

const COMPONENTS_PATH = new URL('../src/shadcn-ui', import.meta.url);
const COMPONENTS_ADD = [
  {
    relativePath: 'components',
    fileSpec: '*.tsx'
  },
  {
    relativePath: 'custom',
    fileSpec: '*.tsx'
  },
  {
    relativePath: 'examples',
    fileSpec: 'index.tsx'
  },
  {
    relativePath: '\@types',
    fileSpec: 'lucide-sprites.ts'
  }
] as const;
const SUFFIX = '';
const REMOVE_COMPONENTS = ['calendar', 'carousel', 'chart', 'drawer', 'input-otp', 'resizable', 'toast', 'toaster'];

console.log('Reading', COMPONENTS_PATH.pathname);

async function processFiles(basePath: string, relativePath: string = '', fileSpec?: string) {
  const files = fs.readdirSync(basePath).sort();
  const processedFiles = [];

  for (const file of files) {
    if (!file.endsWith('.tsx') && !file.endsWith('.ts')) continue;
    // if (fileSpec && file !== fileSpec) continue;
    if (fileSpec) {
      if (fileSpec === '*.tsx') {
      } else if (file !== fileSpec) {
        continue;
      }
    }

    const filePath = path.join(basePath, file);
    const fileName = path.basename(file, '.tsx');
    const filePathWithRelative = relativePath ? path.join(relativePath, fileName) : fileName;

    // Remove and skip REMOVE_COMPONENTS (only for main directory, not custom)
    if (!relativePath && REMOVE_COMPONENTS.includes(fileName)) {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
      continue;
    }

    let fileContent = fs.readFileSync(filePath, 'utf-8');

    // Check if file uses React (JSX or React-specific code) but lacks React import
    const usesReact = /(<[A-Z][^>]*>|React\.|jsx|tsx)/g.test(fileContent);
    const hasReactImport = /import\s+.*?React.*?from\s+['"]react['"]/.test(fileContent);
    const hasReactTypeImport = /import\s+type\s+.*?React.*?from\s+['"]react['"]/.test(fileContent);
    const hasReactNamespaceImport = /import\s+(\*\s+as\s+React|type\s+\*\s+as\s+React)\s+from\s+['"]react['"]/.test(fileContent);

    // Apply shadcn-specific transformations
    fileContent = fileContent
      .replace(/["']use client["']\s*;?\s*/g, '') // Remove "use client"
      .replace(/import\s+{\s*cn\s*}\s+from\s+["'].*?\/utils["']/g, 'import clsx from \'clsx\'') // Replace cn import
      .replace(/\bcn\(/g, 'clsx(') // Replace cn() calls with clsx()
      .replace(/@\/registry\/new-york\//g, './') // Replace @/registry/new-york/ with ./
      .replace(/@\/registry\/new-york-v4\/ui\//g, './') // Replace @/registry/new-york-v4/ui/ with ./
      .replace(/@\/registry\/new-york-v4\/hooks\/(.*)/g, './hooks/\$1'); // Replace @/registry/new-york-v4/hooks/ with ./

    // Convert React namespace imports to default imports if file uses React
    if (usesReact && hasReactNamespaceImport && file.endsWith('.tsx')) {
      fileContent = fileContent.replace(
        /import\s+(type\s+)?\*\s+as\s+React\s+from\s+(['"]react['"])/g,
        'import React from $2'
      );
    }

    // Convert React type imports to direct imports if file uses React
    if (usesReact && hasReactTypeImport && file.endsWith('.tsx')) {
      fileContent = fileContent.replace(
        /import\s+type\s+(.*?React.*?)\s+from\s+(['"]react['"])/g,
        'import $1 from $2'
      );
    }

    // Inject React import if file uses React but doesn't have the import
    if (usesReact && !hasReactImport && !hasReactTypeImport && !hasReactNamespaceImport && file.endsWith('.tsx')) {
      const importSection = fileContent.match(/^((?:import\s+.*?;\s*\n)*)/);
      if (importSection) {
        // Insert React import at the beginning of the import section
        fileContent = fileContent.replace(
          /^((?:import\s+.*?;\s*\n)*)/,
          `import React from 'react';\n$1`
        );
      } else {
        // No imports found, add React import at the top
        fileContent = `import React from 'react';\n\n${fileContent}`;
      }
    }

    // Write back the transformed content
    fs.writeFileSync(filePath, fileContent, 'utf-8');

    // Detect both grouped and standalone exports
    const exports = new Set<string>();
    const typeExports = new Set<string>();
    const useExports = new Set<string>();

    // 1. Process grouped exports: export { A, B, C }
    const groupedExports = fileContent.match(/export\s+\{([^}]+)\}/g);
    if (groupedExports) {
      for (const stmt of groupedExports) {
        const exportsContent = stmt.match(/\{\s*([^}]+?)\s*\}/)?.[1];
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

    // 2. Process standalone exports: export function ...() {} and export const ...
    const standaloneExports = fileContent.match(/export\s+(function|const)\s+([A-Za-z]\w+)/g);
    if (standaloneExports) {
      for (const stmt of standaloneExports) {
        const exportName = stmt.match(/export\s+(?:function|const)\s+([A-Za-z]\w+)/)?.[1];
        if (exportName) exports.add(exportName);
      }
    }

    processedFiles.push({ fileName, filePathWithRelative, relativePath, exports, typeExports, useExports });
  }

  return processedFiles;
}

async function generateIndexFile(componentPath: URL) {
  let indexContent = '';

  // Process main directory files
  // const mainFiles = await processFiles(componentPath.pathname);

  const additionalFiles = await Promise.all(
    COMPONENTS_ADD.map(async (config) => {
      const dirPath = path.join(componentPath.pathname, config.relativePath);

      if (!fs.existsSync(dirPath)) {
        return [];
      }

      return processFiles(dirPath, config.relativePath, config.fileSpec);
    })
  );

  // Process custom directory files if it exists
  // const customPath = path.join(componentPath.pathname, '../custom');
  // let customFiles = [];
  // if (fs.existsSync(customPath)) {
  //   customFiles = await processFiles(customPath, '../custom');
  // }

  // Process examples directory files if it exists
  // const examplesPath = path.join(componentPath.pathname, '../examples');
  // let examplesFiles = [];
  // if (fs.existsSync(examplesPath) && fs.existsSync(path.join(examplesPath, 'index.tsx'))) {
  //   examplesFiles = await processFiles(examplesPath, '../examples', 'index.tsx');
  // }

  // Combine all files
  // const allFiles = [...mainFiles, ...customFiles, ...examplesFiles];
  // const allFiles = [...mainFiles, ...additionalFiles.flat()];
  const allFiles = [...additionalFiles.flat()];

  for (const file of allFiles) {
    const { fileName, filePathWithRelative, relativePath, exports, typeExports, useExports } = file;

    // Handle type exports
    if (typeExports.size > 0) {
      indexContent += `export { type ${Array.from(typeExports).join(', type ')} } from './${filePathWithRelative}${SUFFIX}';\n`;
    }

    // Handle use exports
    if (useExports.size > 0) {
      indexContent += `export { ${Array.from(useExports).join(', ')} } from './${filePathWithRelative}${SUFFIX}';\n`;
    }

    // Handle regular component exports
    const componentExports = Array.from(exports);
    if (componentExports.length === 0) continue;

    // Find the main component (uppercase) and separate from lowercase exports
    const mainComponents = componentExports.filter(exp => /^[A-Z]/.test(exp));
    const lowercaseExports = componentExports.filter(exp => /^[a-z]/.test(exp));

    if (mainComponents.length === 0 && lowercaseExports.length > 0) {
      // Only lowercase exports, export them directly
      indexContent += `export { ${lowercaseExports.join(', ')} } from './${filePathWithRelative}${SUFFIX}';\n\n`;
      continue;
    }

    const anchorComponent = mainComponents[0];

    // Separate main components from component-prefixed exports
    const additionalMainComponents = [];
    const componentPrefixedExports = [];

    for (const exp of mainComponents.slice(1)) {
      // Convert component name to PascalCase for comparison
      const componentPascal = anchorComponent;
      if (exp.startsWith(componentPascal) && exp !== componentPascal) {
        componentPrefixedExports.push(exp);
      } else {
        additionalMainComponents.push(exp);
      }
    }

    const allAdditionalExports = [...additionalMainComponents, ...componentPrefixedExports, ...lowercaseExports];

    if (allAdditionalExports.length === 0) {
      // Export single component directly
      indexContent += `export { ${anchorComponent} } from './${filePathWithRelative}${SUFFIX}';\n\n`;
    } else {
      // Append component exports using shadcn naming pattern
      indexContent += `import { ${anchorComponent} as ${anchorComponent}Component } from './${filePathWithRelative}${SUFFIX}';\n`;
      indexContent += `import * as ${anchorComponent}Components from './${filePathWithRelative}${SUFFIX}';\n`;
      indexContent += `export const ${anchorComponent} = Object.assign(${anchorComponent}Component, {\n`;

      for (const exp of allAdditionalExports) {
        let propertyName;

        if (/^[a-z]/.test(exp)) {
          // Handle lowercase exports like buttonVariants -> Variants, navigationMenuTriggerStyle -> TriggerStyle
          const componentNameLower = fileName.toLowerCase().replace(/-/g, '');
          const anchorComponentLower = anchorComponent.toLowerCase();

          if (exp.startsWith(fileName)) {
            // Remove the component name prefix and capitalize
            propertyName = exp.replace(new RegExp(`^${fileName}`), '');
            propertyName = propertyName.charAt(0).toUpperCase() + propertyName.slice(1);
          } else if (exp.startsWith(componentNameLower)) {
            // Handle cases like navigationMenuTriggerStyle where filename is navigation-menu
            propertyName = exp.replace(new RegExp(`^${componentNameLower}`), '');
            propertyName = propertyName.charAt(0).toUpperCase() + propertyName.slice(1);
          } else if (exp.startsWith(anchorComponentLower)) {
            // Handle cases like navigationMenuTriggerStyle where component is NavigationMenu
            propertyName = exp.replace(new RegExp(`^${anchorComponentLower}`), '');
            propertyName = propertyName.charAt(0).toUpperCase() + propertyName.slice(1);
          } else {
            // For standalone lowercase exports, just capitalize
            propertyName = exp.charAt(0).toUpperCase() + exp.slice(1);
          }
        } else if (componentPrefixedExports.includes(exp)) {
          // Handle PascalCase exports that start with component name (e.g., NavigationMenuTriggerStyle -> TriggerStyle)
          propertyName = exp.replace(new RegExp(`^${anchorComponent}`), '');
        } else {
          // Handle other uppercase exports by removing the component prefix
          propertyName = exp.replace(new RegExp(`^${anchorComponent}`), '');
        }

        // Skip empty property names
        if (!propertyName) continue;

        indexContent += `  ${propertyName}: ${anchorComponent}Components.${exp},\n`;
      }

      indexContent += '});\n\n';
    }
  }

  const indexPath = path.join(componentPath.pathname, 'index.ts');
  fs.writeFileSync(indexPath, indexContent, 'utf-8');

  console.log(`Generated ${indexPath}`);
}

generateIndexFile(COMPONENTS_PATH).catch(console.error);
