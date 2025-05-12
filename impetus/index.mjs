// src/impetus/Spinner.tsx
import clsx from "clsx";
import { jsx } from "react/jsx-runtime";
function Spinner({ className }) {
  return /* @__PURE__ */ jsx("div", { className: clsx(className, "h-4 w-4 animate-spin rounded-full border-t-2 border-t-current border-r-2 border-r-transparent"), "aria-label": "Loading" });
}

// src/impetus/SpriteIcon.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function SpriteIcon({ url, id, ...props }) {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle:
    /* @__PURE__ */ jsx2("svg", { ...props, children: id ? /* @__PURE__ */ jsx2("use", { href: `${url}#${id}` }) : /* @__PURE__ */ jsx2("use", { href: `${url}` }) })
  );
}

// src/impetus/LazyImage.tsx
import clsx2 from "clsx";
import React from "react";
import { Await } from "react-router";
import { jsx as jsx3 } from "react/jsx-runtime";
var Image = ({ src, alt, width, height, className, loading = "lazy" }) => {
  return /* @__PURE__ */ jsx3("img", { src, alt, width, height, className, loading, decoding: "async" });
};
var imageLoader = async (filenames) => {
  return Object.keys(filenames).map((filePath) => filePath.replace(/.*\/(.*)/, "$1"));
};
function LazyImage({ image, className, fallback = /* @__PURE__ */ jsx3(Spinner, {}) }) {
  return /* @__PURE__ */ jsx3(React.Suspense, { fallback, children: /* @__PURE__ */ jsx3(TypedAwait, { resolve: image, errorElement: /* @__PURE__ */ jsx3(Spinner, { className: "text-red-500" }), children: (imageData) => /* @__PURE__ */ jsx3(Image, { ...imageData, className: clsx2(imageData.className, className) }) }) });
}
function LazyGallery({ images, className, imageClass, fallback = /* @__PURE__ */ jsx3(Spinner, { className: "h-[180px]" }) }) {
  return /* @__PURE__ */ jsx3("div", { className, children: images.map((imgPromise, index) => (
    // biome-ignore lint/suspicious/noArrayIndexKey:
    /* @__PURE__ */ jsx3(LazyImage, { image: imgPromise, className: imageClass, fallback }, index)
  )) });
}
function TypedAwait({ resolve, children, ...props }) {
  return /* @__PURE__ */ jsx3(Await, { resolve, ...props, children: (data) => children(data) });
}
export {
  LazyGallery,
  LazyImage,
  Spinner,
  SpriteIcon,
  imageLoader
};
//# sourceMappingURL=index.mjs.map