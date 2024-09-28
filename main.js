(()=>{"use strict";const e=new class{constructor(){this.border=document.body}addFormColumn(){const e=document.createElement("div");e.classList.add("form"),this.border.appendChild(e);for(let t=0;t<3;t++){const t=document.createElement("div");t.classList.add("column"),e.appendChild(t)}}addCard(e){const t=document.createElement("div");return t.classList.add("cart"),t.innerHTML=`<p>${e}</p>`,t}addLinkCard(){const e=document.createElement("div");e.classList.add("linkCard");const t=document.createElement("span");t.classList.add("plus"),t.textContent="+";const n=document.createElement("a");return n.classList.add("link"),n.textContent="Add another cart",n.setAttribute("href","#"),e.appendChild(t),e.appendChild(n),e}addInputText(){const e=document.createElement("form");e.classList.add("inputForm");const t=document.createElement("input");t.classList.add("input"),t.placeholder="Enter a title for this card...",t.setAttribute("type","text");const n=document.createElement("div");n.classList.add("boxCard");const d=document.createElement("button");return d.classList.add("button"),d.textContent="Add Card",n.appendChild(d),e.appendChild(t),e.appendChild(n),e}addIconDelete(){const e=document.createElement("div");return e.classList.add("icon"),e}},t=new class{constructor(){}pushCard(e,t){localStorage.setItem(e,t)}removeCardStorage(e){localStorage.removeItem(e)}getCardStorage(e){return localStorage.getItem(e)}deleteCard(e){e.target.parentElement.classList.contains("boxCard")?e.target.parentElement.parentElement.remove():e.target.parentElement.remove()}transportCard(e){e.addEventListener("mousedown",(()=>{e.classList.add("mousedown")}))}};e.addFormColumn();const n=["To Do","In Progress","Done"],d=Array.from(document.querySelectorAll(".column"));d.forEach((t=>{const r=document.createElement("h2");r.textContent=n[d.indexOf(t)],t.appendChild(r),t.appendChild(e.addLinkCard())}));const r=Array.from(document.querySelectorAll(".link"));for(let n=0;n<r.length;n++)r[n].addEventListener("click",(r=>{if(r.preventDefault(),!d[n].lastChild.classList.contains("inputForm")){d[n].appendChild(e.addInputText()),document.querySelector(".boxCard").appendChild(e.addIconDelete()).addEventListener("click",(e=>{e.preventDefault(),t.deleteCard(e)}));const r=document.querySelector(".button"),a=document.querySelector(".input");r.addEventListener("click",(r=>{r.target.parentElement.parentElement.remove(),r.preventDefault(),d[n].appendChild(e.addCard(a.value));const o=Array.from(document.querySelectorAll(".cart"));console.log(o);for(let r=0;r<o.length;r++)o[r].draggable=!0,o[r].addEventListener("dragstart",(e=>{e.target.classList.add("selected")})),o[r].addEventListener("dragend",(e=>{e.target.classList.remove("selected")})),d[n].addEventListener("dragover",(e=>{console.log(e),e.preventDefault();const t=d[n].querySelector(".selected"),r=e.target;if(t===r||!r.classList.contains("cart"))return;const a=r===t.nextElementSibling?r.nextElementSibling:r;d[n].insertBefore(t,a)})),t.getCardStorage({column:n,card:r}),t.pushCard({column:n,card:r},a.value),o[r].addEventListener("mouseover",(d=>{console.log(d),o[r].appendChild(e.addIconDelete());const a=o[r].querySelector(".icon");console.log(a),a.addEventListener("click",(e=>{e.preventDefault(),t.deleteCard(e),t.removeCardStorage({column:n,card:r})}))})),o[r].addEventListener("mouseout",(()=>{o[r].querySelector(".icon").remove()}))}))}}))})();