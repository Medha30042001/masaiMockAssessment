function sumAll(...num){
    let sum=0;
    for(let n of num){
        sum+=n;
    }
    return sum;
}

console.log(sumAll(1, 2, 3, 4));