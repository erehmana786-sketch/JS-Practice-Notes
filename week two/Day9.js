const sayEsha = function () {
    console.log('Esha');  
}
setTimeout(sayEsha, 1000);

const changeText = document.querySelector('h1').innerText = 'I am changing text'