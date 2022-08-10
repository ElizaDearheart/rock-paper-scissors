const handOptions = ["rock", "paper", "scissors"];

//getComputerChoice 
const getComputerChoice = Math.floor(Math.random() * handOptions.length);

//convert to computerSelection
const computerSelection = handOptions[getComputerChoice].toLowerCase();
console.log(computerSelection);

//playerSelection
let playerInput = prompt(`Please choose ${handOptions.join(", ")}.`);
var playerSelection = playerInput.toLowerCase();
console.log(playerSelection);

//playRound(playerSelection, computerSelection), 
//returns the winner of the round and what beat what.
let getComputerChoiceIndex = handOptions.indexOf(computerSelection);
let getPlayerSelectionIndex = (handOptions.indexOf(playerSelection));
let getAdjustedPlayerSelectionIndex = (handOptions.indexOf(playerSelection)) - 1;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("Game tied!");
    } else if (getAdjustedPlayerSelectionIndex === getComputerChoiceIndex) {
        console.log("You win.");
    } else if (getPlayerSelectionIndex === 0 && getComputerChoiceIndex === 2) {
        console.log("You win.")
    } else {
        console.log("You lose.");
    }

};
console.log(playRound(playerSelection, computerSelection));


//game function plays five rounds of playRound
///for (let = 0; i < 5; i++)

console.log(getComputerChoiceIndex);
console.log(getPlayerSelectionIndex);
console.log(getAdjustedPlayerSelectionIndex);
