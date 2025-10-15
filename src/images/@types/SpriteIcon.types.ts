export interface SpriteIconProps<IconUrl extends string, IconId extends string = string> extends React.SVGProps<SVGSVGElement> {
  spriteUrl: IconUrl;
  iconId?: IconId;
}
