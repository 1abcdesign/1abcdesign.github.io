import{Z as f,b as p}from"./vendor-CTozpBxZ.js";import{f as g}from"./flatPhotos-BJH0RvRV.js";import{r as d,b as c,f as i,w as b,c as $,F as v,y as _,C as u}from"./vue-CSzecv1Y.js";const k=(l,o=10)=>{const r=[];for(let e=0;e<l.length;e+=o)r.push(l.slice(e,e+o));return r},a=k(g),P={__name:"ServicesSlider",setup(l){const o="https://1abcdesign.github.io/";a.forEach(t=>t.sort(()=>Math.random()-.5));const r=[],e=Math.max(...a.map(t=>t.length));for(let t=0;t<e;t++)for(let s=0;s<a.length;s++)a[s][t]&&r.push(a[s][t]);const h=d(r.map(t=>({group:`${t.charAt(0)+"00"}`,title:`${t.slice(0,3)+"_title"}`,content:`<div style="background-image: url('${o}${t}');
                          width: 100vmin; height: calc(17.5 * var(--main-em));
                          background-size: cover; background-position: center;"
              ></div>`})));return(t,s)=>(c(),i(u(p),{lazy:"",autoplay:!0,arrows:!1,bullets:!1,"fixed-height":!0,class:"no-shadow bg-texture main",style:"box-shadow: inset 0 0 1rem 0.5rem var(--shadow)"},{default:b(()=>[(c(!0),$(v,null,_(h.value,(n,m)=>(c(),i(u(f),{key:m,title:`<em>
                <span class='first-letter'>
                  ${t.$t(n.group)[0]}
                </span>
                  ${t.$t(n.group).slice(1)} : ${t.$t(n.title)}
              </em>`,content:n.content},null,8,["title","content"]))),128))]),_:1}))}};export{P as default};
