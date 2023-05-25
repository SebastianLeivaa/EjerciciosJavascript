function telephoneCheck(str) {
   
    const regexOne = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

    console.log(regexOne.test(str))
    
    return regexOne.test(str);
}

telephoneCheck("555-555-5555");