import React from 'react';
import { SpriteIcon } from '../../images/SpriteIcon';
import type { IconName } from '../@types/lucide-sprites';
import { Button } from '../components/button';

export default function ButtonLoading({ spriteUrl }: { spriteUrl: string }) {
  return (
    <Button size="sm" disabled>
      <SpriteIcon<IconName> iconId="Loader" className="animate-spin" url={spriteUrl} />
      Please wait
    </Button>
  );
}
