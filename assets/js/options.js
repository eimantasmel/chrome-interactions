async function getStorageData(key) {
    return new Promise((resolve) => {
        try{
            chrome.storage.sync.get([key],
                (result) => {
                    if (chrome.runtime.lastError) {
                        resolve(null);
                    } else {
                        resolve(result[key]);
                    }
                });
        }
        catch(e)
        {
            resolve(null);
        }
    });
}

document.addEventListener('DOMContentLoaded', async (event) => {
    const scrollByInputVal = await getStorageData('scrollByInput') ?? 500;
    const blurByInputVal = await getStorageData('blurByInput') ?? 20;
    const graynessInputVal = await getStorageData('graynessInput') ?? 100;

    let scrollByInput = document.getElementById('scrollByInput')
    let blurByInput = document.getElementById('blurByInput')
    let graynessInput = document.getElementById('graynessInput')

    scrollByInput.value = scrollByInputVal;
    blurByInput.value = blurByInputVal;
    graynessInput.value = graynessInputVal;


    scrollByInput.addEventListener('keyup', (e) => {
        chrome.storage.sync.set({'scrollByInput': e.target.value});
    })

    blurByInput.addEventListener('keyup', (e) => {
        chrome.storage.sync.set({'blurByInput': e.target.value});
    })

    graynessInput.addEventListener('keyup', (e) => {
        chrome.storage.sync.set({'graynessInput': e.target.value});
})

});
