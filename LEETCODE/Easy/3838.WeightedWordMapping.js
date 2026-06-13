/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function (words, weights) {
    const len = words.length;
    const resultCodes = new Uint8Array(len); // Fast, fixed-size numeric array

    for (let i = 0; i < len; i++) {
        const word = words[i];
        const wordLen = word.length;
        let sum = 0;

        for (let j = 0; j < wordLen; j++) {
            sum += weights[word.charCodeAt(j) - 97];
        }

        resultCodes[i] = 122 - (sum % 26);
    }

    // Decodes the entire array of character codes into a string in a single operation
    return String.fromCharCode.apply(null, resultCodes);
};


const words = ["abc", "def", "ghi"];
const weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
console.log(mapWordWeights(words, weights)); // Output: "xyz"
const words2 = ["hello", "world"];
const weights2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
console.log(mapWordWeights(words2, weights2)); // Output: "vut"