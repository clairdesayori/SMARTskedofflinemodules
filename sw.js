const cacheName = 'pdf-archive-v1';
const assets = [
  './',
  './index.html',
  './file1.pdf',
  './file2.pdf',
  './file3.pdf',
  './file4.pdf',
  './file5.pdf',
  './file6.pdf'
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