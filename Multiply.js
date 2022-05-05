
// multipley all the values in the array except the current index

let input = [4,3,2,1]

//output = [6,8,12,24]
var outPutResult = [];

// 1st approch 
function calMal(inputArray){
    inputArray.forEach((data, index)=>{
        let arr1= inputArray.slice(0,index);
        let arr2= inputArray.slice(index+1,inputArray.length);
        let firstMalipicationValue = arr1.length ? arr1.reduce((a,b)=>a*b) : 1;
        let secondMultipicationValue = arr2.length ? arr2.reduce((a,b)=>a*b) : 1;
        
        console.log(firstMalipicationValue, secondMultipicationValue);
        outPutResult.push(firstMalipicationValue*secondMultipicationValue);
    })
}

calMal(input);
console.log(outPutResult);

// 2nd approch
// Get Multiplication Of Remaning By Devide With Index Number
function getMultiplication(inputArray){
    inputArray.forEach((data, index)=>{
        let arr1= inputArray.slice(0,index);
        let arr2= inputArray.slice(index+1,inputArray.length);
        let firstMalipicationValue = arr1.length ? arr1.reduce((a,b)=>a*b) : 1;
        let secondMultipicationValue = arr2.length ? arr2.reduce((a,b)=>a*b) : 1;
        
        console.log(firstMalipicationValue, secondMultipicationValue);
        outPutResult.push(firstMalipicationValue*secondMultipicationValue);
    })
}