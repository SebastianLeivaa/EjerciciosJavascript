/*function reverseString(str) {
    
    console.log(str.split("").reverse().join(""))
  }
  
  reverseString("hello");
  */
  
  function factorialize(num) {
    let fact = 1;
    while(num > 0){
    fact *= num;
    num-- 
    }
    console.log(fact);
  }
  
  factorialize(5);


  /*function findLongestWordLength(str) {
    let nowWord = 0;
    let longWord = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] == ' ' && nowWord > longWord){
            longWord = nowWord;
            nowWord = 0;
        }else if(str[i] == ' ' && nowWord <= longWord){
            nowWord= 0;
        }
        else{
            nowWord++
        }
    }
    if(nowWord > longWord){
        longWord = nowWord;
    }
    console.log(longWord);
  }
  
  findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");*/


  /*function largestOfFour(arr) {
    let newArr = [];
    for(let i = 0; i < 1; i++){
      for(let j =0; j < arr[i].length; j++){
        newArr.push(Math.max(...arr[j]));
      }
    }
    console.log(newArr)
  
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);*/

  /*function repeatStringNumTimes(str, num) {
    let newStr = '';
    for(i = 0; i < num; i++){
        newStr += str;
    }
    console.log(newStr);
    
  }
  
  repeatStringNumTimes("abc", 3);*/

  /*function truncateString(str, num) {
    if (str.length > num){
        const str1 = str.slice(0, num) + '...';
        console.log(str1);
    }
    

    }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);*/
  /*function titleCase(str) {
    const newStr = str.toLowerCase().split(" ").map(val => val.replace(val.charAt(), val.charAt().toUpperCase())).join(" ");
    //const newStr = str.toLowerCase().split(" ").map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase())).join(" ");
    console.log(newStr);
  }
  
  titleCase("I'm a little tea pot");*/

  /*function getIndexToIns(arr, num) {
    arr.sort((a,b) => a - b);
    console.log(arr);

    for(let i = 0; i < arr.length; i++){
      if(num <= arr[i]){
        console.log(i);
        break;
      }else if(num > arr[i] && i == arr.length - 1){
        console.log(i + 1)
      }

    }
    if(arr.length === 0){
      num = 0;
      console.log(num)
    }
    console.log(arr.filter(val => num > val).length);
    return num;
    
  }
  
  getIndexToIns([5, 12 , 20], 15);*/

  /*function mutation(arr) {
    let wordOne = arr[0].toLowerCase();
    let wordTwo = arr[1].toLowerCase();
    let booleano = true;

    console.log(wordOne);
    console.log(wordTwo);

    console.log(wordOne.indexOf(wordTwo[0]))
    console.log(wordOne.indexOf(wordTwo[1]))
    console.log(wordOne.indexOf(wordTwo[2]))


    for(let i = 0; i < wordTwo.length; i++){
      if(wordOne.indexOf(wordTwo[i]) >= 0){
        booleano = true;
        console.log(booleano)
      }else{
        booleano = false;
        console.log(booleano)
        break;
      }
    }
    console.log(booleano);
  }
  mutation(["hello", "Hello"]);*/

 /* function chunkArrayInGroups(arr, size) {
    let newArr = [];
    let arrConst = [];
    

      while(arr.length > 0){
      
      if(size > arr.length){
        for(let i = 0; i < arr.length; i++){
          arrConst.push(arr[i]);
        }
        arr.splice(0, arr.length)
        newArr.push(arrConst);
        arrConst = [];
        break;
      }

      for(let i = 0; i < size; i++){
      
      arrConst.push(arr[i]);
      console.log(arrConst)
      }
      arr.splice(0, size);
      console.log(arr)
      newArr.push(arrConst)
      console.log(newArr);
      arrConst = [];
    }
    

      console.log(newArr);
    
    
    return arr;
  }
  
  chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);*/

  // La variable global
/*const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

function getRating(watchList) {
  const averageRating = watchList
  .filter(film => film.Director === 'Christopher Nolan')
  .map(val => Number(val.imdbRating))
  .reduce((suma, ranking) => suma + ranking) / watchList.filter(director => director.Director === 'Christopher Nolan').length;
  //watchList.filter(film => film.Director === "Christopher Nolan").length;
  console.log(averageRating);
}

getRating(watchList)*/
/*function numCorrect(num){

}

const squareList = arr => {
  const newArr = arr.filter(num => num > 0 && Number.isInteger(num)).map(newNum => Math.pow(newNum, 2));
  console.log(newArr);
1};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);*/

