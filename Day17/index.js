// array
// let arr = [];
// console.log(arr); //empty array

// let drinks = ["Juice", "Tea", "Coffee"];
// console.log(drinks);

// console.log(drinks[0], drinks[1], drinks[2]); //accessing individual elements

// drinks[1] = "Black Tea"; //modifying array element

// console.log(drinks);

// split method in array
// it is used to create array by spliting the given string at a specified separator
// let js = "Javascript is easy";
// let charInjs = js.split(""); //split array at every""
// console.log(js);
// console.log(charInjs);
// let countryList = "India,China,Pakistan,Nepal,Afganishtan";
// let country = countryList.split(',');
// console.log(countryList);
// console.log(country);

//array is a reference datatype
// let fruits = ["apple", "banana", "grape", "gauava"];
// let fruit0 = fruits;
// console.log(fruit0);
// fruit0[0] = "Pear";

// console.log(fruits);
// console.log(fruit0);

// Array functions

// array constructor: to create an array
// let arr = Array(); //creates an empty array
// console.log(arr);

// array concatenation : to concatenate two array
// let fruits = ["apple", "banana", "mango"];
// let vegetables = ["potato", "capsicum", "carrot"];
// let fruitsAndVegetables = vegetables.concat(fruits);
// console.log(fruits);
// console.log(vegetables);
// console.log(fruitsAndVegetables);

// array length : to get the array length
// let fruits = ["apple", "banana", "mango"];
// let fruitsArrayLength = fruits.length;
// console.log(fruits);
// console.log(fruitsArrayLength);

// array indexOf: it checks if an element exist in the array and if it does then it returns the index of the element and if not then it return -1

// let fruits = ["apple", "banana", "mango"];
// let isExistPear = fruits.indexOf("pear");
// let isExistMango = fruits.indexOf("mango");
// console.log(isExistMango, isExistPear);

// lastindexof: it returns the value of the index where the given element appears lastly.

// let numbers = [1, 3, 5, 7, 13, 1, 8, 3, 4, 5];
// let lastIndexOf13 = numbers.lastIndexOf(13);
// let lastIndexOf1 = numbers.lastIndexOf(1);
// let lastIndexOf2 = numbers.lastIndexOf(2);
// console.log(lastIndexOf1, lastIndexOf13, lastIndexOf2);

// includes: it returns true if an element exist else false.

// let numbers = [1, 3, 5, 7, 13, 1, 8, 3, 4, 5];
// let isIncludes13 = numbers.includes(13);
// let isIncludes2 = numbers.includes(2);
// console.log(isIncludes13, isIncludes2);

// toString(): converting array into string
// let arr = ["abhishek", "kartik", "nitin", "vikas"];
// let arrString = arr.toString();
// console.log(arrString);

// join : It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string. By default, it joins with a comma.

// let arr = ["apple", "banana", "mango"];
// console.log(arr.join()); //default
// console.log(arr.join(" "));

// Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.

// let arr = ["apple", "banana", "mango"];
// let slice1 = arr.slice();
// let slice2 = arr.slice(0);
// let slice3 = arr.slice(0, arr.length);
// let slice4 = arr.slice(1, 4);
// console.log(slice1);
// console.log(slice2);
// console.log(slice3);
// console.log(slice4);

// Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.

// const numbers = [1, 2, 3, 4, 5, 6];
// numbers.splice(3, 3, 7, 8, 9); //1 2 3 7 8 9
// console.log(numbers.splice(3, 3, 7, 8, 9));
// console.log(numbers);


// Push: adding item in the end. To add item to the end of an existing array we use the push method.
// let arr = ["apple", "banana", "mango"];
// arr.push("papaya");
// console.log(arr);

// pop: Removing item in the end.
// let arr = ["apple", "banana", "mango"];
// arr.pop();
// console.log(arr);

// shift: Removing one array element in the beginning of the array.
// let arr = ["apple", "banana", "mango"];
// arr.shift();
// console.log(arr);

// unshift: Adding array element in the beginning of the array.
//  let arr = ["apple", "banana", "mango"];
// arr.unshift("pineapple");
// console.log(arr);

// reverse: reverse the order of an array.
//  let arr = ["apple", "banana", "mango"];
// arr.reverse();
// console.log(arr);

// Array of Arrays

// let foodCategory = [["Tea", "Coffee"],
// ["ChilliPotato", "Burger", "Golgappe"],
// ["Khichdi", "Dalia", "Roti"]];

