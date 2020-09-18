!function(e){var t={};function i(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";i.r(t);const n={burger:document.querySelector("#burger"),menu:document.querySelector("#menu"),likesBtn:document.querySelector("#likesBtn"),likes:document.querySelector("#likes"),activityButton:document.querySelector("#generate"),activitySection:document.querySelector("#section1"),main:document.querySelector("#main"),likeToggle:document.querySelector("#like")},s=()=>{const e=document.querySelector("#loader");e&&e.parentElement.removeChild(e)};class c{constructor(e=""){this.key=e}async getResults(){try{const e=await fetch("https://www.boredapi.com/api/activity?key="+this.key).then(e=>e.json());return this.title=e.activity,this.type=e.type,this.people=e.participants,this.price=e.price,this.link=e.link,this.access=e.accessibility,this.liked=!1,this.key=e.key,e}catch(e){console.log(e)}}}class r{constructor(){this.likes=[]}addLike(e,t,i){const n={key:e,title:t,type:i};return this.likes.push(n),!0}deleteLike(e){const t=this.likes.findIndex(t=>t.key===e);return this.likes.splice(t,1),!1}isLiked(e){return-1!==this.likes.findIndex(t=>t.key===e)}getLast(){return this.likes.length-1}}const l=(e,t)=>{const i=`     \n                <div class="flex justify-between items-center ">\n            <h3 class="text-xl font-bold pl-6 capitalize"><a href="#${e.link}">${e.title}</a></h3>\n                <div class="bg-primary-200 px-6 py-2 cursor-pointer" id="like">\n                    <img class="pointer hover:scale-110 transition-transform" src="img/like-${t}.svg" alt="" srcset="">\n                </div>\n            </div>\n            <div class="h-1 bg-primary-200"></div>\n                <div class="font-semibold flex flex-col md:flex-row justify-evenly items-center p-3">            \n                    <h4>Categoria: <span class="font-bold capitalize">${e.type}</span></h4>\n                    <img src="img/${e.type}.svg" heigh="48" width="48">\n                    <h4>Participantes: <span class="font-bold">${e.people}</span></h4>\n                    <img src="img/participants.svg" heigh="48" width="48">\n                    <h4>Accesibilidad: <span class="font-bold">${Math.round(10*e.access)} / 10</span></h4>\n                    <img src="img/accesibility.svg" heigh="48" width="48">\n                    <h4>Precio: <span class="font-bold">${Math.round(10*e.price)} / 10</span></h4>\n                    <img src="img/price.svg" heigh="48" width="48">\n                </div>\n    `;n.activitySection.insertAdjacentHTML("afterbegin",i)},a=()=>{n.activitySection.innerHTML="",window.location.hash=""},o={},d=async e=>{const t=parseInt(e,10);o.act=t?new c(t):new c,a(),s(n.main),n.main.insertAdjacentHTML("afterend",'\n    <svg id="loader" class="animate-spin my-10 mx-auto h-16 w-16 text-center text-primary-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">\n    <circle class="opacity-50" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\n    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\n  </svg> \n    ');try{if(await o.act.getResults(),null!=o.act.title){const e=!!o.like&&o.like.isLiked(o.act.key);s(n.main),l(o.act,e)}else console.error("ERROR: Activiy not found, try again")}catch(e){console.log(e)}},u=()=>{o.like||(o.like=new r),o.like.isLiked(o.act.key)?(o.act.liked=o.like.deleteLike(o.act.key),(e=>{const t=document.querySelector(`a[href*="${e}"]`).parentElement;t&&t.parentElement.removeChild(t)})(o.act.key)):(o.act.liked=o.like.addLike(o.act.key,o.act.title,o.act.type),(e=>{const t=`\n            <li>\n              <a href="#${e.key}" class="border-white border-2 flex flex-row px-6 py-4 justify-evenly">\n                <img src="img/${e.type}.svg" heigh="48" width="48">\n                <h4 class="text-base p-2">${e.title}</h4>\n              </a>\n            </li>`;n.likes.insertAdjacentHTML("beforeend",t)})(o.act)),console.log(o.like.likes),a(),l(o.act,o.act.liked)};n.burger.addEventListener("click",()=>{n.menu.classList.contains("hidden")?n.menu.classList.remove("hidden"):n.menu.classList.add("hidden")}),n.likesBtn.addEventListener("click",()=>{n.likes.classList.contains("hidden")?n.likes.classList.remove("hidden"):n.likes.classList.add("hidden")}),n.activitySection.addEventListener("click",e=>{e.target.matches("#like, #like *")&&u()}),window.addEventListener("hashchange",(function(){if(o.act){const e=window.location.hash.replace("#","");e>=1e6&&e<=9999999&&d(e)}})),n.activityButton.addEventListener("click",(function(){d(),n.activitySection.classList.contains("hidden")&&n.activitySection.classList.remove("hidden")}))}]);