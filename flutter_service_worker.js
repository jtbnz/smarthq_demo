'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "819a7514d5aa07da97d8e59536a35537",
"version.json": "590cd159dc69acccc3fd4d6923195537",
"index.html": "979891ab32897c73351ef61f230b09aa",
"/": "979891ab32897c73351ef61f230b09aa",
"main.dart.js": "73d32e6d586169307c34bb8675950370",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"manifest.json": "aceed45a42f99b67abf6a0b91019e2ae",
"assets/AssetManifest.json": "8d820ee636f577ab38f4d92590d0623c",
"assets/NOTICES": "ad0dfeab1fc7caca6f64e2ffb95cfb09",
"assets/FontManifest.json": "84019ea0dda3ba16e6a1a43f457276ac",
"assets/AssetManifest.bin.json": "d108c84bfd7ed01a6242c109bc4c3ec8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "0c60fab5cf817edb8d4b47f352c26341",
"assets/fonts/MaterialIcons-Regular.otf": "72c7e2d01f802f8cb7c52f4c8d8dbf76",
"assets/assets/images/img_banner_bose.webp": "8030c65aebef71dc84bb7f91bc45a73d",
"assets/assets/images/fabrics/img_fabric_softener.webp": "7f863a454b67953bb3c2099cedb5f4c0",
"assets/assets/images/fabrics/fabric_sample.webp": "7f863a454b67953bb3c2099cedb5f4c0",
"assets/assets/images/fabrics/type_fabric_care_cabinet.svg": "a8bc4a72b67b5ff8e3ff01c1cfd4c6c7",
"assets/assets/images/energy/energy_management_utility.svg": "72cd6a7d9ef42e2732e2404636fcb3d4",
"assets/assets/images/energy/energy_management_ev.svg": "8678a4612212bf0c1cef1670fb821dd8",
"assets/assets/images/energy/energy_management_solar.svg": "d2722c27986bf2aeba012aa228c98581",
"assets/assets/images/energy/energy_management_home.svg": "3f630e339791900f5b58e0fd0c08c09b",
"assets/assets/images/energy/energy_management_storage.svg": "d56e68607a8a88a12b8c67c43b453921",
"assets/assets/images/energy/net_zero_energy_management_generator.svg": "60aad251453c4e4145a45d91b66fd5f9",
"assets/assets/images/energy/net_zero_energy_flow.svg": "f81cb4009585990e607f71c7ebb69192",
"assets/assets/images/fnp_banner_default.webp": "46568d99dcd85d10df82c320d1226a4c",
"assets/assets/images/img_banner_sonos.webp": "84c0e961647cda60773ab8bd65382cdb",
"assets/assets/images/banner_default.webp": "632b857eda7e7bd1ea7eb5968bfa7993",
"assets/assets/image/icon_close_black.svg": "e4b45eb985c22a2af53c3f347c63dac4",
"assets/assets/image/power_icon.svg": "21cffca6b7e53a18172e0bcb15b5569a",
"assets/assets/image/icon_check_in_circle.svg": "d40eb90c022a8631f35ade19d8ccdf52",
"assets/assets/image/navigate_remove_icon.svg": "5cfbb0c9f3be77a8402bd155fc096d22",
"assets/assets/image/beta_tag.svg": "fa4ac2b3480d2d4791d051f765e94437",
"assets/assets/image/icon_tab_control.svg": "f08d4524172dcf4a9e2d5aeb8791f6fa",
"assets/assets/image/activate_next_icon.svg": "2ac204a13d07144996eaca0c820e2cfb",
"assets/assets/image/navigate_close_icon.svg": "425f5056f4217e6d18d2ab2b0ba48afe",
"assets/assets/image/navigate_reload_icon.svg": "f74c375b02593db9845ceeed5de8be6c",
"assets/assets/image/how_to_video_icon.svg": "139b0f8a210fc4f81f5dded2b4e1a197",
"assets/assets/image/common/red_warning.svg": "3e4fa62c74e1d96a86fb6387bcd14616",
"assets/assets/image/type/type_range.svg": "cf07cca252d0b805729accf799bb27d9",
"assets/assets/image/type/type_cooktop.svg": "52470afdb44611235c33333857f2b57c",
"assets/assets/image/type/type_toaster_oven.svg": "a0e5011c63f8acc487c307407d40b3a5",
"assets/assets/image/type/type_wall_oven.svg": "bd15853ff638c4df2060f78a8c681262",
"assets/assets/image/type/type_water_filter_small.svg": "98a5f7bece6a510880757569c415383c",
"assets/assets/image/type/category_leakage_sensor.svg": "9b5d2f651179aac486677a50b8e11ea6",
"assets/assets/image/type/type_laundry_center.svg": "16e802bd523967e0c188d3cf38ce49b2",
"assets/assets/image/type/type_dehumidifier.svg": "9bfced4a64fa85eea3e789eef43a1976",
"assets/assets/image/type/type_hood.svg": "8822f06dc376fedda827a57ea1ef6908",
"assets/assets/image/type/type_poe.svg": "453d3a7c64ea6aacb249c4c7c965f21c",
"assets/assets/image/type/type_dfs.svg": "26e0910b10f4aa8e80cc0c43b734b3d4",
"assets/assets/image/type/category_water_product.svg": "9dc4c6d8139a7fcecde5d9d7a890682d",
"assets/assets/image/type/type_fridge.svg": "6ef024d8dc011ebc28cddcf1330308e5",
"assets/assets/image/type/category_refrigeration.svg": "ef41380519bf6f01432cb0a42cc735ac",
"assets/assets/image/type/type_dfs_white.svg": "ea7a3d14deb116504db36e461a14e201",
"assets/assets/image/type/type_stand_mixer.svg": "b55b92daaa079c7625cdd0ced4957069",
"assets/assets/image/type/type_washer.svg": "999983900a9a5ab8e3c7deea85af02b0",
"assets/assets/image/type/category_cooking.svg": "5de4e2bbf39960441b1d3d5cd2454c78",
"assets/assets/image/type/type_dishwasher.svg": "bc6081f4a4615532fa78a677fcf527f6",
"assets/assets/image/type/type_bev_center.svg": "5017ccc4cca17c291deb2eeac97d881c",
"assets/assets/image/type/TypeToasterOven@2x.png": "f06b818518017eb714bac34d08d72572",
"assets/assets/image/type/category_temperature_sensor.svg": "dc76609f980159fc5578d64a0d27af8e",
"assets/assets/image/type/type_water_softener_small.svg": "7cdd4f621a85d29564df547dda5088d8",
"assets/assets/image/type/type_gateway.svg": "2997c71d6bc7c42323c31fe02982e0e6",
"assets/assets/image/type/type_water_heater.svg": "614c8147a34563ffaee758e207d158af",
"assets/assets/image/type/category_air_product.svg": "47f8efc8269664ddb78407dcc94db7b6",
"assets/assets/image/type/category_laundry.svg": "ce00781b0495eb965fb9459be5b91ebf",
"assets/assets/image/type/type_snowflake.svg": "82b978b7eff36d6f0410a46182a4e301",
"assets/assets/image/type/type_dryer.svg": "33e2230e160c36fd675ec4747fc7b940",
"assets/assets/image/type/type_wac.svg": "86354a2a29773c63a3e611126298707b",
"assets/assets/image/type/type_coffee.svg": "e9e921acd8cb80fc25f8cde6326fc09a",
"assets/assets/image/type/category_countertop.svg": "150758dec3cfc22a3c867d5cedf6a2c3",
"assets/assets/image/type/type_arden_smoker.svg": "e24f3bded9d393b26cc8ee83fd8d9721",
"assets/assets/image/type/type_opal.svg": "27657f2341cb747da536f9f20f5209d7",
"assets/assets/image/type/type_advantium.svg": "0bd87e0da61ebd3c7d76bf37d266e83c",
"assets/assets/image/type/category_dishwasher.svg": "bc6081f4a4615532fa78a677fcf527f6",
"assets/assets/image/type/type_wine_chiller.svg": "e6e2247cbf0835e6cc4aac94a1d274ea",
"assets/assets/image/type/type_espresso.svg": "79408375d26f26c1e775b359958757c7",
"assets/assets/image/type/type_hearth_oven.svg": "154c60eab9b7b1af1d2f44e6b406dacb",
"assets/assets/image/type/type_fabric_care_cabinet.svg": "a8bc4a72b67b5ff8e3ff01c1cfd4c6c7",
"assets/assets/image/type/type_microwave.svg": "5c43df039f4fc10ba4b53382fd9e173a",
"assets/assets/image/type/type_pac.svg": "d742bb05dd54ce3afa59cfbed4d8803a",
"assets/assets/image/type/type_combi.svg": "8dc968360820de46acf2d3f7d916cbf8",
"assets/assets/image/type/type_dishdrawer.svg": "bc6081f4a4615532fa78a677fcf527f6",
"assets/assets/image/type/type_water_softener.svg": "8b4734172c261d2fa2844699da08014f",
"assets/assets/image/type/add_appliance.png": "b77062dd3fec6bf79372b5105561dc74",
"assets/assets/image/type/type_water_products.svg": "82ae2797dd14173d6121b3650c98b55f",
"assets/assets/image/navigate_back_icon.svg": "e06ecc831e6cbb9aa488ad2a89dae93d",
"assets/assets/image/next_icon.png": "bb943dbc97ac3a6933c26c6e7a15275e",
"assets/assets/image/icon_alarm_clock.svg": "e2754968466ecfe565927e62aa9e1032",
"assets/assets/image/plus_icon.svg": "855b1c3adc8c423c0b11c907d816221b",
"assets/assets/image/lock_icon.svg": "d5f9b15529d807628b7e9e2c0796ab99",
"assets/assets/image/navigate_settings_icon.svg": "191a8c7ffe698e8ff48b96a564a448a5",
"assets/assets/image/checked_box.svg": "c3e4380ab95fda8e66944bf57622a880",
"assets/assets/image/unchecked_box.svg": "9754bc74d0faa0123f8bedd4bf40abc6",
"assets/assets/image/generic_rectangle_icon.svg": "8ff9b1a1b87605fc4917f9f8cc8294d1",
"assets/assets/image/control/settings_product_info_icon.svg": "5390f06883693aafd43c5e39379eb226",
"assets/assets/image/control/wifi_red.svg": "b671422c5218d428dc6829ebd6aa7cce",
"assets/assets/image/control/settings_warranty_icon.svg": "228d521a9ec6b78fd2185c04bd78e129",
"assets/assets/image/control/settings_notifications_icon.svg": "813017724eb7b2789891d17184e6bd6a",
"assets/assets/image/control/appliance_setting_gear_icon.svg": "131c7a17ceb0095c1ed7502fa8e57228",
"assets/assets/image/control/active_next_icon.svg": "3f20d57f898f7590117f7e36d22b555d",
"assets/assets/image/control/settings_onboarding_guide_icon.svg": "a2d504211e7c3777ec97f344c6bb1cfe",
"assets/assets/image/control/humidity_icon.svg": "60f80ac580749a45c4226243827164a3",
"assets/assets/image/control/temperature_icon.svg": "41d9319738eb3af2d7f204caf25d7d01",
"assets/assets/image/control/appliance_settings_arrow_icon.svg": "bdce3409e65c1e14e7e56156896206dc",
"assets/assets/image/control/settings_notification_history_icon.svg": "dce67de756b0dfde927790ba1be412ed",
"assets/assets/image/control/fan_icon.svg": "0c2353f75d77537524cbde09dd63a8d2",
"assets/assets/image/control/wifi_green.svg": "0123fdbb3e270edde809ec067a86e68e",
"assets/assets/image/control/central_controller_icon.svg": "17155078a16ff0bc459d6a513ab2a143",
"assets/assets/image/control/mode_icon.svg": "a3de97e505b65097294bcfee78cdd4f2",
"assets/assets/image/control/information_icon.svg": "cf7f8484fb9e8267630b77f15299e12b",
"assets/assets/image/control/on_off_icon.svg": "1a9a2510ef65768a6a3c9ac443212f74",
"assets/assets/image/control/timezone_icon.svg": "b4761b9f142e4deb5f8edb9f26f9997f",
"assets/assets/image/control/schedule_icon.svg": "9cc0574776bff3a546280972a62ab875",
"assets/assets/image/control/wifi_yellow.svg": "a3e8deabb4b3099131f4fc9ffe2a37cf",
"assets/assets/image/control/inactivate_next_icon.svg": "d4a04b3f84b2d2e0088d0a90d475a1dc",
"assets/assets/icons/dishdrawer_double.svg": "65ebc693796be7bac6fb2d86e76d5c82",
"assets/assets/icons/dishdrawer_single.svg": "d434eb51830c2ac3c07e9de00e0e1316",
"assets/assets/icons/ic_shortcut_banner.xml": "a636e9885904a6a628c388e0169ae71a",
"assets/assets/font/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/font/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/font/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/font/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
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
