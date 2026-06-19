/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let maxGain = -Infinity, previous = 0;
    for(let i=0; i< gain.length; i++){
         previous += gain[i]
         maxGain = Math.max(previous, maxGain);
    }
    return maxGain < 0 ? 0 : maxGain;
};

console.log(largestAltitude([-5,1,5,0,-7])) // 1
console.log(largestAltitude([-4,-3,-2,-1,4,3,2])) // 0