export interface IconSpriteConfig {
  inputDir: string;
  outputDir: string;
  inputFilespec?: string | string[];
  spriteFileName: string;
  typesFileName?: string;
  ignoreLimit?: boolean;
  nameTransformer?: (iconName: string) => string;
}
