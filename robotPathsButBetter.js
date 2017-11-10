let paths = [
	[false, true, false, false, false],
	[false, false, false, true, false],
	[false, false, false, false, false],
	[false, false, true, false, false],
	[false, false, false, false, false]
];

class Board {
	constructor(n){
		this.size = n;
		this.board = this.makeBoard();
	}
	
	makeBoard() {
		let board = [];
		for ( let i = 0 ; i < this.size ; i ++ ) {
			board.push([]);
			for ( let j = 0 ; j < this.size ; j ++ ) {
				board[i].push(false);
			}
		}
		return board;
	} 

	hasBeenVisited(i, j) {
		if ( this.board[i][j] ){
			return true 
		} 
		return false
	} 

	togglePiece(i, j) {
		this.board[i][j] = !this.board[i][j];
	}

}

function robotPaths(n, board, i, j){
	// I: an array of 5x5 elements
	// 0: number of possible paths to the bottom right corner
	// C: can not visit the same squar twice 
	// E: i/j greater and array.length or less than 0

	if(!board) {
		board = new Board(n);
		// i = Math.floor(n / 2);
		// j = Math.floor(n / 2);
		i = 0;
		j = 0;
		

		// // This is to randomize it from the center of the board
		// // also adds random falses so the paths can have to maneuver around the fasle
		// for ( let y = 0 ; y < n ; y ++ ){
		// 	if  (y !== i && y !== j){
		// 		let i_rando = Math.floor(Math.random() * n);
		// 		let j_rando = Math.floor(Math.random() * n);	
		// 		board.togglePiece(i_rando, j_rando);
		// 	}
		// }

		// console.log(board)
	}

	if ( !(i >= 0 && i < n && j >= 0 && j < n ) || board.hasBeenVisited(i, j) ) {
		return 0 //we are out of bounds
	}

	if ( i === n - 1 && j === n - 1 ){
		return 1 //we have reached a path
	}

	board.togglePiece(i, j);

	let result = robotPaths(n, board, i, j + 1) 
	+ robotPaths(n, board, i, j - 1) 
	+ robotPaths(n, board, i + 1, j) 
	+ robotPaths(n, board, i - 1, j);

	board.togglePiece(i, j);
	return result;

};
	

console.log(robotPaths(5))












