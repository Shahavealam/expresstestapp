/*
Q1)
        Seat Reservation prog for the theatre. Write a function for seat allocation for the movie tickets. Total no of seats available are 200. 20 in each row. Each row is referred by the Character, "A" for the first row and 'J' for the last. And each seat in a row is represented by the no. 1-20. So seat in diffrent rows would be represented as A1,A2....;B1,B2.....;........J1,J2... Each cell in the table represent either 0 or 1. 0 rep would seat is available , 1 would represent seat is reserved.
        Booking should start from the last row (J) to the first row(A). At the max 20 seats can be booked at a time. if seats are available, then print all the seat nos like "B2" i.e (2 row, 3 col) otherwise Print "Seats are not available." and we must book consecutive seats only.
*/



/*
2) A string of charaters were given. Find the highest occurance of a character and display that character.
        eg.: INPUT: AEGBCNAVNEETGUPTAEDAGPE
        OUTPUT: E
*/
function findHighestOccurenceCharacter(str) {
        let maxCount = 0;
        let maxOccurenceChar;
        for(let i=0; i<str.length; i++){
                let count = 0;
                let chosenChar = str[i];
            for(let j=0; j<str.length; j++){
                if(chosenChar === str[j]){
                    count++;
                }
            }
            if(maxCount < count){
                maxCount = count;
                maxOccurenceChar = chosenChar;
            }
        }
    return { maxCount : maxCount, maxOccurenceChar: maxOccurenceChar };
}
//console.log(findHighestOccurenceCharacter("AEGBCNAVNEETGUPTAEDAGPE"));

/*
3) Int Matrix of certain size was given, We had few values in it like this.

    1, 4, 5
    45, 3, 3
    5, 4, 34
    3, 3, 12
    3, 3, 4
    3, 3, 3
    4, 4, 3

    We were supposed to move back all the spaces in it at the end.
    Note: If implemented this prog using recursion, would get higher preference.
*/
/*
4) write a function to give demostrate the functionality of 3D matrix in 1D matirx. function prototye: void set (int value,int indexX,int indexY,int indexZ, int [] 1dArray);
void get (int value,int indexX,int indexY,int indexZ, int [] 1dArray);
*/

/*
5. A chessboard was given to us. Where in there was a Knight and King was placed on certain positions. Our aim is to reach the king from the knight in minimum no of counts.As we know, knight can either move 2 steps vertical/horizontal and 1 step horizontal/vertical. same goes here as well. Proper image of the chess board was given in the question paper, and all the positions(max 8) were given that knight can take in the first step. Sol : Most of us implemented using recursive func.
*/

/*
6. Struct person {
    char * name;
    person[] friends;
    };

    We were given the networklist of friends. Each has set of friends which was unidirectional i.e, if you are my frnd, then i may or may not be in ur frnds list. okie. Network was like this:

    Amit - ->Rahul -> Aman -> kumar
    Rahul- ->Vipin->Ankit->Reena->kumar
    Kumar- ->Rahul->Reena->Tanmay
    We need to identify whether 1st person being passed is a frnd of another person or not. Frnds can be frnd's friend also and so on. And we need to identify the distance. for example

    Input: Amit, Kumar
    Output Distance 1
    Input Amit, Tanmay
    Output: Distance 2
    Input: Rahul, Aman
    Not frnds.
*/

/*
7. There was a 2D matrix given, we were supposed to sort the all diagnols elements. diagnols of Top left corner and Top right corner were to be sorted in the same matrix in an efficient way.

*/
function sortDiagonalElement(){
        let m = [
            [3,4,5],
            [1,1,7],
            [2,6,2]
        ]
        console.log('Matrix Before Diagonal Sort Elements')
        console.log(m);
        for(let i=0;i<3;i++){
               let sm = m[i][i];
            for(let j=i+1;j<3;j++){
                if(sm > m[j][j]) {
                    sm = m[j][j];
                   let temp = m[i][i];
                    m[i][i] = m[j][j];
                    m[j][j] = temp; 
                }
            }
        }
        console.log('Matrix After Sort of Diagonal Elements');
        console.log(m);
}
//sortDiagonalElement();

/*
8. We need to write the function to check the password entered is correct or not based on the following conditions..
    a) It must have atleast one lower case character and one digit.
    b) It must not have any Upper case characters and any special characters
    c) length should be b/w 5-12.
    d) It should not have any same immediate patterns like
    abcanan1 : not acceptable coz of an an pattern
    abc11se: not acceptable, coz of pattern 11
    123sd123 : acceptable, as not immediate pattern
    adfasdsdf : not acceptable, as no digits
    Aasdfasd12: not acceptable, as have uppercase character 
*/
function checkPassword(str){
        let acceptable = true;
        let message;
        let specialCharandUpperCaseformat = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~A-Z]/;
        let checkCharandNumber = /[a-z0-9]/
        if(str.length >= 5 && str.length <= 12){
            //check Upper Case and Special Character
            if(specialCharandUpperCaseformat.test(str)){
                acceptable = false;
                message = 'Password Contains UpperCase and Special Character';    
            }
            //check the password constain only lowercase and number
            else if(checkCharandNumber.test(str)) {
                //check for two consecutives are equal
                for(let i=0; i<str.length; i++){
                    let char = str.slice(i,i+2);
                    let nextTwoChar = str.slice(i+2,i+4);  
                        if(str[i] === str[i+1]){
                            acceptable = false;
                            message = 'Two Characters are repeated';
                            break;
                        }else if(char === nextTwoChar){
                            acceptable = false;
                            message = 'Next Two Characters are repeated';
                            break;
                        }
                }
            }else{
                    //Password Does not contain digits
                    acceptable = false;
                    message = 'Password does not contain digits'
            }
        }else{
            acceptable = false;
            message = 'Password length does not satisfied';
        }
        return (acceptable?console.log(`${str} === Acceptable`) : console.log(`${str} === Not Acceptable because of ${message}`));
}
console.log(checkPassword('adfasdsdf'));


