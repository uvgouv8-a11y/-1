const C='mushaf-v1',A=['./','index.html','manifest.json','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(A))));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;
e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(n=>{if(n.ok&&/alquran\.cloud|jsdelivr|fonts/.test(e.request.url)){const k=n.clone();caches.open(C).then(c=>c.put(e.request,k))}return n}).catch(()=>r)))});
