const cacheName = "V1"; // Just a variable to declare the version

const cacheAssets = [
  "/",
  "/index.html",
  "/Public/css/index.css",
  "/Public/css/pages.css",
  "/Public/css/responsive.css",
  "/Public/images/nextbtn.svg",
  "/Public/images/prevbtn.svg",
  "/Public/images/banner1.svg",
  "/Public/images/banner2.svg",
  "/Public/images/banner3.svg",
  "/Public/images/banner4.svg",
  "/Public/images/banner5.svg",
  "/Public/images/cruxe no collar website logo white.png",
  "/js/app.js",
  "/js/slider.js",
  "/js/index.js",
  "/js/topcards.js",
  "/manifest.json",
]; // to define what assets we want to cache
// here we only use index.html

// Second step is to install service worker
//The install event is called whenever a new ServiceWorker file is detected.

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log("caching asssets");
      cache.addAll(cacheAssets);
    })
  );
});

// Third step is to activate service worker
self.addEventListener("activate", (event) => {
  console.log("activate working");
});

self.addEventListener("fetch", async (event) => {
  const req = event.request;
  event.respondWith(cacheFirst(req));

  // This function tells weather to use prefetched assets or to fetch assets from server

  async function cacheFirst(req) {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(req);
    return cachedResponse || fetch(req);
  }
});
