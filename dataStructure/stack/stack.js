function Stack(){
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;
    this.clear = clear;
    this.displayStack = displayStack;
}

function push(element){
    this.dataStore[this.top++] = element;
}

function pop(){
  let pop =  this.dataStore.pop();
   --this.top; 
   return pop;
}

function peek(){
    return this.dataStore[this.top-1];
}
function length(){
    return this.top;
}
 function clear(){
     delete this.dataStore;
     this.top = 0;
     this.dataStore = [];
 }

 function displayStack(){
     return this.dataStore;
 }

 //let s = new Stack();
//  s.push(1);
//  console.log(s.displayStack());
//  console.log('length: '+ s.length());
//  s.push(2);
//  console.log(s.displayStack());
// // s.pop();
//  console.log(s.displayStack());
//  console.log(s.peek());
//  console.log('length: '+ s.length())

module.exports = Stack;


