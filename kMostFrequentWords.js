//let words = Welcome to the world of Geeks 
// This portal has been created to provide well written well thought and well explained 
// solutions for selected questions If you like Geeks for Geeks and would like to contribute 
// here is your chance You can write article and mail your article to contribute at 
// geeksforgeeks org See your article appearing on the Geeks for Geeks main page and help 
// thousands of other Geeks

let words = 'Welcome to the world of Geeks This portal has been created to provide well written well thought and well explained solutions for selected questions If you like Geeks for Geeks and would like to contribute here is your chance You can write article and mail your article to contribute at geeksforgeeks org See your article appearing on the Geeks for Geeks main page and helpthousands of other Geeks'

// first we will need to build a hash map, then inside the hashmap we will have tuples
// these will indicate the word and frequency of
// we will then use a heap to get the most frquent word

function getMostFrequent (string) {
	let wordArray = string.split(' ');
	let wordCount = {};
	let mostFrequent ;

	for ( let i = 0 ; i < wordArray.length ; i ++ ) {
		let current = wordArray[i];

		if ( !mostFrequent ) {
			let obj1 = {};
			wordCount[current] = 1;
			obj1[current] = 1;
			mostFrequent = obj1;

		} else if ( wordCount[current] ) {
			
			wordCount[current]++;

			if ( wordCount[current] > Object.values(mostFrequent)[0]) {
				let obj = {};
				obj[current] = wordCount[current];
				mostFrequent = obj;
			}

		} else {
			wordCount[current] = 1;
		}
	}
	return mostFrequent;
}

console.log(getMostFrequent(words));






