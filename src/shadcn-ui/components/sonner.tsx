import { useTheme } from 'next-themes';
import React from 'react';
import { Toaster as Sonner, type ToasterProps } from 'sonner';
import { SvgIcon } from '../../vibrant/components/svg-icon';

const Toaster = ({ ...props }: ToasterProps): React.JSX.Element => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      icons={{
        success: <SvgIcon iconId="CircleCheck" className="size-4" />,
        info: <SvgIcon iconId="Info" className="size-4" />,
        warning: <SvgIcon iconId="CircleAlert" className="size-4" />,
        error: <SvgIcon iconId="CircleAlert" className="size-4" />,
        loading: <SvgIcon iconId="Loader" className="size-4 animate-spin" />,
      }}
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
          '--border-radius': 'var(--radius)',
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
