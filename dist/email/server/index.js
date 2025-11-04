import { jsx } from "react/jsx-runtime";
import { renderToStaticMarkup } from "react-dom/server";
import { createContext, useContext } from "react";
import { logger } from "@ycore/forge/logger";
function htmlToPlainText(html) {
  if (!html) {
    return "";
  }
  let text = html;
  text = text.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
  text = text.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "");
  text = text.replace(/<!--[\s\S]*?-->/g, "");
  text = text.replace(/<h1[^>]*>(.*?)<\/h1>/gi, "\n\n# $1\n\n");
  text = text.replace(/<h2[^>]*>(.*?)<\/h2>/gi, "\n\n## $1\n\n");
  text = text.replace(/<h3[^>]*>(.*?)<\/h3>/gi, "\n\n### $1\n\n");
  text = text.replace(/<h4[^>]*>(.*?)<\/h4>/gi, "\n\n#### $1\n\n");
  text = text.replace(/<h5[^>]*>(.*?)<\/h5>/gi, "\n\n##### $1\n\n");
  text = text.replace(/<h6[^>]*>(.*?)<\/h6>/gi, "\n\n###### $1\n\n");
  text = text.replace(/<a[^>]*href=["']([^"']*)["'][^>]*>(.*?)<\/a>/gi, (_match, url, linkText) => {
    const cleanText = linkText.replace(/<[^>]+>/g, "").trim();
    if (cleanText === url || !cleanText) {
      return url;
    }
    return `${cleanText} (${url})`;
  });
  text = text.replace(/<button[^>]*>(.*?)<\/button>/gi, "\n\n[BUTTON: $1]\n\n");
  text = text.replace(/<hr[^>]*>/gi, "\n\n────────────────────────────────────────\n\n");
  text = text.replace(/<br\s*\/?>/gi, "\n");
  text = text.replace(/<\/p>/gi, "\n\n");
  text = text.replace(/<p[^>]*>/gi, "");
  text = text.replace(/<\/div>/gi, "\n");
  text = text.replace(/<div[^>]*>/gi, "");
  text = text.replace(/<li[^>]*>(.*?)<\/li>/gi, "• $1\n");
  text = text.replace(/<\/(ul|ol)>/gi, "\n");
  text = text.replace(/<(ul|ol)[^>]*>/gi, "");
  text = text.replace(/<\/td>/gi, "	");
  text = text.replace(/<td[^>]*>/gi, "");
  text = text.replace(/<\/tr>/gi, "\n");
  text = text.replace(/<tr[^>]*>/gi, "");
  text = text.replace(/<\/(table|thead|tbody|tfoot)>/gi, "\n");
  text = text.replace(/<(table|thead|tbody|tfoot)[^>]*>/gi, "");
  text = text.replace(/<(strong|b)[^>]*>(.*?)<\/(strong|b)>/gi, "*$2*");
  text = text.replace(/<(em|i)[^>]*>(.*?)<\/(em|i)>/gi, "_$2_");
  text = text.replace(/<pre[^>]*>(.*?)<\/pre>/gis, (_match, code) => {
    const cleanCode = code.replace(/<[^>]+>/g, "");
    return `

\`\`\`
${cleanCode}
\`\`\`

`;
  });
  text = text.replace(/<code[^>]*>(.*?)<\/code>/gi, "`$1`");
  text = text.replace(/<[^>]+>/g, "");
  text = decodeHTMLEntities(text);
  text = text.replace(/\t/g, "    ");
  text = text.replace(/\r\n/g, "\n");
  text = text.replace(/\r/g, "\n");
  text = text.replace(/ +/g, " ");
  text = text.replace(/\n\n\n+/g, "\n\n");
  text = text.trim();
  text = wrapText(text, 78);
  return text;
}
function decodeHTMLEntities(text) {
  const entities = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'",
    "&apos;": "'",
    "&nbsp;": " ",
    "&mdash;": "—",
    "&ndash;": "–",
    "&hellip;": "...",
    "&copy;": "©",
    "&reg;": "®",
    "&trade;": "™",
    "&bull;": "•",
    "&middot;": "·",
    "&laquo;": "«",
    "&raquo;": "»",
    "&ldquo;": '"',
    "&rdquo;": '"',
    "&lsquo;": "'",
    "&rsquo;": "'"
  };
  let decoded = text;
  for (const [entity, char] of Object.entries(entities)) {
    decoded = decoded.replace(new RegExp(entity, "g"), char);
  }
  decoded = decoded.replace(/&#(\d+);/g, (_match, dec) => {
    return String.fromCharCode(Number(dec));
  });
  decoded = decoded.replace(/&#x([0-9a-f]+);/gi, (_match, hex) => {
    return String.fromCharCode(Number.parseInt(hex, 16));
  });
  return decoded;
}
function wrapText(text, maxLength = 78) {
  const lines = text.split("\n");
  const wrappedLines = [];
  for (const line of lines) {
    if (!line.trim() || line.startsWith("```") || line.startsWith("    ")) {
      wrappedLines.push(line);
      continue;
    }
    if (line.startsWith("#")) {
      wrappedLines.push(line);
      continue;
    }
    if (line.trim().startsWith("•")) {
      wrappedLines.push(line);
      continue;
    }
    if (line.length <= maxLength) {
      wrappedLines.push(line);
    } else {
      const words = line.split(" ");
      let currentLine = "";
      for (const word of words) {
        if (currentLine.length + word.length + 1 <= maxLength) {
          currentLine += (currentLine ? " " : "") + word;
        } else {
          if (currentLine) {
            wrappedLines.push(currentLine);
          }
          currentLine = word;
        }
      }
      if (currentLine) {
        wrappedLines.push(currentLine);
      }
    }
  }
  return wrappedLines.join("\n");
}
function extractPreviewText(html, maxLength = 100) {
  const plainText = htmlToPlainText(html);
  const cleaned = plainText.replace(/^#+\s*/gm, "").trim();
  const lines = cleaned.split("\n\n");
  const firstContent = lines.find((line) => line.trim().length > 0) || "";
  if (firstContent.length <= maxLength) {
    return firstContent;
  }
  const truncated = firstContent.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  if (lastSpace > maxLength * 0.8) {
    return `${truncated.slice(0, lastSpace)}...`;
  }
  return `${truncated}...`;
}
const TailwindStylesMapContext = createContext(null);
function useTailwindStylesMap() {
  const stylesMap = useContext(TailwindStylesMapContext);
  if (!stylesMap) {
    return {
      cssMap: {},
      dynamicPatterns: []
    };
  }
  return stylesMap;
}
function TailwindStylesMapProvider({ stylesMap, children }) {
  return /* @__PURE__ */ jsx(TailwindStylesMapContext.Provider, { value: stylesMap, children });
}
async function renderEmail(component, props, options) {
  const { subject, ...componentProps } = props;
  let emailSubject;
  let actualProps;
  if (typeof subject === "function") {
    actualProps = componentProps;
    emailSubject = subject(actualProps);
  } else {
    actualProps = props;
    emailSubject = subject;
  }
  const componentElement = component(actualProps);
  const wrappedElement = options?.tailwindStylesMap ? /* @__PURE__ */ jsx(TailwindStylesMapProvider, { stylesMap: options.tailwindStylesMap, children: componentElement }) : componentElement;
  const htmlOutput = renderToStaticMarkup(wrappedElement);
  let html = htmlOutput;
  if (!html.includes("<!DOCTYPE")) {
    html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
${html}`;
  }
  if (html.includes("<html") && !html.includes("xmlns=")) {
    html = html.replace("<html", '<html xmlns="http://www.w3.org/1999/xhtml"');
  }
  if (options?.pretty) {
    html = prettyPrintHTML(html);
  }
  const text = htmlToPlainText(html);
  return {
    html,
    text,
    subject: emailSubject
  };
}
function prettyPrintHTML(html) {
  let formatted = html;
  formatted = formatted.replace(/(<\/[^>]+>)(?!<\/)/g, "$1\n");
  formatted = formatted.replace(/(<(?!\/)[^>]+>)(?!<)/g, "\n$1");
  formatted = formatted.replace(/\n\n+/g, "\n\n");
  const lines = formatted.split("\n");
  let indent = 0;
  const indented = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (trimmed.startsWith("</")) {
      indent = Math.max(0, indent - 1);
    }
    indented.push("  ".repeat(indent) + trimmed);
    if (trimmed.startsWith("<") && !trimmed.startsWith("</") && !trimmed.endsWith("/>") && !trimmed.includes("<!DOCTYPE")) {
      const tagName = trimmed.match(/<(\w+)/)?.[1];
      if (tagName && !["img", "br", "hr", "input", "meta", "link"].includes(tagName)) {
        indent++;
      }
    }
  }
  return indented.join("\n");
}
async function renderEmailBatch(templates) {
  return Promise.all(templates.map((template) => renderEmail(template.component, template.props, template.options)));
}
function renderEmailHTML(component, props) {
  return renderToStaticMarkup(component(props));
}
async function renderEmailTemplate(component, props) {
  const result = await renderEmail(component, props);
  return {
    subject: result.subject || "",
    html: result.html,
    text: result.text
  };
}
function tailwindToInline(className, existingStyle, stylesMap) {
  if (!className) {
    return existingStyle || {};
  }
  const classes = className.split(/\s+/).filter(Boolean);
  const inlineStyles = { ...existingStyle };
  for (const cls of classes) {
    const staticStyle = stylesMap.cssMap[cls];
    if (staticStyle) {
      Object.assign(inlineStyles, staticStyle);
      continue;
    }
    let matched = false;
    for (const pattern of stylesMap.dynamicPatterns) {
      const matches = cls.match(pattern.regex);
      if (matches) {
        const dynamicStyle = pattern.converter(matches);
        if (dynamicStyle) {
          Object.assign(inlineStyles, dynamicStyle);
          matched = true;
          break;
        }
      }
    }
    if (!matched) {
      logger.warning("tailwind_class_not_found", {
        className: cls,
        hint: "Run 'bun run email:generate' to update styles maps"
      });
    }
  }
  return inlineStyles;
}
function cssPropertiesToString(styles) {
  return Object.entries(styles).map(([key, value]) => {
    const cssKey = key.replace(/([A-Z])/g, "-$1").toLowerCase();
    return `${cssKey}:${value}`;
  }).join(";");
}
function mergeClassNamesToInline(classNames, existingStyle, stylesMap) {
  let merged = { ...existingStyle };
  for (const className of classNames) {
    if (className) {
      merged = tailwindToInline(className, merged, stylesMap);
    }
  }
  return merged;
}
function extractBgColor(className, style, stylesMap) {
  if (style?.backgroundColor) {
    return normalizeColor(style.backgroundColor);
  }
  if (!className) {
    return void 0;
  }
  const classes = className.split(/\s+/).filter(Boolean);
  for (const cls of classes) {
    if (cls.startsWith("bg-")) {
      const cssProperties = stylesMap.cssMap[cls];
      if (cssProperties?.backgroundColor) {
        return normalizeColor(cssProperties.backgroundColor);
      }
    }
  }
  return void 0;
}
function normalizeColor(color) {
  if (typeof color !== "string") {
    return "#ffffff";
  }
  if (color.startsWith("#")) {
    return color;
  }
  const namedColors = {
    white: "#ffffff",
    black: "#000000",
    transparent: "#ffffff"
  };
  const normalized = color.toLowerCase();
  if (namedColors[normalized]) {
    return namedColors[normalized];
  }
  return color;
}
export {
  TailwindStylesMapProvider,
  cssPropertiesToString,
  extractBgColor,
  extractPreviewText,
  htmlToPlainText,
  mergeClassNamesToInline,
  renderEmail,
  renderEmailBatch,
  renderEmailHTML,
  renderEmailTemplate,
  tailwindToInline,
  useTailwindStylesMap
};
//# sourceMappingURL=index.js.map
