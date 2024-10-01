var M = Object.defineProperty;
var S = (t, o, e) => o in t ? M(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e;
var D = (t, o, e) => S(t, typeof o != "symbol" ? o + "" : o, e);
import { createVNode as y, render as x, inject as B, defineComponent as E, provide as b, nextTick as K, getCurrentInstance as I, ref as k, h as A, mergeProps as N, resolveComponent as P } from "vue";
import { useGlobalComponentSettings as $, ElDialog as q } from "element-plus";
class G {
  constructor() {
    D(this, "map", /* @__PURE__ */ new WeakMap());
  }
  getEventsMapByConsumer(o) {
    let e = this.map.get(o);
    return e || (e = /* @__PURE__ */ new Map(), this.map.set(o, e)), e;
  }
  getEventsByConsumer(o, e) {
    const a = this.getEventsMapByConsumer(o);
    let n = a.get(e);
    return n || (n = /* @__PURE__ */ new Set(), a.set(e, n)), n;
  }
  on(o, e, a, n = {}) {
    const s = this.getEventsByConsumer(o, e);
    let d = a;
    n.once && (d = (...i) => {
      a(...i), this.off(o, e, d);
    }), s.add(d), n.callAfterDelay !== void 0 && setTimeout(() => {
      d();
    }, n.callAfterDelay || 0);
  }
  once(o, e, a) {
    this.on(o, e, a, { once: !0 });
  }
  emit(o, e, ...a) {
    this.getEventsByConsumer(o, e).forEach((s) => s(...a));
  }
  off(o, e, a) {
    this.getEventsByConsumer(o, e).delete(a);
  }
}
const L = (t = "") => t.slice(2).toLowerCase(), w = (t = "") => `on${t.charAt(0).toUpperCase()}${t.slice(1)}`, O = () => {
  let t = () => {
  }, o = () => {
  };
  return { promise: new Promise((a, n) => {
    t = a, o = n;
  }), resolve: t, reject: o };
};
var u = /* @__PURE__ */ ((t) => (t.confirm = "confirm", t.cancel = "cancel", t.destory = "destory", t))(u || {});
const R = Symbol("CommandDialogConsumerInjectKey"), j = Symbol("CommandDialogStackInjectKey"), f = new G(), T = (t) => ({
  ...t.parent ? T(t.parent) : {},
  ...t.provides
});
function U(t, o, e) {
  const a = (typeof e.appendTo == "string" ? document.querySelector(e.appendTo) : e.appendTo) || document.body, n = document.createElement("div");
  a.appendChild(n);
  const s = () => {
    e.visible.value = !1;
  }, d = () => {
    e.visible.value = !0;
  }, i = () => {
    K(() => {
      x(null, n), n.remove();
    });
  }, m = (r = !1) => {
    r ? (l.on(u.destory, i, {
      once: !0,
      callAfterDelay: 3e3
    }), s()) : l.stack.splice(l.stackIndex).forEach((c) => c.destroy(!0));
  }, {
    promise: p,
    resolve: v,
    reject: h
  } = O(), l = {
    promise: p,
    resolve: v,
    reject: h,
    destroyWithResolve: (r) => {
      v(r), m();
    },
    destroyWithReject: (r) => {
      h(r), m();
    },
    hide: s,
    show: d,
    destroy: m,
    container: n,
    visible: e.visible,
    on: (r, c, W = {}) => f.on(l, r, c, W),
    once: (r, c) => f.once(l, r, c),
    emit: (r, ...c) => f.emit(l, r, ...c),
    off: (r, c) => f.off(l, r, c),
    stack: [],
    stackIndex: -1,
    componentRef: void 0
  }, C = y(/* @__PURE__ */ E({
    setup() {
      for (const c in e.provideProps)
        b(c, e.provideProps[c]);
      b(R, l);
      const r = B(j, []);
      return l.stackIndex = r.length, r.push(l), b(j, r), l.stack = r, () => o;
    }
  }), null, null);
  return C.appContext = (t == null ? void 0 : t.appContext) || C.appContext, C.appContext.provides = {
    ...C.appContext.provides,
    ...T(t)
  }, x(C, n), l;
}
const Q = (t = !0) => {
  const o = () => t && console.warn(`别调用了欧尼酱~,这会儿没啥实际用途;没有根据CommandDialogInjectKey接收到注入数据.原因可能有两个:
    1.你可能对getCommandDialogConsumer进行了异步调用或条件调用,请在setup中直接调用.
    2.你没有在命令弹窗内展示该组件,这个时候你一般可以忽略该警告消息.`);
  return B(R, new Proxy({}, {
    get: () => o,
    apply: o
  }));
}, X = (t = !0) => {
  const o = I(), {
    locale: {
      t: e
    }
  } = $("message-box");
  return (n, s = {}) => {
    const d = k(t), i = U(o, A(/* @__PURE__ */ E({
      setup() {
        const m = k(), p = (g) => {
          g(), i.destroy();
        }, v = () => {
          i.emit(u.destory);
        }, h = () => {
          Promise.resolve().then(() => {
            i.componentRef = m;
          });
        };
        return () => y(q, N({
          ref: m,
          modelValue: d.value,
          beforeClose: p,
          onClosed: v,
          onVnodeMounted: h
        }, {
          title: s.title,
          width: s.width,
          ...s.attrs
        }), {
          default: () => n,
          footer: () => y("div", null, [s[w(u.cancel)] && y(P("el-button"), {
            onClick: () => i.emit(u.cancel)
          }, {
            default: () => [s.cancelBtnText || e("el.messagebox.cancel")]
          }), s[w(u.confirm)] && y(P("el-button"), {
            type: "primary",
            onClick: () => i.emit(u.confirm)
          }, {
            default: () => [s.confirmBtnText || e("el.messagebox.confirm")]
          })]),
          ...s.slots
        });
      }
    })), {
      provideProps: s.provideProps || {},
      appendTo: s.appendTo,
      visible: d
    });
    return Object.entries(s).filter(([m, p]) => m.startsWith("on") && typeof p == "function").forEach(([m, p]) => {
      const v = L(m);
      i.on(v, p);
    }), i;
  };
};
export {
  R as CommandDialogConsumerInjectKey,
  U as CommandDialogProvider,
  j as CommandDialogStackInjectKey,
  u as EVENT_NAME,
  X as createElementPlusDialog,
  Q as getCommandDialogConsumer
};