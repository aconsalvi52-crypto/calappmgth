(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=document.querySelector(`#app`);e.innerHTML=`
  <div class="display">
    <div class="display-text" id="display">0</div>
  </div>
  <div class="keypad">
    <button class="btn light" id="btn-ac">AC</button>
    <button class="btn light" data-action="toggle-sign">+/-</button>
    <button class="btn light" data-action="percent">%</button>
    <button class="btn orange" data-action="operator" data-val="/">÷</button>
    
    <button class="btn" data-val="7">7</button>
    <button class="btn" data-val="8">8</button>
    <button class="btn" data-val="9">9</button>
    <button class="btn orange" data-action="operator" data-val="*">×</button>
    
    <button class="btn" data-val="4">4</button>
    <button class="btn" data-val="5">5</button>
    <button class="btn" data-val="6">6</button>
    <button class="btn orange" data-action="operator" data-val="-">−</button>
    
    <button class="btn" data-val="1">1</button>
    <button class="btn" data-val="2">2</button>
    <button class="btn" data-val="3">3</button>
    <button class="btn orange" data-action="operator" data-val="+">+</button>
    
    <button class="btn zero" data-val="0">0</button>
    <button class="btn" data-val=".">.</button>
    <button class="btn orange" id="btn-equal">=</button>
  </div>
  
  <div id="config-overlay">
    <input type="number" id="target-input" placeholder="Target Number" autocomplete="off" />
    <button class="config-btn" id="save-target">Save</button>
  </div>
`;var t=`0`,n=null,r=!1,i=null,a=null,o=!1,s=!1,c=null,l=0,u=document.getElementById(`display`),d=document.getElementById(`btn-ac`),f=document.getElementById(`btn-equal`),p=document.getElementById(`config-overlay`),m=document.getElementById(`target-input`),h=document.getElementById(`save-target`),g,_=2e3;function v(){g=window.setTimeout(b,_)}function y(){g&&clearTimeout(g)}function b(){p.classList.add(`visible`),m.value=a||``,m.focus(),navigator.vibrate&&navigator.vibrate(50)}d.addEventListener(`touchstart`,v,{passive:!0}),d.addEventListener(`touchend`,y),d.addEventListener(`mousedown`,v),d.addEventListener(`mouseup`,y),d.addEventListener(`mouseleave`,y);var x;function S(){x=window.setTimeout(w,_)}function C(){x&&clearTimeout(x)}function w(){a=null,o=!1,s=!1,j(),T(),navigator.vibrate&&navigator.vibrate([50,50,50])}f.addEventListener(`touchstart`,S,{passive:!0}),f.addEventListener(`touchend`,C),f.addEventListener(`mousedown`,S),f.addEventListener(`mouseup`,C),f.addEventListener(`mouseleave`,C),h.addEventListener(`click`,()=>{a=parseFloat(m.value),p.classList.remove(`visible`),j(),T()});function T(){t.length>9?u.style.fontSize=`50px`:u.style.fontSize=`80px`,u.textContent=t}function E(e){r===!0?(t=e,r=!1):t=t===`0`?e:t+e,T(),d.textContent=`C`}function D(e){if(r===!0){t=`0.`,r=!1,T();return}t.includes(e)||(t+=e),T(),d.textContent=`C`}function O(e){let u=parseFloat(t);if(e===`-`&&a!==null&&n===null){n=u;let t=n-a;c=String(t),l=0,i=e,r=!0,o=!0,s=!0;return}if(e===`-`&&a!==null&&n!==null&&!r){let d=k(n,u,i);t=`${parseFloat(d.toFixed(7))}`,n=d;let f=n-a;c=String(f),l=0,i=e,r=!0,o=!0,s=!0,T();return}if(i&&r){i=e;return}if(n==null&&!isNaN(u))n=u;else if(i){let e=k(n,u,i);t=`${parseFloat(e.toFixed(7))}`,n=e}r=!0,i=e,T()}function k(e,t,n){return n===`+`?e+t:n===`-`?e-t:n===`*`?e*t:n===`/`?e/t:t}function A(){if(s&&o){t=`${a}`,n=a,i=null,r=!0,o=!1,s=!1,c=null,l=0,T();return}if(i===null)return;let e=k(n,parseFloat(t),i);t=`${parseFloat(e.toFixed(7))}`,n=e,i=null,r=!0,T()}function j(){t=`0`,n=null,r=!1,i=null,d.textContent=`AC`,o=!1,s=!1,c=null,l=0}document.addEventListener(`click`,e=>{if(o&&c&&l<c.length){e.stopPropagation(),e.preventDefault();let n=c[l];l++,n===`.`?D(`.`):n===`-`?r?(t=`-`,r=!1,T()):(t=`-`+t,T()):E(n);return}},!0),document.querySelector(`.keypad`).addEventListener(`click`,e=>{let{target:n}=e;if(n.matches(`button`)){if(n.id===`btn-equal`){A();return}if(n.id===`btn-ac`){t===`0`?j():(t=`0`,d.textContent=`AC`),T();return}if(n.dataset.action===`toggle-sign`){t=String(-parseFloat(t)),T();return}if(n.dataset.action===`percent`){t=String(parseFloat(t)/100),T();return}if(n.dataset.action===`operator`){O(n.dataset.val);return}if(n.dataset.val===`.`){D(n.dataset.val);return}n.dataset.val&&E(n.dataset.val)}});