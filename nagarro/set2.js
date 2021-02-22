
/*
2011 Nagarro Placement Paper:-


1. Write a program to check whether 2 strings given by the user are anagram strings or not.

    For example:

    str1: Are you engineer.
    str2: You are engineer.

    Output: yes

    str1: Am i fine.
    str2: I'm fine.

    Output: No

    str1: Am i fine.
    str2: I am fire.

    Output: No
*/

/*
2. Write a program to find out the combination of an element of each array gives a result 0.

    For example: 

    array 1: {2,1,4,7}
    array 1: {3,-3,-8,0}
    array 1: {-1,-4,-7,6}


    Output:

    pairs =

    {2,-8,6}
    {1,3,-4}
    {4,-3,-1}
    {7,0,-7}

*/

/*
3. Write a program to get the subsequence of a bit 1 and 0 given in a array of bits.

    For example:

    array={1,0,1,1,0,1,1}

    Output={1,0,1,0}

    array={1,1,0,1,0,0,1,1}

    Output={1,1,0,1,0,0}

*/


/*
4. Write a program to get the first non repeating alphabet from the given string by the user

        For example:

        string = abcba

        Output : c

        string = abcdecbae

        Output : d

        string =naveen

        Output : a
*/
/*
Q:-5 
    find the all possible combination of digits ranging 1 to 9 whose sum is 10,
        no digit shud be repeated in any combination.
    1234
    127
    136
    145
    19
    235
    28
    37
    46
*/
function getCombination(arr,k){
    let subsets = [[]];
    for(let el of arr){
        let last = subsets.length-1;
       // console.log(last,subsets);
        for(let j=0;j<=last;j++){
            subsets.push([...subsets[j],el]);
        }
    }
    let newArr = [];
    for(let i=0; i<subsets.length; i++){
        if(subsets[i].length > 1){
           let sum = subsets[i].reduce((acc,value)=>acc + value);
            if(sum === k){
                newArr.push(subsets[i]);
            }
        }
    }
    console.log(newArr);
    //return subsets;
}
getCombination([1,2,3,4,5,6,7,8,9],10);
/*
Q:-6 
    if there is a matrix A[][] of order m and another matrix B[][] of order n such that (m>n) you have to find the occurance of matrix B[][] in matrix A[][].
        A[5][5]=1,2,3,4,5
        5,4,1,9,7 
        2,1,7,3,4
        6,4,8,2,7
        0,2,4,5,8
        B[3][3]=1,9,7
        7,3,4
        8,2,7
        this matriix B exist in A
*/
/*
Q:-7 
    Take an array of 100 elements and fill it with the no 1 to 100 such that
    one no shud skip and one no shud repeated. Find the no which is repeated and
    which is skipped.
*/

/*
Q8. Write a program to check whether 2 strings given by the user are anagram strings or not.
        An anagram of a string is another string that contains the same characters, 
        only the order of characters can be different. 
        For example, “abcd” and “dabc” are an anagram of each other

        For example:

        str1: Are you engineer.
        str2: You are engineer.

        Output: yes

        str1: Am i fine.
        str2: I'm fine.

        Output: No

        str1: Am i fine.
        str2: I am fire.

        Output: No
    
*/
function checkAnagram(str1,str2){
    let arr1 = str1.split(' ');
    let arr2 = str2.split(' ');
    //console.log(arr1,arr2);
    let len  = arr1.length;
    let count = 0;
    for(let i =0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i].toLowerCase() === arr2[j].toLowerCase()){
                count++;
            }
        }
    }
    if(len === count){
        return 'Yes';
    }
    return 'No';
}
//console.log(checkAnagram('Are you engineer','You are engineer'));

/*
    Q9. Write a program to find out the combination of an element of each array gives a result 0.

        For example: 

        array 1: {2,1,4,7}
        array 1: {3,-3,-8,0}
        array 1: {-1,-4,-7,6}


        Output:

        pairs =

        {2,-8,6}
        {1,3,-4}
        {4,-3,-1}
        {7,0,-7}
*/
function pairsofCombinations(arr1,arr2,arr3){
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            for(let k=0;k<arr3.length;k++){
                if((arr1[i]+arr2[j]+arr3[k]) === 0){
                    console.log('{',arr1[i],',',arr2[j],',',arr3[k],'}');
                }
            }
        }
    }
}
//pairsofCombinations([2,1,4,7],[3,-3,-8,0],[-1,-4,-7,6]);

