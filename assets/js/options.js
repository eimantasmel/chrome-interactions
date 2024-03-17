import getStorageData from '../../utils/getStorageData.js';

document.addEventListener('DOMContentLoaded', async (event) => {

    document.querySelectorAll('input').forEach(async (input) => {
        input.value = await getStorageData(input.id) ?? input.value;
    });

    document.querySelectorAll('input').forEach((input) => {
        input.addEventListener('keyup', (e) => {
            let inputId = e.target.id
            chrome.storage.sync.set({[inputId]: e.target.value});
        })
    })

});
