(function(u,s){typeof exports=="object"&&typeof module<"u"?s(exports,require("vue"),require("element-plus"),require("vant")):typeof define=="function"&&define.amd?define(["exports","vue","element-plus","vant"],s):(u=typeof globalThis<"u"?globalThis:u||self,s(u.Vue3CommandDialog={},u.Vue,u.ElementPlus,u.Vant))})(this,function(u,s,v,Ve){"use strict";var wr=Object.defineProperty;var Or=(u,s,v)=>s in u?wr(u,s,{enumerable:!0,configurable:!0,writable:!0,value:v}):u[s]=v;var ze=(u,s,v)=>Or(u,typeof s!="symbol"?s+"":s,v);var b=(e=>(e.confirm="confirm",e.cancel="cancel",e.destory="destory",e))(b||{});class ee{constructor(){ze(this,"map",new WeakMap)}getEventsMapByConsumer(t){let n=this.map.get(t);return n||(n=new Map,this.map.set(t,n)),n}getEventsByConsumer(t,n){const r=this.getEventsMapByConsumer(t);let o=r.get(n);return o||(o=new Set,r.set(n,o)),o}on(t,n,r,o={}){const a=this.getEventsByConsumer(t,n);let c=r;o.once&&(c=(...i)=>{r(...i),this.off(t,n,c)}),a.add(c),o.callAfterDelay!==void 0&&setTimeout(()=>{c()},o.callAfterDelay||0)}once(t,n,r){this.on(t,n,r,{once:!0})}emit(t,n,...r){this.getEventsByConsumer(t,n).forEach(a=>a(...r))}off(t,n,r){this.getEventsByConsumer(t,n).delete(r)}}const te=(e="")=>e.slice(2).toLowerCase(),F=(e="")=>`on${e.charAt(0).toUpperCase()}${e.slice(1)}`,ne=()=>{let e=()=>{},t=()=>{};return{promise:new Promise((r,o)=>{e=r,t=o}),resolve:e,reject:t}},Ue=e=>{var r;const t=((r=e.parentElement)==null?void 0:r.children)||[];let n=0;return Array.from(t).forEach(o=>{if(o!==e){const a=parseInt(window.getComputedStyle(o).zIndex);!isNaN(a)&&a>n&&(n=a)}}),n},K=Symbol("CommandDialogConsumerInjectKey"),G=Symbol("CommandDialogStackInjectKey"),I=new ee,re=e=>({...e.parent?re(e.parent):{},...e.provides});function N(e,t,n){const r=(typeof n.appendTo=="string"?document.querySelector(n.appendTo):n.appendTo)||document.body,o=document.createElement("div");o.className=n.customClassName||"command-commponent-container",r.appendChild(o);const a=()=>{n.visible.value=!1},c=()=>{n.visible.value=!0},i=()=>{s.nextTick(()=>{s.render(null,o),o.remove()})},l=(h=!1)=>{h?(m.on(b.destory,i,{once:!0,callAfterDelay:3e3}),a()):m.stack.splice(m.stackIndex).forEach(y=>y.destroy(!0))},{promise:p,resolve:f,reject:g}=ne(),m={promise:p,resolve:f,reject:g,destroyWithResolve:h=>{f(h),l()},destroyWithReject:h=>{g(h),l()},hide:a,show:c,destroy:l,container:o,visible:n.visible,on:(h,y,jr={})=>I.on(m,h,y,jr),once:(h,y)=>I.once(m,h,y),emit:(h,...y)=>I.emit(m,h,...y),off:(h,y)=>I.off(m,h,y),stack:[],stackIndex:-1,componentRef:void 0},Pr=s.defineComponent({setup(){for(const y in n.provideProps)s.provide(y,n.provideProps[y]);s.provide(K,m);const h=s.inject(G,[]);return m.stackIndex=h.length,h.push(m),s.provide(G,h),m.stack=h,()=>t}}),D=s.createVNode(Pr,null,null);return D.appContext=(e==null?void 0:e.appContext)||D.appContext,D.appContext.provides={...D.appContext.provides,...re(e)},s.render(D,o),m}const oe=(e=!0)=>{const t=()=>e&&console.warn(`别调用了欧尼酱~,这会儿没啥实际用途;没有根据CommandDialogInjectKey接收到注入数据.原因可能有两个:
    1.你可能对getConsumer进行了异步调用或条件调用,请在setup中直接调用.
    2.你没有在命令弹窗内展示该组件,这个时候你一般可以忽略该警告消息.`);return s.inject(K,()=>new Proxy({},{get:()=>t,apply:t}),!0)},Fe=(...e)=>(console.warn("Warning: This API will be deprecated in the future, please use `getConsumer` instead."),oe(...e));let ae;const Ke=e=>{ae=e},Ge=(e=!0)=>{const t=s.getCurrentInstance(),{locale:{t:n}}=v.useGlobalComponentSettings("message-box");return(o,a={})=>{const c=s.ref(e),i=N(t,s.h(s.defineComponent({setup(){const l=s.ref(),p=O=>{O(),i.destroy()},f=()=>{i.emit(b.destory)},g=()=>{Promise.resolve().then(()=>{i.componentRef=l})};return()=>s.createVNode(v.ElDialog,s.mergeProps({ref:l,modelValue:c.value,beforeClose:p,onClosed:f,onVnodeMounted:g},{title:a.title,width:a.width,...a.attrs}),{default:()=>o,footer:()=>s.createVNode("div",null,[a[F(b.cancel)]&&s.createVNode(v.ElButton,{onClick:()=>i.emit(b.cancel)},{default:()=>[a.cancelBtnText||n("el.messagebox.cancel")]}),a[F(b.confirm)]&&s.createVNode(v.ElButton,{type:"primary",onClick:()=>i.emit(b.confirm)},{default:()=>[a.confirmBtnText||n("el.messagebox.confirm")]})]),...a.slots})}})),{provideProps:a.provideProps||{},appendTo:ae||a.appendTo,visible:c});return Object.entries(a).filter(([l,p])=>l.startsWith("on")&&typeof p=="function").forEach(([l,p])=>{const f=te(l);i.on(f,p)}),i}};let ie;const He=e=>{ie=e},We=(e=!0)=>{const t=s.getCurrentInstance();return(r,o={})=>{const a=s.ref(e),c=N(t,s.h(s.defineComponent({setup(){const i=s.ref(),l=g=>{g(),c.destroy()},p=()=>{c.emit(b.destory)},f=()=>{Promise.resolve().then(()=>{c.componentRef=i})};return()=>s.createVNode(v.ElDrawer,s.mergeProps({ref:i,modelValue:a.value,beforeClose:l,onClosed:p,onVnodeMounted:f},{title:o.title,size:o.size,...o.attrs}),{default:()=>r,...o.slots})}})),{provideProps:o.provideProps||{},appendTo:ie||o.appendTo,visible:a});return c}};var se=typeof global=="object"&&global&&global.Object===Object&&global,Le=typeof self=="object"&&self&&self.Object===Object&&self,P=se||Le||Function("return this")(),M=P.Symbol,ue=Object.prototype,qe=ue.hasOwnProperty,Ze=ue.toString,E=M?M.toStringTag:void 0;function Xe(e){var t=qe.call(e,E),n=e[E];try{e[E]=void 0;var r=!0}catch{}var o=Ze.call(e);return r&&(t?e[E]=n:delete e[E]),o}var Je=Object.prototype,Ye=Je.toString;function Qe(e){return Ye.call(e)}var ke="[object Null]",et="[object Undefined]",ce=M?M.toStringTag:void 0;function x(e){return e==null?e===void 0?et:ke:ce&&ce in Object(e)?Xe(e):Qe(e)}function S(e){return e!=null&&typeof e=="object"}var H=Array.isArray;function C(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function le(e){return e}var tt="[object AsyncFunction]",nt="[object Function]",rt="[object GeneratorFunction]",ot="[object Proxy]";function W(e){if(!C(e))return!1;var t=x(e);return t==nt||t==rt||t==tt||t==ot}var L=P["__core-js_shared__"],de=function(){var e=/[^.]+$/.exec(L&&L.keys&&L.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function at(e){return!!de&&de in e}var it=Function.prototype,st=it.toString;function ut(e){if(e!=null){try{return st.call(e)}catch{}try{return e+""}catch{}}return""}var ct=/[\\^$.*+?()[\]{}|]/g,lt=/^\[object .+?Constructor\]$/,dt=Function.prototype,ft=Object.prototype,pt=dt.toString,ht=ft.hasOwnProperty,mt=RegExp("^"+pt.call(ht).replace(ct,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function gt(e){if(!C(e)||at(e))return!1;var t=W(e)?mt:lt;return t.test(ut(e))}function yt(e,t){return e==null?void 0:e[t]}function q(e,t){var n=yt(e,t);return gt(n)?n:void 0}var fe=Object.create,vt=function(){function e(){}return function(t){if(!C(t))return{};if(fe)return fe(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();function bt(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function _t(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}var Ct=800,Tt=16,Pt=Date.now;function jt(e){var t=0,n=0;return function(){var r=Pt(),o=Tt-(r-n);if(n=r,o>0){if(++t>=Ct)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}function wt(e){return function(){return e}}var B=function(){try{var e=q(Object,"defineProperty");return e({},"",{}),e}catch{}}(),Ot=B?function(e,t){return B(e,"toString",{configurable:!0,enumerable:!1,value:wt(t),writable:!0})}:le,Et=jt(Ot),St=9007199254740991,At=/^(?:0|[1-9]\d*)$/;function pe(e,t){var n=typeof e;return t=t??St,!!t&&(n=="number"||n!="symbol"&&At.test(e))&&e>-1&&e%1==0&&e<t}function Z(e,t,n){t=="__proto__"&&B?B(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function R(e,t){return e===t||e!==e&&t!==t}var $t=Object.prototype,Dt=$t.hasOwnProperty;function It(e,t,n){var r=e[t];(!(Dt.call(e,t)&&R(r,n))||n===void 0&&!(t in e))&&Z(e,t,n)}function Nt(e,t,n,r){var o=!n;n||(n={});for(var a=-1,c=t.length;++a<c;){var i=t[a],l=void 0;l===void 0&&(l=e[i]),o?Z(n,i,l):It(n,i,l)}return n}var he=Math.max;function Mt(e,t,n){return t=he(t===void 0?e.length-1:t,0),function(){for(var r=arguments,o=-1,a=he(r.length-t,0),c=Array(a);++o<a;)c[o]=r[t+o];o=-1;for(var i=Array(t+1);++o<t;)i[o]=r[o];return i[t]=n(c),bt(e,this,i)}}function xt(e,t){return Et(Mt(e,t,le),e+"")}var Bt=9007199254740991;function me(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Bt}function X(e){return e!=null&&me(e.length)&&!W(e)}function Rt(e,t,n){if(!C(n))return!1;var r=typeof t;return(r=="number"?X(n)&&pe(t,n.length):r=="string"&&t in n)?R(n[t],e):!1}function zt(e){return xt(function(t,n){var r=-1,o=n.length,a=o>1?n[o-1]:void 0,c=o>2?n[2]:void 0;for(a=e.length>3&&typeof a=="function"?(o--,a):void 0,c&&Rt(n[0],n[1],c)&&(a=o<3?void 0:a,o=1),t=Object(t);++r<o;){var i=n[r];i&&e(t,i,r,a)}return t})}var Vt=Object.prototype;function ge(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||Vt;return e===n}function Ut(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var Ft="[object Arguments]";function ye(e){return S(e)&&x(e)==Ft}var ve=Object.prototype,Kt=ve.hasOwnProperty,Gt=ve.propertyIsEnumerable,J=ye(function(){return arguments}())?ye:function(e){return S(e)&&Kt.call(e,"callee")&&!Gt.call(e,"callee")};function Ht(){return!1}var be=typeof u=="object"&&u&&!u.nodeType&&u,_e=be&&typeof module=="object"&&module&&!module.nodeType&&module,Wt=_e&&_e.exports===be,Ce=Wt?P.Buffer:void 0,Lt=Ce?Ce.isBuffer:void 0,Te=Lt||Ht,qt="[object Arguments]",Zt="[object Array]",Xt="[object Boolean]",Jt="[object Date]",Yt="[object Error]",Qt="[object Function]",kt="[object Map]",en="[object Number]",tn="[object Object]",nn="[object RegExp]",rn="[object Set]",on="[object String]",an="[object WeakMap]",sn="[object ArrayBuffer]",un="[object DataView]",cn="[object Float32Array]",ln="[object Float64Array]",dn="[object Int8Array]",fn="[object Int16Array]",pn="[object Int32Array]",hn="[object Uint8Array]",mn="[object Uint8ClampedArray]",gn="[object Uint16Array]",yn="[object Uint32Array]",d={};d[cn]=d[ln]=d[dn]=d[fn]=d[pn]=d[hn]=d[mn]=d[gn]=d[yn]=!0,d[qt]=d[Zt]=d[sn]=d[Xt]=d[un]=d[Jt]=d[Yt]=d[Qt]=d[kt]=d[en]=d[tn]=d[nn]=d[rn]=d[on]=d[an]=!1;function vn(e){return S(e)&&me(e.length)&&!!d[x(e)]}function bn(e){return function(t){return e(t)}}var Pe=typeof u=="object"&&u&&!u.nodeType&&u,A=Pe&&typeof module=="object"&&module&&!module.nodeType&&module,_n=A&&A.exports===Pe,Y=_n&&se.process,je=function(){try{var e=A&&A.require&&A.require("util").types;return e||Y&&Y.binding&&Y.binding("util")}catch{}}(),we=je&&je.isTypedArray,Oe=we?bn(we):vn;function Cn(e,t){var n=H(e),r=!n&&J(e),o=!n&&!r&&Te(e),a=!n&&!r&&!o&&Oe(e),c=n||r||o||a,i=c?Ut(e.length,String):[],l=i.length;for(var p in e)c&&(p=="length"||o&&(p=="offset"||p=="parent")||a&&(p=="buffer"||p=="byteLength"||p=="byteOffset")||pe(p,l))||i.push(p);return i}function Tn(e,t){return function(n){return e(t(n))}}function Pn(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var jn=Object.prototype,wn=jn.hasOwnProperty;function On(e){if(!C(e))return Pn(e);var t=ge(e),n=[];for(var r in e)r=="constructor"&&(t||!wn.call(e,r))||n.push(r);return n}function Ee(e){return X(e)?Cn(e):On(e)}var $=q(Object,"create");function En(){this.__data__=$?$(null):{},this.size=0}function Sn(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var An="__lodash_hash_undefined__",$n=Object.prototype,Dn=$n.hasOwnProperty;function In(e){var t=this.__data__;if($){var n=t[e];return n===An?void 0:n}return Dn.call(t,e)?t[e]:void 0}var Nn=Object.prototype,Mn=Nn.hasOwnProperty;function xn(e){var t=this.__data__;return $?t[e]!==void 0:Mn.call(t,e)}var Bn="__lodash_hash_undefined__";function Rn(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=$&&t===void 0?Bn:t,this}function T(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}T.prototype.clear=En,T.prototype.delete=Sn,T.prototype.get=In,T.prototype.has=xn,T.prototype.set=Rn;function zn(){this.__data__=[],this.size=0}function z(e,t){for(var n=e.length;n--;)if(R(e[n][0],t))return n;return-1}var Vn=Array.prototype,Un=Vn.splice;function Fn(e){var t=this.__data__,n=z(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():Un.call(t,n,1),--this.size,!0}function Kn(e){var t=this.__data__,n=z(t,e);return n<0?void 0:t[n][1]}function Gn(e){return z(this.__data__,e)>-1}function Hn(e,t){var n=this.__data__,r=z(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function _(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}_.prototype.clear=zn,_.prototype.delete=Fn,_.prototype.get=Kn,_.prototype.has=Gn,_.prototype.set=Hn;var Se=q(P,"Map");function Wn(){this.size=0,this.__data__={hash:new T,map:new(Se||_),string:new T}}function Ln(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function V(e,t){var n=e.__data__;return Ln(t)?n[typeof t=="string"?"string":"hash"]:n.map}function qn(e){var t=V(this,e).delete(e);return this.size-=t?1:0,t}function Zn(e){return V(this,e).get(e)}function Xn(e){return V(this,e).has(e)}function Jn(e,t){var n=V(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function j(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}j.prototype.clear=Wn,j.prototype.delete=qn,j.prototype.get=Zn,j.prototype.has=Xn,j.prototype.set=Jn;var Ae=Tn(Object.getPrototypeOf,Object),Yn="[object Object]",Qn=Function.prototype,kn=Object.prototype,$e=Qn.toString,er=kn.hasOwnProperty,tr=$e.call(Object);function nr(e){if(!S(e)||x(e)!=Yn)return!1;var t=Ae(e);if(t===null)return!0;var n=er.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&$e.call(n)==tr}function rr(){this.__data__=new _,this.size=0}function or(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function ar(e){return this.__data__.get(e)}function ir(e){return this.__data__.has(e)}var sr=200;function ur(e,t){var n=this.__data__;if(n instanceof _){var r=n.__data__;if(!Se||r.length<sr-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new j(r)}return n.set(e,t),this.size=n.size,this}function w(e){var t=this.__data__=new _(e);this.size=t.size}w.prototype.clear=rr,w.prototype.delete=or,w.prototype.get=ar,w.prototype.has=ir,w.prototype.set=ur;var De=typeof u=="object"&&u&&!u.nodeType&&u,Ie=De&&typeof module=="object"&&module&&!module.nodeType&&module,cr=Ie&&Ie.exports===De,Ne=cr?P.Buffer:void 0;Ne&&Ne.allocUnsafe;function lr(e,t){return e.slice()}var Me=P.Uint8Array;function dr(e){var t=new e.constructor(e.byteLength);return new Me(t).set(new Me(e)),t}function fr(e,t){var n=dr(e.buffer);return new e.constructor(n,e.byteOffset,e.length)}function pr(e){return typeof e.constructor=="function"&&!ge(e)?vt(Ae(e)):{}}function hr(e){return function(t,n,r){for(var o=-1,a=Object(t),c=r(t),i=c.length;i--;){var l=c[++o];if(n(a[l],l,a)===!1)break}return t}}var mr=hr();function Q(e,t,n){(n!==void 0&&!R(e[t],n)||n===void 0&&!(t in e))&&Z(e,t,n)}function gr(e){return S(e)&&X(e)}function k(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}function yr(e){return Nt(e,Ee(e))}function vr(e,t,n,r,o,a,c){var i=k(e,n),l=k(t,n),p=c.get(l);if(p){Q(e,n,p);return}var f=a?a(i,l,n+"",e,t,c):void 0,g=f===void 0;if(g){var O=H(l),U=!O&&Te(l),m=!O&&!U&&Oe(l);f=l,O||U||m?H(i)?f=i:gr(i)?f=_t(i):U?(g=!1,f=lr(l)):m?(g=!1,f=fr(l)):f=[]:nr(l)||J(l)?(f=i,J(i)?f=yr(i):(!C(i)||W(i))&&(f=pr(l))):g=!1}g&&(c.set(l,f),o(f,l,r,a,c),c.delete(l)),Q(e,n,f)}function xe(e,t,n,r,o){e!==t&&mr(t,function(a,c){if(o||(o=new w),C(a))vr(e,t,c,n,xe,r,o);else{var i=r?r(k(e,c),a,c+"",e,t,o):void 0;i===void 0&&(i=a),Q(e,c,i)}},Ee)}var br=zt(function(e,t,n){xe(e,t,n)});let Be;const _r=e=>{Be=e},Cr={round:!0,lockScroll:!0,closeable:!0,style:{backgroundColor:"#fff",color:"#000"}},Re=(e=!0)=>{const t=s.getCurrentInstance();return(r,o={})=>{const a=s.ref(e),c=N(t,s.h(s.defineComponent({setup(){const i=s.ref(),l=()=>{c.destroy()},p=()=>{c.emit(b.destory)},f=()=>{Promise.resolve().then(()=>{c.componentRef=i})};return()=>s.createVNode(Ve.Popup,s.mergeProps({ref:i,show:a.value,onClickCloseIcon:l,onClosed:p,onVnodeMounted:f},{...Cr,...o.attrs}),{default:()=>r,...o.slots})}})),{provideProps:o.provideProps||{},appendTo:Be||o.appendTo,visible:a});return c}},Tr=(e=!0)=>{const t=Re(e);return(n,r={})=>(br(r,{attrs:{position:"bottom",style:{width:"100vw"}}}),t(n,r))};u.CommandDialogConsumerInjectKey=K,u.CommandDialogStackInjectKey=G,u.CommandProvider=N,u.ConsumerEventBus=ee,u.EVENT_NAME=b,u.PromiseWithResolvers=ne,u.busName2EventName=F,u.createElementPlusDialog=Ge,u.createElementPlusDrawer=We,u.createVantUiPopup=Re,u.createVantUiPopupOnBottom=Tr,u.eventName2BusName=te,u.getCommandDialogConsumer=Fe,u.getConsumer=oe,u.getMaxZIndex=Ue,u.setElementPlusDialogMountNode=Ke,u.setElementPlusDrawerMountNode=He,u.setVantUiPopupMountNode=_r,Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})});
