let domReady = (cb) => {
    document.readyState === 'interactive' || document.readyState === 'complete' 
    ? cb()
    : document.addEventListener('DOMContentLoaded', cb);
};

domReady(() => {
    document.body.style.visibility = 'visible';
    console.log("separate visibility script is run");
})