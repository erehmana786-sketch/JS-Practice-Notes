// *********** Recap *********** 
// let students =[
//     {Name : "Esha", marks: 90},
//     {Name : "Fiza", marks: 60},
//     {Name : "Saira", marks : 50},
//     {Name : "Mehrab", marks: 40},
//     {Name : "Arman Ali", marks: 30}
// ]
// let result=students.filter(val=>val.marks>=50)
// .map(val=>{
//     return {
//     studentsName: val.Name,
//     studentsMarks:val.marks,
//     status:"Pas"
// }
// })
// .forEach(val=>{
//     console.log(`Name: ${val.studentsName}, Marks: ${val.studentsMarks}, Status: ${val.status} `);

// })

// *********** Session 0 *********** 
// ***** video (date and time) *****
// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleDateString('default',{
// weekday: 'long'
// weekday: 'narrow'
// weekday: "short"
// }));
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toJSON());

// let createDate = new Date(2003, 0, 13)
// console.log(createDate.toDateString());

// let birthDate = new Date(2003, 0, 13, 3, 30)
// console.log(birthDate.getTime()); // time in miliseconds
// let birthDate = new Date("2003-01-13")
// console.log(birthDate.toLocaleString());

// let timeStamp = Date.now()
// console.log(timeStamp); // miliseconds
// console.log(Math.floor(Date.now()/1000)); // miliseconds to seconds

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(`Date ${newDate.getDate()} and the year is ${newDate.getFullYear()}`);

// ************* Array ************* 
// const myArr=[1,3,4,5,5]
// const newarr=myArr.join()
// console.log(myArr);
// console.log(typeof newarr);

// const myArr=[1,2,3,4,5]
// console.log("A", myArr);

// const myN1 = myArr.slice(0,3)
// // Extracts from index 0 to 3 (3 is NOT included). It creates a NEW array.
// console.log(myN1);
// console.log("B", myArr);
// // (Original array remains UNCHANGED/IMMUTABLE)


// const myN2 = myArr.splice(0,3)
// // Starts at index 0 and REMOVES 3 elements from the original array.
// console.log("C", myArr); 
// console.log(myN2); // (The original array is now MODIFIED/MUTATED)

// const parents = ["Rehman ali", "Shahzadi"]
// const siblings = ["Esha","Fiza", "Saria","Arman Ali"]
// // parents.push(siblings)
// // console.log(parents); // Push adds array within an array 

// // const family = parents.concat(siblings)
// // console.log(family); // It combines the data of both arrays 

// const family = [...parents, ...siblings] // spread operator work as concat method
// console.log(family);

// const num = [1,2,3,4,[6,78,9,0],4,5,[3,4,56,73]]
// const newNum= num.flat(Infinity) // flat() method can arrange all nested arrays in one new arrays 
// console.log(newNum);

// console.log(Array.isArray("Esha")); // that is string 
// console.log(Array.from("Esha")); //  from converts string to array
// console.log(Array.from({name: "Esha"})); // return an empty array because its didn't know that the key should be converts to an array or value

// const num1 = 100
// const num2 = 200
// const num3 = 300
// console.log(Array.of(num1,num2,num3)); // numbers converts to Array


// ************* Ojects *************
// object literal
// const sym = Symbol("key2") // symbole declare in object
// let user = {
//     // [sym]: "key2",
//     name :"Esha",
//     "full name": "Esha rehman",
//     age: 23,
//     city: "Lahore",
//     isDeveloper: true
// }
// console.log(Object.keys(user)); //(accessing only keys) values converted from object to array 
// console.log(Object.values(user)); //(accessing only values)
// console.log(Object.entries(user)); //(every key values in array)
// console.log(user.hasOwnProperty('city')); // (is that property in user object)
// console.log(user);
// console.log(user["name"]);
// console.log(user[sym]);
// user.city="Jaranwala"
// console.log(user["city"]);
// Object.freeze(user) // freeze the object values 
// user.city="Faisalabad"
// console.log(user["city"]);

