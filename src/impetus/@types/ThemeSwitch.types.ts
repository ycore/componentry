export type Themes = { theme: { light: string; dark: string } };

export interface ThemeSwitchProps {
  theme: Themes;
  spriteUrl: string;
  className?: string;
  classTheme?: string;
}
