// Given two arrays, write a function to compute their intersection.

// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

// Note:
// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.
// Follow up:
// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, 
// and the memory is limited such that you cannot load all elements into the memory at once?


function intersection(nums1, nums2){
	let obj = {};
	let arr1, arr2

	if( nums1.length < nums2.length ){
		arr1 = nums1
		arr2 = nums2
	} else {
		arr1 = nums2 
		arr2 = nums1
	};

	let result = []
	let count = arr1.length;

	for ( let i = 0 ; i < arr1.length ; i ++ ){
		obj[arr1[i]] = obj[arr1[i]] || 0;
		obj[arr1[i]]++
	}

	for ( let j = 0 ; j < arr2.length && count !== 0 ; j ++ ){
		if ( obj[arr2[j]] > 0 ){
			obj[arr2[j]] --;
			count --;
			result.push(arr2[j]);
		}
	}
	return result
};

let nums1 = [1, 2, 2, 1]
let nums2 = [2, 2]
console.log(intersection(nums1, nums2))






