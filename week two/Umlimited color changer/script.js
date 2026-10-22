const randomColor = ()=>{
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)]
        
    }
    return color
}

let intervalID;
let startColorChaning = ()=>{
    let changeBackround = () =>{
        document.body.style.backgroundColor=randomColor()
    }
    if (!intervalID) {
        intervalID = setInterval(changeBackround , 1000); 
    }
}

const stopColorChaning = ()=>{
 clearInterval(intervalID)
 intervalID = null
}

document.getElementById('start').addEventListener('click',startColorChaning)
document.getElementById('stop').addEventListener('click',stopColorChaning)