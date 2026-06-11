// Pragmatic rule: Bump this version number string every single time you update code!
const CACHE_NAME = 'matrix-cache-v4'; 

const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Installs and completely skips waiting status to ensure immediate app takeover
self.addEventListener('install', (e) => {
  self.skipWaiting(); 
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Cleans up all old historical caches across devices instantly
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim()) // Forces immediate page control assignment
  );
});

// Handles standard asset intercept routing
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});