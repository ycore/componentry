import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
import React from 'react';
import { Await } from 'react-router';
import { Spinner } from './Spinner';
const Image = ({ src, alt, width, height, className, loading = 'lazy' }) => {
    return _jsx("img", { src: src, alt: alt, width: width, height: height, className: className, loading: loading, decoding: "async" });
};
export const imageLoader = async (filenames) => {
    return Object.keys(filenames).map(filePath => filePath.replace(/.*\/(.*)/, '$1'));
};
export function LazyImage({ image, className, fallback = _jsx(Spinner, {}) }) {
    return (_jsx(React.Suspense, { fallback: fallback, children: _jsx(TypedAwait, { resolve: image, errorElement: _jsx(Spinner, { className: "text-red-500" }), children: (imageData) => _jsx(Image, { ...imageData, className: clsx(imageData.className, className) }) }) }));
}
export function LazyGallery({ images, className, imageClass, fallback = _jsx(Spinner, { className: "h-[180px]" }) }) {
    return (_jsx("div", { className: className, children: images.map((imgPromise, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey:
        _jsx(LazyImage, { image: imgPromise, className: imageClass, fallback: fallback }, index))) }));
}
function TypedAwait({ resolve, children, ...props }) {
    return (_jsx(Await, { resolve: resolve, ...props, children: data => children(data) }));
}
