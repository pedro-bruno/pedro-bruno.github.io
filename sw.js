importScripts('workbox-sw.prod.v1.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "index.html",
    "revision": "0c09821277d560e5ce807fca3ca39219"
  },
  {
    "url": "inline.391b043dd1f31b2b9af1.bundle.js",
    "revision": "772f5a4650d10f0826261953f85a4988"
  },
  {
    "url": "main.8481fba850d157b5f53c.bundle.js",
    "revision": "51803e089f4b42a871d73699ed1c1acf"
  },
  {
    "url": "polyfills.07685bca73161be59257.bundle.js",
    "revision": "8a4c84c6922541b10dc1f3554e11085b"
  },
  {
    "url": "vendor.61df3eda44b22ef50ad7.bundle.js",
    "revision": "c5390bbcabea8ef445c29ee7fb1de9e3"
  },
  {
    "url": "styles.5cf32fe1b1ceba49274d.bundle.css",
    "revision": "5cf32fe1b1ceba49274d92e517a78f78"
  },
  {
    "url": "assets/avatar.png",
    "revision": "bda9b390221c6fd0e98869cca64cfa25"
  },
  {
    "url": "assets/sda-control.svg",
    "revision": "7c6ac1a4d214dad88548deb55572c2a3"
  },
  {
    "url": "assets/super-store.svg",
    "revision": "8df0df15b5f843c322ac92e58e34fcce"
  },
  {
    "url": "assets/games\\captain.jpg",
    "revision": "592fadaed0f6733746e9b80cf22afd54"
  },
  {
    "url": "assets/games\\cdino.png",
    "revision": "20633b39dd474e3dc772140c395e94e1"
  },
  {
    "url": "assets/games\\final-fight.jpg",
    "revision": "09df5c429e9f36d36cd1fd71d650aee0"
  },
  {
    "url": "assets/games\\fzero.jpg",
    "revision": "32f24b1f5432b269b22c006355c8b1b7"
  },
  {
    "url": "assets/games\\mario.jpg",
    "revision": "8696e995a1b0c46c204100681cd226dc"
  },
  {
    "url": "assets/games\\megaman.png",
    "revision": "d946b148aa9b3fb6315637cf3519cc8c"
  },
  {
    "url": "assets/games\\metal-gear.jpg",
    "revision": "565b0089d685460efa8a72c9f9906f3a"
  },
  {
    "url": "assets/games\\mortal-kombat.jpg",
    "revision": "df65bfd138fcd7c1eba21a3f1956f726"
  },
  {
    "url": "assets/games\\street-fighter.jpg",
    "revision": "ededc61895683e62a556814cd86015ff"
  },
  {
    "url": "assets/games\\topgear.jpg",
    "revision": "0559335f257af6d2a20d09986a43974b"
  },
  {
    "url": "?utm_source=pwa",
    "revision": "03536b4278141c31f00b8ab0d30a687a"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
workboxSW.router.registerNavigationRoute("index.html");
