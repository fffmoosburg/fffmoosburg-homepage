const cacheName = "fffmoosburg-v0.0.2";

/* const appShellFiles = [
    "./",
    "./apple-touch-icon.png",
    "./apple-touch-icon-precomposed.png",
    "./apple-touch-icon-180x180.png",
    "./apple-touch-icon-180x180-precomposed.png",
    "./apple-touch-icon-152x152.png",
    "./apple-touch-icon-152x152-precomposed.png",
    "./apple-touch-icon-144x144.png",
    "./apple-touch-icon-144x144-precomposed.png",
    "./apple-touch-icon-120x120.png",
    "./apple-touch-icon-120x120-precomposed.png",
    "./apple-touch-icon-114x114.png",
    "./apple-touch-icon-114x114-precomposed.png",
    "./apple-touch-icon-76x76.png",
    "./apple-touch-icon-76x76-precomposed.png",
    "./apple-touch-icon-72x72.png",
    "./apple-touch-icon-72x72-precomposed.png",
    "./apple-touch-icon-60x60.png",
    "./apple-touch-icon-60x60-precomposed.png",
    "./apple-touch-icon-57x57.png",
    "./apple-touch-icon-57x57-precomposed.png",
    "./android-chrome-36x36.png",
    "./android-chrome-48x48.png",
    "./android-chrome-72x72.png",
    "./android-chrome-96x96.png",
    "./android-chrome-144x144.png",
    "./android-chrome-192x192.png",
    "./android-chrome-256x256.png",
    "./android-chrome-384x384.png",
    "./android-chrome-512x512.png",
    "./favicon.ico",
    "./favicon-16x16.png",
    "./favicon-32x32.png",
    "./favicon-194x194.png",
    "./fffmoosburg_screen.png",
    "./mstile-70x70.png",
    "./mstile-144x144.png",
    "./mstile-150x150.png",
    "./mstile-310x150.png",
    "./mstile-310x310.png",
    "./safari-pinned-tab.svg",
    "./dist/",
    "./dist/global/",
    "./dist/global/fonts/",
    "./dist/global/fonts/Jost-100.ttf",
    "./dist/global/fonts/Jost-200.ttf",
    "./dist/global/fonts/Jost-300.ttf",
    "./dist/global/fonts/Jost-400.ttf",
    "./dist/global/fonts/Jost-500.ttf",
    "./dist/global/fonts/Jost-600.ttf",
    "./dist/global/fonts/Jost-700.ttf",
    "./dist/global/fonts/Jost-800.ttf",
    "./dist/global/fonts/Jost-900.ttf",
    "./dist/global/fonts/Jost-100-Italic.ttf",
    "./dist/global/fonts/Jost-200-Italic.ttf",
    "./dist/global/fonts/Jost-300-Italic.ttf",
    "./dist/global/fonts/Jost-400-Italic.ttf",
    "./dist/global/fonts/Jost-500-Italic.ttf",
    "./dist/global/fonts/Jost-600-Italic.ttf",
    "./dist/global/fonts/Jost-700-Italic.ttf",
    "./dist/global/fonts/Jost-800-Italic.ttf",
    "./dist/global/fonts/Jost-900-Italic.ttf",
    "./dist/global/logo/dunkelblau/",
    "./dist/global/logo/dunkelblau/1080x.png",
    "./dist/global/logo/dunkelblau/1080x.webp",
    "./dist/global/logo/dunkelgruen/",
    "./dist/global/logo/dunkelgruen/1080x.png",
    "./dist/global/logo/dunkelgruen/1080x.webp",
    "./dist/global/logo/dunkelgruen/180.png",
    "./dist/global/logo/dunkelgruen/180.webp",
    "./dist/global/logo/dunkelgruen/160.png",
    "./dist/global/logo/dunkelgruen/160.webp",
    "./dist/global/logo/dunkelgruen/90.png",
    "./dist/global/logo/dunkelgruen/90.webp",
    "./dist/global/logo/hellgruen/",
    "./dist/global/logo/hellgruen/1080x.png",
    "./dist/global/logo/hellgruen/1080x.webp",
    "./dist/global/logo/pink/",
    "./dist/global/logo/pink/1080x.png",
    "./dist/global/logo/pink/1080x.webp",
    "./dist/global/logo/transparent_hell/",
    "./dist/global/logo/transparent_hell/1080x.png",
    "./dist/global/logo/transparent_hell/1080x.webp",
    "./dist/global/logo/tuerkis/",
    "./dist/global/logo/tuerkis/1080x.png",
    "./dist/global/logo/tuerkis/1080x.webp",
    "./dist/global/style/style.compiled.css",
    "./dist/global/js/main.js",
    "./dist/global/friconix.js",
]; */

const appShellFiles = [
    "./",
    "./apple-touch-icon.png",
    "./apple-touch-icon-precomposed.png",
    "./android-chrome-36x36.png",
    "./android-chrome-48x48.png",
    "./android-chrome-72x72.png",
    "./android-chrome-96x96.png",
    "./android-chrome-144x144.png",
    "./android-chrome-192x192.png",
    "./android-chrome-256x256.png",
    "./android-chrome-384x384.png",
    "./android-chrome-512x512.png",
    "./favicon.ico",
    "./favicon-16x16.png",
    "./favicon-32x32.png",
    "./favicon-194x194.png",
    "./fffmoosburg_screen.png",
    "./mstile-70x70.png",
    "./mstile-144x144.png",
    "./mstile-150x150.png",
    "./mstile-310x150.png",
    "./mstile-310x310.png",
    "./safari-pinned-tab.svg",
    "./dist/",
    "./dist/global/",
    "./dist/global/fonts/",
    "./dist/global/fonts/Jost-100.ttf",
    "./dist/global/fonts/Jost-200.ttf",
    "./dist/global/fonts/Jost-300.ttf",
    "./dist/global/fonts/Jost-400.ttf",
    "./dist/global/fonts/Jost-500.ttf",
    "./dist/global/fonts/Jost-600.ttf",
    "./dist/global/fonts/Jost-700.ttf",
    "./dist/global/fonts/Jost-800.ttf",
    "./dist/global/fonts/Jost-900.ttf",
    "./dist/global/logo/dunkelgruen/",
    "./dist/global/logo/dunkelgruen/1080x.png",
    "./dist/global/logo/dunkelgruen/1080x.webp",
    "./dist/global/logo/dunkelgruen/180.png",
    "./dist/global/logo/dunkelgruen/180.webp",
    "./dist/global/logo/dunkelgruen/160.png",
    "./dist/global/logo/dunkelgruen/160.webp",
    "./dist/global/logo/dunkelgruen/90.png",
    "./dist/global/logo/dunkelgruen/90.webp",
    "./dist/global/style/style.compiled.css",
    "./dist/global/js/main.js",
    "./dist/global/friconix.js"
];

const contentToCache = appShellFiles;

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil((async () => {
        const cache = await caches.open(cacheName);
        console.log('[Service Worker] Caching all: app shell and content');
        await cache.addAll(contentToCache);
    })());
});

self.addEventListener('fetch', (e) => {
    e.respondWith((async () => {
        const r = await caches.match(e.request);
        console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
        if (r) { return r; }
        const response = await fetch(e.request);
        const cache = await caches.open(cacheName);
        console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
        cache.put(e.request, response.clone());
        return response;
    })());
});

self.addEventListener("activate", (e) => {
    e.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(
                keyList.map((key) => {
                    if (key === cacheName) {
                        return;
                    }
                    return caches.delete(key);
                })
            );
        })
    );
});