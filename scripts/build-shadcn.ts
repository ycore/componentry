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

console.log(import.meta.url);
const COMPONENTS_READ = new URL('../src/temp-shadcn/apps/v4/registry/new-york-v4/ui', import.meta.url);
const COMPONENTS_WRITE = new URL('../src/shadcn-ui/components', import.meta.url);
const COMPONENTS_CONFIG = {
  path: new URL('../src/shadcn-ui', import.meta.url),
  index: 'index.ts',
  folders: [
    {
      relativePath: 'components',
      fileSpec: '*.tsx'
    },
    {
      relativePath: 'custom',
      fileSpec: '*.tsx'
    },
    {
      relativePath: '\@types',
      fileSpec: 'lucide-sprites.ts'
    }
  ]
} as const;
const SUFFIX = '';
const IGNORE_COMPONENTS = ['calendar', 'carousel', 'chart', 'drawer', 'input-otp', 'resizable', 'toast', 'toaster'];
const ORPHANED_ICONS = ['CircleIcon'];
const ICON_NAME_MAP: Record<string, string> = {
  'MoreHorizontal': 'Ellipsis',
  'Loader2': 'Loader',
};

console.log('Reading from:', COMPONENTS_READ.pathname);
console.log('Writing to:', COMPONENTS_WRITE.pathname);
console.log('Index output:', path.join(COMPONENTS_CONFIG.path.pathname, COMPONENTS_CONFIG.index));

/**
 * Apply shadcn-specific transformations (use client, cn → clsx, path aliases)
 */
