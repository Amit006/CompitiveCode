/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
   
    // use Brian Kernighan's algorithm to count the number of 1 bits efficiently
    function countOnes(num) {
        let count = 0;
        // while num is not zero, keep removing the rightmost 1 bit and increment the count
        while (num) {
            // clear the rightmost 1 bit in num
            num = num & (num - 1);
            count++;
        }
        return count;
    }

    // sort array
    // first by the count of 1 bits, then by the integer value itself
    arr.sort((a, b) => {
        let countA = countOnes(a);
        let countB = countOnes(b);
        let bitCompare = countA - countB; // compare by the count of 1 bits
        if (bitCompare !== 0) {
            return bitCompare; // if the count of 1 bits is different, sort by that
        } else {
            return a - b; // if the count of 1 bits is the same, sort by the integer value
        }
    });
    return arr;
};
