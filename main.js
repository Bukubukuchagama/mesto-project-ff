(()=>{"use strict";function e(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",n)}function t(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",n)}function n(e){"Escape"===e.key&&t(document.querySelector(".popup_is-opened"))}function o(e){e.target===e.currentTarget&&t(e.currentTarget)}var r=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?t.classList.remove(n):t.classList.add(n)},c=function(e,t){Array.from(e.querySelectorAll(t.inputSelector)),e.querySelector(t.submitButtonSelector)},i={baseUrl:"https://nomoreparties.co/v1/cohort-23",headers:{authorization:"e362d1b9-d211-438b-9a50-0f418934f1fa","Content-Type":"application/json"}};function a(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var u=document.querySelector("#card-template").content;function l(e,t){var n=e.querySelector(".card__like-button");t?n.classList.add("card__like-button_is-active"):n.classList.remove("card__like-button_is-active")}function s(e,t){e.querySelector(".card__like-count").textContent=t}var d=document.querySelector(".places__list"),p=document.querySelector(".popup_type_edit"),f=document.forms["edit-profile"],_=document.querySelector(".profile__title"),m=document.querySelector(".profile__description"),v=document.querySelector(".profile__image"),h=document.querySelector(".profile__edit-button"),y=document.querySelector(".profile__add-button"),S=document.querySelector(".popup_type_new-card"),b=document.forms["new-place"],k=document.querySelector(".popup_type_image"),q=k.querySelector(".popup__image"),L=k.querySelector(".popup__caption"),E=document.querySelector(".popup_type_avatar"),g=document.forms["edit-avatar"],C=document.querySelector(".profile__image-container"),x={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function U(e){var t,n=e.target.closest(".card");!function(e){return e.querySelector(".card__like-button").classList.contains("card__like-button_is-active")}(n)?function(e){return fetch(i.baseUrl+"/cards/likes/".concat(e),{method:"PUT",headers:i.headers}).then(a)}(n.id).then((function(e){l(n,!0),s(n,e.likes.length)})).catch((function(e){console.log(e)})):(t=n.id,fetch(i.baseUrl+"/cards/likes/".concat(t),{method:"DELETE",headers:i.headers}).then(a)).then((function(e){l(n,!1),s(n,e.likes.length)})).catch((function(e){console.log(e)}))}var A=function(e,t){t.textContent=e?"Сохранение...":"Сохранить"},T=function(e){var t,n=e.target.closest(".card");(t=n.id,fetch(i.baseUrl+"/cards/".concat(t),{method:"DELETE",headers:i.headers}).then(a)).then((function(e){n.remove()})).catch((function(e){console.log(e)}))},P=function(e){_.textContent=e.name,m.textContent=e.about,v.style.backgroundImage="url(".concat(e.avatar,")")},w=function(t,n,o){q.src=t,q.alt=n,L.textContent=o,e(k)},B=function(e,t,n,o,r,c){var i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"end",a=function(e,t,n,o,r){var c=u.querySelector(".card").cloneNode(!0),i=c.querySelector(".card__delete-button"),a=c.querySelector(".card__like-button"),l=c.querySelector(".card__image"),s=c.querySelector(".card__title"),d=c.querySelector(".card__like-count");return c.id=e._id,l.src=e.link,l.alt=e.name,s.textContent=e.name,d.textContent=e.likes.length,e.likes.some((function(e){return e._id===t._id}))&&a.classList.add("card__like-button_is-active"),e.owner._id===t._id?i.addEventListener("click",(function(t){n(t,e._id)})):i.remove(),a.addEventListener("click",(function(t){o(t,e._id)})),l.addEventListener("click",(function(){r(l.link,l.name,s.name)})),c}(e,t,r,o,c);"end"===i?n.append(a):n.prepend(a)};k.addEventListener("click",(function(e){o(e)})),h.addEventListener("click",(function(){var t,n,o;c(f,x),t=f,n=_.textContent,o=m.textContent,t.elements.name.value=n,t.elements.description.value=o,e(p)})),f.addEventListener("submit",(function(e){var n;e.preventDefault(),A(!0,f.querySelector(".popup__button")),(n={name:f.name.value,about:f.description.value},fetch(i.baseUrl+"/users/me",{method:"PATCH",headers:i.headers,body:JSON.stringify({name:n.name,about:n.about})}).then(a)).then((function(e){P(e),t(p),c(f,x)})).catch((function(e){console.log(e)})).finally((function(){A(!1,f.querySelector(".popup__button"))}))})),p.addEventListener("click",(function(e){o(e)})),C.addEventListener("click",(function(t){c(g,x),g.reset(),e(E)})),g.addEventListener("submit",(function(e){var n;e.preventDefault(),A(!0,g.querySelector(".popup__button")),(n=g.link.value,fetch(i.baseUrl+"/users/me/avatar",{method:"PATCH",headers:i.headers,body:JSON.stringify({avatar:n})}).then(a)).then((function(e){P(e),t(p)})).catch((function(e){console.log(e)})).finally((function(){A(!1,g.querySelector(".popup__button")),t(E)}))})),E.addEventListener("click",(function(e){o(e)})),y.addEventListener("click",(function(){b.reset(),c(b,x),e(S)})),b.addEventListener("submit",(function(e){e.preventDefault(),A(!0,b.querySelector(".popup__button"));var n,o=b.elements["place-name"].value,r=b.elements.link.value,c={name:_.textContent};(n={name:o,link:r},fetch(i.baseUrl+"/cards",{method:"POST",headers:i.headers,body:JSON.stringify({name:n.name,link:n.link})}).then(a)).then((function(e){B(e,c,d,U,T,w,"start")})).catch((function(e){console.log(e)})).finally((function(){A(!1,b.querySelector(".popup__button")),t(S)}))})),S.addEventListener("click",(function(e){o(e)})),document.querySelectorAll(".popup__close").forEach((function(e){e.addEventListener("click",(function(){t(e.closest(".popup"))}))})),Promise.all([fetch(i.baseUrl+"/users/me",{headers:i.headers}).then(a),fetch(i.baseUrl+"/cards",{headers:i.headers}).then(a)]).then((function(e){var t=e[0],n=e[1];P(t),function(e,t){e.forEach((function(e){B(e,t,d,U,T,w)}))}(n,t)})).catch((function(e){console.log(e)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t,n,o,c,i){var a=Array.from(e.querySelectorAll(t)),u=e.querySelector(c);r(a,u,i),a.forEach((function(t){t.addEventListener("input",(function(){!function(e,t,n,o){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?function(e,t,n,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n),r.textContent="",r.classList.remove(o)}(e,t,n,o):function(e,t,n,o,r){var c=e.querySelector(".".concat(t.id,"-error"));t.classList.add(o),c.textContent=n,c.classList.add(r)}(e,t,t.validationMessage,n,o)}(e,t,n,o),r(a,u,i)}))}))}(t,e.inputSelector,e.inputErrorClass,e.errorClass,e.submitButtonSelector,e.inactiveButtonClass)}))}(x)})();