const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/PhotoArticle-CoG83o7l.js","assets/index-YLiUsS7B.js","assets/vue-CSzecv1Y.js","assets/index-DB6Vw3Gk.css","assets/PhotoArticle-BLSB8Dsq.css"])))=>i.map(i=>d[i]);
import{a as p}from"./index-YLiUsS7B.js";import{f as u}from"./flatPhotos-BJH0RvRV.js";import{K as m,b as o,c as i,F as g,y as f,f as d,e as _,C as $,D as h}from"./vue-CSzecv1Y.js";const v={class:"photo-gallery flex-col"},B={__name:"PhotoGallery",props:["group"],setup(t){const a=h(()=>p(()=>import("./PhotoArticle-CoG83o7l.js"),__vite__mapDeps([0,1,2,3,4]))),l="/",c=u.map(e=>({group:t.group,title:`${e.slice(0,3)+"_title"}`,image:`${l}${e}`,description:`${e.slice(0,3)+"_description"}`})),n=m(()=>c.filter(e=>e.title.startsWith(t.group)));return(e,y)=>(o(),i("div",v,[(o(!0),i(g,null,f(n.value,(r,s)=>(o(),d($(a),{key:s,image:r.image,title:e.$t(r.title),description:e.$t(r.description),class:_({reverse:s%2===1,"last-in-group":s===9}),group:t.group},null,8,["image","title","description","class","group"]))),128))]))}};export{B as default};
