// using twos pointers approach
const LittlePonnyAndPalindromes = (s) => {
  let str = s.split("");
  let ptrStart = 0;
  let ptrEnd = s.length - 1;
  let count = 0;
  let lastIndex = -1;

  while (ptrStart <= ptrEnd && ptrEnd >= ptrStart && count < 2) {
    if (str[ptrStart] === str[ptrEnd] && lastIndex === -1) {
      ptrStart++;
      ptrEnd--;
    } else {
      if (lastIndex == -1) {
        lastIndex = ptrStart;
      }
      if (str[ptrStart] === str[ptrEnd]) {
        swap(str, lastIndex, ptrStart);
        if (checkPalindrome(str)) return 1;
        count++;
        ptrStart = lastIndex + 1;
        ptrEnd--;
        lastIndex = -1;
      } else ptrStart++;
    }
  }
  return 0;
};

const swap = (s, i, j) => {
  [s[i], s[j]] = [s[j], s[i]];
  // console.log(s);
};
const checkPalindrome = (s) => {
  if (s.length === 0) return true;
  if (s.length === 1) return true;
  let ptrStart = 0;
  let ptrEnd = s.length - 1;
  while (ptrStart <= ptrEnd) {
    // console.log(ptrStart, ptrEnd, s[ptrStart], s[ptrEnd]);
    if (s[ptrStart] !== s[ptrEnd]) {
      return false;
    }
    ptrStart++;
    ptrEnd--;
  }
  return true;
};


// Approach 2 
const LittlePonnyAndPalindromes2 = (A) => {
   const freq = {};
  for (let ch of A) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  let oddCount = 0;
  for (let key in freq) {
    if (freq[key] % 2 !== 0) oddCount++;
  }
  // For even length, no odd counts allowed. For odd length, only one odd count allowed.
  return oddCount <= 1 ? 1 : 0;
}




// console.log(LittlePonnyAndPalindromes("abca")); // Output: 1
// console.log(LittlePonnyAndPalindromes("racecar")); // Output: 0
// console.log(LittlePonnyAndPalindromes("acbab")); // Output: 1
console.log(LittlePonnyAndPalindromes2("acbab")); // Output: 1
console.log(
  LittlePonnyAndPalindromes("swxslszkzygsrawregxcefnlvyfkyxysntxacvsts")
); // Output: 1
// console.log(solve("acbab")); // Output: 0
// console.log(LittlePonnyAndPalindromes("a")); // Output: 0
