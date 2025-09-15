const bestTimeToBuyAndSellStock = function (prices) {
  let minPrice = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    const profit = prices[i] - minPrice;
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }
  return maxProfit;
};

const input = [7, 1, 5, 3, 6, 4];
console.log(bestTimeToBuyAndSellStock(input));

const containsDuplicateOptimized = function (prices) {
  if (prices.length < 2) return 0;
  let i = 0;
  let k = 1;
  let result = 0;
  while (k < prices.length) {
    if (prices[i] > prices[k]) {
      i = k;
    } else if (prices[k] - prices[i] > result) {
      result = prices[k] - prices[i];
    }
    k++;
  }
  if (result <= 0) return 0;
  else return result;
};


const input2 = [7, 6, 4, 3, 1];
console.log(containsDuplicateOptimized(input));

