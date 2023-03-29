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

//Creating checkWin function to check the winning condition

function checkWin() {

    const winConditions = [
  
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      for (let condition of winConditions){

        // using destructuring assignment.
         const [a, b, c] = condition;

         if(state.board[a] && 
            state.board[a] === state.board[b] &&
            state.board[a] === state.board[c]){

           return true;

            }

      }

 return false;

}

