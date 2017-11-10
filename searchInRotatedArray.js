//FIND THE ROTATED POINT IN A SORTED ARRAY

var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1
    let mid;

    while ( left < right ) {
        mid = Math.floor((left + right) / 2);
        if ( nums[left] < nums[right] ){
            return nums[left]
        }
        
        if ( nums[mid] > nums[right] ){
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return nums[left]
    
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//FIND A POINT IN A SORTED ARRRAY THAT HAS BEEN ROTATED AND CAN HAVE DUPLICATES

var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let mid 
    
    while (left < right ) {
        mid = Math.floor((right - left) / 2) + left;
        if ( nums[left] < nums[right] ) {
            return nums[left]
        }
        if ( nums[left] === nums[mid] && nums[mid] === nums[right] ) {
            left ++;
            right --;
        } else if ( nums[mid] > nums[right] ){
            left = mid + 1
        } else {
            right = mid
        }
    }
    return nums[left]
};





//////////////////////////////////////////////////////////////////////////////////////////////////////////////


//SEARCH FOR TARGET IN ROTATED ARRAY 

const searchRotated = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid;

    while ( left <= right ) {
        mid = Math.floor((right - left) / 2) + left;

        if ( nums[mid] === target ){
            return mid;
        }

        if ( nums[left] <= nums[mid] ) {
            if ( nums[left] <= target && nums[mid] > target ) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if ( nums[mid] < target && nums[right] >= target ) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    return -1;
};

console.log(searchRotated([4,5,6,7,0,1,2], 1));



//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//SORTED FOR TARGET IN ARRAY WITH DUPLICATES

//This case handles rotated arrays with duplicates hence the first part of the iff Statement inside the while loop
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid;

    while (left <= right) {
        mid = Math.floor((right - left) / 2) + left;
        if ( nums[mid] === target ) {
            return true;
        }
        if ( nums[left] === nums[mid] && nums[right] === nums[mid] ){
            // if left right and center are same decrement towards center until they are not
            left ++;
            right --;
        } else if ( nums[left] <= nums[mid] ){
            if ( nums[left] <= target && nums[mid] > target ) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        else {
            if ( nums[mid] < target && nums[right] >= target ) {
                left = mid + 1;
            } else {
                right = mid -1;
            }
        }
    }
    return false;
};

console.log(search([4,5,5,5,5,5,5,5,5,5,5,6,7,0,1,2], 0));



