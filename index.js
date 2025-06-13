import{a as p,S as f,i as a}from"./assets/vendor-CrlV4O_2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d="50801128-9bde19728bc3e6666ae5ca17b";function m(n){const s=new URLSearchParams({key:d,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0});return p(`https://pixabay.com/api/?${s}`)}const c=document.querySelector(".gallery");let y=new f(".gallery a");const l=document.querySelector(".loader");u();function h(n){const s=n.map(r=>`
      <li class="gallery-item">
      <a href="${r.largeImageURL}">
      <img src="${r.webformatURL}" alt="${r.tags}" />
      </a>
      <div class="wrapper">
     <p class="text">Likes<span class="span">${r.likes}</span></p>
        <p class="text">Views<span class="span">${r.views}</span></p>
        <p class="text">Comments<span class="span">${r.comments}</span></p>
        <p class="text">Downloads<span class="span">${r.downloads}</span></p>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",s),y.refresh()}function g(){c.innerHTML=""}function L(){l.style.display="block"}function u(){l.style.display="none"}const b=document.querySelector(".form"),w=document.querySelector('input[name="search-text"]');b.addEventListener("submit",S);function S(n){n.preventDefault();const s=w.value.trim();if(!s){a.warning({message:"Please enter a search query"});return}g(),L(),m(s).then(({data:r})=>{r.hits.length>0?h(r.hits):a.info({message:"Sorry, there are no images matching your search query."})}).catch(r=>{a.error({message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{u()})}
//# sourceMappingURL=index.js.map
