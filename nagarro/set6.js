/*
Q2) Produce a matrix of N order such that

    a[][] =  {
        1 2 3
        2 1 2
        3 2 1
    } 
*/
 function produceMatrixOfOrderN(n){
        let m = [];
        for(let i = 0; i<n; i++){
             m[i] = [];
            for(j=0;j<n;j++){
                if(i===j){
                    m[i][j] = 1;
                }else if(i+j === 1 || i+j === 3) {
                    m[i][j] = 2;
                }else{
                    m[i][j] = 3;
                }
            }
        }
        console.log(m);
 }
 produceMatrixOfOrderN(3)