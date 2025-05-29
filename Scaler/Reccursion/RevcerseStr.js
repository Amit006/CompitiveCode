
const  printReverse = (s, index) => {
    // Base case: If the index is less than 0, we've reached the beginning of the string
    if (index < 0) {
        return "";
    }
    // Recursive call: Move to the previous character
    const reversed = printReverse(s, index - 1);
    // Build the reversed string
    return s[index] + reversed ;
}
