/*Write a JS program to generate a random number and store it in a variable. The program then takes an input from the user to tell them whether the guess was correct, greater or lower than the original number.
(100 - (No of guesses))
It is the score of the user. The program is expected to terminate once the number is guessed. Number should be between 1 - 100. 
*/

// let randomNo = Math.random(1,101);
// console.log(randomNo);

// let a = Math.floor(Math.random() * 100) + 1;
// const random = () => {
//   return Math.floor(Math.random() * 100) + 1;
// };
// console.log(random());

// let condition = false;
// let count = 0;
// while (!condition) {
//   let value = random();
// //   console.log(value);
//   count++;
//   if (value === 1) {
//     condition = true;
//   }
// }
// console.log("Count = " + count);

function guessTheNumber(){
  function random() {
    return Math.floor(Math.random() * 100) + 1;
  };
  let value = random();
  console.log(value);

  let count = 0;

let condition = false;
while(!condition){
  let input = Number.parseInt(prompt("Guess a number"));
  if(value === input){
    condition = true;
    console.log("You guessed the correct number");
    return "Your score is " + (100-count);
  }
  count++;
 if (value  > input) {
  console.log("The guessed number is lower than the original number");
}
else {
  console.log("The guessed number is greater than the original number");
  }};
}
guessTheNumber();

