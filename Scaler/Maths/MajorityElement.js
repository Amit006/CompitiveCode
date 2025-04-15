/*
To solve this problem, we need to determine the majority element in an array, which is defined as the element that appears more than ⌊n/2⌋ times. The solution leverages the Boyer-Moore Voting Algorithm to efficiently find the majority element in linear time with constant space complexity. Additionally, we ensure that the result is returned as a standard integer to avoid any type-related issues.

Approach
Boyer-Moore Voting Algorithm: This algorithm works by maintaining a candidate element and a count. As we iterate through the array:

If the count reaches zero, the current element becomes the new candidate.

If the current element matches the candidate, the count is incremented.

If the current element does not match the candidate, the count is decremented.

Type Conversion: To ensure the result is returned as a standard integer (Number), we convert the final candidate to a Number type. This handles cases where inputs might be parsed as BigInts, ensuring the output is in the correct format.


*/



const majorityElement = (A) => {
  let candidate = A[0];
  let count = 1;

  for (let i = 1; i < A.length; i++) {
    if (count === 0) {
      candidate = A[i];
      count = 1;
    } else if (A[i] === candidate) {
      count++;
    } else {
      count--;
    }
  }

  return Number(candidate);
};

/*
Explanation
Initialization: The candidate is initialized to the first element of the array, and the count is set to 1.

Iteration: Traverse the array starting from the second element:

If the count is zero, update the candidate to the current element and reset the count to 1.

If the current element matches the candidate, increment the count.

If the current element does not match the candidate, decrement the count.

Result Conversion: Convert the candidate to a Number before returning to ensure the result is an integer, avoiding any potential issues with BigInt type suffixes.

This approach ensures an O(n) time complexity and O(1) space complexity, making it efficient for large input sizes while adhering to the problem constraints.

*/


// Example usage:
// const array1 = [2, 8, 7, 2, 2, 5, 2, 3, 1, 2, 2];
// const majority1 = majorityElement(array1);
// console.log(`Majority element in [${array1}] : ${majority1}`); // Output: 2

// const array2 = [3, 3, 4, 2, 4, 4, 2, 4, 4];
// const majority2 = majorityElement(array2);
// console.log(`Majority element in [${array2}] : ${majority2}`); // Output: 4

// const array3 = [1, 2, 3, 4, 5];
// const majority3 = majorityElement(array3);
// console.log(`Majority element in [${array3}] : ${majority3}`); // Output: null



// another small approch is 
const majorityElementv1 = (A) => {
    let count = 0;
    let temp;

    for (let num of nums) {
        if (count === 0) {
            temp = num;
        }
        count += (num === temp) ? 1 : -1;
    }
    return temp;
}


const array21 = [2, 8, 7, 2, 2, 5, 2, 3, 1, 2, 2];
const majority12 = majorityElement(array21);
console.log(`Majority element in [${array21}] : ${majority12}`); // Output: 2

const array12 = [3, 3, 4, 2, 4, 4, 2, 4, 4];
const majority21 = majorityElement(array12);
console.log(`Majority element in [${array12}] : ${majority21}`); // Output: 4

const array13 = [1, 2, 3, 4, 5];
const majority13 = majorityElement(array13);
console.log(`Majority element in [${array13}] : ${majority13}`); // Output: null