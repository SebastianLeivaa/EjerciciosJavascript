/*Si enumeramos todos los números naturales menores a 10 que sean múltiplos de 3 o 5, obtenemos 3, 5, 6 y 9. La suma de estos múltiplos es 23.

Encuentra la suma de todos los múltiplos de 3 o 5 menores que el valor del parámetro proporcionado number.
Pruebas:
-multiplesOf3and5(10) deberìa retornar un nùmero
-multiplesOf3and5(49) deberìa retornar 543
-multiplesOf3and5(1000) deberìa retornar 233168
-multiplesOf3and5(8456) deberìa retornar 16687353
-multiplesOf3and5(19564) deberìa retornar 89301183
 */

function multiplesOf3and5(number){
    
    let i = 3;
    let suma = 0;

    while(i < number) {
        if(i % 3 === 0 || i % 5 === 0) suma += i;
        i++;
    }

    return suma;
}


multiplesOf3and5(10)