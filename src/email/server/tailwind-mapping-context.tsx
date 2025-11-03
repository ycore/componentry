/**
 * Tailwind Styles Map Context
 *
 * Provides Tailwind CSS styles map to email components during server-side rendering.
 * Follows dependency injection pattern - styles map is provided at render time.
 */

import { createContext, useContext } from 'react';
import type { TailwindToCSSMap, DynamicUtilityPattern } from './@types/tailwind-to-inline.types';

export interface TailwindStylesMap {
  cssMap: TailwindToCSSMap;
  dynamicPatterns: DynamicUtilityPattern[];
}

const TailwindStylesMapContext = createContext<TailwindStylesMap | null>(null);

/**
 * Get current Tailwind styles map from context
 * Returns empty styles map if not provided (graceful degradation)
 */
export function useTailwindStylesMap(): TailwindStylesMap {
  const stylesMap = useContext(TailwindStylesMapContext);

  // Graceful fallback if no context provided
  if (!stylesMap) {
    return {
      cssMap: {},
      dynamicPatterns: [],
    };
  }

  return stylesMap;
}

/**
 * Provider for injecting Tailwind styles map into email component tree
 */
export function TailwindStylesMapProvider({ stylesMap, children }: { stylesMap: TailwindStylesMap; children: React.ReactNode }): React.JSX.Element {
  return <TailwindStylesMapContext.Provider value={stylesMap}>{children}</TailwindStylesMapContext.Provider>;
}
