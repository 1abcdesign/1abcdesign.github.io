import{q as l,a as v,f as a,t as s,d as E,e as i,I as p,b as I,J as R,o as f}from"./vendor-7ZIIYpuG.js";import{e as y}from"./common-Dz5E8zRs.js";import{a as S}from"./index-BBXhVigZ.js";const A={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_BASE_URL:"/",VITE_EMAILER_SERVICE_ID:"service_b8m9pi3",VITE_EMAILER_TEMPLATE_ID:"template_62xrml7",VITE_EMAILER_USER_KEY:"8kWyayb90IiSLZud_",VITE_GEO_API_KEY:"2b8e2712d081486a81f6dd403a8a76f4"},L=["data-text"],M=["placeholder"],D=["data-text"],U=["title"],C=["data-text"],P=["placeholder"],j=["data-text"],B=["data-text"],k=["placeholder"],w={type:"submit"},q={key:0,class:"success"},K={key:1,class:"error"},N={__name:"Contacts",setup(Y){const r=l(""),n=l(""),u=l(""),m=l(""),d=l(""),_=l(!1),c=l(!1),h=e=>{e.target.value.startsWith("+380")||(e.target.value="+380")},b=e=>{const t=e.target.value.replace(/[^0-9+]/g,"").slice(0,13);e.target.value=t.startsWith("+380")?t:"+380"+t.slice(4),n.value=e.target.value},{VITE_EMAILER_SERVICE_ID:g,VITE_EMAILER_TEMPLATE_ID:$,VITE_EMAILER_USER_KEY:V}=A,T=async()=>{const e={name:r.value,phone:n.value,project:u.value,message:`
      Name: ${r.value}
      Phone: ${n.value}
      Project: ${u.value}
      Budget: ${m.value}
      Comment: ${d.value}
    `.trim()};try{const t=await y.send(g,$,e,V);console.log("Email sent successfully!",t),_.value=!0,c.value=!1}catch(t){console.error("Error sending email:",t),_.value=!1,c.value=!0}r.value="",n.value="",u.value="",m.value="",d.value="",setTimeout(()=>{_.value=!1,c.value=!1},3e3)};return(e,t)=>(f(),v("main",null,[a("p",null,[a("strong",null,[a("em",null,s(e.$t("contact_intro")),1)])]),a("p",null,[E(s(e.$t("contact_phone"))+": ",1),t[5]||(t[5]=a("a",{href:"tel:+380933789883"},"+380 93 378 9883",-1))]),a("p",null,[E(s(e.$t("contact_tg"))+": ",1),t[6]||(t[6]=a("a",{href:"http://t.me/abcdesign1"},"@abcdesign1",-1))]),a("p",null,[E(s(e.$t("contact_mail"))+": ",1),t[7]||(t[7]=a("a",{href:"mailto:one.abcdesign@gmail.com"},"one.abcdesign@gmail.com",-1))]),a("form",{onSubmit:R(T,["prevent"]),class:"form",autocomplete:"on"},[a("label",{"data-text":e.$t("form_name")},[i(a("input",{autocomplete:"name",type:"text",placeholder:e.$t("form_name_ph"),"onUpdate:modelValue":t[0]||(t[0]=o=>r.value=o),required:"","aria-label":"name-input"},null,8,M),[[p,r.value]])],8,L),a("label",{"data-text":e.$t("form_phone")},[i(a("input",{autocomplete:"tel",type:"tel",placeholder:"+380 99 999 9999",onFocus:h,onInput:b,"onUpdate:modelValue":t[1]||(t[1]=o=>n.value=o),required:"","aria-label":"phone-input",pattern:"^\\+380[0-9]{9}$",title:e.$t("form_phone_tip")},null,40,U),[[p,n.value]])],8,D),a("label",{"data-text":e.$t("form_project")},[i(a("input",{type:"text",placeholder:e.$t("form_project_ph"),"onUpdate:modelValue":t[2]||(t[2]=o=>u.value=o),required:"","aria-label":"project-input"},null,8,P),[[p,u.value]])],8,C),a("label",{"data-text":e.$t("form_budget")},[i(a("input",{type:"number",placeholder:"100000","onUpdate:modelValue":t[3]||(t[3]=o=>m.value=o),"aria-label":"budget-input"},null,512),[[p,m.value]])],8,j),a("label",{"data-text":e.$t("form_comment")},[i(a("textarea",{"onUpdate:modelValue":t[4]||(t[4]=o=>d.value=o),placeholder:e.$t("form_comment_ph")},null,8,k),[[p,d.value]])],8,B),a("button",w,[E(s(e.$t("form_send"))+" ",1),_.value?(f(),v("span",q,s(e.$t("success")),1)):I("",!0),c.value?(f(),v("span",K,s(e.$t("try_again")),1)):I("",!0)])],32)]))}},F=S(N,[["__scopeId","data-v-906eede0"]]);export{F as default};
