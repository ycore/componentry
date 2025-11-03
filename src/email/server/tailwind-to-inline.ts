/**
 * Tailwind CSS to Inline Styles Converter
 *
 * Converts Tailwind utility classes to inline styles for email client compatibility.
 * Styles Maps provided via parameter (dependency injection pattern).
 */

import { logger } from '@ycore/forge/logger';
import type { TailwindStylesMap } from './tailwind-mapping-context';

/**
 * Convert Tailwind className string to inline CSSProperties
 * Styles Maps are explicitly dependency injected
 */
export function tailwindToInline(className: string | undefined, existingStyle: React.CSSProperties | undefined, stylesMap: TailwindStylesMap): React.CSSProperties {
  if (!className) {
    return existingStyle || {};
  }

  const classes = className.split(/\s+/).filter(Boolean);
  const inlineStyles: React.CSSProperties = { ...existingStyle };

  for (const cls of classes) {
    const staticStyle = stylesMap.cssMap[cls];
    if (staticStyle) {
      Object.assign(inlineStyles, staticStyle);
      continue;
    }

    let matched = false;
    for (const pattern of stylesMap.dynamicPatterns) {
      const matches = cls.match(pattern.regex);
      if (matches) {
        const dynamicStyle = pattern.converter(matches);
        if (dynamicStyle) {
          Object.assign(inlineStyles, dynamicStyle);
          matched = true;
          break;
        }
      }
    }

    if (!matched) {
      logger.warning('tailwind_class_not_found', {
        className: cls,
        hint: "Run 'bun run email:generate' to update styles maps",
      });
    }
  }

  return inlineStyles;
}

/**
 * Convert CSSProperties to inline style string
 */
export function cssPropertiesToString(styles: React.CSSProperties): string {
  return Object.entries(styles)
    .map(([key, value]) => {
      const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      return `${cssKey}:${value}`;
    })
    .join(';');
}

/**
 * Merge multiple className strings into inline styles
 */
export function mergeClassNamesToInline(classNames: (string | undefined)[], existingStyle: React.CSSProperties | undefined, stylesMap: TailwindStylesMap): React.CSSProperties {
  let merged = { ...existingStyle };

  for (const className of classNames) {
    if (className) {
      merged = tailwindToInline(className, merged, stylesMap);
    }
  }

  return merged;
}

/**
 * Extract background color from Tailwind className for legacy bgcolor attribute
 */
export function extractBgColor(className: string | undefined, style: React.CSSProperties | undefined, stylesMap: TailwindStylesMap): string | undefined {
  if (style?.backgroundColor) {
    return normalizeColor(style.backgroundColor);
  }

  if (!className) {
    return undefined;
  }

  const classes = className.split(/\s+/).filter(Boolean);

  for (const cls of classes) {
    if (cls.startsWith('bg-')) {
      const cssProperties = stylesMap.cssMap[cls];
      if (cssProperties?.backgroundColor) {
        return normalizeColor(cssProperties.backgroundColor);
      }
    }
  }

  return undefined;
}

/**
 * Normalize color value to hex format
 */
function normalizeColor(color: string | React.CSSProperties['backgroundColor']): string {
  if (typeof color !== 'string') {
    return '#ffffff';
  }

  if (color.startsWith('#')) {
    return color;
  }

  const namedColors: Record<string, string> = {
    white: '#ffffff',
    black: '#000000',
    transparent: '#ffffff',
  };

  const normalized = color.toLowerCase();
  if (namedColors[normalized]) {
    return namedColors[normalized];
  }

  return color;
}
