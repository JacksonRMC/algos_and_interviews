// Write a class TempTracker with these methods:

// insert()—records a new temperature
// getMax()—returns the highest temp we've seen so far
// getMin()—returns the lowest temp we've seen so far
// getMean()—returns the mean ↴ of all temps we've seen so far
// getMode()—returns a mode ↴ of all temps we've seen so far
// Optimize for space and time. Favor speeding up the getter functions getMax(), getMin(), getMean(), and getMode() over speeding up the insert() function.

// Temperatures will all be inserted as integers. We'll record our temperatures in Fahrenheit, so we can assume they'll all be in the range 0..1100..110.

// If there is more than one mode, return any of the modes.

const Temp = function() {
  this.temperatures = {   };
  this.total = 0;
  this.mean = 0;
  this.number = 0;
  this.max = -Infinity;
  this.min = Infinity;
  this.mode = null;
}

Temp.prototype.insert = function(temp) {
  if ( this.max < temp ) {
  	this.max = temp;
  }

  if ( this.min > temp ) {
  	this.min = temp;
  }

  this.number ++;
  this.total += temp;
  
  if ( this.temperatures[temp] ) {
    this.temperatures[temp] ++;
  } else {
  	this.temperatures[temp] = 1;
  }

  if ( this.temperatures[temp] > this.temperatures[this.mode] || this.mode === null ) {
    this.mode = temp;
  }

  this.mean = this.total/ this.number;
};

Temp.prototype.getMax = function() {
  return this.max;
};

Temp.prototype.getMin = function() {
  return this.min;
}

Temp.prototype.getMean = function() {
  return this.mean;
}

Temp.prototype.getMode = function() {
  return this.mode;
}

let meow = new Temp();

meow.insert(9);
meow.insert(919);
meow.insert(9119);
meow.insert(959);
meow.insert(939);
meow.insert(929);
meow.insert(909);
meow.insert(19);
meow.insert(19);
meow.insert(19);
meow.insert(1199);
meow.insert(929);

console.log(meow)




