let pokemon_player_wins = 0;
let pokemon_computer_wins = 0;
let pokemon_matches = 0;    

let pokemonComputerChoices = ['Fire', 'Water', 'Grass'];
function pokemonGetComputerChoice() {
    return pokemonComputerChoices[Math.floor(Math.random() * 3)]
};

let fire_button = document.querySelector('#pokemon_fire');
let water_button = document.querySelector('#pokemon_water');
let grass_button = document.querySelector('#pokemon_grass');
let pokemon_area = document.querySelector('#pokemon_area');

function play_pokemon(playerSelection, computerSelection) {
    let gameResult;

// runs them through a bunch of ifs
    if (playerSelection == 'Fire') { 
        if (computerSelection == 'Fire') { gameResult = 'Draw' } 
        else if (computerSelection == 'Grass') { gameResult = 'Win' }
        else { gameResult = 'Loss' } 
        }
    if (playerSelection == 'Water') {
        if (computerSelection == 'Grass') { gameResult = 'Loss' } 
        else if (computerSelection == 'Water') { gameResult = 'Draw' }
        else { gameResult = 'Win' }
        }
    if (playerSelection == 'Grass') {
        if (computerSelection == 'Water') { gameResult = 'Win' } 
        else if (computerSelection == 'Fire') { gameResult = 'Loss' }
        else { gameResult = 'Draw' }
    }

    if (gameResult == 'Win') { pokemon_player_wins++ };
    if (gameResult == 'Loss') { pokemon_computer_wins++ };

    let gameString;
    if (gameResult == 'Win') { gameString = `You win! ${playerSelection} beats ${computerSelection}. Score: You: ${pokemon_player_wins} - Computer ${pokemon_computer_wins}` };
    if (gameResult == 'Loss') { gameString = `You lose! ${computerSelection} beats ${playerSelection}. Score: You: ${pokemon_player_wins} - Computer ${pokemon_computer_wins}` };
    if (gameResult == 'Draw') { gameString = `It's a draw! ${computerSelection} clashes with ${playerSelection}. Score: You: ${pokemon_player_wins} - Computer ${pokemon_computer_wins}`; matches-- };
    pokemon_area.textContent = gameString;

    setTimeout(() => {
        if (pokemon_player_wins == 5 || pokemon_computer_wins == 5) { alert('This battle is over!');
            if (pokemon_player_wins > pokemon_computer_wins) {
                alert(`You win! The final score is: You: ${pokemon_player_wins} - Computer ${pokemon_computer_wins}`); pokemon_player_wins = 0; pokemon_computer_wins = 0; pokemon_area.textContent = '';
            } else {
                alert(`You lose! The final score is: You: ${pokemon_player_wins} - Computer ${pokemon_computer_wins}`); pokemon_player_wins = 0; pokemon_computer_wins = 0; pokemon_area.textContent = '';
            }
        };
    }, 200);
};

fire_button.addEventListener('click', function() { play_pokemon('Fire', pokemonGetComputerChoice()) });
water_button.addEventListener('click', function() { play_pokemon('Water', pokemonGetComputerChoice()) });
grass_button.addEventListener('click', function() { play_pokemon('Grass', pokemonGetComputerChoice()) });

