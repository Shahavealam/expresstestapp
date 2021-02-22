'use strict'
function List() {
   this.listSize = 0;
   this.pos = 0;
   this.dataStore = [];
   this.clear = clear;
   this.find = find;
   this.toString = toString;
   this.insert = insert;
   this.append = append;
   this.remove = remove;
   this.front = front;
   this.end = end;
   this.prev = prev;
   this.next = next;
   this.length = length;
   this.currPos = currPos;
   this.moveTo = moveTo;
   this.getElement = getElement;
}

function append(element) {
   this.dataStore[this.listSize++] = element;
}

function find(element) {
   for (var i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] == element) {
         return i;
      }
   }
   return -1;
}

function remove(element) {
   var foundAt = this.find(element);
   if (foundAt > -1) {
      this.dataStore.splice(foundAt,1);
      --this.listSize;
      return true;
   }
   return false;
}

function toString() {
    return this.dataStore;
}
function clear() {
    this.dataStore =[];
    this.pos = this.listSize = 0;
}
function insert(element,after){
    let foundAt = find(element);
    if(foundAt>-1){
        this.dataStore.splice(foundAt+1,0,element);
        return true;
    }else{
        return false;
    }
}

function front(){
    this.pos = 0;
}

function end(){
    this.pos = this.listSize-1;
}

function prev(){
    if(this.pos>0){
        --this.pos;
    }
}

function next(){
    if(this.pos<this.listSize-1){
        ++this.pos
    }
}

function length(){
    return this.listSize;
}

function currPos(){
    return this.pos;
}

function getElement(){
    return this.dataStore[this.pos];
}
function moveTo(position){
    this.pos = position;
}

var names = new List();
names.append("Raymond");
names.append("Barbara");

console.log(names.toString());
names.front();
console.log(names.getElement());
names.end();
console.log(names.getElement());

//names.remove("Raymond");
//console.log(names.toString());

