// Check that service workers are supported
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("../sw.js");
    console.log("service worker registered");
  });
}
