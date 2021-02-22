/*
Q1.
    There is a magic square matrix in such a way that sum of a column or a row are same like
    3	5	2
    4	3	3
    3	2	5
    sum of each column and row  is 10.

you have to check that matrix is magic matrix or not?
*/
function magicSquare(){
    let m = [
            [3,5,2],
            [4,3,3],
            [3,2,5]
        ]
        let magicSquare = true;
        let diagonalSum = 0;
        let secondDiagonal = 0;
    for(let i=0;i<3;i++){
        let rowSum = 0;
        let colSum = 0;
        diagonalSum += m[i][i];
        secondDiagonal += m[i][3-i-1];
        for(let j=0; j< 3; j++){
            rowSum += m[i][j];
            colSum += m[j][i];
        }
        if(rowSum !== colSum){
            magicSquare = false;
            break;
        }
    }
    if(magicSquare){
        if(diagonalSum !== secondDiagonal){
            magicSquare = false;
        }
    }
    return magicSquare?'Yes':'No'; 
}
console.log(magicSquare());

/*
Q2.
    you have to implement a 2 dimensional array by one dimentional array.
 */


 /*   
Q3.
you have to make a middle node of doubly linklist to the top of the list.
    There are 100 students in a class. The management keep information in two tables. Those two tables are given like
        Roll no	Name	Age
        001	ABC	15
        002	XYZ	14
        and

        Roll No	Subject	Marks
        001	Math	75
        001	Physics	55
        002	Math	68
        001	Hindi	69

        They want the information like this  
        
        Roll No	Name	Hindi	Physics	Math	Total
        001	ABC	69	55	75	199
        002	XYZ	68	74	84	226
        
        And  
        
        Roll No	Suject	Highest
        001	Math	98
        007	Physics	84
        021	Hindi	74
        All	275
        
        All information is kept in structure in main memory.
        You have to find last two tables.
*/
/*
    Q4. A Class Structure was given with function names only.
    Using one dimensional array make the fuctionality of two dimensional array?
    We have to write the function body and the main program which calls them. the function attributes and return type was given. some already defined variables were also there.
*/

/*
Q5. If employee B is the boss of A and C is the boss of B and D is the boss of C and E is the boss of D.
Then write a program using the Database such that if an employee name is Asked to Display it also display his bosses with his name.
For eg. If C is displayed it should also display D and E with C?
*/
/*
Q6. Arrange Doubly linked list in the ascending order of its integral value and replace integer 5 with 7?
*/