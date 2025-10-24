/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    let hashMap = new Map();
    for( const char of s ){
            hashMap.set(char,(hashMap.get(char) || 0)+1);
    }

    let remaningFreq=0;
    let resultStr = '';
    
    // while(hashMap.values()){
    // for(const char in hashMap.keys()){
    //   const charCount  = hashMap.get(char);
    //   if(charCount){
    //     resultStr += char;
    //     hashMap.set(char, charCount--);
    //     if(flag) remaningFeq++;
    //     else remaningFeq--;

    //   } else {
    //     flag = !flag;
        
    //   }

    // }
    // }

    const result = hashMap.values().reduce((a,b)=> Math.abs(a-b));
    if(result > 1) return "";
    let returnStr ="";
    while(hashMap.size){
        for(const char of hashMap.keys()){
            returnStr += char;
            const lastCount = hashMap.get(char);
            if(lastCount < 2) hashMap.delete(char);
            else hashMap.set(char, lastCount-1);
        }
    }

    return  returnStr;
};


// console.log(reorganizeString("aab"));
// console.log(reorganizeString("aaab"));
console.log(reorganizeString("vvvlo"));
