
function sort(arr){
    if(arr.length ==1){
        return arr
    }
    let tmp = arr[arr.length-1];
       arr.pop();
       sort(arr);
    insert(arr,tmp);
}
function insert(arr,tmp){
    if(arr.length ===0 || arr[arr.length-1] <= tmp){
        arr.push(tmp);
        return
    }
    let val = arr[arr.length-1];
        arr.pop(); 
        insert(arr,tmp)
        arr.push(val);
        return 
}
console.log(sort([2,5,100,6,85,12,45]));