// attach event 
// jQuery - onclick 
// type , timeStamp, preventDefault
// target , toElement , srcElement , currentTarget
// clientX, clientY, screenX, screenY, 
// altKey, ctrlKey, shiftKey, keyCode

// Event bubbling 
const image = document.getElementById('images')
image.addEventListener('click', function (e) {
    console.log("click inside the ul");
    
}, false)
// Event capturing
const owl = document.getElementById('owl')
owl.addEventListener('click', function (e) {
    console.log("owl clicked");
    
}, true)