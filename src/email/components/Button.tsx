import { useTailwindStylesMap } from '../server/tailwind-mapping-context';
import { tailwindToInline } from '../server/tailwind-to-inline';
import type { ButtonProps } from './@types/email-components.types';

/**
 * Button component - Call-to-action button with Outlook compatibility
 */
export function Button({ href, target = '_blank', width = 'auto', align = 'left', className, style, children }: ButtonProps): React.JSX.Element {
  const stylesMap = useTailwindStylesMap();
  const inlineStyles = tailwindToInline(className, style, stylesMap);

  // Default button styles
  const defaultButtonStyles: React.CSSProperties = {
    display: 'inline-block',
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'center',
    textDecoration: 'none',
    borderRadius: '4px',
    backgroundColor: '#3b82f6',
    color: '#ffffff',
  };

  const buttonStyles = { ...defaultButtonStyles, ...inlineStyles };

  // Container table styles
  const tableStyles: React.CSSProperties = {
    width: width === 'auto' ? undefined : typeof width === 'number' ? `${width}px` : width,
  };

  // Wrapper table cell styles
  const cellStyles: React.CSSProperties = {
    textAlign: align,
  };

  return (
    <table role="presentation" cellPadding="0" cellSpacing="0" border={0} style={tableStyles}>
      <tbody>
        <tr>
          <td style={cellStyles}>
            {/* VML for Outlook */}
            <div>
              {/*[if mso]>
              <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml"
                           xmlns:w="urn:schemas-microsoft-com:office:word"
                           href="${href}"
                           style="height:40px;v-text-anchor:middle;width:${typeof width === 'number' ? width : 200}px;"
                           arcsize="10%"
                           stroke="f"
                           fillcolor="${buttonStyles.backgroundColor || '#3b82f6'}">
                <w:anchorlock/>
                <center style="color:${buttonStyles.color || '#ffffff'};font-family:sans-serif;font-size:16px;font-weight:bold;">
                  ${children}
                </center>
              </v:roundrect>
            <![endif]*/}
              {/*[if !mso]><!*/}
              <a href={href} target={target} style={buttonStyles} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
                {children}
              </a>
              {/*<![endif]*/}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
