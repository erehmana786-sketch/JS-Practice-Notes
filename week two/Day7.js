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
// const image = document.getElementById('images')
// image.addEventListener('click', function (e) {
//     console.log("click inside the ul");
    
// }, true)
// const owl = document.getElementById('owl')
// owl.addEventListener('click', function (e) {
//     console.log("owl clicked");
    
// }, true)

// Stop bubbling
// const image = document.getElementById('images')
// image.addEventListener('click', function (e) {
//     console.log("click inside the ul");
    
// }, false)
// const owl = document.getElementById('owl')
// owl.addEventListener('click', function (e) {
//     console.log("owl clicked");
//     e.stopPropagation() // Stop bubbling
// },false)


// const image = document.getElementById('images')
// image.addEventListener('click', function (e) {
//     console.log("click inside the ul");
    
// }, false)
// const google = document.getElementById('google')
// google.addEventListener('click', function (e) {
//     e.preventDefault() // don't go to server 
//     e.stopPropagation() // stop bubbling
//     console.log("google clicked");
// },false)


// const image = document.getElementById('images')
// image.addEventListener('click', function (e) {
//     e.preventDefault()
//     console.log(e.target.tagName);
//     if (e.target.tagName=== 'IMG') {
//     console.log(e.target.id); 
//     const removeIt = e.target.parentNode
//     removeIt.remove() 
// }

// // removeIt.parentNode.removeChild(removeIt)
    
// }, false)

// // Click event practice // BASIC CLICK: 
// console.log("File connect ho gayi!");
// const title = document.getElementById('title')
// const message = document.getElementById('message')
// const button = document.getElementById('btn')

// button.addEventListener('click', ()=>{
//     title.innerText = 'button click hua'
//     title.style.color = 'red'
    
// })

// TOGGLE 
// let isRed = false 
// button.addEventListener('click', ()=>{
//     if (isRed){
//         title.style.color = 'blue'
//         isRed = false
//     }
//     else{
//        title.style.color = 'red'
//         isRed = true 
//     }
// })

// COUNTER
// let count = 0 
// button.addEventListener('click', ()=>{
//     count++
//     message.innerText = `clicks: ${count}`
// })

// // Input event 
// const input = document.getElementById('input')
// const message = document.getElementById('message')

// input.addEventListener('input', ()=>{
//     message.innerText=`I'm writing: ${input.value}`
// })

// //  LIVE CHARACTER COUNT
// input.addEventListener('input', ()=>{
//     const len = input.value.length
//     message.innerText = `character: ${len}`
// })

// // INPUT + BUTTON
// const button = document.getElementById('btn')
// const message = document.getElementById('message')
// const input = document.getElementById('input')

// button.addEventListener('click', ()=>{
//     if (input.value==='') {
//         message.innerText = 'write something'
//         message.style.color= 'red'
//     } else {
//         message.innerText = `Hello ${input.value}!`
//         message.style.color= 'green'
//         input.value=''
//     }
// })

// // MouseOver 
// const button = document.getElementById('btn')
// button.addEventListener('mouseover', ()=>{
//     button.style.color = 'white'
//     button.style.backgroundColor = 'blue'
//     button.style.transform = 'scale(1.1)'
// })

// // MouseOut 
// button.addEventListener('mouseout', ()=>{
//     button.style.color = ''
//     button.style.backgroundColor = ''
//     button.style.transform = 'scale(1)'
// })

// // Mouse over on title
// const title = document.getElementById('title')
// title.addEventListener('mouseover',()=>{
//     title.style.color = 'purple'
// })
// title.addEventListener('mouseout',()=>{
//     title.style.color = 'black'
// })

// key events 
const message = document.getElementById('message')

document.addEventListener('keydown', (e)=>{
   message.innerText = `Press key: ${e.key}`
   console.log(e.key);
   
})