let quality = "auto";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ quality });
  console.log("Default quality set to ", `quality: ${quality}`);
});
