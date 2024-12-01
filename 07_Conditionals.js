// Conditional expressions

// let a = prompt("Hey, what's your age");
// a = Number.parseInt(a);
// console.log(typeof a);

/*
1. if statement
2. if else statement
3. if else if statement
 */
let age = 10;
if (age < 0) {
  console.log("Invalid age");
} else if (age >= 10 && age < 18) {
  console.log("You can't drive");
} else if ((age = 18)) {
  console.log("Get a license");
} else {
  console.log("You can drive if you have license");
}

const users = "User1";

switch (users) {
  case "User4":
    console.log("user 4 using the device");
    break;

  case "User3":
    console.log("user 3 using the device");
    break;

  case "User2":
    console.log("user 2 using the device");
    break;

  case "User1":
    console.log("user 1 using the device");
    break;
}

console.log("You", age >= 18 ? "can drive" : "can't d rive");
