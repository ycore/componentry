/**
 * TODO: Update this component to use your client-side framework's link
 * component. We've provided examples of how to do this for Next.js, Remix, and
 * Inertia.js in the Catalyst documentation:
 *
 * https://catalyst.tailwindui.com/docs#client-side-router-integration
 */
import React from 'react';
import { type LinkProps } from 'react-router';
export declare const Link: React.ForwardRefExoticComponent<{
    href: string | LinkProps["to"];
} & Omit<LinkProps, "to"> & React.RefAttributes<HTMLAnchorElement>>;
//# sourceMappingURL=link.d.ts.map