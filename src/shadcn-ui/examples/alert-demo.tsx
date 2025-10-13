import React from 'react';
import { SpriteIcon } from '../../images/SpriteIcon';
import type { IconName } from '../../vibrant/@types/lucide-sprites';
import { Alert, AlertDescription, AlertTitle } from '../components/alert';

export default function AlertDemo({ spriteUrl }: { spriteUrl: string }) {
  return (
    <div className="grid w-full max-w-xl items-start gap-4">
      <Alert>
        <SpriteIcon<IconName> iconId="CircleCheck" url={spriteUrl} />
        <AlertTitle>Success! Your changes have been saved</AlertTitle>
        <AlertDescription>This is an alert with icon, title and description.</AlertDescription>
      </Alert>
      <Alert>
        <SpriteIcon<IconName> iconId="Calendar" url={spriteUrl} />
        <AlertTitle>This Alert has a title and an icon. No description.</AlertTitle>
      </Alert>
      <Alert variant="destructive">
        <SpriteIcon<IconName> iconId="CircleAlert" url={spriteUrl} />
        <AlertTitle>Unable to process your payment.</AlertTitle>
        <AlertDescription>
          <p>Please verify your billing information and try again.</p>
          <ul className="list-inside list-disc text-sm">
            <li>Check your card details</li>
            <li>Ensure sufficient funds</li>
            <li>Verify billing address</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}
