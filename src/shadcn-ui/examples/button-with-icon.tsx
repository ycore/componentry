import React from 'react';
import { SpriteIcon } from '../../images/SpriteIcon';
import type { IconName } from '../@types/lucide-sprites';
import { Button } from '../components/button';

export default function ButtonWithIcon({ spriteUrl }: { spriteUrl: string }) {
  return (
    <Button variant="outline" size="sm">
      <SpriteIcon<IconName> id="Calendar" url={spriteUrl} /> New Branch
    </Button>
  );
}
