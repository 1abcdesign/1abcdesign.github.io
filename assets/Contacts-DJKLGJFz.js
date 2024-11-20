import{C as g,s as n,a as u,f as o,t as s,d as E,e as p,K as c,k as L,I as M,b as $,L as P,o as d}from"./vue-C41VRU8M.js";import{F as D,e as j}from"./vendor-Cl-SMhVf.js";import{_ as U}from"./index-eV219ZWB.js";const q={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_ASSETS_DIR:"https://1abcdesign.github.io",VITE_BASE_URL:"/",VITE_EMAILER_SERVICE_ID:"service_b8m9pi3",VITE_EMAILER_TEMPLATE_ID:"template_62xrml7",VITE_EMAILER_USER_KEY:"8kWyayb90IiSLZud_",VITE_GEO_API_KEY:"2b8e2712d081486a81f6dd403a8a76f4",VITE_GMAPS_API_KEY:"AIzaSyCul27pArARh2AfzsvLqCH-uSqok31yaqA"},B={class:"contacts"},x={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round","stroke-linejoin":"round",class:"icon feather-phone","aria-hidden":"true",style:{width:"1rem",height:"1rem",position:"relative",top:"0.15rem"}},K=["title"],z={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round","stroke-linejoin":"round",class:"icon feather-send",style:{width:"1rem",height:"1rem",position:"relative",top:"0.15rem"}},Y=["title"],F={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round","stroke-linejoin":"round",class:"icon feather-mail",style:{width:"1rem",height:"1rem",position:"relative",top:"0.15rem"}},N=["title"],O=["data-text"],H=["placeholder"],W=["data-text"],G=["title"],Z=["data-text"],J=["placeholder"],Q=["data-text"],X=["data-text"],ee=["data-text"],te=["placeholder"],oe=["title"],ae={key:0,class:"success flex-center","aria-live":"polite"},le={key:1,class:"error flex-center","aria-live":"polite"},ne={__name:"Contacts",setup(se){const I=g(()=>"AIzaSyCul27pArARh2AfzsvLqCH-uSqok31yaqA"),r=n(""),l=n(""),i=n(""),m=n(""),_=n(""),h=n(""),v=n(!1),f=n(!1),w=g(()=>r.value&&l.value&&i.value&&m.value),y=e=>{e.target.value.startsWith("+380")||(e.target.value="+380")},b=e=>{let t=e.target.value.replace(/[^0-9+]/g,"").slice(0,13);t.startsWith("+380")||(t="+380"+t.replace("+380","")),t=t.replace(/^(\+380)(\d{0,2})$/,"$1 $2").replace(/^(\+380)(\d{0,2})(\d{0,3})$/,"$1 $2 $3").replace(/^(\+380)(\d{0,2})(\d{0,3})(\d{0,4})$/,"$1 $2 $3 $4"),e.target.value=t,l.value=t},A=e=>{const t=e.target.value;(t==="+380"||t==="+380 ")&&(e.target.value="",l.value="")},V=({name:e,state:t,country:a})=>{m.value=[e,t,a].join(", ")},S=()=>{r.value="",l.value="",i.value="",m.value="",_.value="",h.value=""},{VITE_EMAILER_SERVICE_ID:k,VITE_EMAILER_TEMPLATE_ID:T,VITE_EMAILER_USER_KEY:R}=q,C=async()=>{const e={name:r.value,phone:l.value,project:i.value,message:`
      Name: ${r.value}
      Phone: ${l.value}
      Project: ${i.value}
      Place: ${m.value}
      Budget: ${_.value}
      Comment: ${h.value}
    `.trim()};try{const t=await j.send(k,T,e,R);console.log("Email sent successfully!",t),v.value=!0,f.value=!1}catch(t){console.error("Error sending email:",t),v.value=!1,f.value=!0}setTimeout(()=>{v.value=!1,f.value=!1,S()},5e3)};return(e,t)=>(d(),u("main",B,[o("p",null,[o("strong",null,[o("em",null,s(e.$t("contact_intro")),1)])]),o("p",null,[(d(),u("svg",x,t[5]||(t[5]=[o("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"},null,-1)]))),E(" "+s(e.$t("contact_phone"))+": ",1),o("a",{href:"tel:+380933789883",title:e.$t("phoneUs")}," +380 93 378 9883 ",8,K)]),o("p",null,[(d(),u("svg",z,t[6]||(t[6]=[o("line",{x1:"22",y1:"2",x2:"11",y2:"13"},null,-1),o("polygon",{points:"22 2 15 22 11 13 2 9 22 2"},null,-1)]))),E(" "+s(e.$t("contact_tg"))+": ",1),o("a",{href:"http://t.me/abcdesign1",title:e.$t("chatDirect")}," @abcdesign1 ",8,Y)]),o("p",null,[(d(),u("svg",F,t[7]||(t[7]=[o("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},null,-1),o("polyline",{points:"22,6 12,13 2,6"},null,-1)]))),E(" "+s(e.$t("contact_mail"))+": ",1),o("a",{href:"mailto:one.abcdesign@gmail.com",title:e.$t("emailSend")}," one.abcdesign@gmail.com ",8,N)]),o("form",{onSubmit:P(C,["prevent"]),class:"form flex-align",autocomplete:"on"},[o("label",{"data-text":e.$t("form_name")},[p(o("input",{autocomplete:"name",type:"text",placeholder:e.$t("form_name_ph"),"onUpdate:modelValue":t[0]||(t[0]=a=>r.value=a),required:"","aria-label":"name-input"},null,8,H),[[c,r.value]])],8,O),o("label",{"data-text":e.$t("form_phone")},[p(o("input",{autocomplete:"tel",type:"tel",placeholder:"+380 99 999 9999",onFocus:y,onInput:b,onBlur:A,"onUpdate:modelValue":t[1]||(t[1]=a=>l.value=a),required:"","aria-label":"phone-input",pattern:"^\\+380 \\d{2} \\d{3} \\d{4}$",title:e.$t("form_phone_tip")},null,40,G),[[c,l.value]])],8,W),o("label",{"data-text":e.$t("form_project")},[p(o("input",{type:"text",placeholder:e.$t("form_project_ph"),"onUpdate:modelValue":t[2]||(t[2]=a=>i.value=a),required:"","aria-label":"project-input"},null,8,J),[[c,i.value]])],8,Z),o("label",{"data-text":e.$t("form_location")},[L(M(D),{"api-key":I.value,onSet:V,placeholder:e.$t("form_location_ph"),required:""},null,8,["api-key","placeholder"])],8,Q),o("label",{"data-text":e.$t("form_budget")},[p(o("input",{type:"number",placeholder:"100000",min:"10000","onUpdate:modelValue":t[3]||(t[3]=a=>_.value=a),"aria-label":"budget-input"},null,512),[[c,_.value]])],8,X),o("label",{"data-text":e.$t("form_comment")},[p(o("textarea",{"onUpdate:modelValue":t[4]||(t[4]=a=>h.value=a),placeholder:e.$t("form_comment_ph")},null,8,te),[[c,h.value]])],8,ee),o("button",{type:"submit",title:w.value?e.$t("form_send_valid_tip"):e.$t("form_send_invalid_tip")},[E(s(e.$t("form_send"))+" ",1),v.value?(d(),u("span",ae,s(e.$t("success")),1)):$("",!0),f.value?(d(),u("span",le,s(e.$t("try_again")),1)):$("",!0)],8,oe)],32)]))}},de=U(ne,[["__scopeId","data-v-f1c6dcdc"]]);export{de as default};
