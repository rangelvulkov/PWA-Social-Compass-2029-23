// Minimal Service Worker за PWA
self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('social-compass-store').then((cache) => cache.addAll([
        './index.html',
        './manifest.webmanifest',
      ])),
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
});
