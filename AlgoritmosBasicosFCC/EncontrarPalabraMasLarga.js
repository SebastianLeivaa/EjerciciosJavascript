/*Devuelve la longitud de la palabra más larga en la oración proporcionada.

Tu respuesta debe ser un número. */

function findLongestWordLength(str) {
    let arr = str.split(' ');
    let max = 0;
    
    for (let i = 0; i < arr.length; i++) {
      let current = arr[i].length;
      if (current > max){
        max = current;
      }
    }
    return max;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");