/*

Q10. Write a program to get the subsequence of a bit 1 and 0 given in a array of bits.

        For example:

        array={1,0,1,1,0,1,1}

        Output={1,0,1,0}

        array={1,1,0,1,0,0,1,1}

        Output={1,1,0,1,0,0}


*/

/*
Q11. 
    Write a program to get the first non repeating alphabet from the given string by the user

            For example:

            string = abcba

            Output : c

            string = abcdecbae

            Output : d

            string =naveen

            Output : a

    -----------------------------------------
*/
function nonRepeatingChar(str){
    for(let i=0;i<str.length;i++){
        let count = 0;
        for(let j=0;j<str.length;j++){
            if(str[i] == str[j]){
                count++
            }
        }
        if(count == 1){
            console.log(count,str[i]);
        }
    }
}
//nonRepeatingChar('abcdecbae');

/*
12)
    Seat Planing 
        Write a function for seat allocate and seat reserved.
        Seat allocate array and seat reserver array.
        Seatallocate array is of 10*20 and each row and column represent A1,A2....;B1,B2.....;........J1,J2... and 
        so on i.e row are A to J whereas col starts from 0 to 19.
        Each cell in the table represent either 0 or 1. 0 rep seat available , 1 repr seat reserved. 
        Seat allocation starts from highest to lowest. And row j is highest, i is second highest and so on.
        Max 20 seats can be booked at a time. 
        if seat is available print the seat no like "B2" i.e (2 row, 3 col) and seat is booked.
        " otherwise Print "Seat is not available." 
*/
/*
13) 
    A string of charater is given. Find the highest occurance of a character and display that character.
        eg.: INPUT: AEGBCNAVNEETGUPTAEDAGPE
            OUTPUT:
                E
                or 
                I,J(if equal occurance) 
  */
 function highestRepeatingChar(str){
    let maxOcc = 0;
    let pos;
    for(let i=0;i<str.length;i++){
        let count = 0;
        for(let j=i+1;j<str.length;j++){
            if(str[i] == str[j]){
                count++
            }
        }
        if(maxOcc < count){
            maxOcc = count;
            pos = i;
        }
        
    }
    console.log(str[pos]);
}
//highestRepeatingChar('AEGBCNAVNEETGUPTAEDAGPE');
/*
14)
    Remove all the blank spaces between character. Matrix is of 10* 10.
        eg: INPUT
        ------------------------------------
        | N | A | | V | |T
        -------------------------------------
        | |G | U | |P |
        --------------------------------------
        |T | | | A | |
        ------------------------------------ 
    OUTPUT:

            ------------------------------------
            | N | A | V | T | |
            -------------------------------------
            |G |U | P | | |
            --------------------------------------
            |T | A | | | |
            ------------------------------------ 
*/
/*
15)
    write a function to give demostrate the functionality of 3d in 1d. function prototye:
    change(int value,int indexX,int indexY,int indexZ, int [] 1dArray); 
    value=what is the date; indexX=x-asix indexY=y-axis indexZ=z-axis and 1dArray=in which and where
    the value is stored. 

*/

/*
Q.16 
    A string of charater is given. Find the Continous Occurance of a character and display that
    character.
        eg.: INPUT: AAAAAAEGBCNAVNEETGUPTAEDAGPE
            OUTPUT:
            A or if Same then A and D. 
*/
/*
Q.17 
    One question was base on Hash Table related Teacher, Their topic,in A 20 days Period. 
*/

/*
Q.18 
    Based on link list where one pointer Point the Next Node and Second Show their Sub Node. 
    To write a Fuction Which Return the largest integer Value. 
*/
/*
Q19.  
    a function input(int[] array) was given and we had to enter any number and the entered no./should convert into absolute no like 4578, 6789 , 1234 etc means the no should convert into/incresing nos.
*/

/*
Q20. 
    A mXn matrix was given and rows and coloumn were sorted as shown below then we had to/write a function that search a desired entered no in the matrix .with minimum complexity
        1 2 3 4
        5 6 7 8
        9 10 11 12
        13 14 15 16
*/
/*
    Q21.
        There is a array of 99 cells and we have to enter 1-100 elements in it , no two elements wouldrepeat , so the is one no. missing because 99 cells and 1-100 nos. sowe had to implement a function to find that missing no
*/