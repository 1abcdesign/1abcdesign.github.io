const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ThemeSwitcher-BgIn4i9t.js","assets/vue-CSzecv1Y.js","assets/ThemeSwitcher-CwDKKdZr.css","assets/LangSwitcher-CWe14Bgt.js","assets/vendor-CTozpBxZ.js","assets/LangSwitcher-BRv5wDT-.css","assets/Home-OennWmM4.js","assets/Home-Nq29TraQ.css","assets/Company-DK-Q5PEl.js","assets/Company-DxYa8cZ1.css","assets/Services-CjY8jFiE.js","assets/Services-CSI2KWPK.css","assets/Contacts-CQXr2RUb.js","assets/Contacts-CSgrpS97.css","assets/404-DhdnDNyl.js","assets/404-BfjTkLPT.css"])))=>i.map(i=>d[i]);
import{z as V,r as v,o as X,A as z,b as w,c as k,l as e,B as F,e as M,i as W,q as j,u as p,w as T,h as L,t as A,C as B,D as $,F as G,E as H,G as K,H as J,I as Y}from"./vue-CSzecv1Y.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const x=V({showLoader:!0,setShowLoader(n){this.showLoader=n},themeColor:document.documentElement.getAttribute("data-theme")==="dark"?"#fff":"#000",setThemeColor(n){this.themeColor=n}}),N=(n,o)=>{const s=n.__vccOpts||n;for(const[i,t]of o)s[i]=t;return s},Z={id:"logo2dWrapper"},Q={__name:"LoaderView",setup(n){const o=v(1170),s=v(!0),i=v(!1),t=v(null),r=v(null),l=()=>document.documentElement.getAttribute("data-theme")==="dark"?"#fff":"#000";let u=null;function h(){(t.value||document.getElementById("logoOverlay")).classList.remove("fade-out");const c=r.value||document.getElementById("logo2dCanvas"),a=c.getContext("2d");a.clearRect(0,0,c.width,c.height),a.lineWidth=28,a.strokeStyle=l();const b=[d=>{a.beginPath(),a.moveTo(200,400),a.lineTo(200,400-d),a.stroke()},d=>{a.beginPath(),a.moveTo(200,0),a.lineTo(200-d,d),a.stroke()},d=>{a.beginPath(),a.moveTo(0,200),a.lineTo(d,200),a.stroke()},d=>{a.beginPath(),a.ellipse(200,105,93,93,Math.PI/2,0,-Math.PI/180*d,!0),a.stroke()},d=>{a.beginPath(),a.ellipse(200,200,186,186,-Math.PI/2,0,-Math.PI/180*d,!0),a.stroke()}],P=[.15,.11,.08,.22,.44].map(d=>o.value*d),C=[400,200,200,180,360];function E(d){u||(u=d);const y=d-u;let S=0;for(let g=0;g<b.length;g++){const D=S,O=S+P[g];if(y>=D&&y<=O){const q=(y-D)/P[g],R=C[g]*q;b[g](Math.min(R,C[g]))}else y>O&&b[g](C[g]);S+=P[g]}y<o.value?requestAnimationFrame(E):x.showLoader?(u=null,a.clearRect(0,0,c.width,c.height),requestAnimationFrame(E)):i.value=!0}requestAnimationFrame(E)}const m=()=>{s.value=!1,i.value=!1};return X(()=>{h()}),z(()=>x.showLoader,_=>{_&&(s.value=_,h())}),(_,c)=>(w(),k("div",{id:"logoOverlay",ref_key:"logoOverlay",ref:t,class:M(["flex-center",{fadeOut:i.value}]),style:W({opacity:s.value?"inherit":0,zIndex:s.value?2:-1}),onAnimationend:m},[e("div",Z,[e("canvas",{id:"logo2dCanvas",ref_key:"logo2dCanvas",ref:r,width:"400",height:"400",style:{stroke:"var(--color)"}},null,512),c[0]||(c[0]=F('<svg id="svgPlaceholder" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" data-v-04328f21><line x1="200" y1="400" x2="200" y2="0" data-v-04328f21></line><line x1="200" y1="0" x2="0" y2="200" data-v-04328f21></line><line x1="0" y1="200" x2="200" y2="200" data-v-04328f21></line><path d="M 200,14 A 93, 93, 0 1 1 200, 200" fill="none" data-v-04328f21></path><circle cx="200" cy="200" r="186" fill="none" data-v-04328f21></circle></svg>',1))])],38))}},ee=N(Q,[["__scopeId","data-v-04328f21"]]),te="modulepreload",ie=function(n){return"/"+n},U={},f=function(o,s,i){let t=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),u=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));t=Promise.allSettled(s.map(h=>{if(h=ie(h),h in U)return;U[h]=!0;const m=h.endsWith(".css"),_=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${_}`))return;const c=document.createElement("link");if(c.rel=m?"stylesheet":te,m||(c.as="script"),c.crossOrigin="",c.href=h,u&&c.setAttribute("nonce",u),document.head.appendChild(c),m)return new Promise((a,b)=>{c.addEventListener("load",a),c.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(l){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=l,window.dispatchEvent(u),!u.defaultPrevented)throw l}return t.then(l=>{for(const u of l||[])u.status==="rejected"&&r(u.reason);return o().catch(r)})},ne={class:"box-shadow-1-05 bg-texture"},oe={class:"logo_li flex-align"},ae={id:"logoImage",ref:"logoImage",class:"icon",viewBox:"0 0 400 400",xmlns:"http://www.w3.org/2000/svg"},se={class:"flex-align"},re={class:"flex-align"},le={class:"flex-align"},ce={class:"global-view flex-align flex-col"},de={class:"lang-wrapper"},ue={__name:"HeaderBlock",setup(n){const o=$(()=>f(()=>import("./ThemeSwitcher-BgIn4i9t.js"),__vite__mapDeps([0,1,2]))),s=$(()=>f(()=>import("./LangSwitcher-CWe14Bgt.js"),__vite__mapDeps([3,4,1,5])));return(i,t)=>{const r=j("router-link");return w(),k("header",ne,[e("menu",null,[e("li",oe,[p(r,{to:"/",id:"logoLink",class:M(["flex-center flex-col",{active:i.$route.path==="/"}]),title:i.$t("mainPage")},{default:T(()=>[(w(),k("svg",ae,t[0]||(t[0]=[e("defs",null,[e("filter",{id:"shadowInactive",x:"-50%",y:"-50%",width:"200%",height:"200%"},[e("feDropShadow",{dx:"0",dy:"0",stdDeviation:"2","flood-color":"var(--color)","flood-opacity":"0.5"})])],-1),e("line",{x1:"200",y1:"386",x2:"200",y2:"14"},null,-1),e("line",{x1:"200",y1:"14",x2:"14",y2:"200"},null,-1),e("line",{x1:"14",y1:"200",x2:"200",y2:"200"},null,-1),e("path",{d:"M 200,14 A 93, 93, 0 1 1 200, 200",fill:"none"},null,-1),e("circle",{cx:"200",cy:"200",r:"186",fill:"none"},null,-1)]),512)),t[1]||(t[1]=e("strong",{class:"logo-strong grid-10"},[e("span",{class:"logo-letter flex-center"},"1"),e("span",{class:"logo-letter flex-center"},"A"),e("span",{class:"logo-letter flex-center"},"B"),e("span",{class:"logo-letter flex-center"},"C"),e("span",{class:"logo-letter flex-center"},"D"),e("span",{class:"logo-letter flex-center"},"Ξ"),e("span",{class:"logo-letter flex-center"},"S"),e("span",{class:"logo-letter flex-center"},"I"),e("span",{class:"logo-letter flex-center"},"G"),e("span",{class:"logo-letter flex-center"},"N")],-1))]),_:1},8,["class","title"])]),e("li",se,[p(r,{to:"/services",title:i.$t("showcases"),class:"flex-center flex-col"},{default:T(()=>[t[2]||(t[2]=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",class:"icon feather-briefcase"},[e("rect",{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"}),e("path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"})],-1)),L(" "+A(i.$t("services")),1)]),_:1},8,["title"])]),e("li",re,[p(r,{to:"/company",title:i.$t("about"),class:"flex-center flex-col"},{default:T(()=>[t[3]||(t[3]=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",class:"icon feather-circle"},[e("circle",{cx:"12",cy:"12",r:"10.5"}),e("line",{x1:"12",y1:"22",x2:"12",y2:"2"}),e("line",{x1:"12",y1:"2",x2:"2",y2:"12"}),e("line",{x1:"2",y1:"12",x2:"12",y2:"12"}),e("path",{d:"M 12,2 A 5,5, 0 1 1 12,12",fill:"none"})],-1)),L(" "+A(i.$t("company")),1)]),_:1},8,["title"])]),e("li",le,[p(r,{to:"/contacts",title:i.$t("contactTip"),class:"flex-center flex-col"},{default:T(()=>[t[4]||(t[4]=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",class:"icon feather-at-sign"},[e("circle",{cx:"12",cy:"12",r:"4"}),e("path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"})],-1)),L(" "+A(i.$t("contacts")),1)]),_:1},8,["title"])]),e("li",ce,[p(B(o)),e("span",de,[p(B(s))])])])])}}},he={},ge={class:"footer box-shadow-1-05 bg-texture"},pe={class:"copy-right flex-align"},fe={class:"links"},me=["href","title"],_e=["title"],be=["title"];function ye(n,o){return w(),k("footer",ge,[e("section",pe," © "+A(new Date().getFullYear())+"  1abcdesign.github.io ",1),e("section",fe,[e("a",{href:`mailto:one.abcdesign@gmail.com?subject=${n.$t("email_subject")}`,target:"_blank","aria-label":"e-mail",title:n.$t("emailSend"),class:"flex-center"},o[0]||(o[0]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",class:"icon feather-mail"},[e("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),e("polyline",{points:"22,6 12,13 2,6"})],-1)]),8,me),e("a",{href:"http://t.me/abcdesign1",target:"_blank","aria-label":"telegram",title:n.$t("chatDirect"),class:"flex-center"},o[1]||(o[1]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",class:"icon feather-send"},[e("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),e("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})],-1)]),8,_e),e("a",{href:"tel:+380933789883",target:"_blank","aria-label":"Call us",title:n.$t("phoneUs"),class:"flex-center"},o[2]||(o[2]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",class:"icon feather-phone","aria-hidden":"true"},[e("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})],-1)]),8,be)])])}const ve=N(he,[["render",ye]]),we={__name:"App",setup(n){return(o,s)=>{const i=j("router-view");return w(),k(G,null,[p(ee),p(ue),p(i,{ref:"mainRef"},null,512),p(ve)],64)}}},ke=[{path:"/",name:"Home",component:()=>f(()=>import("./Home-OennWmM4.js"),__vite__mapDeps([6,1,7]))},{path:"/company",name:"Company",component:()=>f(()=>import("./Company-DK-Q5PEl.js"),__vite__mapDeps([8,1,9]))},{path:"/services",name:"Services",component:()=>f(()=>import("./Services-CjY8jFiE.js"),__vite__mapDeps([10,1,11]))},{path:"/contacts",name:"Contacts",component:()=>f(()=>import("./Contacts-CQXr2RUb.js"),__vite__mapDeps([12,1,4,13]))},{path:"/:catchAll(.*)",name:"404",component:()=>f(()=>import("./404-DhdnDNyl.js"),__vite__mapDeps([14,1,15]))}],I=H({history:K("/"),routes:ke,scrollBehavior(n,o,s){return s||{top:0}}});I.beforeEach((n,o,s)=>{x.setShowLoader(!0);let i;try{i=JSON.parse(sessionStorage.getItem("navigation_history"))||[]}catch{i=[]}o.path&&i.push(n.path),sessionStorage.setItem("navigation_history",JSON.stringify(i)),s()});I.afterEach(()=>{sessionStorage.getItem("once_loaded")?setTimeout(()=>{x.setShowLoader(!1)},1170):setTimeout(()=>{sessionStorage.setItem("once_loaded",!0),x.setShowLoader(!1)},3310)});const xe={en:{moto:"ONE from «A-B-C» to «All-Turnkey» DESIGN!",headerTitle:"ONE «A-B-C» DESIGN",transcription:"One A-B-C Design",moto_CTA:"Let’s start and finish your project together – cut the ribbon to success with us!",email_subject:"Let’s Design the Perfect Space Together",mainPage:"Main page",company:"About us",about:"About our company",services:"Our services",showcases:"About our services",contacts:"Contact us",contactTip:"Want to know more? Get in touch with us!",contact_intro:"Feel free to reach out using any contact method below, or simply fill out the form, and we’ll get back to you as soon as possible!",contact_phone:"Phone",contact_mail:"Mail",contact_tg:"Telegram",form_name:"NAME",form_name_ph:"Name",form_phone:"PHONE",form_phone_tip:"Phone number must be in the format +380 XX XXX XXXX",form_project:"PROJECT",form_project_ph:"Interior design and decor",form_location:"PLACE",form_location_ph:"Kyiv, Ukraine",form_budget:"BUDGET (in UAH ₴)",form_comment:"COMMENT",form_comment_ph:"Call me from 10:00 to 16:00",form_send:"SEND",form_send_valid_tip:"Ready to submit your information",form_send_invalid_tip:"Please complete all required fields",success:"Sent!",try_again:"Try again",ambience:"Ambience",building:"Building",crafting:"Crafting",design:"Design",emailSend:"Email us",chatDirect:"Message us on Telegram",phoneUs:"Call us",copyright:"All rights reserved",design_description_full:"Design is the process of creating an aesthetically pleasing, functional, and practical environment that takes into account the needs of users, space, materials, and technologies. It encompasses various fields, including landscape, exterior, and interior design, each with its own features and tasks.",ambience_description:"Landscape design involves creating harmonious and functional outdoor environments. It focuses on gardens, parks, and public spaces, balancing nature and architecture.",building_description:"Exterior design addresses the look and feel of buildings, considering architectural styles, colors, materials, and practical aspects for functionality.",crafting_description:"Interior design emphasizes creating appealing and functional indoor spaces, considering colors, materials, furniture, and overall usability for comfort.",design_description:"Design, in general, combines art and science to create structures, objects, or environments that improve quality of life, focusing on aesthetic and functional harmony.",a00:"Ambience Ξ Landscape",b00:"Building Ξ Exterior",c00:"Crafting Ξ Interior",d00:"Design Ξ Synergy",a01_title:"Porch",a01_description:"A welcoming porch area, perfect for outdoor relaxation and gatherings, blending functionality with aesthetic charm. The classic design emphasizes comfort and practicality, making it a great extension of the living space.",a02_title:"Rose",a02_description:"A vibrant rose in full bloom, adding a touch of elegance and color to the surrounding landscape. This iconic flower serves as a timeless symbol of beauty and tranquility.",a03_title:"Lights",a03_description:"A string of outdoor lights illuminating the space, creating a magical and cozy atmosphere. Perfect for evening gatherings or simply enjoying a quiet moment in the garden.",a04_title:"Pool",a04_description:"An outdoor framed pool, ideal for cooling off during hot summer days. The simple design makes it a convenient and refreshing addition to any backyard.",a05_title:"Drainage",a05_description:"A carefully constructed drainage system designed to keep your lawn healthy and prevent waterlogging. A subtle yet essential part of any well-maintained landscape.",a06_title:"Garage",a06_description:"A sleek carport garage offering both protection for vehicles and a modern design aesthetic. Its open structure makes it a versatile solution for various outdoor settings.",a07_title:"Indoor Pool",a07_description:"A luxurious indoor pool, offering year-round relaxation and exercise opportunities. The closed, climate-controlled space ensures comfort no matter the weather.",a08_title:"Planter",a08_description:"A large concrete planter designed to house trees, combining durability with a minimalist aesthetic. This feature adds a modern touch to any outdoor area.",a09_title:"Bench",a09_description:"A sturdy concrete bench, perfect for outdoor seating. Its simple yet elegant design blends seamlessly into a variety of landscapes.",a10_title:"Pathway",a10_description:"A paved walkway made of FEM tiles, offering both aesthetic appeal and functionality. The well-constructed path leads the way through a beautifully landscaped garden.",b01_title:"Ceiling",b01_description:"Welding the ceiling structure, a critical step in building strong and durable overhead frameworks. This process ensures safety and longevity for the entire construction.",b02_title:"Terrace Door",b02_description:"A transformation of a window into a terrace door on the second floor, opening up the space to new possibilities and adding convenience for outdoor access.",b03_title:"Concrete Base",b03_description:"Laying the concrete foundation for future stone paving. This essential step provides a solid, long-lasting base for a well-crafted outdoor surface.",b04_title:"Foundation",b04_description:"Pouring the reinforced foundation for the upcoming concrete layer. A critical step in ensuring the stability and durability of the structure.",b05_title:"Polishing",b05_description:"Wall polishing under specialized lighting to achieve a smooth, glossy finish, preparing the surface for glazing paint and enhancing its aesthetic appeal.",b06_title:"Concrete Planter",b06_description:"A high-quality concrete planter with a polished, glossy surface, showcasing the precision and care taken in its casting. This durable feature is both practical and stylish.",b07_title:"Pipes & Cat",b07_description:"A playful scene with a cat inspecting plumbing pipes awaiting installation. A lighthearted moment amidst the practicalities of construction.",b08_title:"Protective Film",b08_description:"Protective film covering areas to keep them clean and dust-free during construction. This ensures a neater workspace and a smoother final result.",b09_title:"Shower Cabin",b09_description:"A transparent glass shower cabin, installed with delicate precision. Its sleek design adds modern elegance to any bathroom interior.",b10_title:"Stone Paving",b10_description:"A perfectly leveled stone-paved surface, complete with a slight incline for proper drainage. The craftsmanship ensures both beauty and practicality.",c01_title:"Golden Lines",c01_description:"Decorative plasterwork featuring golden lines, adding a luxurious and artistic touch to the interior. The intricate design brings sophistication and elegance to the space.",c02_title:"Gold & Carbon",c02_description:"A striking continuation of the decorative plaster theme, mixing gold and carbon tones for a unique and bold aesthetic. This modern design exudes both style and substance.",c03_title:"Thousand Lines",c03_description:"Intricately detailed decorative plaster with numerous fine lines, creating texture and depth. This artwork transforms a simple wall into a statement piece.",c04_title:"Wood Texture Effect",c04_description:"Plasterwork that masterfully mimics the natural texture of wood, combining the warmth of organic materials with the durability of plaster. This eco-friendly technique adds both sophistication and warmth, making it an elegant design solution for any space.",c05_title:"Brick Effect",c05_description:"Decorative plaster mimicking the look of brick, bringing a rustic charm to the interior. The rough texture adds character and authenticity to the space.",c06_title:"Kids Room",c06_description:"A nearly finished children’s room, featuring smooth surfaces and custom colors. This carefully designed space balances fun with practicality.",c07_title:"Refreshed Bedroom",c07_description:"Beautifully restored walls and ceiling, polished to perfection after extensive renovations. Coated in multiple layers of natural, subtly tinted paint, creating a harmonious and refined ambiance.",c08_title:"Islands",c08_description:"Decorative plaster resembling small islands, creating a unique and playful visual effect. This artistic feature brings a sense of adventure to the room.",c09_title:"Glass Veranda",c09_description:"A large veranda with folding glass doors, allowing for an open, airy space that merges indoor comfort with outdoor beauty. A seamless transition between environments.",c10_title:"Azure Islands",c10_description:"A vibrant decorative feature with bright azure tones, bringing a pop of color and a refreshing feel to the space. The islands create a dynamic focal point.",d01_title:"Kitchen Lighting",d01_description:"A thoughtfully designed kitchen lighting setup that combines function with style. The strategic placement ensures a bright, welcoming space for cooking and socializing.",d02_title:"Multi-Function Cabinet",d02_description:"A multi-purpose kitchen cabinet offering a balance of storage and design. This modern piece provides functionality without compromising on aesthetics.",d03_title:"Stone Table",d03_description:"An elegant stone table that serves as a centerpiece in a high-end kitchen. The solid, polished surface speaks to both luxury and durability.",d04_title:"Bar Table",d04_description:"A stylish bar table that complements the overall kitchen design. The sleek lines and modern materials make it a functional yet sophisticated addition.",d05_title:"Green Zone",d05_description:"A unique wall design that blends gypsum board with wooden accents, creating a cozy and natural feel in the space. The green zone adds warmth and a touch of nature.",d06_title:"Stencil Flower",d06_description:"A decorative plaster design resembling a large flower, blending ancient craftsmanship with contemporary aesthetics. This bold design is both timeless and modern.",d07_title:"Tile Path",d07_description:"A neatly laid tile path that guides you through a beautifully landscaped area. The craftsmanship ensures durability and aesthetic harmony with the surroundings.",d08_title:"Perfect Harmony",d08_description:"A room where every element, from tiles to decor, works in perfect harmony. The cozy, balanced design is completed by two satisfied pets enjoying the space.",d09_title:"Concrete Counter",d09_description:"A polished concrete countertop for the kitchen sink, gleaming with a glossy finish. This durable surface combines functionality with a sleek, modern design.",d10_title:"Our Colors",d10_description:"A stunning example of decorative plastering showcasing the vibrant yellow and blue colors of Ukraine. This design captures the essence of national pride and identity, creating a warm and inviting atmosphere.",lang:"English",flag:"./Flag_of_the_UK.webp",toggleLangTip:"Change language",toggleThemeTip:"Change theme",404:"No such a page found...","404_1":"This route","404_2":"has no destination, but...","404_3":"...the way back still exists.","404_4":"Here it is,",back404:"Back to the main",backPreviousPage:"Go back to page",aboutUs1:"We are a young yet ambitious team with each of us bringing extensive and diverse experience to the table. We believe that a talented person can be talented in many areas — whether in design, sports, music, programming, or painting. Though professionally trained as engineers in power networks and construction, we’ve chosen to dedicate ourselves wholeheartedly to DESIGN.",aboutUs21:"We see the world as a grand Design — a masterpiece crafted by the universal energy that began with Design, exists through Design, and will end in Design (and of course, Love ",aboutUs22:"). This vision has inspired us to become a company fully charged with creating beauty, harmony, and thoughtful Design in all forms: from landscapes and exteriors to interiors and web. Still, our primary focus is on interior Design, finishing works, and decor.",aboutUs3:"We excel in creating concrete structures, ranging from building frameworks to concrete furniture. We are proficient in setting up communication systems, mastering finishing techniques, and installing a variety of elements and equipment. We continually broaden our professional skills, enhance our experience, refine our tools, and grow our portfolio — all while increasing the number of satisfied clients.",aboutUs4:"If you need help creating a functional and beautifully designed space “turnkey” and with all the right feng shui, reach out in the way that suits you best. We’d be thrilled to help bring your boldest, most intricate design projects to life.",lifeStyle1:"Auto-",lifeStyle2:"Biography-",lifeStyle3:"Coding-",lifeStyle4:"Designers",lifeStyle5:"Living to design, designing for life."},uk:{moto:"ОДИН від «А-Б-Ц» до «Під-ключ-Все» ДИЗАЙН!",headerTitle:"ОДИН «А-Б-Ц» ДИЗАЙН",transcription:"Один А-Б-Ц Дизайн",moto_CTA:"Розпочнемо та завершимо ваш проєкт разом – переріжемо стрічку успіху!",email_subject:"Створимо ідеальний простір разом",mainPage:"Головна сторінка",company:"Про нас",about:"Про нашу компанію",services:"Наші послуги",showcases:"Про наші послуги",contacts:"Зв’язатися з нами",contactTip:"Хочете дізнатися більше? Зв’яжіться з нами!",contact_intro:"Зв’яжіться з нами будь-яким зручним для вас способом або просто заповніть форму, і ми зв’яжемося з вами якнайшвидше!",contact_phone:"Телефон",contact_mail:"Пошта",contact_tg:"Телеграм",form_name:"ІМ’Я",form_name_ph:"Ім’я",form_phone:"ТЕЛЕФОН",form_phone_tip:"Номер телефону має бути у форматі +380 XX XXX XXXX",form_project:"ПРОЕКТ",form_project_ph:"Дизайн і декор інтер’єру",form_location:"МІСЦЕ",form_location_ph:"Київ, Ukraine",form_budget:"БЮДЖЕТ (в грн ₴)",form_comment:"КОМЕНТАР",form_comment_ph:"Дзвоніть мені з 10:00 до 16:00",form_send:"НАДІСЛАТИ",form_send_valid_tip:"Готові надіслати ваші дані",form_send_invalid_tip:"Будь ласка, заповніть усі обов’язкові поля",success:"Відправлено!",try_again:"Спробуйте ще раз",ambience:"Атмосфера",building:"Втілення",crafting:"Створення",design:"Дизайн",emailSend:"Написати листа",chatDirect:"Написати в Telegram",phoneUs:"Подзвонити нам",copyright:"Усі права захищено",design_description_full:"Дизайн — це процес створення естетично привабливого, функціонального та практичного середовища, який враховує потреби користувачів, простір, матеріали та технології. Він охоплює різні напрямки, включаючи ландшафтний, екстер’єрний та інтер’єрний дизайн, кожен із яких має свої особливості й задачі.",ambience_description:"Ландшафтний дизайн полягає у створенні гармонійного та функціонального зовнішнього середовища. Він охоплює проєктування садів, парків і громадських просторів, створюючи баланс між природою та архітектурою.",building_description:"Екстер’єрний дизайн стосується зовнішнього вигляду будівель, враховуючи архітектурні стилі, кольори, матеріали та практичні аспекти функціональності.",crafting_description:"Інтер’єрний дизайн фокусується на створенні привабливих і функціональних внутрішніх просторів, враховуючи кольори, матеріали, меблі та загальну зручність для комфорту.",design_description:"Дизайн, в цілому, поєднує мистецтво і науку для створення структур, об’єктів або середовищ, які покращують якість життя, зосереджуючи увагу на естетичній та функціональній гармонії.",a00:"Атмосфера Ξ Ландшафт",b00:"Втілення Ξ Екстер’єр",c00:"Створення Ξ Інтер’єр",d00:"Дизайн Ξ Синергія",a01_title:"Ганок",a01_description:"Затишний ганок, ідеальний для відпочинку на свіжому повітрі та сімейних зібрань. Класичний дизайн поєднує функціональність і естетику, створюючи додатковий житловий простір.",a02_title:"Троянда",a02_description:"Яскрава троянда в повному розквіті, що додає нотку елегантності та кольору в ландшафт. Ця квітка символізує красу та гармонію.",a03_title:"Гірлянда",a03_description:"Вулична гірлянда, що створює чарівну та затишну атмосферу. Ідеально підходить для вечірніх зустрічей або тихого відпочинку в саду.",a04_title:"Басейн",a04_description:"Каркасний басейн, ідеальний для охолодження в спекотні літні дні. Простий дизайн робить його зручним доповненням до будь-якого двору.",a05_title:"Дренаж",a05_description:"Система дренажу для газону, яка запобігає затопленню і зберігає здоров’я трави. Незамінний елемент доглянутого ландшафту.",a06_title:"Гараж",a06_description:"Навісний гараж, що забезпечує захист для автомобілів та стильний дизайн. Відкрита конструкція робить його універсальним рішенням для різних зовнішніх просторів.",a07_title:"Внутрішній басейн",a07_description:"Розкішний закритий басейн, який забезпечує комфортний відпочинок і можливість тренувань цілий рік. Затишне приміщення з клімат-контролем гарантує зручність у будь-яку пору.",a08_title:"Вазон",a08_description:"Великий бетонний вазон для дерева, який поєднує міцність і сучасний мінімалізм. Чудовий акцент для будь-якого зовнішнього простору.",a09_title:"Лавка",a09_description:"Стійка бетонна лавка для зовнішнього використання. Її простий, але елегантний дизайн гармонійно вписується в різні ландшафтні рішення.",a10_title:"Доріжка",a10_description:"Викладена плиткою доріжка з ФЕМ, що поєднує естетику та функціональність. Добре побудована дорога веде через чудовий сад.",b01_title:"Стеля",b01_description:"Зварювання стельової конструкції – важливий етап, що гарантує міцність і довговічність будівлі.",b02_title:"Двері на терасу",b02_description:"Перетворення вікна на двері на терасу на другому поверсі – це відкриття нових можливостей і зручності для доступу на вулицю.",b03_title:"Фундамент",b03_description:"Бетонування основи під майбутню бруківку з каменю. Цей етап забезпечує довговічність і міцність майбутнього покриття.",b04_title:"Армований фундамент",b04_description:"Заливка армованого фундаменту для наступного бетонного шару. Важливий крок для забезпечення стабільності і міцності конструкції.",b05_title:"Шліфування стін",b05_description:"Шліфування стін під спеціальним освітленням для досягнення гладкого, глянцевого фінішу. Це готує поверхню для глазурного фарбування та покращує її естетичний вигляд.",b06_title:"Глянцевий вазон",b06_description:"Якісно відлитий бетонний вазон з глянцевою поверхнею. Він демонструє точність та турботу про кожну деталь, стаючи практичним і стильним елементом.",b07_title:"Труби та кицька",b07_description:"Кумедна сцена, де кицька досліджує сантехнічні труби, що очікують на монтаж. Легкий момент серед практичних будівельних робіт.",b08_title:"Захисна плівка",b08_description:"Захисна плівка, яка допомагає підтримувати чистоту і мінімізує кількість пилу під час робіт. Це забезпечує більш акуратне робоче місце та чистий кінцевий результат.",b09_title:"Душова кабіна",b09_description:"Прозора скляна душова кабіна, встановлена з ретельною точністю. Її витончений дизайн додає сучасної елегантності ванній кімнаті.",b10_title:"Мощення каменем",b10_description:"Рівно викладена поверхня з каменю з правильним нахилом для стоку води. Цей високоякісний результат забезпечує як естетику, так і практичність.",c01_title:"Золоті лінії",c01_description:"Декоративна шпаклівка із золотими лініями, що додає розкоші та витонченості інтер’єру. Інтригуючий дизайн створює відчуття багатства та стилю.",c02_title:"Золото та карбон",c02_description:"Комбінація золота та карбону в декоративній шпаклівці створює сміливий та унікальний вигляд. Цей сучасний дизайн вирізняється гармонією кольорів та текстур.",c03_title:"Тисяча ліній",c03_description:"Деталізована декоративна шпаклівка з численними тонкими лініями, що створюють текстуру та глибину. Це перетворює стіну на справжній мистецький витвір.",c04_title:"Текстура дерева",c04_description:"Шпаклівка, що майстерно імітує текстуру дерева, поєднуючи тепло природних матеріалів і міцність шпаклівки. Це екологічне рішення додає інтер’єру витонченості та тепла, створюючи елегантний вигляд простору.",c05_title:"Імітація цегли",c05_description:"Декоративна шпаклівка, яка відтворює вигляд цегли, додаючи інтер’єру сільського шарму. Груба текстура додає характеру та автентичності.",c06_title:"Дитяча кімната",c06_description:"Майже завершена дитяча кімната з гладкими поверхнями та індивідуальними кольорами. Простір збалансований між практичністю та комфортом.",c07_title:"Оновлена спальня",c07_description:"Естетично відреставровані стіни та стеля, відполіровані після капітальних робіт. Покриті кількома шарами натуральної тонованої фарби, що створює гармонійний і вишуканий вигляд.",c08_title:"Острівки",c08_description:"Декоративна шпаклівка у вигляді маленьких острівців, що створює цікавий ігровий ефект. Цей художній елемент привносить у кімнату відчуття пригод.",c09_title:"Прозора веранда",c09_description:"Велика веранда зі складними скляними дверима, що дозволяє легко поєднати комфорт приміщення з красою природи. Ідеальний перехід між просторами.",c10_title:"Лазурні острівки",c10_description:"Яскравий декоративний елемент з блакитними відтінками, що додає простору свіжість. Острівки створюють динамічний акцент у дизайні.",d01_title:"Освітлення кухні",d01_description:"Дизайнерське рішення для освітлення кухні, що поєднує функціональність із стилем. Світильники розташовані для забезпечення яскравого і затишного простору.",d02_title:"Шафа",d02_description:"Мультифункціональна шафа для кухні, що поєднує зберігання з естетичним дизайном. Сучасна деталь, яка додає простору практичності та стилю.",d03_title:"Кам’яний стіл",d03_description:"Елегантний стіл з каменю, який стає центром уваги в розкішній кухні. Міцна і полірована поверхня підкреслює розкіш і довговічність.",d04_title:"Стіл-бар",d04_description:"Стильний барний стіл, що доповнює загальний дизайн кухні. Чіткі лінії і сучасні матеріали роблять його функціональним і вишуканим елементом.",d05_title:"Зелена зона",d05_description:"Оригінальний дизайн стін з гіпсокартону та дерев’яних вставок, що створює затишок і природність у приміщенні. Зелена зона додає простору тепла та натхнення.",d06_title:"Трафарет квітка",d06_description:"Декоративна шпаклівка у вигляді великої квітки, що поєднує старовинні ремесла з сучасною естетикою. Сміливий і водночас витончений акцент у просторі.",d07_title:"Тротуарна плитка",d07_description:"Охайно викладена плитка, що проводить крізь чудово облаштовану зону. Витончений і практичний акцент у садовому дизайні.",d08_title:"Гармонія",d08_description:"Кімната, де кожен елемент, від плитки до декору, знаходиться у повній гармонії. Задоволені домашні улюбленці власників насолоджуються комфортом у новому просторі.",d09_title:"Бетонна стільниця",d09_description:"Полірована бетонна стільниця для кухонної мийки з блискучим глянцевим фінішем. Ця міцна поверхня поєднує функціональність із сучасним дизайном.",d10_title:"Наші кольори",d10_description:"Приклад декоративної шпаклівки з використанням жовтого та блакитного кольорів – символів України. Цей дизайн відображає гордість і національну ідентичність, створюючи теплу і приємну атмосферу.",lang:"Ukrainian",flag:"./Flag_of_Ukraine.webp",toggleLangTip:"Змінити мову",toggleThemeTip:"Змінити тему",404:"Такої сторінки не знайдено...","404_1":"Цей маршрут","404_2":"не має кінцевого призначення, але...","404_3":"...зворотній шлях продовжує існувати.","404_4":"Ось він,",back404:"Повернутися на головну",backPreviousPage:"Повернутися до сторінки",aboutUs1:"Ми молода, проте амбітна команда, і за плечима кожного з нас — обширний і різноманітний досвід. Ми вважаємо, що талановита людина може бути талановитою у всьому — в дизайні, спорті, музиці, програмуванні чи малюванні. І хоча за фаховою освітою ми інженери електромереж та будівництва, ми вирішили присвятити себе ДИЗАЙНу з великої літери.",aboutUs21:"Ми бачимо цей світ як велике творіння, яке відображає задум Творця — усе почалося з Дизайну, втілюється в Дизайні та завершиться Дизайном (ну і Любов’ю, звісно ж ",aboutUs22:"). Саме це надихнуло нас стати компанією, зарядженою на створення краси, гармонії та продуманого до деталей Дизайну у всіх його проявах: ландшафтному, екстер’єрному, інтер’єрному та веб. Однак наш чіткий фокус — саме на Дизайні приміщень, оздоблювальних роботах та декорі.",aboutUs3:"Ми також вміємо створювати бетонні конструкції — від каркасів будівель до бетонних меблів. Добре знаємося на облаштуванні комунікацій, володіємо багатьма оздоблювальними техніками та маємо багатий досвід монтажу різних елементів і приладів. Постійно розширюємо спектр своїх професійних компетенцій, досвід, інструментарій — і портфоліо, збільшуючи кількість задоволених клієнтів.",aboutUs4:"Якщо вам потрібна допомога в облаштуванні простору “під ключ” і з усім феншуєм — звертайтеся зручним для вас способом. Будемо раді допомогти в реалізації ваших найсміливіших і комплексних дизайнерських проектів.",lifeStyle1:"Auto-",lifeStyle2:"Biography-",lifeStyle3:"Coding-",lifeStyle4:"Designers",lifeStyle5:"Жити дизайном, творити для життя."}},Te=J({locale:localStorage.getItem("lang")||"en",fallbackLocale:"en",messages:xe}),Ae={beforeMount(n,o){const s=i=>{!n.contains(i.target)&&n!==i.target&&o.value()};document.addEventListener("click",s),n._clickOutsideHandler=s},unmounted(n){document.removeEventListener("click",n._clickOutsideHandler)}};Y(we).use(I).use(Te).directive("click-outside",Ae).mount("#app");export{f as _,N as a,Te as i,x as s};
