var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};
var __esm = (fn, res) => () => (fn && (res = fn(fn = 0)), res);

// ../../node_modules/react-dom/cjs/react-dom.production.js
var exports_react_dom_production = {};
__export(exports_react_dom_production, {
  version: () => $version,
  useFormStatus: () => $useFormStatus,
  useFormState: () => $useFormState,
  unstable_batchedUpdates: () => $unstable_batchedUpdates,
  requestFormReset: () => $requestFormReset,
  preloadModule: () => $preloadModule,
  preload: () => $preload,
  preinitModule: () => $preinitModule,
  preinit: () => $preinit,
  prefetchDNS: () => $prefetchDNS,
  preconnect: () => $preconnect,
  flushSync: () => $flushSync,
  createPortal: () => $createPortal,
  __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE: () => $__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
});
import * as React3 from "react";
function formatProdErrorMessage(code) {
  var url = "https://react.dev/errors/" + code;
  if (1 < arguments.length) {
    url += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var i = 2;i < arguments.length; i++)
      url += "&args[]=" + encodeURIComponent(arguments[i]);
  }
  return "Minified React error #" + code + "; visit " + url + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
function noop() {}
function createPortal$1(children, containerInfo, implementation) {
  var key = 3 < arguments.length && arguments[3] !== undefined ? arguments[3] : null;
  return {
    $$typeof: REACT_PORTAL_TYPE,
    key: key == null ? null : "" + key,
    children,
    containerInfo,
    implementation
  };
}
function getCrossOriginStringAs(as, input) {
  if (as === "font")
    return "";
  if (typeof input === "string")
    return input === "use-credentials" ? input : "";
}
var Internals, REACT_PORTAL_TYPE, ReactSharedInternals, $__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $createPortal = function(children, container) {
  var key = 2 < arguments.length && arguments[2] !== undefined ? arguments[2] : null;
  if (!container || container.nodeType !== 1 && container.nodeType !== 9 && container.nodeType !== 11)
    throw Error(formatProdErrorMessage(299));
  return createPortal$1(children, container, null, key);
}, $flushSync = function(fn) {
  var previousTransition = ReactSharedInternals.T, previousUpdatePriority = Internals.p;
  try {
    if (ReactSharedInternals.T = null, Internals.p = 2, fn)
      return fn();
  } finally {
    ReactSharedInternals.T = previousTransition, Internals.p = previousUpdatePriority, Internals.d.f();
  }
}, $preconnect = function(href, options) {
  typeof href === "string" && (options ? (options = options.crossOrigin, options = typeof options === "string" ? options === "use-credentials" ? options : "" : undefined) : options = null, Internals.d.C(href, options));
}, $prefetchDNS = function(href) {
  typeof href === "string" && Internals.d.D(href);
}, $preinit = function(href, options) {
  if (typeof href === "string" && options && typeof options.as === "string") {
    var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin), integrity = typeof options.integrity === "string" ? options.integrity : undefined, fetchPriority = typeof options.fetchPriority === "string" ? options.fetchPriority : undefined;
    as === "style" ? Internals.d.S(href, typeof options.precedence === "string" ? options.precedence : undefined, {
      crossOrigin,
      integrity,
      fetchPriority
    }) : as === "script" && Internals.d.X(href, {
      crossOrigin,
      integrity,
      fetchPriority,
      nonce: typeof options.nonce === "string" ? options.nonce : undefined
    });
  }
}, $preinitModule = function(href, options) {
  if (typeof href === "string")
    if (typeof options === "object" && options !== null) {
      if (options.as == null || options.as === "script") {
        var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
        Internals.d.M(href, {
          crossOrigin,
          integrity: typeof options.integrity === "string" ? options.integrity : undefined,
          nonce: typeof options.nonce === "string" ? options.nonce : undefined
        });
      }
    } else
      options == null && Internals.d.M(href);
}, $preload = function(href, options) {
  if (typeof href === "string" && typeof options === "object" && options !== null && typeof options.as === "string") {
    var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin);
    Internals.d.L(href, as, {
      crossOrigin,
      integrity: typeof options.integrity === "string" ? options.integrity : undefined,
      nonce: typeof options.nonce === "string" ? options.nonce : undefined,
      type: typeof options.type === "string" ? options.type : undefined,
      fetchPriority: typeof options.fetchPriority === "string" ? options.fetchPriority : undefined,
      referrerPolicy: typeof options.referrerPolicy === "string" ? options.referrerPolicy : undefined,
      imageSrcSet: typeof options.imageSrcSet === "string" ? options.imageSrcSet : undefined,
      imageSizes: typeof options.imageSizes === "string" ? options.imageSizes : undefined,
      media: typeof options.media === "string" ? options.media : undefined
    });
  }
}, $preloadModule = function(href, options) {
  if (typeof href === "string")
    if (options) {
      var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
      Internals.d.m(href, {
        as: typeof options.as === "string" && options.as !== "script" ? options.as : undefined,
        crossOrigin,
        integrity: typeof options.integrity === "string" ? options.integrity : undefined
      });
    } else
      Internals.d.m(href);
}, $requestFormReset = function(form) {
  Internals.d.r(form);
}, $unstable_batchedUpdates = function(fn, a) {
  return fn(a);
}, $useFormState = function(action, initialState, permalink) {
  return ReactSharedInternals.H.useFormState(action, initialState, permalink);
}, $useFormStatus = function() {
  return ReactSharedInternals.H.useHostTransitionStatus();
}, $version = "19.2.0";
var init_react_dom_production = __esm(() => {
  Internals = {
    d: {
      f: noop,
      r: function() {
        throw Error(formatProdErrorMessage(522));
      },
      D: noop,
      C: noop,
      L: noop,
      m: noop,
      X: noop,
      S: noop,
      M: noop
    },
    p: 0,
    findDOMNode: null
  };
  REACT_PORTAL_TYPE = Symbol.for("react.portal");
  ReactSharedInternals = React3.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  $__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Internals;
});

// ../../node_modules/react-dom/index.js
var require_react_dom = __commonJS((exports, module) => {
  init_react_dom_production();
  function checkDCE() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
      return;
    }
    if (false) {}
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      console.error(err);
    }
  }
  if (true) {
    checkDCE();
    module.exports = exports_react_dom_production;
  } else {}
});

// ../../node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js
import * as React43 from "react";
var require_use_sync_external_store_shim_production = __commonJS((exports) => {
  function is(x, y) {
    return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
  }
  var objectIs = typeof Object.is === "function" ? Object.is : is;
  var useState17 = React43.useState;
  var useEffect20 = React43.useEffect;
  var useLayoutEffect4 = React43.useLayoutEffect;
  var useDebugValue = React43.useDebugValue;
  function useSyncExternalStore$2(subscribe, getSnapshot) {
    var value = getSnapshot(), _useState = useState17({ inst: { value, getSnapshot } }), inst = _useState[0].inst, forceUpdate = _useState[1];
    useLayoutEffect4(function() {
      inst.value = value;
      inst.getSnapshot = getSnapshot;
      checkIfSnapshotChanged(inst) && forceUpdate({ inst });
    }, [subscribe, value, getSnapshot]);
    useEffect20(function() {
      checkIfSnapshotChanged(inst) && forceUpdate({ inst });
      return subscribe(function() {
        checkIfSnapshotChanged(inst) && forceUpdate({ inst });
      });
    }, [subscribe]);
    useDebugValue(value);
    return value;
  }
  function checkIfSnapshotChanged(inst) {
    var latestGetSnapshot = inst.getSnapshot;
    inst = inst.value;
    try {
      var nextValue = latestGetSnapshot();
      return !objectIs(inst, nextValue);
    } catch (error) {
      return true;
    }
  }
  function useSyncExternalStore$1(subscribe, getSnapshot) {
    return getSnapshot();
  }
  var shim = typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined" ? useSyncExternalStore$1 : useSyncExternalStore$2;
  exports.useSyncExternalStore = React43.useSyncExternalStore !== undefined ? React43.useSyncExternalStore : shim;
});

// ../../node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS((exports, module) => {
  if (true) {
    module.exports = require_use_sync_external_store_shim_production();
  } else {}
});

// src/shadcn-ui/components/pagination.tsx
import clsx2 from "clsx";

// src/vibrant/components/svg-icon.tsx
import { createSpriteIcon } from "@ycore/componentry/images";
var SvgIcon = createSpriteIcon("lucide");

// ../../node_modules/@radix-ui/react-slot/dist/index.mjs
import * as React2 from "react";

// ../../node_modules/@radix-ui/react-compose-refs/dist/index.mjs
import * as React from "react";
function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== undefined) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup == "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0;i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup == "function") {
            cleanup();
          } else {
            setRef(refs[i], null);
          }
        }
      };
    }
  };
}
function useComposedRefs(...refs) {
  return React.useCallback(composeRefs(...refs), refs);
}

// ../../node_modules/@radix-ui/react-slot/dist/index.mjs
import { Fragment as Fragment2, jsx } from "react/jsx-runtime";
function createSlot(ownerName) {
  const SlotClone = /* @__PURE__ */ createSlotClone(ownerName);
  const Slot2 = React2.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React2.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React2.Children.count(newElement) > 1)
            return React2.Children.only(null);
          return React2.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return /* @__PURE__ */ jsx(SlotClone, { ...slotProps, ref: forwardedRef, children: React2.isValidElement(newElement) ? React2.cloneElement(newElement, undefined, newChildren) : null });
    }
    return /* @__PURE__ */ jsx(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot2.displayName = `${ownerName}.Slot`;
  return Slot2;
}
var Slot = /* @__PURE__ */ createSlot("Slot");
function createSlotClone(ownerName) {
  const SlotClone = React2.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (React2.isValidElement(children)) {
      const childrenRef = getElementRef(children);
      const props2 = mergeProps(slotProps, children.props);
      if (children.type !== React2.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return React2.cloneElement(children, props2);
    }
    return React2.Children.count(children) > 1 ? React2.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
function createSlottable(ownerName) {
  const Slottable2 = ({ children }) => {
    return /* @__PURE__ */ jsx(Fragment2, { children });
  };
  Slottable2.displayName = `${ownerName}.Slottable`;
  Slottable2.__radixId = SLOTTABLE_IDENTIFIER;
  return Slottable2;
}
function isSlottable(child) {
  return React2.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// src/shadcn-ui/components/button.tsx
import { cva } from "class-variance-authority";
import clsx from "clsx";
import { jsx as jsx2 } from "react/jsx-runtime";
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
      outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-9 px-4 py-2 has-[>svg]:px-3",
      sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
      lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
      icon: "size-9",
      "icon-sm": "size-8",
      "icon-lg": "size-10"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx2(Comp, {
    "data-slot": "button",
    className: clsx(buttonVariants({ variant, size, className })),
    ...props
  });
}

// src/shadcn-ui/components/pagination.tsx
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
function Pagination({ className, ...props }) {
  return /* @__PURE__ */ jsx3("nav", {
    role: "navigation",
    "aria-label": "pagination",
    "data-slot": "pagination",
    className: clsx2("mx-auto flex w-full justify-center", className),
    ...props
  });
}
function PaginationContent({ className, ...props }) {
  return /* @__PURE__ */ jsx3("ul", {
    "data-slot": "pagination-content",
    className: clsx2("flex flex-row items-center gap-1", className),
    ...props
  });
}
function PaginationItem({ ...props }) {
  return /* @__PURE__ */ jsx3("li", {
    "data-slot": "pagination-item",
    ...props
  });
}
function PaginationLink({ className, isActive, size = "icon", ...props }) {
  return /* @__PURE__ */ jsx3("a", {
    "aria-current": isActive ? "page" : undefined,
    "data-slot": "pagination-link",
    "data-active": isActive,
    className: clsx2(buttonVariants({
      variant: isActive ? "outline" : "ghost",
      size
    }), className),
    ...props
  });
}
function PaginationPrevious({ className, ...props }) {
  return /* @__PURE__ */ jsxs(PaginationLink, {
    "aria-label": "Go to previous page",
    size: "default",
    className: clsx2("gap-1 px-2.5 sm:pl-2.5", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx3(SvgIcon, {
        iconId: "ChevronLeft"
      }),
      /* @__PURE__ */ jsx3("span", {
        className: "hidden sm:block",
        children: "Previous"
      })
    ]
  });
}
function PaginationNext({ className, ...props }) {
  return /* @__PURE__ */ jsxs(PaginationLink, {
    "aria-label": "Go to next page",
    size: "default",
    className: clsx2("gap-1 px-2.5 sm:pr-2.5", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx3("span", {
        className: "hidden sm:block",
        children: "Next"
      }),
      /* @__PURE__ */ jsx3(SvgIcon, {
        iconId: "ChevronRight"
      })
    ]
  });
}
function PaginationEllipsis({ className, ...props }) {
  return /* @__PURE__ */ jsxs("span", {
    "aria-hidden": true,
    "data-slot": "pagination-ellipsis",
    className: clsx2("flex size-9 items-center justify-center", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx3(SvgIcon, {
        iconId: "Ellipsis",
        className: "size-4"
      }),
      /* @__PURE__ */ jsx3("span", {
        className: "sr-only",
        children: "More pages"
      })
    ]
  });
}

// ../../node_modules/@radix-ui/react-select/dist/index.mjs
var ReactDOM4 = __toESM(require_react_dom(), 1);
import * as React33 from "react";

// ../../node_modules/@radix-ui/number/dist/index.mjs
function clamp(value, [min, max]) {
  return Math.min(max, Math.max(min, value));
}

// ../../node_modules/@radix-ui/primitive/dist/index.mjs
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler?.(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented) {
      return ourEventHandler?.(event);
    }
  };
}

// ../../node_modules/@radix-ui/react-collection/dist/index.mjs
import React5 from "react";

// ../../node_modules/@radix-ui/react-context/dist/index.mjs
import * as React4 from "react";
import { jsx as jsx4 } from "react/jsx-runtime";
function createContext2(rootComponentName, defaultContext) {
  const Context = React4.createContext(defaultContext);
  const Provider = (props) => {
    const { children, ...context } = props;
    const value = React4.useMemo(() => context, Object.values(context));
    return /* @__PURE__ */ jsx4(Context.Provider, { value, children });
  };
  Provider.displayName = rootComponentName + "Provider";
  function useContext2(consumerName) {
    const context = React4.useContext(Context);
    if (context)
      return context;
    if (defaultContext !== undefined)
      return defaultContext;
    throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
  }
  return [Provider, useContext2];
}
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext3(rootComponentName, defaultContext) {
    const BaseContext = React4.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider = (props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const value = React4.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */ jsx4(Context.Provider, { value, children });
    };
    Provider.displayName = rootComponentName + "Provider";
    function useContext2(consumerName, scope) {
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const context = React4.useContext(Context);
      if (context)
        return context;
      if (defaultContext !== undefined)
        return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider, useContext2];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React4.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return React4.useMemo(() => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }), [scope, contexts]);
    };
  };
  createScope.scopeName = scopeName;
  return [createContext3, composeContextScopes(createScope, ...createContextScopeDeps)];
}
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1)
    return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React4.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// ../../node_modules/@radix-ui/react-collection/dist/index.mjs
import { jsx as jsx5 } from "react/jsx-runtime";
import React22 from "react";
import { jsx as jsx22 } from "react/jsx-runtime";
"use client";
function createCollection(name) {
  const PROVIDER_NAME = name + "CollectionProvider";
  const [createCollectionContext, createCollectionScope] = createContextScope(PROVIDER_NAME);
  const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map });
  const CollectionProvider = (props) => {
    const { scope, children } = props;
    const ref = React5.useRef(null);
    const itemMap = React5.useRef(/* @__PURE__ */ new Map).current;
    return /* @__PURE__ */ jsx5(CollectionProviderImpl, { scope, itemMap, collectionRef: ref, children });
  };
  CollectionProvider.displayName = PROVIDER_NAME;
  const COLLECTION_SLOT_NAME = name + "CollectionSlot";
  const CollectionSlotImpl = createSlot(COLLECTION_SLOT_NAME);
  const CollectionSlot = React5.forwardRef((props, forwardedRef) => {
    const { scope, children } = props;
    const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
    const composedRefs = useComposedRefs(forwardedRef, context.collectionRef);
    return /* @__PURE__ */ jsx5(CollectionSlotImpl, { ref: composedRefs, children });
  });
  CollectionSlot.displayName = COLLECTION_SLOT_NAME;
  const ITEM_SLOT_NAME = name + "CollectionItemSlot";
  const ITEM_DATA_ATTR = "data-radix-collection-item";
  const CollectionItemSlotImpl = createSlot(ITEM_SLOT_NAME);
  const CollectionItemSlot = React5.forwardRef((props, forwardedRef) => {
    const { scope, children, ...itemData } = props;
    const ref = React5.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const context = useCollectionContext(ITEM_SLOT_NAME, scope);
    React5.useEffect(() => {
      context.itemMap.set(ref, { ref, ...itemData });
      return () => void context.itemMap.delete(ref);
    });
    return /* @__PURE__ */ jsx5(CollectionItemSlotImpl, { ...{ [ITEM_DATA_ATTR]: "" }, ref: composedRefs, children });
  });
  CollectionItemSlot.displayName = ITEM_SLOT_NAME;
  function useCollection(scope) {
    const context = useCollectionContext(name + "CollectionConsumer", scope);
    const getItems = React5.useCallback(() => {
      const collectionNode = context.collectionRef.current;
      if (!collectionNode)
        return [];
      const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
      const items = Array.from(context.itemMap.values());
      const orderedItems = items.sort((a, b) => orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current));
      return orderedItems;
    }, [context.collectionRef, context.itemMap]);
    return getItems;
  }
  return [
    { Provider: CollectionProvider, Slot: CollectionSlot, ItemSlot: CollectionItemSlot },
    useCollection,
    createCollectionScope
  ];
}
var __instanciated = /* @__PURE__ */ new WeakMap;
var OrderedDict = class _OrderedDict extends Map {
  #keys;
  constructor(entries) {
    super(entries);
    this.#keys = [...super.keys()];
    __instanciated.set(this, true);
  }
  set(key, value) {
    if (__instanciated.get(this)) {
      if (this.has(key)) {
        this.#keys[this.#keys.indexOf(key)] = key;
      } else {
        this.#keys.push(key);
      }
    }
    super.set(key, value);
    return this;
  }
  insert(index, key, value) {
    const has = this.has(key);
    const length = this.#keys.length;
    const relativeIndex = toSafeInteger(index);
    let actualIndex = relativeIndex >= 0 ? relativeIndex : length + relativeIndex;
    const safeIndex = actualIndex < 0 || actualIndex >= length ? -1 : actualIndex;
    if (safeIndex === this.size || has && safeIndex === this.size - 1 || safeIndex === -1) {
      this.set(key, value);
      return this;
    }
    const size = this.size + (has ? 0 : 1);
    if (relativeIndex < 0) {
      actualIndex++;
    }
    const keys = [...this.#keys];
    let nextValue;
    let shouldSkip = false;
    for (let i = actualIndex;i < size; i++) {
      if (actualIndex === i) {
        let nextKey = keys[i];
        if (keys[i] === key) {
          nextKey = keys[i + 1];
        }
        if (has) {
          this.delete(key);
        }
        nextValue = this.get(nextKey);
        this.set(key, value);
      } else {
        if (!shouldSkip && keys[i - 1] === key) {
          shouldSkip = true;
        }
        const currentKey = keys[shouldSkip ? i : i - 1];
        const currentValue = nextValue;
        nextValue = this.get(currentKey);
        this.delete(currentKey);
        this.set(currentKey, currentValue);
      }
    }
    return this;
  }
  with(index, key, value) {
    const copy = new _OrderedDict(this);
    copy.insert(index, key, value);
    return copy;
  }
  before(key) {
    const index = this.#keys.indexOf(key) - 1;
    if (index < 0) {
      return;
    }
    return this.entryAt(index);
  }
  setBefore(key, newKey, value) {
    const index = this.#keys.indexOf(key);
    if (index === -1) {
      return this;
    }
    return this.insert(index, newKey, value);
  }
  after(key) {
    let index = this.#keys.indexOf(key);
    index = index === -1 || index === this.size - 1 ? -1 : index + 1;
    if (index === -1) {
      return;
    }
    return this.entryAt(index);
  }
  setAfter(key, newKey, value) {
    const index = this.#keys.indexOf(key);
    if (index === -1) {
      return this;
    }
    return this.insert(index + 1, newKey, value);
  }
  first() {
    return this.entryAt(0);
  }
  last() {
    return this.entryAt(-1);
  }
  clear() {
    this.#keys = [];
    return super.clear();
  }
  delete(key) {
    const deleted = super.delete(key);
    if (deleted) {
      this.#keys.splice(this.#keys.indexOf(key), 1);
    }
    return deleted;
  }
  deleteAt(index) {
    const key = this.keyAt(index);
    if (key !== undefined) {
      return this.delete(key);
    }
    return false;
  }
  at(index) {
    const key = at(this.#keys, index);
    if (key !== undefined) {
      return this.get(key);
    }
  }
  entryAt(index) {
    const key = at(this.#keys, index);
    if (key !== undefined) {
      return [key, this.get(key)];
    }
  }
  indexOf(key) {
    return this.#keys.indexOf(key);
  }
  keyAt(index) {
    return at(this.#keys, index);
  }
  from(key, offset) {
    const index = this.indexOf(key);
    if (index === -1) {
      return;
    }
    let dest = index + offset;
    if (dest < 0)
      dest = 0;
    if (dest >= this.size)
      dest = this.size - 1;
    return this.at(dest);
  }
  keyFrom(key, offset) {
    const index = this.indexOf(key);
    if (index === -1) {
      return;
    }
    let dest = index + offset;
    if (dest < 0)
      dest = 0;
    if (dest >= this.size)
      dest = this.size - 1;
    return this.keyAt(dest);
  }
  find(predicate, thisArg) {
    let index = 0;
    for (const entry of this) {
      if (Reflect.apply(predicate, thisArg, [entry, index, this])) {
        return entry;
      }
      index++;
    }
    return;
  }
  findIndex(predicate, thisArg) {
    let index = 0;
    for (const entry of this) {
      if (Reflect.apply(predicate, thisArg, [entry, index, this])) {
        return index;
      }
      index++;
    }
    return -1;
  }
  filter(predicate, thisArg) {
    const entries = [];
    let index = 0;
    for (const entry of this) {
      if (Reflect.apply(predicate, thisArg, [entry, index, this])) {
        entries.push(entry);
      }
      index++;
    }
    return new _OrderedDict(entries);
  }
  map(callbackfn, thisArg) {
    const entries = [];
    let index = 0;
    for (const entry of this) {
      entries.push([entry[0], Reflect.apply(callbackfn, thisArg, [entry, index, this])]);
      index++;
    }
    return new _OrderedDict(entries);
  }
  reduce(...args) {
    const [callbackfn, initialValue] = args;
    let index = 0;
    let accumulator = initialValue ?? this.at(0);
    for (const entry of this) {
      if (index === 0 && args.length === 1) {
        accumulator = entry;
      } else {
        accumulator = Reflect.apply(callbackfn, this, [accumulator, entry, index, this]);
      }
      index++;
    }
    return accumulator;
  }
  reduceRight(...args) {
    const [callbackfn, initialValue] = args;
    let accumulator = initialValue ?? this.at(-1);
    for (let index = this.size - 1;index >= 0; index--) {
      const entry = this.at(index);
      if (index === this.size - 1 && args.length === 1) {
        accumulator = entry;
      } else {
        accumulator = Reflect.apply(callbackfn, this, [accumulator, entry, index, this]);
      }
    }
    return accumulator;
  }
  toSorted(compareFn) {
    const entries = [...this.entries()].sort(compareFn);
    return new _OrderedDict(entries);
  }
  toReversed() {
    const reversed = new _OrderedDict;
    for (let index = this.size - 1;index >= 0; index--) {
      const key = this.keyAt(index);
      const element = this.get(key);
      reversed.set(key, element);
    }
    return reversed;
  }
  toSpliced(...args) {
    const entries = [...this.entries()];
    entries.splice(...args);
    return new _OrderedDict(entries);
  }
  slice(start, end) {
    const result = new _OrderedDict;
    let stop = this.size - 1;
    if (start === undefined) {
      return result;
    }
    if (start < 0) {
      start = start + this.size;
    }
    if (end !== undefined && end > 0) {
      stop = end - 1;
    }
    for (let index = start;index <= stop; index++) {
      const key = this.keyAt(index);
      const element = this.get(key);
      result.set(key, element);
    }
    return result;
  }
  every(predicate, thisArg) {
    let index = 0;
    for (const entry of this) {
      if (!Reflect.apply(predicate, thisArg, [entry, index, this])) {
        return false;
      }
      index++;
    }
    return true;
  }
  some(predicate, thisArg) {
    let index = 0;
    for (const entry of this) {
      if (Reflect.apply(predicate, thisArg, [entry, index, this])) {
        return true;
      }
      index++;
    }
    return false;
  }
};
function at(array, index) {
  if ("at" in Array.prototype) {
    return Array.prototype.at.call(array, index);
  }
  const actualIndex = toSafeIndex(array, index);
  return actualIndex === -1 ? undefined : array[actualIndex];
}
function toSafeIndex(array, index) {
  const length = array.length;
  const relativeIndex = toSafeInteger(index);
  const actualIndex = relativeIndex >= 0 ? relativeIndex : length + relativeIndex;
  return actualIndex < 0 || actualIndex >= length ? -1 : actualIndex;
}
function toSafeInteger(number) {
  return number !== number || number === 0 ? 0 : Math.trunc(number);
}

// ../../node_modules/@radix-ui/react-direction/dist/index.mjs
import * as React6 from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
var DirectionContext = React6.createContext(undefined);
function useDirection(localDir) {
  const globalDir = React6.useContext(DirectionContext);
  return localDir || globalDir || "ltr";
}

// ../../node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
import * as React10 from "react";

// ../../node_modules/@radix-ui/react-primitive/dist/index.mjs
var ReactDOM = __toESM(require_react_dom(), 1);
import * as React7 from "react";
import { jsx as jsx7 } from "react/jsx-runtime";
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot2 = createSlot(`Primitive.${node}`);
  const Node2 = React7.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot2 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsx7(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node2.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node2 };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
  if (target)
    ReactDOM.flushSync(() => target.dispatchEvent(event));
}

// ../../node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
import * as React8 from "react";
function useCallbackRef(callback) {
  const callbackRef = React8.useRef(callback);
  React8.useEffect(() => {
    callbackRef.current = callback;
  });
  return React8.useMemo(() => (...args) => callbackRef.current?.(...args), []);
}

// ../../node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
import * as React9 from "react";
function useEscapeKeydown(onEscapeKeyDownProp, ownerDocument = globalThis?.document) {
  const onEscapeKeyDown = useCallbackRef(onEscapeKeyDownProp);
  React9.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onEscapeKeyDown(event);
      }
    };
    ownerDocument.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => ownerDocument.removeEventListener("keydown", handleKeyDown, { capture: true });
  }, [onEscapeKeyDown, ownerDocument]);
}

// ../../node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
import { jsx as jsx8 } from "react/jsx-runtime";
"use client";
var DISMISSABLE_LAYER_NAME = "DismissableLayer";
var CONTEXT_UPDATE = "dismissableLayer.update";
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var originalBodyPointerEvents;
var DismissableLayerContext = React10.createContext({
  layers: /* @__PURE__ */ new Set,
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set,
  branches: /* @__PURE__ */ new Set
});
var DismissableLayer = React10.forwardRef((props, forwardedRef) => {
  const {
    disableOutsidePointerEvents = false,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside,
    onInteractOutside,
    onDismiss,
    ...layerProps
  } = props;
  const context = React10.useContext(DismissableLayerContext);
  const [node, setNode] = React10.useState(null);
  const ownerDocument = node?.ownerDocument ?? globalThis?.document;
  const [, force] = React10.useState({});
  const composedRefs = useComposedRefs(forwardedRef, (node2) => setNode(node2));
  const layers = Array.from(context.layers);
  const [highestLayerWithOutsidePointerEventsDisabled] = [...context.layersWithOutsidePointerEventsDisabled].slice(-1);
  const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
  const index = node ? layers.indexOf(node) : -1;
  const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
  const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
  const pointerDownOutside = usePointerDownOutside((event) => {
    const target = event.target;
    const isPointerDownOnBranch = [...context.branches].some((branch) => branch.contains(target));
    if (!isPointerEventsEnabled || isPointerDownOnBranch)
      return;
    onPointerDownOutside?.(event);
    onInteractOutside?.(event);
    if (!event.defaultPrevented)
      onDismiss?.();
  }, ownerDocument);
  const focusOutside = useFocusOutside((event) => {
    const target = event.target;
    const isFocusInBranch = [...context.branches].some((branch) => branch.contains(target));
    if (isFocusInBranch)
      return;
    onFocusOutside?.(event);
    onInteractOutside?.(event);
    if (!event.defaultPrevented)
      onDismiss?.();
  }, ownerDocument);
  useEscapeKeydown((event) => {
    const isHighestLayer = index === context.layers.size - 1;
    if (!isHighestLayer)
      return;
    onEscapeKeyDown?.(event);
    if (!event.defaultPrevented && onDismiss) {
      event.preventDefault();
      onDismiss();
    }
  }, ownerDocument);
  React10.useEffect(() => {
    if (!node)
      return;
    if (disableOutsidePointerEvents) {
      if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
        originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
        ownerDocument.body.style.pointerEvents = "none";
      }
      context.layersWithOutsidePointerEventsDisabled.add(node);
    }
    context.layers.add(node);
    dispatchUpdate();
    return () => {
      if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) {
        ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
      }
    };
  }, [node, ownerDocument, disableOutsidePointerEvents, context]);
  React10.useEffect(() => {
    return () => {
      if (!node)
        return;
      context.layers.delete(node);
      context.layersWithOutsidePointerEventsDisabled.delete(node);
      dispatchUpdate();
    };
  }, [node, context]);
  React10.useEffect(() => {
    const handleUpdate = () => force({});
    document.addEventListener(CONTEXT_UPDATE, handleUpdate);
    return () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
  }, []);
  return /* @__PURE__ */ jsx8(Primitive.div, {
    ...layerProps,
    ref: composedRefs,
    style: {
      pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : undefined,
      ...props.style
    },
    onFocusCapture: composeEventHandlers(props.onFocusCapture, focusOutside.onFocusCapture),
    onBlurCapture: composeEventHandlers(props.onBlurCapture, focusOutside.onBlurCapture),
    onPointerDownCapture: composeEventHandlers(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
  });
});
DismissableLayer.displayName = DISMISSABLE_LAYER_NAME;
var BRANCH_NAME = "DismissableLayerBranch";
var DismissableLayerBranch = React10.forwardRef((props, forwardedRef) => {
  const context = React10.useContext(DismissableLayerContext);
  const ref = React10.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  React10.useEffect(() => {
    const node = ref.current;
    if (node) {
      context.branches.add(node);
      return () => {
        context.branches.delete(node);
      };
    }
  }, [context.branches]);
  return /* @__PURE__ */ jsx8(Primitive.div, { ...props, ref: composedRefs });
});
DismissableLayerBranch.displayName = BRANCH_NAME;
function usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis?.document) {
  const handlePointerDownOutside = useCallbackRef(onPointerDownOutside);
  const isPointerInsideReactTreeRef = React10.useRef(false);
  const handleClickRef = React10.useRef(() => {});
  React10.useEffect(() => {
    const handlePointerDown = (event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent2 = function() {
          handleAndDispatchCustomEvent(POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, { discrete: true });
        };
        var handleAndDispatchPointerDownOutsideEvent = handleAndDispatchPointerDownOutsideEvent2;
        const eventDetail = { originalEvent: event };
        if (event.pointerType === "touch") {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
          ownerDocument.addEventListener("click", handleClickRef.current, { once: true });
        } else {
          handleAndDispatchPointerDownOutsideEvent2();
        }
      } else {
        ownerDocument.removeEventListener("click", handleClickRef.current);
      }
      isPointerInsideReactTreeRef.current = false;
    };
    const timerId = window.setTimeout(() => {
      ownerDocument.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId);
      ownerDocument.removeEventListener("pointerdown", handlePointerDown);
      ownerDocument.removeEventListener("click", handleClickRef.current);
    };
  }, [ownerDocument, handlePointerDownOutside]);
  return {
    onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
  };
}
function useFocusOutside(onFocusOutside, ownerDocument = globalThis?.document) {
  const handleFocusOutside = useCallbackRef(onFocusOutside);
  const isFocusInsideReactTreeRef = React10.useRef(false);
  React10.useEffect(() => {
    const handleFocus = (event) => {
      if (event.target && !isFocusInsideReactTreeRef.current) {
        const eventDetail = { originalEvent: event };
        handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
          discrete: false
        });
      }
    };
    ownerDocument.addEventListener("focusin", handleFocus);
    return () => ownerDocument.removeEventListener("focusin", handleFocus);
  }, [ownerDocument, handleFocusOutside]);
  return {
    onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
    onBlurCapture: () => isFocusInsideReactTreeRef.current = false
  };
}
function dispatchUpdate() {
  const event = new CustomEvent(CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, { bubbles: false, cancelable: true, detail });
  if (handler)
    target.addEventListener(name, handler, { once: true });
  if (discrete) {
    dispatchDiscreteCustomEvent(target, event);
  } else {
    target.dispatchEvent(event);
  }
}

// ../../node_modules/@radix-ui/react-focus-guards/dist/index.mjs
import * as React11 from "react";
"use client";
var count = 0;
function useFocusGuards() {
  React11.useEffect(() => {
    const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", edgeGuards[0] ?? createFocusGuard());
    document.body.insertAdjacentElement("beforeend", edgeGuards[1] ?? createFocusGuard());
    count++;
    return () => {
      if (count === 1) {
        document.querySelectorAll("[data-radix-focus-guard]").forEach((node) => node.remove());
      }
      count--;
    };
  }, []);
}
function createFocusGuard() {
  const element = document.createElement("span");
  element.setAttribute("data-radix-focus-guard", "");
  element.tabIndex = 0;
  element.style.outline = "none";
  element.style.opacity = "0";
  element.style.position = "fixed";
  element.style.pointerEvents = "none";
  return element;
}

// ../../node_modules/@radix-ui/react-focus-scope/dist/index.mjs
import * as React12 from "react";
import { jsx as jsx9 } from "react/jsx-runtime";
"use client";
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS = { bubbles: false, cancelable: true };
var FOCUS_SCOPE_NAME = "FocusScope";
var FocusScope = React12.forwardRef((props, forwardedRef) => {
  const {
    loop = false,
    trapped = false,
    onMountAutoFocus: onMountAutoFocusProp,
    onUnmountAutoFocus: onUnmountAutoFocusProp,
    ...scopeProps
  } = props;
  const [container, setContainer] = React12.useState(null);
  const onMountAutoFocus = useCallbackRef(onMountAutoFocusProp);
  const onUnmountAutoFocus = useCallbackRef(onUnmountAutoFocusProp);
  const lastFocusedElementRef = React12.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, (node) => setContainer(node));
  const focusScope = React12.useRef({
    paused: false,
    pause() {
      this.paused = true;
    },
    resume() {
      this.paused = false;
    }
  }).current;
  React12.useEffect(() => {
    if (trapped) {
      let handleFocusIn2 = function(event) {
        if (focusScope.paused || !container)
          return;
        const target = event.target;
        if (container.contains(target)) {
          lastFocusedElementRef.current = target;
        } else {
          focus(lastFocusedElementRef.current, { select: true });
        }
      }, handleFocusOut2 = function(event) {
        if (focusScope.paused || !container)
          return;
        const relatedTarget = event.relatedTarget;
        if (relatedTarget === null)
          return;
        if (!container.contains(relatedTarget)) {
          focus(lastFocusedElementRef.current, { select: true });
        }
      }, handleMutations2 = function(mutations) {
        const focusedElement = document.activeElement;
        if (focusedElement !== document.body)
          return;
        for (const mutation of mutations) {
          if (mutation.removedNodes.length > 0)
            focus(container);
        }
      };
      var handleFocusIn = handleFocusIn2, handleFocusOut = handleFocusOut2, handleMutations = handleMutations2;
      document.addEventListener("focusin", handleFocusIn2);
      document.addEventListener("focusout", handleFocusOut2);
      const mutationObserver = new MutationObserver(handleMutations2);
      if (container)
        mutationObserver.observe(container, { childList: true, subtree: true });
      return () => {
        document.removeEventListener("focusin", handleFocusIn2);
        document.removeEventListener("focusout", handleFocusOut2);
        mutationObserver.disconnect();
      };
    }
  }, [trapped, container, focusScope.paused]);
  React12.useEffect(() => {
    if (container) {
      focusScopesStack.add(focusScope);
      const previouslyFocusedElement = document.activeElement;
      const hasFocusedCandidate = container.contains(previouslyFocusedElement);
      if (!hasFocusedCandidate) {
        const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
        container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        container.dispatchEvent(mountEvent);
        if (!mountEvent.defaultPrevented) {
          focusFirst(removeLinks(getTabbableCandidates(container)), { select: true });
          if (document.activeElement === previouslyFocusedElement) {
            focus(container);
          }
        }
      }
      return () => {
        container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        setTimeout(() => {
          const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
          container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          container.dispatchEvent(unmountEvent);
          if (!unmountEvent.defaultPrevented) {
            focus(previouslyFocusedElement ?? document.body, { select: true });
          }
          container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          focusScopesStack.remove(focusScope);
        }, 0);
      };
    }
  }, [container, onMountAutoFocus, onUnmountAutoFocus, focusScope]);
  const handleKeyDown = React12.useCallback((event) => {
    if (!loop && !trapped)
      return;
    if (focusScope.paused)
      return;
    const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
    const focusedElement = document.activeElement;
    if (isTabKey && focusedElement) {
      const container2 = event.currentTarget;
      const [first, last] = getTabbableEdges(container2);
      const hasTabbableElementsInside = first && last;
      if (!hasTabbableElementsInside) {
        if (focusedElement === container2)
          event.preventDefault();
      } else {
        if (!event.shiftKey && focusedElement === last) {
          event.preventDefault();
          if (loop)
            focus(first, { select: true });
        } else if (event.shiftKey && focusedElement === first) {
          event.preventDefault();
          if (loop)
            focus(last, { select: true });
        }
      }
    }
  }, [loop, trapped, focusScope.paused]);
  return /* @__PURE__ */ jsx9(Primitive.div, { tabIndex: -1, ...scopeProps, ref: composedRefs, onKeyDown: handleKeyDown });
});
FocusScope.displayName = FOCUS_SCOPE_NAME;
function focusFirst(candidates, { select = false } = {}) {
  const previouslyFocusedElement = document.activeElement;
  for (const candidate of candidates) {
    focus(candidate, { select });
    if (document.activeElement !== previouslyFocusedElement)
      return;
  }
}
function getTabbableEdges(container) {
  const candidates = getTabbableCandidates(container);
  const first = findVisible(candidates, container);
  const last = findVisible(candidates.reverse(), container);
  return [first, last];
}
function getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
}
function findVisible(elements, container) {
  for (const element of elements) {
    if (!isHidden(element, { upTo: container }))
      return element;
  }
}
function isHidden(node, { upTo }) {
  if (getComputedStyle(node).visibility === "hidden")
    return true;
  while (node) {
    if (upTo !== undefined && node === upTo)
      return false;
    if (getComputedStyle(node).display === "none")
      return true;
    node = node.parentElement;
  }
  return false;
}
function isSelectableInput(element) {
  return element instanceof HTMLInputElement && "select" in element;
}
function focus(element, { select = false } = {}) {
  if (element && element.focus) {
    const previouslyFocusedElement = document.activeElement;
    element.focus({ preventScroll: true });
    if (element !== previouslyFocusedElement && isSelectableInput(element) && select)
      element.select();
  }
}
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
  let stack = [];
  return {
    add(focusScope) {
      const activeFocusScope = stack[0];
      if (focusScope !== activeFocusScope) {
        activeFocusScope?.pause();
      }
      stack = arrayRemove(stack, focusScope);
      stack.unshift(focusScope);
    },
    remove(focusScope) {
      stack = arrayRemove(stack, focusScope);
      stack[0]?.resume();
    }
  };
}
function arrayRemove(array, item) {
  const updatedArray = [...array];
  const index = updatedArray.indexOf(item);
  if (index !== -1) {
    updatedArray.splice(index, 1);
  }
  return updatedArray;
}
function removeLinks(items) {
  return items.filter((item) => item.tagName !== "A");
}

// ../../node_modules/@radix-ui/react-id/dist/index.mjs
import * as React14 from "react";

// ../../node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
import * as React13 from "react";
var useLayoutEffect2 = globalThis?.document ? React13.useLayoutEffect : () => {};

// ../../node_modules/@radix-ui/react-id/dist/index.mjs
var useReactId = React14[" useId ".trim().toString()] || (() => {
  return;
});
var count2 = 0;
function useId(deterministicId) {
  const [id, setId] = React14.useState(useReactId());
  useLayoutEffect2(() => {
    if (!deterministicId)
      setId((reactId) => reactId ?? String(count2++));
  }, [deterministicId]);
  return deterministicId || (id ? `radix-${id}` : "");
}

// ../../node_modules/@radix-ui/react-popper/dist/index.mjs
import * as React18 from "react";

// ../../node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var sides = ["top", "right", "bottom", "left"];
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
  x: v,
  y: v
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp2(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
var yAxisSides = /* @__PURE__ */ new Set(["top", "bottom"]);
function getSideAxis(placement) {
  return yAxisSides.has(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === undefined) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
var lrPlacement = ["left", "right"];
var rlPlacement = ["right", "left"];
var tbPlacement = ["top", "bottom"];
var btPlacement = ["bottom", "top"];
function getSideList(side, isStart, rtl) {
  switch (side) {
    case "top":
    case "bottom":
      if (rtl)
        return isStart ? rlPlacement : lrPlacement;
      return isStart ? lrPlacement : rlPlacement;
    case "left":
    case "right":
      return isStart ? tbPlacement : btPlacement;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}

// ../../node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform.isRTL == null ? undefined : platform.isRTL(floating));
  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0;i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === undefined) {
    options = {};
  }
  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? undefined : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform.getDocumentElement == null ? undefined : platform.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform.getOffsetParent == null ? undefined : platform.getOffsetParent(elements.floating));
  const offsetScale = await (platform.isElement == null ? undefined : platform.isElement(offsetParent)) ? await (platform.getScale == null ? undefined : platform.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var arrow = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform.getOffsetParent == null ? undefined : platform.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform.isElement == null ? undefined : platform.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset = clamp2(min$1, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset,
        centerOffset: center - offset - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
var flip = function(options) {
  if (options === undefined) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform.isRTL == null ? undefined : platform.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? undefined : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? undefined : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          const ignoreCrossAxisOverflow = checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false;
          if (!ignoreCrossAxisOverflow || overflowsData.every((d) => getSideAxis(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) {
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? undefined : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d.placement);
                  return currentSideAxis === initialSideAxis || currentSideAxis === "y";
                }
                return true;
              }).map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? undefined : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some((side) => overflow[side] >= 0);
}
var hide = function(options) {
  if (options === undefined) {
    options = {};
  }
  return {
    name: "hide",
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = "referenceHidden",
        ...detectOverflowOptions
      } = evaluate(options, state);
      switch (strategy) {
        case "referenceHidden": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            elementContext: "reference"
          });
          const offsets = getSideOffsets(overflow, rects.reference);
          return {
            data: {
              referenceHiddenOffsets: offsets,
              referenceHidden: isAnySideFullyClipped(offsets)
            }
          };
        }
        case "escaped": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            altBoundary: true
          });
          const offsets = getSideOffsets(overflow, rects.floating);
          return {
            data: {
              escapedOffsets: offsets,
              escaped: isAnySideFullyClipped(offsets)
            }
          };
        }
        default: {
          return {};
        }
      }
    }
  };
};
var originSides = /* @__PURE__ */ new Set(["left", "top"]);
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform,
    elements
  } = state;
  const rtl = await (platform.isRTL == null ? undefined : platform.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = originSides.has(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(options) {
  if (options === undefined) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? undefined : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
var shift = function(options) {
  if (options === undefined) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp2(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp2(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
var limitShift = function(options) {
  if (options === undefined) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset: offset2 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset2, state);
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = originSides.has(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? undefined : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? undefined : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};
var size = function(options) {
  if (options === undefined) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform,
        elements
      } = state;
      const {
        apply = () => {},
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform.isRTL == null ? undefined : platform.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

// ../../node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? undefined : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? undefined : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
var invalidOverflowDisplayValues = /* @__PURE__ */ new Set(["inline", "contents"]);
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !invalidOverflowDisplayValues.has(display);
}
var tableElements = /* @__PURE__ */ new Set(["table", "td", "th"]);
function isTableElement(element) {
  return tableElements.has(getNodeName(element));
}
var topLayerSelectors = [":popover-open", ":modal"];
function isTopLayer(element) {
  return topLayerSelectors.some((selector) => {
    try {
      return element.matches(selector);
    } catch (_e) {
      return false;
    }
  });
}
var transformProperties = ["transform", "translate", "scale", "rotate", "perspective"];
var willChangeValues = ["transform", "translate", "scale", "rotate", "perspective", "filter"];
var containValues = ["paint", "layout", "strict", "content"];
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement(elementOrCss) ? getComputedStyle2(elementOrCss) : elementOrCss;
  return transformProperties.some((value) => css[value] ? css[value] !== "none" : false) || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || willChangeValues.some((value) => (css.willChange || "").includes(value)) || containValues.some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports)
    return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
var lastTraversableNodeNames = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function isLastTraversableNode(node) {
  return lastTraversableNodeNames.has(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = node.assignedSlot || node.parentNode || isShadowRoot(node) && node.host || getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === undefined) {
    list = [];
  }
  if (traverseIframes === undefined) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? undefined : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}

// ../../node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === undefined) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === undefined) {
    includeScale = false;
  }
  if (isFixedStrategy === undefined) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll) {
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
var SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  const windowScrollbarX = getWindowScrollBarX(html);
  if (windowScrollbarX <= 0) {
    const doc = html.ownerDocument;
    const body = doc.body;
    const bodyStyles = getComputedStyle(body);
    const bodyMarginInline = doc.compatMode === "CSS1Compat" ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
    const clippingStableScrollbarWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
    if (clippingStableScrollbarWidth <= SCROLLBAR_MAX) {
      width -= clippingStableScrollbarWidth;
    }
  } else if (windowScrollbarX <= SCROLLBAR_MAX) {
    width += windowScrollbarX;
  }
  return {
    width,
    height,
    x,
    y
  };
}
var absoluteOrFixed = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && absoluteOrFixed.has(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  function setLeftRTLScrollbarOffset() {
    offsets.x = getWindowScrollBarX(documentElement);
  }
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      setLeftRTLScrollbarOffset();
    }
  }
  if (isFixed && !isOffsetParentAnElement && documentElement) {
    setLeftRTLScrollbarOffset();
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle2(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function rectsAreEqual(a, b) {
  return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === undefined) {
      skip = false;
    }
    if (threshold === undefined) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element.getBoundingClientRect();
    const {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 0.0000001);
          }, 1000);
        } else {
          refresh(false, ratio);
        }
      }
      if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
        refresh();
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        root: root.ownerDocument
      });
    } catch (_e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === undefined) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var offset2 = offset;
var shift2 = shift;
var flip2 = flip;
var size2 = size;
var hide2 = hide;
var arrow2 = arrow;
var limitShift2 = limitShift;
var computePosition2 = (reference, floating, options) => {
  const cache = new Map;
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

// ../../node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
var ReactDOM2 = __toESM(require_react_dom(), 1);
import * as React15 from "react";
import { useLayoutEffect as useLayoutEffect3 } from "react";
var isClient = typeof document !== "undefined";
var noop2 = function noop3() {};
var index = isClient ? useLayoutEffect3 : noop2;
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === "function" && a.toString() === b.toString()) {
    return true;
  }
  let length;
  let i;
  let keys;
  if (a && b && typeof a === "object") {
    if (Array.isArray(a)) {
      length = a.length;
      if (length !== b.length)
        return false;
      for (i = length;i-- !== 0; ) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length;i-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length;i-- !== 0; ) {
      const key = keys[i];
      if (key === "_owner" && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = React15.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === undefined) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React15.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React15.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React15.useState(null);
  const [_floating, _setFloating] = React15.useState(null);
  const setReference = React15.useCallback((node) => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React15.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React15.useRef(null);
  const floatingRef = React15.useRef(null);
  const dataRef = React15.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const openRef = useLatestRef(open);
  const update = React15.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition2(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        isPositioned: openRef.current !== false
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM2.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef, openRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React15.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl)
      referenceRef.current = referenceEl;
    if (floatingEl)
      floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React15.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React15.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React15.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React15.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}
var arrow$1 = (options) => {
  function isRef(value) {
    return {}.hasOwnProperty.call(value, "current");
  }
  return {
    name: "arrow",
    options,
    fn(state) {
      const {
        element,
        padding
      } = typeof options === "function" ? options(state) : options;
      if (element && isRef(element)) {
        if (element.current != null) {
          return arrow2({
            element: element.current,
            padding
          }).fn(state);
        }
        return {};
      }
      if (element) {
        return arrow2({
          element,
          padding
        }).fn(state);
      }
      return {};
    }
  };
};
var offset3 = (options, deps) => ({
  ...offset2(options),
  options: [options, deps]
});
var shift3 = (options, deps) => ({
  ...shift2(options),
  options: [options, deps]
});
var limitShift3 = (options, deps) => ({
  ...limitShift2(options),
  options: [options, deps]
});
var flip3 = (options, deps) => ({
  ...flip2(options),
  options: [options, deps]
});
var size3 = (options, deps) => ({
  ...size2(options),
  options: [options, deps]
});
var hide3 = (options, deps) => ({
  ...hide2(options),
  options: [options, deps]
});
var arrow3 = (options, deps) => ({
  ...arrow$1(options),
  options: [options, deps]
});

// ../../node_modules/@radix-ui/react-arrow/dist/index.mjs
import * as React16 from "react";
import { jsx as jsx10 } from "react/jsx-runtime";
var NAME = "Arrow";
var Arrow = React16.forwardRef((props, forwardedRef) => {
  const { children, width = 10, height = 5, ...arrowProps } = props;
  return /* @__PURE__ */ jsx10(Primitive.svg, {
    ...arrowProps,
    ref: forwardedRef,
    width,
    height,
    viewBox: "0 0 30 10",
    preserveAspectRatio: "none",
    children: props.asChild ? children : /* @__PURE__ */ jsx10("polygon", { points: "0,0 30,0 15,10" })
  });
});
Arrow.displayName = NAME;
var Root = Arrow;

// ../../node_modules/@radix-ui/react-use-size/dist/index.mjs
import * as React17 from "react";
function useSize(element) {
  const [size4, setSize] = React17.useState(undefined);
  useLayoutEffect2(() => {
    if (element) {
      setSize({ width: element.offsetWidth, height: element.offsetHeight });
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries)) {
          return;
        }
        if (!entries.length) {
          return;
        }
        const entry = entries[0];
        let width;
        let height;
        if ("borderBoxSize" in entry) {
          const borderSizeEntry = entry["borderBoxSize"];
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
          width = borderSize["inlineSize"];
          height = borderSize["blockSize"];
        } else {
          width = element.offsetWidth;
          height = element.offsetHeight;
        }
        setSize({ width, height });
      });
      resizeObserver.observe(element, { box: "border-box" });
      return () => resizeObserver.unobserve(element);
    } else {
      setSize(undefined);
    }
  }, [element]);
  return size4;
}

// ../../node_modules/@radix-ui/react-popper/dist/index.mjs
import { jsx as jsx11 } from "react/jsx-runtime";
"use client";
var POPPER_NAME = "Popper";
var [createPopperContext, createPopperScope] = createContextScope(POPPER_NAME);
var [PopperProvider, usePopperContext] = createPopperContext(POPPER_NAME);
var Popper = (props) => {
  const { __scopePopper, children } = props;
  const [anchor, setAnchor] = React18.useState(null);
  return /* @__PURE__ */ jsx11(PopperProvider, { scope: __scopePopper, anchor, onAnchorChange: setAnchor, children });
};
Popper.displayName = POPPER_NAME;
var ANCHOR_NAME = "PopperAnchor";
var PopperAnchor = React18.forwardRef((props, forwardedRef) => {
  const { __scopePopper, virtualRef, ...anchorProps } = props;
  const context = usePopperContext(ANCHOR_NAME, __scopePopper);
  const ref = React18.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const anchorRef = React18.useRef(null);
  React18.useEffect(() => {
    const previousAnchor = anchorRef.current;
    anchorRef.current = virtualRef?.current || ref.current;
    if (previousAnchor !== anchorRef.current) {
      context.onAnchorChange(anchorRef.current);
    }
  });
  return virtualRef ? null : /* @__PURE__ */ jsx11(Primitive.div, { ...anchorProps, ref: composedRefs });
});
PopperAnchor.displayName = ANCHOR_NAME;
var CONTENT_NAME = "PopperContent";
var [PopperContentProvider, useContentContext] = createPopperContext(CONTENT_NAME);
var PopperContent = React18.forwardRef((props, forwardedRef) => {
  const {
    __scopePopper,
    side = "bottom",
    sideOffset = 0,
    align = "center",
    alignOffset = 0,
    arrowPadding = 0,
    avoidCollisions = true,
    collisionBoundary = [],
    collisionPadding: collisionPaddingProp = 0,
    sticky = "partial",
    hideWhenDetached = false,
    updatePositionStrategy = "optimized",
    onPlaced,
    ...contentProps
  } = props;
  const context = usePopperContext(CONTENT_NAME, __scopePopper);
  const [content, setContent] = React18.useState(null);
  const composedRefs = useComposedRefs(forwardedRef, (node) => setContent(node));
  const [arrow4, setArrow] = React18.useState(null);
  const arrowSize = useSize(arrow4);
  const arrowWidth = arrowSize?.width ?? 0;
  const arrowHeight = arrowSize?.height ?? 0;
  const desiredPlacement = side + (align !== "center" ? "-" + align : "");
  const collisionPadding = typeof collisionPaddingProp === "number" ? collisionPaddingProp : { top: 0, right: 0, bottom: 0, left: 0, ...collisionPaddingProp };
  const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [collisionBoundary];
  const hasExplicitBoundaries = boundary.length > 0;
  const detectOverflowOptions = {
    padding: collisionPadding,
    boundary: boundary.filter(isNotNull),
    altBoundary: hasExplicitBoundaries
  };
  const { refs, floatingStyles, placement, isPositioned, middlewareData } = useFloating({
    strategy: "fixed",
    placement: desiredPlacement,
    whileElementsMounted: (...args) => {
      const cleanup = autoUpdate(...args, {
        animationFrame: updatePositionStrategy === "always"
      });
      return cleanup;
    },
    elements: {
      reference: context.anchor
    },
    middleware: [
      offset3({ mainAxis: sideOffset + arrowHeight, alignmentAxis: alignOffset }),
      avoidCollisions && shift3({
        mainAxis: true,
        crossAxis: false,
        limiter: sticky === "partial" ? limitShift3() : undefined,
        ...detectOverflowOptions
      }),
      avoidCollisions && flip3({ ...detectOverflowOptions }),
      size3({
        ...detectOverflowOptions,
        apply: ({ elements, rects, availableWidth, availableHeight }) => {
          const { width: anchorWidth, height: anchorHeight } = rects.reference;
          const contentStyle = elements.floating.style;
          contentStyle.setProperty("--radix-popper-available-width", `${availableWidth}px`);
          contentStyle.setProperty("--radix-popper-available-height", `${availableHeight}px`);
          contentStyle.setProperty("--radix-popper-anchor-width", `${anchorWidth}px`);
          contentStyle.setProperty("--radix-popper-anchor-height", `${anchorHeight}px`);
        }
      }),
      arrow4 && arrow3({ element: arrow4, padding: arrowPadding }),
      transformOrigin({ arrowWidth, arrowHeight }),
      hideWhenDetached && hide3({ strategy: "referenceHidden", ...detectOverflowOptions })
    ]
  });
  const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
  const handlePlaced = useCallbackRef(onPlaced);
  useLayoutEffect2(() => {
    if (isPositioned) {
      handlePlaced?.();
    }
  }, [isPositioned, handlePlaced]);
  const arrowX = middlewareData.arrow?.x;
  const arrowY = middlewareData.arrow?.y;
  const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
  const [contentZIndex, setContentZIndex] = React18.useState();
  useLayoutEffect2(() => {
    if (content)
      setContentZIndex(window.getComputedStyle(content).zIndex);
  }, [content]);
  return /* @__PURE__ */ jsx11("div", {
    ref: refs.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...floatingStyles,
      transform: isPositioned ? floatingStyles.transform : "translate(0, -200%)",
      minWidth: "max-content",
      zIndex: contentZIndex,
      ["--radix-popper-transform-origin"]: [
        middlewareData.transformOrigin?.x,
        middlewareData.transformOrigin?.y
      ].join(" "),
      ...middlewareData.hide?.referenceHidden && {
        visibility: "hidden",
        pointerEvents: "none"
      }
    },
    dir: props.dir,
    children: /* @__PURE__ */ jsx11(PopperContentProvider, {
      scope: __scopePopper,
      placedSide,
      onArrowChange: setArrow,
      arrowX,
      arrowY,
      shouldHideArrow: cannotCenterArrow,
      children: /* @__PURE__ */ jsx11(Primitive.div, {
        "data-side": placedSide,
        "data-align": placedAlign,
        ...contentProps,
        ref: composedRefs,
        style: {
          ...contentProps.style,
          animation: !isPositioned ? "none" : undefined
        }
      })
    })
  });
});
PopperContent.displayName = CONTENT_NAME;
var ARROW_NAME = "PopperArrow";
var OPPOSITE_SIDE = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var PopperArrow = React18.forwardRef(function PopperArrow2(props, forwardedRef) {
  const { __scopePopper, ...arrowProps } = props;
  const contentContext = useContentContext(ARROW_NAME, __scopePopper);
  const baseSide = OPPOSITE_SIDE[contentContext.placedSide];
  return /* @__PURE__ */ jsx11("span", {
    ref: contentContext.onArrowChange,
    style: {
      position: "absolute",
      left: contentContext.arrowX,
      top: contentContext.arrowY,
      [baseSide]: 0,
      transformOrigin: {
        top: "",
        right: "0 0",
        bottom: "center 0",
        left: "100% 0"
      }[contentContext.placedSide],
      transform: {
        top: "translateY(100%)",
        right: "translateY(50%) rotate(90deg) translateX(-50%)",
        bottom: `rotate(180deg)`,
        left: "translateY(50%) rotate(-90deg) translateX(50%)"
      }[contentContext.placedSide],
      visibility: contentContext.shouldHideArrow ? "hidden" : undefined
    },
    children: /* @__PURE__ */ jsx11(Root, {
      ...arrowProps,
      ref: forwardedRef,
      style: {
        ...arrowProps.style,
        display: "block"
      }
    })
  });
});
PopperArrow.displayName = ARROW_NAME;
function isNotNull(value) {
  return value !== null;
}
var transformOrigin = (options) => ({
  name: "transformOrigin",
  options,
  fn(data) {
    const { placement, rects, middlewareData } = data;
    const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
    const isArrowHidden = cannotCenterArrow;
    const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
    const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
    const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
    const noArrowAlign = { start: "0%", center: "50%", end: "100%" }[placedAlign];
    const arrowXCenter = (middlewareData.arrow?.x ?? 0) + arrowWidth / 2;
    const arrowYCenter = (middlewareData.arrow?.y ?? 0) + arrowHeight / 2;
    let x = "";
    let y = "";
    if (placedSide === "bottom") {
      x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y = `${-arrowHeight}px`;
    } else if (placedSide === "top") {
      x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y = `${rects.floating.height + arrowHeight}px`;
    } else if (placedSide === "right") {
      x = `${-arrowHeight}px`;
      y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    } else if (placedSide === "left") {
      x = `${rects.floating.width + arrowHeight}px`;
      y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    }
    return { data: { x, y } };
  }
});
function getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [side, align];
}
var Root2 = Popper;
var Anchor = PopperAnchor;
var Content = PopperContent;
var Arrow2 = PopperArrow;

// ../../node_modules/@radix-ui/react-portal/dist/index.mjs
var import_react_dom2 = __toESM(require_react_dom(), 1);
import * as React19 from "react";
import { jsx as jsx12 } from "react/jsx-runtime";
"use client";
var PORTAL_NAME = "Portal";
var Portal = React19.forwardRef((props, forwardedRef) => {
  const { container: containerProp, ...portalProps } = props;
  const [mounted, setMounted] = React19.useState(false);
  useLayoutEffect2(() => setMounted(true), []);
  const container = containerProp || mounted && globalThis?.document?.body;
  return container ? import_react_dom2.default.createPortal(/* @__PURE__ */ jsx12(Primitive.div, { ...portalProps, ref: forwardedRef }), container) : null;
});
Portal.displayName = PORTAL_NAME;

// ../../node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
import * as React20 from "react";
import * as React23 from "react";
var useInsertionEffect = React20[" useInsertionEffect ".trim().toString()] || useLayoutEffect2;
function useControllableState({
  prop,
  defaultProp,
  onChange = () => {},
  caller
}) {
  const [uncontrolledProp, setUncontrolledProp, onChangeRef] = useUncontrolledState({
    defaultProp,
    onChange
  });
  const isControlled = prop !== undefined;
  const value = isControlled ? prop : uncontrolledProp;
  if (true) {
    const isControlledRef = React20.useRef(prop !== undefined);
    React20.useEffect(() => {
      const wasControlled = isControlledRef.current;
      if (wasControlled !== isControlled) {
        const from = wasControlled ? "controlled" : "uncontrolled";
        const to = isControlled ? "controlled" : "uncontrolled";
        console.warn(`${caller} is changing from ${from} to ${to}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`);
      }
      isControlledRef.current = isControlled;
    }, [isControlled, caller]);
  }
  const setValue = React20.useCallback((nextValue) => {
    if (isControlled) {
      const value2 = isFunction(nextValue) ? nextValue(prop) : nextValue;
      if (value2 !== prop) {
        onChangeRef.current?.(value2);
      }
    } else {
      setUncontrolledProp(nextValue);
    }
  }, [isControlled, prop, setUncontrolledProp, onChangeRef]);
  return [value, setValue];
}
function useUncontrolledState({
  defaultProp,
  onChange
}) {
  const [value, setValue] = React20.useState(defaultProp);
  const prevValueRef = React20.useRef(value);
  const onChangeRef = React20.useRef(onChange);
  useInsertionEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);
  React20.useEffect(() => {
    if (prevValueRef.current !== value) {
      onChangeRef.current?.(value);
      prevValueRef.current = value;
    }
  }, [value, prevValueRef]);
  return [value, setValue, onChangeRef];
}
function isFunction(value) {
  return typeof value === "function";
}
var SYNC_STATE = Symbol("RADIX:SYNC_STATE");

// ../../node_modules/@radix-ui/react-use-previous/dist/index.mjs
import * as React21 from "react";
function usePrevious(value) {
  const ref = React21.useRef({ value, previous: value });
  return React21.useMemo(() => {
    if (ref.current.value !== value) {
      ref.current.previous = ref.current.value;
      ref.current.value = value;
    }
    return ref.current.previous;
  }, [value]);
}

// ../../node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
import * as React24 from "react";
import { jsx as jsx13 } from "react/jsx-runtime";
var VISUALLY_HIDDEN_STYLES = Object.freeze({
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
});
var NAME2 = "VisuallyHidden";
var VisuallyHidden = React24.forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ jsx13(Primitive.span, {
    ...props,
    ref: forwardedRef,
    style: { ...VISUALLY_HIDDEN_STYLES, ...props.style }
  });
});
VisuallyHidden.displayName = NAME2;
var Root3 = VisuallyHidden;

// ../../node_modules/aria-hidden/dist/es2015/index.js
var getDefaultParent = function(originalTarget) {
  if (typeof document === "undefined") {
    return null;
  }
  var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
  return sampleTarget.ownerDocument.body;
};
var counterMap = new WeakMap;
var uncontrolledNodes = new WeakMap;
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node) {
  return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function(parent, targets) {
  return targets.map(function(target) {
    if (parent.contains(target)) {
      return target;
    }
    var correctedTarget = unwrapHost(target);
    if (correctedTarget && parent.contains(correctedTarget)) {
      return correctedTarget;
    }
    console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
    return null;
  }).filter(function(x) {
    return Boolean(x);
  });
};
var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
  var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  if (!markerMap[markerName]) {
    markerMap[markerName] = new WeakMap;
  }
  var markerCounter = markerMap[markerName];
  var hiddenNodes = [];
  var elementsToKeep = new Set;
  var elementsToStop = new Set(targets);
  var keep = function(el) {
    if (!el || elementsToKeep.has(el)) {
      return;
    }
    elementsToKeep.add(el);
    keep(el.parentNode);
  };
  targets.forEach(keep);
  var deep = function(parent) {
    if (!parent || elementsToStop.has(parent)) {
      return;
    }
    Array.prototype.forEach.call(parent.children, function(node) {
      if (elementsToKeep.has(node)) {
        deep(node);
      } else {
        try {
          var attr = node.getAttribute(controlAttribute);
          var alreadyHidden = attr !== null && attr !== "false";
          var counterValue = (counterMap.get(node) || 0) + 1;
          var markerValue = (markerCounter.get(node) || 0) + 1;
          counterMap.set(node, counterValue);
          markerCounter.set(node, markerValue);
          hiddenNodes.push(node);
          if (counterValue === 1 && alreadyHidden) {
            uncontrolledNodes.set(node, true);
          }
          if (markerValue === 1) {
            node.setAttribute(markerName, "true");
          }
          if (!alreadyHidden) {
            node.setAttribute(controlAttribute, "true");
          }
        } catch (e) {
          console.error("aria-hidden: cannot operate on ", node, e);
        }
      }
    });
  };
  deep(parentNode);
  elementsToKeep.clear();
  lockCount++;
  return function() {
    hiddenNodes.forEach(function(node) {
      var counterValue = counterMap.get(node) - 1;
      var markerValue = markerCounter.get(node) - 1;
      counterMap.set(node, counterValue);
      markerCounter.set(node, markerValue);
      if (!counterValue) {
        if (!uncontrolledNodes.has(node)) {
          node.removeAttribute(controlAttribute);
        }
        uncontrolledNodes.delete(node);
      }
      if (!markerValue) {
        node.removeAttribute(markerName);
      }
    });
    lockCount--;
    if (!lockCount) {
      counterMap = new WeakMap;
      counterMap = new WeakMap;
      uncontrolledNodes = new WeakMap;
      markerMap = {};
    }
  };
};
var hideOthers = function(originalTarget, parentNode, markerName) {
  if (markerName === undefined) {
    markerName = "data-aria-hidden";
  }
  var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  var activeParentNode = parentNode || getDefaultParent(originalTarget);
  if (!activeParentNode) {
    return function() {
      return null;
    };
  }
  targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live], script")));
  return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
};

// ../../node_modules/tslib/tslib.es6.mjs
var __assign = function() {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length;i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s);i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar;i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}

// ../../node_modules/react-remove-scroll/dist/es2015/Combination.js
import * as React32 from "react";

// ../../node_modules/react-remove-scroll/dist/es2015/UI.js
import * as React28 from "react";

// ../../node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
var removedBarSizeVariable = "--removed-body-scroll-bar-size";

// ../../node_modules/use-callback-ref/dist/es2015/assignRef.js
function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}

// ../../node_modules/use-callback-ref/dist/es2015/useRef.js
import { useState as useState9 } from "react";
function useCallbackRef2(initialValue, callback) {
  var ref = useState9(function() {
    return {
      value: initialValue,
      callback,
      facade: {
        get current() {
          return ref.value;
        },
        set current(value) {
          var last = ref.value;
          if (last !== value) {
            ref.value = value;
            ref.callback(value, last);
          }
        }
      }
    };
  })[0];
  ref.callback = callback;
  return ref.facade;
}

// ../../node_modules/use-callback-ref/dist/es2015/useMergeRef.js
import * as React26 from "react";
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? React26.useLayoutEffect : React26.useEffect;
var currentValues = new WeakMap;
function useMergeRefs(refs, defaultValue) {
  var callbackRef = useCallbackRef2(defaultValue || null, function(newValue) {
    return refs.forEach(function(ref) {
      return assignRef(ref, newValue);
    });
  });
  useIsomorphicLayoutEffect(function() {
    var oldValue = currentValues.get(callbackRef);
    if (oldValue) {
      var prevRefs_1 = new Set(oldValue);
      var nextRefs_1 = new Set(refs);
      var current_1 = callbackRef.current;
      prevRefs_1.forEach(function(ref) {
        if (!nextRefs_1.has(ref)) {
          assignRef(ref, null);
        }
      });
      nextRefs_1.forEach(function(ref) {
        if (!prevRefs_1.has(ref)) {
          assignRef(ref, current_1);
        }
      });
    }
    currentValues.set(callbackRef, refs);
  }, [refs]);
  return callbackRef;
}
// ../../node_modules/use-sidecar/dist/es2015/medium.js
function ItoI(a) {
  return a;
}
function innerCreateMedium(defaults, middleware) {
  if (middleware === undefined) {
    middleware = ItoI;
  }
  var buffer = [];
  var assigned = false;
  var medium = {
    read: function() {
      if (assigned) {
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      }
      if (buffer.length) {
        return buffer[buffer.length - 1];
      }
      return defaults;
    },
    useMedium: function(data) {
      var item = middleware(data, assigned);
      buffer.push(item);
      return function() {
        buffer = buffer.filter(function(x) {
          return x !== item;
        });
      };
    },
    assignSyncMedium: function(cb) {
      assigned = true;
      while (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
      }
      buffer = {
        push: function(x) {
          return cb(x);
        },
        filter: function() {
          return buffer;
        }
      };
    },
    assignMedium: function(cb) {
      assigned = true;
      var pendingQueue = [];
      if (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
        pendingQueue = buffer;
      }
      var executeQueue = function() {
        var cbs2 = pendingQueue;
        pendingQueue = [];
        cbs2.forEach(cb);
      };
      var cycle = function() {
        return Promise.resolve().then(executeQueue);
      };
      cycle();
      buffer = {
        push: function(x) {
          pendingQueue.push(x);
          cycle();
        },
        filter: function(filter) {
          pendingQueue = pendingQueue.filter(filter);
          return buffer;
        }
      };
    }
  };
  return medium;
}
function createSidecarMedium(options) {
  if (options === undefined) {
    options = {};
  }
  var medium = innerCreateMedium(null);
  medium.options = __assign({ async: true, ssr: false }, options);
  return medium;
}
// ../../node_modules/use-sidecar/dist/es2015/exports.js
import * as React27 from "react";
var SideCar = function(_a) {
  var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
  if (!sideCar) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target = sideCar.read();
  if (!Target) {
    throw new Error("Sidecar medium not found");
  }
  return React27.createElement(Target, __assign({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar;
}
// ../../node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar = createSidecarMedium();

// ../../node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function() {
  return;
};
var RemoveScroll = React28.forwardRef(function(props, parentRef) {
  var ref = React28.useRef(null);
  var _a = React28.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a[0], setCallbacks = _a[1];
  var { forwardProps, children, className, removeScrollBar, enabled, shards, sideCar, noRelative, noIsolation, inert, allowPinchZoom, as: _b } = props, Container = _b === undefined ? "div" : _b, gapMode = props.gapMode, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]);
  var SideCar2 = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = __assign(__assign({}, rest), callbacks);
  return React28.createElement(React28.Fragment, null, enabled && React28.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noRelative, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref, gapMode }), forwardProps ? React28.cloneElement(React28.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : React28.createElement(Container, __assign({}, containerProps, { className, ref: containerRef }), children));
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};

// ../../node_modules/react-remove-scroll/dist/es2015/SideEffect.js
import * as React31 from "react";

// ../../node_modules/react-remove-scroll-bar/dist/es2015/component.js
import * as React30 from "react";

// ../../node_modules/react-style-singleton/dist/es2015/hook.js
import * as React29 from "react";

// ../../node_modules/get-nonce/dist/es2015/index.js
var currentNonce;
var getNonce = function() {
  if (currentNonce) {
    return currentNonce;
  }
  if (typeof __webpack_nonce__ !== "undefined") {
    return __webpack_nonce__;
  }
  return;
};

// ../../node_modules/react-style-singleton/dist/es2015/singleton.js
function makeStyleTag() {
  if (!document)
    return null;
  var tag = document.createElement("style");
  tag.type = "text/css";
  var nonce = getNonce();
  if (nonce) {
    tag.setAttribute("nonce", nonce);
  }
  return tag;
}
function injectStyles(tag, css) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}
var stylesheetSingleton = function() {
  var counter = 0;
  var stylesheet = null;
  return {
    add: function(style) {
      if (counter == 0) {
        if (stylesheet = makeStyleTag()) {
          injectStyles(stylesheet, style);
          insertStyleTag(stylesheet);
        }
      }
      counter++;
    },
    remove: function() {
      counter--;
      if (!counter && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
        stylesheet = null;
      }
    }
  };
};

// ../../node_modules/react-style-singleton/dist/es2015/hook.js
var styleHookSingleton = function() {
  var sheet = stylesheetSingleton();
  return function(styles, isDynamic) {
    React29.useEffect(function() {
      sheet.add(styles);
      return function() {
        sheet.remove();
      };
    }, [styles && isDynamic]);
  };
};

// ../../node_modules/react-style-singleton/dist/es2015/component.js
var styleSingleton = function() {
  var useStyle = styleHookSingleton();
  var Sheet = function(_a) {
    var { styles, dynamic } = _a;
    useStyle(styles, dynamic);
    return null;
  };
  return Sheet;
};
// ../../node_modules/react-remove-scroll-bar/dist/es2015/utils.js
var zeroGap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};
var parse = function(x) {
  return parseInt(x || "", 10) || 0;
};
var getOffset = function(gapMode) {
  var cs = window.getComputedStyle(document.body);
  var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
  var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
  var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
  return [parse(left), parse(top), parse(right)];
};
var getGapWidth = function(gapMode) {
  if (gapMode === undefined) {
    gapMode = "margin";
  }
  if (typeof window === "undefined") {
    return zeroGap;
  }
  var offsets = getOffset(gapMode);
  var documentWidth = document.documentElement.clientWidth;
  var windowWidth = window.innerWidth;
  return {
    left: offsets[0],
    top: offsets[1],
    right: offsets[2],
    gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
  };
};

// ../../node_modules/react-remove-scroll-bar/dist/es2015/component.js
var Style = styleSingleton();
var lockAttribute = "data-scroll-locked";
var getStyles = function(_a, allowRelative, gapMode, important) {
  var { left, top, right, gap } = _a;
  if (gapMode === undefined) {
    gapMode = "margin";
  }
  return `
  .`.concat(noScrollbarsClassName, ` {
   overflow: hidden `).concat(important, `;
   padding-right: `).concat(gap, "px ").concat(important, `;
  }
  body[`).concat(lockAttribute, `] {
    overflow: hidden `).concat(important, `;
    overscroll-behavior: contain;
    `).concat([
    allowRelative && "position: relative ".concat(important, ";"),
    gapMode === "margin" && `
    padding-left: `.concat(left, `px;
    padding-top: `).concat(top, `px;
    padding-right: `).concat(right, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(gap, "px ").concat(important, `;
    `),
    gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(zeroRightClassName, ` {
    right: `).concat(gap, "px ").concat(important, `;
  }
  
  .`).concat(fullWidthClassName, ` {
    margin-right: `).concat(gap, "px ").concat(important, `;
  }
  
  .`).concat(zeroRightClassName, " .").concat(zeroRightClassName, ` {
    right: 0 `).concat(important, `;
  }
  
  .`).concat(fullWidthClassName, " .").concat(fullWidthClassName, ` {
    margin-right: 0 `).concat(important, `;
  }
  
  body[`).concat(lockAttribute, `] {
    `).concat(removedBarSizeVariable, ": ").concat(gap, `px;
  }
`);
};
var getCurrentUseCounter = function() {
  var counter = parseInt(document.body.getAttribute(lockAttribute) || "0", 10);
  return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function() {
  React30.useEffect(function() {
    document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
    return function() {
      var newCounter = getCurrentUseCounter() - 1;
      if (newCounter <= 0) {
        document.body.removeAttribute(lockAttribute);
      } else {
        document.body.setAttribute(lockAttribute, newCounter.toString());
      }
    };
  }, []);
};
var RemoveScrollBar = function(_a) {
  var { noRelative, noImportant, gapMode: _b } = _a, gapMode = _b === undefined ? "margin" : _b;
  useLockAttribute();
  var gap = React30.useMemo(function() {
    return getGapWidth(gapMode);
  }, [gapMode]);
  return React30.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};

// ../../node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var options;
var nonPassive = passiveSupported ? { passive: false } : false;

// ../../node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var alwaysContainsScroll = function(node) {
  return node.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node, overflow) {
  if (!(node instanceof Element)) {
    return false;
  }
  var styles = window.getComputedStyle(node);
  return styles[overflow] !== "hidden" && !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible");
};
var elementCouldBeVScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowY");
};
var elementCouldBeHScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowX");
};
var locationCouldBeScrolled = function(axis, node) {
  var ownerDocument = node.ownerDocument;
  var current = node;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a = getScrollVariables(axis, current), scrollHeight = _a[1], clientHeight = _a[2];
      if (scrollHeight > clientHeight) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== ownerDocument.body);
  return false;
};
var getVScrollVariables = function(_a) {
  var { scrollTop, scrollHeight, clientHeight } = _a;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a) {
  var { scrollLeft, scrollWidth, clientWidth } = _a;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node) {
  return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
  return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    if (!target) {
      break;
    }
    var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position;
    if (position || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position;
      }
    }
    var parent_1 = target.parentNode;
    target = parent_1 && parent_1.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? parent_1.host : parent_1;
  } while (!targetInLock && target !== document.body || targetInLock && (endTarget.contains(target) || endTarget === target));
  if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};

// ../../node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
  return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
  return `
  .block-interactivity-`.concat(id, ` {pointer-events: none;}
  .allow-interactivity-`).concat(id, ` {pointer-events: all;}
`);
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React31.useRef([]);
  var touchStartRef = React31.useRef([0, 0]);
  var activeAxis = React31.useRef();
  var id = React31.useState(idCounter++)[0];
  var Style2 = React31.useState(styleSingleton)[0];
  var lastProps = React31.useRef(props);
  React31.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React31.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React31.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2 || event.type === "wheel" && event.ctrlKey) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = React31.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style2) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e) {
      return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      if (event.cancelable) {
        event.preventDefault();
      }
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
        return node.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        if (event.cancelable) {
          event.preventDefault();
        }
      }
    }
  }, []);
  var shouldCancel = React31.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should, shadowParent: getOutermostShadowParent(target) };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
        return e !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React31.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = undefined;
  }, []);
  var scrollWheel = React31.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React31.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React31.useEffect(function() {
    lockStack.push(Style2);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style2;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var { removeScrollBar, inert } = props;
  return React31.createElement(React31.Fragment, null, inert ? React31.createElement(Style2, { styles: generateStyle(id) }) : null, removeScrollBar ? React31.createElement(RemoveScrollBar, { noRelative: props.noRelative, gapMode: props.gapMode }) : null);
}
function getOutermostShadowParent(node) {
  var shadowParent = null;
  while (node !== null) {
    if (node instanceof ShadowRoot) {
      shadowParent = node.host;
      node = node.host;
    }
    node = node.parentNode;
  }
  return shadowParent;
}

// ../../node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);

// ../../node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = React32.forwardRef(function(props, ref) {
  return React32.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: sidecar_default }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default = ReactRemoveScroll;

// ../../node_modules/@radix-ui/react-select/dist/index.mjs
import { Fragment as Fragment6, jsx as jsx14, jsxs as jsxs2 } from "react/jsx-runtime";
"use client";
var OPEN_KEYS = [" ", "Enter", "ArrowUp", "ArrowDown"];
var SELECTION_KEYS = [" ", "Enter"];
var SELECT_NAME = "Select";
var [Collection, useCollection, createCollectionScope] = createCollection(SELECT_NAME);
var [createSelectContext, createSelectScope] = createContextScope(SELECT_NAME, [
  createCollectionScope,
  createPopperScope
]);
var usePopperScope = createPopperScope();
var [SelectProvider, useSelectContext] = createSelectContext(SELECT_NAME);
var [SelectNativeOptionsProvider, useSelectNativeOptionsContext] = createSelectContext(SELECT_NAME);
var Select = (props) => {
  const {
    __scopeSelect,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    value: valueProp,
    defaultValue,
    onValueChange,
    dir,
    name,
    autoComplete,
    disabled,
    required,
    form
  } = props;
  const popperScope = usePopperScope(__scopeSelect);
  const [trigger, setTrigger] = React33.useState(null);
  const [valueNode, setValueNode] = React33.useState(null);
  const [valueNodeHasChildren, setValueNodeHasChildren] = React33.useState(false);
  const direction = useDirection(dir);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
    caller: SELECT_NAME
  });
  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange,
    caller: SELECT_NAME
  });
  const triggerPointerDownPosRef = React33.useRef(null);
  const isFormControl = trigger ? form || !!trigger.closest("form") : true;
  const [nativeOptionsSet, setNativeOptionsSet] = React33.useState(/* @__PURE__ */ new Set);
  const nativeSelectKey = Array.from(nativeOptionsSet).map((option) => option.props.value).join(";");
  return /* @__PURE__ */ jsx14(Root2, { ...popperScope, children: /* @__PURE__ */ jsxs2(SelectProvider, {
    required,
    scope: __scopeSelect,
    trigger,
    onTriggerChange: setTrigger,
    valueNode,
    onValueNodeChange: setValueNode,
    valueNodeHasChildren,
    onValueNodeHasChildrenChange: setValueNodeHasChildren,
    contentId: useId(),
    value,
    onValueChange: setValue,
    open,
    onOpenChange: setOpen,
    dir: direction,
    triggerPointerDownPosRef,
    disabled,
    children: [
      /* @__PURE__ */ jsx14(Collection.Provider, { scope: __scopeSelect, children: /* @__PURE__ */ jsx14(SelectNativeOptionsProvider, {
        scope: props.__scopeSelect,
        onNativeOptionAdd: React33.useCallback((option) => {
          setNativeOptionsSet((prev) => new Set(prev).add(option));
        }, []),
        onNativeOptionRemove: React33.useCallback((option) => {
          setNativeOptionsSet((prev) => {
            const optionsSet = new Set(prev);
            optionsSet.delete(option);
            return optionsSet;
          });
        }, []),
        children
      }) }),
      isFormControl ? /* @__PURE__ */ jsxs2(SelectBubbleInput, {
        "aria-hidden": true,
        required,
        tabIndex: -1,
        name,
        autoComplete,
        value,
        onChange: (event) => setValue(event.target.value),
        disabled,
        form,
        children: [
          value === undefined ? /* @__PURE__ */ jsx14("option", { value: "" }) : null,
          Array.from(nativeOptionsSet)
        ]
      }, nativeSelectKey) : null
    ]
  }) });
};
Select.displayName = SELECT_NAME;
var TRIGGER_NAME = "SelectTrigger";
var SelectTrigger = React33.forwardRef((props, forwardedRef) => {
  const { __scopeSelect, disabled = false, ...triggerProps } = props;
  const popperScope = usePopperScope(__scopeSelect);
  const context = useSelectContext(TRIGGER_NAME, __scopeSelect);
  const isDisabled = context.disabled || disabled;
  const composedRefs = useComposedRefs(forwardedRef, context.onTriggerChange);
  const getItems = useCollection(__scopeSelect);
  const pointerTypeRef = React33.useRef("touch");
  const [searchRef, handleTypeaheadSearch, resetTypeahead] = useTypeaheadSearch((search) => {
    const enabledItems = getItems().filter((item) => !item.disabled);
    const currentItem = enabledItems.find((item) => item.value === context.value);
    const nextItem = findNextItem(enabledItems, search, currentItem);
    if (nextItem !== undefined) {
      context.onValueChange(nextItem.value);
    }
  });
  const handleOpen = (pointerEvent) => {
    if (!isDisabled) {
      context.onOpenChange(true);
      resetTypeahead();
    }
    if (pointerEvent) {
      context.triggerPointerDownPosRef.current = {
        x: Math.round(pointerEvent.pageX),
        y: Math.round(pointerEvent.pageY)
      };
    }
  };
  return /* @__PURE__ */ jsx14(Anchor, { asChild: true, ...popperScope, children: /* @__PURE__ */ jsx14(Primitive.button, {
    type: "button",
    role: "combobox",
    "aria-controls": context.contentId,
    "aria-expanded": context.open,
    "aria-required": context.required,
    "aria-autocomplete": "none",
    dir: context.dir,
    "data-state": context.open ? "open" : "closed",
    disabled: isDisabled,
    "data-disabled": isDisabled ? "" : undefined,
    "data-placeholder": shouldShowPlaceholder(context.value) ? "" : undefined,
    ...triggerProps,
    ref: composedRefs,
    onClick: composeEventHandlers(triggerProps.onClick, (event) => {
      event.currentTarget.focus();
      if (pointerTypeRef.current !== "mouse") {
        handleOpen(event);
      }
    }),
    onPointerDown: composeEventHandlers(triggerProps.onPointerDown, (event) => {
      pointerTypeRef.current = event.pointerType;
      const target = event.target;
      if (target.hasPointerCapture(event.pointerId)) {
        target.releasePointerCapture(event.pointerId);
      }
      if (event.button === 0 && event.ctrlKey === false && event.pointerType === "mouse") {
        handleOpen(event);
        event.preventDefault();
      }
    }),
    onKeyDown: composeEventHandlers(triggerProps.onKeyDown, (event) => {
      const isTypingAhead = searchRef.current !== "";
      const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
      if (!isModifierKey && event.key.length === 1)
        handleTypeaheadSearch(event.key);
      if (isTypingAhead && event.key === " ")
        return;
      if (OPEN_KEYS.includes(event.key)) {
        handleOpen();
        event.preventDefault();
      }
    })
  }) });
});
SelectTrigger.displayName = TRIGGER_NAME;
var VALUE_NAME = "SelectValue";
var SelectValue = React33.forwardRef((props, forwardedRef) => {
  const { __scopeSelect, className, style, children, placeholder = "", ...valueProps } = props;
  const context = useSelectContext(VALUE_NAME, __scopeSelect);
  const { onValueNodeHasChildrenChange } = context;
  const hasChildren = children !== undefined;
  const composedRefs = useComposedRefs(forwardedRef, context.onValueNodeChange);
  useLayoutEffect2(() => {
    onValueNodeHasChildrenChange(hasChildren);
  }, [onValueNodeHasChildrenChange, hasChildren]);
  return /* @__PURE__ */ jsx14(Primitive.span, {
    ...valueProps,
    ref: composedRefs,
    style: { pointerEvents: "none" },
    children: shouldShowPlaceholder(context.value) ? /* @__PURE__ */ jsx14(Fragment6, { children: placeholder }) : children
  });
});
SelectValue.displayName = VALUE_NAME;
var ICON_NAME = "SelectIcon";
var SelectIcon = React33.forwardRef((props, forwardedRef) => {
  const { __scopeSelect, children, ...iconProps } = props;
  return /* @__PURE__ */ jsx14(Primitive.span, { "aria-hidden": true, ...iconProps, ref: forwardedRef, children: children || "▼" });
});
SelectIcon.displayName = ICON_NAME;
var PORTAL_NAME2 = "SelectPortal";
var SelectPortal = (props) => {
  return /* @__PURE__ */ jsx14(Portal, { asChild: true, ...props });
};
SelectPortal.displayName = PORTAL_NAME2;
var CONTENT_NAME2 = "SelectContent";
var SelectContent = React33.forwardRef((props, forwardedRef) => {
  const context = useSelectContext(CONTENT_NAME2, props.__scopeSelect);
  const [fragment, setFragment] = React33.useState();
  useLayoutEffect2(() => {
    setFragment(new DocumentFragment);
  }, []);
  if (!context.open) {
    const frag = fragment;
    return frag ? ReactDOM4.createPortal(/* @__PURE__ */ jsx14(SelectContentProvider, { scope: props.__scopeSelect, children: /* @__PURE__ */ jsx14(Collection.Slot, { scope: props.__scopeSelect, children: /* @__PURE__ */ jsx14("div", { children: props.children }) }) }), frag) : null;
  }
  return /* @__PURE__ */ jsx14(SelectContentImpl, { ...props, ref: forwardedRef });
});
SelectContent.displayName = CONTENT_NAME2;
var CONTENT_MARGIN = 10;
var [SelectContentProvider, useSelectContentContext] = createSelectContext(CONTENT_NAME2);
var CONTENT_IMPL_NAME = "SelectContentImpl";
var Slot2 = createSlot("SelectContent.RemoveScroll");
var SelectContentImpl = React33.forwardRef((props, forwardedRef) => {
  const {
    __scopeSelect,
    position = "item-aligned",
    onCloseAutoFocus,
    onEscapeKeyDown,
    onPointerDownOutside,
    side,
    sideOffset,
    align,
    alignOffset,
    arrowPadding,
    collisionBoundary,
    collisionPadding,
    sticky,
    hideWhenDetached,
    avoidCollisions,
    ...contentProps
  } = props;
  const context = useSelectContext(CONTENT_NAME2, __scopeSelect);
  const [content, setContent] = React33.useState(null);
  const [viewport, setViewport] = React33.useState(null);
  const composedRefs = useComposedRefs(forwardedRef, (node) => setContent(node));
  const [selectedItem, setSelectedItem] = React33.useState(null);
  const [selectedItemText, setSelectedItemText] = React33.useState(null);
  const getItems = useCollection(__scopeSelect);
  const [isPositioned, setIsPositioned] = React33.useState(false);
  const firstValidItemFoundRef = React33.useRef(false);
  React33.useEffect(() => {
    if (content)
      return hideOthers(content);
  }, [content]);
  useFocusGuards();
  const focusFirst2 = React33.useCallback((candidates) => {
    const [firstItem, ...restItems] = getItems().map((item) => item.ref.current);
    const [lastItem] = restItems.slice(-1);
    const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
    for (const candidate of candidates) {
      if (candidate === PREVIOUSLY_FOCUSED_ELEMENT)
        return;
      candidate?.scrollIntoView({ block: "nearest" });
      if (candidate === firstItem && viewport)
        viewport.scrollTop = 0;
      if (candidate === lastItem && viewport)
        viewport.scrollTop = viewport.scrollHeight;
      candidate?.focus();
      if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT)
        return;
    }
  }, [getItems, viewport]);
  const focusSelectedItem = React33.useCallback(() => focusFirst2([selectedItem, content]), [focusFirst2, selectedItem, content]);
  React33.useEffect(() => {
    if (isPositioned) {
      focusSelectedItem();
    }
  }, [isPositioned, focusSelectedItem]);
  const { onOpenChange, triggerPointerDownPosRef } = context;
  React33.useEffect(() => {
    if (content) {
      let pointerMoveDelta = { x: 0, y: 0 };
      const handlePointerMove = (event) => {
        pointerMoveDelta = {
          x: Math.abs(Math.round(event.pageX) - (triggerPointerDownPosRef.current?.x ?? 0)),
          y: Math.abs(Math.round(event.pageY) - (triggerPointerDownPosRef.current?.y ?? 0))
        };
      };
      const handlePointerUp = (event) => {
        if (pointerMoveDelta.x <= 10 && pointerMoveDelta.y <= 10) {
          event.preventDefault();
        } else {
          if (!content.contains(event.target)) {
            onOpenChange(false);
          }
        }
        document.removeEventListener("pointermove", handlePointerMove);
        triggerPointerDownPosRef.current = null;
      };
      if (triggerPointerDownPosRef.current !== null) {
        document.addEventListener("pointermove", handlePointerMove);
        document.addEventListener("pointerup", handlePointerUp, { capture: true, once: true });
      }
      return () => {
        document.removeEventListener("pointermove", handlePointerMove);
        document.removeEventListener("pointerup", handlePointerUp, { capture: true });
      };
    }
  }, [content, onOpenChange, triggerPointerDownPosRef]);
  React33.useEffect(() => {
    const close = () => onOpenChange(false);
    window.addEventListener("blur", close);
    window.addEventListener("resize", close);
    return () => {
      window.removeEventListener("blur", close);
      window.removeEventListener("resize", close);
    };
  }, [onOpenChange]);
  const [searchRef, handleTypeaheadSearch] = useTypeaheadSearch((search) => {
    const enabledItems = getItems().filter((item) => !item.disabled);
    const currentItem = enabledItems.find((item) => item.ref.current === document.activeElement);
    const nextItem = findNextItem(enabledItems, search, currentItem);
    if (nextItem) {
      setTimeout(() => nextItem.ref.current.focus());
    }
  });
  const itemRefCallback = React33.useCallback((node, value, disabled) => {
    const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
    const isSelectedItem = context.value !== undefined && context.value === value;
    if (isSelectedItem || isFirstValidItem) {
      setSelectedItem(node);
      if (isFirstValidItem)
        firstValidItemFoundRef.current = true;
    }
  }, [context.value]);
  const handleItemLeave = React33.useCallback(() => content?.focus(), [content]);
  const itemTextRefCallback = React33.useCallback((node, value, disabled) => {
    const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
    const isSelectedItem = context.value !== undefined && context.value === value;
    if (isSelectedItem || isFirstValidItem) {
      setSelectedItemText(node);
    }
  }, [context.value]);
  const SelectPosition = position === "popper" ? SelectPopperPosition : SelectItemAlignedPosition;
  const popperContentProps = SelectPosition === SelectPopperPosition ? {
    side,
    sideOffset,
    align,
    alignOffset,
    arrowPadding,
    collisionBoundary,
    collisionPadding,
    sticky,
    hideWhenDetached,
    avoidCollisions
  } : {};
  return /* @__PURE__ */ jsx14(SelectContentProvider, {
    scope: __scopeSelect,
    content,
    viewport,
    onViewportChange: setViewport,
    itemRefCallback,
    selectedItem,
    onItemLeave: handleItemLeave,
    itemTextRefCallback,
    focusSelectedItem,
    selectedItemText,
    position,
    isPositioned,
    searchRef,
    children: /* @__PURE__ */ jsx14(Combination_default, { as: Slot2, allowPinchZoom: true, children: /* @__PURE__ */ jsx14(FocusScope, {
      asChild: true,
      trapped: context.open,
      onMountAutoFocus: (event) => {
        event.preventDefault();
      },
      onUnmountAutoFocus: composeEventHandlers(onCloseAutoFocus, (event) => {
        context.trigger?.focus({ preventScroll: true });
        event.preventDefault();
      }),
      children: /* @__PURE__ */ jsx14(DismissableLayer, {
        asChild: true,
        disableOutsidePointerEvents: true,
        onEscapeKeyDown,
        onPointerDownOutside,
        onFocusOutside: (event) => event.preventDefault(),
        onDismiss: () => context.onOpenChange(false),
        children: /* @__PURE__ */ jsx14(SelectPosition, {
          role: "listbox",
          id: context.contentId,
          "data-state": context.open ? "open" : "closed",
          dir: context.dir,
          onContextMenu: (event) => event.preventDefault(),
          ...contentProps,
          ...popperContentProps,
          onPlaced: () => setIsPositioned(true),
          ref: composedRefs,
          style: {
            display: "flex",
            flexDirection: "column",
            outline: "none",
            ...contentProps.style
          },
          onKeyDown: composeEventHandlers(contentProps.onKeyDown, (event) => {
            const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
            if (event.key === "Tab")
              event.preventDefault();
            if (!isModifierKey && event.key.length === 1)
              handleTypeaheadSearch(event.key);
            if (["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
              const items = getItems().filter((item) => !item.disabled);
              let candidateNodes = items.map((item) => item.ref.current);
              if (["ArrowUp", "End"].includes(event.key)) {
                candidateNodes = candidateNodes.slice().reverse();
              }
              if (["ArrowUp", "ArrowDown"].includes(event.key)) {
                const currentElement = event.target;
                const currentIndex = candidateNodes.indexOf(currentElement);
                candidateNodes = candidateNodes.slice(currentIndex + 1);
              }
              setTimeout(() => focusFirst2(candidateNodes));
              event.preventDefault();
            }
          })
        })
      })
    }) })
  });
});
SelectContentImpl.displayName = CONTENT_IMPL_NAME;
var ITEM_ALIGNED_POSITION_NAME = "SelectItemAlignedPosition";
var SelectItemAlignedPosition = React33.forwardRef((props, forwardedRef) => {
  const { __scopeSelect, onPlaced, ...popperProps } = props;
  const context = useSelectContext(CONTENT_NAME2, __scopeSelect);
  const contentContext = useSelectContentContext(CONTENT_NAME2, __scopeSelect);
  const [contentWrapper, setContentWrapper] = React33.useState(null);
  const [content, setContent] = React33.useState(null);
  const composedRefs = useComposedRefs(forwardedRef, (node) => setContent(node));
  const getItems = useCollection(__scopeSelect);
  const shouldExpandOnScrollRef = React33.useRef(false);
  const shouldRepositionRef = React33.useRef(true);
  const { viewport, selectedItem, selectedItemText, focusSelectedItem } = contentContext;
  const position = React33.useCallback(() => {
    if (context.trigger && context.valueNode && contentWrapper && content && viewport && selectedItem && selectedItemText) {
      const triggerRect = context.trigger.getBoundingClientRect();
      const contentRect = content.getBoundingClientRect();
      const valueNodeRect = context.valueNode.getBoundingClientRect();
      const itemTextRect = selectedItemText.getBoundingClientRect();
      if (context.dir !== "rtl") {
        const itemTextOffset = itemTextRect.left - contentRect.left;
        const left = valueNodeRect.left - itemTextOffset;
        const leftDelta = triggerRect.left - left;
        const minContentWidth = triggerRect.width + leftDelta;
        const contentWidth = Math.max(minContentWidth, contentRect.width);
        const rightEdge = window.innerWidth - CONTENT_MARGIN;
        const clampedLeft = clamp(left, [
          CONTENT_MARGIN,
          Math.max(CONTENT_MARGIN, rightEdge - contentWidth)
        ]);
        contentWrapper.style.minWidth = minContentWidth + "px";
        contentWrapper.style.left = clampedLeft + "px";
      } else {
        const itemTextOffset = contentRect.right - itemTextRect.right;
        const right = window.innerWidth - valueNodeRect.right - itemTextOffset;
        const rightDelta = window.innerWidth - triggerRect.right - right;
        const minContentWidth = triggerRect.width + rightDelta;
        const contentWidth = Math.max(minContentWidth, contentRect.width);
        const leftEdge = window.innerWidth - CONTENT_MARGIN;
        const clampedRight = clamp(right, [
          CONTENT_MARGIN,
          Math.max(CONTENT_MARGIN, leftEdge - contentWidth)
        ]);
        contentWrapper.style.minWidth = minContentWidth + "px";
        contentWrapper.style.right = clampedRight + "px";
      }
      const items = getItems();
      const availableHeight = window.innerHeight - CONTENT_MARGIN * 2;
      const itemsHeight = viewport.scrollHeight;
      const contentStyles = window.getComputedStyle(content);
      const contentBorderTopWidth = parseInt(contentStyles.borderTopWidth, 10);
      const contentPaddingTop = parseInt(contentStyles.paddingTop, 10);
      const contentBorderBottomWidth = parseInt(contentStyles.borderBottomWidth, 10);
      const contentPaddingBottom = parseInt(contentStyles.paddingBottom, 10);
      const fullContentHeight = contentBorderTopWidth + contentPaddingTop + itemsHeight + contentPaddingBottom + contentBorderBottomWidth;
      const minContentHeight = Math.min(selectedItem.offsetHeight * 5, fullContentHeight);
      const viewportStyles = window.getComputedStyle(viewport);
      const viewportPaddingTop = parseInt(viewportStyles.paddingTop, 10);
      const viewportPaddingBottom = parseInt(viewportStyles.paddingBottom, 10);
      const topEdgeToTriggerMiddle = triggerRect.top + triggerRect.height / 2 - CONTENT_MARGIN;
      const triggerMiddleToBottomEdge = availableHeight - topEdgeToTriggerMiddle;
      const selectedItemHalfHeight = selectedItem.offsetHeight / 2;
      const itemOffsetMiddle = selectedItem.offsetTop + selectedItemHalfHeight;
      const contentTopToItemMiddle = contentBorderTopWidth + contentPaddingTop + itemOffsetMiddle;
      const itemMiddleToContentBottom = fullContentHeight - contentTopToItemMiddle;
      const willAlignWithoutTopOverflow = contentTopToItemMiddle <= topEdgeToTriggerMiddle;
      if (willAlignWithoutTopOverflow) {
        const isLastItem = items.length > 0 && selectedItem === items[items.length - 1].ref.current;
        contentWrapper.style.bottom = "0px";
        const viewportOffsetBottom = content.clientHeight - viewport.offsetTop - viewport.offsetHeight;
        const clampedTriggerMiddleToBottomEdge = Math.max(triggerMiddleToBottomEdge, selectedItemHalfHeight + (isLastItem ? viewportPaddingBottom : 0) + viewportOffsetBottom + contentBorderBottomWidth);
        const height = contentTopToItemMiddle + clampedTriggerMiddleToBottomEdge;
        contentWrapper.style.height = height + "px";
      } else {
        const isFirstItem = items.length > 0 && selectedItem === items[0].ref.current;
        contentWrapper.style.top = "0px";
        const clampedTopEdgeToTriggerMiddle = Math.max(topEdgeToTriggerMiddle, contentBorderTopWidth + viewport.offsetTop + (isFirstItem ? viewportPaddingTop : 0) + selectedItemHalfHeight);
        const height = clampedTopEdgeToTriggerMiddle + itemMiddleToContentBottom;
        contentWrapper.style.height = height + "px";
        viewport.scrollTop = contentTopToItemMiddle - topEdgeToTriggerMiddle + viewport.offsetTop;
      }
      contentWrapper.style.margin = `${CONTENT_MARGIN}px 0`;
      contentWrapper.style.minHeight = minContentHeight + "px";
      contentWrapper.style.maxHeight = availableHeight + "px";
      onPlaced?.();
      requestAnimationFrame(() => shouldExpandOnScrollRef.current = true);
    }
  }, [
    getItems,
    context.trigger,
    context.valueNode,
    contentWrapper,
    content,
    viewport,
    selectedItem,
    selectedItemText,
    context.dir,
    onPlaced
  ]);
  useLayoutEffect2(() => position(), [position]);
  const [contentZIndex, setContentZIndex] = React33.useState();
  useLayoutEffect2(() => {
    if (content)
      setContentZIndex(window.getComputedStyle(content).zIndex);
  }, [content]);
  const handleScrollButtonChange = React33.useCallback((node) => {
    if (node && shouldRepositionRef.current === true) {
      position();
      focusSelectedItem?.();
      shouldRepositionRef.current = false;
    }
  }, [position, focusSelectedItem]);
  return /* @__PURE__ */ jsx14(SelectViewportProvider, {
    scope: __scopeSelect,
    contentWrapper,
    shouldExpandOnScrollRef,
    onScrollButtonChange: handleScrollButtonChange,
    children: /* @__PURE__ */ jsx14("div", {
      ref: setContentWrapper,
      style: {
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: contentZIndex
      },
      children: /* @__PURE__ */ jsx14(Primitive.div, {
        ...popperProps,
        ref: composedRefs,
        style: {
          boxSizing: "border-box",
          maxHeight: "100%",
          ...popperProps.style
        }
      })
    })
  });
});
SelectItemAlignedPosition.displayName = ITEM_ALIGNED_POSITION_NAME;
var POPPER_POSITION_NAME = "SelectPopperPosition";
var SelectPopperPosition = React33.forwardRef((props, forwardedRef) => {
  const {
    __scopeSelect,
    align = "start",
    collisionPadding = CONTENT_MARGIN,
    ...popperProps
  } = props;
  const popperScope = usePopperScope(__scopeSelect);
  return /* @__PURE__ */ jsx14(Content, {
    ...popperScope,
    ...popperProps,
    ref: forwardedRef,
    align,
    collisionPadding,
    style: {
      boxSizing: "border-box",
      ...popperProps.style,
      ...{
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  });
});
SelectPopperPosition.displayName = POPPER_POSITION_NAME;
var [SelectViewportProvider, useSelectViewportContext] = createSelectContext(CONTENT_NAME2, {});
var VIEWPORT_NAME = "SelectViewport";
var SelectViewport = React33.forwardRef((props, forwardedRef) => {
  const { __scopeSelect, nonce, ...viewportProps } = props;
  const contentContext = useSelectContentContext(VIEWPORT_NAME, __scopeSelect);
  const viewportContext = useSelectViewportContext(VIEWPORT_NAME, __scopeSelect);
  const composedRefs = useComposedRefs(forwardedRef, contentContext.onViewportChange);
  const prevScrollTopRef = React33.useRef(0);
  return /* @__PURE__ */ jsxs2(Fragment6, { children: [
    /* @__PURE__ */ jsx14("style", {
      dangerouslySetInnerHTML: {
        __html: `[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}`
      },
      nonce
    }),
    /* @__PURE__ */ jsx14(Collection.Slot, { scope: __scopeSelect, children: /* @__PURE__ */ jsx14(Primitive.div, {
      "data-radix-select-viewport": "",
      role: "presentation",
      ...viewportProps,
      ref: composedRefs,
      style: {
        position: "relative",
        flex: 1,
        overflow: "hidden auto",
        ...viewportProps.style
      },
      onScroll: composeEventHandlers(viewportProps.onScroll, (event) => {
        const viewport = event.currentTarget;
        const { contentWrapper, shouldExpandOnScrollRef } = viewportContext;
        if (shouldExpandOnScrollRef?.current && contentWrapper) {
          const scrolledBy = Math.abs(prevScrollTopRef.current - viewport.scrollTop);
          if (scrolledBy > 0) {
            const availableHeight = window.innerHeight - CONTENT_MARGIN * 2;
            const cssMinHeight = parseFloat(contentWrapper.style.minHeight);
            const cssHeight = parseFloat(contentWrapper.style.height);
            const prevHeight = Math.max(cssMinHeight, cssHeight);
            if (prevHeight < availableHeight) {
              const nextHeight = prevHeight + scrolledBy;
              const clampedNextHeight = Math.min(availableHeight, nextHeight);
              const heightDiff = nextHeight - clampedNextHeight;
              contentWrapper.style.height = clampedNextHeight + "px";
              if (contentWrapper.style.bottom === "0px") {
                viewport.scrollTop = heightDiff > 0 ? heightDiff : 0;
                contentWrapper.style.justifyContent = "flex-end";
              }
            }
          }
        }
        prevScrollTopRef.current = viewport.scrollTop;
      })
    }) })
  ] });
});
SelectViewport.displayName = VIEWPORT_NAME;
var GROUP_NAME = "SelectGroup";
var [SelectGroupContextProvider, useSelectGroupContext] = createSelectContext(GROUP_NAME);
var SelectGroup = React33.forwardRef((props, forwardedRef) => {
  const { __scopeSelect, ...groupProps } = props;
  const groupId = useId();
  return /* @__PURE__ */ jsx14(SelectGroupContextProvider, { scope: __scopeSelect, id: groupId, children: /* @__PURE__ */ jsx14(Primitive.div, { role: "group", "aria-labelledby": groupId, ...groupProps, ref: forwardedRef }) });
});
SelectGroup.displayName = GROUP_NAME;
var LABEL_NAME = "SelectLabel";
var SelectLabel = React33.forwardRef((props, forwardedRef) => {
  const { __scopeSelect, ...labelProps } = props;
  const groupContext = useSelectGroupContext(LABEL_NAME, __scopeSelect);
  return /* @__PURE__ */ jsx14(Primitive.div, { id: groupContext.id, ...labelProps, ref: forwardedRef });
});
SelectLabel.displayName = LABEL_NAME;
var ITEM_NAME = "SelectItem";
var [SelectItemContextProvider, useSelectItemContext] = createSelectContext(ITEM_NAME);
var SelectItem = React33.forwardRef((props, forwardedRef) => {
  const {
    __scopeSelect,
    value,
    disabled = false,
    textValue: textValueProp,
    ...itemProps
  } = props;
  const context = useSelectContext(ITEM_NAME, __scopeSelect);
  const contentContext = useSelectContentContext(ITEM_NAME, __scopeSelect);
  const isSelected = context.value === value;
  const [textValue, setTextValue] = React33.useState(textValueProp ?? "");
  const [isFocused, setIsFocused] = React33.useState(false);
  const composedRefs = useComposedRefs(forwardedRef, (node) => contentContext.itemRefCallback?.(node, value, disabled));
  const textId = useId();
  const pointerTypeRef = React33.useRef("touch");
  const handleSelect = () => {
    if (!disabled) {
      context.onValueChange(value);
      context.onOpenChange(false);
    }
  };
  if (value === "") {
    throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
  }
  return /* @__PURE__ */ jsx14(SelectItemContextProvider, {
    scope: __scopeSelect,
    value,
    disabled,
    textId,
    isSelected,
    onItemTextChange: React33.useCallback((node) => {
      setTextValue((prevTextValue) => prevTextValue || (node?.textContent ?? "").trim());
    }, []),
    children: /* @__PURE__ */ jsx14(Collection.ItemSlot, {
      scope: __scopeSelect,
      value,
      disabled,
      textValue,
      children: /* @__PURE__ */ jsx14(Primitive.div, {
        role: "option",
        "aria-labelledby": textId,
        "data-highlighted": isFocused ? "" : undefined,
        "aria-selected": isSelected && isFocused,
        "data-state": isSelected ? "checked" : "unchecked",
        "aria-disabled": disabled || undefined,
        "data-disabled": disabled ? "" : undefined,
        tabIndex: disabled ? undefined : -1,
        ...itemProps,
        ref: composedRefs,
        onFocus: composeEventHandlers(itemProps.onFocus, () => setIsFocused(true)),
        onBlur: composeEventHandlers(itemProps.onBlur, () => setIsFocused(false)),
        onClick: composeEventHandlers(itemProps.onClick, () => {
          if (pointerTypeRef.current !== "mouse")
            handleSelect();
        }),
        onPointerUp: composeEventHandlers(itemProps.onPointerUp, () => {
          if (pointerTypeRef.current === "mouse")
            handleSelect();
        }),
        onPointerDown: composeEventHandlers(itemProps.onPointerDown, (event) => {
          pointerTypeRef.current = event.pointerType;
        }),
        onPointerMove: composeEventHandlers(itemProps.onPointerMove, (event) => {
          pointerTypeRef.current = event.pointerType;
          if (disabled) {
            contentContext.onItemLeave?.();
          } else if (pointerTypeRef.current === "mouse") {
            event.currentTarget.focus({ preventScroll: true });
          }
        }),
        onPointerLeave: composeEventHandlers(itemProps.onPointerLeave, (event) => {
          if (event.currentTarget === document.activeElement) {
            contentContext.onItemLeave?.();
          }
        }),
        onKeyDown: composeEventHandlers(itemProps.onKeyDown, (event) => {
          const isTypingAhead = contentContext.searchRef?.current !== "";
          if (isTypingAhead && event.key === " ")
            return;
          if (SELECTION_KEYS.includes(event.key))
            handleSelect();
          if (event.key === " ")
            event.preventDefault();
        })
      })
    })
  });
});
SelectItem.displayName = ITEM_NAME;
var ITEM_TEXT_NAME = "SelectItemText";
var SelectItemText = React33.forwardRef((props, forwardedRef) => {
  const { __scopeSelect, className, style, ...itemTextProps } = props;
  const context = useSelectContext(ITEM_TEXT_NAME, __scopeSelect);
  const contentContext = useSelectContentContext(ITEM_TEXT_NAME, __scopeSelect);
  const itemContext = useSelectItemContext(ITEM_TEXT_NAME, __scopeSelect);
  const nativeOptionsContext = useSelectNativeOptionsContext(ITEM_TEXT_NAME, __scopeSelect);
  const [itemTextNode, setItemTextNode] = React33.useState(null);
  const composedRefs = useComposedRefs(forwardedRef, (node) => setItemTextNode(node), itemContext.onItemTextChange, (node) => contentContext.itemTextRefCallback?.(node, itemContext.value, itemContext.disabled));
  const textContent = itemTextNode?.textContent;
  const nativeOption = React33.useMemo(() => /* @__PURE__ */ jsx14("option", { value: itemContext.value, disabled: itemContext.disabled, children: textContent }, itemContext.value), [itemContext.disabled, itemContext.value, textContent]);
  const { onNativeOptionAdd, onNativeOptionRemove } = nativeOptionsContext;
  useLayoutEffect2(() => {
    onNativeOptionAdd(nativeOption);
    return () => onNativeOptionRemove(nativeOption);
  }, [onNativeOptionAdd, onNativeOptionRemove, nativeOption]);
  return /* @__PURE__ */ jsxs2(Fragment6, { children: [
    /* @__PURE__ */ jsx14(Primitive.span, { id: itemContext.textId, ...itemTextProps, ref: composedRefs }),
    itemContext.isSelected && context.valueNode && !context.valueNodeHasChildren ? ReactDOM4.createPortal(itemTextProps.children, context.valueNode) : null
  ] });
});
SelectItemText.displayName = ITEM_TEXT_NAME;
var ITEM_INDICATOR_NAME = "SelectItemIndicator";
var SelectItemIndicator = React33.forwardRef((props, forwardedRef) => {
  const { __scopeSelect, ...itemIndicatorProps } = props;
  const itemContext = useSelectItemContext(ITEM_INDICATOR_NAME, __scopeSelect);
  return itemContext.isSelected ? /* @__PURE__ */ jsx14(Primitive.span, { "aria-hidden": true, ...itemIndicatorProps, ref: forwardedRef }) : null;
});
SelectItemIndicator.displayName = ITEM_INDICATOR_NAME;
var SCROLL_UP_BUTTON_NAME = "SelectScrollUpButton";
var SelectScrollUpButton = React33.forwardRef((props, forwardedRef) => {
  const contentContext = useSelectContentContext(SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
  const viewportContext = useSelectViewportContext(SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
  const [canScrollUp, setCanScrollUp] = React33.useState(false);
  const composedRefs = useComposedRefs(forwardedRef, viewportContext.onScrollButtonChange);
  useLayoutEffect2(() => {
    if (contentContext.viewport && contentContext.isPositioned) {
      let handleScroll22 = function() {
        const canScrollUp2 = viewport.scrollTop > 0;
        setCanScrollUp(canScrollUp2);
      };
      var handleScroll2 = handleScroll22;
      const viewport = contentContext.viewport;
      handleScroll22();
      viewport.addEventListener("scroll", handleScroll22);
      return () => viewport.removeEventListener("scroll", handleScroll22);
    }
  }, [contentContext.viewport, contentContext.isPositioned]);
  return canScrollUp ? /* @__PURE__ */ jsx14(SelectScrollButtonImpl, {
    ...props,
    ref: composedRefs,
    onAutoScroll: () => {
      const { viewport, selectedItem } = contentContext;
      if (viewport && selectedItem) {
        viewport.scrollTop = viewport.scrollTop - selectedItem.offsetHeight;
      }
    }
  }) : null;
});
SelectScrollUpButton.displayName = SCROLL_UP_BUTTON_NAME;
var SCROLL_DOWN_BUTTON_NAME = "SelectScrollDownButton";
var SelectScrollDownButton = React33.forwardRef((props, forwardedRef) => {
  const contentContext = useSelectContentContext(SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
  const viewportContext = useSelectViewportContext(SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
  const [canScrollDown, setCanScrollDown] = React33.useState(false);
  const composedRefs = useComposedRefs(forwardedRef, viewportContext.onScrollButtonChange);
  useLayoutEffect2(() => {
    if (contentContext.viewport && contentContext.isPositioned) {
      let handleScroll22 = function() {
        const maxScroll = viewport.scrollHeight - viewport.clientHeight;
        const canScrollDown2 = Math.ceil(viewport.scrollTop) < maxScroll;
        setCanScrollDown(canScrollDown2);
      };
      var handleScroll2 = handleScroll22;
      const viewport = contentContext.viewport;
      handleScroll22();
      viewport.addEventListener("scroll", handleScroll22);
      return () => viewport.removeEventListener("scroll", handleScroll22);
    }
  }, [contentContext.viewport, contentContext.isPositioned]);
  return canScrollDown ? /* @__PURE__ */ jsx14(SelectScrollButtonImpl, {
    ...props,
    ref: composedRefs,
    onAutoScroll: () => {
      const { viewport, selectedItem } = contentContext;
      if (viewport && selectedItem) {
        viewport.scrollTop = viewport.scrollTop + selectedItem.offsetHeight;
      }
    }
  }) : null;
});
SelectScrollDownButton.displayName = SCROLL_DOWN_BUTTON_NAME;
var SelectScrollButtonImpl = React33.forwardRef((props, forwardedRef) => {
  const { __scopeSelect, onAutoScroll, ...scrollIndicatorProps } = props;
  const contentContext = useSelectContentContext("SelectScrollButton", __scopeSelect);
  const autoScrollTimerRef = React33.useRef(null);
  const getItems = useCollection(__scopeSelect);
  const clearAutoScrollTimer = React33.useCallback(() => {
    if (autoScrollTimerRef.current !== null) {
      window.clearInterval(autoScrollTimerRef.current);
      autoScrollTimerRef.current = null;
    }
  }, []);
  React33.useEffect(() => {
    return () => clearAutoScrollTimer();
  }, [clearAutoScrollTimer]);
  useLayoutEffect2(() => {
    const activeItem = getItems().find((item) => item.ref.current === document.activeElement);
    activeItem?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [getItems]);
  return /* @__PURE__ */ jsx14(Primitive.div, {
    "aria-hidden": true,
    ...scrollIndicatorProps,
    ref: forwardedRef,
    style: { flexShrink: 0, ...scrollIndicatorProps.style },
    onPointerDown: composeEventHandlers(scrollIndicatorProps.onPointerDown, () => {
      if (autoScrollTimerRef.current === null) {
        autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
      }
    }),
    onPointerMove: composeEventHandlers(scrollIndicatorProps.onPointerMove, () => {
      contentContext.onItemLeave?.();
      if (autoScrollTimerRef.current === null) {
        autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
      }
    }),
    onPointerLeave: composeEventHandlers(scrollIndicatorProps.onPointerLeave, () => {
      clearAutoScrollTimer();
    })
  });
});
var SEPARATOR_NAME = "SelectSeparator";
var SelectSeparator = React33.forwardRef((props, forwardedRef) => {
  const { __scopeSelect, ...separatorProps } = props;
  return /* @__PURE__ */ jsx14(Primitive.div, { "aria-hidden": true, ...separatorProps, ref: forwardedRef });
});
SelectSeparator.displayName = SEPARATOR_NAME;
var ARROW_NAME2 = "SelectArrow";
var SelectArrow = React33.forwardRef((props, forwardedRef) => {
  const { __scopeSelect, ...arrowProps } = props;
  const popperScope = usePopperScope(__scopeSelect);
  const context = useSelectContext(ARROW_NAME2, __scopeSelect);
  const contentContext = useSelectContentContext(ARROW_NAME2, __scopeSelect);
  return context.open && contentContext.position === "popper" ? /* @__PURE__ */ jsx14(Arrow2, { ...popperScope, ...arrowProps, ref: forwardedRef }) : null;
});
SelectArrow.displayName = ARROW_NAME2;
var BUBBLE_INPUT_NAME = "SelectBubbleInput";
var SelectBubbleInput = React33.forwardRef(({ __scopeSelect, value, ...props }, forwardedRef) => {
  const ref = React33.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const prevValue = usePrevious(value);
  React33.useEffect(() => {
    const select = ref.current;
    if (!select)
      return;
    const selectProto = window.HTMLSelectElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(selectProto, "value");
    const setValue = descriptor.set;
    if (prevValue !== value && setValue) {
      const event = new Event("change", { bubbles: true });
      setValue.call(select, value);
      select.dispatchEvent(event);
    }
  }, [prevValue, value]);
  return /* @__PURE__ */ jsx14(Primitive.select, {
    ...props,
    style: { ...VISUALLY_HIDDEN_STYLES, ...props.style },
    ref: composedRefs,
    defaultValue: value
  });
});
SelectBubbleInput.displayName = BUBBLE_INPUT_NAME;
function shouldShowPlaceholder(value) {
  return value === "" || value === undefined;
}
function useTypeaheadSearch(onSearchChange) {
  const handleSearchChange = useCallbackRef(onSearchChange);
  const searchRef = React33.useRef("");
  const timerRef = React33.useRef(0);
  const handleTypeaheadSearch = React33.useCallback((key) => {
    const search = searchRef.current + key;
    handleSearchChange(search);
    (function updateSearch(value) {
      searchRef.current = value;
      window.clearTimeout(timerRef.current);
      if (value !== "")
        timerRef.current = window.setTimeout(() => updateSearch(""), 1000);
    })(search);
  }, [handleSearchChange]);
  const resetTypeahead = React33.useCallback(() => {
    searchRef.current = "";
    window.clearTimeout(timerRef.current);
  }, []);
  React33.useEffect(() => {
    return () => window.clearTimeout(timerRef.current);
  }, []);
  return [searchRef, handleTypeaheadSearch, resetTypeahead];
}
function findNextItem(items, search, currentItem) {
  const isRepeated = search.length > 1 && Array.from(search).every((char) => char === search[0]);
  const normalizedSearch = isRepeated ? search[0] : search;
  const currentItemIndex = currentItem ? items.indexOf(currentItem) : -1;
  let wrappedItems = wrapArray(items, Math.max(currentItemIndex, 0));
  const excludeCurrentItem = normalizedSearch.length === 1;
  if (excludeCurrentItem)
    wrappedItems = wrappedItems.filter((v) => v !== currentItem);
  const nextItem = wrappedItems.find((item) => item.textValue.toLowerCase().startsWith(normalizedSearch.toLowerCase()));
  return nextItem !== currentItem ? nextItem : undefined;
}
function wrapArray(array, startIndex) {
  return array.map((_, index2) => array[(startIndex + index2) % array.length]);
}
var Root22 = Select;
var Trigger = SelectTrigger;
var Value = SelectValue;
var Icon = SelectIcon;
var Portal2 = SelectPortal;
var Content2 = SelectContent;
var Viewport = SelectViewport;
var Group = SelectGroup;
var Label = SelectLabel;
var Item = SelectItem;
var ItemText = SelectItemText;
var ItemIndicator = SelectItemIndicator;
var ScrollUpButton = SelectScrollUpButton;
var ScrollDownButton = SelectScrollDownButton;
var Separator = SelectSeparator;

// src/shadcn-ui/components/select.tsx
import clsx3 from "clsx";
import { jsx as jsx15, jsxs as jsxs3 } from "react/jsx-runtime";
function Select2({ ...props }) {
  return /* @__PURE__ */ jsx15(Root22, {
    "data-slot": "select",
    ...props
  });
}
function SelectGroup2({ ...props }) {
  return /* @__PURE__ */ jsx15(Group, {
    "data-slot": "select-group",
    ...props
  });
}
function SelectValue2({ ...props }) {
  return /* @__PURE__ */ jsx15(Value, {
    "data-slot": "select-value",
    ...props
  });
}
function SelectTrigger2({
  className,
  size: size4 = "default",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs3(Trigger, {
    "data-slot": "select-trigger",
    "data-size": size4,
    className: clsx3("flex w-fit items-center justify-between gap-2 whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[size=default]:h-9 data-[size=sm]:h-8 data-[placeholder]:text-muted-foreground *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:hover:bg-input/50 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx15(Icon, {
        asChild: true,
        children: /* @__PURE__ */ jsx15(SvgIcon, {
          iconId: "ChevronDown",
          className: "size-4 opacity-50"
        })
      })
    ]
  });
}
function SelectContent2({ className, children, position = "popper", align = "center", ...props }) {
  return /* @__PURE__ */ jsx15(Portal2, {
    children: /* @__PURE__ */ jsxs3(Content2, {
      "data-slot": "select-content",
      className: clsx3("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=closed]:animate-out data-[state=open]:animate-in", position === "popper" && "data-[side=left]:-translate-x-1 data-[side=top]:-translate-y-1 data-[side=right]:translate-x-1 data-[side=bottom]:translate-y-1", className),
      position,
      align,
      ...props,
      children: [
        /* @__PURE__ */ jsx15(SelectScrollUpButton2, {}),
        /* @__PURE__ */ jsx15(Viewport, {
          className: clsx3("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
          children
        }),
        /* @__PURE__ */ jsx15(SelectScrollDownButton2, {})
      ]
    })
  });
}
function SelectLabel2({ className, ...props }) {
  return /* @__PURE__ */ jsx15(Label, {
    "data-slot": "select-label",
    className: clsx3("px-2 py-1.5 text-muted-foreground text-xs", className),
    ...props
  });
}
function SelectItem2({ className, children, ...props }) {
  return /* @__PURE__ */ jsxs3(Item, {
    "data-slot": "select-item",
    className: clsx3("relative flex w-full cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx15("span", {
        className: "absolute right-2 flex size-3.5 items-center justify-center",
        children: /* @__PURE__ */ jsx15(ItemIndicator, {
          children: /* @__PURE__ */ jsx15(SvgIcon, {
            iconId: "Check",
            className: "size-4"
          })
        })
      }),
      /* @__PURE__ */ jsx15(ItemText, {
        children
      })
    ]
  });
}
function SelectSeparator2({ className, ...props }) {
  return /* @__PURE__ */ jsx15(Separator, {
    "data-slot": "select-separator",
    className: clsx3("-mx-1 pointer-events-none my-1 h-px bg-border", className),
    ...props
  });
}
function SelectScrollUpButton2({ className, ...props }) {
  return /* @__PURE__ */ jsx15(ScrollUpButton, {
    "data-slot": "select-scroll-up-button",
    className: clsx3("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx15(SvgIcon, {
      iconId: "ChevronUp",
      className: "size-4"
    })
  });
}
function SelectScrollDownButton2({ className, ...props }) {
  return /* @__PURE__ */ jsx15(ScrollDownButton, {
    "data-slot": "select-scroll-down-button",
    className: clsx3("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx15(SvgIcon, {
      iconId: "ChevronDown",
      className: "size-4"
    })
  });
}

// src/vibrant/components/data-pagination.tsx
import { jsx as jsx16, jsxs as jsxs4, Fragment as Fragment7 } from "react/jsx-runtime";
function DataPagination({ currentRecords, pagination, totalRecords, baseRoute, routeParams = {}, perPageOptions = [25, 50, 100, 200], fetcher, isLoading = false, loadingIcon = true }) {
  const buildUrl = (params) => {
    const urlParams = new URLSearchParams;
    Object.entries(routeParams).forEach(([key, value]) => {
      if (value)
        urlParams.set(key, value);
    });
    Object.entries(params).forEach(([key, value]) => {
      urlParams.set(key, value);
    });
    const baseUrl = baseRoute;
    return `${baseUrl}?${urlParams.toString()}`;
  };
  const navigateToUrl = (url) => {
    try {
      fetcher.load(url);
      window.history.pushState({}, "", url);
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };
  const handleLimitChange = (newLimit) => {
    const url = buildUrl({
      limit: newLimit.toString(),
      page: "1"
    });
    navigateToUrl(url);
  };
  const handlePageChange = (newPage) => {
    const url = buildUrl({
      page: newPage.toString(),
      limit: pagination.limit.toString()
    });
    navigateToUrl(url);
  };
  return /* @__PURE__ */ jsx16("div", {
    className: "border-b p-4",
    children: /* @__PURE__ */ jsxs4("div", {
      className: "flex items-center justify-between",
      children: [
        /* @__PURE__ */ jsxs4("div", {
          className: "flex items-center gap-2",
          children: [
            /* @__PURE__ */ jsx16(PaginationControls, {
              currentPage: pagination.page,
              hasNextPage: pagination.hasNextPage,
              hasPreviousPage: pagination.hasPreviousPage,
              onPageChange: handlePageChange,
              disabled: isLoading
            }),
            isLoading && loadingIcon && /* @__PURE__ */ jsx16(SvgIcon, {
              iconId: "LoaderCircle",
              className: "h-4 w-4 animate-spin text-muted-foreground"
            })
          ]
        }),
        /* @__PURE__ */ jsxs4("div", {
          className: "flex items-center gap-4",
          children: [
            /* @__PURE__ */ jsx16(RowsPerPageSelector, {
              currentLimit: pagination.limit,
              options: perPageOptions,
              onLimitChange: handleLimitChange,
              disabled: isLoading
            }),
            /* @__PURE__ */ jsx16(RecordCountDisplay, {
              currentPage: pagination.page,
              currentRecords,
              hasNextPage: pagination.hasNextPage,
              totalRecords
            })
          ]
        })
      ]
    })
  });
}
function RowsPerPageSelector({ currentLimit, options: options2, onLimitChange, disabled = false }) {
  return /* @__PURE__ */ jsxs4("div", {
    className: "flex items-center gap-2",
    children: [
      /* @__PURE__ */ jsx16("label", {
        htmlFor: "rows-per-page",
        className: "font-medium text-sm",
        children: "Rows per page:"
      }),
      /* @__PURE__ */ jsxs4(Select2, {
        value: currentLimit.toString(),
        onValueChange: (value) => {
          onLimitChange(Number.parseInt(value, 10));
        },
        disabled,
        children: [
          /* @__PURE__ */ jsx16(SelectTrigger2, {
            className: "w-20",
            children: /* @__PURE__ */ jsx16(SelectValue2, {})
          }),
          /* @__PURE__ */ jsx16(SelectContent2, {
            children: options2.map((option) => /* @__PURE__ */ jsx16(SelectItem2, {
              value: option.toString(),
              children: option
            }, option))
          })
        ]
      })
    ]
  });
}
function RecordCountDisplay({ currentPage, currentRecords, hasNextPage, totalRecords }) {
  if (currentRecords === 0) {
    return null;
  }
  if (totalRecords !== undefined) {
    const currentLimit = currentRecords;
    const start = (currentPage - 1) * currentLimit + 1;
    const end = Math.min(currentPage * currentLimit, totalRecords);
    return /* @__PURE__ */ jsxs4("p", {
      className: "text-muted-foreground text-sm",
      children: [
        "Showing ",
        start,
        "-",
        end,
        " of ",
        totalRecords.toLocaleString(),
        " records"
      ]
    });
  }
  return /* @__PURE__ */ jsxs4("p", {
    className: "text-muted-foreground text-sm",
    children: [
      "Page ",
      currentPage,
      " • ",
      currentRecords,
      " records ",
      hasNextPage ? "(more available)" : ""
    ]
  });
}
function PaginationControls({ currentPage, hasNextPage, hasPreviousPage, onPageChange, disabled = false }) {
  if (!hasPreviousPage && !hasNextPage) {
    return null;
  }
  const handlePageClick = (page, e) => {
    e.preventDefault();
    if (!disabled && page !== currentPage) {
      onPageChange(page);
    }
  };
  const handleNavigationClick = (page, e) => {
    e.preventDefault();
    if (!disabled) {
      onPageChange(page);
    }
  };
  return /* @__PURE__ */ jsx16("div", {
    className: "",
    children: /* @__PURE__ */ jsx16(Pagination, {
      children: /* @__PURE__ */ jsxs4(PaginationContent, {
        children: [
          /* @__PURE__ */ jsx16(PaginationItem, {
            children: /* @__PURE__ */ jsx16(PaginationPrevious, {
              href: "#",
              className: hasPreviousPage ? "" : "pointer-events-none opacity-50",
              onClick: (e) => handleNavigationClick(currentPage - 1, e)
            })
          }),
          currentPage > 2 && /* @__PURE__ */ jsxs4(Fragment7, {
            children: [
              /* @__PURE__ */ jsx16(PaginationItem, {
                children: /* @__PURE__ */ jsx16(PaginationLink, {
                  href: "#",
                  onClick: (e) => handlePageClick(1, e),
                  children: "1"
                })
              }),
              currentPage > 3 && /* @__PURE__ */ jsx16(PaginationItem, {
                children: /* @__PURE__ */ jsx16(PaginationEllipsis, {})
              })
            ]
          }),
          hasPreviousPage && /* @__PURE__ */ jsx16(PaginationItem, {
            children: /* @__PURE__ */ jsx16(PaginationLink, {
              href: "#",
              onClick: (e) => handlePageClick(currentPage - 1, e),
              children: currentPage - 1
            })
          }),
          /* @__PURE__ */ jsx16(PaginationItem, {
            children: /* @__PURE__ */ jsx16(PaginationLink, {
              href: "#",
              isActive: true,
              children: currentPage
            })
          }),
          hasNextPage && /* @__PURE__ */ jsx16(PaginationItem, {
            children: /* @__PURE__ */ jsx16(PaginationLink, {
              href: "#",
              onClick: (e) => handlePageClick(currentPage + 1, e),
              children: currentPage + 1
            })
          }),
          hasNextPage && /* @__PURE__ */ jsx16(PaginationItem, {
            children: /* @__PURE__ */ jsx16(PaginationEllipsis, {})
          }),
          /* @__PURE__ */ jsx16(PaginationItem, {
            children: /* @__PURE__ */ jsx16(PaginationNext, {
              href: "#",
              className: hasNextPage ? "" : "pointer-events-none opacity-50",
              onClick: (e) => handleNavigationClick(currentPage + 1, e)
            })
          })
        ]
      })
    })
  });
}

// src/vibrant/components/input-otp.tsx
import clsx4 from "clsx";
import { unstable_OneTimePasswordField as OneTimePasswordFieldPrimitive } from "radix-ui";
import { jsx as jsx17 } from "react/jsx-runtime";
function InputOtp({ value, onValueChange, containerClassName, children, ...props }) {
  return /* @__PURE__ */ jsx17(OneTimePasswordFieldPrimitive.Root, {
    "data-slot": "input-otp",
    className: containerClassName,
    value,
    onValueChange,
    ...props,
    children
  });
}
function InputOtpGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx17("div", {
    "data-slot": "input-otp-group",
    className: clsx4("flex items-center gap-2", className),
    ...props
  });
}
function InputOtpSlot({ className, index: index2, ...props }) {
  return /* @__PURE__ */ jsx17(OneTimePasswordFieldPrimitive.Input, {
    "data-slot": "input-otp-slot",
    "data-index": index2,
    className: clsx4("relative flex h-10 w-10 items-center justify-center border-2 border-input bg-background text-sm transition-all dark:border", "rounded-md", "caret-transparent selection:bg-transparent selection:text-foreground", "focus-visible:z-10 focus-visible:border-ring focus-visible:outline-none", "disabled:cursor-not-allowed disabled:opacity-50", "aria-invalid:border-destructive", "text-center font-medium", className),
    ...props
  });
}
function InputOtpHiddenInput(props) {
  return /* @__PURE__ */ jsx17(OneTimePasswordFieldPrimitive.HiddenInput, {
    "data-slot": "input-otp-hidden",
    ...props
  });
}

// src/vibrant/@types/lucide-sprites.ts
var iconNames = [
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "BadgeCheck",
  "Calendar",
  "Check",
  "ChevronsDownUp",
  "ChevronsUpDown",
  "ChevronDown",
  "ChevronLeft",
  "ChevronRight",
  "ChevronUp",
  "CircleAlert",
  "CircleCheck",
  "CircleQuestionMark",
  "CircleSmall",
  "Circle",
  "Dot",
  "EllipsisVertical",
  "Ellipsis",
  "House",
  "Info",
  "LoaderCircle",
  "Loader",
  "Moon",
  "PanelBottom",
  "PanelLeft",
  "PanelRight",
  "PanelTop",
  "Search",
  "Slash",
  "Sun",
  "Trash2",
  "UserRound",
  "X"
];
// src/vibrant/components/link.tsx
import React34 from "react";
import { Link as RouterLink } from "react-router";
import { jsx as jsx18 } from "react/jsx-runtime";
var Link = React34.forwardRef(function Link2(props, ref) {
  return /* @__PURE__ */ jsx18(RouterLink, {
    ...props,
    to: props.href,
    ref
  });
});
// src/shadcn-ui/examples/examples-page.tsx
import { useId as useId2 } from "react";

// src/images/SpriteIconProvider.tsx
import { createContext as createContext6, useContext as useContext4 } from "react";
import { jsx as jsx19 } from "react/jsx-runtime";
var SpriteIconContext = createContext6(null);

// src/images/SpriteIcon.tsx
import { jsx as jsx20 } from "react/jsx-runtime";
function SpriteIcon({ spriteUrl, iconId, ...props }) {
  return /* @__PURE__ */ jsx20("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    ...props,
    children: iconId ? /* @__PURE__ */ jsx20("use", {
      href: `${spriteUrl}#${iconId}`
    }) : /* @__PURE__ */ jsx20("use", {
      href: `${spriteUrl}`
    })
  });
}

// src/impetus/theme/ThemeSwitch.tsx
import { SpriteIcon as SpriteIcon2 } from "@ycore/componentry/images";
import clsx5 from "clsx";
import { useEffect as useEffect14, useState as useState13 } from "react";

// src/impetus/theme/useTheme.tsx
import { useTheme as useNextTheme } from "next-themes";
var useTheme = useNextTheme;

// src/impetus/theme/ThemeSwitch.tsx
import { jsx as jsx21 } from "react/jsx-runtime";
var THEME_OPTIONS = { theme: { light: "light", dark: "dark" } };
var ThemeSwitchButton = ({ themeContext, theme, spriteUrl, className, classTheme }) => {
  const [mounted, setMounted] = useState13(false);
  useEffect14(() => setMounted(true), []);
  const resolvedTheme = themeContext?.resolvedTheme;
  const setTheme = themeContext?.setTheme;
  if (!mounted)
    return null;
  return /* @__PURE__ */ jsx21("button", {
    type: "button",
    className: clsx5("size-5 hover:animate-rotate", classTheme),
    onClick: (e) => {
      if (!setTheme)
        return;
      setTheme(resolvedTheme === theme.theme.dark ? theme.theme.light : theme.theme.dark);
      e.preventDefault();
      e.stopPropagation();
    },
    "aria-label": "theme switch",
    children: resolvedTheme === theme.theme.dark ? /* @__PURE__ */ jsx21(SpriteIcon2, {
      spriteUrl,
      iconId: "Moon",
      className: clsx5("size-5", className)
    }) : /* @__PURE__ */ jsx21(SpriteIcon2, {
      spriteUrl,
      iconId: "Sun",
      className: clsx5("size-5", className)
    })
  });
};
var ThemeSwitch = ({ theme = THEME_OPTIONS, spriteUrl, className, classTheme, children }) => {
  const nextThemeContext = useTheme();
  const themeContext = nextThemeContext ? { resolvedTheme: nextThemeContext.resolvedTheme, setTheme: nextThemeContext.setTheme } : null;
  if (children) {
    return children({ themeContext, theme, spriteUrl, className, classTheme });
  }
  return /* @__PURE__ */ jsx21(ThemeSwitchButton, {
    themeContext,
    theme,
    spriteUrl,
    className,
    classTheme
  });
};

// ../../node_modules/@radix-ui/react-tooltip/dist/index.mjs
import * as React36 from "react";

// ../../node_modules/@radix-ui/react-presence/dist/index.mjs
import * as React25 from "react";
import * as React35 from "react";
"use client";
function useStateMachine(initialState, machine) {
  return React35.useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState ?? state;
  }, initialState);
}
var Presence = (props) => {
  const { present, children } = props;
  const presence = usePresence(present);
  const child = typeof children === "function" ? children({ present: presence.isPresent }) : React25.Children.only(children);
  const ref = useComposedRefs(presence.ref, getElementRef2(child));
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? React25.cloneElement(child, { ref }) : null;
};
Presence.displayName = "Presence";
function usePresence(present) {
  const [node, setNode] = React25.useState();
  const stylesRef = React25.useRef(null);
  const prevPresentRef = React25.useRef(present);
  const prevAnimationNameRef = React25.useRef("none");
  const initialState = present ? "mounted" : "unmounted";
  const [state, send] = useStateMachine(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  React25.useEffect(() => {
    const currentAnimationName = getAnimationName(stylesRef.current);
    prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
  }, [state]);
  useLayoutEffect2(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = getAnimationName(styles);
      if (present) {
        send("MOUNT");
      } else if (currentAnimationName === "none" || styles?.display === "none") {
        send("UNMOUNT");
      } else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating) {
          send("ANIMATION_OUT");
        } else {
          send("UNMOUNT");
        }
      }
      prevPresentRef.current = present;
    }
  }, [present, send]);
  useLayoutEffect2(() => {
    if (node) {
      let timeoutId;
      const ownerWindow = node.ownerDocument.defaultView ?? window;
      const handleAnimationEnd = (event) => {
        const currentAnimationName = getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(CSS.escape(event.animationName));
        if (event.target === node && isCurrentAnimation) {
          send("ANIMATION_END");
          if (!prevPresentRef.current) {
            const currentFillMode = node.style.animationFillMode;
            node.style.animationFillMode = "forwards";
            timeoutId = ownerWindow.setTimeout(() => {
              if (node.style.animationFillMode === "forwards") {
                node.style.animationFillMode = currentFillMode;
              }
            });
          }
        }
      };
      const handleAnimationStart = (event) => {
        if (event.target === node) {
          prevAnimationNameRef.current = getAnimationName(stylesRef.current);
        }
      };
      node.addEventListener("animationstart", handleAnimationStart);
      node.addEventListener("animationcancel", handleAnimationEnd);
      node.addEventListener("animationend", handleAnimationEnd);
      return () => {
        ownerWindow.clearTimeout(timeoutId);
        node.removeEventListener("animationstart", handleAnimationStart);
        node.removeEventListener("animationcancel", handleAnimationEnd);
        node.removeEventListener("animationend", handleAnimationEnd);
      };
    } else {
      send("ANIMATION_END");
    }
  }, [node, send]);
  return {
    isPresent: ["mounted", "unmountSuspended"].includes(state),
    ref: React25.useCallback((node2) => {
      stylesRef.current = node2 ? getComputedStyle(node2) : null;
      setNode(node2);
    }, [])
  };
}
function getAnimationName(styles) {
  return styles?.animationName || "none";
}
function getElementRef2(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// ../../node_modules/@radix-ui/react-tooltip/dist/index.mjs
import { jsx as jsx23, jsxs as jsxs5 } from "react/jsx-runtime";
"use client";
var [createTooltipContext, createTooltipScope] = createContextScope("Tooltip", [
  createPopperScope
]);
var usePopperScope2 = createPopperScope();
var PROVIDER_NAME = "TooltipProvider";
var DEFAULT_DELAY_DURATION = 700;
var TOOLTIP_OPEN = "tooltip.open";
var [TooltipProviderContextProvider, useTooltipProviderContext] = createTooltipContext(PROVIDER_NAME);
var TooltipProvider = (props) => {
  const {
    __scopeTooltip,
    delayDuration = DEFAULT_DELAY_DURATION,
    skipDelayDuration = 300,
    disableHoverableContent = false,
    children
  } = props;
  const isOpenDelayedRef = React36.useRef(true);
  const isPointerInTransitRef = React36.useRef(false);
  const skipDelayTimerRef = React36.useRef(0);
  React36.useEffect(() => {
    const skipDelayTimer = skipDelayTimerRef.current;
    return () => window.clearTimeout(skipDelayTimer);
  }, []);
  return /* @__PURE__ */ jsx23(TooltipProviderContextProvider, {
    scope: __scopeTooltip,
    isOpenDelayedRef,
    delayDuration,
    onOpen: React36.useCallback(() => {
      window.clearTimeout(skipDelayTimerRef.current);
      isOpenDelayedRef.current = false;
    }, []),
    onClose: React36.useCallback(() => {
      window.clearTimeout(skipDelayTimerRef.current);
      skipDelayTimerRef.current = window.setTimeout(() => isOpenDelayedRef.current = true, skipDelayDuration);
    }, [skipDelayDuration]),
    isPointerInTransitRef,
    onPointerInTransitChange: React36.useCallback((inTransit) => {
      isPointerInTransitRef.current = inTransit;
    }, []),
    disableHoverableContent,
    children
  });
};
TooltipProvider.displayName = PROVIDER_NAME;
var TOOLTIP_NAME = "Tooltip";
var [TooltipContextProvider, useTooltipContext] = createTooltipContext(TOOLTIP_NAME);
var Tooltip = (props) => {
  const {
    __scopeTooltip,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    disableHoverableContent: disableHoverableContentProp,
    delayDuration: delayDurationProp
  } = props;
  const providerContext = useTooltipProviderContext(TOOLTIP_NAME, props.__scopeTooltip);
  const popperScope = usePopperScope2(__scopeTooltip);
  const [trigger, setTrigger] = React36.useState(null);
  const contentId = useId();
  const openTimerRef = React36.useRef(0);
  const disableHoverableContent = disableHoverableContentProp ?? providerContext.disableHoverableContent;
  const delayDuration = delayDurationProp ?? providerContext.delayDuration;
  const wasOpenDelayedRef = React36.useRef(false);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: (open2) => {
      if (open2) {
        providerContext.onOpen();
        document.dispatchEvent(new CustomEvent(TOOLTIP_OPEN));
      } else {
        providerContext.onClose();
      }
      onOpenChange?.(open2);
    },
    caller: TOOLTIP_NAME
  });
  const stateAttribute = React36.useMemo(() => {
    return open ? wasOpenDelayedRef.current ? "delayed-open" : "instant-open" : "closed";
  }, [open]);
  const handleOpen = React36.useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    openTimerRef.current = 0;
    wasOpenDelayedRef.current = false;
    setOpen(true);
  }, [setOpen]);
  const handleClose = React36.useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    openTimerRef.current = 0;
    setOpen(false);
  }, [setOpen]);
  const handleDelayedOpen = React36.useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    openTimerRef.current = window.setTimeout(() => {
      wasOpenDelayedRef.current = true;
      setOpen(true);
      openTimerRef.current = 0;
    }, delayDuration);
  }, [delayDuration, setOpen]);
  React36.useEffect(() => {
    return () => {
      if (openTimerRef.current) {
        window.clearTimeout(openTimerRef.current);
        openTimerRef.current = 0;
      }
    };
  }, []);
  return /* @__PURE__ */ jsx23(Root2, { ...popperScope, children: /* @__PURE__ */ jsx23(TooltipContextProvider, {
    scope: __scopeTooltip,
    contentId,
    open,
    stateAttribute,
    trigger,
    onTriggerChange: setTrigger,
    onTriggerEnter: React36.useCallback(() => {
      if (providerContext.isOpenDelayedRef.current)
        handleDelayedOpen();
      else
        handleOpen();
    }, [providerContext.isOpenDelayedRef, handleDelayedOpen, handleOpen]),
    onTriggerLeave: React36.useCallback(() => {
      if (disableHoverableContent) {
        handleClose();
      } else {
        window.clearTimeout(openTimerRef.current);
        openTimerRef.current = 0;
      }
    }, [handleClose, disableHoverableContent]),
    onOpen: handleOpen,
    onClose: handleClose,
    disableHoverableContent,
    children
  }) });
};
Tooltip.displayName = TOOLTIP_NAME;
var TRIGGER_NAME2 = "TooltipTrigger";
var TooltipTrigger = React36.forwardRef((props, forwardedRef) => {
  const { __scopeTooltip, ...triggerProps } = props;
  const context = useTooltipContext(TRIGGER_NAME2, __scopeTooltip);
  const providerContext = useTooltipProviderContext(TRIGGER_NAME2, __scopeTooltip);
  const popperScope = usePopperScope2(__scopeTooltip);
  const ref = React36.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref, context.onTriggerChange);
  const isPointerDownRef = React36.useRef(false);
  const hasPointerMoveOpenedRef = React36.useRef(false);
  const handlePointerUp = React36.useCallback(() => isPointerDownRef.current = false, []);
  React36.useEffect(() => {
    return () => document.removeEventListener("pointerup", handlePointerUp);
  }, [handlePointerUp]);
  return /* @__PURE__ */ jsx23(Anchor, { asChild: true, ...popperScope, children: /* @__PURE__ */ jsx23(Primitive.button, {
    "aria-describedby": context.open ? context.contentId : undefined,
    "data-state": context.stateAttribute,
    ...triggerProps,
    ref: composedRefs,
    onPointerMove: composeEventHandlers(props.onPointerMove, (event) => {
      if (event.pointerType === "touch")
        return;
      if (!hasPointerMoveOpenedRef.current && !providerContext.isPointerInTransitRef.current) {
        context.onTriggerEnter();
        hasPointerMoveOpenedRef.current = true;
      }
    }),
    onPointerLeave: composeEventHandlers(props.onPointerLeave, () => {
      context.onTriggerLeave();
      hasPointerMoveOpenedRef.current = false;
    }),
    onPointerDown: composeEventHandlers(props.onPointerDown, () => {
      if (context.open) {
        context.onClose();
      }
      isPointerDownRef.current = true;
      document.addEventListener("pointerup", handlePointerUp, { once: true });
    }),
    onFocus: composeEventHandlers(props.onFocus, () => {
      if (!isPointerDownRef.current)
        context.onOpen();
    }),
    onBlur: composeEventHandlers(props.onBlur, context.onClose),
    onClick: composeEventHandlers(props.onClick, context.onClose)
  }) });
});
TooltipTrigger.displayName = TRIGGER_NAME2;
var PORTAL_NAME3 = "TooltipPortal";
var [PortalProvider, usePortalContext] = createTooltipContext(PORTAL_NAME3, {
  forceMount: undefined
});
var TooltipPortal = (props) => {
  const { __scopeTooltip, forceMount, children, container } = props;
  const context = useTooltipContext(PORTAL_NAME3, __scopeTooltip);
  return /* @__PURE__ */ jsx23(PortalProvider, { scope: __scopeTooltip, forceMount, children: /* @__PURE__ */ jsx23(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsx23(Portal, { asChild: true, container, children }) }) });
};
TooltipPortal.displayName = PORTAL_NAME3;
var CONTENT_NAME3 = "TooltipContent";
var TooltipContent = React36.forwardRef((props, forwardedRef) => {
  const portalContext = usePortalContext(CONTENT_NAME3, props.__scopeTooltip);
  const { forceMount = portalContext.forceMount, side = "top", ...contentProps } = props;
  const context = useTooltipContext(CONTENT_NAME3, props.__scopeTooltip);
  return /* @__PURE__ */ jsx23(Presence, { present: forceMount || context.open, children: context.disableHoverableContent ? /* @__PURE__ */ jsx23(TooltipContentImpl, { side, ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ jsx23(TooltipContentHoverable, { side, ...contentProps, ref: forwardedRef }) });
});
var TooltipContentHoverable = React36.forwardRef((props, forwardedRef) => {
  const context = useTooltipContext(CONTENT_NAME3, props.__scopeTooltip);
  const providerContext = useTooltipProviderContext(CONTENT_NAME3, props.__scopeTooltip);
  const ref = React36.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const [pointerGraceArea, setPointerGraceArea] = React36.useState(null);
  const { trigger, onClose } = context;
  const content = ref.current;
  const { onPointerInTransitChange } = providerContext;
  const handleRemoveGraceArea = React36.useCallback(() => {
    setPointerGraceArea(null);
    onPointerInTransitChange(false);
  }, [onPointerInTransitChange]);
  const handleCreateGraceArea = React36.useCallback((event, hoverTarget) => {
    const currentTarget = event.currentTarget;
    const exitPoint = { x: event.clientX, y: event.clientY };
    const exitSide = getExitSideFromRect(exitPoint, currentTarget.getBoundingClientRect());
    const paddedExitPoints = getPaddedExitPoints(exitPoint, exitSide);
    const hoverTargetPoints = getPointsFromRect(hoverTarget.getBoundingClientRect());
    const graceArea = getHull([...paddedExitPoints, ...hoverTargetPoints]);
    setPointerGraceArea(graceArea);
    onPointerInTransitChange(true);
  }, [onPointerInTransitChange]);
  React36.useEffect(() => {
    return () => handleRemoveGraceArea();
  }, [handleRemoveGraceArea]);
  React36.useEffect(() => {
    if (trigger && content) {
      const handleTriggerLeave = (event) => handleCreateGraceArea(event, content);
      const handleContentLeave = (event) => handleCreateGraceArea(event, trigger);
      trigger.addEventListener("pointerleave", handleTriggerLeave);
      content.addEventListener("pointerleave", handleContentLeave);
      return () => {
        trigger.removeEventListener("pointerleave", handleTriggerLeave);
        content.removeEventListener("pointerleave", handleContentLeave);
      };
    }
  }, [trigger, content, handleCreateGraceArea, handleRemoveGraceArea]);
  React36.useEffect(() => {
    if (pointerGraceArea) {
      const handleTrackPointerGrace = (event) => {
        const target = event.target;
        const pointerPosition = { x: event.clientX, y: event.clientY };
        const hasEnteredTarget = trigger?.contains(target) || content?.contains(target);
        const isPointerOutsideGraceArea = !isPointInPolygon(pointerPosition, pointerGraceArea);
        if (hasEnteredTarget) {
          handleRemoveGraceArea();
        } else if (isPointerOutsideGraceArea) {
          handleRemoveGraceArea();
          onClose();
        }
      };
      document.addEventListener("pointermove", handleTrackPointerGrace);
      return () => document.removeEventListener("pointermove", handleTrackPointerGrace);
    }
  }, [trigger, content, pointerGraceArea, onClose, handleRemoveGraceArea]);
  return /* @__PURE__ */ jsx23(TooltipContentImpl, { ...props, ref: composedRefs });
});
var [VisuallyHiddenContentContextProvider, useVisuallyHiddenContentContext] = createTooltipContext(TOOLTIP_NAME, { isInside: false });
var Slottable = createSlottable("TooltipContent");
var TooltipContentImpl = React36.forwardRef((props, forwardedRef) => {
  const {
    __scopeTooltip,
    children,
    "aria-label": ariaLabel,
    onEscapeKeyDown,
    onPointerDownOutside,
    ...contentProps
  } = props;
  const context = useTooltipContext(CONTENT_NAME3, __scopeTooltip);
  const popperScope = usePopperScope2(__scopeTooltip);
  const { onClose } = context;
  React36.useEffect(() => {
    document.addEventListener(TOOLTIP_OPEN, onClose);
    return () => document.removeEventListener(TOOLTIP_OPEN, onClose);
  }, [onClose]);
  React36.useEffect(() => {
    if (context.trigger) {
      const handleScroll2 = (event) => {
        const target = event.target;
        if (target?.contains(context.trigger))
          onClose();
      };
      window.addEventListener("scroll", handleScroll2, { capture: true });
      return () => window.removeEventListener("scroll", handleScroll2, { capture: true });
    }
  }, [context.trigger, onClose]);
  return /* @__PURE__ */ jsx23(DismissableLayer, {
    asChild: true,
    disableOutsidePointerEvents: false,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside: (event) => event.preventDefault(),
    onDismiss: onClose,
    children: /* @__PURE__ */ jsxs5(Content, {
      "data-state": context.stateAttribute,
      ...popperScope,
      ...contentProps,
      ref: forwardedRef,
      style: {
        ...contentProps.style,
        ...{
          "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
          "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
          "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
        }
      },
      children: [
        /* @__PURE__ */ jsx23(Slottable, { children }),
        /* @__PURE__ */ jsx23(VisuallyHiddenContentContextProvider, { scope: __scopeTooltip, isInside: true, children: /* @__PURE__ */ jsx23(Root3, { id: context.contentId, role: "tooltip", children: ariaLabel || children }) })
      ]
    })
  });
});
TooltipContent.displayName = CONTENT_NAME3;
var ARROW_NAME3 = "TooltipArrow";
var TooltipArrow = React36.forwardRef((props, forwardedRef) => {
  const { __scopeTooltip, ...arrowProps } = props;
  const popperScope = usePopperScope2(__scopeTooltip);
  const visuallyHiddenContentContext = useVisuallyHiddenContentContext(ARROW_NAME3, __scopeTooltip);
  return visuallyHiddenContentContext.isInside ? null : /* @__PURE__ */ jsx23(Arrow2, { ...popperScope, ...arrowProps, ref: forwardedRef });
});
TooltipArrow.displayName = ARROW_NAME3;
function getExitSideFromRect(point, rect) {
  const top = Math.abs(rect.top - point.y);
  const bottom = Math.abs(rect.bottom - point.y);
  const right = Math.abs(rect.right - point.x);
  const left = Math.abs(rect.left - point.x);
  switch (Math.min(top, bottom, right, left)) {
    case left:
      return "left";
    case right:
      return "right";
    case top:
      return "top";
    case bottom:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function getPaddedExitPoints(exitPoint, exitSide, padding = 5) {
  const paddedExitPoints = [];
  switch (exitSide) {
    case "top":
      paddedExitPoints.push({ x: exitPoint.x - padding, y: exitPoint.y + padding }, { x: exitPoint.x + padding, y: exitPoint.y + padding });
      break;
    case "bottom":
      paddedExitPoints.push({ x: exitPoint.x - padding, y: exitPoint.y - padding }, { x: exitPoint.x + padding, y: exitPoint.y - padding });
      break;
    case "left":
      paddedExitPoints.push({ x: exitPoint.x + padding, y: exitPoint.y - padding }, { x: exitPoint.x + padding, y: exitPoint.y + padding });
      break;
    case "right":
      paddedExitPoints.push({ x: exitPoint.x - padding, y: exitPoint.y - padding }, { x: exitPoint.x - padding, y: exitPoint.y + padding });
      break;
  }
  return paddedExitPoints;
}
function getPointsFromRect(rect) {
  const { top, right, bottom, left } = rect;
  return [
    { x: left, y: top },
    { x: right, y: top },
    { x: right, y: bottom },
    { x: left, y: bottom }
  ];
}
function isPointInPolygon(point, polygon) {
  const { x, y } = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1;i < polygon.length; j = i++) {
    const ii = polygon[i];
    const jj = polygon[j];
    const xi = ii.x;
    const yi = ii.y;
    const xj = jj.x;
    const yj = jj.y;
    const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect)
      inside = !inside;
  }
  return inside;
}
function getHull(points) {
  const newPoints = points.slice();
  newPoints.sort((a, b) => {
    if (a.x < b.x)
      return -1;
    else if (a.x > b.x)
      return 1;
    else if (a.y < b.y)
      return -1;
    else if (a.y > b.y)
      return 1;
    else
      return 0;
  });
  return getHullPresorted(newPoints);
}
function getHullPresorted(points) {
  if (points.length <= 1)
    return points.slice();
  const upperHull = [];
  for (let i = 0;i < points.length; i++) {
    const p = points[i];
    while (upperHull.length >= 2) {
      const q = upperHull[upperHull.length - 1];
      const r = upperHull[upperHull.length - 2];
      if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x))
        upperHull.pop();
      else
        break;
    }
    upperHull.push(p);
  }
  upperHull.pop();
  const lowerHull = [];
  for (let i = points.length - 1;i >= 0; i--) {
    const p = points[i];
    while (lowerHull.length >= 2) {
      const q = lowerHull[lowerHull.length - 1];
      const r = lowerHull[lowerHull.length - 2];
      if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x))
        lowerHull.pop();
      else
        break;
    }
    lowerHull.push(p);
  }
  lowerHull.pop();
  if (upperHull.length === 1 && lowerHull.length === 1 && upperHull[0].x === lowerHull[0].x && upperHull[0].y === lowerHull[0].y) {
    return upperHull;
  } else {
    return upperHull.concat(lowerHull);
  }
}
var Provider = TooltipProvider;
var Root32 = Tooltip;
var Trigger2 = TooltipTrigger;
var Portal3 = TooltipPortal;
var Content22 = TooltipContent;
var Arrow22 = TooltipArrow;

// src/shadcn-ui/components/tooltip.tsx
import clsx6 from "clsx";
import { jsx as jsx25, jsxs as jsxs6 } from "react/jsx-runtime";
function TooltipProvider2({ delayDuration = 0, ...props }) {
  return /* @__PURE__ */ jsx25(Provider, {
    "data-slot": "tooltip-provider",
    delayDuration,
    ...props
  });
}
function Tooltip2({ ...props }) {
  return /* @__PURE__ */ jsx25(TooltipProvider2, {
    children: /* @__PURE__ */ jsx25(Root32, {
      "data-slot": "tooltip",
      ...props
    })
  });
}
function TooltipTrigger2({ ...props }) {
  return /* @__PURE__ */ jsx25(Trigger2, {
    "data-slot": "tooltip-trigger",
    ...props
  });
}
function TooltipContent2({ className, sideOffset = 0, children, ...props }) {
  return /* @__PURE__ */ jsx25(Portal3, {
    children: /* @__PURE__ */ jsxs6(Content22, {
      "data-slot": "tooltip-content",
      sideOffset,
      className: clsx6("fade-in-0 zoom-in-95 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) animate-in text-balance rounded-md bg-foreground px-3 py-1.5 text-background text-xs data-[state=closed]:animate-out", className),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx25(Arrow22, {
          className: "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground"
        })
      ]
    })
  });
}

// ../../node_modules/@radix-ui/react-accordion/dist/index.mjs
import React38 from "react";

// ../../node_modules/@radix-ui/react-collapsible/dist/index.mjs
import * as React37 from "react";
import { jsx as jsx26 } from "react/jsx-runtime";
"use client";
var COLLAPSIBLE_NAME = "Collapsible";
var [createCollapsibleContext, createCollapsibleScope] = createContextScope(COLLAPSIBLE_NAME);
var [CollapsibleProvider, useCollapsibleContext] = createCollapsibleContext(COLLAPSIBLE_NAME);
var Collapsible = React37.forwardRef((props, forwardedRef) => {
  const {
    __scopeCollapsible,
    open: openProp,
    defaultOpen,
    disabled,
    onOpenChange,
    ...collapsibleProps
  } = props;
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
    caller: COLLAPSIBLE_NAME
  });
  return /* @__PURE__ */ jsx26(CollapsibleProvider, {
    scope: __scopeCollapsible,
    disabled,
    contentId: useId(),
    open,
    onOpenToggle: React37.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
    children: /* @__PURE__ */ jsx26(Primitive.div, {
      "data-state": getState(open),
      "data-disabled": disabled ? "" : undefined,
      ...collapsibleProps,
      ref: forwardedRef
    })
  });
});
Collapsible.displayName = COLLAPSIBLE_NAME;
var TRIGGER_NAME3 = "CollapsibleTrigger";
var CollapsibleTrigger = React37.forwardRef((props, forwardedRef) => {
  const { __scopeCollapsible, ...triggerProps } = props;
  const context = useCollapsibleContext(TRIGGER_NAME3, __scopeCollapsible);
  return /* @__PURE__ */ jsx26(Primitive.button, {
    type: "button",
    "aria-controls": context.contentId,
    "aria-expanded": context.open || false,
    "data-state": getState(context.open),
    "data-disabled": context.disabled ? "" : undefined,
    disabled: context.disabled,
    ...triggerProps,
    ref: forwardedRef,
    onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
  });
});
CollapsibleTrigger.displayName = TRIGGER_NAME3;
var CONTENT_NAME4 = "CollapsibleContent";
var CollapsibleContent = React37.forwardRef((props, forwardedRef) => {
  const { forceMount, ...contentProps } = props;
  const context = useCollapsibleContext(CONTENT_NAME4, props.__scopeCollapsible);
  return /* @__PURE__ */ jsx26(Presence, { present: forceMount || context.open, children: ({ present }) => /* @__PURE__ */ jsx26(CollapsibleContentImpl, { ...contentProps, ref: forwardedRef, present }) });
});
CollapsibleContent.displayName = CONTENT_NAME4;
var CollapsibleContentImpl = React37.forwardRef((props, forwardedRef) => {
  const { __scopeCollapsible, present, children, ...contentProps } = props;
  const context = useCollapsibleContext(CONTENT_NAME4, __scopeCollapsible);
  const [isPresent, setIsPresent] = React37.useState(present);
  const ref = React37.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const heightRef = React37.useRef(0);
  const height = heightRef.current;
  const widthRef = React37.useRef(0);
  const width = widthRef.current;
  const isOpen = context.open || isPresent;
  const isMountAnimationPreventedRef = React37.useRef(isOpen);
  const originalStylesRef = React37.useRef(undefined);
  React37.useEffect(() => {
    const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
    return () => cancelAnimationFrame(rAF);
  }, []);
  useLayoutEffect2(() => {
    const node = ref.current;
    if (node) {
      originalStylesRef.current = originalStylesRef.current || {
        transitionDuration: node.style.transitionDuration,
        animationName: node.style.animationName
      };
      node.style.transitionDuration = "0s";
      node.style.animationName = "none";
      const rect = node.getBoundingClientRect();
      heightRef.current = rect.height;
      widthRef.current = rect.width;
      if (!isMountAnimationPreventedRef.current) {
        node.style.transitionDuration = originalStylesRef.current.transitionDuration;
        node.style.animationName = originalStylesRef.current.animationName;
      }
      setIsPresent(present);
    }
  }, [context.open, present]);
  return /* @__PURE__ */ jsx26(Primitive.div, {
    "data-state": getState(context.open),
    "data-disabled": context.disabled ? "" : undefined,
    id: context.contentId,
    hidden: !isOpen,
    ...contentProps,
    ref: composedRefs,
    style: {
      [`--radix-collapsible-content-height`]: height ? `${height}px` : undefined,
      [`--radix-collapsible-content-width`]: width ? `${width}px` : undefined,
      ...props.style
    },
    children: isOpen && children
  });
});
function getState(open) {
  return open ? "open" : "closed";
}
var Root5 = Collapsible;
var Trigger3 = CollapsibleTrigger;
var Content3 = CollapsibleContent;

// ../../node_modules/@radix-ui/react-accordion/dist/index.mjs
import { jsx as jsx27 } from "react/jsx-runtime";
"use client";
var ACCORDION_NAME = "Accordion";
var ACCORDION_KEYS = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"];
var [Collection2, useCollection2, createCollectionScope2] = createCollection(ACCORDION_NAME);
var [createAccordionContext, createAccordionScope] = createContextScope(ACCORDION_NAME, [
  createCollectionScope2,
  createCollapsibleScope
]);
var useCollapsibleScope = createCollapsibleScope();
var Accordion = React38.forwardRef((props, forwardedRef) => {
  const { type, ...accordionProps } = props;
  const singleProps = accordionProps;
  const multipleProps = accordionProps;
  return /* @__PURE__ */ jsx27(Collection2.Provider, { scope: props.__scopeAccordion, children: type === "multiple" ? /* @__PURE__ */ jsx27(AccordionImplMultiple, { ...multipleProps, ref: forwardedRef }) : /* @__PURE__ */ jsx27(AccordionImplSingle, { ...singleProps, ref: forwardedRef }) });
});
Accordion.displayName = ACCORDION_NAME;
var [AccordionValueProvider, useAccordionValueContext] = createAccordionContext(ACCORDION_NAME);
var [AccordionCollapsibleProvider, useAccordionCollapsibleContext] = createAccordionContext(ACCORDION_NAME, { collapsible: false });
var AccordionImplSingle = React38.forwardRef((props, forwardedRef) => {
  const {
    value: valueProp,
    defaultValue,
    onValueChange = () => {},
    collapsible = false,
    ...accordionSingleProps
  } = props;
  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue ?? "",
    onChange: onValueChange,
    caller: ACCORDION_NAME
  });
  return /* @__PURE__ */ jsx27(AccordionValueProvider, {
    scope: props.__scopeAccordion,
    value: React38.useMemo(() => value ? [value] : [], [value]),
    onItemOpen: setValue,
    onItemClose: React38.useCallback(() => collapsible && setValue(""), [collapsible, setValue]),
    children: /* @__PURE__ */ jsx27(AccordionCollapsibleProvider, { scope: props.__scopeAccordion, collapsible, children: /* @__PURE__ */ jsx27(AccordionImpl, { ...accordionSingleProps, ref: forwardedRef }) })
  });
});
var AccordionImplMultiple = React38.forwardRef((props, forwardedRef) => {
  const {
    value: valueProp,
    defaultValue,
    onValueChange = () => {},
    ...accordionMultipleProps
  } = props;
  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue ?? [],
    onChange: onValueChange,
    caller: ACCORDION_NAME
  });
  const handleItemOpen = React38.useCallback((itemValue) => setValue((prevValue = []) => [...prevValue, itemValue]), [setValue]);
  const handleItemClose = React38.useCallback((itemValue) => setValue((prevValue = []) => prevValue.filter((value2) => value2 !== itemValue)), [setValue]);
  return /* @__PURE__ */ jsx27(AccordionValueProvider, {
    scope: props.__scopeAccordion,
    value,
    onItemOpen: handleItemOpen,
    onItemClose: handleItemClose,
    children: /* @__PURE__ */ jsx27(AccordionCollapsibleProvider, { scope: props.__scopeAccordion, collapsible: true, children: /* @__PURE__ */ jsx27(AccordionImpl, { ...accordionMultipleProps, ref: forwardedRef }) })
  });
});
var [AccordionImplProvider, useAccordionContext] = createAccordionContext(ACCORDION_NAME);
var AccordionImpl = React38.forwardRef((props, forwardedRef) => {
  const { __scopeAccordion, disabled, dir, orientation = "vertical", ...accordionProps } = props;
  const accordionRef = React38.useRef(null);
  const composedRefs = useComposedRefs(accordionRef, forwardedRef);
  const getItems = useCollection2(__scopeAccordion);
  const direction = useDirection(dir);
  const isDirectionLTR = direction === "ltr";
  const handleKeyDown = composeEventHandlers(props.onKeyDown, (event) => {
    if (!ACCORDION_KEYS.includes(event.key))
      return;
    const target = event.target;
    const triggerCollection = getItems().filter((item) => !item.ref.current?.disabled);
    const triggerIndex = triggerCollection.findIndex((item) => item.ref.current === target);
    const triggerCount = triggerCollection.length;
    if (triggerIndex === -1)
      return;
    event.preventDefault();
    let nextIndex = triggerIndex;
    const homeIndex = 0;
    const endIndex = triggerCount - 1;
    const moveNext = () => {
      nextIndex = triggerIndex + 1;
      if (nextIndex > endIndex) {
        nextIndex = homeIndex;
      }
    };
    const movePrev = () => {
      nextIndex = triggerIndex - 1;
      if (nextIndex < homeIndex) {
        nextIndex = endIndex;
      }
    };
    switch (event.key) {
      case "Home":
        nextIndex = homeIndex;
        break;
      case "End":
        nextIndex = endIndex;
        break;
      case "ArrowRight":
        if (orientation === "horizontal") {
          if (isDirectionLTR) {
            moveNext();
          } else {
            movePrev();
          }
        }
        break;
      case "ArrowDown":
        if (orientation === "vertical") {
          moveNext();
        }
        break;
      case "ArrowLeft":
        if (orientation === "horizontal") {
          if (isDirectionLTR) {
            movePrev();
          } else {
            moveNext();
          }
        }
        break;
      case "ArrowUp":
        if (orientation === "vertical") {
          movePrev();
        }
        break;
    }
    const clampedIndex = nextIndex % triggerCount;
    triggerCollection[clampedIndex].ref.current?.focus();
  });
  return /* @__PURE__ */ jsx27(AccordionImplProvider, {
    scope: __scopeAccordion,
    disabled,
    direction: dir,
    orientation,
    children: /* @__PURE__ */ jsx27(Collection2.Slot, { scope: __scopeAccordion, children: /* @__PURE__ */ jsx27(Primitive.div, {
      ...accordionProps,
      "data-orientation": orientation,
      ref: composedRefs,
      onKeyDown: disabled ? undefined : handleKeyDown
    }) })
  });
});
var ITEM_NAME2 = "AccordionItem";
var [AccordionItemProvider, useAccordionItemContext] = createAccordionContext(ITEM_NAME2);
var AccordionItem = React38.forwardRef((props, forwardedRef) => {
  const { __scopeAccordion, value, ...accordionItemProps } = props;
  const accordionContext = useAccordionContext(ITEM_NAME2, __scopeAccordion);
  const valueContext = useAccordionValueContext(ITEM_NAME2, __scopeAccordion);
  const collapsibleScope = useCollapsibleScope(__scopeAccordion);
  const triggerId = useId();
  const open = value && valueContext.value.includes(value) || false;
  const disabled = accordionContext.disabled || props.disabled;
  return /* @__PURE__ */ jsx27(AccordionItemProvider, {
    scope: __scopeAccordion,
    open,
    disabled,
    triggerId,
    children: /* @__PURE__ */ jsx27(Root5, {
      "data-orientation": accordionContext.orientation,
      "data-state": getState2(open),
      ...collapsibleScope,
      ...accordionItemProps,
      ref: forwardedRef,
      disabled,
      open,
      onOpenChange: (open2) => {
        if (open2) {
          valueContext.onItemOpen(value);
        } else {
          valueContext.onItemClose(value);
        }
      }
    })
  });
});
AccordionItem.displayName = ITEM_NAME2;
var HEADER_NAME = "AccordionHeader";
var AccordionHeader = React38.forwardRef((props, forwardedRef) => {
  const { __scopeAccordion, ...headerProps } = props;
  const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
  const itemContext = useAccordionItemContext(HEADER_NAME, __scopeAccordion);
  return /* @__PURE__ */ jsx27(Primitive.h3, {
    "data-orientation": accordionContext.orientation,
    "data-state": getState2(itemContext.open),
    "data-disabled": itemContext.disabled ? "" : undefined,
    ...headerProps,
    ref: forwardedRef
  });
});
AccordionHeader.displayName = HEADER_NAME;
var TRIGGER_NAME4 = "AccordionTrigger";
var AccordionTrigger = React38.forwardRef((props, forwardedRef) => {
  const { __scopeAccordion, ...triggerProps } = props;
  const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
  const itemContext = useAccordionItemContext(TRIGGER_NAME4, __scopeAccordion);
  const collapsibleContext = useAccordionCollapsibleContext(TRIGGER_NAME4, __scopeAccordion);
  const collapsibleScope = useCollapsibleScope(__scopeAccordion);
  return /* @__PURE__ */ jsx27(Collection2.ItemSlot, { scope: __scopeAccordion, children: /* @__PURE__ */ jsx27(Trigger3, {
    "aria-disabled": itemContext.open && !collapsibleContext.collapsible || undefined,
    "data-orientation": accordionContext.orientation,
    id: itemContext.triggerId,
    ...collapsibleScope,
    ...triggerProps,
    ref: forwardedRef
  }) });
});
AccordionTrigger.displayName = TRIGGER_NAME4;
var CONTENT_NAME5 = "AccordionContent";
var AccordionContent = React38.forwardRef((props, forwardedRef) => {
  const { __scopeAccordion, ...contentProps } = props;
  const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
  const itemContext = useAccordionItemContext(CONTENT_NAME5, __scopeAccordion);
  const collapsibleScope = useCollapsibleScope(__scopeAccordion);
  return /* @__PURE__ */ jsx27(Content3, {
    role: "region",
    "aria-labelledby": itemContext.triggerId,
    "data-orientation": accordionContext.orientation,
    ...collapsibleScope,
    ...contentProps,
    ref: forwardedRef,
    style: {
      ["--radix-accordion-content-height"]: "var(--radix-collapsible-content-height)",
      ["--radix-accordion-content-width"]: "var(--radix-collapsible-content-width)",
      ...props.style
    }
  });
});
AccordionContent.displayName = CONTENT_NAME5;
function getState2(open) {
  return open ? "open" : "closed";
}
var Root23 = Accordion;
var Item2 = AccordionItem;
var Header = AccordionHeader;
var Trigger22 = AccordionTrigger;
var Content23 = AccordionContent;

// src/shadcn-ui/components/accordion.tsx
import clsx7 from "clsx";
import { jsx as jsx28, jsxs as jsxs7 } from "react/jsx-runtime";
function Accordion2({ ...props }) {
  return /* @__PURE__ */ jsx28(Root23, {
    "data-slot": "accordion",
    ...props
  });
}
function AccordionItem2({ className, ...props }) {
  return /* @__PURE__ */ jsx28(Item2, {
    "data-slot": "accordion-item",
    className: clsx7("border-b last:border-b-0", className),
    ...props
  });
}
function AccordionTrigger2({ className, children, ...props }) {
  return /* @__PURE__ */ jsx28(Header, {
    className: "flex",
    children: /* @__PURE__ */ jsxs7(Trigger22, {
      "data-slot": "accordion-trigger",
      className: clsx7("flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left font-medium text-sm outline-none transition-all hover:underline focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180", className),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx28(SvgIcon, {
          iconId: "ChevronDown",
          className: "pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200"
        })
      ]
    })
  });
}
function AccordionContent2({ className, children, ...props }) {
  return /* @__PURE__ */ jsx28(Content23, {
    "data-slot": "accordion-content",
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx28("div", {
      className: clsx7("pt-0 pb-4", className),
      children
    })
  });
}

// src/shadcn-ui/examples/accordion-demo.tsx
import { jsx as jsx29, jsxs as jsxs8 } from "react/jsx-runtime";
function AccordionDemo() {
  return /* @__PURE__ */ jsxs8(Accordion2, {
    type: "single",
    collapsible: true,
    className: "w-full",
    defaultValue: "item-1",
    children: [
      /* @__PURE__ */ jsxs8(AccordionItem2, {
        value: "item-1",
        children: [
          /* @__PURE__ */ jsx29(AccordionTrigger2, {
            children: "Product Information"
          }),
          /* @__PURE__ */ jsxs8(AccordionContent2, {
            className: "flex flex-col gap-4 text-balance",
            children: [
              /* @__PURE__ */ jsx29("p", {
                children: "Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability."
              }),
              /* @__PURE__ */ jsx29("p", {
                children: "Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and experts."
              })
            ]
          })
        ]
      }),
      /* @__PURE__ */ jsxs8(AccordionItem2, {
        value: "item-2",
        children: [
          /* @__PURE__ */ jsx29(AccordionTrigger2, {
            children: "Shipping Details"
          }),
          /* @__PURE__ */ jsxs8(AccordionContent2, {
            className: "flex flex-col gap-4 text-balance",
            children: [
              /* @__PURE__ */ jsx29("p", {
                children: "We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days."
              }),
              /* @__PURE__ */ jsx29("p", {
                children: "All orders are carefully packaged and fully insured. Track your shipment in real-time through our dedicated tracking portal."
              })
            ]
          })
        ]
      }),
      /* @__PURE__ */ jsxs8(AccordionItem2, {
        value: "item-3",
        children: [
          /* @__PURE__ */ jsx29(AccordionTrigger2, {
            children: "Return Policy"
          }),
          /* @__PURE__ */ jsxs8(AccordionContent2, {
            className: "flex flex-col gap-4 text-balance",
            children: [
              /* @__PURE__ */ jsx29("p", {
                children: "We stand behind our products with a comprehensive 30-day return policy. If you're not completely satisfied, simply return the item in its original condition."
              }),
              /* @__PURE__ */ jsx29("p", {
                children: "Our hassle-free return process includes free return shipping and full refunds processed within 48 hours of receiving the returned item."
              })
            ]
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/components/alert.tsx
import { cva as cva2 } from "class-variance-authority";
import clsx8 from "clsx";
import { jsx as jsx30 } from "react/jsx-runtime";
var alertVariants = cva2("relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current", {
  variants: {
    variant: {
      default: "bg-card text-card-foreground",
      destructive: "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
function Alert({ className, variant, ...props }) {
  return /* @__PURE__ */ jsx30("div", {
    "data-slot": "alert",
    role: "alert",
    className: clsx8(alertVariants({ variant }), className),
    ...props
  });
}
function AlertTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx30("div", {
    "data-slot": "alert-title",
    className: clsx8("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", className),
    ...props
  });
}
function AlertDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx30("div", {
    "data-slot": "alert-description",
    className: clsx8("col-start-2 grid justify-items-start gap-1 text-muted-foreground text-sm [&_p]:leading-relaxed", className),
    ...props
  });
}

// src/shadcn-ui/examples/alert-demo.tsx
import { jsx as jsx31, jsxs as jsxs9 } from "react/jsx-runtime";
function AlertDemo({ spriteUrl }) {
  return /* @__PURE__ */ jsxs9("div", {
    className: "grid w-full max-w-xl items-start gap-4",
    children: [
      /* @__PURE__ */ jsxs9(Alert, {
        children: [
          /* @__PURE__ */ jsx31(SpriteIcon, {
            iconId: "CircleCheck",
            spriteUrl
          }),
          /* @__PURE__ */ jsx31(AlertTitle, {
            children: "Success! Your changes have been saved"
          }),
          /* @__PURE__ */ jsx31(AlertDescription, {
            children: "This is an alert with icon, title and description."
          })
        ]
      }),
      /* @__PURE__ */ jsxs9(Alert, {
        children: [
          /* @__PURE__ */ jsx31(SpriteIcon, {
            iconId: "Calendar",
            spriteUrl
          }),
          /* @__PURE__ */ jsx31(AlertTitle, {
            children: "This Alert has a title and an icon. No description."
          })
        ]
      }),
      /* @__PURE__ */ jsxs9(Alert, {
        variant: "destructive",
        children: [
          /* @__PURE__ */ jsx31(SpriteIcon, {
            iconId: "CircleAlert",
            spriteUrl
          }),
          /* @__PURE__ */ jsx31(AlertTitle, {
            children: "Unable to process your payment."
          }),
          /* @__PURE__ */ jsxs9(AlertDescription, {
            children: [
              /* @__PURE__ */ jsx31("p", {
                children: "Please verify your billing information and try again."
              }),
              /* @__PURE__ */ jsxs9("ul", {
                className: "list-inside list-disc text-sm",
                children: [
                  /* @__PURE__ */ jsx31("li", {
                    children: "Check your card details"
                  }),
                  /* @__PURE__ */ jsx31("li", {
                    children: "Ensure sufficient funds"
                  }),
                  /* @__PURE__ */ jsx31("li", {
                    children: "Verify billing address"
                  })
                ]
              })
            ]
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/examples/alert-destructive.tsx
import { jsx as jsx32, jsxs as jsxs10 } from "react/jsx-runtime";
function AlertDestructive({ spriteUrl }) {
  return /* @__PURE__ */ jsxs10(Alert, {
    variant: "destructive",
    children: [
      /* @__PURE__ */ jsx32(SpriteIcon, {
        iconId: "CircleAlert",
        spriteUrl
      }),
      /* @__PURE__ */ jsx32(AlertTitle, {
        children: "Error"
      }),
      /* @__PURE__ */ jsx32(AlertDescription, {
        children: "Your session has expired. Please log in again."
      })
    ]
  });
}

// ../../node_modules/@radix-ui/react-alert-dialog/dist/index.mjs
import * as React40 from "react";

// ../../node_modules/@radix-ui/react-dialog/dist/index.mjs
import * as React39 from "react";
import { Fragment as Fragment8, jsx as jsx33, jsxs as jsxs11 } from "react/jsx-runtime";
"use client";
var DIALOG_NAME = "Dialog";
var [createDialogContext, createDialogScope] = createContextScope(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var Dialog = (props) => {
  const {
    __scopeDialog,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    modal = true
  } = props;
  const triggerRef = React39.useRef(null);
  const contentRef = React39.useRef(null);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
    caller: DIALOG_NAME
  });
  return /* @__PURE__ */ jsx33(DialogProvider, {
    scope: __scopeDialog,
    triggerRef,
    contentRef,
    contentId: useId(),
    titleId: useId(),
    descriptionId: useId(),
    open,
    onOpenChange: setOpen,
    onOpenToggle: React39.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
    modal,
    children
  });
};
Dialog.displayName = DIALOG_NAME;
var TRIGGER_NAME5 = "DialogTrigger";
var DialogTrigger = React39.forwardRef((props, forwardedRef) => {
  const { __scopeDialog, ...triggerProps } = props;
  const context = useDialogContext(TRIGGER_NAME5, __scopeDialog);
  const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
  return /* @__PURE__ */ jsx33(Primitive.button, {
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": context.open,
    "aria-controls": context.contentId,
    "data-state": getState3(context.open),
    ...triggerProps,
    ref: composedTriggerRef,
    onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
  });
});
DialogTrigger.displayName = TRIGGER_NAME5;
var PORTAL_NAME4 = "DialogPortal";
var [PortalProvider2, usePortalContext2] = createDialogContext(PORTAL_NAME4, {
  forceMount: undefined
});
var DialogPortal = (props) => {
  const { __scopeDialog, forceMount, children, container } = props;
  const context = useDialogContext(PORTAL_NAME4, __scopeDialog);
  return /* @__PURE__ */ jsx33(PortalProvider2, { scope: __scopeDialog, forceMount, children: React39.Children.map(children, (child) => /* @__PURE__ */ jsx33(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsx33(Portal, { asChild: true, container, children: child }) })) });
};
DialogPortal.displayName = PORTAL_NAME4;
var OVERLAY_NAME = "DialogOverlay";
var DialogOverlay = React39.forwardRef((props, forwardedRef) => {
  const portalContext = usePortalContext2(OVERLAY_NAME, props.__scopeDialog);
  const { forceMount = portalContext.forceMount, ...overlayProps } = props;
  const context = useDialogContext(OVERLAY_NAME, props.__scopeDialog);
  return context.modal ? /* @__PURE__ */ jsx33(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsx33(DialogOverlayImpl, { ...overlayProps, ref: forwardedRef }) }) : null;
});
DialogOverlay.displayName = OVERLAY_NAME;
var Slot3 = createSlot("DialogOverlay.RemoveScroll");
var DialogOverlayImpl = React39.forwardRef((props, forwardedRef) => {
  const { __scopeDialog, ...overlayProps } = props;
  const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
  return /* @__PURE__ */ jsx33(Combination_default, { as: Slot3, allowPinchZoom: true, shards: [context.contentRef], children: /* @__PURE__ */ jsx33(Primitive.div, {
    "data-state": getState3(context.open),
    ...overlayProps,
    ref: forwardedRef,
    style: { pointerEvents: "auto", ...overlayProps.style }
  }) });
});
var CONTENT_NAME6 = "DialogContent";
var DialogContent = React39.forwardRef((props, forwardedRef) => {
  const portalContext = usePortalContext2(CONTENT_NAME6, props.__scopeDialog);
  const { forceMount = portalContext.forceMount, ...contentProps } = props;
  const context = useDialogContext(CONTENT_NAME6, props.__scopeDialog);
  return /* @__PURE__ */ jsx33(Presence, { present: forceMount || context.open, children: context.modal ? /* @__PURE__ */ jsx33(DialogContentModal, { ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ jsx33(DialogContentNonModal, { ...contentProps, ref: forwardedRef }) });
});
DialogContent.displayName = CONTENT_NAME6;
var DialogContentModal = React39.forwardRef((props, forwardedRef) => {
  const context = useDialogContext(CONTENT_NAME6, props.__scopeDialog);
  const contentRef = React39.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, context.contentRef, contentRef);
  React39.useEffect(() => {
    const content = contentRef.current;
    if (content)
      return hideOthers(content);
  }, []);
  return /* @__PURE__ */ jsx33(DialogContentImpl, {
    ...props,
    ref: composedRefs,
    trapFocus: context.open,
    disableOutsidePointerEvents: true,
    onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
      event.preventDefault();
      context.triggerRef.current?.focus();
    }),
    onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event) => {
      const originalEvent = event.detail.originalEvent;
      const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
      const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
      if (isRightClick)
        event.preventDefault();
    }),
    onFocusOutside: composeEventHandlers(props.onFocusOutside, (event) => event.preventDefault())
  });
});
var DialogContentNonModal = React39.forwardRef((props, forwardedRef) => {
  const context = useDialogContext(CONTENT_NAME6, props.__scopeDialog);
  const hasInteractedOutsideRef = React39.useRef(false);
  const hasPointerDownOutsideRef = React39.useRef(false);
  return /* @__PURE__ */ jsx33(DialogContentImpl, {
    ...props,
    ref: forwardedRef,
    trapFocus: false,
    disableOutsidePointerEvents: false,
    onCloseAutoFocus: (event) => {
      props.onCloseAutoFocus?.(event);
      if (!event.defaultPrevented) {
        if (!hasInteractedOutsideRef.current)
          context.triggerRef.current?.focus();
        event.preventDefault();
      }
      hasInteractedOutsideRef.current = false;
      hasPointerDownOutsideRef.current = false;
    },
    onInteractOutside: (event) => {
      props.onInteractOutside?.(event);
      if (!event.defaultPrevented) {
        hasInteractedOutsideRef.current = true;
        if (event.detail.originalEvent.type === "pointerdown") {
          hasPointerDownOutsideRef.current = true;
        }
      }
      const target = event.target;
      const targetIsTrigger = context.triggerRef.current?.contains(target);
      if (targetIsTrigger)
        event.preventDefault();
      if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
        event.preventDefault();
      }
    }
  });
});
var DialogContentImpl = React39.forwardRef((props, forwardedRef) => {
  const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
  const context = useDialogContext(CONTENT_NAME6, __scopeDialog);
  const contentRef = React39.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, contentRef);
  useFocusGuards();
  return /* @__PURE__ */ jsxs11(Fragment8, { children: [
    /* @__PURE__ */ jsx33(FocusScope, {
      asChild: true,
      loop: true,
      trapped: trapFocus,
      onMountAutoFocus: onOpenAutoFocus,
      onUnmountAutoFocus: onCloseAutoFocus,
      children: /* @__PURE__ */ jsx33(DismissableLayer, {
        role: "dialog",
        id: context.contentId,
        "aria-describedby": context.descriptionId,
        "aria-labelledby": context.titleId,
        "data-state": getState3(context.open),
        ...contentProps,
        ref: composedRefs,
        onDismiss: () => context.onOpenChange(false)
      })
    }),
    /* @__PURE__ */ jsxs11(Fragment8, { children: [
      /* @__PURE__ */ jsx33(TitleWarning, { titleId: context.titleId }),
      /* @__PURE__ */ jsx33(DescriptionWarning, { contentRef, descriptionId: context.descriptionId })
    ] })
  ] });
});
var TITLE_NAME = "DialogTitle";
var DialogTitle = React39.forwardRef((props, forwardedRef) => {
  const { __scopeDialog, ...titleProps } = props;
  const context = useDialogContext(TITLE_NAME, __scopeDialog);
  return /* @__PURE__ */ jsx33(Primitive.h2, { id: context.titleId, ...titleProps, ref: forwardedRef });
});
DialogTitle.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "DialogDescription";
var DialogDescription = React39.forwardRef((props, forwardedRef) => {
  const { __scopeDialog, ...descriptionProps } = props;
  const context = useDialogContext(DESCRIPTION_NAME, __scopeDialog);
  return /* @__PURE__ */ jsx33(Primitive.p, { id: context.descriptionId, ...descriptionProps, ref: forwardedRef });
});
DialogDescription.displayName = DESCRIPTION_NAME;
var CLOSE_NAME = "DialogClose";
var DialogClose = React39.forwardRef((props, forwardedRef) => {
  const { __scopeDialog, ...closeProps } = props;
  const context = useDialogContext(CLOSE_NAME, __scopeDialog);
  return /* @__PURE__ */ jsx33(Primitive.button, {
    type: "button",
    ...closeProps,
    ref: forwardedRef,
    onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
  });
});
DialogClose.displayName = CLOSE_NAME;
function getState3(open) {
  return open ? "open" : "closed";
}
var TITLE_WARNING_NAME = "DialogTitleWarning";
var [WarningProvider, useWarningContext] = createContext2(TITLE_WARNING_NAME, {
  contentName: CONTENT_NAME6,
  titleName: TITLE_NAME,
  docsSlug: "dialog"
});
var TitleWarning = ({ titleId }) => {
  const titleWarningContext = useWarningContext(TITLE_WARNING_NAME);
  const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`;
  React39.useEffect(() => {
    if (titleId) {
      const hasTitle = document.getElementById(titleId);
      if (!hasTitle)
        console.error(MESSAGE);
    }
  }, [MESSAGE, titleId]);
  return null;
};
var DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning";
var DescriptionWarning = ({ contentRef, descriptionId }) => {
  const descriptionWarningContext = useWarningContext(DESCRIPTION_WARNING_NAME);
  const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${descriptionWarningContext.contentName}}.`;
  React39.useEffect(() => {
    const describedById = contentRef.current?.getAttribute("aria-describedby");
    if (descriptionId && describedById) {
      const hasDescription = document.getElementById(descriptionId);
      if (!hasDescription)
        console.warn(MESSAGE);
    }
  }, [MESSAGE, contentRef, descriptionId]);
  return null;
};
var Root6 = Dialog;
var Trigger4 = DialogTrigger;
var Portal4 = DialogPortal;
var Overlay = DialogOverlay;
var Content5 = DialogContent;
var Title = DialogTitle;
var Description = DialogDescription;
var Close = DialogClose;

// ../../node_modules/@radix-ui/react-alert-dialog/dist/index.mjs
import { jsx as jsx34, jsxs as jsxs12 } from "react/jsx-runtime";
"use client";
var ROOT_NAME = "AlertDialog";
var [createAlertDialogContext, createAlertDialogScope] = createContextScope(ROOT_NAME, [
  createDialogScope
]);
var useDialogScope = createDialogScope();
var AlertDialog = (props) => {
  const { __scopeAlertDialog, ...alertDialogProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ jsx34(Root6, { ...dialogScope, ...alertDialogProps, modal: true });
};
AlertDialog.displayName = ROOT_NAME;
var TRIGGER_NAME6 = "AlertDialogTrigger";
var AlertDialogTrigger = React40.forwardRef((props, forwardedRef) => {
  const { __scopeAlertDialog, ...triggerProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ jsx34(Trigger4, { ...dialogScope, ...triggerProps, ref: forwardedRef });
});
AlertDialogTrigger.displayName = TRIGGER_NAME6;
var PORTAL_NAME5 = "AlertDialogPortal";
var AlertDialogPortal = (props) => {
  const { __scopeAlertDialog, ...portalProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ jsx34(Portal4, { ...dialogScope, ...portalProps });
};
AlertDialogPortal.displayName = PORTAL_NAME5;
var OVERLAY_NAME2 = "AlertDialogOverlay";
var AlertDialogOverlay = React40.forwardRef((props, forwardedRef) => {
  const { __scopeAlertDialog, ...overlayProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ jsx34(Overlay, { ...dialogScope, ...overlayProps, ref: forwardedRef });
});
AlertDialogOverlay.displayName = OVERLAY_NAME2;
var CONTENT_NAME7 = "AlertDialogContent";
var [AlertDialogContentProvider, useAlertDialogContentContext] = createAlertDialogContext(CONTENT_NAME7);
var Slottable2 = createSlottable("AlertDialogContent");
var AlertDialogContent = React40.forwardRef((props, forwardedRef) => {
  const { __scopeAlertDialog, children, ...contentProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  const contentRef = React40.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, contentRef);
  const cancelRef = React40.useRef(null);
  return /* @__PURE__ */ jsx34(WarningProvider, {
    contentName: CONTENT_NAME7,
    titleName: TITLE_NAME2,
    docsSlug: "alert-dialog",
    children: /* @__PURE__ */ jsx34(AlertDialogContentProvider, { scope: __scopeAlertDialog, cancelRef, children: /* @__PURE__ */ jsxs12(Content5, {
      role: "alertdialog",
      ...dialogScope,
      ...contentProps,
      ref: composedRefs,
      onOpenAutoFocus: composeEventHandlers(contentProps.onOpenAutoFocus, (event) => {
        event.preventDefault();
        cancelRef.current?.focus({ preventScroll: true });
      }),
      onPointerDownOutside: (event) => event.preventDefault(),
      onInteractOutside: (event) => event.preventDefault(),
      children: [
        /* @__PURE__ */ jsx34(Slottable2, { children }),
        /* @__PURE__ */ jsx34(DescriptionWarning2, { contentRef })
      ]
    }) })
  });
});
AlertDialogContent.displayName = CONTENT_NAME7;
var TITLE_NAME2 = "AlertDialogTitle";
var AlertDialogTitle = React40.forwardRef((props, forwardedRef) => {
  const { __scopeAlertDialog, ...titleProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ jsx34(Title, { ...dialogScope, ...titleProps, ref: forwardedRef });
});
AlertDialogTitle.displayName = TITLE_NAME2;
var DESCRIPTION_NAME2 = "AlertDialogDescription";
var AlertDialogDescription = React40.forwardRef((props, forwardedRef) => {
  const { __scopeAlertDialog, ...descriptionProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ jsx34(Description, { ...dialogScope, ...descriptionProps, ref: forwardedRef });
});
AlertDialogDescription.displayName = DESCRIPTION_NAME2;
var ACTION_NAME = "AlertDialogAction";
var AlertDialogAction = React40.forwardRef((props, forwardedRef) => {
  const { __scopeAlertDialog, ...actionProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ jsx34(Close, { ...dialogScope, ...actionProps, ref: forwardedRef });
});
AlertDialogAction.displayName = ACTION_NAME;
var CANCEL_NAME = "AlertDialogCancel";
var AlertDialogCancel = React40.forwardRef((props, forwardedRef) => {
  const { __scopeAlertDialog, ...cancelProps } = props;
  const { cancelRef } = useAlertDialogContentContext(CANCEL_NAME, __scopeAlertDialog);
  const dialogScope = useDialogScope(__scopeAlertDialog);
  const ref = useComposedRefs(forwardedRef, cancelRef);
  return /* @__PURE__ */ jsx34(Close, { ...dialogScope, ...cancelProps, ref });
});
AlertDialogCancel.displayName = CANCEL_NAME;
var DescriptionWarning2 = ({ contentRef }) => {
  const MESSAGE = `\`${CONTENT_NAME7}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${CONTENT_NAME7}\` by passing a \`${DESCRIPTION_NAME2}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${CONTENT_NAME7}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  React40.useEffect(() => {
    const hasDescription = document.getElementById(contentRef.current?.getAttribute("aria-describedby"));
    if (!hasDescription)
      console.warn(MESSAGE);
  }, [MESSAGE, contentRef]);
  return null;
};
var Root24 = AlertDialog;
var Trigger23 = AlertDialogTrigger;
var Portal22 = AlertDialogPortal;
var Overlay2 = AlertDialogOverlay;
var Content24 = AlertDialogContent;
var Action = AlertDialogAction;
var Cancel = AlertDialogCancel;
var Title2 = AlertDialogTitle;
var Description2 = AlertDialogDescription;

// src/shadcn-ui/components/alert-dialog.tsx
import clsx9 from "clsx";
import { jsx as jsx35, jsxs as jsxs13 } from "react/jsx-runtime";
function AlertDialog2({ ...props }) {
  return /* @__PURE__ */ jsx35(Root24, {
    "data-slot": "alert-dialog",
    ...props
  });
}
function AlertDialogTrigger2({ ...props }) {
  return /* @__PURE__ */ jsx35(Trigger23, {
    "data-slot": "alert-dialog-trigger",
    ...props
  });
}
function AlertDialogPortal2({ ...props }) {
  return /* @__PURE__ */ jsx35(Portal22, {
    "data-slot": "alert-dialog-portal",
    ...props
  });
}
function AlertDialogOverlay2({ className, ...props }) {
  return /* @__PURE__ */ jsx35(Overlay2, {
    "data-slot": "alert-dialog-overlay",
    className: clsx9("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=open]:animate-in", className),
    ...props
  });
}
function AlertDialogContent2({ className, ...props }) {
  return /* @__PURE__ */ jsxs13(AlertDialogPortal2, {
    children: [
      /* @__PURE__ */ jsx35(AlertDialogOverlay2, {}),
      /* @__PURE__ */ jsx35(Content24, {
        "data-slot": "alert-dialog-content",
        className: clsx9("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 data-[state=closed]:animate-out data-[state=open]:animate-in sm:max-w-lg", className),
        ...props
      })
    ]
  });
}
function AlertDialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx35("div", {
    "data-slot": "alert-dialog-header",
    className: clsx9("flex flex-col gap-2 text-center sm:text-left", className),
    ...props
  });
}
function AlertDialogFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx35("div", {
    "data-slot": "alert-dialog-footer",
    className: clsx9("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
    ...props
  });
}
function AlertDialogTitle2({ className, ...props }) {
  return /* @__PURE__ */ jsx35(Title2, {
    "data-slot": "alert-dialog-title",
    className: clsx9("font-semibold text-lg", className),
    ...props
  });
}
function AlertDialogDescription2({ className, ...props }) {
  return /* @__PURE__ */ jsx35(Description2, {
    "data-slot": "alert-dialog-description",
    className: clsx9("text-muted-foreground text-sm", className),
    ...props
  });
}
function AlertDialogAction2({ className, ...props }) {
  return /* @__PURE__ */ jsx35(Action, {
    className: clsx9(buttonVariants(), className),
    ...props
  });
}
function AlertDialogCancel2({ className, ...props }) {
  return /* @__PURE__ */ jsx35(Cancel, {
    className: clsx9(buttonVariants({ variant: "outline" }), className),
    ...props
  });
}

// src/shadcn-ui/examples/alert-dialog-demo.tsx
import { jsx as jsx36, jsxs as jsxs14 } from "react/jsx-runtime";
function AlertDialogDemo() {
  return /* @__PURE__ */ jsxs14(AlertDialog2, {
    children: [
      /* @__PURE__ */ jsx36(AlertDialogTrigger2, {
        asChild: true,
        children: /* @__PURE__ */ jsx36(Button, {
          variant: "outline",
          children: "Show Dialog"
        })
      }),
      /* @__PURE__ */ jsxs14(AlertDialogContent2, {
        children: [
          /* @__PURE__ */ jsxs14(AlertDialogHeader, {
            children: [
              /* @__PURE__ */ jsx36(AlertDialogTitle2, {
                children: "Are you absolutely sure?"
              }),
              /* @__PURE__ */ jsx36(AlertDialogDescription2, {
                children: "This action cannot be undone. This will permanently delete your account and remove your data from our servers."
              })
            ]
          }),
          /* @__PURE__ */ jsxs14(AlertDialogFooter, {
            children: [
              /* @__PURE__ */ jsx36(AlertDialogCancel2, {
                children: "Cancel"
              }),
              /* @__PURE__ */ jsx36(AlertDialogAction2, {
                children: "Continue"
              })
            ]
          })
        ]
      })
    ]
  });
}

// src/images/LazyImage.tsx
import clsx11 from "clsx";
import React41 from "react";
import { Await } from "react-router";

// src/shadcn-ui/components/spinner.tsx
import clsx10 from "clsx";
import { jsx as jsx37 } from "react/jsx-runtime";
function Spinner({ className, iconId = "Loader", ...props }) {
  return /* @__PURE__ */ jsx37(SvgIcon, {
    iconId,
    role: "status",
    "aria-label": "Loading",
    className: clsx10("size-4 animate-spin", className),
    ...props
  });
}

// src/images/LazyImage.tsx
import { jsx as jsx38 } from "react/jsx-runtime";
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
function LazyImage({ image, src, alt, width, height, className, spriteUrl, fallback = spriteUrl ? /* @__PURE__ */ jsx38(Spinner, {}) : /* @__PURE__ */ jsx38("div", {
  className: "text-slate-500/50",
  children: "Loading..."
}) }) {
  const imagePromise = image || (src ? createRemoteImagePromise(src, alt || "", width, height) : null);
  if (!imagePromise) {
    return /* @__PURE__ */ jsx38("div", {
      className: "text-slate-500/50",
      children: "Error: No image source provided"
    });
  }
  return /* @__PURE__ */ jsx38(React41.Suspense, {
    fallback,
    children: /* @__PURE__ */ jsx38(TypedAwait, {
      resolve: imagePromise,
      errorElement: spriteUrl ? /* @__PURE__ */ jsx38(Spinner, {
        className: "text-slate-500/50"
      }) : /* @__PURE__ */ jsx38("div", {
        className: "text-slate-500/50",
        children: "Error loading image"
      }),
      children: (imageData) => /* @__PURE__ */ jsx38(ImageElement, {
        ...imageData,
        className: clsx11(imageData.className, className)
      })
    })
  });
}
function TypedAwait({ resolve, children, ...props }) {
  return /* @__PURE__ */ jsx38(Await, {
    resolve,
    ...props,
    children: (data) => children(data)
  });
}
var ImageElement = ({ src, alt, width, height, className, loading = "lazy" }) => {
  return /* @__PURE__ */ jsx38("img", {
    src,
    alt,
    width,
    height,
    className,
    loading,
    decoding: "async"
  });
};

// ../../node_modules/@radix-ui/react-aspect-ratio/dist/index.mjs
import * as React42 from "react";
import { jsx as jsx39 } from "react/jsx-runtime";
var NAME3 = "AspectRatio";
var AspectRatio = React42.forwardRef((props, forwardedRef) => {
  const { ratio = 1 / 1, style, ...aspectRatioProps } = props;
  return /* @__PURE__ */ jsx39("div", {
    style: {
      position: "relative",
      width: "100%",
      paddingBottom: `${100 / ratio}%`
    },
    "data-radix-aspect-ratio-wrapper": "",
    children: /* @__PURE__ */ jsx39(Primitive.div, {
      ...aspectRatioProps,
      ref: forwardedRef,
      style: {
        ...style,
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    })
  });
});
AspectRatio.displayName = NAME3;
var Root7 = AspectRatio;

// src/shadcn-ui/components/aspect-ratio.tsx
import { jsx as jsx40 } from "react/jsx-runtime";
function AspectRatio2({ ...props }) {
  return /* @__PURE__ */ jsx40(Root7, {
    "data-slot": "aspect-ratio",
    ...props
  });
}

// src/shadcn-ui/examples/aspect-ratio-demo.tsx
import { jsx as jsx41 } from "react/jsx-runtime";
function AspectRatioDemo() {
  return /* @__PURE__ */ jsx41(AspectRatio2, {
    ratio: 16 / 9,
    className: "rounded-lg bg-muted",
    children: /* @__PURE__ */ jsx41(LazyImage, {
      src: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",
      alt: "Photo by Drew Beamer",
      className: "h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
    })
  });
}

// ../../node_modules/@radix-ui/react-avatar/dist/index.mjs
import * as React44 from "react";

// ../../node_modules/@radix-ui/react-use-is-hydrated/dist/index.mjs
var import_shim = __toESM(require_shim(), 1);
function useIsHydrated() {
  return import_shim.useSyncExternalStore(subscribe, () => true, () => false);
}
function subscribe() {
  return () => {};
}

// ../../node_modules/@radix-ui/react-avatar/dist/index.mjs
import { jsx as jsx42 } from "react/jsx-runtime";
"use client";
var AVATAR_NAME = "Avatar";
var [createAvatarContext, createAvatarScope] = createContextScope(AVATAR_NAME);
var [AvatarProvider, useAvatarContext] = createAvatarContext(AVATAR_NAME);
var Avatar = React44.forwardRef((props, forwardedRef) => {
  const { __scopeAvatar, ...avatarProps } = props;
  const [imageLoadingStatus, setImageLoadingStatus] = React44.useState("idle");
  return /* @__PURE__ */ jsx42(AvatarProvider, {
    scope: __scopeAvatar,
    imageLoadingStatus,
    onImageLoadingStatusChange: setImageLoadingStatus,
    children: /* @__PURE__ */ jsx42(Primitive.span, { ...avatarProps, ref: forwardedRef })
  });
});
Avatar.displayName = AVATAR_NAME;
var IMAGE_NAME = "AvatarImage";
var AvatarImage = React44.forwardRef((props, forwardedRef) => {
  const { __scopeAvatar, src, onLoadingStatusChange = () => {}, ...imageProps } = props;
  const context = useAvatarContext(IMAGE_NAME, __scopeAvatar);
  const imageLoadingStatus = useImageLoadingStatus(src, imageProps);
  const handleLoadingStatusChange = useCallbackRef((status) => {
    onLoadingStatusChange(status);
    context.onImageLoadingStatusChange(status);
  });
  useLayoutEffect2(() => {
    if (imageLoadingStatus !== "idle") {
      handleLoadingStatusChange(imageLoadingStatus);
    }
  }, [imageLoadingStatus, handleLoadingStatusChange]);
  return imageLoadingStatus === "loaded" ? /* @__PURE__ */ jsx42(Primitive.img, { ...imageProps, ref: forwardedRef, src }) : null;
});
AvatarImage.displayName = IMAGE_NAME;
var FALLBACK_NAME = "AvatarFallback";
var AvatarFallback = React44.forwardRef((props, forwardedRef) => {
  const { __scopeAvatar, delayMs, ...fallbackProps } = props;
  const context = useAvatarContext(FALLBACK_NAME, __scopeAvatar);
  const [canRender, setCanRender] = React44.useState(delayMs === undefined);
  React44.useEffect(() => {
    if (delayMs !== undefined) {
      const timerId = window.setTimeout(() => setCanRender(true), delayMs);
      return () => window.clearTimeout(timerId);
    }
  }, [delayMs]);
  return canRender && context.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ jsx42(Primitive.span, { ...fallbackProps, ref: forwardedRef }) : null;
});
AvatarFallback.displayName = FALLBACK_NAME;
function resolveLoadingStatus(image, src) {
  if (!image) {
    return "idle";
  }
  if (!src) {
    return "error";
  }
  if (image.src !== src) {
    image.src = src;
  }
  return image.complete && image.naturalWidth > 0 ? "loaded" : "loading";
}
function useImageLoadingStatus(src, { referrerPolicy, crossOrigin }) {
  const isHydrated = useIsHydrated();
  const imageRef = React44.useRef(null);
  const image = (() => {
    if (!isHydrated)
      return null;
    if (!imageRef.current) {
      imageRef.current = new window.Image;
    }
    return imageRef.current;
  })();
  const [loadingStatus, setLoadingStatus] = React44.useState(() => resolveLoadingStatus(image, src));
  useLayoutEffect2(() => {
    setLoadingStatus(resolveLoadingStatus(image, src));
  }, [image, src]);
  useLayoutEffect2(() => {
    const updateStatus = (status) => () => {
      setLoadingStatus(status);
    };
    if (!image)
      return;
    const handleLoad = updateStatus("loaded");
    const handleError = updateStatus("error");
    image.addEventListener("load", handleLoad);
    image.addEventListener("error", handleError);
    if (referrerPolicy) {
      image.referrerPolicy = referrerPolicy;
    }
    if (typeof crossOrigin === "string") {
      image.crossOrigin = crossOrigin;
    }
    return () => {
      image.removeEventListener("load", handleLoad);
      image.removeEventListener("error", handleError);
    };
  }, [image, crossOrigin, referrerPolicy]);
  return loadingStatus;
}
var Root8 = Avatar;
var Image2 = AvatarImage;
var Fallback = AvatarFallback;

// src/shadcn-ui/components/avatar.tsx
import clsx12 from "clsx";
import { jsx as jsx43 } from "react/jsx-runtime";
function Avatar2({ className, ...props }) {
  return /* @__PURE__ */ jsx43(Root8, {
    "data-slot": "avatar",
    className: clsx12("relative flex size-8 shrink-0 overflow-hidden rounded-full", className),
    ...props
  });
}
function AvatarImage2({ className, ...props }) {
  return /* @__PURE__ */ jsx43(Image2, {
    "data-slot": "avatar-image",
    className: clsx12("aspect-square size-full", className),
    ...props
  });
}
function AvatarFallback2({ className, ...props }) {
  return /* @__PURE__ */ jsx43(Fallback, {
    "data-slot": "avatar-fallback",
    className: clsx12("flex size-full items-center justify-center rounded-full bg-muted", className),
    ...props
  });
}

// src/shadcn-ui/examples/avatar-demo.tsx
import { jsx as jsx44, jsxs as jsxs15 } from "react/jsx-runtime";
function AvatarDemo() {
  return /* @__PURE__ */ jsxs15("div", {
    className: "flex flex-row flex-wrap items-center gap-12",
    children: [
      /* @__PURE__ */ jsxs15(Avatar2, {
        children: [
          /* @__PURE__ */ jsx44(AvatarImage2, {
            src: "https://github.com/shadcn.png",
            alt: "@shadcn"
          }),
          /* @__PURE__ */ jsx44(AvatarFallback2, {
            children: "CN"
          })
        ]
      }),
      /* @__PURE__ */ jsxs15(Avatar2, {
        className: "rounded-lg",
        children: [
          /* @__PURE__ */ jsx44(AvatarImage2, {
            src: "https://github.com/evilrabbit.png",
            alt: "@evilrabbit"
          }),
          /* @__PURE__ */ jsx44(AvatarFallback2, {
            children: "ER"
          })
        ]
      }),
      /* @__PURE__ */ jsxs15("div", {
        className: "-space-x-2 flex *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale",
        children: [
          /* @__PURE__ */ jsxs15(Avatar2, {
            children: [
              /* @__PURE__ */ jsx44(AvatarImage2, {
                src: "https://github.com/shadcn.png",
                alt: "@shadcn"
              }),
              /* @__PURE__ */ jsx44(AvatarFallback2, {
                children: "CN"
              })
            ]
          }),
          /* @__PURE__ */ jsxs15(Avatar2, {
            children: [
              /* @__PURE__ */ jsx44(AvatarImage2, {
                src: "https://github.com/leerob.png",
                alt: "@leerob"
              }),
              /* @__PURE__ */ jsx44(AvatarFallback2, {
                children: "LR"
              })
            ]
          }),
          /* @__PURE__ */ jsxs15(Avatar2, {
            children: [
              /* @__PURE__ */ jsx44(AvatarImage2, {
                src: "https://github.com/evilrabbit.png",
                alt: "@evilrabbit"
              }),
              /* @__PURE__ */ jsx44(AvatarFallback2, {
                children: "ER"
              })
            ]
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/components/badge.tsx
import { cva as cva3 } from "class-variance-authority";
import clsx13 from "clsx";
import { jsx as jsx45 } from "react/jsx-runtime";
var badgeVariants = cva3("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
  variants: {
    variant: {
      default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
      secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
      destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
      outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
function Badge({ className, variant, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "span";
  return /* @__PURE__ */ jsx45(Comp, {
    "data-slot": "badge",
    className: clsx13(badgeVariants({ variant }), className),
    ...props
  });
}

// src/shadcn-ui/examples/badge-demo.tsx
import { jsx as jsx46, jsxs as jsxs16 } from "react/jsx-runtime";
function BadgeDemo({ spriteUrl }) {
  return /* @__PURE__ */ jsxs16("div", {
    className: "flex flex-col items-center gap-2",
    children: [
      /* @__PURE__ */ jsxs16("div", {
        className: "flex w-full flex-wrap gap-2",
        children: [
          /* @__PURE__ */ jsx46(Badge, {
            children: "Badge"
          }),
          /* @__PURE__ */ jsx46(Badge, {
            variant: "secondary",
            children: "Secondary"
          }),
          /* @__PURE__ */ jsx46(Badge, {
            variant: "destructive",
            children: "Destructive"
          }),
          /* @__PURE__ */ jsx46(Badge, {
            variant: "outline",
            children: "Outline"
          })
        ]
      }),
      /* @__PURE__ */ jsxs16("div", {
        className: "flex w-full flex-wrap gap-2",
        children: [
          /* @__PURE__ */ jsxs16(Badge, {
            variant: "secondary",
            className: "bg-blue-500 text-white dark:bg-blue-600",
            children: [
              /* @__PURE__ */ jsx46(SpriteIcon, {
                iconId: "BadgeCheck",
                spriteUrl
              }),
              "Verified"
            ]
          }),
          /* @__PURE__ */ jsx46(Badge, {
            className: "h-5 min-w-5 rounded-full px-1 font-mono tabular-nums",
            children: "8"
          }),
          /* @__PURE__ */ jsx46(Badge, {
            className: "h-5 min-w-5 rounded-full px-1 font-mono tabular-nums",
            variant: "destructive",
            children: "99"
          }),
          /* @__PURE__ */ jsx46(Badge, {
            className: "h-5 min-w-5 rounded-full px-1 font-mono tabular-nums",
            variant: "outline",
            children: "20+"
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/examples/badge-destructive.tsx
import { jsx as jsx47 } from "react/jsx-runtime";
function BadgeDestructive() {
  return /* @__PURE__ */ jsx47(Badge, {
    variant: "destructive",
    children: "Destructive"
  });
}

// src/shadcn-ui/examples/badge-outline.tsx
import { jsx as jsx48 } from "react/jsx-runtime";
function BadgeOutline() {
  return /* @__PURE__ */ jsx48(Badge, {
    variant: "outline",
    children: "Outline"
  });
}

// src/shadcn-ui/examples/badge-secondary.tsx
import { jsx as jsx49 } from "react/jsx-runtime";
function BadgeSecondary() {
  return /* @__PURE__ */ jsx49(Badge, {
    variant: "secondary",
    children: "Secondary"
  });
}

// src/shadcn-ui/components/breadcrumb.tsx
import clsx14 from "clsx";
import { jsx as jsx50, jsxs as jsxs17 } from "react/jsx-runtime";
function Breadcrumb({ ...props }) {
  return /* @__PURE__ */ jsx50("nav", {
    "aria-label": "breadcrumb",
    "data-slot": "breadcrumb",
    ...props
  });
}
function BreadcrumbList({ className, ...props }) {
  return /* @__PURE__ */ jsx50("ol", {
    "data-slot": "breadcrumb-list",
    className: clsx14("flex flex-wrap items-center gap-1.5 break-words text-muted-foreground text-sm sm:gap-2.5", className),
    ...props
  });
}
function BreadcrumbItem({ className, ...props }) {
  return /* @__PURE__ */ jsx50("li", {
    "data-slot": "breadcrumb-item",
    className: clsx14("inline-flex items-center gap-1.5", className),
    ...props
  });
}
function BreadcrumbLink({
  asChild,
  className,
  ...props
}) {
  const Comp = asChild ? Slot : "a";
  return /* @__PURE__ */ jsx50(Comp, {
    "data-slot": "breadcrumb-link",
    className: clsx14("transition-colors hover:text-foreground", className),
    ...props
  });
}
function BreadcrumbPage({ className, ...props }) {
  return /* @__PURE__ */ jsx50("span", {
    "data-slot": "breadcrumb-page",
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: clsx14("font-normal text-foreground", className),
    ...props
  });
}
function BreadcrumbSeparator({ children, className, ...props }) {
  return /* @__PURE__ */ jsx50("li", {
    "data-slot": "breadcrumb-separator",
    role: "presentation",
    "aria-hidden": "true",
    className: clsx14("[&>svg]:size-3.5", className),
    ...props,
    children: children ?? /* @__PURE__ */ jsx50(SvgIcon, {
      iconId: "ChevronRight"
    })
  });
}
function BreadcrumbEllipsis({ className, ...props }) {
  return /* @__PURE__ */ jsxs17("span", {
    "data-slot": "breadcrumb-ellipsis",
    role: "presentation",
    "aria-hidden": "true",
    className: clsx14("flex size-9 items-center justify-center", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx50(SvgIcon, {
        iconId: "Ellipsis",
        className: "size-4"
      }),
      /* @__PURE__ */ jsx50("span", {
        className: "sr-only",
        children: "More"
      })
    ]
  });
}

// ../../node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs
import * as React47 from "react";

// ../../node_modules/@radix-ui/react-menu/dist/index.mjs
import * as React46 from "react";

// ../../node_modules/@radix-ui/react-roving-focus/dist/index.mjs
import * as React45 from "react";
import { jsx as jsx51 } from "react/jsx-runtime";
"use client";
var ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
var EVENT_OPTIONS2 = { bubbles: false, cancelable: true };
var GROUP_NAME2 = "RovingFocusGroup";
var [Collection3, useCollection3, createCollectionScope3] = createCollection(GROUP_NAME2);
var [createRovingFocusGroupContext, createRovingFocusGroupScope] = createContextScope(GROUP_NAME2, [createCollectionScope3]);
var [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME2);
var RovingFocusGroup = React45.forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ jsx51(Collection3.Provider, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ jsx51(Collection3.Slot, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ jsx51(RovingFocusGroupImpl, { ...props, ref: forwardedRef }) }) });
});
RovingFocusGroup.displayName = GROUP_NAME2;
var RovingFocusGroupImpl = React45.forwardRef((props, forwardedRef) => {
  const {
    __scopeRovingFocusGroup,
    orientation,
    loop = false,
    dir,
    currentTabStopId: currentTabStopIdProp,
    defaultCurrentTabStopId,
    onCurrentTabStopIdChange,
    onEntryFocus,
    preventScrollOnEntryFocus = false,
    ...groupProps
  } = props;
  const ref = React45.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const direction = useDirection(dir);
  const [currentTabStopId, setCurrentTabStopId] = useControllableState({
    prop: currentTabStopIdProp,
    defaultProp: defaultCurrentTabStopId ?? null,
    onChange: onCurrentTabStopIdChange,
    caller: GROUP_NAME2
  });
  const [isTabbingBackOut, setIsTabbingBackOut] = React45.useState(false);
  const handleEntryFocus = useCallbackRef(onEntryFocus);
  const getItems = useCollection3(__scopeRovingFocusGroup);
  const isClickFocusRef = React45.useRef(false);
  const [focusableItemsCount, setFocusableItemsCount] = React45.useState(0);
  React45.useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener(ENTRY_FOCUS, handleEntryFocus);
      return () => node.removeEventListener(ENTRY_FOCUS, handleEntryFocus);
    }
  }, [handleEntryFocus]);
  return /* @__PURE__ */ jsx51(RovingFocusProvider, {
    scope: __scopeRovingFocusGroup,
    orientation,
    dir: direction,
    loop,
    currentTabStopId,
    onItemFocus: React45.useCallback((tabStopId) => setCurrentTabStopId(tabStopId), [setCurrentTabStopId]),
    onItemShiftTab: React45.useCallback(() => setIsTabbingBackOut(true), []),
    onFocusableItemAdd: React45.useCallback(() => setFocusableItemsCount((prevCount) => prevCount + 1), []),
    onFocusableItemRemove: React45.useCallback(() => setFocusableItemsCount((prevCount) => prevCount - 1), []),
    children: /* @__PURE__ */ jsx51(Primitive.div, {
      tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
      "data-orientation": orientation,
      ...groupProps,
      ref: composedRefs,
      style: { outline: "none", ...props.style },
      onMouseDown: composeEventHandlers(props.onMouseDown, () => {
        isClickFocusRef.current = true;
      }),
      onFocus: composeEventHandlers(props.onFocus, (event) => {
        const isKeyboardFocus = !isClickFocusRef.current;
        if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
          const entryFocusEvent = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS2);
          event.currentTarget.dispatchEvent(entryFocusEvent);
          if (!entryFocusEvent.defaultPrevented) {
            const items = getItems().filter((item) => item.focusable);
            const activeItem = items.find((item) => item.active);
            const currentItem = items.find((item) => item.id === currentTabStopId);
            const candidateItems = [activeItem, currentItem, ...items].filter(Boolean);
            const candidateNodes = candidateItems.map((item) => item.ref.current);
            focusFirst2(candidateNodes, preventScrollOnEntryFocus);
          }
        }
        isClickFocusRef.current = false;
      }),
      onBlur: composeEventHandlers(props.onBlur, () => setIsTabbingBackOut(false))
    })
  });
});
var ITEM_NAME3 = "RovingFocusGroupItem";
var RovingFocusGroupItem = React45.forwardRef((props, forwardedRef) => {
  const {
    __scopeRovingFocusGroup,
    focusable = true,
    active = false,
    tabStopId,
    children,
    ...itemProps
  } = props;
  const autoId = useId();
  const id = tabStopId || autoId;
  const context = useRovingFocusContext(ITEM_NAME3, __scopeRovingFocusGroup);
  const isCurrentTabStop = context.currentTabStopId === id;
  const getItems = useCollection3(__scopeRovingFocusGroup);
  const { onFocusableItemAdd, onFocusableItemRemove, currentTabStopId } = context;
  React45.useEffect(() => {
    if (focusable) {
      onFocusableItemAdd();
      return () => onFocusableItemRemove();
    }
  }, [focusable, onFocusableItemAdd, onFocusableItemRemove]);
  return /* @__PURE__ */ jsx51(Collection3.ItemSlot, {
    scope: __scopeRovingFocusGroup,
    id,
    focusable,
    active,
    children: /* @__PURE__ */ jsx51(Primitive.span, {
      tabIndex: isCurrentTabStop ? 0 : -1,
      "data-orientation": context.orientation,
      ...itemProps,
      ref: forwardedRef,
      onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
        if (!focusable)
          event.preventDefault();
        else
          context.onItemFocus(id);
      }),
      onFocus: composeEventHandlers(props.onFocus, () => context.onItemFocus(id)),
      onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
        if (event.key === "Tab" && event.shiftKey) {
          context.onItemShiftTab();
          return;
        }
        if (event.target !== event.currentTarget)
          return;
        const focusIntent = getFocusIntent(event, context.orientation, context.dir);
        if (focusIntent !== undefined) {
          if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey)
            return;
          event.preventDefault();
          const items = getItems().filter((item) => item.focusable);
          let candidateNodes = items.map((item) => item.ref.current);
          if (focusIntent === "last")
            candidateNodes.reverse();
          else if (focusIntent === "prev" || focusIntent === "next") {
            if (focusIntent === "prev")
              candidateNodes.reverse();
            const currentIndex = candidateNodes.indexOf(event.currentTarget);
            candidateNodes = context.loop ? wrapArray2(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
          }
          setTimeout(() => focusFirst2(candidateNodes));
        }
      }),
      children: typeof children === "function" ? children({ isCurrentTabStop, hasTabStop: currentTabStopId != null }) : children
    })
  });
});
RovingFocusGroupItem.displayName = ITEM_NAME3;
var MAP_KEY_TO_FOCUS_INTENT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function getDirectionAwareKey(key, dir) {
  if (dir !== "rtl")
    return key;
  return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
function getFocusIntent(event, orientation, dir) {
  const key = getDirectionAwareKey(event.key, dir);
  if (orientation === "vertical" && ["ArrowLeft", "ArrowRight"].includes(key))
    return;
  if (orientation === "horizontal" && ["ArrowUp", "ArrowDown"].includes(key))
    return;
  return MAP_KEY_TO_FOCUS_INTENT[key];
}
function focusFirst2(candidates, preventScroll = false) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT)
      return;
    candidate.focus({ preventScroll });
    if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT)
      return;
  }
}
function wrapArray2(array, startIndex) {
  return array.map((_, index2) => array[(startIndex + index2) % array.length]);
}
var Root9 = RovingFocusGroup;
var Item3 = RovingFocusGroupItem;

// ../../node_modules/@radix-ui/react-menu/dist/index.mjs
import { jsx as jsx52 } from "react/jsx-runtime";
"use client";
var SELECTION_KEYS2 = ["Enter", " "];
var FIRST_KEYS = ["ArrowDown", "PageUp", "Home"];
var LAST_KEYS = ["ArrowUp", "PageDown", "End"];
var FIRST_LAST_KEYS = [...FIRST_KEYS, ...LAST_KEYS];
var SUB_OPEN_KEYS = {
  ltr: [...SELECTION_KEYS2, "ArrowRight"],
  rtl: [...SELECTION_KEYS2, "ArrowLeft"]
};
var SUB_CLOSE_KEYS = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
var MENU_NAME = "Menu";
var [Collection4, useCollection4, createCollectionScope4] = createCollection(MENU_NAME);
var [createMenuContext, createMenuScope] = createContextScope(MENU_NAME, [
  createCollectionScope4,
  createPopperScope,
  createRovingFocusGroupScope
]);
var usePopperScope3 = createPopperScope();
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var [MenuProvider, useMenuContext] = createMenuContext(MENU_NAME);
var [MenuRootProvider, useMenuRootContext] = createMenuContext(MENU_NAME);
var Menu = (props) => {
  const { __scopeMenu, open = false, children, dir, onOpenChange, modal = true } = props;
  const popperScope = usePopperScope3(__scopeMenu);
  const [content, setContent] = React46.useState(null);
  const isUsingKeyboardRef = React46.useRef(false);
  const handleOpenChange = useCallbackRef(onOpenChange);
  const direction = useDirection(dir);
  React46.useEffect(() => {
    const handleKeyDown = () => {
      isUsingKeyboardRef.current = true;
      document.addEventListener("pointerdown", handlePointer, { capture: true, once: true });
      document.addEventListener("pointermove", handlePointer, { capture: true, once: true });
    };
    const handlePointer = () => isUsingKeyboardRef.current = false;
    document.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => {
      document.removeEventListener("keydown", handleKeyDown, { capture: true });
      document.removeEventListener("pointerdown", handlePointer, { capture: true });
      document.removeEventListener("pointermove", handlePointer, { capture: true });
    };
  }, []);
  return /* @__PURE__ */ jsx52(Root2, { ...popperScope, children: /* @__PURE__ */ jsx52(MenuProvider, {
    scope: __scopeMenu,
    open,
    onOpenChange: handleOpenChange,
    content,
    onContentChange: setContent,
    children: /* @__PURE__ */ jsx52(MenuRootProvider, {
      scope: __scopeMenu,
      onClose: React46.useCallback(() => handleOpenChange(false), [handleOpenChange]),
      isUsingKeyboardRef,
      dir: direction,
      modal,
      children
    })
  }) });
};
Menu.displayName = MENU_NAME;
var ANCHOR_NAME2 = "MenuAnchor";
var MenuAnchor = React46.forwardRef((props, forwardedRef) => {
  const { __scopeMenu, ...anchorProps } = props;
  const popperScope = usePopperScope3(__scopeMenu);
  return /* @__PURE__ */ jsx52(Anchor, { ...popperScope, ...anchorProps, ref: forwardedRef });
});
MenuAnchor.displayName = ANCHOR_NAME2;
var PORTAL_NAME6 = "MenuPortal";
var [PortalProvider3, usePortalContext3] = createMenuContext(PORTAL_NAME6, {
  forceMount: undefined
});
var MenuPortal = (props) => {
  const { __scopeMenu, forceMount, children, container } = props;
  const context = useMenuContext(PORTAL_NAME6, __scopeMenu);
  return /* @__PURE__ */ jsx52(PortalProvider3, { scope: __scopeMenu, forceMount, children: /* @__PURE__ */ jsx52(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsx52(Portal, { asChild: true, container, children }) }) });
};
MenuPortal.displayName = PORTAL_NAME6;
var CONTENT_NAME8 = "MenuContent";
var [MenuContentProvider, useMenuContentContext] = createMenuContext(CONTENT_NAME8);
var MenuContent = React46.forwardRef((props, forwardedRef) => {
  const portalContext = usePortalContext3(CONTENT_NAME8, props.__scopeMenu);
  const { forceMount = portalContext.forceMount, ...contentProps } = props;
  const context = useMenuContext(CONTENT_NAME8, props.__scopeMenu);
  const rootContext = useMenuRootContext(CONTENT_NAME8, props.__scopeMenu);
  return /* @__PURE__ */ jsx52(Collection4.Provider, { scope: props.__scopeMenu, children: /* @__PURE__ */ jsx52(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsx52(Collection4.Slot, { scope: props.__scopeMenu, children: rootContext.modal ? /* @__PURE__ */ jsx52(MenuRootContentModal, { ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ jsx52(MenuRootContentNonModal, { ...contentProps, ref: forwardedRef }) }) }) });
});
var MenuRootContentModal = React46.forwardRef((props, forwardedRef) => {
  const context = useMenuContext(CONTENT_NAME8, props.__scopeMenu);
  const ref = React46.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  React46.useEffect(() => {
    const content = ref.current;
    if (content)
      return hideOthers(content);
  }, []);
  return /* @__PURE__ */ jsx52(MenuContentImpl, {
    ...props,
    ref: composedRefs,
    trapFocus: context.open,
    disableOutsidePointerEvents: context.open,
    disableOutsideScroll: true,
    onFocusOutside: composeEventHandlers(props.onFocusOutside, (event) => event.preventDefault(), { checkForDefaultPrevented: false }),
    onDismiss: () => context.onOpenChange(false)
  });
});
var MenuRootContentNonModal = React46.forwardRef((props, forwardedRef) => {
  const context = useMenuContext(CONTENT_NAME8, props.__scopeMenu);
  return /* @__PURE__ */ jsx52(MenuContentImpl, {
    ...props,
    ref: forwardedRef,
    trapFocus: false,
    disableOutsidePointerEvents: false,
    disableOutsideScroll: false,
    onDismiss: () => context.onOpenChange(false)
  });
});
var Slot4 = createSlot("MenuContent.ScrollLock");
var MenuContentImpl = React46.forwardRef((props, forwardedRef) => {
  const {
    __scopeMenu,
    loop = false,
    trapFocus,
    onOpenAutoFocus,
    onCloseAutoFocus,
    disableOutsidePointerEvents,
    onEntryFocus,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside,
    onInteractOutside,
    onDismiss,
    disableOutsideScroll,
    ...contentProps
  } = props;
  const context = useMenuContext(CONTENT_NAME8, __scopeMenu);
  const rootContext = useMenuRootContext(CONTENT_NAME8, __scopeMenu);
  const popperScope = usePopperScope3(__scopeMenu);
  const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeMenu);
  const getItems = useCollection4(__scopeMenu);
  const [currentItemId, setCurrentItemId] = React46.useState(null);
  const contentRef = React46.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, contentRef, context.onContentChange);
  const timerRef = React46.useRef(0);
  const searchRef = React46.useRef("");
  const pointerGraceTimerRef = React46.useRef(0);
  const pointerGraceIntentRef = React46.useRef(null);
  const pointerDirRef = React46.useRef("right");
  const lastPointerXRef = React46.useRef(0);
  const ScrollLockWrapper = disableOutsideScroll ? Combination_default : React46.Fragment;
  const scrollLockWrapperProps = disableOutsideScroll ? { as: Slot4, allowPinchZoom: true } : undefined;
  const handleTypeaheadSearch = (key) => {
    const search = searchRef.current + key;
    const items = getItems().filter((item) => !item.disabled);
    const currentItem = document.activeElement;
    const currentMatch = items.find((item) => item.ref.current === currentItem)?.textValue;
    const values = items.map((item) => item.textValue);
    const nextMatch = getNextMatch(values, search, currentMatch);
    const newItem = items.find((item) => item.textValue === nextMatch)?.ref.current;
    (function updateSearch(value) {
      searchRef.current = value;
      window.clearTimeout(timerRef.current);
      if (value !== "")
        timerRef.current = window.setTimeout(() => updateSearch(""), 1000);
    })(search);
    if (newItem) {
      setTimeout(() => newItem.focus());
    }
  };
  React46.useEffect(() => {
    return () => window.clearTimeout(timerRef.current);
  }, []);
  useFocusGuards();
  const isPointerMovingToSubmenu = React46.useCallback((event) => {
    const isMovingTowards = pointerDirRef.current === pointerGraceIntentRef.current?.side;
    return isMovingTowards && isPointerInGraceArea(event, pointerGraceIntentRef.current?.area);
  }, []);
  return /* @__PURE__ */ jsx52(MenuContentProvider, {
    scope: __scopeMenu,
    searchRef,
    onItemEnter: React46.useCallback((event) => {
      if (isPointerMovingToSubmenu(event))
        event.preventDefault();
    }, [isPointerMovingToSubmenu]),
    onItemLeave: React46.useCallback((event) => {
      if (isPointerMovingToSubmenu(event))
        return;
      contentRef.current?.focus();
      setCurrentItemId(null);
    }, [isPointerMovingToSubmenu]),
    onTriggerLeave: React46.useCallback((event) => {
      if (isPointerMovingToSubmenu(event))
        event.preventDefault();
    }, [isPointerMovingToSubmenu]),
    pointerGraceTimerRef,
    onPointerGraceIntentChange: React46.useCallback((intent) => {
      pointerGraceIntentRef.current = intent;
    }, []),
    children: /* @__PURE__ */ jsx52(ScrollLockWrapper, { ...scrollLockWrapperProps, children: /* @__PURE__ */ jsx52(FocusScope, {
      asChild: true,
      trapped: trapFocus,
      onMountAutoFocus: composeEventHandlers(onOpenAutoFocus, (event) => {
        event.preventDefault();
        contentRef.current?.focus({ preventScroll: true });
      }),
      onUnmountAutoFocus: onCloseAutoFocus,
      children: /* @__PURE__ */ jsx52(DismissableLayer, {
        asChild: true,
        disableOutsidePointerEvents,
        onEscapeKeyDown,
        onPointerDownOutside,
        onFocusOutside,
        onInteractOutside,
        onDismiss,
        children: /* @__PURE__ */ jsx52(Root9, {
          asChild: true,
          ...rovingFocusGroupScope,
          dir: rootContext.dir,
          orientation: "vertical",
          loop,
          currentTabStopId: currentItemId,
          onCurrentTabStopIdChange: setCurrentItemId,
          onEntryFocus: composeEventHandlers(onEntryFocus, (event) => {
            if (!rootContext.isUsingKeyboardRef.current)
              event.preventDefault();
          }),
          preventScrollOnEntryFocus: true,
          children: /* @__PURE__ */ jsx52(Content, {
            role: "menu",
            "aria-orientation": "vertical",
            "data-state": getOpenState(context.open),
            "data-radix-menu-content": "",
            dir: rootContext.dir,
            ...popperScope,
            ...contentProps,
            ref: composedRefs,
            style: { outline: "none", ...contentProps.style },
            onKeyDown: composeEventHandlers(contentProps.onKeyDown, (event) => {
              const target = event.target;
              const isKeyDownInside = target.closest("[data-radix-menu-content]") === event.currentTarget;
              const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
              const isCharacterKey = event.key.length === 1;
              if (isKeyDownInside) {
                if (event.key === "Tab")
                  event.preventDefault();
                if (!isModifierKey && isCharacterKey)
                  handleTypeaheadSearch(event.key);
              }
              const content = contentRef.current;
              if (event.target !== content)
                return;
              if (!FIRST_LAST_KEYS.includes(event.key))
                return;
              event.preventDefault();
              const items = getItems().filter((item) => !item.disabled);
              const candidateNodes = items.map((item) => item.ref.current);
              if (LAST_KEYS.includes(event.key))
                candidateNodes.reverse();
              focusFirst3(candidateNodes);
            }),
            onBlur: composeEventHandlers(props.onBlur, (event) => {
              if (!event.currentTarget.contains(event.target)) {
                window.clearTimeout(timerRef.current);
                searchRef.current = "";
              }
            }),
            onPointerMove: composeEventHandlers(props.onPointerMove, whenMouse((event) => {
              const target = event.target;
              const pointerXHasChanged = lastPointerXRef.current !== event.clientX;
              if (event.currentTarget.contains(target) && pointerXHasChanged) {
                const newDir = event.clientX > lastPointerXRef.current ? "right" : "left";
                pointerDirRef.current = newDir;
                lastPointerXRef.current = event.clientX;
              }
            }))
          })
        })
      })
    }) })
  });
});
MenuContent.displayName = CONTENT_NAME8;
var GROUP_NAME3 = "MenuGroup";
var MenuGroup = React46.forwardRef((props, forwardedRef) => {
  const { __scopeMenu, ...groupProps } = props;
  return /* @__PURE__ */ jsx52(Primitive.div, { role: "group", ...groupProps, ref: forwardedRef });
});
MenuGroup.displayName = GROUP_NAME3;
var LABEL_NAME2 = "MenuLabel";
var MenuLabel = React46.forwardRef((props, forwardedRef) => {
  const { __scopeMenu, ...labelProps } = props;
  return /* @__PURE__ */ jsx52(Primitive.div, { ...labelProps, ref: forwardedRef });
});
MenuLabel.displayName = LABEL_NAME2;
var ITEM_NAME4 = "MenuItem";
var ITEM_SELECT = "menu.itemSelect";
var MenuItem = React46.forwardRef((props, forwardedRef) => {
  const { disabled = false, onSelect, ...itemProps } = props;
  const ref = React46.useRef(null);
  const rootContext = useMenuRootContext(ITEM_NAME4, props.__scopeMenu);
  const contentContext = useMenuContentContext(ITEM_NAME4, props.__scopeMenu);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const isPointerDownRef = React46.useRef(false);
  const handleSelect = () => {
    const menuItem = ref.current;
    if (!disabled && menuItem) {
      const itemSelectEvent = new CustomEvent(ITEM_SELECT, { bubbles: true, cancelable: true });
      menuItem.addEventListener(ITEM_SELECT, (event) => onSelect?.(event), { once: true });
      dispatchDiscreteCustomEvent(menuItem, itemSelectEvent);
      if (itemSelectEvent.defaultPrevented) {
        isPointerDownRef.current = false;
      } else {
        rootContext.onClose();
      }
    }
  };
  return /* @__PURE__ */ jsx52(MenuItemImpl, {
    ...itemProps,
    ref: composedRefs,
    disabled,
    onClick: composeEventHandlers(props.onClick, handleSelect),
    onPointerDown: (event) => {
      props.onPointerDown?.(event);
      isPointerDownRef.current = true;
    },
    onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
      if (!isPointerDownRef.current)
        event.currentTarget?.click();
    }),
    onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
      const isTypingAhead = contentContext.searchRef.current !== "";
      if (disabled || isTypingAhead && event.key === " ")
        return;
      if (SELECTION_KEYS2.includes(event.key)) {
        event.currentTarget.click();
        event.preventDefault();
      }
    })
  });
});
MenuItem.displayName = ITEM_NAME4;
var MenuItemImpl = React46.forwardRef((props, forwardedRef) => {
  const { __scopeMenu, disabled = false, textValue, ...itemProps } = props;
  const contentContext = useMenuContentContext(ITEM_NAME4, __scopeMenu);
  const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeMenu);
  const ref = React46.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const [isFocused, setIsFocused] = React46.useState(false);
  const [textContent, setTextContent] = React46.useState("");
  React46.useEffect(() => {
    const menuItem = ref.current;
    if (menuItem) {
      setTextContent((menuItem.textContent ?? "").trim());
    }
  }, [itemProps.children]);
  return /* @__PURE__ */ jsx52(Collection4.ItemSlot, {
    scope: __scopeMenu,
    disabled,
    textValue: textValue ?? textContent,
    children: /* @__PURE__ */ jsx52(Item3, { asChild: true, ...rovingFocusGroupScope, focusable: !disabled, children: /* @__PURE__ */ jsx52(Primitive.div, {
      role: "menuitem",
      "data-highlighted": isFocused ? "" : undefined,
      "aria-disabled": disabled || undefined,
      "data-disabled": disabled ? "" : undefined,
      ...itemProps,
      ref: composedRefs,
      onPointerMove: composeEventHandlers(props.onPointerMove, whenMouse((event) => {
        if (disabled) {
          contentContext.onItemLeave(event);
        } else {
          contentContext.onItemEnter(event);
          if (!event.defaultPrevented) {
            const item = event.currentTarget;
            item.focus({ preventScroll: true });
          }
        }
      })),
      onPointerLeave: composeEventHandlers(props.onPointerLeave, whenMouse((event) => contentContext.onItemLeave(event))),
      onFocus: composeEventHandlers(props.onFocus, () => setIsFocused(true)),
      onBlur: composeEventHandlers(props.onBlur, () => setIsFocused(false))
    }) })
  });
});
var CHECKBOX_ITEM_NAME = "MenuCheckboxItem";
var MenuCheckboxItem = React46.forwardRef((props, forwardedRef) => {
  const { checked = false, onCheckedChange, ...checkboxItemProps } = props;
  return /* @__PURE__ */ jsx52(ItemIndicatorProvider, { scope: props.__scopeMenu, checked, children: /* @__PURE__ */ jsx52(MenuItem, {
    role: "menuitemcheckbox",
    "aria-checked": isIndeterminate(checked) ? "mixed" : checked,
    ...checkboxItemProps,
    ref: forwardedRef,
    "data-state": getCheckedState(checked),
    onSelect: composeEventHandlers(checkboxItemProps.onSelect, () => onCheckedChange?.(isIndeterminate(checked) ? true : !checked), { checkForDefaultPrevented: false })
  }) });
});
MenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME;
var RADIO_GROUP_NAME = "MenuRadioGroup";
var [RadioGroupProvider, useRadioGroupContext] = createMenuContext(RADIO_GROUP_NAME, { value: undefined, onValueChange: () => {} });
var MenuRadioGroup = React46.forwardRef((props, forwardedRef) => {
  const { value, onValueChange, ...groupProps } = props;
  const handleValueChange = useCallbackRef(onValueChange);
  return /* @__PURE__ */ jsx52(RadioGroupProvider, { scope: props.__scopeMenu, value, onValueChange: handleValueChange, children: /* @__PURE__ */ jsx52(MenuGroup, { ...groupProps, ref: forwardedRef }) });
});
MenuRadioGroup.displayName = RADIO_GROUP_NAME;
var RADIO_ITEM_NAME = "MenuRadioItem";
var MenuRadioItem = React46.forwardRef((props, forwardedRef) => {
  const { value, ...radioItemProps } = props;
  const context = useRadioGroupContext(RADIO_ITEM_NAME, props.__scopeMenu);
  const checked = value === context.value;
  return /* @__PURE__ */ jsx52(ItemIndicatorProvider, { scope: props.__scopeMenu, checked, children: /* @__PURE__ */ jsx52(MenuItem, {
    role: "menuitemradio",
    "aria-checked": checked,
    ...radioItemProps,
    ref: forwardedRef,
    "data-state": getCheckedState(checked),
    onSelect: composeEventHandlers(radioItemProps.onSelect, () => context.onValueChange?.(value), { checkForDefaultPrevented: false })
  }) });
});
MenuRadioItem.displayName = RADIO_ITEM_NAME;
var ITEM_INDICATOR_NAME2 = "MenuItemIndicator";
var [ItemIndicatorProvider, useItemIndicatorContext] = createMenuContext(ITEM_INDICATOR_NAME2, { checked: false });
var MenuItemIndicator = React46.forwardRef((props, forwardedRef) => {
  const { __scopeMenu, forceMount, ...itemIndicatorProps } = props;
  const indicatorContext = useItemIndicatorContext(ITEM_INDICATOR_NAME2, __scopeMenu);
  return /* @__PURE__ */ jsx52(Presence, {
    present: forceMount || isIndeterminate(indicatorContext.checked) || indicatorContext.checked === true,
    children: /* @__PURE__ */ jsx52(Primitive.span, {
      ...itemIndicatorProps,
      ref: forwardedRef,
      "data-state": getCheckedState(indicatorContext.checked)
    })
  });
});
MenuItemIndicator.displayName = ITEM_INDICATOR_NAME2;
var SEPARATOR_NAME2 = "MenuSeparator";
var MenuSeparator = React46.forwardRef((props, forwardedRef) => {
  const { __scopeMenu, ...separatorProps } = props;
  return /* @__PURE__ */ jsx52(Primitive.div, {
    role: "separator",
    "aria-orientation": "horizontal",
    ...separatorProps,
    ref: forwardedRef
  });
});
MenuSeparator.displayName = SEPARATOR_NAME2;
var ARROW_NAME4 = "MenuArrow";
var MenuArrow = React46.forwardRef((props, forwardedRef) => {
  const { __scopeMenu, ...arrowProps } = props;
  const popperScope = usePopperScope3(__scopeMenu);
  return /* @__PURE__ */ jsx52(Arrow2, { ...popperScope, ...arrowProps, ref: forwardedRef });
});
MenuArrow.displayName = ARROW_NAME4;
var SUB_NAME = "MenuSub";
var [MenuSubProvider, useMenuSubContext] = createMenuContext(SUB_NAME);
var MenuSub = (props) => {
  const { __scopeMenu, children, open = false, onOpenChange } = props;
  const parentMenuContext = useMenuContext(SUB_NAME, __scopeMenu);
  const popperScope = usePopperScope3(__scopeMenu);
  const [trigger, setTrigger] = React46.useState(null);
  const [content, setContent] = React46.useState(null);
  const handleOpenChange = useCallbackRef(onOpenChange);
  React46.useEffect(() => {
    if (parentMenuContext.open === false)
      handleOpenChange(false);
    return () => handleOpenChange(false);
  }, [parentMenuContext.open, handleOpenChange]);
  return /* @__PURE__ */ jsx52(Root2, { ...popperScope, children: /* @__PURE__ */ jsx52(MenuProvider, {
    scope: __scopeMenu,
    open,
    onOpenChange: handleOpenChange,
    content,
    onContentChange: setContent,
    children: /* @__PURE__ */ jsx52(MenuSubProvider, {
      scope: __scopeMenu,
      contentId: useId(),
      triggerId: useId(),
      trigger,
      onTriggerChange: setTrigger,
      children
    })
  }) });
};
MenuSub.displayName = SUB_NAME;
var SUB_TRIGGER_NAME = "MenuSubTrigger";
var MenuSubTrigger = React46.forwardRef((props, forwardedRef) => {
  const context = useMenuContext(SUB_TRIGGER_NAME, props.__scopeMenu);
  const rootContext = useMenuRootContext(SUB_TRIGGER_NAME, props.__scopeMenu);
  const subContext = useMenuSubContext(SUB_TRIGGER_NAME, props.__scopeMenu);
  const contentContext = useMenuContentContext(SUB_TRIGGER_NAME, props.__scopeMenu);
  const openTimerRef = React46.useRef(null);
  const { pointerGraceTimerRef, onPointerGraceIntentChange } = contentContext;
  const scope = { __scopeMenu: props.__scopeMenu };
  const clearOpenTimer = React46.useCallback(() => {
    if (openTimerRef.current)
      window.clearTimeout(openTimerRef.current);
    openTimerRef.current = null;
  }, []);
  React46.useEffect(() => clearOpenTimer, [clearOpenTimer]);
  React46.useEffect(() => {
    const pointerGraceTimer = pointerGraceTimerRef.current;
    return () => {
      window.clearTimeout(pointerGraceTimer);
      onPointerGraceIntentChange(null);
    };
  }, [pointerGraceTimerRef, onPointerGraceIntentChange]);
  return /* @__PURE__ */ jsx52(MenuAnchor, { asChild: true, ...scope, children: /* @__PURE__ */ jsx52(MenuItemImpl, {
    id: subContext.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": context.open,
    "aria-controls": subContext.contentId,
    "data-state": getOpenState(context.open),
    ...props,
    ref: composeRefs(forwardedRef, subContext.onTriggerChange),
    onClick: (event) => {
      props.onClick?.(event);
      if (props.disabled || event.defaultPrevented)
        return;
      event.currentTarget.focus();
      if (!context.open)
        context.onOpenChange(true);
    },
    onPointerMove: composeEventHandlers(props.onPointerMove, whenMouse((event) => {
      contentContext.onItemEnter(event);
      if (event.defaultPrevented)
        return;
      if (!props.disabled && !context.open && !openTimerRef.current) {
        contentContext.onPointerGraceIntentChange(null);
        openTimerRef.current = window.setTimeout(() => {
          context.onOpenChange(true);
          clearOpenTimer();
        }, 100);
      }
    })),
    onPointerLeave: composeEventHandlers(props.onPointerLeave, whenMouse((event) => {
      clearOpenTimer();
      const contentRect = context.content?.getBoundingClientRect();
      if (contentRect) {
        const side = context.content?.dataset.side;
        const rightSide = side === "right";
        const bleed = rightSide ? -5 : 5;
        const contentNearEdge = contentRect[rightSide ? "left" : "right"];
        const contentFarEdge = contentRect[rightSide ? "right" : "left"];
        contentContext.onPointerGraceIntentChange({
          area: [
            { x: event.clientX + bleed, y: event.clientY },
            { x: contentNearEdge, y: contentRect.top },
            { x: contentFarEdge, y: contentRect.top },
            { x: contentFarEdge, y: contentRect.bottom },
            { x: contentNearEdge, y: contentRect.bottom }
          ],
          side
        });
        window.clearTimeout(pointerGraceTimerRef.current);
        pointerGraceTimerRef.current = window.setTimeout(() => contentContext.onPointerGraceIntentChange(null), 300);
      } else {
        contentContext.onTriggerLeave(event);
        if (event.defaultPrevented)
          return;
        contentContext.onPointerGraceIntentChange(null);
      }
    })),
    onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
      const isTypingAhead = contentContext.searchRef.current !== "";
      if (props.disabled || isTypingAhead && event.key === " ")
        return;
      if (SUB_OPEN_KEYS[rootContext.dir].includes(event.key)) {
        context.onOpenChange(true);
        context.content?.focus();
        event.preventDefault();
      }
    })
  }) });
});
MenuSubTrigger.displayName = SUB_TRIGGER_NAME;
var SUB_CONTENT_NAME = "MenuSubContent";
var MenuSubContent = React46.forwardRef((props, forwardedRef) => {
  const portalContext = usePortalContext3(CONTENT_NAME8, props.__scopeMenu);
  const { forceMount = portalContext.forceMount, ...subContentProps } = props;
  const context = useMenuContext(CONTENT_NAME8, props.__scopeMenu);
  const rootContext = useMenuRootContext(CONTENT_NAME8, props.__scopeMenu);
  const subContext = useMenuSubContext(SUB_CONTENT_NAME, props.__scopeMenu);
  const ref = React46.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  return /* @__PURE__ */ jsx52(Collection4.Provider, { scope: props.__scopeMenu, children: /* @__PURE__ */ jsx52(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsx52(Collection4.Slot, { scope: props.__scopeMenu, children: /* @__PURE__ */ jsx52(MenuContentImpl, {
    id: subContext.contentId,
    "aria-labelledby": subContext.triggerId,
    ...subContentProps,
    ref: composedRefs,
    align: "start",
    side: rootContext.dir === "rtl" ? "left" : "right",
    disableOutsidePointerEvents: false,
    disableOutsideScroll: false,
    trapFocus: false,
    onOpenAutoFocus: (event) => {
      if (rootContext.isUsingKeyboardRef.current)
        ref.current?.focus();
      event.preventDefault();
    },
    onCloseAutoFocus: (event) => event.preventDefault(),
    onFocusOutside: composeEventHandlers(props.onFocusOutside, (event) => {
      if (event.target !== subContext.trigger)
        context.onOpenChange(false);
    }),
    onEscapeKeyDown: composeEventHandlers(props.onEscapeKeyDown, (event) => {
      rootContext.onClose();
      event.preventDefault();
    }),
    onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
      const isKeyDownInside = event.currentTarget.contains(event.target);
      const isCloseKey = SUB_CLOSE_KEYS[rootContext.dir].includes(event.key);
      if (isKeyDownInside && isCloseKey) {
        context.onOpenChange(false);
        subContext.trigger?.focus();
        event.preventDefault();
      }
    })
  }) }) }) });
});
MenuSubContent.displayName = SUB_CONTENT_NAME;
function getOpenState(open) {
  return open ? "open" : "closed";
}
function isIndeterminate(checked) {
  return checked === "indeterminate";
}
function getCheckedState(checked) {
  return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
function focusFirst3(candidates) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT)
      return;
    candidate.focus();
    if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT)
      return;
  }
}
function wrapArray3(array, startIndex) {
  return array.map((_, index2) => array[(startIndex + index2) % array.length]);
}
function getNextMatch(values, search, currentMatch) {
  const isRepeated = search.length > 1 && Array.from(search).every((char) => char === search[0]);
  const normalizedSearch = isRepeated ? search[0] : search;
  const currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1;
  let wrappedValues = wrapArray3(values, Math.max(currentMatchIndex, 0));
  const excludeCurrentMatch = normalizedSearch.length === 1;
  if (excludeCurrentMatch)
    wrappedValues = wrappedValues.filter((v) => v !== currentMatch);
  const nextMatch = wrappedValues.find((value) => value.toLowerCase().startsWith(normalizedSearch.toLowerCase()));
  return nextMatch !== currentMatch ? nextMatch : undefined;
}
function isPointInPolygon2(point, polygon) {
  const { x, y } = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1;i < polygon.length; j = i++) {
    const ii = polygon[i];
    const jj = polygon[j];
    const xi = ii.x;
    const yi = ii.y;
    const xj = jj.x;
    const yj = jj.y;
    const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect)
      inside = !inside;
  }
  return inside;
}
function isPointerInGraceArea(event, area) {
  if (!area)
    return false;
  const cursorPos = { x: event.clientX, y: event.clientY };
  return isPointInPolygon2(cursorPos, area);
}
function whenMouse(handler) {
  return (event) => event.pointerType === "mouse" ? handler(event) : undefined;
}
var Root33 = Menu;
var Anchor2 = MenuAnchor;
var Portal5 = MenuPortal;
var Content25 = MenuContent;
var Group2 = MenuGroup;
var Label2 = MenuLabel;
var Item22 = MenuItem;
var CheckboxItem = MenuCheckboxItem;
var RadioGroup = MenuRadioGroup;
var RadioItem = MenuRadioItem;
var ItemIndicator2 = MenuItemIndicator;
var Separator2 = MenuSeparator;
var Arrow23 = MenuArrow;
var Sub = MenuSub;
var SubTrigger = MenuSubTrigger;
var SubContent = MenuSubContent;

// ../../node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs
import { jsx as jsx53 } from "react/jsx-runtime";
"use client";
var DROPDOWN_MENU_NAME = "DropdownMenu";
var [createDropdownMenuContext, createDropdownMenuScope] = createContextScope(DROPDOWN_MENU_NAME, [createMenuScope]);
var useMenuScope = createMenuScope();
var [DropdownMenuProvider, useDropdownMenuContext] = createDropdownMenuContext(DROPDOWN_MENU_NAME);
var DropdownMenu = (props) => {
  const {
    __scopeDropdownMenu,
    children,
    dir,
    open: openProp,
    defaultOpen,
    onOpenChange,
    modal = true
  } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  const triggerRef = React47.useRef(null);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
    caller: DROPDOWN_MENU_NAME
  });
  return /* @__PURE__ */ jsx53(DropdownMenuProvider, {
    scope: __scopeDropdownMenu,
    triggerId: useId(),
    triggerRef,
    contentId: useId(),
    open,
    onOpenChange: setOpen,
    onOpenToggle: React47.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
    modal,
    children: /* @__PURE__ */ jsx53(Root33, { ...menuScope, open, onOpenChange: setOpen, dir, modal, children })
  });
};
DropdownMenu.displayName = DROPDOWN_MENU_NAME;
var TRIGGER_NAME7 = "DropdownMenuTrigger";
var DropdownMenuTrigger = React47.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, disabled = false, ...triggerProps } = props;
  const context = useDropdownMenuContext(TRIGGER_NAME7, __scopeDropdownMenu);
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ jsx53(Anchor2, { asChild: true, ...menuScope, children: /* @__PURE__ */ jsx53(Primitive.button, {
    type: "button",
    id: context.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": context.open,
    "aria-controls": context.open ? context.contentId : undefined,
    "data-state": context.open ? "open" : "closed",
    "data-disabled": disabled ? "" : undefined,
    disabled,
    ...triggerProps,
    ref: composeRefs(forwardedRef, context.triggerRef),
    onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
      if (!disabled && event.button === 0 && event.ctrlKey === false) {
        context.onOpenToggle();
        if (!context.open)
          event.preventDefault();
      }
    }),
    onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
      if (disabled)
        return;
      if (["Enter", " "].includes(event.key))
        context.onOpenToggle();
      if (event.key === "ArrowDown")
        context.onOpenChange(true);
      if (["Enter", " ", "ArrowDown"].includes(event.key))
        event.preventDefault();
    })
  }) });
});
DropdownMenuTrigger.displayName = TRIGGER_NAME7;
var PORTAL_NAME7 = "DropdownMenuPortal";
var DropdownMenuPortal = (props) => {
  const { __scopeDropdownMenu, ...portalProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ jsx53(Portal5, { ...menuScope, ...portalProps });
};
DropdownMenuPortal.displayName = PORTAL_NAME7;
var CONTENT_NAME9 = "DropdownMenuContent";
var DropdownMenuContent = React47.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...contentProps } = props;
  const context = useDropdownMenuContext(CONTENT_NAME9, __scopeDropdownMenu);
  const menuScope = useMenuScope(__scopeDropdownMenu);
  const hasInteractedOutsideRef = React47.useRef(false);
  return /* @__PURE__ */ jsx53(Content25, {
    id: context.contentId,
    "aria-labelledby": context.triggerId,
    ...menuScope,
    ...contentProps,
    ref: forwardedRef,
    onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
      if (!hasInteractedOutsideRef.current)
        context.triggerRef.current?.focus();
      hasInteractedOutsideRef.current = false;
      event.preventDefault();
    }),
    onInteractOutside: composeEventHandlers(props.onInteractOutside, (event) => {
      const originalEvent = event.detail.originalEvent;
      const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
      const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
      if (!context.modal || isRightClick)
        hasInteractedOutsideRef.current = true;
    }),
    style: {
      ...props.style,
      ...{
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  });
});
DropdownMenuContent.displayName = CONTENT_NAME9;
var GROUP_NAME4 = "DropdownMenuGroup";
var DropdownMenuGroup = React47.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...groupProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ jsx53(Group2, { ...menuScope, ...groupProps, ref: forwardedRef });
});
DropdownMenuGroup.displayName = GROUP_NAME4;
var LABEL_NAME3 = "DropdownMenuLabel";
var DropdownMenuLabel = React47.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...labelProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ jsx53(Label2, { ...menuScope, ...labelProps, ref: forwardedRef });
});
DropdownMenuLabel.displayName = LABEL_NAME3;
var ITEM_NAME5 = "DropdownMenuItem";
var DropdownMenuItem = React47.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...itemProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ jsx53(Item22, { ...menuScope, ...itemProps, ref: forwardedRef });
});
DropdownMenuItem.displayName = ITEM_NAME5;
var CHECKBOX_ITEM_NAME2 = "DropdownMenuCheckboxItem";
var DropdownMenuCheckboxItem = React47.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...checkboxItemProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ jsx53(CheckboxItem, { ...menuScope, ...checkboxItemProps, ref: forwardedRef });
});
DropdownMenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME2;
var RADIO_GROUP_NAME2 = "DropdownMenuRadioGroup";
var DropdownMenuRadioGroup = React47.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...radioGroupProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ jsx53(RadioGroup, { ...menuScope, ...radioGroupProps, ref: forwardedRef });
});
DropdownMenuRadioGroup.displayName = RADIO_GROUP_NAME2;
var RADIO_ITEM_NAME2 = "DropdownMenuRadioItem";
var DropdownMenuRadioItem = React47.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...radioItemProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ jsx53(RadioItem, { ...menuScope, ...radioItemProps, ref: forwardedRef });
});
DropdownMenuRadioItem.displayName = RADIO_ITEM_NAME2;
var INDICATOR_NAME = "DropdownMenuItemIndicator";
var DropdownMenuItemIndicator = React47.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...itemIndicatorProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ jsx53(ItemIndicator2, { ...menuScope, ...itemIndicatorProps, ref: forwardedRef });
});
DropdownMenuItemIndicator.displayName = INDICATOR_NAME;
var SEPARATOR_NAME3 = "DropdownMenuSeparator";
var DropdownMenuSeparator = React47.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...separatorProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ jsx53(Separator2, { ...menuScope, ...separatorProps, ref: forwardedRef });
});
DropdownMenuSeparator.displayName = SEPARATOR_NAME3;
var ARROW_NAME5 = "DropdownMenuArrow";
var DropdownMenuArrow = React47.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...arrowProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ jsx53(Arrow23, { ...menuScope, ...arrowProps, ref: forwardedRef });
});
DropdownMenuArrow.displayName = ARROW_NAME5;
var DropdownMenuSub = (props) => {
  const { __scopeDropdownMenu, children, open: openProp, onOpenChange, defaultOpen } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ jsx53(Sub, { ...menuScope, open, onOpenChange: setOpen, children });
};
var SUB_TRIGGER_NAME2 = "DropdownMenuSubTrigger";
var DropdownMenuSubTrigger = React47.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...subTriggerProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ jsx53(SubTrigger, { ...menuScope, ...subTriggerProps, ref: forwardedRef });
});
DropdownMenuSubTrigger.displayName = SUB_TRIGGER_NAME2;
var SUB_CONTENT_NAME2 = "DropdownMenuSubContent";
var DropdownMenuSubContent = React47.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...subContentProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ jsx53(SubContent, {
    ...menuScope,
    ...subContentProps,
    ref: forwardedRef,
    style: {
      ...props.style,
      ...{
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  });
});
DropdownMenuSubContent.displayName = SUB_CONTENT_NAME2;
var Root25 = DropdownMenu;
var Trigger5 = DropdownMenuTrigger;
var Portal23 = DropdownMenuPortal;
var Content26 = DropdownMenuContent;
var Group22 = DropdownMenuGroup;
var Label22 = DropdownMenuLabel;
var Item23 = DropdownMenuItem;
var CheckboxItem2 = DropdownMenuCheckboxItem;
var RadioGroup2 = DropdownMenuRadioGroup;
var RadioItem2 = DropdownMenuRadioItem;
var ItemIndicator22 = DropdownMenuItemIndicator;
var Separator22 = DropdownMenuSeparator;
var Sub2 = DropdownMenuSub;
var SubTrigger2 = DropdownMenuSubTrigger;
var SubContent2 = DropdownMenuSubContent;

// src/shadcn-ui/components/dropdown-menu.tsx
import clsx15 from "clsx";
import { jsx as jsx54, jsxs as jsxs18 } from "react/jsx-runtime";
function DropdownMenu2({ ...props }) {
  return /* @__PURE__ */ jsx54(Root25, {
    "data-slot": "dropdown-menu",
    ...props
  });
}
function DropdownMenuPortal2({ ...props }) {
  return /* @__PURE__ */ jsx54(Portal23, {
    "data-slot": "dropdown-menu-portal",
    ...props
  });
}
function DropdownMenuTrigger2({ ...props }) {
  return /* @__PURE__ */ jsx54(Trigger5, {
    "data-slot": "dropdown-menu-trigger",
    ...props
  });
}
function DropdownMenuContent2({ className, sideOffset = 4, ...props }) {
  return /* @__PURE__ */ jsx54(Portal23, {
    children: /* @__PURE__ */ jsx54(Content26, {
      "data-slot": "dropdown-menu-content",
      sideOffset,
      className: clsx15("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=closed]:animate-out data-[state=open]:animate-in", className),
      ...props
    })
  });
}
function DropdownMenuGroup2({ ...props }) {
  return /* @__PURE__ */ jsx54(Group22, {
    "data-slot": "dropdown-menu-group",
    ...props
  });
}
function DropdownMenuItem2({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx54(Item23, {
    "data-slot": "dropdown-menu-item",
    "data-inset": inset,
    "data-variant": variant,
    className: clsx15("data-[variant=destructive]:*:[svg]:!text-destructive relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[disabled]:opacity-50 data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props
  });
}
function DropdownMenuCheckboxItem2({ className, children, checked, ...props }) {
  return /* @__PURE__ */ jsxs18(CheckboxItem2, {
    "data-slot": "dropdown-menu-checkbox-item",
    className: clsx15("relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx54("span", {
        className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
        children: /* @__PURE__ */ jsx54(ItemIndicator22, {
          children: /* @__PURE__ */ jsx54(SvgIcon, {
            iconId: "Check",
            className: "size-4"
          })
        })
      }),
      children
    ]
  });
}
function DropdownMenuRadioGroup2({ ...props }) {
  return /* @__PURE__ */ jsx54(RadioGroup2, {
    "data-slot": "dropdown-menu-radio-group",
    ...props
  });
}
function DropdownMenuRadioItem2({ className, children, ...props }) {
  return /* @__PURE__ */ jsxs18(RadioItem2, {
    "data-slot": "dropdown-menu-radio-item",
    className: clsx15("relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx54("span", {
        className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
        children: /* @__PURE__ */ jsx54(ItemIndicator22, {
          children: /* @__PURE__ */ jsx54(SvgIcon, {
            iconId: "Circle",
            className: "size-2 fill-current"
          })
        })
      }),
      children
    ]
  });
}
function DropdownMenuLabel2({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsx54(Label22, {
    "data-slot": "dropdown-menu-label",
    "data-inset": inset,
    className: clsx15("px-2 py-1.5 font-medium text-sm data-[inset]:pl-8", className),
    ...props
  });
}
function DropdownMenuSeparator2({ className, ...props }) {
  return /* @__PURE__ */ jsx54(Separator22, {
    "data-slot": "dropdown-menu-separator",
    className: clsx15("-mx-1 my-1 h-px bg-border", className),
    ...props
  });
}
function DropdownMenuShortcut({ className, ...props }) {
  return /* @__PURE__ */ jsx54("span", {
    "data-slot": "dropdown-menu-shortcut",
    className: clsx15("ml-auto text-muted-foreground text-xs tracking-widest", className),
    ...props
  });
}
function DropdownMenuSub2({ ...props }) {
  return /* @__PURE__ */ jsx54(Sub2, {
    "data-slot": "dropdown-menu-sub",
    ...props
  });
}
function DropdownMenuSubTrigger2({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs18(SubTrigger2, {
    "data-slot": "dropdown-menu-sub-trigger",
    "data-inset": inset,
    className: clsx15("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[inset]:pl-8 data-[state=open]:text-accent-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx54(SvgIcon, {
        iconId: "ChevronRight",
        className: "ml-auto size-4"
      })
    ]
  });
}
function DropdownMenuSubContent2({ className, ...props }) {
  return /* @__PURE__ */ jsx54(SubContent2, {
    "data-slot": "dropdown-menu-sub-content",
    className: clsx15("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=closed]:animate-out data-[state=open]:animate-in", className),
    ...props
  });
}

// src/shadcn-ui/examples/breadcrumb-demo.tsx
import { jsx as jsx55, jsxs as jsxs19 } from "react/jsx-runtime";
function BreadcrumbDemo() {
  return /* @__PURE__ */ jsx55(Breadcrumb, {
    children: /* @__PURE__ */ jsxs19(BreadcrumbList, {
      children: [
        /* @__PURE__ */ jsx55(BreadcrumbItem, {
          children: /* @__PURE__ */ jsx55(BreadcrumbLink, {
            asChild: true,
            children: /* @__PURE__ */ jsx55(Link, {
              href: "/",
              children: "Home"
            })
          })
        }),
        /* @__PURE__ */ jsx55(BreadcrumbSeparator, {}),
        /* @__PURE__ */ jsx55(BreadcrumbItem, {
          children: /* @__PURE__ */ jsxs19(DropdownMenu2, {
            children: [
              /* @__PURE__ */ jsxs19(DropdownMenuTrigger2, {
                className: "flex items-center gap-1",
                children: [
                  /* @__PURE__ */ jsx55(BreadcrumbEllipsis, {
                    className: "size-4"
                  }),
                  /* @__PURE__ */ jsx55("span", {
                    className: "sr-only",
                    children: "Toggle menu"
                  })
                ]
              }),
              /* @__PURE__ */ jsxs19(DropdownMenuContent2, {
                align: "start",
                children: [
                  /* @__PURE__ */ jsx55(DropdownMenuItem2, {
                    children: "Documentation"
                  }),
                  /* @__PURE__ */ jsx55(DropdownMenuItem2, {
                    children: "Themes"
                  }),
                  /* @__PURE__ */ jsx55(DropdownMenuItem2, {
                    children: "GitHub"
                  })
                ]
              })
            ]
          })
        }),
        /* @__PURE__ */ jsx55(BreadcrumbSeparator, {}),
        /* @__PURE__ */ jsx55(BreadcrumbItem, {
          children: /* @__PURE__ */ jsx55(BreadcrumbLink, {
            asChild: true,
            children: /* @__PURE__ */ jsx55(Link, {
              href: "/docs/components",
              children: "Components"
            })
          })
        }),
        /* @__PURE__ */ jsx55(BreadcrumbSeparator, {}),
        /* @__PURE__ */ jsx55(BreadcrumbItem, {
          children: /* @__PURE__ */ jsx55(BreadcrumbPage, {
            children: "Breadcrumb"
          })
        })
      ]
    })
  });
}

// src/shadcn-ui/examples/breadcrumb-dropdown.tsx
import { jsx as jsx56, jsxs as jsxs20 } from "react/jsx-runtime";
function BreadcrumbWithDropdown({ spriteUrl }) {
  return /* @__PURE__ */ jsx56(Breadcrumb, {
    children: /* @__PURE__ */ jsxs20(BreadcrumbList, {
      children: [
        /* @__PURE__ */ jsx56(BreadcrumbItem, {
          children: /* @__PURE__ */ jsx56(BreadcrumbLink, {
            asChild: true,
            children: /* @__PURE__ */ jsx56(Link, {
              href: "/",
              children: "Home"
            })
          })
        }),
        /* @__PURE__ */ jsx56(BreadcrumbSeparator, {
          children: /* @__PURE__ */ jsx56(SpriteIcon, {
            iconId: "Slash",
            spriteUrl
          })
        }),
        /* @__PURE__ */ jsx56(BreadcrumbItem, {
          children: /* @__PURE__ */ jsxs20(DropdownMenu2, {
            children: [
              /* @__PURE__ */ jsxs20(DropdownMenuTrigger2, {
                className: "flex items-center gap-1 [&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0",
                children: [
                  "Components",
                  /* @__PURE__ */ jsx56(SpriteIcon, {
                    iconId: "ChevronDown",
                    spriteUrl
                  })
                ]
              }),
              /* @__PURE__ */ jsxs20(DropdownMenuContent2, {
                align: "start",
                children: [
                  /* @__PURE__ */ jsx56(DropdownMenuItem2, {
                    children: "Documentation"
                  }),
                  /* @__PURE__ */ jsx56(DropdownMenuItem2, {
                    children: "Themes"
                  }),
                  /* @__PURE__ */ jsx56(DropdownMenuItem2, {
                    children: "GitHub"
                  })
                ]
              })
            ]
          })
        }),
        /* @__PURE__ */ jsx56(BreadcrumbSeparator, {
          children: /* @__PURE__ */ jsx56(SpriteIcon, {
            iconId: "Slash",
            spriteUrl
          })
        }),
        /* @__PURE__ */ jsx56(BreadcrumbItem, {
          children: /* @__PURE__ */ jsx56(BreadcrumbPage, {
            children: "Breadcrumb"
          })
        })
      ]
    })
  });
}

// src/shadcn-ui/examples/breadcrumb-ellipsis.tsx
import { jsx as jsx57, jsxs as jsxs21 } from "react/jsx-runtime";
function BreadcrumbCollapsed() {
  return /* @__PURE__ */ jsx57(Breadcrumb, {
    children: /* @__PURE__ */ jsxs21(BreadcrumbList, {
      children: [
        /* @__PURE__ */ jsx57(BreadcrumbItem, {
          children: /* @__PURE__ */ jsx57(BreadcrumbLink, {
            asChild: true,
            children: /* @__PURE__ */ jsx57(Link, {
              href: "/",
              children: "Home"
            })
          })
        }),
        /* @__PURE__ */ jsx57(BreadcrumbSeparator, {}),
        /* @__PURE__ */ jsx57(BreadcrumbItem, {
          children: /* @__PURE__ */ jsx57(BreadcrumbEllipsis, {})
        }),
        /* @__PURE__ */ jsx57(BreadcrumbSeparator, {}),
        /* @__PURE__ */ jsx57(BreadcrumbItem, {
          children: /* @__PURE__ */ jsx57(BreadcrumbLink, {
            asChild: true,
            children: /* @__PURE__ */ jsx57(Link, {
              href: "/docs/components",
              children: "Components"
            })
          })
        }),
        /* @__PURE__ */ jsx57(BreadcrumbSeparator, {}),
        /* @__PURE__ */ jsx57(BreadcrumbItem, {
          children: /* @__PURE__ */ jsx57(BreadcrumbPage, {
            children: "Breadcrumb"
          })
        })
      ]
    })
  });
}

// src/shadcn-ui/examples/breadcrumb-link.tsx
import { jsx as jsx58, jsxs as jsxs22 } from "react/jsx-runtime";
function BreadcrumbWithCustomSeparator() {
  return /* @__PURE__ */ jsx58(Breadcrumb, {
    children: /* @__PURE__ */ jsxs22(BreadcrumbList, {
      children: [
        /* @__PURE__ */ jsx58(BreadcrumbItem, {
          children: /* @__PURE__ */ jsx58(BreadcrumbLink, {
            asChild: true,
            children: /* @__PURE__ */ jsx58(Link, {
              href: "/",
              children: "Home"
            })
          })
        }),
        /* @__PURE__ */ jsx58(BreadcrumbSeparator, {}),
        /* @__PURE__ */ jsx58(BreadcrumbItem, {
          children: /* @__PURE__ */ jsx58(BreadcrumbLink, {
            asChild: true,
            children: /* @__PURE__ */ jsx58(Link, {
              href: "/components",
              children: "Components"
            })
          })
        }),
        /* @__PURE__ */ jsx58(BreadcrumbSeparator, {}),
        /* @__PURE__ */ jsx58(BreadcrumbItem, {
          children: /* @__PURE__ */ jsx58(BreadcrumbPage, {
            children: "Breadcrumb"
          })
        })
      ]
    })
  });
}

// src/shadcn-ui/examples/breadcrumb-separator.tsx
import { jsx as jsx59, jsxs as jsxs23 } from "react/jsx-runtime";
function BreadcrumbWithCustomSeparator2({ spriteUrl }) {
  return /* @__PURE__ */ jsx59(Breadcrumb, {
    children: /* @__PURE__ */ jsxs23(BreadcrumbList, {
      children: [
        /* @__PURE__ */ jsx59(BreadcrumbItem, {
          children: /* @__PURE__ */ jsx59(BreadcrumbLink, {
            asChild: true,
            children: /* @__PURE__ */ jsx59(Link, {
              href: "/",
              children: "Home"
            })
          })
        }),
        /* @__PURE__ */ jsx59(BreadcrumbSeparator, {
          children: /* @__PURE__ */ jsx59(SpriteIcon, {
            iconId: "Slash",
            spriteUrl
          })
        }),
        /* @__PURE__ */ jsx59(BreadcrumbItem, {
          children: /* @__PURE__ */ jsx59(BreadcrumbLink, {
            asChild: true,
            children: /* @__PURE__ */ jsx59(Link, {
              href: "/components",
              children: "Components"
            })
          })
        }),
        /* @__PURE__ */ jsx59(BreadcrumbSeparator, {
          children: /* @__PURE__ */ jsx59(SpriteIcon, {
            iconId: "Slash",
            spriteUrl
          })
        }),
        /* @__PURE__ */ jsx59(BreadcrumbItem, {
          children: /* @__PURE__ */ jsx59(BreadcrumbPage, {
            children: "Breadcrumb"
          })
        })
      ]
    })
  });
}

// src/shadcn-ui/examples/button-as-child.tsx
import { jsx as jsx60 } from "react/jsx-runtime";
function ButtonAsChild() {
  return /* @__PURE__ */ jsx60(Button, {
    asChild: true,
    children: /* @__PURE__ */ jsx60(Link, {
      href: "/",
      children: "Sign in"
    })
  });
}

// src/shadcn-ui/examples/button-demo.tsx
import { jsx as jsx61 } from "react/jsx-runtime";
function ButtonDemo() {
  return /* @__PURE__ */ jsx61("div", {
    className: "flex flex-wrap items-center gap-2 md:flex-row",
    children: /* @__PURE__ */ jsx61(Button, {
      children: "Button"
    })
  });
}

// src/shadcn-ui/examples/button-destructive.tsx
import { jsx as jsx62 } from "react/jsx-runtime";
function ButtonDestructive() {
  return /* @__PURE__ */ jsx62(Button, {
    variant: "destructive",
    children: "Destructive"
  });
}

// src/shadcn-ui/examples/button-ghost.tsx
import { jsx as jsx63 } from "react/jsx-runtime";
function ButtonGhost() {
  return /* @__PURE__ */ jsx63(Button, {
    variant: "ghost",
    children: "Ghost"
  });
}

// src/shadcn-ui/examples/button-icon.tsx
import { jsx as jsx64 } from "react/jsx-runtime";
function ButtonIcon({ spriteUrl }) {
  return /* @__PURE__ */ jsx64(Button, {
    variant: "secondary",
    size: "icon",
    className: "size-8",
    children: /* @__PURE__ */ jsx64(SpriteIcon, {
      iconId: "ChevronRight",
      spriteUrl
    })
  });
}

// src/shadcn-ui/examples/button-link.tsx
import { jsx as jsx65 } from "react/jsx-runtime";
function ButtonLink() {
  return /* @__PURE__ */ jsx65(Button, {
    variant: "link",
    children: "Link"
  });
}

// src/shadcn-ui/examples/button-loading.tsx
import { jsx as jsx66, jsxs as jsxs24 } from "react/jsx-runtime";
function ButtonLoading({ spriteUrl }) {
  return /* @__PURE__ */ jsxs24(Button, {
    size: "sm",
    disabled: true,
    children: [
      /* @__PURE__ */ jsx66(SpriteIcon, {
        iconId: "Loader",
        className: "animate-spin",
        spriteUrl
      }),
      "Please wait"
    ]
  });
}

// src/shadcn-ui/examples/button-outline.tsx
import { jsx as jsx67 } from "react/jsx-runtime";
function ButtonOutline() {
  return /* @__PURE__ */ jsx67(Button, {
    variant: "outline",
    children: "Outline"
  });
}

// src/shadcn-ui/examples/button-secondary.tsx
import { jsx as jsx68 } from "react/jsx-runtime";
function ButtonSecondary() {
  return /* @__PURE__ */ jsx68(Button, {
    variant: "secondary",
    children: "Secondary"
  });
}

// src/shadcn-ui/examples/button-with-icon.tsx
import { jsx as jsx69, jsxs as jsxs25 } from "react/jsx-runtime";
function ButtonWithIcon({ spriteUrl }) {
  return /* @__PURE__ */ jsxs25(Button, {
    variant: "outline",
    size: "sm",
    children: [
      /* @__PURE__ */ jsx69(SpriteIcon, {
        iconId: "Calendar",
        spriteUrl
      }),
      " New Branch"
    ]
  });
}

// src/shadcn-ui/components/card.tsx
import clsx16 from "clsx";
import { jsx as jsx70 } from "react/jsx-runtime";
function Card({ className, ...props }) {
  return /* @__PURE__ */ jsx70("div", {
    "data-slot": "card",
    className: clsx16("flex flex-col gap-6 rounded-xl border bg-card py-6 text-card-foreground shadow-sm", className),
    ...props
  });
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx70("div", {
    "data-slot": "card-header",
    className: clsx16("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
    ...props
  });
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx70("div", {
    "data-slot": "card-title",
    className: clsx16("font-semibold leading-none", className),
    ...props
  });
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx70("div", {
    "data-slot": "card-description",
    className: clsx16("text-muted-foreground text-sm", className),
    ...props
  });
}
function CardAction({ className, ...props }) {
  return /* @__PURE__ */ jsx70("div", {
    "data-slot": "card-action",
    className: clsx16("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
    ...props
  });
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsx70("div", {
    "data-slot": "card-content",
    className: clsx16("px-6", className),
    ...props
  });
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx70("div", {
    "data-slot": "card-footer",
    className: clsx16("flex items-center px-6 [.border-t]:pt-6", className),
    ...props
  });
}

// src/shadcn-ui/components/input.tsx
import clsx17 from "clsx";
import { jsx as jsx71 } from "react/jsx-runtime";
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx71("input", {
    type,
    "data-slot": "input",
    className: clsx17("h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs outline-none transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30", "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50", "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40", className),
    ...props
  });
}

// ../../node_modules/@radix-ui/react-label/dist/index.mjs
import * as React48 from "react";
import { jsx as jsx72 } from "react/jsx-runtime";
"use client";
var NAME4 = "Label";
var Label3 = React48.forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ jsx72(Primitive.label, {
    ...props,
    ref: forwardedRef,
    onMouseDown: (event) => {
      const target = event.target;
      if (target.closest("button, input, select, textarea"))
        return;
      props.onMouseDown?.(event);
      if (!event.defaultPrevented && event.detail > 1)
        event.preventDefault();
    }
  });
});
Label3.displayName = NAME4;
var Root10 = Label3;

// src/shadcn-ui/components/label.tsx
import clsx18 from "clsx";
import { jsx as jsx73 } from "react/jsx-runtime";
function Label4({ className, ...props }) {
  return /* @__PURE__ */ jsx73(Root10, {
    "data-slot": "label",
    className: clsx18("flex select-none items-center gap-2 font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50", className),
    ...props
  });
}

// src/shadcn-ui/examples/card-demo.tsx
import { jsx as jsx74, jsxs as jsxs26 } from "react/jsx-runtime";
function CardDemo() {
  return /* @__PURE__ */ jsxs26(Card, {
    className: "w-full max-w-sm",
    children: [
      /* @__PURE__ */ jsxs26(CardHeader, {
        children: [
          /* @__PURE__ */ jsx74(CardTitle, {
            children: "Login to your account"
          }),
          /* @__PURE__ */ jsx74(CardDescription, {
            children: "Enter your email below to login to your account"
          }),
          /* @__PURE__ */ jsx74(CardAction, {
            children: /* @__PURE__ */ jsx74(Button, {
              variant: "link",
              children: "Sign Up"
            })
          })
        ]
      }),
      /* @__PURE__ */ jsx74(CardContent, {
        children: /* @__PURE__ */ jsx74("form", {
          children: /* @__PURE__ */ jsxs26("div", {
            className: "flex flex-col gap-6",
            children: [
              /* @__PURE__ */ jsxs26("div", {
                className: "grid gap-2",
                children: [
                  /* @__PURE__ */ jsx74(Label4, {
                    htmlFor: "cardemail",
                    children: "cardemail"
                  }),
                  /* @__PURE__ */ jsx74(Input, {
                    id: "cardemail",
                    type: "email",
                    placeholder: "place@example.com",
                    required: true
                  })
                ]
              }),
              /* @__PURE__ */ jsxs26("div", {
                className: "grid gap-2",
                children: [
                  /* @__PURE__ */ jsxs26("div", {
                    className: "flex items-center",
                    children: [
                      /* @__PURE__ */ jsx74(Label4, {
                        htmlFor: "password",
                        children: "Password"
                      }),
                      /* @__PURE__ */ jsx74("a", {
                        href: "#",
                        className: "ml-auto inline-block text-sm underline-offset-4 hover:underline",
                        children: "Forgot your password?"
                      })
                    ]
                  }),
                  /* @__PURE__ */ jsx74(Input, {
                    id: "password",
                    type: "password",
                    required: true
                  })
                ]
              })
            ]
          })
        })
      }),
      /* @__PURE__ */ jsxs26(CardFooter, {
        className: "flex-col gap-2",
        children: [
          /* @__PURE__ */ jsx74(Button, {
            type: "submit",
            className: "w-full",
            children: "Login"
          }),
          /* @__PURE__ */ jsx74(Button, {
            variant: "outline",
            className: "w-full",
            children: "Login with Google"
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/examples/card-with-form.tsx
import React49 from "react";
import { jsx as jsx75, jsxs as jsxs27 } from "react/jsx-runtime";
function CardWithForm() {
  const nameId = React49.useId();
  const frameworkId = React49.useId();
  return /* @__PURE__ */ jsxs27(Card, {
    className: "w-[350px]",
    children: [
      /* @__PURE__ */ jsxs27(CardHeader, {
        children: [
          /* @__PURE__ */ jsx75(CardTitle, {
            children: "Create project"
          }),
          /* @__PURE__ */ jsx75(CardDescription, {
            children: "Deploy your new project in one-click."
          })
        ]
      }),
      /* @__PURE__ */ jsx75(CardContent, {
        children: /* @__PURE__ */ jsx75("form", {
          children: /* @__PURE__ */ jsxs27("div", {
            className: "grid w-full items-center gap-6",
            children: [
              /* @__PURE__ */ jsxs27("div", {
                className: "flex flex-col gap-3",
                children: [
                  /* @__PURE__ */ jsx75(Label4, {
                    htmlFor: nameId,
                    children: "Name"
                  }),
                  /* @__PURE__ */ jsx75(Input, {
                    id: nameId,
                    placeholder: "Name of your project"
                  })
                ]
              }),
              /* @__PURE__ */ jsxs27("div", {
                className: "flex flex-col gap-3",
                children: [
                  /* @__PURE__ */ jsx75(Label4, {
                    htmlFor: frameworkId,
                    children: "Framework"
                  }),
                  /* @__PURE__ */ jsxs27(Select2, {
                    children: [
                      /* @__PURE__ */ jsx75(SelectTrigger2, {
                        id: frameworkId,
                        className: "w-full",
                        children: /* @__PURE__ */ jsx75(SelectValue2, {
                          placeholder: "Select"
                        })
                      }),
                      /* @__PURE__ */ jsxs27(SelectContent2, {
                        position: "popper",
                        children: [
                          /* @__PURE__ */ jsx75(SelectItem2, {
                            value: "next",
                            children: "Next.js"
                          }),
                          /* @__PURE__ */ jsx75(SelectItem2, {
                            value: "sveltekit",
                            children: "SvelteKit"
                          }),
                          /* @__PURE__ */ jsx75(SelectItem2, {
                            value: "astro",
                            children: "Astro"
                          }),
                          /* @__PURE__ */ jsx75(SelectItem2, {
                            value: "nuxt",
                            children: "Nuxt.js"
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          })
        })
      }),
      /* @__PURE__ */ jsxs27(CardFooter, {
        className: "flex justify-between",
        children: [
          /* @__PURE__ */ jsx75(Button, {
            variant: "outline",
            children: "Cancel"
          }),
          /* @__PURE__ */ jsx75(Button, {
            children: "Deploy"
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/examples/checkbox-demo.tsx
import React51 from "react";

// ../../node_modules/@radix-ui/react-checkbox/dist/index.mjs
import * as React50 from "react";
import { Fragment as Fragment10, jsx as jsx76, jsxs as jsxs28 } from "react/jsx-runtime";
"use client";
var CHECKBOX_NAME = "Checkbox";
var [createCheckboxContext, createCheckboxScope] = createContextScope(CHECKBOX_NAME);
var [CheckboxProviderImpl, useCheckboxContext] = createCheckboxContext(CHECKBOX_NAME);
function CheckboxProvider(props) {
  const {
    __scopeCheckbox,
    checked: checkedProp,
    children,
    defaultChecked,
    disabled,
    form,
    name,
    onCheckedChange,
    required,
    value = "on",
    internal_do_not_use_render
  } = props;
  const [checked, setChecked] = useControllableState({
    prop: checkedProp,
    defaultProp: defaultChecked ?? false,
    onChange: onCheckedChange,
    caller: CHECKBOX_NAME
  });
  const [control, setControl] = React50.useState(null);
  const [bubbleInput, setBubbleInput] = React50.useState(null);
  const hasConsumerStoppedPropagationRef = React50.useRef(false);
  const isFormControl = control ? !!form || !!control.closest("form") : true;
  const context = {
    checked,
    disabled,
    setChecked,
    control,
    setControl,
    name,
    form,
    value,
    hasConsumerStoppedPropagationRef,
    required,
    defaultChecked: isIndeterminate2(defaultChecked) ? false : defaultChecked,
    isFormControl,
    bubbleInput,
    setBubbleInput
  };
  return /* @__PURE__ */ jsx76(CheckboxProviderImpl, {
    scope: __scopeCheckbox,
    ...context,
    children: isFunction2(internal_do_not_use_render) ? internal_do_not_use_render(context) : children
  });
}
var TRIGGER_NAME8 = "CheckboxTrigger";
var CheckboxTrigger = React50.forwardRef(({ __scopeCheckbox, onKeyDown, onClick, ...checkboxProps }, forwardedRef) => {
  const {
    control,
    value,
    disabled,
    checked,
    required,
    setControl,
    setChecked,
    hasConsumerStoppedPropagationRef,
    isFormControl,
    bubbleInput
  } = useCheckboxContext(TRIGGER_NAME8, __scopeCheckbox);
  const composedRefs = useComposedRefs(forwardedRef, setControl);
  const initialCheckedStateRef = React50.useRef(checked);
  React50.useEffect(() => {
    const form = control?.form;
    if (form) {
      const reset = () => setChecked(initialCheckedStateRef.current);
      form.addEventListener("reset", reset);
      return () => form.removeEventListener("reset", reset);
    }
  }, [control, setChecked]);
  return /* @__PURE__ */ jsx76(Primitive.button, {
    type: "button",
    role: "checkbox",
    "aria-checked": isIndeterminate2(checked) ? "mixed" : checked,
    "aria-required": required,
    "data-state": getState4(checked),
    "data-disabled": disabled ? "" : undefined,
    disabled,
    value,
    ...checkboxProps,
    ref: composedRefs,
    onKeyDown: composeEventHandlers(onKeyDown, (event) => {
      if (event.key === "Enter")
        event.preventDefault();
    }),
    onClick: composeEventHandlers(onClick, (event) => {
      setChecked((prevChecked) => isIndeterminate2(prevChecked) ? true : !prevChecked);
      if (bubbleInput && isFormControl) {
        hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
        if (!hasConsumerStoppedPropagationRef.current)
          event.stopPropagation();
      }
    })
  });
});
CheckboxTrigger.displayName = TRIGGER_NAME8;
var Checkbox = React50.forwardRef((props, forwardedRef) => {
  const {
    __scopeCheckbox,
    name,
    checked,
    defaultChecked,
    required,
    disabled,
    value,
    onCheckedChange,
    form,
    ...checkboxProps
  } = props;
  return /* @__PURE__ */ jsx76(CheckboxProvider, {
    __scopeCheckbox,
    checked,
    defaultChecked,
    disabled,
    required,
    onCheckedChange,
    name,
    form,
    value,
    internal_do_not_use_render: ({ isFormControl }) => /* @__PURE__ */ jsxs28(Fragment10, { children: [
      /* @__PURE__ */ jsx76(CheckboxTrigger, {
        ...checkboxProps,
        ref: forwardedRef,
        __scopeCheckbox
      }),
      isFormControl && /* @__PURE__ */ jsx76(CheckboxBubbleInput, {
        __scopeCheckbox
      })
    ] })
  });
});
Checkbox.displayName = CHECKBOX_NAME;
var INDICATOR_NAME2 = "CheckboxIndicator";
var CheckboxIndicator = React50.forwardRef((props, forwardedRef) => {
  const { __scopeCheckbox, forceMount, ...indicatorProps } = props;
  const context = useCheckboxContext(INDICATOR_NAME2, __scopeCheckbox);
  return /* @__PURE__ */ jsx76(Presence, {
    present: forceMount || isIndeterminate2(context.checked) || context.checked === true,
    children: /* @__PURE__ */ jsx76(Primitive.span, {
      "data-state": getState4(context.checked),
      "data-disabled": context.disabled ? "" : undefined,
      ...indicatorProps,
      ref: forwardedRef,
      style: { pointerEvents: "none", ...props.style }
    })
  });
});
CheckboxIndicator.displayName = INDICATOR_NAME2;
var BUBBLE_INPUT_NAME2 = "CheckboxBubbleInput";
var CheckboxBubbleInput = React50.forwardRef(({ __scopeCheckbox, ...props }, forwardedRef) => {
  const {
    control,
    hasConsumerStoppedPropagationRef,
    checked,
    defaultChecked,
    required,
    disabled,
    name,
    value,
    form,
    bubbleInput,
    setBubbleInput
  } = useCheckboxContext(BUBBLE_INPUT_NAME2, __scopeCheckbox);
  const composedRefs = useComposedRefs(forwardedRef, setBubbleInput);
  const prevChecked = usePrevious(checked);
  const controlSize = useSize(control);
  React50.useEffect(() => {
    const input = bubbleInput;
    if (!input)
      return;
    const inputProto = window.HTMLInputElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(inputProto, "checked");
    const setChecked = descriptor.set;
    const bubbles = !hasConsumerStoppedPropagationRef.current;
    if (prevChecked !== checked && setChecked) {
      const event = new Event("click", { bubbles });
      input.indeterminate = isIndeterminate2(checked);
      setChecked.call(input, isIndeterminate2(checked) ? false : checked);
      input.dispatchEvent(event);
    }
  }, [bubbleInput, prevChecked, checked, hasConsumerStoppedPropagationRef]);
  const defaultCheckedRef = React50.useRef(isIndeterminate2(checked) ? false : checked);
  return /* @__PURE__ */ jsx76(Primitive.input, {
    type: "checkbox",
    "aria-hidden": true,
    defaultChecked: defaultChecked ?? defaultCheckedRef.current,
    required,
    disabled,
    name,
    value,
    form,
    ...props,
    tabIndex: -1,
    ref: composedRefs,
    style: {
      ...props.style,
      ...controlSize,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0,
      transform: "translateX(-100%)"
    }
  });
});
CheckboxBubbleInput.displayName = BUBBLE_INPUT_NAME2;
function isFunction2(value) {
  return typeof value === "function";
}
function isIndeterminate2(checked) {
  return checked === "indeterminate";
}
function getState4(checked) {
  return isIndeterminate2(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}

// src/shadcn-ui/components/checkbox.tsx
import clsx19 from "clsx";
import { jsx as jsx77 } from "react/jsx-runtime";
function Checkbox2({ className, ...props }) {
  return /* @__PURE__ */ jsx77(Checkbox, {
    "data-slot": "checkbox",
    className: clsx19("peer size-4 shrink-0 rounded-[4px] border border-input shadow-xs outline-none transition-shadow focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-input/30 dark:data-[state=checked]:bg-primary dark:aria-invalid:ring-destructive/40", className),
    ...props,
    children: /* @__PURE__ */ jsx77(CheckboxIndicator, {
      "data-slot": "checkbox-indicator",
      className: "flex items-center justify-center text-current transition-none",
      children: /* @__PURE__ */ jsx77(SvgIcon, {
        iconId: "Check",
        className: "size-3.5"
      })
    })
  });
}

// src/shadcn-ui/examples/checkbox-demo.tsx
import { jsx as jsx78, jsxs as jsxs29 } from "react/jsx-runtime";
function CheckboxDemo() {
  const termsId = React51.useId();
  const terms2Id = React51.useId();
  const toggleId = React51.useId();
  const toggle2Id = React51.useId();
  return /* @__PURE__ */ jsxs29("div", {
    className: "flex flex-col gap-6",
    children: [
      /* @__PURE__ */ jsxs29("div", {
        className: "flex items-center gap-3",
        children: [
          /* @__PURE__ */ jsx78(Checkbox2, {
            id: termsId
          }),
          /* @__PURE__ */ jsx78(Label4, {
            htmlFor: termsId,
            children: "Accept terms and conditions"
          })
        ]
      }),
      /* @__PURE__ */ jsxs29("div", {
        className: "flex items-start gap-3",
        children: [
          /* @__PURE__ */ jsx78(Checkbox2, {
            id: terms2Id,
            defaultChecked: true
          }),
          /* @__PURE__ */ jsxs29("div", {
            className: "grid gap-2",
            children: [
              /* @__PURE__ */ jsx78(Label4, {
                htmlFor: terms2Id,
                children: "Accept terms and conditions"
              }),
              /* @__PURE__ */ jsx78("p", {
                className: "text-muted-foreground text-sm",
                children: "By clicking this checkbox, you agree to the terms and conditions."
              })
            ]
          })
        ]
      }),
      /* @__PURE__ */ jsxs29("div", {
        className: "flex items-start gap-3",
        children: [
          /* @__PURE__ */ jsx78(Checkbox2, {
            id: toggleId,
            disabled: true
          }),
          /* @__PURE__ */ jsx78(Label4, {
            htmlFor: toggleId,
            children: "Enable notifications"
          })
        ]
      }),
      /* @__PURE__ */ jsxs29(Label4, {
        className: "flex items-start gap-3 rounded-lg border p-3 hover:bg-accent/50 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950",
        children: [
          /* @__PURE__ */ jsx78(Checkbox2, {
            id: toggle2Id,
            defaultChecked: true,
            className: "data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
          }),
          /* @__PURE__ */ jsxs29("div", {
            className: "grid gap-1.5 font-normal",
            children: [
              /* @__PURE__ */ jsx78("p", {
                className: "font-medium text-sm leading-none",
                children: "Enable notifications"
              }),
              /* @__PURE__ */ jsx78("p", {
                className: "text-muted-foreground text-sm",
                children: "You can enable or disable notifications at any time."
              })
            ]
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/examples/checkbox-disabled.tsx
import React52 from "react";
import { jsx as jsx79, jsxs as jsxs30 } from "react/jsx-runtime";
function CheckboxDisabled() {
  const termsId = React52.useId();
  return /* @__PURE__ */ jsxs30("div", {
    className: "flex items-center space-x-2",
    children: [
      /* @__PURE__ */ jsx79(Checkbox2, {
        id: termsId,
        disabled: true
      }),
      /* @__PURE__ */ jsx79("label", {
        htmlFor: termsId,
        className: "font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        children: "Accept terms and conditions"
      })
    ]
  });
}

// src/shadcn-ui/examples/checkbox-form-multiple.tsx
import React53 from "react";
import { toast } from "sonner";
import { jsx as jsx80, jsxs as jsxs31 } from "react/jsx-runtime";
var items = [
  {
    id: "recents",
    label: "Recents"
  },
  {
    id: "home",
    label: "Home"
  },
  {
    id: "applications",
    label: "Applications"
  },
  {
    id: "desktop",
    label: "Desktop"
  },
  {
    id: "downloads",
    label: "Downloads"
  },
  {
    id: "documents",
    label: "Documents"
  }
];
function CheckboxReactHookFormMultiple() {
  const [selectedItems, setSelectedItems] = React53.useState(["recents", "home"]);
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const items2 = formData.getAll("items");
    toast("You submitted the following values", {
      description: /* @__PURE__ */ jsx80("pre", {
        className: "mt-2 w-[320px] rounded-md bg-neutral-950 p-4",
        children: /* @__PURE__ */ jsx80("code", {
          className: "text-white",
          children: JSON.stringify({ items: items2 }, null, 2)
        })
      })
    });
  }
  function handleCheckboxChange(itemId, checked) {
    if (checked) {
      setSelectedItems((prev) => [...prev, itemId]);
    } else {
      setSelectedItems((prev) => prev.filter((id) => id !== itemId));
    }
  }
  return /* @__PURE__ */ jsxs31("form", {
    onSubmit: handleSubmit,
    className: "space-y-8",
    children: [
      /* @__PURE__ */ jsxs31("div", {
        className: "mb-4",
        children: [
          /* @__PURE__ */ jsx80("div", {
            className: "text-base",
            children: "Sidebar"
          }),
          /* @__PURE__ */ jsx80("div", {
            children: "Select the items you want to display in the sidebar."
          })
        ]
      }),
      items.map((item) => /* @__PURE__ */ jsxs31("div", {
        className: "flex flex-row items-center gap-2",
        children: [
          /* @__PURE__ */ jsx80(Checkbox2, {
            name: "items",
            value: item.id,
            checked: selectedItems.includes(item.id),
            onCheckedChange: (checked) => handleCheckboxChange(item.id, !!checked)
          }),
          /* @__PURE__ */ jsx80("div", {
            className: "font-normal text-sm",
            children: item.label
          })
        ]
      }, item.id)),
      /* @__PURE__ */ jsx80(Button, {
        type: "submit",
        children: "Submit"
      })
    ]
  });
}

// src/shadcn-ui/examples/checkbox-form-single.tsx
import React54 from "react";
import { toast as toast2 } from "sonner";
import { jsx as jsx81, jsxs as jsxs32 } from "react/jsx-runtime";
function CheckboxReactHookFormSingle() {
  const [mobileEnabled, setMobileEnabled] = React54.useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const mobile = formData.has("mobile");
    toast2("You submitted the following values", {
      description: /* @__PURE__ */ jsx81("pre", {
        className: "mt-2 w-[320px] rounded-md bg-neutral-950 p-4",
        children: /* @__PURE__ */ jsx81("code", {
          className: "text-white",
          children: JSON.stringify({ mobile }, null, 2)
        })
      })
    });
  }
  return /* @__PURE__ */ jsxs32("form", {
    onSubmit: handleSubmit,
    className: "flex flex-col items-start gap-4",
    children: [
      /* @__PURE__ */ jsx81(Checkbox2, {
        name: "mobile",
        checked: mobileEnabled,
        onCheckedChange: setMobileEnabled
      }),
      /* @__PURE__ */ jsx81(Button, {
        type: "submit",
        children: "Submit"
      })
    ]
  });
}

// src/shadcn-ui/examples/checkbox-with-text.tsx
import React55 from "react";
import { jsx as jsx82, jsxs as jsxs33 } from "react/jsx-runtime";
function CheckboxWithText() {
  const termsId = React55.useId();
  return /* @__PURE__ */ jsxs33("div", {
    className: "items-top flex gap-2",
    children: [
      /* @__PURE__ */ jsx82(Checkbox2, {
        id: termsId
      }),
      /* @__PURE__ */ jsxs33("div", {
        className: "grid gap-1.5 leading-none",
        children: [
          /* @__PURE__ */ jsx82("label", {
            htmlFor: termsId,
            className: "font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
            children: "Accept terms and conditions"
          }),
          /* @__PURE__ */ jsx82("p", {
            className: "text-muted-foreground text-sm",
            children: "You agree to our Terms of Service and Privacy Policy."
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/examples/collapsible-demo.tsx
import React56 from "react";

// src/shadcn-ui/components/collapsible.tsx
import { jsx as jsx83 } from "react/jsx-runtime";
function Collapsible2({ ...props }) {
  return /* @__PURE__ */ jsx83(Root5, {
    "data-slot": "collapsible",
    ...props
  });
}
function CollapsibleTrigger2({ ...props }) {
  return /* @__PURE__ */ jsx83(CollapsibleTrigger, {
    "data-slot": "collapsible-trigger",
    ...props
  });
}
function CollapsibleContent2({ ...props }) {
  return /* @__PURE__ */ jsx83(CollapsibleContent, {
    "data-slot": "collapsible-content",
    ...props
  });
}

// src/shadcn-ui/examples/collapsible-demo.tsx
import { jsx as jsx84, jsxs as jsxs34 } from "react/jsx-runtime";
function CollapsibleDemo({ spriteUrl }) {
  const [isOpen, setIsOpen] = React56.useState(false);
  return /* @__PURE__ */ jsxs34(Collapsible2, {
    open: isOpen,
    onOpenChange: setIsOpen,
    className: "flex w-[350px] flex-col gap-2",
    children: [
      /* @__PURE__ */ jsxs34("div", {
        className: "flex items-center justify-between gap-4 px-4",
        children: [
          /* @__PURE__ */ jsx84("h4", {
            className: "font-semibold text-sm",
            children: "@peduarte starred 3 repositories"
          }),
          /* @__PURE__ */ jsx84(CollapsibleTrigger2, {
            asChild: true,
            children: /* @__PURE__ */ jsxs34(Button, {
              variant: "ghost",
              size: "icon",
              className: "size-8",
              children: [
                /* @__PURE__ */ jsx84(SpriteIcon, {
                  iconId: "ChevronsUpDown",
                  spriteUrl
                }),
                /* @__PURE__ */ jsx84("span", {
                  className: "sr-only",
                  children: "Toggle"
                })
              ]
            })
          })
        ]
      }),
      /* @__PURE__ */ jsx84("div", {
        className: "rounded-md border px-4 py-2 font-mono text-sm",
        children: "@radix-ui/primitives"
      }),
      /* @__PURE__ */ jsxs34(CollapsibleContent2, {
        className: "flex flex-col gap-2",
        children: [
          /* @__PURE__ */ jsx84("div", {
            className: "rounded-md border px-4 py-2 font-mono text-sm",
            children: "@radix-ui/colors"
          }),
          /* @__PURE__ */ jsx84("div", {
            className: "rounded-md border px-4 py-2 font-mono text-sm",
            children: "@stitches/react"
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/examples/combobox-demo.tsx
import clsx23 from "clsx";
import React58 from "react";

// src/shadcn-ui/components/command.tsx
import clsx21 from "clsx";
import { Command as CommandPrimitive } from "cmdk";

// src/shadcn-ui/components/dialog.tsx
import clsx20 from "clsx";
import { jsx as jsx85, jsxs as jsxs35 } from "react/jsx-runtime";
function Dialog2({ ...props }) {
  return /* @__PURE__ */ jsx85(Root6, {
    "data-slot": "dialog",
    ...props
  });
}
function DialogTrigger2({ ...props }) {
  return /* @__PURE__ */ jsx85(Trigger4, {
    "data-slot": "dialog-trigger",
    ...props
  });
}
function DialogPortal2({ ...props }) {
  return /* @__PURE__ */ jsx85(Portal4, {
    "data-slot": "dialog-portal",
    ...props
  });
}
function DialogClose2({ ...props }) {
  return /* @__PURE__ */ jsx85(Close, {
    "data-slot": "dialog-close",
    ...props
  });
}
function DialogOverlay2({ className, ...props }) {
  return /* @__PURE__ */ jsx85(Overlay, {
    "data-slot": "dialog-overlay",
    className: clsx20("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=open]:animate-in", className),
    ...props
  });
}
function DialogContent2({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs35(DialogPortal2, {
    "data-slot": "dialog-portal",
    children: [
      /* @__PURE__ */ jsx85(DialogOverlay2, {}),
      /* @__PURE__ */ jsxs35(Content5, {
        "data-slot": "dialog-content",
        className: clsx20("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 data-[state=closed]:animate-out data-[state=open]:animate-in sm:max-w-lg", className),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxs35(Close, {
            "data-slot": "dialog-close",
            className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
            children: [
              /* @__PURE__ */ jsx85(SvgIcon, {
                iconId: "X"
              }),
              /* @__PURE__ */ jsx85("span", {
                className: "sr-only",
                children: "Close"
              })
            ]
          })
        ]
      })
    ]
  });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx85("div", {
    "data-slot": "dialog-header",
    className: clsx20("flex flex-col gap-2 text-center sm:text-left", className),
    ...props
  });
}
function DialogFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx85("div", {
    "data-slot": "dialog-footer",
    className: clsx20("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
    ...props
  });
}
function DialogTitle2({ className, ...props }) {
  return /* @__PURE__ */ jsx85(Title, {
    "data-slot": "dialog-title",
    className: clsx20("font-semibold text-lg leading-none", className),
    ...props
  });
}
function DialogDescription2({ className, ...props }) {
  return /* @__PURE__ */ jsx85(Description, {
    "data-slot": "dialog-description",
    className: clsx20("text-muted-foreground text-sm", className),
    ...props
  });
}

// src/shadcn-ui/components/command.tsx
import { jsx as jsx86, jsxs as jsxs36 } from "react/jsx-runtime";
function Command({ className, ...props }) {
  return /* @__PURE__ */ jsx86(CommandPrimitive, {
    "data-slot": "command",
    className: clsx21("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", className),
    ...props
  });
}
function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs36(Dialog2, {
    ...props,
    children: [
      /* @__PURE__ */ jsxs36(DialogHeader, {
        className: "sr-only",
        children: [
          /* @__PURE__ */ jsx86(DialogTitle2, {
            children: title
          }),
          /* @__PURE__ */ jsx86(DialogDescription2, {
            children: description
          })
        ]
      }),
      /* @__PURE__ */ jsx86(DialogContent2, {
        className: clsx21("overflow-hidden p-0", className),
        showCloseButton,
        children: /* @__PURE__ */ jsx86(Command, {
          className: "**:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
          children
        })
      })
    ]
  });
}
function CommandInput({ className, ...props }) {
  return /* @__PURE__ */ jsxs36("div", {
    "data-slot": "command-input-wrapper",
    className: "flex h-9 items-center gap-2 border-b px-3",
    children: [
      /* @__PURE__ */ jsx86(SvgIcon, {
        iconId: "Search",
        className: "size-4 shrink-0 opacity-50"
      }),
      /* @__PURE__ */ jsx86(CommandPrimitive.Input, {
        "data-slot": "command-input",
        className: clsx21("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className),
        ...props
      })
    ]
  });
}
function CommandList({ className, ...props }) {
  return /* @__PURE__ */ jsx86(CommandPrimitive.List, {
    "data-slot": "command-list",
    className: clsx21("max-h-[300px] scroll-py-1 overflow-y-auto overflow-x-hidden", className),
    ...props
  });
}
function CommandEmpty({ ...props }) {
  return /* @__PURE__ */ jsx86(CommandPrimitive.Empty, {
    "data-slot": "command-empty",
    className: "py-6 text-center text-sm",
    ...props
  });
}
function CommandGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx86(CommandPrimitive.Group, {
    "data-slot": "command-group",
    className: clsx21("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:text-xs", className),
    ...props
  });
}
function CommandSeparator({ className, ...props }) {
  return /* @__PURE__ */ jsx86(CommandPrimitive.Separator, {
    "data-slot": "command-separator",
    className: clsx21("-mx-1 h-px bg-border", className),
    ...props
  });
}
function CommandItem({ className, ...props }) {
  return /* @__PURE__ */ jsx86(CommandPrimitive.Item, {
    "data-slot": "command-item",
    className: clsx21("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props
  });
}
function CommandShortcut({ className, ...props }) {
  return /* @__PURE__ */ jsx86("span", {
    "data-slot": "command-shortcut",
    className: clsx21("ml-auto text-muted-foreground text-xs tracking-widest", className),
    ...props
  });
}

// ../../node_modules/@radix-ui/react-popover/dist/index.mjs
import * as React57 from "react";
import { jsx as jsx87 } from "react/jsx-runtime";
"use client";
var POPOVER_NAME = "Popover";
var [createPopoverContext, createPopoverScope] = createContextScope(POPOVER_NAME, [
  createPopperScope
]);
var usePopperScope4 = createPopperScope();
var [PopoverProvider, usePopoverContext] = createPopoverContext(POPOVER_NAME);
var Popover = (props) => {
  const {
    __scopePopover,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    modal = false
  } = props;
  const popperScope = usePopperScope4(__scopePopover);
  const triggerRef = React57.useRef(null);
  const [hasCustomAnchor, setHasCustomAnchor] = React57.useState(false);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
    caller: POPOVER_NAME
  });
  return /* @__PURE__ */ jsx87(Root2, { ...popperScope, children: /* @__PURE__ */ jsx87(PopoverProvider, {
    scope: __scopePopover,
    contentId: useId(),
    triggerRef,
    open,
    onOpenChange: setOpen,
    onOpenToggle: React57.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
    hasCustomAnchor,
    onCustomAnchorAdd: React57.useCallback(() => setHasCustomAnchor(true), []),
    onCustomAnchorRemove: React57.useCallback(() => setHasCustomAnchor(false), []),
    modal,
    children
  }) });
};
Popover.displayName = POPOVER_NAME;
var ANCHOR_NAME3 = "PopoverAnchor";
var PopoverAnchor = React57.forwardRef((props, forwardedRef) => {
  const { __scopePopover, ...anchorProps } = props;
  const context = usePopoverContext(ANCHOR_NAME3, __scopePopover);
  const popperScope = usePopperScope4(__scopePopover);
  const { onCustomAnchorAdd, onCustomAnchorRemove } = context;
  React57.useEffect(() => {
    onCustomAnchorAdd();
    return () => onCustomAnchorRemove();
  }, [onCustomAnchorAdd, onCustomAnchorRemove]);
  return /* @__PURE__ */ jsx87(Anchor, { ...popperScope, ...anchorProps, ref: forwardedRef });
});
PopoverAnchor.displayName = ANCHOR_NAME3;
var TRIGGER_NAME9 = "PopoverTrigger";
var PopoverTrigger = React57.forwardRef((props, forwardedRef) => {
  const { __scopePopover, ...triggerProps } = props;
  const context = usePopoverContext(TRIGGER_NAME9, __scopePopover);
  const popperScope = usePopperScope4(__scopePopover);
  const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
  const trigger = /* @__PURE__ */ jsx87(Primitive.button, {
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": context.open,
    "aria-controls": context.contentId,
    "data-state": getState5(context.open),
    ...triggerProps,
    ref: composedTriggerRef,
    onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
  });
  return context.hasCustomAnchor ? trigger : /* @__PURE__ */ jsx87(Anchor, { asChild: true, ...popperScope, children: trigger });
});
PopoverTrigger.displayName = TRIGGER_NAME9;
var PORTAL_NAME8 = "PopoverPortal";
var [PortalProvider4, usePortalContext4] = createPopoverContext(PORTAL_NAME8, {
  forceMount: undefined
});
var PopoverPortal = (props) => {
  const { __scopePopover, forceMount, children, container } = props;
  const context = usePopoverContext(PORTAL_NAME8, __scopePopover);
  return /* @__PURE__ */ jsx87(PortalProvider4, { scope: __scopePopover, forceMount, children: /* @__PURE__ */ jsx87(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsx87(Portal, { asChild: true, container, children }) }) });
};
PopoverPortal.displayName = PORTAL_NAME8;
var CONTENT_NAME10 = "PopoverContent";
var PopoverContent = React57.forwardRef((props, forwardedRef) => {
  const portalContext = usePortalContext4(CONTENT_NAME10, props.__scopePopover);
  const { forceMount = portalContext.forceMount, ...contentProps } = props;
  const context = usePopoverContext(CONTENT_NAME10, props.__scopePopover);
  return /* @__PURE__ */ jsx87(Presence, { present: forceMount || context.open, children: context.modal ? /* @__PURE__ */ jsx87(PopoverContentModal, { ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ jsx87(PopoverContentNonModal, { ...contentProps, ref: forwardedRef }) });
});
PopoverContent.displayName = CONTENT_NAME10;
var Slot5 = createSlot("PopoverContent.RemoveScroll");
var PopoverContentModal = React57.forwardRef((props, forwardedRef) => {
  const context = usePopoverContext(CONTENT_NAME10, props.__scopePopover);
  const contentRef = React57.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, contentRef);
  const isRightClickOutsideRef = React57.useRef(false);
  React57.useEffect(() => {
    const content = contentRef.current;
    if (content)
      return hideOthers(content);
  }, []);
  return /* @__PURE__ */ jsx87(Combination_default, { as: Slot5, allowPinchZoom: true, children: /* @__PURE__ */ jsx87(PopoverContentImpl, {
    ...props,
    ref: composedRefs,
    trapFocus: context.open,
    disableOutsidePointerEvents: true,
    onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
      event.preventDefault();
      if (!isRightClickOutsideRef.current)
        context.triggerRef.current?.focus();
    }),
    onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event) => {
      const originalEvent = event.detail.originalEvent;
      const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
      const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
      isRightClickOutsideRef.current = isRightClick;
    }, { checkForDefaultPrevented: false }),
    onFocusOutside: composeEventHandlers(props.onFocusOutside, (event) => event.preventDefault(), { checkForDefaultPrevented: false })
  }) });
});
var PopoverContentNonModal = React57.forwardRef((props, forwardedRef) => {
  const context = usePopoverContext(CONTENT_NAME10, props.__scopePopover);
  const hasInteractedOutsideRef = React57.useRef(false);
  const hasPointerDownOutsideRef = React57.useRef(false);
  return /* @__PURE__ */ jsx87(PopoverContentImpl, {
    ...props,
    ref: forwardedRef,
    trapFocus: false,
    disableOutsidePointerEvents: false,
    onCloseAutoFocus: (event) => {
      props.onCloseAutoFocus?.(event);
      if (!event.defaultPrevented) {
        if (!hasInteractedOutsideRef.current)
          context.triggerRef.current?.focus();
        event.preventDefault();
      }
      hasInteractedOutsideRef.current = false;
      hasPointerDownOutsideRef.current = false;
    },
    onInteractOutside: (event) => {
      props.onInteractOutside?.(event);
      if (!event.defaultPrevented) {
        hasInteractedOutsideRef.current = true;
        if (event.detail.originalEvent.type === "pointerdown") {
          hasPointerDownOutsideRef.current = true;
        }
      }
      const target = event.target;
      const targetIsTrigger = context.triggerRef.current?.contains(target);
      if (targetIsTrigger)
        event.preventDefault();
      if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
        event.preventDefault();
      }
    }
  });
});
var PopoverContentImpl = React57.forwardRef((props, forwardedRef) => {
  const {
    __scopePopover,
    trapFocus,
    onOpenAutoFocus,
    onCloseAutoFocus,
    disableOutsidePointerEvents,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside,
    onInteractOutside,
    ...contentProps
  } = props;
  const context = usePopoverContext(CONTENT_NAME10, __scopePopover);
  const popperScope = usePopperScope4(__scopePopover);
  useFocusGuards();
  return /* @__PURE__ */ jsx87(FocusScope, {
    asChild: true,
    loop: true,
    trapped: trapFocus,
    onMountAutoFocus: onOpenAutoFocus,
    onUnmountAutoFocus: onCloseAutoFocus,
    children: /* @__PURE__ */ jsx87(DismissableLayer, {
      asChild: true,
      disableOutsidePointerEvents,
      onInteractOutside,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onDismiss: () => context.onOpenChange(false),
      children: /* @__PURE__ */ jsx87(Content, {
        "data-state": getState5(context.open),
        role: "dialog",
        id: context.contentId,
        ...popperScope,
        ...contentProps,
        ref: forwardedRef,
        style: {
          ...contentProps.style,
          ...{
            "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
            "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
            "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
          }
        }
      })
    })
  });
});
var CLOSE_NAME2 = "PopoverClose";
var PopoverClose = React57.forwardRef((props, forwardedRef) => {
  const { __scopePopover, ...closeProps } = props;
  const context = usePopoverContext(CLOSE_NAME2, __scopePopover);
  return /* @__PURE__ */ jsx87(Primitive.button, {
    type: "button",
    ...closeProps,
    ref: forwardedRef,
    onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
  });
});
PopoverClose.displayName = CLOSE_NAME2;
var ARROW_NAME6 = "PopoverArrow";
var PopoverArrow = React57.forwardRef((props, forwardedRef) => {
  const { __scopePopover, ...arrowProps } = props;
  const popperScope = usePopperScope4(__scopePopover);
  return /* @__PURE__ */ jsx87(Arrow2, { ...popperScope, ...arrowProps, ref: forwardedRef });
});
PopoverArrow.displayName = ARROW_NAME6;
function getState5(open) {
  return open ? "open" : "closed";
}
var Root26 = Popover;
var Anchor22 = PopoverAnchor;
var Trigger6 = PopoverTrigger;
var Portal6 = PopoverPortal;
var Content27 = PopoverContent;

// src/shadcn-ui/components/popover.tsx
import clsx22 from "clsx";
import { jsx as jsx88 } from "react/jsx-runtime";
function Popover2({ ...props }) {
  return /* @__PURE__ */ jsx88(Root26, {
    "data-slot": "popover",
    ...props
  });
}
function PopoverTrigger2({ ...props }) {
  return /* @__PURE__ */ jsx88(Trigger6, {
    "data-slot": "popover-trigger",
    ...props
  });
}
function PopoverContent2({ className, align = "center", sideOffset = 4, ...props }) {
  return /* @__PURE__ */ jsx88(Portal6, {
    children: /* @__PURE__ */ jsx88(Content27, {
      "data-slot": "popover-content",
      align,
      sideOffset,
      className: clsx22("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[state=closed]:animate-out data-[state=open]:animate-in", className),
      ...props
    })
  });
}
function PopoverAnchor2({ ...props }) {
  return /* @__PURE__ */ jsx88(Anchor22, {
    "data-slot": "popover-anchor",
    ...props
  });
}

// src/shadcn-ui/examples/combobox-demo.tsx
import { jsx as jsx89, jsxs as jsxs37 } from "react/jsx-runtime";
var frameworks = [
  {
    value: "next.js",
    label: "Next.js"
  },
  {
    value: "sveltekit",
    label: "SvelteKit"
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js"
  },
  {
    value: "remix",
    label: "Remix"
  },
  {
    value: "astro",
    label: "Astro"
  }
];
function ComboboxDemo({ spriteUrl }) {
  const [open, setOpen] = React58.useState(false);
  const [value, setValue] = React58.useState("");
  return /* @__PURE__ */ jsxs37(Popover2, {
    open,
    onOpenChange: setOpen,
    children: [
      /* @__PURE__ */ jsx89(PopoverTrigger2, {
        asChild: true,
        children: /* @__PURE__ */ jsxs37(Button, {
          variant: "outline",
          role: "combobox",
          "aria-expanded": open,
          className: "w-[200px] justify-between",
          children: [
            value ? frameworks.find((framework) => framework.value === value)?.label : "Select framework...",
            /* @__PURE__ */ jsx89(SpriteIcon, {
              iconId: "ChevronsUpDown",
              className: "opacity-50",
              spriteUrl
            })
          ]
        })
      }),
      /* @__PURE__ */ jsx89(PopoverContent2, {
        className: "w-[200px] p-0",
        children: /* @__PURE__ */ jsxs37(Command, {
          children: [
            /* @__PURE__ */ jsx89(CommandInput, {
              placeholder: "Search framework...",
              className: "h-9"
            }),
            /* @__PURE__ */ jsxs37(CommandList, {
              children: [
                /* @__PURE__ */ jsx89(CommandEmpty, {
                  children: "No framework found."
                }),
                /* @__PURE__ */ jsx89(CommandGroup, {
                  children: frameworks.map((framework) => /* @__PURE__ */ jsxs37(CommandItem, {
                    value: framework.value,
                    onSelect: (currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    },
                    children: [
                      framework.label,
                      /* @__PURE__ */ jsx89(SpriteIcon, {
                        iconId: "Check",
                        className: clsx23("ml-auto", value === framework.value ? "opacity-100" : "opacity-0"),
                        spriteUrl
                      })
                    ]
                  }, framework.value))
                })
              ]
            })
          ]
        })
      })
    ]
  });
}

// src/shadcn-ui/examples/combobox-dropdown-menu.tsx
import React59 from "react";
import { jsx as jsx90, jsxs as jsxs38 } from "react/jsx-runtime";
var labels = ["feature", "bug", "enhancement", "documentation", "design", "question", "maintenance"];
function ComboboxDropdownMenu({ spriteUrl }) {
  const [label, setLabel] = React59.useState("feature");
  const [open, setOpen] = React59.useState(false);
  return /* @__PURE__ */ jsxs38("div", {
    className: "flex w-full flex-col items-start justify-between rounded-md border px-4 py-3 sm:flex-row sm:items-center",
    children: [
      /* @__PURE__ */ jsxs38("p", {
        className: "font-medium text-sm leading-none",
        children: [
          /* @__PURE__ */ jsx90("span", {
            className: "mr-2 rounded-lg bg-primary px-2 py-1 text-primary-foreground text-xs",
            children: label
          }),
          /* @__PURE__ */ jsx90("span", {
            className: "text-muted-foreground",
            children: "Create a new project"
          })
        ]
      }),
      /* @__PURE__ */ jsxs38(DropdownMenu2, {
        open,
        onOpenChange: setOpen,
        children: [
          /* @__PURE__ */ jsx90(DropdownMenuTrigger2, {
            asChild: true,
            children: /* @__PURE__ */ jsx90(Button, {
              variant: "ghost",
              size: "sm",
              children: /* @__PURE__ */ jsx90(SpriteIcon, {
                iconId: "Ellipsis",
                spriteUrl
              })
            })
          }),
          /* @__PURE__ */ jsxs38(DropdownMenuContent2, {
            align: "end",
            className: "w-[200px]",
            children: [
              /* @__PURE__ */ jsx90(DropdownMenuLabel2, {
                children: "Actions"
              }),
              /* @__PURE__ */ jsxs38(DropdownMenuGroup2, {
                children: [
                  /* @__PURE__ */ jsx90(DropdownMenuItem2, {
                    children: "Assign to..."
                  }),
                  /* @__PURE__ */ jsx90(DropdownMenuItem2, {
                    children: "Set due date..."
                  }),
                  /* @__PURE__ */ jsx90(DropdownMenuSeparator2, {}),
                  /* @__PURE__ */ jsxs38(DropdownMenuSub2, {
                    children: [
                      /* @__PURE__ */ jsx90(DropdownMenuSubTrigger2, {
                        children: "Apply label"
                      }),
                      /* @__PURE__ */ jsx90(DropdownMenuSubContent2, {
                        className: "p-0",
                        children: /* @__PURE__ */ jsxs38(Command, {
                          children: [
                            /* @__PURE__ */ jsx90(CommandInput, {
                              placeholder: "Filter label...",
                              autoFocus: true,
                              className: "h-9"
                            }),
                            /* @__PURE__ */ jsxs38(CommandList, {
                              children: [
                                /* @__PURE__ */ jsx90(CommandEmpty, {
                                  children: "No label found."
                                }),
                                /* @__PURE__ */ jsx90(CommandGroup, {
                                  children: labels.map((label2) => /* @__PURE__ */ jsx90(CommandItem, {
                                    value: label2,
                                    onSelect: (value) => {
                                      setLabel(value);
                                      setOpen(false);
                                    },
                                    children: label2
                                  }, label2))
                                })
                              ]
                            })
                          ]
                        })
                      })
                    ]
                  }),
                  /* @__PURE__ */ jsx90(DropdownMenuSeparator2, {}),
                  /* @__PURE__ */ jsxs38(DropdownMenuItem2, {
                    className: "text-red-600",
                    children: [
                      "Delete",
                      /* @__PURE__ */ jsx90(DropdownMenuShortcut, {
                        children: "⌘⌫"
                      })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/examples/combobox-form.tsx
import clsx24 from "clsx";
import React60 from "react";
import { toast as toast3 } from "sonner";
import { jsx as jsx91, jsxs as jsxs39 } from "react/jsx-runtime";
var languages = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" }
];
function ComboboxForm({ spriteUrl }) {
  const [selectedLanguage, setSelectedLanguage] = React60.useState("");
  const [open, setOpen] = React60.useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const language = formData.get("language");
    toast3("You submitted the following values", {
      description: /* @__PURE__ */ jsx91("pre", {
        className: "mt-2 w-[320px] rounded-md bg-neutral-950 p-4",
        children: /* @__PURE__ */ jsx91("code", {
          className: "text-white",
          children: JSON.stringify({ language }, null, 2)
        })
      })
    });
  }
  return /* @__PURE__ */ jsxs39("form", {
    onSubmit: handleSubmit,
    className: "space-y-6",
    children: [
      /* @__PURE__ */ jsxs39(Button, {
        variant: "outline",
        role: "combobox",
        "aria-expanded": open,
        className: clsx24("w-[200px] justify-between", !selectedLanguage && "text-muted-foreground"),
        children: [
          selectedLanguage ? languages.find((language) => language.value === selectedLanguage)?.label : "Select language",
          /* @__PURE__ */ jsx91(SpriteIcon, {
            iconId: "ChevronsUpDown",
            className: "opacity-50",
            spriteUrl
          })
        ]
      }),
      /* @__PURE__ */ jsxs39("div", {
        className: "flex flex-col",
        children: [
          /* @__PURE__ */ jsxs39(Popover2, {
            open,
            onOpenChange: setOpen,
            children: [
              /* @__PURE__ */ jsx91(PopoverTrigger2, {
                asChild: true
              }),
              /* @__PURE__ */ jsx91(PopoverContent2, {
                className: "w-[200px] p-0",
                children: /* @__PURE__ */ jsxs39(Command, {
                  children: [
                    /* @__PURE__ */ jsx91(CommandInput, {
                      placeholder: "Search language...",
                      className: "h-9"
                    }),
                    /* @__PURE__ */ jsxs39(CommandList, {
                      children: [
                        /* @__PURE__ */ jsx91(CommandEmpty, {
                          children: "No language found."
                        }),
                        /* @__PURE__ */ jsx91(CommandGroup, {
                          children: languages.map((language) => /* @__PURE__ */ jsxs39(CommandItem, {
                            value: language.label,
                            onSelect: () => {
                              setSelectedLanguage(language.value);
                              setOpen(false);
                            },
                            children: [
                              language.label,
                              /* @__PURE__ */ jsx91(SpriteIcon, {
                                iconId: "Check",
                                className: clsx24("ml-auto", language.value === selectedLanguage ? "opacity-100" : "opacity-0"),
                                spriteUrl
                              })
                            ]
                          }, language.value))
                        })
                      ]
                    })
                  ]
                })
              })
            ]
          }),
          /* @__PURE__ */ jsx91("input", {
            type: "hidden",
            name: "language",
            value: selectedLanguage
          })
        ]
      }),
      /* @__PURE__ */ jsx91(Button, {
        type: "submit",
        children: "Submit"
      })
    ]
  });
}

// src/shadcn-ui/examples/combobox-popover.tsx
import React61 from "react";
import { jsx as jsx92, jsxs as jsxs40 } from "react/jsx-runtime";
var statuses = [
  {
    value: "backlog",
    label: "Backlog"
  },
  {
    value: "todo",
    label: "Todo"
  },
  {
    value: "in progress",
    label: "In Progress"
  },
  {
    value: "done",
    label: "Done"
  },
  {
    value: "canceled",
    label: "Canceled"
  }
];
function ComboboxPopover() {
  const [open, setOpen] = React61.useState(false);
  const [selectedStatus, setSelectedStatus] = React61.useState(null);
  return /* @__PURE__ */ jsxs40("div", {
    className: "flex items-center space-x-4",
    children: [
      /* @__PURE__ */ jsx92("p", {
        className: "text-muted-foreground text-sm",
        children: "Status"
      }),
      /* @__PURE__ */ jsxs40(Popover2, {
        open,
        onOpenChange: setOpen,
        children: [
          /* @__PURE__ */ jsx92(PopoverTrigger2, {
            asChild: true,
            children: /* @__PURE__ */ jsx92(Button, {
              variant: "outline",
              className: "w-[150px] justify-start",
              children: selectedStatus ? selectedStatus.label : "+ Set status"
            })
          }),
          /* @__PURE__ */ jsx92(PopoverContent2, {
            className: "p-0",
            side: "right",
            align: "start",
            children: /* @__PURE__ */ jsxs40(Command, {
              children: [
                /* @__PURE__ */ jsx92(CommandInput, {
                  placeholder: "Change status..."
                }),
                /* @__PURE__ */ jsxs40(CommandList, {
                  children: [
                    /* @__PURE__ */ jsx92(CommandEmpty, {
                      children: "No results found."
                    }),
                    /* @__PURE__ */ jsx92(CommandGroup, {
                      children: statuses.map((status) => /* @__PURE__ */ jsx92(CommandItem, {
                        value: status.value,
                        onSelect: (value) => {
                          setSelectedStatus(statuses.find((priority) => priority.value === value) || null);
                          setOpen(false);
                        },
                        children: status.label
                      }, status.value))
                    })
                  ]
                })
              ]
            })
          })
        ]
      })
    ]
  });
}

// ../../node_modules/@radix-ui/react-context-menu/dist/index.mjs
import * as React62 from "react";
import { Fragment as Fragment11, jsx as jsx93, jsxs as jsxs41 } from "react/jsx-runtime";
"use client";
var CONTEXT_MENU_NAME = "ContextMenu";
var [createContextMenuContext, createContextMenuScope] = createContextScope(CONTEXT_MENU_NAME, [
  createMenuScope
]);
var useMenuScope2 = createMenuScope();
var [ContextMenuProvider, useContextMenuContext] = createContextMenuContext(CONTEXT_MENU_NAME);
var ContextMenu = (props) => {
  const { __scopeContextMenu, children, onOpenChange, dir, modal = true } = props;
  const [open, setOpen] = React62.useState(false);
  const menuScope = useMenuScope2(__scopeContextMenu);
  const handleOpenChangeProp = useCallbackRef(onOpenChange);
  const handleOpenChange = React62.useCallback((open2) => {
    setOpen(open2);
    handleOpenChangeProp(open2);
  }, [handleOpenChangeProp]);
  return /* @__PURE__ */ jsx93(ContextMenuProvider, {
    scope: __scopeContextMenu,
    open,
    onOpenChange: handleOpenChange,
    modal,
    children: /* @__PURE__ */ jsx93(Root33, {
      ...menuScope,
      dir,
      open,
      onOpenChange: handleOpenChange,
      modal,
      children
    })
  });
};
ContextMenu.displayName = CONTEXT_MENU_NAME;
var TRIGGER_NAME10 = "ContextMenuTrigger";
var ContextMenuTrigger = React62.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu, disabled = false, ...triggerProps } = props;
  const context = useContextMenuContext(TRIGGER_NAME10, __scopeContextMenu);
  const menuScope = useMenuScope2(__scopeContextMenu);
  const pointRef = React62.useRef({ x: 0, y: 0 });
  const virtualRef = React62.useRef({
    getBoundingClientRect: () => DOMRect.fromRect({ width: 0, height: 0, ...pointRef.current })
  });
  const longPressTimerRef = React62.useRef(0);
  const clearLongPress = React62.useCallback(() => window.clearTimeout(longPressTimerRef.current), []);
  const handleOpen = (event) => {
    pointRef.current = { x: event.clientX, y: event.clientY };
    context.onOpenChange(true);
  };
  React62.useEffect(() => clearLongPress, [clearLongPress]);
  React62.useEffect(() => void (disabled && clearLongPress()), [disabled, clearLongPress]);
  return /* @__PURE__ */ jsxs41(Fragment11, { children: [
    /* @__PURE__ */ jsx93(Anchor2, { ...menuScope, virtualRef }),
    /* @__PURE__ */ jsx93(Primitive.span, {
      "data-state": context.open ? "open" : "closed",
      "data-disabled": disabled ? "" : undefined,
      ...triggerProps,
      ref: forwardedRef,
      style: { WebkitTouchCallout: "none", ...props.style },
      onContextMenu: disabled ? props.onContextMenu : composeEventHandlers(props.onContextMenu, (event) => {
        clearLongPress();
        handleOpen(event);
        event.preventDefault();
      }),
      onPointerDown: disabled ? props.onPointerDown : composeEventHandlers(props.onPointerDown, whenTouchOrPen((event) => {
        clearLongPress();
        longPressTimerRef.current = window.setTimeout(() => handleOpen(event), 700);
      })),
      onPointerMove: disabled ? props.onPointerMove : composeEventHandlers(props.onPointerMove, whenTouchOrPen(clearLongPress)),
      onPointerCancel: disabled ? props.onPointerCancel : composeEventHandlers(props.onPointerCancel, whenTouchOrPen(clearLongPress)),
      onPointerUp: disabled ? props.onPointerUp : composeEventHandlers(props.onPointerUp, whenTouchOrPen(clearLongPress))
    })
  ] });
});
ContextMenuTrigger.displayName = TRIGGER_NAME10;
var PORTAL_NAME9 = "ContextMenuPortal";
var ContextMenuPortal = (props) => {
  const { __scopeContextMenu, ...portalProps } = props;
  const menuScope = useMenuScope2(__scopeContextMenu);
  return /* @__PURE__ */ jsx93(Portal5, { ...menuScope, ...portalProps });
};
ContextMenuPortal.displayName = PORTAL_NAME9;
var CONTENT_NAME11 = "ContextMenuContent";
var ContextMenuContent = React62.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu, ...contentProps } = props;
  const context = useContextMenuContext(CONTENT_NAME11, __scopeContextMenu);
  const menuScope = useMenuScope2(__scopeContextMenu);
  const hasInteractedOutsideRef = React62.useRef(false);
  return /* @__PURE__ */ jsx93(Content25, {
    ...menuScope,
    ...contentProps,
    ref: forwardedRef,
    side: "right",
    sideOffset: 2,
    align: "start",
    onCloseAutoFocus: (event) => {
      props.onCloseAutoFocus?.(event);
      if (!event.defaultPrevented && hasInteractedOutsideRef.current) {
        event.preventDefault();
      }
      hasInteractedOutsideRef.current = false;
    },
    onInteractOutside: (event) => {
      props.onInteractOutside?.(event);
      if (!event.defaultPrevented && !context.modal)
        hasInteractedOutsideRef.current = true;
    },
    style: {
      ...props.style,
      ...{
        "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  });
});
ContextMenuContent.displayName = CONTENT_NAME11;
var GROUP_NAME5 = "ContextMenuGroup";
var ContextMenuGroup = React62.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu, ...groupProps } = props;
  const menuScope = useMenuScope2(__scopeContextMenu);
  return /* @__PURE__ */ jsx93(Group2, { ...menuScope, ...groupProps, ref: forwardedRef });
});
ContextMenuGroup.displayName = GROUP_NAME5;
var LABEL_NAME4 = "ContextMenuLabel";
var ContextMenuLabel = React62.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu, ...labelProps } = props;
  const menuScope = useMenuScope2(__scopeContextMenu);
  return /* @__PURE__ */ jsx93(Label2, { ...menuScope, ...labelProps, ref: forwardedRef });
});
ContextMenuLabel.displayName = LABEL_NAME4;
var ITEM_NAME6 = "ContextMenuItem";
var ContextMenuItem = React62.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu, ...itemProps } = props;
  const menuScope = useMenuScope2(__scopeContextMenu);
  return /* @__PURE__ */ jsx93(Item22, { ...menuScope, ...itemProps, ref: forwardedRef });
});
ContextMenuItem.displayName = ITEM_NAME6;
var CHECKBOX_ITEM_NAME3 = "ContextMenuCheckboxItem";
var ContextMenuCheckboxItem = React62.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu, ...checkboxItemProps } = props;
  const menuScope = useMenuScope2(__scopeContextMenu);
  return /* @__PURE__ */ jsx93(CheckboxItem, { ...menuScope, ...checkboxItemProps, ref: forwardedRef });
});
ContextMenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME3;
var RADIO_GROUP_NAME3 = "ContextMenuRadioGroup";
var ContextMenuRadioGroup = React62.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu, ...radioGroupProps } = props;
  const menuScope = useMenuScope2(__scopeContextMenu);
  return /* @__PURE__ */ jsx93(RadioGroup, { ...menuScope, ...radioGroupProps, ref: forwardedRef });
});
ContextMenuRadioGroup.displayName = RADIO_GROUP_NAME3;
var RADIO_ITEM_NAME3 = "ContextMenuRadioItem";
var ContextMenuRadioItem = React62.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu, ...radioItemProps } = props;
  const menuScope = useMenuScope2(__scopeContextMenu);
  return /* @__PURE__ */ jsx93(RadioItem, { ...menuScope, ...radioItemProps, ref: forwardedRef });
});
ContextMenuRadioItem.displayName = RADIO_ITEM_NAME3;
var INDICATOR_NAME3 = "ContextMenuItemIndicator";
var ContextMenuItemIndicator = React62.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu, ...itemIndicatorProps } = props;
  const menuScope = useMenuScope2(__scopeContextMenu);
  return /* @__PURE__ */ jsx93(ItemIndicator2, { ...menuScope, ...itemIndicatorProps, ref: forwardedRef });
});
ContextMenuItemIndicator.displayName = INDICATOR_NAME3;
var SEPARATOR_NAME4 = "ContextMenuSeparator";
var ContextMenuSeparator = React62.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu, ...separatorProps } = props;
  const menuScope = useMenuScope2(__scopeContextMenu);
  return /* @__PURE__ */ jsx93(Separator2, { ...menuScope, ...separatorProps, ref: forwardedRef });
});
ContextMenuSeparator.displayName = SEPARATOR_NAME4;
var ARROW_NAME7 = "ContextMenuArrow";
var ContextMenuArrow = React62.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu, ...arrowProps } = props;
  const menuScope = useMenuScope2(__scopeContextMenu);
  return /* @__PURE__ */ jsx93(Arrow23, { ...menuScope, ...arrowProps, ref: forwardedRef });
});
ContextMenuArrow.displayName = ARROW_NAME7;
var SUB_NAME2 = "ContextMenuSub";
var ContextMenuSub = (props) => {
  const { __scopeContextMenu, children, onOpenChange, open: openProp, defaultOpen } = props;
  const menuScope = useMenuScope2(__scopeContextMenu);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
    caller: SUB_NAME2
  });
  return /* @__PURE__ */ jsx93(Sub, { ...menuScope, open, onOpenChange: setOpen, children });
};
ContextMenuSub.displayName = SUB_NAME2;
var SUB_TRIGGER_NAME3 = "ContextMenuSubTrigger";
var ContextMenuSubTrigger = React62.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu, ...triggerItemProps } = props;
  const menuScope = useMenuScope2(__scopeContextMenu);
  return /* @__PURE__ */ jsx93(SubTrigger, { ...menuScope, ...triggerItemProps, ref: forwardedRef });
});
ContextMenuSubTrigger.displayName = SUB_TRIGGER_NAME3;
var SUB_CONTENT_NAME3 = "ContextMenuSubContent";
var ContextMenuSubContent = React62.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu, ...subContentProps } = props;
  const menuScope = useMenuScope2(__scopeContextMenu);
  return /* @__PURE__ */ jsx93(SubContent, {
    ...menuScope,
    ...subContentProps,
    ref: forwardedRef,
    style: {
      ...props.style,
      ...{
        "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  });
});
ContextMenuSubContent.displayName = SUB_CONTENT_NAME3;
function whenTouchOrPen(handler) {
  return (event) => event.pointerType !== "mouse" ? handler(event) : undefined;
}
var Root27 = ContextMenu;
var Trigger7 = ContextMenuTrigger;
var Portal24 = ContextMenuPortal;
var Content28 = ContextMenuContent;
var Group23 = ContextMenuGroup;
var Label23 = ContextMenuLabel;
var Item24 = ContextMenuItem;
var CheckboxItem22 = ContextMenuCheckboxItem;
var RadioGroup22 = ContextMenuRadioGroup;
var RadioItem22 = ContextMenuRadioItem;
var ItemIndicator23 = ContextMenuItemIndicator;
var Separator23 = ContextMenuSeparator;
var Sub22 = ContextMenuSub;
var SubTrigger22 = ContextMenuSubTrigger;
var SubContent22 = ContextMenuSubContent;

// src/shadcn-ui/components/context-menu.tsx
import clsx25 from "clsx";
import { jsx as jsx94, jsxs as jsxs42 } from "react/jsx-runtime";
function ContextMenu2({ ...props }) {
  return /* @__PURE__ */ jsx94(Root27, {
    "data-slot": "context-menu",
    ...props
  });
}
function ContextMenuTrigger2({ ...props }) {
  return /* @__PURE__ */ jsx94(Trigger7, {
    "data-slot": "context-menu-trigger",
    ...props
  });
}
function ContextMenuGroup2({ ...props }) {
  return /* @__PURE__ */ jsx94(Group23, {
    "data-slot": "context-menu-group",
    ...props
  });
}
function ContextMenuPortal2({ ...props }) {
  return /* @__PURE__ */ jsx94(Portal24, {
    "data-slot": "context-menu-portal",
    ...props
  });
}
function ContextMenuSub2({ ...props }) {
  return /* @__PURE__ */ jsx94(Sub22, {
    "data-slot": "context-menu-sub",
    ...props
  });
}
function ContextMenuRadioGroup2({ ...props }) {
  return /* @__PURE__ */ jsx94(RadioGroup22, {
    "data-slot": "context-menu-radio-group",
    ...props
  });
}
function ContextMenuSubTrigger2({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs42(SubTrigger22, {
    "data-slot": "context-menu-sub-trigger",
    "data-inset": inset,
    className: clsx25("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[inset]:pl-8 data-[state=open]:text-accent-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx94(SvgIcon, {
        iconId: "ChevronRight",
        className: "ml-auto"
      })
    ]
  });
}
function ContextMenuSubContent2({ className, ...props }) {
  return /* @__PURE__ */ jsx94(SubContent22, {
    "data-slot": "context-menu-sub-content",
    className: clsx25("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=closed]:animate-out data-[state=open]:animate-in", className),
    ...props
  });
}
function ContextMenuContent2({ className, ...props }) {
  return /* @__PURE__ */ jsx94(Portal24, {
    children: /* @__PURE__ */ jsx94(Content28, {
      "data-slot": "context-menu-content",
      className: clsx25("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=closed]:animate-out data-[state=open]:animate-in", className),
      ...props
    })
  });
}
function ContextMenuItem2({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx94(Item24, {
    "data-slot": "context-menu-item",
    "data-inset": inset,
    "data-variant": variant,
    className: clsx25("data-[variant=destructive]:*:[svg]:!text-destructive relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[disabled]:opacity-50 data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props
  });
}
function ContextMenuCheckboxItem2({ className, children, checked, ...props }) {
  return /* @__PURE__ */ jsxs42(CheckboxItem22, {
    "data-slot": "context-menu-checkbox-item",
    className: clsx25("relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx94("span", {
        className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
        children: /* @__PURE__ */ jsx94(ItemIndicator23, {
          children: /* @__PURE__ */ jsx94(SvgIcon, {
            iconId: "Check",
            className: "size-4"
          })
        })
      }),
      children
    ]
  });
}
function ContextMenuRadioItem2({ className, children, ...props }) {
  return /* @__PURE__ */ jsxs42(RadioItem22, {
    "data-slot": "context-menu-radio-item",
    className: clsx25("relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx94("span", {
        className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
        children: /* @__PURE__ */ jsx94(ItemIndicator23, {
          children: /* @__PURE__ */ jsx94(SvgIcon, {
            iconId: "Circle",
            className: "size-2 fill-current"
          })
        })
      }),
      children
    ]
  });
}
function ContextMenuLabel2({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsx94(Label23, {
    "data-slot": "context-menu-label",
    "data-inset": inset,
    className: clsx25("px-2 py-1.5 font-medium text-foreground text-sm data-[inset]:pl-8", className),
    ...props
  });
}
function ContextMenuSeparator2({ className, ...props }) {
  return /* @__PURE__ */ jsx94(Separator23, {
    "data-slot": "context-menu-separator",
    className: clsx25("-mx-1 my-1 h-px bg-border", className),
    ...props
  });
}
function ContextMenuShortcut({ className, ...props }) {
  return /* @__PURE__ */ jsx94("span", {
    "data-slot": "context-menu-shortcut",
    className: clsx25("ml-auto text-muted-foreground text-xs tracking-widest", className),
    ...props
  });
}

// src/shadcn-ui/examples/context-menu-demo.tsx
import { jsx as jsx95, jsxs as jsxs43 } from "react/jsx-runtime";
function ContextMenuDemo() {
  return /* @__PURE__ */ jsxs43(ContextMenu2, {
    children: [
      /* @__PURE__ */ jsx95(ContextMenuTrigger2, {
        className: "flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm",
        children: "Right click here"
      }),
      /* @__PURE__ */ jsxs43(ContextMenuContent2, {
        className: "w-52",
        children: [
          /* @__PURE__ */ jsxs43(ContextMenuItem2, {
            inset: true,
            children: [
              "Back",
              /* @__PURE__ */ jsx95(ContextMenuShortcut, {
                children: "⌘["
              })
            ]
          }),
          /* @__PURE__ */ jsxs43(ContextMenuItem2, {
            inset: true,
            disabled: true,
            children: [
              "Forward",
              /* @__PURE__ */ jsx95(ContextMenuShortcut, {
                children: "⌘]"
              })
            ]
          }),
          /* @__PURE__ */ jsxs43(ContextMenuItem2, {
            inset: true,
            children: [
              "Reload",
              /* @__PURE__ */ jsx95(ContextMenuShortcut, {
                children: "⌘R"
              })
            ]
          }),
          /* @__PURE__ */ jsxs43(ContextMenuSub2, {
            children: [
              /* @__PURE__ */ jsx95(ContextMenuSubTrigger2, {
                inset: true,
                children: "More Tools"
              }),
              /* @__PURE__ */ jsxs43(ContextMenuSubContent2, {
                className: "w-44",
                children: [
                  /* @__PURE__ */ jsx95(ContextMenuItem2, {
                    children: "Save Page..."
                  }),
                  /* @__PURE__ */ jsx95(ContextMenuItem2, {
                    children: "Create Shortcut..."
                  }),
                  /* @__PURE__ */ jsx95(ContextMenuItem2, {
                    children: "Name Window..."
                  }),
                  /* @__PURE__ */ jsx95(ContextMenuSeparator2, {}),
                  /* @__PURE__ */ jsx95(ContextMenuItem2, {
                    children: "Developer Tools"
                  }),
                  /* @__PURE__ */ jsx95(ContextMenuSeparator2, {}),
                  /* @__PURE__ */ jsx95(ContextMenuItem2, {
                    variant: "destructive",
                    children: "Delete"
                  })
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsx95(ContextMenuSeparator2, {}),
          /* @__PURE__ */ jsx95(ContextMenuCheckboxItem2, {
            checked: true,
            children: "Show Bookmarks"
          }),
          /* @__PURE__ */ jsx95(ContextMenuCheckboxItem2, {
            children: "Show Full URLs"
          }),
          /* @__PURE__ */ jsx95(ContextMenuSeparator2, {}),
          /* @__PURE__ */ jsxs43(ContextMenuRadioGroup2, {
            value: "pedro",
            children: [
              /* @__PURE__ */ jsx95(ContextMenuLabel2, {
                inset: true,
                children: "People"
              }),
              /* @__PURE__ */ jsx95(ContextMenuRadioItem2, {
                value: "pedro",
                children: "Pedro Duarte"
              }),
              /* @__PURE__ */ jsx95(ContextMenuRadioItem2, {
                value: "colm",
                children: "Colm Tuite"
              })
            ]
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/examples/dialog-close-button.tsx
import React63 from "react";
import { jsx as jsx96, jsxs as jsxs44 } from "react/jsx-runtime";
function DialogCloseButton() {
  const linkId = React63.useId();
  return /* @__PURE__ */ jsxs44(Dialog2, {
    children: [
      /* @__PURE__ */ jsx96(DialogTrigger2, {
        asChild: true,
        children: /* @__PURE__ */ jsx96(Button, {
          variant: "outline",
          children: "Share"
        })
      }),
      /* @__PURE__ */ jsxs44(DialogContent2, {
        className: "sm:max-w-md",
        children: [
          /* @__PURE__ */ jsxs44(DialogHeader, {
            children: [
              /* @__PURE__ */ jsx96(DialogTitle2, {
                children: "Share link"
              }),
              /* @__PURE__ */ jsx96(DialogDescription2, {
                children: "Anyone who has this link will be able to view this."
              })
            ]
          }),
          /* @__PURE__ */ jsx96("div", {
            className: "flex items-center gap-2",
            children: /* @__PURE__ */ jsxs44("div", {
              className: "grid flex-1 gap-2",
              children: [
                /* @__PURE__ */ jsx96(Label4, {
                  htmlFor: linkId,
                  className: "sr-only",
                  children: "Link"
                }),
                /* @__PURE__ */ jsx96(Input, {
                  id: linkId,
                  defaultValue: "https://ui.shadcn.com/docs/installation",
                  readOnly: true
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx96(DialogFooter, {
            className: "sm:justify-start",
            children: /* @__PURE__ */ jsx96(DialogClose2, {
              asChild: true,
              children: /* @__PURE__ */ jsx96(Button, {
                type: "button",
                variant: "secondary",
                children: "Close"
              })
            })
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/examples/dialog-demo.tsx
import React64 from "react";
import { jsx as jsx97, jsxs as jsxs45 } from "react/jsx-runtime";
function DialogDemo() {
  const nameId = React64.useId();
  const usernameId = React64.useId();
  return /* @__PURE__ */ jsx97(Dialog2, {
    children: /* @__PURE__ */ jsxs45("form", {
      children: [
        /* @__PURE__ */ jsx97(DialogTrigger2, {
          asChild: true,
          children: /* @__PURE__ */ jsx97(Button, {
            variant: "outline",
            children: "Open Dialog"
          })
        }),
        /* @__PURE__ */ jsxs45(DialogContent2, {
          className: "sm:max-w-[425px]",
          children: [
            /* @__PURE__ */ jsxs45(DialogHeader, {
              children: [
                /* @__PURE__ */ jsx97(DialogTitle2, {
                  children: "Edit profile"
                }),
                /* @__PURE__ */ jsx97(DialogDescription2, {
                  children: "Make changes to your profile here. Click save when you're done."
                })
              ]
            }),
            /* @__PURE__ */ jsxs45("div", {
              className: "grid gap-4",
              children: [
                /* @__PURE__ */ jsxs45("div", {
                  className: "grid gap-3",
                  children: [
                    /* @__PURE__ */ jsx97(Label4, {
                      htmlFor: nameId,
                      children: "Name"
                    }),
                    /* @__PURE__ */ jsx97(Input, {
                      id: nameId,
                      name: "name",
                      defaultValue: "Pedro Duarte"
                    })
                  ]
                }),
                /* @__PURE__ */ jsxs45("div", {
                  className: "grid gap-3",
                  children: [
                    /* @__PURE__ */ jsx97(Label4, {
                      htmlFor: usernameId,
                      children: "Username"
                    }),
                    /* @__PURE__ */ jsx97(Input, {
                      id: usernameId,
                      name: "username",
                      defaultValue: "@peduarte"
                    })
                  ]
                })
              ]
            }),
            /* @__PURE__ */ jsxs45(DialogFooter, {
              children: [
                /* @__PURE__ */ jsx97(DialogClose2, {
                  asChild: true,
                  children: /* @__PURE__ */ jsx97(Button, {
                    variant: "outline",
                    children: "Cancel"
                  })
                }),
                /* @__PURE__ */ jsx97(Button, {
                  type: "submit",
                  children: "Save changes"
                })
              ]
            })
          ]
        })
      ]
    })
  });
}

// src/shadcn-ui/examples/dropdown-menu-checkboxes.tsx
import React65 from "react";
import { jsx as jsx98, jsxs as jsxs46 } from "react/jsx-runtime";
function DropdownMenuCheckboxes() {
  const [showStatusBar, setShowStatusBar] = React65.useState(true);
  const [showActivityBar, setShowActivityBar] = React65.useState(false);
  const [showPanel, setShowPanel] = React65.useState(false);
  return /* @__PURE__ */ jsxs46(DropdownMenu2, {
    children: [
      /* @__PURE__ */ jsx98(DropdownMenuTrigger2, {
        asChild: true,
        children: /* @__PURE__ */ jsx98(Button, {
          variant: "outline",
          children: "Open"
        })
      }),
      /* @__PURE__ */ jsxs46(DropdownMenuContent2, {
        className: "w-56",
        children: [
          /* @__PURE__ */ jsx98(DropdownMenuLabel2, {
            children: "Appearance"
          }),
          /* @__PURE__ */ jsx98(DropdownMenuSeparator2, {}),
          /* @__PURE__ */ jsx98(DropdownMenuCheckboxItem2, {
            checked: showStatusBar,
            onCheckedChange: setShowStatusBar,
            children: "Status Bar"
          }),
          /* @__PURE__ */ jsx98(DropdownMenuCheckboxItem2, {
            checked: showActivityBar,
            onCheckedChange: setShowActivityBar,
            disabled: true,
            children: "Activity Bar"
          }),
          /* @__PURE__ */ jsx98(DropdownMenuCheckboxItem2, {
            checked: showPanel,
            onCheckedChange: setShowPanel,
            children: "Panel"
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/examples/dropdown-menu-demo.tsx
import { jsx as jsx99, jsxs as jsxs47 } from "react/jsx-runtime";
function DropdownMenuDemo() {
  return /* @__PURE__ */ jsxs47(DropdownMenu2, {
    children: [
      /* @__PURE__ */ jsx99(DropdownMenuTrigger2, {
        asChild: true,
        children: /* @__PURE__ */ jsx99(Button, {
          variant: "outline",
          children: "Open"
        })
      }),
      /* @__PURE__ */ jsxs47(DropdownMenuContent2, {
        className: "w-56",
        align: "start",
        children: [
          /* @__PURE__ */ jsx99(DropdownMenuLabel2, {
            children: "My Account"
          }),
          /* @__PURE__ */ jsxs47(DropdownMenuGroup2, {
            children: [
              /* @__PURE__ */ jsxs47(DropdownMenuItem2, {
                children: [
                  "Profile",
                  /* @__PURE__ */ jsx99(DropdownMenuShortcut, {
                    children: "⇧⌘P"
                  })
                ]
              }),
              /* @__PURE__ */ jsxs47(DropdownMenuItem2, {
                children: [
                  "Billing",
                  /* @__PURE__ */ jsx99(DropdownMenuShortcut, {
                    children: "⌘B"
                  })
                ]
              }),
              /* @__PURE__ */ jsxs47(DropdownMenuItem2, {
                children: [
                  "Settings",
                  /* @__PURE__ */ jsx99(DropdownMenuShortcut, {
                    children: "⌘S"
                  })
                ]
              }),
              /* @__PURE__ */ jsxs47(DropdownMenuItem2, {
                children: [
                  "Keyboard shortcuts",
                  /* @__PURE__ */ jsx99(DropdownMenuShortcut, {
                    children: "⌘K"
                  })
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsx99(DropdownMenuSeparator2, {}),
          /* @__PURE__ */ jsxs47(DropdownMenuGroup2, {
            children: [
              /* @__PURE__ */ jsx99(DropdownMenuItem2, {
                children: "Team"
              }),
              /* @__PURE__ */ jsxs47(DropdownMenuSub2, {
                children: [
                  /* @__PURE__ */ jsx99(DropdownMenuSubTrigger2, {
                    children: "Invite users"
                  }),
                  /* @__PURE__ */ jsx99(DropdownMenuPortal2, {
                    children: /* @__PURE__ */ jsxs47(DropdownMenuSubContent2, {
                      children: [
                        /* @__PURE__ */ jsx99(DropdownMenuItem2, {
                          children: "Email"
                        }),
                        /* @__PURE__ */ jsx99(DropdownMenuItem2, {
                          children: "Message"
                        }),
                        /* @__PURE__ */ jsx99(DropdownMenuSeparator2, {}),
                        /* @__PURE__ */ jsx99(DropdownMenuItem2, {
                          children: "More..."
                        })
                      ]
                    })
                  })
                ]
              }),
              /* @__PURE__ */ jsxs47(DropdownMenuItem2, {
                children: [
                  "New Team",
                  /* @__PURE__ */ jsx99(DropdownMenuShortcut, {
                    children: "⌘+T"
                  })
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsx99(DropdownMenuSeparator2, {}),
          /* @__PURE__ */ jsx99(DropdownMenuItem2, {
            children: "GitHub"
          }),
          /* @__PURE__ */ jsx99(DropdownMenuItem2, {
            children: "Support"
          }),
          /* @__PURE__ */ jsx99(DropdownMenuItem2, {
            disabled: true,
            children: "API"
          }),
          /* @__PURE__ */ jsx99(DropdownMenuSeparator2, {}),
          /* @__PURE__ */ jsxs47(DropdownMenuItem2, {
            children: [
              "Log out",
              /* @__PURE__ */ jsx99(DropdownMenuShortcut, {
                children: "⇧⌘Q"
              })
            ]
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/examples/dropdown-menu-radio-group.tsx
import React66 from "react";
import { jsx as jsx100, jsxs as jsxs48 } from "react/jsx-runtime";
function DropdownMenuRadioGroupDemo() {
  const [position, setPosition] = React66.useState("bottom");
  return /* @__PURE__ */ jsxs48(DropdownMenu2, {
    children: [
      /* @__PURE__ */ jsx100(DropdownMenuTrigger2, {
        asChild: true,
        children: /* @__PURE__ */ jsx100(Button, {
          variant: "outline",
          children: "Open"
        })
      }),
      /* @__PURE__ */ jsxs48(DropdownMenuContent2, {
        className: "w-56",
        children: [
          /* @__PURE__ */ jsx100(DropdownMenuLabel2, {
            children: "Panel Position"
          }),
          /* @__PURE__ */ jsx100(DropdownMenuSeparator2, {}),
          /* @__PURE__ */ jsxs48(DropdownMenuRadioGroup2, {
            value: position,
            onValueChange: setPosition,
            children: [
              /* @__PURE__ */ jsx100(DropdownMenuRadioItem2, {
                value: "top",
                children: "Top"
              }),
              /* @__PURE__ */ jsx100(DropdownMenuRadioItem2, {
                value: "bottom",
                children: "Bottom"
              }),
              /* @__PURE__ */ jsx100(DropdownMenuRadioItem2, {
                value: "right",
                children: "Right"
              })
            ]
          })
        ]
      })
    ]
  });
}

// ../../node_modules/@radix-ui/react-hover-card/dist/index.mjs
import * as React67 from "react";
import { jsx as jsx101 } from "react/jsx-runtime";
"use client";
var originalBodyUserSelect;
var HOVERCARD_NAME = "HoverCard";
var [createHoverCardContext, createHoverCardScope] = createContextScope(HOVERCARD_NAME, [
  createPopperScope
]);
var usePopperScope5 = createPopperScope();
var [HoverCardProvider, useHoverCardContext] = createHoverCardContext(HOVERCARD_NAME);
var HoverCard = (props) => {
  const {
    __scopeHoverCard,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    openDelay = 700,
    closeDelay = 300
  } = props;
  const popperScope = usePopperScope5(__scopeHoverCard);
  const openTimerRef = React67.useRef(0);
  const closeTimerRef = React67.useRef(0);
  const hasSelectionRef = React67.useRef(false);
  const isPointerDownOnContentRef = React67.useRef(false);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
    caller: HOVERCARD_NAME
  });
  const handleOpen = React67.useCallback(() => {
    clearTimeout(closeTimerRef.current);
    openTimerRef.current = window.setTimeout(() => setOpen(true), openDelay);
  }, [openDelay, setOpen]);
  const handleClose = React67.useCallback(() => {
    clearTimeout(openTimerRef.current);
    if (!hasSelectionRef.current && !isPointerDownOnContentRef.current) {
      closeTimerRef.current = window.setTimeout(() => setOpen(false), closeDelay);
    }
  }, [closeDelay, setOpen]);
  const handleDismiss = React67.useCallback(() => setOpen(false), [setOpen]);
  React67.useEffect(() => {
    return () => {
      clearTimeout(openTimerRef.current);
      clearTimeout(closeTimerRef.current);
    };
  }, []);
  return /* @__PURE__ */ jsx101(HoverCardProvider, {
    scope: __scopeHoverCard,
    open,
    onOpenChange: setOpen,
    onOpen: handleOpen,
    onClose: handleClose,
    onDismiss: handleDismiss,
    hasSelectionRef,
    isPointerDownOnContentRef,
    children: /* @__PURE__ */ jsx101(Root2, { ...popperScope, children })
  });
};
HoverCard.displayName = HOVERCARD_NAME;
var TRIGGER_NAME11 = "HoverCardTrigger";
var HoverCardTrigger = React67.forwardRef((props, forwardedRef) => {
  const { __scopeHoverCard, ...triggerProps } = props;
  const context = useHoverCardContext(TRIGGER_NAME11, __scopeHoverCard);
  const popperScope = usePopperScope5(__scopeHoverCard);
  return /* @__PURE__ */ jsx101(Anchor, { asChild: true, ...popperScope, children: /* @__PURE__ */ jsx101(Primitive.a, {
    "data-state": context.open ? "open" : "closed",
    ...triggerProps,
    ref: forwardedRef,
    onPointerEnter: composeEventHandlers(props.onPointerEnter, excludeTouch(context.onOpen)),
    onPointerLeave: composeEventHandlers(props.onPointerLeave, excludeTouch(context.onClose)),
    onFocus: composeEventHandlers(props.onFocus, context.onOpen),
    onBlur: composeEventHandlers(props.onBlur, context.onClose),
    onTouchStart: composeEventHandlers(props.onTouchStart, (event) => event.preventDefault())
  }) });
});
HoverCardTrigger.displayName = TRIGGER_NAME11;
var PORTAL_NAME10 = "HoverCardPortal";
var [PortalProvider5, usePortalContext5] = createHoverCardContext(PORTAL_NAME10, {
  forceMount: undefined
});
var HoverCardPortal = (props) => {
  const { __scopeHoverCard, forceMount, children, container } = props;
  const context = useHoverCardContext(PORTAL_NAME10, __scopeHoverCard);
  return /* @__PURE__ */ jsx101(PortalProvider5, { scope: __scopeHoverCard, forceMount, children: /* @__PURE__ */ jsx101(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsx101(Portal, { asChild: true, container, children }) }) });
};
HoverCardPortal.displayName = PORTAL_NAME10;
var CONTENT_NAME12 = "HoverCardContent";
var HoverCardContent = React67.forwardRef((props, forwardedRef) => {
  const portalContext = usePortalContext5(CONTENT_NAME12, props.__scopeHoverCard);
  const { forceMount = portalContext.forceMount, ...contentProps } = props;
  const context = useHoverCardContext(CONTENT_NAME12, props.__scopeHoverCard);
  return /* @__PURE__ */ jsx101(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsx101(HoverCardContentImpl, {
    "data-state": context.open ? "open" : "closed",
    ...contentProps,
    onPointerEnter: composeEventHandlers(props.onPointerEnter, excludeTouch(context.onOpen)),
    onPointerLeave: composeEventHandlers(props.onPointerLeave, excludeTouch(context.onClose)),
    ref: forwardedRef
  }) });
});
HoverCardContent.displayName = CONTENT_NAME12;
var HoverCardContentImpl = React67.forwardRef((props, forwardedRef) => {
  const {
    __scopeHoverCard,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside,
    onInteractOutside,
    ...contentProps
  } = props;
  const context = useHoverCardContext(CONTENT_NAME12, __scopeHoverCard);
  const popperScope = usePopperScope5(__scopeHoverCard);
  const ref = React67.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const [containSelection, setContainSelection] = React67.useState(false);
  React67.useEffect(() => {
    if (containSelection) {
      const body = document.body;
      originalBodyUserSelect = body.style.userSelect || body.style.webkitUserSelect;
      body.style.userSelect = "none";
      body.style.webkitUserSelect = "none";
      return () => {
        body.style.userSelect = originalBodyUserSelect;
        body.style.webkitUserSelect = originalBodyUserSelect;
      };
    }
  }, [containSelection]);
  React67.useEffect(() => {
    if (ref.current) {
      const handlePointerUp = () => {
        setContainSelection(false);
        context.isPointerDownOnContentRef.current = false;
        setTimeout(() => {
          const hasSelection = document.getSelection()?.toString() !== "";
          if (hasSelection)
            context.hasSelectionRef.current = true;
        });
      };
      document.addEventListener("pointerup", handlePointerUp);
      return () => {
        document.removeEventListener("pointerup", handlePointerUp);
        context.hasSelectionRef.current = false;
        context.isPointerDownOnContentRef.current = false;
      };
    }
  }, [context.isPointerDownOnContentRef, context.hasSelectionRef]);
  React67.useEffect(() => {
    if (ref.current) {
      const tabbables = getTabbableNodes(ref.current);
      tabbables.forEach((tabbable) => tabbable.setAttribute("tabindex", "-1"));
    }
  });
  return /* @__PURE__ */ jsx101(DismissableLayer, {
    asChild: true,
    disableOutsidePointerEvents: false,
    onInteractOutside,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside: composeEventHandlers(onFocusOutside, (event) => {
      event.preventDefault();
    }),
    onDismiss: context.onDismiss,
    children: /* @__PURE__ */ jsx101(Content, {
      ...popperScope,
      ...contentProps,
      onPointerDown: composeEventHandlers(contentProps.onPointerDown, (event) => {
        if (event.currentTarget.contains(event.target)) {
          setContainSelection(true);
        }
        context.hasSelectionRef.current = false;
        context.isPointerDownOnContentRef.current = true;
      }),
      ref: composedRefs,
      style: {
        ...contentProps.style,
        userSelect: containSelection ? "text" : undefined,
        WebkitUserSelect: containSelection ? "text" : undefined,
        ...{
          "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
          "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
          "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    })
  });
});
var ARROW_NAME8 = "HoverCardArrow";
var HoverCardArrow = React67.forwardRef((props, forwardedRef) => {
  const { __scopeHoverCard, ...arrowProps } = props;
  const popperScope = usePopperScope5(__scopeHoverCard);
  return /* @__PURE__ */ jsx101(Arrow2, { ...popperScope, ...arrowProps, ref: forwardedRef });
});
HoverCardArrow.displayName = ARROW_NAME8;
function excludeTouch(eventHandler) {
  return (event) => event.pointerType === "touch" ? undefined : eventHandler();
}
function getTabbableNodes(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
}
var Root28 = HoverCard;
var Trigger8 = HoverCardTrigger;
var Portal7 = HoverCardPortal;
var Content29 = HoverCardContent;

// src/shadcn-ui/components/hover-card.tsx
import clsx26 from "clsx";
import { jsx as jsx102 } from "react/jsx-runtime";
function HoverCard2({ ...props }) {
  return /* @__PURE__ */ jsx102(Root28, {
    "data-slot": "hover-card",
    ...props
  });
}
function HoverCardTrigger2({ ...props }) {
  return /* @__PURE__ */ jsx102(Trigger8, {
    "data-slot": "hover-card-trigger",
    ...props
  });
}
function HoverCardContent2({ className, align = "center", sideOffset = 4, ...props }) {
  return /* @__PURE__ */ jsx102(Portal7, {
    "data-slot": "hover-card-portal",
    children: /* @__PURE__ */ jsx102(Content29, {
      "data-slot": "hover-card-content",
      align,
      sideOffset,
      className: clsx26("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[state=closed]:animate-out data-[state=open]:animate-in", className),
      ...props
    })
  });
}

// src/shadcn-ui/examples/hover-card-demo.tsx
import { jsx as jsx103, jsxs as jsxs49 } from "react/jsx-runtime";
function HoverCardDemo() {
  return /* @__PURE__ */ jsxs49(HoverCard2, {
    children: [
      /* @__PURE__ */ jsx103(HoverCardTrigger2, {
        asChild: true,
        children: /* @__PURE__ */ jsx103(Button, {
          variant: "link",
          children: "@nextjs"
        })
      }),
      /* @__PURE__ */ jsx103(HoverCardContent2, {
        className: "w-80",
        children: /* @__PURE__ */ jsxs49("div", {
          className: "flex justify-between gap-4",
          children: [
            /* @__PURE__ */ jsxs49(Avatar2, {
              children: [
                /* @__PURE__ */ jsx103(AvatarImage2, {
                  src: "https://github.com/vercel.png"
                }),
                /* @__PURE__ */ jsx103(AvatarFallback2, {
                  children: "VC"
                })
              ]
            }),
            /* @__PURE__ */ jsxs49("div", {
              className: "space-y-1",
              children: [
                /* @__PURE__ */ jsx103("h4", {
                  className: "font-semibold text-sm",
                  children: "@nextjs"
                }),
                /* @__PURE__ */ jsx103("p", {
                  className: "text-sm",
                  children: "The React Framework – created and maintained by @vercel."
                }),
                /* @__PURE__ */ jsx103("div", {
                  className: "text-muted-foreground text-xs",
                  children: "Joined December 2021"
                })
              ]
            })
          ]
        })
      })
    ]
  });
}

// src/shadcn-ui/examples/input-demo.tsx
import { jsx as jsx104 } from "react/jsx-runtime";
function InputDemo() {
  return /* @__PURE__ */ jsx104(Input, {
    type: "email",
    placeholder: "Email"
  });
}

// src/shadcn-ui/examples/input-disabled.tsx
import { jsx as jsx105 } from "react/jsx-runtime";
function InputDisabled() {
  return /* @__PURE__ */ jsx105(Input, {
    disabled: true,
    type: "email",
    placeholder: "Email"
  });
}

// src/shadcn-ui/examples/input-file.tsx
import React68 from "react";
import { jsx as jsx106, jsxs as jsxs50 } from "react/jsx-runtime";
function InputFile() {
  const pictureId = React68.useId();
  return /* @__PURE__ */ jsxs50("div", {
    className: "grid w-full max-w-sm items-center gap-3",
    children: [
      /* @__PURE__ */ jsx106(Label4, {
        htmlFor: pictureId,
        children: "Picture"
      }),
      /* @__PURE__ */ jsx106(Input, {
        id: pictureId,
        type: "file"
      })
    ]
  });
}

// src/shadcn-ui/examples/input-form.tsx
import { toast as toast4 } from "sonner";
import { jsx as jsx107, jsxs as jsxs51 } from "react/jsx-runtime";
function InputForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    toast4("You submitted the following values", {
      description: /* @__PURE__ */ jsx107("pre", {
        className: "mt-2 w-[320px] rounded-md bg-neutral-950 p-4",
        children: /* @__PURE__ */ jsx107("code", {
          className: "text-white",
          children: JSON.stringify({ username }, null, 2)
        })
      })
    });
  }
  return /* @__PURE__ */ jsxs51("form", {
    onSubmit: handleSubmit,
    className: "w-2/3 space-y-6",
    children: [
      /* @__PURE__ */ jsx107(Input, {
        name: "username",
        placeholder: "shadcn"
      }),
      /* @__PURE__ */ jsx107(Button, {
        type: "submit",
        children: "Submit"
      })
    ]
  });
}

// src/shadcn-ui/examples/input-with-button.tsx
import { jsx as jsx108, jsxs as jsxs52 } from "react/jsx-runtime";
function InputWithButton() {
  return /* @__PURE__ */ jsxs52("div", {
    className: "flex w-full max-w-sm items-center gap-2",
    children: [
      /* @__PURE__ */ jsx108(Input, {
        type: "email",
        placeholder: "Email"
      }),
      /* @__PURE__ */ jsx108(Button, {
        type: "submit",
        variant: "outline",
        children: "Subscribe"
      })
    ]
  });
}

// src/shadcn-ui/examples/input-with-label.tsx
import React69 from "react";
import { jsx as jsx109, jsxs as jsxs53 } from "react/jsx-runtime";
function InputWithLabel() {
  const emailId = React69.useId();
  return /* @__PURE__ */ jsxs53("div", {
    className: "grid w-full max-w-sm items-center gap-3",
    children: [
      /* @__PURE__ */ jsx109(Label4, {
        htmlFor: emailId,
        children: "Email"
      }),
      /* @__PURE__ */ jsx109(Input, {
        type: "email",
        id: emailId,
        placeholder: "Email"
      })
    ]
  });
}

// src/shadcn-ui/examples/input-with-text.tsx
import React70 from "react";
import { jsx as jsx110, jsxs as jsxs54 } from "react/jsx-runtime";
function InputWithText() {
  const emailId = React70.useId();
  return /* @__PURE__ */ jsxs54("div", {
    className: "grid w-full max-w-sm items-center gap-3",
    children: [
      /* @__PURE__ */ jsx110(Label4, {
        htmlFor: emailId,
        children: "Email"
      }),
      /* @__PURE__ */ jsx110(Input, {
        type: "email",
        id: emailId,
        placeholder: "Email"
      }),
      /* @__PURE__ */ jsx110("p", {
        className: "text-muted-foreground text-sm",
        children: "Enter your email address."
      })
    ]
  });
}

// src/shadcn-ui/examples/label-demo.tsx
import React71 from "react";
import { jsx as jsx111, jsxs as jsxs55 } from "react/jsx-runtime";
function LabelDemo() {
  const termsId = React71.useId();
  return /* @__PURE__ */ jsx111("div", {
    children: /* @__PURE__ */ jsxs55("div", {
      className: "flex items-center space-x-2",
      children: [
        /* @__PURE__ */ jsx111(Checkbox2, {
          id: termsId
        }),
        /* @__PURE__ */ jsx111(Label4, {
          htmlFor: termsId,
          children: "Accept terms and conditions"
        })
      ]
    })
  });
}

// ../../node_modules/@radix-ui/react-menubar/dist/index.mjs
import * as React72 from "react";
import { jsx as jsx112 } from "react/jsx-runtime";
"use client";
var MENUBAR_NAME = "Menubar";
var [Collection5, useCollection5, createCollectionScope5] = createCollection(MENUBAR_NAME);
var [createMenubarContext, createMenubarScope] = createContextScope(MENUBAR_NAME, [
  createCollectionScope5,
  createRovingFocusGroupScope
]);
var useMenuScope3 = createMenuScope();
var useRovingFocusGroupScope2 = createRovingFocusGroupScope();
var [MenubarContextProvider, useMenubarContext] = createMenubarContext(MENUBAR_NAME);
var Menubar = React72.forwardRef((props, forwardedRef) => {
  const {
    __scopeMenubar,
    value: valueProp,
    onValueChange,
    defaultValue,
    loop = true,
    dir,
    ...menubarProps
  } = props;
  const direction = useDirection(dir);
  const rovingFocusGroupScope = useRovingFocusGroupScope2(__scopeMenubar);
  const [value, setValue] = useControllableState({
    prop: valueProp,
    onChange: onValueChange,
    defaultProp: defaultValue ?? "",
    caller: MENUBAR_NAME
  });
  const [currentTabStopId, setCurrentTabStopId] = React72.useState(null);
  return /* @__PURE__ */ jsx112(MenubarContextProvider, {
    scope: __scopeMenubar,
    value,
    onMenuOpen: React72.useCallback((value2) => {
      setValue(value2);
      setCurrentTabStopId(value2);
    }, [setValue]),
    onMenuClose: React72.useCallback(() => setValue(""), [setValue]),
    onMenuToggle: React72.useCallback((value2) => {
      setValue((prevValue) => prevValue ? "" : value2);
      setCurrentTabStopId(value2);
    }, [setValue]),
    dir: direction,
    loop,
    children: /* @__PURE__ */ jsx112(Collection5.Provider, { scope: __scopeMenubar, children: /* @__PURE__ */ jsx112(Collection5.Slot, { scope: __scopeMenubar, children: /* @__PURE__ */ jsx112(Root9, {
      asChild: true,
      ...rovingFocusGroupScope,
      orientation: "horizontal",
      loop,
      dir: direction,
      currentTabStopId,
      onCurrentTabStopIdChange: setCurrentTabStopId,
      children: /* @__PURE__ */ jsx112(Primitive.div, { role: "menubar", ...menubarProps, ref: forwardedRef })
    }) }) })
  });
});
Menubar.displayName = MENUBAR_NAME;
var MENU_NAME2 = "MenubarMenu";
var [MenubarMenuProvider, useMenubarMenuContext] = createMenubarContext(MENU_NAME2);
var MenubarMenu = (props) => {
  const { __scopeMenubar, value: valueProp, ...menuProps } = props;
  const autoValue = useId();
  const value = valueProp || autoValue || "LEGACY_REACT_AUTO_VALUE";
  const context = useMenubarContext(MENU_NAME2, __scopeMenubar);
  const menuScope = useMenuScope3(__scopeMenubar);
  const triggerRef = React72.useRef(null);
  const wasKeyboardTriggerOpenRef = React72.useRef(false);
  const open = context.value === value;
  React72.useEffect(() => {
    if (!open)
      wasKeyboardTriggerOpenRef.current = false;
  }, [open]);
  return /* @__PURE__ */ jsx112(MenubarMenuProvider, {
    scope: __scopeMenubar,
    value,
    triggerId: useId(),
    triggerRef,
    contentId: useId(),
    wasKeyboardTriggerOpenRef,
    children: /* @__PURE__ */ jsx112(Root33, {
      ...menuScope,
      open,
      onOpenChange: (open2) => {
        if (!open2)
          context.onMenuClose();
      },
      modal: false,
      dir: context.dir,
      ...menuProps
    })
  });
};
MenubarMenu.displayName = MENU_NAME2;
var TRIGGER_NAME12 = "MenubarTrigger";
var MenubarTrigger = React72.forwardRef((props, forwardedRef) => {
  const { __scopeMenubar, disabled = false, ...triggerProps } = props;
  const rovingFocusGroupScope = useRovingFocusGroupScope2(__scopeMenubar);
  const menuScope = useMenuScope3(__scopeMenubar);
  const context = useMenubarContext(TRIGGER_NAME12, __scopeMenubar);
  const menuContext = useMenubarMenuContext(TRIGGER_NAME12, __scopeMenubar);
  const ref = React72.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref, menuContext.triggerRef);
  const [isFocused, setIsFocused] = React72.useState(false);
  const open = context.value === menuContext.value;
  return /* @__PURE__ */ jsx112(Collection5.ItemSlot, { scope: __scopeMenubar, value: menuContext.value, disabled, children: /* @__PURE__ */ jsx112(Item3, {
    asChild: true,
    ...rovingFocusGroupScope,
    focusable: !disabled,
    tabStopId: menuContext.value,
    children: /* @__PURE__ */ jsx112(Anchor2, { asChild: true, ...menuScope, children: /* @__PURE__ */ jsx112(Primitive.button, {
      type: "button",
      role: "menuitem",
      id: menuContext.triggerId,
      "aria-haspopup": "menu",
      "aria-expanded": open,
      "aria-controls": open ? menuContext.contentId : undefined,
      "data-highlighted": isFocused ? "" : undefined,
      "data-state": open ? "open" : "closed",
      "data-disabled": disabled ? "" : undefined,
      disabled,
      ...triggerProps,
      ref: composedRefs,
      onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
        if (!disabled && event.button === 0 && event.ctrlKey === false) {
          context.onMenuOpen(menuContext.value);
          if (!open)
            event.preventDefault();
        }
      }),
      onPointerEnter: composeEventHandlers(props.onPointerEnter, () => {
        const menubarOpen = Boolean(context.value);
        if (menubarOpen && !open) {
          context.onMenuOpen(menuContext.value);
          ref.current?.focus();
        }
      }),
      onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
        if (disabled)
          return;
        if (["Enter", " "].includes(event.key))
          context.onMenuToggle(menuContext.value);
        if (event.key === "ArrowDown")
          context.onMenuOpen(menuContext.value);
        if (["Enter", " ", "ArrowDown"].includes(event.key)) {
          menuContext.wasKeyboardTriggerOpenRef.current = true;
          event.preventDefault();
        }
      }),
      onFocus: composeEventHandlers(props.onFocus, () => setIsFocused(true)),
      onBlur: composeEventHandlers(props.onBlur, () => setIsFocused(false))
    }) })
  }) });
});
MenubarTrigger.displayName = TRIGGER_NAME12;
var PORTAL_NAME11 = "MenubarPortal";
var MenubarPortal = (props) => {
  const { __scopeMenubar, ...portalProps } = props;
  const menuScope = useMenuScope3(__scopeMenubar);
  return /* @__PURE__ */ jsx112(Portal5, { ...menuScope, ...portalProps });
};
MenubarPortal.displayName = PORTAL_NAME11;
var CONTENT_NAME13 = "MenubarContent";
var MenubarContent = React72.forwardRef((props, forwardedRef) => {
  const { __scopeMenubar, align = "start", ...contentProps } = props;
  const menuScope = useMenuScope3(__scopeMenubar);
  const context = useMenubarContext(CONTENT_NAME13, __scopeMenubar);
  const menuContext = useMenubarMenuContext(CONTENT_NAME13, __scopeMenubar);
  const getItems = useCollection5(__scopeMenubar);
  const hasInteractedOutsideRef = React72.useRef(false);
  return /* @__PURE__ */ jsx112(Content25, {
    id: menuContext.contentId,
    "aria-labelledby": menuContext.triggerId,
    "data-radix-menubar-content": "",
    ...menuScope,
    ...contentProps,
    ref: forwardedRef,
    align,
    onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
      const menubarOpen = Boolean(context.value);
      if (!menubarOpen && !hasInteractedOutsideRef.current) {
        menuContext.triggerRef.current?.focus();
      }
      hasInteractedOutsideRef.current = false;
      event.preventDefault();
    }),
    onFocusOutside: composeEventHandlers(props.onFocusOutside, (event) => {
      const target = event.target;
      const isMenubarTrigger = getItems().some((item) => item.ref.current?.contains(target));
      if (isMenubarTrigger)
        event.preventDefault();
    }),
    onInteractOutside: composeEventHandlers(props.onInteractOutside, () => {
      hasInteractedOutsideRef.current = true;
    }),
    onEntryFocus: (event) => {
      if (!menuContext.wasKeyboardTriggerOpenRef.current)
        event.preventDefault();
    },
    onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
      if (["ArrowRight", "ArrowLeft"].includes(event.key)) {
        const target = event.target;
        const targetIsSubTrigger = target.hasAttribute("data-radix-menubar-subtrigger");
        const isKeyDownInsideSubMenu = target.closest("[data-radix-menubar-content]") !== event.currentTarget;
        const prevMenuKey = context.dir === "rtl" ? "ArrowRight" : "ArrowLeft";
        const isPrevKey = prevMenuKey === event.key;
        const isNextKey = !isPrevKey;
        if (isNextKey && targetIsSubTrigger)
          return;
        if (isKeyDownInsideSubMenu && isPrevKey)
          return;
        const items2 = getItems().filter((item) => !item.disabled);
        let candidateValues = items2.map((item) => item.value);
        if (isPrevKey)
          candidateValues.reverse();
        const currentIndex = candidateValues.indexOf(menuContext.value);
        candidateValues = context.loop ? wrapArray4(candidateValues, currentIndex + 1) : candidateValues.slice(currentIndex + 1);
        const [nextValue] = candidateValues;
        if (nextValue)
          context.onMenuOpen(nextValue);
      }
    }, { checkForDefaultPrevented: false }),
    style: {
      ...props.style,
      ...{
        "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
        "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
        "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  });
});
MenubarContent.displayName = CONTENT_NAME13;
var GROUP_NAME6 = "MenubarGroup";
var MenubarGroup = React72.forwardRef((props, forwardedRef) => {
  const { __scopeMenubar, ...groupProps } = props;
  const menuScope = useMenuScope3(__scopeMenubar);
  return /* @__PURE__ */ jsx112(Group2, { ...menuScope, ...groupProps, ref: forwardedRef });
});
MenubarGroup.displayName = GROUP_NAME6;
var LABEL_NAME5 = "MenubarLabel";
var MenubarLabel = React72.forwardRef((props, forwardedRef) => {
  const { __scopeMenubar, ...labelProps } = props;
  const menuScope = useMenuScope3(__scopeMenubar);
  return /* @__PURE__ */ jsx112(Label2, { ...menuScope, ...labelProps, ref: forwardedRef });
});
MenubarLabel.displayName = LABEL_NAME5;
var ITEM_NAME7 = "MenubarItem";
var MenubarItem = React72.forwardRef((props, forwardedRef) => {
  const { __scopeMenubar, ...itemProps } = props;
  const menuScope = useMenuScope3(__scopeMenubar);
  return /* @__PURE__ */ jsx112(Item22, { ...menuScope, ...itemProps, ref: forwardedRef });
});
MenubarItem.displayName = ITEM_NAME7;
var CHECKBOX_ITEM_NAME4 = "MenubarCheckboxItem";
var MenubarCheckboxItem = React72.forwardRef((props, forwardedRef) => {
  const { __scopeMenubar, ...checkboxItemProps } = props;
  const menuScope = useMenuScope3(__scopeMenubar);
  return /* @__PURE__ */ jsx112(CheckboxItem, { ...menuScope, ...checkboxItemProps, ref: forwardedRef });
});
MenubarCheckboxItem.displayName = CHECKBOX_ITEM_NAME4;
var RADIO_GROUP_NAME4 = "MenubarRadioGroup";
var MenubarRadioGroup = React72.forwardRef((props, forwardedRef) => {
  const { __scopeMenubar, ...radioGroupProps } = props;
  const menuScope = useMenuScope3(__scopeMenubar);
  return /* @__PURE__ */ jsx112(RadioGroup, { ...menuScope, ...radioGroupProps, ref: forwardedRef });
});
MenubarRadioGroup.displayName = RADIO_GROUP_NAME4;
var RADIO_ITEM_NAME4 = "MenubarRadioItem";
var MenubarRadioItem = React72.forwardRef((props, forwardedRef) => {
  const { __scopeMenubar, ...radioItemProps } = props;
  const menuScope = useMenuScope3(__scopeMenubar);
  return /* @__PURE__ */ jsx112(RadioItem, { ...menuScope, ...radioItemProps, ref: forwardedRef });
});
MenubarRadioItem.displayName = RADIO_ITEM_NAME4;
var INDICATOR_NAME4 = "MenubarItemIndicator";
var MenubarItemIndicator = React72.forwardRef((props, forwardedRef) => {
  const { __scopeMenubar, ...itemIndicatorProps } = props;
  const menuScope = useMenuScope3(__scopeMenubar);
  return /* @__PURE__ */ jsx112(ItemIndicator2, { ...menuScope, ...itemIndicatorProps, ref: forwardedRef });
});
MenubarItemIndicator.displayName = INDICATOR_NAME4;
var SEPARATOR_NAME5 = "MenubarSeparator";
var MenubarSeparator = React72.forwardRef((props, forwardedRef) => {
  const { __scopeMenubar, ...separatorProps } = props;
  const menuScope = useMenuScope3(__scopeMenubar);
  return /* @__PURE__ */ jsx112(Separator2, { ...menuScope, ...separatorProps, ref: forwardedRef });
});
MenubarSeparator.displayName = SEPARATOR_NAME5;
var ARROW_NAME9 = "MenubarArrow";
var MenubarArrow = React72.forwardRef((props, forwardedRef) => {
  const { __scopeMenubar, ...arrowProps } = props;
  const menuScope = useMenuScope3(__scopeMenubar);
  return /* @__PURE__ */ jsx112(Arrow23, { ...menuScope, ...arrowProps, ref: forwardedRef });
});
MenubarArrow.displayName = ARROW_NAME9;
var SUB_NAME3 = "MenubarSub";
var MenubarSub = (props) => {
  const { __scopeMenubar, children, open: openProp, onOpenChange, defaultOpen } = props;
  const menuScope = useMenuScope3(__scopeMenubar);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
    caller: SUB_NAME3
  });
  return /* @__PURE__ */ jsx112(Sub, { ...menuScope, open, onOpenChange: setOpen, children });
};
MenubarSub.displayName = SUB_NAME3;
var SUB_TRIGGER_NAME4 = "MenubarSubTrigger";
var MenubarSubTrigger = React72.forwardRef((props, forwardedRef) => {
  const { __scopeMenubar, ...subTriggerProps } = props;
  const menuScope = useMenuScope3(__scopeMenubar);
  return /* @__PURE__ */ jsx112(SubTrigger, {
    "data-radix-menubar-subtrigger": "",
    ...menuScope,
    ...subTriggerProps,
    ref: forwardedRef
  });
});
MenubarSubTrigger.displayName = SUB_TRIGGER_NAME4;
var SUB_CONTENT_NAME4 = "MenubarSubContent";
var MenubarSubContent = React72.forwardRef((props, forwardedRef) => {
  const { __scopeMenubar, ...subContentProps } = props;
  const menuScope = useMenuScope3(__scopeMenubar);
  return /* @__PURE__ */ jsx112(SubContent, {
    ...menuScope,
    "data-radix-menubar-content": "",
    ...subContentProps,
    ref: forwardedRef,
    style: {
      ...props.style,
      ...{
        "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
        "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
        "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  });
});
MenubarSubContent.displayName = SUB_CONTENT_NAME4;
function wrapArray4(array, startIndex) {
  return array.map((_, index2) => array[(startIndex + index2) % array.length]);
}
var Root34 = Menubar;
var Menu2 = MenubarMenu;
var Trigger9 = MenubarTrigger;
var Portal25 = MenubarPortal;
var Content210 = MenubarContent;
var Group24 = MenubarGroup;
var Label24 = MenubarLabel;
var Item32 = MenubarItem;
var CheckboxItem23 = MenubarCheckboxItem;
var RadioGroup23 = MenubarRadioGroup;
var RadioItem23 = MenubarRadioItem;
var ItemIndicator24 = MenubarItemIndicator;
var Separator24 = MenubarSeparator;
var Sub23 = MenubarSub;
var SubTrigger23 = MenubarSubTrigger;
var SubContent23 = MenubarSubContent;

// src/shadcn-ui/components/menubar.tsx
import clsx27 from "clsx";
import { jsx as jsx113, jsxs as jsxs56 } from "react/jsx-runtime";
function Menubar2({ className, ...props }) {
  return /* @__PURE__ */ jsx113(Root34, {
    "data-slot": "menubar",
    className: clsx27("flex h-9 items-center gap-1 rounded-md border bg-background p-1 shadow-xs", className),
    ...props
  });
}
function MenubarMenu2({ ...props }) {
  return /* @__PURE__ */ jsx113(Menu2, {
    "data-slot": "menubar-menu",
    ...props
  });
}
function MenubarGroup2({ ...props }) {
  return /* @__PURE__ */ jsx113(Group24, {
    "data-slot": "menubar-group",
    ...props
  });
}
function MenubarPortal2({ ...props }) {
  return /* @__PURE__ */ jsx113(Portal25, {
    "data-slot": "menubar-portal",
    ...props
  });
}
function MenubarRadioGroup2({ ...props }) {
  return /* @__PURE__ */ jsx113(RadioGroup23, {
    "data-slot": "menubar-radio-group",
    ...props
  });
}
function MenubarTrigger2({ className, ...props }) {
  return /* @__PURE__ */ jsx113(Trigger9, {
    "data-slot": "menubar-trigger",
    className: clsx27("flex select-none items-center rounded-sm px-2 py-1 font-medium text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground", className),
    ...props
  });
}
function MenubarContent2({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }) {
  return /* @__PURE__ */ jsx113(MenubarPortal2, {
    children: /* @__PURE__ */ jsx113(Content210, {
      "data-slot": "menubar-content",
      align,
      alignOffset,
      sideOffset,
      className: clsx27("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in", className),
      ...props
    })
  });
}
function MenubarItem2({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx113(Item32, {
    "data-slot": "menubar-item",
    "data-inset": inset,
    "data-variant": variant,
    className: clsx27("data-[variant=destructive]:*:[svg]:!text-destructive relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[disabled]:opacity-50 data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props
  });
}
function MenubarCheckboxItem2({ className, children, checked, ...props }) {
  return /* @__PURE__ */ jsxs56(CheckboxItem23, {
    "data-slot": "menubar-checkbox-item",
    className: clsx27("relative flex cursor-default select-none items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx113("span", {
        className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
        children: /* @__PURE__ */ jsx113(ItemIndicator24, {
          children: /* @__PURE__ */ jsx113(SvgIcon, {
            iconId: "Check",
            className: "size-4"
          })
        })
      }),
      children
    ]
  });
}
function MenubarRadioItem2({ className, children, ...props }) {
  return /* @__PURE__ */ jsxs56(RadioItem23, {
    "data-slot": "menubar-radio-item",
    className: clsx27("relative flex cursor-default select-none items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx113("span", {
        className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
        children: /* @__PURE__ */ jsx113(ItemIndicator24, {
          children: /* @__PURE__ */ jsx113(SvgIcon, {
            iconId: "Circle",
            className: "size-2 fill-current"
          })
        })
      }),
      children
    ]
  });
}
function MenubarLabel2({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsx113(Label24, {
    "data-slot": "menubar-label",
    "data-inset": inset,
    className: clsx27("px-2 py-1.5 font-medium text-sm data-[inset]:pl-8", className),
    ...props
  });
}
function MenubarSeparator2({ className, ...props }) {
  return /* @__PURE__ */ jsx113(Separator24, {
    "data-slot": "menubar-separator",
    className: clsx27("-mx-1 my-1 h-px bg-border", className),
    ...props
  });
}
function MenubarShortcut({ className, ...props }) {
  return /* @__PURE__ */ jsx113("span", {
    "data-slot": "menubar-shortcut",
    className: clsx27("ml-auto text-muted-foreground text-xs tracking-widest", className),
    ...props
  });
}
function MenubarSub2({ ...props }) {
  return /* @__PURE__ */ jsx113(Sub23, {
    "data-slot": "menubar-sub",
    ...props
  });
}
function MenubarSubTrigger2({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs56(SubTrigger23, {
    "data-slot": "menubar-sub-trigger",
    "data-inset": inset,
    className: clsx27("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[inset]:pl-8 data-[state=open]:text-accent-foreground", className),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx113(SvgIcon, {
        iconId: "ChevronRight",
        className: "ml-auto h-4 w-4"
      })
    ]
  });
}
function MenubarSubContent2({ className, ...props }) {
  return /* @__PURE__ */ jsx113(SubContent23, {
    "data-slot": "menubar-sub-content",
    className: clsx27("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=closed]:animate-out data-[state=open]:animate-in", className),
    ...props
  });
}

// src/shadcn-ui/examples/menubar-demo.tsx
import { jsx as jsx114, jsxs as jsxs57 } from "react/jsx-runtime";
function MenubarDemo() {
  return /* @__PURE__ */ jsxs57(Menubar2, {
    children: [
      /* @__PURE__ */ jsxs57(MenubarMenu2, {
        children: [
          /* @__PURE__ */ jsx114(MenubarTrigger2, {
            children: "File"
          }),
          /* @__PURE__ */ jsxs57(MenubarContent2, {
            children: [
              /* @__PURE__ */ jsxs57(MenubarItem2, {
                children: [
                  "New Tab ",
                  /* @__PURE__ */ jsx114(MenubarShortcut, {
                    children: "⌘T"
                  })
                ]
              }),
              /* @__PURE__ */ jsxs57(MenubarItem2, {
                children: [
                  "New Window ",
                  /* @__PURE__ */ jsx114(MenubarShortcut, {
                    children: "⌘N"
                  })
                ]
              }),
              /* @__PURE__ */ jsx114(MenubarItem2, {
                disabled: true,
                children: "New Incognito Window"
              }),
              /* @__PURE__ */ jsx114(MenubarSeparator2, {}),
              /* @__PURE__ */ jsxs57(MenubarSub2, {
                children: [
                  /* @__PURE__ */ jsx114(MenubarSubTrigger2, {
                    children: "Share"
                  }),
                  /* @__PURE__ */ jsxs57(MenubarSubContent2, {
                    children: [
                      /* @__PURE__ */ jsx114(MenubarItem2, {
                        children: "Email link"
                      }),
                      /* @__PURE__ */ jsx114(MenubarItem2, {
                        children: "Messages"
                      }),
                      /* @__PURE__ */ jsx114(MenubarItem2, {
                        children: "Notes"
                      })
                    ]
                  })
                ]
              }),
              /* @__PURE__ */ jsx114(MenubarSeparator2, {}),
              /* @__PURE__ */ jsxs57(MenubarItem2, {
                children: [
                  "Print... ",
                  /* @__PURE__ */ jsx114(MenubarShortcut, {
                    children: "⌘P"
                  })
                ]
              })
            ]
          })
        ]
      }),
      /* @__PURE__ */ jsxs57(MenubarMenu2, {
        children: [
          /* @__PURE__ */ jsx114(MenubarTrigger2, {
            children: "Edit"
          }),
          /* @__PURE__ */ jsxs57(MenubarContent2, {
            children: [
              /* @__PURE__ */ jsxs57(MenubarItem2, {
                children: [
                  "Undo ",
                  /* @__PURE__ */ jsx114(MenubarShortcut, {
                    children: "⌘Z"
                  })
                ]
              }),
              /* @__PURE__ */ jsxs57(MenubarItem2, {
                children: [
                  "Redo ",
                  /* @__PURE__ */ jsx114(MenubarShortcut, {
                    children: "⇧⌘Z"
                  })
                ]
              }),
              /* @__PURE__ */ jsx114(MenubarSeparator2, {}),
              /* @__PURE__ */ jsxs57(MenubarSub2, {
                children: [
                  /* @__PURE__ */ jsx114(MenubarSubTrigger2, {
                    children: "Find"
                  }),
                  /* @__PURE__ */ jsxs57(MenubarSubContent2, {
                    children: [
                      /* @__PURE__ */ jsx114(MenubarItem2, {
                        children: "Search the web"
                      }),
                      /* @__PURE__ */ jsx114(MenubarSeparator2, {}),
                      /* @__PURE__ */ jsx114(MenubarItem2, {
                        children: "Find..."
                      }),
                      /* @__PURE__ */ jsx114(MenubarItem2, {
                        children: "Find Next"
                      }),
                      /* @__PURE__ */ jsx114(MenubarItem2, {
                        children: "Find Previous"
                      })
                    ]
                  })
                ]
              }),
              /* @__PURE__ */ jsx114(MenubarSeparator2, {}),
              /* @__PURE__ */ jsx114(MenubarItem2, {
                children: "Cut"
              }),
              /* @__PURE__ */ jsx114(MenubarItem2, {
                children: "Copy"
              }),
              /* @__PURE__ */ jsx114(MenubarItem2, {
                children: "Paste"
              })
            ]
          })
        ]
      }),
      /* @__PURE__ */ jsxs57(MenubarMenu2, {
        children: [
          /* @__PURE__ */ jsx114(MenubarTrigger2, {
            children: "View"
          }),
          /* @__PURE__ */ jsxs57(MenubarContent2, {
            children: [
              /* @__PURE__ */ jsx114(MenubarCheckboxItem2, {
                children: "Always Show Bookmarks Bar"
              }),
              /* @__PURE__ */ jsx114(MenubarCheckboxItem2, {
                checked: true,
                children: "Always Show Full URLs"
              }),
              /* @__PURE__ */ jsx114(MenubarSeparator2, {}),
              /* @__PURE__ */ jsxs57(MenubarItem2, {
                inset: true,
                children: [
                  "Reload ",
                  /* @__PURE__ */ jsx114(MenubarShortcut, {
                    children: "⌘R"
                  })
                ]
              }),
              /* @__PURE__ */ jsxs57(MenubarItem2, {
                disabled: true,
                inset: true,
                children: [
                  "Force Reload ",
                  /* @__PURE__ */ jsx114(MenubarShortcut, {
                    children: "⇧⌘R"
                  })
                ]
              }),
              /* @__PURE__ */ jsx114(MenubarSeparator2, {}),
              /* @__PURE__ */ jsx114(MenubarItem2, {
                inset: true,
                children: "Toggle Fullscreen"
              }),
              /* @__PURE__ */ jsx114(MenubarSeparator2, {}),
              /* @__PURE__ */ jsx114(MenubarItem2, {
                inset: true,
                children: "Hide Sidebar"
              })
            ]
          })
        ]
      }),
      /* @__PURE__ */ jsxs57(MenubarMenu2, {
        children: [
          /* @__PURE__ */ jsx114(MenubarTrigger2, {
            children: "Profiles"
          }),
          /* @__PURE__ */ jsxs57(MenubarContent2, {
            children: [
              /* @__PURE__ */ jsxs57(MenubarRadioGroup2, {
                value: "benoit",
                children: [
                  /* @__PURE__ */ jsx114(MenubarRadioItem2, {
                    value: "andy",
                    children: "Andy"
                  }),
                  /* @__PURE__ */ jsx114(MenubarRadioItem2, {
                    value: "benoit",
                    children: "Benoit"
                  }),
                  /* @__PURE__ */ jsx114(MenubarRadioItem2, {
                    value: "Luis",
                    children: "Luis"
                  })
                ]
              }),
              /* @__PURE__ */ jsx114(MenubarSeparator2, {}),
              /* @__PURE__ */ jsx114(MenubarItem2, {
                inset: true,
                children: "Edit..."
              }),
              /* @__PURE__ */ jsx114(MenubarSeparator2, {}),
              /* @__PURE__ */ jsx114(MenubarItem2, {
                inset: true,
                children: "Add Profile..."
              })
            ]
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/examples/mode-toggle.tsx
import { useTheme as useTheme2 } from "next-themes";
import { jsx as jsx115, jsxs as jsxs58 } from "react/jsx-runtime";
function ModeToggle({ spriteUrl }) {
  const { setTheme } = useTheme2();
  return /* @__PURE__ */ jsxs58(DropdownMenu2, {
    children: [
      /* @__PURE__ */ jsx115(DropdownMenuTrigger2, {
        asChild: true,
        children: /* @__PURE__ */ jsxs58(Button, {
          variant: "outline",
          size: "icon",
          children: [
            /* @__PURE__ */ jsx115(SpriteIcon, {
              iconId: "Sun",
              className: "dark:-rotate-90 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:scale-0",
              spriteUrl
            }),
            /* @__PURE__ */ jsx115(SpriteIcon, {
              iconId: "Moon",
              className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100",
              spriteUrl
            }),
            /* @__PURE__ */ jsx115("span", {
              className: "sr-only",
              children: "Toggle theme"
            })
          ]
        })
      }),
      /* @__PURE__ */ jsxs58(DropdownMenuContent2, {
        align: "end",
        children: [
          /* @__PURE__ */ jsx115(DropdownMenuItem2, {
            onClick: () => setTheme("light"),
            children: "Light"
          }),
          /* @__PURE__ */ jsx115(DropdownMenuItem2, {
            onClick: () => setTheme("dark"),
            children: "Dark"
          }),
          /* @__PURE__ */ jsx115(DropdownMenuItem2, {
            onClick: () => setTheme("system"),
            children: "System"
          })
        ]
      })
    ]
  });
}

// ../../node_modules/@radix-ui/react-navigation-menu/dist/index.mjs
var import_react_dom3 = __toESM(require_react_dom(), 1);
import * as React73 from "react";
import { Fragment as Fragment12, jsx as jsx116, jsxs as jsxs59 } from "react/jsx-runtime";
"use client";
var NAVIGATION_MENU_NAME = "NavigationMenu";
var [Collection6, useCollection6, createCollectionScope6] = createCollection(NAVIGATION_MENU_NAME);
var [FocusGroupCollection, useFocusGroupCollection, createFocusGroupCollectionScope] = createCollection(NAVIGATION_MENU_NAME);
var [createNavigationMenuContext, createNavigationMenuScope] = createContextScope(NAVIGATION_MENU_NAME, [createCollectionScope6, createFocusGroupCollectionScope]);
var [NavigationMenuProviderImpl, useNavigationMenuContext] = createNavigationMenuContext(NAVIGATION_MENU_NAME);
var [ViewportContentProvider, useViewportContentContext] = createNavigationMenuContext(NAVIGATION_MENU_NAME);
var NavigationMenu = React73.forwardRef((props, forwardedRef) => {
  const {
    __scopeNavigationMenu,
    value: valueProp,
    onValueChange,
    defaultValue,
    delayDuration = 200,
    skipDelayDuration = 300,
    orientation = "horizontal",
    dir,
    ...NavigationMenuProps
  } = props;
  const [navigationMenu, setNavigationMenu] = React73.useState(null);
  const composedRef = useComposedRefs(forwardedRef, (node) => setNavigationMenu(node));
  const direction = useDirection(dir);
  const openTimerRef = React73.useRef(0);
  const closeTimerRef = React73.useRef(0);
  const skipDelayTimerRef = React73.useRef(0);
  const [isOpenDelayed, setIsOpenDelayed] = React73.useState(true);
  const [value, setValue] = useControllableState({
    prop: valueProp,
    onChange: (value2) => {
      const isOpen = value2 !== "";
      const hasSkipDelayDuration = skipDelayDuration > 0;
      if (isOpen) {
        window.clearTimeout(skipDelayTimerRef.current);
        if (hasSkipDelayDuration)
          setIsOpenDelayed(false);
      } else {
        window.clearTimeout(skipDelayTimerRef.current);
        skipDelayTimerRef.current = window.setTimeout(() => setIsOpenDelayed(true), skipDelayDuration);
      }
      onValueChange?.(value2);
    },
    defaultProp: defaultValue ?? "",
    caller: NAVIGATION_MENU_NAME
  });
  const startCloseTimer = React73.useCallback(() => {
    window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => setValue(""), 150);
  }, [setValue]);
  const handleOpen = React73.useCallback((itemValue) => {
    window.clearTimeout(closeTimerRef.current);
    setValue(itemValue);
  }, [setValue]);
  const handleDelayedOpen = React73.useCallback((itemValue) => {
    const isOpenItem = value === itemValue;
    if (isOpenItem) {
      window.clearTimeout(closeTimerRef.current);
    } else {
      openTimerRef.current = window.setTimeout(() => {
        window.clearTimeout(closeTimerRef.current);
        setValue(itemValue);
      }, delayDuration);
    }
  }, [value, setValue, delayDuration]);
  React73.useEffect(() => {
    return () => {
      window.clearTimeout(openTimerRef.current);
      window.clearTimeout(closeTimerRef.current);
      window.clearTimeout(skipDelayTimerRef.current);
    };
  }, []);
  return /* @__PURE__ */ jsx116(NavigationMenuProvider, {
    scope: __scopeNavigationMenu,
    isRootMenu: true,
    value,
    dir: direction,
    orientation,
    rootNavigationMenu: navigationMenu,
    onTriggerEnter: (itemValue) => {
      window.clearTimeout(openTimerRef.current);
      if (isOpenDelayed)
        handleDelayedOpen(itemValue);
      else
        handleOpen(itemValue);
    },
    onTriggerLeave: () => {
      window.clearTimeout(openTimerRef.current);
      startCloseTimer();
    },
    onContentEnter: () => window.clearTimeout(closeTimerRef.current),
    onContentLeave: startCloseTimer,
    onItemSelect: (itemValue) => {
      setValue((prevValue) => prevValue === itemValue ? "" : itemValue);
    },
    onItemDismiss: () => setValue(""),
    children: /* @__PURE__ */ jsx116(Primitive.nav, {
      "aria-label": "Main",
      "data-orientation": orientation,
      dir: direction,
      ...NavigationMenuProps,
      ref: composedRef
    })
  });
});
NavigationMenu.displayName = NAVIGATION_MENU_NAME;
var SUB_NAME4 = "NavigationMenuSub";
var NavigationMenuSub = React73.forwardRef((props, forwardedRef) => {
  const {
    __scopeNavigationMenu,
    value: valueProp,
    onValueChange,
    defaultValue,
    orientation = "horizontal",
    ...subProps
  } = props;
  const context = useNavigationMenuContext(SUB_NAME4, __scopeNavigationMenu);
  const [value, setValue] = useControllableState({
    prop: valueProp,
    onChange: onValueChange,
    defaultProp: defaultValue ?? "",
    caller: SUB_NAME4
  });
  return /* @__PURE__ */ jsx116(NavigationMenuProvider, {
    scope: __scopeNavigationMenu,
    isRootMenu: false,
    value,
    dir: context.dir,
    orientation,
    rootNavigationMenu: context.rootNavigationMenu,
    onTriggerEnter: (itemValue) => setValue(itemValue),
    onItemSelect: (itemValue) => setValue(itemValue),
    onItemDismiss: () => setValue(""),
    children: /* @__PURE__ */ jsx116(Primitive.div, { "data-orientation": orientation, ...subProps, ref: forwardedRef })
  });
});
NavigationMenuSub.displayName = SUB_NAME4;
var NavigationMenuProvider = (props) => {
  const {
    scope,
    isRootMenu,
    rootNavigationMenu,
    dir,
    orientation,
    children,
    value,
    onItemSelect,
    onItemDismiss,
    onTriggerEnter,
    onTriggerLeave,
    onContentEnter,
    onContentLeave
  } = props;
  const [viewport, setViewport] = React73.useState(null);
  const [viewportContent, setViewportContent] = React73.useState(/* @__PURE__ */ new Map);
  const [indicatorTrack, setIndicatorTrack] = React73.useState(null);
  return /* @__PURE__ */ jsx116(NavigationMenuProviderImpl, {
    scope,
    isRootMenu,
    rootNavigationMenu,
    value,
    previousValue: usePrevious(value),
    baseId: useId(),
    dir,
    orientation,
    viewport,
    onViewportChange: setViewport,
    indicatorTrack,
    onIndicatorTrackChange: setIndicatorTrack,
    onTriggerEnter: useCallbackRef(onTriggerEnter),
    onTriggerLeave: useCallbackRef(onTriggerLeave),
    onContentEnter: useCallbackRef(onContentEnter),
    onContentLeave: useCallbackRef(onContentLeave),
    onItemSelect: useCallbackRef(onItemSelect),
    onItemDismiss: useCallbackRef(onItemDismiss),
    onViewportContentChange: React73.useCallback((contentValue, contentData) => {
      setViewportContent((prevContent) => {
        prevContent.set(contentValue, contentData);
        return new Map(prevContent);
      });
    }, []),
    onViewportContentRemove: React73.useCallback((contentValue) => {
      setViewportContent((prevContent) => {
        if (!prevContent.has(contentValue))
          return prevContent;
        prevContent.delete(contentValue);
        return new Map(prevContent);
      });
    }, []),
    children: /* @__PURE__ */ jsx116(Collection6.Provider, { scope, children: /* @__PURE__ */ jsx116(ViewportContentProvider, { scope, items: viewportContent, children }) })
  });
};
var LIST_NAME = "NavigationMenuList";
var NavigationMenuList = React73.forwardRef((props, forwardedRef) => {
  const { __scopeNavigationMenu, ...listProps } = props;
  const context = useNavigationMenuContext(LIST_NAME, __scopeNavigationMenu);
  const list = /* @__PURE__ */ jsx116(Primitive.ul, { "data-orientation": context.orientation, ...listProps, ref: forwardedRef });
  return /* @__PURE__ */ jsx116(Primitive.div, { style: { position: "relative" }, ref: context.onIndicatorTrackChange, children: /* @__PURE__ */ jsx116(Collection6.Slot, { scope: __scopeNavigationMenu, children: context.isRootMenu ? /* @__PURE__ */ jsx116(FocusGroup, { asChild: true, children: list }) : list }) });
});
NavigationMenuList.displayName = LIST_NAME;
var ITEM_NAME8 = "NavigationMenuItem";
var [NavigationMenuItemContextProvider, useNavigationMenuItemContext] = createNavigationMenuContext(ITEM_NAME8);
var NavigationMenuItem = React73.forwardRef((props, forwardedRef) => {
  const { __scopeNavigationMenu, value: valueProp, ...itemProps } = props;
  const autoValue = useId();
  const value = valueProp || autoValue || "LEGACY_REACT_AUTO_VALUE";
  const contentRef = React73.useRef(null);
  const triggerRef = React73.useRef(null);
  const focusProxyRef = React73.useRef(null);
  const restoreContentTabOrderRef = React73.useRef(() => {});
  const wasEscapeCloseRef = React73.useRef(false);
  const handleContentEntry = React73.useCallback((side = "start") => {
    if (contentRef.current) {
      restoreContentTabOrderRef.current();
      const candidates = getTabbableCandidates2(contentRef.current);
      if (candidates.length)
        focusFirst4(side === "start" ? candidates : candidates.reverse());
    }
  }, []);
  const handleContentExit = React73.useCallback(() => {
    if (contentRef.current) {
      const candidates = getTabbableCandidates2(contentRef.current);
      if (candidates.length)
        restoreContentTabOrderRef.current = removeFromTabOrder(candidates);
    }
  }, []);
  return /* @__PURE__ */ jsx116(NavigationMenuItemContextProvider, {
    scope: __scopeNavigationMenu,
    value,
    triggerRef,
    contentRef,
    focusProxyRef,
    wasEscapeCloseRef,
    onEntryKeyDown: handleContentEntry,
    onFocusProxyEnter: handleContentEntry,
    onRootContentClose: handleContentExit,
    onContentFocusOutside: handleContentExit,
    children: /* @__PURE__ */ jsx116(Primitive.li, { ...itemProps, ref: forwardedRef })
  });
});
NavigationMenuItem.displayName = ITEM_NAME8;
var TRIGGER_NAME13 = "NavigationMenuTrigger";
var NavigationMenuTrigger = React73.forwardRef((props, forwardedRef) => {
  const { __scopeNavigationMenu, disabled, ...triggerProps } = props;
  const context = useNavigationMenuContext(TRIGGER_NAME13, props.__scopeNavigationMenu);
  const itemContext = useNavigationMenuItemContext(TRIGGER_NAME13, props.__scopeNavigationMenu);
  const ref = React73.useRef(null);
  const composedRefs = useComposedRefs(ref, itemContext.triggerRef, forwardedRef);
  const triggerId = makeTriggerId(context.baseId, itemContext.value);
  const contentId = makeContentId(context.baseId, itemContext.value);
  const hasPointerMoveOpenedRef = React73.useRef(false);
  const wasClickCloseRef = React73.useRef(false);
  const open = itemContext.value === context.value;
  return /* @__PURE__ */ jsxs59(Fragment12, { children: [
    /* @__PURE__ */ jsx116(Collection6.ItemSlot, { scope: __scopeNavigationMenu, value: itemContext.value, children: /* @__PURE__ */ jsx116(FocusGroupItem, { asChild: true, children: /* @__PURE__ */ jsx116(Primitive.button, {
      id: triggerId,
      disabled,
      "data-disabled": disabled ? "" : undefined,
      "data-state": getOpenState2(open),
      "aria-expanded": open,
      "aria-controls": contentId,
      ...triggerProps,
      ref: composedRefs,
      onPointerEnter: composeEventHandlers(props.onPointerEnter, () => {
        wasClickCloseRef.current = false;
        itemContext.wasEscapeCloseRef.current = false;
      }),
      onPointerMove: composeEventHandlers(props.onPointerMove, whenMouse2(() => {
        if (disabled || wasClickCloseRef.current || itemContext.wasEscapeCloseRef.current || hasPointerMoveOpenedRef.current)
          return;
        context.onTriggerEnter(itemContext.value);
        hasPointerMoveOpenedRef.current = true;
      })),
      onPointerLeave: composeEventHandlers(props.onPointerLeave, whenMouse2(() => {
        if (disabled)
          return;
        context.onTriggerLeave();
        hasPointerMoveOpenedRef.current = false;
      })),
      onClick: composeEventHandlers(props.onClick, () => {
        context.onItemSelect(itemContext.value);
        wasClickCloseRef.current = open;
      }),
      onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
        const verticalEntryKey = context.dir === "rtl" ? "ArrowLeft" : "ArrowRight";
        const entryKey = { horizontal: "ArrowDown", vertical: verticalEntryKey }[context.orientation];
        if (open && event.key === entryKey) {
          itemContext.onEntryKeyDown();
          event.preventDefault();
        }
      })
    }) }) }),
    open && /* @__PURE__ */ jsxs59(Fragment12, { children: [
      /* @__PURE__ */ jsx116(Root3, {
        "aria-hidden": true,
        tabIndex: 0,
        ref: itemContext.focusProxyRef,
        onFocus: (event) => {
          const content = itemContext.contentRef.current;
          const prevFocusedElement = event.relatedTarget;
          const wasTriggerFocused = prevFocusedElement === ref.current;
          const wasFocusFromContent = content?.contains(prevFocusedElement);
          if (wasTriggerFocused || !wasFocusFromContent) {
            itemContext.onFocusProxyEnter(wasTriggerFocused ? "start" : "end");
          }
        }
      }),
      context.viewport && /* @__PURE__ */ jsx116("span", { "aria-owns": contentId })
    ] })
  ] });
});
NavigationMenuTrigger.displayName = TRIGGER_NAME13;
var LINK_NAME = "NavigationMenuLink";
var LINK_SELECT = "navigationMenu.linkSelect";
var NavigationMenuLink = React73.forwardRef((props, forwardedRef) => {
  const { __scopeNavigationMenu, active, onSelect, ...linkProps } = props;
  return /* @__PURE__ */ jsx116(FocusGroupItem, { asChild: true, children: /* @__PURE__ */ jsx116(Primitive.a, {
    "data-active": active ? "" : undefined,
    "aria-current": active ? "page" : undefined,
    ...linkProps,
    ref: forwardedRef,
    onClick: composeEventHandlers(props.onClick, (event) => {
      const target = event.target;
      const linkSelectEvent = new CustomEvent(LINK_SELECT, {
        bubbles: true,
        cancelable: true
      });
      target.addEventListener(LINK_SELECT, (event2) => onSelect?.(event2), { once: true });
      dispatchDiscreteCustomEvent(target, linkSelectEvent);
      if (!linkSelectEvent.defaultPrevented && !event.metaKey) {
        const rootContentDismissEvent = new CustomEvent(ROOT_CONTENT_DISMISS, {
          bubbles: true,
          cancelable: true
        });
        dispatchDiscreteCustomEvent(target, rootContentDismissEvent);
      }
    }, { checkForDefaultPrevented: false })
  }) });
});
NavigationMenuLink.displayName = LINK_NAME;
var INDICATOR_NAME5 = "NavigationMenuIndicator";
var NavigationMenuIndicator = React73.forwardRef((props, forwardedRef) => {
  const { forceMount, ...indicatorProps } = props;
  const context = useNavigationMenuContext(INDICATOR_NAME5, props.__scopeNavigationMenu);
  const isVisible = Boolean(context.value);
  return context.indicatorTrack ? import_react_dom3.default.createPortal(/* @__PURE__ */ jsx116(Presence, { present: forceMount || isVisible, children: /* @__PURE__ */ jsx116(NavigationMenuIndicatorImpl, { ...indicatorProps, ref: forwardedRef }) }), context.indicatorTrack) : null;
});
NavigationMenuIndicator.displayName = INDICATOR_NAME5;
var NavigationMenuIndicatorImpl = React73.forwardRef((props, forwardedRef) => {
  const { __scopeNavigationMenu, ...indicatorProps } = props;
  const context = useNavigationMenuContext(INDICATOR_NAME5, __scopeNavigationMenu);
  const getItems = useCollection6(__scopeNavigationMenu);
  const [activeTrigger, setActiveTrigger] = React73.useState(null);
  const [position, setPosition] = React73.useState(null);
  const isHorizontal = context.orientation === "horizontal";
  const isVisible = Boolean(context.value);
  React73.useEffect(() => {
    const items2 = getItems();
    const triggerNode = items2.find((item) => item.value === context.value)?.ref.current;
    if (triggerNode)
      setActiveTrigger(triggerNode);
  }, [getItems, context.value]);
  const handlePositionChange = () => {
    if (activeTrigger) {
      setPosition({
        size: isHorizontal ? activeTrigger.offsetWidth : activeTrigger.offsetHeight,
        offset: isHorizontal ? activeTrigger.offsetLeft : activeTrigger.offsetTop
      });
    }
  };
  useResizeObserver(activeTrigger, handlePositionChange);
  useResizeObserver(context.indicatorTrack, handlePositionChange);
  return position ? /* @__PURE__ */ jsx116(Primitive.div, {
    "aria-hidden": true,
    "data-state": isVisible ? "visible" : "hidden",
    "data-orientation": context.orientation,
    ...indicatorProps,
    ref: forwardedRef,
    style: {
      position: "absolute",
      ...isHorizontal ? {
        left: 0,
        width: position.size + "px",
        transform: `translateX(${position.offset}px)`
      } : {
        top: 0,
        height: position.size + "px",
        transform: `translateY(${position.offset}px)`
      },
      ...indicatorProps.style
    }
  }) : null;
});
var CONTENT_NAME14 = "NavigationMenuContent";
var NavigationMenuContent = React73.forwardRef((props, forwardedRef) => {
  const { forceMount, ...contentProps } = props;
  const context = useNavigationMenuContext(CONTENT_NAME14, props.__scopeNavigationMenu);
  const itemContext = useNavigationMenuItemContext(CONTENT_NAME14, props.__scopeNavigationMenu);
  const composedRefs = useComposedRefs(itemContext.contentRef, forwardedRef);
  const open = itemContext.value === context.value;
  const commonProps = {
    value: itemContext.value,
    triggerRef: itemContext.triggerRef,
    focusProxyRef: itemContext.focusProxyRef,
    wasEscapeCloseRef: itemContext.wasEscapeCloseRef,
    onContentFocusOutside: itemContext.onContentFocusOutside,
    onRootContentClose: itemContext.onRootContentClose,
    ...contentProps
  };
  return !context.viewport ? /* @__PURE__ */ jsx116(Presence, { present: forceMount || open, children: /* @__PURE__ */ jsx116(NavigationMenuContentImpl, {
    "data-state": getOpenState2(open),
    ...commonProps,
    ref: composedRefs,
    onPointerEnter: composeEventHandlers(props.onPointerEnter, context.onContentEnter),
    onPointerLeave: composeEventHandlers(props.onPointerLeave, whenMouse2(context.onContentLeave)),
    style: {
      pointerEvents: !open && context.isRootMenu ? "none" : undefined,
      ...commonProps.style
    }
  }) }) : /* @__PURE__ */ jsx116(ViewportContentMounter, { forceMount, ...commonProps, ref: composedRefs });
});
NavigationMenuContent.displayName = CONTENT_NAME14;
var ViewportContentMounter = React73.forwardRef((props, forwardedRef) => {
  const context = useNavigationMenuContext(CONTENT_NAME14, props.__scopeNavigationMenu);
  const { onViewportContentChange, onViewportContentRemove } = context;
  useLayoutEffect2(() => {
    onViewportContentChange(props.value, {
      ref: forwardedRef,
      ...props
    });
  }, [props, forwardedRef, onViewportContentChange]);
  useLayoutEffect2(() => {
    return () => onViewportContentRemove(props.value);
  }, [props.value, onViewportContentRemove]);
  return null;
});
var ROOT_CONTENT_DISMISS = "navigationMenu.rootContentDismiss";
var NavigationMenuContentImpl = React73.forwardRef((props, forwardedRef) => {
  const {
    __scopeNavigationMenu,
    value,
    triggerRef,
    focusProxyRef,
    wasEscapeCloseRef,
    onRootContentClose,
    onContentFocusOutside,
    ...contentProps
  } = props;
  const context = useNavigationMenuContext(CONTENT_NAME14, __scopeNavigationMenu);
  const ref = React73.useRef(null);
  const composedRefs = useComposedRefs(ref, forwardedRef);
  const triggerId = makeTriggerId(context.baseId, value);
  const contentId = makeContentId(context.baseId, value);
  const getItems = useCollection6(__scopeNavigationMenu);
  const prevMotionAttributeRef = React73.useRef(null);
  const { onItemDismiss } = context;
  React73.useEffect(() => {
    const content = ref.current;
    if (context.isRootMenu && content) {
      const handleClose = () => {
        onItemDismiss();
        onRootContentClose();
        if (content.contains(document.activeElement))
          triggerRef.current?.focus();
      };
      content.addEventListener(ROOT_CONTENT_DISMISS, handleClose);
      return () => content.removeEventListener(ROOT_CONTENT_DISMISS, handleClose);
    }
  }, [context.isRootMenu, props.value, triggerRef, onItemDismiss, onRootContentClose]);
  const motionAttribute = React73.useMemo(() => {
    const items2 = getItems();
    const values = items2.map((item) => item.value);
    if (context.dir === "rtl")
      values.reverse();
    const index2 = values.indexOf(context.value);
    const prevIndex = values.indexOf(context.previousValue);
    const isSelected = value === context.value;
    const wasSelected = prevIndex === values.indexOf(value);
    if (!isSelected && !wasSelected)
      return prevMotionAttributeRef.current;
    const attribute = (() => {
      if (index2 !== prevIndex) {
        if (isSelected && prevIndex !== -1)
          return index2 > prevIndex ? "from-end" : "from-start";
        if (wasSelected && index2 !== -1)
          return index2 > prevIndex ? "to-start" : "to-end";
      }
      return null;
    })();
    prevMotionAttributeRef.current = attribute;
    return attribute;
  }, [context.previousValue, context.value, context.dir, getItems, value]);
  return /* @__PURE__ */ jsx116(FocusGroup, { asChild: true, children: /* @__PURE__ */ jsx116(DismissableLayer, {
    id: contentId,
    "aria-labelledby": triggerId,
    "data-motion": motionAttribute,
    "data-orientation": context.orientation,
    ...contentProps,
    ref: composedRefs,
    disableOutsidePointerEvents: false,
    onDismiss: () => {
      const rootContentDismissEvent = new Event(ROOT_CONTENT_DISMISS, {
        bubbles: true,
        cancelable: true
      });
      ref.current?.dispatchEvent(rootContentDismissEvent);
    },
    onFocusOutside: composeEventHandlers(props.onFocusOutside, (event) => {
      onContentFocusOutside();
      const target = event.target;
      if (context.rootNavigationMenu?.contains(target))
        event.preventDefault();
    }),
    onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event) => {
      const target = event.target;
      const isTrigger = getItems().some((item) => item.ref.current?.contains(target));
      const isRootViewport = context.isRootMenu && context.viewport?.contains(target);
      if (isTrigger || isRootViewport || !context.isRootMenu)
        event.preventDefault();
    }),
    onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
      const isMetaKey = event.altKey || event.ctrlKey || event.metaKey;
      const isTabKey = event.key === "Tab" && !isMetaKey;
      if (isTabKey) {
        const candidates = getTabbableCandidates2(event.currentTarget);
        const focusedElement = document.activeElement;
        const index2 = candidates.findIndex((candidate) => candidate === focusedElement);
        const isMovingBackwards = event.shiftKey;
        const nextCandidates = isMovingBackwards ? candidates.slice(0, index2).reverse() : candidates.slice(index2 + 1, candidates.length);
        if (focusFirst4(nextCandidates)) {
          event.preventDefault();
        } else {
          focusProxyRef.current?.focus();
        }
      }
    }),
    onEscapeKeyDown: composeEventHandlers(props.onEscapeKeyDown, (_event) => {
      wasEscapeCloseRef.current = true;
    })
  }) });
});
var VIEWPORT_NAME2 = "NavigationMenuViewport";
var NavigationMenuViewport = React73.forwardRef((props, forwardedRef) => {
  const { forceMount, ...viewportProps } = props;
  const context = useNavigationMenuContext(VIEWPORT_NAME2, props.__scopeNavigationMenu);
  const open = Boolean(context.value);
  return /* @__PURE__ */ jsx116(Presence, { present: forceMount || open, children: /* @__PURE__ */ jsx116(NavigationMenuViewportImpl, { ...viewportProps, ref: forwardedRef }) });
});
NavigationMenuViewport.displayName = VIEWPORT_NAME2;
var NavigationMenuViewportImpl = React73.forwardRef((props, forwardedRef) => {
  const { __scopeNavigationMenu, children, ...viewportImplProps } = props;
  const context = useNavigationMenuContext(VIEWPORT_NAME2, __scopeNavigationMenu);
  const composedRefs = useComposedRefs(forwardedRef, context.onViewportChange);
  const viewportContentContext = useViewportContentContext(CONTENT_NAME14, props.__scopeNavigationMenu);
  const [size4, setSize] = React73.useState(null);
  const [content, setContent] = React73.useState(null);
  const viewportWidth = size4 ? size4?.width + "px" : undefined;
  const viewportHeight = size4 ? size4?.height + "px" : undefined;
  const open = Boolean(context.value);
  const activeContentValue = open ? context.value : context.previousValue;
  const handleSizeChange = () => {
    if (content)
      setSize({ width: content.offsetWidth, height: content.offsetHeight });
  };
  useResizeObserver(content, handleSizeChange);
  return /* @__PURE__ */ jsx116(Primitive.div, {
    "data-state": getOpenState2(open),
    "data-orientation": context.orientation,
    ...viewportImplProps,
    ref: composedRefs,
    style: {
      pointerEvents: !open && context.isRootMenu ? "none" : undefined,
      ["--radix-navigation-menu-viewport-width"]: viewportWidth,
      ["--radix-navigation-menu-viewport-height"]: viewportHeight,
      ...viewportImplProps.style
    },
    onPointerEnter: composeEventHandlers(props.onPointerEnter, context.onContentEnter),
    onPointerLeave: composeEventHandlers(props.onPointerLeave, whenMouse2(context.onContentLeave)),
    children: Array.from(viewportContentContext.items).map(([value, { ref, forceMount, ...props2 }]) => {
      const isActive = activeContentValue === value;
      return /* @__PURE__ */ jsx116(Presence, { present: forceMount || isActive, children: /* @__PURE__ */ jsx116(NavigationMenuContentImpl, {
        ...props2,
        ref: composeRefs(ref, (node) => {
          if (isActive && node)
            setContent(node);
        })
      }) }, value);
    })
  });
});
var FOCUS_GROUP_NAME = "FocusGroup";
var FocusGroup = React73.forwardRef((props, forwardedRef) => {
  const { __scopeNavigationMenu, ...groupProps } = props;
  const context = useNavigationMenuContext(FOCUS_GROUP_NAME, __scopeNavigationMenu);
  return /* @__PURE__ */ jsx116(FocusGroupCollection.Provider, { scope: __scopeNavigationMenu, children: /* @__PURE__ */ jsx116(FocusGroupCollection.Slot, { scope: __scopeNavigationMenu, children: /* @__PURE__ */ jsx116(Primitive.div, { dir: context.dir, ...groupProps, ref: forwardedRef }) }) });
});
var ARROW_KEYS = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"];
var FOCUS_GROUP_ITEM_NAME = "FocusGroupItem";
var FocusGroupItem = React73.forwardRef((props, forwardedRef) => {
  const { __scopeNavigationMenu, ...groupProps } = props;
  const getItems = useFocusGroupCollection(__scopeNavigationMenu);
  const context = useNavigationMenuContext(FOCUS_GROUP_ITEM_NAME, __scopeNavigationMenu);
  return /* @__PURE__ */ jsx116(FocusGroupCollection.ItemSlot, { scope: __scopeNavigationMenu, children: /* @__PURE__ */ jsx116(Primitive.button, {
    ...groupProps,
    ref: forwardedRef,
    onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
      const isFocusNavigationKey = ["Home", "End", ...ARROW_KEYS].includes(event.key);
      if (isFocusNavigationKey) {
        let candidateNodes = getItems().map((item) => item.ref.current);
        const prevItemKey = context.dir === "rtl" ? "ArrowRight" : "ArrowLeft";
        const prevKeys = [prevItemKey, "ArrowUp", "End"];
        if (prevKeys.includes(event.key))
          candidateNodes.reverse();
        if (ARROW_KEYS.includes(event.key)) {
          const currentIndex = candidateNodes.indexOf(event.currentTarget);
          candidateNodes = candidateNodes.slice(currentIndex + 1);
        }
        setTimeout(() => focusFirst4(candidateNodes));
        event.preventDefault();
      }
    })
  }) });
});
function getTabbableCandidates2(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
}
function focusFirst4(candidates) {
  const previouslyFocusedElement = document.activeElement;
  return candidates.some((candidate) => {
    if (candidate === previouslyFocusedElement)
      return true;
    candidate.focus();
    return document.activeElement !== previouslyFocusedElement;
  });
}
function removeFromTabOrder(candidates) {
  candidates.forEach((candidate) => {
    candidate.dataset.tabindex = candidate.getAttribute("tabindex") || "";
    candidate.setAttribute("tabindex", "-1");
  });
  return () => {
    candidates.forEach((candidate) => {
      const prevTabIndex = candidate.dataset.tabindex;
      candidate.setAttribute("tabindex", prevTabIndex);
    });
  };
}
function useResizeObserver(element, onResize) {
  const handleResize = useCallbackRef(onResize);
  useLayoutEffect2(() => {
    let rAF = 0;
    if (element) {
      const resizeObserver = new ResizeObserver(() => {
        cancelAnimationFrame(rAF);
        rAF = window.requestAnimationFrame(handleResize);
      });
      resizeObserver.observe(element);
      return () => {
        window.cancelAnimationFrame(rAF);
        resizeObserver.unobserve(element);
      };
    }
  }, [element, handleResize]);
}
function getOpenState2(open) {
  return open ? "open" : "closed";
}
function makeTriggerId(baseId, value) {
  return `${baseId}-trigger-${value}`;
}
function makeContentId(baseId, value) {
  return `${baseId}-content-${value}`;
}
function whenMouse2(handler) {
  return (event) => event.pointerType === "mouse" ? handler(event) : undefined;
}
var Root29 = NavigationMenu;
var List = NavigationMenuList;
var Item4 = NavigationMenuItem;
var Trigger10 = NavigationMenuTrigger;
var Link3 = NavigationMenuLink;
var Indicator = NavigationMenuIndicator;
var Content6 = NavigationMenuContent;
var Viewport2 = NavigationMenuViewport;

// src/shadcn-ui/components/navigation-menu.tsx
import { cva as cva4 } from "class-variance-authority";
import clsx28 from "clsx";
import { jsx as jsx117, jsxs as jsxs60 } from "react/jsx-runtime";
function NavigationMenu2({
  className,
  children,
  viewport = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs60(Root29, {
    "data-slot": "navigation-menu",
    "data-viewport": viewport,
    className: clsx28("group/navigation-menu relative flex max-w-max flex-1 items-center justify-center", className),
    ...props,
    children: [
      children,
      viewport && /* @__PURE__ */ jsx117(NavigationMenuViewport2, {})
    ]
  });
}
function NavigationMenuList2({ className, ...props }) {
  return /* @__PURE__ */ jsx117(List, {
    "data-slot": "navigation-menu-list",
    className: clsx28("group flex flex-1 list-none items-center justify-center gap-1", className),
    ...props
  });
}
function NavigationMenuItem2({ className, ...props }) {
  return /* @__PURE__ */ jsx117(Item4, {
    "data-slot": "navigation-menu-item",
    className: clsx28("relative", className),
    ...props
  });
}
var navigationMenuTriggerStyle = cva4("group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1");
function NavigationMenuTrigger2({ className, children, ...props }) {
  return /* @__PURE__ */ jsxs60(Trigger10, {
    "data-slot": "navigation-menu-trigger",
    className: clsx28(navigationMenuTriggerStyle(), "group", className),
    ...props,
    children: [
      children,
      " ",
      /* @__PURE__ */ jsx117(SvgIcon, {
        iconId: "ChevronDown",
        className: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
        "aria-hidden": "true"
      })
    ]
  });
}
function NavigationMenuContent2({ className, ...props }) {
  return /* @__PURE__ */ jsx117(Content6, {
    "data-slot": "navigation-menu-content",
    className: clsx28("data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out md:absolute md:w-auto", "group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 **:data-[slot=navigation-menu-link]:focus:outline-none **:data-[slot=navigation-menu-link]:focus:ring-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in", className),
    ...props
  });
}
function NavigationMenuViewport2({ className, ...props }) {
  return /* @__PURE__ */ jsx117("div", {
    className: clsx28("absolute top-full left-0 isolate z-50 flex justify-center"),
    children: /* @__PURE__ */ jsx117(Viewport2, {
      "data-slot": "navigation-menu-viewport",
      className: clsx28("data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-top-center overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=closed]:animate-out data-[state=open]:animate-in md:w-[var(--radix-navigation-menu-viewport-width)]", className),
      ...props
    })
  });
}
function NavigationMenuLink2({ className, ...props }) {
  return /* @__PURE__ */ jsx117(Link3, {
    "data-slot": "navigation-menu-link",
    className: clsx28("flex flex-col gap-1 rounded-sm p-2 text-sm outline-none transition-all hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", className),
    ...props
  });
}
function NavigationMenuIndicator2({ className, ...props }) {
  return /* @__PURE__ */ jsx117(Indicator, {
    "data-slot": "navigation-menu-indicator",
    className: clsx28("data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=hidden]:animate-out data-[state=visible]:animate-in", className),
    ...props,
    children: /* @__PURE__ */ jsx117("div", {
      className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md"
    })
  });
}

// src/shadcn-ui/examples/navigation-menu-demo.tsx
import { jsx as jsx118, jsxs as jsxs61 } from "react/jsx-runtime";
var components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response."
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description: "For sighted users to preview content available behind a link."
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content."
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description: "A set of layered sections of content—known as tab panels—that are displayed one at a time."
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
  }
];
function NavigationMenuDemo({ spriteUrl }) {
  return /* @__PURE__ */ jsx118(NavigationMenu2, {
    viewport: false,
    children: /* @__PURE__ */ jsxs61(NavigationMenuList2, {
      children: [
        /* @__PURE__ */ jsxs61(NavigationMenuItem2, {
          children: [
            /* @__PURE__ */ jsx118(NavigationMenuTrigger2, {
              children: "Home"
            }),
            /* @__PURE__ */ jsx118(NavigationMenuContent2, {
              children: /* @__PURE__ */ jsxs61("ul", {
                className: "grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]",
                children: [
                  /* @__PURE__ */ jsx118("li", {
                    className: "row-span-3",
                    children: /* @__PURE__ */ jsx118(NavigationMenuLink2, {
                      asChild: true,
                      children: /* @__PURE__ */ jsxs61("a", {
                        className: "flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-6 no-underline outline-hidden focus:shadow-md",
                        href: "/",
                        children: [
                          /* @__PURE__ */ jsx118("div", {
                            className: "mt-4 mb-2 font-medium text-lg",
                            children: "shadcn/ui"
                          }),
                          /* @__PURE__ */ jsx118("p", {
                            className: "text-muted-foreground text-sm leading-tight",
                            children: "Beautifully designed components built with Tailwind CSS."
                          })
                        ]
                      })
                    })
                  }),
                  /* @__PURE__ */ jsx118(ListItem, {
                    href: "/docs",
                    title: "Introduction",
                    children: "Re-usable components built using Radix UI and Tailwind CSS."
                  }),
                  /* @__PURE__ */ jsx118(ListItem, {
                    href: "/docs/installation",
                    title: "Installation",
                    children: "How to install dependencies and structure your app."
                  }),
                  /* @__PURE__ */ jsx118(ListItem, {
                    href: "/docs/primitives/typography",
                    title: "Typography",
                    children: "Styles for headings, paragraphs, lists...etc"
                  })
                ]
              })
            })
          ]
        }),
        /* @__PURE__ */ jsxs61(NavigationMenuItem2, {
          children: [
            /* @__PURE__ */ jsx118(NavigationMenuTrigger2, {
              children: "Components"
            }),
            /* @__PURE__ */ jsx118(NavigationMenuContent2, {
              children: /* @__PURE__ */ jsx118("ul", {
                className: "grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]",
                children: components.map((component) => /* @__PURE__ */ jsx118(ListItem, {
                  title: component.title,
                  href: component.href,
                  children: component.description
                }, component.title))
              })
            })
          ]
        }),
        /* @__PURE__ */ jsx118(NavigationMenuItem2, {
          children: /* @__PURE__ */ jsx118(NavigationMenuLink2, {
            asChild: true,
            className: navigationMenuTriggerStyle(),
            children: /* @__PURE__ */ jsx118(Link, {
              href: "/docs",
              children: "Docs"
            })
          })
        }),
        /* @__PURE__ */ jsxs61(NavigationMenuItem2, {
          children: [
            /* @__PURE__ */ jsx118(NavigationMenuTrigger2, {
              children: "List"
            }),
            /* @__PURE__ */ jsx118(NavigationMenuContent2, {
              children: /* @__PURE__ */ jsx118("ul", {
                className: "grid w-[300px] gap-4",
                children: /* @__PURE__ */ jsxs61("li", {
                  children: [
                    /* @__PURE__ */ jsx118(NavigationMenuLink2, {
                      asChild: true,
                      children: /* @__PURE__ */ jsxs61(Link, {
                        href: "#",
                        children: [
                          /* @__PURE__ */ jsx118("div", {
                            className: "font-medium",
                            children: "Components"
                          }),
                          /* @__PURE__ */ jsx118("div", {
                            className: "text-muted-foreground",
                            children: "Browse all components in the library."
                          })
                        ]
                      })
                    }),
                    /* @__PURE__ */ jsx118(NavigationMenuLink2, {
                      asChild: true,
                      children: /* @__PURE__ */ jsxs61(Link, {
                        href: "#",
                        children: [
                          /* @__PURE__ */ jsx118("div", {
                            className: "font-medium",
                            children: "Documentation"
                          }),
                          /* @__PURE__ */ jsx118("div", {
                            className: "text-muted-foreground",
                            children: "Learn how to use the library."
                          })
                        ]
                      })
                    }),
                    /* @__PURE__ */ jsx118(NavigationMenuLink2, {
                      asChild: true,
                      children: /* @__PURE__ */ jsxs61(Link, {
                        href: "#",
                        children: [
                          /* @__PURE__ */ jsx118("div", {
                            className: "font-medium",
                            children: "Blog"
                          }),
                          /* @__PURE__ */ jsx118("div", {
                            className: "text-muted-foreground",
                            children: "Read our latest blog posts."
                          })
                        ]
                      })
                    })
                  ]
                })
              })
            })
          ]
        }),
        /* @__PURE__ */ jsxs61(NavigationMenuItem2, {
          children: [
            /* @__PURE__ */ jsx118(NavigationMenuTrigger2, {
              children: "Simple"
            }),
            /* @__PURE__ */ jsx118(NavigationMenuContent2, {
              children: /* @__PURE__ */ jsx118("ul", {
                className: "grid w-[200px] gap-4",
                children: /* @__PURE__ */ jsxs61("li", {
                  children: [
                    /* @__PURE__ */ jsx118(NavigationMenuLink2, {
                      asChild: true,
                      children: /* @__PURE__ */ jsx118(Link, {
                        href: "#",
                        children: "Components"
                      })
                    }),
                    /* @__PURE__ */ jsx118(NavigationMenuLink2, {
                      asChild: true,
                      children: /* @__PURE__ */ jsx118(Link, {
                        href: "#",
                        children: "Documentation"
                      })
                    }),
                    /* @__PURE__ */ jsx118(NavigationMenuLink2, {
                      asChild: true,
                      children: /* @__PURE__ */ jsx118(Link, {
                        href: "#",
                        children: "Blocks"
                      })
                    })
                  ]
                })
              })
            })
          ]
        }),
        /* @__PURE__ */ jsxs61(NavigationMenuItem2, {
          children: [
            /* @__PURE__ */ jsx118(NavigationMenuTrigger2, {
              children: "With Icon"
            }),
            /* @__PURE__ */ jsx118(NavigationMenuContent2, {
              children: /* @__PURE__ */ jsx118("ul", {
                className: "grid w-[200px] gap-4",
                children: /* @__PURE__ */ jsxs61("li", {
                  children: [
                    /* @__PURE__ */ jsx118(NavigationMenuLink2, {
                      asChild: true,
                      children: /* @__PURE__ */ jsxs61(Link, {
                        href: "#",
                        className: "flex-row items-center gap-2",
                        children: [
                          /* @__PURE__ */ jsx118(SpriteIcon, {
                            iconId: "CircleQuestionMark",
                            spriteUrl
                          }),
                          "Backlog"
                        ]
                      })
                    }),
                    /* @__PURE__ */ jsx118(NavigationMenuLink2, {
                      asChild: true,
                      children: /* @__PURE__ */ jsxs61(Link, {
                        href: "#",
                        className: "flex-row items-center gap-2",
                        children: [
                          /* @__PURE__ */ jsx118(SpriteIcon, {
                            iconId: "Circle",
                            spriteUrl
                          }),
                          "To Do"
                        ]
                      })
                    }),
                    /* @__PURE__ */ jsx118(NavigationMenuLink2, {
                      asChild: true,
                      children: /* @__PURE__ */ jsxs61(Link, {
                        href: "#",
                        className: "flex-row items-center gap-2",
                        children: [
                          /* @__PURE__ */ jsx118(SpriteIcon, {
                            iconId: "CircleCheck",
                            spriteUrl
                          }),
                          "Done"
                        ]
                      })
                    })
                  ]
                })
              })
            })
          ]
        })
      ]
    })
  });
}
function ListItem({ title, children, href, ...props }) {
  return /* @__PURE__ */ jsx118("li", {
    ...props,
    children: /* @__PURE__ */ jsx118(NavigationMenuLink2, {
      asChild: true,
      children: /* @__PURE__ */ jsxs61(Link, {
        href,
        children: [
          /* @__PURE__ */ jsx118("div", {
            className: "font-medium text-sm leading-none",
            children: title
          }),
          /* @__PURE__ */ jsx118("p", {
            className: "line-clamp-2 text-muted-foreground text-sm leading-snug",
            children
          })
        ]
      })
    })
  });
}

// src/shadcn-ui/examples/pagination-demo.tsx
import { jsx as jsx119, jsxs as jsxs62 } from "react/jsx-runtime";
function PaginationDemo() {
  return /* @__PURE__ */ jsx119(Pagination, {
    children: /* @__PURE__ */ jsxs62(PaginationContent, {
      children: [
        /* @__PURE__ */ jsx119(PaginationItem, {
          children: /* @__PURE__ */ jsx119(PaginationPrevious, {
            href: "#"
          })
        }),
        /* @__PURE__ */ jsx119(PaginationItem, {
          children: /* @__PURE__ */ jsx119(PaginationLink, {
            href: "#",
            children: "1"
          })
        }),
        /* @__PURE__ */ jsx119(PaginationItem, {
          children: /* @__PURE__ */ jsx119(PaginationLink, {
            href: "#",
            isActive: true,
            children: "2"
          })
        }),
        /* @__PURE__ */ jsx119(PaginationItem, {
          children: /* @__PURE__ */ jsx119(PaginationLink, {
            href: "#",
            children: "3"
          })
        }),
        /* @__PURE__ */ jsx119(PaginationItem, {
          children: /* @__PURE__ */ jsx119(PaginationEllipsis, {})
        }),
        /* @__PURE__ */ jsx119(PaginationItem, {
          children: /* @__PURE__ */ jsx119(PaginationNext, {
            href: "#"
          })
        })
      ]
    })
  });
}

// src/shadcn-ui/examples/popover-demo.tsx
import React74 from "react";
import { jsx as jsx120, jsxs as jsxs63 } from "react/jsx-runtime";
function PopoverDemo() {
  const widthId = React74.useId();
  const maxWidthId = React74.useId();
  const heightId = React74.useId();
  const maxHeightId = React74.useId();
  return /* @__PURE__ */ jsxs63(Popover2, {
    children: [
      /* @__PURE__ */ jsx120(PopoverTrigger2, {
        asChild: true,
        children: /* @__PURE__ */ jsx120(Button, {
          variant: "outline",
          children: "Open popover"
        })
      }),
      /* @__PURE__ */ jsx120(PopoverContent2, {
        className: "w-80",
        children: /* @__PURE__ */ jsxs63("div", {
          className: "grid gap-4",
          children: [
            /* @__PURE__ */ jsxs63("div", {
              className: "space-y-2",
              children: [
                /* @__PURE__ */ jsx120("h4", {
                  className: "font-medium leading-none",
                  children: "Dimensions"
                }),
                /* @__PURE__ */ jsx120("p", {
                  className: "text-muted-foreground text-sm",
                  children: "Set the dimensions for the layer."
                })
              ]
            }),
            /* @__PURE__ */ jsxs63("div", {
              className: "grid gap-2",
              children: [
                /* @__PURE__ */ jsxs63("div", {
                  className: "grid grid-cols-3 items-center gap-4",
                  children: [
                    /* @__PURE__ */ jsx120(Label4, {
                      htmlFor: widthId,
                      children: "Width"
                    }),
                    /* @__PURE__ */ jsx120(Input, {
                      id: widthId,
                      defaultValue: "100%",
                      className: "col-span-2 h-8"
                    })
                  ]
                }),
                /* @__PURE__ */ jsxs63("div", {
                  className: "grid grid-cols-3 items-center gap-4",
                  children: [
                    /* @__PURE__ */ jsx120(Label4, {
                      htmlFor: maxWidthId,
                      children: "Max. width"
                    }),
                    /* @__PURE__ */ jsx120(Input, {
                      id: maxWidthId,
                      defaultValue: "300px",
                      className: "col-span-2 h-8"
                    })
                  ]
                }),
                /* @__PURE__ */ jsxs63("div", {
                  className: "grid grid-cols-3 items-center gap-4",
                  children: [
                    /* @__PURE__ */ jsx120(Label4, {
                      htmlFor: heightId,
                      children: "Height"
                    }),
                    /* @__PURE__ */ jsx120(Input, {
                      id: heightId,
                      defaultValue: "25px",
                      className: "col-span-2 h-8"
                    })
                  ]
                }),
                /* @__PURE__ */ jsxs63("div", {
                  className: "grid grid-cols-3 items-center gap-4",
                  children: [
                    /* @__PURE__ */ jsx120(Label4, {
                      htmlFor: maxHeightId,
                      children: "Max. height"
                    }),
                    /* @__PURE__ */ jsx120(Input, {
                      id: maxHeightId,
                      defaultValue: "none",
                      className: "col-span-2 h-8"
                    })
                  ]
                })
              ]
            })
          ]
        })
      })
    ]
  });
}

// src/shadcn-ui/examples/progress-demo.tsx
import React76 from "react";

// ../../node_modules/@radix-ui/react-progress/dist/index.mjs
import * as React75 from "react";
import { jsx as jsx121 } from "react/jsx-runtime";
"use client";
var PROGRESS_NAME = "Progress";
var DEFAULT_MAX = 100;
var [createProgressContext, createProgressScope] = createContextScope(PROGRESS_NAME);
var [ProgressProvider, useProgressContext] = createProgressContext(PROGRESS_NAME);
var Progress = React75.forwardRef((props, forwardedRef) => {
  const {
    __scopeProgress,
    value: valueProp = null,
    max: maxProp,
    getValueLabel = defaultGetValueLabel,
    ...progressProps
  } = props;
  if ((maxProp || maxProp === 0) && !isValidMaxNumber(maxProp)) {
    console.error(getInvalidMaxError(`${maxProp}`, "Progress"));
  }
  const max2 = isValidMaxNumber(maxProp) ? maxProp : DEFAULT_MAX;
  if (valueProp !== null && !isValidValueNumber(valueProp, max2)) {
    console.error(getInvalidValueError(`${valueProp}`, "Progress"));
  }
  const value = isValidValueNumber(valueProp, max2) ? valueProp : null;
  const valueLabel = isNumber(value) ? getValueLabel(value, max2) : undefined;
  return /* @__PURE__ */ jsx121(ProgressProvider, { scope: __scopeProgress, value, max: max2, children: /* @__PURE__ */ jsx121(Primitive.div, {
    "aria-valuemax": max2,
    "aria-valuemin": 0,
    "aria-valuenow": isNumber(value) ? value : undefined,
    "aria-valuetext": valueLabel,
    role: "progressbar",
    "data-state": getProgressState(value, max2),
    "data-value": value ?? undefined,
    "data-max": max2,
    ...progressProps,
    ref: forwardedRef
  }) });
});
Progress.displayName = PROGRESS_NAME;
var INDICATOR_NAME6 = "ProgressIndicator";
var ProgressIndicator = React75.forwardRef((props, forwardedRef) => {
  const { __scopeProgress, ...indicatorProps } = props;
  const context = useProgressContext(INDICATOR_NAME6, __scopeProgress);
  return /* @__PURE__ */ jsx121(Primitive.div, {
    "data-state": getProgressState(context.value, context.max),
    "data-value": context.value ?? undefined,
    "data-max": context.max,
    ...indicatorProps,
    ref: forwardedRef
  });
});
ProgressIndicator.displayName = INDICATOR_NAME6;
function defaultGetValueLabel(value, max2) {
  return `${Math.round(value / max2 * 100)}%`;
}
function getProgressState(value, maxValue) {
  return value == null ? "indeterminate" : value === maxValue ? "complete" : "loading";
}
function isNumber(value) {
  return typeof value === "number";
}
function isValidMaxNumber(max2) {
  return isNumber(max2) && !isNaN(max2) && max2 > 0;
}
function isValidValueNumber(value, max2) {
  return isNumber(value) && !isNaN(value) && value <= max2 && value >= 0;
}
function getInvalidMaxError(propValue, componentName) {
  return `Invalid prop \`max\` of value \`${propValue}\` supplied to \`${componentName}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${DEFAULT_MAX}\`.`;
}
function getInvalidValueError(propValue, componentName) {
  return `Invalid prop \`value\` of value \`${propValue}\` supplied to \`${componentName}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${DEFAULT_MAX} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Root11 = Progress;
var Indicator2 = ProgressIndicator;

// src/shadcn-ui/components/progress.tsx
import clsx29 from "clsx";
import { jsx as jsx122 } from "react/jsx-runtime";
function Progress2({ className, value, ...props }) {
  return /* @__PURE__ */ jsx122(Root11, {
    "data-slot": "progress",
    className: clsx29("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className),
    ...props,
    children: /* @__PURE__ */ jsx122(Indicator2, {
      "data-slot": "progress-indicator",
      className: "h-full w-full flex-1 bg-primary transition-all",
      style: { transform: `translateX(-${100 - (value || 0)}%)` }
    })
  });
}

// src/shadcn-ui/examples/progress-demo.tsx
import { jsx as jsx123 } from "react/jsx-runtime";
function ProgressDemo() {
  const [progress, setProgress] = React76.useState(13);
  React76.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);
  return /* @__PURE__ */ jsx123(Progress2, {
    value: progress,
    className: "w-[60%]"
  });
}

// src/shadcn-ui/examples/radio-group-demo.tsx
import React78 from "react";

// ../../node_modules/@radix-ui/react-radio-group/dist/index.mjs
import * as React210 from "react";
import * as React77 from "react";
import { jsx as jsx124, jsxs as jsxs64 } from "react/jsx-runtime";
import { jsx as jsx24 } from "react/jsx-runtime";
"use client";
var RADIO_NAME = "Radio";
var [createRadioContext, createRadioScope] = createContextScope(RADIO_NAME);
var [RadioProvider, useRadioContext] = createRadioContext(RADIO_NAME);
var Radio = React77.forwardRef((props, forwardedRef) => {
  const {
    __scopeRadio,
    name,
    checked = false,
    required,
    disabled,
    value = "on",
    onCheck,
    form,
    ...radioProps
  } = props;
  const [button, setButton] = React77.useState(null);
  const composedRefs = useComposedRefs(forwardedRef, (node) => setButton(node));
  const hasConsumerStoppedPropagationRef = React77.useRef(false);
  const isFormControl = button ? form || !!button.closest("form") : true;
  return /* @__PURE__ */ jsxs64(RadioProvider, { scope: __scopeRadio, checked, disabled, children: [
    /* @__PURE__ */ jsx124(Primitive.button, {
      type: "button",
      role: "radio",
      "aria-checked": checked,
      "data-state": getState6(checked),
      "data-disabled": disabled ? "" : undefined,
      disabled,
      value,
      ...radioProps,
      ref: composedRefs,
      onClick: composeEventHandlers(props.onClick, (event) => {
        if (!checked)
          onCheck?.();
        if (isFormControl) {
          hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
          if (!hasConsumerStoppedPropagationRef.current)
            event.stopPropagation();
        }
      })
    }),
    isFormControl && /* @__PURE__ */ jsx124(RadioBubbleInput, {
      control: button,
      bubbles: !hasConsumerStoppedPropagationRef.current,
      name,
      value,
      checked,
      required,
      disabled,
      form,
      style: { transform: "translateX(-100%)" }
    })
  ] });
});
Radio.displayName = RADIO_NAME;
var INDICATOR_NAME7 = "RadioIndicator";
var RadioIndicator = React77.forwardRef((props, forwardedRef) => {
  const { __scopeRadio, forceMount, ...indicatorProps } = props;
  const context = useRadioContext(INDICATOR_NAME7, __scopeRadio);
  return /* @__PURE__ */ jsx124(Presence, { present: forceMount || context.checked, children: /* @__PURE__ */ jsx124(Primitive.span, {
    "data-state": getState6(context.checked),
    "data-disabled": context.disabled ? "" : undefined,
    ...indicatorProps,
    ref: forwardedRef
  }) });
});
RadioIndicator.displayName = INDICATOR_NAME7;
var BUBBLE_INPUT_NAME3 = "RadioBubbleInput";
var RadioBubbleInput = React77.forwardRef(({
  __scopeRadio,
  control,
  checked,
  bubbles = true,
  ...props
}, forwardedRef) => {
  const ref = React77.useRef(null);
  const composedRefs = useComposedRefs(ref, forwardedRef);
  const prevChecked = usePrevious(checked);
  const controlSize = useSize(control);
  React77.useEffect(() => {
    const input = ref.current;
    if (!input)
      return;
    const inputProto = window.HTMLInputElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(inputProto, "checked");
    const setChecked = descriptor.set;
    if (prevChecked !== checked && setChecked) {
      const event = new Event("click", { bubbles });
      setChecked.call(input, checked);
      input.dispatchEvent(event);
    }
  }, [prevChecked, checked, bubbles]);
  return /* @__PURE__ */ jsx124(Primitive.input, {
    type: "radio",
    "aria-hidden": true,
    defaultChecked: checked,
    ...props,
    tabIndex: -1,
    ref: composedRefs,
    style: {
      ...props.style,
      ...controlSize,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  });
});
RadioBubbleInput.displayName = BUBBLE_INPUT_NAME3;
function getState6(checked) {
  return checked ? "checked" : "unchecked";
}
var ARROW_KEYS2 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
var RADIO_GROUP_NAME5 = "RadioGroup";
var [createRadioGroupContext, createRadioGroupScope] = createContextScope(RADIO_GROUP_NAME5, [
  createRovingFocusGroupScope,
  createRadioScope
]);
var useRovingFocusGroupScope3 = createRovingFocusGroupScope();
var useRadioScope = createRadioScope();
var [RadioGroupProvider2, useRadioGroupContext2] = createRadioGroupContext(RADIO_GROUP_NAME5);
var RadioGroup3 = React210.forwardRef((props, forwardedRef) => {
  const {
    __scopeRadioGroup,
    name,
    defaultValue,
    value: valueProp,
    required = false,
    disabled = false,
    orientation,
    dir,
    loop = true,
    onValueChange,
    ...groupProps
  } = props;
  const rovingFocusGroupScope = useRovingFocusGroupScope3(__scopeRadioGroup);
  const direction = useDirection(dir);
  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue ?? null,
    onChange: onValueChange,
    caller: RADIO_GROUP_NAME5
  });
  return /* @__PURE__ */ jsx24(RadioGroupProvider2, {
    scope: __scopeRadioGroup,
    name,
    required,
    disabled,
    value,
    onValueChange: setValue,
    children: /* @__PURE__ */ jsx24(Root9, {
      asChild: true,
      ...rovingFocusGroupScope,
      orientation,
      dir: direction,
      loop,
      children: /* @__PURE__ */ jsx24(Primitive.div, {
        role: "radiogroup",
        "aria-required": required,
        "aria-orientation": orientation,
        "data-disabled": disabled ? "" : undefined,
        dir: direction,
        ...groupProps,
        ref: forwardedRef
      })
    })
  });
});
RadioGroup3.displayName = RADIO_GROUP_NAME5;
var ITEM_NAME9 = "RadioGroupItem";
var RadioGroupItem = React210.forwardRef((props, forwardedRef) => {
  const { __scopeRadioGroup, disabled, ...itemProps } = props;
  const context = useRadioGroupContext2(ITEM_NAME9, __scopeRadioGroup);
  const isDisabled = context.disabled || disabled;
  const rovingFocusGroupScope = useRovingFocusGroupScope3(__scopeRadioGroup);
  const radioScope = useRadioScope(__scopeRadioGroup);
  const ref = React210.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const checked = context.value === itemProps.value;
  const isArrowKeyPressedRef = React210.useRef(false);
  React210.useEffect(() => {
    const handleKeyDown = (event) => {
      if (ARROW_KEYS2.includes(event.key)) {
        isArrowKeyPressedRef.current = true;
      }
    };
    const handleKeyUp = () => isArrowKeyPressedRef.current = false;
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  return /* @__PURE__ */ jsx24(Item3, {
    asChild: true,
    ...rovingFocusGroupScope,
    focusable: !isDisabled,
    active: checked,
    children: /* @__PURE__ */ jsx24(Radio, {
      disabled: isDisabled,
      required: context.required,
      checked,
      ...radioScope,
      ...itemProps,
      name: context.name,
      ref: composedRefs,
      onCheck: () => context.onValueChange(itemProps.value),
      onKeyDown: composeEventHandlers((event) => {
        if (event.key === "Enter")
          event.preventDefault();
      }),
      onFocus: composeEventHandlers(itemProps.onFocus, () => {
        if (isArrowKeyPressedRef.current)
          ref.current?.click();
      })
    })
  });
});
RadioGroupItem.displayName = ITEM_NAME9;
var INDICATOR_NAME22 = "RadioGroupIndicator";
var RadioGroupIndicator = React210.forwardRef((props, forwardedRef) => {
  const { __scopeRadioGroup, ...indicatorProps } = props;
  const radioScope = useRadioScope(__scopeRadioGroup);
  return /* @__PURE__ */ jsx24(RadioIndicator, { ...radioScope, ...indicatorProps, ref: forwardedRef });
});
RadioGroupIndicator.displayName = INDICATOR_NAME22;
var Root210 = RadioGroup3;
var Item25 = RadioGroupItem;
var Indicator3 = RadioGroupIndicator;

// src/shadcn-ui/components/radio-group.tsx
import clsx30 from "clsx";
import { jsx as jsx125 } from "react/jsx-runtime";
function RadioGroup5({ className, ...props }) {
  return /* @__PURE__ */ jsx125(Root210, {
    "data-slot": "radio-group",
    className: clsx30("grid gap-3", className),
    ...props
  });
}
function RadioGroupItem2({ className, ...props }) {
  return /* @__PURE__ */ jsx125(Item25, {
    "data-slot": "radio-group-item",
    className: clsx30("aspect-square size-4 shrink-0 rounded-full border border-input text-primary shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:ring-destructive/40", className),
    ...props,
    children: /* @__PURE__ */ jsx125(Indicator3, {
      "data-slot": "radio-group-indicator",
      className: "relative flex items-center justify-center",
      children: /* @__PURE__ */ jsx125(SvgIcon, {
        iconId: "Circle",
        className: "-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 size-2 fill-primary"
      })
    })
  });
}

// src/shadcn-ui/examples/radio-group-demo.tsx
import { jsx as jsx126, jsxs as jsxs65 } from "react/jsx-runtime";
function RadioGroupDemo() {
  const defaultId = React78.useId();
  const comfortableId = React78.useId();
  const compactId = React78.useId();
  return /* @__PURE__ */ jsxs65(RadioGroup5, {
    defaultValue: "comfortable",
    children: [
      /* @__PURE__ */ jsxs65("div", {
        className: "flex items-center gap-3",
        children: [
          /* @__PURE__ */ jsx126(RadioGroupItem2, {
            value: "default",
            id: defaultId
          }),
          /* @__PURE__ */ jsx126(Label4, {
            htmlFor: defaultId,
            children: "Default"
          })
        ]
      }),
      /* @__PURE__ */ jsxs65("div", {
        className: "flex items-center gap-3",
        children: [
          /* @__PURE__ */ jsx126(RadioGroupItem2, {
            value: "comfortable",
            id: comfortableId
          }),
          /* @__PURE__ */ jsx126(Label4, {
            htmlFor: comfortableId,
            children: "Comfortable"
          })
        ]
      }),
      /* @__PURE__ */ jsxs65("div", {
        className: "flex items-center gap-3",
        children: [
          /* @__PURE__ */ jsx126(RadioGroupItem2, {
            value: "compact",
            id: compactId
          }),
          /* @__PURE__ */ jsx126(Label4, {
            htmlFor: compactId,
            children: "Compact"
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/examples/radio-group-form.tsx
import { toast as toast5 } from "sonner";
import { jsx as jsx127, jsxs as jsxs66 } from "react/jsx-runtime";
function RadioGroupForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const type = formData.get("type");
    toast5("You submitted the following values", {
      description: /* @__PURE__ */ jsx127("pre", {
        className: "mt-2 w-[320px] rounded-md bg-neutral-950 p-4",
        children: /* @__PURE__ */ jsx127("code", {
          className: "text-white",
          children: JSON.stringify({ type }, null, 2)
        })
      })
    });
  }
  return /* @__PURE__ */ jsxs66("form", {
    onSubmit: handleSubmit,
    className: "w-2/3 space-y-6",
    children: [
      /* @__PURE__ */ jsxs66(RadioGroup5, {
        name: "type",
        className: "flex flex-col",
        children: [
          /* @__PURE__ */ jsx127(RadioGroupItem2, {
            value: "all"
          }),
          /* @__PURE__ */ jsx127(RadioGroupItem2, {
            value: "mentions"
          }),
          /* @__PURE__ */ jsx127(RadioGroupItem2, {
            value: "none"
          })
        ]
      }),
      /* @__PURE__ */ jsx127(Button, {
        type: "submit",
        children: "Submit"
      })
    ]
  });
}

// src/shadcn-ui/examples/scroll-area-demo.tsx
import React81 from "react";

// ../../node_modules/@radix-ui/react-scroll-area/dist/index.mjs
import * as React212 from "react";
import * as React79 from "react";
import { Fragment as Fragment13, jsx as jsx128, jsxs as jsxs67 } from "react/jsx-runtime";
"use client";
function useStateMachine2(initialState, machine) {
  return React79.useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState ?? state;
  }, initialState);
}
var SCROLL_AREA_NAME = "ScrollArea";
var [createScrollAreaContext, createScrollAreaScope] = createContextScope(SCROLL_AREA_NAME);
var [ScrollAreaProvider, useScrollAreaContext] = createScrollAreaContext(SCROLL_AREA_NAME);
var ScrollArea = React212.forwardRef((props, forwardedRef) => {
  const {
    __scopeScrollArea,
    type = "hover",
    dir,
    scrollHideDelay = 600,
    ...scrollAreaProps
  } = props;
  const [scrollArea, setScrollArea] = React212.useState(null);
  const [viewport, setViewport] = React212.useState(null);
  const [content, setContent] = React212.useState(null);
  const [scrollbarX, setScrollbarX] = React212.useState(null);
  const [scrollbarY, setScrollbarY] = React212.useState(null);
  const [cornerWidth, setCornerWidth] = React212.useState(0);
  const [cornerHeight, setCornerHeight] = React212.useState(0);
  const [scrollbarXEnabled, setScrollbarXEnabled] = React212.useState(false);
  const [scrollbarYEnabled, setScrollbarYEnabled] = React212.useState(false);
  const composedRefs = useComposedRefs(forwardedRef, (node) => setScrollArea(node));
  const direction = useDirection(dir);
  return /* @__PURE__ */ jsx128(ScrollAreaProvider, {
    scope: __scopeScrollArea,
    type,
    dir: direction,
    scrollHideDelay,
    scrollArea,
    viewport,
    onViewportChange: setViewport,
    content,
    onContentChange: setContent,
    scrollbarX,
    onScrollbarXChange: setScrollbarX,
    scrollbarXEnabled,
    onScrollbarXEnabledChange: setScrollbarXEnabled,
    scrollbarY,
    onScrollbarYChange: setScrollbarY,
    scrollbarYEnabled,
    onScrollbarYEnabledChange: setScrollbarYEnabled,
    onCornerWidthChange: setCornerWidth,
    onCornerHeightChange: setCornerHeight,
    children: /* @__PURE__ */ jsx128(Primitive.div, {
      dir: direction,
      ...scrollAreaProps,
      ref: composedRefs,
      style: {
        position: "relative",
        ["--radix-scroll-area-corner-width"]: cornerWidth + "px",
        ["--radix-scroll-area-corner-height"]: cornerHeight + "px",
        ...props.style
      }
    })
  });
});
ScrollArea.displayName = SCROLL_AREA_NAME;
var VIEWPORT_NAME3 = "ScrollAreaViewport";
var ScrollAreaViewport = React212.forwardRef((props, forwardedRef) => {
  const { __scopeScrollArea, children, nonce, ...viewportProps } = props;
  const context = useScrollAreaContext(VIEWPORT_NAME3, __scopeScrollArea);
  const ref = React212.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref, context.onViewportChange);
  return /* @__PURE__ */ jsxs67(Fragment13, { children: [
    /* @__PURE__ */ jsx128("style", {
      dangerouslySetInnerHTML: {
        __html: `[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}`
      },
      nonce
    }),
    /* @__PURE__ */ jsx128(Primitive.div, {
      "data-radix-scroll-area-viewport": "",
      ...viewportProps,
      ref: composedRefs,
      style: {
        overflowX: context.scrollbarXEnabled ? "scroll" : "hidden",
        overflowY: context.scrollbarYEnabled ? "scroll" : "hidden",
        ...props.style
      },
      children: /* @__PURE__ */ jsx128("div", { ref: context.onContentChange, style: { minWidth: "100%", display: "table" }, children })
    })
  ] });
});
ScrollAreaViewport.displayName = VIEWPORT_NAME3;
var SCROLLBAR_NAME = "ScrollAreaScrollbar";
var ScrollAreaScrollbar = React212.forwardRef((props, forwardedRef) => {
  const { forceMount, ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const { onScrollbarXEnabledChange, onScrollbarYEnabledChange } = context;
  const isHorizontal = props.orientation === "horizontal";
  React212.useEffect(() => {
    isHorizontal ? onScrollbarXEnabledChange(true) : onScrollbarYEnabledChange(true);
    return () => {
      isHorizontal ? onScrollbarXEnabledChange(false) : onScrollbarYEnabledChange(false);
    };
  }, [isHorizontal, onScrollbarXEnabledChange, onScrollbarYEnabledChange]);
  return context.type === "hover" ? /* @__PURE__ */ jsx128(ScrollAreaScrollbarHover, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "scroll" ? /* @__PURE__ */ jsx128(ScrollAreaScrollbarScroll, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "auto" ? /* @__PURE__ */ jsx128(ScrollAreaScrollbarAuto, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "always" ? /* @__PURE__ */ jsx128(ScrollAreaScrollbarVisible, { ...scrollbarProps, ref: forwardedRef }) : null;
});
ScrollAreaScrollbar.displayName = SCROLLBAR_NAME;
var ScrollAreaScrollbarHover = React212.forwardRef((props, forwardedRef) => {
  const { forceMount, ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const [visible, setVisible] = React212.useState(false);
  React212.useEffect(() => {
    const scrollArea = context.scrollArea;
    let hideTimer = 0;
    if (scrollArea) {
      const handlePointerEnter = () => {
        window.clearTimeout(hideTimer);
        setVisible(true);
      };
      const handlePointerLeave = () => {
        hideTimer = window.setTimeout(() => setVisible(false), context.scrollHideDelay);
      };
      scrollArea.addEventListener("pointerenter", handlePointerEnter);
      scrollArea.addEventListener("pointerleave", handlePointerLeave);
      return () => {
        window.clearTimeout(hideTimer);
        scrollArea.removeEventListener("pointerenter", handlePointerEnter);
        scrollArea.removeEventListener("pointerleave", handlePointerLeave);
      };
    }
  }, [context.scrollArea, context.scrollHideDelay]);
  return /* @__PURE__ */ jsx128(Presence, { present: forceMount || visible, children: /* @__PURE__ */ jsx128(ScrollAreaScrollbarAuto, {
    "data-state": visible ? "visible" : "hidden",
    ...scrollbarProps,
    ref: forwardedRef
  }) });
});
var ScrollAreaScrollbarScroll = React212.forwardRef((props, forwardedRef) => {
  const { forceMount, ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const isHorizontal = props.orientation === "horizontal";
  const debounceScrollEnd = useDebounceCallback(() => send("SCROLL_END"), 100);
  const [state, send] = useStateMachine2("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  React212.useEffect(() => {
    if (state === "idle") {
      const hideTimer = window.setTimeout(() => send("HIDE"), context.scrollHideDelay);
      return () => window.clearTimeout(hideTimer);
    }
  }, [state, context.scrollHideDelay, send]);
  React212.useEffect(() => {
    const viewport = context.viewport;
    const scrollDirection = isHorizontal ? "scrollLeft" : "scrollTop";
    if (viewport) {
      let prevScrollPos = viewport[scrollDirection];
      const handleScroll2 = () => {
        const scrollPos = viewport[scrollDirection];
        const hasScrollInDirectionChanged = prevScrollPos !== scrollPos;
        if (hasScrollInDirectionChanged) {
          send("SCROLL");
          debounceScrollEnd();
        }
        prevScrollPos = scrollPos;
      };
      viewport.addEventListener("scroll", handleScroll2);
      return () => viewport.removeEventListener("scroll", handleScroll2);
    }
  }, [context.viewport, isHorizontal, send, debounceScrollEnd]);
  return /* @__PURE__ */ jsx128(Presence, { present: forceMount || state !== "hidden", children: /* @__PURE__ */ jsx128(ScrollAreaScrollbarVisible, {
    "data-state": state === "hidden" ? "hidden" : "visible",
    ...scrollbarProps,
    ref: forwardedRef,
    onPointerEnter: composeEventHandlers(props.onPointerEnter, () => send("POINTER_ENTER")),
    onPointerLeave: composeEventHandlers(props.onPointerLeave, () => send("POINTER_LEAVE"))
  }) });
});
var ScrollAreaScrollbarAuto = React212.forwardRef((props, forwardedRef) => {
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const { forceMount, ...scrollbarProps } = props;
  const [visible, setVisible] = React212.useState(false);
  const isHorizontal = props.orientation === "horizontal";
  const handleResize = useDebounceCallback(() => {
    if (context.viewport) {
      const isOverflowX = context.viewport.offsetWidth < context.viewport.scrollWidth;
      const isOverflowY = context.viewport.offsetHeight < context.viewport.scrollHeight;
      setVisible(isHorizontal ? isOverflowX : isOverflowY);
    }
  }, 10);
  useResizeObserver2(context.viewport, handleResize);
  useResizeObserver2(context.content, handleResize);
  return /* @__PURE__ */ jsx128(Presence, { present: forceMount || visible, children: /* @__PURE__ */ jsx128(ScrollAreaScrollbarVisible, {
    "data-state": visible ? "visible" : "hidden",
    ...scrollbarProps,
    ref: forwardedRef
  }) });
});
var ScrollAreaScrollbarVisible = React212.forwardRef((props, forwardedRef) => {
  const { orientation = "vertical", ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const thumbRef = React212.useRef(null);
  const pointerOffsetRef = React212.useRef(0);
  const [sizes, setSizes] = React212.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  });
  const thumbRatio = getThumbRatio(sizes.viewport, sizes.content);
  const commonProps = {
    ...scrollbarProps,
    sizes,
    onSizesChange: setSizes,
    hasThumb: Boolean(thumbRatio > 0 && thumbRatio < 1),
    onThumbChange: (thumb) => thumbRef.current = thumb,
    onThumbPointerUp: () => pointerOffsetRef.current = 0,
    onThumbPointerDown: (pointerPos) => pointerOffsetRef.current = pointerPos
  };
  function getScrollPosition(pointerPos, dir) {
    return getScrollPositionFromPointer(pointerPos, pointerOffsetRef.current, sizes, dir);
  }
  if (orientation === "horizontal") {
    return /* @__PURE__ */ jsx128(ScrollAreaScrollbarX, {
      ...commonProps,
      ref: forwardedRef,
      onThumbPositionChange: () => {
        if (context.viewport && thumbRef.current) {
          const scrollPos = context.viewport.scrollLeft;
          const offset4 = getThumbOffsetFromScroll(scrollPos, sizes, context.dir);
          thumbRef.current.style.transform = `translate3d(${offset4}px, 0, 0)`;
        }
      },
      onWheelScroll: (scrollPos) => {
        if (context.viewport)
          context.viewport.scrollLeft = scrollPos;
      },
      onDragScroll: (pointerPos) => {
        if (context.viewport) {
          context.viewport.scrollLeft = getScrollPosition(pointerPos, context.dir);
        }
      }
    });
  }
  if (orientation === "vertical") {
    return /* @__PURE__ */ jsx128(ScrollAreaScrollbarY, {
      ...commonProps,
      ref: forwardedRef,
      onThumbPositionChange: () => {
        if (context.viewport && thumbRef.current) {
          const scrollPos = context.viewport.scrollTop;
          const offset4 = getThumbOffsetFromScroll(scrollPos, sizes);
          thumbRef.current.style.transform = `translate3d(0, ${offset4}px, 0)`;
        }
      },
      onWheelScroll: (scrollPos) => {
        if (context.viewport)
          context.viewport.scrollTop = scrollPos;
      },
      onDragScroll: (pointerPos) => {
        if (context.viewport)
          context.viewport.scrollTop = getScrollPosition(pointerPos);
      }
    });
  }
  return null;
});
var ScrollAreaScrollbarX = React212.forwardRef((props, forwardedRef) => {
  const { sizes, onSizesChange, ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const [computedStyle, setComputedStyle] = React212.useState();
  const ref = React212.useRef(null);
  const composeRefs2 = useComposedRefs(forwardedRef, ref, context.onScrollbarXChange);
  React212.useEffect(() => {
    if (ref.current)
      setComputedStyle(getComputedStyle(ref.current));
  }, [ref]);
  return /* @__PURE__ */ jsx128(ScrollAreaScrollbarImpl, {
    "data-orientation": "horizontal",
    ...scrollbarProps,
    ref: composeRefs2,
    sizes,
    style: {
      bottom: 0,
      left: context.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
      right: context.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
      ["--radix-scroll-area-thumb-width"]: getThumbSize(sizes) + "px",
      ...props.style
    },
    onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.x),
    onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.x),
    onWheelScroll: (event, maxScrollPos) => {
      if (context.viewport) {
        const scrollPos = context.viewport.scrollLeft + event.deltaX;
        props.onWheelScroll(scrollPos);
        if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
          event.preventDefault();
        }
      }
    },
    onResize: () => {
      if (ref.current && context.viewport && computedStyle) {
        onSizesChange({
          content: context.viewport.scrollWidth,
          viewport: context.viewport.offsetWidth,
          scrollbar: {
            size: ref.current.clientWidth,
            paddingStart: toInt(computedStyle.paddingLeft),
            paddingEnd: toInt(computedStyle.paddingRight)
          }
        });
      }
    }
  });
});
var ScrollAreaScrollbarY = React212.forwardRef((props, forwardedRef) => {
  const { sizes, onSizesChange, ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const [computedStyle, setComputedStyle] = React212.useState();
  const ref = React212.useRef(null);
  const composeRefs2 = useComposedRefs(forwardedRef, ref, context.onScrollbarYChange);
  React212.useEffect(() => {
    if (ref.current)
      setComputedStyle(getComputedStyle(ref.current));
  }, [ref]);
  return /* @__PURE__ */ jsx128(ScrollAreaScrollbarImpl, {
    "data-orientation": "vertical",
    ...scrollbarProps,
    ref: composeRefs2,
    sizes,
    style: {
      top: 0,
      right: context.dir === "ltr" ? 0 : undefined,
      left: context.dir === "rtl" ? 0 : undefined,
      bottom: "var(--radix-scroll-area-corner-height)",
      ["--radix-scroll-area-thumb-height"]: getThumbSize(sizes) + "px",
      ...props.style
    },
    onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.y),
    onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.y),
    onWheelScroll: (event, maxScrollPos) => {
      if (context.viewport) {
        const scrollPos = context.viewport.scrollTop + event.deltaY;
        props.onWheelScroll(scrollPos);
        if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
          event.preventDefault();
        }
      }
    },
    onResize: () => {
      if (ref.current && context.viewport && computedStyle) {
        onSizesChange({
          content: context.viewport.scrollHeight,
          viewport: context.viewport.offsetHeight,
          scrollbar: {
            size: ref.current.clientHeight,
            paddingStart: toInt(computedStyle.paddingTop),
            paddingEnd: toInt(computedStyle.paddingBottom)
          }
        });
      }
    }
  });
});
var [ScrollbarProvider, useScrollbarContext] = createScrollAreaContext(SCROLLBAR_NAME);
var ScrollAreaScrollbarImpl = React212.forwardRef((props, forwardedRef) => {
  const {
    __scopeScrollArea,
    sizes,
    hasThumb,
    onThumbChange,
    onThumbPointerUp,
    onThumbPointerDown,
    onThumbPositionChange,
    onDragScroll,
    onWheelScroll,
    onResize,
    ...scrollbarProps
  } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, __scopeScrollArea);
  const [scrollbar, setScrollbar] = React212.useState(null);
  const composeRefs2 = useComposedRefs(forwardedRef, (node) => setScrollbar(node));
  const rectRef = React212.useRef(null);
  const prevWebkitUserSelectRef = React212.useRef("");
  const viewport = context.viewport;
  const maxScrollPos = sizes.content - sizes.viewport;
  const handleWheelScroll = useCallbackRef(onWheelScroll);
  const handleThumbPositionChange = useCallbackRef(onThumbPositionChange);
  const handleResize = useDebounceCallback(onResize, 10);
  function handleDragScroll(event) {
    if (rectRef.current) {
      const x = event.clientX - rectRef.current.left;
      const y = event.clientY - rectRef.current.top;
      onDragScroll({ x, y });
    }
  }
  React212.useEffect(() => {
    const handleWheel = (event) => {
      const element = event.target;
      const isScrollbarWheel = scrollbar?.contains(element);
      if (isScrollbarWheel)
        handleWheelScroll(event, maxScrollPos);
    };
    document.addEventListener("wheel", handleWheel, { passive: false });
    return () => document.removeEventListener("wheel", handleWheel, { passive: false });
  }, [viewport, scrollbar, maxScrollPos, handleWheelScroll]);
  React212.useEffect(handleThumbPositionChange, [sizes, handleThumbPositionChange]);
  useResizeObserver2(scrollbar, handleResize);
  useResizeObserver2(context.content, handleResize);
  return /* @__PURE__ */ jsx128(ScrollbarProvider, {
    scope: __scopeScrollArea,
    scrollbar,
    hasThumb,
    onThumbChange: useCallbackRef(onThumbChange),
    onThumbPointerUp: useCallbackRef(onThumbPointerUp),
    onThumbPositionChange: handleThumbPositionChange,
    onThumbPointerDown: useCallbackRef(onThumbPointerDown),
    children: /* @__PURE__ */ jsx128(Primitive.div, {
      ...scrollbarProps,
      ref: composeRefs2,
      style: { position: "absolute", ...scrollbarProps.style },
      onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
        const mainPointer = 0;
        if (event.button === mainPointer) {
          const element = event.target;
          element.setPointerCapture(event.pointerId);
          rectRef.current = scrollbar.getBoundingClientRect();
          prevWebkitUserSelectRef.current = document.body.style.webkitUserSelect;
          document.body.style.webkitUserSelect = "none";
          if (context.viewport)
            context.viewport.style.scrollBehavior = "auto";
          handleDragScroll(event);
        }
      }),
      onPointerMove: composeEventHandlers(props.onPointerMove, handleDragScroll),
      onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
        const element = event.target;
        if (element.hasPointerCapture(event.pointerId)) {
          element.releasePointerCapture(event.pointerId);
        }
        document.body.style.webkitUserSelect = prevWebkitUserSelectRef.current;
        if (context.viewport)
          context.viewport.style.scrollBehavior = "";
        rectRef.current = null;
      })
    })
  });
});
var THUMB_NAME = "ScrollAreaThumb";
var ScrollAreaThumb = React212.forwardRef((props, forwardedRef) => {
  const { forceMount, ...thumbProps } = props;
  const scrollbarContext = useScrollbarContext(THUMB_NAME, props.__scopeScrollArea);
  return /* @__PURE__ */ jsx128(Presence, { present: forceMount || scrollbarContext.hasThumb, children: /* @__PURE__ */ jsx128(ScrollAreaThumbImpl, { ref: forwardedRef, ...thumbProps }) });
});
var ScrollAreaThumbImpl = React212.forwardRef((props, forwardedRef) => {
  const { __scopeScrollArea, style, ...thumbProps } = props;
  const scrollAreaContext = useScrollAreaContext(THUMB_NAME, __scopeScrollArea);
  const scrollbarContext = useScrollbarContext(THUMB_NAME, __scopeScrollArea);
  const { onThumbPositionChange } = scrollbarContext;
  const composedRef = useComposedRefs(forwardedRef, (node) => scrollbarContext.onThumbChange(node));
  const removeUnlinkedScrollListenerRef = React212.useRef(undefined);
  const debounceScrollEnd = useDebounceCallback(() => {
    if (removeUnlinkedScrollListenerRef.current) {
      removeUnlinkedScrollListenerRef.current();
      removeUnlinkedScrollListenerRef.current = undefined;
    }
  }, 100);
  React212.useEffect(() => {
    const viewport = scrollAreaContext.viewport;
    if (viewport) {
      const handleScroll2 = () => {
        debounceScrollEnd();
        if (!removeUnlinkedScrollListenerRef.current) {
          const listener = addUnlinkedScrollListener(viewport, onThumbPositionChange);
          removeUnlinkedScrollListenerRef.current = listener;
          onThumbPositionChange();
        }
      };
      onThumbPositionChange();
      viewport.addEventListener("scroll", handleScroll2);
      return () => viewport.removeEventListener("scroll", handleScroll2);
    }
  }, [scrollAreaContext.viewport, debounceScrollEnd, onThumbPositionChange]);
  return /* @__PURE__ */ jsx128(Primitive.div, {
    "data-state": scrollbarContext.hasThumb ? "visible" : "hidden",
    ...thumbProps,
    ref: composedRef,
    style: {
      width: "var(--radix-scroll-area-thumb-width)",
      height: "var(--radix-scroll-area-thumb-height)",
      ...style
    },
    onPointerDownCapture: composeEventHandlers(props.onPointerDownCapture, (event) => {
      const thumb = event.target;
      const thumbRect = thumb.getBoundingClientRect();
      const x = event.clientX - thumbRect.left;
      const y = event.clientY - thumbRect.top;
      scrollbarContext.onThumbPointerDown({ x, y });
    }),
    onPointerUp: composeEventHandlers(props.onPointerUp, scrollbarContext.onThumbPointerUp)
  });
});
ScrollAreaThumb.displayName = THUMB_NAME;
var CORNER_NAME = "ScrollAreaCorner";
var ScrollAreaCorner = React212.forwardRef((props, forwardedRef) => {
  const context = useScrollAreaContext(CORNER_NAME, props.__scopeScrollArea);
  const hasBothScrollbarsVisible = Boolean(context.scrollbarX && context.scrollbarY);
  const hasCorner = context.type !== "scroll" && hasBothScrollbarsVisible;
  return hasCorner ? /* @__PURE__ */ jsx128(ScrollAreaCornerImpl, { ...props, ref: forwardedRef }) : null;
});
ScrollAreaCorner.displayName = CORNER_NAME;
var ScrollAreaCornerImpl = React212.forwardRef((props, forwardedRef) => {
  const { __scopeScrollArea, ...cornerProps } = props;
  const context = useScrollAreaContext(CORNER_NAME, __scopeScrollArea);
  const [width, setWidth] = React212.useState(0);
  const [height, setHeight] = React212.useState(0);
  const hasSize = Boolean(width && height);
  useResizeObserver2(context.scrollbarX, () => {
    const height2 = context.scrollbarX?.offsetHeight || 0;
    context.onCornerHeightChange(height2);
    setHeight(height2);
  });
  useResizeObserver2(context.scrollbarY, () => {
    const width2 = context.scrollbarY?.offsetWidth || 0;
    context.onCornerWidthChange(width2);
    setWidth(width2);
  });
  return hasSize ? /* @__PURE__ */ jsx128(Primitive.div, {
    ...cornerProps,
    ref: forwardedRef,
    style: {
      width,
      height,
      position: "absolute",
      right: context.dir === "ltr" ? 0 : undefined,
      left: context.dir === "rtl" ? 0 : undefined,
      bottom: 0,
      ...props.style
    }
  }) : null;
});
function toInt(value) {
  return value ? parseInt(value, 10) : 0;
}
function getThumbRatio(viewportSize, contentSize) {
  const ratio = viewportSize / contentSize;
  return isNaN(ratio) ? 0 : ratio;
}
function getThumbSize(sizes) {
  const ratio = getThumbRatio(sizes.viewport, sizes.content);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio;
  return Math.max(thumbSize, 18);
}
function getScrollPositionFromPointer(pointerPos, pointerOffset, sizes, dir = "ltr") {
  const thumbSizePx = getThumbSize(sizes);
  const thumbCenter = thumbSizePx / 2;
  const offset4 = pointerOffset || thumbCenter;
  const thumbOffsetFromEnd = thumbSizePx - offset4;
  const minPointerPos = sizes.scrollbar.paddingStart + offset4;
  const maxPointerPos = sizes.scrollbar.size - sizes.scrollbar.paddingEnd - thumbOffsetFromEnd;
  const maxScrollPos = sizes.content - sizes.viewport;
  const scrollRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
  const interpolate = linearScale([minPointerPos, maxPointerPos], scrollRange);
  return interpolate(pointerPos);
}
function getThumbOffsetFromScroll(scrollPos, sizes, dir = "ltr") {
  const thumbSizePx = getThumbSize(sizes);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const scrollbar = sizes.scrollbar.size - scrollbarPadding;
  const maxScrollPos = sizes.content - sizes.viewport;
  const maxThumbPos = scrollbar - thumbSizePx;
  const scrollClampRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
  const scrollWithoutMomentum = clamp(scrollPos, scrollClampRange);
  const interpolate = linearScale([0, maxScrollPos], [0, maxThumbPos]);
  return interpolate(scrollWithoutMomentum);
}
function linearScale(input, output) {
  return (value) => {
    if (input[0] === input[1] || output[0] === output[1])
      return output[0];
    const ratio = (output[1] - output[0]) / (input[1] - input[0]);
    return output[0] + ratio * (value - input[0]);
  };
}
function isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) {
  return scrollPos > 0 && scrollPos < maxScrollPos;
}
var addUnlinkedScrollListener = (node, handler = () => {}) => {
  let prevPosition = { left: node.scrollLeft, top: node.scrollTop };
  let rAF = 0;
  (function loop() {
    const position = { left: node.scrollLeft, top: node.scrollTop };
    const isHorizontalScroll = prevPosition.left !== position.left;
    const isVerticalScroll = prevPosition.top !== position.top;
    if (isHorizontalScroll || isVerticalScroll)
      handler();
    prevPosition = position;
    rAF = window.requestAnimationFrame(loop);
  })();
  return () => window.cancelAnimationFrame(rAF);
};
function useDebounceCallback(callback, delay) {
  const handleCallback = useCallbackRef(callback);
  const debounceTimerRef = React212.useRef(0);
  React212.useEffect(() => () => window.clearTimeout(debounceTimerRef.current), []);
  return React212.useCallback(() => {
    window.clearTimeout(debounceTimerRef.current);
    debounceTimerRef.current = window.setTimeout(handleCallback, delay);
  }, [handleCallback, delay]);
}
function useResizeObserver2(element, onResize) {
  const handleResize = useCallbackRef(onResize);
  useLayoutEffect2(() => {
    let rAF = 0;
    if (element) {
      const resizeObserver = new ResizeObserver(() => {
        cancelAnimationFrame(rAF);
        rAF = window.requestAnimationFrame(handleResize);
      });
      resizeObserver.observe(element);
      return () => {
        window.cancelAnimationFrame(rAF);
        resizeObserver.unobserve(element);
      };
    }
  }, [element, handleResize]);
}
var Root12 = ScrollArea;
var Viewport3 = ScrollAreaViewport;
var Corner = ScrollAreaCorner;

// src/shadcn-ui/components/scroll-area.tsx
import clsx31 from "clsx";
import { jsx as jsx129, jsxs as jsxs68 } from "react/jsx-runtime";
function ScrollArea2({ className, children, ...props }) {
  return /* @__PURE__ */ jsxs68(Root12, {
    "data-slot": "scroll-area",
    className: clsx31("relative", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx129(Viewport3, {
        "data-slot": "scroll-area-viewport",
        className: "size-full rounded-[inherit] outline-none transition-[color,box-shadow] focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50",
        children
      }),
      /* @__PURE__ */ jsx129(ScrollBar, {}),
      /* @__PURE__ */ jsx129(Corner, {})
    ]
  });
}
function ScrollBar({ className, orientation = "vertical", ...props }) {
  return /* @__PURE__ */ jsx129(ScrollAreaScrollbar, {
    "data-slot": "scroll-area-scrollbar",
    orientation,
    className: clsx31("flex touch-none select-none p-px transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent", className),
    ...props,
    children: /* @__PURE__ */ jsx129(ScrollAreaThumb, {
      "data-slot": "scroll-area-thumb",
      className: "relative flex-1 rounded-full bg-border"
    })
  });
}

// ../../node_modules/@radix-ui/react-separator/dist/index.mjs
import * as React80 from "react";
import { jsx as jsx130 } from "react/jsx-runtime";
var NAME5 = "Separator";
var DEFAULT_ORIENTATION = "horizontal";
var ORIENTATIONS = ["horizontal", "vertical"];
var Separator3 = React80.forwardRef((props, forwardedRef) => {
  const { decorative, orientation: orientationProp = DEFAULT_ORIENTATION, ...domProps } = props;
  const orientation = isValidOrientation(orientationProp) ? orientationProp : DEFAULT_ORIENTATION;
  const ariaOrientation = orientation === "vertical" ? orientation : undefined;
  const semanticProps = decorative ? { role: "none" } : { "aria-orientation": ariaOrientation, role: "separator" };
  return /* @__PURE__ */ jsx130(Primitive.div, {
    "data-orientation": orientation,
    ...semanticProps,
    ...domProps,
    ref: forwardedRef
  });
});
Separator3.displayName = NAME5;
function isValidOrientation(orientation) {
  return ORIENTATIONS.includes(orientation);
}
var Root13 = Separator3;

// src/shadcn-ui/components/separator.tsx
import clsx32 from "clsx";
import { jsx as jsx131 } from "react/jsx-runtime";
function Separator4({ className, orientation = "horizontal", decorative = true, ...props }) {
  return /* @__PURE__ */ jsx131(Root13, {
    "data-slot": "separator",
    decorative,
    orientation,
    className: clsx32("shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px", className),
    ...props
  });
}

// src/shadcn-ui/examples/scroll-area-demo.tsx
import { jsx as jsx132, jsxs as jsxs69 } from "react/jsx-runtime";
var tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);
function ScrollAreaDemo() {
  return /* @__PURE__ */ jsx132(ScrollArea2, {
    className: "h-72 w-48 rounded-md border",
    children: /* @__PURE__ */ jsxs69("div", {
      className: "p-4",
      children: [
        /* @__PURE__ */ jsx132("h4", {
          className: "mb-4 font-medium text-sm leading-none",
          children: "Tags"
        }),
        tags.map((tag) => /* @__PURE__ */ jsxs69(React81.Fragment, {
          children: [
            /* @__PURE__ */ jsx132("div", {
              className: "text-sm",
              children: tag
            }),
            /* @__PURE__ */ jsx132(Separator4, {
              className: "my-2"
            })
          ]
        }, tag))
      ]
    })
  });
}
// src/shadcn-ui/examples/scroll-area-horizontal-demo.tsx
import { jsx as jsx133, jsxs as jsxs70 } from "react/jsx-runtime";
var works = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80"
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80"
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"
  }
];
function ScrollAreaHorizontalDemo() {
  return /* @__PURE__ */ jsxs70(ScrollArea2, {
    className: "w-96 whitespace-nowrap rounded-md border",
    children: [
      /* @__PURE__ */ jsx133("div", {
        className: "flex w-max space-x-4 p-4",
        children: works.map((artwork) => /* @__PURE__ */ jsxs70("figure", {
          className: "shrink-0",
          children: [
            /* @__PURE__ */ jsx133("div", {
              className: "overflow-hidden rounded-md",
              children: /* @__PURE__ */ jsx133(LazyImage, {
                src: artwork.art,
                alt: `Photo by ${artwork.artist}`,
                className: "aspect-[3/4] h-fit w-fit object-cover",
                width: 300,
                height: 400
              })
            }),
            /* @__PURE__ */ jsxs70("figcaption", {
              className: "pt-2 text-muted-foreground text-xs",
              children: [
                "Photo by ",
                /* @__PURE__ */ jsx133("span", {
                  className: "font-semibold text-foreground",
                  children: artwork.artist
                })
              ]
            })
          ]
        }, artwork.artist))
      }),
      /* @__PURE__ */ jsx133(ScrollBar, {
        orientation: "horizontal"
      })
    ]
  });
}

// src/shadcn-ui/examples/select-demo.tsx
import { jsx as jsx134, jsxs as jsxs71 } from "react/jsx-runtime";
function SelectDemo() {
  return /* @__PURE__ */ jsxs71(Select2, {
    children: [
      /* @__PURE__ */ jsx134(SelectTrigger2, {
        className: "w-[180px]",
        children: /* @__PURE__ */ jsx134(SelectValue2, {
          placeholder: "Select a fruit"
        })
      }),
      /* @__PURE__ */ jsx134(SelectContent2, {
        children: /* @__PURE__ */ jsxs71(SelectGroup2, {
          children: [
            /* @__PURE__ */ jsx134(SelectLabel2, {
              children: "Fruits"
            }),
            /* @__PURE__ */ jsx134(SelectItem2, {
              value: "apple",
              children: "Apple"
            }),
            /* @__PURE__ */ jsx134(SelectItem2, {
              value: "banana",
              children: "Banana"
            }),
            /* @__PURE__ */ jsx134(SelectItem2, {
              value: "blueberry",
              children: "Blueberry"
            }),
            /* @__PURE__ */ jsx134(SelectItem2, {
              value: "grapes",
              children: "Grapes"
            }),
            /* @__PURE__ */ jsx134(SelectItem2, {
              value: "pineapple",
              children: "Pineapple"
            })
          ]
        })
      })
    ]
  });
}

// src/shadcn-ui/examples/select-form.tsx
import { toast as toast6 } from "sonner";
import { jsx as jsx135, jsxs as jsxs72 } from "react/jsx-runtime";
function SelectForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    toast6("You submitted the following values", {
      description: /* @__PURE__ */ jsx135("pre", {
        className: "mt-2 w-[320px] rounded-md bg-neutral-950 p-4",
        children: /* @__PURE__ */ jsx135("code", {
          className: "text-white",
          children: JSON.stringify({ email }, null, 2)
        })
      })
    });
  }
  return /* @__PURE__ */ jsxs72("form", {
    onSubmit: handleSubmit,
    className: "w-2/3 space-y-6",
    children: [
      /* @__PURE__ */ jsxs72(Select2, {
        name: "email",
        children: [
          /* @__PURE__ */ jsx135(SelectTrigger2, {
            children: /* @__PURE__ */ jsx135(SelectValue2, {
              placeholder: "Select a verified email to display"
            })
          }),
          /* @__PURE__ */ jsxs72(SelectContent2, {
            children: [
              /* @__PURE__ */ jsx135(SelectItem2, {
                value: "joe@example.com",
                children: "joe@example.com"
              }),
              /* @__PURE__ */ jsx135(SelectItem2, {
                value: "joe@google.com",
                children: "joe@google.com"
              }),
              /* @__PURE__ */ jsx135(SelectItem2, {
                value: "joe@support.com",
                children: "joe@support.com"
              })
            ]
          })
        ]
      }),
      /* @__PURE__ */ jsx135(Button, {
        type: "submit",
        children: "Submit"
      })
    ]
  });
}

// src/shadcn-ui/examples/select-scrollable.tsx
import { jsx as jsx136, jsxs as jsxs73 } from "react/jsx-runtime";
function SelectScrollable() {
  return /* @__PURE__ */ jsxs73(Select2, {
    children: [
      /* @__PURE__ */ jsx136(SelectTrigger2, {
        className: "w-[280px]",
        children: /* @__PURE__ */ jsx136(SelectValue2, {
          placeholder: "Select a timezone"
        })
      }),
      /* @__PURE__ */ jsxs73(SelectContent2, {
        children: [
          /* @__PURE__ */ jsxs73(SelectGroup2, {
            children: [
              /* @__PURE__ */ jsx136(SelectLabel2, {
                children: "North America"
              }),
              /* @__PURE__ */ jsx136(SelectItem2, {
                value: "est",
                children: "Eastern Standard Time (EST)"
              }),
              /* @__PURE__ */ jsx136(SelectItem2, {
                value: "cst",
                children: "Central Standard Time (CST)"
              }),
              /* @__PURE__ */ jsx136(SelectItem2, {
                value: "mst",
                children: "Mountain Standard Time (MST)"
              }),
              /* @__PURE__ */ jsx136(SelectItem2, {
                value: "pst",
                children: "Pacific Standard Time (PST)"
              }),
              /* @__PURE__ */ jsx136(SelectItem2, {
                value: "akst",
                children: "Alaska Standard Time (AKST)"
              }),
              /* @__PURE__ */ jsx136(SelectItem2, {
                value: "hst",
                children: "Hawaii Standard Time (HST)"
              })
            ]
          }),
          /* @__PURE__ */ jsxs73(SelectGroup2, {
            children: [
              /* @__PURE__ */ jsx136(SelectLabel2, {
                children: "Europe & Africa"
              }),
              /* @__PURE__ */ jsx136(SelectItem2, {
                value: "gmt",
                children: "Greenwich Mean Time (GMT)"
              }),
              /* @__PURE__ */ jsx136(SelectItem2, {
                value: "cet",
                children: "Central European Time (CET)"
              }),
              /* @__PURE__ */ jsx136(SelectItem2, {
                value: "eet",
                children: "Eastern European Time (EET)"
              }),
              /* @__PURE__ */ jsx136(SelectItem2, {
                value: "west",
                children: "Western European Summer Time (WEST)"
              }),
              /* @__PURE__ */ jsx136(SelectItem2, {
                value: "cat",
                children: "Central Africa Time (CAT)"
              }),
              /* @__PURE__ */ jsx136(SelectItem2, {
                value: "eat",
                children: "East Africa Time (EAT)"
              })
            ]
          }),
          /* @__PURE__ */ jsxs73(SelectGroup2, {
            children: [
              /* @__PURE__ */ jsx136(SelectLabel2, {
                children: "Asia"
              }),
              /* @__PURE__ */ jsx136(SelectItem2, {
                value: "msk",
                children: "Moscow Time (MSK)"
              }),
              /* @__PURE__ */ jsx136(SelectItem2, {
                value: "ist",
                children: "India Standard Time (IST)"
              }),
              /* @__PURE__ */ jsx136(SelectItem2, {
                value: "cst_china",
                children: "China Standard Time (CST)"
              }),
              /* @__PURE__ */ jsx136(SelectItem2, {
                value: "jst",
                children: "Japan Standard Time (JST)"
              }),
              /* @__PURE__ */ jsx136(SelectItem2, {
                value: "kst",
                children: "Korea Standard Time (KST)"
              }),
              /* @__PURE__ */ jsx136(SelectItem2, {
                value: "ist_indonesia",
                children: "Indonesia Central Standard Time (WITA)"
              })
            ]
          }),
          /* @__PURE__ */ jsxs73(SelectGroup2, {
            children: [
              /* @__PURE__ */ jsx136(SelectLabel2, {
                children: "Australia & Pacific"
              }),
              /* @__PURE__ */ jsx136(SelectItem2, {
                value: "awst",
                children: "Australian Western Standard Time (AWST)"
              }),
              /* @__PURE__ */ jsx136(SelectItem2, {
                value: "acst",
                children: "Australian Central Standard Time (ACST)"
              }),
              /* @__PURE__ */ jsx136(SelectItem2, {
                value: "aest",
                children: "Australian Eastern Standard Time (AEST)"
              }),
              /* @__PURE__ */ jsx136(SelectItem2, {
                value: "nzst",
                children: "New Zealand Standard Time (NZST)"
              }),
              /* @__PURE__ */ jsx136(SelectItem2, {
                value: "fjt",
                children: "Fiji Time (FJT)"
              })
            ]
          }),
          /* @__PURE__ */ jsxs73(SelectGroup2, {
            children: [
              /* @__PURE__ */ jsx136(SelectLabel2, {
                children: "South America"
              }),
              /* @__PURE__ */ jsx136(SelectItem2, {
                value: "art",
                children: "Argentina Time (ART)"
              }),
              /* @__PURE__ */ jsx136(SelectItem2, {
                value: "bot",
                children: "Bolivia Time (BOT)"
              }),
              /* @__PURE__ */ jsx136(SelectItem2, {
                value: "brt",
                children: "Brasilia Time (BRT)"
              }),
              /* @__PURE__ */ jsx136(SelectItem2, {
                value: "clt",
                children: "Chile Standard Time (CLT)"
              })
            ]
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/examples/separator-demo.tsx
import { jsx as jsx137, jsxs as jsxs74 } from "react/jsx-runtime";
function SeparatorDemo() {
  return /* @__PURE__ */ jsxs74("div", {
    children: [
      /* @__PURE__ */ jsxs74("div", {
        className: "space-y-1",
        children: [
          /* @__PURE__ */ jsx137("h4", {
            className: "font-medium text-sm leading-none",
            children: "Radix Primitives"
          }),
          /* @__PURE__ */ jsx137("p", {
            className: "text-muted-foreground text-sm",
            children: "An open-source UI component library."
          })
        ]
      }),
      /* @__PURE__ */ jsx137(Separator4, {
        className: "my-4"
      }),
      /* @__PURE__ */ jsxs74("div", {
        className: "flex h-5 items-center space-x-4 text-sm",
        children: [
          /* @__PURE__ */ jsx137("div", {
            children: "Blog"
          }),
          /* @__PURE__ */ jsx137(Separator4, {
            orientation: "vertical"
          }),
          /* @__PURE__ */ jsx137("div", {
            children: "Docs"
          }),
          /* @__PURE__ */ jsx137(Separator4, {
            orientation: "vertical"
          }),
          /* @__PURE__ */ jsx137("div", {
            children: "Source"
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/examples/sheet-demo.tsx
import React82 from "react";

// src/shadcn-ui/components/sheet.tsx
import clsx33 from "clsx";
import { jsx as jsx138, jsxs as jsxs75 } from "react/jsx-runtime";
function Sheet({ ...props }) {
  return /* @__PURE__ */ jsx138(Root6, {
    "data-slot": "sheet",
    ...props
  });
}
function SheetTrigger({ ...props }) {
  return /* @__PURE__ */ jsx138(Trigger4, {
    "data-slot": "sheet-trigger",
    ...props
  });
}
function SheetClose({ ...props }) {
  return /* @__PURE__ */ jsx138(Close, {
    "data-slot": "sheet-close",
    ...props
  });
}
function SheetPortal({ ...props }) {
  return /* @__PURE__ */ jsx138(Portal4, {
    "data-slot": "sheet-portal",
    ...props
  });
}
function SheetOverlay({ className, ...props }) {
  return /* @__PURE__ */ jsx138(Overlay, {
    "data-slot": "sheet-overlay",
    className: clsx33("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=open]:animate-in", className),
    ...props
  });
}
function SheetContent({
  className,
  children,
  side = "right",
  ...props
}) {
  return /* @__PURE__ */ jsxs75(SheetPortal, {
    children: [
      /* @__PURE__ */ jsx138(SheetOverlay, {}),
      /* @__PURE__ */ jsxs75(Content5, {
        "data-slot": "sheet-content",
        className: clsx33("fixed z-50 flex flex-col gap-4 bg-background shadow-lg transition ease-in-out data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:duration-300 data-[state=open]:duration-500", side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm", side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm", side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b", side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t", className),
        ...props,
        children: [
          children,
          /* @__PURE__ */ jsxs75(Close, {
            className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
            children: [
              /* @__PURE__ */ jsx138(SvgIcon, {
                iconId: "X",
                className: "size-4"
              }),
              /* @__PURE__ */ jsx138("span", {
                className: "sr-only",
                children: "Close"
              })
            ]
          })
        ]
      })
    ]
  });
}
function SheetHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx138("div", {
    "data-slot": "sheet-header",
    className: clsx33("flex flex-col gap-1.5 p-4", className),
    ...props
  });
}
function SheetFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx138("div", {
    "data-slot": "sheet-footer",
    className: clsx33("mt-auto flex flex-col gap-2 p-4", className),
    ...props
  });
}
function SheetTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx138(Title, {
    "data-slot": "sheet-title",
    className: clsx33("font-semibold text-foreground", className),
    ...props
  });
}
function SheetDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx138(Description, {
    "data-slot": "sheet-description",
    className: clsx33("text-muted-foreground text-sm", className),
    ...props
  });
}

// src/shadcn-ui/examples/sheet-demo.tsx
import { jsx as jsx139, jsxs as jsxs76 } from "react/jsx-runtime";
function SheetDemo() {
  const nameId = React82.useId();
  const usernameId = React82.useId();
  return /* @__PURE__ */ jsxs76(Sheet, {
    children: [
      /* @__PURE__ */ jsx139(SheetTrigger, {
        asChild: true,
        children: /* @__PURE__ */ jsx139(Button, {
          variant: "outline",
          children: "Open"
        })
      }),
      /* @__PURE__ */ jsxs76(SheetContent, {
        children: [
          /* @__PURE__ */ jsxs76(SheetHeader, {
            children: [
              /* @__PURE__ */ jsx139(SheetTitle, {
                children: "Edit profile"
              }),
              /* @__PURE__ */ jsx139(SheetDescription, {
                children: "Make changes to your profile here. Click save when you're done."
              })
            ]
          }),
          /* @__PURE__ */ jsxs76("div", {
            className: "grid flex-1 auto-rows-min gap-6 px-4",
            children: [
              /* @__PURE__ */ jsxs76("div", {
                className: "grid gap-3",
                children: [
                  /* @__PURE__ */ jsx139(Label4, {
                    htmlFor: nameId,
                    children: "Name"
                  }),
                  /* @__PURE__ */ jsx139(Input, {
                    id: nameId,
                    defaultValue: "Pedro Duarte"
                  })
                ]
              }),
              /* @__PURE__ */ jsxs76("div", {
                className: "grid gap-3",
                children: [
                  /* @__PURE__ */ jsx139(Label4, {
                    htmlFor: usernameId,
                    children: "Username"
                  }),
                  /* @__PURE__ */ jsx139(Input, {
                    id: usernameId,
                    defaultValue: "@peduarte"
                  })
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsxs76(SheetFooter, {
            children: [
              /* @__PURE__ */ jsx139(Button, {
                type: "submit",
                children: "Save changes"
              }),
              /* @__PURE__ */ jsx139(SheetClose, {
                asChild: true,
                children: /* @__PURE__ */ jsx139(Button, {
                  variant: "outline",
                  children: "Close"
                })
              })
            ]
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/examples/sheet-side.tsx
import React83 from "react";
import { jsx as jsx140, jsxs as jsxs77 } from "react/jsx-runtime";
var SHEET_SIDES = ["top", "right", "bottom", "left"];
function SheetSide() {
  const nameId = React83.useId();
  const usernameId = React83.useId();
  return /* @__PURE__ */ jsx140("div", {
    className: "grid grid-cols-2 gap-2",
    children: SHEET_SIDES.map((side) => /* @__PURE__ */ jsxs77(Sheet, {
      children: [
        /* @__PURE__ */ jsx140(SheetTrigger, {
          asChild: true,
          children: /* @__PURE__ */ jsx140(Button, {
            variant: "outline",
            children: side
          })
        }),
        /* @__PURE__ */ jsxs77(SheetContent, {
          side,
          children: [
            /* @__PURE__ */ jsxs77(SheetHeader, {
              children: [
                /* @__PURE__ */ jsx140(SheetTitle, {
                  children: "Edit profile"
                }),
                /* @__PURE__ */ jsx140(SheetDescription, {
                  children: "Make changes to your profile here. Click save when you're done."
                })
              ]
            }),
            /* @__PURE__ */ jsxs77("div", {
              className: "grid gap-4 py-4",
              children: [
                /* @__PURE__ */ jsxs77("div", {
                  className: "grid grid-cols-4 items-center gap-4",
                  children: [
                    /* @__PURE__ */ jsx140(Label4, {
                      htmlFor: nameId,
                      className: "text-right",
                      children: "Name"
                    }),
                    /* @__PURE__ */ jsx140(Input, {
                      id: nameId,
                      value: "Pedro Duarte",
                      className: "col-span-3"
                    })
                  ]
                }),
                /* @__PURE__ */ jsxs77("div", {
                  className: "grid grid-cols-4 items-center gap-4",
                  children: [
                    /* @__PURE__ */ jsx140(Label4, {
                      htmlFor: usernameId,
                      className: "text-right",
                      children: "Username"
                    }),
                    /* @__PURE__ */ jsx140(Input, {
                      id: usernameId,
                      value: "@peduarte",
                      className: "col-span-3"
                    })
                  ]
                })
              ]
            }),
            /* @__PURE__ */ jsx140(SheetFooter, {
              children: /* @__PURE__ */ jsx140(SheetClose, {
                asChild: true,
                children: /* @__PURE__ */ jsx140(Button, {
                  type: "submit",
                  children: "Save changes"
                })
              })
            })
          ]
        })
      ]
    }, side))
  });
}

// src/shadcn-ui/components/skeleton.tsx
import clsx34 from "clsx";
import { jsx as jsx141 } from "react/jsx-runtime";
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsx141("div", {
    "data-slot": "skeleton",
    className: clsx34("animate-pulse rounded-md bg-accent", className),
    ...props
  });
}

// src/shadcn-ui/examples/skeleton-card.tsx
import { jsx as jsx142, jsxs as jsxs78 } from "react/jsx-runtime";
function SkeletonCard() {
  return /* @__PURE__ */ jsxs78("div", {
    className: "flex flex-col space-y-3",
    children: [
      /* @__PURE__ */ jsx142(Skeleton, {
        className: "h-[125px] w-[250px] rounded-xl"
      }),
      /* @__PURE__ */ jsxs78("div", {
        className: "space-y-2",
        children: [
          /* @__PURE__ */ jsx142(Skeleton, {
            className: "h-4 w-[250px]"
          }),
          /* @__PURE__ */ jsx142(Skeleton, {
            className: "h-4 w-[200px]"
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/examples/skeleton-demo.tsx
import { jsx as jsx143, jsxs as jsxs79 } from "react/jsx-runtime";
function SkeletonDemo() {
  return /* @__PURE__ */ jsxs79("div", {
    className: "flex items-center space-x-4",
    children: [
      /* @__PURE__ */ jsx143(Skeleton, {
        className: "h-12 w-12 rounded-full"
      }),
      /* @__PURE__ */ jsxs79("div", {
        className: "space-y-2",
        children: [
          /* @__PURE__ */ jsx143(Skeleton, {
            className: "h-4 w-[250px]"
          }),
          /* @__PURE__ */ jsx143(Skeleton, {
            className: "h-4 w-[200px]"
          })
        ]
      })
    ]
  });
}

// src/shadcn-ui/examples/slider-demo.tsx
import { clsx as clsx36 } from "clsx";

// src/shadcn-ui/components/slider.tsx
import React85 from "react";

// ../../node_modules/@radix-ui/react-slider/dist/index.mjs
import * as React84 from "react";
import { jsx as jsx144, jsxs as jsxs80 } from "react/jsx-runtime";
"use client";
var PAGE_KEYS = ["PageUp", "PageDown"];
var ARROW_KEYS3 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
var BACK_KEYS = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
};
var SLIDER_NAME = "Slider";
var [Collection7, useCollection7, createCollectionScope7] = createCollection(SLIDER_NAME);
var [createSliderContext, createSliderScope] = createContextScope(SLIDER_NAME, [
  createCollectionScope7
]);
var [SliderProvider, useSliderContext] = createSliderContext(SLIDER_NAME);
var Slider = React84.forwardRef((props, forwardedRef) => {
  const {
    name,
    min: min2 = 0,
    max: max2 = 100,
    step = 1,
    orientation = "horizontal",
    disabled = false,
    minStepsBetweenThumbs = 0,
    defaultValue = [min2],
    value,
    onValueChange = () => {},
    onValueCommit = () => {},
    inverted = false,
    form,
    ...sliderProps
  } = props;
  const thumbRefs = React84.useRef(/* @__PURE__ */ new Set);
  const valueIndexToChangeRef = React84.useRef(0);
  const isHorizontal = orientation === "horizontal";
  const SliderOrientation = isHorizontal ? SliderHorizontal : SliderVertical;
  const [values = [], setValues] = useControllableState({
    prop: value,
    defaultProp: defaultValue,
    onChange: (value2) => {
      const thumbs = [...thumbRefs.current];
      thumbs[valueIndexToChangeRef.current]?.focus();
      onValueChange(value2);
    }
  });
  const valuesBeforeSlideStartRef = React84.useRef(values);
  function handleSlideStart(value2) {
    const closestIndex = getClosestValueIndex(values, value2);
    updateValues(value2, closestIndex);
  }
  function handleSlideMove(value2) {
    updateValues(value2, valueIndexToChangeRef.current);
  }
  function handleSlideEnd() {
    const prevValue = valuesBeforeSlideStartRef.current[valueIndexToChangeRef.current];
    const nextValue = values[valueIndexToChangeRef.current];
    const hasChanged = nextValue !== prevValue;
    if (hasChanged)
      onValueCommit(values);
  }
  function updateValues(value2, atIndex, { commit } = { commit: false }) {
    const decimalCount = getDecimalCount(step);
    const snapToStep = roundValue(Math.round((value2 - min2) / step) * step + min2, decimalCount);
    const nextValue = clamp(snapToStep, [min2, max2]);
    setValues((prevValues = []) => {
      const nextValues = getNextSortedValues(prevValues, nextValue, atIndex);
      if (hasMinStepsBetweenValues(nextValues, minStepsBetweenThumbs * step)) {
        valueIndexToChangeRef.current = nextValues.indexOf(nextValue);
        const hasChanged = String(nextValues) !== String(prevValues);
        if (hasChanged && commit)
          onValueCommit(nextValues);
        return hasChanged ? nextValues : prevValues;
      } else {
        return prevValues;
      }
    });
  }
  return /* @__PURE__ */ jsx144(SliderProvider, {
    scope: props.__scopeSlider,
    name,
    disabled,
    min: min2,
    max: max2,
    valueIndexToChangeRef,
    thumbs: thumbRefs.current,
    values,
    orientation,
    form,
    children: /* @__PURE__ */ jsx144(Collection7.Provider, { scope: props.__scopeSlider, children: /* @__PURE__ */ jsx144(Collection7.Slot, { scope: props.__scopeSlider, children: /* @__PURE__ */ jsx144(SliderOrientation, {
      "aria-disabled": disabled,
      "data-disabled": disabled ? "" : undefined,
      ...sliderProps,
      ref: forwardedRef,
      onPointerDown: composeEventHandlers(sliderProps.onPointerDown, () => {
        if (!disabled)
          valuesBeforeSlideStartRef.current = values;
      }),
      min: min2,
      max: max2,
      inverted,
      onSlideStart: disabled ? undefined : handleSlideStart,
      onSlideMove: disabled ? undefined : handleSlideMove,
      onSlideEnd: disabled ? undefined : handleSlideEnd,
      onHomeKeyDown: () => !disabled && updateValues(min2, 0, { commit: true }),
      onEndKeyDown: () => !disabled && updateValues(max2, values.length - 1, { commit: true }),
      onStepKeyDown: ({ event, direction: stepDirection }) => {
        if (!disabled) {
          const isPageKey = PAGE_KEYS.includes(event.key);
          const isSkipKey = isPageKey || event.shiftKey && ARROW_KEYS3.includes(event.key);
          const multiplier = isSkipKey ? 10 : 1;
          const atIndex = valueIndexToChangeRef.current;
          const value2 = values[atIndex];
          const stepInDirection = step * multiplier * stepDirection;
          updateValues(value2 + stepInDirection, atIndex, { commit: true });
        }
      }
    }) }) })
  });
});
Slider.displayName = SLIDER_NAME;
var [SliderOrientationProvider, useSliderOrientationContext] = createSliderContext(SLIDER_NAME, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
});
var SliderHorizontal = React84.forwardRef((props, forwardedRef) => {
  const {
    min: min2,
    max: max2,
    dir,
    inverted,
    onSlideStart,
    onSlideMove,
    onSlideEnd,
    onStepKeyDown,
    ...sliderProps
  } = props;
  const [slider, setSlider] = React84.useState(null);
  const composedRefs = useComposedRefs(forwardedRef, (node) => setSlider(node));
  const rectRef = React84.useRef(undefined);
  const direction = useDirection(dir);
  const isDirectionLTR = direction === "ltr";
  const isSlidingFromLeft = isDirectionLTR && !inverted || !isDirectionLTR && inverted;
  function getValueFromPointer(pointerPosition) {
    const rect = rectRef.current || slider.getBoundingClientRect();
    const input = [0, rect.width];
    const output = isSlidingFromLeft ? [min2, max2] : [max2, min2];
    const value = linearScale2(input, output);
    rectRef.current = rect;
    return value(pointerPosition - rect.left);
  }
  return /* @__PURE__ */ jsx144(SliderOrientationProvider, {
    scope: props.__scopeSlider,
    startEdge: isSlidingFromLeft ? "left" : "right",
    endEdge: isSlidingFromLeft ? "right" : "left",
    direction: isSlidingFromLeft ? 1 : -1,
    size: "width",
    children: /* @__PURE__ */ jsx144(SliderImpl, {
      dir: direction,
      "data-orientation": "horizontal",
      ...sliderProps,
      ref: composedRefs,
      style: {
        ...sliderProps.style,
        ["--radix-slider-thumb-transform"]: "translateX(-50%)"
      },
      onSlideStart: (event) => {
        const value = getValueFromPointer(event.clientX);
        onSlideStart?.(value);
      },
      onSlideMove: (event) => {
        const value = getValueFromPointer(event.clientX);
        onSlideMove?.(value);
      },
      onSlideEnd: () => {
        rectRef.current = undefined;
        onSlideEnd?.();
      },
      onStepKeyDown: (event) => {
        const slideDirection = isSlidingFromLeft ? "from-left" : "from-right";
        const isBackKey = BACK_KEYS[slideDirection].includes(event.key);
        onStepKeyDown?.({ event, direction: isBackKey ? -1 : 1 });
      }
    })
  });
});
var SliderVertical = React84.forwardRef((props, forwardedRef) => {
  const {
    min: min2,
    max: max2,
    inverted,
    onSlideStart,
    onSlideMove,
    onSlideEnd,
    onStepKeyDown,
    ...sliderProps
  } = props;
  const sliderRef = React84.useRef(null);
  const ref = useComposedRefs(forwardedRef, sliderRef);
  const rectRef = React84.useRef(undefined);
  const isSlidingFromBottom = !inverted;
  function getValueFromPointer(pointerPosition) {
    const rect = rectRef.current || sliderRef.current.getBoundingClientRect();
    const input = [0, rect.height];
    const output = isSlidingFromBottom ? [max2, min2] : [min2, max2];
    const value = linearScale2(input, output);
    rectRef.current = rect;
    return value(pointerPosition - rect.top);
  }
  return /* @__PURE__ */ jsx144(SliderOrientationProvider, {
    scope: props.__scopeSlider,
    startEdge: isSlidingFromBottom ? "bottom" : "top",
    endEdge: isSlidingFromBottom ? "top" : "bottom",
    size: "height",
    direction: isSlidingFromBottom ? 1 : -1,
    children: /* @__PURE__ */ jsx144(SliderImpl, {
      "data-orientation": "vertical",
      ...sliderProps,
      ref,
      style: {
        ...sliderProps.style,
        ["--radix-slider-thumb-transform"]: "translateY(50%)"
      },
      onSlideStart: (event) => {
        const value = getValueFromPointer(event.clientY);
        onSlideStart?.(value);
      },
      onSlideMove: (event) => {
        const value = getValueFromPointer(event.clientY);
        onSlideMove?.(value);
      },
      onSlideEnd: () => {
        rectRef.current = undefined;
        onSlideEnd?.();
      },
      onStepKeyDown: (event) => {
        const slideDirection = isSlidingFromBottom ? "from-bottom" : "from-top";
        const isBackKey = BACK_KEYS[slideDirection].includes(event.key);
        onStepKeyDown?.({ event, direction: isBackKey ? -1 : 1 });
      }
    })
  });
});
var SliderImpl = React84.forwardRef((props, forwardedRef) => {
  const {
    __scopeSlider,
    onSlideStart,
    onSlideMove,
    onSlideEnd,
    onHomeKeyDown,
    onEndKeyDown,
    onStepKeyDown,
    ...sliderProps
  } = props;
  const context = useSliderContext(SLIDER_NAME, __scopeSlider);
  return /* @__PURE__ */ jsx144(Primitive.span, {
    ...sliderProps,
    ref: forwardedRef,
    onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
      if (event.key === "Home") {
        onHomeKeyDown(event);
        event.preventDefault();
      } else if (event.key === "End") {
        onEndKeyDown(event);
        event.preventDefault();
      } else if (PAGE_KEYS.concat(ARROW_KEYS3).includes(event.key)) {
        onStepKeyDown(event);
        event.preventDefault();
      }
    }),
    onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
      const target = event.target;
      target.setPointerCapture(event.pointerId);
      event.preventDefault();
      if (context.thumbs.has(target)) {
        target.focus();
      } else {
        onSlideStart(event);
      }
    }),
    onPointerMove: composeEventHandlers(props.onPointerMove, (event) => {
      const target = event.target;
      if (target.hasPointerCapture(event.pointerId))
        onSlideMove(event);
    }),
    onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
      const target = event.target;
      if (target.hasPointerCapture(event.pointerId)) {
        target.releasePointerCapture(event.pointerId);
        onSlideEnd(event);
      }
    })
  });
});
var TRACK_NAME = "SliderTrack";
var SliderTrack = React84.forwardRef((props, forwardedRef) => {
  const { __scopeSlider, ...trackProps } = props;
  const context = useSliderContext(TRACK_NAME, __scopeSlider);
  return /* @__PURE__ */ jsx144(Primitive.span, {
    "data-disabled": context.disabled ? "" : undefined,
    "data-orientation": context.orientation,
    ...trackProps,
    ref: forwardedRef
  });
});
SliderTrack.displayName = TRACK_NAME;
var RANGE_NAME = "SliderRange";
var SliderRange = React84.forwardRef((props, forwardedRef) => {
  const { __scopeSlider, ...rangeProps } = props;
  const context = useSliderContext(RANGE_NAME, __scopeSlider);
  const orientation = useSliderOrientationContext(RANGE_NAME, __scopeSlider);
  const ref = React84.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const valuesCount = context.values.length;
  const percentages = context.values.map((value) => convertValueToPercentage(value, context.min, context.max));
  const offsetStart = valuesCount > 1 ? Math.min(...percentages) : 0;
  const offsetEnd = 100 - Math.max(...percentages);
  return /* @__PURE__ */ jsx144(Primitive.span, {
    "data-orientation": context.orientation,
    "data-disabled": context.disabled ? "" : undefined,
    ...rangeProps,
    ref: composedRefs,
    style: {
      ...props.style,
      [orientation.startEdge]: offsetStart + "%",
      [orientation.endEdge]: offsetEnd + "%"
    }
  });
});
SliderRange.displayName = RANGE_NAME;
var THUMB_NAME2 = "SliderThumb";
var SliderThumb = React84.forwardRef((props, forwardedRef) => {
  const getItems = useCollection7(props.__scopeSlider);
  const [thumb, setThumb] = React84.useState(null);
  const composedRefs = useComposedRefs(forwardedRef, (node) => setThumb(node));
  const index2 = React84.useMemo(() => thumb ? getItems().findIndex((item) => item.ref.current === thumb) : -1, [getItems, thumb]);
  return /* @__PURE__ */ jsx144(SliderThumbImpl, { ...props, ref: composedRefs, index: index2 });
});
var SliderThumbImpl = React84.forwardRef((props, forwardedRef) => {
  const { __scopeSlider, index: index2, name, ...thumbProps } = props;
  const context = useSliderContext(THUMB_NAME2, __scopeSlider);
  const orientation = useSliderOrientationContext(THUMB_NAME2, __scopeSlider);
  const [thumb, setThumb] = React84.useState(null);
  const composedRefs = useComposedRefs(forwardedRef, (node) => setThumb(node));
  const isFormControl = thumb ? context.form || !!thumb.closest("form") : true;
  const size4 = useSize(thumb);
  const value = context.values[index2];
  const percent = value === undefined ? 0 : convertValueToPercentage(value, context.min, context.max);
  const label = getLabel(index2, context.values.length);
  const orientationSize = size4?.[orientation.size];
  const thumbInBoundsOffset = orientationSize ? getThumbInBoundsOffset(orientationSize, percent, orientation.direction) : 0;
  React84.useEffect(() => {
    if (thumb) {
      context.thumbs.add(thumb);
      return () => {
        context.thumbs.delete(thumb);
      };
    }
  }, [thumb, context.thumbs]);
  return /* @__PURE__ */ jsxs80("span", {
    style: {
      transform: "var(--radix-slider-thumb-transform)",
      position: "absolute",
      [orientation.startEdge]: `calc(${percent}% + ${thumbInBoundsOffset}px)`
    },
    children: [
      /* @__PURE__ */ jsx144(Collection7.ItemSlot, { scope: props.__scopeSlider, children: /* @__PURE__ */ jsx144(Primitive.span, {
        role: "slider",
        "aria-label": props["aria-label"] || label,
        "aria-valuemin": context.min,
        "aria-valuenow": value,
        "aria-valuemax": context.max,
        "aria-orientation": context.orientation,
        "data-orientation": context.orientation,
        "data-disabled": context.disabled ? "" : undefined,
        tabIndex: context.disabled ? undefined : 0,
        ...thumbProps,
        ref: composedRefs,
        style: value === undefined ? { display: "none" } : props.style,
        onFocus: composeEventHandlers(props.onFocus, () => {
          context.valueIndexToChangeRef.current = index2;
        })
      }) }),
      isFormControl && /* @__PURE__ */ jsx144(SliderBubbleInput, {
        name: name ?? (context.name ? context.name + (context.values.length > 1 ? "[]" : "") : undefined),
        form: context.form,
        value
      }, index2)
    ]
  });
});
SliderThumb.displayName = THUMB_NAME2;
var BUBBLE_INPUT_NAME4 = "RadioBubbleInput";
var SliderBubbleInput = React84.forwardRef(({ __scopeSlider, value, ...props }, forwardedRef) => {
  const ref = React84.useRef(null);
  const composedRefs = useComposedRefs(ref, forwardedRef);
  const prevValue = usePrevious(value);
  React84.useEffect(() => {
    const input = ref.current;
    if (!input)
      return;
    const inputProto = window.HTMLInputElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(inputProto, "value");
    const setValue = descriptor.set;
    if (prevValue !== value && setValue) {
      const event = new Event("input", { bubbles: true });
      setValue.call(input, value);
      input.dispatchEvent(event);
    }
  }, [prevValue, value]);
  return /* @__PURE__ */ jsx144(Primitive.input, {
    style: { display: "none" },
    ...props,
    ref: composedRefs,
    defaultValue: value
  });
});
SliderBubbleInput.displayName = BUBBLE_INPUT_NAME4;
function getNextSortedValues(prevValues = [], nextValue, atIndex) {
  const nextValues = [...prevValues];
  nextValues[atIndex] = nextValue;
  return nextValues.sort((a, b) => a - b);
}
function convertValueToPercentage(value, min2, max2) {
  const maxSteps = max2 - min2;
  const percentPerStep = 100 / maxSteps;
  const percentage = percentPerStep * (value - min2);
  return clamp(percentage, [0, 100]);
}
function getLabel(index2, totalValues) {
  if (totalValues > 2) {
    return `Value ${index2 + 1} of ${totalValues}`;
  } else if (totalValues === 2) {
    return ["Minimum", "Maximum"][index2];
  } else {
    return;
  }
}
function getClosestValueIndex(values, nextValue) {
  if (values.length === 1)
    return 0;
  const distances = values.map((value) => Math.abs(value - nextValue));
  const closestDistance = Math.min(...distances);
  return distances.indexOf(closestDistance);
}
function getThumbInBoundsOffset(width, left, direction) {
  const halfWidth = width / 2;
  const halfPercent = 50;
  const offset4 = linearScale2([0, halfPercent], [0, halfWidth]);
  return (halfWidth - offset4(left) * direction) * direction;
}
function getStepsBetweenValues(values) {
  return values.slice(0, -1).map((value, index2) => values[index2 + 1] - value);
}
function hasMinStepsBetweenValues(values, minStepsBetweenValues) {
  if (minStepsBetweenValues > 0) {
    const stepsBetweenValues = getStepsBetweenValues(values);
    const actualMinStepsBetweenValues = Math.min(...stepsBetweenValues);
    return actualMinStepsBetweenValues >= minStepsBetweenValues;
  }
  return true;
}
function linearScale2(input, output) {
  return (value) => {
    if (input[0] === input[1] || output[0] === output[1])
      return output[0];
    const ratio = (output[1] - output[0]) / (input[1] - input[0]);
    return output[0] + ratio * (value - input[0]);
  };
}
function getDecimalCount(value) {
  return (String(value).split(".")[1] || "").length;
}
function roundValue(value, decimalCount) {
  const rounder = Math.pow(10, decimalCount);
  return Math.round(value * rounder) / rounder;
}
var Root14 = Slider;
var Track = SliderTrack;
var Range = SliderRange;
var Thumb = SliderThumb;

// src/shadcn-ui/components/slider.tsx
import clsx35 from "clsx";
import { jsx as jsx145, jsxs as jsxs81 } from "react/jsx-runtime";
function Slider2({ className, defaultValue, value, min: min2 = 0, max: max2 = 100, ...props }) {
  const _values = React85.useMemo(() => Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min2, max2], [value, defaultValue, min2, max2]);
  return /* @__PURE__ */ jsxs81(Root14, {
    "data-slot": "slider",
    defaultValue,
    value,
    min: min2,
    max: max2,
    className: clsx35("relative flex w-full touch-none select-none items-center data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col data-[disabled]:opacity-50", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx145(Track, {
        "data-slot": "slider-track",
        className: clsx35("relative grow overflow-hidden rounded-full bg-muted data-[orientation=horizontal]:h-1.5 data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-1.5"),
        children: /* @__PURE__ */ jsx145(Range, {
          "data-slot": "slider-range",
          className: clsx35("absolute bg-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full")
        })
      }),
      Array.from({ length: _values.length }, (_, index2) => /* @__PURE__ */ jsx145(Thumb, {
        "data-slot": "slider-thumb",
        className: "block size-4 shrink-0 rounded-full border border-primary bg-background shadow-sm ring-ring/50 transition-[color,box-shadow] hover:ring-4 focus-visible:outline-hidden focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50"
      }, index2))
    ]
  });
}

// src/shadcn-ui/examples/slider-demo.tsx
import { jsx as jsx146 } from "react/jsx-runtime";
function SliderDemo({ className, ...props }) {
  return /* @__PURE__ */ jsx146(Slider2, {
    defaultValue: [50],
    max: 100,
    step: 1,
    className: clsx36("w-[60%]", className),
    ...props
  });
}

// src/shadcn-ui/examples/sonner-demo.tsx
import { toast as toast7 } from "sonner";
import { jsx as jsx147 } from "react/jsx-runtime";
function SonnerDemo() {
  return /* @__PURE__ */ jsx147(Button, {
    variant: "outline",
    onClick: () => toast7("Event has been created", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "Undo",
        onClick: () => console.info("Undo")
      }
    }),
    children: "Show Toast"
  });
}

// src/shadcn-ui/examples/switch-demo.tsx
import React87 from "react";

// ../../node_modules/@radix-ui/react-switch/dist/index.mjs
import * as React86 from "react";
import { jsx as jsx148, jsxs as jsxs82 } from "react/jsx-runtime";
"use client";
var SWITCH_NAME = "Switch";
var [createSwitchContext, createSwitchScope] = createContextScope(SWITCH_NAME);
var [SwitchProvider, useSwitchContext] = createSwitchContext(SWITCH_NAME);
var Switch = React86.forwardRef((props, forwardedRef) => {
  const {
    __scopeSwitch,
    name,
    checked: checkedProp,
    defaultChecked,
    required,
    disabled,
    value = "on",
    onCheckedChange,
    form,
    ...switchProps
  } = props;
  const [button, setButton] = React86.useState(null);
  const composedRefs = useComposedRefs(forwardedRef, (node) => setButton(node));
  const hasConsumerStoppedPropagationRef = React86.useRef(false);
  const isFormControl = button ? form || !!button.closest("form") : true;
  const [checked, setChecked] = useControllableState({
    prop: checkedProp,
    defaultProp: defaultChecked ?? false,
    onChange: onCheckedChange,
    caller: SWITCH_NAME
  });
  return /* @__PURE__ */ jsxs82(SwitchProvider, { scope: __scopeSwitch, checked, disabled, children: [
    /* @__PURE__ */ jsx148(Primitive.button, {
      type: "button",
      role: "switch",
      "aria-checked": checked,
      "aria-required": required,
      "data-state": getState7(checked),
      "data-disabled": disabled ? "" : undefined,
      disabled,
      value,
      ...switchProps,
      ref: composedRefs,
      onClick: composeEventHandlers(props.onClick, (event) => {
        setChecked((prevChecked) => !prevChecked);
        if (isFormControl) {
          hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
          if (!hasConsumerStoppedPropagationRef.current)
            event.stopPropagation();
        }
      })
    }),
    isFormControl && /* @__PURE__ */ jsx148(SwitchBubbleInput, {
      control: button,
      bubbles: !hasConsumerStoppedPropagationRef.current,
      name,
      value,
      checked,
      required,
      disabled,
      form,
      style: { transform: "translateX(-100%)" }
    })
  ] });
});
Switch.displayName = SWITCH_NAME;
var THUMB_NAME3 = "SwitchThumb";
var SwitchThumb = React86.forwardRef((props, forwardedRef) => {
  const { __scopeSwitch, ...thumbProps } = props;
  const context = useSwitchContext(THUMB_NAME3, __scopeSwitch);
  return /* @__PURE__ */ jsx148(Primitive.span, {
    "data-state": getState7(context.checked),
    "data-disabled": context.disabled ? "" : undefined,
    ...thumbProps,
    ref: forwardedRef
  });
});
SwitchThumb.displayName = THUMB_NAME3;
var BUBBLE_INPUT_NAME5 = "SwitchBubbleInput";
var SwitchBubbleInput = React86.forwardRef(({
  __scopeSwitch,
  control,
  checked,
  bubbles = true,
  ...props
}, forwardedRef) => {
  const ref = React86.useRef(null);
  const composedRefs = useComposedRefs(ref, forwardedRef);
  const prevChecked = usePrevious(checked);
  const controlSize = useSize(control);
  React86.useEffect(() => {
    const input = ref.current;
    if (!input)
      return;
    const inputProto = window.HTMLInputElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(inputProto, "checked");
    const setChecked = descriptor.set;
    if (prevChecked !== checked && setChecked) {
      const event = new Event("click", { bubbles });
      setChecked.call(input, checked);
      input.dispatchEvent(event);
    }
  }, [prevChecked, checked, bubbles]);
  return /* @__PURE__ */ jsx148("input", {
    type: "checkbox",
    "aria-hidden": true,
    defaultChecked: checked,
    ...props,
    tabIndex: -1,
    ref: composedRefs,
    style: {
      ...props.style,
      ...controlSize,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  });
});
SwitchBubbleInput.displayName = BUBBLE_INPUT_NAME5;
function getState7(checked) {
  return checked ? "checked" : "unchecked";
}
var Root15 = Switch;
var Thumb2 = SwitchThumb;

// src/shadcn-ui/components/switch.tsx
import clsx37 from "clsx";
import { jsx as jsx149 } from "react/jsx-runtime";
function Switch2({ className, ...props }) {
  return /* @__PURE__ */ jsx149(Root15, {
    "data-slot": "switch",
    className: clsx37("peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input/80", className),
    ...props,
    children: /* @__PURE__ */ jsx149(Thumb2, {
      "data-slot": "switch-thumb",
      className: clsx37("pointer-events-none block size-4 rounded-full bg-background ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0 dark:data-[state=checked]:bg-primary-foreground dark:data-[state=unchecked]:bg-foreground")
    })
  });
}

// src/shadcn-ui/examples/switch-demo.tsx
import { jsx as jsx150, jsxs as jsxs83 } from "react/jsx-runtime";
function SwitchDemo() {
  const airplaneModeId = React87.useId();
  return /* @__PURE__ */ jsxs83("div", {
    className: "flex items-center space-x-2",
    children: [
      /* @__PURE__ */ jsx150(Switch2, {
        id: airplaneModeId
      }),
      /* @__PURE__ */ jsx150(Label4, {
        htmlFor: airplaneModeId,
        children: "Airplane Mode"
      })
    ]
  });
}

// src/shadcn-ui/examples/switch-form.tsx
import React88 from "react";
import { toast as toast8 } from "sonner";
import { jsx as jsx151, jsxs as jsxs84 } from "react/jsx-runtime";
function SwitchForm() {
  const [marketingEmails, setMarketingEmails] = React88.useState(false);
  const [securityEmails, setSecurityEmails] = React88.useState(true);
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const marketing_emails = formData.has("marketing_emails");
    const security_emails = formData.has("security_emails");
    toast8("You submitted the following values", {
      description: /* @__PURE__ */ jsx151("pre", {
        className: "mt-2 w-[320px] rounded-md bg-neutral-950 p-4",
        children: /* @__PURE__ */ jsx151("code", {
          className: "text-white",
          children: JSON.stringify({ marketing_emails, security_emails }, null, 2)
        })
      })
    });
  }
  return /* @__PURE__ */ jsxs84("form", {
    onSubmit: handleSubmit,
    className: "w-full space-y-6",
    children: [
      /* @__PURE__ */ jsxs84("div", {
        children: [
          /* @__PURE__ */ jsx151("h3", {
            className: "mb-4 font-medium text-lg",
            children: "Email Notifications"
          }),
          /* @__PURE__ */ jsxs84("div", {
            className: "space-y-4",
            children: [
              /* @__PURE__ */ jsx151("div", {
                children: /* @__PURE__ */ jsxs84("div", {
                  className: "flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm",
                  children: [
                    /* @__PURE__ */ jsx151("div", {
                      className: "space-y-0.5",
                      children: /* @__PURE__ */ jsx151(Label4, {
                        children: "Marketing emails"
                      })
                    }),
                    /* @__PURE__ */ jsx151("div", {
                      children: /* @__PURE__ */ jsx151(Switch2, {
                        name: "marketing_emails",
                        checked: marketingEmails,
                        onCheckedChange: setMarketingEmails
                      })
                    })
                  ]
                })
              }),
              /* @__PURE__ */ jsx151("div", {
                children: /* @__PURE__ */ jsxs84("div", {
                  className: "flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm",
                  children: [
                    /* @__PURE__ */ jsx151("div", {
                      className: "space-y-0.5",
                      children: /* @__PURE__ */ jsx151(Label4, {
                        children: "Security emails"
                      })
                    }),
                    /* @__PURE__ */ jsx151("div", {
                      children: /* @__PURE__ */ jsx151(Switch2, {
                        name: "security_emails",
                        checked: securityEmails,
                        onCheckedChange: setSecurityEmails,
                        disabled: true,
                        "aria-readonly": true
                      })
                    })
                  ]
                })
              })
            ]
          })
        ]
      }),
      /* @__PURE__ */ jsx151(Button, {
        type: "submit",
        children: "Submit"
      })
    ]
  });
}

// src/shadcn-ui/components/table.tsx
import clsx38 from "clsx";
import { jsx as jsx152 } from "react/jsx-runtime";
function Table({ className, ...props }) {
  return /* @__PURE__ */ jsx152("div", {
    "data-slot": "table-container",
    className: "relative w-full overflow-x-auto",
    children: /* @__PURE__ */ jsx152("table", {
      "data-slot": "table",
      className: clsx38("w-full caption-bottom text-sm", className),
      ...props
    })
  });
}
function TableHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx152("thead", {
    "data-slot": "table-header",
    className: clsx38("[&_tr]:border-b", className),
    ...props
  });
}
function TableBody({ className, ...props }) {
  return /* @__PURE__ */ jsx152("tbody", {
    "data-slot": "table-body",
    className: clsx38("[&_tr:last-child]:border-0", className),
    ...props
  });
}
function TableFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx152("tfoot", {
    "data-slot": "table-footer",
    className: clsx38("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
    ...props
  });
}
function TableRow({ className, ...props }) {
  return /* @__PURE__ */ jsx152("tr", {
    "data-slot": "table-row",
    className: clsx38("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
    ...props
  });
}
function TableHead({ className, ...props }) {
  return /* @__PURE__ */ jsx152("th", {
    "data-slot": "table-head",
    className: clsx38("h-10 whitespace-nowrap px-2 text-left align-middle font-medium text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
    ...props
  });
}
function TableCell({ className, ...props }) {
  return /* @__PURE__ */ jsx152("td", {
    "data-slot": "table-cell",
    className: clsx38("whitespace-nowrap p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
    ...props
  });
}
function TableCaption({ className, ...props }) {
  return /* @__PURE__ */ jsx152("caption", {
    "data-slot": "table-caption",
    className: clsx38("mt-4 text-muted-foreground text-sm", className),
    ...props
  });
}

// src/shadcn-ui/examples/table-demo.tsx
import { jsx as jsx153, jsxs as jsxs85 } from "react/jsx-runtime";
var invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card"
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal"
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer"
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card"
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal"
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer"
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card"
  }
];
function TableDemo() {
  return /* @__PURE__ */ jsxs85(Table, {
    children: [
      /* @__PURE__ */ jsx153(TableCaption, {
        children: "A list of your recent invoices."
      }),
      /* @__PURE__ */ jsx153(TableHeader, {
        children: /* @__PURE__ */ jsxs85(TableRow, {
          children: [
            /* @__PURE__ */ jsx153(TableHead, {
              className: "w-[100px]",
              children: "Invoice"
            }),
            /* @__PURE__ */ jsx153(TableHead, {
              children: "Status"
            }),
            /* @__PURE__ */ jsx153(TableHead, {
              children: "Method"
            }),
            /* @__PURE__ */ jsx153(TableHead, {
              className: "text-right",
              children: "Amount"
            })
          ]
        })
      }),
      /* @__PURE__ */ jsx153(TableBody, {
        children: invoices.map((invoice) => /* @__PURE__ */ jsxs85(TableRow, {
          children: [
            /* @__PURE__ */ jsx153(TableCell, {
              className: "font-medium",
              children: invoice.invoice
            }),
            /* @__PURE__ */ jsx153(TableCell, {
              children: invoice.paymentStatus
            }),
            /* @__PURE__ */ jsx153(TableCell, {
              children: invoice.paymentMethod
            }),
            /* @__PURE__ */ jsx153(TableCell, {
              className: "text-right",
              children: invoice.totalAmount
            })
          ]
        }, invoice.invoice))
      }),
      /* @__PURE__ */ jsx153(TableFooter, {
        children: /* @__PURE__ */ jsxs85(TableRow, {
          children: [
            /* @__PURE__ */ jsx153(TableCell, {
              colSpan: 3,
              children: "Total"
            }),
            /* @__PURE__ */ jsx153(TableCell, {
              className: "text-right",
              children: "$2,500.00"
            })
          ]
        })
      })
    ]
  });
}

// src/shadcn-ui/examples/tabs-demo.tsx
import React90 from "react";

// ../../node_modules/@radix-ui/react-tabs/dist/index.mjs
import * as React89 from "react";
import { jsx as jsx154 } from "react/jsx-runtime";
"use client";
var TABS_NAME = "Tabs";
var [createTabsContext, createTabsScope] = createContextScope(TABS_NAME, [
  createRovingFocusGroupScope
]);
var useRovingFocusGroupScope4 = createRovingFocusGroupScope();
var [TabsProvider, useTabsContext] = createTabsContext(TABS_NAME);
var Tabs = React89.forwardRef((props, forwardedRef) => {
  const {
    __scopeTabs,
    value: valueProp,
    onValueChange,
    defaultValue,
    orientation = "horizontal",
    dir,
    activationMode = "automatic",
    ...tabsProps
  } = props;
  const direction = useDirection(dir);
  const [value, setValue] = useControllableState({
    prop: valueProp,
    onChange: onValueChange,
    defaultProp: defaultValue ?? "",
    caller: TABS_NAME
  });
  return /* @__PURE__ */ jsx154(TabsProvider, {
    scope: __scopeTabs,
    baseId: useId(),
    value,
    onValueChange: setValue,
    orientation,
    dir: direction,
    activationMode,
    children: /* @__PURE__ */ jsx154(Primitive.div, {
      dir: direction,
      "data-orientation": orientation,
      ...tabsProps,
      ref: forwardedRef
    })
  });
});
Tabs.displayName = TABS_NAME;
var TAB_LIST_NAME = "TabsList";
var TabsList = React89.forwardRef((props, forwardedRef) => {
  const { __scopeTabs, loop = true, ...listProps } = props;
  const context = useTabsContext(TAB_LIST_NAME, __scopeTabs);
  const rovingFocusGroupScope = useRovingFocusGroupScope4(__scopeTabs);
  return /* @__PURE__ */ jsx154(Root9, {
    asChild: true,
    ...rovingFocusGroupScope,
    orientation: context.orientation,
    dir: context.dir,
    loop,
    children: /* @__PURE__ */ jsx154(Primitive.div, {
      role: "tablist",
      "aria-orientation": context.orientation,
      ...listProps,
      ref: forwardedRef
    })
  });
});
TabsList.displayName = TAB_LIST_NAME;
var TRIGGER_NAME14 = "TabsTrigger";
var TabsTrigger = React89.forwardRef((props, forwardedRef) => {
  const { __scopeTabs, value, disabled = false, ...triggerProps } = props;
  const context = useTabsContext(TRIGGER_NAME14, __scopeTabs);
  const rovingFocusGroupScope = useRovingFocusGroupScope4(__scopeTabs);
  const triggerId = makeTriggerId2(context.baseId, value);
  const contentId = makeContentId2(context.baseId, value);
  const isSelected = value === context.value;
  return /* @__PURE__ */ jsx154(Item3, {
    asChild: true,
    ...rovingFocusGroupScope,
    focusable: !disabled,
    active: isSelected,
    children: /* @__PURE__ */ jsx154(Primitive.button, {
      type: "button",
      role: "tab",
      "aria-selected": isSelected,
      "aria-controls": contentId,
      "data-state": isSelected ? "active" : "inactive",
      "data-disabled": disabled ? "" : undefined,
      disabled,
      id: triggerId,
      ...triggerProps,
      ref: forwardedRef,
      onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
        if (!disabled && event.button === 0 && event.ctrlKey === false) {
          context.onValueChange(value);
        } else {
          event.preventDefault();
        }
      }),
      onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
        if ([" ", "Enter"].includes(event.key))
          context.onValueChange(value);
      }),
      onFocus: composeEventHandlers(props.onFocus, () => {
        const isAutomaticActivation = context.activationMode !== "manual";
        if (!isSelected && !disabled && isAutomaticActivation) {
          context.onValueChange(value);
        }
      })
    })
  });
});
TabsTrigger.displayName = TRIGGER_NAME14;
var CONTENT_NAME15 = "TabsContent";
var TabsContent = React89.forwardRef((props, forwardedRef) => {
  const { __scopeTabs, value, forceMount, children, ...contentProps } = props;
  const context = useTabsContext(CONTENT_NAME15, __scopeTabs);
  const triggerId = makeTriggerId2(context.baseId, value);
  const contentId = makeContentId2(context.baseId, value);
  const isSelected = value === context.value;
  const isMountAnimationPreventedRef = React89.useRef(isSelected);
  React89.useEffect(() => {
    const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
    return () => cancelAnimationFrame(rAF);
  }, []);
  return /* @__PURE__ */ jsx154(Presence, { present: forceMount || isSelected, children: ({ present }) => /* @__PURE__ */ jsx154(Primitive.div, {
    "data-state": isSelected ? "active" : "inactive",
    "data-orientation": context.orientation,
    role: "tabpanel",
    "aria-labelledby": triggerId,
    hidden: !present,
    id: contentId,
    tabIndex: 0,
    ...contentProps,
    ref: forwardedRef,
    style: {
      ...props.style,
      animationDuration: isMountAnimationPreventedRef.current ? "0s" : undefined
    },
    children: present && children
  }) });
});
TabsContent.displayName = CONTENT_NAME15;
function makeTriggerId2(baseId, value) {
  return `${baseId}-trigger-${value}`;
}
function makeContentId2(baseId, value) {
  return `${baseId}-content-${value}`;
}
var Root211 = Tabs;
var List2 = TabsList;
var Trigger11 = TabsTrigger;
var Content7 = TabsContent;

// src/shadcn-ui/components/tabs.tsx
import clsx39 from "clsx";
import { jsx as jsx155 } from "react/jsx-runtime";
function Tabs2({ className, ...props }) {
  return /* @__PURE__ */ jsx155(Root211, {
    "data-slot": "tabs",
    className: clsx39("flex flex-col gap-2", className),
    ...props
  });
}
function TabsList2({ className, ...props }) {
  return /* @__PURE__ */ jsx155(List2, {
    "data-slot": "tabs-list",
    className: clsx39("inline-flex h-9 w-fit items-center justify-center rounded-lg bg-muted p-[3px] text-muted-foreground", className),
    ...props
  });
}
function TabsTrigger2({ className, ...props }) {
  return /* @__PURE__ */ jsx155(Trigger11, {
    "data-slot": "tabs-trigger",
    className: clsx39("inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-transparent px-2 py-1 font-medium text-foreground text-sm transition-[color,box-shadow] focus-visible:border-ring focus-visible:outline-1 focus-visible:outline-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:shadow-sm dark:text-muted-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props
  });
}
function TabsContent2({ className, ...props }) {
  return /* @__PURE__ */ jsx155(Content7, {
    "data-slot": "tabs-content",
    className: clsx39("flex-1 outline-none", className),
    ...props
  });
}

// src/shadcn-ui/examples/tabs-demo.tsx
import { jsx as jsx156, jsxs as jsxs86 } from "react/jsx-runtime";
function TabsDemo() {
  const nameId = React90.useId();
  const usernameId = React90.useId();
  const currentPasswordId = React90.useId();
  const newPasswordId = React90.useId();
  return /* @__PURE__ */ jsx156("div", {
    className: "flex w-full max-w-sm flex-col gap-6",
    children: /* @__PURE__ */ jsxs86(Tabs2, {
      defaultValue: "account",
      children: [
        /* @__PURE__ */ jsxs86(TabsList2, {
          children: [
            /* @__PURE__ */ jsx156(TabsTrigger2, {
              value: "account",
              children: "Account"
            }),
            /* @__PURE__ */ jsx156(TabsTrigger2, {
              value: "password",
              children: "Password"
            })
          ]
        }),
        /* @__PURE__ */ jsx156(TabsContent2, {
          value: "account",
          children: /* @__PURE__ */ jsxs86(Card, {
            children: [
              /* @__PURE__ */ jsxs86(CardHeader, {
                children: [
                  /* @__PURE__ */ jsx156(CardTitle, {
                    children: "Account"
                  }),
                  /* @__PURE__ */ jsx156(CardDescription, {
                    children: "Make changes to your account here. Click save when you're done."
                  })
                ]
              }),
              /* @__PURE__ */ jsxs86(CardContent, {
                className: "grid gap-6",
                children: [
                  /* @__PURE__ */ jsxs86("div", {
                    className: "grid gap-3",
                    children: [
                      /* @__PURE__ */ jsx156(Label4, {
                        htmlFor: nameId,
                        children: "Name"
                      }),
                      /* @__PURE__ */ jsx156(Input, {
                        id: nameId,
                        defaultValue: "Pedro Duarte"
                      })
                    ]
                  }),
                  /* @__PURE__ */ jsxs86("div", {
                    className: "grid gap-3",
                    children: [
                      /* @__PURE__ */ jsx156(Label4, {
                        htmlFor: usernameId,
                        children: "Username"
                      }),
                      /* @__PURE__ */ jsx156(Input, {
                        id: usernameId,
                        defaultValue: "@peduarte"
                      })
                    ]
                  })
                ]
              }),
              /* @__PURE__ */ jsx156(CardFooter, {
                children: /* @__PURE__ */ jsx156(Button, {
                  children: "Save changes"
                })
              })
            ]
          })
        }),
        /* @__PURE__ */ jsx156(TabsContent2, {
          value: "password",
          children: /* @__PURE__ */ jsxs86(Card, {
            children: [
              /* @__PURE__ */ jsxs86(CardHeader, {
                children: [
                  /* @__PURE__ */ jsx156(CardTitle, {
                    children: "Password"
                  }),
                  /* @__PURE__ */ jsx156(CardDescription, {
                    children: "Change your password here. After saving, you'll be logged out."
                  })
                ]
              }),
              /* @__PURE__ */ jsxs86(CardContent, {
                className: "grid gap-6",
                children: [
                  /* @__PURE__ */ jsxs86("div", {
                    className: "grid gap-3",
                    children: [
                      /* @__PURE__ */ jsx156(Label4, {
                        htmlFor: currentPasswordId,
                        children: "Current password"
                      }),
                      /* @__PURE__ */ jsx156(Input, {
                        id: currentPasswordId,
                        type: "password"
                      })
                    ]
                  }),
                  /* @__PURE__ */ jsxs86("div", {
                    className: "grid gap-3",
                    children: [
                      /* @__PURE__ */ jsx156(Label4, {
                        htmlFor: newPasswordId,
                        children: "New password"
                      }),
                      /* @__PURE__ */ jsx156(Input, {
                        id: newPasswordId,
                        type: "password"
                      })
                    ]
                  })
                ]
              }),
              /* @__PURE__ */ jsx156(CardFooter, {
                children: /* @__PURE__ */ jsx156(Button, {
                  children: "Save password"
                })
              })
            ]
          })
        })
      ]
    })
  });
}

// src/shadcn-ui/components/textarea.tsx
import clsx40 from "clsx";
import { jsx as jsx157 } from "react/jsx-runtime";
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsx157("textarea", {
    "data-slot": "textarea",
    className: clsx40("field-sizing-content flex min-h-16 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-destructive/40", className),
    ...props
  });
}

// src/shadcn-ui/examples/textarea-demo.tsx
import { jsx as jsx158 } from "react/jsx-runtime";
function TextareaDemo() {
  return /* @__PURE__ */ jsx158(Textarea, {
    placeholder: "Type your message here."
  });
}

// src/shadcn-ui/examples/textarea-disabled.tsx
import { jsx as jsx159 } from "react/jsx-runtime";
function TextareaDisabled() {
  return /* @__PURE__ */ jsx159(Textarea, {
    placeholder: "Type your message here.",
    disabled: true
  });
}

// src/shadcn-ui/examples/textarea-form.tsx
import { toast as toast9 } from "sonner";
import { jsx as jsx160, jsxs as jsxs87 } from "react/jsx-runtime";
function TextareaForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const bio = formData.get("bio");
    toast9("You submitted the following values", {
      description: /* @__PURE__ */ jsx160("pre", {
        className: "mt-2 w-[320px] rounded-md bg-neutral-950 p-4",
        children: /* @__PURE__ */ jsx160("code", {
          className: "text-white",
          children: JSON.stringify({ bio }, null, 2)
        })
      })
    });
  }
  return /* @__PURE__ */ jsxs87("form", {
    onSubmit: handleSubmit,
    className: "w-2/3 space-y-6",
    children: [
      /* @__PURE__ */ jsx160(Textarea, {
        name: "bio",
        placeholder: "Tell us a little bit about yourself",
        className: "resize-none"
      }),
      /* @__PURE__ */ jsx160(Button, {
        type: "submit",
        children: "Submit"
      })
    ]
  });
}

// src/shadcn-ui/examples/textarea-with-button.tsx
import { jsx as jsx161, jsxs as jsxs88 } from "react/jsx-runtime";
function TextareaWithButton() {
  return /* @__PURE__ */ jsxs88("div", {
    className: "grid w-full gap-2",
    children: [
      /* @__PURE__ */ jsx161(Textarea, {
        placeholder: "Type your message here."
      }),
      /* @__PURE__ */ jsx161(Button, {
        children: "Send message"
      })
    ]
  });
}

// src/shadcn-ui/examples/textarea-with-label.tsx
import React91 from "react";
import { jsx as jsx162, jsxs as jsxs89 } from "react/jsx-runtime";
function TextareaWithLabel() {
  const messageId = React91.useId();
  return /* @__PURE__ */ jsxs89("div", {
    className: "grid w-full gap-3",
    children: [
      /* @__PURE__ */ jsx162(Label4, {
        htmlFor: messageId,
        children: "Your message"
      }),
      /* @__PURE__ */ jsx162(Textarea, {
        placeholder: "Type your message here.",
        id: messageId
      })
    ]
  });
}

// src/shadcn-ui/examples/textarea-with-text.tsx
import React92 from "react";
import { jsx as jsx163, jsxs as jsxs90 } from "react/jsx-runtime";
function TextareaWithText() {
  const messageId = React92.useId();
  return /* @__PURE__ */ jsxs90("div", {
    className: "grid w-full gap-3",
    children: [
      /* @__PURE__ */ jsx163(Label4, {
        htmlFor: messageId,
        children: "Your Message"
      }),
      /* @__PURE__ */ jsx163(Textarea, {
        placeholder: "Type your message here.",
        id: messageId
      }),
      /* @__PURE__ */ jsx163("p", {
        className: "text-muted-foreground text-sm",
        children: "Your message will be copied to the support team."
      })
    ]
  });
}

// ../../node_modules/@radix-ui/react-toggle/dist/index.mjs
import * as React93 from "react";
import { jsx as jsx164 } from "react/jsx-runtime";
"use client";
var NAME6 = "Toggle";
var Toggle = React93.forwardRef((props, forwardedRef) => {
  const { pressed: pressedProp, defaultPressed, onPressedChange, ...buttonProps } = props;
  const [pressed, setPressed] = useControllableState({
    prop: pressedProp,
    onChange: onPressedChange,
    defaultProp: defaultPressed ?? false,
    caller: NAME6
  });
  return /* @__PURE__ */ jsx164(Primitive.button, {
    type: "button",
    "aria-pressed": pressed,
    "data-state": pressed ? "on" : "off",
    "data-disabled": props.disabled ? "" : undefined,
    ...buttonProps,
    ref: forwardedRef,
    onClick: composeEventHandlers(props.onClick, () => {
      if (!props.disabled) {
        setPressed(!pressed);
      }
    })
  });
});
Toggle.displayName = NAME6;
var Root16 = Toggle;

// src/shadcn-ui/components/toggle.tsx
import { cva as cva5 } from "class-variance-authority";
import clsx41 from "clsx";
import { jsx as jsx165 } from "react/jsx-runtime";
var toggleVariants = cva5("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap", {
  variants: {
    variant: {
      default: "bg-transparent",
      outline: "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground"
    },
    size: {
      default: "h-9 px-2 min-w-9",
      sm: "h-8 px-1.5 min-w-8",
      lg: "h-10 px-2.5 min-w-10"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
function Toggle2({ className, variant, size: size4, ...props }) {
  return /* @__PURE__ */ jsx165(Root16, {
    "data-slot": "toggle",
    className: clsx41(toggleVariants({ variant, size: size4, className })),
    ...props
  });
}

// src/shadcn-ui/examples/toggle-demo.tsx
import { jsx as jsx166 } from "react/jsx-runtime";
function ToggleDemo({ spriteUrl }) {
  return /* @__PURE__ */ jsx166(Toggle2, {
    "aria-label": "Toggle italic",
    children: /* @__PURE__ */ jsx166(SpriteIcon, {
      iconId: "Bold",
      className: "h-4 w-4",
      spriteUrl
    })
  });
}

// src/shadcn-ui/examples/toggle-disabled.tsx
import { jsx as jsx167 } from "react/jsx-runtime";
function ToggleDisabled({ spriteUrl }) {
  return /* @__PURE__ */ jsx167(Toggle2, {
    "aria-label": "Toggle italic",
    disabled: true,
    children: /* @__PURE__ */ jsx167(SpriteIcon, {
      iconId: "Underline",
      className: "h-4 w-4",
      spriteUrl
    })
  });
}

// src/shadcn-ui/components/toggle-group.tsx
import React95 from "react";

// ../../node_modules/@radix-ui/react-toggle-group/dist/index.mjs
import React94 from "react";
import { jsx as jsx168 } from "react/jsx-runtime";
"use client";
var TOGGLE_GROUP_NAME = "ToggleGroup";
var [createToggleGroupContext, createToggleGroupScope] = createContextScope(TOGGLE_GROUP_NAME, [
  createRovingFocusGroupScope
]);
var useRovingFocusGroupScope5 = createRovingFocusGroupScope();
var ToggleGroup = React94.forwardRef((props, forwardedRef) => {
  const { type, ...toggleGroupProps } = props;
  if (type === "single") {
    const singleProps = toggleGroupProps;
    return /* @__PURE__ */ jsx168(ToggleGroupImplSingle, { ...singleProps, ref: forwardedRef });
  }
  if (type === "multiple") {
    const multipleProps = toggleGroupProps;
    return /* @__PURE__ */ jsx168(ToggleGroupImplMultiple, { ...multipleProps, ref: forwardedRef });
  }
  throw new Error(`Missing prop \`type\` expected on \`${TOGGLE_GROUP_NAME}\``);
});
ToggleGroup.displayName = TOGGLE_GROUP_NAME;
var [ToggleGroupValueProvider, useToggleGroupValueContext] = createToggleGroupContext(TOGGLE_GROUP_NAME);
var ToggleGroupImplSingle = React94.forwardRef((props, forwardedRef) => {
  const {
    value: valueProp,
    defaultValue,
    onValueChange = () => {},
    ...toggleGroupSingleProps
  } = props;
  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue ?? "",
    onChange: onValueChange,
    caller: TOGGLE_GROUP_NAME
  });
  return /* @__PURE__ */ jsx168(ToggleGroupValueProvider, {
    scope: props.__scopeToggleGroup,
    type: "single",
    value: React94.useMemo(() => value ? [value] : [], [value]),
    onItemActivate: setValue,
    onItemDeactivate: React94.useCallback(() => setValue(""), [setValue]),
    children: /* @__PURE__ */ jsx168(ToggleGroupImpl, { ...toggleGroupSingleProps, ref: forwardedRef })
  });
});
var ToggleGroupImplMultiple = React94.forwardRef((props, forwardedRef) => {
  const {
    value: valueProp,
    defaultValue,
    onValueChange = () => {},
    ...toggleGroupMultipleProps
  } = props;
  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue ?? [],
    onChange: onValueChange,
    caller: TOGGLE_GROUP_NAME
  });
  const handleButtonActivate = React94.useCallback((itemValue) => setValue((prevValue = []) => [...prevValue, itemValue]), [setValue]);
  const handleButtonDeactivate = React94.useCallback((itemValue) => setValue((prevValue = []) => prevValue.filter((value2) => value2 !== itemValue)), [setValue]);
  return /* @__PURE__ */ jsx168(ToggleGroupValueProvider, {
    scope: props.__scopeToggleGroup,
    type: "multiple",
    value,
    onItemActivate: handleButtonActivate,
    onItemDeactivate: handleButtonDeactivate,
    children: /* @__PURE__ */ jsx168(ToggleGroupImpl, { ...toggleGroupMultipleProps, ref: forwardedRef })
  });
});
ToggleGroup.displayName = TOGGLE_GROUP_NAME;
var [ToggleGroupContext, useToggleGroupContext] = createToggleGroupContext(TOGGLE_GROUP_NAME);
var ToggleGroupImpl = React94.forwardRef((props, forwardedRef) => {
  const {
    __scopeToggleGroup,
    disabled = false,
    rovingFocus = true,
    orientation,
    dir,
    loop = true,
    ...toggleGroupProps
  } = props;
  const rovingFocusGroupScope = useRovingFocusGroupScope5(__scopeToggleGroup);
  const direction = useDirection(dir);
  const commonProps = { role: "group", dir: direction, ...toggleGroupProps };
  return /* @__PURE__ */ jsx168(ToggleGroupContext, { scope: __scopeToggleGroup, rovingFocus, disabled, children: rovingFocus ? /* @__PURE__ */ jsx168(Root9, {
    asChild: true,
    ...rovingFocusGroupScope,
    orientation,
    dir: direction,
    loop,
    children: /* @__PURE__ */ jsx168(Primitive.div, { ...commonProps, ref: forwardedRef })
  }) : /* @__PURE__ */ jsx168(Primitive.div, { ...commonProps, ref: forwardedRef }) });
});
var ITEM_NAME10 = "ToggleGroupItem";
var ToggleGroupItem = React94.forwardRef((props, forwardedRef) => {
  const valueContext = useToggleGroupValueContext(ITEM_NAME10, props.__scopeToggleGroup);
  const context = useToggleGroupContext(ITEM_NAME10, props.__scopeToggleGroup);
  const rovingFocusGroupScope = useRovingFocusGroupScope5(props.__scopeToggleGroup);
  const pressed = valueContext.value.includes(props.value);
  const disabled = context.disabled || props.disabled;
  const commonProps = { ...props, pressed, disabled };
  const ref = React94.useRef(null);
  return context.rovingFocus ? /* @__PURE__ */ jsx168(Item3, {
    asChild: true,
    ...rovingFocusGroupScope,
    focusable: !disabled,
    active: pressed,
    ref,
    children: /* @__PURE__ */ jsx168(ToggleGroupItemImpl, { ...commonProps, ref: forwardedRef })
  }) : /* @__PURE__ */ jsx168(ToggleGroupItemImpl, { ...commonProps, ref: forwardedRef });
});
ToggleGroupItem.displayName = ITEM_NAME10;
var ToggleGroupItemImpl = React94.forwardRef((props, forwardedRef) => {
  const { __scopeToggleGroup, value, ...itemProps } = props;
  const valueContext = useToggleGroupValueContext(ITEM_NAME10, __scopeToggleGroup);
  const singleProps = { role: "radio", "aria-checked": props.pressed, "aria-pressed": undefined };
  const typeProps = valueContext.type === "single" ? singleProps : undefined;
  return /* @__PURE__ */ jsx168(Toggle, {
    ...typeProps,
    ...itemProps,
    ref: forwardedRef,
    onPressedChange: (pressed) => {
      if (pressed) {
        valueContext.onItemActivate(value);
      } else {
        valueContext.onItemDeactivate(value);
      }
    }
  });
});
var Root212 = ToggleGroup;
var Item26 = ToggleGroupItem;

// src/shadcn-ui/components/toggle-group.tsx
import clsx42 from "clsx";
import { jsx as jsx169 } from "react/jsx-runtime";
var ToggleGroupContext2 = React95.createContext({
  size: "default",
  variant: "default"
});
function ToggleGroup2({ className, variant, size: size4, children, ...props }) {
  return /* @__PURE__ */ jsx169(Root212, {
    "data-slot": "toggle-group",
    "data-variant": variant,
    "data-size": size4,
    className: clsx42("group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs", className),
    ...props,
    children: /* @__PURE__ */ jsx169(ToggleGroupContext2.Provider, {
      value: { variant, size: size4 },
      children
    })
  });
}
function ToggleGroupItem2({ className, children, variant, size: size4, ...props }) {
  const context = React95.useContext(ToggleGroupContext2);
  return /* @__PURE__ */ jsx169(Item26, {
    "data-slot": "toggle-group-item",
    "data-variant": context.variant || variant,
    "data-size": context.size || size4,
    className: clsx42(toggleVariants({
      variant: context.variant || variant,
      size: context.size || size4
    }), "min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l", className),
    ...props,
    children
  });
}

// src/shadcn-ui/examples/toggle-group-demo.tsx
import { jsx as jsx170, jsxs as jsxs91 } from "react/jsx-runtime";
function ToggleGroupDemo({ spriteUrl }) {
  return /* @__PURE__ */ jsxs91(ToggleGroup2, {
    variant: "outline",
    type: "multiple",
    children: [
      /* @__PURE__ */ jsx170(ToggleGroupItem2, {
        value: "bold",
        "aria-label": "Toggle bold",
        children: /* @__PURE__ */ jsx170(SpriteIcon, {
          iconId: "Bold",
          className: "h-4 w-4",
          spriteUrl
        })
      }),
      /* @__PURE__ */ jsx170(ToggleGroupItem2, {
        value: "italic",
        "aria-label": "Toggle italic",
        children: /* @__PURE__ */ jsx170(SpriteIcon, {
          iconId: "Italic",
          className: "h-4 w-4",
          spriteUrl
        })
      }),
      /* @__PURE__ */ jsx170(ToggleGroupItem2, {
        value: "strikethrough",
        "aria-label": "Toggle strikethrough",
        children: /* @__PURE__ */ jsx170(SpriteIcon, {
          iconId: "Underline",
          className: "h-4 w-4",
          spriteUrl
        })
      })
    ]
  });
}

// src/shadcn-ui/examples/toggle-group-disabled.tsx
import { jsx as jsx171, jsxs as jsxs92 } from "react/jsx-runtime";
function ToggleGroupDemo2({ spriteUrl }) {
  return /* @__PURE__ */ jsxs92(ToggleGroup2, {
    type: "multiple",
    disabled: true,
    children: [
      /* @__PURE__ */ jsx171(ToggleGroupItem2, {
        value: "bold",
        "aria-label": "Toggle bold",
        children: /* @__PURE__ */ jsx171(SpriteIcon, {
          iconId: "Bold",
          className: "h-4 w-4",
          spriteUrl
        })
      }),
      /* @__PURE__ */ jsx171(ToggleGroupItem2, {
        value: "italic",
        "aria-label": "Toggle italic",
        children: /* @__PURE__ */ jsx171(SpriteIcon, {
          iconId: "Italic",
          className: "h-4 w-4",
          spriteUrl
        })
      }),
      /* @__PURE__ */ jsx171(ToggleGroupItem2, {
        value: "strikethrough",
        "aria-label": "Toggle strikethrough",
        children: /* @__PURE__ */ jsx171(SpriteIcon, {
          iconId: "Underline",
          className: "h-4 w-4",
          spriteUrl
        })
      })
    ]
  });
}

// src/shadcn-ui/examples/toggle-group-lg.tsx
import { jsx as jsx172, jsxs as jsxs93 } from "react/jsx-runtime";
function ToggleGroupDemo3({ spriteUrl }) {
  return /* @__PURE__ */ jsxs93(ToggleGroup2, {
    type: "multiple",
    size: "lg",
    children: [
      /* @__PURE__ */ jsx172(ToggleGroupItem2, {
        value: "bold",
        "aria-label": "Toggle bold",
        children: /* @__PURE__ */ jsx172(SpriteIcon, {
          iconId: "Bold",
          className: "h-4 w-4",
          spriteUrl
        })
      }),
      /* @__PURE__ */ jsx172(ToggleGroupItem2, {
        value: "italic",
        "aria-label": "Toggle italic",
        children: /* @__PURE__ */ jsx172(SpriteIcon, {
          iconId: "Italic",
          className: "h-4 w-4",
          spriteUrl
        })
      }),
      /* @__PURE__ */ jsx172(ToggleGroupItem2, {
        value: "strikethrough",
        "aria-label": "Toggle strikethrough",
        children: /* @__PURE__ */ jsx172(SpriteIcon, {
          iconId: "Underline",
          className: "h-4 w-4",
          spriteUrl
        })
      })
    ]
  });
}

// src/shadcn-ui/examples/toggle-group-outline.tsx
import { jsx as jsx173, jsxs as jsxs94 } from "react/jsx-runtime";
function ToggleGroupDemo4({ spriteUrl }) {
  return /* @__PURE__ */ jsxs94(ToggleGroup2, {
    type: "multiple",
    variant: "outline",
    children: [
      /* @__PURE__ */ jsx173(ToggleGroupItem2, {
        value: "bold",
        "aria-label": "Toggle bold",
        children: /* @__PURE__ */ jsx173(SpriteIcon, {
          iconId: "Bold",
          className: "h-4 w-4",
          spriteUrl
        })
      }),
      /* @__PURE__ */ jsx173(ToggleGroupItem2, {
        value: "italic",
        "aria-label": "Toggle italic",
        children: /* @__PURE__ */ jsx173(SpriteIcon, {
          iconId: "Italic",
          className: "h-4 w-4",
          spriteUrl
        })
      }),
      /* @__PURE__ */ jsx173(ToggleGroupItem2, {
        value: "strikethrough",
        "aria-label": "Toggle strikethrough",
        children: /* @__PURE__ */ jsx173(SpriteIcon, {
          iconId: "Underline",
          className: "h-4 w-4",
          spriteUrl
        })
      })
    ]
  });
}

// src/shadcn-ui/examples/toggle-group-single.tsx
import { jsx as jsx174, jsxs as jsxs95 } from "react/jsx-runtime";
function ToggleGroupDemo5({ spriteUrl }) {
  return /* @__PURE__ */ jsxs95(ToggleGroup2, {
    type: "single",
    children: [
      /* @__PURE__ */ jsx174(ToggleGroupItem2, {
        value: "bold",
        "aria-label": "Toggle bold",
        children: /* @__PURE__ */ jsx174(SpriteIcon, {
          iconId: "Bold",
          className: "h-4 w-4",
          spriteUrl
        })
      }),
      /* @__PURE__ */ jsx174(ToggleGroupItem2, {
        value: "italic",
        "aria-label": "Toggle italic",
        children: /* @__PURE__ */ jsx174(SpriteIcon, {
          iconId: "Italic",
          className: "h-4 w-4",
          spriteUrl
        })
      }),
      /* @__PURE__ */ jsx174(ToggleGroupItem2, {
        value: "strikethrough",
        "aria-label": "Toggle strikethrough",
        children: /* @__PURE__ */ jsx174(SpriteIcon, {
          iconId: "Underline",
          className: "h-4 w-4",
          spriteUrl
        })
      })
    ]
  });
}

// src/shadcn-ui/examples/toggle-group-sm.tsx
import { jsx as jsx175, jsxs as jsxs96 } from "react/jsx-runtime";
function ToggleGroupDemo6({ spriteUrl }) {
  return /* @__PURE__ */ jsxs96(ToggleGroup2, {
    type: "single",
    size: "sm",
    children: [
      /* @__PURE__ */ jsx175(ToggleGroupItem2, {
        value: "bold",
        "aria-label": "Toggle bold",
        children: /* @__PURE__ */ jsx175(SpriteIcon, {
          iconId: "Bold",
          className: "h-4 w-4",
          spriteUrl
        })
      }),
      /* @__PURE__ */ jsx175(ToggleGroupItem2, {
        value: "italic",
        "aria-label": "Toggle italic",
        children: /* @__PURE__ */ jsx175(SpriteIcon, {
          iconId: "Italic",
          className: "h-4 w-4",
          spriteUrl
        })
      }),
      /* @__PURE__ */ jsx175(ToggleGroupItem2, {
        value: "strikethrough",
        "aria-label": "Toggle strikethrough",
        children: /* @__PURE__ */ jsx175(SpriteIcon, {
          iconId: "Underline",
          className: "h-4 w-4",
          spriteUrl
        })
      })
    ]
  });
}

// src/shadcn-ui/examples/toggle-lg.tsx
import { jsx as jsx176 } from "react/jsx-runtime";
function ToggleLg({ spriteUrl }) {
  return /* @__PURE__ */ jsx176(Toggle2, {
    size: "lg",
    "aria-label": "Toggle italic",
    children: /* @__PURE__ */ jsx176(SpriteIcon, {
      iconId: "Italic",
      spriteUrl
    })
  });
}

// src/shadcn-ui/examples/toggle-outline.tsx
import { jsx as jsx177 } from "react/jsx-runtime";
function ToggleOutline({ spriteUrl }) {
  return /* @__PURE__ */ jsx177(Toggle2, {
    variant: "outline",
    "aria-label": "Toggle italic",
    children: /* @__PURE__ */ jsx177(SpriteIcon, {
      iconId: "Italic",
      spriteUrl
    })
  });
}

// src/shadcn-ui/examples/toggle-sm.tsx
import { jsx as jsx178 } from "react/jsx-runtime";
function ToggleSm({ spriteUrl }) {
  return /* @__PURE__ */ jsx178(Toggle2, {
    size: "sm",
    "aria-label": "Toggle italic",
    children: /* @__PURE__ */ jsx178(SpriteIcon, {
      iconId: "Italic",
      spriteUrl
    })
  });
}

// src/shadcn-ui/examples/toggle-with-text.tsx
import { jsx as jsx179, jsxs as jsxs97 } from "react/jsx-runtime";
function ToggleWithText({ spriteUrl }) {
  return /* @__PURE__ */ jsxs97(Toggle2, {
    "aria-label": "Toggle italic",
    children: [
      /* @__PURE__ */ jsx179(SpriteIcon, {
        iconId: "Italic",
        spriteUrl
      }),
      "Italic"
    ]
  });
}

// src/shadcn-ui/examples/tooltip-demo.tsx
import { jsx as jsx180, jsxs as jsxs98 } from "react/jsx-runtime";
function TooltipDemo() {
  return /* @__PURE__ */ jsxs98(Tooltip2, {
    children: [
      /* @__PURE__ */ jsx180(TooltipTrigger2, {
        asChild: true,
        children: /* @__PURE__ */ jsx180(Button, {
          variant: "outline",
          children: "Hover"
        })
      }),
      /* @__PURE__ */ jsx180(TooltipContent2, {
        children: /* @__PURE__ */ jsx180("p", {
          children: "Add to library"
        })
      })
    ]
  });
}

// src/shadcn-ui/examples/typography-blockquote.tsx
import { jsx as jsx181 } from "react/jsx-runtime";
function TypographyBlockquote() {
  return /* @__PURE__ */ jsx181("blockquote", {
    className: "mt-6 border-l-2 pl-6 italic",
    children: `"After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the privilege."`
  });
}

// src/shadcn-ui/examples/typography-demo.tsx
import { jsx as jsx182, jsxs as jsxs99 } from "react/jsx-runtime";
function TypographyDemo() {
  return /* @__PURE__ */ jsxs99("div", {
    children: [
      /* @__PURE__ */ jsx182("h1", {
        className: "scroll-m-20 text-balance font-extrabold text-4xl tracking-tight",
        children: "Taxing Laughter: The Joke Tax Chronicles"
      }),
      /* @__PURE__ */ jsx182("p", {
        className: "text-muted-foreground text-xl leading-7 [&:not(:first-child)]:mt-6",
        children: "Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne. One day, his advisors came to him with a problem: the kingdom was running out of money."
      }),
      /* @__PURE__ */ jsx182("h2", {
        className: "mt-10 scroll-m-20 border-b pb-2 font-semibold text-3xl tracking-tight transition-colors first:mt-0",
        children: "The King's Plan"
      }),
      /* @__PURE__ */ jsxs99("p", {
        className: "leading-7 [&:not(:first-child)]:mt-6",
        children: [
          "The king thought long and hard, and finally came up with",
          " ",
          /* @__PURE__ */ jsx182("a", {
            href: "#brilliant-plan",
            className: "font-medium text-primary underline underline-offset-4",
            children: "a brilliant plan"
          }),
          ": he would tax the jokes in the kingdom."
        ]
      }),
      /* @__PURE__ */ jsx182("blockquote", {
        className: "mt-6 border-l-2 pl-6 italic",
        children: `"After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the privilege."`
      }),
      /* @__PURE__ */ jsx182("h3", {
        className: "mt-8 scroll-m-20 font-semibold text-2xl tracking-tight",
        children: "The Joke Tax"
      }),
      /* @__PURE__ */ jsx182("p", {
        className: "leading-7 [&:not(:first-child)]:mt-6",
        children: "The king's subjects were not amused. They grumbled and complained, but the king was firm:"
      }),
      /* @__PURE__ */ jsxs99("ul", {
        className: "my-6 ml-6 list-disc [&>li]:mt-2",
        children: [
          /* @__PURE__ */ jsx182("li", {
            children: "1st level of puns: 5 gold coins"
          }),
          /* @__PURE__ */ jsx182("li", {
            children: "2nd level of jokes: 10 gold coins"
          }),
          /* @__PURE__ */ jsx182("li", {
            children: "3rd level of one-liners : 20 gold coins"
          })
        ]
      }),
      /* @__PURE__ */ jsx182("p", {
        className: "leading-7 [&:not(:first-child)]:mt-6",
        children: "As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was one person who refused to let the king's foolishness get him down: a court jester named Jokester."
      }),
      /* @__PURE__ */ jsx182("h3", {
        className: "mt-8 scroll-m-20 font-semibold text-2xl tracking-tight",
        children: "Jokester's Revolt"
      }),
      /* @__PURE__ */ jsx182("p", {
        className: "leading-7 [&:not(:first-child)]:mt-6",
        children: "Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place: under the king's pillow, in his soup, even in the royal toilet. The king was furious, but he couldn't seem to stop Jokester."
      }),
      /* @__PURE__ */ jsx182("p", {
        className: "leading-7 [&:not(:first-child)]:mt-6",
        children: "And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny that they couldn't help but laugh. And once they started laughing, they couldn't stop."
      }),
      /* @__PURE__ */ jsx182("h3", {
        className: "mt-8 scroll-m-20 font-semibold text-2xl tracking-tight",
        children: "The People's Rebellion"
      }),
      /* @__PURE__ */ jsx182("p", {
        className: "leading-7 [&:not(:first-child)]:mt-6",
        children: "The people of the kingdom, feeling uplifted by the laughter, started to tell jokes and puns again, and soon the entire kingdom was in on the joke."
      }),
      /* @__PURE__ */ jsx182("div", {
        className: "my-6 w-full overflow-y-auto",
        children: /* @__PURE__ */ jsxs99("table", {
          className: "w-full",
          children: [
            /* @__PURE__ */ jsx182("thead", {
              children: /* @__PURE__ */ jsxs99("tr", {
                className: "m-0 border-t p-0 even:bg-muted",
                children: [
                  /* @__PURE__ */ jsx182("th", {
                    className: "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
                    children: "King's Treasury"
                  }),
                  /* @__PURE__ */ jsx182("th", {
                    className: "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
                    children: "People's happiness"
                  })
                ]
              })
            }),
            /* @__PURE__ */ jsxs99("tbody", {
              children: [
                /* @__PURE__ */ jsxs99("tr", {
                  className: "m-0 border-t p-0 even:bg-muted",
                  children: [
                    /* @__PURE__ */ jsx182("td", {
                      className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                      children: "Empty"
                    }),
                    /* @__PURE__ */ jsx182("td", {
                      className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                      children: "Overflowing"
                    })
                  ]
                }),
                /* @__PURE__ */ jsxs99("tr", {
                  className: "m-0 border-t p-0 even:bg-muted",
                  children: [
                    /* @__PURE__ */ jsx182("td", {
                      className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                      children: "Modest"
                    }),
                    /* @__PURE__ */ jsx182("td", {
                      className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                      children: "Satisfied"
                    })
                  ]
                }),
                /* @__PURE__ */ jsxs99("tr", {
                  className: "m-0 border-t p-0 even:bg-muted",
                  children: [
                    /* @__PURE__ */ jsx182("td", {
                      className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                      children: "Full"
                    }),
                    /* @__PURE__ */ jsx182("td", {
                      className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                      children: "Ecstatic"
                    })
                  ]
                })
              ]
            })
          ]
        })
      }),
      /* @__PURE__ */ jsx182("p", {
        className: "leading-7 [&:not(:first-child)]:mt-6",
        children: "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax. Jokester was declared a hero, and the kingdom lived happily ever after."
      }),
      /* @__PURE__ */ jsx182("p", {
        className: "leading-7 [&:not(:first-child)]:mt-6",
        children: "The moral of the story is: never underestimate the power of a good laugh and always be careful of bad ideas."
      })
    ]
  });
}

// src/shadcn-ui/examples/typography-h1.tsx
import { jsx as jsx183 } from "react/jsx-runtime";
function TypographyH1() {
  return /* @__PURE__ */ jsx183("h1", {
    className: "scroll-m-20 text-balance text-center font-extrabold text-4xl tracking-tight",
    children: "Taxing Laughter: The Joke Tax Chronicles"
  });
}

// src/shadcn-ui/examples/typography-h2.tsx
import { jsx as jsx184 } from "react/jsx-runtime";
function TypographyH2() {
  return /* @__PURE__ */ jsx184("h2", {
    className: "scroll-m-20 border-b pb-2 font-semibold text-3xl tracking-tight first:mt-0",
    children: "The People of the Kingdom"
  });
}

// src/shadcn-ui/examples/typography-h3.tsx
import { jsx as jsx185 } from "react/jsx-runtime";
function TypographyH3() {
  return /* @__PURE__ */ jsx185("h3", {
    className: "scroll-m-20 font-semibold text-2xl tracking-tight",
    children: "The Joke Tax"
  });
}

// src/shadcn-ui/examples/typography-h4.tsx
import { jsx as jsx186 } from "react/jsx-runtime";
function TypographyH4() {
  return /* @__PURE__ */ jsx186("h4", {
    className: "scroll-m-20 font-semibold text-xl tracking-tight",
    children: "People stopped telling jokes"
  });
}

// src/shadcn-ui/examples/typography-inline-code.tsx
import { jsx as jsx187 } from "react/jsx-runtime";
function TypographyInlineCode() {
  return /* @__PURE__ */ jsx187("code", {
    className: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono font-semibold text-sm",
    children: "@radix-ui/react-alert-dialog"
  });
}

// src/shadcn-ui/examples/typography-large.tsx
import { jsx as jsx188 } from "react/jsx-runtime";
function TypographyLarge() {
  return /* @__PURE__ */ jsx188("div", {
    className: "font-semibold text-lg",
    children: "Are you absolutely sure?"
  });
}

// src/shadcn-ui/examples/typography-lead.tsx
import { jsx as jsx189 } from "react/jsx-runtime";
function TypographyLead() {
  return /* @__PURE__ */ jsx189("p", {
    className: "text-muted-foreground text-xl",
    children: "A modal dialog that interrupts the user with important content and expects a response."
  });
}

// src/shadcn-ui/examples/typography-list.tsx
import { jsx as jsx190, jsxs as jsxs100 } from "react/jsx-runtime";
function TypographyList() {
  return /* @__PURE__ */ jsxs100("ul", {
    className: "my-6 ml-6 list-disc [&>li]:mt-2",
    children: [
      /* @__PURE__ */ jsx190("li", {
        children: "1st level of puns: 5 gold coins"
      }),
      /* @__PURE__ */ jsx190("li", {
        children: "2nd level of jokes: 10 gold coins"
      }),
      /* @__PURE__ */ jsx190("li", {
        children: "3rd level of one-liners : 20 gold coins"
      })
    ]
  });
}

// src/shadcn-ui/examples/typography-muted.tsx
import { jsx as jsx191 } from "react/jsx-runtime";
function TypographyMuted() {
  return /* @__PURE__ */ jsx191("p", {
    className: "text-muted-foreground text-sm",
    children: "Enter your email address."
  });
}

// src/shadcn-ui/examples/typography-p.tsx
import { jsx as jsx192 } from "react/jsx-runtime";
function TypographyP() {
  return /* @__PURE__ */ jsx192("p", {
    className: "leading-7 [&:not(:first-child)]:mt-6",
    children: "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax."
  });
}

// src/shadcn-ui/examples/typography-small.tsx
import { jsx as jsx193 } from "react/jsx-runtime";
function TypographySmall() {
  return /* @__PURE__ */ jsx193("small", {
    className: "font-medium text-sm leading-none",
    children: "Email address"
  });
}

// src/shadcn-ui/examples/typography-table.tsx
import { jsx as jsx194, jsxs as jsxs101 } from "react/jsx-runtime";
function TypographyTable() {
  return /* @__PURE__ */ jsx194("div", {
    className: "my-6 w-full overflow-y-auto",
    children: /* @__PURE__ */ jsxs101("table", {
      className: "w-full",
      children: [
        /* @__PURE__ */ jsx194("thead", {
          children: /* @__PURE__ */ jsxs101("tr", {
            className: "m-0 border-t p-0 even:bg-muted",
            children: [
              /* @__PURE__ */ jsx194("th", {
                className: "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
                children: "King's Treasury"
              }),
              /* @__PURE__ */ jsx194("th", {
                className: "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
                children: "People's happiness"
              })
            ]
          })
        }),
        /* @__PURE__ */ jsxs101("tbody", {
          children: [
            /* @__PURE__ */ jsxs101("tr", {
              className: "m-0 border-t p-0 even:bg-muted",
              children: [
                /* @__PURE__ */ jsx194("td", {
                  className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                  children: "Empty"
                }),
                /* @__PURE__ */ jsx194("td", {
                  className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                  children: "Overflowing"
                })
              ]
            }),
            /* @__PURE__ */ jsxs101("tr", {
              className: "m-0 border-t p-0 even:bg-muted",
              children: [
                /* @__PURE__ */ jsx194("td", {
                  className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                  children: "Modest"
                }),
                /* @__PURE__ */ jsx194("td", {
                  className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                  children: "Satisfied"
                })
              ]
            }),
            /* @__PURE__ */ jsxs101("tr", {
              className: "m-0 border-t p-0 even:bg-muted",
              children: [
                /* @__PURE__ */ jsx194("td", {
                  className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                  children: "Full"
                }),
                /* @__PURE__ */ jsx194("td", {
                  className: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                  children: "Ecstatic"
                })
              ]
            })
          ]
        })
      ]
    })
  });
}

// src/shadcn-ui/examples/examples-page.tsx
import { jsx as jsx195, jsxs as jsxs102 } from "react/jsx-runtime";
function ReturnToTop({ tableOfContentsId, spriteUrl }) {
  return /* @__PURE__ */ jsx195("a", {
    href: `#${tableOfContentsId}`,
    className: "inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 font-medium text-primary-foreground text-sm transition-colors hover:bg-primary/80 hover:text-foreground",
    "aria-label": "Return to table of contents",
    children: /* @__PURE__ */ jsx195(SpriteIcon, {
      spriteUrl,
      iconId: "ArrowUp",
      className: "h-4 w-4"
    })
  });
}
function ComponentSection({ id, title, tableOfContentsId, spriteUrl, children }) {
  return /* @__PURE__ */ jsxs102("section", {
    id,
    className: "mb-12",
    children: [
      /* @__PURE__ */ jsxs102("div", {
        className: "mb-6 flex items-center justify-between border-b pb-2",
        children: [
          /* @__PURE__ */ jsx195("h2", {
            className: "font-bold text-3xl",
            children: title
          }),
          /* @__PURE__ */ jsx195(ReturnToTop, {
            tableOfContentsId,
            spriteUrl
          })
        ]
      }),
      children
    ]
  });
}
function ComponentExample({ name, children }) {
  return /* @__PURE__ */ jsxs102("div", {
    className: "rounded-lg border bg-background p-6",
    children: [
      /* @__PURE__ */ jsx195("h3", {
        className: "mb-4 font-semibold text-accent-foreground text-lg",
        children: name
      }),
      children
    ]
  });
}
function SpriteExamples({ spriteUrl }) {
  return /* @__PURE__ */ jsxs102("div", {
    className: "p-6",
    children: [
      /* @__PURE__ */ jsx195("h2", {
        className: "mb-4 font-bold text-2xl",
        children: "Lucide Icon Sprites"
      }),
      /* @__PURE__ */ jsxs102("p", {
        className: "mb-6 text-gray-600",
        children: [
          "All ",
          iconNames.length,
          " icons from the lucide sprite sheet"
        ]
      }),
      /* @__PURE__ */ jsx195("div", {
        className: "flex flex-row flex-wrap gap-4",
        children: iconNames.map((iconName) => /* @__PURE__ */ jsx195("div", {
          className: "flex flex-col items-center rounded-lg border bg-background p-3 transition-colors hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:hover:bg-input/50",
          children: /* @__PURE__ */ jsxs102(Tooltip2, {
            children: [
              /* @__PURE__ */ jsx195(TooltipTrigger2, {
                asChild: true,
                children: /* @__PURE__ */ jsx195(SpriteIcon, {
                  spriteUrl,
                  iconId: iconName,
                  className: "h-6 w-6 text-accent-foreground",
                  viewBox: "0 0 24 24"
                })
              }),
              /* @__PURE__ */ jsx195(TooltipContent2, {
                children: /* @__PURE__ */ jsx195("p", {
                  children: iconName
                })
              })
            ]
          })
        }, iconName))
      })
    ]
  });
}
function ComponentExamples({ spriteUrl, exampleUrl }) {
  const spritesId = useId2();
  const accordionId = useId2();
  const alertsId = useId2();
  const avatarId = useId2();
  const badgesId = useId2();
  const breadcrumbsId = useId2();
  const buttonsId = useId2();
  const cardsId = useId2();
  const checkboxesId = useId2();
  const collapsibleId = useId2();
  const comboboxId = useId2();
  const menusId = useId2();
  const dataId = useId2();
  const datePickerId = useId2();
  const dialogsId = useId2();
  const inputsId = useId2();
  const labelsId = useId2();
  const navigationId = useId2();
  const overlaysId = useId2();
  const radioId = useId2();
  const scrollId = useId2();
  const selectsId = useId2();
  const separatorsId = useId2();
  const sheetsId = useId2();
  const skeletonId = useId2();
  const slidersId = useId2();
  const switchesId = useId2();
  const tablesId = useId2();
  const tabsId = useId2();
  const textareasId = useId2();
  const togglesId = useId2();
  const tooltipsId = useId2();
  const typographyId = useId2();
  const notificationsId = useId2();
  const tableOfContentsId = useId2();
  const sections = [
    { id: accordionId, title: "Accordion" },
    { id: alertsId, title: "Alerts" },
    { id: avatarId, title: "Avatar" },
    { id: badgesId, title: "Badges" },
    { id: breadcrumbsId, title: "Breadcrumbs" },
    { id: buttonsId, title: "Buttons" },
    { id: cardsId, title: "Cards" },
    { id: checkboxesId, title: "Checkboxes" },
    { id: collapsibleId, title: "Collapsible" },
    { id: comboboxId, title: "Combobox" },
    { id: menusId, title: "Menus" },
    { id: dataId, title: "Data Display" },
    { id: datePickerId, title: "Date Picker" },
    { id: dialogsId, title: "Dialogs" },
    { id: inputsId, title: "Inputs" },
    { id: labelsId, title: "Labels" },
    { id: navigationId, title: "Navigation" },
    { id: overlaysId, title: "Overlays" },
    { id: radioId, title: "Radio Groups" },
    { id: scrollId, title: "Scroll Areas" },
    { id: selectsId, title: "Selects" },
    { id: separatorsId, title: "Separators" },
    { id: sheetsId, title: "Sheets" },
    { id: skeletonId, title: "Skeleton" },
    { id: slidersId, title: "Sliders" },
    { id: switchesId, title: "Switches" },
    { id: tablesId, title: "Tables" },
    { id: tabsId, title: "Tabs" },
    { id: textareasId, title: "Textareas" },
    { id: togglesId, title: "Toggles" },
    { id: tooltipsId, title: "Tooltips" },
    { id: typographyId, title: "Typography" },
    { id: notificationsId, title: "Notifications" }
  ];
  return /* @__PURE__ */ jsxs102("div", {
    className: "container mx-auto max-w-7xl px-6 py-8",
    children: [
      /* @__PURE__ */ jsxs102("div", {
        className: "mb-8",
        children: [
          /* @__PURE__ */ jsxs102("div", {
            id: tableOfContentsId,
            className: "flex flex-row justify-between",
            children: [
              /* @__PURE__ */ jsx195("h1", {
                className: "mb-4 font-bold text-4xl",
                children: "shadcn/ui Examples"
              }),
              /* @__PURE__ */ jsxs102("div", {
                className: "flex items-center gap-x-4",
                children: [
                  /* @__PURE__ */ jsx195(ThemeSwitch, {
                    spriteUrl
                  }),
                  /* @__PURE__ */ jsx195(Link, {
                    href: "/",
                    children: /* @__PURE__ */ jsx195(SpriteIcon, {
                      spriteUrl,
                      iconId: "House",
                      className: "size-5 text-accent-foreground",
                      viewBox: "0 0 24 24"
                    })
                  })
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsx195("p", {
            className: "mb-6 text-lg text-muted-foreground",
            children: "A comprehensive showcase of all shadcn/ui components with live examples."
          }),
          /* @__PURE__ */ jsxs102("div", {
            className: "mb-8 rounded-lg border bg-muted/10 p-6",
            children: [
              /* @__PURE__ */ jsx195("h2", {
                className: "mb-4 font-semibold text-xl",
                children: "Table of Contents"
              }),
              /* @__PURE__ */ jsx195("div", {
                className: "columns-1 gap-8 sm:columns-2 lg:columns-4",
                children: sections.map((section) => /* @__PURE__ */ jsx195("a", {
                  href: `#${section.id}`,
                  className: "mb-4 block text-primary transition-colors hover:text-primary/80 hover:underline",
                  children: section.title
                }, section.id))
              })
            ]
          })
        ]
      }),
      /* @__PURE__ */ jsxs102("div", {
        className: "space-y-16",
        children: [
          /* @__PURE__ */ jsx195(ComponentSection, {
            id: spritesId,
            title: "Sprite Examples",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsx195("div", {
              className: "max-w-2xl",
              children: /* @__PURE__ */ jsx195(SpriteExamples, {
                spriteUrl
              })
            })
          }),
          /* @__PURE__ */ jsx195("h2", {
            className: "mb-4 font-bold text-4xl",
            children: "Component Examples"
          }),
          /* @__PURE__ */ jsx195(ComponentSection, {
            id: accordionId,
            title: "Accordion",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsx195("div", {
              className: "max-w-2xl",
              children: /* @__PURE__ */ jsx195(ComponentExample, {
                name: "Accordion Demo",
                children: /* @__PURE__ */ jsx195(AccordionDemo, {})
              })
            })
          }),
          /* @__PURE__ */ jsx195(ComponentSection, {
            id: alertsId,
            title: "Alerts",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs102("div", {
              className: "flex max-w-2xl flex-col gap-6",
              children: [
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Alert Demo",
                  children: /* @__PURE__ */ jsx195(AlertDemo, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Alert Destructive",
                  children: /* @__PURE__ */ jsx195(AlertDestructive, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Alert Dialog Demo",
                  children: /* @__PURE__ */ jsx195(AlertDialogDemo, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx195(ComponentSection, {
            id: avatarId,
            title: "Avatar",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs102("div", {
              className: "flex flex-row gap-6",
              children: [
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Avatar Demo",
                  children: /* @__PURE__ */ jsx195(AvatarDemo, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Aspect Ratio Demo",
                  children: /* @__PURE__ */ jsx195(AspectRatioDemo, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx195(ComponentSection, {
            id: badgesId,
            title: "Badges",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs102("div", {
              className: "flex flex-row gap-6",
              children: [
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Badge Demo",
                  children: /* @__PURE__ */ jsx195(BadgeDemo, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Badge Destructive",
                  children: /* @__PURE__ */ jsx195(BadgeDestructive, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Badge Outline",
                  children: /* @__PURE__ */ jsx195(BadgeOutline, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Badge Secondary",
                  children: /* @__PURE__ */ jsx195(BadgeSecondary, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx195(ComponentSection, {
            id: breadcrumbsId,
            title: "Breadcrumbs",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs102("div", {
              className: "flex max-w-2xl flex-col gap-6",
              children: [
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Breadcrumb Demo",
                  children: /* @__PURE__ */ jsx195(BreadcrumbDemo, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Breadcrumb Dropdown",
                  children: /* @__PURE__ */ jsx195(BreadcrumbWithDropdown, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Breadcrumb Ellipsis",
                  children: /* @__PURE__ */ jsx195(BreadcrumbCollapsed, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Breadcrumb Link",
                  children: /* @__PURE__ */ jsx195(BreadcrumbWithCustomSeparator, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Breadcrumb Separator",
                  children: /* @__PURE__ */ jsx195(BreadcrumbWithCustomSeparator2, {
                    spriteUrl
                  })
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx195(ComponentSection, {
            id: buttonsId,
            title: "Buttons",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs102("div", {
              className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
              children: [
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Button Demo",
                  children: /* @__PURE__ */ jsx195(ButtonDemo, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Button As Child",
                  children: /* @__PURE__ */ jsx195(ButtonAsChild, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Button Destructive",
                  children: /* @__PURE__ */ jsx195(ButtonDestructive, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Button Ghost",
                  children: /* @__PURE__ */ jsx195(ButtonGhost, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Button Icon",
                  children: /* @__PURE__ */ jsx195(ButtonIcon, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Button Link",
                  children: /* @__PURE__ */ jsx195(ButtonLink, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Button Loading",
                  children: /* @__PURE__ */ jsx195(ButtonLoading, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Button Outline",
                  children: /* @__PURE__ */ jsx195(ButtonOutline, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Button Secondary",
                  children: /* @__PURE__ */ jsx195(ButtonSecondary, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Button With Icon",
                  children: /* @__PURE__ */ jsx195(ButtonWithIcon, {
                    spriteUrl
                  })
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx195(ComponentSection, {
            id: cardsId,
            title: "Cards",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs102("div", {
              className: "flex flex-col gap-6 lg:flex-row",
              children: [
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Card Demo",
                  children: /* @__PURE__ */ jsx195(CardDemo, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Card With Form",
                  children: /* @__PURE__ */ jsx195(CardWithForm, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx195(ComponentSection, {
            id: checkboxesId,
            title: "Checkboxes",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs102("div", {
              className: "grid grid-cols-1 gap-6 md:grid-cols-2",
              children: [
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Checkbox Demo",
                  children: /* @__PURE__ */ jsx195(CheckboxDemo, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Checkbox Disabled",
                  children: /* @__PURE__ */ jsx195(CheckboxDisabled, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Checkbox Form Multiple",
                  children: /* @__PURE__ */ jsx195(CheckboxReactHookFormMultiple, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Checkbox Form Single",
                  children: /* @__PURE__ */ jsx195(CheckboxReactHookFormSingle, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Checkbox With Text",
                  children: /* @__PURE__ */ jsx195(CheckboxWithText, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx195(ComponentSection, {
            id: collapsibleId,
            title: "Collapsible",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsx195("div", {
              className: "max-w-md",
              children: /* @__PURE__ */ jsx195(ComponentExample, {
                name: "Collapsible Demo",
                children: /* @__PURE__ */ jsx195(CollapsibleDemo, {
                  spriteUrl
                })
              })
            })
          }),
          /* @__PURE__ */ jsx195(ComponentSection, {
            id: comboboxId,
            title: "Combobox",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs102("div", {
              className: "grid grid-cols-1 gap-6 md:grid-cols-2",
              children: [
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Combobox Demo",
                  children: /* @__PURE__ */ jsx195(ComboboxDemo, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Combobox Dropdown Menu",
                  children: /* @__PURE__ */ jsx195(ComboboxDropdownMenu, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Combobox Form",
                  children: /* @__PURE__ */ jsx195(ComboboxForm, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Combobox Popover",
                  children: /* @__PURE__ */ jsx195(ComboboxPopover, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx195(ComponentSection, {
            id: menusId,
            title: "Menus",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs102("div", {
              className: "flex flex-row gap-6",
              children: [
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Context Menu Demo",
                  children: /* @__PURE__ */ jsx195(ContextMenuDemo, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Dropdown Menu Demo",
                  children: /* @__PURE__ */ jsx195(DropdownMenuDemo, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Dropdown Menu Checkboxes",
                  children: /* @__PURE__ */ jsx195(DropdownMenuCheckboxes, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Dropdown Menu Radio Group",
                  children: /* @__PURE__ */ jsx195(DropdownMenuRadioGroupDemo, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Menubar Demo",
                  children: /* @__PURE__ */ jsx195(MenubarDemo, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx195(ComponentSection, {
            id: dialogsId,
            title: "Dialogs",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs102("div", {
              className: "flex flex-row gap-6",
              children: [
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Dialog Demo",
                  children: /* @__PURE__ */ jsx195(DialogDemo, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Dialog Close Button",
                  children: /* @__PURE__ */ jsx195(DialogCloseButton, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx195(ComponentSection, {
            id: inputsId,
            title: "Inputs",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs102("div", {
              className: "grid grid-cols-1 gap-6 md:grid-cols-2",
              children: [
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Input Demo",
                  children: /* @__PURE__ */ jsx195(InputDemo, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Input Disabled",
                  children: /* @__PURE__ */ jsx195(InputDisabled, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Input File",
                  children: /* @__PURE__ */ jsx195(InputFile, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Input Form",
                  children: /* @__PURE__ */ jsx195(InputForm, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Input With Button",
                  children: /* @__PURE__ */ jsx195(InputWithButton, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Input With Label",
                  children: /* @__PURE__ */ jsx195(InputWithLabel, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Input With Text",
                  children: /* @__PURE__ */ jsx195(InputWithText, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx195(ComponentSection, {
            id: labelsId,
            title: "Labels",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsx195("div", {
              className: "max-w-md",
              children: /* @__PURE__ */ jsx195(ComponentExample, {
                name: "Label Demo",
                children: /* @__PURE__ */ jsx195(LabelDemo, {})
              })
            })
          }),
          /* @__PURE__ */ jsx195(ComponentSection, {
            id: navigationId,
            title: "Navigation",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs102("div", {
              className: "flex flex-col gap-6",
              children: [
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Navigation Menu Demo",
                  children: /* @__PURE__ */ jsx195(NavigationMenuDemo, {
                    spriteUrl
                  })
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Pagination Demo",
                  children: /* @__PURE__ */ jsx195(PaginationDemo, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx195(ComponentSection, {
            id: overlaysId,
            title: "Overlays",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs102("div", {
              className: "flex flex-row gap-6",
              children: [
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Hover Card Demo",
                  children: /* @__PURE__ */ jsx195(HoverCardDemo, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Popover Demo",
                  children: /* @__PURE__ */ jsx195(PopoverDemo, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Mode Toggle",
                  children: /* @__PURE__ */ jsx195(ModeToggle, {
                    spriteUrl
                  })
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx195(ComponentSection, {
            id: radioId,
            title: "Radio Groups",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs102("div", {
              className: "flex flex-row gap-6",
              children: [
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Radio Group Demo",
                  children: /* @__PURE__ */ jsx195(RadioGroupDemo, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Radio Group Form",
                  children: /* @__PURE__ */ jsx195(RadioGroupForm, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx195(ComponentSection, {
            id: scrollId,
            title: "Scroll Areas",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs102("div", {
              className: "flex flex-col gap-6 lg:flex-row",
              children: [
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Scroll Area Demo",
                  children: /* @__PURE__ */ jsx195(ScrollAreaDemo, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Scroll Area Horizontal Demo",
                  children: /* @__PURE__ */ jsx195(ScrollAreaHorizontalDemo, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx195(ComponentSection, {
            id: selectsId,
            title: "Selects",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs102("div", {
              className: "grid grid-cols-1 gap-6 md:grid-cols-2",
              children: [
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Select Demo",
                  children: /* @__PURE__ */ jsx195(SelectDemo, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Select Form",
                  children: /* @__PURE__ */ jsx195(SelectForm, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Select Scrollable",
                  children: /* @__PURE__ */ jsx195(SelectScrollable, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx195(ComponentSection, {
            id: separatorsId,
            title: "Separators",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsx195("div", {
              className: "max-w-md",
              children: /* @__PURE__ */ jsx195(ComponentExample, {
                name: "Separator Demo",
                children: /* @__PURE__ */ jsx195(SeparatorDemo, {})
              })
            })
          }),
          /* @__PURE__ */ jsx195(ComponentSection, {
            id: sheetsId,
            title: "Sheets",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs102("div", {
              className: "flex flex-row gap-6",
              children: [
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Sheet Demo",
                  children: /* @__PURE__ */ jsx195(SheetDemo, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Sheet Side",
                  children: /* @__PURE__ */ jsx195(SheetSide, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx195(ComponentSection, {
            id: skeletonId,
            title: "Skeleton",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs102("div", {
              className: "flex flex-col gap-6 lg:flex-row",
              children: [
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Skeleton Demo",
                  children: /* @__PURE__ */ jsx195(SkeletonDemo, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Skeleton Card",
                  children: /* @__PURE__ */ jsx195(SkeletonCard, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx195(ComponentSection, {
            id: slidersId,
            title: "Sliders",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs102("div", {
              className: "max-w-md",
              children: [
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Slider Demo",
                  children: /* @__PURE__ */ jsx195(SliderDemo, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Progress Demo",
                  children: /* @__PURE__ */ jsx195(ProgressDemo, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx195(ComponentSection, {
            id: switchesId,
            title: "Switches",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs102("div", {
              className: "flex flex-row gap-6",
              children: [
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Switch Demo",
                  children: /* @__PURE__ */ jsx195(SwitchDemo, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Switch Form",
                  children: /* @__PURE__ */ jsx195(SwitchForm, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx195(ComponentSection, {
            id: tablesId,
            title: "Tables",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsx195("div", {
              className: "max-w-4xl",
              children: /* @__PURE__ */ jsx195(ComponentExample, {
                name: "Table Demo",
                children: /* @__PURE__ */ jsx195(TableDemo, {})
              })
            })
          }),
          /* @__PURE__ */ jsx195(ComponentSection, {
            id: tabsId,
            title: "Tabs",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsx195("div", {
              className: "max-w-2xl",
              children: /* @__PURE__ */ jsx195(ComponentExample, {
                name: "Tabs Demo",
                children: /* @__PURE__ */ jsx195(TabsDemo, {})
              })
            })
          }),
          /* @__PURE__ */ jsx195(ComponentSection, {
            id: textareasId,
            title: "Textareas",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs102("div", {
              className: "grid grid-cols-1 gap-6 md:grid-cols-2",
              children: [
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Textarea Demo",
                  children: /* @__PURE__ */ jsx195(TextareaDemo, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Textarea Disabled",
                  children: /* @__PURE__ */ jsx195(TextareaDisabled, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Textarea Form",
                  children: /* @__PURE__ */ jsx195(TextareaForm, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Textarea With Button",
                  children: /* @__PURE__ */ jsx195(TextareaWithButton, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Textarea With Label",
                  children: /* @__PURE__ */ jsx195(TextareaWithLabel, {})
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Textarea With Text",
                  children: /* @__PURE__ */ jsx195(TextareaWithText, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx195(ComponentSection, {
            id: togglesId,
            title: "Toggles",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs102("div", {
              className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
              children: [
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Toggle Demo",
                  children: /* @__PURE__ */ jsx195(ToggleDemo, {
                    spriteUrl: exampleUrl
                  })
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Toggle Disabled",
                  children: /* @__PURE__ */ jsx195(ToggleDisabled, {
                    spriteUrl: exampleUrl
                  })
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Toggle Group Demo",
                  children: /* @__PURE__ */ jsx195(ToggleGroupDemo, {
                    spriteUrl: exampleUrl
                  })
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Toggle Group Disabled",
                  children: /* @__PURE__ */ jsx195(ToggleGroupDemo2, {
                    spriteUrl: exampleUrl
                  })
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Toggle Group Large",
                  children: /* @__PURE__ */ jsx195(ToggleGroupDemo3, {
                    spriteUrl: exampleUrl
                  })
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Toggle Group Outline",
                  children: /* @__PURE__ */ jsx195(ToggleGroupDemo4, {
                    spriteUrl: exampleUrl
                  })
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Toggle Group Single",
                  children: /* @__PURE__ */ jsx195(ToggleGroupDemo5, {
                    spriteUrl: exampleUrl
                  })
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Toggle Group Small",
                  children: /* @__PURE__ */ jsx195(ToggleGroupDemo6, {
                    spriteUrl: exampleUrl
                  })
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Toggle Large",
                  children: /* @__PURE__ */ jsx195(ToggleLg, {
                    spriteUrl: exampleUrl
                  })
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Toggle Outline",
                  children: /* @__PURE__ */ jsx195(ToggleOutline, {
                    spriteUrl: exampleUrl
                  })
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Toggle Small",
                  children: /* @__PURE__ */ jsx195(ToggleSm, {
                    spriteUrl: exampleUrl
                  })
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Toggle With Text",
                  children: /* @__PURE__ */ jsx195(ToggleWithText, {
                    spriteUrl: exampleUrl
                  })
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx195(ComponentSection, {
            id: tooltipsId,
            title: "Tooltips",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsx195("div", {
              className: "max-w-md",
              children: /* @__PURE__ */ jsx195(ComponentExample, {
                name: "Tooltip Demo",
                children: /* @__PURE__ */ jsx195(TooltipDemo, {})
              })
            })
          }),
          /* @__PURE__ */ jsx195(ComponentSection, {
            id: typographyId,
            title: "Typography",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsxs102("div", {
              className: "flex max-w-4xl flex-col gap-6",
              children: [
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Typography Demo",
                  children: /* @__PURE__ */ jsx195(TypographyDemo, {})
                }),
                /* @__PURE__ */ jsxs102("div", {
                  className: "grid grid-cols-1 gap-6 md:grid-cols-2",
                  children: [
                    /* @__PURE__ */ jsx195(ComponentExample, {
                      name: "Typography H1",
                      children: /* @__PURE__ */ jsx195(TypographyH1, {})
                    }),
                    /* @__PURE__ */ jsx195(ComponentExample, {
                      name: "Typography H2",
                      children: /* @__PURE__ */ jsx195(TypographyH2, {})
                    }),
                    /* @__PURE__ */ jsx195(ComponentExample, {
                      name: "Typography H3",
                      children: /* @__PURE__ */ jsx195(TypographyH3, {})
                    }),
                    /* @__PURE__ */ jsx195(ComponentExample, {
                      name: "Typography H4",
                      children: /* @__PURE__ */ jsx195(TypographyH4, {})
                    }),
                    /* @__PURE__ */ jsx195(ComponentExample, {
                      name: "Typography Paragraph",
                      children: /* @__PURE__ */ jsx195(TypographyP, {})
                    }),
                    /* @__PURE__ */ jsx195(ComponentExample, {
                      name: "Typography Blockquote",
                      children: /* @__PURE__ */ jsx195(TypographyBlockquote, {})
                    }),
                    /* @__PURE__ */ jsx195(ComponentExample, {
                      name: "Typography List",
                      children: /* @__PURE__ */ jsx195(TypographyList, {})
                    }),
                    /* @__PURE__ */ jsx195(ComponentExample, {
                      name: "Typography Inline Code",
                      children: /* @__PURE__ */ jsx195(TypographyInlineCode, {})
                    }),
                    /* @__PURE__ */ jsx195(ComponentExample, {
                      name: "Typography Lead",
                      children: /* @__PURE__ */ jsx195(TypographyLead, {})
                    }),
                    /* @__PURE__ */ jsx195(ComponentExample, {
                      name: "Typography Large",
                      children: /* @__PURE__ */ jsx195(TypographyLarge, {})
                    }),
                    /* @__PURE__ */ jsx195(ComponentExample, {
                      name: "Typography Small",
                      children: /* @__PURE__ */ jsx195(TypographySmall, {})
                    }),
                    /* @__PURE__ */ jsx195(ComponentExample, {
                      name: "Typography Muted",
                      children: /* @__PURE__ */ jsx195(TypographyMuted, {})
                    })
                  ]
                }),
                /* @__PURE__ */ jsx195(ComponentExample, {
                  name: "Typography Table",
                  children: /* @__PURE__ */ jsx195(TypographyTable, {})
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx195(ComponentSection, {
            id: notificationsId,
            title: "Notifications",
            tableOfContentsId,
            spriteUrl,
            children: /* @__PURE__ */ jsx195("div", {
              className: "max-w-md",
              children: /* @__PURE__ */ jsx195(ComponentExample, {
                name: "Sonner Demo",
                children: /* @__PURE__ */ jsx195(SonnerDemo, {})
              })
            })
          })
        ]
      })
    ]
  });
}
// src/shadcn-ui/components/button-group.tsx
import { cva as cva6 } from "class-variance-authority";
import clsx43 from "clsx";
import { jsx as jsx196 } from "react/jsx-runtime";
var buttonGroupVariants = cva6("flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:gap-2", {
  variants: {
    orientation: {
      horizontal: "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
      vertical: "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none"
    }
  },
  defaultVariants: {
    orientation: "horizontal"
  }
});
function ButtonGroup({ className, orientation, ...props }) {
  return /* @__PURE__ */ jsx196("div", {
    role: "group",
    "data-slot": "button-group",
    "data-orientation": orientation,
    className: clsx43(buttonGroupVariants({ orientation }), className),
    ...props
  });
}
function ButtonGroupText({
  className,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "div";
  return /* @__PURE__ */ jsx196(Comp, {
    className: clsx43("flex items-center gap-2 rounded-md border bg-muted px-4 font-medium text-sm shadow-xs [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none", className),
    ...props
  });
}
function ButtonGroupSeparator({ className, orientation = "vertical", ...props }) {
  return /* @__PURE__ */ jsx196(Separator4, {
    "data-slot": "button-group-separator",
    orientation,
    className: clsx43("!m-0 relative self-stretch bg-input data-[orientation=vertical]:h-auto", className),
    ...props
  });
}
// src/shadcn-ui/components/empty.tsx
import { cva as cva7 } from "class-variance-authority";
import clsx44 from "clsx";
import { jsx as jsx197 } from "react/jsx-runtime";
function Empty({ className, ...props }) {
  return /* @__PURE__ */ jsx197("div", {
    "data-slot": "empty",
    className: clsx44("flex min-w-0 flex-1 flex-col items-center justify-center gap-6 text-balance rounded-lg border-dashed p-6 text-center md:p-12", className),
    ...props
  });
}
function EmptyHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx197("div", {
    "data-slot": "empty-header",
    className: clsx44("flex max-w-sm flex-col items-center gap-2 text-center", className),
    ...props
  });
}
var emptyMediaVariants = cva7("flex shrink-0 items-center justify-center mb-2 [&_svg]:pointer-events-none [&_svg]:shrink-0", {
  variants: {
    variant: {
      default: "bg-transparent",
      icon: "bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-6"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
function EmptyMedia({ className, variant = "default", ...props }) {
  return /* @__PURE__ */ jsx197("div", {
    "data-slot": "empty-icon",
    "data-variant": variant,
    className: clsx44(emptyMediaVariants({ variant, className })),
    ...props
  });
}
function EmptyTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx197("div", {
    "data-slot": "empty-title",
    className: clsx44("font-medium text-lg tracking-tight", className),
    ...props
  });
}
function EmptyDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx197("div", {
    "data-slot": "empty-description",
    className: clsx44("text-muted-foreground text-sm/relaxed [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4", className),
    ...props
  });
}
function EmptyContent({ className, ...props }) {
  return /* @__PURE__ */ jsx197("div", {
    "data-slot": "empty-content",
    className: clsx44("flex w-full min-w-0 max-w-sm flex-col items-center gap-4 text-balance text-sm", className),
    ...props
  });
}

// src/shadcn-ui/components/field.tsx
import { useMemo as useMemo11 } from "react";
import { cva as cva8 } from "class-variance-authority";
import clsx45 from "clsx";
import { jsx as jsx198, jsxs as jsxs103 } from "react/jsx-runtime";
function FieldSet({ className, ...props }) {
  return /* @__PURE__ */ jsx198("fieldset", {
    "data-slot": "field-set",
    className: clsx45("flex flex-col gap-6", "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3", className),
    ...props
  });
}
function FieldLegend({ className, variant = "legend", ...props }) {
  return /* @__PURE__ */ jsx198("legend", {
    "data-slot": "field-legend",
    "data-variant": variant,
    className: clsx45("mb-3 font-medium", "data-[variant=legend]:text-base", "data-[variant=label]:text-sm", className),
    ...props
  });
}
function FieldGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx198("div", {
    "data-slot": "field-group",
    className: clsx45("group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4", className),
    ...props
  });
}
var fieldVariants = cva8("group/field flex w-full gap-3 data-[invalid=true]:text-destructive", {
  variants: {
    orientation: {
      vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],
      horizontal: ["flex-row items-center", "[&>[data-slot=field-label]]:flex-auto", "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"],
      responsive: [
        "flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto",
        "@md/field-group:[&>[data-slot=field-label]]:flex-auto",
        "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
      ]
    }
  },
  defaultVariants: {
    orientation: "vertical"
  }
});
function Field({ className, orientation = "vertical", ...props }) {
  return /* @__PURE__ */ jsx198("div", {
    role: "group",
    "data-slot": "field",
    "data-orientation": orientation,
    className: clsx45(fieldVariants({ orientation }), className),
    ...props
  });
}
function FieldContent({ className, ...props }) {
  return /* @__PURE__ */ jsx198("div", {
    "data-slot": "field-content",
    className: clsx45("group/field-content flex flex-1 flex-col gap-1.5 leading-snug", className),
    ...props
  });
}
function FieldLabel({ className, ...props }) {
  return /* @__PURE__ */ jsx198(Label4, {
    "data-slot": "field-label",
    className: clsx45("group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50", "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4", "has-data-[state=checked]:border-primary has-data-[state=checked]:bg-primary/5 dark:has-data-[state=checked]:bg-primary/10", className),
    ...props
  });
}
function FieldTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx198("div", {
    "data-slot": "field-label",
    className: clsx45("flex w-fit items-center gap-2 font-medium text-sm leading-snug group-data-[disabled=true]/field:opacity-50", className),
    ...props
  });
}
function FieldDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx198("p", {
    "data-slot": "field-description",
    className: clsx45("font-normal text-muted-foreground text-sm leading-normal group-has-[[data-orientation=horizontal]]/field:text-balance", "nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5 last:mt-0", "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4", className),
    ...props
  });
}
function FieldSeparator({
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs103("div", {
    "data-slot": "field-separator",
    "data-content": !!children,
    className: clsx45("-my-2 group-data-[variant=outline]/field-group:-mb-2 relative h-5 text-sm", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx198(Separator4, {
        className: "absolute inset-0 top-1/2"
      }),
      children && /* @__PURE__ */ jsx198("span", {
        className: "relative mx-auto block w-fit bg-background px-2 text-muted-foreground",
        "data-slot": "field-separator-content",
        children
      })
    ]
  });
}
function FieldError({
  className,
  children,
  errors,
  ...props
}) {
  const content = useMemo11(() => {
    if (children) {
      return children;
    }
    if (!errors) {
      return null;
    }
    if (errors?.length === 1 && errors[0]?.message) {
      return errors[0].message;
    }
    return /* @__PURE__ */ jsx198("ul", {
      className: "ml-4 flex list-disc flex-col gap-1",
      children: errors.map((error, index2) => error?.message && /* @__PURE__ */ jsx198("li", {
        children: error.message
      }, index2))
    });
  }, [children, errors]);
  if (!content) {
    return null;
  }
  return /* @__PURE__ */ jsx198("div", {
    role: "alert",
    "data-slot": "field-error",
    className: clsx45("font-normal text-destructive text-sm", className),
    ...props,
    children: content
  });
}

// src/shadcn-ui/components/form.tsx
import React96 from "react";
import { Controller, FormProvider, useFormContext, useFormState } from "react-hook-form";
import clsx46 from "clsx";
import { jsx as jsx199 } from "react/jsx-runtime";
var Form = FormProvider;
var FormFieldContext = React96.createContext({});
var FormField = ({ ...props }) => {
  return /* @__PURE__ */ jsx199(FormFieldContext.Provider, {
    value: { name: props.name },
    children: /* @__PURE__ */ jsx199(Controller, {
      ...props
    })
  });
};
var useFormField = () => {
  const fieldContext = React96.useContext(FormFieldContext);
  const itemContext = React96.useContext(FormItemContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  const { id } = itemContext;
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
};
var FormItemContext = React96.createContext({});
function FormItem({ className, ...props }) {
  const id = React96.useId();
  return /* @__PURE__ */ jsx199(FormItemContext.Provider, {
    value: { id },
    children: /* @__PURE__ */ jsx199("div", {
      "data-slot": "form-item",
      className: clsx46("grid gap-2", className),
      ...props
    })
  });
}
function FormLabel({ className, ...props }) {
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ jsx199(Label4, {
    "data-slot": "form-label",
    "data-error": !!error,
    className: clsx46("data-[error=true]:text-destructive", className),
    htmlFor: formItemId,
    ...props
  });
}
function FormControl({ ...props }) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ jsx199(Slot, {
    "data-slot": "form-control",
    id: formItemId,
    "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
    "aria-invalid": !!error,
    ...props
  });
}
function FormDescription({ className, ...props }) {
  const { formDescriptionId } = useFormField();
  return /* @__PURE__ */ jsx199("p", {
    "data-slot": "form-description",
    id: formDescriptionId,
    className: clsx46("text-muted-foreground text-sm", className),
    ...props
  });
}
function FormMessage({ className, ...props }) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : props.children;
  if (!body) {
    return null;
  }
  return /* @__PURE__ */ jsx199("p", {
    "data-slot": "form-message",
    id: formMessageId,
    className: clsx46("text-destructive text-sm", className),
    ...props,
    children: body
  });
}
// src/shadcn-ui/components/input-group.tsx
import { cva as cva9 } from "class-variance-authority";
import clsx47 from "clsx";
import { jsx as jsx200 } from "react/jsx-runtime";
function InputGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx200("div", {
    "data-slot": "input-group",
    role: "group",
    className: clsx47("group/input-group relative flex w-full items-center rounded-md border border-input shadow-xs outline-none transition-[color,box-shadow] dark:bg-input/30", "h-9 min-w-0 has-[>textarea]:h-auto", "has-[>[data-align=inline-start]]:[&>input]:pl-2", "has-[>[data-align=inline-end]]:[&>input]:pr-2", "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3", "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3", "has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-[3px] has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50", "has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-destructive/20 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40", className),
    ...props
  });
}
var inputGroupAddonVariants = cva9("text-muted-foreground flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium select-none [&>svg:not([class*='size-'])]:size-4 [&>kbd]:rounded-[calc(var(--radius)-5px)] group-data-[disabled=true]/input-group:opacity-50", {
  variants: {
    align: {
      "inline-start": "order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]",
      "inline-end": "order-last pr-3 has-[>button]:mr-[-0.45rem] has-[>kbd]:mr-[-0.35rem]",
      "block-start": "order-first w-full justify-start px-3 pt-3 [.border-b]:pb-3 group-has-[>input]/input-group:pt-2.5",
      "block-end": "order-last w-full justify-start px-3 pb-3 [.border-t]:pt-3 group-has-[>input]/input-group:pb-2.5"
    }
  },
  defaultVariants: {
    align: "inline-start"
  }
});
function InputGroupAddon({ className, align = "inline-start", ...props }) {
  return /* @__PURE__ */ jsx200("div", {
    role: "group",
    "data-slot": "input-group-addon",
    "data-align": align,
    className: clsx47(inputGroupAddonVariants({ align }), className),
    onClick: (e) => {
      if (e.target.closest("button")) {
        return;
      }
      e.currentTarget.parentElement?.querySelector("input")?.focus();
    },
    ...props
  });
}
var inputGroupButtonVariants = cva9("text-sm shadow-none flex gap-2 items-center", {
  variants: {
    size: {
      xs: "h-6 gap-1 px-2 rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-3.5 has-[>svg]:px-2",
      sm: "h-8 px-2.5 gap-1.5 rounded-md has-[>svg]:px-2.5",
      "icon-xs": "size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0",
      "icon-sm": "size-8 p-0 has-[>svg]:p-0"
    }
  },
  defaultVariants: {
    size: "xs"
  }
});
function InputGroupButton({ className, type = "button", variant = "ghost", size: size4 = "xs", ...props }) {
  return /* @__PURE__ */ jsx200(Button, {
    type,
    "data-size": size4,
    variant,
    className: clsx47(inputGroupButtonVariants({ size: size4 }), className),
    ...props
  });
}
function InputGroupText({ className, ...props }) {
  return /* @__PURE__ */ jsx200("span", {
    className: clsx47("flex items-center gap-2 text-muted-foreground text-sm [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none", className),
    ...props
  });
}
function InputGroupInput({ className, ...props }) {
  return /* @__PURE__ */ jsx200(Input, {
    "data-slot": "input-group-control",
    className: clsx47("flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent", className),
    ...props
  });
}
function InputGroupTextarea({ className, ...props }) {
  return /* @__PURE__ */ jsx200(Textarea, {
    "data-slot": "input-group-control",
    className: clsx47("flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0 dark:bg-transparent", className),
    ...props
  });
}
// src/shadcn-ui/components/item.tsx
import { cva as cva10 } from "class-variance-authority";
import clsx48 from "clsx";
import { jsx as jsx201 } from "react/jsx-runtime";
function ItemGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx201("div", {
    role: "list",
    "data-slot": "item-group",
    className: clsx48("group/item-group flex flex-col", className),
    ...props
  });
}
function ItemSeparator({ className, ...props }) {
  return /* @__PURE__ */ jsx201(Separator4, {
    "data-slot": "item-separator",
    orientation: "horizontal",
    className: clsx48("my-0", className),
    ...props
  });
}
var itemVariants = cva10("group/item flex items-center border border-transparent text-sm rounded-md transition-colors [a]:hover:bg-accent/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", {
  variants: {
    variant: {
      default: "bg-transparent",
      outline: "border-border",
      muted: "bg-muted/50"
    },
    size: {
      default: "p-4 gap-4 ",
      sm: "py-3 px-4 gap-2.5"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
function Item5({ className, variant = "default", size: size4 = "default", asChild = false, ...props }) {
  const Comp = asChild ? Slot : "div";
  return /* @__PURE__ */ jsx201(Comp, {
    "data-slot": "item",
    "data-variant": variant,
    "data-size": size4,
    className: clsx48(itemVariants({ variant, size: size4, className })),
    ...props
  });
}
var itemMediaVariants = cva10("flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5", {
  variants: {
    variant: {
      default: "bg-transparent",
      icon: "size-8 border rounded-sm bg-muted [&_svg:not([class*='size-'])]:size-4",
      image: "size-10 rounded-sm overflow-hidden [&_img]:size-full [&_img]:object-cover"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
function ItemMedia({ className, variant = "default", ...props }) {
  return /* @__PURE__ */ jsx201("div", {
    "data-slot": "item-media",
    "data-variant": variant,
    className: clsx48(itemMediaVariants({ variant, className })),
    ...props
  });
}
function ItemContent({ className, ...props }) {
  return /* @__PURE__ */ jsx201("div", {
    "data-slot": "item-content",
    className: clsx48("flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none", className),
    ...props
  });
}
function ItemTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx201("div", {
    "data-slot": "item-title",
    className: clsx48("flex w-fit items-center gap-2 font-medium text-sm leading-snug", className),
    ...props
  });
}
function ItemDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx201("p", {
    "data-slot": "item-description",
    className: clsx48("line-clamp-2 text-balance font-normal text-muted-foreground text-sm leading-normal", "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4", className),
    ...props
  });
}
function ItemActions({ className, ...props }) {
  return /* @__PURE__ */ jsx201("div", {
    "data-slot": "item-actions",
    className: clsx48("flex items-center gap-2", className),
    ...props
  });
}
function ItemHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx201("div", {
    "data-slot": "item-header",
    className: clsx48("flex basis-full items-center justify-between gap-2", className),
    ...props
  });
}
function ItemFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx201("div", {
    "data-slot": "item-footer",
    className: clsx48("flex basis-full items-center justify-between gap-2", className),
    ...props
  });
}

// src/shadcn-ui/components/kbd.tsx
import clsx49 from "clsx";
import { jsx as jsx202 } from "react/jsx-runtime";
function Kbd({ className, ...props }) {
  return /* @__PURE__ */ jsx202("kbd", {
    "data-slot": "kbd",
    className: clsx49("pointer-events-none inline-flex h-5 w-fit min-w-5 select-none items-center justify-center gap-1 rounded-sm bg-muted px-1 font-medium font-sans text-muted-foreground text-xs", "[&_svg:not([class*='size-'])]:size-3", "[[data-slot=tooltip-content]_&]:bg-background/20 [[data-slot=tooltip-content]_&]:text-background dark:[[data-slot=tooltip-content]_&]:bg-background/10", className),
    ...props
  });
}
function KbdGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx202("kbd", {
    "data-slot": "kbd-group",
    className: clsx49("inline-flex items-center gap-1", className),
    ...props
  });
}
// src/shadcn-ui/components/sidebar.tsx
import { cva as cva11 } from "class-variance-authority";
import clsx50 from "clsx";
import React98 from "react";

// src/shadcn-ui/hooks/use-mobile.ts
import React97 from "react";
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = React97.useState(undefined);
  React97.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}

// src/shadcn-ui/components/sidebar.tsx
import { jsx as jsx203, jsxs as jsxs104 } from "react/jsx-runtime";
var SIDEBAR_COOKIE_NAME = "sidebar_state";
var SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
var SIDEBAR_WIDTH = "16rem";
var SIDEBAR_WIDTH_MOBILE = "18rem";
var SIDEBAR_WIDTH_ICON = "3rem";
var SIDEBAR_KEYBOARD_SHORTCUT = "b";
var SidebarContext = React98.createContext(null);
function useSidebar() {
  const context = React98.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}
function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}) {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React98.useState(false);
  const [_open, _setOpen] = React98.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React98.useCallback((value) => {
    const openState = typeof value === "function" ? value(open) : value;
    if (setOpenProp) {
      setOpenProp(openState);
    } else {
      _setOpen(openState);
    }
    document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
  }, [setOpenProp, open]);
  const toggleSidebar = React98.useCallback(() => {
    return isMobile ? setOpenMobile((open2) => !open2) : setOpen((open2) => !open2);
  }, [isMobile, setOpen, setOpenMobile]);
  React98.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);
  const state = open ? "expanded" : "collapsed";
  const contextValue = React98.useMemo(() => ({
    state,
    open,
    setOpen,
    isMobile,
    openMobile,
    setOpenMobile,
    toggleSidebar
  }), [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]);
  return /* @__PURE__ */ jsx203(SidebarContext.Provider, {
    value: contextValue,
    children: /* @__PURE__ */ jsx203(TooltipProvider2, {
      delayDuration: 0,
      children: /* @__PURE__ */ jsx203("div", {
        "data-slot": "sidebar-wrapper",
        style: {
          "--sidebar-width": SIDEBAR_WIDTH,
          "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
          ...style
        },
        className: clsx50("group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar", className),
        ...props,
        children
      })
    })
  });
}
function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
  if (collapsible === "none") {
    return /* @__PURE__ */ jsx203("div", {
      "data-slot": "sidebar",
      className: clsx50("flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground", className),
      ...props,
      children
    });
  }
  if (isMobile) {
    return /* @__PURE__ */ jsx203(Sheet, {
      open: openMobile,
      onOpenChange: setOpenMobile,
      ...props,
      children: /* @__PURE__ */ jsxs104(SheetContent, {
        "data-sidebar": "sidebar",
        "data-slot": "sidebar",
        "data-mobile": "true",
        className: "w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
        style: {
          "--sidebar-width": SIDEBAR_WIDTH_MOBILE
        },
        side,
        children: [
          /* @__PURE__ */ jsxs104(SheetHeader, {
            className: "sr-only",
            children: [
              /* @__PURE__ */ jsx203(SheetTitle, {
                children: "Sidebar"
              }),
              /* @__PURE__ */ jsx203(SheetDescription, {
                children: "Displays the mobile sidebar."
              })
            ]
          }),
          /* @__PURE__ */ jsx203("div", {
            className: "flex h-full w-full flex-col",
            children
          })
        ]
      })
    });
  }
  return /* @__PURE__ */ jsxs104("div", {
    className: "group peer hidden text-sidebar-foreground md:block",
    "data-state": state,
    "data-collapsible": state === "collapsed" ? collapsible : "",
    "data-variant": variant,
    "data-side": side,
    "data-slot": "sidebar",
    children: [
      /* @__PURE__ */ jsx203("div", {
        "data-slot": "sidebar-gap",
        className: clsx50("relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)")
      }),
      /* @__PURE__ */ jsx203("div", {
        "data-slot": "sidebar-container",
        className: clsx50("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex", side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]", variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l", className),
        ...props,
        children: /* @__PURE__ */ jsx203("div", {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar-inner",
          className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow-sm",
          children
        })
      })
    ]
  });
}
function SidebarTrigger({ className, onClick, ...props }) {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsxs104(Button, {
    "data-sidebar": "trigger",
    "data-slot": "sidebar-trigger",
    variant: "ghost",
    size: "icon",
    className: clsx50("size-7", className),
    onClick: (event) => {
      onClick?.(event);
      toggleSidebar();
    },
    ...props,
    children: [
      /* @__PURE__ */ jsx203(SvgIcon, {
        iconId: "PanelLeft"
      }),
      /* @__PURE__ */ jsx203("span", {
        className: "sr-only",
        children: "Toggle Sidebar"
      })
    ]
  });
}
function SidebarRail({ className, ...props }) {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsx203("button", {
    "data-sidebar": "rail",
    "data-slot": "sidebar-rail",
    "aria-label": "Toggle Sidebar",
    tabIndex: -1,
    onClick: toggleSidebar,
    title: "Toggle Sidebar",
    className: clsx50("-translate-x-1/2 group-data-[side=left]:-right-4 absolute inset-y-0 z-20 hidden w-4 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=right]:left-0 sm:flex", "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize", "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize", "group-data-[collapsible=offcanvas]:translate-x-0 hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:after:left-full", "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", className),
    ...props
  });
}
function SidebarInset({ className, ...props }) {
  return /* @__PURE__ */ jsx203("main", {
    "data-slot": "sidebar-inset",
    className: clsx50("relative flex w-full flex-1 flex-col bg-background", "md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm", className),
    ...props
  });
}
function SidebarInput({ className, ...props }) {
  return /* @__PURE__ */ jsx203(Input, {
    "data-slot": "sidebar-input",
    "data-sidebar": "input",
    className: clsx50("h-8 w-full bg-background shadow-none", className),
    ...props
  });
}
function SidebarHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx203("div", {
    "data-slot": "sidebar-header",
    "data-sidebar": "header",
    className: clsx50("flex flex-col gap-2 p-2", className),
    ...props
  });
}
function SidebarFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx203("div", {
    "data-slot": "sidebar-footer",
    "data-sidebar": "footer",
    className: clsx50("flex flex-col gap-2 p-2", className),
    ...props
  });
}
function SidebarSeparator({ className, ...props }) {
  return /* @__PURE__ */ jsx203(Separator4, {
    "data-slot": "sidebar-separator",
    "data-sidebar": "separator",
    className: clsx50("mx-2 w-auto bg-sidebar-border", className),
    ...props
  });
}
function SidebarContent({ className, ...props }) {
  return /* @__PURE__ */ jsx203("div", {
    "data-slot": "sidebar-content",
    "data-sidebar": "content",
    className: clsx50("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", className),
    ...props
  });
}
function SidebarGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx203("div", {
    "data-slot": "sidebar-group",
    "data-sidebar": "group",
    className: clsx50("relative flex w-full min-w-0 flex-col p-2", className),
    ...props
  });
}
function SidebarGroupLabel({ className, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "div";
  return /* @__PURE__ */ jsx203(Comp, {
    "data-slot": "sidebar-group-label",
    "data-sidebar": "group-label",
    className: clsx50("flex h-8 shrink-0 items-center rounded-md px-2 font-medium text-sidebar-foreground/70 text-xs outline-hidden ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", className),
    ...props
  });
}
function SidebarGroupAction({ className, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx203(Comp, {
    "data-slot": "sidebar-group-action",
    "data-sidebar": "group-action",
    className: clsx50("absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-hidden ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "after:-inset-2 after:absolute md:after:hidden", "group-data-[collapsible=icon]:hidden", className),
    ...props
  });
}
function SidebarGroupContent({ className, ...props }) {
  return /* @__PURE__ */ jsx203("div", {
    "data-slot": "sidebar-group-content",
    "data-sidebar": "group-content",
    className: clsx50("w-full text-sm", className),
    ...props
  });
}
function SidebarMenu({ className, ...props }) {
  return /* @__PURE__ */ jsx203("ul", {
    "data-slot": "sidebar-menu",
    "data-sidebar": "menu",
    className: clsx50("flex w-full min-w-0 flex-col gap-1", className),
    ...props
  });
}
function SidebarMenuItem({ className, ...props }) {
  return /* @__PURE__ */ jsx203("li", {
    "data-slot": "sidebar-menu-item",
    "data-sidebar": "menu-item",
    className: clsx50("group/menu-item relative", className),
    ...props
  });
}
var sidebarMenuButtonVariants = cva11("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
  variants: {
    variant: {
      default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
      outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
    },
    size: {
      default: "h-8 text-sm",
      sm: "h-7 text-xs",
      lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = "default",
  size: size4 = "default",
  tooltip,
  className,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  const { isMobile, state } = useSidebar();
  const button = /* @__PURE__ */ jsx203(Comp, {
    "data-slot": "sidebar-menu-button",
    "data-sidebar": "menu-button",
    "data-size": size4,
    "data-active": isActive,
    className: clsx50(sidebarMenuButtonVariants({ variant, size: size4 }), className),
    ...props
  });
  if (!tooltip) {
    return button;
  }
  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip
    };
  }
  return /* @__PURE__ */ jsxs104(Tooltip2, {
    children: [
      /* @__PURE__ */ jsx203(TooltipTrigger2, {
        asChild: true,
        children: button
      }),
      /* @__PURE__ */ jsx203(TooltipContent2, {
        side: "right",
        align: "center",
        hidden: state !== "collapsed" || isMobile,
        ...tooltip
      })
    ]
  });
}
function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx203(Comp, {
    "data-slot": "sidebar-menu-action",
    "data-sidebar": "menu-action",
    className: clsx50("absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-hidden ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0", "after:-inset-2 after:absolute md:after:hidden", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", showOnHover && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0", className),
    ...props
  });
}
function SidebarMenuBadge({ className, ...props }) {
  return /* @__PURE__ */ jsx203("div", {
    "data-slot": "sidebar-menu-badge",
    "data-sidebar": "menu-badge",
    className: clsx50("pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 font-medium text-sidebar-foreground text-xs tabular-nums", "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", className),
    ...props
  });
}
function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}) {
  const width = React98.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);
  return /* @__PURE__ */ jsxs104("div", {
    "data-slot": "sidebar-menu-skeleton",
    "data-sidebar": "menu-skeleton",
    className: clsx50("flex h-8 items-center gap-2 rounded-md px-2", className),
    ...props,
    children: [
      showIcon && /* @__PURE__ */ jsx203(Skeleton, {
        className: "size-4 rounded-md",
        "data-sidebar": "menu-skeleton-icon"
      }),
      /* @__PURE__ */ jsx203(Skeleton, {
        className: "h-4 max-w-(--skeleton-width) flex-1",
        "data-sidebar": "menu-skeleton-text",
        style: {
          "--skeleton-width": width
        }
      })
    ]
  });
}
function SidebarMenuSub({ className, ...props }) {
  return /* @__PURE__ */ jsx203("ul", {
    "data-slot": "sidebar-menu-sub",
    "data-sidebar": "menu-sub",
    className: clsx50("mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-sidebar-border border-l px-2.5 py-0.5", "group-data-[collapsible=icon]:hidden", className),
    ...props
  });
}
function SidebarMenuSubItem({ className, ...props }) {
  return /* @__PURE__ */ jsx203("li", {
    "data-slot": "sidebar-menu-sub-item",
    "data-sidebar": "menu-sub-item",
    className: clsx50("group/menu-sub-item relative", className),
    ...props
  });
}
function SidebarMenuSubButton({
  asChild = false,
  size: size4 = "md",
  isActive = false,
  className,
  ...props
}) {
  const Comp = asChild ? Slot : "a";
  return /* @__PURE__ */ jsx203(Comp, {
    "data-slot": "sidebar-menu-sub-button",
    "data-sidebar": "menu-sub-button",
    "data-size": size4,
    "data-active": isActive,
    className: clsx50("-translate-x-px flex h-7 min-w-0 items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-hidden ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground", "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground", size4 === "sm" && "text-xs", size4 === "md" && "text-sm", "group-data-[collapsible=icon]:hidden", className),
    ...props
  });
}
// src/shadcn-ui/components/sonner.tsx
import { useTheme as useTheme3 } from "next-themes";
import { Toaster as Sonner } from "sonner";
import { jsx as jsx204 } from "react/jsx-runtime";
var Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme3();
  return /* @__PURE__ */ jsx204(Sonner, {
    theme,
    className: "toaster group",
    style: {
      "--normal-bg": "var(--popover)",
      "--normal-text": "var(--popover-foreground)",
      "--normal-border": "var(--border)"
    },
    ...props
  });
};
// src/vibrant/index.ts
var DataPagination2 = Object.assign(DataPagination, {
  RecordCountDisplay,
  PaginationControls,
  RowsPerPageSelector
});
var InputOtp2 = Object.assign(InputOtp, {
  Group: InputOtpGroup,
  Slot: InputOtpSlot,
  HiddenInput: InputOtpHiddenInput
});
var Accordion3 = Object.assign(Accordion2, {
  Item: AccordionItem2,
  Trigger: AccordionTrigger2,
  Content: AccordionContent2
});
var AlertDialog3 = Object.assign(AlertDialog2, {
  Portal: AlertDialogPortal2,
  Overlay: AlertDialogOverlay2,
  Trigger: AlertDialogTrigger2,
  Content: AlertDialogContent2,
  Header: AlertDialogHeader,
  Footer: AlertDialogFooter,
  Title: AlertDialogTitle2,
  Description: AlertDialogDescription2,
  Action: AlertDialogAction2,
  Cancel: AlertDialogCancel2
});
var Alert2 = Object.assign(Alert, {
  Title: AlertTitle,
  Description: AlertDescription
});
var Avatar3 = Object.assign(Avatar2, {
  Image: AvatarImage2,
  Fallback: AvatarFallback2
});
var Badge2 = Object.assign(Badge, {
  Variants: badgeVariants
});
var Breadcrumb2 = Object.assign(Breadcrumb, {
  List: BreadcrumbList,
  Item: BreadcrumbItem,
  Link: BreadcrumbLink,
  Page: BreadcrumbPage,
  Separator: BreadcrumbSeparator,
  Ellipsis: BreadcrumbEllipsis
});
var ButtonGroup2 = Object.assign(ButtonGroup, {
  Separator: ButtonGroupSeparator,
  Text: ButtonGroupText,
  ButtonGroupVariants: buttonGroupVariants
});
var Button2 = Object.assign(Button, {
  Variants: buttonVariants
});
var Card2 = Object.assign(Card, {
  Header: CardHeader,
  Footer: CardFooter,
  Title: CardTitle,
  Action: CardAction,
  Description: CardDescription,
  Content: CardContent
});
var Collapsible3 = Object.assign(Collapsible2, {
  Trigger: CollapsibleTrigger2,
  Content: CollapsibleContent2
});
var Command2 = Object.assign(Command, {
  Dialog: CommandDialog,
  Input: CommandInput,
  List: CommandList,
  Empty: CommandEmpty,
  Group: CommandGroup,
  Item: CommandItem,
  Shortcut: CommandShortcut,
  Separator: CommandSeparator
});
var ContextMenu3 = Object.assign(ContextMenu2, {
  Trigger: ContextMenuTrigger2,
  Content: ContextMenuContent2,
  Item: ContextMenuItem2,
  CheckboxItem: ContextMenuCheckboxItem2,
  RadioItem: ContextMenuRadioItem2,
  Label: ContextMenuLabel2,
  Separator: ContextMenuSeparator2,
  Shortcut: ContextMenuShortcut,
  Group: ContextMenuGroup2,
  Portal: ContextMenuPortal2,
  Sub: ContextMenuSub2,
  SubContent: ContextMenuSubContent2,
  SubTrigger: ContextMenuSubTrigger2,
  RadioGroup: ContextMenuRadioGroup2
});
var Dialog3 = Object.assign(Dialog2, {
  Close: DialogClose2,
  Content: DialogContent2,
  Description: DialogDescription2,
  Footer: DialogFooter,
  Header: DialogHeader,
  Overlay: DialogOverlay2,
  Portal: DialogPortal2,
  Title: DialogTitle2,
  Trigger: DialogTrigger2
});
var DropdownMenu3 = Object.assign(DropdownMenu2, {
  Portal: DropdownMenuPortal2,
  Trigger: DropdownMenuTrigger2,
  Content: DropdownMenuContent2,
  Group: DropdownMenuGroup2,
  Label: DropdownMenuLabel2,
  Item: DropdownMenuItem2,
  CheckboxItem: DropdownMenuCheckboxItem2,
  RadioGroup: DropdownMenuRadioGroup2,
  RadioItem: DropdownMenuRadioItem2,
  Separator: DropdownMenuSeparator2,
  Shortcut: DropdownMenuShortcut,
  Sub: DropdownMenuSub2,
  SubTrigger: DropdownMenuSubTrigger2,
  SubContent: DropdownMenuSubContent2
});
var Empty2 = Object.assign(Empty, {
  Header: EmptyHeader,
  Title: EmptyTitle,
  Description: EmptyDescription,
  Content: EmptyContent,
  Media: EmptyMedia
});
var Field2 = Object.assign(Field, {
  Label: FieldLabel,
  Description: FieldDescription,
  Error: FieldError,
  Group: FieldGroup,
  Legend: FieldLegend,
  Separator: FieldSeparator,
  Set: FieldSet,
  Content: FieldContent,
  Title: FieldTitle
});
var Form2 = Object.assign(Form, {
  Item: FormItem,
  Label: FormLabel,
  Control: FormControl,
  Description: FormDescription,
  Message: FormMessage,
  Field: FormField
});
var HoverCard3 = Object.assign(HoverCard2, {
  Trigger: HoverCardTrigger2,
  Content: HoverCardContent2
});
var InputGroup2 = Object.assign(InputGroup, {
  Addon: InputGroupAddon,
  Button: InputGroupButton,
  Text: InputGroupText,
  Input: InputGroupInput,
  Textarea: InputGroupTextarea
});
var Item6 = Object.assign(Item5, {
  Media: ItemMedia,
  Content: ItemContent,
  Actions: ItemActions,
  Group: ItemGroup,
  Separator: ItemSeparator,
  Title: ItemTitle,
  Description: ItemDescription,
  Header: ItemHeader,
  Footer: ItemFooter
});
var Kbd2 = Object.assign(Kbd, {
  Group: KbdGroup
});
var Menubar3 = Object.assign(Menubar2, {
  Portal: MenubarPortal2,
  Menu: MenubarMenu2,
  Trigger: MenubarTrigger2,
  Content: MenubarContent2,
  Group: MenubarGroup2,
  Separator: MenubarSeparator2,
  Label: MenubarLabel2,
  Item: MenubarItem2,
  Shortcut: MenubarShortcut,
  CheckboxItem: MenubarCheckboxItem2,
  RadioGroup: MenubarRadioGroup2,
  RadioItem: MenubarRadioItem2,
  Sub: MenubarSub2,
  SubTrigger: MenubarSubTrigger2,
  SubContent: MenubarSubContent2
});
var NavigationMenu3 = Object.assign(NavigationMenu2, {
  List: NavigationMenuList2,
  Item: NavigationMenuItem2,
  Content: NavigationMenuContent2,
  Trigger: NavigationMenuTrigger2,
  Link: NavigationMenuLink2,
  Indicator: NavigationMenuIndicator2,
  Viewport: NavigationMenuViewport2,
  NavigationMenuTriggerStyle: navigationMenuTriggerStyle
});
var Pagination2 = Object.assign(Pagination, {
  Content: PaginationContent,
  Link: PaginationLink,
  Item: PaginationItem,
  Previous: PaginationPrevious,
  Next: PaginationNext,
  Ellipsis: PaginationEllipsis
});
var Popover3 = Object.assign(Popover2, {
  Trigger: PopoverTrigger2,
  Content: PopoverContent2,
  Anchor: PopoverAnchor2
});
var RadioGroup6 = Object.assign(RadioGroup5, {
  Item: RadioGroupItem2
});
var ScrollArea3 = Object.assign(ScrollArea2, {
  ScrollBar
});
var Select3 = Object.assign(Select2, {
  Content: SelectContent2,
  Group: SelectGroup2,
  Item: SelectItem2,
  Label: SelectLabel2,
  ScrollDownButton: SelectScrollDownButton2,
  ScrollUpButton: SelectScrollUpButton2,
  Separator: SelectSeparator2,
  Trigger: SelectTrigger2,
  Value: SelectValue2
});
var Sheet2 = Object.assign(Sheet, {
  Trigger: SheetTrigger,
  Close: SheetClose,
  Content: SheetContent,
  Header: SheetHeader,
  Footer: SheetFooter,
  Title: SheetTitle,
  Description: SheetDescription
});
var Sidebar2 = Object.assign(Sidebar, {
  Content: SidebarContent,
  Footer: SidebarFooter,
  Group: SidebarGroup,
  GroupAction: SidebarGroupAction,
  GroupContent: SidebarGroupContent,
  GroupLabel: SidebarGroupLabel,
  Header: SidebarHeader,
  Input: SidebarInput,
  Inset: SidebarInset,
  Menu: SidebarMenu,
  MenuAction: SidebarMenuAction,
  MenuBadge: SidebarMenuBadge,
  MenuButton: SidebarMenuButton,
  MenuItem: SidebarMenuItem,
  MenuSkeleton: SidebarMenuSkeleton,
  MenuSub: SidebarMenuSub,
  MenuSubButton: SidebarMenuSubButton,
  MenuSubItem: SidebarMenuSubItem,
  Provider: SidebarProvider,
  Rail: SidebarRail,
  Separator: SidebarSeparator,
  Trigger: SidebarTrigger
});
var Table2 = Object.assign(Table, {
  Header: TableHeader,
  Body: TableBody,
  Footer: TableFooter,
  Head: TableHead,
  Row: TableRow,
  Cell: TableCell,
  Caption: TableCaption
});
var Tabs3 = Object.assign(Tabs2, {
  List: TabsList2,
  Trigger: TabsTrigger2,
  Content: TabsContent2
});
var ToggleGroup3 = Object.assign(ToggleGroup2, {
  Item: ToggleGroupItem2
});
var Toggle3 = Object.assign(Toggle2, {
  Variants: toggleVariants
});
var Tooltip3 = Object.assign(Tooltip2, {
  Trigger: TooltipTrigger2,
  Content: TooltipContent2,
  Provider: TooltipProvider2
});
export {
  useSidebar,
  useFormField,
  iconNames,
  Tooltip3 as Tooltip,
  ToggleGroup3 as ToggleGroup,
  Toggle3 as Toggle,
  Toaster,
  Textarea,
  Tabs3 as Tabs,
  Table2 as Table,
  Switch2 as Switch,
  SvgIcon,
  Spinner,
  Slider2 as Slider,
  Skeleton,
  Sidebar2 as Sidebar,
  Sheet2 as Sheet,
  Separator4 as Separator,
  Select3 as Select,
  ScrollArea3 as ScrollArea,
  RadioGroup6 as RadioGroup,
  Progress2 as Progress,
  Popover3 as Popover,
  Pagination2 as Pagination,
  NavigationMenu3 as NavigationMenu,
  Menubar3 as Menubar,
  Link,
  Label4 as Label,
  Kbd2 as Kbd,
  Item6 as Item,
  InputOtp2 as InputOtp,
  InputGroup2 as InputGroup,
  Input,
  HoverCard3 as HoverCard,
  Form2 as Form,
  Field2 as Field,
  Empty2 as Empty,
  DropdownMenu3 as DropdownMenu,
  Dialog3 as Dialog,
  DataPagination2 as DataPagination,
  ContextMenu3 as ContextMenu,
  ComponentExamples,
  Command2 as Command,
  Collapsible3 as Collapsible,
  Checkbox2 as Checkbox,
  Card2 as Card,
  ButtonGroup2 as ButtonGroup,
  Button2 as Button,
  Breadcrumb2 as Breadcrumb,
  Badge2 as Badge,
  Avatar3 as Avatar,
  AspectRatio2 as AspectRatio,
  AlertDialog3 as AlertDialog,
  Alert2 as Alert,
  Accordion3 as Accordion
};

//# debugId=477F60E8287F00B464756E2164756E21
