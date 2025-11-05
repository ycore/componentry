import type { SpacerProps } from './@types/email-components.types';

/**
 * Spacer component - Vertical spacing utility
 */
export function Spacer({ height = 16 }: SpacerProps): React.JSX.Element {
  return (
    <table role="presentation" cellPadding="0" cellSpacing="0" border={0} style={{ width: '100%' }}>
      <tbody>
        <tr>
          <td style={{ height: `${height}px`, fontSize: '1px', lineHeight: `${height}px` }}>&nbsp;</td>
        </tr>
      </tbody>
    </table>
  );
}
