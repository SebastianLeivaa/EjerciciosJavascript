/*Recorta una cadena (primer argumento) si es más larga que la longitud máxima proporcionada (segundo argumento). 
Devuelve la cadena recortada con un ... al final.*/

function truncateString(str, num) {
    if(str.length <= num){
        return str;
    }else {
        return str.slice(0, num) + '...';
    }
    return str;
  }

//Forma con sintaxis ternaria
function truncateString2(str, num) {
    return str.length > num ? str.slice(0, num) + '...' : str;
}
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);