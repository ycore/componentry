import { createSpriteIcon } from '../../images/SpriteIcon';
import type { IconName } from '../@types/example-sprites';
import svgSpriteUrl from '../assets/example-sprites.svg?url';

const SpriteIcon = createSpriteIcon<IconName>(svgSpriteUrl);

import { Toggle } from '../components/toggle';

export default function ToggleDisabled() {
  return (
    <Toggle aria-label="Toggle italic" disabled>
      <SpriteIcon id="Underline" className="h-4 w-4" />
    </Toggle>
  );
}
