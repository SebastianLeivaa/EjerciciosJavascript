/*Cada nuevo número en la sucesión de Fibonacci se genera al sumar 
los dos números anteriores. Comenzando con 1 y 2, los primeros 10 
números serán:
1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
Considerando solamente los términos de la sucesión de Fibonacci que 
no sean mayores que n, encontrar la suma de los términos con valor par.
Pruebas: 
-fiboEvenSum(10) debe devolver un número.
-Tu función debe devolver un número par.
-Tu función debe sumar los números de Fibonacci con valor par: fiboEvenSum(8) debe devolver 10.
-fiboEvenSum(10) debe devolver 10.
-fiboEvenSum(34) debe devolver 44.
-fiboEvenSum(60) debe devolver 44.
-fiboEvenSum(1000) debe devolver 798.
-fiboEvenSum(100000) debe devolver 60696.
-fiboEvenSum(4000000) debe devolver 4613732.
 */

function fiboEvenSum(n) {

    //Mi solucion
    /*let fibonacci = 2;
    let i = 1;
    let aux = 0;
    let suma = 0;
    
    if(n = 1) {
        return 0;
    }

    while(fibonacci <= n){
        if(fibonacci % 2 === 0){
            suma += fibonacci; 
        }
        aux = fibonacci;
        fibonacci += i;
        i = aux;

    }
    return suma */

  //Solución "Optima" [FreeCodeCamp]

  if (n <= 1) {
    return 0;
  } else {
    let evenSum = 0,
      prevFibNum = 1,
      // According to problem description our Fibonacci series starts with 1, 2
      fibNum = 2; 
    for (let i = 2; fibNum <= n; i++) {
      if (fibNum % 2 == 0) {
        evenSum += fibNum;
      }
      [prevFibNum, fibNum] = [fibNum, prevFibNum + fibNum];
    }
    console.log(evenSum)
    return evenSum;
  }
}

fiboEvenSum(4000000); //Resultado esperado 44