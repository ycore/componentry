import { pathToFileURL } from 'node:url';
import type { BaseIssue } from 'valibot';
import { array, boolean, custom, minLength, object, optional, pipe, safeParse, string, union } from 'valibot';
import type { IconSpriteConfig } from './@types/icon-spritesheet.types';
import { createSpritesheet } from './create-spritesheet-plugin';

const SpriteConfigSchema = object({
  inputDir: pipe(string(), minLength(1, 'inputDir cannot be empty')),
  outputDir: pipe(string(), minLength(1, 'outputDir cannot be empty')),
  spriteFileName: pipe(string(), minLength(1, 'spriteFileName cannot be empty')),
  inputFilespec: optional(union([string(), array(string())])),
  typesFileName: optional(string()),
  ignoreLimit: optional(boolean()),
  nameTransformer: optional(custom<(name: string) => string>(input => typeof input === 'function', 'Must be a function')),
});
const IconConfigsSchema = union([SpriteConfigSchema, array(SpriteConfigSchema)]);

function formatValidationErrors(issues: BaseIssue<unknown>[], configIndex?: number): string {
  const prefix = configIndex !== undefined ? `Config at index ${configIndex}` : 'Config';
  const errorList = issues
    .map(issue => {
      const path = issue.path?.map(p => p.key).join('.') || 'unknown';
      return `  - ${path}: ${issue.message}`;
    })
    .join('\n');

  return `❌ ${prefix} validation failed:\n${errorList}`;
}

async function loadConfig(configPath: string): Promise<IconSpriteConfig | IconSpriteConfig[] | null> {
  try {
    // Convert to file URL for dynamic import (works with both absolute and relative paths)
    const fileUrl = pathToFileURL(configPath).href;
    const configModule = await import(fileUrl);

    // Support both default and named exports
    const config = configModule.default || configModule.spriteConfig;

    if (!config) {
      console.error(`❌ No config found in ${configPath}\n   Expected: default export or spriteConfig`);
      return null;
    }

    return config;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`❌ Failed to load config from ${configPath}:\n   ${error.message}`);
    } else {
      console.error(`❌ Failed to load config from ${configPath}`);
    }
    return null;
  }
}

async function createSpritesheets(args: IconSpriteConfig | IconSpriteConfig[]) {
  const configs = Array.isArray(args) ? args : [args];

  for (const config of configs) {
    const { inputDir, outputDir, inputFilespec, typesFileName, spriteFileName, nameTransformer } = config;
    await createSpritesheet({ inputDir, outputDir, inputFilespec, typesFileName, spriteFileName, nameTransformer });
  }
}

async function main() {
  const args = process.argv.slice(2);
  const configPath = args[0];

  if (!configPath) {
    console.error(`❌ Usage: bun create-spritesheet-cli.ts <config-path>

Examples:
  bun create-spritesheet-cli.ts ../vibrant/sprites.config.ts
  bun create-spritesheet-cli.ts ./my-sprites.config.ts

Config file should export IconSpriteConfig | IconSpriteConfig[] as:
  - default export (recommended)
  - named export: spriteConfig
`);
    process.exit(1);
  }

  console.info(`📦 Loading config from: ${configPath}\n`);

  const config = await loadConfig(configPath);
  if (!config) {
    process.exit(1);
  }

  // Validate config using Valibot schema
  const parseResult = safeParse(IconConfigsSchema, config, { abortEarly: false });

  if (!parseResult.success) {
    console.error(formatValidationErrors(parseResult.issues));
    process.exit(1);
  }

  await createSpritesheets(parseResult.output);
  console.info('\n✅ All spritesheets processed successfully');
}

main().catch(error => {
  console.error('❌ Unexpected error:', error);
  process.exit(1);
});
