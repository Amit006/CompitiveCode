var countMajoritySubarrays = function (nums, target) {
    const n = nums.length;
    // represents the occurrence count of prefix sums -n, -(n-1), ..., 0, 1, ..., n, with index offset by n.
    const pre = new Array(n * 2 + 1).fill(0);
    pre[n] = 1;
    let cnt = n;
    let ans = 0,
        presum = 0;
    for (let i = 0; i < n; ++i) {
        if (nums[i] === target) {
            presum += pre[cnt];
            ++cnt;
            ++pre[cnt];
        } else {
            --cnt;
            presum -= pre[cnt];
            ++pre[cnt];
        }
        ans += presum;
    }
    return ans;
};


const nums = [1, 2, 2, 3];
const target = 2;
console.log(countMajoritySubarrays(nums, target)); // Output: 5