import type { SpacerProps } from './@types/email-components.types';

/**
 * Spacer component - Vertical spacing utility
 *
 * Creates vertical space using a table structure for consistent rendering
 * across email clients. More reliable than margin/padding in some clients.
 *
 * @example
 * ```tsx
 * <Text>First paragraph</Text>
 * <Spacer height={20} />
 * <Text>Second paragraph with 20px space above</Text>
 * ```
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
