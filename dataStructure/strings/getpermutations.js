function  getPermutation(str){
    let result = [];
    let len = str.length;
    if(len ===1 ){
        result.push(str);
        return result;
    }else {
        for(let i=0;i<len;i++){
            let firstChar = str[i];
            let otherChar = '';
            for(let j=0;j<len;j++){
                if(firstChar != str[j] ){
                    otherChar += str[j];
                }
            }
            // let otherChar = str.substring(0,i) + str.substring(i+1);
            let otherPermutation = getPermutation(otherChar);
            for(let k=0; k<otherPermutation.length; k++){
                let subRes = firstChar + otherPermutation[k];
                result.push(subRes);
            }
        }
    }
    return result;
}

//console.log(getPermutation('ABC'));
let str = "ABC";
console.log(str.substr(0,1), str.substring(0,1));
console.log(str.substr(0,2), str.substring(0,2));
console.log(str.substr(2,2), str.substring(2,2));
console.log(str.substr(2,1), str.substring(2,1));
console.log(str.substring(0,1),str.substring(1+1));



