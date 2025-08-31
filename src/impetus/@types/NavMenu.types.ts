import type { IconName } from '../../shadcn-ui/@types/lucide-sprites';

export interface MenubarItemConfig {
  label?: string;
  iconId?: IconName;
  spriteUrl?: string;
  href?: string;
  disabled?: boolean;
  inset?: boolean;
  variant?: 'default' | 'destructive';
  shortcut?: string;
  component?: React.ComponentType<any>;
  separator?: boolean;

  // For checkbox items
  checked?: boolean;

  // For radio items
  value?: string;

  // For sub menus (derived from having items array)
  items?: MenubarItemConfig[];
}

export interface MenubarConfigItem {
  label?: string;
  iconId?: IconName;
  href?: string;
  items?: MenubarItemConfig[];
  component?: React.ComponentType<{ spriteUrl: string }>;
  filter?: string[];
  radioGroup?: true;
  value?: string;
}

export interface MenubarConfig {
  menus?: MenubarConfigItem[];
  sections?: Array<{
    menus: MenubarConfigItem[];
  }>;
}

export interface NavMenubarProps {
  navConfigItems: MenubarConfig;
  spriteUrl: string;
  navFilters?: string[];
  className?: string;
}

export interface MenubarContextValue {
  currentPath: string;
  spriteUrl: string;
  IconSprite: React.ComponentType<{ id: IconName } & React.ComponentProps<'svg'>>;
}
