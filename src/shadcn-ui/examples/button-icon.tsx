import React from 'react';
import { SpriteIcon } from '../../images/SpriteIcon';
import type { IconName } from '../../vibrant/@types/lucide-sprites';
import { Button } from '../components/button';

export default function ButtonIcon({ spriteUrl }: { spriteUrl: string }) {
  return (
    <Button variant="secondary" size="icon" className="size-8">
      <SpriteIcon<IconName> iconId="ChevronRight" url={spriteUrl} />
    </Button>
  );
}
