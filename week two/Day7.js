// attach event 
// jQuery - onclick 
// type , timeStamp, preventDefault
// target , toElement , srcElement , currentTarget
// clientX, clientY, screenX, screenY, 
// altKey, ctrlKey, shiftKey, keyCode

// Event bubbling (bottom to top)
// const image = document.getElementById('images')
// image.addEventListener('click', function (e) {
//     console.log("click inside the ul");
    
// },false)
 
// Event capturing (top to bottom)
const image = document.getElementById('images')
image.addEventListener('click', function (e) {
    console.log("click inside the ul");
    
}, true)
const owl = document.getElementById('owl')
owl.addEventListener('click', function (e) {
    console.log("owl clicked");
    
}, true)

