const cacheName = 'pdf-archive-v1';
const assets = [
  './',
  './index.html',
  './FIL11Pagbasa_M1_Q1_V3-1.pdf',
  './FIL11Pagbasa_M2_Q1_V3-2.pdf',
  './FIL11Pagbasa_M3_Q1_V3.pdf',
  './FIL11Pagbasa_M4_Q1_V3.pdf',
  './FIL11Pagbasa_M5_Q1_V3.pdf',
  './FIL11Pagbasa_M6_Q1_V3.pdf'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('caching all 6 files... ^_^');
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );

});
