(()=>{const e=document.querySelector(".js-menu-container"),s=document.querySelector(".js-menu-button"),o=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),c=document.querySelector(".js-scroll"),n=document.querySelector(".header__mob-menu"),i=()=>{e.classList.toggle("is-open"),s.classList.toggle("is-open"),c.classList.toggle("no-scroll")};o.addEventListener("click",i),t.addEventListener("click",i),n.addEventListener("click",(()=>{e.classList.remove("is-open"),s.classList.remove("is-open"),c.classList.remove("no-scroll")})),window.matchMedia("(min-width: 768px)").addEventListener("change",(o=>{o.matches&&(e.classList.remove("is-open"),s.classList.remove("is-open"),c.classList.remove("is-open"))}))})();
//# sourceMappingURL=index.f8461797.js.map
