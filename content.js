import getStorageData from './utils/getStorageData.js';

document.body.addEventListener('keydown', async (e) => {
    const scrollByInput = await getStorageData('scrollByInput') ?? 500;
    const blurByInput = await getStorageData('blurByInput') ?? 20;
    const graynessInput = await getStorageData('graynessInput') ?? 100;
    const emailInput = await getStorageData('emailInput') ?? '';
    const workPage = await getStorageData('workPage') ?? '';


    if(e.ctrlKey && e.key == '`')
    {
        if(!e.target.style.filter || e.target.style.filter == "none")
            e.target.style.filter = `grayscale(${graynessInput / 100})`;
        else
            e.target.style.filter = "none";
    }
    else if(e.ctrlKey && e.key === 'b')
    {
        if(!e.target.style.filter || e.target.style.filter == "none")
            e.target.style.filter = `blur(${blurByInput}px)`;
        else
            e.target.style.filter = "none";
    }
    else if(e.shiftKey && e.ctrlKey && e.key === 'E')
    {
        window.open(emailInput, '_blank');
    }
    else if(e.key === 'F2')
    {
        window.open(workPage, '_blank');
    }
    else if(e.key === 'F3')
    {
        window.open(`chrome-extension://${chrome.runtime.id}/options.html`, '_blank');
    }
    else if(e.ctrlKey && e.key == "ArrowDown")
        window.scrollBy(0, scrollByInput);
    else if(e.ctrlKey && e.key == "ArrowUp")
        window.scrollBy(0, (-1) * scrollByInput);
})