/*const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Cambia solo el código debajo de esta línea
  const newArr = arr.slice().sort((a, b) => a - b);
  console.log(newArr);
  console.log(arr)

  // Cambia solo el código encima de esta línea
}

nonMutatingSort(globalArray);*/

/*function sumAll(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let resultado = 0;
  
  
  for(let i = max; i >= min; i--){
      resultado += i;
  }
  console.log(resultado);
}

sumAll([1, 4]);*/

/*function diffArray(arr1, arr2) {
  const newArr = arr1.concat(arr2).filter(val => !arr1.includes(val) || !arr2.includes(val));
  console.log(newArr);
  
  
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);*/

/*function destroyer(arr, ...valInput) {
  const newArr = arr.filter(val => !valInput.includes(val));
  console.log(newArr)
 
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);*/

/*function whatIsInAName(collection, source) {

  const sourceKeys = Object.keys(source);
  console.log(sourceKeys)
  
  const newArr = collection.filter(obj => sourceKeys.every(key => obj.hasOwnProperty(key) && obj[key] == source[key]));
  console.log(newArr);
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet"});*/

/*function spinalCase(str) {
  let word = str.replace(/([a-z])([A-Z])/g, "$1 $2")
  console.log(word)
  const wordFinal = word.toLowerCase().split(" ").join("-");
  console.log(wordFinal);
}

spinalCase('thisIsSpinalTap');*/

/*function translatePigLatin(str) {
  
  let strModify = ''
  let i = 0
  let aux = ''
  const regex = /[aeiou]/gi; 
  
  if(str[0].match(regex)){
    strModify = str + 'way';
  }while(str[i].match(regex) === null){
    aux += str[i];
    i++;
    if(i === str.length -  1){
      i++;
      break;
    }
  }if(str.match(regex) === null){
    strModify = str + 'ay';
  }
  else if(str[0].match(regex) === null){
    let newStr = str.slice(i);
    strModify = newStr + aux + 'ay';
  }


  console.log(strModify);  
  return str;
}

translatePigLatin("rhythm");*/
/*function myReplace(str, before, after) {
  let aux = after[0].toUpperCase();
  let newAfter = after.replace(after[0], aux)
  let newStr = ''; 
  if(before[0].match(/[A-Z]/)){
  newStr = str.replace(before, newAfter);
  }else{
    newAfter = after.toLowerCase();
    newStr = str.replace(before, newAfter);
  }
  console.log(newStr);
  return str;
}

myReplace("Let us get back to more Coding", "Coding", "algorithms");*/

/*function pairElement(str) {
  const adn = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
  }

  console.log(str.split("").map(val => [val, adn[val]]));
  
}


pairElement("ATCGA");*/

/*function fearNotLetter(str) {

  for(let i = 0; i < str.length; i++){
    let code = str.charCodeAt(i);
    
    if(code !== (str.charCodeAt(0) + i)){
      console.log(String.fromCharCode(code - 1));
    }
  }
  
  return str;
}

fearNotLetter("abce");*/

/*function uniteUnique(arr, ...newArr) {
  let arrModify = arr.concat(...newArr);
  let arrFinal = [];
  console.log(arrModify);
  for(let i = 0; i < arrModify.length; i++){
    if(arrFinal.indexOf(arrModify[i]) === -1){
      arrFinal.push(arrModify[i]);
    }
    console.log(arrFinal);
  }
  console.log(arrFinal);  
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);*/

/*function convertHTML(str) {
  let temp = str.split("");

  for (let i = 0; i < temp.length; i++){
    switch (temp[i]){
      case "<":
        temp[i] = "&lt;";
        break;
      case "&":
        temp[i] = "&amp;";
        break;
      case ">":
        temp[i] = "&gt;";
        break;
      case '"':
        temp[i] = "&quot;";
        break;
      case "'":
        temp[i] = "&apos;";
        break;
    }
  }
  temp = temp.join("");
  
  console.log(temp);
  return str;
}

convertHTML("Dolce & Gabbana");*/

/*function sumFibs(num) {
  if(num <= 0 ){
    console.log(0);
  }
  let fibonacciResult = 0;
  let prevNumber = 0;
  let currentNumber = 1;

  while(currentNumber <= num){
    if(currentNumber % 2 !== 0){
      fibonacciResult += currentNumber;
    }

    currentNumber += prevNumber;
    prevNumber = currentNumber - prevNumber;
  }
  console.log(fibonacciResult)
}

sumFibs(13);*/

