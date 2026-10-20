const sayEsha = function () {
    console.log('Esha');  
}
setTimeout(sayEsha, 1000);

const changeText = function() {
    document.querySelector('#h1').innerHTML = 'I am changing text'
}

const changeMe = setTimeout(changeText, 2000)

document.getElementById('stop').addEventListener('click',()=> {
    clearInterval(changeMe)
})