//Initialize variables for DOM elements, game state, and scores.

// const squares = document.querySelectorAll('.square');
// const playerX = document.getElementById('playerXScore');
// const playerO = document.getElementById('playerOScore');
// const ties = document.getElementById('ties');
// const restartBtn = document.querySelector('.restart');

//Initially, the board array is filled with empty strings (""), which indicates that all squares on the game board are 
//empty (no player has placed their symbol in that square yet).
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameOver = false;
//This variable keeps track of Player X's score, which is the number of times Player X has won the game.
let scoreX = 0;

//This variable keeps track of Player O's score, which is the number of times Player O has won the game.
let scoreO = 0;
let tieCount = 0;

//Define a function checkWin() to check if there's a winner
//containing all possible winning combinations in a tic-tac-toe game
//There are 8 possible ways to win in tic-tac-toe: 
//3 horizontal lines, 3 vertical lines, and 2 diagonal lines.

function checkWin(){
  
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
  if (board[a] && board[a] === board[b] && board[a] === board[c]){
   return true;
   } 
  }
  return false;
}





