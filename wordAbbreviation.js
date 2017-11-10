// Write a function to generate the generalized abbreviations of a word.

// Example:
// Given word = "word", return the following list (order does not matter):
// ["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1", "w1r1", "1o2", "2r1", "3d", "w3", "4"]
// Hide Company Tags Google
// Hide Tags

let word = 'apple';

function helper(array, word, position, current, count) {
	if ( position === word.length ){
		if( count > 0 ) {
			current += count;
		}
		array.push(current);
		return array
	}

	helper(array, word, position + 1, current, count + 1);

	current += (count > 0? count : '') + word[position];
	helper(array, word, position + 1, current, 0);
}

function abbreviate(word) {
	let result = [];
	helper(result, word, 0, '', 0);
	return result;
}

console.log(abbreviate(word))



































// function swingIt (result, word, position, current, count) {
// 	if ( position === word.length ){
// 		if ( count > 0 ) {
// 			current += count;
// 		}
// 		result.push(current);
// 		return
// 	}
// 	swingIt(result, word, position + 1, current, count + 1);

// 	current += (count > 0 ? count : '') + word[position];
// 	swingIt(result, word, position + 1, current, 0);
// }

// function abbr (word) {
// 	let result = [];
// 	swingIt(result, word, 0, '', 0);
// 	return result.length;	
// }

// console.log(abbr(word))