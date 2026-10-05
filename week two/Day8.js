// set key and value in local storage
localStorage.setItem('name', "Esha")
localStorage.setItem('city', "Lahore")

// get key and value from local storage
const name = localStorage.getItem('name')
const city = localStorage.getItem('city')
console.log(`Name: `, name ,`City: `, city); // Name:  Esha City:  Lahore

//null
const job = localStorage.getItem('job')
console.log(job);  //null

// remove item from local storage
const removecity = localStorage.removeItem('city')
console.log(localStorage.getItem(city));  //null