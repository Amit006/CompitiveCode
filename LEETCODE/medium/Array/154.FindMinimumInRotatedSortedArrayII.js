/**
 * @param {number[]} nums
 * @return {number}
 */

const bSearchMin = (arr) => {
    let left = 0;
    let right = arr.length - 1;



    while (left < right) {
        // Corrected mid calculation formula
        const mid = Math.floor(left + (right - left) / 2);

        if (arr[left] === arr[mid] && arr[mid] === arr[right]) {
            left++;
            right--;
        }

        if (arr[mid] <= arr[right]) {
            right = mid;
        } else {
            left = mid + 1;
        }

    }

    return { min: arr[right], index: right }
}


const reverse = function (List, start, end) {

    // i starts at the front, j starts at the back
    // The loop runs as long as they haven't crossed (i < j)
    for (let i = start, j = end; i < j; i++, j--) {
        const temp = List[i];
        List[i] = List[j];
        List[j] = temp;
    }
    return List;
}


var findMin = function (nums) {
    const { min, index } = bSearchMin(nums)
    // console.log(index, min);
    //  nums.sort((a,b)=> b -a);

    // now we implement rotation;
    nums = reverse(nums, 0, index - 1);


    nums = reverse(nums, index, nums.length - 1);

    nums = reverse(nums, 0, nums.length - 1);


    return nums[0];
};


//console.log(findMin([1, 3, 3]));
console.log(findMin([3, 3, 1, 3]));