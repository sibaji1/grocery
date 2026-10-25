const CACHE="mahalaxmi-v2";
const CORE=["./","./index.html","./config.js","./manifest.webmanifest","./icons/icon-192.png","./icons/icon-512.png","./icons/icon-maskable-512.png"];
const CDN=["fonts.googleapis.com","fonts.gstatic.com","cdnjs.cloudflare.com"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  const r=e.request;
  if(r.method!=="GET")return;
  const u=new URL(r.url);
  if(u.origin===location.origin){
    // own files: network first so edits show up, cache when offline
    e.respondWith(fetch(r).then(res=>{if(res.ok){const cp=res.clone();caches.open(CACHE).then(c=>c.put(r,cp))}return res}).catch(()=>caches.match(r).then(h=>h||(r.mode==="navigate"?caches.match("./index.html"):undefined))));
    return;
  }
  if(CDN.includes(u.hostname)){
    // fonts and QR library: cache first
    e.respondWith(caches.match(r).then(hit=>hit||fetch(r).then(res=>{if(res&&(res.ok||res.type==="opaque")){const cp=res.clone();caches.open(CACHE).then(c=>c.put(r,cp))}return res})));
  }
  // everything else (the order database) always goes straight to the network
});
