self.addEventListener("install", function (event) {
  console.log("Service Worker installed.");
});

self.addEventListener("fetch", function (event) {
  // Let the browser handle all fetches
});
