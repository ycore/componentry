import React from 'react';
import { SpriteIcon } from '../../images/SpriteIcon';
import type { IconName } from '../../vibrant/@types/example-sprites';
import { Toggle } from '../components/toggle';

export default function ToggleLg({ spriteUrl }: { spriteUrl: string }): React.JSX.Element {
  return (
    <Toggle size="lg" aria-label="Toggle italic">
      <SpriteIcon<IconName> iconId="Italic" spriteUrl={spriteUrl} />
    </Toggle>
  );
}
