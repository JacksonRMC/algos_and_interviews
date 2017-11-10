var findSecondMinimumValue = function(root) {
    if ( root === null || root.left === null && root.right === null) return -1;
    
    let left = root.left.val; 
    let right = root.right.val;
    
    if ( root.left.val === root.val ){
        left = findSecondMinimumValue(root.left);
    }
    if ( root.right.val === root.val ) {
        right = findSecondMinimumValue(root.right);
    }
    
    if ( left !== -1 &&  right !== -1 ) {
        return Math.min(left, right);
    } else if ( left !== -1) {
        return left 
    } else {
        return right
    }
    
};