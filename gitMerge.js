let start = [  { start: 1, end: 3 },
   { start: 8, end: 10 },
   { start: 2, end: 6 },
   { start: 15, end: 18 } ];

function merge(interval) {
	let counter = 0;
	let result = [];
	

	interval.sort((x, y) => x.start > y.start ? 1 : -1);

	if(interval.length) {
		result.push(interval[0]);
	};

	for( let i = 1 ; i < interval.length ; i ++ ){
		let next = interval[i];
		let current = result.pop();

		if( current.end < next.start ){
			result.push(current);
			result.push(next);
		} else {
			current.end = Math.max(current.end, next.end);
			result.push(current);
		}

	};

	return result;
}

console.log(merge(start));