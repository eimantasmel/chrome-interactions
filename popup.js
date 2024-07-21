import getStorageData from "./utils/getStorageData.js";

document.addEventListener('DOMContentLoaded', async (e) => {
    const toggleBlurDefault = document.getElementById("blur_default");
    const domains = document.getElementById("domains");
    toggleBlurDefault.checked = await getStorageData("blur_default") ?? false;
    domains.value = await getStorageData("domains") ?? "";

    document.getElementById("blur_default").addEventListener("change", function() {
        if (this.checked) {
            chrome.storage.sync.set({['blur_default']: true})
        } else {
          chrome.storage.sync.set({['blur_default']: false})
        }
      });

    document.getElementById("domains").addEventListener("change", function() {
          chrome.storage.sync.set({['domains']: domains.value})
      });
})