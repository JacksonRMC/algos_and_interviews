
let matrix = [
  [1,2,3],
  [1,2,3],
  [1,2,3]
]

// function rotate(matrix) {
//   let length = matrix[0].length;
//   let newMatrix = [[],[],[]];
//
//   for (let r = 0 ; r < length ; r ++ ){
//     for ( let c = 0 ; c < length ; c ++ ){
//       newMatrix[c][length - 1 - r] = matrix[r][c];
//     }
//   }
//   return newMatrix;
// }

function rotateNines(matrix) {
  let newMatrix = [];
  let length = matrix.length;
  for ( let i = 0 ; i < length ; i ++ ){
    newMatrix.push(new Array(length));
  }

  for ( let j = 0 ; j < length ; j ++ ){
    for (let y = 0 ; y < length ; y ++ ){
      newMatrix[y][length - 1 - j] = matrix[j][y]; //90
    }
  }

  return newMatrix.join('\n')
};

function rotateOneEighty(matrix) {
  let newMatrix = [];
  let length = matrix.length;
  for ( let i = 0 ; i < length ; i ++ ){
    newMatrix.push(new Array(length));
  }

  for ( let j = 0 ; j < length ; j ++ ){
    for (let y = 0 ; y < length ; y ++ ){
      newMatrix[y][j] = matrix[y][length - 1 - j]
    }
  }

  return newMatrix.join('\n')
};

function rotate270(matrix) {
  let newMatrix = [];
  let length = matrix.length;
  for ( let i = 0 ; i < length ; i ++ ){
    newMatrix.push(new Array(length));
  }

  for ( let j = 0 ; j < length ; j ++ ){
    for (let y = 0 ; y < length ; y ++ ){
      newMatrix[j][y] = matrix[y][length - 1 - j]
    }
  }

  return newMatrix.join('\n')
};



console.log("Rotate 360 or startng\n",matrix.join('\n'))

console.log("Rotate 90\n",rotateNines(matrix));
// newMatrix[outer][length - 1 - inner] = matrix[outer][inner];

console.log("Rotate 180\n",rotateOneEighty(matrix));
// newMatrix[inner][length - 1 - outer] = matrix[inner][outer]; //180

console.log("Rotate 270\n",rotate270(matrix));
//newMatrix[outer][inner] = matrix[inner][length - 1 - outer]
