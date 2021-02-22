class Dictionary {
    constructor(){
        this.dataStore = [];
    }
    add(key,value){
        this.dataStore[key] = value;
    }
    find(key){
        return this.dataStore[key];
    }
    count(){
        let n=0;
        let objectKeys = Object.keys(this.dataStore).sort();
        for(let key in objectKeys){
            n++;
        }
        return n;
    }
    showAll(){
        //---Its shows list of dictionary items in ascending order
        let objectKeys = Object.keys(this.dataStore).sort();
        for(let key of objectKeys){
            console.log(`${key} -> ${this.dataStore[key]}`);
        }
    }
    removeByKey(key){
        delete this.dataStore[key];
    }
    removeByValue(value){
        let objectKeys = Object.keys(this.dataStore).sort();
        for(let key of objectKeys){
            //----Find and delete item
            if(value == this.dataStore[key]){
                delete this.dataStore[key];
            }
        }
    }
}

let dictionary = new Dictionary();
dictionary.add('b','12');
dictionary.add('a','34');
dictionary.add('c','56');
dictionary.showAll();
console.log(dictionary.find('a'));
console.log('After Removing the item by key');
dictionary.removeByKey('a')
dictionary.showAll();
dictionary.add('x','621');
console.log('Total Item '+ dictionary.count());
console.log('Remove item by value');
dictionary.removeByValue('12')
dictionary.showAll();
