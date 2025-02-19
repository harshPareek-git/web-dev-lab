let num = [1, 2, 4, 5];
num.forEach((element) => {
  console.log(element * element);
});

//Array.from -> Used to create an array from any other object

let firstName = "harry";
let newName = Array.from(firstName);
console.log(typeof firstName);
console.log(typeof newName);

//for ... of -> can be  used to get the values from an array
for (let i of num) {
  console.log(i);
}

//for ... in -> can be used to get keys from an array
let line = "";
for (let i in num) {
  line += i;
}
console.log(line);
