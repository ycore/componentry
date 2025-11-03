/**
 * Email Components Server Utilities
 *
 * Server-side utilities for email rendering, Tailwind CSS conversion,
 * and plain text generation.
 */

// HTML to text conversion
export { extractPreviewText, htmlToPlainText } from './html-to-text';
// Core rendering
export { type EmailTemplatePropsWithSubject, renderEmail, renderEmailBatch, renderEmailHTML, renderEmailTemplate } from './render-email.js';
// Email render options type
export type { EmailRenderOptions } from '../components/@types/email-components.types';
// Tailwind CSS conversion
export { cssPropertiesToString, extractBgColor, mergeClassNamesToInline, tailwindToInline } from './tailwind-to-inline';
// Tailwind styles map context (for dependency injection)
export { type TailwindStylesMap, TailwindStylesMapProvider, useTailwindStylesMap } from './tailwind-mapping-context.js';
