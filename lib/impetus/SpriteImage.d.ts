interface SpriteImageProps {
    name: string;
    spritePath: string;
    manifestPath: string;
    lazy?: boolean;
    className?: string;
    alt?: string;
}
export declare function SpriteImage({ name, spritePath, manifestPath, lazy, className, alt }: SpriteImageProps): import("react/jsx-runtime").JSX.Element;
export {};
