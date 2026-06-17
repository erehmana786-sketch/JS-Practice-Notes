// ************** String **************
// let userName = new String("Esha_Rehman")
// console.log(userName.__proto__);
// console.log(userName.charAt(2));
// console.log(userName.indexOf("h"));
// console.log(userName.toUpperCase());

// console.log(userName.substring(0, 5));
// console.log(userName.slice(-11 , 3)); 

// let newString = "  Esha_Rehman  "
// console.log(newString);
// console.log(newString.trim()); // ignoring extra space
// console.log(newString.trimStart()); // ignoring extra space from start 
// console.log(newString.trimEnd()); // ignoring extra space from ends

// let url = "https://www.canva.com/s/templates?query=cv"

// console.log(url.replace('q', 'E'));
// console.log(url.includes("https"));
// console.log(url.split(".")); //

// ************** Number **************
// let balance = new Number(100)
// console.log(balance.toString().length); 
// console.log(balance.toFixed(2));

// let newbalance = new Number(234.45)
// console.log(newbalance.toPrecision(4));

// let hundreds = 100000000
// console.log(hundreds.toLocaleString('en-IN')); // 'en-IN' for indian values 

// ************** Math **************
// console.log(Math);
// console.log(Math.abs(-3));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.3));
// console.log(Math.min(4,5,6,7));
// console.log(Math.max(4,5,6,7)); 
// console.log(Math.random(4.3)); // 0-1 random values

let min = 40
let max = 100
console.log(Math.floor(Math.random()*(max - min + 1) + min)); //formula for find value between min and max value


