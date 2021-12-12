const qualityOptionsElement = document.getElementById(
  "qualityOptions"
) as HTMLSelectElement;

// Set popup.html HtmlSelect selected option to the one saved in storage.
chrome.storage.sync.get("quality", ({ quality }) => {
  qualityOptionsElement.querySelectorAll("option").forEach((e) => {
    e.value == quality ? (e.selected = true) : (e.selected = false);
  });
});

// update chrome sync storage when changing quality.
qualityOptionsElement.addEventListener("change", (event) => {
  chrome.storage.sync.set({ quality: (<HTMLSelectElement>event.target).value });
});
