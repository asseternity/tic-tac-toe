// okay, what is a game of tic-tac-toe? players take turns putting Xs and Os on the board. player1 puts an X, player2 puts an O
// [function1] player objects need to have methods player.place(X/O)
let createPlayer = (function(letter) {
    return function(letter) {
        return {
            letter: letter,
            marks: [],
            place: function(tile) {
                if (controlGameObject.lastMove !== letter && controlGameObject.checkWin(this) == 'game continues') {
                    if (gameboardObject.blocks.includes(tile)) {
                        console.log(`${letter} placed on ${tile}`);
                        let index = gameboardObject.blocks.findIndex(i => i == tile);
                        let placedTile = gameboardObject.blocks.splice(index, 1);
                        this.marks.push(placedTile.join());
                        controlGameObject.lastMove = letter;
                        let marked;
                        switch(tile) {
                            case 'topright':
                                document.querySelector('#square3').setAttribute('style', 'font-size: 500%; text-align:center;')
                                document.querySelector('#square3').textContent = `${letter}`;
                                break;
                            case 'topcenter':
                                document.querySelector('#square2').setAttribute('style', 'font-size: 500%; text-align:center;')
                                document.querySelector('#square2').textContent = `${letter}`;
                                break;
                            case 'topleft':
                                document.querySelector('#square1').setAttribute('style', 'font-size: 500%; text-align:center;')
                                document.querySelector('#square1').textContent = `${letter}`;
                                break;
                            case 'midright':
                                document.querySelector('#square6').setAttribute('style', 'font-size: 500%; text-align:center;')
                                document.querySelector('#square6').textContent = `${letter}`;
                                break;
                            case 'midcenter':
                                document.querySelector('#square5').setAttribute('style', 'font-size: 500%; text-align:center;')
                                document.querySelector('#square5').textContent = `${letter}`;
                                break;
                            case 'midleft':
                                document.querySelector('#square4').setAttribute('style', 'font-size: 500%; text-align:center;')
                                document.querySelector('#square4').textContent = `${letter}`;
                                break;
                            case 'botright':
                                document.querySelector('#square9').setAttribute('style', 'font-size: 500%; text-align:center;')
                                document.querySelector('#square9').textContent = `${letter}`;
                                break;
                            case 'botcenter':
                                document.querySelector('#square8').setAttribute('style', 'font-size: 500%; text-align:center;')
                                document.querySelector('#square8').textContent = `${letter}`;
                                break;
                            case 'botleft':
                                document.querySelector('#square7').setAttribute('style', 'font-size: 500%; text-align:center;')
                                document.querySelector('#square7').textContent = `${letter}`;
                                break;                        
                        }
                        console.log(controlGameObject.checkWin(this));
                        if (controlGameObject.checkWin(this) == 'game continues') {
                            computerMove();
                        }
                    } else {
                        console.log ('ERROR: place provide an acceptable tile.');
                    }
                } else {
                    console.log(`ERROR: it is not ${this.letter}'s turn.`)
                }
            }
        }
    }
})();
let player1 = createPlayer('X');
let player2 = createPlayer('O');
// okay, good. this method also needs to check who put the mark last.
// [function2] game object needs to have a property game.lastMove = 'X' or 'O'. those ones can't use player.place
let controlGameObject = (function() {
    return {
        lastMove: '',
        checkWin: function(player) {
            let gameStatus;
            if ((player.marks.includes('topright') && player.marks.includes('topcenter') && player.marks.includes('topleft')) ||
            (player.marks.includes('midright') && player.marks.includes('midcenter') && player.marks.includes('midleft')) ||
            (player.marks.includes('botright') && player.marks.includes('botcenter') && player.marks.includes('botleft')) ||
            (player.marks.includes('topright') && player.marks.includes('midright') && player.marks.includes('botright')) ||
            (player.marks.includes('topcenter') && player.marks.includes('midcenter') && player.marks.includes('botcenter')) ||
            (player.marks.includes('topleft') && player.marks.includes('midleft') && player.marks.includes('botleft')) ||
            (player.marks.includes('topright') && player.marks.includes('midcenter') && player.marks.includes('botleft')) ||
            (player.marks.includes('botright') && player.marks.includes('midcenter') && player.marks.includes('topleft'))) {
                return gameStatus = `${player.letter} wins`;
            } else if (gameboardObject.blocks.length == 0) {
                return gameStatus = 'draw';
            } else {
                return gameStatus = 'game continues';
            }
        }
    }
})();
// okay. but how do I track what blocks have what shit on them? maybe storing the blocks in an array is a shit move
// maybe I should change the gameboard and store each block as its own key? like gameboard.topleft
// nah, that would make checking too forcecod-y
// so what I should do instead is have an array of X's and O's inside the player objects. 
// [function3] player.marks = [] array that will store where the X's and O's are. 
// [function4] player.place(mark) adds one mark to the array provided that the mark can be find() in gameboard.blocks 
let gameboardObject = (function() {
    return {
        blocks: ['topright', 'topleft', 'topcenter', 'midright', 'midleft', 'midcenter', 'botright', 'botleft', 'botcenter']
    }
})();
// [function5] player.place actually steals that thing from the gameboard.blocks array
// [function6] player.place(mark) calls game.lastMove before doing its own shit. if game.lastMove returns mark, it returns an eerror
// [function7] player.place, after it's done, calls game.checkWin
// game.checkWin(playerWhoseMoveItWas) should check (1) if player.marks.includes every fucking combo 
// game.checkWin(playerWhoseMoveItWas) should check (2) if gameboard.blocks == []
// [function8] implement

// UI
let container = document.querySelector('.tto_container');
let board = document.createElement('div');
board.setAttribute('style', 'display:grid;grid-template-columns:150px 150px 150px;border-collapse:collapse;');
container.appendChild(board);

let startButton = document.createElement('button');
container.appendChild(startButton);
startButton.textContent = 'Start Tic-Tac-Toe!'
startButton.addEventListener('click', () => {
    container.removeChild(startButton);
    for (let i = 1; i <= 9; i++) {
        createSquare(i);
    }
});

function createSquare(squareID) {
    let square = document.createElement('div');
    square.setAttribute('style','border:1px solid black;padding:10px;min-height:100px;');
    square.setAttribute('id', `square${squareID}`);
    square.addEventListener('click', (event) => {
        switch(event.target.id) {
            case 'square1':
                player1.place('topleft');
                break;
            case 'square2':
                player1.place('topcenter');
                break;
            case 'square3':
                player1.place('topright');
                break;
            case 'square4':
                player1.place('midleft');
                break;
            case 'square5':
                player1.place('midcenter');
                break;
            case 'square6':
                player1.place('midright');
                break;
            case 'square7':
                player1.place('botleft');
                break;
            case 'square8':
                player1.place('botcenter');
                break;
            case 'square9':
                player1.place('botright');
                break;
            }
    })
    board.appendChild(square);
}

function computerMove() {
        let random = Math.floor(Math.random() * gameboardObject.blocks.length);
        randomSquare = gameboardObject.blocks[random];
        player2.place(randomSquare);
}