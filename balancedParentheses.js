
//Balanced parentheses

var isValid = function(s) {
    let stack = [];
    for ( let i = 0 ; i < s.length ; i ++) {
        let char = s[i];
        if ( char === '(' || char === '{' || char === '[') {
            stack.push(char);
        }
        else if ( char === ')' || char === '}' || char === ']'){
            let top = stack.pop();
            if ( !top || (top === '(' && char !== ')') 
                    || (top === '{' && char !== '}') 
                  || (top === '[' && char !== ']') ) {
                return false
            }
        }
    }
    
    return stack.length === 0
};




//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Generate Parens 


var generateParenthesis = function(n) {
    var result = [];
    var output = '';
    
    generate(result, output, 0, n, 0, 0);
    return result;  
};

var generate = function(result, output, depth, n, left, right){
   if(depth === 2*n){
       result.push(output);
       return;
   }
   
   if(left < n){
       generate(result,output + '(',depth + 1, n, left + 1, right);
   }
   if(left > right){
       generate(result,output + ')',depth + 1, n, left, right+1);
   }
};














