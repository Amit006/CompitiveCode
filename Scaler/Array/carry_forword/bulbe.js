// let A = [0, 1, 0, 1]; = 4 
let A = [0, 1, 0, 1,0,0,0,0,0,0,0,0,0,0,0];
// let A = [0, 1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1];
let swich = false;
let count = 0;
for(let i=0; i < A.length; i++){
    if( !A[i] && !swich){
        swich = !swich;
        count+=1;
    } else if (A[i] && swich){
        count+=1;
        swich = !swich;
    }

}

console.log(' Cout: ', count);


// recurcation 
