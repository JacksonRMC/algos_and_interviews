let test = [[1,2], [],[],[], [3], [4,5,6]]

// class Iterator {
// 	constructor(array){
// 		this.storage = array;
// 		this.currentArray = 0;
// 		this.nextElement = 0;
// 		this.result = [];
// 	}

// 	next(){
// 		if ( this.currentArray >= this.storage.length ){
// 			return this.result;
// 		} 
// 		else if (this.storage[this.currentArray].length === 0){
			
// 			while (this.storage[this.currentArray].length === 0){
// 				this.currentArray++;
// 				this.nextElement = 0;
// 			}
		
// 		}

// 		let temp = this.storage[this.currentArray];
// 		if ( temp[this.nextElement] ){
			
// 			this.result.push(temp[this.nextElement]);

// 			if ( temp[this.nextElement + 1] ) {
// 				this.nextElement ++;
// 			} else {
// 				this.currentArray++;
// 				this.nextElement = 0;
// 			}
// 			return this.result; 
// 		}

// 	}

// 	hasNext(){
// 		if ( this.storage[this.currentArray] ){
// 			return true;
// 		}

// 		this.currentArray = 0;
// 		this.nextElement = 0;
// 		this.result = []
		
// 		return false;
// 	}
// }

// class Iterator {
// 	constructor(array){
// 		this.array = array;
// 		this.currentArray = 0;
// 		this.element = 0;
// 		this.result = [];
// 	}

// 	hasNext(){
// 		if(this.array[this.currentArray]){
// 			return true;
// 		}
// 		this.currentArray = 0;
// 		this.element = 0;
// 		this.result =[];
// 		return false;
// 	}

// 	next(){
// 		let temp = this.array;

// 		while( temp[this.currentArray].length === 0 ){
// 			this.currentArray++;
// 			this.element = 0;
// 		};

// 		this.result.push(temp[this.currentArray][this.element]);
		
// 		if ( temp[this.currentArray][this.element + 1] ){
// 			this.element++;
// 		} else {
// 			this.currentArray++;
// 			this.element = 0;
// 		}
		
// 		return this.result
// 	}

// }

let y = new Iterator(test);

while (y.hasNext()){
	console.log(y.next())
}

while (y.hasNext()){
	console.log(y.next())
}








