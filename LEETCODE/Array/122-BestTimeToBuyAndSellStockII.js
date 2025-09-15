/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let totalProfit = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (minPrice > prices[i]) {
      minPrice = prices[i];
      continue;
    }

    if (minPrice < prices[i]) {
      totalProfit += prices[i] - minPrice;
      minPrice = prices[i];
    }
  }
  return totalProfit;
};

const input = [7, 1, 5, 3, 6, 4];
const input2 = [1, 2, 3, 4, 5];
const input3 = [7, 6, 4, 3, 1];
console.log(maxProfit(input));
console.log(maxProfit(input2));
console.log(maxProfit(input3));


