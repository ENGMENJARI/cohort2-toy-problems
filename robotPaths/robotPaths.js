/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  Be systematic with your approach - make a clear plan before you start writing code.
 *
 *  Extra credit: Make your solution work for a grid of any size.
 *
 */

// A Board class will be useful. You can add extra methods to it.

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  }
  return board;
};

//You can create a board size 5 like this:
//var myBoard = makeBoard(5);
//The answer for a board size 5 is 8512 unique paths

var robotPaths = function(myBoard) {
  var myBoard = makeBoard(5);
  var paths=0;
  var findPaths=function(i,j){
    if(i===4 && j===4){
      paths++
      return;
    }
    if (i < 0 || i >= 5 || j < 0 || j >= 5) {
      return;
    }
    if(myBoard.hasBeenVisited(i,j)){
      return;

    }else{
      myBoard.togglePiece(i,j)

      findPaths(i, j + 1);
          // go wright
      findPaths(i + 1, j);
        // go down
      findPaths(i, j - 1);
           // go left
      findPaths(i - 1, j);
          // go up
      myBoard.togglePiece(i, j);
   // toggle the piece back
    }
    
  }
  findPaths(0,0)
  return paths
}

      


















