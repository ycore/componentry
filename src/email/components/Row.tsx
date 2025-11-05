import { tailwindToInline, useTailwindStylesMap } from '@ycore/componentry/email/server';
import type { RowProps } from './@types/email-components.types';

/**
 * Row component - Table row for column layout
 */
export function Row({ className, style, verticalAlign = 'top', children }: RowProps): React.JSX.Element {
  const stylesMap = useTailwindStylesMap();
  const inlineStyles = tailwindToInline(className, style, stylesMap);

  const tableStyles: React.CSSProperties = {
    width: '100%',
    ...inlineStyles,
  };

  return (
    <table role="presentation" cellPadding="0" cellSpacing="0" border={0} style={tableStyles}>
      <tbody>
        <tr style={{ verticalAlign }}>{children}</tr>
      </tbody>
    </table>
  );
}
