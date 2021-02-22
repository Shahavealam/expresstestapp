


function reverseArrToPosition(arr,k) {
    let partArr = arr.splice(0,k);
    let remArr = arr;
    let revArr = partArr.reverse();
    return [...revArr,...remArr];
}



function GenerateNextDate(str) {
    let d = new Date(str);
    let nextDate = d.getDate() + 1;
    let month = d.toLocaleString('default', { month: 'short' });
    let year = d.getFullYear();
    let fullDaate = nextDate + month + year;
    return fullDaate; 
}





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


let nums = [10, 5, 40, 25, -3412,4212, -107.578, 97.453];
function sortNumber(a, b){
   return a - b;
}
