/*Repite una cadena dada str (primer argumento) por un número (num) de veces (segundo argumento). Devuelve una cadena vacía si 
num no es un número positivo. Para este desafío, no utilices el método incorporado .repeat(). */

function repeatStringNumTimes(str, num) {
    let word = '';
    if (num < 0){
        return word;
    }else {
        for(let i = num; i > 0; i--){
            word += str;
        }
    }
    return word;
  }
  
  repeatStringNumTimes("abc", 3);