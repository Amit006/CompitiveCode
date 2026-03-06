/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
    let steps=0, num = parseInt(s, 2);

    while(num > 1){
        if(num % 2 == 0) {
            num = num / 2; 
        } else num +=1;
        steps+=1;
    }
    
    return steps;
};

// console.log(numSteps("1101")); // 6
// console.log(numSteps("10")); // 1
// console.log(numSteps("1")); // 0
// console.log(numSteps("1111011110000011100000110001011011110010111001010111110001")); // 85


// is there any issue on upper function ?
// Approach 2 - Bit manipulation
var numSteps2 = function(s) {
    let steps = 0, num = parseInt(s, 2);

    while(num > 1){
        if((num & 1) === 0) { // Check if the number is even using bitwise AND
            num = num >> 1; // Right shift to divide by 2   
        } else {
            num += 1; // If odd, add 1 to make it even
        }
        steps++;
    }
    return steps;
}

console.log(numSteps2("1111011110000011100000110001011011110010111001010111110001")); // 85

