const CACHE = 'tech-hipster-v3';
const ASSETS = [
  '/', '/index.html', '/manifest.json',
  'https://files.catbox.moe/1xcpmm.jpg',
  'https://files.catbox.moe/bgmj0k.mp4'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
