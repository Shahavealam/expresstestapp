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
    shellSort(){
        let arr = this.dataStore;
        let gaps = [5,3,1];
        //------loop for gaps
        for(let g = 0; g < gaps.length; g++) {
            //-----loops for distant/ picking elements 
            for(let i = gaps[g]; i< arr.length; i++) {
                let temp = arr[i];
                //----loop for swapping 
                for(var j = i; (j >= gaps[g] && arr[j-gaps[g]] > temp); j -= gaps[g]){
                        arr[j] = arr[j-gaps[g]];
                }
                arr[j] = temp;
            }
        }
    }

    //------shell sort with dynamic gap 

    dynamicshellSort(){
        let arr = this.dataStore;
        let n  = arr.length;
        let h = 1;
        while(h < n/3){
            h = 3*h +1;
        }
        //------loop for gaps
        while(h>=1) {
            //-----loops for distant/ picking elements 
            for(let i = h; i< n; i++) {
                let temp = arr[i];
                //----loop for swapping 
                for(var j = i; (j >= h && arr[j-h] > temp); j -= h){
                        arr[j] = arr[j-h];
                }
                arr[j] = temp;
            }
            h = (h-1)/3;
        }
    }
}

let arr = new CArray(10);
arr.setData();
arr.toString()
//console.log('Bubble Sort');
//arr.bubbleSort();
//console.log('Selection Sort');
//arr.selectionSort();
console.log('Shell Sort');
//arr.shellSort();
arr.dynamicshellSort();
arr.toString();