import { useTailwindStylesMap } from '../server/tailwind-mapping-context';
import { tailwindToInline } from '../server/tailwind-to-inline';
import type { ContainerProps } from './@types/email-components.types';

/**
 * Container component - Centered max-width wrapper
 */
export function Container({ className, style, maxWidth = 600, align = 'center', children }: ContainerProps): React.JSX.Element {
  const stylesMap = useTailwindStylesMap();
  const inlineStyles = tailwindToInline(className, style, stylesMap);

  const tableStyles: React.CSSProperties = {
    maxWidth: `${maxWidth}px`,
    width: '100%',
    margin: align === 'center' ? '0 auto' : undefined,
    ...inlineStyles,
  };

  return (
    <table role="presentation" cellPadding="0" cellSpacing="0" border={0} style={tableStyles} align={align}>
      <tbody>
        <tr>
          <td>{children}</td>
        </tr>
      </tbody>
    </table>
  );
}
