/**
 * Tailwind to Inline Styles Type Definitions
 *
 * Type definitions for the Tailwind CSS to inline styles conversion system.
 */

import type { CSSProperties } from 'react';

/**
 * Dynamic utility pattern definition
 * Used to match and convert arbitrary value utilities like text-[32px], tracking-[0.5em]
 */
export interface DynamicUtilityPattern {
  /** Regular expression to match the utility class */
  regex: RegExp;
  /** Converter function that transforms regex matches into CSS properties */
  converter: (matches: RegExpMatchArray) => Partial<CSSProperties>;
}

/**
 * Maps Tailwind utility classes to their CSS property equivalents
 */
export type TailwindToCSSMap = Record<string, Partial<CSSProperties>>;
