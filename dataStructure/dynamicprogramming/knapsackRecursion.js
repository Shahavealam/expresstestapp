function knapsack(values, weights, W, i) {
    //Base Case
    if(i === 0 || W === 0){
        return 0;
    }
    // If weight of the nth item is more 
    // than Knapsack capacity W, then 
    // this item cannot be included 
    // in the optimal solution
    if(weights[i-1] > W){
        return knapsack(values, weights, W, i-1);
    }else {
        // Return the maximum of two cases: 
        // (1) nth item included 
        // (2) not included 
        let included = values[i-1] + knapsack(values, weights, W-weights[i-1], i-1);
        let excluded  = knapsack(values, weights, W, i-1);
        return Math.max(included, excluded);
    }
}

let values = [4,5,10,11,13];
let weights = [3,4,7,8,9];
//Capacity
let W = 16;
let n = 5;
console.log(knapsack(values,weights,W,n));
