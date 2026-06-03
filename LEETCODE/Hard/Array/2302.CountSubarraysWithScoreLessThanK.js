/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {

    let n = nums.length, count = 0;;
    for (let i = 0; i < nums.length; i++) {
        let productOfSubArray = 0;
        for (let j = i; j < n; j++) {
            productOfSubArray += nums[j];
            console.log(productOfSubArray, ((j- i)+1), productOfSubArray * (i + 1 - j), k);
           
            // Check if the product of the subarray is less than k
            if ((productOfSubArray * ((j-i)+1)) < k) count++;
            // console.log(" Count: ", count);
        }
    }
    return count;
}; 


// console.log(countSubarrays([2,1,4,3,5], 10)); // 7


const countSubarrays2 = (nums, k) => {
    let n = nums.length, count = 0;
    let left = 0, right = 0, sum = 0;
    while (right < n) {
        sum += nums[right];
        while (sum * (right - left + 1) >= k) {
            sum -= nums[left];
            left++;
        }
        count += right - left + 1;
        right++;
    }
    return count;
}
 // time complexity O(n^2) and space complexity O(1)


 const countSubarrays3 = (nums, k) => {
    const n = nums.length;
    let count = 0;
    let productOfSubArraySum =0; 
    for (let i = 0; i < n; i++) {
        productOfSubArraySum += nums[i];
        if(productOfSubArraySum * (i + 1) < k) {
            count +=  1;
        } 
     
        if (i > 0 && (nums[i] * 1) < k) {
            count +=  1;
        } 
        console.log("Count2: ", count, productOfSubArraySum, (i + 1), productOfSubArraySum * (i + 1), k);
        console.log(" ----- 0 -----", i);
    }

    return count;
}


// console.log(countSubarrays3([2,1,4,3,5], 10)); // 6
console.log(countSubarrays3([1,1,1], 5)); // 5


var countSubarrays5 = function (nums, k) {
    const n = nums.length;
    let count = 0;
    let left = 0;
    let currentSum = 0;

    for (let right = 0; right < n; right++) {
        currentSum += nums[right];

        // Shrink the window from the left while the score is >= k
        while ((currentSum * (right - left + 1)) >= k && left <= right) {
            currentSum -= nums[left];
            left++;
        }

        // For each valid right endpoint, the number of subarrays ending at 'right'
        // with a score less than k is (right - left + 1)
        count += (right - left + 1);
    }

    return count;
}; 