var link=document.querySelector(".contacts-map"),popup=document.querySelector(".modal-map"),close=document.querySelector(".close-map");link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show")}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show")});var write=document.querySelector(".button-write-us"),writePopup=document.querySelector(".modal-write-us"),writeClose=document.querySelector(".close-write"),form=writePopup.querySelector(".write-us-form"),login=document.querySelector(".modal-login"),email=writePopup.querySelector(".modal-email"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem("login")}catch(e){isStorageSupport=!1}write.addEventListener("click",function(e){e.preventDefault(),writePopup.classList.add("modal-write-show"),storage?(login.value=storage,email.focus()):login.focus()}),writeClose.addEventListener("click",function(e){e.preventDefault(),writePopup.classList.remove("modal-write-show"),writePopup.classList.remove("modal-error")}),form.addEventListener("submit",function(e){login.value&&email.value?isStorageSupport&&localStorage.setItem("login",login.value):(e.preventDefault(),writePopup.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),writePopup.classList.contains("modal-write-show")&&writePopup.classList.remove("modal-write-show"))});