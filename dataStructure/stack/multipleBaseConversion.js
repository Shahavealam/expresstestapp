let Stack = require('./stack.js');
let s = new Stack();

//console.log(s);
//Multiple Base Conversion
function multipleBase(num,base){
    do {
         let rem = num % base;
         s.push(rem);
         num = Math.floor(num/base);
    }
    while(num > 0)
      let conversion = '';
    while(s.length() > 0){
        conversion += s.pop();
    }
    return conversion;
}
console.log(s.displayStack());
console.log(multipleBase(32,2));


