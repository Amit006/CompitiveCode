/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function(words, weights) {
    // edge case 
    if(!words || !weights ) return "";

    const modulo = 26; let sum = 0, result = '';

     for( let i = 0 ; i< words.length; i++){
        for( let j =0; j < words[i].length; j++){
         const wIndex  = words[i].charCodeAt(j) - 97;
         sum+= weights[wIndex];
        }
        result += String.fromCharCode( 122 -( sum % modulo));
        sum=0;
     }


    return result;
    
};

console.log(mapWordWeights(["abc","bcd"],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26])); // "tq"  