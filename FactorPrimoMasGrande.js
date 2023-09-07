/*
Los factores primos de 13195 son 5,7,13 y 29.

Cual es el factor primo mas grande del number?
Pruebas:
largestPrimeFactor(2) debe devolver un número.
largestPrimeFactor(2) debe devolver 2.
largestPrimeFactor(3) debe devolver 3.
largestPrimeFactor(5) debe devolver 5.
largestPrimeFactor(7) debe devolver 7.
largestPrimeFactor(8) debe devolver 2.
largestPrimeFactor(13195) debe devolver 29.
largestPrimeFactor(600851475143) debe devolver 6857.
*/

function largestPrimeFactor(num){
    let prim = 2
    let maxPrim = 1;

    while(prim <= num){         
        if(num % prim == 0){
            maxPrim = prim;
            num = num / prim;
        }else{
            prim++;
        }  
    }

    console.log(maxPrim);
    return maxPrim;
}   


largestPrimeFactor(600851475143)