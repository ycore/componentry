export interface SpriteIconProps<IconUrl extends string, IconId extends string = string> extends React.SVGProps<SVGSVGElement> {
  url: IconUrl;
  id?: IconId;
}
