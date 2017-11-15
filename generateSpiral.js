//LEETCODE 59 

// Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

// For example,
// Given n = 3,

// You should return the following matrix:
// [
//  [ 1, 2, 3 ],
//  [ 8, 9, 4 ],
//  [ 7, 6, 5 ]
// ]

var generateMatrix = function(n) {
    let matrix = [];
    
    for (let i = 0 ; i < n ; i ++ ){
        let nine = [];
        for ( let j = 0 ; j < n ; j ++ ){
            nine.push(null);
        }
        matrix.push(nine);
    }
    
    let startRow = 0;
    let endRow = n - 1;
    let startCol = 0;
    let endCol = n - 1;
    let counter = 1;
    
    while ( startRow <= endRow && startCol <= endCol ){
        for (let i = startRow ; i <= endRow ; i ++ ){
            matrix[startCol][i] = counter;
            counter++;
        };
        startCol++;

        for( let j = startCol ; j <= endCol ; j ++ ){
            matrix[j][endRow] = counter;
            counter++;
        };
        endRow --;



        if ( startRow < endRow ){
            for ( let y = endRow ; y >= startRow ; y --){
                matrix[endCol][y] = counter;
                counter++;
            }
            endCol--;
        }

        if ( startCol < endCol ){
            for ( let g = endCol ; g >= startCol ; g --){
                matrix[g][startRow] = counter;
                counter++;
            }
            startRow++;
        }
    };

    return matrix;
    
};

console.log(generateMatrix(5));