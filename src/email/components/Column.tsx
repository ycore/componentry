import { useTailwindStylesMap } from '../server/tailwind-mapping-context';
import { tailwindToInline } from '../server/tailwind-to-inline';
import type { ColumnProps } from './@types/email-components.types';

/**
 * Column component - Table cell with responsive width
 */
export function Column({ className, style, width, verticalAlign = 'top', children }: ColumnProps): React.JSX.Element {
  const stylesMap = useTailwindStylesMap();
  const inlineStyles = tailwindToInline(className, style, stylesMap);

  const cellStyles: React.CSSProperties = { verticalAlign, ...inlineStyles };

  if (width) {
    if (typeof width === 'number') {
      cellStyles.width = `${width}px`;
    } else if (width === 'auto') {
      cellStyles.width = 'auto';
    } else {
      cellStyles.width = width;
    }
  }

  return <td style={cellStyles}>{children}</td>;
}
