// *************** Day 1 and Day 2 recape ***************
// let name = "Esha"
// const country = "Pakistan"
// let age = 23
// if (age >= 18) {
//     console.log("Adult");  
// }
// else if (age >= 13) {
//     console.log("Teenager");
    
// } else {
//     console.log("Child");
    
// }

// for(let i = 10; i >= 1; i--) {
//   console.log("Countdown:", i);
// }
// console.log("Blast off! 🚀");

// let star = "";
// for(let i = 1; i <= 5; i++) {
//   star = star + "*";
//   console.log(star);
// }

// for(let i = 5; i >= 1; i--) {
//     let star = "";
//     for(let j = 1; j <= i; j++) {
//     star = star + "*";
// }
// console.log(star);
// }

// let count = 1;
// while(count <= 5) {
//   console.log("Count:", count);
//   count++;    // ZARURI — warna infinite loop!
// }

// Skip Even number 

// for (let i = 0; i <=10; i++) {
//     if (i%2==0) {
//         continue
//     }
//     console.log("odd number", i);   
// }

// let num1 = "1"
// for (let i = 1; i <=5; i++) {
//     let num = ""
//     for (let j = 1; j <=i; j++) {
//         num += num1
//         num1++
//     }
//     console.log(num);  
// }

// 1 to 100 sum 

// let product = 1
// for (let i = 1; i <=10; i++) {
//     product =  product * i
// }
// console.log(product);

// // Fizz Buzz Example 
// for(let i = 1; i <= 30; i++) {
//     if ((i%3===0) && (i%5===0)) {
//     console.log("FizzBuzz");
    
//   }
//   else  if (i%3===0) {
//       console.log("Fizz");
      
//     }
//     else if (i%5===0) {
//        console.log("Buzz");
       
//      }
//   else{
//     console.log(i );
    
//   }
// }

// let evenCount = 0;
// let oddCount = 0;
// let divBy5 = 0;
// for (let i = 0; i <=20; i++) {
//     if (i%2===0) {
//     console.log("");
    
    
//   }
//   else if (i%5===0) {
//     console.log("");
//   }
    
// }


// Functions recape 
// let add =(num1, num2)=>{
//   return num1 + num2
// }

// let userName =(name)=>{
//   return `Hello! ${name}`
// }

// let getGrade =(marks)=>{
//   if (marks>=90) {
//     return "A"
//   } 
//   else if(marks>=80){
//     return "B"
//   }
//   else if(marks>=70){
//     return "C"
//   }
//   else if(marks>=50){
//     return "D"
//   }
//   else{
//     return "F"
//   }
// }

// let additon=add(2,3)
// let UserName = userName("Esha")
// let finalGrade=getGrade(85)
// console.log(additon);
// console.log(UserName);
// console.log(finalGrade);

// Array 10% off  
// let items = [250, 645, 300, 900, 50]
// let i = 0
// for (const v of items) {
//   let discount = v/10
//   items[i] = items[i]-discount
//   console.log(items[i]);
//   i++
// }

// using for loop 
let items = [250, 645, 300, 900, 50]
for (let i = 0; i < items.length; i++) {
  let offer = items[i]/10
  items[i]=items[i]-offer
}
console.log(items);
