// Given an array of n integers where n > 1, nums,
// return an array output such that output[i] is equal to the
// product of all the elements of nums except nums[i].
//
// Solve it without division and in O(n).
//
// For example, given [1,2,3,4], return [24,12,8,6].
//
// Follow up:
// Could you solve it with constant space complexity?
// (Note: The output array does not count as extra space for the
// purpose of space complexity analysis.)

function exSelf(array) {
  //two for loops and a counter
  // first for loop starting from begining
  // second start from end
  let products = new Array(array.length);
  let counter = 1;
  for ( let i = 0 ; i < array.length ; i ++ ){
    products[i] = counter;
    counter *= array[i];
  }

  //SECERET WHEN DECREMENTING:
  // products[j] *= counter
  // counter *= array[j];

  counter = 1;
  for ( let j = array.length - 1 ; j >= 0 ; j -- ){
    products[j] *= counter
    counter *= array[j];
  }

  return products

};

console.log(exSelf([1,2,2]))
