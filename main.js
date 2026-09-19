(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to2, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to2, key) && key !== except)
          __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to2;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // ../../opt/files/node_modules/react/cjs/react.production.min.js
  var require_react_production_min = __commonJS({
    "../../opt/files/node_modules/react/cjs/react.production.min.js"(exports) {
      "use strict";
      var l2 = /* @__PURE__ */ Symbol.for("react.element");
      var n2 = /* @__PURE__ */ Symbol.for("react.portal");
      var p = /* @__PURE__ */ Symbol.for("react.fragment");
      var q = /* @__PURE__ */ Symbol.for("react.strict_mode");
      var r = /* @__PURE__ */ Symbol.for("react.profiler");
      var t = /* @__PURE__ */ Symbol.for("react.provider");
      var u = /* @__PURE__ */ Symbol.for("react.context");
      var v2 = /* @__PURE__ */ Symbol.for("react.forward_ref");
      var w2 = /* @__PURE__ */ Symbol.for("react.suspense");
      var x2 = /* @__PURE__ */ Symbol.for("react.memo");
      var y3 = /* @__PURE__ */ Symbol.for("react.lazy");
      var z2 = Symbol.iterator;
      function A2(a) {
        if (null === a || "object" !== typeof a) return null;
        a = z2 && a[z2] || a["@@iterator"];
        return "function" === typeof a ? a : null;
      }
      var B3 = { isMounted: function() {
        return false;
      }, enqueueForceUpdate: function() {
      }, enqueueReplaceState: function() {
      }, enqueueSetState: function() {
      } };
      var C = Object.assign;
      var D2 = {};
      function E3(a, b2, e2) {
        this.props = a;
        this.context = b2;
        this.refs = D2;
        this.updater = e2 || B3;
      }
      E3.prototype.isReactComponent = {};
      E3.prototype.setState = function(a, b2) {
        if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, a, b2, "setState");
      };
      E3.prototype.forceUpdate = function(a) {
        this.updater.enqueueForceUpdate(this, a, "forceUpdate");
      };
      function F4() {
      }
      F4.prototype = E3.prototype;
      function G3(a, b2, e2) {
        this.props = a;
        this.context = b2;
        this.refs = D2;
        this.updater = e2 || B3;
      }
      var H2 = G3.prototype = new F4();
      H2.constructor = G3;
      C(H2, E3.prototype);
      H2.isPureReactComponent = true;
      var I2 = Array.isArray;
      var J2 = Object.prototype.hasOwnProperty;
      var K2 = { current: null };
      var L = { key: true, ref: true, __self: true, __source: true };
      function M3(a, b2, e2) {
        var d, c = {}, k3 = null, h2 = null;
        if (null != b2) for (d in void 0 !== b2.ref && (h2 = b2.ref), void 0 !== b2.key && (k3 = "" + b2.key), b2) J2.call(b2, d) && !L.hasOwnProperty(d) && (c[d] = b2[d]);
        var g = arguments.length - 2;
        if (1 === g) c.children = e2;
        else if (1 < g) {
          for (var f2 = Array(g), m = 0; m < g; m++) f2[m] = arguments[m + 2];
          c.children = f2;
        }
        if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
        return { $$typeof: l2, type: a, key: k3, ref: h2, props: c, _owner: K2.current };
      }
      function N2(a, b2) {
        return { $$typeof: l2, type: a.type, key: b2, ref: a.ref, props: a.props, _owner: a._owner };
      }
      function O3(a) {
        return "object" === typeof a && null !== a && a.$$typeof === l2;
      }
      function escape(a) {
        var b2 = { "=": "=0", ":": "=2" };
        return "$" + a.replace(/[=:]/g, function(a2) {
          return b2[a2];
        });
      }
      var P3 = /\/+/g;
      function Q(a, b2) {
        return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b2.toString(36);
      }
      function R2(a, b2, e2, d, c) {
        var k3 = typeof a;
        if ("undefined" === k3 || "boolean" === k3) a = null;
        var h2 = false;
        if (null === a) h2 = true;
        else switch (k3) {
          case "string":
          case "number":
            h2 = true;
            break;
          case "object":
            switch (a.$$typeof) {
              case l2:
              case n2:
                h2 = true;
            }
        }
        if (h2) return h2 = a, c = c(h2), a = "" === d ? "." + Q(h2, 0) : d, I2(c) ? (e2 = "", null != a && (e2 = a.replace(P3, "$&/") + "/"), R2(c, b2, e2, "", function(a2) {
          return a2;
        })) : null != c && (O3(c) && (c = N2(c, e2 + (!c.key || h2 && h2.key === c.key ? "" : ("" + c.key).replace(P3, "$&/") + "/") + a)), b2.push(c)), 1;
        h2 = 0;
        d = "" === d ? "." : d + ":";
        if (I2(a)) for (var g = 0; g < a.length; g++) {
          k3 = a[g];
          var f2 = d + Q(k3, g);
          h2 += R2(k3, b2, e2, f2, c);
        }
        else if (f2 = A2(a), "function" === typeof f2) for (a = f2.call(a), g = 0; !(k3 = a.next()).done; ) k3 = k3.value, f2 = d + Q(k3, g++), h2 += R2(k3, b2, e2, f2, c);
        else if ("object" === k3) throw b2 = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b2 ? "object with keys {" + Object.keys(a).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
        return h2;
      }
      function S3(a, b2, e2) {
        if (null == a) return a;
        var d = [], c = 0;
        R2(a, d, "", "", function(a2) {
          return b2.call(e2, a2, c++);
        });
        return d;
      }
      function T3(a) {
        if (-1 === a._status) {
          var b2 = a._result;
          b2 = b2();
          b2.then(function(b3) {
            if (0 === a._status || -1 === a._status) a._status = 1, a._result = b3;
          }, function(b3) {
            if (0 === a._status || -1 === a._status) a._status = 2, a._result = b3;
          });
          -1 === a._status && (a._status = 0, a._result = b2);
        }
        if (1 === a._status) return a._result.default;
        throw a._result;
      }
      var U3 = { current: null };
      var V = { transition: null };
      var W2 = { ReactCurrentDispatcher: U3, ReactCurrentBatchConfig: V, ReactCurrentOwner: K2 };
      function X2() {
        throw Error("act(...) is not supported in production builds of React.");
      }
      exports.Children = { map: S3, forEach: function(a, b2, e2) {
        S3(a, function() {
          b2.apply(this, arguments);
        }, e2);
      }, count: function(a) {
        var b2 = 0;
        S3(a, function() {
          b2++;
        });
        return b2;
      }, toArray: function(a) {
        return S3(a, function(a2) {
          return a2;
        }) || [];
      }, only: function(a) {
        if (!O3(a)) throw Error("React.Children.only expected to receive a single React element child.");
        return a;
      } };
      exports.Component = E3;
      exports.Fragment = p;
      exports.Profiler = r;
      exports.PureComponent = G3;
      exports.StrictMode = q;
      exports.Suspense = w2;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W2;
      exports.act = X2;
      exports.cloneElement = function(a, b2, e2) {
        if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
        var d = C({}, a.props), c = a.key, k3 = a.ref, h2 = a._owner;
        if (null != b2) {
          void 0 !== b2.ref && (k3 = b2.ref, h2 = K2.current);
          void 0 !== b2.key && (c = "" + b2.key);
          if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
          for (f2 in b2) J2.call(b2, f2) && !L.hasOwnProperty(f2) && (d[f2] = void 0 === b2[f2] && void 0 !== g ? g[f2] : b2[f2]);
        }
        var f2 = arguments.length - 2;
        if (1 === f2) d.children = e2;
        else if (1 < f2) {
          g = Array(f2);
          for (var m = 0; m < f2; m++) g[m] = arguments[m + 2];
          d.children = g;
        }
        return { $$typeof: l2, type: a.type, key: c, ref: k3, props: d, _owner: h2 };
      };
      exports.createContext = function(a) {
        a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
        a.Provider = { $$typeof: t, _context: a };
        return a.Consumer = a;
      };
      exports.createElement = M3;
      exports.createFactory = function(a) {
        var b2 = M3.bind(null, a);
        b2.type = a;
        return b2;
      };
      exports.createRef = function() {
        return { current: null };
      };
      exports.forwardRef = function(a) {
        return { $$typeof: v2, render: a };
      };
      exports.isValidElement = O3;
      exports.lazy = function(a) {
        return { $$typeof: y3, _payload: { _status: -1, _result: a }, _init: T3 };
      };
      exports.memo = function(a, b2) {
        return { $$typeof: x2, type: a, compare: void 0 === b2 ? null : b2 };
      };
      exports.startTransition = function(a) {
        var b2 = V.transition;
        V.transition = {};
        try {
          a();
        } finally {
          V.transition = b2;
        }
      };
      exports.unstable_act = X2;
      exports.useCallback = function(a, b2) {
        return U3.current.useCallback(a, b2);
      };
      exports.useContext = function(a) {
        return U3.current.useContext(a);
      };
      exports.useDebugValue = function() {
      };
      exports.useDeferredValue = function(a) {
        return U3.current.useDeferredValue(a);
      };
      exports.useEffect = function(a, b2) {
        return U3.current.useEffect(a, b2);
      };
      exports.useId = function() {
        return U3.current.useId();
      };
      exports.useImperativeHandle = function(a, b2, e2) {
        return U3.current.useImperativeHandle(a, b2, e2);
      };
      exports.useInsertionEffect = function(a, b2) {
        return U3.current.useInsertionEffect(a, b2);
      };
      exports.useLayoutEffect = function(a, b2) {
        return U3.current.useLayoutEffect(a, b2);
      };
      exports.useMemo = function(a, b2) {
        return U3.current.useMemo(a, b2);
      };
      exports.useReducer = function(a, b2, e2) {
        return U3.current.useReducer(a, b2, e2);
      };
      exports.useRef = function(a) {
        return U3.current.useRef(a);
      };
      exports.useState = function(a) {
        return U3.current.useState(a);
      };
      exports.useSyncExternalStore = function(a, b2, e2) {
        return U3.current.useSyncExternalStore(a, b2, e2);
      };
      exports.useTransition = function() {
        return U3.current.useTransition();
      };
      exports.version = "18.3.1";
    }
  });

  // ../../opt/files/node_modules/react/index.js
  var require_react = __commonJS({
    "../../opt/files/node_modules/react/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // ../../opt/files/node_modules/scheduler/cjs/scheduler.production.min.js
  var require_scheduler_production_min = __commonJS({
    "../../opt/files/node_modules/scheduler/cjs/scheduler.production.min.js"(exports) {
      "use strict";
      function f2(a, b2) {
        var c = a.length;
        a.push(b2);
        a: for (; 0 < c; ) {
          var d = c - 1 >>> 1, e2 = a[d];
          if (0 < g(e2, b2)) a[d] = b2, a[c] = e2, c = d;
          else break a;
        }
      }
      function h2(a) {
        return 0 === a.length ? null : a[0];
      }
      function k3(a) {
        if (0 === a.length) return null;
        var b2 = a[0], c = a.pop();
        if (c !== b2) {
          a[0] = c;
          a: for (var d = 0, e2 = a.length, w2 = e2 >>> 1; d < w2; ) {
            var m = 2 * (d + 1) - 1, C = a[m], n2 = m + 1, x2 = a[n2];
            if (0 > g(C, c)) n2 < e2 && 0 > g(x2, C) ? (a[d] = x2, a[n2] = c, d = n2) : (a[d] = C, a[m] = c, d = m);
            else if (n2 < e2 && 0 > g(x2, c)) a[d] = x2, a[n2] = c, d = n2;
            else break a;
          }
        }
        return b2;
      }
      function g(a, b2) {
        var c = a.sortIndex - b2.sortIndex;
        return 0 !== c ? c : a.id - b2.id;
      }
      if ("object" === typeof performance && "function" === typeof performance.now) {
        l2 = performance;
        exports.unstable_now = function() {
          return l2.now();
        };
      } else {
        p = Date, q = p.now();
        exports.unstable_now = function() {
          return p.now() - q;
        };
      }
      var l2;
      var p;
      var q;
      var r = [];
      var t = [];
      var u = 1;
      var v2 = null;
      var y3 = 3;
      var z2 = false;
      var A2 = false;
      var B3 = false;
      var D2 = "function" === typeof setTimeout ? setTimeout : null;
      var E3 = "function" === typeof clearTimeout ? clearTimeout : null;
      var F4 = "undefined" !== typeof setImmediate ? setImmediate : null;
      "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function G3(a) {
        for (var b2 = h2(t); null !== b2; ) {
          if (null === b2.callback) k3(t);
          else if (b2.startTime <= a) k3(t), b2.sortIndex = b2.expirationTime, f2(r, b2);
          else break;
          b2 = h2(t);
        }
      }
      function H2(a) {
        B3 = false;
        G3(a);
        if (!A2) if (null !== h2(r)) A2 = true, I2(J2);
        else {
          var b2 = h2(t);
          null !== b2 && K2(H2, b2.startTime - a);
        }
      }
      function J2(a, b2) {
        A2 = false;
        B3 && (B3 = false, E3(L), L = -1);
        z2 = true;
        var c = y3;
        try {
          G3(b2);
          for (v2 = h2(r); null !== v2 && (!(v2.expirationTime > b2) || a && !M3()); ) {
            var d = v2.callback;
            if ("function" === typeof d) {
              v2.callback = null;
              y3 = v2.priorityLevel;
              var e2 = d(v2.expirationTime <= b2);
              b2 = exports.unstable_now();
              "function" === typeof e2 ? v2.callback = e2 : v2 === h2(r) && k3(r);
              G3(b2);
            } else k3(r);
            v2 = h2(r);
          }
          if (null !== v2) var w2 = true;
          else {
            var m = h2(t);
            null !== m && K2(H2, m.startTime - b2);
            w2 = false;
          }
          return w2;
        } finally {
          v2 = null, y3 = c, z2 = false;
        }
      }
      var N2 = false;
      var O3 = null;
      var L = -1;
      var P3 = 5;
      var Q = -1;
      function M3() {
        return exports.unstable_now() - Q < P3 ? false : true;
      }
      function R2() {
        if (null !== O3) {
          var a = exports.unstable_now();
          Q = a;
          var b2 = true;
          try {
            b2 = O3(true, a);
          } finally {
            b2 ? S3() : (N2 = false, O3 = null);
          }
        } else N2 = false;
      }
      var S3;
      if ("function" === typeof F4) S3 = function() {
        F4(R2);
      };
      else if ("undefined" !== typeof MessageChannel) {
        T3 = new MessageChannel(), U3 = T3.port2;
        T3.port1.onmessage = R2;
        S3 = function() {
          U3.postMessage(null);
        };
      } else S3 = function() {
        D2(R2, 0);
      };
      var T3;
      var U3;
      function I2(a) {
        O3 = a;
        N2 || (N2 = true, S3());
      }
      function K2(a, b2) {
        L = D2(function() {
          a(exports.unstable_now());
        }, b2);
      }
      exports.unstable_IdlePriority = 5;
      exports.unstable_ImmediatePriority = 1;
      exports.unstable_LowPriority = 4;
      exports.unstable_NormalPriority = 3;
      exports.unstable_Profiling = null;
      exports.unstable_UserBlockingPriority = 2;
      exports.unstable_cancelCallback = function(a) {
        a.callback = null;
      };
      exports.unstable_continueExecution = function() {
        A2 || z2 || (A2 = true, I2(J2));
      };
      exports.unstable_forceFrameRate = function(a) {
        0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P3 = 0 < a ? Math.floor(1e3 / a) : 5;
      };
      exports.unstable_getCurrentPriorityLevel = function() {
        return y3;
      };
      exports.unstable_getFirstCallbackNode = function() {
        return h2(r);
      };
      exports.unstable_next = function(a) {
        switch (y3) {
          case 1:
          case 2:
          case 3:
            var b2 = 3;
            break;
          default:
            b2 = y3;
        }
        var c = y3;
        y3 = b2;
        try {
          return a();
        } finally {
          y3 = c;
        }
      };
      exports.unstable_pauseExecution = function() {
      };
      exports.unstable_requestPaint = function() {
      };
      exports.unstable_runWithPriority = function(a, b2) {
        switch (a) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            a = 3;
        }
        var c = y3;
        y3 = a;
        try {
          return b2();
        } finally {
          y3 = c;
        }
      };
      exports.unstable_scheduleCallback = function(a, b2, c) {
        var d = exports.unstable_now();
        "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
        switch (a) {
          case 1:
            var e2 = -1;
            break;
          case 2:
            e2 = 250;
            break;
          case 5:
            e2 = 1073741823;
            break;
          case 4:
            e2 = 1e4;
            break;
          default:
            e2 = 5e3;
        }
        e2 = c + e2;
        a = { id: u++, callback: b2, priorityLevel: a, startTime: c, expirationTime: e2, sortIndex: -1 };
        c > d ? (a.sortIndex = c, f2(t, a), null === h2(r) && a === h2(t) && (B3 ? (E3(L), L = -1) : B3 = true, K2(H2, c - d))) : (a.sortIndex = e2, f2(r, a), A2 || z2 || (A2 = true, I2(J2)));
        return a;
      };
      exports.unstable_shouldYield = M3;
      exports.unstable_wrapCallback = function(a) {
        var b2 = y3;
        return function() {
          var c = y3;
          y3 = b2;
          try {
            return a.apply(this, arguments);
          } finally {
            y3 = c;
          }
        };
      };
    }
  });

  // ../../opt/files/node_modules/scheduler/index.js
  var require_scheduler = __commonJS({
    "../../opt/files/node_modules/scheduler/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_scheduler_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // ../../opt/files/node_modules/react-dom/cjs/react-dom.production.min.js
  var require_react_dom_production_min = __commonJS({
    "../../opt/files/node_modules/react-dom/cjs/react-dom.production.min.js"(exports) {
      "use strict";
      var aa = require_react();
      var ca2 = require_scheduler();
      function p(a) {
        for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b2 += "&args[]=" + encodeURIComponent(arguments[c]);
        return "Minified React error #" + a + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var da = /* @__PURE__ */ new Set();
      var ea2 = {};
      function fa(a, b2) {
        ha(a, b2);
        ha(a + "Capture", b2);
      }
      function ha(a, b2) {
        ea2[a] = b2;
        for (a = 0; a < b2.length; a++) da.add(b2[a]);
      }
      var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement);
      var ja = Object.prototype.hasOwnProperty;
      var ka2 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
      var la = {};
      var ma = {};
      function oa(a) {
        if (ja.call(ma, a)) return true;
        if (ja.call(la, a)) return false;
        if (ka2.test(a)) return ma[a] = true;
        la[a] = true;
        return false;
      }
      function pa2(a, b2, c, d) {
        if (null !== c && 0 === c.type) return false;
        switch (typeof b2) {
          case "function":
          case "symbol":
            return true;
          case "boolean":
            if (d) return false;
            if (null !== c) return !c.acceptsBooleans;
            a = a.toLowerCase().slice(0, 5);
            return "data-" !== a && "aria-" !== a;
          default:
            return false;
        }
      }
      function qa2(a, b2, c, d) {
        if (null === b2 || "undefined" === typeof b2 || pa2(a, b2, c, d)) return true;
        if (d) return false;
        if (null !== c) switch (c.type) {
          case 3:
            return !b2;
          case 4:
            return false === b2;
          case 5:
            return isNaN(b2);
          case 6:
            return isNaN(b2) || 1 > b2;
        }
        return false;
      }
      function v2(a, b2, c, d, e2, f2, g) {
        this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
        this.attributeName = d;
        this.attributeNamespace = e2;
        this.mustUseProperty = c;
        this.propertyName = a;
        this.type = b2;
        this.sanitizeURL = f2;
        this.removeEmptyString = g;
      }
      var z2 = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
        z2[a] = new v2(a, 0, false, a, null, false, false);
      });
      [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
        var b2 = a[0];
        z2[b2] = new v2(b2, 1, false, a[1], null, false, false);
      });
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
        z2[a] = new v2(a, 2, false, a.toLowerCase(), null, false, false);
      });
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
        z2[a] = new v2(a, 2, false, a, null, false, false);
      });
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
        z2[a] = new v2(a, 3, false, a.toLowerCase(), null, false, false);
      });
      ["checked", "multiple", "muted", "selected"].forEach(function(a) {
        z2[a] = new v2(a, 3, true, a, null, false, false);
      });
      ["capture", "download"].forEach(function(a) {
        z2[a] = new v2(a, 4, false, a, null, false, false);
      });
      ["cols", "rows", "size", "span"].forEach(function(a) {
        z2[a] = new v2(a, 6, false, a, null, false, false);
      });
      ["rowSpan", "start"].forEach(function(a) {
        z2[a] = new v2(a, 5, false, a.toLowerCase(), null, false, false);
      });
      var ra = /[\-:]([a-z])/g;
      function sa2(a) {
        return a[1].toUpperCase();
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
        var b2 = a.replace(
          ra,
          sa2
        );
        z2[b2] = new v2(b2, 1, false, a, null, false, false);
      });
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
        var b2 = a.replace(ra, sa2);
        z2[b2] = new v2(b2, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
      });
      ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
        var b2 = a.replace(ra, sa2);
        z2[b2] = new v2(b2, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
      });
      ["tabIndex", "crossOrigin"].forEach(function(a) {
        z2[a] = new v2(a, 1, false, a.toLowerCase(), null, false, false);
      });
      z2.xlinkHref = new v2("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
      ["src", "href", "action", "formAction"].forEach(function(a) {
        z2[a] = new v2(a, 1, false, a.toLowerCase(), null, true, true);
      });
      function ta(a, b2, c, d) {
        var e2 = z2.hasOwnProperty(b2) ? z2[b2] : null;
        if (null !== e2 ? 0 !== e2.type : d || !(2 < b2.length) || "o" !== b2[0] && "O" !== b2[0] || "n" !== b2[1] && "N" !== b2[1]) qa2(b2, c, e2, d) && (c = null), d || null === e2 ? oa(b2) && (null === c ? a.removeAttribute(b2) : a.setAttribute(b2, "" + c)) : e2.mustUseProperty ? a[e2.propertyName] = null === c ? 3 === e2.type ? false : "" : c : (b2 = e2.attributeName, d = e2.attributeNamespace, null === c ? a.removeAttribute(b2) : (e2 = e2.type, c = 3 === e2 || 4 === e2 && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b2, c) : a.setAttribute(b2, c)));
      }
      var ua2 = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      var va2 = /* @__PURE__ */ Symbol.for("react.element");
      var wa2 = /* @__PURE__ */ Symbol.for("react.portal");
      var ya2 = /* @__PURE__ */ Symbol.for("react.fragment");
      var za = /* @__PURE__ */ Symbol.for("react.strict_mode");
      var Aa2 = /* @__PURE__ */ Symbol.for("react.profiler");
      var Ba2 = /* @__PURE__ */ Symbol.for("react.provider");
      var Ca = /* @__PURE__ */ Symbol.for("react.context");
      var Da2 = /* @__PURE__ */ Symbol.for("react.forward_ref");
      var Ea2 = /* @__PURE__ */ Symbol.for("react.suspense");
      var Fa2 = /* @__PURE__ */ Symbol.for("react.suspense_list");
      var Ga = /* @__PURE__ */ Symbol.for("react.memo");
      var Ha2 = /* @__PURE__ */ Symbol.for("react.lazy");
      var Ia = /* @__PURE__ */ Symbol.for("react.offscreen");
      var Ja = Symbol.iterator;
      function Ka(a) {
        if (null === a || "object" !== typeof a) return null;
        a = Ja && a[Ja] || a["@@iterator"];
        return "function" === typeof a ? a : null;
      }
      var A2 = Object.assign;
      var La2;
      function Ma2(a) {
        if (void 0 === La2) try {
          throw Error();
        } catch (c) {
          var b2 = c.stack.trim().match(/\n( *(at )?)/);
          La2 = b2 && b2[1] || "";
        }
        return "\n" + La2 + a;
      }
      var Na2 = false;
      function Oa2(a, b2) {
        if (!a || Na2) return "";
        Na2 = true;
        var c = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (b2) if (b2 = function() {
            throw Error();
          }, Object.defineProperty(b2.prototype, "props", { set: function() {
            throw Error();
          } }), "object" === typeof Reflect && Reflect.construct) {
            try {
              Reflect.construct(b2, []);
            } catch (l2) {
              var d = l2;
            }
            Reflect.construct(a, [], b2);
          } else {
            try {
              b2.call();
            } catch (l2) {
              d = l2;
            }
            a.call(b2.prototype);
          }
          else {
            try {
              throw Error();
            } catch (l2) {
              d = l2;
            }
            a();
          }
        } catch (l2) {
          if (l2 && d && "string" === typeof l2.stack) {
            for (var e2 = l2.stack.split("\n"), f2 = d.stack.split("\n"), g = e2.length - 1, h2 = f2.length - 1; 1 <= g && 0 <= h2 && e2[g] !== f2[h2]; ) h2--;
            for (; 1 <= g && 0 <= h2; g--, h2--) if (e2[g] !== f2[h2]) {
              if (1 !== g || 1 !== h2) {
                do
                  if (g--, h2--, 0 > h2 || e2[g] !== f2[h2]) {
                    var k3 = "\n" + e2[g].replace(" at new ", " at ");
                    a.displayName && k3.includes("<anonymous>") && (k3 = k3.replace("<anonymous>", a.displayName));
                    return k3;
                  }
                while (1 <= g && 0 <= h2);
              }
              break;
            }
          }
        } finally {
          Na2 = false, Error.prepareStackTrace = c;
        }
        return (a = a ? a.displayName || a.name : "") ? Ma2(a) : "";
      }
      function Pa2(a) {
        switch (a.tag) {
          case 5:
            return Ma2(a.type);
          case 16:
            return Ma2("Lazy");
          case 13:
            return Ma2("Suspense");
          case 19:
            return Ma2("SuspenseList");
          case 0:
          case 2:
          case 15:
            return a = Oa2(a.type, false), a;
          case 11:
            return a = Oa2(a.type.render, false), a;
          case 1:
            return a = Oa2(a.type, true), a;
          default:
            return "";
        }
      }
      function Qa(a) {
        if (null == a) return null;
        if ("function" === typeof a) return a.displayName || a.name || null;
        if ("string" === typeof a) return a;
        switch (a) {
          case ya2:
            return "Fragment";
          case wa2:
            return "Portal";
          case Aa2:
            return "Profiler";
          case za:
            return "StrictMode";
          case Ea2:
            return "Suspense";
          case Fa2:
            return "SuspenseList";
        }
        if ("object" === typeof a) switch (a.$$typeof) {
          case Ca:
            return (a.displayName || "Context") + ".Consumer";
          case Ba2:
            return (a._context.displayName || "Context") + ".Provider";
          case Da2:
            var b2 = a.render;
            a = a.displayName;
            a || (a = b2.displayName || b2.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
            return a;
          case Ga:
            return b2 = a.displayName || null, null !== b2 ? b2 : Qa(a.type) || "Memo";
          case Ha2:
            b2 = a._payload;
            a = a._init;
            try {
              return Qa(a(b2));
            } catch (c) {
            }
        }
        return null;
      }
      function Ra2(a) {
        var b2 = a.type;
        switch (a.tag) {
          case 24:
            return "Cache";
          case 9:
            return (b2.displayName || "Context") + ".Consumer";
          case 10:
            return (b2._context.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            return a = b2.render, a = a.displayName || a.name || "", b2.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          case 7:
            return "Fragment";
          case 5:
            return b2;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return Qa(b2);
          case 8:
            return b2 === za ? "StrictMode" : "Mode";
          case 22:
            return "Offscreen";
          case 12:
            return "Profiler";
          case 21:
            return "Scope";
          case 13:
            return "Suspense";
          case 19:
            return "SuspenseList";
          case 25:
            return "TracingMarker";
          case 1:
          case 0:
          case 17:
          case 2:
          case 14:
          case 15:
            if ("function" === typeof b2) return b2.displayName || b2.name || null;
            if ("string" === typeof b2) return b2;
        }
        return null;
      }
      function Sa2(a) {
        switch (typeof a) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return a;
          case "object":
            return a;
          default:
            return "";
        }
      }
      function Ta2(a) {
        var b2 = a.type;
        return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b2 || "radio" === b2);
      }
      function Ua2(a) {
        var b2 = Ta2(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b2), d = "" + a[b2];
        if (!a.hasOwnProperty(b2) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
          var e2 = c.get, f2 = c.set;
          Object.defineProperty(a, b2, { configurable: true, get: function() {
            return e2.call(this);
          }, set: function(a2) {
            d = "" + a2;
            f2.call(this, a2);
          } });
          Object.defineProperty(a, b2, { enumerable: c.enumerable });
          return { getValue: function() {
            return d;
          }, setValue: function(a2) {
            d = "" + a2;
          }, stopTracking: function() {
            a._valueTracker = null;
            delete a[b2];
          } };
        }
      }
      function Va(a) {
        a._valueTracker || (a._valueTracker = Ua2(a));
      }
      function Wa(a) {
        if (!a) return false;
        var b2 = a._valueTracker;
        if (!b2) return true;
        var c = b2.getValue();
        var d = "";
        a && (d = Ta2(a) ? a.checked ? "true" : "false" : a.value);
        a = d;
        return a !== c ? (b2.setValue(a), true) : false;
      }
      function Xa2(a) {
        a = a || ("undefined" !== typeof document ? document : void 0);
        if ("undefined" === typeof a) return null;
        try {
          return a.activeElement || a.body;
        } catch (b2) {
          return a.body;
        }
      }
      function Ya2(a, b2) {
        var c = b2.checked;
        return A2({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
      }
      function Za2(a, b2) {
        var c = null == b2.defaultValue ? "" : b2.defaultValue, d = null != b2.checked ? b2.checked : b2.defaultChecked;
        c = Sa2(null != b2.value ? b2.value : c);
        a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b2.type || "radio" === b2.type ? null != b2.checked : null != b2.value };
      }
      function ab(a, b2) {
        b2 = b2.checked;
        null != b2 && ta(a, "checked", b2, false);
      }
      function bb(a, b2) {
        ab(a, b2);
        var c = Sa2(b2.value), d = b2.type;
        if (null != c) if ("number" === d) {
          if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
        } else a.value !== "" + c && (a.value = "" + c);
        else if ("submit" === d || "reset" === d) {
          a.removeAttribute("value");
          return;
        }
        b2.hasOwnProperty("value") ? cb(a, b2.type, c) : b2.hasOwnProperty("defaultValue") && cb(a, b2.type, Sa2(b2.defaultValue));
        null == b2.checked && null != b2.defaultChecked && (a.defaultChecked = !!b2.defaultChecked);
      }
      function db(a, b2, c) {
        if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
          var d = b2.type;
          if (!("submit" !== d && "reset" !== d || void 0 !== b2.value && null !== b2.value)) return;
          b2 = "" + a._wrapperState.initialValue;
          c || b2 === a.value || (a.value = b2);
          a.defaultValue = b2;
        }
        c = a.name;
        "" !== c && (a.name = "");
        a.defaultChecked = !!a._wrapperState.initialChecked;
        "" !== c && (a.name = c);
      }
      function cb(a, b2, c) {
        if ("number" !== b2 || Xa2(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
      }
      var eb = Array.isArray;
      function fb(a, b2, c, d) {
        a = a.options;
        if (b2) {
          b2 = {};
          for (var e2 = 0; e2 < c.length; e2++) b2["$" + c[e2]] = true;
          for (c = 0; c < a.length; c++) e2 = b2.hasOwnProperty("$" + a[c].value), a[c].selected !== e2 && (a[c].selected = e2), e2 && d && (a[c].defaultSelected = true);
        } else {
          c = "" + Sa2(c);
          b2 = null;
          for (e2 = 0; e2 < a.length; e2++) {
            if (a[e2].value === c) {
              a[e2].selected = true;
              d && (a[e2].defaultSelected = true);
              return;
            }
            null !== b2 || a[e2].disabled || (b2 = a[e2]);
          }
          null !== b2 && (b2.selected = true);
        }
      }
      function gb(a, b2) {
        if (null != b2.dangerouslySetInnerHTML) throw Error(p(91));
        return A2({}, b2, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
      }
      function hb(a, b2) {
        var c = b2.value;
        if (null == c) {
          c = b2.children;
          b2 = b2.defaultValue;
          if (null != c) {
            if (null != b2) throw Error(p(92));
            if (eb(c)) {
              if (1 < c.length) throw Error(p(93));
              c = c[0];
            }
            b2 = c;
          }
          null == b2 && (b2 = "");
          c = b2;
        }
        a._wrapperState = { initialValue: Sa2(c) };
      }
      function ib(a, b2) {
        var c = Sa2(b2.value), d = Sa2(b2.defaultValue);
        null != c && (c = "" + c, c !== a.value && (a.value = c), null == b2.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
        null != d && (a.defaultValue = "" + d);
      }
      function jb(a) {
        var b2 = a.textContent;
        b2 === a._wrapperState.initialValue && "" !== b2 && null !== b2 && (a.value = b2);
      }
      function kb(a) {
        switch (a) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function lb(a, b2) {
        return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b2) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : a;
      }
      var mb;
      var nb = (function(a) {
        return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b2, c, d, e2) {
          MSApp.execUnsafeLocalFunction(function() {
            return a(b2, c, d, e2);
          });
        } : a;
      })(function(a, b2) {
        if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b2;
        else {
          mb = mb || document.createElement("div");
          mb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
          for (b2 = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
          for (; b2.firstChild; ) a.appendChild(b2.firstChild);
        }
      });
      function ob(a, b2) {
        if (b2) {
          var c = a.firstChild;
          if (c && c === a.lastChild && 3 === c.nodeType) {
            c.nodeValue = b2;
            return;
          }
        }
        a.textContent = b2;
      }
      var pb = {
        animationIterationCount: true,
        aspectRatio: true,
        borderImageOutset: true,
        borderImageSlice: true,
        borderImageWidth: true,
        boxFlex: true,
        boxFlexGroup: true,
        boxOrdinalGroup: true,
        columnCount: true,
        columns: true,
        flex: true,
        flexGrow: true,
        flexPositive: true,
        flexShrink: true,
        flexNegative: true,
        flexOrder: true,
        gridArea: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowSpan: true,
        gridRowStart: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnSpan: true,
        gridColumnStart: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        tabSize: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeDasharray: true,
        strokeDashoffset: true,
        strokeMiterlimit: true,
        strokeOpacity: true,
        strokeWidth: true
      };
      var qb = ["Webkit", "ms", "Moz", "O"];
      Object.keys(pb).forEach(function(a) {
        qb.forEach(function(b2) {
          b2 = b2 + a.charAt(0).toUpperCase() + a.substring(1);
          pb[b2] = pb[a];
        });
      });
      function rb(a, b2, c) {
        return null == b2 || "boolean" === typeof b2 || "" === b2 ? "" : c || "number" !== typeof b2 || 0 === b2 || pb.hasOwnProperty(a) && pb[a] ? ("" + b2).trim() : b2 + "px";
      }
      function sb(a, b2) {
        a = a.style;
        for (var c in b2) if (b2.hasOwnProperty(c)) {
          var d = 0 === c.indexOf("--"), e2 = rb(c, b2[c], d);
          "float" === c && (c = "cssFloat");
          d ? a.setProperty(c, e2) : a[c] = e2;
        }
      }
      var tb = A2({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
      function ub(a, b2) {
        if (b2) {
          if (tb[a] && (null != b2.children || null != b2.dangerouslySetInnerHTML)) throw Error(p(137, a));
          if (null != b2.dangerouslySetInnerHTML) {
            if (null != b2.children) throw Error(p(60));
            if ("object" !== typeof b2.dangerouslySetInnerHTML || !("__html" in b2.dangerouslySetInnerHTML)) throw Error(p(61));
          }
          if (null != b2.style && "object" !== typeof b2.style) throw Error(p(62));
        }
      }
      function vb(a, b2) {
        if (-1 === a.indexOf("-")) return "string" === typeof b2.is;
        switch (a) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return false;
          default:
            return true;
        }
      }
      var wb = null;
      function xb(a) {
        a = a.target || a.srcElement || window;
        a.correspondingUseElement && (a = a.correspondingUseElement);
        return 3 === a.nodeType ? a.parentNode : a;
      }
      var yb = null;
      var zb = null;
      var Ab = null;
      function Bb(a) {
        if (a = Cb(a)) {
          if ("function" !== typeof yb) throw Error(p(280));
          var b2 = a.stateNode;
          b2 && (b2 = Db(b2), yb(a.stateNode, a.type, b2));
        }
      }
      function Eb(a) {
        zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
      }
      function Fb() {
        if (zb) {
          var a = zb, b2 = Ab;
          Ab = zb = null;
          Bb(a);
          if (b2) for (a = 0; a < b2.length; a++) Bb(b2[a]);
        }
      }
      function Gb(a, b2) {
        return a(b2);
      }
      function Hb() {
      }
      var Ib = false;
      function Jb(a, b2, c) {
        if (Ib) return a(b2, c);
        Ib = true;
        try {
          return Gb(a, b2, c);
        } finally {
          if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
        }
      }
      function Kb(a, b2) {
        var c = a.stateNode;
        if (null === c) return null;
        var d = Db(c);
        if (null === d) return null;
        c = d[b2];
        a: switch (b2) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
            a = !d;
            break a;
          default:
            a = false;
        }
        if (a) return null;
        if (c && "function" !== typeof c) throw Error(p(231, b2, typeof c));
        return c;
      }
      var Lb = false;
      if (ia) try {
        Mb = {};
        Object.defineProperty(Mb, "passive", { get: function() {
          Lb = true;
        } });
        window.addEventListener("test", Mb, Mb);
        window.removeEventListener("test", Mb, Mb);
      } catch (a) {
        Lb = false;
      }
      var Mb;
      function Nb(a, b2, c, d, e2, f2, g, h2, k3) {
        var l2 = Array.prototype.slice.call(arguments, 3);
        try {
          b2.apply(c, l2);
        } catch (m) {
          this.onError(m);
        }
      }
      var Ob = false;
      var Pb = null;
      var Qb = false;
      var Rb = null;
      var Sb = { onError: function(a) {
        Ob = true;
        Pb = a;
      } };
      function Tb(a, b2, c, d, e2, f2, g, h2, k3) {
        Ob = false;
        Pb = null;
        Nb.apply(Sb, arguments);
      }
      function Ub(a, b2, c, d, e2, f2, g, h2, k3) {
        Tb.apply(this, arguments);
        if (Ob) {
          if (Ob) {
            var l2 = Pb;
            Ob = false;
            Pb = null;
          } else throw Error(p(198));
          Qb || (Qb = true, Rb = l2);
        }
      }
      function Vb(a) {
        var b2 = a, c = a;
        if (a.alternate) for (; b2.return; ) b2 = b2.return;
        else {
          a = b2;
          do
            b2 = a, 0 !== (b2.flags & 4098) && (c = b2.return), a = b2.return;
          while (a);
        }
        return 3 === b2.tag ? c : null;
      }
      function Wb(a) {
        if (13 === a.tag) {
          var b2 = a.memoizedState;
          null === b2 && (a = a.alternate, null !== a && (b2 = a.memoizedState));
          if (null !== b2) return b2.dehydrated;
        }
        return null;
      }
      function Xb(a) {
        if (Vb(a) !== a) throw Error(p(188));
      }
      function Yb(a) {
        var b2 = a.alternate;
        if (!b2) {
          b2 = Vb(a);
          if (null === b2) throw Error(p(188));
          return b2 !== a ? null : a;
        }
        for (var c = a, d = b2; ; ) {
          var e2 = c.return;
          if (null === e2) break;
          var f2 = e2.alternate;
          if (null === f2) {
            d = e2.return;
            if (null !== d) {
              c = d;
              continue;
            }
            break;
          }
          if (e2.child === f2.child) {
            for (f2 = e2.child; f2; ) {
              if (f2 === c) return Xb(e2), a;
              if (f2 === d) return Xb(e2), b2;
              f2 = f2.sibling;
            }
            throw Error(p(188));
          }
          if (c.return !== d.return) c = e2, d = f2;
          else {
            for (var g = false, h2 = e2.child; h2; ) {
              if (h2 === c) {
                g = true;
                c = e2;
                d = f2;
                break;
              }
              if (h2 === d) {
                g = true;
                d = e2;
                c = f2;
                break;
              }
              h2 = h2.sibling;
            }
            if (!g) {
              for (h2 = f2.child; h2; ) {
                if (h2 === c) {
                  g = true;
                  c = f2;
                  d = e2;
                  break;
                }
                if (h2 === d) {
                  g = true;
                  d = f2;
                  c = e2;
                  break;
                }
                h2 = h2.sibling;
              }
              if (!g) throw Error(p(189));
            }
          }
          if (c.alternate !== d) throw Error(p(190));
        }
        if (3 !== c.tag) throw Error(p(188));
        return c.stateNode.current === c ? a : b2;
      }
      function Zb(a) {
        a = Yb(a);
        return null !== a ? $b(a) : null;
      }
      function $b(a) {
        if (5 === a.tag || 6 === a.tag) return a;
        for (a = a.child; null !== a; ) {
          var b2 = $b(a);
          if (null !== b2) return b2;
          a = a.sibling;
        }
        return null;
      }
      var ac = ca2.unstable_scheduleCallback;
      var bc = ca2.unstable_cancelCallback;
      var cc = ca2.unstable_shouldYield;
      var dc = ca2.unstable_requestPaint;
      var B3 = ca2.unstable_now;
      var ec = ca2.unstable_getCurrentPriorityLevel;
      var fc = ca2.unstable_ImmediatePriority;
      var gc = ca2.unstable_UserBlockingPriority;
      var hc = ca2.unstable_NormalPriority;
      var ic = ca2.unstable_LowPriority;
      var jc = ca2.unstable_IdlePriority;
      var kc = null;
      var lc = null;
      function mc(a) {
        if (lc && "function" === typeof lc.onCommitFiberRoot) try {
          lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
        } catch (b2) {
        }
      }
      var oc = Math.clz32 ? Math.clz32 : nc;
      var pc = Math.log;
      var qc = Math.LN2;
      function nc(a) {
        a >>>= 0;
        return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
      }
      var rc = 64;
      var sc = 4194304;
      function tc(a) {
        switch (a & -a) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return a & 4194240;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return a & 130023424;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 1073741824;
          default:
            return a;
        }
      }
      function uc(a, b2) {
        var c = a.pendingLanes;
        if (0 === c) return 0;
        var d = 0, e2 = a.suspendedLanes, f2 = a.pingedLanes, g = c & 268435455;
        if (0 !== g) {
          var h2 = g & ~e2;
          0 !== h2 ? d = tc(h2) : (f2 &= g, 0 !== f2 && (d = tc(f2)));
        } else g = c & ~e2, 0 !== g ? d = tc(g) : 0 !== f2 && (d = tc(f2));
        if (0 === d) return 0;
        if (0 !== b2 && b2 !== d && 0 === (b2 & e2) && (e2 = d & -d, f2 = b2 & -b2, e2 >= f2 || 16 === e2 && 0 !== (f2 & 4194240))) return b2;
        0 !== (d & 4) && (d |= c & 16);
        b2 = a.entangledLanes;
        if (0 !== b2) for (a = a.entanglements, b2 &= d; 0 < b2; ) c = 31 - oc(b2), e2 = 1 << c, d |= a[c], b2 &= ~e2;
        return d;
      }
      function vc(a, b2) {
        switch (a) {
          case 1:
          case 2:
          case 4:
            return b2 + 250;
          case 8:
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return b2 + 5e3;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return -1;
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
            return -1;
          default:
            return -1;
        }
      }
      function wc(a, b2) {
        for (var c = a.suspendedLanes, d = a.pingedLanes, e2 = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
          var g = 31 - oc(f2), h2 = 1 << g, k3 = e2[g];
          if (-1 === k3) {
            if (0 === (h2 & c) || 0 !== (h2 & d)) e2[g] = vc(h2, b2);
          } else k3 <= b2 && (a.expiredLanes |= h2);
          f2 &= ~h2;
        }
      }
      function xc(a) {
        a = a.pendingLanes & -1073741825;
        return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
      }
      function yc() {
        var a = rc;
        rc <<= 1;
        0 === (rc & 4194240) && (rc = 64);
        return a;
      }
      function zc(a) {
        for (var b2 = [], c = 0; 31 > c; c++) b2.push(a);
        return b2;
      }
      function Ac(a, b2, c) {
        a.pendingLanes |= b2;
        536870912 !== b2 && (a.suspendedLanes = 0, a.pingedLanes = 0);
        a = a.eventTimes;
        b2 = 31 - oc(b2);
        a[b2] = c;
      }
      function Bc(a, b2) {
        var c = a.pendingLanes & ~b2;
        a.pendingLanes = b2;
        a.suspendedLanes = 0;
        a.pingedLanes = 0;
        a.expiredLanes &= b2;
        a.mutableReadLanes &= b2;
        a.entangledLanes &= b2;
        b2 = a.entanglements;
        var d = a.eventTimes;
        for (a = a.expirationTimes; 0 < c; ) {
          var e2 = 31 - oc(c), f2 = 1 << e2;
          b2[e2] = 0;
          d[e2] = -1;
          a[e2] = -1;
          c &= ~f2;
        }
      }
      function Cc(a, b2) {
        var c = a.entangledLanes |= b2;
        for (a = a.entanglements; c; ) {
          var d = 31 - oc(c), e2 = 1 << d;
          e2 & b2 | a[d] & b2 && (a[d] |= b2);
          c &= ~e2;
        }
      }
      var C = 0;
      function Dc(a) {
        a &= -a;
        return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
      }
      var Ec;
      var Fc;
      var Gc;
      var Hc;
      var Ic;
      var Jc = false;
      var Kc = [];
      var Lc = null;
      var Mc = null;
      var Nc = null;
      var Oc = /* @__PURE__ */ new Map();
      var Pc = /* @__PURE__ */ new Map();
      var Qc = [];
      var Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
      function Sc(a, b2) {
        switch (a) {
          case "focusin":
          case "focusout":
            Lc = null;
            break;
          case "dragenter":
          case "dragleave":
            Mc = null;
            break;
          case "mouseover":
          case "mouseout":
            Nc = null;
            break;
          case "pointerover":
          case "pointerout":
            Oc.delete(b2.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            Pc.delete(b2.pointerId);
        }
      }
      function Tc(a, b2, c, d, e2, f2) {
        if (null === a || a.nativeEvent !== f2) return a = { blockedOn: b2, domEventName: c, eventSystemFlags: d, nativeEvent: f2, targetContainers: [e2] }, null !== b2 && (b2 = Cb(b2), null !== b2 && Fc(b2)), a;
        a.eventSystemFlags |= d;
        b2 = a.targetContainers;
        null !== e2 && -1 === b2.indexOf(e2) && b2.push(e2);
        return a;
      }
      function Uc(a, b2, c, d, e2) {
        switch (b2) {
          case "focusin":
            return Lc = Tc(Lc, a, b2, c, d, e2), true;
          case "dragenter":
            return Mc = Tc(Mc, a, b2, c, d, e2), true;
          case "mouseover":
            return Nc = Tc(Nc, a, b2, c, d, e2), true;
          case "pointerover":
            var f2 = e2.pointerId;
            Oc.set(f2, Tc(Oc.get(f2) || null, a, b2, c, d, e2));
            return true;
          case "gotpointercapture":
            return f2 = e2.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b2, c, d, e2)), true;
        }
        return false;
      }
      function Vc(a) {
        var b2 = Wc(a.target);
        if (null !== b2) {
          var c = Vb(b2);
          if (null !== c) {
            if (b2 = c.tag, 13 === b2) {
              if (b2 = Wb(c), null !== b2) {
                a.blockedOn = b2;
                Ic(a.priority, function() {
                  Gc(c);
                });
                return;
              }
            } else if (3 === b2 && c.stateNode.current.memoizedState.isDehydrated) {
              a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
              return;
            }
          }
        }
        a.blockedOn = null;
      }
      function Xc(a) {
        if (null !== a.blockedOn) return false;
        for (var b2 = a.targetContainers; 0 < b2.length; ) {
          var c = Yc(a.domEventName, a.eventSystemFlags, b2[0], a.nativeEvent);
          if (null === c) {
            c = a.nativeEvent;
            var d = new c.constructor(c.type, c);
            wb = d;
            c.target.dispatchEvent(d);
            wb = null;
          } else return b2 = Cb(c), null !== b2 && Fc(b2), a.blockedOn = c, false;
          b2.shift();
        }
        return true;
      }
      function Zc(a, b2, c) {
        Xc(a) && c.delete(b2);
      }
      function $c() {
        Jc = false;
        null !== Lc && Xc(Lc) && (Lc = null);
        null !== Mc && Xc(Mc) && (Mc = null);
        null !== Nc && Xc(Nc) && (Nc = null);
        Oc.forEach(Zc);
        Pc.forEach(Zc);
      }
      function ad(a, b2) {
        a.blockedOn === b2 && (a.blockedOn = null, Jc || (Jc = true, ca2.unstable_scheduleCallback(ca2.unstable_NormalPriority, $c)));
      }
      function bd(a) {
        function b2(b3) {
          return ad(b3, a);
        }
        if (0 < Kc.length) {
          ad(Kc[0], a);
          for (var c = 1; c < Kc.length; c++) {
            var d = Kc[c];
            d.blockedOn === a && (d.blockedOn = null);
          }
        }
        null !== Lc && ad(Lc, a);
        null !== Mc && ad(Mc, a);
        null !== Nc && ad(Nc, a);
        Oc.forEach(b2);
        Pc.forEach(b2);
        for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
        for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); ) Vc(c), null === c.blockedOn && Qc.shift();
      }
      var cd2 = ua2.ReactCurrentBatchConfig;
      var dd = true;
      function ed2(a, b2, c, d) {
        var e2 = C, f2 = cd2.transition;
        cd2.transition = null;
        try {
          C = 1, fd(a, b2, c, d);
        } finally {
          C = e2, cd2.transition = f2;
        }
      }
      function gd2(a, b2, c, d) {
        var e2 = C, f2 = cd2.transition;
        cd2.transition = null;
        try {
          C = 4, fd(a, b2, c, d);
        } finally {
          C = e2, cd2.transition = f2;
        }
      }
      function fd(a, b2, c, d) {
        if (dd) {
          var e2 = Yc(a, b2, c, d);
          if (null === e2) hd2(a, b2, d, id2, c), Sc(a, d);
          else if (Uc(e2, a, b2, c, d)) d.stopPropagation();
          else if (Sc(a, d), b2 & 4 && -1 < Rc.indexOf(a)) {
            for (; null !== e2; ) {
              var f2 = Cb(e2);
              null !== f2 && Ec(f2);
              f2 = Yc(a, b2, c, d);
              null === f2 && hd2(a, b2, d, id2, c);
              if (f2 === e2) break;
              e2 = f2;
            }
            null !== e2 && d.stopPropagation();
          } else hd2(a, b2, d, null, c);
        }
      }
      var id2 = null;
      function Yc(a, b2, c, d) {
        id2 = null;
        a = xb(d);
        a = Wc(a);
        if (null !== a) if (b2 = Vb(a), null === b2) a = null;
        else if (c = b2.tag, 13 === c) {
          a = Wb(b2);
          if (null !== a) return a;
          a = null;
        } else if (3 === c) {
          if (b2.stateNode.current.memoizedState.isDehydrated) return 3 === b2.tag ? b2.stateNode.containerInfo : null;
          a = null;
        } else b2 !== a && (a = null);
        id2 = a;
        return null;
      }
      function jd(a) {
        switch (a) {
          case "cancel":
          case "click":
          case "close":
          case "contextmenu":
          case "copy":
          case "cut":
          case "auxclick":
          case "dblclick":
          case "dragend":
          case "dragstart":
          case "drop":
          case "focusin":
          case "focusout":
          case "input":
          case "invalid":
          case "keydown":
          case "keypress":
          case "keyup":
          case "mousedown":
          case "mouseup":
          case "paste":
          case "pause":
          case "play":
          case "pointercancel":
          case "pointerdown":
          case "pointerup":
          case "ratechange":
          case "reset":
          case "resize":
          case "seeked":
          case "submit":
          case "touchcancel":
          case "touchend":
          case "touchstart":
          case "volumechange":
          case "change":
          case "selectionchange":
          case "textInput":
          case "compositionstart":
          case "compositionend":
          case "compositionupdate":
          case "beforeblur":
          case "afterblur":
          case "beforeinput":
          case "blur":
          case "fullscreenchange":
          case "focus":
          case "hashchange":
          case "popstate":
          case "select":
          case "selectstart":
            return 1;
          case "drag":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "mousemove":
          case "mouseout":
          case "mouseover":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "scroll":
          case "toggle":
          case "touchmove":
          case "wheel":
          case "mouseenter":
          case "mouseleave":
          case "pointerenter":
          case "pointerleave":
            return 4;
          case "message":
            switch (ec()) {
              case fc:
                return 1;
              case gc:
                return 4;
              case hc:
              case ic:
                return 16;
              case jc:
                return 536870912;
              default:
                return 16;
            }
          default:
            return 16;
        }
      }
      var kd = null;
      var ld = null;
      var md2 = null;
      function nd2() {
        if (md2) return md2;
        var a, b2 = ld, c = b2.length, d, e2 = "value" in kd ? kd.value : kd.textContent, f2 = e2.length;
        for (a = 0; a < c && b2[a] === e2[a]; a++) ;
        var g = c - a;
        for (d = 1; d <= g && b2[c - d] === e2[f2 - d]; d++) ;
        return md2 = e2.slice(a, 1 < d ? 1 - d : void 0);
      }
      function od(a) {
        var b2 = a.keyCode;
        "charCode" in a ? (a = a.charCode, 0 === a && 13 === b2 && (a = 13)) : a = b2;
        10 === a && (a = 13);
        return 32 <= a || 13 === a ? a : 0;
      }
      function pd2() {
        return true;
      }
      function qd() {
        return false;
      }
      function rd(a) {
        function b2(b3, d, e2, f2, g) {
          this._reactName = b3;
          this._targetInst = e2;
          this.type = d;
          this.nativeEvent = f2;
          this.target = g;
          this.currentTarget = null;
          for (var c in a) a.hasOwnProperty(c) && (b3 = a[c], this[c] = b3 ? b3(f2) : f2[c]);
          this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd2 : qd;
          this.isPropagationStopped = qd;
          return this;
        }
        A2(b2.prototype, { preventDefault: function() {
          this.defaultPrevented = true;
          var a2 = this.nativeEvent;
          a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd2);
        }, stopPropagation: function() {
          var a2 = this.nativeEvent;
          a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd2);
        }, persist: function() {
        }, isPersistent: pd2 });
        return b2;
      }
      var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
        return a.timeStamp || Date.now();
      }, defaultPrevented: 0, isTrusted: 0 };
      var td = rd(sd);
      var ud = A2({}, sd, { view: 0, detail: 0 });
      var vd2 = rd(ud);
      var wd;
      var xd2;
      var yd;
      var Ad2 = A2({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd2, button: 0, buttons: 0, relatedTarget: function(a) {
        return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
      }, movementX: function(a) {
        if ("movementX" in a) return a.movementX;
        a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd2 = a.screenY - yd.screenY) : xd2 = wd = 0, yd = a);
        return wd;
      }, movementY: function(a) {
        return "movementY" in a ? a.movementY : xd2;
      } });
      var Bd2 = rd(Ad2);
      var Cd = A2({}, Ad2, { dataTransfer: 0 });
      var Dd2 = rd(Cd);
      var Ed = A2({}, ud, { relatedTarget: 0 });
      var Fd2 = rd(Ed);
      var Gd2 = A2({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Hd = rd(Gd2);
      var Id = A2({}, sd, { clipboardData: function(a) {
        return "clipboardData" in a ? a.clipboardData : window.clipboardData;
      } });
      var Jd = rd(Id);
      var Kd = A2({}, sd, { data: 0 });
      var Ld2 = rd(Kd);
      var Md2 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
      };
      var Nd2 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
      };
      var Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
      function Pd2(a) {
        var b2 = this.nativeEvent;
        return b2.getModifierState ? b2.getModifierState(a) : (a = Od[a]) ? !!b2[a] : false;
      }
      function zd2() {
        return Pd2;
      }
      var Qd = A2({}, ud, { key: function(a) {
        if (a.key) {
          var b2 = Md2[a.key] || a.key;
          if ("Unidentified" !== b2) return b2;
        }
        return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd2[a.keyCode] || "Unidentified" : "";
      }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd2, charCode: function(a) {
        return "keypress" === a.type ? od(a) : 0;
      }, keyCode: function(a) {
        return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
      }, which: function(a) {
        return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
      } });
      var Rd2 = rd(Qd);
      var Sd = A2({}, Ad2, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
      var Td = rd(Sd);
      var Ud = A2({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd2 });
      var Vd2 = rd(Ud);
      var Wd = A2({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Xd = rd(Wd);
      var Yd = A2({}, Ad2, {
        deltaX: function(a) {
          return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
        },
        deltaY: function(a) {
          return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
      });
      var Zd = rd(Yd);
      var $d = [9, 13, 27, 32];
      var ae3 = ia && "CompositionEvent" in window;
      var be3 = null;
      ia && "documentMode" in document && (be3 = document.documentMode);
      var ce3 = ia && "TextEvent" in window && !be3;
      var de3 = ia && (!ae3 || be3 && 8 < be3 && 11 >= be3);
      var ee3 = String.fromCharCode(32);
      var fe3 = false;
      function ge3(a, b2) {
        switch (a) {
          case "keyup":
            return -1 !== $d.indexOf(b2.keyCode);
          case "keydown":
            return 229 !== b2.keyCode;
          case "keypress":
          case "mousedown":
          case "focusout":
            return true;
          default:
            return false;
        }
      }
      function he3(a) {
        a = a.detail;
        return "object" === typeof a && "data" in a ? a.data : null;
      }
      var ie3 = false;
      function je3(a, b2) {
        switch (a) {
          case "compositionend":
            return he3(b2);
          case "keypress":
            if (32 !== b2.which) return null;
            fe3 = true;
            return ee3;
          case "textInput":
            return a = b2.data, a === ee3 && fe3 ? null : a;
          default:
            return null;
        }
      }
      function ke3(a, b2) {
        if (ie3) return "compositionend" === a || !ae3 && ge3(a, b2) ? (a = nd2(), md2 = ld = kd = null, ie3 = false, a) : null;
        switch (a) {
          case "paste":
            return null;
          case "keypress":
            if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
              if (b2.char && 1 < b2.char.length) return b2.char;
              if (b2.which) return String.fromCharCode(b2.which);
            }
            return null;
          case "compositionend":
            return de3 && "ko" !== b2.locale ? null : b2.data;
          default:
            return null;
        }
      }
      var le3 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
      function me3(a) {
        var b2 = a && a.nodeName && a.nodeName.toLowerCase();
        return "input" === b2 ? !!le3[a.type] : "textarea" === b2 ? true : false;
      }
      function ne2(a, b2, c, d) {
        Eb(d);
        b2 = oe2(b2, "onChange");
        0 < b2.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b2 }));
      }
      var pe3 = null;
      var qe2 = null;
      function re2(a) {
        se3(a, 0);
      }
      function te3(a) {
        var b2 = ue3(a);
        if (Wa(b2)) return a;
      }
      function ve3(a, b2) {
        if ("change" === a) return b2;
      }
      var we3 = false;
      if (ia) {
        if (ia) {
          ye3 = "oninput" in document;
          if (!ye3) {
            ze3 = document.createElement("div");
            ze3.setAttribute("oninput", "return;");
            ye3 = "function" === typeof ze3.oninput;
          }
          xe2 = ye3;
        } else xe2 = false;
        we3 = xe2 && (!document.documentMode || 9 < document.documentMode);
      }
      var xe2;
      var ye3;
      var ze3;
      function Ae3() {
        pe3 && (pe3.detachEvent("onpropertychange", Be2), qe2 = pe3 = null);
      }
      function Be2(a) {
        if ("value" === a.propertyName && te3(qe2)) {
          var b2 = [];
          ne2(b2, qe2, a, xb(a));
          Jb(re2, b2);
        }
      }
      function Ce2(a, b2, c) {
        "focusin" === a ? (Ae3(), pe3 = b2, qe2 = c, pe3.attachEvent("onpropertychange", Be2)) : "focusout" === a && Ae3();
      }
      function De2(a) {
        if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te3(qe2);
      }
      function Ee2(a, b2) {
        if ("click" === a) return te3(b2);
      }
      function Fe2(a, b2) {
        if ("input" === a || "change" === a) return te3(b2);
      }
      function Ge2(a, b2) {
        return a === b2 && (0 !== a || 1 / a === 1 / b2) || a !== a && b2 !== b2;
      }
      var He3 = "function" === typeof Object.is ? Object.is : Ge2;
      function Ie2(a, b2) {
        if (He3(a, b2)) return true;
        if ("object" !== typeof a || null === a || "object" !== typeof b2 || null === b2) return false;
        var c = Object.keys(a), d = Object.keys(b2);
        if (c.length !== d.length) return false;
        for (d = 0; d < c.length; d++) {
          var e2 = c[d];
          if (!ja.call(b2, e2) || !He3(a[e2], b2[e2])) return false;
        }
        return true;
      }
      function Je3(a) {
        for (; a && a.firstChild; ) a = a.firstChild;
        return a;
      }
      function Ke3(a, b2) {
        var c = Je3(a);
        a = 0;
        for (var d; c; ) {
          if (3 === c.nodeType) {
            d = a + c.textContent.length;
            if (a <= b2 && d >= b2) return { node: c, offset: b2 - a };
            a = d;
          }
          a: {
            for (; c; ) {
              if (c.nextSibling) {
                c = c.nextSibling;
                break a;
              }
              c = c.parentNode;
            }
            c = void 0;
          }
          c = Je3(c);
        }
      }
      function Le3(a, b2) {
        return a && b2 ? a === b2 ? true : a && 3 === a.nodeType ? false : b2 && 3 === b2.nodeType ? Le3(a, b2.parentNode) : "contains" in a ? a.contains(b2) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b2) & 16) : false : false;
      }
      function Me3() {
        for (var a = window, b2 = Xa2(); b2 instanceof a.HTMLIFrameElement; ) {
          try {
            var c = "string" === typeof b2.contentWindow.location.href;
          } catch (d) {
            c = false;
          }
          if (c) a = b2.contentWindow;
          else break;
          b2 = Xa2(a.document);
        }
        return b2;
      }
      function Ne3(a) {
        var b2 = a && a.nodeName && a.nodeName.toLowerCase();
        return b2 && ("input" === b2 && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b2 || "true" === a.contentEditable);
      }
      function Oe3(a) {
        var b2 = Me3(), c = a.focusedElem, d = a.selectionRange;
        if (b2 !== c && c && c.ownerDocument && Le3(c.ownerDocument.documentElement, c)) {
          if (null !== d && Ne3(c)) {
            if (b2 = d.start, a = d.end, void 0 === a && (a = b2), "selectionStart" in c) c.selectionStart = b2, c.selectionEnd = Math.min(a, c.value.length);
            else if (a = (b2 = c.ownerDocument || document) && b2.defaultView || window, a.getSelection) {
              a = a.getSelection();
              var e2 = c.textContent.length, f2 = Math.min(d.start, e2);
              d = void 0 === d.end ? f2 : Math.min(d.end, e2);
              !a.extend && f2 > d && (e2 = d, d = f2, f2 = e2);
              e2 = Ke3(c, f2);
              var g = Ke3(
                c,
                d
              );
              e2 && g && (1 !== a.rangeCount || a.anchorNode !== e2.node || a.anchorOffset !== e2.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b2 = b2.createRange(), b2.setStart(e2.node, e2.offset), a.removeAllRanges(), f2 > d ? (a.addRange(b2), a.extend(g.node, g.offset)) : (b2.setEnd(g.node, g.offset), a.addRange(b2)));
            }
          }
          b2 = [];
          for (a = c; a = a.parentNode; ) 1 === a.nodeType && b2.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
          "function" === typeof c.focus && c.focus();
          for (c = 0; c < b2.length; c++) a = b2[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
        }
      }
      var Pe3 = ia && "documentMode" in document && 11 >= document.documentMode;
      var Qe3 = null;
      var Re3 = null;
      var Se2 = null;
      var Te2 = false;
      function Ue3(a, b2, c) {
        var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
        Te2 || null == Qe3 || Qe3 !== Xa2(d) || (d = Qe3, "selectionStart" in d && Ne3(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se2 && Ie2(Se2, d) || (Se2 = d, d = oe2(Re3, "onSelect"), 0 < d.length && (b2 = new td("onSelect", "select", null, b2, c), a.push({ event: b2, listeners: d }), b2.target = Qe3)));
      }
      function Ve3(a, b2) {
        var c = {};
        c[a.toLowerCase()] = b2.toLowerCase();
        c["Webkit" + a] = "webkit" + b2;
        c["Moz" + a] = "moz" + b2;
        return c;
      }
      var We2 = { animationend: Ve3("Animation", "AnimationEnd"), animationiteration: Ve3("Animation", "AnimationIteration"), animationstart: Ve3("Animation", "AnimationStart"), transitionend: Ve3("Transition", "TransitionEnd") };
      var Xe3 = {};
      var Ye3 = {};
      ia && (Ye3 = document.createElement("div").style, "AnimationEvent" in window || (delete We2.animationend.animation, delete We2.animationiteration.animation, delete We2.animationstart.animation), "TransitionEvent" in window || delete We2.transitionend.transition);
      function Ze3(a) {
        if (Xe3[a]) return Xe3[a];
        if (!We2[a]) return a;
        var b2 = We2[a], c;
        for (c in b2) if (b2.hasOwnProperty(c) && c in Ye3) return Xe3[a] = b2[c];
        return a;
      }
      var $e3 = Ze3("animationend");
      var af = Ze3("animationiteration");
      var bf = Ze3("animationstart");
      var cf = Ze3("transitionend");
      var df = /* @__PURE__ */ new Map();
      var ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
      function ff(a, b2) {
        df.set(a, b2);
        fa(b2, [a]);
      }
      for (gf = 0; gf < ef.length; gf++) {
        hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
        ff(jf, "on" + kf);
      }
      var hf;
      var jf;
      var kf;
      var gf;
      ff($e3, "onAnimationEnd");
      ff(af, "onAnimationIteration");
      ff(bf, "onAnimationStart");
      ff("dblclick", "onDoubleClick");
      ff("focusin", "onFocus");
      ff("focusout", "onBlur");
      ff(cf, "onTransitionEnd");
      ha("onMouseEnter", ["mouseout", "mouseover"]);
      ha("onMouseLeave", ["mouseout", "mouseover"]);
      ha("onPointerEnter", ["pointerout", "pointerover"]);
      ha("onPointerLeave", ["pointerout", "pointerover"]);
      fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
      fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
      fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
      fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
      fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
      fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
      var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
      var mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
      function nf(a, b2, c) {
        var d = a.type || "unknown-event";
        a.currentTarget = c;
        Ub(d, b2, void 0, a);
        a.currentTarget = null;
      }
      function se3(a, b2) {
        b2 = 0 !== (b2 & 4);
        for (var c = 0; c < a.length; c++) {
          var d = a[c], e2 = d.event;
          d = d.listeners;
          a: {
            var f2 = void 0;
            if (b2) for (var g = d.length - 1; 0 <= g; g--) {
              var h2 = d[g], k3 = h2.instance, l2 = h2.currentTarget;
              h2 = h2.listener;
              if (k3 !== f2 && e2.isPropagationStopped()) break a;
              nf(e2, h2, l2);
              f2 = k3;
            }
            else for (g = 0; g < d.length; g++) {
              h2 = d[g];
              k3 = h2.instance;
              l2 = h2.currentTarget;
              h2 = h2.listener;
              if (k3 !== f2 && e2.isPropagationStopped()) break a;
              nf(e2, h2, l2);
              f2 = k3;
            }
          }
        }
        if (Qb) throw a = Rb, Qb = false, Rb = null, a;
      }
      function D2(a, b2) {
        var c = b2[of];
        void 0 === c && (c = b2[of] = /* @__PURE__ */ new Set());
        var d = a + "__bubble";
        c.has(d) || (pf(b2, a, 2, false), c.add(d));
      }
      function qf(a, b2, c) {
        var d = 0;
        b2 && (d |= 4);
        pf(c, a, d, b2);
      }
      var rf = "_reactListening" + Math.random().toString(36).slice(2);
      function sf(a) {
        if (!a[rf]) {
          a[rf] = true;
          da.forEach(function(b3) {
            "selectionchange" !== b3 && (mf.has(b3) || qf(b3, false, a), qf(b3, true, a));
          });
          var b2 = 9 === a.nodeType ? a : a.ownerDocument;
          null === b2 || b2[rf] || (b2[rf] = true, qf("selectionchange", false, b2));
        }
      }
      function pf(a, b2, c, d) {
        switch (jd(b2)) {
          case 1:
            var e2 = ed2;
            break;
          case 4:
            e2 = gd2;
            break;
          default:
            e2 = fd;
        }
        c = e2.bind(null, b2, c, a);
        e2 = void 0;
        !Lb || "touchstart" !== b2 && "touchmove" !== b2 && "wheel" !== b2 || (e2 = true);
        d ? void 0 !== e2 ? a.addEventListener(b2, c, { capture: true, passive: e2 }) : a.addEventListener(b2, c, true) : void 0 !== e2 ? a.addEventListener(b2, c, { passive: e2 }) : a.addEventListener(b2, c, false);
      }
      function hd2(a, b2, c, d, e2) {
        var f2 = d;
        if (0 === (b2 & 1) && 0 === (b2 & 2) && null !== d) a: for (; ; ) {
          if (null === d) return;
          var g = d.tag;
          if (3 === g || 4 === g) {
            var h2 = d.stateNode.containerInfo;
            if (h2 === e2 || 8 === h2.nodeType && h2.parentNode === e2) break;
            if (4 === g) for (g = d.return; null !== g; ) {
              var k3 = g.tag;
              if (3 === k3 || 4 === k3) {
                if (k3 = g.stateNode.containerInfo, k3 === e2 || 8 === k3.nodeType && k3.parentNode === e2) return;
              }
              g = g.return;
            }
            for (; null !== h2; ) {
              g = Wc(h2);
              if (null === g) return;
              k3 = g.tag;
              if (5 === k3 || 6 === k3) {
                d = f2 = g;
                continue a;
              }
              h2 = h2.parentNode;
            }
          }
          d = d.return;
        }
        Jb(function() {
          var d2 = f2, e3 = xb(c), g2 = [];
          a: {
            var h3 = df.get(a);
            if (void 0 !== h3) {
              var k4 = td, n2 = a;
              switch (a) {
                case "keypress":
                  if (0 === od(c)) break a;
                case "keydown":
                case "keyup":
                  k4 = Rd2;
                  break;
                case "focusin":
                  n2 = "focus";
                  k4 = Fd2;
                  break;
                case "focusout":
                  n2 = "blur";
                  k4 = Fd2;
                  break;
                case "beforeblur":
                case "afterblur":
                  k4 = Fd2;
                  break;
                case "click":
                  if (2 === c.button) break a;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  k4 = Bd2;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  k4 = Dd2;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  k4 = Vd2;
                  break;
                case $e3:
                case af:
                case bf:
                  k4 = Hd;
                  break;
                case cf:
                  k4 = Xd;
                  break;
                case "scroll":
                  k4 = vd2;
                  break;
                case "wheel":
                  k4 = Zd;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  k4 = Jd;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  k4 = Td;
              }
              var t = 0 !== (b2 & 4), J2 = !t && "scroll" === a, x2 = t ? null !== h3 ? h3 + "Capture" : null : h3;
              t = [];
              for (var w2 = d2, u; null !== w2; ) {
                u = w2;
                var F4 = u.stateNode;
                5 === u.tag && null !== F4 && (u = F4, null !== x2 && (F4 = Kb(w2, x2), null != F4 && t.push(tf(w2, F4, u))));
                if (J2) break;
                w2 = w2.return;
              }
              0 < t.length && (h3 = new k4(h3, n2, null, c, e3), g2.push({ event: h3, listeners: t }));
            }
          }
          if (0 === (b2 & 7)) {
            a: {
              h3 = "mouseover" === a || "pointerover" === a;
              k4 = "mouseout" === a || "pointerout" === a;
              if (h3 && c !== wb && (n2 = c.relatedTarget || c.fromElement) && (Wc(n2) || n2[uf])) break a;
              if (k4 || h3) {
                h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
                if (k4) {
                  if (n2 = c.relatedTarget || c.toElement, k4 = d2, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag)) n2 = null;
                } else k4 = null, n2 = d2;
                if (k4 !== n2) {
                  t = Bd2;
                  F4 = "onMouseLeave";
                  x2 = "onMouseEnter";
                  w2 = "mouse";
                  if ("pointerout" === a || "pointerover" === a) t = Td, F4 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
                  J2 = null == k4 ? h3 : ue3(k4);
                  u = null == n2 ? h3 : ue3(n2);
                  h3 = new t(F4, w2 + "leave", k4, c, e3);
                  h3.target = J2;
                  h3.relatedTarget = u;
                  F4 = null;
                  Wc(e3) === d2 && (t = new t(x2, w2 + "enter", n2, c, e3), t.target = u, t.relatedTarget = J2, F4 = t);
                  J2 = F4;
                  if (k4 && n2) b: {
                    t = k4;
                    x2 = n2;
                    w2 = 0;
                    for (u = t; u; u = vf(u)) w2++;
                    u = 0;
                    for (F4 = x2; F4; F4 = vf(F4)) u++;
                    for (; 0 < w2 - u; ) t = vf(t), w2--;
                    for (; 0 < u - w2; ) x2 = vf(x2), u--;
                    for (; w2--; ) {
                      if (t === x2 || null !== x2 && t === x2.alternate) break b;
                      t = vf(t);
                      x2 = vf(x2);
                    }
                    t = null;
                  }
                  else t = null;
                  null !== k4 && wf(g2, h3, k4, t, false);
                  null !== n2 && null !== J2 && wf(g2, J2, n2, t, true);
                }
              }
            }
            a: {
              h3 = d2 ? ue3(d2) : window;
              k4 = h3.nodeName && h3.nodeName.toLowerCase();
              if ("select" === k4 || "input" === k4 && "file" === h3.type) var na = ve3;
              else if (me3(h3)) if (we3) na = Fe2;
              else {
                na = De2;
                var xa = Ce2;
              }
              else (k4 = h3.nodeName) && "input" === k4.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (na = Ee2);
              if (na && (na = na(a, d2))) {
                ne2(g2, na, c, e3);
                break a;
              }
              xa && xa(a, h3, d2);
              "focusout" === a && (xa = h3._wrapperState) && xa.controlled && "number" === h3.type && cb(h3, "number", h3.value);
            }
            xa = d2 ? ue3(d2) : window;
            switch (a) {
              case "focusin":
                if (me3(xa) || "true" === xa.contentEditable) Qe3 = xa, Re3 = d2, Se2 = null;
                break;
              case "focusout":
                Se2 = Re3 = Qe3 = null;
                break;
              case "mousedown":
                Te2 = true;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                Te2 = false;
                Ue3(g2, c, e3);
                break;
              case "selectionchange":
                if (Pe3) break;
              case "keydown":
              case "keyup":
                Ue3(g2, c, e3);
            }
            var $a;
            if (ae3) b: {
              switch (a) {
                case "compositionstart":
                  var ba2 = "onCompositionStart";
                  break b;
                case "compositionend":
                  ba2 = "onCompositionEnd";
                  break b;
                case "compositionupdate":
                  ba2 = "onCompositionUpdate";
                  break b;
              }
              ba2 = void 0;
            }
            else ie3 ? ge3(a, c) && (ba2 = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba2 = "onCompositionStart");
            ba2 && (de3 && "ko" !== c.locale && (ie3 || "onCompositionStart" !== ba2 ? "onCompositionEnd" === ba2 && ie3 && ($a = nd2()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie3 = true)), xa = oe2(d2, ba2), 0 < xa.length && (ba2 = new Ld2(ba2, a, null, c, e3), g2.push({ event: ba2, listeners: xa }), $a ? ba2.data = $a : ($a = he3(c), null !== $a && (ba2.data = $a))));
            if ($a = ce3 ? je3(a, c) : ke3(a, c)) d2 = oe2(d2, "onBeforeInput"), 0 < d2.length && (e3 = new Ld2("onBeforeInput", "beforeinput", null, c, e3), g2.push({ event: e3, listeners: d2 }), e3.data = $a);
          }
          se3(g2, b2);
        });
      }
      function tf(a, b2, c) {
        return { instance: a, listener: b2, currentTarget: c };
      }
      function oe2(a, b2) {
        for (var c = b2 + "Capture", d = []; null !== a; ) {
          var e2 = a, f2 = e2.stateNode;
          5 === e2.tag && null !== f2 && (e2 = f2, f2 = Kb(a, c), null != f2 && d.unshift(tf(a, f2, e2)), f2 = Kb(a, b2), null != f2 && d.push(tf(a, f2, e2)));
          a = a.return;
        }
        return d;
      }
      function vf(a) {
        if (null === a) return null;
        do
          a = a.return;
        while (a && 5 !== a.tag);
        return a ? a : null;
      }
      function wf(a, b2, c, d, e2) {
        for (var f2 = b2._reactName, g = []; null !== c && c !== d; ) {
          var h2 = c, k3 = h2.alternate, l2 = h2.stateNode;
          if (null !== k3 && k3 === d) break;
          5 === h2.tag && null !== l2 && (h2 = l2, e2 ? (k3 = Kb(c, f2), null != k3 && g.unshift(tf(c, k3, h2))) : e2 || (k3 = Kb(c, f2), null != k3 && g.push(tf(c, k3, h2))));
          c = c.return;
        }
        0 !== g.length && a.push({ event: b2, listeners: g });
      }
      var xf = /\r\n?/g;
      var yf = /\u0000|\uFFFD/g;
      function zf(a) {
        return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
      }
      function Af(a, b2, c) {
        b2 = zf(b2);
        if (zf(a) !== b2 && c) throw Error(p(425));
      }
      function Bf() {
      }
      var Cf = null;
      var Df = null;
      function Ef(a, b2) {
        return "textarea" === a || "noscript" === a || "string" === typeof b2.children || "number" === typeof b2.children || "object" === typeof b2.dangerouslySetInnerHTML && null !== b2.dangerouslySetInnerHTML && null != b2.dangerouslySetInnerHTML.__html;
      }
      var Ff = "function" === typeof setTimeout ? setTimeout : void 0;
      var Gf = "function" === typeof clearTimeout ? clearTimeout : void 0;
      var Hf = "function" === typeof Promise ? Promise : void 0;
      var Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
        return Hf.resolve(null).then(a).catch(If);
      } : Ff;
      function If(a) {
        setTimeout(function() {
          throw a;
        });
      }
      function Kf(a, b2) {
        var c = b2, d = 0;
        do {
          var e2 = c.nextSibling;
          a.removeChild(c);
          if (e2 && 8 === e2.nodeType) if (c = e2.data, "/$" === c) {
            if (0 === d) {
              a.removeChild(e2);
              bd(b2);
              return;
            }
            d--;
          } else "$" !== c && "$?" !== c && "$!" !== c || d++;
          c = e2;
        } while (c);
        bd(b2);
      }
      function Lf(a) {
        for (; null != a; a = a.nextSibling) {
          var b2 = a.nodeType;
          if (1 === b2 || 3 === b2) break;
          if (8 === b2) {
            b2 = a.data;
            if ("$" === b2 || "$!" === b2 || "$?" === b2) break;
            if ("/$" === b2) return null;
          }
        }
        return a;
      }
      function Mf(a) {
        a = a.previousSibling;
        for (var b2 = 0; a; ) {
          if (8 === a.nodeType) {
            var c = a.data;
            if ("$" === c || "$!" === c || "$?" === c) {
              if (0 === b2) return a;
              b2--;
            } else "/$" === c && b2++;
          }
          a = a.previousSibling;
        }
        return null;
      }
      var Nf = Math.random().toString(36).slice(2);
      var Of = "__reactFiber$" + Nf;
      var Pf = "__reactProps$" + Nf;
      var uf = "__reactContainer$" + Nf;
      var of = "__reactEvents$" + Nf;
      var Qf = "__reactListeners$" + Nf;
      var Rf = "__reactHandles$" + Nf;
      function Wc(a) {
        var b2 = a[Of];
        if (b2) return b2;
        for (var c = a.parentNode; c; ) {
          if (b2 = c[uf] || c[Of]) {
            c = b2.alternate;
            if (null !== b2.child || null !== c && null !== c.child) for (a = Mf(a); null !== a; ) {
              if (c = a[Of]) return c;
              a = Mf(a);
            }
            return b2;
          }
          a = c;
          c = a.parentNode;
        }
        return null;
      }
      function Cb(a) {
        a = a[Of] || a[uf];
        return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
      }
      function ue3(a) {
        if (5 === a.tag || 6 === a.tag) return a.stateNode;
        throw Error(p(33));
      }
      function Db(a) {
        return a[Pf] || null;
      }
      var Sf = [];
      var Tf = -1;
      function Uf(a) {
        return { current: a };
      }
      function E3(a) {
        0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
      }
      function G3(a, b2) {
        Tf++;
        Sf[Tf] = a.current;
        a.current = b2;
      }
      var Vf = {};
      var H2 = Uf(Vf);
      var Wf = Uf(false);
      var Xf = Vf;
      function Yf(a, b2) {
        var c = a.type.contextTypes;
        if (!c) return Vf;
        var d = a.stateNode;
        if (d && d.__reactInternalMemoizedUnmaskedChildContext === b2) return d.__reactInternalMemoizedMaskedChildContext;
        var e2 = {}, f2;
        for (f2 in c) e2[f2] = b2[f2];
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b2, a.__reactInternalMemoizedMaskedChildContext = e2);
        return e2;
      }
      function Zf(a) {
        a = a.childContextTypes;
        return null !== a && void 0 !== a;
      }
      function $f() {
        E3(Wf);
        E3(H2);
      }
      function ag(a, b2, c) {
        if (H2.current !== Vf) throw Error(p(168));
        G3(H2, b2);
        G3(Wf, c);
      }
      function bg(a, b2, c) {
        var d = a.stateNode;
        b2 = b2.childContextTypes;
        if ("function" !== typeof d.getChildContext) return c;
        d = d.getChildContext();
        for (var e2 in d) if (!(e2 in b2)) throw Error(p(108, Ra2(a) || "Unknown", e2));
        return A2({}, c, d);
      }
      function cg(a) {
        a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
        Xf = H2.current;
        G3(H2, a);
        G3(Wf, Wf.current);
        return true;
      }
      function dg(a, b2, c) {
        var d = a.stateNode;
        if (!d) throw Error(p(169));
        c ? (a = bg(a, b2, Xf), d.__reactInternalMemoizedMergedChildContext = a, E3(Wf), E3(H2), G3(H2, a)) : E3(Wf);
        G3(Wf, c);
      }
      var eg = null;
      var fg = false;
      var gg = false;
      function hg(a) {
        null === eg ? eg = [a] : eg.push(a);
      }
      function ig(a) {
        fg = true;
        hg(a);
      }
      function jg() {
        if (!gg && null !== eg) {
          gg = true;
          var a = 0, b2 = C;
          try {
            var c = eg;
            for (C = 1; a < c.length; a++) {
              var d = c[a];
              do
                d = d(true);
              while (null !== d);
            }
            eg = null;
            fg = false;
          } catch (e2) {
            throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e2;
          } finally {
            C = b2, gg = false;
          }
        }
        return null;
      }
      var kg = [];
      var lg = 0;
      var mg = null;
      var ng = 0;
      var og = [];
      var pg = 0;
      var qg = null;
      var rg = 1;
      var sg = "";
      function tg(a, b2) {
        kg[lg++] = ng;
        kg[lg++] = mg;
        mg = a;
        ng = b2;
      }
      function ug(a, b2, c) {
        og[pg++] = rg;
        og[pg++] = sg;
        og[pg++] = qg;
        qg = a;
        var d = rg;
        a = sg;
        var e2 = 32 - oc(d) - 1;
        d &= ~(1 << e2);
        c += 1;
        var f2 = 32 - oc(b2) + e2;
        if (30 < f2) {
          var g = e2 - e2 % 5;
          f2 = (d & (1 << g) - 1).toString(32);
          d >>= g;
          e2 -= g;
          rg = 1 << 32 - oc(b2) + e2 | c << e2 | d;
          sg = f2 + a;
        } else rg = 1 << f2 | c << e2 | d, sg = a;
      }
      function vg(a) {
        null !== a.return && (tg(a, 1), ug(a, 1, 0));
      }
      function wg(a) {
        for (; a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
        for (; a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
      }
      var xg = null;
      var yg = null;
      var I2 = false;
      var zg = null;
      function Ag(a, b2) {
        var c = Bg(5, null, null, 0);
        c.elementType = "DELETED";
        c.stateNode = b2;
        c.return = a;
        b2 = a.deletions;
        null === b2 ? (a.deletions = [c], a.flags |= 16) : b2.push(c);
      }
      function Cg(a, b2) {
        switch (a.tag) {
          case 5:
            var c = a.type;
            b2 = 1 !== b2.nodeType || c.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
            return null !== b2 ? (a.stateNode = b2, xg = a, yg = Lf(b2.firstChild), true) : false;
          case 6:
            return b2 = "" === a.pendingProps || 3 !== b2.nodeType ? null : b2, null !== b2 ? (a.stateNode = b2, xg = a, yg = null, true) : false;
          case 13:
            return b2 = 8 !== b2.nodeType ? null : b2, null !== b2 ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b2, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b2, c.return = a, a.child = c, xg = a, yg = null, true) : false;
          default:
            return false;
        }
      }
      function Dg(a) {
        return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
      }
      function Eg(a) {
        if (I2) {
          var b2 = yg;
          if (b2) {
            var c = b2;
            if (!Cg(a, b2)) {
              if (Dg(a)) throw Error(p(418));
              b2 = Lf(c.nextSibling);
              var d = xg;
              b2 && Cg(a, b2) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I2 = false, xg = a);
            }
          } else {
            if (Dg(a)) throw Error(p(418));
            a.flags = a.flags & -4097 | 2;
            I2 = false;
            xg = a;
          }
        }
      }
      function Fg(a) {
        for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
        xg = a;
      }
      function Gg(a) {
        if (a !== xg) return false;
        if (!I2) return Fg(a), I2 = true, false;
        var b2;
        (b2 = 3 !== a.tag) && !(b2 = 5 !== a.tag) && (b2 = a.type, b2 = "head" !== b2 && "body" !== b2 && !Ef(a.type, a.memoizedProps));
        if (b2 && (b2 = yg)) {
          if (Dg(a)) throw Hg(), Error(p(418));
          for (; b2; ) Ag(a, b2), b2 = Lf(b2.nextSibling);
        }
        Fg(a);
        if (13 === a.tag) {
          a = a.memoizedState;
          a = null !== a ? a.dehydrated : null;
          if (!a) throw Error(p(317));
          a: {
            a = a.nextSibling;
            for (b2 = 0; a; ) {
              if (8 === a.nodeType) {
                var c = a.data;
                if ("/$" === c) {
                  if (0 === b2) {
                    yg = Lf(a.nextSibling);
                    break a;
                  }
                  b2--;
                } else "$" !== c && "$!" !== c && "$?" !== c || b2++;
              }
              a = a.nextSibling;
            }
            yg = null;
          }
        } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
        return true;
      }
      function Hg() {
        for (var a = yg; a; ) a = Lf(a.nextSibling);
      }
      function Ig() {
        yg = xg = null;
        I2 = false;
      }
      function Jg(a) {
        null === zg ? zg = [a] : zg.push(a);
      }
      var Kg = ua2.ReactCurrentBatchConfig;
      function Lg(a, b2, c) {
        a = c.ref;
        if (null !== a && "function" !== typeof a && "object" !== typeof a) {
          if (c._owner) {
            c = c._owner;
            if (c) {
              if (1 !== c.tag) throw Error(p(309));
              var d = c.stateNode;
            }
            if (!d) throw Error(p(147, a));
            var e2 = d, f2 = "" + a;
            if (null !== b2 && null !== b2.ref && "function" === typeof b2.ref && b2.ref._stringRef === f2) return b2.ref;
            b2 = function(a2) {
              var b3 = e2.refs;
              null === a2 ? delete b3[f2] : b3[f2] = a2;
            };
            b2._stringRef = f2;
            return b2;
          }
          if ("string" !== typeof a) throw Error(p(284));
          if (!c._owner) throw Error(p(290, a));
        }
        return a;
      }
      function Mg(a, b2) {
        a = Object.prototype.toString.call(b2);
        throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a));
      }
      function Ng(a) {
        var b2 = a._init;
        return b2(a._payload);
      }
      function Og(a) {
        function b2(b3, c2) {
          if (a) {
            var d2 = b3.deletions;
            null === d2 ? (b3.deletions = [c2], b3.flags |= 16) : d2.push(c2);
          }
        }
        function c(c2, d2) {
          if (!a) return null;
          for (; null !== d2; ) b2(c2, d2), d2 = d2.sibling;
          return null;
        }
        function d(a2, b3) {
          for (a2 = /* @__PURE__ */ new Map(); null !== b3; ) null !== b3.key ? a2.set(b3.key, b3) : a2.set(b3.index, b3), b3 = b3.sibling;
          return a2;
        }
        function e2(a2, b3) {
          a2 = Pg(a2, b3);
          a2.index = 0;
          a2.sibling = null;
          return a2;
        }
        function f2(b3, c2, d2) {
          b3.index = d2;
          if (!a) return b3.flags |= 1048576, c2;
          d2 = b3.alternate;
          if (null !== d2) return d2 = d2.index, d2 < c2 ? (b3.flags |= 2, c2) : d2;
          b3.flags |= 2;
          return c2;
        }
        function g(b3) {
          a && null === b3.alternate && (b3.flags |= 2);
          return b3;
        }
        function h2(a2, b3, c2, d2) {
          if (null === b3 || 6 !== b3.tag) return b3 = Qg(c2, a2.mode, d2), b3.return = a2, b3;
          b3 = e2(b3, c2);
          b3.return = a2;
          return b3;
        }
        function k3(a2, b3, c2, d2) {
          var f3 = c2.type;
          if (f3 === ya2) return m(a2, b3, c2.props.children, d2, c2.key);
          if (null !== b3 && (b3.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha2 && Ng(f3) === b3.type)) return d2 = e2(b3, c2.props), d2.ref = Lg(a2, b3, c2), d2.return = a2, d2;
          d2 = Rg(c2.type, c2.key, c2.props, null, a2.mode, d2);
          d2.ref = Lg(a2, b3, c2);
          d2.return = a2;
          return d2;
        }
        function l2(a2, b3, c2, d2) {
          if (null === b3 || 4 !== b3.tag || b3.stateNode.containerInfo !== c2.containerInfo || b3.stateNode.implementation !== c2.implementation) return b3 = Sg(c2, a2.mode, d2), b3.return = a2, b3;
          b3 = e2(b3, c2.children || []);
          b3.return = a2;
          return b3;
        }
        function m(a2, b3, c2, d2, f3) {
          if (null === b3 || 7 !== b3.tag) return b3 = Tg(c2, a2.mode, d2, f3), b3.return = a2, b3;
          b3 = e2(b3, c2);
          b3.return = a2;
          return b3;
        }
        function q(a2, b3, c2) {
          if ("string" === typeof b3 && "" !== b3 || "number" === typeof b3) return b3 = Qg("" + b3, a2.mode, c2), b3.return = a2, b3;
          if ("object" === typeof b3 && null !== b3) {
            switch (b3.$$typeof) {
              case va2:
                return c2 = Rg(b3.type, b3.key, b3.props, null, a2.mode, c2), c2.ref = Lg(a2, null, b3), c2.return = a2, c2;
              case wa2:
                return b3 = Sg(b3, a2.mode, c2), b3.return = a2, b3;
              case Ha2:
                var d2 = b3._init;
                return q(a2, d2(b3._payload), c2);
            }
            if (eb(b3) || Ka(b3)) return b3 = Tg(b3, a2.mode, c2, null), b3.return = a2, b3;
            Mg(a2, b3);
          }
          return null;
        }
        function r(a2, b3, c2, d2) {
          var e3 = null !== b3 ? b3.key : null;
          if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2) return null !== e3 ? null : h2(a2, b3, "" + c2, d2);
          if ("object" === typeof c2 && null !== c2) {
            switch (c2.$$typeof) {
              case va2:
                return c2.key === e3 ? k3(a2, b3, c2, d2) : null;
              case wa2:
                return c2.key === e3 ? l2(a2, b3, c2, d2) : null;
              case Ha2:
                return e3 = c2._init, r(
                  a2,
                  b3,
                  e3(c2._payload),
                  d2
                );
            }
            if (eb(c2) || Ka(c2)) return null !== e3 ? null : m(a2, b3, c2, d2, null);
            Mg(a2, c2);
          }
          return null;
        }
        function y3(a2, b3, c2, d2, e3) {
          if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2) return a2 = a2.get(c2) || null, h2(b3, a2, "" + d2, e3);
          if ("object" === typeof d2 && null !== d2) {
            switch (d2.$$typeof) {
              case va2:
                return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k3(b3, a2, d2, e3);
              case wa2:
                return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l2(b3, a2, d2, e3);
              case Ha2:
                var f3 = d2._init;
                return y3(a2, b3, c2, f3(d2._payload), e3);
            }
            if (eb(d2) || Ka(d2)) return a2 = a2.get(c2) || null, m(b3, a2, d2, e3, null);
            Mg(b3, d2);
          }
          return null;
        }
        function n2(e3, g2, h3, k4) {
          for (var l3 = null, m2 = null, u = g2, w2 = g2 = 0, x2 = null; null !== u && w2 < h3.length; w2++) {
            u.index > w2 ? (x2 = u, u = null) : x2 = u.sibling;
            var n3 = r(e3, u, h3[w2], k4);
            if (null === n3) {
              null === u && (u = x2);
              break;
            }
            a && u && null === n3.alternate && b2(e3, u);
            g2 = f2(n3, g2, w2);
            null === m2 ? l3 = n3 : m2.sibling = n3;
            m2 = n3;
            u = x2;
          }
          if (w2 === h3.length) return c(e3, u), I2 && tg(e3, w2), l3;
          if (null === u) {
            for (; w2 < h3.length; w2++) u = q(e3, h3[w2], k4), null !== u && (g2 = f2(u, g2, w2), null === m2 ? l3 = u : m2.sibling = u, m2 = u);
            I2 && tg(e3, w2);
            return l3;
          }
          for (u = d(e3, u); w2 < h3.length; w2++) x2 = y3(u, e3, w2, h3[w2], k4), null !== x2 && (a && null !== x2.alternate && u.delete(null === x2.key ? w2 : x2.key), g2 = f2(x2, g2, w2), null === m2 ? l3 = x2 : m2.sibling = x2, m2 = x2);
          a && u.forEach(function(a2) {
            return b2(e3, a2);
          });
          I2 && tg(e3, w2);
          return l3;
        }
        function t(e3, g2, h3, k4) {
          var l3 = Ka(h3);
          if ("function" !== typeof l3) throw Error(p(150));
          h3 = l3.call(h3);
          if (null == h3) throw Error(p(151));
          for (var u = l3 = null, m2 = g2, w2 = g2 = 0, x2 = null, n3 = h3.next(); null !== m2 && !n3.done; w2++, n3 = h3.next()) {
            m2.index > w2 ? (x2 = m2, m2 = null) : x2 = m2.sibling;
            var t2 = r(e3, m2, n3.value, k4);
            if (null === t2) {
              null === m2 && (m2 = x2);
              break;
            }
            a && m2 && null === t2.alternate && b2(e3, m2);
            g2 = f2(t2, g2, w2);
            null === u ? l3 = t2 : u.sibling = t2;
            u = t2;
            m2 = x2;
          }
          if (n3.done) return c(
            e3,
            m2
          ), I2 && tg(e3, w2), l3;
          if (null === m2) {
            for (; !n3.done; w2++, n3 = h3.next()) n3 = q(e3, n3.value, k4), null !== n3 && (g2 = f2(n3, g2, w2), null === u ? l3 = n3 : u.sibling = n3, u = n3);
            I2 && tg(e3, w2);
            return l3;
          }
          for (m2 = d(e3, m2); !n3.done; w2++, n3 = h3.next()) n3 = y3(m2, e3, w2, n3.value, k4), null !== n3 && (a && null !== n3.alternate && m2.delete(null === n3.key ? w2 : n3.key), g2 = f2(n3, g2, w2), null === u ? l3 = n3 : u.sibling = n3, u = n3);
          a && m2.forEach(function(a2) {
            return b2(e3, a2);
          });
          I2 && tg(e3, w2);
          return l3;
        }
        function J2(a2, d2, f3, h3) {
          "object" === typeof f3 && null !== f3 && f3.type === ya2 && null === f3.key && (f3 = f3.props.children);
          if ("object" === typeof f3 && null !== f3) {
            switch (f3.$$typeof) {
              case va2:
                a: {
                  for (var k4 = f3.key, l3 = d2; null !== l3; ) {
                    if (l3.key === k4) {
                      k4 = f3.type;
                      if (k4 === ya2) {
                        if (7 === l3.tag) {
                          c(a2, l3.sibling);
                          d2 = e2(l3, f3.props.children);
                          d2.return = a2;
                          a2 = d2;
                          break a;
                        }
                      } else if (l3.elementType === k4 || "object" === typeof k4 && null !== k4 && k4.$$typeof === Ha2 && Ng(k4) === l3.type) {
                        c(a2, l3.sibling);
                        d2 = e2(l3, f3.props);
                        d2.ref = Lg(a2, l3, f3);
                        d2.return = a2;
                        a2 = d2;
                        break a;
                      }
                      c(a2, l3);
                      break;
                    } else b2(a2, l3);
                    l3 = l3.sibling;
                  }
                  f3.type === ya2 ? (d2 = Tg(f3.props.children, a2.mode, h3, f3.key), d2.return = a2, a2 = d2) : (h3 = Rg(f3.type, f3.key, f3.props, null, a2.mode, h3), h3.ref = Lg(a2, d2, f3), h3.return = a2, a2 = h3);
                }
                return g(a2);
              case wa2:
                a: {
                  for (l3 = f3.key; null !== d2; ) {
                    if (d2.key === l3) if (4 === d2.tag && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                      c(a2, d2.sibling);
                      d2 = e2(d2, f3.children || []);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    } else {
                      c(a2, d2);
                      break;
                    }
                    else b2(a2, d2);
                    d2 = d2.sibling;
                  }
                  d2 = Sg(f3, a2.mode, h3);
                  d2.return = a2;
                  a2 = d2;
                }
                return g(a2);
              case Ha2:
                return l3 = f3._init, J2(a2, d2, l3(f3._payload), h3);
            }
            if (eb(f3)) return n2(a2, d2, f3, h3);
            if (Ka(f3)) return t(a2, d2, f3, h3);
            Mg(a2, f3);
          }
          return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e2(d2, f3), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Qg(f3, a2.mode, h3), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
        }
        return J2;
      }
      var Ug = Og(true);
      var Vg = Og(false);
      var Wg = Uf(null);
      var Xg = null;
      var Yg = null;
      var Zg = null;
      function $g() {
        Zg = Yg = Xg = null;
      }
      function ah(a) {
        var b2 = Wg.current;
        E3(Wg);
        a._currentValue = b2;
      }
      function bh(a, b2, c) {
        for (; null !== a; ) {
          var d = a.alternate;
          (a.childLanes & b2) !== b2 ? (a.childLanes |= b2, null !== d && (d.childLanes |= b2)) : null !== d && (d.childLanes & b2) !== b2 && (d.childLanes |= b2);
          if (a === c) break;
          a = a.return;
        }
      }
      function ch(a, b2) {
        Xg = a;
        Zg = Yg = null;
        a = a.dependencies;
        null !== a && null !== a.firstContext && (0 !== (a.lanes & b2) && (dh = true), a.firstContext = null);
      }
      function eh(a) {
        var b2 = a._currentValue;
        if (Zg !== a) if (a = { context: a, memoizedValue: b2, next: null }, null === Yg) {
          if (null === Xg) throw Error(p(308));
          Yg = a;
          Xg.dependencies = { lanes: 0, firstContext: a };
        } else Yg = Yg.next = a;
        return b2;
      }
      var fh = null;
      function gh(a) {
        null === fh ? fh = [a] : fh.push(a);
      }
      function hh(a, b2, c, d) {
        var e2 = b2.interleaved;
        null === e2 ? (c.next = c, gh(b2)) : (c.next = e2.next, e2.next = c);
        b2.interleaved = c;
        return ih(a, d);
      }
      function ih(a, b2) {
        a.lanes |= b2;
        var c = a.alternate;
        null !== c && (c.lanes |= b2);
        c = a;
        for (a = a.return; null !== a; ) a.childLanes |= b2, c = a.alternate, null !== c && (c.childLanes |= b2), c = a, a = a.return;
        return 3 === c.tag ? c.stateNode : null;
      }
      var jh = false;
      function kh(a) {
        a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
      }
      function lh(a, b2) {
        a = a.updateQueue;
        b2.updateQueue === a && (b2.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
      }
      function mh(a, b2) {
        return { eventTime: a, lane: b2, tag: 0, payload: null, callback: null, next: null };
      }
      function nh(a, b2, c) {
        var d = a.updateQueue;
        if (null === d) return null;
        d = d.shared;
        if (0 !== (K2 & 2)) {
          var e2 = d.pending;
          null === e2 ? b2.next = b2 : (b2.next = e2.next, e2.next = b2);
          d.pending = b2;
          return ih(a, c);
        }
        e2 = d.interleaved;
        null === e2 ? (b2.next = b2, gh(d)) : (b2.next = e2.next, e2.next = b2);
        d.interleaved = b2;
        return ih(a, c);
      }
      function oh(a, b2, c) {
        b2 = b2.updateQueue;
        if (null !== b2 && (b2 = b2.shared, 0 !== (c & 4194240))) {
          var d = b2.lanes;
          d &= a.pendingLanes;
          c |= d;
          b2.lanes = c;
          Cc(a, c);
        }
      }
      function ph(a, b2) {
        var c = a.updateQueue, d = a.alternate;
        if (null !== d && (d = d.updateQueue, c === d)) {
          var e2 = null, f2 = null;
          c = c.firstBaseUpdate;
          if (null !== c) {
            do {
              var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
              null === f2 ? e2 = f2 = g : f2 = f2.next = g;
              c = c.next;
            } while (null !== c);
            null === f2 ? e2 = f2 = b2 : f2 = f2.next = b2;
          } else e2 = f2 = b2;
          c = { baseState: d.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
          a.updateQueue = c;
          return;
        }
        a = c.lastBaseUpdate;
        null === a ? c.firstBaseUpdate = b2 : a.next = b2;
        c.lastBaseUpdate = b2;
      }
      function qh(a, b2, c, d) {
        var e2 = a.updateQueue;
        jh = false;
        var f2 = e2.firstBaseUpdate, g = e2.lastBaseUpdate, h2 = e2.shared.pending;
        if (null !== h2) {
          e2.shared.pending = null;
          var k3 = h2, l2 = k3.next;
          k3.next = null;
          null === g ? f2 = l2 : g.next = l2;
          g = k3;
          var m = a.alternate;
          null !== m && (m = m.updateQueue, h2 = m.lastBaseUpdate, h2 !== g && (null === h2 ? m.firstBaseUpdate = l2 : h2.next = l2, m.lastBaseUpdate = k3));
        }
        if (null !== f2) {
          var q = e2.baseState;
          g = 0;
          m = l2 = k3 = null;
          h2 = f2;
          do {
            var r = h2.lane, y3 = h2.eventTime;
            if ((d & r) === r) {
              null !== m && (m = m.next = {
                eventTime: y3,
                lane: 0,
                tag: h2.tag,
                payload: h2.payload,
                callback: h2.callback,
                next: null
              });
              a: {
                var n2 = a, t = h2;
                r = b2;
                y3 = c;
                switch (t.tag) {
                  case 1:
                    n2 = t.payload;
                    if ("function" === typeof n2) {
                      q = n2.call(y3, q, r);
                      break a;
                    }
                    q = n2;
                    break a;
                  case 3:
                    n2.flags = n2.flags & -65537 | 128;
                  case 0:
                    n2 = t.payload;
                    r = "function" === typeof n2 ? n2.call(y3, q, r) : n2;
                    if (null === r || void 0 === r) break a;
                    q = A2({}, q, r);
                    break a;
                  case 2:
                    jh = true;
                }
              }
              null !== h2.callback && 0 !== h2.lane && (a.flags |= 64, r = e2.effects, null === r ? e2.effects = [h2] : r.push(h2));
            } else y3 = { eventTime: y3, lane: r, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, null === m ? (l2 = m = y3, k3 = q) : m = m.next = y3, g |= r;
            h2 = h2.next;
            if (null === h2) if (h2 = e2.shared.pending, null === h2) break;
            else r = h2, h2 = r.next, r.next = null, e2.lastBaseUpdate = r, e2.shared.pending = null;
          } while (1);
          null === m && (k3 = q);
          e2.baseState = k3;
          e2.firstBaseUpdate = l2;
          e2.lastBaseUpdate = m;
          b2 = e2.shared.interleaved;
          if (null !== b2) {
            e2 = b2;
            do
              g |= e2.lane, e2 = e2.next;
            while (e2 !== b2);
          } else null === f2 && (e2.shared.lanes = 0);
          rh |= g;
          a.lanes = g;
          a.memoizedState = q;
        }
      }
      function sh(a, b2, c) {
        a = b2.effects;
        b2.effects = null;
        if (null !== a) for (b2 = 0; b2 < a.length; b2++) {
          var d = a[b2], e2 = d.callback;
          if (null !== e2) {
            d.callback = null;
            d = c;
            if ("function" !== typeof e2) throw Error(p(191, e2));
            e2.call(d);
          }
        }
      }
      var th = {};
      var uh = Uf(th);
      var vh = Uf(th);
      var wh = Uf(th);
      function xh(a) {
        if (a === th) throw Error(p(174));
        return a;
      }
      function yh(a, b2) {
        G3(wh, b2);
        G3(vh, a);
        G3(uh, th);
        a = b2.nodeType;
        switch (a) {
          case 9:
          case 11:
            b2 = (b2 = b2.documentElement) ? b2.namespaceURI : lb(null, "");
            break;
          default:
            a = 8 === a ? b2.parentNode : b2, b2 = a.namespaceURI || null, a = a.tagName, b2 = lb(b2, a);
        }
        E3(uh);
        G3(uh, b2);
      }
      function zh() {
        E3(uh);
        E3(vh);
        E3(wh);
      }
      function Ah(a) {
        xh(wh.current);
        var b2 = xh(uh.current);
        var c = lb(b2, a.type);
        b2 !== c && (G3(vh, a), G3(uh, c));
      }
      function Bh(a) {
        vh.current === a && (E3(uh), E3(vh));
      }
      var L = Uf(0);
      function Ch(a) {
        for (var b2 = a; null !== b2; ) {
          if (13 === b2.tag) {
            var c = b2.memoizedState;
            if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b2;
          } else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
            if (0 !== (b2.flags & 128)) return b2;
          } else if (null !== b2.child) {
            b2.child.return = b2;
            b2 = b2.child;
            continue;
          }
          if (b2 === a) break;
          for (; null === b2.sibling; ) {
            if (null === b2.return || b2.return === a) return null;
            b2 = b2.return;
          }
          b2.sibling.return = b2.return;
          b2 = b2.sibling;
        }
        return null;
      }
      var Dh = [];
      function Eh() {
        for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
        Dh.length = 0;
      }
      var Fh = ua2.ReactCurrentDispatcher;
      var Gh = ua2.ReactCurrentBatchConfig;
      var Hh = 0;
      var M3 = null;
      var N2 = null;
      var O3 = null;
      var Ih = false;
      var Jh = false;
      var Kh = 0;
      var Lh = 0;
      function P3() {
        throw Error(p(321));
      }
      function Mh(a, b2) {
        if (null === b2) return false;
        for (var c = 0; c < b2.length && c < a.length; c++) if (!He3(a[c], b2[c])) return false;
        return true;
      }
      function Nh(a, b2, c, d, e2, f2) {
        Hh = f2;
        M3 = b2;
        b2.memoizedState = null;
        b2.updateQueue = null;
        b2.lanes = 0;
        Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
        a = c(d, e2);
        if (Jh) {
          f2 = 0;
          do {
            Jh = false;
            Kh = 0;
            if (25 <= f2) throw Error(p(301));
            f2 += 1;
            O3 = N2 = null;
            b2.updateQueue = null;
            Fh.current = Qh;
            a = c(d, e2);
          } while (Jh);
        }
        Fh.current = Rh;
        b2 = null !== N2 && null !== N2.next;
        Hh = 0;
        O3 = N2 = M3 = null;
        Ih = false;
        if (b2) throw Error(p(300));
        return a;
      }
      function Sh() {
        var a = 0 !== Kh;
        Kh = 0;
        return a;
      }
      function Th() {
        var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        null === O3 ? M3.memoizedState = O3 = a : O3 = O3.next = a;
        return O3;
      }
      function Uh() {
        if (null === N2) {
          var a = M3.alternate;
          a = null !== a ? a.memoizedState : null;
        } else a = N2.next;
        var b2 = null === O3 ? M3.memoizedState : O3.next;
        if (null !== b2) O3 = b2, N2 = a;
        else {
          if (null === a) throw Error(p(310));
          N2 = a;
          a = { memoizedState: N2.memoizedState, baseState: N2.baseState, baseQueue: N2.baseQueue, queue: N2.queue, next: null };
          null === O3 ? M3.memoizedState = O3 = a : O3 = O3.next = a;
        }
        return O3;
      }
      function Vh(a, b2) {
        return "function" === typeof b2 ? b2(a) : b2;
      }
      function Wh(a) {
        var b2 = Uh(), c = b2.queue;
        if (null === c) throw Error(p(311));
        c.lastRenderedReducer = a;
        var d = N2, e2 = d.baseQueue, f2 = c.pending;
        if (null !== f2) {
          if (null !== e2) {
            var g = e2.next;
            e2.next = f2.next;
            f2.next = g;
          }
          d.baseQueue = e2 = f2;
          c.pending = null;
        }
        if (null !== e2) {
          f2 = e2.next;
          d = d.baseState;
          var h2 = g = null, k3 = null, l2 = f2;
          do {
            var m = l2.lane;
            if ((Hh & m) === m) null !== k3 && (k3 = k3.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d = l2.hasEagerState ? l2.eagerState : a(d, l2.action);
            else {
              var q = {
                lane: m,
                action: l2.action,
                hasEagerState: l2.hasEagerState,
                eagerState: l2.eagerState,
                next: null
              };
              null === k3 ? (h2 = k3 = q, g = d) : k3 = k3.next = q;
              M3.lanes |= m;
              rh |= m;
            }
            l2 = l2.next;
          } while (null !== l2 && l2 !== f2);
          null === k3 ? g = d : k3.next = h2;
          He3(d, b2.memoizedState) || (dh = true);
          b2.memoizedState = d;
          b2.baseState = g;
          b2.baseQueue = k3;
          c.lastRenderedState = d;
        }
        a = c.interleaved;
        if (null !== a) {
          e2 = a;
          do
            f2 = e2.lane, M3.lanes |= f2, rh |= f2, e2 = e2.next;
          while (e2 !== a);
        } else null === e2 && (c.lanes = 0);
        return [b2.memoizedState, c.dispatch];
      }
      function Xh(a) {
        var b2 = Uh(), c = b2.queue;
        if (null === c) throw Error(p(311));
        c.lastRenderedReducer = a;
        var d = c.dispatch, e2 = c.pending, f2 = b2.memoizedState;
        if (null !== e2) {
          c.pending = null;
          var g = e2 = e2.next;
          do
            f2 = a(f2, g.action), g = g.next;
          while (g !== e2);
          He3(f2, b2.memoizedState) || (dh = true);
          b2.memoizedState = f2;
          null === b2.baseQueue && (b2.baseState = f2);
          c.lastRenderedState = f2;
        }
        return [f2, d];
      }
      function Yh() {
      }
      function Zh(a, b2) {
        var c = M3, d = Uh(), e2 = b2(), f2 = !He3(d.memoizedState, e2);
        f2 && (d.memoizedState = e2, dh = true);
        d = d.queue;
        $h(ai.bind(null, c, d, a), [a]);
        if (d.getSnapshot !== b2 || f2 || null !== O3 && O3.memoizedState.tag & 1) {
          c.flags |= 2048;
          bi(9, ci.bind(null, c, d, e2, b2), void 0, null);
          if (null === Q) throw Error(p(349));
          0 !== (Hh & 30) || di(c, b2, e2);
        }
        return e2;
      }
      function di(a, b2, c) {
        a.flags |= 16384;
        a = { getSnapshot: b2, value: c };
        b2 = M3.updateQueue;
        null === b2 ? (b2 = { lastEffect: null, stores: null }, M3.updateQueue = b2, b2.stores = [a]) : (c = b2.stores, null === c ? b2.stores = [a] : c.push(a));
      }
      function ci(a, b2, c, d) {
        b2.value = c;
        b2.getSnapshot = d;
        ei(b2) && fi(a);
      }
      function ai(a, b2, c) {
        return c(function() {
          ei(b2) && fi(a);
        });
      }
      function ei(a) {
        var b2 = a.getSnapshot;
        a = a.value;
        try {
          var c = b2();
          return !He3(a, c);
        } catch (d) {
          return true;
        }
      }
      function fi(a) {
        var b2 = ih(a, 1);
        null !== b2 && gi(b2, a, 1, -1);
      }
      function hi(a) {
        var b2 = Th();
        "function" === typeof a && (a = a());
        b2.memoizedState = b2.baseState = a;
        a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
        b2.queue = a;
        a = a.dispatch = ii.bind(null, M3, a);
        return [b2.memoizedState, a];
      }
      function bi(a, b2, c, d) {
        a = { tag: a, create: b2, destroy: c, deps: d, next: null };
        b2 = M3.updateQueue;
        null === b2 ? (b2 = { lastEffect: null, stores: null }, M3.updateQueue = b2, b2.lastEffect = a.next = a) : (c = b2.lastEffect, null === c ? b2.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b2.lastEffect = a));
        return a;
      }
      function ji() {
        return Uh().memoizedState;
      }
      function ki(a, b2, c, d) {
        var e2 = Th();
        M3.flags |= a;
        e2.memoizedState = bi(1 | b2, c, void 0, void 0 === d ? null : d);
      }
      function li(a, b2, c, d) {
        var e2 = Uh();
        d = void 0 === d ? null : d;
        var f2 = void 0;
        if (null !== N2) {
          var g = N2.memoizedState;
          f2 = g.destroy;
          if (null !== d && Mh(d, g.deps)) {
            e2.memoizedState = bi(b2, c, f2, d);
            return;
          }
        }
        M3.flags |= a;
        e2.memoizedState = bi(1 | b2, c, f2, d);
      }
      function mi(a, b2) {
        return ki(8390656, 8, a, b2);
      }
      function $h(a, b2) {
        return li(2048, 8, a, b2);
      }
      function ni(a, b2) {
        return li(4, 2, a, b2);
      }
      function oi(a, b2) {
        return li(4, 4, a, b2);
      }
      function pi(a, b2) {
        if ("function" === typeof b2) return a = a(), b2(a), function() {
          b2(null);
        };
        if (null !== b2 && void 0 !== b2) return a = a(), b2.current = a, function() {
          b2.current = null;
        };
      }
      function qi(a, b2, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return li(4, 4, pi.bind(null, b2, a), c);
      }
      function ri() {
      }
      function si(a, b2) {
        var c = Uh();
        b2 = void 0 === b2 ? null : b2;
        var d = c.memoizedState;
        if (null !== d && null !== b2 && Mh(b2, d[1])) return d[0];
        c.memoizedState = [a, b2];
        return a;
      }
      function ti(a, b2) {
        var c = Uh();
        b2 = void 0 === b2 ? null : b2;
        var d = c.memoizedState;
        if (null !== d && null !== b2 && Mh(b2, d[1])) return d[0];
        a = a();
        c.memoizedState = [a, b2];
        return a;
      }
      function ui(a, b2, c) {
        if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c;
        He3(c, b2) || (c = yc(), M3.lanes |= c, rh |= c, a.baseState = true);
        return b2;
      }
      function vi(a, b2) {
        var c = C;
        C = 0 !== c && 4 > c ? c : 4;
        a(true);
        var d = Gh.transition;
        Gh.transition = {};
        try {
          a(false), b2();
        } finally {
          C = c, Gh.transition = d;
        }
      }
      function wi() {
        return Uh().memoizedState;
      }
      function xi(a, b2, c) {
        var d = yi(a);
        c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
        if (zi(a)) Ai(b2, c);
        else if (c = hh(a, b2, c, d), null !== c) {
          var e2 = R2();
          gi(c, a, d, e2);
          Bi(c, b2, d);
        }
      }
      function ii(a, b2, c) {
        var d = yi(a), e2 = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
        if (zi(a)) Ai(b2, e2);
        else {
          var f2 = a.alternate;
          if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b2.lastRenderedReducer, null !== f2)) try {
            var g = b2.lastRenderedState, h2 = f2(g, c);
            e2.hasEagerState = true;
            e2.eagerState = h2;
            if (He3(h2, g)) {
              var k3 = b2.interleaved;
              null === k3 ? (e2.next = e2, gh(b2)) : (e2.next = k3.next, k3.next = e2);
              b2.interleaved = e2;
              return;
            }
          } catch (l2) {
          } finally {
          }
          c = hh(a, b2, e2, d);
          null !== c && (e2 = R2(), gi(c, a, d, e2), Bi(c, b2, d));
        }
      }
      function zi(a) {
        var b2 = a.alternate;
        return a === M3 || null !== b2 && b2 === M3;
      }
      function Ai(a, b2) {
        Jh = Ih = true;
        var c = a.pending;
        null === c ? b2.next = b2 : (b2.next = c.next, c.next = b2);
        a.pending = b2;
      }
      function Bi(a, b2, c) {
        if (0 !== (c & 4194240)) {
          var d = b2.lanes;
          d &= a.pendingLanes;
          c |= d;
          b2.lanes = c;
          Cc(a, c);
        }
      }
      var Rh = { readContext: eh, useCallback: P3, useContext: P3, useEffect: P3, useImperativeHandle: P3, useInsertionEffect: P3, useLayoutEffect: P3, useMemo: P3, useReducer: P3, useRef: P3, useState: P3, useDebugValue: P3, useDeferredValue: P3, useTransition: P3, useMutableSource: P3, useSyncExternalStore: P3, useId: P3, unstable_isNewReconciler: false };
      var Oh = { readContext: eh, useCallback: function(a, b2) {
        Th().memoizedState = [a, void 0 === b2 ? null : b2];
        return a;
      }, useContext: eh, useEffect: mi, useImperativeHandle: function(a, b2, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return ki(
          4194308,
          4,
          pi.bind(null, b2, a),
          c
        );
      }, useLayoutEffect: function(a, b2) {
        return ki(4194308, 4, a, b2);
      }, useInsertionEffect: function(a, b2) {
        return ki(4, 2, a, b2);
      }, useMemo: function(a, b2) {
        var c = Th();
        b2 = void 0 === b2 ? null : b2;
        a = a();
        c.memoizedState = [a, b2];
        return a;
      }, useReducer: function(a, b2, c) {
        var d = Th();
        b2 = void 0 !== c ? c(b2) : b2;
        d.memoizedState = d.baseState = b2;
        a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b2 };
        d.queue = a;
        a = a.dispatch = xi.bind(null, M3, a);
        return [d.memoizedState, a];
      }, useRef: function(a) {
        var b2 = Th();
        a = { current: a };
        return b2.memoizedState = a;
      }, useState: hi, useDebugValue: ri, useDeferredValue: function(a) {
        return Th().memoizedState = a;
      }, useTransition: function() {
        var a = hi(false), b2 = a[0];
        a = vi.bind(null, a[1]);
        Th().memoizedState = a;
        return [b2, a];
      }, useMutableSource: function() {
      }, useSyncExternalStore: function(a, b2, c) {
        var d = M3, e2 = Th();
        if (I2) {
          if (void 0 === c) throw Error(p(407));
          c = c();
        } else {
          c = b2();
          if (null === Q) throw Error(p(349));
          0 !== (Hh & 30) || di(d, b2, c);
        }
        e2.memoizedState = c;
        var f2 = { value: c, getSnapshot: b2 };
        e2.queue = f2;
        mi(ai.bind(
          null,
          d,
          f2,
          a
        ), [a]);
        d.flags |= 2048;
        bi(9, ci.bind(null, d, f2, c, b2), void 0, null);
        return c;
      }, useId: function() {
        var a = Th(), b2 = Q.identifierPrefix;
        if (I2) {
          var c = sg;
          var d = rg;
          c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
          b2 = ":" + b2 + "R" + c;
          c = Kh++;
          0 < c && (b2 += "H" + c.toString(32));
          b2 += ":";
        } else c = Lh++, b2 = ":" + b2 + "r" + c.toString(32) + ":";
        return a.memoizedState = b2;
      }, unstable_isNewReconciler: false };
      var Ph = {
        readContext: eh,
        useCallback: si,
        useContext: eh,
        useEffect: $h,
        useImperativeHandle: qi,
        useInsertionEffect: ni,
        useLayoutEffect: oi,
        useMemo: ti,
        useReducer: Wh,
        useRef: ji,
        useState: function() {
          return Wh(Vh);
        },
        useDebugValue: ri,
        useDeferredValue: function(a) {
          var b2 = Uh();
          return ui(b2, N2.memoizedState, a);
        },
        useTransition: function() {
          var a = Wh(Vh)[0], b2 = Uh().memoizedState;
          return [a, b2];
        },
        useMutableSource: Yh,
        useSyncExternalStore: Zh,
        useId: wi,
        unstable_isNewReconciler: false
      };
      var Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
        return Xh(Vh);
      }, useDebugValue: ri, useDeferredValue: function(a) {
        var b2 = Uh();
        return null === N2 ? b2.memoizedState = a : ui(b2, N2.memoizedState, a);
      }, useTransition: function() {
        var a = Xh(Vh)[0], b2 = Uh().memoizedState;
        return [a, b2];
      }, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
      function Ci(a, b2) {
        if (a && a.defaultProps) {
          b2 = A2({}, b2);
          a = a.defaultProps;
          for (var c in a) void 0 === b2[c] && (b2[c] = a[c]);
          return b2;
        }
        return b2;
      }
      function Di(a, b2, c, d) {
        b2 = a.memoizedState;
        c = c(d, b2);
        c = null === c || void 0 === c ? b2 : A2({}, b2, c);
        a.memoizedState = c;
        0 === a.lanes && (a.updateQueue.baseState = c);
      }
      var Ei = { isMounted: function(a) {
        return (a = a._reactInternals) ? Vb(a) === a : false;
      }, enqueueSetState: function(a, b2, c) {
        a = a._reactInternals;
        var d = R2(), e2 = yi(a), f2 = mh(d, e2);
        f2.payload = b2;
        void 0 !== c && null !== c && (f2.callback = c);
        b2 = nh(a, f2, e2);
        null !== b2 && (gi(b2, a, e2, d), oh(b2, a, e2));
      }, enqueueReplaceState: function(a, b2, c) {
        a = a._reactInternals;
        var d = R2(), e2 = yi(a), f2 = mh(d, e2);
        f2.tag = 1;
        f2.payload = b2;
        void 0 !== c && null !== c && (f2.callback = c);
        b2 = nh(a, f2, e2);
        null !== b2 && (gi(b2, a, e2, d), oh(b2, a, e2));
      }, enqueueForceUpdate: function(a, b2) {
        a = a._reactInternals;
        var c = R2(), d = yi(a), e2 = mh(c, d);
        e2.tag = 2;
        void 0 !== b2 && null !== b2 && (e2.callback = b2);
        b2 = nh(a, e2, d);
        null !== b2 && (gi(b2, a, d, c), oh(b2, a, d));
      } };
      function Fi(a, b2, c, d, e2, f2, g) {
        a = a.stateNode;
        return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f2, g) : b2.prototype && b2.prototype.isPureReactComponent ? !Ie2(c, d) || !Ie2(e2, f2) : true;
      }
      function Gi(a, b2, c) {
        var d = false, e2 = Vf;
        var f2 = b2.contextType;
        "object" === typeof f2 && null !== f2 ? f2 = eh(f2) : (e2 = Zf(b2) ? Xf : H2.current, d = b2.contextTypes, f2 = (d = null !== d && void 0 !== d) ? Yf(a, e2) : Vf);
        b2 = new b2(c, f2);
        a.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
        b2.updater = Ei;
        a.stateNode = b2;
        b2._reactInternals = a;
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e2, a.__reactInternalMemoizedMaskedChildContext = f2);
        return b2;
      }
      function Hi(a, b2, c, d) {
        a = b2.state;
        "function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c, d);
        "function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c, d);
        b2.state !== a && Ei.enqueueReplaceState(b2, b2.state, null);
      }
      function Ii(a, b2, c, d) {
        var e2 = a.stateNode;
        e2.props = c;
        e2.state = a.memoizedState;
        e2.refs = {};
        kh(a);
        var f2 = b2.contextType;
        "object" === typeof f2 && null !== f2 ? e2.context = eh(f2) : (f2 = Zf(b2) ? Xf : H2.current, e2.context = Yf(a, f2));
        e2.state = a.memoizedState;
        f2 = b2.getDerivedStateFromProps;
        "function" === typeof f2 && (Di(a, b2, f2, c), e2.state = a.memoizedState);
        "function" === typeof b2.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b2 = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b2 !== e2.state && Ei.enqueueReplaceState(e2, e2.state, null), qh(a, c, e2, d), e2.state = a.memoizedState);
        "function" === typeof e2.componentDidMount && (a.flags |= 4194308);
      }
      function Ji(a, b2) {
        try {
          var c = "", d = b2;
          do
            c += Pa2(d), d = d.return;
          while (d);
          var e2 = c;
        } catch (f2) {
          e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
        }
        return { value: a, source: b2, stack: e2, digest: null };
      }
      function Ki(a, b2, c) {
        return { value: a, source: null, stack: null != c ? c : null, digest: null != b2 ? b2 : null };
      }
      function Li(a, b2) {
        try {
          console.error(b2.value);
        } catch (c) {
          setTimeout(function() {
            throw c;
          });
        }
      }
      var Mi = "function" === typeof WeakMap ? WeakMap : Map;
      function Ni(a, b2, c) {
        c = mh(-1, c);
        c.tag = 3;
        c.payload = { element: null };
        var d = b2.value;
        c.callback = function() {
          Oi || (Oi = true, Pi = d);
          Li(a, b2);
        };
        return c;
      }
      function Qi(a, b2, c) {
        c = mh(-1, c);
        c.tag = 3;
        var d = a.type.getDerivedStateFromError;
        if ("function" === typeof d) {
          var e2 = b2.value;
          c.payload = function() {
            return d(e2);
          };
          c.callback = function() {
            Li(a, b2);
          };
        }
        var f2 = a.stateNode;
        null !== f2 && "function" === typeof f2.componentDidCatch && (c.callback = function() {
          Li(a, b2);
          "function" !== typeof d && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
          var c2 = b2.stack;
          this.componentDidCatch(b2.value, { componentStack: null !== c2 ? c2 : "" });
        });
        return c;
      }
      function Si(a, b2, c) {
        var d = a.pingCache;
        if (null === d) {
          d = a.pingCache = new Mi();
          var e2 = /* @__PURE__ */ new Set();
          d.set(b2, e2);
        } else e2 = d.get(b2), void 0 === e2 && (e2 = /* @__PURE__ */ new Set(), d.set(b2, e2));
        e2.has(c) || (e2.add(c), a = Ti.bind(null, a, b2, c), b2.then(a, a));
      }
      function Ui(a) {
        do {
          var b2;
          if (b2 = 13 === a.tag) b2 = a.memoizedState, b2 = null !== b2 ? null !== b2.dehydrated ? true : false : true;
          if (b2) return a;
          a = a.return;
        } while (null !== a);
        return null;
      }
      function Vi(a, b2, c, d, e2) {
        if (0 === (a.mode & 1)) return a === b2 ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b2 = mh(-1, 1), b2.tag = 2, nh(c, b2, 1))), c.lanes |= 1), a;
        a.flags |= 65536;
        a.lanes = e2;
        return a;
      }
      var Wi = ua2.ReactCurrentOwner;
      var dh = false;
      function Xi(a, b2, c, d) {
        b2.child = null === a ? Vg(b2, null, c, d) : Ug(b2, a.child, c, d);
      }
      function Yi(a, b2, c, d, e2) {
        c = c.render;
        var f2 = b2.ref;
        ch(b2, e2);
        d = Nh(a, b2, c, d, f2, e2);
        c = Sh();
        if (null !== a && !dh) return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e2, Zi(a, b2, e2);
        I2 && c && vg(b2);
        b2.flags |= 1;
        Xi(a, b2, d, e2);
        return b2.child;
      }
      function $i(a, b2, c, d, e2) {
        if (null === a) {
          var f2 = c.type;
          if ("function" === typeof f2 && !aj(f2) && void 0 === f2.defaultProps && null === c.compare && void 0 === c.defaultProps) return b2.tag = 15, b2.type = f2, bj(a, b2, f2, d, e2);
          a = Rg(c.type, null, d, b2, b2.mode, e2);
          a.ref = b2.ref;
          a.return = b2;
          return b2.child = a;
        }
        f2 = a.child;
        if (0 === (a.lanes & e2)) {
          var g = f2.memoizedProps;
          c = c.compare;
          c = null !== c ? c : Ie2;
          if (c(g, d) && a.ref === b2.ref) return Zi(a, b2, e2);
        }
        b2.flags |= 1;
        a = Pg(f2, d);
        a.ref = b2.ref;
        a.return = b2;
        return b2.child = a;
      }
      function bj(a, b2, c, d, e2) {
        if (null !== a) {
          var f2 = a.memoizedProps;
          if (Ie2(f2, d) && a.ref === b2.ref) if (dh = false, b2.pendingProps = d = f2, 0 !== (a.lanes & e2)) 0 !== (a.flags & 131072) && (dh = true);
          else return b2.lanes = a.lanes, Zi(a, b2, e2);
        }
        return cj(a, b2, c, d, e2);
      }
      function dj(a, b2, c) {
        var d = b2.pendingProps, e2 = d.children, f2 = null !== a ? a.memoizedState : null;
        if ("hidden" === d.mode) if (0 === (b2.mode & 1)) b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G3(ej, fj), fj |= c;
        else {
          if (0 === (c & 1073741824)) return a = null !== f2 ? f2.baseLanes | c : c, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b2.updateQueue = null, G3(ej, fj), fj |= a, null;
          b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
          d = null !== f2 ? f2.baseLanes : c;
          G3(ej, fj);
          fj |= d;
        }
        else null !== f2 ? (d = f2.baseLanes | c, b2.memoizedState = null) : d = c, G3(ej, fj), fj |= d;
        Xi(a, b2, e2, c);
        return b2.child;
      }
      function gj(a, b2) {
        var c = b2.ref;
        if (null === a && null !== c || null !== a && a.ref !== c) b2.flags |= 512, b2.flags |= 2097152;
      }
      function cj(a, b2, c, d, e2) {
        var f2 = Zf(c) ? Xf : H2.current;
        f2 = Yf(b2, f2);
        ch(b2, e2);
        c = Nh(a, b2, c, d, f2, e2);
        d = Sh();
        if (null !== a && !dh) return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e2, Zi(a, b2, e2);
        I2 && d && vg(b2);
        b2.flags |= 1;
        Xi(a, b2, c, e2);
        return b2.child;
      }
      function hj(a, b2, c, d, e2) {
        if (Zf(c)) {
          var f2 = true;
          cg(b2);
        } else f2 = false;
        ch(b2, e2);
        if (null === b2.stateNode) ij(a, b2), Gi(b2, c, d), Ii(b2, c, d, e2), d = true;
        else if (null === a) {
          var g = b2.stateNode, h2 = b2.memoizedProps;
          g.props = h2;
          var k3 = g.context, l2 = c.contextType;
          "object" === typeof l2 && null !== l2 ? l2 = eh(l2) : (l2 = Zf(c) ? Xf : H2.current, l2 = Yf(b2, l2));
          var m = c.getDerivedStateFromProps, q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
          q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h2 !== d || k3 !== l2) && Hi(b2, g, d, l2);
          jh = false;
          var r = b2.memoizedState;
          g.state = r;
          qh(b2, d, g, e2);
          k3 = b2.memoizedState;
          h2 !== d || r !== k3 || Wf.current || jh ? ("function" === typeof m && (Di(b2, c, m, d), k3 = b2.memoizedState), (h2 = jh || Fi(b2, c, h2, d, r, k3, l2)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b2.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b2.flags |= 4194308), b2.memoizedProps = d, b2.memoizedState = k3), g.props = d, g.state = k3, g.context = l2, d = h2) : ("function" === typeof g.componentDidMount && (b2.flags |= 4194308), d = false);
        } else {
          g = b2.stateNode;
          lh(a, b2);
          h2 = b2.memoizedProps;
          l2 = b2.type === b2.elementType ? h2 : Ci(b2.type, h2);
          g.props = l2;
          q = b2.pendingProps;
          r = g.context;
          k3 = c.contextType;
          "object" === typeof k3 && null !== k3 ? k3 = eh(k3) : (k3 = Zf(c) ? Xf : H2.current, k3 = Yf(b2, k3));
          var y3 = c.getDerivedStateFromProps;
          (m = "function" === typeof y3 || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h2 !== q || r !== k3) && Hi(b2, g, d, k3);
          jh = false;
          r = b2.memoizedState;
          g.state = r;
          qh(b2, d, g, e2);
          var n2 = b2.memoizedState;
          h2 !== q || r !== n2 || Wf.current || jh ? ("function" === typeof y3 && (Di(b2, c, y3, d), n2 = b2.memoizedState), (l2 = jh || Fi(b2, c, l2, d, r, n2, k3) || false) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n2, k3), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n2, k3)), "function" === typeof g.componentDidUpdate && (b2.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b2.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h2 === a.memoizedProps && r === a.memoizedState || (b2.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r === a.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d, b2.memoizedState = n2), g.props = d, g.state = n2, g.context = k3, d = l2) : ("function" !== typeof g.componentDidUpdate || h2 === a.memoizedProps && r === a.memoizedState || (b2.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r === a.memoizedState || (b2.flags |= 1024), d = false);
        }
        return jj(a, b2, c, d, f2, e2);
      }
      function jj(a, b2, c, d, e2, f2) {
        gj(a, b2);
        var g = 0 !== (b2.flags & 128);
        if (!d && !g) return e2 && dg(b2, c, false), Zi(a, b2, f2);
        d = b2.stateNode;
        Wi.current = b2;
        var h2 = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
        b2.flags |= 1;
        null !== a && g ? (b2.child = Ug(b2, a.child, null, f2), b2.child = Ug(b2, null, h2, f2)) : Xi(a, b2, h2, f2);
        b2.memoizedState = d.state;
        e2 && dg(b2, c, true);
        return b2.child;
      }
      function kj(a) {
        var b2 = a.stateNode;
        b2.pendingContext ? ag(a, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && ag(a, b2.context, false);
        yh(a, b2.containerInfo);
      }
      function lj(a, b2, c, d, e2) {
        Ig();
        Jg(e2);
        b2.flags |= 256;
        Xi(a, b2, c, d);
        return b2.child;
      }
      var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
      function nj(a) {
        return { baseLanes: a, cachePool: null, transitions: null };
      }
      function oj(a, b2, c) {
        var d = b2.pendingProps, e2 = L.current, f2 = false, g = 0 !== (b2.flags & 128), h2;
        (h2 = g) || (h2 = null !== a && null === a.memoizedState ? false : 0 !== (e2 & 2));
        if (h2) f2 = true, b2.flags &= -129;
        else if (null === a || null !== a.memoizedState) e2 |= 1;
        G3(L, e2 & 1);
        if (null === a) {
          Eg(b2);
          a = b2.memoizedState;
          if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b2.mode & 1) ? b2.lanes = 1 : "$!" === a.data ? b2.lanes = 8 : b2.lanes = 1073741824, null;
          g = d.children;
          a = d.fallback;
          return f2 ? (d = b2.mode, f2 = b2.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g) : f2 = pj(g, d, 0, null), a = Tg(a, d, c, null), f2.return = b2, a.return = b2, f2.sibling = a, b2.child = f2, b2.child.memoizedState = nj(c), b2.memoizedState = mj, a) : qj(b2, g);
        }
        e2 = a.memoizedState;
        if (null !== e2 && (h2 = e2.dehydrated, null !== h2)) return rj(a, b2, g, d, h2, e2, c);
        if (f2) {
          f2 = d.fallback;
          g = b2.mode;
          e2 = a.child;
          h2 = e2.sibling;
          var k3 = { mode: "hidden", children: d.children };
          0 === (g & 1) && b2.child !== e2 ? (d = b2.child, d.childLanes = 0, d.pendingProps = k3, b2.deletions = null) : (d = Pg(e2, k3), d.subtreeFlags = e2.subtreeFlags & 14680064);
          null !== h2 ? f2 = Pg(h2, f2) : (f2 = Tg(f2, g, c, null), f2.flags |= 2);
          f2.return = b2;
          d.return = b2;
          d.sibling = f2;
          b2.child = d;
          d = f2;
          f2 = b2.child;
          g = a.child.memoizedState;
          g = null === g ? nj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
          f2.memoizedState = g;
          f2.childLanes = a.childLanes & ~c;
          b2.memoizedState = mj;
          return d;
        }
        f2 = a.child;
        a = f2.sibling;
        d = Pg(f2, { mode: "visible", children: d.children });
        0 === (b2.mode & 1) && (d.lanes = c);
        d.return = b2;
        d.sibling = null;
        null !== a && (c = b2.deletions, null === c ? (b2.deletions = [a], b2.flags |= 16) : c.push(a));
        b2.child = d;
        b2.memoizedState = null;
        return d;
      }
      function qj(a, b2) {
        b2 = pj({ mode: "visible", children: b2 }, a.mode, 0, null);
        b2.return = a;
        return a.child = b2;
      }
      function sj(a, b2, c, d) {
        null !== d && Jg(d);
        Ug(b2, a.child, null, c);
        a = qj(b2, b2.pendingProps.children);
        a.flags |= 2;
        b2.memoizedState = null;
        return a;
      }
      function rj(a, b2, c, d, e2, f2, g) {
        if (c) {
          if (b2.flags & 256) return b2.flags &= -257, d = Ki(Error(p(422))), sj(a, b2, g, d);
          if (null !== b2.memoizedState) return b2.child = a.child, b2.flags |= 128, null;
          f2 = d.fallback;
          e2 = b2.mode;
          d = pj({ mode: "visible", children: d.children }, e2, 0, null);
          f2 = Tg(f2, e2, g, null);
          f2.flags |= 2;
          d.return = b2;
          f2.return = b2;
          d.sibling = f2;
          b2.child = d;
          0 !== (b2.mode & 1) && Ug(b2, a.child, null, g);
          b2.child.memoizedState = nj(g);
          b2.memoizedState = mj;
          return f2;
        }
        if (0 === (b2.mode & 1)) return sj(a, b2, g, null);
        if ("$!" === e2.data) {
          d = e2.nextSibling && e2.nextSibling.dataset;
          if (d) var h2 = d.dgst;
          d = h2;
          f2 = Error(p(419));
          d = Ki(f2, d, void 0);
          return sj(a, b2, g, d);
        }
        h2 = 0 !== (g & a.childLanes);
        if (dh || h2) {
          d = Q;
          if (null !== d) {
            switch (g & -g) {
              case 4:
                e2 = 2;
                break;
              case 16:
                e2 = 8;
                break;
              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
              case 67108864:
                e2 = 32;
                break;
              case 536870912:
                e2 = 268435456;
                break;
              default:
                e2 = 0;
            }
            e2 = 0 !== (e2 & (d.suspendedLanes | g)) ? 0 : e2;
            0 !== e2 && e2 !== f2.retryLane && (f2.retryLane = e2, ih(a, e2), gi(d, a, e2, -1));
          }
          tj();
          d = Ki(Error(p(421)));
          return sj(a, b2, g, d);
        }
        if ("$?" === e2.data) return b2.flags |= 128, b2.child = a.child, b2 = uj.bind(null, a), e2._reactRetry = b2, null;
        a = f2.treeContext;
        yg = Lf(e2.nextSibling);
        xg = b2;
        I2 = true;
        zg = null;
        null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b2);
        b2 = qj(b2, d.children);
        b2.flags |= 4096;
        return b2;
      }
      function vj(a, b2, c) {
        a.lanes |= b2;
        var d = a.alternate;
        null !== d && (d.lanes |= b2);
        bh(a.return, b2, c);
      }
      function wj(a, b2, c, d, e2) {
        var f2 = a.memoizedState;
        null === f2 ? a.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e2 } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c, f2.tailMode = e2);
      }
      function xj(a, b2, c) {
        var d = b2.pendingProps, e2 = d.revealOrder, f2 = d.tail;
        Xi(a, b2, d.children, c);
        d = L.current;
        if (0 !== (d & 2)) d = d & 1 | 2, b2.flags |= 128;
        else {
          if (null !== a && 0 !== (a.flags & 128)) a: for (a = b2.child; null !== a; ) {
            if (13 === a.tag) null !== a.memoizedState && vj(a, c, b2);
            else if (19 === a.tag) vj(a, c, b2);
            else if (null !== a.child) {
              a.child.return = a;
              a = a.child;
              continue;
            }
            if (a === b2) break a;
            for (; null === a.sibling; ) {
              if (null === a.return || a.return === b2) break a;
              a = a.return;
            }
            a.sibling.return = a.return;
            a = a.sibling;
          }
          d &= 1;
        }
        G3(L, d);
        if (0 === (b2.mode & 1)) b2.memoizedState = null;
        else switch (e2) {
          case "forwards":
            c = b2.child;
            for (e2 = null; null !== c; ) a = c.alternate, null !== a && null === Ch(a) && (e2 = c), c = c.sibling;
            c = e2;
            null === c ? (e2 = b2.child, b2.child = null) : (e2 = c.sibling, c.sibling = null);
            wj(b2, false, e2, c, f2);
            break;
          case "backwards":
            c = null;
            e2 = b2.child;
            for (b2.child = null; null !== e2; ) {
              a = e2.alternate;
              if (null !== a && null === Ch(a)) {
                b2.child = e2;
                break;
              }
              a = e2.sibling;
              e2.sibling = c;
              c = e2;
              e2 = a;
            }
            wj(b2, true, c, null, f2);
            break;
          case "together":
            wj(b2, false, null, null, void 0);
            break;
          default:
            b2.memoizedState = null;
        }
        return b2.child;
      }
      function ij(a, b2) {
        0 === (b2.mode & 1) && null !== a && (a.alternate = null, b2.alternate = null, b2.flags |= 2);
      }
      function Zi(a, b2, c) {
        null !== a && (b2.dependencies = a.dependencies);
        rh |= b2.lanes;
        if (0 === (c & b2.childLanes)) return null;
        if (null !== a && b2.child !== a.child) throw Error(p(153));
        if (null !== b2.child) {
          a = b2.child;
          c = Pg(a, a.pendingProps);
          b2.child = c;
          for (c.return = b2; null !== a.sibling; ) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b2;
          c.sibling = null;
        }
        return b2.child;
      }
      function yj(a, b2, c) {
        switch (b2.tag) {
          case 3:
            kj(b2);
            Ig();
            break;
          case 5:
            Ah(b2);
            break;
          case 1:
            Zf(b2.type) && cg(b2);
            break;
          case 4:
            yh(b2, b2.stateNode.containerInfo);
            break;
          case 10:
            var d = b2.type._context, e2 = b2.memoizedProps.value;
            G3(Wg, d._currentValue);
            d._currentValue = e2;
            break;
          case 13:
            d = b2.memoizedState;
            if (null !== d) {
              if (null !== d.dehydrated) return G3(L, L.current & 1), b2.flags |= 128, null;
              if (0 !== (c & b2.child.childLanes)) return oj(a, b2, c);
              G3(L, L.current & 1);
              a = Zi(a, b2, c);
              return null !== a ? a.sibling : null;
            }
            G3(L, L.current & 1);
            break;
          case 19:
            d = 0 !== (c & b2.childLanes);
            if (0 !== (a.flags & 128)) {
              if (d) return xj(a, b2, c);
              b2.flags |= 128;
            }
            e2 = b2.memoizedState;
            null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
            G3(L, L.current);
            if (d) break;
            else return null;
          case 22:
          case 23:
            return b2.lanes = 0, dj(a, b2, c);
        }
        return Zi(a, b2, c);
      }
      var zj;
      var Aj;
      var Bj;
      var Cj;
      zj = function(a, b2) {
        for (var c = b2.child; null !== c; ) {
          if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
          else if (4 !== c.tag && null !== c.child) {
            c.child.return = c;
            c = c.child;
            continue;
          }
          if (c === b2) break;
          for (; null === c.sibling; ) {
            if (null === c.return || c.return === b2) return;
            c = c.return;
          }
          c.sibling.return = c.return;
          c = c.sibling;
        }
      };
      Aj = function() {
      };
      Bj = function(a, b2, c, d) {
        var e2 = a.memoizedProps;
        if (e2 !== d) {
          a = b2.stateNode;
          xh(uh.current);
          var f2 = null;
          switch (c) {
            case "input":
              e2 = Ya2(a, e2);
              d = Ya2(a, d);
              f2 = [];
              break;
            case "select":
              e2 = A2({}, e2, { value: void 0 });
              d = A2({}, d, { value: void 0 });
              f2 = [];
              break;
            case "textarea":
              e2 = gb(a, e2);
              d = gb(a, d);
              f2 = [];
              break;
            default:
              "function" !== typeof e2.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
          }
          ub(c, d);
          var g;
          c = null;
          for (l2 in e2) if (!d.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && null != e2[l2]) if ("style" === l2) {
            var h2 = e2[l2];
            for (g in h2) h2.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
          } else "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea2.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
          for (l2 in d) {
            var k3 = d[l2];
            h2 = null != e2 ? e2[l2] : void 0;
            if (d.hasOwnProperty(l2) && k3 !== h2 && (null != k3 || null != h2)) if ("style" === l2) if (h2) {
              for (g in h2) !h2.hasOwnProperty(g) || k3 && k3.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
              for (g in k3) k3.hasOwnProperty(g) && h2[g] !== k3[g] && (c || (c = {}), c[g] = k3[g]);
            } else c || (f2 || (f2 = []), f2.push(
              l2,
              c
            )), c = k3;
            else "dangerouslySetInnerHTML" === l2 ? (k3 = k3 ? k3.__html : void 0, h2 = h2 ? h2.__html : void 0, null != k3 && h2 !== k3 && (f2 = f2 || []).push(l2, k3)) : "children" === l2 ? "string" !== typeof k3 && "number" !== typeof k3 || (f2 = f2 || []).push(l2, "" + k3) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea2.hasOwnProperty(l2) ? (null != k3 && "onScroll" === l2 && D2("scroll", a), f2 || h2 === k3 || (f2 = [])) : (f2 = f2 || []).push(l2, k3));
          }
          c && (f2 = f2 || []).push("style", c);
          var l2 = f2;
          if (b2.updateQueue = l2) b2.flags |= 4;
        }
      };
      Cj = function(a, b2, c, d) {
        c !== d && (b2.flags |= 4);
      };
      function Dj(a, b2) {
        if (!I2) switch (a.tailMode) {
          case "hidden":
            b2 = a.tail;
            for (var c = null; null !== b2; ) null !== b2.alternate && (c = b2), b2 = b2.sibling;
            null === c ? a.tail = null : c.sibling = null;
            break;
          case "collapsed":
            c = a.tail;
            for (var d = null; null !== c; ) null !== c.alternate && (d = c), c = c.sibling;
            null === d ? b2 || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
        }
      }
      function S3(a) {
        var b2 = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
        if (b2) for (var e2 = a.child; null !== e2; ) c |= e2.lanes | e2.childLanes, d |= e2.subtreeFlags & 14680064, d |= e2.flags & 14680064, e2.return = a, e2 = e2.sibling;
        else for (e2 = a.child; null !== e2; ) c |= e2.lanes | e2.childLanes, d |= e2.subtreeFlags, d |= e2.flags, e2.return = a, e2 = e2.sibling;
        a.subtreeFlags |= d;
        a.childLanes = c;
        return b2;
      }
      function Ej(a, b2, c) {
        var d = b2.pendingProps;
        wg(b2);
        switch (b2.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return S3(b2), null;
          case 1:
            return Zf(b2.type) && $f(), S3(b2), null;
          case 3:
            d = b2.stateNode;
            zh();
            E3(Wf);
            E3(H2);
            Eh();
            d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
            if (null === a || null === a.child) Gg(b2) ? b2.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b2.flags & 256) || (b2.flags |= 1024, null !== zg && (Fj(zg), zg = null));
            Aj(a, b2);
            S3(b2);
            return null;
          case 5:
            Bh(b2);
            var e2 = xh(wh.current);
            c = b2.type;
            if (null !== a && null != b2.stateNode) Bj(a, b2, c, d, e2), a.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
            else {
              if (!d) {
                if (null === b2.stateNode) throw Error(p(166));
                S3(b2);
                return null;
              }
              a = xh(uh.current);
              if (Gg(b2)) {
                d = b2.stateNode;
                c = b2.type;
                var f2 = b2.memoizedProps;
                d[Of] = b2;
                d[Pf] = f2;
                a = 0 !== (b2.mode & 1);
                switch (c) {
                  case "dialog":
                    D2("cancel", d);
                    D2("close", d);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    D2("load", d);
                    break;
                  case "video":
                  case "audio":
                    for (e2 = 0; e2 < lf.length; e2++) D2(lf[e2], d);
                    break;
                  case "source":
                    D2("error", d);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    D2(
                      "error",
                      d
                    );
                    D2("load", d);
                    break;
                  case "details":
                    D2("toggle", d);
                    break;
                  case "input":
                    Za2(d, f2);
                    D2("invalid", d);
                    break;
                  case "select":
                    d._wrapperState = { wasMultiple: !!f2.multiple };
                    D2("invalid", d);
                    break;
                  case "textarea":
                    hb(d, f2), D2("invalid", d);
                }
                ub(c, f2);
                e2 = null;
                for (var g in f2) if (f2.hasOwnProperty(g)) {
                  var h2 = f2[g];
                  "children" === g ? "string" === typeof h2 ? d.textContent !== h2 && (true !== f2.suppressHydrationWarning && Af(d.textContent, h2, a), e2 = ["children", h2]) : "number" === typeof h2 && d.textContent !== "" + h2 && (true !== f2.suppressHydrationWarning && Af(
                    d.textContent,
                    h2,
                    a
                  ), e2 = ["children", "" + h2]) : ea2.hasOwnProperty(g) && null != h2 && "onScroll" === g && D2("scroll", d);
                }
                switch (c) {
                  case "input":
                    Va(d);
                    db(d, f2, true);
                    break;
                  case "textarea":
                    Va(d);
                    jb(d);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    "function" === typeof f2.onClick && (d.onclick = Bf);
                }
                d = e2;
                b2.updateQueue = d;
                null !== d && (b2.flags |= 4);
              } else {
                g = 9 === e2.nodeType ? e2 : e2.ownerDocument;
                "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
                "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
                a[Of] = b2;
                a[Pf] = d;
                zj(a, b2, false, false);
                b2.stateNode = a;
                a: {
                  g = vb(c, d);
                  switch (c) {
                    case "dialog":
                      D2("cancel", a);
                      D2("close", a);
                      e2 = d;
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      D2("load", a);
                      e2 = d;
                      break;
                    case "video":
                    case "audio":
                      for (e2 = 0; e2 < lf.length; e2++) D2(lf[e2], a);
                      e2 = d;
                      break;
                    case "source":
                      D2("error", a);
                      e2 = d;
                      break;
                    case "img":
                    case "image":
                    case "link":
                      D2(
                        "error",
                        a
                      );
                      D2("load", a);
                      e2 = d;
                      break;
                    case "details":
                      D2("toggle", a);
                      e2 = d;
                      break;
                    case "input":
                      Za2(a, d);
                      e2 = Ya2(a, d);
                      D2("invalid", a);
                      break;
                    case "option":
                      e2 = d;
                      break;
                    case "select":
                      a._wrapperState = { wasMultiple: !!d.multiple };
                      e2 = A2({}, d, { value: void 0 });
                      D2("invalid", a);
                      break;
                    case "textarea":
                      hb(a, d);
                      e2 = gb(a, d);
                      D2("invalid", a);
                      break;
                    default:
                      e2 = d;
                  }
                  ub(c, e2);
                  h2 = e2;
                  for (f2 in h2) if (h2.hasOwnProperty(f2)) {
                    var k3 = h2[f2];
                    "style" === f2 ? sb(a, k3) : "dangerouslySetInnerHTML" === f2 ? (k3 = k3 ? k3.__html : void 0, null != k3 && nb(a, k3)) : "children" === f2 ? "string" === typeof k3 ? ("textarea" !== c || "" !== k3) && ob(a, k3) : "number" === typeof k3 && ob(a, "" + k3) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea2.hasOwnProperty(f2) ? null != k3 && "onScroll" === f2 && D2("scroll", a) : null != k3 && ta(a, f2, k3, g));
                  }
                  switch (c) {
                    case "input":
                      Va(a);
                      db(a, d, false);
                      break;
                    case "textarea":
                      Va(a);
                      jb(a);
                      break;
                    case "option":
                      null != d.value && a.setAttribute("value", "" + Sa2(d.value));
                      break;
                    case "select":
                      a.multiple = !!d.multiple;
                      f2 = d.value;
                      null != f2 ? fb(a, !!d.multiple, f2, false) : null != d.defaultValue && fb(
                        a,
                        !!d.multiple,
                        d.defaultValue,
                        true
                      );
                      break;
                    default:
                      "function" === typeof e2.onClick && (a.onclick = Bf);
                  }
                  switch (c) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      d = !!d.autoFocus;
                      break a;
                    case "img":
                      d = true;
                      break a;
                    default:
                      d = false;
                  }
                }
                d && (b2.flags |= 4);
              }
              null !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
            }
            S3(b2);
            return null;
          case 6:
            if (a && null != b2.stateNode) Cj(a, b2, a.memoizedProps, d);
            else {
              if ("string" !== typeof d && null === b2.stateNode) throw Error(p(166));
              c = xh(wh.current);
              xh(uh.current);
              if (Gg(b2)) {
                d = b2.stateNode;
                c = b2.memoizedProps;
                d[Of] = b2;
                if (f2 = d.nodeValue !== c) {
                  if (a = xg, null !== a) switch (a.tag) {
                    case 3:
                      Af(d.nodeValue, c, 0 !== (a.mode & 1));
                      break;
                    case 5:
                      true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
                  }
                }
                f2 && (b2.flags |= 4);
              } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b2, b2.stateNode = d;
            }
            S3(b2);
            return null;
          case 13:
            E3(L);
            d = b2.memoizedState;
            if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
              if (I2 && null !== yg && 0 !== (b2.mode & 1) && 0 === (b2.flags & 128)) Hg(), Ig(), b2.flags |= 98560, f2 = false;
              else if (f2 = Gg(b2), null !== d && null !== d.dehydrated) {
                if (null === a) {
                  if (!f2) throw Error(p(318));
                  f2 = b2.memoizedState;
                  f2 = null !== f2 ? f2.dehydrated : null;
                  if (!f2) throw Error(p(317));
                  f2[Of] = b2;
                } else Ig(), 0 === (b2.flags & 128) && (b2.memoizedState = null), b2.flags |= 4;
                S3(b2);
                f2 = false;
              } else null !== zg && (Fj(zg), zg = null), f2 = true;
              if (!f2) return b2.flags & 65536 ? b2 : null;
            }
            if (0 !== (b2.flags & 128)) return b2.lanes = c, b2;
            d = null !== d;
            d !== (null !== a && null !== a.memoizedState) && d && (b2.child.flags |= 8192, 0 !== (b2.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T3 && (T3 = 3) : tj()));
            null !== b2.updateQueue && (b2.flags |= 4);
            S3(b2);
            return null;
          case 4:
            return zh(), Aj(a, b2), null === a && sf(b2.stateNode.containerInfo), S3(b2), null;
          case 10:
            return ah(b2.type._context), S3(b2), null;
          case 17:
            return Zf(b2.type) && $f(), S3(b2), null;
          case 19:
            E3(L);
            f2 = b2.memoizedState;
            if (null === f2) return S3(b2), null;
            d = 0 !== (b2.flags & 128);
            g = f2.rendering;
            if (null === g) if (d) Dj(f2, false);
            else {
              if (0 !== T3 || null !== a && 0 !== (a.flags & 128)) for (a = b2.child; null !== a; ) {
                g = Ch(a);
                if (null !== g) {
                  b2.flags |= 128;
                  Dj(f2, false);
                  d = g.updateQueue;
                  null !== d && (b2.updateQueue = d, b2.flags |= 4);
                  b2.subtreeFlags = 0;
                  d = c;
                  for (c = b2.child; null !== c; ) f2 = c, a = d, f2.flags &= 14680066, g = f2.alternate, null === g ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g.childLanes, f2.lanes = g.lanes, f2.child = g.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g.memoizedProps, f2.memoizedState = g.memoizedState, f2.updateQueue = g.updateQueue, f2.type = g.type, a = g.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                  G3(L, L.current & 1 | 2);
                  return b2.child;
                }
                a = a.sibling;
              }
              null !== f2.tail && B3() > Gj && (b2.flags |= 128, d = true, Dj(f2, false), b2.lanes = 4194304);
            }
            else {
              if (!d) if (a = Ch(g), null !== a) {
                if (b2.flags |= 128, d = true, c = a.updateQueue, null !== c && (b2.updateQueue = c, b2.flags |= 4), Dj(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g.alternate && !I2) return S3(b2), null;
              } else 2 * B3() - f2.renderingStartTime > Gj && 1073741824 !== c && (b2.flags |= 128, d = true, Dj(f2, false), b2.lanes = 4194304);
              f2.isBackwards ? (g.sibling = b2.child, b2.child = g) : (c = f2.last, null !== c ? c.sibling = g : b2.child = g, f2.last = g);
            }
            if (null !== f2.tail) return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B3(), b2.sibling = null, c = L.current, G3(L, d ? c & 1 | 2 : c & 1), b2;
            S3(b2);
            return null;
          case 22:
          case 23:
            return Hj(), d = null !== b2.memoizedState, null !== a && null !== a.memoizedState !== d && (b2.flags |= 8192), d && 0 !== (b2.mode & 1) ? 0 !== (fj & 1073741824) && (S3(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : S3(b2), null;
          case 24:
            return null;
          case 25:
            return null;
        }
        throw Error(p(156, b2.tag));
      }
      function Ij(a, b2) {
        wg(b2);
        switch (b2.tag) {
          case 1:
            return Zf(b2.type) && $f(), a = b2.flags, a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
          case 3:
            return zh(), E3(Wf), E3(H2), Eh(), a = b2.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b2.flags = a & -65537 | 128, b2) : null;
          case 5:
            return Bh(b2), null;
          case 13:
            E3(L);
            a = b2.memoizedState;
            if (null !== a && null !== a.dehydrated) {
              if (null === b2.alternate) throw Error(p(340));
              Ig();
            }
            a = b2.flags;
            return a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
          case 19:
            return E3(L), null;
          case 4:
            return zh(), null;
          case 10:
            return ah(b2.type._context), null;
          case 22:
          case 23:
            return Hj(), null;
          case 24:
            return null;
          default:
            return null;
        }
      }
      var Jj = false;
      var U3 = false;
      var Kj = "function" === typeof WeakSet ? WeakSet : Set;
      var V = null;
      function Lj(a, b2) {
        var c = a.ref;
        if (null !== c) if ("function" === typeof c) try {
          c(null);
        } catch (d) {
          W2(a, b2, d);
        }
        else c.current = null;
      }
      function Mj(a, b2, c) {
        try {
          c();
        } catch (d) {
          W2(a, b2, d);
        }
      }
      var Nj = false;
      function Oj(a, b2) {
        Cf = dd;
        a = Me3();
        if (Ne3(a)) {
          if ("selectionStart" in a) var c = { start: a.selectionStart, end: a.selectionEnd };
          else a: {
            c = (c = a.ownerDocument) && c.defaultView || window;
            var d = c.getSelection && c.getSelection();
            if (d && 0 !== d.rangeCount) {
              c = d.anchorNode;
              var e2 = d.anchorOffset, f2 = d.focusNode;
              d = d.focusOffset;
              try {
                c.nodeType, f2.nodeType;
              } catch (F4) {
                c = null;
                break a;
              }
              var g = 0, h2 = -1, k3 = -1, l2 = 0, m = 0, q = a, r = null;
              b: for (; ; ) {
                for (var y3; ; ) {
                  q !== c || 0 !== e2 && 3 !== q.nodeType || (h2 = g + e2);
                  q !== f2 || 0 !== d && 3 !== q.nodeType || (k3 = g + d);
                  3 === q.nodeType && (g += q.nodeValue.length);
                  if (null === (y3 = q.firstChild)) break;
                  r = q;
                  q = y3;
                }
                for (; ; ) {
                  if (q === a) break b;
                  r === c && ++l2 === e2 && (h2 = g);
                  r === f2 && ++m === d && (k3 = g);
                  if (null !== (y3 = q.nextSibling)) break;
                  q = r;
                  r = q.parentNode;
                }
                q = y3;
              }
              c = -1 === h2 || -1 === k3 ? null : { start: h2, end: k3 };
            } else c = null;
          }
          c = c || { start: 0, end: 0 };
        } else c = null;
        Df = { focusedElem: a, selectionRange: c };
        dd = false;
        for (V = b2; null !== V; ) if (b2 = V, a = b2.child, 0 !== (b2.subtreeFlags & 1028) && null !== a) a.return = b2, V = a;
        else for (; null !== V; ) {
          b2 = V;
          try {
            var n2 = b2.alternate;
            if (0 !== (b2.flags & 1024)) switch (b2.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== n2) {
                  var t = n2.memoizedProps, J2 = n2.memoizedState, x2 = b2.stateNode, w2 = x2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? t : Ci(b2.type, t), J2);
                  x2.__reactInternalSnapshotBeforeUpdate = w2;
                }
                break;
              case 3:
                var u = b2.stateNode.containerInfo;
                1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p(163));
            }
          } catch (F4) {
            W2(b2, b2.return, F4);
          }
          a = b2.sibling;
          if (null !== a) {
            a.return = b2.return;
            V = a;
            break;
          }
          V = b2.return;
        }
        n2 = Nj;
        Nj = false;
        return n2;
      }
      function Pj(a, b2, c) {
        var d = b2.updateQueue;
        d = null !== d ? d.lastEffect : null;
        if (null !== d) {
          var e2 = d = d.next;
          do {
            if ((e2.tag & a) === a) {
              var f2 = e2.destroy;
              e2.destroy = void 0;
              void 0 !== f2 && Mj(b2, c, f2);
            }
            e2 = e2.next;
          } while (e2 !== d);
        }
      }
      function Qj(a, b2) {
        b2 = b2.updateQueue;
        b2 = null !== b2 ? b2.lastEffect : null;
        if (null !== b2) {
          var c = b2 = b2.next;
          do {
            if ((c.tag & a) === a) {
              var d = c.create;
              c.destroy = d();
            }
            c = c.next;
          } while (c !== b2);
        }
      }
      function Rj(a) {
        var b2 = a.ref;
        if (null !== b2) {
          var c = a.stateNode;
          switch (a.tag) {
            case 5:
              a = c;
              break;
            default:
              a = c;
          }
          "function" === typeof b2 ? b2(a) : b2.current = a;
        }
      }
      function Sj(a) {
        var b2 = a.alternate;
        null !== b2 && (a.alternate = null, Sj(b2));
        a.child = null;
        a.deletions = null;
        a.sibling = null;
        5 === a.tag && (b2 = a.stateNode, null !== b2 && (delete b2[Of], delete b2[Pf], delete b2[of], delete b2[Qf], delete b2[Rf]));
        a.stateNode = null;
        a.return = null;
        a.dependencies = null;
        a.memoizedProps = null;
        a.memoizedState = null;
        a.pendingProps = null;
        a.stateNode = null;
        a.updateQueue = null;
      }
      function Tj(a) {
        return 5 === a.tag || 3 === a.tag || 4 === a.tag;
      }
      function Uj(a) {
        a: for (; ; ) {
          for (; null === a.sibling; ) {
            if (null === a.return || Tj(a.return)) return null;
            a = a.return;
          }
          a.sibling.return = a.return;
          for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
            if (a.flags & 2) continue a;
            if (null === a.child || 4 === a.tag) continue a;
            else a.child.return = a, a = a.child;
          }
          if (!(a.flags & 2)) return a.stateNode;
        }
      }
      function Vj(a, b2, c) {
        var d = a.tag;
        if (5 === d || 6 === d) a = a.stateNode, b2 ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b2) : c.insertBefore(a, b2) : (8 === c.nodeType ? (b2 = c.parentNode, b2.insertBefore(a, c)) : (b2 = c, b2.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b2.onclick || (b2.onclick = Bf));
        else if (4 !== d && (a = a.child, null !== a)) for (Vj(a, b2, c), a = a.sibling; null !== a; ) Vj(a, b2, c), a = a.sibling;
      }
      function Wj(a, b2, c) {
        var d = a.tag;
        if (5 === d || 6 === d) a = a.stateNode, b2 ? c.insertBefore(a, b2) : c.appendChild(a);
        else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b2, c), a = a.sibling; null !== a; ) Wj(a, b2, c), a = a.sibling;
      }
      var X2 = null;
      var Xj = false;
      function Yj(a, b2, c) {
        for (c = c.child; null !== c; ) Zj(a, b2, c), c = c.sibling;
      }
      function Zj(a, b2, c) {
        if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
          lc.onCommitFiberUnmount(kc, c);
        } catch (h2) {
        }
        switch (c.tag) {
          case 5:
            U3 || Lj(c, b2);
          case 6:
            var d = X2, e2 = Xj;
            X2 = null;
            Yj(a, b2, c);
            X2 = d;
            Xj = e2;
            null !== X2 && (Xj ? (a = X2, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X2.removeChild(c.stateNode));
            break;
          case 18:
            null !== X2 && (Xj ? (a = X2, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X2, c.stateNode));
            break;
          case 4:
            d = X2;
            e2 = Xj;
            X2 = c.stateNode.containerInfo;
            Xj = true;
            Yj(a, b2, c);
            X2 = d;
            Xj = e2;
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            if (!U3 && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
              e2 = d = d.next;
              do {
                var f2 = e2, g = f2.destroy;
                f2 = f2.tag;
                void 0 !== g && (0 !== (f2 & 2) ? Mj(c, b2, g) : 0 !== (f2 & 4) && Mj(c, b2, g));
                e2 = e2.next;
              } while (e2 !== d);
            }
            Yj(a, b2, c);
            break;
          case 1:
            if (!U3 && (Lj(c, b2), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
              d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
            } catch (h2) {
              W2(c, b2, h2);
            }
            Yj(a, b2, c);
            break;
          case 21:
            Yj(a, b2, c);
            break;
          case 22:
            c.mode & 1 ? (U3 = (d = U3) || null !== c.memoizedState, Yj(a, b2, c), U3 = d) : Yj(a, b2, c);
            break;
          default:
            Yj(a, b2, c);
        }
      }
      function ak(a) {
        var b2 = a.updateQueue;
        if (null !== b2) {
          a.updateQueue = null;
          var c = a.stateNode;
          null === c && (c = a.stateNode = new Kj());
          b2.forEach(function(b3) {
            var d = bk.bind(null, a, b3);
            c.has(b3) || (c.add(b3), b3.then(d, d));
          });
        }
      }
      function ck(a, b2) {
        var c = b2.deletions;
        if (null !== c) for (var d = 0; d < c.length; d++) {
          var e2 = c[d];
          try {
            var f2 = a, g = b2, h2 = g;
            a: for (; null !== h2; ) {
              switch (h2.tag) {
                case 5:
                  X2 = h2.stateNode;
                  Xj = false;
                  break a;
                case 3:
                  X2 = h2.stateNode.containerInfo;
                  Xj = true;
                  break a;
                case 4:
                  X2 = h2.stateNode.containerInfo;
                  Xj = true;
                  break a;
              }
              h2 = h2.return;
            }
            if (null === X2) throw Error(p(160));
            Zj(f2, g, e2);
            X2 = null;
            Xj = false;
            var k3 = e2.alternate;
            null !== k3 && (k3.return = null);
            e2.return = null;
          } catch (l2) {
            W2(e2, b2, l2);
          }
        }
        if (b2.subtreeFlags & 12854) for (b2 = b2.child; null !== b2; ) dk(b2, a), b2 = b2.sibling;
      }
      function dk(a, b2) {
        var c = a.alternate, d = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            ck(b2, a);
            ek(a);
            if (d & 4) {
              try {
                Pj(3, a, a.return), Qj(3, a);
              } catch (t) {
                W2(a, a.return, t);
              }
              try {
                Pj(5, a, a.return);
              } catch (t) {
                W2(a, a.return, t);
              }
            }
            break;
          case 1:
            ck(b2, a);
            ek(a);
            d & 512 && null !== c && Lj(c, c.return);
            break;
          case 5:
            ck(b2, a);
            ek(a);
            d & 512 && null !== c && Lj(c, c.return);
            if (a.flags & 32) {
              var e2 = a.stateNode;
              try {
                ob(e2, "");
              } catch (t) {
                W2(a, a.return, t);
              }
            }
            if (d & 4 && (e2 = a.stateNode, null != e2)) {
              var f2 = a.memoizedProps, g = null !== c ? c.memoizedProps : f2, h2 = a.type, k3 = a.updateQueue;
              a.updateQueue = null;
              if (null !== k3) try {
                "input" === h2 && "radio" === f2.type && null != f2.name && ab(e2, f2);
                vb(h2, g);
                var l2 = vb(h2, f2);
                for (g = 0; g < k3.length; g += 2) {
                  var m = k3[g], q = k3[g + 1];
                  "style" === m ? sb(e2, q) : "dangerouslySetInnerHTML" === m ? nb(e2, q) : "children" === m ? ob(e2, q) : ta(e2, m, q, l2);
                }
                switch (h2) {
                  case "input":
                    bb(e2, f2);
                    break;
                  case "textarea":
                    ib(e2, f2);
                    break;
                  case "select":
                    var r = e2._wrapperState.wasMultiple;
                    e2._wrapperState.wasMultiple = !!f2.multiple;
                    var y3 = f2.value;
                    null != y3 ? fb(e2, !!f2.multiple, y3, false) : r !== !!f2.multiple && (null != f2.defaultValue ? fb(
                      e2,
                      !!f2.multiple,
                      f2.defaultValue,
                      true
                    ) : fb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
                }
                e2[Pf] = f2;
              } catch (t) {
                W2(a, a.return, t);
              }
            }
            break;
          case 6:
            ck(b2, a);
            ek(a);
            if (d & 4) {
              if (null === a.stateNode) throw Error(p(162));
              e2 = a.stateNode;
              f2 = a.memoizedProps;
              try {
                e2.nodeValue = f2;
              } catch (t) {
                W2(a, a.return, t);
              }
            }
            break;
          case 3:
            ck(b2, a);
            ek(a);
            if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
              bd(b2.containerInfo);
            } catch (t) {
              W2(a, a.return, t);
            }
            break;
          case 4:
            ck(b2, a);
            ek(a);
            break;
          case 13:
            ck(b2, a);
            ek(a);
            e2 = a.child;
            e2.flags & 8192 && (f2 = null !== e2.memoizedState, e2.stateNode.isHidden = f2, !f2 || null !== e2.alternate && null !== e2.alternate.memoizedState || (fk = B3()));
            d & 4 && ak(a);
            break;
          case 22:
            m = null !== c && null !== c.memoizedState;
            a.mode & 1 ? (U3 = (l2 = U3) || m, ck(b2, a), U3 = l2) : ck(b2, a);
            ek(a);
            if (d & 8192) {
              l2 = null !== a.memoizedState;
              if ((a.stateNode.isHidden = l2) && !m && 0 !== (a.mode & 1)) for (V = a, m = a.child; null !== m; ) {
                for (q = V = m; null !== V; ) {
                  r = V;
                  y3 = r.child;
                  switch (r.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      Pj(4, r, r.return);
                      break;
                    case 1:
                      Lj(r, r.return);
                      var n2 = r.stateNode;
                      if ("function" === typeof n2.componentWillUnmount) {
                        d = r;
                        c = r.return;
                        try {
                          b2 = d, n2.props = b2.memoizedProps, n2.state = b2.memoizedState, n2.componentWillUnmount();
                        } catch (t) {
                          W2(d, c, t);
                        }
                      }
                      break;
                    case 5:
                      Lj(r, r.return);
                      break;
                    case 22:
                      if (null !== r.memoizedState) {
                        gk(q);
                        continue;
                      }
                  }
                  null !== y3 ? (y3.return = r, V = y3) : gk(q);
                }
                m = m.sibling;
              }
              a: for (m = null, q = a; ; ) {
                if (5 === q.tag) {
                  if (null === m) {
                    m = q;
                    try {
                      e2 = q.stateNode, l2 ? (f2 = e2.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q.stateNode, k3 = q.memoizedProps.style, g = void 0 !== k3 && null !== k3 && k3.hasOwnProperty("display") ? k3.display : null, h2.style.display = rb("display", g));
                    } catch (t) {
                      W2(a, a.return, t);
                    }
                  }
                } else if (6 === q.tag) {
                  if (null === m) try {
                    q.stateNode.nodeValue = l2 ? "" : q.memoizedProps;
                  } catch (t) {
                    W2(a, a.return, t);
                  }
                } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
                  q.child.return = q;
                  q = q.child;
                  continue;
                }
                if (q === a) break a;
                for (; null === q.sibling; ) {
                  if (null === q.return || q.return === a) break a;
                  m === q && (m = null);
                  q = q.return;
                }
                m === q && (m = null);
                q.sibling.return = q.return;
                q = q.sibling;
              }
            }
            break;
          case 19:
            ck(b2, a);
            ek(a);
            d & 4 && ak(a);
            break;
          case 21:
            break;
          default:
            ck(
              b2,
              a
            ), ek(a);
        }
      }
      function ek(a) {
        var b2 = a.flags;
        if (b2 & 2) {
          try {
            a: {
              for (var c = a.return; null !== c; ) {
                if (Tj(c)) {
                  var d = c;
                  break a;
                }
                c = c.return;
              }
              throw Error(p(160));
            }
            switch (d.tag) {
              case 5:
                var e2 = d.stateNode;
                d.flags & 32 && (ob(e2, ""), d.flags &= -33);
                var f2 = Uj(a);
                Wj(a, f2, e2);
                break;
              case 3:
              case 4:
                var g = d.stateNode.containerInfo, h2 = Uj(a);
                Vj(a, h2, g);
                break;
              default:
                throw Error(p(161));
            }
          } catch (k3) {
            W2(a, a.return, k3);
          }
          a.flags &= -3;
        }
        b2 & 4096 && (a.flags &= -4097);
      }
      function hk(a, b2, c) {
        V = a;
        ik(a, b2, c);
      }
      function ik(a, b2, c) {
        for (var d = 0 !== (a.mode & 1); null !== V; ) {
          var e2 = V, f2 = e2.child;
          if (22 === e2.tag && d) {
            var g = null !== e2.memoizedState || Jj;
            if (!g) {
              var h2 = e2.alternate, k3 = null !== h2 && null !== h2.memoizedState || U3;
              h2 = Jj;
              var l2 = U3;
              Jj = g;
              if ((U3 = k3) && !l2) for (V = e2; null !== V; ) g = V, k3 = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e2) : null !== k3 ? (k3.return = g, V = k3) : jk(e2);
              for (; null !== f2; ) V = f2, ik(f2, b2, c), f2 = f2.sibling;
              V = e2;
              Jj = h2;
              U3 = l2;
            }
            kk(a, b2, c);
          } else 0 !== (e2.subtreeFlags & 8772) && null !== f2 ? (f2.return = e2, V = f2) : kk(a, b2, c);
        }
      }
      function kk(a) {
        for (; null !== V; ) {
          var b2 = V;
          if (0 !== (b2.flags & 8772)) {
            var c = b2.alternate;
            try {
              if (0 !== (b2.flags & 8772)) switch (b2.tag) {
                case 0:
                case 11:
                case 15:
                  U3 || Qj(5, b2);
                  break;
                case 1:
                  var d = b2.stateNode;
                  if (b2.flags & 4 && !U3) if (null === c) d.componentDidMount();
                  else {
                    var e2 = b2.elementType === b2.type ? c.memoizedProps : Ci(b2.type, c.memoizedProps);
                    d.componentDidUpdate(e2, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                  }
                  var f2 = b2.updateQueue;
                  null !== f2 && sh(b2, f2, d);
                  break;
                case 3:
                  var g = b2.updateQueue;
                  if (null !== g) {
                    c = null;
                    if (null !== b2.child) switch (b2.child.tag) {
                      case 5:
                        c = b2.child.stateNode;
                        break;
                      case 1:
                        c = b2.child.stateNode;
                    }
                    sh(b2, g, c);
                  }
                  break;
                case 5:
                  var h2 = b2.stateNode;
                  if (null === c && b2.flags & 4) {
                    c = h2;
                    var k3 = b2.memoizedProps;
                    switch (b2.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        k3.autoFocus && c.focus();
                        break;
                      case "img":
                        k3.src && (c.src = k3.src);
                    }
                  }
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (null === b2.memoizedState) {
                    var l2 = b2.alternate;
                    if (null !== l2) {
                      var m = l2.memoizedState;
                      if (null !== m) {
                        var q = m.dehydrated;
                        null !== q && bd(q);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                default:
                  throw Error(p(163));
              }
              U3 || b2.flags & 512 && Rj(b2);
            } catch (r) {
              W2(b2, b2.return, r);
            }
          }
          if (b2 === a) {
            V = null;
            break;
          }
          c = b2.sibling;
          if (null !== c) {
            c.return = b2.return;
            V = c;
            break;
          }
          V = b2.return;
        }
      }
      function gk(a) {
        for (; null !== V; ) {
          var b2 = V;
          if (b2 === a) {
            V = null;
            break;
          }
          var c = b2.sibling;
          if (null !== c) {
            c.return = b2.return;
            V = c;
            break;
          }
          V = b2.return;
        }
      }
      function jk(a) {
        for (; null !== V; ) {
          var b2 = V;
          try {
            switch (b2.tag) {
              case 0:
              case 11:
              case 15:
                var c = b2.return;
                try {
                  Qj(4, b2);
                } catch (k3) {
                  W2(b2, c, k3);
                }
                break;
              case 1:
                var d = b2.stateNode;
                if ("function" === typeof d.componentDidMount) {
                  var e2 = b2.return;
                  try {
                    d.componentDidMount();
                  } catch (k3) {
                    W2(b2, e2, k3);
                  }
                }
                var f2 = b2.return;
                try {
                  Rj(b2);
                } catch (k3) {
                  W2(b2, f2, k3);
                }
                break;
              case 5:
                var g = b2.return;
                try {
                  Rj(b2);
                } catch (k3) {
                  W2(b2, g, k3);
                }
            }
          } catch (k3) {
            W2(b2, b2.return, k3);
          }
          if (b2 === a) {
            V = null;
            break;
          }
          var h2 = b2.sibling;
          if (null !== h2) {
            h2.return = b2.return;
            V = h2;
            break;
          }
          V = b2.return;
        }
      }
      var lk = Math.ceil;
      var mk = ua2.ReactCurrentDispatcher;
      var nk = ua2.ReactCurrentOwner;
      var ok = ua2.ReactCurrentBatchConfig;
      var K2 = 0;
      var Q = null;
      var Y2 = null;
      var Z = 0;
      var fj = 0;
      var ej = Uf(0);
      var T3 = 0;
      var pk = null;
      var rh = 0;
      var qk = 0;
      var rk = 0;
      var sk = null;
      var tk = null;
      var fk = 0;
      var Gj = Infinity;
      var uk = null;
      var Oi = false;
      var Pi = null;
      var Ri = null;
      var vk = false;
      var wk = null;
      var xk = 0;
      var yk = 0;
      var zk = null;
      var Ak = -1;
      var Bk = 0;
      function R2() {
        return 0 !== (K2 & 6) ? B3() : -1 !== Ak ? Ak : Ak = B3();
      }
      function yi(a) {
        if (0 === (a.mode & 1)) return 1;
        if (0 !== (K2 & 2) && 0 !== Z) return Z & -Z;
        if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
        a = C;
        if (0 !== a) return a;
        a = window.event;
        a = void 0 === a ? 16 : jd(a.type);
        return a;
      }
      function gi(a, b2, c, d) {
        if (50 < yk) throw yk = 0, zk = null, Error(p(185));
        Ac(a, c, d);
        if (0 === (K2 & 2) || a !== Q) a === Q && (0 === (K2 & 2) && (qk |= c), 4 === T3 && Ck(a, Z)), Dk(a, d), 1 === c && 0 === K2 && 0 === (b2.mode & 1) && (Gj = B3() + 500, fg && jg());
      }
      function Dk(a, b2) {
        var c = a.callbackNode;
        wc(a, b2);
        var d = uc(a, a === Q ? Z : 0);
        if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
        else if (b2 = d & -d, a.callbackPriority !== b2) {
          null != c && bc(c);
          if (1 === b2) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
            0 === (K2 & 6) && jg();
          }), c = null;
          else {
            switch (Dc(d)) {
              case 1:
                c = fc;
                break;
              case 4:
                c = gc;
                break;
              case 16:
                c = hc;
                break;
              case 536870912:
                c = jc;
                break;
              default:
                c = hc;
            }
            c = Fk(c, Gk.bind(null, a));
          }
          a.callbackPriority = b2;
          a.callbackNode = c;
        }
      }
      function Gk(a, b2) {
        Ak = -1;
        Bk = 0;
        if (0 !== (K2 & 6)) throw Error(p(327));
        var c = a.callbackNode;
        if (Hk() && a.callbackNode !== c) return null;
        var d = uc(a, a === Q ? Z : 0);
        if (0 === d) return null;
        if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b2) b2 = Ik(a, d);
        else {
          b2 = d;
          var e2 = K2;
          K2 |= 2;
          var f2 = Jk();
          if (Q !== a || Z !== b2) uk = null, Gj = B3() + 500, Kk(a, b2);
          do
            try {
              Lk();
              break;
            } catch (h2) {
              Mk(a, h2);
            }
          while (1);
          $g();
          mk.current = f2;
          K2 = e2;
          null !== Y2 ? b2 = 0 : (Q = null, Z = 0, b2 = T3);
        }
        if (0 !== b2) {
          2 === b2 && (e2 = xc(a), 0 !== e2 && (d = e2, b2 = Nk(a, e2)));
          if (1 === b2) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B3()), c;
          if (6 === b2) Ck(a, d);
          else {
            e2 = a.current.alternate;
            if (0 === (d & 30) && !Ok(e2) && (b2 = Ik(a, d), 2 === b2 && (f2 = xc(a), 0 !== f2 && (d = f2, b2 = Nk(a, f2))), 1 === b2)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B3()), c;
            a.finishedWork = e2;
            a.finishedLanes = d;
            switch (b2) {
              case 0:
              case 1:
                throw Error(p(345));
              case 2:
                Pk(a, tk, uk);
                break;
              case 3:
                Ck(a, d);
                if ((d & 130023424) === d && (b2 = fk + 500 - B3(), 10 < b2)) {
                  if (0 !== uc(a, 0)) break;
                  e2 = a.suspendedLanes;
                  if ((e2 & d) !== d) {
                    R2();
                    a.pingedLanes |= a.suspendedLanes & e2;
                    break;
                  }
                  a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b2);
                  break;
                }
                Pk(a, tk, uk);
                break;
              case 4:
                Ck(a, d);
                if ((d & 4194240) === d) break;
                b2 = a.eventTimes;
                for (e2 = -1; 0 < d; ) {
                  var g = 31 - oc(d);
                  f2 = 1 << g;
                  g = b2[g];
                  g > e2 && (e2 = g);
                  d &= ~f2;
                }
                d = e2;
                d = B3() - d;
                d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
                if (10 < d) {
                  a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
                  break;
                }
                Pk(a, tk, uk);
                break;
              case 5:
                Pk(a, tk, uk);
                break;
              default:
                throw Error(p(329));
            }
          }
        }
        Dk(a, B3());
        return a.callbackNode === c ? Gk.bind(null, a) : null;
      }
      function Nk(a, b2) {
        var c = sk;
        a.current.memoizedState.isDehydrated && (Kk(a, b2).flags |= 256);
        a = Ik(a, b2);
        2 !== a && (b2 = tk, tk = c, null !== b2 && Fj(b2));
        return a;
      }
      function Fj(a) {
        null === tk ? tk = a : tk.push.apply(tk, a);
      }
      function Ok(a) {
        for (var b2 = a; ; ) {
          if (b2.flags & 16384) {
            var c = b2.updateQueue;
            if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
              var e2 = c[d], f2 = e2.getSnapshot;
              e2 = e2.value;
              try {
                if (!He3(f2(), e2)) return false;
              } catch (g) {
                return false;
              }
            }
          }
          c = b2.child;
          if (b2.subtreeFlags & 16384 && null !== c) c.return = b2, b2 = c;
          else {
            if (b2 === a) break;
            for (; null === b2.sibling; ) {
              if (null === b2.return || b2.return === a) return true;
              b2 = b2.return;
            }
            b2.sibling.return = b2.return;
            b2 = b2.sibling;
          }
        }
        return true;
      }
      function Ck(a, b2) {
        b2 &= ~rk;
        b2 &= ~qk;
        a.suspendedLanes |= b2;
        a.pingedLanes &= ~b2;
        for (a = a.expirationTimes; 0 < b2; ) {
          var c = 31 - oc(b2), d = 1 << c;
          a[c] = -1;
          b2 &= ~d;
        }
      }
      function Ek(a) {
        if (0 !== (K2 & 6)) throw Error(p(327));
        Hk();
        var b2 = uc(a, 0);
        if (0 === (b2 & 1)) return Dk(a, B3()), null;
        var c = Ik(a, b2);
        if (0 !== a.tag && 2 === c) {
          var d = xc(a);
          0 !== d && (b2 = d, c = Nk(a, d));
        }
        if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b2), Dk(a, B3()), c;
        if (6 === c) throw Error(p(345));
        a.finishedWork = a.current.alternate;
        a.finishedLanes = b2;
        Pk(a, tk, uk);
        Dk(a, B3());
        return null;
      }
      function Qk(a, b2) {
        var c = K2;
        K2 |= 1;
        try {
          return a(b2);
        } finally {
          K2 = c, 0 === K2 && (Gj = B3() + 500, fg && jg());
        }
      }
      function Rk(a) {
        null !== wk && 0 === wk.tag && 0 === (K2 & 6) && Hk();
        var b2 = K2;
        K2 |= 1;
        var c = ok.transition, d = C;
        try {
          if (ok.transition = null, C = 1, a) return a();
        } finally {
          C = d, ok.transition = c, K2 = b2, 0 === (K2 & 6) && jg();
        }
      }
      function Hj() {
        fj = ej.current;
        E3(ej);
      }
      function Kk(a, b2) {
        a.finishedWork = null;
        a.finishedLanes = 0;
        var c = a.timeoutHandle;
        -1 !== c && (a.timeoutHandle = -1, Gf(c));
        if (null !== Y2) for (c = Y2.return; null !== c; ) {
          var d = c;
          wg(d);
          switch (d.tag) {
            case 1:
              d = d.type.childContextTypes;
              null !== d && void 0 !== d && $f();
              break;
            case 3:
              zh();
              E3(Wf);
              E3(H2);
              Eh();
              break;
            case 5:
              Bh(d);
              break;
            case 4:
              zh();
              break;
            case 13:
              E3(L);
              break;
            case 19:
              E3(L);
              break;
            case 10:
              ah(d.type._context);
              break;
            case 22:
            case 23:
              Hj();
          }
          c = c.return;
        }
        Q = a;
        Y2 = a = Pg(a.current, null);
        Z = fj = b2;
        T3 = 0;
        pk = null;
        rk = qk = rh = 0;
        tk = sk = null;
        if (null !== fh) {
          for (b2 = 0; b2 < fh.length; b2++) if (c = fh[b2], d = c.interleaved, null !== d) {
            c.interleaved = null;
            var e2 = d.next, f2 = c.pending;
            if (null !== f2) {
              var g = f2.next;
              f2.next = e2;
              d.next = g;
            }
            c.pending = d;
          }
          fh = null;
        }
        return a;
      }
      function Mk(a, b2) {
        do {
          var c = Y2;
          try {
            $g();
            Fh.current = Rh;
            if (Ih) {
              for (var d = M3.memoizedState; null !== d; ) {
                var e2 = d.queue;
                null !== e2 && (e2.pending = null);
                d = d.next;
              }
              Ih = false;
            }
            Hh = 0;
            O3 = N2 = M3 = null;
            Jh = false;
            Kh = 0;
            nk.current = null;
            if (null === c || null === c.return) {
              T3 = 1;
              pk = b2;
              Y2 = null;
              break;
            }
            a: {
              var f2 = a, g = c.return, h2 = c, k3 = b2;
              b2 = Z;
              h2.flags |= 32768;
              if (null !== k3 && "object" === typeof k3 && "function" === typeof k3.then) {
                var l2 = k3, m = h2, q = m.tag;
                if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
                  var r = m.alternate;
                  r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
                }
                var y3 = Ui(g);
                if (null !== y3) {
                  y3.flags &= -257;
                  Vi(y3, g, h2, f2, b2);
                  y3.mode & 1 && Si(f2, l2, b2);
                  b2 = y3;
                  k3 = l2;
                  var n2 = b2.updateQueue;
                  if (null === n2) {
                    var t = /* @__PURE__ */ new Set();
                    t.add(k3);
                    b2.updateQueue = t;
                  } else n2.add(k3);
                  break a;
                } else {
                  if (0 === (b2 & 1)) {
                    Si(f2, l2, b2);
                    tj();
                    break a;
                  }
                  k3 = Error(p(426));
                }
              } else if (I2 && h2.mode & 1) {
                var J2 = Ui(g);
                if (null !== J2) {
                  0 === (J2.flags & 65536) && (J2.flags |= 256);
                  Vi(J2, g, h2, f2, b2);
                  Jg(Ji(k3, h2));
                  break a;
                }
              }
              f2 = k3 = Ji(k3, h2);
              4 !== T3 && (T3 = 2);
              null === sk ? sk = [f2] : sk.push(f2);
              f2 = g;
              do {
                switch (f2.tag) {
                  case 3:
                    f2.flags |= 65536;
                    b2 &= -b2;
                    f2.lanes |= b2;
                    var x2 = Ni(f2, k3, b2);
                    ph(f2, x2);
                    break a;
                  case 1:
                    h2 = k3;
                    var w2 = f2.type, u = f2.stateNode;
                    if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Ri || !Ri.has(u)))) {
                      f2.flags |= 65536;
                      b2 &= -b2;
                      f2.lanes |= b2;
                      var F4 = Qi(f2, h2, b2);
                      ph(f2, F4);
                      break a;
                    }
                }
                f2 = f2.return;
              } while (null !== f2);
            }
            Sk(c);
          } catch (na) {
            b2 = na;
            Y2 === c && null !== c && (Y2 = c = c.return);
            continue;
          }
          break;
        } while (1);
      }
      function Jk() {
        var a = mk.current;
        mk.current = Rh;
        return null === a ? Rh : a;
      }
      function tj() {
        if (0 === T3 || 3 === T3 || 2 === T3) T3 = 4;
        null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
      }
      function Ik(a, b2) {
        var c = K2;
        K2 |= 2;
        var d = Jk();
        if (Q !== a || Z !== b2) uk = null, Kk(a, b2);
        do
          try {
            Tk();
            break;
          } catch (e2) {
            Mk(a, e2);
          }
        while (1);
        $g();
        K2 = c;
        mk.current = d;
        if (null !== Y2) throw Error(p(261));
        Q = null;
        Z = 0;
        return T3;
      }
      function Tk() {
        for (; null !== Y2; ) Uk(Y2);
      }
      function Lk() {
        for (; null !== Y2 && !cc(); ) Uk(Y2);
      }
      function Uk(a) {
        var b2 = Vk(a.alternate, a, fj);
        a.memoizedProps = a.pendingProps;
        null === b2 ? Sk(a) : Y2 = b2;
        nk.current = null;
      }
      function Sk(a) {
        var b2 = a;
        do {
          var c = b2.alternate;
          a = b2.return;
          if (0 === (b2.flags & 32768)) {
            if (c = Ej(c, b2, fj), null !== c) {
              Y2 = c;
              return;
            }
          } else {
            c = Ij(c, b2);
            if (null !== c) {
              c.flags &= 32767;
              Y2 = c;
              return;
            }
            if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
            else {
              T3 = 6;
              Y2 = null;
              return;
            }
          }
          b2 = b2.sibling;
          if (null !== b2) {
            Y2 = b2;
            return;
          }
          Y2 = b2 = a;
        } while (null !== b2);
        0 === T3 && (T3 = 5);
      }
      function Pk(a, b2, c) {
        var d = C, e2 = ok.transition;
        try {
          ok.transition = null, C = 1, Wk(a, b2, c, d);
        } finally {
          ok.transition = e2, C = d;
        }
        return null;
      }
      function Wk(a, b2, c, d) {
        do
          Hk();
        while (null !== wk);
        if (0 !== (K2 & 6)) throw Error(p(327));
        c = a.finishedWork;
        var e2 = a.finishedLanes;
        if (null === c) return null;
        a.finishedWork = null;
        a.finishedLanes = 0;
        if (c === a.current) throw Error(p(177));
        a.callbackNode = null;
        a.callbackPriority = 0;
        var f2 = c.lanes | c.childLanes;
        Bc(a, f2);
        a === Q && (Y2 = Q = null, Z = 0);
        0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = true, Fk(hc, function() {
          Hk();
          return null;
        }));
        f2 = 0 !== (c.flags & 15990);
        if (0 !== (c.subtreeFlags & 15990) || f2) {
          f2 = ok.transition;
          ok.transition = null;
          var g = C;
          C = 1;
          var h2 = K2;
          K2 |= 4;
          nk.current = null;
          Oj(a, c);
          dk(c, a);
          Oe3(Df);
          dd = !!Cf;
          Df = Cf = null;
          a.current = c;
          hk(c, a, e2);
          dc();
          K2 = h2;
          C = g;
          ok.transition = f2;
        } else a.current = c;
        vk && (vk = false, wk = a, xk = e2);
        f2 = a.pendingLanes;
        0 === f2 && (Ri = null);
        mc(c.stateNode, d);
        Dk(a, B3());
        if (null !== b2) for (d = a.onRecoverableError, c = 0; c < b2.length; c++) e2 = b2[c], d(e2.value, { componentStack: e2.stack, digest: e2.digest });
        if (Oi) throw Oi = false, a = Pi, Pi = null, a;
        0 !== (xk & 1) && 0 !== a.tag && Hk();
        f2 = a.pendingLanes;
        0 !== (f2 & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
        jg();
        return null;
      }
      function Hk() {
        if (null !== wk) {
          var a = Dc(xk), b2 = ok.transition, c = C;
          try {
            ok.transition = null;
            C = 16 > a ? 16 : a;
            if (null === wk) var d = false;
            else {
              a = wk;
              wk = null;
              xk = 0;
              if (0 !== (K2 & 6)) throw Error(p(331));
              var e2 = K2;
              K2 |= 4;
              for (V = a.current; null !== V; ) {
                var f2 = V, g = f2.child;
                if (0 !== (V.flags & 16)) {
                  var h2 = f2.deletions;
                  if (null !== h2) {
                    for (var k3 = 0; k3 < h2.length; k3++) {
                      var l2 = h2[k3];
                      for (V = l2; null !== V; ) {
                        var m = V;
                        switch (m.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Pj(8, m, f2);
                        }
                        var q = m.child;
                        if (null !== q) q.return = m, V = q;
                        else for (; null !== V; ) {
                          m = V;
                          var r = m.sibling, y3 = m.return;
                          Sj(m);
                          if (m === l2) {
                            V = null;
                            break;
                          }
                          if (null !== r) {
                            r.return = y3;
                            V = r;
                            break;
                          }
                          V = y3;
                        }
                      }
                    }
                    var n2 = f2.alternate;
                    if (null !== n2) {
                      var t = n2.child;
                      if (null !== t) {
                        n2.child = null;
                        do {
                          var J2 = t.sibling;
                          t.sibling = null;
                          t = J2;
                        } while (null !== t);
                      }
                    }
                    V = f2;
                  }
                }
                if (0 !== (f2.subtreeFlags & 2064) && null !== g) g.return = f2, V = g;
                else b: for (; null !== V; ) {
                  f2 = V;
                  if (0 !== (f2.flags & 2048)) switch (f2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pj(9, f2, f2.return);
                  }
                  var x2 = f2.sibling;
                  if (null !== x2) {
                    x2.return = f2.return;
                    V = x2;
                    break b;
                  }
                  V = f2.return;
                }
              }
              var w2 = a.current;
              for (V = w2; null !== V; ) {
                g = V;
                var u = g.child;
                if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V = u;
                else b: for (g = w2; null !== V; ) {
                  h2 = V;
                  if (0 !== (h2.flags & 2048)) try {
                    switch (h2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Qj(9, h2);
                    }
                  } catch (na) {
                    W2(h2, h2.return, na);
                  }
                  if (h2 === g) {
                    V = null;
                    break b;
                  }
                  var F4 = h2.sibling;
                  if (null !== F4) {
                    F4.return = h2.return;
                    V = F4;
                    break b;
                  }
                  V = h2.return;
                }
              }
              K2 = e2;
              jg();
              if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
                lc.onPostCommitFiberRoot(kc, a);
              } catch (na) {
              }
              d = true;
            }
            return d;
          } finally {
            C = c, ok.transition = b2;
          }
        }
        return false;
      }
      function Xk(a, b2, c) {
        b2 = Ji(c, b2);
        b2 = Ni(a, b2, 1);
        a = nh(a, b2, 1);
        b2 = R2();
        null !== a && (Ac(a, 1, b2), Dk(a, b2));
      }
      function W2(a, b2, c) {
        if (3 === a.tag) Xk(a, a, c);
        else for (; null !== b2; ) {
          if (3 === b2.tag) {
            Xk(b2, a, c);
            break;
          } else if (1 === b2.tag) {
            var d = b2.stateNode;
            if ("function" === typeof b2.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
              a = Ji(c, a);
              a = Qi(b2, a, 1);
              b2 = nh(b2, a, 1);
              a = R2();
              null !== b2 && (Ac(b2, 1, a), Dk(b2, a));
              break;
            }
          }
          b2 = b2.return;
        }
      }
      function Ti(a, b2, c) {
        var d = a.pingCache;
        null !== d && d.delete(b2);
        b2 = R2();
        a.pingedLanes |= a.suspendedLanes & c;
        Q === a && (Z & c) === c && (4 === T3 || 3 === T3 && (Z & 130023424) === Z && 500 > B3() - fk ? Kk(a, 0) : rk |= c);
        Dk(a, b2);
      }
      function Yk(a, b2) {
        0 === b2 && (0 === (a.mode & 1) ? b2 = 1 : (b2 = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
        var c = R2();
        a = ih(a, b2);
        null !== a && (Ac(a, b2, c), Dk(a, c));
      }
      function uj(a) {
        var b2 = a.memoizedState, c = 0;
        null !== b2 && (c = b2.retryLane);
        Yk(a, c);
      }
      function bk(a, b2) {
        var c = 0;
        switch (a.tag) {
          case 13:
            var d = a.stateNode;
            var e2 = a.memoizedState;
            null !== e2 && (c = e2.retryLane);
            break;
          case 19:
            d = a.stateNode;
            break;
          default:
            throw Error(p(314));
        }
        null !== d && d.delete(b2);
        Yk(a, c);
      }
      var Vk;
      Vk = function(a, b2, c) {
        if (null !== a) if (a.memoizedProps !== b2.pendingProps || Wf.current) dh = true;
        else {
          if (0 === (a.lanes & c) && 0 === (b2.flags & 128)) return dh = false, yj(a, b2, c);
          dh = 0 !== (a.flags & 131072) ? true : false;
        }
        else dh = false, I2 && 0 !== (b2.flags & 1048576) && ug(b2, ng, b2.index);
        b2.lanes = 0;
        switch (b2.tag) {
          case 2:
            var d = b2.type;
            ij(a, b2);
            a = b2.pendingProps;
            var e2 = Yf(b2, H2.current);
            ch(b2, c);
            e2 = Nh(null, b2, d, a, e2, c);
            var f2 = Sh();
            b2.flags |= 1;
            "object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Zf(d) ? (f2 = true, cg(b2)) : f2 = false, b2.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null, kh(b2), e2.updater = Ei, b2.stateNode = e2, e2._reactInternals = b2, Ii(b2, d, a, c), b2 = jj(null, b2, d, true, f2, c)) : (b2.tag = 0, I2 && f2 && vg(b2), Xi(null, b2, e2, c), b2 = b2.child);
            return b2;
          case 16:
            d = b2.elementType;
            a: {
              ij(a, b2);
              a = b2.pendingProps;
              e2 = d._init;
              d = e2(d._payload);
              b2.type = d;
              e2 = b2.tag = Zk(d);
              a = Ci(d, a);
              switch (e2) {
                case 0:
                  b2 = cj(null, b2, d, a, c);
                  break a;
                case 1:
                  b2 = hj(null, b2, d, a, c);
                  break a;
                case 11:
                  b2 = Yi(null, b2, d, a, c);
                  break a;
                case 14:
                  b2 = $i(null, b2, d, Ci(d.type, a), c);
                  break a;
              }
              throw Error(p(
                306,
                d,
                ""
              ));
            }
            return b2;
          case 0:
            return d = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d ? e2 : Ci(d, e2), cj(a, b2, d, e2, c);
          case 1:
            return d = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d ? e2 : Ci(d, e2), hj(a, b2, d, e2, c);
          case 3:
            a: {
              kj(b2);
              if (null === a) throw Error(p(387));
              d = b2.pendingProps;
              f2 = b2.memoizedState;
              e2 = f2.element;
              lh(a, b2);
              qh(b2, d, null, c);
              var g = b2.memoizedState;
              d = g.element;
              if (f2.isDehydrated) if (f2 = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
                e2 = Ji(Error(p(423)), b2);
                b2 = lj(a, b2, d, c, e2);
                break a;
              } else if (d !== e2) {
                e2 = Ji(Error(p(424)), b2);
                b2 = lj(a, b2, d, c, e2);
                break a;
              } else for (yg = Lf(b2.stateNode.containerInfo.firstChild), xg = b2, I2 = true, zg = null, c = Vg(b2, null, d, c), b2.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
              else {
                Ig();
                if (d === e2) {
                  b2 = Zi(a, b2, c);
                  break a;
                }
                Xi(a, b2, d, c);
              }
              b2 = b2.child;
            }
            return b2;
          case 5:
            return Ah(b2), null === a && Eg(b2), d = b2.type, e2 = b2.pendingProps, f2 = null !== a ? a.memoizedProps : null, g = e2.children, Ef(d, e2) ? g = null : null !== f2 && Ef(d, f2) && (b2.flags |= 32), gj(a, b2), Xi(a, b2, g, c), b2.child;
          case 6:
            return null === a && Eg(b2), null;
          case 13:
            return oj(a, b2, c);
          case 4:
            return yh(b2, b2.stateNode.containerInfo), d = b2.pendingProps, null === a ? b2.child = Ug(b2, null, d, c) : Xi(a, b2, d, c), b2.child;
          case 11:
            return d = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d ? e2 : Ci(d, e2), Yi(a, b2, d, e2, c);
          case 7:
            return Xi(a, b2, b2.pendingProps, c), b2.child;
          case 8:
            return Xi(a, b2, b2.pendingProps.children, c), b2.child;
          case 12:
            return Xi(a, b2, b2.pendingProps.children, c), b2.child;
          case 10:
            a: {
              d = b2.type._context;
              e2 = b2.pendingProps;
              f2 = b2.memoizedProps;
              g = e2.value;
              G3(Wg, d._currentValue);
              d._currentValue = g;
              if (null !== f2) if (He3(f2.value, g)) {
                if (f2.children === e2.children && !Wf.current) {
                  b2 = Zi(a, b2, c);
                  break a;
                }
              } else for (f2 = b2.child, null !== f2 && (f2.return = b2); null !== f2; ) {
                var h2 = f2.dependencies;
                if (null !== h2) {
                  g = f2.child;
                  for (var k3 = h2.firstContext; null !== k3; ) {
                    if (k3.context === d) {
                      if (1 === f2.tag) {
                        k3 = mh(-1, c & -c);
                        k3.tag = 2;
                        var l2 = f2.updateQueue;
                        if (null !== l2) {
                          l2 = l2.shared;
                          var m = l2.pending;
                          null === m ? k3.next = k3 : (k3.next = m.next, m.next = k3);
                          l2.pending = k3;
                        }
                      }
                      f2.lanes |= c;
                      k3 = f2.alternate;
                      null !== k3 && (k3.lanes |= c);
                      bh(
                        f2.return,
                        c,
                        b2
                      );
                      h2.lanes |= c;
                      break;
                    }
                    k3 = k3.next;
                  }
                } else if (10 === f2.tag) g = f2.type === b2.type ? null : f2.child;
                else if (18 === f2.tag) {
                  g = f2.return;
                  if (null === g) throw Error(p(341));
                  g.lanes |= c;
                  h2 = g.alternate;
                  null !== h2 && (h2.lanes |= c);
                  bh(g, c, b2);
                  g = f2.sibling;
                } else g = f2.child;
                if (null !== g) g.return = f2;
                else for (g = f2; null !== g; ) {
                  if (g === b2) {
                    g = null;
                    break;
                  }
                  f2 = g.sibling;
                  if (null !== f2) {
                    f2.return = g.return;
                    g = f2;
                    break;
                  }
                  g = g.return;
                }
                f2 = g;
              }
              Xi(a, b2, e2.children, c);
              b2 = b2.child;
            }
            return b2;
          case 9:
            return e2 = b2.type, d = b2.pendingProps.children, ch(b2, c), e2 = eh(e2), d = d(e2), b2.flags |= 1, Xi(a, b2, d, c), b2.child;
          case 14:
            return d = b2.type, e2 = Ci(d, b2.pendingProps), e2 = Ci(d.type, e2), $i(a, b2, d, e2, c);
          case 15:
            return bj(a, b2, b2.type, b2.pendingProps, c);
          case 17:
            return d = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d ? e2 : Ci(d, e2), ij(a, b2), b2.tag = 1, Zf(d) ? (a = true, cg(b2)) : a = false, ch(b2, c), Gi(b2, d, e2), Ii(b2, d, e2, c), jj(null, b2, d, true, a, c);
          case 19:
            return xj(a, b2, c);
          case 22:
            return dj(a, b2, c);
        }
        throw Error(p(156, b2.tag));
      };
      function Fk(a, b2) {
        return ac(a, b2);
      }
      function $k(a, b2, c, d) {
        this.tag = a;
        this.key = c;
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
        this.index = 0;
        this.ref = null;
        this.pendingProps = b2;
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
        this.mode = d;
        this.subtreeFlags = this.flags = 0;
        this.deletions = null;
        this.childLanes = this.lanes = 0;
        this.alternate = null;
      }
      function Bg(a, b2, c, d) {
        return new $k(a, b2, c, d);
      }
      function aj(a) {
        a = a.prototype;
        return !(!a || !a.isReactComponent);
      }
      function Zk(a) {
        if ("function" === typeof a) return aj(a) ? 1 : 0;
        if (void 0 !== a && null !== a) {
          a = a.$$typeof;
          if (a === Da2) return 11;
          if (a === Ga) return 14;
        }
        return 2;
      }
      function Pg(a, b2) {
        var c = a.alternate;
        null === c ? (c = Bg(a.tag, b2, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b2, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
        c.flags = a.flags & 14680064;
        c.childLanes = a.childLanes;
        c.lanes = a.lanes;
        c.child = a.child;
        c.memoizedProps = a.memoizedProps;
        c.memoizedState = a.memoizedState;
        c.updateQueue = a.updateQueue;
        b2 = a.dependencies;
        c.dependencies = null === b2 ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
        c.sibling = a.sibling;
        c.index = a.index;
        c.ref = a.ref;
        return c;
      }
      function Rg(a, b2, c, d, e2, f2) {
        var g = 2;
        d = a;
        if ("function" === typeof a) aj(a) && (g = 1);
        else if ("string" === typeof a) g = 5;
        else a: switch (a) {
          case ya2:
            return Tg(c.children, e2, f2, b2);
          case za:
            g = 8;
            e2 |= 8;
            break;
          case Aa2:
            return a = Bg(12, c, b2, e2 | 2), a.elementType = Aa2, a.lanes = f2, a;
          case Ea2:
            return a = Bg(13, c, b2, e2), a.elementType = Ea2, a.lanes = f2, a;
          case Fa2:
            return a = Bg(19, c, b2, e2), a.elementType = Fa2, a.lanes = f2, a;
          case Ia:
            return pj(c, e2, f2, b2);
          default:
            if ("object" === typeof a && null !== a) switch (a.$$typeof) {
              case Ba2:
                g = 10;
                break a;
              case Ca:
                g = 9;
                break a;
              case Da2:
                g = 11;
                break a;
              case Ga:
                g = 14;
                break a;
              case Ha2:
                g = 16;
                d = null;
                break a;
            }
            throw Error(p(130, null == a ? a : typeof a, ""));
        }
        b2 = Bg(g, c, b2, e2);
        b2.elementType = a;
        b2.type = d;
        b2.lanes = f2;
        return b2;
      }
      function Tg(a, b2, c, d) {
        a = Bg(7, a, d, b2);
        a.lanes = c;
        return a;
      }
      function pj(a, b2, c, d) {
        a = Bg(22, a, d, b2);
        a.elementType = Ia;
        a.lanes = c;
        a.stateNode = { isHidden: false };
        return a;
      }
      function Qg(a, b2, c) {
        a = Bg(6, a, null, b2);
        a.lanes = c;
        return a;
      }
      function Sg(a, b2, c) {
        b2 = Bg(4, null !== a.children ? a.children : [], a.key, b2);
        b2.lanes = c;
        b2.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
        return b2;
      }
      function al2(a, b2, c, d, e2) {
        this.tag = b2;
        this.containerInfo = a;
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
        this.timeoutHandle = -1;
        this.callbackNode = this.pendingContext = this.context = null;
        this.callbackPriority = 0;
        this.eventTimes = zc(0);
        this.expirationTimes = zc(-1);
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
        this.entanglements = zc(0);
        this.identifierPrefix = d;
        this.onRecoverableError = e2;
        this.mutableSourceEagerHydrationData = null;
      }
      function bl2(a, b2, c, d, e2, f2, g, h2, k3) {
        a = new al2(a, b2, c, h2, k3);
        1 === b2 ? (b2 = 1, true === f2 && (b2 |= 8)) : b2 = 0;
        f2 = Bg(3, null, null, b2);
        a.current = f2;
        f2.stateNode = a;
        f2.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
        kh(f2);
        return a;
      }
      function cl(a, b2, c) {
        var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return { $$typeof: wa2, key: null == d ? null : "" + d, children: a, containerInfo: b2, implementation: c };
      }
      function dl2(a) {
        if (!a) return Vf;
        a = a._reactInternals;
        a: {
          if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
          var b2 = a;
          do {
            switch (b2.tag) {
              case 3:
                b2 = b2.stateNode.context;
                break a;
              case 1:
                if (Zf(b2.type)) {
                  b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
                  break a;
                }
            }
            b2 = b2.return;
          } while (null !== b2);
          throw Error(p(171));
        }
        if (1 === a.tag) {
          var c = a.type;
          if (Zf(c)) return bg(a, c, b2);
        }
        return b2;
      }
      function el2(a, b2, c, d, e2, f2, g, h2, k3) {
        a = bl2(c, d, true, a, e2, f2, g, h2, k3);
        a.context = dl2(null);
        c = a.current;
        d = R2();
        e2 = yi(c);
        f2 = mh(d, e2);
        f2.callback = void 0 !== b2 && null !== b2 ? b2 : null;
        nh(c, f2, e2);
        a.current.lanes = e2;
        Ac(a, e2, d);
        Dk(a, d);
        return a;
      }
      function fl2(a, b2, c, d) {
        var e2 = b2.current, f2 = R2(), g = yi(e2);
        c = dl2(c);
        null === b2.context ? b2.context = c : b2.pendingContext = c;
        b2 = mh(f2, g);
        b2.payload = { element: a };
        d = void 0 === d ? null : d;
        null !== d && (b2.callback = d);
        a = nh(e2, b2, g);
        null !== a && (gi(a, e2, g, f2), oh(a, e2, g));
        return g;
      }
      function gl2(a) {
        a = a.current;
        if (!a.child) return null;
        switch (a.child.tag) {
          case 5:
            return a.child.stateNode;
          default:
            return a.child.stateNode;
        }
      }
      function hl(a, b2) {
        a = a.memoizedState;
        if (null !== a && null !== a.dehydrated) {
          var c = a.retryLane;
          a.retryLane = 0 !== c && c < b2 ? c : b2;
        }
      }
      function il(a, b2) {
        hl(a, b2);
        (a = a.alternate) && hl(a, b2);
      }
      function jl2() {
        return null;
      }
      var kl = "function" === typeof reportError ? reportError : function(a) {
        console.error(a);
      };
      function ll2(a) {
        this._internalRoot = a;
      }
      ml.prototype.render = ll2.prototype.render = function(a) {
        var b2 = this._internalRoot;
        if (null === b2) throw Error(p(409));
        fl2(a, b2, null, null);
      };
      ml.prototype.unmount = ll2.prototype.unmount = function() {
        var a = this._internalRoot;
        if (null !== a) {
          this._internalRoot = null;
          var b2 = a.containerInfo;
          Rk(function() {
            fl2(null, a, null, null);
          });
          b2[uf] = null;
        }
      };
      function ml(a) {
        this._internalRoot = a;
      }
      ml.prototype.unstable_scheduleHydration = function(a) {
        if (a) {
          var b2 = Hc();
          a = { blockedOn: null, target: a, priority: b2 };
          for (var c = 0; c < Qc.length && 0 !== b2 && b2 < Qc[c].priority; c++) ;
          Qc.splice(c, 0, a);
          0 === c && Vc(a);
        }
      };
      function nl(a) {
        return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
      }
      function ol2(a) {
        return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
      }
      function pl() {
      }
      function ql2(a, b2, c, d, e2) {
        if (e2) {
          if ("function" === typeof d) {
            var f2 = d;
            d = function() {
              var a2 = gl2(g);
              f2.call(a2);
            };
          }
          var g = el2(b2, d, a, 0, null, false, false, "", pl);
          a._reactRootContainer = g;
          a[uf] = g.current;
          sf(8 === a.nodeType ? a.parentNode : a);
          Rk();
          return g;
        }
        for (; e2 = a.lastChild; ) a.removeChild(e2);
        if ("function" === typeof d) {
          var h2 = d;
          d = function() {
            var a2 = gl2(k3);
            h2.call(a2);
          };
        }
        var k3 = bl2(a, 0, false, null, null, false, false, "", pl);
        a._reactRootContainer = k3;
        a[uf] = k3.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        Rk(function() {
          fl2(b2, k3, c, d);
        });
        return k3;
      }
      function rl2(a, b2, c, d, e2) {
        var f2 = c._reactRootContainer;
        if (f2) {
          var g = f2;
          if ("function" === typeof e2) {
            var h2 = e2;
            e2 = function() {
              var a2 = gl2(g);
              h2.call(a2);
            };
          }
          fl2(b2, g, a, e2);
        } else g = ql2(c, b2, a, e2, d);
        return gl2(g);
      }
      Ec = function(a) {
        switch (a.tag) {
          case 3:
            var b2 = a.stateNode;
            if (b2.current.memoizedState.isDehydrated) {
              var c = tc(b2.pendingLanes);
              0 !== c && (Cc(b2, c | 1), Dk(b2, B3()), 0 === (K2 & 6) && (Gj = B3() + 500, jg()));
            }
            break;
          case 13:
            Rk(function() {
              var b3 = ih(a, 1);
              if (null !== b3) {
                var c2 = R2();
                gi(b3, a, 1, c2);
              }
            }), il(a, 1);
        }
      };
      Fc = function(a) {
        if (13 === a.tag) {
          var b2 = ih(a, 134217728);
          if (null !== b2) {
            var c = R2();
            gi(b2, a, 134217728, c);
          }
          il(a, 134217728);
        }
      };
      Gc = function(a) {
        if (13 === a.tag) {
          var b2 = yi(a), c = ih(a, b2);
          if (null !== c) {
            var d = R2();
            gi(c, a, b2, d);
          }
          il(a, b2);
        }
      };
      Hc = function() {
        return C;
      };
      Ic = function(a, b2) {
        var c = C;
        try {
          return C = a, b2();
        } finally {
          C = c;
        }
      };
      yb = function(a, b2, c) {
        switch (b2) {
          case "input":
            bb(a, c);
            b2 = c.name;
            if ("radio" === c.type && null != b2) {
              for (c = a; c.parentNode; ) c = c.parentNode;
              c = c.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
              for (b2 = 0; b2 < c.length; b2++) {
                var d = c[b2];
                if (d !== a && d.form === a.form) {
                  var e2 = Db(d);
                  if (!e2) throw Error(p(90));
                  Wa(d);
                  bb(d, e2);
                }
              }
            }
            break;
          case "textarea":
            ib(a, c);
            break;
          case "select":
            b2 = c.value, null != b2 && fb(a, !!c.multiple, b2, false);
        }
      };
      Gb = Qk;
      Hb = Rk;
      var sl2 = { usingClientEntryPoint: false, Events: [Cb, ue3, Db, Eb, Fb, Qk] };
      var tl2 = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
      var ul2 = { bundleType: tl2.bundleType, version: tl2.version, rendererPackageName: tl2.rendererPackageName, rendererConfig: tl2.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua2.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
        a = Zb(a);
        return null === a ? null : a.stateNode;
      }, findFiberByHostInstance: tl2.findFiberByHostInstance || jl2, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
      if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        vl2 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!vl2.isDisabled && vl2.supportsFiber) try {
          kc = vl2.inject(ul2), lc = vl2;
        } catch (a) {
        }
      }
      var vl2;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl2;
      exports.createPortal = function(a, b2) {
        var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!nl(b2)) throw Error(p(200));
        return cl(a, b2, null, c);
      };
      exports.createRoot = function(a, b2) {
        if (!nl(a)) throw Error(p(299));
        var c = false, d = "", e2 = kl;
        null !== b2 && void 0 !== b2 && (true === b2.unstable_strictMode && (c = true), void 0 !== b2.identifierPrefix && (d = b2.identifierPrefix), void 0 !== b2.onRecoverableError && (e2 = b2.onRecoverableError));
        b2 = bl2(a, 1, false, null, null, c, false, d, e2);
        a[uf] = b2.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        return new ll2(b2);
      };
      exports.findDOMNode = function(a) {
        if (null == a) return null;
        if (1 === a.nodeType) return a;
        var b2 = a._reactInternals;
        if (void 0 === b2) {
          if ("function" === typeof a.render) throw Error(p(188));
          a = Object.keys(a).join(",");
          throw Error(p(268, a));
        }
        a = Zb(b2);
        a = null === a ? null : a.stateNode;
        return a;
      };
      exports.flushSync = function(a) {
        return Rk(a);
      };
      exports.hydrate = function(a, b2, c) {
        if (!ol2(b2)) throw Error(p(200));
        return rl2(null, a, b2, true, c);
      };
      exports.hydrateRoot = function(a, b2, c) {
        if (!nl(a)) throw Error(p(405));
        var d = null != c && c.hydratedSources || null, e2 = false, f2 = "", g = kl;
        null !== c && void 0 !== c && (true === c.unstable_strictMode && (e2 = true), void 0 !== c.identifierPrefix && (f2 = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
        b2 = el2(b2, null, a, 1, null != c ? c : null, e2, false, f2, g);
        a[uf] = b2.current;
        sf(a);
        if (d) for (a = 0; a < d.length; a++) c = d[a], e2 = c._getVersion, e2 = e2(c._source), null == b2.mutableSourceEagerHydrationData ? b2.mutableSourceEagerHydrationData = [c, e2] : b2.mutableSourceEagerHydrationData.push(
          c,
          e2
        );
        return new ml(b2);
      };
      exports.render = function(a, b2, c) {
        if (!ol2(b2)) throw Error(p(200));
        return rl2(null, a, b2, false, c);
      };
      exports.unmountComponentAtNode = function(a) {
        if (!ol2(a)) throw Error(p(40));
        return a._reactRootContainer ? (Rk(function() {
          rl2(null, null, a, false, function() {
            a._reactRootContainer = null;
            a[uf] = null;
          });
        }), true) : false;
      };
      exports.unstable_batchedUpdates = Qk;
      exports.unstable_renderSubtreeIntoContainer = function(a, b2, c, d) {
        if (!ol2(c)) throw Error(p(200));
        if (null == a || void 0 === a._reactInternals) throw Error(p(38));
        return rl2(a, b2, c, false, d);
      };
      exports.version = "18.3.1-next-f1338f8080-20240426";
    }
  });

  // ../../opt/files/node_modules/react-dom/index.js
  var require_react_dom = __commonJS({
    "../../opt/files/node_modules/react-dom/index.js"(exports, module) {
      "use strict";
      function checkDCE() {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
          return;
        }
        if (false) {
          throw new Error("^_^");
        }
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
        } catch (err) {
          console.error(err);
        }
      }
      if (true) {
        checkDCE();
        module.exports = require_react_dom_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // ../../opt/files/node_modules/react-dom/client.js
  var require_client = __commonJS({
    "../../opt/files/node_modules/react-dom/client.js"(exports) {
      "use strict";
      var m = require_react_dom();
      if (true) {
        exports.createRoot = m.createRoot;
        exports.hydrateRoot = m.hydrateRoot;
      } else {
        i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        exports.createRoot = function(c, o) {
          i.usingClientEntryPoint = true;
          try {
            return m.createRoot(c, o);
          } finally {
            i.usingClientEntryPoint = false;
          }
        };
        exports.hydrateRoot = function(c, h2, o) {
          i.usingClientEntryPoint = true;
          try {
            return m.hydrateRoot(c, h2, o);
          } finally {
            i.usingClientEntryPoint = false;
          }
        };
      }
      var i;
    }
  });

  // ../../opt/files/node_modules/react/cjs/react-jsx-runtime.production.min.js
  var require_react_jsx_runtime_production_min = __commonJS({
    "../../opt/files/node_modules/react/cjs/react-jsx-runtime.production.min.js"(exports) {
      "use strict";
      var f2 = require_react();
      var k3 = /* @__PURE__ */ Symbol.for("react.element");
      var l2 = /* @__PURE__ */ Symbol.for("react.fragment");
      var m = Object.prototype.hasOwnProperty;
      var n2 = f2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
      var p = { key: true, ref: true, __self: true, __source: true };
      function q(c, a, g) {
        var b2, d = {}, e2 = null, h2 = null;
        void 0 !== g && (e2 = "" + g);
        void 0 !== a.key && (e2 = "" + a.key);
        void 0 !== a.ref && (h2 = a.ref);
        for (b2 in a) m.call(a, b2) && !p.hasOwnProperty(b2) && (d[b2] = a[b2]);
        if (c && c.defaultProps) for (b2 in a = c.defaultProps, a) void 0 === d[b2] && (d[b2] = a[b2]);
        return { $$typeof: k3, type: c, key: e2, ref: h2, props: d, _owner: n2.current };
      }
      exports.Fragment = l2;
      exports.jsx = q;
      exports.jsxs = q;
    }
  });

  // ../../opt/files/node_modules/react/jsx-runtime.js
  var require_jsx_runtime = __commonJS({
    "../../opt/files/node_modules/react/jsx-runtime.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_jsx_runtime_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // src/main.tsx
  var import_client = __toESM(require_client());

  // ../../opt/files/kit/index.tsx
  var import_react17 = __toESM(require_react());

  // ../../opt/files/kit/components.mjs
  var y = __toESM(require_react(), 1);
  var Je = __toESM(require_react(), 1);
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var import_react = __toESM(require_react(), 1);
  var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
  var import_react2 = __toESM(require_react(), 1);
  var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
  function ee(e2) {
    var r, t, o = "";
    if (typeof e2 == "string" || typeof e2 == "number") o += e2;
    else if (typeof e2 == "object") if (Array.isArray(e2)) {
      var s = e2.length;
      for (r = 0; r < s; r++) e2[r] && (t = ee(e2[r])) && (o && (o += " "), o += t);
    } else for (t in e2) e2[t] && (o && (o += " "), o += t);
    return o;
  }
  function j() {
    for (var e2, r, t = 0, o = "", s = arguments.length; t < s; t++) (e2 = arguments[t]) && (r = ee(e2)) && (o && (o += " "), o += r);
    return o;
  }
  var ve = (e2) => {
    let r = Ce(e2), { conflictingClassGroups: t, conflictingClassGroupModifiers: o } = e2;
    return { getClassGroupId: (a) => {
      let i = a.split("-");
      return i[0] === "" && i.length !== 1 && i.shift(), oe(i, r) || we(a);
    }, getConflictingClassGroupIds: (a, i) => {
      let d = t[a] || [];
      return i && o[a] ? [...d, ...o[a]] : d;
    } };
  };
  var oe = (e2, r) => {
    if (e2.length === 0) return r.classGroupId;
    let t = e2[0], o = r.nextPart.get(t), s = o ? oe(e2.slice(1), o) : void 0;
    if (s) return s;
    if (r.validators.length === 0) return;
    let n2 = e2.join("-");
    return r.validators.find(({ validator: a }) => a(n2))?.classGroupId;
  };
  var te = /^\[(.+)\]$/;
  var we = (e2) => {
    if (te.test(e2)) {
      let r = te.exec(e2)[1], t = r?.substring(0, r.indexOf(":"));
      if (t) return "arbitrary.." + t;
    }
  };
  var Ce = (e2) => {
    let { theme: r, prefix: t } = e2, o = { nextPart: /* @__PURE__ */ new Map(), validators: [] };
    return ke(Object.entries(e2.classGroups), t).forEach(([n2, a]) => {
      U(a, o, n2, r);
    }), o;
  };
  var U = (e2, r, t, o) => {
    e2.forEach((s) => {
      if (typeof s == "string") {
        let n2 = s === "" ? r : re(r, s);
        n2.classGroupId = t;
        return;
      }
      if (typeof s == "function") {
        if (Se(s)) {
          U(s(o), r, t, o);
          return;
        }
        r.validators.push({ validator: s, classGroupId: t });
        return;
      }
      Object.entries(s).forEach(([n2, a]) => {
        U(a, re(r, n2), t, o);
      });
    });
  };
  var re = (e2, r) => {
    let t = e2;
    return r.split("-").forEach((o) => {
      t.nextPart.has(o) || t.nextPart.set(o, { nextPart: /* @__PURE__ */ new Map(), validators: [] }), t = t.nextPart.get(o);
    }), t;
  };
  var Se = (e2) => e2.isThemeGetter;
  var ke = (e2, r) => r ? e2.map(([t, o]) => {
    let s = o.map((n2) => typeof n2 == "string" ? r + n2 : typeof n2 == "object" ? Object.fromEntries(Object.entries(n2).map(([a, i]) => [r + a, i])) : n2);
    return [t, s];
  }) : e2;
  var Re = (e2) => {
    if (e2 < 1) return { get: () => {
    }, set: () => {
    } };
    let r = 0, t = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), s = (n2, a) => {
      t.set(n2, a), r++, r > e2 && (r = 0, o = t, t = /* @__PURE__ */ new Map());
    };
    return { get(n2) {
      let a = t.get(n2);
      if (a !== void 0) return a;
      if ((a = o.get(n2)) !== void 0) return s(n2, a), a;
    }, set(n2, a) {
      t.has(n2) ? t.set(n2, a) : s(n2, a);
    } };
  };
  var Ae = (e2) => {
    let { separator: r, experimentalParseClassName: t } = e2, o = r.length === 1, s = r[0], n2 = r.length, a = (i) => {
      let d = [], c = 0, u = 0, g;
      for (let p = 0; p < i.length; p++) {
        let x2 = i[p];
        if (c === 0) {
          if (x2 === s && (o || i.slice(p, p + n2) === r)) {
            d.push(i.slice(u, p)), u = p + n2;
            continue;
          }
          if (x2 === "/") {
            g = p;
            continue;
          }
        }
        x2 === "[" ? c++ : x2 === "]" && c--;
      }
      let m = d.length === 0 ? i : i.substring(u), v2 = m.startsWith("!"), w2 = v2 ? m.substring(1) : m, h2 = g && g > u ? g - u : void 0;
      return { modifiers: d, hasImportantModifier: v2, baseClassName: w2, maybePostfixModifierPosition: h2 };
    };
    return t ? (i) => t({ className: i, parseClassName: a }) : a;
  };
  var Pe = (e2) => {
    if (e2.length <= 1) return e2;
    let r = [], t = [];
    return e2.forEach((o) => {
      o[0] === "[" ? (r.push(...t.sort(), o), t = []) : t.push(o);
    }), r.push(...t.sort()), r;
  };
  var ze = (e2) => ({ cache: Re(e2.cacheSize), parseClassName: Ae(e2), ...ve(e2) });
  var Me = /\s+/;
  var Ne = (e2, r) => {
    let { parseClassName: t, getClassGroupId: o, getConflictingClassGroupIds: s } = r, n2 = [], a = e2.trim().split(Me), i = "";
    for (let d = a.length - 1; d >= 0; d -= 1) {
      let c = a[d], { modifiers: u, hasImportantModifier: g, baseClassName: m, maybePostfixModifierPosition: v2 } = t(c), w2 = !!v2, h2 = o(w2 ? m.substring(0, v2) : m);
      if (!h2) {
        if (!w2) {
          i = c + (i.length > 0 ? " " + i : i);
          continue;
        }
        if (h2 = o(m), !h2) {
          i = c + (i.length > 0 ? " " + i : i);
          continue;
        }
        w2 = false;
      }
      let p = Pe(u).join(":"), x2 = g ? p + "!" : p, C = x2 + h2;
      if (n2.includes(C)) continue;
      n2.push(C);
      let N2 = s(h2, w2);
      for (let P3 = 0; P3 < N2.length; ++P3) {
        let L = N2[P3];
        n2.push(x2 + L);
      }
      i = c + (i.length > 0 ? " " + i : i);
    }
    return i;
  };
  function Te() {
    let e2 = 0, r, t, o = "";
    for (; e2 < arguments.length; ) (r = arguments[e2++]) && (t = ne(r)) && (o && (o += " "), o += t);
    return o;
  }
  var ne = (e2) => {
    if (typeof e2 == "string") return e2;
    let r, t = "";
    for (let o = 0; o < e2.length; o++) e2[o] && (r = ne(e2[o])) && (t && (t += " "), t += r);
    return t;
  };
  function Be(e2, ...r) {
    let t, o, s, n2 = a;
    function a(d) {
      let c = r.reduce((u, g) => g(u), e2());
      return t = ze(c), o = t.cache.get, s = t.cache.set, n2 = i, i(d);
    }
    function i(d) {
      let c = o(d);
      if (c) return c;
      let u = Ne(d, t);
      return s(d, u), u;
    }
    return function() {
      return n2(Te.apply(null, arguments));
    };
  }
  var f = (e2) => {
    let r = (t) => t[e2] || [];
    return r.isThemeGetter = true, r;
  };
  var se = /^\[(?:([a-z-]+):)?(.+)\]$/i;
  var Ie = /^\d+\/\d+$/;
  var _e = /* @__PURE__ */ new Set(["px", "full", "screen"]);
  var Ee = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
  var Le = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
  var Ve = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
  var Ge = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
  var je = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
  var k = (e2) => z(e2) || _e.has(e2) || Ie.test(e2);
  var R = (e2) => M(e2, "length", Ke);
  var z = (e2) => !!e2 && !Number.isNaN(Number(e2));
  var F = (e2) => M(e2, "number", z);
  var B = (e2) => !!e2 && Number.isInteger(Number(e2));
  var Oe = (e2) => e2.endsWith("%") && z(e2.slice(0, -1));
  var l = (e2) => se.test(e2);
  var A = (e2) => Ee.test(e2);
  var We = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
  var $e = (e2) => M(e2, We, ie);
  var De = (e2) => M(e2, "position", ie);
  var He = /* @__PURE__ */ new Set(["image", "url"]);
  var Fe = (e2) => M(e2, He, qe);
  var Ue = (e2) => M(e2, "", Ze);
  var I = () => true;
  var M = (e2, r, t) => {
    let o = se.exec(e2);
    return o ? o[1] ? typeof r == "string" ? o[1] === r : r.has(o[1]) : t(o[2]) : false;
  };
  var Ke = (e2) => Le.test(e2) && !Ve.test(e2);
  var ie = () => false;
  var Ze = (e2) => Ge.test(e2);
  var qe = (e2) => je.test(e2);
  var Ye = () => {
    let e2 = f("colors"), r = f("spacing"), t = f("blur"), o = f("brightness"), s = f("borderColor"), n2 = f("borderRadius"), a = f("borderSpacing"), i = f("borderWidth"), d = f("contrast"), c = f("grayscale"), u = f("hueRotate"), g = f("invert"), m = f("gap"), v2 = f("gradientColorStops"), w2 = f("gradientColorStopPositions"), h2 = f("inset"), p = f("margin"), x2 = f("opacity"), C = f("padding"), N2 = f("saturate"), P3 = f("scale"), L = f("sepia"), K2 = f("skew"), Z = f("space"), q = f("translate"), W2 = () => ["auto", "contain", "none"], $2 = () => ["auto", "hidden", "clip", "visible", "scroll"], D2 = () => ["auto", l, r], b2 = () => [l, r], Y2 = () => ["", k, R], V = () => ["auto", z, l], J2 = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], G3 = () => ["solid", "dashed", "dotted", "double", "none"], X2 = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], H2 = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], T3 = () => ["", "0", l], Q = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], S3 = () => [z, l];
    return { cacheSize: 500, separator: ":", theme: { colors: [I], spacing: [k, R], blur: ["none", "", A, l], brightness: S3(), borderColor: [e2], borderRadius: ["none", "", "full", A, l], borderSpacing: b2(), borderWidth: Y2(), contrast: S3(), grayscale: T3(), hueRotate: S3(), invert: T3(), gap: b2(), gradientColorStops: [e2], gradientColorStopPositions: [Oe, R], inset: D2(), margin: D2(), opacity: S3(), padding: b2(), saturate: S3(), scale: S3(), sepia: T3(), skew: S3(), space: b2(), translate: b2() }, classGroups: { aspect: [{ aspect: ["auto", "square", "video", l] }], container: ["container"], columns: [{ columns: [A] }], "break-after": [{ "break-after": Q() }], "break-before": [{ "break-before": Q() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], float: [{ float: ["right", "left", "none", "start", "end"] }], clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: [...J2(), l] }], overflow: [{ overflow: $2() }], "overflow-x": [{ "overflow-x": $2() }], "overflow-y": [{ "overflow-y": $2() }], overscroll: [{ overscroll: W2() }], "overscroll-x": [{ "overscroll-x": W2() }], "overscroll-y": [{ "overscroll-y": W2() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: [h2] }], "inset-x": [{ "inset-x": [h2] }], "inset-y": [{ "inset-y": [h2] }], start: [{ start: [h2] }], end: [{ end: [h2] }], top: [{ top: [h2] }], right: [{ right: [h2] }], bottom: [{ bottom: [h2] }], left: [{ left: [h2] }], visibility: ["visible", "invisible", "collapse"], z: [{ z: ["auto", B, l] }], basis: [{ basis: D2() }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }], flex: [{ flex: ["1", "auto", "initial", "none", l] }], grow: [{ grow: T3() }], shrink: [{ shrink: T3() }], order: [{ order: ["first", "last", "none", B, l] }], "grid-cols": [{ "grid-cols": [I] }], "col-start-end": [{ col: ["auto", { span: ["full", B, l] }, l] }], "col-start": [{ "col-start": V() }], "col-end": [{ "col-end": V() }], "grid-rows": [{ "grid-rows": [I] }], "row-start-end": [{ row: ["auto", { span: [B, l] }, l] }], "row-start": [{ "row-start": V() }], "row-end": [{ "row-end": V() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", l] }], "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", l] }], gap: [{ gap: [m] }], "gap-x": [{ "gap-x": [m] }], "gap-y": [{ "gap-y": [m] }], "justify-content": [{ justify: ["normal", ...H2()] }], "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }], "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }], "align-content": [{ content: ["normal", ...H2(), "baseline"] }], "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }], "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }], "place-content": [{ "place-content": [...H2(), "baseline"] }], "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }], "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }], p: [{ p: [C] }], px: [{ px: [C] }], py: [{ py: [C] }], ps: [{ ps: [C] }], pe: [{ pe: [C] }], pt: [{ pt: [C] }], pr: [{ pr: [C] }], pb: [{ pb: [C] }], pl: [{ pl: [C] }], m: [{ m: [p] }], mx: [{ mx: [p] }], my: [{ my: [p] }], ms: [{ ms: [p] }], me: [{ me: [p] }], mt: [{ mt: [p] }], mr: [{ mr: [p] }], mb: [{ mb: [p] }], ml: [{ ml: [p] }], "space-x": [{ "space-x": [Z] }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": [Z] }], "space-y-reverse": ["space-y-reverse"], w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", l, r] }], "min-w": [{ "min-w": [l, r, "min", "max", "fit"] }], "max-w": [{ "max-w": [l, r, "none", "full", "min", "max", "fit", "prose", { screen: [A] }, A] }], h: [{ h: [l, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }], "min-h": [{ "min-h": [l, r, "min", "max", "fit", "svh", "lvh", "dvh"] }], "max-h": [{ "max-h": [l, r, "min", "max", "fit", "svh", "lvh", "dvh"] }], size: [{ size: [l, r, "auto", "min", "max", "fit"] }], "font-size": [{ text: ["base", A, R] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", F] }], "font-family": [{ font: [I] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractions"], tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", l] }], "line-clamp": [{ "line-clamp": ["none", z, F] }], leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", k, l] }], "list-image": [{ "list-image": ["none", l] }], "list-style-type": [{ list: ["none", "disc", "decimal", l] }], "list-style-position": [{ list: ["inside", "outside"] }], "placeholder-color": [{ placeholder: [e2] }], "placeholder-opacity": [{ "placeholder-opacity": [x2] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "text-color": [{ text: [e2] }], "text-opacity": [{ "text-opacity": [x2] }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [...G3(), "wavy"] }], "text-decoration-thickness": [{ decoration: ["auto", "from-font", k, R] }], "underline-offset": [{ "underline-offset": ["auto", k, l] }], "text-decoration-color": [{ decoration: [e2] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }], indent: [{ indent: b2() }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", l] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", l] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-opacity": [{ "bg-opacity": [x2] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: [...J2(), De] }], "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }], "bg-size": [{ bg: ["auto", "cover", "contain", $e] }], "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, Fe] }], "bg-color": [{ bg: [e2] }], "gradient-from-pos": [{ from: [w2] }], "gradient-via-pos": [{ via: [w2] }], "gradient-to-pos": [{ to: [w2] }], "gradient-from": [{ from: [v2] }], "gradient-via": [{ via: [v2] }], "gradient-to": [{ to: [v2] }], rounded: [{ rounded: [n2] }], "rounded-s": [{ "rounded-s": [n2] }], "rounded-e": [{ "rounded-e": [n2] }], "rounded-t": [{ "rounded-t": [n2] }], "rounded-r": [{ "rounded-r": [n2] }], "rounded-b": [{ "rounded-b": [n2] }], "rounded-l": [{ "rounded-l": [n2] }], "rounded-ss": [{ "rounded-ss": [n2] }], "rounded-se": [{ "rounded-se": [n2] }], "rounded-ee": [{ "rounded-ee": [n2] }], "rounded-es": [{ "rounded-es": [n2] }], "rounded-tl": [{ "rounded-tl": [n2] }], "rounded-tr": [{ "rounded-tr": [n2] }], "rounded-br": [{ "rounded-br": [n2] }], "rounded-bl": [{ "rounded-bl": [n2] }], "border-w": [{ border: [i] }], "border-w-x": [{ "border-x": [i] }], "border-w-y": [{ "border-y": [i] }], "border-w-s": [{ "border-s": [i] }], "border-w-e": [{ "border-e": [i] }], "border-w-t": [{ "border-t": [i] }], "border-w-r": [{ "border-r": [i] }], "border-w-b": [{ "border-b": [i] }], "border-w-l": [{ "border-l": [i] }], "border-opacity": [{ "border-opacity": [x2] }], "border-style": [{ border: [...G3(), "hidden"] }], "divide-x": [{ "divide-x": [i] }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": [i] }], "divide-y-reverse": ["divide-y-reverse"], "divide-opacity": [{ "divide-opacity": [x2] }], "divide-style": [{ divide: G3() }], "border-color": [{ border: [s] }], "border-color-x": [{ "border-x": [s] }], "border-color-y": [{ "border-y": [s] }], "border-color-s": [{ "border-s": [s] }], "border-color-e": [{ "border-e": [s] }], "border-color-t": [{ "border-t": [s] }], "border-color-r": [{ "border-r": [s] }], "border-color-b": [{ "border-b": [s] }], "border-color-l": [{ "border-l": [s] }], "divide-color": [{ divide: [s] }], "outline-style": [{ outline: ["", ...G3()] }], "outline-offset": [{ "outline-offset": [k, l] }], "outline-w": [{ outline: [k, R] }], "outline-color": [{ outline: [e2] }], "ring-w": [{ ring: Y2() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: [e2] }], "ring-opacity": [{ "ring-opacity": [x2] }], "ring-offset-w": [{ "ring-offset": [k, R] }], "ring-offset-color": [{ "ring-offset": [e2] }], shadow: [{ shadow: ["", "inner", "none", A, Ue] }], "shadow-color": [{ shadow: [I] }], opacity: [{ opacity: [x2] }], "mix-blend": [{ "mix-blend": [...X2(), "plus-lighter", "plus-darker"] }], "bg-blend": [{ "bg-blend": X2() }], filter: [{ filter: ["", "none"] }], blur: [{ blur: [t] }], brightness: [{ brightness: [o] }], contrast: [{ contrast: [d] }], "drop-shadow": [{ "drop-shadow": ["", "none", A, l] }], grayscale: [{ grayscale: [c] }], "hue-rotate": [{ "hue-rotate": [u] }], invert: [{ invert: [g] }], saturate: [{ saturate: [N2] }], sepia: [{ sepia: [L] }], "backdrop-filter": [{ "backdrop-filter": ["", "none"] }], "backdrop-blur": [{ "backdrop-blur": [t] }], "backdrop-brightness": [{ "backdrop-brightness": [o] }], "backdrop-contrast": [{ "backdrop-contrast": [d] }], "backdrop-grayscale": [{ "backdrop-grayscale": [c] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }], "backdrop-invert": [{ "backdrop-invert": [g] }], "backdrop-opacity": [{ "backdrop-opacity": [x2] }], "backdrop-saturate": [{ "backdrop-saturate": [N2] }], "backdrop-sepia": [{ "backdrop-sepia": [L] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": [a] }], "border-spacing-x": [{ "border-spacing-x": [a] }], "border-spacing-y": [{ "border-spacing-y": [a] }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", l] }], duration: [{ duration: S3() }], ease: [{ ease: ["linear", "in", "out", "in-out", l] }], delay: [{ delay: S3() }], animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", l] }], transform: [{ transform: ["", "gpu", "none"] }], scale: [{ scale: [P3] }], "scale-x": [{ "scale-x": [P3] }], "scale-y": [{ "scale-y": [P3] }], rotate: [{ rotate: [B, l] }], "translate-x": [{ "translate-x": [q] }], "translate-y": [{ "translate-y": [q] }], "skew-x": [{ "skew-x": [K2] }], "skew-y": [{ "skew-y": [K2] }], "transform-origin": [{ origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", l] }], accent: [{ accent: ["auto", e2] }], appearance: [{ appearance: ["none", "auto"] }], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", l] }], "caret-color": [{ caret: [e2] }], "pointer-events": [{ "pointer-events": ["none", "auto"] }], resize: [{ resize: ["none", "y", "x", ""] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scroll-m": [{ "scroll-m": b2() }], "scroll-mx": [{ "scroll-mx": b2() }], "scroll-my": [{ "scroll-my": b2() }], "scroll-ms": [{ "scroll-ms": b2() }], "scroll-me": [{ "scroll-me": b2() }], "scroll-mt": [{ "scroll-mt": b2() }], "scroll-mr": [{ "scroll-mr": b2() }], "scroll-mb": [{ "scroll-mb": b2() }], "scroll-ml": [{ "scroll-ml": b2() }], "scroll-p": [{ "scroll-p": b2() }], "scroll-px": [{ "scroll-px": b2() }], "scroll-py": [{ "scroll-py": b2() }], "scroll-ps": [{ "scroll-ps": b2() }], "scroll-pe": [{ "scroll-pe": b2() }], "scroll-pt": [{ "scroll-pt": b2() }], "scroll-pr": [{ "scroll-pr": b2() }], "scroll-pb": [{ "scroll-pb": b2() }], "scroll-pl": [{ "scroll-pl": b2() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "manipulation"] }], "touch-x": [{ "touch-pan": ["x", "left", "right"] }], "touch-y": [{ "touch-pan": ["y", "up", "down"] }], "touch-pz": ["touch-pinch-zoom"], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", l] }], fill: [{ fill: [e2, "none"] }], "stroke-w": [{ stroke: [k, R, F] }], stroke: [{ stroke: [e2, "none"] }], sr: ["sr-only", "not-sr-only"], "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }] }, conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], size: ["w", "h"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], "line-clamp": ["display", "overflow"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"], touch: ["touch-x", "touch-y", "touch-pz"], "touch-x": ["touch"], "touch-y": ["touch"], "touch-pz": ["touch"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] } };
  };
  var ae = Be(Ye);
  function _(...e2) {
    return ae(j(e2));
  }
  function le(e2, r) {
    if (typeof e2 == "function") return e2(r);
    e2 != null && (e2.current = r);
  }
  function ce(...e2) {
    return (r) => {
      let t = false, o = e2.map((s) => {
        let n2 = le(s, r);
        return !t && typeof n2 == "function" && (t = true), n2;
      });
      if (t) return () => {
        for (let s = 0; s < o.length; s++) {
          let n2 = o[s];
          typeof n2 == "function" ? n2() : le(e2[s], null);
        }
      };
    };
  }
  var Xe = /* @__PURE__ */ Symbol.for("react.lazy");
  var O = y[" use ".trim().toString()];
  function Qe(e2) {
    return typeof e2 == "object" && e2 !== null && "then" in e2;
  }
  function ue(e2) {
    return e2 != null && typeof e2 == "object" && "$$typeof" in e2 && e2.$$typeof === Xe && "_payload" in e2 && Qe(e2._payload);
  }
  function et(e2) {
    let r = tt(e2), t = y.forwardRef((o, s) => {
      let { children: n2, ...a } = o;
      ue(n2) && typeof O == "function" && (n2 = O(n2._payload));
      let i = y.Children.toArray(n2), d = i.find(ot);
      if (d) {
        let c = d.props.children, u = i.map((g) => g === d ? y.Children.count(c) > 1 ? y.Children.only(null) : y.isValidElement(c) ? c.props.children : null : g);
        return (0, import_jsx_runtime.jsx)(r, { ...a, ref: s, children: y.isValidElement(c) ? y.cloneElement(c, void 0, u) : null });
      }
      return (0, import_jsx_runtime.jsx)(r, { ...a, ref: s, children: n2 });
    });
    return t.displayName = `${e2}.Slot`, t;
  }
  var E = et("Slot");
  function tt(e2) {
    let r = y.forwardRef((t, o) => {
      let { children: s, ...n2 } = t;
      if (ue(s) && typeof O == "function" && (s = O(s._payload)), y.isValidElement(s)) {
        let a = st(s), i = nt(n2, s.props);
        return s.type !== y.Fragment && (i.ref = o ? ce(o, a) : a), y.cloneElement(s, i);
      }
      return y.Children.count(s) > 1 ? y.Children.only(null) : null;
    });
    return r.displayName = `${e2}.SlotClone`, r;
  }
  var rt = /* @__PURE__ */ Symbol("radix.slottable");
  function ot(e2) {
    return y.isValidElement(e2) && typeof e2.type == "function" && "__radixId" in e2.type && e2.type.__radixId === rt;
  }
  function nt(e2, r) {
    let t = { ...r };
    for (let o in r) {
      let s = e2[o], n2 = r[o];
      /^on[A-Z]/.test(o) ? s && n2 ? t[o] = (...i) => {
        let d = n2(...i);
        return s(...i), d;
      } : s && (t[o] = s) : o === "style" ? t[o] = { ...s, ...n2 } : o === "className" && (t[o] = [s, n2].filter(Boolean).join(" "));
    }
    return { ...e2, ...t };
  }
  function st(e2) {
    let r = Object.getOwnPropertyDescriptor(e2.props, "ref")?.get, t = r && "isReactWarning" in r && r.isReactWarning;
    return t ? e2.ref : (r = Object.getOwnPropertyDescriptor(e2, "ref")?.get, t = r && "isReactWarning" in r && r.isReactWarning, t ? e2.props.ref : e2.props.ref || e2.ref);
  }
  var pe = (e2) => typeof e2 == "boolean" ? `${e2}` : e2 === 0 ? "0" : e2;
  var fe = j;
  var be = (e2, r) => (t) => {
    var o;
    if (r?.variants == null) return fe(e2, t?.class, t?.className);
    let { variants: s, defaultVariants: n2 } = r, a = Object.keys(s).map((c) => {
      let u = t?.[c], g = n2?.[c];
      if (u === null) return null;
      let m = pe(u) || pe(g);
      return s[c][m];
    }), i = t && Object.entries(t).reduce((c, u) => {
      let [g, m] = u;
      return m === void 0 || (c[g] = m), c;
    }, {}), d = r == null || (o = r.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((c, u) => {
      let { class: g, className: m, ...v2 } = u;
      return Object.entries(v2).every((w2) => {
        let [h2, p] = w2;
        return Array.isArray(p) ? p.includes({ ...n2, ...i }[h2]) : { ...n2, ...i }[h2] === p;
      }) ? [...c, g, m] : c;
    }, []);
    return fe(e2, a, d, t?.class, t?.className);
  };
  var at = be("inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", { variants: { variant: { default: "border border-border bg-card text-card-foreground shadow-sm hover:bg-muted", primary: "bg-foreground text-background hover:bg-foreground/90", destructive: "bg-red-600 text-white hover:bg-red-700", outline: "border border-border bg-transparent text-textSecondary hover:bg-muted hover:text-textPrimary", secondary: "bg-secondary text-textPrimary hover:bg-secondary/80", ghost: "text-textSecondary hover:bg-muted hover:text-textPrimary", link: "text-textSecondary underline-offset-4 hover:underline hover:text-textPrimary", danger: "bg-destructive/10 text-destructive hover:bg-destructive/20", destructiveOutline: "border border-destructive/40 bg-card text-destructive shadow-sm hover:bg-destructive/5" }, size: { default: "h-10 px-4 py-2 rounded-full", sm: "h-8 px-3 text-xs rounded-full", lg: "h-11 px-6 rounded-full", icon: "h-9 w-9 rounded-lg", control: "h-8 px-4 rounded font-normal", controlIcon: "h-8 w-8 rounded" } }, defaultVariants: { variant: "default", size: "default" } });
  var ge = (0, import_react.forwardRef)(({ className: e2, variant: r, size: t, asChild: o = false, ...s }, n2) => (0, import_jsx_runtime2.jsx)(o ? E : "button", { className: _(at({ variant: r, size: t, className: e2 })), ref: n2, ...s }));
  ge.displayName = "Button";
  var ct = { primary: "border-ds-ink bg-ds-ink text-ds-page shadow-ds-control", secondary: "border-ds-hairline bg-ds-white text-ds-ink shadow-ds-control", ghost: "border-transparent bg-transparent text-ds-ink", destructive: "border-ds-redBorder bg-ds-white text-ds-red shadow-ds-control", success: "border-ds-teal bg-ds-white text-ds-teal shadow-ds-control" };
  function dt({ variant: e2 = "primary", compact: r = false, fullWidth: t = false, large: o = false, mobileLarge: s = false, className: n2 }) {
    return _("box-border inline-flex h-8 cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap rounded border font-text text-[13px] font-normal leading-none tracking-[-0.01em] transition-[background-color,border-color,color,transform] [transition-duration:120ms]", "hover:scale-105 active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ds-ink4", "disabled:cursor-default disabled:scale-100 disabled:border-ds-hairline disabled:bg-transparent disabled:text-ds-ink4 disabled:shadow-none", r ? "px-3" : "px-3 md:px-4", t && "flex w-full hover:scale-[1.02]", o && "h-[52px] rounded-lg text-[15px]", s && "max-md:flex max-md:h-[52px] max-md:w-full max-md:rounded-lg max-md:text-[15px] max-md:hover:scale-[1.02]", ct[e2], n2);
  }
  var he = (0, import_react2.forwardRef)(({ variant: e2, compact: r, fullWidth: t, large: o, mobileLarge: s, className: n2, asChild: a = false, iconBefore: i, iconAfter: d, type: c = "button", children: u, ...g }, m) => {
    let v2 = dt({ variant: e2, compact: r, fullWidth: t, large: o, mobileLarge: s, className: n2 });
    return a ? (0, import_jsx_runtime3.jsx)(E, { ref: m, className: v2, ...g, children: u }) : (0, import_jsx_runtime3.jsxs)("button", { ref: m, type: c, className: v2, ...g, children: [i, u, d] });
  });
  he.displayName = "DsButton";
  var ye = (0, import_react2.forwardRef)(({ label: e2, className: r, asChild: t = false, type: o = "button", ...s }, n2) => (0, import_jsx_runtime3.jsx)(t ? E : "button", { ref: n2, type: t ? void 0 : o, "aria-label": e2, title: e2, className: _("inline-flex h-8 w-8 flex-none cursor-pointer items-center justify-center rounded border-0 bg-transparent p-2 leading-none text-ds-ink transition-colors [transition-duration:120ms] hover:bg-ds-hover active:bg-ds-hoverStrong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ds-ink4 disabled:cursor-default disabled:bg-transparent disabled:text-ds-ink4 [&_svg]:h-4 [&_svg]:w-4", r), ...s }));
  ye.displayName = "DsIconButton";

  // ../../opt/files/kit/library.mjs
  var import_react3 = __toESM(require_react(), 1);
  var import_react4 = __toESM(require_react(), 1);
  var import_react5 = __toESM(require_react(), 1);
  var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
  var import_react6 = __toESM(require_react(), 1);
  var import_react7 = __toESM(require_react(), 1);
  var import_react8 = __toESM(require_react(), 1);
  var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
  var import_react9 = __toESM(require_react(), 1);
  var import_react10 = __toESM(require_react(), 1);
  var import_react11 = __toESM(require_react(), 1);
  var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
  var import_react12 = __toESM(require_react(), 1);
  var import_react13 = __toESM(require_react(), 1);
  var import_react14 = __toESM(require_react(), 1);
  var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
  var import_react15 = __toESM(require_react(), 1);
  var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
  var import_react16 = __toESM(require_react(), 1);
  var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
  var mu = Object.create;
  var Mo = Object.defineProperty;
  var xu = Object.getOwnPropertyDescriptor;
  var Lu = Object.getOwnPropertyNames;
  var hu = Object.getPrototypeOf;
  var gu = Object.prototype.hasOwnProperty;
  var Iu = (e2, a) => () => (a || e2((a = { exports: {} }).exports, a), a.exports);
  var Cu = (e2, a, t, o) => {
    if (a && typeof a == "object" || typeof a == "function") for (let r of Lu(a)) !gu.call(e2, r) && r !== t && Mo(e2, r, { get: () => a[r], enumerable: !(o = xu(a, r)) || o.enumerable });
    return e2;
  };
  var Ao = (e2, a, t) => (t = e2 != null ? mu(hu(e2)) : {}, Cu(a || !e2 || !e2.__esModule ? Mo(t, "default", { value: e2, enumerable: true }) : t, e2));
  var oo = Iu((Lc, Wa) => {
    (function() {
      "use strict";
      var e2 = {}.hasOwnProperty;
      function a() {
        for (var r = "", u = 0; u < arguments.length; u++) {
          var l2 = arguments[u];
          l2 && (r = o(r, t(l2)));
        }
        return r;
      }
      function t(r) {
        if (typeof r == "string" || typeof r == "number") return r;
        if (typeof r != "object") return "";
        if (Array.isArray(r)) return a.apply(null, r);
        if (r.toString !== Object.prototype.toString && !r.toString.toString().includes("[native code]")) return r.toString();
        var u = "";
        for (var l2 in r) e2.call(r, l2) && r[l2] && (u = o(u, l2));
        return u;
      }
      function o(r, u) {
        return u ? r ? r + " " + u : r + u : r;
      }
      typeof Wa < "u" && Wa.exports ? (a.default = a, Wa.exports = a) : typeof define == "function" && typeof define.amd == "object" && define.amd ? define("classnames", [], function() {
        return a;
      }) : window.classNames = a;
    })();
  });
  function wu({ children: e2, width: a = "fluid", className: t, ...o }) {
    return (0, import_jsx_runtime4.jsx)("main", { ...o, className: t ? `file-card ${t}` : "file-card", "data-width": a, children: e2 });
  }
  function ue2(e2, a) {
    return e2 == null || a == null ? NaN : e2 < a ? -1 : e2 > a ? 1 : e2 >= a ? 0 : NaN;
  }
  function et2(e2, a) {
    return e2 == null || a == null ? NaN : a < e2 ? -1 : a > e2 ? 1 : a >= e2 ? 0 : NaN;
  }
  function La(e2) {
    let a, t, o;
    e2.length !== 2 ? (a = ue2, t = (d, s) => ue2(e2(d), s), o = (d, s) => e2(d) - s) : (a = e2 === ue2 || e2 === et2 ? e2 : Wu, t = e2, o = e2);
    function r(d, s, f2 = 0, n2 = d.length) {
      if (f2 < n2) {
        if (a(s, s) !== 0) return n2;
        do {
          let i = f2 + n2 >>> 1;
          t(d[i], s) < 0 ? f2 = i + 1 : n2 = i;
        } while (f2 < n2);
      }
      return f2;
    }
    function u(d, s, f2 = 0, n2 = d.length) {
      if (f2 < n2) {
        if (a(s, s) !== 0) return n2;
        do {
          let i = f2 + n2 >>> 1;
          t(d[i], s) <= 0 ? f2 = i + 1 : n2 = i;
        } while (f2 < n2);
      }
      return f2;
    }
    function l2(d, s, f2 = 0, n2 = d.length) {
      let i = r(d, s, f2, n2 - 1);
      return i > f2 && o(d[i - 1], s) > -o(d[i], s) ? i - 1 : i;
    }
    return { left: r, center: l2, right: u };
  }
  function Wu() {
    return 0;
  }
  function at2(e2) {
    return e2 === null ? NaN : +e2;
  }
  var Bo = La(ue2);
  var Ro = Bo.right;
  var Vu = Bo.left;
  var zu = La(at2).center;
  var ot2 = Math.sqrt(50);
  var rt2 = Math.sqrt(10);
  var ut2 = Math.sqrt(2);
  function X(e2, a, t) {
    e2.prototype = a.prototype = t, t.constructor = e2;
  }
  function $(e2, a) {
    var t = Object.create(e2.prototype);
    for (var o in a) t[o] = a[o];
    return t;
  }
  function H() {
  }
  var _2 = 0.7;
  var se2 = 1 / _2;
  var ye2 = "\\s*([+-]?\\d+)\\s*";
  var Ve2 = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
  var U2 = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
  var $u = /^#([0-9a-f]{3,8})$/;
  var _u = new RegExp(`^rgb\\(${ye2},${ye2},${ye2}\\)$`);
  var Yu = new RegExp(`^rgb\\(${U2},${U2},${U2}\\)$`);
  var Qu = new RegExp(`^rgba\\(${ye2},${ye2},${ye2},${Ve2}\\)$`);
  var Ju = new RegExp(`^rgba\\(${U2},${U2},${U2},${Ve2}\\)$`);
  var ju = new RegExp(`^hsl\\(${Ve2},${U2},${U2}\\)$`);
  var el = new RegExp(`^hsla\\(${Ve2},${U2},${U2},${Ve2}\\)$`);
  var qo = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
  X(H, Y, { copy(e2) {
    return Object.assign(new this.constructor(), this, e2);
  }, displayable() {
    return this.rgb().displayable();
  }, hex: Uo, formatHex: Uo, formatHex8: al, formatHsl: tl, formatRgb: Ho, toString: Ho });
  function Uo() {
    return this.rgb().formatHex();
  }
  function al() {
    return this.rgb().formatHex8();
  }
  function tl() {
    return Vo(this).formatHsl();
  }
  function Ho() {
    return this.rgb().formatRgb();
  }
  function Y(e2) {
    var a, t;
    return e2 = (e2 + "").trim().toLowerCase(), (a = $u.exec(e2)) ? (t = a[1].length, a = parseInt(a[1], 16), t === 6 ? Oo(a) : t === 3 ? new v(a >> 8 & 15 | a >> 4 & 240, a >> 4 & 15 | a & 240, (a & 15) << 4 | a & 15, 1) : t === 8 ? Sa(a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, (a & 255) / 255) : t === 4 ? Sa(a >> 12 & 15 | a >> 8 & 240, a >> 8 & 15 | a >> 4 & 240, a >> 4 & 15 | a & 240, ((a & 15) << 4 | a & 15) / 255) : null) : (a = _u.exec(e2)) ? new v(a[1], a[2], a[3], 1) : (a = Yu.exec(e2)) ? new v(a[1] * 255 / 100, a[2] * 255 / 100, a[3] * 255 / 100, 1) : (a = Qu.exec(e2)) ? Sa(a[1], a[2], a[3], a[4]) : (a = Ju.exec(e2)) ? Sa(a[1] * 255 / 100, a[2] * 255 / 100, a[3] * 255 / 100, a[4]) : (a = ju.exec(e2)) ? Go(a[1], a[2] / 100, a[3] / 100, 1) : (a = el.exec(e2)) ? Go(a[1], a[2] / 100, a[3] / 100, a[4]) : qo.hasOwnProperty(e2) ? Oo(qo[e2]) : e2 === "transparent" ? new v(NaN, NaN, NaN, 0) : null;
  }
  function Oo(e2) {
    return new v(e2 >> 16 & 255, e2 >> 8 & 255, e2 & 255, 1);
  }
  function Sa(e2, a, t, o) {
    return o <= 0 && (e2 = a = t = NaN), new v(e2, a, t, o);
  }
  function ze2(e2) {
    return e2 instanceof H || (e2 = Y(e2)), e2 ? (e2 = e2.rgb(), new v(e2.r, e2.g, e2.b, e2.opacity)) : new v();
  }
  function be2(e2, a, t, o) {
    return arguments.length === 1 ? ze2(e2) : new v(e2, a, t, o ?? 1);
  }
  function v(e2, a, t, o) {
    this.r = +e2, this.g = +a, this.b = +t, this.opacity = +o;
  }
  X(v, be2, $(H, { brighter(e2) {
    return e2 = e2 == null ? se2 : Math.pow(se2, e2), new v(this.r * e2, this.g * e2, this.b * e2, this.opacity);
  }, darker(e2) {
    return e2 = e2 == null ? _2 : Math.pow(_2, e2), new v(this.r * e2, this.g * e2, this.b * e2, this.opacity);
  }, rgb() {
    return this;
  }, clamp() {
    return new v(de2(this.r), de2(this.g), de2(this.b), ba(this.opacity));
  }, displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  }, hex: No, formatHex: No, formatHex8: ol, formatRgb: Eo, toString: Eo }));
  function No() {
    return `#${le2(this.r)}${le2(this.g)}${le2(this.b)}`;
  }
  function ol() {
    return `#${le2(this.r)}${le2(this.g)}${le2(this.b)}${le2((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
  }
  function Eo() {
    let e2 = ba(this.opacity);
    return `${e2 === 1 ? "rgb(" : "rgba("}${de2(this.r)}, ${de2(this.g)}, ${de2(this.b)}${e2 === 1 ? ")" : `, ${e2})`}`;
  }
  function ba(e2) {
    return isNaN(e2) ? 1 : Math.max(0, Math.min(1, e2));
  }
  function de2(e2) {
    return Math.max(0, Math.min(255, Math.round(e2) || 0));
  }
  function le2(e2) {
    return e2 = de2(e2), (e2 < 16 ? "0" : "") + e2.toString(16);
  }
  function Go(e2, a, t, o) {
    return o <= 0 ? e2 = a = t = NaN : t <= 0 || t >= 1 ? e2 = a = NaN : a <= 0 && (e2 = NaN), new T(e2, a, t, o);
  }
  function Vo(e2) {
    if (e2 instanceof T) return new T(e2.h, e2.s, e2.l, e2.opacity);
    if (e2 instanceof H || (e2 = Y(e2)), !e2) return new T();
    if (e2 instanceof T) return e2;
    e2 = e2.rgb();
    var a = e2.r / 255, t = e2.g / 255, o = e2.b / 255, r = Math.min(a, t, o), u = Math.max(a, t, o), l2 = NaN, d = u - r, s = (u + r) / 2;
    return d ? (a === u ? l2 = (t - o) / d + (t < o) * 6 : t === u ? l2 = (o - a) / d + 2 : l2 = (a - t) / d + 4, d /= s < 0.5 ? u + r : 2 - u - r, l2 *= 60) : d = s > 0 && s < 1 ? 0 : l2, new T(l2, d, s, e2.opacity);
  }
  function Xe2(e2, a, t, o) {
    return arguments.length === 1 ? Vo(e2) : new T(e2, a, t, o ?? 1);
  }
  function T(e2, a, t, o) {
    this.h = +e2, this.s = +a, this.l = +t, this.opacity = +o;
  }
  X(T, Xe2, $(H, { brighter(e2) {
    return e2 = e2 == null ? se2 : Math.pow(se2, e2), new T(this.h, this.s, this.l * e2, this.opacity);
  }, darker(e2) {
    return e2 = e2 == null ? _2 : Math.pow(_2, e2), new T(this.h, this.s, this.l * e2, this.opacity);
  }, rgb() {
    var e2 = this.h % 360 + (this.h < 0) * 360, a = isNaN(e2) || isNaN(this.s) ? 0 : this.s, t = this.l, o = t + (t < 0.5 ? t : 1 - t) * a, r = 2 * t - o;
    return new v(dt2(e2 >= 240 ? e2 - 240 : e2 + 120, r, o), dt2(e2, r, o), dt2(e2 < 120 ? e2 + 240 : e2 - 120, r, o), this.opacity);
  }, clamp() {
    return new T(Wo(this.h), ya(this.s), ya(this.l), ba(this.opacity));
  }, displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  }, formatHsl() {
    let e2 = ba(this.opacity);
    return `${e2 === 1 ? "hsl(" : "hsla("}${Wo(this.h)}, ${ya(this.s) * 100}%, ${ya(this.l) * 100}%${e2 === 1 ? ")" : `, ${e2})`}`;
  } }));
  function Wo(e2) {
    return e2 = (e2 || 0) % 360, e2 < 0 ? e2 + 360 : e2;
  }
  function ya(e2) {
    return Math.max(0, Math.min(1, e2 || 0));
  }
  function dt2(e2, a, t) {
    return (e2 < 60 ? a + (t - a) * e2 / 60 : e2 < 180 ? t : e2 < 240 ? a + (t - a) * (240 - e2) / 60 : a) * 255;
  }
  var wa = Math.PI / 180;
  var ka = 180 / Math.PI;
  var Pa = 18;
  var zo = 0.96422;
  var Xo = 1;
  var Ko = 0.82521;
  var Zo = 4 / 29;
  var we2 = 6 / 29;
  var $o = 3 * we2 * we2;
  var rl = we2 * we2 * we2;
  function _o(e2) {
    if (e2 instanceof O2) return new O2(e2.l, e2.a, e2.b, e2.opacity);
    if (e2 instanceof K) return Yo(e2);
    e2 instanceof v || (e2 = ze2(e2));
    var a = it2(e2.r), t = it2(e2.g), o = it2(e2.b), r = st2((0.2225045 * a + 0.7168786 * t + 0.0606169 * o) / Xo), u, l2;
    return a === t && t === o ? u = l2 = r : (u = st2((0.4360747 * a + 0.3850649 * t + 0.1430804 * o) / zo), l2 = st2((0.0139322 * a + 0.0971045 * t + 0.7141733 * o) / Ko)), new O2(116 * r - 16, 500 * (u - r), 200 * (r - l2), e2.opacity);
  }
  function ke2(e2, a, t, o) {
    return arguments.length === 1 ? _o(e2) : new O2(e2, a, t, o ?? 1);
  }
  function O2(e2, a, t, o) {
    this.l = +e2, this.a = +a, this.b = +t, this.opacity = +o;
  }
  X(O2, ke2, $(H, { brighter(e2) {
    return new O2(this.l + Pa * (e2 ?? 1), this.a, this.b, this.opacity);
  }, darker(e2) {
    return new O2(this.l - Pa * (e2 ?? 1), this.a, this.b, this.opacity);
  }, rgb() {
    var e2 = (this.l + 16) / 116, a = isNaN(this.a) ? e2 : e2 + this.a / 500, t = isNaN(this.b) ? e2 : e2 - this.b / 200;
    return a = zo * ft(a), e2 = Xo * ft(e2), t = Ko * ft(t), new v(nt2(3.1338561 * a - 1.6168667 * e2 - 0.4906146 * t), nt2(-0.9787684 * a + 1.9161415 * e2 + 0.033454 * t), nt2(0.0719453 * a - 0.2289914 * e2 + 1.4052427 * t), this.opacity);
  } }));
  function st2(e2) {
    return e2 > rl ? Math.pow(e2, 1 / 3) : e2 / $o + Zo;
  }
  function ft(e2) {
    return e2 > we2 ? e2 * e2 * e2 : $o * (e2 - Zo);
  }
  function nt2(e2) {
    return 255 * (e2 <= 31308e-7 ? 12.92 * e2 : 1.055 * Math.pow(e2, 1 / 2.4) - 0.055);
  }
  function it2(e2) {
    return (e2 /= 255) <= 0.04045 ? e2 / 12.92 : Math.pow((e2 + 0.055) / 1.055, 2.4);
  }
  function ul(e2) {
    if (e2 instanceof K) return new K(e2.h, e2.c, e2.l, e2.opacity);
    if (e2 instanceof O2 || (e2 = _o(e2)), e2.a === 0 && e2.b === 0) return new K(NaN, 0 < e2.l && e2.l < 100 ? 0 : NaN, e2.l, e2.opacity);
    var a = Math.atan2(e2.b, e2.a) * ka;
    return new K(a < 0 ? a + 360 : a, Math.sqrt(e2.a * e2.a + e2.b * e2.b), e2.l, e2.opacity);
  }
  function Ke2(e2, a, t, o) {
    return arguments.length === 1 ? ul(e2) : new K(e2, a, t, o ?? 1);
  }
  function K(e2, a, t, o) {
    this.h = +e2, this.c = +a, this.l = +t, this.opacity = +o;
  }
  function Yo(e2) {
    if (isNaN(e2.h)) return new O2(e2.l, 0, 0, e2.opacity);
    var a = e2.h * wa;
    return new O2(e2.l, Math.cos(a) * e2.c, Math.sin(a) * e2.c, e2.opacity);
  }
  X(K, Ke2, $(H, { brighter(e2) {
    return new K(this.h, this.c, this.l + Pa * (e2 ?? 1), this.opacity);
  }, darker(e2) {
    return new K(this.h, this.c, this.l - Pa * (e2 ?? 1), this.opacity);
  }, rgb() {
    return Yo(this).rgb();
  } }));
  var er = -0.14861;
  var ct2 = 1.78277;
  var pt = -0.29227;
  var va = -0.90649;
  var Ze2 = 1.97294;
  var Qo = Ze2 * va;
  var Jo = Ze2 * ct2;
  var jo = ct2 * pt - va * er;
  function ll(e2) {
    if (e2 instanceof fe2) return new fe2(e2.h, e2.s, e2.l, e2.opacity);
    e2 instanceof v || (e2 = ze2(e2));
    var a = e2.r / 255, t = e2.g / 255, o = e2.b / 255, r = (jo * o + Qo * a - Jo * t) / (jo + Qo - Jo), u = o - r, l2 = (Ze2 * (t - r) - pt * u) / va, d = Math.sqrt(l2 * l2 + u * u) / (Ze2 * r * (1 - r)), s = d ? Math.atan2(l2, u) * ka - 120 : NaN;
    return new fe2(s < 0 ? s + 360 : s, d, r, e2.opacity);
  }
  function Pe2(e2, a, t, o) {
    return arguments.length === 1 ? ll(e2) : new fe2(e2, a, t, o ?? 1);
  }
  function fe2(e2, a, t, o) {
    this.h = +e2, this.s = +a, this.l = +t, this.opacity = +o;
  }
  X(fe2, Pe2, $(H, { brighter(e2) {
    return e2 = e2 == null ? se2 : Math.pow(se2, e2), new fe2(this.h, this.s, this.l * e2, this.opacity);
  }, darker(e2) {
    return e2 = e2 == null ? _2 : Math.pow(_2, e2), new fe2(this.h, this.s, this.l * e2, this.opacity);
  }, rgb() {
    var e2 = isNaN(this.h) ? 0 : (this.h + 120) * wa, a = +this.l, t = isNaN(this.s) ? 0 : this.s * a * (1 - a), o = Math.cos(e2), r = Math.sin(e2);
    return new v(255 * (a + t * (er * o + ct2 * r)), 255 * (a + t * (pt * o + va * r)), 255 * (a + t * (Ze2 * o)), this.opacity);
  } }));
  function mt(e2, a, t, o, r) {
    var u = e2 * e2, l2 = u * e2;
    return ((1 - 3 * e2 + 3 * u - l2) * a + (4 - 6 * u + 3 * l2) * t + (1 + 3 * e2 + 3 * u - 3 * l2) * o + l2 * r) / 6;
  }
  function ar(e2) {
    var a = e2.length - 1;
    return function(t) {
      var o = t <= 0 ? t = 0 : t >= 1 ? (t = 1, a - 1) : Math.floor(t * a), r = e2[o], u = e2[o + 1], l2 = o > 0 ? e2[o - 1] : 2 * r - u, d = o < a - 1 ? e2[o + 2] : 2 * u - r;
      return mt((t - o / a) * a, l2, r, u, d);
    };
  }
  function tr(e2) {
    var a = e2.length;
    return function(t) {
      var o = Math.floor(((t %= 1) < 0 ? ++t : t) * a), r = e2[(o + a - 1) % a], u = e2[o % a], l2 = e2[(o + 1) % a], d = e2[(o + 2) % a];
      return mt((t - o / a) * a, r, u, l2, d);
    };
  }
  var ve2 = (e2) => () => e2;
  function or(e2, a) {
    return function(t) {
      return e2 + t * a;
    };
  }
  function dl(e2, a, t) {
    return e2 = Math.pow(e2, t), a = Math.pow(a, t) - e2, t = 1 / t, function(o) {
      return Math.pow(e2 + o * a, t);
    };
  }
  function Me2(e2, a) {
    var t = a - e2;
    return t ? or(e2, t > 180 || t < -180 ? t - 360 * Math.round(t / 360) : t) : ve2(isNaN(e2) ? a : e2);
  }
  function rr(e2) {
    return (e2 = +e2) == 1 ? y2 : function(a, t) {
      return t - a ? dl(a, t, e2) : ve2(isNaN(a) ? t : a);
    };
  }
  function y2(e2, a) {
    var t = a - e2;
    return t ? or(e2, t) : ve2(isNaN(e2) ? a : e2);
  }
  var Ae2 = (function e(a) {
    var t = rr(a);
    function o(r, u) {
      var l2 = t((r = be2(r)).r, (u = be2(u)).r), d = t(r.g, u.g), s = t(r.b, u.b), f2 = y2(r.opacity, u.opacity);
      return function(n2) {
        return r.r = l2(n2), r.g = d(n2), r.b = s(n2), r.opacity = f2(n2), r + "";
      };
    }
    return o.gamma = e, o;
  })(1);
  function ur(e2) {
    return function(a) {
      var t = a.length, o = new Array(t), r = new Array(t), u = new Array(t), l2, d;
      for (l2 = 0; l2 < t; ++l2) d = be2(a[l2]), o[l2] = d.r || 0, r[l2] = d.g || 0, u[l2] = d.b || 0;
      return o = e2(o), r = e2(r), u = e2(u), d.opacity = 1, function(s) {
        return d.r = o(s), d.g = r(s), d.b = u(s), d + "";
      };
    };
  }
  var sl = ur(ar);
  var fl = ur(tr);
  var Lt = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
  var xt = new RegExp(Lt.source, "g");
  function $e2(e2, a) {
    return e2 = +e2, a = +a, function(t) {
      return Math.round(e2 * (1 - t) + a * t);
    };
  }
  function cr(e2) {
    return function(a, t) {
      var o = e2((a = Xe2(a)).h, (t = Xe2(t)).h), r = y2(a.s, t.s), u = y2(a.l, t.l), l2 = y2(a.opacity, t.opacity);
      return function(d) {
        return a.h = o(d), a.s = r(d), a.l = u(d), a.opacity = l2(d), a + "";
      };
    };
  }
  var ht = cr(Me2);
  var gt = cr(y2);
  function Ma(e2, a) {
    var t = y2((e2 = ke2(e2)).l, (a = ke2(a)).l), o = y2(e2.a, a.a), r = y2(e2.b, a.b), u = y2(e2.opacity, a.opacity);
    return function(l2) {
      return e2.l = t(l2), e2.a = o(l2), e2.b = r(l2), e2.opacity = u(l2), e2 + "";
    };
  }
  function pr(e2) {
    return function(a, t) {
      var o = e2((a = Ke2(a)).h, (t = Ke2(t)).h), r = y2(a.c, t.c), u = y2(a.l, t.l), l2 = y2(a.opacity, t.opacity);
      return function(d) {
        return a.h = o(d), a.c = r(d), a.l = u(d), a.opacity = l2(d), a + "";
      };
    };
  }
  var It = pr(Me2);
  var Ct = pr(y2);
  function mr(e2) {
    return (function a(t) {
      t = +t;
      function o(r, u) {
        var l2 = e2((r = Pe2(r)).h, (u = Pe2(u)).h), d = y2(r.s, u.s), s = y2(r.l, u.l), f2 = y2(r.opacity, u.opacity);
        return function(n2) {
          return r.h = l2(n2), r.s = d(n2), r.l = s(Math.pow(n2, t)), r.opacity = f2(n2), r + "";
        };
      }
      return o.gamma = a, o;
    })(1);
  }
  var St = mr(Me2);
  var yt = mr(y2);
  function hr(e2) {
    return Math.abs(e2 = Math.round(e2)) >= 1e21 ? e2.toLocaleString("en").replace(/,/g, "") : e2.toString(10);
  }
  function ie2(e2, a) {
    if ((t = (e2 = a ? e2.toExponential(a - 1) : e2.toExponential()).indexOf("e")) < 0) return null;
    var t, o = e2.slice(0, t);
    return [o.length > 1 ? o[0] + o.slice(2) : o, +e2.slice(t + 1)];
  }
  function N(e2) {
    return e2 = ie2(Math.abs(e2)), e2 ? e2[1] : NaN;
  }
  function gr(e2, a) {
    return function(t, o) {
      for (var r = t.length, u = [], l2 = 0, d = e2[0], s = 0; r > 0 && d > 0 && (s + d + 1 > o && (d = Math.max(1, o - s)), u.push(t.substring(r -= d, r + d)), !((s += d + 1) > o)); ) d = e2[l2 = (l2 + 1) % e2.length];
      return u.reverse().join(a);
    };
  }
  function Ir(e2) {
    return function(a) {
      return a.replace(/[0-9]/g, function(t) {
        return e2[+t];
      });
    };
  }
  var Ll = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
  function J(e2) {
    if (!(a = Ll.exec(e2))) throw new Error("invalid format: " + e2);
    var a;
    return new Aa({ fill: a[1], align: a[2], sign: a[3], symbol: a[4], zero: a[5], width: a[6], comma: a[7], precision: a[8] && a[8].slice(1), trim: a[9], type: a[10] });
  }
  J.prototype = Aa.prototype;
  function Aa(e2) {
    this.fill = e2.fill === void 0 ? " " : e2.fill + "", this.align = e2.align === void 0 ? ">" : e2.align + "", this.sign = e2.sign === void 0 ? "-" : e2.sign + "", this.symbol = e2.symbol === void 0 ? "" : e2.symbol + "", this.zero = !!e2.zero, this.width = e2.width === void 0 ? void 0 : +e2.width, this.comma = !!e2.comma, this.precision = e2.precision === void 0 ? void 0 : +e2.precision, this.trim = !!e2.trim, this.type = e2.type === void 0 ? "" : e2.type + "";
  }
  Aa.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
  };
  function Cr(e2) {
    e: for (var a = e2.length, t = 1, o = -1, r; t < a; ++t) switch (e2[t]) {
      case ".":
        o = r = t;
        break;
      case "0":
        o === 0 && (o = t), r = t;
        break;
      default:
        if (!+e2[t]) break e;
        o > 0 && (o = 0);
        break;
    }
    return o > 0 ? e2.slice(0, o) + e2.slice(r + 1) : e2;
  }
  var vt2;
  function Sr(e2, a) {
    var t = ie2(e2, a);
    if (!t) return e2 + "";
    var o = t[0], r = t[1], u = r - (vt2 = Math.max(-8, Math.min(8, Math.floor(r / 3))) * 3) + 1, l2 = o.length;
    return u === l2 ? o : u > l2 ? o + new Array(u - l2 + 1).join("0") : u > 0 ? o.slice(0, u) + "." + o.slice(u) : "0." + new Array(1 - u).join("0") + ie2(e2, Math.max(0, a + u - 1))[0];
  }
  function Mt(e2, a) {
    var t = ie2(e2, a);
    if (!t) return e2 + "";
    var o = t[0], r = t[1];
    return r < 0 ? "0." + new Array(-r).join("0") + o : o.length > r + 1 ? o.slice(0, r + 1) + "." + o.slice(r + 1) : o + new Array(r - o.length + 2).join("0");
  }
  var At = { "%": (e2, a) => (e2 * 100).toFixed(a), b: (e2) => Math.round(e2).toString(2), c: (e2) => e2 + "", d: hr, e: (e2, a) => e2.toExponential(a), f: (e2, a) => e2.toFixed(a), g: (e2, a) => e2.toPrecision(a), o: (e2) => Math.round(e2).toString(8), p: (e2, a) => Mt(e2 * 100, a), r: Mt, s: Sr, X: (e2) => Math.round(e2).toString(16).toUpperCase(), x: (e2) => Math.round(e2).toString(16) };
  function Ft(e2) {
    return e2;
  }
  var yr = Array.prototype.map;
  var br = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
  function wr(e2) {
    var a = e2.grouping === void 0 || e2.thousands === void 0 ? Ft : gr(yr.call(e2.grouping, Number), e2.thousands + ""), t = e2.currency === void 0 ? "" : e2.currency[0] + "", o = e2.currency === void 0 ? "" : e2.currency[1] + "", r = e2.decimal === void 0 ? "." : e2.decimal + "", u = e2.numerals === void 0 ? Ft : Ir(yr.call(e2.numerals, String)), l2 = e2.percent === void 0 ? "%" : e2.percent + "", d = e2.minus === void 0 ? "\u2212" : e2.minus + "", s = e2.nan === void 0 ? "NaN" : e2.nan + "";
    function f2(i) {
      i = J(i);
      var c = i.fill, p = i.align, L = i.sign, g = i.symbol, I2 = i.zero, P3 = i.width, R2 = i.comma, A2 = i.precision, Z = i.trim, m = i.type;
      m === "n" ? (R2 = true, m = "g") : At[m] || (A2 === void 0 && (A2 = 12), Z = true, m = "g"), (I2 || c === "0" && p === "=") && (I2 = true, c = "0", p = "=");
      var V = g === "$" ? t : g === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", cu = g === "$" ? o : /[%p]/.test(m) ? l2 : "", ko = At[m], pu = /[defgprs%]/.test(m);
      A2 = A2 === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, A2)) : Math.max(0, Math.min(20, A2));
      function Po(C) {
        var oe2 = V, D2 = cu, Ie2, vo, fa;
        if (m === "c") D2 = ko(C) + D2, C = "";
        else {
          C = +C;
          var na = C < 0 || 1 / C < 0;
          if (C = isNaN(C) ? s : ko(Math.abs(C), A2), Z && (C = Cr(C)), na && +C == 0 && L !== "+" && (na = false), oe2 = (na ? L === "(" ? L : d : L === "-" || L === "(" ? "" : L) + oe2, D2 = (m === "s" ? br[8 + vt2 / 3] : "") + D2 + (na && L === "(" ? ")" : ""), pu) {
            for (Ie2 = -1, vo = C.length; ++Ie2 < vo; ) if (fa = C.charCodeAt(Ie2), 48 > fa || fa > 57) {
              D2 = (fa === 46 ? r + C.slice(Ie2 + 1) : C.slice(Ie2)) + D2, C = C.slice(0, Ie2);
              break;
            }
          }
        }
        R2 && !I2 && (C = a(C, 1 / 0));
        var ia = oe2.length + C.length + D2.length, z2 = ia < P3 ? new Array(P3 - ia + 1).join(c) : "";
        switch (R2 && I2 && (C = a(z2 + C, z2.length ? P3 - D2.length : 1 / 0), z2 = ""), p) {
          case "<":
            C = oe2 + C + D2 + z2;
            break;
          case "=":
            C = oe2 + z2 + C + D2;
            break;
          case "^":
            C = z2.slice(0, ia = z2.length >> 1) + oe2 + C + D2 + z2.slice(ia);
            break;
          default:
            C = z2 + oe2 + C + D2;
            break;
        }
        return u(C);
      }
      return Po.toString = function() {
        return i + "";
      }, Po;
    }
    function n2(i, c) {
      var p = f2((i = J(i), i.type = "f", i)), L = Math.max(-8, Math.min(8, Math.floor(N(c) / 3))) * 3, g = Math.pow(10, -L), I2 = br[8 + L / 3];
      return function(P3) {
        return p(g * P3) + I2;
      };
    }
    return { format: f2, formatPrefix: n2 };
  }
  var Fa;
  var Ba;
  var Ra;
  Bt({ thousands: ",", grouping: [3], currency: ["$", ""] });
  function Bt(e2) {
    return Fa = wr(e2), Ba = Fa.format, Ra = Fa.formatPrefix, Fa;
  }
  var Ut = /* @__PURE__ */ new Date();
  var Ht = /* @__PURE__ */ new Date();
  function b(e2, a, t, o) {
    function r(u) {
      return e2(u = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+u)), u;
    }
    return r.floor = (u) => (e2(u = /* @__PURE__ */ new Date(+u)), u), r.ceil = (u) => (e2(u = new Date(u - 1)), a(u, 1), e2(u), u), r.round = (u) => {
      let l2 = r(u), d = r.ceil(u);
      return u - l2 < d - u ? l2 : d;
    }, r.offset = (u, l2) => (a(u = /* @__PURE__ */ new Date(+u), l2 == null ? 1 : Math.floor(l2)), u), r.range = (u, l2, d) => {
      let s = [];
      if (u = r.ceil(u), d = d == null ? 1 : Math.floor(d), !(u < l2) || !(d > 0)) return s;
      let f2;
      do
        s.push(f2 = /* @__PURE__ */ new Date(+u)), a(u, d), e2(u);
      while (f2 < u && u < l2);
      return s;
    }, r.filter = (u) => b((l2) => {
      if (l2 >= l2) for (; e2(l2), !u(l2); ) l2.setTime(l2 - 1);
    }, (l2, d) => {
      if (l2 >= l2) if (d < 0) for (; ++d <= 0; ) for (; a(l2, -1), !u(l2); ) ;
      else for (; --d >= 0; ) for (; a(l2, 1), !u(l2); ) ;
    }), t && (r.count = (u, l2) => (Ut.setTime(+u), Ht.setTime(+l2), e2(Ut), e2(Ht), Math.floor(t(Ut, Ht))), r.every = (u) => (u = Math.floor(u), !isFinite(u) || !(u > 0) ? null : u > 1 ? r.filter(o ? (l2) => o(l2) % u === 0 : (l2) => r.count(0, l2) % u === 0) : r)), r;
  }
  var ce2 = b((e2) => {
    e2.setTime(e2 - e2.getMilliseconds());
  }, (e2, a) => {
    e2.setTime(+e2 + a * 1e3);
  }, (e2, a) => (a - e2) / 1e3, (e2) => e2.getUTCSeconds());
  var kr = ce2.range;
  var Da = b((e2) => {
    e2.setTime(e2 - e2.getMilliseconds() - e2.getSeconds() * 1e3);
  }, (e2, a) => {
    e2.setTime(+e2 + a * 6e4);
  }, (e2, a) => (a - e2) / 6e4, (e2) => e2.getMinutes());
  var gl = Da.range;
  var Ta = b((e2) => {
    e2.setUTCSeconds(0, 0);
  }, (e2, a) => {
    e2.setTime(+e2 + a * 6e4);
  }, (e2, a) => (a - e2) / 6e4, (e2) => e2.getUTCMinutes());
  var Il = Ta.range;
  var qa = b((e2) => {
    e2.setTime(e2 - e2.getMilliseconds() - e2.getSeconds() * 1e3 - e2.getMinutes() * 6e4);
  }, (e2, a) => {
    e2.setTime(+e2 + a * 36e5);
  }, (e2, a) => (a - e2) / 36e5, (e2) => e2.getHours());
  var Cl = qa.range;
  var Ua = b((e2) => {
    e2.setUTCMinutes(0, 0, 0);
  }, (e2, a) => {
    e2.setTime(+e2 + a * 36e5);
  }, (e2, a) => (a - e2) / 36e5, (e2) => e2.getUTCHours());
  var Sl = Ua.range;
  var Ha = b((e2) => e2.setHours(0, 0, 0, 0), (e2, a) => e2.setDate(e2.getDate() + a), (e2, a) => (a - e2 - (a.getTimezoneOffset() - e2.getTimezoneOffset()) * 6e4) / 864e5, (e2) => e2.getDate() - 1);
  var yl = Ha.range;
  var Oa = b((e2) => {
    e2.setUTCHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setUTCDate(e2.getUTCDate() + a);
  }, (e2, a) => (a - e2) / 864e5, (e2) => e2.getUTCDate() - 1);
  var bl = Oa.range;
  var Pr = b((e2) => {
    e2.setUTCHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setUTCDate(e2.getUTCDate() + a);
  }, (e2, a) => (a - e2) / 864e5, (e2) => Math.floor(e2 / 864e5));
  var wl = Pr.range;
  function pe2(e2) {
    return b((a) => {
      a.setDate(a.getDate() - (a.getDay() + 7 - e2) % 7), a.setHours(0, 0, 0, 0);
    }, (a, t) => {
      a.setDate(a.getDate() + t * 7);
    }, (a, t) => (t - a - (t.getTimezoneOffset() - a.getTimezoneOffset()) * 6e4) / 6048e5);
  }
  var Ye2 = pe2(0);
  var vr = pe2(1);
  var Mr = pe2(2);
  var Ar = pe2(3);
  var Fr = pe2(4);
  var Br = pe2(5);
  var Rr = pe2(6);
  var Dr = Ye2.range;
  var Pl = vr.range;
  var vl = Mr.range;
  var Ml = Ar.range;
  var Al = Fr.range;
  var Fl = Br.range;
  var Bl = Rr.range;
  function me2(e2) {
    return b((a) => {
      a.setUTCDate(a.getUTCDate() - (a.getUTCDay() + 7 - e2) % 7), a.setUTCHours(0, 0, 0, 0);
    }, (a, t) => {
      a.setUTCDate(a.getUTCDate() + t * 7);
    }, (a, t) => (t - a) / 6048e5);
  }
  var Qe2 = me2(0);
  var Tr = me2(1);
  var qr = me2(2);
  var Ur = me2(3);
  var Hr = me2(4);
  var Or = me2(5);
  var Nr = me2(6);
  var Er = Qe2.range;
  var Rl = Tr.range;
  var Dl = qr.range;
  var Tl = Ur.range;
  var ql = Hr.range;
  var Ul = Or.range;
  var Hl = Nr.range;
  var Na = b((e2) => {
    e2.setDate(1), e2.setHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setMonth(e2.getMonth() + a);
  }, (e2, a) => a.getMonth() - e2.getMonth() + (a.getFullYear() - e2.getFullYear()) * 12, (e2) => e2.getMonth());
  var Ol = Na.range;
  var Ea = b((e2) => {
    e2.setUTCDate(1), e2.setUTCHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setUTCMonth(e2.getUTCMonth() + a);
  }, (e2, a) => a.getUTCMonth() - e2.getUTCMonth() + (a.getUTCFullYear() - e2.getUTCFullYear()) * 12, (e2) => e2.getUTCMonth());
  var Nl = Ea.range;
  var Je2 = b((e2) => {
    e2.setMonth(0, 1), e2.setHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setFullYear(e2.getFullYear() + a);
  }, (e2, a) => a.getFullYear() - e2.getFullYear(), (e2) => e2.getFullYear());
  Je2.every = (e2) => !isFinite(e2 = Math.floor(e2)) || !(e2 > 0) ? null : b((a) => {
    a.setFullYear(Math.floor(a.getFullYear() / e2) * e2), a.setMonth(0, 1), a.setHours(0, 0, 0, 0);
  }, (a, t) => {
    a.setFullYear(a.getFullYear() + t * e2);
  });
  var El = Je2.range;
  var je2 = b((e2) => {
    e2.setUTCMonth(0, 1), e2.setUTCHours(0, 0, 0, 0);
  }, (e2, a) => {
    e2.setUTCFullYear(e2.getUTCFullYear() + a);
  }, (e2, a) => a.getUTCFullYear() - e2.getUTCFullYear(), (e2) => e2.getUTCFullYear());
  je2.every = (e2) => !isFinite(e2 = Math.floor(e2)) || !(e2 > 0) ? null : b((a) => {
    a.setUTCFullYear(Math.floor(a.getUTCFullYear() / e2) * e2), a.setUTCMonth(0, 1), a.setUTCHours(0, 0, 0, 0);
  }, (a, t) => {
    a.setUTCFullYear(a.getUTCFullYear() + t * e2);
  });
  var Gl = je2.range;
  function Gt(e2, a) {
    a.domain && ("nice" in e2 || "quantiles" in e2 || "padding" in e2, e2.domain(a.domain));
  }
  function Wt(e2, a) {
    a.range && ("padding" in e2, e2.range(a.range));
  }
  function Vt(e2, a) {
    "align" in e2 && "align" in a && typeof a.align < "u" && e2.align(a.align);
  }
  function zt(e2, a) {
    "base" in e2 && "base" in a && typeof a.base < "u" && e2.base(a.base);
  }
  function Xt(e2, a) {
    "clamp" in e2 && "clamp" in a && typeof a.clamp < "u" && e2.clamp(a.clamp);
  }
  function Kt(e2, a) {
    "constant" in e2 && "constant" in a && typeof a.constant < "u" && e2.constant(a.constant);
  }
  function Zt(e2, a) {
    "exponent" in e2 && "exponent" in a && typeof a.exponent < "u" && e2.exponent(a.exponent);
  }
  var Gr = { lab: Ma, hcl: It, "hcl-long": Ct, hsl: ht, "hsl-long": gt, cubehelix: St, "cubehelix-long": yt, rgb: Ae2 };
  function $t(e2) {
    switch (e2) {
      case "lab":
      case "hcl":
      case "hcl-long":
      case "hsl":
      case "hsl-long":
      case "cubehelix":
      case "cubehelix-long":
      case "rgb":
        return Gr[e2];
      default:
    }
    var a = e2.type, t = e2.gamma, o = Gr[a];
    return typeof t > "u" ? o : o.gamma(t);
  }
  function _t(e2, a) {
    if ("interpolate" in a && "interpolate" in e2 && typeof a.interpolate < "u") {
      var t = $t(a.interpolate);
      e2.interpolate(t);
    }
  }
  var Wl = new Date(Date.UTC(2020, 1, 2, 3, 4, 5));
  var Vl = "%Y-%m-%d %H:%M";
  function Yt(e2) {
    var a = e2.tickFormat(1, Vl)(Wl);
    return a === "2020-02-02 03:04";
  }
  var Wr = { day: Ha, hour: qa, minute: Da, month: Na, second: ce2, week: Ye2, year: Je2 };
  var Vr = { day: Oa, hour: Ua, minute: Ta, month: Ea, second: ce2, week: Qe2, year: je2 };
  function Qt(e2, a) {
    if ("nice" in a && typeof a.nice < "u" && "nice" in e2) {
      var t = a.nice;
      if (typeof t == "boolean") t && e2.nice();
      else if (typeof t == "number") e2.nice(t);
      else {
        var o = e2, r = Yt(o);
        if (typeof t == "string") o.nice(r ? Vr[t] : Wr[t]);
        else {
          var u = t.interval, l2 = t.step, d = (r ? Vr[u] : Wr[u]).every(l2);
          d != null && o.nice(d);
        }
      }
    }
  }
  function Jt(e2, a) {
    "padding" in e2 && "padding" in a && typeof a.padding < "u" && e2.padding(a.padding), "paddingInner" in e2 && "paddingInner" in a && typeof a.paddingInner < "u" && e2.paddingInner(a.paddingInner), "paddingOuter" in e2 && "paddingOuter" in a && typeof a.paddingOuter < "u" && e2.paddingOuter(a.paddingOuter);
  }
  function jt(e2, a) {
    if (a.reverse) {
      var t = e2.range().slice().reverse();
      "padding" in e2, e2.range(t);
    }
  }
  function eo(e2, a) {
    "round" in a && typeof a.round < "u" && (a.round && "interpolate" in a && typeof a.interpolate < "u" ? console.warn("[visx/scale/applyRound] ignoring round: scale config contains round and interpolate. only applying interpolate. config:", a) : "round" in e2 ? e2.round(a.round) : "interpolate" in e2 && a.round && e2.interpolate($e2));
  }
  function ao(e2, a) {
    "unknown" in e2 && "unknown" in a && typeof a.unknown < "u" && e2.unknown(a.unknown);
  }
  function to(e2, a) {
    if ("zero" in a && a.zero === true) {
      var t = e2.domain(), o = t[0], r = t[1], u = r < o, l2 = u ? [r, o] : [o, r], d = l2[0], s = l2[1], f2 = [Math.min(0, d), Math.max(0, s)];
      e2.domain(u ? f2.reverse() : f2);
    }
  }
  var zl = ["domain", "nice", "zero", "interpolate", "round", "range", "reverse", "align", "base", "clamp", "constant", "exponent", "padding", "unknown"];
  var Xl = { domain: Gt, nice: Qt, zero: to, interpolate: _t, round: eo, align: Vt, base: zt, clamp: Xt, constant: Kt, exponent: Zt, padding: Jt, range: Wt, reverse: jt, unknown: ao };
  function ea() {
    for (var e2 = arguments.length, a = new Array(e2), t = 0; t < e2; t++) a[t] = arguments[t];
    var o = new Set(a), r = zl.filter(function(u) {
      return o.has(u);
    });
    return function(l2, d) {
      return typeof d < "u" && r.forEach(function(s) {
        Xl[s](l2, d);
      }), l2;
    };
  }
  var Kl = ea("domain", "range", "reverse", "align", "padding", "round");
  var Zl = ea("domain", "range", "reverse", "clamp", "interpolate", "nice", "round", "zero");
  var ro = Math.PI;
  var uo = 2 * ro;
  var Le2 = 1e-6;
  var $l = uo - Le2;
  function lo() {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
  }
  function zr() {
    return new lo();
  }
  lo.prototype = zr.prototype = { constructor: lo, moveTo: function(e2, a) {
    this._ += "M" + (this._x0 = this._x1 = +e2) + "," + (this._y0 = this._y1 = +a);
  }, closePath: function() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
  }, lineTo: function(e2, a) {
    this._ += "L" + (this._x1 = +e2) + "," + (this._y1 = +a);
  }, quadraticCurveTo: function(e2, a, t, o) {
    this._ += "Q" + +e2 + "," + +a + "," + (this._x1 = +t) + "," + (this._y1 = +o);
  }, bezierCurveTo: function(e2, a, t, o, r, u) {
    this._ += "C" + +e2 + "," + +a + "," + +t + "," + +o + "," + (this._x1 = +r) + "," + (this._y1 = +u);
  }, arcTo: function(e2, a, t, o, r) {
    e2 = +e2, a = +a, t = +t, o = +o, r = +r;
    var u = this._x1, l2 = this._y1, d = t - e2, s = o - a, f2 = u - e2, n2 = l2 - a, i = f2 * f2 + n2 * n2;
    if (r < 0) throw new Error("negative radius: " + r);
    if (this._x1 === null) this._ += "M" + (this._x1 = e2) + "," + (this._y1 = a);
    else if (i > Le2) if (!(Math.abs(n2 * d - s * f2) > Le2) || !r) this._ += "L" + (this._x1 = e2) + "," + (this._y1 = a);
    else {
      var c = t - u, p = o - l2, L = d * d + s * s, g = c * c + p * p, I2 = Math.sqrt(L), P3 = Math.sqrt(i), R2 = r * Math.tan((ro - Math.acos((L + i - g) / (2 * I2 * P3))) / 2), A2 = R2 / P3, Z = R2 / I2;
      Math.abs(A2 - 1) > Le2 && (this._ += "L" + (e2 + A2 * f2) + "," + (a + A2 * n2)), this._ += "A" + r + "," + r + ",0,0," + +(n2 * c > f2 * p) + "," + (this._x1 = e2 + Z * d) + "," + (this._y1 = a + Z * s);
    }
  }, arc: function(e2, a, t, o, r, u) {
    e2 = +e2, a = +a, t = +t, u = !!u;
    var l2 = t * Math.cos(o), d = t * Math.sin(o), s = e2 + l2, f2 = a + d, n2 = 1 ^ u, i = u ? o - r : r - o;
    if (t < 0) throw new Error("negative radius: " + t);
    this._x1 === null ? this._ += "M" + s + "," + f2 : (Math.abs(this._x1 - s) > Le2 || Math.abs(this._y1 - f2) > Le2) && (this._ += "L" + s + "," + f2), t && (i < 0 && (i = i % uo + uo), i > $l ? this._ += "A" + t + "," + t + ",0,1," + n2 + "," + (e2 - l2) + "," + (a - d) + "A" + t + "," + t + ",0,1," + n2 + "," + (this._x1 = s) + "," + (this._y1 = f2) : i > Le2 && (this._ += "A" + t + "," + t + ",0," + +(i >= ro) + "," + n2 + "," + (this._x1 = e2 + t * Math.cos(r)) + "," + (this._y1 = a + t * Math.sin(r))));
  }, rect: function(e2, a, t, o) {
    this._ += "M" + (this._x0 = this._x1 = +e2) + "," + (this._y0 = this._y1 = +a) + "h" + +t + "v" + +o + "h" + -t + "Z";
  }, toString: function() {
    return this._;
  } };
  function Xr(e2) {
    this._context = e2;
  }
  Xr.prototype = { areaStart: function() {
    this._line = 0;
  }, areaEnd: function() {
    this._line = NaN;
  }, lineStart: function() {
    this._point = 0;
  }, lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }, point: function(e2, a) {
    switch (e2 = +e2, a = +a, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e2, a) : this._context.moveTo(e2, a);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e2, a);
        break;
    }
  } };
  var Yr = Ao(oo());
  var Qr = Ao(oo());
  var Za = (...e2) => e2.filter((a, t, o) => !!a && a.trim() !== "" && o.indexOf(a) === t).join(" ").trim();
  var eu = (e2) => e2.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  var au = (e2) => e2.replace(/^([A-Z])|[\s-_]+(\w)/g, (a, t, o) => o ? o.toUpperCase() : t.toLowerCase());
  var xo = (e2) => {
    let a = au(e2);
    return a.charAt(0).toUpperCase() + a.slice(1);
  };
  var tu = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
  var ou = (e2) => {
    for (let a in e2) if (a.startsWith("aria-") || a === "role" || a === "title") return true;
    return false;
  };
  var uu = (0, import_react10.forwardRef)(({ color: e2 = "currentColor", size: a = 24, strokeWidth: t = 2, absoluteStrokeWidth: o, className: r = "", children: u, iconNode: l2, ...d }, s) => (0, import_react10.createElement)("svg", { ref: s, ...tu, width: a, height: a, stroke: e2, strokeWidth: o ? Number(t) * 24 / Number(a) : t, className: Za("lucide", r), ...!u && !ou(d) && { "aria-hidden": "true" }, ...d }, [...l2.map(([f2, n2]) => (0, import_react10.createElement)(f2, n2)), ...Array.isArray(u) ? u : [u]]));
  var Re2 = (e2, a) => {
    let t = (0, import_react9.forwardRef)(({ className: o, ...r }, u) => (0, import_react9.createElement)(uu, { ref: u, iconNode: a, className: Za(`lucide-${eu(xo(e2))}`, `lucide-${e2}`, o), ...r }));
    return t.displayName = xo(e2), t;
  };
  var pd = [["path", { d: "M7 7h10v10", key: "1tivn9" }], ["path", { d: "M7 17 17 7", key: "1vkiza" }]];
  var he2 = Re2("arrow-up-right", pd);
  var md = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
  var ua = Re2("check", md);
  var xd = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
  var ee2 = Re2("loader-circle", xd);
  var yo = { label: "Let\u2019s buy this", request: "I want this product. Check the current offer and prepare checkout for the selected variant. Resolve only essential missing choices in our conversation.", kind: "checkout" };
  function Md() {
    return (0, import_jsx_runtime10.jsx)("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: (0, import_jsx_runtime10.jsx)("path", { d: "M20.5 12C20.5 9.76676 19.686 8.06004 18.2871 6.89355C16.8661 5.70886 14.7409 5 12 5C9.25912 5 7.13392 5.70886 5.71288 6.89355C4.31396 8.06004 3.49999 9.76677 3.49999 12C3.49999 12.4778 3.67754 13.2204 3.91698 13.9678C4.14619 14.6832 4.39417 15.2886 4.45995 15.4463C4.47153 15.474 4.45918 15.4447 4.47753 15.4883L4.51269 15.5781L4.55273 15.6973C4.71413 16.2258 4.88032 17.3955 4.10253 18.9609C4.45806 18.9447 4.80995 18.8667 5.14062 18.752C5.48117 18.6338 5.77064 18.4882 5.9746 18.3721C6.07544 18.3146 6.15337 18.2661 6.20312 18.2334C6.22792 18.2171 6.2459 18.2042 6.25585 18.1973C6.25889 18.1952 6.26114 18.1935 6.26269 18.1924C6.57078 17.9671 6.98047 17.9376 7.31835 18.1152C8.64944 18.8149 10.295 19 12 19C14.7409 19 16.8661 18.2911 18.2871 17.1064C19.686 15.94 20.5 14.2332 20.5 12ZM22.5 12C22.5 14.7665 21.4668 17.06 19.5674 18.6436C17.6898 20.2087 15.0646 21 12 21C10.3808 21 8.55858 20.8483 6.91699 20.1357C6.63773 20.2919 6.25326 20.4829 5.79589 20.6416C4.84476 20.9715 3.45924 21.2047 2.07226 20.5479C1.80018 20.419 1.59992 20.1742 1.52831 19.8818C1.45679 19.5894 1.52128 19.28 1.70312 19.04C2.39144 18.1322 2.60883 17.4279 2.66894 16.9775C2.72939 16.5244 2.63731 16.2736 2.63476 16.2666L2.63378 16.2646C2.63187 16.2601 2.63059 16.2546 2.62695 16.2461C2.62373 16.2386 2.61901 16.2282 2.61425 16.2168L2.61327 16.2158C2.53665 16.0321 2.2661 15.369 2.01269 14.5781C1.76944 13.8189 1.49999 12.8165 1.49999 12C1.49999 9.23347 2.5332 6.93995 4.43261 5.35645C6.31017 3.79128 8.93544 3 12 3C15.0646 3 17.6898 3.79129 19.5674 5.35645C21.4668 6.93996 22.5 9.23348 22.5 12Z" }) });
  }
  var Ad = { idle: { icon: (0, import_jsx_runtime10.jsx)(Md, {}), label: yo.label, shortLabel: "Buy this", variant: "active" }, sending: { icon: (0, import_jsx_runtime10.jsx)(ee2, { className: "file-spin", size: 16, strokeWidth: 2.25, "aria-hidden": "true" }), label: "Sending\u2026", variant: "disabled" }, sent: { icon: (0, import_jsx_runtime10.jsx)(ua, { size: 16, strokeWidth: 2.25, "aria-hidden": "true" }), label: "Sent to Instinct", shortLabel: "Sent", variant: "disabled" } };

  // ../../opt/files/node_modules/react-router/dist/development/chunk-BV7QT456.mjs
  var React = __toESM(require_react(), 1);
  var React2 = __toESM(require_react(), 1);
  var React3 = __toESM(require_react(), 1);
  var React4 = __toESM(require_react(), 1);
  var React9 = __toESM(require_react(), 1);
  var React8 = __toESM(require_react(), 1);
  var React7 = __toESM(require_react(), 1);
  var React6 = __toESM(require_react(), 1);
  var React5 = __toESM(require_react(), 1);
  var React10 = __toESM(require_react(), 1);
  var React11 = __toESM(require_react(), 1);
  var import_meta = {};
  var ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i;
  var PROTOCOL_RELATIVE_URL_REGEX = /^[\\/]{2}/;
  function normalizeProtocolRelativeUrl(url, protocol) {
    return protocol + url.replace(/\\/g, "/");
  }
  function isLocation(obj) {
    return typeof obj === "object" && obj != null && "pathname" in obj && "search" in obj && "hash" in obj && "state" in obj && "key" in obj;
  }
  function createMemoryHistory(options = {}) {
    let { initialEntries = ["/"], initialIndex, v5Compat = false } = options;
    let entries;
    entries = initialEntries.map(
      (entry, index2) => createMemoryLocation(
        entry,
        typeof entry === "string" ? null : entry.state,
        index2 === 0 ? "default" : void 0,
        typeof entry === "string" ? void 0 : entry.mask
      )
    );
    let index = clampIndex(
      initialIndex == null ? entries.length - 1 : initialIndex
    );
    let action = "POP";
    let listener = null;
    function clampIndex(n2) {
      return Math.min(Math.max(n2, 0), entries.length - 1);
    }
    function getCurrentLocation() {
      return entries[index];
    }
    function createMemoryLocation(to2, state = null, key, mask) {
      let location = createLocation(
        entries ? getCurrentLocation().pathname : "/",
        to2,
        state,
        key,
        mask
      );
      warning(
        location.pathname.charAt(0) === "/",
        `relative pathnames are not supported in memory history: ${JSON.stringify(
          to2
        )}`
      );
      return location;
    }
    function createHref2(to2) {
      return typeof to2 === "string" ? to2 : createPath(to2);
    }
    let history = {
      get index() {
        return index;
      },
      get action() {
        return action;
      },
      get location() {
        return getCurrentLocation();
      },
      createHref: createHref2,
      createURL(to2) {
        return new URL(createHref2(to2), "http://localhost");
      },
      encodeLocation(to2) {
        let path = typeof to2 === "string" ? parsePath(to2) : to2;
        return {
          pathname: path.pathname || "",
          search: path.search || "",
          hash: path.hash || ""
        };
      },
      push(to2, state) {
        action = "PUSH";
        let nextLocation = isLocation(to2) ? to2 : createMemoryLocation(to2, state);
        index += 1;
        entries.splice(index, entries.length, nextLocation);
        if (v5Compat && listener) {
          listener({ action, location: nextLocation, delta: 1 });
        }
      },
      replace(to2, state) {
        action = "REPLACE";
        let nextLocation = isLocation(to2) ? to2 : createMemoryLocation(to2, state);
        entries[index] = nextLocation;
        if (v5Compat && listener) {
          listener({ action, location: nextLocation, delta: 0 });
        }
      },
      go(delta) {
        action = "POP";
        let nextIndex = clampIndex(index + delta);
        let nextLocation = entries[nextIndex];
        index = nextIndex;
        if (listener) {
          listener({ action, location: nextLocation, delta });
        }
      },
      listen(fn) {
        listener = fn;
        return () => {
          listener = null;
        };
      }
    };
    return history;
  }
  function invariant(value, message) {
    if (value === false || value === null || typeof value === "undefined") {
      throw new Error(message);
    }
  }
  function warning(cond, message) {
    if (!cond) {
      if (typeof console !== "undefined") console.warn(message);
      try {
        throw new Error(message);
      } catch (e2) {
      }
    }
  }
  function createKey() {
    return Math.random().toString(36).substring(2, 10);
  }
  function createLocation(current, to2, state = null, key, mask) {
    let location = {
      pathname: typeof current === "string" ? current : current.pathname,
      search: "",
      hash: "",
      ...typeof to2 === "string" ? parsePath(to2) : to2,
      state,
      // TODO: This could be cleaned up.  push/replace should probably just take
      // full Locations now and avoid the need to run through this flow at all
      // But that's a pretty big refactor to the current test suite so going to
      // keep as is for the time being and just let any incoming keys take precedence
      key: to2 && to2.key || key || createKey(),
      mask
    };
    return location;
  }
  function createPath({
    pathname = "/",
    search = "",
    hash = ""
  }) {
    if (search && search !== "?")
      pathname += search.charAt(0) === "?" ? search : "?" + search;
    if (hash && hash !== "#")
      pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
    return pathname;
  }
  function parsePath(path) {
    let parsedPath = {};
    if (path) {
      let hashIndex = path.indexOf("#");
      if (hashIndex >= 0) {
        parsedPath.hash = path.substring(hashIndex);
        path = path.substring(0, hashIndex);
      }
      let searchIndex = path.indexOf("?");
      if (searchIndex >= 0) {
        parsedPath.search = path.substring(searchIndex);
        path = path.substring(0, searchIndex);
      }
      if (path) {
        parsedPath.pathname = path;
      }
    }
    return parsedPath;
  }
  var _map;
  _map = /* @__PURE__ */ new WeakMap();
  function matchRoutes(routes, locationArg, basename = "/") {
    return matchRoutesImpl(routes, locationArg, basename, false);
  }
  function matchRoutesImpl(routes, locationArg, basename, allowPartial, precomputedBranches) {
    let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    let pathname = stripBasename(location.pathname || "/", basename);
    if (pathname == null) {
      return null;
    }
    let branches = precomputedBranches ?? flattenAndRankRoutes(routes);
    let matches = null;
    let decoded = decodePath(pathname);
    for (let i = 0; matches == null && i < branches.length; ++i) {
      matches = matchRouteBranch(
        branches[i],
        decoded,
        allowPartial
      );
    }
    return matches;
  }
  function convertRouteMatchToUiMatch(match, loaderData) {
    let { route, pathname, params } = match;
    return {
      id: route.id,
      pathname,
      params,
      data: loaderData[route.id],
      loaderData: loaderData[route.id],
      handle: route.handle
    };
  }
  function flattenAndRankRoutes(routes) {
    let branches = flattenRoutes(routes);
    rankRouteBranches(branches);
    return branches;
  }
  function flattenRoutes(routes, branches = [], parentsMeta = [], parentPath = "", _hasParentOptionalSegments = false) {
    let flattenRoute = (route, index, hasParentOptionalSegments = _hasParentOptionalSegments, relativePath) => {
      let meta = {
        relativePath: relativePath === void 0 ? route.path || "" : relativePath,
        caseSensitive: route.caseSensitive === true,
        childrenIndex: index,
        route
      };
      if (meta.relativePath.startsWith("/")) {
        if (!meta.relativePath.startsWith(parentPath) && hasParentOptionalSegments) {
          return;
        }
        invariant(
          meta.relativePath.startsWith(parentPath),
          `Absolute route path "${meta.relativePath}" nested under path "${parentPath}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
        );
        meta.relativePath = meta.relativePath.slice(parentPath.length);
      }
      let path = joinPaths([parentPath, meta.relativePath]);
      let routesMeta = parentsMeta.concat(meta);
      if (route.children && route.children.length > 0) {
        invariant(
          // Our types know better, but runtime JS may not!
          // @ts-expect-error
          route.index !== true,
          `Index routes must not have child routes. Please remove all child routes from route path "${path}".`
        );
        flattenRoutes(
          route.children,
          branches,
          routesMeta,
          path,
          hasParentOptionalSegments
        );
      }
      if (route.path == null && !route.index) {
        return;
      }
      branches.push({
        path,
        score: computeScore(path, route.index),
        routesMeta: routesMeta.map((meta2, i) => {
          let [matcher, params] = compilePath(
            meta2.relativePath,
            meta2.caseSensitive,
            i === routesMeta.length - 1
          );
          return {
            ...meta2,
            matcher,
            compiledParams: params
          };
        })
      });
    };
    routes.forEach((route, index) => {
      if (route.path === "" || !route.path?.includes("?")) {
        flattenRoute(route, index);
      } else {
        for (let exploded of explodeOptionalSegments(route.path)) {
          flattenRoute(route, index, true, exploded);
        }
      }
    });
    return branches;
  }
  function explodeOptionalSegments(path) {
    let segments = path.split("/");
    if (segments.length === 0) return [];
    let [first, ...rest] = segments;
    let isOptional = first.endsWith("?");
    let required = first.replace(/\?$/, "");
    if (rest.length === 0) {
      return isOptional ? [required, ""] : [required];
    }
    let restExploded = explodeOptionalSegments(rest.join("/"));
    let result = [];
    result.push(
      ...restExploded.map(
        (subpath) => subpath === "" ? required : [required, subpath].join("/")
      )
    );
    if (isOptional) {
      result.push(...restExploded);
    }
    return result.map(
      (exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded
    );
  }
  function rankRouteBranches(branches) {
    branches.sort(
      (a, b2) => a.score !== b2.score ? b2.score - a.score : compareIndexes(
        a.routesMeta.map((meta) => meta.childrenIndex),
        b2.routesMeta.map((meta) => meta.childrenIndex)
      )
    );
  }
  var paramRe = /^:[\w-]+$/;
  var dynamicSegmentValue = 3;
  var indexRouteValue = 2;
  var emptySegmentValue = 1;
  var staticSegmentValue = 10;
  var splatPenalty = -2;
  var isSplat = (s) => s === "*";
  function computeScore(path, index) {
    let segments = path.split("/");
    let initialScore = segments.length;
    if (segments.some(isSplat)) {
      initialScore += splatPenalty;
    }
    if (index) {
      initialScore += indexRouteValue;
    }
    return segments.filter((s) => !isSplat(s)).reduce(
      (score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue),
      initialScore
    );
  }
  function compareIndexes(a, b2) {
    let siblings = a.length === b2.length && a.slice(0, -1).every((n2, i) => n2 === b2[i]);
    return siblings ? (
      // If two routes are siblings, we should try to match the earlier sibling
      // first. This allows people to have fine-grained control over the matching
      // behavior by simply putting routes with identical paths in the order they
      // want them tried.
      a[a.length - 1] - b2[b2.length - 1]
    ) : (
      // Otherwise, it doesn't really make sense to rank non-siblings by index,
      // so they sort equally.
      0
    );
  }
  function matchRouteBranch(branch, pathname, allowPartial = false) {
    let { routesMeta } = branch;
    let matchedParams = {};
    let matchedPathname = "/";
    let matches = [];
    for (let i = 0; i < routesMeta.length; ++i) {
      let meta = routesMeta[i];
      let end = i === routesMeta.length - 1;
      let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
      let pattern = {
        path: meta.relativePath,
        caseSensitive: meta.caseSensitive,
        end
      };
      let match = (
        // Use precomputed matcher if it exists
        meta.matcher && meta.compiledParams ? matchPathImpl(
          pattern,
          remainingPathname,
          meta.matcher,
          meta.compiledParams
        ) : matchPath(pattern, remainingPathname)
      );
      let route = meta.route;
      if (!match && end && allowPartial && !routesMeta[routesMeta.length - 1].route.index) {
        match = matchPath(
          {
            path: meta.relativePath,
            caseSensitive: meta.caseSensitive,
            end: false
          },
          remainingPathname
        );
      }
      if (!match) {
        return null;
      }
      Object.assign(matchedParams, match.params);
      matches.push({
        // TODO: Can this as be avoided?
        params: matchedParams,
        pathname: joinPaths([matchedPathname, match.pathname]),
        pathnameBase: normalizePathname(
          joinPaths([matchedPathname, match.pathnameBase])
        ),
        route
      });
      if (match.pathnameBase !== "/") {
        matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
      }
    }
    return matches;
  }
  function matchPath(pattern, pathname) {
    if (typeof pattern === "string") {
      pattern = { path: pattern, caseSensitive: false, end: true };
    }
    let [matcher, compiledParams] = compilePath(
      pattern.path,
      pattern.caseSensitive,
      pattern.end
    );
    return matchPathImpl(pattern, pathname, matcher, compiledParams);
  }
  function matchPathImpl(pattern, pathname, matcher, compiledParams) {
    let match = pathname.match(matcher);
    if (!match) return null;
    let matchedPathname = match[0];
    let pathnameBase = removeTrailingSlash(matchedPathname, 1);
    let captureGroups = match.slice(1);
    let params = compiledParams.reduce(
      (memo2, { paramName, isOptional }, index) => {
        if (paramName === "*") {
          let splatValue = captureGroups[index] || "";
          pathnameBase = removeTrailingSlash(
            matchedPathname.slice(0, matchedPathname.length - splatValue.length),
            1
          );
        }
        const value = captureGroups[index];
        if (isOptional && !value) {
          memo2[paramName] = void 0;
        } else {
          memo2[paramName] = (value || "").replace(/%2F/g, "/");
        }
        return memo2;
      },
      {}
    );
    return {
      params,
      pathname: matchedPathname,
      pathnameBase,
      pattern
    };
  }
  function compilePath(path, caseSensitive = false, end = true) {
    warning(
      path === "*" || !path.endsWith("*") || path.endsWith("/*"),
      `Route path "${path}" will be treated as if it were "${path.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${path.replace(/\*$/, "/*")}".`
    );
    let params = [];
    let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
      /\/:([\w-]+)(\?)?/g,
      (match, paramName, isOptional, index, str) => {
        params.push({ paramName, isOptional: isOptional != null });
        if (isOptional) {
          let nextChar = str.charAt(index + match.length);
          if (nextChar && nextChar !== "/") {
            return "/([^\\/]*)";
          }
          return "(?:/([^\\/]*))?";
        }
        return "/([^\\/]+)";
      }
    ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    if (path.endsWith("*")) {
      params.push({ paramName: "*" });
      regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
    } else if (end) {
      regexpSource += "\\/*$";
    } else if (path !== "" && path !== "/") {
      regexpSource += "(?:(?=\\/|$))";
    } else {
    }
    let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
    return [matcher, params];
  }
  function decodePath(value) {
    try {
      return value.split("/").map((v2) => decodeURIComponent(v2).replace(/\//g, "%2F")).join("/");
    } catch (error) {
      warning(
        false,
        `The URL path "${value}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${error}).`
      );
      return value;
    }
  }
  function stripBasename(pathname, basename) {
    if (basename === "/") return pathname;
    if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
      return null;
    }
    let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
    let nextChar = pathname.charAt(startIndex);
    if (nextChar && nextChar !== "/") {
      return null;
    }
    return pathname.slice(startIndex) || "/";
  }
  function resolvePath(to2, fromPathname = "/") {
    let {
      pathname: toPathname,
      search = "",
      hash = ""
    } = typeof to2 === "string" ? parsePath(to2) : to2;
    let pathname;
    if (toPathname) {
      toPathname = removeDoubleSlashes(toPathname);
      if (toPathname.startsWith("/") || toPathname.startsWith("\\")) {
        pathname = resolvePathname(toPathname.substring(1), "/");
      } else {
        pathname = resolvePathname(toPathname, fromPathname);
      }
    } else {
      pathname = fromPathname;
    }
    return {
      pathname,
      search: normalizeSearch(search),
      hash: normalizeHash(hash)
    };
  }
  function resolvePathname(relativePath, fromPathname) {
    let segments = removeTrailingSlash(fromPathname).split("/");
    let relativeSegments = relativePath.split("/");
    relativeSegments.forEach((segment) => {
      if (segment === "..") {
        if (segments.length > 1) segments.pop();
      } else if (segment !== ".") {
        segments.push(segment);
      }
    });
    return segments.length > 1 ? segments.join("/") : "/";
  }
  function getInvalidPathError(char, field, dest, path) {
    return `Cannot include a '${char}' character in a manually specified \`to.${field}\` field [${JSON.stringify(
      path
    )}].  Please separate it out to the \`to.${dest}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
  }
  function getPathContributingMatches(matches) {
    return matches.filter(
      (match, index) => index === 0 || match.route.path && match.route.path.length > 0
    );
  }
  function getResolveToMatches(matches) {
    let pathMatches = getPathContributingMatches(matches);
    return pathMatches.map(
      (match, idx) => idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase
    );
  }
  function resolveTo(toArg, routePathnames, locationPathname, isPathRelative = false) {
    let to2;
    if (typeof toArg === "string") {
      to2 = parsePath(toArg);
    } else {
      to2 = { ...toArg };
      invariant(
        !to2.pathname || !to2.pathname.includes("?"),
        getInvalidPathError("?", "pathname", "search", to2)
      );
      invariant(
        !to2.pathname || !to2.pathname.includes("#"),
        getInvalidPathError("#", "pathname", "hash", to2)
      );
      invariant(
        !to2.search || !to2.search.includes("#"),
        getInvalidPathError("#", "search", "hash", to2)
      );
    }
    let isEmptyPath = toArg === "" || to2.pathname === "";
    let toPathname = isEmptyPath ? "/" : to2.pathname;
    let from;
    if (toPathname == null) {
      from = locationPathname;
    } else {
      let routePathnameIndex = routePathnames.length - 1;
      if (!isPathRelative && toPathname.startsWith("..")) {
        let toSegments = toPathname.split("/");
        while (toSegments[0] === "..") {
          toSegments.shift();
          routePathnameIndex -= 1;
        }
        to2.pathname = toSegments.join("/");
      }
      from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
    }
    let path = resolvePath(to2, from);
    let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
    let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
    if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
      path.pathname += "/";
    }
    return path;
  }
  var removeDoubleSlashes = (path) => path.replace(/[\\/]{2,}/g, "/");
  var joinPaths = (paths) => removeDoubleSlashes(paths.join("/"));
  function removeTrailingSlash(path, minLength = 0) {
    let end = path.length;
    while (end > minLength && path.charCodeAt(end - 1) === 47) {
      end--;
    }
    return end === path.length ? path : path.slice(0, end);
  }
  var normalizePathname = (pathname) => removeTrailingSlash(pathname).replace(/^\/*/, "/");
  var normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
  var normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
  var ErrorResponseImpl = class {
    constructor(status, statusText, data2, internal = false) {
      this.status = status;
      this.statusText = statusText || "";
      this.internal = internal;
      if (data2 instanceof Error) {
        this.data = data2.toString();
        this.error = data2;
      } else {
        this.data = data2;
      }
    }
  };
  function isRouteErrorResponse(error) {
    return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
  }
  function getRoutePattern(matches) {
    let parts = matches.map((m) => m.route.path).filter(Boolean);
    return joinPaths(parts) || "/";
  }
  var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
  function parseToInfo(_to, basename) {
    let to2 = _to;
    if (typeof to2 !== "string" || !ABSOLUTE_URL_REGEX.test(to2)) {
      return {
        absoluteURL: void 0,
        isExternal: false,
        to: to2
      };
    }
    let absoluteURL = to2;
    let isExternal = false;
    if (isBrowser) {
      try {
        let currentUrl = new URL(window.location.href);
        let targetUrl = PROTOCOL_RELATIVE_URL_REGEX.test(to2) ? new URL(normalizeProtocolRelativeUrl(to2, currentUrl.protocol)) : new URL(to2);
        let path = stripBasename(targetUrl.pathname, basename);
        if (targetUrl.origin === currentUrl.origin && path != null) {
          to2 = path + targetUrl.search + targetUrl.hash;
        } else {
          isExternal = true;
        }
      } catch (e2) {
        warning(
          false,
          `<Link to="${to2}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    }
    return {
      absoluteURL,
      isExternal,
      to: to2
    };
  }
  var objectProtoNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
  var DEFAULT_NAVIGATION_URL = new URL("http://localhost");
  function getNavigatorCurrentUrl(navigator2) {
    if (navigator2.createURL) {
      return navigator2.createURL("/");
    }
    try {
      return new URL(navigator2.createHref("/"), DEFAULT_NAVIGATION_URL);
    } catch {
      return DEFAULT_NAVIGATION_URL;
    }
  }
  function isSameOrigin(a, b2) {
    return a.origin === b2.origin && (a.origin !== "null" || a.protocol === b2.protocol && a.host === b2.host);
  }
  function isExplicitUrl(destination, target) {
    if (destination.startsWith("//")) {
      return true;
    }
    let protocol = target.protocol.toLowerCase();
    if (!destination.toLowerCase().startsWith(protocol)) {
      return false;
    }
    return target.host === "" || destination.slice(protocol.length).startsWith("//");
  }
  function validateNavigationTarget(original, resolved, currentUrl, externalPolicy) {
    let originalUrl = null;
    try {
      originalUrl = original == null ? null : new URL(original, currentUrl);
    } catch {
    }
    let resolvedUrl = new URL(resolved, currentUrl);
    let originalIsExternal = originalUrl != null && !isSameOrigin(originalUrl, currentUrl);
    let resolvedIsExternal = !isSameOrigin(resolvedUrl, currentUrl);
    if (externalPolicy === "reject") {
      if (originalIsExternal || resolvedIsExternal) {
        throw new Error("External navigation is not allowed");
      }
    } else if (resolvedIsExternal) {
      if (originalUrl == null || !isExplicitUrl(original, originalUrl) || !isSameOrigin(originalUrl, resolvedUrl)) {
        throw new Error("External navigation is not allowed");
      }
    }
  }
  var validMutationMethodsArr = [
    "POST",
    "PUT",
    "PATCH",
    "DELETE"
  ];
  var validMutationMethods = new Set(
    validMutationMethodsArr
  );
  var validRequestMethodsArr = [
    "GET",
    ...validMutationMethodsArr
  ];
  var validRequestMethods = new Set(validRequestMethodsArr);
  var _routes;
  var _branches;
  var _hmrRoutes;
  var _hmrBranches;
  _routes = /* @__PURE__ */ new WeakMap();
  _branches = /* @__PURE__ */ new WeakMap();
  _hmrRoutes = /* @__PURE__ */ new WeakMap();
  _hmrBranches = /* @__PURE__ */ new WeakMap();
  var invalidProtocols = [
    "about:",
    "blob:",
    "chrome:",
    "chrome-untrusted:",
    "content:",
    "data:",
    "devtools:",
    "file:",
    "filesystem:",
    // eslint-disable-next-line no-script-url
    "javascript:"
  ];
  function hasInvalidProtocol(location) {
    try {
      return invalidProtocols.includes(new URL(location).protocol);
    } catch {
      return false;
    }
  }
  var DataRouterContext = React.createContext(null);
  DataRouterContext.displayName = "DataRouter";
  var DataRouterStateContext = React.createContext(null);
  DataRouterStateContext.displayName = "DataRouterState";
  var RSCRouterContext = React.createContext(false);
  function useIsRSCRouterContext() {
    return React.useContext(RSCRouterContext);
  }
  var ViewTransitionContext = React.createContext({
    isTransitioning: false
  });
  ViewTransitionContext.displayName = "ViewTransition";
  var FetchersContext = React.createContext(
    /* @__PURE__ */ new Map()
  );
  FetchersContext.displayName = "Fetchers";
  var AwaitContext = React.createContext(null);
  AwaitContext.displayName = "Await";
  var NavigationContext = React.createContext(
    null
  );
  NavigationContext.displayName = "Navigation";
  var LocationContext = React.createContext(
    null
  );
  LocationContext.displayName = "Location";
  var RouteContext = React.createContext({
    outlet: null,
    matches: [],
    isDataRoute: false
  });
  RouteContext.displayName = "Route";
  var RouteErrorContext = React.createContext(null);
  RouteErrorContext.displayName = "RouteError";
  var ENABLE_DEV_WARNINGS = true;
  var ERROR_DIGEST_BASE = "REACT_ROUTER_ERROR";
  var ERROR_DIGEST_REDIRECT = "REDIRECT";
  var ERROR_DIGEST_ROUTE_ERROR_RESPONSE = "ROUTE_ERROR_RESPONSE";
  function decodeRedirectErrorDigest(digest) {
    if (digest.startsWith(`${ERROR_DIGEST_BASE}:${ERROR_DIGEST_REDIRECT}:{`)) {
      try {
        let parsed = JSON.parse(digest.slice(28));
        if (typeof parsed === "object" && parsed && typeof parsed.status === "number" && typeof parsed.statusText === "string" && typeof parsed.location === "string" && typeof parsed.reloadDocument === "boolean" && typeof parsed.replace === "boolean") {
          return parsed;
        }
      } catch {
      }
    }
  }
  function decodeRouteErrorResponseDigest(digest) {
    if (digest.startsWith(
      `${ERROR_DIGEST_BASE}:${ERROR_DIGEST_ROUTE_ERROR_RESPONSE}:{`
    )) {
      try {
        let parsed = JSON.parse(digest.slice(40));
        if (typeof parsed === "object" && parsed && typeof parsed.status === "number" && typeof parsed.statusText === "string") {
          return new ErrorResponseImpl(
            parsed.status,
            parsed.statusText,
            parsed.data
          );
        }
      } catch {
      }
    }
  }
  function useHref(to2, { relative } = {}) {
    invariant(
      useInRouterContext(),
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      `useHref() may be used only in the context of a <Router> component.`
    );
    let { basename, navigator: navigator2 } = React2.useContext(NavigationContext);
    let { hash, pathname, search } = useResolvedPath(to2, { relative });
    let joinedPathname = pathname;
    if (basename !== "/") {
      joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
    }
    return navigator2.createHref({ pathname: joinedPathname, search, hash });
  }
  function useInRouterContext() {
    return React2.useContext(LocationContext) != null;
  }
  function useLocation() {
    invariant(
      useInRouterContext(),
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      `useLocation() may be used only in the context of a <Router> component.`
    );
    return React2.useContext(LocationContext).location;
  }
  var navigateEffectWarning = `You should call navigate() in a React.useEffect(), not when your component is first rendered.`;
  function useIsomorphicLayoutEffect(cb) {
    let isStatic = React2.useContext(NavigationContext).static;
    if (!isStatic) {
      React2.useLayoutEffect(cb);
    }
  }
  function useNavigate() {
    let { isDataRoute } = React2.useContext(RouteContext);
    return isDataRoute ? useNavigateStable() : useNavigateUnstable();
  }
  function useNavigateUnstable() {
    invariant(
      useInRouterContext(),
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      `useNavigate() may be used only in the context of a <Router> component.`
    );
    let dataRouterContext = React2.useContext(DataRouterContext);
    let { basename, navigator: navigator2 } = React2.useContext(NavigationContext);
    let { matches } = React2.useContext(RouteContext);
    let { pathname: locationPathname } = useLocation();
    let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
    let activeRef = React2.useRef(false);
    useIsomorphicLayoutEffect(() => {
      activeRef.current = true;
    });
    let navigate = React2.useCallback(
      (to2, options = {}) => {
        warning(activeRef.current, navigateEffectWarning);
        if (!activeRef.current) return;
        if (typeof to2 === "number") {
          navigator2.go(to2);
          return;
        }
        let path = resolveTo(
          to2,
          JSON.parse(routePathnamesJson),
          locationPathname,
          options.relative === "path"
        );
        if (dataRouterContext == null && basename !== "/") {
          path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
        }
        validateNavigationTarget(
          typeof to2 === "string" ? to2 : createPath(to2),
          navigator2.createHref(path),
          getNavigatorCurrentUrl(navigator2),
          "reject"
        );
        (!!options.replace ? navigator2.replace : navigator2.push)(
          path,
          options.state,
          options
        );
      },
      [
        basename,
        navigator2,
        routePathnamesJson,
        locationPathname,
        dataRouterContext
      ]
    );
    return navigate;
  }
  var OutletContext = React2.createContext(null);
  function useResolvedPath(to2, { relative } = {}) {
    let { matches } = React2.useContext(RouteContext);
    let { pathname: locationPathname } = useLocation();
    let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
    return React2.useMemo(
      () => resolveTo(
        to2,
        JSON.parse(routePathnamesJson),
        locationPathname,
        relative === "path"
      ),
      [to2, routePathnamesJson, locationPathname, relative]
    );
  }
  function useRoutesImpl(routes, locationArg, dataRouterOpts) {
    invariant(
      useInRouterContext(),
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      `useRoutes() may be used only in the context of a <Router> component.`
    );
    let { navigator: navigator2 } = React2.useContext(NavigationContext);
    let { matches: parentMatches } = React2.useContext(RouteContext);
    let routeMatch = parentMatches[parentMatches.length - 1];
    let parentParams = routeMatch ? routeMatch.params : {};
    let parentPathname = routeMatch ? routeMatch.pathname : "/";
    let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
    let parentRoute = routeMatch && routeMatch.route;
    if (ENABLE_DEV_WARNINGS) {
      let parentPath = parentRoute && parentRoute.path || "";
      warningOnce(
        parentPathname,
        !parentRoute || parentPath.endsWith("*") || parentPath.endsWith("*?"),
        `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${parentPathname}" (under <Route path="${parentPath}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${parentPath}"> to <Route path="${parentPath === "/" ? "*" : `${parentPath}/*`}">.`
      );
    }
    let locationFromContext = useLocation();
    let location;
    if (locationArg) {
      let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
      invariant(
        parentPathnameBase === "/" || parsedLocationArg.pathname?.startsWith(parentPathnameBase),
        `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${parentPathnameBase}" but pathname "${parsedLocationArg.pathname}" was given in the \`location\` prop.`
      );
      location = parsedLocationArg;
    } else {
      location = locationFromContext;
    }
    let pathname = location.pathname || "/";
    let remainingPathname = pathname;
    if (parentPathnameBase !== "/") {
      let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
      let segments = pathname.replace(/^\//, "").split("/");
      remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
    }
    let matches = dataRouterOpts && dataRouterOpts.state.matches.length ? (
      // If we're in a data router, use the matches we've already identified but ensure
      // we have the latest route instances from the manifest in case elements have changed
      dataRouterOpts.state.matches.map(
        (m) => Object.assign(m, {
          route: dataRouterOpts.manifest[m.route.id] || m.route
        })
      )
    ) : matchRoutes(routes, { pathname: remainingPathname });
    if (ENABLE_DEV_WARNINGS) {
      warning(
        parentRoute || matches != null,
        `No routes matched location "${location.pathname}${location.search}${location.hash}" `
      );
      warning(
        matches == null || matches[matches.length - 1].route.element !== void 0 || matches[matches.length - 1].route.Component !== void 0 || matches[matches.length - 1].route.lazy !== void 0,
        `Matched leaf route at location "${location.pathname}${location.search}${location.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
      );
    }
    let renderedMatches = _renderMatches(
      matches && matches.map(
        (match) => Object.assign({}, match, {
          params: Object.assign({}, parentParams, match.params),
          pathname: joinPaths([
            parentPathnameBase,
            // Re-encode pathnames that were decoded inside matchRoutes.
            // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
            // `new URL()` internally and we need to prevent it from treating
            // them as separators
            navigator2.encodeLocation ? navigator2.encodeLocation(
              match.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
            ).pathname : match.pathname
          ]),
          pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
            parentPathnameBase,
            // Re-encode pathnames that were decoded inside matchRoutes
            // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
            // `new URL()` internally and we need to prevent it from treating
            // them as separators
            navigator2.encodeLocation ? navigator2.encodeLocation(
              match.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
            ).pathname : match.pathnameBase
          ])
        })
      ),
      parentMatches,
      dataRouterOpts
    );
    if (locationArg && renderedMatches) {
      return /* @__PURE__ */ React2.createElement(
        LocationContext.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              mask: void 0,
              ...location
            },
            navigationType: "POP"
            /* Pop */
          }
        },
        renderedMatches
      );
    }
    return renderedMatches;
  }
  function DefaultErrorComponent() {
    let error = useRouteError();
    let message = isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : error instanceof Error ? error.message : JSON.stringify(error);
    let stack = error instanceof Error ? error.stack : null;
    let lightgrey = "rgba(200,200,200, 0.5)";
    let preStyles = { padding: "0.5rem", backgroundColor: lightgrey };
    let codeStyles = { padding: "2px 4px", backgroundColor: lightgrey };
    let devInfo = null;
    if (ENABLE_DEV_WARNINGS) {
      console.error(
        "Error handled by React Router default ErrorBoundary:",
        error
      );
      devInfo = /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement("p", null, "\u{1F4BF} Hey developer \u{1F44B}"), /* @__PURE__ */ React2.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ React2.createElement("code", { style: codeStyles }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ React2.createElement("code", { style: codeStyles }, "errorElement"), " prop on your route."));
    }
    return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ React2.createElement("h3", { style: { fontStyle: "italic" } }, message), stack ? /* @__PURE__ */ React2.createElement("pre", { style: preStyles }, stack) : null, devInfo);
  }
  var defaultErrorElement = /* @__PURE__ */ React2.createElement(DefaultErrorComponent, null);
  var RenderErrorBoundary = class extends React2.Component {
    constructor(props) {
      super(props);
      this.state = {
        location: props.location,
        revalidation: props.revalidation,
        error: props.error
      };
    }
    static getDerivedStateFromError(error) {
      return { error };
    }
    static getDerivedStateFromProps(props, state) {
      if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
        return {
          error: props.error,
          location: props.location,
          revalidation: props.revalidation
        };
      }
      return {
        error: props.error !== void 0 ? props.error : state.error,
        location: state.location,
        revalidation: props.revalidation || state.revalidation
      };
    }
    componentDidCatch(error, errorInfo) {
      if (this.props.onError) {
        this.props.onError(error, errorInfo);
      } else {
        console.error(
          "React Router caught the following error during render",
          error
        );
      }
    }
    render() {
      let error = this.state.error;
      if (this.context && typeof error === "object" && error && "digest" in error && typeof error.digest === "string") {
        const decoded = decodeRouteErrorResponseDigest(error.digest);
        if (decoded) error = decoded;
      }
      let result = error !== void 0 ? /* @__PURE__ */ React2.createElement(RouteContext.Provider, { value: this.props.routeContext }, /* @__PURE__ */ React2.createElement(
        RouteErrorContext.Provider,
        {
          value: error,
          children: this.props.component
        }
      )) : this.props.children;
      if (this.context) {
        return /* @__PURE__ */ React2.createElement(RSCErrorHandler, { error }, result);
      }
      return result;
    }
  };
  RenderErrorBoundary.contextType = RSCRouterContext;
  var errorRedirectHandledMap = /* @__PURE__ */ new WeakMap();
  function RSCErrorHandler({
    children,
    error
  }) {
    let { basename, navigator: navigator2 } = React2.useContext(NavigationContext);
    if (typeof error === "object" && error && "digest" in error && typeof error.digest === "string") {
      let redirect2 = decodeRedirectErrorDigest(error.digest);
      if (redirect2) {
        let existingRedirect = errorRedirectHandledMap.get(error);
        if (existingRedirect) throw existingRedirect;
        let parsed = parseToInfo(redirect2.location, basename);
        let target = parsed.absoluteURL || parsed.to;
        validateNavigationTarget(
          redirect2.location,
          target,
          getNavigatorCurrentUrl(navigator2),
          "allow-explicit"
        );
        if (hasInvalidProtocol(target)) {
          throw new Error("Invalid redirect location");
        }
        if (isBrowser && !errorRedirectHandledMap.get(error)) {
          if (parsed.isExternal || redirect2.reloadDocument) {
            window.location.href = target;
          } else {
            const redirectPromise = Promise.resolve().then(
              () => window.__reactRouterDataRouter.navigate(parsed.to, {
                replace: redirect2.replace
              })
            );
            errorRedirectHandledMap.set(error, redirectPromise);
            throw redirectPromise;
          }
        }
        return /* @__PURE__ */ React2.createElement("meta", { httpEquiv: "refresh", content: `0;url=${target}` });
      }
    }
    return children;
  }
  function RenderedRoute({ routeContext, match, children }) {
    let dataRouterContext = React2.useContext(DataRouterContext);
    if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
      dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
    }
    return /* @__PURE__ */ React2.createElement(RouteContext.Provider, { value: routeContext }, children);
  }
  function _renderMatches(matches, parentMatches = [], dataRouterOpts) {
    let dataRouterState = dataRouterOpts?.state;
    if (matches == null) {
      if (!dataRouterState) {
        return null;
      }
      if (dataRouterState.errors) {
        matches = dataRouterState.matches;
      } else if (parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) {
        matches = dataRouterState.matches;
      } else {
        return null;
      }
    }
    let renderedMatches = matches;
    let errors = dataRouterState?.errors;
    if (errors != null) {
      let errorIndex = renderedMatches.findIndex(
        (m) => m.route.id && errors?.[m.route.id] !== void 0
      );
      invariant(
        errorIndex >= 0,
        `Could not find a matching route for errors on route IDs: ${Object.keys(
          errors
        ).join(",")}`
      );
      renderedMatches = renderedMatches.slice(
        0,
        Math.min(renderedMatches.length, errorIndex + 1)
      );
    }
    let renderFallback = false;
    let fallbackIndex = -1;
    if (dataRouterOpts && dataRouterState) {
      renderFallback = dataRouterState.renderFallback;
      for (let i = 0; i < renderedMatches.length; i++) {
        let match = renderedMatches[i];
        if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
          fallbackIndex = i;
        }
        if (match.route.id) {
          let { loaderData, errors: errors2 } = dataRouterState;
          let needsToRunLoader = match.route.loader && !loaderData.hasOwnProperty(match.route.id) && (!errors2 || errors2[match.route.id] === void 0);
          if (match.route.lazy || needsToRunLoader) {
            if (dataRouterOpts.isStatic) {
              renderFallback = true;
            }
            if (fallbackIndex >= 0) {
              renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
            } else {
              renderedMatches = [renderedMatches[0]];
            }
            break;
          }
        }
      }
    }
    let onErrorHandler = dataRouterOpts?.onError;
    let onError = dataRouterState && onErrorHandler ? (error, errorInfo) => {
      onErrorHandler(error, {
        location: dataRouterState.location,
        params: dataRouterState.matches?.[0]?.params ?? {},
        pattern: getRoutePattern(dataRouterState.matches),
        errorInfo
      });
    } : void 0;
    return renderedMatches.reduceRight(
      (outlet, match, index) => {
        let error;
        let shouldRenderHydrateFallback = false;
        let errorElement = null;
        let hydrateFallbackElement = null;
        if (dataRouterState) {
          error = errors && match.route.id ? errors[match.route.id] : void 0;
          errorElement = match.route.errorElement || defaultErrorElement;
          if (renderFallback) {
            if (fallbackIndex < 0 && index === 0) {
              warningOnce(
                "route-fallback",
                false,
                "No `HydrateFallback` element provided to render during initial hydration"
              );
              shouldRenderHydrateFallback = true;
              hydrateFallbackElement = null;
            } else if (fallbackIndex === index) {
              shouldRenderHydrateFallback = true;
              hydrateFallbackElement = match.route.hydrateFallbackElement || null;
            }
          }
        }
        let matches2 = parentMatches.concat(renderedMatches.slice(0, index + 1));
        let getChildren = () => {
          let children;
          if (error) {
            children = errorElement;
          } else if (shouldRenderHydrateFallback) {
            children = hydrateFallbackElement;
          } else if (match.route.Component) {
            children = /* @__PURE__ */ React2.createElement(match.route.Component, null);
          } else if (match.route.element) {
            children = match.route.element;
          } else {
            children = outlet;
          }
          return /* @__PURE__ */ React2.createElement(
            RenderedRoute,
            {
              match,
              routeContext: {
                outlet,
                matches: matches2,
                isDataRoute: dataRouterState != null
              },
              children
            }
          );
        };
        return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /* @__PURE__ */ React2.createElement(
          RenderErrorBoundary,
          {
            location: dataRouterState.location,
            revalidation: dataRouterState.revalidation,
            component: errorElement,
            error,
            children: getChildren(),
            routeContext: { outlet: null, matches: matches2, isDataRoute: true },
            onError
          }
        ) : getChildren();
      },
      null
    );
  }
  function getDataRouterConsoleError(hookName) {
    return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function useDataRouterContext(hookName) {
    let ctx = React2.useContext(DataRouterContext);
    invariant(ctx, getDataRouterConsoleError(hookName));
    return ctx;
  }
  function useDataRouterState(hookName) {
    let state = React2.useContext(DataRouterStateContext);
    invariant(state, getDataRouterConsoleError(hookName));
    return state;
  }
  function useRouteContext(hookName) {
    let route = React2.useContext(RouteContext);
    invariant(route, getDataRouterConsoleError(hookName));
    return route;
  }
  function useCurrentRouteId(hookName) {
    let route = useRouteContext(hookName);
    let thisRoute = route.matches[route.matches.length - 1];
    invariant(
      thisRoute.route.id,
      `${hookName} can only be used on routes that contain a unique "id"`
    );
    return thisRoute.route.id;
  }
  function useRouteId() {
    return useCurrentRouteId(
      "useRouteId"
      /* UseRouteId */
    );
  }
  function useNavigation() {
    let state = useDataRouterState(
      "useNavigation"
      /* UseNavigation */
    );
    return React2.useMemo(() => {
      let { matches, historyAction, ...rest } = state.navigation;
      return rest;
    }, [state.navigation]);
  }
  function useMatches() {
    let { matches, loaderData } = useDataRouterState(
      "useMatches"
      /* UseMatches */
    );
    return React2.useMemo(
      () => matches.map((m) => convertRouteMatchToUiMatch(m, loaderData)),
      [matches, loaderData]
    );
  }
  function useRouteError() {
    let error = React2.useContext(RouteErrorContext);
    let state = useDataRouterState(
      "useRouteError"
      /* UseRouteError */
    );
    let routeId = useCurrentRouteId(
      "useRouteError"
      /* UseRouteError */
    );
    if (error !== void 0) {
      return error;
    }
    return state.errors?.[routeId];
  }
  function useNavigateStable() {
    let { router } = useDataRouterContext(
      "useNavigate"
      /* UseNavigateStable */
    );
    let id2 = useCurrentRouteId(
      "useNavigate"
      /* UseNavigateStable */
    );
    let activeRef = React2.useRef(false);
    useIsomorphicLayoutEffect(() => {
      activeRef.current = true;
    });
    let navigate = React2.useCallback(
      async (to2, options = {}) => {
        warning(activeRef.current, navigateEffectWarning);
        if (!activeRef.current) return;
        if (typeof to2 === "number") {
          await router.navigate(to2);
        } else {
          await router.navigate(to2, { fromRouteId: id2, ...options });
        }
      },
      [router, id2]
    );
    return navigate;
  }
  var alreadyWarned = {};
  function warningOnce(key, cond, message) {
    if (!cond && !alreadyWarned[key]) {
      alreadyWarned[key] = true;
      warning(false, message);
    }
  }
  var USE_OPTIMISTIC = "useOptimistic";
  var useOptimisticImpl = React3[USE_OPTIMISTIC];
  var MemoizedDataRoutes = React3.memo(DataRoutes2);
  function DataRoutes2({
    routes,
    manifest,
    future,
    state,
    isStatic,
    onError
  }) {
    return useRoutesImpl(routes, void 0, {
      manifest,
      state,
      isStatic,
      onError,
      future
    });
  }
  function MemoryRouter({
    basename,
    children,
    initialEntries,
    initialIndex,
    useTransitions
  }) {
    let historyRef = React3.useRef();
    if (historyRef.current == null) {
      historyRef.current = createMemoryHistory({
        initialEntries,
        initialIndex,
        v5Compat: true
      });
    }
    let history = historyRef.current;
    let [state, setStateImpl] = React3.useState({
      action: history.action,
      location: history.location
    });
    let setState = React3.useCallback(
      (newState) => {
        if (useTransitions === false) {
          setStateImpl(newState);
        } else {
          React3.startTransition(() => setStateImpl(newState));
        }
      },
      [useTransitions]
    );
    React3.useLayoutEffect(() => history.listen(setState), [history, setState]);
    return /* @__PURE__ */ React3.createElement(
      Router,
      {
        basename,
        children,
        location: state.location,
        navigationType: state.action,
        navigator: history,
        useTransitions
      }
    );
  }
  function Router({
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = "POP",
    navigator: navigator2,
    static: staticProp = false,
    useTransitions
  }) {
    invariant(
      !useInRouterContext(),
      `You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`
    );
    let basename = basenameProp.replace(/^\/*/, "/");
    let navigationContext = React3.useMemo(
      () => ({
        basename,
        navigator: navigator2,
        static: staticProp,
        useTransitions,
        future: {}
      }),
      [basename, navigator2, staticProp, useTransitions]
    );
    if (typeof locationProp === "string") {
      locationProp = parsePath(locationProp);
    }
    let {
      pathname = "/",
      search = "",
      hash = "",
      state = null,
      key = "default",
      mask
    } = locationProp;
    let locationContext = React3.useMemo(() => {
      let trailingPathname = stripBasename(pathname, basename);
      if (trailingPathname == null) {
        return null;
      }
      return {
        location: {
          pathname: trailingPathname,
          search,
          hash,
          state,
          key,
          mask
        },
        navigationType
      };
    }, [basename, pathname, search, hash, state, key, navigationType, mask]);
    warning(
      locationContext != null,
      `<Router basename="${basename}"> is not able to match the URL "${pathname}${search}${hash}" because it does not start with the basename, so the <Router> won't render anything.`
    );
    if (locationContext == null) {
      return null;
    }
    return /* @__PURE__ */ React3.createElement(NavigationContext.Provider, { value: navigationContext }, /* @__PURE__ */ React3.createElement(LocationContext.Provider, { children, value: locationContext }));
  }
  var defaultMethod = "get";
  var defaultEncType = "application/x-www-form-urlencoded";
  function isHtmlElement(object) {
    return typeof HTMLElement !== "undefined" && object instanceof HTMLElement;
  }
  function isButtonElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
  }
  function isFormElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
  }
  function isInputElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
  }
  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }
  function shouldProcessLinkClick(event, target) {
    return event.button === 0 && // Ignore everything but left clicks
    (!target || target === "_self") && // Let browser handle "target=_blank" etc.
    !isModifiedEvent(event);
  }
  var _formDataSupportsSubmitter = null;
  function isFormDataSubmitterSupported() {
    if (_formDataSupportsSubmitter === null) {
      try {
        new FormData(
          document.createElement("form"),
          // @ts-expect-error if FormData supports the submitter parameter, this will throw
          0
        );
        _formDataSupportsSubmitter = false;
      } catch (e2) {
        _formDataSupportsSubmitter = true;
      }
    }
    return _formDataSupportsSubmitter;
  }
  var supportedFormEncTypes = /* @__PURE__ */ new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
  ]);
  function getFormEncType(encType) {
    if (encType != null && !supportedFormEncTypes.has(encType)) {
      warning(
        false,
        `"${encType}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${defaultEncType}"`
      );
      return null;
    }
    return encType;
  }
  function getFormSubmissionInfo(target, basename) {
    let method;
    let action;
    let encType;
    let formData;
    let body;
    if (isFormElement(target)) {
      let attr = target.getAttribute("action");
      action = attr ? stripBasename(attr, basename) : null;
      method = target.getAttribute("method") || defaultMethod;
      encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
      formData = new FormData(target);
    } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
      let form = target.form;
      if (form == null) {
        throw new Error(
          `Cannot submit a <button> or <input type="submit"> without a <form>`
        );
      }
      let attr = target.getAttribute("formaction") || form.getAttribute("action");
      action = attr ? stripBasename(attr, basename) : null;
      method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
      encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
      formData = new FormData(form, target);
      if (!isFormDataSubmitterSupported()) {
        let { name, type, value } = target;
        if (type === "image") {
          let prefix = name ? `${name}.` : "";
          formData.append(`${prefix}x`, "0");
          formData.append(`${prefix}y`, "0");
        } else if (name) {
          formData.append(name, value);
        }
      }
    } else if (isHtmlElement(target)) {
      throw new Error(
        `Cannot submit element that is not <form>, <button>, or <input type="submit|image">`
      );
    } else {
      method = defaultMethod;
      action = null;
      encType = defaultEncType;
      body = target;
    }
    if (formData && encType === "text/plain") {
      body = formData;
      formData = void 0;
    }
    return { action, method: method.toLowerCase(), encType, formData, body };
  }
  var objectProtoNames2 = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
  var ESCAPE_LOOKUP = {
    "&": "\\u0026",
    ">": "\\u003e",
    "<": "\\u003c",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
  };
  var ESCAPE_REGEX = /[&><\u2028\u2029]/g;
  function escapeHtml(html) {
    return html.replace(ESCAPE_REGEX, (match) => ESCAPE_LOOKUP[match]);
  }
  function invariant2(value, message) {
    if (value === false || value === null || typeof value === "undefined") {
      throw new Error(message);
    }
  }
  function singleFetchUrl(reqUrl, basename, trailingSlashAware, extension) {
    let url = typeof reqUrl === "string" ? new URL(
      reqUrl,
      // This can be called during the SSR flow via PrefetchPageLinksImpl so
      // don't assume window is available
      typeof window === "undefined" ? "server://singlefetch/" : window.location.origin
    ) : reqUrl;
    if (trailingSlashAware) {
      if (url.pathname.endsWith("/")) {
        url.pathname = `${url.pathname}_.${extension}`;
      } else {
        url.pathname = `${url.pathname}.${extension}`;
      }
    } else {
      if (url.pathname === "/") {
        url.pathname = `_root.${extension}`;
      } else if (basename && stripBasename(url.pathname, basename) === "/") {
        url.pathname = `${removeTrailingSlash(basename)}/_root.${extension}`;
      } else {
        url.pathname = `${removeTrailingSlash(url.pathname)}.${extension}`;
      }
    }
    return url;
  }
  async function loadRouteModule(route, routeModulesCache) {
    if (route.id in routeModulesCache) {
      return routeModulesCache[route.id];
    }
    try {
      let routeModule = await import(
        /* @vite-ignore */
        /* webpackIgnore: true */
        route.module
      );
      routeModulesCache[route.id] = routeModule;
      return routeModule;
    } catch (error) {
      console.error(
        `Error loading route module \`${route.module}\`, reloading page...`
      );
      console.error(error);
      if (window.__reactRouterContext && window.__reactRouterContext.isSpaMode && // @ts-expect-error
      import_meta.hot) {
        throw error;
      }
      window.location.reload();
      return new Promise(() => {
      });
    }
  }
  function isPageLinkDescriptor(object) {
    return object != null && typeof object.page === "string";
  }
  function isHtmlLinkDescriptor(object) {
    if (object == null) {
      return false;
    }
    if (object.href == null) {
      return object.rel === "preload" && typeof object.imageSrcSet === "string" && typeof object.imageSizes === "string";
    }
    return typeof object.rel === "string" && typeof object.href === "string";
  }
  async function getKeyedPrefetchLinks(matches, manifest, routeModules) {
    let links = await Promise.all(
      matches.map(async (match) => {
        let route = manifest.routes[match.route.id];
        if (route) {
          let mod = await loadRouteModule(route, routeModules);
          return mod.links ? mod.links() : [];
        }
        return [];
      })
    );
    return dedupeLinkDescriptors(
      links.flat(1).filter(isHtmlLinkDescriptor).filter((link) => link.rel === "stylesheet" || link.rel === "preload").map(
        (link) => link.rel === "stylesheet" ? { ...link, rel: "prefetch", as: "style" } : { ...link, rel: "prefetch" }
      )
    );
  }
  function getNewMatchesForLinks(page, nextMatches, currentMatches, manifest, location, mode) {
    let isNew = (match, index) => {
      if (!currentMatches[index]) return true;
      return match.route.id !== currentMatches[index].route.id;
    };
    let matchPathChanged = (match, index) => {
      return (
        // param change, /users/123 -> /users/456
        currentMatches[index].pathname !== match.pathname || // splat param changed, which is not present in match.path
        // e.g. /files/images/avatar.jpg -> files/finances.xls
        currentMatches[index].route.path?.endsWith("*") && currentMatches[index].params["*"] !== match.params["*"]
      );
    };
    if (mode === "assets") {
      return nextMatches.filter(
        (match, index) => isNew(match, index) || matchPathChanged(match, index)
      );
    }
    if (mode === "data") {
      return nextMatches.filter((match, index) => {
        let manifestRoute = manifest.routes[match.route.id];
        if (!manifestRoute || !manifestRoute.hasLoader) {
          return false;
        }
        if (isNew(match, index) || matchPathChanged(match, index)) {
          return true;
        }
        if (match.route.shouldRevalidate) {
          let routeChoice = match.route.shouldRevalidate({
            currentUrl: new URL(
              location.pathname + location.search + location.hash,
              window.origin
            ),
            currentParams: currentMatches[0]?.params || {},
            nextUrl: new URL(page, window.origin),
            nextParams: match.params,
            defaultShouldRevalidate: true
          });
          if (typeof routeChoice === "boolean") {
            return routeChoice;
          }
        }
        return true;
      });
    }
    return [];
  }
  function getModuleLinkHrefs(matches, manifest, { includeHydrateFallback } = {}) {
    return dedupeHrefs(
      matches.map((match) => {
        let route = manifest.routes[match.route.id];
        if (!route) return [];
        let hrefs = [route.module];
        if (route.clientActionModule) {
          hrefs = hrefs.concat(route.clientActionModule);
        }
        if (route.clientLoaderModule) {
          hrefs = hrefs.concat(route.clientLoaderModule);
        }
        if (includeHydrateFallback && route.hydrateFallbackModule) {
          hrefs = hrefs.concat(route.hydrateFallbackModule);
        }
        if (route.imports) {
          hrefs = hrefs.concat(route.imports);
        }
        return hrefs;
      }).flat(1)
    );
  }
  function dedupeHrefs(hrefs) {
    return [...new Set(hrefs)];
  }
  function sortKeys(obj) {
    let sorted = {};
    let keys = Object.keys(obj).sort();
    for (let key of keys) {
      sorted[key] = obj[key];
    }
    return sorted;
  }
  function dedupeLinkDescriptors(descriptors, preloads) {
    let set = /* @__PURE__ */ new Set();
    let preloadsSet = new Set(preloads);
    return descriptors.reduce((deduped, descriptor) => {
      let alreadyModulePreload = preloads && !isPageLinkDescriptor(descriptor) && descriptor.as === "script" && descriptor.href && preloadsSet.has(descriptor.href);
      if (alreadyModulePreload) {
        return deduped;
      }
      let key = JSON.stringify(sortKeys(descriptor));
      if (!set.has(key)) {
        set.add(key);
        deduped.push({ key, link: descriptor });
      }
      return deduped;
    }, []);
  }
  function useDataRouterContext2() {
    let context = React8.useContext(DataRouterContext);
    invariant2(
      context,
      "You must render this element inside a <DataRouterContext.Provider> element"
    );
    return context;
  }
  function useDataRouterStateContext() {
    let context = React8.useContext(DataRouterStateContext);
    invariant2(
      context,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    );
    return context;
  }
  var FrameworkContext = React8.createContext(void 0);
  FrameworkContext.displayName = "FrameworkContext";
  function useFrameworkContext() {
    let context = React8.useContext(FrameworkContext);
    invariant2(
      context,
      "You must render this element inside a <HydratedRouter> element"
    );
    return context;
  }
  function usePrefetchBehavior(prefetch, theirElementProps) {
    let frameworkContext = React8.useContext(FrameworkContext);
    let [maybePrefetch, setMaybePrefetch] = React8.useState(false);
    let [shouldPrefetch, setShouldPrefetch] = React8.useState(false);
    let { onFocus, onBlur, onMouseEnter, onMouseLeave, onTouchStart } = theirElementProps;
    let ref = React8.useRef(null);
    React8.useEffect(() => {
      if (prefetch === "render") {
        setShouldPrefetch(true);
      }
      if (prefetch === "viewport") {
        let callback = (entries) => {
          entries.forEach((entry) => {
            setShouldPrefetch(entry.isIntersecting);
          });
        };
        let observer = new IntersectionObserver(callback, { threshold: 0.5 });
        if (ref.current) observer.observe(ref.current);
        return () => {
          observer.disconnect();
        };
      }
    }, [prefetch]);
    React8.useEffect(() => {
      if (maybePrefetch) {
        let id2 = setTimeout(() => {
          setShouldPrefetch(true);
        }, 100);
        return () => {
          clearTimeout(id2);
        };
      }
    }, [maybePrefetch]);
    let setIntent = () => {
      setMaybePrefetch(true);
    };
    let cancelIntent = () => {
      setMaybePrefetch(false);
      setShouldPrefetch(false);
    };
    if (!frameworkContext) {
      return [false, ref, {}];
    }
    if (prefetch !== "intent") {
      return [shouldPrefetch, ref, {}];
    }
    return [
      shouldPrefetch,
      ref,
      {
        onFocus: composeEventHandlers(onFocus, setIntent),
        onBlur: composeEventHandlers(onBlur, cancelIntent),
        onMouseEnter: composeEventHandlers(onMouseEnter, setIntent),
        onMouseLeave: composeEventHandlers(onMouseLeave, cancelIntent),
        onTouchStart: composeEventHandlers(onTouchStart, setIntent)
      }
    ];
  }
  function composeEventHandlers(theirHandler, ourHandler) {
    return (event) => {
      theirHandler && theirHandler(event);
      if (!event.defaultPrevented) {
        ourHandler(event);
      }
    };
  }
  function PrefetchPageLinks({ page, ...linkProps }) {
    let rsc = useIsRSCRouterContext();
    let { nonce: contextNonce } = useFrameworkContext();
    let { router } = useDataRouterContext2();
    let matches = React8.useMemo(
      () => matchRoutes(router.routes, page, router.basename),
      [router.routes, page, router.basename]
    );
    if (!matches) {
      return null;
    }
    if (linkProps.nonce == null && contextNonce) {
      linkProps = { ...linkProps, nonce: contextNonce };
    }
    if (rsc) {
      return /* @__PURE__ */ React8.createElement(RSCPrefetchPageLinksImpl, { page, matches, ...linkProps });
    }
    return /* @__PURE__ */ React8.createElement(PrefetchPageLinksImpl, { page, matches, ...linkProps });
  }
  function useKeyedPrefetchLinks(matches) {
    let { manifest, routeModules } = useFrameworkContext();
    let [keyedPrefetchLinks, setKeyedPrefetchLinks] = React8.useState([]);
    React8.useEffect(() => {
      let interrupted = false;
      void getKeyedPrefetchLinks(matches, manifest, routeModules).then(
        (links) => {
          if (!interrupted) {
            setKeyedPrefetchLinks(links);
          }
        }
      );
      return () => {
        interrupted = true;
      };
    }, [matches, manifest, routeModules]);
    return keyedPrefetchLinks;
  }
  function RSCPrefetchPageLinksImpl({
    page,
    matches: nextMatches,
    ...linkProps
  }) {
    let location = useLocation();
    let { future } = useFrameworkContext();
    let { basename } = useDataRouterContext2();
    let dataHrefs = React8.useMemo(() => {
      if (page === location.pathname + location.search + location.hash) {
        return [];
      }
      let url = singleFetchUrl(
        page,
        basename,
        future.v8_trailingSlashAwareDataRequests,
        "rsc"
      );
      let hasSomeRoutesWithShouldRevalidate = false;
      let targetRoutes = [];
      for (let match of nextMatches) {
        if (typeof match.route.shouldRevalidate === "function") {
          hasSomeRoutesWithShouldRevalidate = true;
        } else {
          targetRoutes.push(match.route.id);
        }
      }
      if (hasSomeRoutesWithShouldRevalidate && targetRoutes.length > 0) {
        url.searchParams.set("_routes", targetRoutes.join(","));
      }
      return [url.pathname + url.search];
    }, [
      basename,
      future.v8_trailingSlashAwareDataRequests,
      page,
      location,
      nextMatches
    ]);
    return /* @__PURE__ */ React8.createElement(React8.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ React8.createElement("link", { key: href, rel: "prefetch", as: "fetch", href, ...linkProps })));
  }
  function PrefetchPageLinksImpl({
    page,
    matches: nextMatches,
    ...linkProps
  }) {
    let location = useLocation();
    let { future, manifest, routeModules } = useFrameworkContext();
    let { basename } = useDataRouterContext2();
    let { loaderData, matches } = useDataRouterStateContext();
    let newMatchesForData = React8.useMemo(
      () => getNewMatchesForLinks(
        page,
        nextMatches,
        matches,
        manifest,
        location,
        "data"
      ),
      [page, nextMatches, matches, manifest, location]
    );
    let newMatchesForAssets = React8.useMemo(
      () => getNewMatchesForLinks(
        page,
        nextMatches,
        matches,
        manifest,
        location,
        "assets"
      ),
      [page, nextMatches, matches, manifest, location]
    );
    let dataHrefs = React8.useMemo(() => {
      if (page === location.pathname + location.search + location.hash) {
        return [];
      }
      let routesParams = /* @__PURE__ */ new Set();
      let foundOptOutRoute = false;
      nextMatches.forEach((m) => {
        let manifestRoute = manifest.routes[m.route.id];
        if (!manifestRoute || !manifestRoute.hasLoader) {
          return;
        }
        if (!newMatchesForData.some((m2) => m2.route.id === m.route.id) && m.route.id in loaderData && routeModules[m.route.id]?.shouldRevalidate) {
          foundOptOutRoute = true;
        } else if (manifestRoute.hasClientLoader) {
          foundOptOutRoute = true;
        } else {
          routesParams.add(m.route.id);
        }
      });
      if (routesParams.size === 0) {
        return [];
      }
      let url = singleFetchUrl(
        page,
        basename,
        future.v8_trailingSlashAwareDataRequests,
        "data"
      );
      if (foundOptOutRoute && routesParams.size > 0) {
        url.searchParams.set(
          "_routes",
          nextMatches.filter((m) => routesParams.has(m.route.id)).map((m) => m.route.id).join(",")
        );
      }
      return [url.pathname + url.search];
    }, [
      basename,
      future.v8_trailingSlashAwareDataRequests,
      loaderData,
      location,
      manifest,
      newMatchesForData,
      nextMatches,
      page,
      routeModules
    ]);
    let moduleHrefs = React8.useMemo(
      () => getModuleLinkHrefs(newMatchesForAssets, manifest),
      [newMatchesForAssets, manifest]
    );
    let keyedPrefetchLinks = useKeyedPrefetchLinks(newMatchesForAssets);
    return /* @__PURE__ */ React8.createElement(React8.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ React8.createElement("link", { key: href, rel: "prefetch", as: "fetch", href, ...linkProps })), moduleHrefs.map((href) => /* @__PURE__ */ React8.createElement("link", { key: href, rel: "modulepreload", href, ...linkProps })), keyedPrefetchLinks.map(({ key, link }) => (
      // these don't spread `linkProps` because they are full link descriptors
      // already with their own props
      /* @__PURE__ */ React8.createElement(
        "link",
        {
          key,
          nonce: linkProps.nonce,
          ...link,
          crossOrigin: link.crossOrigin ?? linkProps.crossOrigin
        }
      )
    )));
  }
  function mergeRefs(...refs) {
    return (value) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(value);
        } else if (ref != null) {
          ref.current = value;
        }
      });
    };
  }
  var isBrowser2 = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
  try {
    if (isBrowser2) {
      window.__reactRouterVersion = // @ts-expect-error
      "7.18.3";
    }
  } catch (e2) {
  }
  function HistoryRouter({
    basename,
    children,
    history,
    useTransitions
  }) {
    let [state, setStateImpl] = React10.useState({
      action: history.action,
      location: history.location
    });
    let setState = React10.useCallback(
      (newState) => {
        if (useTransitions === false) {
          setStateImpl(newState);
        } else {
          React10.startTransition(() => setStateImpl(newState));
        }
      },
      [useTransitions]
    );
    React10.useLayoutEffect(() => history.listen(setState), [history, setState]);
    return /* @__PURE__ */ React10.createElement(
      Router,
      {
        basename,
        children,
        location: state.location,
        navigationType: state.action,
        navigator: history,
        useTransitions
      }
    );
  }
  HistoryRouter.displayName = "unstable_HistoryRouter";
  var Link = React10.forwardRef(
    function LinkWithRef({
      onClick,
      discover = "render",
      prefetch = "none",
      relative,
      reloadDocument,
      replace: replace2,
      mask,
      state,
      target,
      to: to2,
      preventScrollReset,
      viewTransition,
      defaultShouldRevalidate,
      ...rest
    }, forwardedRef) {
      let { basename, navigator: navigator2, useTransitions } = React10.useContext(NavigationContext);
      let isAbsolute = typeof to2 === "string" && ABSOLUTE_URL_REGEX.test(to2);
      let parsed = parseToInfo(to2, basename);
      to2 = parsed.to;
      let href = useHref(to2, { relative });
      let location = useLocation();
      let maskedHref = null;
      if (mask) {
        let resolved = resolveTo(
          mask,
          [],
          location.mask ? location.mask.pathname : "/",
          true
        );
        if (basename !== "/") {
          resolved.pathname = resolved.pathname === "/" ? basename : joinPaths([basename, resolved.pathname]);
        }
        maskedHref = navigator2.createHref(resolved);
      }
      let [shouldPrefetch, prefetchRef, prefetchHandlers] = usePrefetchBehavior(
        prefetch,
        rest
      );
      let internalOnClick = useLinkClickHandler(to2, {
        replace: replace2,
        mask,
        state,
        target,
        preventScrollReset,
        relative,
        viewTransition,
        defaultShouldRevalidate,
        useTransitions
      });
      function handleClick(event) {
        if (onClick) onClick(event);
        if (!event.defaultPrevented) {
          internalOnClick(event);
        }
      }
      let isSpaLink = !(parsed.isExternal || reloadDocument);
      let link = (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        /* @__PURE__ */ React10.createElement(
          "a",
          {
            ...rest,
            ...prefetchHandlers,
            href: (isSpaLink ? maskedHref : void 0) || parsed.absoluteURL || href,
            onClick: isSpaLink ? handleClick : onClick,
            ref: mergeRefs(forwardedRef, prefetchRef),
            target,
            "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
          }
        )
      );
      return shouldPrefetch && !isAbsolute ? /* @__PURE__ */ React10.createElement(React10.Fragment, null, link, /* @__PURE__ */ React10.createElement(PrefetchPageLinks, { page: href })) : link;
    }
  );
  Link.displayName = "Link";
  var NavLink = React10.forwardRef(
    function NavLinkWithRef({
      "aria-current": ariaCurrentProp = "page",
      caseSensitive = false,
      className: classNameProp = "",
      end = false,
      style: styleProp,
      to: to2,
      viewTransition,
      children,
      ...rest
    }, ref) {
      let path = useResolvedPath(to2, { relative: rest.relative });
      let location = useLocation();
      let routerState = React10.useContext(DataRouterStateContext);
      let { navigator: navigator2, basename } = React10.useContext(NavigationContext);
      let isTransitioning = routerState != null && // Conditional usage is OK here because the usage of a data router is static
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useViewTransitionState(path) && viewTransition === true;
      let toPathname = navigator2.encodeLocation ? navigator2.encodeLocation(path).pathname : path.pathname;
      let locationPathname = location.pathname;
      let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
      if (!caseSensitive) {
        locationPathname = locationPathname.toLowerCase();
        nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
        toPathname = toPathname.toLowerCase();
      }
      if (nextLocationPathname && basename) {
        nextLocationPathname = stripBasename(nextLocationPathname, basename) || nextLocationPathname;
      }
      const endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length;
      let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/";
      let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
      let renderProps = {
        isActive,
        isPending,
        isTransitioning
      };
      let ariaCurrent = isActive ? ariaCurrentProp : void 0;
      let className;
      if (typeof classNameProp === "function") {
        className = classNameProp(renderProps);
      } else {
        className = [
          classNameProp,
          isActive ? "active" : null,
          isPending ? "pending" : null,
          isTransitioning ? "transitioning" : null
        ].filter(Boolean).join(" ");
      }
      let style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
      return /* @__PURE__ */ React10.createElement(
        Link,
        {
          ...rest,
          "aria-current": ariaCurrent,
          className,
          ref,
          style,
          to: to2,
          viewTransition
        },
        typeof children === "function" ? children(renderProps) : children
      );
    }
  );
  NavLink.displayName = "NavLink";
  var Form = React10.forwardRef(
    ({
      discover = "render",
      fetcherKey,
      navigate,
      reloadDocument,
      replace: replace2,
      state,
      method = defaultMethod,
      action,
      onSubmit,
      relative,
      preventScrollReset,
      viewTransition,
      defaultShouldRevalidate,
      ...props
    }, forwardedRef) => {
      let { useTransitions } = React10.useContext(NavigationContext);
      let submit = useSubmit();
      let formAction = useFormAction(action, { relative });
      let formMethod = method.toLowerCase() === "get" ? "get" : "post";
      let isAbsolute = typeof action === "string" && ABSOLUTE_URL_REGEX.test(action);
      let submitHandler = (event) => {
        onSubmit && onSubmit(event);
        if (event.defaultPrevented) return;
        event.preventDefault();
        let submitter = event.nativeEvent.submitter;
        let submitMethod = submitter?.getAttribute("formmethod") || method;
        let doSubmit = () => submit(submitter || event.currentTarget, {
          fetcherKey,
          method: submitMethod,
          navigate,
          replace: replace2,
          state,
          relative,
          preventScrollReset,
          viewTransition,
          defaultShouldRevalidate
        });
        if (useTransitions && navigate !== false) {
          React10.startTransition(() => doSubmit());
        } else {
          doSubmit();
        }
      };
      return /* @__PURE__ */ React10.createElement(
        "form",
        {
          ref: forwardedRef,
          method: formMethod,
          action: formAction,
          onSubmit: reloadDocument ? onSubmit : submitHandler,
          ...props,
          "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
        }
      );
    }
  );
  Form.displayName = "Form";
  function ScrollRestoration({
    getKey,
    storageKey,
    ...props
  }) {
    let remixContext = React10.useContext(FrameworkContext);
    let { basename } = React10.useContext(NavigationContext);
    let location = useLocation();
    let matches = useMatches();
    useScrollRestoration({ getKey, storageKey });
    let ssrKey = React10.useMemo(
      () => {
        if (!remixContext || !getKey) return null;
        let userKey = getScrollRestorationKey(
          location,
          matches,
          basename,
          getKey
        );
        return userKey !== location.key ? userKey : null;
      },
      // Nah, we only need this the first time for the SSR render
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
    );
    if (!remixContext || remixContext.isSpaMode) {
      return null;
    }
    let restoreScroll = ((storageKey2, restoreKey) => {
      if (!window.history.state || !window.history.state.key) {
        let key = Math.random().toString(32).slice(2);
        window.history.replaceState({ key }, "");
      }
      try {
        let positions = JSON.parse(sessionStorage.getItem(storageKey2) || "{}");
        let storedY = positions[restoreKey || window.history.state.key];
        if (typeof storedY === "number") {
          window.scrollTo(0, storedY);
        }
      } catch (error) {
        console.error(error);
        sessionStorage.removeItem(storageKey2);
      }
    }).toString();
    if (props.nonce == null && remixContext?.nonce) {
      props.nonce = remixContext.nonce;
    }
    return /* @__PURE__ */ React10.createElement(
      "script",
      {
        ...props,
        suppressHydrationWarning: true,
        dangerouslySetInnerHTML: {
          __html: `(${restoreScroll})(${escapeHtml(
            JSON.stringify(storageKey || SCROLL_RESTORATION_STORAGE_KEY)
          )}, ${escapeHtml(JSON.stringify(ssrKey))})`
        }
      }
    );
  }
  ScrollRestoration.displayName = "ScrollRestoration";
  function getDataRouterConsoleError2(hookName) {
    return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function useDataRouterContext3(hookName) {
    let ctx = React10.useContext(DataRouterContext);
    invariant(ctx, getDataRouterConsoleError2(hookName));
    return ctx;
  }
  function useDataRouterState2(hookName) {
    let state = React10.useContext(DataRouterStateContext);
    invariant(state, getDataRouterConsoleError2(hookName));
    return state;
  }
  function useLinkClickHandler(to2, {
    target,
    replace: replaceProp,
    mask,
    state,
    preventScrollReset,
    relative,
    viewTransition,
    defaultShouldRevalidate,
    useTransitions
  } = {}) {
    let navigate = useNavigate();
    let location = useLocation();
    let path = useResolvedPath(to2, { relative });
    return React10.useCallback(
      (event) => {
        if (shouldProcessLinkClick(event, target)) {
          event.preventDefault();
          let replace2 = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
          let doNavigate = () => navigate(to2, {
            replace: replace2,
            mask,
            state,
            preventScrollReset,
            relative,
            viewTransition,
            defaultShouldRevalidate
          });
          if (useTransitions) {
            React10.startTransition(() => doNavigate());
          } else {
            doNavigate();
          }
        }
      },
      [
        location,
        navigate,
        path,
        replaceProp,
        mask,
        state,
        target,
        to2,
        preventScrollReset,
        relative,
        viewTransition,
        defaultShouldRevalidate,
        useTransitions
      ]
    );
  }
  var fetcherId = 0;
  var getUniqueFetcherId = () => `__${String(++fetcherId)}__`;
  function useSubmit() {
    let { router } = useDataRouterContext3(
      "useSubmit"
      /* UseSubmit */
    );
    let { basename } = React10.useContext(NavigationContext);
    let currentRouteId = useRouteId();
    let routerFetch = router.fetch;
    let routerNavigate = router.navigate;
    return React10.useCallback(
      async (target, options = {}) => {
        let { action, method, encType, formData, body } = getFormSubmissionInfo(
          target,
          basename
        );
        if (options.navigate === false) {
          let key = options.fetcherKey || getUniqueFetcherId();
          await routerFetch(key, currentRouteId, options.action || action, {
            defaultShouldRevalidate: options.defaultShouldRevalidate,
            preventScrollReset: options.preventScrollReset,
            formData,
            body,
            formMethod: options.method || method,
            formEncType: options.encType || encType,
            flushSync: options.flushSync
          });
        } else {
          await routerNavigate(options.action || action, {
            defaultShouldRevalidate: options.defaultShouldRevalidate,
            preventScrollReset: options.preventScrollReset,
            formData,
            body,
            formMethod: options.method || method,
            formEncType: options.encType || encType,
            replace: options.replace,
            state: options.state,
            fromRouteId: currentRouteId,
            flushSync: options.flushSync,
            viewTransition: options.viewTransition
          });
        }
      },
      [routerFetch, routerNavigate, basename, currentRouteId]
    );
  }
  function useFormAction(action, { relative } = {}) {
    let { basename } = React10.useContext(NavigationContext);
    let routeContext = React10.useContext(RouteContext);
    invariant(routeContext, "useFormAction must be used inside a RouteContext");
    let [match] = routeContext.matches.slice(-1);
    let path = { ...useResolvedPath(action ? action : ".", { relative }) };
    let location = useLocation();
    if (action == null) {
      path.search = location.search;
      let params = new URLSearchParams(path.search);
      let indexValues = params.getAll("index");
      let hasNakedIndexParam = indexValues.some((v2) => v2 === "");
      if (hasNakedIndexParam) {
        params.delete("index");
        indexValues.filter((v2) => v2).forEach((v2) => params.append("index", v2));
        let qs = params.toString();
        path.search = qs ? `?${qs}` : "";
      }
    }
    if ((!action || action === ".") && match.route.index) {
      path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
    }
    if (basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
    }
    return createPath(path);
  }
  var SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
  var savedScrollPositions = {};
  function getScrollRestorationKey(location, matches, basename, getKey) {
    let key = null;
    if (getKey) {
      if (basename !== "/") {
        key = getKey(
          {
            ...location,
            pathname: stripBasename(location.pathname, basename) || location.pathname
          },
          matches
        );
      } else {
        key = getKey(location, matches);
      }
    }
    if (key == null) {
      key = location.key;
    }
    return key;
  }
  function useScrollRestoration({
    getKey,
    storageKey
  } = {}) {
    let { router } = useDataRouterContext3(
      "useScrollRestoration"
      /* UseScrollRestoration */
    );
    let { restoreScrollPosition, preventScrollReset } = useDataRouterState2(
      "useScrollRestoration"
      /* UseScrollRestoration */
    );
    let { basename } = React10.useContext(NavigationContext);
    let location = useLocation();
    let matches = useMatches();
    let navigation = useNavigation();
    React10.useEffect(() => {
      window.history.scrollRestoration = "manual";
      return () => {
        window.history.scrollRestoration = "auto";
      };
    }, []);
    usePageHide(
      React10.useCallback(() => {
        if (navigation.state === "idle") {
          let key = getScrollRestorationKey(location, matches, basename, getKey);
          savedScrollPositions[key] = window.scrollY;
        }
        try {
          sessionStorage.setItem(
            storageKey || SCROLL_RESTORATION_STORAGE_KEY,
            JSON.stringify(savedScrollPositions)
          );
        } catch (error) {
          warning(
            false,
            `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${error}).`
          );
        }
        window.history.scrollRestoration = "auto";
      }, [navigation.state, getKey, basename, location, matches, storageKey])
    );
    if (typeof document !== "undefined") {
      React10.useLayoutEffect(() => {
        try {
          let sessionPositions = sessionStorage.getItem(
            storageKey || SCROLL_RESTORATION_STORAGE_KEY
          );
          if (sessionPositions) {
            savedScrollPositions = JSON.parse(sessionPositions);
          }
        } catch (e2) {
        }
      }, [storageKey]);
      React10.useLayoutEffect(() => {
        let disableScrollRestoration = router?.enableScrollRestoration(
          savedScrollPositions,
          () => window.scrollY,
          getKey ? (location2, matches2) => getScrollRestorationKey(location2, matches2, basename, getKey) : void 0
        );
        return () => disableScrollRestoration && disableScrollRestoration();
      }, [router, basename, getKey]);
      React10.useLayoutEffect(() => {
        if (restoreScrollPosition === false) {
          return;
        }
        if (typeof restoreScrollPosition === "number") {
          window.scrollTo(0, restoreScrollPosition);
          return;
        }
        try {
          if (location.hash) {
            let el2 = document.getElementById(
              decodeURIComponent(location.hash.slice(1))
            );
            if (el2) {
              el2.scrollIntoView();
              return;
            }
          }
        } catch {
          warning(
            false,
            `"${location.hash.slice(
              1
            )}" is not a decodable element ID. The view will not scroll to it.`
          );
        }
        if (preventScrollReset === true) {
          return;
        }
        window.scrollTo(0, 0);
      }, [location, restoreScrollPosition, preventScrollReset]);
    }
  }
  function usePageHide(callback, options) {
    let { capture } = options || {};
    React10.useEffect(() => {
      let opts = capture != null ? { capture } : void 0;
      window.addEventListener("pagehide", callback, opts);
      return () => {
        window.removeEventListener("pagehide", callback, opts);
      };
    }, [callback, capture]);
  }
  function useViewTransitionState(to2, { relative } = {}) {
    let vtContext = React10.useContext(ViewTransitionContext);
    invariant(
      vtContext != null,
      "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
    );
    let { basename } = useDataRouterContext3(
      "useViewTransitionState"
      /* useViewTransitionState */
    );
    let path = useResolvedPath(to2, { relative });
    if (!vtContext.isTransitioning) {
      return false;
    }
    let currentPath = stripBasename(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
    let nextPath = stripBasename(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
    return matchPath(path.pathname, nextPath) != null || matchPath(path.pathname, currentPath) != null;
  }

  // ../../opt/files/kit/index.tsx
  var import_jsx_runtime16 = __toESM(require_jsx_runtime());
  function RouteBridge() {
    const location = useLocation();
    const navigate = useNavigate();
    (0, import_react17.useEffect)(() => {
      window.instinctFile.route(location.pathname + location.search + location.hash);
    }, [location]);
    (0, import_react17.useEffect)(() => {
      const restore = (event) => navigate(event.detail, { replace: true });
      window.addEventListener("instinct-route", restore);
      return () => window.removeEventListener("instinct-route", restore);
    }, [navigate]);
    return null;
  }
  function FileRouter({ children }) {
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(MemoryRouter, { initialEntries: [window.instinctFile.initialRoute], children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(RouteBridge, {}),
      children
    ] });
  }

  // src/HeroName.tsx
  var import_react18 = __toESM(require_react());
  var import_jsx_runtime17 = __toESM(require_jsx_runtime());
  var S2 = [
    { l: "D", post: "DATA x DRAMA", say: "Data x drama" },
    { l: "I", post: "ICONIC HOOKS", say: "Iconic hooks" },
    { l: "Y", post: "CERTIFIED YAPPER", say: "Certified yapper" },
    { l: "A", post: "ALGORITHM OBSESSED", say: "Algorithm obsessed", end: true }
  ];
  function HeroName({ start = 0 }) {
    const [i, setI] = (0, import_react18.useState)(start);
    (0, import_react18.useEffect)(() => {
      const t = setInterval(() => setI((x2) => (x2 + 1) % S2.length), 2400);
      return () => clearInterval(t);
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "hn", children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "hn-tagrow", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("em", { className: "hn-w", children: S2[i].post }) }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("h1", { className: "hn-big", "aria-label": "Diya Nathwani: " + S2.map((s) => s.say).join(", "), children: [
        S2.map((s, k3) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "hn-l" + (k3 === i ? " is-on" : ""), "aria-hidden": "true", children: s.l }, k3)),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "hn-l hn-dot", "aria-hidden": "true", children: "." })
      ] })
    ] });
  }

  // src/Title.tsx
  var import_jsx_runtime18 = __toESM(require_jsx_runtime());
  var P = {
    spade: "M12 2C9 6 3 9 3 14a4.5 4.5 0 0 0 7.6 3.2L9.5 22h5l-1.1-4.8A4.5 4.5 0 0 0 21 14c0-5-6-8-9-12z",
    heart: "M12 21C5 15.5 2 12.3 2 8.5A4.8 4.8 0 0 1 12 6a4.8 4.8 0 0 1 10 2.5c0 3.8-3 7-10 12.5z",
    diamond: "M12 1.5 21 12l-9 10.5L3 12z",
    club: "M12 2a4.3 4.3 0 0 0-3.4 7A4.3 4.3 0 1 0 10.8 17L9.5 22h5l-1.3-5a4.3 4.3 0 1 0 2.2-8A4.3 4.3 0 0 0 12 2z"
  };
  function Suit({ k: k3, c = "y" }) {
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("svg", { className: "suit suit-" + c, viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("path", { d: P[k3] }) });
  }
  var PAIRS = [["diamond", "heart"], ["spade", "diamond"], ["heart", "club"], ["club", "spade"]];
  var n = 0;
  function Title({ pre, hl, post, center, id: id2, cls }) {
    if (cls) return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("h2", { className: cls + ((pre?.length || 0) + hl.length > 27 && !cls.includes("is-mixed") ? " is-long" : ""), children: [
      pre && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "title-pre", children: pre }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "hk", children: hl }),
      post && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "title-post", children: post })
    ] });
    const [a, b2] = PAIRS[(id2 ?? n++) % PAIRS.length];
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("h2", { className: "dt" + (center ? " is-center" : "") + ((id2 ?? 0) % 2 ? " v-p" : " v-y"), "aria-label": [pre, hl, post].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Suit, { k: a, c: "y" }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("span", { className: "dt-words", "aria-hidden": "true", children: [
        pre && /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("span", { className: "dt-pre", children: [
          pre,
          " "
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "dt-hl", children: hl }),
        post && /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("span", { className: "dt-pre", children: [
          " ",
          post
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Suit, { k: b2, c: "p" })
    ] });
  }

  // src/photos/diya-events.jpg
  var diya_events_default = "./assets/RJPWS3EE.jpg";

  // src/GenreIcon.tsx
  var import_jsx_runtime19 = __toESM(require_jsx_runtime());
  function GenreIcon({ kind, className }) {
    const s = { fill: "#fff", stroke: "#141414", strokeWidth: 5, strokeLinejoin: "round", strokeLinecap: "round" };
    let body = null;
    if (kind === "think") body = /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("path", { d: "M14 18h72a8 8 0 0 1 8 8v38a8 8 0 0 1-8 8H48L28 88V72H14a8 8 0 0 1-8-8V26a8 8 0 0 1 8-8z", ...s }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("circle", { cx: "32", cy: "45", r: "5", fill: "#141414" }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("circle", { cx: "50", cy: "45", r: "5", fill: "#141414" }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("circle", { cx: "68", cy: "45", r: "5", fill: "#141414" })
    ] });
    if (kind === "music") body = /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("path", { d: "M38 70V20l46-10v50", ...s, fill: "none", strokeWidth: 7 }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("path", { d: "M38 20l46-10v14L38 34z", ...s }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("ellipse", { cx: "27", cy: "72", rx: "14", ry: "11", ...s }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("ellipse", { cx: "73", cy: "62", rx: "14", ry: "11", ...s })
    ] });
    if (kind === "film") body = /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("circle", { cx: "30", cy: "26", r: "15", ...s }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("circle", { cx: "62", cy: "22", r: "18", ...s }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("rect", { x: "10", y: "42", width: "60", height: "38", rx: "6", ...s }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("path", { d: "M70 54l22-12v38L70 68z", ...s }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("circle", { cx: "30", cy: "26", r: "4", fill: "#141414" }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("circle", { cx: "62", cy: "22", r: "5", fill: "#141414" })
    ] });
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("svg", { className, viewBox: "0 0 100 100", "aria-hidden": "true", children: body });
  }

  // src/thumbs/d-walk.jpg
  var d_walk_default = "./assets/WHMA2ALD.jpg";

  // src/thumbs/d-cra.jpg
  var d_cra_default = "./assets/J4CIWBPV.jpg";

  // src/thumbs/d-mila.jpg
  var d_mila_default = "./assets/7RT5ZH34.jpg";

  // src/thumbs/d-founder.jpg
  var d_founder_default = "./assets/IWFNTYEV.jpg";

  // src/thumbs/d-pstrat.jpg
  var d_pstrat_default = "./assets/JSRGIRDM.jpg";

  // src/thumbs/d-news.jpg
  var d_news_default = "./assets/AZRQA3A4.jpg";

  // src/thumbs/d-fiction.jpg
  var d_fiction_default = "./assets/WOGFRNLE.jpg";

  // src/thumbs/d-novel.jpg
  var d_novel_default = "./assets/QK4PGT5D.jpg";

  // src/thumbs/d-gamified.jpg
  var d_gamified_default = "./assets/IVDS5N3Y.jpg";

  // src/thumbs/d-goodman.jpg
  var d_goodman_default = "./assets/A7LATOSQ.jpg";

  // src/thumbs/d-vidhi.jpg
  var d_vidhi_default = "./assets/RGGIDX4W.jpg";

  // src/thumbs/d-scripts.jpg
  var d_scripts_default = "./assets/XPANUF67.jpg";

  // src/thumbs/d-tools.jpg
  var d_tools_default = "./assets/5VQMVEAO.jpg";

  // src/thumbs/d-seller.jpg
  var d_seller_default = "./assets/TSWX5BQ5.jpg";

  // src/thumbs/d-statglow.jpg
  var d_statglow_default = "./assets/P6MJW5M6.jpg";

  // src/thumbs/d-fiscal.jpg
  var d_fiscal_default = "./assets/CCCH6TSV.jpg";

  // src/photos/love-podcasts.jpg
  var love_podcasts_default = "./assets/ARS6DUIL.jpg";

  // src/thumbs/volume3.jpg
  var volume3_default = "./assets/EDQJNRDF.jpg";

  // src/thumbs/luck.jpg
  var luck_default = "./assets/G66JJWFL.jpg";

  // src/thumbs/seekease.jpg
  var seekease_default = "./assets/FX3M2B7P.jpg";

  // src/thumbs/askiva.jpg
  var askiva_default = "./assets/JQSMRGUG.jpg";

  // src/thumbs/glow.jpg
  var glow_default = "./assets/YZ6FCLPJ.jpg";

  // src/thumbs/shock.jpg
  var shock_default = "./assets/5R6WT77H.jpg";

  // src/thumbs/b2b.jpg
  var b2b_default = "./assets/7GG7Q2WA.jpg";

  // src/thumbs/lg-pristilo.jpg
  var lg_pristilo_default = "./assets/HPZHSKX4.jpg";

  // src/thumbs/lg-amz.jpg
  var lg_amz_default = "./assets/5GRKOBKJ.jpg";

  // src/thumbs/lg-heltr.jpg
  var lg_heltr_default = "./assets/KCAWNZKI.jpg";

  // src/thumbs/lg-rltd.jpg
  var lg_rltd_default = "./assets/D4BAXOHL.jpg";

  // src/thumbs/lg-pocketfm.jpg
  var lg_pocketfm_default = "./assets/6RDO7DI7.jpg";

  // src/thumbs/naveen.jpg
  var naveen_default = "./assets/7DOEAXHJ.jpg";

  // src/thumbs/yash.jpg
  var yash_default = "./assets/ZWUBLP4Y.jpg";

  // src/photos/diya-podium.jpg
  var diya_podium_default = "./assets/L2ZSJJEL.jpg";

  // src/photos/celeb-gv.jpg
  var celeb_gv_default = "./assets/WV2VYL3B.jpg";

  // src/photos/celeb-panchayat.jpg
  var celeb_panchayat_default = "./assets/PPSTNUTM.jpg";

  // src/photos/celeb-bilal.jpg
  var celeb_bilal_default = "./assets/EC6AHJIB.jpg";

  // src/photos/celeb-anukrti.jpg
  var celeb_anukrti_default = "./assets/472Y2WTO.jpg";

  // src/photos/celeb-kothai.jpg
  var celeb_kothai_default = "./assets/NNGIFVA4.jpg";

  // src/photos/g00.jpg
  var g00_default = "./assets/Z5JIKVEN.jpg";

  // src/photos/g01.jpg
  var g01_default = "./assets/UWIVCGZJ.jpg";

  // src/photos/g03.jpg
  var g03_default = "./assets/GY7WMZEK.jpg";

  // src/photos/g09.jpg
  var g09_default = "./assets/YFBOTCHB.jpg";

  // src/photos/g10.jpg
  var g10_default = "./assets/SN7STT3Q.jpg";

  // src/photos/g20.jpg
  var g20_default = "./assets/57ZXC33Y.jpg";

  // src/photos/g21.jpg
  var g21_default = "./assets/EXBP3WGQ.jpg";

  // src/photos/g22.jpg
  var g22_default = "./assets/MLLI7JCB.jpg";

  // src/photos/g23.jpg
  var g23_default = "./assets/EBPWRWNU.jpg";

  // src/photos/g27.jpg
  var g27_default = "./assets/4G4GMBD2.jpg";

  // src/photos/g29.jpg
  var g29_default = "./assets/KZWLUR4V.jpg";

  // src/photos/g32.jpg
  var g32_default = "./assets/IMPFPCEZ.jpg";

  // src/Mosaic.tsx
  var import_jsx_runtime20 = __toESM(require_jsx_runtime());
  var ROOM_SRCS = [celeb_gv_default, celeb_panchayat_default, celeb_bilal_default, celeb_anukrti_default, celeb_kothai_default];
  var TILES = [
    { src: g03_default, r: 1.776, alt: "Podcast recording set with Diya and hosts", cap: "Podcast day" },
    { src: g00_default, r: 1.332, alt: "Paradox team on stage", cap: "Paradox, IIT Madras", note: "The university fest" },
    { src: diya_podium_default, r: 0.831, alt: "Diya Nathwani speaking at a podium on stage", cap: "Podium, mic, zero notes" },
    { src: g20_default, r: 1.499, alt: "E-Conclave group photo on stage", cap: "E-Conclave" },
    { src: celeb_gv_default, r: 0.9, alt: "Diya with Prof. G. Venkatesh and the team", cap: "With Prof. G. Venkatesh (GV sir)", note: "Director, School of Technology, DAU" },
    { src: g21_default, r: 0.667, alt: "Diya performing on stage with a microphone", cap: "Mic in hand" },
    { src: g10_default, r: 1.776, alt: "Diya in front of the IFP graffiti wall", cap: "India Film Project" },
    { src: celeb_panchayat_default, r: 0.553, alt: "Diya with Biswapati Sarkar", cap: "With Biswapati Sarkar", note: "Writer, TVF Pitchers", hl: true },
    { src: g22_default, r: 0.799, alt: "Diya speaking into a microphone at an IFP x MBP event", cap: "IFP x MBP" },
    { src: g27_default, r: 1.499, alt: "Diya speaking at a podium on a dark stage", cap: "On stage" },
    { src: celeb_bilal_default, r: 0.562, alt: "Diya with Bilal Siddiqi", cap: "With Bilal Siddiqi", note: "Co-creator, The Ba***ds of Bollywood" },
    { src: g01_default, r: 0.75, alt: "Diya with headphones at a laptop", cap: "Behind the scenes" },
    { src: celeb_kothai_default, r: 1.28, alt: "Diya with Kothai Krishnamoorthy", cap: "With Kothai Krishnamoorthy", note: "Head - Student Affairs, IIT Madras" },
    { src: g23_default, r: 0.8, alt: "Diya at IFP x MBP with a fellow attendee", cap: "IFP x MBP" },
    { src: g29_default, r: 1.499, alt: "Diya on stage during a performance", cap: "Stage time" },
    { src: celeb_anukrti_default, r: 0.562, alt: "Diya with Anukrti Upadhyay", cap: "With Anukrti Upadhyay", note: "Bilingual author, English and Hindi", hl: true },
    { src: g32_default, r: 1.25, alt: "Diya chatting with people at an event", cap: "Event hopping" },
    { src: g09_default, r: 0.685, alt: "Diya with friends at a festival wall", cap: "Fest season" }
  ];
  function Mosaic() {
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "mz-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "mz-kicker", children: "Media, take two" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Title, { cls: "nk-serif is-center", pre: "The", hl: "mosaic" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "mz-sub", children: "Events, stages, mics and people. The moments behind the work, in one place." }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "mz", "aria-label": "Photo mosaic", children: TILES.filter((t) => !ROOM_SRCS.includes(t.src)).map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("figure", { className: t.hl ? "mz-t is-hl" : "mz-t", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("img", { src: t.src, alt: t.alt, style: { aspectRatio: String(t.r) }, loading: "lazy" }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("figcaption", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "mz-cap", children: t.cap }),
          t.note && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "mz-note", children: t.note })
        ] })
      ] }, t.alt + i)) })
    ] });
  }

  // src/App.tsx
  var import_react21 = __toESM(require_react());

  // src/photos/diya-portrait.jpg
  var diya_portrait_default = "./assets/EXFXM46A.jpg";

  // src/photos/diya-writing.jpg
  var diya_writing_default = "./assets/MD4ETI73.jpg";

  // src/photos/diya-phone.webp
  var diya_phone_default = "./assets/VNQDODA3.webp";

  // src/photos/diya-pro.jpg
  var diya_pro_default = "./assets/TQLYGLA5.jpg";

  // src/photos/diya-headphones.jpg
  var diya_headphones_default = "./assets/EYW6BXOP.jpg";

  // src/photos/diya-mic-hq.jpg
  var diya_mic_hq_default = "./assets/FPXYRULZ.jpg";

  // src/photos/house-of-biryan.jpg
  var house_of_biryan_default = "./assets/S3PWVBDW.jpg";

  // src/photos/walls-that-raised-us.jpg
  var walls_that_raised_us_default = "./assets/JAEIEW3F.jpg";

  // src/photos/city-in-a-frame.jpg
  var city_in_a_frame_default = "./assets/Z2XTUUWY.jpg";

  // src/photos/find-the-faces.jpg
  var find_the_faces_default = "./assets/Y56QNJNB.jpg";

  // src/photos/nukkad.jpg
  var nukkad_default = "./assets/VEGWG6XZ.jpg";

  // src/Testimonials.tsx
  var import_react19 = __toESM(require_react());

  // src/people/sagar.jpg
  var sagar_default = "./assets/CUQIYKNE.jpg";

  // src/people/piyush.jpg
  var piyush_default = "./assets/HJR4GLLJ.jpg";

  // src/people/owais-original-color.jpg
  var owais_original_color_default = "./assets/X7EJX3JQ.jpg";

  // src/people/akshay-original-color.jpg
  var akshay_original_color_default = "./assets/XNQ2EMJ2.jpg";

  // src/people/akankssha.jpg
  var akankssha_default = "./assets/TJ7NNT4I.jpg";

  // src/people/vedant-original-color.jpg
  var vedant_original_color_default = "./assets/NUSMYXMK.jpg";

  // src/people/saurabh.jpg
  var saurabh_default = "./assets/HDOGKZPG.jpg";

  // src/people/arohan-original-color.jpg
  var arohan_original_color_default = "./assets/EJ3Z63ZL.jpg";

  // src/people/sharad-original-color.jpg
  var sharad_original_color_default = "./assets/QT2KPLKW.jpg";

  // src/people/aditya.jpg
  var aditya_default = "./assets/GEXBO34H.jpg";

  // src/people/chhayank-original-color.jpg
  var chhayank_original_color_default = "./assets/7VE5QNZP.jpg";

  // src/people/ashwin.jpg
  var ashwin_default = "./assets/U2GNNM2M.jpg";

  // src/people/dev.jpg
  var dev_default = "./assets/25RXL2TE.jpg";

  // src/Testimonials.tsx
  var import_jsx_runtime21 = __toESM(require_jsx_runtime());
  var T2 = [
    { h: "Made water tech make sense", q: "Diya showcased an unparalleled talent for converting highly technical content related to the water industry into an engaging body of work accessible to a wider and non-technical audience.", n: "Arohan Paul", r: "Data Scientist (GenAI, LLMs), Johnson Electric. NIT Rourkela. Diya reported to him at ICCW", img: arohan_original_color_default, b: "Data Scientist (GenAI, LLMs), Johnson Electric" },
    { h: "Led the team that ran the fest", q: "As the leader of the content team, Diya demonstrated outstanding content management and strategic skills in handling events of significant scale.", n: "Aman Kankriya", r: "Assistant Manager, Hindustan Zinc. IIT Madras. Was on Diya\u2019s team at Paradox", b: "Assistant Manager, Hindustan Zinc" },
    { h: "The copy goes the extra mile", q: "Diya is a gifted writer with a keen eye for detail and an impressive ability to craft compelling and engaging copy. Any team would be lucky to have her on board.", n: "Dev Khatri", r: "Brand & graphics designer, 30+ brands. IIT Madras \u201925. Managed Diya directly", img: dev_default, b: "Managed Diya directly" },
    { h: "Knows her audience cold", q: "During our time working together, she consistently demonstrated a keen eye for detail, creativity, and a deep understanding of target audiences. Diya excelled in crafting engaging and relevant content across various platforms, effectively driving engagement and brand visibility.", n: "Aditya Jaiswal", r: "PhD scholar, IIT Kanpur. Student Chair, 2024 ASCE India Student Symposium", img: aditya_default, b: "PhD scholar, IIT Kanpur" },
    { h: "The driving force", q: "While the project idea was initially mine, I must credit Diya for being the driving force behind its success. Diya\u2019s dedication, out-of-the-box thinking, and exceptional cooperation were the main ingredients that made our project stand out.", n: "Sharad Nathwani", r: "MBA, NIT Trichy \u201926. Analytica Club, DoMS. Her mentor on a 2nd-runner-up project", img: sharad_original_color_default, b: "MBA, NIT Trichy \u201926" },
    { h: "Fest promo under pressure", q: "Her unique perspective and ideas brought in engaging and high-quality content for the fest promotion. Her ability to work under pressure and meet deadlines was impressive.", n: "Owais Shaikh", r: "Founding Engineer, Nanneer Global. Paradox \u201923 teammate", img: owais_original_color_default, b: "Founding Engineer, Nanneer Global" },
    { h: "Deadlines? Met. Every time.", q: "She approaches every project with determination, creativity, and a strong commitment to meeting deadlines. Her ability to craft engaging and high-quality content sets her apart.", n: "Sagar Bhatt", r: "Client", img: sagar_default },
    { h: "Work ethic, noted", q: "Formidable work ethic, excellent leader and team member", n: "Ashwin Hebbar", r: "Product Engineer, AI (LLMs, GenAI, data science)", img: ashwin_default },
    { h: "Data-driven, and it shows", q: "Diya is an exceptional Content Strategist with a unique blend of creativity and analytical skills. Her ability to craft data-driven content strategies that align with business goals and engage audiences is remarkable.", n: "Piyush Badme", r: "Digital marketing expert, websites & organic growth for founders", img: piyush_default },
    { h: "Never had to worry. Not once.", q: "In my experience working with Diya, I never had to worry about the tasks assigned to her. She consistently exceeded expectations, delivering high-quality work within the set timelines.", n: "Ar. Vedant Mathankar", r: "Architect & BIM specialist, Jeswani Design Studio. Studied with Diya", img: vedant_original_color_default },
    { h: "Complex in, clear out", q: "Diya possesses a unique blend of creativity and strategic thinking that allows her to transform complex ideas into clear, compelling written content that resonates with audiences.", n: "Akankssha Singh", r: "Health & food writer, 50+ published articles. Biotech & nutrition", img: akankssha_default },
    { h: "Jolly, and very good at it", q: "She was helpful, jolly, always keen to learn something new everyday, and providing the best quality in her work. She was a very instrumental part of the team.", n: "Akshay Mair", r: "Content strategist & SEO writer. Worked alongside Diya for 6 months", img: akshay_original_color_default },
    { h: "No brief-babysitting needed", q: "You don\u2019t have to sit with her to explain what to write & what not. Her writing skill is a good mix of current trends & traditional, which makes the content worth reading.", n: "Saurabh Chahal", r: "Worked with Diya on a different team", img: saurabh_default },
    { h: "Short and sweet", q: "It was good working with you\u{1F604}", n: "Chhayank Thakur", r: "Worked with Diya on the same team", img: chhayank_original_color_default }
  ];
  function Testimonials() {
    const marquee = (0, import_react19.useRef)(null);
    const track = (0, import_react19.useRef)(null);
    const dragging = (0, import_react19.useRef)(null);
    const hovering = (0, import_react19.useRef)(false);
    (0, import_react19.useEffect)(() => {
      let frame = 0;
      let last = 0;
      const tick = (time) => {
        const el2 = marquee.current;
        if (el2 && !dragging.current && !hovering.current && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          if (last) el2.scrollLeft += Math.min(3, (time - last) * 0.025);
          const halfway = (track.current?.scrollWidth || 0) / 2;
          if (halfway > 0 && el2.scrollLeft >= halfway) el2.scrollLeft -= halfway;
        }
        last = time;
        frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(frame);
    }, []);
    const go2 = (d) => {
      const el2 = marquee.current;
      if (el2) el2.scrollBy({ left: d * 340, behavior: "smooth" });
    };
    const dragMove = (e2) => {
      const el2 = marquee.current;
      if (el2 && dragging.current) {
        el2.scrollLeft = dragging.current.scroll + dragging.current.x - e2.clientX;
        const halfway = (track.current?.scrollWidth || 0) / 2;
        if (halfway > 0 && el2.scrollLeft >= halfway) {
          el2.scrollLeft -= halfway;
          dragging.current.scroll -= halfway;
        }
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("section", { className: "nk tm", id: "testimonials", children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("p", { className: "tm-kicker", children: [
        "These ",
        T2.length,
        " lovely people say,"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Title, { cls: "nk-serif is-center", pre: "She's good,", hl: "at her craft" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "tm-marquee", ref: marquee, onMouseEnter: () => {
        hovering.current = true;
      }, onMouseLeave: () => {
        hovering.current = false;
      }, onPointerDown: (e2) => {
        if (marquee.current) {
          dragging.current = { x: e2.clientX, scroll: marquee.current.scrollLeft };
          e2.currentTarget.setPointerCapture(e2.pointerId);
        }
      }, onPointerMove: dragMove, onPointerUp: () => {
        dragging.current = null;
      }, onPointerCancel: () => {
        dragging.current = null;
      }, children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "tm-track", ref: track, children: [...T2, ...T2].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("figure", { className: t.b ? "tm-card is-key" : "tm-card", "aria-hidden": i >= T2.length ? true : void 0, children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "tm-frame", children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "tm-mark", "aria-hidden": "true" }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("h3", { children: t.h }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("blockquote", { children: t.q })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "tm-base", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "tm-cut", children: t.img ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("img", { src: t.img, alt: t.n }) : /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "tm-mono", children: t.n.split(" ").map((w2) => w2[0]).join("") }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("figcaption", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("strong", { children: t.n }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("small", { children: t.b && t.r.includes(t.b) ? /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_jsx_runtime21.Fragment, { children: [
            t.r.split(t.b)[0],
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("b", { children: t.b }),
            t.r.split(t.b).slice(1).join(t.b)
          ] }) : t.r })
        ] })
      ] }, t.n + i)) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "tm-arrows", children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("button", { type: "button", "aria-label": "Previous testimonial", onClick: () => go2(-1), children: "\u2190" }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("button", { type: "button", "aria-label": "Next testimonial", onClick: () => go2(1), children: "\u2192" })
      ] })
    ] });
  }

  // src/logos/iitm.png
  var iitm_default = "./assets/KSBXIDM7.png";

  // src/pods/iitm-gate.jpg
  var iitm_gate_default = "./assets/KTUM2ICY.jpg";

  // src/pods/jay-new.jpg
  var jay_new_default = "./assets/SITJ6MAK.jpg";

  // src/pods/jay-piyush.jpg
  var jay_piyush_default = "./assets/N3ANIZJP.jpg";

  // src/pods/naveen-circ.jpg
  var naveen_circ_default = "./assets/FU6J3UWA.jpg";

  // src/pods/naveen-cover.jpg
  var naveen_cover_default = "./assets/3PFYJVTI.jpg";

  // src/pods/sankalp-li.jpg
  var sankalp_li_default = "./assets/LYR6V5XY.jpg";

  // src/pods/fundaspring.jpg
  var fundaspring_default = "./assets/S5FPFC5Y.jpg";

  // src/Pods.tsx
  var import_jsx_runtime22 = __toESM(require_jsx_runtime());
  var DRIVE = (id2) => `https://drive.google.com/file/d/${id2}/view`;
  var PODS = [
    { show: "IITM BS Diaries", ep: "Diya as guest, IIT\xA0Madras\xA0BS, Class\xA0of\xA02026", line: "**IIT\xA0Madras\xA0BS**, graduating **Class\xA0of\xA02026**\n**Fewer than 1% make it through the full 4\u2011year degree.** She is one of them\nOwned the story on every stage of campus: **fest, society, house and student government**\n**University fest:** Head of Content @Team Professionals, **IITM Paradox**\n**Society:** Head of Content @**Outliers\xA0E\u2011Cell**\n**House & student government:** Social Media & Web Admin @**Bandipur\xA0House** (UHC)", tone: "y", a: diya_portrait_default, b: iitm_default, bLogo: true, bg: iitm_gate_default, bgAlt: "Diya Nathwani at the IIT Madras main gate", href: "https://drive.google.com/drive/folders/1ZgQWpJKc77GXE23lfTd5NJFNrWWrowbG" },
    { show: "Jay Morzaria", ep: "Hosted by Diya", line: "**Head of Creative & Strategy**, Voxxy Media (Jakarta)\nEx-**Creative Head**, McCann Indonesia\nEx-**Creative Head**, Rephrase.ai (acquired by **Adobe**)\nLed Schbang\u2019s team on **Fevicol\u2019s Ronaldo moment**\nCampaigns for **Netflix | Prime Video | Porsche | Colgate**\nRecognised at the **EFFIEs** and **Kyoorius Creative Awards**", tone: "p", a: diya_portrait_default, b: jay_new_default, bg: jay_piyush_default, bgTop: true, bgCap: "Jay with the late Piyush Pandey, Ogilvy\u2019s Chief Creative Officer Worldwide", href: DRIVE("15NkcnjnYynGWLCAY_JmQUEhxt4ZXIGk1") },
    { show: "Naveen Yadav", ep: "Hosted by Diya", line: "**@flicksandfunnys**, verified cinema creator\n**103K** followers on Instagram\nCollab with **Prime Video**", tone: "l", a: diya_portrait_default, b: naveen_circ_default, bg: naveen_cover_default, bgPos: "50% 30%", href: DRIVE("1xdjr0AONMN46VbhMpTwOwxTvaM6OzhHC") },
    { show: "Sankalp Arora", ep: "Hosted by Diya \xB7 Project Sankalp, FundaSpring x IIT Madras", line: "**Co\u2011founder** (Business & Marketing Strategy) and **CMO**, Founders\u2019 Office, **Fundaspring** by BodhBridge\nBodhBridge: started by **IIT Madras alumni**\n**Mentor**, Raahat mental health society\n**Workshops Category Head**, Paradox \u201923", tone: "y", a: diya_portrait_default, b: sankalp_li_default, bg: fundaspring_default, bgPos: "50% 50%", bgAlt: "Fundaspring by BodhBridge logo", href: DRIVE("1FtG8Fvfd0ZT6xWwmkmyS9iVHjF0gcHV4") }
  ];
  var CLIPS = ["Creator economy & one\u2011person businesses", "Event host to content strategist", "Creativity x AI x data science", "Running Paradox: nights, sponsors, promo", "Stress levels (honest edition)", "IIT superpowers, ranked"];
  function Pods({ guest = false }) {
    const LIST = PODS.filter((p) => p.show === "IITM BS Diaries" === guest);
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: guest ? "pd pd-guest" : "pd", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "pd-grid", children: LIST.map((p, i) => {
        const q = p;
        const swap = i % 2 === 1;
        const guestAlt = p.show === "IITM BS Diaries" ? "IIT Madras logo" : `${p.show}, podcast guest`;
        return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("a", { href: p.href, target: "_blank", rel: "noopener noreferrer", className: `pd-cover pd-v2 t-${p.tone}`, children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: guest ? "pd-hero pd-hero-guest" : "pd-hero", style: q.bgTop ? { height: 300 } : void 0, children: [
            !guest && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("img", { className: "pd-heroimg", style: q.bgTop ? { objectPosition: "50% 0%" } : q.bgPos ? { objectPosition: q.bgPos, objectFit: "contain", background: q.bgWhite ? "#fff" : "#000", padding: q.bgWhite ? "18px 0 60px" : void 0, boxSizing: "border-box" } : void 0, src: q.bg || p.b, alt: q.bgAlt || q.bgCap || guestAlt }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("img", { className: `pd-circ ${swap ? "is-r" : "is-l is-flip"}`, src: p.a, alt: "Diya Nathwani" }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("img", { className: `pd-circ ${swap ? "is-l" : "is-r"}`, style: q.bLogo ? { objectFit: "contain", padding: 8, boxSizing: "border-box" } : void 0, src: p.b, alt: guestAlt }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "pd-vs", children: "x" })
          ] }),
          q.bgCap && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { className: "pd-capline", children: q.bgCap }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "pd-no pd-no2", children: guest ? "AS A GUEST" : `EP. ${String(i + 1).padStart(2, "0")}` }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h4", { children: p.show }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("small", { children: p.ep }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("ul", { className: "pd-pts", children: p.line.split("\n").map((ln, k3) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("li", { children: ln.split("**").map((t, m) => m % 2 ? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("strong", { children: t }, m) : t) }, k3)) }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("span", { className: "pd-play", children: [
            "\u25B6",
            " Watch"
          ] })
        ] }, p.show);
      }) }),
      guest && /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(import_jsx_runtime22.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { className: "pd-clips-h", children: "The IITM BS Diaries clips, bite-sized:" }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "pd-clips", children: CLIPS.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: `pd-clip c${i % 3}`, children: c }, c)) })
      ] })
    ] });
  }

  // src/photos/ifp-wall.jpg
  var ifp_wall_default = "./assets/QBL4NWX4.jpg";

  // src/photos/breakthrough.jpg
  var breakthrough_default = "./assets/CUKQ2NS3.jpg";

  // src/photos/think-piece.jpg
  var think_piece_default = "./assets/L2NM6P2Z.jpg";

  // src/photos/ansuni-artwork.jpg
  var ansuni_artwork_default = "./assets/ROGAN5DQ.jpg";

  // src/Playground.tsx
  var import_jsx_runtime23 = __toESM(require_jsx_runtime());
  var P2 = [
    { k: "Think piece", t: "The Invisible Architect", s: "The full think piece behind the nomination, written in 50 hours. No sleep was harmed. Okay, some.", cta: "Read it", href: "https://docs.google.com/document/d/18tOTkpvnfTnMxvhCx2zQCopA1iOHqk7pzyjsVcfcwp8/edit?usp=sharing", tone: "p", glyph: "think", img: think_piece_default },
    { k: "Original song", t: "Ansuni", s: "My IFP 2026 song. Yes, the strategist also writes lyrics. The brief was my own feelings; the client was very demanding.", cta: "Play it", href: "https://drive.google.com/file/d/1Ccv5gdTvB9PNzaxge-K7Pv-w-TGAfhPT/view?usp=drivesdk", tone: "y", glyph: "music", img: ansuni_artwork_default },
    { k: "Short film", t: "Breakthrough", s: "A short film on depression by Team Saath, IIT Madras Paradox. I played the lead, Diya (not a stretch), and co-wrote the script.", cta: "Watch it", href: "https://youtu.be/9L3ntS7tvsY", tone: "l", glyph: "film", img: breakthrough_default, credit: "Cast: Diya Nathwani\nScript: Tanishka Sharma & Diya Nathwani" }
  ];
  function Playground() {
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("section", { className: "nk nk-light pg", id: "playground", children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Title, { cls: "nk-serif is-center is-ondark", pre: "Make art.", hl: "Do spells." }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "pg-sub", children: "(the creative playground)" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "nk-center-sub is-left", children: "Things I made because a brief wasn't enough. Unpaid, and very much on purpose." }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("figure", { className: "pg-ifp", children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("img", { src: ifp_wall_default, alt: "Diya Nathwani at the IFP graffiti wall" }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("figcaption", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("span", { className: "pg-award", children: [
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("path", { fill: "currentColor", d: "M7 3h10v2h3v3a4 4 0 0 1-4 4h-.3A5 5 0 0 1 13 14.9V17h3v2H8v-2h3v-2.1A5 5 0 0 1 8.3 12H8a4 4 0 0 1-4-4V5h3V3Zm0 4H6v1a2 2 0 0 0 1.2 1.8A5 5 0 0 1 7 8.5V7Zm10 0v1.5c0 .5-.1.9-.2 1.3A2 2 0 0 0 18 8V7h-1ZM6 20h12v2H6v-2Z" }) }),
            "Nominated"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("strong", { children: "IFP Award Nominee" }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("em", { className: "pg-ifp-sub", children: [
            "Think Piece category",
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("br", {}),
            "50-Hour Writing Challenge, IFP Season 15"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("span", { className: "pg-ifp-p", children: [
            "The theme: ",
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("b", { children: "Art as a Revolution" }),
            ".",
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("br", {}),
            "My take: ",
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("b", { children: "The Quiet Revolution" }),
            "."
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "pg-ifp-p", children: "Art doesn't march with banners. It slips in through a song, a film or a meme, and rewires how you think while you believe it was your idea." })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "pg-grid", children: P2.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("a", { className: `pg-card t-${p.tone}`, href: p.href, target: "_blank", rel: "noopener noreferrer", children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("span", { className: "pg-no", children: [
          "No. ",
          String(i + 1).padStart(2, "0"),
          " / ",
          p.k
        ] }),
        !p.img && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(GenreIcon, { kind: p.glyph, className: "pg-glyph" }),
        p.img && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("img", { className: "pg-thumb", src: p.img, alt: p.glyph === "film" ? `${p.t} short film poster` : p.glyph === "music" ? `Illustrated artwork reading Song Ansuni` : `First page of ${p.t}` }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("h3", { children: p.t }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { children: p.s }),
        p.credit && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("small", { className: "pg-credit", children: p.credit }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("span", { className: "pg-cta", children: [
          p.cta,
          " ",
          "\u2192"
        ] })
      ] }, p.t)) })
    ] });
  }

  // src/Letter.tsx
  var import_jsx_runtime24 = __toESM(require_jsx_runtime());
  var LINES = [
    "I owe you my life, my identity, my entire existence.",
    "You're just a small part of my life, but in hindsight I am all of you, and you are the all of me. We call it Writing, but what we mean is the art of words. The words spoken, the words unspoken, and the selective gems we chose to pen down, defying every other thought that deserved to be scratched on the paper as well.",
    "We think anyone can write, but what a pleasure to be the chosen one, to share a small portion of the largest pie called writers. It's so chivalrous of you to be so welcoming that every other person has at least once borrowed a personality from you, or better, known theirs better.",
    "It's so funny how you wittily take all the geniuses under your radar yet keep them behind the fame curtains, letting them be the underrated mystery they all complain about, but also find most sexy.",
    "You've been the inspiration, you've been the revenge. The carrier of kiddish love and adult rage. The beholder of purity and insanity. You've seen it all, and still gave us artists the credit, and not the art.",
    "People diminish it, doubting your future existence, saying unnatural intelligence will take up your space. But how belittling of them to think that the one art, the next kin to the birth of the brain, could easily vanish. They thought this when print media started disappearing. They thought this when newspapers were replaced by TV news. They thought this when people stopped recognising writers and went crazy for the ones standing on the shoulders of their stories.",
    "Oh, what an honour to be called a 'Writer'. Oh, what a limiting thought, to believe such a universally huge flex could fit in one teeny tiny person.",
    "I am not a writer. And can writing ever be me, or mine? Impossible.",
    "It's been centuries, and we still couldn't capture your essence: the thoughts, the words, the feelings, the reactions, the euphemisms, the non-existent. To cage you in the word Writing is so unfair. And to commercialise you, oh, the dare!",
    "I'm nothing in front of you. Not a teenager with tantrums, not a kid with mischief. More like the unborn baby, with no idea what lies beyond its own bubble. You consume me, you hold me dear, and for that I will be eternally grateful to be chosen, in whatever capacity.",
    "A to Z credits to you, to the art of thinking, writing and feeling. I will spend my life, my existence, my entirety, trying to be a little bit closer to you and the divine."
  ];
  function Letter() {
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("section", { className: "nk nk-light lt", id: "letter", children: [
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("p", { className: "lt-tag", children: "A letter I actually wrote. Raw, mostly as it was." }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("details", { className: "lt-scroll", children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("summary", { className: "lt-scroll-cover", children: [
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "lt-ribbon", "aria-hidden": "true", children: "\u2726" }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("span", { className: "lt-stamp", "aria-hidden": "true", children: [
            "Hand",
            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("br", {}),
            "delivered"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("span", { className: "lt-to", children: [
            "To,",
            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("br", {}),
            "The dear Art of Writing,"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "lt-first", children: LINES[0] }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "lt-open", children: "Tap to unroll the letter \u2193" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "lt-paper", children: [
          LINES.slice(1).map((l2) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("p", { children: l2 }, l2)),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("p", { className: "lt-sign", children: [
            "From an immature self-proclaimed genius of your clan,",
            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("br", {}),
            "Yours,",
            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("br", {}),
            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { children: "drishtie." })
          ] })
        ] })
      ] })
    ] });
  }

  // src/Stars.tsx
  var import_jsx_runtime25 = __toESM(require_jsx_runtime());
  var STARS = [
    { src: celeb_panchayat_default, cap: "With Biswapati Sarkar", note: "Writer of TVF Pitchers, Permanent Roommates, Kaala Paani & Jaadugar.\nCo-founder, Posham Pa Pictures.", wide: false, top: true },
    { src: celeb_bilal_default, cap: "With Bilal Siddiqi", note: "Co\u2011creator and co-writer of The Ba***ds of Bollywood (Netflix).\nWrote the novel The Bard of Blood at 19, later a Netflix series.", wide: false, top: true },
    { src: celeb_anukrti_default, cap: "With Anukrti Upadhyay", note: "Bilingual author, English and Hindi.\nKintsugi won the Sushila Devi Award. Also Daura and Bhaunri (4th Estate, HarperCollins India).\nIn Hindi: Japani Sarai and Neena Aunty.", wide: false, top: true },
    { src: celeb_gv_default, cap: "With Prof. G. Venkatesh (GV sir) & the team", note: "Director, School of Technology, Dhirubhai\xA0Ambani University.\nProfessor of Practice, IIT Madras, teaching since 2014.\nCTO of Sasken for nearly 20 years. 8 years on the IIT Bombay CS faculty.\nFounder of Mylspot. Fellow of INAE and IETE.", wide: true, top: true },
    { src: celeb_kothai_default, cap: "With Kothai Krishnamoorthy", note: "Head - Student Affairs, IIT Madras.", wide: true }
  ];
  function Stars() {
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("section", { className: "nk nk-light st", id: "rooms", children: [
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Title, { cls: "nk-serif is-center", id: 2, pre: "The favs", hl: "IRL" }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { className: "nk-center-sub is-left", children: "People whose work I love, and who I got to meet in real life." }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "st-row", children: STARS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("figure", { className: `st-card r${i % 3}${s.wide ? " is-wide" : ""}`, children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("img", { style: s.top ? { objectPosition: "50% 0%" } : void 0, src: s.src, alt: `Diya Nathwani ${s.cap.replace(/^With/, "with")}` }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("figcaption", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("strong", { children: s.cap }),
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("ul", { className: "st-notes", children: s.note.split("\n").map((l2) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("li", { children: l2 }, l2)) })
        ] })
      ] }, s.cap)) })
    ] });
  }

  // src/CountUp.tsx
  var import_react20 = __toESM(require_react());
  var import_jsx_runtime26 = __toESM(require_jsx_runtime());
  function CountUp({ value, ms = 1600 }) {
    const m = value.match(/^([^0-9]*)([0-9][0-9,]*\.?[0-9]*)(.*)$/);
    const pre = m ? m[1] : "", raw = m ? m[2] : "", post = m ? m[3] : value;
    const target = parseFloat(raw.replace(/,/g, "")) || 0;
    const decimals = raw.includes(".") ? raw.split(".")[1].length : 0;
    const comma = raw.includes(",");
    const [v2, setV] = (0, import_react20.useState)(target);
    const ref = (0, import_react20.useRef)(null);
    (0, import_react20.useEffect)(() => {
      if (!m || !ref.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      let raf = 0;
      let started = false;
      const run = () => {
        if (started) return;
        started = true;
        setV(0);
        const start = performance.now();
        const tick = (time) => {
          const p = Math.min(1, (time - start) / ms);
          setV(target * (1 - (1 - p) ** 3));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      };
      const observer = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          run();
        }
      }, { threshold: 0.2 });
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
        cancelAnimationFrame(raf);
      };
    }, [value, ms]);
    if (!m) return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("var", { className: "countup", children: value });
    let formatted = v2.toFixed(decimals);
    if (comma) formatted = Number(formatted).toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("var", { ref, className: "countup", children: [
      pre,
      formatted,
      post
    ] });
  }

  // src/photos/bs-insider.jpg
  var bs_insider_default = "./assets/BWFIZXH2.jpg";

  // src/grain.svg
  var grain_default = "./assets/SZ7CPVAB.svg";

  // src/logos/paradox.png
  var paradox_default = "./assets/BDFPTKB4.png";

  // src/logos/iccw.png
  var iccw_default = "./assets/DEUQCUK6.png";

  // src/logos/harness.png
  var harness_default = "./assets/6A6NEU2J.png";

  // src/logos/atlan.png
  var atlan_default = "./assets/XFIGEGGO.png";

  // src/logos/portkey.png
  var portkey_default = "./assets/6UBTPJS6.png";

  // src/logos/pepper.png
  var pepper_default = "./assets/5JSIJCE2.png";

  // src/logos/chd1.png
  var chd1_default = "./assets/FZH72YH3.png";

  // src/logos/wellness.svg
  var wellness_default = "./assets/VNUTS6RC.svg";

  // src/logos/gorgeousgirl.svg
  var gorgeousgirl_default = "./assets/CMPG4IQJ.svg";

  // src/logos/melooha.svg
  var melooha_default = "./assets/CLBWN37G.svg";

  // src/logos/younity.png
  var younity_default = "./assets/LTMOCRME.png";

  // src/logos/biryan.png
  var biryan_default = "./assets/RJBR2O6D.png";

  // src/logos/kohinoor.svg
  var kohinoor_default = "./assets/OKJRRSRM.svg";

  // src/logos/kinfra.png
  var kinfra_default = "./assets/QGOW5WGU.png";

  // src/logos/bigbrain.png
  var bigbrain_default = "./assets/5TPXIXZY.png";

  // src/logos/owled.png
  var owled_default = "./assets/CENCWYFO.png";

  // src/logos/cuttingedge.png
  var cuttingedge_default = "./assets/URZPG72K.png";

  // src/photos/pop/pop1.jpg
  var pop1_default = "./assets/Y4EG6CCM.jpg";

  // src/photos/pop/pop2.jpg
  var pop2_default = "./assets/VJJXVYLX.jpg";

  // src/photos/pop/pop3.jpg
  var pop3_default = "./assets/VYOVZX4T.jpg";

  // src/photos/pop/pop4.jpg
  var pop4_default = "./assets/UUOPAPKS.jpg";

  // src/photos/pop/pop5.jpg
  var pop5_default = "./assets/7T6SRKYN.jpg";

  // src/photos/pop/pop6.jpg
  var pop6_default = "./assets/FZT6XOQE.jpg";

  // src/data.ts
  var EMAIL = "diyanathwani.media@gmail.com";
  var LINKEDIN = "https://www.linkedin.com/in/diya-nathwani6622";
  var drawers = [
    {
      key: "campaigns",
      label: "Campaigns & Strategies",
      blurb: "Ideas that get people talking.",
      pieces: [
        { title: "Zayke Ki Mehek", client: "House of Biryan", tag: "GTM + guerrilla", img: "biryan", text: "A full go\u2011to\u2011market plan: market-culture fit, positioning, supply chain, a 60\u201190 day contribution margin and retention model. Then the fun part: a scent-led guerrilla campaign that lets the biryani do the selling." },
        { title: "Walls That Raised Us", client: "Kukreja Builders, Nagpur", tag: "Launch + storytelling", img: "walls", text: 'Launch copy for Kukreja Paris City ("Redefining Royalty - brick by brick!") and a legacy campaign about the homes families grow up in. Selling belonging, not square feet.' },
        { title: "City In A Frame", client: "Kohinoor Viva City, Pune", tag: "Experiential", img: "city", text: "A future\u2011visualisation photo booth that puts buyers inside the view before the building exists. When you see it, you see yourself in it." },
        { title: "Find The Faces", client: "Stars N Celebs", tag: "Creator acquisition", img: "faces", text: "A campus creator hunt with college leaderboards and micro\u2011influencer loops, plus the talent\u2011registration strategy behind it. Students became the recruiters." },
        { title: "Nukkad se Netflix", client: "Yashita Singh, actress", tag: "Creative concept", img: "nukkad", text: 'A 14-page "How to Enter Bollywood" concept: a documented struggle told as a street-play series, ending in a hand-painted caravan premiere.' },
        { title: "Taste of Home, Miles Away", client: "Pristilo, Dubai", tag: "Social + UGC", text: "A 30-Day Dubai Fitness Challenge, a UGC concept for expat families and website stories (sesame as an Emirati superfood). Linked to a ~42% sales lift." },
        { title: "Luck shouldn\u2019t decide fame", client: "CreatorVerse", tag: "Marketing playbook", text: "A two\u2011sided creator\u2011economy playbook: 21 pages covering 80M+ creators, campus CAC of Rs 5-30 and a rate\u2011calculator viral drop." },
        { title: "Creator Revenue Architecture", client: "Own framework", tag: "Diya original", text: "A 7-stage system that turns creators into brands that can earn, starting from positioning. Built from watching too many talented people stay broke." },
        { title: "A multi-strategy walkthrough", client: "Web content strategy deck", tag: "Strategy deck", text: "Trend hijacking (Vanessa Hudgens and red light therapy), emotional pain scripts, repurposing and Google trust signals, in one deck." },
        { title: "Gamified event marketing", client: "CenturySoft", tag: "PR + moment marketing", text: "Gamified challenges, PR pushes and moment\u2011marketing campaigns that made a content company talk like a consumer brand." },
        { title: "Homepage + ads, QA\u2019d", client: "Goodman Creative (Daniel Goodman)", tag: "Web + Google Ads", text: "Homepage copy, Google Ads and QA, walked through on screen recordings." },
        { title: "Seek Ease", client: "Black Swan Co.", tag: "Mental wellness app", text: "Content strategy for a mental wellness app idea. Runner-up at Spirit @ Parivartan \u201923, IIT Delhi." },
        { title: "Helter, but strategic", client: "Heltr Skeltr", tag: "Content strategy", text: "A full content strategy, pitched as an assignment. Proof that I do homework before anyone asks." }
      ]
    },
    {
      key: "social",
      label: "Social Media Content",
      blurb: "Audits, reels, YouTube scripts and monetisation plans that people actually watch.",
      pieces: [
        { title: "The 3-volume brand", client: "Varun Agarwal", tag: "Personal brand system", text: "Perception audit, growth engine and execution layer for the entrepreneur and author with 147K followers, 1M+ book readers and 4M+ Ink Talk views." },
        { title: "The 3-second clarity test", client: "Ayush Wadhwa / @101xFounders", tag: "Instagram case study", text: 'A full content study of why @101xFounders grew, built on my CTP framework (Clarity, Trust, Predictability): username, bio, grid and the borrowed authority of India\u2019s top founder voices. Then 7 new content buckets to break the single-format ceiling, like "Jargon Breaker" (CAC, ROI and P&L in under 60 seconds), a "Founder Day X" binge series and trend-to-business reels.' },
        { title: "Reviewer to lifestyle brand", client: "Naveen Yadav", tag: "Positioning + monetisation", text: "A master plan to move a 100K+ film reviewer into a cinema culture and lifestyle brand, with growth and monetisation mapped out." },
        { title: "Founder-led B2B", client: "Sihr Salt", tag: "Instagram strategy", text: "A founder-led Instagram strategy for Bansharee, founder of a digital marketing agency, where the founder is the brand." },
        { title: "Shock-math in 5 seconds", client: "BigBrainCo (Ranveer Allahbadia)", tag: "Script analysis", text: "Why a hook failed, how to fix the first five seconds, and rewrite ideas that earn the next 55." },
        { title: "2025 Ka Manhoos Saal", client: "Melooha (Shark Tank India)", tag: "Paid ads, Hinglish", text: "Hinglish reel and Meta ad scripts for an AI astrology app, built on emotional pain hooks. Linked to a ~38% conversion lift." },
        { title: "58K views and counting", client: "Yash Garg (229K subscribers)", tag: "YouTube scripts", text: 'I wrote "Joining Manipal in 2026? BEWARE!!" for Yash Garg: 58K+ views, the most-viewed of his 24 uploads since March 2026, and the top YouTube result for "manipal 2026". Plus more tech-career scripts like "College v/s Branch" and "MIT Manipal 2026: Swarg, Soft Trap ya Smart Decision?"' },
        { title: "The 1-person AI business", client: "Ansh Mehra / Cutting Edge", tag: "YouTube script", text: '"Top 1-Person AI Businesses Sam Altman Bets Will Make You A Millionaire": research, structure and script.' },
        { title: "Pattern hunting", client: "Ansh Mehra / Cutting Edge School", tag: "YouTube strategy", text: "A pattern-finding report on top AI creators (Nate Herk, Nick Saraev, Greg Isenberg, Mo Bitar), a packaging framework and research walkthroughs." },
        { title: "Talking reels, A to Z", client: "Vidhi Chotai", tag: "Instagram + LinkedIn", text: "Ideation to execution for a creator: talking-reel scripts on the Barnum effect, brand colour, word-of-mouth marketing and more." },
        { title: "Phitkari, but make it glow", client: "Skincare roll-on", tag: "Ad script ideas", text: "Script ideas for an underarm brightening roll-on with phitkari (alum). Grandma\u2019s remedy, new packaging." },
        { title: "Dermatologist approved", client: "Red Light Therapy Digest", tag: "YouTube scripts", text: '"5 Best At-Home Laser Hair Removal Devices" and "Best LED Light Therapy Masks, According to Dermatologists", plus social.' },
        { title: "Money talks", client: "Investment Forum Company", tag: "YouTube + Instagram", text: "Scripts for YouTube and Instagram finance content." },
        { title: "Scripts with a pulse", client: "IG Reels", tag: "Reel scripts", text: 'A "Types of Age" script, a social media trailer and a raw personal script. Short, sharp, written to be said out loud.' },
        { title: "Kahani, in Hindi", client: "Pocket FM", tag: "Localisation", text: "Hindi localisation of an audio-series chapter for a creative writing test. Same story, new heartbeat." }
      ]
    },
    {
      key: "articles",
      label: "Articles & Blogs (B2B SaaS)",
      blurb: "Search-friendly, human-first, and read by a lot of people.",
      pieces: [
        { title: "300K+ readers a month", client: "Consumer Health Digest", tag: "Editorial + SEO", text: "Editorial and SEO for a flagship US health publication, reporting into a 12-writer team led across India and the US." },
        { title: "B2B, but make it clear", client: "Pepper: Harness AI, Talkspace, Atlan, Portkey AI", tag: "B2B tech content", text: "Content for AI and tech brands through Pepper, the content agency." },
        { title: "70+ pieces, one engine", client: "AMZ Ninja (Affinco)", tag: "E-commerce SEO", text: "Amazon and FBA guides, tool reviews, comparisons, pricing pages, a ROAS calculator and the homepage. Part of the work behind 18% CTR and 22% sign-up growth." },
        { title: "Listicles, reviews, face-offs", client: "Affinco network (AMZ Ninja, AFFNinja)", tag: "B2B SaaS articles", text: "Product reviews (Spocket, Perpetua, PiPiADS, Sell The Trend), comparisons (Helium 10 vs Quartile, Jungle Scout vs SmartScout, Minea vs PiPiADS), keyword and ROAS guides, and pricing pages. Filed in six neat buckets." },
        { title: "Tools, reviewed", client: "TweaksMe, Aff Ninja, AI Mojo, Blogging Eclipse", tag: "SaaS reviews", text: 'Reviews, coupons and comparisons: Originality AI, PiPiADS, Freed AI, Oxylabs, Beehiiv alternatives and "Is Affiliate Marketing Worth It".' },
        { title: "Seller\u2019s paradise", client: "Sellers Heaven (Affinco)", tag: "Marketplace content", text: 'About 24 pieces: Etsy tool reviews, export buyer guides, print-on-demand and an "Aaj Ka Gyaan" series on Indian marketplaces.' },
        { title: "Best Facial Moisturizers", client: "Gorgeous Girl", tag: "Beauty guide", text: "Built from scratch: studied the top 5 ranking sites, cleaned the product lists, ran traffic analysis and wrote 21 product entries." },
        { title: "Myth, busted", client: "Red Light Rays (Affinco)", tag: "Health content", text: 'Homepage, clinic page, editorial guidelines, review process and articles, including a "does it cause cancer?" myth buster.' },
        { title: "Red carpet, 27.2K+ reads", client: "CenturySoft network", tag: "Entertainment news", text: "Pop culture and news pieces, including a Pedro Pascal and Sydney Sweeney red carpet story with 27.2K+ traffic." },
        { title: "Breaking news, handled", client: "CenturySoft network", tag: "News writing", text: "A fast, careful news piece on Kourtney Kardashian\u2019s urgent fetal surgery. Speed without the tabloid tone." },
        { title: "When fiction becomes fact", client: "Affinco", tag: "Pop-culture feature", text: "AI girlfriends, from sci-fi screens to real apps. Research, subtopics, titles and the feature itself." },
        { title: "A novel about a robot", client: "Book news", tag: "News writing", text: 'A news piece on Sierra Greer\u2019s new novel "Annie Bot".' },
        { title: "Backlinks with manners", client: "Wellness Digest, Health Insiders, Glozine", tag: "Wellness content", text: "Backlink content, page reviews and wellness articles written for US audiences." }
      ]
    },
    {
      key: "pop",
      label: "Pop-culture Copies",
      blurb: "Iconic dialogues, bent into marketing truths.",
      pieces: [
        { title: "It's not extra. It's brand personality.", client: "Pop-culture copy", tag: "Copy 01", text: "Stop making boring content, sweetie.", img: "pop1" },
        { title: "Ek reel ki keemat tum kya jaano, client babu!", client: "Pop-culture copy", tag: "Copy 02", text: "", img: "pop2" },
        { title: "Utha le re Deva... is client ko utha le.", client: "Pop-culture copy", tag: "Copy 03", text: "Budget: \u20B90. Expectation: viral.", img: "pop3" },
        { title: "Campaign abhi baaki hai mere dost.", client: "Pop-culture copy", tag: "Copy 04", text: "One post \u2260 marketing.", img: "pop4" },
        { title: "Arre O Sambha, kitne conversions the?", client: "Pop-culture copy", tag: "Copy 05", text: "Reach se pet nahi bharta.", img: "pop5" },
        { title: "Welcome to the marketing world.", client: "Pop-culture copy", tag: "Copy 06", text: "It's chaos. You're gonna love it.", img: "pop6" }
      ]
    },
    {
      key: "writing",
      label: "Creative Writing & Thought Pieces",
      blurb: "The unpaid stuff, and the reason I do everything else.",
      pieces: [
        { title: "Mila toh Haathi, Gayi toh Pooch", client: "Personal", tag: "Personal essay", text: "A personal essay that sounds like a proverb and reads like a confession." }
      ]
    },
    {
      key: "podcast",
      label: "Podcast Writing",
      blurb: "Long-form thinking, written to be heard.",
      pieces: [
        { title: "The founder podcast", client: "Shantanu Deshpande (Bombay Shaving Company)", tag: "Podcast strategy", text: "A founder podcast strategy and the thinking behind long-form business content that people actually finish." },
        { title: "Podcast Strategy by Diya", client: "Own framework", tag: "Podcast strategy", text: "How to plan a podcast people finish: format, guests, hooks and the clips that travel." },
        { title: "My love for podcasts", client: "Personal", tag: "Podcast writing", text: "Why I think in episodes. Three shows hosted and one guest spot later, it checks out.", img: "love-podcasts" }
      ]
    },
    {
      key: "web",
      label: "Websites & Research",
      blurb: "Homepages that know what to say, and the research that told them.",
      pieces: [
        { title: "Level up your data game", client: "StatGlow", tag: "SaaS copy + wireframes", text: "Homepage copy and wireframe drafts for an AI and data science company, Oct 2023 - Mar 2024." },
        { title: "A rebrand, page by page", client: "Fiscaleye", tag: "Website rebrand", text: "Full site structure, content strategy and collateral for a finance brand\u2019s new website." },
        { title: "Affordable luxury", client: "Kohinoor Viva City", tag: "Real estate content", text: 'Content for 2 BHK homes that makes "affordable luxury" sound like a promise, not a cliche.' },
        { title: "Glow, wireframed", client: "Red Light Therapy Rays", tag: "Homepage wireframe", text: "A homepage wireframe that turns a science-heavy product into a clear buying journey." },
        { title: "AskIVA", client: "IIT\xA0Madras\xA0BS", tag: "Chatbot UX", text: "User stories, storyboard, user types and low-fidelity wireframes for a student AI chatbot." },
        { title: "Brands inside LLMs", client: "AI growth startup for D2C", tag: "Insights + content", text: "Qualitative insights and content on AI SEO, brand mentions in LLMs and social listening." },
        { title: "Reputation, researched", client: "Sagar Bhatt", tag: "Research reports", text: "Global marketing communications and branding reports, including an Airbus reputation study and a brand equity presentation." }
      ]
    }
  ];
  var numbers = [
    { n: "18", s: "%", l: "CTR growth at Affinco" },
    { n: "22", s: "%", l: "Sign-up growth at Affinco" },
    { n: "553.8", s: "%", l: "Instagram engagement growth, Paradox" },
    { n: "399.7", s: "%", l: "Instagram reach growth, Paradox" },
    { n: "300", s: "K+", l: "Monthly readers, Consumer Health Digest" },
    { n: "12.5", s: "%", l: "Engagement rate, about 2x benchmark" },
    { n: "~38", s: "%", l: "Conversion lift, Melooha ad scripts" },
    { n: "~42", s: "%", l: "Sales lift, Pristilo campaign" }
  ];
  var services = [
    ["Brand & content strategy", 'Positioning, messaging hierarchies, content pillars and territories, go-to-market. The "what do we even say" part, solved first.'],
    ["Editorial leadership", "Teams of writers, calendars, SOPs, QA and AI-assisted workflows that cut production time by about 30%. I have run a 12-writer team across India and the US."],
    ["SEO & long-form", "Search intent, topic clusters, E\u2011E\u2011A\u2011T, entity SEO, AEO and GEO. Written for health, beauty, SaaS and e\u2011commerce readers who can smell fluff."],
    ["Social & creator growth", "Founder and creator brand systems, Instagram and YouTube audits, reels, carousels and the monetisation plan behind them."],
    ["Scripts & campaign copy", "Ad, reel, YouTube and podcast scripts in English and Hinglish. Launch lines, taglines, guerrilla and experiential ideas."],
    ["AI-native content ops", "LLM trainer (Soul AI), corporate trainer on AI in Marketing, and a daily practice of prompt libraries, AI QA and faster research."]
  ];
  var journey = {
    corporate: [
      { y: "2024 - now", r: "Independent Content & Brand Strategy Consultant", o: "Founders, brands and creators", d: "**20+ clients** and **35+ end\u2011to\u2011end projects**\n**Brands:** Atlan, Harness AI, Portkey AI, Pepper, Melooha, Pristilo, House of Biryan, Kukreja Builders, Kohinoor Viva City\n**Creators:** Varun Agarwal, Yash Garg, Yashita Singh\n**Projects:** positioning and GTM, launch campaigns, brand systems, ad and YouTube scripts, SEO and web copy\n**AI trainer:** Soul AI (Project Mercury), LLM training and GenAI prompts\n**Corporate training:** live sessions on **AI in Marketing** for corporate teams" },
      { y: "2024", r: "Content Strategist", o: "Affinco Solutions, Nagpur", d: "Content strategy for an **AI SaaS and e\u2011commerce** publisher\n**18% CTR growth**, **22% sign-up growth**\n**3 junior editors** mentored" },
      { y: "2023", r: "Content Editor", o: "CenturySoft, Nagpur", d: "Led **12 writers** across India and the US\nHealth, beauty and wellness publications including **Consumer Health Digest**" },
      { y: "2022 - 23", r: "Content Creation Intern", o: "International Centre for Clean Water (IIT Madras initiative)", d: "Content for a **clean water research centre** in Chennai" },
      { y: "2022 - 23", r: "Head of Content, Team Professionals", o: "Paradox, IIT Madras BS annual fest", d: "Led the content team for a **3,000+ student fest**\n**25+ live formats**, **+3.5K followers**, **12.5% engagement**" },
      { y: "2022", r: "Business Development & Research Intern", o: "Younity Community", d: "Remote **research** and **business development**\nWhere the curiosity habit started" }
    ],
    education: [
      { y: "2021 - 2026", r: "BS in Data Science & Applications", o: "IIT Madras", d: "First batch\n**Diplomas** in Programming and Data Science\n**Minor** in Economics & Finance (Corporate Finance, Managerial Economics)" },
      { y: "2020 - 2023", r: "BBA", o: "Gondwana University", d: "Marketing, business and a lot of case studies." },
      { y: "Always", r: "Short courses", o: "Terribly Tiny Tales, Google, GenAI Mastermind", d: "**Writing That Sells Pro**, **Google Ads Creative**\n7-day **Generative AI Mastermind** workshop" }
    ],
    milestones: [
      { y: "2022", r: "Paradox in Saavan", o: "Virtual events", d: "Content for virtual events with **1,700+ attendees**" },
      { y: "2022 - 23", r: "Central Media Team, Paradox", o: "Content Coordinator", d: "**399.7%** Instagram reach growth\n**553.8%** engagement growth" },
      { y: "2023", r: "Paradox in Margazhi \u201923", o: "Coordinator, Design & Content", d: "Certificate of Recognition from the IIT\xA0Madras\xA0BS faculty." },
      { y: "2022 - 23", r: "Team Professionals (Entrepreneurship)", o: "Content Specialist", d: "Organised and hosted speaker sessions on AI, innovation and digital marketing, working with **Padma Shri Prof. Ashok Jhunjhunwala** and **Prof. G Venkatesh**" },
      { y: "2023", r: "Safar car-pooling app", o: "Gondwana University", d: "**Second runner-up**, Innovation & Ideation Competition" },
      { y: "2025 - 26", r: "India Film Project", o: "Season 15", d: "**Nominee**, 50 Hour Writing Challenge, think piece category" }
    ]
  };
  var clientGroups = [
    { k: "Brands & companies", items: ["Pepper", "Harness AI", "Talkspace", "Atlan", "Portkey AI", "Melooha", "Pristilo", "StatGlow", "Fiscaleye", "Goodman Creative", "House of Biryan", "Sihr Salt", "Stars N Celebs", "Investment Forum Company"] },
    { k: "Publishers", items: ["Consumer Health Digest", "Health Insiders", "Gorgeous Girl", "Wellness Digest", "Red Light Therapy Digest", "AMZ Ninja", "Sellers Heaven", "Red Light Rays", "Affinco", "CenturySoft"] },
    { k: "Real estate", items: ["Kukreja Builders", "Kohinoor Viva City"] },
    { k: "Creators & founders", items: ["Varun Agarwal", "Yash Garg (229K)", "Naveen Yadav", "Ansh Mehra", "BigBrainCo", "Ayush Wadhwa / 101xFounders", "Vidhi Chotai", "Yashita Singh", "Venkateshwaran Giri", "Shrirang Siras", "Darshan Thakral"] },
    { k: "Institutions", items: ["IIT Madras", "ICCW", "Paradox", "Soul AI", "Younity"] }
  ];
  var trophies = [
    { y: "2025", t: "IFP Season 15 nominee", s: "Think piece, 50 Hour Writing Challenge", e: "\u{1F3AC}" },
    { y: "2024", t: "Writing That Sells Pro", s: "Terribly Tiny Tales", e: "\u270D\uFE0F" },
    { y: "2023", t: "Spirit @ Parivartan runner-up", s: "Seek Ease, IIT Delhi", e: "\u{1F948}" },
    { y: "2026", t: "Featured in BS Insider", s: "IIT Madras, April 2026", e: "\u{1F4F0}" },
    { y: "2025", t: "Google Ads Creative", s: "Google certification", e: "\u{1F3AF}" },
    { y: "2023", t: "Certificate of Recognition", s: "Paradox in Margazhi \u201923, IIT Madras", e: "\u{1F3C5}" },
    { y: "2023", t: "Safar, second runner-up", s: "Innovation & Ideation, Gondwana University", e: "\u{1F697}" },
    { y: "Now", t: "15+ LinkedIn recommendations", s: "From clients, managers and her own team", e: "\u{1F4AC}" }
  ];
  var coreTools = ["ChatGPT", "Claude", "SEMrush", "Ahrefs", "GA4", "Search Console", "Google Ads", "Meta Business Suite", "WordPress", "Canva", "Notion", "HubSpot"];
  var tools = ["ChatGPT", "Claude", "Gemini", "Perplexity", "NotebookLM", "Jasper", "Copy.ai", "Writesonic", "Notion AI", "Midjourney", "Ideogram", "Grammarly", "Originality.ai", "Copyleaks", "SEMrush", "Ahrefs", "Ubersuggest", "SurferSEO", "Yoast", "GA4", "Search Console", "Google Trends", "Keyword Planner", "Tag Manager", "Google Ads", "Meta Business Suite", "Meta Ads Library", "WordPress", "Elementor", "Beehiiv", "Substack", "Medium", "Wix", "Canva", "Figma", "CapCut", "Premiere Pro", "Illustrator", "Notion", "Slack", "Trello", "Airtable", "ClickUp", "HubSpot", "Google Workspace", "Excel"];
  var frameworks = [
    ["Copy", "AIDA, PAS, FAB, PASTOR, hooks, direct response, UX writing"],
    ["SEO", "E\u2011E\u2011A\u2011T, intent mapping, topic clusters, entity SEO, AEO, GEO"],
    ["Funnels", "TOFU\u2011MOFU\u2011BOFU, Hero\u2011Hub-Help, pillars, territories"],
    ["Business", "STP, 4Ps/7Ps, PESTLE, Porter, Blue Ocean, GTM, CAC and contribution margin"],
    ["Psychology", "Barnum effect, FOMO, social proof, reciprocity, insight mining"],
    ["Culture", "Moment marketing, trend hijacking, memes, UGC, guerrilla, experiential"]
  ];
  var notes = [
    ["CTP: Clarity, Trust, Predictability", "Before I look at your reach, I ask three things. Can people tell what you do in one line? Do they believe you? Do they know what they get if they follow you? Fix those and the algorithm gets much friendlier."],
    ["Identity in the first 5 seconds", 'The first five seconds of a reel are not for information. They tell the viewer "this is for someone like you". Get that calibration right and the rest of the script gets watched.'],
    ["Creator Revenue Architecture", "My 7-stage system for turning a creator into a brand that earns. It starts with positioning, not sponsorships, because a clear brand is what makes money repeatable."],
    ["Hero, Hub, Help", "Big moments that get attention, regular formats that build habit, and useful content that answers search. Most brands only do one. The good ones plan all three."],
    ["Trend hijacking, with a brief", "A trend only works if it carries your message. I once tied a celebrity\u2019s red light therapy moment to a skincare publisher\u2019s content plan. Relevance first, virality second."],
    ["Pain before product", 'People buy relief, not features. The Melooha scripts opened with the feeling ("2025 ka manhoos saal") and only then offered the fix. That order matters.']
  ];
  var faqs = [
    ["What kind of role are you looking for?", "Full-time content strategy, brand or editorial leadership roles, in Mumbai or remote. I also take on select consulting projects with founders and brands."],
    ["Are you a writer or a strategist?", "Both, in that order of hours. I decide what should be said and why, then I can write it, brief it, or build the team and system that ships it."],
    ["Which industries do you know?", "Health, beauty and wellness (US publications), B2B SaaS and AI, e\u2011commerce, D2C food, real estate, astrology, edtech, finance and the creator economy."],
    ["Do you write in Hindi and Hinglish?", "Yes. Hinglish ad and reel scripts are some of my best-performing work. I speak English, Hindi, Marathi and Gujarati."],
    ["How do you use AI?", "A lot, and carefully. I have trained LLMs, taught AI in marketing to corporate teams, and I use AI for research, drafts and QA. The judgment stays human."],
    ["How do we start?", "Send me an email with what you are working on. I usually reply with questions before I reply with ideas."]
  ];
  var PORTFOLIO_ROOT = "https://drive.google.com/drive/folders/1ntvhZC00VXg9IUcfs-eDVRhMMK0892JY";
  var F3 = (id2) => `https://drive.google.com/drive/folders/${id2}`;
  var D = (id2) => `https://drive.google.com/file/d/${id2}/view`;
  var G2 = (id2) => `https://docs.google.com/document/d/${id2}/edit`;
  var LINKS = {
    "Zayke Ki Mehek": D("1kuxhdorkbKWSZykKaR9ighgdrjMovJYv"),
    "Nukkad se Netflix": D("1HbjMqGhRyRqtpZjIl-KCqDCuULmCXeoq"),
    "A multi-strategy walkthrough": D("11s2SEht5gFAAFqX_EFWLFAqvRYBRi31c"),
    "The 3-volume brand": D("1tgPvaOq6cosSPPkM7ymIGH91WAPsG0E_"),
    "Reviewer to lifestyle brand": D("1fVKVwgcHdNASVZ8z4Z8QOcwA8ks2AeR9"),
    "Founder-led B2B": D("1joujAJCB8uWUgGWn0qIZHaZgcZd5a1BU"),
    "Shock-math in 5 seconds": D("1gVJy_bCQokIhFTxXZb5i6A-M63xJmSSa"),
    "Creator Revenue Architecture": D("1OYOlkAsARJA590fXT4afSlOg6k5bp-zv"),
    "Scripts with a pulse": F3("1lcGR290_MSTP4eonNqtPkMvRZtDy-pga"),
    "Listicles, reviews, face-offs": F3("17qi05U5K-AuPnXxZolRwQTxCk_ZvYKDd"),
    "Breaking news, handled": D("153VeOXAB1kGbn1WgBUF5WFER9kbaqM64"),
    "Mila toh Haathi, Gayi toh Pooch": D("1KiGNwP5QBm8ii7uULWhlQRqgbxTPkZ5x"),
    "Ansuni": D("1M7KQtme0oxFoKCjNsCF7Co6umuK4IjFv"),
    "Pop-culture copies": F3("1Fzj79grt9WLlvaUpWbMR_bmpHiN2y9z8"),
    "The founder podcast": D("10XBnddM5xrrIQmbCNdyrrfkqJ14gQx0Q"),
    "Podcast Strategy by Diya": D("1CePBh530tk9c8Kt1BjJLP4_b7U8dMQxT"),
    "My love for podcasts": D("1x-s6NA06AvwU_2f6HQA25gOvo2_xJs1z"),
    "Walls That Raised Us": G2("1lSHOJPShvMnURQ8giRIUlkvf_QCHCecH8t2dMP7KHo4"),
    "City In A Frame": G2("11RS1gev0TcPj8QUzv5wmP6pkhakjkK2Apy_ZxtaGvPM"),
    "Affordable luxury": G2("1nNGUWQghwKRNWH-NEiP1iePoCFMaozKEyaeZXvrnGC4"),
    "Find The Faces": D("1nYYxb5wsK63dwNZx8IzCCW3vhPfbouLb"),
    "Taste of Home, Miles Away": F3("1hvJRASC4WufmYvBfD_Zd1a7drNRaGPly"),
    "Gamified event marketing": F3("17Us0ImXZ63FRQdl4l6-_UkQW9OLLvyCt"),
    "The 3-second clarity test": F3("1C7PGEbhwUPI8CkNnG_MPmHg4lTuxCGab"),
    "Talking reels, A to Z": F3("1g75HOOpLrG7s2Uq1_5RDSzxTz2pLwoS4"),
    "Pattern hunting": D("1G7misreeeOMDYT9aLNQ_SabCzce6O-Bz"),
    "Luck shouldn\u2019t decide fame": D("1V98qfDqRltkq-xfHz6HSximQBizk8Cfi"),
    "2025 Ka Manhoos Saal": F3("1NAKV8fSitW4o8rDf-HeVZrFgK2uUpvQN"),
    "The 1-person AI business": F3("1WH6ik-HagXk1IOeJH8jCBXts4_M6mOpe"),
    "58K views and counting": "https://youtu.be/ZVm2Nn70GhY",
    "Dermatologist approved": "https://youtu.be/Rx0zd38S_bg",
    "Red carpet, 27.2K+ reads": "https://www.redlighttherapydigest.com/sydney-sweeney-skincare-solawave-wand",
    "300K+ readers a month": "https://www.instagram.com/consumerhealthdigest/",
    "Glow, wireframed": G2("1dZJ3iqAp8NstVhdmUSNnoZA3KUEc3TDJ0Xou7y1AsyY"),
    "Breakthrough": "https://youtu.be/9L3ntS7tvsY",
    "Kahani, in Hindi": D("1Fdrwsjd9kC2InsaJHmwDOn2kBAD7c8cV"),
    "70+ pieces, one engine": F3("1p0PgrH9r4G2LWb5NMvnXY9DeJxK8MCha"),
    "Seller\u2019s paradise": F3("1p0PgrH9r4G2LWb5NMvnXY9DeJxK8MCha"),
    "Myth, busted": F3("1p0PgrH9r4G2LWb5NMvnXY9DeJxK8MCha"),
    "Tools, reviewed": F3("1p0PgrH9r4G2LWb5NMvnXY9DeJxK8MCha"),
    "Level up your data game": F3("10-5mD5kzNm-jz75jHtmLUKj90PCexW0I"),
    "A rebrand, page by page": F3("1tbwjIkGzpr7K1DY8rQfCv75IfwWxoUgL"),
    "Homepage + ads, QA\u2019d": F3("1TC3Yju4A5a6E_W7GnsHGCAzr2FS0slRv"),
    "AskIVA": D("1GvxpRtB_EVR8_ZzMj1IBoY33H3Webbtj"),
    "Reputation, researched": F3("1_T2Hl-5YOOVAOmeyD4iejZl2uEPIUB9s"),
    "Seek Ease": D("1R0TuUEIwcqqZ3zwzH2k5uoIajDg0ktlr"),
    "Helter, but strategic": D("1bIl1Thu_4y3Ru6dJD2SyB_sypoxVzGq1"),
    "Phitkari, but make it glow": D("1AFzN6sn4iBXf49ziscUjfpVCSJZ9MXE3"),
    "When fiction becomes fact": "https://docs.google.com/document/d/1G1yDOCKczG5DueizqeJCkjeKG2OeFwYDdhnGM2cK_Wc/edit",
    "A novel about a robot": "https://docs.google.com/document/d/1KGXKFxupYTrj27o-CXpH1DEkkDzIIIyNo2do8fro4N4/edit",
    "The Invisible Architect": G2("18tOTkpvnfTnMxvhCx2zQCopA1iOHqk7pzyjsVcfcwp8")
  };
  var linkFor = (title) => LINKS[title] ?? PORTFOLIO_ROOT;
  var RESULTS_FOLDER = F3("1UPUKhps7blzQB9cj4gCmQ4e7HYytGAtA");
  var proofs = [
    { k: "YouTube, Yash Garg (229K subs)", t: "Beat every recent video", d: '"Joining Manipal in 2026? BEWARE!!", which I wrote.\n58.7K views: #1 on his channel right now among recent uploads, the most-viewed of his 24 videos since March 2026, about 4x their median (15K).\n#1 on YouTube search for "manipal 2026", top 2 for "Manipal".', img: "yash", href: "https://youtu.be/ZVm2Nn70GhY" },
    { k: "Brut India, Yashita Singh", t: "2M views on Brut", d: "Brut India featured Yashita Singh on being an outsider in the film industry. I wrote and strategised her Nukkad Naatak series.", img: "brut", href: "https://www.instagram.com/reel/DPk66KpCWYs/" },
    { k: "Melooha, Shark Tank India", t: "~38% conversion lift", d: "Hinglish ad scripts built on emotional pain hooks.", href: D("1uoAFRYh2lXzVkZDu2hacjZYlm2cRdk_m") },
    { k: "Paradox, IIT Madras", t: "399.7% reach, 553.8% engagement", d: "Instagram growth for the annual fest content team.", href: D("1SjPVeUBg3vucovX9bWveHBZy7ic1QXBl") },
    { k: "Paradox in Saavan", t: "1,700+ virtual attendees", d: "Content for the virtual edition of the fest.", href: D("1eeU1zVkYzMwzLUvKxQ8ASYgEy3zC6obH") },
    { k: "Pristilo, Dubai", t: "~42% sales lift", d: "The 30-Day Dubai Fitness Challenge and UGC push.", href: D("1OlCsrtqcVlExmkPnGZO2znF2SHbuaErN") }
  ];

  // src/photos/proof-yash.jpg
  var proof_yash_default = "./assets/LWSRVUMP.jpg";

  // src/photos/proof-brut.jpg
  var proof_brut_default = "./assets/KQSKOPI2.jpg";

  // src/App.tsx
  var import_jsx_runtime27 = __toESM(require_jsx_runtime());
  var SHOW_NOTES = false;
  var LOGOS = [
    { src: paradox_default, name: "IIT Madras Paradox" },
    { dark: true, src: atlan_default, name: "Atlan" },
    { src: harness_default, name: "Harness" },
    { src: portkey_default, name: "Portkey" },
    { src: pepper_default, name: "Pepper" },
    { src: chd1_default, name: "Consumer Health Digest" },
    { dark: true, src: melooha_default, name: "Melooha" },
    { src: bigbrain_default, name: "BigBrainCo" },
    { dark: true, src: cuttingedge_default, name: "Cutting Edge School" },
    { src: kohinoor_default, name: "Kohinoor", dark: true },
    { src: kinfra_default, name: "Kukreja Infrastructures" },
    { src: biryan_default, name: "House of Biryan" },
    { src: gorgeousgirl_default, name: "Gorgeous Girl" },
    { src: wellness_default, name: "Wellness Digest" },
    { src: iccw_default, name: "ICCW" },
    { src: younity_default, name: "Younity" },
    { src: owled_default, name: "OWLED Media" }
  ];
  var POP = [pop1_default, pop2_default, pop3_default, pop4_default, pop5_default, pop6_default];
  var go = (id2) => document.getElementById(id2)?.scrollIntoView({ behavior: "smooth", block: "start" });
  var IMGS = {
    "love-podcasts": love_podcasts_default,
    biryan: house_of_biryan_default,
    walls: walls_that_raised_us_default,
    city: city_in_a_frame_default,
    faces: find_the_faces_default,
    nukkad: nukkad_default
  };
  var WA = "https://wa.link/kzc6zv";
  var SUBSTACK = "https://substack.com/@diyanathwani2";
  var YOUTUBE = "https://youtube.com/@diyanathwani";
  var keychains = [
    { k: "Instagram", h: "@mindonecstasy_", href: "https://www.instagram.com/mindonecstasy_/", g: "IG" },
    { k: "LinkedIn", h: "diya-nathwani6622", href: "https://www.linkedin.com/in/diya-nathwani6622/", g: "in" },
    { k: "Website", h: "diyanathwani.site", href: "https://diyanathwani.site", g: "www" },
    { k: "X", h: "@diya_nathwani", href: "https://x.com/diya_nathwani", g: "X" },
    { k: "WhatsApp", h: "Say hi", href: WA, g: "WA" }
  ];
  var THUMBS = {
    "A multi-strategy walkthrough": d_walk_default,
    "Creator Revenue Architecture": d_cra_default,
    "Mila toh Haathi, Gayi toh Pooch": d_mila_default,
    "The founder podcast": d_founder_default,
    "Podcast Strategy by Diya": d_pstrat_default,
    "Breaking news, handled": d_news_default,
    "When fiction becomes fact": d_fiction_default,
    "A novel about a robot": d_novel_default,
    "Gamified event marketing": d_gamified_default,
    "Homepage + ads, QA\u2019d": d_goodman_default,
    "Talking reels, A to Z": d_vidhi_default,
    "Scripts with a pulse": d_scripts_default,
    "Tools, reviewed": d_tools_default,
    "Seller\u2019s paradise": d_seller_default,
    "Level up your data game": d_statglow_default,
    "A rebrand, page by page": d_fiscal_default,
    "The 3-volume brand": volume3_default,
    "Luck shouldn\u2019t decide fame": luck_default,
    "Seek Ease": seekease_default,
    "AskIVA": askiva_default,
    "Glow, wireframed": glow_default,
    "Shock-math in 5 seconds": shock_default,
    "Founder-led B2B": b2b_default,
    "Taste of Home, Miles Away": lg_pristilo_default,
    "Helter, but strategic": lg_heltr_default,
    "70+ pieces, one engine": lg_amz_default,
    "Listicles, reviews, face-offs": lg_amz_default,
    "Dermatologist approved": lg_rltd_default,
    "Kahani, in Hindi": lg_pocketfm_default,
    "Reviewer to lifestyle brand": naveen_default,
    "58K views and counting": yash_default,
    "2025 Ka Manhoos Saal": melooha_default,
    "The 1-person AI business": cuttingedge_default,
    "Pattern hunting": cuttingedge_default,
    "300K+ readers a month": chd1_default,
    "B2B, but make it clear": pepper_default,
    "Best Facial Moisturizers": gorgeousgirl_default,
    "Backlinks with manners": wellness_default,
    "Affordable luxury": kohinoor_default
  };
  var DARK_TH = /* @__PURE__ */ new Set([melooha_default, cuttingedge_default, kohinoor_default, lg_heltr_default]);
  var GENRE = { "Think piece": "think", "Original song": "music", "Short film": "film" };
  var TONES = ["ink", "lime", "cream", "coral", "lilac", "yellow"];
  var MOTIFS = ["num", "ring", "stripe", "quote", "grid", "arrow"];
  function Cover({ piece, no: no2, drawer }) {
    if (piece.img) {
      return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "cv cv-photo", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("img", { src: IMGS[piece.img], alt: `${piece.title} campaign cover` }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("span", { className: "cv-issue", children: [
          "No. ",
          String(no2).padStart(2, "0")
        ] })
      ] });
    }
    const tone = TONES[(no2 * 7 + drawer.length) % TONES.length];
    const motif = MOTIFS[(no2 * 5 + drawer.length * 3) % MOTIFS.length];
    const th = THUMBS[piece.title];
    const emo = GENRE[piece.tag];
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: `cv cv-${tone} cv-m-${motif}${th ? " cv-hasdoc" : ""}${emo ? " cv-hasemo" : ""}`, "aria-hidden": "true", children: [
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "cv-top", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "cv-mast", children: "DN." }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("span", { children: [
          "No. ",
          String(no2).padStart(2, "0")
        ] })
      ] }),
      th && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("img", { className: DARK_TH.has(th) ? "cv-doc is-dk" : "cv-doc", src: th, alt: "" }),
      emo && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(GenreIcon, { kind: emo, className: "cv-emoji" }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "cv-motif", children: motif === "num" ? String(no2).padStart(2, "0") : motif === "quote" ? "\u201C" : motif === "arrow" ? "\u2197" : null }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("h4", { className: "cv-title", children: piece.title }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "cv-bottom", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: piece.tag }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: piece.client.split(/[,(:/]/)[0].trim() })
      ] })
    ] });
  }
  function useClock() {
    const fmt = () => new Intl.DateTimeFormat("en-IN", { hour: "numeric", minute: "2-digit", hour12: true, timeZone: "Asia/Kolkata" }).format(/* @__PURE__ */ new Date());
    const [t, setT] = (0, import_react21.useState)(fmt());
    (0, import_react21.useEffect)(() => {
      const id2 = setInterval(() => setT(fmt()), 3e4);
      return () => clearInterval(id2);
    }, []);
    return t;
  }
  function Tabs({ items, value, onChange, label, light = false }) {
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: light ? "nk-tabs is-light" : "nk-tabs", role: "tablist", "aria-label": label, children: items.map(([k3, l2]) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("button", { role: "tab", "aria-selected": value === k3, className: value === k3 ? "is-on" : "", onClick: () => onChange(k3), children: l2 }, k3)) });
  }
  function Accordion({ items, numbered = false }) {
    const [open, setOpen] = (0, import_react21.useState)(0);
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "nk-acc", children: items.map(([q, a], i) => /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: open === i ? "nk-acc-item is-open" : "nk-acc-item", children: [
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("button", { "aria-expanded": open === i, onClick: () => setOpen(open === i ? -1 : i), children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("span", { children: [
          numbered ? `${i + 1}. ` : "",
          q
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("i", { "aria-hidden": "true", children: open === i ? "\u2212" : "+" })
      ] }),
      open === i && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { children: a })
    ] }, q)) });
  }
  function Keychains() {
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "kc-row", children: keychains.map((k3, i) => {
      const inner = /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(import_jsx_runtime27.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "kc-ring", "aria-hidden": "true" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "kc-glyph", children: k3.g }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "kc-name", children: k3.k }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "kc-handle", children: k3.h })
      ] });
      return k3.href ? /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("a", { className: `kc kc-${i % 4}`, href: k3.href, target: "_blank", rel: "noopener noreferrer", children: inner }, k3.k) : /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: `kc kc-${i % 4} is-soon`, children: inner }, k3.k);
    }) });
  }
  function Contact() {
    const [name, setName] = (0, import_react21.useState)("");
    const [need, setNeed] = (0, import_react21.useState)("A full-time role");
    const [msg, setMsg] = (0, import_react21.useState)("");
    const subject = `Hello Diya - ${need}`;
    const body = `Hi Diya,

${msg || "I would like to talk about..."}

${name ? "- " + name : ""}`;
    const href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("section", { className: "nk nk-dark nk-contact", id: "contact", children: [
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "nk-contact-photo is-phone", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("img", { src: diya_phone_default, alt: "Diya Nathwani winking, holding a pink toy phone" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "nk-hi is-say", children: "Say hi" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("p", { className: "pen is-under", children: [
          "pen name: ",
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("b", { children: "drishti(\u0915\u094B\u0923)" }),
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "emo", children: "\u{1F440}" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Title, { cls: "nk-serif is-center", id: 0, pre: "Got a brief? Let's", hl: "work together" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { className: "nk-sub", children: "A role, a rebrand, a launch or a half-baked idea at 2 am? Tell me about it. I'll bring the strategy." }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "nk-form", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("label", { children: [
            "Your name",
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("input", { value: name, onChange: (e2) => setName(e2.target.value), placeholder: "Priya from a brand you love" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("label", { children: [
            "What's this about?",
            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("select", { value: need, onChange: (e2) => setNeed(e2.target.value), children: [
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("option", { children: "A full-time role" }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("option", { children: "Brand or content strategy" }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("option", { children: "Scripts or campaigns" }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("option", { children: "SEO and long-form" }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("option", { children: "Something else, surprise me" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("label", { className: "is-wide", children: [
            "What can I help with?",
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("textarea", { value: msg, onChange: (e2) => setMsg(e2.target.value), rows: 4, placeholder: "We are launching... / We are hiring... / I have an idea..." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("a", { className: "nk-btn is-lime", href, children: "Shoot your shot" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "nk-form-note", children: "Opens your email app with this message ready. Nothing is stored here." })
        ] })
      ] })
    ] });
  }
  function App() {
    const clock = useClock();
    const [drawer, setDrawer] = (0, import_react21.useState)(drawers[0].key);
    const [jt2, setJt] = (0, import_react21.useState)("corporate");
    const [revealed, setRevealed] = (0, import_react21.useState)([]);
    const d = drawers.find((x2) => x2.key === drawer);
    const totalPieces = drawers.reduce((a, x2) => a + x2.pieces.length, 0);
    let counter = 0;
    const offsets = {};
    drawers.forEach((x2) => {
      offsets[x2.key] = counter;
      counter += x2.pieces.length;
    });
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(wu, { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "nk-root", style: { ["--grain"]: `url(${grain_default})` }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("header", { className: "nk-bar", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "nk-logo", children: "DIYA N." }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("span", { className: "nk-status", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("i", { className: "nk-dot", "aria-hidden": "true" }),
          "Open to roles & great briefs",
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("small", { children: "Mumbai / Nagpur / remote" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("span", { className: "nk-clock", children: [
          clock,
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("small", { children: "IST, probably overthinking a headline" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("nav", { className: "nk-nav", "aria-label": "Sections", children: [["about", "About"], ["results", "Results"], ["work", "Work"], ["journey", "Journey"], ["featured", "Featured"], ["media", "Media"]].map(([k3, l2]) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("button", { onClick: () => go(k3), children: l2 }, k3)) }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("button", { className: "nk-btn is-outline is-sm", onClick: () => go("contact"), children: "Let's talk" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("section", { className: "nk nk-dark nk-hero", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(HeroName, {}),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "nk-hero-stage", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("h2", { className: "nk-hero-word is-left", children: "Content" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "nk-hero-photo", children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("img", { src: diya_portrait_default, alt: "Diya Nathwani speaking into a microphone" }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "orb o0", children: "Writer" }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "orb o1", children: "Strategist" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("h2", { className: "nk-hero-word is-right", children: "Strategist" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("p", { className: "nk-hero-sub", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("strong", { children: "Your brand doesn't need more content. It needs a point of view worth coming back to." }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "I build the strategy and write the words that make it happen - for founders, brands and creators." })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("section", { className: "nk nk-quickstats", "aria-label": "At a glance", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Title, { cls: "nk-serif is-center", pre: "Numbers", hl: "never lie!" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "qs-grid", children: [["3.5+", "years in content & brand"], ["20+", "clients, India to Dubai to the US"], ["35+", "end-to-end projects"], ["4", "podcasts, and counting"]].map(([n2, l2], i) => /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: `qs-card qs-${i}`, children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("span", { className: "qs-index", children: [
            "0",
            i + 1,
            " / 04"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("strong", { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(CountUp, { value: n2 }) }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "qs-label", children: l2 })
        ] }, l2)) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("section", { className: "nk-marquee-wrap", "aria-label": "Brands and clients", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Title, { cls: "nk-serif is-center is-onp is-mixed", pre: "My", hl: "MAIN CHARACTER", post: "Brands" }),
        [0, 1, 2].map((row) => {
          const L = LOGOS.filter((_3, i) => i % 3 === row);
          return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "nk-marquee" + (row === 1 ? " is-rev" : ""), children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "nk-marquee-track", children: [...L, ...L, ...L].map((l2, i) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: l2.dark ? "mq is-dark" : "mq", "aria-hidden": i >= L.length, children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("img", { src: l2.src, alt: i < L.length ? l2.name : "" }) }, l2.name + i)) }) }, row);
        })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("section", { className: "nk nk-dark nk-about", id: "about", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Title, { cls: "nk-serif is-center", id: 1, pre: "The girl behind", hl: "the work" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "chat1", "aria-label": "About Diya", children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("p", { children: [
              "Hi, I'm ",
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("b", { children: "Diya" }),
              "."
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("p", { children: [
              "I studied ",
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("b", { children: "data science at IIT Madras" }),
              ", so yes, I will ask what your CTR is. Then I will write you something that makes people ",
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("b", { children: "feel things" }),
              "."
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("p", { children: [
              "I help ",
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("b", { children: "founders, brands and creators" }),
              " work out:"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "flow", children: [
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "what to say" }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("i", { children: "\u2192" }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "who it's for" }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("i", { children: "\u2192" }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "how it makes money" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("p", { children: [
              "I'm the ",
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("b", { children: "protagonist of my own narrative" }),
              ", which is exactly how I know your brand needs to be the main character of its own. I write:"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("ul", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("li", { children: "the plot" }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("li", { children: "the dialogue" }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("li", { children: [
                "the bit where the audience ",
                /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("b", { children: "can't look away" })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("p", { className: "last", children: [
              "Also: I love breaking down ",
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("b", { children: "contradictory topics" }),
              " and I talk like I'm hosting a podcast. I've been on ",
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("b", { children: "four" }),
              ", so it checks out."
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "nk-contactline", children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("small", { children: "WhatsApp" }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("a", { href: WA, target: "_blank", rel: "noopener noreferrer", children: "Message me" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("small", { children: "Email" }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("a", { href: `mailto:${EMAIL}`, children: EMAIL })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("button", { className: "nk-btn is-outline", onClick: () => go("journey"), children: "Read the lore" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "nk-about-photo", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "mc-clap", "aria-hidden": "true", children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "mc-top" }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "mc-board", children: [
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "You are" }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "the main character" }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "mc-row", children: [
                /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("i", { children: "Scene 1" }),
                /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("i", { children: "Take 35+" }),
                /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("i", { children: "Brand: yours" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("img", { src: diya_mic_hq_default, alt: "Diya Nathwani speaking into a microphone, arm raised" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("section", { className: "nk nk-process", id: "process", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Title, { cls: "nk-serif is-center", pre: "How we", hl: "work?" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { className: "nk-center-sub", children: "Four moves, one clear direction." }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "pr-track", "aria-label": "Research, then position, then create, then optimise", children: [["Research", "Audience + market insights"], ["Position", "One clear brand promise"], ["Create", "Content + campaigns"], ["Optimise", "Measure + improve"]].map(([step, detail], i) => /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(import_react21.default.Fragment, { children: [
          i > 0 && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "pr-arrow", "aria-hidden": "true", children: "\u2192" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "pr-step", children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("small", { children: [
              "0",
              i + 1
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("strong", { children: step }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: detail })
          ] })
        ] }, step)) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("section", { className: "nk nk-dark nk-services", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Title, { cls: "nk-serif is-center", id: 2, pre: "What I can", hl: "do for you" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { className: "nk-sub", children: "Six things I do well. Hire me for one, or all six." }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Accordion, { items: services, numbered: true })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "nk-services-photo", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("img", { src: diya_writing_default, alt: "Diya Nathwani typing at a typewriter at night" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Playground, {}),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("section", { className: "nk nk-black nk-numbers", id: "results", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { className: "nk-eyebrow", children: "(Results)" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "nk-numbers-head", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Title, { cls: "nk-serif is-center", id: 0, pre: "Real numbers,", hl: "real results" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { className: "nk-sub", children: "Real numbers from real projects, with the receipts to back them." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "nk-numgrid", children: numbers.map((n2) => /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("strong", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(CountUp, { value: n2.n }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("em", { children: n2.s })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: n2.l })
        ] }, n2.l)) }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "nk-numstrip", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "2,000+ assets shipped" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "12 writers led" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "3,000+ fest attendees" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "1,700+ virtual attendees" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "10+ sectors" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "4 languages" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "rs-proofs", children: proofs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("a", { className: p.img ? "rs-proof has-img" : "rs-proof", href: p.href, target: "_blank", rel: "noopener noreferrer", children: [
          p.img && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("img", { src: p.img === "brut" ? proof_brut_default : proof_yash_default, alt: p.img === "brut" ? "Brut India reel featuring Yashita Singh at 2M views" : "YouTube search for manipal 2026 showing Joining Manipal in 2026? BEWARE!! by Yash Garg at 58K views" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("small", { children: p.k }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("strong", { children: p.t }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: p.d }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("b", { children: "See the proof \u2197" })
        ] }, p.k)) }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("a", { className: "nk-btn is-yellow rs-all", href: RESULTS_FOLDER, target: "_blank", rel: "noopener noreferrer", children: "All the receipts \u2197" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("section", { className: "nk nk-light nk-work", id: "work", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "nk-work-head", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Title, { cls: "nk-serif is-center", id: 3, pre: "Some of my", hl: "best work" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("p", { children: [
            totalPieces,
            " pieces in ",
            drawers.length,
            " drawers. Pick one. They're all full."
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Tabs, { light: true, label: "Work categories", value: drawer, onChange: setDrawer, items: drawers.map((x2) => [x2.key, `${x2.label} (${x2.pieces.length})`]) }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { className: d.key === "pop" ? "nk-drawer-blurb no-swipe" : "nk-drawer-blurb", children: d.blurb }),
        d.key === "pop" ? /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "pop-wall", children: d.pieces.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("a", { className: `pop-tile r${i % 3}`, href: linkFor("Pop-culture copies"), target: "_blank", rel: "noopener noreferrer", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("img", { src: POP[i], alt: `Pop-culture copy: ${p.title}`, loading: "lazy" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("span", { className: "pop-cap", children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("b", { children: p.tag }),
            p.title
          ] })
        ] }, p.title)) }) : /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "nk-pieces", children: d.pieces.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("article", { className: i === 0 ? "nk-piece is-lead" : "nk-piece", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Cover, { piece: p, no: offsets[d.key] + i + 1, drawer: d.key }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "nk-piece-body", children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { className: "nk-piece-tag", children: p.tag }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("h3", { children: p.title }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { className: "nk-piece-client", children: p.client }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { children: p.text }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("a", { className: "nk-piece-link", href: linkFor(p.title), target: "_blank", rel: "noopener noreferrer", children: [
              linkFor(p.title) === PORTFOLIO_ROOT ? "Browse the portfolio" : "See the work",
              " ",
              "\u2197"
            ] })
          ] })
        ] }, p.title)) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("section", { className: "nk nk-light nk-journey", id: "journey", children: [
        jt2 === "milestones" ? /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("figure", { className: "jr-id is-event", "aria-label": "Event mode ID card", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "jr-id-top", children: "Event mode: ON" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("img", { src: diya_events_default, alt: "Diya Nathwani laughing in the front row at an event" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("figcaption", { children: [
            "Diya Nathwani",
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("small", { children: "Front row, always." })
          ] })
        ] }) : jt2 === "clients" ? /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("figure", { className: "jr-id is-client", "aria-label": "Client mode ID card", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "jr-id-top", children: "Client mode: ON" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("img", { src: diya_headphones_default, alt: "Diya Nathwani in headphones, focused on her screen, black and white" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("figcaption", { children: [
            "Diya Nathwani",
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("small", { children: "Headphones on. Brief loaded." })
          ] })
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("figure", { className: "jr-id", "aria-label": "Corporate mode ID card", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "jr-id-top", children: "Corporate mode: ON" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("img", { src: diya_pro_default, alt: "Diya Nathwani, professional portrait in a black blazer" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("figcaption", { children: [
            "Diya Nathwani",
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("small", { children: "Same chaos, pressed blazer." })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Title, { cls: "nk-serif is-center", id: 1, center: true, pre: "How I got here:", hl: "MY JOURNEY" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { className: "nk-center-sub", children: "Four chapters. Zero boring ones." }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Tabs, { light: true, label: "Journey", value: jt2, onChange: setJt, items: [["corporate", "Corporate"], ["clients", "Clients"], ["education", "Education"], ["milestones", "Milestones"]] }),
        jt2 === "clients" ? /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "nk-clientlist", children: clientGroups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { className: "nk-piece-tag", children: g.k }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { children: g.items.join(" \xB7 ") })
        ] }, g.k)) }) : /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(import_jsx_runtime27.Fragment, { children: [
          jt2 === "education" && /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "jr-edu", children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("img", { src: iitm_default, alt: "IIT Madras logo" }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { className: "jr-edu-k", children: "Alma mater" }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { className: "jr-edu-t", children: "IIT Madras" }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("p", { className: "jr-edu-s", children: [
                "BS in Data Science & Applications, 2021 - 2026. First batch. ",
                /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("strong", { children: "Fewer than 1% make it through the full 4\u2011year degree." }),
                " She is one of them. Came for the data, stayed for the story."
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { className: "jr-edu-s", style: { whiteSpace: "pre-line" }, children: "Owned the story on every stage of campus: fest, society, house and student government.\nUniversity fest: Head of Content @Team Professionals, IITM Paradox.\nSociety: Head of Content @Outliers\xA0E\u2011Cell.\nHouse & student government: Social Media & Web Admin @Bandipur\xA0House (UHC)." })
            ] })
          ] }),
          jt2 === "milestones" && /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(import_jsx_runtime27.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { className: "jr-trophy-h", children: "The trophy shelf. (It's getting crowded.)" }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "nk-trophies", children: trophies.map((t) => /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "nk-trophy-card", children: [
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "nk-emoji", children: t.e }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "nk-chip", children: t.y }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("strong", { children: t.t }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("small", { children: t.s })
            ] }, t.t)) }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "jr-receipts", children: [
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("a", { href: "https://drive.google.com/drive/folders/1iMauSG8PlMqZkEPw6bs37qZ7uRv7vHSZ", target: "_blank", rel: "noopener noreferrer", children: "Certificates \u2197" }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("a", { href: "https://drive.google.com/drive/folders/1E_t7yAOhDun2aYzpS8uLKSELScgkFvTY", target: "_blank", rel: "noopener noreferrer", children: "Recommendation letters \u2197" }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("a", { href: "https://drive.google.com/drive/folders/15MVxYi-wn4JLC6ylPTULbUXMbHvw5Kx5", target: "_blank", rel: "noopener noreferrer", children: "Features \u2197" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("ol", { className: "nk-timeline", children: journey[jt2].map((j2) => /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "nk-year", children: j2.y }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { className: "nk-tl-role", children: j2.r }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { className: "nk-tl-org", children: j2.o }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("ul", { className: "tl-pts", children: j2.d.split("\n").map((ln, k3) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("li", { children: ln.split("**").map((t, m) => m % 2 ? /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("strong", { children: t }, m) : t) }, k3)) })
            ] })
          ] }, j2.r + j2.o)) })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("section", { className: "nk nk-white nk-tools", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "nk-orbit", "aria-hidden": "true", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", {}),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", {}),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", {})
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Title, { cls: "nk-serif is-center", id: 2, center: true, pre: "Tools I", hl: "work with" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("p", { className: "nk-center-sub", children: [
          tools.length,
          " tools, 4 languages and the frameworks I actually use."
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("p", { className: "core-h", children: [
          "Core stack ",
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "(the non-negotiables)" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "core-stack", children: coreTools.map((t) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: t }, t)) }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { className: "core-h is-more", children: "Also in the toolbox" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "nk-tools-cloud", children: tools.filter((t) => !coreTools.includes(t)).map((t) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: t }, t)) }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "nk-frameworks", children: frameworks.map(([k3, v2]) => /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("strong", { children: k3 }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: v2 })
        ] }, k3)) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("section", { className: "nk nk-light nk-media nk-feat", id: "featured", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Title, { cls: "nk-serif is-center", pre: "I got", hl: "featured, YAY!" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("a", { className: "px-clip", href: "https://bsinsider.in/diya-nathwani-came-to-iit-madras-for-data-science-she-found-everything-else-too/", target: "_blank", rel: "noopener noreferrer", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("img", { src: bs_insider_default, alt: "BS Insider article: Diya Nathwani Came to IIT Madras for Data Science, she Found Everything Else Too" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("span", { className: "px-cap", children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("strong", { children: "Featured on BS Insider, IITM BS Diaries" }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("em", { children: "2026. Came for the data science, found everything else too. The plot, basically." }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("b", { children: "Read the feature \u2197" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Pods, { guest: true })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("section", { className: "nk nk-light nk-media nk-pods", id: "media", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Title, { cls: "nk-serif is-center", id: 1, pre: "In the Parallel Universe, I", hl: "HOST PODCASTS!" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Pods, {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Stars, {}),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Letter, {}),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Testimonials, {}),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("section", { className: "nk nk-light nk-media nk-mzsec", id: "gallery", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Mosaic, {}),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "nk-media-links", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("a", { className: "nk-btn is-black", href: YOUTUBE, target: "_blank", rel: "noopener noreferrer", children: "Watch on YouTube" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("a", { className: "nk-btn is-outline-dark", href: SUBSTACK, target: "_blank", rel: "noopener noreferrer", children: "Read on Substack" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Title, { cls: "nk-serif is-center", id: 3, pre: "Find me", hl: "online" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Keychains, {})
      ] }),
      SHOW_NOTES && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_jsx_runtime27.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("section", { className: "nk nk-light nk-notes", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Title, { cls: "nk-serif is-center", id: 0, pre: "How I think:", hl: "strategy notes" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { className: "nk-center-sub is-left", children: "Tap a card. The strategy spills itself." }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "nk-notegrid", children: notes.map(([t, b2], i) => {
          const on = revealed.includes(i);
          return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("button", { className: on ? "nk-note is-on" : "nk-note", "aria-expanded": on, onClick: () => setRevealed(on ? revealed.filter((x2) => x2 !== i) : [...revealed, i]), children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "nk-note-no", children: String(i + 1).padStart(2, "0") }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("strong", { children: t }),
            on ? /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "nk-note-body", children: b2 }) : /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "nk-note-hint", children: "Tap to reveal" })
          ] }, t);
        }) })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("section", { className: "nk nk-dark nk-faq", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Title, { cls: "nk-serif is-center", id: 1, pre: "Your", hl: "questions, answered" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { className: "nk-sub", children: "What hiring managers and founders ask me on the first call, answered upfront." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Accordion, { items: faqs, numbered: true })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Contact, {}),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("section", { className: "nk nk-light nk-cards", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("a", { className: "nk-ccard", href: `mailto:${EMAIL}`, children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "\u2709\uFE0F" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("small", { children: "Email" }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("strong", { children: EMAIL })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("a", { className: "nk-ccard", href: WA, target: "_blank", rel: "noopener noreferrer", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "\u{1F4AC}" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("small", { children: "WhatsApp" }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("strong", { children: "Tap to chat" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "nk-ccard", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "\u{1F4CD}" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("small", { children: "Location" }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("strong", { children: "Mumbai / Nagpur, India. Remote\u2011friendly." })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "nk-foot", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("a", { href: LINKEDIN, target: "_blank", rel: "noopener noreferrer", children: [
            "LinkedIn ",
            "\u2197"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("a", { href: "https://www.instagram.com/mindonecstasy_/", target: "_blank", rel: "noopener noreferrer", children: [
            "Instagram ",
            "\u2197"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("a", { href: YOUTUBE, target: "_blank", rel: "noopener noreferrer", children: [
            "YouTube ",
            "\u2197"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("a", { href: SUBSTACK, target: "_blank", rel: "noopener noreferrer", children: [
            "Substack ",
            "\u2197"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("a", { href: "https://x.com/diya_nathwani", target: "_blank", rel: "noopener noreferrer", children: [
            "X ",
            "\u2197"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("a", { href: `mailto:${EMAIL}`, children: [
            "Email ",
            "\u2197"
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { className: "nk-updated", children: "Updated September 2026." })
      ] })
    ] }) });
  }

  // src/main.tsx
  var import_jsx_runtime28 = __toESM(require_jsx_runtime());
  (0, import_client.createRoot)(document.getElementById("root")).render(/* @__PURE__ */ (0, import_jsx_runtime28.jsx)(FileRouter, { children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(App, {}) }));
})();
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)

lucide-react/dist/esm/shared/src/utils/mergeClasses.js:
lucide-react/dist/esm/shared/src/utils/toKebabCase.js:
lucide-react/dist/esm/shared/src/utils/toCamelCase.js:
lucide-react/dist/esm/shared/src/utils/toPascalCase.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/shared/src/utils/hasA11yProp.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/arrow-up-right.js:
lucide-react/dist/esm/icons/check.js:
lucide-react/dist/esm/icons/loader-circle.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-router/dist/development/chunk-BV7QT456.mjs:
react-router/dist/development/index.mjs:
  (**
   * react-router v7.18.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
