export interface ImageData {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading: 'eager' | 'lazy';
}
export interface LazyImageProps {
  image?: Promise<ImageData>;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  fallback?: React.ReactNode;
}
export interface LazyGalleryProps {
  images: Array<Promise<ImageData>>;
  className?: string;
  imageClass?: string;
  fallback?: React.ReactNode;
}
