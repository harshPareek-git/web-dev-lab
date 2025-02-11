// let firstName = "Harryputter";
// console.log(firstName.toUpperCase());
// console.log(firstName.replace("Harry", "Perry"));

// let friend = "harmoinie";
// console.log(firstName.concat(" is a friend of ", friend, "  ok"));

let person = "sunny";
let word = "";
// console.log(person[0]);

for (let i = 0; i < person.length; i++) {
  word += person[i];
}
console.log(word);

let str = "Neha is a beautiful girl ❤️";
let love = Number.parseInt(str.slice("Neha is a beautiful girl".length));
console.log(love);
console.log(typeof love);
