if(!self.define){let e,t={};const i=(i,s)=>(i=new URL(i+".js",s).href,t[i]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=t,document.head.appendChild(e)}else e=i,importScripts(i),t()})).then((()=>{let e=t[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(t[r])return;let o={};const l=e=>i(e,r),c={module:{uri:r},exports:o,require:l};t[r]=Promise.all(s.map((e=>c[e]||l(e)))).then((e=>(n(...e),o)))}}define(["./workbox-eb1ce932"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"registerSW.js",revision:"3ca0b8505b4bec776b69afdba2768812"},{revision:null,url:"index.html"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{allowlist:[/^\/$/]}))}));
//# sourceMappingURL=sw.js.map
