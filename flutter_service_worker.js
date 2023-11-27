'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5fb8cb3647ddd10b40d2681987ba1df3",
"assets/AssetManifest.bin.json": "5a5b4b834805033576ddb396073ba4da",
"assets/AssetManifest.json": "c60b006d6d995b6813e2b135859dd97a",
"assets/assets/fonts/GEDinkum-Bold-1.ttf": "5b3f32c9fd554155705e0c329227187a",
"assets/assets/images/care.png": "48d527788fd73b15f6e58973c1cbaec6",
"assets/assets/images/children%2520with%2520balloons-amico.svg": "977fe88b9be59ca99cbd4dbe9c65901d",
"assets/assets/images/concept.png": "1a4753ba75cd244dab47d02b15821961",
"assets/assets/images/concept_logo.png": "0522c85e9bd16eac35c9bb7b875c05c0",
"assets/assets/images/cursor.png": "d83dbe343f2fecc25a63434611fd7880",
"assets/assets/images/get_receipt.png": "5f110208b8beaa0f6d7368df9b0cea83",
"assets/assets/images/icons8-cancel.svg": "2599abee1e64785d956d95e7f19bb285",
"assets/assets/images/icons8-checkmark.svg": "7ae9b54e57d417e4cf5e6e69970b07b5",
"assets/assets/images/icons8-decision-80.png": "17c2cfe4944a31d603915056d47ea66b",
"assets/assets/images/icons8-dice-64.png": "1b01fcf9c4ea1ea401e6148a1017706b",
"assets/assets/images/icons8-face.svg": "1899abfc0323bf6524ad4578b941b19f",
"assets/assets/images/icons8-facebook.svg": "f677768e74ba2a1ce83b08b213b6ea2f",
"assets/assets/images/icons8-password.svg": "30893ac1009af6d02f6986da714d570a",
"assets/assets/images/icons8-telegram.svg": "a86cb3c9fc974c81eca7bde288a95ba3",
"assets/assets/images/icons8-whatsapp.svg": "ab84c58a0859e882d51ee5fd8c84165e",
"assets/assets/images/kids.svg": "308ecd423e61977e504c35eeb99799ab",
"assets/assets/images/onboard/image_1.png": "f5551ecfbb1fc9d230e303c37fb12be6",
"assets/assets/images/onboard/image_2.png": "e9eedd6ececf2c1ab0d94ee232558792",
"assets/assets/images/onboard/image_3.png": "8af7beb09c58e22e5c323f5b8cc4e5d6",
"assets/assets/images/onboard/image_4.png": "fa0b141888b83fc262da92538a3161cb",
"assets/assets/images/onboard/image_5.png": "f4fc1a660814d6b7053259aa9065cf94",
"assets/assets/images/onboard/image_6.png": "735b28a8a4cbe65912ee96f3b6be73a2",
"assets/assets/images/onboard/image_7.png": "639d40bd476a008cae6ecf646eae8942",
"assets/assets/images/onboard/image_8.png": "889f7ceb5c69a974123363963456fe03",
"assets/assets/images/onboard/Webinar-pana.png": "63d255f8096cd99bc4d3d133a3ec8581",
"assets/assets/images/onboard/Webinar-pana.svg": "da6fd3ba1e4d345486e59f17f52430ed",
"assets/assets/images/patern.png": "36293caa94b992f728964276680c6277",
"assets/assets/images/paternTow.jpg": "91998f6d869e79d78ae444adaa56b6c1",
"assets/assets/images/paternTow.png": "4c0a58d8b690871c25c1544e8a2d86b7",
"assets/assets/images/phone-flip.svg": "3b1d88d9412af3cc3389d6d61303708d",
"assets/assets/images/what.png": "7ce8f53fe1e4f0ccd271db90f6c585ba",
"assets/assets/images/wq.png": "e2fcefda70e36f97a91dd1f160dd902c",
"assets/FontManifest.json": "9a1c35e930ed17d12e6ce881550fc2ba",
"assets/fonts/MaterialIcons-Regular.otf": "3c89560f8a2a328a29125c6b2bca5cca",
"assets/NOTICES": "9ed4816b6a5ae0907d6eb471db4d6faf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "321aa0c874f6112cabafc27a74a784b4",
"canvaskit/canvaskit.js.symbols": "34eb740000df15c03210028f34bc9cf5",
"canvaskit/canvaskit.wasm": "2778fe4a13eac805b37df04590085ba3",
"canvaskit/chromium/canvaskit.js": "bc979fce6b4b3cc75d54b0d162cafaa7",
"canvaskit/chromium/canvaskit.js.symbols": "afe994e4d3d6d23db1d643573c9839ce",
"canvaskit/chromium/canvaskit.wasm": "1ec8ac7ed8ea5906c2e03fc14cb2c22a",
"canvaskit/skwasm.js": "411f776c9a5204d1e466141767f5a8fa",
"canvaskit/skwasm.js.symbols": "36607a151127e3736083d241f6e7356b",
"canvaskit/skwasm.wasm": "045364c77c9eedecbd12d2c77fe8fa0a",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "f5e16cd11ac09478e5bdf70a712a1a74",
"flutter.js": "5aee128657b91f4e3e1eeec85c7ee066",
"icons/Icon-192.png": "3a5dd5e90dc0974328ee1cfa785ddf76",
"icons/Icon-512.png": "7076680b213cd9a7e14e87142fbf68e5",
"icons/Icon-maskable-192.png": "3a5dd5e90dc0974328ee1cfa785ddf76",
"icons/Icon-maskable-512.png": "7076680b213cd9a7e14e87142fbf68e5",
"index.html": "ae610176ecab3cba90e46282201477ea",
"/": "ae610176ecab3cba90e46282201477ea",
"main.dart.js": "e0d83acdb0bf4750d02f2b2f6d7862d7",
"manifest.json": "4da861544b1d92ad79948989fc28beda",
"version.json": "0a0b4a0ae4bd3928ede34bb75d8bf213"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
