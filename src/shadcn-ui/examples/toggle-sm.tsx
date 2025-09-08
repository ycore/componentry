import React from 'react';
import { SpriteIcon } from '../../images/SpriteIcon';
import type { IconName } from '../@types/example-sprites';
import { Toggle } from '../components/toggle';

export default function ToggleSm({ spriteUrl }: { spriteUrl: string }) {
  return (
    <Toggle size="sm" aria-label="Toggle italic">
      <SpriteIcon<IconName> iconId="Italic" url={spriteUrl} />
    </Toggle>
  );
}
