'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e3c7eb74bcbdf8bd31fd0be7d367b528",
"version.json": "3b090eb30fbb79a4fab293e6d8882063",
"index.html": "9a73c0533575427da9bee9255202389e",
"/": "9a73c0533575427da9bee9255202389e",
"main.dart.js": "60c1b04bfbe8b743db3c2f93f2500b5c",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "87ad0d5205f431c7eee09c4cee42a5af",
"assets/AssetManifest.json": "5e677e9ffb188b82083ef4429720e9e5",
"assets/NOTICES": "eb0065fe0a00144ed776e7571bda2940",
"assets/FontManifest.json": "306a2588a4ef5ddb4c5416bcd9d93c47",
"assets/AssetManifest.bin.json": "8696bda130e48ca73257491d6a466a7f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "fdd0b71f5902e56d8e4b07f4c6566f75",
"assets/fonts/MaterialIcons-Regular.otf": "74c0ef5805d8f98fac9a4c8796ef3444",
"assets/assets/images/img_unsplash_avatar_139x76.png": "a13b7516e91d2ab3ae2581945ad592d2",
"assets/assets/images/img_our_vows.svg": "4f929053fb08d75d64f3f42e93261077",
"assets/assets/images/img_1.png": "3e70d4a31c1cdcb196bb4c16d2bcb17b",
"assets/assets/images/img_favorite_pink_100_01.svg": "528b0a7be0c99397a884e91d70f81e10",
"assets/assets/images/img_image_156x357.png": "348e74631b4e7555fe2034e345e4f1be",
"assets/assets/images/img_ticket_star_pink_100.svg": "7a47a876eb73ae6bccc879e4354a70a6",
"assets/assets/images/img_lock_gray_600_02.svg": "67eef09e2b9aa5d8fa051b9f855019ae",
"assets/assets/images/img_pen.svg": "8b5e146870d0f042208dfdd5cf36951b",
"assets/assets/images/img_2.png": "96e60e6e6e3c1db6c3e9c363faa35e94",
"assets/assets/images/img_arrow_down.svg": "3f9d23b015e1c5ce09550c2cce15aac9",
"assets/assets/images/img_pw_icon.svg": "f676313fe75c6beedd29f98763cfdfcf",
"assets/assets/images/img_apple13_1.svg": "035f264c9f1cfa1f1e75d6f3274e29f4",
"assets/assets/images/img_lock.svg": "46c94be39f98a0b576753618b4368ce5",
"assets/assets/images/img_user_errorcontainer.svg": "7e9b49fadbc067218b88dec24b9cc5fb",
"assets/assets/images/img_selected.svg": "c2c4888fe45b5f4d79738fd4a96239f2",
"assets/assets/images/img_create_an_account.png": "6566c8b3fc3a4c064eaeef0af0b0a63e",
"assets/assets/images/img_light_outline_edit.svg": "50148c140b008942822c9980f06b93a7",
"assets/assets/images/img_user_onprimary.svg": "197c277f05796cc10239b465e25bb751",
"assets/assets/images/img_warning.svg": "946dfcd80a24cb4854efdc99d4c13edf",
"assets/assets/images/img_ticket_star.svg": "59a563ca1a745fcfd48f21b57cded59e",
"assets/assets/images/img_logomark_white.png": "8e5a36461cf484be4b2584a2017c7f15",
"assets/assets/images/img_arrow_right_gray_500_02.svg": "6d5ea2b98d82dbc387946c7f084de580",
"assets/assets/images/img_clock_errorcontainer.svg": "61119d8d61282861247dcd632dc805fe",
"assets/assets/images/find_a_pro.png": "f290fc9ab0e0d0d6b48a9395f5cbcf4e",
"assets/assets/images/img_video_camera.svg": "f24521e6afa1d42f64bc7d0970265c1a",
"assets/assets/images/img_arrow_up.svg": "73b93052223d8d8ae1e041b29cf9448a",
"assets/assets/images/img_background_1.png": "22077346ae610bd4243f4cbe946375e6",
"assets/assets/images/img_sign_in.png": "af79638590b6696239ade46bfcd60c12",
"assets/assets/images/img_lock_onprimary.svg": "67958128956c76a28901296fd35ee45d",
"assets/assets/images/img_mark_16px.svg": "fa435a096a733bb6ae0bcd4f066c45e8",
"assets/assets/images/img_grid.svg": "233f170d8b46051103ab2f146d3293b0",
"assets/assets/images/img_group_1000003393.svg": "2508f41320a4e5f829d3dd6936276083",
"assets/assets/images/background_9.png": "74af0d114de04cb64559d42bf5c76c9e",
"assets/assets/images/img_arrow_left_blue_gray_900.svg": "6c97ea8cab56cb337421acc4dbc1f153",
"assets/assets/images/img_rectangle_173.png": "0e5688e946662053eea9c137026ccae9",
"assets/assets/images/img_rectangle_172.png": "bf2b74f432025a0293b50b8802a830a4",
"assets/assets/images/background_8.jpg": "67cf554adb961b8ca11ecb01d29b4a10",
"assets/assets/images/img_settings.svg": "3533bd3a39135f585f65870af603beeb",
"assets/assets/images/img_rectangle_4672.png": "6c693f99ae24b1ea57b211a0e7139654",
"assets/assets/images/img_mask_group_1.png": "c49138a25a6f392ae38298af627775f9",
"assets/assets/images/rolling_heart.json": "d8daddeb45e7c7189ad1e6bba59adbc0",
"assets/assets/images/invite_partner_background.png": "b2758a78d071111821025f8c2bebbbb7",
"assets/assets/images/img_our_vows.png": "a73a12a3d8749ee43267a389c9283e4a",
"assets/assets/images/img_user.svg": "af5599fca2f8ca82eb3b98d289d6aa39",
"assets/assets/images/Scattered_Hearts.json": "52fe5f21241d3682b0caea944965fbfa",
"assets/assets/images/img_background_231x375.png": "264c6af97f0e7d3867c5b955522dc6b3",
"assets/assets/images/tutorial3.gif": "eacc0fe0113c02df61e04b7f083adf99",
"assets/assets/images/img_findpro.png": "035148f1a4bbead6147a7ec2c97c01fe",
"assets/assets/images/img_rectangle_4673.png": "7b502924aa4e2865991451695bbef456",
"assets/assets/images/background_6.jpg": "181c838d80ecf533d9734ff5e088ce59",
"assets/assets/images/img_group_1000003405.svg": "4d1bf1ae9f442e237dbc916df543983c",
"assets/assets/images/img_user_onprimary_20x20.svg": "768b1de83fd7cb91c8a4c928dc36f009",
"assets/assets/images/background_7.jpg": "0caff50c1cc8cf425577a9b002ee20c1",
"assets/assets/images/img_prenup_cover.png": "67fe02e7c4a0c98d71982d29335c42ef",
"assets/assets/images/background_5.png": "fa21eb5b6113ead1b871afa44b0cce8b",
"assets/assets/images/img_signal.svg": "9aa824266651f7c1c1f0e032cfeb63e4",
"assets/assets/images/img_arrow_left_gray_500_02.svg": "42fcff282bf07e65f49d1a2ee61c564c",
"assets/assets/images/background_4.png": "55889919d778f5eecd74120feeee07cc",
"assets/assets/images/img_close.svg": "e2e0318e98235f64f6cb152d110003bc",
"assets/assets/images/img_rectangle_172_50x40.png": "93366b5bae17d53d222cf428c15282dc",
"assets/assets/images/background_1.png": "063ab3a6b74fb46fdd0969539128aa63",
"assets/assets/images/img_favorite.svg": "f80d1567117876b10e4f74d724b4cfff",
"assets/assets/images/img_television.svg": "00ebeddcbab304706e977739f7ae40cd",
"assets/assets/images/background_3.png": "8c78b625eaf4e7321f04d90ad37d2fee",
"assets/assets/images/img_light_outline_icon25.svg": "bd59a746f37087196e17d9ae0c503a5b",
"assets/assets/images/img_light_outline_icon136.svg": "995c56587b22504be6acadb1d93e1bbb",
"assets/assets/images/background_2.png": "c74f4bdded819bdff85d1ef694054a01",
"assets/assets/images/img_background_205x333.png": "05bc3093a0a0ac0ce018e876d71bfc5f",
"assets/assets/images/img_article_6.png": "526e19f9246135c5fe95cca14391be4b",
"assets/assets/images/img_prenup_4.png": "c6c423e9e3d6e3851e8925d84e039bdd",
"assets/assets/images/img_arrow_left.svg": "0ba1c281037bef27ee663e71d1969e29",
"assets/assets/images/background_12.png": "dfbf33981d4b21c9a84401ab8d662557",
"assets/assets/images/img_image_1.png": "18360e5352c2ba093acb8a4898ad31dd",
"assets/assets/images/tutorial6.png": "0888c75fb5654d32856803596daeb054",
"assets/assets/images/img_light_outline_icon80.svg": "136a9c737ab280c5543a4fe80c4b1cfb",
"assets/assets/images/img_article_7.png": "55fc864fcd2cd24e2e918e911a12086e",
"assets/assets/images/img_image_27.png": "2788ed630adcde99ed272b68f769408b",
"assets/assets/images/img_video.svg": "fc15342d15319945904ee63c1da2cf8c",
"assets/assets/images/img_unsplash_avatar.png": "35a76921385fb2d08d6fd94c4c88a948",
"assets/assets/images/img_apple_black.svg": "ad5193fb00437f01c6c80929d3d9d336",
"assets/assets/images/img_group_249.svg": "e6d85b041ae034f3ba9eb670d8042b6c",
"assets/assets/images/img_article_5.png": "a3417063b92f71c6f4bb5130578d663a",
"assets/assets/images/tutorial4.png": "a91f809174bc4cfcf3dffcf3385b9337",
"assets/assets/images/image_not_found.png": "a88029aaad6e6ea7596096c7c451840b",
"assets/assets/images/background_11.png": "d3d5ccd244f32840dd0c0b49e06c7342",
"assets/assets/images/background_10.png": "443aa7219d975b1ffe15048955dfd06e",
"assets/assets/images/img_bag.svg": "9ea64f0c0198907209563399bf8042d5",
"assets/assets/images/img_image_2.png": "21cf4d507b0de314c9786d455a1829db",
"assets/assets/images/tutorial5.png": "6595a1af87ea00ed8d0389928c96d35b",
"assets/assets/images/img_light_outline_lock.svg": "e7cf493d2f9efe0e610ebfe903818838",
"assets/assets/images/img_article_4.png": "a202d483ce17edc75ef1eee33778b80f",
"assets/assets/images/img_clock.svg": "afb37306caceca70898da65fbb550d2f",
"assets/assets/images/img_ai.svg": "aba1c8004258ea9dfda8b3be0115b10c",
"assets/assets/images/img_mask_group.png": "2b8a43e2ec6e8e6927752b1d66d28a6e",
"assets/assets/images/img_arrow_right.svg": "aea277b0d9cf091b1f9d5899be90980a",
"assets/assets/images/img_draft.png": "386d0eea96d4406085e36201e0303988",
"assets/assets/images/tutorial1.png": "3cad9a07f994928a27f995baf9649d0a",
"assets/assets/images/img_prenup_2.png": "03a161d308702c573c824748f94d4a6c",
"assets/assets/images/img_prenup_3.png": "7285d52ccf67f66f6910704665f855e0",
"assets/assets/images/img_article_1.png": "ee4bbaead6ba27536679b3d378534d02",
"assets/assets/images/img_unsplash_avatar_1.png": "5aadb023b4e8bb2a39f3f956b890a162",
"assets/assets/images/img_background.png": "2dcb50f6b8a502488a4000ae919f6897",
"assets/assets/images/img_article_cover.png": "888b56a1a3d338ff738b679bdd8a152c",
"assets/assets/images/img_linkedin.svg": "34db689b5d29fdb159c8bcb08154972e",
"assets/assets/images/img_article_3.png": "2109027b9f6f3b1578a3423aebbaf2e4",
"assets/assets/images/about_prenup.png": "9f6d7e526d6d680f67776ece97a3b856",
"assets/assets/images/tutorial2.png": "fb842545b86346b530e8346337a329fb",
"assets/assets/images/img_mask_group_176x225.png": "d90d18c052b3365d477e2168b690d712",
"assets/assets/images/img_light_outline_icon90.svg": "418ea2b7aaca78d4aa3096f8cf6f4256",
"assets/assets/images/img_calendar.svg": "866a3e276c2f8f3288f33569beb24544",
"assets/assets/images/img_prenup_1.png": "7c4a434ff8fb5b591d2b6ca8c454e17e",
"assets/assets/images/img_clock_gray_700.svg": "4ca2e828917d379a689c9c0a7fdd9e03",
"assets/assets/images/img_article_2.png": "82c135a004c57becf06871dd59c3394e",
"assets/assets/images/img_unsplash_avatar_2.png": "654c52b6c81c4057f4dd89fa3f83003c",
"assets/assets/images/img_prenup_back.png": "4fd9fe28c1555e971c2ccdc4b367a380",
"assets/assets/template/prenup_a_00002_1.html": "4615b3a096e277805e0f33565d0f89d9",
"assets/assets/template/prenup_a_00002_1.dart": "280e87d0db8ba97ae86ee299ec093edd",
"assets/assets/template/prenup_a_00001_1.html": "b206d947f6ca4081b4c929cffbe48dc6",
"assets/assets/template/prenup_a_00002_2.dart": "1d94f8794945f9666869ca6a0abc65be",
"assets/assets/template/prenup_a_00002_3.html": "d07c58c57f744342921c06b7bcda1260",
"assets/assets/template/prenup_a_00002_2.html": "5730e1712c238b8c0d96c66c439418c5",
"assets/assets/template/prenup_a_00002_3.dart": "20ffdd0b680bff5806e43c33477bebce",
"assets/assets/fonts/CaveatRegular.ttf": "7c66865f58afc98e72e69633ba374178",
"assets/assets/fonts/ComfortaaRegular.ttf": "53f695dbfc6f703f86ed88bddde527b6",
"assets/assets/fonts/PoppinsMedium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/CinzelRegular.ttf": "36e3287473aad3878156ae4983ffb79a",
"assets/assets/fonts/CormorantSC-Medium.ttf": "97a13628e09fb4d2a90edd1abb30b348",
"assets/assets/fonts/CormorantSC-Bold.ttf": "3a6afe248d1790bbac18383efe085818",
"assets/assets/fonts/CormorantSC-Light.ttf": "b5e8ecdc025a0dd3ee0e9cee4b62fac2",
"assets/assets/fonts/OoohBaby-Regular.ttf": "a9eb0fb808f8499b633f08f8255f2e60",
"assets/assets/fonts/AllisonRegular.ttf": "c3779fce61551180ae0707d48ee12131",
"assets/assets/fonts/KleeOne-Regular.ttf": "dc34d19955d53fc7eba1ff5de2273a0d",
"assets/assets/fonts/CarroisGothicSCRegular.ttf": "abf54f9a9711a81c394923c96609911f",
"assets/assets/fonts/KleeOne-SemiBold.ttf": "02b117533101e7e00b4d47a8d8c73184",
"assets/assets/fonts/PoppinsSemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/KaiseiOptiRegular.ttf": "6741efa5a07fa760615ff6740f716061",
"assets/assets/fonts/CormorantSC-Regular.ttf": "179d13eaa97b277daf68b5cb9438b10f",
"assets/assets/fonts/GildaDisplayRegular.ttf": "7b63a4bb0bdb27b83b10dd3e218654cd",
"assets/assets/fonts/CormorantSC-SemiBold.ttf": "58b1733ee74133255906f71a62616e04",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
