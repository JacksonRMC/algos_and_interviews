// Related to question Excel Sheet Column Title

// Given a column title as appear in an Excel sheet, return its corresponding column number.

// For example:

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28 

function titleToNumber(string) {
	let base = 26;
	let len = string.length;
	let total = 0;

	for ( let i = 0 ; i < len ; i ++ ){
		let power = len - i - 1;
		let num = getNumber(string[i]);

		total += Math.pow(base, power) * num;
	}
	return total;
}

function getNumber(letter){
	let firstCode = 'A'.charCodeAt(0);
	let targetLetter = letter.charCodeAt(0);

	return targetLetter - firstCode + 1;
}

console.log(titleToNumber('AB'));