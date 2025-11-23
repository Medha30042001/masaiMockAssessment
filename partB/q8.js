let nums = [10, 3, 7, 20, 13, 2];

function isPrime(p){
    if(p <=1) return false;
    for(let i=2; i<=Math.sqrt(p); i++){
        if(p%i===0) return false;
    }
    return true;
}

let mapArr = nums.map(n => n*n);
console.log(mapArr);
let filterArr = nums.filter(n => isPrime(n));
console.log(filterArr);
let reduceArr = nums.reduce((sum, n)=>sum+n, 0);
console.log(reduceArr);
console.log(nums.sort((a, b)=>(b-a)));