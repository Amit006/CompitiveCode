/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
   let res = 0;
    for (let i = 0; i < 26; i++) {
        let u = String.fromCharCode(i + 65);
        let l = String.fromCharCode(i + 97);
        if (word.includes(u) && word.includes(l)) res++;
    }
    return res;
};

console.log(numberOfSpecialChars("aaAbcBC")) // Output: 3
console.log(numberOfSpecialChars("abc")) // Output: 0
console.log(numberOfSpecialChars("AbCdEfGhIjK")) // Output: 0

//hashTable approach
/**
 * @param {string} word
 * @return {number}
 */
// 2 second approach
var numberOfSpecialChars = function (word) {
    const hashTable = new Map();
    let count = 0;

    for (let char of word) {
        const oppositeCase = String.fromCharCode(char.charCodeAt(0) ^ 32);

        if(hashTable.get(char) === -1) continue;
        if(hashTable.get(oppositeCase) === -1) continue;

        if (hashTable.has(oppositeCase)) {
            count++;
            if (hashTable.has(char)) hashTable.set(char, -1);
            hashTable.set(oppositeCase, -1);
            continue;
        }
        hashTable.set(char, 1 + (hashTable.get(char) || 0));
    }


    return count;
};

/**
 * @param {string} word
 * @return {number}
 */
// 5 second approach
var numberOfSpecialChars = function (word) {
    const hashTable = new Map();
    let count = 0, wordSet = [...new Set(word.split("").map(l=>l.toLowerCase()))];

    for (let char of word) {
        hashTable.set(char, 1 + (hashTable.get(char) || 0));
    }

    for(let char of wordSet){
        const oppositeCase = String.fromCharCode(char.charCodeAt(0)^32);
        if(hashTable.has(char) && hashTable.has(oppositeCase)) count++;
    }

    return count;
};
console.log(numberOfSpecialChars("aaAbcBC")); // Output: 3
console.log(numberOfSpecialChars("abc")); // Output: 0
console.log(numberOfSpecialChars("AbCdEfGhIjK")); // Output: 0
