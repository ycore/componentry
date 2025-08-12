export type Themes = { theme: { light: string; dark: string } };

export interface ThemeContext {
  resolvedTheme?: string;
  setTheme: (theme: string) => void;
}

export interface ThemeSwitchRenderProps {
  themeContext: ThemeContext | null;
  theme: Themes;
  spriteUrl: string;
  className?: string;
  classTheme?: string;
}

export interface ThemeSwitchProps {
  theme?: Themes;
  spriteUrl: string;
  className?: string;
  classTheme?: string;
  children?: (props: ThemeSwitchRenderProps) => React.ReactNode;
}
