// variables and datatype
const name = "Esha"
let age = 23
let city = "Lahore"
let isStudent = true

//function and if else condition
let checkAge=(myage)=>{
     if (age>=60) {
        return "Senior citizen";
        
     } else if(age>=18){
        return "Adult";
        
     }
     else if (age>=13) {
        return "Teenager";
     } else {
        return "Child";
    
     }
}
let myAge =checkAge(age)
console.log(myAge);

let area = (length, width)=>length * width
let triArea =area(23,34)
console.log(triArea);

let celsiusToF = (c)=> (c * 9/5) + 32
let temp =celsiusToF(100)
console.log(temp);

