function weekTemps(){
    this.dataStore = [];
    this.storeMonthWorth = storeMonthWorth;
    this.allweekAverage = allweekAverage;
    this.monthlyAverage = monthlyAverage;
    this.specificweekAverage = specificweekAverage;
    this.allweekAverage = allweekAverage;
}

function storeMonthWorth (noofDays){
    for(let i=0;i<noofDays;i++){
        let tempNum = 30 + i; 
        let subArr = [];
        for(let j=0;j<7;j++){
            subArr.push(tempNum+j);
        }
       this.dataStore.push(subArr);
    }
}
function monthlyAverage(){
    let totalRows = this.dataStore.length;
    let total = 0;
    let average = 0;
    let noOfDays = 0;
    for(let row=0; row < totalRows;row++) {
        for(let col=0;col < this.dataStore[row].length; col++) {
            total += this.dataStore[row][col];
            noOfDays +=1; 
        }
    }
    average = total/noOfDays;
    return average ;
}
function allweekAverage(){
    let totalRows = this.dataStore.length;
    let allweeksAverage = [];
    for(let row=0; row < totalRows;row++) {
        let total = 0;
        let average = 0;
        for(let col=0;col < this.dataStore[row].length; col++) {
            total += this.dataStore[row][col];
        }
        average = total/this.dataStore[row].length;
        allweeksAverage.push(average);
        total = 0;
        average = 0;
    }
    return allweeksAverage;
}
function specificweekAverage(particularWeek){
    let totalRows = this.dataStore.length;
    let total = 0;
    let average = 0;
    if(particularWeek < totalRows){
        let row = particularWeek;
            for(let col=0;col < this.dataStore[row].length; col++) {
                total += this.dataStore[row][col];
            }
            average = total/this.dataStore[row].length;
    }else {
        console.log('Week Not Exists');
    }
    return average;
}
let tempObj = new weekTemps();

//-----Enter Monthly Temperature Data---
console.log('Monthly Data');
tempObj.storeMonthWorth(4);
//------------
console.log('Monthly Average');
console.log(tempObj.monthlyAverage());

console.log('All Week Average');
console.log(tempObj.allweekAverage());

console.log('Specific Week Average');
console.log(tempObj.specificweekAverage(2));

