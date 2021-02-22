function getPascalsTriangle(n) {
    var arr = {};
    for(var row = 0; row < n; row++) {
        arr[row] = [];
        for(var col = 0; col <= row; col++) {
            if(col === 0 || col === row) {
                arr[row][col] = 1;
            } else {
                arr[row][col] = arr[row-1][col-1] + arr[row-1][col];
            }         
        }       
    }   
    return arr;
}
console.log(getPascalsTriangle(10));


