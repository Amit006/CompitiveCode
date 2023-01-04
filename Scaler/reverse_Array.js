// Q4. Reverse the Array Without using): - 

// Code (JavaScript): - 
 function Solve(A){
        let returnArr = []; let  middleValue  = parseInt(A.length / 2);
        for(let i = 1; i <= A.length / 2 ; i++){
            let lastIndexVal = A[A.length-i];
            returnArr.push(A[middleValue-i]);
            returnArr.splice(i-1,0,lastIndexVal);
        } if(A.length % 2 !==0) returnArr.splice(middleValue,0,A[middleValue]) 
        return returnArr;
    }
 Solve([1, 2, 3, 2, 1])
//  output:-  [1, 2, 3, 2, 1]