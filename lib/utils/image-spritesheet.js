import { mkdir } from 'node:fs/promises';
import path from 'node:path';
// import chalk from 'chalk';
import { glob } from 'glob';
import sharp from 'sharp';
import { normalizePath } from 'vite';
const generateImageSprites = async ({ withTypes = false, inputDir, outputDir, typesOutputFile = `${outputDir}/types.ts`, cwd, formatter, fileName = 'sprite.webp', imageNameTransformer, resolutions = ['1x'], padding = 2, quality = 80, maxSpriteWidth = 2048, }) => {
    const cwdToUse = cwd ?? process.cwd();
    const inputDirRelative = path.relative(cwdToUse, inputDir);
    const outputDirRelative = path.relative(cwdToUse, outputDir);
    const files = glob.sync('**/*.{webp,png,jpg,jpeg}', {
        cwd: inputDir,
    });
    if (files.length === 0) {
        console.log(`⚠️  No image files found in ${inputDirRelative}`);
        return;
    }
    await mkdir(outputDirRelative, { recursive: true });
    // Create a sprite for each resolution
    for (const resolution of resolutions) {
        const resolutionFactor = Number.parseInt(resolution.replace('x', '')) || 1;
        const resolutionSuffix = resolution === '1x' ? '' : `@${resolution}`;
        const spritesheet = await generateWebpSprite({
            files,
            inputDir,
            outputPath: path.join(outputDir, fileName.replace(/\.webp$/, `${resolutionSuffix}.webp`)),
            outputDirRelative,
            imageNameTransformer,
            padding,
            quality,
            maxSpriteWidth,
            resolution,
            resolutionFactor,
        });
        // Generate metadata JSON file
        //   await generateMetadataFile({
        //     spritesheet,
        //     outputPath: path.join(outputDir, fileName.replace(/\.webp$/, `${resolutionSuffix}.json`)),
        //     outputDirRelative,
        //     formatter,
        //   });
        // }
        // if (withTypes) {
        //   const typesOutputDir = path.dirname(typesOutputFile);
        //   const typesFile = path.basename(typesOutputFile);
        //   const typesOutputDirRelative = path.relative(cwdToUse, typesOutputDir);
        //   await mkdir(typesOutputDirRelative, { recursive: true });
        //   await generateTypes({
        //     names: files.map((file: string) => transformImageName(file, imageNameTransformer ?? fileNameToCamelCase)),
        //     outputPath: path.join(typesOutputDir, typesFile),
        //     formatter,
        //   });
    }
};
const transformImageName = (fileName, transformer) => {
    const imageName = fileName.replace(/\.(webp|png|jpg|jpeg)$/, '');
    return transformer(imageName);
};
function fileNameToCamelCase(fileName) {
    const words = fileName.split('-');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join('');
}
/**
 * Creates a single WebP sprite file that contains all the images
 */
