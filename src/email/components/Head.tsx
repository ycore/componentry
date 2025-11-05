import type { HeadProps } from './@types/email-components.types';

/**
 * Head component - Email metadata and styles container
 */
export function Head({ children }: HeadProps): React.JSX.Element {
  return (
    <head>
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no,date=no,address=no,email=no" />
      <meta name="x-apple-disable-message-reformatting" />
      {/* Microsoft Office/Outlook specific settings */}
      {/* biome-ignore lint/style/useSelfClosingElements: Required for email compatibility */}
      <meta name="color-scheme" content="light"></meta>
      {/* biome-ignore lint/style/useSelfClosingElements: Required for email compatibility */}
      <meta name="supported-color-schemes" content="light"></meta>
      {children}
    </head>
  );
}
