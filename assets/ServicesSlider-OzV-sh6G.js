import{Z as p,b as f}from"./vendor-CR05li1N.js";import{f as d}from"./flatPhotos-BJH0RvRV.js";import{_ as g}from"./index-Dt2TQHXe.js";import{s as _,o as l,c as i,w as b,a as v,F as $,p as k,C as u}from"./vue-DWba8sbm.js";const w=(c,a=10)=>{const s=[];for(let e=0;e<c.length;e+=a)s.push(c.slice(e,e+a));return s},r=w(d),x={__name:"ServicesSlider",setup(c){const a="https://1abcdesign.github.io/";r.forEach(t=>t.sort(()=>Math.random()-.5));const s=[],e=Math.max(...r.map(t=>t.length));for(let t=0;t<e;t++)for(let o=0;o<r.length;o++)r[o][t]&&s.push(r[o][t]);const m=_(s.map(t=>({group:`${t.charAt(0)+"00"}`,title:`${t.slice(0,3)+"_title"}`,content:`<div style="background-image: url('${a}${t}');
                          width: 100vmin; height: calc(17.5 * var(--main-em));
                          background-size: cover; background-position: center;"
              ></div>`})));return(t,o)=>(l(),i(u(f),{autoplay:!0,arrows:!1,bullets:!1,"fixed-height":!0,class:"no-shadow bg-texture main",style:"box-shadow: inset 0 0 1rem 0.5rem var(--shadow)"},{default:b(()=>[(l(!0),v($,null,k(m.value,(n,h)=>(l(),i(u(p),{key:h,title:`<em>
                <span class='first-letter'>
                  ${t.$t(n.group)[0]}
                </span>
                  ${t.$t(n.group).slice(1)} : ${t.$t(n.title)}
              </em>`,content:n.content},null,8,["title","content"]))),128))]),_:1}))}},E=g(x,[["__scopeId","data-v-3609b4e0"]]);export{E as default};
