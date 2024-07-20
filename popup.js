import getStorageData from "./utils/getStorageData.js";

document.addEventListener('DOMContentLoaded', async (e) => {
    const toggleBlurDefault = document.getElementById("blur_default");
    toggleBlurDefault.checked = await getStorageData("blur_default");

    document.getElementById("blur_default").addEventListener("change", function() {
        if (this.checked) {
            chrome.storage.sync.set({['blur_default']: true})
        } else {
          chrome.storage.sync.set({['blur_default']: false})
        }
      });
})