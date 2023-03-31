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

//Checking tie with a function called checkTie()
//Instead of for loop we can use every()method to check whether 
//all elements in an array pass a provided test function

function checkTie(){
return state.board.every((square)=> square !== "")
}

////handleClick(e) function is a critical part of the Tic Tac Toe game logic, 
// it handles the core game mechanics of filling squares, 
//checking for wins and ties, updating the score, and switching players.

function handleClick(e){
    // Condition 1: game is over (gameOver === true). 
    if(state.gameOver) return;
    // Get the index of the clicked square from the event target
    const index = e.target.getAttribute("square-index");
    console.log(index);

    // Check if the square is empty

    if (state.board[index] ===''){

        state.board[index] = state.currentPlayer;
        e.target.textContent = state.currentPlayer === 'X' ? state.playerXName :state.playerOName;
        e.target.style.color = 
           state.currentPlayer === 'X' ? state.playerXColor : state.playerOColor;
    
     // If the game is still in progress

     if(!checkWin() && !checkTie()){
      state.currentPlayer = state.currentPlayer === 'X' ? 'O' :'X';
     } else {
        state.gameOver = true;

      if (checkWin()){

        if(state.currentPlayer === 'X'){
          state.scoreX++;
          playerXScore.textContent = state.scoreX;
        } else {

            state.scoreO++
            playerOScore.textContent = state.scoreO;
        }
        alert(`Hooray ${state.currentPlayer === 'X' ? state.playerXName : state.playerOName} wins`)

      } else {

        state.tieCount++
        ties.textContent = state.tieCount;
        alert("It's a tie!");
      }
     }
     
    }
}


function resetBoard(){

  state.board.fill("");
  state.board.currentPlayer = 'X';
  state.gameOver = false;

  squares.forEach(square => {

    square.textContent = ''
    
  });

}

function updatePlayerNames(){
state.playerXName = playerONameInput.value || 'Player X';
state.playerOName = playerONameInput.value || 'Player 0';
}


function updatePlayerColors(){
state.playerXColor = playerXColorInput.value || 'red';
state.playerOColor = playerOColorInput.value || 'blue'

}


restartBtn.addEventListener('click', resetBoard);

squares.forEach((square)=>{

  square.addEventListener('click', handleClick)
});

playerXNameInput.addEventListener('change', updatePlayerNames);
playerONameInput.addEventListener('change', updatePlayerNames);
playerXColorInput.addEventListener('change', updatePlayerColors);
playerOColorInput.addEventListener('change', updatePlayerColors);


