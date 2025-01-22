// loops
// for loop
// for (initialization; condition; increment / decrement){
//     code
// }

// for (i = 1; i <= 10; i++){
//     console.log(i);
// }

// let countryArr = ['Finland', 'India', 'America', 'Japan', 'China'];
// for (i = 0; i < countryArr.length; i++){
//     console.log(countryArr[i]);
// }

// let countryArr = ['Finland', 'India', 'America', 'Japan', 'China'];
// countryArr.forEach((value,index) => {
//     console.log(index+": "+value);
// });

// function
// function functionName() {
//     code
// }
// function print() {
//     console.log('Print function called...')
// }
// print();
// print();
// print();

// function product(a, b) {
//     return (a * b);
// }
// let prod = product(2, 3);
// console.log(prod);

// when we donot have idea about the number of argumnets user can pass then we use arguments object in normal function
// function sum() {
//     console.log(arguments)
// }

// sum(12, 34, 56);  //Arguments(3) [12, 34, 56, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// Arrow function
// functionName = () => {
//     code
// }
 
// sum = (a, b) => {
//     console.log(a + b);
// }

// sum(2, 3);
 
// if we hane just one line of code then we can skip the {}  as below
// print = (n,m) => console.log('print',n,m);
// print(3,4);

// for an unknown number of parameter we use ...opertor followed by parameter // arguments object not found in arrow function instead we use a parameter followed by spread operator (...)

// print = (...arg) => {
//     console.log(arg);  // [1, 2, 3, 45, 5]
// }
// print(1, 2, 3, 45, 5);