// singleton 
// const mySingleton = new Object()// constructor because of new keyword
// let mySingleton = {} // object
// mySingleton.name = "Esha",
//     mySingleton.id = 716
// mySingleton.email = "erehmana@gmail.com",
//     mySingleton.isStudent = true
// console.log(mySingleton);

// nested object 
// let user = {
//     name: "Esha",
//     "full name": {
//         "user full name": {
//             firstName: "Esha",
//             lasrName: "Rehman"
//         }
//     },
//     age: 23,
//     city: "Lahore",
//     isDeveloper: true
// }
// console.log(user["full name"]["user full name"].firstName);

// combine objects
// let obj1 = { name: "Esha", Id: 716 }
// let obj2 = { name: "Fiza", Id: 717 }
// // let obj3 = {obj1,obj2} // problematic 
// // let obj3 = Object.assign({}, obj1, obj2) 
// let obj3 = { ...obj1, ...obj2 } // using spread operator
// console.log(obj3);


// object in arrays
// let tinderUser = [
//     {
//         name: "Esha",
//         email: "erehmana@gmail.com"
//     },
//     {
//         name: "Esha",
//         email: "erehmana@gmail.com"
//     },
//     {
//         name: "Esha",
//         email: "erehmana@gmail.com"
//     }
// ]
// console.log(tinderUser[1].email);

// Array destructuring 
// let userUk ={
//     name : "Daddy",
//     email: "daddy@gmail.com"
// } 
// let {email: userEmail}=userUk
// console.log(userEmail);

// var person = { name: "Esha", age: 20, city: "Lahore" };
// var { name, age, city } = person;
// console.log(name, age, city);

// let person = { name: "Esha", age: 20, city: "Lahore"};
// let {name:n, isEducated = "yes"}=person
// console.log(n,isEducated);

// let user = {};

// // set
// user["likes birds"] = true;

// // get
// console.log(user["likes birds"]);

// Nested destructuring 

// let options = {
//     size: {
//         width: 2,
//         height: 5,
//     },
//     items: ["cake", "donut"],
//     extra:true
// }
// let { size: { width, height }, items: [item1, item2], title="Menu" }= options
// console.log(title);
// console.log(width);
// console.log(height);
// console.log(item1);
// console.log(item2);

// copy and merge , spread 
// let user ={name:"Esha", marks: 87, city: "Lahore"}
// let copy = {...user}
// copy.marks=81
// console.log(user.marks);
// console.log(copy.marks);

// object method
// var user ={
//     name:"Esha", 
//     marks: 87, 
//     city: "Lahore",
//     getMarks :function () {
//         if (this.marks>=80) return "Grade B"
//         if (this.marks>=90) return "Grade A"
//         return "C"
//     }
// }
// console.log(user.getMarks());

// merge objects 
// let user ={name:"Esha", marks: 87, city: "Lahore"}
// let updated = {...user, age:23, grade:"B"}
// console.log(updated);
// let personal = {name:"Esha", city: "Lahore", age:23}
// let academic = {marks: 87, grade:"B"}
// let complete = { ...personal , ...academic }
// console.log(complete);

// calculator using object method this
// let calculator={
//     num1:34,
//     num2:23,
//     add: function () {return this.num1 + this.num2 },
//     subtract: function () {return this.num1 - this.num2 },
//     divide: function () {return this.num1 / this.num2 },
//     multiply: function () {return this.num1 * this.num2 },
// }
// console.log(calculator.add());
// console.log(calculator.subtract());
// console.log(Math.floor(calculator.divide()));
// console.log(calculator.multiply());
// calculator.num1=23
// console.log(calculator.add());

// ********* Function with object *********
let user ={
    name: "Esha",
    cgpa: 3.27,
}
function userinformation(objects) {
    return `My name is ${objects.name} and my marks is ${objects.cgpa}`
}
console.log(userinformation(user));
