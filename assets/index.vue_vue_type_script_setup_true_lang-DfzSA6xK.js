import{bz as Te,aZ as X,bd as Fe,w as z,P as de,$ as fe,aS as ve,R as k,b as v,a5 as ze,J as N,a2 as P,H as Z,ag as f,ad as me,aK as T,U as Ne,aR as pe,bA as ge,aP as Ee,aQ as ye,_ as F,ah as j,bx as Re,bB as Le,a9 as U,au as V,as as ee,an as _,at as Ve,bn as he,a8 as K,ar as w,bC as Ce}from"./index-CNGc4wGV.js";import{C as Me,E as Ye,g as je,c as te}from"./ElementPlusDialog-LLmL4SGc.js";function Ue(){}const G=Object.assign,Ke=typeof window<"u",q=e=>e!==null&&typeof e=="object",O=e=>e!=null,H=e=>typeof e=="function",He=e=>q(e)&&H(e.then)&&H(e.catch),be=e=>typeof e=="number"||/^\d+(\.\d+)?$/.test(e),We=()=>Ke?/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()):!1;function ne(e,t){const n=t.split(".");let o=e;return n.forEach(s=>{var u;o=q(o)&&(u=o[s])!=null?u:""}),o}const we=null,C=[Number,String],D={type:Boolean,default:!0},I=e=>({type:String,default:e});var J=typeof window<"u";function Be(e){let t;de(()=>{e(),fe(()=>{t=!0})}),ve(()=>{t&&e()})}function De(e,t,n={}){if(!J)return;const{target:o=window,passive:s=!1,capture:u=!1}=n;let l=!1,a;const i=d=>{if(l)return;const m=k(d);m&&!a&&(m.addEventListener(e,t,{capture:u,passive:s}),a=!0)},r=d=>{if(l)return;const m=k(d);m&&a&&(m.removeEventListener(e,t,u),a=!1)};Te(()=>r(o)),X(()=>r(o)),Be(()=>i(o));let c;return Fe(o)&&(c=z(o,(d,m)=>{r(m),i(d)})),()=>{c==null||c(),r(o),l=!0}}var $,M;function Xe(){if(!$&&($=v(0),M=v(0),J)){const e=()=>{$.value=window.innerWidth,M.value=window.innerHeight};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",e,{passive:!0})}return{width:$,height:M}}var Ze=/scroll|auto|overlay/i,Ge=J?window:void 0;function qe(e){return e.tagName!=="HTML"&&e.tagName!=="BODY"&&e.nodeType===1}function Je(e,t=Ge){let n=e;for(;n&&n!==t&&qe(n);){const{overflowY:o}=window.getComputedStyle(n);if(Ze.test(o))return n;n=n.parentNode}return t}We();const Qe=e=>e.stopPropagation();function Pe(e,t){(typeof e.cancelable!="boolean"||e.cancelable)&&e.preventDefault(),Qe(e)}Xe();function B(e){if(O(e))return be(e)?`${e}px`:String(e)}function et(e){const t={};return e!==void 0&&(t.zIndex=+e),t}const tt=/-(\w)/g,_e=e=>e.replace(tt,(t,n)=>n.toUpperCase()),{hasOwnProperty:nt}=Object.prototype;function ot(e,t,n){const o=t[n];O(o)&&(!nt.call(e,n)||!q(o)?e[n]=o:e[n]=Ie(Object(e[n]),o))}function Ie(e,t){return Object.keys(t).forEach(n=>{ot(e,t,n)}),e}var at={name:"姓名",tel:"电话",save:"保存",clear:"清空",cancel:"取消",confirm:"确认",delete:"删除",loading:"加载中...",noCoupon:"暂无优惠券",nameEmpty:"请填写姓名",addContact:"添加联系人",telInvalid:"请填写正确的电话",vanCalendar:{end:"结束",start:"开始",title:"日期选择",weekdays:["日","一","二","三","四","五","六"],monthTitle:(e,t)=>`${e}年${t}月`,rangePrompt:e=>`最多选择 ${e} 天`},vanCascader:{select:"请选择"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计:"},vanCoupon:{unlimited:"无门槛",discount:e=>`${e}折`,condition:e=>`满${e}元可用`},vanCouponCell:{title:"优惠券",count:e=>`${e}张可用`},vanCouponList:{exchange:"兑换",close:"不使用",enable:"可用",disabled:"不可用",placeholder:"输入优惠码"},vanAddressEdit:{area:"地区",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",addressDetail:"详细地址",defaultAddress:"设为默认收货地址"},vanAddressList:{add:"新增地址"}};const oe=v("zh-CN"),ae=ze({"zh-CN":at}),st={messages(){return ae[oe.value]},use(e,t){oe.value=e,this.add({[e]:t})},add(e={}){Ie(ae,e)}};var ut=st;function lt(e){const t=_e(e)+".";return(n,...o)=>{const s=ut.messages(),u=ne(s,t+n)||ne(s,n);return H(u)?u(...o):u}}function W(e,t){return t?typeof t=="string"?` ${e}--${t}`:Array.isArray(t)?t.reduce((n,o)=>n+W(e,o),""):Object.keys(t).reduce((n,o)=>n+(t[o]?W(e,o):""),""):""}function rt(e){return(t,n)=>(t&&typeof t!="string"&&(n=t,t=""),t=t?`${e}__${t}`:e,`${t}${W(t,n)}`)}function x(e){const t=`van-${e}`;return[t,rt(t),lt(t)]}const it="van-haptics-feedback",se=5;function ct(e,{args:t=[],done:n,canceled:o,error:s}){if(e){const u=e.apply(null,t);He(u)?u.then(l=>{l?n():o&&o()}).catch(s||Ue):u?n():o&&o()}else n()}function R(e){return e.install=t=>{const{name:n}=e;n&&(t.component(n,e),t.component(_e(`-${n}`),e))},e}const dt=Symbol();function ft(e){const t=N();t&&G(t.proxy,e)}const[vt,ue]=x("badge"),mt={dot:Boolean,max:C,tag:I("div"),color:String,offset:Array,content:C,showZero:D,position:I("top-right")};var pt=P({name:vt,props:mt,setup(e,{slots:t}){const n=()=>{if(t.content)return!0;const{content:a,showZero:i}=e;return O(a)&&a!==""&&(i||a!==0&&a!=="0")},o=()=>{const{dot:a,max:i,content:r}=e;if(!a&&n())return t.content?t.content():O(i)&&be(r)&&+r>+i?`${i}+`:r},s=a=>a.startsWith("-")?a.replace("-",""):`-${a}`,u=Z(()=>{const a={background:e.color};if(e.offset){const[i,r]=e.offset,{position:c}=e,[d,m]=c.split("-");t.default?(typeof r=="number"?a[d]=B(d==="top"?r:-r):a[d]=d==="top"?B(r):s(r),typeof i=="number"?a[m]=B(m==="left"?i:-i):a[m]=m==="left"?B(i):s(i)):(a.marginTop=B(r),a.marginLeft=B(i))}return a}),l=()=>{if(n()||e.dot)return f("div",{class:ue([e.position,{dot:e.dot,fixed:!!t.default}]),style:u.value},[o()])};return()=>{if(t.default){const{tag:a}=e;return f(a,{class:ue("wrapper")},{default:()=>[t.default(),l()]})}return l()}}});const gt=R(pt);let Et=2e3;const yt=()=>++Et,[ht,Ut]=x("config-provider"),Ct=Symbol(ht),[bt,le]=x("icon"),wt=e=>e==null?void 0:e.includes("/"),Bt={dot:Boolean,tag:I("i"),name:String,size:C,badge:C,color:String,badgeProps:Object,classPrefix:String};var Dt=P({name:bt,props:Bt,setup(e,{slots:t}){const n=me(Ct,null),o=Z(()=>e.classPrefix||(n==null?void 0:n.iconPrefix)||le());return()=>{const{tag:s,dot:u,name:l,size:a,badge:i,color:r}=e,c=wt(l);return f(gt,T({dot:u,tag:s,class:[o.value,c?"":`${o.value}-${l}`],style:{color:r,fontSize:B(a)},content:i},e.badgeProps),{default:()=>{var d;return[(d=t.default)==null?void 0:d.call(t),c&&f("img",{class:le("image"),src:l},null)]}})}}});const Pt=R(Dt),_t={show:Boolean,zIndex:C,overlay:D,duration:C,teleport:[String,Object],lockScroll:D,lazyRender:D,beforeClose:Function,overlayStyle:Object,overlayClass:we,transitionAppear:Boolean,closeOnClickOverlay:D};function It(e,t){return e>t?"horizontal":t>e?"vertical":""}function Ot(){const e=v(0),t=v(0),n=v(0),o=v(0),s=v(0),u=v(0),l=v(""),a=v(!0),i=()=>l.value==="vertical",r=()=>l.value==="horizontal",c=()=>{n.value=0,o.value=0,s.value=0,u.value=0,l.value="",a.value=!0};return{move:g=>{const E=g.touches[0];n.value=(E.clientX<0?0:E.clientX)-e.value,o.value=E.clientY-t.value,s.value=Math.abs(n.value),u.value=Math.abs(o.value);const b=10;(!l.value||s.value<b&&u.value<b)&&(l.value=It(s.value,u.value)),a.value&&(s.value>se||u.value>se)&&(a.value=!1)},start:g=>{c(),e.value=g.touches[0].clientX,t.value=g.touches[0].clientY},reset:c,startX:e,startY:t,deltaX:n,deltaY:o,offsetX:s,offsetY:u,direction:l,isVertical:i,isHorizontal:r,isTap:a}}let S=0;const re="van-overflow-hidden";function St(e,t){const n=Ot(),o="01",s="10",u=c=>{n.move(c);const d=n.deltaY.value>0?s:o,m=Je(c.target,e.value),{scrollHeight:g,offsetHeight:E,scrollTop:b}=m;let y="11";b===0?y=E>=g?"00":"01":b+E>=g&&(y="10"),y!=="11"&&n.isVertical()&&!(parseInt(y,2)&parseInt(d,2))&&Pe(c)},l=()=>{document.addEventListener("touchstart",n.start),document.addEventListener("touchmove",u,{passive:!1}),S||document.body.classList.add(re),S++},a=()=>{S&&(document.removeEventListener("touchstart",n.start),document.removeEventListener("touchmove",u),S--,S||document.body.classList.remove(re))},i=()=>t()&&l(),r=()=>t()&&a();Be(i),X(r),Ne(r),z(t,c=>{c?l():a()})}function Oe(e){const t=v(!1);return z(e,n=>{n&&(t.value=n)},{immediate:!0}),n=>()=>t.value?n():null}const ie=()=>{var e;const{scopeId:t}=((e=N())==null?void 0:e.vnode)||{};return t?{[t]:""}:null},[xt,At]=x("overlay"),$t={show:Boolean,zIndex:C,duration:C,className:we,lockScroll:D,lazyRender:D,customStyle:Object,teleport:[String,Object]};var kt=P({name:xt,props:$t,setup(e,{slots:t}){const n=v(),o=Oe(()=>e.show||!e.lazyRender),s=l=>{e.lockScroll&&Pe(l)},u=o(()=>{var l;const a=G(et(e.zIndex),e.customStyle);return O(e.duration)&&(a.animationDuration=`${e.duration}s`),Ee(f("div",{ref:n,style:a,class:[At(),e.className]},[(l=t.default)==null?void 0:l.call(t)]),[[ye,e.show]])});return De("touchmove",s,{target:n}),()=>{const l=f(pe,{name:"van-fade",appear:!0},{default:u});return e.teleport?f(ge,{to:e.teleport},{default:()=>[l]}):l}}});const Tt=R(kt),Ft=G({},_t,{round:Boolean,position:I("center"),closeIcon:I("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:I("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[zt,ce]=x("popup");var Nt=P({name:zt,inheritAttrs:!1,props:Ft,emits:["open","close","opened","closed","keydown","update:show","clickOverlay","clickCloseIcon"],setup(e,{emit:t,attrs:n,slots:o}){let s,u;const l=v(),a=v(),i=Oe(()=>e.show||!e.lazyRender),r=Z(()=>{const p={zIndex:l.value};if(O(e.duration)){const h=e.position==="center"?"animationDuration":"transitionDuration";p[h]=`${e.duration}s`}return p}),c=()=>{s||(s=!0,l.value=e.zIndex!==void 0?+e.zIndex:yt(),t("open"))},d=()=>{s&&ct(e.beforeClose,{done(){s=!1,t("close"),t("update:show",!1)}})},m=p=>{t("clickOverlay",p),e.closeOnClickOverlay&&d()},g=()=>{if(e.overlay)return f(Tt,T({show:e.show,class:e.overlayClass,zIndex:l.value,duration:e.duration,customStyle:e.overlayStyle,role:e.closeOnClickOverlay?"button":void 0,tabindex:e.closeOnClickOverlay?0:void 0},ie(),{onClick:m}),{default:o["overlay-content"]})},E=p=>{t("clickCloseIcon",p),d()},b=()=>{if(e.closeable)return f(Pt,{role:"button",tabindex:0,name:e.closeIcon,class:[ce("close-icon",e.closeIconPosition),it],classPrefix:e.iconPrefix,onClick:E},null)};let y;const Se=()=>{y&&clearTimeout(y),y=setTimeout(()=>{t("opened")})},xe=()=>t("closed"),Ae=p=>t("keydown",p),$e=i(()=>{var p;const{round:h,position:A,safeAreaInsetTop:L,safeAreaInsetBottom:ke}=e;return Ee(f("div",T({ref:a,style:r.value,role:"dialog",tabindex:0,class:[ce({round:h,[A]:A}),{"van-safe-area-top":L,"van-safe-area-bottom":ke}],onKeydown:Ae},n,ie()),[(p=o.default)==null?void 0:p.call(o),b()]),[[ye,e.show]])}),Q=()=>{const{position:p,transition:h,transitionAppear:A}=e,L=p==="center"?"van-fade":`van-popup-slide-${p}`;return f(pe,{name:h||L,appear:A,onAfterEnter:Se,onAfterLeave:xe},{default:$e})};return z(()=>e.show,p=>{p&&!s&&(c(),n.tabindex===0&&fe(()=>{var h;(h=a.value)==null||h.focus()})),!p&&s&&(s=!1,t("close"))}),ft({popupRef:a}),St(a,()=>e.show&&e.lockScroll),De("popstate",()=>{e.closeOnPopstate&&(d(),u=!1)}),de(()=>{e.show&&c()}),ve(()=>{u&&(t("update:show",!0),u=!1)}),X(()=>{e.show&&e.teleport&&(d(),u=!0)}),F(dt,()=>e.show),()=>e.teleport?f(ge,{to:e.teleport},{default:()=>[g(),Q()]}):f(j,null,[g(),Q()])}});const Rt=R(Nt),Lt={round:!0,lockScroll:!0,closeable:!0,style:{backgroundColor:"#fff",color:"#000"}},Vt=(e=!0)=>{const t=N();return(o,s={})=>{const u=v(e),l=Me(t,Re(P({setup(){const a=v(),i=()=>{l.destroy()},r=()=>{l.emit(Ye.destory)},c=()=>{Promise.resolve().then(()=>{l.componentRef=a})};return()=>f(Rt,T({ref:a,show:u.value,onClickCloseIcon:i,onClosed:r,onVnodeMounted:c},{...Lt,...s.attrs}),{default:()=>o,...s.slots})}})),{provideProps:s.provideProps||{},appendTo:s.appendTo,visible:u});return l}},Y=P({__name:"Content",setup(e){const t=Le().query.nested==="true";F("content","来自Content的🩷~");const n=me("depth",0);F("depth",n+1);const o=je();window.dialogStack=o.stack;const s=N(),u=v();return Promise.resolve().then(()=>{u.value={...s==null?void 0:s.appContext.provides,...s.provides}}),(l,a)=>{const i=Ce,r=he;return K(),U(j,null,[f(i),a[2]||(a[2]=V("h3",null,"接收到的注入数据",-1)),V("div",null,ee(u.value),1),f(i),f(r,{onClick:a[0]||(a[0]=c=>k(o).destroy())},{default:_(()=>a[1]||(a[1]=[w("弹窗内部控制关闭")])),_:1}),t?(K(),U(j,{key:0},[f(i),V("h4",null,"弹窗深度:"+ee(k(n)),1),f(Mt)],64)):Ve("",!0)],64)}}}),Mt=P({__name:"index",setup(e){F("base","来自base的🩷");const t=te(),n=()=>{t(f(Y,null,null),{title:"基础用法"})},o=()=>{const{hide:i,show:r,destroyWithResolve:c}=t(f(Y,null,null),{title:"外部控制"});[2,4,6].forEach(d=>{setTimeout(()=>{d===2&&i(),d===4&&r(),d===6&&c()},d*1e3)})},s=te(!1),u=()=>{const{show:i}=s(f(Y,null,null),{title:"三秒后打开"});setTimeout(()=>{i()},3e3)},l=Vt(),a=()=>{l(f("div",{style:"color: red; height: 30vh;padding: 20px;"},[w("我是vantUi的弹窗里的内容")]))};return(i,r)=>{const c=he,d=Ce;return K(),U("div",null,[f(c,{type:"primary",onClick:n},{default:_(()=>r[0]||(r[0]=[w("打开弹窗")])),_:1}),f(c,{type:"success",onClick:o},{default:_(()=>r[1]||(r[1]=[w("弹窗外部控制显示/隐藏/销毁(过程中弹窗会自动显示关闭)")])),_:1}),f(c,{type:"success",onClick:u},{default:_(()=>r[2]||(r[2]=[w("三秒后打开")])),_:1}),f(d,null,{default:_(()=>r[3]||(r[3]=[w("VantUiのdemo")])),_:1}),f(c,{type:"success",onClick:a},{default:_(()=>r[4]||(r[4]=[w("打开VantUi弹窗")])),_:1})])}}});export{Mt as _,Y as a};
