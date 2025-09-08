import React from 'react';
import { SpriteIcon } from '../../images/SpriteIcon';
import type { IconName } from '../@types/example-sprites';
import { Toggle } from '../components/toggle';

export default function ToggleWithText({ spriteUrl }: { spriteUrl: string }) {
  return (
    <Toggle aria-label="Toggle italic">
      <SpriteIcon<IconName> iconId="Italic" url={spriteUrl} />
      Italic
    </Toggle>
  );
}
