// We use window localStorage in the main world script to control quality.
chrome.storage.sync.get("quality", ({ quality }) =>
  window.localStorage.setItem("quality", `${quality}`)
);
// send qualityChanged event when we get a new quality from this storage listener
// we listen to that event in the script that is in the main world
chrome.storage.onChanged.addListener((changes) => {
  if ("quality" in changes) {
    chrome.storage.sync.get("quality", ({ quality }) => {
      window.localStorage.setItem("quality", `${quality}`);
      window.dispatchEvent(new Event("qualityChanged"));
    });
  }
});
// set up main world script.
const script = document.createElement("script");
script.src = chrome.runtime.getURL("script.js");
(document.head || document.documentElement).appendChild(script);
