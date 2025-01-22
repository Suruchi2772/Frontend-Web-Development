// This is the most important topic.
// Most important thing is difference between foreach, map and filters
// let arr = [123, "Suruchi", "Vishal", "Arti",65, 34, { name: "Suruchi", age: 22, isMarried: false }];
// // filter out the same datatype
// console.log(arr.filter(value => typeof value == "number"));
// console.log(arr.filter(value => typeof value == "string"));
// console.log(arr.filter(value => typeof value == "object"));

// let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sqrsArr = numArr.map(num => num * num);
// console.log(sqrsArr);

// let person = [
//     {name:"Suruchi",age:22,isMarried:false},
//     {name:"Vishal",age:27,isMarried:false},
//     {name:"Poonam",age:28,isMarried:true},
//     {name:"Vikas",age:31,isMarried:true},
//     {name:"Akanksha",age:28,isMarried:true},
//     {name:"Gaurav",age:31,isMarried:true},
//     {name:"Arti",age:24,isMarried:false},
// ]
// let marriedPerson = person.filter(value => value.isMarried == true).map(n=>n.name);//chaining
// console.log(marriedPerson);
