function List(){
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    this.append = append;
    //this.insertGreaterElement = insertGreaterElement;
    //this.findMaxElementPos = findMaxElementPos;
    //this.characterCode = characterCode;
    //this.remove = remove;
    this.displayEqualAgeList = displayEqualAgeList;
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
let personList = new List();
function Person (name,gender){
    this.name = name;
    this.gender = gender;
}
let personArr = [{ name: 'a', gender: 2 },{ name: 'b',gender: 3},{name: 'c',gender: 2},{name: 'd',gender: 2},{name: 'e',gender: 5},{name: 'f',gender: 10}];
for(let i=0;i<personArr.length;i++){
        let name = personArr[i].name;
        let gender = personArr[i].gender;
        var p = new Person(name,gender);
        personList.append(p);
}

function displayEqualAgeList() {
        let filterArr = this.dataStore.filter((item)=>{
            if(item.gender === 2){
                return item;
            }
        })
        return filterArr;
}
console.log(personList.displayList());
console.log(personList.displayEqualAgeList());