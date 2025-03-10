/*
Input 1: 4

Input 2:  6

Example Output

Output 1:

********
***  ***
**    **
*      *
*      *
**    **
***  ***
********
Output 2:

************
*****  *****
****    ****
***      ***
**        **
*          *
*          *
**        **
***      ***
****    ****
************

*/

const starPattern = (n) => {
  let strLength = n * 2;
  for (let i = 0; i < n * 2; i++) {
    let str = "";
    for (let j = 0; j < strLength; j++) {
      if (i < n) {
        // Top half
        if (i === 0) {
          str += "*";
        } else {
          if (j >= n - i && j <= n + i - 1) {
            str += " ";
          } else {
            str += "*";
          }
        }
      } else {
        // Bottom half
        if (i === strLength - 1) {
          str += "*";
        } else {
          if (j >= i - n + 1 && j < strLength - (i - n + 1)) {
            str += " ";
          } else {
            str += "*";
          }
        }
      }
    }
    console.log(str);
  }
};

starPattern(4);
// starPattern(6);

// Fix the syntax errors in the Solution class
class Solution {
    check(nums) {
        let count = 0, n = nums.length;
        for (let i = 0; i < n; i++) {
            if (nums[i] > nums[(i + 1) % n] && ++count > 1) return false;
        }
        return count <= 1;
    }
}