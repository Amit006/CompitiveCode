// Please take input and print output to standard input/output (stdin/stdout)
// DO NOT USE ARGUMENTS FOR INPUTS

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    main();    
});

function readline() {
    return inputString[currentLine++];
}
function main() {
    // code here
    let firstInput = inputString[0].split(' ').map(d=>parseInt(d)).filter(d=>Boolean(d) )
    let rotateTime = parseInt(inputString[1])
    let actualArr = firstInput.slice(1,firstInput.length)
    rotateTime = rotateTime %  firstInput[0]


if(rotateTime){

let rotationArry = actualArr.slice(firstInput[0] - rotateTime, firstInput[0])

    console.log([...rotationArry, ...actualArr.slice(0, firstInput[0] - rotateTime)].join(' ')+' ')
} else 
    console.log(actualArr.join(' ')+' ')
}