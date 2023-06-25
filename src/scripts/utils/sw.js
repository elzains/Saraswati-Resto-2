import 'regenerator-runtime';
import cacheHelper from './cache-helper';

const { assets } = global.serviceWorkerOption;

self.addEventListener('install', (event) => {
    event.waitUntil(cacheHelper.cachingAppShell([...assets, './']));
});

self.addEventListener('activate', (event) => {
    event.waitUntil(cacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
    event.respondWith(cacheHelper.revalidateCache(event.request));
});
