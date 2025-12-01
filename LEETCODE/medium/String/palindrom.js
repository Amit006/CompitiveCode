
function isPalindrome(str) {
	let low = 0;
	let high = str.length - 1;

	// Keep comparing characters while they are same
	while (low < high) {
		if (str[low] != str[high]) {
			return 'false'; // not a palindrome.
		}
		low++; // move the low index forward
		high--; // move the high index backwards
	}
	return 'true'; // is a palindrome	 
}

function main()
{
	let str= "abbba";
	let str1 = "abcded";
	
	console.log(" is palindrome ", isPalindrome(str));
	console.log(" is palindrome ", isPalindrome(str1));
}

main();