function applyShadcnTransformations(fileContent: string): string {
  return fileContent
    .replace(/["']use client["']\s*;?\s*/g, '') // Remove "use client"
    .replace(/import\s+{\s*cn\s*}\s+from\s+["'].*?\/utils["']/g, 'import clsx from \'clsx\'') // Replace cn import
    .replace(/\bcn\(/g, 'clsx(') // Replace cn() calls with clsx()
    .replace(/@\/registry\/new-york\//g, './') // Replace @/registry/new-york/ with ./
    .replace(/@\/registry\/new-york-v4\/ui\//g, './') // Replace @/registry/new-york-v4/ui/ with ./
    .replace(/@\/registry\/new-york-v4\/hooks\/(.*)/g, '../hooks/\$1') // Replace @/registry/new-york-v4/hooks/ with ../
    .replace(/bg-white/g, 'bg-background'); // Replace @/registry/new-york-v4/hooks/ with ./
}

/**
 * Transform lucide-react icons to Icon (pre-configured SpriteIcon)
 */
function transformLucideIcons(fileContent: string): string {
  const lucideImportMatch = fileContent.match(/import\s+{\s*([^}]+)\s*}\s+from\s+['"]lucide-react['"]/);
  if (!lucideImportMatch) return fileContent;

  // Extract icon names and build map
  const iconImports = lucideImportMatch[1].split(',').map(name => name.trim());
  const iconMap = new Map<string, string>();

  for (const iconImport of iconImports) {
    const iconId = iconImport.endsWith('Icon') ? iconImport.replace(/Icon$/, '') : iconImport;
    iconMap.set(iconImport, iconId);
  }

  // Remove lucide-react import
  fileContent = fileContent.replace(/import\s+{\s*[^}]+\s*}\s+from\s+['"]lucide-react['"];?\s*\n?/g, '');

  // Add Icon import - find position after the last import statement
  const importRegex = /^import\s+.*?from\s+['"][^'"]+['"];?\s*$/gm;
  let lastImportEnd = 0;
  let match;
  while ((match = importRegex.exec(fileContent)) !== null) {
    lastImportEnd = match.index + match[0].length;
  }

  if (lastImportEnd > 0) {
    const iconImport = `\nimport { Icon } from '../../vibrant/lib/icon';\n`;
    fileContent = fileContent.slice(0, lastImportEnd) + iconImport + fileContent.slice(lastImportEnd);
  }

  // Replace icon JSX elements with Icon
  for (const [iconName, iconId] of iconMap.entries()) {
    const mappedIconId = ICON_NAME_MAP[iconId] || iconId;

    // Escape icon name for use in regex
    const escapedIconName = iconName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // Pattern 1: Self-closing without props (e.g., <Check />)
    const iconRegexNoProp = new RegExp(`<${escapedIconName}\\s*\\/>`, 'g');
    fileContent = fileContent.replace(iconRegexNoProp, () => {
      return `<Icon iconId="${mappedIconId}" />`;
    });

    // Pattern 2: With props - handles multi-line and complex props (e.g., <Check className="..." />)
    const iconRegexWithProps = new RegExp(`<${escapedIconName}\\s+([\\s\\S]*?)\\/>`, 'g');
    fileContent = fileContent.replace(iconRegexWithProps, (match, attrs) => {
      return `<Icon iconId="${mappedIconId}" ${attrs.trim()} />`;
    });
  }

  return fileContent;
}

/**
 * Replace orphaned icon components with Icon
 * Handles partially transformed source files
 */
function replaceOrphanedIcons(fileContent: string): string {
  let hasReplacements = false;

  for (const iconName of ORPHANED_ICONS) {
    // Check if this icon exists in the file
    if (!fileContent.includes(`<${iconName}`)) {
      continue;
    }

    hasReplacements = true;

    // Extract icon ID (remove "Icon" suffix if present)
    const iconId = iconName.endsWith('Icon') ? iconName.replace(/Icon$/, '') : iconName;
    const mappedIconId = ICON_NAME_MAP[iconId] || iconId;

    // Escape icon name for regex
    const escapedIconName = iconName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // Pattern 1: Self-closing without props (e.g., <CircleIcon />)
    const iconRegexNoProp = new RegExp(`<${escapedIconName}\\s*\\/>`, 'g');
    fileContent = fileContent.replace(iconRegexNoProp, () => {
      return `<Icon iconId="${mappedIconId}" />`;
    });

    // Pattern 2: With props - handles multi-line and complex props
    const iconRegexWithProps = new RegExp(`<${escapedIconName}\\s+([\\s\\S]*?)\\/>`, 'g');
    fileContent = fileContent.replace(iconRegexWithProps, (match, attrs) => {
      return `<Icon iconId="${mappedIconId}" ${attrs.trim()} />`;
    });
  }

  // Add Icon import if we made replacements and it doesn't exist
  if (hasReplacements && !fileContent.includes("from '../lib/icon'")) {
    const lastImportMatch = fileContent.match(/(import\s+.*?;\s*\n)+/);
    if (lastImportMatch) {
      const insertionPoint = lastImportMatch[0].length;
      const iconImport = `\nimport { Icon } from '../lib/icon';\n`;
      fileContent = fileContent.slice(0, insertionPoint) + iconImport + fileContent.slice(insertionPoint);
    }
  }

  return fileContent;
}

/**
 * Fix React imports (namespace imports, type imports, add missing imports)
 */
function fixReactImports(fileContent: string): string {
  const usesReact = /(<[A-Z][^>]*>|React\.|jsx|tsx)/g.test(fileContent);
  const hasReactImport = /import\s+.*?React.*?from\s+['"]react['"]/.test(fileContent);
  const hasReactTypeImport = /import\s+type\s+.*?React.*?from\s+['"]react['"]/.test(fileContent);
  const hasReactNamespaceImport = /import\s+(\*\s+as\s+React|type\s+\*\s+as\s+React)\s+from\s+['"]react['"]/.test(fileContent);

  // Convert namespace imports to default imports
  if (usesReact && hasReactNamespaceImport) {
    fileContent = fileContent.replace(/import\s+(type\s+)?\*\s+as\s+React\s+from\s+(['"]react['"])/g, 'import React from $2');
  }

  // Convert type imports to regular imports
  if (usesReact && hasReactTypeImport) {
    fileContent = fileContent.replace(/import\s+type\s+(.*?React.*?)\s+from\s+(['"]react['"])/g, 'import $1 from $2');
  }

  // Add missing React import
  if (usesReact && !hasReactImport && !hasReactTypeImport && !hasReactNamespaceImport) {
    const importSection = fileContent.match(/^((?:import\s+.*?;\s*\n)*)/);
    if (importSection) {
      fileContent = fileContent.replace(/^((?:import\s+.*?;\s*\n)*)/, `import React from 'react';\n$1`);
    } else {
      fileContent = `import React from 'react';\n\n${fileContent}`;
    }
  }

  return fileContent;
}

/**
 * Remove empty lines between imports
 */
function cleanupImports(fileContent: string): string {
  const lines = fileContent.split('\n');
  const cleanedLines: string[] = [];
  let inImportSection = false;
  let lastLineWasImport = false;
  let importSectionEnded = false;

  for (const line of lines) {
    const isImportLine = /^import\s/.test(line.trim());
    const isEmptyLine = line.trim() === '';

    if (isImportLine) {
      inImportSection = true;
      lastLineWasImport = true;
      cleanedLines.push(line);
    } else if (inImportSection && isEmptyLine && lastLineWasImport) {
      // Skip empty lines between imports
      continue;
    } else if (inImportSection && !isImportLine && !isEmptyLine) {
      // Import section ended, add one empty line before content
      if (!importSectionEnded) {
        cleanedLines.push('');
        importSectionEnded = true;
      }
      cleanedLines.push(line);
    } else {
      cleanedLines.push(line);
    }

    if (!isImportLine && !isEmptyLine) {
      lastLineWasImport = false;
    }
  }

  return cleanedLines.join('\n');
}

/**
 * Update Spinner component to accept dynamic iconId
 */
function updateSpinnerComponent(fileContent: string): string {
  if (!fileContent.includes('function Spinner')) {
    return fileContent;
  }

  // Update function signature to remove spriteUrl and add iconId with default
  fileContent = fileContent.replace(
    /function Spinner\(\{\s*className,\s*\.\.\.props\s*\}:\s*([^)]+)\)/,
    'function Spinner({ className, iconId = \'Loader\', ...props }: $1 & { iconId?: string })'
  );

  // Replace hardcoded iconId with variable
  fileContent = fileContent.replace(/iconId="(?:Loader2?|LoaderCircle)"/, 'iconId={iconId}');

  return fileContent;
}

/**
 * Main transformation pipeline for component file content
 */
function transformComponentsContent(fileContent: string): string {
  fileContent = applyShadcnTransformations(fileContent);
  fileContent = transformLucideIcons(fileContent);
  fileContent = replaceOrphanedIcons(fileContent);
  fileContent = fixReactImports(fileContent);
  fileContent = updateSpinnerComponent(fileContent);
  fileContent = cleanupImports(fileContent);
  return fileContent;
}

/**
 * Process files for index generation (read exports only, no transformation)
 */
async function processFilesForIndex(basePath: string, relativePath: string = '', fileSpec?: string) {
  const files = fs.readdirSync(basePath).sort();
  const processedFiles = [];

  for (const file of files) {
    if (!file.endsWith('.tsx') && !file.endsWith('.ts')) continue;

    if (fileSpec) {
      if (fileSpec === '*.tsx') {
        // Process all .tsx files
      } else if (file !== fileSpec) {
        continue;
      }
    }

    const fileName = path.basename(file, '.tsx');
    const filePathWithRelative = relativePath ? path.join(relativePath, fileName) : fileName;

    // Skip IGNORE_COMPONENTS (only for components directory, not custom)
    if (relativePath === 'components' && IGNORE_COMPONENTS.includes(fileName)) {
      continue;
    }

    // Read file content to extract exports
    const filePath = path.join(basePath, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

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

    // 3. Process standalone type exports: export type ... = ...
    const standaloneTypeExports = fileContent.match(/export\s+type\s+([A-Za-z]\w+)/g);
    if (standaloneTypeExports) {
      for (const stmt of standaloneTypeExports) {
        const exportName = stmt.match(/export\s+type\s+([A-Za-z]\w+)/)?.[1];
        if (exportName) typeExports.add(exportName);
      }
    }

    processedFiles.push({ fileName, filePathWithRelative, relativePath, exports, typeExports, useExports });
  }

  return processedFiles;
}

/**
 * Phase 1: Transform components from source to destination
 * Reads all files from COMPONENTS_READ, transforms them, writes to COMPONENTS_WRITE
 */
async function transformComponents() {
  console.log('\n📝 Phase 1: Transforming components...');

  // Ensure write directory exists
  if (!fs.existsSync(COMPONENTS_WRITE.pathname)) {
    fs.mkdirSync(COMPONENTS_WRITE.pathname, { recursive: true });
  }

  if (!fs.existsSync(COMPONENTS_READ.pathname)) {
    console.log(`Error: Source directory not found: ${COMPONENTS_READ.pathname}`);
    return;
  }

  const files = fs.readdirSync(COMPONENTS_READ.pathname).sort();

  for (const file of files) {
    if (!file.endsWith('.tsx') && !file.endsWith('.ts')) continue;

    const fileName = path.basename(file, path.extname(file));

    // Skip IGNORE_COMPONENTS
    if (IGNORE_COMPONENTS.includes(fileName)) {
      console.log(`Ignored: ${fileName}`);
      continue;
    }

    // Read from source and transform the file content
    const readFilePath = path.join(COMPONENTS_READ.pathname, file);
    let fileContent = fs.readFileSync(readFilePath, 'utf-8');
    fileContent = transformComponentsContent(fileContent);

    // Write to destination
    const writeFilePath = path.join(COMPONENTS_WRITE.pathname, file);
    fs.writeFileSync(writeFilePath, fileContent, 'utf-8');
    console.log(`Transformed: ${file}`);
  }
}

/**
 * Phase 2: Generate index file from transformed components
 */
async function generateIndexFile() {
  console.log('\n📦 Phase 2: Generating index file...');

  // Ensure index directory exists
  if (!fs.existsSync(COMPONENTS_CONFIG.path.pathname)) {
    fs.mkdirSync(COMPONENTS_CONFIG.path.pathname, { recursive: true });
    console.log(`Created index directory: ${COMPONENTS_CONFIG.path.pathname}`);
  }

  let indexContent = '';

  // Read from transformed components
  const processedFiles = await Promise.all(
    COMPONENTS_CONFIG.folders.map(async (config) => {
      const componentDirPath = path.join(COMPONENTS_CONFIG.path.pathname, config.relativePath);

      if (!fs.existsSync(componentDirPath)) {
        console.log(`Skipping ${config.relativePath}: directory not found`);
        return [];
      }

      return processFilesForIndex(componentDirPath, config.relativePath, config.fileSpec);
    })
  );

  const allFiles = [...processedFiles.flat()];

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

  // Ensure index directory exists
  if (!fs.existsSync(COMPONENTS_CONFIG.path.pathname)) {
    fs.mkdirSync(COMPONENTS_CONFIG.path.pathname, { recursive: true });
    console.log(`Created index directory: ${COMPONENTS_CONFIG.path.pathname}`);
  }

  const indexPath = path.join(COMPONENTS_CONFIG.path.pathname, COMPONENTS_CONFIG.index);
  fs.writeFileSync(indexPath, indexContent, 'utf-8');

  console.log(`Generated ${indexPath}`);
}

/**
 * Main execution
 */
async function main() {
  try {
    console.log('🚀 Starting shadcn component build process...');

    // Phase 1: Transform components from source to destination
    await transformComponents();

    // Phase 2: Generate index file from transformed components
    await generateIndexFile();

    console.log('\n✅ Build complete!');
  } catch (error) {
    console.error('❌ Error during build:', error);
    process.exit(1);
  }
}

main();
