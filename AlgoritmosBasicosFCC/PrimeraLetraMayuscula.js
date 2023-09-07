/*Devuelve la cadena proporcionada con la primera letra de cada palabra en mayúsculas. Asegúrate de que el resto de la palabra esté en minúsculas.

Como propósito de este ejercicio, debes también usar mayúsculas conectando palabras como the y of. */

function titleCase(str) {
    let newStr = str.toLowerCase();
    let word = newStr.split(' ');
    for(let i = 0; i < word.length; i++) {
        word[i] = word[i][0].toUpperCase() + word[i].slice(1);
    }
    let wordFinal = word.join(' ');
    return wordFinal;
  }
  
  titleCase("I'm a little tea pot");