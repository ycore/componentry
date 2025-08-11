// src/images/LazyImage.tsx
import clsx2 from "clsx";
import React from "react";
import { Await } from "react-router";

// src/shadcn-ui/custom/spinner.tsx
import clsx from "clsx";

// src/images/SpriteIcon.tsx
import { jsx } from "react/jsx-runtime";
function SpriteIcon({ url, id, ...props }) {
  return /* @__PURE__ */ jsx("svg", {
    ...props,
    children: id ? /* @__PURE__ */ jsx("use", {
      href: `${url}#${id}`
    }) : /* @__PURE__ */ jsx("use", {
      href: `${url}`
    })
  });
}
function createSpriteIcon(spriteUrl) {
  return function SpriteIconComponent({ id, ...props }) {
    return /* @__PURE__ */ jsx(SpriteIcon, {
      url: spriteUrl,
      id,
      ...props
    });
  };
}

// src/shadcn-ui/custom/spinner.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function Spinner({ className, spriteUrl, iconId = "Loader" }) {
  return /* @__PURE__ */ jsx2(SpriteIcon, {
    id: iconId,
    url: spriteUrl,
    className: clsx(className, "animate-spin")
  });
}

// src/images/LazyImage.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
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
function LazyImage({
  image,
  src,
  alt,
  width,
  height,
  className,
  spriteUrl,
  fallback = spriteUrl ? /* @__PURE__ */ jsx3(Spinner, {
    spriteUrl
  }) : /* @__PURE__ */ jsx3("div", {
    className: "text-slate-500/50",
    children: "Loading..."
  })
}) {
  const imagePromise = image || (src ? createRemoteImagePromise(src, alt || "", width, height) : null);
  if (!imagePromise) {
    return /* @__PURE__ */ jsx3("div", {
      className: "text-slate-500/50",
      children: "Error: No image source provided"
    });
  }
  return /* @__PURE__ */ jsx3(React.Suspense, {
    fallback,
    children: /* @__PURE__ */ jsx3(TypedAwait, {
      resolve: imagePromise,
      errorElement: spriteUrl ? /* @__PURE__ */ jsx3(Spinner, {
        spriteUrl,
        className: "text-slate-500/50"
      }) : /* @__PURE__ */ jsx3("div", {
        className: "text-slate-500/50",
        children: "Error loading image"
      }),
      children: (imageData) => /* @__PURE__ */ jsx3(ImageElement, {
        ...imageData,
        className: clsx2(imageData.className, className)
      })
    })
  });
}
function LazyGallery({
  images,
  className,
  imageClass,
  spriteUrl,
  fallback = spriteUrl ? /* @__PURE__ */ jsx3(Spinner, {
    spriteUrl,
    className: "h-[180px]"
  }) : /* @__PURE__ */ jsx3("div", {
    className: "h-[180px] text-slate-500/50",
    children: "Loading..."
  })
}) {
  return /* @__PURE__ */ jsx3("div", {
    className,
    children: images.map((imgPromise) => /* @__PURE__ */ jsx3(LazyImage, {
      image: imgPromise,
      className: imageClass,
      spriteUrl,
      fallback
    }, imgPromise.toString()))
  });
}
function TypedAwait({ resolve, children, ...props }) {
  return /* @__PURE__ */ jsx3(Await, {
    resolve,
    ...props,
    children: (data) => children(data)
  });
}
var ImageElement = ({ src, alt, width, height, className, loading = "lazy" }) => {
  return /* @__PURE__ */ jsx3("img", {
    src,
    alt,
    width,
    height,
    className,
    loading,
    decoding: "async"
  });
};
export {
  imageLoader,
  createSpriteIcon,
  SpriteIcon,
  LazyImage,
  LazyGallery
};

//# debugId=D44B83C0F4CD192664756E2164756E21
