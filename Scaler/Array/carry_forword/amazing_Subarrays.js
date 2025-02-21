const str = 'ABECIJKLMOOPQRSTUVWXYZ';
const vowel = "aeiou".split('');
const storeSubStrValues = [];
let  totalSubStr = 0;
function FindAmazingSubstring(A){
    const strArray = A.split('');
    strArray.forEach((i, index)=>{
        if(vowel.includes(i.toLowerCase())){
            storeSubStrValues.push((strArray.length - index));
            totalSubStr+=(strArray.length - index);
        }
    }); 
}

FindAmazingSubstring(str);
console.log(' totalSubStr: ', totalSubStr);

