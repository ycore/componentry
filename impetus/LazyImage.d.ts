import React from 'react';
export interface ImageData {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    loading: 'eager' | 'lazy';
}
interface LazyImageProps {
    image: Promise<ImageData>;
    className?: string;
    fallback?: React.ReactNode;
}
interface LazyGalleryProps {
    images: Array<Promise<ImageData>>;
    className?: string;
    imageClass?: string;
    fallback?: React.ReactNode;
}
export declare const imageLoader: (filenames: Record<string, () => Promise<unknown>>) => Promise<string[]>;
export declare function LazyImage({ image, className, fallback }: LazyImageProps): import("react/jsx-runtime").JSX.Element;
export declare function LazyGallery({ images, className, imageClass, fallback }: LazyGalleryProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=LazyImage.d.ts.map