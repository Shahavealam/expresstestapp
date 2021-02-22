/*
collision- more than one value represnts by the same key in has table , 
 in this case only last value insserted with same key in hash table
*/
class HashTable {
    constructor(){
        //the best way to give the size of table is a prime number
        this.table = new Array(137);
    }
    /*Convert each character to ASCII value and return the index, 
    which is reminder of total of ascii and length of table*/
    simpleHash(data){
        let total = 0;
        for(let i=0; i<data.length; i++){
            total += data.charCodeAt(i);
        }
        console.log(`Hash Value for ${data} -> ${total}`);
        return total % this.table.length;
    }
    /*used for stopping collision, adding smallest prime number utilizing Horner's method */
    betterHash(data){
        let h = 37;
        let total = 0;
        for(let i= 0; i<data.length; i++){
            total = h*total + data.charCodeAt(i);
        }
        console.log(`Hash Value for ${data} -> ${total}`);
        total = parseInt((total % this.table.length)); 
        return total;
    }
    put(data){
        let index = this.simpleHash(data);
        this.table[index] = data;
    }
    putBetter(data){
        //this.table = new Array(137);
        let index = this.betterHash(data);
        this.table[index] = data;
    }
    //-------show distributed
    showDistro(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i] !== undefined){
                console.log(`${i} : ${this.table[i]}`);
            }
        }
    }
    //Insert Bulk data
    insertBulk(arr){
        for(let i=0;i<arr.length;i++){
            this.put(arr[i]);
        }
    }
    //Insert Bulk data
    insertBulkBetter(arr){
        for(let i=0;i<arr.length;i++){
            this.putBetter(arr[i]);
        }
    }
}

let hTable = new HashTable();
let names = ['David','Jennifer','Donnie','Raymond','Cynthia','Mike','Clayton','Danny','Jonathan'];
//hTable.insertBulk(names);
//hTable.showDistro();
console.log('======================');
console.log('After Removing Collision');
hTable.insertBulkBetter(names);
hTable.showDistro();
module.exports = HashTable;
