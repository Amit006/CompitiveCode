/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let strMap = new Map();
  let start = 0,
    count = 0,
    maxWindow = 0;
  for (const str of s) {
    if (strMap.get(str) > -1) {
      let lastIndex = strMap.get(str) + 1;
      start = Math.max(start, lastIndex);
      strMap.set(str, count);
    } else strMap.set(str, count);

    count++;
    maxWindow = Math.max(maxWindow, count - start);
  }

  return maxWindow;
};

// const Input = "abcabcbb";
// console.log(lengthOfLongestSubstring(Input));
// const Input2 = "bbbbb";
// console.log(lengthOfLongestSubstring(Input2));
// const Input3 = "pwwkew";
// console.log(lengthOfLongestSubstring(Input3));
// const Input4 = "dvdf";
// console.log(lengthOfLongestSubstring(Input4));
// const Input5 = "anviaj";
// console.log(lengthOfLongestSubstring(Input5));
// const Input6 = "tmmzuxt";
// console.log(lengthOfLongestSubstring(Input6));

// // Optimized Solution
const lengthOfLongestSubstring2 = function (s) {
  let set = new Set();
  let left = 0,
    maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[i]);
    maxLength = Math.max(maxLength, i - left + 1);
    console.log(set, "left:", left, "right:", i, "maxLength:", maxLength);
  }
  return maxLength;
};
console.log("Optimized Solution");
// console.log(lengthOfLongestSubstring2(Input));
// console.log(lengthOfLongestSubstring2(Input2));
// console.log(lengthOfLongestSubstring2(Input3));
// console.log(lengthOfLongestSubstring2(Input4));
// console.log(lengthOfLongestSubstring2(Input5));
// console.log(lengthOfLongestSubstring2(Input6));

const testInput = "produce by performing specified mathematical or logical operations on an initial set";
console.log(lengthOfLongestSubstring2(testInput.replaceAll(" ", "")));