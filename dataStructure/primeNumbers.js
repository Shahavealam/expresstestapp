//-----List of prime Numbers
/*
A prime number is a positive integer that is only divisible by 1 and itself. 
For example, 2, 3, 5, 7, 11 are the first few prime numbers.
*/
function primeNumber(n){
    for(let i=1;i<=n;i++){
            let flag = true;
        for(let j=2;j<i; j++){
            if(i%j == 0){
                flag = false;
                break;
            }   
        }
        if(i>1 && flag == true){
            console.log(i);
        }
    }
}
primeNumber(20);