import { useTailwindStylesMap } from '../server/tailwind-mapping-context';
import { extractBgColor, tailwindToInline } from '../server/tailwind-to-inline';
import type { BodyProps } from './@types/email-components.types';

export function Body({ className, style, children }: BodyProps): React.JSX.Element {
  const stylesMap = useTailwindStylesMap();

  // Auto-extract bgcolor from className - ensures maximum legacy email client compatibility
  const bgcolorValue = extractBgColor(className, style, stylesMap);
  const inlineStyles = tailwindToInline(className, style, stylesMap);
  const bodyProps: React.HTMLAttributes<HTMLBodyElement> & { bgcolor?: string } = {
    style: inlineStyles,
  };

  if (bgcolorValue) {
    bodyProps.bgcolor = bgcolorValue;
  }

  return <body {...bodyProps}>{children}</body>;
}
