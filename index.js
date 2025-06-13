import{a as u,S as p,i as o}from"./assets/vendor-CrlV4O_2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d="50801128-9bde19728bc3e6666ae5ca17b";function f(n){const s=new URLSearchParams({key:d,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0});return u(`https://pixabay.com/api/?${s}`)}const l=document.querySelector(".gallery");let m=new p(".gallery a");const i=document.querySelector(".loader");i.style.display="none";function y(n){const s=n.map(r=>`
      <li class="gallery-item">
      <a href="${r.largeImageURL}">
      <img class="img" src="${r.webformatURL}" alt="${r.tags}" />
      </a>
      <div class="wrapper">
     <p class="text">Likes<span class="span">${r.likes}</span></p>
        <p class="text">Views<span class="span">${r.views}</span></p>
        <p class="text">Comments<span class="span">${r.comments}</span></p>
        <p class="text">Downloads<span class="span">${r.downloads}</span></p>
        </div>
      </li>`).join("");l.insertAdjacentHTML("beforeend",s),m.refresh()}function h(){l.innerHTML=""}function g(){i.style.display="block"}function L(){i.style.display="none"}const b=document.querySelector(".form"),w=document.querySelector('input[name="search-text"]');b.addEventListener("submit",S);function S(n){n.preventDefault();const s=w.value.trim();if(!s){o.warning({message:"Please enter a search query"});return}h(),g(),f(s).then(({data:r})=>{r.hits.length>0?y(r.hits):o.info({message:"Sorry, there are no images matching your search query."})}).catch(r=>{o.error({message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{L()})}
//# sourceMappingURL=index.js.map
