//Grabbing DOM elements

const squares = document.querySelectorAll('.square');
const playerXScore = document.getElementById('playerXScore');
const playerOScore = document.getElementById('playerOScore');
const ties = document.getElementById('ties');
const restartBtn = document.querySelector('.restart');
const playerXNameInput = document.getElementById('playerXName');
const playerONameInput = document.getElementById('playerOName');
const playerXColorInput = document.getElementById('playerXColor');
const playerOColorInput = document.getElementById('playerOColor');


//Creating an object & Initialize variables for game state, and scores 

let state = {

    board: ['', '', '', '', '', '', '', '', ''],
    currentPlayer: 'X',
    gameOver: false,
    scoreX: 0,
    scoreO: 0,
    tieCount: 0,
    playerXName: 'Player X',
    playerOName: 'Player O',
    playerXColor: 'red',
    playerOColor: 'blue',

}