import{c as i}from"./index-Dn3IyY-f.js";import{d as a,f as m,c as p,a as e,w as d,h as f,b as u,r,o as E}from"./index-ChOSWIHi.js";import"./index-DHtOwdeB.js";const b=a({__name:"compatible-native-attributes",setup(C){const s=i(),n=m(0);setInterval(()=>{n.value++},1e3);const c=()=>{const l=s(f(a({setup:()=>()=>e("div",null,[e("h3",null,[u("我可以完美兼容官方属性哦")]),e("p",null,[u("我可以拖拽哦~")]),e(r("el-button"),{onClick:()=>{var t,o;return(o=(t=l.componentRef)==null?void 0:t.value)==null?void 0:o.resetPosition()}},{default:()=>[u("复原弹窗的位置")]})])})),{title:"我是一个可拖拽的弹窗",attrs:{draggable:!0,center:!0,closeOnClickModal:!1},slots:{footer:()=>e("div",null,[u("我是footer,"),n.value])}})};return(l,t)=>{const o=r("el-button");return E(),p("div",null,[e(o,{type:"success",onClick:c},{default:d(()=>t[0]||(t[0]=[u("打开弹窗")])),_:1})])}}});export{b as default};