async function generateWebpSprite({ files, inputDir, outputPath, outputDirRelative, imageNameTransformer, padding, quality, maxSpriteWidth, resolution, resolutionFactor, }) {
    // First, process all images to get their dimensions
    const processedImages = await Promise.all(files.map(async (file) => {
        const id = transformImageName(file, imageNameTransformer ?? fileNameToCamelCase);
        const filePath = path.join(inputDir, file);
        // Get original dimensions
        const metadata = await sharp(filePath).metadata();
        const originalWidth = metadata.width || 0;
        const originalHeight = metadata.height || 0;
        // Resize for the current resolution if needed
        const image = await sharp(filePath)
            .resize({
            width: Math.round(originalWidth * resolutionFactor),
            height: Math.round(originalHeight * resolutionFactor),
            fit: 'contain',
        })
            .toBuffer();
        const resizedMetadata = await sharp(image).metadata();
        return {
            id,
            buffer: image,
            width: resizedMetadata.width || 0,
            height: resizedMetadata.height || 0,
            originalWidth,
            originalHeight,
        };
    }));
    // Calculate layout (simple row-based packing)
    let currentX = 0;
    let currentY = 0;
    let rowHeight = 0;
    let spriteWidth = 0;
    let spriteHeight = 0;
    const imagePositions = [];
    for (const img of processedImages) {
        // Check if we need to start a new row
        if (currentX + img.width > maxSpriteWidth) {
            currentX = 0;
            currentY += rowHeight + padding;
            rowHeight = 0;
        }
        // Position the image
        imagePositions.push({
            id: img.id,
            x: currentX,
            y: currentY,
            width: img.width,
            height: img.height,
            originalWidth: img.originalWidth,
            originalHeight: img.originalHeight,
            resolution,
        });
        // Update current position and row height
        currentX += img.width + padding;
        rowHeight = Math.max(rowHeight, img.height);
        spriteWidth = Math.max(spriteWidth, currentX);
        spriteHeight = Math.max(spriteHeight, currentY + rowHeight);
    }
    // Create a blank canvas for the sprite
    const sprite = sharp({
        create: {
            width: spriteWidth,
            height: spriteHeight,
            channels: 4,
            background: { r: 0, g: 0, b: 0, alpha: 0 },
        },
    });
    // Add each image to the sprite at its calculated position
    const compositeOperations = processedImages.map((img, index) => {
        const position = imagePositions[index];
        return {
            input: img.buffer,
            left: position.x,
            top: position.y,
        };
    });
    await sprite.composite(compositeOperations).webp({ quality }).toFile(outputPath);
    console.log(`🖼️  Generated WebP spritesheet${resolution !== '1x' ? ` @${resolution}` : ''} in ${outputDirRelative}`);
    return {
        width: spriteWidth,
        height: spriteHeight,
        images: imagePositions,
        resolution,
    };
}
// async function generateMetadataFile({
//   spritesheet,
//   outputPath,
//   outputDirRelative,
//   formatter,
// }: {
//   spritesheet: Spritesheet;
//   outputPath: string;
//   outputDirRelative?: string;
//   formatter?: Formatter;
// }) {
//   const metadata = {
//     width: spritesheet.width,
//     height: spritesheet.height,
//     resolution: spritesheet.resolution,
//     images: spritesheet.images.reduce(
//       (acc, img) => {
//         acc[img.id] = {
//           x: img.x,
//           y: img.y,
//           width: img.width,
//           height: img.height,
//           originalWidth: img.originalWidth,
//           originalHeight: img.originalHeight,
//         };
//         return acc;
//       },
//       {} as Record<string, Omit<SpriteMetadata, 'id' | 'resolution'>>
//     ),
//   };
//   const output = JSON.stringify(metadata, null, 2);
//   const formattedOutput = await lintFileContent(output, formatter, 'json');
//   await writeIfChanged(outputPath, formattedOutput, `📝  Generated metadata file in ${chalk.green(outputDirRelative)}`);
// }
// async function lintFileContent(fileContent: string, formatter: Formatter | undefined, typeOfFile: 'ts' | 'json' | 'svg') {
//   if (!formatter) {
//     return fileContent;
//   }
//   // TODO biome formatter for json/svg (currently doesn't work well)
//   if (formatter === 'biome' && (typeOfFile === 'svg' || typeOfFile === 'json')) {
//     return fileContent;
//   }
//   const prettierOptions = ['--parser', typeOfFile === 'ts' ? 'typescript' : typeOfFile === 'json' ? 'json' : 'html'];
//   const biomeOptions = ['format', '--stdin-file-path', `file.${typeOfFile}`];
//   const options = formatter === 'biome' ? biomeOptions : prettierOptions;
//   const stdinStream = new Readable();
//   stdinStream.push(fileContent);
//   stdinStream.push(null);
//   const { process } = exec(formatter, options, {});
//   if (!process?.stdin) {
//     return fileContent;
//   }
//   stdinStream.pipe(process.stdin);
//   process.stderr?.pipe(stderr);
//   process.on('error', err => {
//     // Console.error suppressed to match original code
//   });
//   let formattedContent = '';
//   process.stdout?.on('data', data => {
//     formattedContent = formattedContent + data.toString();
//   });
//   return new Promise<string>(resolve => {
//     process.on('exit', code => {
//       if (code === 0) {
//         resolve(formattedContent);
//       } else {
//         resolve(fileContent);
//       }
//     });
//   });
// }
// async function generateTypes({ names, outputPath, formatter }: { names: string[]; outputPath: string } & Pick<PluginProps, 'formatter'>) {
//   const output = [
//     '// This file is generated by WebP spritesheet generator',
//     '',
//     'export const imageNames = [',
//     ...names.map(name => `  "${name}",`),
//     '] as const',
//     '',
//     'export type ImageName = typeof imageNames[number]',
//     '',
//     'export interface SpriteImageCoordinates {',
//     '  x: number;',
//     '  y: number;',
//     '  width: number;',
//     '  height: number;',
//     '  originalWidth: number;',
//     '  originalHeight: number;',
//     '}',
//     '',
//     'export interface SpritesheetMetadata {',
//     '  width: number;',
//     '  height: number;',
//     '  resolution: string;',
//     '  images: Record<ImageName, SpriteImageCoordinates>;',
//     '}',
//     '',
//   ].join('\n');
//   const formattedOutput = await lintFileContent(output, formatter, 'ts');
//   await writeIfChanged(outputPath, formattedOutput, `${chalk.blueBright('TS')} Generated image types in ${chalk.green(outputPath)}`);
// }
/**
 * Each write can trigger dev server reloads
 * so only write if the content has changed
 */
