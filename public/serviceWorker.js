// Fix Scroll Top Error In About and Home
const CACHE_NAME = 'version-1'
const urlsToCache = ['index.html', 'offline.html']
const self = this

// Install the Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache)
    })
  )
})

// Listen for Requests
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(() => {
      return fetch(event.request).catch(() => {
        return caches.match('offline.html')
      })
    })
  )
})

// Active the Service Worker

self.addEventListener('activate', (event) => {
  const cacheWhiteList = []
  cacheWhiteList.push(CACHE_NAME)
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhiteList.includes(cacheName)) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})
