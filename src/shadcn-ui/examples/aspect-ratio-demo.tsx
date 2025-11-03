import React from 'react';
import { LazyImage } from '../../images/LazyImage';
import { AspectRatio } from '../components/aspect-ratio';

export default function AspectRatioDemo(): React.JSX.Element {
  return (
    <AspectRatio ratio={16 / 9} className="rounded-lg bg-muted">
      <LazyImage src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80" alt="Photo by Drew Beamer" className="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale" />
    </AspectRatio>
  );
}
