// src/images/LazyImage.tsx
import clsx2 from "clsx";
import React from "react";
import { Await } from "react-router";

// src/shadcn-ui/components/spinner.tsx
import clsx from "clsx";

// src/vibrant/components/svg-icon.tsx
import { createSpriteIcon } from "@ycore/componentry/images";
var SvgIcon = createSpriteIcon("lucide");

// src/shadcn-ui/components/spinner.tsx
import { jsx } from "react/jsx-runtime";
function Spinner({ className, iconId = "Loader", ...props }) {
  return /* @__PURE__ */ jsx(SvgIcon, {
    iconId,
    role: "status",
    "aria-label": "Loading",
    className: clsx("size-4 animate-spin", className),
    ...props
  });
}

// src/images/LazyImage.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var imageLoader = async (filenames) => {
  return Object.keys(filenames).map((filePath) => filePath.replace(/.*\/(.*)/, "$1"));
};
var createRemoteImagePromise = (src, alt, width, height) => {
  return new Promise((resolve, reject) => {
    const img = new Image;
    img.onload = () => {
      resolve({ src, alt, width: width || img.naturalWidth, height: height || img.naturalHeight, loading: "lazy" });
    };
    img.onerror = () => {
      reject(new Error(`Failed to load image: ${src}`));
    };
    img.src = src;
  });
};
function LazyImage({ image, src, alt, width, height, className, spriteUrl, fallback = spriteUrl ? /* @__PURE__ */ jsx2(Spinner, {}) : /* @__PURE__ */ jsx2("div", {
  className: "text-slate-500/50",
  children: "Loading..."
}) }) {
  const imagePromise = image || (src ? createRemoteImagePromise(src, alt || "", width, height) : null);
  if (!imagePromise) {
    return /* @__PURE__ */ jsx2("div", {
      className: "text-slate-500/50",
      children: "Error: No image source provided"
    });
  }
  return /* @__PURE__ */ jsx2(React.Suspense, {
    fallback,
    children: /* @__PURE__ */ jsx2(TypedAwait, {
      resolve: imagePromise,
      errorElement: spriteUrl ? /* @__PURE__ */ jsx2(Spinner, {
        className: "text-slate-500/50"
      }) : /* @__PURE__ */ jsx2("div", {
        className: "text-slate-500/50",
        children: "Error loading image"
      }),
      children: (imageData) => /* @__PURE__ */ jsx2(ImageElement, {
        ...imageData,
        className: clsx2(imageData.className, className)
      })
    })
  });
}
function LazyGallery({ images, className, imageClass, spriteUrl, fallback = spriteUrl ? /* @__PURE__ */ jsx2(Spinner, {
  className: "h-[180px]"
}) : /* @__PURE__ */ jsx2("div", {
  className: "h-[180px] text-slate-500/50",
  children: "Loading..."
}) }) {
  return /* @__PURE__ */ jsx2("div", {
    className,
    children: images.map((imgPromise) => /* @__PURE__ */ jsx2(LazyImage, {
      image: imgPromise,
      className: imageClass,
      spriteUrl,
      fallback
    }, imgPromise.toString()))
  });
}
function TypedAwait({ resolve, children, ...props }) {
  return /* @__PURE__ */ jsx2(Await, {
    resolve,
    ...props,
    children: (data) => children(data)
  });
}
var ImageElement = ({ src, alt, width, height, className, loading = "lazy" }) => {
  return /* @__PURE__ */ jsx2("img", {
    src,
    alt,
    width,
    height,
    className,
    loading,
    decoding: "async"
  });
};
// src/images/SpriteIconProvider.tsx
import { createContext, useContext } from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var SpriteIconContext = createContext(null);
function useSpriteIcon(spriteKey) {
  const config = useContext(SpriteIconContext);
  if (!config) {
    throw new Error("useSpriteIcon must be used within a SpriteIconProvider. " + "Wrap your app with <SpriteIconProvider sprites={{...}}>.");
  }
  if (!config[spriteKey]) {
    throw new Error(`Sprite key "${spriteKey}" not found in SpriteIconProvider. ` + `Available keys: ${Object.keys(config).join(", ")}`);
  }
  return config[spriteKey];
}
function SpriteIconProvider({
  sprites,
  children
}) {
  return /* @__PURE__ */ jsx3(SpriteIconContext.Provider, {
    value: sprites,
    children
  });
}

// src/images/SpriteIcon.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
function SpriteIcon({ spriteUrl, iconId, ...props }) {
  return /* @__PURE__ */ jsx4("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    ...props,
    children: iconId ? /* @__PURE__ */ jsx4("use", {
      href: `${spriteUrl}#${iconId}`
    }) : /* @__PURE__ */ jsx4("use", {
      href: `${spriteUrl}`
    })
  });
}
function createSpriteIcon2(spriteKey) {
  return function SpriteIconComponent({ iconId, ...props }) {
    const spriteUrl = useSpriteIcon(spriteKey);
    return /* @__PURE__ */ jsx4(SpriteIcon, {
      spriteUrl,
      iconId,
      ...props
    });
  };
}
export {
  useSpriteIcon,
  imageLoader,
  createSpriteIcon2 as createSpriteIcon,
  SpriteIconProvider,
  SpriteIcon,
  LazyImage,
  LazyGallery
};

//# debugId=E03BB52D0193CABE64756E2164756E21
