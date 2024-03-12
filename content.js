document.body.addEventListener('keydown', (e) => {
    if(event.ctrlKey && e.key == '`')
    {
        if(e.target.style.filter != "grayscale(1)")
            e.target.style.filter = "grayscale(1)";
        else
            e.target.style.filter = "";
    }
    else if(event.ctrlKey && event.key === 'b')
    {
        if(e.target.style.filter != "blur(20px)")
            e.target.style.filter = "blur(20px)";
        else
            e.target.style.filter = "none";
    }
    else if(event.ctrlKey && e.key == "ArrowDown")
        window.scrollBy(0, 500);
    else if(event.ctrlKey && e.key == "ArrowUp")
        window.scrollBy(0, -500);
})