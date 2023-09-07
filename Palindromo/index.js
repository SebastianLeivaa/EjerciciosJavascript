function isPalindrome(text){
    const regex = (/[.*+\-?^${}()_|[\]\/\W/]/g);
    let string = text.toLowerCase().split(regex).join("");
    let stringModify = string.split("").reverse().join("");
    
    console.log(string);
    console.log(stringModify);
    
    
    console.log(string === stringModify);
}

isPalindrome("_eye");
