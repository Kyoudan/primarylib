"use strict";
var m = Object.defineProperty;
var b = Object.getOwnPropertyDescriptor;
var I = Object.getOwnPropertyNames;
var V = Object.prototype.hasOwnProperty;
var T = (r, e) => {
    for (var t in e) m(r, t, { get: e[t], enumerable: !0 });
  },
  D = (r, e, t, o) => {
    if ((e && typeof e == "object") || typeof e == "function")
      for (let i of I(e))
        !V.call(r, i) &&
          i !== t &&
          m(r, i, {
            get: () => e[i],
            enumerable: !(o = b(e, i)) || o.enumerable,
          });
    return r;
  };
var v = (r) => D(m({}, "__esModule", { value: !0 }), r);
var z = {};
T(z, { default: () => q });
module.exports = v(z);
var c = (r, e, t, o) => {
  if (t) {
    if (typeof r == "string" && r.length < t)
      return {
        success: !1,
        message: "O valor \xE9 menor que o m\xEDnimo permitido",
        type: e,
      };
    if (typeof r == "number" && r < t)
      return {
        success: !1,
        message: "O valor \xE9 menor que o m\xEDnimo permitido",
        type: e,
      };
  }
  if (o) {
    if (typeof r == "string" && r.length > o)
      return {
        success: !1,
        message: "O valor \xE9 maior que o m\xE1ximo permitido",
        type: e,
      };
    if (typeof r == "number" && r > o)
      return {
        success: !1,
        message: "O valor \xE9 maior que o m\xE1ximo permitido",
        type: e,
      };
  }
};
var p = (r) => {
  try {
    let e = r;
    return !!/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(e);
  } catch (e) {
    return !1;
  }
};
var y = (r) => {
  try {
    let f = r.toString();
    if (((f = f.replace(/[^\d]+/g, "")), f.length !== 11)) return !1;
    for (var e = 0; e < 10 && f.charAt(e) === f.charAt(e + 1); e++)
      if (e === 9) return !1;
    for (var t = 0, o = 0; o < 9; o++) t += parseInt(f.charAt(o)) * (10 - o);
    var i = t % 11,
      M = i < 2 ? 0 : 11 - i;
    if (parseInt(f.charAt(9)) !== M) return !1;
    t = 0;
    for (var s = 0; s < 10; s++) t += parseInt(f.charAt(s)) * (11 - s);
    i = t % 11;
    var O = i < 2 ? 0 : 11 - i;
    return parseInt(f.charAt(10)) === O;
  } catch (f) {
    return !1;
  }
};
var d = (r) => {
  try {
    let t = r.replace(/\D/g, "");
    return !!/^[+]\d{1,3}\s?[(]?\d{1,4}[)]?\s?\d{4,}$/.test(t);
  } catch (e) {
    return !1;
  }
};
var g = (r) => {
  try {
    return !!/^[a-f\d]{8}(-[a-f\d]{4}){4}[a-f\d]{8}$/i.test(r);
  } catch (e) {
    return !1;
  }
};
var h = (r) => {
  try {
    return typeof r == "string";
  } catch (e) {
    return !1;
  }
};
var l = (r) => {
  try {
    return typeof r == "number";
  } catch (e) {
    return !1;
  }
};
var a = class {
    constructor() {
      this.email = p;
      this.phone = d;
      this.uuid = g;
      this.cpf = y;
      this.string = h;
      this.number = l;
    }
  },
  n = new a();
var x = (r, e) => {
  let t,
    o = 0;
  return (
    typeof e == "string" &&
      (r == "email" || (Array.isArray(r) && r.indexOf("email") !== -1)) &&
      ((t = n.email(e)), (o = t ? o + 1 : o)),
    typeof e == "string" &&
      (r == "phone" || (Array.isArray(r) && r.indexOf("phone") !== -1)) &&
      ((t = n.phone(e)), (o = t ? o + 1 : o)),
    (r == "cpf" || (Array.isArray(r) && r.indexOf("cpf") !== -1)) &&
      ((t = n.cpf(e)), (o = t ? o + 1 : o)),
    typeof e == "string" &&
      (r == "uuid" || (Array.isArray(r) && r.indexOf("uuid") !== -1)) &&
      ((t = n.uuid(e)), (o = t ? o + 1 : o)),
    typeof e == "number" &&
      (r == "number" || (Array.isArray(r) && r.indexOf("number") !== -1)) &&
      ((t = n.number(e)), (o = t ? o + 1 : o)),
    typeof e == "string" &&
      (r == "string" || (Array.isArray(r) && r.indexOf("string") !== -1)) &&
      ((t = n.string(e)), (o = t ? o + 1 : o)),
    Array.isArray(r) && o !== r.length && (console.log(r.length, o), (t = !1)),
    t
  );
};
var A = (r) => {
  try {
    let e = x(r.type, r.value),
      t = c(r.value, r.type, r.min, r.max);
    return (
      t ||
      (e
        ? { success: !0, message: "O valor \xE9 v\xE1lido", type: r.type }
        : { success: !1, message: "O valor \xE9 inv\xE1lido", type: r.type })
    );
  } catch (e) {
    return { success: !1, message: "Error", type: r.type };
  }
};
var u = class {
    constructor() {
      this.verify = A;
    }
  },
  q = new u();
//# sourceMappingURL=index.js.map
