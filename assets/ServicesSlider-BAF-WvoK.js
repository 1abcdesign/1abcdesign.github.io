import{Z as p,b as f}from"./vendor-BwiXxUl8.js";import{f as g}from"./flatPhotos-BJH0RvRV.js";import{s as d,o as c,c as i,w as b,a as $,F as v,p as _,G as u}from"./vue-B9pqIG8H.js";const k=(l,a=10)=>{const s=[];for(let e=0;e<l.length;e+=a)s.push(l.slice(e,e+a));return s},r=k(g),P={__name:"ServicesSlider",setup(l){const a="https://1abcdesign.github.io/";r.forEach(t=>t.sort(()=>Math.random()-.5));const s=[],e=Math.max(...r.map(t=>t.length));for(let t=0;t<e;t++)for(let o=0;o<r.length;o++)r[o][t]&&s.push(r[o][t]);const h=d(s.map(t=>({group:`${t.charAt(0)+"00"}`,title:`${t.slice(0,3)+"_title"}`,content:`<div style="background-image: url('${a}${t}');
                          width: 100vmin; height: calc(17.5 * var(--main-em));
                          background-size: cover; background-position: center;"
              ></div>`})));return(t,o)=>(c(),i(u(f),{autoplay:!0,arrows:!1,bullets:!1,"fixed-height":!0,class:"no-shadow bg-texture main",style:"box-shadow: inset 0 0 1rem 0.5rem var(--shadow)"},{default:b(()=>[(c(!0),$(v,null,_(h.value,(n,m)=>(c(),i(u(p),{key:m,title:`<em>
                <span class='first-letter'>
                  ${t.$t(n.group)[0]}
                </span>
                  ${t.$t(n.group).slice(1)} : ${t.$t(n.title)}
              </em>`,content:n.content},null,8,["title","content"]))),128))]),_:1}))}};export{P as default};
