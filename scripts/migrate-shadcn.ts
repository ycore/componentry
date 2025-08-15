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

const COMPONENT_PATH = new URL('../src/shadcn-ui', import.meta.url);

console.log('Reading', COMPONENT_PATH.pathname);

async function processFiles(basePath: string, relativePath: string = '') {
  const files = fs.readdirSync(basePath);
  const processedFiles = [];

  for (const file of files) {
    if (!file.endsWith('.tsx')) continue;

    const filePath = path.join(basePath, file);
    const fileName = path.basename(file, '.tsx');
    const filePathWithRelative = relativePath ? path.join(relativePath, fileName) : fileName;

    let fileContent = fs.readFileSync(filePath, 'utf-8');

    const {content: migratedContent, replacedPackages} = await migrateRadixFile(fileContent);

    console.log(filePath, {replacedPackages})

    // Write back the transformed content
    fs.writeFileSync(filePath, migratedContent, 'utf-8');
  }

  return processedFiles;
}

function toPascalCase(str: string): string {
  return str
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("")
}

function processNamedImports(
  namedImports: string,
  isTypeOnly: boolean,
  imports: Array<{ name: string; alias?: string; isType?: boolean }>,
  packageName: string
) {
  // Clean up multi-line imports.
  // Remove comments and whitespace.
  const cleanedImports = namedImports
    .replace(/\/\/.*$/gm, "")
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\s+/g, " ")
    .trim()

  const namedImportList = cleanedImports
    .split(",")
    .map((importItem) => importItem.trim())
    .filter(Boolean)

  for (const importItem of namedImportList) {
    const inlineTypeMatch = importItem.match(/^type\s+(\w+)(?:\s+as\s+(\w+))?$/)
    const aliasMatch = importItem.match(/^(\w+)\s+as\s+(\w+)$/)

    if (inlineTypeMatch) {
      // Inline type: "type DialogProps" or "type DialogProps as Props"
      const importName = inlineTypeMatch[1]
      const importAlias = inlineTypeMatch[2]

      if (packageName === "slot" && importName === "Slot" && !importAlias) {
        imports.push({
          name: "Slot",
          alias: "SlotPrimitive",
          isType: true,
        })
      } else {
        imports.push({
          name: importName,
          alias: importAlias,
          isType: true,
        })
      }
    } else if (aliasMatch) {
      // Regular import with alias: "Root as DialogRoot"
      const importName = aliasMatch[1]
      const importAlias = aliasMatch[2]

      if (
        packageName === "slot" &&
        importName === "Slot" &&
        importAlias === "Slot"
      ) {
        imports.push({
          name: "Slot",
          alias: "SlotPrimitive",
          isType: isTypeOnly,
        })
      } else {
        imports.push({
          name: importName,
          alias: importAlias,
          isType: isTypeOnly,
        })
      }
    } else {
      // Simple import: "Root"
      // Special handling for Slot: always alias it as SlotPrimitive
      if (packageName === "slot" && importItem === "Slot") {
        imports.push({
          name: "Slot",
          alias: "SlotPrimitive",
          isType: isTypeOnly,
        })
      } else {
        imports.push({
          name: importItem,
          isType: isTypeOnly,
        })
      }
    }
  }
}

