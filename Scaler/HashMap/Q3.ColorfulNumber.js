/**
 * Determines if a number is COLORFUL.
 * A number is COLORFUL if the product of every consecutive sequence of digits is different.
 * 
 * @param {number} A - The input number to check
 * @return {number} - Returns 1 if the number is COLORFUL, 0 otherwise
 */
const isColorful = (A) => {
    // Convert number to string to process individual digits
    const numStr = A.toString();
    
    // Set to store products of subsequences
    const productSet = new Set();
    
    // Generate all consecutive subsequences
    for (let start = 0; start < numStr.length; start++) {
        let product = 1;
        
        for (let end = start; end < numStr.length; end++) {
            // Update product with current digit
            product *= parseInt(numStr[end]);
            
            // If this product is already in the set, the number is not COLORFUL
            if (productSet.has(product)) {
                return 0;
            }
            
            // Add the product to the set
            productSet.add(product);
        }
    }
    
    // If we reach here, all products are unique
    return 1;
};

// Test cases
console.log(isColorful(23));  // Expected output: 1
console.log(isColorful(236)); // Expected output: 0

// Additional test cases
console.log(isColorful(123)); // Expected output: 0 (products: 1, 2, 3, 2, 6, 6 - duplicate 6)
console.log(isColorful(263)); // Expected output: 1 (products: 2, 6, 3, 12, 18, 36 - all unique)