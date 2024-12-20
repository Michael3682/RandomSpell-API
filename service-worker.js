importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.3.0/workbox-sw.js');

if (workbox) {
    workbox.routing.registerRoute(
        new RegExp('https://hp-api.onrender.com/api/spells'),
        new workbox.strategies.NetworkFirst()
    );
}