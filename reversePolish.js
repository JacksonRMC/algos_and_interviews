// Evaluate the value of an arithmetic expression in Reverse Polish Notation.

// Valid operators are +, -, *, /. Each operand may be an integer or another expression.

// Some examples:
//   ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
//   ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6

var evalRPN = function(tokens) {
    var stack = [];
    
    for(var i = 0; i < tokens.length; i++) {
        var token = tokens[i];
        var val1,val2;
        var val = parseInt(token);
        if(!isNaN(val)) {
            stack.push(val);
        } else {
            val2 = stack.pop();
            val1 = stack.pop();
            
            if(token === '*') {
                stack.push(parseInt(val1 * val2));
            } else if(token === '/') {
                stack.push(parseInt(val1 / val2));
            } else if(token === '-') {
                stack.push(val1 - val2);
            } else if(token === '+') {
                stack.push(val1 + val2);
            }
        }
    }
    
    return stack.pop();
};


console.log(evalRPN([ 12, 12, 12, '*', '+', 3, 4, '-', '+' ] ));