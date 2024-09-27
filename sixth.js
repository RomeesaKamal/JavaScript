// First method:
// function myFunction(){
//     console.log("Welcome to Home");
//     console.log("I am cooking some meal");

// }
// myFunction();

// Second method:
// function myFunction(msg){
//     console.log(msg);
// }
// myFunction("I love JS");

// Function -> 2 numbers, sum

// function sum(x, y){ 
    // Local variables -> scope
//         sum = x + y
//         console.log("before return")
//         return sum;
// };
// let val = sum(900, 4);
// console.log(val);

// function sum(a, b){
//     return a + b;
// }

//  const arrowSum = (a, b) => {
//     return a + b;
// }

// function mul(a, b){
//     return a * b;
// }
// const arrowMul = (a, b) => {
//     return a * b;
// }

// console.log(6, 2);

// const printHello = () => {
//     console.log("Hello")
// }


// function countVowels(str) {
//      let count = 0;
// for(const char of str){
//     if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//         count++;
//     }
// }
//   return count;
// }

// countVow = (str) => {
//     let count = 0;
// for(const char of str){
//     if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//         count++;
//     }
// }
//   return count;
// // }

// let arr = [1, 2, 3, 4]
 
// arr.forEach(function printValue(val){
//     console.log(val);
// })

// let SUR =["Saba","Shanza", "Umama", "Urooj", "Rooha", "Romeesa"];

// SUR.forEach((val, idx, SUR) => {
//     console.log(idx, val.toUpperCase(), SUR);
// })
 //forEach function is called Higher order function/Methods:

//  let arr = [16, 17, 18, 19, 20];

 // first method
//  arr.forEach((i) => {
//     console.log(i**2)
//  })

// second method
//  let calSquare =  (i)  => {
//     console.log(i**2)
//  }
//  arr.forEach(calSquare)

// arr.map((i) => {
//         console.log(i)
//  })

// let newArray = arr.map((i) => {
//         return i**2;
// })
// console.log(newArray)

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9,10 ];
 
// let evenNum = num.filter((val) => {
//     return val % 2 === 0;
// })
// console.log(evenNum);

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9,10 ];
 
// let oddNum = num.filter((val) => {
//     return val % 2 !== 0;
// })
// console.log(oddNum);

// let numb = [1, 2, 3, 4, 5, 6, 7, 8, 9,10 ];
 
// let evenNumb = num.filter((val) => {
//     return val > 3 ;
// })
// console.log(evenNumb);

// let arr = [22, 13, 45 ,67 ,89]

// const output = arr.reduce((res, curr) => {
//     return res + curr ;

// })

// const output = arr.reduce((res, curr) => {
//     return res > curr ? res : curr ;

// })

// console.log(output)

// let marks = [86, 88, 90, 91, 95, 98, 99]
// const result = marks.filter((val) => {
//     return val > 90;
// })
// console.log(result)


// let n = prompt("Enter the number :")
// let arr = [];
// for(i = 1; i <= n; i++){
//     arr[i - 1] = i;
// }
// console.log(arr);

// let sum = arr.reduce((pre, curr) => {
//     return pre + curr;
    
// })
// console.log(sum);


// let mul = arr.reduce((pre, curr) => {
//     return pre * curr;
    
// })
// console.log(mul);
// const fib = [0,1]
function fibonacci(n) {
    const arr =[0,1];
    for(i=2; i<=n;i++){
      fib[i] = fib[i-1] + fib[i-2] ;
      fib[i] = i;
    
    }
    return fib;
  }
  let  oddNum = arr.filter((val) => {
    return val % 2 === 0;
  })
console.log(oddNum);