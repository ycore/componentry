import { tailwindToInline, useTailwindStylesMap } from '@ycore/componentry/email/server';
import type { CodeProps } from './@types/email-components.types';

/**
 * Code component - Inline or block code display
 */
export function Code({ block = false, language, className, style, children }: CodeProps): React.JSX.Element {
  const stylesMap = useTailwindStylesMap();
  const inlineStyles = tailwindToInline(className, style, stylesMap);

  if (block) {
    // Block code with <pre><code>
    const preStyles: React.CSSProperties = {
      fontFamily: '"Courier New", Courier, monospace',
      fontSize: '14px',
      lineHeight: '1.5',
      backgroundColor: '#f3f4f6',
      padding: '12px',
      borderRadius: '4px',
      overflow: 'auto',
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-word',
      margin: '16px 0',
      ...inlineStyles,
    };

    const codeStyles: React.CSSProperties = {
      fontFamily: 'inherit',
      fontSize: 'inherit',
    };

    return (
      <pre style={preStyles}>
        <code style={codeStyles} data-language={language}>
          {children}
        </code>
      </pre>
    );
  }

  // Inline code with <code>
  const codeStyles: React.CSSProperties = {
    fontFamily: '"Courier New", Courier, monospace',
    fontSize: '14px',
    backgroundColor: '#f3f4f6',
    padding: '2px 6px',
    borderRadius: '3px',
    ...inlineStyles,
  };

  return (
    <code style={codeStyles} data-language={language}>
      {children}
    </code>
  );
}
