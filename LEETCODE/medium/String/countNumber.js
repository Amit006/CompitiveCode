   
function counting(num) {
    return String(num).split('').reduce(
        (count, digit) => count + 1, 0);
}
 
let num1 = 12345;
let num2 = 987654321;
let result1 = counting(num1);
let result2 = counting(num2);
 
console.log("Number of digits in " + num1 + ": "+ result1);
console.log("Number of digits in " + num2 + ": "+ result2);

var sTest = "g66ghy7";

var iCount = 0;
for (iIndex in sTest) {
    if (!isNaN(parseInt(sTest[iIndex]))) {
        iCount++;
    }
}
console.log(iCount);