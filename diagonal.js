function findDiagonalPrimary(arr){
    let num = [];
    for(let i = 0; i < arr.length; i++){
        num.push(arr[i][i]);
        console.log(num);
    }
}

function findDiagonalSecondary(arr){
    let num = [];
    let j = arr.length - 1;
    console.log(arr[2][0])
    for(let i = 0; i < arr.length; i++){
        num.push(arr[i][j]);
        j--;
        console.log(num);
    }
} 

findDiagonalSecondary([[0,1,2],[3,4,5],[6,7,8]])