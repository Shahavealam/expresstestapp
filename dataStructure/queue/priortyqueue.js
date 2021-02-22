'use strict'
let fs = require('fs');
function Queue(){
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.empty = empty;
    this.length = length;
    this.front = front;
    this.end = end;
    this.toString = toString;
   // this.count = count;
}

function enqueue(element){
    this.dataStore.push(element);
}

function dequeue(){
    let priority = this.dataStore[0].code;
    for(let i=1;i < this.dataStore.length;i++){
        if(this.dataStore[i].code < priority){
            priority = i;
        }
    }
    return this.dataStore.splice(priority,1);
}

function empty(){
    if(this.dataStore.length ===0){
        return true;
    }
    return false;
}

function length(){
    return this.dataStore.length;
}

function front(){
    return this.dataStore[0];
}

function end(){
    return this.dataStore[this.dataStore.length-1];
}

function toString(){
    let retStr = '';
    for(let i=0;i< this.dataStore.length;i++){
        retStr += this.dataStore[i].name + " Code :"+ this.dataStore[i].code; 
    }
    return retStr;
}

function Patient(name,code){
    this.name = name;
    this.code = code;
}

let ed = new Queue();
var p = new Patient('Smith',5);
ed.enqueue(p);
var p = new Patient('Jones',4);
ed.enqueue(p);
var p = new Patient('Farenbach',5);
ed.enqueue(p);
var p = new Patient('Ingram',1);
ed.enqueue(p);

console.log(ed.toString());

let seen = ed.dequeue();
console.log('Patient being treated: '+seen[0].name);
console.log('Patient waiting to be seen');
console.log(ed.toString());

