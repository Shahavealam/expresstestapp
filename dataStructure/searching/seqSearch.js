function sequentionalSearch(arr, data){
    for(let i=0;i<arr.length; i++){
        if(arr[i] === data){
            return i;
        }
    }
    return -1;
}

function seqSearch20Per(arr, data){
    for(let i=0;i<arr.length; i++){
        if(arr[i] === data && i > (arr.length * 0.20)){
            //swap 
            let temp = arr[i];
                arr[i] = arr[0];
                arr[0] = temp;
            return i;
        }
    }
    return -1;
}
function min(arr){
    let min = arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min; 
}
function max(arr){
    let max = arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max; 
}
let arr = [1,5,6,7,8,9,10];
//console.log(seqSearch20Per(arr,7));
//console.log(min(arr));
//console.log(max(arr));