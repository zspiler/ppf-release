(()=>{"use strict";function e(e,s){const a=document.createElement("img");return a.classList.add(s),a.src=e,a.draggable=!1,a}const s="./images",a={milka:"milka",portraits:"portraits",events:"events"},t={[a.milka]:[{images:[`${s}/milka/milka_marec23_foto_lana_spiler-46.jpg`]},{images:[`${s}/milka/milka_marec23_foto_lana_spiler-47.jpg`]},{images:[`${s}/milka/milka_pomanjsane_mar23_-4.jpg`]},{images:[`${s}/milka/milka_pomanjsane_mar23_-5.jpg`]},{images:[`${s}/milka/milka_pomanjsane_mar23_-6.jpg`]},{images:[`${s}/milka/milka_pomanjsane_mar23_-7.jpg`]},{images:[`${s}/milka/milka_pomanjsane_mar23_-8.jpg`]},{images:[`${s}/milka/milka_pomanjsane_mar23_-9.jpg`]},{images:[`${s}/milka/milka_pomanjsane_mar23_-10.jpg`]},{images:[`${s}/milka/Milka_foto_lana-spiler_september-22__10.jpg`,`${s}/milka/Milka_foto_lana-spiler_september-22__15.jpg`]},{images:[`${s}/milka/Milka_foto_lana-spiler_september-22__1.jpg`]},{images:[`${s}/milka/Milka_foto_lana-spiler_september-22__16.jpg`]}],[a.portraits]:[{images:[`${s}/portraits/mila_doma_18_copy.jpeg`],description:"Mila 2020"},{images:[`${s}/portraits/MRFY_promo_shoot_18_19_54.jpeg`],description:"MRFY 2019"},{images:[`${s}/portraits/ZALAGASPER_oktober19_promo_19.jpeg`],description:"Zala & Gasper"},{images:[`${s}/portraits/zora+copy.jpeg`],description:"Zora"},{images:[`${s}/portraits/b_copy.jpeg`],description:"Zivimo v druzbi"}],[a.events]:[{images:[`${s}/events/andersonpaak/DSC01314_copy.jpg`]},{images:[`${s}/events/andersonpaak/DSC01437_JPG.jpg`]},{images:[`${s}/events/andersonpaak/DSC01700_JPG.jpg`]},{images:[`${s}/events/andersonpaak/DSC01835_JPG.jpg`]},{images:[`${s}/events/andersonpaak/DSC02268_copy.jpg`]},{images:[`${s}/events/brumenxceltra/CELTRA_BRUMEN_NOVEMBER19_lana_piler_55.jpg`]},{images:[`${s}/events/brumenxceltra/CELTRA_BRUMEN_NOVEMBER19_lanas_piler_14.jpg`]},{images:[`${s}/events/brumenxceltra/CELTRA_BRUMEN_NOVEMBER19_lana_piler_56.jpg`]},{images:[`${s}/events/brumenxceltra/CELTRA_BRUMEN_NOVEMBER19_lanas_piler_18.jpg`]},{images:[`${s}/events/brumenxceltra/CELTRA_BRUMEN_NOVEMBER19_lanas_piler_47.jpg`]},{images:[`${s}/events/sonica/42516530_10155893058135823_8097257085294608384_o.jpg`]},{images:[`${s}/events/sonica/42716232_10155901768570823_2334134225080418304_o.jpg`]},{images:[`${s}/events/sonica/42872928_10155906558945823_3819046067329040384_o.jpg`]},{images:[`${s}/events/sonica/42989869_10155906668235823_3837548906699292672_o.jpg`]},{images:[`${s}/events/sonica/42999598_10155910337900823_4364633757190193152_o.jpg`]},{images:[`${s}/events/sonica/43000399_10155910369605823_8789940545980989440_o.jpg`]},{images:[`${s}/events/sonica/43023510_10155910331635823_4608076003925819392_o.jpg`]},{images:[`${s}/events/sonica/43023510_10155910331635823_4608076003925819392_o.jpg`]},{images:[`${s}/events/sonica/43023510_10155910331635823_4608076003925819392_o.jpg`]},{images:[`${s}/events/sonica/43023510_10155910331635823_4608076003925819392_o.jpg`]},{images:[`${s}/events/sonica/43043450_10155910372010823_5348174258587566080_o.jpg`]},{images:[`${s}/events/sonica/43148598_10155910332900823_2448250836120240128_o.jpg`]}]},i=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);let n=a.milka,o=0;function r(e){o=e}const c=document.querySelector("#custom-cursor"),l=(document.querySelector("body"),document.querySelector(".main")),m=document.querySelector(".carousel"),d=(document.querySelector(".carousel-slide-descrption"),document.querySelector(".menu-button")),p=document.querySelector(".menu"),_=document.querySelector(".preview-image-container"),g=document.querySelector(".preview-image"),u=document.querySelector(".gallery-button"),v=document.querySelector(".gallery-overlay"),L=document.querySelector(".grid"),j=document.querySelector(".nav-button"),k=document.querySelector(".about-overlay"),y=document.querySelector(".carousel-nav-button.previous"),E=document.querySelector(".carousel-nav-button.next");let f;gsap.registerPlugin(ScrollToPlugin);let $=!0;function b(s){n=s,f?.seek(f.duration()).pause(),m.classList.remove("hidden"),_.classList.remove("visible"),h()?.forEach((e=>e.remove()));const a=t[s].map((({images:s,description:a})=>{const t=s.map((s=>e(s,"carousel-image"))),i=document.createElement("div");if(i.classList.add("carousel-slide"),i.classList.add("flex-center"),i.append(...t),a){const e=document.createElement("div");e.innerHTML=a,e.classList.add("carousel-slide-description"),i.append(e)}return i}));m.append(...a),r(0),S(o,!0)}function S(e,s=!1){const a=s?0:1.5;return gsap.to(m,{x:(t=e,-h()[t].offsetLeft),duration:a,ease:"power4.out"});var t}function h(){return Array.from(m.querySelectorAll(".carousel-slide"))}function M(){o!==h().length-1?(r(o+1),i&&(w(o<h().length-1),A(!0)),f=S(o)):R()}function q(){0!==o?(r(o-1),i&&(A(o>0),w(!0)),f=S(o)):R()}function R(){$&&(c.style.opacity=.2)}function A(e){e?y.classList.add("visible"):y.classList.remove("visible")}function w(e){e?E.classList.add("visible"):E.classList.remove("visible")}function B(){S(o,!0)}const x=Object.keys(a).map((e=>({category:e,element:document.querySelector(`.menu-item.${e}`)})));function C(){d.classList.remove("open"),p.classList.remove("visible")}function N(e){x.forEach((({category:s,element:a})=>{s===e?a.classList.add("selected"):a.classList.remove("selected")}))}function O(){l.classList.add("hidden"),j.classList.add("home"),setTimeout((()=>{v.classList.add("open"),C()}),200),function(){Array.from(document.querySelectorAll(".grid-image")).forEach((e=>e.remove()));const s=t[n].map((({images:s})=>s.map((s=>e(s,"grid-image"))))).flat();L.append(...s);s.forEach(((e,s)=>{e.addEventListener("click",(()=>(e=>{const s=function(e,s){const a=t[s];let i=0;for(let s=0;s<a.length;s++)if(i+=a[s].images.length,e<i)return s;return 0}(e,n);r(s),S(s,!0),P()})(s)))}))}()}function P(){v.classList.remove("open"),l.classList.remove("hidden"),j.classList.remove("home")}function T(){k.classList.remove("open"),j.classList.remove("home")}var D;Object.values(t).flat(2).map((({images:e})=>e)).flat().forEach((e=>fetch(e,{method:"HEAD"}))),d.addEventListener("click",(function(){p.classList.contains("visible")?C():(d.classList.add("open"),p.classList.add("visible"))})),x.forEach((({category:e,element:s})=>{s.addEventListener("click",(()=>{e!==n&&(N(e),b(e))})),s.addEventListener("mouseover",(()=>{e!==n&&(_.classList.add("visible"),g.src=t[e][0].images[0],m.classList.add("hidden"))})),s.addEventListener("mouseout",(()=>{_.classList.remove("visible"),g.src="",m.classList.remove("hidden")}))})),N(n),D=n,i?(w(!0),E.addEventListener("click",M),y.addEventListener("click",q)):(document.addEventListener("mousemove",(function(e){const{clientX:s,clientY:a}=e;if(c.style.left=`${s}px`,c.style.top=`${a}px`,!$)return;const t=s>window.innerWidth/2,i=0===o,n=o===h()?.length-1;t&&n||!t&&i?R():c.style.opacity=1,c.innerHTML=t?">>>":"<<<"})),m.addEventListener("mouseleave",(()=>{$=!1,c.style.opacity=0})),m.addEventListener("mouseenter",(()=>{$=!0,c.style.opacity=1}))),m.addEventListener("click",(e=>{const{clientX:s}=e;s>window.innerWidth/2?M():q()})),b(D),h()[0].querySelector(".carousel-image").onload=()=>B(),window.addEventListener("resize",B),u.addEventListener("click",(()=>{O()})),j.addEventListener("click",(()=>{k.classList.contains("open")?T():v.classList.contains("open")?P():(C(),k.classList.add("open"),j.classList.add("home"))})),window.addEventListener("keydown",(e=>{"Escape"===e.key&&(P(),C(),T())}))})();