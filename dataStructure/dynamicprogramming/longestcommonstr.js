//Using Dynamic Programming
function lcs(str1, str2) {
    let n1 = str1.length;
    let n2 = str2.length;
    let max = 0;
    let index = 0;
    let lcsArr = new Array(n1);
    for(let i=0;i<=n1;i++){
        lcsArr[i] = new Array(n2);
        for(let j=0;j<n2;j++){
            lcsArr[i][j] = 0; 
        }
    }
    //-----add subresult 
    for(let i=0;i<=n1;i++){
        for(let j=0;j<=n2;j++){
            if(i==0 || j==0){
                lcsArr[i][j] = 0;
            }else { 
                if(str1[i-1] === str2[j-1]){
                    lcsArr[i][j] = lcsArr[i-1][j-1]+1;
                }else {
                    lcsArr[i][j] = 0;
                } 
            }
            if(max < lcsArr[i][j]){
                max = lcsArr[i][j];
                index = i;
            }
        }
    }
    let str = '';
    if(max ===0){
        return '';
    }else {
        //console.log(index,max);
        for(let i=index-max; i<=max; i++){
            str += str2[i]; 
        }
        return str;
    }
    //console.log(max,index);
}
console.log(lcs('abbddc','dbbcc'));

//------using iterative method

// function lcsIt(str1,str2){
//     let str = '';
//     for(let i=0;i<str1.length; i++){
//         for(let j=0; j<str2.length; j++){
//             if(str1[i] === str2[j]){
//                 //str1.replace(str1[i],'');
//                 if(str1[i] !== undefined){
//                     str += str1[i];
//                 }
//                 break;
//             }
//         }
//     }
//     console.log(str);
// }
// lcsIt('abbcccc','dbbccxxxx')