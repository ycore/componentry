import { createSpriteIcon } from '../../images/SpriteIcon';
import type { IconName } from '../@types/example-sprites';
import svgSpriteUrl from '../assets/example-sprites.svg?url';

const SpriteIcon = createSpriteIcon<IconName>(svgSpriteUrl);

import { Toggle } from '../components/toggle';

export default function ToggleWithText() {
  return (
    <Toggle aria-label="Toggle italic">
      <SpriteIcon id="Italic" />
      Italic
    </Toggle>
  );
}
