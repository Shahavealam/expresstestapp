function setofWords() {
    this.dataStore = [];
    this.add = add;
    this.backword = backword;
    this.forword = forword;
}

function add (item){
    this.dataStore.push(item);
}
function forword(){
    let forword;
    forword = this.dataStore.join(' ');
    return forword;
}
function backword(){
    let backword;
    backword = this.dataStore.reverse().join(' ');
    return backword;
}
let words = new setofWords();
words.add('Hey');
words.add('whats');
words.add('going');
words.add('on');
console.log('Forword: '+ words.forword());
console.log('Backword: '+ words.backword());



