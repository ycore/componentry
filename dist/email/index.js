import { jsx, jsxs } from "react/jsx-runtime";
import { useTailwindStylesMap, extractBgColor, tailwindToInline } from "@ycore/componentry/email/server";
function Body({ className, style, children }) {
  const stylesMap = useTailwindStylesMap();
  const bgcolorValue = extractBgColor(className, style, stylesMap);
  const inlineStyles = tailwindToInline(className, style, stylesMap);
  const bodyProps = {
    style: inlineStyles
  };
  if (bgcolorValue) {
    bodyProps.bgcolor = bgcolorValue;
  }
  return /* @__PURE__ */ jsx("body", { ...bodyProps, children });
}
function Button({ href, target = "_blank", width = "auto", align = "left", className, style, children }) {
  const stylesMap = useTailwindStylesMap();
  const inlineStyles = tailwindToInline(className, style, stylesMap);
  const defaultButtonStyles = {
    display: "inline-block",
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "center",
    textDecoration: "none",
    borderRadius: "4px",
    backgroundColor: "#3b82f6",
    color: "#ffffff"
  };
  const buttonStyles = { ...defaultButtonStyles, ...inlineStyles };
  const tableStyles = {
    width: width === "auto" ? void 0 : typeof width === "number" ? `${width}px` : width
  };
  const cellStyles = {
    textAlign: align
  };
  return /* @__PURE__ */ jsx("table", { role: "presentation", cellPadding: "0", cellSpacing: "0", border: 0, style: tableStyles, children: /* @__PURE__ */ jsx("tbody", { children: /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { style: cellStyles, children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("a", { href, target, style: buttonStyles, rel: target === "_blank" ? "noopener noreferrer" : void 0, children }) }) }) }) }) });
}
function Code({ block = false, language, className, style, children }) {
  const stylesMap = useTailwindStylesMap();
  const inlineStyles = tailwindToInline(className, style, stylesMap);
  if (block) {
    const preStyles = {
      fontFamily: '"Courier New", Courier, monospace',
      fontSize: "14px",
      lineHeight: "1.5",
      backgroundColor: "#f3f4f6",
      padding: "12px",
      borderRadius: "4px",
      overflow: "auto",
      whiteSpace: "pre-wrap",
      wordBreak: "break-word",
      margin: "16px 0",
      ...inlineStyles
    };
    const codeStyles2 = {
      fontFamily: "inherit",
      fontSize: "inherit"
    };
    return /* @__PURE__ */ jsx("pre", { style: preStyles, children: /* @__PURE__ */ jsx("code", { style: codeStyles2, "data-language": language, children }) });
  }
  const codeStyles = {
    fontFamily: '"Courier New", Courier, monospace',
    fontSize: "14px",
    backgroundColor: "#f3f4f6",
    padding: "2px 6px",
    borderRadius: "3px",
    ...inlineStyles
  };
  return /* @__PURE__ */ jsx("code", { style: codeStyles, "data-language": language, children });
}
function Column({ className, style, width, verticalAlign = "top", children }) {
  const stylesMap = useTailwindStylesMap();
  const inlineStyles = tailwindToInline(className, style, stylesMap);
  const cellStyles = { verticalAlign, ...inlineStyles };
  if (width) {
    if (typeof width === "number") {
      cellStyles.width = `${width}px`;
    } else if (width === "auto") {
      cellStyles.width = "auto";
    } else {
      cellStyles.width = width;
    }
  }
  return /* @__PURE__ */ jsx("td", { style: cellStyles, children });
}
function Container({ className, style, maxWidth = 600, align = "center", children }) {
  const stylesMap = useTailwindStylesMap();
  const inlineStyles = tailwindToInline(className, style, stylesMap);
  const tableStyles = {
    maxWidth: `${maxWidth}px`,
    width: "100%",
    margin: align === "center" ? "0 auto" : void 0,
    ...inlineStyles
  };
  return /* @__PURE__ */ jsx("table", { role: "presentation", cellPadding: "0", cellSpacing: "0", border: 0, style: tableStyles, align, children: /* @__PURE__ */ jsx("tbody", { children: /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { children }) }) }) });
}
function Head({ children }) {
  return /* @__PURE__ */ jsxs("head", { children: [
    /* @__PURE__ */ jsx("meta", { httpEquiv: "Content-Type", content: "text/html; charset=UTF-8" }),
    /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }),
    /* @__PURE__ */ jsx("meta", { httpEquiv: "X-UA-Compatible", content: "IE=edge" }),
    /* @__PURE__ */ jsx("meta", { name: "format-detection", content: "telephone=no,date=no,address=no,email=no" }),
    /* @__PURE__ */ jsx("meta", { name: "x-apple-disable-message-reformatting" }),
    /* @__PURE__ */ jsx("meta", { name: "color-scheme", content: "light" }),
    /* @__PURE__ */ jsx("meta", { name: "supported-color-schemes", content: "light" }),
    children
  ] });
}
function Heading({ level = 1, as, className, style, children }) {
  const stylesMap = useTailwindStylesMap();
  const Element = as || `h${level}`;
  const inlineStyles = tailwindToInline(className, style, stylesMap);
  const defaultStyles = {
    margin: "0 0 16px 0",
    fontWeight: "bold",
    lineHeight: "1.3"
  };
  const levelDefaults = {
    1: { fontSize: "32px" },
    2: { fontSize: "28px" },
    3: { fontSize: "24px" },
    4: { fontSize: "20px" },
    5: { fontSize: "18px" },
    6: { fontSize: "16px" }
  };
  const mergedStyles = {
    ...defaultStyles,
    ...levelDefaults[level],
    ...inlineStyles
  };
  return /* @__PURE__ */ jsx(Element, { style: mergedStyles, children });
}
function Hr({ borderColor = "#e5e7eb", borderWidth = 1, className, style }) {
  const stylesMap = useTailwindStylesMap();
  const inlineStyles = tailwindToInline(className, style, stylesMap);
  const hrStyles = {
    width: "100%",
    border: "none",
    borderTop: `${borderWidth}px solid ${borderColor}`,
    margin: "16px 0",
    ...inlineStyles
  };
  return /* @__PURE__ */ jsx("hr", { style: hrStyles });
}
function Html({ lang = "en", dir = "ltr", className, style, children }) {
  const stylesMap = useTailwindStylesMap();
  const inlineStyles = tailwindToInline(className, style, stylesMap);
  const htmlProps = {
    lang,
    dir,
    xmlns: "http://www.w3.org/1999/xhtml",
    style: inlineStyles
  };
  return /* @__PURE__ */ jsx("html", { ...htmlProps, children });
}
function Image({ src, alt, width, height, title, className, style }) {
  const stylesMap = useTailwindStylesMap();
  const inlineStyles = tailwindToInline(className, style, stylesMap);
  const defaultStyles = {
    display: "block",
    border: "none",
    outline: "none",
    textDecoration: "none",
    maxWidth: "100%",
    height: "auto"
  };
  const imageStyles = { ...defaultStyles, ...inlineStyles };
  const imageProps = { src, alt, title, style: imageStyles };
  if (width) {
    imageProps.width = typeof width === "number" ? width : width;
  }
  if (height) {
    imageProps.height = typeof height === "number" ? height : height;
  }
  return /* @__PURE__ */ jsx("img", { ...imageProps });
}
function Link({ href, target = "_blank", title, className, style, children }) {
  const stylesMap = useTailwindStylesMap();
  const inlineStyles = tailwindToInline(className, style, stylesMap);
  const defaultStyles = {
    color: "inherit",
    textDecoration: "underline"
  };
  const mergedStyles = {
    ...defaultStyles,
    ...inlineStyles
  };
  return /* @__PURE__ */ jsx("a", { href, target, title, style: mergedStyles, rel: target === "_blank" ? "noopener noreferrer" : void 0, children });
}
function Preview({ children }) {
  const previewStyles = {
    display: "none",
    maxHeight: 0,
    overflow: "hidden",
    fontSize: "1px",
    lineHeight: "1px",
    color: "transparent",
    opacity: 0
  };
  return /* @__PURE__ */ jsxs("div", { style: previewStyles, children: [
    children,
    " ".repeat(150)
  ] });
}
function Row({ className, style, verticalAlign = "top", children }) {
  const stylesMap = useTailwindStylesMap();
  const inlineStyles = tailwindToInline(className, style, stylesMap);
  const tableStyles = {
    width: "100%",
    ...inlineStyles
  };
  return /* @__PURE__ */ jsx("table", { role: "presentation", cellPadding: "0", cellSpacing: "0", border: 0, style: tableStyles, children: /* @__PURE__ */ jsx("tbody", { children: /* @__PURE__ */ jsx("tr", { style: { verticalAlign }, children }) }) });
}
function Section({ className, style, bgcolor, fullWidth = false, children }) {
  const stylesMap = useTailwindStylesMap();
  const inlineStyles = tailwindToInline(className, style, stylesMap);
  const tableStyles = {
    width: "100%",
    ...inlineStyles
  };
  const bgcolorValue = bgcolor ?? extractBgColor(className, style, stylesMap);
  const tableProps = {
    role: "presentation",
    cellPadding: 0,
    cellSpacing: 0,
    border: 0,
    style: tableStyles
  };
  if (bgcolorValue) {
    tableProps.bgcolor = bgcolorValue;
  }
  return /* @__PURE__ */ jsx("table", { ...tableProps, children: /* @__PURE__ */ jsx("tbody", { children: /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { style: fullWidth ? { padding: 0 } : void 0, children }) }) }) });
}
function Spacer({ height = 16 }) {
  return /* @__PURE__ */ jsx("table", { role: "presentation", cellPadding: "0", cellSpacing: "0", border: 0, style: { width: "100%" }, children: /* @__PURE__ */ jsx("tbody", { children: /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { style: { height: `${height}px`, fontSize: "1px", lineHeight: `${height}px` }, children: " " }) }) }) });
}
function Text({ as: Element = "p", className, style, children }) {
  const stylesMap = useTailwindStylesMap();
  const inlineStyles = tailwindToInline(className, style, stylesMap);
  if (Element === "p" && !inlineStyles.margin) {
    inlineStyles.margin = "0 0 16px 0";
  }
  return /* @__PURE__ */ jsx(Element, { style: inlineStyles, children });
}
export {
  Body,
  Button,
  Code,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Image,
  Link,
  Preview,
  Row,
  Section,
  Spacer,
  Text
};
//# sourceMappingURL=index.js.map
