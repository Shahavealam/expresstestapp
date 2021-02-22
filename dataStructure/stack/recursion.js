let Stack = require('./stack.js');
let s = new Stack();
//-----factorial recursion function without stack
function factorial(n){
    if(n==0){
        return 1;
    } else {
        return n * factorial(n-1);
    }
}
//console.log(factorial(5));
// function fabonacci(n){
//     if(n<2){
//         return n;
//     }else {
//         return fabonacci(n-1)+fabonacci(n-2);
//     }
// }
// for(let i=0;i<10;i++){
//     console.log(fabonacci(i));
// }

//-----factorial function with stack
function factorial(n) {
    if(n==0){
        return 1;
    } else {
        while( n > 1){
            s.push(n--);
        }
    }
    //convert to factorial
    let product = 1;
    while(s.length()>0){
        product *= s.pop();
    }
    return product;
}
//console.log(factorial(5));


