const handOptions = ["rock", "paper", "scissors"];

//getComputerChoice 
const getComputerChoice = Math.floor(Math.random() * handOptions.length);

//convert to computerSelection
const computerSelection = handOptions[getComputerChoice].toLowerCase();
console.log(computerSelection);

//playerSelection
let playerInput = prompt(`Please choose ${handOptions.join(", ")}.`);
let playerSelection = playerInput.toLowerCase();
console.log(playerSelection);

//get index positions for player and computer
let getComputerChoiceIndex = handOptions.indexOf(computerSelection);
let getPlayerSelectionIndex = (handOptions.indexOf(playerSelection));
//adjust player index down one to determine if guess wins
let getAdjustedPlayerSelectionIndex = (handOptions.indexOf(playerSelection)) - 1;
//capitalize words for player messages
let capitalizedPlayerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()
let capitalizedComputerSelection = computerSelection[0].toUpperCase() + computerSelection.slice(1).toLowerCase()

//playRound(playerSelection, computerSelection), 
//returns the winner of the round and what beat what.
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        alert("Game tied!");
    } else if (getAdjustedPlayerSelectionIndex === getComputerChoiceIndex) {
        alert(`You win! ${capitalizedPlayerSelection} beats ${capitalizedComputerSelection}.`);
    } else if (getPlayerSelectionIndex === 0 && getComputerChoiceIndex === 2) {
        alert(`You win! ${capitalizedPlayerSelection} beats ${capitalizedComputerSelection}.`);
    } else {
        alert(`You lose. ${capitalizedComputerSelection} beats ${capitalizedPlayerSelection}.`);
    }

};
console.log(playRound(playerSelection, computerSelection));


//game function plays five rounds of playRound
///for (let = 0; i < 5; i++)

console.log(getComputerChoiceIndex);
console.log(getPlayerSelectionIndex);
console.log(getAdjustedPlayerSelectionIndex);
