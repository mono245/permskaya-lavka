(()=>{"use strict";let e=document.querySelector(".header__burger-menu-button"),r=document.querySelector(".header__burger-menu"),t=e.firstElementChild,n=document.querySelectorAll(".header__burger-menu-link"),c=!1;function u(){r.classList.remove("opened"),t.src="img/burger-menu.svg",c=!1}const o=document.querySelector(".header__menu"),s=i(window.location.pathname.split("/").at(-1));function i(e){return e.includes(".")?e.slice(0,e.indexOf(".")):e}e.addEventListener("click",(function(){c?u():(r.classList.add("opened"),t.src="img/close-cross.svg",c=!0)})),n.forEach((e=>{e.onclick=u})),Array.from(o.children).forEach((e=>{let r=i(e.getAttribute("href"));s===r&&e.classList.add("header__menu-item_selected")}))})();