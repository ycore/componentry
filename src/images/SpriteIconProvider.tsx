import { createContext, useContext } from 'react';

/**
 * Configuration mapping sprite keys to resolved URLs
 */
export interface SpriteIconConfig {
  [key: string]: string;
}

/**
 * Context for sprite icon configuration
 */
const SpriteIconContext = createContext<SpriteIconConfig | null>(null);

/**
 * Hook to retrieve a resolved sprite URL by key from Context.
 *
 * Must be used within a SpriteIconProvider.
 *
 * @example
 * ```tsx
 * const spriteUrl = useSpriteIcon('lucide');
 * <MarkdownPage spriteUrl={spriteUrl} />
 * ```
 */
export function useSpriteIcon(spriteKey: string): string {
  const config = useContext(SpriteIconContext);

  if (!config) {
    throw new Error(
      'useSpriteIcon must be used within a SpriteIconProvider. ' +
      'Wrap your app with <SpriteIconProvider sprites={{...}}>.'
    );
  }

  if (!config[spriteKey]) {
    throw new Error(
      `Sprite key "${spriteKey}" not found in SpriteIconProvider. ` +
      `Available keys: ${Object.keys(config).join(', ')}`
    );
  }

  return config[spriteKey];
}

/**
 * Provider component that makes sprite URLs available to SpriteIcon components
 *
 * Configure at the app level to resolve sprite URLs using your asset resolution strategy.
 *
 * @example
 * ```tsx
 * // app/root.tsx
 * import lucideSpriteUrl from '@ycore/componentry/vibrant/assets/lucide-sprites.svg?url';
 *
 * export default function App() {
 *   return (
 *     <SpriteIconProvider sprites={{ lucide: lucideSpriteUrl }}>
 *       <Outlet />
 *     </SpriteIconProvider>
 *   );
 * }
 * ```
 */
export function SpriteIconProvider({
  sprites,
  children
}: {
  sprites: SpriteIconConfig;
  children: React.ReactNode;
}) {
  return (
    <SpriteIconContext.Provider value={sprites}>
      {children}
    </SpriteIconContext.Provider>
  );
}
