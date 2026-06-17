// ********** java script is a dynamically type language ********
// Day 1 variables 
// let name = "Esha"
// const city = "Lahore"
// let age = 23
// console.log(typeof name, typeof city, typeof age, name , city, age)


// Day 2  if else statement 
// let age =17;
// let hasID = true;

// if(age >= 18) {
//   console.log("Entry mil sakti hai");
// } else {
//   console.log("Sorry, age kam hai — " + age + " saal");
// }

// // if(hasID === true) {
// //   console.log("ID hai — theek hai");
// // } else {
// //   console.log("ID nahi — entry band");
// // }

// let temprature = 23
// if (temprature >=35 ) {
//     console.log("too hot");
    
// }
// else if (temprature >= 25 && temprature < 35 ) {
//     console.log("good weather");
    
// }
// else if (temprature >= 15 && temprature < 25 ) {
//      console.log("cold weather");
// }
// else if (temprature >= 5 && temprature <15 ) {
//     console.log("Too cold weather");
// }
// else{
//     console.log("No statement");
    
// }


// const correctPassword = "abc123" 
// let enteredPassword = "abc12"
// if (enteredPassword===correctPassword) {
//     console.log("Login successful");
    
// } else {
//     console.log("wrong password");
    
// }

// let num = -1
// if (num>=1) {
//     console.log("positive number");
//     if (num%2==0) {
//     console.log("even number");
//     if (num>100) {
//         console.log("number is greater than 100");
        
//     } else {
//         console.log("number is less than 100");
//     }
// }
// else{
//     console.log("odd number");
    
// }    
// } else {
//     console.log("negative number");
    
// }


// Data type conversion using Boolean, Number , String
// let loggedIn = 1
// let loggedIn = 0
// let loggedIn = ""
// let loggedIn = "Esha"
// let booleanLoggedIn= Boolean(loggedIn)
// console.log(booleanLoggedIn);
// let numberLoggedIn= Number(loggedIn)
// console.log(numberLoggedIn);

// ********** Permitive data type (call by value) **********
// String , Number, Boolean , bigInt , null(object) , undefined , Symbol
// ********** Non Permitive data type (call by reference) **********
// arrays(object), objects(object), functions(object functions) 

let id = Symbol('123')
let anotherid = Symbol('123')
console.log(id===anotherid); //Symbol is uniquely identified data type that's why  id and another id is not same
