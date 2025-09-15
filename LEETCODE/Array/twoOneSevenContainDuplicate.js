/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let index = 0;
    for(const i of nums ){
        if(index !== nums.lastIndexOf(i)) return true;
        index++;
    }

    return false;
};

const input = [1,2,3,4];
console.log(containsDuplicate(input));