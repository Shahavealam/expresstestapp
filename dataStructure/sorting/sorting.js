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
    swap(arr,i,j){
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    bubbleSort(){
        let arr = this.dataStore;
        for(let i=0;i< arr.length;i++){
            for(let j =i+1; j< arr.length;j++){
                if(arr[i]>arr[j]){
                    this.swap(arr,i,j);
                }
            }
        }
    }
    selectionSort(){
        let arr = this.dataStore;
        for(let i=0;i< arr.length;i++){
            let min = i;
            for(let j =i+1; j< arr.length;j++){
                if( arr[j] < arr[min]) {
                    min = j;
                }
            }
            if(min !== i){
                this.swap(arr,i,min)
            }
        }
    }
    insertionSort(){
        let arr = this.dataStore;
        for(let i=1; i< arr.length;i++){
            let curr = arr[i];
            let j = i-1;
            while(j>=0 && arr[j] >= curr){
                arr[j+1] = arr[j];
                j--;
            }
            arr[j+1] = curr;
        }
    }
}

let arr = new CArray(1000);
arr.setData();
arr.toString()
//console.log('Bubble Sort');
//arr.bubbleSort();
//console.log('Selection Sort');
//arr.selectionSort();
console.log('Insertion Sort');
arr.insertionSort();
arr.toString();