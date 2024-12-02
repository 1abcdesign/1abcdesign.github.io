import{Z as d,b as f}from"./vendor-CTozpBxZ.js";import{f as g}from"./flatPhotos-BJH0RvRV.js";import{r as p,b as i,f as c,w as b,c as v,F as $,y as _,C as u}from"./vue-CSzecv1Y.js";const k=(l,o=10)=>{const s=[];for(let e=0;e<l.length;e+=o)s.push(l.slice(e,e+o));return s},r=k(g),P={__name:"ServicesSlider",setup(l){const o="https://1abcdesign.github.io/";r.forEach(t=>t.sort(()=>Math.random()-.5));const s=[],e=Math.max(...r.map(t=>t.length));for(let t=0;t<e;t++)for(let a=0;a<r.length;a++)r[a][t]&&s.push(r[a][t]);const h=p(s.map(t=>({group:`${t.charAt(0)+"00"}`,title:`${t.slice(0,3)+"_title"}`,content:`<div style="background-image: url('${o}${t}');
                          width: 100vmin; height: calc(17.5 * var(--main-em));
                          background-size: cover; background-position: center;"
              ></div>`})));return(t,a)=>(i(),c(u(f),{lazy:"","lazy-load-on-drag":"","visible-slides":1,autoplay:!0,arrows:!1,bullets:!1,"fixed-height":!0,class:"no-shadow bg-texture main",style:"box-shadow: inset 0 0 1rem 0.5rem var(--shadow)"},{default:b(()=>[(i(!0),v($,null,_(h.value,(n,m)=>(i(),c(u(d),{key:m,title:`<em>
                <span class='first-letter'>
                  ${t.$t(n.group)[0]}
                </span>
                  ${t.$t(n.group).slice(1)} : ${t.$t(n.title)}
              </em>`,content:n.content},null,8,["title","content"]))),128))]),_:1}))}};export{P as default};
