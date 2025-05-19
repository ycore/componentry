import type * as Headless from '@headlessui/react';
import type { Link } from '../link';
import type { Colors } from './base.types';
export type ButtonProps = ({
    color?: Colors;
    outline?: never;
    plain?: never;
} | {
    color?: never;
    outline: true;
    plain?: never;
} | {
    color?: never;
    outline?: never;
    plain: true;
}) & {
    className?: string;
    children: React.ReactNode;
} & (Omit<Headless.ButtonProps, 'as' | 'className'> | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'className'>);
//# sourceMappingURL=button.types.d.ts.map