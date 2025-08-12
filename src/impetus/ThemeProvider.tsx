import { ThemeProvider as NextThemeProvider } from 'next-themes';
import type { ComponentProps } from 'react';

export type ThemeProviderProps = ComponentProps<typeof NextThemeProvider>;
// Re-export ThemeProvider with the same interface
export const ThemeProvider = NextThemeProvider;
// Default props for consistent setup
export const themeProviderProps: Partial<ThemeProviderProps> = {
  attribute: 'class',
  defaultTheme: 'light',
  enableSystem: true,
  disableTransitionOnChange: false,
};
