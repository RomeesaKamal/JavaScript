// arithmetic operators = operands (values, variable, etc)
 //                       operators (+ - */)
 //                       ex. 11 = x + 5
//  let students = 30;

  // students = students + 1
//   students = students - 2
//   students = students * 2
//   students = students / 2
//   students = students **2
  // students = students %2

// students += 4;
// students -= 8;
// students *= 2;
// students *= 2;
// students /= 2;
// students **= 2;
// students %= 2;

// students++;
// students--;

//  console.log(students)

 /*
  opertaor precedence
 1. parenthesis
 2. exponent
 3. multiplication & division & modlo
 4. addition & substraction 
*/

// let result = 1 + 2 * 3 + 4 ** 3
// let result = 12 % 5 + 8 / 2;
// let result = 6 / 2 ** (2 +5); /* 2+5=7, 2*7=128, 6/128=0.046875*/

// console.log(result);

// let a = 5;
// let b = 2;
// let c = a + b;
// let d = a - b;
// console.log("a + b =", c);
// console.log("a - b =", d);
// console.log("a * b =", a * b);
// console.log("a / b =", a / b);
// console.log("a = ", a, "& b =", b)
// console.log("a % b =", a % b);
// console.log("a ** b =", a ** b);

// Unary operator;
// 1. increment(++), a = a + 1{postincriment}....{++a => preincrement}
// 2. decrement(--), a = a - 1
// let e = 8;
// e++;
// e--;
// console.log("e = ", e);
// console.log("++e = ", ++e);
// console.log("e++ = ", e++);
// console.log("--e = ", --e);
// console.log("e-- = ", e--);

// Assignment operators : to aasign value(=, +=, -=, *=, %=, **=)

// let f = 9;
// f += 4;
// f %= 4;
// f *= 4;
// f -= 4;
// f **= 4;
// f /= 4;
// console.log("f =", f);

// Compariion oprators;
// equal to (==)
// equal to & type (===)
// not equal to (!=)
// not equal to & type (!==)

// let a = 6;
// let b = "6" //string
// let b = 6;
// console.log(a===b);
// console.log(a!=b);
// console.log(a!==b);
// console.log(a>b)
// console.log(a<b)
// console.log(a<=b)
// console.log(a>=b)

// Logical operators;
// 1. logical and (&&)
// 2. logical or (||)
// 3. logical not (!)


// let a = 5;
// let b = 4;
// let cond1 = a < b;
// let cond2 = a === 6;
// console.log(cond1 && cond2);
// console.log(cond1 || cond2);
// console.log(!(a<b));
// console.log(!(a>b));

//Conditional statement

// let age = 16

// if (age >= 18) {
//   console.log("vote can be")
// }

// if (age < 18) {
//   console.log("you cannot vote")
// }

// let mode = "white";
// let color;

// if (mode === "dark") {
//   color = "black";
// }
// if (mode === "light") {
  // color = "white";
// }
// else {
  // color = "white"
// }
// console.log(color);

// let age = 16;
// if (age >= 18){
//   console.log("vote")
// }else {
//   console.log("not vote")
// }
// let num = 1;
// if (num% 2 === 0){
//   console.log("even")
// }else{
//   console.log("odd")
// }

let mode = "dark";
let color;

if (mode === "dark") {
  color = "black";
} else if  (mode === "blue") {
  color = "blue";
} else if (mode === "red") {
   color = "red"
} else {
  color = "white"
}
console.log(color);
if(mode === "dark"){
   console.log(mode)

}

//Ternary operators
// conditon?true output : false output

let age = 25;
let result = age >= 18 ? "adult": "not adult"
console.log(result); // simpler, compact if-else


let num = prompt("Enter a number");

if (num% 5 === 0){
  console.log("mutiple of 5")
} else {
  console.log("not multiple of 5")
};

let score = prompt("Enter your number(0-100):");
let grade;
if (score >= 90 && score <= 100){
  grade = "A"
} else if (score >= 70 && score <= 89) {
  grade = "B"
} else if(score >= 60 && score <= 69) {
  grade = "C"    
} else if (score >= 50 && score <= 59) {
  grade = "D"
} else if (score >= 0 && score <= 49) {
   grade = "E "
  };
console.log(grade);
