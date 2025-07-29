import React from 'react';
import { createSpriteIcon } from '../../images/SpriteIcon';
import type { IconName } from '../@types/example-sprites';
import svgSpriteUrl from '../assets/example-sprites.svg?url';
import { Toggle } from '../components/toggle';

const SpriteIcon = createSpriteIcon<IconName>(svgSpriteUrl);

export default function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle italic">
      <SpriteIcon id="Bold" className="h-4 w-4" />
    </Toggle>
  );
}
