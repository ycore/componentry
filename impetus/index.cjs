"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/impetus/index.ts
var impetus_exports = {};
__export(impetus_exports, {
  LazyGallery: () => LazyGallery,
  LazyImage: () => LazyImage,
  Spinner: () => Spinner,
  SpriteIcon: () => SpriteIcon,
  imageLoader: () => imageLoader
});
module.exports = __toCommonJS(impetus_exports);

// src/impetus/LazyImage.tsx
var import_clsx2 = __toESM(require("clsx"), 1);
var import_react = __toESM(require("react"), 1);
var import_react_router = require("react-router");

// src/impetus/Spinner.tsx
var import_clsx = __toESM(require("clsx"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
function Spinner({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: (0, import_clsx.default)(className, "h-4 w-4 animate-spin rounded-full border-t-2 border-t-current border-r-2 border-r-transparent"), "aria-label": "Loading" });
}

// src/impetus/LazyImage.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Image = ({ src, alt, width, height, className, loading = "lazy" }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("img", { src, alt, width, height, className, loading, decoding: "async" });
};
var imageLoader = async (filenames) => {
  return Object.keys(filenames).map((filePath) => filePath.replace(/.*\/(.*)/, "$1"));
};
function LazyImage({ image, className, fallback = /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Spinner, {}) }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react.default.Suspense, { fallback, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(TypedAwait, { resolve: image, errorElement: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Spinner, { className: "text-red-500" }), children: (imageData) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Image, { ...imageData, className: (0, import_clsx2.default)(imageData.className, className) }) }) });
}
function LazyGallery({ images, className, imageClass, fallback = /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Spinner, { className: "h-[180px]" }) }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className, children: images.map((imgPromise, index) => (
    // biome-ignore lint/suspicious/noArrayIndexKey:
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(LazyImage, { image: imgPromise, className: imageClass, fallback }, index)
  )) });
}
function TypedAwait({ resolve, children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_router.Await, { resolve, ...props, children: (data) => children(data) });
}

// src/impetus/SpriteIcon.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function SpriteIcon({ url, id, ...props }) {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle:
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { ...props, children: id ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("use", { href: `${url}#${id}` }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("use", { href: `${url}` }) })
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LazyGallery,
  LazyImage,
  Spinner,
  SpriteIcon,
  imageLoader
});
//# sourceMappingURL=index.cjs.map