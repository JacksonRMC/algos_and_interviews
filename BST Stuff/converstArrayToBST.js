// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

// function BSTgenerate(array) {
// 	return sortedBST(array, 0, array.length - 1);
// };

// function sortedBST(nums, start, end){
// 	if( start > end){
// 		return null;
// 	}

// 	let middle = start + (Math.floor(end - start)/ 2)
// 	let midVal = nums[middle];

// 	let node = new TreeNode(midVal);
// 	node.left = sortedBST(nums, start, middle-1);
// 	node.right = sortedBST(nums, middle + 1, end);
// 	return node;
// };

///////////////////////////////////////////////////////////////////////////////////////////////

//This one Works!!!!!!!!!
var sortedArrayToBST = function(nums) {
    return generate(nums,0,nums.length-1);
};

var generate = function(nums, start, end){
    
    if(start > end){
        return null;
    }
    var midIndex = start + parseInt((end - start)/2);
    var midVal = nums[midIndex];
    
    var node = new TreeNode(midVal);
    node.left = generate(nums, start, midIndex-1);
    node.right = generate(nums, midIndex+1, end);
    
    return node;
}