export async function migrateRadixFile(
  content: string
): Promise<{ content: string; replacedPackages: string[] }> {
  // Enhanced regex to handle type-only imports, but exclude react-icons
  // Also capture optional semicolon at the end
  const radixImportPattern =
    /import\s+(?:(type)\s+)?(?:\*\s+as\s+(\w+)|{([^}]+)})\s+from\s+(["'])@radix-ui\/react-([^"']+)\4(;?)/g

  const imports: Array<{ name: string; alias?: string; isType?: boolean }> = []
  const linesToRemove: string[] = []
  const replacedPackages: string[] = []
  let quoteStyle = '"' // Default to double quotes
  let hasSemicolon = false // Track if any import had a semicolon

  let result = content
  let match

  // Find all Radix imports
  while ((match = radixImportPattern.exec(content)) !== null) {
    const [
      fullMatch,
      typeKeyword,
      namespaceAlias,
      namedImports,
      quote,
      packageName,
      semicolon,
    ] = match

    // Skip react-icons package and any sub-paths (like react-icons/dist/types)
    if (packageName === "icons" || packageName.startsWith("icons/")) {
      continue
    }

    linesToRemove.push(fullMatch)

    // Use the quote style and semicolon style from the first import
    if (linesToRemove.length === 1) {
      quoteStyle = quote
      hasSemicolon = semicolon === ";"
    }

    // Track which package we're replacing
    replacedPackages.push(`@radix-ui/react-${packageName}`)

    const isTypeOnly = Boolean(typeKeyword)

    if (namespaceAlias) {
      // Handle namespace imports: import * as DialogPrimitive from "@radix-ui/react-dialog"
      const componentName = toPascalCase(packageName)
      imports.push({
        name: componentName,
        alias: namespaceAlias,
        isType: isTypeOnly,
      })
    } else if (namedImports) {
      // Handle named imports: import { Root, Trigger } from "@radix-ui/react-dialog"
      // or import type { DialogProps } from "@radix-ui/react-dialog"
      // or import { type DialogProps, Root } from "@radix-ui/react-dialog"

      processNamedImports(namedImports, isTypeOnly, imports, packageName)
    }
  }

  if (imports.length === 0) {
    return {
      content,
      replacedPackages: [],
    }
  }

  // Remove duplicates.
  // Considering name, alias, and type status.
  const uniqueImports = imports.filter(
    (importName, index, self) =>
      index ===
      self.findIndex(
        (i) =>
          i.name === importName.name &&
          i.alias === importName.alias &&
          i.isType === importName.isType
      )
  )

  // Create the unified import with preserved quote style and type annotations
  const importList = uniqueImports
    .map((imp) => {
      const typePrefix = imp.isType ? "type " : ""
      return imp.alias
        ? `${typePrefix}${imp.name} as ${imp.alias}`
        : `${typePrefix}${imp.name}`
    })
    .join(", ")

  const unifiedImport = `import { ${importList} } from ${quoteStyle}radix-ui${quoteStyle}${
    hasSemicolon ? ";" : ""
  }`

  // Replace first import with unified import, remove the rest
  result = linesToRemove.reduce((acc, line, index) => {
    return acc.replace(line, index === 0 ? unifiedImport : "")
  }, result)

  // Clean up extra blank lines
  result = result.replace(/\n\s*\n\s*\n/g, "\n\n")

  // Handle special case for Slot usage transformation
  // Now that we import { Slot as SlotPrimitive }, we need to:
  // 1. Transform: const Comp = asChild ? Slot : [ANYTHING] -> const Comp = asChild ? SlotPrimitive.Slot : [ANYTHING]
  // 2. Transform: React.ComponentProps<typeof Slot> -> React.ComponentProps<typeof SlotPrimitive.Slot>
  const hasSlotImport = uniqueImports.some(
    (imp) => imp.name === "Slot" && imp.alias === "SlotPrimitive"
  )

  if (hasSlotImport) {
    // Find all lines that are NOT import lines to avoid transforming the import statement itself
    const lines = result.split("\n")
    const transformedLines = lines.map((line) => {
      // Skip import lines
      if (line.trim().startsWith("import ")) {
        return line
      }

      let transformedLine = line

      // Handle all Slot references in one comprehensive pass
      // Use placeholders to avoid double replacements

      // First, mark specific patterns with placeholders
      transformedLine = transformedLine.replace(
        /\b(asChild\s*\?\s*)Slot(\s*:)/g,
        "$1__SLOT_PLACEHOLDER__$2"
      )

      transformedLine = transformedLine.replace(
        /\bReact\.ComponentProps<typeof\s+Slot>/g,
        "React.ComponentProps<typeof __SLOT_PLACEHOLDER__>"
      )

      transformedLine = transformedLine.replace(
        /\bComponentProps<typeof\s+Slot>/g,
        "ComponentProps<typeof __SLOT_PLACEHOLDER__>"
      )

      transformedLine = transformedLine.replace(
        /(<\/?)Slot(\s*\/?>)/g,
        "$1__SLOT_PLACEHOLDER__$2"
      )

      // Handle any other standalone Slot usage
      transformedLine = transformedLine.replace(
        /\bSlot\b/g,
        (match, offset, string) => {
          // Don't transform if it's inside quotes
          const beforeMatch = string.substring(0, offset)
          const openQuotes = (beforeMatch.match(/"/g) || []).length
          const openSingleQuotes = (beforeMatch.match(/'/g) || []).length

          // If we're inside quotes, don't transform
          if (openQuotes % 2 !== 0 || openSingleQuotes % 2 !== 0) {
            return match
          }

          return "__SLOT_PLACEHOLDER__"
        }
      )

      // Finally, replace all placeholders with SlotPrimitive.Slot
      transformedLine = transformedLine.replace(
        /__SLOT_PLACEHOLDER__/g,
        "SlotPrimitive.Slot"
      )

      return transformedLine
    })

    result = transformedLines.join("\n")
  }

  // Remove duplicate packages
  const uniqueReplacedPackages = Array.from(new Set(replacedPackages))

  return {
    content: result,
    replacedPackages: uniqueReplacedPackages,
  }
}

async function migrateFile(componentPath: URL) {
  let indexContent = '';

  // Process main directory files
  const mainFiles = await processFiles(componentPath.pathname);

  // Process custom directory files if it exists
  const customPath = path.join(componentPath.pathname, 'custom');
  let customFiles = [];
  if (fs.existsSync(customPath)) {
    customFiles = await processFiles(customPath, 'custom');
  }

  console.log('Processed', {mainFiles}, {customFiles});
}

migrateFile(COMPONENT_PATH).catch(console.error);
