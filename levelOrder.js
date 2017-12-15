function BSTtraverse(head) {
  let stack = [];
  let queue = [head];
  let nextlevel = 1;
  let currentlevel = 0;


  while (queue.length > 0) {
    let current = queue.shift()
    stack.push(current.value);
    nextlevel --;

    if ( current.left ){
      queue.push(current.left);
      currentlevel ++;
    }

    if ( current.right ){
      queue.push(current.right);
      currentlevel ++;
    }

    if( nextlevel === 0 ){
      console.log(stack.join(' '));
      stack = [];
      nextlevel = currentlevel
      currentlevel = 0
    }
  }
}


// function printLevelsDFS(root){
//   let levels = [];
//
//   function recurse(node, currDepth) {
//     if (node === null) {
//       return;
//     }
//
//     levels[currDepth].push(node.value);
//
//     recurse(node.left, currDepth + 1);
//     recurse(node.right, currDepth + 1);
//   }
//
//   recurse(root, 0);
//
//   levels.forEach((level) => level.join(' '));
// };


function printLevelsDFS(root) {


};
class BFS {
  constructor (value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}


let tree = new BFS(1);
tree.left = new BFS(2);
tree.right = new BFS(3);
tree.left.left = new BFS(4);
tree.right.left = new BFS(5);
tree.right.right = new BFS(6);

// console.log(tree)

console.log(printLevelsDFS(tree));
