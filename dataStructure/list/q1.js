function List(){
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    this.append = append;
    this.insertGreaterElement = insertGreaterElement;
    this.findMaxElementPos = findMaxElementPos;
    this.characterCode = characterCode;
    //this.remove = remove;
    this.clear = clear;
    this.displayList = displayList;
    this.length = length;
}

function append(element){
        this.dataStore[this.listSize++] = element;
}

function insertGreaterElement(element){
        let max = this.findMaxElementPos();
        if(element > max){
            this.dataStore.splice(this.dataStore.indexOf(max)+1,0,element);
            this.listSize++;
            return true;
        } else {
            return false;
        } 
}
function findMaxElementPos(){
    //------max array
    this.dataStore.sort((a,b)=>a-b);
    let max = Math.max(...this.dataStore); 
    return max;
}
function length(){
    return listSize;
}

function displayList(){
    return this.dataStore;
}
function characterCode(element){
    let elementCharCode = element.charCodeAt();
    for(let i=0;i<this.dataStore.length-1;i++){
        let charCode = this.dataStore[i].charCodeAt();
        if(elementCharCode < charCode && i==0){
            this.dataStore.splice(i+1,0,element);
        }
    }
}

function clear(){
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = 0;
}
let newList = new List();
newList.append('B');
newList.append('C');
//console.log(newList.displayList());
//console.log(newList.insertGreaterElement(4));
console.log(newList.displayList());
newList.characterCode('A');
console.log(newList.displayList());
console.log(newList.clear())
console.log(newList.displayList())