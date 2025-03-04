import type React from 'react';

// requires @svgx/vite-plugin-react
// https://developer.mozilla.org/en-US/docs/Web/SVG/Applying_SVG_effects_to_HTML_content

export type SvgImageProps = {
  href: string;
} & React.SVGProps<SVGSVGElement>;

export function SvgImage({ href, ...svgProps }: SvgImageProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...svgProps}>
      <use href={href} />
    </svg>
  );
}
