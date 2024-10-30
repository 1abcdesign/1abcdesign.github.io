const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-66YsA5RL.js","assets/vendor-7ZIIYpuG.js","assets/common-Dz5E8zRs.js","assets/Home-C3K9bYri.css","assets/Company-CEAVI4TR.js","assets/Services-BEt1yKT0.js","assets/Services-ByBw4GW3.css","assets/Contacts-B5YVYVzD.js","assets/Contacts-CgnJyO1W.css","assets/404-BiDhzjPW.js"])))=>i.map(i=>d[i]);
import{q as v,s as E,o as p,a as m,u as S,b as M,x as F,f as o,y as R,z as q,A as z,e as X,g as I,F as L,p as V,i as B,k as _,w as x,d as k,t as T,B as N,C as H,D as K,E as G}from"./vendor-7ZIIYpuG.js";import{a as W}from"./common-Dz5E8zRs.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const d of a)if(d.type==="childList")for(const t of d.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&r(t)}).observe(document,{childList:!0,subtree:!0});function e(a){const d={};return a.integrity&&(d.integrity=a.integrity),a.referrerPolicy&&(d.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?d.credentials="include":a.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function r(a){if(a.ep)return;a.ep=!0;const d=e(a);fetch(a.href,d)}})();const Y={__name:"LoaderView",setup(s){const n=()=>document.documentElement.getAttribute("data-theme")==="dark"?"#fff":"#000",e=v(2340),r=v(!0);E(()=>{const t=document.getElementById("logo_2d").getContext("2d");t.lineWidth=28,t.strokeStyle=n();const g=[l=>{t.beginPath(),t.moveTo(200,400),t.lineTo(200,400-l),t.stroke()},l=>{t.beginPath(),t.moveTo(200,0),t.lineTo(200-l,l),t.stroke()},l=>{t.beginPath(),t.moveTo(0,200),t.lineTo(l,200),t.stroke()},l=>{t.beginPath(),t.ellipse(200,105,93,93,Math.PI/2,0,-Math.PI/180*l,!0),t.stroke()},l=>{t.beginPath(),t.ellipse(200,200,186,186,-Math.PI/2,0,-Math.PI/180*l,!0),t.stroke()}],u=[.17,.12,.08,.13,.5].map(l=>e.value*l),i=[400,200,200,180,360];let c=null;function h(l){c||(c=l);const b=l-c;let A=0;for(let f=0;f<g.length;f++){const j=A,C=A+u[f];if(b>=j&&b<=C){const $=(b-j)/u[f],U=i[f]*$;g[f](Math.min(U,i[f]))}else b>C&&g[f](i[f]);A+=u[f]}b<e.value&&requestAnimationFrame(h)}requestAnimationFrame(h)});const a=()=>{r.value=!1};return(d,t)=>r.value?(p(),m("div",{key:0,id:"logo_overlay",onAnimationend:a},t[0]||(t[0]=[S('<div id="logo_2d_wrapper"><canvas id="logo_2d" width="400" height="400" style="stroke:var(--color0);"></canvas><svg id="svg_placeholder" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"><line x1="200" y1="400" x2="200" y2="0"></line><line x1="200" y1="0" x2="0" y2="200"></line><line x1="0" y1="200" x2="200" y2="200"></line><path d="M 200,14 A 93, 93, 0 1 1 200, 200" fill="none"></path><circle cx="200" cy="200" r="186" fill="none"></circle></svg></div>',1)]),32)):M("",!0)}},D="/logo_light.png",J=["title"],Z={key:0,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-moon"},Q={key:1,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-sun"},ee={__name:"ThemeSwitcher",setup(s){const n="/",e=v("light");function r(){e.value=e.value==="light"?"dark":"light",localStorage.setItem("theme",e.value),console.log(n),t(),u(),a(),d(),g()}function a(){const i=localStorage.getItem("theme"),c=document.getElementById("logoImage"),h=document.getElementById("logoImageFooter"),l=i==="light"?n+"logo_light.png":n+"logo_dark.png";c.setAttribute("src",l),h.setAttribute("src",l)}function d(){const i=localStorage.getItem("theme"),c=document.getElementById("favicon");i==="dark"?c.href=n+"favicon_dark.ico":c.href=n+"favicon_light.ico"}const t=()=>{const i=e.value;document.documentElement.style.setProperty("--theme-color",i==="light"?"#000":"#fff"),document.documentElement.classList.add("force-redraw"),setTimeout(()=>{document.documentElement.classList.remove("force-redraw")},50)},g=()=>{const i=document.querySelectorAll(".feather"),c=e.value==="light"?"#000":"#fff";i.forEach(h=>{h.setAttribute("stroke",c)})},u=()=>{const i=document.querySelectorAll(".feather");i.forEach(c=>{c.classList.add("theme-change")}),setTimeout(()=>{i.forEach(c=>c.classList.remove("theme-change"))},500)};return E(()=>{const i=localStorage.getItem("theme")||"light";e.value=i,t(),a(),d(),g()}),F(e,i=>{document.documentElement.setAttribute("data-theme",i)}),(i,c)=>(p(),m("button",{onClick:r,class:"theme-switcher",title:i.$t("toggleThemeTip")},[e.value==="light"?(p(),m("svg",Z,c[0]||(c[0]=[o("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},null,-1)]))):(p(),m("svg",Q,c[1]||(c[1]=[S('<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',9)])))],8,J))}},te={en:{company:"About us",about:"About the company",services:"Our services",showcases:"About our services",contacts:"Contact us",contact_intro:"Feel free to reach out using any contact method below, or simply fill out the form, and we’ll get back to you as soon as possible!",contact_phone:"Phone",contact_mail:"Mail",contact_tg:"Telegram",form_name:"NAME",form_name_ph:"Name",form_phone:"PHONE",form_phone_tip:"Phone number must be in the format +380XXXXXXXXX",form_project:"PROJECT",form_project_ph:"Interior design and decor",form_budget:"BUDGET (in UAH ₴)",form_comment:"COMMENT",form_comment_ph:"Call me back between 10AM and 16PM",form_send:"SEND",success:"Sent!",try_again:"Try again",ambience:"Ambience",building:"Building",crafting:"Crafting",design:"Design",moto:"From Sketch to Turnkey Design — All in One Place",emailSend:"Send us an email",chatDirect:"Start chatting via Telegram",phoneUs:"Make a cellphone call",copyright:"All rights reserved",design_description_full:"Design is the process of creating an aesthetically pleasing, functional, and practical environment that takes into account the needs of users, space, materials, and technologies. It encompasses various fields, including landscape, exterior, and interior design, each with its own features and tasks.",ambience_description:"Landscape design involves creating harmonious and functional outdoor environments. It focuses on gardens, parks, and public spaces, balancing nature and architecture.",building_description:"Exterior design addresses the look and feel of buildings, considering architectural styles, colors, materials, and practical aspects for functionality.",crafting_description:"Interior design emphasizes creating appealing and functional indoor spaces, considering colors, materials, furniture, and overall usability for comfort.",design_description:"Design, in general, combines art and science to create structures, objects, or environments that improve quality of life, focusing on aesthetic and functional harmony.",a00:"Ambience Ξ Landscape",b00:"Building Ξ Exterior",c00:"Crafting Ξ Interior",d00:"Design Ξ Synergy",a01_title:"Porch",a01_description:"A welcoming porch area, perfect for outdoor relaxation and gatherings, blending functionality with aesthetic charm. The classic design emphasizes comfort and practicality, making it a great extension of the living space.",a02_title:"Rose",a02_description:"A vibrant rose in full bloom, adding a touch of elegance and color to the surrounding landscape. This iconic flower serves as a timeless symbol of beauty and tranquility.",a03_title:"Lights",a03_description:"A string of outdoor lights illuminating the space, creating a magical and cozy atmosphere. Perfect for evening gatherings or simply enjoying a quiet moment in the garden.",a04_title:"Pool",a04_description:"An outdoor framed pool, ideal for cooling off during hot summer days. The simple design makes it a convenient and refreshing addition to any backyard.",a05_title:"Drainage",a05_description:"A carefully constructed drainage system designed to keep your lawn healthy and prevent waterlogging. A subtle yet essential part of any well-maintained landscape.",a06_title:"Garage",a06_description:"A sleek carport garage offering both protection for vehicles and a modern design aesthetic. Its open structure makes it a versatile solution for various outdoor settings.",a07_title:"Indoor Pool",a07_description:"A luxurious indoor pool, offering year-round relaxation and exercise opportunities. The closed, climate-controlled space ensures comfort no matter the weather.",a08_title:"Planter",a08_description:"A large concrete planter designed to house trees, combining durability with a minimalist aesthetic. This feature adds a modern touch to any outdoor area.",a09_title:"Bench",a09_description:"A sturdy concrete bench, perfect for outdoor seating. Its simple yet elegant design blends seamlessly into a variety of landscapes.",a10_title:"Pathway",a10_description:"A paved walkway made of FEM tiles, offering both aesthetic appeal and functionality. The well-constructed path leads the way through a beautifully landscaped garden.",b01_title:"Ceiling",b01_description:"Welding the ceiling structure, a critical step in building strong and durable overhead frameworks. This process ensures safety and longevity for the entire construction.",b02_title:"Terrace Door",b02_description:"A transformation of a window into a terrace door on the second floor, opening up the space to new possibilities and adding convenience for outdoor access.",b03_title:"Concrete Base",b03_description:"Laying the concrete foundation for future stone paving. This essential step provides a solid, long-lasting base for a well-crafted outdoor surface.",b04_title:"Foundation",b04_description:"Pouring the reinforced foundation for the upcoming concrete layer. A critical step in ensuring the stability and durability of the structure.",b05_title:"Polishing",b05_description:"Wall polishing under specialized lighting to achieve a smooth, glossy finish, preparing the surface for glazing paint and enhancing its aesthetic appeal.",b06_title:"Concrete Planter",b06_description:"A high-quality concrete planter with a polished, glossy surface, showcasing the precision and care taken in its casting. This durable feature is both practical and stylish.",b07_title:"Pipes & Cat",b07_description:"A playful scene with a cat inspecting plumbing pipes awaiting installation. A lighthearted moment amidst the practicalities of construction.",b08_title:"Protective Film",b08_description:"Protective film covering areas to keep them clean and dust-free during construction. This ensures a neater workspace and a smoother final result.",b09_title:"Shower Cabin",b09_description:"A transparent glass shower cabin, installed with delicate precision. Its sleek design adds modern elegance to any bathroom interior.",b10_title:"Stone Paving",b10_description:"A perfectly leveled stone-paved surface, complete with a slight incline for proper drainage. The craftsmanship ensures both beauty and practicality.",c01_title:"Golden Lines",c01_description:"Decorative plasterwork featuring golden lines, adding a luxurious and artistic touch to the interior. The intricate design brings sophistication and elegance to the space.",c02_title:"Gold & Carbon",c02_description:"A striking continuation of the decorative plaster theme, mixing gold and carbon tones for a unique and bold aesthetic. This modern design exudes both style and substance.",c03_title:"Thousand Lines",c03_description:"Intricately detailed decorative plaster with numerous fine lines, creating texture and depth. This artwork transforms a simple wall into a statement piece.",c04_title:"Wood Effect",c04_description:"Plasterwork that masterfully imitates the natural texture of wood. This technique combines the warmth of organic materials with the durability of plaster.",c05_title:"Brick Effect",c05_description:"Decorative plaster mimicking the look of brick, bringing a rustic charm to the interior. The rough texture adds character and authenticity to the space.",c06_title:"Kids Room",c06_description:"A nearly finished children’s room, featuring smooth surfaces and custom colors. This carefully designed space balances fun with practicality.",c07_title:"Wood Texture",c07_description:"Plaster with a natural wood texture, offering an elegant and eco-friendly design solution. The technique adds warmth and sophistication to the space.",c08_title:"Islands",c08_description:"Decorative plaster resembling small islands, creating a unique and playful visual effect. This artistic feature brings a sense of adventure to the room.",c09_title:"Glass Veranda",c09_description:"A large veranda with folding glass doors, allowing for an open, airy space that merges indoor comfort with outdoor beauty. A seamless transition between environments.",c10_title:"Azure Islands",c10_description:"A vibrant decorative feature with bright azure tones, bringing a pop of color and a refreshing feel to the space. The islands create a dynamic focal point.",d01_title:"Kitchen Lighting",d01_description:"A thoughtfully designed kitchen lighting setup that combines function with style. The strategic placement ensures a bright, welcoming space for cooking and socializing.",d02_title:"Multi-Function Cabinet",d02_description:"A multi-purpose kitchen cabinet offering a balance of storage and design. This modern piece provides functionality without compromising on aesthetics.",d03_title:"Stone Table",d03_description:"An elegant stone table that serves as a centerpiece in a high-end kitchen. The solid, polished surface speaks to both luxury and durability.",d04_title:"Bar Table",d04_description:"A stylish bar table that complements the overall kitchen design. The sleek lines and modern materials make it a functional yet sophisticated addition.",d05_title:"Green Zone",d05_description:"A unique wall design that blends gypsum board with wooden accents, creating a cozy and natural feel in the space. The green zone adds warmth and a touch of nature.",d06_title:"Stencil Flower",d06_description:"A decorative plaster design resembling a large flower, blending ancient craftsmanship with contemporary aesthetics. This bold design is both timeless and modern.",d07_title:"Tile Path",d07_description:"A neatly laid tile path that guides you through a beautifully landscaped area. The craftsmanship ensures durability and aesthetic harmony with the surroundings.",d08_title:"Perfect Harmony",d08_description:"A room where every element, from tiles to decor, works in perfect harmony. The cozy, balanced design is completed by two satisfied pets enjoying the space.",d09_title:"Concrete Counter",d09_description:"A polished concrete countertop for the kitchen sink, gleaming with a glossy finish. This durable surface combines functionality with a sleek, modern design.",d10_title:"Our Colors",d10_description:"A stunning example of decorative plastering showcasing the vibrant yellow and blue colors of Ukraine. This design captures the essence of national pride and identity, creating a warm and inviting atmosphere.",lang:"English",flag:"./Flag_of_the_United_Kingdom.png",toggleLangTip:"Change language",toggleThemeTip:"Change theme",404:"No such a route found...",back404:"Back to the main"},uk:{company:"Про нас",about:"Про нашу компанію",services:"Наші послуги",showcases:"Про наші послуги",contacts:"Зв'язатися з нами",contact_intro:"Зв'яжіться з нами будь-яким зручним для вас способом або просто заповніть форму, і ми зв'яжемося з вами якнайшвидше!",contact_phone:"Телефон",contact_mail:"Пошта",contact_tg:"Телеграм",form_name:"ІМ'Я",form_name_ph:"Ім'я",form_phone:"ТЕЛЕФОН",form_phone_tip:"Номер телефону має бути у форматі +380XXXXXXXXX",form_project:"ПРОЕКТ",form_project_ph:"Дизайн і декор інтер’єру",form_budget:"БЮДЖЕТ (в грн ₴)",form_comment:"КОМЕНТАР",form_comment_ph:"Дзвоніть мені з 10:00 до 16:00",form_send:"НАДІСЛАТИ",success:"Відправлено!",try_again:"Спробуйте ще раз",ambience:"Атмосфера",building:"Втілення",crafting:"Створення",design:"Дизайн",moto:"Від Ескізу до Дизайну Під Ключ — Все в Одному Місці",emailSend:"Надіслати нам електронний лист",chatDirect:"Почати спілкування через Telegram",phoneUs:"Зателефонувати нам",copyright:"Усі права захищено",design_description_full:"Дизайн — це процес створення естетично привабливого, функціонального та практичного середовища, який враховує потреби користувачів, простір, матеріали та технології. Він охоплює різні напрямки, включаючи ландшафтний, екстер'єрний та інтер'єрний дизайн, кожен із яких має свої особливості й задачі.",ambience_description:"Ландшафтний дизайн полягає у створенні гармонійного та функціонального зовнішнього середовища. Він охоплює проєктування садів, парків і громадських просторів, створюючи баланс між природою та архітектурою.",building_description:"Екстер’єрний дизайн стосується зовнішнього вигляду будівель, враховуючи архітектурні стилі, кольори, матеріали та практичні аспекти функціональності.",crafting_description:"Інтер’єрний дизайн фокусується на створенні привабливих і функціональних внутрішніх просторів, враховуючи кольори, матеріали, меблі та загальну зручність для комфорту.",design_description:"Дизайн, в цілому, поєднує мистецтво і науку для створення структур, об'єктів або середовищ, які покращують якість життя, зосереджуючи увагу на естетичній та функціональній гармонії.",a00:"Атмосфера Ξ Ландшафт",b00:"Втілення Ξ Екстерєр",c00:"Створення Ξ Інтерєр",d00:"Дизайн Ξ Синергія",a01_title:"Ганок",a01_description:"Затишний ганок, ідеальний для відпочинку на свіжому повітрі та сімейних зібрань. Класичний дизайн поєднує функціональність і естетику, створюючи додатковий житловий простір.",a02_title:"Троянда",a02_description:"Яскрава троянда в повному розквіті, що додає нотку елегантності та кольору в ландшафт. Ця квітка символізує красу та гармонію.",a03_title:"Гірлянда",a03_description:"Вулична гірлянда, що створює чарівну та затишну атмосферу. Ідеально підходить для вечірніх зустрічей або тихого відпочинку в саду.",a04_title:"Басейн",a04_description:"Каркасний басейн, ідеальний для охолодження в спекотні літні дні. Простий дизайн робить його зручним доповненням до будь-якого двору.",a05_title:"Дренаж",a05_description:"Система дренажу для газону, яка запобігає затопленню і зберігає здоров’я трави. Незамінний елемент доглянутого ландшафту.",a06_title:"Гараж",a06_description:"Навісний гараж, що забезпечує захист для автомобілів та стильний дизайн. Відкрита конструкція робить його універсальним рішенням для різних зовнішніх просторів.",a07_title:"Внутрішній басейн",a07_description:"Розкішний закритий басейн, який забезпечує комфортний відпочинок і можливість тренувань цілий рік. Затишне приміщення з клімат-контролем гарантує зручність у будь-яку пору.",a08_title:"Вазон",a08_description:"Великий бетонний вазон для дерева, який поєднує міцність і сучасний мінімалізм. Чудовий акцент для будь-якого зовнішнього простору.",a09_title:"Лавка",a09_description:"Стійка бетонна лавка для зовнішнього використання. Її простий, але елегантний дизайн гармонійно вписується в різні ландшафтні рішення.",a10_title:"Доріжка",a10_description:"Викладена плиткою доріжка з ФЕМ, що поєднує естетику та функціональність. Добре побудована дорога веде через чудовий сад.",b01_title:"Стеля",b01_description:"Зварювання стельової конструкції – важливий етап, що гарантує міцність і довговічність будівлі.",b02_title:"Двері на терасу",b02_description:"Перетворення вікна на двері на терасу на другому поверсі – це відкриття нових можливостей і зручності для доступу на вулицю.",b03_title:"Фундамент",b03_description:"Бетонування основи під майбутню бруківку з каменю. Цей етап забезпечує довговічність і міцність майбутнього покриття.",b04_title:"Армований фундамент",b04_description:"Заливка армованого фундаменту для наступного бетонного шару. Важливий крок для забезпечення стабільності і міцності конструкції.",b05_title:"Шліфування стін",b05_description:"Шліфування стін під спеціальним освітленням для досягнення гладкого, глянцевого фінішу. Це готує поверхню для глазурного фарбування та покращує її естетичний вигляд.",b06_title:"Глянцевий вазон",b06_description:"Якісно відлитий бетонний вазон з глянцевою поверхнею. Він демонструє точність та турботу про кожну деталь, стаючи практичним і стильним елементом.",b07_title:"Труби та кицька",b07_description:"Кумедна сцена, де кицька досліджує сантехнічні труби, що очікують на монтаж. Легкий момент серед практичних будівельних робіт.",b08_title:"Захисна плівка",b08_description:"Захисна плівка, яка допомагає підтримувати чистоту і мінімізує кількість пилу під час робіт. Це забезпечує більш акуратне робоче місце та чистий кінцевий результат.",b09_title:"Душова кабіна",b09_description:"Прозора скляна душова кабіна, встановлена з ретельною точністю. Її витончений дизайн додає сучасної елегантності ванній кімнаті.",b10_title:"Мощення каменем",b10_description:"Рівно викладена поверхня з каменю з правильним нахилом для стоку води. Цей високоякісний результат забезпечує як естетику, так і практичність.",c01_title:"Золоті лінії",c01_description:"Декоративна шпаклівка із золотими лініями, що додає розкоші та витонченості інтер’єру. Інтригуючий дизайн створює відчуття багатства та стилю.",c02_title:"Золото та карбон",c02_description:"Комбінація золота та карбону в декоративній шпаклівці створює сміливий та унікальний вигляд. Цей сучасний дизайн вирізняється гармонією кольорів та текстур.",c03_title:"Тисяча ліній",c03_description:"Деталізована декоративна шпаклівка з численними тонкими лініями, що створюють текстуру та глибину. Це перетворює стіну на справжній мистецький витвір.",c04_title:"Імітація дерева",c04_description:"Шпаклівка, що майстерно імітує текстуру дерева. Ця техніка поєднує тепло природних матеріалів і міцність шпаклівки.",c05_title:"Імітація цегли",c05_description:"Декоративна шпаклівка, яка відтворює вигляд цегли, додаючи інтер’єру сільського шарму. Груба текстура додає характеру та автентичності.",c06_title:"Дитяча кімната",c06_description:"Майже завершена дитяча кімната з гладкими поверхнями та індивідуальними кольорами. Простір збалансований між практичністю та комфортом.",c07_title:"Текстура дерева",c07_description:"Шпаклівка з текстурою дерева, що пропонує елегантне та екологічне рішення для інтер’єру. Техніка додає тепла і витонченості до простору.",c08_title:"Острівки",c08_description:"Декоративна шпаклівка у вигляді маленьких острівців, що створює цікавий ігровий ефект. Цей художній елемент привносить у кімнату відчуття пригод.",c09_title:"Прозора веранда",c09_description:"Велика веранда зі складними скляними дверима, що дозволяє легко поєднати комфорт приміщення з красою природи. Ідеальний перехід між просторами.",c10_title:"Лазурні острівки",c10_description:"Яскравий декоративний елемент з блакитними відтінками, що додає простору свіжість. Острівки створюють динамічний акцент у дизайні.",d01_title:"Освітлення кухні",d01_description:"Дизайнерське рішення для освітлення кухні, що поєднує функціональність із стилем. Світильники розташовані для забезпечення яскравого і затишного простору.",d02_title:"Шафа",d02_description:"Мультифункціональна шафа для кухні, що поєднує зберігання з естетичним дизайном. Сучасна деталь, яка додає простору практичності та стилю.",d03_title:"Кам’яний стіл",d03_description:"Елегантний стіл з каменю, який стає центром уваги в розкішній кухні. Міцна і полірована поверхня підкреслює розкіш і довговічність.",d04_title:"Стіл-бар",d04_description:"Стильний барний стіл, що доповнює загальний дизайн кухні. Чіткі лінії і сучасні матеріали роблять його функціональним і вишуканим елементом.",d05_title:"Зелена зона",d05_description:"Оригінальний дизайн стін з гіпсокартону та дерев’яних вставок, що створює затишок і природність у приміщенні. Зелена зона додає простору тепла та натхнення.",d06_title:"Трафарет квітка",d06_description:"Декоративна шпаклівка у вигляді великої квітки, що поєднує старовинні ремесла з сучасною естетикою. Сміливий і водночас витончений акцент у просторі.",d07_title:"Тротуарна плитка",d07_description:"Охайно викладена плитка, що проводить крізь чудово облаштовану зону. Витончений і практичний акцент у садовому дизайні.",d08_title:"Гармонія",d08_description:"Кімната, де кожен елемент, від плитки до декору, знаходиться у повній гармонії. Задоволені домашні улюбленці власників насолоджуються комфортом у новому просторі.",d09_title:"Бетонна стільниця",d09_description:"Полірована бетонна стільниця для кухонної мийки з блискучим глянцевим фінішем. Ця міцна поверхня поєднує функціональність із сучасним дизайном.",d10_title:"Наші кольори",d10_description:"Приклад декоративної шпаклівки з використанням жовтого та блакитного кольорів – символів України. Цей дизайн відображає гордість і національну ідентичність, створюючи теплу і приємну атмосферу.",lang:"Ukrainian",flag:"./Flag_of_Ukraine.png",toggleLangTip:"Змінити мову",toggleThemeTip:"Змінити тему",404:"Такої сторінки не знайдено...",back404:"Повернутися на головну"}},y=R({locale:localStorage.getItem("lang")||"en",fallbackLocale:"en",messages:te}),ie={city:{name:"Boyarka",names:{en:"Boyarka"}},continent:{code:"EU",geoname_id:6255148,names:{de:"Europa",en:"Europe",es:"Europa",fa:" اروپا",fr:"Europe",ja:"ヨーロッパ大陸",ko:"유럽","pt-BR":"Europa",ru:"Европа","zh-CN":"欧洲"},name:"Europe"},country:{geoname_id:690791,iso_code:"UA",names:{de:"Ukraine",en:"Ukraine",es:"Ucrania",fa:"اوکراین",fr:"Ukraine",ja:"ウクライナ",ko:"우크라이나","pt-BR":"Ucrânia",ru:"Украина","zh-CN":"乌克兰"},name:"Ukraine",name_native:"Україна",phone_code:"380",capital:"Kyiv",currency:"UAH",flag:"🇺🇦",languages:[{iso_code:"uk",name:"Ukrainian",name_native:"Українська"}]},location:{latitude:50.317,longitude:30.2902},subdivisions:[{names:{en:"Kyiv"}}],state:{name:"Kyiv"},datasource:[{name:"IP to City Lite",attribution:"<a href='https://db-ip.com'>IP Geolocation by DB-IP</a>",license:"Creative Commons Attribution License"}],ip:"178.158.203.59"},ne="2b8e2712d081486a81f6dd403a8a76f4",oe=async()=>{try{return(await W.get(`https://api.geoapify.com/v1/ipinfo?apiKey=${ne}`)).data}catch(s){return console.error("Error fetching IP info:",s),ie}},ae=["title"],se=["onClick"],re=["src","alt"],ce={__name:"LangSwitcher",setup(s){const n="/",e=Object.keys(y.global.messages).map(i=>({value:i,image:n+y.global.messages[i].flag})),r=v(y.global.locale),a=v(!1),d=q(()=>[...e].sort(i=>y.global.locale===i.value?-1:1)),t=i=>{y.global.locale=i,localStorage.setItem("lang",i),r.value=i},g=i=>{t(i),a.value=!a.value},u=()=>{a.value=!1};return E(async()=>{let i=localStorage.getItem("lang");localStorage.getItem("lang")||(i=(await oe()).country.iso_code==="UA"?"uk":"en",y.global.locale=i,localStorage.setItem("lang",i)),y.global.locale=i}),(i,c)=>{const h=z("click-outside");return p(),m("section",{class:"lang-switcher",title:i.$t("toggleLangTip")},[X((p(),m("menu",{class:I(["select",{open:a.value,close:!a.value}])},[(p(!0),m(L,null,V(d.value,(l,b)=>(p(),m("li",{key:b,onClick:A=>g(l.value),class:I([{selected:r.value===l.value},"select-option"])},[o("img",{src:l.image,alt:i.$t("lang")+" flag",class:"select-option-img"},null,8,re)],10,se))),128))],2)),[[h,u]])],8,ae)}}},le={class:"logo_link"},de={src:D,alt:"company logo image",id:"logoImage",ref:"logoImage"},ge={class:"global-view"},he={class:"lang-wrapper"},ue={__name:"HeaderBlock",setup(s){return(n,e)=>{const r=B("router-link");return p(),m("header",null,[o("nav",null,[o("li",le,[_(r,{to:"/",id:"logo_link"},{default:x(()=>[o("img",de,null,512),e[0]||(e[0]=o("span",null,[o("b",null,"ABCDΞsign.one")],-1))]),_:1})]),o("li",null,[_(r,{to:"/services"},{default:x(()=>[e[1]||(e[1]=o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-briefcase"},[o("rect",{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"}),o("path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"})],-1)),k(" "+T(n.$t("services")),1)]),_:1})]),o("li",null,[_(r,{to:"/company"},{default:x(()=>[e[2]||(e[2]=o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-circle"},[o("circle",{cx:"12",cy:"12",r:"10"}),o("line",{x1:"12",y1:"22",x2:"12",y2:"2"}),o("line",{x1:"12",y1:"2",x2:"2",y2:"12"}),o("line",{x1:"2",y1:"12",x2:"12",y2:"12"}),o("path",{d:"M 12,2 A 5,5, 0 1 1 12,12",fill:"none"})],-1)),k(" "+T(n.$t("company")),1)]),_:1})]),o("li",null,[_(r,{to:"/contacts"},{default:x(()=>[e[3]||(e[3]=o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-at-sign"},[o("circle",{cx:"12",cy:"12",r:"4"}),o("path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"})],-1)),k(" "+T(n.$t("contacts")),1)]),_:1})]),o("li",ge,[_(ee),o("span",he,[_(ce)])])])])}}},pe=(s,n)=>{const e=s.__vccOpts||s;for(const[r,a]of n)e[r]=a;return e},me={},fe={class:"copy-right"},_e={class:"links"},be=["title"],ye=["title"],ve=["title"];function we(s,n){return p(),m("footer",null,[o("section",fe,[k(" ©  "+T(new Date().getFullYear())+"  ",1),n[0]||(n[0]=o("img",{src:D,alt:"company logo image",id:"logoImageFooter"},null,-1)),n[1]||(n[1]=k(" ABCDΞsign.one "))]),o("section",_e,[o("a",{href:"mailto:one.abcdesign@gmail.com","aria-label":"e-mail",title:s.$t("emailSend")},n[2]||(n[2]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-mail"},[o("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),o("polyline",{points:"22,6 12,13 2,6"})],-1)]),8,be),o("a",{href:"http://t.me/abcdesign1","aria-label":"telegram",title:s.$t("chatDirect")},n[3]||(n[3]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-send"},[o("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),o("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})],-1)]),8,ye),o("a",{href:"tel:+380933789883","aria-label":"Call us",title:s.$t("phoneUs")},n[4]||(n[4]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-phone","aria-hidden":"true"},[o("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})],-1),o("span",{class:"visually-hidden"},"Call us at +380933789883",-1)]),8,ve)])])}const ke=pe(me,[["render",we],["__scopeId","data-v-d38ddd4e"]]),Ae={__name:"App",setup(s){const n=N(),e=v(!0);E(()=>{n.afterEach((a,d,t)=>{e.value=!0})});function r(){e.value=!1}return(a,d)=>{const t=B("router-view");return p(),m(L,null,[_(ue),_(Y,{showOnRouteChange:e.value,onLoaderEnded:r},null,8,["showOnRouteChange"]),_(t),_(ke)],64)}}},xe="modulepreload",Te=function(s){return"/"+s},P={},w=function(n,e,r){let a=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const t=document.querySelector("meta[property=csp-nonce]"),g=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));a=Promise.allSettled(e.map(u=>{if(u=Te(u),u in P)return;P[u]=!0;const i=u.endsWith(".css"),c=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${c}`))return;const h=document.createElement("link");if(h.rel=i?"stylesheet":xe,i||(h.as="script"),h.crossOrigin="",h.href=u,g&&h.setAttribute("nonce",g),document.head.appendChild(h),i)return new Promise((l,b)=>{h.addEventListener("load",l),h.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${u}`)))})}))}function d(t){const g=new Event("vite:preloadError",{cancelable:!0});if(g.payload=t,window.dispatchEvent(g),!g.defaultPrevented)throw t}return a.then(t=>{for(const g of t||[])g.status==="rejected"&&d(g.reason);return n().catch(d)})},Ee=[{path:"/",name:"Home",component:()=>w(()=>import("./Home-66YsA5RL.js"),__vite__mapDeps([0,1,2,3]))},{path:"/company",name:"Company",component:()=>w(()=>import("./Company-CEAVI4TR.js"),__vite__mapDeps([4,1,2]))},{path:"/services",name:"Services",component:()=>w(()=>import("./Services-BEt1yKT0.js"),__vite__mapDeps([5,1,2,6]))},{path:"/contacts",name:"Contacts",component:()=>w(()=>import("./Contacts-B5YVYVzD.js"),__vite__mapDeps([7,1,2,8]))},{path:"/:catchAll(.*)",component:()=>w(()=>import("./404-BiDhzjPW.js"),__vite__mapDeps([9,1,2]))}],O=H({history:K("/"),routes:Ee,scrollBehavior(s,n,e){if(s.hash){const r=document.querySelector(s.hash);if(r){document.querySelector(".main").scrollTo({top:r.offsetTop,behavior:"smooth"});return}}return e||{top:0}}});O.beforeEach((s,n,e)=>{s.path==="/services"&&je(),e()});function je(){["https://1abcdesign.github.io/a01.jpg","https://1abcdesign.github.io/a02.jpg","https://1abcdesign.github.io/a03.jpg","https://1abcdesign.github.io/a04.jpg","https://1abcdesign.github.io/a05.jpg","https://1abcdesign.github.io/a06.jpg","https://1abcdesign.github.io/a07.jpg","https://1abcdesign.github.io/a08.jpg","https://1abcdesign.github.io/a09.jpg","https://1abcdesign.github.io/a10.jpg","https://1abcdesign.github.io/b01.jpg","https://1abcdesign.github.io/b02.jpg","https://1abcdesign.github.io/b03.jpg","https://1abcdesign.github.io/b04.jpg","https://1abcdesign.github.io/b05.jpg","https://1abcdesign.github.io/b06.jpg","https://1abcdesign.github.io/b07.jpg","https://1abcdesign.github.io/b08.jpg","https://1abcdesign.github.io/b09.jpg","https://1abcdesign.github.io/b10.jpg","https://1abcdesign.github.io/c01.jpg","https://1abcdesign.github.io/c02.jpg","https://1abcdesign.github.io/c03.jpg","https://1abcdesign.github.io/c04.jpg","https://1abcdesign.github.io/c05.jpg","https://1abcdesign.github.io/c06.jpg","https://1abcdesign.github.io/c07.jpg","https://1abcdesign.github.io/c08.jpg","https://1abcdesign.github.io/c09.jpg","https://1abcdesign.github.io/c10.jpg","https://1abcdesign.github.io/d01.jpg","https://1abcdesign.github.io/d02.jpg","https://1abcdesign.github.io/d03.jpg","https://1abcdesign.github.io/d04.jpg","https://1abcdesign.github.io/d05.jpg","https://1abcdesign.github.io/d06.jpg","https://1abcdesign.github.io/d07.jpg","https://1abcdesign.github.io/d08.jpg","https://1abcdesign.github.io/d09.jpg","https://1abcdesign.github.io/d10.jpg","https://1abcdesign.github.io/logo_light.png","https://1abcdesign.github.io/logo_dark.png"].forEach(n=>{const e=document.createElement("link");e.rel="preload",e.as="image",e.href=n,document.head.appendChild(e)})}const Ce={beforeMount(s,n){const e=r=>{!s.contains(r.target)&&s!==r.target&&n.value()};document.addEventListener("click",e),s._clickOutsideHandler=e},unmounted(s){document.removeEventListener("click",s._clickOutsideHandler)}};G(Ae).use(O).use(y).directive("click-outside",Ce).mount("#app");export{w as _,pe as a};
