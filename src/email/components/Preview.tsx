import type { PreviewProps } from './@types/email-components.types';

/**
 * Preview component - Email preview text
 */
export function Preview({ children }: PreviewProps): React.JSX.Element {
  // Preview text styling:
  // - display: none - Hides from email body
  // - max-height: 0 - Collapses space
  // - overflow: hidden - Prevents visibility
  // - mso-hide: all - Outlook-specific hiding
  const previewStyles: React.CSSProperties = {
    display: 'none',
    maxHeight: 0,
    overflow: 'hidden',
    fontSize: '1px',
    lineHeight: '1px',
    color: 'transparent',
    opacity: 0,
  };

  return (
    <div style={previewStyles}>
      {/* Preview text */}
      {children}
      {/* Add hidden whitespace to push content after preview text out of view */}
      {'\u00A0'.repeat(150)}
    </div>
  );
}
