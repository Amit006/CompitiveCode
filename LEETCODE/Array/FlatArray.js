// Flatten the given multi dimentional array to single dimentional array
// input=[1,2,3,4,5,[6,[7,8,9]]]
// output=[1,2,3,4,5,6,7,8,9]


let input=[1,2,3,4,5,[6,[7,8,9]]];
function flat(parent,element){
    for(let i of element){
         if(typeof i === 'object'){
           return flat(parent, i);
         } else
         parent.push(i);
    }
    return parent;
};

const flatenArray = flat([],input);



function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.apply([], Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

console.log(' flatenArray: ', flatenArray);
console.log(' flatenArray: reduce ', flatten(input));