import{a2 as l,a9 as p,ag as t,an as m,bn as s,a8 as c,ar as i,b as d}from"./index-CNGc4wGV.js";import{D as f,E as _}from"./index-e8hqgjPP.js";import"./index-Dz9ciVy6.js";const D=l({__name:"promise",setup(g){const o=f(),a=l({setup(){const{destroyWithResolve:n}=_(),e=d(!1);return()=>t("div",null,[t(s,{type:"primary",loading:e.value,onClick:()=>{e.value=!0,setTimeout(()=>{n(),e.value=!1},2e3)}},{default:()=>[i("关闭弹窗")]})])}}),r=async()=>{await o(t(a,null,null),{title:"步骤一"}).promise,await o(t(a,null,null),{title:"步骤二"}).promise,await o(t(a,null,null),{title:"步骤三"}).promise,console.log("all done")};return(n,e)=>{const u=s;return c(),p("div",null,[t(u,{type:"primary",onClick:r},{default:m(()=>e[0]||(e[0]=[i("打开弹窗")])),_:1})])}}});export{D as default};
