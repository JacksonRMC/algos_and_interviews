var strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

// should result in 

// [ ["ate", "eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

const groupIt = function(strs) {
  // initialize a new object
  // object will have key of letters
  // value will be an strs of anagrams that works with key lettering 

  let anagrams = {};
  for ( let i = 0 ; i < strs.length ; i ++ ) {
  	let tempWord = unscrambler(strs[i]);
  	if ( anagrams[tempWord] ) {
  	  anagrams[tempWord].push(strs[i]);
  	} else {
  	  anagrams[tempWord] = [strs[i]];
  	}
  }
  return Object.values(anagrams);

}

function unscrambler(word) {
  return word.split('').sort().join('')
}

console.log(groupIt(strs))