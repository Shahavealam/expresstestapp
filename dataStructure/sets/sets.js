class Set {
    constructor(){
        this.dataStore = [];
    }
    //Every Sets contains unique elements
    add(item){
        //check for unique elements 
        if(this.dataStore.indexOf(item)<0){
            this.dataStore.push(item);
            return true;
        }
        return false;
    }
    //------contains
    contains(item){
        if(this.dataStore.indexOf(item) > -1){
            return true;
        }
        return false;
    }
    //---Remove
    remove(item){
        if(this.contains(item)){
            let pos = this.dataStore.indexOf(item);
            this.dataStore.splice(pos,1);
            return true;
        }
        return false;
    }
    //-----Intersection {1, 2, 3} intersection {4, 5} = {1, 2, 3 , 4,5}
    union(set){
        let tmpSet = [];
        for(let i=0; i<this.dataStore.length; i++){
            tmpSet.push(this.dataStore[i]);
        }
        //--------check and insert the second sets elements
        for(let j=0; j<set.dataStore.length; j++){
            if(tmpSet.indexOf(set.dataStore[j]) === -1){
                tmpSet.push(set.dataStore[j]);
            }
        }
        return tmpSet;
    }
   //Intersection
    intersect(set){
        let tmpSet = new Set();
        for(let i=0; i<this.dataStore.length; i++){
            if(set.contains(this.dataStore[i])){
                tmpSet.add(this.dataStore[i]);
            }
        }
        return tmpSet;
    }

    //-----size
    size() {
        return this.dataStore.length;
    }
    //-----Subset
    subset(set){
        if(this.size() > set.size()){
            return false;
        } else {
            for(let member of this.dataStore){
               if(!this.contains(member)){
                   return false;
               }
            }
            return true;
        }
    }
    //------Difference 
    difference(set) {
        let tmpSet = new Set();
        for(let mem of this.dataStore){
            if(!set.contains(mem)){
                tmpSet.add(mem)
            }
        }
        return tmpSet;
    }
}

let nset = new Set();
nset.add(1);
nset.add(2);
nset.add(3);

let set = new Set();
set.add(3);
set.add(2);
set.remove(2);
console.log('After Remove');
console.log(set);
//Union 
console.log('=====Union=====');
console.log(nset.union(set));

//Intersection 
console.log('=====Intersection=====');
console.log(nset.intersect(set));

//Subset 
console.log(set.subset(nset));

//---Diffrence
console.log(nset.difference(set));

