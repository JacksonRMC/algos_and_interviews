// Given a non-empty 2D array grid of 0's and 1's, 
// an island is a group of 1's (representing land) connected 4-directionally 
// (horizontal or vertical.) You may assume all four edges of the grid 
// are surrounded by water.

// Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

// Example 1:
// [[0,0,1,0,0,0,0,1,0,0,0,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,1,1,0,1,0,0,0,0,0,0,0,0],
//  [0,1,0,0,1,1,0,0,1,0,1,0,0],
//  [0,1,0,0,1,1,0,0,1,1,1,0,0],
//  [0,0,0,0,0,0,0,0,0,0,1,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,0,0,0,0,0,0,1,1,0,0,0,0]]

// Given the above grid, return 6. Note the answer is not 11, 
// because the island must be connected 4-directionally.
// Example 2:
// [[0,0,0,0,0,0,0,0]]
// Given the above grid, return 0.
// Note: The length of each dimension in the given grid does not exceed 50.


let ocean = [[0,0,1,0,0,0,0,1,0,0,0,0,0],
			 [0,0,0,0,0,0,0,1,1,1,0,0,0],
			 [0,1,1,0,1,0,0,0,0,0,0,0,0],
			 [0,1,0,0,1,1,0,0,1,0,1,0,0],
			 [0,1,0,0,1,1,0,0,1,1,1,0,0],
			 [0,0,0,0,0,0,0,0,0,0,1,0,0],
			 [0,0,0,0,0,0,0,1,1,1,0,0,0],
			 [0,0,0,0,0,0,0,1,1,0,0,0,0]];

let ocean1 = [[0,0,1,0,0,0,0,1,0,0,0,0,0],
			 [0,0,0,0,0,0,0,1,1,1,0,0,0],
			 [0,1,1,0,1,0,0,0,0,0,0,0,0],
			 [0,1,0,0,1,1,0,0,1,0,1,0,0],
			 [0,1,0,0,1,1,0,0,1,0,1,0,0],
			 [0,0,0,0,0,0,0,0,0,0,0,0,0],
			 [0,0,0,0,0,0,0,1,1,1,0,0,0],
			 [0,0,0,0,0,0,0,1,1,0,0,0,0]];

let ocean2 = [[1,0,0,1]
			  [0,1,0,0]];

function largestIsland(matrix) {
	let size = 0;
	let row = matrix.length;
	let result = 0;


	function findLargest (array, row, column) {

		if ( row < 0 || column < 0 
			|| row >= array.length || column >= array[row].length) {
			return 0;
		}
		if ( array[row][column] === 0){
			return 0
		}

		size += array[row][column];

		array[row][column] = 0;

		let direction = [[1,0], [0,1], [-1,0], [0,-1]];
		for( let j = 0 ; j < direction.length ; j ++ ) {
			findLargest(array, row + direction[j][0], column + direction[j][1])
		}
	}


	for ( let i = 0 ; i < row ; i ++ ){
		for ( let column = 0 ; column < matrix[i].length ; column ++ ){
			if ( matrix[i][column] === 1){

				let bigMaybe = 0;
				findLargest(matrix, i, column);
				if ( size > bigMaybe ) {
					bigMaybe = size;
					size = 0;
					if ( bigMaybe > result){
						result = bigMaybe;
					}
				}
			}	
			
		}
	}

	return result;
}

console.log(largestIsland(ocean));
console.log(largestIsland(ocean1));


///////////////////////////////////////////////////////////////////////////////////////////

//DEPTH FIRST WITH 8 POSSIBLE DIRECTIONS INSTEAD OF JUST 4


//TRICK HERE IS TWO FOR LOOPS inside the recursive call: 
	// 	for ( let i = row - 1 ; i <= row + 1 ; i ++ ){
	// 	for ( let j = column - 1 ; j <= column + 1 ; j ++ ) {



// function getRegionSize(matrix, row, column) {
// 	// so long as cell we are on is 1 and there is 1 connected to it
// 	if ( row < 0 || column < 0 || row >= matrix.length || column >= matrix[row].length ) {
// 		return 0;
// 	}
// 	if ( matrix[row][column] === 0 ) {
// 		return 0;
// 	}
// 	// we increase count
// 	// Check surrounding cells
// 	matrix[row][column] = 0; // this will set an infinite loop if not present
// 	let size = 1;
// 	for ( let i = row - 1 ; i <= row + 1 ; i ++ ){
// 		for ( let j = column - 1 ; j <= column + 1 ; j ++ ) {
			
// 			if ( i !== row || j !== column ){
// 				size += getRegionSize(matrix, i, j);
// 			}
		
// 		}
// 	}
// 	return size;
// 	// return 0 for base cases or size 
// };


// function largestIsland(matrix) {
// 	// we will keep track of biggest so far
// 	let largest = 0;
// 	// go through each cell
// 	for ( let row = 0 ; row < matrix.length ; row ++ ){
// 		for ( let column = 0 ; column < matrix[row].length ; column ++ ){
// 			if ( matrix[row][column] === 1 ) {
// 				let tempMax = getRegionSize(matrix, row, column);
// 				if ( tempMax > largest ) {
// 					largest = tempMax;
// 				}
// 			}
// 		}
// 	}

// 	return largest;
// 	// using two for loops
// 		// if we see a one send it through the region 	
// 		// size function 
// 			// update largest if neccessary
// };
























