
const longestPalindrome2 = (A) => {
  if (A.length === 0) return "";

  let start = 0;
  let maxLength = 1;

  const expandAroundCenter = (left, right) => {
    console.log("left", left, "right", right, "A[left]", A[left], "A[right]", A[right]);
    while (left >= 0 && right < A.length && A[left] === A[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  };

  for (let i = 0; i < A.length; i++) {
    const len1 = expandAroundCenter(i, i); // Odd length
    const len2 = expandAroundCenter(i, i + 1); // Even length
    const currentMax = Math.max(len1, len2);
    console.log("currentMax", currentMax, "maxLength", maxLength);
    if (currentMax > maxLength) {
      maxLength = currentMax;
      start = i - Math.floor((currentMax - 1) / 2);
    }
  }

  return A.substr(start, maxLength);
};

console.log(longestPalindrome2("aaaabaaa")); // Output: "bab" or aba"
