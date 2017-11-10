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
meow.left.insertRight(3);
meow.left.insertLeft(3);
meow.left.right.insertRight(31);
meow.left.left.insertRight(32);
meow.left.left.right.insertRight(32);

function minDepth ( root ) {
  if ( !root ) {
      return 0;
  }
  let left = minDepth(root.left);
  let right = minDepth(root.right);
  return (left === 0 || right === 0) ? left + right + 1 : Math.min(left, right) + 1 ; 
}

console.log("minimum depth: ", minDepth(meow));

function maxDepth ( root ) {
  if ( !root ) {
      return 0;
  }

  let left = maxDepth(root.left) + 1;
  let right = maxDepth(root.right) + 1;
  return left > right ? left : right ; 
}

console.log('Max Depth: ', maxDepth(meow))

//BST level order Traversal 

let traverse = new BinaryTreeNode(3);
traverse.insertRight(5);
traverse.insertLeft(2);
traverse.left.insertLeft(6);
traverse.left.insertRight(3);
  




function levelOrderTraversal (root) {
  let result = [];

  if ( !root ) {
  	return result;
  }

  let queue = [];
  let temp = [];
  let currentLevel = 1;
  let nextLevel = 0;
  
  queue.push(root);

  while ( queue.length !== 0 ) {
    let p = queue.shift();
    temp.push(p.value);
    currentLevel --;

    if ( p.left ) {
    	queue.push(p.left);
    	nextLevel++;
    }

    if ( p.right ) {
    	queue.push(p.right);
    	nextLevel ++;
    }

  	
  	if ( currentLevel === 0 ) {

	  result.push(temp);
	  currentLevel = nextLevel;
	  nextLevel = 0;
	  temp = [];

  	}
  }

  
  return result
}
console.log(levelOrderTraversal(traverse))

var given = [3,9,20,null,null,15,7];
var output = [[3],[9,20],[15,7]];





























