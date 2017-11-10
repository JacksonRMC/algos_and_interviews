 let dictionary = ["GEEKS", "FOR", "QUIZ", "GO"];
 let matrix = [['G','I','Z'],
               ['U','E','K'],
               ['Q','S','E']];

function boggle(boggle) {
	let result = [];

	for(let i = 0 ; i < boggle.length ;i ++ ){
		let maybeWord = '';
		for ( let j = 0 ; j < boggle[i].length ; j ++ ){
		}
	}

	return result
}


// function boggleUtility (boggle, visited, i, j, string) {

// 
	
// }

function prefixChecker (word, dictionary, ){
	for( let i = 0 ; i < dictionary.length ; i ++ ){
		for ( let j = 0 ; j < word.length ; j ++ ){
			if(dictionary[i][j] === word[j] ){
				return true
			}
		}
	}
	return false
}

function isWord(word) {
	for ( let i = 0 ; i < dictionary.length ; i ++ ) {
		if ( dictionary[i] === word ){
			return true
		} 
	}
	return false
}

console.log(boggle(matrix));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//WORD IN GRID

var exist = function(board, word) {
    var hash = {};
    
    for(var i = 0; i < board.length; i++) {
        for(var j = 0; j < board[0].length; j++) {
            if(dfs(board, word, 0, i, j)) {
                return true;
            }
        }
    }
    
    function dfs(board, word, index, i, j) {
        var key = i + ',' + j;
        if(hash[key]) {
            return false;
        }
        
        if(index === word.length) {
            return true;
        }
        
        if(i < 0 || i >= board.length || j < 0 || j >= board[0].length) {

            return false;
        }
        
        var result = false;
        
        if(word[index] === board[i][j]) {
            hash[key] = true;

            result = dfs(board, word, index + 1, i+1, j) 
            || dfs(board, word, index + 1, i-1, j) 
            || dfs(board, word, index + 1, i, j+1) 
            || dfs(board, word, index + 1, i, j-1);
            
            //THIS CHECKS THE 8 DIRECTIONS
            // || dfs(board, word, index + 1, i + 1, j + 1)
            // || dfs(board, word, index + 1, i - 1, j -1)
            // || dfs(board, word, index + 1, i +1, j -1)
            // || dfs(board, word, index + 1, i - 1, j +1);
            
            console.log(hash)

            hash[key] = false;
        	            

        }
        
        return result
    }
    
    return false;
};

console.log(exist(matrix, 'GIZ'));



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




function printX(number) {
  let middle = Math.floor(number / 2);
  let result = new Array(number);
  
  for( let i = 0 ; i < number ; i++ ){
    if( i === middle ) {
      result[i] = 'x';
    } else {
      result[i] = ' ';
    }
    
  };
  
  console.log(result.join(''));
  let counter = middle;
  let other = middle;
  
  while(counter < number && other > 0){
    result[++counter] = 'x';
    result[--other]  = 'x';
    console.log(result.join(''))
  } 
  

  while (counter !== other){
    result[counter--] = ' ';
    result[other++] = ' ';
    console.log(result.join(''))
   } 
}
//printX(21);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Board {
	constructor(size){
		this.size = size;
		this.board = this.makeBoard(size)
	}

	makeBoard(num) {
		let board = [];
		for( let i = 0 ; i < num ; i ++ ) {
			board.push([]);
			for ( let j = 0 ; j < num ; j ++ ) {
				board[i].push(false);
			}
		}
		return board;
	}

	togglePiece(i, j) {
		this.board[i][j] = !this.board[i][j];
	}

	hasBeenVisited(i, j){
		if ( this.board[i][j] ){
			return true;
		}
		return false;
	}
}


function findPaths(n, board, row, column){

		if ( !board ){
			board = new Board(n);
			row = 0;
			// STARTING FROM RADNOM POINT 
			// Math.floor(Math.random() * n) + 1;
			column = 0;

			//SETTING PATHS WITH RANDOM ONSTACLES
			// for ( let i = 0 ; i < n ; i ++ ){
			// 	let rand = Math.floor(Math.random() * 2) + 1;
			// 	let rand2 = Math.floor(Math.random() * 2) + 1;
			// 	if ( ( rand !== row  && rand2 !== column) ){
			// 		board.togglePiece(rand, rand2);
			// 	}
			// }
			console.log(board)
		}

		if ( !(row >= 0 && row < n && column >= 0 && column < n) 
			|| board.hasBeenVisited(row, column) ){
			return 0;
		}

		if ( row === n - 1 && column === n - 1 ){
			return 1;
		}

		board.togglePiece(row, column);

		let result = findPaths(n, board, row, column + 1)
		+ findPaths(n, board, row, column - 1)
		+ findPaths(n, board, row + 1, column) 
		+ findPaths(n, board, row - 1, column);

		board.togglePiece(row, column);

		return result;


}

//console.log(findPaths(3))

