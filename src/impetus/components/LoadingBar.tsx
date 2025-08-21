import clsx from 'clsx';
import { memo } from 'react';

export const LoadingBar = memo<{ className?: string }>(({ className }) => <div className={clsx("loading-bar", className)} />);
