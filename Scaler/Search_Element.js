var inputString =  [
    '10',                
    '9',
    '6 3 3 6 7 8 7 3 7', '3',
    
    '10',                '9 8 7 7 6 6 3 1 5 7',
    '5',  
    
    '2',					'1 7',               '5',
    
    '8',                 '8 6 7 10 3 10 10 3',
    '10',                
    
    '9',
    '1 1 6 6 7 7 6 4 9', '5',
    
    '6',                 '1 9 1 9 1 2',
    '2', 
    
    '7',
    '1 3 7 5 2 4 3',     '5',
    
    '9',                 '1 3 3 2 2 5 4 1 7',
    '1',  
    
    '2',				   '9 5',  '8',
    
    '6',                 '10 2 9 9 4 5',
    '10',                ''
  ]

let arrayLength = parseInt(inputString[0]);
let arrayData  =  inputString.slice(1, inputString.length-1)

let newDataArray = [];
let middleValue  = parseInt(arrayLength / 3);

for(let i= 0; i < arrayData.length; i+=3){
    newDataArray.push([arrayData[i], arrayData[i+1].split(' '), arrayData[i+2]])
}
if(arrayLength % 2 !==0) arrayData.splice(middleValue,0,arrayData[middleValue]) 

let resultArray = newDataArray.map(data=> data[1].includes(data[2]) ? '1': '0')
console.log(resultArray.join(' \n'))