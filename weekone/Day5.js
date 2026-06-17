// foreach() **********
// let num = [23,34,45,56]
// num.map(val =>{
//     let newNum =  val**2
//     console.log(newNum);
// })

// map () **********
// let num1 = [23,34,45,56]
// let newNum1 = num1.map(val =>{
//     return val**2
// })
// console.log(newNum1);

// Note: map() use for return value and foreach just for simple calculation 

// filter() **********
// let number = [2,3,4,5,6,7,8,9]
// let filterNumbers=number.filter(val =>{
//     return val%3===0
// })
// console.log(filterNumbers);

// reduce() method (use for return only one value as an output)********** 
// let num = [1,2,3,4,5]
// // let calculate=num.reduce((previous, current)=>previous+current)
// // console.log(calculate);
// let largerNumber = num.reduce((pre,curr)=>{
//     return pre > curr ? pre : curr // ? ternary operator
//     // it means if previous value is greater than current than return previous value otherwise current 
// })
// console.log(largerNumber);

// Add 10% tax using map() function **********
// let prices = [100, 250, 80, 500, 150];
// let withTax =prices.map(val=>val*1.1)
// console.log(withTax);   

// // To string  **********
// let priceString = [100, 250, 80, 500, 150];
// let toString =priceString.map(val=>`Rs. ${val}`)
// console.log(toString);

// let names = ["sara", "ali", "fatima"];
// let upperCaseNames=names.map(val=>val.toUpperCase())
// console.log(upperCaseNames);

// // filter () examples **********
// let ages = [15, 22, 17, 30, 13, 25, 19];
// // let isAdullt=ages.filter(val=>val>18)
// // console.log(isAdullt);
// let teenAgers=ages.filter(val=>val<18)
// console.log(teenAgers);

// let scores = [45, 78, 92, 55, 88, 33, 71];
// // let passStudents=scores.filter(val=>val>50)
// // console.log("Pass Students",passStudents);
// let failStudents=scores.filter(val=>val<50)
// console.log("Fail Students",failStudents);


// map() and filter() **********
// let products = [
//   { name: "Shirt",  price: 500,  inStock: true  },
//   { name: "Shoes",  price: 2000, inStock: false },
//   { name: "Book",   price: 300,  inStock: true  },
//   { name: "Watch",  price: 5000, inStock: true  },
//   { name: "Bag",    price: 1500, inStock: false }
// ];

// // inStock products 
// let inStockProducts=products.filter(val=>val.inStock===true)
// console.log(inStockProducts);
// // products name 
// let productsName=products.map(val=>val.name)
// console.log(productsName);
// // name and price of products less than 1000
// let blow1000=products
// .filter(val=>val.price<1000)
// .map(val=>`${val.name} Rs. ${val.price}`)
// console.log( "Affordable",blow1000);

// Modify array using map() and filter() **********
// let products = [
//   { name: "Shirt",  price: 500,  category: "clothes" },
//   { name: "Shoes",  price: 2000, category: "clothes" },
//   { name: "Novel",  price: 400,  category: "books"   },
//   { name: "Watch",  price: 5000, category: "accessories" },
//   { name: "Textbook", price: 800, category: "books"  }
// ];
// // modify 1
// let onlyBooks=products.filter(val=>val.category=="books")
// console.log(onlyBooks);
// // modify 2
// let above1000=products.filter(val=>val.price>1000)
// console.log(above1000);
// // modify 3
// let increasePrice=products.map(val=>val.price*1.2)
// console.log(increasePrice);
// // modify 4
// let booksName=products
// .filter(val=>val.category=="books")
// .map(val=>`${val.name}- Rs. ${val.price}`)
// console.log(booksName);

// Practice question using using map() and filter() and foreach()********** 
// let students = [
//   { name: "Sara",   marks: 85, city: "Lahore"  },
//   { name: "Ali",    marks: 45, city: "Karachi" },
//   { name: "Fatima", marks: 92, city: "Lahore"  },
//   { name: "Ahmed",  marks: 55, city: "Multan"  },
//   { name: "Zara",   marks: 78, city: "Karachi" }
// ];
// // Operation 1
// let passStudents=students.filter(val=>val.marks>50)
// console.log(passStudents);

// // Operation 2
// let lahoreStudents=students.filter(val=>val.city=="Lahore")
// console.log(lahoreStudents);

// // Operation 3
// let getGrade=(val=>{
//     if (val.marks>=90) {
//         return "A Grade"
//     } 
//     else if(val.marks>=80){
//         return "B Grade"
//     }
//     else if(val.marks>=70){
//         return "C Grade"
//     }
//     else if(val.marks>=50){
//         return "D Grade"
//     }
//     else if(val.marks<50){
//         return "fail"
//     }
// })
// let grade=students.map(getGrade)
// console.log(grade);

// // Operation 4
// let failStudents=students
// .filter(val=>val.marks<50)
// .map(val=>val.name)
// console.log("Fail Student:",failStudents);

// // Operation 5
// let totalMarks = 0
// students.forEach(val => {
//     totalMarks=totalMarks+val.marks
// });
// let average = totalMarks/students.length
// console.log(average);

// // find() method (find value)
// let num = [12,34,546,67]
// let findNum=num.find(val=>val>40)
// console.log(findNum);

// // findindex() method (find index)
// let idx = [12,34,546,67]
// let findindex=idx.findIndex(val=>val>40)
// console.log(findindex); 

// // includes() method for check the existing value
// let num1 = [12,34,546,67]
// console.log(num1.includes(546)); // true

// // some() method for check is that at least one smaller/greater value exists or not
// let num2 = [12,34,546,67]
// let num3=num2.some(val=>val>40) // true
// console.log(num3);

// every() method for check is that all smaller/greater value exists or not
// let num4 = [12,34,546,67]
// let num5=num4.every(val=>val>40) // false
// console.log(num5);

// ******** ARRAYS ******** 
let styles = ["Jazz","Blues"]
styles.push("Rock-n-Roll")
styles[Math.floor(styles.length-1)/2] ="Classics"
let firstValue=styles.shift()
alert(firstValue)
styles.unshift("Rap","Reggae")
alert(styles)