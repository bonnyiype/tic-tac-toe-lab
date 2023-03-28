//Initialize variables for DOM elements, game state, and scores.

const squares = document.querySelectorAll('.square');
const playerX = document.getElementById('playerXScore');
const playerO = document.getElementById('playerOScore');
const ties = document.getElementById('ties');
const restartBtn = document.querySelector('.restart');

//Initially, the board array is filled with empty strings (""), which indicates that all squares on the game board are 
//empty (no player has placed their symbol in that square yet).
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameOver = false;
//This variable keeps track of Player X's score, which is the number of times Player X has won the game.
let scoreX = 0;

//This variable keeps track of Player O's score, which is the number of times Player O has won the game.
let scoreO = 0;

// Keeps track of tie score
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


//Checking tie with a function called checkTie()
//Instead of for loop we can use every()method to check whether all elements in an array pass a provided test function

function checkTie(){
return board.every((square) => square !== "")

}

//handleClick(e) function is a critical part of the Tic Tac Toe game logic, 
// it handles the core game mechanics of filling squares, 
//checking for wins and ties, updating the score, and switching players.

function handleClick(e) {
  // Condition 1: game is over (gameOver === true). 
  if (gameOver) return; // Player should NOT be able to make any changes

  // Get the index of the clicked square from the event target
  const index = e.target.getAttribute("square-index");
  console.log(index)

  // Check if the square is empty
  if (board[index] === "") {
    // Fill the square with the current player's symbol
    board[index] = currentPlayer;
    e.target.textContent = currentPlayer;

    // If the game is still in progress
    if (!checkWin() && !checkTie()) {
      // Switch to the other player's turn
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    } else {
      // If the game has ended
      gameOver = true;

      if (checkWin()) {
        // If the player has won, update the score and display an alert message
        if (currentPlayer === "X") {
          scoreX++;
          playerXScore.textContent = scoreX;
        } else {
          scoreO++;
          playerOScore.textContent = scoreO;
        }
        alert(`Hooray, Player ${currentPlayer} wins!`);
      } else {
        // If the game has ended in a tie, update the tie count and display an alert message
        tieCount++;
        ties.textContent = tieCount;
        alert("It's a tie!");
      }
    }
  }
}

  
//function resetBoard() to reset the game board:
//Reset the board array, currentPlayer, and gameOver state.
function resetBoard (){

  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameOver = false;
  //Loop through all the squares and clear their textContent
  squares.forEach((square)=>{

    square.textContent = "";

  })

}

//Add an event listener to the restart button to call the resetBoard() function when the button is clicked.
restartBtn.addEventListener('click', resetBoard);

//Add an event listener to each square to call the handleClick() function when a square is clicked.
squares.forEach((square) => {

  square.addEventListener('click', handleClick);
})





