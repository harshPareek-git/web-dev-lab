let arr = [1, 2, 3, 4, 5];
// let b = arr.toString();
// console.log(b);

// let c = arr.join("_");
// console.log(c);

//removes last element
// let d = arr.pop();
// console.log(d + " pop");
// console.log(arr);

//adds to last element
// let e = arr.push(6);
// console.log(e + " push");
// console.log(arr);

// //removes first element
// let f = arr.shift();
// console.log(f + " shift");
// console.log(arr);

// //adds first element
// let g = arr.unshift(6);
// console.log(g + " unshift");
// console.log(arr);

// let arr2 = [11, 22, 33, 44, 55];
// let new_arr = arr.concat(arr2);
// console.log(new_arr);

// function sort() {
//   let newArray = [51, 921, 23, 24, 35];
//   return newArray.sort();
// }
// console.log(sort());

/*
Delete - operator
*/

let num = [2, 12, 3, 4, 5, 6, 7, 8, 1];
// delete num[0];
// console.log(num, num.length);

let num2 = [2, 12, 3, 4, 5, 6, 7, 8, 1];
let num3 = [2, 12, 3, 4, 5, 6, 7, 8, 1];
let num4 = [2, 12, 3, 4, 5, 6, 7, 8, 1];

// let newNum = num.concat(num2, num3, num4);
// console.log(newNum);

// console.log(num.reverse());

/* Slice and Splice */

let numer = [2, 12, 3, 4, 5, 6, 7, 8, 1];
//Returns deleted item and modify source array
//Syntax - numer.splice(position to add,no. of elements to remove, elements to be added)
// console.log(numer.splice(2, 2, 1, 1));
// console.log(numer);

let newNumer = numer.slice(4);
let newNumer1 = numer.slice(4, 7);

// console.log(newNumer);
console.log(newNumer1);
