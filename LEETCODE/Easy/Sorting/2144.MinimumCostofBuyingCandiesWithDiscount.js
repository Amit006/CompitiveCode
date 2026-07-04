/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost) {
    if (cost.length < 3) return cost.reduce((a, b) => a + b);

    cost.sort((a, b) => b - a);
    let totalCost = 0, index = 0, min = 0;

    while (index <= cost.length) {

        if (index + 2 <= cost.length) {
            totalCost += cost[index] + cost[index + 1];
            index += 3
        } else {
            totalCost+= cost[index] || 0;
            index+=1;
        }
    }

    return totalCost;
};

console.log(minimumCost([1, 2, 3])); // 5
console.log(minimumCost([1, 2, 3, 4])); // 10
console.log(minimumCost([1, 2, 3, 4, 5])); // 14