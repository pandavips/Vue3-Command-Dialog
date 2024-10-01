(function(s,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue"),require("element-plus")):typeof define=="function"&&define.amd?define(["exports","vue","element-plus"],e):(s=typeof globalThis<"u"?globalThis:s||self,e(s.Vue3CommandDialog={},s.Vue,s.ElementPlus))})(this,function(s,e,y){"use strict";var V=Object.defineProperty;var W=(s,e,y)=>e in s?V(s,e,{enumerable:!0,configurable:!0,writable:!0,value:y}):s[e]=y;var x=(s,e,y)=>W(s,typeof e!="symbol"?e+"":e,y);class T{constructor(){x(this,"map",new WeakMap)}getEventsMapByConsumer(n){let t=this.map.get(n);return t||(t=new Map,this.map.set(n,t)),t}getEventsByConsumer(n,t){const i=this.getEventsMapByConsumer(n);let r=i.get(t);return r||(r=new Set,i.set(t,r)),r}on(n,t,i,r={}){const a=this.getEventsByConsumer(n,t);let u=i;r.once&&(u=(...m)=>{i(...m),this.off(n,t,u)}),a.add(u),r.callAfterDelay!==void 0&&setTimeout(()=>{u()},r.callAfterDelay||0)}once(n,t,i){this.on(n,t,i,{once:!0})}emit(n,t,...i){this.getEventsByConsumer(n,t).forEach(a=>a(...i))}off(n,t,i){this.getEventsByConsumer(n,t).delete(i)}}const B=(o="")=>o.slice(2).toLowerCase(),P=(o="")=>`on${o.charAt(0).toUpperCase()}${o.slice(1)}`,S=()=>{let o=()=>{},n=()=>{};return{promise:new Promise((i,r)=>{o=i,n=r}),resolve:o,reject:n}};var C=(o=>(o.confirm="confirm",o.cancel="cancel",o.destory="destory",o))(C||{});const b=Symbol("CommandDialogConsumerInjectKey"),j=Symbol("CommandDialogStackInjectKey"),g=new T,k=o=>({...o.parent?k(o.parent):{},...o.provides});function E(o,n,t){const i=(typeof t.appendTo=="string"?document.querySelector(t.appendTo):t.appendTo)||document.body,r=document.createElement("div");i.appendChild(r);const a=()=>{t.visible.value=!1},u=()=>{t.visible.value=!0},m=()=>{e.nextTick(()=>{e.render(null,r),r.remove()})},p=(l=!1)=>{l?(c.on(C.destory,m,{once:!0,callAfterDelay:3e3}),a()):c.stack.splice(c.stackIndex).forEach(d=>d.destroy(!0))},{promise:f,resolve:v,reject:D}=S(),c={promise:f,resolve:v,reject:D,destroyWithResolve:l=>{v(l),p()},destroyWithReject:l=>{D(l),p()},hide:a,show:u,destroy:p,container:r,visible:t.visible,on:(l,d,R={})=>g.on(c,l,d,R),once:(l,d)=>g.once(c,l,d),emit:(l,...d)=>g.emit(c,l,...d),off:(l,d)=>g.off(c,l,d),stack:[],stackIndex:-1,componentRef:void 0},N=e.defineComponent({setup(){for(const d in t.provideProps)e.provide(d,t.provideProps[d]);e.provide(b,c);const l=e.inject(j,[]);return c.stackIndex=l.length,l.push(c),e.provide(j,l),c.stack=l,()=>n}}),h=e.createVNode(N,null,null);return h.appContext=(o==null?void 0:o.appContext)||h.appContext,h.appContext.provides={...h.appContext.provides,...k(o)},e.render(h,r),c}const M=(o=!0)=>{const n=()=>o&&console.warn(`别调用了欧尼酱~,这会儿没啥实际用途;没有根据CommandDialogInjectKey接收到注入数据.原因可能有两个:
    1.你可能对getCommandDialogConsumer进行了异步调用或条件调用,请在setup中直接调用.
    2.你没有在命令弹窗内展示该组件,这个时候你一般可以忽略该警告消息.`);return e.inject(b,new Proxy({},{get:()=>n,apply:n}))},K=(o=!0)=>{const n=e.getCurrentInstance(),{locale:{t}}=y.useGlobalComponentSettings("message-box");return(r,a={})=>{const u=e.ref(o),m=E(n,e.h(e.defineComponent({setup(){const p=e.ref(),f=w=>{w(),m.destroy()},v=()=>{m.emit(C.destory)},D=()=>{Promise.resolve().then(()=>{m.componentRef=p})};return()=>e.createVNode(y.ElDialog,e.mergeProps({ref:p,modelValue:u.value,beforeClose:f,onClosed:v,onVnodeMounted:D},{title:a.title,width:a.width,...a.attrs}),{default:()=>r,footer:()=>e.createVNode("div",null,[a[P(C.cancel)]&&e.createVNode(e.resolveComponent("el-button"),{onClick:()=>m.emit(C.cancel)},{default:()=>[a.cancelBtnText||t("el.messagebox.cancel")]}),a[P(C.confirm)]&&e.createVNode(e.resolveComponent("el-button"),{type:"primary",onClick:()=>m.emit(C.confirm)},{default:()=>[a.confirmBtnText||t("el.messagebox.confirm")]})]),...a.slots})}})),{provideProps:a.provideProps||{},appendTo:a.appendTo,visible:u});return Object.entries(a).filter(([p,f])=>p.startsWith("on")&&typeof f=="function").forEach(([p,f])=>{const v=B(p);m.on(v,f)}),m}};s.CommandDialogConsumerInjectKey=b,s.CommandDialogProvider=E,s.CommandDialogStackInjectKey=j,s.EVENT_NAME=C,s.createElementPlusDialog=K,s.getCommandDialogConsumer=M,Object.defineProperty(s,Symbol.toStringTag,{value:"Module"})});