import{S as u,i,a as f}from"./assets/vendor-frHSA4Lh.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d=document.querySelector(".form"),m=document.querySelector('input[name="search-text"]'),y="50801128-9bde19728bc3e6666ae5ca17b",c=document.querySelector(".gallery");let p=new u(".gallery a");const l=document.querySelector(".loader");d.addEventListener("submit",h);function h(n){n.preventDefault();const o=m.value.trim();if(!o){i.warning({message:"Please enter a search query"});return}b(),g(o)}S();function g(n){const o=new URLSearchParams({key:y,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0});f(`https://pixabay.com/api/?${o}`).then(({data:r})=>{r.hits.length>0?L(r.hits):i.info({message:"Sorry, there are no images matching your search query."})}).catch(r=>{i.error({message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{q()})}function L(n){const o=n.map(r=>`
      <li class="gallery-item">
      <a href="${r.largeImageURL}">
      <img src="${r.webformatURL}" alt="${r.tags}" />
      </a>
      <div>
      <p>Likes ${r.likes}</p>
      <p>Views ${r.views}</p>
      <p>Comments ${r.comments}</p>
      <p>Downloads ${r.downloads}</p>
      </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",o),p.refresh()}function b(){c.innerHTML=""}function S(){l.style.display="block"}function q(){l.style.display="none"}
//# sourceMappingURL=index.js.map
