// S,W or G , randomly generate one of these, declare win using alert, use confirm and prompt whenever required
//Approach 1 - Randomly iterate through the object
// const keyObject = {
//     key1: "S",
//     key2: "W",
//     key3: "G"
// }

//Approach 2 - Randomly iterate through the array
function snakeGame() {
    const arr = ["S", "W", "G"];

    const randomIndex = Math.floor(Math.random() * arr.length);
    console.log(arr[randomIndex]);

    const userGuess = prompt("Enter your guess, press S for Snake, W for Water or G for Gun");

    if (userGuess === arr[randomIndex]) {
        alert("Draw");
        const playAgain = confirm("Do you want to play again?");
        if (playAgain) {
            snakeGame();
        }else{
            alert("Thank you for playing");
        }
    }
    else if (userGuess === "S" && arr[randomIndex] === "W") {
        alert("You Lose");
    }
    else if (userGuess === "W" && arr[randomIndex] === "S") {
        alert("You win");
    }
    else if (userGuess === "W" && arr[randomIndex] === "G") {
        alert("You Lose");
    }
    else if (userGuess === "G" && arr[randomIndex] === "W") {
        alert("You win");
    }
    else if (userGuess === "G" && arr[randomIndex] === "S") {
        alert("You Lose");
    }
    else if (userGuess === "S" && arr[randomIndex] === "G") {
        alert("You win");
    }
    
    
    const playAgain = confirm("Do you want to play again?");
    if (playAgain) {
        snakeGame();
    }
}







