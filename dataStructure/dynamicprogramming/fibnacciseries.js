//1 Iterative Method 
function fibIt(n){
    let a = 0;
    let b = 1;
    let next;
    if(n==0){
        console.log(a);
    }
    if(n==1){
        console.log(b);
    }
    for(let i=2; i<=n; i++){
        next = a+b;
            a = b;
            b = next;
        //console.log(next);
    }
    return next;
}
//2 recursive Method

function fib(n){
    if(n <0){
        return 
    }
    if(n==0){
        return n;
    }
    if(n==1){
        return n;
    }
    return fib(n-1) + fib(n-2);
}
//3 Dynamic function
function dynFib(n) {
    let val  = [];
    for(let i= 0; i<= n; i++){
        val[i] = 0;
    }
    if(n==1 || n==2){
        return 1;
    }else {
        val[1] = 1;
        val[2] = 2;
        for(let i=3; i<=n; i++) {
            val[i] = val[i-1] + val[i-2];
        }
    }
    return val[n-1];
}

var start = new Date().getTime();
console.log(fib(20));
var stop = new Date().getTime();
var elapsetime = stop - start
console.log(`Recursive Func Time  ${elapsetime} milliseconds`);

var start = new Date().getTime();
console.log(fibIt(20));
var stop = new Date().getTime();
var elapsetime = stop - start
console.log(`Iterative  Func Time  ${elapsetime} milliseconds`);

var start = new Date().getTime();
console.log(dynFib(20));
var stop = new Date().getTime();
var elapsetime = stop - start
console.log(`Dynamic Func Time  ${elapsetime} milliseconds`);