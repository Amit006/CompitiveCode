var numberOfSubsequences = function(nums) {
    const n = nums.length;
    const mp = new Map();
    let ans = 0;

    for (let r = 4; r < n; r++) {
        for (let p = 0, q = r - 2; p < q - 1; p++) {
            const ratio = nums[p] / nums[q];
            mp.set(ratio, (mp.get(ratio) || 0) + 1);
        }
        for (let s = r + 2; s < n; s++) {
            const ratio = nums[s] / nums[r];
            ans += mp.get(ratio) || 0;
        }
    }

    return ans;
};


console.log(numberOfSubsequences([3,4,3,4,3,4,3,4]));