import{_ as d}from"./index-YLiUsS7B.js";import{c as _,l as n,h as t,t as o,C as r,f as p,w as f,q as g,b as i}from"./vue-CSzecv1Y.js";const k={class:"not-found flex-center flex-col"},b={__name:"404",setup($){const l=JSON.parse(sessionStorage.getItem("navigation_history")||"[]"),m=l.pop()||"/",a=l.length?l.slice(-1)[0]:"/";return sessionStorage.setItem("navigation_history",JSON.stringify(l)),(e,s)=>{const u=g("router-link");return i(),_("main",k,[n("h2",null,[s[0]||(s[0]=t(" ⛔ 404 ")),s[1]||(s[1]=n("br",null,null,-1)),t(" "+o(e.$t("404")),1)]),n("p",null,[t(o(e.$t("404_1"))+" ",1),n("b",null,[n("i",null,"'"+o(r(m))+"'",1)]),t(" "+o(e.$t("404_2")),1),s[2]||(s[2]=n("br",null,null,-1)),t(" "+o(e.$t("404_3")),1)]),n("p",null,[t(o(e.$t("404_4"))+" —  ",1),r(a)!=="/"?(i(),p(u,{key:0,to:r(a)},{default:f(()=>[t(o(e.$t("backPreviousPage"))+" ",1),n("b",null,"«"+o(e.$t(r(a).slice(1)))+"»",1),s[3]||(s[3]=t(" ↺ "))]),_:1},8,["to"])):(i(),p(u,{key:1,to:"/"},{default:f(()=>[t(o(e.$t("back404"))+" ↺ ",1)]),_:1}))])])}}},v=d(b,[["__scopeId","data-v-bc993039"]]);export{v as default};
