function findNumbersPrime(num) {
    let array = [];
    if(num >= 2){
        array.push(2);
    }

    for(let i = 3; i <= num; i++){
        if(isPrime(i)){
            array.push(i);
        }
    }

    function isPrime(numPrime){
        let prime = false;
        for(let j = 2; j < numPrime; j++){
            if(numPrime % j === 0){
                prime = false; 
                break;
            }else {
                prime = true;
            }
        }

        return prime;
    }

    console.log(array);
}


findNumbersPrime(25)