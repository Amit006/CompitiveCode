let A = [16, 17, 4, 3, 5, 2];
let B = [5, 4];

function leadersInArray(A){
        let leadersInArray = [A[A.length-1]];
        for(let i = A.length - 1; i>=0 ; i-- ){
            if(A[i] > leadersInArray[leadersInArray.length-1])
            leadersInArray.push(A[i]);   
        }

        return leadersInArray;
}


console.log(leadersInArray(B));