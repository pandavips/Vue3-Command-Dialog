import{C as ke,E as Te,g as Fe,c as te}from"./ElementPlusDialog-C-wiD3pA.js";import{k as ze,l as G,q as Ne,s as N,t as fe,n as ve,u as me,v as k,f as v,e as Le,j as L,d as P,x as Z,a as f,i as pe,m as T,y as Re,T as ge,z as Ee,A as ye,B as Ce,p as F,F as U,h as Ve,C as je,c as K,D as j,E as ne,w as _,G as Me,r as z,o as W,b as w}from"./index-U4DkV0-G.js";function Ye(){}const q=Object.assign,Ue=typeof window<"u",J=e=>e!==null&&typeof e=="object",O=e=>e!=null,X=e=>typeof e=="function",Ke=e=>J(e)&&X(e.then)&&X(e.catch),he=e=>typeof e=="number"||/^\d+(\.\d+)?$/.test(e),We=()=>Ue?/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()):!1;function oe(e,t){const n=t.split(".");let o=e;return n.forEach(s=>{var u;o=J(o)&&(u=o[s])!=null?u:""}),o}const be=null,h=[Number,String],D={type:Boolean,default:!0},I=e=>({type:String,default:e});var Q=typeof window<"u";function we(e){let t;fe(()=>{e(),ve(()=>{t=!0})}),me(()=>{t&&e()})}function Be(e,t,n={}){if(!Q)return;const{target:o=window,passive:s=!1,capture:u=!1}=n;let l=!1,a;const i=d=>{if(l)return;const m=k(d);m&&!a&&(m.addEventListener(e,t,{capture:u,passive:s}),a=!0)},r=d=>{if(l)return;const m=k(d);m&&a&&(m.removeEventListener(e,t,u),a=!1)};ze(()=>r(o)),G(()=>r(o)),we(()=>i(o));let c;return Ne(o)&&(c=N(o,(d,m)=>{r(m),i(d)})),()=>{c==null||c(),r(o),l=!0}}var $,M;function Xe(){if(!$&&($=v(0),M=v(0),Q)){const e=()=>{$.value=window.innerWidth,M.value=window.innerHeight};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",e,{passive:!0})}return{width:$,height:M}}var He=/scroll|auto|overlay/i,Ge=Q?window:void 0;function Ze(e){return e.tagName!=="HTML"&&e.tagName!=="BODY"&&e.nodeType===1}function qe(e,t=Ge){let n=e;for(;n&&n!==t&&Ze(n);){const{overflowY:o}=window.getComputedStyle(n);if(He.test(o))return n;n=n.parentNode}return t}We();const Je=e=>e.stopPropagation();function De(e,t){(typeof e.cancelable!="boolean"||e.cancelable)&&e.preventDefault(),Je(e)}Xe();function B(e){if(O(e))return he(e)?`${e}px`:String(e)}function Qe(e){const t={};return e!==void 0&&(t.zIndex=+e),t}const et=/-(\w)/g,Pe=e=>e.replace(et,(t,n)=>n.toUpperCase()),{hasOwnProperty:tt}=Object.prototype;function nt(e,t,n){const o=t[n];O(o)&&(!tt.call(e,n)||!J(o)?e[n]=o:e[n]=_e(Object(e[n]),o))}function _e(e,t){return Object.keys(t).forEach(n=>{nt(e,t,n)}),e}var ot={name:"姓名",tel:"电话",save:"保存",clear:"清空",cancel:"取消",confirm:"确认",delete:"删除",loading:"加载中...",noCoupon:"暂无优惠券",nameEmpty:"请填写姓名",addContact:"添加联系人",telInvalid:"请填写正确的电话",vanCalendar:{end:"结束",start:"开始",title:"日期选择",weekdays:["日","一","二","三","四","五","六"],monthTitle:(e,t)=>`${e}年${t}月`,rangePrompt:e=>`最多选择 ${e} 天`},vanCascader:{select:"请选择"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计:"},vanCoupon:{unlimited:"无门槛",discount:e=>`${e}折`,condition:e=>`满${e}元可用`},vanCouponCell:{title:"优惠券",count:e=>`${e}张可用`},vanCouponList:{exchange:"兑换",close:"不使用",enable:"可用",disabled:"不可用",placeholder:"输入优惠码"},vanAddressEdit:{area:"地区",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",addressDetail:"详细地址",defaultAddress:"设为默认收货地址"},vanAddressList:{add:"新增地址"}};const ae=v("zh-CN"),se=Le({"zh-CN":ot}),at={messages(){return se[ae.value]},use(e,t){ae.value=e,this.add({[e]:t})},add(e={}){_e(se,e)}};var st=at;function ut(e){const t=Pe(e)+".";return(n,...o)=>{const s=st.messages(),u=oe(s,t+n)||oe(s,n);return X(u)?u(...o):u}}function H(e,t){return t?typeof t=="string"?` ${e}--${t}`:Array.isArray(t)?t.reduce((n,o)=>n+H(e,o),""):Object.keys(t).reduce((n,o)=>n+(t[o]?H(e,o):""),""):""}function lt(e){return(t,n)=>(t&&typeof t!="string"&&(n=t,t=""),t=t?`${e}__${t}`:e,`${t}${H(t,n)}`)}function x(e){const t=`van-${e}`;return[t,lt(t),ut(t)]}const rt="van-haptics-feedback",ue=5;function it(e,{args:t=[],done:n,canceled:o,error:s}){if(e){const u=e.apply(null,t);Ke(u)?u.then(l=>{l?n():o&&o()}).catch(s||Ye):u?n():o&&o()}else n()}function R(e){return e.install=t=>{const{name:n}=e;n&&(t.component(n,e),t.component(Pe(`-${n}`),e))},e}const ct=Symbol();function dt(e){const t=L();t&&q(t.proxy,e)}const[ft,le]=x("badge"),vt={dot:Boolean,max:h,tag:I("div"),color:String,offset:Array,content:h,showZero:D,position:I("top-right")};var mt=P({name:ft,props:vt,setup(e,{slots:t}){const n=()=>{if(t.content)return!0;const{content:a,showZero:i}=e;return O(a)&&a!==""&&(i||a!==0&&a!=="0")},o=()=>{const{dot:a,max:i,content:r}=e;if(!a&&n())return t.content?t.content():O(i)&&he(r)&&+r>+i?`${i}+`:r},s=a=>a.startsWith("-")?a.replace("-",""):`-${a}`,u=Z(()=>{const a={background:e.color};if(e.offset){const[i,r]=e.offset,{position:c}=e,[d,m]=c.split("-");t.default?(typeof r=="number"?a[d]=B(d==="top"?r:-r):a[d]=d==="top"?B(r):s(r),typeof i=="number"?a[m]=B(m==="left"?i:-i):a[m]=m==="left"?B(i):s(i)):(a.marginTop=B(r),a.marginLeft=B(i))}return a}),l=()=>{if(n()||e.dot)return f("div",{class:le([e.position,{dot:e.dot,fixed:!!t.default}]),style:u.value},[o()])};return()=>{if(t.default){const{tag:a}=e;return f(a,{class:le("wrapper")},{default:()=>[t.default(),l()]})}return l()}}});const pt=R(mt);let gt=2e3;const Et=()=>++gt,[yt,Yt]=x("config-provider"),Ct=Symbol(yt),[ht,re]=x("icon"),bt=e=>e==null?void 0:e.includes("/"),wt={dot:Boolean,tag:I("i"),name:String,size:h,badge:h,color:String,badgeProps:Object,classPrefix:String};var Bt=P({name:ht,props:wt,setup(e,{slots:t}){const n=pe(Ct,null),o=Z(()=>e.classPrefix||(n==null?void 0:n.iconPrefix)||re());return()=>{const{tag:s,dot:u,name:l,size:a,badge:i,color:r}=e,c=bt(l);return f(pt,T({dot:u,tag:s,class:[o.value,c?"":`${o.value}-${l}`],style:{color:r,fontSize:B(a)},content:i},e.badgeProps),{default:()=>{var d;return[(d=t.default)==null?void 0:d.call(t),c&&f("img",{class:re("image"),src:l},null)]}})}}});const Dt=R(Bt),Pt={show:Boolean,zIndex:h,overlay:D,duration:h,teleport:[String,Object],lockScroll:D,lazyRender:D,beforeClose:Function,overlayStyle:Object,overlayClass:be,transitionAppear:Boolean,closeOnClickOverlay:D};function _t(e,t){return e>t?"horizontal":t>e?"vertical":""}function It(){const e=v(0),t=v(0),n=v(0),o=v(0),s=v(0),u=v(0),l=v(""),a=v(!0),i=()=>l.value==="vertical",r=()=>l.value==="horizontal",c=()=>{n.value=0,o.value=0,s.value=0,u.value=0,l.value="",a.value=!0};return{move:g=>{const E=g.touches[0];n.value=(E.clientX<0?0:E.clientX)-e.value,o.value=E.clientY-t.value,s.value=Math.abs(n.value),u.value=Math.abs(o.value);const b=10;(!l.value||s.value<b&&u.value<b)&&(l.value=_t(s.value,u.value)),a.value&&(s.value>ue||u.value>ue)&&(a.value=!1)},start:g=>{c(),e.value=g.touches[0].clientX,t.value=g.touches[0].clientY},reset:c,startX:e,startY:t,deltaX:n,deltaY:o,offsetX:s,offsetY:u,direction:l,isVertical:i,isHorizontal:r,isTap:a}}let S=0;const ie="van-overflow-hidden";function Ot(e,t){const n=It(),o="01",s="10",u=c=>{n.move(c);const d=n.deltaY.value>0?s:o,m=qe(c.target,e.value),{scrollHeight:g,offsetHeight:E,scrollTop:b}=m;let y="11";b===0?y=E>=g?"00":"01":b+E>=g&&(y="10"),y!=="11"&&n.isVertical()&&!(parseInt(y,2)&parseInt(d,2))&&De(c)},l=()=>{document.addEventListener("touchstart",n.start),document.addEventListener("touchmove",u,{passive:!1}),S||document.body.classList.add(ie),S++},a=()=>{S&&(document.removeEventListener("touchstart",n.start),document.removeEventListener("touchmove",u),S--,S||document.body.classList.remove(ie))},i=()=>t()&&l(),r=()=>t()&&a();we(i),G(r),Re(r),N(t,c=>{c?l():a()})}function Ie(e){const t=v(!1);return N(e,n=>{n&&(t.value=n)},{immediate:!0}),n=>()=>t.value?n():null}const ce=()=>{var e;const{scopeId:t}=((e=L())==null?void 0:e.vnode)||{};return t?{[t]:""}:null},[St,xt]=x("overlay"),At={show:Boolean,zIndex:h,duration:h,className:be,lockScroll:D,lazyRender:D,customStyle:Object,teleport:[String,Object]};var $t=P({name:St,props:At,setup(e,{slots:t}){const n=v(),o=Ie(()=>e.show||!e.lazyRender),s=l=>{e.lockScroll&&De(l)},u=o(()=>{var l;const a=q(Qe(e.zIndex),e.customStyle);return O(e.duration)&&(a.animationDuration=`${e.duration}s`),ye(f("div",{ref:n,style:a,class:[xt(),e.className]},[(l=t.default)==null?void 0:l.call(t)]),[[Ce,e.show]])});return Be("touchmove",s,{target:n}),()=>{const l=f(ge,{name:"van-fade",appear:!0},{default:u});return e.teleport?f(Ee,{to:e.teleport},{default:()=>[l]}):l}}});const kt=R($t),Tt=q({},Pt,{round:Boolean,position:I("center"),closeIcon:I("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:I("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[Ft,de]=x("popup");var zt=P({name:Ft,inheritAttrs:!1,props:Tt,emits:["open","close","opened","closed","keydown","update:show","clickOverlay","clickCloseIcon"],setup(e,{emit:t,attrs:n,slots:o}){let s,u;const l=v(),a=v(),i=Ie(()=>e.show||!e.lazyRender),r=Z(()=>{const p={zIndex:l.value};if(O(e.duration)){const C=e.position==="center"?"animationDuration":"transitionDuration";p[C]=`${e.duration}s`}return p}),c=()=>{s||(s=!0,l.value=e.zIndex!==void 0?+e.zIndex:Et(),t("open"))},d=()=>{s&&it(e.beforeClose,{done(){s=!1,t("close"),t("update:show",!1)}})},m=p=>{t("clickOverlay",p),e.closeOnClickOverlay&&d()},g=()=>{if(e.overlay)return f(kt,T({show:e.show,class:e.overlayClass,zIndex:l.value,duration:e.duration,customStyle:e.overlayStyle,role:e.closeOnClickOverlay?"button":void 0,tabindex:e.closeOnClickOverlay?0:void 0},ce(),{onClick:m}),{default:o["overlay-content"]})},E=p=>{t("clickCloseIcon",p),d()},b=()=>{if(e.closeable)return f(Dt,{role:"button",tabindex:0,name:e.closeIcon,class:[de("close-icon",e.closeIconPosition),rt],classPrefix:e.iconPrefix,onClick:E},null)};let y;const Oe=()=>{y&&clearTimeout(y),y=setTimeout(()=>{t("opened")})},Se=()=>t("closed"),xe=p=>t("keydown",p),Ae=i(()=>{var p;const{round:C,position:A,safeAreaInsetTop:V,safeAreaInsetBottom:$e}=e;return ye(f("div",T({ref:a,style:r.value,role:"dialog",tabindex:0,class:[de({round:C,[A]:A}),{"van-safe-area-top":V,"van-safe-area-bottom":$e}],onKeydown:xe},n,ce()),[(p=o.default)==null?void 0:p.call(o),b()]),[[Ce,e.show]])}),ee=()=>{const{position:p,transition:C,transitionAppear:A}=e,V=p==="center"?"van-fade":`van-popup-slide-${p}`;return f(ge,{name:C||V,appear:A,onAfterEnter:Oe,onAfterLeave:Se},{default:Ae})};return N(()=>e.show,p=>{p&&!s&&(c(),n.tabindex===0&&ve(()=>{var C;(C=a.value)==null||C.focus()})),!p&&s&&(s=!1,t("close"))}),dt({popupRef:a}),Ot(a,()=>e.show&&e.lockScroll),Be("popstate",()=>{e.closeOnPopstate&&(d(),u=!1)}),fe(()=>{e.show&&c()}),me(()=>{u&&(t("update:show",!0),u=!1)}),G(()=>{e.show&&e.teleport&&(d(),u=!0)}),F(ct,()=>e.show),()=>e.teleport?f(Ee,{to:e.teleport},{default:()=>[g(),ee()]}):f(U,null,[g(),ee()])}});const Nt=R(zt),Lt={round:!0,lockScroll:!0,closeable:!0,style:{backgroundColor:"#fff",color:"#000"}},Rt=(e=!0)=>{const t=L();return(o,s={})=>{const u=v(e),l=ke(t,Ve(P({setup(){const a=v(),i=()=>{l.destroy()},r=()=>{l.emit(Te.destory)},c=()=>{Promise.resolve().then(()=>{l.componentRef=a})};return()=>f(Nt,T({ref:a,show:u.value,onClickCloseIcon:i,onClosed:r,onVnodeMounted:c},{...Lt,...s.attrs}),{default:()=>o,...s.slots})}})),{provideProps:s.provideProps||{},appendTo:s.appendTo,visible:u});return l}},Y=P({__name:"Content",setup(e){const t=je().query.nested==="true";F("content","来自Content的🩷~");const n=pe("depth",0);F("depth",n+1);const o=Fe();window.dialogStack=o.stack;const s=L(),u=v();return Promise.resolve().then(()=>{u.value={...s==null?void 0:s.appContext.provides,...s.provides}}),(l,a)=>{const i=z("el-divider"),r=z("el-button");return W(),K(U,null,[f(i),a[2]||(a[2]=j("h3",null,"接收到的注入数据",-1)),j("div",null,ne(u.value),1),f(i),f(r,{onClick:a[0]||(a[0]=c=>k(o).destroy())},{default:_(()=>a[1]||(a[1]=[w("弹窗内部控制关闭")])),_:1}),t?(W(),K(U,{key:0},[f(i),j("h4",null,"弹窗深度:"+ne(k(n)),1),f(Vt)],64)):Me("",!0)],64)}}}),Vt=P({__name:"index",setup(e){F("base","来自base的🩷");const t=te(),n=()=>{t(f(Y,null,null),{title:"基础用法"})},o=()=>{const{hide:i,show:r,destroyWithResolve:c}=t(f(Y,null,null),{title:"外部控制"});[2,4,6].forEach(d=>{setTimeout(()=>{d===2&&i(),d===4&&r(),d===6&&c()},d*1e3)})},s=te(!1),u=()=>{const{show:i}=s(f(Y,null,null),{title:"三秒后打开"});setTimeout(()=>{i()},3e3)},l=Rt(),a=()=>{l(f("div",{style:"color: red; height: 30vh;padding: 20px;"},[w("我是vantUi的弹窗里的内容")]))};return(i,r)=>{const c=z("el-button"),d=z("el-divider");return W(),K("div",null,[f(c,{type:"primary",onClick:n},{default:_(()=>r[0]||(r[0]=[w("打开弹窗")])),_:1}),f(c,{type:"success",onClick:o},{default:_(()=>r[1]||(r[1]=[w("弹窗外部控制显示/隐藏/销毁(过程中弹窗会自动显示关闭)")])),_:1}),f(c,{type:"success",onClick:u},{default:_(()=>r[2]||(r[2]=[w("三秒后打开")])),_:1}),f(d,null,{default:_(()=>r[3]||(r[3]=[w("VantUiのdemo")])),_:1}),f(c,{type:"success",onClick:a},{default:_(()=>r[4]||(r[4]=[w("打开VantUi弹窗")])),_:1})])}}});export{Vt as _,Y as a};
