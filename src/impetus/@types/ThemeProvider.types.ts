import { ThemeProvider as NextThemeProvider } from 'next-themes';
import type { ComponentProps } from 'react';

// Re-export ThemeProvider with the same interface
export const ThemeProvider = NextThemeProvider;
export type ThemeProviderProps = ComponentProps<typeof NextThemeProvider>;
