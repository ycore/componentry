import React from 'react';
import { type LinkProps, Link as RouterLink } from 'react-router';

export const Link = React.forwardRef(function Link(props: { href: string | LinkProps['to'] } & Omit<LinkProps, 'to'>, ref: React.ForwardedRef<HTMLAnchorElement>) {
  return <RouterLink {...props} to={props.href} ref={ref} />;
});
