const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Logo3dView-B6RKhb6-.js","assets/three-_iEftnuc.js","assets/index-B4DGy_iL.js","assets/vue-m0v5TED9.js","assets/vendor-BcxX2YnB.js","assets/index-D8kuNjdo.css","assets/Logo3dView-CJpKgopH.css"])))=>i.map(i=>d[i]);
import{_ as v,a as h}from"./index-B4DGy_iL.js";import{Z as $,b as k}from"./vendor-BcxX2YnB.js";import{s as x,o as d,c as w,w as o,a as m,F as S,p as y,J as f,k as n,f as a,B as A,i as B,t as c,d as b,K as V}from"./vue-m0v5TED9.js";const C={__name:"ServicesSlider",setup(u){const s=[["a01.webp","a02.webp","a03.webp","a04.webp","a05.webp","a06.webp","a07.webp","a08.webp","a09.webp","a10.webp"],["b01.webp","b02.webp","b03.webp","b04.webp","b05.webp","b06.webp","b07.webp","b08.webp","b09.webp","b10.webp"],["c01.webp","c02.webp","c03.webp","c04.webp","c05.webp","c06.webp","c07.webp","c08.webp","c09.webp","c10.webp"],["d01.webp","d02.webp","d03.webp","d04.webp","d05.webp","d06.webp","d07.webp","d08.webp","d09.webp","d10.webp"]],t="https://1abcdesign.github.io/";s.forEach(e=>e.sort(()=>Math.random()-.5));const r=[],l=Math.max(...s.map(e=>e.length));for(let e=0;e<l;e++)for(let i=0;i<s.length;i++)s[i][e]&&r.push(s[i][e]);const g=x(r.map(e=>({group:`${e.charAt(0)+"00"}`,title:`${e.slice(0,3)+"_title"}`,content:`<div style="background-image: url('${t}${e}'); width: 100vmin; height: calc(17.5 * var(--main-em)); background-size: cover; background-position: center;"></div>`})));return(e,i)=>(d(),w(f(k),{autoplay:!0,arrows:!1,bullets:!1,"fixed-height":!0,class:"no-shadow bg-texture",style:"box-shadow: inset 0 0 1rem 0.5rem var(--shadow)"},{default:o(()=>[(d(!0),m(S,null,y(g.value,(p,_)=>(d(),w(f($),{key:_,title:`<em><span class='first-letter'>${e.$t(p.group)[0]}</span>${e.$t(p.group).slice(1)} : ${e.$t(p.title)}</em>`,content:p.content},null,8,["title","content"]))),128))]),_:1}))}},E={class:"home flex-align"},N={class:"middle-wrapper flex-center"},D={class:"middle flex-align"},I={class:"moto"},L=["data-inner-text"],T={__name:"Home",setup(u){const s=V(()=>h(()=>import("./Logo3dView-B6RKhb6-.js"),__vite__mapDeps([0,1,2,3,4,5,6])));return(t,r)=>{const l=B("router-link");return d(),m("main",E,[n(f(s)),a("div",N,[a("section",D,[r[0]||(r[0]=A('<h1 class="main-header grid-10" data-v-b6f39835><span class="logo-letter flex-center" data-v-b6f39835>A</span><span class="logo-letter flex-center" data-v-b6f39835>B</span><span class="logo-letter flex-center" data-v-b6f39835>C</span><span class="logo-letter flex-center" data-v-b6f39835>D</span><span class="logo-letter flex-center" data-v-b6f39835>Ξ</span><span class="logo-letter flex-center" data-v-b6f39835>S</span><span class="logo-letter flex-center" data-v-b6f39835>I</span><span class="logo-letter flex-center" data-v-b6f39835>G</span><span class="logo-letter flex-center" data-v-b6f39835>N</span><span class="logo-letter flex-center" data-v-b6f39835>1</span></h1>',1)),n(l,{to:"/contacts",title:t.$t("moto_CTA")},{default:o(()=>[a("strong",I,[a("em",{"data-inner-text":t.$t("moto")},c(t.$t("moto")),9,L)])]),_:1},8,["title"]),a("ol",null,[a("li",null,[n(l,{to:"/services#ambience",title:t.$t("a00"),class:"services-link"},{default:o(()=>[b(c(t.$t("ambience")),1)]),_:1},8,["title"])]),a("li",null,[n(l,{to:"/services#building",title:t.$t("b00"),class:"services-link"},{default:o(()=>[b(c(t.$t("building")),1)]),_:1},8,["title"])]),a("li",null,[n(l,{to:"/services#crafting",title:t.$t("c00"),class:"services-link"},{default:o(()=>[b(c(t.$t("crafting")),1)]),_:1},8,["title"])]),a("li",null,[n(l,{to:"/services#design",title:t.$t("d00"),class:"services-link"},{default:o(()=>[b(c(t.$t("design")),1)]),_:1},8,["title"])])])])]),n(C)])}}},M=v(T,[["__scopeId","data-v-b6f39835"]]);export{M as default};
