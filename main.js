(()=>{"use strict";var e="/users/me",t="/cards",n={baseUrl:"https://nomoreparties.co/v1/wff-cohort-10",headers:{authorization:"a09ab031-12d4-47e4-9c1b-c5118b379ccc","Content-Type":"application/json"}},r=c(t),o=c(e);function c(e){return fetch(n.baseUrl+e,{method:"GET",headers:{authorization:n.headers.authorization}}).then(i)}function a(e){return fetch("".concat(n.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:n.headers.authorization}}).then(i)}function u(e){return fetch("".concat(n.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:n.headers.authorization}}).then(i)}function i(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}function l(e,t,n,r,o,c,a){var u=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),i=u.querySelector(".card__image"),l=u.querySelector(".card__delete-button"),s=u.querySelector(".card__like-button"),p=u.querySelector(".card__like-box");return u.querySelector(".card__title").textContent=e.name,u.setAttribute("id",e._id),i.src=e.link,i.alt=e.name,p.textContent=e.likes.length,o?(l.style.display="block",l.addEventListener("click",(function(){return c(e._id)}))):l.style.display="none",function(e,t){return e.some((function(e){return e._id===t}))}(e.likes,a)&&s.classList.add("card__like-button_is-active"),s.addEventListener("click",(function(){return t(e._id,s,p)})),i.addEventListener("click",(function(){return r(e)})),u}function s(e,t,n){(t.classList.contains("card__like-button_is-active")?u:a)(e).then((function(e){n.textContent=e.likes.length,t.classList.toggle("card__like-button_is-active")})).catch((function(e){console.error("Ошибка лайка:",e)}))}function p(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",f)}function d(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",f)}function f(e){"Escape"===e.key&&d(document.querySelector(".popup_is-opened"))}function _(e){e.target===e.currentTarget&&d(e.target)}console.log(r);var y=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},m=function(e,t){t.disabled=function(e){return e.some((function(e){return!e.validity.valid}))}(e)},h=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){y(e,n,t)})),r.disabled=!0};function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var S,b=document.querySelector(".profile__add-button"),q=document.querySelector(".profile__edit-button"),E=document.querySelectorAll(".popup__close"),g=document.querySelector(".places__list"),k=document.querySelectorAll(".popup"),C=document.querySelector(".popup_type_new-card"),L=document.querySelector(".popup_type_edit"),A=document.querySelector(".popup_delete_card"),x=document.querySelector(".popup_avatar_change"),z=x.querySelector(".popup__form"),T=L.querySelector(".popup__form"),j=document.querySelector(".popup__input_type_name"),w=document.querySelector(".popup__input_type_description"),U=document.querySelector(".profile__image"),O=document.querySelector(".profile__title"),D=document.querySelector(".profile__description"),I=C.querySelector(".popup__form"),P=I.querySelector(".popup__input_type_card-name"),B=I.querySelector(".popup__input_type_url"),M=document.querySelector(".popup_type_image"),N=M.querySelector(".popup__image"),J=M.querySelector(".popup__caption"),H={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function V(e){var t=e.name,n=e.link;N.src=n,N.alt=t,J.textContent=t,p(M)}function G(e){S=e,p(A)}function $(e,t){t.textContent=e?"Сохранение...":"Сохранить"}!function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);m(n,r),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?y(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),m(n,r)}))}))}(t,e)}))}(H),Promise.all([o,r]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1],a=o._id;U.style.backgroundImage="url(".concat(o.avatar,")"),O.textContent=o.name,D.textContent=o.about,c.forEach((function(e){var t=l(e,s,0,V,e.owner._id===a,G,a);g.append(t)}))})).catch((function(e){console.log(e)})),q.addEventListener("click",(function(){j.value=O.textContent,w.value=D.textContent,h(T,H),p(L)})),E.forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){return d(t)}))})),k.forEach((function(e){e.addEventListener("click",_),e.classList.add("popup_is-animated")})),T.addEventListener("submit",(function(t){t.preventDefault();var r,o,c=j.value,a=w.value;$(!0,T.querySelector(".popup__button")),(r=c,o=a,fetch(n.baseUrl+e,{method:"PATCH",headers:{authorization:n.headers.authorization,"Content-Type":"application/json"},body:JSON.stringify({name:r,about:o})}).then(i)).then((function(e){O.textContent=e.name,D.textContent=e.about,d(L)})).catch((function(e){console.error("Ошибка при редактировании профиля:",e)})).finally((function(){$(!1,T.querySelector(".popup__button"))}))})),b.addEventListener("click",(function(){h(I,H),p(C),I.reset()})),I.addEventListener("submit",(function(e){var r,o;e.preventDefault(),$(!0,I.querySelector(".popup__button")),(r=P.value,o=B.value,fetch(n.baseUrl+t,{method:"POST",headers:{authorization:n.headers.authorization,"Content-Type":"application/json"},body:JSON.stringify({name:r,link:o})}).then(i)).then((function(e){g.prepend(l(e,s,0,V,!0,G,e.owner._id)),d(C)})).catch((function(e){console.error("Ошибка при добавлении новой карточки:",e)})).finally((function(){$(!1,I.querySelector(".popup__button"))}))})),A.querySelector(".popup__form").addEventListener("submit",(function(e){var t;e.preventDefault(),(t=S,fetch("".concat(n.baseUrl,"/cards/").concat(t),{method:"DELETE",headers:{authorization:n.headers.authorization}}).then(i)).then((function(){(function(e){var t;null===(t=document.getElementById(e))||void 0===t||t.remove()})(S),d(A)})).catch((function(e){console.error("Ошибка при удалении карточки:",e)}))})),U.addEventListener("click",(function(){h(z,H),p(x),z.reset()})),z.addEventListener("submit",(function(e){var t;e.preventDefault(),$(!0,z.querySelector(".popup__button")),(t=z.elements.avatar.value,fetch(n.baseUrl+"/users/me/avatar",{method:"PATCH",headers:{authorization:n.headers.authorization,"Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then(i)).then((function(e){var t=e.avatar;U.style.backgroundImage="url(".concat(t,")"),d(x)})).catch((function(e){console.error("Ошибка при обновлении аватара:",e)})).finally((function(){$(!1,z.querySelector(".popup__button"))}))}))})();