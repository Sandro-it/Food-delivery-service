(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();(()=>{const r={openModalBtn:document.querySelector("[data-open-offerings-modal]"),closeModalBtn:document.querySelector("[data-close-offerings-modal]"),backdrop:document.querySelector("[data-offerings-backdrop]")};r.openModalBtn.addEventListener("click",t),r.closeModalBtn.addEventListener("click",t),r.backdrop.addEventListener("click",n);function t(){r.backdrop.classList.toggle("offerings__is-hidden")}function n(){console.log("Це клік в бекдроп")}})();
//# sourceMappingURL=commonHelpers.js.map
