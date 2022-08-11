let handOptions = ["rock", "paper", "scissors"];

let gameCount = 0
let playerWinCount = 0
let computerWinCount = 0

//playRound(playerSelection, computerSelection), 
//returns the winner of the round and what beat what.
function playRound() {

    //getComputerChoice 
    let getComputerChoice = Math.floor(Math.random() * handOptions.length);
    //convert to computerSelection
    let computerSelection = handOptions[getComputerChoice].toLowerCase();
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


    if (playerSelection === computerSelection) {
        alert("Game tied!");
        gameCount += 1;


    } else if (getAdjustedPlayerSelectionIndex === getComputerChoiceIndex) {
        alert(`You win! ${capitalizedPlayerSelection} beats ${capitalizedComputerSelection}.`);
        gameCount += 1;
        playerWinCount += 1;


    } else if (getPlayerSelectionIndex === 0 && getComputerChoiceIndex === 2) {
        alert(`You win! ${capitalizedPlayerSelection} beats ${capitalizedComputerSelection}.`);
        gameCount += 1;
        playerWinCount += 1;


    } else {
        alert(`You lose. ${capitalizedComputerSelection} beats ${capitalizedPlayerSelection}.`);
        gameCount += 1;
        computerWinCount += 1;

    }
};

function game() {
    for (let i = gameCount; i < 5; i++) {
        playRound()
    }
    if (gameCount = 5) {
        if (playerWinCount > computerWinCount) {
            alert('Game over. Player wins.')
        } else {
            alert('Game over. Computer wins.')
        }
    }
};

(game())


