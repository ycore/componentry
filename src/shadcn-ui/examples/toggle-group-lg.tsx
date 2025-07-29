import React from 'react';
import { createSpriteIcon } from '../../images/SpriteIcon';
import type { IconName } from '../@types/example-sprites';
import svgSpriteUrl from '../assets/example-sprites.svg?url';
import { ToggleGroup, ToggleGroupItem } from '../components/toggle-group';

const SpriteIcon = createSpriteIcon<IconName>(svgSpriteUrl);

export default function ToggleGroupDemo() {
  return (
    <ToggleGroup type="multiple" size="lg">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <SpriteIcon id="Bold" className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <SpriteIcon id="Italic" className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <SpriteIcon id="Underline" className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
