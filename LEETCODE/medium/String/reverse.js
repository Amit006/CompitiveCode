function reverseString(string) {
    let reversedString = "";
    for (char of string) {
        reversedString = char + reversedString;
    }
    return reversedString;
}


console.log(reverseString('Amit Nayek'));