/*function sumPrimes(num) {
  
  let sum = 0;
  
  function isPrim(number){
    if(number < 2){
      return false;
    }

    for(let i = 2; i < number; i++){
      if(number % i === 0){
        return false;
      }
    }
    return true;
  }

  for(let i = 2; i <= num; i++){
    if(isPrim(i)) sum += i;
  }
  console.log(sum)
}

sumPrimes(10);*/

/*function smallestCommons(arr) {
  
  let arrTidy = arr.sort((a,b) => a - b);
  let start = arrTidy[0];
  let end = arrTidy[1];
  let mcm = 0;
  let num = start;
  let aux = start;

  for(let i = start + 1; i < end; i++){
      arrTidy.push(i);
  }

  
  let newArr = arrTidy.sort((a,b) => a - b);
  console.log(newArr);
  
  for(let i = 0; i < newArr.length - 1; i++){
    while(newArr[i] !== newArr[i+1]){
      while(newArr[i] < newArr[i+1]){
        newArr[i] += num;
      }
      if(newArr[i] !== newArr[i+1]){
      if(newArr[i] < newArr[i+1]){
        newArr[i] += num;}
      else if(newArr[i] > newArr[i+1]){
      newArr[i+1] += aux + 1;
      }
      }
    }
    num = newArr[i];
    mcm = newArr[i];
    aux++;
    

}

console.log(mcm)
  
  
  return arr;
}

smallestCommons([1,5]);*/

/*function dropElements(arr, func) {
  const isTrue = arr.findIndex(func);
  if(isTrue === -1){
    return [];
  }else{
    return arr.slice(isTrue);
  }
}

dropElements([1, 2, 3], function(n) {return n < 3; });*/

/*function steamrollArray(arr) {
  const flattenedArray = [];
  // Loop over array contents
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // Recursively flatten entries that are arrays
      //  and push into the flattenedArray
      flattenedArray.push(...steamrollArray(arr[i]));
    } else {
      // Copy contents that are not arrays
      flattenedArray.push(arr[i]);
    }
  }
  console.log(flattenedArray);
  return flattenedArray;
}

steamrollArray([1, {}, [3, [[4]]]]);*/

/*[14:51, 5/2/2023] Sebastian Leiva: function binaryAgent(str) {
  let strSeparate = str.split(" ");
  console.log(strSeparate);
  
  let arr = [];

  for(let i = 0; i < strSeparate.length; i++){
    arr.push(String.fromCharCode(parseInt(strSeparate[i], 2)));
    console.log(arr)
  }
  const stringModify = arr.join("");
  console.log(stringModify);
  
  return stringModify;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
[15:18, 5/2/2023] Sebastian Leiva: function truthCheck(collection, pre) {
  let cont = 0;

  for(let i in collection){
    if(collection[i].hasOwnProperty(pre) && Boolean(collection[i][pre])){
      cont++;
  }
}
  console.log(cont == collection.length); 
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");*/

/*function addTogether() {
  const [first, second] = arguments;
  if (typeof(first) !== "number")
    return undefined;
  if (arguments.length === 1)
    return (second) => addTogether(first, second);
  if (typeof(second) !== "number")
    return undefined;
  return first + second;

}

addTogether((2)([3]));*/

/*const Person = function(firstAndLast) {
  
  let fullName = firstAndLast;

  
  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function(){
    return fullName.split(" ")[1];
  }

  this.getFullName = function(){
    return fullName;
  }

  this.setFirstName = function(first){
    fullName = first + " " + fullName.split(" ")[1];
  }

  this.setLastName = function(last){
    fullName = fullName.split(" ")[0] + " " + last;
  }

  this.setFullName = function(name){
    fullName = name;
  }

  return firstAndLast;
};

const bob = new Person('Bob Ross');
bob.getFullName();*/

/*function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const pi = 2 * Math.PI;
  let newArr = [];

  
  
  const getOrbPeriod = function(obj){
    const a = Math.pow((earthRadius + obj.avgAlt), 3);
    const b = Math.sqrt(a / GM);
    const c = Math.round(pi * b);

    return {name: obj.name, orbitalPeriod: c};
  }

  for(let i in arr){
    newArr.push(getOrbPeriod(arr[i]))
  }

  console.log(newArr);
  return newArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);*/