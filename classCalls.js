class Poop {
	constructor (weight, time) {
		this.weight = weight;
		this.time = time;
	}
	print() {
		return ' I am a bananana!!!!!!! '
	}
}

let me = new Poop(33, 1400);

console.log(me);

class Dia extends Poop {
	constructor(weight, time, awareness) {
		super(weight, time)
		this.awareness = awareness;
	}
}

let you = new Dia(44, 2000, true);

console.log(you.print())