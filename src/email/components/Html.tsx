import { useTailwindStylesMap } from '../server/tailwind-mapping-context';
import { tailwindToInline } from '../server/tailwind-to-inline';
import type { HtmlProps } from './@types/email-components.types';

/**
 * Html component - Root element for email templates
 */
export function Html({ lang = 'en', dir = 'ltr', className, style, children }: HtmlProps): React.JSX.Element {
  const stylesMap = useTailwindStylesMap();
  const inlineStyles = tailwindToInline(className, style, stylesMap);

  // xmlns is valid for XHTML emails but not in React HTMLAttributes
  // We cast to any to add the xmlns attribute for email client compatibility
  const htmlProps = {
    lang,
    dir,
    xmlns: 'http://www.w3.org/1999/xhtml',
    style: inlineStyles,
  } as React.HTMLAttributes<HTMLHtmlElement> & { xmlns: string };

  return <html {...htmlProps}>{children}</html>;
}