// console.log(foodCategory);
// // accessing individual item
// console.log(foodCategory[2][1]); //dalia
// console.log(foodCategory[0].sort());


// Exercise:level 1
// let arr = Array; //1

//  let arr = ["apple", "banana", "mango","pineapple","grape"]; //2
// console.log(arr.length); //3
// console.log(arr[0], arr[2], arr[4]);//4

// let mixedDataTypes = ["String", 2, true, null, [1, 2, 3],{name:"Vishal",age:28}];
// console.log(mixedDataTypes);

// const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// itCompanies[0] = "IBM";
// console.log(itCompanies);
// console.log(itCompanies);
// console.log(itCompanies.length);
// console.log(itCompanies[0], itCompanies[itCompanies.length - 1], itCompanies[3]);
// console.log(itCompanies[0]);
// console.log(itCompanies[1]);
// console.log(itCompanies[2]);
// console.log(itCompanies[3]);
// console.log(itCompanies[4]);
// console.log(itCompanies[5]);
// console.log(itCompanies[6]);
// console.log(itCompanies[0].toUpperCase());
// console.log(itCompanies[1].toUpperCase());
// console.log(itCompanies[2].toUpperCase());
// console.log(itCompanies[3].toUpperCase());
// console.log(itCompanies[4].toUpperCase());
// console.log(itCompanies[5].toUpperCase());
// console.log(itCompanies[6].toUpperCase());

// console.log(itCompanies.join(","));

// if (itCompanies.includes("IM")) {
//     console.log("IBM")
// } else {
//     console.log("company doesnot exist.");
// }

//Objects in javascript
// objects do have properties and properties have values, so an object is a key value pair.

// creating an empty Object
// const person = {};

// creating object 
// const person = {
//     name: "Suruchi",
//     age: 22,
//     'is Married': false
// }
// console.log(person);

// accessing values from an Object
// ->using . (use only when key is of one word)
// ->using [] and ''

// console.log(person.name, person['name']);
// console.log(person.age, person['age']);
// console.log(person['is Married']);

// we can modify an object after creating it
// person.age = 23;
// person['phone Number'] = 12345678544;
// console.log(person);

// Object Methods

// Object.keys: To get the keys or properties of an object as an array
// const copyKeys = Object.keys(person);
// console.log(copyKeys);

// Object.values:To get values of an object as an array
// const copyValues = Object.values(person);
// console.log(copyValues);

// Object.entries:To get the keys and values in an array
// const enteries = Object.entries(person);
// console.log(enteries);

// hasOwnProperty: To check if a specific key or property exist in an object
// console.log(person.hasOwnProperty('name'));
// console.log(person.hasOwnProperty('gender'));
// console.log(person.hasOwnProperty('Phone number'));

// conditionals : Conditional statements are used for make decisions based on different conditions.

// if
// let status = false;
// if (status) {
//     console.log("Person is active");
// }

// if else
// if (status) {
//     console.log("Person is active.");
// }
// else {
//     console.log("Person is not active.");
// }

// if else if else
// Check if the number is positive, negative or zero
// let a = 0;
// if (a > 0) {
//     console.log(`${a} is a positive number`);
// } else if (a < 0) {
//     console.log(`${a} is a negative number.`);
// } else {
//     console.log("It's a zero.")
// }


// find the greatest no among three
// let a = 31, b = 51, c = 8;
// if (a > b) {
//     if (a > c) {
//         console.log(`${a} is the greatest number.`);
//     } else {
//         console.log(`${c} is the greatest number.`);
//     }
// }
// else if(b>c){
//         console.log(`${b} is the greatest number.`);
// } else {
//         console.log(`${c} is the greatest number.`);
// }

// truthy and falsy
// any value except falsy value is a truthy value.
// falsy values : "",0,nan,undefined,null,false
// let a=null;
// if (a) {
//     console.log("Truthy value");
// } else {
//     console.log("Falsy Value");
// }

// == and ===
// ==: checks whether the value is equal not the type as '23' and 23 has same value but the type is different here == gives true result and === gives false .=== is strictly equality
// let a;
// if (null == a) {
//     console.log("loosely equality");
// } else {
//     console.log("strictly equality");
// }


// Switch case 
// let weather = 'cloudy';
// switch ('rainy') {
//     case 'rainy':
//         console.log('Weather is rainy');
//         break;
//     case 'cloudy':
//         console.log('Weather is cloudy');
//         break;
//     case 'sunny':
//         console.log('Weather is sunny');
//         break;
//     default:
//         console.log('Please enter correct weather!!!')
// }