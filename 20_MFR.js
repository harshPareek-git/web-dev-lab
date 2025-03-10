// Map,filter,reduce -> Higher order array methods
//map() -> creates a new array by performing some operation on each array element.

// const a = [1, 3, 5];
// let newArray = a.map((value, index, array) => {
//   return value * value;
// });
// console.log(newArray);

const arr = [5, 3, 1, 3];
const arr1 = arr.map((element) => {
  return element * 2;
});
// console.log(arr1);
console.log(arr1[(3, 2, 3)]);

//filter
let filter = arr.filter((element) => {
  return element > 2;
});
console.log(filter);

//reduce
let func_reduce = (r1, r2) => {
  return r1 + r2;
};
let red = arr.reduce(func_reduce);
console.log(red);

