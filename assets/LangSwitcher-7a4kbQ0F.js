import{i as n}from"./index-Ce1tw5Tx.js";import{a as _}from"./vendor-LdcJB_hU.js";import{J as A,s as g,u as D,M as I,o as a,a as r,e as C,g as y,F as b,p as B,f as w}from"./vue-Be0O9ZuW.js";const N={city:{name:"Boyarka",names:{en:"Boyarka"}},continent:{code:"EU",geoname_id:6255148,names:{de:"Europa",en:"Europe",es:"Europa",fa:" اروپا",fr:"Europe",ja:"ヨーロッパ大陸",ko:"유럽","pt-BR":"Europa",ru:"Европа","zh-CN":"欧洲"},name:"Europe"},country:{geoname_id:690791,iso_code:"UA",names:{de:"Ukraine",en:"Ukraine",es:"Ucrania",fa:"اوکراین",fr:"Ukraine",ja:"ウクライナ",ko:"우크라이나","pt-BR":"Ucrânia",ru:"Украина","zh-CN":"乌克兰"},name:"Ukraine",name_native:"Україна",phone_code:"380",capital:"Kyiv",currency:"UAH",flag:"🇺🇦",languages:[{iso_code:"uk",name:"Ukrainian",name_native:"Українська"}]},location:{latitude:50.317,longitude:30.2902},subdivisions:[{names:{en:"Kyiv"}}],state:{name:"Kyiv"},datasource:[{name:"IP to City Lite",attribution:"<a href='https://db-ip.com'>IP Geolocation by DB-IP</a>",license:"Creative Commons Attribution License"}],ip:"178.158.203.59"},E="2b8e2712d081486a81f6dd403a8a76f4",U=async()=>{try{return(await _.get(`https://api.geoapify.com/v1/ipinfo?apiKey=${E}`)).data}catch(c){return console.error("Error fetching IP info:",c),N}},G=["title"],L=["onClick"],T=["src","alt"],q={__name:"LangSwitcher",setup(c){const l="/",k=Object.keys(n.global.messages).map(e=>({value:e,image:l+n.global.messages[e].flag})),f=A(()=>[...k].sort(e=>n.global.locale===e.value?-1:1)),u=g(n.global.locale),i=g(!1),h=e=>{m(e),i.value=!i.value},v=()=>{i.value=!1},d=()=>{const e=n.global.locale==="en"?"Your turnkey choice that’s second to none!":"Ваш вибір під ключ, що не має замін!";document.title=`ABCDΞSIGN1 — ${e}`},S=e=>{document.documentElement.lang=e,document.documentElement.setAttribute("xml:lang",e);const t={uk:{description:"ABCDΞSIGN1 — Ваш вибір під ключ, що не має замін! Професійний дизайн інтер'єру, екстер'єру та ландшафтний дизайн в Україні.",keywords:"дизайн інтер'єру, екстер'єрний дизайн, ландшафтний дизайн, дизайнерські послуги, ABCDΞSIGN1, дизайн під ключ, Україна",title:"ABCDΞSIGN1 — Ваш вибір під ключ, що не має замін!",ogTitle:"ABCDΞSIGN1 — Ваш вибір під ключ, що не має замін!",ogDescription:"Від Ескізу до Дизайну Під Ключ — Все в Одному Місці. Надаємо комплексні дизайнерські послуги.",twitterTitle:"ABCDΞSIGN1 — Ваш вибір під ключ, що не має замін!",twitterDescription:"Від Ескізу до Дизайну Під Ключ. Надаємо дизайнерські послуги для вашого простору."},en:{description:"ABCDΞSIGN1 — Your turnkey choice that’s second to none! Professional interior, exterior, and landscape design services in Ukraine.",keywords:"interior design, exterior design, landscape design, design services, ABCDΞSIGN1, turnkey design, Ukraine",title:"ABCDΞSIGN1 — Your turnkey choice that’s second to none!",ogTitle:"ABCDΞSIGN1 — Your turnkey choice that’s second to none!",ogDescription:"From Sketch to Turnkey Design — All in One Place. We provide comprehensive design services.",twitterTitle:"ABCDΞSIGN1 — Your turnkey choice that’s second to none!",twitterDescription:"From Sketch to Turnkey Design. Providing design services for your space."}}[e];document.querySelector("meta[name='description']").setAttribute("content",t.description),document.querySelector("meta[name='keywords']").setAttribute("content",t.keywords),document.querySelector("meta[property='og:title']").setAttribute("content",t.ogTitle),document.querySelector("meta[property='og:description']").setAttribute("content",t.ogDescription),document.querySelector("meta[name='twitter:title']").setAttribute("content",t.twitterTitle),document.querySelector("meta[name='twitter:description']").setAttribute("content",t.twitterDescription),document.title=t.title;const o=document.querySelector('script[type="application/ld+json"]');if(o){const s=JSON.parse(o.textContent);s.description=t.description,o.textContent=JSON.stringify(s,null,2)}},m=e=>{n.global.locale=e,localStorage.setItem("lang",e),u.value=e,d(),S(e)};return D(async()=>{let e=localStorage.getItem("lang");e?n.global.locale=e:(e=(await U()).country.iso_code==="UA"?"uk":"en",m(e)),d()}),(e,p)=>{const t=I("click-outside");return a(),r("section",{class:"lang-switcher",title:e.$t("toggleLangTip")},[C((a(),r("menu",{class:y(["select flex-align flex-col",{open:i.value,close:!i.value}])},[(a(!0),r(b,null,B(f.value,(o,s)=>(a(),r("li",{onClick:x=>h(o.value),key:s,class:y([{selected:u.value===o.value},"select-option"])},[w("img",{src:o.image,alt:e.$t("lang")+" flag",class:"select-option-img"},null,8,T)],10,L))),128))],2)),[[t,v]])],8,G)}}};export{q as default};
