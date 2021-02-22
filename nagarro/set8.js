/*
    Q1. A table containing decimal nos. from 1 to 100 and their roman Equivalent was given. We were required to write a function :       char* ConverToRoman(int number)  :      to convert the given number( 1<=number<=100) into its numerical equivalent.
*/
function numberToRoman(num){
    console.log(num);
    let digitArr = [1, 4, 5, 9, 10, 40, 50, 90, 
            100, 400, 500, 900, 1000];
    let symbArr = ["I", "IV", "V", "IX", "X", "XL", 
            "L", "XC", "C", "CD", "D", "CM", "M"];
    let k  = digitArr.length-1;
    let romanNumberArr = [];
    while(num !==0 ){
        let div = Math.floor(num/digitArr[k]);
        num %= digitArr[k];
        //console.log(div, num);
        while(div !== 0){
             div -= 1;
            romanNumberArr.push(symbArr[k]);  
        }
         k -= 1;
    }
    return romanNumberArr.join('');
}
//console.log(numberToRoman(3549)) // Output MMMDXLIX

/*
    Q2. An array was given and we were required to write a function : int CalculateThirdHighest(int a[ ])   :  which calculates the third highest number in the array. While coding in C remember to calculate the length of array using formulae 
length of array=sizeof(a)/sizeof(int).   Because the number of elements of array were not passed as argument.

*/
function thirdHighestNumber(arr){
    let arrlen = arr.length;
    if(arrlen < 3){
        console.log('Array Length should be more than 3');
    }else {
        for(let i=0;i<arrlen;i++){
            for(let j=i+1;j<arrlen;j++){
                if(arr[i] > arr[j]){
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    }
    return arr[arrlen-3]
}
//console.log(thirdHighestNumber([3,1,5,6,4,7]));

/*
    Q3. Two sentences are given and we were required to print the common word in the two sentences. Words were delimited by space, full stop, ? , ! and ,   . The trick in the question was that common word should be printed only once so if ur first sentence contains two word "how" and second contains "how" then in output how should be printed only once for this u can replace each matched word in second sentence by spaces .
*/

function commonWord(str1, str2){
    let commonArr = [];
    let arr1 = str1.split(' ');
    let arr2 = str2.split(' ');
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i] === arr2[j]){
                if(!commonArr.includes(arr1[i])){
                    commonArr.push(arr1[i]);
                }
            }
        }
    }
    return commonArr.join(' ')
}
let a = "Hello world this is a string";
let b = "Hello world not like the one before";
//console.log(commonWord(a,b)) // Output Hello World
/*
    Q4. We were required to write a program to check whether the given number was of the form 3^n. ( i.e. 3 to the power n). I knew that it can be done by bit manipulation but couldn't make out the logic. so try to read some tutorial on bit manipulation or mail me on my id   :   neokool2009@gmail.com   :   will b happy to help u. and please post your papers too on this site as this can help many students like u. If u like the post mail me at this id  this is not my real id because it can create few problems from Naggaro side :). I m still waiting for the results. if i get through this then will post about next technical round and interview. Best of Luck my friends.
*/

function powerOf(base,n){
    let p =1 ;
    for(let i=1; i<= n; i++){
        p = p * base;
    }
    console.log(p);
}
//powerOf(2,3);