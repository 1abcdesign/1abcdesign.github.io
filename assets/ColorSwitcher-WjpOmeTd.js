import{a as _,s as v}from"./index-FsOyl3d5.js";import{r as l,K as y,N as k,j as C,b as o,c as a,F as h,y as b,e as g,i as A}from"./vue-CSzecv1Y.js";const S=["onClick"],w={__name:"ColorSwitcher",setup(O){const r=[{"#e6e8fa":"Ag"},{"#d4af37":"Au"},{"#ff4500":"Ruby"},{"#ff7f50":"Coral"},{"#ffa500":"Amber"},{"#b87333":"Cu"},{"#ffd700":"Gold"},{"#daa520":"AuAg"},{"#32cd32":"Lime"},{"#4caf50":"Em"},{"#20b2aa":"Sea"},{"#00ffff":"Aqua"},{"#1e90ff":"Sapph"},{"#4169e1":"Royal"},{"#9932cc":"Orchid"},{"#dda0dd":"Am"}],c=l(localStorage.getItem("color")),n=y(()=>[...r].sort(e=>Object.keys(e)[0]===c.value?-1:1)),t=l(!1),u=e=>{c.value=e,localStorage.setItem("color",e),i(e),v.setColor(e)},i=e=>{document.documentElement.style.setProperty("--metallic",e),document.documentElement.style.setProperty("--metallic-25",e+"40")},d=()=>{t.value=!0},f=()=>{t.value=!1},m=e=>{if(!t.value){d();return}u(e),t.value=!t.value};return(e,j)=>{const p=k("click-outside");return C((o(),a("menu",{class:g(["color-switcher",{open:t.value,closed:!t.value}])},[(o(!0),a(h,null,b(n.value,s=>(o(),a("li",{key:s,onClick:x=>m(Object.keys(s)[0]),style:A({background:Object.keys(s)[0]}),class:"flex-center"},null,12,S))),128))],2)),[[p,f]])}}},R=_(w,[["__scopeId","data-v-f43d0710"]]);export{R as default};
