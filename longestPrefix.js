// Given a array of n strings, find the longest common prefix among all strings present in the array.

// Input:
// The first line of the input contains an integer T which denotes the number of test cases to follow. Each test case contains an integer n. Next line has space separated n strings. 

// Output:
// Print the longest common prefix as a string in the given array. If no such prefix exists print "-1"(without quotes).

// Constraints:
// 1<=T<=200
// 1<=n<=100
// 1<=|S|<=100

// Example:
// Input:
// 2
// 4
// geeksforgeeks geeks geek geezer
// 3
// apple ape april

// Output:
// gee
// ap


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Set 1 WORD BY WORD MATCHING 

// TIME O(N M)
// Space O(M)

let strings = ["apple", "ape", "april"];
let string2 = ["geeksforgeeks","geeks", "geek", "geezer"];

function matchingPrefix(str1, str2){

    let result = '';
    for ( let i = 0 ; i < str1.length ; i ++ ){
        if ( str1[i] === str2[i] ){
            result += str1[i];
        } else {
            return result
        }
    }
    return result

};

function prefixes(array){
    let longest = array[0];
    for ( let i = 1 ; i < array.length ; i ++ ){
        let newPrefix = matchingPrefix(array[i - 1], array[i]);
        if ( newPrefix.length < longest.length ){
            longest = newPrefix;
        }
    }
    return longest;
};

// console.log(prefixes(strings));

// console.log(prefixes(string2));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TIME O(N M)
// Space O(M)

// STEP 2: this step is letter by letter
function letterByLetter (arr) { 
  let prefix = '';
  for ( let i = 0 ; i < arr[0].length ; i ++ ){ //this is the word themselves checking for letters
    let temp = prefix || arr[0][i];
    for ( let j = 0 ; j < arr.length ; j ++ ) {
      let common = true;
      if ( arr[i][j] === temp[i] ) {
      	prefix += temp;
      } else {
      	return prefix;
      }
    }
  }
};

let string = ["apple", "ape", "april"];
let stringz = ["geeksforgeeks","geeks", "geek", "geezer"];

// console.log('letter by letter STEP 2: ', prefixes(string));
// console.log('letter by letter STEP 2: ', prefixes(stringz));



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// STEP: 3 Divide and Conquer

// TIME O(N M)
// Space O(M Log N)

  let test = function(str1, str2) {
    let pre = '';
    for( let i = 0 ; i < str1.length ; i ++ ) {
      if ( str1[i] === str2[i] ) {
      	pre += str1[i];
      } else {
      	return pre;
      }
    }
    return pre
  };

function divideConquer (arr, low, high) {
  if ( low === high ) return arr[low]

  if ( high > low ) {
    let mid = Math.floor((high - low) / 2) + low;
    let string = divideConquer(arr, low, mid);
    let hiString = divideConquer(arr, mid + 1, high);
    return test(string, hiString);
  } 
};


let str1 = ["apple", "ape", "april"];
let str2 = ["geeksforgeeks","geeks", "geek", "geezer"];

// console.log('dive and conquer STEP 3: ', divideConquer(str2, 0, str2.length - 1));
// console.log('dive and conquer STEP 3: ',  divideConquer(str1, 0, str1.length - 1));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// STEP 4 BINARY SEARCH

 // O(NM log M)
 // Space o(N) Where N is length ot the largest string among all strings

// Find the string having minimum length
// take the first string and do a binary search on the characters from index 0 - word.length - 1 
// check whether all characters are present in the left half is present at the corresponding indicies (low to mid)
	// if prefix up to mid is present append it onto prefix 
	// then we look at the next half and repeat the process
//if all cahracters are not present in the first half we repeat the process on mid - low elements

function shortest (array) {
  let shortest = array[0];
  for( let i = 0 ; i < array.length ; i ++ ) {
  	if(array[i].length < shortest.length) {
  		shortest = array[i];
  	}
  }
  return shortest;
};

function prefixTruth (arr, shortestString, low, high) {
	for ( let i = 0 ; i < arr.length ; i ++ ){
		for ( let j = low ; j < high ; j ++ ){
			if ( arr[i][j] !== shortestString[j] ){
				return false
			}
		}
	}
	return true;
}


function binary (arr) {
	let short = shortest(arr);
	let prefix = '';
	let low = 0;
	let high = short.length;
	let mid;

	while ( low <= high ) {
		mid = Math.floor((high - low) / 2) + low;
		
		let match = prefixTruth(arr, short, low, high)

		if ( match ) {
			prefix += short.slice(low, mid + 1);
			low = mid + 1
		} else {
			high = mid;
		}

	}
	return prefix;
};

let stringSearch = ["apple", "ape", "april"];
let stringSearch2 = ["geeksforgeeks","geeks", "geek", "geezer"];

// console.log('binary search prefix STEP 4: ', binary(stringSearch2));
// console.log('binary search prefix STEP 4: ', binary(stringSearch));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// STEP 5 TRIE SEARCH 

// Inserting takes O(MN)
// then to wlak it = O(M)

// Space O(26*M*N) ~ O(MN)

// insert all words one by one, and when one has more than one child or is exhausted

class Trie {
	constructor(letter){
		this.root = new TrieNode(letter);
	}

	insert (word) {
    var tree = this.root;
    var i, curr;
    
    for(i = 1; i < word.length; i++) {
        curr = word[i];
        if(!tree.links[curr]) {
            tree.links[curr] = new TrieNode(curr);
        }
        tree = tree.links[curr];
    }
    
    tree.isEnd = true;
	}
	
	searchLongestPrefix(word) {
		let temp = this.root;
        let prefix = '';

        for ( let i = 0 ; i < word.length - 1; i ++ ) {
        	let curLetter = word[i];
        	let  next = word[i + 1];
        		
        	if ( Object.keys(temp.links).length === 1 ){
        		prefix += curLetter
        	    temp = temp.links[next];
        	} else {
        		prefix += curLetter;
        		return prefix
        	}
        }
        return prefix;
    }
}



class TrieNode {
	constructor(key){
		this.key = key;
		this.isEnd = false;
		this.links = {}
	}
}


function longestCommonPrefix(stringArray) {
    if (stringArray === null || stringArray.length === 0) return "";  
    if (stringArray.length === 1) return stringArray[0]
    
    
    let first = stringArray[0];
    let trie = new Trie(first[0]); 
   
    for (let i = 0; i < stringArray.length ; i++) {
        trie.insert(stringArray[i]);
    }

    return trie.searchLongestPrefix(first);
}


///////////// other methods need to implement onto TRIE 

	// search (word) {
 //    var tree = this.root;
    
 //    for(var i = 0; i < word.length; i++) {
 //        var curr = word[i];
        
 //        if(!tree.links[curr]) {
 //            return false;
 //        }
        
 //        tree = tree.links[curr];
 //    }
    
 //    return tree.isEnd;
	// }

	// startsWith (prefix) {
 //    var tree = this.root;
    
 //    for(var i = 0; i < prefix.length; i++) {
 //        var curr = prefix[i];
        
 //        if(!tree.links[curr]) {
 //            return false;
 //        }
        
 //        tree = tree.links[curr];
 //    }
    
 //    return true;    
	// }


let stringSe = ["applebees", "apple", "applril"];


// console.log('TRIE search prefix STEP 5: ', longestCommonPrefix(stringSearch2));
// console.log('TRIE search prefix STEP 5: ', longestCommonPrefix(stringSe));



