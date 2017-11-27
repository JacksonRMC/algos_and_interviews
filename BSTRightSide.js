// Given a binary tree, imagine yourself standing on the right side of it, 
// return the values of the nodes you can see ordered from top to bottom.

// For example:
// Given the following binary tree,

function BSTRight(root) {
    var result = [];
    
    if(root === null) {
        return result;
    }
    //Possible to make a recursive solution??djfskdj
    queue = [];
    queue.push(root);
    
    while(queue.length > 0) {
        var len = queue.length;
        
        for(var i = 0; i < len; i++) {
            var node = queue.shift();
            
            if(node.left) {
                queue.push(node.left);
            }
            
            if(node.right) {
                queue.push(node.right);
            }
            
            if(i === len - 1) {
                result.push(node.val);
            }
        }
    }
    
    return result;
}