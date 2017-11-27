// Given an array of integers, every element appears twice except for one. Find that single one.

// Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

let array = [1,2,3,1,2,4,3];
let anwser = 4

function singleNumber(nums) {
    var total = 0;
    
    for(var i = 0; i < nums.length; i++){
        var num = nums[i];
        total ^= num;
    }
    
    return total;
}

console.log(singleNumber(array) === anwser);