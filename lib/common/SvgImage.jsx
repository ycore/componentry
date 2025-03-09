export function SvgImage({ href, ...svgProps }) {
    return (<svg xmlns="http://www.w3.org/2000/svg" {...svgProps}>
      <use href={href}/>
    </svg>);
}
//# sourceMappingURL=SvgImage.jsx.map