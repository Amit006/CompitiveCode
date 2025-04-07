// /**
//  * @param {string} s
//  * @param {number} k
//  * @return {number}
//  */

const assert = require('assert');
// var beautifulSubstrings = function(s, k) {
//     const inputStr = s.split('');
//     const vowels = ['a','e','i','o','u'];
//     let bcount =0;
//     for(let i=0; i < s.length ; i++){
        
//         let vowelcount = 0;
//         let consonentCount = 0;
//         let substr= inputStr[i];
//         if(vowels.includes(inputStr[i])){
//             vowelcount++;
//         } else {
//             consonentCount++;
//         }
//         for(let j=i+1;j< s.length;j++ ){
//             substr+= inputStr[j];

//             if(vowels.includes(inputStr[j] )){
//                 vowelcount++;
//             } else {
//                 consonentCount++;
//             }

//             if ( ( vowelcount === consonentCount ) && ( ( consonentCount * vowelcount) % k == 0) ) {
//                 bcount++;
//             }
//         }
//     }

//     return bcount;
// };

// assert(beautifulSubstrings("aabb", 2) == 1) // 1
// assert(beautifulSubstrings("baeyh", 2) == 2) // 2
// // bid input
// assert(beautifulSubstrings("abba", 1) == 3) // 3
// assert(beautifulSubstrings("bcdf", 1) == 0) // 0


var beautifulSubstrings = function(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let bcount = 0;
    let vMinusC = 0; // vowels minus consonants count
    
    // Find smallest x where x² is divisible by k
    let x = 1;
    while ((x * x) % k !== 0) {
        x++;
    }
    
    // Map to store [vMinusC, vowel count % x] -> occurrences
    const prefixMap = new Map();
    // Initialize with base case
    prefixMap.set("0,0", 1);
    
    let vowelCount = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (vowels.has(s[i])) {
            vMinusC++;
            vowelCount++;
        } else {
            vMinusC--;
        }
        
        // For a beautiful substring, we need:
        // 1. Equal vowels and consonants: vMinusC should match a previous position
        // 2. (vowelCount * consonantCount) % k = 0
        
        // For condition 2, since vowelCount = consonantCount in beautiful substrings,
        // we can simplify to (vowelCount²) % k = 0
        // This means vowelCount % x = (previous vowelCount) % x
        
        const key = `${vMinusC},${vowelCount % x}`;
        
        if (prefixMap.has(key)) {
            bcount += prefixMap.get(key);
        }
        
        console.log('prefixMap', prefixMap, 'key', key, 'bcount', bcount);
        prefixMap.set(key, (prefixMap.get(key) || 0) + 1);
    }
    
    return bcount;
};

// assert(beautifulSubstrings("aabb", 2) == 1) // 1
// assert(beautifulSubstrings("baeyh", 2) == 2) // 2
// bid input
assert(beautifulSubstrings("abba", 1) == 3) // 3
// assert(beautifulSubstrings("bcdf", 1) == 0) // 0


/*

2947. Count Beautiful Substrings I
Solved
Medium
Topics
Companies
Hint
You are given a string s and a positive integer k.

Let vowels and consonants be the number of vowels and consonants in a string.

A string is beautiful if:

vowels == consonants.
(vowels * consonants) % k == 0, in other terms the multiplication of vowels and consonants is divisible by k.
Return the number of non-empty beautiful substrings in the given string s.

A substring is a contiguous sequence of characters in a string.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

Consonant letters in English are every letter except vowels.

 

Example 1:

Input: s = "baeyh", k = 2
Output: 2
Explanation: There are 2 beautiful substrings in the given string.
- Substring "baeyh", vowels = 2 (["a",e"]), consonants = 2 (["y","h"]).
You can see that string "aeyh" is beautiful as vowels == consonants and vowels * consonants % k == 0.
- Substring "baeyh", vowels = 2 (["a",e"]), consonants = 2 (["b","y"]). 
You can see that string "baey" is beautiful as vowels == consonants and vowels * consonants % k == 0.
It can be shown that there are only 2 beautiful substrings in the given string.
Example 2:

Input: s = "abba", k = 1
Output: 3
Explanation: There are 3 beautiful substrings in the given string.
- Substring "abba", vowels = 1 (["a"]), consonants = 1 (["b"]). 
- Substring "abba", vowels = 1 (["a"]), consonants = 1 (["b"]).
- Substring "abba", vowels = 2 (["a","a"]), consonants = 2 (["b","b"]).
It can be shown that there are only 3 beautiful substrings in the given string.
Example 3:

Input: s = "bcdf", k = 1
Output: 0
Explanation: There are no beautiful substrings in the given string.


*/