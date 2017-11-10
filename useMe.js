class Person {
	constructor(name){
		this.name = name;
	}
	print() {
		return `What Person is it?? ${this.name}`;
	}
}

class Now extends Person {
	constructor(name){
		super(name);
	}
}


let time = new Now('turtle');


console.log(time.print());