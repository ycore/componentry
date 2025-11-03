import type { ReactNode } from 'react';
import type { TailwindStylesMap } from '../../server/tailwind-mapping-context';

export interface EmailComponentProps {
  className?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
}

export interface HtmlProps extends EmailComponentProps {
  lang?: string;
  dir?: 'ltr' | 'rtl' | 'auto';
}

export interface HeadProps {
  children?: ReactNode;
}

export interface BodyProps extends EmailComponentProps {
  bgcolor?: string;
}

export interface ContainerProps extends EmailComponentProps {
  maxWidth?: number;
  align?: 'left' | 'center' | 'right';
}

export interface SectionProps extends EmailComponentProps {
  bgcolor?: string;
  fullWidth?: boolean;
}

export interface RowProps extends EmailComponentProps {
  verticalAlign?: 'top' | 'middle' | 'bottom';
}

export interface ColumnProps extends EmailComponentProps {
  width?: string | number;
  verticalAlign?: 'top' | 'middle' | 'bottom';
}

export interface TextProps extends EmailComponentProps {
  as?: 'p' | 'span' | 'div';
}

export interface HeadingProps extends EmailComponentProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export interface ButtonProps extends EmailComponentProps {
  href: string;
  target?: '_blank' | '_self';
  width?: string | number;
  align?: 'left' | 'center' | 'right';
}

export interface LinkProps extends EmailComponentProps {
  href: string;
  target?: '_blank' | '_self';
  title?: string;
}

export interface ImageProps extends Omit<EmailComponentProps, 'children'> {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  title?: string;
}

export interface HrProps extends EmailComponentProps {
  borderColor?: string;
  borderWidth?: number;
}

export interface CodeProps extends EmailComponentProps {
  block?: boolean;
  language?: string;
}

export interface PreviewProps {
  children: string;
}

export interface SpacerProps {
  height?: number;
}

export interface EmailRenderOptions {
  pretty?: boolean;
  includeClientHacks?: boolean;
  plainText?: boolean;
  tailwindStylesMap?: TailwindStylesMap;
}

export interface RenderedEmail {
  html: string;
  text: string;
  subject?: string;
}
