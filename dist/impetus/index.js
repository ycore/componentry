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
import * as React8 from "react";
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
}, $preconnect = function(href2, options) {
  typeof href2 === "string" && (options ? (options = options.crossOrigin, options = typeof options === "string" ? options === "use-credentials" ? options : "" : undefined) : options = null, Internals.d.C(href2, options));
}, $prefetchDNS = function(href2) {
  typeof href2 === "string" && Internals.d.D(href2);
}, $preinit = function(href2, options) {
  if (typeof href2 === "string" && options && typeof options.as === "string") {
    var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin), integrity = typeof options.integrity === "string" ? options.integrity : undefined, fetchPriority = typeof options.fetchPriority === "string" ? options.fetchPriority : undefined;
    as === "style" ? Internals.d.S(href2, typeof options.precedence === "string" ? options.precedence : undefined, {
      crossOrigin,
      integrity,
      fetchPriority
    }) : as === "script" && Internals.d.X(href2, {
      crossOrigin,
      integrity,
      fetchPriority,
      nonce: typeof options.nonce === "string" ? options.nonce : undefined
    });
  }
}, $preinitModule = function(href2, options) {
  if (typeof href2 === "string")
    if (typeof options === "object" && options !== null) {
      if (options.as == null || options.as === "script") {
        var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
        Internals.d.M(href2, {
          crossOrigin,
          integrity: typeof options.integrity === "string" ? options.integrity : undefined,
          nonce: typeof options.nonce === "string" ? options.nonce : undefined
        });
      }
    } else
      options == null && Internals.d.M(href2);
}, $preload = function(href2, options) {
  if (typeof href2 === "string" && typeof options === "object" && options !== null && typeof options.as === "string") {
    var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin);
    Internals.d.L(href2, as, {
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
}, $preloadModule = function(href2, options) {
  if (typeof href2 === "string")
    if (options) {
      var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
      Internals.d.m(href2, {
        as: typeof options.as === "string" && options.as !== "script" ? options.as : undefined,
        crossOrigin,
        integrity: typeof options.integrity === "string" ? options.integrity : undefined
      });
    } else
      Internals.d.m(href2);
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
  ReactSharedInternals = React8.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
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

// src/impetus/components/error-boundary.tsx
import { href, isRouteErrorResponse, Link, useRouteError } from "react-router";
import { jsx, jsxs } from "react/jsx-runtime";
var HTTP_ERROR_CONFIG = {
  400: {
    message: "400 Bad Request",
    detail: "The request was invalid."
  },
  401: {
    message: "401 Unauthorized Access",
    detail: "Please sign in with the appropriate credentials to access."
  },
  403: {
    message: "403 Access Forbidden",
    detail: "Access permission is not sufficient."
  },
  404: {
    message: "404 Not Found",
    detail: "The page does not exist."
  },
  500: {
    message: "500 Internal Server Error",
    detail: "We apologize for the inconvenience. Please try again later."
  },
  503: {
    message: "503 Website is under maintenance!",
    detail: "The site is not available at the moment. We'll be back online shortly."
  }
};
var DEFAULT_ERROR = {
  message: "Oops, something went wrong.",
  detail: "Unexpected error. Refresh to try again or contact support if the issue persists."
};
function DevErrorDisplay({ message, detail, stack }) {
  return /* @__PURE__ */ jsxs("main", {
    className: "container mx-auto space-y-4 p-4 pt-16",
    children: [
      /* @__PURE__ */ jsxs("div", {
        className: "space-y-1",
        children: [
          /* @__PURE__ */ jsx("h1", {
            className: "font-semibold text-lg",
            children: message
          }),
          /* @__PURE__ */ jsx("p", {
            className: "text-base text-muted-foreground",
            children: detail
          })
        ]
      }),
      stack && /* @__PURE__ */ jsx("pre", {
        className: "w-full overflow-x-auto rounded-lg bg-destructive/10 p-4 text-destructive text-sm",
        children: /* @__PURE__ */ jsx("code", {
          children: stack
        })
      })
    ]
  });
}
function ProductionErrorDisplay({ message, detail }) {
  return /* @__PURE__ */ jsx("main", {
    className: "flex h-screen items-center justify-center p-6",
    children: /* @__PURE__ */ jsxs("div", {
      className: "mx-auto flex max-w-sm flex-col items-center gap-4 text-center",
      children: [
        /* @__PURE__ */ jsxs("div", {
          className: "space-y-1",
          children: [
            /* @__PURE__ */ jsx("h1", {
              className: "text-lg",
              children: message
            }),
            /* @__PURE__ */ jsx("p", {
              className: "text-base text-muted-foreground italic",
              children: detail
            })
          ]
        }),
        /* @__PURE__ */ jsx(Link, {
          to: href("/"),
          className: "rounded-xl bg-accent px-8 py-2",
          children: "Back to home"
        })
      ]
    })
  });
}
function getErrorInfo(error) {
  if (!isRouteErrorResponse(error)) {
    return DEFAULT_ERROR;
  }
  const httpError = HTTP_ERROR_CONFIG[error.status];
  return {
    message: error.data?.message ?? httpError?.message ?? DEFAULT_ERROR.message,
    detail: error.data?.detail ?? httpError?.detail ?? DEFAULT_ERROR.detail
  };
}
function GeneralErrorBoundary({ isDev = false }) {
  const error = useRouteError();
  if (isDev && error instanceof Error) {
    console.log("\uD83D\uDD34 error on dev", error);
    return /* @__PURE__ */ jsx(DevErrorDisplay, {
      message: "Application Error",
      detail: error.message,
      stack: error.stack
    });
  }
  const { message, detail } = getErrorInfo(error);
  return /* @__PURE__ */ jsx(ProductionErrorDisplay, {
    message,
    detail
  });
}
// src/impetus/components/LoadingBar.tsx
import clsx from "clsx";
import { memo } from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var LoadingBar = memo(({ className }) => /* @__PURE__ */ jsx2("div", {
  className: clsx("loading-bar", className)
}));
// src/impetus/components/NavMenu.tsx
import { createSpriteIcon as createSpriteIcon2 } from "@ycore/componentry/images";
import clsx5 from "clsx";
import { createContext as createContext6, useState as useState16 } from "react";
import { useLocation } from "react-router";

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
import { Fragment as Fragment2, jsx as jsx3 } from "react/jsx-runtime";
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
      return /* @__PURE__ */ jsx3(SlotClone, { ...slotProps, ref: forwardedRef, children: React2.isValidElement(newElement) ? React2.cloneElement(newElement, undefined, newChildren) : null });
    }
    return /* @__PURE__ */ jsx3(SlotClone, { ...slotProps, ref: forwardedRef, children });
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
import clsx2 from "clsx";
import { jsx as jsx4 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx4(Comp, {
    "data-slot": "button",
    className: clsx2(buttonVariants({ variant, size, className })),
    ...props
  });
}

// ../../node_modules/@radix-ui/react-menubar/dist/index.mjs
import * as React35 from "react";

// ../../node_modules/@radix-ui/react-collection/dist/index.mjs
import React4 from "react";

// ../../node_modules/@radix-ui/react-context/dist/index.mjs
import * as React3 from "react";
import { jsx as jsx5 } from "react/jsx-runtime";
function createContext2(rootComponentName, defaultContext) {
  const Context = React3.createContext(defaultContext);
  const Provider = (props) => {
    const { children, ...context } = props;
    const value = React3.useMemo(() => context, Object.values(context));
    return /* @__PURE__ */ jsx5(Context.Provider, { value, children });
  };
  Provider.displayName = rootComponentName + "Provider";
  function useContext2(consumerName) {
    const context = React3.useContext(Context);
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
    const BaseContext = React3.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider = (props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const value = React3.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */ jsx5(Context.Provider, { value, children });
    };
    Provider.displayName = rootComponentName + "Provider";
    function useContext2(consumerName, scope) {
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const context = React3.useContext(Context);
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
      return React3.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return React3.useMemo(() => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }), [scope, contexts]);
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
      return React3.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// ../../node_modules/@radix-ui/react-collection/dist/index.mjs
import { jsx as jsx6 } from "react/jsx-runtime";
import React22 from "react";
import { jsx as jsx22 } from "react/jsx-runtime";
"use client";
function createCollection(name) {
  const PROVIDER_NAME = name + "CollectionProvider";
  const [createCollectionContext, createCollectionScope] = createContextScope(PROVIDER_NAME);
  const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map });
  const CollectionProvider = (props) => {
    const { scope, children } = props;
    const ref = React4.useRef(null);
    const itemMap = React4.useRef(/* @__PURE__ */ new Map).current;
    return /* @__PURE__ */ jsx6(CollectionProviderImpl, { scope, itemMap, collectionRef: ref, children });
  };
  CollectionProvider.displayName = PROVIDER_NAME;
  const COLLECTION_SLOT_NAME = name + "CollectionSlot";
  const CollectionSlotImpl = createSlot(COLLECTION_SLOT_NAME);
  const CollectionSlot = React4.forwardRef((props, forwardedRef) => {
    const { scope, children } = props;
    const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
    const composedRefs = useComposedRefs(forwardedRef, context.collectionRef);
    return /* @__PURE__ */ jsx6(CollectionSlotImpl, { ref: composedRefs, children });
  });
  CollectionSlot.displayName = COLLECTION_SLOT_NAME;
  const ITEM_SLOT_NAME = name + "CollectionItemSlot";
  const ITEM_DATA_ATTR = "data-radix-collection-item";
  const CollectionItemSlotImpl = createSlot(ITEM_SLOT_NAME);
  const CollectionItemSlot = React4.forwardRef((props, forwardedRef) => {
    const { scope, children, ...itemData } = props;
    const ref = React4.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const context = useCollectionContext(ITEM_SLOT_NAME, scope);
    React4.useEffect(() => {
      context.itemMap.set(ref, { ref, ...itemData });
      return () => void context.itemMap.delete(ref);
    });
    return /* @__PURE__ */ jsx6(CollectionItemSlotImpl, { ...{ [ITEM_DATA_ATTR]: "" }, ref: composedRefs, children });
  });
  CollectionItemSlot.displayName = ITEM_SLOT_NAME;
  function useCollection(scope) {
    const context = useCollectionContext(name + "CollectionConsumer", scope);
    const getItems = React4.useCallback(() => {
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
import * as React5 from "react";
import { jsx as jsx7 } from "react/jsx-runtime";
var DirectionContext = React5.createContext(undefined);
function useDirection(localDir) {
  const globalDir = React5.useContext(DirectionContext);
  return localDir || globalDir || "ltr";
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

// ../../node_modules/@radix-ui/react-id/dist/index.mjs
import * as React7 from "react";

// ../../node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
import * as React6 from "react";
var useLayoutEffect2 = globalThis?.document ? React6.useLayoutEffect : () => {};

// ../../node_modules/@radix-ui/react-id/dist/index.mjs
var useReactId = React7[" useId ".trim().toString()] || (() => {
  return;
});
var count = 0;
function useId(deterministicId) {
  const [id, setId] = React7.useState(useReactId());
  useLayoutEffect2(() => {
    if (!deterministicId)
      setId((reactId) => reactId ?? String(count++));
  }, [deterministicId]);
  return deterministicId || (id ? `radix-${id}` : "");
}

// ../../node_modules/@radix-ui/react-menu/dist/index.mjs
import * as React34 from "react";

// ../../node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
import * as React12 from "react";

// ../../node_modules/@radix-ui/react-primitive/dist/index.mjs
var ReactDOM = __toESM(require_react_dom(), 1);
import * as React9 from "react";
import { jsx as jsx8 } from "react/jsx-runtime";
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
  const Node2 = React9.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot2 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsx8(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node2.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node2 };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
  if (target)
    ReactDOM.flushSync(() => target.dispatchEvent(event));
}

// ../../node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
import * as React10 from "react";
function useCallbackRef(callback) {
  const callbackRef = React10.useRef(callback);
  React10.useEffect(() => {
    callbackRef.current = callback;
  });
  return React10.useMemo(() => (...args) => callbackRef.current?.(...args), []);
}

// ../../node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
import * as React11 from "react";
function useEscapeKeydown(onEscapeKeyDownProp, ownerDocument = globalThis?.document) {
  const onEscapeKeyDown = useCallbackRef(onEscapeKeyDownProp);
  React11.useEffect(() => {
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
import { jsx as jsx9 } from "react/jsx-runtime";
"use client";
var DISMISSABLE_LAYER_NAME = "DismissableLayer";
var CONTEXT_UPDATE = "dismissableLayer.update";
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var originalBodyPointerEvents;
var DismissableLayerContext = React12.createContext({
  layers: /* @__PURE__ */ new Set,
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set,
  branches: /* @__PURE__ */ new Set
});
var DismissableLayer = React12.forwardRef((props, forwardedRef) => {
  const {
    disableOutsidePointerEvents = false,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside,
    onInteractOutside,
    onDismiss,
    ...layerProps
  } = props;
  const context = React12.useContext(DismissableLayerContext);
  const [node, setNode] = React12.useState(null);
  const ownerDocument = node?.ownerDocument ?? globalThis?.document;
  const [, force] = React12.useState({});
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
  React12.useEffect(() => {
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
  React12.useEffect(() => {
    return () => {
      if (!node)
        return;
      context.layers.delete(node);
      context.layersWithOutsidePointerEventsDisabled.delete(node);
      dispatchUpdate();
    };
  }, [node, context]);
  React12.useEffect(() => {
    const handleUpdate = () => force({});
    document.addEventListener(CONTEXT_UPDATE, handleUpdate);
    return () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
  }, []);
  return /* @__PURE__ */ jsx9(Primitive.div, {
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
var DismissableLayerBranch = React12.forwardRef((props, forwardedRef) => {
  const context = React12.useContext(DismissableLayerContext);
  const ref = React12.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  React12.useEffect(() => {
    const node = ref.current;
    if (node) {
      context.branches.add(node);
      return () => {
        context.branches.delete(node);
      };
    }
  }, [context.branches]);
  return /* @__PURE__ */ jsx9(Primitive.div, { ...props, ref: composedRefs });
});
DismissableLayerBranch.displayName = BRANCH_NAME;
function usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis?.document) {
  const handlePointerDownOutside = useCallbackRef(onPointerDownOutside);
  const isPointerInsideReactTreeRef = React12.useRef(false);
  const handleClickRef = React12.useRef(() => {});
  React12.useEffect(() => {
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
  const isFocusInsideReactTreeRef = React12.useRef(false);
  React12.useEffect(() => {
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
import * as React13 from "react";
"use client";
var count2 = 0;
function useFocusGuards() {
  React13.useEffect(() => {
    const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", edgeGuards[0] ?? createFocusGuard());
    document.body.insertAdjacentElement("beforeend", edgeGuards[1] ?? createFocusGuard());
    count2++;
    return () => {
      if (count2 === 1) {
        document.querySelectorAll("[data-radix-focus-guard]").forEach((node) => node.remove());
      }
      count2--;
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
import * as React14 from "react";
import { jsx as jsx10 } from "react/jsx-runtime";
"use client";
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS = { bubbles: false, cancelable: true };
var FOCUS_SCOPE_NAME = "FocusScope";
var FocusScope = React14.forwardRef((props, forwardedRef) => {
  const {
    loop = false,
    trapped = false,
    onMountAutoFocus: onMountAutoFocusProp,
    onUnmountAutoFocus: onUnmountAutoFocusProp,
    ...scopeProps
  } = props;
  const [container, setContainer] = React14.useState(null);
  const onMountAutoFocus = useCallbackRef(onMountAutoFocusProp);
  const onUnmountAutoFocus = useCallbackRef(onUnmountAutoFocusProp);
  const lastFocusedElementRef = React14.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, (node) => setContainer(node));
  const focusScope = React14.useRef({
    paused: false,
    pause() {
      this.paused = true;
    },
    resume() {
      this.paused = false;
    }
  }).current;
  React14.useEffect(() => {
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
  React14.useEffect(() => {
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
  const handleKeyDown = React14.useCallback((event) => {
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
  return /* @__PURE__ */ jsx10(Primitive.div, { tabIndex: -1, ...scopeProps, ref: composedRefs, onKeyDown: handleKeyDown });
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
function clamp(start, value, end) {
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
    const offset = clamp(min$1, center, max2);
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
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
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
import { jsx as jsx11 } from "react/jsx-runtime";
var NAME = "Arrow";
var Arrow = React16.forwardRef((props, forwardedRef) => {
  const { children, width = 10, height = 5, ...arrowProps } = props;
  return /* @__PURE__ */ jsx11(Primitive.svg, {
    ...arrowProps,
    ref: forwardedRef,
    width,
    height,
    viewBox: "0 0 30 10",
    preserveAspectRatio: "none",
    children: props.asChild ? children : /* @__PURE__ */ jsx11("polygon", { points: "0,0 30,0 15,10" })
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
import { jsx as jsx12 } from "react/jsx-runtime";
"use client";
var POPPER_NAME = "Popper";
var [createPopperContext, createPopperScope] = createContextScope(POPPER_NAME);
var [PopperProvider, usePopperContext] = createPopperContext(POPPER_NAME);
var Popper = (props) => {
  const { __scopePopper, children } = props;
  const [anchor, setAnchor] = React18.useState(null);
  return /* @__PURE__ */ jsx12(PopperProvider, { scope: __scopePopper, anchor, onAnchorChange: setAnchor, children });
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
  return virtualRef ? null : /* @__PURE__ */ jsx12(Primitive.div, { ...anchorProps, ref: composedRefs });
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
  return /* @__PURE__ */ jsx12("div", {
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
    children: /* @__PURE__ */ jsx12(PopperContentProvider, {
      scope: __scopePopper,
      placedSide,
      onArrowChange: setArrow,
      arrowX,
      arrowY,
      shouldHideArrow: cannotCenterArrow,
      children: /* @__PURE__ */ jsx12(Primitive.div, {
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
  return /* @__PURE__ */ jsx12("span", {
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
    children: /* @__PURE__ */ jsx12(Root, {
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
import { jsx as jsx13 } from "react/jsx-runtime";
"use client";
var PORTAL_NAME = "Portal";
var Portal = React19.forwardRef((props, forwardedRef) => {
  const { container: containerProp, ...portalProps } = props;
  const [mounted, setMounted] = React19.useState(false);
  useLayoutEffect2(() => setMounted(true), []);
  const container = containerProp || mounted && globalThis?.document?.body;
  return container ? import_react_dom2.default.createPortal(/* @__PURE__ */ jsx13(Primitive.div, { ...portalProps, ref: forwardedRef }), container) : null;
});
Portal.displayName = PORTAL_NAME;

// ../../node_modules/@radix-ui/react-presence/dist/index.mjs
import * as React23 from "react";
import * as React20 from "react";
"use client";
function useStateMachine(initialState, machine) {
  return React20.useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState ?? state;
  }, initialState);
}
var Presence = (props) => {
  const { present, children } = props;
  const presence = usePresence(present);
  const child = typeof children === "function" ? children({ present: presence.isPresent }) : React23.Children.only(children);
  const ref = useComposedRefs(presence.ref, getElementRef2(child));
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? React23.cloneElement(child, { ref }) : null;
};
Presence.displayName = "Presence";
function usePresence(present) {
  const [node, setNode] = React23.useState();
  const stylesRef = React23.useRef(null);
  const prevPresentRef = React23.useRef(present);
  const prevAnimationNameRef = React23.useRef("none");
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
  React23.useEffect(() => {
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
    ref: React23.useCallback((node2) => {
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

// ../../node_modules/@radix-ui/react-roving-focus/dist/index.mjs
import * as React25 from "react";

// ../../node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
import * as React21 from "react";
import * as React24 from "react";
var useInsertionEffect = React21[" useInsertionEffect ".trim().toString()] || useLayoutEffect2;
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
    const isControlledRef = React21.useRef(prop !== undefined);
    React21.useEffect(() => {
      const wasControlled = isControlledRef.current;
      if (wasControlled !== isControlled) {
        const from = wasControlled ? "controlled" : "uncontrolled";
        const to = isControlled ? "controlled" : "uncontrolled";
        console.warn(`${caller} is changing from ${from} to ${to}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`);
      }
      isControlledRef.current = isControlled;
    }, [isControlled, caller]);
  }
  const setValue = React21.useCallback((nextValue) => {
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
  const [value, setValue] = React21.useState(defaultProp);
  const prevValueRef = React21.useRef(value);
  const onChangeRef = React21.useRef(onChange);
  useInsertionEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);
  React21.useEffect(() => {
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

// ../../node_modules/@radix-ui/react-roving-focus/dist/index.mjs
import { jsx as jsx14 } from "react/jsx-runtime";
"use client";
var ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
var EVENT_OPTIONS2 = { bubbles: false, cancelable: true };
var GROUP_NAME = "RovingFocusGroup";
var [Collection, useCollection, createCollectionScope] = createCollection(GROUP_NAME);
var [createRovingFocusGroupContext, createRovingFocusGroupScope] = createContextScope(GROUP_NAME, [createCollectionScope]);
var [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME);
var RovingFocusGroup = React25.forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ jsx14(Collection.Provider, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ jsx14(Collection.Slot, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ jsx14(RovingFocusGroupImpl, { ...props, ref: forwardedRef }) }) });
});
RovingFocusGroup.displayName = GROUP_NAME;
var RovingFocusGroupImpl = React25.forwardRef((props, forwardedRef) => {
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
  const ref = React25.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const direction = useDirection(dir);
  const [currentTabStopId, setCurrentTabStopId] = useControllableState({
    prop: currentTabStopIdProp,
    defaultProp: defaultCurrentTabStopId ?? null,
    onChange: onCurrentTabStopIdChange,
    caller: GROUP_NAME
  });
  const [isTabbingBackOut, setIsTabbingBackOut] = React25.useState(false);
  const handleEntryFocus = useCallbackRef(onEntryFocus);
  const getItems = useCollection(__scopeRovingFocusGroup);
  const isClickFocusRef = React25.useRef(false);
  const [focusableItemsCount, setFocusableItemsCount] = React25.useState(0);
  React25.useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener(ENTRY_FOCUS, handleEntryFocus);
      return () => node.removeEventListener(ENTRY_FOCUS, handleEntryFocus);
    }
  }, [handleEntryFocus]);
  return /* @__PURE__ */ jsx14(RovingFocusProvider, {
    scope: __scopeRovingFocusGroup,
    orientation,
    dir: direction,
    loop,
    currentTabStopId,
    onItemFocus: React25.useCallback((tabStopId) => setCurrentTabStopId(tabStopId), [setCurrentTabStopId]),
    onItemShiftTab: React25.useCallback(() => setIsTabbingBackOut(true), []),
    onFocusableItemAdd: React25.useCallback(() => setFocusableItemsCount((prevCount) => prevCount + 1), []),
    onFocusableItemRemove: React25.useCallback(() => setFocusableItemsCount((prevCount) => prevCount - 1), []),
    children: /* @__PURE__ */ jsx14(Primitive.div, {
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
var ITEM_NAME = "RovingFocusGroupItem";
var RovingFocusGroupItem = React25.forwardRef((props, forwardedRef) => {
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
  const context = useRovingFocusContext(ITEM_NAME, __scopeRovingFocusGroup);
  const isCurrentTabStop = context.currentTabStopId === id;
  const getItems = useCollection(__scopeRovingFocusGroup);
  const { onFocusableItemAdd, onFocusableItemRemove, currentTabStopId } = context;
  React25.useEffect(() => {
    if (focusable) {
      onFocusableItemAdd();
      return () => onFocusableItemRemove();
    }
  }, [focusable, onFocusableItemAdd, onFocusableItemRemove]);
  return /* @__PURE__ */ jsx14(Collection.ItemSlot, {
    scope: __scopeRovingFocusGroup,
    id,
    focusable,
    active,
    children: /* @__PURE__ */ jsx14(Primitive.span, {
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
            candidateNodes = context.loop ? wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
          }
          setTimeout(() => focusFirst2(candidateNodes));
        }
      }),
      children: typeof children === "function" ? children({ isCurrentTabStop, hasTabStop: currentTabStopId != null }) : children
    })
  });
});
RovingFocusGroupItem.displayName = ITEM_NAME;
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
function wrapArray(array, startIndex) {
  return array.map((_, index2) => array[(startIndex + index2) % array.length]);
}
var Root3 = RovingFocusGroup;
var Item = RovingFocusGroupItem;

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
import * as React33 from "react";

// ../../node_modules/react-remove-scroll/dist/es2015/UI.js
import * as React29 from "react";

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
import { useState as useState11 } from "react";
function useCallbackRef2(initialValue, callback) {
  var ref = useState11(function() {
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
import * as React27 from "react";
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? React27.useLayoutEffect : React27.useEffect;
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
import * as React28 from "react";
var SideCar = function(_a) {
  var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
  if (!sideCar) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target = sideCar.read();
  if (!Target) {
    throw new Error("Sidecar medium not found");
  }
  return React28.createElement(Target, __assign({}, rest));
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
var RemoveScroll = React29.forwardRef(function(props, parentRef) {
  var ref = React29.useRef(null);
  var _a = React29.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a[0], setCallbacks = _a[1];
  var { forwardProps, children, className, removeScrollBar, enabled, shards, sideCar, noRelative, noIsolation, inert, allowPinchZoom, as: _b } = props, Container = _b === undefined ? "div" : _b, gapMode = props.gapMode, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]);
  var SideCar2 = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = __assign(__assign({}, rest), callbacks);
  return React29.createElement(React29.Fragment, null, enabled && React29.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noRelative, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref, gapMode }), forwardProps ? React29.cloneElement(React29.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : React29.createElement(Container, __assign({}, containerProps, { className, ref: containerRef }), children));
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
import * as React32 from "react";

// ../../node_modules/react-remove-scroll-bar/dist/es2015/component.js
import * as React31 from "react";

// ../../node_modules/react-style-singleton/dist/es2015/hook.js
import * as React30 from "react";

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
    React30.useEffect(function() {
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
  React31.useEffect(function() {
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
  var gap = React31.useMemo(function() {
    return getGapWidth(gapMode);
  }, [gapMode]);
  return React31.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
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
  var shouldPreventQueue = React32.useRef([]);
  var touchStartRef = React32.useRef([0, 0]);
  var activeAxis = React32.useRef();
  var id = React32.useState(idCounter++)[0];
  var Style2 = React32.useState(styleSingleton)[0];
  var lastProps = React32.useRef(props);
  React32.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React32.useEffect(function() {
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
  var shouldCancelEvent = React32.useCallback(function(event, parent) {
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
  var shouldPrevent = React32.useCallback(function(_event) {
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
  var shouldCancel = React32.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should, shadowParent: getOutermostShadowParent(target) };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
        return e !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React32.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = undefined;
  }, []);
  var scrollWheel = React32.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React32.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React32.useEffect(function() {
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
  return React32.createElement(React32.Fragment, null, inert ? React32.createElement(Style2, { styles: generateStyle(id) }) : null, removeScrollBar ? React32.createElement(RemoveScrollBar, { noRelative: props.noRelative, gapMode: props.gapMode }) : null);
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
var ReactRemoveScroll = React33.forwardRef(function(props, ref) {
  return React33.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: sidecar_default }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default = ReactRemoveScroll;

// ../../node_modules/@radix-ui/react-menu/dist/index.mjs
import { jsx as jsx15 } from "react/jsx-runtime";
"use client";
var SELECTION_KEYS = ["Enter", " "];
var FIRST_KEYS = ["ArrowDown", "PageUp", "Home"];
var LAST_KEYS = ["ArrowUp", "PageDown", "End"];
var FIRST_LAST_KEYS = [...FIRST_KEYS, ...LAST_KEYS];
var SUB_OPEN_KEYS = {
  ltr: [...SELECTION_KEYS, "ArrowRight"],
  rtl: [...SELECTION_KEYS, "ArrowLeft"]
};
var SUB_CLOSE_KEYS = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
var MENU_NAME = "Menu";
var [Collection2, useCollection2, createCollectionScope2] = createCollection(MENU_NAME);
var [createMenuContext, createMenuScope] = createContextScope(MENU_NAME, [
  createCollectionScope2,
  createPopperScope,
  createRovingFocusGroupScope
]);
var usePopperScope = createPopperScope();
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var [MenuProvider, useMenuContext] = createMenuContext(MENU_NAME);
var [MenuRootProvider, useMenuRootContext] = createMenuContext(MENU_NAME);
var Menu = (props) => {
  const { __scopeMenu, open = false, children, dir, onOpenChange, modal = true } = props;
  const popperScope = usePopperScope(__scopeMenu);
  const [content, setContent] = React34.useState(null);
  const isUsingKeyboardRef = React34.useRef(false);
  const handleOpenChange = useCallbackRef(onOpenChange);
  const direction = useDirection(dir);
  React34.useEffect(() => {
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
  return /* @__PURE__ */ jsx15(Root2, { ...popperScope, children: /* @__PURE__ */ jsx15(MenuProvider, {
    scope: __scopeMenu,
    open,
    onOpenChange: handleOpenChange,
    content,
    onContentChange: setContent,
    children: /* @__PURE__ */ jsx15(MenuRootProvider, {
      scope: __scopeMenu,
      onClose: React34.useCallback(() => handleOpenChange(false), [handleOpenChange]),
      isUsingKeyboardRef,
      dir: direction,
      modal,
      children
    })
  }) });
};
Menu.displayName = MENU_NAME;
var ANCHOR_NAME2 = "MenuAnchor";
var MenuAnchor = React34.forwardRef((props, forwardedRef) => {
  const { __scopeMenu, ...anchorProps } = props;
  const popperScope = usePopperScope(__scopeMenu);
  return /* @__PURE__ */ jsx15(Anchor, { ...popperScope, ...anchorProps, ref: forwardedRef });
});
MenuAnchor.displayName = ANCHOR_NAME2;
var PORTAL_NAME2 = "MenuPortal";
var [PortalProvider, usePortalContext] = createMenuContext(PORTAL_NAME2, {
  forceMount: undefined
});
var MenuPortal = (props) => {
  const { __scopeMenu, forceMount, children, container } = props;
  const context = useMenuContext(PORTAL_NAME2, __scopeMenu);
  return /* @__PURE__ */ jsx15(PortalProvider, { scope: __scopeMenu, forceMount, children: /* @__PURE__ */ jsx15(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsx15(Portal, { asChild: true, container, children }) }) });
};
MenuPortal.displayName = PORTAL_NAME2;
var CONTENT_NAME2 = "MenuContent";
var [MenuContentProvider, useMenuContentContext] = createMenuContext(CONTENT_NAME2);
var MenuContent = React34.forwardRef((props, forwardedRef) => {
  const portalContext = usePortalContext(CONTENT_NAME2, props.__scopeMenu);
  const { forceMount = portalContext.forceMount, ...contentProps } = props;
  const context = useMenuContext(CONTENT_NAME2, props.__scopeMenu);
  const rootContext = useMenuRootContext(CONTENT_NAME2, props.__scopeMenu);
  return /* @__PURE__ */ jsx15(Collection2.Provider, { scope: props.__scopeMenu, children: /* @__PURE__ */ jsx15(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsx15(Collection2.Slot, { scope: props.__scopeMenu, children: rootContext.modal ? /* @__PURE__ */ jsx15(MenuRootContentModal, { ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ jsx15(MenuRootContentNonModal, { ...contentProps, ref: forwardedRef }) }) }) });
});
var MenuRootContentModal = React34.forwardRef((props, forwardedRef) => {
  const context = useMenuContext(CONTENT_NAME2, props.__scopeMenu);
  const ref = React34.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  React34.useEffect(() => {
    const content = ref.current;
    if (content)
      return hideOthers(content);
  }, []);
  return /* @__PURE__ */ jsx15(MenuContentImpl, {
    ...props,
    ref: composedRefs,
    trapFocus: context.open,
    disableOutsidePointerEvents: context.open,
    disableOutsideScroll: true,
    onFocusOutside: composeEventHandlers(props.onFocusOutside, (event) => event.preventDefault(), { checkForDefaultPrevented: false }),
    onDismiss: () => context.onOpenChange(false)
  });
});
var MenuRootContentNonModal = React34.forwardRef((props, forwardedRef) => {
  const context = useMenuContext(CONTENT_NAME2, props.__scopeMenu);
  return /* @__PURE__ */ jsx15(MenuContentImpl, {
    ...props,
    ref: forwardedRef,
    trapFocus: false,
    disableOutsidePointerEvents: false,
    disableOutsideScroll: false,
    onDismiss: () => context.onOpenChange(false)
  });
});
var Slot2 = createSlot("MenuContent.ScrollLock");
var MenuContentImpl = React34.forwardRef((props, forwardedRef) => {
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
  const context = useMenuContext(CONTENT_NAME2, __scopeMenu);
  const rootContext = useMenuRootContext(CONTENT_NAME2, __scopeMenu);
  const popperScope = usePopperScope(__scopeMenu);
  const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeMenu);
  const getItems = useCollection2(__scopeMenu);
  const [currentItemId, setCurrentItemId] = React34.useState(null);
  const contentRef = React34.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, contentRef, context.onContentChange);
  const timerRef = React34.useRef(0);
  const searchRef = React34.useRef("");
  const pointerGraceTimerRef = React34.useRef(0);
  const pointerGraceIntentRef = React34.useRef(null);
  const pointerDirRef = React34.useRef("right");
  const lastPointerXRef = React34.useRef(0);
  const ScrollLockWrapper = disableOutsideScroll ? Combination_default : React34.Fragment;
  const scrollLockWrapperProps = disableOutsideScroll ? { as: Slot2, allowPinchZoom: true } : undefined;
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
  React34.useEffect(() => {
    return () => window.clearTimeout(timerRef.current);
  }, []);
  useFocusGuards();
  const isPointerMovingToSubmenu = React34.useCallback((event) => {
    const isMovingTowards = pointerDirRef.current === pointerGraceIntentRef.current?.side;
    return isMovingTowards && isPointerInGraceArea(event, pointerGraceIntentRef.current?.area);
  }, []);
  return /* @__PURE__ */ jsx15(MenuContentProvider, {
    scope: __scopeMenu,
    searchRef,
    onItemEnter: React34.useCallback((event) => {
      if (isPointerMovingToSubmenu(event))
        event.preventDefault();
    }, [isPointerMovingToSubmenu]),
    onItemLeave: React34.useCallback((event) => {
      if (isPointerMovingToSubmenu(event))
        return;
      contentRef.current?.focus();
      setCurrentItemId(null);
    }, [isPointerMovingToSubmenu]),
    onTriggerLeave: React34.useCallback((event) => {
      if (isPointerMovingToSubmenu(event))
        event.preventDefault();
    }, [isPointerMovingToSubmenu]),
    pointerGraceTimerRef,
    onPointerGraceIntentChange: React34.useCallback((intent) => {
      pointerGraceIntentRef.current = intent;
    }, []),
    children: /* @__PURE__ */ jsx15(ScrollLockWrapper, { ...scrollLockWrapperProps, children: /* @__PURE__ */ jsx15(FocusScope, {
      asChild: true,
      trapped: trapFocus,
      onMountAutoFocus: composeEventHandlers(onOpenAutoFocus, (event) => {
        event.preventDefault();
        contentRef.current?.focus({ preventScroll: true });
      }),
      onUnmountAutoFocus: onCloseAutoFocus,
      children: /* @__PURE__ */ jsx15(DismissableLayer, {
        asChild: true,
        disableOutsidePointerEvents,
        onEscapeKeyDown,
        onPointerDownOutside,
        onFocusOutside,
        onInteractOutside,
        onDismiss,
        children: /* @__PURE__ */ jsx15(Root3, {
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
          children: /* @__PURE__ */ jsx15(Content, {
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
MenuContent.displayName = CONTENT_NAME2;
var GROUP_NAME2 = "MenuGroup";
var MenuGroup = React34.forwardRef((props, forwardedRef) => {
  const { __scopeMenu, ...groupProps } = props;
  return /* @__PURE__ */ jsx15(Primitive.div, { role: "group", ...groupProps, ref: forwardedRef });
});
MenuGroup.displayName = GROUP_NAME2;
var LABEL_NAME = "MenuLabel";
var MenuLabel = React34.forwardRef((props, forwardedRef) => {
  const { __scopeMenu, ...labelProps } = props;
  return /* @__PURE__ */ jsx15(Primitive.div, { ...labelProps, ref: forwardedRef });
});
MenuLabel.displayName = LABEL_NAME;
var ITEM_NAME2 = "MenuItem";
var ITEM_SELECT = "menu.itemSelect";
var MenuItem = React34.forwardRef((props, forwardedRef) => {
  const { disabled = false, onSelect, ...itemProps } = props;
  const ref = React34.useRef(null);
  const rootContext = useMenuRootContext(ITEM_NAME2, props.__scopeMenu);
  const contentContext = useMenuContentContext(ITEM_NAME2, props.__scopeMenu);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const isPointerDownRef = React34.useRef(false);
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
  return /* @__PURE__ */ jsx15(MenuItemImpl, {
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
      if (SELECTION_KEYS.includes(event.key)) {
        event.currentTarget.click();
        event.preventDefault();
      }
    })
  });
});
MenuItem.displayName = ITEM_NAME2;
var MenuItemImpl = React34.forwardRef((props, forwardedRef) => {
  const { __scopeMenu, disabled = false, textValue, ...itemProps } = props;
  const contentContext = useMenuContentContext(ITEM_NAME2, __scopeMenu);
  const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeMenu);
  const ref = React34.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const [isFocused, setIsFocused] = React34.useState(false);
  const [textContent, setTextContent] = React34.useState("");
  React34.useEffect(() => {
    const menuItem = ref.current;
    if (menuItem) {
      setTextContent((menuItem.textContent ?? "").trim());
    }
  }, [itemProps.children]);
  return /* @__PURE__ */ jsx15(Collection2.ItemSlot, {
    scope: __scopeMenu,
    disabled,
    textValue: textValue ?? textContent,
    children: /* @__PURE__ */ jsx15(Item, { asChild: true, ...rovingFocusGroupScope, focusable: !disabled, children: /* @__PURE__ */ jsx15(Primitive.div, {
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
var MenuCheckboxItem = React34.forwardRef((props, forwardedRef) => {
  const { checked = false, onCheckedChange, ...checkboxItemProps } = props;
  return /* @__PURE__ */ jsx15(ItemIndicatorProvider, { scope: props.__scopeMenu, checked, children: /* @__PURE__ */ jsx15(MenuItem, {
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
var MenuRadioGroup = React34.forwardRef((props, forwardedRef) => {
  const { value, onValueChange, ...groupProps } = props;
  const handleValueChange = useCallbackRef(onValueChange);
  return /* @__PURE__ */ jsx15(RadioGroupProvider, { scope: props.__scopeMenu, value, onValueChange: handleValueChange, children: /* @__PURE__ */ jsx15(MenuGroup, { ...groupProps, ref: forwardedRef }) });
});
MenuRadioGroup.displayName = RADIO_GROUP_NAME;
var RADIO_ITEM_NAME = "MenuRadioItem";
var MenuRadioItem = React34.forwardRef((props, forwardedRef) => {
  const { value, ...radioItemProps } = props;
  const context = useRadioGroupContext(RADIO_ITEM_NAME, props.__scopeMenu);
  const checked = value === context.value;
  return /* @__PURE__ */ jsx15(ItemIndicatorProvider, { scope: props.__scopeMenu, checked, children: /* @__PURE__ */ jsx15(MenuItem, {
    role: "menuitemradio",
    "aria-checked": checked,
    ...radioItemProps,
    ref: forwardedRef,
    "data-state": getCheckedState(checked),
    onSelect: composeEventHandlers(radioItemProps.onSelect, () => context.onValueChange?.(value), { checkForDefaultPrevented: false })
  }) });
});
MenuRadioItem.displayName = RADIO_ITEM_NAME;
var ITEM_INDICATOR_NAME = "MenuItemIndicator";
var [ItemIndicatorProvider, useItemIndicatorContext] = createMenuContext(ITEM_INDICATOR_NAME, { checked: false });
var MenuItemIndicator = React34.forwardRef((props, forwardedRef) => {
  const { __scopeMenu, forceMount, ...itemIndicatorProps } = props;
  const indicatorContext = useItemIndicatorContext(ITEM_INDICATOR_NAME, __scopeMenu);
  return /* @__PURE__ */ jsx15(Presence, {
    present: forceMount || isIndeterminate(indicatorContext.checked) || indicatorContext.checked === true,
    children: /* @__PURE__ */ jsx15(Primitive.span, {
      ...itemIndicatorProps,
      ref: forwardedRef,
      "data-state": getCheckedState(indicatorContext.checked)
    })
  });
});
MenuItemIndicator.displayName = ITEM_INDICATOR_NAME;
var SEPARATOR_NAME = "MenuSeparator";
var MenuSeparator = React34.forwardRef((props, forwardedRef) => {
  const { __scopeMenu, ...separatorProps } = props;
  return /* @__PURE__ */ jsx15(Primitive.div, {
    role: "separator",
    "aria-orientation": "horizontal",
    ...separatorProps,
    ref: forwardedRef
  });
});
MenuSeparator.displayName = SEPARATOR_NAME;
var ARROW_NAME2 = "MenuArrow";
var MenuArrow = React34.forwardRef((props, forwardedRef) => {
  const { __scopeMenu, ...arrowProps } = props;
  const popperScope = usePopperScope(__scopeMenu);
  return /* @__PURE__ */ jsx15(Arrow2, { ...popperScope, ...arrowProps, ref: forwardedRef });
});
MenuArrow.displayName = ARROW_NAME2;
var SUB_NAME = "MenuSub";
var [MenuSubProvider, useMenuSubContext] = createMenuContext(SUB_NAME);
var MenuSub = (props) => {
  const { __scopeMenu, children, open = false, onOpenChange } = props;
  const parentMenuContext = useMenuContext(SUB_NAME, __scopeMenu);
  const popperScope = usePopperScope(__scopeMenu);
  const [trigger, setTrigger] = React34.useState(null);
  const [content, setContent] = React34.useState(null);
  const handleOpenChange = useCallbackRef(onOpenChange);
  React34.useEffect(() => {
    if (parentMenuContext.open === false)
      handleOpenChange(false);
    return () => handleOpenChange(false);
  }, [parentMenuContext.open, handleOpenChange]);
  return /* @__PURE__ */ jsx15(Root2, { ...popperScope, children: /* @__PURE__ */ jsx15(MenuProvider, {
    scope: __scopeMenu,
    open,
    onOpenChange: handleOpenChange,
    content,
    onContentChange: setContent,
    children: /* @__PURE__ */ jsx15(MenuSubProvider, {
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
var MenuSubTrigger = React34.forwardRef((props, forwardedRef) => {
  const context = useMenuContext(SUB_TRIGGER_NAME, props.__scopeMenu);
  const rootContext = useMenuRootContext(SUB_TRIGGER_NAME, props.__scopeMenu);
  const subContext = useMenuSubContext(SUB_TRIGGER_NAME, props.__scopeMenu);
  const contentContext = useMenuContentContext(SUB_TRIGGER_NAME, props.__scopeMenu);
  const openTimerRef = React34.useRef(null);
  const { pointerGraceTimerRef, onPointerGraceIntentChange } = contentContext;
  const scope = { __scopeMenu: props.__scopeMenu };
  const clearOpenTimer = React34.useCallback(() => {
    if (openTimerRef.current)
      window.clearTimeout(openTimerRef.current);
    openTimerRef.current = null;
  }, []);
  React34.useEffect(() => clearOpenTimer, [clearOpenTimer]);
  React34.useEffect(() => {
    const pointerGraceTimer = pointerGraceTimerRef.current;
    return () => {
      window.clearTimeout(pointerGraceTimer);
      onPointerGraceIntentChange(null);
    };
  }, [pointerGraceTimerRef, onPointerGraceIntentChange]);
  return /* @__PURE__ */ jsx15(MenuAnchor, { asChild: true, ...scope, children: /* @__PURE__ */ jsx15(MenuItemImpl, {
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
var MenuSubContent = React34.forwardRef((props, forwardedRef) => {
  const portalContext = usePortalContext(CONTENT_NAME2, props.__scopeMenu);
  const { forceMount = portalContext.forceMount, ...subContentProps } = props;
  const context = useMenuContext(CONTENT_NAME2, props.__scopeMenu);
  const rootContext = useMenuRootContext(CONTENT_NAME2, props.__scopeMenu);
  const subContext = useMenuSubContext(SUB_CONTENT_NAME, props.__scopeMenu);
  const ref = React34.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  return /* @__PURE__ */ jsx15(Collection2.Provider, { scope: props.__scopeMenu, children: /* @__PURE__ */ jsx15(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsx15(Collection2.Slot, { scope: props.__scopeMenu, children: /* @__PURE__ */ jsx15(MenuContentImpl, {
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
function wrapArray2(array, startIndex) {
  return array.map((_, index2) => array[(startIndex + index2) % array.length]);
}
function getNextMatch(values, search, currentMatch) {
  const isRepeated = search.length > 1 && Array.from(search).every((char) => char === search[0]);
  const normalizedSearch = isRepeated ? search[0] : search;
  const currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1;
  let wrappedValues = wrapArray2(values, Math.max(currentMatchIndex, 0));
  const excludeCurrentMatch = normalizedSearch.length === 1;
  if (excludeCurrentMatch)
    wrappedValues = wrappedValues.filter((v) => v !== currentMatch);
  const nextMatch = wrappedValues.find((value) => value.toLowerCase().startsWith(normalizedSearch.toLowerCase()));
  return nextMatch !== currentMatch ? nextMatch : undefined;
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
function isPointerInGraceArea(event, area) {
  if (!area)
    return false;
  const cursorPos = { x: event.clientX, y: event.clientY };
  return isPointInPolygon(cursorPos, area);
}
function whenMouse(handler) {
  return (event) => event.pointerType === "mouse" ? handler(event) : undefined;
}
var Root32 = Menu;
var Anchor2 = MenuAnchor;
var Portal2 = MenuPortal;
var Content2 = MenuContent;
var Group = MenuGroup;
var Label = MenuLabel;
var Item2 = MenuItem;
var CheckboxItem = MenuCheckboxItem;
var RadioGroup = MenuRadioGroup;
var RadioItem = MenuRadioItem;
var ItemIndicator = MenuItemIndicator;
var Separator = MenuSeparator;
var Arrow22 = MenuArrow;
var Sub = MenuSub;
var SubTrigger = MenuSubTrigger;
var SubContent = MenuSubContent;

// ../../node_modules/@radix-ui/react-menubar/dist/index.mjs
import { jsx as jsx16 } from "react/jsx-runtime";
"use client";
var MENUBAR_NAME = "Menubar";
var [Collection3, useCollection3, createCollectionScope3] = createCollection(MENUBAR_NAME);
var [createMenubarContext, createMenubarScope] = createContextScope(MENUBAR_NAME, [
  createCollectionScope3,
  createRovingFocusGroupScope
]);
var useMenuScope = createMenuScope();
var useRovingFocusGroupScope2 = createRovingFocusGroupScope();
var [MenubarContextProvider, useMenubarContext] = createMenubarContext(MENUBAR_NAME);
var Menubar = React35.forwardRef((props, forwardedRef) => {
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
  const [currentTabStopId, setCurrentTabStopId] = React35.useState(null);
  return /* @__PURE__ */ jsx16(MenubarContextProvider, {
    scope: __scopeMenubar,
    value,
    onMenuOpen: React35.useCallback((value2) => {
      setValue(value2);
      setCurrentTabStopId(value2);
    }, [setValue]),
    onMenuClose: React35.useCallback(() => setValue(""), [setValue]),
    onMenuToggle: React35.useCallback((value2) => {
      setValue((prevValue) => prevValue ? "" : value2);
      setCurrentTabStopId(value2);
    }, [setValue]),
    dir: direction,
    loop,
    children: /* @__PURE__ */ jsx16(Collection3.Provider, { scope: __scopeMenubar, children: /* @__PURE__ */ jsx16(Collection3.Slot, { scope: __scopeMenubar, children: /* @__PURE__ */ jsx16(Root3, {
      asChild: true,
      ...rovingFocusGroupScope,
      orientation: "horizontal",
      loop,
      dir: direction,
      currentTabStopId,
      onCurrentTabStopIdChange: setCurrentTabStopId,
      children: /* @__PURE__ */ jsx16(Primitive.div, { role: "menubar", ...menubarProps, ref: forwardedRef })
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
  const menuScope = useMenuScope(__scopeMenubar);
  const triggerRef = React35.useRef(null);
  const wasKeyboardTriggerOpenRef = React35.useRef(false);
  const open = context.value === value;
  React35.useEffect(() => {
    if (!open)
      wasKeyboardTriggerOpenRef.current = false;
  }, [open]);
  return /* @__PURE__ */ jsx16(MenubarMenuProvider, {
    scope: __scopeMenubar,
    value,
    triggerId: useId(),
    triggerRef,
    contentId: useId(),
    wasKeyboardTriggerOpenRef,
    children: /* @__PURE__ */ jsx16(Root32, {
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
var TRIGGER_NAME = "MenubarTrigger";
var MenubarTrigger = React35.forwardRef((props, forwardedRef) => {
  const { __scopeMenubar, disabled = false, ...triggerProps } = props;
  const rovingFocusGroupScope = useRovingFocusGroupScope2(__scopeMenubar);
  const menuScope = useMenuScope(__scopeMenubar);
  const context = useMenubarContext(TRIGGER_NAME, __scopeMenubar);
  const menuContext = useMenubarMenuContext(TRIGGER_NAME, __scopeMenubar);
  const ref = React35.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref, menuContext.triggerRef);
  const [isFocused, setIsFocused] = React35.useState(false);
  const open = context.value === menuContext.value;
  return /* @__PURE__ */ jsx16(Collection3.ItemSlot, { scope: __scopeMenubar, value: menuContext.value, disabled, children: /* @__PURE__ */ jsx16(Item, {
    asChild: true,
    ...rovingFocusGroupScope,
    focusable: !disabled,
    tabStopId: menuContext.value,
    children: /* @__PURE__ */ jsx16(Anchor2, { asChild: true, ...menuScope, children: /* @__PURE__ */ jsx16(Primitive.button, {
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
MenubarTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME3 = "MenubarPortal";
var MenubarPortal = (props) => {
  const { __scopeMenubar, ...portalProps } = props;
  const menuScope = useMenuScope(__scopeMenubar);
  return /* @__PURE__ */ jsx16(Portal2, { ...menuScope, ...portalProps });
};
MenubarPortal.displayName = PORTAL_NAME3;
var CONTENT_NAME3 = "MenubarContent";
var MenubarContent = React35.forwardRef((props, forwardedRef) => {
  const { __scopeMenubar, align = "start", ...contentProps } = props;
  const menuScope = useMenuScope(__scopeMenubar);
  const context = useMenubarContext(CONTENT_NAME3, __scopeMenubar);
  const menuContext = useMenubarMenuContext(CONTENT_NAME3, __scopeMenubar);
  const getItems = useCollection3(__scopeMenubar);
  const hasInteractedOutsideRef = React35.useRef(false);
  return /* @__PURE__ */ jsx16(Content2, {
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
        const items = getItems().filter((item) => !item.disabled);
        let candidateValues = items.map((item) => item.value);
        if (isPrevKey)
          candidateValues.reverse();
        const currentIndex = candidateValues.indexOf(menuContext.value);
        candidateValues = context.loop ? wrapArray3(candidateValues, currentIndex + 1) : candidateValues.slice(currentIndex + 1);
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
MenubarContent.displayName = CONTENT_NAME3;
var GROUP_NAME3 = "MenubarGroup";
var MenubarGroup = React35.forwardRef((props, forwardedRef) => {
  const { __scopeMenubar, ...groupProps } = props;
  const menuScope = useMenuScope(__scopeMenubar);
  return /* @__PURE__ */ jsx16(Group, { ...menuScope, ...groupProps, ref: forwardedRef });
});
MenubarGroup.displayName = GROUP_NAME3;
var LABEL_NAME2 = "MenubarLabel";
var MenubarLabel = React35.forwardRef((props, forwardedRef) => {
  const { __scopeMenubar, ...labelProps } = props;
  const menuScope = useMenuScope(__scopeMenubar);
  return /* @__PURE__ */ jsx16(Label, { ...menuScope, ...labelProps, ref: forwardedRef });
});
MenubarLabel.displayName = LABEL_NAME2;
var ITEM_NAME3 = "MenubarItem";
var MenubarItem = React35.forwardRef((props, forwardedRef) => {
  const { __scopeMenubar, ...itemProps } = props;
  const menuScope = useMenuScope(__scopeMenubar);
  return /* @__PURE__ */ jsx16(Item2, { ...menuScope, ...itemProps, ref: forwardedRef });
});
MenubarItem.displayName = ITEM_NAME3;
var CHECKBOX_ITEM_NAME2 = "MenubarCheckboxItem";
var MenubarCheckboxItem = React35.forwardRef((props, forwardedRef) => {
  const { __scopeMenubar, ...checkboxItemProps } = props;
  const menuScope = useMenuScope(__scopeMenubar);
  return /* @__PURE__ */ jsx16(CheckboxItem, { ...menuScope, ...checkboxItemProps, ref: forwardedRef });
});
MenubarCheckboxItem.displayName = CHECKBOX_ITEM_NAME2;
var RADIO_GROUP_NAME2 = "MenubarRadioGroup";
var MenubarRadioGroup = React35.forwardRef((props, forwardedRef) => {
  const { __scopeMenubar, ...radioGroupProps } = props;
  const menuScope = useMenuScope(__scopeMenubar);
  return /* @__PURE__ */ jsx16(RadioGroup, { ...menuScope, ...radioGroupProps, ref: forwardedRef });
});
MenubarRadioGroup.displayName = RADIO_GROUP_NAME2;
var RADIO_ITEM_NAME2 = "MenubarRadioItem";
var MenubarRadioItem = React35.forwardRef((props, forwardedRef) => {
  const { __scopeMenubar, ...radioItemProps } = props;
  const menuScope = useMenuScope(__scopeMenubar);
  return /* @__PURE__ */ jsx16(RadioItem, { ...menuScope, ...radioItemProps, ref: forwardedRef });
});
MenubarRadioItem.displayName = RADIO_ITEM_NAME2;
var INDICATOR_NAME = "MenubarItemIndicator";
var MenubarItemIndicator = React35.forwardRef((props, forwardedRef) => {
  const { __scopeMenubar, ...itemIndicatorProps } = props;
  const menuScope = useMenuScope(__scopeMenubar);
  return /* @__PURE__ */ jsx16(ItemIndicator, { ...menuScope, ...itemIndicatorProps, ref: forwardedRef });
});
MenubarItemIndicator.displayName = INDICATOR_NAME;
var SEPARATOR_NAME2 = "MenubarSeparator";
var MenubarSeparator = React35.forwardRef((props, forwardedRef) => {
  const { __scopeMenubar, ...separatorProps } = props;
  const menuScope = useMenuScope(__scopeMenubar);
  return /* @__PURE__ */ jsx16(Separator, { ...menuScope, ...separatorProps, ref: forwardedRef });
});
MenubarSeparator.displayName = SEPARATOR_NAME2;
var ARROW_NAME3 = "MenubarArrow";
var MenubarArrow = React35.forwardRef((props, forwardedRef) => {
  const { __scopeMenubar, ...arrowProps } = props;
  const menuScope = useMenuScope(__scopeMenubar);
  return /* @__PURE__ */ jsx16(Arrow22, { ...menuScope, ...arrowProps, ref: forwardedRef });
});
MenubarArrow.displayName = ARROW_NAME3;
var SUB_NAME2 = "MenubarSub";
var MenubarSub = (props) => {
  const { __scopeMenubar, children, open: openProp, onOpenChange, defaultOpen } = props;
  const menuScope = useMenuScope(__scopeMenubar);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
    caller: SUB_NAME2
  });
  return /* @__PURE__ */ jsx16(Sub, { ...menuScope, open, onOpenChange: setOpen, children });
};
MenubarSub.displayName = SUB_NAME2;
var SUB_TRIGGER_NAME2 = "MenubarSubTrigger";
var MenubarSubTrigger = React35.forwardRef((props, forwardedRef) => {
  const { __scopeMenubar, ...subTriggerProps } = props;
  const menuScope = useMenuScope(__scopeMenubar);
  return /* @__PURE__ */ jsx16(SubTrigger, {
    "data-radix-menubar-subtrigger": "",
    ...menuScope,
    ...subTriggerProps,
    ref: forwardedRef
  });
});
MenubarSubTrigger.displayName = SUB_TRIGGER_NAME2;
var SUB_CONTENT_NAME2 = "MenubarSubContent";
var MenubarSubContent = React35.forwardRef((props, forwardedRef) => {
  const { __scopeMenubar, ...subContentProps } = props;
  const menuScope = useMenuScope(__scopeMenubar);
  return /* @__PURE__ */ jsx16(SubContent, {
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
MenubarSubContent.displayName = SUB_CONTENT_NAME2;
function wrapArray3(array, startIndex) {
  return array.map((_, index2) => array[(startIndex + index2) % array.length]);
}
var Root33 = Menubar;
var Menu2 = MenubarMenu;
var Trigger = MenubarTrigger;
var Portal22 = MenubarPortal;
var Content22 = MenubarContent;
var Item3 = MenubarItem;
var CheckboxItem2 = MenubarCheckboxItem;
var RadioGroup2 = MenubarRadioGroup;
var RadioItem2 = MenubarRadioItem;
var ItemIndicator2 = MenubarItemIndicator;
var Separator2 = MenubarSeparator;
var Sub2 = MenubarSub;
var SubTrigger2 = MenubarSubTrigger;
var SubContent2 = MenubarSubContent;

// src/shadcn-ui/components/menubar.tsx
import clsx3 from "clsx";

// src/vibrant/components/svg-icon.tsx
import { createSpriteIcon } from "@ycore/componentry/images";
var SvgIcon = createSpriteIcon("lucide");

// src/shadcn-ui/components/menubar.tsx
import { jsx as jsx17, jsxs as jsxs2 } from "react/jsx-runtime";
function Menubar2({ className, ...props }) {
  return /* @__PURE__ */ jsx17(Root33, {
    "data-slot": "menubar",
    className: clsx3("flex h-9 items-center gap-1 rounded-md border bg-background p-1 shadow-xs", className),
    ...props
  });
}
function MenubarMenu2({ ...props }) {
  return /* @__PURE__ */ jsx17(Menu2, {
    "data-slot": "menubar-menu",
    ...props
  });
}
function MenubarPortal2({ ...props }) {
  return /* @__PURE__ */ jsx17(Portal22, {
    "data-slot": "menubar-portal",
    ...props
  });
}
function MenubarRadioGroup2({ ...props }) {
  return /* @__PURE__ */ jsx17(RadioGroup2, {
    "data-slot": "menubar-radio-group",
    ...props
  });
}
function MenubarTrigger2({ className, ...props }) {
  return /* @__PURE__ */ jsx17(Trigger, {
    "data-slot": "menubar-trigger",
    className: clsx3("flex select-none items-center rounded-sm px-2 py-1 font-medium text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground", className),
    ...props
  });
}
function MenubarContent2({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }) {
  return /* @__PURE__ */ jsx17(MenubarPortal2, {
    children: /* @__PURE__ */ jsx17(Content22, {
      "data-slot": "menubar-content",
      align,
      alignOffset,
      sideOffset,
      className: clsx3("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in", className),
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
  return /* @__PURE__ */ jsx17(Item3, {
    "data-slot": "menubar-item",
    "data-inset": inset,
    "data-variant": variant,
    className: clsx3("data-[variant=destructive]:*:[svg]:!text-destructive relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[disabled]:opacity-50 data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props
  });
}
function MenubarCheckboxItem2({ className, children, checked, ...props }) {
  return /* @__PURE__ */ jsxs2(CheckboxItem2, {
    "data-slot": "menubar-checkbox-item",
    className: clsx3("relative flex cursor-default select-none items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx17("span", {
        className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
        children: /* @__PURE__ */ jsx17(ItemIndicator2, {
          children: /* @__PURE__ */ jsx17(SvgIcon, {
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
  return /* @__PURE__ */ jsxs2(RadioItem2, {
    "data-slot": "menubar-radio-item",
    className: clsx3("relative flex cursor-default select-none items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx17("span", {
        className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
        children: /* @__PURE__ */ jsx17(ItemIndicator2, {
          children: /* @__PURE__ */ jsx17(SvgIcon, {
            iconId: "Circle",
            className: "size-2 fill-current"
          })
        })
      }),
      children
    ]
  });
}
function MenubarSeparator2({ className, ...props }) {
  return /* @__PURE__ */ jsx17(Separator2, {
    "data-slot": "menubar-separator",
    className: clsx3("-mx-1 my-1 h-px bg-border", className),
    ...props
  });
}
function MenubarShortcut({ className, ...props }) {
  return /* @__PURE__ */ jsx17("span", {
    "data-slot": "menubar-shortcut",
    className: clsx3("ml-auto text-muted-foreground text-xs tracking-widest", className),
    ...props
  });
}
function MenubarSub2({ ...props }) {
  return /* @__PURE__ */ jsx17(Sub2, {
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
  return /* @__PURE__ */ jsxs2(SubTrigger2, {
    "data-slot": "menubar-sub-trigger",
    "data-inset": inset,
    className: clsx3("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[inset]:pl-8 data-[state=open]:text-accent-foreground", className),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx17(SvgIcon, {
        iconId: "ChevronRight",
        className: "ml-auto h-4 w-4"
      })
    ]
  });
}
function MenubarSubContent2({ className, ...props }) {
  return /* @__PURE__ */ jsx17(SubContent2, {
    "data-slot": "menubar-sub-content",
    className: clsx3("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=closed]:animate-out data-[state=open]:animate-in", className),
    ...props
  });
}

// ../../node_modules/@radix-ui/react-dialog/dist/index.mjs
import * as React36 from "react";
import { Fragment as Fragment7, jsx as jsx18, jsxs as jsxs3 } from "react/jsx-runtime";
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
  const triggerRef = React36.useRef(null);
  const contentRef = React36.useRef(null);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
    caller: DIALOG_NAME
  });
  return /* @__PURE__ */ jsx18(DialogProvider, {
    scope: __scopeDialog,
    triggerRef,
    contentRef,
    contentId: useId(),
    titleId: useId(),
    descriptionId: useId(),
    open,
    onOpenChange: setOpen,
    onOpenToggle: React36.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
    modal,
    children
  });
};
Dialog.displayName = DIALOG_NAME;
var TRIGGER_NAME2 = "DialogTrigger";
var DialogTrigger = React36.forwardRef((props, forwardedRef) => {
  const { __scopeDialog, ...triggerProps } = props;
  const context = useDialogContext(TRIGGER_NAME2, __scopeDialog);
  const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
  return /* @__PURE__ */ jsx18(Primitive.button, {
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": context.open,
    "aria-controls": context.contentId,
    "data-state": getState(context.open),
    ...triggerProps,
    ref: composedTriggerRef,
    onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
  });
});
DialogTrigger.displayName = TRIGGER_NAME2;
var PORTAL_NAME4 = "DialogPortal";
var [PortalProvider2, usePortalContext2] = createDialogContext(PORTAL_NAME4, {
  forceMount: undefined
});
var DialogPortal = (props) => {
  const { __scopeDialog, forceMount, children, container } = props;
  const context = useDialogContext(PORTAL_NAME4, __scopeDialog);
  return /* @__PURE__ */ jsx18(PortalProvider2, { scope: __scopeDialog, forceMount, children: React36.Children.map(children, (child) => /* @__PURE__ */ jsx18(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsx18(Portal, { asChild: true, container, children: child }) })) });
};
DialogPortal.displayName = PORTAL_NAME4;
var OVERLAY_NAME = "DialogOverlay";
var DialogOverlay = React36.forwardRef((props, forwardedRef) => {
  const portalContext = usePortalContext2(OVERLAY_NAME, props.__scopeDialog);
  const { forceMount = portalContext.forceMount, ...overlayProps } = props;
  const context = useDialogContext(OVERLAY_NAME, props.__scopeDialog);
  return context.modal ? /* @__PURE__ */ jsx18(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsx18(DialogOverlayImpl, { ...overlayProps, ref: forwardedRef }) }) : null;
});
DialogOverlay.displayName = OVERLAY_NAME;
var Slot3 = createSlot("DialogOverlay.RemoveScroll");
var DialogOverlayImpl = React36.forwardRef((props, forwardedRef) => {
  const { __scopeDialog, ...overlayProps } = props;
  const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
  return /* @__PURE__ */ jsx18(Combination_default, { as: Slot3, allowPinchZoom: true, shards: [context.contentRef], children: /* @__PURE__ */ jsx18(Primitive.div, {
    "data-state": getState(context.open),
    ...overlayProps,
    ref: forwardedRef,
    style: { pointerEvents: "auto", ...overlayProps.style }
  }) });
});
var CONTENT_NAME4 = "DialogContent";
var DialogContent = React36.forwardRef((props, forwardedRef) => {
  const portalContext = usePortalContext2(CONTENT_NAME4, props.__scopeDialog);
  const { forceMount = portalContext.forceMount, ...contentProps } = props;
  const context = useDialogContext(CONTENT_NAME4, props.__scopeDialog);
  return /* @__PURE__ */ jsx18(Presence, { present: forceMount || context.open, children: context.modal ? /* @__PURE__ */ jsx18(DialogContentModal, { ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ jsx18(DialogContentNonModal, { ...contentProps, ref: forwardedRef }) });
});
DialogContent.displayName = CONTENT_NAME4;
var DialogContentModal = React36.forwardRef((props, forwardedRef) => {
  const context = useDialogContext(CONTENT_NAME4, props.__scopeDialog);
  const contentRef = React36.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, context.contentRef, contentRef);
  React36.useEffect(() => {
    const content = contentRef.current;
    if (content)
      return hideOthers(content);
  }, []);
  return /* @__PURE__ */ jsx18(DialogContentImpl, {
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
var DialogContentNonModal = React36.forwardRef((props, forwardedRef) => {
  const context = useDialogContext(CONTENT_NAME4, props.__scopeDialog);
  const hasInteractedOutsideRef = React36.useRef(false);
  const hasPointerDownOutsideRef = React36.useRef(false);
  return /* @__PURE__ */ jsx18(DialogContentImpl, {
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
var DialogContentImpl = React36.forwardRef((props, forwardedRef) => {
  const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
  const context = useDialogContext(CONTENT_NAME4, __scopeDialog);
  const contentRef = React36.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, contentRef);
  useFocusGuards();
  return /* @__PURE__ */ jsxs3(Fragment7, { children: [
    /* @__PURE__ */ jsx18(FocusScope, {
      asChild: true,
      loop: true,
      trapped: trapFocus,
      onMountAutoFocus: onOpenAutoFocus,
      onUnmountAutoFocus: onCloseAutoFocus,
      children: /* @__PURE__ */ jsx18(DismissableLayer, {
        role: "dialog",
        id: context.contentId,
        "aria-describedby": context.descriptionId,
        "aria-labelledby": context.titleId,
        "data-state": getState(context.open),
        ...contentProps,
        ref: composedRefs,
        onDismiss: () => context.onOpenChange(false)
      })
    }),
    /* @__PURE__ */ jsxs3(Fragment7, { children: [
      /* @__PURE__ */ jsx18(TitleWarning, { titleId: context.titleId }),
      /* @__PURE__ */ jsx18(DescriptionWarning, { contentRef, descriptionId: context.descriptionId })
    ] })
  ] });
});
var TITLE_NAME = "DialogTitle";
var DialogTitle = React36.forwardRef((props, forwardedRef) => {
  const { __scopeDialog, ...titleProps } = props;
  const context = useDialogContext(TITLE_NAME, __scopeDialog);
  return /* @__PURE__ */ jsx18(Primitive.h2, { id: context.titleId, ...titleProps, ref: forwardedRef });
});
DialogTitle.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "DialogDescription";
var DialogDescription = React36.forwardRef((props, forwardedRef) => {
  const { __scopeDialog, ...descriptionProps } = props;
  const context = useDialogContext(DESCRIPTION_NAME, __scopeDialog);
  return /* @__PURE__ */ jsx18(Primitive.p, { id: context.descriptionId, ...descriptionProps, ref: forwardedRef });
});
DialogDescription.displayName = DESCRIPTION_NAME;
var CLOSE_NAME = "DialogClose";
var DialogClose = React36.forwardRef((props, forwardedRef) => {
  const { __scopeDialog, ...closeProps } = props;
  const context = useDialogContext(CLOSE_NAME, __scopeDialog);
  return /* @__PURE__ */ jsx18(Primitive.button, {
    type: "button",
    ...closeProps,
    ref: forwardedRef,
    onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
  });
});
DialogClose.displayName = CLOSE_NAME;
function getState(open) {
  return open ? "open" : "closed";
}
var TITLE_WARNING_NAME = "DialogTitleWarning";
var [WarningProvider, useWarningContext] = createContext2(TITLE_WARNING_NAME, {
  contentName: CONTENT_NAME4,
  titleName: TITLE_NAME,
  docsSlug: "dialog"
});
var TitleWarning = ({ titleId }) => {
  const titleWarningContext = useWarningContext(TITLE_WARNING_NAME);
  const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`;
  React36.useEffect(() => {
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
  React36.useEffect(() => {
    const describedById = contentRef.current?.getAttribute("aria-describedby");
    if (descriptionId && describedById) {
      const hasDescription = document.getElementById(descriptionId);
      if (!hasDescription)
        console.warn(MESSAGE);
    }
  }, [MESSAGE, contentRef, descriptionId]);
  return null;
};
var Root5 = Dialog;
var Trigger2 = DialogTrigger;
var Portal3 = DialogPortal;
var Overlay = DialogOverlay;
var Content3 = DialogContent;
var Close = DialogClose;

// src/shadcn-ui/components/sheet.tsx
import clsx4 from "clsx";
import { jsx as jsx19, jsxs as jsxs4 } from "react/jsx-runtime";
function Sheet({ ...props }) {
  return /* @__PURE__ */ jsx19(Root5, {
    "data-slot": "sheet",
    ...props
  });
}
function SheetTrigger({ ...props }) {
  return /* @__PURE__ */ jsx19(Trigger2, {
    "data-slot": "sheet-trigger",
    ...props
  });
}
function SheetPortal({ ...props }) {
  return /* @__PURE__ */ jsx19(Portal3, {
    "data-slot": "sheet-portal",
    ...props
  });
}
function SheetOverlay({ className, ...props }) {
  return /* @__PURE__ */ jsx19(Overlay, {
    "data-slot": "sheet-overlay",
    className: clsx4("data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=open]:animate-in", className),
    ...props
  });
}
function SheetContent({
  className,
  children,
  side = "right",
  ...props
}) {
  return /* @__PURE__ */ jsxs4(SheetPortal, {
    children: [
      /* @__PURE__ */ jsx19(SheetOverlay, {}),
      /* @__PURE__ */ jsxs4(Content3, {
        "data-slot": "sheet-content",
        className: clsx4("fixed z-50 flex flex-col gap-4 bg-background shadow-lg transition ease-in-out data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:duration-300 data-[state=open]:duration-500", side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm", side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm", side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b", side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t", className),
        ...props,
        children: [
          children,
          /* @__PURE__ */ jsxs4(Close, {
            className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
            children: [
              /* @__PURE__ */ jsx19(SvgIcon, {
                iconId: "X",
                className: "size-4"
              }),
              /* @__PURE__ */ jsx19("span", {
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

// src/vibrant/components/link.tsx
import React37 from "react";
import { Link as RouterLink } from "react-router";
import { jsx as jsx20 } from "react/jsx-runtime";
var Link2 = React37.forwardRef(function Link3(props, ref) {
  return /* @__PURE__ */ jsx20(RouterLink, {
    ...props,
    to: props.href,
    ref
  });
});

// src/impetus/components/NavMenu.tsx
import { jsx as jsx21, jsxs as jsxs5, Fragment as Fragment8 } from "react/jsx-runtime";
var MenubarContext = createContext6(null);
function renderMenubarItem(item, index2, context) {
  const { currentPath, IconSprite } = context;
  if (item.separator) {
    return /* @__PURE__ */ jsx21(MenubarSeparator2, {}, `separator-${index2}`);
  }
  if (item.component) {
    const Component = item.component;
    return /* @__PURE__ */ jsx21(Component, {}, `component-${index2}`);
  }
  const isActive = item.href && currentPath === item.href;
  if (item.items) {
    return /* @__PURE__ */ jsxs5(MenubarSub2, {
      children: [
        /* @__PURE__ */ jsxs5(MenubarSubTrigger2, {
          inset: item.inset,
          children: [
            item.iconId && /* @__PURE__ */ jsx21(IconSprite, {
              iconId: item.iconId
            }),
            item.label
          ]
        }),
        /* @__PURE__ */ jsx21(MenubarSubContent2, {
          children: item.items.map((subItem, subIndex) => renderMenubarItem(subItem, subIndex, context))
        })
      ]
    }, `sub-${index2}`);
  }
  if (item.checked !== undefined) {
    return /* @__PURE__ */ jsxs5(MenubarCheckboxItem2, {
      checked: item.checked,
      disabled: item.disabled,
      children: [
        item.iconId && /* @__PURE__ */ jsx21(IconSprite, {
          iconId: item.iconId
        }),
        item.label,
        item.shortcut && /* @__PURE__ */ jsx21(MenubarShortcut, {
          children: item.shortcut
        })
      ]
    }, `checkbox-${index2}`);
  }
  if (item.value !== undefined) {
    return /* @__PURE__ */ jsxs5(MenubarRadioItem2, {
      value: item.value,
      disabled: item.disabled,
      children: [
        item.iconId && /* @__PURE__ */ jsx21(IconSprite, {
          iconId: item.iconId
        }),
        item.label,
        item.shortcut && /* @__PURE__ */ jsx21(MenubarShortcut, {
          children: item.shortcut
        })
      ]
    }, `radio-${index2}`);
  }
  const ItemContent = /* @__PURE__ */ jsxs5(Fragment8, {
    children: [
      item.iconId && /* @__PURE__ */ jsx21(IconSprite, {
        iconId: item.iconId
      }),
      item.label,
      item.shortcut && /* @__PURE__ */ jsx21(MenubarShortcut, {
        children: item.shortcut
      })
    ]
  });
  if (item.href) {
    return /* @__PURE__ */ jsx21(MenubarItem2, {
      asChild: true,
      disabled: item.disabled,
      inset: item.inset,
      variant: item.variant,
      className: clsx5(isActive && "bg-accent text-accent-foreground"),
      children: /* @__PURE__ */ jsx21(Link2, {
        href: item.href,
        children: ItemContent
      })
    }, `item-${index2}`);
  }
  return /* @__PURE__ */ jsx21(MenubarItem2, {
    disabled: item.disabled,
    inset: item.inset,
    variant: item.variant,
    children: ItemContent
  }, `item-${index2}`);
}
function renderMenuConfigItem(configItem, index2, context) {
  const { currentPath, IconSprite, spriteKey } = context;
  if (configItem.radioGroup) {
    return /* @__PURE__ */ jsxs5(MenubarMenu2, {
      children: [
        /* @__PURE__ */ jsx21(MenubarTrigger2, {
          children: "Radio Group"
        }),
        /* @__PURE__ */ jsx21(MenubarContent2, {
          children: /* @__PURE__ */ jsx21(MenubarRadioGroup2, {
            value: configItem.value,
            children: configItem.items?.map((item, itemIndex) => renderMenubarItem(item, itemIndex, context))
          })
        })
      ]
    }, `radio-menu-${index2}`);
  }
  if (configItem.component) {
    const Component = configItem.component;
    return /* @__PURE__ */ jsx21(MenubarMenu2, {
      children: /* @__PURE__ */ jsx21(MenubarTrigger2, {
        asChild: true,
        children: /* @__PURE__ */ jsx21("div", {
          children: /* @__PURE__ */ jsx21(Component, {
            spriteKey
          })
        })
      })
    }, `component-menu-${index2}`);
  }
  if (configItem.href) {
    const isActive = currentPath === configItem.href;
    return /* @__PURE__ */ jsx21(MenubarMenu2, {
      children: /* @__PURE__ */ jsx21(MenubarTrigger2, {
        asChild: true,
        className: clsx5(isActive && "bg-accent text-accent-foreground"),
        children: /* @__PURE__ */ jsxs5(Link2, {
          href: configItem.href,
          children: [
            configItem.iconId && /* @__PURE__ */ jsx21(IconSprite, {
              iconId: configItem.iconId,
              className: "mr-2 size-4"
            }),
            configItem.label
          ]
        })
      })
    }, `nav-link-${index2}`);
  }
  return /* @__PURE__ */ jsxs5(MenubarMenu2, {
    children: [
      /* @__PURE__ */ jsxs5(MenubarTrigger2, {
        children: [
          configItem.iconId && /* @__PURE__ */ jsx21(IconSprite, {
            iconId: configItem.iconId,
            className: "mr-2 size-4"
          }),
          configItem.label || "Menu",
          /* @__PURE__ */ jsx21(IconSprite, {
            iconId: "ChevronDown",
            className: "ml-2 size-3"
          })
        ]
      }),
      /* @__PURE__ */ jsx21(MenubarContent2, {
        children: configItem.items?.map((item, itemIndex) => renderMenubarItem(item, itemIndex, context))
      })
    ]
  }, `menu-${index2}`);
}
function renderSheetItem(item, index2, context, onItemClick) {
  const { currentPath, IconSprite } = context;
  if (item.separator) {
    return /* @__PURE__ */ jsx21("div", {
      className: "my-2 h-px bg-border"
    }, `separator-${index2}`);
  }
  if (item.component) {
    const Component = item.component;
    return /* @__PURE__ */ jsx21(Component, {}, `component-${index2}`);
  }
  const isActive = item.href && currentPath === item.href;
  if (item.items) {
    return /* @__PURE__ */ jsxs5("div", {
      className: "space-y-2",
      children: [
        /* @__PURE__ */ jsxs5("div", {
          className: "px-4 py-2 font-medium text-muted-foreground text-sm",
          children: [
            item.iconId && /* @__PURE__ */ jsx21(IconSprite, {
              iconId: item.iconId,
              className: "mr-2 inline size-4"
            }),
            item.label
          ]
        }),
        /* @__PURE__ */ jsx21("div", {
          className: "space-y-1 pl-4",
          children: item.items.map((subItem, subIndex) => renderSheetItem(subItem, index2 + subIndex, context, onItemClick))
        })
      ]
    }, `submenu-${index2}`);
  }
  const ItemContent = /* @__PURE__ */ jsxs5("div", {
    className: clsx5("flex items-center gap-3 rounded-md px-4 py-1 transition-colors hover:bg-accent hover:text-accent-foreground", isActive && "bg-accent text-accent-foreground"),
    children: [
      item.iconId && /* @__PURE__ */ jsx21(IconSprite, {
        iconId: item.iconId,
        className: "size-4"
      }),
      /* @__PURE__ */ jsx21("span", {
        children: item.label
      })
    ]
  });
  if (item.href) {
    return /* @__PURE__ */ jsx21(Link2, {
      href: item.href,
      onClick: onItemClick,
      children: ItemContent
    }, `item-${index2}`);
  }
  return /* @__PURE__ */ jsx21("div", {
    children: ItemContent
  }, `item-${index2}`);
}
function renderSheetMenuSection(configItem, index2, context, onItemClick) {
  if (configItem.component) {
    const Component = configItem.component;
    return /* @__PURE__ */ jsx21(Component, {
      spriteKey: context.spriteKey
    }, `component-${index2}`);
  }
  if (configItem.href) {
    const isActive = context.currentPath === configItem.href;
    return /* @__PURE__ */ jsx21(Link2, {
      href: configItem.href,
      onClick: onItemClick,
      children: /* @__PURE__ */ jsxs5("div", {
        className: clsx5("flex items-center gap-3 rounded-md px-4 py-1 transition-colors hover:bg-accent hover:text-accent-foreground", isActive && "bg-accent text-accent-foreground"),
        children: [
          configItem.iconId && /* @__PURE__ */ jsx21(context.IconSprite, {
            iconId: configItem.iconId,
            className: "size-4"
          }),
          /* @__PURE__ */ jsx21("span", {
            children: configItem.label
          })
        ]
      })
    }, `nav-link-${index2}`);
  }
  if (configItem.items) {
    return /* @__PURE__ */ jsxs5("div", {
      className: "space-y-1",
      children: [
        /* @__PURE__ */ jsxs5("div", {
          className: "border-b px-4 py-2 font-medium text-muted-foreground text-sm",
          children: [
            configItem.iconId && /* @__PURE__ */ jsx21(context.IconSprite, {
              iconId: configItem.iconId,
              className: "mr-2 inline size-4"
            }),
            configItem.label || "Menu"
          ]
        }),
        /* @__PURE__ */ jsx21("div", {
          className: "space-y-1",
          children: configItem.items.map((item, itemIndex) => renderSheetItem(item, itemIndex, context, onItemClick))
        })
      ]
    }, `menu-${index2}`);
  }
  return null;
}
function NavMenu({ navConfigItems, spriteKey = "lucide", navFilters, className }) {
  const location = useLocation();
  const IconSprite = createSpriteIcon2(spriteKey);
  const contextValue = { currentPath: location.pathname, spriteKey, IconSprite };
  const [isSheetOpen, setIsSheetOpen] = useState16(false);
  const sections = navConfigItems.sections || [{ menus: navConfigItems.menus || [] }];
  const filteredSections = navFilters ? sections.map((section) => ({
    ...section,
    menus: section.menus.filter((menu) => {
      if (!menu.filter || !Array.isArray(menu.filter)) {
        return true;
      }
      return menu.filter.some((filterValue) => navFilters.includes(filterValue));
    })
  })).filter((section) => section.menus.length > 0) : sections;
  const allMenus = filteredSections.flatMap((section) => section.menus);
  return /* @__PURE__ */ jsxs5(MenubarContext.Provider, {
    value: contextValue,
    children: [
      /* @__PURE__ */ jsx21("div", {
        className: "fixed top-4 left-4 z-50 md:hidden",
        children: /* @__PURE__ */ jsxs5(Sheet, {
          open: isSheetOpen,
          onOpenChange: setIsSheetOpen,
          children: [
            /* @__PURE__ */ jsx21(SheetTrigger, {
              asChild: true,
              children: /* @__PURE__ */ jsx21(Button, {
                variant: "outline",
                size: "sm",
                className: "flex items-center gap-2 shadow-lg",
                children: /* @__PURE__ */ jsx21(IconSprite, {
                  iconId: "EllipsisVertical",
                  className: "size-4"
                })
              })
            }),
            /* @__PURE__ */ jsx21(SheetContent, {
              side: "left",
              className: "w-80 px-2 pt-4",
              children: /* @__PURE__ */ jsx21("div", {
                className: "mt-6 flex flex-col gap-2",
                children: allMenus.map((configItem, index2) => renderSheetMenuSection(configItem, index2, contextValue, () => setIsSheetOpen(false)))
              })
            })
          ]
        })
      }),
      /* @__PURE__ */ jsx21("div", {
        className: "hidden md:block",
        children: filteredSections.length <= 1 ? /* @__PURE__ */ jsx21(Menubar2, {
          className: clsx5(className),
          children: allMenus.map((configItem, index2) => renderMenuConfigItem(configItem, index2, contextValue))
        }) : /* @__PURE__ */ jsx21(Menubar2, {
          className: clsx5(className),
          children: filteredSections.map((section, sectionIndex) => /* @__PURE__ */ jsx21("div", {
            className: "flex gap-x-2",
            children: section.menus.map((configItem, menuIndex) => renderMenuConfigItem(configItem, sectionIndex + menuIndex, contextValue))
          }, `section-${sectionIndex}`))
        })
      })
    ]
  });
}
// src/impetus/components/Page.tsx
import clsx6 from "clsx";
import { jsx as jsx23 } from "react/jsx-runtime";
function Header({ children, className }) {
  return /* @__PURE__ */ jsx23("header", {
    className: "print:hidden",
    children: /* @__PURE__ */ jsx23(Link2, {
      href: "/",
      children: /* @__PURE__ */ jsx23("div", {
        className: "flex flex-col md:py-8 md:pl-8",
        children: /* @__PURE__ */ jsx23("div", {
          className: clsx6("flew-row flex w-full justify-around md:justify-start md:gap-x-8", className),
          children
        })
      })
    })
  });
}
function Footer({ children, className }) {
  return /* @__PURE__ */ jsx23("footer", {
    className: "sticky top-[100vh] flex w-full flex-col items-center bg-opacity-100 pt-12 pb-8 print:hidden",
    children: /* @__PURE__ */ jsx23("p", {
      className: clsx6("text-xs uppercase text-opacity-30", className),
      children
    })
  });
}
export {
  ProductionErrorDisplay,
  NavMenu,
  LoadingBar,
  Header,
  GeneralErrorBoundary,
  Footer
};

//# debugId=C4F2F4035F70D9B464756E2164756E21
