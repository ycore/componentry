import { useTailwindStylesMap } from '../server/tailwind-mapping-context';
import { tailwindToInline } from '../server/tailwind-to-inline';
import type { TextProps } from './@types/email-components.types';

/**
 * Text component - Paragraph or inline text element
 */
export function Text({ as: Element = 'p', className, style, children }: TextProps): React.JSX.Element {
  const stylesMap = useTailwindStylesMap();
  const inlineStyles = tailwindToInline(className, style, stylesMap);

  // Ensure proper margins for paragraph elements in email clients
  if (Element === 'p' && !inlineStyles.margin) {
    inlineStyles.margin = '0 0 16px 0';
  }

  return <Element style={inlineStyles}>{children}</Element>;
}
