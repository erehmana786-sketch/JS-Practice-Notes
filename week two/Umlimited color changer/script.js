const randomColor = ()=>{
    const hex = '123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < array.length; i++) {
        color += hex[Math.floor(Math.random()*16)]
        
    }
    return color
}

