import { tailwindToInline, useTailwindStylesMap } from '@ycore/componentry/email/server';
import type { LinkProps } from './@types/email-components.types';

/**
 * Link component - Anchor element for hyperlinks
 */
export function Link({ href, target = '_blank', title, className, style, children }: LinkProps): React.JSX.Element {
  const stylesMap = useTailwindStylesMap();
  const inlineStyles = tailwindToInline(className, style, stylesMap);

  // Default link styles
  const defaultStyles: React.CSSProperties = {
    color: 'inherit',
    textDecoration: 'underline',
  };

  const mergedStyles = {
    ...defaultStyles,
    ...inlineStyles,
  };

  return (
    <a href={href} target={target} title={title} style={mergedStyles} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
      {children}
    </a>
  );
}
