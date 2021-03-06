/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "31a828354d89b384addd885f59c6a9a7"
  },
  {
    "url": "404/index.html",
    "revision": "31a828354d89b384addd885f59c6a9a7"
  },
  {
    "url": "assets/css/3.styles.0a2b3231.css",
    "revision": "dae70b8f4023701be1b1b7319f78a796"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "91cffd0acef714ce7bc1a9ce8f36b9a8"
  },
  {
    "url": "assets/data/index.json",
    "revision": "91cffd0acef714ce7bc1a9ce8f36b9a8"
  },
  {
    "url": "assets/img/bg.362d25c9.jpg",
    "revision": "362d25c9f787405d4f15e13f3327a205"
  },
  {
    "url": "assets/js/app.af7c3b00.js",
    "revision": "0724beceb2c6002ffe7460a50b503e20"
  },
  {
    "url": "assets/js/page--node-modules--gridsome--app--pages--404-vue.32fca0c3.js",
    "revision": "2d8a96c6e40cc65c4f12b5d86fb58535"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.36e61dfc.js",
    "revision": "4a6d81852900a01282b2e871875f6612"
  },
  {
    "url": "assets/js/vendors~page--src--pages--index-vue.1250a73b.js",
    "revision": "1d84f217d1ddbf9871caaf2b7ca4f0f6"
  },
  {
    "url": "assets/static/car.cbffa61.0e0fe97b6c4c790d8a7ad14b3be069b6.png",
    "revision": "42ac093991a0f65fb0f86572e6a518af"
  },
  {
    "url": "assets/static/favicon.1539b60.c5889ca2c0ece40fcc6b9804d2e1f02f.png",
    "revision": "b4d0be659d02455404ea7e05d9c524e3"
  },
  {
    "url": "assets/static/favicon.62d22cb.c5889ca2c0ece40fcc6b9804d2e1f02f.png",
    "revision": "1e4f35a14b30ea23ba028870ff82ee06"
  },
  {
    "url": "assets/static/favicon.7b22250.c5889ca2c0ece40fcc6b9804d2e1f02f.png",
    "revision": "bb6c263a770908894f7e54280ee373c8"
  },
  {
    "url": "assets/static/favicon.ac8d93a.c5889ca2c0ece40fcc6b9804d2e1f02f.png",
    "revision": "9a53f4e23bfe624d9379110d53bf9fb0"
  },
  {
    "url": "assets/static/favicon.b9532cc.c5889ca2c0ece40fcc6b9804d2e1f02f.png",
    "revision": "b93ff0a3f455479b076df158cc5a05bf"
  },
  {
    "url": "assets/static/favicon.ce0531f.c5889ca2c0ece40fcc6b9804d2e1f02f.png",
    "revision": "df91f275efdb619339ed5cb2f7f63ecc"
  },
  {
    "url": "assets/static/favicon.dc0cdc5.c5889ca2c0ece40fcc6b9804d2e1f02f.png",
    "revision": "aaa20a3439c162ee8509b0ff9f185a44"
  },
  {
    "url": "assets/static/favicon.f22e9f3.c5889ca2c0ece40fcc6b9804d2e1f02f.png",
    "revision": "f99bf7de119c398a18bbff611f52d3f4"
  },
  {
    "url": "assets/static/gauge.bd6740a.78e5cc3af179dd523e29dac0297a4c8d.png",
    "revision": "b5cfcd177456704821f474c47f1822cd"
  },
  {
    "url": "assets/static/hose.775f9c8.606d6eb63f704d17b14f0367c8e79b0a.png",
    "revision": "b0c14925dafb2d7f35d626c8255a11da"
  },
  {
    "url": "assets/static/hose.82a2fbd.606d6eb63f704d17b14f0367c8e79b0a.png",
    "revision": "a0fac9d5143eb32af86486df8aab0f05"
  },
  {
    "url": "assets/static/logo.png",
    "revision": "2fbbb98d13d915dc986102b8bc5546db"
  },
  {
    "url": "index.html",
    "revision": "9cc97ba49e7183a151308c18c765bff3"
  },
  {
    "url": "logo.png",
    "revision": "2fbbb98d13d915dc986102b8bc5546db"
  },
  {
    "url": "manifest.json",
    "revision": "a2e0bc663668351e8b824166b50613ff"
  },
  {
    "url": "404",
    "revision": "28f25f53f5ce5d7c39f9df9ad1964986"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})