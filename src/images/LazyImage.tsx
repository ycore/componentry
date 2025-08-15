import clsx from 'clsx';
import React from 'react';
import { Await } from 'react-router';

import { Spinner } from '../shadcn-ui/custom/spinner';
import type { ImageData, LazyGalleryProps, LazyImageProps } from './@types/LazyImage.types';

export const imageLoader = async (filenames: Record<string, () => Promise<unknown>>) => {
  return Object.keys(filenames).map(filePath => filePath.replace(/.*\/(.*)/, '$1'));
};

export const createRemoteImagePromise = (src: string, alt: string, width?: number, height?: number): Promise<ImageData> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({ src, alt, width: width || img.naturalWidth, height: height || img.naturalHeight, loading: 'lazy' });
    };
    img.onerror = () => {
      reject(new Error(`Failed to load image: ${src}`));
    };
    img.src = src;
  });
};

export function LazyImage({
  image,
  src,
  alt,
  width,
  height,
  className,
  spriteUrl,
  fallback = spriteUrl ? <Spinner spriteUrl={spriteUrl} /> : <div className="text-slate-500/50">Loading...</div>,
}: LazyImageProps) {
  const imagePromise = image || (src ? createRemoteImagePromise(src, alt || '', width, height) : null);

  if (!imagePromise) {
    return <div className="text-slate-500/50">Error: No image source provided</div>;
  }

  return (
    <React.Suspense fallback={fallback}>
      <TypedAwait<ImageData>
        resolve={imagePromise}
        errorElement={spriteUrl ? <Spinner spriteUrl={spriteUrl} className="text-slate-500/50" /> : <div className="text-slate-500/50">Error loading image</div>}
      >
        {(imageData: ImageData) => <ImageElement {...imageData} className={clsx(imageData.className, className)} />}
      </TypedAwait>
    </React.Suspense>
  );
}

export function LazyGallery({
  images,
  className,
  imageClass,
  spriteUrl,
  fallback = spriteUrl ? <Spinner spriteUrl={spriteUrl} className="h-[180px]" /> : <div className="h-[180px] text-slate-500/50">Loading...</div>,
}: LazyGalleryProps) {
  return (
    <div className={className}>
      {images.map(imgPromise => (
        <LazyImage key={imgPromise.toString()} image={imgPromise} className={imageClass} spriteUrl={spriteUrl} fallback={fallback} />
      ))}
    </div>
  );
}

function TypedAwait<T>({ resolve, children, ...props }: { resolve: Promise<T>; children: (data: T) => React.ReactNode;[key: string]: unknown }) {
  return (
    <Await resolve={resolve} {...props}>
      {data => children(data as T)}
    </Await>
  );
}

const ImageElement: React.FC<ImageData> = ({ src, alt, width, height, className, loading = 'lazy' }) => {
  return <img src={src} alt={alt} width={width} height={height} className={className} loading={loading} decoding="async" />;
};
