// getComputerChoice() randomly returns 'Rock', 'Paper' or 'Scissors'
// play_fe(playerSelection, computerSelection) returns a string like "You win! Sword beats Lance."
// Remove button, make a typing field
// Make playerSelection case insensitive 
// Ties = play re-round
// match_fe() - Bo5 games via loops

// one button that says play
// create global integer variables of player_wins and computer wins, both at 0
let player_wins = 0;
let computer_wins = 0;
let matches = 0;    

// create array variable computerChoices of 'Sword', 'Axe', 'Lance'.
let computerChoices = ['Sword', 'Axe', 'Lance'];

// function getComputerChoice() returns a random one of the array
function getComputerChoice() {
    return computerChoices[Math.floor(Math.random() * 3)]
};

// function play_fe:
// takes player's choice and computer's choice
function play_fe(playerSelection, computerSelection) {
    let gameResult;

// runs them through a bunch of ifs
    if (playerSelection == 'Sword') { 
        if (computerSelection == 'Sword') { gameResult = 'Draw' } 
        else if (computerSelection == 'Axe') { gameResult = 'Win' }
        else { gameResult = 'Loss' } 
        }
    if (playerSelection == 'Axe') {
        if (computerSelection == 'Sword') { gameResult = 'Loss' } 
        else if (computerSelection == 'Axe') { gameResult = 'Draw' }
        else { gameResult = 'Win' }
        }
    if (playerSelection == 'Lance') {
        if (computerSelection == 'Sword') { gameResult = 'Win' } 
        else if (computerSelection == 'Axe') { gameResult = 'Loss' }
        else { gameResult = 'Draw' }
    }

// adds to player_wins or computer_wins
    if (gameResult == 'Win') { player_wins++ };
    if (gameResult == 'Loss') { computer_wins++ };

// returns a string 'You win! Lance beats sword.'
    let gameString;
    if (gameResult == 'Win') { gameString = `You win! ${playerSelection} beats ${computerSelection}. Current score: You: ${player_wins} - Computer ${computer_wins}` };
    if (gameResult == 'Loss') { gameString = `You lose! ${computerSelection} beats ${playerSelection}. Current score: You: ${player_wins} - Computer ${computer_wins}` };
    if (gameResult == 'Draw') { gameString = `It's a draw! ${computerSelection} clashes with ${playerSelection}. Current score: You: ${player_wins} - Computer ${computer_wins}. Extra round!`; matches-- }
    return gameString;
};

// function match_fe:
function match_fe() {
// let matches = 0, as long as matches < 6, run code, match++
    for (matches; matches <= 4; matches++) {
// prompt the player to type in 'Sword', 'Axe' or 'Lance' and store the answer in playerSelection
// prompt again if these are not contained in the answer (case insensitive)
        let player_prompt = prompt("Sword, axe or lance?", "Sword!")
        let playerSelectionMade = 0;
        while (playerSelectionMade == 0) {
            if (player_prompt.toLowerCase().includes("sword") || player_prompt.toLowerCase().includes("axe") || player_prompt.toLowerCase().includes("lance"))
            { playerSelectionMade++ } 
            else player_prompt = prompt("Bro, you have to choose SWORD, AXE or LANCE?", "Fine, SWORD!")
        }
        if (player_prompt.toLowerCase().includes("sword")) { player_prompt = 'Sword' };
        if (player_prompt.toLowerCase().includes("axe")) { player_prompt = 'Axe' };
        if (player_prompt.toLowerCase().includes("lance")) { player_prompt = 'Lance' };
        
// run play_fe with player's selection and function
        alert(play_fe(player_prompt, getComputerChoice()));
    }
// alert: 'You win the match / you lose the match with a score of [playerwins] to [computerwins].'
    if (player_wins > computer_wins) { alert(`You win the match! The final score is: You: ${player_wins} - Computer ${computer_wins}`)} 
    else { alert(`You lose the match! The final score is: You: ${player_wins} - Computer ${computer_wins}`) } 
// reset the wins and matches to 0
    player_wins = 0;
    computer_wins = 0;
    matches = 0;
}