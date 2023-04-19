/*!
 * codebase - v5.5.0
 * @author pixelcave - https://pixelcave.com
 * Copyright (c) 2023
 */
/*! For license information please see app.js.LICENSE.txt */
!(function () {
    var e = {
            807: function (e) {
                var t = !("undefined" == typeof window || !window.document || !window.document.createElement);
                e.exports = t;
            },
        },
        t = {};
    function i(s) {
        var n = t[s];
        if (void 0 !== n) return n.exports;
        var o = (t[s] = { exports: {} });
        return e[s](o, o.exports, i), o.exports;
    }
    (i.d = function (e, t) {
        for (var s in t) i.o(t, s) && !i.o(e, s) && Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
    }),
        (i.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (i.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (function () {
            "use strict";
            var e = {};
            i.r(e),
                i.d(e, {
                    afterMain: function () {
                        return E;
                    },
                    afterRead: function () {
                        return v;
                    },
                    afterWrite: function () {
                        return A;
                    },
                    applyStyles: function () {
                        return D;
                    },
                    arrow: function () {
                        return G;
                    },
                    auto: function () {
                        return a;
                    },
                    basePlacements: function () {
                        return l;
                    },
                    beforeMain: function () {
                        return y;
                    },
                    beforeRead: function () {
                        return _;
                    },
                    beforeWrite: function () {
                        return x;
                    },
                    bottom: function () {
                        return n;
                    },
                    clippingParents: function () {
                        return h;
                    },
                    computeStyles: function () {
                        return ie;
                    },
                    createPopper: function () {
                        return Te;
                    },
                    createPopperBase: function () {
                        return je;
                    },
                    createPopperLite: function () {
                        return De;
                    },
                    detectOverflow: function () {
                        return _e;
                    },
                    end: function () {
                        return d;
                    },
                    eventListeners: function () {
                        return ne;
                    },
                    flip: function () {
                        return be;
                    },
                    hide: function () {
                        return we;
                    },
                    left: function () {
                        return r;
                    },
                    main: function () {
                        return w;
                    },
                    modifierPhases: function () {
                        return L;
                    },
                    offset: function () {
                        return Ee;
                    },
                    placements: function () {
                        return m;
                    },
                    popper: function () {
                        return p;
                    },
                    popperGenerator: function () {
                        return Oe;
                    },
                    popperOffsets: function () {
                        return xe;
                    },
                    preventOverflow: function () {
                        return ke;
                    },
                    read: function () {
                        return b;
                    },
                    reference: function () {
                        return f;
                    },
                    right: function () {
                        return o;
                    },
                    start: function () {
                        return c;
                    },
                    top: function () {
                        return s;
                    },
                    variationPlacements: function () {
                        return g;
                    },
                    viewport: function () {
                        return u;
                    },
                    write: function () {
                        return k;
                    },
                });
            var t = {};
            i.r(t),
                i.d(t, {
                    Alert: function () {
                        return Lt;
                    },
                    Button: function () {
                        return Ct;
                    },
                    Carousel: function () {
                        return ai;
                    },
                    Collapse: function () {
                        return wi;
                    },
                    Dropdown: function () {
                        return Vi;
                    },
                    Modal: function () {
                        return Ss;
                    },
                    Offcanvas: function () {
                        return Qs;
                    },
                    Popover: function () {
                        return gn;
                    },
                    ScrollSpy: function () {
                        return Ln;
                    },
                    Tab: function () {
                        return Vn;
                    },
                    Toast: function () {
                        return ao;
                    },
                    Tooltip: function () {
                        return un;
                    },
                });
            var s = "top",
                n = "bottom",
                o = "right",
                r = "left",
                a = "auto",
                l = [s, n, o, r],
                c = "start",
                d = "end",
                h = "clippingParents",
                u = "viewport",
                p = "popper",
                f = "reference",
                g = l.reduce(function (e, t) {
                    return e.concat([t + "-" + c, t + "-" + d]);
                }, []),
                m = [].concat(l, [a]).reduce(function (e, t) {
                    return e.concat([t, t + "-" + c, t + "-" + d]);
                }, []),
                _ = "beforeRead",
                b = "read",
                v = "afterRead",
                y = "beforeMain",
                w = "main",
                E = "afterMain",
                x = "beforeWrite",
                k = "write",
                A = "afterWrite",
                L = [_, b, v, y, w, E, x, k, A];
            function S(e) {
                return e ? (e.nodeName || "").toLowerCase() : null;
            }
            function C(e) {
                if (null == e) return window;
                if ("[object Window]" !== e.toString()) {
                    var t = e.ownerDocument;
                    return (t && t.defaultView) || window;
                }
                return e;
            }
            function O(e) {
                return e instanceof C(e).Element || e instanceof Element;
            }
            function j(e) {
                return e instanceof C(e).HTMLElement || e instanceof HTMLElement;
            }
            function T(e) {
                return "undefined" != typeof ShadowRoot && (e instanceof C(e).ShadowRoot || e instanceof ShadowRoot);
            }
            var D = {
                name: "applyStyles",
                enabled: !0,
                phase: "write",
                fn: function (e) {
                    var t = e.state;
                    Object.keys(t.elements).forEach(function (e) {
                        var i = t.styles[e] || {},
                            s = t.attributes[e] || {},
                            n = t.elements[e];
                        j(n) &&
                            S(n) &&
                            (Object.assign(n.style, i),
                            Object.keys(s).forEach(function (e) {
                                var t = s[e];
                                !1 === t ? n.removeAttribute(e) : n.setAttribute(e, !0 === t ? "" : t);
                            }));
                    });
                },
                effect: function (e) {
                    var t = e.state,
                        i = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
                    return (
                        Object.assign(t.elements.popper.style, i.popper),
                        (t.styles = i),
                        t.elements.arrow && Object.assign(t.elements.arrow.style, i.arrow),
                        function () {
                            Object.keys(t.elements).forEach(function (e) {
                                var s = t.elements[e],
                                    n = t.attributes[e] || {},
                                    o = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : i[e]).reduce(function (e, t) {
                                        return (e[t] = ""), e;
                                    }, {});
                                j(s) &&
                                    S(s) &&
                                    (Object.assign(s.style, o),
                                    Object.keys(n).forEach(function (e) {
                                        s.removeAttribute(e);
                                    }));
                            });
                        }
                    );
                },
                requires: ["computeStyles"],
            };
            function P(e) {
                return e.split("-")[0];
            }
            var N = Math.max,
                M = Math.min,
                F = Math.round;
            function I() {
                var e = navigator.userAgentData;
                return null != e && e.brands
                    ? e.brands
                          .map(function (e) {
                              return e.brand + "/" + e.version;
                          })
                          .join(" ")
                    : navigator.userAgent;
            }
            function q() {
                return !/^((?!chrome|android).)*safari/i.test(I());
            }
            function W(e, t, i) {
                void 0 === t && (t = !1), void 0 === i && (i = !1);
                var s = e.getBoundingClientRect(),
                    n = 1,
                    o = 1;
                t && j(e) && ((n = (e.offsetWidth > 0 && F(s.width) / e.offsetWidth) || 1), (o = (e.offsetHeight > 0 && F(s.height) / e.offsetHeight) || 1));
                var r = (O(e) ? C(e) : window).visualViewport,
                    a = !q() && i,
                    l = (s.left + (a && r ? r.offsetLeft : 0)) / n,
                    c = (s.top + (a && r ? r.offsetTop : 0)) / o,
                    d = s.width / n,
                    h = s.height / o;
                return { width: d, height: h, top: c, right: l + d, bottom: c + h, left: l, x: l, y: c };
            }
            function $(e) {
                var t = W(e),
                    i = e.offsetWidth,
                    s = e.offsetHeight;
                return Math.abs(t.width - i) <= 1 && (i = t.width), Math.abs(t.height - s) <= 1 && (s = t.height), { x: e.offsetLeft, y: e.offsetTop, width: i, height: s };
            }
            function z(e, t) {
                var i = t.getRootNode && t.getRootNode();
                if (e.contains(t)) return !0;
                if (i && T(i)) {
                    var s = t;
                    do {
                        if (s && e.isSameNode(s)) return !0;
                        s = s.parentNode || s.host;
                    } while (s);
                }
                return !1;
            }
            function H(e) {
                return C(e).getComputedStyle(e);
            }
            function B(e) {
                return ["table", "td", "th"].indexOf(S(e)) >= 0;
            }
            function R(e) {
                return ((O(e) ? e.ownerDocument : e.document) || window.document).documentElement;
            }
            function Q(e) {
                return "html" === S(e) ? e : e.assignedSlot || e.parentNode || (T(e) ? e.host : null) || R(e);
            }
            function V(e) {
                return j(e) && "fixed" !== H(e).position ? e.offsetParent : null;
            }
            function Y(e) {
                for (var t = C(e), i = V(e); i && B(i) && "static" === H(i).position; ) i = V(i);
                return i && ("html" === S(i) || ("body" === S(i) && "static" === H(i).position))
                    ? t
                    : i ||
                          (function (e) {
                              var t = /firefox/i.test(I());
                              if (/Trident/i.test(I()) && j(e) && "fixed" === H(e).position) return null;
                              var i = Q(e);
                              for (T(i) && (i = i.host); j(i) && ["html", "body"].indexOf(S(i)) < 0; ) {
                                  var s = H(i);
                                  if (
                                      "none" !== s.transform ||
                                      "none" !== s.perspective ||
                                      "paint" === s.contain ||
                                      -1 !== ["transform", "perspective"].indexOf(s.willChange) ||
                                      (t && "filter" === s.willChange) ||
                                      (t && s.filter && "none" !== s.filter)
                                  )
                                      return i;
                                  i = i.parentNode;
                              }
                              return null;
                          })(e) ||
                          t;
            }
            function X(e) {
                return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
            }
            function K(e, t, i) {
                return N(e, M(t, i));
            }
            function U(e) {
                return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
            }
            function Z(e, t) {
                return t.reduce(function (t, i) {
                    return (t[i] = e), t;
                }, {});
            }
            var G = {
                name: "arrow",
                enabled: !0,
                phase: "main",
                fn: function (e) {
                    var t,
                        i = e.state,
                        a = e.name,
                        c = e.options,
                        d = i.elements.arrow,
                        h = i.modifiersData.popperOffsets,
                        u = P(i.placement),
                        p = X(u),
                        f = [r, o].indexOf(u) >= 0 ? "height" : "width";
                    if (d && h) {
                        var g = (function (e, t) {
                                return U("number" != typeof (e = "function" == typeof e ? e(Object.assign({}, t.rects, { placement: t.placement })) : e) ? e : Z(e, l));
                            })(c.padding, i),
                            m = $(d),
                            _ = "y" === p ? s : r,
                            b = "y" === p ? n : o,
                            v = i.rects.reference[f] + i.rects.reference[p] - h[p] - i.rects.popper[f],
                            y = h[p] - i.rects.reference[p],
                            w = Y(d),
                            E = w ? ("y" === p ? w.clientHeight || 0 : w.clientWidth || 0) : 0,
                            x = v / 2 - y / 2,
                            k = g[_],
                            A = E - m[f] - g[b],
                            L = E / 2 - m[f] / 2 + x,
                            S = K(k, L, A),
                            C = p;
                        i.modifiersData[a] = (((t = {})[C] = S), (t.centerOffset = S - L), t);
                    }
                },
                effect: function (e) {
                    var t = e.state,
                        i = e.options.element,
                        s = void 0 === i ? "[data-popper-arrow]" : i;
                    null != s && ("string" != typeof s || (s = t.elements.popper.querySelector(s))) && z(t.elements.popper, s) && (t.elements.arrow = s);
                },
                requires: ["popperOffsets"],
                requiresIfExists: ["preventOverflow"],
            };
            function J(e) {
                return e.split("-")[1];
            }
            var ee = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
            function te(e) {
                var t,
                    i = e.popper,
                    a = e.popperRect,
                    l = e.placement,
                    c = e.variation,
                    h = e.offsets,
                    u = e.position,
                    p = e.gpuAcceleration,
                    f = e.adaptive,
                    g = e.roundOffsets,
                    m = e.isFixed,
                    _ = h.x,
                    b = void 0 === _ ? 0 : _,
                    v = h.y,
                    y = void 0 === v ? 0 : v,
                    w = "function" == typeof g ? g({ x: b, y: y }) : { x: b, y: y };
                (b = w.x), (y = w.y);
                var E = h.hasOwnProperty("x"),
                    x = h.hasOwnProperty("y"),
                    k = r,
                    A = s,
                    L = window;
                if (f) {
                    var S = Y(i),
                        O = "clientHeight",
                        j = "clientWidth";
                    S === C(i) && "static" !== H((S = R(i))).position && "absolute" === u && ((O = "scrollHeight"), (j = "scrollWidth")),
                        (l === s || ((l === r || l === o) && c === d)) && ((A = n), (y -= (m && S === L && L.visualViewport ? L.visualViewport.height : S[O]) - a.height), (y *= p ? 1 : -1)),
                        (l !== r && ((l !== s && l !== n) || c !== d)) || ((k = o), (b -= (m && S === L && L.visualViewport ? L.visualViewport.width : S[j]) - a.width), (b *= p ? 1 : -1));
                }
                var T,
                    D = Object.assign({ position: u }, f && ee),
                    P =
                        !0 === g
                            ? (function (e) {
                                  var t = e.x,
                                      i = e.y,
                                      s = window.devicePixelRatio || 1;
                                  return { x: F(t * s) / s || 0, y: F(i * s) / s || 0 };
                              })({ x: b, y: y })
                            : { x: b, y: y };
                return (
                    (b = P.x),
                    (y = P.y),
                    p
                        ? Object.assign({}, D, (((T = {})[A] = x ? "0" : ""), (T[k] = E ? "0" : ""), (T.transform = (L.devicePixelRatio || 1) <= 1 ? "translate(" + b + "px, " + y + "px)" : "translate3d(" + b + "px, " + y + "px, 0)"), T))
                        : Object.assign({}, D, (((t = {})[A] = x ? y + "px" : ""), (t[k] = E ? b + "px" : ""), (t.transform = ""), t))
                );
            }
            var ie = {
                    name: "computeStyles",
                    enabled: !0,
                    phase: "beforeWrite",
                    fn: function (e) {
                        var t = e.state,
                            i = e.options,
                            s = i.gpuAcceleration,
                            n = void 0 === s || s,
                            o = i.adaptive,
                            r = void 0 === o || o,
                            a = i.roundOffsets,
                            l = void 0 === a || a,
                            c = { placement: P(t.placement), variation: J(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: n, isFixed: "fixed" === t.options.strategy };
                        null != t.modifiersData.popperOffsets &&
                            (t.styles.popper = Object.assign({}, t.styles.popper, te(Object.assign({}, c, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: r, roundOffsets: l })))),
                            null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, te(Object.assign({}, c, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))),
                            (t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement }));
                    },
                    data: {},
                },
                se = { passive: !0 },
                ne = {
                    name: "eventListeners",
                    enabled: !0,
                    phase: "write",
                    fn: function () {},
                    effect: function (e) {
                        var t = e.state,
                            i = e.instance,
                            s = e.options,
                            n = s.scroll,
                            o = void 0 === n || n,
                            r = s.resize,
                            a = void 0 === r || r,
                            l = C(t.elements.popper),
                            c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                        return (
                            o &&
                                c.forEach(function (e) {
                                    e.addEventListener("scroll", i.update, se);
                                }),
                            a && l.addEventListener("resize", i.update, se),
                            function () {
                                o &&
                                    c.forEach(function (e) {
                                        e.removeEventListener("scroll", i.update, se);
                                    }),
                                    a && l.removeEventListener("resize", i.update, se);
                            }
                        );
                    },
                    data: {},
                },
                oe = { left: "right", right: "left", bottom: "top", top: "bottom" };
            function re(e) {
                return e.replace(/left|right|bottom|top/g, function (e) {
                    return oe[e];
                });
            }
            var ae = { start: "end", end: "start" };
            function le(e) {
                return e.replace(/start|end/g, function (e) {
                    return ae[e];
                });
            }
            function ce(e) {
                var t = C(e);
                return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
            }
            function de(e) {
                return W(R(e)).left + ce(e).scrollLeft;
            }
            function he(e) {
                var t = H(e),
                    i = t.overflow,
                    s = t.overflowX,
                    n = t.overflowY;
                return /auto|scroll|overlay|hidden/.test(i + n + s);
            }
            function ue(e) {
                return ["html", "body", "#document"].indexOf(S(e)) >= 0 ? e.ownerDocument.body : j(e) && he(e) ? e : ue(Q(e));
            }
            function pe(e, t) {
                var i;
                void 0 === t && (t = []);
                var s = ue(e),
                    n = s === (null == (i = e.ownerDocument) ? void 0 : i.body),
                    o = C(s),
                    r = n ? [o].concat(o.visualViewport || [], he(s) ? s : []) : s,
                    a = t.concat(r);
                return n ? a : a.concat(pe(Q(r)));
            }
            function fe(e) {
                return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
            }
            function ge(e, t, i) {
                return t === u
                    ? fe(
                          (function (e, t) {
                              var i = C(e),
                                  s = R(e),
                                  n = i.visualViewport,
                                  o = s.clientWidth,
                                  r = s.clientHeight,
                                  a = 0,
                                  l = 0;
                              if (n) {
                                  (o = n.width), (r = n.height);
                                  var c = q();
                                  (c || (!c && "fixed" === t)) && ((a = n.offsetLeft), (l = n.offsetTop));
                              }
                              return { width: o, height: r, x: a + de(e), y: l };
                          })(e, i)
                      )
                    : O(t)
                    ? (function (e, t) {
                          var i = W(e, !1, "fixed" === t);
                          return (
                              (i.top = i.top + e.clientTop),
                              (i.left = i.left + e.clientLeft),
                              (i.bottom = i.top + e.clientHeight),
                              (i.right = i.left + e.clientWidth),
                              (i.width = e.clientWidth),
                              (i.height = e.clientHeight),
                              (i.x = i.left),
                              (i.y = i.top),
                              i
                          );
                      })(t, i)
                    : fe(
                          (function (e) {
                              var t,
                                  i = R(e),
                                  s = ce(e),
                                  n = null == (t = e.ownerDocument) ? void 0 : t.body,
                                  o = N(i.scrollWidth, i.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0),
                                  r = N(i.scrollHeight, i.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0),
                                  a = -s.scrollLeft + de(e),
                                  l = -s.scrollTop;
                              return "rtl" === H(n || i).direction && (a += N(i.clientWidth, n ? n.clientWidth : 0) - o), { width: o, height: r, x: a, y: l };
                          })(R(e))
                      );
            }
            function me(e) {
                var t,
                    i = e.reference,
                    a = e.element,
                    l = e.placement,
                    h = l ? P(l) : null,
                    u = l ? J(l) : null,
                    p = i.x + i.width / 2 - a.width / 2,
                    f = i.y + i.height / 2 - a.height / 2;
                switch (h) {
                    case s:
                        t = { x: p, y: i.y - a.height };
                        break;
                    case n:
                        t = { x: p, y: i.y + i.height };
                        break;
                    case o:
                        t = { x: i.x + i.width, y: f };
                        break;
                    case r:
                        t = { x: i.x - a.width, y: f };
                        break;
                    default:
                        t = { x: i.x, y: i.y };
                }
                var g = h ? X(h) : null;
                if (null != g) {
                    var m = "y" === g ? "height" : "width";
                    switch (u) {
                        case c:
                            t[g] = t[g] - (i[m] / 2 - a[m] / 2);
                            break;
                        case d:
                            t[g] = t[g] + (i[m] / 2 - a[m] / 2);
                    }
                }
                return t;
            }
            function _e(e, t) {
                void 0 === t && (t = {});
                var i = t,
                    r = i.placement,
                    a = void 0 === r ? e.placement : r,
                    c = i.strategy,
                    d = void 0 === c ? e.strategy : c,
                    g = i.boundary,
                    m = void 0 === g ? h : g,
                    _ = i.rootBoundary,
                    b = void 0 === _ ? u : _,
                    v = i.elementContext,
                    y = void 0 === v ? p : v,
                    w = i.altBoundary,
                    E = void 0 !== w && w,
                    x = i.padding,
                    k = void 0 === x ? 0 : x,
                    A = U("number" != typeof k ? k : Z(k, l)),
                    L = y === p ? f : p,
                    C = e.rects.popper,
                    T = e.elements[E ? L : y],
                    D = (function (e, t, i, s) {
                        var n =
                                "clippingParents" === t
                                    ? (function (e) {
                                          var t = pe(Q(e)),
                                              i = ["absolute", "fixed"].indexOf(H(e).position) >= 0 && j(e) ? Y(e) : e;
                                          return O(i)
                                              ? t.filter(function (e) {
                                                    return O(e) && z(e, i) && "body" !== S(e);
                                                })
                                              : [];
                                      })(e)
                                    : [].concat(t),
                            o = [].concat(n, [i]),
                            r = o[0],
                            a = o.reduce(function (t, i) {
                                var n = ge(e, i, s);
                                return (t.top = N(n.top, t.top)), (t.right = M(n.right, t.right)), (t.bottom = M(n.bottom, t.bottom)), (t.left = N(n.left, t.left)), t;
                            }, ge(e, r, s));
                        return (a.width = a.right - a.left), (a.height = a.bottom - a.top), (a.x = a.left), (a.y = a.top), a;
                    })(O(T) ? T : T.contextElement || R(e.elements.popper), m, b, d),
                    P = W(e.elements.reference),
                    F = me({ reference: P, element: C, strategy: "absolute", placement: a }),
                    I = fe(Object.assign({}, C, F)),
                    q = y === p ? I : P,
                    $ = { top: D.top - q.top + A.top, bottom: q.bottom - D.bottom + A.bottom, left: D.left - q.left + A.left, right: q.right - D.right + A.right },
                    B = e.modifiersData.offset;
                if (y === p && B) {
                    var V = B[a];
                    Object.keys($).forEach(function (e) {
                        var t = [o, n].indexOf(e) >= 0 ? 1 : -1,
                            i = [s, n].indexOf(e) >= 0 ? "y" : "x";
                        $[e] += V[i] * t;
                    });
                }
                return $;
            }
            var be = {
                name: "flip",
                enabled: !0,
                phase: "main",
                fn: function (e) {
                    var t = e.state,
                        i = e.options,
                        d = e.name;
                    if (!t.modifiersData[d]._skip) {
                        for (
                            var h = i.mainAxis,
                                u = void 0 === h || h,
                                p = i.altAxis,
                                f = void 0 === p || p,
                                _ = i.fallbackPlacements,
                                b = i.padding,
                                v = i.boundary,
                                y = i.rootBoundary,
                                w = i.altBoundary,
                                E = i.flipVariations,
                                x = void 0 === E || E,
                                k = i.allowedAutoPlacements,
                                A = t.options.placement,
                                L = P(A),
                                S =
                                    _ ||
                                    (L !== A && x
                                        ? (function (e) {
                                              if (P(e) === a) return [];
                                              var t = re(e);
                                              return [le(e), t, le(t)];
                                          })(A)
                                        : [re(A)]),
                                C = [A].concat(S).reduce(function (e, i) {
                                    return e.concat(
                                        P(i) === a
                                            ? (function (e, t) {
                                                  void 0 === t && (t = {});
                                                  var i = t,
                                                      s = i.placement,
                                                      n = i.boundary,
                                                      o = i.rootBoundary,
                                                      r = i.padding,
                                                      a = i.flipVariations,
                                                      c = i.allowedAutoPlacements,
                                                      d = void 0 === c ? m : c,
                                                      h = J(s),
                                                      u = h
                                                          ? a
                                                              ? g
                                                              : g.filter(function (e) {
                                                                    return J(e) === h;
                                                                })
                                                          : l,
                                                      p = u.filter(function (e) {
                                                          return d.indexOf(e) >= 0;
                                                      });
                                                  0 === p.length && (p = u);
                                                  var f = p.reduce(function (t, i) {
                                                      return (t[i] = _e(e, { placement: i, boundary: n, rootBoundary: o, padding: r })[P(i)]), t;
                                                  }, {});
                                                  return Object.keys(f).sort(function (e, t) {
                                                      return f[e] - f[t];
                                                  });
                                              })(t, { placement: i, boundary: v, rootBoundary: y, padding: b, flipVariations: x, allowedAutoPlacements: k })
                                            : i
                                    );
                                }, []),
                                O = t.rects.reference,
                                j = t.rects.popper,
                                T = new Map(),
                                D = !0,
                                N = C[0],
                                M = 0;
                            M < C.length;
                            M++
                        ) {
                            var F = C[M],
                                I = P(F),
                                q = J(F) === c,
                                W = [s, n].indexOf(I) >= 0,
                                $ = W ? "width" : "height",
                                z = _e(t, { placement: F, boundary: v, rootBoundary: y, altBoundary: w, padding: b }),
                                H = W ? (q ? o : r) : q ? n : s;
                            O[$] > j[$] && (H = re(H));
                            var B = re(H),
                                R = [];
                            if (
                                (u && R.push(z[I] <= 0),
                                f && R.push(z[H] <= 0, z[B] <= 0),
                                R.every(function (e) {
                                    return e;
                                }))
                            ) {
                                (N = F), (D = !1);
                                break;
                            }
                            T.set(F, R);
                        }
                        if (D)
                            for (
                                var Q = function (e) {
                                        var t = C.find(function (t) {
                                            var i = T.get(t);
                                            if (i)
                                                return i.slice(0, e).every(function (e) {
                                                    return e;
                                                });
                                        });
                                        if (t) return (N = t), "break";
                                    },
                                    V = x ? 3 : 1;
                                V > 0 && "break" !== Q(V);
                                V--
                            );
                        t.placement !== N && ((t.modifiersData[d]._skip = !0), (t.placement = N), (t.reset = !0));
                    }
                },
                requiresIfExists: ["offset"],
                data: { _skip: !1 },
            };
            function ve(e, t, i) {
                return void 0 === i && (i = { x: 0, y: 0 }), { top: e.top - t.height - i.y, right: e.right - t.width + i.x, bottom: e.bottom - t.height + i.y, left: e.left - t.width - i.x };
            }
            function ye(e) {
                return [s, o, n, r].some(function (t) {
                    return e[t] >= 0;
                });
            }
            var we = {
                    name: "hide",
                    enabled: !0,
                    phase: "main",
                    requiresIfExists: ["preventOverflow"],
                    fn: function (e) {
                        var t = e.state,
                            i = e.name,
                            s = t.rects.reference,
                            n = t.rects.popper,
                            o = t.modifiersData.preventOverflow,
                            r = _e(t, { elementContext: "reference" }),
                            a = _e(t, { altBoundary: !0 }),
                            l = ve(r, s),
                            c = ve(a, n, o),
                            d = ye(l),
                            h = ye(c);
                        (t.modifiersData[i] = { referenceClippingOffsets: l, popperEscapeOffsets: c, isReferenceHidden: d, hasPopperEscaped: h }),
                            (t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": h }));
                    },
                },
                Ee = {
                    name: "offset",
                    enabled: !0,
                    phase: "main",
                    requires: ["popperOffsets"],
                    fn: function (e) {
                        var t = e.state,
                            i = e.options,
                            n = e.name,
                            a = i.offset,
                            l = void 0 === a ? [0, 0] : a,
                            c = m.reduce(function (e, i) {
                                return (
                                    (e[i] = (function (e, t, i) {
                                        var n = P(e),
                                            a = [r, s].indexOf(n) >= 0 ? -1 : 1,
                                            l = "function" == typeof i ? i(Object.assign({}, t, { placement: e })) : i,
                                            c = l[0],
                                            d = l[1];
                                        return (c = c || 0), (d = (d || 0) * a), [r, o].indexOf(n) >= 0 ? { x: d, y: c } : { x: c, y: d };
                                    })(i, t.rects, l)),
                                    e
                                );
                            }, {}),
                            d = c[t.placement],
                            h = d.x,
                            u = d.y;
                        null != t.modifiersData.popperOffsets && ((t.modifiersData.popperOffsets.x += h), (t.modifiersData.popperOffsets.y += u)), (t.modifiersData[n] = c);
                    },
                },
                xe = {
                    name: "popperOffsets",
                    enabled: !0,
                    phase: "read",
                    fn: function (e) {
                        var t = e.state,
                            i = e.name;
                        t.modifiersData[i] = me({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
                    },
                    data: {},
                },
                ke = {
                    name: "preventOverflow",
                    enabled: !0,
                    phase: "main",
                    fn: function (e) {
                        var t = e.state,
                            i = e.options,
                            a = e.name,
                            l = i.mainAxis,
                            d = void 0 === l || l,
                            h = i.altAxis,
                            u = void 0 !== h && h,
                            p = i.boundary,
                            f = i.rootBoundary,
                            g = i.altBoundary,
                            m = i.padding,
                            _ = i.tether,
                            b = void 0 === _ || _,
                            v = i.tetherOffset,
                            y = void 0 === v ? 0 : v,
                            w = _e(t, { boundary: p, rootBoundary: f, padding: m, altBoundary: g }),
                            E = P(t.placement),
                            x = J(t.placement),
                            k = !x,
                            A = X(E),
                            L = "x" === A ? "y" : "x",
                            S = t.modifiersData.popperOffsets,
                            C = t.rects.reference,
                            O = t.rects.popper,
                            j = "function" == typeof y ? y(Object.assign({}, t.rects, { placement: t.placement })) : y,
                            T = "number" == typeof j ? { mainAxis: j, altAxis: j } : Object.assign({ mainAxis: 0, altAxis: 0 }, j),
                            D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                            F = { x: 0, y: 0 };
                        if (S) {
                            if (d) {
                                var I,
                                    q = "y" === A ? s : r,
                                    W = "y" === A ? n : o,
                                    z = "y" === A ? "height" : "width",
                                    H = S[A],
                                    B = H + w[q],
                                    R = H - w[W],
                                    Q = b ? -O[z] / 2 : 0,
                                    V = x === c ? C[z] : O[z],
                                    U = x === c ? -O[z] : -C[z],
                                    Z = t.elements.arrow,
                                    G = b && Z ? $(Z) : { width: 0, height: 0 },
                                    ee = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 },
                                    te = ee[q],
                                    ie = ee[W],
                                    se = K(0, C[z], G[z]),
                                    ne = k ? C[z] / 2 - Q - se - te - T.mainAxis : V - se - te - T.mainAxis,
                                    oe = k ? -C[z] / 2 + Q + se + ie + T.mainAxis : U + se + ie + T.mainAxis,
                                    re = t.elements.arrow && Y(t.elements.arrow),
                                    ae = re ? ("y" === A ? re.clientTop || 0 : re.clientLeft || 0) : 0,
                                    le = null != (I = null == D ? void 0 : D[A]) ? I : 0,
                                    ce = H + oe - le,
                                    de = K(b ? M(B, H + ne - le - ae) : B, H, b ? N(R, ce) : R);
                                (S[A] = de), (F[A] = de - H);
                            }
                            if (u) {
                                var he,
                                    ue = "x" === A ? s : r,
                                    pe = "x" === A ? n : o,
                                    fe = S[L],
                                    ge = "y" === L ? "height" : "width",
                                    me = fe + w[ue],
                                    be = fe - w[pe],
                                    ve = -1 !== [s, r].indexOf(E),
                                    ye = null != (he = null == D ? void 0 : D[L]) ? he : 0,
                                    we = ve ? me : fe - C[ge] - O[ge] - ye + T.altAxis,
                                    Ee = ve ? fe + C[ge] + O[ge] - ye - T.altAxis : be,
                                    xe =
                                        b && ve
                                            ? (function (e, t, i) {
                                                  var s = K(e, t, i);
                                                  return s > i ? i : s;
                                              })(we, fe, Ee)
                                            : K(b ? we : me, fe, b ? Ee : be);
                                (S[L] = xe), (F[L] = xe - fe);
                            }
                            t.modifiersData[a] = F;
                        }
                    },
                    requiresIfExists: ["offset"],
                };
            function Ae(e, t, i) {
                void 0 === i && (i = !1);
                var s,
                    n,
                    o = j(t),
                    r =
                        j(t) &&
                        (function (e) {
                            var t = e.getBoundingClientRect(),
                                i = F(t.width) / e.offsetWidth || 1,
                                s = F(t.height) / e.offsetHeight || 1;
                            return 1 !== i || 1 !== s;
                        })(t),
                    a = R(t),
                    l = W(e, r, i),
                    c = { scrollLeft: 0, scrollTop: 0 },
                    d = { x: 0, y: 0 };
                return (
                    (o || (!o && !i)) &&
                        (("body" !== S(t) || he(a)) && (c = (s = t) !== C(s) && j(s) ? { scrollLeft: (n = s).scrollLeft, scrollTop: n.scrollTop } : ce(s)),
                        j(t) ? (((d = W(t, !0)).x += t.clientLeft), (d.y += t.clientTop)) : a && (d.x = de(a))),
                    { x: l.left + c.scrollLeft - d.x, y: l.top + c.scrollTop - d.y, width: l.width, height: l.height }
                );
            }
            function Le(e) {
                var t = new Map(),
                    i = new Set(),
                    s = [];
                function n(e) {
                    i.add(e.name),
                        [].concat(e.requires || [], e.requiresIfExists || []).forEach(function (e) {
                            if (!i.has(e)) {
                                var s = t.get(e);
                                s && n(s);
                            }
                        }),
                        s.push(e);
                }
                return (
                    e.forEach(function (e) {
                        t.set(e.name, e);
                    }),
                    e.forEach(function (e) {
                        i.has(e.name) || n(e);
                    }),
                    s
                );
            }
            var Se = { placement: "bottom", modifiers: [], strategy: "absolute" };
            function Ce() {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                return !t.some(function (e) {
                    return !(e && "function" == typeof e.getBoundingClientRect);
                });
            }
            function Oe(e) {
                void 0 === e && (e = {});
                var t = e,
                    i = t.defaultModifiers,
                    s = void 0 === i ? [] : i,
                    n = t.defaultOptions,
                    o = void 0 === n ? Se : n;
                return function (e, t, i) {
                    void 0 === i && (i = o);
                    var n,
                        r,
                        a = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Se, o), modifiersData: {}, elements: { reference: e, popper: t }, attributes: {}, styles: {} },
                        l = [],
                        c = !1,
                        d = {
                            state: a,
                            setOptions: function (i) {
                                var n = "function" == typeof i ? i(a.options) : i;
                                h(), (a.options = Object.assign({}, o, a.options, n)), (a.scrollParents = { reference: O(e) ? pe(e) : e.contextElement ? pe(e.contextElement) : [], popper: pe(t) });
                                var r,
                                    c,
                                    u = (function (e) {
                                        var t = Le(e);
                                        return L.reduce(function (e, i) {
                                            return e.concat(
                                                t.filter(function (e) {
                                                    return e.phase === i;
                                                })
                                            );
                                        }, []);
                                    })(
                                        ((r = [].concat(s, a.options.modifiers)),
                                        (c = r.reduce(function (e, t) {
                                            var i = e[t.name];
                                            return (e[t.name] = i ? Object.assign({}, i, t, { options: Object.assign({}, i.options, t.options), data: Object.assign({}, i.data, t.data) }) : t), e;
                                        }, {})),
                                        Object.keys(c).map(function (e) {
                                            return c[e];
                                        }))
                                    );
                                return (
                                    (a.orderedModifiers = u.filter(function (e) {
                                        return e.enabled;
                                    })),
                                    a.orderedModifiers.forEach(function (e) {
                                        var t = e.name,
                                            i = e.options,
                                            s = void 0 === i ? {} : i,
                                            n = e.effect;
                                        if ("function" == typeof n) {
                                            var o = n({ state: a, name: t, instance: d, options: s });
                                            l.push(o || function () {});
                                        }
                                    }),
                                    d.update()
                                );
                            },
                            forceUpdate: function () {
                                if (!c) {
                                    var e = a.elements,
                                        t = e.reference,
                                        i = e.popper;
                                    if (Ce(t, i)) {
                                        (a.rects = { reference: Ae(t, Y(i), "fixed" === a.options.strategy), popper: $(i) }),
                                            (a.reset = !1),
                                            (a.placement = a.options.placement),
                                            a.orderedModifiers.forEach(function (e) {
                                                return (a.modifiersData[e.name] = Object.assign({}, e.data));
                                            });
                                        for (var s = 0; s < a.orderedModifiers.length; s++)
                                            if (!0 !== a.reset) {
                                                var n = a.orderedModifiers[s],
                                                    o = n.fn,
                                                    r = n.options,
                                                    l = void 0 === r ? {} : r,
                                                    h = n.name;
                                                "function" == typeof o && (a = o({ state: a, options: l, name: h, instance: d }) || a);
                                            } else (a.reset = !1), (s = -1);
                                    }
                                }
                            },
                            update:
                                ((n = function () {
                                    return new Promise(function (e) {
                                        d.forceUpdate(), e(a);
                                    });
                                }),
                                function () {
                                    return (
                                        r ||
                                            (r = new Promise(function (e) {
                                                Promise.resolve().then(function () {
                                                    (r = void 0), e(n());
                                                });
                                            })),
                                        r
                                    );
                                }),
                            destroy: function () {
                                h(), (c = !0);
                            },
                        };
                    if (!Ce(e, t)) return d;
                    function h() {
                        l.forEach(function (e) {
                            return e();
                        }),
                            (l = []);
                    }
                    return (
                        d.setOptions(i).then(function (e) {
                            !c && i.onFirstUpdate && i.onFirstUpdate(e);
                        }),
                        d
                    );
                };
            }
            var je = Oe(),
                Te = Oe({ defaultModifiers: [ne, xe, ie, D, Ee, be, ke, G, we] }),
                De = Oe({ defaultModifiers: [ne, xe, ie, D] });
            const Pe = "transitionend",
                Ne = (e) => {
                    let t = e.getAttribute("data-bs-target");
                    if (!t || "#" === t) {
                        let i = e.getAttribute("href");
                        if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
                        i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), (t = i && "#" !== i ? i.trim() : null);
                    }
                    return t;
                },
                Me = (e) => {
                    const t = Ne(e);
                    return t && document.querySelector(t) ? t : null;
                },
                Fe = (e) => {
                    const t = Ne(e);
                    return t ? document.querySelector(t) : null;
                },
                Ie = (e) => {
                    e.dispatchEvent(new Event(Pe));
                },
                qe = (e) => !(!e || "object" != typeof e) && (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
                We = (e) => (qe(e) ? (e.jquery ? e[0] : e) : "string" == typeof e && e.length > 0 ? document.querySelector(e) : null),
                $e = (e) => {
                    if (!qe(e) || 0 === e.getClientRects().length) return !1;
                    const t = "visible" === getComputedStyle(e).getPropertyValue("visibility"),
                        i = e.closest("details:not([open])");
                    if (!i) return t;
                    if (i !== e) {
                        const t = e.closest("summary");
                        if (t && t.parentNode !== i) return !1;
                        if (null === t) return !1;
                    }
                    return t;
                },
                ze = (e) => !e || e.nodeType !== Node.ELEMENT_NODE || !!e.classList.contains("disabled") || (void 0 !== e.disabled ? e.disabled : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled")),
                He = (e) => {
                    if (!document.documentElement.attachShadow) return null;
                    if ("function" == typeof e.getRootNode) {
                        const t = e.getRootNode();
                        return t instanceof ShadowRoot ? t : null;
                    }
                    return e instanceof ShadowRoot ? e : e.parentNode ? He(e.parentNode) : null;
                },
                Be = () => {},
                Re = (e) => {
                    e.offsetHeight;
                },
                Qe = () => (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null),
                Ve = [],
                Ye = () => "rtl" === document.documentElement.dir,
                Xe = (e) => {
                    var t;
                    (t = () => {
                        const t = Qe();
                        if (t) {
                            const i = e.NAME,
                                s = t.fn[i];
                            (t.fn[i] = e.jQueryInterface), (t.fn[i].Constructor = e), (t.fn[i].noConflict = () => ((t.fn[i] = s), e.jQueryInterface));
                        }
                    }),
                        "loading" === document.readyState
                            ? (Ve.length ||
                                  document.addEventListener("DOMContentLoaded", () => {
                                      for (const e of Ve) e();
                                  }),
                              Ve.push(t))
                            : t();
                },
                Ke = (e) => {
                    "function" == typeof e && e();
                },
                Ue = (e, t, i = !0) => {
                    if (!i) return void Ke(e);
                    const s =
                        ((e) => {
                            if (!e) return 0;
                            let { transitionDuration: t, transitionDelay: i } = window.getComputedStyle(e);
                            const s = Number.parseFloat(t),
                                n = Number.parseFloat(i);
                            return s || n ? ((t = t.split(",")[0]), (i = i.split(",")[0]), 1e3 * (Number.parseFloat(t) + Number.parseFloat(i))) : 0;
                        })(t) + 5;
                    let n = !1;
                    const o = ({ target: i }) => {
                        i === t && ((n = !0), t.removeEventListener(Pe, o), Ke(e));
                    };
                    t.addEventListener(Pe, o),
                        setTimeout(() => {
                            n || Ie(t);
                        }, s);
                },
                Ze = (e, t, i, s) => {
                    const n = e.length;
                    let o = e.indexOf(t);
                    return -1 === o ? (!i && s ? e[n - 1] : e[0]) : ((o += i ? 1 : -1), s && (o = (o + n) % n), e[Math.max(0, Math.min(o, n - 1))]);
                },
                Ge = /[^.]*(?=\..*)\.|.*/,
                Je = /\..*/,
                et = /::\d+$/,
                tt = {};
            let it = 1;
            const st = { mouseenter: "mouseover", mouseleave: "mouseout" },
                nt = new Set([
                    "click",
                    "dblclick",
                    "mouseup",
                    "mousedown",
                    "contextmenu",
                    "mousewheel",
                    "DOMMouseScroll",
                    "mouseover",
                    "mouseout",
                    "mousemove",
                    "selectstart",
                    "selectend",
                    "keydown",
                    "keypress",
                    "keyup",
                    "orientationchange",
                    "touchstart",
                    "touchmove",
                    "touchend",
                    "touchcancel",
                    "pointerdown",
                    "pointermove",
                    "pointerup",
                    "pointerleave",
                    "pointercancel",
                    "gesturestart",
                    "gesturechange",
                    "gestureend",
                    "focus",
                    "blur",
                    "change",
                    "reset",
                    "select",
                    "submit",
                    "focusin",
                    "focusout",
                    "load",
                    "unload",
                    "beforeunload",
                    "resize",
                    "move",
                    "DOMContentLoaded",
                    "readystatechange",
                    "error",
                    "abort",
                    "scroll",
                ]);
            function ot(e, t) {
                return (t && `${t}::${it++}`) || e.uidEvent || it++;
            }
            function rt(e) {
                const t = ot(e);
                return (e.uidEvent = t), (tt[t] = tt[t] || {}), tt[t];
            }
            function at(e, t, i = null) {
                return Object.values(e).find((e) => e.callable === t && e.delegationSelector === i);
            }
            function lt(e, t, i) {
                const s = "string" == typeof t,
                    n = s ? i : t || i;
                let o = ut(e);
                return nt.has(o) || (o = e), [s, n, o];
            }
            function ct(e, t, i, s, n) {
                if ("string" != typeof t || !e) return;
                let [o, r, a] = lt(t, i, s);
                if (t in st) {
                    const e = (e) =>
                        function (t) {
                            if (!t.relatedTarget || (t.relatedTarget !== t.delegateTarget && !t.delegateTarget.contains(t.relatedTarget))) return e.call(this, t);
                        };
                    r = e(r);
                }
                const l = rt(e),
                    c = l[a] || (l[a] = {}),
                    d = at(c, r, o ? i : null);
                if (d) return void (d.oneOff = d.oneOff && n);
                const h = ot(r, t.replace(Ge, "")),
                    u = o
                        ? (function (e, t, i) {
                              return function s(n) {
                                  const o = e.querySelectorAll(t);
                                  for (let { target: r } = n; r && r !== this; r = r.parentNode) for (const a of o) if (a === r) return ft(n, { delegateTarget: r }), s.oneOff && pt.off(e, n.type, t, i), i.apply(r, [n]);
                              };
                          })(e, i, r)
                        : (function (e, t) {
                              return function i(s) {
                                  return ft(s, { delegateTarget: e }), i.oneOff && pt.off(e, s.type, t), t.apply(e, [s]);
                              };
                          })(e, r);
                (u.delegationSelector = o ? i : null), (u.callable = r), (u.oneOff = n), (u.uidEvent = h), (c[h] = u), e.addEventListener(a, u, o);
            }
            function dt(e, t, i, s, n) {
                const o = at(t[i], s, n);
                o && (e.removeEventListener(i, o, Boolean(n)), delete t[i][o.uidEvent]);
            }
            function ht(e, t, i, s) {
                const n = t[i] || {};
                for (const o of Object.keys(n))
                    if (o.includes(s)) {
                        const s = n[o];
                        dt(e, t, i, s.callable, s.delegationSelector);
                    }
            }
            function ut(e) {
                return (e = e.replace(Je, "")), st[e] || e;
            }
            const pt = {
                on(e, t, i, s) {
                    ct(e, t, i, s, !1);
                },
                one(e, t, i, s) {
                    ct(e, t, i, s, !0);
                },
                off(e, t, i, s) {
                    if ("string" != typeof t || !e) return;
                    const [n, o, r] = lt(t, i, s),
                        a = r !== t,
                        l = rt(e),
                        c = l[r] || {},
                        d = t.startsWith(".");
                    if (void 0 === o) {
                        if (d) for (const i of Object.keys(l)) ht(e, l, i, t.slice(1));
                        for (const i of Object.keys(c)) {
                            const s = i.replace(et, "");
                            if (!a || t.includes(s)) {
                                const t = c[i];
                                dt(e, l, r, t.callable, t.delegationSelector);
                            }
                        }
                    } else {
                        if (!Object.keys(c).length) return;
                        dt(e, l, r, o, n ? i : null);
                    }
                },
                trigger(e, t, i) {
                    if ("string" != typeof t || !e) return null;
                    const s = Qe();
                    let n = null,
                        o = !0,
                        r = !0,
                        a = !1;
                    t !== ut(t) && s && ((n = s.Event(t, i)), s(e).trigger(n), (o = !n.isPropagationStopped()), (r = !n.isImmediatePropagationStopped()), (a = n.isDefaultPrevented()));
                    let l = new Event(t, { bubbles: o, cancelable: !0 });
                    return (l = ft(l, i)), a && l.preventDefault(), r && e.dispatchEvent(l), l.defaultPrevented && n && n.preventDefault(), l;
                },
            };
            function ft(e, t) {
                for (const [i, s] of Object.entries(t || {}))
                    try {
                        e[i] = s;
                    } catch (t) {
                        Object.defineProperty(e, i, {
                            configurable: !0,
                            get() {
                                return s;
                            },
                        });
                    }
                return e;
            }
            const gt = new Map(),
                mt = {
                    set(e, t, i) {
                        gt.has(e) || gt.set(e, new Map());
                        const s = gt.get(e);
                        s.has(t) || 0 === s.size ? s.set(t, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);
                    },
                    get(e, t) {
                        return (gt.has(e) && gt.get(e).get(t)) || null;
                    },
                    remove(e, t) {
                        if (!gt.has(e)) return;
                        const i = gt.get(e);
                        i.delete(t), 0 === i.size && gt.delete(e);
                    },
                };
            function _t(e) {
                if ("true" === e) return !0;
                if ("false" === e) return !1;
                if (e === Number(e).toString()) return Number(e);
                if ("" === e || "null" === e) return null;
                if ("string" != typeof e) return e;
                try {
                    return JSON.parse(decodeURIComponent(e));
                } catch (t) {
                    return e;
                }
            }
            function bt(e) {
                return e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
            }
            const vt = {
                setDataAttribute(e, t, i) {
                    e.setAttribute(`data-bs-${bt(t)}`, i);
                },
                removeDataAttribute(e, t) {
                    e.removeAttribute(`data-bs-${bt(t)}`);
                },
                getDataAttributes(e) {
                    if (!e) return {};
                    const t = {},
                        i = Object.keys(e.dataset).filter((e) => e.startsWith("bs") && !e.startsWith("bsConfig"));
                    for (const s of i) {
                        let i = s.replace(/^bs/, "");
                        (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)), (t[i] = _t(e.dataset[s]));
                    }
                    return t;
                },
                getDataAttribute(e, t) {
                    return _t(e.getAttribute(`data-bs-${bt(t)}`));
                },
            };
            class yt {
                static get Default() {
                    return {};
                }
                static get DefaultType() {
                    return {};
                }
                static get NAME() {
                    throw new Error('You have to implement the static method "NAME", for each component!');
                }
                _getConfig(e) {
                    return (e = this._mergeConfigObj(e)), (e = this._configAfterMerge(e)), this._typeCheckConfig(e), e;
                }
                _configAfterMerge(e) {
                    return e;
                }
                _mergeConfigObj(e, t) {
                    const i = qe(t) ? vt.getDataAttribute(t, "config") : {};
                    return { ...this.constructor.Default, ...("object" == typeof i ? i : {}), ...(qe(t) ? vt.getDataAttributes(t) : {}), ...("object" == typeof e ? e : {}) };
                }
                _typeCheckConfig(e, t = this.constructor.DefaultType) {
                    for (const s of Object.keys(t)) {
                        const n = t[s],
                            o = e[s],
                            r = qe(o)
                                ? "element"
                                : null == (i = o)
                                ? `${i}`
                                : Object.prototype.toString
                                      .call(i)
                                      .match(/\s([a-z]+)/i)[1]
                                      .toLowerCase();
                        if (!new RegExp(n).test(r)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${r}" but expected type "${n}".`);
                    }
                    var i;
                }
            }
            class wt extends yt {
                constructor(e, t) {
                    super(), (e = We(e)) && ((this._element = e), (this._config = this._getConfig(t)), mt.set(this._element, this.constructor.DATA_KEY, this));
                }
                dispose() {
                    mt.remove(this._element, this.constructor.DATA_KEY), pt.off(this._element, this.constructor.EVENT_KEY);
                    for (const e of Object.getOwnPropertyNames(this)) this[e] = null;
                }
                _queueCallback(e, t, i = !0) {
                    Ue(e, t, i);
                }
                _getConfig(e) {
                    return (e = this._mergeConfigObj(e, this._element)), (e = this._configAfterMerge(e)), this._typeCheckConfig(e), e;
                }
                static getInstance(e) {
                    return mt.get(We(e), this.DATA_KEY);
                }
                static getOrCreateInstance(e, t = {}) {
                    return this.getInstance(e) || new this(e, "object" == typeof t ? t : null);
                }
                static get VERSION() {
                    return "5.2.3";
                }
                static get DATA_KEY() {
                    return `bs.${this.NAME}`;
                }
                static get EVENT_KEY() {
                    return `.${this.DATA_KEY}`;
                }
                static eventName(e) {
                    return `${e}${this.EVENT_KEY}`;
                }
            }
            const Et = (e, t = "hide") => {
                    const i = `click.dismiss${e.EVENT_KEY}`,
                        s = e.NAME;
                    pt.on(document, i, `[data-bs-dismiss="${s}"]`, function (i) {
                        if ((["A", "AREA"].includes(this.tagName) && i.preventDefault(), ze(this))) return;
                        const n = Fe(this) || this.closest(`.${s}`);
                        e.getOrCreateInstance(n)[t]();
                    });
                },
                xt = ".bs.alert",
                kt = `close${xt}`,
                At = `closed${xt}`;
            class Lt extends wt {
                static get NAME() {
                    return "alert";
                }
                close() {
                    if (pt.trigger(this._element, kt).defaultPrevented) return;
                    this._element.classList.remove("show");
                    const e = this._element.classList.contains("fade");
                    this._queueCallback(() => this._destroyElement(), this._element, e);
                }
                _destroyElement() {
                    this._element.remove(), pt.trigger(this._element, At), this.dispose();
                }
                static jQueryInterface(e) {
                    return this.each(function () {
                        const t = Lt.getOrCreateInstance(this);
                        if ("string" == typeof e) {
                            if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                            t[e](this);
                        }
                    });
                }
            }
            Et(Lt, "close"), Xe(Lt);
            const St = '[data-bs-toggle="button"]';
            class Ct extends wt {
                static get NAME() {
                    return "button";
                }
                toggle() {
                    this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
                }
                static jQueryInterface(e) {
                    return this.each(function () {
                        const t = Ct.getOrCreateInstance(this);
                        "toggle" === e && t[e]();
                    });
                }
            }
            pt.on(document, "click.bs.button.data-api", St, (e) => {
                e.preventDefault();
                const t = e.target.closest(St);
                Ct.getOrCreateInstance(t).toggle();
            }),
                Xe(Ct);
            const Ot = {
                    find(e, t = document.documentElement) {
                        return [].concat(...Element.prototype.querySelectorAll.call(t, e));
                    },
                    findOne(e, t = document.documentElement) {
                        return Element.prototype.querySelector.call(t, e);
                    },
                    children(e, t) {
                        return [].concat(...e.children).filter((e) => e.matches(t));
                    },
                    parents(e, t) {
                        const i = [];
                        let s = e.parentNode.closest(t);
                        for (; s; ) i.push(s), (s = s.parentNode.closest(t));
                        return i;
                    },
                    prev(e, t) {
                        let i = e.previousElementSibling;
                        for (; i; ) {
                            if (i.matches(t)) return [i];
                            i = i.previousElementSibling;
                        }
                        return [];
                    },
                    next(e, t) {
                        let i = e.nextElementSibling;
                        for (; i; ) {
                            if (i.matches(t)) return [i];
                            i = i.nextElementSibling;
                        }
                        return [];
                    },
                    focusableChildren(e) {
                        const t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((e) => `${e}:not([tabindex^="-"])`).join(",");
                        return this.find(t, e).filter((e) => !ze(e) && $e(e));
                    },
                },
                jt = ".bs.swipe",
                Tt = `touchstart${jt}`,
                Dt = `touchmove${jt}`,
                Pt = `touchend${jt}`,
                Nt = `pointerdown${jt}`,
                Mt = `pointerup${jt}`,
                Ft = { endCallback: null, leftCallback: null, rightCallback: null },
                It = { endCallback: "(function|null)", leftCallback: "(function|null)", rightCallback: "(function|null)" };
            class qt extends yt {
                constructor(e, t) {
                    super(), (this._element = e), e && qt.isSupported() && ((this._config = this._getConfig(t)), (this._deltaX = 0), (this._supportPointerEvents = Boolean(window.PointerEvent)), this._initEvents());
                }
                static get Default() {
                    return Ft;
                }
                static get DefaultType() {
                    return It;
                }
                static get NAME() {
                    return "swipe";
                }
                dispose() {
                    pt.off(this._element, jt);
                }
                _start(e) {
                    this._supportPointerEvents ? this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX) : (this._deltaX = e.touches[0].clientX);
                }
                _end(e) {
                    this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX - this._deltaX), this._handleSwipe(), Ke(this._config.endCallback);
                }
                _move(e) {
                    this._deltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this._deltaX;
                }
                _handleSwipe() {
                    const e = Math.abs(this._deltaX);
                    if (e <= 40) return;
                    const t = e / this._deltaX;
                    (this._deltaX = 0), t && Ke(t > 0 ? this._config.rightCallback : this._config.leftCallback);
                }
                _initEvents() {
                    this._supportPointerEvents
                        ? (pt.on(this._element, Nt, (e) => this._start(e)), pt.on(this._element, Mt, (e) => this._end(e)), this._element.classList.add("pointer-event"))
                        : (pt.on(this._element, Tt, (e) => this._start(e)), pt.on(this._element, Dt, (e) => this._move(e)), pt.on(this._element, Pt, (e) => this._end(e)));
                }
                _eventIsPointerPenTouch(e) {
                    return this._supportPointerEvents && ("pen" === e.pointerType || "touch" === e.pointerType);
                }
                static isSupported() {
                    return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
                }
            }
            const Wt = ".bs.carousel",
                $t = ".data-api",
                zt = "next",
                Ht = "prev",
                Bt = "left",
                Rt = "right",
                Qt = `slide${Wt}`,
                Vt = `slid${Wt}`,
                Yt = `keydown${Wt}`,
                Xt = `mouseenter${Wt}`,
                Kt = `mouseleave${Wt}`,
                Ut = `dragstart${Wt}`,
                Zt = `load${Wt}${$t}`,
                Gt = `click${Wt}${$t}`,
                Jt = "carousel",
                ei = "active",
                ti = ".active",
                ii = ".carousel-item",
                si = ti + ii,
                ni = { ArrowLeft: Rt, ArrowRight: Bt },
                oi = { interval: 5e3, keyboard: !0, pause: "hover", ride: !1, touch: !0, wrap: !0 },
                ri = { interval: "(number|boolean)", keyboard: "boolean", pause: "(string|boolean)", ride: "(boolean|string)", touch: "boolean", wrap: "boolean" };
            class ai extends wt {
                constructor(e, t) {
                    super(e, t),
                        (this._interval = null),
                        (this._activeElement = null),
                        (this._isSliding = !1),
                        (this.touchTimeout = null),
                        (this._swipeHelper = null),
                        (this._indicatorsElement = Ot.findOne(".carousel-indicators", this._element)),
                        this._addEventListeners(),
                        this._config.ride === Jt && this.cycle();
                }
                static get Default() {
                    return oi;
                }
                static get DefaultType() {
                    return ri;
                }
                static get NAME() {
                    return "carousel";
                }
                next() {
                    this._slide(zt);
                }
                nextWhenVisible() {
                    !document.hidden && $e(this._element) && this.next();
                }
                prev() {
                    this._slide(Ht);
                }
                pause() {
                    this._isSliding && Ie(this._element), this._clearInterval();
                }
                cycle() {
                    this._clearInterval(), this._updateInterval(), (this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval));
                }
                _maybeEnableCycle() {
                    this._config.ride && (this._isSliding ? pt.one(this._element, Vt, () => this.cycle()) : this.cycle());
                }
                to(e) {
                    const t = this._getItems();
                    if (e > t.length - 1 || e < 0) return;
                    if (this._isSliding) return void pt.one(this._element, Vt, () => this.to(e));
                    const i = this._getItemIndex(this._getActive());
                    if (i === e) return;
                    const s = e > i ? zt : Ht;
                    this._slide(s, t[e]);
                }
                dispose() {
                    this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
                }
                _configAfterMerge(e) {
                    return (e.defaultInterval = e.interval), e;
                }
                _addEventListeners() {
                    this._config.keyboard && pt.on(this._element, Yt, (e) => this._keydown(e)),
                        "hover" === this._config.pause && (pt.on(this._element, Xt, () => this.pause()), pt.on(this._element, Kt, () => this._maybeEnableCycle())),
                        this._config.touch && qt.isSupported() && this._addTouchEventListeners();
                }
                _addTouchEventListeners() {
                    for (const e of Ot.find(".carousel-item img", this._element)) pt.on(e, Ut, (e) => e.preventDefault());
                    const e = {
                        leftCallback: () => this._slide(this._directionToOrder(Bt)),
                        rightCallback: () => this._slide(this._directionToOrder(Rt)),
                        endCallback: () => {
                            "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), (this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), 500 + this._config.interval)));
                        },
                    };
                    this._swipeHelper = new qt(this._element, e);
                }
                _keydown(e) {
                    if (/input|textarea/i.test(e.target.tagName)) return;
                    const t = ni[e.key];
                    t && (e.preventDefault(), this._slide(this._directionToOrder(t)));
                }
                _getItemIndex(e) {
                    return this._getItems().indexOf(e);
                }
                _setActiveIndicatorElement(e) {
                    if (!this._indicatorsElement) return;
                    const t = Ot.findOne(ti, this._indicatorsElement);
                    t.classList.remove(ei), t.removeAttribute("aria-current");
                    const i = Ot.findOne(`[data-bs-slide-to="${e}"]`, this._indicatorsElement);
                    i && (i.classList.add(ei), i.setAttribute("aria-current", "true"));
                }
                _updateInterval() {
                    const e = this._activeElement || this._getActive();
                    if (!e) return;
                    const t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
                    this._config.interval = t || this._config.defaultInterval;
                }
                _slide(e, t = null) {
                    if (this._isSliding) return;
                    const i = this._getActive(),
                        s = e === zt,
                        n = t || Ze(this._getItems(), i, s, this._config.wrap);
                    if (n === i) return;
                    const o = this._getItemIndex(n),
                        r = (t) => pt.trigger(this._element, t, { relatedTarget: n, direction: this._orderToDirection(e), from: this._getItemIndex(i), to: o });
                    if (r(Qt).defaultPrevented) return;
                    if (!i || !n) return;
                    const a = Boolean(this._interval);
                    this.pause(), (this._isSliding = !0), this._setActiveIndicatorElement(o), (this._activeElement = n);
                    const l = s ? "carousel-item-start" : "carousel-item-end",
                        c = s ? "carousel-item-next" : "carousel-item-prev";
                    n.classList.add(c),
                        Re(n),
                        i.classList.add(l),
                        n.classList.add(l),
                        this._queueCallback(
                            () => {
                                n.classList.remove(l, c), n.classList.add(ei), i.classList.remove(ei, c, l), (this._isSliding = !1), r(Vt);
                            },
                            i,
                            this._isAnimated()
                        ),
                        a && this.cycle();
                }
                _isAnimated() {
                    return this._element.classList.contains("slide");
                }
                _getActive() {
                    return Ot.findOne(si, this._element);
                }
                _getItems() {
                    return Ot.find(ii, this._element);
                }
                _clearInterval() {
                    this._interval && (clearInterval(this._interval), (this._interval = null));
                }
                _directionToOrder(e) {
                    return Ye() ? (e === Bt ? Ht : zt) : e === Bt ? zt : Ht;
                }
                _orderToDirection(e) {
                    return Ye() ? (e === Ht ? Bt : Rt) : e === Ht ? Rt : Bt;
                }
                static jQueryInterface(e) {
                    return this.each(function () {
                        const t = ai.getOrCreateInstance(this, e);
                        if ("number" != typeof e) {
                            if ("string" == typeof e) {
                                if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                                t[e]();
                            }
                        } else t.to(e);
                    });
                }
            }
            pt.on(document, Gt, "[data-bs-slide], [data-bs-slide-to]", function (e) {
                const t = Fe(this);
                if (!t || !t.classList.contains(Jt)) return;
                e.preventDefault();
                const i = ai.getOrCreateInstance(t),
                    s = this.getAttribute("data-bs-slide-to");
                return s ? (i.to(s), void i._maybeEnableCycle()) : "next" === vt.getDataAttribute(this, "slide") ? (i.next(), void i._maybeEnableCycle()) : (i.prev(), void i._maybeEnableCycle());
            }),
                pt.on(window, Zt, () => {
                    const e = Ot.find('[data-bs-ride="carousel"]');
                    for (const t of e) ai.getOrCreateInstance(t);
                }),
                Xe(ai);
            const li = ".bs.collapse",
                ci = `show${li}`,
                di = `shown${li}`,
                hi = `hide${li}`,
                ui = `hidden${li}`,
                pi = `click${li}.data-api`,
                fi = "show",
                gi = "collapse",
                mi = "collapsing",
                _i = `:scope .${gi} .${gi}`,
                bi = '[data-bs-toggle="collapse"]',
                vi = { parent: null, toggle: !0 },
                yi = { parent: "(null|element)", toggle: "boolean" };
            class wi extends wt {
                constructor(e, t) {
                    super(e, t), (this._isTransitioning = !1), (this._triggerArray = []);
                    const i = Ot.find(bi);
                    for (const e of i) {
                        const t = Me(e),
                            i = Ot.find(t).filter((e) => e === this._element);
                        null !== t && i.length && this._triggerArray.push(e);
                    }
                    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
                }
                static get Default() {
                    return vi;
                }
                static get DefaultType() {
                    return yi;
                }
                static get NAME() {
                    return "collapse";
                }
                toggle() {
                    this._isShown() ? this.hide() : this.show();
                }
                show() {
                    if (this._isTransitioning || this._isShown()) return;
                    let e = [];
                    if (
                        (this._config.parent &&
                            (e = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing")
                                .filter((e) => e !== this._element)
                                .map((e) => wi.getOrCreateInstance(e, { toggle: !1 }))),
                        e.length && e[0]._isTransitioning)
                    )
                        return;
                    if (pt.trigger(this._element, ci).defaultPrevented) return;
                    for (const t of e) t.hide();
                    const t = this._getDimension();
                    this._element.classList.remove(gi), this._element.classList.add(mi), (this._element.style[t] = 0), this._addAriaAndCollapsedClass(this._triggerArray, !0), (this._isTransitioning = !0);
                    const i = `scroll${t[0].toUpperCase() + t.slice(1)}`;
                    this._queueCallback(
                        () => {
                            (this._isTransitioning = !1), this._element.classList.remove(mi), this._element.classList.add(gi, fi), (this._element.style[t] = ""), pt.trigger(this._element, di);
                        },
                        this._element,
                        !0
                    ),
                        (this._element.style[t] = `${this._element[i]}px`);
                }
                hide() {
                    if (this._isTransitioning || !this._isShown()) return;
                    if (pt.trigger(this._element, hi).defaultPrevented) return;
                    const e = this._getDimension();
                    (this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`), Re(this._element), this._element.classList.add(mi), this._element.classList.remove(gi, fi);
                    for (const e of this._triggerArray) {
                        const t = Fe(e);
                        t && !this._isShown(t) && this._addAriaAndCollapsedClass([e], !1);
                    }
                    (this._isTransitioning = !0),
                        (this._element.style[e] = ""),
                        this._queueCallback(
                            () => {
                                (this._isTransitioning = !1), this._element.classList.remove(mi), this._element.classList.add(gi), pt.trigger(this._element, ui);
                            },
                            this._element,
                            !0
                        );
                }
                _isShown(e = this._element) {
                    return e.classList.contains(fi);
                }
                _configAfterMerge(e) {
                    return (e.toggle = Boolean(e.toggle)), (e.parent = We(e.parent)), e;
                }
                _getDimension() {
                    return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
                }
                _initializeChildren() {
                    if (!this._config.parent) return;
                    const e = this._getFirstLevelChildren(bi);
                    for (const t of e) {
                        const e = Fe(t);
                        e && this._addAriaAndCollapsedClass([t], this._isShown(e));
                    }
                }
                _getFirstLevelChildren(e) {
                    const t = Ot.find(_i, this._config.parent);
                    return Ot.find(e, this._config.parent).filter((e) => !t.includes(e));
                }
                _addAriaAndCollapsedClass(e, t) {
                    if (e.length) for (const i of e) i.classList.toggle("collapsed", !t), i.setAttribute("aria-expanded", t);
                }
                static jQueryInterface(e) {
                    const t = {};
                    return (
                        "string" == typeof e && /show|hide/.test(e) && (t.toggle = !1),
                        this.each(function () {
                            const i = wi.getOrCreateInstance(this, t);
                            if ("string" == typeof e) {
                                if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`);
                                i[e]();
                            }
                        })
                    );
                }
            }
            pt.on(document, pi, bi, function (e) {
                ("A" === e.target.tagName || (e.delegateTarget && "A" === e.delegateTarget.tagName)) && e.preventDefault();
                const t = Me(this),
                    i = Ot.find(t);
                for (const e of i) wi.getOrCreateInstance(e, { toggle: !1 }).toggle();
            }),
                Xe(wi);
            const Ei = "dropdown",
                xi = ".bs.dropdown",
                ki = ".data-api",
                Ai = "ArrowUp",
                Li = "ArrowDown",
                Si = `hide${xi}`,
                Ci = `hidden${xi}`,
                Oi = `show${xi}`,
                ji = `shown${xi}`,
                Ti = `click${xi}${ki}`,
                Di = `keydown${xi}${ki}`,
                Pi = `keyup${xi}${ki}`,
                Ni = "show",
                Mi = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
                Fi = `${Mi}.${Ni}`,
                Ii = ".dropdown-menu",
                qi = Ye() ? "top-end" : "top-start",
                Wi = Ye() ? "top-start" : "top-end",
                $i = Ye() ? "bottom-end" : "bottom-start",
                zi = Ye() ? "bottom-start" : "bottom-end",
                Hi = Ye() ? "left-start" : "right-start",
                Bi = Ye() ? "right-start" : "left-start",
                Ri = { autoClose: !0, boundary: "clippingParents", display: "dynamic", offset: [0, 2], popperConfig: null, reference: "toggle" },
                Qi = { autoClose: "(boolean|string)", boundary: "(string|element)", display: "string", offset: "(array|string|function)", popperConfig: "(null|object|function)", reference: "(string|element|object)" };
            class Vi extends wt {
                constructor(e, t) {
                    super(e, t),
                        (this._popper = null),
                        (this._parent = this._element.parentNode),
                        (this._menu = Ot.next(this._element, Ii)[0] || Ot.prev(this._element, Ii)[0] || Ot.findOne(Ii, this._parent)),
                        (this._inNavbar = this._detectNavbar());
                }
                static get Default() {
                    return Ri;
                }
                static get DefaultType() {
                    return Qi;
                }
                static get NAME() {
                    return Ei;
                }
                toggle() {
                    return this._isShown() ? this.hide() : this.show();
                }
                show() {
                    if (ze(this._element) || this._isShown()) return;
                    const e = { relatedTarget: this._element };
                    if (!pt.trigger(this._element, Oi, e).defaultPrevented) {
                        if ((this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav"))) for (const e of [].concat(...document.body.children)) pt.on(e, "mouseover", Be);
                        this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Ni), this._element.classList.add(Ni), pt.trigger(this._element, ji, e);
                    }
                }
                hide() {
                    if (ze(this._element) || !this._isShown()) return;
                    const e = { relatedTarget: this._element };
                    this._completeHide(e);
                }
                dispose() {
                    this._popper && this._popper.destroy(), super.dispose();
                }
                update() {
                    (this._inNavbar = this._detectNavbar()), this._popper && this._popper.update();
                }
                _completeHide(e) {
                    if (!pt.trigger(this._element, Si, e).defaultPrevented) {
                        if ("ontouchstart" in document.documentElement) for (const e of [].concat(...document.body.children)) pt.off(e, "mouseover", Be);
                        this._popper && this._popper.destroy(),
                            this._menu.classList.remove(Ni),
                            this._element.classList.remove(Ni),
                            this._element.setAttribute("aria-expanded", "false"),
                            vt.removeDataAttribute(this._menu, "popper"),
                            pt.trigger(this._element, Ci, e);
                    }
                }
                _getConfig(e) {
                    if ("object" == typeof (e = super._getConfig(e)).reference && !qe(e.reference) && "function" != typeof e.reference.getBoundingClientRect)
                        throw new TypeError(`${Ei.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
                    return e;
                }
                _createPopper() {
                    if (void 0 === e) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                    let t = this._element;
                    "parent" === this._config.reference ? (t = this._parent) : qe(this._config.reference) ? (t = We(this._config.reference)) : "object" == typeof this._config.reference && (t = this._config.reference);
                    const i = this._getPopperConfig();
                    this._popper = Te(t, this._menu, i);
                }
                _isShown() {
                    return this._menu.classList.contains(Ni);
                }
                _getPlacement() {
                    const e = this._parent;
                    if (e.classList.contains("dropend")) return Hi;
                    if (e.classList.contains("dropstart")) return Bi;
                    if (e.classList.contains("dropup-center")) return "top";
                    if (e.classList.contains("dropdown-center")) return "bottom";
                    const t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
                    return e.classList.contains("dropup") ? (t ? Wi : qi) : t ? zi : $i;
                }
                _detectNavbar() {
                    return null !== this._element.closest(".navbar");
                }
                _getOffset() {
                    const { offset: e } = this._config;
                    return "string" == typeof e ? e.split(",").map((e) => Number.parseInt(e, 10)) : "function" == typeof e ? (t) => e(t, this._element) : e;
                }
                _getPopperConfig() {
                    const e = {
                        placement: this._getPlacement(),
                        modifiers: [
                            { name: "preventOverflow", options: { boundary: this._config.boundary } },
                            { name: "offset", options: { offset: this._getOffset() } },
                        ],
                    };
                    return (
                        (this._inNavbar || "static" === this._config.display) && (vt.setDataAttribute(this._menu, "popper", "static"), (e.modifiers = [{ name: "applyStyles", enabled: !1 }])),
                        { ...e, ...("function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig) }
                    );
                }
                _selectMenuItem({ key: e, target: t }) {
                    const i = Ot.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((e) => $e(e));
                    i.length && Ze(i, t, e === Li, !i.includes(t)).focus();
                }
                static jQueryInterface(e) {
                    return this.each(function () {
                        const t = Vi.getOrCreateInstance(this, e);
                        if ("string" == typeof e) {
                            if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                            t[e]();
                        }
                    });
                }
                static clearMenus(e) {
                    if (2 === e.button || ("keyup" === e.type && "Tab" !== e.key)) return;
                    const t = Ot.find(Fi);
                    for (const i of t) {
                        const t = Vi.getInstance(i);
                        if (!t || !1 === t._config.autoClose) continue;
                        const s = e.composedPath(),
                            n = s.includes(t._menu);
                        if (s.includes(t._element) || ("inside" === t._config.autoClose && !n) || ("outside" === t._config.autoClose && n)) continue;
                        if (t._menu.contains(e.target) && (("keyup" === e.type && "Tab" === e.key) || /input|select|option|textarea|form/i.test(e.target.tagName))) continue;
                        const o = { relatedTarget: t._element };
                        "click" === e.type && (o.clickEvent = e), t._completeHide(o);
                    }
                }
                static dataApiKeydownHandler(e) {
                    const t = /input|textarea/i.test(e.target.tagName),
                        i = "Escape" === e.key,
                        s = [Ai, Li].includes(e.key);
                    if (!s && !i) return;
                    if (t && !i) return;
                    e.preventDefault();
                    const n = this.matches(Mi) ? this : Ot.prev(this, Mi)[0] || Ot.next(this, Mi)[0] || Ot.findOne(Mi, e.delegateTarget.parentNode),
                        o = Vi.getOrCreateInstance(n);
                    if (s) return e.stopPropagation(), o.show(), void o._selectMenuItem(e);
                    o._isShown() && (e.stopPropagation(), o.hide(), n.focus());
                }
            }
            pt.on(document, Di, Mi, Vi.dataApiKeydownHandler),
                pt.on(document, Di, Ii, Vi.dataApiKeydownHandler),
                pt.on(document, Ti, Vi.clearMenus),
                pt.on(document, Pi, Vi.clearMenus),
                pt.on(document, Ti, Mi, function (e) {
                    e.preventDefault(), Vi.getOrCreateInstance(this).toggle();
                }),
                Xe(Vi);
            const Yi = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                Xi = ".sticky-top",
                Ki = "padding-right",
                Ui = "margin-right";
            class Zi {
                constructor() {
                    this._element = document.body;
                }
                getWidth() {
                    const e = document.documentElement.clientWidth;
                    return Math.abs(window.innerWidth - e);
                }
                hide() {
                    const e = this.getWidth();
                    this._disableOverFlow(), this._setElementAttributes(this._element, Ki, (t) => t + e), this._setElementAttributes(Yi, Ki, (t) => t + e), this._setElementAttributes(Xi, Ui, (t) => t - e);
                }
                reset() {
                    this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, Ki), this._resetElementAttributes(Yi, Ki), this._resetElementAttributes(Xi, Ui);
                }
                isOverflowing() {
                    return this.getWidth() > 0;
                }
                _disableOverFlow() {
                    this._saveInitialAttribute(this._element, "overflow"), (this._element.style.overflow = "hidden");
                }
                _setElementAttributes(e, t, i) {
                    const s = this.getWidth();
                    this._applyManipulationCallback(e, (e) => {
                        if (e !== this._element && window.innerWidth > e.clientWidth + s) return;
                        this._saveInitialAttribute(e, t);
                        const n = window.getComputedStyle(e).getPropertyValue(t);
                        e.style.setProperty(t, `${i(Number.parseFloat(n))}px`);
                    });
                }
                _saveInitialAttribute(e, t) {
                    const i = e.style.getPropertyValue(t);
                    i && vt.setDataAttribute(e, t, i);
                }
                _resetElementAttributes(e, t) {
                    this._applyManipulationCallback(e, (e) => {
                        const i = vt.getDataAttribute(e, t);
                        null !== i ? (vt.removeDataAttribute(e, t), e.style.setProperty(t, i)) : e.style.removeProperty(t);
                    });
                }
                _applyManipulationCallback(e, t) {
                    if (qe(e)) t(e);
                    else for (const i of Ot.find(e, this._element)) t(i);
                }
            }
            const Gi = "backdrop",
                Ji = "show",
                es = `mousedown.bs.${Gi}`,
                ts = { className: "modal-backdrop", clickCallback: null, isAnimated: !1, isVisible: !0, rootElement: "body" },
                is = { className: "string", clickCallback: "(function|null)", isAnimated: "boolean", isVisible: "boolean", rootElement: "(element|string)" };
            class ss extends yt {
                constructor(e) {
                    super(), (this._config = this._getConfig(e)), (this._isAppended = !1), (this._element = null);
                }
                static get Default() {
                    return ts;
                }
                static get DefaultType() {
                    return is;
                }
                static get NAME() {
                    return Gi;
                }
                show(e) {
                    if (!this._config.isVisible) return void Ke(e);
                    this._append();
                    const t = this._getElement();
                    this._config.isAnimated && Re(t),
                        t.classList.add(Ji),
                        this._emulateAnimation(() => {
                            Ke(e);
                        });
                }
                hide(e) {
                    this._config.isVisible
                        ? (this._getElement().classList.remove(Ji),
                          this._emulateAnimation(() => {
                              this.dispose(), Ke(e);
                          }))
                        : Ke(e);
                }
                dispose() {
                    this._isAppended && (pt.off(this._element, es), this._element.remove(), (this._isAppended = !1));
                }
                _getElement() {
                    if (!this._element) {
                        const e = document.createElement("div");
                        (e.className = this._config.className), this._config.isAnimated && e.classList.add("fade"), (this._element = e);
                    }
                    return this._element;
                }
                _configAfterMerge(e) {
                    return (e.rootElement = We(e.rootElement)), e;
                }
                _append() {
                    if (this._isAppended) return;
                    const e = this._getElement();
                    this._config.rootElement.append(e),
                        pt.on(e, es, () => {
                            Ke(this._config.clickCallback);
                        }),
                        (this._isAppended = !0);
                }
                _emulateAnimation(e) {
                    Ue(e, this._getElement(), this._config.isAnimated);
                }
            }
            const ns = ".bs.focustrap",
                os = `focusin${ns}`,
                rs = `keydown.tab${ns}`,
                as = "backward",
                ls = { autofocus: !0, trapElement: null },
                cs = { autofocus: "boolean", trapElement: "element" };
            class ds extends yt {
                constructor(e) {
                    super(), (this._config = this._getConfig(e)), (this._isActive = !1), (this._lastTabNavDirection = null);
                }
                static get Default() {
                    return ls;
                }
                static get DefaultType() {
                    return cs;
                }
                static get NAME() {
                    return "focustrap";
                }
                activate() {
                    this._isActive ||
                        (this._config.autofocus && this._config.trapElement.focus(), pt.off(document, ns), pt.on(document, os, (e) => this._handleFocusin(e)), pt.on(document, rs, (e) => this._handleKeydown(e)), (this._isActive = !0));
                }
                deactivate() {
                    this._isActive && ((this._isActive = !1), pt.off(document, ns));
                }
                _handleFocusin(e) {
                    const { trapElement: t } = this._config;
                    if (e.target === document || e.target === t || t.contains(e.target)) return;
                    const i = Ot.focusableChildren(t);
                    0 === i.length ? t.focus() : this._lastTabNavDirection === as ? i[i.length - 1].focus() : i[0].focus();
                }
                _handleKeydown(e) {
                    "Tab" === e.key && (this._lastTabNavDirection = e.shiftKey ? as : "forward");
                }
            }
            const hs = ".bs.modal",
                us = `hide${hs}`,
                ps = `hidePrevented${hs}`,
                fs = `hidden${hs}`,
                gs = `show${hs}`,
                ms = `shown${hs}`,
                _s = `resize${hs}`,
                bs = `click.dismiss${hs}`,
                vs = `mousedown.dismiss${hs}`,
                ys = `keydown.dismiss${hs}`,
                ws = `click${hs}.data-api`,
                Es = "modal-open",
                xs = "show",
                ks = "modal-static",
                As = { backdrop: !0, focus: !0, keyboard: !0 },
                Ls = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" };
            class Ss extends wt {
                constructor(e, t) {
                    super(e, t),
                        (this._dialog = Ot.findOne(".modal-dialog", this._element)),
                        (this._backdrop = this._initializeBackDrop()),
                        (this._focustrap = this._initializeFocusTrap()),
                        (this._isShown = !1),
                        (this._isTransitioning = !1),
                        (this._scrollBar = new Zi()),
                        this._addEventListeners();
                }
                static get Default() {
                    return As;
                }
                static get DefaultType() {
                    return Ls;
                }
                static get NAME() {
                    return "modal";
                }
                toggle(e) {
                    return this._isShown ? this.hide() : this.show(e);
                }
                show(e) {
                    this._isShown ||
                        this._isTransitioning ||
                        pt.trigger(this._element, gs, { relatedTarget: e }).defaultPrevented ||
                        ((this._isShown = !0), (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add(Es), this._adjustDialog(), this._backdrop.show(() => this._showElement(e)));
                }
                hide() {
                    this._isShown &&
                        !this._isTransitioning &&
                        (pt.trigger(this._element, us).defaultPrevented ||
                            ((this._isShown = !1), (this._isTransitioning = !0), this._focustrap.deactivate(), this._element.classList.remove(xs), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated())));
                }
                dispose() {
                    for (const e of [window, this._dialog]) pt.off(e, hs);
                    this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
                }
                handleUpdate() {
                    this._adjustDialog();
                }
                _initializeBackDrop() {
                    return new ss({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() });
                }
                _initializeFocusTrap() {
                    return new ds({ trapElement: this._element });
                }
                _showElement(e) {
                    document.body.contains(this._element) || document.body.append(this._element),
                        (this._element.style.display = "block"),
                        this._element.removeAttribute("aria-hidden"),
                        this._element.setAttribute("aria-modal", !0),
                        this._element.setAttribute("role", "dialog"),
                        (this._element.scrollTop = 0);
                    const t = Ot.findOne(".modal-body", this._dialog);
                    t && (t.scrollTop = 0),
                        Re(this._element),
                        this._element.classList.add(xs),
                        this._queueCallback(
                            () => {
                                this._config.focus && this._focustrap.activate(), (this._isTransitioning = !1), pt.trigger(this._element, ms, { relatedTarget: e });
                            },
                            this._dialog,
                            this._isAnimated()
                        );
                }
                _addEventListeners() {
                    pt.on(this._element, ys, (e) => {
                        if ("Escape" === e.key) return this._config.keyboard ? (e.preventDefault(), void this.hide()) : void this._triggerBackdropTransition();
                    }),
                        pt.on(window, _s, () => {
                            this._isShown && !this._isTransitioning && this._adjustDialog();
                        }),
                        pt.on(this._element, vs, (e) => {
                            pt.one(this._element, bs, (t) => {
                                this._element === e.target && this._element === t.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition());
                            });
                        });
                }
                _hideModal() {
                    (this._element.style.display = "none"),
                        this._element.setAttribute("aria-hidden", !0),
                        this._element.removeAttribute("aria-modal"),
                        this._element.removeAttribute("role"),
                        (this._isTransitioning = !1),
                        this._backdrop.hide(() => {
                            document.body.classList.remove(Es), this._resetAdjustments(), this._scrollBar.reset(), pt.trigger(this._element, fs);
                        });
                }
                _isAnimated() {
                    return this._element.classList.contains("fade");
                }
                _triggerBackdropTransition() {
                    if (pt.trigger(this._element, ps).defaultPrevented) return;
                    const e = this._element.scrollHeight > document.documentElement.clientHeight,
                        t = this._element.style.overflowY;
                    "hidden" === t ||
                        this._element.classList.contains(ks) ||
                        (e || (this._element.style.overflowY = "hidden"),
                        this._element.classList.add(ks),
                        this._queueCallback(() => {
                            this._element.classList.remove(ks),
                                this._queueCallback(() => {
                                    this._element.style.overflowY = t;
                                }, this._dialog);
                        }, this._dialog),
                        this._element.focus());
                }
                _adjustDialog() {
                    const e = this._element.scrollHeight > document.documentElement.clientHeight,
                        t = this._scrollBar.getWidth(),
                        i = t > 0;
                    if (i && !e) {
                        const e = Ye() ? "paddingLeft" : "paddingRight";
                        this._element.style[e] = `${t}px`;
                    }
                    if (!i && e) {
                        const e = Ye() ? "paddingRight" : "paddingLeft";
                        this._element.style[e] = `${t}px`;
                    }
                }
                _resetAdjustments() {
                    (this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "");
                }
                static jQueryInterface(e, t) {
                    return this.each(function () {
                        const i = Ss.getOrCreateInstance(this, e);
                        if ("string" == typeof e) {
                            if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`);
                            i[e](t);
                        }
                    });
                }
            }
            pt.on(document, ws, '[data-bs-toggle="modal"]', function (e) {
                const t = Fe(this);
                ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
                    pt.one(t, gs, (e) => {
                        e.defaultPrevented ||
                            pt.one(t, fs, () => {
                                $e(this) && this.focus();
                            });
                    });
                const i = Ot.findOne(".modal.show");
                i && Ss.getInstance(i).hide(), Ss.getOrCreateInstance(t).toggle(this);
            }),
                Et(Ss),
                Xe(Ss);
            const Cs = ".bs.offcanvas",
                Os = ".data-api",
                js = `load${Cs}${Os}`,
                Ts = "show",
                Ds = "showing",
                Ps = "hiding",
                Ns = ".offcanvas.show",
                Ms = `show${Cs}`,
                Fs = `shown${Cs}`,
                Is = `hide${Cs}`,
                qs = `hidePrevented${Cs}`,
                Ws = `hidden${Cs}`,
                $s = `resize${Cs}`,
                zs = `click${Cs}${Os}`,
                Hs = `keydown.dismiss${Cs}`,
                Bs = { backdrop: !0, keyboard: !0, scroll: !1 },
                Rs = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" };
            class Qs extends wt {
                constructor(e, t) {
                    super(e, t), (this._isShown = !1), (this._backdrop = this._initializeBackDrop()), (this._focustrap = this._initializeFocusTrap()), this._addEventListeners();
                }
                static get Default() {
                    return Bs;
                }
                static get DefaultType() {
                    return Rs;
                }
                static get NAME() {
                    return "offcanvas";
                }
                toggle(e) {
                    return this._isShown ? this.hide() : this.show(e);
                }
                show(e) {
                    this._isShown ||
                        pt.trigger(this._element, Ms, { relatedTarget: e }).defaultPrevented ||
                        ((this._isShown = !0),
                        this._backdrop.show(),
                        this._config.scroll || new Zi().hide(),
                        this._element.setAttribute("aria-modal", !0),
                        this._element.setAttribute("role", "dialog"),
                        this._element.classList.add(Ds),
                        this._queueCallback(
                            () => {
                                (this._config.scroll && !this._config.backdrop) || this._focustrap.activate(), this._element.classList.add(Ts), this._element.classList.remove(Ds), pt.trigger(this._element, Fs, { relatedTarget: e });
                            },
                            this._element,
                            !0
                        ));
                }
                hide() {
                    this._isShown &&
                        (pt.trigger(this._element, Is).defaultPrevented ||
                            (this._focustrap.deactivate(),
                            this._element.blur(),
                            (this._isShown = !1),
                            this._element.classList.add(Ps),
                            this._backdrop.hide(),
                            this._queueCallback(
                                () => {
                                    this._element.classList.remove(Ts, Ps), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new Zi().reset(), pt.trigger(this._element, Ws);
                                },
                                this._element,
                                !0
                            )));
                }
                dispose() {
                    this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
                }
                _initializeBackDrop() {
                    const e = Boolean(this._config.backdrop);
                    return new ss({
                        className: "offcanvas-backdrop",
                        isVisible: e,
                        isAnimated: !0,
                        rootElement: this._element.parentNode,
                        clickCallback: e
                            ? () => {
                                  "static" !== this._config.backdrop ? this.hide() : pt.trigger(this._element, qs);
                              }
                            : null,
                    });
                }
                _initializeFocusTrap() {
                    return new ds({ trapElement: this._element });
                }
                _addEventListeners() {
                    pt.on(this._element, Hs, (e) => {
                        "Escape" === e.key && (this._config.keyboard ? this.hide() : pt.trigger(this._element, qs));
                    });
                }
                static jQueryInterface(e) {
                    return this.each(function () {
                        const t = Qs.getOrCreateInstance(this, e);
                        if ("string" == typeof e) {
                            if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                            t[e](this);
                        }
                    });
                }
            }
            pt.on(document, zs, '[data-bs-toggle="offcanvas"]', function (e) {
                const t = Fe(this);
                if ((["A", "AREA"].includes(this.tagName) && e.preventDefault(), ze(this))) return;
                pt.one(t, Ws, () => {
                    $e(this) && this.focus();
                });
                const i = Ot.findOne(Ns);
                i && i !== t && Qs.getInstance(i).hide(), Qs.getOrCreateInstance(t).toggle(this);
            }),
                pt.on(window, js, () => {
                    for (const e of Ot.find(Ns)) Qs.getOrCreateInstance(e).show();
                }),
                pt.on(window, $s, () => {
                    for (const e of Ot.find("[aria-modal][class*=show][class*=offcanvas-]")) "fixed" !== getComputedStyle(e).position && Qs.getOrCreateInstance(e).hide();
                }),
                Et(Qs),
                Xe(Qs);
            const Vs = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
                Ys = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
                Xs = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
                Ks = (e, t) => {
                    const i = e.nodeName.toLowerCase();
                    return t.includes(i) ? !Vs.has(i) || Boolean(Ys.test(e.nodeValue) || Xs.test(e.nodeValue)) : t.filter((e) => e instanceof RegExp).some((e) => e.test(i));
                },
                Us = {
                    "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                    a: ["target", "href", "title", "rel"],
                    area: [],
                    b: [],
                    br: [],
                    col: [],
                    code: [],
                    div: [],
                    em: [],
                    hr: [],
                    h1: [],
                    h2: [],
                    h3: [],
                    h4: [],
                    h5: [],
                    h6: [],
                    i: [],
                    img: ["src", "srcset", "alt", "title", "width", "height"],
                    li: [],
                    ol: [],
                    p: [],
                    pre: [],
                    s: [],
                    small: [],
                    span: [],
                    sub: [],
                    sup: [],
                    strong: [],
                    u: [],
                    ul: [],
                },
                Zs = { allowList: Us, content: {}, extraClass: "", html: !1, sanitize: !0, sanitizeFn: null, template: "<div></div>" },
                Gs = { allowList: "object", content: "object", extraClass: "(string|function)", html: "boolean", sanitize: "boolean", sanitizeFn: "(null|function)", template: "string" },
                Js = { entry: "(string|element|function|null)", selector: "(string|element)" };
            class en extends yt {
                constructor(e) {
                    super(), (this._config = this._getConfig(e));
                }
                static get Default() {
                    return Zs;
                }
                static get DefaultType() {
                    return Gs;
                }
                static get NAME() {
                    return "TemplateFactory";
                }
                getContent() {
                    return Object.values(this._config.content)
                        .map((e) => this._resolvePossibleFunction(e))
                        .filter(Boolean);
                }
                hasContent() {
                    return this.getContent().length > 0;
                }
                changeContent(e) {
                    return this._checkContent(e), (this._config.content = { ...this._config.content, ...e }), this;
                }
                toHtml() {
                    const e = document.createElement("div");
                    e.innerHTML = this._maybeSanitize(this._config.template);
                    for (const [t, i] of Object.entries(this._config.content)) this._setContent(e, i, t);
                    const t = e.children[0],
                        i = this._resolvePossibleFunction(this._config.extraClass);
                    return i && t.classList.add(...i.split(" ")), t;
                }
                _typeCheckConfig(e) {
                    super._typeCheckConfig(e), this._checkContent(e.content);
                }
                _checkContent(e) {
                    for (const [t, i] of Object.entries(e)) super._typeCheckConfig({ selector: t, entry: i }, Js);
                }
                _setContent(e, t, i) {
                    const s = Ot.findOne(i, e);
                    s && ((t = this._resolvePossibleFunction(t)) ? (qe(t) ? this._putElementInTemplate(We(t), s) : this._config.html ? (s.innerHTML = this._maybeSanitize(t)) : (s.textContent = t)) : s.remove());
                }
                _maybeSanitize(e) {
                    return this._config.sanitize
                        ? (function (e, t, i) {
                              if (!e.length) return e;
                              if (i && "function" == typeof i) return i(e);
                              const s = new window.DOMParser().parseFromString(e, "text/html"),
                                  n = [].concat(...s.body.querySelectorAll("*"));
                              for (const e of n) {
                                  const i = e.nodeName.toLowerCase();
                                  if (!Object.keys(t).includes(i)) {
                                      e.remove();
                                      continue;
                                  }
                                  const s = [].concat(...e.attributes),
                                      n = [].concat(t["*"] || [], t[i] || []);
                                  for (const t of s) Ks(t, n) || e.removeAttribute(t.nodeName);
                              }
                              return s.body.innerHTML;
                          })(e, this._config.allowList, this._config.sanitizeFn)
                        : e;
                }
                _resolvePossibleFunction(e) {
                    return "function" == typeof e ? e(this) : e;
                }
                _putElementInTemplate(e, t) {
                    if (this._config.html) return (t.innerHTML = ""), void t.append(e);
                    t.textContent = e.textContent;
                }
            }
            const tn = new Set(["sanitize", "allowList", "sanitizeFn"]),
                sn = "fade",
                nn = "show",
                on = ".modal",
                rn = "hide.bs.modal",
                an = "hover",
                ln = "focus",
                cn = { AUTO: "auto", TOP: "top", RIGHT: Ye() ? "left" : "right", BOTTOM: "bottom", LEFT: Ye() ? "right" : "left" },
                dn = {
                    allowList: Us,
                    animation: !0,
                    boundary: "clippingParents",
                    container: !1,
                    customClass: "",
                    delay: 0,
                    fallbackPlacements: ["top", "right", "bottom", "left"],
                    html: !1,
                    offset: [0, 0],
                    placement: "top",
                    popperConfig: null,
                    sanitize: !0,
                    sanitizeFn: null,
                    selector: !1,
                    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                    title: "",
                    trigger: "hover focus",
                },
                hn = {
                    allowList: "object",
                    animation: "boolean",
                    boundary: "(string|element)",
                    container: "(string|element|boolean)",
                    customClass: "(string|function)",
                    delay: "(number|object)",
                    fallbackPlacements: "array",
                    html: "boolean",
                    offset: "(array|string|function)",
                    placement: "(string|function)",
                    popperConfig: "(null|object|function)",
                    sanitize: "boolean",
                    sanitizeFn: "(null|function)",
                    selector: "(string|boolean)",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                };
            class un extends wt {
                constructor(t, i) {
                    if (void 0 === e) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                    super(t, i),
                        (this._isEnabled = !0),
                        (this._timeout = 0),
                        (this._isHovered = null),
                        (this._activeTrigger = {}),
                        (this._popper = null),
                        (this._templateFactory = null),
                        (this._newContent = null),
                        (this.tip = null),
                        this._setListeners(),
                        this._config.selector || this._fixTitle();
                }
                static get Default() {
                    return dn;
                }
                static get DefaultType() {
                    return hn;
                }
                static get NAME() {
                    return "tooltip";
                }
                enable() {
                    this._isEnabled = !0;
                }
                disable() {
                    this._isEnabled = !1;
                }
                toggleEnabled() {
                    this._isEnabled = !this._isEnabled;
                }
                toggle() {
                    this._isEnabled && ((this._activeTrigger.click = !this._activeTrigger.click), this._isShown() ? this._leave() : this._enter());
                }
                dispose() {
                    clearTimeout(this._timeout),
                        pt.off(this._element.closest(on), rn, this._hideModalHandler),
                        this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")),
                        this._disposePopper(),
                        super.dispose();
                }
                show() {
                    if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
                    if (!this._isWithContent() || !this._isEnabled) return;
                    const e = pt.trigger(this._element, this.constructor.eventName("show")),
                        t = (He(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
                    if (e.defaultPrevented || !t) return;
                    this._disposePopper();
                    const i = this._getTipElement();
                    this._element.setAttribute("aria-describedby", i.getAttribute("id"));
                    const { container: s } = this._config;
                    if (
                        (this._element.ownerDocument.documentElement.contains(this.tip) || (s.append(i), pt.trigger(this._element, this.constructor.eventName("inserted"))),
                        (this._popper = this._createPopper(i)),
                        i.classList.add(nn),
                        "ontouchstart" in document.documentElement)
                    )
                        for (const e of [].concat(...document.body.children)) pt.on(e, "mouseover", Be);
                    this._queueCallback(
                        () => {
                            pt.trigger(this._element, this.constructor.eventName("shown")), !1 === this._isHovered && this._leave(), (this._isHovered = !1);
                        },
                        this.tip,
                        this._isAnimated()
                    );
                }
                hide() {
                    if (this._isShown() && !pt.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
                        if ((this._getTipElement().classList.remove(nn), "ontouchstart" in document.documentElement)) for (const e of [].concat(...document.body.children)) pt.off(e, "mouseover", Be);
                        (this._activeTrigger.click = !1),
                            (this._activeTrigger[ln] = !1),
                            (this._activeTrigger[an] = !1),
                            (this._isHovered = null),
                            this._queueCallback(
                                () => {
                                    this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), pt.trigger(this._element, this.constructor.eventName("hidden")));
                                },
                                this.tip,
                                this._isAnimated()
                            );
                    }
                }
                update() {
                    this._popper && this._popper.update();
                }
                _isWithContent() {
                    return Boolean(this._getTitle());
                }
                _getTipElement() {
                    return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
                }
                _createTipElement(e) {
                    const t = this._getTemplateFactory(e).toHtml();
                    if (!t) return null;
                    t.classList.remove(sn, nn), t.classList.add(`bs-${this.constructor.NAME}-auto`);
                    const i = ((e) => {
                        do {
                            e += Math.floor(1e6 * Math.random());
                        } while (document.getElementById(e));
                        return e;
                    })(this.constructor.NAME).toString();
                    return t.setAttribute("id", i), this._isAnimated() && t.classList.add(sn), t;
                }
                setContent(e) {
                    (this._newContent = e), this._isShown() && (this._disposePopper(), this.show());
                }
                _getTemplateFactory(e) {
                    return (
                        this._templateFactory ? this._templateFactory.changeContent(e) : (this._templateFactory = new en({ ...this._config, content: e, extraClass: this._resolvePossibleFunction(this._config.customClass) })),
                        this._templateFactory
                    );
                }
                _getContentForTemplate() {
                    return { ".tooltip-inner": this._getTitle() };
                }
                _getTitle() {
                    return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
                }
                _initializeOnDelegatedTarget(e) {
                    return this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig());
                }
                _isAnimated() {
                    return this._config.animation || (this.tip && this.tip.classList.contains(sn));
                }
                _isShown() {
                    return this.tip && this.tip.classList.contains(nn);
                }
                _createPopper(e) {
                    const t = "function" == typeof this._config.placement ? this._config.placement.call(this, e, this._element) : this._config.placement,
                        i = cn[t.toUpperCase()];
                    return Te(this._element, e, this._getPopperConfig(i));
                }
                _getOffset() {
                    const { offset: e } = this._config;
                    return "string" == typeof e ? e.split(",").map((e) => Number.parseInt(e, 10)) : "function" == typeof e ? (t) => e(t, this._element) : e;
                }
                _resolvePossibleFunction(e) {
                    return "function" == typeof e ? e.call(this._element) : e;
                }
                _getPopperConfig(e) {
                    const t = {
                        placement: e,
                        modifiers: [
                            { name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } },
                            { name: "offset", options: { offset: this._getOffset() } },
                            { name: "preventOverflow", options: { boundary: this._config.boundary } },
                            { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } },
                            {
                                name: "preSetPlacement",
                                enabled: !0,
                                phase: "beforeMain",
                                fn: (e) => {
                                    this._getTipElement().setAttribute("data-popper-placement", e.state.placement);
                                },
                            },
                        ],
                    };
                    return { ...t, ...("function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig) };
                }
                _setListeners() {
                    const e = this._config.trigger.split(" ");
                    for (const t of e)
                        if ("click" === t)
                            pt.on(this._element, this.constructor.eventName("click"), this._config.selector, (e) => {
                                this._initializeOnDelegatedTarget(e).toggle();
                            });
                        else if ("manual" !== t) {
                            const e = t === an ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
                                i = t === an ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                            pt.on(this._element, e, this._config.selector, (e) => {
                                const t = this._initializeOnDelegatedTarget(e);
                                (t._activeTrigger["focusin" === e.type ? ln : an] = !0), t._enter();
                            }),
                                pt.on(this._element, i, this._config.selector, (e) => {
                                    const t = this._initializeOnDelegatedTarget(e);
                                    (t._activeTrigger["focusout" === e.type ? ln : an] = t._element.contains(e.relatedTarget)), t._leave();
                                });
                        }
                    (this._hideModalHandler = () => {
                        this._element && this.hide();
                    }),
                        pt.on(this._element.closest(on), rn, this._hideModalHandler);
                }
                _fixTitle() {
                    const e = this._element.getAttribute("title");
                    e &&
                        (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", e),
                        this._element.setAttribute("data-bs-original-title", e),
                        this._element.removeAttribute("title"));
                }
                _enter() {
                    this._isShown() || this._isHovered
                        ? (this._isHovered = !0)
                        : ((this._isHovered = !0),
                          this._setTimeout(() => {
                              this._isHovered && this.show();
                          }, this._config.delay.show));
                }
                _leave() {
                    this._isWithActiveTrigger() ||
                        ((this._isHovered = !1),
                        this._setTimeout(() => {
                            this._isHovered || this.hide();
                        }, this._config.delay.hide));
                }
                _setTimeout(e, t) {
                    clearTimeout(this._timeout), (this._timeout = setTimeout(e, t));
                }
                _isWithActiveTrigger() {
                    return Object.values(this._activeTrigger).includes(!0);
                }
                _getConfig(e) {
                    const t = vt.getDataAttributes(this._element);
                    for (const e of Object.keys(t)) tn.has(e) && delete t[e];
                    return (e = { ...t, ...("object" == typeof e && e ? e : {}) }), (e = this._mergeConfigObj(e)), (e = this._configAfterMerge(e)), this._typeCheckConfig(e), e;
                }
                _configAfterMerge(e) {
                    return (
                        (e.container = !1 === e.container ? document.body : We(e.container)),
                        "number" == typeof e.delay && (e.delay = { show: e.delay, hide: e.delay }),
                        "number" == typeof e.title && (e.title = e.title.toString()),
                        "number" == typeof e.content && (e.content = e.content.toString()),
                        e
                    );
                }
                _getDelegateConfig() {
                    const e = {};
                    for (const t in this._config) this.constructor.Default[t] !== this._config[t] && (e[t] = this._config[t]);
                    return (e.selector = !1), (e.trigger = "manual"), e;
                }
                _disposePopper() {
                    this._popper && (this._popper.destroy(), (this._popper = null)), this.tip && (this.tip.remove(), (this.tip = null));
                }
                static jQueryInterface(e) {
                    return this.each(function () {
                        const t = un.getOrCreateInstance(this, e);
                        if ("string" == typeof e) {
                            if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                            t[e]();
                        }
                    });
                }
            }
            Xe(un);
            const pn = {
                    ...un.Default,
                    content: "",
                    offset: [0, 8],
                    placement: "right",
                    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
                    trigger: "click",
                },
                fn = { ...un.DefaultType, content: "(null|string|element|function)" };
            class gn extends un {
                static get Default() {
                    return pn;
                }
                static get DefaultType() {
                    return fn;
                }
                static get NAME() {
                    return "popover";
                }
                _isWithContent() {
                    return this._getTitle() || this._getContent();
                }
                _getContentForTemplate() {
                    return { ".popover-header": this._getTitle(), ".popover-body": this._getContent() };
                }
                _getContent() {
                    return this._resolvePossibleFunction(this._config.content);
                }
                static jQueryInterface(e) {
                    return this.each(function () {
                        const t = gn.getOrCreateInstance(this, e);
                        if ("string" == typeof e) {
                            if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                            t[e]();
                        }
                    });
                }
            }
            Xe(gn);
            const mn = ".bs.scrollspy",
                _n = `activate${mn}`,
                bn = `click${mn}`,
                vn = `load${mn}.data-api`,
                yn = "active",
                wn = "[href]",
                En = ".nav-link",
                xn = `${En}, .nav-item > ${En}, .list-group-item`,
                kn = { offset: null, rootMargin: "0px 0px -25%", smoothScroll: !1, target: null, threshold: [0.1, 0.5, 1] },
                An = { offset: "(number|null)", rootMargin: "string", smoothScroll: "boolean", target: "element", threshold: "array" };
            class Ln extends wt {
                constructor(e, t) {
                    super(e, t),
                        (this._targetLinks = new Map()),
                        (this._observableSections = new Map()),
                        (this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element),
                        (this._activeTarget = null),
                        (this._observer = null),
                        (this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }),
                        this.refresh();
                }
                static get Default() {
                    return kn;
                }
                static get DefaultType() {
                    return An;
                }
                static get NAME() {
                    return "scrollspy";
                }
                refresh() {
                    this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : (this._observer = this._getNewObserver());
                    for (const e of this._observableSections.values()) this._observer.observe(e);
                }
                dispose() {
                    this._observer.disconnect(), super.dispose();
                }
                _configAfterMerge(e) {
                    return (
                        (e.target = We(e.target) || document.body),
                        (e.rootMargin = e.offset ? `${e.offset}px 0px -30%` : e.rootMargin),
                        "string" == typeof e.threshold && (e.threshold = e.threshold.split(",").map((e) => Number.parseFloat(e))),
                        e
                    );
                }
                _maybeEnableSmoothScroll() {
                    this._config.smoothScroll &&
                        (pt.off(this._config.target, bn),
                        pt.on(this._config.target, bn, wn, (e) => {
                            const t = this._observableSections.get(e.target.hash);
                            if (t) {
                                e.preventDefault();
                                const i = this._rootElement || window,
                                    s = t.offsetTop - this._element.offsetTop;
                                if (i.scrollTo) return void i.scrollTo({ top: s, behavior: "smooth" });
                                i.scrollTop = s;
                            }
                        }));
                }
                _getNewObserver() {
                    const e = { root: this._rootElement, threshold: this._config.threshold, rootMargin: this._config.rootMargin };
                    return new IntersectionObserver((e) => this._observerCallback(e), e);
                }
                _observerCallback(e) {
                    const t = (e) => this._targetLinks.get(`#${e.target.id}`),
                        i = (e) => {
                            (this._previousScrollData.visibleEntryTop = e.target.offsetTop), this._process(t(e));
                        },
                        s = (this._rootElement || document.documentElement).scrollTop,
                        n = s >= this._previousScrollData.parentScrollTop;
                    this._previousScrollData.parentScrollTop = s;
                    for (const o of e) {
                        if (!o.isIntersecting) {
                            (this._activeTarget = null), this._clearActiveClass(t(o));
                            continue;
                        }
                        const e = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                        if (n && e) {
                            if ((i(o), !s)) return;
                        } else n || e || i(o);
                    }
                }
                _initializeTargetsAndObservables() {
                    (this._targetLinks = new Map()), (this._observableSections = new Map());
                    const e = Ot.find(wn, this._config.target);
                    for (const t of e) {
                        if (!t.hash || ze(t)) continue;
                        const e = Ot.findOne(t.hash, this._element);
                        $e(e) && (this._targetLinks.set(t.hash, t), this._observableSections.set(t.hash, e));
                    }
                }
                _process(e) {
                    this._activeTarget !== e && (this._clearActiveClass(this._config.target), (this._activeTarget = e), e.classList.add(yn), this._activateParents(e), pt.trigger(this._element, _n, { relatedTarget: e }));
                }
                _activateParents(e) {
                    if (e.classList.contains("dropdown-item")) Ot.findOne(".dropdown-toggle", e.closest(".dropdown")).classList.add(yn);
                    else for (const t of Ot.parents(e, ".nav, .list-group")) for (const e of Ot.prev(t, xn)) e.classList.add(yn);
                }
                _clearActiveClass(e) {
                    e.classList.remove(yn);
                    const t = Ot.find(`${wn}.${yn}`, e);
                    for (const e of t) e.classList.remove(yn);
                }
                static jQueryInterface(e) {
                    return this.each(function () {
                        const t = Ln.getOrCreateInstance(this, e);
                        if ("string" == typeof e) {
                            if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                            t[e]();
                        }
                    });
                }
            }
            pt.on(window, vn, () => {
                for (const e of Ot.find('[data-bs-spy="scroll"]')) Ln.getOrCreateInstance(e);
            }),
                Xe(Ln);
            const Sn = ".bs.tab",
                Cn = `hide${Sn}`,
                On = `hidden${Sn}`,
                jn = `show${Sn}`,
                Tn = `shown${Sn}`,
                Dn = `click${Sn}`,
                Pn = `keydown${Sn}`,
                Nn = `load${Sn}`,
                Mn = "ArrowLeft",
                Fn = "ArrowRight",
                In = "ArrowUp",
                qn = "ArrowDown",
                Wn = "active",
                $n = "fade",
                zn = "show",
                Hn = ":not(.dropdown-toggle)",
                Bn = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
                Rn = `.nav-link${Hn}, .list-group-item${Hn}, [role="tab"]${Hn}, ${Bn}`,
                Qn = `.${Wn}[data-bs-toggle="tab"], .${Wn}[data-bs-toggle="pill"], .${Wn}[data-bs-toggle="list"]`;
            class Vn extends wt {
                constructor(e) {
                    super(e), (this._parent = this._element.closest('.list-group, .nav, [role="tablist"]')), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), pt.on(this._element, Pn, (e) => this._keydown(e)));
                }
                static get NAME() {
                    return "tab";
                }
                show() {
                    const e = this._element;
                    if (this._elemIsActive(e)) return;
                    const t = this._getActiveElem(),
                        i = t ? pt.trigger(t, Cn, { relatedTarget: e }) : null;
                    pt.trigger(e, jn, { relatedTarget: t }).defaultPrevented || (i && i.defaultPrevented) || (this._deactivate(t, e), this._activate(e, t));
                }
                _activate(e, t) {
                    e &&
                        (e.classList.add(Wn),
                        this._activate(Fe(e)),
                        this._queueCallback(
                            () => {
                                "tab" === e.getAttribute("role") ? (e.removeAttribute("tabindex"), e.setAttribute("aria-selected", !0), this._toggleDropDown(e, !0), pt.trigger(e, Tn, { relatedTarget: t })) : e.classList.add(zn);
                            },
                            e,
                            e.classList.contains($n)
                        ));
                }
                _deactivate(e, t) {
                    e &&
                        (e.classList.remove(Wn),
                        e.blur(),
                        this._deactivate(Fe(e)),
                        this._queueCallback(
                            () => {
                                "tab" === e.getAttribute("role") ? (e.setAttribute("aria-selected", !1), e.setAttribute("tabindex", "-1"), this._toggleDropDown(e, !1), pt.trigger(e, On, { relatedTarget: t })) : e.classList.remove(zn);
                            },
                            e,
                            e.classList.contains($n)
                        ));
                }
                _keydown(e) {
                    if (![Mn, Fn, In, qn].includes(e.key)) return;
                    e.stopPropagation(), e.preventDefault();
                    const t = [Fn, qn].includes(e.key),
                        i = Ze(
                            this._getChildren().filter((e) => !ze(e)),
                            e.target,
                            t,
                            !0
                        );
                    i && (i.focus({ preventScroll: !0 }), Vn.getOrCreateInstance(i).show());
                }
                _getChildren() {
                    return Ot.find(Rn, this._parent);
                }
                _getActiveElem() {
                    return this._getChildren().find((e) => this._elemIsActive(e)) || null;
                }
                _setInitialAttributes(e, t) {
                    this._setAttributeIfNotExists(e, "role", "tablist");
                    for (const e of t) this._setInitialAttributesOnChild(e);
                }
                _setInitialAttributesOnChild(e) {
                    e = this._getInnerElement(e);
                    const t = this._elemIsActive(e),
                        i = this._getOuterElement(e);
                    e.setAttribute("aria-selected", t),
                        i !== e && this._setAttributeIfNotExists(i, "role", "presentation"),
                        t || e.setAttribute("tabindex", "-1"),
                        this._setAttributeIfNotExists(e, "role", "tab"),
                        this._setInitialAttributesOnTargetPanel(e);
                }
                _setInitialAttributesOnTargetPanel(e) {
                    const t = Fe(e);
                    t && (this._setAttributeIfNotExists(t, "role", "tabpanel"), e.id && this._setAttributeIfNotExists(t, "aria-labelledby", `#${e.id}`));
                }
                _toggleDropDown(e, t) {
                    const i = this._getOuterElement(e);
                    if (!i.classList.contains("dropdown")) return;
                    const s = (e, s) => {
                        const n = Ot.findOne(e, i);
                        n && n.classList.toggle(s, t);
                    };
                    s(".dropdown-toggle", Wn), s(".dropdown-menu", zn), i.setAttribute("aria-expanded", t);
                }
                _setAttributeIfNotExists(e, t, i) {
                    e.hasAttribute(t) || e.setAttribute(t, i);
                }
                _elemIsActive(e) {
                    return e.classList.contains(Wn);
                }
                _getInnerElement(e) {
                    return e.matches(Rn) ? e : Ot.findOne(Rn, e);
                }
                _getOuterElement(e) {
                    return e.closest(".nav-item, .list-group-item") || e;
                }
                static jQueryInterface(e) {
                    return this.each(function () {
                        const t = Vn.getOrCreateInstance(this);
                        if ("string" == typeof e) {
                            if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                            t[e]();
                        }
                    });
                }
            }
            pt.on(document, Dn, Bn, function (e) {
                ["A", "AREA"].includes(this.tagName) && e.preventDefault(), ze(this) || Vn.getOrCreateInstance(this).show();
            }),
                pt.on(window, Nn, () => {
                    for (const e of Ot.find(Qn)) Vn.getOrCreateInstance(e);
                }),
                Xe(Vn);
            const Yn = ".bs.toast",
                Xn = `mouseover${Yn}`,
                Kn = `mouseout${Yn}`,
                Un = `focusin${Yn}`,
                Zn = `focusout${Yn}`,
                Gn = `hide${Yn}`,
                Jn = `hidden${Yn}`,
                eo = `show${Yn}`,
                to = `shown${Yn}`,
                io = "hide",
                so = "show",
                no = "showing",
                oo = { animation: "boolean", autohide: "boolean", delay: "number" },
                ro = { animation: !0, autohide: !0, delay: 5e3 };
            class ao extends wt {
                constructor(e, t) {
                    super(e, t), (this._timeout = null), (this._hasMouseInteraction = !1), (this._hasKeyboardInteraction = !1), this._setListeners();
                }
                static get Default() {
                    return ro;
                }
                static get DefaultType() {
                    return oo;
                }
                static get NAME() {
                    return "toast";
                }
                show() {
                    pt.trigger(this._element, eo).defaultPrevented ||
                        (this._clearTimeout(),
                        this._config.animation && this._element.classList.add("fade"),
                        this._element.classList.remove(io),
                        Re(this._element),
                        this._element.classList.add(so, no),
                        this._queueCallback(
                            () => {
                                this._element.classList.remove(no), pt.trigger(this._element, to), this._maybeScheduleHide();
                            },
                            this._element,
                            this._config.animation
                        ));
                }
                hide() {
                    this.isShown() &&
                        (pt.trigger(this._element, Gn).defaultPrevented ||
                            (this._element.classList.add(no),
                            this._queueCallback(
                                () => {
                                    this._element.classList.add(io), this._element.classList.remove(no, so), pt.trigger(this._element, Jn);
                                },
                                this._element,
                                this._config.animation
                            )));
                }
                dispose() {
                    this._clearTimeout(), this.isShown() && this._element.classList.remove(so), super.dispose();
                }
                isShown() {
                    return this._element.classList.contains(so);
                }
                _maybeScheduleHide() {
                    this._config.autohide &&
                        (this._hasMouseInteraction ||
                            this._hasKeyboardInteraction ||
                            (this._timeout = setTimeout(() => {
                                this.hide();
                            }, this._config.delay)));
                }
                _onInteraction(e, t) {
                    switch (e.type) {
                        case "mouseover":
                        case "mouseout":
                            this._hasMouseInteraction = t;
                            break;
                        case "focusin":
                        case "focusout":
                            this._hasKeyboardInteraction = t;
                    }
                    if (t) return void this._clearTimeout();
                    const i = e.relatedTarget;
                    this._element === i || this._element.contains(i) || this._maybeScheduleHide();
                }
                _setListeners() {
                    pt.on(this._element, Xn, (e) => this._onInteraction(e, !0)),
                        pt.on(this._element, Kn, (e) => this._onInteraction(e, !1)),
                        pt.on(this._element, Un, (e) => this._onInteraction(e, !0)),
                        pt.on(this._element, Zn, (e) => this._onInteraction(e, !1));
                }
                _clearTimeout() {
                    clearTimeout(this._timeout), (this._timeout = null);
                }
                static jQueryInterface(e) {
                    return this.each(function () {
                        const t = ao.getOrCreateInstance(this, e);
                        if ("string" == typeof e) {
                            if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                            t[e](this);
                        }
                    });
                }
            }
            Et(ao), Xe(ao);
            var lo = i(807),
                co = function (e) {
                    var t = typeof e;
                    return null != e && ("object" == t || "function" == t);
                },
                ho = "object" == typeof global && global && global.Object === Object && global,
                uo = "object" == typeof self && self && self.Object === Object && self,
                po = ho || uo || Function("return this")(),
                fo = function () {
                    return po.Date.now();
                },
                go = /\s/,
                mo = /^\s+/,
                _o = function (e) {
                    return e
                        ? e
                              .slice(
                                  0,
                                  (function (e) {
                                      for (var t = e.length; t-- && go.test(e.charAt(t)); );
                                      return t;
                                  })(e) + 1
                              )
                              .replace(mo, "")
                        : e;
                },
                bo = po.Symbol,
                vo = Object.prototype,
                yo = vo.hasOwnProperty,
                wo = vo.toString,
                Eo = bo ? bo.toStringTag : void 0,
                xo = Object.prototype.toString,
                ko = bo ? bo.toStringTag : void 0,
                Ao = function (e) {
                    return null == e
                        ? void 0 === e
                            ? "[object Undefined]"
                            : "[object Null]"
                        : ko && ko in Object(e)
                        ? (function (e) {
                              var t = yo.call(e, Eo),
                                  i = e[Eo];
                              try {
                                  e[Eo] = void 0;
                                  var s = !0;
                              } catch (e) {}
                              var n = wo.call(e);
                              return s && (t ? (e[Eo] = i) : delete e[Eo]), n;
                          })(e)
                        : (function (e) {
                              return xo.call(e);
                          })(e);
                },
                Lo = /^[-+]0x[0-9a-f]+$/i,
                So = /^0b[01]+$/i,
                Co = /^0o[0-7]+$/i,
                Oo = parseInt,
                jo = function (e) {
                    if ("number" == typeof e) return e;
                    if (
                        (function (e) {
                            return (
                                "symbol" == typeof e ||
                                ((function (e) {
                                    return null != e && "object" == typeof e;
                                })(e) &&
                                    "[object Symbol]" == Ao(e))
                            );
                        })(e)
                    )
                        return NaN;
                    if (co(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = co(t) ? t + "" : t;
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = _o(e);
                    var i = So.test(e);
                    return i || Co.test(e) ? Oo(e.slice(2), i ? 2 : 8) : Lo.test(e) ? NaN : +e;
                },
                To = Math.max,
                Do = Math.min,
                Po = function (e, t, i) {
                    var s,
                        n,
                        o,
                        r,
                        a,
                        l,
                        c = 0,
                        d = !1,
                        h = !1,
                        u = !0;
                    if ("function" != typeof e) throw new TypeError("Expected a function");
                    function p(t) {
                        var i = s,
                            o = n;
                        return (s = n = void 0), (c = t), (r = e.apply(o, i));
                    }
                    function f(e) {
                        var i = e - l;
                        return void 0 === l || i >= t || i < 0 || (h && e - c >= o);
                    }
                    function g() {
                        var e = fo();
                        if (f(e)) return m(e);
                        a = setTimeout(
                            g,
                            (function (e) {
                                var i = t - (e - l);
                                return h ? Do(i, o - (e - c)) : i;
                            })(e)
                        );
                    }
                    function m(e) {
                        return (a = void 0), u && s ? p(e) : ((s = n = void 0), r);
                    }
                    function _() {
                        var e = fo(),
                            i = f(e);
                        if (((s = arguments), (n = this), (l = e), i)) {
                            if (void 0 === a)
                                return (function (e) {
                                    return (c = e), (a = setTimeout(g, t)), d ? p(e) : r;
                                })(l);
                            if (h) return clearTimeout(a), (a = setTimeout(g, t)), p(l);
                        }
                        return void 0 === a && (a = setTimeout(g, t)), r;
                    }
                    return (
                        (t = jo(t) || 0),
                        co(i) && ((d = !!i.leading), (o = (h = "maxWait" in i) ? To(jo(i.maxWait) || 0, t) : o), (u = "trailing" in i ? !!i.trailing : u)),
                        (_.cancel = function () {
                            void 0 !== a && clearTimeout(a), (c = 0), (s = l = n = a = void 0);
                        }),
                        (_.flush = function () {
                            return void 0 === a ? r : m(fo());
                        }),
                        _
                    );
                },
                No = function (e, t, i) {
                    var s = !0,
                        n = !0;
                    if ("function" != typeof e) throw new TypeError("Expected a function");
                    return co(i) && ((s = "leading" in i ? !!i.leading : s), (n = "trailing" in i ? !!i.trailing : n)), Po(e, t, { leading: s, maxWait: t, trailing: n });
                },
                Mo = function () {
                    return (
                        (Mo =
                            Object.assign ||
                            function (e) {
                                for (var t, i = 1, s = arguments.length; i < s; i++) for (var n in (t = arguments[i])) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                return e;
                            }),
                        Mo.apply(this, arguments)
                    );
                },
                Fo = null,
                Io = null;
            function qo() {
                if (null === Fo) {
                    if ("undefined" == typeof document) return (Fo = 0);
                    var e = document.body,
                        t = document.createElement("div");
                    t.classList.add("simplebar-hide-scrollbar"), e.appendChild(t);
                    var i = t.getBoundingClientRect().right;
                    e.removeChild(t), (Fo = i);
                }
                return Fo;
            }
            function Wo(e) {
                return e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
            }
            function $o(e) {
                return e && e.ownerDocument ? e.ownerDocument : document;
            }
            lo &&
                window.addEventListener("resize", function () {
                    Io !== window.devicePixelRatio && ((Io = window.devicePixelRatio), (Fo = null));
                });
            var zo = function (e) {
                return Array.prototype.reduce.call(
                    e,
                    function (e, t) {
                        var i = t.name.match(/data-simplebar-(.+)/);
                        if (i) {
                            var s = i[1].replace(/\W+(.)/g, function (e, t) {
                                return t.toUpperCase();
                            });
                            switch (t.value) {
                                case "true":
                                    e[s] = !0;
                                    break;
                                case "false":
                                    e[s] = !1;
                                    break;
                                case void 0:
                                    e[s] = !0;
                                    break;
                                default:
                                    e[s] = t.value;
                            }
                        }
                        return e;
                    },
                    {}
                );
            };
            function Ho(e, t) {
                var i;
                e && (i = e.classList).add.apply(i, t.split(" "));
            }
            function Bo(e, t) {
                e &&
                    t.split(" ").forEach(function (t) {
                        e.classList.remove(t);
                    });
            }
            function Ro(e) {
                return ".".concat(e.split(" ").join("."));
            }
            var Qo = Object.freeze({ __proto__: null, addClasses: Ho, classNamesToQuery: Ro, getElementDocument: $o, getElementWindow: Wo, getOptions: zo, removeClasses: Bo }),
                Vo = Wo,
                Yo = $o,
                Xo = zo,
                Ko = Ho,
                Uo = Bo,
                Zo = Ro,
                Go = (function () {
                    function e(t, i) {
                        void 0 === i && (i = {});
                        var s = this;
                        if (
                            ((this.removePreventClickId = null),
                            (this.minScrollbarWidth = 20),
                            (this.stopScrollDelay = 175),
                            (this.isScrolling = !1),
                            (this.isMouseEntering = !1),
                            (this.scrollXTicking = !1),
                            (this.scrollYTicking = !1),
                            (this.wrapperEl = null),
                            (this.contentWrapperEl = null),
                            (this.contentEl = null),
                            (this.offsetEl = null),
                            (this.maskEl = null),
                            (this.placeholderEl = null),
                            (this.heightAutoObserverWrapperEl = null),
                            (this.heightAutoObserverEl = null),
                            (this.rtlHelpers = null),
                            (this.scrollbarWidth = 0),
                            (this.resizeObserver = null),
                            (this.mutationObserver = null),
                            (this.elStyles = null),
                            (this.isRtl = null),
                            (this.mouseX = 0),
                            (this.mouseY = 0),
                            (this.onMouseMove = function () {}),
                            (this.onWindowResize = function () {}),
                            (this.onStopScrolling = function () {}),
                            (this.onMouseEntered = function () {}),
                            (this.onScroll = function () {
                                var e = Vo(s.el);
                                s.scrollXTicking || (e.requestAnimationFrame(s.scrollX), (s.scrollXTicking = !0)),
                                    s.scrollYTicking || (e.requestAnimationFrame(s.scrollY), (s.scrollYTicking = !0)),
                                    s.isScrolling || ((s.isScrolling = !0), Ko(s.el, s.classNames.scrolling)),
                                    s.showScrollbar("x"),
                                    s.showScrollbar("y"),
                                    s.onStopScrolling();
                            }),
                            (this.scrollX = function () {
                                s.axis.x.isOverflowing && s.positionScrollbar("x"), (s.scrollXTicking = !1);
                            }),
                            (this.scrollY = function () {
                                s.axis.y.isOverflowing && s.positionScrollbar("y"), (s.scrollYTicking = !1);
                            }),
                            (this._onStopScrolling = function () {
                                Uo(s.el, s.classNames.scrolling), s.options.autoHide && (s.hideScrollbar("x"), s.hideScrollbar("y")), (s.isScrolling = !1);
                            }),
                            (this.onMouseEnter = function () {
                                s.isMouseEntering || (Ko(s.el, s.classNames.mouseEntered), s.showScrollbar("x"), s.showScrollbar("y"), (s.isMouseEntering = !0)), s.onMouseEntered();
                            }),
                            (this._onMouseEntered = function () {
                                Uo(s.el, s.classNames.mouseEntered), s.options.autoHide && (s.hideScrollbar("x"), s.hideScrollbar("y")), (s.isMouseEntering = !1);
                            }),
                            (this._onMouseMove = function (e) {
                                (s.mouseX = e.clientX), (s.mouseY = e.clientY), (s.axis.x.isOverflowing || s.axis.x.forceVisible) && s.onMouseMoveForAxis("x"), (s.axis.y.isOverflowing || s.axis.y.forceVisible) && s.onMouseMoveForAxis("y");
                            }),
                            (this.onMouseLeave = function () {
                                s.onMouseMove.cancel(),
                                    (s.axis.x.isOverflowing || s.axis.x.forceVisible) && s.onMouseLeaveForAxis("x"),
                                    (s.axis.y.isOverflowing || s.axis.y.forceVisible) && s.onMouseLeaveForAxis("y"),
                                    (s.mouseX = -1),
                                    (s.mouseY = -1);
                            }),
                            (this._onWindowResize = function () {
                                (s.scrollbarWidth = s.getScrollbarWidth()), s.hideNativeScrollbar();
                            }),
                            (this.onPointerEvent = function (e) {
                                var t, i;
                                s.axis.x.track.el &&
                                    s.axis.y.track.el &&
                                    s.axis.x.scrollbar.el &&
                                    s.axis.y.scrollbar.el &&
                                    ((s.axis.x.track.rect = s.axis.x.track.el.getBoundingClientRect()),
                                    (s.axis.y.track.rect = s.axis.y.track.el.getBoundingClientRect()),
                                    (s.axis.x.isOverflowing || s.axis.x.forceVisible) && (t = s.isWithinBounds(s.axis.x.track.rect)),
                                    (s.axis.y.isOverflowing || s.axis.y.forceVisible) && (i = s.isWithinBounds(s.axis.y.track.rect)),
                                    (t || i) &&
                                        (e.stopPropagation(),
                                        "pointerdown" === e.type &&
                                            "touch" !== e.pointerType &&
                                            (t && ((s.axis.x.scrollbar.rect = s.axis.x.scrollbar.el.getBoundingClientRect()), s.isWithinBounds(s.axis.x.scrollbar.rect) ? s.onDragStart(e, "x") : s.onTrackClick(e, "x")),
                                            i && ((s.axis.y.scrollbar.rect = s.axis.y.scrollbar.el.getBoundingClientRect()), s.isWithinBounds(s.axis.y.scrollbar.rect) ? s.onDragStart(e, "y") : s.onTrackClick(e, "y")))));
                            }),
                            (this.drag = function (t) {
                                var i, n, o, r, a, l, c, d, h, u, p;
                                if (s.draggedAxis && s.contentWrapperEl) {
                                    var f = s.axis[s.draggedAxis].track,
                                        g = null !== (n = null === (i = f.rect) || void 0 === i ? void 0 : i[s.axis[s.draggedAxis].sizeAttr]) && void 0 !== n ? n : 0,
                                        m = s.axis[s.draggedAxis].scrollbar,
                                        _ = null !== (r = null === (o = s.contentWrapperEl) || void 0 === o ? void 0 : o[s.axis[s.draggedAxis].scrollSizeAttr]) && void 0 !== r ? r : 0,
                                        b = parseInt(null !== (l = null === (a = s.elStyles) || void 0 === a ? void 0 : a[s.axis[s.draggedAxis].sizeAttr]) && void 0 !== l ? l : "0px", 10);
                                    t.preventDefault(), t.stopPropagation();
                                    var v =
                                            ("y" === s.draggedAxis ? t.pageY : t.pageX) -
                                            (null !== (d = null === (c = f.rect) || void 0 === c ? void 0 : c[s.axis[s.draggedAxis].offsetAttr]) && void 0 !== d ? d : 0) -
                                            s.axis[s.draggedAxis].dragOffset,
                                        y = ((v = s.isRtl ? (null !== (u = null === (h = f.rect) || void 0 === h ? void 0 : h[s.axis[s.draggedAxis].sizeAttr]) && void 0 !== u ? u : 0) - m.size - v : v) / (g - m.size)) * (_ - b);
                                    "x" === s.draggedAxis && s.isRtl && (y = (null === (p = e.getRtlHelpers()) || void 0 === p ? void 0 : p.isScrollingToNegative) ? -y : y), (s.contentWrapperEl[s.axis[s.draggedAxis].scrollOffsetAttr] = y);
                                }
                            }),
                            (this.onEndDrag = function (e) {
                                var t = Yo(s.el),
                                    i = Vo(s.el);
                                e.preventDefault(),
                                    e.stopPropagation(),
                                    Uo(s.el, s.classNames.dragging),
                                    t.removeEventListener("mousemove", s.drag, !0),
                                    t.removeEventListener("mouseup", s.onEndDrag, !0),
                                    (s.removePreventClickId = i.setTimeout(function () {
                                        t.removeEventListener("click", s.preventClick, !0), t.removeEventListener("dblclick", s.preventClick, !0), (s.removePreventClickId = null);
                                    }));
                            }),
                            (this.preventClick = function (e) {
                                e.preventDefault(), e.stopPropagation();
                            }),
                            (this.el = t),
                            (this.options = Mo(Mo({}, e.defaultOptions), i)),
                            (this.classNames = Mo(Mo({}, e.defaultOptions.classNames), i.classNames)),
                            (this.axis = {
                                x: {
                                    scrollOffsetAttr: "scrollLeft",
                                    sizeAttr: "width",
                                    scrollSizeAttr: "scrollWidth",
                                    offsetSizeAttr: "offsetWidth",
                                    offsetAttr: "left",
                                    overflowAttr: "overflowX",
                                    dragOffset: 0,
                                    isOverflowing: !0,
                                    forceVisible: !1,
                                    track: { size: null, el: null, rect: null, isVisible: !1 },
                                    scrollbar: { size: null, el: null, rect: null, isVisible: !1 },
                                },
                                y: {
                                    scrollOffsetAttr: "scrollTop",
                                    sizeAttr: "height",
                                    scrollSizeAttr: "scrollHeight",
                                    offsetSizeAttr: "offsetHeight",
                                    offsetAttr: "top",
                                    overflowAttr: "overflowY",
                                    dragOffset: 0,
                                    isOverflowing: !0,
                                    forceVisible: !1,
                                    track: { size: null, el: null, rect: null, isVisible: !1 },
                                    scrollbar: { size: null, el: null, rect: null, isVisible: !1 },
                                },
                            }),
                            "object" != typeof this.el || !this.el.nodeName)
                        )
                            throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));
                        (this.onMouseMove = No(this._onMouseMove, 64)),
                            (this.onWindowResize = Po(this._onWindowResize, 64, { leading: !0 })),
                            (this.onStopScrolling = Po(this._onStopScrolling, this.stopScrollDelay)),
                            (this.onMouseEntered = Po(this._onMouseEntered, this.stopScrollDelay)),
                            this.init();
                    }
                    return (
                        (e.getRtlHelpers = function () {
                            if (e.rtlHelpers) return e.rtlHelpers;
                            var t = document.createElement("div");
                            t.innerHTML = '<div class="simplebar-dummy-scrollbar-size"><div></div></div>';
                            var i = t.firstElementChild,
                                s = null == i ? void 0 : i.firstElementChild;
                            if (!s) return null;
                            document.body.appendChild(i), (i.scrollLeft = 0);
                            var n = e.getOffset(i),
                                o = e.getOffset(s);
                            i.scrollLeft = -999;
                            var r = e.getOffset(s);
                            return document.body.removeChild(i), (e.rtlHelpers = { isScrollOriginAtZero: n.left !== o.left, isScrollingToNegative: o.left !== r.left }), e.rtlHelpers;
                        }),
                        (e.prototype.getScrollbarWidth = function () {
                            try {
                                return (this.contentWrapperEl && "none" === getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display) ||
                                    "scrollbarWidth" in document.documentElement.style ||
                                    "-ms-overflow-style" in document.documentElement.style
                                    ? 0
                                    : qo();
                            } catch (e) {
                                return qo();
                            }
                        }),
                        (e.getOffset = function (e) {
                            var t = e.getBoundingClientRect(),
                                i = Yo(e),
                                s = Vo(e);
                            return { top: t.top + (s.pageYOffset || i.documentElement.scrollTop), left: t.left + (s.pageXOffset || i.documentElement.scrollLeft) };
                        }),
                        (e.prototype.init = function () {
                            lo && (this.initDOM(), (this.rtlHelpers = e.getRtlHelpers()), (this.scrollbarWidth = this.getScrollbarWidth()), this.recalculate(), this.initListeners());
                        }),
                        (e.prototype.initDOM = function () {
                            var e, t;
                            (this.wrapperEl = this.el.querySelector(Zo(this.classNames.wrapper))),
                                (this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector(Zo(this.classNames.contentWrapper))),
                                (this.contentEl = this.options.contentNode || this.el.querySelector(Zo(this.classNames.contentEl))),
                                (this.offsetEl = this.el.querySelector(Zo(this.classNames.offset))),
                                (this.maskEl = this.el.querySelector(Zo(this.classNames.mask))),
                                (this.placeholderEl = this.findChild(this.wrapperEl, Zo(this.classNames.placeholder))),
                                (this.heightAutoObserverWrapperEl = this.el.querySelector(Zo(this.classNames.heightAutoObserverWrapperEl))),
                                (this.heightAutoObserverEl = this.el.querySelector(Zo(this.classNames.heightAutoObserverEl))),
                                (this.axis.x.track.el = this.findChild(this.el, "".concat(Zo(this.classNames.track)).concat(Zo(this.classNames.horizontal)))),
                                (this.axis.y.track.el = this.findChild(this.el, "".concat(Zo(this.classNames.track)).concat(Zo(this.classNames.vertical)))),
                                (this.axis.x.scrollbar.el = (null === (e = this.axis.x.track.el) || void 0 === e ? void 0 : e.querySelector(Zo(this.classNames.scrollbar))) || null),
                                (this.axis.y.scrollbar.el = (null === (t = this.axis.y.track.el) || void 0 === t ? void 0 : t.querySelector(Zo(this.classNames.scrollbar))) || null),
                                this.options.autoHide || (Ko(this.axis.x.scrollbar.el, this.classNames.visible), Ko(this.axis.y.scrollbar.el, this.classNames.visible));
                        }),
                        (e.prototype.initListeners = function () {
                            var e,
                                t = this,
                                i = Vo(this.el);
                            if (
                                (this.el.addEventListener("mouseenter", this.onMouseEnter),
                                this.el.addEventListener("pointerdown", this.onPointerEvent, !0),
                                this.el.addEventListener("mousemove", this.onMouseMove),
                                this.el.addEventListener("mouseleave", this.onMouseLeave),
                                null === (e = this.contentWrapperEl) || void 0 === e || e.addEventListener("scroll", this.onScroll),
                                i.addEventListener("resize", this.onWindowResize),
                                this.contentEl)
                            ) {
                                if (window.ResizeObserver) {
                                    var s = !1,
                                        n = i.ResizeObserver || ResizeObserver;
                                    (this.resizeObserver = new n(function () {
                                        s &&
                                            i.requestAnimationFrame(function () {
                                                t.recalculate();
                                            });
                                    })),
                                        this.resizeObserver.observe(this.el),
                                        this.resizeObserver.observe(this.contentEl),
                                        i.requestAnimationFrame(function () {
                                            s = !0;
                                        });
                                }
                                (this.mutationObserver = new i.MutationObserver(function () {
                                    i.requestAnimationFrame(function () {
                                        t.recalculate();
                                    });
                                })),
                                    this.mutationObserver.observe(this.contentEl, { childList: !0, subtree: !0, characterData: !0 });
                            }
                        }),
                        (e.prototype.recalculate = function () {
                            if (this.heightAutoObserverEl && this.contentEl && this.contentWrapperEl && this.wrapperEl && this.placeholderEl) {
                                var e = Vo(this.el);
                                (this.elStyles = e.getComputedStyle(this.el)), (this.isRtl = "rtl" === this.elStyles.direction);
                                var t = this.contentEl.offsetWidth,
                                    i = this.heightAutoObserverEl.offsetHeight <= 1,
                                    s = this.heightAutoObserverEl.offsetWidth <= 1 || t > 0,
                                    n = this.contentWrapperEl.offsetWidth,
                                    o = this.elStyles.overflowX,
                                    r = this.elStyles.overflowY;
                                (this.contentEl.style.padding = "".concat(this.elStyles.paddingTop, " ").concat(this.elStyles.paddingRight, " ").concat(this.elStyles.paddingBottom, " ").concat(this.elStyles.paddingLeft)),
                                    (this.wrapperEl.style.margin = "-".concat(this.elStyles.paddingTop, " -").concat(this.elStyles.paddingRight, " -").concat(this.elStyles.paddingBottom, " -").concat(this.elStyles.paddingLeft));
                                var a = this.contentEl.scrollHeight,
                                    l = this.contentEl.scrollWidth;
                                (this.contentWrapperEl.style.height = i ? "auto" : "100%"), (this.placeholderEl.style.width = s ? "".concat(t || l, "px") : "auto"), (this.placeholderEl.style.height = "".concat(a, "px"));
                                var c = this.contentWrapperEl.offsetHeight;
                                (this.axis.x.isOverflowing = 0 !== t && l > t),
                                    (this.axis.y.isOverflowing = a > c),
                                    (this.axis.x.isOverflowing = "hidden" !== o && this.axis.x.isOverflowing),
                                    (this.axis.y.isOverflowing = "hidden" !== r && this.axis.y.isOverflowing),
                                    (this.axis.x.forceVisible = "x" === this.options.forceVisible || !0 === this.options.forceVisible),
                                    (this.axis.y.forceVisible = "y" === this.options.forceVisible || !0 === this.options.forceVisible),
                                    this.hideNativeScrollbar();
                                var d = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
                                    h = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
                                (this.axis.x.isOverflowing = this.axis.x.isOverflowing && l > n - h),
                                    (this.axis.y.isOverflowing = this.axis.y.isOverflowing && a > c - d),
                                    (this.axis.x.scrollbar.size = this.getScrollbarSize("x")),
                                    (this.axis.y.scrollbar.size = this.getScrollbarSize("y")),
                                    this.axis.x.scrollbar.el && (this.axis.x.scrollbar.el.style.width = "".concat(this.axis.x.scrollbar.size, "px")),
                                    this.axis.y.scrollbar.el && (this.axis.y.scrollbar.el.style.height = "".concat(this.axis.y.scrollbar.size, "px")),
                                    this.positionScrollbar("x"),
                                    this.positionScrollbar("y"),
                                    this.toggleTrackVisibility("x"),
                                    this.toggleTrackVisibility("y");
                            }
                        }),
                        (e.prototype.getScrollbarSize = function (e) {
                            var t, i;
                            if ((void 0 === e && (e = "y"), !this.axis[e].isOverflowing || !this.contentEl)) return 0;
                            var s,
                                n = this.contentEl[this.axis[e].scrollSizeAttr],
                                o = null !== (i = null === (t = this.axis[e].track.el) || void 0 === t ? void 0 : t[this.axis[e].offsetSizeAttr]) && void 0 !== i ? i : 0,
                                r = o / n;
                            return (s = Math.max(~~(r * o), this.options.scrollbarMinSize)), this.options.scrollbarMaxSize && (s = Math.min(s, this.options.scrollbarMaxSize)), s;
                        }),
                        (e.prototype.positionScrollbar = function (t) {
                            var i, s, n;
                            void 0 === t && (t = "y");
                            var o = this.axis[t].scrollbar;
                            if (this.axis[t].isOverflowing && this.contentWrapperEl && o.el && this.elStyles) {
                                var r = this.contentWrapperEl[this.axis[t].scrollSizeAttr],
                                    a = (null === (i = this.axis[t].track.el) || void 0 === i ? void 0 : i[this.axis[t].offsetSizeAttr]) || 0,
                                    l = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
                                    c = this.contentWrapperEl[this.axis[t].scrollOffsetAttr];
                                (c = "x" === t && this.isRtl && (null === (s = e.getRtlHelpers()) || void 0 === s ? void 0 : s.isScrollOriginAtZero) ? -c : c),
                                    "x" === t && this.isRtl && (c = (null === (n = e.getRtlHelpers()) || void 0 === n ? void 0 : n.isScrollingToNegative) ? c : -c);
                                var d = c / (r - l),
                                    h = ~~((a - o.size) * d);
                                (h = "x" === t && this.isRtl ? -h + (a - o.size) : h), (o.el.style.transform = "x" === t ? "translate3d(".concat(h, "px, 0, 0)") : "translate3d(0, ".concat(h, "px, 0)"));
                            }
                        }),
                        (e.prototype.toggleTrackVisibility = function (e) {
                            void 0 === e && (e = "y");
                            var t = this.axis[e].track.el,
                                i = this.axis[e].scrollbar.el;
                            t &&
                                i &&
                                this.contentWrapperEl &&
                                (this.axis[e].isOverflowing || this.axis[e].forceVisible
                                    ? ((t.style.visibility = "visible"), (this.contentWrapperEl.style[this.axis[e].overflowAttr] = "scroll"), this.el.classList.add("".concat(this.classNames.scrollable, "-").concat(e)))
                                    : ((t.style.visibility = "hidden"), (this.contentWrapperEl.style[this.axis[e].overflowAttr] = "hidden"), this.el.classList.remove("".concat(this.classNames.scrollable, "-").concat(e))),
                                this.axis[e].isOverflowing ? (i.style.display = "block") : (i.style.display = "none"));
                        }),
                        (e.prototype.showScrollbar = function (e) {
                            void 0 === e && (e = "y"), this.axis[e].isOverflowing && !this.axis[e].scrollbar.isVisible && (Ko(this.axis[e].scrollbar.el, this.classNames.visible), (this.axis[e].scrollbar.isVisible = !0));
                        }),
                        (e.prototype.hideScrollbar = function (e) {
                            void 0 === e && (e = "y"), this.axis[e].isOverflowing && this.axis[e].scrollbar.isVisible && (Uo(this.axis[e].scrollbar.el, this.classNames.visible), (this.axis[e].scrollbar.isVisible = !1));
                        }),
                        (e.prototype.hideNativeScrollbar = function () {
                            this.offsetEl &&
                                ((this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-".concat(this.scrollbarWidth, "px") : "0px"),
                                (this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-".concat(this.scrollbarWidth, "px") : "0px"));
                        }),
                        (e.prototype.onMouseMoveForAxis = function (e) {
                            void 0 === e && (e = "y");
                            var t = this.axis[e];
                            t.track.el &&
                                t.scrollbar.el &&
                                ((t.track.rect = t.track.el.getBoundingClientRect()),
                                (t.scrollbar.rect = t.scrollbar.el.getBoundingClientRect()),
                                this.isWithinBounds(t.track.rect)
                                    ? (this.showScrollbar(e), Ko(t.track.el, this.classNames.hover), this.isWithinBounds(t.scrollbar.rect) ? Ko(t.scrollbar.el, this.classNames.hover) : Uo(t.scrollbar.el, this.classNames.hover))
                                    : (Uo(t.track.el, this.classNames.hover), this.options.autoHide && this.hideScrollbar(e)));
                        }),
                        (e.prototype.onMouseLeaveForAxis = function (e) {
                            void 0 === e && (e = "y"), Uo(this.axis[e].track.el, this.classNames.hover), Uo(this.axis[e].scrollbar.el, this.classNames.hover), this.options.autoHide && this.hideScrollbar(e);
                        }),
                        (e.prototype.onDragStart = function (e, t) {
                            var i;
                            void 0 === t && (t = "y");
                            var s = Yo(this.el),
                                n = Vo(this.el),
                                o = this.axis[t].scrollbar,
                                r = "y" === t ? e.pageY : e.pageX;
                            (this.axis[t].dragOffset = r - ((null === (i = o.rect) || void 0 === i ? void 0 : i[this.axis[t].offsetAttr]) || 0)),
                                (this.draggedAxis = t),
                                Ko(this.el, this.classNames.dragging),
                                s.addEventListener("mousemove", this.drag, !0),
                                s.addEventListener("mouseup", this.onEndDrag, !0),
                                null === this.removePreventClickId
                                    ? (s.addEventListener("click", this.preventClick, !0), s.addEventListener("dblclick", this.preventClick, !0))
                                    : (n.clearTimeout(this.removePreventClickId), (this.removePreventClickId = null));
                        }),
                        (e.prototype.onTrackClick = function (e, t) {
                            var i,
                                s,
                                n,
                                o,
                                r = this;
                            void 0 === t && (t = "y");
                            var a = this.axis[t];
                            if (this.options.clickOnTrack && a.scrollbar.el && this.contentWrapperEl) {
                                e.preventDefault();
                                var l = Vo(this.el);
                                this.axis[t].scrollbar.rect = a.scrollbar.el.getBoundingClientRect();
                                var c = null !== (s = null === (i = this.axis[t].scrollbar.rect) || void 0 === i ? void 0 : i[this.axis[t].offsetAttr]) && void 0 !== s ? s : 0,
                                    d = parseInt(null !== (o = null === (n = this.elStyles) || void 0 === n ? void 0 : n[this.axis[t].sizeAttr]) && void 0 !== o ? o : "0px", 10),
                                    h = this.contentWrapperEl[this.axis[t].scrollOffsetAttr],
                                    u = ("y" === t ? this.mouseY - c : this.mouseX - c) < 0 ? -1 : 1,
                                    p = -1 === u ? h - d : h + d,
                                    f = function () {
                                        r.contentWrapperEl &&
                                            (-1 === u
                                                ? h > p && ((h -= 40), (r.contentWrapperEl[r.axis[t].scrollOffsetAttr] = h), l.requestAnimationFrame(f))
                                                : h < p && ((h += 40), (r.contentWrapperEl[r.axis[t].scrollOffsetAttr] = h), l.requestAnimationFrame(f)));
                                    };
                                f();
                            }
                        }),
                        (e.prototype.getContentElement = function () {
                            return this.contentEl;
                        }),
                        (e.prototype.getScrollElement = function () {
                            return this.contentWrapperEl;
                        }),
                        (e.prototype.removeListeners = function () {
                            var e = Vo(this.el);
                            this.el.removeEventListener("mouseenter", this.onMouseEnter),
                                this.el.removeEventListener("pointerdown", this.onPointerEvent, !0),
                                this.el.removeEventListener("mousemove", this.onMouseMove),
                                this.el.removeEventListener("mouseleave", this.onMouseLeave),
                                this.contentWrapperEl && this.contentWrapperEl.removeEventListener("scroll", this.onScroll),
                                e.removeEventListener("resize", this.onWindowResize),
                                this.mutationObserver && this.mutationObserver.disconnect(),
                                this.resizeObserver && this.resizeObserver.disconnect(),
                                this.onMouseMove.cancel(),
                                this.onWindowResize.cancel(),
                                this.onStopScrolling.cancel(),
                                this.onMouseEntered.cancel();
                        }),
                        (e.prototype.unMount = function () {
                            this.removeListeners();
                        }),
                        (e.prototype.isWithinBounds = function (e) {
                            return this.mouseX >= e.left && this.mouseX <= e.left + e.width && this.mouseY >= e.top && this.mouseY <= e.top + e.height;
                        }),
                        (e.prototype.findChild = function (e, t) {
                            var i = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector;
                            return Array.prototype.filter.call(e.children, function (e) {
                                return i.call(e, t);
                            })[0];
                        }),
                        (e.rtlHelpers = null),
                        (e.defaultOptions = {
                            forceVisible: !1,
                            clickOnTrack: !0,
                            scrollbarMinSize: 25,
                            scrollbarMaxSize: 0,
                            ariaLabel: "scrollable content",
                            classNames: {
                                contentEl: "simplebar-content",
                                contentWrapper: "simplebar-content-wrapper",
                                offset: "simplebar-offset",
                                mask: "simplebar-mask",
                                wrapper: "simplebar-wrapper",
                                placeholder: "simplebar-placeholder",
                                scrollbar: "simplebar-scrollbar",
                                track: "simplebar-track",
                                heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
                                heightAutoObserverEl: "simplebar-height-auto-observer",
                                visible: "simplebar-visible",
                                horizontal: "simplebar-horizontal",
                                vertical: "simplebar-vertical",
                                hover: "simplebar-hover",
                                dragging: "simplebar-dragging",
                                scrolling: "simplebar-scrolling",
                                scrollable: "simplebar-scrollable",
                                mouseEntered: "simplebar-mouse-entered",
                            },
                            scrollableNode: null,
                            contentNode: null,
                            autoHide: !0,
                        }),
                        (e.getOptions = Xo),
                        (e.helpers = Qo),
                        e
                    );
                })(),
                Jo = function (e, t) {
                    return (
                        (Jo =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                            }),
                        Jo(e, t)
                    );
                },
                er = Go.helpers,
                tr = er.getOptions,
                ir = er.addClasses,
                sr = (function (e) {
                    function t() {
                        for (var i = [], s = 0; s < arguments.length; s++) i[s] = arguments[s];
                        var n = e.apply(this, i) || this;
                        return t.instances.set(i[0], n), n;
                    }
                    return (
                        (function (e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                            function i() {
                                this.constructor = e;
                            }
                            Jo(e, t), (e.prototype = null === t ? Object.create(t) : ((i.prototype = t.prototype), new i()));
                        })(t, e),
                        (t.initDOMLoadedElements = function () {
                            document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements),
                                window.removeEventListener("load", this.initDOMLoadedElements),
                                Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"), function (e) {
                                    "init" === e.getAttribute("data-simplebar") || t.instances.has(e) || new t(e, tr(e.attributes));
                                });
                        }),
                        (t.removeObserver = function () {
                            var e;
                            null === (e = t.globalObserver) || void 0 === e || e.disconnect();
                        }),
                        (t.prototype.initDOM = function () {
                            var e,
                                t,
                                i,
                                s = this;
                            if (
                                !Array.prototype.filter.call(this.el.children, function (e) {
                                    return e.classList.contains(s.classNames.wrapper);
                                }).length
                            ) {
                                for (
                                    this.wrapperEl = document.createElement("div"),
                                        this.contentWrapperEl = document.createElement("div"),
                                        this.offsetEl = document.createElement("div"),
                                        this.maskEl = document.createElement("div"),
                                        this.contentEl = document.createElement("div"),
                                        this.placeholderEl = document.createElement("div"),
                                        this.heightAutoObserverWrapperEl = document.createElement("div"),
                                        this.heightAutoObserverEl = document.createElement("div"),
                                        ir(this.wrapperEl, this.classNames.wrapper),
                                        ir(this.contentWrapperEl, this.classNames.contentWrapper),
                                        ir(this.offsetEl, this.classNames.offset),
                                        ir(this.maskEl, this.classNames.mask),
                                        ir(this.contentEl, this.classNames.contentEl),
                                        ir(this.placeholderEl, this.classNames.placeholder),
                                        ir(this.heightAutoObserverWrapperEl, this.classNames.heightAutoObserverWrapperEl),
                                        ir(this.heightAutoObserverEl, this.classNames.heightAutoObserverEl);
                                    this.el.firstChild;

                                )
                                    this.contentEl.appendChild(this.el.firstChild);
                                this.contentWrapperEl.appendChild(this.contentEl),
                                    this.offsetEl.appendChild(this.contentWrapperEl),
                                    this.maskEl.appendChild(this.offsetEl),
                                    this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl),
                                    this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),
                                    this.wrapperEl.appendChild(this.maskEl),
                                    this.wrapperEl.appendChild(this.placeholderEl),
                                    this.el.appendChild(this.wrapperEl),
                                    null === (e = this.contentWrapperEl) || void 0 === e || e.setAttribute("tabindex", "0"),
                                    null === (t = this.contentWrapperEl) || void 0 === t || t.setAttribute("role", "region"),
                                    null === (i = this.contentWrapperEl) || void 0 === i || i.setAttribute("aria-label", this.options.ariaLabel);
                            }
                            if (!this.axis.x.track.el || !this.axis.y.track.el) {
                                var n = document.createElement("div"),
                                    o = document.createElement("div");
                                ir(n, this.classNames.track),
                                    ir(o, this.classNames.scrollbar),
                                    n.appendChild(o),
                                    (this.axis.x.track.el = n.cloneNode(!0)),
                                    ir(this.axis.x.track.el, this.classNames.horizontal),
                                    (this.axis.y.track.el = n.cloneNode(!0)),
                                    ir(this.axis.y.track.el, this.classNames.vertical),
                                    this.el.appendChild(this.axis.x.track.el),
                                    this.el.appendChild(this.axis.y.track.el);
                            }
                            Go.prototype.initDOM.call(this), this.el.setAttribute("data-simplebar", "init");
                        }),
                        (t.prototype.unMount = function () {
                            Go.prototype.unMount.call(this), t.instances.delete(this.el);
                        }),
                        (t.initHtmlApi = function () {
                            (this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this)),
                                "undefined" != typeof MutationObserver && ((this.globalObserver = new MutationObserver(t.handleMutations)), this.globalObserver.observe(document, { childList: !0, subtree: !0 })),
                                "complete" === document.readyState || ("loading" !== document.readyState && !document.documentElement.doScroll)
                                    ? window.setTimeout(this.initDOMLoadedElements)
                                    : (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.addEventListener("load", this.initDOMLoadedElements));
                        }),
                        (t.handleMutations = function (e) {
                            e.forEach(function (e) {
                                e.addedNodes.forEach(function (e) {
                                    1 === e.nodeType &&
                                        (e.hasAttribute("data-simplebar")
                                            ? !t.instances.has(e) && document.documentElement.contains(e) && new t(e, tr(e.attributes))
                                            : e.querySelectorAll("[data-simplebar]").forEach(function (e) {
                                                  "init" !== e.getAttribute("data-simplebar") && !t.instances.has(e) && document.documentElement.contains(e) && new t(e, tr(e.attributes));
                                              }));
                                }),
                                    e.removedNodes.forEach(function (e) {
                                        1 === e.nodeType &&
                                            ("init" === e.getAttribute("data-simplebar")
                                                ? t.instances.has(e) && !document.documentElement.contains(e) && t.instances.get(e).unMount()
                                                : Array.prototype.forEach.call(e.querySelectorAll('[data-simplebar="init"]'), function (e) {
                                                      t.instances.has(e) && !document.documentElement.contains(e) && t.instances.get(e).unMount();
                                                  }));
                                    });
                            });
                        }),
                        (t.instances = new WeakMap()),
                        t
                    );
                })(Go);
            lo && sr.initHtmlApi();
            let nr,
                or = !1;
            class rr {
                static run(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = {
                            "bs-tooltip": () => this.bsTooltip(),
                            "bs-popover": () => this.bsPopover(),
                            "cb-toggle-class": () => this.cbToggleClass(),
                            "cb-year-copy": () => this.cbYearCopy(),
                            "cb-ripple": () => this.cbRipple(),
                            "cb-print": () => this.cbPrint(),
                            "cb-table-tools-sections": () => this.cbTableToolsSections(),
                            "cb-table-tools-checkable": () => this.cbTableToolsCheckable(),
                            "js-ckeditor": () => this.jsCkeditor(),
                            "js-ckeditor5": () => this.jsCkeditor5(),
                            "js-simplemde": () => this.jsSimpleMDE(),
                            "js-highlightjs": () => this.jsHighlightjs(),
                            "js-flatpickr": () => this.jsFlatpickr(),
                            "jq-appear": () => this.jqAppear(),
                            "jq-magnific-popup": () => this.jqMagnific(),
                            "jq-slick": () => this.jqSlick(),
                            "jq-datepicker": () => this.jqDatepicker(),
                            "jq-masked-inputs": () => this.jqMaskedInputs(),
                            "jq-select2": () => this.jqSelect2(),
                            "jq-notify": (e) => this.jqNotify(e),
                            "jq-easy-pie-chart": () => this.jqEasyPieChart(),
                            "jq-maxlength": () => this.jqMaxlength(),
                            "jq-rangeslider": () => this.jqRangeslider(),
                            "jq-pw-strength": () => this.jqPwStrength(),
                            "jq-sparkline": () => this.jqSparkline(),
                            "jq-validation": () => this.jqValidation(),
                        };
                    if (e instanceof Array) for (let s in e) i[e[s]] && i[e[s]](t);
                    else i[e] && i[e](t);
                }
                static bsTooltip() {
                    let e = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]:not(.js-bs-tooltip-enabled), .js-bs-tooltip:not(.js-bs-tooltip-enabled)'));
                    window.helperBsTooltips = e.map(
                        (e) => (
                            e.classList.add("js-bs-tooltip-enabled"), new bootstrap.Tooltip(e, { container: e.dataset.bsContainer || "#page-container", animation: !(!e.dataset.bsAnimation || "true" != e.dataset.bsAnimation.toLowerCase()) })
                        )
                    );
                }
                static bsPopover() {
                    let e = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]:not(.js-bs-popover-enabled), .js-bs-popover:not(.js-bs-popover-enabled)'));
                    window.helperBsPopovers = e.map(
                        (e) => (
                            e.classList.add("js-bs-popover-enabled"),
                            new bootstrap.Popover(e, {
                                container: e.dataset.bsContainer || "#page-container",
                                animation: !(!e.dataset.bsAnimation || "true" != e.dataset.bsAnimation.toLowerCase()),
                                trigger: e.dataset.bsTrigger || "hover focus",
                            })
                        )
                    );
                }
                static cbToggleClass() {
                    document.querySelectorAll('[data-toggle="class-toggle"]:not(.js-class-toggle-enabled), .js-class-toggle:not(.js-class-toggle-enabled)').forEach((e) => {
                        e.addEventListener("click", () => {
                            e.classList.add("js-class-toggle-enabled");
                            let t = !!e.dataset.class && e.dataset.class.split(" ");
                            document.querySelectorAll(e.dataset.target).forEach((e) => {
                                t &&
                                    t.forEach((t) => {
                                        e.classList.toggle(t);
                                    });
                            });
                        });
                    });
                }
                static cbYearCopy() {
                    document.querySelectorAll('[data-toggle="year-copy"]:not(.js-year-copy-enabled)').forEach((e) => {
                        let t = new Date().getFullYear(),
                            i = e.textContent || t;
                        e.classList.add("js-year-copy-enabled"), (e.textContent = parseInt(i) >= t ? t : i + "-" + t.toString().substr(2, 2));
                    });
                }
                static cbRipple() {
                    document.querySelectorAll('[data-toggle="click-ripple"]:not(.js-click-ripple-enabled)').forEach((e) => {
                        e.classList.add("js-click-ripple-enabled"),
                            (e.style.overflow = "hidden"),
                            (e.style.position = "relative"),
                            (e.style.zIndex = 1),
                            e.addEventListener("click", (t) => {
                                let i,
                                    s,
                                    n,
                                    o = "click-ripple",
                                    r = e.querySelector("." + o);
                                if (r) r.classList.remove("animate");
                                else {
                                    let t = document.createElement("span");
                                    t.classList.add(o), e.insertBefore(t, e.firstChild);
                                }
                                (r = e.querySelector("." + o)),
                                    ("0px" !== getComputedStyle(r).height && "0px" !== getComputedStyle(r).width) || ((i = Math.max(e.offsetWidth, e.offsetHeight)), (r.style.height = i + "px"), (r.style.width = i + "px")),
                                    (s = t.pageX - (e.getBoundingClientRect().left + window.scrollX) - parseFloat(getComputedStyle(r).width.replace("px", "")) / 2),
                                    (n = t.pageY - (e.getBoundingClientRect().top + window.scrollY) - parseFloat(getComputedStyle(r).height.replace("px", "")) / 2),
                                    (r.style.top = n + "px"),
                                    (r.style.left = s + "px"),
                                    r.classList.add("animate");
                            });
                    });
                }
                static cbPrint() {
                    let e = document.getElementById("page-container"),
                        t = e.className;
                    console.log(t), (e.classList = ""), window.print(), (e.classList = t);
                }
                static cbTableToolsSections() {
                    document.querySelectorAll(".js-table-sections:not(.js-table-sections-enabled)").forEach((e) => {
                        e.classList.add("js-table-sections-enabled"),
                            e.querySelectorAll(".js-table-sections-header > tr").forEach((t) => {
                                t.addEventListener("click", (i) => {
                                    if (
                                        "checkbox" !== i.target.type &&
                                        "button" !== i.target.type &&
                                        "a" !== i.target.tagName.toLowerCase() &&
                                        "a" !== i.target.parentNode.nodeName.toLowerCase() &&
                                        "button" !== i.target.parentNode.nodeName.toLowerCase() &&
                                        "label" !== i.target.parentNode.nodeName.toLowerCase() &&
                                        !i.target.parentNode.classList.contains("custom-control")
                                    ) {
                                        let i = t.parentNode,
                                            s = e.querySelectorAll("tbody");
                                        i.classList.contains("show") ||
                                            (s &&
                                                s.forEach((e) => {
                                                    e.classList.remove("show"), e.classList.remove("table-active");
                                                })),
                                            i.classList.toggle("show"),
                                            i.classList.toggle("table-active");
                                    }
                                });
                            });
                    });
                }
                static cbTableToolsCheckable() {
                    document.querySelectorAll(".js-table-checkable:not(.js-table-checkable-enabled)").forEach((e) => {
                        e.classList.add("js-table-checkable-enabled"),
                            e.querySelector("thead input[type=checkbox]").addEventListener("click", (t) => {
                                e.querySelectorAll("tbody input[type=checkbox]").forEach((e) => {
                                    (e.checked = t.currentTarget.checked), this.tableToolscheckRow(e, t.currentTarget.checked);
                                });
                            }),
                            e.querySelectorAll("tbody input[type=checkbox], tbody input + label").forEach((t) => {
                                t.addEventListener("click", (i) => {
                                    let s = e.querySelector("thead input[type=checkbox]");
                                    t.checked ? e.querySelectorAll("tbody input[type=checkbox]:checked").length === e.querySelectorAll("tbody input[type=checkbox]").length && (s.checked = !0) : (s.checked = !1),
                                        this.tableToolscheckRow(t, t.checked);
                                });
                            }),
                            e.querySelectorAll("tbody > tr").forEach((t) => {
                                t.addEventListener("click", (t) => {
                                    if (
                                        "checkbox" !== t.target.type &&
                                        "button" !== t.target.type &&
                                        "a" !== t.target.tagName.toLowerCase() &&
                                        "a" !== t.target.parentNode.nodeName.toLowerCase() &&
                                        "button" !== t.target.parentNode.nodeName.toLowerCase() &&
                                        "label" !== t.target.parentNode.nodeName.toLowerCase() &&
                                        !t.target.parentNode.classList.contains("custom-control")
                                    ) {
                                        let i = e.querySelector("thead input[type=checkbox]"),
                                            s = t.currentTarget.querySelector("input[type=checkbox]");
                                        (s.checked = !s.checked),
                                            this.tableToolscheckRow(s, s.checked),
                                            s.checked ? e.querySelectorAll("tbody input[type=checkbox]:checked").length === e.querySelectorAll("tbody input[type=checkbox]").length && (i.checked = !0) : (i.checked = !1);
                                    }
                                });
                            });
                    });
                }
                static tableToolscheckRow(e, t) {
                    t ? e.closest("tr").classList.add("table-active") : e.closest("tr").classList.remove("table-active");
                }
                static jsCkeditor() {
                    let e = document.querySelector("#js-ckeditor-inline:not(.js-ckeditor-inline-enabled)"),
                        t = document.querySelector("#js-ckeditor:not(.js-ckeditor-enabled)");
                    e && (e.setAttribute("contenteditable", "true"), CKEDITOR.inline("js-ckeditor-inline"), e.classList.add("js-ckeditor-inline-enabled")), t && (CKEDITOR.replace("js-ckeditor"), t.classList.add("js-ckeditor-enabled"));
                }
                static jsCkeditor5() {
                    let e = document.querySelector("#js-ckeditor5-inline"),
                        t = document.querySelector("#js-ckeditor5-classic");
                    e &&
                        InlineEditor.create(document.querySelector("#js-ckeditor5-inline"))
                            .then((e) => {
                                window.editor = e;
                            })
                            .catch((e) => {
                                console.error("There was a problem initializing the inline editor.", e);
                            }),
                        t &&
                            ClassicEditor.create(document.querySelector("#js-ckeditor5-classic"))
                                .then((e) => {
                                    window.editor = e;
                                })
                                .catch((e) => {
                                    console.error("There was a problem initializing the classic editor.", e);
                                });
                }
                static jsSimpleMDE() {
                    let e = document.querySelectorAll(".js-simplemde");
                    e.forEach((e) => {
                        new SimpleMDE({ element: e, autoDownloadFontAwesome: !1 });
                    }),
                        e && (document.querySelector(".editor-toolbar > a.fa-header").classList.replace("fa-header", "fa-heading"), document.querySelector(".editor-toolbar > a.fa-picture-o").classList.replace("fa-picture-o", "fa-image"));
                }
                static jsHighlightjs() {
                    hljs.isHighlighted || hljs.initHighlighting();
                }
                static jsFlatpickr() {
                    document.querySelectorAll(".js-flatpickr:not(.js-flatpickr-enabled)").forEach((e) => {
                        e.classList.add("js-flatpickr-enabled"), flatpickr(e);
                    });
                }
                static jqAppear() {
                    jQuery('[data-toggle="appear"]:not(.js-appear-enabled)').each((e, t) => {
                        let i = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                            s = jQuery(t),
                            n = s.data("class") || "animated fadeIn",
                            o = s.data("offset") || 0,
                            r = i < 992 ? 0 : s.data("timeout") ? s.data("timeout") : 0;
                        s.addClass("js-appear-enabled").appear(
                            () => {
                                setTimeout(() => {
                                    s.removeClass("invisible").addClass(n);
                                }, r);
                            },
                            { accY: o }
                        );
                    });
                }
                static jqMagnific() {
                    jQuery(".js-gallery:not(.js-gallery-enabled)").each((e, t) => {
                        jQuery(t)
                            .addClass("js-gallery-enabled")
                            .magnificPopup({ delegate: "a.img-lightbox", type: "image", gallery: { enabled: !0 } });
                    });
                }
                static jqSlick() {
                    jQuery(".js-slider:not(.js-slider-enabled)").each((e, t) => {
                        let i = jQuery(t);
                        i.addClass("js-slider-enabled").slick({
                            arrows: i.data("arrows") || !1,
                            dots: i.data("dots") || !1,
                            slidesToShow: i.data("slides-to-show") || 1,
                            centerMode: i.data("center-mode") || !1,
                            autoplay: i.data("autoplay") || !1,
                            autoplaySpeed: i.data("autoplay-speed") || 3e3,
                            infinite: void 0 === i.data("infinite") || i.data("infinite"),
                        });
                    });
                }
                static jqDatepicker() {
                    jQuery(".js-datepicker:not(.js-datepicker-enabled)")
                        .add(".input-daterange:not(.js-datepicker-enabled)")
                        .each((e, t) => {
                            let i = jQuery(t);
                            i.addClass("js-datepicker-enabled").datepicker({
                                weekStart: i.data("week-start") || 0,
                                autoclose: i.data("autoclose") || !1,
                                todayHighlight: i.data("today-highlight") || !1,
                                startDate: i.data("start-date") || !1,
                                container: i.data("container") || "#page-container",
                                orientation: "bottom",
                            });
                        });
                }
                static jqMaskedInputs() {
                    jQuery(".js-masked-date:not(.js-masked-enabled)").mask("99/99/9999"),
                        jQuery(".js-masked-date-dash:not(.js-masked-enabled)").mask("99-99-9999"),
                        jQuery(".js-masked-phone:not(.js-masked-enabled)").mask("(999) 999-9999"),
                        jQuery(".js-masked-phone-ext:not(.js-masked-enabled)").mask("(999) 999-9999? x99999"),
                        jQuery(".js-masked-taxid:not(.js-masked-enabled)").mask("99-9999999"),
                        jQuery(".js-masked-ssn:not(.js-masked-enabled)").mask("999-99-9999"),
                        jQuery(".js-masked-pkey:not(.js-masked-enabled)").mask("a*-999-a999"),
                        jQuery(".js-masked-time:not(.js-masked-enabled)").mask("99:99"),
                        jQuery(".js-masked-date")
                            .add(".js-masked-date-dash")
                            .add(".js-masked-phone")
                            .add(".js-masked-phone-ext")
                            .add(".js-masked-taxid")
                            .add(".js-masked-ssn")
                            .add(".js-masked-pkey")
                            .add(".js-masked-time")
                            .addClass("js-masked-enabled");
                }
                static jqSelect2() {
                    jQuery(".js-select2:not(.js-select2-enabled)").each((e, t) => {
                        let i = jQuery(t);
                        i.addClass("js-select2-enabled").select2({ placeholder: i.data("placeholder") || !1, dropdownParent: document.querySelector(i.data("container") || "#page-container") });
                    });
                }
                static jqNotify() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    jQuery.isEmptyObject(e)
                        ? jQuery(".js-notify:not(.js-notify-enabled)").each((e, t) => {
                              jQuery(t)
                                  .addClass("js-notify-enabled")
                                  .on("click.pixelcave.helpers", (e) => {
                                      let t = jQuery(e.currentTarget);
                                      jQuery.notify(
                                          { icon: t.data("icon") || "", message: t.data("message"), url: t.data("url") || "" },
                                          {
                                              element: "body",
                                              type: t.data("type") || "info",
                                              placement: { from: t.data("from") || "top", align: t.data("align") || "right" },
                                              allow_dismiss: !0,
                                              newest_on_top: !0,
                                              showProgressbar: !1,
                                              offset: 20,
                                              spacing: 10,
                                              z_index: 1033,
                                              delay: 5e3,
                                              timer: 1e3,
                                              animate: { enter: "animated fadeIn", exit: "animated fadeOutDown" },
                                              template:
                                                  '<div data-notify="container" class="col-11 col-sm-4 alert alert-{0} alert-dismissible" role="alert">\n  <p class="mb-0">\n    <span data-notify="icon"></span>\n    <span data-notify="title">{1}</span>\n    <span data-notify="message">{2}</span>\n  </p>\n  <div class="progress" data-notify="progressbar">\n    <div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>\n  </div>\n  <a href="{3}" target="{4}" data-notify="url"></a>\n  <a class="p-2 m-1 text-dark" href="javascript:void(0)" aria-label="Close" data-notify="dismiss">\n    <i class="fa fa-times"></i>\n  </a>\n</div>',
                                          }
                                      );
                                  });
                          })
                        : jQuery.notify(
                              { icon: e.icon || "", message: e.message, url: e.url || "" },
                              {
                                  element: e.element || "body",
                                  type: e.type || "info",
                                  placement: { from: e.from || "top", align: e.align || "right" },
                                  allow_dismiss: !1 !== e.allow_dismiss,
                                  newest_on_top: !1 !== e.newest_on_top,
                                  showProgressbar: !!e.show_progress_bar,
                                  offset: e.offset || 20,
                                  spacing: e.spacing || 10,
                                  z_index: e.z_index || 1033,
                                  delay: e.delay || 5e3,
                                  timer: e.timer || 1e3,
                                  animate: { enter: e.animate_enter || "animated fadeIn", exit: e.animate_exit || "animated fadeOutDown" },
                                  template:
                                      '<div data-notify="container" class="col-11 col-sm-4 alert alert-{0} alert-dismissible" role="alert">\n  <p class="mb-0">\n    <span data-notify="icon"></span>\n    <span data-notify="title">{1}</span>\n    <span data-notify="message">{2}</span>\n  </p>\n  <div class="progress" data-notify="progressbar">\n    <div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>\n  </div>\n  <a href="{3}" target="{4}" data-notify="url"></a>\n  <a class="p-2 m-1 text-dark" href="javascript:void(0)" aria-label="Close" data-notify="dismiss">\n    <i class="fa fa-times"></i>\n  </a>\n</div>',
                              }
                          );
                }
                static jqEasyPieChart() {
                    jQuery(".js-pie-chart:not(.js-pie-chart-enabled)").each((e, t) => {
                        let i = jQuery(t);
                        i.addClass("js-pie-chart-enabled").easyPieChart({
                            barColor: i.data("bar-color") || "#777777",
                            trackColor: i.data("track-color") || "#eeeeee",
                            lineWidth: i.data("line-width") || 3,
                            size: i.data("size") || "80",
                            animate: i.data("animate") || 750,
                            scaleColor: i.data("scale-color") || !1,
                        });
                    });
                }
                static jqMaxlength() {
                    jQuery(".js-maxlength:not(.js-maxlength-enabled)").each((e, t) => {
                        let i = jQuery(t);
                        i.addClass("js-maxlength-enabled").maxlength({
                            alwaysShow: !!i.data("always-show"),
                            threshold: i.data("threshold") || 10,
                            warningClass: i.data("warning-class") || "badge bg-warning",
                            limitReachedClass: i.data("limit-reached-class") || "badge bg-danger",
                            placement: i.data("placement") || "bottom",
                            preText: i.data("pre-text") || "",
                            separator: i.data("separator") || "/",
                            postText: i.data("post-text") || "",
                        });
                    });
                }
                static jqRangeslider() {
                    jQuery(".js-rangeslider:not(.js-rangeslider-enabled)").each((e, t) => {
                        let i = jQuery(t);
                        jQuery(t)
                            .addClass("js-rangeslider-enabled")
                            .ionRangeSlider({ input_values_separator: ";", skin: i.data("skin") || "round" });
                    });
                }
                static jqPwStrength() {
                    jQuery(".js-pw-strength:not(.js-pw-strength-enabled)").each((e, t) => {
                        let i = jQuery(t),
                            s = i.parents(".js-pw-strength-container"),
                            n = jQuery(".js-pw-strength-progress", s),
                            o = jQuery(".js-pw-strength-feedback", s);
                        i.addClass("js-pw-strength-enabled").pwstrength({ ui: { container: s, viewports: { progress: n, verdict: o } } });
                    });
                }
                static jqSparkline() {
                    let e = this;
                    jQuery(".js-sparkline:not(.js-sparkline-enabled)").each((t, i) => {
                        let s = jQuery(i),
                            n = s.data("type"),
                            o = {},
                            r = {
                                line: () => {
                                    (o.type = n),
                                        (o.lineWidth = s.data("line-width") || 2),
                                        (o.lineColor = s.data("line-color") || "#0665d0"),
                                        (o.fillColor = s.data("fill-color") || "#0665d0"),
                                        (o.spotColor = s.data("spot-color") || "#495057"),
                                        (o.minSpotColor = s.data("min-spot-color") || "#495057"),
                                        (o.maxSpotColor = s.data("max-spot-color") || "#495057"),
                                        (o.highlightSpotColor = s.data("highlight-spot-color") || "#495057"),
                                        (o.highlightLineColor = s.data("highlight-line-color") || "#495057"),
                                        (o.spotRadius = s.data("spot-radius") || 2),
                                        (o.tooltipFormat = "{{prefix}}{{y}}{{suffix}}");
                                },
                                bar: () => {
                                    (o.type = n), (o.barWidth = s.data("bar-width") || 8), (o.barSpacing = s.data("bar-spacing") || 6), (o.barColor = s.data("bar-color") || "#0665d0"), (o.tooltipFormat = "{{prefix}}{{value}}{{suffix}}");
                                },
                                pie: () => {
                                    (o.type = n), (o.sliceColors = ["#fadb7d", "#faad7d", "#75b0eb", "#abe37d"]), (o.highlightLighten = s.data("highlight-lighten") || 1.1), (o.tooltipFormat = "{{prefix}}{{value}}{{suffix}}");
                                },
                                tristate: () => {
                                    (o.type = n),
                                        (o.barWidth = s.data("bar-width") || 8),
                                        (o.barSpacing = s.data("bar-spacing") || 6),
                                        (o.posBarColor = s.data("pos-bar-color") || "#82b54b"),
                                        (o.negBarColor = s.data("neg-bar-color") || "#e04f1a");
                                },
                            };
                        r[n]
                            ? (r[n](),
                              "line" === n &&
                                  ((s.data("chart-range-min") >= 0 || s.data("chart-range-min")) && (o.chartRangeMin = s.data("chart-range-min")),
                                  (s.data("chart-range-max") >= 0 || s.data("chart-range-max")) && (o.chartRangeMax = s.data("chart-range-max"))),
                              (o.width = s.data("width") || "120px"),
                              (o.height = s.data("height") || "80px"),
                              (o.tooltipPrefix = s.data("tooltip-prefix") ? s.data("tooltip-prefix") + " " : ""),
                              (o.tooltipSuffix = s.data("tooltip-suffix") ? " " + s.data("tooltip-suffix") : ""),
                              "100%" === o.width
                                  ? or ||
                                    ((or = !0),
                                    jQuery(window).on("resize.pixelcave.helpers.sparkline", function (t) {
                                        clearTimeout(nr),
                                            (nr = setTimeout(() => {
                                                e.sparkline();
                                            }, 500));
                                    }))
                                  : jQuery(i).addClass("js-sparkline-enabled"),
                              jQuery(i).sparkline(s.data("points") || [0], o))
                            : console.log("[jQuery Sparkline JS Helper] Please add a correct type (line, bar, pie or tristate) in all your elements with 'js-sparkline' class.");
                    });
                }
                static jqValidation() {
                    jQuery.validator.setDefaults({
                        errorClass: "invalid-feedback animated fadeIn",
                        errorElement: "div",
                        errorPlacement: (e, t) => {
                            jQuery(t).addClass("is-invalid"), jQuery(t).parents("div:not(.input-group)").first().append(e);
                        },
                        highlight: (e) => {
                            jQuery(e).parents("div:not(.input-group)").first().find(".is-invalid").removeClass("is-invalid").addClass("is-invalid");
                        },
                        success: (e) => {
                            jQuery(e).parents("div:not(.input-group)").first().find(".is-invalid").removeClass("is-invalid"), jQuery(e).remove();
                        },
                    }),
                        jQuery.validator.addMethod(
                            "emailWithDot",
                            function (e, t) {
                                return (
                                    this.optional(t) ||
                                    /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i.test(
                                        e
                                    )
                                );
                            },
                            "Please enter a valid email address"
                        );
                }
            }
            (window.bootstrap = t), (window.SimpleBar = sr);
            class ar {
                constructor() {
                    this.onLoad(() => this._uiInit());
                }
                _uiInit() {
                    (this._lHtml = document.documentElement),
                    (this._lBody = document.body),
                    (this._lpageLoader = document.getElementById("page-loader")),
                    (this._lPage = document.getElementById("page-container")),
                    (this._lSidebar = document.getElementById("sidebar")),
                    (this._lSidebarScrollCon = this._lSidebar && this._lSidebar.querySelector(".js-sidebar-scroll")),
                    (this._lSideOverlay = document.getElementById("side-overlay")),
                    (this._lResize = !1),
                    (this._lHeader = document.getElementById("page-header")),
                    (this._lHeaderSearch = document.getElementById("page-header-search")),
                    (this._lHeaderSearchInput = document.getElementById("page-header-search-input")),
                    (this._lHeaderLoader = document.getElementById("page-header-loader")),
                    (this._lMain = document.getElementById("main-container")),
                    (this._lFooter = document.getElementById("page-footer")),
                    (this._lSidebarScroll = !1),
                    (this._lSideOverlayScroll = !1),
                    this._uiHandleTheme(),
                    this._uiHandleDarkMode(),
                    this._uiHandleSidebars(),
                    this._uiHandleHeader(),
                    this._uiHandleNav(),
                    this._uiApiLayout(),
                    this._uiApiBlocks(),
                    this.helpers(["bs-tooltip", "bs-popover", "cb-toggle-class", "cb-year-copy", "cb-ripple"]),
                    this._uiHandlePageLoader();
                }
                
                _uiHandleSidebars() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "init",
                        t = this;
                    (t._lSidebar || t._lSideOverlay) &&
                        ("init" === e
                            ? (t._lPage.classList.add("side-trans-enabled"),
                              window.addEventListener("resize", () => {
                                  clearTimeout(t._lResize),
                                      t._lPage.classList.remove("side-trans-enabled"),
                                      (t._lResize = setTimeout(() => {
                                          t._lPage.classList.add("side-trans-enabled");
                                      }, 500));
                              }),
                              this._uiHandleSidebars("custom-scroll"))
                            : (e = "custom-scroll") &&
                              t._lPage.classList.contains("side-scroll") &&
                              (t._lSidebar && !t._lSidebarScroll && (t._lSidebarScroll = new sr(t._lSidebarScrollCon)), t._lSideOverlay && !t._lSideOverlayScroll && (t._lSideOverlayScroll = new sr(t._lSideOverlay))));
                }
                _uiHandleHeader() {
                    let e = this;
                    e._lPage.classList.contains("page-header-glass") &&
                        e._lPage.classList.contains("page-header-fixed") &&
                        (window.addEventListener("scroll", (t) => {
                            window.scrollY > 60 ? e._lPage.classList.add("page-header-scroll") : e._lPage.classList.remove("page-header-scroll");
                        }),
                        window.dispatchEvent(new CustomEvent("scroll")));
                }
                _uiHandleNav() {
                    let e = document.querySelectorAll('[data-toggle="submenu"]');
                    e &&
                        e.forEach((e) => {
                            e.addEventListener("click", (t) => {
                                t.preventDefault();
                                let i = e.closest(".nav-main");
                                if (!((window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > 991 && i.classList.contains("nav-main-horizontal") && i.classList.contains("nav-main-hover"))) {
                                    let t = e.closest("li");
                                    t.classList.contains("open")
                                        ? (t.classList.remove("open"), e.setAttribute("aria-expanded", "false"))
                                        : (Array.from(e.closest("ul").children).forEach((e) => {
                                              e.classList.remove("open");
                                          }),
                                          t.classList.add("open"),
                                          e.setAttribute("aria-expanded", "true"));
                                }
                                return !1;
                            });
                        });
                }
                _uiHandlePageLoader() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "hide",
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    if ("show" === e)
                        if (this._lpageLoader) t && ((this._lpageLoader.className = ""), this._lpageLoader.classList.add(t)), this._lpageLoader.classList.add("show");
                        else {
                            let e = document.createElement("div");
                            (e.id = "page-loader"), t && e.classList.add(t), e.classList.add("show"), this._lPage.insertBefore(e, this._lPage.firstChild), (this._lpageLoader = document.getElementById("page-loader"));
                        }
                    else "hide" === e && this._lpageLoader && this._lpageLoader.classList.remove("show");
                }
                _uiHandleDarkMode() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "init",
                        t = this;
                    if (
                        ("init" !== e ||
                            t._lPage.classList.contains("dark-mode") ||
                            (t._lPage.classList.contains("sidebar-dark") ? localStorage.setItem("codebaseDefaultsSidebarDark", !0) : localStorage.removeItem("codebaseDefaultsSidebarDark"),
                            t._lPage.classList.contains("page-header-dark") ? localStorage.setItem("codebaseDefaultsPageHeaderDark", !0) : localStorage.removeItem("codebaseDefaultsPageHeaderDark")),
                        t._lPage.classList.contains("remember-theme"))
                    ) {
                        let i = localStorage.getItem("codebaseDarkMode") || !1;
                        "init" === e
                            ? i
                                ? (t._lPage.classList.add("sidebar-dark"), t._lPage.classList.add("page-header-dark"), t._lPage.classList.add("dark-mode"))
                                : "init" === e && t._lPage.classList.remove("dark-mode")
                            : "on" === e
                            ? localStorage.setItem("codebaseDarkMode", !0)
                            : "off" === e && localStorage.removeItem("codebaseDarkMode");
                    } else "init" === e && localStorage.removeItem("codebaseDarkMode");
                }
                _uiHandleTheme() {
                    let e = this,
                        t = document.getElementById("css-theme"),
                        i = !!this._lPage.classList.contains("remember-theme");
                    if (i) {
                        let i = localStorage.getItem("codebaseThemeName") || !1;
                        i && e._uiUpdateTheme(t, i), (t = document.getElementById("css-theme"));
                    } else localStorage.removeItem("codebaseThemeName");
                    document.querySelectorAll('[data-toggle="theme"][data-theme="' + (t ? t.getAttribute("href") : "default") + '"]').forEach((e) => {
                        e.classList.add("active");
                    }),
                        document.querySelectorAll('[data-toggle="theme"]').forEach((s) => {
                            s.addEventListener("click", (n) => {
                                n.preventDefault();
                                let o = s.dataset.theme;
                                document.querySelectorAll('[data-toggle="theme"]').forEach((e) => {
                                    e.classList.remove("active");
                                }),
                                    document.querySelector('[data-toggle="theme"][data-theme="' + o + '"]').classList.add("active"),
                                    e._uiUpdateTheme(t, o),
                                    (t = document.getElementById("css-theme")),
                                    i && localStorage.setItem("codebaseThemeName", o);
                            });
                        });
                }
                _uiUpdateTheme(e, t) {
                    if ("default" === t) e && e.parentNode.removeChild(e);
                    else if (e) e.setAttribute("href", t);
                    else {
                        let e = document.createElement("link");
                        (e.id = "css-theme"), e.setAttribute("rel", "stylesheet"), e.setAttribute("href", t), document.getElementById("css-main").insertAdjacentElement("afterend", e);
                    }
                }
                _uiApiLayout() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "init",
                        t = this,
                        i = {
                            init: () => {
                                let e = document.querySelectorAll('[data-toggle="layout"]');
                                if (
                                    (e &&
                                        e.forEach((e) => {
                                            e.addEventListener("click", (i) => {
                                                t._uiApiLayout(e.dataset.action);
                                            });
                                        }),
                                    t._lPage.classList.contains("enable-page-overlay"))
                                ) {
                                    let e = document.createElement("div");
                                    (e.id = "page-overlay"),
                                        t._lPage.insertBefore(e, t._lPage.firstChild),
                                        document.getElementById("page-overlay").addEventListener("click", (e) => {
                                            t._uiApiLayout("side_overlay_close");
                                        });
                                }
                            },
                            sidebar_pos_toggle: () => {
                                t._lPage.classList.toggle("sidebar-r");
                            },
                            sidebar_pos_left: () => {
                                t._lPage.classList.remove("sidebar-r");
                            },
                            sidebar_pos_right: () => {
                                t._lPage.classList.add("sidebar-r");
                            },
                            sidebar_toggle: () => {
                                window.innerWidth > 991 ? t._lPage.classList.toggle("sidebar-o") : t._lPage.classList.toggle("sidebar-o-xs");
                            },
                            sidebar_open: () => {
                                window.innerWidth > 991 ? t._lPage.classList.add("sidebar-o") : t._lPage.classList.add("sidebar-o-xs");
                            },
                            sidebar_close: () => {
                                window.innerWidth > 991 ? t._lPage.classList.remove("sidebar-o") : t._lPage.classList.remove("sidebar-o-xs");
                            },
                            sidebar_mini_toggle: () => {
                                window.innerWidth > 991 && t._lPage.classList.toggle("sidebar-mini");
                            },
                            sidebar_mini_on: () => {
                                window.innerWidth > 991 && t._lPage.classList.add("sidebar-mini");
                            },
                            sidebar_mini_off: () => {
                                window.innerWidth > 991 && t._lPage.classList.remove("sidebar-mini");
                            },
                            sidebar_style_toggle: () => {
                                t._lPage.classList.contains("sidebar-dark") ? t._uiApiLayout("sidebar_style_light") : t._uiApiLayout("sidebar_style_dark");
                            },
                            sidebar_style_dark: () => {
                                t._lPage.classList.add("sidebar-dark"), localStorage.setItem("codebaseDefaultsSidebarDark", !0);
                            },
                            sidebar_style_light: () => {
                                t._lPage.classList.remove("sidebar-dark"), t._lPage.classList.remove("dark-mode"), localStorage.removeItem("codebaseDefaultsSidebarDark");
                            },
                            side_overlay_toggle: () => {
                                t._lPage.classList.contains("side-overlay-o") ? t._uiApiLayout("side_overlay_close") : t._uiApiLayout("side_overlay_open");
                            },
                            side_overlay_open: () => {
                                document.addEventListener("keydown", (e) => {
                                    ("Esc" !== e.key && "Escape" !== e.key) || t._uiApiLayout("side_overlay_close");
                                }),
                                    t._lPage.classList.add("side-overlay-o");
                            },
                            side_overlay_close: () => {
                                t._lPage.classList.remove("side-overlay-o");
                            },
                            side_overlay_mode_hover_toggle: () => {
                                t._lPage.classList.toggle("side-overlay-hover");
                            },
                            side_overlay_mode_hover_on: () => {
                                t._lPage.classList.add("side-overlay-hover");
                            },
                            side_overlay_mode_hover_off: () => {
                                t._lPage.classList.remove("side-overlay-hover");
                            },
                            header_glass_toggle: () => {
                                t._lPage.classList.contains("page-header-glass") ? t._uiApiLayout("header_glass_off") : t._uiApiLayout("header_glass_on");
                            },
                            header_glass_on: () => {
                                t._lPage.classList.add("page-header-glass"), t._lPage.classList.remove("page-header-modern"), t._uiHandleHeader();
                            },
                            header_glass_off: () => {
                                t._lPage.classList.remove("page-header-glass"), t._uiHandleHeader();
                            },
                            header_modern_toggle: () => {
                                t._lPage.classList.contains("page-header-modern") ? t._uiApiLayout("header_modern_off") : t._uiApiLayout("header_modern_on");
                            },
                            header_modern_on: () => {
                                t._lPage.classList.add("page-header-modern"), t._lPage.classList.remove("page-header-glass");
                            },
                            header_modern_off: () => {
                                t._lPage.classList.remove("page-header-modern");
                            },
                            header_mode_toggle: () => {
                                t._lPage.classList.toggle("page-header-fixed");
                            },
                            header_mode_static: () => {
                                t._lPage.classList.remove("page-header-fixed");
                            },
                            header_mode_fixed: () => {
                                t._lPage.classList.add("page-header-fixed");
                            },
                            header_style_toggle: () => {
                                t._lPage.classList.contains("page-header-dark") ? t._uiApiLayout("header_style_light") : t._uiApiLayout("header_style_dark");
                            },
                            header_style_dark: () => {
                                t._lPage.classList.add("page-header-dark"), localStorage.setItem("codebaseDefaultsPageHeaderDark", !0);
                            },
                            header_style_light: () => {
                                t._lPage.classList.remove("page-header-dark"), t._lPage.classList.remove("dark-mode"), localStorage.removeItem("codebaseDefaultsPageHeaderDark");
                            },
                            header_search_on: () => {
                                t._lHeaderSearch.classList.add("show"),
                                    t._lHeaderSearchInput.focus(),
                                    document.addEventListener("keydown", (e) => {
                                        ("Esc" !== e.key && "Escape" !== e.key) || t._uiApiLayout("header_search_off");
                                    });
                            },
                            header_search_off: () => {
                                t._lHeaderSearch.classList.remove("show"), t._lHeaderSearchInput.blur();
                            },
                            header_loader_on: () => {
                                t._lHeaderLoader.classList.add("show");
                            },
                            header_loader_off: () => {
                                t._lHeaderLoader.classList.remove("show");
                            },
                            dark_mode_toggle: () => {
                                t._lPage.classList.contains("dark-mode") ? t._uiApiLayout("dark_mode_off") : t._uiApiLayout("dark_mode_on");
                            },
                            dark_mode_on: () => {
                                t._lPage.classList.add("sidebar-dark"), t._lPage.classList.add("page-header-dark"), t._lPage.classList.add("dark-mode"), this._uiHandleDarkMode("on");
                            },
                            dark_mode_off: () => {
                                localStorage.getItem("codebaseDefaultsSidebarDark") || t._lPage.classList.remove("sidebar-dark"),
                                    localStorage.getItem("codebaseDefaultsPageHeaderDark") || t._lPage.classList.remove("page-header-dark"),
                                    t._lPage.classList.remove("dark-mode"),
                                    this._uiHandleDarkMode("off");
                            },
                            content_layout_toggle: () => {
                                t._lPage.classList.contains("main-content-boxed")
                                    ? t._uiApiLayout("content_layout_narrow")
                                    : t._lPage.classList.contains("main-content-narrow")
                                    ? t._uiApiLayout("content_layout_full_width")
                                    : t._uiApiLayout("content_layout_boxed");
                            },
                            content_layout_boxed: () => {
                                t._lPage.classList.remove("main-content-narrow"), t._lPage.classList.add("main-content-boxed");
                            },
                            content_layout_narrow: () => {
                                t._lPage.classList.remove("main-content-boxed"), t._lPage.classList.add("main-content-narrow");
                            },
                            content_layout_full_width: () => {
                                t._lPage.classList.remove("main-content-boxed"), t._lPage.classList.remove("main-content-narrow");
                            },
                        };
                    i[e] && i[e]();
                }
                _uiApiBlocks() {
                    let e,
                        t,
                        i,
                        s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "init",
                        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        o = "si-size-fullscreen",
                        r = "si-size-actual",
                        a = "si-arrow-up",
                        l = "si-arrow-down",
                        c = {
                            init: () => {
                                document.querySelectorAll('[data-toggle="block-option"][data-action="fullscreen_toggle"]').forEach((e) => {
                                    e.innerHTML = '<i class="si ' + (e.closest(".block").classList.contains("block-mode-fullscreen") ? r : o) + '"></i>';
                                }),
                                    document.querySelectorAll('[data-toggle="block-option"][data-action="content_toggle"]').forEach((e) => {
                                        e.innerHTML = '<i class="si ' + (e.closest(".block").classList.contains("block-mode-hidden") ? l : a) + '"></i>';
                                    }),
                                    document.querySelectorAll('[data-toggle="block-option"]').forEach((e) => {
                                        e.addEventListener("click", (t) => {
                                            this._uiApiBlocks(e.dataset.action, e.closest(".block"));
                                        });
                                    });
                            },
                            fullscreen_toggle: () => {
                                e.classList.remove("block-mode-pinned"),
                                    e.classList.toggle("block-mode-fullscreen"),
                                    t && (e.classList.contains("block-mode-fullscreen") ? t && t.querySelector("i").classList.replace(o, r) : t && t.querySelector("i").classList.replace(r, o));
                            },
                            fullscreen_on: () => {
                                e.classList.remove("block-mode-pinned"), e.classList.add("block-mode-fullscreen"), t && t.querySelector("i").classList.replace(o, r);
                            },
                            fullscreen_off: () => {
                                e.classList.remove("block-mode-fullscreen"), t && t.querySelector("i").classList.replace(r, o);
                            },
                            content_toggle: () => {
                                e.classList.toggle("block-mode-hidden"), i && (e.classList.contains("block-mode-hidden") ? i.querySelector("i").classList.replace(a, l) : i.querySelector("i").classList.replace(l, a));
                            },
                            content_hide: () => {
                                e.classList.add("block-mode-hidden"), i && i.querySelector("i").classList.replace(a, l);
                            },
                            content_show: () => {
                                e.classList.remove("block-mode-hidden"), i && i.querySelector("i").classList.replace(l, a);
                            },
                            state_toggle: () => {
                                e.classList.toggle("block-mode-loading"),
                                    e.querySelector('[data-toggle="block-option"][data-action="state_toggle"][data-action-mode="demo"]') &&
                                        setTimeout(() => {
                                            e.classList.remove("block-mode-loading");
                                        }, 2e3);
                            },
                            state_loading: () => {
                                e.classList.add("block-mode-loading");
                            },
                            state_normal: () => {
                                e.classList.remove("block-mode-loading");
                            },
                            pinned_toggle: () => {
                                e.classList.remove("block-mode-fullscreen"), e.classList.toggle("block-mode-pinned");
                            },
                            pinned_on: () => {
                                e.classList.remove("block-mode-fullscreen"), e.classList.add("block-mode-pinned");
                            },
                            pinned_off: () => {
                                e.classList.remove("block-mode-pinned");
                            },
                            close: () => {
                                e.classList.add("d-none");
                            },
                            open: () => {
                                e.classList.remove("d-none");
                            },
                        };
                    "init" === s
                        ? c[s]()
                        : ((e = n instanceof Element ? n : document.querySelector("".concat(n))),
                          e && ((t = e.querySelector('[data-toggle="block-option"][data-action="fullscreen_toggle"]')), (i = e.querySelector('[data-toggle="block-option"][data-action="content_toggle"]')), c[s] && c[s]()));
                }
                onLoad(e) {
                    "loading" != document.readyState ? e() : document.addEventListener("DOMContentLoaded", e);
                }
                init() {
                    this._uiInit();
                }
                layout(e) {
                    this._uiApiLayout(e);
                }
                block(e, t) {
                    this._uiApiBlocks(e, t);
                }
                loader(e, t) {
                    this._uiHandlePageLoader(e, t);
                }
                helpers(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    rr.run(e, t);
                }
                helpersOnLoad(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.onLoad(() => rr.run(e, t));
                }
            }
            window.Codebase = new (class extends ar {
                constructor() {
                    super();
                }
            })();
        })();
})();

