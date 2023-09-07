/*Escribe una función que divida un arreglo (primer argumento) en grupos de la longitud size (segundo argumento) y los devuelva como un arreglo bidimensional. */
function chunkArrayInGroups(arr, size) {
    let newArr = [];

    for(let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, size + i));
    }
    console.log(newArr);
    return newArr;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);