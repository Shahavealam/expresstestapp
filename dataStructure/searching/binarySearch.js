function binarySearch(arr,data) {
    let lower = 0;
    let upper = arr.length-1;
    while(lower <= upper){
        let mid = Math.floor((lower + upper)/2);
        console.log(`Current Midpoint: ${mid}`);
        if(arr[mid] < data){
            lower = mid + 1;
        }else if (arr[mid] > data){
            upper = mid -1;
        }else {
            return mid;
        }
    }
    return -1;
}
//------arr should be sorted-----
let arr = [0,1,3,3,6,8,9];
//console.log(binarySearch(arr,3));
function count(arr, data){
    let count = 0;
    let position = binarySearch(arr,data);
    if(position > -1){
        for(let i = position; i>0; --i){
            if(arr[i] == data){
                count++;
            }else {
                break;
            }
        }
    }else {
        for(let i = position+1; i<arr.length;i++){
            if(arr[i] == data){
                count++;
            }else{
                break;
            }
        }
    }
    return count;
}
console.log(count(arr,3));
