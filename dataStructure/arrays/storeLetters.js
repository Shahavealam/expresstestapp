function storeLetters(){
    this.lettersStore = [];
    this.addletters = addletters;
    this.singleWord = singleWord;
}

function addletters(item){
    this.lettersStore.push(item);
} 

function singleWord(){
    let word;
    word = this.lettersStore.join('')
    return word;
}

let letterObj = new storeLetters();
letterObj.addletters('A');
letterObj.addletters('l');
letterObj.addletters('a');
letterObj.addletters('m');
console.log(letterObj.singleWord());