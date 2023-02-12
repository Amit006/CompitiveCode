
function  minimuStepsBeEqual(A){
  
    let maxElement = A[0];
    var minimumStepsArray = [];
    A.forEach((d, index)=>{
        if(maxElement <  d)
        { 
            const remaningVal = d - maxElement;
            minimumStepsArray = minimumStepsArray.map(d=>d+(remaningVal));
            maxElement = d;
            minimumStepsArray.push(0);
        } else minimumStepsArray.push(maxElement-d);
    })

return minimumStepsArray;
}

function reAddMissingSteps(rage, reaadMinsteps, minimumStepsArray) {
    console.log('minimumStepsArray:', minimumStepsArray, rage, maxElement, maxElement - A[rage]);
    if(rage > 0) {
          const adjustIncrementSteps = minimumStepsArray[rage] +  (minimumStepsArray[rage]-(maxElement - A[rage]))
          minimumStepsArray.splice(rage, 1, adjustIncrementSteps);
          return reAddMissingSteps(rage-1, maxElement, minimumStepsArray);
    } else return 0
}


// let A = [2, 4, 1, 3, 2];
let A = [ 731, 349, 490, 781, 271, 405, 811, 181, 102, 126, 866, 16, 622, 492, 194, 735 ];


console.log(minimuStepsBeEqual(A).reduce((a,b)=>a+b));