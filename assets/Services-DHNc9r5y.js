import{_ as g,a as o,c as p,h as e,t as s,e as m,i as u,x as $,F as b,s as v,b as f,p as n}from"./index-QOXRuhbh.js";const y=["src"],S={class:"article-info"},B={class:"group"},q={__name:"PhotoArticle",props:{image:{type:String,required:!0},title:{type:String,required:!0},description:{type:String,required:!0},isReverse:{type:Boolean,default:!1},group:{type:String,required:!0}},setup(i){return(t,a)=>(o(),p("div",{class:u(["photo-article",{reverse:i.isReverse}])},[e("img",{src:i.image,alt:"Article Image",class:"article-image"},null,8,y),e("div",S,[e("h3",null,[e("span",B,s(t.$t(`${i.group}00`)),1),a[0]||(a[0]=e("br",null,null,-1)),m(" "+s(i.title),1)]),e("p",null,s(i.description),1)])],2))}},A=g(q,[["__scopeId","data-v-77fea9aa"]]),k={class:"photo-gallery"},I={__name:"PhotoGallery",props:{group:{type:String,required:!0}},setup(i){const t=i,a=["a01.jpg","a09.jpg","b07.jpg","c05.jpg","d03.jpg","a02.jpg","a10.jpg","b08.jpg","c06.jpg","d04.jpg","a03.jpg","b01.jpg","b09.jpg","c07.jpg","d05.jpg","a04.jpg","b02.jpg","b10.jpg","c08.jpg","d06.jpg","a05.jpg","b03.jpg","c01.jpg","c09.jpg","d07.jpg","a06.jpg","b04.jpg","c02.jpg","c10.jpg","d08.jpg","a07.jpg","b05.jpg","c03.jpg","d01.jpg","d09.jpg","a08.jpg","b06.jpg","c04.jpg","d02.jpg","d10.jpg"],j="/",_=a.map(r=>({group:t.group,title:`${r.slice(0,3)+"_title"}`,image:`${j}${r}`,description:`${r.slice(0,3)+"_description"}`})),h=$(()=>_.filter(r=>r.title.startsWith(t.group)));return(r,D)=>(o(),p("div",k,[(o(!0),p(b,null,v(h.value,(l,d)=>(o(),f(A,{key:d,image:l.image,title:r.$t(l.title),description:r.$t(l.description),class:u({reverse:d%2===1}),group:i.group},null,8,["image","title","description","class","group"]))),128))]))}},c=g(I,[["__scopeId","data-v-33db225f"]]),P={class:"main"},N={id:"ambience"},R={class:"head"},V={id:"building"},E={class:"head"},F={id:"crafting"},G={class:"head"},L={id:"design"},z={class:"head"},C={__name:"Services",setup(i){return(t,a)=>(o(),p("main",P,[e("h2",null,s(t.$t("design_description_full")),1),e("section",N,[e("div",R,[e("h3",null,s(t.$t("a00")),1),e("p",null,s(t.$t("ambience_description")),1)]),n(c,{group:"a"})]),e("section",V,[e("div",E,[e("h3",null,s(t.$t("b00")),1),e("p",null,s(t.$t("building_description")),1)]),n(c,{group:"b"})]),e("section",F,[e("div",G,[e("h3",null,s(t.$t("c00")),1),e("p",null,s(t.$t("crafting_description")),1)]),n(c,{group:"c"})]),e("section",L,[e("div",z,[e("h3",null,s(t.$t("d00")),1),e("p",null,s(t.$t("design_description")),1)]),n(c,{group:"d"})])]))}},U=g(C,[["__scopeId","data-v-550ec4db"]]);export{U as default};