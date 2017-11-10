/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

 let array = [
      [1,2,3,4],
      [5,6,7,8],
      [9,10,11,12],
      [13,14,15,16]
    ];

function spiral (array) {
	let result = [];
	let startRow = 0;
	let rowEnd = array.length - 1;
	let startCloumn = 0;
	let columnEnd = array[0].length - 1;

	while ( startRow <= rowEnd && startCloumn <= columnEnd ) {
	
		// one for statement to increase the rows 
		for ( let i = startCloumn ; i <= columnEnd ; i ++ ) {
			result.push(array[startRow][i]);
		}
		startRow ++;

		// for increasisng columns
		for ( let j = startRow ; j <= rowEnd ; j ++ ) {
			result.push(array[j][columnEnd]);
		}
		columnEnd--;

		// if() for turning into the rows
		if( startRow <= rowEnd ){
			for ( let k = columnEnd ; k >= startCloumn ; k -- ){
				result.push(array[rowEnd][k])
			}
			rowEnd --;
		}
		
		if ( startCloumn <= columnEnd ){
			for( let y = rowEnd ; y >= startRow ; y --) {
				console.log(array[y][startCloumn])
				result.push(array[y][startCloumn]);
			}
			startCloumn ++;
		}
			// when it reaches bottom of column turn in
			// for loop to decrement throw coloumns 
			// to return each valu ein a row

		//if() for turning into the columns
			// we have reached the end of a row and now need to 
			// decrement columns and move back up the matrix
	}
	return result
};

console.log(spiral(array))







