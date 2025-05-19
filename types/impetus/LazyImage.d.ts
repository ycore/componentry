import type { LazyGalleryProps, LazyImageProps } from './@types/LazyImage.types';
export declare const imageLoader: (filenames: Record<string, () => Promise<unknown>>) => Promise<string[]>;
export declare function LazyImage({ image, className, fallback }: LazyImageProps): import("react/jsx-runtime").JSX.Element;
export declare function LazyGallery({ images, className, imageClass, fallback }: LazyGalleryProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=LazyImage.d.ts.map