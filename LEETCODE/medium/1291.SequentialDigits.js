/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
    let result = [], num = [1, 2, 3, 4, 5, 6, 7, 8, 9], size = String(low).length;

    let lastNum = parseInt(String(low)[0])-1;
    result.push(+num.slice(lastNum, size).join(""));

    while (result[result.length - 1] < high) {
        lastNum++;
        if ((lastNum + size) <= 9) {
            result.push(+num.slice(lastNum, lastNum + size).join(""));
        } else {
            lastNum = 0;
            size++;
            result.push(+num.slice(lastNum, lastNum + size).join(""));
        }
    }

    if (result[result.length - 1] > high) {
        result.pop();
    }

    return result;

};

console.log(sequentialDigits(100, 300)); // Output: [123, 234]
console.log(sequentialDigits(1000, 13000)); // Output: [1234, 2345, 3456, 4567, 5678, 6789, 12345]

// Optimization: Instead of using a while loop and manually managing the lastNum and size, 


/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
    let result = [], num = [1, 2, 3, 4, 5, 6, 7, 8, 9], size = String(low).length;

    // Use Math.max to handle cases where low starts with 9 (e.g., 90)
    let lastNum = Math.max(0, parseInt(String(low)[0]) - 1);

    // Only push the initial number if it fits the digits constraints safely
    if (lastNum + size <= 9) {
        let initialNum = +num.slice(lastNum, lastNum + size).join("");
        if (initialNum >= low && initialNum <= high) result.push(initialNum);
    }

    // Main Loop
    while (true) {
        lastNum++;

        // If window goes out of bounds, reset index and increase window size
        if ((lastNum + size) > 9) {
            lastNum = 0; // Fixed the lowercase 'n' typo here!
            size++;
        }

        // Hard stop condition: if size exceeds 9 digits, we are completely done
        if (size > 9) break;

        let currentNum = +num.slice(lastNum, lastNum + size).join("");

        // If we cross the high limit, we can stop immediately 
        if (currentNum > high) {
            break;
        }

        // Only push numbers that meet our low boundary
        if (currentNum >= low) {
            result.push(currentNum);
        }
    }

    return result;
};


console.log(sequentialDigits(100, 300)); // Output: [123, 234]
console.log(sequentialDigits(1000, 13000)); // Output: [1234, 2345, 3456, 4567, 5678, 6789, 12345]



// Sliding Window Approach: Instead of using a while loop and manually managing the lastNum and size, we can use a sliding window approach to generate sequential digits. This will allow us to efficiently generate numbers without having to manage the indices manually.
/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
    const ans = [];
    const s = "123456789";
    
    const lowLen = String(low).length;
    const highLen = String(high).length;

    // Outer loop: controls how many digits wide the number is
    for (let i = lowLen; i <= highLen; i++) {
        // Inner loop: slides the window across the string "123456789"
        for (let j = 0; j <= 9 - i; j++) {
            const num = Number(s.substring(j, j + i));
            
            if (num >= low && num <= high) {
                ans.push(num);
            }
        }
    }

    return ans;
};

console.log(sequentialDigits(100, 300)); // Output: [123, 234]
console.log(sequentialDigits(1000, 13000)); // Output: [1234, 2345, 3456, 4567, 5678, 6789, 12345]