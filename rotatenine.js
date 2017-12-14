
let matrix = [
  [1,2,3],
  [1,2,3],
  [1,2,3]
]

function rotate(matrix) {
  let length = matrix[0].length;
  let newMatrix = [[],[],[]];

  for (let r = 0 ; r < length ; r ++ ){
    for ( let c = 0 ; c < length ; c ++ ){
      newMatrix[c][length - 1 - r] = matrix[r][c];
    }
  }
  return newMatrix;
}

console.log(rotate(matrix))
