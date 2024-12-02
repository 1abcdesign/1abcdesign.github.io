import{Z as f,b as g}from"./vendor-CTozpBxZ.js";import{f as p}from"./flatPhotos-BJH0RvRV.js";import{r as d,b as c,f as i,w as b,c as $,F as v,y as _,C as u}from"./vue-CSzecv1Y.js";const k=(l,s=10)=>{const a=[];for(let e=0;e<l.length;e+=s)a.push(l.slice(e,e+s));return a},o=k(p),P={__name:"ServicesSlider",setup(l){const s="https://1abcdesign.github.io/";o.forEach(t=>t.sort(()=>Math.random()-.5));const a=[],e=Math.max(...o.map(t=>t.length));for(let t=0;t<e;t++)for(let r=0;r<o.length;r++)o[r][t]&&a.push(o[r][t]);const h=d(a.map(t=>({group:`${t.charAt(0)+"00"}`,title:`${t.slice(0,3)+"_title"}`,content:`<div style="background-image: url('${s}${t}');
                          width: 100vmin; height: calc(17.5 * var(--main-em));
                          background-size: cover; background-position: center;"
              ></div>`})));return(t,r)=>(c(),i(u(g),{lazy:"","lazy-load-on-drag":"",autoplay:!0,arrows:!1,bullets:!1,"fixed-height":!0,class:"no-shadow bg-texture main",style:"box-shadow: inset 0 0 1rem 0.5rem var(--shadow)"},{default:b(()=>[(c(!0),$(v,null,_(h.value,(n,m)=>(c(),i(u(f),{key:m,title:`<em>
                <span class='first-letter'>
                  ${t.$t(n.group)[0]}
                </span>
                  ${t.$t(n.group).slice(1)} : ${t.$t(n.title)}
              </em>`,content:n.content},null,8,["title","content"]))),128))]),_:1}))}};export{P as default};
