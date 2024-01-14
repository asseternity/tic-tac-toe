// RPS
// Connect the three buttons to JS
// Connect the rps_area with JS
// Make JS say something in rps_area
// Create vars for computer's choices: rock, paper, scissors
// Create a var with an array containing those vars
// Random number between 1-3
// This random number is the index of the array
// Now we have the computer's random choice 
// Now a shit load of if elses to see who wins
// Print the text in rps_area 

let rps_score_area = document.getElementById('rps_score');
let rps_player_score = 0;
let rps_pc_score = 0;

document.getElementById('player_rock').addEventListener("click", function(event) {
    let rps_area = document.getElementById('rps_area');
    let pc_rock = 'Rock';
    let pc_paper = 'Paper';
    let pc_scissors = 'Scissors';
    let pc_choices = [pc_rock, pc_paper, pc_scissors];
    let pc = pc_choices[Math.floor(Math.random() * 3)];

    let result;

    if (pc == 'Rock') { result = 'Draw' } 
        else if (pc == 'Paper') { result = 'Lose' } 
        else { result = 'Win' };
    if (result == 'Draw') { rps_area.textContent = `Computer picks "Rock". It's a draw!`}
        else if (result == 'Lose') { rps_area.textContent = `Computer picks "Paper". You lose!`}
        else { rps_area.textContent = `Computer picks "Scissors". You win!`};

    if (result == 'Win') { rps_player_score++ } else if (result == 'Lose') { rps_pc_score++ };
    rps_score_area.textContent = `The current score is Player: ${rps_player_score} - Computer: ${rps_pc_score}.`
});

document.getElementById('player_paper').addEventListener("click", function(event) {
    let rps_area = document.getElementById('rps_area');
    let pc_rock = 'Rock';
    let pc_paper = 'Paper';
    let pc_scissors = 'Scissors';
    let pc_choices = [pc_rock, pc_paper, pc_scissors];
    let pc = pc_choices[Math.floor(Math.random() * 3)];

    let result;

    if (pc == 'Rock') { result = 'Win' } 
        else if (pc == 'Paper') { result = 'Draw' } 
        else { result = 'Lose' };
    if (result == 'Draw') { rps_area.textContent = `Computer picks "Paper". It's a draw!`}
        else if (result == 'Lose') { rps_area.textContent = `Computer picks "Scissors". You lose!`}
        else { rps_area.textContent = `Computer picks "Rock". You win!`};

    if (result == 'Win') { rps_player_score++ } else if (result == 'Lose') { rps_pc_score++ };
    rps_score_area.textContent = `The current score is Player: ${rps_player_score} - Computer: ${rps_pc_score}.`
});

document.getElementById('player_scissors').addEventListener("click", function(event) {
    let rps_area = document.getElementById('rps_area');
    let pc_rock = 'Rock';
    let pc_paper = 'Paper';
    let pc_scissors = 'Scissors';
    let pc_choices = [pc_rock, pc_paper, pc_scissors];
    let pc = pc_choices[Math.floor(Math.random() * 3)];

    let result;

    if (pc == 'Rock') { result = 'Lose' } 
        else if (pc == 'Paper') { result = 'Win' } 
        else { result = 'Draw' };
    if (result == 'Draw') { rps_area.textContent = `Computer picks "Scissors". It's a draw!`}
        else if (result == 'Lose') { rps_area.textContent = `Computer picks "Rock". You lose!`}
        else { rps_area.textContent = `Computer picks "Paper". You win!`};

    if (result == 'Win') { rps_player_score++ } else if (result == 'Lose') { rps_pc_score++ };
    rps_score_area.textContent = `The current score is Player: ${rps_player_score} - Computer: ${rps_pc_score}.`
});
