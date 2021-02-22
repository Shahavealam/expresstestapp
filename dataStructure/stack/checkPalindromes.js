let Stack = require('./stack.js');
let s = new Stack();

//-------Check String Is palindrome
function palindrome(str){
    for(let i=0;i<str.length;i++){
        s.push(str[i]);
    }
    let reverseStr = '';
    while(s.length()>0){
        reverseStr +=s.pop();
    }
    if(str == reverseStr){
        return true;
    }else {
        return false;
    }
}
console.log(palindrome('100011'));