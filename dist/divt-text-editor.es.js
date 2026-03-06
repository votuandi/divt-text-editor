import e, { createContext as t, createElement as n, forwardRef as r, useCallback as i, useContext as a, useDebugValue as o, useEffect as s, useLayoutEffect as c, useMemo as l, useRef as u, useState as d } from "react";
import f from "react-dom";
var p = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), m = ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), h = p(((e) => {
	var t = m("react");
	function n(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var r = typeof Object.is == "function" ? Object.is : n, i = t.useState, a = t.useEffect, o = t.useLayoutEffect, s = t.useDebugValue;
	function c(e, t) {
		var n = t(), r = i({ inst: {
			value: n,
			getSnapshot: t
		} }), c = r[0].inst, u = r[1];
		return o(function() {
			c.value = n, c.getSnapshot = t, l(c) && u({ inst: c });
		}, [
			e,
			n,
			t
		]), a(function() {
			return l(c) && u({ inst: c }), e(function() {
				l(c) && u({ inst: c });
			});
		}, [e]), s(n), n;
	}
	function l(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !r(e, n);
		} catch {
			return !0;
		}
	}
	function u(e, t) {
		return t();
	}
	var d = typeof window > "u" || window.document === void 0 || window.document.createElement === void 0 ? u : c;
	e.useSyncExternalStore = t.useSyncExternalStore === void 0 ? d : t.useSyncExternalStore;
})), g = p(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e, t) {
			return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
		}
		function n(e, t) {
			d || a.startTransition === void 0 || (d = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
			var n = t();
			if (!f) {
				var i = t();
				o(n, i) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), f = !0);
			}
			i = s({ inst: {
				value: n,
				getSnapshot: t
			} });
			var p = i[0].inst, m = i[1];
			return l(function() {
				p.value = n, p.getSnapshot = t, r(p) && m({ inst: p });
			}, [
				e,
				n,
				t
			]), c(function() {
				return r(p) && m({ inst: p }), e(function() {
					r(p) && m({ inst: p });
				});
			}, [e]), u(n), n;
		}
		function r(e) {
			var t = e.getSnapshot;
			e = e.value;
			try {
				var n = t();
				return !o(e, n);
			} catch {
				return !0;
			}
		}
		function i(e, t) {
			return t();
		}
		typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var a = m("react"), o = typeof Object.is == "function" ? Object.is : t, s = a.useState, c = a.useEffect, l = a.useLayoutEffect, u = a.useDebugValue, d = !1, f = !1, p = typeof window > "u" || window.document === void 0 || window.document.createElement === void 0 ? i : n;
		e.useSyncExternalStore = a.useSyncExternalStore === void 0 ? p : a.useSyncExternalStore, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
})), _ = p(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = h() : t.exports = g();
})), ee = p(((e) => {
	var t = m("react"), n = Symbol.for("react.element"), r = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};
	function s(e, t, r) {
		var s, c = {}, l = null, u = null;
		for (s in r !== void 0 && (l = "" + r), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (u = t.ref), t) i.call(t, s) && !o.hasOwnProperty(s) && (c[s] = t[s]);
		if (e && e.defaultProps) for (s in t = e.defaultProps, t) c[s] === void 0 && (c[s] = t[s]);
		return {
			$$typeof: n,
			type: e,
			key: l,
			ref: u,
			props: c,
			_owner: a.current
		};
	}
	e.Fragment = r, e.jsx = s, e.jsxs = s;
})), v = p(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		var t = m("react"), n = Symbol.for("react.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), g = Symbol.iterator, _ = "@@iterator";
		function ee(e) {
			if (typeof e != "object" || !e) return null;
			var t = g && e[g] || e[_];
			return typeof t == "function" ? t : null;
		}
		var v = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
		function y(e) {
			b("error", e, [...arguments].slice(1));
		}
		function b(e, t, n) {
			var r = v.ReactDebugCurrentFrame.getStackAddendum();
			r !== "" && (t += "%s", n = n.concat([r]));
			var i = n.map(function(e) {
				return String(e);
			});
			i.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, i);
		}
		var x = !1, te = !1, ne = !1, S = !1, re = !1, ie = Symbol.for("react.module.reference");
		function ae(e) {
			return !!(typeof e == "string" || typeof e == "function" || e === i || e === o || re || e === a || e === u || e === d || S || e === h || x || te || ne || typeof e == "object" && e && (e.$$typeof === p || e.$$typeof === f || e.$$typeof === s || e.$$typeof === c || e.$$typeof === l || e.$$typeof === ie || e.getModuleId !== void 0));
		}
		function C(e, t, n) {
			var r = e.displayName;
			if (r) return r;
			var i = t.displayName || t.name || "";
			return i === "" ? n : n + "(" + i + ")";
		}
		function oe(e) {
			return e.displayName || "Context";
		}
		function w(e) {
			if (e == null) return null;
			if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function") return e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case i: return "Fragment";
				case r: return "Portal";
				case o: return "Profiler";
				case a: return "StrictMode";
				case u: return "Suspense";
				case d: return "SuspenseList";
			}
			if (typeof e == "object") switch (e.$$typeof) {
				case c: return oe(e) + ".Consumer";
				case s: return oe(e._context) + ".Provider";
				case l: return C(e, e.render, "ForwardRef");
				case f:
					var t = e.displayName || null;
					return t === null ? w(e.type) || "Memo" : t;
				case p:
					var n = e, m = n._payload, h = n._init;
					try {
						return w(h(m));
					} catch {
						return null;
					}
			}
			return null;
		}
		var se = Object.assign, ce = 0, le, ue, de, fe, pe, me, he;
		function ge() {}
		ge.__reactDisabledLog = !0;
		function _e() {
			if (ce === 0) {
				le = console.log, ue = console.info, de = console.warn, fe = console.error, pe = console.group, me = console.groupCollapsed, he = console.groupEnd;
				var e = {
					configurable: !0,
					enumerable: !0,
					value: ge,
					writable: !0
				};
				Object.defineProperties(console, {
					info: e,
					log: e,
					warn: e,
					error: e,
					group: e,
					groupCollapsed: e,
					groupEnd: e
				});
			}
			ce++;
		}
		function ve() {
			if (ce--, ce === 0) {
				var e = {
					configurable: !0,
					enumerable: !0,
					writable: !0
				};
				Object.defineProperties(console, {
					log: se({}, e, { value: le }),
					info: se({}, e, { value: ue }),
					warn: se({}, e, { value: de }),
					error: se({}, e, { value: fe }),
					group: se({}, e, { value: pe }),
					groupCollapsed: se({}, e, { value: me }),
					groupEnd: se({}, e, { value: he })
				});
			}
			ce < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
		}
		var ye = v.ReactCurrentDispatcher, be;
		function xe(e, t, n) {
			if (be === void 0) try {
				throw Error();
			} catch (e) {
				var r = e.stack.trim().match(/\n( *(at )?)/);
				be = r && r[1] || "";
			}
			return "\n" + be + e;
		}
		var Se = !1, Ce = new (typeof WeakMap == "function" ? WeakMap : Map)();
		function we(e, t) {
			if (!e || Se) return "";
			var n = Ce.get(e);
			if (n !== void 0) return n;
			var r;
			Se = !0;
			var i = Error.prepareStackTrace;
			Error.prepareStackTrace = void 0;
			var a = ye.current;
			ye.current = null, _e();
			try {
				if (t) {
					var o = function() {
						throw Error();
					};
					if (Object.defineProperty(o.prototype, "props", { set: function() {
						throw Error();
					} }), typeof Reflect == "object" && Reflect.construct) {
						try {
							Reflect.construct(o, []);
						} catch (e) {
							r = e;
						}
						Reflect.construct(e, [], o);
					} else {
						try {
							o.call();
						} catch (e) {
							r = e;
						}
						e.call(o.prototype);
					}
				} else {
					try {
						throw Error();
					} catch (e) {
						r = e;
					}
					e();
				}
			} catch (t) {
				if (t && r && typeof t.stack == "string") {
					for (var s = t.stack.split("\n"), c = r.stack.split("\n"), l = s.length - 1, u = c.length - 1; l >= 1 && u >= 0 && s[l] !== c[u];) u--;
					for (; l >= 1 && u >= 0; l--, u--) if (s[l] !== c[u]) {
						if (l !== 1 || u !== 1) do
							if (l--, u--, u < 0 || s[l] !== c[u]) {
								var d = "\n" + s[l].replace(" at new ", " at ");
								return e.displayName && d.includes("<anonymous>") && (d = d.replace("<anonymous>", e.displayName)), typeof e == "function" && Ce.set(e, d), d;
							}
						while (l >= 1 && u >= 0);
						break;
					}
				}
			} finally {
				Se = !1, ye.current = a, ve(), Error.prepareStackTrace = i;
			}
			var f = e ? e.displayName || e.name : "", p = f ? xe(f) : "";
			return typeof e == "function" && Ce.set(e, p), p;
		}
		function Te(e, t, n) {
			return we(e, !1);
		}
		function Ee(e) {
			var t = e.prototype;
			return !!(t && t.isReactComponent);
		}
		function De(e, t, n) {
			if (e == null) return "";
			if (typeof e == "function") return we(e, Ee(e));
			if (typeof e == "string") return xe(e);
			switch (e) {
				case u: return xe("Suspense");
				case d: return xe("SuspenseList");
			}
			if (typeof e == "object") switch (e.$$typeof) {
				case l: return Te(e.render);
				case f: return De(e.type, t, n);
				case p:
					var r = e, i = r._payload, a = r._init;
					try {
						return De(a(i), t, n);
					} catch {}
			}
			return "";
		}
		var Oe = Object.prototype.hasOwnProperty, ke = {}, Ae = v.ReactDebugCurrentFrame;
		function je(e) {
			if (e) {
				var t = e._owner, n = De(e.type, e._source, t ? t.type : null);
				Ae.setExtraStackFrame(n);
			} else Ae.setExtraStackFrame(null);
		}
		function Me(e, t, n, r, i) {
			var a = Function.call.bind(Oe);
			for (var o in e) if (a(e, o)) {
				var s = void 0;
				try {
					if (typeof e[o] != "function") {
						var c = Error((r || "React class") + ": " + n + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
						throw c.name = "Invariant Violation", c;
					}
					s = e[o](t, o, r, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
				} catch (e) {
					s = e;
				}
				s && !(s instanceof Error) && (je(i), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", r || "React class", n, o, typeof s), je(null)), s instanceof Error && !(s.message in ke) && (ke[s.message] = !0, je(i), y("Failed %s type: %s", n, s.message), je(null));
			}
		}
		var Ne = Array.isArray;
		function Pe(e) {
			return Ne(e);
		}
		function Fe(e) {
			return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
		}
		function Ie(e) {
			try {
				return Le(e), !1;
			} catch {
				return !0;
			}
		}
		function Le(e) {
			return "" + e;
		}
		function Re(e) {
			if (Ie(e)) return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Fe(e)), Le(e);
		}
		var ze = v.ReactCurrentOwner, Be = {
			key: !0,
			ref: !0,
			__self: !0,
			__source: !0
		}, Ve, He, Ue = {};
		function We(e) {
			if (Oe.call(e, "ref")) {
				var t = Object.getOwnPropertyDescriptor(e, "ref").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.ref !== void 0;
		}
		function Ge(e) {
			if (Oe.call(e, "key")) {
				var t = Object.getOwnPropertyDescriptor(e, "key").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.key !== void 0;
		}
		function Ke(e, t) {
			if (typeof e.ref == "string" && ze.current && t && ze.current.stateNode !== t) {
				var n = w(ze.current.type);
				Ue[n] || (y("Component \"%s\" contains the string ref \"%s\". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref", w(ze.current.type), e.ref), Ue[n] = !0);
			}
		}
		function qe(e, t) {
			var n = function() {
				Ve || (Ve = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
			};
			n.isReactWarning = !0, Object.defineProperty(e, "key", {
				get: n,
				configurable: !0
			});
		}
		function Je(e, t) {
			var n = function() {
				He || (He = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
			};
			n.isReactWarning = !0, Object.defineProperty(e, "ref", {
				get: n,
				configurable: !0
			});
		}
		var Ye = function(e, t, r, i, a, o, s) {
			var c = {
				$$typeof: n,
				type: e,
				key: t,
				ref: r,
				props: s,
				_owner: o
			};
			return c._store = {}, Object.defineProperty(c._store, "validated", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: !1
			}), Object.defineProperty(c, "_self", {
				configurable: !1,
				enumerable: !1,
				writable: !1,
				value: i
			}), Object.defineProperty(c, "_source", {
				configurable: !1,
				enumerable: !1,
				writable: !1,
				value: a
			}), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
		};
		function Xe(e, t, n, r, i) {
			var a, o = {}, s = null, c = null;
			for (a in n !== void 0 && (Re(n), s = "" + n), Ge(t) && (Re(t.key), s = "" + t.key), We(t) && (c = t.ref, Ke(t, i)), t) Oe.call(t, a) && !Be.hasOwnProperty(a) && (o[a] = t[a]);
			if (e && e.defaultProps) {
				var l = e.defaultProps;
				for (a in l) o[a] === void 0 && (o[a] = l[a]);
			}
			if (s || c) {
				var u = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
				s && qe(o, u), c && Je(o, u);
			}
			return Ye(e, s, c, i, r, ze.current, o);
		}
		var Ze = v.ReactCurrentOwner, Qe = v.ReactDebugCurrentFrame;
		function $e(e) {
			if (e) {
				var t = e._owner, n = De(e.type, e._source, t ? t.type : null);
				Qe.setExtraStackFrame(n);
			} else Qe.setExtraStackFrame(null);
		}
		var et = !1;
		function tt(e) {
			return typeof e == "object" && !!e && e.$$typeof === n;
		}
		function nt() {
			if (Ze.current) {
				var e = w(Ze.current.type);
				if (e) return "\n\nCheck the render method of `" + e + "`.";
			}
			return "";
		}
		function rt(e) {
			if (e !== void 0) {
				var t = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
				return "\n\nCheck your code at " + t + ":" + n + ".";
			}
			return "";
		}
		var it = {};
		function at(e) {
			var t = nt();
			if (!t) {
				var n = typeof e == "string" ? e : e.displayName || e.name;
				n && (t = "\n\nCheck the top-level render call using <" + n + ">.");
			}
			return t;
		}
		function ot(e, t) {
			if (!(!e._store || e._store.validated || e.key != null)) {
				e._store.validated = !0;
				var n = at(t);
				if (!it[n]) {
					it[n] = !0;
					var r = "";
					e && e._owner && e._owner !== Ze.current && (r = " It was passed a child from " + w(e._owner.type) + "."), $e(e), y("Each child in a list should have a unique \"key\" prop.%s%s See https://reactjs.org/link/warning-keys for more information.", n, r), $e(null);
				}
			}
		}
		function st(e, t) {
			if (typeof e == "object") {
				if (Pe(e)) for (var n = 0; n < e.length; n++) {
					var r = e[n];
					tt(r) && ot(r, t);
				}
				else if (tt(e)) e._store && (e._store.validated = !0);
				else if (e) {
					var i = ee(e);
					if (typeof i == "function" && i !== e.entries) for (var a = i.call(e), o; !(o = a.next()).done;) tt(o.value) && ot(o.value, t);
				}
			}
		}
		function ct(e) {
			var t = e.type;
			if (!(t == null || typeof t == "string")) {
				var n;
				if (typeof t == "function") n = t.propTypes;
				else if (typeof t == "object" && (t.$$typeof === l || t.$$typeof === f)) n = t.propTypes;
				else return;
				if (n) {
					var r = w(t);
					Me(n, e.props, "prop", r, e);
				} else t.PropTypes !== void 0 && !et && (et = !0, y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w(t) || "Unknown"));
				typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
			}
		}
		function lt(e) {
			for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
				var r = t[n];
				if (r !== "children" && r !== "key") {
					$e(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", r), $e(null);
					break;
				}
			}
			e.ref !== null && ($e(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), $e(null));
		}
		var ut = {};
		function dt(e, t, r, a, o, s) {
			var c = ae(e);
			if (!c) {
				var l = "";
				(e === void 0 || typeof e == "object" && e && Object.keys(e).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
				var u = rt(o);
				u ? l += u : l += nt();
				var d;
				e === null ? d = "null" : Pe(e) ? d = "array" : e !== void 0 && e.$$typeof === n ? (d = "<" + (w(e.type) || "Unknown") + " />", l = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, l);
			}
			var f = Xe(e, t, r, o, s);
			if (f == null) return f;
			if (c) {
				var p = t.children;
				if (p !== void 0) if (a) if (Pe(p)) {
					for (var m = 0; m < p.length; m++) st(p[m], e);
					Object.freeze && Object.freeze(p);
				} else y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
				else st(p, e);
			}
			if (Oe.call(t, "key")) {
				var h = w(e), g = Object.keys(t).filter(function(e) {
					return e !== "key";
				}), _ = g.length > 0 ? "{key: someKey, " + g.join(": ..., ") + ": ...}" : "{key: someKey}";
				ut[h + _] || (y("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", _, h, g.length > 0 ? "{" + g.join(": ..., ") + ": ...}" : "{}", h), ut[h + _] = !0);
			}
			return e === i ? lt(f) : ct(f), f;
		}
		function ft(e, t, n) {
			return dt(e, t, n, !0);
		}
		function pt(e, t, n) {
			return dt(e, t, n, !1);
		}
		var mt = pt, ht = ft;
		e.Fragment = i, e.jsx = mt, e.jsxs = ht;
	})();
})), y = p(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = ee() : t.exports = v();
}))(), b = _();
function x(e) {
	this.content = e;
}
x.prototype = {
	constructor: x,
	find: function(e) {
		for (var t = 0; t < this.content.length; t += 2) if (this.content[t] === e) return t;
		return -1;
	},
	get: function(e) {
		var t = this.find(e);
		return t == -1 ? void 0 : this.content[t + 1];
	},
	update: function(e, t, n) {
		var r = n && n != e ? this.remove(n) : this, i = r.find(e), a = r.content.slice();
		return i == -1 ? a.push(n || e, t) : (a[i + 1] = t, n && (a[i] = n)), new x(a);
	},
	remove: function(e) {
		var t = this.find(e);
		if (t == -1) return this;
		var n = this.content.slice();
		return n.splice(t, 2), new x(n);
	},
	addToStart: function(e, t) {
		return new x([e, t].concat(this.remove(e).content));
	},
	addToEnd: function(e, t) {
		var n = this.remove(e).content.slice();
		return n.push(e, t), new x(n);
	},
	addBefore: function(e, t, n) {
		var r = this.remove(t), i = r.content.slice(), a = r.find(e);
		return i.splice(a == -1 ? i.length : a, 0, t, n), new x(i);
	},
	forEach: function(e) {
		for (var t = 0; t < this.content.length; t += 2) e(this.content[t], this.content[t + 1]);
	},
	prepend: function(e) {
		return e = x.from(e), e.size ? new x(e.content.concat(this.subtract(e).content)) : this;
	},
	append: function(e) {
		return e = x.from(e), e.size ? new x(this.subtract(e).content.concat(e.content)) : this;
	},
	subtract: function(e) {
		var t = this;
		e = x.from(e);
		for (var n = 0; n < e.content.length; n += 2) t = t.remove(e.content[n]);
		return t;
	},
	toObject: function() {
		var e = {};
		return this.forEach(function(t, n) {
			e[t] = n;
		}), e;
	},
	get size() {
		return this.content.length >> 1;
	}
}, x.from = function(e) {
	if (e instanceof x) return e;
	var t = [];
	if (e) for (var n in e) t.push(n, e[n]);
	return new x(t);
};
function te(e, t, n) {
	for (let r = 0;; r++) {
		if (r == e.childCount || r == t.childCount) return e.childCount == t.childCount ? null : n;
		let i = e.child(r), a = t.child(r);
		if (i == a) {
			n += i.nodeSize;
			continue;
		}
		if (!i.sameMarkup(a)) return n;
		if (i.isText && i.text != a.text) {
			for (let e = 0; i.text[e] == a.text[e]; e++) n++;
			return n;
		}
		if (i.content.size || a.content.size) {
			let e = te(i.content, a.content, n + 1);
			if (e != null) return e;
		}
		n += i.nodeSize;
	}
}
function ne(e, t, n, r) {
	for (let i = e.childCount, a = t.childCount;;) {
		if (i == 0 || a == 0) return i == a ? null : {
			a: n,
			b: r
		};
		let o = e.child(--i), s = t.child(--a), c = o.nodeSize;
		if (o == s) {
			n -= c, r -= c;
			continue;
		}
		if (!o.sameMarkup(s)) return {
			a: n,
			b: r
		};
		if (o.isText && o.text != s.text) {
			let e = 0, t = Math.min(o.text.length, s.text.length);
			for (; e < t && o.text[o.text.length - e - 1] == s.text[s.text.length - e - 1];) e++, n--, r--;
			return {
				a: n,
				b: r
			};
		}
		if (o.content.size || s.content.size) {
			let e = ne(o.content, s.content, n - 1, r - 1);
			if (e) return e;
		}
		n -= c, r -= c;
	}
}
var S = class e {
	constructor(e, t) {
		if (this.content = e, this.size = t || 0, t == null) for (let t = 0; t < e.length; t++) this.size += e[t].nodeSize;
	}
	nodesBetween(e, t, n, r = 0, i) {
		for (let a = 0, o = 0; o < t; a++) {
			let s = this.content[a], c = o + s.nodeSize;
			if (c > e && n(s, r + o, i || null, a) !== !1 && s.content.size) {
				let i = o + 1;
				s.nodesBetween(Math.max(0, e - i), Math.min(s.content.size, t - i), n, r + i);
			}
			o = c;
		}
	}
	descendants(e) {
		this.nodesBetween(0, this.size, e);
	}
	textBetween(e, t, n, r) {
		let i = "", a = !0;
		return this.nodesBetween(e, t, (o, s) => {
			let c = o.isText ? o.text.slice(Math.max(e, s) - s, t - s) : o.isLeaf ? r ? typeof r == "function" ? r(o) : r : o.type.spec.leafText ? o.type.spec.leafText(o) : "" : "";
			o.isBlock && (o.isLeaf && c || o.isTextblock) && n && (a ? a = !1 : i += n), i += c;
		}, 0), i;
	}
	append(t) {
		if (!t.size) return this;
		if (!this.size) return t;
		let n = this.lastChild, r = t.firstChild, i = this.content.slice(), a = 0;
		for (n.isText && n.sameMarkup(r) && (i[i.length - 1] = n.withText(n.text + r.text), a = 1); a < t.content.length; a++) i.push(t.content[a]);
		return new e(i, this.size + t.size);
	}
	cut(t, n = this.size) {
		if (t == 0 && n == this.size) return this;
		let r = [], i = 0;
		if (n > t) for (let e = 0, a = 0; a < n; e++) {
			let o = this.content[e], s = a + o.nodeSize;
			s > t && ((a < t || s > n) && (o = o.isText ? o.cut(Math.max(0, t - a), Math.min(o.text.length, n - a)) : o.cut(Math.max(0, t - a - 1), Math.min(o.content.size, n - a - 1))), r.push(o), i += o.nodeSize), a = s;
		}
		return new e(r, i);
	}
	cutByIndex(t, n) {
		return t == n ? e.empty : t == 0 && n == this.content.length ? this : new e(this.content.slice(t, n));
	}
	replaceChild(t, n) {
		let r = this.content[t];
		if (r == n) return this;
		let i = this.content.slice(), a = this.size + n.nodeSize - r.nodeSize;
		return i[t] = n, new e(i, a);
	}
	addToStart(t) {
		return new e([t].concat(this.content), this.size + t.nodeSize);
	}
	addToEnd(t) {
		return new e(this.content.concat(t), this.size + t.nodeSize);
	}
	eq(e) {
		if (this.content.length != e.content.length) return !1;
		for (let t = 0; t < this.content.length; t++) if (!this.content[t].eq(e.content[t])) return !1;
		return !0;
	}
	get firstChild() {
		return this.content.length ? this.content[0] : null;
	}
	get lastChild() {
		return this.content.length ? this.content[this.content.length - 1] : null;
	}
	get childCount() {
		return this.content.length;
	}
	child(e) {
		let t = this.content[e];
		if (!t) throw RangeError("Index " + e + " out of range for " + this);
		return t;
	}
	maybeChild(e) {
		return this.content[e] || null;
	}
	forEach(e) {
		for (let t = 0, n = 0; t < this.content.length; t++) {
			let r = this.content[t];
			e(r, n, t), n += r.nodeSize;
		}
	}
	findDiffStart(e, t = 0) {
		return te(this, e, t);
	}
	findDiffEnd(e, t = this.size, n = e.size) {
		return ne(this, e, t, n);
	}
	findIndex(e) {
		if (e == 0) return ie(0, e);
		if (e == this.size) return ie(this.content.length, e);
		if (e > this.size || e < 0) throw RangeError(`Position ${e} outside of fragment (${this})`);
		for (let t = 0, n = 0;; t++) {
			let r = this.child(t), i = n + r.nodeSize;
			if (i >= e) return i == e ? ie(t + 1, i) : ie(t, n);
			n = i;
		}
	}
	toString() {
		return "<" + this.toStringInner() + ">";
	}
	toStringInner() {
		return this.content.join(", ");
	}
	toJSON() {
		return this.content.length ? this.content.map((e) => e.toJSON()) : null;
	}
	static fromJSON(t, n) {
		if (!n) return e.empty;
		if (!Array.isArray(n)) throw RangeError("Invalid input for Fragment.fromJSON");
		return new e(n.map(t.nodeFromJSON));
	}
	static fromArray(t) {
		if (!t.length) return e.empty;
		let n, r = 0;
		for (let e = 0; e < t.length; e++) {
			let i = t[e];
			r += i.nodeSize, e && i.isText && t[e - 1].sameMarkup(i) ? (n ||= t.slice(0, e), n[n.length - 1] = i.withText(n[n.length - 1].text + i.text)) : n && n.push(i);
		}
		return new e(n || t, r);
	}
	static from(t) {
		if (!t) return e.empty;
		if (t instanceof e) return t;
		if (Array.isArray(t)) return this.fromArray(t);
		if (t.attrs) return new e([t], t.nodeSize);
		throw RangeError("Can not convert " + t + " to a Fragment" + (t.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
	}
};
S.empty = new S([], 0);
var re = {
	index: 0,
	offset: 0
};
function ie(e, t) {
	return re.index = e, re.offset = t, re;
}
function ae(e, t) {
	if (e === t) return !0;
	if (!(e && typeof e == "object") || !(t && typeof t == "object")) return !1;
	let n = Array.isArray(e);
	if (Array.isArray(t) != n) return !1;
	if (n) {
		if (e.length != t.length) return !1;
		for (let n = 0; n < e.length; n++) if (!ae(e[n], t[n])) return !1;
	} else {
		for (let n in e) if (!(n in t) || !ae(e[n], t[n])) return !1;
		for (let n in t) if (!(n in e)) return !1;
	}
	return !0;
}
var C = class e {
	constructor(e, t) {
		this.type = e, this.attrs = t;
	}
	addToSet(e) {
		let t, n = !1;
		for (let r = 0; r < e.length; r++) {
			let i = e[r];
			if (this.eq(i)) return e;
			if (this.type.excludes(i.type)) t ||= e.slice(0, r);
			else if (i.type.excludes(this.type)) return e;
			else !n && i.type.rank > this.type.rank && (t ||= e.slice(0, r), t.push(this), n = !0), t && t.push(i);
		}
		return t ||= e.slice(), n || t.push(this), t;
	}
	removeFromSet(e) {
		for (let t = 0; t < e.length; t++) if (this.eq(e[t])) return e.slice(0, t).concat(e.slice(t + 1));
		return e;
	}
	isInSet(e) {
		for (let t = 0; t < e.length; t++) if (this.eq(e[t])) return !0;
		return !1;
	}
	eq(e) {
		return this == e || this.type == e.type && ae(this.attrs, e.attrs);
	}
	toJSON() {
		let e = { type: this.type.name };
		for (let t in this.attrs) {
			e.attrs = this.attrs;
			break;
		}
		return e;
	}
	static fromJSON(e, t) {
		if (!t) throw RangeError("Invalid input for Mark.fromJSON");
		let n = e.marks[t.type];
		if (!n) throw RangeError(`There is no mark type ${t.type} in this schema`);
		let r = n.create(t.attrs);
		return n.checkAttrs(r.attrs), r;
	}
	static sameSet(e, t) {
		if (e == t) return !0;
		if (e.length != t.length) return !1;
		for (let n = 0; n < e.length; n++) if (!e[n].eq(t[n])) return !1;
		return !0;
	}
	static setFrom(t) {
		if (!t || Array.isArray(t) && t.length == 0) return e.none;
		if (t instanceof e) return [t];
		let n = t.slice();
		return n.sort((e, t) => e.type.rank - t.type.rank), n;
	}
};
C.none = [];
var oe = class extends Error {}, w = class e {
	constructor(e, t, n) {
		this.content = e, this.openStart = t, this.openEnd = n;
	}
	get size() {
		return this.content.size - this.openStart - this.openEnd;
	}
	insertAt(t, n) {
		let r = ce(this.content, t + this.openStart, n);
		return r && new e(r, this.openStart, this.openEnd);
	}
	removeBetween(t, n) {
		return new e(se(this.content, t + this.openStart, n + this.openStart), this.openStart, this.openEnd);
	}
	eq(e) {
		return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
	}
	toString() {
		return this.content + "(" + this.openStart + "," + this.openEnd + ")";
	}
	toJSON() {
		if (!this.content.size) return null;
		let e = { content: this.content.toJSON() };
		return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
	}
	static fromJSON(t, n) {
		if (!n) return e.empty;
		let r = n.openStart || 0, i = n.openEnd || 0;
		if (typeof r != "number" || typeof i != "number") throw RangeError("Invalid input for Slice.fromJSON");
		return new e(S.fromJSON(t, n.content), r, i);
	}
	static maxOpen(t, n = !0) {
		let r = 0, i = 0;
		for (let e = t.firstChild; e && !e.isLeaf && (n || !e.type.spec.isolating); e = e.firstChild) r++;
		for (let e = t.lastChild; e && !e.isLeaf && (n || !e.type.spec.isolating); e = e.lastChild) i++;
		return new e(t, r, i);
	}
};
w.empty = new w(S.empty, 0, 0);
function se(e, t, n) {
	let { index: r, offset: i } = e.findIndex(t), a = e.maybeChild(r), { index: o, offset: s } = e.findIndex(n);
	if (i == t || a.isText) {
		if (s != n && !e.child(o).isText) throw RangeError("Removing non-flat range");
		return e.cut(0, t).append(e.cut(n));
	}
	if (r != o) throw RangeError("Removing non-flat range");
	return e.replaceChild(r, a.copy(se(a.content, t - i - 1, n - i - 1)));
}
function ce(e, t, n, r) {
	let { index: i, offset: a } = e.findIndex(t), o = e.maybeChild(i);
	if (a == t || o.isText) return r && !r.canReplace(i, i, n) ? null : e.cut(0, t).append(n).append(e.cut(t));
	let s = ce(o.content, t - a - 1, n, o);
	return s && e.replaceChild(i, o.copy(s));
}
function le(e, t, n) {
	if (n.openStart > e.depth) throw new oe("Inserted content deeper than insertion position");
	if (e.depth - n.openStart != t.depth - n.openEnd) throw new oe("Inconsistent open depths");
	return ue(e, t, n, 0);
}
function ue(e, t, n, r) {
	let i = e.index(r), a = e.node(r);
	if (i == t.index(r) && r < e.depth - n.openStart) {
		let o = ue(e, t, n, r + 1);
		return a.copy(a.content.replaceChild(i, o));
	} else if (!n.content.size) return he(a, _e(e, t, r));
	else if (!n.openStart && !n.openEnd && e.depth == r && t.depth == r) {
		let r = e.parent, i = r.content;
		return he(r, i.cut(0, e.parentOffset).append(n.content).append(i.cut(t.parentOffset)));
	} else {
		let { start: i, end: o } = ve(n, e);
		return he(a, ge(e, i, o, t, r));
	}
}
function de(e, t) {
	if (!t.type.compatibleContent(e.type)) throw new oe("Cannot join " + t.type.name + " onto " + e.type.name);
}
function fe(e, t, n) {
	let r = e.node(n);
	return de(r, t.node(n)), r;
}
function pe(e, t) {
	let n = t.length - 1;
	n >= 0 && e.isText && e.sameMarkup(t[n]) ? t[n] = e.withText(t[n].text + e.text) : t.push(e);
}
function me(e, t, n, r) {
	let i = (t || e).node(n), a = 0, o = t ? t.index(n) : i.childCount;
	e && (a = e.index(n), e.depth > n ? a++ : e.textOffset && (pe(e.nodeAfter, r), a++));
	for (let e = a; e < o; e++) pe(i.child(e), r);
	t && t.depth == n && t.textOffset && pe(t.nodeBefore, r);
}
function he(e, t) {
	return e.type.checkContent(t), e.copy(t);
}
function ge(e, t, n, r, i) {
	let a = e.depth > i && fe(e, t, i + 1), o = r.depth > i && fe(n, r, i + 1), s = [];
	return me(null, e, i, s), a && o && t.index(i) == n.index(i) ? (de(a, o), pe(he(a, ge(e, t, n, r, i + 1)), s)) : (a && pe(he(a, _e(e, t, i + 1)), s), me(t, n, i, s), o && pe(he(o, _e(n, r, i + 1)), s)), me(r, null, i, s), new S(s);
}
function _e(e, t, n) {
	let r = [];
	return me(null, e, n, r), e.depth > n && pe(he(fe(e, t, n + 1), _e(e, t, n + 1)), r), me(t, null, n, r), new S(r);
}
function ve(e, t) {
	let n = t.depth - e.openStart, r = t.node(n).copy(e.content);
	for (let e = n - 1; e >= 0; e--) r = t.node(e).copy(S.from(r));
	return {
		start: r.resolveNoCache(e.openStart + n),
		end: r.resolveNoCache(r.content.size - e.openEnd - n)
	};
}
var ye = class e {
	constructor(e, t, n) {
		this.pos = e, this.path = t, this.parentOffset = n, this.depth = t.length / 3 - 1;
	}
	resolveDepth(e) {
		return e == null ? this.depth : e < 0 ? this.depth + e : e;
	}
	get parent() {
		return this.node(this.depth);
	}
	get doc() {
		return this.node(0);
	}
	node(e) {
		return this.path[this.resolveDepth(e) * 3];
	}
	index(e) {
		return this.path[this.resolveDepth(e) * 3 + 1];
	}
	indexAfter(e) {
		return e = this.resolveDepth(e), this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1);
	}
	start(e) {
		return e = this.resolveDepth(e), e == 0 ? 0 : this.path[e * 3 - 1] + 1;
	}
	end(e) {
		return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size;
	}
	before(e) {
		if (e = this.resolveDepth(e), !e) throw RangeError("There is no position before the top-level node");
		return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1];
	}
	after(e) {
		if (e = this.resolveDepth(e), !e) throw RangeError("There is no position after the top-level node");
		return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
	}
	get textOffset() {
		return this.pos - this.path[this.path.length - 1];
	}
	get nodeAfter() {
		let e = this.parent, t = this.index(this.depth);
		if (t == e.childCount) return null;
		let n = this.pos - this.path[this.path.length - 1], r = e.child(t);
		return n ? e.child(t).cut(n) : r;
	}
	get nodeBefore() {
		let e = this.index(this.depth), t = this.pos - this.path[this.path.length - 1];
		return t ? this.parent.child(e).cut(0, t) : e == 0 ? null : this.parent.child(e - 1);
	}
	posAtIndex(e, t) {
		t = this.resolveDepth(t);
		let n = this.path[t * 3], r = t == 0 ? 0 : this.path[t * 3 - 1] + 1;
		for (let t = 0; t < e; t++) r += n.child(t).nodeSize;
		return r;
	}
	marks() {
		let e = this.parent, t = this.index();
		if (e.content.size == 0) return C.none;
		if (this.textOffset) return e.child(t).marks;
		let n = e.maybeChild(t - 1), r = e.maybeChild(t);
		if (!n) {
			let e = n;
			n = r, r = e;
		}
		let i = n.marks;
		for (var a = 0; a < i.length; a++) i[a].type.spec.inclusive === !1 && (!r || !i[a].isInSet(r.marks)) && (i = i[a--].removeFromSet(i));
		return i;
	}
	marksAcross(e) {
		let t = this.parent.maybeChild(this.index());
		if (!t || !t.isInline) return null;
		let n = t.marks, r = e.parent.maybeChild(e.index());
		for (var i = 0; i < n.length; i++) n[i].type.spec.inclusive === !1 && (!r || !n[i].isInSet(r.marks)) && (n = n[i--].removeFromSet(n));
		return n;
	}
	sharedDepth(e) {
		for (let t = this.depth; t > 0; t--) if (this.start(t) <= e && this.end(t) >= e) return t;
		return 0;
	}
	blockRange(e = this, t) {
		if (e.pos < this.pos) return e.blockRange(this);
		for (let n = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); n >= 0; n--) if (e.pos <= this.end(n) && (!t || t(this.node(n)))) return new Ce(this, e, n);
		return null;
	}
	sameParent(e) {
		return this.pos - this.parentOffset == e.pos - e.parentOffset;
	}
	max(e) {
		return e.pos > this.pos ? e : this;
	}
	min(e) {
		return e.pos < this.pos ? e : this;
	}
	toString() {
		let e = "";
		for (let t = 1; t <= this.depth; t++) e += (e ? "/" : "") + this.node(t).type.name + "_" + this.index(t - 1);
		return e + ":" + this.parentOffset;
	}
	static resolve(t, n) {
		if (!(n >= 0 && n <= t.content.size)) throw RangeError("Position " + n + " out of range");
		let r = [], i = 0, a = n;
		for (let e = t;;) {
			let { index: t, offset: n } = e.content.findIndex(a), o = a - n;
			if (r.push(e, t, i + n), !o || (e = e.child(t), e.isText)) break;
			a = o - 1, i += n + 1;
		}
		return new e(n, r, a);
	}
	static resolveCached(t, n) {
		let r = Se.get(t);
		if (r) for (let e = 0; e < r.elts.length; e++) {
			let t = r.elts[e];
			if (t.pos == n) return t;
		}
		else Se.set(t, r = new be());
		let i = r.elts[r.i] = e.resolve(t, n);
		return r.i = (r.i + 1) % xe, i;
	}
}, be = class {
	constructor() {
		this.elts = [], this.i = 0;
	}
}, xe = 12, Se = new WeakMap(), Ce = class {
	constructor(e, t, n) {
		this.$from = e, this.$to = t, this.depth = n;
	}
	get start() {
		return this.$from.before(this.depth + 1);
	}
	get end() {
		return this.$to.after(this.depth + 1);
	}
	get parent() {
		return this.$from.node(this.depth);
	}
	get startIndex() {
		return this.$from.index(this.depth);
	}
	get endIndex() {
		return this.$to.indexAfter(this.depth);
	}
}, we = Object.create(null), Te = class e {
	constructor(e, t, n, r = C.none) {
		this.type = e, this.attrs = t, this.marks = r, this.content = n || S.empty;
	}
	get children() {
		return this.content.content;
	}
	get nodeSize() {
		return this.isLeaf ? 1 : 2 + this.content.size;
	}
	get childCount() {
		return this.content.childCount;
	}
	child(e) {
		return this.content.child(e);
	}
	maybeChild(e) {
		return this.content.maybeChild(e);
	}
	forEach(e) {
		this.content.forEach(e);
	}
	nodesBetween(e, t, n, r = 0) {
		this.content.nodesBetween(e, t, n, r, this);
	}
	descendants(e) {
		this.nodesBetween(0, this.content.size, e);
	}
	get textContent() {
		return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
	}
	textBetween(e, t, n, r) {
		return this.content.textBetween(e, t, n, r);
	}
	get firstChild() {
		return this.content.firstChild;
	}
	get lastChild() {
		return this.content.lastChild;
	}
	eq(e) {
		return this == e || this.sameMarkup(e) && this.content.eq(e.content);
	}
	sameMarkup(e) {
		return this.hasMarkup(e.type, e.attrs, e.marks);
	}
	hasMarkup(e, t, n) {
		return this.type == e && ae(this.attrs, t || e.defaultAttrs || we) && C.sameSet(this.marks, n || C.none);
	}
	copy(t = null) {
		return t == this.content ? this : new e(this.type, this.attrs, t, this.marks);
	}
	mark(t) {
		return t == this.marks ? this : new e(this.type, this.attrs, this.content, t);
	}
	cut(e, t = this.content.size) {
		return e == 0 && t == this.content.size ? this : this.copy(this.content.cut(e, t));
	}
	slice(e, t = this.content.size, n = !1) {
		if (e == t) return w.empty;
		let r = this.resolve(e), i = this.resolve(t), a = n ? 0 : r.sharedDepth(t), o = r.start(a);
		return new w(r.node(a).content.cut(r.pos - o, i.pos - o), r.depth - a, i.depth - a);
	}
	replace(e, t, n) {
		return le(this.resolve(e), this.resolve(t), n);
	}
	nodeAt(e) {
		for (let t = this;;) {
			let { index: n, offset: r } = t.content.findIndex(e);
			if (t = t.maybeChild(n), !t) return null;
			if (r == e || t.isText) return t;
			e -= r + 1;
		}
	}
	childAfter(e) {
		let { index: t, offset: n } = this.content.findIndex(e);
		return {
			node: this.content.maybeChild(t),
			index: t,
			offset: n
		};
	}
	childBefore(e) {
		if (e == 0) return {
			node: null,
			index: 0,
			offset: 0
		};
		let { index: t, offset: n } = this.content.findIndex(e);
		if (n < e) return {
			node: this.content.child(t),
			index: t,
			offset: n
		};
		let r = this.content.child(t - 1);
		return {
			node: r,
			index: t - 1,
			offset: n - r.nodeSize
		};
	}
	resolve(e) {
		return ye.resolveCached(this, e);
	}
	resolveNoCache(e) {
		return ye.resolve(this, e);
	}
	rangeHasMark(e, t, n) {
		let r = !1;
		return t > e && this.nodesBetween(e, t, (e) => (n.isInSet(e.marks) && (r = !0), !r)), r;
	}
	get isBlock() {
		return this.type.isBlock;
	}
	get isTextblock() {
		return this.type.isTextblock;
	}
	get inlineContent() {
		return this.type.inlineContent;
	}
	get isInline() {
		return this.type.isInline;
	}
	get isText() {
		return this.type.isText;
	}
	get isLeaf() {
		return this.type.isLeaf;
	}
	get isAtom() {
		return this.type.isAtom;
	}
	toString() {
		if (this.type.spec.toDebugString) return this.type.spec.toDebugString(this);
		let e = this.type.name;
		return this.content.size && (e += "(" + this.content.toStringInner() + ")"), De(this.marks, e);
	}
	contentMatchAt(e) {
		let t = this.type.contentMatch.matchFragment(this.content, 0, e);
		if (!t) throw Error("Called contentMatchAt on a node with invalid content");
		return t;
	}
	canReplace(e, t, n = S.empty, r = 0, i = n.childCount) {
		let a = this.contentMatchAt(e).matchFragment(n, r, i), o = a && a.matchFragment(this.content, t);
		if (!o || !o.validEnd) return !1;
		for (let e = r; e < i; e++) if (!this.type.allowsMarks(n.child(e).marks)) return !1;
		return !0;
	}
	canReplaceWith(e, t, n, r) {
		if (r && !this.type.allowsMarks(r)) return !1;
		let i = this.contentMatchAt(e).matchType(n), a = i && i.matchFragment(this.content, t);
		return a ? a.validEnd : !1;
	}
	canAppend(e) {
		return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type);
	}
	check() {
		this.type.checkContent(this.content), this.type.checkAttrs(this.attrs);
		let e = C.none;
		for (let t = 0; t < this.marks.length; t++) {
			let n = this.marks[t];
			n.type.checkAttrs(n.attrs), e = n.addToSet(e);
		}
		if (!C.sameSet(e, this.marks)) throw RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((e) => e.type.name)}`);
		this.content.forEach((e) => e.check());
	}
	toJSON() {
		let e = { type: this.type.name };
		for (let t in this.attrs) {
			e.attrs = this.attrs;
			break;
		}
		return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map((e) => e.toJSON())), e;
	}
	static fromJSON(e, t) {
		if (!t) throw RangeError("Invalid input for Node.fromJSON");
		let n;
		if (t.marks) {
			if (!Array.isArray(t.marks)) throw RangeError("Invalid mark data for Node.fromJSON");
			n = t.marks.map(e.markFromJSON);
		}
		if (t.type == "text") {
			if (typeof t.text != "string") throw RangeError("Invalid text node in JSON");
			return e.text(t.text, n);
		}
		let r = S.fromJSON(e, t.content), i = e.nodeType(t.type).create(t.attrs, r, n);
		return i.type.checkAttrs(i.attrs), i;
	}
};
Te.prototype.text = void 0;
var Ee = class e extends Te {
	constructor(e, t, n, r) {
		if (super(e, t, null, r), !n) throw RangeError("Empty text nodes are not allowed");
		this.text = n;
	}
	toString() {
		return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : De(this.marks, JSON.stringify(this.text));
	}
	get textContent() {
		return this.text;
	}
	textBetween(e, t) {
		return this.text.slice(e, t);
	}
	get nodeSize() {
		return this.text.length;
	}
	mark(t) {
		return t == this.marks ? this : new e(this.type, this.attrs, this.text, t);
	}
	withText(t) {
		return t == this.text ? this : new e(this.type, this.attrs, t, this.marks);
	}
	cut(e = 0, t = this.text.length) {
		return e == 0 && t == this.text.length ? this : this.withText(this.text.slice(e, t));
	}
	eq(e) {
		return this.sameMarkup(e) && this.text == e.text;
	}
	toJSON() {
		let e = super.toJSON();
		return e.text = this.text, e;
	}
};
function De(e, t) {
	for (let n = e.length - 1; n >= 0; n--) t = e[n].type.name + "(" + t + ")";
	return t;
}
var Oe = class e {
	constructor(e) {
		this.validEnd = e, this.next = [], this.wrapCache = [];
	}
	static parse(t, n) {
		let r = new ke(t, n);
		if (r.next == null) return e.empty;
		let i = Ae(r);
		r.next && r.err("Unexpected trailing text");
		let a = Be(Le(i));
		return Ve(a, r), a;
	}
	matchType(e) {
		for (let t = 0; t < this.next.length; t++) if (this.next[t].type == e) return this.next[t].next;
		return null;
	}
	matchFragment(e, t = 0, n = e.childCount) {
		let r = this;
		for (let i = t; r && i < n; i++) r = r.matchType(e.child(i).type);
		return r;
	}
	get inlineContent() {
		return this.next.length != 0 && this.next[0].type.isInline;
	}
	get defaultType() {
		for (let e = 0; e < this.next.length; e++) {
			let { type: t } = this.next[e];
			if (!(t.isText || t.hasRequiredAttrs())) return t;
		}
		return null;
	}
	compatible(e) {
		for (let t = 0; t < this.next.length; t++) for (let n = 0; n < e.next.length; n++) if (this.next[t].type == e.next[n].type) return !0;
		return !1;
	}
	fillBefore(e, t = !1, n = 0) {
		let r = [this];
		function i(a, o) {
			let s = a.matchFragment(e, n);
			if (s && (!t || s.validEnd)) return S.from(o.map((e) => e.createAndFill()));
			for (let e = 0; e < a.next.length; e++) {
				let { type: t, next: n } = a.next[e];
				if (!(t.isText || t.hasRequiredAttrs()) && r.indexOf(n) == -1) {
					r.push(n);
					let e = i(n, o.concat(t));
					if (e) return e;
				}
			}
			return null;
		}
		return i(this, []);
	}
	findWrapping(e) {
		for (let t = 0; t < this.wrapCache.length; t += 2) if (this.wrapCache[t] == e) return this.wrapCache[t + 1];
		let t = this.computeWrapping(e);
		return this.wrapCache.push(e, t), t;
	}
	computeWrapping(e) {
		let t = Object.create(null), n = [{
			match: this,
			type: null,
			via: null
		}];
		for (; n.length;) {
			let r = n.shift(), i = r.match;
			if (i.matchType(e)) {
				let e = [];
				for (let t = r; t.type; t = t.via) e.push(t.type);
				return e.reverse();
			}
			for (let e = 0; e < i.next.length; e++) {
				let { type: a, next: o } = i.next[e];
				!a.isLeaf && !a.hasRequiredAttrs() && !(a.name in t) && (!r.type || o.validEnd) && (n.push({
					match: a.contentMatch,
					type: a,
					via: r
				}), t[a.name] = !0);
			}
		}
		return null;
	}
	get edgeCount() {
		return this.next.length;
	}
	edge(e) {
		if (e >= this.next.length) throw RangeError(`There's no ${e}th edge in this content match`);
		return this.next[e];
	}
	toString() {
		let e = [];
		function t(n) {
			e.push(n);
			for (let r = 0; r < n.next.length; r++) e.indexOf(n.next[r].next) == -1 && t(n.next[r].next);
		}
		return t(this), e.map((t, n) => {
			let r = n + (t.validEnd ? "*" : " ") + " ";
			for (let n = 0; n < t.next.length; n++) r += (n ? ", " : "") + t.next[n].type.name + "->" + e.indexOf(t.next[n].next);
			return r;
		}).join("\n");
	}
};
Oe.empty = new Oe(!0);
var ke = class {
	constructor(e, t) {
		this.string = e, this.nodeTypes = t, this.inline = null, this.pos = 0, this.tokens = e.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift();
	}
	get next() {
		return this.tokens[this.pos];
	}
	eat(e) {
		return this.next == e && (this.pos++ || !0);
	}
	err(e) {
		throw SyntaxError(e + " (in content expression '" + this.string + "')");
	}
};
function Ae(e) {
	let t = [];
	do
		t.push(je(e));
	while (e.eat("|"));
	return t.length == 1 ? t[0] : {
		type: "choice",
		exprs: t
	};
}
function je(e) {
	let t = [];
	do
		t.push(Me(e));
	while (e.next && e.next != ")" && e.next != "|");
	return t.length == 1 ? t[0] : {
		type: "seq",
		exprs: t
	};
}
function Me(e) {
	let t = Ie(e);
	for (;;) if (e.eat("+")) t = {
		type: "plus",
		expr: t
	};
	else if (e.eat("*")) t = {
		type: "star",
		expr: t
	};
	else if (e.eat("?")) t = {
		type: "opt",
		expr: t
	};
	else if (e.eat("{")) t = Pe(e, t);
	else break;
	return t;
}
function Ne(e) {
	/\D/.test(e.next) && e.err("Expected number, got '" + e.next + "'");
	let t = Number(e.next);
	return e.pos++, t;
}
function Pe(e, t) {
	let n = Ne(e), r = n;
	return e.eat(",") && (r = e.next == "}" ? -1 : Ne(e)), e.eat("}") || e.err("Unclosed braced range"), {
		type: "range",
		min: n,
		max: r,
		expr: t
	};
}
function Fe(e, t) {
	let n = e.nodeTypes, r = n[t];
	if (r) return [r];
	let i = [];
	for (let e in n) {
		let r = n[e];
		r.isInGroup(t) && i.push(r);
	}
	return i.length == 0 && e.err("No node type or group '" + t + "' found"), i;
}
function Ie(e) {
	if (e.eat("(")) {
		let t = Ae(e);
		return e.eat(")") || e.err("Missing closing paren"), t;
	} else if (/\W/.test(e.next)) e.err("Unexpected token '" + e.next + "'");
	else {
		let t = Fe(e, e.next).map((t) => (e.inline == null ? e.inline = t.isInline : e.inline != t.isInline && e.err("Mixing inline and block content"), {
			type: "name",
			value: t
		}));
		return e.pos++, t.length == 1 ? t[0] : {
			type: "choice",
			exprs: t
		};
	}
}
function Le(e) {
	let t = [[]];
	return i(a(e, 0), n()), t;
	function n() {
		return t.push([]) - 1;
	}
	function r(e, n, r) {
		let i = {
			term: r,
			to: n
		};
		return t[e].push(i), i;
	}
	function i(e, t) {
		e.forEach((e) => e.to = t);
	}
	function a(e, t) {
		if (e.type == "choice") return e.exprs.reduce((e, n) => e.concat(a(n, t)), []);
		if (e.type == "seq") for (let r = 0;; r++) {
			let o = a(e.exprs[r], t);
			if (r == e.exprs.length - 1) return o;
			i(o, t = n());
		}
		else if (e.type == "star") {
			let o = n();
			return r(t, o), i(a(e.expr, o), o), [r(o)];
		} else if (e.type == "plus") {
			let o = n();
			return i(a(e.expr, t), o), i(a(e.expr, o), o), [r(o)];
		} else if (e.type == "opt") return [r(t)].concat(a(e.expr, t));
		else if (e.type == "range") {
			let o = t;
			for (let t = 0; t < e.min; t++) {
				let t = n();
				i(a(e.expr, o), t), o = t;
			}
			if (e.max == -1) i(a(e.expr, o), o);
			else for (let t = e.min; t < e.max; t++) {
				let t = n();
				r(o, t), i(a(e.expr, o), t), o = t;
			}
			return [r(o)];
		} else if (e.type == "name") return [r(t, void 0, e.value)];
		else throw Error("Unknown expr type");
	}
}
function Re(e, t) {
	return t - e;
}
function ze(e, t) {
	let n = [];
	return r(t), n.sort(Re);
	function r(t) {
		let i = e[t];
		if (i.length == 1 && !i[0].term) return r(i[0].to);
		n.push(t);
		for (let e = 0; e < i.length; e++) {
			let { term: t, to: a } = i[e];
			!t && n.indexOf(a) == -1 && r(a);
		}
	}
}
function Be(e) {
	let t = Object.create(null);
	return n(ze(e, 0));
	function n(r) {
		let i = [];
		r.forEach((t) => {
			e[t].forEach(({ term: t, to: n }) => {
				if (!t) return;
				let r;
				for (let e = 0; e < i.length; e++) i[e][0] == t && (r = i[e][1]);
				ze(e, n).forEach((e) => {
					r || i.push([t, r = []]), r.indexOf(e) == -1 && r.push(e);
				});
			});
		});
		let a = t[r.join(",")] = new Oe(r.indexOf(e.length - 1) > -1);
		for (let e = 0; e < i.length; e++) {
			let r = i[e][1].sort(Re);
			a.next.push({
				type: i[e][0],
				next: t[r.join(",")] || n(r)
			});
		}
		return a;
	}
}
function Ve(e, t) {
	for (let n = 0, r = [e]; n < r.length; n++) {
		let e = r[n], i = !e.validEnd, a = [];
		for (let t = 0; t < e.next.length; t++) {
			let { type: n, next: o } = e.next[t];
			a.push(n.name), i && !(n.isText || n.hasRequiredAttrs()) && (i = !1), r.indexOf(o) == -1 && r.push(o);
		}
		i && t.err("Only non-generatable nodes (" + a.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
	}
}
function He(e) {
	let t = Object.create(null);
	for (let n in e) {
		let r = e[n];
		if (!r.hasDefault) return null;
		t[n] = r.default;
	}
	return t;
}
function Ue(e, t) {
	let n = Object.create(null);
	for (let r in e) {
		let i = t && t[r];
		if (i === void 0) {
			let t = e[r];
			if (t.hasDefault) i = t.default;
			else throw RangeError("No value supplied for attribute " + r);
		}
		n[r] = i;
	}
	return n;
}
function We(e, t, n, r) {
	for (let r in t) if (!(r in e)) throw RangeError(`Unsupported attribute ${r} for ${n} of type ${r}`);
	for (let n in e) {
		let r = e[n];
		r.validate && r.validate(t[n]);
	}
}
function Ge(e, t) {
	let n = Object.create(null);
	if (t) for (let r in t) n[r] = new Je(e, r, t[r]);
	return n;
}
var Ke = class e {
	constructor(e, t, n) {
		this.name = e, this.schema = t, this.spec = n, this.markSet = null, this.groups = n.group ? n.group.split(" ") : [], this.attrs = Ge(e, n.attrs), this.defaultAttrs = He(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(n.inline || e == "text"), this.isText = e == "text";
	}
	get isInline() {
		return !this.isBlock;
	}
	get isTextblock() {
		return this.isBlock && this.inlineContent;
	}
	get isLeaf() {
		return this.contentMatch == Oe.empty;
	}
	get isAtom() {
		return this.isLeaf || !!this.spec.atom;
	}
	isInGroup(e) {
		return this.groups.indexOf(e) > -1;
	}
	get whitespace() {
		return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
	}
	hasRequiredAttrs() {
		for (let e in this.attrs) if (this.attrs[e].isRequired) return !0;
		return !1;
	}
	compatibleContent(e) {
		return this == e || this.contentMatch.compatible(e.contentMatch);
	}
	computeAttrs(e) {
		return !e && this.defaultAttrs ? this.defaultAttrs : Ue(this.attrs, e);
	}
	create(e = null, t, n) {
		if (this.isText) throw Error("NodeType.create can't construct text nodes");
		return new Te(this, this.computeAttrs(e), S.from(t), C.setFrom(n));
	}
	createChecked(e = null, t, n) {
		return t = S.from(t), this.checkContent(t), new Te(this, this.computeAttrs(e), t, C.setFrom(n));
	}
	createAndFill(e = null, t, n) {
		if (e = this.computeAttrs(e), t = S.from(t), t.size) {
			let e = this.contentMatch.fillBefore(t);
			if (!e) return null;
			t = e.append(t);
		}
		let r = this.contentMatch.matchFragment(t), i = r && r.fillBefore(S.empty, !0);
		return i ? new Te(this, e, t.append(i), C.setFrom(n)) : null;
	}
	validContent(e) {
		let t = this.contentMatch.matchFragment(e);
		if (!t || !t.validEnd) return !1;
		for (let t = 0; t < e.childCount; t++) if (!this.allowsMarks(e.child(t).marks)) return !1;
		return !0;
	}
	checkContent(e) {
		if (!this.validContent(e)) throw RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`);
	}
	checkAttrs(e) {
		We(this.attrs, e, "node", this.name);
	}
	allowsMarkType(e) {
		return this.markSet == null || this.markSet.indexOf(e) > -1;
	}
	allowsMarks(e) {
		if (this.markSet == null) return !0;
		for (let t = 0; t < e.length; t++) if (!this.allowsMarkType(e[t].type)) return !1;
		return !0;
	}
	allowedMarks(e) {
		if (this.markSet == null) return e;
		let t;
		for (let n = 0; n < e.length; n++) this.allowsMarkType(e[n].type) ? t && t.push(e[n]) : t ||= e.slice(0, n);
		return t ? t.length ? t : C.none : e;
	}
	static compile(t, n) {
		let r = Object.create(null);
		t.forEach((t, i) => r[t] = new e(t, n, i));
		let i = n.spec.topNode || "doc";
		if (!r[i]) throw RangeError("Schema is missing its top node type ('" + i + "')");
		if (!r.text) throw RangeError("Every schema needs a 'text' type");
		for (let e in r.text.attrs) throw RangeError("The text node type should not have attributes");
		return r;
	}
};
function qe(e, t, n) {
	let r = n.split("|");
	return (n) => {
		let i = n === null ? "null" : typeof n;
		if (r.indexOf(i) < 0) throw RangeError(`Expected value of type ${r} for attribute ${t} on type ${e}, got ${i}`);
	};
}
var Je = class {
	constructor(e, t, n) {
		this.hasDefault = Object.prototype.hasOwnProperty.call(n, "default"), this.default = n.default, this.validate = typeof n.validate == "string" ? qe(e, t, n.validate) : n.validate;
	}
	get isRequired() {
		return !this.hasDefault;
	}
}, Ye = class e {
	constructor(e, t, n, r) {
		this.name = e, this.rank = t, this.schema = n, this.spec = r, this.attrs = Ge(e, r.attrs), this.excluded = null;
		let i = He(this.attrs);
		this.instance = i ? new C(this, i) : null;
	}
	create(e = null) {
		return !e && this.instance ? this.instance : new C(this, Ue(this.attrs, e));
	}
	static compile(t, n) {
		let r = Object.create(null), i = 0;
		return t.forEach((t, a) => r[t] = new e(t, i++, n, a)), r;
	}
	removeFromSet(e) {
		for (var t = 0; t < e.length; t++) e[t].type == this && (e = e.slice(0, t).concat(e.slice(t + 1)), t--);
		return e;
	}
	isInSet(e) {
		for (let t = 0; t < e.length; t++) if (e[t].type == this) return e[t];
	}
	checkAttrs(e) {
		We(this.attrs, e, "mark", this.name);
	}
	excludes(e) {
		return this.excluded.indexOf(e) > -1;
	}
}, Xe = class {
	constructor(e) {
		this.linebreakReplacement = null, this.cached = Object.create(null);
		let t = this.spec = {};
		for (let n in e) t[n] = e[n];
		t.nodes = x.from(e.nodes), t.marks = x.from(e.marks || {}), this.nodes = Ke.compile(this.spec.nodes, this), this.marks = Ye.compile(this.spec.marks, this);
		let n = Object.create(null);
		for (let e in this.nodes) {
			if (e in this.marks) throw RangeError(e + " can not be both a node and a mark");
			let t = this.nodes[e], r = t.spec.content || "", i = t.spec.marks;
			if (t.contentMatch = n[r] || (n[r] = Oe.parse(r, this.nodes)), t.inlineContent = t.contentMatch.inlineContent, t.spec.linebreakReplacement) {
				if (this.linebreakReplacement) throw RangeError("Multiple linebreak nodes defined");
				if (!t.isInline || !t.isLeaf) throw RangeError("Linebreak replacement nodes must be inline leaf nodes");
				this.linebreakReplacement = t;
			}
			t.markSet = i == "_" ? null : i ? Ze(this, i.split(" ")) : i == "" || !t.inlineContent ? [] : null;
		}
		for (let e in this.marks) {
			let t = this.marks[e], n = t.spec.excludes;
			t.excluded = n == null ? [t] : n == "" ? [] : Ze(this, n.split(" "));
		}
		this.nodeFromJSON = (e) => Te.fromJSON(this, e), this.markFromJSON = (e) => C.fromJSON(this, e), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = Object.create(null);
	}
	node(e, t = null, n, r) {
		if (typeof e == "string") e = this.nodeType(e);
		else if (!(e instanceof Ke)) throw RangeError("Invalid node type: " + e);
		else if (e.schema != this) throw RangeError("Node type from different schema used (" + e.name + ")");
		return e.createChecked(t, n, r);
	}
	text(e, t) {
		let n = this.nodes.text;
		return new Ee(n, n.defaultAttrs, e, C.setFrom(t));
	}
	mark(e, t) {
		return typeof e == "string" && (e = this.marks[e]), e.create(t);
	}
	nodeType(e) {
		let t = this.nodes[e];
		if (!t) throw RangeError("Unknown node type: " + e);
		return t;
	}
};
function Ze(e, t) {
	let n = [];
	for (let r = 0; r < t.length; r++) {
		let i = t[r], a = e.marks[i], o = a;
		if (a) n.push(a);
		else for (let t in e.marks) {
			let r = e.marks[t];
			(i == "_" || r.spec.group && r.spec.group.split(" ").indexOf(i) > -1) && n.push(o = r);
		}
		if (!o) throw SyntaxError("Unknown mark type: '" + t[r] + "'");
	}
	return n;
}
function Qe(e) {
	return e.tag != null;
}
function $e(e) {
	return e.style != null;
}
var et = class e {
	constructor(e, t) {
		this.schema = e, this.rules = t, this.tags = [], this.styles = [];
		let n = this.matchedStyles = [];
		t.forEach((e) => {
			if (Qe(e)) this.tags.push(e);
			else if ($e(e)) {
				let t = /[^=]*/.exec(e.style)[0];
				n.indexOf(t) < 0 && n.push(t), this.styles.push(e);
			}
		}), this.normalizeLists = !this.tags.some((t) => {
			if (!/^(ul|ol)\b/.test(t.tag) || !t.node) return !1;
			let n = e.nodes[t.node];
			return n.contentMatch.matchType(n);
		});
	}
	parse(e, t = {}) {
		let n = new lt(this, t, !1);
		return n.addAll(e, C.none, t.from, t.to), n.finish();
	}
	parseSlice(e, t = {}) {
		let n = new lt(this, t, !0);
		return n.addAll(e, C.none, t.from, t.to), w.maxOpen(n.finish());
	}
	matchTag(e, t, n) {
		for (let r = n ? this.tags.indexOf(n) + 1 : 0; r < this.tags.length; r++) {
			let n = this.tags[r];
			if (dt(e, n.tag) && (n.namespace === void 0 || e.namespaceURI == n.namespace) && (!n.context || t.matchesContext(n.context))) {
				if (n.getAttrs) {
					let t = n.getAttrs(e);
					if (t === !1) continue;
					n.attrs = t || void 0;
				}
				return n;
			}
		}
	}
	matchStyle(e, t, n, r) {
		for (let i = r ? this.styles.indexOf(r) + 1 : 0; i < this.styles.length; i++) {
			let r = this.styles[i], a = r.style;
			if (!(a.indexOf(e) != 0 || r.context && !n.matchesContext(r.context) || a.length > e.length && (a.charCodeAt(e.length) != 61 || a.slice(e.length + 1) != t))) {
				if (r.getAttrs) {
					let e = r.getAttrs(t);
					if (e === !1) continue;
					r.attrs = e || void 0;
				}
				return r;
			}
		}
	}
	static schemaRules(e) {
		let t = [];
		function n(e) {
			let n = e.priority == null ? 50 : e.priority, r = 0;
			for (; r < t.length; r++) {
				let e = t[r];
				if ((e.priority == null ? 50 : e.priority) < n) break;
			}
			t.splice(r, 0, e);
		}
		for (let t in e.marks) {
			let r = e.marks[t].spec.parseDOM;
			r && r.forEach((e) => {
				n(e = ft(e)), e.mark || e.ignore || e.clearMark || (e.mark = t);
			});
		}
		for (let t in e.nodes) {
			let r = e.nodes[t].spec.parseDOM;
			r && r.forEach((e) => {
				n(e = ft(e)), e.node || e.ignore || e.mark || (e.node = t);
			});
		}
		return t;
	}
	static fromSchema(t) {
		return t.cached.domParser || (t.cached.domParser = new e(t, e.schemaRules(t)));
	}
}, tt = {
	address: !0,
	article: !0,
	aside: !0,
	blockquote: !0,
	canvas: !0,
	dd: !0,
	div: !0,
	dl: !0,
	fieldset: !0,
	figcaption: !0,
	figure: !0,
	footer: !0,
	form: !0,
	h1: !0,
	h2: !0,
	h3: !0,
	h4: !0,
	h5: !0,
	h6: !0,
	header: !0,
	hgroup: !0,
	hr: !0,
	li: !0,
	noscript: !0,
	ol: !0,
	output: !0,
	p: !0,
	pre: !0,
	section: !0,
	table: !0,
	tfoot: !0,
	ul: !0
}, nt = {
	head: !0,
	noscript: !0,
	object: !0,
	script: !0,
	style: !0,
	title: !0
}, rt = {
	ol: !0,
	ul: !0
}, it = 1, at = 2, ot = 4;
function st(e, t, n) {
	return t == null ? e && e.whitespace == "pre" ? it | at : n & ~ot : (t ? it : 0) | (t === "full" ? at : 0);
}
var ct = class {
	constructor(e, t, n, r, i, a) {
		this.type = e, this.attrs = t, this.marks = n, this.solid = r, this.options = a, this.content = [], this.activeMarks = C.none, this.match = i || (a & ot ? null : e.contentMatch);
	}
	findWrapping(e) {
		if (!this.match) {
			if (!this.type) return [];
			let t = this.type.contentMatch.fillBefore(S.from(e));
			if (t) this.match = this.type.contentMatch.matchFragment(t);
			else {
				let t = this.type.contentMatch, n;
				return (n = t.findWrapping(e.type)) ? (this.match = t, n) : null;
			}
		}
		return this.match.findWrapping(e.type);
	}
	finish(e) {
		if (!(this.options & it)) {
			let e = this.content[this.content.length - 1], t;
			if (e && e.isText && (t = /[ \t\r\n\u000c]+$/.exec(e.text))) {
				let n = e;
				e.text.length == t[0].length ? this.content.pop() : this.content[this.content.length - 1] = n.withText(n.text.slice(0, n.text.length - t[0].length));
			}
		}
		let t = S.from(this.content);
		return !e && this.match && (t = t.append(this.match.fillBefore(S.empty, !0))), this.type ? this.type.create(this.attrs, t, this.marks) : t;
	}
	inlineContext(e) {
		return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !tt.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
	}
}, lt = class {
	constructor(e, t, n) {
		this.parser = e, this.options = t, this.isOpen = n, this.open = 0, this.localPreserveWS = !1;
		let r = t.topNode, i, a = st(null, t.preserveWhitespace, 0) | (n ? ot : 0);
		i = r ? new ct(r.type, r.attrs, C.none, !0, t.topMatch || r.type.contentMatch, a) : n ? new ct(null, null, C.none, !0, null, a) : new ct(e.schema.topNodeType, null, C.none, !0, null, a), this.nodes = [i], this.find = t.findPositions, this.needsBlock = !1;
	}
	get top() {
		return this.nodes[this.open];
	}
	addDOM(e, t) {
		e.nodeType == 3 ? this.addTextNode(e, t) : e.nodeType == 1 && this.addElement(e, t);
	}
	addTextNode(e, t) {
		let n = e.nodeValue, r = this.top, i = r.options & at ? "full" : this.localPreserveWS || (r.options & it) > 0, { schema: a } = this.parser;
		if (i === "full" || r.inlineContext(e) || /[^ \t\r\n\u000c]/.test(n)) {
			if (!i) {
				if (n = n.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(n) && this.open == this.nodes.length - 1) {
					let t = r.content[r.content.length - 1], i = e.previousSibling;
					(!t || i && i.nodeName == "BR" || t.isText && /[ \t\r\n\u000c]$/.test(t.text)) && (n = n.slice(1));
				}
			} else if (i === "full") n = n.replace(/\r\n?/g, "\n");
			else if (a.linebreakReplacement && /[\r\n]/.test(n) && this.top.findWrapping(a.linebreakReplacement.create())) {
				let e = n.split(/\r?\n|\r/);
				for (let n = 0; n < e.length; n++) n && this.insertNode(a.linebreakReplacement.create(), t, !0), e[n] && this.insertNode(a.text(e[n]), t, !/\S/.test(e[n]));
				n = "";
			} else n = n.replace(/\r?\n|\r/g, " ");
			n && this.insertNode(a.text(n), t, !/\S/.test(n)), this.findInText(e);
		} else this.findInside(e);
	}
	addElement(e, t, n) {
		let r = this.localPreserveWS, i = this.top;
		(e.tagName == "PRE" || /pre/.test(e.style && e.style.whiteSpace)) && (this.localPreserveWS = !0);
		let a = e.nodeName.toLowerCase(), o;
		rt.hasOwnProperty(a) && this.parser.normalizeLists && ut(e);
		let s = this.options.ruleFromNode && this.options.ruleFromNode(e) || (o = this.parser.matchTag(e, this, n));
		out: if (s ? s.ignore : nt.hasOwnProperty(a)) this.findInside(e), this.ignoreFallback(e, t);
		else if (!s || s.skip || s.closeParent) {
			s && s.closeParent ? this.open = Math.max(0, this.open - 1) : s && s.skip.nodeType && (e = s.skip);
			let n, r = this.needsBlock;
			if (tt.hasOwnProperty(a)) i.content.length && i.content[0].isInline && this.open && (this.open--, i = this.top), n = !0, i.type || (this.needsBlock = !0);
			else if (!e.firstChild) {
				this.leafFallback(e, t);
				break out;
			}
			let o = s && s.skip ? t : this.readStyles(e, t);
			o && this.addAll(e, o), n && this.sync(i), this.needsBlock = r;
		} else {
			let n = this.readStyles(e, t);
			n && this.addElementByRule(e, s, n, s.consuming === !1 ? o : void 0);
		}
		this.localPreserveWS = r;
	}
	leafFallback(e, t) {
		e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode("\n"), t);
	}
	ignoreFallback(e, t) {
		e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"), t, !0);
	}
	readStyles(e, t) {
		let n = e.style;
		if (n && n.length) for (let e = 0; e < this.parser.matchedStyles.length; e++) {
			let r = this.parser.matchedStyles[e], i = n.getPropertyValue(r);
			if (i) for (let e;;) {
				let n = this.parser.matchStyle(r, i, this, e);
				if (!n) break;
				if (n.ignore) return null;
				if (t = n.clearMark ? t.filter((e) => !n.clearMark(e)) : t.concat(this.parser.schema.marks[n.mark].create(n.attrs)), n.consuming === !1) e = n;
				else break;
			}
		}
		return t;
	}
	addElementByRule(e, t, n, r) {
		let i, a;
		if (t.node) if (a = this.parser.schema.nodes[t.node], a.isLeaf) this.insertNode(a.create(t.attrs), n, e.nodeName == "BR") || this.leafFallback(e, n);
		else {
			let e = this.enter(a, t.attrs || null, n, t.preserveWhitespace);
			e && (i = !0, n = e);
		}
		else {
			let e = this.parser.schema.marks[t.mark];
			n = n.concat(e.create(t.attrs));
		}
		let o = this.top;
		if (a && a.isLeaf) this.findInside(e);
		else if (r) this.addElement(e, n, r);
		else if (t.getContent) this.findInside(e), t.getContent(e, this.parser.schema).forEach((e) => this.insertNode(e, n, !1));
		else {
			let r = e;
			typeof t.contentElement == "string" ? r = e.querySelector(t.contentElement) : typeof t.contentElement == "function" ? r = t.contentElement(e) : t.contentElement && (r = t.contentElement), this.findAround(e, r, !0), this.addAll(r, n), this.findAround(e, r, !1);
		}
		i && this.sync(o) && this.open--;
	}
	addAll(e, t, n, r) {
		let i = n || 0;
		for (let a = n ? e.childNodes[n] : e.firstChild, o = r == null ? null : e.childNodes[r]; a != o; a = a.nextSibling, ++i) this.findAtPoint(e, i), this.addDOM(a, t);
		this.findAtPoint(e, i);
	}
	findPlace(e, t, n) {
		let r, i;
		for (let t = this.open, a = 0; t >= 0; t--) {
			let o = this.nodes[t], s = o.findWrapping(e);
			if (s && (!r || r.length > s.length + a) && (r = s, i = o, !s.length)) break;
			if (o.solid) {
				if (n) break;
				a += 2;
			}
		}
		if (!r) return null;
		this.sync(i);
		for (let e = 0; e < r.length; e++) t = this.enterInner(r[e], null, t, !1);
		return t;
	}
	insertNode(e, t, n) {
		if (e.isInline && this.needsBlock && !this.top.type) {
			let e = this.textblockFromContext();
			e && (t = this.enterInner(e, null, t));
		}
		let r = this.findPlace(e, t, n);
		if (r) {
			this.closeExtra();
			let t = this.top;
			t.match &&= t.match.matchType(e.type);
			let n = C.none;
			for (let i of r.concat(e.marks)) (t.type ? t.type.allowsMarkType(i.type) : pt(i.type, e.type)) && (n = i.addToSet(n));
			return t.content.push(e.mark(n)), !0;
		}
		return !1;
	}
	enter(e, t, n, r) {
		let i = this.findPlace(e.create(t), n, !1);
		return i &&= this.enterInner(e, t, n, !0, r), i;
	}
	enterInner(e, t, n, r = !1, i) {
		this.closeExtra();
		let a = this.top;
		a.match = a.match && a.match.matchType(e);
		let o = st(e, i, a.options);
		a.options & ot && a.content.length == 0 && (o |= ot);
		let s = C.none;
		return n = n.filter((t) => (a.type ? a.type.allowsMarkType(t.type) : pt(t.type, e)) ? (s = t.addToSet(s), !1) : !0), this.nodes.push(new ct(e, t, s, r, null, o)), this.open++, n;
	}
	closeExtra(e = !1) {
		let t = this.nodes.length - 1;
		if (t > this.open) {
			for (; t > this.open; t--) this.nodes[t - 1].content.push(this.nodes[t].finish(e));
			this.nodes.length = this.open + 1;
		}
	}
	finish() {
		return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(!!(this.isOpen || this.options.topOpen));
	}
	sync(e) {
		for (let t = this.open; t >= 0; t--) if (this.nodes[t] == e) return this.open = t, !0;
		else this.localPreserveWS && (this.nodes[t].options |= it);
		return !1;
	}
	get currentPos() {
		this.closeExtra();
		let e = 0;
		for (let t = this.open; t >= 0; t--) {
			let n = this.nodes[t].content;
			for (let t = n.length - 1; t >= 0; t--) e += n[t].nodeSize;
			t && e++;
		}
		return e;
	}
	findAtPoint(e, t) {
		if (this.find) for (let n = 0; n < this.find.length; n++) this.find[n].node == e && this.find[n].offset == t && (this.find[n].pos = this.currentPos);
	}
	findInside(e) {
		if (this.find) for (let t = 0; t < this.find.length; t++) this.find[t].pos == null && e.nodeType == 1 && e.contains(this.find[t].node) && (this.find[t].pos = this.currentPos);
	}
	findAround(e, t, n) {
		if (e != t && this.find) for (let r = 0; r < this.find.length; r++) this.find[r].pos == null && e.nodeType == 1 && e.contains(this.find[r].node) && t.compareDocumentPosition(this.find[r].node) & (n ? 2 : 4) && (this.find[r].pos = this.currentPos);
	}
	findInText(e) {
		if (this.find) for (let t = 0; t < this.find.length; t++) this.find[t].node == e && (this.find[t].pos = this.currentPos - (e.nodeValue.length - this.find[t].offset));
	}
	matchesContext(e) {
		if (e.indexOf("|") > -1) return e.split(/\s*\|\s*/).some(this.matchesContext, this);
		let t = e.split("/"), n = this.options.context, r = !this.isOpen && (!n || n.parent.type == this.nodes[0].type), i = -(n ? n.depth + 1 : 0) + (r ? 0 : 1), a = (e, o) => {
			for (; e >= 0; e--) {
				let s = t[e];
				if (s == "") {
					if (e == t.length - 1 || e == 0) continue;
					for (; o >= i; o--) if (a(e - 1, o)) return !0;
					return !1;
				} else {
					let e = o > 0 || o == 0 && r ? this.nodes[o].type : n && o >= i ? n.node(o - i).type : null;
					if (!e || e.name != s && !e.isInGroup(s)) return !1;
					o--;
				}
			}
			return !0;
		};
		return a(t.length - 1, this.open);
	}
	textblockFromContext() {
		let e = this.options.context;
		if (e) for (let t = e.depth; t >= 0; t--) {
			let n = e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;
			if (n && n.isTextblock && n.defaultAttrs) return n;
		}
		for (let e in this.parser.schema.nodes) {
			let t = this.parser.schema.nodes[e];
			if (t.isTextblock && t.defaultAttrs) return t;
		}
	}
};
function ut(e) {
	for (let t = e.firstChild, n = null; t; t = t.nextSibling) {
		let e = t.nodeType == 1 ? t.nodeName.toLowerCase() : null;
		e && rt.hasOwnProperty(e) && n ? (n.appendChild(t), t = n) : e == "li" ? n = t : e && (n = null);
	}
}
function dt(e, t) {
	return (e.matches || e.msMatchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector).call(e, t);
}
function ft(e) {
	let t = {};
	for (let n in e) t[n] = e[n];
	return t;
}
function pt(e, t) {
	let n = t.schema.nodes;
	for (let r in n) {
		let i = n[r];
		if (!i.allowsMarkType(e)) continue;
		let a = [], o = (e) => {
			a.push(e);
			for (let n = 0; n < e.edgeCount; n++) {
				let { type: r, next: i } = e.edge(n);
				if (r == t || a.indexOf(i) < 0 && o(i)) return !0;
			}
		};
		if (o(i.contentMatch)) return !0;
	}
}
var mt = class e {
	constructor(e, t) {
		this.nodes = e, this.marks = t;
	}
	serializeFragment(e, t = {}, n) {
		n ||= gt(t).createDocumentFragment();
		let r = n, i = [];
		return e.forEach((e) => {
			if (i.length || e.marks.length) {
				let n = 0, a = 0;
				for (; n < i.length && a < e.marks.length;) {
					let t = e.marks[a];
					if (!this.marks[t.type.name]) {
						a++;
						continue;
					}
					if (!t.eq(i[n][0]) || t.type.spec.spanning === !1) break;
					n++, a++;
				}
				for (; n < i.length;) r = i.pop()[1];
				for (; a < e.marks.length;) {
					let n = e.marks[a++], o = this.serializeMark(n, e.isInline, t);
					o && (i.push([n, r]), r.appendChild(o.dom), r = o.contentDOM || o.dom);
				}
			}
			r.appendChild(this.serializeNodeInner(e, t));
		}), n;
	}
	serializeNodeInner(e, t) {
		let { dom: n, contentDOM: r } = bt(gt(t), this.nodes[e.type.name](e), null, e.attrs);
		if (r) {
			if (e.isLeaf) throw RangeError("Content hole not allowed in a leaf node spec");
			this.serializeFragment(e.content, t, r);
		}
		return n;
	}
	serializeNode(e, t = {}) {
		let n = this.serializeNodeInner(e, t);
		for (let r = e.marks.length - 1; r >= 0; r--) {
			let i = this.serializeMark(e.marks[r], e.isInline, t);
			i && ((i.contentDOM || i.dom).appendChild(n), n = i.dom);
		}
		return n;
	}
	serializeMark(e, t, n = {}) {
		let r = this.marks[e.type.name];
		return r && bt(gt(n), r(e, t), null, e.attrs);
	}
	static renderSpec(e, t, n = null, r) {
		return bt(e, t, n, r);
	}
	static fromSchema(t) {
		return t.cached.domSerializer || (t.cached.domSerializer = new e(this.nodesFromSchema(t), this.marksFromSchema(t)));
	}
	static nodesFromSchema(e) {
		let t = ht(e.nodes);
		return t.text ||= (e) => e.text, t;
	}
	static marksFromSchema(e) {
		return ht(e.marks);
	}
};
function ht(e) {
	let t = {};
	for (let n in e) {
		let r = e[n].spec.toDOM;
		r && (t[n] = r);
	}
	return t;
}
function gt(e) {
	return e.document || window.document;
}
var _t = new WeakMap();
function vt(e) {
	let t = _t.get(e);
	return t === void 0 && _t.set(e, t = yt(e)), t;
}
function yt(e) {
	let t = null;
	function n(e) {
		if (e && typeof e == "object") if (Array.isArray(e)) if (typeof e[0] == "string") t ||= [], t.push(e);
		else for (let t = 0; t < e.length; t++) n(e[t]);
		else for (let t in e) n(e[t]);
	}
	return n(e), t;
}
function bt(e, t, n, r) {
	if (typeof t == "string") return { dom: e.createTextNode(t) };
	if (t.nodeType != null) return { dom: t };
	if (t.dom && t.dom.nodeType != null) return t;
	let i = t[0], a;
	if (typeof i != "string") throw RangeError("Invalid array passed to renderSpec");
	if (r && (a = vt(r)) && a.indexOf(t) > -1) throw RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
	let o = i.indexOf(" ");
	o > 0 && (n = i.slice(0, o), i = i.slice(o + 1));
	let s, c = n ? e.createElementNS(n, i) : e.createElement(i), l = t[1], u = 1;
	if (l && typeof l == "object" && l.nodeType == null && !Array.isArray(l)) {
		u = 2;
		for (let e in l) if (l[e] != null) {
			let t = e.indexOf(" ");
			t > 0 ? c.setAttributeNS(e.slice(0, t), e.slice(t + 1), l[e]) : e == "style" && c.style ? c.style.cssText = l[e] : c.setAttribute(e, l[e]);
		}
	}
	for (let i = u; i < t.length; i++) {
		let a = t[i];
		if (a === 0) {
			if (i < t.length - 1 || i > u) throw RangeError("Content hole must be the only child of its parent node");
			return {
				dom: c,
				contentDOM: c
			};
		} else {
			let { dom: t, contentDOM: i } = bt(e, a, n, r);
			if (c.appendChild(t), i) {
				if (s) throw RangeError("Multiple content holes");
				s = i;
			}
		}
	}
	return {
		dom: c,
		contentDOM: s
	};
}
var xt = 65535, St = 2 ** 16;
function Ct(e, t) {
	return e + t * St;
}
function wt(e) {
	return e & xt;
}
function Tt(e) {
	return (e - (e & xt)) / St;
}
var Et = 1, Dt = 2, Ot = 4, kt = 8, At = class {
	constructor(e, t, n) {
		this.pos = e, this.delInfo = t, this.recover = n;
	}
	get deleted() {
		return (this.delInfo & kt) > 0;
	}
	get deletedBefore() {
		return (this.delInfo & (Et | Ot)) > 0;
	}
	get deletedAfter() {
		return (this.delInfo & (Dt | Ot)) > 0;
	}
	get deletedAcross() {
		return (this.delInfo & Ot) > 0;
	}
}, jt = class e {
	constructor(t, n = !1) {
		if (this.ranges = t, this.inverted = n, !t.length && e.empty) return e.empty;
	}
	recover(e) {
		let t = 0, n = wt(e);
		if (!this.inverted) for (let e = 0; e < n; e++) t += this.ranges[e * 3 + 2] - this.ranges[e * 3 + 1];
		return this.ranges[n * 3] + t + Tt(e);
	}
	mapResult(e, t = 1) {
		return this._map(e, t, !1);
	}
	map(e, t = 1) {
		return this._map(e, t, !0);
	}
	_map(e, t, n) {
		let r = 0, i = this.inverted ? 2 : 1, a = this.inverted ? 1 : 2;
		for (let o = 0; o < this.ranges.length; o += 3) {
			let s = this.ranges[o] - (this.inverted ? r : 0);
			if (s > e) break;
			let c = this.ranges[o + i], l = this.ranges[o + a], u = s + c;
			if (e <= u) {
				let i = c ? e == s ? -1 : e == u ? 1 : t : t, a = s + r + (i < 0 ? 0 : l);
				if (n) return a;
				let d = e == (t < 0 ? s : u) ? null : Ct(o / 3, e - s), f = e == s ? Dt : e == u ? Et : Ot;
				return (t < 0 ? e != s : e != u) && (f |= kt), new At(a, f, d);
			}
			r += l - c;
		}
		return n ? e + r : new At(e + r, 0, null);
	}
	touches(e, t) {
		let n = 0, r = wt(t), i = this.inverted ? 2 : 1, a = this.inverted ? 1 : 2;
		for (let t = 0; t < this.ranges.length; t += 3) {
			let o = this.ranges[t] - (this.inverted ? n : 0);
			if (o > e) break;
			let s = this.ranges[t + i];
			if (e <= o + s && t == r * 3) return !0;
			n += this.ranges[t + a] - s;
		}
		return !1;
	}
	forEach(e) {
		let t = this.inverted ? 2 : 1, n = this.inverted ? 1 : 2;
		for (let r = 0, i = 0; r < this.ranges.length; r += 3) {
			let a = this.ranges[r], o = a - (this.inverted ? i : 0), s = a + (this.inverted ? 0 : i), c = this.ranges[r + t], l = this.ranges[r + n];
			e(o, o + c, s, s + l), i += l - c;
		}
	}
	invert() {
		return new e(this.ranges, !this.inverted);
	}
	toString() {
		return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
	}
	static offset(t) {
		return t == 0 ? e.empty : new e(t < 0 ? [
			0,
			-t,
			0
		] : [
			0,
			0,
			t
		]);
	}
};
jt.empty = new jt([]);
var Mt = class e {
	constructor(e, t, n = 0, r = e ? e.length : 0) {
		this.mirror = t, this.from = n, this.to = r, this._maps = e || [], this.ownData = !(e || t);
	}
	get maps() {
		return this._maps;
	}
	slice(t = 0, n = this.maps.length) {
		return new e(this._maps, this.mirror, t, n);
	}
	appendMap(e, t) {
		this.ownData ||= (this._maps = this._maps.slice(), this.mirror = this.mirror && this.mirror.slice(), !0), this.to = this._maps.push(e), t != null && this.setMirror(this._maps.length - 1, t);
	}
	appendMapping(e) {
		for (let t = 0, n = this._maps.length; t < e._maps.length; t++) {
			let r = e.getMirror(t);
			this.appendMap(e._maps[t], r != null && r < t ? n + r : void 0);
		}
	}
	getMirror(e) {
		if (this.mirror) {
			for (let t = 0; t < this.mirror.length; t++) if (this.mirror[t] == e) return this.mirror[t + (t % 2 ? -1 : 1)];
		}
	}
	setMirror(e, t) {
		this.mirror ||= [], this.mirror.push(e, t);
	}
	appendMappingInverted(e) {
		for (let t = e.maps.length - 1, n = this._maps.length + e._maps.length; t >= 0; t--) {
			let r = e.getMirror(t);
			this.appendMap(e._maps[t].invert(), r != null && r > t ? n - r - 1 : void 0);
		}
	}
	invert() {
		let t = new e();
		return t.appendMappingInverted(this), t;
	}
	map(e, t = 1) {
		if (this.mirror) return this._map(e, t, !0);
		for (let n = this.from; n < this.to; n++) e = this._maps[n].map(e, t);
		return e;
	}
	mapResult(e, t = 1) {
		return this._map(e, t, !1);
	}
	_map(e, t, n) {
		let r = 0;
		for (let n = this.from; n < this.to; n++) {
			let i = this._maps[n].mapResult(e, t);
			if (i.recover != null) {
				let t = this.getMirror(n);
				if (t != null && t > n && t < this.to) {
					n = t, e = this._maps[t].recover(i.recover);
					continue;
				}
			}
			r |= i.delInfo, e = i.pos;
		}
		return n ? e : new At(e, r, null);
	}
}, Nt = Object.create(null), T = class {
	getMap() {
		return jt.empty;
	}
	merge(e) {
		return null;
	}
	static fromJSON(e, t) {
		if (!t || !t.stepType) throw RangeError("Invalid input for Step.fromJSON");
		let n = Nt[t.stepType];
		if (!n) throw RangeError(`No step type ${t.stepType} defined`);
		return n.fromJSON(e, t);
	}
	static jsonID(e, t) {
		if (e in Nt) throw RangeError("Duplicate use of step JSON ID " + e);
		return Nt[e] = t, t.prototype.jsonID = e, t;
	}
}, E = class e {
	constructor(e, t) {
		this.doc = e, this.failed = t;
	}
	static ok(t) {
		return new e(t, null);
	}
	static fail(t) {
		return new e(null, t);
	}
	static fromReplace(t, n, r, i) {
		try {
			return e.ok(t.replace(n, r, i));
		} catch (t) {
			if (t instanceof oe) return e.fail(t.message);
			throw t;
		}
	}
};
function Pt(e, t, n) {
	let r = [];
	for (let i = 0; i < e.childCount; i++) {
		let a = e.child(i);
		a.content.size && (a = a.copy(Pt(a.content, t, a))), a.isInline && (a = t(a, n, i)), r.push(a);
	}
	return S.fromArray(r);
}
var Ft = class e extends T {
	constructor(e, t, n) {
		super(), this.from = e, this.to = t, this.mark = n;
	}
	apply(e) {
		let t = e.slice(this.from, this.to), n = e.resolve(this.from), r = n.node(n.sharedDepth(this.to)), i = new w(Pt(t.content, (e, t) => !e.isAtom || !t.type.allowsMarkType(this.mark.type) ? e : e.mark(this.mark.addToSet(e.marks)), r), t.openStart, t.openEnd);
		return E.fromReplace(e, this.from, this.to, i);
	}
	invert() {
		return new It(this.from, this.to, this.mark);
	}
	map(t) {
		let n = t.mapResult(this.from, 1), r = t.mapResult(this.to, -1);
		return n.deleted && r.deleted || n.pos >= r.pos ? null : new e(n.pos, r.pos, this.mark);
	}
	merge(t) {
		return t instanceof e && t.mark.eq(this.mark) && this.from <= t.to && this.to >= t.from ? new e(Math.min(this.from, t.from), Math.max(this.to, t.to), this.mark) : null;
	}
	toJSON() {
		return {
			stepType: "addMark",
			mark: this.mark.toJSON(),
			from: this.from,
			to: this.to
		};
	}
	static fromJSON(t, n) {
		if (typeof n.from != "number" || typeof n.to != "number") throw RangeError("Invalid input for AddMarkStep.fromJSON");
		return new e(n.from, n.to, t.markFromJSON(n.mark));
	}
};
T.jsonID("addMark", Ft);
var It = class e extends T {
	constructor(e, t, n) {
		super(), this.from = e, this.to = t, this.mark = n;
	}
	apply(e) {
		let t = e.slice(this.from, this.to), n = new w(Pt(t.content, (e) => e.mark(this.mark.removeFromSet(e.marks)), e), t.openStart, t.openEnd);
		return E.fromReplace(e, this.from, this.to, n);
	}
	invert() {
		return new Ft(this.from, this.to, this.mark);
	}
	map(t) {
		let n = t.mapResult(this.from, 1), r = t.mapResult(this.to, -1);
		return n.deleted && r.deleted || n.pos >= r.pos ? null : new e(n.pos, r.pos, this.mark);
	}
	merge(t) {
		return t instanceof e && t.mark.eq(this.mark) && this.from <= t.to && this.to >= t.from ? new e(Math.min(this.from, t.from), Math.max(this.to, t.to), this.mark) : null;
	}
	toJSON() {
		return {
			stepType: "removeMark",
			mark: this.mark.toJSON(),
			from: this.from,
			to: this.to
		};
	}
	static fromJSON(t, n) {
		if (typeof n.from != "number" || typeof n.to != "number") throw RangeError("Invalid input for RemoveMarkStep.fromJSON");
		return new e(n.from, n.to, t.markFromJSON(n.mark));
	}
};
T.jsonID("removeMark", It);
var Lt = class e extends T {
	constructor(e, t) {
		super(), this.pos = e, this.mark = t;
	}
	apply(e) {
		let t = e.nodeAt(this.pos);
		if (!t) return E.fail("No node at mark step's position");
		let n = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
		return E.fromReplace(e, this.pos, this.pos + 1, new w(S.from(n), 0, t.isLeaf ? 0 : 1));
	}
	invert(t) {
		let n = t.nodeAt(this.pos);
		if (n) {
			let t = this.mark.addToSet(n.marks);
			if (t.length == n.marks.length) {
				for (let r = 0; r < n.marks.length; r++) if (!n.marks[r].isInSet(t)) return new e(this.pos, n.marks[r]);
				return new e(this.pos, this.mark);
			}
		}
		return new Rt(this.pos, this.mark);
	}
	map(t) {
		let n = t.mapResult(this.pos, 1);
		return n.deletedAfter ? null : new e(n.pos, this.mark);
	}
	toJSON() {
		return {
			stepType: "addNodeMark",
			pos: this.pos,
			mark: this.mark.toJSON()
		};
	}
	static fromJSON(t, n) {
		if (typeof n.pos != "number") throw RangeError("Invalid input for AddNodeMarkStep.fromJSON");
		return new e(n.pos, t.markFromJSON(n.mark));
	}
};
T.jsonID("addNodeMark", Lt);
var Rt = class e extends T {
	constructor(e, t) {
		super(), this.pos = e, this.mark = t;
	}
	apply(e) {
		let t = e.nodeAt(this.pos);
		if (!t) return E.fail("No node at mark step's position");
		let n = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
		return E.fromReplace(e, this.pos, this.pos + 1, new w(S.from(n), 0, t.isLeaf ? 0 : 1));
	}
	invert(e) {
		let t = e.nodeAt(this.pos);
		return !t || !this.mark.isInSet(t.marks) ? this : new Lt(this.pos, this.mark);
	}
	map(t) {
		let n = t.mapResult(this.pos, 1);
		return n.deletedAfter ? null : new e(n.pos, this.mark);
	}
	toJSON() {
		return {
			stepType: "removeNodeMark",
			pos: this.pos,
			mark: this.mark.toJSON()
		};
	}
	static fromJSON(t, n) {
		if (typeof n.pos != "number") throw RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
		return new e(n.pos, t.markFromJSON(n.mark));
	}
};
T.jsonID("removeNodeMark", Rt);
var zt = class e extends T {
	constructor(e, t, n, r = !1) {
		super(), this.from = e, this.to = t, this.slice = n, this.structure = r;
	}
	apply(e) {
		return this.structure && Vt(e, this.from, this.to) ? E.fail("Structure replace would overwrite content") : E.fromReplace(e, this.from, this.to, this.slice);
	}
	getMap() {
		return new jt([
			this.from,
			this.to - this.from,
			this.slice.size
		]);
	}
	invert(t) {
		return new e(this.from, this.from + this.slice.size, t.slice(this.from, this.to));
	}
	map(t) {
		let n = t.mapResult(this.from, 1), r = t.mapResult(this.to, -1);
		return n.deletedAcross && r.deletedAcross ? null : new e(n.pos, Math.max(n.pos, r.pos), this.slice, this.structure);
	}
	merge(t) {
		if (!(t instanceof e) || t.structure || this.structure) return null;
		if (this.from + this.slice.size == t.from && !this.slice.openEnd && !t.slice.openStart) {
			let n = this.slice.size + t.slice.size == 0 ? w.empty : new w(this.slice.content.append(t.slice.content), this.slice.openStart, t.slice.openEnd);
			return new e(this.from, this.to + (t.to - t.from), n, this.structure);
		} else if (t.to == this.from && !this.slice.openStart && !t.slice.openEnd) {
			let n = this.slice.size + t.slice.size == 0 ? w.empty : new w(t.slice.content.append(this.slice.content), t.slice.openStart, this.slice.openEnd);
			return new e(t.from, this.to, n, this.structure);
		} else return null;
	}
	toJSON() {
		let e = {
			stepType: "replace",
			from: this.from,
			to: this.to
		};
		return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
	}
	static fromJSON(t, n) {
		if (typeof n.from != "number" || typeof n.to != "number") throw RangeError("Invalid input for ReplaceStep.fromJSON");
		return new e(n.from, n.to, w.fromJSON(t, n.slice), !!n.structure);
	}
};
T.jsonID("replace", zt);
var Bt = class e extends T {
	constructor(e, t, n, r, i, a, o = !1) {
		super(), this.from = e, this.to = t, this.gapFrom = n, this.gapTo = r, this.slice = i, this.insert = a, this.structure = o;
	}
	apply(e) {
		if (this.structure && (Vt(e, this.from, this.gapFrom) || Vt(e, this.gapTo, this.to))) return E.fail("Structure gap-replace would overwrite content");
		let t = e.slice(this.gapFrom, this.gapTo);
		if (t.openStart || t.openEnd) return E.fail("Gap is not a flat range");
		let n = this.slice.insertAt(this.insert, t.content);
		return n ? E.fromReplace(e, this.from, this.to, n) : E.fail("Content does not fit in gap");
	}
	getMap() {
		return new jt([
			this.from,
			this.gapFrom - this.from,
			this.insert,
			this.gapTo,
			this.to - this.gapTo,
			this.slice.size - this.insert
		]);
	}
	invert(t) {
		let n = this.gapTo - this.gapFrom;
		return new e(this.from, this.from + this.slice.size + n, this.from + this.insert, this.from + this.insert + n, t.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
	}
	map(t) {
		let n = t.mapResult(this.from, 1), r = t.mapResult(this.to, -1), i = this.from == this.gapFrom ? n.pos : t.map(this.gapFrom, -1), a = this.to == this.gapTo ? r.pos : t.map(this.gapTo, 1);
		return n.deletedAcross && r.deletedAcross || i < n.pos || a > r.pos ? null : new e(n.pos, r.pos, i, a, this.slice, this.insert, this.structure);
	}
	toJSON() {
		let e = {
			stepType: "replaceAround",
			from: this.from,
			to: this.to,
			gapFrom: this.gapFrom,
			gapTo: this.gapTo,
			insert: this.insert
		};
		return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
	}
	static fromJSON(t, n) {
		if (typeof n.from != "number" || typeof n.to != "number" || typeof n.gapFrom != "number" || typeof n.gapTo != "number" || typeof n.insert != "number") throw RangeError("Invalid input for ReplaceAroundStep.fromJSON");
		return new e(n.from, n.to, n.gapFrom, n.gapTo, w.fromJSON(t, n.slice), n.insert, !!n.structure);
	}
};
T.jsonID("replaceAround", Bt);
function Vt(e, t, n) {
	let r = e.resolve(t), i = n - t, a = r.depth;
	for (; i > 0 && a > 0 && r.indexAfter(a) == r.node(a).childCount;) a--, i--;
	if (i > 0) {
		let e = r.node(a).maybeChild(r.indexAfter(a));
		for (; i > 0;) {
			if (!e || e.isLeaf) return !0;
			e = e.firstChild, i--;
		}
	}
	return !1;
}
function Ht(e, t, n, r) {
	let i = [], a = [], o, s;
	e.doc.nodesBetween(t, n, (e, c, l) => {
		if (!e.isInline) return;
		let u = e.marks;
		if (!r.isInSet(u) && l.type.allowsMarkType(r.type)) {
			let l = Math.max(c, t), d = Math.min(c + e.nodeSize, n), f = r.addToSet(u);
			for (let e = 0; e < u.length; e++) u[e].isInSet(f) || (o && o.to == l && o.mark.eq(u[e]) ? o.to = d : i.push(o = new It(l, d, u[e])));
			s && s.to == l ? s.to = d : a.push(s = new Ft(l, d, r));
		}
	}), i.forEach((t) => e.step(t)), a.forEach((t) => e.step(t));
}
function Ut(e, t, n, r) {
	let i = [], a = 0;
	e.doc.nodesBetween(t, n, (e, o) => {
		if (!e.isInline) return;
		a++;
		let s = null;
		if (r instanceof Ye) {
			let t = e.marks, n;
			for (; n = r.isInSet(t);) (s ||= []).push(n), t = n.removeFromSet(t);
		} else r ? r.isInSet(e.marks) && (s = [r]) : s = e.marks;
		if (s && s.length) {
			let r = Math.min(o + e.nodeSize, n);
			for (let e = 0; e < s.length; e++) {
				let n = s[e], c;
				for (let e = 0; e < i.length; e++) {
					let t = i[e];
					t.step == a - 1 && n.eq(i[e].style) && (c = t);
				}
				c ? (c.to = r, c.step = a) : i.push({
					style: n,
					from: Math.max(o, t),
					to: r,
					step: a
				});
			}
		}
	}), i.forEach((t) => e.step(new It(t.from, t.to, t.style)));
}
function Wt(e, t, n, r = n.contentMatch, i = !0) {
	let a = e.doc.nodeAt(t), o = [], s = t + 1;
	for (let t = 0; t < a.childCount; t++) {
		let c = a.child(t), l = s + c.nodeSize, u = r.matchType(c.type);
		if (!u) o.push(new zt(s, l, w.empty));
		else {
			r = u;
			for (let t = 0; t < c.marks.length; t++) n.allowsMarkType(c.marks[t].type) || e.step(new It(s, l, c.marks[t]));
			if (i && c.isText && n.whitespace != "pre") {
				let e, t = /\r?\n|\r/g, r;
				for (; e = t.exec(c.text);) r ||= new w(S.from(n.schema.text(" ", n.allowedMarks(c.marks))), 0, 0), o.push(new zt(s + e.index, s + e.index + e[0].length, r));
			}
		}
		s = l;
	}
	if (!r.validEnd) {
		let t = r.fillBefore(S.empty, !0);
		e.replace(s, s, new w(t, 0, 0));
	}
	for (let t = o.length - 1; t >= 0; t--) e.step(o[t]);
}
function Gt(e, t, n) {
	return (t == 0 || e.canReplace(t, e.childCount)) && (n == e.childCount || e.canReplace(0, n));
}
function Kt(e) {
	let t = e.parent.content.cutByIndex(e.startIndex, e.endIndex);
	for (let n = e.depth, r = 0, i = 0;; --n) {
		let a = e.$from.node(n), o = e.$from.index(n) + r, s = e.$to.indexAfter(n) - i;
		if (n < e.depth && a.canReplace(o, s, t)) return n;
		if (n == 0 || a.type.spec.isolating || !Gt(a, o, s)) break;
		o && (r = 1), s < a.childCount && (i = 1);
	}
	return null;
}
function qt(e, t, n) {
	let { $from: r, $to: i, depth: a } = t, o = r.before(a + 1), s = i.after(a + 1), c = o, l = s, u = S.empty, d = 0;
	for (let e = a, t = !1; e > n; e--) t || r.index(e) > 0 ? (t = !0, u = S.from(r.node(e).copy(u)), d++) : c--;
	let f = S.empty, p = 0;
	for (let e = a, t = !1; e > n; e--) t || i.after(e + 1) < i.end(e) ? (t = !0, f = S.from(i.node(e).copy(f)), p++) : l++;
	e.step(new Bt(c, l, o, s, new w(u.append(f), d, p), u.size - d, !0));
}
function Jt(e, t, n = null, r = e) {
	let i = Xt(e, t), a = i && Zt(r, t);
	return a ? i.map(Yt).concat({
		type: t,
		attrs: n
	}).concat(a.map(Yt)) : null;
}
function Yt(e) {
	return {
		type: e,
		attrs: null
	};
}
function Xt(e, t) {
	let { parent: n, startIndex: r, endIndex: i } = e, a = n.contentMatchAt(r).findWrapping(t);
	if (!a) return null;
	let o = a.length ? a[0] : t;
	return n.canReplaceWith(r, i, o) ? a : null;
}
function Zt(e, t) {
	let { parent: n, startIndex: r, endIndex: i } = e, a = n.child(r), o = t.contentMatch.findWrapping(a.type);
	if (!o) return null;
	let s = (o.length ? o[o.length - 1] : t).contentMatch;
	for (let e = r; s && e < i; e++) s = s.matchType(n.child(e).type);
	return !s || !s.validEnd ? null : o;
}
function Qt(e, t, n) {
	let r = S.empty;
	for (let e = n.length - 1; e >= 0; e--) {
		if (r.size) {
			let t = n[e].type.contentMatch.matchFragment(r);
			if (!t || !t.validEnd) throw RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
		}
		r = S.from(n[e].type.create(n[e].attrs, r));
	}
	let i = t.start, a = t.end;
	e.step(new Bt(i, a, i, a, new w(r, 0, 0), n.length, !0));
}
function $t(e, t, n, r, i) {
	if (!r.isTextblock) throw RangeError("Type given to setBlockType should be a textblock");
	let a = e.steps.length;
	e.doc.nodesBetween(t, n, (t, n) => {
		let o = typeof i == "function" ? i(t) : i;
		if (t.isTextblock && !t.hasMarkup(r, o) && nn(e.doc, e.mapping.slice(a).map(n), r)) {
			let i = null;
			if (r.schema.linebreakReplacement) {
				let e = r.whitespace == "pre", t = !!r.contentMatch.matchType(r.schema.linebreakReplacement);
				e && !t ? i = !1 : !e && t && (i = !0);
			}
			i === !1 && tn(e, t, n, a), Wt(e, e.mapping.slice(a).map(n, 1), r, void 0, i === null);
			let s = e.mapping.slice(a), c = s.map(n, 1), l = s.map(n + t.nodeSize, 1);
			return e.step(new Bt(c, l, c + 1, l - 1, new w(S.from(r.create(o, null, t.marks)), 0, 0), 1, !0)), i === !0 && en(e, t, n, a), !1;
		}
	});
}
function en(e, t, n, r) {
	t.forEach((i, a) => {
		if (i.isText) {
			let o, s = /\r?\n|\r/g;
			for (; o = s.exec(i.text);) {
				let i = e.mapping.slice(r).map(n + 1 + a + o.index);
				e.replaceWith(i, i + 1, t.type.schema.linebreakReplacement.create());
			}
		}
	});
}
function tn(e, t, n, r) {
	t.forEach((i, a) => {
		if (i.type == i.type.schema.linebreakReplacement) {
			let i = e.mapping.slice(r).map(n + 1 + a);
			e.replaceWith(i, i + 1, t.type.schema.text("\n"));
		}
	});
}
function nn(e, t, n) {
	let r = e.resolve(t), i = r.index();
	return r.parent.canReplaceWith(i, i + 1, n);
}
function rn(e, t, n, r, i) {
	let a = e.doc.nodeAt(t);
	if (!a) throw RangeError("No node at given position");
	n ||= a.type;
	let o = n.create(r, null, i || a.marks);
	if (a.isLeaf) return e.replaceWith(t, t + a.nodeSize, o);
	if (!n.validContent(a.content)) throw RangeError("Invalid content for node type " + n.name);
	e.step(new Bt(t, t + a.nodeSize, t + 1, t + a.nodeSize - 1, new w(S.from(o), 0, 0), 1, !0));
}
function an(e, t, n = 1, r) {
	let i = e.resolve(t), a = i.depth - n, o = r && r[r.length - 1] || i.parent;
	if (a < 0 || i.parent.type.spec.isolating || !i.parent.canReplace(i.index(), i.parent.childCount) || !o.type.validContent(i.parent.content.cutByIndex(i.index(), i.parent.childCount))) return !1;
	for (let e = i.depth - 1, t = n - 2; e > a; e--, t--) {
		let n = i.node(e), a = i.index(e);
		if (n.type.spec.isolating) return !1;
		let o = n.content.cutByIndex(a, n.childCount), s = r && r[t + 1];
		s && (o = o.replaceChild(0, s.type.create(s.attrs)));
		let c = r && r[t] || n;
		if (!n.canReplace(a + 1, n.childCount) || !c.type.validContent(o)) return !1;
	}
	let s = i.indexAfter(a), c = r && r[0];
	return i.node(a).canReplaceWith(s, s, c ? c.type : i.node(a + 1).type);
}
function on(e, t, n = 1, r) {
	let i = e.doc.resolve(t), a = S.empty, o = S.empty;
	for (let e = i.depth, t = i.depth - n, s = n - 1; e > t; e--, s--) {
		a = S.from(i.node(e).copy(a));
		let t = r && r[s];
		o = S.from(t ? t.type.create(t.attrs, o) : i.node(e).copy(o));
	}
	e.step(new zt(t, t, new w(a.append(o), n, n), !0));
}
function sn(e, t) {
	let n = e.resolve(t), r = n.index();
	return ln(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1);
}
function cn(e, t) {
	t.content.size || e.type.compatibleContent(t.type);
	let n = e.contentMatchAt(e.childCount), { linebreakReplacement: r } = e.type.schema;
	for (let i = 0; i < t.childCount; i++) {
		let a = t.child(i), o = a.type == r ? e.type.schema.nodes.text : a.type;
		if (n = n.matchType(o), !n || !e.type.allowsMarks(a.marks)) return !1;
	}
	return n.validEnd;
}
function ln(e, t) {
	return !!(e && t && !e.isLeaf && cn(e, t));
}
function un(e, t, n = -1) {
	let r = e.resolve(t);
	for (let e = r.depth;; e--) {
		let i, a, o = r.index(e);
		if (e == r.depth ? (i = r.nodeBefore, a = r.nodeAfter) : n > 0 ? (i = r.node(e + 1), o++, a = r.node(e).maybeChild(o)) : (i = r.node(e).maybeChild(o - 1), a = r.node(e + 1)), i && !i.isTextblock && ln(i, a) && r.node(e).canReplace(o, o + 1)) return t;
		if (e == 0) break;
		t = n < 0 ? r.before(e) : r.after(e);
	}
}
function dn(e, t, n) {
	let r = null, { linebreakReplacement: i } = e.doc.type.schema, a = e.doc.resolve(t - n), o = a.node().type;
	if (i && o.inlineContent) {
		let e = o.whitespace == "pre", t = !!o.contentMatch.matchType(i);
		e && !t ? r = !1 : !e && t && (r = !0);
	}
	let s = e.steps.length;
	if (r === !1) {
		let r = e.doc.resolve(t + n);
		tn(e, r.node(), r.before(), s);
	}
	o.inlineContent && Wt(e, t + n - 1, o, a.node().contentMatchAt(a.index()), r == null);
	let c = e.mapping.slice(s), l = c.map(t - n);
	if (e.step(new zt(l, c.map(t + n, -1), w.empty, !0)), r === !0) {
		let t = e.doc.resolve(l);
		en(e, t.node(), t.before(), e.steps.length);
	}
	return e;
}
function fn(e, t, n) {
	let r = e.resolve(t);
	if (r.parent.canReplaceWith(r.index(), r.index(), n)) return t;
	if (r.parentOffset == 0) for (let e = r.depth - 1; e >= 0; e--) {
		let t = r.index(e);
		if (r.node(e).canReplaceWith(t, t, n)) return r.before(e + 1);
		if (t > 0) return null;
	}
	if (r.parentOffset == r.parent.content.size) for (let e = r.depth - 1; e >= 0; e--) {
		let t = r.indexAfter(e);
		if (r.node(e).canReplaceWith(t, t, n)) return r.after(e + 1);
		if (t < r.node(e).childCount) return null;
	}
	return null;
}
function pn(e, t, n) {
	let r = e.resolve(t);
	if (!n.content.size) return t;
	let i = n.content;
	for (let e = 0; e < n.openStart; e++) i = i.firstChild.content;
	for (let e = 1; e <= (n.openStart == 0 && n.size ? 2 : 1); e++) for (let t = r.depth; t >= 0; t--) {
		let n = t == r.depth ? 0 : r.pos <= (r.start(t + 1) + r.end(t + 1)) / 2 ? -1 : 1, a = r.index(t) + (n > 0 ? 1 : 0), o = r.node(t), s = !1;
		if (e == 1) s = o.canReplace(a, a, i);
		else {
			let e = o.contentMatchAt(a).findWrapping(i.firstChild.type);
			s = e && o.canReplaceWith(a, a, e[0]);
		}
		if (s) return n == 0 ? r.pos : n < 0 ? r.before(t + 1) : r.after(t + 1);
	}
	return null;
}
function mn(e, t, n = t, r = w.empty) {
	if (t == n && !r.size) return null;
	let i = e.resolve(t), a = e.resolve(n);
	return hn(i, a, r) ? new zt(t, n, r) : new gn(i, a, r).fit();
}
function hn(e, t, n) {
	return !n.openStart && !n.openEnd && e.start() == t.start() && e.parent.canReplace(e.index(), t.index(), n.content);
}
var gn = class {
	constructor(e, t, n) {
		this.$from = e, this.$to = t, this.unplaced = n, this.frontier = [], this.placed = S.empty;
		for (let t = 0; t <= e.depth; t++) {
			let n = e.node(t);
			this.frontier.push({
				type: n.type,
				match: n.contentMatchAt(e.indexAfter(t))
			});
		}
		for (let t = e.depth; t > 0; t--) this.placed = S.from(e.node(t).copy(this.placed));
	}
	get depth() {
		return this.frontier.length - 1;
	}
	fit() {
		for (; this.unplaced.size;) {
			let e = this.findFittable();
			e ? this.placeNodes(e) : this.openMore() || this.dropNode();
		}
		let e = this.mustMoveInline(), t = this.placed.size - this.depth - this.$from.depth, n = this.$from, r = this.close(e < 0 ? this.$to : n.doc.resolve(e));
		if (!r) return null;
		let i = this.placed, a = n.depth, o = r.depth;
		for (; a && o && i.childCount == 1;) i = i.firstChild.content, a--, o--;
		let s = new w(i, a, o);
		return e > -1 ? new Bt(n.pos, e, this.$to.pos, this.$to.end(), s, t) : s.size || n.pos != this.$to.pos ? new zt(n.pos, r.pos, s) : null;
	}
	findFittable() {
		let e = this.unplaced.openStart;
		for (let t = this.unplaced.content, n = 0, r = this.unplaced.openEnd; n < e; n++) {
			let i = t.firstChild;
			if (t.childCount > 1 && (r = 0), i.type.spec.isolating && r <= n) {
				e = n;
				break;
			}
			t = i.content;
		}
		for (let t = 1; t <= 2; t++) for (let n = t == 1 ? e : this.unplaced.openStart; n >= 0; n--) {
			let e, r = null;
			n ? (r = yn(this.unplaced.content, n - 1).firstChild, e = r.content) : e = this.unplaced.content;
			let i = e.firstChild;
			for (let e = this.depth; e >= 0; e--) {
				let { type: a, match: o } = this.frontier[e], s, c = null;
				if (t == 1 && (i ? o.matchType(i.type) || (c = o.fillBefore(S.from(i), !1)) : r && a.compatibleContent(r.type))) return {
					sliceDepth: n,
					frontierDepth: e,
					parent: r,
					inject: c
				};
				if (t == 2 && i && (s = o.findWrapping(i.type))) return {
					sliceDepth: n,
					frontierDepth: e,
					parent: r,
					wrap: s
				};
				if (r && o.matchType(r.type)) break;
			}
		}
	}
	openMore() {
		let { content: e, openStart: t, openEnd: n } = this.unplaced, r = yn(e, t);
		return !r.childCount || r.firstChild.isLeaf ? !1 : (this.unplaced = new w(e, t + 1, Math.max(n, r.size + t >= e.size - n ? t + 1 : 0)), !0);
	}
	dropNode() {
		let { content: e, openStart: t, openEnd: n } = this.unplaced, r = yn(e, t);
		if (r.childCount <= 1 && t > 0) {
			let i = e.size - t <= t + r.size;
			this.unplaced = new w(_n(e, t - 1, 1), t - 1, i ? t - 1 : n);
		} else this.unplaced = new w(_n(e, t, 1), t, n);
	}
	placeNodes({ sliceDepth: e, frontierDepth: t, parent: n, inject: r, wrap: i }) {
		for (; this.depth > t;) this.closeFrontierNode();
		if (i) for (let e = 0; e < i.length; e++) this.openFrontierNode(i[e]);
		let a = this.unplaced, o = n ? n.content : a.content, s = a.openStart - e, c = 0, l = [], { match: u, type: d } = this.frontier[t];
		if (r) {
			for (let e = 0; e < r.childCount; e++) l.push(r.child(e));
			u = u.matchFragment(r);
		}
		let f = o.size + e - (a.content.size - a.openEnd);
		for (; c < o.childCount;) {
			let e = o.child(c), t = u.matchType(e.type);
			if (!t) break;
			c++, (c > 1 || s == 0 || e.content.size) && (u = t, l.push(bn(e.mark(d.allowedMarks(e.marks)), c == 1 ? s : 0, c == o.childCount ? f : -1)));
		}
		let p = c == o.childCount;
		p || (f = -1), this.placed = vn(this.placed, t, S.from(l)), this.frontier[t].match = u, p && f < 0 && n && n.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
		for (let e = 0, t = o; e < f; e++) {
			let e = t.lastChild;
			this.frontier.push({
				type: e.type,
				match: e.contentMatchAt(e.childCount)
			}), t = e.content;
		}
		this.unplaced = p ? e == 0 ? w.empty : new w(_n(a.content, e - 1, 1), e - 1, f < 0 ? a.openEnd : e - 1) : new w(_n(a.content, e, c), a.openStart, a.openEnd);
	}
	mustMoveInline() {
		if (!this.$to.parent.isTextblock) return -1;
		let e = this.frontier[this.depth], t;
		if (!e.type.isTextblock || !xn(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth) return -1;
		let { depth: n } = this.$to, r = this.$to.after(n);
		for (; n > 1 && r == this.$to.end(--n);) ++r;
		return r;
	}
	findCloseLevel(e) {
		scan: for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
			let { match: n, type: r } = this.frontier[t], i = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)), a = xn(e, t, r, n, i);
			if (a) {
				for (let n = t - 1; n >= 0; n--) {
					let { match: t, type: r } = this.frontier[n], i = xn(e, n, r, t, !0);
					if (!i || i.childCount) continue scan;
				}
				return {
					depth: t,
					fit: a,
					move: i ? e.doc.resolve(e.after(t + 1)) : e
				};
			}
		}
	}
	close(e) {
		let t = this.findCloseLevel(e);
		if (!t) return null;
		for (; this.depth > t.depth;) this.closeFrontierNode();
		t.fit.childCount && (this.placed = vn(this.placed, t.depth, t.fit)), e = t.move;
		for (let n = t.depth + 1; n <= e.depth; n++) {
			let t = e.node(n), r = t.type.contentMatch.fillBefore(t.content, !0, e.index(n));
			this.openFrontierNode(t.type, t.attrs, r);
		}
		return e;
	}
	openFrontierNode(e, t = null, n) {
		let r = this.frontier[this.depth];
		r.match = r.match.matchType(e), this.placed = vn(this.placed, this.depth, S.from(e.create(t, n))), this.frontier.push({
			type: e,
			match: e.contentMatch
		});
	}
	closeFrontierNode() {
		let e = this.frontier.pop().match.fillBefore(S.empty, !0);
		e.childCount && (this.placed = vn(this.placed, this.frontier.length, e));
	}
};
function _n(e, t, n) {
	return t == 0 ? e.cutByIndex(n, e.childCount) : e.replaceChild(0, e.firstChild.copy(_n(e.firstChild.content, t - 1, n)));
}
function vn(e, t, n) {
	return t == 0 ? e.append(n) : e.replaceChild(e.childCount - 1, e.lastChild.copy(vn(e.lastChild.content, t - 1, n)));
}
function yn(e, t) {
	for (let n = 0; n < t; n++) e = e.firstChild.content;
	return e;
}
function bn(e, t, n) {
	if (t <= 0) return e;
	let r = e.content;
	return t > 1 && (r = r.replaceChild(0, bn(r.firstChild, t - 1, r.childCount == 1 ? n - 1 : 0))), t > 0 && (r = e.type.contentMatch.fillBefore(r).append(r), n <= 0 && (r = r.append(e.type.contentMatch.matchFragment(r).fillBefore(S.empty, !0)))), e.copy(r);
}
function xn(e, t, n, r, i) {
	let a = e.node(t), o = i ? e.indexAfter(t) : e.index(t);
	if (o == a.childCount && !n.compatibleContent(a.type)) return null;
	let s = r.fillBefore(a.content, !0, o);
	return s && !Sn(n, a.content, o) ? s : null;
}
function Sn(e, t, n) {
	for (let r = n; r < t.childCount; r++) if (!e.allowsMarks(t.child(r).marks)) return !0;
	return !1;
}
function Cn(e) {
	return e.spec.defining || e.spec.definingForContent;
}
function wn(e, t, n, r) {
	if (!r.size) return e.deleteRange(t, n);
	let i = e.doc.resolve(t), a = e.doc.resolve(n);
	if (hn(i, a, r)) return e.step(new zt(t, n, r));
	let o = On(i, a);
	o[o.length - 1] == 0 && o.pop();
	let s = -(i.depth + 1);
	o.unshift(s);
	for (let e = i.depth, t = i.pos - 1; e > 0; e--, t--) {
		let n = i.node(e).type.spec;
		if (n.defining || n.definingAsContext || n.isolating) break;
		o.indexOf(e) > -1 ? s = e : i.before(e) == t && o.splice(1, 0, -e);
	}
	let c = o.indexOf(s), l = [], u = r.openStart;
	for (let e = r.content, t = 0;; t++) {
		let n = e.firstChild;
		if (l.push(n), t == r.openStart) break;
		e = n.content;
	}
	for (let e = u - 1; e >= 0; e--) {
		let t = l[e], n = Cn(t.type);
		if (n && !t.sameMarkup(i.node(Math.abs(s) - 1))) u = e;
		else if (n || !t.type.isTextblock) break;
	}
	for (let t = r.openStart; t >= 0; t--) {
		let s = (t + u + 1) % (r.openStart + 1), d = l[s];
		if (d) for (let t = 0; t < o.length; t++) {
			let l = o[(t + c) % o.length], u = !0;
			l < 0 && (u = !1, l = -l);
			let f = i.node(l - 1), p = i.index(l - 1);
			if (f.canReplaceWith(p, p, d.type, d.marks)) return e.replace(i.before(l), u ? a.after(l) : n, new w(Tn(r.content, 0, r.openStart, s), s, r.openEnd));
		}
	}
	let d = e.steps.length;
	for (let s = o.length - 1; s >= 0 && (e.replace(t, n, r), !(e.steps.length > d)); s--) {
		let e = o[s];
		e < 0 || (t = i.before(e), n = a.after(e));
	}
}
function Tn(e, t, n, r, i) {
	if (t < n) {
		let i = e.firstChild;
		e = e.replaceChild(0, i.copy(Tn(i.content, t + 1, n, r, i)));
	}
	if (t > r) {
		let t = i.contentMatchAt(0), n = t.fillBefore(e).append(e);
		e = n.append(t.matchFragment(n).fillBefore(S.empty, !0));
	}
	return e;
}
function En(e, t, n, r) {
	if (!r.isInline && t == n && e.doc.resolve(t).parent.content.size) {
		let i = fn(e.doc, t, r.type);
		i != null && (t = n = i);
	}
	e.replaceRange(t, n, new w(S.from(r), 0, 0));
}
function Dn(e, t, n) {
	let r = e.doc.resolve(t), i = e.doc.resolve(n), a = On(r, i);
	for (let t = 0; t < a.length; t++) {
		let n = a[t], o = t == a.length - 1;
		if (o && n == 0 || r.node(n).type.contentMatch.validEnd) return e.delete(r.start(n), i.end(n));
		if (n > 0 && (o || r.node(n - 1).canReplace(r.index(n - 1), i.indexAfter(n - 1)))) return e.delete(r.before(n), i.after(n));
	}
	for (let a = 1; a <= r.depth && a <= i.depth; a++) if (t - r.start(a) == r.depth - a && n > r.end(a) && i.end(a) - n != i.depth - a && r.start(a - 1) == i.start(a - 1) && r.node(a - 1).canReplace(r.index(a - 1), i.index(a - 1))) return e.delete(r.before(a), n);
	e.delete(t, n);
}
function On(e, t) {
	let n = [], r = Math.min(e.depth, t.depth);
	for (let i = r; i >= 0; i--) {
		let r = e.start(i);
		if (r < e.pos - (e.depth - i) || t.end(i) > t.pos + (t.depth - i) || e.node(i).type.spec.isolating || t.node(i).type.spec.isolating) break;
		(r == t.start(i) || i == e.depth && i == t.depth && e.parent.inlineContent && t.parent.inlineContent && i && t.start(i - 1) == r - 1) && n.push(i);
	}
	return n;
}
var kn = class e extends T {
	constructor(e, t, n) {
		super(), this.pos = e, this.attr = t, this.value = n;
	}
	apply(e) {
		let t = e.nodeAt(this.pos);
		if (!t) return E.fail("No node at attribute step's position");
		let n = Object.create(null);
		for (let e in t.attrs) n[e] = t.attrs[e];
		n[this.attr] = this.value;
		let r = t.type.create(n, null, t.marks);
		return E.fromReplace(e, this.pos, this.pos + 1, new w(S.from(r), 0, t.isLeaf ? 0 : 1));
	}
	getMap() {
		return jt.empty;
	}
	invert(t) {
		return new e(this.pos, this.attr, t.nodeAt(this.pos).attrs[this.attr]);
	}
	map(t) {
		let n = t.mapResult(this.pos, 1);
		return n.deletedAfter ? null : new e(n.pos, this.attr, this.value);
	}
	toJSON() {
		return {
			stepType: "attr",
			pos: this.pos,
			attr: this.attr,
			value: this.value
		};
	}
	static fromJSON(t, n) {
		if (typeof n.pos != "number" || typeof n.attr != "string") throw RangeError("Invalid input for AttrStep.fromJSON");
		return new e(n.pos, n.attr, n.value);
	}
};
T.jsonID("attr", kn);
var An = class e extends T {
	constructor(e, t) {
		super(), this.attr = e, this.value = t;
	}
	apply(e) {
		let t = Object.create(null);
		for (let n in e.attrs) t[n] = e.attrs[n];
		t[this.attr] = this.value;
		let n = e.type.create(t, e.content, e.marks);
		return E.ok(n);
	}
	getMap() {
		return jt.empty;
	}
	invert(t) {
		return new e(this.attr, t.attrs[this.attr]);
	}
	map(e) {
		return this;
	}
	toJSON() {
		return {
			stepType: "docAttr",
			attr: this.attr,
			value: this.value
		};
	}
	static fromJSON(t, n) {
		if (typeof n.attr != "string") throw RangeError("Invalid input for DocAttrStep.fromJSON");
		return new e(n.attr, n.value);
	}
};
T.jsonID("docAttr", An);
var jn = class extends Error {};
jn = function e(t) {
	let n = Error.call(this, t);
	return n.__proto__ = e.prototype, n;
}, jn.prototype = Object.create(Error.prototype), jn.prototype.constructor = jn, jn.prototype.name = "TransformError";
var Mn = class {
	constructor(e) {
		this.doc = e, this.steps = [], this.docs = [], this.mapping = new Mt();
	}
	get before() {
		return this.docs.length ? this.docs[0] : this.doc;
	}
	step(e) {
		let t = this.maybeStep(e);
		if (t.failed) throw new jn(t.failed);
		return this;
	}
	maybeStep(e) {
		let t = e.apply(this.doc);
		return t.failed || this.addStep(e, t.doc), t;
	}
	get docChanged() {
		return this.steps.length > 0;
	}
	changedRange() {
		let e = 1e9, t = -1e9;
		for (let n = 0; n < this.mapping.maps.length; n++) {
			let r = this.mapping.maps[n];
			n && (e = r.map(e, 1), t = r.map(t, -1)), r.forEach((n, r, i, a) => {
				e = Math.min(e, i), t = Math.max(t, a);
			});
		}
		return e == 1e9 ? null : {
			from: e,
			to: t
		};
	}
	addStep(e, t) {
		this.docs.push(this.doc), this.steps.push(e), this.mapping.appendMap(e.getMap()), this.doc = t;
	}
	replace(e, t = e, n = w.empty) {
		let r = mn(this.doc, e, t, n);
		return r && this.step(r), this;
	}
	replaceWith(e, t, n) {
		return this.replace(e, t, new w(S.from(n), 0, 0));
	}
	delete(e, t) {
		return this.replace(e, t, w.empty);
	}
	insert(e, t) {
		return this.replaceWith(e, e, t);
	}
	replaceRange(e, t, n) {
		return wn(this, e, t, n), this;
	}
	replaceRangeWith(e, t, n) {
		return En(this, e, t, n), this;
	}
	deleteRange(e, t) {
		return Dn(this, e, t), this;
	}
	lift(e, t) {
		return qt(this, e, t), this;
	}
	join(e, t = 1) {
		return dn(this, e, t), this;
	}
	wrap(e, t) {
		return Qt(this, e, t), this;
	}
	setBlockType(e, t = e, n, r = null) {
		return $t(this, e, t, n, r), this;
	}
	setNodeMarkup(e, t, n = null, r) {
		return rn(this, e, t, n, r), this;
	}
	setNodeAttribute(e, t, n) {
		return this.step(new kn(e, t, n)), this;
	}
	setDocAttribute(e, t) {
		return this.step(new An(e, t)), this;
	}
	addNodeMark(e, t) {
		return this.step(new Lt(e, t)), this;
	}
	removeNodeMark(e, t) {
		let n = this.doc.nodeAt(e);
		if (!n) throw RangeError("No node at position " + e);
		if (t instanceof C) t.isInSet(n.marks) && this.step(new Rt(e, t));
		else {
			let r = n.marks, i, a = [];
			for (; i = t.isInSet(r);) a.push(new Rt(e, i)), r = i.removeFromSet(r);
			for (let e = a.length - 1; e >= 0; e--) this.step(a[e]);
		}
		return this;
	}
	split(e, t = 1, n) {
		return on(this, e, t, n), this;
	}
	addMark(e, t, n) {
		return Ht(this, e, t, n), this;
	}
	removeMark(e, t, n) {
		return Ut(this, e, t, n), this;
	}
	clearIncompatible(e, t, n) {
		return Wt(this, e, t, n), this;
	}
}, Nn = Object.create(null), D = class {
	constructor(e, t, n) {
		this.$anchor = e, this.$head = t, this.ranges = n || [new Pn(e.min(t), e.max(t))];
	}
	get anchor() {
		return this.$anchor.pos;
	}
	get head() {
		return this.$head.pos;
	}
	get from() {
		return this.$from.pos;
	}
	get to() {
		return this.$to.pos;
	}
	get $from() {
		return this.ranges[0].$from;
	}
	get $to() {
		return this.ranges[0].$to;
	}
	get empty() {
		let e = this.ranges;
		for (let t = 0; t < e.length; t++) if (e[t].$from.pos != e[t].$to.pos) return !1;
		return !0;
	}
	content() {
		return this.$from.doc.slice(this.from, this.to, !0);
	}
	replace(e, t = w.empty) {
		let n = t.content.lastChild, r = null;
		for (let e = 0; e < t.openEnd; e++) r = n, n = n.lastChild;
		let i = e.steps.length, a = this.ranges;
		for (let o = 0; o < a.length; o++) {
			let { $from: s, $to: c } = a[o], l = e.mapping.slice(i);
			e.replaceRange(l.map(s.pos), l.map(c.pos), o ? w.empty : t), o == 0 && Hn(e, i, (n ? n.isInline : r && r.isTextblock) ? -1 : 1);
		}
	}
	replaceWith(e, t) {
		let n = e.steps.length, r = this.ranges;
		for (let i = 0; i < r.length; i++) {
			let { $from: a, $to: o } = r[i], s = e.mapping.slice(n), c = s.map(a.pos), l = s.map(o.pos);
			i ? e.deleteRange(c, l) : (e.replaceRangeWith(c, l, t), Hn(e, n, t.isInline ? -1 : 1));
		}
	}
	static findFrom(e, t, n = !1) {
		let r = e.parent.inlineContent ? new O(e) : Vn(e.node(0), e.parent, e.pos, e.index(), t, n);
		if (r) return r;
		for (let r = e.depth - 1; r >= 0; r--) {
			let i = t < 0 ? Vn(e.node(0), e.node(r), e.before(r + 1), e.index(r), t, n) : Vn(e.node(0), e.node(r), e.after(r + 1), e.index(r) + 1, t, n);
			if (i) return i;
		}
		return null;
	}
	static near(e, t = 1) {
		return this.findFrom(e, t) || this.findFrom(e, -t) || new zn(e.node(0));
	}
	static atStart(e) {
		return Vn(e, e, 0, 0, 1) || new zn(e);
	}
	static atEnd(e) {
		return Vn(e, e, e.content.size, e.childCount, -1) || new zn(e);
	}
	static fromJSON(e, t) {
		if (!t || !t.type) throw RangeError("Invalid input for Selection.fromJSON");
		let n = Nn[t.type];
		if (!n) throw RangeError(`No selection type ${t.type} defined`);
		return n.fromJSON(e, t);
	}
	static jsonID(e, t) {
		if (e in Nn) throw RangeError("Duplicate use of selection JSON ID " + e);
		return Nn[e] = t, t.prototype.jsonID = e, t;
	}
	getBookmark() {
		return O.between(this.$anchor, this.$head).getBookmark();
	}
};
D.prototype.visible = !0;
var Pn = class {
	constructor(e, t) {
		this.$from = e, this.$to = t;
	}
}, Fn = !1;
function In(e) {
	!Fn && !e.parent.inlineContent && (Fn = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + e.parent.type.name + ")"));
}
var O = class e extends D {
	constructor(e, t = e) {
		In(e), In(t), super(e, t);
	}
	get $cursor() {
		return this.$anchor.pos == this.$head.pos ? this.$head : null;
	}
	map(t, n) {
		let r = t.resolve(n.map(this.head));
		if (!r.parent.inlineContent) return D.near(r);
		let i = t.resolve(n.map(this.anchor));
		return new e(i.parent.inlineContent ? i : r, r);
	}
	replace(e, t = w.empty) {
		if (super.replace(e, t), t == w.empty) {
			let t = this.$from.marksAcross(this.$to);
			t && e.ensureMarks(t);
		}
	}
	eq(t) {
		return t instanceof e && t.anchor == this.anchor && t.head == this.head;
	}
	getBookmark() {
		return new Ln(this.anchor, this.head);
	}
	toJSON() {
		return {
			type: "text",
			anchor: this.anchor,
			head: this.head
		};
	}
	static fromJSON(t, n) {
		if (typeof n.anchor != "number" || typeof n.head != "number") throw RangeError("Invalid input for TextSelection.fromJSON");
		return new e(t.resolve(n.anchor), t.resolve(n.head));
	}
	static create(e, t, n = t) {
		let r = e.resolve(t);
		return new this(r, n == t ? r : e.resolve(n));
	}
	static between(t, n, r) {
		let i = t.pos - n.pos;
		if ((!r || i) && (r = i >= 0 ? 1 : -1), !n.parent.inlineContent) {
			let e = D.findFrom(n, r, !0) || D.findFrom(n, -r, !0);
			if (e) n = e.$head;
			else return D.near(n, r);
		}
		return t.parent.inlineContent || (i == 0 ? t = n : (t = (D.findFrom(t, -r, !0) || D.findFrom(t, r, !0)).$anchor, t.pos < n.pos != i < 0 && (t = n))), new e(t, n);
	}
};
D.jsonID("text", O);
var Ln = class e {
	constructor(e, t) {
		this.anchor = e, this.head = t;
	}
	map(t) {
		return new e(t.map(this.anchor), t.map(this.head));
	}
	resolve(e) {
		return O.between(e.resolve(this.anchor), e.resolve(this.head));
	}
}, k = class e extends D {
	constructor(e) {
		let t = e.nodeAfter, n = e.node(0).resolve(e.pos + t.nodeSize);
		super(e, n), this.node = t;
	}
	map(t, n) {
		let { deleted: r, pos: i } = n.mapResult(this.anchor), a = t.resolve(i);
		return r ? D.near(a) : new e(a);
	}
	content() {
		return new w(S.from(this.node), 0, 0);
	}
	eq(t) {
		return t instanceof e && t.anchor == this.anchor;
	}
	toJSON() {
		return {
			type: "node",
			anchor: this.anchor
		};
	}
	getBookmark() {
		return new Rn(this.anchor);
	}
	static fromJSON(t, n) {
		if (typeof n.anchor != "number") throw RangeError("Invalid input for NodeSelection.fromJSON");
		return new e(t.resolve(n.anchor));
	}
	static create(t, n) {
		return new e(t.resolve(n));
	}
	static isSelectable(e) {
		return !e.isText && e.type.spec.selectable !== !1;
	}
};
k.prototype.visible = !1, D.jsonID("node", k);
var Rn = class e {
	constructor(e) {
		this.anchor = e;
	}
	map(t) {
		let { deleted: n, pos: r } = t.mapResult(this.anchor);
		return n ? new Ln(r, r) : new e(r);
	}
	resolve(e) {
		let t = e.resolve(this.anchor), n = t.nodeAfter;
		return n && k.isSelectable(n) ? new k(t) : D.near(t);
	}
}, zn = class e extends D {
	constructor(e) {
		super(e.resolve(0), e.resolve(e.content.size));
	}
	replace(e, t = w.empty) {
		if (t == w.empty) {
			e.delete(0, e.doc.content.size);
			let t = D.atStart(e.doc);
			t.eq(e.selection) || e.setSelection(t);
		} else super.replace(e, t);
	}
	toJSON() {
		return { type: "all" };
	}
	static fromJSON(t) {
		return new e(t);
	}
	map(t) {
		return new e(t);
	}
	eq(t) {
		return t instanceof e;
	}
	getBookmark() {
		return Bn;
	}
};
D.jsonID("all", zn);
var Bn = {
	map() {
		return this;
	},
	resolve(e) {
		return new zn(e);
	}
};
function Vn(e, t, n, r, i, a = !1) {
	if (t.inlineContent) return O.create(e, n);
	for (let o = r - (i > 0 ? 0 : 1); i > 0 ? o < t.childCount : o >= 0; o += i) {
		let r = t.child(o);
		if (!r.isAtom) {
			let t = Vn(e, r, n + i, i < 0 ? r.childCount : 0, i, a);
			if (t) return t;
		} else if (!a && k.isSelectable(r)) return k.create(e, n - (i < 0 ? r.nodeSize : 0));
		n += r.nodeSize * i;
	}
	return null;
}
function Hn(e, t, n) {
	let r = e.steps.length - 1;
	if (r < t) return;
	let i = e.steps[r];
	if (!(i instanceof zt || i instanceof Bt)) return;
	let a = e.mapping.maps[r], o;
	a.forEach((e, t, n, r) => {
		o ??= r;
	}), e.setSelection(D.near(e.doc.resolve(o), n));
}
var Un = 1, Wn = 2, Gn = 4, Kn = class extends Mn {
	constructor(e) {
		super(e.doc), this.curSelectionFor = 0, this.updated = 0, this.meta = Object.create(null), this.time = Date.now(), this.curSelection = e.selection, this.storedMarks = e.storedMarks;
	}
	get selection() {
		return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection;
	}
	setSelection(e) {
		if (e.$from.doc != this.doc) throw RangeError("Selection passed to setSelection must point at the current document");
		return this.curSelection = e, this.curSelectionFor = this.steps.length, this.updated = (this.updated | Un) & ~Wn, this.storedMarks = null, this;
	}
	get selectionSet() {
		return (this.updated & Un) > 0;
	}
	setStoredMarks(e) {
		return this.storedMarks = e, this.updated |= Wn, this;
	}
	ensureMarks(e) {
		return C.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e), this;
	}
	addStoredMark(e) {
		return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks()));
	}
	removeStoredMark(e) {
		return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks()));
	}
	get storedMarksSet() {
		return (this.updated & Wn) > 0;
	}
	addStep(e, t) {
		super.addStep(e, t), this.updated &= ~Wn, this.storedMarks = null;
	}
	setTime(e) {
		return this.time = e, this;
	}
	replaceSelection(e) {
		return this.selection.replace(this, e), this;
	}
	replaceSelectionWith(e, t = !0) {
		let n = this.selection;
		return t && (e = e.mark(this.storedMarks || (n.empty ? n.$from.marks() : n.$from.marksAcross(n.$to) || C.none))), n.replaceWith(this, e), this;
	}
	deleteSelection() {
		return this.selection.replace(this), this;
	}
	insertText(e, t, n) {
		let r = this.doc.type.schema;
		if (t == null) return e ? this.replaceSelectionWith(r.text(e), !0) : this.deleteSelection();
		{
			if (n ??= t, !e) return this.deleteRange(t, n);
			let i = this.storedMarks;
			if (!i) {
				let e = this.doc.resolve(t);
				i = n == t ? e.marks() : e.marksAcross(this.doc.resolve(n));
			}
			return this.replaceRangeWith(t, n, r.text(e, i)), !this.selection.empty && this.selection.to == t + e.length && this.setSelection(D.near(this.selection.$to)), this;
		}
	}
	setMeta(e, t) {
		return this.meta[typeof e == "string" ? e : e.key] = t, this;
	}
	getMeta(e) {
		return this.meta[typeof e == "string" ? e : e.key];
	}
	get isGeneric() {
		for (let e in this.meta) return !1;
		return !0;
	}
	scrollIntoView() {
		return this.updated |= Gn, this;
	}
	get scrolledIntoView() {
		return (this.updated & Gn) > 0;
	}
};
function qn(e, t) {
	return !t || !e ? e : e.bind(t);
}
var Jn = class {
	constructor(e, t, n) {
		this.name = e, this.init = qn(t.init, n), this.apply = qn(t.apply, n);
	}
}, Yn = [
	new Jn("doc", {
		init(e) {
			return e.doc || e.schema.topNodeType.createAndFill();
		},
		apply(e) {
			return e.doc;
		}
	}),
	new Jn("selection", {
		init(e, t) {
			return e.selection || D.atStart(t.doc);
		},
		apply(e) {
			return e.selection;
		}
	}),
	new Jn("storedMarks", {
		init(e) {
			return e.storedMarks || null;
		},
		apply(e, t, n, r) {
			return r.selection.$cursor ? e.storedMarks : null;
		}
	}),
	new Jn("scrollToSelection", {
		init() {
			return 0;
		},
		apply(e, t) {
			return e.scrolledIntoView ? t + 1 : t;
		}
	})
], Xn = class {
	constructor(e, t) {
		this.schema = e, this.plugins = [], this.pluginsByKey = Object.create(null), this.fields = Yn.slice(), t && t.forEach((e) => {
			if (this.pluginsByKey[e.key]) throw RangeError("Adding different instances of a keyed plugin (" + e.key + ")");
			this.plugins.push(e), this.pluginsByKey[e.key] = e, e.spec.state && this.fields.push(new Jn(e.key, e.spec.state, e));
		});
	}
}, Zn = class e {
	constructor(e) {
		this.config = e;
	}
	get schema() {
		return this.config.schema;
	}
	get plugins() {
		return this.config.plugins;
	}
	apply(e) {
		return this.applyTransaction(e).state;
	}
	filterTransaction(e, t = -1) {
		for (let n = 0; n < this.config.plugins.length; n++) if (n != t) {
			let t = this.config.plugins[n];
			if (t.spec.filterTransaction && !t.spec.filterTransaction.call(t, e, this)) return !1;
		}
		return !0;
	}
	applyTransaction(e) {
		if (!this.filterTransaction(e)) return {
			state: this,
			transactions: []
		};
		let t = [e], n = this.applyInner(e), r = null;
		for (;;) {
			let i = !1;
			for (let a = 0; a < this.config.plugins.length; a++) {
				let o = this.config.plugins[a];
				if (o.spec.appendTransaction) {
					let s = r ? r[a].n : 0, c = r ? r[a].state : this, l = s < t.length && o.spec.appendTransaction.call(o, s ? t.slice(s) : t, c, n);
					if (l && n.filterTransaction(l, a)) {
						if (l.setMeta("appendedTransaction", e), !r) {
							r = [];
							for (let e = 0; e < this.config.plugins.length; e++) r.push(e < a ? {
								state: n,
								n: t.length
							} : {
								state: this,
								n: 0
							});
						}
						t.push(l), n = n.applyInner(l), i = !0;
					}
					r && (r[a] = {
						state: n,
						n: t.length
					});
				}
			}
			if (!i) return {
				state: n,
				transactions: t
			};
		}
	}
	applyInner(t) {
		if (!t.before.eq(this.doc)) throw RangeError("Applying a mismatched transaction");
		let n = new e(this.config), r = this.config.fields;
		for (let e = 0; e < r.length; e++) {
			let i = r[e];
			n[i.name] = i.apply(t, this[i.name], this, n);
		}
		return n;
	}
	get tr() {
		return new Kn(this);
	}
	static create(t) {
		let n = new Xn(t.doc ? t.doc.type.schema : t.schema, t.plugins), r = new e(n);
		for (let e = 0; e < n.fields.length; e++) r[n.fields[e].name] = n.fields[e].init(t, r);
		return r;
	}
	reconfigure(t) {
		let n = new Xn(this.schema, t.plugins), r = n.fields, i = new e(n);
		for (let e = 0; e < r.length; e++) {
			let n = r[e].name;
			i[n] = this.hasOwnProperty(n) ? this[n] : r[e].init(t, i);
		}
		return i;
	}
	toJSON(e) {
		let t = {
			doc: this.doc.toJSON(),
			selection: this.selection.toJSON()
		};
		if (this.storedMarks && (t.storedMarks = this.storedMarks.map((e) => e.toJSON())), e && typeof e == "object") for (let n in e) {
			if (n == "doc" || n == "selection") throw RangeError("The JSON fields `doc` and `selection` are reserved");
			let r = e[n], i = r.spec.state;
			i && i.toJSON && (t[n] = i.toJSON.call(r, this[r.key]));
		}
		return t;
	}
	static fromJSON(t, n, r) {
		if (!n) throw RangeError("Invalid input for EditorState.fromJSON");
		if (!t.schema) throw RangeError("Required config field 'schema' missing");
		let i = new Xn(t.schema, t.plugins), a = new e(i);
		return i.fields.forEach((e) => {
			if (e.name == "doc") a.doc = Te.fromJSON(t.schema, n.doc);
			else if (e.name == "selection") a.selection = D.fromJSON(a.doc, n.selection);
			else if (e.name == "storedMarks") n.storedMarks && (a.storedMarks = n.storedMarks.map(t.schema.markFromJSON));
			else {
				if (r) for (let i in r) {
					let o = r[i], s = o.spec.state;
					if (o.key == e.name && s && s.fromJSON && Object.prototype.hasOwnProperty.call(n, i)) {
						a[e.name] = s.fromJSON.call(o, t, n[i], a);
						return;
					}
				}
				a[e.name] = e.init(t, a);
			}
		}), a;
	}
};
function Qn(e, t, n) {
	for (let r in e) {
		let i = e[r];
		i instanceof Function ? i = i.bind(t) : r == "handleDOMEvents" && (i = Qn(i, t, {})), n[r] = i;
	}
	return n;
}
var A = class {
	constructor(e) {
		this.spec = e, this.props = {}, e.props && Qn(e.props, this, this.props), this.key = e.key ? e.key.key : er("plugin");
	}
	getState(e) {
		return e[this.key];
	}
}, $n = Object.create(null);
function er(e) {
	return e in $n ? e + "$" + ++$n[e] : ($n[e] = 0, e + "$");
}
var j = class {
	constructor(e = "key") {
		this.key = er(e);
	}
	get(e) {
		return e.config.pluginsByKey[this.key];
	}
	getState(e) {
		return e[this.key];
	}
}, tr = (e, t) => e.selection.empty ? !1 : (t && t(e.tr.deleteSelection().scrollIntoView()), !0);
function nr(e, t) {
	let { $cursor: n } = e.selection;
	return !n || (t ? !t.endOfTextblock("backward", e) : n.parentOffset > 0) ? null : n;
}
var rr = (e, t, n) => {
	let r = nr(e, n);
	if (!r) return !1;
	let i = lr(r);
	if (!i) {
		let n = r.blockRange(), i = n && Kt(n);
		return i == null ? !1 : (t && t(e.tr.lift(n, i).scrollIntoView()), !0);
	}
	let a = i.nodeBefore;
	if (Dr(e, i, t, -1)) return !0;
	if (r.parent.content.size == 0 && (sr(a, "end") || k.isSelectable(a))) for (let n = r.depth;; n--) {
		let o = mn(e.doc, r.before(n), r.after(n), w.empty);
		if (o && o.slice.size < o.to - o.from) {
			if (t) {
				let n = e.tr.step(o);
				n.setSelection(sr(a, "end") ? D.findFrom(n.doc.resolve(n.mapping.map(i.pos, -1)), -1) : k.create(n.doc, i.pos - a.nodeSize)), t(n.scrollIntoView());
			}
			return !0;
		}
		if (n == 1 || r.node(n - 1).childCount > 1) break;
	}
	return a.isAtom && i.depth == r.depth - 1 ? (t && t(e.tr.delete(i.pos - a.nodeSize, i.pos).scrollIntoView()), !0) : !1;
}, ir = (e, t, n) => {
	let r = nr(e, n);
	if (!r) return !1;
	let i = lr(r);
	return i ? or(e, i, t) : !1;
}, ar = (e, t, n) => {
	let r = ur(e, n);
	if (!r) return !1;
	let i = pr(r);
	return i ? or(e, i, t) : !1;
};
function or(e, t, n) {
	let r = t.nodeBefore, i = t.pos - 1;
	for (; !r.isTextblock; i--) {
		if (r.type.spec.isolating) return !1;
		let e = r.lastChild;
		if (!e) return !1;
		r = e;
	}
	let a = t.nodeAfter, o = t.pos + 1;
	for (; !a.isTextblock; o++) {
		if (a.type.spec.isolating) return !1;
		let e = a.firstChild;
		if (!e) return !1;
		a = e;
	}
	let s = mn(e.doc, i, o, w.empty);
	if (!s || s.from != i || s instanceof zt && s.slice.size >= o - i) return !1;
	if (n) {
		let t = e.tr.step(s);
		t.setSelection(O.create(t.doc, i)), n(t.scrollIntoView());
	}
	return !0;
}
function sr(e, t, n = !1) {
	for (let r = e; r; r = t == "start" ? r.firstChild : r.lastChild) {
		if (r.isTextblock) return !0;
		if (n && r.childCount != 1) return !1;
	}
	return !1;
}
var cr = (e, t, n) => {
	let { $head: r, empty: i } = e.selection, a = r;
	if (!i) return !1;
	if (r.parent.isTextblock) {
		if (n ? !n.endOfTextblock("backward", e) : r.parentOffset > 0) return !1;
		a = lr(r);
	}
	let o = a && a.nodeBefore;
	return !o || !k.isSelectable(o) ? !1 : (t && t(e.tr.setSelection(k.create(e.doc, a.pos - o.nodeSize)).scrollIntoView()), !0);
};
function lr(e) {
	if (!e.parent.type.spec.isolating) for (let t = e.depth - 1; t >= 0; t--) {
		if (e.index(t) > 0) return e.doc.resolve(e.before(t + 1));
		if (e.node(t).type.spec.isolating) break;
	}
	return null;
}
function ur(e, t) {
	let { $cursor: n } = e.selection;
	return !n || (t ? !t.endOfTextblock("forward", e) : n.parentOffset < n.parent.content.size) ? null : n;
}
var dr = (e, t, n) => {
	let r = ur(e, n);
	if (!r) return !1;
	let i = pr(r);
	if (!i) return !1;
	let a = i.nodeAfter;
	if (Dr(e, i, t, 1)) return !0;
	if (r.parent.content.size == 0 && (sr(a, "start") || k.isSelectable(a))) {
		let n = mn(e.doc, r.before(), r.after(), w.empty);
		if (n && n.slice.size < n.to - n.from) {
			if (t) {
				let r = e.tr.step(n);
				r.setSelection(sr(a, "start") ? D.findFrom(r.doc.resolve(r.mapping.map(i.pos)), 1) : k.create(r.doc, r.mapping.map(i.pos))), t(r.scrollIntoView());
			}
			return !0;
		}
	}
	return a.isAtom && i.depth == r.depth - 1 ? (t && t(e.tr.delete(i.pos, i.pos + a.nodeSize).scrollIntoView()), !0) : !1;
}, fr = (e, t, n) => {
	let { $head: r, empty: i } = e.selection, a = r;
	if (!i) return !1;
	if (r.parent.isTextblock) {
		if (n ? !n.endOfTextblock("forward", e) : r.parentOffset < r.parent.content.size) return !1;
		a = pr(r);
	}
	let o = a && a.nodeAfter;
	return !o || !k.isSelectable(o) ? !1 : (t && t(e.tr.setSelection(k.create(e.doc, a.pos)).scrollIntoView()), !0);
};
function pr(e) {
	if (!e.parent.type.spec.isolating) for (let t = e.depth - 1; t >= 0; t--) {
		let n = e.node(t);
		if (e.index(t) + 1 < n.childCount) return e.doc.resolve(e.after(t + 1));
		if (n.type.spec.isolating) break;
	}
	return null;
}
var mr = (e, t) => {
	let n = e.selection, r = n instanceof k, i;
	if (r) {
		if (n.node.isTextblock || !sn(e.doc, n.from)) return !1;
		i = n.from;
	} else if (i = un(e.doc, n.from, -1), i == null) return !1;
	if (t) {
		let n = e.tr.join(i);
		r && n.setSelection(k.create(n.doc, i - e.doc.resolve(i).nodeBefore.nodeSize)), t(n.scrollIntoView());
	}
	return !0;
}, hr = (e, t) => {
	let n = e.selection, r;
	if (n instanceof k) {
		if (n.node.isTextblock || !sn(e.doc, n.to)) return !1;
		r = n.to;
	} else if (r = un(e.doc, n.to, 1), r == null) return !1;
	return t && t(e.tr.join(r).scrollIntoView()), !0;
}, gr = (e, t) => {
	let { $from: n, $to: r } = e.selection, i = n.blockRange(r), a = i && Kt(i);
	return a == null ? !1 : (t && t(e.tr.lift(i, a).scrollIntoView()), !0);
}, _r = (e, t) => {
	let { $head: n, $anchor: r } = e.selection;
	return !n.parent.type.spec.code || !n.sameParent(r) ? !1 : (t && t(e.tr.insertText("\n").scrollIntoView()), !0);
};
function vr(e) {
	for (let t = 0; t < e.edgeCount; t++) {
		let { type: n } = e.edge(t);
		if (n.isTextblock && !n.hasRequiredAttrs()) return n;
	}
	return null;
}
var yr = (e, t) => {
	let { $head: n, $anchor: r } = e.selection;
	if (!n.parent.type.spec.code || !n.sameParent(r)) return !1;
	let i = n.node(-1), a = n.indexAfter(-1), o = vr(i.contentMatchAt(a));
	if (!o || !i.canReplaceWith(a, a, o)) return !1;
	if (t) {
		let r = n.after(), i = e.tr.replaceWith(r, r, o.createAndFill());
		i.setSelection(D.near(i.doc.resolve(r), 1)), t(i.scrollIntoView());
	}
	return !0;
}, br = (e, t) => {
	let n = e.selection, { $from: r, $to: i } = n;
	if (n instanceof zn || r.parent.inlineContent || i.parent.inlineContent) return !1;
	let a = vr(i.parent.contentMatchAt(i.indexAfter()));
	if (!a || !a.isTextblock) return !1;
	if (t) {
		let n = (!r.parentOffset && i.index() < i.parent.childCount ? r : i).pos, o = e.tr.insert(n, a.createAndFill());
		o.setSelection(O.create(o.doc, n + 1)), t(o.scrollIntoView());
	}
	return !0;
}, xr = (e, t) => {
	let { $cursor: n } = e.selection;
	if (!n || n.parent.content.size) return !1;
	if (n.depth > 1 && n.after() != n.end(-1)) {
		let r = n.before();
		if (an(e.doc, r)) return t && t(e.tr.split(r).scrollIntoView()), !0;
	}
	let r = n.blockRange(), i = r && Kt(r);
	return i == null ? !1 : (t && t(e.tr.lift(r, i).scrollIntoView()), !0);
};
function Sr(e) {
	return (t, n) => {
		let { $from: r, $to: i } = t.selection;
		if (t.selection instanceof k && t.selection.node.isBlock) return !r.parentOffset || !an(t.doc, r.pos) ? !1 : (n && n(t.tr.split(r.pos).scrollIntoView()), !0);
		if (!r.depth) return !1;
		let a = [], o, s, c = !1, l = !1;
		for (let t = r.depth;; t--) if (r.node(t).isBlock) {
			c = r.end(t) == r.pos + (r.depth - t), l = r.start(t) == r.pos - (r.depth - t), s = vr(r.node(t - 1).contentMatchAt(r.indexAfter(t - 1)));
			let n = e && e(i.parent, c, r);
			a.unshift(n || (c && s ? { type: s } : null)), o = t;
			break;
		} else {
			if (t == 1) return !1;
			a.unshift(null);
		}
		let u = t.tr;
		(t.selection instanceof O || t.selection instanceof zn) && u.deleteSelection();
		let d = u.mapping.map(r.pos), f = an(u.doc, d, a.length, a);
		if (f ||= (a[0] = s ? { type: s } : null, an(u.doc, d, a.length, a)), !f) return !1;
		if (u.split(d, a.length, a), !c && l && r.node(o).type != s) {
			let e = u.mapping.map(r.before(o)), t = u.doc.resolve(e);
			s && r.node(o - 1).canReplaceWith(t.index(), t.index() + 1, s) && u.setNodeMarkup(u.mapping.map(r.before(o)), s);
		}
		return n && n(u.scrollIntoView()), !0;
	};
}
var Cr = Sr(), wr = (e, t) => {
	let { $from: n, to: r } = e.selection, i, a = n.sharedDepth(r);
	return a == 0 ? !1 : (i = n.before(a), t && t(e.tr.setSelection(k.create(e.doc, i))), !0);
}, Tr = (e, t) => (t && t(e.tr.setSelection(new zn(e.doc))), !0);
function Er(e, t, n) {
	let r = t.nodeBefore, i = t.nodeAfter, a = t.index();
	return !r || !i || !r.type.compatibleContent(i.type) ? !1 : !r.content.size && t.parent.canReplace(a - 1, a) ? (n && n(e.tr.delete(t.pos - r.nodeSize, t.pos).scrollIntoView()), !0) : !t.parent.canReplace(a, a + 1) || !(i.isTextblock || sn(e.doc, t.pos)) ? !1 : (n && n(e.tr.join(t.pos).scrollIntoView()), !0);
}
function Dr(e, t, n, r) {
	let i = t.nodeBefore, a = t.nodeAfter, o, s, c = i.type.spec.isolating || a.type.spec.isolating;
	if (!c && Er(e, t, n)) return !0;
	let l = !c && t.parent.canReplace(t.index(), t.index() + 1);
	if (l && (o = (s = i.contentMatchAt(i.childCount)).findWrapping(a.type)) && s.matchType(o[0] || a.type).validEnd) {
		if (n) {
			let r = t.pos + a.nodeSize, s = S.empty;
			for (let e = o.length - 1; e >= 0; e--) s = S.from(o[e].create(null, s));
			s = S.from(i.copy(s));
			let c = e.tr.step(new Bt(t.pos - 1, r, t.pos, r, new w(s, 1, 0), o.length, !0)), l = c.doc.resolve(r + 2 * o.length);
			l.nodeAfter && l.nodeAfter.type == i.type && sn(c.doc, l.pos) && c.join(l.pos), n(c.scrollIntoView());
		}
		return !0;
	}
	let u = a.type.spec.isolating || r > 0 && c ? null : D.findFrom(t, 1), d = u && u.$from.blockRange(u.$to), f = d && Kt(d);
	if (f != null && f >= t.depth) return n && n(e.tr.lift(d, f).scrollIntoView()), !0;
	if (l && sr(a, "start", !0) && sr(i, "end")) {
		let r = i, o = [];
		for (; o.push(r), !r.isTextblock;) r = r.lastChild;
		let s = a, c = 1;
		for (; !s.isTextblock; s = s.firstChild) c++;
		if (r.canReplace(r.childCount, r.childCount, s.content)) {
			if (n) {
				let r = S.empty;
				for (let e = o.length - 1; e >= 0; e--) r = S.from(o[e].copy(r));
				n(e.tr.step(new Bt(t.pos - o.length, t.pos + a.nodeSize, t.pos + c, t.pos + a.nodeSize - c, new w(r, o.length, 0), 0, !0)).scrollIntoView());
			}
			return !0;
		}
	}
	return !1;
}
function Or(e) {
	return function(t, n) {
		let r = t.selection, i = e < 0 ? r.$from : r.$to, a = i.depth;
		for (; i.node(a).isInline;) {
			if (!a) return !1;
			a--;
		}
		return i.node(a).isTextblock ? (n && n(t.tr.setSelection(O.create(t.doc, e < 0 ? i.start(a) : i.end(a)))), !0) : !1;
	};
}
var kr = Or(-1), Ar = Or(1);
function jr(e, t = null) {
	return function(n, r) {
		let { $from: i, $to: a } = n.selection, o = i.blockRange(a), s = o && Jt(o, e, t);
		return s ? (r && r(n.tr.wrap(o, s).scrollIntoView()), !0) : !1;
	};
}
function Mr(e, t = null) {
	return function(n, r) {
		let i = !1;
		for (let r = 0; r < n.selection.ranges.length && !i; r++) {
			let { $from: { pos: a }, $to: { pos: o } } = n.selection.ranges[r];
			n.doc.nodesBetween(a, o, (r, a) => {
				if (i) return !1;
				if (!(!r.isTextblock || r.hasMarkup(e, t))) if (r.type == e) i = !0;
				else {
					let t = n.doc.resolve(a), r = t.index();
					i = t.parent.canReplaceWith(r, r + 1, e);
				}
			});
		}
		if (!i) return !1;
		if (r) {
			let i = n.tr;
			for (let r = 0; r < n.selection.ranges.length; r++) {
				let { $from: { pos: a }, $to: { pos: o } } = n.selection.ranges[r];
				i.setBlockType(a, o, e, t);
			}
			r(i.scrollIntoView());
		}
		return !0;
	};
}
function Nr(...e) {
	return function(t, n, r) {
		for (let i = 0; i < e.length; i++) if (e[i](t, n, r)) return !0;
		return !1;
	};
}
var Pr = Nr(tr, rr, cr), Fr = Nr(tr, dr, fr), Ir = {
	Enter: Nr(_r, br, xr, Cr),
	"Mod-Enter": yr,
	Backspace: Pr,
	"Mod-Backspace": Pr,
	"Shift-Backspace": Pr,
	Delete: Fr,
	"Mod-Delete": Fr,
	"Mod-a": Tr
}, Lr = {
	"Ctrl-h": Ir.Backspace,
	"Alt-Backspace": Ir["Mod-Backspace"],
	"Ctrl-d": Ir.Delete,
	"Ctrl-Alt-Backspace": Ir["Mod-Delete"],
	"Alt-Delete": Ir["Mod-Delete"],
	"Alt-d": Ir["Mod-Delete"],
	"Ctrl-a": kr,
	"Ctrl-e": Ar
};
for (let e in Ir) Lr[e] = Ir[e];
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform();
function Rr(e, t = null) {
	return function(n, r) {
		let { $from: i, $to: a } = n.selection, o = i.blockRange(a);
		if (!o) return !1;
		let s = r ? n.tr : null;
		return zr(s, o, e, t) ? (r && r(s.scrollIntoView()), !0) : !1;
	};
}
function zr(e, t, n, r = null) {
	let i = !1, a = t, o = t.$from.doc;
	if (t.depth >= 2 && t.$from.node(t.depth - 1).type.compatibleContent(n) && t.startIndex == 0) {
		if (t.$from.index(t.depth - 1) == 0) return !1;
		let e = o.resolve(t.start - 2);
		a = new Ce(e, e, t.depth), t.endIndex < t.parent.childCount && (t = new Ce(t.$from, o.resolve(t.$to.end(t.depth)), t.depth)), i = !0;
	}
	let s = Jt(a, n, r, t);
	return s ? (e && Br(e, t, s, i, n), !0) : !1;
}
function Br(e, t, n, r, i) {
	let a = S.empty;
	for (let e = n.length - 1; e >= 0; e--) a = S.from(n[e].type.create(n[e].attrs, a));
	e.step(new Bt(t.start - (r ? 2 : 0), t.end, t.start, t.end, new w(a, 0, 0), n.length, !0));
	let o = 0;
	for (let e = 0; e < n.length; e++) n[e].type == i && (o = e + 1);
	let s = n.length - o, c = t.start + n.length - (r ? 2 : 0), l = t.parent;
	for (let n = t.startIndex, r = t.endIndex, i = !0; n < r; n++, i = !1) !i && an(e.doc, c, s) && (e.split(c, s), c += 2 * s), c += l.child(n).nodeSize;
	return e;
}
function Vr(e) {
	return function(t, n) {
		let { $from: r, $to: i } = t.selection, a = r.blockRange(i, (t) => t.childCount > 0 && t.firstChild.type == e);
		return a ? n ? r.node(a.depth - 1).type == e ? Hr(t, n, e, a) : Ur(t, n, a) : !0 : !1;
	};
}
function Hr(e, t, n, r) {
	let i = e.tr, a = r.end, o = r.$to.end(r.depth);
	a < o && (i.step(new Bt(a - 1, o, a, o, new w(S.from(n.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new Ce(i.doc.resolve(r.$from.pos), i.doc.resolve(o), r.depth));
	let s = Kt(r);
	if (s == null) return !1;
	i.lift(r, s);
	let c = i.doc.resolve(i.mapping.map(a, -1) - 1);
	return sn(i.doc, c.pos) && c.nodeBefore.type == c.nodeAfter.type && i.join(c.pos), t(i.scrollIntoView()), !0;
}
function Ur(e, t, n) {
	let r = e.tr, i = n.parent;
	for (let e = n.end, t = n.endIndex - 1, a = n.startIndex; t > a; t--) e -= i.child(t).nodeSize, r.delete(e - 1, e + 1);
	let a = r.doc.resolve(n.start), o = a.nodeAfter;
	if (r.mapping.map(n.end) != n.start + a.nodeAfter.nodeSize) return !1;
	let s = n.startIndex == 0, c = n.endIndex == i.childCount, l = a.node(-1), u = a.index(-1);
	if (!l.canReplace(u + (s ? 0 : 1), u + 1, o.content.append(c ? S.empty : S.from(i)))) return !1;
	let d = a.pos, f = d + o.nodeSize;
	return r.step(new Bt(d - (s ? 1 : 0), f + (c ? 1 : 0), d + 1, f - 1, new w((s ? S.empty : S.from(i.copy(S.empty))).append(c ? S.empty : S.from(i.copy(S.empty))), s ? 0 : 1, c ? 0 : 1), s ? 0 : 1)), t(r.scrollIntoView()), !0;
}
function Wr(e) {
	return function(t, n) {
		let { $from: r, $to: i } = t.selection, a = r.blockRange(i, (t) => t.childCount > 0 && t.firstChild.type == e);
		if (!a) return !1;
		let o = a.startIndex;
		if (o == 0) return !1;
		let s = a.parent, c = s.child(o - 1);
		if (c.type != e) return !1;
		if (n) {
			let r = c.lastChild && c.lastChild.type == s.type, i = S.from(r ? e.create() : null), o = new w(S.from(e.create(null, S.from(s.type.create(null, i)))), r ? 3 : 1, 0), l = a.start, u = a.end;
			n(t.tr.step(new Bt(l - (r ? 3 : 1), u, l, u, o, 1, !0)).scrollIntoView());
		}
		return !0;
	};
}
var M = function(e) {
	for (var t = 0;; t++) if (e = e.previousSibling, !e) return t;
}, Gr = function(e) {
	let t = e.assignedSlot || e.parentNode;
	return t && t.nodeType == 11 ? t.host : t;
}, Kr = null, qr = function(e, t, n) {
	let r = Kr ||= document.createRange();
	return r.setEnd(e, n ?? e.nodeValue.length), r.setStart(e, t || 0), r;
}, Jr = function() {
	Kr = null;
}, Yr = function(e, t, n, r) {
	return n && (Zr(e, t, n, r, -1) || Zr(e, t, n, r, 1));
}, Xr = /^(img|br|input|textarea|hr)$/i;
function Zr(e, t, n, r, i) {
	for (;;) {
		if (e == n && t == r) return !0;
		if (t == (i < 0 ? 0 : Qr(e))) {
			let n = e.parentNode;
			if (!n || n.nodeType != 1 || ni(e) || Xr.test(e.nodeName) || e.contentEditable == "false") return !1;
			t = M(e) + (i < 0 ? 0 : 1), e = n;
		} else if (e.nodeType == 1) {
			let n = e.childNodes[t + (i < 0 ? -1 : 0)];
			if (n.nodeType == 1 && n.contentEditable == "false") if (n.pmViewDesc?.ignoreForSelection) t += i;
			else return !1;
			else e = n, t = i < 0 ? Qr(e) : 0;
		} else return !1;
	}
}
function Qr(e) {
	return e.nodeType == 3 ? e.nodeValue.length : e.childNodes.length;
}
function $r(e, t) {
	for (;;) {
		if (e.nodeType == 3 && t) return e;
		if (e.nodeType == 1 && t > 0) {
			if (e.contentEditable == "false") return null;
			e = e.childNodes[t - 1], t = Qr(e);
		} else if (e.parentNode && !ni(e)) t = M(e), e = e.parentNode;
		else return null;
	}
}
function ei(e, t) {
	for (;;) {
		if (e.nodeType == 3 && t < e.nodeValue.length) return e;
		if (e.nodeType == 1 && t < e.childNodes.length) {
			if (e.contentEditable == "false") return null;
			e = e.childNodes[t], t = 0;
		} else if (e.parentNode && !ni(e)) t = M(e) + 1, e = e.parentNode;
		else return null;
	}
}
function ti(e, t, n) {
	for (let r = t == 0, i = t == Qr(e); r || i;) {
		if (e == n) return !0;
		let t = M(e);
		if (e = e.parentNode, !e) return !1;
		r &&= t == 0, i &&= t == Qr(e);
	}
}
function ni(e) {
	let t;
	for (let n = e; n && !(t = n.pmViewDesc); n = n.parentNode);
	return t && t.node && t.node.isBlock && (t.dom == e || t.contentDOM == e);
}
var ri = function(e) {
	return e.focusNode && Yr(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset);
};
function ii(e, t) {
	let n = document.createEvent("Event");
	return n.initEvent("keydown", !0, !0), n.keyCode = e, n.key = n.code = t, n;
}
function ai(e) {
	let t = e.activeElement;
	for (; t && t.shadowRoot;) t = t.shadowRoot.activeElement;
	return t;
}
function oi(e, t, n) {
	if (e.caretPositionFromPoint) try {
		let r = e.caretPositionFromPoint(t, n);
		if (r) return {
			node: r.offsetNode,
			offset: Math.min(Qr(r.offsetNode), r.offset)
		};
	} catch {}
	if (e.caretRangeFromPoint) {
		let r = e.caretRangeFromPoint(t, n);
		if (r) return {
			node: r.startContainer,
			offset: Math.min(Qr(r.startContainer), r.startOffset)
		};
	}
}
var si = typeof navigator < "u" ? navigator : null, ci = typeof document < "u" ? document : null, li = si && si.userAgent || "", ui = /Edge\/(\d+)/.exec(li), di = /MSIE \d/.exec(li), fi = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(li), pi = !!(di || fi || ui), mi = di ? document.documentMode : fi ? +fi[1] : ui ? +ui[1] : 0, hi = !pi && /gecko\/(\d+)/i.test(li);
hi && +(/Firefox\/(\d+)/.exec(li) || [0, 0])[1];
var gi = !pi && /Chrome\/(\d+)/.exec(li), N = !!gi, _i = gi ? +gi[1] : 0, P = !pi && !!si && /Apple Computer/.test(si.vendor), vi = P && (/Mobile\/\w+/.test(li) || !!si && si.maxTouchPoints > 2), yi = vi || (si ? /Mac/.test(si.platform) : !1), bi = si ? /Win/.test(si.platform) : !1, xi = /Android \d/.test(li), Si = !!ci && "webkitFontSmoothing" in ci.documentElement.style, Ci = Si ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function wi(e) {
	let t = e.defaultView && e.defaultView.visualViewport;
	return t ? {
		left: 0,
		right: t.width,
		top: 0,
		bottom: t.height
	} : {
		left: 0,
		right: e.documentElement.clientWidth,
		top: 0,
		bottom: e.documentElement.clientHeight
	};
}
function Ti(e, t) {
	return typeof e == "number" ? e : e[t];
}
function Ei(e) {
	let t = e.getBoundingClientRect(), n = t.width / e.offsetWidth || 1, r = t.height / e.offsetHeight || 1;
	return {
		left: t.left,
		right: t.left + e.clientWidth * n,
		top: t.top,
		bottom: t.top + e.clientHeight * r
	};
}
function Di(e, t, n) {
	let r = e.someProp("scrollThreshold") || 0, i = e.someProp("scrollMargin") || 5, a = e.dom.ownerDocument;
	for (let o = n || e.dom; o;) {
		if (o.nodeType != 1) {
			o = Gr(o);
			continue;
		}
		let e = o, n = e == a.body, s = n ? wi(a) : Ei(e), c = 0, l = 0;
		if (t.top < s.top + Ti(r, "top") ? l = -(s.top - t.top + Ti(i, "top")) : t.bottom > s.bottom - Ti(r, "bottom") && (l = t.bottom - t.top > s.bottom - s.top ? t.top + Ti(i, "top") - s.top : t.bottom - s.bottom + Ti(i, "bottom")), t.left < s.left + Ti(r, "left") ? c = -(s.left - t.left + Ti(i, "left")) : t.right > s.right - Ti(r, "right") && (c = t.right - s.right + Ti(i, "right")), c || l) if (n) a.defaultView.scrollBy(c, l);
		else {
			let n = e.scrollLeft, r = e.scrollTop;
			l && (e.scrollTop += l), c && (e.scrollLeft += c);
			let i = e.scrollLeft - n, a = e.scrollTop - r;
			t = {
				left: t.left - i,
				top: t.top - a,
				right: t.right - i,
				bottom: t.bottom - a
			};
		}
		let u = n ? "fixed" : getComputedStyle(o).position;
		if (/^(fixed|sticky)$/.test(u)) break;
		o = u == "absolute" ? o.offsetParent : Gr(o);
	}
}
function Oi(e) {
	let t = e.dom.getBoundingClientRect(), n = Math.max(0, t.top), r, i;
	for (let a = (t.left + t.right) / 2, o = n + 1; o < Math.min(innerHeight, t.bottom); o += 5) {
		let t = e.root.elementFromPoint(a, o);
		if (!t || t == e.dom || !e.dom.contains(t)) continue;
		let s = t.getBoundingClientRect();
		if (s.top >= n - 20) {
			r = t, i = s.top;
			break;
		}
	}
	return {
		refDOM: r,
		refTop: i,
		stack: ki(e.dom)
	};
}
function ki(e) {
	let t = [], n = e.ownerDocument;
	for (let r = e; r && (t.push({
		dom: r,
		top: r.scrollTop,
		left: r.scrollLeft
	}), e != n); r = Gr(r));
	return t;
}
function Ai({ refDOM: e, refTop: t, stack: n }) {
	let r = e ? e.getBoundingClientRect().top : 0;
	ji(n, r == 0 ? 0 : r - t);
}
function ji(e, t) {
	for (let n = 0; n < e.length; n++) {
		let { dom: r, top: i, left: a } = e[n];
		r.scrollTop != i + t && (r.scrollTop = i + t), r.scrollLeft != a && (r.scrollLeft = a);
	}
}
var Mi = null;
function Ni(e) {
	if (e.setActive) return e.setActive();
	if (Mi) return e.focus(Mi);
	let t = ki(e);
	e.focus(Mi == null ? { get preventScroll() {
		return Mi = { preventScroll: !0 }, !0;
	} } : void 0), Mi || (Mi = !1, ji(t, 0));
}
function Pi(e, t) {
	let n, r = 2e8, i, a = 0, o = t.top, s = t.top, c, l;
	for (let u = e.firstChild, d = 0; u; u = u.nextSibling, d++) {
		let e;
		if (u.nodeType == 1) e = u.getClientRects();
		else if (u.nodeType == 3) e = qr(u).getClientRects();
		else continue;
		for (let f = 0; f < e.length; f++) {
			let p = e[f];
			if (p.top <= o && p.bottom >= s) {
				o = Math.max(p.bottom, o), s = Math.min(p.top, s);
				let e = p.left > t.left ? p.left - t.left : p.right < t.left ? t.left - p.right : 0;
				if (e < r) {
					n = u, r = e, i = e && n.nodeType == 3 ? {
						left: p.right < t.left ? p.right : p.left,
						top: t.top
					} : t, u.nodeType == 1 && e && (a = d + (t.left >= (p.left + p.right) / 2 ? 1 : 0));
					continue;
				}
			} else p.top > t.top && !c && p.left <= t.left && p.right >= t.left && (c = u, l = {
				left: Math.max(p.left, Math.min(p.right, t.left)),
				top: p.top
			});
			!n && (t.left >= p.right && t.top >= p.top || t.left >= p.left && t.top >= p.bottom) && (a = d + 1);
		}
	}
	return !n && c && (n = c, i = l, r = 0), n && n.nodeType == 3 ? Fi(n, i) : !n || r && n.nodeType == 1 ? {
		node: e,
		offset: a
	} : Pi(n, i);
}
function Fi(e, t) {
	let n = e.nodeValue.length, r = document.createRange(), i;
	for (let a = 0; a < n; a++) {
		r.setEnd(e, a + 1), r.setStart(e, a);
		let n = Ui(r, 1);
		if (n.top != n.bottom && Ii(t, n)) {
			i = {
				node: e,
				offset: a + (t.left >= (n.left + n.right) / 2 ? 1 : 0)
			};
			break;
		}
	}
	return r.detach(), i || {
		node: e,
		offset: 0
	};
}
function Ii(e, t) {
	return e.left >= t.left - 1 && e.left <= t.right + 1 && e.top >= t.top - 1 && e.top <= t.bottom + 1;
}
function Li(e, t) {
	let n = e.parentNode;
	return n && /^li$/i.test(n.nodeName) && t.left < e.getBoundingClientRect().left ? n : e;
}
function Ri(e, t, n) {
	let { node: r, offset: i } = Pi(t, n), a = -1;
	if (r.nodeType == 1 && !r.firstChild) {
		let e = r.getBoundingClientRect();
		a = e.left != e.right && n.left > (e.left + e.right) / 2 ? 1 : -1;
	}
	return e.docView.posFromDOM(r, i, a);
}
function zi(e, t, n, r) {
	let i = -1;
	for (let n = t, a = !1; n != e.dom;) {
		let t = e.docView.nearestDesc(n, !0), o;
		if (!t) return null;
		if (t.dom.nodeType == 1 && (t.node.isBlock && t.parent || !t.contentDOM) && ((o = t.dom.getBoundingClientRect()).width || o.height) && (t.node.isBlock && t.parent && !/^T(R|BODY|HEAD|FOOT)$/.test(t.dom.nodeName) && (!a && o.left > r.left || o.top > r.top ? i = t.posBefore : (!a && o.right < r.left || o.bottom < r.top) && (i = t.posAfter), a = !0), !t.contentDOM && i < 0 && !t.node.isText)) return (t.node.isBlock ? r.top < (o.top + o.bottom) / 2 : r.left < (o.left + o.right) / 2) ? t.posBefore : t.posAfter;
		n = t.dom.parentNode;
	}
	return i > -1 ? i : e.docView.posFromDOM(t, n, -1);
}
function Bi(e, t, n) {
	let r = e.childNodes.length;
	if (r && n.top < n.bottom) for (let i = Math.max(0, Math.min(r - 1, Math.floor(r * (t.top - n.top) / (n.bottom - n.top)) - 2)), a = i;;) {
		let n = e.childNodes[a];
		if (n.nodeType == 1) {
			let e = n.getClientRects();
			for (let r = 0; r < e.length; r++) {
				let i = e[r];
				if (Ii(t, i)) return Bi(n, t, i);
			}
		}
		if ((a = (a + 1) % r) == i) break;
	}
	return e;
}
function Vi(e, t) {
	let n = e.dom.ownerDocument, r, i = 0, a = oi(n, t.left, t.top);
	a && ({node: r, offset: i} = a);
	let o = (e.root.elementFromPoint ? e.root : n).elementFromPoint(t.left, t.top), s;
	if (!o || !e.dom.contains(o.nodeType == 1 ? o : o.parentNode)) {
		let n = e.dom.getBoundingClientRect();
		if (!Ii(t, n) || (o = Bi(e.dom, t, n), !o)) return null;
	}
	if (P) for (let e = o; r && e; e = Gr(e)) e.draggable && (r = void 0);
	if (o = Li(o, t), r) {
		if (hi && r.nodeType == 1 && (i = Math.min(i, r.childNodes.length), i < r.childNodes.length)) {
			let e = r.childNodes[i], n;
			e.nodeName == "IMG" && (n = e.getBoundingClientRect()).right <= t.left && n.bottom > t.top && i++;
		}
		let n;
		Si && i && r.nodeType == 1 && (n = r.childNodes[i - 1]).nodeType == 1 && n.contentEditable == "false" && n.getBoundingClientRect().top >= t.top && i--, r == e.dom && i == r.childNodes.length - 1 && r.lastChild.nodeType == 1 && t.top > r.lastChild.getBoundingClientRect().bottom ? s = e.state.doc.content.size : (i == 0 || r.nodeType != 1 || r.childNodes[i - 1].nodeName != "BR") && (s = zi(e, r, i, t));
	}
	s ??= Ri(e, o, t);
	let c = e.docView.nearestDesc(o, !0);
	return {
		pos: s,
		inside: c ? c.posAtStart - c.border : -1
	};
}
function Hi(e) {
	return e.top < e.bottom || e.left < e.right;
}
function Ui(e, t) {
	let n = e.getClientRects();
	if (n.length) {
		let e = n[t < 0 ? 0 : n.length - 1];
		if (Hi(e)) return e;
	}
	return Array.prototype.find.call(n, Hi) || e.getBoundingClientRect();
}
var Wi = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function Gi(e, t, n) {
	let { node: r, offset: i, atom: a } = e.docView.domFromPos(t, n < 0 ? -1 : 1), o = Si || hi;
	if (r.nodeType == 3) if (o && (Wi.test(r.nodeValue) || (n < 0 ? !i : i == r.nodeValue.length))) {
		let e = Ui(qr(r, i, i), n);
		if (hi && i && /\s/.test(r.nodeValue[i - 1]) && i < r.nodeValue.length) {
			let t = Ui(qr(r, i - 1, i - 1), -1);
			if (t.top == e.top) {
				let n = Ui(qr(r, i, i + 1), -1);
				if (n.top != e.top) return Ki(n, n.left < t.left);
			}
		}
		return e;
	} else {
		let e = i, t = i, a = n < 0 ? 1 : -1;
		return n < 0 && !i ? (t++, a = -1) : n >= 0 && i == r.nodeValue.length ? (e--, a = 1) : n < 0 ? e-- : t++, Ki(Ui(qr(r, e, t), a), a < 0);
	}
	if (!e.state.doc.resolve(t - (a || 0)).parent.inlineContent) {
		if (a == null && i && (n < 0 || i == Qr(r))) {
			let e = r.childNodes[i - 1];
			if (e.nodeType == 1) return qi(e.getBoundingClientRect(), !1);
		}
		if (a == null && i < Qr(r)) {
			let e = r.childNodes[i];
			if (e.nodeType == 1) return qi(e.getBoundingClientRect(), !0);
		}
		return qi(r.getBoundingClientRect(), n >= 0);
	}
	if (a == null && i && (n < 0 || i == Qr(r))) {
		let e = r.childNodes[i - 1], t = e.nodeType == 3 ? qr(e, Qr(e) - (o ? 0 : 1)) : e.nodeType == 1 && (e.nodeName != "BR" || !e.nextSibling) ? e : null;
		if (t) return Ki(Ui(t, 1), !1);
	}
	if (a == null && i < Qr(r)) {
		let e = r.childNodes[i];
		for (; e.pmViewDesc && e.pmViewDesc.ignoreForCoords;) e = e.nextSibling;
		let t = e ? e.nodeType == 3 ? qr(e, 0, o ? 0 : 1) : e.nodeType == 1 ? e : null : null;
		if (t) return Ki(Ui(t, -1), !0);
	}
	return Ki(Ui(r.nodeType == 3 ? qr(r) : r, -n), n >= 0);
}
function Ki(e, t) {
	if (e.width == 0) return e;
	let n = t ? e.left : e.right;
	return {
		top: e.top,
		bottom: e.bottom,
		left: n,
		right: n
	};
}
function qi(e, t) {
	if (e.height == 0) return e;
	let n = t ? e.top : e.bottom;
	return {
		top: n,
		bottom: n,
		left: e.left,
		right: e.right
	};
}
function Ji(e, t, n) {
	let r = e.state, i = e.root.activeElement;
	r != t && e.updateState(t), i != e.dom && e.focus();
	try {
		return n();
	} finally {
		r != t && e.updateState(r), i != e.dom && i && i.focus();
	}
}
function Yi(e, t, n) {
	let r = t.selection, i = n == "up" ? r.$from : r.$to;
	return Ji(e, t, () => {
		let { node: t } = e.docView.domFromPos(i.pos, n == "up" ? -1 : 1);
		for (;;) {
			let n = e.docView.nearestDesc(t, !0);
			if (!n) break;
			if (n.node.isBlock) {
				t = n.contentDOM || n.dom;
				break;
			}
			t = n.dom.parentNode;
		}
		let r = Gi(e, i.pos, 1);
		for (let e = t.firstChild; e; e = e.nextSibling) {
			let t;
			if (e.nodeType == 1) t = e.getClientRects();
			else if (e.nodeType == 3) t = qr(e, 0, e.nodeValue.length).getClientRects();
			else continue;
			for (let e = 0; e < t.length; e++) {
				let i = t[e];
				if (i.bottom > i.top + 1 && (n == "up" ? r.top - i.top > (i.bottom - r.top) * 2 : i.bottom - r.bottom > (r.bottom - i.top) * 2)) return !1;
			}
		}
		return !0;
	});
}
var Xi = /[\u0590-\u08ac]/;
function Zi(e, t, n) {
	let { $head: r } = t.selection;
	if (!r.parent.isTextblock) return !1;
	let i = r.parentOffset, a = !i, o = i == r.parent.content.size, s = e.domSelection();
	return s ? !Xi.test(r.parent.textContent) || !s.modify ? n == "left" || n == "backward" ? a : o : Ji(e, t, () => {
		let { focusNode: t, focusOffset: i, anchorNode: a, anchorOffset: o } = e.domSelectionRange(), c = s.caretBidiLevel;
		s.modify("move", n, "character");
		let l = r.depth ? e.docView.domAfterPos(r.before()) : e.dom, { focusNode: u, focusOffset: d } = e.domSelectionRange(), f = u && !l.contains(u.nodeType == 1 ? u : u.parentNode) || t == u && i == d;
		try {
			s.collapse(a, o), t && (t != a || i != o) && s.extend && s.extend(t, i);
		} catch {}
		return c != null && (s.caretBidiLevel = c), f;
	}) : r.pos == r.start() || r.pos == r.end();
}
var Qi = null, $i = null, ea = !1;
function ta(e, t, n) {
	return Qi == t && $i == n ? ea : (Qi = t, $i = n, ea = n == "up" || n == "down" ? Yi(e, t, n) : Zi(e, t, n));
}
var na = 0, ra = 1, ia = 2, aa = 3, oa = class {
	constructor(e, t, n, r) {
		this.parent = e, this.children = t, this.dom = n, this.contentDOM = r, this.dirty = na, n.pmViewDesc = this;
	}
	matchesWidget(e) {
		return !1;
	}
	matchesMark(e) {
		return !1;
	}
	matchesNode(e, t, n) {
		return !1;
	}
	matchesHack(e) {
		return !1;
	}
	parseRule() {
		return null;
	}
	stopEvent(e) {
		return !1;
	}
	get size() {
		let e = 0;
		for (let t = 0; t < this.children.length; t++) e += this.children[t].size;
		return e;
	}
	get border() {
		return 0;
	}
	destroy() {
		this.parent = void 0, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
		for (let e = 0; e < this.children.length; e++) this.children[e].destroy();
	}
	posBeforeChild(e) {
		for (let t = 0, n = this.posAtStart;; t++) {
			let r = this.children[t];
			if (r == e) return n;
			n += r.size;
		}
	}
	get posBefore() {
		return this.parent.posBeforeChild(this);
	}
	get posAtStart() {
		return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
	}
	get posAfter() {
		return this.posBefore + this.size;
	}
	get posAtEnd() {
		return this.posAtStart + this.size - 2 * this.border;
	}
	localPosFromDOM(e, t, n) {
		if (this.contentDOM && this.contentDOM.contains(e.nodeType == 1 ? e : e.parentNode)) if (n < 0) {
			let n, r;
			if (e == this.contentDOM) n = e.childNodes[t - 1];
			else {
				for (; e.parentNode != this.contentDOM;) e = e.parentNode;
				n = e.previousSibling;
			}
			for (; n && !((r = n.pmViewDesc) && r.parent == this);) n = n.previousSibling;
			return n ? this.posBeforeChild(r) + r.size : this.posAtStart;
		} else {
			let n, r;
			if (e == this.contentDOM) n = e.childNodes[t];
			else {
				for (; e.parentNode != this.contentDOM;) e = e.parentNode;
				n = e.nextSibling;
			}
			for (; n && !((r = n.pmViewDesc) && r.parent == this);) n = n.nextSibling;
			return n ? this.posBeforeChild(r) : this.posAtEnd;
		}
		let r;
		if (e == this.dom && this.contentDOM) r = t > M(this.contentDOM);
		else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM)) r = e.compareDocumentPosition(this.contentDOM) & 2;
		else if (this.dom.firstChild) {
			if (t == 0) for (let t = e;; t = t.parentNode) {
				if (t == this.dom) {
					r = !1;
					break;
				}
				if (t.previousSibling) break;
			}
			if (r == null && t == e.childNodes.length) for (let t = e;; t = t.parentNode) {
				if (t == this.dom) {
					r = !0;
					break;
				}
				if (t.nextSibling) break;
			}
		}
		return r ?? n > 0 ? this.posAtEnd : this.posAtStart;
	}
	nearestDesc(e, t = !1) {
		for (let n = !0, r = e; r; r = r.parentNode) {
			let i = this.getDesc(r), a;
			if (i && (!t || i.node)) if (n && (a = i.nodeDOM) && !(a.nodeType == 1 ? a.contains(e.nodeType == 1 ? e : e.parentNode) : a == e)) n = !1;
			else return i;
		}
	}
	getDesc(e) {
		let t = e.pmViewDesc;
		for (let e = t; e; e = e.parent) if (e == this) return t;
	}
	posFromDOM(e, t, n) {
		for (let r = e; r; r = r.parentNode) {
			let i = this.getDesc(r);
			if (i) return i.localPosFromDOM(e, t, n);
		}
		return -1;
	}
	descAt(e) {
		for (let t = 0, n = 0; t < this.children.length; t++) {
			let r = this.children[t], i = n + r.size;
			if (n == e && i != n) {
				for (; !r.border && r.children.length;) for (let e = 0; e < r.children.length; e++) {
					let t = r.children[e];
					if (t.size) {
						r = t;
						break;
					}
				}
				return r;
			}
			if (e < i) return r.descAt(e - n - r.border);
			n = i;
		}
	}
	domFromPos(e, t) {
		if (!this.contentDOM) return {
			node: this.dom,
			offset: 0,
			atom: e + 1
		};
		let n = 0, r = 0;
		for (let t = 0; n < this.children.length; n++) {
			let i = this.children[n], a = t + i.size;
			if (a > e || i instanceof pa) {
				r = e - t;
				break;
			}
			t = a;
		}
		if (r) return this.children[n].domFromPos(r - this.children[n].border, t);
		for (let e; n && !(e = this.children[n - 1]).size && e instanceof sa && e.side >= 0; n--);
		if (t <= 0) {
			let e, r = !0;
			for (; e = n ? this.children[n - 1] : null, !(!e || e.dom.parentNode == this.contentDOM); n--, r = !1);
			return e && t && r && !e.border && !e.domAtom ? e.domFromPos(e.size, t) : {
				node: this.contentDOM,
				offset: e ? M(e.dom) + 1 : 0
			};
		} else {
			let e, r = !0;
			for (; e = n < this.children.length ? this.children[n] : null, !(!e || e.dom.parentNode == this.contentDOM); n++, r = !1);
			return e && r && !e.border && !e.domAtom ? e.domFromPos(0, t) : {
				node: this.contentDOM,
				offset: e ? M(e.dom) : this.contentDOM.childNodes.length
			};
		}
	}
	parseRange(e, t, n = 0) {
		if (this.children.length == 0) return {
			node: this.contentDOM,
			from: e,
			to: t,
			fromOffset: 0,
			toOffset: this.contentDOM.childNodes.length
		};
		let r = -1, i = -1;
		for (let a = n, o = 0;; o++) {
			let n = this.children[o], s = a + n.size;
			if (r == -1 && e <= s) {
				let i = a + n.border;
				if (e >= i && t <= s - n.border && n.node && n.contentDOM && this.contentDOM.contains(n.contentDOM)) return n.parseRange(e, t, i);
				e = a;
				for (let t = o; t > 0; t--) {
					let n = this.children[t - 1];
					if (n.size && n.dom.parentNode == this.contentDOM && !n.emptyChildAt(1)) {
						r = M(n.dom) + 1;
						break;
					}
					e -= n.size;
				}
				r == -1 && (r = 0);
			}
			if (r > -1 && (s > t || o == this.children.length - 1)) {
				t = s;
				for (let e = o + 1; e < this.children.length; e++) {
					let n = this.children[e];
					if (n.size && n.dom.parentNode == this.contentDOM && !n.emptyChildAt(-1)) {
						i = M(n.dom);
						break;
					}
					t += n.size;
				}
				i == -1 && (i = this.contentDOM.childNodes.length);
				break;
			}
			a = s;
		}
		return {
			node: this.contentDOM,
			from: e,
			to: t,
			fromOffset: r,
			toOffset: i
		};
	}
	emptyChildAt(e) {
		if (this.border || !this.contentDOM || !this.children.length) return !1;
		let t = this.children[e < 0 ? 0 : this.children.length - 1];
		return t.size == 0 || t.emptyChildAt(e);
	}
	domAfterPos(e) {
		let { node: t, offset: n } = this.domFromPos(e, 0);
		if (t.nodeType != 1 || n == t.childNodes.length) throw RangeError("No node after pos " + e);
		return t.childNodes[n];
	}
	setSelection(e, t, n, r = !1) {
		let i = Math.min(e, t), a = Math.max(e, t);
		for (let o = 0, s = 0; o < this.children.length; o++) {
			let c = this.children[o], l = s + c.size;
			if (i > s && a < l) return c.setSelection(e - s - c.border, t - s - c.border, n, r);
			s = l;
		}
		let o = this.domFromPos(e, e ? -1 : 1), s = t == e ? o : this.domFromPos(t, t ? -1 : 1), c = n.root.getSelection(), l = n.domSelectionRange(), u = !1;
		if ((hi || P) && e == t) {
			let { node: e, offset: t } = o;
			if (e.nodeType == 3) {
				if (u = !!(t && e.nodeValue[t - 1] == "\n"), u && t == e.nodeValue.length) for (let t = e, n; t; t = t.parentNode) {
					if (n = t.nextSibling) {
						n.nodeName == "BR" && (o = s = {
							node: n.parentNode,
							offset: M(n) + 1
						});
						break;
					}
					let e = t.pmViewDesc;
					if (e && e.node && e.node.isBlock) break;
				}
			} else {
				let n = e.childNodes[t - 1];
				u = n && (n.nodeName == "BR" || n.contentEditable == "false");
			}
		}
		if (hi && l.focusNode && l.focusNode != s.node && l.focusNode.nodeType == 1) {
			let e = l.focusNode.childNodes[l.focusOffset];
			e && e.contentEditable == "false" && (r = !0);
		}
		if (!(r || u && P) && Yr(o.node, o.offset, l.anchorNode, l.anchorOffset) && Yr(s.node, s.offset, l.focusNode, l.focusOffset)) return;
		let d = !1;
		if ((c.extend || e == t) && !(u && hi)) {
			c.collapse(o.node, o.offset);
			try {
				e != t && c.extend(s.node, s.offset), d = !0;
			} catch {}
		}
		if (!d) {
			if (e > t) {
				let e = o;
				o = s, s = e;
			}
			let n = document.createRange();
			n.setEnd(s.node, s.offset), n.setStart(o.node, o.offset), c.removeAllRanges(), c.addRange(n);
		}
	}
	ignoreMutation(e) {
		return !this.contentDOM && e.type != "selection";
	}
	get contentLost() {
		return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
	}
	markDirty(e, t) {
		for (let n = 0, r = 0; r < this.children.length; r++) {
			let i = this.children[r], a = n + i.size;
			if (n == a ? e <= a && t >= n : e < a && t > n) {
				let r = n + i.border, o = a - i.border;
				if (e >= r && t <= o) {
					this.dirty = e == n || t == a ? ia : ra, e == r && t == o && (i.contentLost || i.dom.parentNode != this.contentDOM) ? i.dirty = aa : i.markDirty(e - r, t - r);
					return;
				} else i.dirty = i.dom == i.contentDOM && i.dom.parentNode == this.contentDOM && !i.children.length ? ia : aa;
			}
			n = a;
		}
		this.dirty = ia;
	}
	markParentsDirty() {
		let e = 1;
		for (let t = this.parent; t; t = t.parent, e++) {
			let n = e == 1 ? ia : ra;
			t.dirty < n && (t.dirty = n);
		}
	}
	get domAtom() {
		return !1;
	}
	get ignoreForCoords() {
		return !1;
	}
	get ignoreForSelection() {
		return !1;
	}
	isText(e) {
		return !1;
	}
}, sa = class extends oa {
	constructor(e, t, n, r) {
		let i, a = t.type.toDOM;
		if (typeof a == "function" && (a = a(n, () => {
			if (!i) return r;
			if (i.parent) return i.parent.posBeforeChild(i);
		})), !t.type.spec.raw) {
			if (a.nodeType != 1) {
				let e = document.createElement("span");
				e.appendChild(a), a = e;
			}
			a.contentEditable = "false", a.classList.add("ProseMirror-widget");
		}
		super(e, [], a, null), this.widget = t, this.widget = t, i = this;
	}
	matchesWidget(e) {
		return this.dirty == na && e.type.eq(this.widget.type);
	}
	parseRule() {
		return { ignore: !0 };
	}
	stopEvent(e) {
		let t = this.widget.spec.stopEvent;
		return t ? t(e) : !1;
	}
	ignoreMutation(e) {
		return e.type != "selection" || this.widget.spec.ignoreSelection;
	}
	destroy() {
		this.widget.type.destroy(this.dom), super.destroy();
	}
	get domAtom() {
		return !0;
	}
	get ignoreForSelection() {
		return !!this.widget.type.spec.relaxedSide;
	}
	get side() {
		return this.widget.type.side;
	}
}, ca = class extends oa {
	constructor(e, t, n, r) {
		super(e, [], t, null), this.textDOM = n, this.text = r;
	}
	get size() {
		return this.text.length;
	}
	localPosFromDOM(e, t) {
		return e == this.textDOM ? this.posAtStart + t : this.posAtStart + (t ? this.size : 0);
	}
	domFromPos(e) {
		return {
			node: this.textDOM,
			offset: e
		};
	}
	ignoreMutation(e) {
		return e.type === "characterData" && e.target.nodeValue == e.oldValue;
	}
}, la = class e extends oa {
	constructor(e, t, n, r, i) {
		super(e, [], n, r), this.mark = t, this.spec = i;
	}
	static create(t, n, r, i) {
		let a = i.nodeViews[n.type.name], o = a && a(n, i, r);
		return (!o || !o.dom) && (o = mt.renderSpec(document, n.type.spec.toDOM(n, r), null, n.attrs)), new e(t, n, o.dom, o.contentDOM || o.dom, o);
	}
	parseRule() {
		return this.dirty & aa || this.mark.type.spec.reparseInView ? null : {
			mark: this.mark.type.name,
			attrs: this.mark.attrs,
			contentElement: this.contentDOM
		};
	}
	matchesMark(e) {
		return this.dirty != aa && this.mark.eq(e);
	}
	markDirty(e, t) {
		if (super.markDirty(e, t), this.dirty != na) {
			let e = this.parent;
			for (; !e.node;) e = e.parent;
			e.dirty < this.dirty && (e.dirty = this.dirty), this.dirty = na;
		}
	}
	slice(t, n, r) {
		let i = e.create(this.parent, this.mark, !0, r), a = this.children, o = this.size;
		n < o && (a = Aa(a, n, o, r)), t > 0 && (a = Aa(a, 0, t, r));
		for (let e = 0; e < a.length; e++) a[e].parent = i;
		return i.children = a, i;
	}
	ignoreMutation(e) {
		return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
	}
	destroy() {
		this.spec.destroy && this.spec.destroy(), super.destroy();
	}
}, ua = class e extends oa {
	constructor(e, t, n, r, i, a, o, s, c) {
		super(e, [], i, a), this.node = t, this.outerDeco = n, this.innerDeco = r, this.nodeDOM = o;
	}
	static create(t, n, r, i, a, o) {
		let s = a.nodeViews[n.type.name], c, l = s && s(n, a, () => {
			if (!c) return o;
			if (c.parent) return c.parent.posBeforeChild(c);
		}, r, i), u = l && l.dom, d = l && l.contentDOM;
		if (n.isText) {
			if (!u) u = document.createTextNode(n.text);
			else if (u.nodeType != 3) throw RangeError("Text must be rendered as a DOM text node");
		} else if (!u) {
			let e = mt.renderSpec(document, n.type.spec.toDOM(n), null, n.attrs);
			({dom: u, contentDOM: d} = e);
		}
		!d && !n.isText && u.nodeName != "BR" && (u.hasAttribute("contenteditable") || (u.contentEditable = "false"), n.type.spec.draggable && (u.draggable = !0));
		let f = u;
		return u = xa(u, r, n), l ? c = new ma(t, n, r, i, u, d || null, f, l, a, o + 1) : n.isText ? new fa(t, n, r, i, u, f, a) : new e(t, n, r, i, u, d || null, f, a, o + 1);
	}
	parseRule() {
		if (this.node.type.spec.reparseInView) return null;
		let e = {
			node: this.node.type.name,
			attrs: this.node.attrs
		};
		if (this.node.type.whitespace == "pre" && (e.preserveWhitespace = "full"), !this.contentDOM) e.getContent = () => this.node.content;
		else if (!this.contentLost) e.contentElement = this.contentDOM;
		else {
			for (let t = this.children.length - 1; t >= 0; t--) {
				let n = this.children[t];
				if (this.dom.contains(n.dom.parentNode)) {
					e.contentElement = n.dom.parentNode;
					break;
				}
			}
			e.contentElement || (e.getContent = () => S.empty);
		}
		return e;
	}
	matchesNode(e, t, n) {
		return this.dirty == na && e.eq(this.node) && Sa(t, this.outerDeco) && n.eq(this.innerDeco);
	}
	get size() {
		return this.node.nodeSize;
	}
	get border() {
		return this.node.isLeaf ? 0 : 1;
	}
	updateChildren(e, t) {
		let n = this.node.inlineContent, r = t, i = e.composing ? this.localCompositionInfo(e, t) : null, a = i && i.pos > -1 ? i : null, o = i && i.pos < 0, s = new wa(this, a && a.node, e);
		Da(this.node, this.innerDeco, (t, i, a) => {
			t.spec.marks ? s.syncToMarks(t.spec.marks, n, e, i) : t.type.side >= 0 && !a && s.syncToMarks(i == this.node.childCount ? C.none : this.node.child(i).marks, n, e, i), s.placeWidget(t, e, r);
		}, (t, a, c, l) => {
			s.syncToMarks(t.marks, n, e, l);
			let u;
			s.findNodeMatch(t, a, c, l) || o && e.state.selection.from > r && e.state.selection.to < r + t.nodeSize && (u = s.findIndexWithChild(i.node)) > -1 && s.updateNodeAt(t, a, c, u, e) || s.updateNextNode(t, a, c, e, l, r) || s.addNode(t, a, c, e, r), r += t.nodeSize;
		}), s.syncToMarks([], n, e, 0), this.node.isTextblock && s.addTextblockHacks(), s.destroyRest(), (s.changed || this.dirty == ia) && (a && this.protectLocalComposition(e, a), ha(this.contentDOM, this.children, e), vi && Oa(this.dom));
	}
	localCompositionInfo(e, t) {
		let { from: n, to: r } = e.state.selection;
		if (!(e.state.selection instanceof O) || n < t || r > t + this.node.content.size) return null;
		let i = e.input.compositionNode;
		if (!i || !this.dom.contains(i.parentNode)) return null;
		if (this.node.inlineContent) {
			let e = i.nodeValue, a = ka(this.node.content, e, n - t, r - t);
			return a < 0 ? null : {
				node: i,
				pos: a,
				text: e
			};
		} else return {
			node: i,
			pos: -1,
			text: ""
		};
	}
	protectLocalComposition(e, { node: t, pos: n, text: r }) {
		if (this.getDesc(t)) return;
		let i = t;
		for (; i.parentNode != this.contentDOM; i = i.parentNode) {
			for (; i.previousSibling;) i.parentNode.removeChild(i.previousSibling);
			for (; i.nextSibling;) i.parentNode.removeChild(i.nextSibling);
			i.pmViewDesc &&= void 0;
		}
		let a = new ca(this, i, t, r);
		e.input.compositionNodes.push(a), this.children = Aa(this.children, n, n + r.length, e, a);
	}
	update(e, t, n, r) {
		return this.dirty == aa || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, t, n, r), !0);
	}
	updateInner(e, t, n, r) {
		this.updateOuterDeco(t), this.node = e, this.innerDeco = n, this.contentDOM && this.updateChildren(r, this.posAtStart), this.dirty = na;
	}
	updateOuterDeco(e) {
		if (Sa(e, this.outerDeco)) return;
		let t = this.nodeDOM.nodeType != 1, n = this.dom;
		this.dom = ya(this.dom, this.nodeDOM, va(this.outerDeco, this.node, t), va(e, this.node, t)), this.dom != n && (n.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e;
	}
	selectNode() {
		this.nodeDOM.nodeType == 1 && (this.nodeDOM.classList.add("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && (this.nodeDOM.draggable = !0));
	}
	deselectNode() {
		this.nodeDOM.nodeType == 1 && (this.nodeDOM.classList.remove("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && this.nodeDOM.removeAttribute("draggable"));
	}
	get domAtom() {
		return this.node.isAtom;
	}
};
function da(e, t, n, r, i) {
	xa(r, t, e);
	let a = new ua(void 0, e, t, n, r, r, r, i, 0);
	return a.contentDOM && a.updateChildren(i, 0), a;
}
var fa = class e extends ua {
	constructor(e, t, n, r, i, a, o) {
		super(e, t, n, r, i, null, a, o, 0);
	}
	parseRule() {
		let e = this.nodeDOM.parentNode;
		for (; e && e != this.dom && !e.pmIsDeco;) e = e.parentNode;
		return { skip: e || !0 };
	}
	update(e, t, n, r) {
		return this.dirty == aa || this.dirty != na && !this.inParent() || !e.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(t), (this.dirty != na || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text, r.trackWrites == this.nodeDOM && (r.trackWrites = null)), this.node = e, this.dirty = na, !0);
	}
	inParent() {
		let e = this.parent.contentDOM;
		for (let t = this.nodeDOM; t; t = t.parentNode) if (t == e) return !0;
		return !1;
	}
	domFromPos(e) {
		return {
			node: this.nodeDOM,
			offset: e
		};
	}
	localPosFromDOM(e, t, n) {
		return e == this.nodeDOM ? this.posAtStart + Math.min(t, this.node.text.length) : super.localPosFromDOM(e, t, n);
	}
	ignoreMutation(e) {
		return e.type != "characterData" && e.type != "selection";
	}
	slice(t, n, r) {
		let i = this.node.cut(t, n), a = document.createTextNode(i.text);
		return new e(this.parent, i, this.outerDeco, this.innerDeco, a, a, r);
	}
	markDirty(e, t) {
		super.markDirty(e, t), this.dom != this.nodeDOM && (e == 0 || t == this.nodeDOM.nodeValue.length) && (this.dirty = aa);
	}
	get domAtom() {
		return !1;
	}
	isText(e) {
		return this.node.text == e;
	}
}, pa = class extends oa {
	parseRule() {
		return { ignore: !0 };
	}
	matchesHack(e) {
		return this.dirty == na && this.dom.nodeName == e;
	}
	get domAtom() {
		return !0;
	}
	get ignoreForCoords() {
		return this.dom.nodeName == "IMG";
	}
}, ma = class extends ua {
	constructor(e, t, n, r, i, a, o, s, c, l) {
		super(e, t, n, r, i, a, o, c, l), this.spec = s;
	}
	update(e, t, n, r) {
		if (this.dirty == aa) return !1;
		if (this.spec.update && (this.node.type == e.type || this.spec.multiType)) {
			let i = this.spec.update(e, t, n);
			return i && this.updateInner(e, t, n, r), i;
		} else if (!this.contentDOM && !e.isLeaf) return !1;
		else return super.update(e, t, n, r);
	}
	selectNode() {
		this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
	}
	deselectNode() {
		this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
	}
	setSelection(e, t, n, r) {
		this.spec.setSelection ? this.spec.setSelection(e, t, n.root) : super.setSelection(e, t, n, r);
	}
	destroy() {
		this.spec.destroy && this.spec.destroy(), super.destroy();
	}
	stopEvent(e) {
		return this.spec.stopEvent ? this.spec.stopEvent(e) : !1;
	}
	ignoreMutation(e) {
		return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
	}
};
function ha(e, t, n) {
	let r = e.firstChild, i = !1;
	for (let a = 0; a < t.length; a++) {
		let o = t[a], s = o.dom;
		if (s.parentNode == e) {
			for (; s != r;) r = Ca(r), i = !0;
			r = r.nextSibling;
		} else i = !0, e.insertBefore(s, r);
		if (o instanceof la) {
			let t = r ? r.previousSibling : e.lastChild;
			ha(o.contentDOM, o.children, n), r = t ? t.nextSibling : e.firstChild;
		}
	}
	for (; r;) r = Ca(r), i = !0;
	i && n.trackWrites == e && (n.trackWrites = null);
}
var ga = function(e) {
	e && (this.nodeName = e);
};
ga.prototype = Object.create(null);
var _a = [new ga()];
function va(e, t, n) {
	if (e.length == 0) return _a;
	let r = n ? _a[0] : new ga(), i = [r];
	for (let a = 0; a < e.length; a++) {
		let o = e[a].type.attrs;
		if (o) {
			o.nodeName && i.push(r = new ga(o.nodeName));
			for (let e in o) {
				let a = o[e];
				a != null && (n && i.length == 1 && i.push(r = new ga(t.isInline ? "span" : "div")), e == "class" ? r.class = (r.class ? r.class + " " : "") + a : e == "style" ? r.style = (r.style ? r.style + ";" : "") + a : e != "nodeName" && (r[e] = a));
			}
		}
	}
	return i;
}
function ya(e, t, n, r) {
	if (n == _a && r == _a) return t;
	let i = t;
	for (let t = 0; t < r.length; t++) {
		let a = r[t], o = n[t];
		if (t) {
			let t;
			o && o.nodeName == a.nodeName && i != e && (t = i.parentNode) && t.nodeName.toLowerCase() == a.nodeName ? i = t : (t = document.createElement(a.nodeName), t.pmIsDeco = !0, t.appendChild(i), o = _a[0], i = t);
		}
		ba(i, o || _a[0], a);
	}
	return i;
}
function ba(e, t, n) {
	for (let r in t) r != "class" && r != "style" && r != "nodeName" && !(r in n) && e.removeAttribute(r);
	for (let r in n) r != "class" && r != "style" && r != "nodeName" && n[r] != t[r] && e.setAttribute(r, n[r]);
	if (t.class != n.class) {
		let r = t.class ? t.class.split(" ").filter(Boolean) : [], i = n.class ? n.class.split(" ").filter(Boolean) : [];
		for (let t = 0; t < r.length; t++) i.indexOf(r[t]) == -1 && e.classList.remove(r[t]);
		for (let t = 0; t < i.length; t++) r.indexOf(i[t]) == -1 && e.classList.add(i[t]);
		e.classList.length == 0 && e.removeAttribute("class");
	}
	if (t.style != n.style) {
		if (t.style) {
			let n = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, r;
			for (; r = n.exec(t.style);) e.style.removeProperty(r[1]);
		}
		n.style && (e.style.cssText += n.style);
	}
}
function xa(e, t, n) {
	return ya(e, e, _a, va(t, n, e.nodeType != 1));
}
function Sa(e, t) {
	if (e.length != t.length) return !1;
	for (let n = 0; n < e.length; n++) if (!e[n].type.eq(t[n].type)) return !1;
	return !0;
}
function Ca(e) {
	let t = e.nextSibling;
	return e.parentNode.removeChild(e), t;
}
var wa = class {
	constructor(e, t, n) {
		this.lock = t, this.view = n, this.index = 0, this.stack = [], this.changed = !1, this.top = e, this.preMatch = Ta(e.node.content, e);
	}
	destroyBetween(e, t) {
		if (e != t) {
			for (let n = e; n < t; n++) this.top.children[n].destroy();
			this.top.children.splice(e, t - e), this.changed = !0;
		}
	}
	destroyRest() {
		this.destroyBetween(this.index, this.top.children.length);
	}
	syncToMarks(e, t, n, r) {
		let i = 0, a = this.stack.length >> 1, o = Math.min(a, e.length);
		for (; i < o && (i == a - 1 ? this.top : this.stack[i + 1 << 1]).matchesMark(e[i]) && e[i].type.spec.spanning !== !1;) i++;
		for (; i < a;) this.destroyRest(), this.top.dirty = na, this.index = this.stack.pop(), this.top = this.stack.pop(), a--;
		for (; a < e.length;) {
			this.stack.push(this.top, this.index + 1);
			let i = -1, o = this.top.children.length;
			r < this.preMatch.index && (o = Math.min(this.index + 3, o));
			for (let t = this.index; t < o; t++) {
				let n = this.top.children[t];
				if (n.matchesMark(e[a]) && !this.isLocked(n.dom)) {
					i = t;
					break;
				}
			}
			if (i > -1) i > this.index && (this.changed = !0, this.destroyBetween(this.index, i)), this.top = this.top.children[this.index];
			else {
				let r = la.create(this.top, e[a], t, n);
				this.top.children.splice(this.index, 0, r), this.top = r, this.changed = !0;
			}
			this.index = 0, a++;
		}
	}
	findNodeMatch(e, t, n, r) {
		let i = -1, a;
		if (r >= this.preMatch.index && (a = this.preMatch.matches[r - this.preMatch.index]).parent == this.top && a.matchesNode(e, t, n)) i = this.top.children.indexOf(a, this.index);
		else for (let r = this.index, a = Math.min(this.top.children.length, r + 5); r < a; r++) {
			let a = this.top.children[r];
			if (a.matchesNode(e, t, n) && !this.preMatch.matched.has(a)) {
				i = r;
				break;
			}
		}
		return i < 0 ? !1 : (this.destroyBetween(this.index, i), this.index++, !0);
	}
	updateNodeAt(e, t, n, r, i) {
		let a = this.top.children[r];
		return a.dirty == aa && a.dom == a.contentDOM && (a.dirty = ia), a.update(e, t, n, i) ? (this.destroyBetween(this.index, r), this.index++, !0) : !1;
	}
	findIndexWithChild(e) {
		for (;;) {
			let t = e.parentNode;
			if (!t) return -1;
			if (t == this.top.contentDOM) {
				let t = e.pmViewDesc;
				if (t) {
					for (let e = this.index; e < this.top.children.length; e++) if (this.top.children[e] == t) return e;
				}
				return -1;
			}
			e = t;
		}
	}
	updateNextNode(e, t, n, r, i, a) {
		for (let o = this.index; o < this.top.children.length; o++) {
			let s = this.top.children[o];
			if (s instanceof ua) {
				let c = this.preMatch.matched.get(s);
				if (c != null && c != i) return !1;
				let l = s.dom, u, d = this.isLocked(l) && !(e.isText && s.node && s.node.isText && s.nodeDOM.nodeValue == e.text && s.dirty != aa && Sa(t, s.outerDeco));
				if (!d && s.update(e, t, n, r)) return this.destroyBetween(this.index, o), s.dom != l && (this.changed = !0), this.index++, !0;
				if (!d && (u = this.recreateWrapper(s, e, t, n, r, a))) return this.destroyBetween(this.index, o), this.top.children[this.index] = u, u.contentDOM && (u.dirty = ia, u.updateChildren(r, a + 1), u.dirty = na), this.changed = !0, this.index++, !0;
				break;
			}
		}
		return !1;
	}
	recreateWrapper(e, t, n, r, i, a) {
		if (e.dirty || t.isAtom || !e.children.length || !e.node.content.eq(t.content) || !Sa(n, e.outerDeco) || !r.eq(e.innerDeco)) return null;
		let o = ua.create(this.top, t, n, r, i, a);
		if (o.contentDOM) {
			o.children = e.children, e.children = [];
			for (let e of o.children) e.parent = o;
		}
		return e.destroy(), o;
	}
	addNode(e, t, n, r, i) {
		let a = ua.create(this.top, e, t, n, r, i);
		a.contentDOM && a.updateChildren(r, i + 1), this.top.children.splice(this.index++, 0, a), this.changed = !0;
	}
	placeWidget(e, t, n) {
		let r = this.index < this.top.children.length ? this.top.children[this.index] : null;
		if (r && r.matchesWidget(e) && (e == r.widget || !r.widget.type.toDOM.parentNode)) this.index++;
		else {
			let r = new sa(this.top, e, t, n);
			this.top.children.splice(this.index++, 0, r), this.changed = !0;
		}
	}
	addTextblockHacks() {
		let e = this.top.children[this.index - 1], t = this.top;
		for (; e instanceof la;) t = e, e = t.children[t.children.length - 1];
		(!e || !(e instanceof fa) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((P || N) && e && e.dom.contentEditable == "false" && this.addHackNode("IMG", t), this.addHackNode("BR", this.top));
	}
	addHackNode(e, t) {
		if (t == this.top && this.index < t.children.length && t.children[this.index].matchesHack(e)) this.index++;
		else {
			let n = document.createElement(e);
			e == "IMG" && (n.className = "ProseMirror-separator", n.alt = ""), e == "BR" && (n.className = "ProseMirror-trailingBreak");
			let r = new pa(this.top, [], n, null);
			t == this.top ? t.children.splice(this.index++, 0, r) : t.children.push(r), this.changed = !0;
		}
	}
	isLocked(e) {
		return this.lock && (e == this.lock || e.nodeType == 1 && e.contains(this.lock.parentNode));
	}
};
function Ta(e, t) {
	let n = t, r = n.children.length, i = e.childCount, a = new Map(), o = [];
	outer: for (; i > 0;) {
		let s;
		for (;;) if (r) {
			let e = n.children[r - 1];
			if (e instanceof la) n = e, r = e.children.length;
			else {
				s = e, r--;
				break;
			}
		} else if (n == t) break outer;
		else r = n.parent.children.indexOf(n), n = n.parent;
		let c = s.node;
		if (c) {
			if (c != e.child(i - 1)) break;
			--i, a.set(s, i), o.push(s);
		}
	}
	return {
		index: i,
		matched: a,
		matches: o.reverse()
	};
}
function Ea(e, t) {
	return e.type.side - t.type.side;
}
function Da(e, t, n, r) {
	let i = t.locals(e), a = 0;
	if (i.length == 0) {
		for (let n = 0; n < e.childCount; n++) {
			let o = e.child(n);
			r(o, i, t.forChild(a, o), n), a += o.nodeSize;
		}
		return;
	}
	let o = 0, s = [], c = null;
	for (let l = 0;;) {
		let u, d;
		for (; o < i.length && i[o].to == a;) {
			let e = i[o++];
			e.widget && (u ? (d ||= [u]).push(e) : u = e);
		}
		if (u) if (d) {
			d.sort(Ea);
			for (let e = 0; e < d.length; e++) n(d[e], l, !!c);
		} else n(u, l, !!c);
		let f, p;
		if (c) p = -1, f = c, c = null;
		else if (l < e.childCount) p = l, f = e.child(l++);
		else break;
		for (let e = 0; e < s.length; e++) s[e].to <= a && s.splice(e--, 1);
		for (; o < i.length && i[o].from <= a && i[o].to > a;) s.push(i[o++]);
		let m = a + f.nodeSize;
		if (f.isText) {
			let e = m;
			o < i.length && i[o].from < e && (e = i[o].from);
			for (let t = 0; t < s.length; t++) s[t].to < e && (e = s[t].to);
			e < m && (c = f.cut(e - a), f = f.cut(0, e - a), m = e, p = -1);
		} else for (; o < i.length && i[o].to < m;) o++;
		let h = f.isInline && !f.isLeaf ? s.filter((e) => !e.inline) : s.slice();
		r(f, h, t.forChild(a, f), p), a = m;
	}
}
function Oa(e) {
	if (e.nodeName == "UL" || e.nodeName == "OL") {
		let t = e.style.cssText;
		e.style.cssText = t + "; list-style: square !important", window.getComputedStyle(e).listStyle, e.style.cssText = t;
	}
}
function ka(e, t, n, r) {
	for (let i = 0, a = 0; i < e.childCount && a <= r;) {
		let o = e.child(i++), s = a;
		if (a += o.nodeSize, !o.isText) continue;
		let c = o.text;
		for (; i < e.childCount;) {
			let t = e.child(i++);
			if (a += t.nodeSize, !t.isText) break;
			c += t.text;
		}
		if (a >= n) {
			if (a >= r && c.slice(r - t.length - s, r - s) == t) return r - t.length;
			let e = s < r ? c.lastIndexOf(t, r - s - 1) : -1;
			if (e >= 0 && e + t.length + s >= n) return s + e;
			if (n == r && c.length >= r + t.length - s && c.slice(r - s, r - s + t.length) == t) return r;
		}
	}
	return -1;
}
function Aa(e, t, n, r, i) {
	let a = [];
	for (let o = 0, s = 0; o < e.length; o++) {
		let c = e[o], l = s, u = s += c.size;
		l >= n || u <= t ? a.push(c) : (l < t && a.push(c.slice(0, t - l, r)), i &&= (a.push(i), void 0), u > n && a.push(c.slice(n - l, c.size, r)));
	}
	return a;
}
function ja(e, t = null) {
	let n = e.domSelectionRange(), r = e.state.doc;
	if (!n.focusNode) return null;
	let i = e.docView.nearestDesc(n.focusNode), a = i && i.size == 0, o = e.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
	if (o < 0) return null;
	let s = r.resolve(o), c, l;
	if (ri(n)) {
		for (c = o; i && !i.node;) i = i.parent;
		let e = i.node;
		if (i && e.isAtom && k.isSelectable(e) && i.parent && !(e.isInline && ti(n.focusNode, n.focusOffset, i.dom))) {
			let e = i.posBefore;
			l = new k(o == e ? s : r.resolve(e));
		}
	} else {
		if (n instanceof e.dom.ownerDocument.defaultView.Selection && n.rangeCount > 1) {
			let t = o, i = o;
			for (let r = 0; r < n.rangeCount; r++) {
				let a = n.getRangeAt(r);
				t = Math.min(t, e.docView.posFromDOM(a.startContainer, a.startOffset, 1)), i = Math.max(i, e.docView.posFromDOM(a.endContainer, a.endOffset, -1));
			}
			if (t < 0) return null;
			[c, o] = i == e.state.selection.anchor ? [i, t] : [t, i], s = r.resolve(o);
		} else c = e.docView.posFromDOM(n.anchorNode, n.anchorOffset, 1);
		if (c < 0) return null;
	}
	let u = r.resolve(c);
	if (!l) {
		let n = t == "pointer" || e.state.selection.head < s.pos && !a ? 1 : -1;
		l = Ha(e, u, s, n);
	}
	return l;
}
function Ma(e) {
	return e.editable ? e.hasFocus() : Wa(e) && document.activeElement && document.activeElement.contains(e.dom);
}
function Na(e, t = !1) {
	let n = e.state.selection;
	if (Ba(e, n), Ma(e)) {
		if (!t && e.input.mouseDown && e.input.mouseDown.allowDefault && N) {
			let t = e.domSelectionRange(), n = e.domObserver.currentSelection;
			if (t.anchorNode && n.anchorNode && Yr(t.anchorNode, t.anchorOffset, n.anchorNode, n.anchorOffset)) {
				e.input.mouseDown.delayedSelectionSync = !0, e.domObserver.setCurSelection();
				return;
			}
		}
		if (e.domObserver.disconnectSelection(), e.cursorWrapper) za(e);
		else {
			let { anchor: r, head: i } = n, a, o;
			Pa && !(n instanceof O) && (n.$from.parent.inlineContent || (a = Fa(e, n.from)), !n.empty && !n.$from.parent.inlineContent && (o = Fa(e, n.to))), e.docView.setSelection(r, i, e, t), Pa && (a && La(a), o && La(o)), n.visible ? e.dom.classList.remove("ProseMirror-hideselection") : (e.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && Ra(e));
		}
		e.domObserver.setCurSelection(), e.domObserver.connectSelection();
	}
}
var Pa = P || N && _i < 63;
function Fa(e, t) {
	let { node: n, offset: r } = e.docView.domFromPos(t, 0), i = r < n.childNodes.length ? n.childNodes[r] : null, a = r ? n.childNodes[r - 1] : null;
	if (P && i && i.contentEditable == "false") return Ia(i);
	if ((!i || i.contentEditable == "false") && (!a || a.contentEditable == "false")) {
		if (i) return Ia(i);
		if (a) return Ia(a);
	}
}
function Ia(e) {
	return e.contentEditable = "true", P && e.draggable && (e.draggable = !1, e.wasDraggable = !0), e;
}
function La(e) {
	e.contentEditable = "false", e.wasDraggable &&= (e.draggable = !0, null);
}
function Ra(e) {
	let t = e.dom.ownerDocument;
	t.removeEventListener("selectionchange", e.input.hideSelectionGuard);
	let n = e.domSelectionRange(), r = n.anchorNode, i = n.anchorOffset;
	t.addEventListener("selectionchange", e.input.hideSelectionGuard = () => {
		(n.anchorNode != r || n.anchorOffset != i) && (t.removeEventListener("selectionchange", e.input.hideSelectionGuard), setTimeout(() => {
			(!Ma(e) || e.state.selection.visible) && e.dom.classList.remove("ProseMirror-hideselection");
		}, 20));
	});
}
function za(e) {
	let t = e.domSelection();
	if (!t) return;
	let n = e.cursorWrapper.dom, r = n.nodeName == "IMG";
	r ? t.collapse(n.parentNode, M(n) + 1) : t.collapse(n, 0), !r && !e.state.selection.visible && pi && mi <= 11 && (n.disabled = !0, n.disabled = !1);
}
function Ba(e, t) {
	if (t instanceof k) {
		let n = e.docView.descAt(t.from);
		n != e.lastSelectedViewDesc && (Va(e), n && n.selectNode(), e.lastSelectedViewDesc = n);
	} else Va(e);
}
function Va(e) {
	e.lastSelectedViewDesc &&= (e.lastSelectedViewDesc.parent && e.lastSelectedViewDesc.deselectNode(), void 0);
}
function Ha(e, t, n, r) {
	return e.someProp("createSelectionBetween", (r) => r(e, t, n)) || O.between(t, n, r);
}
function Ua(e) {
	return e.editable && !e.hasFocus() ? !1 : Wa(e);
}
function Wa(e) {
	let t = e.domSelectionRange();
	if (!t.anchorNode) return !1;
	try {
		return e.dom.contains(t.anchorNode.nodeType == 3 ? t.anchorNode.parentNode : t.anchorNode) && (e.editable || e.dom.contains(t.focusNode.nodeType == 3 ? t.focusNode.parentNode : t.focusNode));
	} catch {
		return !1;
	}
}
function Ga(e) {
	let t = e.docView.domFromPos(e.state.selection.anchor, 0), n = e.domSelectionRange();
	return Yr(t.node, t.offset, n.anchorNode, n.anchorOffset);
}
function Ka(e, t) {
	let { $anchor: n, $head: r } = e.selection, i = t > 0 ? n.max(r) : n.min(r), a = i.parent.inlineContent ? i.depth ? e.doc.resolve(t > 0 ? i.after() : i.before()) : null : i;
	return a && D.findFrom(a, t);
}
function qa(e, t) {
	return e.dispatch(e.state.tr.setSelection(t).scrollIntoView()), !0;
}
function Ja(e, t, n) {
	let r = e.state.selection;
	if (r instanceof O) {
		if (n.indexOf("s") > -1) {
			let { $head: n } = r, i = n.textOffset ? null : t < 0 ? n.nodeBefore : n.nodeAfter;
			if (!i || i.isText || !i.isLeaf) return !1;
			let a = e.state.doc.resolve(n.pos + i.nodeSize * (t < 0 ? -1 : 1));
			return qa(e, new O(r.$anchor, a));
		} else if (!r.empty) return !1;
		else if (e.endOfTextblock(t > 0 ? "forward" : "backward")) {
			let n = Ka(e.state, t);
			return n && n instanceof k ? qa(e, n) : !1;
		} else if (!(yi && n.indexOf("m") > -1)) {
			let n = r.$head, i = n.textOffset ? null : t < 0 ? n.nodeBefore : n.nodeAfter, a;
			if (!i || i.isText) return !1;
			let o = t < 0 ? n.pos - i.nodeSize : n.pos;
			return i.isAtom || (a = e.docView.descAt(o)) && !a.contentDOM ? k.isSelectable(i) ? qa(e, new k(t < 0 ? e.state.doc.resolve(n.pos - i.nodeSize) : n)) : Si ? qa(e, new O(e.state.doc.resolve(t < 0 ? o : o + i.nodeSize))) : !1 : !1;
		}
	} else if (r instanceof k && r.node.isInline) return qa(e, new O(t > 0 ? r.$to : r.$from));
	else {
		let n = Ka(e.state, t);
		return n ? qa(e, n) : !1;
	}
}
function Ya(e) {
	return e.nodeType == 3 ? e.nodeValue.length : e.childNodes.length;
}
function Xa(e, t) {
	let n = e.pmViewDesc;
	return n && n.size == 0 && (t < 0 || e.nextSibling || e.nodeName != "BR");
}
function Za(e, t) {
	return t < 0 ? Qa(e) : $a(e);
}
function Qa(e) {
	let t = e.domSelectionRange(), n = t.focusNode, r = t.focusOffset;
	if (!n) return;
	let i, a, o = !1;
	for (hi && n.nodeType == 1 && r < Ya(n) && Xa(n.childNodes[r], -1) && (o = !0);;) if (r > 0) {
		if (n.nodeType != 1) break;
		{
			let e = n.childNodes[r - 1];
			if (Xa(e, -1)) i = n, a = --r;
			else if (e.nodeType == 3) n = e, r = n.nodeValue.length;
			else break;
		}
	} else if (eo(n)) break;
	else {
		let t = n.previousSibling;
		for (; t && Xa(t, -1);) i = n.parentNode, a = M(t), t = t.previousSibling;
		if (t) n = t, r = Ya(n);
		else {
			if (n = n.parentNode, n == e.dom) break;
			r = 0;
		}
	}
	o ? ro(e, n, r) : i && ro(e, i, a);
}
function $a(e) {
	let t = e.domSelectionRange(), n = t.focusNode, r = t.focusOffset;
	if (!n) return;
	let i = Ya(n), a, o;
	for (;;) if (r < i) {
		if (n.nodeType != 1) break;
		let e = n.childNodes[r];
		if (Xa(e, 1)) a = n, o = ++r;
		else break;
	} else if (eo(n)) break;
	else {
		let t = n.nextSibling;
		for (; t && Xa(t, 1);) a = t.parentNode, o = M(t) + 1, t = t.nextSibling;
		if (t) n = t, r = 0, i = Ya(n);
		else {
			if (n = n.parentNode, n == e.dom) break;
			r = i = 0;
		}
	}
	a && ro(e, a, o);
}
function eo(e) {
	let t = e.pmViewDesc;
	return t && t.node && t.node.isBlock;
}
function to(e, t) {
	for (; e && t == e.childNodes.length && !ni(e);) t = M(e) + 1, e = e.parentNode;
	for (; e && t < e.childNodes.length;) {
		let n = e.childNodes[t];
		if (n.nodeType == 3) return n;
		if (n.nodeType == 1 && n.contentEditable == "false") break;
		e = n, t = 0;
	}
}
function no(e, t) {
	for (; e && !t && !ni(e);) t = M(e), e = e.parentNode;
	for (; e && t;) {
		let n = e.childNodes[t - 1];
		if (n.nodeType == 3) return n;
		if (n.nodeType == 1 && n.contentEditable == "false") break;
		e = n, t = e.childNodes.length;
	}
}
function ro(e, t, n) {
	if (t.nodeType != 3) {
		let e, r;
		(r = to(t, n)) ? (t = r, n = 0) : (e = no(t, n)) && (t = e, n = e.nodeValue.length);
	}
	let r = e.domSelection();
	if (!r) return;
	if (ri(r)) {
		let e = document.createRange();
		e.setEnd(t, n), e.setStart(t, n), r.removeAllRanges(), r.addRange(e);
	} else r.extend && r.extend(t, n);
	e.domObserver.setCurSelection();
	let { state: i } = e;
	setTimeout(() => {
		e.state == i && Na(e);
	}, 50);
}
function io(e, t) {
	let n = e.state.doc.resolve(t);
	if (!(N || bi) && n.parent.inlineContent) {
		let r = e.coordsAtPos(t);
		if (t > n.start()) {
			let n = e.coordsAtPos(t - 1), i = (n.top + n.bottom) / 2;
			if (i > r.top && i < r.bottom && Math.abs(n.left - r.left) > 1) return n.left < r.left ? "ltr" : "rtl";
		}
		if (t < n.end()) {
			let n = e.coordsAtPos(t + 1), i = (n.top + n.bottom) / 2;
			if (i > r.top && i < r.bottom && Math.abs(n.left - r.left) > 1) return n.left > r.left ? "ltr" : "rtl";
		}
	}
	return getComputedStyle(e.dom).direction == "rtl" ? "rtl" : "ltr";
}
function ao(e, t, n) {
	let r = e.state.selection;
	if (r instanceof O && !r.empty || n.indexOf("s") > -1 || yi && n.indexOf("m") > -1) return !1;
	let { $from: i, $to: a } = r;
	if (!i.parent.inlineContent || e.endOfTextblock(t < 0 ? "up" : "down")) {
		let n = Ka(e.state, t);
		if (n && n instanceof k) return qa(e, n);
	}
	if (!i.parent.inlineContent) {
		let n = t < 0 ? i : a, o = r instanceof zn ? D.near(n, t) : D.findFrom(n, t);
		return o ? qa(e, o) : !1;
	}
	return !1;
}
function oo(e, t) {
	if (!(e.state.selection instanceof O)) return !0;
	let { $head: n, $anchor: r, empty: i } = e.state.selection;
	if (!n.sameParent(r)) return !0;
	if (!i) return !1;
	if (e.endOfTextblock(t > 0 ? "forward" : "backward")) return !0;
	let a = !n.textOffset && (t < 0 ? n.nodeBefore : n.nodeAfter);
	if (a && !a.isText) {
		let r = e.state.tr;
		return t < 0 ? r.delete(n.pos - a.nodeSize, n.pos) : r.delete(n.pos, n.pos + a.nodeSize), e.dispatch(r), !0;
	}
	return !1;
}
function so(e, t, n) {
	e.domObserver.stop(), t.contentEditable = n, e.domObserver.start();
}
function co(e) {
	if (!P || e.state.selection.$head.parentOffset > 0) return !1;
	let { focusNode: t, focusOffset: n } = e.domSelectionRange();
	if (t && t.nodeType == 1 && n == 0 && t.firstChild && t.firstChild.contentEditable == "false") {
		let n = t.firstChild;
		so(e, n, "true"), setTimeout(() => so(e, n, "false"), 20);
	}
	return !1;
}
function lo(e) {
	let t = "";
	return e.ctrlKey && (t += "c"), e.metaKey && (t += "m"), e.altKey && (t += "a"), e.shiftKey && (t += "s"), t;
}
function uo(e, t) {
	let n = t.keyCode, r = lo(t);
	if (n == 8 || yi && n == 72 && r == "c") return oo(e, -1) || Za(e, -1);
	if (n == 46 && !t.shiftKey || yi && n == 68 && r == "c") return oo(e, 1) || Za(e, 1);
	if (n == 13 || n == 27) return !0;
	if (n == 37 || yi && n == 66 && r == "c") {
		let t = n == 37 ? io(e, e.state.selection.from) == "ltr" ? -1 : 1 : -1;
		return Ja(e, t, r) || Za(e, t);
	} else if (n == 39 || yi && n == 70 && r == "c") {
		let t = n == 39 ? io(e, e.state.selection.from) == "ltr" ? 1 : -1 : 1;
		return Ja(e, t, r) || Za(e, t);
	} else if (n == 38 || yi && n == 80 && r == "c") return ao(e, -1, r) || Za(e, -1);
	else if (n == 40 || yi && n == 78 && r == "c") return co(e) || ao(e, 1, r) || Za(e, 1);
	else if (r == (yi ? "m" : "c") && (n == 66 || n == 73 || n == 89 || n == 90)) return !0;
	return !1;
}
function fo(e, t) {
	e.someProp("transformCopied", (n) => {
		t = n(t, e);
	});
	let n = [], { content: r, openStart: i, openEnd: a } = t;
	for (; i > 1 && a > 1 && r.childCount == 1 && r.firstChild.childCount == 1;) {
		i--, a--;
		let e = r.firstChild;
		n.push(e.type.name, e.attrs == e.type.defaultAttrs ? null : e.attrs), r = e.content;
	}
	let o = e.someProp("clipboardSerializer") || mt.fromSchema(e.state.schema), s = Co(), c = s.createElement("div");
	c.appendChild(o.serializeFragment(r, { document: s }));
	let l = c.firstChild, u, d = 0;
	for (; l && l.nodeType == 1 && (u = xo[l.nodeName.toLowerCase()]);) {
		for (let e = u.length - 1; e >= 0; e--) {
			let t = s.createElement(u[e]);
			for (; c.firstChild;) t.appendChild(c.firstChild);
			c.appendChild(t), d++;
		}
		l = c.firstChild;
	}
	return l && l.nodeType == 1 && l.setAttribute("data-pm-slice", `${i} ${a}${d ? ` -${d}` : ""} ${JSON.stringify(n)}`), {
		dom: c,
		text: e.someProp("clipboardTextSerializer", (n) => n(t, e)) || t.content.textBetween(0, t.content.size, "\n\n"),
		slice: t
	};
}
function po(e, t, n, r, i) {
	let a = i.parent.type.spec.code, o, s;
	if (!n && !t) return null;
	let c = !!t && (r || a || !n);
	if (c) {
		if (e.someProp("transformPastedText", (n) => {
			t = n(t, a || r, e);
		}), a) return s = new w(S.from(e.state.schema.text(t.replace(/\r\n?/g, "\n"))), 0, 0), e.someProp("transformPasted", (t) => {
			s = t(s, e, !0);
		}), s;
		let n = e.someProp("clipboardTextParser", (n) => n(t, i, r, e));
		if (n) s = n;
		else {
			let n = i.marks(), { schema: r } = e.state, a = mt.fromSchema(r);
			o = document.createElement("div"), t.split(/(?:\r\n?|\n)+/).forEach((e) => {
				let t = o.appendChild(document.createElement("p"));
				e && t.appendChild(a.serializeNode(r.text(e, n)));
			});
		}
	} else e.someProp("transformPastedHTML", (t) => {
		n = t(n, e);
	}), o = Eo(n), Si && Do(o);
	let l = o && o.querySelector("[data-pm-slice]"), u = l && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(l.getAttribute("data-pm-slice") || "");
	if (u && u[3]) for (let e = +u[3]; e > 0; e--) {
		let e = o.firstChild;
		for (; e && e.nodeType != 1;) e = e.nextSibling;
		if (!e) break;
		o = e;
	}
	if (s ||= (e.someProp("clipboardParser") || e.someProp("domParser") || et.fromSchema(e.state.schema)).parseSlice(o, {
		preserveWhitespace: !!(c || u),
		context: i,
		ruleFromNode(e) {
			return e.nodeName == "BR" && !e.nextSibling && e.parentNode && !mo.test(e.parentNode.nodeName) ? { ignore: !0 } : null;
		}
	}), u) s = Oo(bo(s, +u[1], +u[2]), u[4]);
	else if (s = w.maxOpen(ho(s.content, i), !0), s.openStart || s.openEnd) {
		let e = 0, t = 0;
		for (let t = s.content.firstChild; e < s.openStart && !t.type.spec.isolating; e++, t = t.firstChild);
		for (let e = s.content.lastChild; t < s.openEnd && !e.type.spec.isolating; t++, e = e.lastChild);
		s = bo(s, e, t);
	}
	return e.someProp("transformPasted", (t) => {
		s = t(s, e, c);
	}), s;
}
var mo = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function ho(e, t) {
	if (e.childCount < 2) return e;
	for (let n = t.depth; n >= 0; n--) {
		let r = t.node(n).contentMatchAt(t.index(n)), i, a = [];
		if (e.forEach((e) => {
			if (!a) return;
			let t = r.findWrapping(e.type), n;
			if (!t) return a = null;
			if (n = a.length && i.length && _o(t, i, e, a[a.length - 1], 0)) a[a.length - 1] = n;
			else {
				a.length && (a[a.length - 1] = vo(a[a.length - 1], i.length));
				let n = go(e, t);
				a.push(n), r = r.matchType(n.type), i = t;
			}
		}), a) return S.from(a);
	}
	return e;
}
function go(e, t, n = 0) {
	for (let r = t.length - 1; r >= n; r--) e = t[r].create(null, S.from(e));
	return e;
}
function _o(e, t, n, r, i) {
	if (i < e.length && i < t.length && e[i] == t[i]) {
		let a = _o(e, t, n, r.lastChild, i + 1);
		if (a) return r.copy(r.content.replaceChild(r.childCount - 1, a));
		if (r.contentMatchAt(r.childCount).matchType(i == e.length - 1 ? n.type : e[i + 1])) return r.copy(r.content.append(S.from(go(n, e, i + 1))));
	}
}
function vo(e, t) {
	if (t == 0) return e;
	let n = e.content.replaceChild(e.childCount - 1, vo(e.lastChild, t - 1)), r = e.contentMatchAt(e.childCount).fillBefore(S.empty, !0);
	return e.copy(n.append(r));
}
function yo(e, t, n, r, i, a) {
	let o = t < 0 ? e.firstChild : e.lastChild, s = o.content;
	return e.childCount > 1 && (a = 0), i < r - 1 && (s = yo(s, t, n, r, i + 1, a)), i >= n && (s = t < 0 ? o.contentMatchAt(0).fillBefore(s, a <= i).append(s) : s.append(o.contentMatchAt(o.childCount).fillBefore(S.empty, !0))), e.replaceChild(t < 0 ? 0 : e.childCount - 1, o.copy(s));
}
function bo(e, t, n) {
	return t < e.openStart && (e = new w(yo(e.content, -1, t, e.openStart, 0, e.openEnd), t, e.openEnd)), n < e.openEnd && (e = new w(yo(e.content, 1, n, e.openEnd, 0, 0), e.openStart, n)), e;
}
var xo = {
	thead: ["table"],
	tbody: ["table"],
	tfoot: ["table"],
	caption: ["table"],
	colgroup: ["table"],
	col: ["table", "colgroup"],
	tr: ["table", "tbody"],
	td: [
		"table",
		"tbody",
		"tr"
	],
	th: [
		"table",
		"tbody",
		"tr"
	]
}, So = null;
function Co() {
	return So ||= document.implementation.createHTMLDocument("title");
}
var wo = null;
function To(e) {
	let t = window.trustedTypes;
	return t ? (wo ||= t.defaultPolicy || t.createPolicy("ProseMirrorClipboard", { createHTML: (e) => e }), wo.createHTML(e)) : e;
}
function Eo(e) {
	let t = /^(\s*<meta [^>]*>)*/.exec(e);
	t && (e = e.slice(t[0].length));
	let n = Co().createElement("div"), r = /<([a-z][^>\s]+)/i.exec(e), i;
	if ((i = r && xo[r[1].toLowerCase()]) && (e = i.map((e) => "<" + e + ">").join("") + e + i.map((e) => "</" + e + ">").reverse().join("")), n.innerHTML = To(e), i) for (let e = 0; e < i.length; e++) n = n.querySelector(i[e]) || n;
	return n;
}
function Do(e) {
	let t = e.querySelectorAll(N ? "span:not([class]):not([style])" : "span.Apple-converted-space");
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		r.childNodes.length == 1 && r.textContent == "\xA0" && r.parentNode && r.parentNode.replaceChild(e.ownerDocument.createTextNode(" "), r);
	}
}
function Oo(e, t) {
	if (!e.size) return e;
	let n = e.content.firstChild.type.schema, r;
	try {
		r = JSON.parse(t);
	} catch {
		return e;
	}
	let { content: i, openStart: a, openEnd: o } = e;
	for (let e = r.length - 2; e >= 0; e -= 2) {
		let t = n.nodes[r[e]];
		if (!t || t.hasRequiredAttrs()) break;
		i = S.from(t.create(r[e + 1], i)), a++, o++;
	}
	return new w(i, a, o);
}
var F = {}, I = {}, ko = {
	touchstart: !0,
	touchmove: !0
}, Ao = class {
	constructor() {
		this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = {
			time: 0,
			x: 0,
			y: 0,
			type: "",
			button: 0
		}, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastChromeDelete = 0, this.composing = !1, this.compositionNode = null, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.badSafariComposition = !1, this.compositionPendingChanges = 0, this.domChangeCount = 0, this.eventHandlers = Object.create(null), this.hideSelectionGuard = null;
	}
};
function jo(e) {
	for (let t in F) {
		let n = F[t];
		e.dom.addEventListener(t, e.input.eventHandlers[t] = (t) => {
			Io(e, t) && !Fo(e, t) && (e.editable || !(t.type in I)) && n(e, t);
		}, ko[t] ? { passive: !0 } : void 0);
	}
	P && e.dom.addEventListener("input", () => null), Po(e);
}
function Mo(e, t) {
	e.input.lastSelectionOrigin = t, e.input.lastSelectionTime = Date.now();
}
function No(e) {
	e.domObserver.stop();
	for (let t in e.input.eventHandlers) e.dom.removeEventListener(t, e.input.eventHandlers[t]);
	clearTimeout(e.input.composingTimeout), clearTimeout(e.input.lastIOSEnterFallbackTimeout);
}
function Po(e) {
	e.someProp("handleDOMEvents", (t) => {
		for (let n in t) e.input.eventHandlers[n] || e.dom.addEventListener(n, e.input.eventHandlers[n] = (t) => Fo(e, t));
	});
}
function Fo(e, t) {
	return e.someProp("handleDOMEvents", (n) => {
		let r = n[t.type];
		return r ? r(e, t) || t.defaultPrevented : !1;
	});
}
function Io(e, t) {
	if (!t.bubbles) return !0;
	if (t.defaultPrevented) return !1;
	for (let n = t.target; n != e.dom; n = n.parentNode) if (!n || n.nodeType == 11 || n.pmViewDesc && n.pmViewDesc.stopEvent(t)) return !1;
	return !0;
}
function Lo(e, t) {
	!Fo(e, t) && F[t.type] && (e.editable || !(t.type in I)) && F[t.type](e, t);
}
I.keydown = (e, t) => {
	let n = t;
	if (e.input.shiftKey = n.keyCode == 16 || n.shiftKey, !Zo(e, n) && (e.input.lastKeyCode = n.keyCode, e.input.lastKeyCodeTime = Date.now(), !(xi && N && n.keyCode == 13))) if (n.keyCode != 229 && e.domObserver.forceFlush(), vi && n.keyCode == 13 && !n.ctrlKey && !n.altKey && !n.metaKey) {
		let t = Date.now();
		e.input.lastIOSEnter = t, e.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
			e.input.lastIOSEnter == t && (e.someProp("handleKeyDown", (t) => t(e, ii(13, "Enter"))), e.input.lastIOSEnter = 0);
		}, 200);
	} else e.someProp("handleKeyDown", (t) => t(e, n)) || uo(e, n) ? n.preventDefault() : Mo(e, "key");
}, I.keyup = (e, t) => {
	t.keyCode == 16 && (e.input.shiftKey = !1);
}, I.keypress = (e, t) => {
	let n = t;
	if (Zo(e, n) || !n.charCode || n.ctrlKey && !n.altKey || yi && n.metaKey) return;
	if (e.someProp("handleKeyPress", (t) => t(e, n))) {
		n.preventDefault();
		return;
	}
	let r = e.state.selection;
	if (!(r instanceof O) || !r.$from.sameParent(r.$to)) {
		let t = String.fromCharCode(n.charCode), i = () => e.state.tr.insertText(t).scrollIntoView();
		!/[\r\n]/.test(t) && !e.someProp("handleTextInput", (n) => n(e, r.$from.pos, r.$to.pos, t, i)) && e.dispatch(i()), n.preventDefault();
	}
};
function Ro(e) {
	return {
		left: e.clientX,
		top: e.clientY
	};
}
function zo(e, t) {
	let n = t.x - e.clientX, r = t.y - e.clientY;
	return n * n + r * r < 100;
}
function Bo(e, t, n, r, i) {
	if (r == -1) return !1;
	let a = e.state.doc.resolve(r);
	for (let r = a.depth + 1; r > 0; r--) if (e.someProp(t, (t) => r > a.depth ? t(e, n, a.nodeAfter, a.before(r), i, !0) : t(e, n, a.node(r), a.before(r), i, !1))) return !0;
	return !1;
}
function Vo(e, t, n) {
	if (e.focused || e.focus(), e.state.selection.eq(t)) return;
	let r = e.state.tr.setSelection(t);
	n == "pointer" && r.setMeta("pointer", !0), e.dispatch(r);
}
function Ho(e, t) {
	if (t == -1) return !1;
	let n = e.state.doc.resolve(t), r = n.nodeAfter;
	return r && r.isAtom && k.isSelectable(r) ? (Vo(e, new k(n), "pointer"), !0) : !1;
}
function Uo(e, t) {
	if (t == -1) return !1;
	let n = e.state.selection, r, i;
	n instanceof k && (r = n.node);
	let a = e.state.doc.resolve(t);
	for (let e = a.depth + 1; e > 0; e--) {
		let t = e > a.depth ? a.nodeAfter : a.node(e);
		if (k.isSelectable(t)) {
			i = r && n.$from.depth > 0 && e >= n.$from.depth && a.before(n.$from.depth + 1) == n.$from.pos ? a.before(n.$from.depth) : a.before(e);
			break;
		}
	}
	return i == null ? !1 : (Vo(e, k.create(e.state.doc, i), "pointer"), !0);
}
function Wo(e, t, n, r, i) {
	return Bo(e, "handleClickOn", t, n, r) || e.someProp("handleClick", (n) => n(e, t, r)) || (i ? Uo(e, n) : Ho(e, n));
}
function Go(e, t, n, r) {
	return Bo(e, "handleDoubleClickOn", t, n, r) || e.someProp("handleDoubleClick", (n) => n(e, t, r));
}
function Ko(e, t, n, r) {
	return Bo(e, "handleTripleClickOn", t, n, r) || e.someProp("handleTripleClick", (n) => n(e, t, r)) || qo(e, n, r);
}
function qo(e, t, n) {
	if (n.button != 0) return !1;
	let r = e.state.doc;
	if (t == -1) return r.inlineContent ? (Vo(e, O.create(r, 0, r.content.size), "pointer"), !0) : !1;
	let i = r.resolve(t);
	for (let t = i.depth + 1; t > 0; t--) {
		let n = t > i.depth ? i.nodeAfter : i.node(t), a = i.before(t);
		if (n.inlineContent) Vo(e, O.create(r, a + 1, a + 1 + n.content.size), "pointer");
		else if (k.isSelectable(n)) Vo(e, k.create(r, a), "pointer");
		else continue;
		return !0;
	}
}
function Jo(e) {
	return is(e);
}
var Yo = yi ? "metaKey" : "ctrlKey";
F.mousedown = (e, t) => {
	let n = t;
	e.input.shiftKey = n.shiftKey;
	let r = Jo(e), i = Date.now(), a = "singleClick";
	i - e.input.lastClick.time < 500 && zo(n, e.input.lastClick) && !n[Yo] && e.input.lastClick.button == n.button && (e.input.lastClick.type == "singleClick" ? a = "doubleClick" : e.input.lastClick.type == "doubleClick" && (a = "tripleClick")), e.input.lastClick = {
		time: i,
		x: n.clientX,
		y: n.clientY,
		type: a,
		button: n.button
	};
	let o = e.posAtCoords(Ro(n));
	o && (a == "singleClick" ? (e.input.mouseDown && e.input.mouseDown.done(), e.input.mouseDown = new Xo(e, o, n, !!r)) : (a == "doubleClick" ? Go : Ko)(e, o.pos, o.inside, n) ? n.preventDefault() : Mo(e, "pointer"));
};
var Xo = class {
	constructor(e, t, n, r) {
		this.view = e, this.pos = t, this.event = n, this.flushed = r, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!n[Yo], this.allowDefault = n.shiftKey;
		let i, a;
		if (t.inside > -1) i = e.state.doc.nodeAt(t.inside), a = t.inside;
		else {
			let n = e.state.doc.resolve(t.pos);
			i = n.parent, a = n.depth ? n.before() : 0;
		}
		let o = r ? null : n.target, s = o ? e.docView.nearestDesc(o, !0) : null;
		this.target = s && s.nodeDOM.nodeType == 1 ? s.nodeDOM : null;
		let { selection: c } = e.state;
		(n.button == 0 && i.type.spec.draggable && i.type.spec.selectable !== !1 || c instanceof k && c.from <= a && c.to > a) && (this.mightDrag = {
			node: i,
			pos: a,
			addAttr: !!(this.target && !this.target.draggable),
			setUneditable: !!(this.target && hi && !this.target.hasAttribute("contentEditable"))
		}), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
			this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
		}, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), Mo(e, "pointer");
	}
	done() {
		this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => Na(this.view)), this.view.input.mouseDown = null;
	}
	up(e) {
		if (this.done(), !this.view.dom.contains(e.target)) return;
		let t = this.pos;
		this.view.state.doc != this.startDoc && (t = this.view.posAtCoords(Ro(e))), this.updateAllowDefault(e), this.allowDefault || !t ? Mo(this.view, "pointer") : Wo(this.view, t.pos, t.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || P && this.mightDrag && !this.mightDrag.node.isAtom || N && !this.view.state.selection.visible && Math.min(Math.abs(t.pos - this.view.state.selection.from), Math.abs(t.pos - this.view.state.selection.to)) <= 2) ? (Vo(this.view, D.near(this.view.state.doc.resolve(t.pos)), "pointer"), e.preventDefault()) : Mo(this.view, "pointer");
	}
	move(e) {
		this.updateAllowDefault(e), Mo(this.view, "pointer"), e.buttons == 0 && this.done();
	}
	updateAllowDefault(e) {
		!this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
	}
};
F.touchstart = (e) => {
	e.input.lastTouch = Date.now(), Jo(e), Mo(e, "pointer");
}, F.touchmove = (e) => {
	e.input.lastTouch = Date.now(), Mo(e, "pointer");
}, F.contextmenu = (e) => Jo(e);
function Zo(e, t) {
	return e.composing ? !0 : P && Math.abs(t.timeStamp - e.input.compositionEndedAt) < 500 ? (e.input.compositionEndedAt = -2e8, !0) : !1;
}
var Qo = xi ? 5e3 : -1;
I.compositionstart = I.compositionupdate = (e) => {
	if (!e.composing) {
		e.domObserver.flush();
		let { state: t } = e, n = t.selection.$to;
		if (t.selection instanceof O && (t.storedMarks || !n.textOffset && n.parentOffset && n.nodeBefore.marks.some((e) => e.type.spec.inclusive === !1) || N && bi && $o(e))) e.markCursor = e.state.storedMarks || n.marks(), is(e, !0), e.markCursor = null;
		else if (is(e, !t.selection.empty), hi && t.selection.empty && n.parentOffset && !n.textOffset && n.nodeBefore.marks.length) {
			let t = e.domSelectionRange();
			for (let n = t.focusNode, r = t.focusOffset; n && n.nodeType == 1 && r != 0;) {
				let t = r < 0 ? n.lastChild : n.childNodes[r - 1];
				if (!t) break;
				if (t.nodeType == 3) {
					let n = e.domSelection();
					n && n.collapse(t, t.nodeValue.length);
					break;
				} else n = t, r = -1;
			}
		}
		e.input.composing = !0;
	}
	es(e, Qo);
};
function $o(e) {
	let { focusNode: t, focusOffset: n } = e.domSelectionRange();
	if (!t || t.nodeType != 1 || n >= t.childNodes.length) return !1;
	let r = t.childNodes[n];
	return r.nodeType == 1 && r.contentEditable == "false";
}
I.compositionend = (e, t) => {
	e.composing && (e.input.composing = !1, e.input.compositionEndedAt = t.timeStamp, e.input.compositionPendingChanges = e.domObserver.pendingRecords().length ? e.input.compositionID : 0, e.input.compositionNode = null, e.input.badSafariComposition ? e.domObserver.forceFlush() : e.input.compositionPendingChanges && Promise.resolve().then(() => e.domObserver.flush()), e.input.compositionID++, es(e, 20));
};
function es(e, t) {
	clearTimeout(e.input.composingTimeout), t > -1 && (e.input.composingTimeout = setTimeout(() => is(e), t));
}
function ts(e) {
	for (e.composing && (e.input.composing = !1, e.input.compositionEndedAt = rs()); e.input.compositionNodes.length > 0;) e.input.compositionNodes.pop().markParentsDirty();
}
function ns(e) {
	let t = e.domSelectionRange();
	if (!t.focusNode) return null;
	let n = $r(t.focusNode, t.focusOffset), r = ei(t.focusNode, t.focusOffset);
	if (n && r && n != r) {
		let t = r.pmViewDesc, i = e.domObserver.lastChangedTextNode;
		if (n == i || r == i) return i;
		if (!t || !t.isText(r.nodeValue)) return r;
		if (e.input.compositionNode == r) {
			let e = n.pmViewDesc;
			if (!(!e || !e.isText(n.nodeValue))) return r;
		}
	}
	return n || r;
}
function rs() {
	let e = document.createEvent("Event");
	return e.initEvent("event", !0, !0), e.timeStamp;
}
function is(e, t = !1) {
	if (!(xi && e.domObserver.flushingSoon >= 0)) {
		if (e.domObserver.forceFlush(), ts(e), t || e.docView && e.docView.dirty) {
			let n = ja(e), r = e.state.selection;
			return n && !n.eq(r) ? e.dispatch(e.state.tr.setSelection(n)) : (e.markCursor || t) && !r.$from.node(r.$from.sharedDepth(r.to)).inlineContent ? e.dispatch(e.state.tr.deleteSelection()) : e.updateState(e.state), !0;
		}
		return !1;
	}
}
function as(e, t) {
	if (!e.dom.parentNode) return;
	let n = e.dom.parentNode.appendChild(document.createElement("div"));
	n.appendChild(t), n.style.cssText = "position: fixed; left: -10000px; top: 10px";
	let r = getSelection(), i = document.createRange();
	i.selectNodeContents(t), e.dom.blur(), r.removeAllRanges(), r.addRange(i), setTimeout(() => {
		n.parentNode && n.parentNode.removeChild(n), e.focus();
	}, 50);
}
var ss = pi && mi < 15 || vi && Ci < 604;
F.copy = I.cut = (e, t) => {
	let n = t, r = e.state.selection, i = n.type == "cut";
	if (r.empty) return;
	let a = ss ? null : n.clipboardData, { dom: o, text: s } = fo(e, r.content());
	a ? (n.preventDefault(), a.clearData(), a.setData("text/html", o.innerHTML), a.setData("text/plain", s)) : as(e, o), i && e.dispatch(e.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function cs(e) {
	return e.openStart == 0 && e.openEnd == 0 && e.content.childCount == 1 ? e.content.firstChild : null;
}
function ls(e, t) {
	if (!e.dom.parentNode) return;
	let n = e.input.shiftKey || e.state.selection.$from.parent.type.spec.code, r = e.dom.parentNode.appendChild(document.createElement(n ? "textarea" : "div"));
	n || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
	let i = e.input.shiftKey && e.input.lastKeyCode != 45;
	setTimeout(() => {
		e.focus(), r.parentNode && r.parentNode.removeChild(r), n ? us(e, r.value, null, i, t) : us(e, r.textContent, r.innerHTML, i, t);
	}, 50);
}
function us(e, t, n, r, i) {
	let a = po(e, t, n, r, e.state.selection.$from);
	if (e.someProp("handlePaste", (t) => t(e, i, a || w.empty))) return !0;
	if (!a) return !1;
	let o = cs(a), s = o ? e.state.tr.replaceSelectionWith(o, r) : e.state.tr.replaceSelection(a);
	return e.dispatch(s.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
function ds(e) {
	let t = e.getData("text/plain") || e.getData("Text");
	if (t) return t;
	let n = e.getData("text/uri-list");
	return n ? n.replace(/\r?\n/g, " ") : "";
}
I.paste = (e, t) => {
	let n = t;
	if (e.composing && !xi) return;
	let r = ss ? null : n.clipboardData, i = e.input.shiftKey && e.input.lastKeyCode != 45;
	r && us(e, ds(r), r.getData("text/html"), i, n) ? n.preventDefault() : ls(e, n);
};
var fs = class {
	constructor(e, t, n) {
		this.slice = e, this.move = t, this.node = n;
	}
}, ps = yi ? "altKey" : "ctrlKey";
function ms(e, t) {
	return e.someProp("dragCopies", (e) => !e(t)) ?? !t[ps];
}
F.dragstart = (e, t) => {
	let n = t, r = e.input.mouseDown;
	if (r && r.done(), !n.dataTransfer) return;
	let i = e.state.selection, a = i.empty ? null : e.posAtCoords(Ro(n)), o;
	if (!(a && a.pos >= i.from && a.pos <= (i instanceof k ? i.to - 1 : i.to))) {
		if (r && r.mightDrag) o = k.create(e.state.doc, r.mightDrag.pos);
		else if (n.target && n.target.nodeType == 1) {
			let t = e.docView.nearestDesc(n.target, !0);
			t && t.node.type.spec.draggable && t != e.docView && (o = k.create(e.state.doc, t.posBefore));
		}
	}
	let { dom: s, text: c, slice: l } = fo(e, (o || e.state.selection).content());
	(!n.dataTransfer.files.length || !N || _i > 120) && n.dataTransfer.clearData(), n.dataTransfer.setData(ss ? "Text" : "text/html", s.innerHTML), n.dataTransfer.effectAllowed = "copyMove", ss || n.dataTransfer.setData("text/plain", c), e.dragging = new fs(l, ms(e, n), o);
}, F.dragend = (e) => {
	let t = e.dragging;
	window.setTimeout(() => {
		e.dragging == t && (e.dragging = null);
	}, 50);
}, I.dragover = I.dragenter = (e, t) => t.preventDefault(), I.drop = (e, t) => {
	try {
		hs(e, t, e.dragging);
	} finally {
		e.dragging = null;
	}
};
function hs(e, t, n) {
	if (!t.dataTransfer) return;
	let r = e.posAtCoords(Ro(t));
	if (!r) return;
	let i = e.state.doc.resolve(r.pos), a = n && n.slice;
	a ? e.someProp("transformPasted", (t) => {
		a = t(a, e, !1);
	}) : a = po(e, ds(t.dataTransfer), ss ? null : t.dataTransfer.getData("text/html"), !1, i);
	let o = !!(n && ms(e, t));
	if (e.someProp("handleDrop", (n) => n(e, t, a || w.empty, o))) {
		t.preventDefault();
		return;
	}
	if (!a) return;
	t.preventDefault();
	let s = a ? pn(e.state.doc, i.pos, a) : i.pos;
	s ??= i.pos;
	let c = e.state.tr;
	if (o) {
		let { node: e } = n;
		e ? e.replace(c) : c.deleteSelection();
	}
	let l = c.mapping.map(s), u = a.openStart == 0 && a.openEnd == 0 && a.content.childCount == 1, d = c.doc;
	if (u ? c.replaceRangeWith(l, l, a.content.firstChild) : c.replaceRange(l, l, a), c.doc.eq(d)) return;
	let f = c.doc.resolve(l);
	if (u && k.isSelectable(a.content.firstChild) && f.nodeAfter && f.nodeAfter.sameMarkup(a.content.firstChild)) c.setSelection(new k(f));
	else {
		let t = c.mapping.map(s);
		c.mapping.maps[c.mapping.maps.length - 1].forEach((e, n, r, i) => t = i), c.setSelection(Ha(e, f, c.doc.resolve(t)));
	}
	e.focus(), e.dispatch(c.setMeta("uiEvent", "drop"));
}
F.focus = (e) => {
	e.input.lastFocus = Date.now(), e.focused || (e.domObserver.stop(), e.dom.classList.add("ProseMirror-focused"), e.domObserver.start(), e.focused = !0, setTimeout(() => {
		e.docView && e.hasFocus() && !e.domObserver.currentSelection.eq(e.domSelectionRange()) && Na(e);
	}, 20));
}, F.blur = (e, t) => {
	let n = t;
	e.focused &&= (e.domObserver.stop(), e.dom.classList.remove("ProseMirror-focused"), e.domObserver.start(), n.relatedTarget && e.dom.contains(n.relatedTarget) && e.domObserver.currentSelection.clear(), !1);
}, F.beforeinput = (e, t) => {
	if (N && xi && t.inputType == "deleteContentBackward") {
		e.domObserver.flushSoon();
		let { domChangeCount: t } = e.input;
		setTimeout(() => {
			if (e.input.domChangeCount != t || (e.dom.blur(), e.focus(), e.someProp("handleKeyDown", (t) => t(e, ii(8, "Backspace"))))) return;
			let { $cursor: n } = e.state.selection;
			n && n.pos > 0 && e.dispatch(e.state.tr.delete(n.pos - 1, n.pos).scrollIntoView());
		}, 50);
	}
};
for (let e in I) F[e] = I[e];
function gs(e, t) {
	if (e == t) return !0;
	for (let n in e) if (e[n] !== t[n]) return !1;
	for (let n in t) if (!(n in e)) return !1;
	return !0;
}
var _s = class e {
	constructor(e, t) {
		this.toDOM = e, this.spec = t || Ss, this.side = this.spec.side || 0;
	}
	map(e, t, n, r) {
		let { pos: i, deleted: a } = e.mapResult(t.from + r, this.side < 0 ? -1 : 1);
		return a ? null : new bs(i - n, i - n, this);
	}
	valid() {
		return !0;
	}
	eq(t) {
		return this == t || t instanceof e && (this.spec.key && this.spec.key == t.spec.key || this.toDOM == t.toDOM && gs(this.spec, t.spec));
	}
	destroy(e) {
		this.spec.destroy && this.spec.destroy(e);
	}
}, vs = class e {
	constructor(e, t) {
		this.attrs = e, this.spec = t || Ss;
	}
	map(e, t, n, r) {
		let i = e.map(t.from + r, this.spec.inclusiveStart ? -1 : 1) - n, a = e.map(t.to + r, this.spec.inclusiveEnd ? 1 : -1) - n;
		return i >= a ? null : new bs(i, a, this);
	}
	valid(e, t) {
		return t.from < t.to;
	}
	eq(t) {
		return this == t || t instanceof e && gs(this.attrs, t.attrs) && gs(this.spec, t.spec);
	}
	static is(t) {
		return t.type instanceof e;
	}
	destroy() {}
}, ys = class e {
	constructor(e, t) {
		this.attrs = e, this.spec = t || Ss;
	}
	map(e, t, n, r) {
		let i = e.mapResult(t.from + r, 1);
		if (i.deleted) return null;
		let a = e.mapResult(t.to + r, -1);
		return a.deleted || a.pos <= i.pos ? null : new bs(i.pos - n, a.pos - n, this);
	}
	valid(e, t) {
		let { index: n, offset: r } = e.content.findIndex(t.from), i;
		return r == t.from && !(i = e.child(n)).isText && r + i.nodeSize == t.to;
	}
	eq(t) {
		return this == t || t instanceof e && gs(this.attrs, t.attrs) && gs(this.spec, t.spec);
	}
	destroy() {}
}, bs = class e {
	constructor(e, t, n) {
		this.from = e, this.to = t, this.type = n;
	}
	copy(t, n) {
		return new e(t, n, this.type);
	}
	eq(e, t = 0) {
		return this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to;
	}
	map(e, t, n) {
		return this.type.map(e, this, t, n);
	}
	static widget(t, n, r) {
		return new e(t, t, new _s(n, r));
	}
	static inline(t, n, r, i) {
		return new e(t, n, new vs(r, i));
	}
	static node(t, n, r, i) {
		return new e(t, n, new ys(r, i));
	}
	get spec() {
		return this.type.spec;
	}
	get inline() {
		return this.type instanceof vs;
	}
	get widget() {
		return this.type instanceof _s;
	}
}, xs = [], Ss = {}, L = class e {
	constructor(e, t) {
		this.local = e.length ? e : xs, this.children = t.length ? t : xs;
	}
	static create(e, t) {
		return t.length ? ks(t, e, 0, Ss) : R;
	}
	find(e, t, n) {
		let r = [];
		return this.findInner(e ?? 0, t ?? 1e9, r, 0, n), r;
	}
	findInner(e, t, n, r, i) {
		for (let a = 0; a < this.local.length; a++) {
			let o = this.local[a];
			o.from <= t && o.to >= e && (!i || i(o.spec)) && n.push(o.copy(o.from + r, o.to + r));
		}
		for (let a = 0; a < this.children.length; a += 3) if (this.children[a] < t && this.children[a + 1] > e) {
			let o = this.children[a] + 1;
			this.children[a + 2].findInner(e - o, t - o, n, r + o, i);
		}
	}
	map(e, t, n) {
		return this == R || e.maps.length == 0 ? this : this.mapInner(e, t, 0, 0, n || Ss);
	}
	mapInner(t, n, r, i, a) {
		let o;
		for (let e = 0; e < this.local.length; e++) {
			let s = this.local[e].map(t, r, i);
			s && s.type.valid(n, s) ? (o ||= []).push(s) : a.onRemove && a.onRemove(this.local[e].spec);
		}
		return this.children.length ? ws(this.children, o || [], t, n, r, i, a) : o ? new e(o.sort(As), xs) : R;
	}
	add(t, n) {
		return n.length ? this == R ? e.create(t, n) : this.addInner(t, n, 0) : this;
	}
	addInner(t, n, r) {
		let i, a = 0;
		t.forEach((e, t) => {
			let o = t + r, s;
			if (s = Ds(n, e, o)) {
				for (i ||= this.children.slice(); a < i.length && i[a] < t;) a += 3;
				i[a] == t ? i[a + 2] = i[a + 2].addInner(e, s, o + 1) : i.splice(a, 0, t, t + e.nodeSize, ks(s, e, o + 1, Ss)), a += 3;
			}
		});
		let o = Ts(a ? Os(n) : n, -r);
		for (let e = 0; e < o.length; e++) o[e].type.valid(t, o[e]) || o.splice(e--, 1);
		return new e(o.length ? this.local.concat(o).sort(As) : this.local, i || this.children);
	}
	remove(e) {
		return e.length == 0 || this == R ? this : this.removeInner(e, 0);
	}
	removeInner(t, n) {
		let r = this.children, i = this.local;
		for (let e = 0; e < r.length; e += 3) {
			let i, a = r[e] + n, o = r[e + 1] + n;
			for (let e = 0, n; e < t.length; e++) (n = t[e]) && n.from > a && n.to < o && (t[e] = null, (i ||= []).push(n));
			if (!i) continue;
			r == this.children && (r = this.children.slice());
			let s = r[e + 2].removeInner(i, a + 1);
			s == R ? (r.splice(e, 3), e -= 3) : r[e + 2] = s;
		}
		if (i.length) {
			for (let e = 0, r; e < t.length; e++) if (r = t[e]) for (let e = 0; e < i.length; e++) i[e].eq(r, n) && (i == this.local && (i = this.local.slice()), i.splice(e--, 1));
		}
		return r == this.children && i == this.local ? this : i.length || r.length ? new e(i, r) : R;
	}
	forChild(t, n) {
		if (this == R) return this;
		if (n.isLeaf) return e.empty;
		let r, i;
		for (let e = 0; e < this.children.length; e += 3) if (this.children[e] >= t) {
			this.children[e] == t && (r = this.children[e + 2]);
			break;
		}
		let a = t + 1, o = a + n.content.size;
		for (let e = 0; e < this.local.length; e++) {
			let t = this.local[e];
			if (t.from < o && t.to > a && t.type instanceof vs) {
				let e = Math.max(a, t.from) - a, n = Math.min(o, t.to) - a;
				e < n && (i ||= []).push(t.copy(e, n));
			}
		}
		if (i) {
			let t = new e(i.sort(As), xs);
			return r ? new Cs([t, r]) : t;
		}
		return r || R;
	}
	eq(t) {
		if (this == t) return !0;
		if (!(t instanceof e) || this.local.length != t.local.length || this.children.length != t.children.length) return !1;
		for (let e = 0; e < this.local.length; e++) if (!this.local[e].eq(t.local[e])) return !1;
		for (let e = 0; e < this.children.length; e += 3) if (this.children[e] != t.children[e] || this.children[e + 1] != t.children[e + 1] || !this.children[e + 2].eq(t.children[e + 2])) return !1;
		return !0;
	}
	locals(e) {
		return js(this.localsInner(e));
	}
	localsInner(e) {
		if (this == R) return xs;
		if (e.inlineContent || !this.local.some(vs.is)) return this.local;
		let t = [];
		for (let e = 0; e < this.local.length; e++) this.local[e].type instanceof vs || t.push(this.local[e]);
		return t;
	}
	forEachSet(e) {
		e(this);
	}
};
L.empty = new L([], []), L.removeOverlap = js;
var R = L.empty, Cs = class e {
	constructor(e) {
		this.members = e;
	}
	map(t, n) {
		let r = this.members.map((e) => e.map(t, n, Ss));
		return e.from(r);
	}
	forChild(t, n) {
		if (n.isLeaf) return L.empty;
		let r = [];
		for (let i = 0; i < this.members.length; i++) {
			let a = this.members[i].forChild(t, n);
			a != R && (a instanceof e ? r = r.concat(a.members) : r.push(a));
		}
		return e.from(r);
	}
	eq(t) {
		if (!(t instanceof e) || t.members.length != this.members.length) return !1;
		for (let e = 0; e < this.members.length; e++) if (!this.members[e].eq(t.members[e])) return !1;
		return !0;
	}
	locals(e) {
		let t, n = !0;
		for (let r = 0; r < this.members.length; r++) {
			let i = this.members[r].localsInner(e);
			if (i.length) if (!t) t = i;
			else {
				n &&= (t = t.slice(), !1);
				for (let e = 0; e < i.length; e++) t.push(i[e]);
			}
		}
		return t ? js(n ? t : t.sort(As)) : xs;
	}
	static from(t) {
		switch (t.length) {
			case 0: return R;
			case 1: return t[0];
			default: return new e(t.every((e) => e instanceof L) ? t : t.reduce((e, t) => e.concat(t instanceof L ? t : t.members), []));
		}
	}
	forEachSet(e) {
		for (let t = 0; t < this.members.length; t++) this.members[t].forEachSet(e);
	}
};
function ws(e, t, n, r, i, a, o) {
	let s = e.slice();
	for (let e = 0, t = a; e < n.maps.length; e++) {
		let r = 0;
		n.maps[e].forEach((e, n, i, a) => {
			let o = a - i - (n - e);
			for (let i = 0; i < s.length; i += 3) {
				let a = s[i + 1];
				if (a < 0 || e > a + t - r) continue;
				let c = s[i] + t - r;
				n >= c ? s[i + 1] = e <= c ? -2 : -1 : e >= t && o && (s[i] += o, s[i + 1] += o);
			}
			r += o;
		}), t = n.maps[e].map(t, -1);
	}
	let c = !1;
	for (let t = 0; t < s.length; t += 3) if (s[t + 1] < 0) {
		if (s[t + 1] == -2) {
			c = !0, s[t + 1] = -1;
			continue;
		}
		let l = n.map(e[t] + a), u = l - i;
		if (u < 0 || u >= r.content.size) {
			c = !0;
			continue;
		}
		let d = n.map(e[t + 1] + a, -1) - i, { index: f, offset: p } = r.content.findIndex(u), m = r.maybeChild(f);
		if (m && p == u && p + m.nodeSize == d) {
			let r = s[t + 2].mapInner(n, m, l + 1, e[t] + a + 1, o);
			r == R ? (s[t + 1] = -2, c = !0) : (s[t] = u, s[t + 1] = d, s[t + 2] = r);
		} else c = !0;
	}
	if (c) {
		let c = ks(Es(s, e, t, n, i, a, o), r, 0, o);
		t = c.local;
		for (let e = 0; e < s.length; e += 3) s[e + 1] < 0 && (s.splice(e, 3), e -= 3);
		for (let e = 0, t = 0; e < c.children.length; e += 3) {
			let n = c.children[e];
			for (; t < s.length && s[t] < n;) t += 3;
			s.splice(t, 0, c.children[e], c.children[e + 1], c.children[e + 2]);
		}
	}
	return new L(t.sort(As), s);
}
function Ts(e, t) {
	if (!t || !e.length) return e;
	let n = [];
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		n.push(new bs(i.from + t, i.to + t, i.type));
	}
	return n;
}
function Es(e, t, n, r, i, a, o) {
	function s(e, t) {
		for (let a = 0; a < e.local.length; a++) {
			let s = e.local[a].map(r, i, t);
			s ? n.push(s) : o.onRemove && o.onRemove(e.local[a].spec);
		}
		for (let n = 0; n < e.children.length; n += 3) s(e.children[n + 2], e.children[n] + t + 1);
	}
	for (let n = 0; n < e.length; n += 3) e[n + 1] == -1 && s(e[n + 2], t[n] + a + 1);
	return n;
}
function Ds(e, t, n) {
	if (t.isLeaf) return null;
	let r = n + t.nodeSize, i = null;
	for (let t = 0, a; t < e.length; t++) (a = e[t]) && a.from > n && a.to < r && ((i ||= []).push(a), e[t] = null);
	return i;
}
function Os(e) {
	let t = [];
	for (let n = 0; n < e.length; n++) e[n] != null && t.push(e[n]);
	return t;
}
function ks(e, t, n, r) {
	let i = [], a = !1;
	t.forEach((t, o) => {
		let s = Ds(e, t, o + n);
		if (s) {
			a = !0;
			let e = ks(s, t, n + o + 1, r);
			e != R && i.push(o, o + t.nodeSize, e);
		}
	});
	let o = Ts(a ? Os(e) : e, -n).sort(As);
	for (let e = 0; e < o.length; e++) o[e].type.valid(t, o[e]) || (r.onRemove && r.onRemove(o[e].spec), o.splice(e--, 1));
	return o.length || i.length ? new L(o, i) : R;
}
function As(e, t) {
	return e.from - t.from || e.to - t.to;
}
function js(e) {
	let t = e;
	for (let n = 0; n < t.length - 1; n++) {
		let r = t[n];
		if (r.from != r.to) for (let i = n + 1; i < t.length; i++) {
			let a = t[i];
			if (a.from == r.from) {
				a.to != r.to && (t == e && (t = e.slice()), t[i] = a.copy(a.from, r.to), Ms(t, i + 1, a.copy(r.to, a.to)));
				continue;
			} else {
				a.from < r.to && (t == e && (t = e.slice()), t[n] = r.copy(r.from, a.from), Ms(t, i, r.copy(a.from, r.to)));
				break;
			}
		}
	}
	return t;
}
function Ms(e, t, n) {
	for (; t < e.length && As(n, e[t]) > 0;) t++;
	e.splice(t, 0, n);
}
function Ns(e) {
	let t = [];
	return e.someProp("decorations", (n) => {
		let r = n(e.state);
		r && r != R && t.push(r);
	}), e.cursorWrapper && t.push(L.create(e.state.doc, [e.cursorWrapper.deco])), Cs.from(t);
}
var Ps = {
	childList: !0,
	characterData: !0,
	characterDataOldValue: !0,
	attributes: !0,
	attributeOldValue: !0,
	subtree: !0
}, Fs = pi && mi <= 11, Is = class {
	constructor() {
		this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
	}
	set(e) {
		this.anchorNode = e.anchorNode, this.anchorOffset = e.anchorOffset, this.focusNode = e.focusNode, this.focusOffset = e.focusOffset;
	}
	clear() {
		this.anchorNode = this.focusNode = null;
	}
	eq(e) {
		return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset;
	}
}, Ls = class {
	constructor(e, t) {
		this.view = e, this.handleDOMChange = t, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new Is(), this.onCharData = null, this.suppressingSelectionUpdates = !1, this.lastChangedTextNode = null, this.observer = window.MutationObserver && new window.MutationObserver((t) => {
			for (let e = 0; e < t.length; e++) this.queue.push(t[e]);
			pi && mi <= 11 && t.some((e) => e.type == "childList" && e.removedNodes.length || e.type == "characterData" && e.oldValue.length > e.target.nodeValue.length) ? this.flushSoon() : P && e.composing && t.some((e) => e.type == "childList" && e.target.nodeName == "TR") ? (e.input.badSafariComposition = !0, this.flushSoon()) : this.flush();
		}), Fs && (this.onCharData = (e) => {
			this.queue.push({
				target: e.target,
				type: "characterData",
				oldValue: e.prevValue
			}), this.flushSoon();
		}), this.onSelectionChange = this.onSelectionChange.bind(this);
	}
	flushSoon() {
		this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout(() => {
			this.flushingSoon = -1, this.flush();
		}, 20));
	}
	forceFlush() {
		this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush());
	}
	start() {
		this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, Ps)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
	}
	stop() {
		if (this.observer) {
			let e = this.observer.takeRecords();
			if (e.length) {
				for (let t = 0; t < e.length; t++) this.queue.push(e[t]);
				window.setTimeout(() => this.flush(), 20);
			}
			this.observer.disconnect();
		}
		this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection();
	}
	connectSelection() {
		this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
	}
	disconnectSelection() {
		this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
	}
	suppressSelectionUpdates() {
		this.suppressingSelectionUpdates = !0, setTimeout(() => this.suppressingSelectionUpdates = !1, 50);
	}
	onSelectionChange() {
		if (Ua(this.view)) {
			if (this.suppressingSelectionUpdates) return Na(this.view);
			if (pi && mi <= 11 && !this.view.state.selection.empty) {
				let e = this.view.domSelectionRange();
				if (e.focusNode && Yr(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset)) return this.flushSoon();
			}
			this.flush();
		}
	}
	setCurSelection() {
		this.currentSelection.set(this.view.domSelectionRange());
	}
	ignoreSelectionChange(e) {
		if (!e.focusNode) return !0;
		let t = new Set(), n;
		for (let n = e.focusNode; n; n = Gr(n)) t.add(n);
		for (let r = e.anchorNode; r; r = Gr(r)) if (t.has(r)) {
			n = r;
			break;
		}
		let r = n && this.view.docView.nearestDesc(n);
		if (r && r.ignoreMutation({
			type: "selection",
			target: n.nodeType == 3 ? n.parentNode : n
		})) return this.setCurSelection(), !0;
	}
	pendingRecords() {
		if (this.observer) for (let e of this.observer.takeRecords()) this.queue.push(e);
		return this.queue;
	}
	flush() {
		let { view: e } = this;
		if (!e.docView || this.flushingSoon > -1) return;
		let t = this.pendingRecords();
		t.length && (this.queue = []);
		let n = e.domSelectionRange(), r = !this.suppressingSelectionUpdates && !this.currentSelection.eq(n) && Ua(e) && !this.ignoreSelectionChange(n), i = -1, a = -1, o = !1, s = [];
		if (e.editable) for (let e = 0; e < t.length; e++) {
			let n = this.registerMutation(t[e], s);
			n && (i = i < 0 ? n.from : Math.min(n.from, i), a = a < 0 ? n.to : Math.max(n.to, a), n.typeOver && (o = !0));
		}
		if (s.some((e) => e.nodeName == "BR") && (e.input.lastKeyCode == 8 || e.input.lastKeyCode == 46)) {
			for (let e of s) if (e.nodeName == "BR" && e.parentNode) {
				let t = e.nextSibling;
				t && t.nodeType == 1 && t.contentEditable == "false" && e.parentNode.removeChild(e);
			}
		} else if (hi && s.length) {
			let t = s.filter((e) => e.nodeName == "BR");
			if (t.length == 2) {
				let [e, n] = t;
				e.parentNode && e.parentNode.parentNode == n.parentNode ? n.remove() : e.remove();
			} else {
				let { focusNode: n } = this.currentSelection;
				for (let r of t) {
					let t = r.parentNode;
					t && t.nodeName == "LI" && (!n || Us(e, n) != t) && r.remove();
				}
			}
		}
		let c = null;
		i < 0 && r && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && ri(n) && (c = ja(e)) && c.eq(D.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, Na(e), this.currentSelection.set(n), e.scrollToSelection()) : (i > -1 || r) && (i > -1 && (e.docView.markDirty(i, a), Bs(e)), e.input.badSafariComposition && (e.input.badSafariComposition = !1, Ws(e, s)), this.handleDOMChange(i, a, o, s), e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(n) || Na(e), this.currentSelection.set(n));
	}
	registerMutation(e, t) {
		if (t.indexOf(e.target) > -1) return null;
		let n = this.view.docView.nearestDesc(e.target);
		if (e.type == "attributes" && (n == this.view.docView || e.attributeName == "contenteditable" || e.attributeName == "style" && !e.oldValue && !e.target.getAttribute("style")) || !n || n.ignoreMutation(e)) return null;
		if (e.type == "childList") {
			for (let n = 0; n < e.addedNodes.length; n++) {
				let r = e.addedNodes[n];
				t.push(r), r.nodeType == 3 && (this.lastChangedTextNode = r);
			}
			if (n.contentDOM && n.contentDOM != n.dom && !n.contentDOM.contains(e.target)) return {
				from: n.posBefore,
				to: n.posAfter
			};
			let r = e.previousSibling, i = e.nextSibling;
			if (pi && mi <= 11 && e.addedNodes.length) for (let t = 0; t < e.addedNodes.length; t++) {
				let { previousSibling: n, nextSibling: a } = e.addedNodes[t];
				(!n || Array.prototype.indexOf.call(e.addedNodes, n) < 0) && (r = n), (!a || Array.prototype.indexOf.call(e.addedNodes, a) < 0) && (i = a);
			}
			let a = r && r.parentNode == e.target ? M(r) + 1 : 0, o = n.localPosFromDOM(e.target, a, -1), s = i && i.parentNode == e.target ? M(i) : e.target.childNodes.length;
			return {
				from: o,
				to: n.localPosFromDOM(e.target, s, 1)
			};
		} else if (e.type == "attributes") return {
			from: n.posAtStart - n.border,
			to: n.posAtEnd + n.border
		};
		else return this.lastChangedTextNode = e.target, {
			from: n.posAtStart,
			to: n.posAtEnd,
			typeOver: e.target.nodeValue == e.oldValue
		};
	}
}, Rs = new WeakMap(), zs = !1;
function Bs(e) {
	if (!Rs.has(e) && (Rs.set(e, null), [
		"normal",
		"nowrap",
		"pre-line"
	].indexOf(getComputedStyle(e.dom).whiteSpace) !== -1)) {
		if (e.requiresGeckoHackNode = hi, zs) return;
		console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), zs = !0;
	}
}
function Vs(e, t) {
	let n = t.startContainer, r = t.startOffset, i = t.endContainer, a = t.endOffset, o = e.domAtPos(e.state.selection.anchor);
	return Yr(o.node, o.offset, i, a) && ([n, r, i, a] = [
		i,
		a,
		n,
		r
	]), {
		anchorNode: n,
		anchorOffset: r,
		focusNode: i,
		focusOffset: a
	};
}
function Hs(e, t) {
	if (t.getComposedRanges) {
		let n = t.getComposedRanges(e.root)[0];
		if (n) return Vs(e, n);
	}
	let n;
	function r(e) {
		e.preventDefault(), e.stopImmediatePropagation(), n = e.getTargetRanges()[0];
	}
	return e.dom.addEventListener("beforeinput", r, !0), document.execCommand("indent"), e.dom.removeEventListener("beforeinput", r, !0), n ? Vs(e, n) : null;
}
function Us(e, t) {
	for (let n = t.parentNode; n && n != e.dom; n = n.parentNode) {
		let t = e.docView.nearestDesc(n, !0);
		if (t && t.node.isBlock) return n;
	}
	return null;
}
function Ws(e, t) {
	let { focusNode: n, focusOffset: r } = e.domSelectionRange();
	for (let i of t) if (i.parentNode?.nodeName == "TR") {
		let t = i.nextSibling;
		for (; t && t.nodeName != "TD" && t.nodeName != "TH";) t = t.nextSibling;
		if (t) {
			let a = t;
			for (;;) {
				let e = a.firstChild;
				if (!e || e.nodeType != 1 || e.contentEditable == "false" || /^(BR|IMG)$/.test(e.nodeName)) break;
				a = e;
			}
			a.insertBefore(i, a.firstChild), n == i && e.domSelection().collapse(i, r);
		} else i.parentNode.removeChild(i);
	}
}
function Gs(e, t, n) {
	let { node: r, fromOffset: i, toOffset: a, from: o, to: s } = e.docView.parseRange(t, n), c = e.domSelectionRange(), l, u = c.anchorNode;
	if (u && e.dom.contains(u.nodeType == 1 ? u : u.parentNode) && (l = [{
		node: u,
		offset: c.anchorOffset
	}], ri(c) || l.push({
		node: c.focusNode,
		offset: c.focusOffset
	})), N && e.input.lastKeyCode === 8) for (let e = a; e > i; e--) {
		let t = r.childNodes[e - 1], n = t.pmViewDesc;
		if (t.nodeName == "BR" && !n) {
			a = e;
			break;
		}
		if (!n || n.size) break;
	}
	let d = e.state.doc, f = e.someProp("domParser") || et.fromSchema(e.state.schema), p = d.resolve(o), m = null, h = f.parse(r, {
		topNode: p.parent,
		topMatch: p.parent.contentMatchAt(p.index()),
		topOpen: !0,
		from: i,
		to: a,
		preserveWhitespace: p.parent.type.whitespace == "pre" ? "full" : !0,
		findPositions: l,
		ruleFromNode: Ks,
		context: p
	});
	if (l && l[0].pos != null) {
		let e = l[0].pos, t = l[1] && l[1].pos;
		t ??= e, m = {
			anchor: e + o,
			head: t + o
		};
	}
	return {
		doc: h,
		sel: m,
		from: o,
		to: s
	};
}
function Ks(e) {
	let t = e.pmViewDesc;
	if (t) return t.parseRule();
	if (e.nodeName == "BR" && e.parentNode) {
		if (P && /^(ul|ol)$/i.test(e.parentNode.nodeName)) {
			let e = document.createElement("div");
			return e.appendChild(document.createElement("li")), { skip: e };
		} else if (e.parentNode.lastChild == e || P && /^(tr|table)$/i.test(e.parentNode.nodeName)) return { ignore: !0 };
	} else if (e.nodeName == "IMG" && e.getAttribute("mark-placeholder")) return { ignore: !0 };
	return null;
}
var qs = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|img|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function Js(e, t, n, r, i) {
	let a = e.input.compositionPendingChanges || (e.composing ? e.input.compositionID : 0);
	if (e.input.compositionPendingChanges = 0, t < 0) {
		let t = e.input.lastSelectionTime > Date.now() - 50 ? e.input.lastSelectionOrigin : null, n = ja(e, t);
		if (n && !e.state.selection.eq(n)) {
			if (N && xi && e.input.lastKeyCode === 13 && Date.now() - 100 < e.input.lastKeyCodeTime && e.someProp("handleKeyDown", (t) => t(e, ii(13, "Enter")))) return;
			let r = e.state.tr.setSelection(n);
			t == "pointer" ? r.setMeta("pointer", !0) : t == "key" && r.scrollIntoView(), a && r.setMeta("composition", a), e.dispatch(r);
		}
		return;
	}
	let o = e.state.doc.resolve(t), s = o.sharedDepth(n);
	t = o.before(s + 1), n = e.state.doc.resolve(n).after(s + 1);
	let c = e.state.selection, l = Gs(e, t, n), u = e.state.doc, d = u.slice(l.from, l.to), f, p;
	e.input.lastKeyCode === 8 && Date.now() - 100 < e.input.lastKeyCodeTime ? (f = e.state.selection.to, p = "end") : (f = e.state.selection.from, p = "start"), e.input.lastKeyCode = null;
	let m = $s(d.content, l.doc.content, l.from, f, p);
	if (m && e.input.domChangeCount++, (vi && e.input.lastIOSEnter > Date.now() - 225 || xi) && i.some((e) => e.nodeType == 1 && !qs.test(e.nodeName)) && (!m || m.endA >= m.endB) && e.someProp("handleKeyDown", (t) => t(e, ii(13, "Enter")))) {
		e.input.lastIOSEnter = 0;
		return;
	}
	if (!m) if (r && c instanceof O && !c.empty && c.$head.sameParent(c.$anchor) && !e.composing && !(l.sel && l.sel.anchor != l.sel.head)) m = {
		start: c.from,
		endA: c.to,
		endB: c.to
	};
	else {
		if (l.sel) {
			let t = Ys(e, e.state.doc, l.sel);
			if (t && !t.eq(e.state.selection)) {
				let n = e.state.tr.setSelection(t);
				a && n.setMeta("composition", a), e.dispatch(n);
			}
		}
		return;
	}
	e.state.selection.from < e.state.selection.to && m.start == m.endB && e.state.selection instanceof O && (m.start > e.state.selection.from && m.start <= e.state.selection.from + 2 && e.state.selection.from >= l.from ? m.start = e.state.selection.from : m.endA < e.state.selection.to && m.endA >= e.state.selection.to - 2 && e.state.selection.to <= l.to && (m.endB += e.state.selection.to - m.endA, m.endA = e.state.selection.to)), pi && mi <= 11 && m.endB == m.start + 1 && m.endA == m.start && m.start > l.from && l.doc.textBetween(m.start - l.from - 1, m.start - l.from + 1) == " \xA0" && (m.start--, m.endA--, m.endB--);
	let h = l.doc.resolveNoCache(m.start - l.from), g = l.doc.resolveNoCache(m.endB - l.from), _ = u.resolve(m.start), ee = h.sameParent(g) && h.parent.inlineContent && _.end() >= m.endA;
	if ((vi && e.input.lastIOSEnter > Date.now() - 225 && (!ee || i.some((e) => e.nodeName == "DIV" || e.nodeName == "P")) || !ee && h.pos < l.doc.content.size && (!h.sameParent(g) || !h.parent.inlineContent) && h.pos < g.pos && !/\S/.test(l.doc.textBetween(h.pos, g.pos, "", ""))) && e.someProp("handleKeyDown", (t) => t(e, ii(13, "Enter")))) {
		e.input.lastIOSEnter = 0;
		return;
	}
	if (e.state.selection.anchor > m.start && Zs(u, m.start, m.endA, h, g) && e.someProp("handleKeyDown", (t) => t(e, ii(8, "Backspace")))) {
		xi && N && e.domObserver.suppressSelectionUpdates();
		return;
	}
	N && m.endB == m.start && (e.input.lastChromeDelete = Date.now()), xi && !ee && h.start() != g.start() && g.parentOffset == 0 && h.depth == g.depth && l.sel && l.sel.anchor == l.sel.head && l.sel.head == m.endA && (m.endB -= 2, g = l.doc.resolveNoCache(m.endB - l.from), setTimeout(() => {
		e.someProp("handleKeyDown", function(t) {
			return t(e, ii(13, "Enter"));
		});
	}, 20));
	let v = m.start, y = m.endA, b = (t) => {
		let n = t || e.state.tr.replace(v, y, l.doc.slice(m.start - l.from, m.endB - l.from));
		if (l.sel) {
			let t = Ys(e, n.doc, l.sel);
			t && !(N && e.composing && t.empty && (m.start != m.endB || e.input.lastChromeDelete < Date.now() - 100) && (t.head == v || t.head == n.mapping.map(y) - 1) || pi && t.empty && t.head == v) && n.setSelection(t);
		}
		return a && n.setMeta("composition", a), n.scrollIntoView();
	}, x;
	if (ee) if (h.pos == g.pos) {
		pi && mi <= 11 && h.parentOffset == 0 && (e.domObserver.suppressSelectionUpdates(), setTimeout(() => Na(e), 20));
		let t = b(e.state.tr.delete(v, y)), n = u.resolve(m.start).marksAcross(u.resolve(m.endA));
		n && t.ensureMarks(n), e.dispatch(t);
	} else if (m.endA == m.endB && (x = Xs(h.parent.content.cut(h.parentOffset, g.parentOffset), _.parent.content.cut(_.parentOffset, m.endA - _.start())))) {
		let t = b(e.state.tr);
		x.type == "add" ? t.addMark(v, y, x.mark) : t.removeMark(v, y, x.mark), e.dispatch(t);
	} else if (h.parent.child(h.index()).isText && h.index() == g.index() - (g.textOffset ? 0 : 1)) {
		let t = h.parent.textBetween(h.parentOffset, g.parentOffset), n = () => b(e.state.tr.insertText(t, v, y));
		e.someProp("handleTextInput", (r) => r(e, v, y, t, n)) || e.dispatch(n());
	} else e.dispatch(b());
	else e.dispatch(b());
}
function Ys(e, t, n) {
	return Math.max(n.anchor, n.head) > t.content.size ? null : Ha(e, t.resolve(n.anchor), t.resolve(n.head));
}
function Xs(e, t) {
	let n = e.firstChild.marks, r = t.firstChild.marks, i = n, a = r, o, s, c;
	for (let e = 0; e < r.length; e++) i = r[e].removeFromSet(i);
	for (let e = 0; e < n.length; e++) a = n[e].removeFromSet(a);
	if (i.length == 1 && a.length == 0) s = i[0], o = "add", c = (e) => e.mark(s.addToSet(e.marks));
	else if (i.length == 0 && a.length == 1) s = a[0], o = "remove", c = (e) => e.mark(s.removeFromSet(e.marks));
	else return null;
	let l = [];
	for (let e = 0; e < t.childCount; e++) l.push(c(t.child(e)));
	if (S.from(l).eq(e)) return {
		mark: s,
		type: o
	};
}
function Zs(e, t, n, r, i) {
	if (n - t <= i.pos - r.pos || Qs(r, !0, !1) < i.pos) return !1;
	let a = e.resolve(t);
	if (!r.parent.isTextblock) {
		let e = a.nodeAfter;
		return e != null && n == t + e.nodeSize;
	}
	if (a.parentOffset < a.parent.content.size || !a.parent.isTextblock) return !1;
	let o = e.resolve(Qs(a, !0, !0));
	return !o.parent.isTextblock || o.pos > n || Qs(o, !0, !1) < n ? !1 : r.parent.content.cut(r.parentOffset).eq(o.parent.content);
}
function Qs(e, t, n) {
	let r = e.depth, i = t ? e.end() : e.pos;
	for (; r > 0 && (t || e.indexAfter(r) == e.node(r).childCount);) r--, i++, t = !1;
	if (n) {
		let t = e.node(r).maybeChild(e.indexAfter(r));
		for (; t && !t.isLeaf;) t = t.firstChild, i++;
	}
	return i;
}
function $s(e, t, n, r, i) {
	let a = e.findDiffStart(t, n);
	if (a == null) return null;
	let { a: o, b: s } = e.findDiffEnd(t, n + e.size, n + t.size);
	if (i == "end") {
		let e = Math.max(0, a - Math.min(o, s));
		r -= o + e - a;
	}
	if (o < a && e.size < t.size) {
		let e = r <= a && r >= o ? a - r : 0;
		a -= e, a && a < t.size && ec(t.textBetween(a - 1, a + 1)) && (a += e ? 1 : -1), s = a + (s - o), o = a;
	} else if (s < a) {
		let t = r <= a && r >= s ? a - r : 0;
		a -= t, a && a < e.size && ec(e.textBetween(a - 1, a + 1)) && (a += t ? 1 : -1), o = a + (o - s), s = a;
	}
	return {
		start: a,
		endA: o,
		endB: s
	};
}
function ec(e) {
	if (e.length != 2) return !1;
	let t = e.charCodeAt(0), n = e.charCodeAt(1);
	return t >= 56320 && t <= 57343 && n >= 55296 && n <= 56319;
}
var tc = class {
	constructor(e, t) {
		this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new Ao(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = t, this.state = t.state, this.directPlugins = t.plugins || [], this.directPlugins.forEach(cc), this.dispatch = this.dispatch.bind(this), this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : typeof e == "function" ? e(this.dom) : e.mount && (this.mounted = !0)), this.editable = ic(this), rc(this), this.nodeViews = oc(this), this.docView = da(this.state.doc, nc(this), Ns(this), this.dom, this), this.domObserver = new Ls(this, (e, t, n, r) => Js(this, e, t, n, r)), this.domObserver.start(), jo(this), this.updatePluginViews();
	}
	get composing() {
		return this.input.composing;
	}
	get props() {
		if (this._props.state != this.state) {
			let e = this._props;
			this._props = {};
			for (let t in e) this._props[t] = e[t];
			this._props.state = this.state;
		}
		return this._props;
	}
	update(e) {
		e.handleDOMEvents != this._props.handleDOMEvents && Po(this);
		let t = this._props;
		this._props = e, e.plugins && (e.plugins.forEach(cc), this.directPlugins = e.plugins), this.updateStateInner(e.state, t);
	}
	setProps(e) {
		let t = {};
		for (let e in this._props) t[e] = this._props[e];
		t.state = this.state;
		for (let n in e) t[n] = e[n];
		this.update(t);
	}
	updateState(e) {
		this.updateStateInner(e, this._props);
	}
	updateStateInner(e, t) {
		let n = this.state, r = !1, i = !1;
		e.storedMarks && this.composing && (ts(this), i = !0), this.state = e;
		let a = n.plugins != e.plugins || this._props.plugins != t.plugins;
		if (a || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) {
			let e = oc(this);
			sc(e, this.nodeViews) && (this.nodeViews = e, r = !0);
		}
		(a || t.handleDOMEvents != this._props.handleDOMEvents) && Po(this), this.editable = ic(this), rc(this);
		let o = Ns(this), s = nc(this), c = n.plugins != e.plugins && !n.doc.eq(e.doc) ? "reset" : e.scrollToSelection > n.scrollToSelection ? "to selection" : "preserve", l = r || !this.docView.matchesNode(e.doc, s, o);
		(l || !e.selection.eq(n.selection)) && (i = !0);
		let u = c == "preserve" && i && this.dom.style.overflowAnchor == null && Oi(this);
		if (i) {
			this.domObserver.stop();
			let t = l && (pi || N) && !this.composing && !n.selection.empty && !e.selection.empty && ac(n.selection, e.selection);
			if (l) {
				let n = N ? this.trackWrites = this.domSelectionRange().focusNode : null;
				this.composing && (this.input.compositionNode = ns(this)), (r || !this.docView.update(e.doc, s, o, this)) && (this.docView.updateOuterDeco(s), this.docView.destroy(), this.docView = da(e.doc, s, o, this.dom, this)), n && (!this.trackWrites || !this.dom.contains(this.trackWrites)) && (t = !0);
			}
			t || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && Ga(this)) ? Na(this, t) : (Ba(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start();
		}
		this.updatePluginViews(n), this.dragging?.node && !n.doc.eq(e.doc) && this.updateDraggedNode(this.dragging, n), c == "reset" ? this.dom.scrollTop = 0 : c == "to selection" ? this.scrollToSelection() : u && Ai(u);
	}
	scrollToSelection() {
		let e = this.domSelectionRange().focusNode;
		if (!(!e || !this.dom.contains(e.nodeType == 1 ? e : e.parentNode)) && !this.someProp("handleScrollToSelection", (e) => e(this))) if (this.state.selection instanceof k) {
			let t = this.docView.domAfterPos(this.state.selection.from);
			t.nodeType == 1 && Di(this, t.getBoundingClientRect(), e);
		} else Di(this, this.coordsAtPos(this.state.selection.head, 1), e);
	}
	destroyPluginViews() {
		let e;
		for (; e = this.pluginViews.pop();) e.destroy && e.destroy();
	}
	updatePluginViews(e) {
		if (!e || e.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
			this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews();
			for (let e = 0; e < this.directPlugins.length; e++) {
				let t = this.directPlugins[e];
				t.spec.view && this.pluginViews.push(t.spec.view(this));
			}
			for (let e = 0; e < this.state.plugins.length; e++) {
				let t = this.state.plugins[e];
				t.spec.view && this.pluginViews.push(t.spec.view(this));
			}
		} else for (let t = 0; t < this.pluginViews.length; t++) {
			let n = this.pluginViews[t];
			n.update && n.update(this, e);
		}
	}
	updateDraggedNode(e, t) {
		let n = e.node, r = -1;
		if (this.state.doc.nodeAt(n.from) == n.node) r = n.from;
		else {
			let e = n.from + (this.state.doc.content.size - t.doc.content.size);
			(e > 0 && this.state.doc.nodeAt(e)) == n.node && (r = e);
		}
		this.dragging = new fs(e.slice, e.move, r < 0 ? void 0 : k.create(this.state.doc, r));
	}
	someProp(e, t) {
		let n = this._props && this._props[e], r;
		if (n != null && (r = t ? t(n) : n)) return r;
		for (let n = 0; n < this.directPlugins.length; n++) {
			let i = this.directPlugins[n].props[e];
			if (i != null && (r = t ? t(i) : i)) return r;
		}
		let i = this.state.plugins;
		if (i) for (let n = 0; n < i.length; n++) {
			let a = i[n].props[e];
			if (a != null && (r = t ? t(a) : a)) return r;
		}
	}
	hasFocus() {
		if (pi) {
			let e = this.root.activeElement;
			if (e == this.dom) return !0;
			if (!e || !this.dom.contains(e)) return !1;
			for (; e && this.dom != e && this.dom.contains(e);) {
				if (e.contentEditable == "false") return !1;
				e = e.parentElement;
			}
			return !0;
		}
		return this.root.activeElement == this.dom;
	}
	focus() {
		this.domObserver.stop(), this.editable && Ni(this.dom), Na(this), this.domObserver.start();
	}
	get root() {
		let e = this._root;
		if (e == null) {
			for (let e = this.dom.parentNode; e; e = e.parentNode) if (e.nodeType == 9 || e.nodeType == 11 && e.host) return e.getSelection || (Object.getPrototypeOf(e).getSelection = () => e.ownerDocument.getSelection()), this._root = e;
		}
		return e || document;
	}
	updateRoot() {
		this._root = null;
	}
	posAtCoords(e) {
		return Vi(this, e);
	}
	coordsAtPos(e, t = 1) {
		return Gi(this, e, t);
	}
	domAtPos(e, t = 0) {
		return this.docView.domFromPos(e, t);
	}
	nodeDOM(e) {
		let t = this.docView.descAt(e);
		return t ? t.nodeDOM : null;
	}
	posAtDOM(e, t, n = -1) {
		let r = this.docView.posFromDOM(e, t, n);
		if (r == null) throw RangeError("DOM position not inside the editor");
		return r;
	}
	endOfTextblock(e, t) {
		return ta(this, t || this.state, e);
	}
	pasteHTML(e, t) {
		return us(this, "", e, !1, t || new ClipboardEvent("paste"));
	}
	pasteText(e, t) {
		return us(this, e, null, !0, t || new ClipboardEvent("paste"));
	}
	serializeForClipboard(e) {
		return fo(this, e);
	}
	destroy() {
		this.docView && (No(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], Ns(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null, Jr());
	}
	get isDestroyed() {
		return this.docView == null;
	}
	dispatchEvent(e) {
		return Lo(this, e);
	}
	domSelectionRange() {
		let e = this.domSelection();
		return e ? P && this.root.nodeType === 11 && ai(this.dom.ownerDocument) == this.dom && Hs(this, e) || e : {
			focusNode: null,
			focusOffset: 0,
			anchorNode: null,
			anchorOffset: 0
		};
	}
	domSelection() {
		return this.root.getSelection();
	}
};
tc.prototype.dispatch = function(e) {
	let t = this._props.dispatchTransaction;
	t ? t.call(this, e) : this.updateState(this.state.apply(e));
};
function nc(e) {
	let t = Object.create(null);
	return t.class = "ProseMirror", t.contenteditable = String(e.editable), e.someProp("attributes", (n) => {
		if (typeof n == "function" && (n = n(e.state)), n) for (let e in n) e == "class" ? t.class += " " + n[e] : e == "style" ? t.style = (t.style ? t.style + ";" : "") + n[e] : !t[e] && e != "contenteditable" && e != "nodeName" && (t[e] = String(n[e]));
	}), t.translate ||= "no", [bs.node(0, e.state.doc.content.size, t)];
}
function rc(e) {
	if (e.markCursor) {
		let t = document.createElement("img");
		t.className = "ProseMirror-separator", t.setAttribute("mark-placeholder", "true"), t.setAttribute("alt", ""), e.cursorWrapper = {
			dom: t,
			deco: bs.widget(e.state.selection.from, t, {
				raw: !0,
				marks: e.markCursor
			})
		};
	} else e.cursorWrapper = null;
}
function ic(e) {
	return !e.someProp("editable", (t) => t(e.state) === !1);
}
function ac(e, t) {
	let n = Math.min(e.$anchor.sharedDepth(e.head), t.$anchor.sharedDepth(t.head));
	return e.$anchor.start(n) != t.$anchor.start(n);
}
function oc(e) {
	let t = Object.create(null);
	function n(e) {
		for (let n in e) Object.prototype.hasOwnProperty.call(t, n) || (t[n] = e[n]);
	}
	return e.someProp("nodeViews", n), e.someProp("markViews", n), t;
}
function sc(e, t) {
	let n = 0, r = 0;
	for (let r in e) {
		if (e[r] != t[r]) return !0;
		n++;
	}
	for (let e in t) r++;
	return n != r;
}
function cc(e) {
	if (e.spec.state || e.spec.filterTransaction || e.spec.appendTransaction) throw RangeError("Plugins passed directly to the view must not have a state component");
}
for (var lc = {
	8: "Backspace",
	9: "Tab",
	10: "Enter",
	12: "NumLock",
	13: "Enter",
	16: "Shift",
	17: "Control",
	18: "Alt",
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
	44: "PrintScreen",
	45: "Insert",
	46: "Delete",
	59: ";",
	61: "=",
	91: "Meta",
	92: "Meta",
	106: "*",
	107: "+",
	108: ",",
	109: "-",
	110: ".",
	111: "/",
	144: "NumLock",
	145: "ScrollLock",
	160: "Shift",
	161: "Shift",
	162: "Control",
	163: "Control",
	164: "Alt",
	165: "Alt",
	173: "-",
	186: ";",
	187: "=",
	188: ",",
	189: "-",
	190: ".",
	191: "/",
	192: "`",
	219: "[",
	220: "\\",
	221: "]",
	222: "'"
}, uc = {
	48: ")",
	49: "!",
	50: "@",
	51: "#",
	52: "$",
	53: "%",
	54: "^",
	55: "&",
	56: "*",
	57: "(",
	59: ":",
	61: "+",
	173: "_",
	186: ":",
	187: "+",
	188: "<",
	189: "_",
	190: ">",
	191: "?",
	192: "~",
	219: "{",
	220: "|",
	221: "}",
	222: "\""
}, dc = typeof navigator < "u" && /Mac/.test(navigator.platform), fc = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), pc = 0; pc < 10; pc++) lc[48 + pc] = lc[96 + pc] = String(pc);
for (var pc = 1; pc <= 24; pc++) lc[pc + 111] = "F" + pc;
for (var pc = 65; pc <= 90; pc++) lc[pc] = String.fromCharCode(pc + 32), uc[pc] = String.fromCharCode(pc);
for (var mc in lc) uc.hasOwnProperty(mc) || (uc[mc] = lc[mc]);
function hc(e) {
	var t = !(dc && e.metaKey && e.shiftKey && !e.ctrlKey && !e.altKey || fc && e.shiftKey && e.key && e.key.length == 1 || e.key == "Unidentified") && e.key || (e.shiftKey ? uc : lc)[e.keyCode] || e.key || "Unidentified";
	return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
var gc = typeof navigator < "u" && /Mac|iP(hone|[oa]d)/.test(navigator.platform), _c = typeof navigator < "u" && /Win/.test(navigator.platform);
function vc(e) {
	let t = e.split(/-(?!$)/), n = t[t.length - 1];
	n == "Space" && (n = " ");
	let r, i, a, o;
	for (let e = 0; e < t.length - 1; e++) {
		let n = t[e];
		if (/^(cmd|meta|m)$/i.test(n)) o = !0;
		else if (/^a(lt)?$/i.test(n)) r = !0;
		else if (/^(c|ctrl|control)$/i.test(n)) i = !0;
		else if (/^s(hift)?$/i.test(n)) a = !0;
		else if (/^mod$/i.test(n)) gc ? o = !0 : i = !0;
		else throw Error("Unrecognized modifier name: " + n);
	}
	return r && (n = "Alt-" + n), i && (n = "Ctrl-" + n), o && (n = "Meta-" + n), a && (n = "Shift-" + n), n;
}
function yc(e) {
	let t = Object.create(null);
	for (let n in e) t[vc(n)] = e[n];
	return t;
}
function bc(e, t, n = !0) {
	return t.altKey && (e = "Alt-" + e), t.ctrlKey && (e = "Ctrl-" + e), t.metaKey && (e = "Meta-" + e), n && t.shiftKey && (e = "Shift-" + e), e;
}
function xc(e) {
	return new A({ props: { handleKeyDown: Sc(e) } });
}
function Sc(e) {
	let t = yc(e);
	return function(e, n) {
		let r = hc(n), i, a = t[bc(r, n)];
		if (a && a(e.state, e.dispatch, e)) return !0;
		if (r.length == 1 && r != " ") {
			if (n.shiftKey) {
				let i = t[bc(r, n, !1)];
				if (i && i(e.state, e.dispatch, e)) return !0;
			}
			if ((n.altKey || n.metaKey || n.ctrlKey) && !(_c && n.ctrlKey && n.altKey) && (i = lc[n.keyCode]) && i != r) {
				let r = t[bc(i, n)];
				if (r && r(e.state, e.dispatch, e)) return !0;
			}
		}
		return !1;
	};
}
var Cc = Object.defineProperty, wc = (e, t) => {
	for (var n in t) Cc(e, n, {
		get: t[n],
		enumerable: !0
	});
};
function Tc(e) {
	let { state: t, transaction: n } = e, { selection: r } = n, { doc: i } = n, { storedMarks: a } = n;
	return {
		...t,
		apply: t.apply.bind(t),
		applyTransaction: t.applyTransaction.bind(t),
		plugins: t.plugins,
		schema: t.schema,
		reconfigure: t.reconfigure.bind(t),
		toJSON: t.toJSON.bind(t),
		get storedMarks() {
			return a;
		},
		get selection() {
			return r;
		},
		get doc() {
			return i;
		},
		get tr() {
			return r = n.selection, i = n.doc, a = n.storedMarks, n;
		}
	};
}
var Ec = class {
	constructor(e) {
		this.editor = e.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = e.state;
	}
	get hasCustomState() {
		return !!this.customState;
	}
	get state() {
		return this.customState || this.editor.state;
	}
	get commands() {
		let { rawCommands: e, editor: t, state: n } = this, { view: r } = t, { tr: i } = n, a = this.buildProps(i);
		return Object.fromEntries(Object.entries(e).map(([e, t]) => [e, (...e) => {
			let n = t(...e)(a);
			return !i.getMeta("preventDispatch") && !this.hasCustomState && r.dispatch(i), n;
		}]));
	}
	get chain() {
		return () => this.createChain();
	}
	get can() {
		return () => this.createCan();
	}
	createChain(e, t = !0) {
		let { rawCommands: n, editor: r, state: i } = this, { view: a } = r, o = [], s = !!e, c = e || i.tr, l = () => (!s && t && !c.getMeta("preventDispatch") && !this.hasCustomState && a.dispatch(c), o.every((e) => e === !0)), u = {
			...Object.fromEntries(Object.entries(n).map(([e, n]) => [e, (...e) => {
				let r = this.buildProps(c, t), i = n(...e)(r);
				return o.push(i), u;
			}])),
			run: l
		};
		return u;
	}
	createCan(e) {
		let { rawCommands: t, state: n } = this, r = e || n.tr, i = this.buildProps(r, !1);
		return {
			...Object.fromEntries(Object.entries(t).map(([e, t]) => [e, (...e) => t(...e)({
				...i,
				dispatch: void 0
			})])),
			chain: () => this.createChain(r, !1)
		};
	}
	buildProps(e, t = !0) {
		let { rawCommands: n, editor: r, state: i } = this, { view: a } = r, o = {
			tr: e,
			editor: r,
			view: a,
			state: Tc({
				state: i,
				transaction: e
			}),
			dispatch: t ? () => void 0 : void 0,
			chain: () => this.createChain(e, t),
			can: () => this.createCan(e),
			get commands() {
				return Object.fromEntries(Object.entries(n).map(([e, t]) => [e, (...e) => t(...e)(o)]));
			}
		};
		return o;
	}
}, Dc = {};
wc(Dc, {
	blur: () => Oc,
	clearContent: () => kc,
	clearNodes: () => Ac,
	command: () => jc,
	createParagraphNear: () => Mc,
	cut: () => Nc,
	deleteCurrentNode: () => Pc,
	deleteNode: () => Fc,
	deleteRange: () => Ic,
	deleteSelection: () => Lc,
	enter: () => Rc,
	exitCode: () => zc,
	extendMarkRange: () => Kc,
	first: () => qc,
	focus: () => el,
	forEach: () => tl,
	insertContent: () => nl,
	insertContentAt: () => cl,
	joinBackward: () => dl,
	joinDown: () => ul,
	joinForward: () => fl,
	joinItemBackward: () => pl,
	joinItemForward: () => ml,
	joinTextblockBackward: () => hl,
	joinTextblockForward: () => gl,
	joinUp: () => ll,
	keyboardShortcut: () => yl,
	lift: () => xl,
	liftEmptyBlock: () => Sl,
	liftListItem: () => Cl,
	newlineInCode: () => wl,
	resetAttributes: () => Dl,
	scrollIntoView: () => Ol,
	selectAll: () => kl,
	selectNodeBackward: () => Al,
	selectNodeForward: () => jl,
	selectParentNode: () => Ml,
	selectTextblockEnd: () => Nl,
	selectTextblockStart: () => Pl,
	setContent: () => Il,
	setMark: () => ku,
	setMeta: () => Au,
	setNode: () => ju,
	setNodeSelection: () => Mu,
	setTextDirection: () => Nu,
	setTextSelection: () => Pu,
	sinkListItem: () => Fu,
	splitBlock: () => Lu,
	splitListItem: () => Ru,
	toggleList: () => Vu,
	toggleMark: () => Hu,
	toggleNode: () => Uu,
	toggleWrap: () => Wu,
	undoInputRule: () => Gu,
	unsetAllMarks: () => Ku,
	unsetMark: () => qu,
	unsetTextDirection: () => Ju,
	updateAttributes: () => Yu,
	wrapIn: () => Xu,
	wrapInList: () => Zu
});
var Oc = () => ({ editor: e, view: t }) => (requestAnimationFrame(() => {
	var n;
	e.isDestroyed || (t.dom.blur(), (n = window == null ? void 0 : window.getSelection()) == null || n.removeAllRanges());
}), !0), kc = (e = !0) => ({ commands: t }) => t.setContent("", { emitUpdate: e }), Ac = () => ({ state: e, tr: t, dispatch: n }) => {
	let { selection: r } = t, { ranges: i } = r;
	return n && i.forEach(({ $from: n, $to: r }) => {
		e.doc.nodesBetween(n.pos, r.pos, (e, n) => {
			if (e.type.isText) return;
			let { doc: r, mapping: i } = t, a = r.resolve(i.map(n)), o = r.resolve(i.map(n + e.nodeSize)), s = a.blockRange(o);
			if (!s) return;
			let c = Kt(s);
			if (e.type.isTextblock) {
				let { defaultType: e } = a.parent.contentMatchAt(a.index());
				t.setNodeMarkup(s.start, e);
			}
			(c || c === 0) && t.lift(s, c);
		});
	}), !0;
}, jc = (e) => (t) => e(t), Mc = () => ({ state: e, dispatch: t }) => br(e, t), Nc = (e, t) => ({ editor: n, tr: r }) => {
	let { state: i } = n, a = i.doc.slice(e.from, e.to);
	r.deleteRange(e.from, e.to);
	let o = r.mapping.map(t);
	return r.insert(o, a.content), r.setSelection(new O(r.doc.resolve(Math.max(o - 1, 0)))), !0;
}, Pc = () => ({ tr: e, dispatch: t }) => {
	let { selection: n } = e, r = n.$anchor.node();
	if (r.content.size > 0) return !1;
	let i = e.selection.$anchor;
	for (let n = i.depth; n > 0; --n) if (i.node(n).type === r.type) {
		if (t) {
			let t = i.before(n), r = i.after(n);
			e.delete(t, r).scrollIntoView();
		}
		return !0;
	}
	return !1;
};
function z(e, t) {
	if (typeof e == "string") {
		if (!t.nodes[e]) throw Error(`There is no node type named '${e}'. Maybe you forgot to add the extension?`);
		return t.nodes[e];
	}
	return e;
}
var Fc = (e) => ({ tr: t, state: n, dispatch: r }) => {
	let i = z(e, n.schema), a = t.selection.$anchor;
	for (let e = a.depth; e > 0; --e) if (a.node(e).type === i) {
		if (r) {
			let n = a.before(e), r = a.after(e);
			t.delete(n, r).scrollIntoView();
		}
		return !0;
	}
	return !1;
}, Ic = (e) => ({ tr: t, dispatch: n }) => {
	let { from: r, to: i } = e;
	return n && t.delete(r, i), !0;
}, Lc = () => ({ state: e, dispatch: t }) => tr(e, t), Rc = () => ({ commands: e }) => e.keyboardShortcut("Enter"), zc = () => ({ state: e, dispatch: t }) => yr(e, t);
function Bc(e) {
	return Object.prototype.toString.call(e) === "[object RegExp]";
}
function Vc(e, t, n = { strict: !0 }) {
	let r = Object.keys(t);
	return r.length ? r.every((r) => n.strict ? t[r] === e[r] : Bc(t[r]) ? t[r].test(e[r]) : t[r] === e[r]) : !0;
}
function Hc(e, t, n = {}) {
	return e.find((e) => e.type === t && Vc(Object.fromEntries(Object.keys(n).map((t) => [t, e.attrs[t]])), n));
}
function Uc(e, t, n = {}) {
	return !!Hc(e, t, n);
}
function Wc(e, t, n) {
	if (!e || !t) return;
	let r = e.parent.childAfter(e.parentOffset);
	if ((!r.node || !r.node.marks.some((e) => e.type === t)) && (r = e.parent.childBefore(e.parentOffset)), !r.node || !r.node.marks.some((e) => e.type === t) || (n ||= r.node.marks[0]?.attrs, !Hc([...r.node.marks], t, n))) return;
	let i = r.index, a = e.start() + r.offset, o = i + 1, s = a + r.node.nodeSize;
	for (; i > 0 && Uc([...e.parent.child(i - 1).marks], t, n);) --i, a -= e.parent.child(i).nodeSize;
	for (; o < e.parent.childCount && Uc([...e.parent.child(o).marks], t, n);) s += e.parent.child(o).nodeSize, o += 1;
	return {
		from: a,
		to: s
	};
}
function Gc(e, t) {
	if (typeof e == "string") {
		if (!t.marks[e]) throw Error(`There is no mark type named '${e}'. Maybe you forgot to add the extension?`);
		return t.marks[e];
	}
	return e;
}
var Kc = (e, t = {}) => ({ tr: n, state: r, dispatch: i }) => {
	let a = Gc(e, r.schema), { doc: o, selection: s } = n, { $from: c, from: l, to: u } = s;
	if (i) {
		let e = Wc(c, a, t);
		if (e && e.from <= l && e.to >= u) {
			let t = O.create(o, e.from, e.to);
			n.setSelection(t);
		}
	}
	return !0;
}, qc = (e) => (t) => {
	let n = typeof e == "function" ? e(t) : e;
	for (let e = 0; e < n.length; e += 1) if (n[e](t)) return !0;
	return !1;
};
function Jc(e) {
	return e instanceof O;
}
function Yc(e = 0, t = 0, n = 0) {
	return Math.min(Math.max(e, t), n);
}
function Xc(e, t = null) {
	if (!t) return null;
	let n = D.atStart(e), r = D.atEnd(e);
	if (t === "start" || t === !0) return n;
	if (t === "end") return r;
	let i = n.from, a = r.to;
	return t === "all" ? O.create(e, Yc(0, i, a), Yc(e.content.size, i, a)) : O.create(e, Yc(t, i, a), Yc(t, i, a));
}
function Zc() {
	return navigator.platform === "Android" || /android/i.test(navigator.userAgent);
}
function Qc() {
	return [
		"iPad Simulator",
		"iPhone Simulator",
		"iPod Simulator",
		"iPad",
		"iPhone",
		"iPod"
	].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
function $c() {
	return typeof navigator < "u" ? /^((?!chrome|android).)*safari/i.test(navigator.userAgent) : !1;
}
var el = (e = null, t = {}) => ({ editor: n, view: r, tr: i, dispatch: a }) => {
	t = {
		scrollIntoView: !0,
		...t
	};
	let o = () => {
		(Qc() || Zc()) && r.dom.focus(), $c() && !Qc() && !Zc() && r.dom.focus({ preventScroll: !0 }), requestAnimationFrame(() => {
			n.isDestroyed || (r.focus(), t?.scrollIntoView && n.commands.scrollIntoView());
		});
	};
	try {
		if (r.hasFocus() && e === null || e === !1) return !0;
	} catch {
		return !1;
	}
	if (a && e === null && !Jc(n.state.selection)) return o(), !0;
	let s = Xc(i.doc, e) || n.state.selection, c = n.state.selection.eq(s);
	return a && (c || i.setSelection(s), c && i.storedMarks && i.setStoredMarks(i.storedMarks), o()), !0;
}, tl = (e, t) => (n) => e.every((e, r) => t(e, {
	...n,
	index: r
})), nl = (e, t) => ({ tr: n, commands: r }) => r.insertContentAt({
	from: n.selection.from,
	to: n.selection.to
}, e, t), rl = (e) => {
	let t = e.childNodes;
	for (let n = t.length - 1; n >= 0; --n) {
		let r = t[n];
		r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? e.removeChild(r) : r.nodeType === 1 && rl(r);
	}
	return e;
};
function il(e) {
	if (typeof window > "u") throw Error("[tiptap error]: there is no window object available, so this function cannot be used");
	let t = `<body>${e}</body>`, n = new window.DOMParser().parseFromString(t, "text/html").body;
	return rl(n);
}
function al(e, t, n) {
	if (e instanceof Te || e instanceof S) return e;
	n = {
		slice: !0,
		parseOptions: {},
		...n
	};
	let r = typeof e == "object" && !!e, i = typeof e == "string";
	if (r) try {
		if (Array.isArray(e) && e.length > 0) return S.fromArray(e.map((e) => t.nodeFromJSON(e)));
		let r = t.nodeFromJSON(e);
		return n.errorOnInvalidContent && r.check(), r;
	} catch (r) {
		if (n.errorOnInvalidContent) throw Error("[tiptap error]: Invalid JSON content", { cause: r });
		return console.warn("[tiptap warn]: Invalid content.", "Passed value:", e, "Error:", r), al("", t, n);
	}
	if (i) {
		if (n.errorOnInvalidContent) {
			let r = !1, i = "", a = new Xe({
				topNode: t.spec.topNode,
				marks: t.spec.marks,
				nodes: t.spec.nodes.append({ __tiptap__private__unknown__catch__all__node: {
					content: "inline*",
					group: "block",
					parseDOM: [{
						tag: "*",
						getAttrs: (e) => (r = !0, i = typeof e == "string" ? e : e.outerHTML, null)
					}]
				} })
			});
			if (n.slice ? et.fromSchema(a).parseSlice(il(e), n.parseOptions) : et.fromSchema(a).parse(il(e), n.parseOptions), n.errorOnInvalidContent && r) throw Error("[tiptap error]: Invalid HTML content", { cause: Error(`Invalid element found: ${i}`) });
		}
		let r = et.fromSchema(t);
		return n.slice ? r.parseSlice(il(e), n.parseOptions).content : r.parse(il(e), n.parseOptions);
	}
	return al("", t, n);
}
function ol(e, t, n) {
	let r = e.steps.length - 1;
	if (r < t) return;
	let i = e.steps[r];
	if (!(i instanceof zt || i instanceof Bt)) return;
	let a = e.mapping.maps[r], o = 0;
	a.forEach((e, t, n, r) => {
		o === 0 && (o = r);
	}), e.setSelection(D.near(e.doc.resolve(o), n));
}
var sl = (e) => !("type" in e), cl = (e, t, n) => ({ tr: r, dispatch: i, editor: a }) => {
	if (i) {
		n = {
			parseOptions: a.options.parseOptions,
			updateSelection: !0,
			applyInputRules: !1,
			applyPasteRules: !1,
			...n
		};
		let i, o = (e) => {
			a.emit("contentError", {
				editor: a,
				error: e,
				disableCollaboration: () => {
					"collaboration" in a.storage && typeof a.storage.collaboration == "object" && a.storage.collaboration && (a.storage.collaboration.isDisabled = !0);
				}
			});
		}, s = {
			preserveWhitespace: "full",
			...n.parseOptions
		};
		if (!n.errorOnInvalidContent && !a.options.enableContentCheck && a.options.emitContentError) try {
			al(t, a.schema, {
				parseOptions: s,
				errorOnInvalidContent: !0
			});
		} catch (e) {
			o(e);
		}
		try {
			i = al(t, a.schema, {
				parseOptions: s,
				errorOnInvalidContent: n.errorOnInvalidContent ?? a.options.enableContentCheck
			});
		} catch (e) {
			return o(e), !1;
		}
		let { from: c, to: l } = typeof e == "number" ? {
			from: e,
			to: e
		} : {
			from: e.from,
			to: e.to
		}, u = !0, d = !0;
		if ((sl(i) ? i : [i]).forEach((e) => {
			e.check(), u = u ? e.isText && e.marks.length === 0 : !1, d = d ? e.isBlock : !1;
		}), c === l && d) {
			let { parent: e } = r.doc.resolve(c);
			e.isTextblock && !e.type.spec.code && !e.childCount && (--c, l += 1);
		}
		let f;
		if (u) {
			if (Array.isArray(t)) f = t.map((e) => e.text || "").join("");
			else if (t instanceof S) {
				let e = "";
				t.forEach((t) => {
					t.text && (e += t.text);
				}), f = e;
			} else f = typeof t == "object" && t && t.text ? t.text : t;
			r.insertText(f, c, l);
		} else {
			f = i;
			let e = r.doc.resolve(c), t = e.node(), n = e.parentOffset === 0, a = t.isText || t.isTextblock, o = t.content.size > 0;
			n && a && o && (c = Math.max(0, c - 1)), r.replaceWith(c, l, f);
		}
		n.updateSelection && ol(r, r.steps.length - 1, -1), n.applyInputRules && r.setMeta("applyInputRules", {
			from: c,
			text: f
		}), n.applyPasteRules && r.setMeta("applyPasteRules", {
			from: c,
			text: f
		});
	}
	return !0;
}, ll = () => ({ state: e, dispatch: t }) => mr(e, t), ul = () => ({ state: e, dispatch: t }) => hr(e, t), dl = () => ({ state: e, dispatch: t }) => rr(e, t), fl = () => ({ state: e, dispatch: t }) => dr(e, t), pl = () => ({ state: e, dispatch: t, tr: n }) => {
	try {
		let r = un(e.doc, e.selection.$from.pos, -1);
		return r == null ? !1 : (n.join(r, 2), t && t(n), !0);
	} catch {
		return !1;
	}
}, ml = () => ({ state: e, dispatch: t, tr: n }) => {
	try {
		let r = un(e.doc, e.selection.$from.pos, 1);
		return r == null ? !1 : (n.join(r, 2), t && t(n), !0);
	} catch {
		return !1;
	}
}, hl = () => ({ state: e, dispatch: t }) => ir(e, t), gl = () => ({ state: e, dispatch: t }) => ar(e, t);
function _l() {
	return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function vl(e) {
	let t = e.split(/-(?!$)/), n = t[t.length - 1];
	n === "Space" && (n = " ");
	let r, i, a, o;
	for (let e = 0; e < t.length - 1; e += 1) {
		let n = t[e];
		if (/^(cmd|meta|m)$/i.test(n)) o = !0;
		else if (/^a(lt)?$/i.test(n)) r = !0;
		else if (/^(c|ctrl|control)$/i.test(n)) i = !0;
		else if (/^s(hift)?$/i.test(n)) a = !0;
		else if (/^mod$/i.test(n)) Qc() || _l() ? o = !0 : i = !0;
		else throw Error(`Unrecognized modifier name: ${n}`);
	}
	return r && (n = `Alt-${n}`), i && (n = `Ctrl-${n}`), o && (n = `Meta-${n}`), a && (n = `Shift-${n}`), n;
}
var yl = (e) => ({ editor: t, view: n, tr: r, dispatch: i }) => {
	let a = vl(e).split(/-(?!$)/), o = a.find((e) => ![
		"Alt",
		"Ctrl",
		"Meta",
		"Shift"
	].includes(e)), s = new KeyboardEvent("keydown", {
		key: o === "Space" ? " " : o,
		altKey: a.includes("Alt"),
		ctrlKey: a.includes("Ctrl"),
		metaKey: a.includes("Meta"),
		shiftKey: a.includes("Shift"),
		bubbles: !0,
		cancelable: !0
	});
	return t.captureTransaction(() => {
		n.someProp("handleKeyDown", (e) => e(n, s));
	})?.steps.forEach((e) => {
		let t = e.map(r.mapping);
		t && i && r.maybeStep(t);
	}), !0;
};
function bl(e, t, n = {}) {
	let { from: r, to: i, empty: a } = e.selection, o = t ? z(t, e.schema) : null, s = [];
	e.doc.nodesBetween(r, i, (e, t) => {
		if (e.isText) return;
		let n = Math.max(r, t), a = Math.min(i, t + e.nodeSize);
		s.push({
			node: e,
			from: n,
			to: a
		});
	});
	let c = i - r, l = s.filter((e) => o ? o.name === e.node.type.name : !0).filter((e) => Vc(e.node.attrs, n, { strict: !1 }));
	return a ? !!l.length : l.reduce((e, t) => e + t.to - t.from, 0) >= c;
}
var xl = (e, t = {}) => ({ state: n, dispatch: r }) => bl(n, z(e, n.schema), t) ? gr(n, r) : !1, Sl = () => ({ state: e, dispatch: t }) => xr(e, t), Cl = (e) => ({ state: t, dispatch: n }) => Vr(z(e, t.schema))(t, n), wl = () => ({ state: e, dispatch: t }) => _r(e, t);
function Tl(e, t) {
	return t.nodes[e] ? "node" : t.marks[e] ? "mark" : null;
}
function El(e, t) {
	let n = typeof t == "string" ? [t] : t;
	return Object.keys(e).reduce((t, r) => (n.includes(r) || (t[r] = e[r]), t), {});
}
var Dl = (e, t) => ({ tr: n, state: r, dispatch: i }) => {
	let a = null, o = null, s = Tl(typeof e == "string" ? e : e.name, r.schema);
	if (!s) return !1;
	s === "node" && (a = z(e, r.schema)), s === "mark" && (o = Gc(e, r.schema));
	let c = !1;
	return n.selection.ranges.forEach((e) => {
		r.doc.nodesBetween(e.$from.pos, e.$to.pos, (e, r) => {
			a && a === e.type && (c = !0, i && n.setNodeMarkup(r, void 0, El(e.attrs, t))), o && e.marks.length && e.marks.forEach((a) => {
				o === a.type && (c = !0, i && n.addMark(r, r + e.nodeSize, o.create(El(a.attrs, t))));
			});
		});
	}), c;
}, Ol = () => ({ tr: e, dispatch: t }) => (t && e.scrollIntoView(), !0), kl = () => ({ tr: e, dispatch: t }) => {
	if (t) {
		let t = new zn(e.doc);
		e.setSelection(t);
	}
	return !0;
}, Al = () => ({ state: e, dispatch: t }) => cr(e, t), jl = () => ({ state: e, dispatch: t }) => fr(e, t), Ml = () => ({ state: e, dispatch: t }) => wr(e, t), Nl = () => ({ state: e, dispatch: t }) => Ar(e, t), Pl = () => ({ state: e, dispatch: t }) => kr(e, t);
function Fl(e, t, n = {}, r = {}) {
	return al(e, t, {
		slice: !1,
		parseOptions: n,
		errorOnInvalidContent: r.errorOnInvalidContent
	});
}
var Il = (e, { errorOnInvalidContent: t, emitUpdate: n = !0, parseOptions: r = {} } = {}) => ({ editor: i, tr: a, dispatch: o, commands: s }) => {
	let { doc: c } = a;
	if (r.preserveWhitespace !== "full") {
		let s = Fl(e, i.schema, r, { errorOnInvalidContent: t ?? i.options.enableContentCheck });
		return o && a.replaceWith(0, c.content.size, s).setMeta("preventUpdate", !n), !0;
	}
	return o && a.setMeta("preventUpdate", !n), s.insertContentAt({
		from: 0,
		to: c.content.size
	}, e, {
		parseOptions: r,
		errorOnInvalidContent: t ?? i.options.enableContentCheck
	});
};
function Ll(e, t) {
	let n = Gc(t, e.schema), { from: r, to: i, empty: a } = e.selection, o = [];
	a ? (e.storedMarks && o.push(...e.storedMarks), o.push(...e.selection.$head.marks())) : e.doc.nodesBetween(r, i, (e) => {
		o.push(...e.marks);
	});
	let s = o.find((e) => e.type.name === n.name);
	return s ? { ...s.attrs } : {};
}
function Rl(e, t) {
	let n = new Mn(e);
	return t.forEach((e) => {
		e.steps.forEach((e) => {
			n.step(e);
		});
	}), n;
}
function zl(e) {
	for (let t = 0; t < e.edgeCount; t += 1) {
		let { type: n } = e.edge(t);
		if (n.isTextblock && !n.hasRequiredAttrs()) return n;
	}
	return null;
}
function Bl(e, t, n) {
	let r = [];
	return e.nodesBetween(t.from, t.to, (e, t) => {
		n(e) && r.push({
			node: e,
			pos: t
		});
	}), r;
}
function Vl(e, t) {
	for (let n = e.depth; n > 0; --n) {
		let r = e.node(n);
		if (t(r)) return {
			pos: n > 0 ? e.before(n) : 0,
			start: e.start(n),
			depth: n,
			node: r
		};
	}
}
function Hl(e) {
	return (t) => Vl(t.$from, e);
}
function B(e, t, n) {
	return e.config[t] === void 0 && e.parent ? B(e.parent, t, n) : typeof e.config[t] == "function" ? e.config[t].bind({
		...n,
		parent: e.parent ? B(e.parent, t, n) : null
	}) : e.config[t];
}
function Ul(e) {
	return e.map((e) => {
		let t = B(e, "addExtensions", {
			name: e.name,
			options: e.options,
			storage: e.storage
		});
		return t ? [e, ...Ul(t())] : e;
	}).flat(10);
}
function Wl(e, t) {
	let n = mt.fromSchema(t).serializeFragment(e), r = document.implementation.createHTMLDocument().createElement("div");
	return r.appendChild(n), r.innerHTML;
}
function Gl(e) {
	return typeof e == "function";
}
function V(e, t = void 0, ...n) {
	return Gl(e) ? t ? e.bind(t)(...n) : e(...n) : e;
}
function Kl(e = {}) {
	return Object.keys(e).length === 0 && e.constructor === Object;
}
function ql(e) {
	return {
		baseExtensions: e.filter((e) => e.type === "extension"),
		nodeExtensions: e.filter((e) => e.type === "node"),
		markExtensions: e.filter((e) => e.type === "mark")
	};
}
function Jl(e) {
	let t = [], { nodeExtensions: n, markExtensions: r } = ql(e), i = [...n, ...r], a = {
		default: null,
		validate: void 0,
		rendered: !0,
		renderHTML: null,
		parseHTML: null,
		keepOnSplit: !0,
		isRequired: !1
	}, o = n.filter((e) => e.name !== "text").map((e) => e.name), s = r.map((e) => e.name), c = [...o, ...s];
	return e.forEach((e) => {
		let n = B(e, "addGlobalAttributes", {
			name: e.name,
			options: e.options,
			storage: e.storage,
			extensions: i
		});
		n && n().forEach((e) => {
			let n;
			n = Array.isArray(e.types) ? e.types : e.types === "*" ? c : e.types === "nodes" ? o : e.types === "marks" ? s : [], n.forEach((n) => {
				Object.entries(e.attributes).forEach(([e, r]) => {
					t.push({
						type: n,
						name: e,
						attribute: {
							...a,
							...r
						}
					});
				});
			});
		});
	}), i.forEach((e) => {
		let n = B(e, "addAttributes", {
			name: e.name,
			options: e.options,
			storage: e.storage
		});
		if (!n) return;
		let r = n();
		Object.entries(r).forEach(([n, r]) => {
			let i = {
				...a,
				...r
			};
			typeof i?.default == "function" && (i.default = i.default()), i?.isRequired && i?.default === void 0 && delete i.default, t.push({
				type: e.name,
				name: n,
				attribute: i
			});
		});
	}), t;
}
function H(...e) {
	return e.filter((e) => !!e).reduce((e, t) => {
		let n = { ...e };
		return Object.entries(t).forEach(([e, t]) => {
			if (!n[e]) {
				n[e] = t;
				return;
			}
			if (e === "class") {
				let r = t ? String(t).split(" ") : [], i = n[e] ? n[e].split(" ") : [], a = r.filter((e) => !i.includes(e));
				n[e] = [...i, ...a].join(" ");
			} else if (e === "style") {
				let r = t ? t.split(";").map((e) => e.trim()).filter(Boolean) : [], i = n[e] ? n[e].split(";").map((e) => e.trim()).filter(Boolean) : [], a = new Map();
				i.forEach((e) => {
					let [t, n] = e.split(":").map((e) => e.trim());
					a.set(t, n);
				}), r.forEach((e) => {
					let [t, n] = e.split(":").map((e) => e.trim());
					a.set(t, n);
				}), n[e] = Array.from(a.entries()).map(([e, t]) => `${e}: ${t}`).join("; ");
			} else n[e] = t;
		}), n;
	}, {});
}
function Yl(e, t) {
	return t.filter((t) => t.type === e.type.name).filter((e) => e.attribute.rendered).map((t) => t.attribute.renderHTML ? t.attribute.renderHTML(e.attrs) || {} : { [t.name]: e.attrs[t.name] }).reduce((e, t) => H(e, t), {});
}
function Xl(e) {
	return typeof e == "string" ? e.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(e) : e === "true" ? !0 : e === "false" ? !1 : e : e;
}
function Zl(e, t) {
	return "style" in e ? e : {
		...e,
		getAttrs: (n) => {
			let r = e.getAttrs ? e.getAttrs(n) : e.attrs;
			if (r === !1) return !1;
			let i = t.reduce((e, t) => {
				let r = t.attribute.parseHTML ? t.attribute.parseHTML(n) : Xl(n.getAttribute(t.name));
				return r == null ? e : {
					...e,
					[t.name]: r
				};
			}, {});
			return {
				...r,
				...i
			};
		}
	};
}
function Ql(e) {
	return Object.fromEntries(Object.entries(e).filter(([e, t]) => e === "attrs" && Kl(t) ? !1 : t != null));
}
function $l(e) {
	let t = {};
	return !e?.attribute?.isRequired && "default" in (e?.attribute || {}) && (t.default = e.attribute.default), e?.attribute?.validate !== void 0 && (t.validate = e.attribute.validate), [e.name, t];
}
function eu(e, t) {
	let n = Jl(e), { nodeExtensions: r, markExtensions: i } = ql(e);
	return new Xe({
		topNode: r.find((e) => B(e, "topNode"))?.name,
		nodes: Object.fromEntries(r.map((r) => {
			let i = n.filter((e) => e.type === r.name), a = {
				name: r.name,
				options: r.options,
				storage: r.storage,
				editor: t
			}, o = Ql({
				...e.reduce((e, t) => {
					let n = B(t, "extendNodeSchema", a);
					return {
						...e,
						...n ? n(r) : {}
					};
				}, {}),
				content: V(B(r, "content", a)),
				marks: V(B(r, "marks", a)),
				group: V(B(r, "group", a)),
				inline: V(B(r, "inline", a)),
				atom: V(B(r, "atom", a)),
				selectable: V(B(r, "selectable", a)),
				draggable: V(B(r, "draggable", a)),
				code: V(B(r, "code", a)),
				whitespace: V(B(r, "whitespace", a)),
				linebreakReplacement: V(B(r, "linebreakReplacement", a)),
				defining: V(B(r, "defining", a)),
				isolating: V(B(r, "isolating", a)),
				attrs: Object.fromEntries(i.map($l))
			}), s = V(B(r, "parseHTML", a));
			s && (o.parseDOM = s.map((e) => Zl(e, i)));
			let c = B(r, "renderHTML", a);
			c && (o.toDOM = (e) => c({
				node: e,
				HTMLAttributes: Yl(e, i)
			}));
			let l = B(r, "renderText", a);
			return l && (o.toText = l), [r.name, o];
		})),
		marks: Object.fromEntries(i.map((r) => {
			let i = n.filter((e) => e.type === r.name), a = {
				name: r.name,
				options: r.options,
				storage: r.storage,
				editor: t
			}, o = Ql({
				...e.reduce((e, t) => {
					let n = B(t, "extendMarkSchema", a);
					return {
						...e,
						...n ? n(r) : {}
					};
				}, {}),
				inclusive: V(B(r, "inclusive", a)),
				excludes: V(B(r, "excludes", a)),
				group: V(B(r, "group", a)),
				spanning: V(B(r, "spanning", a)),
				code: V(B(r, "code", a)),
				attrs: Object.fromEntries(i.map($l))
			}), s = V(B(r, "parseHTML", a));
			s && (o.parseDOM = s.map((e) => Zl(e, i)));
			let c = B(r, "renderHTML", a);
			return c && (o.toDOM = (e) => c({
				mark: e,
				HTMLAttributes: Yl(e, i)
			})), [r.name, o];
		}))
	});
}
function tu(e) {
	let t = e.filter((t, n) => e.indexOf(t) !== n);
	return Array.from(new Set(t));
}
function nu(e) {
	return e.sort((e, t) => {
		let n = B(e, "priority") || 100, r = B(t, "priority") || 100;
		return n > r ? -1 : n < r ? 1 : 0;
	});
}
function ru(e) {
	let t = nu(Ul(e)), n = tu(t.map((e) => e.name));
	return n.length && console.warn(`[tiptap warn]: Duplicate extension names found: [${n.map((e) => `'${e}'`).join(", ")}]. This can lead to issues.`), t;
}
function iu(e, t, n) {
	let { from: r, to: i } = t, { blockSeparator: a = "\n\n", textSerializers: o = {} } = n || {}, s = "";
	return e.nodesBetween(r, i, (e, n, c, l) => {
		e.isBlock && n > r && (s += a);
		let u = o?.[e.type.name];
		if (u) return c && (s += u({
			node: e,
			pos: n,
			parent: c,
			index: l,
			range: t
		})), !1;
		e.isText && (s += (e?.text)?.slice(Math.max(r, n) - n, i - n));
	}), s;
}
function au(e, t) {
	return iu(e, {
		from: 0,
		to: e.content.size
	}, t);
}
function ou(e) {
	return Object.fromEntries(Object.entries(e.nodes).filter(([, e]) => e.spec.toText).map(([e, t]) => [e, t.spec.toText]));
}
function su(e, t) {
	let n = z(t, e.schema), { from: r, to: i } = e.selection, a = [];
	e.doc.nodesBetween(r, i, (e) => {
		a.push(e);
	});
	let o = a.reverse().find((e) => e.type.name === n.name);
	return o ? { ...o.attrs } : {};
}
function cu(e, t) {
	let n = Tl(typeof t == "string" ? t : t.name, e.schema);
	return n === "node" ? su(e, t) : n === "mark" ? Ll(e, t) : {};
}
function lu(e, t = JSON.stringify) {
	let n = {};
	return e.filter((e) => {
		let r = t(e);
		return Object.prototype.hasOwnProperty.call(n, r) ? !1 : n[r] = !0;
	});
}
function uu(e) {
	let t = lu(e);
	return t.length === 1 ? t : t.filter((e, n) => !t.filter((e, t) => t !== n).some((t) => e.oldRange.from >= t.oldRange.from && e.oldRange.to <= t.oldRange.to && e.newRange.from >= t.newRange.from && e.newRange.to <= t.newRange.to));
}
function du(e) {
	let { mapping: t, steps: n } = e, r = [];
	return t.maps.forEach((e, i) => {
		let a = [];
		if (e.ranges.length) e.forEach((e, t) => {
			a.push({
				from: e,
				to: t
			});
		});
		else {
			let { from: e, to: t } = n[i];
			if (e === void 0 || t === void 0) return;
			a.push({
				from: e,
				to: t
			});
		}
		a.forEach(({ from: e, to: n }) => {
			let a = t.slice(i).map(e, -1), o = t.slice(i).map(n), s = t.invert().map(a, -1), c = t.invert().map(o);
			r.push({
				oldRange: {
					from: s,
					to: c
				},
				newRange: {
					from: a,
					to: o
				}
			});
		});
	}), uu(r);
}
function fu(e, t, n) {
	let r = [];
	return e === t ? n.resolve(e).marks().forEach((t) => {
		let i = Wc(n.resolve(e), t.type);
		i && r.push({
			mark: t,
			...i
		});
	}) : n.nodesBetween(e, t, (e, t) => {
		!e || e?.nodeSize === void 0 || r.push(...e.marks.map((n) => ({
			from: t,
			to: t + e.nodeSize,
			mark: n
		})));
	}), r;
}
var pu = (e, t, n, r = 20) => {
	let i = e.doc.resolve(n), a = r, o = null;
	for (; a > 0 && o === null;) {
		let e = i.node(a);
		e?.type.name === t ? o = e : --a;
	}
	return [o, a];
};
function mu(e, t) {
	return t.nodes[e] || t.marks[e] || null;
}
function hu(e, t, n) {
	return Object.fromEntries(Object.entries(n).filter(([n]) => {
		let r = e.find((e) => e.type === t && e.name === n);
		return r ? r.attribute.keepOnSplit : !1;
	}));
}
var gu = (e, t = 500) => {
	let n = "", r = e.parentOffset;
	return e.parent.nodesBetween(Math.max(0, r - t), r, (e, t, i, a) => {
		var o;
		let s = (o = e.type.spec).toText?.call(o, {
			node: e,
			pos: t,
			parent: i,
			index: a
		}) || e.textContent || "%leaf%";
		n += e.isAtom && !e.isText ? s : s.slice(0, Math.max(0, r - t));
	}), n;
};
function _u(e, t, n = {}) {
	let { empty: r, ranges: i } = e.selection, a = t ? Gc(t, e.schema) : null;
	if (r) return !!(e.storedMarks || e.selection.$from.marks()).filter((e) => a ? a.name === e.type.name : !0).find((e) => Vc(e.attrs, n, { strict: !1 }));
	let o = 0, s = [];
	if (i.forEach(({ $from: t, $to: n }) => {
		let r = t.pos, i = n.pos;
		e.doc.nodesBetween(r, i, (e, t) => {
			if (a && e.inlineContent && !e.type.allowsMarkType(a)) return !1;
			if (!e.isText && !e.marks.length) return;
			let n = Math.max(r, t), c = Math.min(i, t + e.nodeSize), l = c - n;
			o += l, s.push(...e.marks.map((e) => ({
				mark: e,
				from: n,
				to: c
			})));
		});
	}), o === 0) return !1;
	let c = s.filter((e) => a ? a.name === e.mark.type.name : !0).filter((e) => Vc(e.mark.attrs, n, { strict: !1 })).reduce((e, t) => e + t.to - t.from, 0), l = s.filter((e) => a ? e.mark.type !== a && e.mark.type.excludes(a) : !0).reduce((e, t) => e + t.to - t.from, 0);
	return (c > 0 ? c + l : c) >= o;
}
function vu(e, t, n = {}) {
	if (!t) return bl(e, null, n) || _u(e, null, n);
	let r = Tl(t, e.schema);
	return r === "node" ? bl(e, t, n) : r === "mark" ? _u(e, t, n) : !1;
}
var yu = (e, t) => {
	let { $from: n, $to: r, $anchor: i } = e.selection;
	if (t) {
		let n = Hl((e) => e.type.name === t)(e.selection);
		if (!n) return !1;
		let r = e.doc.resolve(n.pos + 1);
		return i.pos + 1 === r.end();
	}
	return !(r.parentOffset < r.parent.nodeSize - 2 || n.pos !== r.pos);
}, bu = (e) => {
	let { $from: t, $to: n } = e.selection;
	return !(t.parentOffset > 0 || t.pos !== n.pos);
};
function xu(e, t) {
	return Array.isArray(t) ? t.some((t) => (typeof t == "string" ? t : t.name) === e.name) : t;
}
function Su(e, t) {
	let { nodeExtensions: n } = ql(t), r = n.find((t) => t.name === e);
	if (!r) return !1;
	let i = V(B(r, "group", {
		name: r.name,
		options: r.options,
		storage: r.storage
	}));
	return typeof i == "string" ? i.split(" ").includes("list") : !1;
}
function Cu(e, { checkChildren: t = !0, ignoreWhitespace: n = !1 } = {}) {
	if (n) {
		if (e.type.name === "hardBreak") return !0;
		if (e.isText) return /^\s*$/m.test(e.text ?? "");
	}
	if (e.isText) return !e.text;
	if (e.isAtom || e.isLeaf) return !1;
	if (e.content.childCount === 0) return !0;
	if (t) {
		let r = !0;
		return e.content.forEach((e) => {
			r !== !1 && (Cu(e, {
				ignoreWhitespace: n,
				checkChildren: t
			}) || (r = !1));
		}), r;
	}
	return !1;
}
function wu(e) {
	return e instanceof k;
}
var Tu = class e {
	constructor(e) {
		this.position = e;
	}
	static fromJSON(t) {
		return new e(t.position);
	}
	toJSON() {
		return { position: this.position };
	}
};
function Eu(e, t) {
	let n = t.mapping.mapResult(e.position);
	return {
		position: new Tu(n.pos),
		mapResult: n
	};
}
function Du(e) {
	return new Tu(e);
}
function Ou(e, t, n) {
	let { selection: r } = t, i = null;
	if (Jc(r) && (i = r.$cursor), i) {
		let t = e.storedMarks ?? i.marks();
		return i.parent.type.allowsMarkType(n) && (!!n.isInSet(t) || !t.some((e) => e.type.excludes(n)));
	}
	let { ranges: a } = r;
	return a.some(({ $from: t, $to: r }) => {
		let i = t.depth === 0 ? e.doc.inlineContent && e.doc.type.allowsMarkType(n) : !1;
		return e.doc.nodesBetween(t.pos, r.pos, (e, t, r) => {
			if (i) return !1;
			if (e.isInline) {
				let t = !r || r.type.allowsMarkType(n), a = !!n.isInSet(e.marks) || !e.marks.some((e) => e.type.excludes(n));
				i = t && a;
			}
			return !i;
		}), i;
	});
}
var ku = (e, t = {}) => ({ tr: n, state: r, dispatch: i }) => {
	let { selection: a } = n, { empty: o, ranges: s } = a, c = Gc(e, r.schema);
	if (i) if (o) {
		let e = Ll(r, c);
		n.addStoredMark(c.create({
			...e,
			...t
		}));
	} else s.forEach((e) => {
		let i = e.$from.pos, a = e.$to.pos;
		r.doc.nodesBetween(i, a, (e, r) => {
			let o = Math.max(r, i), s = Math.min(r + e.nodeSize, a);
			e.marks.find((e) => e.type === c) ? e.marks.forEach((e) => {
				c === e.type && n.addMark(o, s, c.create({
					...e.attrs,
					...t
				}));
			}) : n.addMark(o, s, c.create(t));
		});
	});
	return Ou(r, n, c);
}, Au = (e, t) => ({ tr: n }) => (n.setMeta(e, t), !0), ju = (e, t = {}) => ({ state: n, dispatch: r, chain: i }) => {
	let a = z(e, n.schema), o;
	return n.selection.$anchor.sameParent(n.selection.$head) && (o = n.selection.$anchor.parent.attrs), a.isTextblock ? i().command(({ commands: e }) => Mr(a, {
		...o,
		...t
	})(n) ? !0 : e.clearNodes()).command(({ state: e }) => Mr(a, {
		...o,
		...t
	})(e, r)).run() : (console.warn("[tiptap warn]: Currently \"setNode()\" only supports text block nodes."), !1);
}, Mu = (e) => ({ tr: t, dispatch: n }) => {
	if (n) {
		let { doc: n } = t, r = Yc(e, 0, n.content.size), i = k.create(n, r);
		t.setSelection(i);
	}
	return !0;
}, Nu = (e, t) => ({ tr: n, state: r, dispatch: i }) => {
	let { selection: a } = r, o, s;
	return typeof t == "number" ? (o = t, s = t) : t && "from" in t && "to" in t ? (o = t.from, s = t.to) : (o = a.from, s = a.to), i && n.doc.nodesBetween(o, s, (t, r) => {
		t.isText || n.setNodeMarkup(r, void 0, {
			...t.attrs,
			dir: e
		});
	}), !0;
}, Pu = (e) => ({ tr: t, dispatch: n }) => {
	if (n) {
		let { doc: n } = t, { from: r, to: i } = typeof e == "number" ? {
			from: e,
			to: e
		} : e, a = O.atStart(n).from, o = O.atEnd(n).to, s = Yc(r, a, o), c = Yc(i, a, o), l = O.create(n, s, c);
		t.setSelection(l);
	}
	return !0;
}, Fu = (e) => ({ state: t, dispatch: n }) => Wr(z(e, t.schema))(t, n);
function Iu(e, t) {
	let n = e.storedMarks || e.selection.$to.parentOffset && e.selection.$from.marks();
	if (n) {
		let r = n.filter((e) => t?.includes(e.type.name));
		e.tr.ensureMarks(r);
	}
}
var Lu = ({ keepMarks: e = !0 } = {}) => ({ tr: t, state: n, dispatch: r, editor: i }) => {
	let { selection: a, doc: o } = t, { $from: s, $to: c } = a, l = i.extensionManager.attributes, u = hu(l, s.node().type.name, s.node().attrs);
	if (a instanceof k && a.node.isBlock) return !s.parentOffset || !an(o, s.pos) ? !1 : (r && (e && Iu(n, i.extensionManager.splittableMarks), t.split(s.pos).scrollIntoView()), !0);
	if (!s.parent.isBlock) return !1;
	let d = c.parentOffset === c.parent.content.size, f = s.depth === 0 ? void 0 : zl(s.node(-1).contentMatchAt(s.indexAfter(-1))), p = d && f ? [{
		type: f,
		attrs: u
	}] : void 0, m = an(t.doc, t.mapping.map(s.pos), 1, p);
	if (!p && !m && an(t.doc, t.mapping.map(s.pos), 1, f ? [{ type: f }] : void 0) && (m = !0, p = f ? [{
		type: f,
		attrs: u
	}] : void 0), r) {
		if (m && (a instanceof O && t.deleteSelection(), t.split(t.mapping.map(s.pos), 1, p), f && !d && !s.parentOffset && s.parent.type !== f)) {
			let e = t.mapping.map(s.before()), n = t.doc.resolve(e);
			s.node(-1).canReplaceWith(n.index(), n.index() + 1, f) && t.setNodeMarkup(t.mapping.map(s.before()), f);
		}
		e && Iu(n, i.extensionManager.splittableMarks), t.scrollIntoView();
	}
	return m;
}, Ru = (e, t = {}) => ({ tr: n, state: r, dispatch: i, editor: a }) => {
	let o = z(e, r.schema), { $from: s, $to: c } = r.selection, l = r.selection.node;
	if (l && l.isBlock || s.depth < 2 || !s.sameParent(c)) return !1;
	let u = s.node(-1);
	if (u.type !== o) return !1;
	let d = a.extensionManager.attributes;
	if (s.parent.content.size === 0 && s.node(-1).childCount === s.indexAfter(-1)) {
		if (s.depth === 2 || s.node(-3).type !== o || s.index(-2) !== s.node(-2).childCount - 1) return !1;
		if (i) {
			let e = S.empty, r = s.index(-1) ? 1 : s.index(-2) ? 2 : 3;
			for (let t = s.depth - r; t >= s.depth - 3; --t) e = S.from(s.node(t).copy(e));
			let i = s.indexAfter(-1) < s.node(-2).childCount ? 1 : s.indexAfter(-2) < s.node(-3).childCount ? 2 : 3, a = {
				...hu(d, s.node().type.name, s.node().attrs),
				...t
			}, c = o.contentMatch.defaultType?.createAndFill(a) || void 0;
			e = e.append(S.from(o.createAndFill(null, c) || void 0));
			let l = s.before(s.depth - (r - 1));
			n.replace(l, s.after(-i), new w(e, 4 - r, 0));
			let u = -1;
			n.doc.nodesBetween(l, n.doc.content.size, (e, t) => {
				if (u > -1) return !1;
				e.isTextblock && e.content.size === 0 && (u = t + 1);
			}), u > -1 && n.setSelection(O.near(n.doc.resolve(u))), n.scrollIntoView();
		}
		return !0;
	}
	let f = c.pos === s.end() ? u.contentMatchAt(0).defaultType : null, p = {
		...hu(d, u.type.name, u.attrs),
		...t
	}, m = {
		...hu(d, s.node().type.name, s.node().attrs),
		...t
	};
	n.delete(s.pos, c.pos);
	let h = f ? [{
		type: o,
		attrs: p
	}, {
		type: f,
		attrs: m
	}] : [{
		type: o,
		attrs: p
	}];
	if (!an(n.doc, s.pos, 2)) return !1;
	if (i) {
		let { selection: e, storedMarks: t } = r, { splittableMarks: o } = a.extensionManager, c = t || e.$to.parentOffset && e.$from.marks();
		if (n.split(s.pos, 2, h).scrollIntoView(), !c || !i) return !0;
		let l = c.filter((e) => o.includes(e.type.name));
		n.ensureMarks(l);
	}
	return !0;
}, zu = (e, t) => {
	let n = Hl((e) => e.type === t)(e.selection);
	if (!n) return !0;
	let r = e.doc.resolve(Math.max(0, n.pos - 1)).before(n.depth);
	if (r === void 0) return !0;
	let i = e.doc.nodeAt(r);
	return n.node.type === i?.type && sn(e.doc, n.pos) && e.join(n.pos), !0;
}, Bu = (e, t) => {
	let n = Hl((e) => e.type === t)(e.selection);
	if (!n) return !0;
	let r = e.doc.resolve(n.start).after(n.depth);
	if (r === void 0) return !0;
	let i = e.doc.nodeAt(r);
	return n.node.type === i?.type && sn(e.doc, r) && e.join(r), !0;
}, Vu = (e, t, n, r = {}) => ({ editor: i, tr: a, state: o, dispatch: s, chain: c, commands: l, can: u }) => {
	let { extensions: d, splittableMarks: f } = i.extensionManager, p = z(e, o.schema), m = z(t, o.schema), { selection: h, storedMarks: g } = o, { $from: _, $to: ee } = h, v = _.blockRange(ee), y = g || h.$to.parentOffset && h.$from.marks();
	if (!v) return !1;
	let b = Hl((e) => Su(e.type.name, d))(h);
	if (v.depth >= 1 && b && v.depth - b.depth <= 1) {
		if (b.node.type === p) return l.liftListItem(m);
		if (Su(b.node.type.name, d) && p.validContent(b.node.content) && s) return c().command(() => (a.setNodeMarkup(b.pos, p), !0)).command(() => zu(a, p)).command(() => Bu(a, p)).run();
	}
	return !n || !y || !s ? c().command(() => u().wrapInList(p, r) ? !0 : l.clearNodes()).wrapInList(p, r).command(() => zu(a, p)).command(() => Bu(a, p)).run() : c().command(() => {
		let e = u().wrapInList(p, r), t = y.filter((e) => f.includes(e.type.name));
		return a.ensureMarks(t), e ? !0 : l.clearNodes();
	}).wrapInList(p, r).command(() => zu(a, p)).command(() => Bu(a, p)).run();
}, Hu = (e, t = {}, n = {}) => ({ state: r, commands: i }) => {
	let { extendEmptyMarkRange: a = !1 } = n, o = Gc(e, r.schema);
	return _u(r, o, t) ? i.unsetMark(o, { extendEmptyMarkRange: a }) : i.setMark(o, t);
}, Uu = (e, t, n = {}) => ({ state: r, commands: i }) => {
	let a = z(e, r.schema), o = z(t, r.schema), s = bl(r, a, n), c;
	return r.selection.$anchor.sameParent(r.selection.$head) && (c = r.selection.$anchor.parent.attrs), s ? i.setNode(o, c) : i.setNode(a, {
		...c,
		...n
	});
}, Wu = (e, t = {}) => ({ state: n, commands: r }) => {
	let i = z(e, n.schema);
	return bl(n, i, t) ? r.lift(i) : r.wrapIn(i, t);
}, Gu = () => ({ state: e, dispatch: t }) => {
	let n = e.plugins;
	for (let r = 0; r < n.length; r += 1) {
		let i = n[r], a;
		if (i.spec.isInputRules && (a = i.getState(e))) {
			if (t) {
				let t = e.tr, n = a.transform;
				for (let e = n.steps.length - 1; e >= 0; --e) t.step(n.steps[e].invert(n.docs[e]));
				if (a.text) {
					let n = t.doc.resolve(a.from).marks();
					t.replaceWith(a.from, a.to, e.schema.text(a.text, n));
				} else t.delete(a.from, a.to);
			}
			return !0;
		}
	}
	return !1;
}, Ku = () => ({ tr: e, dispatch: t }) => {
	let { selection: n } = e, { empty: r, ranges: i } = n;
	return r || t && i.forEach((t) => {
		e.removeMark(t.$from.pos, t.$to.pos);
	}), !0;
}, qu = (e, t = {}) => ({ tr: n, state: r, dispatch: i }) => {
	let { extendEmptyMarkRange: a = !1 } = t, { selection: o } = n, s = Gc(e, r.schema), { $from: c, empty: l, ranges: u } = o;
	if (!i) return !0;
	if (l && a) {
		let { from: e, to: t } = o, r = Wc(c, s, c.marks().find((e) => e.type === s)?.attrs);
		r && (e = r.from, t = r.to), n.removeMark(e, t, s);
	} else u.forEach((e) => {
		n.removeMark(e.$from.pos, e.$to.pos, s);
	});
	return n.removeStoredMark(s), !0;
}, Ju = (e) => ({ tr: t, state: n, dispatch: r }) => {
	let { selection: i } = n, a, o;
	return typeof e == "number" ? (a = e, o = e) : e && "from" in e && "to" in e ? (a = e.from, o = e.to) : (a = i.from, o = i.to), r && t.doc.nodesBetween(a, o, (e, n) => {
		if (e.isText) return;
		let r = { ...e.attrs };
		delete r.dir, t.setNodeMarkup(n, void 0, r);
	}), !0;
}, Yu = (e, t = {}) => ({ tr: n, state: r, dispatch: i }) => {
	let a = null, o = null, s = Tl(typeof e == "string" ? e : e.name, r.schema);
	if (!s) return !1;
	s === "node" && (a = z(e, r.schema)), s === "mark" && (o = Gc(e, r.schema));
	let c = !1;
	return n.selection.ranges.forEach((e) => {
		let s = e.$from.pos, l = e.$to.pos, u, d, f, p;
		n.selection.empty ? r.doc.nodesBetween(s, l, (e, t) => {
			a && a === e.type && (c = !0, f = Math.max(t, s), p = Math.min(t + e.nodeSize, l), u = t, d = e);
		}) : r.doc.nodesBetween(s, l, (e, r) => {
			r < s && a && a === e.type && (c = !0, f = Math.max(r, s), p = Math.min(r + e.nodeSize, l), u = r, d = e), r >= s && r <= l && (a && a === e.type && (c = !0, i && n.setNodeMarkup(r, void 0, {
				...e.attrs,
				...t
			})), o && e.marks.length && e.marks.forEach((a) => {
				if (o === a.type && (c = !0, i)) {
					let i = Math.max(r, s), c = Math.min(r + e.nodeSize, l);
					n.addMark(i, c, o.create({
						...a.attrs,
						...t
					}));
				}
			}));
		}), d && (u !== void 0 && i && n.setNodeMarkup(u, void 0, {
			...d.attrs,
			...t
		}), o && d.marks.length && d.marks.forEach((e) => {
			o === e.type && i && n.addMark(f, p, o.create({
				...e.attrs,
				...t
			}));
		}));
	}), c;
}, Xu = (e, t = {}) => ({ state: n, dispatch: r }) => jr(z(e, n.schema), t)(n, r), Zu = (e, t = {}) => ({ state: n, dispatch: r }) => Rr(z(e, n.schema), t)(n, r), Qu = class {
	constructor() {
		this.callbacks = {};
	}
	on(e, t) {
		return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(t), this;
	}
	emit(e, ...t) {
		let n = this.callbacks[e];
		return n && n.forEach((e) => e.apply(this, t)), this;
	}
	off(e, t) {
		let n = this.callbacks[e];
		return n && (t ? this.callbacks[e] = n.filter((e) => e !== t) : delete this.callbacks[e]), this;
	}
	once(e, t) {
		let n = (...r) => {
			this.off(e, n), t.apply(this, r);
		};
		return this.on(e, n);
	}
	removeAllListeners() {
		this.callbacks = {};
	}
}, $u = class {
	constructor(e) {
		this.find = e.find, this.handler = e.handler, this.undoable = e.undoable ?? !0;
	}
}, ed = (e, t) => {
	if (Bc(t)) return t.exec(e);
	let n = t(e);
	if (!n) return null;
	let r = [n.text];
	return r.index = n.index, r.input = e, r.data = n.data, n.replaceWith && (n.text.includes(n.replaceWith) || console.warn("[tiptap warn]: \"inputRuleMatch.replaceWith\" must be part of \"inputRuleMatch.text\"."), r.push(n.replaceWith)), r;
};
function td(e) {
	let { editor: t, from: n, to: r, text: i, rules: a, plugin: o } = e, { view: s } = t;
	if (s.composing) return !1;
	let c = s.state.doc.resolve(n);
	if (c.parent.type.spec.code || (c.nodeBefore || c.nodeAfter)?.marks.find((e) => e.type.spec.code)) return !1;
	let l = !1, u = gu(c) + i;
	return a.forEach((e) => {
		if (l) return;
		let a = ed(u, e.find);
		if (!a) return;
		let c = s.state.tr, d = Tc({
			state: s.state,
			transaction: c
		}), f = {
			from: n - (a[0].length - i.length),
			to: r
		}, { commands: p, chain: m, can: h } = new Ec({
			editor: t,
			state: d
		});
		e.handler({
			state: d,
			range: f,
			match: a,
			commands: p,
			chain: m,
			can: h
		}) === null || !c.steps.length || (e.undoable && c.setMeta(o, {
			transform: c,
			from: n,
			to: r,
			text: i
		}), s.dispatch(c), l = !0);
	}), l;
}
function nd(e) {
	let { editor: t, rules: n } = e, r = new A({
		state: {
			init() {
				return null;
			},
			apply(e, i, a) {
				let o = e.getMeta(r);
				if (o) return o;
				let s = e.getMeta("applyInputRules");
				return s && setTimeout(() => {
					let { text: e } = s;
					e = typeof e == "string" ? e : Wl(S.from(e), a.schema);
					let { from: i } = s;
					td({
						editor: t,
						from: i,
						to: i + e.length,
						text: e,
						rules: n,
						plugin: r
					});
				}), e.selectionSet || e.docChanged ? null : i;
			}
		},
		props: {
			handleTextInput(e, i, a, o) {
				return td({
					editor: t,
					from: i,
					to: a,
					text: o,
					rules: n,
					plugin: r
				});
			},
			handleDOMEvents: { compositionend: (e) => (setTimeout(() => {
				let { $cursor: i } = e.state.selection;
				i && td({
					editor: t,
					from: i.pos,
					to: i.pos,
					text: "",
					rules: n,
					plugin: r
				});
			}), !1) },
			handleKeyDown(e, i) {
				if (i.key !== "Enter") return !1;
				let { $cursor: a } = e.state.selection;
				return a ? td({
					editor: t,
					from: a.pos,
					to: a.pos,
					text: "\n",
					rules: n,
					plugin: r
				}) : !1;
			}
		},
		isInputRules: !0
	});
	return r;
}
function rd(e) {
	return Object.prototype.toString.call(e).slice(8, -1);
}
function id(e) {
	return rd(e) === "Object" ? e.constructor === Object && Object.getPrototypeOf(e) === Object.prototype : !1;
}
function ad(e, t) {
	let n = { ...e };
	return id(e) && id(t) && Object.keys(t).forEach((r) => {
		id(t[r]) && id(e[r]) ? n[r] = ad(e[r], t[r]) : n[r] = t[r];
	}), n;
}
var od = class {
	constructor(e = {}) {
		this.type = "extendable", this.parent = null, this.child = null, this.name = "", this.config = { name: this.name }, this.config = {
			...this.config,
			...e
		}, this.name = this.config.name;
	}
	get options() {
		return { ...V(B(this, "addOptions", { name: this.name })) || {} };
	}
	get storage() {
		return { ...V(B(this, "addStorage", {
			name: this.name,
			options: this.options
		})) || {} };
	}
	configure(e = {}) {
		let t = this.extend({
			...this.config,
			addOptions: () => ad(this.options, e)
		});
		return t.name = this.name, t.parent = this.parent, t;
	}
	extend(e = {}) {
		let t = new this.constructor({
			...this.config,
			...e
		});
		return t.parent = this, this.child = t, t.name = "name" in e ? e.name : t.parent.name, t;
	}
}, sd = class e extends od {
	constructor() {
		super(...arguments), this.type = "mark";
	}
	static create(t = {}) {
		return new e(typeof t == "function" ? t() : t);
	}
	static handleExit({ editor: e, mark: t }) {
		let { tr: n } = e.state, r = e.state.selection.$from;
		if (r.pos === r.end()) {
			let i = r.marks();
			if (!i.find((e) => e?.type.name === t.name)) return !1;
			let a = i.find((e) => e?.type.name === t.name);
			return a && n.removeStoredMark(a), n.insertText(" ", r.pos), e.view.dispatch(n), !0;
		}
		return !1;
	}
	configure(e) {
		return super.configure(e);
	}
	extend(e) {
		let t = typeof e == "function" ? e() : e;
		return super.extend(t);
	}
};
function cd(e) {
	return typeof e == "number";
}
var ld = class {
	constructor(e) {
		this.find = e.find, this.handler = e.handler;
	}
}, ud = (e, t, n) => {
	if (Bc(t)) return [...e.matchAll(t)];
	let r = t(e, n);
	return r ? r.map((t) => {
		let n = [t.text];
		return n.index = t.index, n.input = e, n.data = t.data, t.replaceWith && (t.text.includes(t.replaceWith) || console.warn("[tiptap warn]: \"pasteRuleMatch.replaceWith\" must be part of \"pasteRuleMatch.text\"."), n.push(t.replaceWith)), n;
	}) : [];
};
function dd(e) {
	let { editor: t, state: n, from: r, to: i, rule: a, pasteEvent: o, dropEvent: s } = e, { commands: c, chain: l, can: u } = new Ec({
		editor: t,
		state: n
	}), d = [];
	return n.doc.nodesBetween(r, i, (e, t) => {
		if (e.type?.spec?.code || !(e.isText || e.isTextblock || e.isInline)) return;
		let f = e.content?.size ?? e.nodeSize ?? 0, p = Math.max(r, t), m = Math.min(i, t + f);
		p >= m || ud(e.isText ? e.text || "" : e.textBetween(p - t, m - t, void 0, "￼"), a.find, o).forEach((e) => {
			if (e.index === void 0) return;
			let t = p + e.index + 1, r = t + e[0].length, i = {
				from: n.tr.mapping.map(t),
				to: n.tr.mapping.map(r)
			}, f = a.handler({
				state: n,
				range: i,
				match: e,
				commands: c,
				chain: l,
				can: u,
				pasteEvent: o,
				dropEvent: s
			});
			d.push(f);
		});
	}), d.every((e) => e !== null);
}
var fd = null, pd = (e) => {
	var t;
	let n = new ClipboardEvent("paste", { clipboardData: new DataTransfer() });
	return (t = n.clipboardData) == null || t.setData("text/html", e), n;
};
function md(e) {
	let { editor: t, rules: n } = e, r = null, i = !1, a = !1, o = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, s;
	try {
		s = typeof DragEvent < "u" ? new DragEvent("drop") : null;
	} catch {
		s = null;
	}
	let c = ({ state: e, from: n, to: r, rule: i, pasteEvt: a }) => {
		let c = e.tr;
		if (!(!dd({
			editor: t,
			state: Tc({
				state: e,
				transaction: c
			}),
			from: Math.max(n - 1, 0),
			to: r.b - 1,
			rule: i,
			pasteEvent: a,
			dropEvent: s
		}) || !c.steps.length)) {
			try {
				s = typeof DragEvent < "u" ? new DragEvent("drop") : null;
			} catch {
				s = null;
			}
			return o = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, c;
		}
	};
	return n.map((e) => new A({
		view(e) {
			let n = (n) => {
				r = e.dom.parentElement?.contains(n.target) ? e.dom.parentElement : null, r && (fd = t);
			}, i = () => {
				fd &&= null;
			};
			return window.addEventListener("dragstart", n), window.addEventListener("dragend", i), { destroy() {
				window.removeEventListener("dragstart", n), window.removeEventListener("dragend", i);
			} };
		},
		props: { handleDOMEvents: {
			drop: (e, t) => {
				if (a = r === e.dom.parentElement, s = t, !a) {
					let e = fd;
					e?.isEditable && setTimeout(() => {
						let t = e.state.selection;
						t && e.commands.deleteRange({
							from: t.from,
							to: t.to
						});
					}, 10);
				}
				return !1;
			},
			paste: (e, t) => {
				let n = t.clipboardData?.getData("text/html");
				return o = t, i = !!n?.includes("data-pm-slice"), !1;
			}
		} },
		appendTransaction: (t, n, r) => {
			let s = t[0], l = s.getMeta("uiEvent") === "paste" && !i, u = s.getMeta("uiEvent") === "drop" && !a, d = s.getMeta("applyPasteRules"), f = !!d;
			if (!l && !u && !f) return;
			if (f) {
				let { text: t } = d;
				t = typeof t == "string" ? t : Wl(S.from(t), r.schema);
				let { from: n } = d, i = n + t.length, a = pd(t);
				return c({
					rule: e,
					state: r,
					from: n,
					to: { b: i },
					pasteEvt: a
				});
			}
			let p = n.doc.content.findDiffStart(r.doc.content), m = n.doc.content.findDiffEnd(r.doc.content);
			if (!(!cd(p) || !m || p === m.b)) return c({
				rule: e,
				state: r,
				from: p,
				to: m,
				pasteEvt: o
			});
		}
	}));
}
var hd = class {
	constructor(e, t) {
		this.splittableMarks = [], this.editor = t, this.baseExtensions = e, this.extensions = ru(e), this.schema = eu(this.extensions, t), this.setupExtensions();
	}
	get commands() {
		return this.extensions.reduce((e, t) => {
			let n = B(t, "addCommands", {
				name: t.name,
				options: t.options,
				storage: this.editor.extensionStorage[t.name],
				editor: this.editor,
				type: mu(t.name, this.schema)
			});
			return n ? {
				...e,
				...n()
			} : e;
		}, {});
	}
	get plugins() {
		let { editor: e } = this;
		return nu([...this.extensions].reverse()).flatMap((t) => {
			let n = {
				name: t.name,
				options: t.options,
				storage: this.editor.extensionStorage[t.name],
				editor: e,
				type: mu(t.name, this.schema)
			}, r = [], i = B(t, "addKeyboardShortcuts", n), a = {};
			if (t.type === "mark" && B(t, "exitable", n) && (a.ArrowRight = () => sd.handleExit({
				editor: e,
				mark: t
			})), i) {
				let t = Object.fromEntries(Object.entries(i()).map(([t, n]) => [t, () => n({ editor: e })]));
				a = {
					...a,
					...t
				};
			}
			let o = xc(a);
			r.push(o);
			let s = B(t, "addInputRules", n);
			if (xu(t, e.options.enableInputRules) && s) {
				let t = s();
				if (t && t.length) {
					let n = nd({
						editor: e,
						rules: t
					}), i = Array.isArray(n) ? n : [n];
					r.push(...i);
				}
			}
			let c = B(t, "addPasteRules", n);
			if (xu(t, e.options.enablePasteRules) && c) {
				let t = c();
				if (t && t.length) {
					let n = md({
						editor: e,
						rules: t
					});
					r.push(...n);
				}
			}
			let l = B(t, "addProseMirrorPlugins", n);
			if (l) {
				let e = l();
				r.push(...e);
			}
			return r;
		});
	}
	get attributes() {
		return Jl(this.extensions);
	}
	get nodeViews() {
		let { editor: e } = this, { nodeExtensions: t } = ql(this.extensions);
		return Object.fromEntries(t.filter((e) => !!B(e, "addNodeView")).map((t) => {
			let n = this.attributes.filter((e) => e.type === t.name), r = B(t, "addNodeView", {
				name: t.name,
				options: t.options,
				storage: this.editor.extensionStorage[t.name],
				editor: e,
				type: z(t.name, this.schema)
			});
			if (!r) return [];
			let i = r();
			return i ? [t.name, (r, a, o, s, c) => i({
				node: r,
				view: a,
				getPos: o,
				decorations: s,
				innerDecorations: c,
				editor: e,
				extension: t,
				HTMLAttributes: Yl(r, n)
			})] : [];
		}));
	}
	dispatchTransaction(e) {
		let { editor: t } = this;
		return nu([...this.extensions].reverse()).reduceRight((e, n) => {
			let r = {
				name: n.name,
				options: n.options,
				storage: this.editor.extensionStorage[n.name],
				editor: t,
				type: mu(n.name, this.schema)
			}, i = B(n, "dispatchTransaction", r);
			return i ? (t) => {
				i.call(r, {
					transaction: t,
					next: e
				});
			} : e;
		}, e);
	}
	transformPastedHTML(e) {
		let { editor: t } = this;
		return nu([...this.extensions]).reduce((e, n) => {
			let r = {
				name: n.name,
				options: n.options,
				storage: this.editor.extensionStorage[n.name],
				editor: t,
				type: mu(n.name, this.schema)
			}, i = B(n, "transformPastedHTML", r);
			return i ? (t, n) => {
				let a = e(t, n);
				return i.call(r, a);
			} : e;
		}, e || ((e) => e));
	}
	get markViews() {
		let { editor: e } = this, { markExtensions: t } = ql(this.extensions);
		return Object.fromEntries(t.filter((e) => !!B(e, "addMarkView")).map((t) => {
			let n = this.attributes.filter((e) => e.type === t.name), r = B(t, "addMarkView", {
				name: t.name,
				options: t.options,
				storage: this.editor.extensionStorage[t.name],
				editor: e,
				type: Gc(t.name, this.schema)
			});
			return r ? [t.name, (i, a, o) => {
				let s = Yl(i, n);
				return r()({
					mark: i,
					view: a,
					inline: o,
					editor: e,
					extension: t,
					HTMLAttributes: s,
					updateAttributes: (t) => {
						qd(i, e, t);
					}
				});
			}] : [];
		}));
	}
	setupExtensions() {
		let e = this.extensions;
		this.editor.extensionStorage = Object.fromEntries(e.map((e) => [e.name, e.storage])), e.forEach((e) => {
			let t = {
				name: e.name,
				options: e.options,
				storage: this.editor.extensionStorage[e.name],
				editor: this.editor,
				type: mu(e.name, this.schema)
			};
			e.type === "mark" && (V(B(e, "keepOnSplit", t)) ?? !0) && this.splittableMarks.push(e.name);
			let n = B(e, "onBeforeCreate", t), r = B(e, "onCreate", t), i = B(e, "onUpdate", t), a = B(e, "onSelectionUpdate", t), o = B(e, "onTransaction", t), s = B(e, "onFocus", t), c = B(e, "onBlur", t), l = B(e, "onDestroy", t);
			n && this.editor.on("beforeCreate", n), r && this.editor.on("create", r), i && this.editor.on("update", i), a && this.editor.on("selectionUpdate", a), o && this.editor.on("transaction", o), s && this.editor.on("focus", s), c && this.editor.on("blur", c), l && this.editor.on("destroy", l);
		});
	}
};
hd.resolve = ru, hd.sort = nu, hd.flatten = Ul, wc({}, {
	ClipboardTextSerializer: () => gd,
	Commands: () => _d,
	Delete: () => vd,
	Drop: () => yd,
	Editable: () => bd,
	FocusEvents: () => Sd,
	Keymap: () => Cd,
	Paste: () => wd,
	Tabindex: () => Td,
	TextDirection: () => Ed,
	focusEventsPluginKey: () => xd
});
var U = class e extends od {
	constructor() {
		super(...arguments), this.type = "extension";
	}
	static create(t = {}) {
		return new e(typeof t == "function" ? t() : t);
	}
	configure(e) {
		return super.configure(e);
	}
	extend(e) {
		let t = typeof e == "function" ? e() : e;
		return super.extend(t);
	}
}, gd = U.create({
	name: "clipboardTextSerializer",
	addOptions() {
		return { blockSeparator: void 0 };
	},
	addProseMirrorPlugins() {
		return [new A({
			key: new j("clipboardTextSerializer"),
			props: { clipboardTextSerializer: () => {
				let { editor: e } = this, { state: t, schema: n } = e, { doc: r, selection: i } = t, { ranges: a } = i, o = Math.min(...a.map((e) => e.$from.pos)), s = Math.max(...a.map((e) => e.$to.pos)), c = ou(n);
				return iu(r, {
					from: o,
					to: s
				}, {
					...this.options.blockSeparator === void 0 ? {} : { blockSeparator: this.options.blockSeparator },
					textSerializers: c
				});
			} }
		})];
	}
}), _d = U.create({
	name: "commands",
	addCommands() {
		return { ...Dc };
	}
}), vd = U.create({
	name: "delete",
	onUpdate({ transaction: e, appendedTransactions: t }) {
		let n = () => {
			var n;
			if (((n = this.editor.options.coreExtensionOptions?.delete)?.filterTransaction)?.call(n, e) ?? e.getMeta("y-sync$")) return;
			let r = Rl(e.before, [e, ...t]);
			du(r).forEach((t) => {
				r.mapping.mapResult(t.oldRange.from).deletedAfter && r.mapping.mapResult(t.oldRange.to).deletedBefore && r.before.nodesBetween(t.oldRange.from, t.oldRange.to, (n, i) => {
					let a = i + n.nodeSize - 2, o = t.oldRange.from <= i && a <= t.oldRange.to;
					this.editor.emit("delete", {
						type: "node",
						node: n,
						from: i,
						to: a,
						newFrom: r.mapping.map(i),
						newTo: r.mapping.map(a),
						deletedRange: t.oldRange,
						newRange: t.newRange,
						partial: !o,
						editor: this.editor,
						transaction: e,
						combinedTransform: r
					});
				});
			});
			let i = r.mapping;
			r.steps.forEach((t, n) => {
				if (t instanceof It) {
					let a = i.slice(n).map(t.from, -1), o = i.slice(n).map(t.to), s = i.invert().map(a, -1), c = i.invert().map(o), l = r.doc.nodeAt(a - 1)?.marks.some((e) => e.eq(t.mark)), u = r.doc.nodeAt(o)?.marks.some((e) => e.eq(t.mark));
					this.editor.emit("delete", {
						type: "mark",
						mark: t.mark,
						from: t.from,
						to: t.to,
						deletedRange: {
							from: s,
							to: c
						},
						newRange: {
							from: a,
							to: o
						},
						partial: !!(u || l),
						editor: this.editor,
						transaction: e,
						combinedTransform: r
					});
				}
			});
		};
		this.editor.options.coreExtensionOptions?.delete?.async ?? !0 ? setTimeout(n, 0) : n();
	}
}), yd = U.create({
	name: "drop",
	addProseMirrorPlugins() {
		return [new A({
			key: new j("tiptapDrop"),
			props: { handleDrop: (e, t, n, r) => {
				this.editor.emit("drop", {
					editor: this.editor,
					event: t,
					slice: n,
					moved: r
				});
			} }
		})];
	}
}), bd = U.create({
	name: "editable",
	addProseMirrorPlugins() {
		return [new A({
			key: new j("editable"),
			props: { editable: () => this.editor.options.editable }
		})];
	}
}), xd = new j("focusEvents"), Sd = U.create({
	name: "focusEvents",
	addProseMirrorPlugins() {
		let { editor: e } = this;
		return [new A({
			key: xd,
			props: { handleDOMEvents: {
				focus: (t, n) => {
					e.isFocused = !0;
					let r = e.state.tr.setMeta("focus", { event: n }).setMeta("addToHistory", !1);
					return t.dispatch(r), !1;
				},
				blur: (t, n) => {
					e.isFocused = !1;
					let r = e.state.tr.setMeta("blur", { event: n }).setMeta("addToHistory", !1);
					return t.dispatch(r), !1;
				}
			} }
		})];
	}
}), Cd = U.create({
	name: "keymap",
	addKeyboardShortcuts() {
		let e = () => this.editor.commands.first(({ commands: e }) => [
			() => e.undoInputRule(),
			() => e.command(({ tr: t }) => {
				let { selection: n, doc: r } = t, { empty: i, $anchor: a } = n, { pos: o, parent: s } = a, c = a.parent.isTextblock && o > 0 ? t.doc.resolve(o - 1) : a, l = c.parent.type.spec.isolating, u = a.pos - a.parentOffset, d = l && c.parent.childCount === 1 ? u === a.pos : D.atStart(r).from === o;
				return !i || !s.type.isTextblock || s.textContent.length || !d || d && a.parent.type.name === "paragraph" ? !1 : e.clearNodes();
			}),
			() => e.deleteSelection(),
			() => e.joinBackward(),
			() => e.selectNodeBackward()
		]), t = () => this.editor.commands.first(({ commands: e }) => [
			() => e.deleteSelection(),
			() => e.deleteCurrentNode(),
			() => e.joinForward(),
			() => e.selectNodeForward()
		]), n = {
			Enter: () => this.editor.commands.first(({ commands: e }) => [
				() => e.newlineInCode(),
				() => e.createParagraphNear(),
				() => e.liftEmptyBlock(),
				() => e.splitBlock()
			]),
			"Mod-Enter": () => this.editor.commands.exitCode(),
			Backspace: e,
			"Mod-Backspace": e,
			"Shift-Backspace": e,
			Delete: t,
			"Mod-Delete": t,
			"Mod-a": () => this.editor.commands.selectAll()
		}, r = { ...n }, i = {
			...n,
			"Ctrl-h": e,
			"Alt-Backspace": e,
			"Ctrl-d": t,
			"Ctrl-Alt-Backspace": t,
			"Alt-Delete": t,
			"Alt-d": t,
			"Ctrl-a": () => this.editor.commands.selectTextblockStart(),
			"Ctrl-e": () => this.editor.commands.selectTextblockEnd()
		};
		return Qc() || _l() ? i : r;
	},
	addProseMirrorPlugins() {
		return [new A({
			key: new j("clearDocument"),
			appendTransaction: (e, t, n) => {
				if (e.some((e) => e.getMeta("composition"))) return;
				let r = e.some((e) => e.docChanged) && !t.doc.eq(n.doc), i = e.some((e) => e.getMeta("preventClearDocument"));
				if (!r || i) return;
				let { empty: a, from: o, to: s } = t.selection, c = D.atStart(t.doc).from, l = D.atEnd(t.doc).to;
				if (a || !(o === c && s === l) || !Cu(n.doc)) return;
				let u = n.tr, d = Tc({
					state: n,
					transaction: u
				}), { commands: f } = new Ec({
					editor: this.editor,
					state: d
				});
				if (f.clearNodes(), u.steps.length) return u;
			}
		})];
	}
}), wd = U.create({
	name: "paste",
	addProseMirrorPlugins() {
		return [new A({
			key: new j("tiptapPaste"),
			props: { handlePaste: (e, t, n) => {
				this.editor.emit("paste", {
					editor: this.editor,
					event: t,
					slice: n
				});
			} }
		})];
	}
}), Td = U.create({
	name: "tabindex",
	addProseMirrorPlugins() {
		return [new A({
			key: new j("tabindex"),
			props: { attributes: () => this.editor.isEditable ? { tabindex: "0" } : {} }
		})];
	}
}), Ed = U.create({
	name: "textDirection",
	addOptions() {
		return { direction: void 0 };
	},
	addGlobalAttributes() {
		if (!this.options.direction) return [];
		let { nodeExtensions: e } = ql(this.extensions);
		return [{
			types: e.filter((e) => e.name !== "text").map((e) => e.name),
			attributes: { dir: {
				default: this.options.direction,
				parseHTML: (e) => {
					let t = e.getAttribute("dir");
					return t && (t === "ltr" || t === "rtl" || t === "auto") ? t : this.options.direction;
				},
				renderHTML: (e) => e.dir ? { dir: e.dir } : {}
			} }
		}];
	},
	addProseMirrorPlugins() {
		return [new A({
			key: new j("textDirection"),
			props: { attributes: () => {
				let e = this.options.direction;
				return e ? { dir: e } : {};
			} }
		})];
	}
}), Dd = class e {
	constructor(e, t, n = !1, r = null) {
		this.currentNode = null, this.actualDepth = null, this.isBlock = n, this.resolvedPos = e, this.editor = t, this.currentNode = r;
	}
	get name() {
		return this.node.type.name;
	}
	get node() {
		return this.currentNode || this.resolvedPos.node();
	}
	get element() {
		return this.editor.view.domAtPos(this.pos).node;
	}
	get depth() {
		return this.actualDepth ?? this.resolvedPos.depth;
	}
	get pos() {
		return this.resolvedPos.pos;
	}
	get content() {
		return this.node.content;
	}
	set content(e) {
		let t = this.from, n = this.to;
		if (this.isBlock) {
			if (this.content.size === 0) {
				console.error(`You can\u2019t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`);
				return;
			}
			t = this.from + 1, n = this.to - 1;
		}
		this.editor.commands.insertContentAt({
			from: t,
			to: n
		}, e);
	}
	get attributes() {
		return this.node.attrs;
	}
	get textContent() {
		return this.node.textContent;
	}
	get size() {
		return this.node.nodeSize;
	}
	get from() {
		return this.isBlock ? this.pos : this.resolvedPos.start(this.resolvedPos.depth);
	}
	get range() {
		return {
			from: this.from,
			to: this.to
		};
	}
	get to() {
		return this.isBlock ? this.pos + this.size : this.resolvedPos.end(this.resolvedPos.depth) + (this.node.isText ? 0 : 1);
	}
	get parent() {
		if (this.depth === 0) return null;
		let t = this.resolvedPos.start(this.resolvedPos.depth - 1);
		return new e(this.resolvedPos.doc.resolve(t), this.editor);
	}
	get before() {
		let t = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
		return t.depth !== this.depth && (t = this.resolvedPos.doc.resolve(this.from - 3)), new e(t, this.editor);
	}
	get after() {
		let t = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
		return t.depth !== this.depth && (t = this.resolvedPos.doc.resolve(this.to + 3)), new e(t, this.editor);
	}
	get children() {
		let t = [];
		return this.node.content.forEach((n, r) => {
			let i = n.isBlock && !n.isTextblock, a = n.isAtom && !n.isText, o = n.isInline, s = this.pos + r + (a ? 0 : 1);
			if (s < 0 || s > this.resolvedPos.doc.nodeSize - 2) return;
			let c = this.resolvedPos.doc.resolve(s);
			if (!i && !o && c.depth <= this.depth) return;
			let l = new e(c, this.editor, i, i || o ? n : null);
			i && (l.actualDepth = this.depth + 1), t.push(l);
		}), t;
	}
	get firstChild() {
		return this.children[0] || null;
	}
	get lastChild() {
		let e = this.children;
		return e[e.length - 1] || null;
	}
	closest(e, t = {}) {
		let n = null, r = this.parent;
		for (; r && !n;) {
			if (r.node.type.name === e) if (Object.keys(t).length > 0) {
				let e = r.node.attrs, n = Object.keys(t);
				for (let r = 0; r < n.length; r += 1) {
					let i = n[r];
					if (e[i] !== t[i]) break;
				}
			} else n = r;
			r = r.parent;
		}
		return n;
	}
	querySelector(e, t = {}) {
		return this.querySelectorAll(e, t, !0)[0] || null;
	}
	querySelectorAll(e, t = {}, n = !1) {
		let r = [];
		if (!this.children || this.children.length === 0) return r;
		let i = Object.keys(t);
		return this.children.forEach((a) => {
			n && r.length > 0 || (a.node.type.name === e && i.every((e) => t[e] === a.node.attrs[e]) && r.push(a), !(n && r.length > 0) && (r = r.concat(a.querySelectorAll(e, t, n))));
		}), r;
	}
	setAttribute(e) {
		let { tr: t } = this.editor.state;
		t.setNodeMarkup(this.from, void 0, {
			...this.node.attrs,
			...e
		}), this.editor.view.dispatch(t);
	}
}, Od = ".ProseMirror {\n  position: relative;\n}\n\n.ProseMirror {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  white-space: break-spaces;\n  -webkit-font-variant-ligatures: none;\n  font-variant-ligatures: none;\n  font-feature-settings: \"liga\" 0; /* the above doesn't seem to work in Edge */\n}\n\n.ProseMirror [contenteditable=\"false\"] {\n  white-space: normal;\n}\n\n.ProseMirror [contenteditable=\"false\"] [contenteditable=\"true\"] {\n  white-space: pre-wrap;\n}\n\n.ProseMirror pre {\n  white-space: pre-wrap;\n}\n\nimg.ProseMirror-separator {\n  display: inline !important;\n  border: none !important;\n  margin: 0 !important;\n  width: 0 !important;\n  height: 0 !important;\n}\n\n.ProseMirror-gapcursor {\n  display: none;\n  pointer-events: none;\n  position: absolute;\n  margin: 0;\n}\n\n.ProseMirror-gapcursor:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: -2px;\n  width: 20px;\n  border-top: 1px solid black;\n  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;\n}\n\n@keyframes ProseMirror-cursor-blink {\n  to {\n    visibility: hidden;\n  }\n}\n\n.ProseMirror-hideselection *::selection {\n  background: transparent;\n}\n\n.ProseMirror-hideselection *::-moz-selection {\n  background: transparent;\n}\n\n.ProseMirror-hideselection * {\n  caret-color: transparent;\n}\n\n.ProseMirror-focused .ProseMirror-gapcursor {\n  display: block;\n}";
function kd(e, t, n) {
	let r = document.querySelector(`style[data-tiptap-style${n ? `-${n}` : ""}]`);
	if (r !== null) return r;
	let i = document.createElement("style");
	return t && i.setAttribute("nonce", t), i.setAttribute(`data-tiptap-style${n ? `-${n}` : ""}`, ""), i.innerHTML = e, document.getElementsByTagName("head")[0].appendChild(i), i;
}
var Ad = class extends Qu {
	constructor(e = {}) {
		super(), this.css = null, this.className = "tiptap", this.editorView = null, this.isFocused = !1, this.isInitialized = !1, this.extensionStorage = {}, this.instanceId = Math.random().toString(36).slice(2, 9), this.options = {
			element: typeof document < "u" ? document.createElement("div") : null,
			content: "",
			injectCSS: !0,
			injectNonce: void 0,
			extensions: [],
			autofocus: !1,
			editable: !0,
			textDirection: void 0,
			editorProps: {},
			parseOptions: {},
			coreExtensionOptions: {},
			enableInputRules: !0,
			enablePasteRules: !0,
			enableCoreExtensions: !0,
			enableContentCheck: !1,
			emitContentError: !1,
			onBeforeCreate: () => null,
			onCreate: () => null,
			onMount: () => null,
			onUnmount: () => null,
			onUpdate: () => null,
			onSelectionUpdate: () => null,
			onTransaction: () => null,
			onFocus: () => null,
			onBlur: () => null,
			onDestroy: () => null,
			onContentError: ({ error: e }) => {
				throw e;
			},
			onPaste: () => null,
			onDrop: () => null,
			onDelete: () => null,
			enableExtensionDispatchTransaction: !0
		}, this.isCapturingTransaction = !1, this.capturedTransaction = null, this.utils = {
			getUpdatedPosition: Eu,
			createMappablePosition: Du
		}, this.setOptions(e), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", { editor: this }), this.on("mount", this.options.onMount), this.on("unmount", this.options.onUnmount), this.on("contentError", this.options.onContentError), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), this.on("drop", ({ event: e, slice: t, moved: n }) => this.options.onDrop(e, t, n)), this.on("paste", ({ event: e, slice: t }) => this.options.onPaste(e, t)), this.on("delete", this.options.onDelete);
		let t = this.createDoc(), n = Xc(t, this.options.autofocus);
		this.editorState = Zn.create({
			doc: t,
			schema: this.schema,
			selection: n || void 0
		}), this.options.element && this.mount(this.options.element);
	}
	mount(e) {
		if (typeof document > "u") throw Error("[tiptap error]: The editor cannot be mounted because there is no 'document' defined in this environment.");
		this.createView(e), this.emit("mount", { editor: this }), this.css && !document.head.contains(this.css) && document.head.appendChild(this.css), window.setTimeout(() => {
			this.isDestroyed || (this.options.autofocus !== !1 && this.options.autofocus !== null && this.commands.focus(this.options.autofocus), this.emit("create", { editor: this }), this.isInitialized = !0);
		}, 0);
	}
	unmount() {
		if (this.editorView) {
			let e = this.editorView.dom;
			e?.editor && delete e.editor, this.editorView.destroy();
		}
		if (this.editorView = null, this.isInitialized = !1, this.css && !document.querySelectorAll(`.${this.className}`).length) try {
			typeof this.css.remove == "function" ? this.css.remove() : this.css.parentNode && this.css.parentNode.removeChild(this.css);
		} catch (e) {
			console.warn("Failed to remove CSS element:", e);
		}
		this.css = null, this.emit("unmount", { editor: this });
	}
	get storage() {
		return this.extensionStorage;
	}
	get commands() {
		return this.commandManager.commands;
	}
	chain() {
		return this.commandManager.chain();
	}
	can() {
		return this.commandManager.can();
	}
	injectCSS() {
		this.options.injectCSS && typeof document < "u" && (this.css = kd(Od, this.options.injectNonce));
	}
	setOptions(e = {}) {
		this.options = {
			...this.options,
			...e
		}, !(!this.editorView || !this.state || this.isDestroyed) && (this.options.editorProps && this.view.setProps(this.options.editorProps), this.view.updateState(this.state));
	}
	setEditable(e, t = !0) {
		this.setOptions({ editable: e }), t && this.emit("update", {
			editor: this,
			transaction: this.state.tr,
			appendedTransactions: []
		});
	}
	get isEditable() {
		return this.options.editable && this.view && this.view.editable;
	}
	get view() {
		return this.editorView ? this.editorView : new Proxy({
			state: this.editorState,
			updateState: (e) => {
				this.editorState = e;
			},
			dispatch: (e) => {
				this.dispatchTransaction(e);
			},
			composing: !1,
			dragging: null,
			editable: !0,
			isDestroyed: !1
		}, { get: (e, t) => {
			if (this.editorView) return this.editorView[t];
			if (t === "state") return this.editorState;
			if (t in e) return Reflect.get(e, t);
			throw Error(`[tiptap error]: The editor view is not available. Cannot access view['${t}']. The editor may not be mounted yet.`);
		} });
	}
	get state() {
		return this.editorView && (this.editorState = this.view.state), this.editorState;
	}
	registerPlugin(e, t) {
		let n = Gl(t) ? t(e, [...this.state.plugins]) : [...this.state.plugins, e], r = this.state.reconfigure({ plugins: n });
		return this.view.updateState(r), r;
	}
	unregisterPlugin(e) {
		if (this.isDestroyed) return;
		let t = this.state.plugins, n = t;
		if ([].concat(e).forEach((e) => {
			let t = typeof e == "string" ? `${e}$` : e.key;
			n = n.filter((e) => !e.key.startsWith(t));
		}), t.length === n.length) return;
		let r = this.state.reconfigure({ plugins: n });
		return this.view.updateState(r), r;
	}
	createExtensionManager() {
		this.extensionManager = new hd([...this.options.enableCoreExtensions ? [
			bd,
			gd.configure({ blockSeparator: this.options.coreExtensionOptions?.clipboardTextSerializer?.blockSeparator }),
			_d,
			Sd,
			Cd,
			Td,
			yd,
			wd,
			vd,
			Ed.configure({ direction: this.options.textDirection })
		].filter((e) => typeof this.options.enableCoreExtensions == "object" ? this.options.enableCoreExtensions[e.name] !== !1 : !0) : [], ...this.options.extensions].filter((e) => [
			"extension",
			"node",
			"mark"
		].includes(e?.type)), this);
	}
	createCommandManager() {
		this.commandManager = new Ec({ editor: this });
	}
	createSchema() {
		this.schema = this.extensionManager.schema;
	}
	createDoc() {
		let e;
		try {
			e = Fl(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: this.options.enableContentCheck });
		} catch (t) {
			if (!(t instanceof Error) || !["[tiptap error]: Invalid JSON content", "[tiptap error]: Invalid HTML content"].includes(t.message)) throw t;
			this.emit("contentError", {
				editor: this,
				error: t,
				disableCollaboration: () => {
					"collaboration" in this.storage && typeof this.storage.collaboration == "object" && this.storage.collaboration && (this.storage.collaboration.isDisabled = !0), this.options.extensions = this.options.extensions.filter((e) => e.name !== "collaboration"), this.createExtensionManager();
				}
			}), e = Fl(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: !1 });
		}
		return e;
	}
	createView(e) {
		let { editorProps: t, enableExtensionDispatchTransaction: n } = this.options, r = t.dispatchTransaction || this.dispatchTransaction.bind(this), i = n ? this.extensionManager.dispatchTransaction(r) : r, a = t.transformPastedHTML, o = this.extensionManager.transformPastedHTML(a);
		this.editorView = new tc(e, {
			...t,
			attributes: {
				role: "textbox",
				...t?.attributes
			},
			dispatchTransaction: i,
			transformPastedHTML: o,
			state: this.editorState,
			markViews: this.extensionManager.markViews,
			nodeViews: this.extensionManager.nodeViews
		});
		let s = this.state.reconfigure({ plugins: this.extensionManager.plugins });
		this.view.updateState(s), this.prependClass(), this.injectCSS();
		let c = this.view.dom;
		c.editor = this;
	}
	createNodeViews() {
		this.view.isDestroyed || this.view.setProps({
			markViews: this.extensionManager.markViews,
			nodeViews: this.extensionManager.nodeViews
		});
	}
	prependClass() {
		this.view.dom.className = `${this.className} ${this.view.dom.className}`;
	}
	captureTransaction(e) {
		this.isCapturingTransaction = !0, e(), this.isCapturingTransaction = !1;
		let t = this.capturedTransaction;
		return this.capturedTransaction = null, t;
	}
	dispatchTransaction(e) {
		if (this.view.isDestroyed) return;
		if (this.isCapturingTransaction) {
			if (!this.capturedTransaction) {
				this.capturedTransaction = e;
				return;
			}
			e.steps.forEach((e) => this.capturedTransaction?.step(e));
			return;
		}
		let { state: t, transactions: n } = this.state.applyTransaction(e), r = !this.state.selection.eq(t.selection), i = n.includes(e), a = this.state;
		if (this.emit("beforeTransaction", {
			editor: this,
			transaction: e,
			nextState: t
		}), !i) return;
		this.view.updateState(t), this.emit("transaction", {
			editor: this,
			transaction: e,
			appendedTransactions: n.slice(1)
		}), r && this.emit("selectionUpdate", {
			editor: this,
			transaction: e
		});
		let o = n.findLast((e) => e.getMeta("focus") || e.getMeta("blur")), s = o?.getMeta("focus"), c = o?.getMeta("blur");
		s && this.emit("focus", {
			editor: this,
			event: s.event,
			transaction: o
		}), c && this.emit("blur", {
			editor: this,
			event: c.event,
			transaction: o
		}), !(e.getMeta("preventUpdate") || !n.some((e) => e.docChanged) || a.doc.eq(t.doc)) && this.emit("update", {
			editor: this,
			transaction: e,
			appendedTransactions: n.slice(1)
		});
	}
	getAttributes(e) {
		return cu(this.state, e);
	}
	isActive(e, t) {
		let n = typeof e == "string" ? e : null, r = typeof e == "string" ? t : e;
		return vu(this.state, n, r);
	}
	getJSON() {
		return this.state.doc.toJSON();
	}
	getHTML() {
		return Wl(this.state.doc.content, this.schema);
	}
	getText(e) {
		let { blockSeparator: t = "\n\n", textSerializers: n = {} } = e || {};
		return au(this.state.doc, {
			blockSeparator: t,
			textSerializers: {
				...ou(this.schema),
				...n
			}
		});
	}
	get isEmpty() {
		return Cu(this.state.doc);
	}
	destroy() {
		this.emit("destroy"), this.unmount(), this.removeAllListeners();
	}
	get isDestroyed() {
		return this.editorView?.isDestroyed ?? !0;
	}
	$node(e, t) {
		return this.$doc?.querySelector(e, t) || null;
	}
	$nodes(e, t) {
		return this.$doc?.querySelectorAll(e, t) || null;
	}
	$pos(e) {
		return new Dd(this.state.doc.resolve(e), this);
	}
	get $doc() {
		return this.$pos(0);
	}
};
function jd(e) {
	return new $u({
		find: e.find,
		handler: ({ state: t, range: n, match: r }) => {
			let i = V(e.getAttributes, void 0, r);
			if (i === !1 || i === null) return null;
			let { tr: a } = t, o = r[r.length - 1], s = r[0];
			if (o) {
				let r = s.search(/\S/), c = n.from + s.indexOf(o), l = c + o.length;
				if (fu(n.from, n.to, t.doc).filter((t) => t.mark.type.excluded.find((n) => n === e.type && n !== t.mark.type)).filter((e) => e.to > c).length) return null;
				l < n.to && a.delete(l, n.to), c > n.from && a.delete(n.from + r, c);
				let u = n.from + r + o.length;
				a.addMark(n.from + r, u, e.type.create(i || {})), a.removeStoredMark(e.type);
			}
		},
		undoable: e.undoable
	});
}
function Md(e) {
	return new $u({
		find: e.find,
		handler: ({ state: t, range: n, match: r }) => {
			let i = V(e.getAttributes, void 0, r) || {}, { tr: a } = t, o = n.from, s = n.to, c = e.type.create(i);
			if (r[1]) {
				let e = o + r[0].lastIndexOf(r[1]);
				e > s ? e = s : s = e + r[1].length;
				let t = r[0][r[0].length - 1];
				a.insertText(t, o + r[0].length - 1), a.replaceWith(e, s, c);
			} else if (r[0]) {
				let t = e.type.isInline ? o : o - 1;
				a.insert(t, e.type.create(i)).delete(a.mapping.map(o), a.mapping.map(s));
			}
			a.scrollIntoView();
		},
		undoable: e.undoable
	});
}
function Nd(e) {
	return new $u({
		find: e.find,
		handler: ({ state: t, range: n, match: r }) => {
			let i = t.doc.resolve(n.from), a = V(e.getAttributes, void 0, r) || {};
			if (!i.node(-1).canReplaceWith(i.index(-1), i.indexAfter(-1), e.type)) return null;
			t.tr.delete(n.from, n.to).setBlockType(n.from, n.from, e.type, a);
		},
		undoable: e.undoable
	});
}
function Pd(e) {
	return new $u({
		find: e.find,
		handler: ({ state: t, range: n, match: r, chain: i }) => {
			let a = V(e.getAttributes, void 0, r) || {}, o = t.tr.delete(n.from, n.to), s = o.doc.resolve(n.from).blockRange(), c = s && Jt(s, e.type, a);
			if (!c) return null;
			if (o.wrap(s, c), e.keepMarks && e.editor) {
				let { selection: n, storedMarks: r } = t, { splittableMarks: i } = e.editor.extensionManager, a = r || n.$to.parentOffset && n.$from.marks();
				if (a) {
					let e = a.filter((e) => i.includes(e.type.name));
					o.ensureMarks(e);
				}
			}
			if (e.keepAttributes) {
				let t = e.type.name === "bulletList" || e.type.name === "orderedList" ? "listItem" : "taskList";
				i().updateAttributes(t, a).run();
			}
			let l = o.doc.resolve(n.from - 1).nodeBefore;
			l && l.type === e.type && sn(o.doc, n.from - 1) && (!e.joinPredicate || e.joinPredicate(r, l)) && o.join(n.from - 1);
		},
		undoable: e.undoable
	});
}
var Fd = (e) => "touches" in e, Id = class {
	constructor(e) {
		this.directions = [
			"bottom-left",
			"bottom-right",
			"top-left",
			"top-right"
		], this.minSize = {
			height: 8,
			width: 8
		}, this.preserveAspectRatio = !1, this.classNames = {
			container: "",
			wrapper: "",
			handle: "",
			resizing: ""
		}, this.initialWidth = 0, this.initialHeight = 0, this.aspectRatio = 1, this.isResizing = !1, this.activeHandle = null, this.startX = 0, this.startY = 0, this.startWidth = 0, this.startHeight = 0, this.isShiftKeyPressed = !1, this.lastEditableState = void 0, this.handleMap = new Map(), this.handleMouseMove = (e) => {
			if (!this.isResizing || !this.activeHandle) return;
			let t = e.clientX - this.startX, n = e.clientY - this.startY;
			this.handleResize(t, n);
		}, this.handleTouchMove = (e) => {
			if (!this.isResizing || !this.activeHandle) return;
			let t = e.touches[0];
			if (!t) return;
			let n = t.clientX - this.startX, r = t.clientY - this.startY;
			this.handleResize(n, r);
		}, this.handleMouseUp = () => {
			if (!this.isResizing) return;
			let e = this.element.offsetWidth, t = this.element.offsetHeight;
			this.onCommit(e, t), this.isResizing = !1, this.activeHandle = null, this.container.dataset.resizeState = "false", this.classNames.resizing && this.container.classList.remove(this.classNames.resizing), document.removeEventListener("mousemove", this.handleMouseMove), document.removeEventListener("mouseup", this.handleMouseUp), document.removeEventListener("keydown", this.handleKeyDown), document.removeEventListener("keyup", this.handleKeyUp);
		}, this.handleKeyDown = (e) => {
			e.key === "Shift" && (this.isShiftKeyPressed = !0);
		}, this.handleKeyUp = (e) => {
			e.key === "Shift" && (this.isShiftKeyPressed = !1);
		}, this.node = e.node, this.editor = e.editor, this.element = e.element, this.contentElement = e.contentElement, this.getPos = e.getPos, this.onResize = e.onResize, this.onCommit = e.onCommit, this.onUpdate = e.onUpdate, e.options?.min && (this.minSize = {
			...this.minSize,
			...e.options.min
		}), e.options?.max && (this.maxSize = e.options.max), e?.options?.directions && (this.directions = e.options.directions), e.options?.preserveAspectRatio && (this.preserveAspectRatio = e.options.preserveAspectRatio), e.options?.className && (this.classNames = {
			container: e.options.className.container || "",
			wrapper: e.options.className.wrapper || "",
			handle: e.options.className.handle || "",
			resizing: e.options.className.resizing || ""
		}), e.options?.createCustomHandle && (this.createCustomHandle = e.options.createCustomHandle), this.wrapper = this.createWrapper(), this.container = this.createContainer(), this.applyInitialSize(), this.attachHandles(), this.editor.on("update", this.handleEditorUpdate.bind(this));
	}
	get dom() {
		return this.container;
	}
	get contentDOM() {
		return this.contentElement ?? null;
	}
	handleEditorUpdate() {
		let e = this.editor.isEditable;
		e !== this.lastEditableState && (this.lastEditableState = e, e ? e && this.handleMap.size === 0 && this.attachHandles() : this.removeHandles());
	}
	update(e, t, n) {
		return e.type === this.node.type ? (this.node = e, this.onUpdate ? this.onUpdate(e, t, n) : !0) : !1;
	}
	destroy() {
		this.isResizing && (this.container.dataset.resizeState = "false", this.classNames.resizing && this.container.classList.remove(this.classNames.resizing), document.removeEventListener("mousemove", this.handleMouseMove), document.removeEventListener("mouseup", this.handleMouseUp), document.removeEventListener("keydown", this.handleKeyDown), document.removeEventListener("keyup", this.handleKeyUp), this.isResizing = !1, this.activeHandle = null), this.editor.off("update", this.handleEditorUpdate.bind(this)), this.container.remove();
	}
	createContainer() {
		let e = document.createElement("div");
		return e.dataset.resizeContainer = "", e.dataset.node = this.node.type.name, e.style.display = "flex", this.classNames.container && (e.className = this.classNames.container), e.appendChild(this.wrapper), e;
	}
	createWrapper() {
		let e = document.createElement("div");
		return e.style.position = "relative", e.style.display = "block", e.dataset.resizeWrapper = "", this.classNames.wrapper && (e.className = this.classNames.wrapper), e.appendChild(this.element), e;
	}
	createHandle(e) {
		let t = document.createElement("div");
		return t.dataset.resizeHandle = e, t.style.position = "absolute", this.classNames.handle && (t.className = this.classNames.handle), t;
	}
	positionHandle(e, t) {
		let n = t.includes("top"), r = t.includes("bottom"), i = t.includes("left"), a = t.includes("right");
		n && (e.style.top = "0"), r && (e.style.bottom = "0"), i && (e.style.left = "0"), a && (e.style.right = "0"), (t === "top" || t === "bottom") && (e.style.left = "0", e.style.right = "0"), (t === "left" || t === "right") && (e.style.top = "0", e.style.bottom = "0");
	}
	attachHandles() {
		this.directions.forEach((e) => {
			let t;
			t = this.createCustomHandle ? this.createCustomHandle(e) : this.createHandle(e), t instanceof HTMLElement || (console.warn(`[ResizableNodeView] createCustomHandle("${e}") did not return an HTMLElement. Falling back to default handle.`), t = this.createHandle(e)), this.createCustomHandle || this.positionHandle(t, e), t.addEventListener("mousedown", (t) => this.handleResizeStart(t, e)), t.addEventListener("touchstart", (t) => this.handleResizeStart(t, e)), this.handleMap.set(e, t), this.wrapper.appendChild(t);
		});
	}
	removeHandles() {
		this.handleMap.forEach((e) => e.remove()), this.handleMap.clear();
	}
	applyInitialSize() {
		let e = this.node.attrs.width, t = this.node.attrs.height;
		e ? (this.element.style.width = `${e}px`, this.initialWidth = e) : this.initialWidth = this.element.offsetWidth, t ? (this.element.style.height = `${t}px`, this.initialHeight = t) : this.initialHeight = this.element.offsetHeight, this.initialWidth > 0 && this.initialHeight > 0 && (this.aspectRatio = this.initialWidth / this.initialHeight);
	}
	handleResizeStart(e, t) {
		e.preventDefault(), e.stopPropagation(), this.isResizing = !0, this.activeHandle = t, Fd(e) ? (this.startX = e.touches[0].clientX, this.startY = e.touches[0].clientY) : (this.startX = e.clientX, this.startY = e.clientY), this.startWidth = this.element.offsetWidth, this.startHeight = this.element.offsetHeight, this.startWidth > 0 && this.startHeight > 0 && (this.aspectRatio = this.startWidth / this.startHeight), this.getPos(), this.container.dataset.resizeState = "true", this.classNames.resizing && this.container.classList.add(this.classNames.resizing), document.addEventListener("mousemove", this.handleMouseMove), document.addEventListener("touchmove", this.handleTouchMove), document.addEventListener("mouseup", this.handleMouseUp), document.addEventListener("keydown", this.handleKeyDown), document.addEventListener("keyup", this.handleKeyUp);
	}
	handleResize(e, t) {
		if (!this.activeHandle) return;
		let n = this.preserveAspectRatio || this.isShiftKeyPressed, { width: r, height: i } = this.calculateNewDimensions(this.activeHandle, e, t), a = this.applyConstraints(r, i, n);
		this.element.style.width = `${a.width}px`, this.element.style.height = `${a.height}px`, this.onResize && this.onResize(a.width, a.height);
	}
	calculateNewDimensions(e, t, n) {
		let r = this.startWidth, i = this.startHeight, a = e.includes("right"), o = e.includes("left"), s = e.includes("bottom"), c = e.includes("top");
		return a ? r = this.startWidth + t : o && (r = this.startWidth - t), s ? i = this.startHeight + n : c && (i = this.startHeight - n), (e === "right" || e === "left") && (r = this.startWidth + (a ? t : -t)), (e === "top" || e === "bottom") && (i = this.startHeight + (s ? n : -n)), this.preserveAspectRatio || this.isShiftKeyPressed ? this.applyAspectRatio(r, i, e) : {
			width: r,
			height: i
		};
	}
	applyConstraints(e, t, n) {
		if (!n) {
			let n = Math.max(this.minSize.width, e), r = Math.max(this.minSize.height, t);
			return this.maxSize?.width && (n = Math.min(this.maxSize.width, n)), this.maxSize?.height && (r = Math.min(this.maxSize.height, r)), {
				width: n,
				height: r
			};
		}
		let r = e, i = t;
		return r < this.minSize.width && (r = this.minSize.width, i = r / this.aspectRatio), i < this.minSize.height && (i = this.minSize.height, r = i * this.aspectRatio), this.maxSize?.width && r > this.maxSize.width && (r = this.maxSize.width, i = r / this.aspectRatio), this.maxSize?.height && i > this.maxSize.height && (i = this.maxSize.height, r = i * this.aspectRatio), {
			width: r,
			height: i
		};
	}
	applyAspectRatio(e, t, n) {
		return n === "left" || n === "right" ? {
			width: e,
			height: e / this.aspectRatio
		} : n === "top" || n === "bottom" ? {
			width: t * this.aspectRatio,
			height: t
		} : {
			width: e,
			height: e / this.aspectRatio
		};
	}
};
function Ld(e, t) {
	let { selection: n } = e, { $from: r } = n;
	if (n instanceof k) {
		let e = r.index();
		return r.parent.canReplaceWith(e, e + 1, t);
	}
	let i = r.depth;
	for (; i >= 0;) {
		let e = r.index(i);
		if (r.node(i).contentMatchAt(e).matchType(t)) return !0;
		--i;
	}
	return !1;
}
wc({}, {
	createAtomBlockMarkdownSpec: () => Bd,
	createBlockMarkdownSpec: () => Vd,
	createInlineMarkdownSpec: () => Wd,
	parseAttributes: () => Rd,
	parseIndentedBlocks: () => Gd,
	renderNestedMarkdownContent: () => Kd,
	serializeAttributes: () => zd
});
function Rd(e) {
	if (!e?.trim()) return {};
	let t = {}, n = [], r = e.replace(/["']([^"']*)["']/g, (e) => (n.push(e), `__QUOTED_${n.length - 1}__`)), i = r.match(/(?:^|\s)\.([a-zA-Z][\w-]*)/g);
	i && (t.class = i.map((e) => e.trim().slice(1)).join(" "));
	let a = r.match(/(?:^|\s)#([a-zA-Z][\w-]*)/);
	a && (t.id = a[1]), Array.from(r.matchAll(/([a-zA-Z][\w-]*)\s*=\s*(__QUOTED_\d+__)/g)).forEach(([, e, r]) => {
		let i = n[parseInt(r.match(/__QUOTED_(\d+)__/)?.[1] || "0", 10)];
		i && (t[e] = i.slice(1, -1));
	});
	let o = r.replace(/(?:^|\s)\.([a-zA-Z][\w-]*)/g, "").replace(/(?:^|\s)#([a-zA-Z][\w-]*)/g, "").replace(/([a-zA-Z][\w-]*)\s*=\s*__QUOTED_\d+__/g, "").trim();
	return o && o.split(/\s+/).filter(Boolean).forEach((e) => {
		e.match(/^[a-zA-Z][\w-]*$/) && (t[e] = !0);
	}), t;
}
function zd(e) {
	if (!e || Object.keys(e).length === 0) return "";
	let t = [];
	return e.class && String(e.class).split(/\s+/).filter(Boolean).forEach((e) => t.push(`.${e}`)), e.id && t.push(`#${e.id}`), Object.entries(e).forEach(([e, n]) => {
		e === "class" || e === "id" || (n === !0 ? t.push(e) : n !== !1 && n != null && t.push(`${e}="${String(n)}"`));
	}), t.join(" ");
}
function Bd(e) {
	let { nodeName: t, name: n, parseAttributes: r = Rd, serializeAttributes: i = zd, defaultAttributes: a = {}, requiredAttributes: o = [], allowedAttributes: s } = e, c = n || t, l = (e) => {
		if (!s) return e;
		let t = {};
		return s.forEach((n) => {
			n in e && (t[n] = e[n]);
		}), t;
	};
	return {
		parseMarkdown: (e, n) => {
			let r = {
				...a,
				...e.attributes
			};
			return n.createNode(t, r, []);
		},
		markdownTokenizer: {
			name: t,
			level: "block",
			start(e) {
				let t = RegExp(`^:::${c}(?:\\s|$)`, "m"), n = e.match(t)?.index;
				return n === void 0 ? -1 : n;
			},
			tokenize(e, n, i) {
				let a = RegExp(`^:::${c}(?:\\s+\\{([^}]*)\\})?\\s*:::(?:\\n|$)`), s = e.match(a);
				if (!s) return;
				let l = r(s[1] || "");
				if (!o.find((e) => !(e in l))) return {
					type: t,
					raw: s[0],
					attributes: l
				};
			}
		},
		renderMarkdown: (e) => {
			let t = i(l(e.attrs || {}));
			return `:::${c}${t ? ` {${t}}` : ""} :::`;
		}
	};
}
function Vd(e) {
	let { nodeName: t, name: n, getContent: r, parseAttributes: i = Rd, serializeAttributes: a = zd, defaultAttributes: o = {}, content: s = "block", allowedAttributes: c } = e, l = n || t, u = (e) => {
		if (!c) return e;
		let t = {};
		return c.forEach((n) => {
			n in e && (t[n] = e[n]);
		}), t;
	};
	return {
		parseMarkdown: (e, n) => {
			let i;
			if (r) {
				let t = r(e);
				i = typeof t == "string" ? [{
					type: "text",
					text: t
				}] : t;
			} else i = s === "block" ? n.parseChildren(e.tokens || []) : n.parseInline(e.tokens || []);
			let a = {
				...o,
				...e.attributes
			};
			return n.createNode(t, a, i);
		},
		markdownTokenizer: {
			name: t,
			level: "block",
			start(e) {
				let t = RegExp(`^:::${l}`, "m"), n = e.match(t)?.index;
				return n === void 0 ? -1 : n;
			},
			tokenize(e, n, r) {
				let a = RegExp(`^:::${l}(?:\\s+\\{([^}]*)\\})?\\s*\\n`), o = e.match(a);
				if (!o) return;
				let [c, u = ""] = o, d = i(u), f = 1, p = c.length, m = "", h = /^:::([\w-]*)(\s.*)?/gm, g = e.slice(p);
				for (h.lastIndex = 0;;) {
					let n = h.exec(g);
					if (n === null) break;
					let i = n.index, a = n[1];
					if (!n[2]?.endsWith(":::")) {
						if (a) f += 1;
						else if (--f, f === 0) {
							let a = g.slice(0, i);
							m = a.trim();
							let o = e.slice(0, p + i + n[0].length), c = [];
							if (m) if (s === "block") for (c = r.blockTokens(a), c.forEach((e) => {
								e.text && (!e.tokens || e.tokens.length === 0) && (e.tokens = r.inlineTokens(e.text));
							}); c.length > 0;) {
								let e = c[c.length - 1];
								if (e.type === "paragraph" && (!e.text || e.text.trim() === "")) c.pop();
								else break;
							}
							else c = r.inlineTokens(m);
							return {
								type: t,
								raw: o,
								attributes: d,
								content: m,
								tokens: c
							};
						}
					}
				}
			}
		},
		renderMarkdown: (e, t) => {
			let n = a(u(e.attrs || {}));
			return `:::${l}${n ? ` {${n}}` : ""}

${t.renderChildren(e.content || [], "\n\n")}

:::`;
		}
	};
}
function Hd(e) {
	if (!e.trim()) return {};
	let t = {}, n = /(\w+)=(?:"([^"]*)"|'([^']*)')/g, r = n.exec(e);
	for (; r !== null;) {
		let [, i, a, o] = r;
		t[i] = a || o, r = n.exec(e);
	}
	return t;
}
function Ud(e) {
	return Object.entries(e).filter(([, e]) => e != null).map(([e, t]) => `${e}="${t}"`).join(" ");
}
function Wd(e) {
	let { nodeName: t, name: n, getContent: r, parseAttributes: i = Hd, serializeAttributes: a = Ud, defaultAttributes: o = {}, selfClosing: s = !1, allowedAttributes: c } = e, l = n || t, u = (e) => {
		if (!c) return e;
		let t = {};
		return c.forEach((n) => {
			let r = typeof n == "string" ? n : n.name, i = typeof n == "string" ? void 0 : n.skipIfDefault;
			if (r in e) {
				let n = e[r];
				if (i !== void 0 && n === i) return;
				t[r] = n;
			}
		}), t;
	}, d = l.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	return {
		parseMarkdown: (e, n) => {
			let i = {
				...o,
				...e.attributes
			};
			if (s) return n.createNode(t, i);
			let a = r ? r(e) : e.content || "";
			return a ? n.createNode(t, i, [n.createTextNode(a)]) : n.createNode(t, i, []);
		},
		markdownTokenizer: {
			name: t,
			level: "inline",
			start(e) {
				let t = s ? RegExp(`\\[${d}\\s*[^\\]]*\\]`) : RegExp(`\\[${d}\\s*[^\\]]*\\][\\s\\S]*?\\[\\/${d}\\]`), n = e.match(t)?.index;
				return n === void 0 ? -1 : n;
			},
			tokenize(e, n, r) {
				let a = s ? RegExp(`^\\[${d}\\s*([^\\]]*)\\]`) : RegExp(`^\\[${d}\\s*([^\\]]*)\\]([\\s\\S]*?)\\[\\/${d}\\]`), o = e.match(a);
				if (!o) return;
				let c = "", l = "";
				if (s) {
					let [, e] = o;
					l = e;
				} else {
					let [, e, t] = o;
					l = e, c = t || "";
				}
				let u = i(l.trim());
				return {
					type: t,
					raw: o[0],
					content: c.trim(),
					attributes: u
				};
			}
		},
		renderMarkdown: (e) => {
			let t = "";
			r ? t = r(e) : e.content && e.content.length > 0 && (t = e.content.filter((e) => e.type === "text").map((e) => e.text).join(""));
			let n = a(u(e.attrs || {})), i = n ? ` ${n}` : "";
			return s ? `[${l}${i}]` : `[${l}${i}]${t}[/${l}]`;
		}
	};
}
function Gd(e, t, n) {
	let r = e.split("\n"), i = [], a = "", o = 0, s = t.baseIndentSize || 2;
	for (; o < r.length;) {
		let e = r[o], c = e.match(t.itemPattern);
		if (!c) {
			if (i.length > 0) break;
			if (e.trim() === "") {
				o += 1, a = `${a}${e}
`;
				continue;
			} else return;
		}
		let l = t.extractItemData(c), { indentLevel: u, mainContent: d } = l;
		a = `${a}${e}
`;
		let f = [d];
		for (o += 1; o < r.length;) {
			let e = r[o];
			if (e.trim() === "") {
				let t = r.slice(o + 1).findIndex((e) => e.trim() !== "");
				if (t === -1) break;
				if ((r[o + 1 + t].match(/^(\s*)/)?.[1]?.length || 0) > u) {
					f.push(e), a = `${a}${e}
`, o += 1;
					continue;
				} else break;
			}
			if ((e.match(/^(\s*)/)?.[1]?.length || 0) > u) f.push(e), a = `${a}${e}
`, o += 1;
			else break;
		}
		let p, m = f.slice(1);
		if (m.length > 0) {
			let e = m.map((e) => e.slice(u + s)).join("\n");
			e.trim() && (p = t.customNestedParser ? t.customNestedParser(e) : n.blockTokens(e));
		}
		let h = t.createToken(l, p);
		i.push(h);
	}
	if (i.length !== 0) return {
		items: i,
		raw: a
	};
}
function Kd(e, t, n, r) {
	if (!e || !Array.isArray(e.content)) return "";
	let i = typeof n == "function" ? n(r) : n, [a, ...o] = e.content, s = [`${i}${t.renderChildren([a])}`];
	return o && o.length > 0 && o.forEach((e) => {
		let n = t.renderChildren([e]);
		if (n) {
			let e = n.split("\n").map((e) => e ? t.indent(e) : "").join("\n");
			s.push(e);
		}
	}), s.join("\n");
}
function qd(e, t, n = {}) {
	let { state: r } = t, { doc: i, tr: a } = r, o = e;
	i.descendants((t, r) => {
		let i = a.mapping.map(r), s = a.mapping.map(r) + t.nodeSize, c = null;
		if (t.marks.forEach((e) => {
			if (e !== o) return !1;
			c = e;
		}), !c) return;
		let l = !1;
		if (Object.keys(n).forEach((e) => {
			n[e] !== c.attrs[e] && (l = !0);
		}), l) {
			let t = e.type.create({
				...e.attrs,
				...n
			});
			a.removeMark(i, s, e.type), a.addMark(i, s, t);
		}
	}), a.docChanged && t.view.dispatch(a);
}
var W = class e extends od {
	constructor() {
		super(...arguments), this.type = "node";
	}
	static create(t = {}) {
		return new e(typeof t == "function" ? t() : t);
	}
	configure(e) {
		return super.configure(e);
	}
	extend(e) {
		let t = typeof e == "function" ? e() : e;
		return super.extend(t);
	}
};
function Jd(e) {
	return new ld({
		find: e.find,
		handler: ({ state: t, range: n, match: r, pasteEvent: i }) => {
			let a = V(e.getAttributes, void 0, r, i);
			if (a === !1 || a === null) return null;
			let { tr: o } = t, s = r[r.length - 1], c = r[0], l = n.to;
			if (s) {
				let r = c.search(/\S/), i = n.from + c.indexOf(s), u = i + s.length;
				if (fu(n.from, n.to, t.doc).filter((t) => t.mark.type.excluded.find((n) => n === e.type && n !== t.mark.type)).filter((e) => e.to > i).length) return null;
				u < n.to && o.delete(u, n.to), i > n.from && o.delete(n.from + r, i), l = n.from + r + s.length, o.addMark(n.from + r, l, e.type.create(a || {})), o.removeStoredMark(e.type);
			}
		}
	});
}
function Yd(e) {
	return new ld({
		find: e.find,
		handler({ match: t, chain: n, range: r, pasteEvent: i }) {
			let a = V(e.getAttributes, void 0, t, i), o = V(e.getContent, void 0, a);
			if (a === !1 || a === null) return null;
			let s = {
				type: e.type.name,
				attrs: a
			};
			o && (s.content = o), t.input && n().deleteRange(r).insertContentAt(r.from, s);
		}
	});
}
var { getOwnPropertyNames: Xd, getOwnPropertySymbols: Zd } = Object, { hasOwnProperty: Qd } = Object.prototype;
function $d(e, t) {
	return function(n, r, i) {
		return e(n, r, i) && t(n, r, i);
	};
}
function ef(e) {
	return function(t, n, r) {
		if (!t || !n || typeof t != "object" || typeof n != "object") return e(t, n, r);
		let { cache: i } = r, a = i.get(t), o = i.get(n);
		if (a && o) return a === n && o === t;
		i.set(t, n), i.set(n, t);
		let s = e(t, n, r);
		return i.delete(t), i.delete(n), s;
	};
}
function tf(e) {
	return e?.[Symbol.toStringTag];
}
function nf(e) {
	return Xd(e).concat(Zd(e));
}
var rf = Object.hasOwn || ((e, t) => Qd.call(e, t));
function af(e, t) {
	return e === t || !e && !t && e !== e && t !== t;
}
var of = "__v", sf = "__o", cf = "_owner", { getOwnPropertyDescriptor: lf, keys: uf } = Object;
function df(e, t) {
	return e.byteLength === t.byteLength && wf(new Uint8Array(e), new Uint8Array(t));
}
function ff(e, t, n) {
	let r = e.length;
	if (t.length !== r) return !1;
	for (; r-- > 0;) if (!n.equals(e[r], t[r], r, r, e, t, n)) return !1;
	return !0;
}
function pf(e, t) {
	return e.byteLength === t.byteLength && wf(new Uint8Array(e.buffer, e.byteOffset, e.byteLength), new Uint8Array(t.buffer, t.byteOffset, t.byteLength));
}
function mf(e, t) {
	return af(e.getTime(), t.getTime());
}
function hf(e, t) {
	return e.name === t.name && e.message === t.message && e.cause === t.cause && e.stack === t.stack;
}
function gf(e, t) {
	return e === t;
}
function _f(e, t, n) {
	let r = e.size;
	if (r !== t.size) return !1;
	if (!r) return !0;
	let i = Array(r), a = e.entries(), o, s, c = 0;
	for (; (o = a.next()) && !o.done;) {
		let r = t.entries(), a = !1, l = 0;
		for (; (s = r.next()) && !s.done;) {
			if (i[l]) {
				l++;
				continue;
			}
			let r = o.value, u = s.value;
			if (n.equals(r[0], u[0], c, l, e, t, n) && n.equals(r[1], u[1], r[0], u[0], e, t, n)) {
				a = i[l] = !0;
				break;
			}
			l++;
		}
		if (!a) return !1;
		c++;
	}
	return !0;
}
var vf = af;
function yf(e, t, n) {
	let r = uf(e), i = r.length;
	if (uf(t).length !== i) return !1;
	for (; i-- > 0;) if (!Ef(e, t, n, r[i])) return !1;
	return !0;
}
function bf(e, t, n) {
	let r = nf(e), i = r.length;
	if (nf(t).length !== i) return !1;
	let a, o, s;
	for (; i-- > 0;) if (a = r[i], !Ef(e, t, n, a) || (o = lf(e, a), s = lf(t, a), (o || s) && (!o || !s || o.configurable !== s.configurable || o.enumerable !== s.enumerable || o.writable !== s.writable))) return !1;
	return !0;
}
function xf(e, t) {
	return af(e.valueOf(), t.valueOf());
}
function Sf(e, t) {
	return e.source === t.source && e.flags === t.flags;
}
function Cf(e, t, n) {
	let r = e.size;
	if (r !== t.size) return !1;
	if (!r) return !0;
	let i = Array(r), a = e.values(), o, s;
	for (; (o = a.next()) && !o.done;) {
		let r = t.values(), a = !1, c = 0;
		for (; (s = r.next()) && !s.done;) {
			if (!i[c] && n.equals(o.value, s.value, o.value, s.value, e, t, n)) {
				a = i[c] = !0;
				break;
			}
			c++;
		}
		if (!a) return !1;
	}
	return !0;
}
function wf(e, t) {
	let n = e.byteLength;
	if (t.byteLength !== n || e.byteOffset !== t.byteOffset) return !1;
	for (; n-- > 0;) if (e[n] !== t[n]) return !1;
	return !0;
}
function Tf(e, t) {
	return e.hostname === t.hostname && e.pathname === t.pathname && e.protocol === t.protocol && e.port === t.port && e.hash === t.hash && e.username === t.username && e.password === t.password;
}
function Ef(e, t, n, r) {
	return (r === cf || r === sf || r === of) && (e.$$typeof || t.$$typeof) ? !0 : rf(t, r) && n.equals(e[r], t[r], r, r, e, t, n);
}
var Df = "[object ArrayBuffer]", Of = "[object Arguments]", kf = "[object Boolean]", Af = "[object DataView]", jf = "[object Date]", Mf = "[object Error]", Nf = "[object Map]", Pf = "[object Number]", Ff = "[object Object]", If = "[object RegExp]", Lf = "[object Set]", Rf = "[object String]", zf = {
	"[object Int8Array]": !0,
	"[object Uint8Array]": !0,
	"[object Uint8ClampedArray]": !0,
	"[object Int16Array]": !0,
	"[object Uint16Array]": !0,
	"[object Int32Array]": !0,
	"[object Uint32Array]": !0,
	"[object Float16Array]": !0,
	"[object Float32Array]": !0,
	"[object Float64Array]": !0,
	"[object BigInt64Array]": !0,
	"[object BigUint64Array]": !0
}, Bf = "[object URL]", Vf = Object.prototype.toString;
function Hf({ areArrayBuffersEqual: e, areArraysEqual: t, areDataViewsEqual: n, areDatesEqual: r, areErrorsEqual: i, areFunctionsEqual: a, areMapsEqual: o, areNumbersEqual: s, areObjectsEqual: c, arePrimitiveWrappersEqual: l, areRegExpsEqual: u, areSetsEqual: d, areTypedArraysEqual: f, areUrlsEqual: p, unknownTagComparators: m }) {
	return function(h, g, _) {
		if (h === g) return !0;
		if (h == null || g == null) return !1;
		let ee = typeof h;
		if (ee !== typeof g) return !1;
		if (ee !== "object") return ee === "number" ? s(h, g, _) : ee === "function" ? a(h, g, _) : !1;
		let v = h.constructor;
		if (v !== g.constructor) return !1;
		if (v === Object) return c(h, g, _);
		if (Array.isArray(h)) return t(h, g, _);
		if (v === Date) return r(h, g, _);
		if (v === RegExp) return u(h, g, _);
		if (v === Map) return o(h, g, _);
		if (v === Set) return d(h, g, _);
		let y = Vf.call(h);
		if (y === jf) return r(h, g, _);
		if (y === If) return u(h, g, _);
		if (y === Nf) return o(h, g, _);
		if (y === Lf) return d(h, g, _);
		if (y === Ff) return typeof h.then != "function" && typeof g.then != "function" && c(h, g, _);
		if (y === Bf) return p(h, g, _);
		if (y === Mf) return i(h, g, _);
		if (y === Of) return c(h, g, _);
		if (zf[y]) return f(h, g, _);
		if (y === Df) return e(h, g, _);
		if (y === Af) return n(h, g, _);
		if (y === kf || y === Pf || y === Rf) return l(h, g, _);
		if (m) {
			let e = m[y];
			if (!e) {
				let t = tf(h);
				t && (e = m[t]);
			}
			if (e) return e(h, g, _);
		}
		return !1;
	};
}
function Uf({ circular: e, createCustomConfig: t, strict: n }) {
	let r = {
		areArrayBuffersEqual: df,
		areArraysEqual: n ? bf : ff,
		areDataViewsEqual: pf,
		areDatesEqual: mf,
		areErrorsEqual: hf,
		areFunctionsEqual: gf,
		areMapsEqual: n ? $d(_f, bf) : _f,
		areNumbersEqual: vf,
		areObjectsEqual: n ? bf : yf,
		arePrimitiveWrappersEqual: xf,
		areRegExpsEqual: Sf,
		areSetsEqual: n ? $d(Cf, bf) : Cf,
		areTypedArraysEqual: n ? $d(wf, bf) : wf,
		areUrlsEqual: Tf,
		unknownTagComparators: void 0
	};
	if (t && (r = Object.assign({}, r, t(r))), e) {
		let e = ef(r.areArraysEqual), t = ef(r.areMapsEqual), n = ef(r.areObjectsEqual), i = ef(r.areSetsEqual);
		r = Object.assign({}, r, {
			areArraysEqual: e,
			areMapsEqual: t,
			areObjectsEqual: n,
			areSetsEqual: i
		});
	}
	return r;
}
function Wf(e) {
	return function(t, n, r, i, a, o, s) {
		return e(t, n, s);
	};
}
function Gf({ circular: e, comparator: t, createState: n, equals: r, strict: i }) {
	if (n) return function(a, o) {
		let { cache: s = e ? new WeakMap() : void 0, meta: c } = n();
		return t(a, o, {
			cache: s,
			equals: r,
			meta: c,
			strict: i
		});
	};
	if (e) return function(e, n) {
		return t(e, n, {
			cache: new WeakMap(),
			equals: r,
			meta: void 0,
			strict: i
		});
	};
	let a = {
		cache: void 0,
		equals: r,
		meta: void 0,
		strict: i
	};
	return function(e, n) {
		return t(e, n, a);
	};
}
var Kf = qf();
qf({ strict: !0 }), qf({ circular: !0 }), qf({
	circular: !0,
	strict: !0
}), qf({ createInternalComparator: () => af }), qf({
	strict: !0,
	createInternalComparator: () => af
}), qf({
	circular: !0,
	createInternalComparator: () => af
}), qf({
	circular: !0,
	createInternalComparator: () => af,
	strict: !0
});
function qf(e = {}) {
	let { circular: t = !1, createInternalComparator: n, createState: r, strict: i = !1 } = e, a = Hf(Uf(e));
	return Gf({
		circular: t,
		comparator: a,
		createState: r,
		equals: n ? n(a) : Wf(a),
		strict: i
	});
}
var Jf = p(((e) => {
	var t = m("react"), n = _();
	function r(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var i = typeof Object.is == "function" ? Object.is : r, a = n.useSyncExternalStore, o = t.useRef, s = t.useEffect, c = t.useMemo, l = t.useDebugValue;
	e.useSyncExternalStoreWithSelector = function(e, t, n, r, u) {
		var d = o(null);
		if (d.current === null) {
			var f = {
				hasValue: !1,
				value: null
			};
			d.current = f;
		} else f = d.current;
		d = c(function() {
			function e(e) {
				if (!a) {
					if (a = !0, o = e, e = r(e), u !== void 0 && f.hasValue) {
						var t = f.value;
						if (u(t, e)) return s = t;
					}
					return s = e;
				}
				if (t = s, i(o, e)) return t;
				var n = r(e);
				return u !== void 0 && u(t, n) ? (o = e, t) : (o = e, s = n);
			}
			var a = !1, o, s, c = n === void 0 ? null : n;
			return [function() {
				return e(t());
			}, c === null ? void 0 : function() {
				return e(c());
			}];
		}, [
			t,
			n,
			r,
			u
		]);
		var p = a(e, d[0], d[1]);
		return s(function() {
			f.hasValue = !0, f.value = p;
		}, [p]), l(p), p;
	};
})), Yf = p(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e, t) {
			return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
		}
		typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var n = m("react"), r = _(), i = typeof Object.is == "function" ? Object.is : t, a = r.useSyncExternalStore, o = n.useRef, s = n.useEffect, c = n.useMemo, l = n.useDebugValue;
		e.useSyncExternalStoreWithSelector = function(e, t, n, r, u) {
			var d = o(null);
			if (d.current === null) {
				var f = {
					hasValue: !1,
					value: null
				};
				d.current = f;
			} else f = d.current;
			d = c(function() {
				function e(e) {
					if (!a) {
						if (a = !0, o = e, e = r(e), u !== void 0 && f.hasValue) {
							var t = f.value;
							if (u(t, e)) return s = t;
						}
						return s = e;
					}
					if (t = s, i(o, e)) return t;
					var n = r(e);
					return u !== void 0 && u(t, n) ? (o = e, t) : (o = e, s = n);
				}
				var a = !1, o, s, c = n === void 0 ? null : n;
				return [function() {
					return e(t());
				}, c === null ? void 0 : function() {
					return e(c());
				}];
			}, [
				t,
				n,
				r,
				u
			]);
			var p = a(e, d[0], d[1]);
			return s(function() {
				f.hasValue = !0, f.value = p;
			}, [p]), l(p), p;
		}, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
})), Xf = p(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = Jf() : t.exports = Yf();
}))(), Zf = (...e) => (t) => {
	e.forEach((e) => {
		typeof e == "function" ? e(t) : e && (e.current = t);
	});
}, Qf = ({ contentComponent: e }) => {
	let t = (0, b.useSyncExternalStore)(e.subscribe, e.getSnapshot, e.getServerSnapshot);
	return (0, y.jsx)(y.Fragment, { children: Object.values(t) });
};
function $f() {
	let e = new Set(), t = {};
	return {
		subscribe(t) {
			return e.add(t), () => {
				e.delete(t);
			};
		},
		getSnapshot() {
			return t;
		},
		getServerSnapshot() {
			return t;
		},
		setRenderer(n, r) {
			t = {
				...t,
				[n]: f.createPortal(r.reactElement, r.element, n)
			}, e.forEach((e) => e());
		},
		removeRenderer(n) {
			let r = { ...t };
			delete r[n], t = r, e.forEach((e) => e());
		}
	};
}
var ep = class extends e.Component {
	constructor(t) {
		super(t), this.editorContentRef = e.createRef(), this.initialized = !1, this.state = { hasContentComponentInitialized: !!t.editor?.contentComponent };
	}
	componentDidMount() {
		this.init();
	}
	componentDidUpdate() {
		this.init();
	}
	init() {
		let e = this.props.editor;
		if (e && !e.isDestroyed && e.view.dom?.parentNode) {
			if (e.contentComponent) return;
			let t = this.editorContentRef.current;
			t.append(...e.view.dom.parentNode.childNodes), e.setOptions({ element: t }), e.contentComponent = $f(), this.state.hasContentComponentInitialized || (this.unsubscribeToContentComponent = e.contentComponent.subscribe(() => {
				this.setState((e) => e.hasContentComponentInitialized ? e : { hasContentComponentInitialized: !0 }), this.unsubscribeToContentComponent && this.unsubscribeToContentComponent();
			})), e.createNodeViews(), this.initialized = !0;
		}
	}
	componentWillUnmount() {
		let e = this.props.editor;
		if (e) {
			this.initialized = !1, e.isDestroyed || e.view.setProps({ nodeViews: {} }), this.unsubscribeToContentComponent && this.unsubscribeToContentComponent(), e.contentComponent = null;
			try {
				if (!e.view.dom?.parentNode) return;
				let t = document.createElement("div");
				t.append(...e.view.dom.parentNode.childNodes), e.setOptions({ element: t });
			} catch {}
		}
	}
	render() {
		let { editor: e, innerRef: t, ...n } = this.props;
		return (0, y.jsxs)(y.Fragment, { children: [(0, y.jsx)("div", {
			ref: Zf(t, this.editorContentRef),
			...n
		}), e?.contentComponent && (0, y.jsx)(Qf, { contentComponent: e.contentComponent })] });
	}
}, tp = r((t, n) => {
	let r = e.useMemo(() => Math.floor(Math.random() * 4294967295).toString(), [t.editor]);
	return e.createElement(ep, {
		key: r,
		innerRef: n,
		...t
	});
}), np = e.memo(tp), rp = typeof window < "u" ? c : s, ip = class {
	constructor(e) {
		this.transactionNumber = 0, this.lastTransactionNumber = 0, this.subscribers = new Set(), this.editor = e, this.lastSnapshot = {
			editor: e,
			transactionNumber: 0
		}, this.getSnapshot = this.getSnapshot.bind(this), this.getServerSnapshot = this.getServerSnapshot.bind(this), this.watch = this.watch.bind(this), this.subscribe = this.subscribe.bind(this);
	}
	getSnapshot() {
		return this.transactionNumber === this.lastTransactionNumber ? this.lastSnapshot : (this.lastTransactionNumber = this.transactionNumber, this.lastSnapshot = {
			editor: this.editor,
			transactionNumber: this.transactionNumber
		}, this.lastSnapshot);
	}
	getServerSnapshot() {
		return {
			editor: null,
			transactionNumber: 0
		};
	}
	subscribe(e) {
		return this.subscribers.add(e), () => {
			this.subscribers.delete(e);
		};
	}
	watch(e) {
		if (this.editor = e, this.editor) {
			let e = () => {
				this.transactionNumber += 1, this.subscribers.forEach((e) => e());
			}, t = this.editor;
			return t.on("transaction", e), () => {
				t.off("transaction", e);
			};
		}
	}
};
function ap(e) {
	let [t] = d(() => new ip(e.editor)), n = (0, Xf.useSyncExternalStoreWithSelector)(t.subscribe, t.getSnapshot, t.getServerSnapshot, e.selector, e.equalityFn ?? Kf);
	return rp(() => t.watch(e.editor), [e.editor, t]), o(n), n;
}
var op = process.env.NODE_ENV !== "production", sp = typeof window > "u", cp = sp || !!(typeof window < "u" && window.next), lp = class e {
	constructor(e) {
		this.editor = null, this.subscriptions = new Set(), this.isComponentMounted = !1, this.previousDeps = null, this.instanceId = "", this.options = e, this.subscriptions = new Set(), this.setEditor(this.getInitialEditor()), this.scheduleDestroy(), this.getEditor = this.getEditor.bind(this), this.getServerSnapshot = this.getServerSnapshot.bind(this), this.subscribe = this.subscribe.bind(this), this.refreshEditorInstance = this.refreshEditorInstance.bind(this), this.scheduleDestroy = this.scheduleDestroy.bind(this), this.onRender = this.onRender.bind(this), this.createEditor = this.createEditor.bind(this);
	}
	setEditor(e) {
		this.editor = e, this.instanceId = Math.random().toString(36).slice(2, 9), this.subscriptions.forEach((e) => e());
	}
	getInitialEditor() {
		if (this.options.current.immediatelyRender === void 0) {
			if (sp || cp) {
				if (op) throw Error("Tiptap Error: SSR has been detected, please set `immediatelyRender` explicitly to `false` to avoid hydration mismatches.");
				return null;
			}
			return this.createEditor();
		}
		if (this.options.current.immediatelyRender && sp && op) throw Error("Tiptap Error: SSR has been detected, and `immediatelyRender` has been set to `true` this is an unsupported configuration that may result in errors, explicitly set `immediatelyRender` to `false` to avoid hydration mismatches.");
		return this.options.current.immediatelyRender ? this.createEditor() : null;
	}
	createEditor() {
		return new Ad({
			...this.options.current,
			onBeforeCreate: (...e) => {
				var t;
				return (t = this.options.current).onBeforeCreate?.call(t, ...e);
			},
			onBlur: (...e) => {
				var t;
				return (t = this.options.current).onBlur?.call(t, ...e);
			},
			onCreate: (...e) => {
				var t;
				return (t = this.options.current).onCreate?.call(t, ...e);
			},
			onDestroy: (...e) => {
				var t;
				return (t = this.options.current).onDestroy?.call(t, ...e);
			},
			onFocus: (...e) => {
				var t;
				return (t = this.options.current).onFocus?.call(t, ...e);
			},
			onSelectionUpdate: (...e) => {
				var t;
				return (t = this.options.current).onSelectionUpdate?.call(t, ...e);
			},
			onTransaction: (...e) => {
				var t;
				return (t = this.options.current).onTransaction?.call(t, ...e);
			},
			onUpdate: (...e) => {
				var t;
				return (t = this.options.current).onUpdate?.call(t, ...e);
			},
			onContentError: (...e) => {
				var t;
				return (t = this.options.current).onContentError?.call(t, ...e);
			},
			onDrop: (...e) => {
				var t;
				return (t = this.options.current).onDrop?.call(t, ...e);
			},
			onPaste: (...e) => {
				var t;
				return (t = this.options.current).onPaste?.call(t, ...e);
			},
			onDelete: (...e) => {
				var t;
				return (t = this.options.current).onDelete?.call(t, ...e);
			}
		});
	}
	getEditor() {
		return this.editor;
	}
	getServerSnapshot() {
		return null;
	}
	subscribe(e) {
		return this.subscriptions.add(e), () => {
			this.subscriptions.delete(e);
		};
	}
	static compareOptions(e, t) {
		return Object.keys(e).every((n) => [
			"onCreate",
			"onBeforeCreate",
			"onDestroy",
			"onUpdate",
			"onTransaction",
			"onFocus",
			"onBlur",
			"onSelectionUpdate",
			"onContentError",
			"onDrop",
			"onPaste"
		].includes(n) ? !0 : n === "extensions" && e.extensions && t.extensions ? e.extensions.length === t.extensions.length ? e.extensions.every((e, n) => e === t.extensions?.[n]) : !1 : e[n] === t[n]);
	}
	onRender(t) {
		return () => (this.isComponentMounted = !0, clearTimeout(this.scheduledDestructionTimeout), this.editor && !this.editor.isDestroyed && t.length === 0 ? e.compareOptions(this.options.current, this.editor.options) || this.editor.setOptions({
			...this.options.current,
			editable: this.editor.isEditable
		}) : this.refreshEditorInstance(t), () => {
			this.isComponentMounted = !1, this.scheduleDestroy();
		});
	}
	refreshEditorInstance(e) {
		if (this.editor && !this.editor.isDestroyed) {
			if (this.previousDeps === null) {
				this.previousDeps = e;
				return;
			}
			if (this.previousDeps.length === e.length && this.previousDeps.every((t, n) => t === e[n])) return;
		}
		this.editor && !this.editor.isDestroyed && this.editor.destroy(), this.setEditor(this.createEditor()), this.previousDeps = e;
	}
	scheduleDestroy() {
		let e = this.instanceId, t = this.editor;
		this.scheduledDestructionTimeout = setTimeout(() => {
			if (this.isComponentMounted && this.instanceId === e) {
				t && t.setOptions(this.options.current);
				return;
			}
			t && !t.isDestroyed && (t.destroy(), this.instanceId === e && this.setEditor(null));
		}, 1);
	}
};
function up(e = {}, t = []) {
	let n = u(e);
	n.current = e;
	let [r] = d(() => new lp(n)), i = (0, b.useSyncExternalStore)(r.subscribe, r.getEditor, r.getServerSnapshot);
	return o(i), s(r.onRender(t)), ap({
		editor: i,
		selector: ({ transactionNumber: t }) => e.shouldRerenderOnTransaction === !1 || e.shouldRerenderOnTransaction === void 0 ? null : e.immediatelyRender && t === 0 ? 0 : t + 1
	}), i;
}
var dp = t({ editor: null });
dp.Consumer;
var fp = t({
	onDragStart: () => {},
	nodeViewContentChildren: void 0,
	nodeViewContentRef: () => {}
}), pp = () => a(fp);
e.forwardRef((e, t) => {
	let { onDragStart: n } = pp();
	return (0, y.jsx)(e.as || "div", {
		...e,
		ref: t,
		"data-node-view-wrapper": "",
		onDragStart: n,
		style: {
			whiteSpace: "normal",
			...e.style
		}
	});
}), e.createContext({ markViewContentRef: () => {} });
var mp = t({ get editor() {
	throw Error("useTiptap must be used within a <Tiptap> provider");
} });
mp.displayName = "TiptapContext";
var hp = () => a(mp);
function gp({ editor: e, instance: t, children: n }) {
	let r = e ?? t;
	if (!r) throw Error("Tiptap: An editor instance is required. Pass a non-null `editor` prop.");
	let i = l(() => ({ editor: r }), [r]), a = l(() => ({ editor: r }), [r]);
	return (0, y.jsx)(dp.Provider, {
		value: a,
		children: (0, y.jsx)(mp.Provider, {
			value: i,
			children: n
		})
	});
}
gp.displayName = "Tiptap";
function _p({ ...e }) {
	let { editor: t } = hp();
	return (0, y.jsx)(np, {
		editor: t,
		...e
	});
}
_p.displayName = "Tiptap.Content", Object.assign(gp, { Content: _p });
var vp = (e, t) => {
	if (e === "slot") return 0;
	if (e instanceof Function) return e(t);
	let { children: n, ...r } = t ?? {};
	if (e === "svg") throw Error("SVG elements are not supported in the JSX syntax, use the array syntax instead");
	return [
		e,
		r,
		n
	];
}, yp = /^\s*>\s$/, bp = W.create({
	name: "blockquote",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	content: "block+",
	group: "block",
	defining: !0,
	parseHTML() {
		return [{ tag: "blockquote" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return vp("blockquote", {
			...H(this.options.HTMLAttributes, e),
			children: vp("slot", {})
		});
	},
	parseMarkdown: (e, t) => t.createNode("blockquote", void 0, t.parseChildren(e.tokens || [])),
	renderMarkdown: (e, t) => {
		if (!e.content) return "";
		let n = [];
		return e.content.forEach((e) => {
			let r = t.renderChildren([e]).split("\n").map((e) => e.trim() === "" ? ">" : `> ${e}`);
			n.push(r.join("\n"));
		}), n.join("\n>\n");
	},
	addCommands() {
		return {
			setBlockquote: () => ({ commands: e }) => e.wrapIn(this.name),
			toggleBlockquote: () => ({ commands: e }) => e.toggleWrap(this.name),
			unsetBlockquote: () => ({ commands: e }) => e.lift(this.name)
		};
	},
	addKeyboardShortcuts() {
		return { "Mod-Shift-b": () => this.editor.commands.toggleBlockquote() };
	},
	addInputRules() {
		return [Pd({
			find: yp,
			type: this.type
		})];
	}
}), xp = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/, Sp = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g, Cp = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/, wp = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g, Tp = sd.create({
	name: "bold",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	parseHTML() {
		return [
			{ tag: "strong" },
			{
				tag: "b",
				getAttrs: (e) => e.style.fontWeight !== "normal" && null
			},
			{
				style: "font-weight=400",
				clearMark: (e) => e.type.name === this.name
			},
			{
				style: "font-weight",
				getAttrs: (e) => /^(bold(er)?|[5-9]\d{2,})$/.test(e) && null
			}
		];
	},
	renderHTML({ HTMLAttributes: e }) {
		return vp("strong", {
			...H(this.options.HTMLAttributes, e),
			children: vp("slot", {})
		});
	},
	markdownTokenName: "strong",
	parseMarkdown: (e, t) => t.applyMark("bold", t.parseInline(e.tokens || [])),
	renderMarkdown: (e, t) => `**${t.renderChildren(e)}**`,
	addCommands() {
		return {
			setBold: () => ({ commands: e }) => e.setMark(this.name),
			toggleBold: () => ({ commands: e }) => e.toggleMark(this.name),
			unsetBold: () => ({ commands: e }) => e.unsetMark(this.name)
		};
	},
	addKeyboardShortcuts() {
		return {
			"Mod-b": () => this.editor.commands.toggleBold(),
			"Mod-B": () => this.editor.commands.toggleBold()
		};
	},
	addInputRules() {
		return [jd({
			find: xp,
			type: this.type
		}), jd({
			find: Cp,
			type: this.type
		})];
	},
	addPasteRules() {
		return [Jd({
			find: Sp,
			type: this.type
		}), Jd({
			find: wp,
			type: this.type
		})];
	}
}), Ep = /(^|[^`])`([^`]+)`(?!`)$/, Dp = /(^|[^`])`([^`]+)`(?!`)/g, Op = sd.create({
	name: "code",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	excludes: "_",
	code: !0,
	exitable: !0,
	parseHTML() {
		return [{ tag: "code" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"code",
			H(this.options.HTMLAttributes, e),
			0
		];
	},
	markdownTokenName: "codespan",
	parseMarkdown: (e, t) => t.applyMark("code", [{
		type: "text",
		text: e.text || ""
	}]),
	renderMarkdown: (e, t) => e.content ? `\`${t.renderChildren(e.content)}\`` : "",
	addCommands() {
		return {
			setCode: () => ({ commands: e }) => e.setMark(this.name),
			toggleCode: () => ({ commands: e }) => e.toggleMark(this.name),
			unsetCode: () => ({ commands: e }) => e.unsetMark(this.name)
		};
	},
	addKeyboardShortcuts() {
		return { "Mod-e": () => this.editor.commands.toggleCode() };
	},
	addInputRules() {
		return [jd({
			find: Ep,
			type: this.type
		})];
	},
	addPasteRules() {
		return [Jd({
			find: Dp,
			type: this.type
		})];
	}
}), kp = 4, Ap = /^```([a-z]+)?[\s\n]$/, jp = /^~~~([a-z]+)?[\s\n]$/, Mp = W.create({
	name: "codeBlock",
	addOptions() {
		return {
			languageClassPrefix: "language-",
			exitOnTripleEnter: !0,
			exitOnArrowDown: !0,
			defaultLanguage: null,
			enableTabIndentation: !1,
			tabSize: kp,
			HTMLAttributes: {}
		};
	},
	content: "text*",
	marks: "",
	group: "block",
	code: !0,
	defining: !0,
	addAttributes() {
		return { language: {
			default: this.options.defaultLanguage,
			parseHTML: (e) => {
				let { languageClassPrefix: t } = this.options;
				return t && [...e.firstElementChild?.classList || []].filter((e) => e.startsWith(t)).map((e) => e.replace(t, ""))[0] || null;
			},
			rendered: !1
		} };
	},
	parseHTML() {
		return [{
			tag: "pre",
			preserveWhitespace: "full"
		}];
	},
	renderHTML({ node: e, HTMLAttributes: t }) {
		return [
			"pre",
			H(this.options.HTMLAttributes, t),
			[
				"code",
				{ class: e.attrs.language ? this.options.languageClassPrefix + e.attrs.language : null },
				0
			]
		];
	},
	markdownTokenName: "code",
	parseMarkdown: (e, t) => e.raw?.startsWith("```") === !1 && e.codeBlockStyle !== "indented" ? [] : t.createNode("codeBlock", { language: e.lang || null }, e.text ? [t.createTextNode(e.text)] : []),
	renderMarkdown: (e, t) => {
		let n = "", r = e.attrs?.language || "";
		return n = e.content ? [
			`\`\`\`${r}`,
			t.renderChildren(e.content),
			"```"
		].join("\n") : `\`\`\`${r}

\`\`\``, n;
	},
	addCommands() {
		return {
			setCodeBlock: (e) => ({ commands: t }) => t.setNode(this.name, e),
			toggleCodeBlock: (e) => ({ commands: t }) => t.toggleNode(this.name, "paragraph", e)
		};
	},
	addKeyboardShortcuts() {
		return {
			"Mod-Alt-c": () => this.editor.commands.toggleCodeBlock(),
			Backspace: () => {
				let { empty: e, $anchor: t } = this.editor.state.selection, n = t.pos === 1;
				return !e || t.parent.type.name !== this.name ? !1 : n || !t.parent.textContent.length ? this.editor.commands.clearNodes() : !1;
			},
			Tab: ({ editor: e }) => {
				if (!this.options.enableTabIndentation) return !1;
				let t = this.options.tabSize ?? kp, { state: n } = e, { selection: r } = n, { $from: i, empty: a } = r;
				if (i.parent.type !== this.type) return !1;
				let o = " ".repeat(t);
				return a ? e.commands.insertContent(o) : e.commands.command(({ tr: e }) => {
					let { from: t, to: i } = r, a = n.doc.textBetween(t, i, "\n", "\n").split("\n").map((e) => o + e).join("\n");
					return e.replaceWith(t, i, n.schema.text(a)), !0;
				});
			},
			"Shift-Tab": ({ editor: e }) => {
				if (!this.options.enableTabIndentation) return !1;
				let t = this.options.tabSize ?? kp, { state: n } = e, { selection: r } = n, { $from: i, empty: a } = r;
				return i.parent.type === this.type ? a ? e.commands.command(({ tr: e }) => {
					let { pos: r } = i, a = i.start(), o = i.end(), s = n.doc.textBetween(a, o, "\n", "\n").split("\n"), c = 0, l = 0, u = r - a;
					for (let e = 0; e < s.length; e += 1) {
						if (l + s[e].length >= u) {
							c = e;
							break;
						}
						l += s[e].length + 1;
					}
					let d = s[c].match(/^ */)?.[0] || "", f = Math.min(d.length, t);
					if (f === 0) return !0;
					let p = a;
					for (let e = 0; e < c; e += 1) p += s[e].length + 1;
					return e.delete(p, p + f), r - p <= f && e.setSelection(O.create(e.doc, p)), !0;
				}) : e.commands.command(({ tr: e }) => {
					let { from: i, to: a } = r, o = n.doc.textBetween(i, a, "\n", "\n").split("\n").map((e) => {
						let n = e.match(/^ */)?.[0] || "", r = Math.min(n.length, t);
						return e.slice(r);
					}).join("\n");
					return e.replaceWith(i, a, n.schema.text(o)), !0;
				}) : !1;
			},
			Enter: ({ editor: e }) => {
				if (!this.options.exitOnTripleEnter) return !1;
				let { state: t } = e, { selection: n } = t, { $from: r, empty: i } = n;
				if (!i || r.parent.type !== this.type) return !1;
				let a = r.parentOffset === r.parent.nodeSize - 2, o = r.parent.textContent.endsWith("\n\n");
				return !a || !o ? !1 : e.chain().command(({ tr: e }) => (e.delete(r.pos - 2, r.pos), !0)).exitCode().run();
			},
			ArrowDown: ({ editor: e }) => {
				if (!this.options.exitOnArrowDown) return !1;
				let { state: t } = e, { selection: n, doc: r } = t, { $from: i, empty: a } = n;
				if (!a || i.parent.type !== this.type || i.parentOffset !== i.parent.nodeSize - 2) return !1;
				let o = i.after();
				return o === void 0 ? !1 : r.nodeAt(o) ? e.commands.command(({ tr: e }) => (e.setSelection(D.near(r.resolve(o))), !0)) : e.commands.exitCode();
			}
		};
	},
	addInputRules() {
		return [Nd({
			find: Ap,
			type: this.type,
			getAttributes: (e) => ({ language: e[1] })
		}), Nd({
			find: jp,
			type: this.type,
			getAttributes: (e) => ({ language: e[1] })
		})];
	},
	addProseMirrorPlugins() {
		return [new A({
			key: new j("codeBlockVSCodeHandler"),
			props: { handlePaste: (e, t) => {
				if (!t.clipboardData || this.editor.isActive(this.type.name)) return !1;
				let n = t.clipboardData.getData("text/plain"), r = t.clipboardData.getData("vscode-editor-data"), i = (r ? JSON.parse(r) : void 0)?.mode;
				if (!n || !i) return !1;
				let { tr: a, schema: o } = e.state, s = o.text(n.replace(/\r\n?/g, "\n"));
				return a.replaceSelectionWith(this.type.create({ language: i }, s)), a.selection.$from.parent.type !== this.type && a.setSelection(O.near(a.doc.resolve(Math.max(0, a.selection.from - 2)))), a.setMeta("paste", !0), e.dispatch(a), !0;
			} }
		})];
	}
}), Np = W.create({
	name: "doc",
	topNode: !0,
	content: "block+",
	renderMarkdown: (e, t) => e.content ? t.renderChildren(e.content, "\n\n") : ""
}), Pp = W.create({
	name: "hardBreak",
	markdownTokenName: "br",
	addOptions() {
		return {
			keepMarks: !0,
			HTMLAttributes: {}
		};
	},
	inline: !0,
	group: "inline",
	selectable: !1,
	linebreakReplacement: !0,
	parseHTML() {
		return [{ tag: "br" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return ["br", H(this.options.HTMLAttributes, e)];
	},
	renderText() {
		return "\n";
	},
	renderMarkdown: () => "  \n",
	parseMarkdown: () => ({ type: "hardBreak" }),
	addCommands() {
		return { setHardBreak: () => ({ commands: e, chain: t, state: n, editor: r }) => e.first([() => e.exitCode(), () => e.command(() => {
			let { selection: e, storedMarks: i } = n;
			if (e.$from.parent.type.spec.isolating) return !1;
			let { keepMarks: a } = this.options, { splittableMarks: o } = r.extensionManager, s = i || e.$to.parentOffset && e.$from.marks();
			return t().insertContent({ type: this.name }).command(({ tr: e, dispatch: t }) => {
				if (t && s && a) {
					let t = s.filter((e) => o.includes(e.type.name));
					e.ensureMarks(t);
				}
				return !0;
			}).run();
		})]) };
	},
	addKeyboardShortcuts() {
		return {
			"Mod-Enter": () => this.editor.commands.setHardBreak(),
			"Shift-Enter": () => this.editor.commands.setHardBreak()
		};
	}
}), Fp = W.create({
	name: "heading",
	addOptions() {
		return {
			levels: [
				1,
				2,
				3,
				4,
				5,
				6
			],
			HTMLAttributes: {}
		};
	},
	content: "inline*",
	group: "block",
	defining: !0,
	addAttributes() {
		return { level: {
			default: 1,
			rendered: !1
		} };
	},
	parseHTML() {
		return this.options.levels.map((e) => ({
			tag: `h${e}`,
			attrs: { level: e }
		}));
	},
	renderHTML({ node: e, HTMLAttributes: t }) {
		return [
			`h${this.options.levels.includes(e.attrs.level) ? e.attrs.level : this.options.levels[0]}`,
			H(this.options.HTMLAttributes, t),
			0
		];
	},
	parseMarkdown: (e, t) => t.createNode("heading", { level: e.depth || 1 }, t.parseInline(e.tokens || [])),
	renderMarkdown: (e, t) => {
		let n = e.attrs?.level ? parseInt(e.attrs.level, 10) : 1, r = "#".repeat(n);
		return e.content ? `${r} ${t.renderChildren(e.content)}` : "";
	},
	addCommands() {
		return {
			setHeading: (e) => ({ commands: t }) => this.options.levels.includes(e.level) ? t.setNode(this.name, e) : !1,
			toggleHeading: (e) => ({ commands: t }) => this.options.levels.includes(e.level) ? t.toggleNode(this.name, "paragraph", e) : !1
		};
	},
	addKeyboardShortcuts() {
		return this.options.levels.reduce((e, t) => ({
			...e,
			[`Mod-Alt-${t}`]: () => this.editor.commands.toggleHeading({ level: t })
		}), {});
	},
	addInputRules() {
		return this.options.levels.map((e) => Nd({
			find: RegExp(`^(#{${Math.min(...this.options.levels)},${e}})\\s$`),
			type: this.type,
			getAttributes: { level: e }
		}));
	}
}), Ip = W.create({
	name: "horizontalRule",
	addOptions() {
		return {
			HTMLAttributes: {},
			nextNodeType: "paragraph"
		};
	},
	group: "block",
	parseHTML() {
		return [{ tag: "hr" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return ["hr", H(this.options.HTMLAttributes, e)];
	},
	markdownTokenName: "hr",
	parseMarkdown: (e, t) => t.createNode("horizontalRule"),
	renderMarkdown: () => "---",
	addCommands() {
		return { setHorizontalRule: () => ({ chain: e, state: t }) => {
			if (!Ld(t, t.schema.nodes[this.name])) return !1;
			let { selection: n } = t, { $to: r } = n, i = e();
			return wu(n) ? i.insertContentAt(r.pos, { type: this.name }) : i.insertContent({ type: this.name }), i.command(({ state: e, tr: t, dispatch: n }) => {
				if (n) {
					let { $to: n } = t.selection, r = n.end();
					if (n.nodeAfter) n.nodeAfter.isTextblock ? t.setSelection(O.create(t.doc, n.pos + 1)) : n.nodeAfter.isBlock ? t.setSelection(k.create(t.doc, n.pos)) : t.setSelection(O.create(t.doc, n.pos));
					else {
						let i = (e.schema.nodes[this.options.nextNodeType] || n.parent.type.contentMatch.defaultType)?.create();
						i && (t.insert(r, i), t.setSelection(O.create(t.doc, r + 1)));
					}
					t.scrollIntoView();
				}
				return !0;
			}).run();
		} };
	},
	addInputRules() {
		return [Md({
			find: /^(?:---|—-|___\s|\*\*\*\s)$/,
			type: this.type
		})];
	}
}), Lp = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/, Rp = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g, zp = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/, Bp = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g, Vp = sd.create({
	name: "italic",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	parseHTML() {
		return [
			{ tag: "em" },
			{
				tag: "i",
				getAttrs: (e) => e.style.fontStyle !== "normal" && null
			},
			{
				style: "font-style=normal",
				clearMark: (e) => e.type.name === this.name
			},
			{ style: "font-style=italic" }
		];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"em",
			H(this.options.HTMLAttributes, e),
			0
		];
	},
	addCommands() {
		return {
			setItalic: () => ({ commands: e }) => e.setMark(this.name),
			toggleItalic: () => ({ commands: e }) => e.toggleMark(this.name),
			unsetItalic: () => ({ commands: e }) => e.unsetMark(this.name)
		};
	},
	markdownTokenName: "em",
	parseMarkdown: (e, t) => t.applyMark("italic", t.parseInline(e.tokens || [])),
	renderMarkdown: (e, t) => `*${t.renderChildren(e)}*`,
	addKeyboardShortcuts() {
		return {
			"Mod-i": () => this.editor.commands.toggleItalic(),
			"Mod-I": () => this.editor.commands.toggleItalic()
		};
	},
	addInputRules() {
		return [jd({
			find: Lp,
			type: this.type
		}), jd({
			find: zp,
			type: this.type
		})];
	},
	addPasteRules() {
		return [Jd({
			find: Rp,
			type: this.type
		}), Jd({
			find: Bp,
			type: this.type
		})];
	}
}), Hp = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", Up = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", Wp = "numeric", Gp = "ascii", Kp = "alpha", qp = "asciinumeric", Jp = "alphanumeric", Yp = "domain", Xp = "emoji", Zp = "scheme", Qp = "slashscheme", $p = "whitespace";
function em(e, t) {
	return e in t || (t[e] = []), t[e];
}
function tm(e, t, n) {
	t[Wp] && (t[qp] = !0, t[Jp] = !0), t[Gp] && (t[qp] = !0, t[Kp] = !0), t[qp] && (t[Jp] = !0), t[Kp] && (t[Jp] = !0), t[Jp] && (t[Yp] = !0), t[Xp] && (t[Yp] = !0);
	for (let r in t) {
		let t = em(r, n);
		t.indexOf(e) < 0 && t.push(e);
	}
}
function nm(e, t) {
	let n = {};
	for (let r in t) t[r].indexOf(e) >= 0 && (n[r] = !0);
	return n;
}
function rm(e = null) {
	this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
rm.groups = {}, rm.prototype = {
	accepts() {
		return !!this.t;
	},
	go(e) {
		let t = this, n = t.j[e];
		if (n) return n;
		for (let n = 0; n < t.jr.length; n++) {
			let r = t.jr[n][0], i = t.jr[n][1];
			if (i && r.test(e)) return i;
		}
		return t.jd;
	},
	has(e, t = !1) {
		return t ? e in this.j : !!this.go(e);
	},
	ta(e, t, n, r) {
		for (let i = 0; i < e.length; i++) this.tt(e[i], t, n, r);
	},
	tr(e, t, n, r) {
		r ||= rm.groups;
		let i;
		return t && t.j ? i = t : (i = new rm(t), n && r && tm(t, n, r)), this.jr.push([e, i]), i;
	},
	ts(e, t, n, r) {
		let i = this, a = e.length;
		if (!a) return i;
		for (let t = 0; t < a - 1; t++) i = i.tt(e[t]);
		return i.tt(e[a - 1], t, n, r);
	},
	tt(e, t, n, r) {
		r ||= rm.groups;
		let i = this;
		if (t && t.j) return i.j[e] = t, t;
		let a = t, o, s = i.go(e);
		return s ? (o = new rm(), Object.assign(o.j, s.j), o.jr.push.apply(o.jr, s.jr), o.jd = s.jd, o.t = s.t) : o = new rm(), a && (r && (o.t && typeof o.t == "string" ? tm(a, Object.assign(nm(o.t, r), n), r) : n && tm(a, n, r)), o.t = a), i.j[e] = o, o;
	}
};
var G = (e, t, n, r, i) => e.ta(t, n, r, i), K = (e, t, n, r, i) => e.tr(t, n, r, i), im = (e, t, n, r, i) => e.ts(t, n, r, i), q = (e, t, n, r, i) => e.tt(t, n, r, i), am = "WORD", om = "UWORD", sm = "ASCIINUMERICAL", cm = "ALPHANUMERICAL", lm = "LOCALHOST", um = "TLD", dm = "UTLD", fm = "SCHEME", pm = "SLASH_SCHEME", mm = "NUM", hm = "WS", gm = "NL", _m = "OPENBRACE", vm = "CLOSEBRACE", ym = "OPENBRACKET", bm = "CLOSEBRACKET", xm = "OPENPAREN", Sm = "CLOSEPAREN", Cm = "OPENANGLEBRACKET", wm = "CLOSEANGLEBRACKET", Tm = "FULLWIDTHLEFTPAREN", Em = "FULLWIDTHRIGHTPAREN", Dm = "LEFTCORNERBRACKET", Om = "RIGHTCORNERBRACKET", km = "LEFTWHITECORNERBRACKET", Am = "RIGHTWHITECORNERBRACKET", jm = "FULLWIDTHLESSTHAN", Mm = "FULLWIDTHGREATERTHAN", Nm = "AMPERSAND", Pm = "APOSTROPHE", Fm = "ASTERISK", Im = "AT", Lm = "BACKSLASH", Rm = "BACKTICK", zm = "CARET", Bm = "COLON", Vm = "COMMA", Hm = "DOLLAR", Um = "DOT", Wm = "EQUALS", Gm = "EXCLAMATION", Km = "HYPHEN", qm = "PERCENT", Jm = "PIPE", Ym = "PLUS", Xm = "POUND", Zm = "QUERY", Qm = "QUOTE", $m = "FULLWIDTHMIDDLEDOT", eh = "SEMI", th = "SLASH", nh = "TILDE", rh = "UNDERSCORE", ih = "EMOJI", ah = "SYM", oh = Object.freeze({
	__proto__: null,
	ALPHANUMERICAL: cm,
	AMPERSAND: Nm,
	APOSTROPHE: Pm,
	ASCIINUMERICAL: sm,
	ASTERISK: Fm,
	AT: Im,
	BACKSLASH: Lm,
	BACKTICK: Rm,
	CARET: zm,
	CLOSEANGLEBRACKET: wm,
	CLOSEBRACE: vm,
	CLOSEBRACKET: bm,
	CLOSEPAREN: Sm,
	COLON: Bm,
	COMMA: Vm,
	DOLLAR: Hm,
	DOT: Um,
	EMOJI: ih,
	EQUALS: Wm,
	EXCLAMATION: Gm,
	FULLWIDTHGREATERTHAN: Mm,
	FULLWIDTHLEFTPAREN: Tm,
	FULLWIDTHLESSTHAN: jm,
	FULLWIDTHMIDDLEDOT: $m,
	FULLWIDTHRIGHTPAREN: Em,
	HYPHEN: Km,
	LEFTCORNERBRACKET: Dm,
	LEFTWHITECORNERBRACKET: km,
	LOCALHOST: lm,
	NL: gm,
	NUM: mm,
	OPENANGLEBRACKET: Cm,
	OPENBRACE: _m,
	OPENBRACKET: ym,
	OPENPAREN: xm,
	PERCENT: qm,
	PIPE: Jm,
	PLUS: Ym,
	POUND: Xm,
	QUERY: Zm,
	QUOTE: Qm,
	RIGHTCORNERBRACKET: Om,
	RIGHTWHITECORNERBRACKET: Am,
	SCHEME: fm,
	SEMI: eh,
	SLASH: th,
	SLASH_SCHEME: pm,
	SYM: ah,
	TILDE: nh,
	TLD: um,
	UNDERSCORE: rh,
	UTLD: dm,
	UWORD: om,
	WORD: am,
	WS: hm
}), sh = /[a-z]/, ch = /\p{L}/u, lh = /\p{Emoji}/u, uh = /\d/, dh = /\s/, fh = "\r", ph = "\n", mh = "️", hh = "‍", gh = "￼", _h = null, vh = null;
function yh(e = []) {
	let t = {};
	rm.groups = t;
	let n = new rm();
	_h ??= Ch(Hp), vh ??= Ch(Up), q(n, "'", Pm), q(n, "{", _m), q(n, "}", vm), q(n, "[", ym), q(n, "]", bm), q(n, "(", xm), q(n, ")", Sm), q(n, "<", Cm), q(n, ">", wm), q(n, "（", Tm), q(n, "）", Em), q(n, "「", Dm), q(n, "」", Om), q(n, "『", km), q(n, "』", Am), q(n, "＜", jm), q(n, "＞", Mm), q(n, "&", Nm), q(n, "*", Fm), q(n, "@", Im), q(n, "`", Rm), q(n, "^", zm), q(n, ":", Bm), q(n, ",", Vm), q(n, "$", Hm), q(n, ".", Um), q(n, "=", Wm), q(n, "!", Gm), q(n, "-", Km), q(n, "%", qm), q(n, "|", Jm), q(n, "+", Ym), q(n, "#", Xm), q(n, "?", Zm), q(n, "\"", Qm), q(n, "/", th), q(n, ";", eh), q(n, "~", nh), q(n, "_", rh), q(n, "\\", Lm), q(n, "・", $m);
	let r = K(n, uh, mm, { [Wp]: !0 });
	K(r, uh, r);
	let i = K(r, sh, sm, { [qp]: !0 }), a = K(r, ch, cm, { [Jp]: !0 }), o = K(n, sh, am, { [Gp]: !0 });
	K(o, uh, i), K(o, sh, o), K(i, uh, i), K(i, sh, i);
	let s = K(n, ch, om, { [Kp]: !0 });
	K(s, sh), K(s, uh, a), K(s, ch, s), K(a, uh, a), K(a, sh), K(a, ch, a);
	let c = q(n, ph, gm, { [$p]: !0 }), l = q(n, fh, hm, { [$p]: !0 }), u = K(n, dh, hm, { [$p]: !0 });
	q(n, gh, u), q(l, ph, c), q(l, gh, u), K(l, dh, u), q(u, fh), q(u, ph), K(u, dh, u), q(u, gh, u);
	let d = K(n, lh, ih, { [Xp]: !0 });
	q(d, "#"), K(d, lh, d), q(d, mh, d);
	let f = q(d, hh);
	q(f, "#"), K(f, lh, d);
	let p = [[sh, o], [uh, i]], m = [
		[sh, null],
		[ch, s],
		[uh, a]
	];
	for (let e = 0; e < _h.length; e++) Sh(n, _h[e], um, am, p);
	for (let e = 0; e < vh.length; e++) Sh(n, vh[e], dm, om, m);
	tm(um, {
		tld: !0,
		ascii: !0
	}, t), tm(dm, {
		utld: !0,
		alpha: !0
	}, t), Sh(n, "file", fm, am, p), Sh(n, "mailto", fm, am, p), Sh(n, "http", pm, am, p), Sh(n, "https", pm, am, p), Sh(n, "ftp", pm, am, p), Sh(n, "ftps", pm, am, p), tm(fm, {
		scheme: !0,
		ascii: !0
	}, t), tm(pm, {
		slashscheme: !0,
		ascii: !0
	}, t), e = e.sort((e, t) => e[0] > t[0] ? 1 : -1);
	for (let t = 0; t < e.length; t++) {
		let r = e[t][0], i = e[t][1] ? { [Zp]: !0 } : { [Qp]: !0 };
		r.indexOf("-") >= 0 ? i[Yp] = !0 : sh.test(r) ? uh.test(r) ? i[qp] = !0 : i[Gp] = !0 : i[Wp] = !0, im(n, r, r, i);
	}
	return im(n, "localhost", lm, { ascii: !0 }), n.jd = new rm(ah), {
		start: n,
		tokens: Object.assign({ groups: t }, oh)
	};
}
function bh(e, t) {
	let n = xh(t.replace(/[A-Z]/g, (e) => e.toLowerCase())), r = n.length, i = [], a = 0, o = 0;
	for (; o < r;) {
		let s = e, c = null, l = 0, u = null, d = -1, f = -1;
		for (; o < r && (c = s.go(n[o]));) s = c, s.accepts() ? (d = 0, f = 0, u = s) : d >= 0 && (d += n[o].length, f++), l += n[o].length, a += n[o].length, o++;
		a -= d, o -= f, l -= d, i.push({
			t: u.t,
			v: t.slice(a - l, a),
			s: a - l,
			e: a
		});
	}
	return i;
}
function xh(e) {
	let t = [], n = e.length, r = 0;
	for (; r < n;) {
		let i = e.charCodeAt(r), a, o = i < 55296 || i > 56319 || r + 1 === n || (a = e.charCodeAt(r + 1)) < 56320 || a > 57343 ? e[r] : e.slice(r, r + 2);
		t.push(o), r += o.length;
	}
	return t;
}
function Sh(e, t, n, r, i) {
	let a, o = t.length;
	for (let n = 0; n < o - 1; n++) {
		let o = t[n];
		e.j[o] ? a = e.j[o] : (a = new rm(r), a.jr = i.slice(), e.j[o] = a), e = a;
	}
	return a = new rm(n), a.jr = i.slice(), e.j[t[o - 1]] = a, a;
}
function Ch(e) {
	let t = [], n = [], r = 0;
	for (; r < e.length;) {
		let i = 0;
		for (; "0123456789".indexOf(e[r + i]) >= 0;) i++;
		if (i > 0) {
			t.push(n.join(""));
			for (let t = parseInt(e.substring(r, r + i), 10); t > 0; t--) n.pop();
			r += i;
		} else n.push(e[r]), r++;
	}
	return t;
}
var wh = {
	defaultProtocol: "http",
	events: null,
	format: Eh,
	formatHref: Eh,
	nl2br: !1,
	tagName: "a",
	target: null,
	rel: null,
	validate: !0,
	truncate: Infinity,
	className: null,
	attributes: null,
	ignoreTags: [],
	render: null
};
function Th(e, t = null) {
	let n = Object.assign({}, wh);
	e && (n = Object.assign(n, e instanceof Th ? e.o : e));
	let r = n.ignoreTags, i = [];
	for (let e = 0; e < r.length; e++) i.push(r[e].toUpperCase());
	this.o = n, t && (this.defaultRender = t), this.ignoreTags = i;
}
Th.prototype = {
	o: wh,
	ignoreTags: [],
	defaultRender(e) {
		return e;
	},
	check(e) {
		return this.get("validate", e.toString(), e);
	},
	get(e, t, n) {
		let r = t != null, i = this.o[e];
		return i && (typeof i == "object" ? (i = n.t in i ? i[n.t] : wh[e], typeof i == "function" && r && (i = i(t, n))) : typeof i == "function" && r && (i = i(t, n.t, n)), i);
	},
	getObj(e, t, n) {
		let r = this.o[e];
		return typeof r == "function" && t != null && (r = r(t, n.t, n)), r;
	},
	render(e) {
		let t = e.render(this);
		return (this.get("render", null, e) || this.defaultRender)(t, e.t, e);
	}
};
function Eh(e) {
	return e;
}
function Dh(e, t) {
	this.t = "token", this.v = e, this.tk = t;
}
Dh.prototype = {
	isLink: !1,
	toString() {
		return this.v;
	},
	toHref(e) {
		return this.toString();
	},
	toFormattedString(e) {
		let t = this.toString(), n = e.get("truncate", t, this), r = e.get("format", t, this);
		return n && r.length > n ? r.substring(0, n) + "…" : r;
	},
	toFormattedHref(e) {
		return e.get("formatHref", this.toHref(e.get("defaultProtocol")), this);
	},
	startIndex() {
		return this.tk[0].s;
	},
	endIndex() {
		return this.tk[this.tk.length - 1].e;
	},
	toObject(e = wh.defaultProtocol) {
		return {
			type: this.t,
			value: this.toString(),
			isLink: this.isLink,
			href: this.toHref(e),
			start: this.startIndex(),
			end: this.endIndex()
		};
	},
	toFormattedObject(e) {
		return {
			type: this.t,
			value: this.toFormattedString(e),
			isLink: this.isLink,
			href: this.toFormattedHref(e),
			start: this.startIndex(),
			end: this.endIndex()
		};
	},
	validate(e) {
		return e.get("validate", this.toString(), this);
	},
	render(e) {
		let t = this, n = this.toHref(e.get("defaultProtocol")), r = e.get("formatHref", n, this), i = e.get("tagName", n, t), a = this.toFormattedString(e), o = {}, s = e.get("className", n, t), c = e.get("target", n, t), l = e.get("rel", n, t), u = e.getObj("attributes", n, t), d = e.getObj("events", n, t);
		return o.href = r, s && (o.class = s), c && (o.target = c), l && (o.rel = l), u && Object.assign(o, u), {
			tagName: i,
			attributes: o,
			content: a,
			eventListeners: d
		};
	}
};
function Oh(e, t) {
	class n extends Dh {
		constructor(t, n) {
			super(t, n), this.t = e;
		}
	}
	for (let e in t) n.prototype[e] = t[e];
	return n.t = e, n;
}
var kh = Oh("email", {
	isLink: !0,
	toHref() {
		return "mailto:" + this.toString();
	}
}), Ah = Oh("text"), jh = Oh("nl"), Mh = Oh("url", {
	isLink: !0,
	toHref(e = wh.defaultProtocol) {
		return this.hasProtocol() ? this.v : `${e}://${this.v}`;
	},
	hasProtocol() {
		let e = this.tk;
		return e.length >= 2 && e[0].t !== lm && e[1].t === Bm;
	}
}), Nh = (e) => new rm(e);
function Ph({ groups: e }) {
	let t = e.domain.concat([
		Nm,
		Fm,
		Im,
		Lm,
		Rm,
		zm,
		Hm,
		Wm,
		Km,
		mm,
		qm,
		Jm,
		Ym,
		Xm,
		th,
		ah,
		nh,
		rh
	]), n = [
		Pm,
		Bm,
		Vm,
		Um,
		Gm,
		qm,
		Zm,
		Qm,
		eh,
		Cm,
		wm,
		_m,
		vm,
		bm,
		ym,
		xm,
		Sm,
		Tm,
		Em,
		Dm,
		Om,
		km,
		Am,
		jm,
		Mm
	], r = [
		Nm,
		Pm,
		Fm,
		Lm,
		Rm,
		zm,
		Hm,
		Wm,
		Km,
		_m,
		vm,
		qm,
		Jm,
		Ym,
		Xm,
		Zm,
		th,
		ah,
		nh,
		rh
	], i = Nh(), a = q(i, nh);
	G(a, r, a), G(a, e.domain, a);
	let o = Nh(), s = Nh(), c = Nh();
	G(i, e.domain, o), G(i, e.scheme, s), G(i, e.slashscheme, c), G(o, r, a), G(o, e.domain, o);
	let l = q(o, Im);
	q(a, Im, l), q(s, Im, l), q(c, Im, l);
	let u = q(a, Um);
	G(u, r, a), G(u, e.domain, a);
	let d = Nh();
	G(l, e.domain, d), G(d, e.domain, d);
	let f = q(d, Um);
	G(f, e.domain, d);
	let p = Nh(kh);
	G(f, e.tld, p), G(f, e.utld, p), q(l, lm, p);
	let m = q(d, Km);
	q(m, Km, m), G(m, e.domain, d), G(p, e.domain, d), q(p, Um, f), q(p, Km, m), G(q(p, Bm), e.numeric, kh);
	let h = q(o, Km), g = q(o, Um);
	q(h, Km, h), G(h, e.domain, o), G(g, r, a), G(g, e.domain, o);
	let _ = Nh(Mh);
	G(g, e.tld, _), G(g, e.utld, _), G(_, e.domain, o), G(_, r, a), q(_, Um, g), q(_, Km, h), q(_, Im, l);
	let ee = q(_, Bm), v = Nh(Mh);
	G(ee, e.numeric, v);
	let y = Nh(Mh), b = Nh();
	G(y, t, y), G(y, n, b), G(b, t, y), G(b, n, b), q(_, th, y), q(v, th, y);
	let x = q(s, Bm), te = q(q(q(c, Bm), th), th);
	G(s, e.domain, o), q(s, Um, g), q(s, Km, h), G(c, e.domain, o), q(c, Um, g), q(c, Km, h), G(x, e.domain, y), q(x, th, y), q(x, Zm, y), G(te, e.domain, y), G(te, t, y), q(te, th, y);
	let ne = [
		[_m, vm],
		[ym, bm],
		[xm, Sm],
		[Cm, wm],
		[Tm, Em],
		[Dm, Om],
		[km, Am],
		[jm, Mm]
	];
	for (let e = 0; e < ne.length; e++) {
		let [r, i] = ne[e], a = q(y, r);
		q(b, r, a), q(a, i, y);
		let o = Nh(Mh);
		G(a, t, o);
		let s = Nh();
		G(a, n), G(o, t, o), G(o, n, s), G(s, t, o), G(s, n, s), q(o, i, y), q(s, i, y);
	}
	return q(i, lm, _), q(i, gm, jh), {
		start: i,
		tokens: oh
	};
}
function Fh(e, t, n) {
	let r = n.length, i = 0, a = [], o = [];
	for (; i < r;) {
		let s = e, c = null, l = null, u = 0, d = null, f = -1;
		for (; i < r && !(c = s.go(n[i].t));) o.push(n[i++]);
		for (; i < r && (l = c || s.go(n[i].t));) c = null, s = l, s.accepts() ? (f = 0, d = s) : f >= 0 && f++, i++, u++;
		if (f < 0) i -= u, i < r && (o.push(n[i]), i++);
		else {
			o.length > 0 && (a.push(Ih(Ah, t, o)), o = []), i -= f, u -= f;
			let e = d.t, r = n.slice(i - u, i);
			a.push(Ih(e, t, r));
		}
	}
	return o.length > 0 && a.push(Ih(Ah, t, o)), a;
}
function Ih(e, t, n) {
	let r = n[0].s, i = n[n.length - 1].e;
	return new e(t.slice(r, i), n);
}
var Lh = typeof console < "u" && console && console.warn || (() => {}), Rh = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.", J = {
	scanner: null,
	parser: null,
	tokenQueue: [],
	pluginQueue: [],
	customSchemes: [],
	initialized: !1
};
function zh() {
	return rm.groups = {}, J.scanner = null, J.parser = null, J.tokenQueue = [], J.pluginQueue = [], J.customSchemes = [], J.initialized = !1, J;
}
function Bh(e, t = !1) {
	if (J.initialized && Lh(`linkifyjs: already initialized - will not register custom scheme "${e}" ${Rh}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(e)) throw Error("linkifyjs: incorrect scheme format.\n1. Must only contain digits, lowercase ASCII letters or \"-\"\n2. Cannot start or end with \"-\"\n3. \"-\" cannot repeat");
	J.customSchemes.push([e, t]);
}
function Vh() {
	J.scanner = yh(J.customSchemes);
	for (let e = 0; e < J.tokenQueue.length; e++) J.tokenQueue[e][1]({ scanner: J.scanner });
	J.parser = Ph(J.scanner.tokens);
	for (let e = 0; e < J.pluginQueue.length; e++) J.pluginQueue[e][1]({
		scanner: J.scanner,
		parser: J.parser
	});
	return J.initialized = !0, J;
}
function Hh(e) {
	return J.initialized || Vh(), Fh(J.parser.start, e, bh(J.scanner.start, e));
}
Hh.scan = bh;
function Uh(e, t = null, n = null) {
	if (t && typeof t == "object") {
		if (n) throw Error(`linkifyjs: Invalid link type ${t}; must be a string`);
		n = t, t = null;
	}
	let r = new Th(n), i = Hh(e), a = [];
	for (let e = 0; e < i.length; e++) {
		let n = i[e];
		n.isLink && (!t || n.t === t) && r.check(n) && a.push(n.toFormattedObject(r));
	}
	return a;
}
var Wh = "[\0- \xA0 ᠎ -\u2029 　]", Gh = new RegExp(Wh), Kh = RegExp(`${Wh}$`), qh = new RegExp(Wh, "g");
function Jh(e) {
	return e.length === 1 ? e[0].isLink : e.length === 3 && e[1].isLink ? ["()", "[]"].includes(e[0].value + e[2].value) : !1;
}
function Yh(e) {
	return new A({
		key: new j("autolink"),
		appendTransaction: (t, n, r) => {
			let i = t.some((e) => e.docChanged) && !n.doc.eq(r.doc), a = t.some((e) => e.getMeta("preventAutolink"));
			if (!i || a) return;
			let { tr: o } = r;
			if (du(Rl(n.doc, [...t])).forEach(({ newRange: t }) => {
				let n = Bl(r.doc, t, (e) => e.isTextblock), i, a;
				if (n.length > 1) i = n[0], a = r.doc.textBetween(i.pos, i.pos + i.node.nodeSize, void 0, " ");
				else if (n.length) {
					let e = r.doc.textBetween(t.from, t.to, " ", " ");
					if (!Kh.test(e)) return;
					i = n[0], a = r.doc.textBetween(i.pos, t.to, void 0, " ");
				}
				if (i && a) {
					let t = a.split(Gh).filter(Boolean);
					if (t.length <= 0) return !1;
					let n = t[t.length - 1], s = i.pos + a.lastIndexOf(n);
					if (!n) return !1;
					let c = Hh(n).map((t) => t.toObject(e.defaultProtocol));
					if (!Jh(c)) return !1;
					c.filter((e) => e.isLink).map((e) => ({
						...e,
						from: s + e.start + 1,
						to: s + e.end + 1
					})).filter((e) => r.schema.marks.code ? !r.doc.rangeHasMark(e.from, e.to, r.schema.marks.code) : !0).filter((t) => e.validate(t.value)).filter((t) => e.shouldAutoLink(t.value)).forEach((t) => {
						fu(t.from, t.to, r.doc).some((t) => t.mark.type === e.type) || o.addMark(t.from, t.to, e.type.create({ href: t.href }));
					});
				}
			}), o.steps.length) return o;
		}
	});
}
function Xh(e) {
	return new A({
		key: new j("handleClickLink"),
		props: { handleClick: (t, n, r) => {
			if (r.button !== 0 || !t.editable) return !1;
			let i = null;
			if (r.target instanceof HTMLAnchorElement) i = r.target;
			else {
				let t = r.target;
				if (!t) return !1;
				let n = e.editor.view.dom;
				i = t.closest("a"), i && !n.contains(i) && (i = null);
			}
			if (!i) return !1;
			let a = !1;
			if (e.enableClickSelection && (a = e.editor.commands.extendMarkRange(e.type.name)), e.openOnClick) {
				let n = cu(t.state, e.type.name), r = i.href ?? n.href, o = i.target ?? n.target;
				r && (window.open(r, o), a = !0);
			}
			return a;
		} }
	});
}
function Zh(e) {
	return new A({
		key: new j("handlePasteLink"),
		props: { handlePaste: (t, n, r) => {
			let { shouldAutoLink: i } = e, { state: a } = t, { selection: o } = a, { empty: s } = o;
			if (s) return !1;
			let c = "";
			r.content.forEach((e) => {
				c += e.textContent;
			});
			let l = Uh(c, { defaultProtocol: e.defaultProtocol }).find((e) => e.isLink && e.value === c);
			return !c || !l || i !== void 0 && !i(l.value) ? !1 : e.editor.commands.setMark(e.type, { href: l.href });
		} }
	});
}
function Qh(e, t) {
	let n = [
		"http",
		"https",
		"ftp",
		"ftps",
		"mailto",
		"tel",
		"callto",
		"sms",
		"cid",
		"xmpp"
	];
	return t && t.forEach((e) => {
		let t = typeof e == "string" ? e : e.scheme;
		t && n.push(t);
	}), !e || e.replace(qh, "").match(RegExp(`^(?:(?:${n.join("|")}):|[^a-z]|[a-z0-9+.-]+(?:[^a-z+.-:]|$))`, "i"));
}
var $h = sd.create({
	name: "link",
	priority: 1e3,
	keepOnSplit: !1,
	exitable: !0,
	onCreate() {
		this.options.validate && !this.options.shouldAutoLink && (this.options.shouldAutoLink = this.options.validate, console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.")), this.options.protocols.forEach((e) => {
			if (typeof e == "string") {
				Bh(e);
				return;
			}
			Bh(e.scheme, e.optionalSlashes);
		});
	},
	onDestroy() {
		zh();
	},
	inclusive() {
		return this.options.autolink;
	},
	addOptions() {
		return {
			openOnClick: !0,
			enableClickSelection: !1,
			linkOnPaste: !0,
			autolink: !0,
			protocols: [],
			defaultProtocol: "http",
			HTMLAttributes: {
				target: "_blank",
				rel: "noopener noreferrer nofollow",
				class: null
			},
			isAllowedUri: (e, t) => !!Qh(e, t.protocols),
			validate: (e) => !!e,
			shouldAutoLink: (e) => {
				let t = /^[a-z][a-z0-9+.-]*:\/\//i.test(e), n = /^[a-z][a-z0-9+.-]*:/i.test(e);
				if (t || n && !e.includes("@")) return !0;
				let r = (e.includes("@") ? e.split("@").pop() : e).split(/[/?#:]/)[0];
				return !(/^\d{1,3}(\.\d{1,3}){3}$/.test(r) || !/\./.test(r));
			}
		};
	},
	addAttributes() {
		return {
			href: {
				default: null,
				parseHTML(e) {
					return e.getAttribute("href");
				}
			},
			target: { default: this.options.HTMLAttributes.target },
			rel: { default: this.options.HTMLAttributes.rel },
			class: { default: this.options.HTMLAttributes.class },
			title: { default: null }
		};
	},
	parseHTML() {
		return [{
			tag: "a[href]",
			getAttrs: (e) => {
				let t = e.getAttribute("href");
				return !t || !this.options.isAllowedUri(t, {
					defaultValidate: (e) => !!Qh(e, this.options.protocols),
					protocols: this.options.protocols,
					defaultProtocol: this.options.defaultProtocol
				}) ? !1 : null;
			}
		}];
	},
	renderHTML({ HTMLAttributes: e }) {
		return this.options.isAllowedUri(e.href, {
			defaultValidate: (e) => !!Qh(e, this.options.protocols),
			protocols: this.options.protocols,
			defaultProtocol: this.options.defaultProtocol
		}) ? [
			"a",
			H(this.options.HTMLAttributes, e),
			0
		] : [
			"a",
			H(this.options.HTMLAttributes, {
				...e,
				href: ""
			}),
			0
		];
	},
	markdownTokenName: "link",
	parseMarkdown: (e, t) => t.applyMark("link", t.parseInline(e.tokens || []), {
		href: e.href,
		title: e.title || null
	}),
	renderMarkdown: (e, t) => {
		let n = e.attrs?.href ?? "", r = e.attrs?.title ?? "", i = t.renderChildren(e);
		return r ? `[${i}](${n} "${r}")` : `[${i}](${n})`;
	},
	addCommands() {
		return {
			setLink: (e) => ({ chain: t }) => {
				let { href: n } = e;
				return this.options.isAllowedUri(n, {
					defaultValidate: (e) => !!Qh(e, this.options.protocols),
					protocols: this.options.protocols,
					defaultProtocol: this.options.defaultProtocol
				}) ? t().setMark(this.name, e).setMeta("preventAutolink", !0).run() : !1;
			},
			toggleLink: (e) => ({ chain: t }) => {
				let { href: n } = e || {};
				return n && !this.options.isAllowedUri(n, {
					defaultValidate: (e) => !!Qh(e, this.options.protocols),
					protocols: this.options.protocols,
					defaultProtocol: this.options.defaultProtocol
				}) ? !1 : t().toggleMark(this.name, e, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run();
			},
			unsetLink: () => ({ chain: e }) => e().unsetMark(this.name, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run()
		};
	},
	addPasteRules() {
		return [Jd({
			find: (e) => {
				let t = [];
				if (e) {
					let { protocols: n, defaultProtocol: r } = this.options, i = Uh(e).filter((e) => e.isLink && this.options.isAllowedUri(e.value, {
						defaultValidate: (e) => !!Qh(e, n),
						protocols: n,
						defaultProtocol: r
					}));
					i.length && i.forEach((e) => {
						this.options.shouldAutoLink(e.value) && t.push({
							text: e.value,
							data: { href: e.href },
							index: e.start
						});
					});
				}
				return t;
			},
			type: this.type,
			getAttributes: (e) => ({ href: e.data?.href })
		})];
	},
	addProseMirrorPlugins() {
		let e = [], { protocols: t, defaultProtocol: n } = this.options;
		return this.options.autolink && e.push(Yh({
			type: this.type,
			defaultProtocol: this.options.defaultProtocol,
			validate: (e) => this.options.isAllowedUri(e, {
				defaultValidate: (e) => !!Qh(e, t),
				protocols: t,
				defaultProtocol: n
			}),
			shouldAutoLink: this.options.shouldAutoLink
		})), e.push(Xh({
			type: this.type,
			editor: this.editor,
			openOnClick: this.options.openOnClick === "whenNotEditable" ? !0 : this.options.openOnClick,
			enableClickSelection: this.options.enableClickSelection
		})), this.options.linkOnPaste && e.push(Zh({
			editor: this.editor,
			defaultProtocol: this.options.defaultProtocol,
			type: this.type,
			shouldAutoLink: this.options.shouldAutoLink
		})), e;
	}
}), eg = Object.defineProperty, tg = (e, t) => {
	for (var n in t) eg(e, n, {
		get: t[n],
		enumerable: !0
	});
}, ng = "listItem", rg = "textStyle", ig = /^\s*([-+*])\s$/, ag = W.create({
	name: "bulletList",
	addOptions() {
		return {
			itemTypeName: "listItem",
			HTMLAttributes: {},
			keepMarks: !1,
			keepAttributes: !1
		};
	},
	group: "block list",
	content() {
		return `${this.options.itemTypeName}+`;
	},
	parseHTML() {
		return [{ tag: "ul" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"ul",
			H(this.options.HTMLAttributes, e),
			0
		];
	},
	markdownTokenName: "list",
	parseMarkdown: (e, t) => e.type !== "list" || e.ordered ? [] : {
		type: "bulletList",
		content: e.items ? t.parseChildren(e.items) : []
	},
	renderMarkdown: (e, t) => e.content ? t.renderChildren(e.content, "\n") : "",
	markdownOptions: { indentsContent: !0 },
	addCommands() {
		return { toggleBulletList: () => ({ commands: e, chain: t }) => this.options.keepAttributes ? t().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(ng, this.editor.getAttributes(rg)).run() : e.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks) };
	},
	addKeyboardShortcuts() {
		return { "Mod-Shift-8": () => this.editor.commands.toggleBulletList() };
	},
	addInputRules() {
		let e = Pd({
			find: ig,
			type: this.type
		});
		return (this.options.keepMarks || this.options.keepAttributes) && (e = Pd({
			find: ig,
			type: this.type,
			keepMarks: this.options.keepMarks,
			keepAttributes: this.options.keepAttributes,
			getAttributes: () => this.editor.getAttributes(rg),
			editor: this.editor
		})), [e];
	}
}), og = W.create({
	name: "listItem",
	addOptions() {
		return {
			HTMLAttributes: {},
			bulletListTypeName: "bulletList",
			orderedListTypeName: "orderedList"
		};
	},
	content: "paragraph block*",
	defining: !0,
	parseHTML() {
		return [{ tag: "li" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"li",
			H(this.options.HTMLAttributes, e),
			0
		];
	},
	markdownTokenName: "list_item",
	parseMarkdown: (e, t) => {
		if (e.type !== "list_item") return [];
		let n = [];
		if (e.tokens && e.tokens.length > 0) if (e.tokens.some((e) => e.type === "paragraph")) n = t.parseChildren(e.tokens);
		else {
			let r = e.tokens[0];
			if (r && r.type === "text" && r.tokens && r.tokens.length > 0) {
				if (n = [{
					type: "paragraph",
					content: t.parseInline(r.tokens)
				}], e.tokens.length > 1) {
					let r = e.tokens.slice(1), i = t.parseChildren(r);
					n.push(...i);
				}
			} else n = t.parseChildren(e.tokens);
		}
		return n.length === 0 && (n = [{
			type: "paragraph",
			content: []
		}]), {
			type: "listItem",
			content: n
		};
	},
	renderMarkdown: (e, t, n) => Kd(e, t, (e) => e.parentType === "bulletList" ? "- " : e.parentType === "orderedList" ? `${(e.meta?.parentAttrs?.start || 1) + e.index}. ` : "- ", n),
	addKeyboardShortcuts() {
		return {
			Enter: () => this.editor.commands.splitListItem(this.name),
			Tab: () => this.editor.commands.sinkListItem(this.name),
			"Shift-Tab": () => this.editor.commands.liftListItem(this.name)
		};
	}
});
tg({}, {
	findListItemPos: () => sg,
	getNextListDepth: () => cg,
	handleBackspace: () => fg,
	handleDelete: () => hg,
	hasListBefore: () => lg,
	hasListItemAfter: () => gg,
	hasListItemBefore: () => ug,
	listItemHasSubList: () => dg,
	nextListIsDeeper: () => pg,
	nextListIsHigher: () => mg
});
var sg = (e, t) => {
	let { $from: n } = t.selection, r = z(e, t.schema), i = null, a = n.depth, o = n.pos, s = null;
	for (; a > 0 && s === null;) i = n.node(a), i.type === r ? s = a : (--a, --o);
	return s === null ? null : {
		$pos: t.doc.resolve(o),
		depth: s
	};
}, cg = (e, t) => {
	let n = sg(e, t);
	if (!n) return !1;
	let [, r] = pu(t, e, n.$pos.pos + 4);
	return r;
}, lg = (e, t, n) => {
	let { $anchor: r } = e.selection, i = Math.max(0, r.pos - 2), a = e.doc.resolve(i).node();
	return !(!a || !n.includes(a.type.name));
}, ug = (e, t) => {
	let { $anchor: n } = t.selection, r = t.doc.resolve(n.pos - 2);
	return !(r.index() === 0 || r.nodeBefore?.type.name !== e);
}, dg = (e, t, n) => {
	if (!n) return !1;
	let r = z(e, t.schema), i = !1;
	return n.descendants((e) => {
		e.type === r && (i = !0);
	}), i;
}, fg = (e, t, n) => {
	if (e.commands.undoInputRule()) return !0;
	if (e.state.selection.from !== e.state.selection.to) return !1;
	if (!bl(e.state, t) && lg(e.state, t, n)) {
		let { $anchor: n } = e.state.selection, r = e.state.doc.resolve(n.before() - 1), i = [];
		r.node().descendants((e, n) => {
			e.type.name === t && i.push({
				node: e,
				pos: n
			});
		});
		let a = i.at(-1);
		if (!a) return !1;
		let o = e.state.doc.resolve(r.start() + a.pos + 1);
		return e.chain().cut({
			from: n.start() - 1,
			to: n.end() + 1
		}, o.end()).joinForward().run();
	}
	if (!bl(e.state, t) || !bu(e.state)) return !1;
	let r = sg(t, e.state);
	if (!r) return !1;
	let i = e.state.doc.resolve(r.$pos.pos - 2).node(r.depth), a = dg(t, e.state, i);
	return ug(t, e.state) && !a ? e.commands.joinItemBackward() : e.chain().liftListItem(t).run();
}, pg = (e, t) => {
	let n = cg(e, t), r = sg(e, t);
	return !r || !n ? !1 : n > r.depth;
}, mg = (e, t) => {
	let n = cg(e, t), r = sg(e, t);
	return !r || !n ? !1 : n < r.depth;
}, hg = (e, t) => {
	if (!bl(e.state, t) || !yu(e.state, t)) return !1;
	let { selection: n } = e.state, { $from: r, $to: i } = n;
	return !n.empty && r.sameParent(i) ? !1 : pg(t, e.state) ? e.chain().focus(e.state.selection.from + 4).lift(t).joinBackward().run() : mg(t, e.state) ? e.chain().joinForward().joinBackward().run() : e.commands.joinItemForward();
}, gg = (e, t) => {
	let { $anchor: n } = t.selection, r = t.doc.resolve(n.pos - n.parentOffset - 2);
	return !(r.index() === r.parent.childCount - 1 || r.nodeAfter?.type.name !== e);
}, _g = U.create({
	name: "listKeymap",
	addOptions() {
		return { listTypes: [{
			itemName: "listItem",
			wrapperNames: ["bulletList", "orderedList"]
		}, {
			itemName: "taskItem",
			wrapperNames: ["taskList"]
		}] };
	},
	addKeyboardShortcuts() {
		return {
			Delete: ({ editor: e }) => {
				let t = !1;
				return this.options.listTypes.forEach(({ itemName: n }) => {
					e.state.schema.nodes[n] !== void 0 && hg(e, n) && (t = !0);
				}), t;
			},
			"Mod-Delete": ({ editor: e }) => {
				let t = !1;
				return this.options.listTypes.forEach(({ itemName: n }) => {
					e.state.schema.nodes[n] !== void 0 && hg(e, n) && (t = !0);
				}), t;
			},
			Backspace: ({ editor: e }) => {
				let t = !1;
				return this.options.listTypes.forEach(({ itemName: n, wrapperNames: r }) => {
					e.state.schema.nodes[n] !== void 0 && fg(e, n, r) && (t = !0);
				}), t;
			},
			"Mod-Backspace": ({ editor: e }) => {
				let t = !1;
				return this.options.listTypes.forEach(({ itemName: n, wrapperNames: r }) => {
					e.state.schema.nodes[n] !== void 0 && fg(e, n, r) && (t = !0);
				}), t;
			}
		};
	}
}), vg = /^(\s*)(\d+)\.\s+(.*)$/, yg = /^\s/;
function bg(e) {
	let t = [], n = 0, r = 0;
	for (; n < e.length;) {
		let i = e[n], a = i.match(vg);
		if (!a) break;
		let [, o, s, c] = a, l = o.length, u = c, d = n + 1, f = [i];
		for (; d < e.length;) {
			let t = e[d];
			if (t.match(vg)) break;
			if (t.trim() === "") f.push(t), u += "\n", d += 1;
			else if (t.match(yg)) f.push(t), u += `
${t.slice(l + 2)}`, d += 1;
			else break;
		}
		t.push({
			indent: l,
			number: parseInt(s, 10),
			content: u.trim(),
			raw: f.join("\n")
		}), r = d, n = d;
	}
	return [t, r];
}
function xg(e, t, n) {
	let r = [], i = 0;
	for (; i < e.length;) {
		let a = e[i];
		if (a.indent === t) {
			let o = a.content.split("\n"), s = o[0]?.trim() || "", c = [];
			s && c.push({
				type: "paragraph",
				raw: s,
				tokens: n.inlineTokens(s)
			});
			let l = o.slice(1).join("\n").trim();
			if (l) {
				let e = n.blockTokens(l);
				c.push(...e);
			}
			let u = i + 1, d = [];
			for (; u < e.length && e[u].indent > t;) d.push(e[u]), u += 1;
			if (d.length > 0) {
				let e = xg(d, Math.min(...d.map((e) => e.indent)), n);
				c.push({
					type: "list",
					ordered: !0,
					start: d[0].number,
					items: e,
					raw: d.map((e) => e.raw).join("\n")
				});
			}
			r.push({
				type: "list_item",
				raw: a.raw,
				tokens: c
			}), i = u;
		} else i += 1;
	}
	return r;
}
function Sg(e, t) {
	return e.map((e) => {
		if (e.type !== "list_item") return t.parseChildren([e])[0];
		let n = [];
		return e.tokens && e.tokens.length > 0 && e.tokens.forEach((e) => {
			if (e.type === "paragraph" || e.type === "list" || e.type === "blockquote" || e.type === "code") n.push(...t.parseChildren([e]));
			else if (e.type === "text" && e.tokens) {
				let r = t.parseChildren([e]);
				n.push({
					type: "paragraph",
					content: r
				});
			} else {
				let r = t.parseChildren([e]);
				r.length > 0 && n.push(...r);
			}
		}), {
			type: "listItem",
			content: n
		};
	});
}
var Cg = "listItem", wg = "textStyle", Tg = /^(\d+)\.\s$/, Eg = W.create({
	name: "orderedList",
	addOptions() {
		return {
			itemTypeName: "listItem",
			HTMLAttributes: {},
			keepMarks: !1,
			keepAttributes: !1
		};
	},
	group: "block list",
	content() {
		return `${this.options.itemTypeName}+`;
	},
	addAttributes() {
		return {
			start: {
				default: 1,
				parseHTML: (e) => e.hasAttribute("start") ? parseInt(e.getAttribute("start") || "", 10) : 1
			},
			type: {
				default: null,
				parseHTML: (e) => e.getAttribute("type")
			}
		};
	},
	parseHTML() {
		return [{ tag: "ol" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		let { start: t, ...n } = e;
		return t === 1 ? [
			"ol",
			H(this.options.HTMLAttributes, n),
			0
		] : [
			"ol",
			H(this.options.HTMLAttributes, e),
			0
		];
	},
	markdownTokenName: "list",
	parseMarkdown: (e, t) => {
		if (e.type !== "list" || !e.ordered) return [];
		let n = e.start || 1, r = e.items ? Sg(e.items, t) : [];
		return n === 1 ? {
			type: "orderedList",
			content: r
		} : {
			type: "orderedList",
			attrs: { start: n },
			content: r
		};
	},
	renderMarkdown: (e, t) => e.content ? t.renderChildren(e.content, "\n") : "",
	markdownTokenizer: {
		name: "orderedList",
		level: "block",
		start: (e) => {
			let t = e.match(/^(\s*)(\d+)\.\s+/)?.index;
			return t === void 0 ? -1 : t;
		},
		tokenize: (e, t, n) => {
			let r = e.split("\n"), [i, a] = bg(r);
			if (i.length === 0) return;
			let o = xg(i, 0, n);
			if (o.length !== 0) return {
				type: "list",
				ordered: !0,
				start: i[0]?.number || 1,
				items: o,
				raw: r.slice(0, a).join("\n")
			};
		}
	},
	markdownOptions: { indentsContent: !0 },
	addCommands() {
		return { toggleOrderedList: () => ({ commands: e, chain: t }) => this.options.keepAttributes ? t().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(Cg, this.editor.getAttributes(wg)).run() : e.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks) };
	},
	addKeyboardShortcuts() {
		return { "Mod-Shift-7": () => this.editor.commands.toggleOrderedList() };
	},
	addInputRules() {
		let e = Pd({
			find: Tg,
			type: this.type,
			getAttributes: (e) => ({ start: +e[1] }),
			joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1]
		});
		return (this.options.keepMarks || this.options.keepAttributes) && (e = Pd({
			find: Tg,
			type: this.type,
			keepMarks: this.options.keepMarks,
			keepAttributes: this.options.keepAttributes,
			getAttributes: (e) => ({
				start: +e[1],
				...this.editor.getAttributes(wg)
			}),
			joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1],
			editor: this.editor
		})), [e];
	}
}), Dg = /^\s*(\[([( |x])?\])\s$/, Og = W.create({
	name: "taskItem",
	addOptions() {
		return {
			nested: !1,
			HTMLAttributes: {},
			taskListTypeName: "taskList",
			a11y: void 0
		};
	},
	content() {
		return this.options.nested ? "paragraph block*" : "paragraph+";
	},
	defining: !0,
	addAttributes() {
		return { checked: {
			default: !1,
			keepOnSplit: !1,
			parseHTML: (e) => {
				let t = e.getAttribute("data-checked");
				return t === "" || t === "true";
			},
			renderHTML: (e) => ({ "data-checked": e.checked })
		} };
	},
	parseHTML() {
		return [{
			tag: `li[data-type="${this.name}"]`,
			priority: 51
		}];
	},
	renderHTML({ node: e, HTMLAttributes: t }) {
		return [
			"li",
			H(this.options.HTMLAttributes, t, { "data-type": this.name }),
			[
				"label",
				["input", {
					type: "checkbox",
					checked: e.attrs.checked ? "checked" : null
				}],
				["span"]
			],
			["div", 0]
		];
	},
	parseMarkdown: (e, t) => {
		let n = [];
		if (e.tokens && e.tokens.length > 0 ? n.push(t.createNode("paragraph", {}, t.parseInline(e.tokens))) : e.text ? n.push(t.createNode("paragraph", {}, [t.createNode("text", { text: e.text })])) : n.push(t.createNode("paragraph", {}, [])), e.nestedTokens && e.nestedTokens.length > 0) {
			let r = t.parseChildren(e.nestedTokens);
			n.push(...r);
		}
		return t.createNode("taskItem", { checked: e.checked || !1 }, n);
	},
	renderMarkdown: (e, t) => Kd(e, t, `- [${e.attrs?.checked ? "x" : " "}] `),
	addKeyboardShortcuts() {
		let e = {
			Enter: () => this.editor.commands.splitListItem(this.name),
			"Shift-Tab": () => this.editor.commands.liftListItem(this.name)
		};
		return this.options.nested ? {
			...e,
			Tab: () => this.editor.commands.sinkListItem(this.name)
		} : e;
	},
	addNodeView() {
		return ({ node: e, HTMLAttributes: t, getPos: n, editor: r }) => {
			let i = document.createElement("li"), a = document.createElement("label"), o = document.createElement("span"), s = document.createElement("input"), c = document.createElement("div"), l = (e) => {
				var t;
				s.ariaLabel = ((t = this.options.a11y)?.checkboxLabel)?.call(t, e, s.checked) || `Task item checkbox for ${e.textContent || "empty task item"}`;
			};
			l(e), a.contentEditable = "false", s.type = "checkbox", s.addEventListener("mousedown", (e) => e.preventDefault()), s.addEventListener("change", (t) => {
				if (!r.isEditable && !this.options.onReadOnlyChecked) {
					s.checked = !s.checked;
					return;
				}
				let { checked: i } = t.target;
				r.isEditable && typeof n == "function" && r.chain().focus(void 0, { scrollIntoView: !1 }).command(({ tr: e }) => {
					let t = n();
					if (typeof t != "number") return !1;
					let r = e.doc.nodeAt(t);
					return e.setNodeMarkup(t, void 0, {
						...r?.attrs,
						checked: i
					}), !0;
				}).run(), !r.isEditable && this.options.onReadOnlyChecked && (this.options.onReadOnlyChecked(e, i) || (s.checked = !s.checked));
			}), Object.entries(this.options.HTMLAttributes).forEach(([e, t]) => {
				i.setAttribute(e, t);
			}), i.dataset.checked = e.attrs.checked, s.checked = e.attrs.checked, a.append(s, o), i.append(a, c), Object.entries(t).forEach(([e, t]) => {
				i.setAttribute(e, t);
			});
			let u = new Set(Object.keys(t));
			return {
				dom: i,
				contentDOM: c,
				update: (e) => {
					if (e.type !== this.type) return !1;
					i.dataset.checked = e.attrs.checked, s.checked = e.attrs.checked, l(e);
					let t = r.extensionManager.attributes, n = Yl(e, t), a = new Set(Object.keys(n)), o = this.options.HTMLAttributes;
					return u.forEach((e) => {
						a.has(e) || (e in o ? i.setAttribute(e, o[e]) : i.removeAttribute(e));
					}), Object.entries(n).forEach(([e, t]) => {
						t == null ? e in o ? i.setAttribute(e, o[e]) : i.removeAttribute(e) : i.setAttribute(e, t);
					}), u = a, !0;
				}
			};
		};
	},
	addInputRules() {
		return [Pd({
			find: Dg,
			type: this.type,
			getAttributes: (e) => ({ checked: e[e.length - 1] === "x" })
		})];
	}
}), kg = W.create({
	name: "taskList",
	addOptions() {
		return {
			itemTypeName: "taskItem",
			HTMLAttributes: {}
		};
	},
	group: "block list",
	content() {
		return `${this.options.itemTypeName}+`;
	},
	parseHTML() {
		return [{
			tag: `ul[data-type="${this.name}"]`,
			priority: 51
		}];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"ul",
			H(this.options.HTMLAttributes, e, { "data-type": this.name }),
			0
		];
	},
	parseMarkdown: (e, t) => t.createNode("taskList", {}, t.parseChildren(e.items || [])),
	renderMarkdown: (e, t) => e.content ? t.renderChildren(e.content, "\n") : "",
	markdownTokenizer: {
		name: "taskList",
		level: "block",
		start(e) {
			let t = e.match(/^\s*[-+*]\s+\[([ xX])\]\s+/)?.index;
			return t === void 0 ? -1 : t;
		},
		tokenize(e, t, n) {
			let r = (e) => {
				let t = Gd(e, {
					itemPattern: /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,
					extractItemData: (e) => ({
						indentLevel: e[1].length,
						mainContent: e[4],
						checked: e[3].toLowerCase() === "x"
					}),
					createToken: (e, t) => ({
						type: "taskItem",
						raw: "",
						mainContent: e.mainContent,
						indentLevel: e.indentLevel,
						checked: e.checked,
						text: e.mainContent,
						tokens: n.inlineTokens(e.mainContent),
						nestedTokens: t
					}),
					customNestedParser: r
				}, n);
				return t ? [{
					type: "taskList",
					raw: t.raw,
					items: t.items
				}] : n.blockTokens(e);
			}, i = Gd(e, {
				itemPattern: /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,
				extractItemData: (e) => ({
					indentLevel: e[1].length,
					mainContent: e[4],
					checked: e[3].toLowerCase() === "x"
				}),
				createToken: (e, t) => ({
					type: "taskItem",
					raw: "",
					mainContent: e.mainContent,
					indentLevel: e.indentLevel,
					checked: e.checked,
					text: e.mainContent,
					tokens: n.inlineTokens(e.mainContent),
					nestedTokens: t
				}),
				customNestedParser: r
			}, n);
			if (i) return {
				type: "taskList",
				raw: i.raw,
				items: i.items
			};
		}
	},
	markdownOptions: { indentsContent: !0 },
	addCommands() {
		return { toggleTaskList: () => ({ commands: e }) => e.toggleList(this.name, this.options.itemTypeName) };
	},
	addKeyboardShortcuts() {
		return { "Mod-Shift-9": () => this.editor.commands.toggleTaskList() };
	}
});
U.create({
	name: "listKit",
	addExtensions() {
		let e = [];
		return this.options.bulletList !== !1 && e.push(ag.configure(this.options.bulletList)), this.options.listItem !== !1 && e.push(og.configure(this.options.listItem)), this.options.listKeymap !== !1 && e.push(_g.configure(this.options.listKeymap)), this.options.orderedList !== !1 && e.push(Eg.configure(this.options.orderedList)), this.options.taskItem !== !1 && e.push(Og.configure(this.options.taskItem)), this.options.taskList !== !1 && e.push(kg.configure(this.options.taskList)), e;
	}
});
var Ag = "&nbsp;", jg = "\xA0", Mg = W.create({
	name: "paragraph",
	priority: 1e3,
	addOptions() {
		return { HTMLAttributes: {} };
	},
	group: "block",
	content: "inline*",
	parseHTML() {
		return [{ tag: "p" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"p",
			H(this.options.HTMLAttributes, e),
			0
		];
	},
	parseMarkdown: (e, t) => {
		let n = e.tokens || [];
		if (n.length === 1 && n[0].type === "image") return t.parseChildren([n[0]]);
		let r = t.parseInline(n);
		return r.length === 1 && r[0].type === "text" && (r[0].text === Ag || r[0].text === jg) ? t.createNode("paragraph", void 0, []) : t.createNode("paragraph", void 0, r);
	},
	renderMarkdown: (e, t) => {
		if (!e) return "";
		let n = Array.isArray(e.content) ? e.content : [];
		return n.length === 0 ? Ag : t.renderChildren(n);
	},
	addCommands() {
		return { setParagraph: () => ({ commands: e }) => e.setNode(this.name) };
	},
	addKeyboardShortcuts() {
		return { "Mod-Alt-0": () => this.editor.commands.setParagraph() };
	}
}), Ng = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/, Pg = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g, Fg = sd.create({
	name: "strike",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	parseHTML() {
		return [
			{ tag: "s" },
			{ tag: "del" },
			{ tag: "strike" },
			{
				style: "text-decoration",
				consuming: !1,
				getAttrs: (e) => e.includes("line-through") ? {} : !1
			}
		];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"s",
			H(this.options.HTMLAttributes, e),
			0
		];
	},
	markdownTokenName: "del",
	parseMarkdown: (e, t) => t.applyMark("strike", t.parseInline(e.tokens || [])),
	renderMarkdown: (e, t) => `~~${t.renderChildren(e)}~~`,
	addCommands() {
		return {
			setStrike: () => ({ commands: e }) => e.setMark(this.name),
			toggleStrike: () => ({ commands: e }) => e.toggleMark(this.name),
			unsetStrike: () => ({ commands: e }) => e.unsetMark(this.name)
		};
	},
	addKeyboardShortcuts() {
		return { "Mod-Shift-s": () => this.editor.commands.toggleStrike() };
	},
	addInputRules() {
		return [jd({
			find: Ng,
			type: this.type
		})];
	},
	addPasteRules() {
		return [Jd({
			find: Pg,
			type: this.type
		})];
	}
}), Ig = W.create({
	name: "text",
	group: "inline",
	parseMarkdown: (e) => ({
		type: "text",
		text: e.text || ""
	}),
	renderMarkdown: (e) => e.text || ""
}), Lg = sd.create({
	name: "underline",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	parseHTML() {
		return [{ tag: "u" }, {
			style: "text-decoration",
			consuming: !1,
			getAttrs: (e) => e.includes("underline") ? {} : !1
		}];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"u",
			H(this.options.HTMLAttributes, e),
			0
		];
	},
	parseMarkdown(e, t) {
		return t.applyMark(this.name || "underline", t.parseInline(e.tokens || []));
	},
	renderMarkdown(e, t) {
		return `++${t.renderChildren(e)}++`;
	},
	markdownTokenizer: {
		name: "underline",
		level: "inline",
		start(e) {
			return e.indexOf("++");
		},
		tokenize(e, t, n) {
			let r = /^(\+\+)([\s\S]+?)(\+\+)/.exec(e);
			if (!r) return;
			let i = r[2].trim();
			return {
				type: "underline",
				raw: r[0],
				text: i,
				tokens: n.inlineTokens(i)
			};
		}
	},
	addCommands() {
		return {
			setUnderline: () => ({ commands: e }) => e.setMark(this.name),
			toggleUnderline: () => ({ commands: e }) => e.toggleMark(this.name),
			unsetUnderline: () => ({ commands: e }) => e.unsetMark(this.name)
		};
	},
	addKeyboardShortcuts() {
		return {
			"Mod-u": () => this.editor.commands.toggleUnderline(),
			"Mod-U": () => this.editor.commands.toggleUnderline()
		};
	}
});
function Rg(e = {}) {
	return new A({ view(t) {
		return new zg(t, e);
	} });
}
var zg = class {
	constructor(e, t) {
		this.editorView = e, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = t.width ?? 1, this.color = t.color === !1 ? void 0 : t.color || "black", this.class = t.class, this.handlers = [
			"dragover",
			"dragend",
			"drop",
			"dragleave"
		].map((t) => {
			let n = (e) => {
				this[t](e);
			};
			return e.dom.addEventListener(t, n), {
				name: t,
				handler: n
			};
		});
	}
	destroy() {
		this.handlers.forEach(({ name: e, handler: t }) => this.editorView.dom.removeEventListener(e, t));
	}
	update(e, t) {
		this.cursorPos != null && t.doc != e.state.doc && (this.cursorPos > e.state.doc.content.size ? this.setCursor(null) : this.updateOverlay());
	}
	setCursor(e) {
		e != this.cursorPos && (this.cursorPos = e, e == null ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay());
	}
	updateOverlay() {
		let e = this.editorView.state.doc.resolve(this.cursorPos), t = !e.parent.inlineContent, n, r = this.editorView.dom, i = r.getBoundingClientRect(), a = i.width / r.offsetWidth, o = i.height / r.offsetHeight;
		if (t) {
			let t = e.nodeBefore, r = e.nodeAfter;
			if (t || r) {
				let e = this.editorView.nodeDOM(this.cursorPos - (t ? t.nodeSize : 0));
				if (e) {
					let i = e.getBoundingClientRect(), a = t ? i.bottom : i.top;
					t && r && (a = (a + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2);
					let s = this.width / 2 * o;
					n = {
						left: i.left,
						right: i.right,
						top: a - s,
						bottom: a + s
					};
				}
			}
		}
		if (!n) {
			let e = this.editorView.coordsAtPos(this.cursorPos), t = this.width / 2 * a;
			n = {
				left: e.left - t,
				right: e.left + t,
				top: e.top,
				bottom: e.bottom
			};
		}
		let s = this.editorView.dom.offsetParent;
		this.element || (this.element = s.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", t), this.element.classList.toggle("prosemirror-dropcursor-inline", !t);
		let c, l;
		if (!s || s == document.body && getComputedStyle(s).position == "static") c = -pageXOffset, l = -pageYOffset;
		else {
			let e = s.getBoundingClientRect(), t = e.width / s.offsetWidth, n = e.height / s.offsetHeight;
			c = e.left - s.scrollLeft * t, l = e.top - s.scrollTop * n;
		}
		this.element.style.left = (n.left - c) / a + "px", this.element.style.top = (n.top - l) / o + "px", this.element.style.width = (n.right - n.left) / a + "px", this.element.style.height = (n.bottom - n.top) / o + "px";
	}
	scheduleRemoval(e) {
		clearTimeout(this.timeout), this.timeout = setTimeout(() => this.setCursor(null), e);
	}
	dragover(e) {
		if (!this.editorView.editable) return;
		let t = this.editorView.posAtCoords({
			left: e.clientX,
			top: e.clientY
		}), n = t && t.inside >= 0 && this.editorView.state.doc.nodeAt(t.inside), r = n && n.type.spec.disableDropCursor, i = typeof r == "function" ? r(this.editorView, t, e) : r;
		if (t && !i) {
			let e = t.pos;
			if (this.editorView.dragging && this.editorView.dragging.slice) {
				let t = pn(this.editorView.state.doc, e, this.editorView.dragging.slice);
				t != null && (e = t);
			}
			this.setCursor(e), this.scheduleRemoval(5e3);
		}
	}
	dragend() {
		this.scheduleRemoval(20);
	}
	drop() {
		this.scheduleRemoval(20);
	}
	dragleave(e) {
		this.editorView.dom.contains(e.relatedTarget) || this.setCursor(null);
	}
}, Bg = class e extends D {
	constructor(e) {
		super(e, e);
	}
	map(t, n) {
		let r = t.resolve(n.map(this.head));
		return e.valid(r) ? new e(r) : D.near(r);
	}
	content() {
		return w.empty;
	}
	eq(t) {
		return t instanceof e && t.head == this.head;
	}
	toJSON() {
		return {
			type: "gapcursor",
			pos: this.head
		};
	}
	static fromJSON(t, n) {
		if (typeof n.pos != "number") throw RangeError("Invalid input for GapCursor.fromJSON");
		return new e(t.resolve(n.pos));
	}
	getBookmark() {
		return new Vg(this.anchor);
	}
	static valid(e) {
		let t = e.parent;
		if (t.isTextblock || !Ug(e) || !Wg(e)) return !1;
		let n = t.type.spec.allowGapCursor;
		if (n != null) return n;
		let r = t.contentMatchAt(e.index()).defaultType;
		return r && r.isTextblock;
	}
	static findGapCursorFrom(t, n, r = !1) {
		search: for (;;) {
			if (!r && e.valid(t)) return t;
			let i = t.pos, a = null;
			for (let r = t.depth;; r--) {
				let o = t.node(r);
				if (n > 0 ? t.indexAfter(r) < o.childCount : t.index(r) > 0) {
					a = o.child(n > 0 ? t.indexAfter(r) : t.index(r) - 1);
					break;
				} else if (r == 0) return null;
				i += n;
				let s = t.doc.resolve(i);
				if (e.valid(s)) return s;
			}
			for (;;) {
				let o = n > 0 ? a.firstChild : a.lastChild;
				if (!o) {
					if (a.isAtom && !a.isText && !k.isSelectable(a)) {
						t = t.doc.resolve(i + a.nodeSize * n), r = !1;
						continue search;
					}
					break;
				}
				a = o, i += n;
				let s = t.doc.resolve(i);
				if (e.valid(s)) return s;
			}
			return null;
		}
	}
};
Bg.prototype.visible = !1, Bg.findFrom = Bg.findGapCursorFrom, D.jsonID("gapcursor", Bg);
var Vg = class e {
	constructor(e) {
		this.pos = e;
	}
	map(t) {
		return new e(t.map(this.pos));
	}
	resolve(e) {
		let t = e.resolve(this.pos);
		return Bg.valid(t) ? new Bg(t) : D.near(t);
	}
};
function Hg(e) {
	return e.isAtom || e.spec.isolating || e.spec.createGapCursor;
}
function Ug(e) {
	for (let t = e.depth; t >= 0; t--) {
		let n = e.index(t), r = e.node(t);
		if (n == 0) {
			if (r.type.spec.isolating) return !0;
			continue;
		}
		for (let e = r.child(n - 1);; e = e.lastChild) {
			if (e.childCount == 0 && !e.inlineContent || Hg(e.type)) return !0;
			if (e.inlineContent) return !1;
		}
	}
	return !0;
}
function Wg(e) {
	for (let t = e.depth; t >= 0; t--) {
		let n = e.indexAfter(t), r = e.node(t);
		if (n == r.childCount) {
			if (r.type.spec.isolating) return !0;
			continue;
		}
		for (let e = r.child(n);; e = e.firstChild) {
			if (e.childCount == 0 && !e.inlineContent || Hg(e.type)) return !0;
			if (e.inlineContent) return !1;
		}
	}
	return !0;
}
function Gg() {
	return new A({ props: {
		decorations: Xg,
		createSelectionBetween(e, t, n) {
			return t.pos == n.pos && Bg.valid(n) ? new Bg(n) : null;
		},
		handleClick: Jg,
		handleKeyDown: Kg,
		handleDOMEvents: { beforeinput: Yg }
	} });
}
var Kg = Sc({
	ArrowLeft: qg("horiz", -1),
	ArrowRight: qg("horiz", 1),
	ArrowUp: qg("vert", -1),
	ArrowDown: qg("vert", 1)
});
function qg(e, t) {
	let n = e == "vert" ? t > 0 ? "down" : "up" : t > 0 ? "right" : "left";
	return function(e, r, i) {
		let a = e.selection, o = t > 0 ? a.$to : a.$from, s = a.empty;
		if (a instanceof O) {
			if (!i.endOfTextblock(n) || o.depth == 0) return !1;
			s = !1, o = e.doc.resolve(t > 0 ? o.after() : o.before());
		}
		let c = Bg.findGapCursorFrom(o, t, s);
		return c ? (r && r(e.tr.setSelection(new Bg(c))), !0) : !1;
	};
}
function Jg(e, t, n) {
	if (!e || !e.editable) return !1;
	let r = e.state.doc.resolve(t);
	if (!Bg.valid(r)) return !1;
	let i = e.posAtCoords({
		left: n.clientX,
		top: n.clientY
	});
	return i && i.inside > -1 && k.isSelectable(e.state.doc.nodeAt(i.inside)) ? !1 : (e.dispatch(e.state.tr.setSelection(new Bg(r))), !0);
}
function Yg(e, t) {
	if (t.inputType != "insertCompositionText" || !(e.state.selection instanceof Bg)) return !1;
	let { $from: n } = e.state.selection, r = n.parent.contentMatchAt(n.index()).findWrapping(e.state.schema.nodes.text);
	if (!r) return !1;
	let i = S.empty;
	for (let e = r.length - 1; e >= 0; e--) i = S.from(r[e].createAndFill(null, i));
	let a = e.state.tr.replace(n.pos, n.pos, new w(i, 0, 0));
	return a.setSelection(O.near(a.doc.resolve(n.pos + 1))), e.dispatch(a), !1;
}
function Xg(e) {
	if (!(e.selection instanceof Bg)) return null;
	let t = document.createElement("div");
	return t.className = "ProseMirror-gapcursor", L.create(e.doc, [bs.widget(e.selection.head, t, { key: "gapcursor" })]);
}
var Zg = 200, Y = function() {};
Y.prototype.append = function(e) {
	return e.length ? (e = Y.from(e), !this.length && e || e.length < Zg && this.leafAppend(e) || this.length < Zg && e.leafPrepend(this) || this.appendInner(e)) : this;
}, Y.prototype.prepend = function(e) {
	return e.length ? Y.from(e).append(this) : this;
}, Y.prototype.appendInner = function(e) {
	return new $g(this, e);
}, Y.prototype.slice = function(e, t) {
	return e === void 0 && (e = 0), t === void 0 && (t = this.length), e >= t ? Y.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, t));
}, Y.prototype.get = function(e) {
	if (!(e < 0 || e >= this.length)) return this.getInner(e);
}, Y.prototype.forEach = function(e, t, n) {
	t === void 0 && (t = 0), n === void 0 && (n = this.length), t <= n ? this.forEachInner(e, t, n, 0) : this.forEachInvertedInner(e, t, n, 0);
}, Y.prototype.map = function(e, t, n) {
	t === void 0 && (t = 0), n === void 0 && (n = this.length);
	var r = [];
	return this.forEach(function(t, n) {
		return r.push(e(t, n));
	}, t, n), r;
}, Y.from = function(e) {
	return e instanceof Y ? e : e && e.length ? new Qg(e) : Y.empty;
};
var Qg = function(e) {
	function t(t) {
		e.call(this), this.values = t;
	}
	e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
	var n = {
		length: { configurable: !0 },
		depth: { configurable: !0 }
	};
	return t.prototype.flatten = function() {
		return this.values;
	}, t.prototype.sliceInner = function(e, n) {
		return e == 0 && n == this.length ? this : new t(this.values.slice(e, n));
	}, t.prototype.getInner = function(e) {
		return this.values[e];
	}, t.prototype.forEachInner = function(e, t, n, r) {
		for (var i = t; i < n; i++) if (e(this.values[i], r + i) === !1) return !1;
	}, t.prototype.forEachInvertedInner = function(e, t, n, r) {
		for (var i = t - 1; i >= n; i--) if (e(this.values[i], r + i) === !1) return !1;
	}, t.prototype.leafAppend = function(e) {
		if (this.length + e.length <= Zg) return new t(this.values.concat(e.flatten()));
	}, t.prototype.leafPrepend = function(e) {
		if (this.length + e.length <= Zg) return new t(e.flatten().concat(this.values));
	}, n.length.get = function() {
		return this.values.length;
	}, n.depth.get = function() {
		return 0;
	}, Object.defineProperties(t.prototype, n), t;
}(Y);
Y.empty = new Qg([]);
var $g = function(e) {
	function t(t, n) {
		e.call(this), this.left = t, this.right = n, this.length = t.length + n.length, this.depth = Math.max(t.depth, n.depth) + 1;
	}
	return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.flatten = function() {
		return this.left.flatten().concat(this.right.flatten());
	}, t.prototype.getInner = function(e) {
		return e < this.left.length ? this.left.get(e) : this.right.get(e - this.left.length);
	}, t.prototype.forEachInner = function(e, t, n, r) {
		var i = this.left.length;
		if (t < i && this.left.forEachInner(e, t, Math.min(n, i), r) === !1 || n > i && this.right.forEachInner(e, Math.max(t - i, 0), Math.min(this.length, n) - i, r + i) === !1) return !1;
	}, t.prototype.forEachInvertedInner = function(e, t, n, r) {
		var i = this.left.length;
		if (t > i && this.right.forEachInvertedInner(e, t - i, Math.max(n, i) - i, r + i) === !1 || n < i && this.left.forEachInvertedInner(e, Math.min(t, i), n, r) === !1) return !1;
	}, t.prototype.sliceInner = function(e, t) {
		if (e == 0 && t == this.length) return this;
		var n = this.left.length;
		return t <= n ? this.left.slice(e, t) : e >= n ? this.right.slice(e - n, t - n) : this.left.slice(e, n).append(this.right.slice(0, t - n));
	}, t.prototype.leafAppend = function(e) {
		var n = this.right.leafAppend(e);
		if (n) return new t(this.left, n);
	}, t.prototype.leafPrepend = function(e) {
		var n = this.left.leafPrepend(e);
		if (n) return new t(n, this.right);
	}, t.prototype.appendInner = function(e) {
		return this.left.depth >= Math.max(this.right.depth, e.depth) + 1 ? new t(this.left, new t(this.right, e)) : new t(this, e);
	}, t;
}(Y), e_ = 500, t_ = class e {
	constructor(e, t) {
		this.items = e, this.eventCount = t;
	}
	popEvent(t, n) {
		if (this.eventCount == 0) return null;
		let r = this.items.length;
		for (;; r--) if (this.items.get(r - 1).selection) {
			--r;
			break;
		}
		let i, a;
		n && (i = this.remapping(r, this.items.length), a = i.maps.length);
		let o = t.tr, s, c, l = [], u = [];
		return this.items.forEach((t, n) => {
			if (!t.step) {
				i || (i = this.remapping(r, n + 1), a = i.maps.length), a--, u.push(t);
				return;
			}
			if (i) {
				u.push(new r_(t.map));
				let e = t.step.map(i.slice(a)), n;
				e && o.maybeStep(e).doc && (n = o.mapping.maps[o.mapping.maps.length - 1], l.push(new r_(n, void 0, void 0, l.length + u.length))), a--, n && i.appendMap(n, a);
			} else o.maybeStep(t.step);
			if (t.selection) return s = i ? t.selection.map(i.slice(a)) : t.selection, c = new e(this.items.slice(0, r).append(u.reverse().concat(l)), this.eventCount - 1), !1;
		}, this.items.length, 0), {
			remaining: c,
			transform: o,
			selection: s
		};
	}
	addTransform(t, n, r, i) {
		let a = [], o = this.eventCount, s = this.items, c = !i && s.length ? s.get(s.length - 1) : null;
		for (let e = 0; e < t.steps.length; e++) {
			let r = t.steps[e].invert(t.docs[e]), l = new r_(t.mapping.maps[e], r, n), u;
			(u = c && c.merge(l)) && (l = u, e ? a.pop() : s = s.slice(0, s.length - 1)), a.push(l), n &&= (o++, void 0), i || (c = l);
		}
		let l = o - r.depth;
		return l > a_ && (s = n_(s, l), o -= l), new e(s.append(a), o);
	}
	remapping(e, t) {
		let n = new Mt();
		return this.items.forEach((t, r) => {
			let i = t.mirrorOffset != null && r - t.mirrorOffset >= e ? n.maps.length - t.mirrorOffset : void 0;
			n.appendMap(t.map, i);
		}, e, t), n;
	}
	addMaps(t) {
		return this.eventCount == 0 ? this : new e(this.items.append(t.map((e) => new r_(e))), this.eventCount);
	}
	rebased(t, n) {
		if (!this.eventCount) return this;
		let r = [], i = Math.max(0, this.items.length - n), a = t.mapping, o = t.steps.length, s = this.eventCount;
		this.items.forEach((e) => {
			e.selection && s--;
		}, i);
		let c = n;
		this.items.forEach((e) => {
			let n = a.getMirror(--c);
			if (n == null) return;
			o = Math.min(o, n);
			let i = a.maps[n];
			if (e.step) {
				let o = t.steps[n].invert(t.docs[n]), l = e.selection && e.selection.map(a.slice(c + 1, n));
				l && s++, r.push(new r_(i, o, l));
			} else r.push(new r_(i));
		}, i);
		let l = [];
		for (let e = n; e < o; e++) l.push(new r_(a.maps[e]));
		let u = new e(this.items.slice(0, i).append(l).append(r), s);
		return u.emptyItemCount() > e_ && (u = u.compress(this.items.length - r.length)), u;
	}
	emptyItemCount() {
		let e = 0;
		return this.items.forEach((t) => {
			t.step || e++;
		}), e;
	}
	compress(t = this.items.length) {
		let n = this.remapping(0, t), r = n.maps.length, i = [], a = 0;
		return this.items.forEach((e, o) => {
			if (o >= t) i.push(e), e.selection && a++;
			else if (e.step) {
				let t = e.step.map(n.slice(r)), o = t && t.getMap();
				if (r--, o && n.appendMap(o, r), t) {
					let s = e.selection && e.selection.map(n.slice(r));
					s && a++;
					let c = new r_(o.invert(), t, s), l, u = i.length - 1;
					(l = i.length && i[u].merge(c)) ? i[u] = l : i.push(c);
				}
			} else e.map && r--;
		}, this.items.length, 0), new e(Y.from(i.reverse()), a);
	}
};
t_.empty = new t_(Y.empty, 0);
function n_(e, t) {
	let n;
	return e.forEach((e, r) => {
		if (e.selection && t-- == 0) return n = r, !1;
	}), e.slice(n);
}
var r_ = class e {
	constructor(e, t, n, r) {
		this.map = e, this.step = t, this.selection = n, this.mirrorOffset = r;
	}
	merge(t) {
		if (this.step && t.step && !t.selection) {
			let n = t.step.merge(this.step);
			if (n) return new e(n.getMap().invert(), n, this.selection);
		}
	}
}, i_ = class {
	constructor(e, t, n, r, i) {
		this.done = e, this.undone = t, this.prevRanges = n, this.prevTime = r, this.prevComposition = i;
	}
}, a_ = 20;
function o_(e, t, n, r) {
	let i = n.getMeta(m_), a;
	if (i) return i.historyState;
	n.getMeta(h_) && (e = new i_(e.done, e.undone, null, 0, -1));
	let o = n.getMeta("appendedTransaction");
	if (n.steps.length == 0) return e;
	if (o && o.getMeta(m_)) return o.getMeta(m_).redo ? new i_(e.done.addTransform(n, void 0, r, p_(t)), e.undone, c_(n.mapping.maps), e.prevTime, e.prevComposition) : new i_(e.done, e.undone.addTransform(n, void 0, r, p_(t)), null, e.prevTime, e.prevComposition);
	if (n.getMeta("addToHistory") !== !1 && !(o && o.getMeta("addToHistory") === !1)) {
		let i = n.getMeta("composition"), a = e.prevTime == 0 || !o && e.prevComposition != i && (e.prevTime < (n.time || 0) - r.newGroupDelay || !s_(n, e.prevRanges)), s = o ? l_(e.prevRanges, n.mapping) : c_(n.mapping.maps);
		return new i_(e.done.addTransform(n, a ? t.selection.getBookmark() : void 0, r, p_(t)), t_.empty, s, n.time, i ?? e.prevComposition);
	} else if (a = n.getMeta("rebased")) return new i_(e.done.rebased(n, a), e.undone.rebased(n, a), l_(e.prevRanges, n.mapping), e.prevTime, e.prevComposition);
	else return new i_(e.done.addMaps(n.mapping.maps), e.undone.addMaps(n.mapping.maps), l_(e.prevRanges, n.mapping), e.prevTime, e.prevComposition);
}
function s_(e, t) {
	if (!t) return !1;
	if (!e.docChanged) return !0;
	let n = !1;
	return e.mapping.maps[0].forEach((e, r) => {
		for (let i = 0; i < t.length; i += 2) e <= t[i + 1] && r >= t[i] && (n = !0);
	}), n;
}
function c_(e) {
	let t = [];
	for (let n = e.length - 1; n >= 0 && t.length == 0; n--) e[n].forEach((e, n, r, i) => t.push(r, i));
	return t;
}
function l_(e, t) {
	if (!e) return null;
	let n = [];
	for (let r = 0; r < e.length; r += 2) {
		let i = t.map(e[r], 1), a = t.map(e[r + 1], -1);
		i <= a && n.push(i, a);
	}
	return n;
}
function u_(e, t, n) {
	let r = p_(t), i = m_.get(t).spec.config, a = (n ? e.undone : e.done).popEvent(t, r);
	if (!a) return null;
	let o = a.selection.resolve(a.transform.doc), s = (n ? e.done : e.undone).addTransform(a.transform, t.selection.getBookmark(), i, r), c = new i_(n ? s : a.remaining, n ? a.remaining : s, null, 0, -1);
	return a.transform.setSelection(o).setMeta(m_, {
		redo: n,
		historyState: c
	});
}
var d_ = !1, f_ = null;
function p_(e) {
	let t = e.plugins;
	if (f_ != t) {
		d_ = !1, f_ = t;
		for (let e = 0; e < t.length; e++) if (t[e].spec.historyPreserveItems) {
			d_ = !0;
			break;
		}
	}
	return d_;
}
var m_ = new j("history"), h_ = new j("closeHistory");
function g_(e = {}) {
	return e = {
		depth: e.depth || 100,
		newGroupDelay: e.newGroupDelay || 500
	}, new A({
		key: m_,
		state: {
			init() {
				return new i_(t_.empty, t_.empty, null, 0, -1);
			},
			apply(t, n, r) {
				return o_(n, r, t, e);
			}
		},
		config: e,
		props: { handleDOMEvents: { beforeinput(e, t) {
			let n = t.inputType, r = n == "historyUndo" ? v_ : n == "historyRedo" ? y_ : null;
			return !r || !e.editable ? !1 : (t.preventDefault(), r(e.state, e.dispatch));
		} } }
	});
}
function __(e, t) {
	return (n, r) => {
		let i = m_.getState(n);
		if (!i || (e ? i.undone : i.done).eventCount == 0) return !1;
		if (r) {
			let a = u_(i, n, e);
			a && r(t ? a.scrollIntoView() : a);
		}
		return !0;
	};
}
var v_ = __(!1, !0), y_ = __(!0, !0);
U.create({
	name: "characterCount",
	addOptions() {
		return {
			limit: null,
			mode: "textSize",
			textCounter: (e) => e.length,
			wordCounter: (e) => e.split(" ").filter((e) => e !== "").length
		};
	},
	addStorage() {
		return {
			characters: () => 0,
			words: () => 0
		};
	},
	onBeforeCreate() {
		this.storage.characters = (e) => {
			let t = e?.node || this.editor.state.doc;
			if ((e?.mode || this.options.mode) === "textSize") {
				let e = t.textBetween(0, t.content.size, void 0, " ");
				return this.options.textCounter(e);
			}
			return t.nodeSize;
		}, this.storage.words = (e) => {
			let t = e?.node || this.editor.state.doc, n = t.textBetween(0, t.content.size, " ", " ");
			return this.options.wordCounter(n);
		};
	},
	addProseMirrorPlugins() {
		let e = !1;
		return [new A({
			key: new j("characterCount"),
			appendTransaction: (t, n, r) => {
				if (e) return;
				let i = this.options.limit;
				if (i == null || i === 0) {
					e = !0;
					return;
				}
				let a = this.storage.characters({ node: r.doc });
				if (a > i) {
					let t = a - i;
					console.warn(`[CharacterCount] Initial content exceeded limit of ${i} characters. Content was automatically trimmed.`);
					let n = r.tr.deleteRange(0, t);
					return e = !0, n;
				}
				e = !0;
			},
			filterTransaction: (e, t) => {
				let n = this.options.limit;
				if (!e.docChanged || n === 0 || n == null) return !0;
				let r = this.storage.characters({ node: t.doc }), i = this.storage.characters({ node: e.doc });
				if (i <= n || r > n && i > n && i <= r) return !0;
				if (r > n && i > n && i > r || !e.getMeta("paste")) return !1;
				let a = e.selection.$head.pos, o = a - (i - n), s = a;
				return e.deleteRange(o, s), !(this.storage.characters({ node: e.doc }) > n);
			}
		})];
	}
});
var b_ = U.create({
	name: "dropCursor",
	addOptions() {
		return {
			color: "currentColor",
			width: 1,
			class: void 0
		};
	},
	addProseMirrorPlugins() {
		return [Rg(this.options)];
	}
});
U.create({
	name: "focus",
	addOptions() {
		return {
			className: "has-focus",
			mode: "all"
		};
	},
	addProseMirrorPlugins() {
		return [new A({
			key: new j("focus"),
			props: { decorations: ({ doc: e, selection: t }) => {
				let { isEditable: n, isFocused: r } = this.editor, { anchor: i } = t, a = [];
				if (!n || !r) return L.create(e, []);
				let o = 0;
				this.options.mode === "deepest" && e.descendants((e, t) => {
					if (!e.isText) {
						if (!(i >= t && i <= t + e.nodeSize - 1)) return !1;
						o += 1;
					}
				});
				let s = 0;
				return e.descendants((e, t) => {
					if (e.isText || !(i >= t && i <= t + e.nodeSize - 1)) return !1;
					if (s += 1, this.options.mode === "deepest" && o - s > 0 || this.options.mode === "shallowest" && s > 1) return this.options.mode === "deepest";
					a.push(bs.node(t, t + e.nodeSize, { class: this.options.className }));
				}), L.create(e, a);
			} }
		})];
	}
});
var x_ = U.create({
	name: "gapCursor",
	addProseMirrorPlugins() {
		return [Gg()];
	},
	extendNodeSchema(e) {
		return { allowGapCursor: V(B(e, "allowGapCursor", {
			name: e.name,
			options: e.options,
			storage: e.storage
		})) ?? null };
	}
}), S_ = "placeholder";
function C_(e) {
	return e.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-]/g, "").replace(/^[0-9-]+/, "").replace(/^-+/, "").toLowerCase();
}
U.create({
	name: "placeholder",
	addOptions() {
		return {
			emptyEditorClass: "is-editor-empty",
			emptyNodeClass: "is-empty",
			dataAttribute: S_,
			placeholder: "Write something …",
			showOnlyWhenEditable: !0,
			showOnlyCurrent: !0,
			includeChildren: !1
		};
	},
	addProseMirrorPlugins() {
		let e = this.options.dataAttribute ? `data-${C_(this.options.dataAttribute)}` : `data-${S_}`;
		return [new A({
			key: new j("placeholder"),
			props: { decorations: ({ doc: t, selection: n }) => {
				let r = this.editor.isEditable || !this.options.showOnlyWhenEditable, { anchor: i } = n, a = [];
				if (!r) return null;
				let o = this.editor.isEmpty;
				return t.descendants((t, n) => {
					let r = i >= n && i <= n + t.nodeSize, s = !t.isLeaf && Cu(t);
					if ((r || !this.options.showOnlyCurrent) && s) {
						let i = [this.options.emptyNodeClass];
						o && i.push(this.options.emptyEditorClass);
						let s = bs.node(n, n + t.nodeSize, {
							class: i.join(" "),
							[e]: typeof this.options.placeholder == "function" ? this.options.placeholder({
								editor: this.editor,
								node: t,
								pos: n,
								hasAnchor: r
							}) : this.options.placeholder
						});
						a.push(s);
					}
					return this.options.includeChildren;
				}), L.create(t, a);
			} }
		})];
	}
}), U.create({
	name: "selection",
	addOptions() {
		return { className: "selection" };
	},
	addProseMirrorPlugins() {
		let { editor: e, options: t } = this;
		return [new A({
			key: new j("selection"),
			props: { decorations(n) {
				return n.selection.empty || e.isFocused || !e.isEditable || wu(n.selection) || e.view.dragging ? null : L.create(n.doc, [bs.inline(n.selection.from, n.selection.to, { class: t.className })]);
			} }
		})];
	}
});
function w_({ types: e, node: t }) {
	return t && Array.isArray(e) && e.includes(t.type) || t?.type === e;
}
var T_ = U.create({
	name: "trailingNode",
	addOptions() {
		return {
			node: void 0,
			notAfter: []
		};
	},
	addProseMirrorPlugins() {
		let e = new j(this.name), t = this.options.node || this.editor.schema.topNodeType.contentMatch.defaultType?.name || "paragraph", n = Object.entries(this.editor.schema.nodes).map(([, e]) => e).filter((e) => (this.options.notAfter || []).concat(t).includes(e.name));
		return [new A({
			key: e,
			appendTransaction: (n, r, i) => {
				let { doc: a, tr: o, schema: s } = i, c = e.getState(i), l = a.content.size, u = s.nodes[t];
				if (c) return o.insert(l, u.create());
			},
			state: {
				init: (e, t) => {
					let r = t.tr.doc.lastChild;
					return !w_({
						node: r,
						types: n
					});
				},
				apply: (e, t) => {
					if (!e.docChanged || e.getMeta("__uniqueIDTransaction")) return t;
					let r = e.doc.lastChild;
					return !w_({
						node: r,
						types: n
					});
				}
			}
		})];
	}
}), E_ = U.create({
	name: "undoRedo",
	addOptions() {
		return {
			depth: 100,
			newGroupDelay: 500
		};
	},
	addCommands() {
		return {
			undo: () => ({ state: e, dispatch: t }) => v_(e, t),
			redo: () => ({ state: e, dispatch: t }) => y_(e, t)
		};
	},
	addProseMirrorPlugins() {
		return [g_(this.options)];
	},
	addKeyboardShortcuts() {
		return {
			"Mod-z": () => this.editor.commands.undo(),
			"Shift-Mod-z": () => this.editor.commands.redo(),
			"Mod-y": () => this.editor.commands.redo(),
			"Mod-я": () => this.editor.commands.undo(),
			"Shift-Mod-я": () => this.editor.commands.redo()
		};
	}
}), D_ = U.create({
	name: "starterKit",
	addExtensions() {
		let e = [];
		return this.options.bold !== !1 && e.push(Tp.configure(this.options.bold)), this.options.blockquote !== !1 && e.push(bp.configure(this.options.blockquote)), this.options.bulletList !== !1 && e.push(ag.configure(this.options.bulletList)), this.options.code !== !1 && e.push(Op.configure(this.options.code)), this.options.codeBlock !== !1 && e.push(Mp.configure(this.options.codeBlock)), this.options.document !== !1 && e.push(Np.configure(this.options.document)), this.options.dropcursor !== !1 && e.push(b_.configure(this.options.dropcursor)), this.options.gapcursor !== !1 && e.push(x_.configure(this.options.gapcursor)), this.options.hardBreak !== !1 && e.push(Pp.configure(this.options.hardBreak)), this.options.heading !== !1 && e.push(Fp.configure(this.options.heading)), this.options.undoRedo !== !1 && e.push(E_.configure(this.options.undoRedo)), this.options.horizontalRule !== !1 && e.push(Ip.configure(this.options.horizontalRule)), this.options.italic !== !1 && e.push(Vp.configure(this.options.italic)), this.options.listItem !== !1 && e.push(og.configure(this.options.listItem)), this.options.listKeymap !== !1 && e.push(_g.configure(this.options?.listKeymap)), this.options.link !== !1 && e.push($h.configure(this.options?.link)), this.options.orderedList !== !1 && e.push(Eg.configure(this.options.orderedList)), this.options.paragraph !== !1 && e.push(Mg.configure(this.options.paragraph)), this.options.strike !== !1 && e.push(Fg.configure(this.options.strike)), this.options.text !== !1 && e.push(Ig.configure(this.options.text)), this.options.underline !== !1 && e.push(Lg.configure(this.options?.underline)), this.options.trailingNode !== !1 && e.push(T_.configure(this.options?.trailingNode)), e;
	}
}), O_ = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, k_ = W.create({
	name: "image",
	addOptions() {
		return {
			inline: !1,
			allowBase64: !1,
			HTMLAttributes: {},
			resize: !1
		};
	},
	inline() {
		return this.options.inline;
	},
	group() {
		return this.options.inline ? "inline" : "block";
	},
	draggable: !0,
	addAttributes() {
		return {
			src: { default: null },
			alt: { default: null },
			title: { default: null },
			width: { default: null },
			height: { default: null }
		};
	},
	parseHTML() {
		return [{ tag: this.options.allowBase64 ? "img[src]" : "img[src]:not([src^=\"data:\"])" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return ["img", H(this.options.HTMLAttributes, e)];
	},
	parseMarkdown: (e, t) => t.createNode("image", {
		src: e.href,
		title: e.title,
		alt: e.text
	}),
	renderMarkdown: (e) => {
		let t = e.attrs?.src ?? "", n = e.attrs?.alt ?? "", r = e.attrs?.title ?? "";
		return r ? `![${n}](${t} "${r}")` : `![${n}](${t})`;
	},
	addNodeView() {
		if (!this.options.resize || !this.options.resize.enabled || typeof document > "u") return null;
		let { directions: e, minWidth: t, minHeight: n, alwaysPreserveAspectRatio: r } = this.options.resize;
		return ({ node: i, getPos: a, HTMLAttributes: o, editor: s }) => {
			let c = document.createElement("img");
			Object.entries(o).forEach(([e, t]) => {
				if (t != null) switch (e) {
					case "width":
					case "height": break;
					default:
						c.setAttribute(e, t);
						break;
				}
			}), c.src = o.src;
			let l = new Id({
				element: c,
				editor: s,
				node: i,
				getPos: a,
				onResize: (e, t) => {
					c.style.width = `${e}px`, c.style.height = `${t}px`;
				},
				onCommit: (e, t) => {
					let n = a();
					n !== void 0 && this.editor.chain().setNodeSelection(n).updateAttributes(this.name, {
						width: e,
						height: t
					}).run();
				},
				onUpdate: (e, t, n) => e.type === i.type,
				options: {
					directions: e,
					min: {
						width: t,
						height: n
					},
					preserveAspectRatio: r === !0
				}
			}), u = l.dom;
			return u.style.visibility = "hidden", u.style.pointerEvents = "none", c.onload = () => {
				u.style.visibility = "", u.style.pointerEvents = "";
			}, l;
		};
	},
	addCommands() {
		return { setImage: (e) => ({ commands: t }) => t.insertContent({
			type: this.name,
			attrs: e
		}) };
	},
	addInputRules() {
		return [Md({
			find: O_,
			type: this.type,
			getAttributes: (e) => {
				let [, , t, n, r] = e;
				return {
					src: n,
					alt: t,
					title: r
				};
			}
		})];
	}
}), A_ = /^((?:https?:)?\/\/)?((?:www|m|music)\.)?((?:youtube\.com|youtu\.be|youtube-nocookie\.com))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/, j_ = /^((?:https?:)?\/\/)?((?:www|m|music)\.)?((?:youtube\.com|youtu\.be|youtube-nocookie\.com))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/g, M_ = (e) => e.match(A_), N_ = (e, t) => t ? "https://www.youtube-nocookie.com/embed/videoseries?list=" : e ? "https://www.youtube-nocookie.com/embed/" : "https://www.youtube.com/embed/", P_ = (e) => {
	let { url: t, allowFullscreen: n, autoplay: r, ccLanguage: i, ccLoadPolicy: a, controls: o, disableKBcontrols: s, enableIFrameApi: c, endTime: l, interfaceLanguage: u, ivLoadPolicy: d, loop: f, modestBranding: p, nocookie: m, origin: h, playlist: g, progressBarColor: _, startAt: ee, rel: v } = e;
	if (!M_(t)) return null;
	if (t.includes("/embed/")) return t;
	if (t.includes("youtu.be")) {
		let e = t.split("/").pop();
		return e ? `${N_(m)}${e}` : null;
	}
	let y = /(?:(v|list)=|shorts\/)([-\w]+)/gm.exec(t);
	if (!y || !y[2]) return null;
	let b = `${N_(m, y[1] === "list")}${y[2]}`, x = [];
	return n === !1 && x.push("fs=0"), r && x.push("autoplay=1"), i && x.push(`cc_lang_pref=${i}`), a && x.push("cc_load_policy=1"), o || x.push("controls=0"), s && x.push("disablekb=1"), c && x.push("enablejsapi=1"), l && x.push(`end=${l}`), u && x.push(`hl=${u}`), d && x.push(`iv_load_policy=${d}`), f && x.push("loop=1"), p && x.push("modestbranding=1"), h && x.push(`origin=${h}`), g && x.push(`playlist=${g}`), ee && x.push(`start=${ee}`), _ && x.push(`color=${_}`), v !== void 0 && x.push(`rel=${v}`), x.length && (b += `${y[1] === "list" ? "&" : "?"}${x.join("&")}`), b;
}, F_ = W.create({
	name: "youtube",
	addOptions() {
		return {
			addPasteHandler: !0,
			allowFullscreen: !0,
			autoplay: !1,
			ccLanguage: void 0,
			ccLoadPolicy: void 0,
			controls: !0,
			disableKBcontrols: !1,
			enableIFrameApi: !1,
			endTime: 0,
			height: 480,
			interfaceLanguage: void 0,
			ivLoadPolicy: 0,
			loop: !1,
			modestBranding: !1,
			HTMLAttributes: {},
			inline: !1,
			nocookie: !1,
			origin: "",
			playlist: "",
			progressBarColor: void 0,
			width: 640,
			rel: 1
		};
	},
	inline() {
		return this.options.inline;
	},
	group() {
		return this.options.inline ? "inline" : "block";
	},
	draggable: !0,
	addAttributes() {
		return {
			src: { default: null },
			start: { default: 0 },
			width: { default: this.options.width },
			height: { default: this.options.height }
		};
	},
	parseHTML() {
		return [{ tag: "div[data-youtube-video] iframe" }];
	},
	addCommands() {
		return { setYoutubeVideo: (e) => ({ commands: t }) => M_(e.src) ? t.insertContent({
			type: this.name,
			attrs: e
		}) : !1 };
	},
	addPasteRules() {
		return this.options.addPasteHandler ? [Yd({
			find: j_,
			type: this.type,
			getAttributes: (e) => ({ src: e.input })
		})] : [];
	},
	renderHTML({ HTMLAttributes: e }) {
		return e.src = P_({
			url: e.src,
			allowFullscreen: this.options.allowFullscreen,
			autoplay: this.options.autoplay,
			ccLanguage: this.options.ccLanguage,
			ccLoadPolicy: this.options.ccLoadPolicy,
			controls: this.options.controls,
			disableKBcontrols: this.options.disableKBcontrols,
			enableIFrameApi: this.options.enableIFrameApi,
			endTime: this.options.endTime,
			interfaceLanguage: this.options.interfaceLanguage,
			ivLoadPolicy: this.options.ivLoadPolicy,
			loop: this.options.loop,
			modestBranding: this.options.modestBranding,
			nocookie: this.options.nocookie,
			origin: this.options.origin,
			playlist: this.options.playlist,
			progressBarColor: this.options.progressBarColor,
			startAt: e.start || 0,
			rel: this.options.rel
		}), [
			"div",
			{ "data-youtube-video": "" },
			["iframe", H(this.options.HTMLAttributes, {
				width: this.options.width,
				height: this.options.height,
				allowfullscreen: this.options.allowFullscreen,
				autoplay: this.options.autoplay,
				ccLanguage: this.options.ccLanguage,
				ccLoadPolicy: this.options.ccLoadPolicy,
				disableKBcontrols: this.options.disableKBcontrols,
				enableIFrameApi: this.options.enableIFrameApi,
				endTime: this.options.endTime,
				interfaceLanguage: this.options.interfaceLanguage,
				ivLoadPolicy: this.options.ivLoadPolicy,
				loop: this.options.loop,
				modestBranding: this.options.modestBranding,
				origin: this.options.origin,
				playlist: this.options.playlist,
				progressBarColor: this.options.progressBarColor,
				rel: this.options.rel
			}, e)]
		];
	},
	...Bd({
		nodeName: "youtube",
		allowedAttributes: [
			"src",
			"width",
			"height",
			"start"
		]
	})
}), I_ = U.create({
	name: "textAlign",
	addOptions() {
		return {
			types: [],
			alignments: [
				"left",
				"center",
				"right",
				"justify"
			],
			defaultAlignment: null
		};
	},
	addGlobalAttributes() {
		return [{
			types: this.options.types,
			attributes: { textAlign: {
				default: this.options.defaultAlignment,
				parseHTML: (e) => {
					let t = e.style.textAlign;
					return this.options.alignments.includes(t) ? t : this.options.defaultAlignment;
				},
				renderHTML: (e) => e.textAlign ? { style: `text-align: ${e.textAlign}` } : {}
			} }
		}];
	},
	addCommands() {
		return {
			setTextAlign: (e) => ({ commands: t }) => this.options.alignments.includes(e) ? this.options.types.map((n) => t.updateAttributes(n, { textAlign: e })).some((e) => e) : !1,
			unsetTextAlign: () => ({ commands: e }) => this.options.types.map((t) => e.resetAttributes(t, "textAlign")).some((e) => e),
			toggleTextAlign: (e) => ({ editor: t, commands: n }) => this.options.alignments.includes(e) ? t.isActive({ textAlign: e }) ? n.unsetTextAlign() : n.setTextAlign(e) : !1
		};
	},
	addKeyboardShortcuts() {
		return {
			"Mod-Shift-l": () => this.editor.commands.setTextAlign("left"),
			"Mod-Shift-e": () => this.editor.commands.setTextAlign("center"),
			"Mod-Shift-r": () => this.editor.commands.setTextAlign("right"),
			"Mod-Shift-j": () => this.editor.commands.setTextAlign("justify")
		};
	}
}), L_, R_;
if (typeof WeakMap < "u") {
	let e = new WeakMap();
	L_ = (t) => e.get(t), R_ = (t, n) => (e.set(t, n), n);
} else {
	let e = [], t = 0;
	L_ = (t) => {
		for (let n = 0; n < e.length; n += 2) if (e[n] == t) return e[n + 1];
	}, R_ = (n, r) => (t == 10 && (t = 0), e[t++] = n, e[t++] = r);
}
var X = class {
	constructor(e, t, n, r) {
		this.width = e, this.height = t, this.map = n, this.problems = r;
	}
	findCell(e) {
		for (let t = 0; t < this.map.length; t++) {
			let n = this.map[t];
			if (n != e) continue;
			let r = t % this.width, i = t / this.width | 0, a = r + 1, o = i + 1;
			for (let e = 1; a < this.width && this.map[t + e] == n; e++) a++;
			for (let e = 1; o < this.height && this.map[t + this.width * e] == n; e++) o++;
			return {
				left: r,
				top: i,
				right: a,
				bottom: o
			};
		}
		throw RangeError(`No cell with offset ${e} found`);
	}
	colCount(e) {
		for (let t = 0; t < this.map.length; t++) if (this.map[t] == e) return t % this.width;
		throw RangeError(`No cell with offset ${e} found`);
	}
	nextCell(e, t, n) {
		let { left: r, right: i, top: a, bottom: o } = this.findCell(e);
		return t == "horiz" ? (n < 0 ? r == 0 : i == this.width) ? null : this.map[a * this.width + (n < 0 ? r - 1 : i)] : (n < 0 ? a == 0 : o == this.height) ? null : this.map[r + this.width * (n < 0 ? a - 1 : o)];
	}
	rectBetween(e, t) {
		let { left: n, right: r, top: i, bottom: a } = this.findCell(e), { left: o, right: s, top: c, bottom: l } = this.findCell(t);
		return {
			left: Math.min(n, o),
			top: Math.min(i, c),
			right: Math.max(r, s),
			bottom: Math.max(a, l)
		};
	}
	cellsInRect(e) {
		let t = [], n = {};
		for (let r = e.top; r < e.bottom; r++) for (let i = e.left; i < e.right; i++) {
			let a = r * this.width + i, o = this.map[a];
			n[o] || (n[o] = !0, !(i == e.left && i && this.map[a - 1] == o || r == e.top && r && this.map[a - this.width] == o) && t.push(o));
		}
		return t;
	}
	positionAt(e, t, n) {
		for (let r = 0, i = 0;; r++) {
			let a = i + n.child(r).nodeSize;
			if (r == e) {
				let n = t + e * this.width, r = (e + 1) * this.width;
				for (; n < r && this.map[n] < i;) n++;
				return n == r ? a - 1 : this.map[n];
			}
			i = a;
		}
	}
	static get(e) {
		return L_(e) || R_(e, z_(e));
	}
};
function z_(e) {
	if (e.type.spec.tableRole != "table") throw RangeError("Not a table node: " + e.type.name);
	let t = B_(e), n = e.childCount, r = [], i = 0, a = null, o = [];
	for (let e = 0, i = t * n; e < i; e++) r[e] = 0;
	for (let s = 0, c = 0; s < n; s++) {
		let l = e.child(s);
		c++;
		for (let e = 0;; e++) {
			for (; i < r.length && r[i] != 0;) i++;
			if (e == l.childCount) break;
			let u = l.child(e), { colspan: d, rowspan: f, colwidth: p } = u.attrs;
			for (let e = 0; e < f; e++) {
				if (e + s >= n) {
					(a ||= []).push({
						type: "overlong_rowspan",
						pos: c,
						n: f - e
					});
					break;
				}
				let l = i + e * t;
				for (let e = 0; e < d; e++) {
					r[l + e] == 0 ? r[l + e] = c : (a ||= []).push({
						type: "collision",
						row: s,
						pos: c,
						n: d - e
					});
					let n = p && p[e];
					if (n) {
						let r = (l + e) % t * 2, i = o[r];
						i == null || i != n && o[r + 1] == 1 ? (o[r] = n, o[r + 1] = 1) : i == n && o[r + 1]++;
					}
				}
			}
			i += d, c += u.nodeSize;
		}
		let u = (s + 1) * t, d = 0;
		for (; i < u;) r[i++] == 0 && d++;
		d && (a ||= []).push({
			type: "missing",
			row: s,
			n: d
		}), c++;
	}
	(t === 0 || n === 0) && (a ||= []).push({ type: "zero_sized" });
	let s = new X(t, n, r, a), c = !1;
	for (let e = 0; !c && e < o.length; e += 2) o[e] != null && o[e + 1] < n && (c = !0);
	return c && V_(s, o, e), s;
}
function B_(e) {
	let t = -1, n = !1;
	for (let r = 0; r < e.childCount; r++) {
		let i = e.child(r), a = 0;
		if (n) for (let t = 0; t < r; t++) {
			let n = e.child(t);
			for (let e = 0; e < n.childCount; e++) {
				let i = n.child(e);
				t + i.attrs.rowspan > r && (a += i.attrs.colspan);
			}
		}
		for (let e = 0; e < i.childCount; e++) {
			let t = i.child(e);
			a += t.attrs.colspan, t.attrs.rowspan > 1 && (n = !0);
		}
		t == -1 ? t = a : t != a && (t = Math.max(t, a));
	}
	return t;
}
function V_(e, t, n) {
	e.problems ||= [];
	let r = {};
	for (let i = 0; i < e.map.length; i++) {
		let a = e.map[i];
		if (r[a]) continue;
		r[a] = !0;
		let o = n.nodeAt(a);
		if (!o) throw RangeError(`No cell with offset ${a} found`);
		let s = null, c = o.attrs;
		for (let n = 0; n < c.colspan; n++) {
			let r = t[(i + n) % e.width * 2];
			r != null && (!c.colwidth || c.colwidth[n] != r) && ((s ||= H_(c))[n] = r);
		}
		s && e.problems.unshift({
			type: "colwidth mismatch",
			pos: a,
			colwidth: s
		});
	}
}
function H_(e) {
	if (e.colwidth) return e.colwidth.slice();
	let t = [];
	for (let n = 0; n < e.colspan; n++) t.push(0);
	return t;
}
function Z(e) {
	let t = e.cached.tableNodeTypes;
	if (!t) {
		t = e.cached.tableNodeTypes = {};
		for (let n in e.nodes) {
			let r = e.nodes[n], i = r.spec.tableRole;
			i && (t[i] = r);
		}
	}
	return t;
}
var U_ = new j("selectingCells");
function W_(e) {
	for (let t = e.depth - 1; t > 0; t--) if (e.node(t).type.spec.tableRole == "row") return e.node(0).resolve(e.before(t + 1));
	return null;
}
function G_(e) {
	for (let t = e.depth; t > 0; t--) {
		let n = e.node(t).type.spec.tableRole;
		if (n === "cell" || n === "header_cell") return e.node(t);
	}
	return null;
}
function K_(e) {
	let t = e.selection.$head;
	for (let e = t.depth; e > 0; e--) if (t.node(e).type.spec.tableRole == "row") return !0;
	return !1;
}
function q_(e) {
	let t = e.selection;
	if ("$anchorCell" in t && t.$anchorCell) return t.$anchorCell.pos > t.$headCell.pos ? t.$anchorCell : t.$headCell;
	if ("node" in t && t.node && t.node.type.spec.tableRole == "cell") return t.$anchor;
	let n = W_(t.$head) || J_(t.$head);
	if (n) return n;
	throw RangeError(`No cell found around position ${t.head}`);
}
function J_(e) {
	for (let t = e.nodeAfter, n = e.pos; t; t = t.firstChild, n++) {
		let r = t.type.spec.tableRole;
		if (r == "cell" || r == "header_cell") return e.doc.resolve(n);
	}
	for (let t = e.nodeBefore, n = e.pos; t; t = t.lastChild, n--) {
		let r = t.type.spec.tableRole;
		if (r == "cell" || r == "header_cell") return e.doc.resolve(n - t.nodeSize);
	}
}
function Y_(e) {
	return e.parent.type.spec.tableRole == "row" && !!e.nodeAfter;
}
function X_(e) {
	return e.node(0).resolve(e.pos + e.nodeAfter.nodeSize);
}
function Z_(e, t) {
	return e.depth == t.depth && e.pos >= t.start(-1) && e.pos <= t.end(-1);
}
function Q_(e, t, n) {
	let r = e.node(-1), i = X.get(r), a = e.start(-1), o = i.nextCell(e.pos - a, t, n);
	return o == null ? null : e.node(0).resolve(a + o);
}
function $_(e, t, n = 1) {
	let r = {
		...e,
		colspan: e.colspan - n
	};
	return r.colwidth && (r.colwidth = r.colwidth.slice(), r.colwidth.splice(t, n), r.colwidth.some((e) => e > 0) || (r.colwidth = null)), r;
}
function ev(e, t, n = 1) {
	let r = {
		...e,
		colspan: e.colspan + n
	};
	if (r.colwidth) {
		r.colwidth = r.colwidth.slice();
		for (let e = 0; e < n; e++) r.colwidth.splice(t, 0, 0);
	}
	return r;
}
function tv(e, t, n) {
	let r = Z(t.type.schema).header_cell;
	for (let i = 0; i < e.height; i++) if (t.nodeAt(e.map[n + i * e.width]).type != r) return !1;
	return !0;
}
var Q = class e extends D {
	constructor(e, t = e) {
		let n = e.node(-1), r = X.get(n), i = e.start(-1), a = r.rectBetween(e.pos - i, t.pos - i), o = e.node(0), s = r.cellsInRect(a).filter((e) => e != t.pos - i);
		s.unshift(t.pos - i);
		let c = s.map((e) => {
			let t = n.nodeAt(e);
			if (!t) throw RangeError(`No cell with offset ${e} found`);
			let r = i + e + 1;
			return new Pn(o.resolve(r), o.resolve(r + t.content.size));
		});
		super(c[0].$from, c[0].$to, c), this.$anchorCell = e, this.$headCell = t;
	}
	map(t, n) {
		let r = t.resolve(n.map(this.$anchorCell.pos)), i = t.resolve(n.map(this.$headCell.pos));
		if (Y_(r) && Y_(i) && Z_(r, i)) {
			let t = this.$anchorCell.node(-1) != r.node(-1);
			return t && this.isRowSelection() ? e.rowSelection(r, i) : t && this.isColSelection() ? e.colSelection(r, i) : new e(r, i);
		}
		return O.between(r, i);
	}
	content() {
		let e = this.$anchorCell.node(-1), t = X.get(e), n = this.$anchorCell.start(-1), r = t.rectBetween(this.$anchorCell.pos - n, this.$headCell.pos - n), i = {}, a = [];
		for (let n = r.top; n < r.bottom; n++) {
			let o = [];
			for (let a = n * t.width + r.left, s = r.left; s < r.right; s++, a++) {
				let n = t.map[a];
				if (i[n]) continue;
				i[n] = !0;
				let s = t.findCell(n), c = e.nodeAt(n);
				if (!c) throw RangeError(`No cell with offset ${n} found`);
				let l = r.left - s.left, u = s.right - r.right;
				if (l > 0 || u > 0) {
					let e = c.attrs;
					if (l > 0 && (e = $_(e, 0, l)), u > 0 && (e = $_(e, e.colspan - u, u)), s.left < r.left) {
						if (c = c.type.createAndFill(e), !c) throw RangeError(`Could not create cell with attrs ${JSON.stringify(e)}`);
					} else c = c.type.create(e, c.content);
				}
				if (s.top < r.top || s.bottom > r.bottom) {
					let e = {
						...c.attrs,
						rowspan: Math.min(s.bottom, r.bottom) - Math.max(s.top, r.top)
					};
					c = s.top < r.top ? c.type.createAndFill(e) : c.type.create(e, c.content);
				}
				o.push(c);
			}
			a.push(e.child(n).copy(S.from(o)));
		}
		let o = this.isColSelection() && this.isRowSelection() ? e : a;
		return new w(S.from(o), 1, 1);
	}
	replace(e, t = w.empty) {
		let n = e.steps.length, r = this.ranges;
		for (let i = 0; i < r.length; i++) {
			let { $from: a, $to: o } = r[i], s = e.mapping.slice(n);
			e.replace(s.map(a.pos), s.map(o.pos), i ? w.empty : t);
		}
		let i = D.findFrom(e.doc.resolve(e.mapping.slice(n).map(this.to)), -1);
		i && e.setSelection(i);
	}
	replaceWith(e, t) {
		this.replace(e, new w(S.from(t), 0, 0));
	}
	forEachCell(e) {
		let t = this.$anchorCell.node(-1), n = X.get(t), r = this.$anchorCell.start(-1), i = n.cellsInRect(n.rectBetween(this.$anchorCell.pos - r, this.$headCell.pos - r));
		for (let n = 0; n < i.length; n++) e(t.nodeAt(i[n]), r + i[n]);
	}
	isColSelection() {
		let e = this.$anchorCell.index(-1), t = this.$headCell.index(-1);
		if (Math.min(e, t) > 0) return !1;
		let n = e + this.$anchorCell.nodeAfter.attrs.rowspan, r = t + this.$headCell.nodeAfter.attrs.rowspan;
		return Math.max(n, r) == this.$headCell.node(-1).childCount;
	}
	static colSelection(t, n = t) {
		let r = t.node(-1), i = X.get(r), a = t.start(-1), o = i.findCell(t.pos - a), s = i.findCell(n.pos - a), c = t.node(0);
		return o.top <= s.top ? (o.top > 0 && (t = c.resolve(a + i.map[o.left])), s.bottom < i.height && (n = c.resolve(a + i.map[i.width * (i.height - 1) + s.right - 1]))) : (s.top > 0 && (n = c.resolve(a + i.map[s.left])), o.bottom < i.height && (t = c.resolve(a + i.map[i.width * (i.height - 1) + o.right - 1]))), new e(t, n);
	}
	isRowSelection() {
		let e = this.$anchorCell.node(-1), t = X.get(e), n = this.$anchorCell.start(-1), r = t.colCount(this.$anchorCell.pos - n), i = t.colCount(this.$headCell.pos - n);
		if (Math.min(r, i) > 0) return !1;
		let a = r + this.$anchorCell.nodeAfter.attrs.colspan, o = i + this.$headCell.nodeAfter.attrs.colspan;
		return Math.max(a, o) == t.width;
	}
	eq(t) {
		return t instanceof e && t.$anchorCell.pos == this.$anchorCell.pos && t.$headCell.pos == this.$headCell.pos;
	}
	static rowSelection(t, n = t) {
		let r = t.node(-1), i = X.get(r), a = t.start(-1), o = i.findCell(t.pos - a), s = i.findCell(n.pos - a), c = t.node(0);
		return o.left <= s.left ? (o.left > 0 && (t = c.resolve(a + i.map[o.top * i.width])), s.right < i.width && (n = c.resolve(a + i.map[i.width * (s.top + 1) - 1]))) : (s.left > 0 && (n = c.resolve(a + i.map[s.top * i.width])), o.right < i.width && (t = c.resolve(a + i.map[i.width * (o.top + 1) - 1]))), new e(t, n);
	}
	toJSON() {
		return {
			type: "cell",
			anchor: this.$anchorCell.pos,
			head: this.$headCell.pos
		};
	}
	static fromJSON(t, n) {
		return new e(t.resolve(n.anchor), t.resolve(n.head));
	}
	static create(t, n, r = n) {
		return new e(t.resolve(n), t.resolve(r));
	}
	getBookmark() {
		return new nv(this.$anchorCell.pos, this.$headCell.pos);
	}
};
Q.prototype.visible = !1, D.jsonID("cell", Q);
var nv = class e {
	constructor(e, t) {
		this.anchor = e, this.head = t;
	}
	map(t) {
		return new e(t.map(this.anchor), t.map(this.head));
	}
	resolve(e) {
		let t = e.resolve(this.anchor), n = e.resolve(this.head);
		return t.parent.type.spec.tableRole == "row" && n.parent.type.spec.tableRole == "row" && t.index() < t.parent.childCount && n.index() < n.parent.childCount && Z_(t, n) ? new Q(t, n) : D.near(n, 1);
	}
};
function rv(e) {
	if (!(e.selection instanceof Q)) return null;
	let t = [];
	return e.selection.forEachCell((e, n) => {
		t.push(bs.node(n, n + e.nodeSize, { class: "selectedCell" }));
	}), L.create(e.doc, t);
}
function iv({ $from: e, $to: t }) {
	if (e.pos == t.pos || e.pos < t.pos - 6) return !1;
	let n = e.pos, r = t.pos, i = e.depth;
	for (; i >= 0 && !(e.after(i + 1) < e.end(i)); i--, n++);
	for (let e = t.depth; e >= 0 && !(t.before(e + 1) > t.start(e)); e--, r--);
	return n == r && /row|table/.test(e.node(i).type.spec.tableRole);
}
function av({ $from: e, $to: t }) {
	let n, r;
	for (let t = e.depth; t > 0; t--) {
		let r = e.node(t);
		if (r.type.spec.tableRole === "cell" || r.type.spec.tableRole === "header_cell") {
			n = r;
			break;
		}
	}
	for (let e = t.depth; e > 0; e--) {
		let n = t.node(e);
		if (n.type.spec.tableRole === "cell" || n.type.spec.tableRole === "header_cell") {
			r = n;
			break;
		}
	}
	return n !== r && t.parentOffset === 0;
}
function ov(e, t, n) {
	let r = (t || e).selection, i = (t || e).doc, a, o;
	if (r instanceof k && (o = r.node.type.spec.tableRole)) {
		if (o == "cell" || o == "header_cell") a = Q.create(i, r.from);
		else if (o == "row") {
			let e = i.resolve(r.from + 1);
			a = Q.rowSelection(e, e);
		} else if (!n) {
			let e = X.get(r.node), t = r.from + 1, n = t + e.map[e.width * e.height - 1];
			a = Q.create(i, t + 1, n);
		}
	} else r instanceof O && iv(r) ? a = O.create(i, r.from) : r instanceof O && av(r) && (a = O.create(i, r.$from.start(), r.$from.end()));
	return a && (t ||= e.tr).setSelection(a), t;
}
var sv = new j("fix-tables");
function cv(e, t, n, r) {
	let i = e.childCount, a = t.childCount;
	outer: for (let o = 0, s = 0; o < a; o++) {
		let a = t.child(o);
		for (let t = s, r = Math.min(i, o + 3); t < r; t++) if (e.child(t) == a) {
			s = t + 1, n += a.nodeSize;
			continue outer;
		}
		r(a, n), s < i && e.child(s).sameMarkup(a) ? cv(e.child(s), a, n + 1, r) : a.nodesBetween(0, a.content.size, r, n + 1), n += a.nodeSize;
	}
}
function lv(e, t) {
	let n, r = (t, r) => {
		t.type.spec.tableRole == "table" && (n = uv(e, t, r, n));
	};
	return t ? t.doc != e.doc && cv(t.doc, e.doc, 0, r) : e.doc.descendants(r), n;
}
function uv(e, t, n, r) {
	let i = X.get(t);
	if (!i.problems) return r;
	r ||= e.tr;
	let a = [];
	for (let e = 0; e < i.height; e++) a.push(0);
	for (let e = 0; e < i.problems.length; e++) {
		let o = i.problems[e];
		if (o.type == "collision") {
			let e = t.nodeAt(o.pos);
			if (!e) continue;
			let i = e.attrs;
			for (let e = 0; e < i.rowspan; e++) a[o.row + e] += o.n;
			r.setNodeMarkup(r.mapping.map(n + 1 + o.pos), null, $_(i, i.colspan - o.n, o.n));
		} else if (o.type == "missing") a[o.row] += o.n;
		else if (o.type == "overlong_rowspan") {
			let e = t.nodeAt(o.pos);
			if (!e) continue;
			r.setNodeMarkup(r.mapping.map(n + 1 + o.pos), null, {
				...e.attrs,
				rowspan: e.attrs.rowspan - o.n
			});
		} else if (o.type == "colwidth mismatch") {
			let e = t.nodeAt(o.pos);
			if (!e) continue;
			r.setNodeMarkup(r.mapping.map(n + 1 + o.pos), null, {
				...e.attrs,
				colwidth: o.colwidth
			});
		} else if (o.type == "zero_sized") {
			let e = r.mapping.map(n);
			r.delete(e, e + t.nodeSize);
		}
	}
	let o, s;
	for (let e = 0; e < a.length; e++) a[e] && (o ??= e, s = e);
	for (let c = 0, l = n + 1; c < i.height; c++) {
		let n = t.child(c), i = l + n.nodeSize, u = a[c];
		if (u > 0) {
			let t = "cell";
			n.firstChild && (t = n.firstChild.type.spec.tableRole);
			let a = [];
			for (let n = 0; n < u; n++) {
				let n = Z(e.schema)[t].createAndFill();
				n && a.push(n);
			}
			let d = (c == 0 || o == c - 1) && s == c ? l + 1 : i - 1;
			r.insert(r.mapping.map(d), a);
		}
		l = i;
	}
	return r.setMeta(sv, { fixTables: !0 });
}
function dv(e) {
	let t = e.selection, n = q_(e), r = n.node(-1), i = n.start(-1), a = X.get(r);
	return {
		...t instanceof Q ? a.rectBetween(t.$anchorCell.pos - i, t.$headCell.pos - i) : a.findCell(n.pos - i),
		tableStart: i,
		map: a,
		table: r
	};
}
function fv(e, { map: t, tableStart: n, table: r }, i) {
	let a = i > 0 ? -1 : 0;
	tv(t, r, i + a) && (a = i == 0 || i == t.width ? null : 0);
	for (let o = 0; o < t.height; o++) {
		let s = o * t.width + i;
		if (i > 0 && i < t.width && t.map[s - 1] == t.map[s]) {
			let a = t.map[s], c = r.nodeAt(a);
			e.setNodeMarkup(e.mapping.map(n + a), null, ev(c.attrs, i - t.colCount(a))), o += c.attrs.rowspan - 1;
		} else {
			let c = a == null ? Z(r.type.schema).cell : r.nodeAt(t.map[s + a]).type, l = t.positionAt(o, i, r);
			e.insert(e.mapping.map(n + l), c.createAndFill());
		}
	}
	return e;
}
function pv(e, t) {
	if (!K_(e)) return !1;
	if (t) {
		let n = dv(e);
		t(fv(e.tr, n, n.left));
	}
	return !0;
}
function mv(e, t) {
	if (!K_(e)) return !1;
	if (t) {
		let n = dv(e);
		t(fv(e.tr, n, n.right));
	}
	return !0;
}
function hv(e, { map: t, table: n, tableStart: r }, i) {
	let a = e.mapping.maps.length;
	for (let o = 0; o < t.height;) {
		let s = o * t.width + i, c = t.map[s], l = n.nodeAt(c), u = l.attrs;
		if (i > 0 && t.map[s - 1] == c || i < t.width - 1 && t.map[s + 1] == c) e.setNodeMarkup(e.mapping.slice(a).map(r + c), null, $_(u, i - t.colCount(c)));
		else {
			let t = e.mapping.slice(a).map(r + c);
			e.delete(t, t + l.nodeSize);
		}
		o += u.rowspan;
	}
}
function gv(e, t) {
	if (!K_(e)) return !1;
	if (t) {
		let n = dv(e), r = e.tr;
		if (n.left == 0 && n.right == n.map.width) return !1;
		for (let e = n.right - 1; hv(r, n, e), e != n.left; e--) {
			let e = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
			if (!e) throw RangeError("No table found");
			n.table = e, n.map = X.get(e);
		}
		t(r);
	}
	return !0;
}
function _v(e, t, n) {
	let r = Z(t.type.schema).header_cell;
	for (let i = 0; i < e.width; i++) if (t.nodeAt(e.map[i + n * e.width])?.type != r) return !1;
	return !0;
}
function vv(e, { map: t, tableStart: n, table: r }, i) {
	let a = n;
	for (let e = 0; e < i; e++) a += r.child(e).nodeSize;
	let o = [], s = i > 0 ? -1 : 0;
	_v(t, r, i + s) && (s = i == 0 || i == t.height ? null : 0);
	for (let a = 0, c = t.width * i; a < t.width; a++, c++) if (i > 0 && i < t.height && t.map[c] == t.map[c - t.width]) {
		let i = t.map[c], o = r.nodeAt(i).attrs;
		e.setNodeMarkup(n + i, null, {
			...o,
			rowspan: o.rowspan + 1
		}), a += o.colspan - 1;
	} else {
		let e = (s == null ? Z(r.type.schema).cell : r.nodeAt(t.map[c + s * t.width])?.type)?.createAndFill();
		e && o.push(e);
	}
	return e.insert(a, Z(r.type.schema).row.create(null, o)), e;
}
function yv(e, t) {
	if (!K_(e)) return !1;
	if (t) {
		let n = dv(e);
		t(vv(e.tr, n, n.top));
	}
	return !0;
}
function bv(e, t) {
	if (!K_(e)) return !1;
	if (t) {
		let n = dv(e);
		t(vv(e.tr, n, n.bottom));
	}
	return !0;
}
function xv(e, { map: t, table: n, tableStart: r }, i) {
	let a = 0;
	for (let e = 0; e < i; e++) a += n.child(e).nodeSize;
	let o = a + n.child(i).nodeSize, s = e.mapping.maps.length;
	e.delete(a + r, o + r);
	let c = new Set();
	for (let a = 0, o = i * t.width; a < t.width; a++, o++) {
		let l = t.map[o];
		if (!c.has(l)) {
			if (c.add(l), i > 0 && l == t.map[o - t.width]) {
				let t = n.nodeAt(l).attrs;
				e.setNodeMarkup(e.mapping.slice(s).map(l + r), null, {
					...t,
					rowspan: t.rowspan - 1
				}), a += t.colspan - 1;
			} else if (i < t.height && l == t.map[o + t.width]) {
				let o = n.nodeAt(l), c = o.attrs, u = o.type.create({
					...c,
					rowspan: o.attrs.rowspan - 1
				}, o.content), d = t.positionAt(i + 1, a, n);
				e.insert(e.mapping.slice(s).map(r + d), u), a += c.colspan - 1;
			}
		}
	}
}
function Sv(e, t) {
	if (!K_(e)) return !1;
	if (t) {
		let n = dv(e), r = e.tr;
		if (n.top == 0 && n.bottom == n.map.height) return !1;
		for (let e = n.bottom - 1; xv(r, n, e), e != n.top; e--) {
			let e = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
			if (!e) throw RangeError("No table found");
			n.table = e, n.map = X.get(n.table);
		}
		t(r);
	}
	return !0;
}
function Cv(e) {
	let t = e.content;
	return t.childCount == 1 && t.child(0).isTextblock && t.child(0).childCount == 0;
}
function wv({ width: e, height: t, map: n }, r) {
	let i = r.top * e + r.left, a = i, o = (r.bottom - 1) * e + r.left, s = i + (r.right - r.left - 1);
	for (let t = r.top; t < r.bottom; t++) {
		if (r.left > 0 && n[a] == n[a - 1] || r.right < e && n[s] == n[s + 1]) return !0;
		a += e, s += e;
	}
	for (let a = r.left; a < r.right; a++) {
		if (r.top > 0 && n[i] == n[i - e] || r.bottom < t && n[o] == n[o + e]) return !0;
		i++, o++;
	}
	return !1;
}
function Tv(e, t) {
	let n = e.selection;
	if (!(n instanceof Q) || n.$anchorCell.pos == n.$headCell.pos) return !1;
	let r = dv(e), { map: i } = r;
	if (wv(i, r)) return !1;
	if (t) {
		let n = e.tr, a = {}, o = S.empty, s, c;
		for (let e = r.top; e < r.bottom; e++) for (let t = r.left; t < r.right; t++) {
			let l = i.map[e * i.width + t], u = r.table.nodeAt(l);
			if (!(a[l] || !u)) if (a[l] = !0, s == null) s = l, c = u;
			else {
				Cv(u) || (o = o.append(u.content));
				let e = n.mapping.map(l + r.tableStart);
				n.delete(e, e + u.nodeSize);
			}
		}
		if (s == null || c == null) return !0;
		if (n.setNodeMarkup(s + r.tableStart, null, {
			...ev(c.attrs, c.attrs.colspan, r.right - r.left - c.attrs.colspan),
			rowspan: r.bottom - r.top
		}), o.size > 0) {
			let e = s + 1 + c.content.size, t = Cv(c) ? s + 1 : e;
			n.replaceWith(t + r.tableStart, e + r.tableStart, o);
		}
		n.setSelection(new Q(n.doc.resolve(s + r.tableStart))), t(n);
	}
	return !0;
}
function Ev(e, t) {
	let n = Z(e.schema);
	return Dv(({ node: e }) => n[e.type.spec.tableRole])(e, t);
}
function Dv(e) {
	return (t, n) => {
		let r = t.selection, i, a;
		if (r instanceof Q) {
			if (r.$anchorCell.pos != r.$headCell.pos) return !1;
			i = r.$anchorCell.nodeAfter, a = r.$anchorCell.pos;
		} else {
			if (i = G_(r.$from), !i) return !1;
			a = W_(r.$from)?.pos;
		}
		if (i == null || a == null || i.attrs.colspan == 1 && i.attrs.rowspan == 1) return !1;
		if (n) {
			let o = i.attrs, s = [], c = o.colwidth;
			o.rowspan > 1 && (o = {
				...o,
				rowspan: 1
			}), o.colspan > 1 && (o = {
				...o,
				colspan: 1
			});
			let l = dv(t), u = t.tr;
			for (let e = 0; e < l.right - l.left; e++) s.push(c ? {
				...o,
				colwidth: c && c[e] ? [c[e]] : null
			} : o);
			let d;
			for (let t = l.top; t < l.bottom; t++) {
				let n = l.map.positionAt(t, l.left, l.table);
				t == l.top && (n += i.nodeSize);
				for (let r = l.left, a = 0; r < l.right; r++, a++) r == l.left && t == l.top || u.insert(d = u.mapping.map(n + l.tableStart, 1), e({
					node: i,
					row: t,
					col: r
				}).createAndFill(s[a]));
			}
			u.setNodeMarkup(a, e({
				node: i,
				row: l.top,
				col: l.left
			}), s[0]), r instanceof Q && u.setSelection(new Q(u.doc.resolve(r.$anchorCell.pos), d ? u.doc.resolve(d) : void 0)), n(u);
		}
		return !0;
	};
}
function Ov(e, t) {
	return function(n, r) {
		if (!K_(n)) return !1;
		let i = q_(n);
		if (i.nodeAfter.attrs[e] === t) return !1;
		if (r) {
			let a = n.tr;
			n.selection instanceof Q ? n.selection.forEachCell((n, r) => {
				n.attrs[e] !== t && a.setNodeMarkup(r, null, {
					...n.attrs,
					[e]: t
				});
			}) : a.setNodeMarkup(i.pos, null, {
				...i.nodeAfter.attrs,
				[e]: t
			}), r(a);
		}
		return !0;
	};
}
function kv(e) {
	return function(t, n) {
		if (!K_(t)) return !1;
		if (n) {
			let r = Z(t.schema), i = dv(t), a = t.tr, o = i.map.cellsInRect(e == "column" ? {
				left: i.left,
				top: 0,
				right: i.right,
				bottom: i.map.height
			} : e == "row" ? {
				left: 0,
				top: i.top,
				right: i.map.width,
				bottom: i.bottom
			} : i), s = o.map((e) => i.table.nodeAt(e));
			for (let e = 0; e < o.length; e++) s[e].type == r.header_cell && a.setNodeMarkup(i.tableStart + o[e], r.cell, s[e].attrs);
			if (a.steps.length === 0) for (let e = 0; e < o.length; e++) a.setNodeMarkup(i.tableStart + o[e], r.header_cell, s[e].attrs);
			n(a);
		}
		return !0;
	};
}
function Av(e, t, n) {
	let r = t.map.cellsInRect({
		left: 0,
		top: 0,
		right: e == "row" ? t.map.width : 1,
		bottom: e == "column" ? t.map.height : 1
	});
	for (let e = 0; e < r.length; e++) {
		let i = t.table.nodeAt(r[e]);
		if (i && i.type !== n.header_cell) return !1;
	}
	return !0;
}
function jv(e, t) {
	return t ||= { useDeprecatedLogic: !1 }, t.useDeprecatedLogic ? kv(e) : function(t, n) {
		if (!K_(t)) return !1;
		if (n) {
			let r = Z(t.schema), i = dv(t), a = t.tr, o = Av("row", i, r), s = Av("column", i, r), c = (e === "column" ? o : e === "row" && s) ? 1 : 0, l = e == "column" ? {
				left: 0,
				top: c,
				right: 1,
				bottom: i.map.height
			} : e == "row" ? {
				left: c,
				top: 0,
				right: i.map.width,
				bottom: 1
			} : i, u = e == "column" ? s ? r.cell : r.header_cell : e == "row" ? o ? r.cell : r.header_cell : r.cell;
			i.map.cellsInRect(l).forEach((e) => {
				let t = e + i.tableStart, n = a.doc.nodeAt(t);
				n && a.setNodeMarkup(t, u, n.attrs);
			}), n(a);
		}
		return !0;
	};
}
jv("row", { useDeprecatedLogic: !0 }), jv("column", { useDeprecatedLogic: !0 });
var Mv = jv("cell", { useDeprecatedLogic: !0 });
function Nv(e, t) {
	if (t < 0) {
		let t = e.nodeBefore;
		if (t) return e.pos - t.nodeSize;
		for (let t = e.index(-1) - 1, n = e.before(); t >= 0; t--) {
			let r = e.node(-1).child(t), i = r.lastChild;
			if (i) return n - 1 - i.nodeSize;
			n -= r.nodeSize;
		}
	} else {
		if (e.index() < e.parent.childCount - 1) return e.pos + e.nodeAfter.nodeSize;
		let t = e.node(-1);
		for (let n = e.indexAfter(-1), r = e.after(); n < t.childCount; n++) {
			let e = t.child(n);
			if (e.childCount) return r + 1;
			r += e.nodeSize;
		}
	}
	return null;
}
function Pv(e) {
	return function(t, n) {
		if (!K_(t)) return !1;
		let r = Nv(q_(t), e);
		if (r == null) return !1;
		if (n) {
			let e = t.doc.resolve(r);
			n(t.tr.setSelection(O.between(e, X_(e))).scrollIntoView());
		}
		return !0;
	};
}
function Fv(e, t) {
	let n = e.selection.$anchor;
	for (let r = n.depth; r > 0; r--) if (n.node(r).type.spec.tableRole == "table") return t && t(e.tr.delete(n.before(r), n.after(r)).scrollIntoView()), !0;
	return !1;
}
function Iv(e, t) {
	let n = e.selection;
	if (!(n instanceof Q)) return !1;
	if (t) {
		let r = e.tr, i = Z(e.schema).cell.createAndFill().content;
		n.forEachCell((e, t) => {
			e.content.eq(i) || r.replace(r.mapping.map(t + 1), r.mapping.map(t + e.nodeSize - 1), new w(i, 0, 0));
		}), r.docChanged && t(r);
	}
	return !0;
}
function Lv(e) {
	if (e.size === 0) return null;
	let { content: t, openStart: n, openEnd: r } = e;
	for (; t.childCount == 1 && (n > 0 && r > 0 || t.child(0).type.spec.tableRole == "table");) n--, r--, t = t.child(0).content;
	let i = t.child(0), a = i.type.spec.tableRole, o = i.type.schema, s = [];
	if (a == "row") for (let e = 0; e < t.childCount; e++) {
		let i = t.child(e).content, a = e ? 0 : Math.max(0, n - 1), c = e < t.childCount - 1 ? 0 : Math.max(0, r - 1);
		(a || c) && (i = zv(Z(o).row, new w(i, a, c)).content), s.push(i);
	}
	else if (a == "cell" || a == "header_cell") s.push(n || r ? zv(Z(o).row, new w(t, n, r)).content : t);
	else return null;
	return Rv(o, s);
}
function Rv(e, t) {
	let n = [];
	for (let e = 0; e < t.length; e++) {
		let r = t[e];
		for (let t = r.childCount - 1; t >= 0; t--) {
			let { rowspan: i, colspan: a } = r.child(t).attrs;
			for (let t = e; t < e + i; t++) n[t] = (n[t] || 0) + a;
		}
	}
	let r = 0;
	for (let e = 0; e < n.length; e++) r = Math.max(r, n[e]);
	for (let i = 0; i < n.length; i++) if (i >= t.length && t.push(S.empty), n[i] < r) {
		let a = Z(e).cell.createAndFill(), o = [];
		for (let e = n[i]; e < r; e++) o.push(a);
		t[i] = t[i].append(S.from(o));
	}
	return {
		height: t.length,
		width: r,
		rows: t
	};
}
function zv(e, t) {
	let n = e.createAndFill();
	return new Mn(n).replace(0, n.content.size, t).doc;
}
function Bv({ width: e, height: t, rows: n }, r, i) {
	if (e != r) {
		let t = [], i = [];
		for (let e = 0; e < n.length; e++) {
			let a = n[e], o = [];
			for (let n = t[e] || 0, i = 0; n < r; i++) {
				let s = a.child(i % a.childCount);
				n + s.attrs.colspan > r && (s = s.type.createChecked($_(s.attrs, s.attrs.colspan, n + s.attrs.colspan - r), s.content)), o.push(s), n += s.attrs.colspan;
				for (let n = 1; n < s.attrs.rowspan; n++) t[e + n] = (t[e + n] || 0) + s.attrs.colspan;
			}
			i.push(S.from(o));
		}
		n = i, e = r;
	}
	if (t != i) {
		let e = [];
		for (let r = 0, a = 0; r < i; r++, a++) {
			let o = [], s = n[a % t];
			for (let e = 0; e < s.childCount; e++) {
				let t = s.child(e);
				r + t.attrs.rowspan > i && (t = t.type.create({
					...t.attrs,
					rowspan: Math.max(1, i - t.attrs.rowspan)
				}, t.content)), o.push(t);
			}
			e.push(S.from(o));
		}
		n = e, t = i;
	}
	return {
		width: e,
		height: t,
		rows: n
	};
}
function Vv(e, t, n, r, i, a, o) {
	let s = e.doc.type.schema, c = Z(s), l, u;
	if (i > t.width) for (let a = 0, s = 0; a < t.height; a++) {
		let d = n.child(a);
		s += d.nodeSize;
		let f = [], p;
		p = d.lastChild == null || d.lastChild.type == c.cell ? l ||= c.cell.createAndFill() : u ||= c.header_cell.createAndFill();
		for (let e = t.width; e < i; e++) f.push(p);
		e.insert(e.mapping.slice(o).map(s - 1 + r), f);
	}
	if (a > t.height) {
		let s = [];
		for (let e = 0, r = (t.height - 1) * t.width; e < Math.max(t.width, i); e++) {
			let i = e >= t.width ? !1 : n.nodeAt(t.map[r + e]).type == c.header_cell;
			s.push(i ? u ||= c.header_cell.createAndFill() : l ||= c.cell.createAndFill());
		}
		let d = c.row.create(null, S.from(s)), f = [];
		for (let e = t.height; e < a; e++) f.push(d);
		e.insert(e.mapping.slice(o).map(r + n.nodeSize - 2), f);
	}
	return !!(l || u);
}
function Hv(e, t, n, r, i, a, o, s) {
	if (o == 0 || o == t.height) return !1;
	let c = !1;
	for (let l = i; l < a; l++) {
		let i = o * t.width + l, a = t.map[i];
		if (t.map[i - t.width] == a) {
			c = !0;
			let i = n.nodeAt(a), { top: u, left: d } = t.findCell(a);
			e.setNodeMarkup(e.mapping.slice(s).map(a + r), null, {
				...i.attrs,
				rowspan: o - u
			}), e.insert(e.mapping.slice(s).map(t.positionAt(o, d, n)), i.type.createAndFill({
				...i.attrs,
				rowspan: u + i.attrs.rowspan - o
			})), l += i.attrs.colspan - 1;
		}
	}
	return c;
}
function Uv(e, t, n, r, i, a, o, s) {
	if (o == 0 || o == t.width) return !1;
	let c = !1;
	for (let l = i; l < a; l++) {
		let i = l * t.width + o, a = t.map[i];
		if (t.map[i - 1] == a) {
			c = !0;
			let i = n.nodeAt(a), u = t.colCount(a), d = e.mapping.slice(s).map(a + r);
			e.setNodeMarkup(d, null, $_(i.attrs, o - u, i.attrs.colspan - (o - u))), e.insert(d + i.nodeSize, i.type.createAndFill($_(i.attrs, 0, o - u))), l += i.attrs.rowspan - 1;
		}
	}
	return c;
}
function Wv(e, t, n, r, i) {
	let a = n ? e.doc.nodeAt(n - 1) : e.doc;
	if (!a) throw Error("No table found");
	let o = X.get(a), { top: s, left: c } = r, l = c + i.width, u = s + i.height, d = e.tr, f = 0;
	function p() {
		if (a = n ? d.doc.nodeAt(n - 1) : d.doc, !a) throw Error("No table found");
		o = X.get(a), f = d.mapping.maps.length;
	}
	Vv(d, o, a, n, l, u, f) && p(), Hv(d, o, a, n, c, l, s, f) && p(), Hv(d, o, a, n, c, l, u, f) && p(), Uv(d, o, a, n, s, u, c, f) && p(), Uv(d, o, a, n, s, u, l, f) && p();
	for (let e = s; e < u; e++) {
		let t = o.positionAt(e, c, a), r = o.positionAt(e, l, a);
		d.replace(d.mapping.slice(f).map(t + n), d.mapping.slice(f).map(r + n), new w(i.rows[e - s], 0, 0));
	}
	p(), d.setSelection(new Q(d.doc.resolve(n + o.positionAt(s, c, a)), d.doc.resolve(n + o.positionAt(u - 1, l - 1, a)))), t(d);
}
var Gv = Sc({
	ArrowLeft: qv("horiz", -1),
	ArrowRight: qv("horiz", 1),
	ArrowUp: qv("vert", -1),
	ArrowDown: qv("vert", 1),
	"Shift-ArrowLeft": Jv("horiz", -1),
	"Shift-ArrowRight": Jv("horiz", 1),
	"Shift-ArrowUp": Jv("vert", -1),
	"Shift-ArrowDown": Jv("vert", 1),
	Backspace: Iv,
	"Mod-Backspace": Iv,
	Delete: Iv,
	"Mod-Delete": Iv
});
function Kv(e, t, n) {
	return n.eq(e.selection) ? !1 : (t && t(e.tr.setSelection(n).scrollIntoView()), !0);
}
function qv(e, t) {
	return (n, r, i) => {
		if (!i) return !1;
		let a = n.selection;
		if (a instanceof Q) return Kv(n, r, D.near(a.$headCell, t));
		if (e != "horiz" && !a.empty) return !1;
		let o = Qv(i, e, t);
		if (o == null) return !1;
		if (e == "horiz") return Kv(n, r, D.near(n.doc.resolve(a.head + t), t));
		{
			let i = n.doc.resolve(o), a = Q_(i, e, t), s;
			return s = a ? D.near(a, 1) : t < 0 ? D.near(n.doc.resolve(i.before(-1)), -1) : D.near(n.doc.resolve(i.after(-1)), 1), Kv(n, r, s);
		}
	};
}
function Jv(e, t) {
	return (n, r, i) => {
		if (!i) return !1;
		let a = n.selection, o;
		if (a instanceof Q) o = a;
		else {
			let r = Qv(i, e, t);
			if (r == null) return !1;
			o = new Q(n.doc.resolve(r));
		}
		let s = Q_(o.$headCell, e, t);
		return s ? Kv(n, r, new Q(o.$anchorCell, s)) : !1;
	};
}
function Yv(e, t) {
	let n = e.state.doc, r = W_(n.resolve(t));
	return r ? (e.dispatch(e.state.tr.setSelection(new Q(r))), !0) : !1;
}
function Xv(e, t, n) {
	if (!K_(e.state)) return !1;
	let r = Lv(n), i = e.state.selection;
	if (i instanceof Q) {
		r ||= {
			width: 1,
			height: 1,
			rows: [S.from(zv(Z(e.state.schema).cell, n))]
		};
		let t = i.$anchorCell.node(-1), a = i.$anchorCell.start(-1), o = X.get(t).rectBetween(i.$anchorCell.pos - a, i.$headCell.pos - a);
		return r = Bv(r, o.right - o.left, o.bottom - o.top), Wv(e.state, e.dispatch, a, o, r), !0;
	} else if (r) {
		let t = q_(e.state), n = t.start(-1);
		return Wv(e.state, e.dispatch, n, X.get(t.node(-1)).findCell(t.pos - n), r), !0;
	} else return !1;
}
function Zv(e, t) {
	if (t.button != 0 || t.ctrlKey || t.metaKey) return;
	let n = $v(e, t.target), r;
	if (t.shiftKey && e.state.selection instanceof Q) i(e.state.selection.$anchorCell, t), t.preventDefault();
	else if (t.shiftKey && n && (r = W_(e.state.selection.$anchor)) != null && ey(e, t)?.pos != r.pos) i(r, t), t.preventDefault();
	else if (!n) return;
	function i(t, n) {
		let r = ey(e, n), i = U_.getState(e.state) == null;
		if (!r || !Z_(t, r)) if (i) r = t;
		else return;
		let a = new Q(t, r);
		if (i || !e.state.selection.eq(a)) {
			let n = e.state.tr.setSelection(a);
			i && n.setMeta(U_, t.pos), e.dispatch(n);
		}
	}
	function a() {
		e.root.removeEventListener("mouseup", a), e.root.removeEventListener("dragstart", a), e.root.removeEventListener("mousemove", o), U_.getState(e.state) != null && e.dispatch(e.state.tr.setMeta(U_, -1));
	}
	function o(r) {
		let o = r, s = U_.getState(e.state), c;
		if (s != null) c = e.state.doc.resolve(s);
		else if ($v(e, o.target) != n && (c = ey(e, t), !c)) return a();
		c && i(c, o);
	}
	e.root.addEventListener("mouseup", a), e.root.addEventListener("dragstart", a), e.root.addEventListener("mousemove", o);
}
function Qv(e, t, n) {
	if (!(e.state.selection instanceof O)) return null;
	let { $head: r } = e.state.selection;
	for (let i = r.depth - 1; i >= 0; i--) {
		let a = r.node(i);
		if ((n < 0 ? r.index(i) : r.indexAfter(i)) != (n < 0 ? 0 : a.childCount)) return null;
		if (a.type.spec.tableRole == "cell" || a.type.spec.tableRole == "header_cell") {
			let a = r.before(i), o = t == "vert" ? n > 0 ? "down" : "up" : n > 0 ? "right" : "left";
			return e.endOfTextblock(o) ? a : null;
		}
	}
	return null;
}
function $v(e, t) {
	for (; t && t != e.dom; t = t.parentNode) if (t.nodeName == "TD" || t.nodeName == "TH") return t;
	return null;
}
function ey(e, t) {
	let n = e.posAtCoords({
		left: t.clientX,
		top: t.clientY
	});
	if (!n) return null;
	let { inside: r, pos: i } = n;
	return r >= 0 && W_(e.state.doc.resolve(r)) || W_(e.state.doc.resolve(i));
}
var ty = class {
	constructor(e, t) {
		this.node = e, this.defaultCellMinWidth = t, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.table.style.setProperty("--default-cell-min-width", `${t}px`), this.colgroup = this.table.appendChild(document.createElement("colgroup")), ny(e, this.colgroup, this.table, t), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
	}
	update(e) {
		return e.type == this.node.type ? (this.node = e, ny(e, this.colgroup, this.table, this.defaultCellMinWidth), !0) : !1;
	}
	ignoreMutation(e) {
		return e.type == "attributes" && (e.target == this.table || this.colgroup.contains(e.target));
	}
};
function ny(e, t, n, r, i, a) {
	let o = 0, s = !0, c = t.firstChild, l = e.firstChild;
	if (l) {
		for (let e = 0, n = 0; e < l.childCount; e++) {
			let { colspan: u, colwidth: d } = l.child(e).attrs;
			for (let e = 0; e < u; e++, n++) {
				let l = i == n ? a : d && d[e], u = l ? l + "px" : "";
				if (o += l || r, l || (s = !1), c) c.style.width != u && (c.style.width = u), c = c.nextSibling;
				else {
					let e = document.createElement("col");
					e.style.width = u, t.appendChild(e);
				}
			}
		}
		for (; c;) {
			var u;
			let e = c.nextSibling;
			(u = c.parentNode) == null || u.removeChild(c), c = e;
		}
		s ? (n.style.width = o + "px", n.style.minWidth = "") : (n.style.width = "", n.style.minWidth = o + "px");
	}
}
var ry = new j("tableColumnResizing");
function iy({ handleWidth: e = 5, cellMinWidth: t = 25, defaultCellMinWidth: n = 100, View: r = ty, lastColumnResizable: i = !0 } = {}) {
	let a = new A({
		key: ry,
		state: {
			init(e, t) {
				var i;
				let o = (i = a.spec) == null || (i = i.props) == null ? void 0 : i.nodeViews, s = Z(t.schema).table.name;
				return r && o && (o[s] = (e, t) => new r(e, n, t)), new ay(-1, !1);
			},
			apply(e, t) {
				return t.apply(e);
			}
		},
		props: {
			attributes: (e) => {
				let t = ry.getState(e);
				return t && t.activeHandle > -1 ? { class: "resize-cursor" } : {};
			},
			handleDOMEvents: {
				mousemove: (t, n) => {
					oy(t, n, e, i);
				},
				mouseleave: (e) => {
					sy(e);
				},
				mousedown: (e, r) => {
					cy(e, r, t, n);
				}
			},
			decorations: (e) => {
				let t = ry.getState(e);
				if (t && t.activeHandle > -1) return _y(e, t.activeHandle);
			},
			nodeViews: {}
		}
	});
	return a;
}
var ay = class e {
	constructor(e, t) {
		this.activeHandle = e, this.dragging = t;
	}
	apply(t) {
		let n = this, r = t.getMeta(ry);
		if (r && r.setHandle != null) return new e(r.setHandle, !1);
		if (r && r.setDragging !== void 0) return new e(n.activeHandle, r.setDragging);
		if (n.activeHandle > -1 && t.docChanged) {
			let r = t.mapping.map(n.activeHandle, -1);
			return Y_(t.doc.resolve(r)) || (r = -1), new e(r, n.dragging);
		}
		return n;
	}
};
function oy(e, t, n, r) {
	if (!e.editable) return;
	let i = ry.getState(e.state);
	if (i && !i.dragging) {
		let a = uy(t.target), o = -1;
		if (a) {
			let { left: r, right: i } = a.getBoundingClientRect();
			t.clientX - r <= n ? o = dy(e, t, "left", n) : i - t.clientX <= n && (o = dy(e, t, "right", n));
		}
		if (o != i.activeHandle) {
			if (!r && o !== -1) {
				let t = e.state.doc.resolve(o), n = t.node(-1), r = X.get(n), i = t.start(-1);
				if (r.colCount(t.pos - i) + t.nodeAfter.attrs.colspan - 1 == r.width - 1) return;
			}
			py(e, o);
		}
	}
}
function sy(e) {
	if (!e.editable) return;
	let t = ry.getState(e.state);
	t && t.activeHandle > -1 && !t.dragging && py(e, -1);
}
function cy(e, t, n, r) {
	if (!e.editable) return !1;
	let i = e.dom.ownerDocument.defaultView ?? window, a = ry.getState(e.state);
	if (!a || a.activeHandle == -1 || a.dragging) return !1;
	let o = e.state.doc.nodeAt(a.activeHandle), s = ly(e, a.activeHandle, o.attrs);
	e.dispatch(e.state.tr.setMeta(ry, { setDragging: {
		startX: t.clientX,
		startWidth: s
	} }));
	function c(t) {
		i.removeEventListener("mouseup", c), i.removeEventListener("mousemove", l);
		let r = ry.getState(e.state);
		r?.dragging && (my(e, r.activeHandle, fy(r.dragging, t, n)), e.dispatch(e.state.tr.setMeta(ry, { setDragging: null })));
	}
	function l(t) {
		if (!t.which) return c(t);
		let i = ry.getState(e.state);
		if (i && i.dragging) {
			let a = fy(i.dragging, t, n);
			hy(e, i.activeHandle, a, r);
		}
	}
	return hy(e, a.activeHandle, s, r), i.addEventListener("mouseup", c), i.addEventListener("mousemove", l), t.preventDefault(), !0;
}
function ly(e, t, { colspan: n, colwidth: r }) {
	let i = r && r[r.length - 1];
	if (i) return i;
	let a = e.domAtPos(t), o = a.node.childNodes[a.offset].offsetWidth, s = n;
	if (r) for (let e = 0; e < n; e++) r[e] && (o -= r[e], s--);
	return o / s;
}
function uy(e) {
	for (; e && e.nodeName != "TD" && e.nodeName != "TH";) e = e.classList && e.classList.contains("ProseMirror") ? null : e.parentNode;
	return e;
}
function dy(e, t, n, r) {
	let i = n == "right" ? -r : r, a = e.posAtCoords({
		left: t.clientX + i,
		top: t.clientY
	});
	if (!a) return -1;
	let { pos: o } = a, s = W_(e.state.doc.resolve(o));
	if (!s) return -1;
	if (n == "right") return s.pos;
	let c = X.get(s.node(-1)), l = s.start(-1), u = c.map.indexOf(s.pos - l);
	return u % c.width == 0 ? -1 : l + c.map[u - 1];
}
function fy(e, t, n) {
	let r = t.clientX - e.startX;
	return Math.max(n, e.startWidth + r);
}
function py(e, t) {
	e.dispatch(e.state.tr.setMeta(ry, { setHandle: t }));
}
function my(e, t, n) {
	let r = e.state.doc.resolve(t), i = r.node(-1), a = X.get(i), o = r.start(-1), s = a.colCount(r.pos - o) + r.nodeAfter.attrs.colspan - 1, c = e.state.tr;
	for (let e = 0; e < a.height; e++) {
		let t = e * a.width + s;
		if (e && a.map[t] == a.map[t - a.width]) continue;
		let r = a.map[t], l = i.nodeAt(r).attrs, u = l.colspan == 1 ? 0 : s - a.colCount(r);
		if (l.colwidth && l.colwidth[u] == n) continue;
		let d = l.colwidth ? l.colwidth.slice() : gy(l.colspan);
		d[u] = n, c.setNodeMarkup(o + r, null, {
			...l,
			colwidth: d
		});
	}
	c.docChanged && e.dispatch(c);
}
function hy(e, t, n, r) {
	let i = e.state.doc.resolve(t), a = i.node(-1), o = i.start(-1), s = X.get(a).colCount(i.pos - o) + i.nodeAfter.attrs.colspan - 1, c = e.domAtPos(i.start(-1)).node;
	for (; c && c.nodeName != "TABLE";) c = c.parentNode;
	c && ny(a, c.firstChild, c, r, s, n);
}
function gy(e) {
	return Array(e).fill(0);
}
function _y(e, t) {
	let n = [], r = e.doc.resolve(t), i = r.node(-1);
	if (!i) return L.empty;
	let a = X.get(i), o = r.start(-1), s = a.colCount(r.pos - o) + r.nodeAfter.attrs.colspan - 1;
	for (let t = 0; t < a.height; t++) {
		let r = s + t * a.width;
		if ((s == a.width - 1 || a.map[r] != a.map[r + 1]) && (t == 0 || a.map[r] != a.map[r - a.width])) {
			let t = a.map[r], s = o + t + i.nodeAt(t).nodeSize - 1, c = document.createElement("div");
			c.className = "column-resize-handle", ry.getState(e)?.dragging && n.push(bs.node(o + t, o + t + i.nodeAt(t).nodeSize, { class: "column-resize-dragging" })), n.push(bs.widget(s, c));
		}
	}
	return L.create(e.doc, n);
}
function vy({ allowTableNodeSelection: e = !1 } = {}) {
	return new A({
		key: U_,
		state: {
			init() {
				return null;
			},
			apply(e, t) {
				let n = e.getMeta(U_);
				if (n != null) return n == -1 ? null : n;
				if (t == null || !e.docChanged) return t;
				let { deleted: r, pos: i } = e.mapping.mapResult(t);
				return r ? null : i;
			}
		},
		props: {
			decorations: rv,
			handleDOMEvents: { mousedown: Zv },
			createSelectionBetween(e) {
				return U_.getState(e.state) == null ? null : e.state.selection;
			},
			handleTripleClick: Yv,
			handleKeyDown: Gv,
			handlePaste: Xv
		},
		appendTransaction(t, n, r) {
			return ov(r, lv(r, n), e);
		}
	});
}
var yy = W.create({
	name: "tableCell",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	content: "block+",
	addAttributes() {
		return {
			colspan: { default: 1 },
			rowspan: { default: 1 },
			colwidth: {
				default: null,
				parseHTML: (e) => {
					let t = e.getAttribute("colwidth"), n = t ? t.split(",").map((e) => parseInt(e, 10)) : null;
					if (!n) {
						let t = e.closest("table")?.querySelectorAll("colgroup > col"), n = Array.from(e.parentElement?.children || []).indexOf(e);
						if (n && n > -1 && t && t[n]) {
							let e = t[n].getAttribute("width");
							return e ? [parseInt(e, 10)] : null;
						}
					}
					return n;
				}
			}
		};
	},
	tableRole: "cell",
	isolating: !0,
	parseHTML() {
		return [{ tag: "td" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"td",
			H(this.options.HTMLAttributes, e),
			0
		];
	}
}), by = W.create({
	name: "tableHeader",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	content: "block+",
	addAttributes() {
		return {
			colspan: { default: 1 },
			rowspan: { default: 1 },
			colwidth: {
				default: null,
				parseHTML: (e) => {
					let t = e.getAttribute("colwidth");
					return t ? t.split(",").map((e) => parseInt(e, 10)) : null;
				}
			}
		};
	},
	tableRole: "header_cell",
	isolating: !0,
	parseHTML() {
		return [{ tag: "th" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"th",
			H(this.options.HTMLAttributes, e),
			0
		];
	}
}), xy = W.create({
	name: "tableRow",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	content: "(tableCell | tableHeader)*",
	tableRole: "row",
	parseHTML() {
		return [{ tag: "tr" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"tr",
			H(this.options.HTMLAttributes, e),
			0
		];
	}
});
function Sy(e, t) {
	return t ? ["width", `${Math.max(t, e)}px`] : ["min-width", `${e}px`];
}
function Cy(e, t, n, r, i, a) {
	var o;
	let s = 0, c = !0, l = t.firstChild, u = e.firstChild;
	if (u !== null) for (let e = 0, n = 0; e < u.childCount; e += 1) {
		let { colspan: o, colwidth: d } = u.child(e).attrs;
		for (let e = 0; e < o; e += 1, n += 1) {
			let o = i === n ? a : d && d[e], u = o ? `${o}px` : "";
			if (s += o || r, o || (c = !1), l) {
				if (l.style.width !== u) {
					let [e, t] = Sy(r, o);
					l.style.setProperty(e, t);
				}
				l = l.nextSibling;
			} else {
				let e = document.createElement("col"), [n, i] = Sy(r, o);
				e.style.setProperty(n, i), t.appendChild(e);
			}
		}
	}
	for (; l;) {
		let e = l.nextSibling;
		(o = l.parentNode) == null || o.removeChild(l), l = e;
	}
	let d = e.attrs.style && typeof e.attrs.style == "string" && /\bwidth\s*:/i.test(e.attrs.style);
	c && !d ? (n.style.width = `${s}px`, n.style.minWidth = "") : (n.style.width = "", n.style.minWidth = `${s}px`);
}
var wy = class {
	constructor(e, t) {
		this.node = e, this.cellMinWidth = t, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), e.attrs.style && (this.table.style.cssText = e.attrs.style), this.colgroup = this.table.appendChild(document.createElement("colgroup")), Cy(e, this.colgroup, this.table, t), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
	}
	update(e) {
		return e.type === this.node.type ? (this.node = e, Cy(e, this.colgroup, this.table, this.cellMinWidth), !0) : !1;
	}
	ignoreMutation(e) {
		let t = e.target, n = this.dom.contains(t), r = this.contentDOM.contains(t);
		return !!(n && !r && (e.type === "attributes" || e.type === "childList" || e.type === "characterData"));
	}
};
function Ty(e, t, n, r) {
	let i = 0, a = !0, o = [], s = e.firstChild;
	if (!s) return {};
	for (let e = 0, c = 0; e < s.childCount; e += 1) {
		let { colspan: l, colwidth: u } = s.child(e).attrs;
		for (let e = 0; e < l; e += 1, c += 1) {
			let s = n === c ? r : u && u[e];
			i += s || t, s || (a = !1);
			let [l, d] = Sy(t, s);
			o.push(["col", { style: `${l}: ${d}` }]);
		}
	}
	let c = a ? `${i}px` : "", l = a ? "" : `${i}px`;
	return {
		colgroup: [
			"colgroup",
			{},
			...o
		],
		tableWidth: c,
		tableMinWidth: l
	};
}
function Ey(e, t) {
	return t ? e.createChecked(null, t) : e.createAndFill();
}
function Dy(e) {
	if (e.cached.tableNodeTypes) return e.cached.tableNodeTypes;
	let t = {};
	return Object.keys(e.nodes).forEach((n) => {
		let r = e.nodes[n];
		r.spec.tableRole && (t[r.spec.tableRole] = r);
	}), e.cached.tableNodeTypes = t, t;
}
function Oy(e, t, n, r, i) {
	let a = Dy(e), o = [], s = [];
	for (let e = 0; e < n; e += 1) {
		let e = Ey(a.cell, i);
		if (e && s.push(e), r) {
			let e = Ey(a.header_cell, i);
			e && o.push(e);
		}
	}
	let c = [];
	for (let e = 0; e < t; e += 1) c.push(a.row.createChecked(null, r && e === 0 ? o : s));
	return a.table.createChecked(null, c);
}
function ky(e) {
	return e instanceof Q;
}
var Ay = ({ editor: e }) => {
	let { selection: t } = e.state;
	if (!ky(t)) return !1;
	let n = 0;
	return Vl(t.ranges[0].$from, (e) => e.type.name === "table")?.node.descendants((e) => {
		if (e.type.name === "table") return !1;
		["tableCell", "tableHeader"].includes(e.type.name) && (n += 1);
	}), n === t.ranges.length ? (e.commands.deleteTable(), !0) : !1;
};
function jy(e) {
	return (e || "").replace(/\s+/g, " ").trim();
}
function My(e, t, n = {}) {
	let r = n.cellLineSeparator ?? "";
	if (!e || !e.content || e.content.length === 0) return "";
	let i = [];
	e.content.forEach((e) => {
		let n = [];
		e.content && e.content.forEach((e) => {
			let i = "";
			i = e.content && Array.isArray(e.content) && e.content.length > 1 ? e.content.map((e) => t.renderChildren(e)).join(r) : e.content ? t.renderChildren(e.content) : "";
			let a = jy(i), o = e.type === "tableHeader";
			n.push({
				text: a,
				isHeader: o
			});
		}), i.push(n);
	});
	let a = i.reduce((e, t) => Math.max(e, t.length), 0);
	if (a === 0) return "";
	let o = Array(a).fill(0);
	i.forEach((e) => {
		for (let t = 0; t < a; t += 1) {
			let n = (e[t]?.text || "").length;
			n > o[t] && (o[t] = n), o[t] < 3 && (o[t] = 3);
		}
	});
	let s = (e, t) => e + " ".repeat(Math.max(0, t - e.length)), c = i[0], l = c.some((e) => e.isHeader), u = "\n", d = Array(a).fill(0).map((e, t) => l && c[t] && c[t].text || "");
	return u += `| ${d.map((e, t) => s(e, o[t])).join(" | ")} |
`, u += `| ${o.map((e) => "-".repeat(Math.max(3, e))).join(" | ")} |
`, (l ? i.slice(1) : i).forEach((e) => {
		u += `| ${Array(a).fill(0).map((t, n) => s(e[n] && e[n].text || "", o[n])).join(" | ")} |
`;
	}), u;
}
var Ny = My, Py = W.create({
	name: "table",
	addOptions() {
		return {
			HTMLAttributes: {},
			resizable: !1,
			renderWrapper: !1,
			handleWidth: 5,
			cellMinWidth: 25,
			View: wy,
			lastColumnResizable: !0,
			allowTableNodeSelection: !1
		};
	},
	content: "tableRow+",
	tableRole: "table",
	isolating: !0,
	group: "block",
	parseHTML() {
		return [{ tag: "table" }];
	},
	renderHTML({ node: e, HTMLAttributes: t }) {
		let { colgroup: n, tableWidth: r, tableMinWidth: i } = Ty(e, this.options.cellMinWidth), a = t.style;
		function o() {
			return a || (r ? `width: ${r}` : `min-width: ${i}`);
		}
		let s = [
			"table",
			H(this.options.HTMLAttributes, t, { style: o() }),
			n,
			["tbody", 0]
		];
		return this.options.renderWrapper ? [
			"div",
			{ class: "tableWrapper" },
			s
		] : s;
	},
	parseMarkdown: (e, t) => {
		let n = [];
		if (e.header) {
			let r = [];
			e.header.forEach((e) => {
				r.push(t.createNode("tableHeader", {}, [{
					type: "paragraph",
					content: t.parseInline(e.tokens)
				}]));
			}), n.push(t.createNode("tableRow", {}, r));
		}
		return e.rows && e.rows.forEach((e) => {
			let r = [];
			e.forEach((e) => {
				r.push(t.createNode("tableCell", {}, [{
					type: "paragraph",
					content: t.parseInline(e.tokens)
				}]));
			}), n.push(t.createNode("tableRow", {}, r));
		}), t.createNode("table", void 0, n);
	},
	renderMarkdown: (e, t) => Ny(e, t),
	addCommands() {
		return {
			insertTable: ({ rows: e = 3, cols: t = 3, withHeaderRow: n = !0 } = {}) => ({ tr: r, dispatch: i, editor: a }) => {
				let o = Oy(a.schema, e, t, n);
				if (i) {
					let e = r.selection.from + 1;
					r.replaceSelectionWith(o).scrollIntoView().setSelection(O.near(r.doc.resolve(e)));
				}
				return !0;
			},
			addColumnBefore: () => ({ state: e, dispatch: t }) => pv(e, t),
			addColumnAfter: () => ({ state: e, dispatch: t }) => mv(e, t),
			deleteColumn: () => ({ state: e, dispatch: t }) => gv(e, t),
			addRowBefore: () => ({ state: e, dispatch: t }) => yv(e, t),
			addRowAfter: () => ({ state: e, dispatch: t }) => bv(e, t),
			deleteRow: () => ({ state: e, dispatch: t }) => Sv(e, t),
			deleteTable: () => ({ state: e, dispatch: t }) => Fv(e, t),
			mergeCells: () => ({ state: e, dispatch: t }) => Tv(e, t),
			splitCell: () => ({ state: e, dispatch: t }) => Ev(e, t),
			toggleHeaderColumn: () => ({ state: e, dispatch: t }) => jv("column")(e, t),
			toggleHeaderRow: () => ({ state: e, dispatch: t }) => jv("row")(e, t),
			toggleHeaderCell: () => ({ state: e, dispatch: t }) => Mv(e, t),
			mergeOrSplit: () => ({ state: e, dispatch: t }) => Tv(e, t) ? !0 : Ev(e, t),
			setCellAttribute: (e, t) => ({ state: n, dispatch: r }) => Ov(e, t)(n, r),
			goToNextCell: () => ({ state: e, dispatch: t }) => Pv(1)(e, t),
			goToPreviousCell: () => ({ state: e, dispatch: t }) => Pv(-1)(e, t),
			fixTables: () => ({ state: e, dispatch: t }) => (t && lv(e), !0),
			setCellSelection: (e) => ({ tr: t, dispatch: n }) => {
				if (n) {
					let n = Q.create(t.doc, e.anchorCell, e.headCell);
					t.setSelection(n);
				}
				return !0;
			}
		};
	},
	addKeyboardShortcuts() {
		return {
			Tab: () => this.editor.commands.goToNextCell() ? !0 : this.editor.can().addRowAfter() ? this.editor.chain().addRowAfter().goToNextCell().run() : !1,
			"Shift-Tab": () => this.editor.commands.goToPreviousCell(),
			Backspace: Ay,
			"Mod-Backspace": Ay,
			Delete: Ay,
			"Mod-Delete": Ay
		};
	},
	addProseMirrorPlugins() {
		return [...this.options.resizable && this.editor.isEditable ? [iy({
			handleWidth: this.options.handleWidth,
			cellMinWidth: this.options.cellMinWidth,
			defaultCellMinWidth: this.options.cellMinWidth,
			View: this.options.View,
			lastColumnResizable: this.options.lastColumnResizable
		})] : [], vy({ allowTableNodeSelection: this.options.allowTableNodeSelection })];
	},
	extendNodeSchema(e) {
		return { tableRole: V(B(e, "tableRole", {
			name: e.name,
			options: e.options,
			storage: e.storage
		})) };
	}
});
U.create({
	name: "tableKit",
	addExtensions() {
		let e = [];
		return this.options.table !== !1 && e.push(Py.configure(this.options.table)), this.options.tableCell !== !1 && e.push(yy.configure(this.options.tableCell)), this.options.tableHeader !== !1 && e.push(by.configure(this.options.tableHeader)), this.options.tableRow !== !1 && e.push(xy.configure(this.options.tableRow)), e;
	}
});
var Fy = 20, Iy = (e, t = 0) => {
	let n = [];
	return !e.children.length || t > Fy || Array.from(e.children).forEach((e) => {
		e.tagName === "SPAN" ? n.push(e) : e.children.length && n.push(...Iy(e, t + 1));
	}), n;
}, Ly = (e) => {
	if (!e.children.length) return;
	let t = Iy(e);
	t && t.forEach((e) => {
		let t = e.getAttribute("style"), n = (e.parentElement?.closest("span"))?.getAttribute("style");
		e.setAttribute("style", `${n};${t}`);
	});
}, Ry = sd.create({
	name: "textStyle",
	priority: 101,
	addOptions() {
		return {
			HTMLAttributes: {},
			mergeNestedSpanStyles: !0
		};
	},
	parseHTML() {
		return [{
			tag: "span",
			consuming: !1,
			getAttrs: (e) => e.hasAttribute("style") ? (this.options.mergeNestedSpanStyles && Ly(e), {}) : !1
		}];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"span",
			H(this.options.HTMLAttributes, e),
			0
		];
	},
	addCommands() {
		return {
			toggleTextStyle: (e) => ({ commands: t }) => t.toggleMark(this.name, e),
			removeEmptyTextStyle: () => ({ tr: e }) => {
				let { selection: t } = e;
				return e.doc.nodesBetween(t.from, t.to, (t, n) => {
					if (t.isTextblock) return !0;
					t.marks.filter((e) => e.type === this.type).some((e) => Object.values(e.attrs).some((e) => !!e)) || e.removeMark(n, n + t.nodeSize, this.type);
				}), !0;
			}
		};
	}
}), zy = U.create({
	name: "backgroundColor",
	addOptions() {
		return { types: ["textStyle"] };
	},
	addGlobalAttributes() {
		return [{
			types: this.options.types,
			attributes: { backgroundColor: {
				default: null,
				parseHTML: (e) => {
					let t = e.getAttribute("style");
					if (t) {
						let e = t.split(";").map((e) => e.trim()).filter(Boolean);
						for (let t = e.length - 1; t >= 0; --t) {
							let n = e[t].split(":");
							if (n.length >= 2) {
								let e = n[0].trim().toLowerCase(), t = n.slice(1).join(":").trim();
								if (e === "background-color") return t.replace(/['"]+/g, "");
							}
						}
					}
					return e.style.backgroundColor?.replace(/['"]+/g, "");
				},
				renderHTML: (e) => e.backgroundColor ? { style: `background-color: ${e.backgroundColor}` } : {}
			} }
		}];
	},
	addCommands() {
		return {
			setBackgroundColor: (e) => ({ chain: t }) => t().setMark("textStyle", { backgroundColor: e }).run(),
			unsetBackgroundColor: () => ({ chain: e }) => e().setMark("textStyle", { backgroundColor: null }).removeEmptyTextStyle().run()
		};
	}
}), By = U.create({
	name: "color",
	addOptions() {
		return { types: ["textStyle"] };
	},
	addGlobalAttributes() {
		return [{
			types: this.options.types,
			attributes: { color: {
				default: null,
				parseHTML: (e) => {
					let t = e.getAttribute("style");
					if (t) {
						let e = t.split(";").map((e) => e.trim()).filter(Boolean);
						for (let t = e.length - 1; t >= 0; --t) {
							let n = e[t].split(":");
							if (n.length >= 2) {
								let e = n[0].trim().toLowerCase(), t = n.slice(1).join(":").trim();
								if (e === "color") return t.replace(/['"]+/g, "");
							}
						}
					}
					return e.style.color?.replace(/['"]+/g, "");
				},
				renderHTML: (e) => e.color ? { style: `color: ${e.color}` } : {}
			} }
		}];
	},
	addCommands() {
		return {
			setColor: (e) => ({ chain: t }) => t().setMark("textStyle", { color: e }).run(),
			unsetColor: () => ({ chain: e }) => e().setMark("textStyle", { color: null }).removeEmptyTextStyle().run()
		};
	}
}), Vy = U.create({
	name: "fontFamily",
	addOptions() {
		return { types: ["textStyle"] };
	},
	addGlobalAttributes() {
		return [{
			types: this.options.types,
			attributes: { fontFamily: {
				default: null,
				parseHTML: (e) => e.style.fontFamily,
				renderHTML: (e) => e.fontFamily ? { style: `font-family: ${e.fontFamily}` } : {}
			} }
		}];
	},
	addCommands() {
		return {
			setFontFamily: (e) => ({ chain: t }) => t().setMark("textStyle", { fontFamily: e }).run(),
			unsetFontFamily: () => ({ chain: e }) => e().setMark("textStyle", { fontFamily: null }).removeEmptyTextStyle().run()
		};
	}
}), Hy = U.create({
	name: "fontSize",
	addOptions() {
		return { types: ["textStyle"] };
	},
	addGlobalAttributes() {
		return [{
			types: this.options.types,
			attributes: { fontSize: {
				default: null,
				parseHTML: (e) => e.style.fontSize,
				renderHTML: (e) => e.fontSize ? { style: `font-size: ${e.fontSize}` } : {}
			} }
		}];
	},
	addCommands() {
		return {
			setFontSize: (e) => ({ chain: t }) => t().setMark("textStyle", { fontSize: e }).run(),
			unsetFontSize: () => ({ chain: e }) => e().setMark("textStyle", { fontSize: null }).removeEmptyTextStyle().run()
		};
	}
}), Uy = U.create({
	name: "lineHeight",
	addOptions() {
		return { types: ["textStyle"] };
	},
	addGlobalAttributes() {
		return [{
			types: this.options.types,
			attributes: { lineHeight: {
				default: null,
				parseHTML: (e) => e.style.lineHeight,
				renderHTML: (e) => e.lineHeight ? { style: `line-height: ${e.lineHeight}` } : {}
			} }
		}];
	},
	addCommands() {
		return {
			setLineHeight: (e) => ({ chain: t }) => t().setMark("textStyle", { lineHeight: e }).run(),
			unsetLineHeight: () => ({ chain: e }) => e().setMark("textStyle", { lineHeight: null }).removeEmptyTextStyle().run()
		};
	}
});
U.create({
	name: "textStyleKit",
	addExtensions() {
		let e = [];
		return this.options.backgroundColor !== !1 && e.push(zy.configure(this.options.backgroundColor)), this.options.color !== !1 && e.push(By.configure(this.options.color)), this.options.fontFamily !== !1 && e.push(Vy.configure(this.options.fontFamily)), this.options.fontSize !== !1 && e.push(Hy.configure(this.options.fontSize)), this.options.lineHeight !== !1 && e.push(Uy.configure(this.options.lineHeight)), this.options.textStyle !== !1 && e.push(Ry.configure(this.options.textStyle)), e;
	}
});
var Wy = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))$/, Gy = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))/g, Ky = sd.create({
	name: "highlight",
	addOptions() {
		return {
			multicolor: !1,
			HTMLAttributes: {}
		};
	},
	addAttributes() {
		return this.options.multicolor ? { color: {
			default: null,
			parseHTML: (e) => e.getAttribute("data-color") || e.style.backgroundColor,
			renderHTML: (e) => e.color ? {
				"data-color": e.color,
				style: `background-color: ${e.color}; color: inherit`
			} : {}
		} } : {};
	},
	parseHTML() {
		return [{ tag: "mark" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"mark",
			H(this.options.HTMLAttributes, e),
			0
		];
	},
	renderMarkdown: (e, t) => `==${t.renderChildren(e)}==`,
	parseMarkdown: (e, t) => t.applyMark("highlight", t.parseInline(e.tokens || [])),
	markdownTokenizer: {
		name: "highlight",
		level: "inline",
		start: (e) => e.indexOf("=="),
		tokenize(e, t, n) {
			let r = /^(==)([^=]+)(==)/.exec(e);
			if (r) {
				let e = r[2].trim(), t = n.inlineTokens(e);
				return {
					type: "highlight",
					raw: r[0],
					text: e,
					tokens: t
				};
			}
		}
	},
	addCommands() {
		return {
			setHighlight: (e) => ({ commands: t }) => t.setMark(this.name, e),
			toggleHighlight: (e) => ({ commands: t }) => t.toggleMark(this.name, e),
			unsetHighlight: () => ({ commands: e }) => e.unsetMark(this.name)
		};
	},
	addKeyboardShortcuts() {
		return { "Mod-Shift-h": () => this.editor.commands.toggleHighlight() };
	},
	addInputRules() {
		return [jd({
			find: Wy,
			type: this.type
		})];
	},
	addPasteRules() {
		return [Jd({
			find: Gy,
			type: this.type
		})];
	}
}), qy = W.create({
	name: "video",
	group: "block",
	selectable: !0,
	draggable: !0,
	atom: !0,
	addAttributes() {
		return {
			src: { default: null },
			controls: { default: !0 },
			width: { default: "100%" }
		};
	},
	parseHTML() {
		return [{ tag: "video" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"video",
			H(e),
			["source", { src: e.src }]
		];
	},
	addCommands() {
		return { setVideo: (e) => ({ commands: t }) => t.insertContent({
			type: this.name,
			attrs: e
		}) };
	}
}), Jy = U.create({
	name: "indent",
	addOptions() {
		return {
			types: ["heading", "paragraph"],
			indentSize: 24,
			minLevel: 0,
			maxLevel: 8
		};
	},
	addGlobalAttributes() {
		return [{
			types: this.options.types,
			attributes: { indent: {
				default: 0,
				parseHTML: (e) => {
					let t = e.style.paddingLeft;
					return t ? parseInt(t, 10) / this.options.indentSize : 0;
				},
				renderHTML: (e) => e.indent ? { style: `padding-left: ${e.indent * this.options.indentSize}px` } : {}
			} }
		}];
	},
	addCommands() {
		return {
			indent: () => ({ tr: e, state: t, dispatch: n }) => {
				let { selection: r } = t, i = e, a = !1;
				return t.doc.nodesBetween(r.from, r.to, (e, t) => {
					if (this.options.types.includes(e.type.name)) {
						let n = e.attrs.indent || 0;
						n < this.options.maxLevel && (i = i.setNodeMarkup(t, null, {
							...e.attrs,
							indent: n + 1
						}), a = !0);
					}
				}), n && a && n(i), a;
			},
			outdent: () => ({ tr: e, state: t, dispatch: n }) => {
				let { selection: r } = t, i = e, a = !1;
				return t.doc.nodesBetween(r.from, r.to, (e, t) => {
					if (this.options.types.includes(e.type.name)) {
						let n = e.attrs.indent || 0;
						n > this.options.minLevel && (i = i.setNodeMarkup(t, null, {
							...e.attrs,
							indent: n - 1
						}), a = !0);
					}
				}), n && a && n(i), a;
			}
		};
	},
	addKeyboardShortcuts() {
		return {
			Tab: () => this.editor.commands.indent(),
			"Shift-Tab": () => this.editor.commands.outdent()
		};
	}
}), Yy = W.create({
	name: "iframe",
	group: "block",
	atom: !0,
	selectable: !0,
	draggable: !0,
	addAttributes() {
		return {
			src: { default: null },
			width: { default: "100%" },
			height: { default: "400" },
			frameborder: { default: "0" },
			allowfullscreen: { default: "true" }
		};
	},
	parseHTML() {
		return [{ tag: "iframe" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"div",
			{ class: "iframe-wrapper" },
			["iframe", H(e)]
		];
	},
	addCommands() {
		return { setIframe: (e) => ({ commands: t }) => t.insertContent({
			type: this.name,
			attrs: e
		}) };
	}
}), Xy = ({ config: e, setConfig: t, onSubmit: n, onClose: r }) => {
	if (!e.isOpen) return null;
	let i = (e, n) => {
		t((t) => ({
			...t,
			data: {
				...t.data,
				[e]: n
			}
		}));
	};
	return (0, y.jsx)("div", {
		className: "divt-dialog-overlay",
		onClick: r,
		children: (0, y.jsxs)("div", {
			className: "divt-dialog-content",
			onClick: (e) => e.stopPropagation(),
			children: [
				(0, y.jsxs)("h3", {
					className: "divt-dialog-title",
					children: [
						e.type === "link" && "Insert/Edit Link",
						e.type === "youtube" && "Embed YouTube Video",
						e.type === "iframe" && "Embed HTML / Iframe"
					]
				}),
				(0, y.jsxs)("div", {
					className: "divt-dialog-body",
					children: [(0, y.jsxs)("label", { children: [e.type === "iframe" ? "URL or Embed Code:" : "URL:", (0, y.jsx)("input", {
						type: "text",
						autoFocus: !0,
						placeholder: "https://...",
						value: e.data.url,
						onChange: (e) => i("url", e.target.value)
					})] }), e.type === "iframe" && (0, y.jsxs)("div", {
						className: "divt-dialog-row",
						children: [(0, y.jsxs)("label", { children: ["Width:", (0, y.jsx)("input", {
							type: "text",
							placeholder: "100% or 500px",
							value: e.data.width,
							onChange: (e) => i("width", e.target.value)
						})] }), (0, y.jsxs)("label", { children: ["Height:", (0, y.jsx)("input", {
							type: "text",
							placeholder: "400",
							value: e.data.height,
							onChange: (e) => i("height", e.target.value)
						})] })]
					})]
				}),
				(0, y.jsxs)("div", {
					className: "divt-dialog-footer",
					children: [(0, y.jsx)("button", {
						className: "btn-cancel",
						onClick: r,
						children: "Cancel"
					}), (0, y.jsx)("button", {
						className: "btn-submit",
						onClick: n,
						children: "Save"
					})]
				})
			]
		})
	});
}, Zy = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), Qy = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), $y = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()), eb = (e) => {
	let t = $y(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, tb = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
}, nb = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
	return !1;
}, rb = r(({ color: e = "currentColor", size: t = 24, strokeWidth: r = 2, absoluteStrokeWidth: i, className: a = "", children: o, iconNode: s, ...c }, l) => n("svg", {
	ref: l,
	...tb,
	width: t,
	height: t,
	stroke: e,
	strokeWidth: i ? Number(r) * 24 / Number(t) : r,
	className: Zy("lucide", a),
	...!o && !nb(c) && { "aria-hidden": "true" },
	...c
}, [...s.map(([e, t]) => n(e, t)), ...Array.isArray(o) ? o : [o]])), $ = (e, t) => {
	let i = r(({ className: r, ...i }, a) => n(rb, {
		ref: a,
		iconNode: t,
		className: Zy(`lucide-${Qy(eb(e))}`, `lucide-${e}`, r),
		...i
	}));
	return i.displayName = eb(e), i;
}, ib = $("bold", [["path", {
	d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",
	key: "mg9rjx"
}]]), ab = $("code-xml", [
	["path", {
		d: "m18 16 4-4-4-4",
		key: "1inbqp"
	}],
	["path", {
		d: "m6 8-4 4 4 4",
		key: "15zrgr"
	}],
	["path", {
		d: "m14.5 4-5 16",
		key: "e7oirm"
	}]
]), ob = $("eraser", [["path", {
	d: "M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",
	key: "g5wo59"
}], ["path", {
	d: "m5.082 11.09 8.828 8.828",
	key: "1wx5vj"
}]]), sb = $("highlighter", [["path", {
	d: "m9 11-6 6v3h9l3-3",
	key: "1a3l36"
}], ["path", {
	d: "m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4",
	key: "14a9rk"
}]]), cb = $("image-plus", [
	["path", {
		d: "M16 5h6",
		key: "1vod17"
	}],
	["path", {
		d: "M19 2v6",
		key: "4bpg5p"
	}],
	["path", {
		d: "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",
		key: "1ue2ih"
	}],
	["path", {
		d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
		key: "1xmnt7"
	}],
	["circle", {
		cx: "9",
		cy: "9",
		r: "2",
		key: "af1f0g"
	}]
]), lb = $("italic", [
	["line", {
		x1: "19",
		x2: "10",
		y1: "4",
		y2: "4",
		key: "15jd3p"
	}],
	["line", {
		x1: "14",
		x2: "5",
		y1: "20",
		y2: "20",
		key: "bu0au3"
	}],
	["line", {
		x1: "15",
		x2: "9",
		y1: "4",
		y2: "20",
		key: "uljnxc"
	}]
]), ub = $("link", [["path", {
	d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
	key: "1cjeqo"
}], ["path", {
	d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
	key: "19qd67"
}]]), db = $("list-indent-decrease", [
	["path", {
		d: "M21 5H11",
		key: "us1j55"
	}],
	["path", {
		d: "M21 12H11",
		key: "wd7e0v"
	}],
	["path", {
		d: "M21 19H11",
		key: "saa85w"
	}],
	["path", {
		d: "m7 8-4 4 4 4",
		key: "o5hrat"
	}]
]), fb = $("list-indent-increase", [
	["path", {
		d: "M21 5H11",
		key: "us1j55"
	}],
	["path", {
		d: "M21 12H11",
		key: "wd7e0v"
	}],
	["path", {
		d: "M21 19H11",
		key: "saa85w"
	}],
	["path", {
		d: "m3 8 4 4-4 4",
		key: "1a3j6y"
	}]
]), pb = $("list-ordered", [
	["path", {
		d: "M11 5h10",
		key: "1cz7ny"
	}],
	["path", {
		d: "M11 12h10",
		key: "1438ji"
	}],
	["path", {
		d: "M11 19h10",
		key: "11t30w"
	}],
	["path", {
		d: "M4 4h1v5",
		key: "10yrso"
	}],
	["path", {
		d: "M4 9h2",
		key: "r1h2o0"
	}],
	["path", {
		d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02",
		key: "xtkcd5"
	}]
]), mb = $("list", [
	["path", {
		d: "M3 5h.01",
		key: "18ugdj"
	}],
	["path", {
		d: "M3 12h.01",
		key: "nlz23k"
	}],
	["path", {
		d: "M3 19h.01",
		key: "noohij"
	}],
	["path", {
		d: "M8 5h13",
		key: "1pao27"
	}],
	["path", {
		d: "M8 12h13",
		key: "1za7za"
	}],
	["path", {
		d: "M8 19h13",
		key: "m83p4d"
	}]
]), hb = $("quote", [["path", {
	d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
	key: "rib7q0"
}], ["path", {
	d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
	key: "1ymkrd"
}]]), gb = $("table", [
	["path", {
		d: "M12 3v18",
		key: "108xh3"
	}],
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M3 9h18",
		key: "1pudct"
	}],
	["path", {
		d: "M3 15h18",
		key: "5xshup"
	}]
]), _b = $("text-align-center", [
	["path", {
		d: "M21 5H3",
		key: "1fi0y6"
	}],
	["path", {
		d: "M17 12H7",
		key: "16if0g"
	}],
	["path", {
		d: "M19 19H5",
		key: "vjpgq2"
	}]
]), vb = $("text-align-end", [
	["path", {
		d: "M21 5H3",
		key: "1fi0y6"
	}],
	["path", {
		d: "M21 12H9",
		key: "dn1m92"
	}],
	["path", {
		d: "M21 19H7",
		key: "4cu937"
	}]
]), yb = $("text-align-justify", [
	["path", {
		d: "M3 5h18",
		key: "1u36vt"
	}],
	["path", {
		d: "M3 12h18",
		key: "1i2n21"
	}],
	["path", {
		d: "M3 19h18",
		key: "awlh7x"
	}]
]), bb = $("text-align-start", [
	["path", {
		d: "M21 5H3",
		key: "1fi0y6"
	}],
	["path", {
		d: "M15 12H3",
		key: "6jk70r"
	}],
	["path", {
		d: "M17 19H3",
		key: "z6ezky"
	}]
]), xb = $("type", [
	["path", {
		d: "M12 4v16",
		key: "1654pz"
	}],
	["path", {
		d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",
		key: "e0r10z"
	}],
	["path", {
		d: "M9 20h6",
		key: "s66wpe"
	}]
]), Sb = $("underline", [["path", {
	d: "M6 4v6a6 6 0 0 0 12 0V4",
	key: "9kb039"
}], ["line", {
	x1: "4",
	x2: "20",
	y1: "20",
	y2: "20",
	key: "nun2al"
}]]), Cb = $("unlink", [
	["path", {
		d: "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",
		key: "yqzxt4"
	}],
	["path", {
		d: "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",
		key: "4qinb0"
	}],
	["line", {
		x1: "8",
		x2: "8",
		y1: "2",
		y2: "5",
		key: "1041cp"
	}],
	["line", {
		x1: "2",
		x2: "5",
		y1: "8",
		y2: "8",
		key: "14m1p5"
	}],
	["line", {
		x1: "16",
		x2: "16",
		y1: "19",
		y2: "22",
		key: "rzdirn"
	}],
	["line", {
		x1: "19",
		x2: "22",
		y1: "16",
		y2: "16",
		key: "ox905f"
	}]
]), wb = $("youtube", [["path", {
	d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
	key: "1q2vi4"
}], ["path", {
	d: "m10 15 5-3-5-3z",
	key: "1jp15x"
}]]), Tb = ({ content: e = "", onChange: t, uploadEndpoint: n }) => {
	let [r, a] = d({
		isOpen: !1,
		type: "",
		data: {
			url: "",
			width: "100%",
			height: "400"
		}
	}), o = async (e) => {
		if (!n) return console.warn("DivtTextEditor: uploadEndpoint prop is missing."), e.type.startsWith("video/") ? "/default-video.mp4" : "/default.webp";
		try {
			let t = new FormData();
			t.append("file", e);
			let r = await fetch(n, {
				method: "POST",
				body: t
			});
			if (!r.ok) throw Error(`Upload failed: ${r.status}`);
			return (await r.json()).url;
		} catch (t) {
			return console.error("API upload failed:", t), e.type.startsWith("video/") ? "/default-video.mp4" : "/default.webp";
		}
	}, s = up({
		extensions: [
			D_,
			Lg,
			I_.configure({ types: ["heading", "paragraph"] }),
			Py.configure({ resizable: !0 }),
			xy,
			by,
			yy,
			k_,
			F_.configure({ controls: !1 }),
			qy,
			Jy,
			Yy,
			Ry,
			By,
			Ky.configure({ multicolor: !0 }),
			$h.configure({
				openOnClick: !1,
				autolink: !0
			})
		],
		content: e,
		onUpdate: ({ editor: e }) => {
			t && t(e.getHTML());
		}
	}), c = i(() => {
		let e = document.createElement("input");
		e.type = "file", e.accept = "image/*,video/*", e.onchange = async (e) => {
			let t = e.target.files[0];
			if (t) {
				let e = t.type.startsWith("video/"), n = t.type.startsWith("image/");
				if (!e && !n) return alert("Invalid file type.");
				let r = await o(t);
				e ? s.chain().focus().setVideo({ src: r }).run() : n && s.chain().focus().setImage({ src: r }).run();
			}
		}, e.click();
	}, [s, n]), l = i(() => {
		s && (s.can().sinkListItem("listItem") ? s.chain().focus().sinkListItem("listItem").run() : s.chain().focus().indent().run());
	}, [s]), u = i(() => {
		s && (s.can().liftListItem("listItem") ? s.chain().focus().liftListItem("listItem").run() : s.chain().focus().outdent().run());
	}, [s]), f = i(() => {
		a({
			isOpen: !0,
			type: "link",
			data: {
				url: s.getAttributes("link").href || "",
				width: "",
				height: ""
			}
		});
	}, [s]), p = i(() => {
		a({
			isOpen: !0,
			type: "youtube",
			data: {
				url: "",
				width: "",
				height: ""
			}
		});
	}, []), m = i(() => {
		if (s.isActive("iframe")) {
			let { src: e, width: t, height: n } = s.getAttributes("iframe");
			a({
				isOpen: !0,
				type: "iframe",
				data: {
					url: e || "",
					width: t || "100%",
					height: n || "400"
				}
			});
		} else a({
			isOpen: !0,
			type: "iframe",
			data: {
				url: "",
				width: "100%",
				height: "400"
			}
		});
	}, [s]), h = i(() => {
		let { type: e, data: t } = r;
		if (s.commands.focus(), e === "link") t.url === "" ? s.chain().focus().extendMarkRange("link").unsetLink().run() : s.chain().focus().extendMarkRange("link").setLink({ href: t.url }).run();
		else if (e === "youtube") t.url && s.commands.setYoutubeVideo({ src: t.url });
		else if (e === "iframe") {
			let e = t.url, n = t.width || "100%", r = t.height || "400";
			if (t.url.includes("<iframe")) {
				let i = new DOMParser().parseFromString(t.url, "text/html").querySelector("iframe");
				i && (e = i.getAttribute("src") || "", n = i.getAttribute("width") || n, r = i.getAttribute("height") || r);
			}
			e && (s.isActive("iframe") ? s.chain().focus().updateAttributes("iframe", {
				width: n,
				height: r
			}).run() : s.chain().focus().setIframe({
				src: e,
				width: n,
				height: r
			}).run());
		}
		a({
			isOpen: !1,
			type: "",
			data: {
				url: "",
				width: "",
				height: ""
			}
		});
	}, [s, r]), g = i(() => {
		a({
			isOpen: !1,
			type: "",
			data: {
				url: "",
				width: "",
				height: ""
			}
		});
	}, []);
	return s ? (0, y.jsxs)("div", {
		className: "divt-editor-container",
		children: [
			(0, y.jsx)(Xy, {
				config: r,
				setConfig: a,
				onSubmit: h,
				onClose: g
			}),
			(0, y.jsxs)("div", {
				className: "divt-editor-toolbar",
				children: [
					(0, y.jsxs)("select", {
						className: "toolbar-select",
						value: (() => {
							for (let e = 1; e <= 6; e++) if (s.isActive("heading", { level: e })) return e.toString();
							return "paragraph";
						})(),
						onChange: (e) => {
							let t = e.target.value;
							t === "paragraph" ? s.chain().focus().setParagraph().run() : s.chain().focus().toggleHeading({ level: parseInt(t, 10) }).run();
						},
						children: [
							(0, y.jsx)("option", {
								value: "paragraph",
								children: "Paragraph"
							}),
							(0, y.jsx)("option", {
								value: "1",
								children: "Heading 1"
							}),
							(0, y.jsx)("option", {
								value: "2",
								children: "Heading 2"
							}),
							(0, y.jsx)("option", {
								value: "3",
								children: "Heading 3"
							}),
							(0, y.jsx)("option", {
								value: "4",
								children: "Heading 4"
							}),
							(0, y.jsx)("option", {
								value: "5",
								children: "Heading 5"
							}),
							(0, y.jsx)("option", {
								value: "6",
								children: "Heading 6"
							})
						]
					}),
					(0, y.jsx)("div", { className: "toolbar-divider" }),
					(0, y.jsx)("button", {
						onClick: () => s.chain().focus().toggleBold().run(),
						className: s.isActive("bold") ? "is-active" : "",
						title: "Bold",
						children: (0, y.jsx)(ib, { size: 16 })
					}),
					(0, y.jsx)("button", {
						onClick: () => s.chain().focus().toggleItalic().run(),
						className: s.isActive("italic") ? "is-active" : "",
						title: "Italic",
						children: (0, y.jsx)(lb, { size: 16 })
					}),
					(0, y.jsx)("button", {
						onClick: () => s.chain().focus().toggleUnderline().run(),
						className: s.isActive("underline") ? "is-active" : "",
						title: "Underline",
						children: (0, y.jsx)(Sb, { size: 16 })
					}),
					(0, y.jsx)("button", {
						onClick: () => s.chain().focus().unsetAllMarks().clearNodes().run(),
						title: "Clear Formatting",
						children: (0, y.jsx)(ob, { size: 16 })
					}),
					(0, y.jsx)("div", { className: "toolbar-divider" }),
					(0, y.jsxs)("label", {
						className: "custom-color-picker",
						title: "Text Color",
						children: [(0, y.jsx)(xb, {
							size: 16,
							color: s.getAttributes("textStyle").color || "currentColor"
						}), (0, y.jsx)("input", {
							type: "color",
							className: "color-picker-input",
							onInput: (e) => s.chain().focus().setColor(e.target.value).run(),
							value: s.getAttributes("textStyle").color || "#000000"
						})]
					}),
					(0, y.jsxs)("label", {
						className: "custom-color-picker",
						title: "Highlight Color",
						children: [(0, y.jsx)(sb, {
							size: 16,
							color: s.isActive("highlight") ? s.getAttributes("highlight").color : "currentColor"
						}), (0, y.jsx)("input", {
							type: "color",
							className: "color-picker-input",
							onInput: (e) => s.chain().focus().setHighlight({ color: e.target.value }).run(),
							value: s.isActive("highlight") ? s.getAttributes("highlight").color : "#ffffff"
						})]
					}),
					(0, y.jsx)("div", { className: "toolbar-divider" }),
					(0, y.jsx)("button", {
						onClick: () => s.chain().focus().setTextAlign("left").run(),
						className: s.isActive({ textAlign: "left" }) ? "is-active" : "",
						title: "Align Left",
						children: (0, y.jsx)(bb, { size: 16 })
					}),
					(0, y.jsx)("button", {
						onClick: () => s.chain().focus().setTextAlign("center").run(),
						className: s.isActive({ textAlign: "center" }) ? "is-active" : "",
						title: "Align Center",
						children: (0, y.jsx)(_b, { size: 16 })
					}),
					(0, y.jsx)("button", {
						onClick: () => s.chain().focus().setTextAlign("right").run(),
						className: s.isActive({ textAlign: "right" }) ? "is-active" : "",
						title: "Align Right",
						children: (0, y.jsx)(vb, { size: 16 })
					}),
					(0, y.jsx)("button", {
						onClick: () => s.chain().focus().setTextAlign("justify").run(),
						className: s.isActive({ textAlign: "justify" }) ? "is-active" : "",
						title: "Justify",
						children: (0, y.jsx)(yb, { size: 16 })
					}),
					(0, y.jsx)("div", { className: "toolbar-divider" }),
					(0, y.jsx)("button", {
						onClick: () => s.chain().focus().toggleBulletList().run(),
						className: s.isActive("bulletList") ? "is-active" : "",
						title: "Bullet List",
						children: (0, y.jsx)(mb, { size: 16 })
					}),
					(0, y.jsx)("button", {
						onClick: () => s.chain().focus().toggleOrderedList().run(),
						className: s.isActive("orderedList") ? "is-active" : "",
						title: "Ordered List",
						children: (0, y.jsx)(pb, { size: 16 })
					}),
					(0, y.jsx)("button", {
						onClick: l,
						title: "Increase Indent",
						children: (0, y.jsx)(fb, { size: 16 })
					}),
					(0, y.jsx)("button", {
						onClick: u,
						title: "Decrease Indent",
						children: (0, y.jsx)(db, { size: 16 })
					}),
					(0, y.jsx)("div", { className: "toolbar-divider" }),
					(0, y.jsx)("button", {
						onClick: f,
						className: s.isActive("link") ? "is-active" : "",
						title: "Insert Link",
						children: (0, y.jsx)(ub, { size: 16 })
					}),
					(0, y.jsx)("button", {
						onClick: () => s.chain().focus().unsetLink().run(),
						disabled: !s.isActive("link"),
						style: { opacity: s.isActive("link") ? 1 : .5 },
						title: "Remove Link",
						children: (0, y.jsx)(Cb, { size: 16 })
					}),
					(0, y.jsx)("button", {
						onClick: () => s.chain().focus().toggleBlockquote().run(),
						className: s.isActive("blockquote") ? "is-active" : "",
						title: "Blockquote",
						children: (0, y.jsx)(hb, { size: 16 })
					}),
					(0, y.jsx)("button", {
						onClick: () => s.chain().focus().insertTable({
							rows: 3,
							cols: 3,
							withHeaderRow: !0
						}).run(),
						title: "Insert Table",
						children: (0, y.jsx)(gb, { size: 16 })
					}),
					(0, y.jsx)("div", { className: "toolbar-divider" }),
					(0, y.jsx)("button", {
						onClick: c,
						title: "Upload Media (Image/Video)",
						children: (0, y.jsx)(cb, { size: 16 })
					}),
					(0, y.jsx)("button", {
						onClick: p,
						title: "Embed YouTube Video",
						children: (0, y.jsx)(wb, { size: 16 })
					}),
					(0, y.jsx)("button", {
						onClick: m,
						className: s.isActive("iframe") ? "is-active" : "",
						title: "Embed HTML / Resize Iframe",
						children: (0, y.jsx)(ab, { size: 16 })
					})
				]
			}),
			(0, y.jsx)(np, {
				editor: s,
				className: "divt-editor-content"
			})
		]
	}) : null;
};
export { Tb as DivtTextEditor };
