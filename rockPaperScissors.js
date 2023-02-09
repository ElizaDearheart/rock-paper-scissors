let playerChoice;
// buttons//
document.getElementById('rock').onclick = playRound;
document.getElementById('paper').onclick = playRound;
document.getElementById('scissors').onclick = playRound;
//divs//
let container = document.querySelector('#container');
//total score
let total_score = document.createElement('div');
total_score.classList.add('total_score');
container.appendChild(total_score);
//player score
let player_score = document.createElement('div');
total_score.classList.add('player_score');
container.appendChild(player_score);
//computer score
let computer_score = document.createElement('div');
computer_score.classList.add('computer_score');
container.appendChild(computer_score);
//player wins
let player_wins = document.createElement('div');
player_wins.classList.add('player_wins');
container.appendChild(player_wins);
//computer wins
let computer_wins = document.createElement('div');
computer_wins.classList.add('computer_wins');
container.appendChild(computer_wins);

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
    total_score.textContent = "Game total: " + gameCount;
    player_score.textContent = "Player total: " + playerWinCount;
    computer_score.textContent = "Computer total: " + computerWinCount;

    if (gameCount === 5) {
        gameCount = 0
        if (playerWinCount > computerWinCount) {
            player_wins.textContent = "Player wins!  Congratulations!"
            alert('Game over. Player wins.')
        } else {
            computer_wins.textContent = "Game over.  Computer wins."
            alert('Game over. Computer wins.')
        }
    }
};




