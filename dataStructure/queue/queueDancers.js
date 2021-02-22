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
    this.count = count;
}

function enqueue(element){
    this.dataStore.push(element);
}

function dequeue(){
    return this.dataStore.shift();
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
    return this.dataStore;
}

function count(){
    return this.dataStore.length;
}

//dancer object
function Dancer(name, sex){
    this.name = name;
    this.sex = sex;
}

function read(filename){
    let fileContents = fs.readFileSync(filename,'UTF-8');
    return fileContents.split('\n');
}

function getDancers(maleDancer,femaleDancer){
    let names = read('./dancer.txt');
    for(let i=0;i<names.length;i++){
        names[i] = names[i].trim();
    }
    for(let i=0;i<names.length;i++){
        let dancer = names[i].split(' ');
        let name = dancer[1];
        let sex = dancer[0];
        if(sex === 'M'){
            maleDancer.enqueue(new Dancer(name, sex))
        }else {
            femaleDancer.enqueue(new Dancer(name, sex))
        }    
    }    
}

function dance(males,females){
    console.log('Dance Partners are :');
    while(!females.empty() && !males.empty()) {
         let person = females.dequeue();
         let male = males.dequeue();
        console.log(`Female dancer is : ${person.name} and male dancer is: ${male.name}`);
    }
}
let maleDancer = new Queue();
let femaleDancer = new Queue();

getDancers(maleDancer,femaleDancer);
dance(maleDancer,femaleDancer);

if(!maleDancer.empty()){
    console.log(`${maleDancer.front().name} is waiting to dance`);
}
if(!femaleDancer.empty()){
    console.log(`${femaleDancer.front().name} is waiting to dance`);
}

if(maleDancer.count()>0){
    console.log(` Male dancer ${maleDancer.count()} is waiting to dance`);
}

if(femaleDancer.count()>0){
    console.log(` Female dancer ${femaleDancer.count()} is waiting to dance`);
}