import{Z as i,b as d}from"./common-Bw1rWptb.js";import{a as u}from"./index-Df-_Xjxu.js";import{q as m,o as g,c,w as f,a as b,F as h,p as _,G as j}from"./vendor-Bq-w5VQz.js";const v={__name:"ServicesSlider",setup(k){const t=[["a01.jpg","a02.jpg","a03.jpg","a04.jpg","a05.jpg","a06.jpg","a07.jpg","a08.jpg","a09.jpg","a10.jpg"],["b01.jpg","b02.jpg","b03.jpg","b04.jpg","b05.jpg","b06.jpg","b07.jpg","b08.jpg","b09.jpg","b10.jpg"],["c01.jpg","c02.jpg","c03.jpg","c04.jpg","c05.jpg","c06.jpg","c07.jpg","c08.jpg","c09.jpg","c10.jpg"],["d01.jpg","d02.jpg","d03.jpg","d04.jpg","d05.jpg","d06.jpg","d07.jpg","d08.jpg","d09.jpg","d10.jpg"]],o="/";t.forEach(e=>e.sort(()=>Math.random()-.5));const r=[],s=Math.max(...t.map(e=>e.length));for(let e=0;e<s;e++)for(let a=0;a<t.length;a++)t[a][e]&&r.push(t[a][e]);const n=m(r.map(e=>({group:`${e.charAt(0)+"00"}`,title:`${e.slice(0,3)+"_title"}`,content:`<div style="background-image: url('${o}${e}'); width: 100vmin; height: calc(36 * var(--usable-vh)); background-size: cover; background-position: center;"></div>`})));return(e,a)=>(g(),c(j(d),{autoplay:!0,arrows:!1,bullets:!1,"fixed-height":!0},{default:f(()=>[(g(!0),b(h,null,_(n.value,(p,l)=>(g(),c(j(i),{key:l,title:"<em>"+e.$t(p.group)+" : "+e.$t(p.title)+"</em>",content:p.content},null,8,["title","content"]))),128))]),_:1}))}},w=u(v,[["__scopeId","data-v-df80afca"]]);export{w as default};