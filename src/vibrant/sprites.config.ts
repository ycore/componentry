import path from 'node:path';
import type { IconSpriteConfig } from '../images/@types/icon-spritesheet.types';

// Resolve paths relative to this config file's directory
const configDir = import.meta.dirname;
const workspaceRoot = path.resolve(configDir, '..');

// Used with manual run using ws:sprites to update static assets
export const spriteConfig: IconSpriteConfig[] = [
  {
    inputDir: path.resolve(workspaceRoot, '../node_modules/lucide-static/icons'),
    outputDir: path.resolve(configDir, 'assets'),
    spriteFileName: 'lucide-sprites.svg',
    typesFileName: path.resolve(configDir, '@types/lucide-sprites.ts'),
    inputFilespec: [
      'arrow-down.svg',
      'arrow-left.svg',
      'arrow-right.svg',
      'arrow-up.svg',
      'badge-check.svg',
      'calendar.svg',
      'check.svg',
      'chevrons-down-up.svg',
      'chevrons-up-down.svg',
      'chevron-down.svg',
      'chevron-left.svg',
      'chevron-right.svg',
      'chevron-up.svg',
      'circle-alert.svg',
      'circle-check.svg',
      'circle-question-mark.svg',
      'circle-small.svg',
      'circle.svg',
      'dot.svg',
      'ellipsis-vertical.svg',
      'ellipsis.svg',
      'house.svg',
      'info.svg',
      'loader-circle.svg',
      'loader.svg',
      'moon.svg',
      'panel-bottom.svg',
      'panel-left.svg',
      'panel-right.svg',
      'panel-top.svg',
      'search.svg',
      'slash.svg',
      'sun.svg',
      'trash-2.svg',
      'user-round.svg',
      'x.svg',
    ],
  },
  {
    inputDir: path.resolve(workspaceRoot, '../node_modules/lucide-static/icons'),
    outputDir: path.resolve(configDir, 'assets'),
    spriteFileName: 'example-sprites.svg',
    typesFileName: path.resolve(configDir, '@types/example-sprites.ts'),
    inputFilespec: ['app-window.svg', 'bold.svg', 'file-code-2.svg', 'italic.svg', 'popcorn.svg', 'underline.svg'],
  },
];
