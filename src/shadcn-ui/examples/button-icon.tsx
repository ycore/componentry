import { createSpriteIcon } from '../../images/SpriteIcon';
import type { IconName } from '../@types/lucide-sprites';
import svgSpriteUrl from '../assets/lucide-sprites.svg?url';
import { Button } from '../components/button';

const SpriteIcon = createSpriteIcon<IconName>(svgSpriteUrl);

export default function ButtonIcon() {
  return (
    <Button variant="secondary" size="icon" className="size-8">
      <SpriteIcon id="ChevronRight" />
    </Button>
  );
}
