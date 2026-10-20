const sayEsha = function () {
    console.log('Esha');  
}
setTimeout(sayEsha, 1000);

const changeText = function() {
    document.querySelector('#h1').innerHTML = 'I am changing text'
}

setTimeout(changeText, 2000)