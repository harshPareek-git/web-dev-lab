// let randomNo = Math.random(1,101);
// console.log(randomNo);

// let a = Math.floor(Math.random() * 100) + 1;
const random = () => {
  return Math.floor(Math.random() * 100) + 1;
};
// console.log(random());

let condition = false;
let count = 0;
while (!condition) {
  let value = random();
//   console.log(value);
  count++;
  if (value === 99) {
    condition = true;
  }
}
console.log("Count = " + count);
