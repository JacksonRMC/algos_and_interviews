class LinkedListNode {
	constructor(value){
    	this.value = value;
    	this.next = null;
	}
	addToTail (val) {
		let temp = this
		while ( true ) {
			if (temp.next === null ) {
				temp.next = new LinkedListNode(val);
				return
			}
		temp = temp.next
		}
	}

}

reverseList = (node) => {
  let current = node;
  let previous = null;
  let next = null;

  while ( current ) {
  	next = current.next;
  	current.next = previous;

  	previous = current;
  	current = next;

  }

  return previous;
}


//Nieve Solution
river = (listHead) => {
	let array = [];
	let temp = listHead;

	while (temp) {
		array.push(temp.value);
		temp = temp.next;
	}


	let newList = new LinkedListNode(array.pop());
	
	while ( array.length > 0 ) {
		newList.addToTail(array.pop());
	}

	return newList;
}

let rev = new LinkedListNode(1);

rev.addToTail(3);
rev.addToTail(4);
rev.addToTail(5);
rev.addToTail(6);

// console.log(rev);

console.log(reverseList(rev));

// console.log(rev)





