
/**
 * @param {number[]} nums1
 * @return {boolean}
 */
    const uniformArray = A => _.min(A) & 1 || !A.some(x => x & 1);