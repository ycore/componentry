import { createSpriteIcon } from '../../images/SpriteIcon';
import type { IconName } from '../@types/lucide-sprites';
import svgSpriteUrl from '../assets/lucide-sprites.svg?url';
import { Alert, AlertDescription, AlertTitle } from '../components/alert';

const SpriteIcon = createSpriteIcon<IconName>(svgSpriteUrl);

export default function AlertDestructive() {
  return (
    <Alert variant="destructive">
      <SpriteIcon id="CircleAlert" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
    </Alert>
  );
}
