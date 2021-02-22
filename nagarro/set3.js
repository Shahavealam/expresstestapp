/*
    Q1 Input an array and prints the second minimum in an array??
        Example
            Input: 34,45,21,12,54,67,15
            Output: 15
            Sol. sorts the array and then print the second minimum number of an array.
*/
function secondMin(arr){
    //----sort array using bubble sort
        for(let i=0;i<arr.length;i++){
            for(let j=0;j<arr.length;j++){
                if(arr[i] < arr[j]){
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp; 
                }
            }
        }
    return arr[1];
}
//console.log(secondMin([34,45,21,12,54,67,15]))
/*
    Q2 Input an array and then print the repeating characters??
        Example:
        Input:1,3,23,11,44,3,23,2,3.
        Output:3,23
*/
function repeatingCharacter(arr){
        let repeatedArr = [];
        for(let i=0;i<arr.length;i++){
            let count = 0;
            for(let j=0; j<arr.length; j++){
                if(arr[i] === arr[j]){
                    count = count + 1; 
                }
            }
            if(count>=2 && (repeatedArr.indexOf(arr[i])) == -1){
                repeatedArr.push(arr[i])
            }
        }
        console.log(repeatedArr)
}
//repeatingCharacter([1,3,23,11,44,3,23,2,3])

/*
    Q3 Find the longest palendrom in a string?
        Example
        Input: abfgerccdedccfgfer
        Output: ccdedcc
*/
function longestPalindrome(str){
    var arr = str.split("");
    var endArr = [];
    for(var i = 0; i < arr.length; i++){
            var temp = "";
            temp = arr[i];
        for(var j = i + 1; j < arr.length; j++){
                temp += arr[j];
            if(temp.length > 2 && temp === temp.split("").reverse().join("")){
                    endArr.push(temp);
            }
        }
    }
    let longestPalindrome = '';
    let pos = 0;
    for(let i = 0; i < endArr.length; i++){
        if(longestPalindrome < endArr[i].length){
            longestPalindrome = endArr[i];
            pos = i;
        }
    }
    return endArr[pos];
 }
 //console.log(longestPalindrome("abfgerccdedccfgfer"));
/*
    Q4 Input a number and then find the next higher number such that for both the number (inputted and the next higher number) 
    in binary representation contains equal number 0s(zeros) and 1's (ones).
        Example
        Input:3 (0000000000000011)
        Ouput:5 (0000000000000101)
*/
function nextBinaryNumberwithSameOnesandZeros(number){
        let prevCount = 0;
        let binArr  =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        //---convert number to binary number
        for(let num = number; num< 100000000; num++){
            let count = 0;
            let numberToCon = num;
            //let binaryArr = [];
            while(numberToCon !==0){
                let rem = numberToCon%2;
                if(rem === 1){
                    count++;
                }
                //binaryArr.push(rem);
                numberToCon  = Math.floor(numberToCon/2);
            }
            //console.log(prevCount,count,num);
            if(prevCount === count){
                console.log(num,count);
                break;
            }
            prevCount = count;
        }
        
}
//nextBinaryNumberwithSameOnesandZeros(3);

