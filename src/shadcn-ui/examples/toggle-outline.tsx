import React from 'react';
import { SpriteIcon } from '../../images/SpriteIcon';
import type { IconName } from '../../vibrant/@types/example-sprites';
import { Toggle } from '../components/toggle';

export default function ToggleOutline({ spriteUrl }: { spriteUrl: string }) {
  return (
    <Toggle variant="outline" aria-label="Toggle italic">
      <SpriteIcon<IconName> iconId="Italic" spriteUrl={spriteUrl} />
    </Toggle>
  );
}
