import { staticSpriteConfig } from '../../shadcn-ui/sprites.config';
import type { IconSpriteConfig } from '../@types/icon-spritesheet.types';
import { createSpritesheet } from '../plugins/icon-spritesheet';

async function createSpritesheets(args: IconSpriteConfig | IconSpriteConfig[]) {
  const configs = Array.isArray(args) ? args : [args];
  configs.map(async config => {
    const { inputDir, outputDir, inputFilespec, typesFileName, spriteFileName } = config;
    await createSpritesheet({ inputDir, outputDir, inputFilespec, typesFileName, spriteFileName });
  });
}

createSpritesheets(staticSpriteConfig).catch(console.error);
