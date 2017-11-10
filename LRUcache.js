/*
 * Design and implement an LRU, or Least Recently Usedcache.
 *
 * An LRU cache gives O(1) get(key) and set(key, val) operations,
 * much like a hashtable, but once it reaches its limit for stored
 * number of items, removes the least recently used (i.e. the oldest
 * by get-date) item from the cache in O(1) time.
 *
 * For instance:
 *
 * var cache = new LRUCache(3); // limit of 3 items
 * cache.set("item1", 1);
 * cache.set("item2", 2);
 * cache.set("item3", 3);
 * cache.set("item4", 4);
 *
 * cache.get("item3") //=> 3
 * cache.get("item2") //=> 2
 * // item1 was removed because it was the oldest item by insertion/usage
 * cache.get("item1") //=> null
 *
 * // item4 is removed to make room, because it is the oldest by usage,
 * // which takes priority.
 * cache.set("item5", 5);
 *
 * // item3 is also removed, because it was retrieved before item2 was
 * // last retrieved.
 * cache.set("item6", 6);
 *
 * You will need a doubly-linked list (provided).
 */



var LRUCache = function (limit) {
  this.limit = limit;
  this.count = 0;
  this.map = {};
  this.list = new List();
};

var LRUCacheItem = function (key, val) {
  this.key = key;
  this.val = val;
  this.node = null;
};

LRUCache.prototype.size = function () {
  return this.count;
};

LRUCache.prototype.get = function (key) {

  if (!this.map[key]) return null;
  
  let node = this.map[key];
  this.list.moveToFront(node.node);

  return node.val;

};

LRUCache.prototype.set = function (key, val) {
  let item;

  if ( key in this.map ) {
    item = this.map[key];
    item.val = val;
    this.list.moveToFront(item);
  } else {
    item = new LRUCacheItem(key, val);
    item.node = this.list.unshift(item);
    this.map[key] = item;
    this.count++;
  }

  if( this.count > this.limit ){
    let oldest = this.list.pop();
    delete this.map[oldest.key];
    this.count--;
  }

};

var List = function () {
  this.head = null;
  this.tail = null;
};

var ListNode = function (prev, val, next) {
  this.prev = prev || null;
  this.val = val;
  this.next = next || null;
};

// Insert at the head of the list.
List.prototype.unshift = function (val) {
  // Empty list
  if (this.head === null && this.tail === null) {
    this.head = this.tail = new ListNode(null, val, null);
  // Not empty list.
  } else {
    this.head = new ListNode(null, val, this.head);
    this.head.next.prev = this.head;
  }

  return this.head;
};

// Delete at the head of the list.
List.prototype.shift = function () {
  // Empty list
  if (this.head === null && this.tail === null) {
    return null;
  // Not empty list.
  } else {
    var head = this.head;
    this.head = this.head.next;
    head.delete();
    return head.val;
  }
};

// Insert at the end of the list.
List.prototype.push = function (val) {
  // Empty list
  if (this.head === null && this.tail === null) {
    this.head = this.tail = new ListNode(null, val, null);
  // Not empty list.
  } else {
    this.tail = new ListNode(this.tail, val, null);
    this.tail.prev.next = this.tail;
  }

  return this.tail;
};

// Delete at the end of the list.
List.prototype.pop = function () {
  // Empty list
  if (this.head === null && this.tail === null) {
    return null;
  // Not empty list.
  } else {
    var tail = this.tail;
    this.tail = this.tail.prev;
    tail.delete();
    return tail.val;
  }
};

// Move a node to the front of the List
List.prototype.moveToFront = function (node) {
  if (node === this.tail) {
    this.pop();
  } else if (node === this.head) {
    return;
  } else {
    node.delete();
  }

  node.prev = node.next = null;

  // Don't delegate to shift, since we want to keep the same
  // object.

  // Empty list
  if (this.head === null && this.tail === null) {
    this.head = this.tail = node;
  // At least one node.
  } else {
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
  }
};

// Move a node to the end of the List
List.prototype.moveToEnd = function (node) {
  if (node === this.head) {
    this.shift();
  } else if (node === this.tail) {
    return;
  } else {
    node.delete();
  }

  // Don't delegate to push, since we want to keep the same
  // object.

  node.prev = node.next = null;

  // Empty list
  if (this.head === null && this.tail === null) {
    this.head = this.tail = node;
  // At least one node.
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
};

ListNode.prototype.delete = function () {
  if (this.prev) { this.prev.next = this.next; }
  if (this.next) { this.next.prev = this.prev; }
};


var cache = new LRUCache(3); // limit of 3 items
 cache.set("item1", 1);
 cache.set("item2", 2);
 cache.set("item3", 3);
 cache.set("item4", 4);

 
 console.log(cache.get("item3")); //=> 3
 console.log(cache.get("item2")); //=> 2
 // item1 was removed because it was the oldest item by insertion/usage
 console.log(cache.get("item1")); //=> null
 
  // item4 is removed to make room, because it is the oldest by usage,
  // which takes priority.
cache.set("item5", 5);
 
  // item3 is also removed, because it was retrieved before item2 was
  // last retrieved.
cache.set("item6", 6);



///////////////////////////////////////////////////////////////////////////////////////////////////////////

//IMPLEMENTATION WITHOUT DOUBLY LINKED LISTS


class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

var LRUCache = function(capacity) {
    this.list = null;
    this.map = new Map();
    this.head = null;
    this.tail = null;
    this.capacity = capacity;
    this.curSize = 0;
};

LRUCache.prototype.get = function(key) {
    let node = this.map.get(key);
    if (!node) {
        return -1;
    }
    
    if (node === this.head) {
        return node.val;
    }
    
    // remove node from list
    if (node === this.tail) {
        this.tail.prev.next = null;
        this.tail = this.tail.prev;
    } else {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
    
    // insert node to head
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    
    return node.val;
};


LRUCache.prototype.set = function(key, value) {
    let newNode = new Node(key, value);
    
    if (this.curSize === 0) {
        this.tail = newNode;
    } else {
        newNode.next = this.head;
        this.head.prev = newNode;
    }
    
    this.head = newNode;
    // this.curSize++;
    
    // update
    if (this.map.get(key)) {
        let oldNode = this.map.get(key);
        
        // remove node
        if (oldNode === this.tail) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            oldNode.prev.next = oldNode.next;
            oldNode.next.prev = oldNode.prev;
        }
    } else {
        this.curSize++
        if (this.curSize > this.capacity) {
            //delete tail
            this.map.delete(this.tail.key);
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.curSize--;
        }
    }
    
    this.map.set(key, newNode);
};


var cache = new LRUCache(3); // limit of 3 items
 cache.set("item1", 1);
 cache.set("item2", 2);
 cache.set("item3", 3);
 cache.set("item4", 4);

 
 console.log(cache.get("item3")); //=> 3
 console.log(cache.get("item2")); //=> 2
 // item1 was removed because it was the oldest item by insertion/usage
 console.log(cache.get("item1")); //=> null
 
  // item4 is removed to make room, because it is the oldest by usage,
  // which takes priority.
cache.set("item5", 5);
 
  // item3 is also removed, because it was retrieved before item2 was
  // last retrieved.
cache.set("item6", 6);













