import React from 'react';
import { SpriteIcon } from '../../images/SpriteIcon';
import type { IconName } from '../@types/example-sprites';
import { ToggleGroup, ToggleGroupItem } from '../components/toggle-group';

export default function ToggleGroupDemo({ spriteUrl }: { spriteUrl: string }) {
  return (
    <ToggleGroup type="multiple" variant="outline">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <SpriteIcon<IconName> iconId="Bold" className="h-4 w-4" url={spriteUrl} />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <SpriteIcon<IconName> iconId="Italic" className="h-4 w-4" url={spriteUrl} />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <SpriteIcon<IconName> iconId="Underline" className="h-4 w-4" url={spriteUrl} />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
