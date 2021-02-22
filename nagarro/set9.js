let fs  = require('fs');


/*
    Q1 : Given two file paths inputFilePath and outputFilePath, write a function void Remove Comments(char inputFilePath[], char outputFilePath[]) such that the contents of file referred by inputFilePath are copied to the file
    given by outputFilePath after removing the comments. In other words, first file contains a C program which should be copied to the second file excluding the comments.
*/
function removeCommentFromFile(source, destination){
    let readFile  = fs.readFileSync(source,'UTF-8');
    let textAfterCommnetRemoved = readFile.replace(/\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\//g,'');
    let finalText = textAfterCommnetRemoved.replace(/\/\/.*/g,'');
    let writeFile = fs.writeFileSync(destination,finalText)
}
removeCommentFromFile('./data/set9.js','./data/writeFile.js');



/*
    Q2: Define a function int[] reverse(int a[], int n) to reverse the first n elements of the integer array a. 
    Eg reverse([2,5,3,4], 3) should give output [3,5,2,4]
    Use constant memory and O(n) complexity.

    
    Q1) an array was given like
        a[]={1,2,3,4,5,6}
        int N=4,
        now write a function name reverse (a[],n)

        so that it will reverse the given array in constant memory, in order of o(n)...
        
        so that resulting array will be 
        
        a[] = {4,3,2,1,5,6}

*/
function reverseArrToPosition(arr,k) {
    let partArr = arr.splice(0,k);
    let remArr = arr;
    let revArr = partArr.reverse();
    return [...revArr,...remArr];
}
//console.log(reverseArrToPosition([2,5,3,4],3));

/*
    Q3 : Write a function char[] GenerateNextDate(char[]) such that if a date of the format "23Jan2012" is input, the next date should be produced.
    Eg :    Input - "12Dec1987"
            Output - "13Dec1987"
            Please remember the input and output are both strings.
*/
function GenerateNextDate(str) {
    let d = new Date(str);
    let nextDate = d.getDate() + 1;
    let month = d.toLocaleString('default', { month: 'short' });
    let year = d.getFullYear();
    let fullDaate = nextDate + month + year;
    return fullDaate; 
}
//console.log(GenerateNextDate('12Dec1987'));

/*
Q4: 
    To print 
    1 2 3 4 5
    2 1 2 3 4
    3 2 1 2 3
    4 3 2 1 2
    5 4 3 2 1
*/

/*
Q5: Given an array, separate positives and negatives. 
    For eg. Input array - [9,4,-3,-2,1,-1,5,7,-9,-5]
    Output array – [9,4,1,5,7,-3,-2,-1,-9,-5]
Q3) Last question is an array is given containing -ve and +ve values we have to sort the array such that all the negative number will come to left hand side and all the positive number will come right hand side of the array.
*/
function sepratePositiveNegative(arr){
        let negArr = [];
        let posArr = [];
        for(let i=0; i<arr.length; i++){
            if(arr[i]>0){
                posArr.push(arr[i])
            }else{
                negArr.push(arr[i]);
            }
        }
    return [...posArr,...negArr];
}
//console.log(sepratePositiveNegative([9,4,-3,-2,1,-1,5,7,-9,-5]))
/*
 Q6. Sort an Array positive and negative numbers
    var nums = [10, 5, 40, 25, -3412,4212, -107.578, 97.453];
*/
let nums = [10, 5, 40, 25, -3412,4212, -107.578, 97.453];
function sortNumber(a, b){
   return a - b;
}
//console.log(nums.sort(sortNumber));