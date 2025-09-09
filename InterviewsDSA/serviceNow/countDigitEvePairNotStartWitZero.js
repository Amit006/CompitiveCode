/*



*/



function findEvenNumbers(digits) {
    const count = new Array(10).fill(0);
    for (const digit of digits) {
        count[digit]++;
    }
    const result = [];
    for (let i = 1; i <= 9; i++) { // hundreds place (no 0)
        if (count[i] === 0) continue; // skip if digit not available
        count[i]--; // use one i
        for (let j = 0; j <= 9; j++) { // tens place (can be 0)
            if (count[j] === 0) continue;
            count[j]--;
            for (let k = 0; k <= 9; k += 2) { // ones place (even digits only)
                if (count[k] === 0) continue;
                const num = i * 100 + j * 10 + k;
                result.push(num);
            }
            count[j]++; // backtrack tens place
        }
        count[i]++; // backtrack hundreds place
    }
    return result.sort((a, b) => a - b);
}
//Example usage
let arr = [2, 1, 0, 3]
let numbers = findEvenNumbers(arr)
console.log(numbers)   // Output: [120, 122, 210, 212, 310, 312]
