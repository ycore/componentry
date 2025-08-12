import { useTheme as useNextTheme } from 'next-themes';

// Re-export the useTheme hook with the same interface
export const useTheme = useNextTheme;

// Export the return type for TypeScript users
export type UseThemeReturn = ReturnType<typeof useNextTheme>;