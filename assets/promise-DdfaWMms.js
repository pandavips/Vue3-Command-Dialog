import{D as p,E as m}from"./index-WhQ2OmNs.js";import{d as a,c,a as t,w as d,r as s,o as f,b as r,f as _}from"./index-ChOSWIHi.js";import"./index-DHtOwdeB.js";const w=a({__name:"promise",setup(v){const o=p(),l=a({setup(){const{destroyWithResolve:n}=m(),e=_(!1);return()=>t("div",null,[t(s("el-button"),{type:"primary",loading:e.value,onClick:()=>{e.value=!0,setTimeout(()=>{n(),e.value=!1},2e3)}},{default:()=>[r("关闭弹窗")]})])}}),i=async()=>{await o(t(l,null,null),{title:"步骤一"}).promise,await o(t(l,null,null),{title:"步骤二"}).promise,await o(t(l,null,null),{title:"步骤三"}).promise,console.log("all done")};return(n,e)=>{const u=s("el-button");return f(),c("div",null,[t(u,{type:"primary",onClick:i},{default:d(()=>e[0]||(e[0]=[r("打开弹窗")])),_:1})])}}});export{w as default};