function quickSort(arr){
    //---base condition
    if(arr.length == 0 ){
        return arr;
    }
    let leftArr = [];
    let rightArr = [];
    // selecting pivot is the last element from arr 
    let pivot = arr.pop();
    // Array for combining all things
    let newArr = [];
    for(let i=0;i < arr.length; i++) {   
        if(arr[i] <= pivot) {
            //pushing the elements in left array which is the less than of pivot elements 
            leftArr.push(arr[i]);
        }else {
            //pushing the elements in right array which is the greater than of pivot elements
            rightArr.push(arr[i]);
        }
    }
    //implementing the same logic on leftArr and rightArr and concatenating all of them
    let concatArr = newArr.concat(quickSort(leftArr), pivot, quickSort(rightArr))
    return concatArr;
}
let arr = [6,10,9,9,7,9,8,5,1,9];
console.log(quickSort(arr));