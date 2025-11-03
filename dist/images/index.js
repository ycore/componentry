import { jsx } from "react/jsx-runtime";
import clsx from "clsx";
import React, { createContext, useContext } from "react";
import { Await } from "react-router";
import { createSpriteIcon as createSpriteIcon$1 } from "@ycore/componentry/images";
const SvgIcon = createSpriteIcon$1("lucide");
function Spinner({ className, iconId = "Loader", ...props }) {
  return /* @__PURE__ */ jsx(SvgIcon, { iconId, role: "status", "aria-label": "Loading", className: clsx("size-4 animate-spin", className), ...props });
}
const imageLoader = async (filenames) => {
  return Object.keys(filenames).map((filePath) => filePath.replace(/.*\/(.*)/, "$1"));
};
const createRemoteImagePromise = (src, alt, width, height) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({ src, alt, width: width || img.naturalWidth, height: height || img.naturalHeight, loading: "lazy" });
    };
    img.onerror = () => {
      reject(new Error(`Failed to load image: ${src}`));
    };
    img.src = src;
  });
};
function LazyImage({ image, src, alt, width, height, className, spriteUrl, fallback = spriteUrl ? /* @__PURE__ */ jsx(Spinner, {}) : /* @__PURE__ */ jsx("div", { className: "text-slate-500/50", children: "Loading..." }) }) {
  const imagePromise = image || (src ? createRemoteImagePromise(src, alt || "", width, height) : null);
  if (!imagePromise) {
    return /* @__PURE__ */ jsx("div", { className: "text-slate-500/50", children: "Error: No image source provided" });
  }
  return /* @__PURE__ */ jsx(React.Suspense, { fallback, children: /* @__PURE__ */ jsx(TypedAwait, { resolve: imagePromise, errorElement: spriteUrl ? /* @__PURE__ */ jsx(Spinner, { className: "text-slate-500/50" }) : /* @__PURE__ */ jsx("div", { className: "text-slate-500/50", children: "Error loading image" }), children: (imageData) => /* @__PURE__ */ jsx(ImageElement, { ...imageData, className: clsx(imageData.className, className) }) }) });
}
function LazyGallery({
  images,
  className,
  imageClass,
  spriteUrl,
  fallback = spriteUrl ? /* @__PURE__ */ jsx(Spinner, { className: "h-[180px]" }) : /* @__PURE__ */ jsx("div", { className: "h-[180px] text-slate-500/50", children: "Loading..." })
}) {
  return /* @__PURE__ */ jsx("div", { className, children: images.map((imgPromise) => /* @__PURE__ */ jsx(LazyImage, { image: imgPromise, className: imageClass, spriteUrl, fallback }, imgPromise.toString())) });
}
function TypedAwait({ resolve, children, ...props }) {
  return /* @__PURE__ */ jsx(Await, { resolve, ...props, children: (data) => children(data) });
}
const ImageElement = ({ src, alt, width, height, className, loading = "lazy" }) => {
  return /* @__PURE__ */ jsx("img", { src, alt, width, height, className, loading, decoding: "async" });
};
const SpriteIconContext = createContext(null);
function useSpriteIcon(spriteKey) {
  const config = useContext(SpriteIconContext);
  if (!config) {
    throw new Error("useSpriteIcon must be used within a SpriteIconProvider. Wrap your app with <SpriteIconProvider sprites={{...}}>.");
  }
  if (!config[spriteKey]) {
    throw new Error(`Sprite key "${spriteKey}" not found in SpriteIconProvider. Available keys: ${Object.keys(config).join(", ")}`);
  }
  return config[spriteKey];
}
function SpriteIconProvider({ sprites, children }) {
  return /* @__PURE__ */ jsx(SpriteIconContext.Provider, { value: sprites, children });
}
function SpriteIcon({ spriteUrl, iconId, ...props }) {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: acceptable
    /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", ...props, children: iconId ? /* @__PURE__ */ jsx("use", { href: `${spriteUrl}#${iconId}` }) : /* @__PURE__ */ jsx("use", { href: `${spriteUrl}` }) })
  );
}
function createSpriteIcon(spriteKey, options) {
  if (options?.iconSpriteUrl) {
    const spriteUrl = options.iconSpriteUrl;
    return function SpriteIconComponent({ iconId, ...props }) {
      return /* @__PURE__ */ jsx(SpriteIcon, { spriteUrl, iconId, ...props });
    };
  }
  return function SpriteIconComponent({ iconId, ...props }) {
    const spriteUrl = useSpriteIcon(spriteKey);
    return /* @__PURE__ */ jsx(SpriteIcon, { spriteUrl, iconId, ...props });
  };
}
export {
  LazyGallery,
  LazyImage,
  SpriteIcon,
  SpriteIconProvider,
  createSpriteIcon,
  imageLoader,
  useSpriteIcon
};
//# sourceMappingURL=index.js.map
