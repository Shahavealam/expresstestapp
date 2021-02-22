/*Q1. Write a function void print MATCHFormatString(string sentence1,string sentence2){}

   Sentence 1: How are you david?

   Sentence 2: David you may ea.

   Now you have to remove '.','?',' ','!' from both sentences and print out the matching substring in both         sentences 
*/
function matchingString(str1, str2){
        let regExp = /[^a-zA-z ]/gi;
        let strChar1 = str1.replace(regExp,'');
        let strChar2 = str2.replace(regExp,'');
        let strArr1 = strChar1.split(' ');
        let strArr2 = strChar2.split(' ');
        let commonStr = [];
        for(let i=0;i<strArr1.length;i++){
            for(let j=0;j<strArr2.length;j++){
                if(strArr1[i].toLowerCase() == strArr2[j].toLowerCase()){
                    commonStr.push(strArr1[i]);
                }
            }
        }
        return commonStr.join(' ')
}
let str1 = 'How are you david?';
let str2 = 'David you may ea.';
//console.log(matchingString(str1,str2));

/*
Q2. Write A Function Such That String
     INPUT: s="[abc]"

     a)  OUTPUT:TRUE s="{abc}"
     b)  OUTPUT:TRUE s="[{abc]"
     c)  OUTPUT:False s="[(abc])"
     d)  OUTPUT:False
    Hence you have to construct a function that makes pair of round brackets,square brackets,curly brackets.
    Here closing of bracket must be in same order.
*/
function pairOfBrackets(str){
        let stack = [];
        let len = str.length;
        for(let i=0;i<len;i++){
            stack.push(str[i]);
        }
        let firstBracket = stack.shift();
        let lastBracket = stack.pop();
        if(firstBracket == '[' && lastBracket == ']'){
            return true;
        }
        else if(firstBracket == '(' && lastBracket == ')'){
            return true;
        }
        else if(firstBracket == '{' && lastBracket == '}'){
            return true;
        }
        else{
            return false;
        }
}
//console.log(pairOfBrackets("[(abc])"));
 
/*
Q3. int arr[]={2,2,2,3,3,5,6,7,8} Sorted Array Was Given You Have To construct

    Function int[] RemoveDuplicate(int [] );

    such that arr[] becomes {2,3,5,6,7,8}
*/
function removeDuplicate(arr){
    return [...new Set(arr)];
}
//console.log(removeDuplicate([2,2,2,3,3,5,6,7,8]));
