import { useTailwindStylesMap } from '../server/tailwind-mapping-context';
import { tailwindToInline } from '../server/tailwind-to-inline';
import type { HeadingProps } from './@types/email-components.types';

/**
 * Heading component - Semantic heading element (h1-h6)
 */
export function Heading({ level = 1, as, className, style, children }: HeadingProps): React.JSX.Element {
  const stylesMap = useTailwindStylesMap();
  const Element = as || (`h${level}` as const);
  const inlineStyles = tailwindToInline(className, style, stylesMap);

  // Apply default heading styles if not overridden
  const defaultStyles: React.CSSProperties = {
    margin: '0 0 16px 0',
    fontWeight: 'bold',
    lineHeight: '1.3',
  };

  // Level-specific defaults
  const levelDefaults: Record<number, React.CSSProperties> = {
    1: { fontSize: '32px' },
    2: { fontSize: '28px' },
    3: { fontSize: '24px' },
    4: { fontSize: '20px' },
    5: { fontSize: '18px' },
    6: { fontSize: '16px' },
  };

  // Merge defaults with provided styles
  const mergedStyles = {
    ...defaultStyles,
    ...levelDefaults[level],
    ...inlineStyles,
  };

  return <Element style={mergedStyles}>{children}</Element>;
}
