	let array =[2, 3, 10, 2, 4, 8, 1] // 8

let array2 = [7, 9, 5, 6, 3, 2] // 2

let array3 = [9,8,7,6,5,4,3,2] // -1



function large(a) {
	if ( a.length < 2 ) return 'more stocks needed';

	let minPrice = a[0];
	let maxPrice = a[1] - a[0];

	for ( let i = 1 ; i < a.length ; i ++ ) {
		let currentPrice = a[i];
		let potential = currentPrice - minPrice;

		if ( potential > maxPrice ) {
			maxPrice = potential;
		}

		if ( currentPrice < minPrice ) {
			minPrice = currentPrice;
		}
	}

	return maxPrice;
}


console.log(large(array))

console.log(large(array2))

console.log(large(array3))