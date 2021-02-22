function grades(){
    this.dataStore = [];
    this.add = add;
    this.average = average;
}

function add (item){
    this.dataStore.push(item);
}
function average(){
    let total = 0;
    let average = 0;
    for(let i=0;i<this.dataStore.length;i++){
        total += this.dataStore[i];
    }
    average = total/this.dataStore.length;
    return average;
}

let gradObject = new grades();
gradObject.add(1);
gradObject.add(3);
gradObject.add(5);
gradObject.add(6);
gradObject.add(7);
console.log('get Average: '+ gradObject.average());



