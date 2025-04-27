type Formatter = 'biome' | 'prettier';
type Resolution = '1x' | '2x' | '3x';
interface PluginProps {
    /**
     * Should the plugin generate TypeScript types for the image names
     * @default false
     */
    withTypes?: boolean;
    /**
     * The path to the image directory
     * @example "./images"
     */
    inputDir: string;
    /**
     * Output path for the generated sprite
     * @example "./public/images"
     */
    outputDir: string;
    /**
     * Output path for the generated type file
     * @example "./app/types.ts"
     */
    typesOutputFile?: string;
    /**
     * The name of the generated spritesheet
     * @default sprite.webp
     * @example "images.webp"
     */
    fileName?: string;
    /**
     * What formatter to use to format the generated files. Can be "biome" or "prettier"
     * @default no formatter
     * @example "biome"
     */
    formatter?: Formatter;
    /**
     * The cwd, defaults to process.cwd()
     * @default process.cwd()
     */
    cwd?: string;
    /**
     * Callback function that is called when the script is generating the image name
     * This is useful if you want to modify the image name before it is written to the file
     * @example (imageName) => imageName.replace("photo", "image")
     */
    imageNameTransformer?: (fileName: string) => string;
    /**
     * Generate high-resolution variants
     * @default ["1x"]
     * @example ["1x", "2x"]
     */
    resolutions?: Resolution[];
    /**
     * Padding between images in the sprite
     * @default 2
     */
    padding?: number;
    /**
     * The quality of the WebP image (0-100)
     * @default 80
     */
    quality?: number;
    /**
     * Maximum width of the sprite
     * @default 2048
     */
    maxSpriteWidth?: number;
}
/**
 * Each write can trigger dev server reloads
 * so only write if the content has changed
 */
export declare const webpSpritesheet: (args: PluginProps | PluginProps[]) => {
    name: string;
    buildStart(this: import("rollup").PluginContext): Promise<void>;
    config(this: void, config: import("vite").UserConfig): Promise<void>;
}[];
export {};
