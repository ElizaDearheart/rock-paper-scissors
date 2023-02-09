let playerChoice;

document.getElementById('rock').onclick = playRound;
document.getElementById('paper').onclick = playRound;
document.getElementById('scissors').onclick = playRound;

let gameCount = 0;
let playerWinCount = 0;
let computerWinCount = 0;

let computerHandOptions = ["rock", "paper", "scissors"];

function playRound() {

    let playerChoice = this.id;

    let getComputerChoice = Math.floor(Math.random() * computerHandOptions.length);
    //convert to computerSelection
    let computerSelection = computerHandOptions[getComputerChoice];

    alert("Player: " + playerChoice);
    console.log(playerChoice)
    alert("Computer: " + computerSelection);
    console.log(computerSelection);

    console.log(compare(playerChoice, computerSelection))

    function compare(playerChoice, computerSelection) {
        if (playerChoice === computerSelection) {
            alert("Round tied.")
            gameCount += 1;
            return "Round tied.";
        }
        if (playerChoice === "rock") {
            if (computerSelection === "scissors") {
                alert("Player wins this round.");
                gameCount += 1;
                playerWinCount += 1;
                return "Player wins this round."
            } else {
                alert("Computer wins this round.")
                gameCount += 1;
                computerWinCount += 1;
                return "Computer wins this round."
            }
        }
        if (playerChoice === "paper") {
            if (computerSelection === "rock") {
                alert("Player wins this round.");
                gameCount += 1;
                playerWinCount += 1;
                return "Player wins this round."
            } else {
                alert("Computer wins this round.")
                gameCount += 1;
                computerWinCount += 1;
                return "Computer wins this round."
            }
        }
        if (playerChoice === "scissors") {
            if (computerSelection === "paper") {
                alert("Player wins this round.");
                gameCount += 1;
                playerWinCount += 1;
                return "Player wins this round."
            } else {
                alert("Computer wins this round.")
                gameCount += 1;
                computerWinCount += 1;
                return "Computer wins this round."
            }
        }
    }
    if (gameCount === 5) {
        gameCount = 0
        if (playerWinCount > computerWinCount) {
            alert('Game over. Player wins.')
        } else {
            alert('Game over. Computer wins.')
        }
    }
};




