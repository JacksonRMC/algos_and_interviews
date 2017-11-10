////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
 * n=1    x
 *
 * n=3    x
 *       xxx
 *        x
 *
 * n=5    x
 *       xxx
 *      xxxxx 
 *       xxx
 *        x
 */


function printX(number) {
  let middle = Math.floor(number / 2);
  let result = new Array(number);
  
  for( let i = 0 ; i < number ; i++ ){
    
    if( i === middle ) {
      result[i] = 'x';
    } else {
      result[i] = ' ';
    }
    
  };
  
  console.log(result.join(''));
  let counter = middle;
  let other = middle;
  
  while(counter < number && other > 0){
    result[++counter] = 'x';
    result[--other]  = 'x';
    console.log(result.join(''))
  } 
  

  while (counter !== other){
    result[counter--] = ' ';
    result[other++] = ' ';
    console.log(result.join(''))
   } 
}
printX(21);

// Find a connected component in a binary image given a starting index. 

// Solve Knightboard puzzle with 5 levels 
