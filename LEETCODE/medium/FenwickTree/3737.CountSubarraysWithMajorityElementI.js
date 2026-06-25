/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var countMajoritySubarrays = function(nums, target) {
    
// };
function countMajoritySubarrays(nums, target) {
    const n = nums.length;

    // Step 1: Transform array
    const arr = nums.map(x => x === target ? 1 : -1);

    // Step 2: Prefix sums
    let prefix = [0];
    for (let i = 0; i < n; i++) {
        prefix.push(prefix[prefix.length - 1] + arr[i]);
    }

    // Coordinate compression for Fenwick Tree
    const sorted = [...prefix].sort((a, b) => a - b);
    const rank = new Map();
    sorted.forEach((val, idx) => rank.set(val, idx + 1));

    // Fenwick Tree helpers
    const fenwick = Array(sorted.length + 2).fill(0);
    function update(i) {
        while (i < fenwick.length) {
            fenwick[i]++;
            i += i & -i;
        }
    }
    function query(i) {
        let sum = 0;
        while (i > 0) {
            sum += fenwick[i];
            i -= i & -i;
        }
        return sum;
    }
    

    // Step 3: Count valid subarrays
    let result = 0;
    for (let j = 0; j < prefix.length; j++) {
        const r = rank.get(prefix[j]);
        // Count how many earlier prefix[i] < prefix[j]
        result += query(r - 1);
        update(r);
    }

    return result;
}

// Example runs
console.log(countMajoritySubarrays([1,2,2,3], 2)); // Output: 5
console.log(countMajoritySubarrays([1,1,1,1], 1)); // Output: 10
