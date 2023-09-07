/*Invertir la cadena proporcionada y devolver la cadena invertida.

Por ejemplo, "hello" debe convertirse "olleh".* */
function reverseString(str) {
    return str.split("").reverse().join("");
  }
  
  reverseString("hello");