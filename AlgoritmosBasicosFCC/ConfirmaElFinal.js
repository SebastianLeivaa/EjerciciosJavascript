/*Evalúa si una cadena (primer argumento, str) termina con la cadena de destino dada (segundo argumento, target).

Este desafío puede resolverse con el método .endsWith(), que fue introducido en ES2015. Pero para el propósito de 
este desafío, nos gustaría que usaras uno de los métodos de subcadena de JavaScript en su lugar. */

function confirmEnding(str, target) {
    str.slice(str.length - target.length, str.length);
    return str.slice(str.length - target.length) === target;
  }
  
  confirmEnding("Bastian", "n");