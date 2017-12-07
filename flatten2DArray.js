/*
Implement an iterator to flatten a 2d vector.
 * For example,
 * Given 2d vector = [[1, 2], [3], [4, 5, 6]]
 * By calling next repeatedly until hasNext returns false.
 * the order of elements returned by next should be: [1,2,3,4,5,6].

 [[1,2], [], [], [3, 4], [5, 6, 7]]

TEST CASE:
Iterator it = list.iterator();
while(it.hasNext()) {
    print it.next();
}

*/


let vector = [
	[1,2],
	[],
	[],
	[3],
	[4,5,6]
];

class Iterator {
	constructor(array){
		this.array = array;
		this.current = 0;
		this.next = 0;
		this.notCalled = true;
	}

	getCurrent () {
		return this.array[this.current][this.next] ?
		this.array[this.current][this.next] : [];
	}

	nextOne() {
		if ( this.notCalled ) {
			this.notCalled = false;
			let result = this.array[this.current][this.next];
			if ( !this.array[this.current][this.next] ){
				this.current ++;
				this.next = 0;
			} else {
				this.next ++;
			}
			return result;
		}

		if ( this.current === this.array.length - 1 ){
			  let ret = this.array[this.current][this.next];
			  this.next ++;
			  return ret
		}

		if ( this.array[this.current][this.next] ){
			let time = this.array[this.current][this.next];
			this.current ++;
			this.next ++;
			console.log('next: ', this.next)
			return time;
		}

		if ( this.array[this.current].length === 0
			|| !this.array[this.current][this.next + 1]){
			this.current ++;
			this.next = 0;
		}

	}

	hasNext(){
		let next = this.current;
		if( this.array[ next ] ) {
			return true;
		}
		return false;
	}

	iterator() {
		let result = [];
		while (this.hasNext()){

			for ( let i = 0 ; i < this.array[this.current].length ; i ++ ) {
				result.push(this.array[this.current][i]);
			}

			this.next();
		}
		// this.current = 0;
		return result
	}
}

let me = new Iterator(vector);
console.log(me.nextOne())

console.log(me.nextOne())
console.log(me.nextOne())
console.log(me.nextOne())
console.log(me.nextOne())
console.log(me.nextOne())
console.log(me.nextOne())
console.log(me.nextOne())
