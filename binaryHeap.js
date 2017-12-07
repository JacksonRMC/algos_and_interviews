var BinaryHeap = function () {
  this._heap = [];
  this._compare = function (i, j) { return i < j; };
};

BinaryHeap.prototype._getLesserChildIndex = function (parentIndex) {
  var childIndices = [parentIndex * 2 + 1, parentIndex * 2 + 2].filter(function (index) {
    return index < this._heap.length;
  }, this);

  // compare children nodes to get the index of the lesser of them
  if (this._compare(this._heap[childIndices[0]], this._heap[childIndices[1]])) {
    return childIndices[0];
  } else {
    return childIndices[1];
  }
};

BinaryHeap.prototype._swap = function (index , parentIndex) {
  var temp = this._heap[index];
  this._heap[index] = this._heap[parentIndex];
  this._heap[parentIndex] = temp;
};

BinaryHeap.prototype.insert = function ( node ) {
  // add node to end of heap
  this._heap.push(node);

  // locate node’s parent
  var index = this._heap.length - 1;

  var parentIndex = Math.floor( (index - 1) / 2 );

  // while node has parent and is less than parent
  while ( index > 0 && ( this._compare(this._heap[index], this._heap[parentIndex]) ) ) {
    // swap node and parent
    this._swap(index, parentIndex, this);
    index = parentIndex;
    parentIndex = Math.floor( (index - 1) / 2);
  }
};

BinaryHeap.prototype.removeRoot = function () {
  // swap root node with last node
  this._swap(this._heap.length - 1, 0, this);

  // remove last node and store it to be returned later
  var originalRoot = this._heap.pop();
  var temporaryRootIndex = 0;

  // compare children nodes to get the index of the lesser of them
  var lesserChildIndex = this._getLesserChildIndex(temporaryRootIndex);

  // while there are children nodes and the lesser of them is less than the new root

  while ( lesserChildIndex && this._compare(this._heap[lesserChildIndex], this._heap[temporaryRootIndex]) ) {
    // swap the root node with the lesser of its children
    this._swap(lesserChildIndex, temporaryRootIndex, this);
    temporaryRootIndex = lesserChildIndex;
    lesserChildIndex = this._getLesserChildIndex(temporaryRootIndex);
  }

  // return original root node we stored earlier
  return originalRoot;
};
