import { useTailwindStylesMap } from '../server/tailwind-mapping-context';
import { extractBgColor, tailwindToInline } from '../server/tailwind-to-inline';
import type { SectionProps } from './@types/email-components.types';

/**
 * Section component - Horizontal section with table-based layout
 */
export function Section({ className, style, bgcolor, fullWidth = false, children }: SectionProps): React.JSX.Element {
  const stylesMap = useTailwindStylesMap();
  const inlineStyles = tailwindToInline(className, style, stylesMap);

  // Section table takes full width
  const tableStyles: React.CSSProperties = {
    width: '100%',
    ...inlineStyles,
  };

  // Auto-extract bgcolor from className if not explicitly provided
  const bgcolorValue = bgcolor ?? extractBgColor(className, style, stylesMap);

  // Build table props
  const tableProps: React.HTMLAttributes<HTMLTableElement> & { bgcolor?: string; cellPadding?: number; cellSpacing?: number; border?: number } = {
    role: 'presentation',
    cellPadding: 0,
    cellSpacing: 0,
    border: 0,
    style: tableStyles,
  };

  if (bgcolorValue) {
    tableProps.bgcolor = bgcolorValue;
  }

  return (
    <table {...tableProps}>
      <tbody>
        <tr>
          <td style={fullWidth ? { padding: 0 } : undefined}>{children}</td>
        </tr>
      </tbody>
    </table>
  );
}
