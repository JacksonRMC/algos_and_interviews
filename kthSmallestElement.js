
var kthSmallest = function(root, k) {

        let count = countNodes(root.left);
        if (k <= count) {
            return kthSmallest(root.left, k);
        } else if (k > count + 1) {
            return kthSmallest(root.right, k-1-count); // 1 is counted as current node
        }
        
        return root.val;
    }
    
var countNodes = function(n) {
        if (n === null) return 0;
        
        return 1 + countNodes(n.left) + countNodes(n.right);
    }