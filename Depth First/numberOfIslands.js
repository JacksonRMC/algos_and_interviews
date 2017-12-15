// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.
// An island is surrounded by water and is formed by connecting adjacent
// lands horizontally or vertically.
// You may assume all four edges of the grid are all surrounded by water.

let ocean = [
				[1,1,1,1,0],
			  [1,1,0,1,0],
			  [1,1,0,0,0],
  			[0,0,0,0,0]];
// Anwser = 1


let ocean1 = [
				[1,1,0,0,0,1,1,1],
			  [1,1,0,0,0,0,0,0],
			  [0,0,1,0,0,0,1,0],
			  [0,0,0,1,1,0,1,0],
			  [0,0,0,1,1,0,1,0],
			  [0,0,0,1,1,0,1,0],
				[0,0,0,1,1,0,1,0]]
// Anwser = 5;

// function numIslands(matrix){
// 	// if we are surrounded by 0 or undefined we are on an island
// 	// 1 = land mass
// 	let islands = 0;
// 	let row = matrix.length;
//
// 	// if [[1,0], [0,1], [-1,0], [0,-1]]
// 	// start with 2 for loops row / columns
//
// 	function test(array, row, column){
//
// 		if ( row < 0 || column < 0
// 			 array[row][column] === 0
// 			 || typeof array[row][column] === 'undefined'){
//
// 			//we have reached an edge this is water and therefore a border
// 		}
//
// 	}
//
// 	for ( let i = 0 ; i < row ; i ++ ) {
// 		for ( let column = 0 ; column < matrix[i].length ; i ++ ){
//
// 		}
// 	}
//
// };

// var numIslands = function(grid) {
// 	let row = grid.length;
// 	let column = grid[0].length;
// 	let count = 0;
// 	if (row === 0) return 0
//
// 	function isLand(array, r, c) {
// 		if ( r < 0 || c < 0 || r >= row || c >= column
// 			|| array[r][c] !== 1 ){
// 			return
// 		}
//
// 		array[r][c] = 0; //THIS IS THE KEYYYY!!!!!!
//
// 		let direct = [[1, 0], [0, 1], [-1, 0], [0, -1]];
// 		for ( let k = 0 ; k < direct.length ; k ++){
// 			isLand(array, (r + direct[k][0]), (c + direct[k][1]));
// 		}
// 	}
//
// 	for( let i = 0 ; i < row ; i ++ ) {
// 		for (let j = 0 ; j < grid[i].length ; j ++ ){
// 			if ( grid[i][j] === 1 ){
// 				isLand(grid, i, j);
// 				count++;
// 			}
// 		}
// 	}
// 	return count;
// };

function numIslands(array){
	let counter = 0;

	function test(array, r, c){
			if ( r < 0 || c < 0 || r >= array.length || c >= array.length
				|| array[r][c] !== 1 ){
				return
			}

			array[r][c] = 0;

			let direction = [[1,0], [0,1], [-1,0], [0, -1]];
			for( let i = 0 ; i < direction.length ; i ++ ){
				test(array, (r + direction[i][0]), (c + direction[i][1]));
			}
	}

	for( let y = 0 ; y < array.length ; y ++ ){
		for (let j = 0 ; j < array.length ; j ++){
			if( array[y][j] === 1 ){
				test(array, y, j);
				counter++
			}
		}
	}
	return counter
};
console.log(numIslands(ocean1));

console.log(numIslands(ocean));
