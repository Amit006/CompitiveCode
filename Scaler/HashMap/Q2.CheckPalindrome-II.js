const isPalindrome = (A) => {
  const charCounts = new Array(26).fill(0); // For lowercase English letters

  for (let i = 0; i < A.length; i++) {
    const charCode = A.charCodeAt(i) - "a".charCodeAt(0);
    charCounts[charCode]++;
  }
  console.log("Charcount array:", charCounts);
  let oddCount = 0;
  for (let i = 0; i < 26; i++) {
    if (charCounts[i] % 2 !== 0) {
      oddCount++;
    }
  }

  return oddCount <= 1 ? "Palindrom" : "Not Palindrom"; // Return 1 for palindrome, 0 for not palindrome
};

// console.log(isPalindrome("acbdabca")); // 1 (can be rearranged to "abcabc")

// #another approach using a hash map (object in JavaScript)
const isPalindrome_v2 = (A) => {
  const charCounts = {}; // Hash map to store character counts

  for (let i = 0; i < A.length; i++) {
    const char = A[i];
    charCounts[char] = (charCounts[char] || 0) + 1;
  }

  let oddCount = 0;
  for (const count of Object.values(charCounts)) {
    if (count % 2 !== 0) {
      oddCount++;
    }
  }

  return oddCount <= 1 ? "Palindrom" : "Not Palindrom"; // Return 1 for palindrome, 0 for not palindrome
};

// another approach using swapping the string
const isPalindrome_v3 = (A) => {
  let isPalindrome = false;
  let left = 0;
  let right = A.length - 1;

  while (left < right) {
    if (A[left] !== A[right]) {
      isPalindrome = false;
      break;
    }
    left++;
    right--;
  }
 return isPalindrome ? "Palindrom" : "Not Palindrom"; // Return 1 for palindrome, 0 for not palindrome

};

console.log(isPalindrome("acbdaabca")); // 1 (can be rearranged to "abcabc")


/*






*/