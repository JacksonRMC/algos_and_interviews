// Given [1,1,1,2,2,3] and k = 2, return [1,2]
class HeapNode {
	constructor(key, value){
		this.key = key;
		this.value = value;
	}
}
class Heap {
	constructor(){
		this.heap = [];
		this.level = 0;
	}

	// insert(key, val){
	// 	let item = new HeapNode(key, val);
	// 	this.heap.push(item);
	// 	let nodeIdx = this.heap.length - 1;

	// 	let parent = Math.floor((nodeIdx) / 2);
		
	// 	while(this.heap[parent] 
	// 		&& this.heap[nodeIdx].value > this.heap[parent].value){
		    
	// 		let temp = this.heap[nodeIdx];
	// 		this.heap[nodeIdx] = this.heap[parent];
	// 		this.heap[parent] = temp;
	// 		// update current node and parent
			
	// 		nodeIdx = parent;
	// 		parent = Math.floor((nodeIdx - 1) / 2)
	// 	};

	// }

	insert(key, value) {
    const newNode = new HeapNode(key, value);
    this.heap.push(newNode);

    let currentNodeIdx = this.heap.length - 1;
    let currentNodeParentIdx = Math.floor(currentNodeIdx / 2);
    while (
      this.heap[currentNodeParentIdx] &&
      newNode.value > this.heap[currentNodeParentIdx].value
    ) {
      const parent = this.heap[currentNodeParentIdx];
      this.heap[currentNodeParentIdx] = newNode;
      this.heap[currentNodeIdx] = parent;
      currentNodeIdx = currentNodeParentIdx;
      currentNodeParentIdx = Math.floor(currentNodeIdx / 2);
    }
  }

	removeHead(){

		let newHead = this.heap.pop();
		this.heap[0] = newHead;
		let currentIndex = 1;
		
		let left = currentIndex * 2;
		let right = (currentIndex * 2) + 1;

		let currentChildIndex = this.heap[right] && this.heap[right] >= this.heap[left] ? right : left;
		while (this.heap[currentChildIndex] 
			&& this.heap[currentIndex].value < this.heap[currentChildIndex].value ){

			let temp = this.heap[currentIndex];
			this.heap[currentIndex] = this.heap[currentChildIndex];
			this.heap[currentChildIndex] = temp;

			currentIndex = currentChildIndex;
			currentChildIndex = currentIndex * 2;
		}

	}
}

function kMostFrequent(array, k) {
	let heap = new Heap();
	let obj = {};	

	for ( let i = 0 ; i < array.length ; i ++ ){
		let curr = array[i];
		if( obj[curr] ){
			obj[curr]++;
		} else {
			obj[curr] = 1;
		}
	}

	for ( key in obj ){
		heap.insert(key, obj[key]);
	}

	return heap.heap
}

let arr = [1,1,1,2,2,3,5,6,7,7,7,7,7,7,7,7,7,7,77,8,8,8,8,8,8,8,9,9,9,9,9]; 
let k = 2;
// console.log(kMostFrequent(arr, k));



///////////////////////////////////////////////////////////////////////////////////////////////

//HEAP SORT

var arrayLength;

function buildHeap(input) {
    arrayLength = input.length;

    for (var i = Math.floor(arrayLength / 2); i >= 0; i -= 1) {
        heapify(input, i);
    }
}

function heapify(input, i) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var largest = i;

    if (left < arrayLength && input[left] > input[largest]) {
        largest = left;
    }

    if (right < arrayLength && input[right] > input[largest]) {
        largest = right;
    }

    if (largest != i) {
        swap(input, i, largest);
        heapify(input, largest);
    }
}

function swap(input, index_A, index_B) {
    var temp = input[index_A];

    input[index_A] = input[index_B];
    input[index_B] = temp;
}

function heapSort(input) {
    buildHeap(input);

    for (var i = input.length - 1; i > 0; i--) {
        swap(input, 0, i);
        arrayLength--;
        heapify(input, 0);
    }
}

var example = [40, 10, 50, 24, 1, 2, 4, -10, 15, 7, 8, 5];
heapSort(example);
// console.log(example); // -10,1,2,4,5,7,8,10,15,24,40,50



// let yoConst = 'popular';
// let constYo = [1,2,3,4,5];
// let fuck = 100000;
// let op = { 'f': 9, 'barr': 73, kitten: 'pineapple'};
// let bool = true;
// const Bro =  function (name){
// 		this.name = 'Jaxson is dope and cool';
// }

// Bro.prototype.method_name = function(first_argument) {
// 	return this.name;	
// };

// constYo.map((x) => x ** 8);
// yoConst;
// op.kitten
// op.linear = 'quantum';

// const im = new Bro('jared')
// Bro.prototype.jew = function() {
// 	return 'oh my';
// };
// constYo.shift();
// constYo.push(9999) * 4
// console.log(constYo)
// console.log(yoConst)
// console.log(im.method_name())
// im.print = 'popoppopo'
// let i = new Bro  ('sdf');
// console.log(constYo.push(9))

// var twoSum = function(nums, target) {
//     let first = 0;
//     let last = nums.length - 1;
//     nums.sort();
//     let mid = Math.floor(last - first / 2) + last;

//     while (first <= last){
//       mid = Math.floor((last - first) / 2) + first;

//       if ( nums[mid] < target/ 2 ){
//       	first = mid; 	
//       } else {
//       	last = mid;
//       }
//       console.log(mid)

//       let num = nums[first] + nums[last];

//       if ( num === target ){
//         return [first, last];
//       } else if ( num < target ){
//         first++; 
//       } else if ( num > target ){
//         last--;   
//       }
 
//   }
//     return [];
// };

// console.log(twoSum([7,3,2,1,5], 12));



var lengthOfLongestSubstring = function(s) {
	if ( s === null || s.length === 0 ){
		return 0;
	}

	let map = {};
	let len = 0
	let maxLength = len;
	let start = 0;

	for ( let i = 0 ; i < s.length ; i++ ){
		let current = s[i];

		if ( map[current] && map[current] >= start ){
			start = map[current]++;
			len = i - start
		}

		if (len > maxLength){
			maxLength = len;
		}

		map[current] = i;
	}
	return maxLength
};

console.log(lengthOfLongestSubstring("bbbbb"))











 

























