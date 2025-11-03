/**
 * Email Rendering System using React Router SSR
 *
 * This module provides email rendering using React's server-side rendering
 * capabilities, integrated with Tailwind CSS inline style conversion and
 * plain text generation for maximum email client compatibility.
 */

import type { JSXElementConstructor, ReactElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import type { EmailRenderOptions, RenderedEmail } from '../components/@types/email-components.types';
import { htmlToPlainText } from './html-to-text';
import { TailwindStylesMapProvider } from './tailwind-mapping-context';

/**
 * Props wrapper that includes subject metadata
 * The subject is not passed to the component, but used for email metadata
 */
export type EmailTemplatePropsWithSubject<TComponentProps> = TComponentProps & {
  subject: string | ((props: TComponentProps) => string);
};

/**
 * Render React email component to HTML and plain text
 *
 * This function uses React Router's server-side rendering to convert
 * React components to HTML, then processes the output for email compatibility:
 * - Converts Tailwind classes to inline styles (handled by components)
 * - Generates plain text version from HTML
 * - Optimizes for email client compatibility
 *
 * @param component - React component function
 * @param props - Component props including subject
 * @param options - Rendering options
 * @returns Rendered email with HTML and text versions
 *
 * @example
 * ```typescript
 * const email = await renderEmail(WelcomeEmail, {
 *   name: 'John Doe',
 *   subject: 'Welcome to our platform!'
 * });
 * // Returns: { html: '...', text: '...', subject: 'Welcome...' }
 * ```
 */
export async function renderEmail<TComponentProps>(
  component: (props: TComponentProps) => ReactElement<unknown, string | JSXElementConstructor<unknown>>,
  props: EmailTemplatePropsWithSubject<TComponentProps>,
  options?: EmailRenderOptions
): Promise<RenderedEmail> {
  const { subject, ...componentProps } = props;

  // Determine email subject
  let emailSubject: string;
  let actualProps: TComponentProps;

  if (typeof subject === 'function') {
    // Subject is a function - derive from component props
    actualProps = componentProps as TComponentProps;
    emailSubject = subject(actualProps);
  } else {
    // Subject is a string
    actualProps = props as TComponentProps;
    emailSubject = subject;
  }

  // Render component to static HTML using React Router SSR
  // renderToStaticMarkup is used because we don't need React hydration in emails
  const componentElement = component(actualProps);

  // Wrap with TailwindStylesMapProvider if styles map provided (dependency injection)
  const wrappedElement = options?.tailwindStylesMap ? <TailwindStylesMapProvider stylesMap={options.tailwindStylesMap}>{componentElement}</TailwindStylesMapProvider> : componentElement;

  const htmlOutput = renderToStaticMarkup(wrappedElement);

  // Post-process HTML for email compatibility
  let html = htmlOutput;

  // Add DOCTYPE and ensure proper structure
  if (!html.includes('<!DOCTYPE')) {
    html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n${html}`;
  }

  // Add XML namespace if not present
  if (html.includes('<html') && !html.includes('xmlns=')) {
    html = html.replace('<html', '<html xmlns="http://www.w3.org/1999/xhtml"');
  }

  // Pretty print in development mode
  if (options?.pretty) {
    html = prettyPrintHTML(html);
  }

  // Generate plain text version
  const text = htmlToPlainText(html);

  return {
    html,
    text,
    subject: emailSubject,
  };
}

/**
 * Pretty print HTML for development/debugging
 * Adds indentation and line breaks for readability
 *
 * @param html - HTML string
 * @returns Formatted HTML
 */
function prettyPrintHTML(html: string): string {
  // Simple pretty printing - can be enhanced with a proper HTML formatter
  let formatted = html;

  // Add newlines after closing tags
  formatted = formatted.replace(/(<\/[^>]+>)(?!<\/)/g, '$1\n');

  // Add newlines before opening tags (except inline elements)
  formatted = formatted.replace(/(<(?!\/)[^>]+>)(?!<)/g, '\n$1');

  // Clean up extra newlines
  formatted = formatted.replace(/\n\n+/g, '\n\n');

  // Add indentation (basic implementation)
  const lines = formatted.split('\n');
  let indent = 0;
  const indented: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    // Decrease indent for closing tags
    if (trimmed.startsWith('</')) {
      indent = Math.max(0, indent - 1);
    }

    // Add indented line
    indented.push('  '.repeat(indent) + trimmed);

    // Increase indent for opening tags (not self-closing)
    if (trimmed.startsWith('<') && !trimmed.startsWith('</') && !trimmed.endsWith('/>') && !trimmed.includes('<!DOCTYPE')) {
      // Check if it's not an inline/self-closing element
      const tagName = trimmed.match(/<(\w+)/)?.[1];
      if (tagName && !['img', 'br', 'hr', 'input', 'meta', 'link'].includes(tagName)) {
        indent++;
      }
    }
  }

  return indented.join('\n');
}

/**
 * Batch render multiple email templates
 * Useful for generating email previews or testing
 *
 * @param templates - Array of template configurations
 * @returns Array of rendered emails
 */
export async function renderEmailBatch<T>(
  templates: Array<{
    component: (props: T) => ReactElement;
    props: EmailTemplatePropsWithSubject<T>;
    options?: EmailRenderOptions;
  }>
): Promise<RenderedEmail[]> {
  return Promise.all(templates.map(template => renderEmail(template.component, template.props, template.options)));
}

/**
 * Render email component to HTML only (no text version)
 * Useful for preview or when plain text is not needed
 *
 * @param component - React component
 * @param props - Component props
 * @returns HTML string
 */
export function renderEmailHTML<TComponentProps>(component: (props: TComponentProps) => ReactElement, props: TComponentProps): string {
  return renderToStaticMarkup(component(props));
}

/**
 * Legacy compatibility wrapper for existing renderEmailTemplate
 * This maintains backward compatibility with the current email system
 *
 * @deprecated Use renderEmail instead
 */
export async function renderEmailTemplate<TComponentProps>(
  component: (props: TComponentProps) => ReactElement<unknown, string | JSXElementConstructor<unknown>>,
  props: EmailTemplatePropsWithSubject<TComponentProps>
): Promise<{ subject: string; html: string; text: string }> {
  const result = await renderEmail(component, props);
  return {
    subject: result.subject || '',
    html: result.html,
    text: result.text,
  };
}
