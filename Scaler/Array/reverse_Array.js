// Q4. Reverse the Array Without using): - 

// Code (JavaScript): - 
 function Solve(A){
        let returnArr = []; let  middleValue  = parseInt(A.length / 2);
        
        for(let i = 1; i <= A.length / 2 ; i++){
            let lastIndexVal = A[A.length-i];
            console.log('lastIndexVal: ',lastIndexVal, 'middleValue, ',middleValue)

            returnArr.push(A[middleValue-i]);
            returnArr.splice(i-1,0,lastIndexVal); // replace the value at index i-1 with lastIndexVal
            console.log(returnArr)
        } 
        
        if(A.length % 2 !==0) returnArr.splice(middleValue,0,A[middleValue]) 
        
            return returnArr;
    }
// console.log(Solve([1, 2, 3, 2, 1]))
//  output:-  [1, 2, 3, 2, 1]

console.log(Solve([1, 2, 3, 4, 5]))
//  output:-  [5, 4, 3, 2, 1]