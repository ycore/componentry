import React from 'react';
import { SpriteIcon } from '../../images/SpriteIcon';
import type { IconName } from '../@types/example-sprites';
import { Toggle } from '../components/toggle';

export default function ToggleDemo({ spriteUrl }: { spriteUrl: string }) {
  return (
    <Toggle aria-label="Toggle italic">
      <SpriteIcon<IconName> id="Bold" className="h-4 w-4" url={spriteUrl} />
    </Toggle>
  );
}
