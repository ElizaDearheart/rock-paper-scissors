const handOptions = ["Rock", "Paper", "Scissors"];

//getComputerChoice 
const getComputerChoice = Math.floor(Math.random() * handOptions.length);

//computerSelection
const computerSelection = handOptions[getComputerChoice].toLowerCase()
console.log(computerSelection)

//playerSelection
let playerInput = prompt(`Please choose ${handOptions.join(", ")}.`)
const playerSelection = playerInput.toLowerCase()
console.log(playerSelection)

//playRound(playerSelection, computerSelection), 
//returns the winner of the round and what beat what.
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection)
        return alert("Game tied!")

};

//game function plays five rounds of playRound
///for (let = 0; i < 5; i++)



//