// async function writeIfChanged(filepath: string, newContent: string, message: string) {
//   try {
//     const currentContent = await fs.readFile(filepath, 'utf8');
//     if (currentContent !== newContent) {
//       await fs.writeFile(filepath, newContent, 'utf8');
//       console.log(message);
//     }
//   } catch (e) {
//     // File doesn't exist yet
//     await fs.writeFile(filepath, newContent, 'utf8');
//     console.log(message);
//   }
// }
export const webpSpritesheet = (args) => {
    const configs = Array.isArray(args) ? args : [args];
    const allSpriteSheetNames = configs.flatMap(config => {
        const baseName = config.fileName ?? 'sprite.webp';
        return (config.resolutions ?? ['1x']).map(res => {
            return res === '1x' ? baseName : baseName.replace(/\.webp$/, `@${res}.webp`);
        });
    });
    return configs.map((config, i) => {
        const spriteGenerator = async () => generateImageSprites(config);
        const workDir = config.cwd ?? process.cwd();
        return {
            name: `webp-spritesheet-generator${i > 0 ? i.toString() : ''}`,
            async buildStart() {
                await spriteGenerator();
            },
            // async watchChange(file, type) {
            //   const inputPath = normalizePath(path.join(workDir, config.inputDir));
            //   const isImageFile = /\.(webp|png|jpg|jpeg)$/.test(file);
            //   if (file.includes(inputPath) && isImageFile && ['create', 'delete'].includes(type.event)) {
            //     await spriteGenerator();
            //   }
            // },
            // async handleHotUpdate({ file }) {
            //   const inputPath = normalizePath(path.join(workDir, config.inputDir));
            //   const isImageFile = /\.(webp|png|jpg|jpeg)$/.test(file);
            //   if (file.includes(inputPath) && isImageFile) {
            //     await spriteGenerator();
            //   }
            // },
            async config(config) {
                if (i > 0) {
                    return;
                }
                config.build = config.build ?? {};
                const subFunc = typeof config.build.assetsInlineLimit === 'function' ? config.build.assetsInlineLimit : undefined;
                const limit = typeof config.build.assetsInlineLimit === 'number' ? config.build.assetsInlineLimit : undefined;
                const assetsInlineLimitFunction = (name, content) => {
                    const isSpriteSheet = allSpriteSheetNames.some(spriteSheetName => {
                        return name.endsWith(normalizePath(`${config.outputDir}/${spriteSheetName}`));
                    });
                    // Our spritesheet? Early return
                    if (isSpriteSheet) {
                        return false;
                    }
                    // User defined limit? Check if it's smaller than the limit
                    if (limit) {
                        const size = content.byteLength;
                        return size <= limit;
                    }
                    // User defined function? Run it
                    if (typeof subFunc === 'function') {
                        return subFunc(name, content);
                    }
                    return undefined;
                };
                config.build.assetsInlineLimit = assetsInlineLimitFunction;
            },
        };
    });
};
