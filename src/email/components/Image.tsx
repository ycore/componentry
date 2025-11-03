import { useTailwindStylesMap } from '../server/tailwind-mapping-context';
import { tailwindToInline } from '../server/tailwind-to-inline';
import type { ImageProps } from './@types/email-components.types';

/**
 * Image component - Responsive image with proper alt text
 */
export function Image({ src, alt, width, height, title, className, style }: ImageProps): React.JSX.Element {
  const stylesMap = useTailwindStylesMap();
  const inlineStyles = tailwindToInline(className, style, stylesMap);

  // Default image styles
  const defaultStyles: React.CSSProperties = {
    display: 'block',
    border: 'none',
    outline: 'none',
    textDecoration: 'none',
    maxWidth: '100%',
    height: 'auto',
  };

  const imageStyles = { ...defaultStyles, ...inlineStyles };
  const imageProps: React.ImgHTMLAttributes<HTMLImageElement> = { src, alt, title, style: imageStyles };

  // Add width/height if specified
  if (width) {
    imageProps.width = typeof width === 'number' ? width : width;
  }

  if (height) {
    imageProps.height = typeof height === 'number' ? height : height;
  }

  return <img {...imageProps} />;
}
