import{Z as f,b as g}from"./vendor-CTozpBxZ.js";import{f as p}from"./flatPhotos-BJH0RvRV.js";import{r as d,b as i,f as c,w as b,c as $,F as v,y,C as u}from"./vue-CSzecv1Y.js";const _=(l,a=10)=>{const o=[];for(let e=0;e<l.length;e+=a)o.push(l.slice(e,e+a));return o},r=_(p),P={__name:"ServicesSlider",setup(l){const a="https://1abcdesign.github.io/";r.forEach(t=>t.sort(()=>Math.random()-.5));const o=[],e=Math.max(...r.map(t=>t.length));for(let t=0;t<e;t++)for(let s=0;s<r.length;s++)r[s][t]&&o.push(r[s][t]);const m=d(o.map(t=>({group:`${t.charAt(0)+"00"}`,title:`${t.slice(0,3)+"_title"}`,content:`<img loading="lazy"
                    src='${a}${t}'
                    style="
                          width: 100vmin; height: calc(17.5 * var(--main-em));
                          object-fit: cover; background-position: center;"
              ></img>`})));return(t,s)=>(i(),c(u(g),{lazy:"","lazy-load-on-drag":"","visible-slides":1,autoplay:!0,arrows:!1,bullets:!1,"fixed-height":!0,class:"no-shadow bg-texture main",style:{"box-shadow":"inset 0 0 1rem 0.5rem var(--shadow)",border:"none"}},{default:b(()=>[(i(!0),$(v,null,y(m.value,(n,h)=>(i(),c(u(f),{key:h,title:`<em>
                <span class='first-letter'>
                  ${t.$t(n.group)[0]}
                </span>
                  ${t.$t(n.group).slice(1)} : ${t.$t(n.title)}
              </em>`,content:n.content},null,8,["title","content"]))),128))]),_:1}))}};export{P as default};
