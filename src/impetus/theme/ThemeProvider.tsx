import type { ThemeProviderProps } from '../@types/ThemeProvider.types';

// Default props for consistent setup
export const themeProviderProps: Partial<ThemeProviderProps> = {
  attribute: 'class',
  defaultTheme: 'light',
  enableSystem: true,
  disableTransitionOnChange: false,
};
