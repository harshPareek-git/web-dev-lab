/* 
Types of loops
1. for loop - loops over a block of code number of times
2. for in loop - loops through the keys of an object
3. for of loop - loops through the values of an object 
4. while loop - loops a block based on specific condition
5. do-while loop - while loop variant which runs atleast once 
*/

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

let user = {
  harry: 34,
  marry: 32,
  priya: 53,
};

//for in - need more understanding on this
for (let a in user) {
  console.log("Marks of " + a + " " + "are " + user[a]);
}

//for of
for (let b of "user") {
  console.log(b);
}

let i = 0;
// while (i < 10) {
//   console.log(i++); 
// }

do {
  console.log(i++);
} while (i < 10);
