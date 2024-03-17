export default async function getStorageData(key) {
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