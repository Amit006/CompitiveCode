/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
    let count = 0,
        hashTable = new Map();

    for (let i = 0; i < word.length; i++) {
        const oppositeCase = String.fromCharCode(word[i].charCodeAt(0) ^ 32);

        if (
            word[i] === word[i].toLowerCase() &&
            i > hashTable.get(oppositeCase)
        ) {
            hashTable.set(word[i], -1);
            hashTable.set(oppositeCase, -1);
        } else if (hashTable.get(word[i]) === -1) continue;
        else hashTable.set(word[i], i);
    }

    for (i = 0; i < 26; i++) {
        let u = String.fromCharCode(i + 65);
        let l = String.fromCharCode(i + 97);

        if (hashTable.get(l) < hashTable.get(u)) count++;
    }

    return count;
};

// console.log(numberOfSpecialChars("leEtCode")); // 1
// console.log(numberOfSpecialChars("aA")); // 0
// console.log(numberOfSpecialChars("abBAcC")); // 0
// console.log(numberOfSpecialChars("aAbBcCdD")); // 0
// console.log(numberOfSpecialChars("aAbBcCdDe")); // 1

const numberOfSpecialChars2 = function (word) {
    let count = 0,
        hashTable = new Map();

    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase() && hashTable.has(word[i])) {
            continue;
        } else hashTable.set(word[i], i);
    }

    for (i = 0; i < 26; i++) {
        let u = String.fromCharCode(i + 65);
        let l = String.fromCharCode(i + 97);

        if (hashTable.get(l) < hashTable.get(u))
            count++;
    }

    return count;
};

console.log(numberOfSpecialChars2("leEtCode")); // 1
console.log(numberOfSpecialChars2("aA")); // 0


// Optimization using ASCII values and List instead of Map
const numberOfSpecialChars3 = function (word) {
    let count = 0,
        hashTable = new Array(52).fill(-1); 

        for (let i = 0; i < word.length; i++) {
            const charCode = word[i].charCodeAt(0);
            const index = charCode >= 97 ? charCode - 71 : charCode - 65;   

            if (charCode >= 65 && charCode <= 90 && hashTable[index] !== -1) {
                continue;
            }
            hashTable[index] = i;

        }

    for (i = 0; i < 26; i++) {
        if (hashTable[i + 26] < hashTable[i]) count++;
    }

    return count;   
}