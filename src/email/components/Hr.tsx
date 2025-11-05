import { tailwindToInline, useTailwindStylesMap } from '@ycore/componentry/email/server';
import type { HrProps } from './@types/email-components.types';

/**
 * Hr component - Horizontal rule divider
 */
export function Hr({ borderColor = '#e5e7eb', borderWidth = 1, className, style }: HrProps): React.JSX.Element {
  const stylesMap = useTailwindStylesMap();
  const inlineStyles = tailwindToInline(className, style, stylesMap);

  const hrStyles: React.CSSProperties = {
    width: '100%',
    border: 'none',
    borderTop: `${borderWidth}px solid ${borderColor}`,
    margin: '16px 0',
    ...inlineStyles,
  };

  return <hr style={hrStyles} />;
}
