// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. 
// You may complete as many transactions as you like 
// (ie, buy one and sell one share of the stock multiple times). 
// However, you may not engage in multiple transactions at the same time 
// (ie, you must sell the stock before you buy again).

let array = [7,2,3,6,8,2,1];

function buySell(array) {
	let min = array[0];
	let maxPrice = array[1] - min;

	for ( let i = 1 ; i < array.length ; i ++ ){
		let current = array[i];
		let trade = current - min;

		if ( trade > maxPrice ){
			maxPrice = trade;
		}

		if ( current < min ) {
			min = current;
		}

	}

	return maxPrice;
}

console.log(buySell([7, 9, 5, 6, 3, 2]))