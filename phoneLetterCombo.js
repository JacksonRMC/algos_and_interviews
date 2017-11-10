var numToLetters = {
    '0': ' ',
    '1': '',
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
};

var letterCombinations = function(digits) {
    let output = [];
    
    if (digits.length === 0 ) {
        return output;
    }
    
     function test (digits, idx, curr) {
        if ( idx === digits.length ){
            output.push(curr);
            return
        }
        
        let num = numToLetters[digits[idx]];
        
        for ( let i = 0 ; i < num.length ; i ++ ){
            test(digits, idx + 1, curr + num[i]);
        }
    
    }
    
    test(digits, 0, '');
    return output
    
};