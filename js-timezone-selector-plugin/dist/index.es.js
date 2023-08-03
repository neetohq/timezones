var n$1, l$1, u$1, i$1, o$1, r$1, f$1, c$1 = {}, s$1 = [], a$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, h$1 = Array.isArray;
function v$1(n2, l2) {
  for (var u2 in l2)
    n2[u2] = l2[u2];
  return n2;
}
function p$1(n2) {
  var l2 = n2.parentNode;
  l2 && l2.removeChild(n2);
}
function y(l2, u2, t2) {
  var i2, o2, r2, f2 = {};
  for (r2 in u2)
    "key" == r2 ? i2 = u2[r2] : "ref" == r2 ? o2 = u2[r2] : f2[r2] = u2[r2];
  if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n$1.call(arguments, 2) : t2), "function" == typeof l2 && null != l2.defaultProps)
    for (r2 in l2.defaultProps)
      void 0 === f2[r2] && (f2[r2] = l2.defaultProps[r2]);
  return d$1(l2, f2, i2, o2, null);
}
function d$1(n2, t2, i2, o2, r2) {
  var f2 = { type: n2, props: t2, key: i2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r2 ? ++u$1 : r2 };
  return null == r2 && null != l$1.vnode && l$1.vnode(f2), f2;
}
function k$1(n2) {
  return n2.children;
}
function b$1(n2, l2) {
  this.props = n2, this.context = l2;
}
function g$1(n2, l2) {
  if (null == l2)
    return n2.__ ? g$1(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++)
    if (null != (u2 = n2.__k[l2]) && null != u2.__e)
      return u2.__e;
  return "function" == typeof n2.type ? g$1(n2) : null;
}
function m$1(n2) {
  var l2, u2;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
      if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
        n2.__e = n2.__c.base = u2.__e;
        break;
      }
    return m$1(n2);
  }
}
function w$1(n2) {
  (!n2.__d && (n2.__d = true) && i$1.push(n2) && !x.__r++ || o$1 !== l$1.debounceRendering) && ((o$1 = l$1.debounceRendering) || r$1)(x);
}
function x() {
  var n2, l2, u2, t2, o2, r2, e2, c2, s2;
  for (i$1.sort(f$1); n2 = i$1.shift(); )
    n2.__d && (l2 = i$1.length, t2 = void 0, o2 = void 0, r2 = void 0, c2 = (e2 = (u2 = n2).__v).__e, (s2 = u2.__P) && (t2 = [], o2 = [], (r2 = v$1({}, e2)).__v = e2.__v + 1, L(s2, e2, r2, u2.__n, void 0 !== s2.ownerSVGElement, null != e2.__h ? [c2] : null, t2, null == c2 ? g$1(e2) : c2, e2.__h, o2), M(t2, e2, o2), e2.__e != c2 && m$1(e2)), i$1.length > l2 && i$1.sort(f$1));
  x.__r = 0;
}
function P(n2, l2, u2, t2, i2, o2, r2, f2, e2, a2, v2) {
  var p2, y2, _, b2, g2, m2, w2, x2, P2, S, H2 = 0, I2 = t2 && t2.__k || s$1, T2 = I2.length, j2 = T2, z2 = l2.length;
  for (u2.__k = [], p2 = 0; p2 < z2; p2++)
    null != (b2 = u2.__k[p2] = null == (b2 = l2[p2]) || "boolean" == typeof b2 || "function" == typeof b2 ? null : "string" == typeof b2 || "number" == typeof b2 || "bigint" == typeof b2 ? d$1(null, b2, null, null, b2) : h$1(b2) ? d$1(k$1, { children: b2 }, null, null, null) : b2.__b > 0 ? d$1(b2.type, b2.props, b2.key, b2.ref ? b2.ref : null, b2.__v) : b2) && (b2.__ = u2, b2.__b = u2.__b + 1, -1 === (x2 = A(b2, I2, w2 = p2 + H2, j2)) ? _ = c$1 : (_ = I2[x2] || c$1, I2[x2] = void 0, j2--), L(n2, b2, _, i2, o2, r2, f2, e2, a2, v2), g2 = b2.__e, (y2 = b2.ref) && _.ref != y2 && (_.ref && O(_.ref, null, b2), v2.push(y2, b2.__c || g2, b2)), null != g2 && (null == m2 && (m2 = g2), S = !(P2 = _ === c$1 || null === _.__v) && x2 === w2, P2 ? -1 == x2 && H2-- : x2 !== w2 && (x2 === w2 + 1 ? (H2++, S = true) : x2 > w2 ? j2 > z2 - w2 ? (H2 += x2 - w2, S = true) : H2-- : H2 = x2 < w2 && x2 == w2 - 1 ? x2 - w2 : 0), w2 = p2 + H2, S = S || x2 == p2 && !P2, "function" != typeof b2.type || x2 === w2 && _.__k !== b2.__k ? "function" == typeof b2.type || S ? void 0 !== b2.__d ? (e2 = b2.__d, b2.__d = void 0) : e2 = g2.nextSibling : e2 = $(n2, g2, e2) : e2 = C(b2, e2, n2), "function" == typeof u2.type && (u2.__d = e2)));
  for (u2.__e = m2, p2 = T2; p2--; )
    null != I2[p2] && ("function" == typeof u2.type && null != I2[p2].__e && I2[p2].__e == u2.__d && (u2.__d = I2[p2].__e.nextSibling), q(I2[p2], I2[p2]));
}
function C(n2, l2, u2) {
  for (var t2, i2 = n2.__k, o2 = 0; i2 && o2 < i2.length; o2++)
    (t2 = i2[o2]) && (t2.__ = n2, l2 = "function" == typeof t2.type ? C(t2, l2, u2) : $(u2, t2.__e, l2));
  return l2;
}
function $(n2, l2, u2) {
  return null == u2 || u2.parentNode !== n2 ? n2.insertBefore(l2, null) : l2 == u2 && null != l2.parentNode || n2.insertBefore(l2, u2), l2.nextSibling;
}
function A(n2, l2, u2, t2) {
  var i2 = n2.key, o2 = n2.type, r2 = u2 - 1, f2 = u2 + 1, e2 = l2[u2];
  if (null === e2 || e2 && i2 == e2.key && o2 === e2.type)
    return u2;
  if (t2 > (null != e2 ? 1 : 0))
    for (; r2 >= 0 || f2 < l2.length; ) {
      if (r2 >= 0) {
        if ((e2 = l2[r2]) && i2 == e2.key && o2 === e2.type)
          return r2;
        r2--;
      }
      if (f2 < l2.length) {
        if ((e2 = l2[f2]) && i2 == e2.key && o2 === e2.type)
          return f2;
        f2++;
      }
    }
  return -1;
}
function H(n2, l2, u2, t2, i2) {
  var o2;
  for (o2 in u2)
    "children" === o2 || "key" === o2 || o2 in l2 || T(n2, o2, null, u2[o2], t2);
  for (o2 in l2)
    i2 && "function" != typeof l2[o2] || "children" === o2 || "key" === o2 || "value" === o2 || "checked" === o2 || u2[o2] === l2[o2] || T(n2, o2, l2[o2], u2[o2], t2);
}
function I(n2, l2, u2) {
  "-" === l2[0] ? n2.setProperty(l2, null == u2 ? "" : u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || a$1.test(l2) ? u2 : u2 + "px";
}
function T(n2, l2, u2, t2, i2) {
  var o2;
  n:
    if ("style" === l2)
      if ("string" == typeof u2)
        n2.style.cssText = u2;
      else {
        if ("string" == typeof t2 && (n2.style.cssText = t2 = ""), t2)
          for (l2 in t2)
            u2 && l2 in u2 || I(n2.style, l2, "");
        if (u2)
          for (l2 in u2)
            t2 && u2[l2] === t2[l2] || I(n2.style, l2, u2[l2]);
      }
    else if ("o" === l2[0] && "n" === l2[1])
      o2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, u2 ? t2 || n2.addEventListener(l2, o2 ? z$1 : j$1, o2) : n2.removeEventListener(l2, o2 ? z$1 : j$1, o2);
    else if ("dangerouslySetInnerHTML" !== l2) {
      if (i2)
        l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" !== l2 && "height" !== l2 && "href" !== l2 && "list" !== l2 && "form" !== l2 && "tabIndex" !== l2 && "download" !== l2 && "rowSpan" !== l2 && "colSpan" !== l2 && l2 in n2)
        try {
          n2[l2] = null == u2 ? "" : u2;
          break n;
        } catch (n3) {
        }
      "function" == typeof u2 || (null == u2 || false === u2 && "-" !== l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, u2));
    }
}
function j$1(n2) {
  return this.l[n2.type + false](l$1.event ? l$1.event(n2) : n2);
}
function z$1(n2) {
  return this.l[n2.type + true](l$1.event ? l$1.event(n2) : n2);
}
function L(n2, u2, t2, i2, o2, r2, f2, e2, c2, s2) {
  var a2, p2, y2, d2, _, g2, m2, w2, x2, C2, S, $2, A2, H2, I2, T2 = u2.type;
  if (void 0 !== u2.constructor)
    return null;
  null != t2.__h && (c2 = t2.__h, e2 = u2.__e = t2.__e, u2.__h = null, r2 = [e2]), (a2 = l$1.__b) && a2(u2);
  try {
    n:
      if ("function" == typeof T2) {
        if (w2 = u2.props, x2 = (a2 = T2.contextType) && i2[a2.__c], C2 = a2 ? x2 ? x2.props.value : a2.__ : i2, t2.__c ? m2 = (p2 = u2.__c = t2.__c).__ = p2.__E : ("prototype" in T2 && T2.prototype.render ? u2.__c = p2 = new T2(w2, C2) : (u2.__c = p2 = new b$1(w2, C2), p2.constructor = T2, p2.render = B$1), x2 && x2.sub(p2), p2.props = w2, p2.state || (p2.state = {}), p2.context = C2, p2.__n = i2, y2 = p2.__d = true, p2.__h = [], p2._sb = []), null == p2.__s && (p2.__s = p2.state), null != T2.getDerivedStateFromProps && (p2.__s == p2.state && (p2.__s = v$1({}, p2.__s)), v$1(p2.__s, T2.getDerivedStateFromProps(w2, p2.__s))), d2 = p2.props, _ = p2.state, p2.__v = u2, y2)
          null == T2.getDerivedStateFromProps && null != p2.componentWillMount && p2.componentWillMount(), null != p2.componentDidMount && p2.__h.push(p2.componentDidMount);
        else {
          if (null == T2.getDerivedStateFromProps && w2 !== d2 && null != p2.componentWillReceiveProps && p2.componentWillReceiveProps(w2, C2), !p2.__e && (null != p2.shouldComponentUpdate && false === p2.shouldComponentUpdate(w2, p2.__s, C2) || u2.__v === t2.__v)) {
            for (u2.__v !== t2.__v && (p2.props = w2, p2.state = p2.__s, p2.__d = false), u2.__e = t2.__e, u2.__k = t2.__k, u2.__k.forEach(function(n3) {
              n3 && (n3.__ = u2);
            }), S = 0; S < p2._sb.length; S++)
              p2.__h.push(p2._sb[S]);
            p2._sb = [], p2.__h.length && f2.push(p2);
            break n;
          }
          null != p2.componentWillUpdate && p2.componentWillUpdate(w2, p2.__s, C2), null != p2.componentDidUpdate && p2.__h.push(function() {
            p2.componentDidUpdate(d2, _, g2);
          });
        }
        if (p2.context = C2, p2.props = w2, p2.__P = n2, p2.__e = false, $2 = l$1.__r, A2 = 0, "prototype" in T2 && T2.prototype.render) {
          for (p2.state = p2.__s, p2.__d = false, $2 && $2(u2), a2 = p2.render(p2.props, p2.state, p2.context), H2 = 0; H2 < p2._sb.length; H2++)
            p2.__h.push(p2._sb[H2]);
          p2._sb = [];
        } else
          do {
            p2.__d = false, $2 && $2(u2), a2 = p2.render(p2.props, p2.state, p2.context), p2.state = p2.__s;
          } while (p2.__d && ++A2 < 25);
        p2.state = p2.__s, null != p2.getChildContext && (i2 = v$1(v$1({}, i2), p2.getChildContext())), y2 || null == p2.getSnapshotBeforeUpdate || (g2 = p2.getSnapshotBeforeUpdate(d2, _)), P(n2, h$1(I2 = null != a2 && a2.type === k$1 && null == a2.key ? a2.props.children : a2) ? I2 : [I2], u2, t2, i2, o2, r2, f2, e2, c2, s2), p2.base = u2.__e, u2.__h = null, p2.__h.length && f2.push(p2), m2 && (p2.__E = p2.__ = null);
      } else
        null == r2 && u2.__v === t2.__v ? (u2.__k = t2.__k, u2.__e = t2.__e) : u2.__e = N(t2.__e, u2, t2, i2, o2, r2, f2, c2, s2);
    (a2 = l$1.diffed) && a2(u2);
  } catch (n3) {
    u2.__v = null, (c2 || null != r2) && (u2.__e = e2, u2.__h = !!c2, r2[r2.indexOf(e2)] = null), l$1.__e(n3, u2, t2);
  }
}
function M(n2, u2, t2) {
  for (var i2 = 0; i2 < t2.length; i2++)
    O(t2[i2], t2[++i2], t2[++i2]);
  l$1.__c && l$1.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l$1.__e(n3, u3.__v);
    }
  });
}
function N(l2, u2, t2, i2, o2, r2, f2, e2, s2) {
  var a2, v2, y2, d2 = t2.props, _ = u2.props, k2 = u2.type, b2 = 0;
  if ("svg" === k2 && (o2 = true), null != r2) {
    for (; b2 < r2.length; b2++)
      if ((a2 = r2[b2]) && "setAttribute" in a2 == !!k2 && (k2 ? a2.localName === k2 : 3 === a2.nodeType)) {
        l2 = a2, r2[b2] = null;
        break;
      }
  }
  if (null == l2) {
    if (null === k2)
      return document.createTextNode(_);
    l2 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", k2) : document.createElement(k2, _.is && _), r2 = null, e2 = false;
  }
  if (null === k2)
    d2 === _ || e2 && l2.data === _ || (l2.data = _);
  else {
    if (r2 = r2 && n$1.call(l2.childNodes), v2 = (d2 = t2.props || c$1).dangerouslySetInnerHTML, y2 = _.dangerouslySetInnerHTML, !e2) {
      if (null != r2)
        for (d2 = {}, b2 = 0; b2 < l2.attributes.length; b2++)
          d2[l2.attributes[b2].name] = l2.attributes[b2].value;
      (y2 || v2) && (y2 && (v2 && y2.__html == v2.__html || y2.__html === l2.innerHTML) || (l2.innerHTML = y2 && y2.__html || ""));
    }
    if (H(l2, _, d2, o2, e2), y2)
      u2.__k = [];
    else if (P(l2, h$1(b2 = u2.props.children) ? b2 : [b2], u2, t2, i2, o2 && "foreignObject" !== k2, r2, f2, r2 ? r2[0] : t2.__k && g$1(t2, 0), e2, s2), null != r2)
      for (b2 = r2.length; b2--; )
        null != r2[b2] && p$1(r2[b2]);
    e2 || ("value" in _ && void 0 !== (b2 = _.value) && (b2 !== l2.value || "progress" === k2 && !b2 || "option" === k2 && b2 !== d2.value) && T(l2, "value", b2, d2.value, false), "checked" in _ && void 0 !== (b2 = _.checked) && b2 !== l2.checked && T(l2, "checked", b2, d2.checked, false));
  }
  return l2;
}
function O(n2, u2, t2) {
  try {
    "function" == typeof n2 ? n2(u2) : n2.current = u2;
  } catch (n3) {
    l$1.__e(n3, t2);
  }
}
function q(n2, u2, t2) {
  var i2, o2;
  if (l$1.unmount && l$1.unmount(n2), (i2 = n2.ref) && (i2.current && i2.current !== n2.__e || O(i2, null, u2)), null != (i2 = n2.__c)) {
    if (i2.componentWillUnmount)
      try {
        i2.componentWillUnmount();
      } catch (n3) {
        l$1.__e(n3, u2);
      }
    i2.base = i2.__P = null, n2.__c = void 0;
  }
  if (i2 = n2.__k)
    for (o2 = 0; o2 < i2.length; o2++)
      i2[o2] && q(i2[o2], u2, t2 || "function" != typeof n2.type);
  t2 || null == n2.__e || p$1(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
}
function B$1(n2, l2, u2) {
  return this.constructor(n2, u2);
}
function D(u2, t2, i2) {
  var o2, r2, f2, e2;
  l$1.__ && l$1.__(u2, t2), r2 = (o2 = "function" == typeof i2) ? null : i2 && i2.__k || t2.__k, f2 = [], e2 = [], L(t2, u2 = (!o2 && i2 || t2).__k = y(k$1, null, [u2]), r2 || c$1, c$1, void 0 !== t2.ownerSVGElement, !o2 && i2 ? [i2] : r2 ? null : t2.firstChild ? n$1.call(t2.childNodes) : null, f2, !o2 && i2 ? i2 : r2 ? r2.__e : t2.firstChild, o2, e2), M(f2, u2, e2);
}
n$1 = s$1.slice, l$1 = { __e: function(n2, l2, u2, t2) {
  for (var i2, o2, r2; l2 = l2.__; )
    if ((i2 = l2.__c) && !i2.__)
      try {
        if ((o2 = i2.constructor) && null != o2.getDerivedStateFromError && (i2.setState(o2.getDerivedStateFromError(n2)), r2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), r2 = i2.__d), r2)
          return i2.__E = i2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u$1 = 0, b$1.prototype.setState = function(n2, l2) {
  var u2;
  u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = v$1({}, this.state), "function" == typeof n2 && (n2 = n2(v$1({}, u2), this.props)), n2 && v$1(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), w$1(this));
}, b$1.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), w$1(this));
}, b$1.prototype.render = k$1, i$1 = [], r$1 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f$1 = function(n2, l2) {
  return n2.__v.__b - l2.__v.__b;
}, x.__r = 0;
var n = function(t2, s2, r2, e2) {
  var u2;
  s2[0] = 0;
  for (var h2 = 1; h2 < s2.length; h2++) {
    var p2 = s2[h2++], a2 = s2[h2] ? (s2[0] |= p2 ? 1 : 2, r2[s2[h2++]]) : s2[++h2];
    3 === p2 ? e2[0] = a2 : 4 === p2 ? e2[1] = Object.assign(e2[1] || {}, a2) : 5 === p2 ? (e2[1] = e2[1] || {})[s2[++h2]] = a2 : 6 === p2 ? e2[1][s2[++h2]] += a2 + "" : p2 ? (u2 = t2.apply(a2, n(t2, a2, r2, ["", null])), e2.push(u2), a2[0] ? s2[0] |= 2 : (s2[h2 - 2] = 0, s2[h2] = u2)) : e2.push(a2);
  }
  return e2;
}, t$1 = /* @__PURE__ */ new Map();
function e$1(s2) {
  var r2 = t$1.get(this);
  return r2 || (r2 = /* @__PURE__ */ new Map(), t$1.set(this, r2)), (r2 = n(this, r2.get(s2) || (r2.set(s2, r2 = function(n2) {
    for (var t2, s3, r3 = 1, e2 = "", u2 = "", h2 = [0], p2 = function(n3) {
      1 === r3 && (n3 || (e2 = e2.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? h2.push(0, n3, e2) : 3 === r3 && (n3 || e2) ? (h2.push(3, n3, e2), r3 = 2) : 2 === r3 && "..." === e2 && n3 ? h2.push(4, n3, 0) : 2 === r3 && e2 && !n3 ? h2.push(5, 0, true, e2) : r3 >= 5 && ((e2 || !n3 && 5 === r3) && (h2.push(r3, 0, e2, s3), r3 = 6), n3 && (h2.push(r3, n3, 0, s3), r3 = 6)), e2 = "";
    }, a2 = 0; a2 < n2.length; a2++) {
      a2 && (1 === r3 && p2(), p2(a2));
      for (var l2 = 0; l2 < n2[a2].length; l2++)
        t2 = n2[a2][l2], 1 === r3 ? "<" === t2 ? (p2(), h2 = [h2], r3 = 3) : e2 += t2 : 4 === r3 ? "--" === e2 && ">" === t2 ? (r3 = 1, e2 = "") : e2 = t2 + e2[0] : u2 ? t2 === u2 ? u2 = "" : e2 += t2 : '"' === t2 || "'" === t2 ? u2 = t2 : ">" === t2 ? (p2(), r3 = 1) : r3 && ("=" === t2 ? (r3 = 5, s3 = e2, e2 = "") : "/" === t2 && (r3 < 5 || ">" === n2[a2][l2 + 1]) ? (p2(), 3 === r3 && (h2 = h2[0]), r3 = h2, (h2 = h2[0]).push(2, 0, r3), r3 = 0) : " " === t2 || "	" === t2 || "\n" === t2 || "\r" === t2 ? (p2(), r3 = 2) : e2 += t2), 3 === r3 && "!--" === e2 && (r3 = 4, h2 = h2[0]);
    }
    return p2(), h2;
  }(s2)), r2), arguments, [])).length > 1 ? r2 : r2[0];
}
e$1.bind(y);
var t, r, u, i, o = 0, f = [], c = [], e = l$1.__b, a = l$1.__r, v = l$1.diffed, l = l$1.__c, m = l$1.unmount;
function d(t2, u2) {
  l$1.__h && l$1.__h(r, t2, o || u2), o = 0;
  var i2 = r.__H || (r.__H = { __: [], __h: [] });
  return t2 >= i2.__.length && i2.__.push({ __V: c }), i2.__[t2];
}
function h(n2) {
  return o = 1, s(B, n2);
}
function s(n2, u2, i2) {
  var o2 = d(t++, 2);
  if (o2.t = n2, !o2.__c && (o2.__ = [i2 ? i2(u2) : B(void 0, u2), function(n3) {
    var t2 = o2.__N ? o2.__N[0] : o2.__[0], r2 = o2.t(t2, n3);
    t2 !== r2 && (o2.__N = [r2, o2.__[1]], o2.__c.setState({}));
  }], o2.__c = r, !r.u)) {
    var f2 = function(n3, t2, r2) {
      if (!o2.__c.__H)
        return true;
      var u3 = o2.__c.__H.__.filter(function(n4) {
        return n4.__c;
      });
      if (u3.every(function(n4) {
        return !n4.__N;
      }))
        return !c2 || c2.call(this, n3, t2, r2);
      var i3 = false;
      return u3.forEach(function(n4) {
        if (n4.__N) {
          var t3 = n4.__[0];
          n4.__ = n4.__N, n4.__N = void 0, t3 !== n4.__[0] && (i3 = true);
        }
      }), !(!i3 && o2.__c.props === n3) && (!c2 || c2.call(this, n3, t2, r2));
    };
    r.u = true;
    var c2 = r.shouldComponentUpdate, e2 = r.componentWillUpdate;
    r.componentWillUpdate = function(n3, t2, r2) {
      if (this.__e) {
        var u3 = c2;
        c2 = void 0, f2(n3, t2, r2), c2 = u3;
      }
      e2 && e2.call(this, n3, t2, r2);
    }, r.shouldComponentUpdate = f2;
  }
  return o2.__N || o2.__;
}
function p(u2, i2) {
  var o2 = d(t++, 3);
  !l$1.__s && z(o2.__H, i2) && (o2.__ = u2, o2.i = i2, r.__H.__h.push(o2));
}
function b() {
  for (var t2; t2 = f.shift(); )
    if (t2.__P && t2.__H)
      try {
        t2.__H.__h.forEach(k), t2.__H.__h.forEach(w), t2.__H.__h = [];
      } catch (r2) {
        t2.__H.__h = [], l$1.__e(r2, t2.__v);
      }
}
l$1.__b = function(n2) {
  r = null, e && e(n2);
}, l$1.__r = function(n2) {
  a && a(n2), t = 0;
  var i2 = (r = n2.__c).__H;
  i2 && (u === r ? (i2.__h = [], r.__h = [], i2.__.forEach(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.__V = c, n3.__N = n3.i = void 0;
  })) : (i2.__h.forEach(k), i2.__h.forEach(w), i2.__h = [], t = 0)), u = r;
}, l$1.diffed = function(t2) {
  v && v(t2);
  var o2 = t2.__c;
  o2 && o2.__H && (o2.__H.__h.length && (1 !== f.push(o2) && i === l$1.requestAnimationFrame || ((i = l$1.requestAnimationFrame) || j)(b)), o2.__H.__.forEach(function(n2) {
    n2.i && (n2.__H = n2.i), n2.__V !== c && (n2.__ = n2.__V), n2.i = void 0, n2.__V = c;
  })), u = r = null;
}, l$1.__c = function(t2, r2) {
  r2.some(function(t3) {
    try {
      t3.__h.forEach(k), t3.__h = t3.__h.filter(function(n2) {
        return !n2.__ || w(n2);
      });
    } catch (u2) {
      r2.some(function(n2) {
        n2.__h && (n2.__h = []);
      }), r2 = [], l$1.__e(u2, t3.__v);
    }
  }), l && l(t2, r2);
}, l$1.unmount = function(t2) {
  m && m(t2);
  var r2, u2 = t2.__c;
  u2 && u2.__H && (u2.__H.__.forEach(function(n2) {
    try {
      k(n2);
    } catch (n3) {
      r2 = n3;
    }
  }), u2.__H = void 0, r2 && l$1.__e(r2, u2.__v));
};
var g = "function" == typeof requestAnimationFrame;
function j(n2) {
  var t2, r2 = function() {
    clearTimeout(u2), g && cancelAnimationFrame(t2), setTimeout(n2);
  }, u2 = setTimeout(r2, 100);
  g && (t2 = requestAnimationFrame(r2));
}
function k(n2) {
  var t2 = r, u2 = n2.__c;
  "function" == typeof u2 && (n2.__c = void 0, u2()), r = t2;
}
function w(n2) {
  var t2 = r;
  n2.__c = n2.__(), r = t2;
}
function z(n2, t2) {
  return !n2 || n2.length !== t2.length || t2.some(function(t3, r2) {
    return t3 !== n2[r2];
  });
}
function B(n2, t2) {
  return "function" == typeof t2 ? t2(n2) : t2;
}
const Africa = [
  {
    utc: [
      "Africa/Cairo"
    ],
    abbr: "EST",
    label: "Cairo",
    value: "Egypt Standard Time Cairo"
  },
  {
    utc: [
      "Africa/Algiers",
      "Africa/Bangui",
      "Africa/Brazzaville",
      "Africa/Douala",
      "Africa/Kinshasa",
      "Africa/Lagos",
      "Africa/Libreville",
      "Africa/Luanda",
      "Africa/Malabo",
      "Africa/Ndjamena",
      "Africa/Niamey",
      "Africa/Porto-Novo",
      "Africa/Tunis",
      "Etc/GMT-1"
    ],
    abbr: "WCAST",
    label: "West Central Africa",
    value: "W. Central Africa Standard Time Algiers Bangui Brazzaville Douala Kinshasa Lagos Libreville Luanda Malabo Ndjamena Niamey Porto-Novo Tunis GMT-1"
  },
  {
    utc: [
      "Africa/Windhoek"
    ],
    abbr: "NST",
    label: "Windhoek",
    value: "Namibia Standard Time Windhoek"
  },
  {
    utc: [
      "Africa/Blantyre",
      "Africa/Bujumbura",
      "Africa/Gaborone",
      "Africa/Harare",
      "Africa/Johannesburg",
      "Africa/Kigali",
      "Africa/Lubumbashi",
      "Africa/Lusaka",
      "Africa/Maputo",
      "Africa/Maseru",
      "Africa/Mbabane",
      "Etc/GMT-2"
    ],
    abbr: "SAST",
    label: "Harare, Pretoria",
    value: "South Africa Standard Time Blantyre Bujumbura Gaborone Harare Johannesburg Kigali Lubumbashi Lusaka Maputo Maseru Mbabane GMT-2"
  },
  {
    utc: [
      "Africa/Tripoli"
    ],
    abbr: "LST",
    label: "Tripoli",
    value: "Libya Standard Time Tripoli"
  },
  {
    utc: [
      "Africa/Addis_Ababa",
      "Africa/Asmera",
      "Africa/Dar_es_Salaam",
      "Africa/Djibouti",
      "Africa/Juba",
      "Africa/Kampala",
      "Africa/Khartoum",
      "Africa/Mogadishu",
      "Africa/Nairobi",
      "Antarctica/Syowa",
      "Etc/GMT-3",
      "Indian/Antananarivo",
      "Indian/Comoro",
      "Indian/Mayotte"
    ],
    abbr: "EAST",
    label: "Nairobi",
    value: "E. Africa Standard Time Addis Ababa Asmera Dar_es_Salaam Djibouti Juba Kampala Khartoum Mogadishu Nairobi Syowa GMT-3 Antananarivo Comoro Mayotte"
  },
  {
    utc: [
      "Africa/Abidjan",
      "Africa/Accra",
      "Africa/Bamako",
      "Africa/Banjul",
      "Africa/Bissau",
      "Africa/Conakry",
      "Africa/Dakar",
      "Africa/Freetown",
      "Africa/Lome",
      "Africa/Monrovia",
      "Africa/Nouakchott",
      "Africa/Ouagadougou",
      "Africa/Sao_Tome",
      "Atlantic/Reykjavik",
      "Atlantic/St_Helena"
    ],
    abbr: "GST",
    label: "Monrovia, Reykjavik",
    value: "Greenwich Standard Time Abidjan Accra Bamako Banjul Bissau Conakry Dakar Freetown Lome Monrovia Nouakchott Ouagadougou Sao Tome Reykjavik St_Helena"
  },
  {
    utc: [
      "Africa/Casablanca",
      "Africa/El_Aaiun"
    ],
    abbr: "MDT",
    label: "Casablanca",
    value: "Morocco Standard Time Casablanca El Aaiun"
  },
  {
    utc: [
      "Indian/Mahe",
      "Indian/Mauritius",
      "Indian/Reunion"
    ],
    abbr: "MST",
    label: "Port Louis",
    value: "Mauritius Standard Time Mahe Mauritius Reunion"
  }
];
const America = [
  {
    utc: [
      "America/Argentina/La_Rioja",
      "America/Argentina/Rio_Gallegos",
      "America/Argentina/Salta",
      "America/Argentina/San_Juan",
      "America/Argentina/San_Luis",
      "America/Argentina/Tucuman",
      "America/Argentina/Ushuaia",
      "America/Buenos_Aires",
      "America/Catamarca",
      "America/Cordoba",
      "America/Jujuy",
      "America/Mendoza"
    ],
    abbr: "AST",
    label: "Buenos Aires",
    value: "Argentina Standard Time La Rioja Rio_Gallegos Salta San_Juan San_Luis Tucuman Ushuaia Buenos_Aires Catamarca Cordoba Jujuy Mendoza"
  },
  {
    utc: [
      "America/Asuncion"
    ],
    abbr: "PYT",
    label: "Asuncion",
    value: "Paraguay Standard Time Asuncion"
  },
  {
    utc: [
      "America/Bogota",
      "America/Cayman",
      "America/Coral_Harbour",
      "America/Eirunepe",
      "America/Guayaquil",
      "America/Jamaica",
      "America/Lima",
      "America/Panama",
      "America/Rio_Branco",
      "Etc/GMT+5"
    ],
    abbr: "SPST",
    label: "Bogota, Lima, Quito",
    value: "SA Pacific Standard Time Bogota Cayman Coral Harbour Eirunepe Guayaquil Jamaica Lima Panama Rio_Branco GMT+5"
  },
  {
    utc: [
      "America/Campo_Grande",
      "America/Cuiaba"
    ],
    abbr: "CBST",
    label: "Cuiaba",
    value: "Central Brazilian Standard Time Campo Grande Cuiaba"
  },
  {
    utc: [
      "America/Caracas"
    ],
    abbr: "VST",
    label: "Caracas",
    value: "Venezuela Standard Time Caracas"
  },
  {
    utc: [
      "America/Godthab"
    ],
    abbr: "GDT",
    label: "Greenland",
    value: "Greenland Standard Time Godthab"
  },
  {
    utc: [
      "America/Regina",
      "America/Swift_Current"
    ],
    abbr: "CCST",
    label: "Saskatchewan",
    value: "Canada Central Standard Time Regina Swift Current"
  },
  {
    utc: [
      "America/Chihuahua",
      "America/Mazatlan"
    ],
    abbr: "MDT",
    label: "Chihuahua, La Paz, Mazatlan",
    value: "Mountain Standard Time (Mexico) Chihuahua Mazatlan"
  },
  {
    utc: [
      "America/Bahia_Banderas",
      "America/Cancun",
      "America/Merida",
      "America/Mexico_City",
      "America/Monterrey"
    ],
    abbr: "CDT",
    label: "Guadalajara, Mexico City, Monterrey",
    value: "Central Standard Time (Mexico) Bahia Banderas Cancun Merida Mexico_City Monterrey"
  },
  {
    utc: [
      "America/Montevideo"
    ],
    abbr: "MST",
    label: "Montevideo",
    value: "Montevideo Standard Time Montevideo"
  },
  {
    utc: [
      "America/Noronha",
      "Atlantic/South_Georgia",
      "Etc/GMT+2"
    ],
    abbr: "U",
    label: "Coordinated Universal Time-02",
    value: "UTC-02 Noronha South Georgia GMT+2"
  },
  {
    utc: [
      "America/Santiago",
      "Antarctica/Palmer"
    ],
    abbr: "PSST",
    label: "Santiago",
    value: "Pacific SA Standard Time Santiago Palmer"
  },
  {
    utc: [
      "America/Santa_Isabel"
    ],
    abbr: "PDT",
    label: "Baja California",
    value: "Pacific Standard Time (Mexico) Santa Isabel"
  },
  {
    utc: [
      "America/Glace_Bay",
      "America/Goose_Bay",
      "America/Halifax",
      "America/Moncton",
      "America/Thule",
      "Atlantic/Bermuda"
    ],
    abbr: "ADT",
    label: "Atlantic Time (Canada)",
    value: "Atlantic Standard Time Glace Bay Goose_Bay Halifax Moncton Thule Bermuda"
  },
  {
    utc: [
      "America/Sao_Paulo"
    ],
    abbr: "ESAST",
    label: "Brasilia",
    value: "E. South America Standard Time Sao Paulo"
  },
  {
    utc: [
      "America/Danmarkshavn",
      "Etc/GMT"
    ],
    abbr: "UTC",
    label: "Coordinated Universal Time",
    value: "UTC Danmarkshavn GMT"
  },
  {
    utc: [
      "America/Bahia"
    ],
    abbr: "BST",
    label: "Salvador",
    value: "Bahia Standard Time Bahia"
  },
  {
    utc: [
      "America/Araguaina",
      "America/Belem",
      "America/Cayenne",
      "America/Fortaleza",
      "America/Maceio",
      "America/Paramaribo",
      "America/Recife",
      "America/Santarem",
      "Antarctica/Rothera",
      "Atlantic/Stanley",
      "Etc/GMT+3"
    ],
    abbr: "SEST",
    label: "Cayenne, Fortaleza",
    value: "SA Eastern Standard Time Araguaina Belem Cayenne Fortaleza Maceio Paramaribo Recife Santarem Rothera Stanley GMT+3"
  },
  {
    utc: [
      "America/Anguilla",
      "America/Antigua",
      "America/Aruba",
      "America/Barbados",
      "America/Blanc-Sablon",
      "America/Boa_Vista",
      "America/Curacao",
      "America/Dominica",
      "America/Grand_Turk",
      "America/Grenada",
      "America/Guadeloupe",
      "America/Guyana",
      "America/Kralendijk",
      "America/La_Paz",
      "America/Lower_Princes",
      "America/Manaus",
      "America/Marigot",
      "America/Martinique",
      "America/Montserrat",
      "America/Port_of_Spain",
      "America/Porto_Velho",
      "America/Puerto_Rico",
      "America/Santo_Domingo",
      "America/St_Barthelemy",
      "America/St_Kitts",
      "America/St_Lucia",
      "America/St_Thomas",
      "America/St_Vincent",
      "America/Tortola",
      "Etc/GMT+4"
    ],
    abbr: "SWST",
    label: "Georgetown, La Paz, Manaus, San Juan",
    value: "SA Western Standard Time Anguilla Antigua Aruba Barbados Blanc-Sablon Boa Vista Curacao Dominica Grand_Turk Grenada Guadeloupe Guyana Kralendijk La_Paz Lower_Princes Manaus Marigot Martinique Montserrat Port_of_Spain Porto_Velho Puerto_Rico Santo_Domingo St_Barthelemy St_Kitts St_Lucia St_Thomas St_Vincent Tortola GMT+4"
  },
  {
    utc: [
      "America/Indiana/Marengo",
      "America/Indiana/Vevay",
      "America/Indianapolis"
    ],
    abbr: "UEDT",
    label: "Indiana (East)",
    value: "US Eastern Standard Time Marengo Vevay Indianapolis"
  }
];
const Asia = [
  {
    utc: [
      "Asia/Kolkata",
      "Asia/Calcutta"
    ],
    abbr: "IST",
    label: "Indian Standard Time",
    value: "India Standard Time Kolkata Calcutta Chennai Mumbai New Delhi"
  },
  {
    utc: [
      "Asia/Beirut"
    ],
    abbr: "MEDT",
    label: "Beirut",
    value: "Middle East Standard Time Beirut"
  },
  {
    utc: [
      "Asia/Damascus"
    ],
    abbr: "SDT",
    label: "Damascus",
    value: "Syria Standard Time Damascus"
  },
  {
    utc: [
      "Asia/Jerusalem"
    ],
    abbr: "JDT",
    label: "Jerusalem",
    value: "Israel Standard Time Jerusalem"
  },
  {
    utc: [
      "Asia/Amman"
    ],
    abbr: "JST",
    label: "Amman",
    value: "Jordan Standard Time Amman"
  },
  {
    utc: [
      "Asia/Baghdad"
    ],
    abbr: "AST",
    label: "Baghdad",
    value: "Arabic Standard Time Baghdad"
  },
  {
    utc: [
      "Asia/Aden",
      "Asia/Bahrain",
      "Asia/Kuwait",
      "Asia/Qatar",
      "Asia/Riyadh"
    ],
    abbr: "AST",
    label: "Kuwait, Riyadh",
    value: "Arab Standard Time Aden Bahrain Kuwait Qatar Riyadh"
  },
  {
    utc: [
      "Asia/Tehran"
    ],
    abbr: "IDT",
    label: "Tehran",
    value: "Iran Standard Time Tehran"
  },
  {
    utc: [
      "Asia/Dubai",
      "Asia/Muscat",
      "Etc/GMT-4"
    ],
    abbr: "AST",
    label: "Abu Dhabi, Muscat",
    value: "Arabian Standard Time Dubai Muscat GMT-4"
  },
  {
    utc: [
      "Asia/Baku"
    ],
    abbr: "ADT",
    label: "Baku",
    value: "Azerbaijan Standard Time Baku"
  },
  {
    utc: [
      "Asia/Tbilisi"
    ],
    abbr: "GET",
    label: "Tbilisi",
    value: "Georgian Standard Time Tbilisi"
  },
  {
    utc: [
      "Asia/Yerevan"
    ],
    abbr: "CST",
    label: "Yerevan",
    value: "Caucasus Standard Time Yerevan"
  },
  {
    utc: [
      "Asia/Kabul"
    ],
    abbr: "AST",
    label: "Kabul",
    value: "Afghanistan Standard Time Kabul"
  },
  {
    utc: [
      "Antarctica/Mawson",
      "Asia/Aqtau",
      "Asia/Aqtobe",
      "Asia/Ashgabat",
      "Asia/Dushanbe",
      "Asia/Oral",
      "Asia/Samarkand",
      "Asia/Tashkent",
      "Etc/GMT-5",
      "Indian/Kerguelen",
      "Indian/Maldives"
    ],
    abbr: "WAST",
    label: "Ashgabat, Tashkent",
    value: "West Asia Standard Time Mawson Aqtau Aqtobe Ashgabat Dushanbe Oral Samarkand Tashkent GMT-5 Kerguelen Maldives"
  },
  {
    utc: [
      "Asia/Yekaterinburg"
    ],
    abbr: "YEKT",
    label: "Yekaterinburg",
    value: "Yekaterinburg Time Yekaterinburg"
  },
  {
    utc: [
      "Asia/Karachi"
    ],
    abbr: "PKT",
    label: "Islamabad, Karachi",
    value: "Pakistan Standard Time Karachi"
  },
  {
    utc: [
      "Asia/Colombo"
    ],
    abbr: "SLST",
    label: "Sri Jayawardenepura",
    value: "Sri Lanka Standard Time Colombo"
  },
  {
    utc: [
      "Asia/Kathmandu"
    ],
    abbr: "NST",
    label: "Kathmandu",
    value: "Nepal Standard Time Kathmandu"
  },
  {
    utc: [
      "Antarctica/Vostok",
      "Asia/Almaty",
      "Asia/Bishkek",
      "Asia/Qyzylorda",
      "Asia/Urumqi",
      "Etc/GMT-6",
      "Indian/Chagos"
    ],
    abbr: "CAST",
    label: "Nur-Sultan (Astana)",
    value: "Central Asia Standard Time Vostok Almaty Bishkek Qyzylorda Urumqi GMT-6 Chagos"
  },
  {
    utc: [
      "Asia/Dhaka",
      "Asia/Thimphu"
    ],
    abbr: "BST",
    label: "Dhaka",
    value: "Bangladesh Standard Time Dhaka Thimphu"
  },
  {
    utc: [
      "Asia/Rangoon",
      "Indian/Cocos"
    ],
    abbr: "MST",
    label: "Yangon (Rangoon)",
    value: "Myanmar Standard Time Rangoon Cocos"
  },
  {
    utc: [
      "Antarctica/Davis",
      "Asia/Bangkok",
      "Asia/Hovd",
      "Asia/Jakarta",
      "Asia/Phnom_Penh",
      "Asia/Pontianak",
      "Asia/Saigon",
      "Asia/Vientiane",
      "Etc/GMT-7",
      "Indian/Christmas"
    ],
    abbr: "SAST",
    label: "Bangkok, Hanoi, Jakarta",
    value: "SE Asia Standard Time Davis Bangkok Hovd Jakarta Phnom Penh Pontianak Saigon Vientiane GMT-7 Christmas"
  },
  {
    utc: [
      "Asia/Novokuznetsk",
      "Asia/Novosibirsk",
      "Asia/Omsk"
    ],
    abbr: "NCAST",
    label: "Novosibirsk",
    value: "N. Central Asia Standard Time Novokuznetsk Novosibirsk Omsk"
  },
  {
    utc: [
      "Asia/Hong_Kong",
      "Asia/Macau",
      "Asia/Shanghai"
    ],
    abbr: "CST",
    label: "Beijing, Chongqing, Hong Kong, Urumqi",
    value: "China Standard Time Hong Kong Macau Shanghai"
  },
  {
    utc: [
      "Asia/Krasnoyarsk"
    ],
    abbr: "NAST",
    label: "Krasnoyarsk",
    value: "North Asia Standard Time Krasnoyarsk"
  },
  {
    utc: [
      "Asia/Brunei",
      "Asia/Kuala_Lumpur",
      "Asia/Kuching",
      "Asia/Makassar",
      "Asia/Manila",
      "Asia/Singapore",
      "Etc/GMT-8"
    ],
    abbr: "MPST",
    label: "Kuala Lumpur, Singapore",
    value: "Singapore Standard Time Brunei Kuala Lumpur Kuching Makassar Manila Singapore GMT-8"
  },
  {
    utc: [
      "Asia/Taipei"
    ],
    abbr: "TST",
    label: "Taipei",
    value: "Taipei Standard Time Taipei"
  },
  {
    utc: [
      "Asia/Choibalsan",
      "Asia/Ulaanbaatar"
    ],
    abbr: "UST",
    label: "Ulaanbaatar",
    value: "Ulaanbaatar Standard Time Choibalsan Ulaanbaatar"
  },
  {
    utc: [
      "Asia/Irkutsk"
    ],
    abbr: "NAEST",
    label: "Irkutsk",
    value: "North Asia East Standard Time Irkutsk"
  },
  {
    utc: [
      "Asia/Dili",
      "Asia/Jayapura",
      "Asia/Tokyo",
      "Etc/GMT-9",
      "Pacific/Palau"
    ],
    abbr: "JST",
    label: "Osaka, Sapporo, Tokyo",
    value: "Japan Standard Time Dili Jayapura Tokyo GMT-9 Palau"
  },
  {
    utc: [
      "Asia/Pyongyang",
      "Asia/Seoul"
    ],
    abbr: "KST",
    label: "Seoul",
    value: "Korea Standard Time Pyongyang Seoul"
  },
  {
    utc: [
      "Asia/Anadyr",
      "Asia/Kamchatka",
      "Asia/Magadan",
      "Asia/Srednekolymsk"
    ],
    abbr: "MST",
    label: "Magadan",
    value: "Magadan Standard Time Anadyr Kamchatka Magadan Srednekolymsk"
  },
  {
    utc: [
      "Asia/Kamchatka"
    ],
    abbr: "KDT",
    label: "Petropavlovsk-Kamchatsky - Old",
    value: "Kamchatka Standard Time Kamchatka"
  },
  {
    utc: [
      "Asia/Sakhalin",
      "Asia/Ust-Nera",
      "Asia/Vladivostok"
    ],
    abbr: "VST",
    label: "Vladivostok",
    value: "Vladivostok Standard Time Sakhalin Ust-Nera Vladivostok"
  },
  {
    utc: [
      "Asia/Chita",
      "Asia/Khandyga",
      "Asia/Yakutsk"
    ],
    abbr: "YST",
    label: "Yakutsk",
    value: "Yakutsk Standard Time Chita Khandyga Yakutsk"
  }
];
const Atlantic = [
  {
    utc: [
      "America/Scoresbysund",
      "Atlantic/Azores"
    ],
    abbr: "ADT",
    label: "Azores",
    value: "Azores Standard Time Scoresbysund Azores"
  },
  {
    utc: [
      "Atlantic/Cape_Verde",
      "Etc/GMT+1"
    ],
    abbr: "CVST",
    label: "Cape Verde Is.",
    value: "Cape Verde Standard Time Cape Verde GMT+1"
  }
];
const Australia = [
  {
    utc: [
      "Antarctica/Casey",
      "Australia/Perth"
    ],
    abbr: "WAST",
    label: "Perth",
    value: "W. Australia Standard Time Casey Perth"
  },
  {
    utc: [
      "Australia/Adelaide",
      "Australia/Broken_Hill"
    ],
    abbr: "CAST",
    label: "Adelaide",
    value: "Cen. Australia Standard Time Adelaide Broken Hill"
  },
  {
    utc: [
      "Australia/Darwin"
    ],
    abbr: "ACST",
    label: "Darwin",
    value: "AUS Central Standard Time Darwin"
  },
  {
    utc: [
      "Australia/Brisbane",
      "Australia/Lindeman"
    ],
    abbr: "EAST",
    label: "Brisbane",
    value: "E. Australia Standard Time Brisbane Lindeman"
  },
  {
    utc: [
      "Australia/Melbourne",
      "Australia/Sydney"
    ],
    abbr: "AEST",
    label: "Canberra, Melbourne, Sydney",
    value: "AUS Eastern Standard Time Melbourne Sydney"
  },
  {
    utc: [
      "Australia/Currie",
      "Australia/Hobart"
    ],
    abbr: "TST",
    label: "Hobart",
    value: "Tasmania Standard Time Currie Hobart"
  }
];
const Europe = [
  {
    utc: [
      "Europe/Belgrade",
      "Europe/Bratislava",
      "Europe/Budapest",
      "Europe/Ljubljana",
      "Europe/Podgorica",
      "Europe/Prague",
      "Europe/Tirane"
    ],
    abbr: "CEDT",
    label: "Belgrade, Bratislava, Budapest, Ljubljana, Prague",
    value: "Central Europe Standard Time Belgrade Bratislava Budapest Ljubljana Podgorica Prague Tirane"
  },
  {
    utc: [
      "Europe/Sarajevo",
      "Europe/Skopje",
      "Europe/Warsaw",
      "Europe/Zagreb"
    ],
    abbr: "CEDT",
    label: "Sarajevo, Skopje, Warsaw, Zagreb",
    value: "Central European Standard Time Sarajevo Skopje Warsaw Zagreb"
  },
  {
    utc: [
      "Europe/London",
      "Europe/Isle_of_Man",
      "Europe/Guernsey",
      "Europe/Jersey"
    ],
    abbr: "GMT",
    label: "Edinburgh, London",
    value: "GMT Standard Time Isle of_Man Guernsey Jersey London"
  },
  {
    utc: [
      "Atlantic/Canary",
      "Atlantic/Faeroe",
      "Atlantic/Madeira",
      "Europe/Dublin",
      "Europe/Lisbon"
    ],
    abbr: "GDT",
    label: "Dublin, Lisbon",
    value: "GMT Standard Time Canary Faeroe Madeira Dublin Lisbon"
  },
  {
    utc: [
      "Arctic/Longyearbyen",
      "Europe/Amsterdam",
      "Europe/Andorra",
      "Europe/Berlin",
      "Europe/Busingen",
      "Europe/Gibraltar",
      "Europe/Luxembourg",
      "Europe/Malta",
      "Europe/Monaco",
      "Europe/Oslo",
      "Europe/Rome",
      "Europe/San_Marino",
      "Europe/Stockholm",
      "Europe/Vaduz",
      "Europe/Vatican",
      "Europe/Vienna",
      "Europe/Zurich"
    ],
    abbr: "WEDT",
    label: "Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
    value: "W. Europe Standard Time Longyearbyen Amsterdam Andorra Berlin Busingen Gibraltar Luxembourg Malta Monaco Oslo Rome San Marino Stockholm Vaduz Vatican Vienna Zurich"
  },
  {
    utc: [
      "Africa/Ceuta",
      "Europe/Brussels",
      "Europe/Copenhagen",
      "Europe/Madrid",
      "Europe/Paris"
    ],
    abbr: "RDT",
    label: "Brussels, Copenhagen, Madrid, Paris",
    value: "Romance Standard Time Ceuta Brussels Copenhagen Madrid Paris"
  },
  {
    utc: [
      "Asia/Nicosia",
      "Europe/Athens",
      "Europe/Bucharest",
      "Europe/Chisinau"
    ],
    abbr: "GDT",
    label: "Athens, Bucharest",
    value: "GTB Standard Time Nicosia Athens Bucharest Chisinau"
  },
  {
    utc: [
      "Asia/Nicosia",
      "Europe/Athens",
      "Europe/Bucharest",
      "Europe/Chisinau",
      "Europe/Helsinki",
      "Europe/Kiev",
      "Europe/Mariehamn",
      "Europe/Nicosia",
      "Europe/Riga",
      "Europe/Sofia",
      "Europe/Tallinn",
      "Europe/Uzhgorod",
      "Europe/Vilnius",
      "Europe/Zaporozhye"
    ],
    abbr: "EEDT",
    label: "E. Europe",
    value: "E. Europe Standard Time Nicosia Athens Bucharest Chisinau Helsinki Kiev Mariehamn Nicosia Riga Sofia Tallinn Uzhgorod Vilnius Zaporozhye"
  },
  {
    utc: [
      "Europe/Helsinki",
      "Europe/Kiev",
      "Europe/Mariehamn",
      "Europe/Riga",
      "Europe/Sofia",
      "Europe/Tallinn",
      "Europe/Uzhgorod",
      "Europe/Vilnius",
      "Europe/Zaporozhye"
    ],
    abbr: "FDT",
    label: "Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius",
    value: "FLE Standard Time Helsinki Kiev Mariehamn Riga Sofia Tallinn Uzhgorod Vilnius Zaporozhye"
  },
  {
    utc: [
      "Europe/Istanbul"
    ],
    abbr: "TDT",
    label: "Istanbul",
    value: "Turkey Standard Time Istanbul"
  },
  {
    utc: [
      "Europe/Kaliningrad"
    ],
    abbr: "KST",
    label: "Kaliningrad",
    value: "Kaliningrad Standard Time Kaliningrad"
  },
  {
    utc: [
      "Europe/Kirov",
      "Europe/Moscow",
      "Europe/Simferopol",
      "Europe/Volgograd",
      "Europe/Minsk"
    ],
    abbr: "MSK",
    label: "Moscow, St. Petersburg, Volgograd, Minsk",
    value: "Moscow Standard Time Kirov Moscow Simferopol Volgograd Minsk"
  },
  {
    utc: [
      "Europe/Astrakhan",
      "Europe/Samara",
      "Europe/Ulyanovsk"
    ],
    abbr: "SAMT",
    label: "Samara, Ulyanovsk, Saratov",
    value: "Samara Time Astrakhan Samara Ulyanovsk"
  }
];
const Pacific = [
  {
    utc: [
      "Etc/GMT+11",
      "Pacific/Midway",
      "Pacific/Niue",
      "Pacific/Pago_Pago"
    ],
    abbr: "U",
    label: "Coordinated Universal Time-11",
    value: "UTC-11 GMT+11 Midway Niue Pago Pago"
  },
  {
    utc: [
      "Pacific/Apia"
    ],
    abbr: "SST",
    label: "Samoa",
    value: "Samoa Standard Time Apia"
  },
  {
    utc: [
      "Antarctica/McMurdo",
      "Pacific/Auckland"
    ],
    abbr: "NZST",
    label: "Auckland, Wellington",
    value: "New Zealand Standard Time McMurdo Auckland"
  },
  {
    utc: [
      "Pacific/Fiji"
    ],
    abbr: "FST",
    label: "Fiji",
    value: "Fiji Standard Time Fiji"
  },
  {
    utc: [
      "Etc/GMT-12",
      "Pacific/Funafuti",
      "Pacific/Kwajalein",
      "Pacific/Majuro",
      "Pacific/Nauru",
      "Pacific/Tarawa",
      "Pacific/Wake",
      "Pacific/Wallis"
    ],
    abbr: "U",
    label: "Coordinated Universal Time+12",
    value: "UTC+12 GMT-12 Funafuti Kwajalein Majuro Nauru Tarawa Wake Wallis"
  },
  {
    utc: [
      "Antarctica/DumontDUrville",
      "Etc/GMT-10",
      "Pacific/Guam",
      "Pacific/Port_Moresby",
      "Pacific/Saipan",
      "Pacific/Truk"
    ],
    abbr: "WPST",
    label: "Guam, Port Moresby",
    value: "West Pacific Standard Time DumontDUrville GMT-10 Guam Port Moresby Saipan Truk"
  },
  {
    utc: [
      "Antarctica/Macquarie",
      "Etc/GMT-11",
      "Pacific/Efate",
      "Pacific/Guadalcanal",
      "Pacific/Kosrae",
      "Pacific/Noumea",
      "Pacific/Ponape"
    ],
    abbr: "CPST",
    label: "Solomon Is., New Caledonia",
    value: "Central Pacific Standard Time Macquarie GMT-11 Efate Guadalcanal Kosrae Noumea Ponape"
  },
  {
    utc: [
      "Etc/GMT-13",
      "Pacific/Enderbury",
      "Pacific/Fakaofo",
      "Pacific/Tongatapu"
    ],
    abbr: "TST",
    label: "Nuku'alofa",
    value: "Tonga Standard Time GMT-13 Enderbury Fakaofo Tongatapu"
  },
  {
    utc: [
      "Etc/GMT+12"
    ],
    abbr: "DST",
    label: "International Date Line West",
    value: "Dateline Standard Time GMT+12"
  }
];
const UsCanada = [
  {
    utc: [
      "America/Los_Angeles",
      "America/Tijuana",
      "America/Vancouver",
      "PST8PDT"
    ],
    abbr: "PST",
    label: "Pacific Standard Time",
    value: "Pacific Standard Time Los Angeles Tijuana Vancouver PST8PDT"
  },
  {
    utc: [
      "America/Creston",
      "America/Dawson",
      "America/Dawson_Creek",
      "America/Hermosillo",
      "America/Phoenix",
      "America/Whitehorse",
      "Etc/GMT+7"
    ],
    abbr: "UMST",
    label: "Mountain Time",
    value: "US Mountain Standard Time Creston Dawson Dawson Creek Hermosillo Phoenix Whitehorse GMT+7"
  },
  {
    utc: [
      "America/Chicago",
      "America/Indiana/Knox",
      "America/Indiana/Tell_City",
      "America/Matamoros",
      "America/Menominee",
      "America/North_Dakota/Beulah",
      "America/North_Dakota/Center",
      "America/North_Dakota/New_Salem",
      "America/Rainy_River",
      "America/Rankin_Inlet",
      "America/Resolute",
      "America/Winnipeg",
      "CST6CDT"
    ],
    abbr: "CDT",
    label: "Central Time",
    value: "Central Standard Time Chicago Knox Tell City Matamoros Menominee Beulah Center New_Salem Rainy_River Rankin_Inlet Resolute Winnipeg CST6CDT"
  },
  {
    utc: [
      "America/New_York",
      "America/Detroit",
      "America/Havana",
      "America/Indiana/Petersburg",
      "America/Indiana/Vincennes",
      "America/Indiana/Winamac",
      "America/Iqaluit",
      "America/Kentucky/Monticello",
      "America/Louisville",
      "America/Montreal",
      "America/Nassau",
      "America/Nipigon",
      "America/Pangnirtung",
      "America/Port-au-Prince",
      "America/Thunder_Bay",
      "America/Toronto"
    ],
    abbr: "EST",
    label: "Eastern Time",
    value: "Eastern Standard Time Detroit Havana Petersburg Vincennes Winamac Iqaluit Monticello Louisville Montreal Nassau New York Nipigon Pangnirtung Port-au-Prince Thunder_Bay Toronto"
  },
  {
    utc: [
      "America/Anchorage",
      "America/Juneau",
      "America/Nome",
      "America/Sitka",
      "America/Yakutat"
    ],
    abbr: "AKDT",
    label: "Alaska",
    value: "Alaskan Standard Time Anchorage Juneau Nome Sitka Yakutat"
  },
  {
    utc: [
      "America/St_Johns"
    ],
    abbr: "NDT",
    label: "Newfoundland",
    value: "Newfoundland Standard Time St Johns"
  },
  {
    utc: [
      "Etc/GMT+10",
      "Pacific/Honolulu",
      "Pacific/Johnston",
      "Pacific/Rarotonga",
      "Pacific/Tahiti"
    ],
    abbr: "HST",
    label: "Hawaii",
    value: "Hawaiian Standard Time GMT+10 Honolulu Johnston Rarotonga Tahiti"
  }
];
const groupedOptions = [
  { "US/Canada": UsCanada },
  { America },
  { Asia },
  { Africa },
  { Atlantic },
  { Australia },
  { Europe },
  { Pacific }
];
const allTimezones = groupedOptions.reduce((accumulator, currentValue) => {
  const key = Object.keys(currentValue)[0];
  return [...accumulator, ...currentValue[key]];
}, []);
const findBrowserTimezone = () => {
  const browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return allTimezones.find((timezone) => timezone.utc.includes(browserTimezone));
};
const DEFAULT_VALUE = findBrowserTimezone() || allTimezones[0];
const valueToId = (value) => `option-${value.replaceAll(" ", "_").toLowerCase()}`;
const createOptionButton = ({
  key,
  value,
  onClick,
  label,
  selected,
  currentTime
}) => /* @__PURE__ */ y(
  "button",
  {
    id: valueToId(value),
    onClick,
    className: `flex items-center justify-between px-2 py-3 text-md hover:bg-slate-100 ${selected ? "bg-blue-300" : ""}`,
    key,
    value
  },
  /* @__PURE__ */ y("div", { className: "flex items-center w-3/4 space-x-4 text-left truncate pointer-events-none line-clamp-2" }, /* @__PURE__ */ y("div", null, label)),
  /* @__PURE__ */ y("div", { className: "text-right truncate pointer-events-none line-clamp-2" }, currentTime)
);
const getCurrentTimeInTimezone = (timezone) => {
  const currentTimeInUTC = /* @__PURE__ */ new Date();
  const options = {
    timeZone: timezone,
    hour12: true,
    hour: "numeric",
    minute: "numeric"
  };
  const currentTimeInTimezone = currentTimeInUTC.toLocaleString("en-US", options);
  return currentTimeInTimezone;
};
const createGroupedOptionButton = (group, selectedValue, handleSelect) => /* @__PURE__ */ y("div", null, group.map((groupItem, groupIndex) => {
  const key = Object.keys(groupItem)[0];
  const element = groupItem[key];
  return /* @__PURE__ */ y("div", { className: "flex flex-col px-2 py-1", key: groupIndex }, /* @__PURE__ */ y("span", { className: "pb-1 font-bold uppercase text-md" }, key), element.map((timezone, index) => createOptionButton({
    onClick: handleSelect,
    key: index,
    value: timezone.value,
    timezone: timezone.label,
    label: timezone.label,
    selected: selectedValue.value === timezone.value,
    currentTime: getCurrentTimeInTimezone(timezone.utc[0])
  })));
}));
function Button({ selectedValue, showOptions, setShowOptions }) {
  const handleClick = () => {
    setShowOptions((showOptions2) => !showOptions2);
  };
  p(() => {
    if (showOptions) {
      const searchbox = document.getElementById("searchbox");
      searchbox.focus();
    }
  }, [showOptions]);
  return /* @__PURE__ */ y(
    "div",
    {
      className: "flex flex-col justify-between w-full text-gray-700 bg-white rounded",
      id: "selectTimezone"
    },
    /* @__PURE__ */ y(
      "button",
      {
        onClick: handleClick,
        id: "changeTimezoneButton",
        className: "flex items-center justify-between px-4 py-4 text-md",
        value: selectedValue == null ? void 0 : selectedValue.value
      },
      /* @__PURE__ */ y("div", { className: "flex items-center w-3/4 space-x-4 text-left truncate pointer-events-none line-clamp-2" }, /* @__PURE__ */ y("div", null, selectedValue == null ? void 0 : selectedValue.label)),
      /* @__PURE__ */ y("div", { className: "text-right truncate line-clamp-2" }, /* @__PURE__ */ y("span", { className: "flex" }, getCurrentTimeInTimezone(selectedValue == null ? void 0 : selectedValue.utc[0]), " ", /* @__PURE__ */ y("svg", { height: "20", width: "20", viewBox: "0 2 20 20", "aria-hidden": "true", focusable: "false" }, /* @__PURE__ */ y("path", { d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" }))))
    )
  );
}
function Search({ searchInput, setSearchInput }) {
  return /* @__PURE__ */ y(
    "input",
    {
      id: "searchbox",
      type: "text",
      placeholder: "Search",
      onInput: (event) => setSearchInput(event.target.value),
      className: "px-2 py-2 m-2 border-2 border-blue-400 rounded shadow-lg outline-none",
      value: searchInput
    }
  );
}
const filterTimezones = (inputValue) => {
  if (inputValue === "") {
    return groupedOptions;
  }
  const filteredOptions = groupedOptions.map((group) => {
    const key = Object.keys(group)[0];
    const element = group[key].filter(
      (timezone) => timezone.abbr === inputValue.toUpperCase() || timezone.label.toLowerCase().includes(inputValue.toLowerCase()) || timezone.value.toLowerCase().includes(inputValue.toLowerCase())
    );
    return element.length > 0 ? { [key]: element } : null;
  });
  return filteredOptions.filter((group) => group !== null);
};
function Options({
  searchInput,
  selectedValue,
  setSelectedValue,
  setShowOptions
}) {
  const handleSelect = (e2) => {
    const selectedTimezone = allTimezones.find((timezone) => {
      var _a;
      return (timezone == null ? void 0 : timezone.value) === ((_a = e2 == null ? void 0 : e2.target) == null ? void 0 : _a.value);
    });
    setShowOptions(false);
    setSelectedValue(selectedTimezone);
  };
  p(() => {
    const selectedElement = document.getElementById(valueToId(selectedValue == null ? void 0 : selectedValue.value));
    selectedElement.scrollIntoView({ behavior: "auto", block: "center" });
  }, []);
  return /* @__PURE__ */ y("div", { id: "selectTimezoneOptions", className: "overflow-y-scroll h-80" }, /* @__PURE__ */ y("div", { className: "flex flex-col" }, createGroupedOptionButton(filterTimezones(searchInput), selectedValue, handleSelect)));
}
function OptionsContainer({
  className,
  selectedValue,
  setSelectedValue,
  setShowOptions
}) {
  const [searchInput, setSearchInput] = h("");
  return /* @__PURE__ */ y(
    "div",
    {
      className: `w-full px-2 py-4 flex flex-col text-gray-700 bg-white border border-gray-300 rounded shadow h-80 ${className}`,
      id: "optionsContainer"
    },
    /* @__PURE__ */ y(
      Search,
      {
        searchInput,
        setSearchInput
      }
    ),
    /* @__PURE__ */ y(Options, { searchInput, selectedValue, setSelectedValue, setShowOptions })
  );
}
const Selector = ({ className = "", position = "bottom", onChange = (selectedValue) => {
} }) => {
  const [selectedValue, setSelectedValue] = h(DEFAULT_VALUE);
  const [showOptions, setShowOptions] = h(false);
  const top = position === "top";
  const addOutsideClickListener = () => {
    window.addEventListener("click", function(e2) {
      var _a;
      if (!((_a = document.getElementById("timezoneSelector")) == null ? void 0 : _a.contains(e2.target))) {
        setShowOptions(false);
      }
    });
  };
  addOutsideClickListener();
  p(() => {
    onChange(selectedValue);
  }, [selectedValue]);
  return /* @__PURE__ */ y("div", { className: `flex flex-col relative w-full ${className}`, id: "timezoneSelector" }, /* @__PURE__ */ y(Button, { showOptions, setShowOptions, selectedValue }), showOptions === true && /* @__PURE__ */ y(
    OptionsContainer,
    {
      selectedValue,
      setSelectedValue,
      setShowOptions,
      className: `absolute ${top ? "bottom-16" : "top-16"}`
    }
  ));
};
const styles = "";
class Plugin {
  constructor(element, options) {
    this.element = element;
    this.options = options;
    this.render();
  }
  render() {
    D(/* @__PURE__ */ y(Selector, { ...this.options }), this.element);
  }
}
window.NeetoTimezoneSelector = Plugin;
export {
  Plugin as default
};
