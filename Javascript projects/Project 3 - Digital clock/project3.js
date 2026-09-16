const clock = document.querySelector('#clock')
setInterval(() => {
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString('en-US', {hour12: true})
}, 1000);