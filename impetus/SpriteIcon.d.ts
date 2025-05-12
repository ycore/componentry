import type React from 'react';
export interface SpriteIconProps<IconUrl extends string> extends React.SVGProps<SVGSVGElement> {
    url: IconUrl;
    id?: string;
}
export declare function SpriteIcon<IconUrl extends string>({ url, id, ...props }: SpriteIconProps<IconUrl>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=SpriteIcon.d.ts.map