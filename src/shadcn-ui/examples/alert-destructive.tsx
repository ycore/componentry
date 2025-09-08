import React from 'react';
import { SpriteIcon } from '../../images/SpriteIcon';
import type { IconName } from '../@types/lucide-sprites';
import { Alert, AlertDescription, AlertTitle } from '../components/alert';

export default function AlertDestructive({ spriteUrl }: { spriteUrl: string }) {
  return (
    <Alert variant="destructive">
      <SpriteIcon<IconName> iconId="CircleAlert" url={spriteUrl} />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
    </Alert>
  );
}
