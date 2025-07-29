import { createSpriteIcon } from '../../images/SpriteIcon';
import type { IconName } from '../@types/lucide-sprites';
import svgSpriteUrl from '../assets/lucide-sprites.svg?url';
import { Button } from '../components/button';

const SpriteIcon = createSpriteIcon<IconName>(svgSpriteUrl);

export default function ButtonLoading() {
  return (
    <Button size="sm" disabled>
      <SpriteIcon id="Loader" className="animate-spin" />
      Please wait
    </Button>
  );
}
