// set key and value in local storage
localStorage.setItem('name', "Esha")
localStorage.setItem('city', "Lahore")

// get key and value from local storage
const name = localStorage.getItem('name')
const city = localStorage.getItem('city')
console.log(`Name: `, name ,`City: `, city);

//null
const job = localStorage.getItem('job')
console.log(job);

// remove item from local storage
