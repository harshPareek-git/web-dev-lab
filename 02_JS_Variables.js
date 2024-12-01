// JS is a dynamically typed language as it executes variable type at runtime.

// let z = 54;
// console.log(z);

// z = "Harry";
// console.log(z);

// Before ES6 variables used let keyword for decalaring  a variable

// let is block scoped, more prone to produce bugs , let can be updated but cannot be redclared
// let a = 45;
// let b = "Harry";
// let c = NaN;
// let d = null;
// let e = undefined;

// {
//   let a = 41;
//   console.log(a);
// }
// console.log(a);


// var vs let

// var can be updated and redclared within it's scope (global)
// var f = 45;
// var f = 32;
// var g = "Harry";
// var h = NaN;
// var i = null;
// var j = undefined;

// {
//   var k = 41;
//   console.log(k);
// }
// console.log(k);
// k = 32;
// console.log(k);

// const cannot be redclared or updated

// const firstName = "harry";
// console.log(firstName);

// firstName = 'k'; // This will throw "TypeError: Assignment to constant variable."

// console.log(firstName); // This will not execute


// var and let is initialized as Undefined whereas  const is not initialized

var newName;
console.log(newName);

let yourName;
console.log(yourName);

// const myName;



 


