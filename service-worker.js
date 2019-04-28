const filesToCache = [
   'index.html',
   'calculate-hour.js',
   'service-worker-install.js',
   'service-workers.js',
   'style.css',
   'favicon-32x32.png',
   'favicon-16x16.png',
   'ios/ios-install-prompt.js',
   'Styles/s.css',
   'Text/s.css',
   'error.html',
];

var brevCache = 'pages-cache';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(brevCache)
    .then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', event => {

  const cacheWhitelist = [brevCache];

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
    .then(response => {
      if (response) {
        return response;
      }
      return fetch(event.request)

      .then(response => {
        if (response.status === 404) {
          return caches.match('error.html');
        }
        return caches.open(brevCache).then(cache => {
          cache.put(event.request.url, response.clone());
          return response;
        });
      });

    }).catch(error => {
      return caches.match('error.html');

    })
  );
});
