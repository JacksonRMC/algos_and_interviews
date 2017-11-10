  function BinaryTreeNode(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
};

let meow = new BinaryTreeNode(3);
meow.insertLeft(2);
meow.insertRight(5);
meow.left.insertRight(13);
meow.right.insertLeft(7);
meow.left.insertLeft(4);
meow.right.insertRight(9);

function Node (value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right; 
}

function second (node, prev, wentLeft) {
    if (node.right) {
        return second(node.right, node, wentLeft);
    } else if (node.left) {
        return second(node.left, node, true);
    } else {
        if (wentLeft) return node.value;
        return prev.value;
    }
}

function get(node) {
    
}


console.log(meow.left);
console.log(meow.right);





