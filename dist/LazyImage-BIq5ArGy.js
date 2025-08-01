import { j as a } from "./jsx-runtime--oOP9f8K.js";
import d from "clsx";
import u from "react";
import { Await as x } from "react-router";
import { S as p, s as g } from "./lucide-sprites-CwrWK0ek.js";
function m({ className: e }) {
  return /* @__PURE__ */ a.jsx(p, { id: "Loader", url: g, className: d(e, "animate-spin") });
}
const I = async (e) => Object.keys(e).map((r) => r.replace(/.*\/(.*)/, "$1")), j = (e, r, s, t) => new Promise((n, o) => {
  const i = new Image();
  i.onload = () => {
    n({ src: e, alt: r, width: s || i.naturalWidth, height: t || i.naturalHeight, loading: "lazy" });
  }, i.onerror = () => {
    o(new Error(`Failed to load image: ${e}`));
  }, i.src = e;
});
function h({ image: e, src: r, alt: s, width: t, height: n, className: o, fallback: i = /* @__PURE__ */ a.jsx(m, {}) }) {
  const l = e || (r ? j(r, s || "", t, n) : null);
  return l ? /* @__PURE__ */ a.jsx(u.Suspense, { fallback: i, children: /* @__PURE__ */ a.jsx(f, { resolve: l, errorElement: /* @__PURE__ */ a.jsx(m, { className: "text-slate-500/50" }), children: (c) => /* @__PURE__ */ a.jsx(y, { ...c, className: d(c.className, o) }) }) }) : /* @__PURE__ */ a.jsx("div", { className: "text-slate-500/50", children: "Error: No image source provided" });
}
function L({ images: e, className: r, imageClass: s, fallback: t = /* @__PURE__ */ a.jsx(m, { className: "h-[180px]" }) }) {
  return /* @__PURE__ */ a.jsx("div", { className: r, children: e.map((n) => /* @__PURE__ */ a.jsx(h, { image: n, className: s, fallback: t })) });
}
function f({ resolve: e, children: r, ...s }) {
  return /* @__PURE__ */ a.jsx(x, { resolve: e, ...s, children: (t) => r(t) });
}
const y = ({ src: e, alt: r, width: s, height: t, className: n, loading: o = "lazy" }) => /* @__PURE__ */ a.jsx("img", { src: e, alt: r, width: s, height: t, className: n, loading: o, decoding: "async" });
export {
  L,
  m as S,
  h as a,
  I as i
};
//# sourceMappingURL=LazyImage-BIq5ArGy.js.map
