let string = '1 2 3 4 5 6 7 8 9';

reverse = (string) => {
	let letterArray = string.split('');
	let startIndex = 0;
	let endIndex = string.length - 1;

	while (startIndex < endIndex ) {
		let temp = letterArray[startIndex];
		letterArray[startIndex] = letterArray[endIndex];
		letterArray[endIndex] = temp;

		startIndex++;
		endIndex --;
	}
	return letterArray.join('')
}



console.log(reverse(string));