/*
Understanding the Logic Behind Merge Sort
Merge sort uses the concept of divide-and-conquer to sort the given list of elements. It breaks down the problem into smaller subproblems until they become simple enough to solve directly.

Here are the steps Merge Sort takes:

1. Split the given list into two halves (roughly equal halves in case of a list with an odd number of elements).

2. Continue dividing the subarrays in the same manner until you are left with only single element arrays.

3. Starting with the single element arrays, merge the subarrays so that each merged subarray is sorted.

4. Repeat step 3 unit with end up with a single sorted array.

Let's take a look at how Merge Sort works on an array such as [4, 8, 7, 2, 11, 1, 3]:

*/

class CArray {
    constructor(n){
        this.dataStore = [];
        this.numsElements = n;
        this.pos = 0;
    }
    setData() {
        let min = 1;
        let max = this.numsElements;
        for(let i=0;i < max;i++){
            this.dataStore[i] = Math.floor(Math.random() * max)+1;
            this.pos++;
        }
    }
    toString(){
        let result = ' ';
        for(let i=0; i<this.dataStore.length; i++){
            result += this.dataStore[i]+' ';
        }
        console.log(result);
    }
    mergeSort(arr){
        let half = Math.floor((arr.length/2));
            //base case / terminating condition
            if(arr.length < 2){
                return arr;
            }
        //-----split array with splice 0 to half is left array and remainning will be right array 
        let left = arr.splice(0,half);
        let right =  arr;
        return this.merge(this.mergeSort(left),this.mergeSort(right));
    }

    merge(leftArr, rightArr){
        let arr = [];
        // loop it to until one them goes to empty
        while(leftArr.length > 0 && rightArr.length > 0){
            // Pick the smaller among the smallest element of left and right sub arrays
            if(leftArr[0] < rightArr[0]){
                // get first item from left Arr
                let leftItem = leftArr.shift();
                // push item to final array
                arr.push(leftItem);   
            }else {
                let rightItem = rightArr.shift();
                arr.push(rightItem);
            }
        }
        // Concatenating the leftover elements
        // (in case we didn't go through the entire left or right array)
        return [...arr, ...leftArr, ...rightArr];
    }
}

let arr = new CArray(10);
arr.setData();
console.log('Merge Sort'+ arr);
let arrNew = [4,7,2,4,3,8,10,7,4,9];
console.log(arrNew);
console.log(arr.mergeSort(arrNew));
//arr.toString();