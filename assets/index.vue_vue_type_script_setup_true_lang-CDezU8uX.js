var H=Object.defineProperty;var Q=(o,t,e)=>t in o?H(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var R=(o,t,e)=>Q(o,typeof t!="symbol"?t+"":t,e);import{a as r,g as j,d as B,p as P,i as O,n as z,u as J,f as D,h as K,r as x,m as A,E as X,j as E,P as Y,k as Z,c as g,l as V,t as S,w as b,q as M,F as W,s as ee,o as U,b as f}from"./index-BSwkN_9S.js";import{Q as te}from"./index-ClEhUJdx.js";class oe{constructor(){R(this,"map",new WeakMap)}getEventsMapByConsumer(t){let e=this.map.get(t);return e||(e=new Map,this.map.set(t,e)),e}getEventsByConsumer(t,e){const n=this.getEventsMapByConsumer(t);let s=n.get(e);return s||(s=new Set,n.set(e,s)),s}on(t,e,n,s={}){const l=this.getEventsByConsumer(t,e);let c=n;s.once&&(c=(...a)=>{n(...a),this.off(t,e,c)}),l.add(c),s.callAfterDelay!==void 0&&setTimeout(()=>{c()},s.callAfterDelay||0)}once(t,e,n){this.on(t,e,n,{once:!0})}emit(t,e,...n){this.getEventsByConsumer(t,e).forEach(l=>l(...n))}off(t,e,n){this.getEventsByConsumer(t,e).delete(n)}}const ne=(o="")=>o.slice(2).toLowerCase(),N=(o="")=>`on${o.charAt(0).toUpperCase()}${o.slice(1)}`,se=()=>{let o=()=>{},t=()=>{};return{promise:new Promise((n,s)=>{o=n,t=s}),resolve:o,reject:t}};var h=(o=>(o.confirm="confirm",o.cancel="cancel",o.destory="destory",o))(h||{});const le=Symbol("CommandDialogConsumerInjectKey"),F=Symbol("CommandDialogStackInjectKey"),T=new oe,$=o=>({...o.parent?$(o.parent):{},...o.provides});function q(o,t,e){const n=(typeof e.appendTo=="string"?document.querySelector(e.appendTo):e.appendTo)||document.body,s=document.createElement("div");s.className="command-commponent-container",n.appendChild(s);const l=()=>{e.visible.value=!1},c=()=>{e.visible.value=!0},a=()=>{z(()=>{j(null,s),s.remove()})},u=(d=!1)=>{d?(v.on(h.destory,a,{once:!0,callAfterDelay:3e3}),l()):v.stack.splice(v.stackIndex).forEach(C=>C.destroy(!0))},{promise:m,resolve:p,reject:i}=se(),v={promise:m,resolve:p,reject:i,destroyWithResolve:d=>{p(d),u()},destroyWithReject:d=>{i(d),u()},hide:l,show:c,destroy:u,container:s,visible:e.visible,on:(d,C,G={})=>T.on(v,d,C,G),once:(d,C)=>T.once(v,d,C),emit:(d,...C)=>T.emit(v,d,...C),off:(d,C)=>T.off(v,d,C),stack:[],stackIndex:-1,componentRef:void 0},w=r(B({setup(){for(const C in e.provideProps)P(C,e.provideProps[C]);P(le,v);const d=O(F,[]);return v.stackIndex=d.length,d.push(v),P(F,d),v.stack=d,()=>t}}),null,null);return w.appContext=(o==null?void 0:o.appContext)||w.appContext,w.appContext.provides={...w.appContext.provides,...$(o)},j(w,s),v}const I=(o=!0)=>{const t=E(),{locale:{t:e}}=J("message-box");return(s,l={})=>{const c=D(o),a=q(t,K(B({setup(){const u=D(),m=y=>{y(),a.destroy()},p=()=>{a.emit(h.destory)},i=()=>{Promise.resolve().then(()=>{a.componentRef=u})};return()=>r(X,A({ref:u,modelValue:c.value,beforeClose:m,onClosed:p,onVnodeMounted:i},{title:l.title,width:l.width,...l.attrs}),{default:()=>s,footer:()=>r("div",null,[l[N(h.cancel)]&&r(x("el-button"),{onClick:()=>a.emit(h.cancel)},{default:()=>[l.cancelBtnText||e("el.messagebox.cancel")]}),l[N(h.confirm)]&&r(x("el-button"),{type:"primary",onClick:()=>a.emit(h.confirm)},{default:()=>[l.confirmBtnText||e("el.messagebox.confirm")]})]),...l.slots})}})),{provideProps:l.provideProps||{},appendTo:l.appendTo,visible:c});return Object.entries(l).filter(([u,m])=>u.startsWith("on")&&typeof m=="function").forEach(([u,m])=>{const p=ne(u);a.on(p,m)}),a}},re={overlay:!0,round:!0,lockScroll:!0,closeable:!0,closeOnClickOverlay:!1,style:{backgroundColor:"#fff",color:"#000"}},L=(o=!0)=>{const t=E();return(n,s={})=>{const l=D(o),c=q(t,K(B({setup(){const a=D(),u=()=>{c.destroy()},m=()=>{c.emit(h.destory)},p=()=>{Promise.resolve().then(()=>{c.componentRef=a})};return()=>r(Y,A({ref:a,show:l.value,onClickCloseIcon:u,onClosed:m,onVnodeMounted:p},{...re,...s.attrs}),{default:()=>n,...s.slots})}})),{provideProps:s.provideProps||{},appendTo:s.appendTo,visible:l});return c}},ae=(o=!0)=>{const t=L(o);return(e,n={})=>{const s=r("div",{class:"w-full h-full"},[n.title&&r("div",{class:"vant-popup-title"},[r("div",{class:"vant-popup-title-text",innerHTML:n.title},null)]),e]);return t(s,n)}},ie=(o=!0)=>{const t=ae(o);return(e,n={})=>(n.attrs||(n.attrs={}),n.attrs.style||(n.attrs.style={}),n.attrs.position="bottom",n.attrs.style.width="100vw",t(e,n))},_=B({__name:"Content",setup(o){const t=Z().query.nested==="true";P("content","来自Content的🩷~");const e=O("depth",0);P("depth",e+1);const n=te();window.dialogStack=n.stack;const s=E(),l=D();return Promise.resolve().then(()=>{l.value={...s==null?void 0:s.appContext.provides,...s.provides}}),(c,a)=>{const u=x("el-divider"),m=x("el-button");return U(),g(W,null,[r(u),a[2]||(a[2]=V("h3",null,"接收到的注入数据",-1)),V("div",null,S(l.value),1),r(u),r(m,{onClick:a[0]||(a[0]=p=>M(n).destroy())},{default:b(()=>a[1]||(a[1]=[f("弹窗内部控制关闭")])),_:1}),t?(U(),g(W,{key:0},[r(u),V("h4",null,"弹窗深度:"+S(M(e)),1),r(ue)],64)):ee("",!0)],64)}}}),ue=B({__name:"index",setup(o){P("base","来自base的🩷");const t=I(),e=()=>{t(r(_,null,null),{title:"基础用法"})},n=()=>{const{hide:p,show:i,destroyWithResolve:y}=t(r(_,null,null),{title:"外部控制"});[2,4,6].forEach(k=>{setTimeout(()=>{k===2&&p(),k===4&&i(),k===6&&y()},k*1e3)})},s=I(!1),l=()=>{const{show:p}=s(r(_,null,null),{title:"三秒后打开"});setTimeout(()=>{p()},3e3)},c=L(),a=()=>{c(r("div",{style:"color: red; height: 30vh;padding: 20px;"},[f("我是vantUi的弹窗里的内容")]))},u=ie(),m=()=>{u(r("div",{style:"color: red; height: 30vh; width: 90vw;"},[f("我是vantUi的弹窗里的内容")]),{title:"VantUi弹窗",attrs:{overlay:!1,position:"center",style:{backgroundColor:"#fff",color:"#000",width:"fit-content"}}})};return(p,i)=>{const y=x("el-button"),k=x("el-divider");return U(),g("div",null,[r(y,{type:"primary",onClick:e},{default:b(()=>i[0]||(i[0]=[f("打开弹窗")])),_:1}),r(y,{type:"success",onClick:n},{default:b(()=>i[1]||(i[1]=[f("弹窗外部控制显示/隐藏/销毁(过程中弹窗会自动显示关闭)")])),_:1}),r(y,{type:"success",onClick:l},{default:b(()=>i[2]||(i[2]=[f("三秒后打开")])),_:1}),r(k,null,{default:b(()=>i[3]||(i[3]=[f("VantUiのdemo")])),_:1}),r(y,{type:"success",onClick:a},{default:b(()=>i[4]||(i[4]=[f("打开VantUi弹窗")])),_:1}),r(y,{type:"success",onClick:m},{default:b(()=>i[5]||(i[5]=[f("打开VantUi弹窗(标题+底部弹出)")])),_:1})])}}});export{ue as _,_ as a};
