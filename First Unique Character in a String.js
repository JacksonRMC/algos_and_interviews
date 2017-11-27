// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, 
// return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.

function first(string) {
	let object = {};

	for( let i = 0 ; i < string.length ; i ++ ){
		if( object[string[i]] ){
			object[string[i]]++;
		} else {
			object[string[i]] = 1;
		}
	}

	for ( key in object ){
		if( object[key] === 1 ){
			return string.indexOf(key);
		}
	}
}


console.log(first('ooped'))