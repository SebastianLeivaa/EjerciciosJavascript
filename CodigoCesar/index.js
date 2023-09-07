function rot13(str) {
  
  let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S","T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S","T", "U", "V", "W", "X", "Y", "Z"];
  let arr = [];

  for(let i = 0; i < str.length; i++){
    if(alphabet.indexOf(str[i]) >= 0){
      let aux = str[i];
      let index = alphabet.findIndex(val => val === aux);
      arr.push(alphabet[index+13]);
    }else{
      arr.push(str[i]);
    }

  }
  const codeCesar = arr.join("");

  console.log(codeCesar);

  return codeCesar;
}

rot13("SERR CVMMN!");