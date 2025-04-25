/**
 * Performs the following operations on a string:
 * 1. Concatenate the string with itself
 * 2. Delete all uppercase letters
 * 3. Replace each vowel with '#'
 * 
 * @param {string} A - Input string consisting of lowercase and uppercase alphabets
 * @return {string} - Resultant string after applying the operations
 */
function stringOperations(A) {
    // Step 1: Concatenate the string with itself
    let result = A + A;
    
    // Step 2: Delete all uppercase letters
    result = result.replace(/[A-Z]/g, '');
    
    // Step 3: Replace each vowel with '#'
    result = result.replace(/[aeiou]/g, '#');
    
    return result;
}

/**
 * Alternative implementation without using regex
 * @param {string} A - Input string
 * @return {string} - Resultant string
 */
function stringOperationsNoRegex(A) {
    // Step 1: Concatenate the string with itself
    let concatenated = A + A;
    
    // Step 2: Delete all uppercase letters
    let withoutUppercase = '';
    for (let i = 0; i < concatenated.length; i++) {
        const char = concatenated[i];
        if (char < 'A' || char > 'Z') {
            withoutUppercase += char;
        }
    }
    
    // Step 3: Replace each vowel with '#'
    let result = '';
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    
    for (let i = 0; i < withoutUppercase.length; i++) {
        const char = withoutUppercase[i];
        if (vowels.has(char)) {
            result += '#';
        } else {
            result += char;
        }
    }
    
    return result;
}

// Example usage
console.log(stringOperations("AbcaZeo")); // Expected: "bc###bc###"

module.exports = {
    stringOperations,
    stringOperationsNoRegex
};