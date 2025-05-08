const combinationSum3 = (k, n) => {
    const result = [];
    
    const backtrack = (start, path, sum) => {
      if (path.length === k && sum === n) {
        result.push([...path]);
        return;
      }
      if (path.length > k || sum > n) return;
      
      for (let i = start; i <= 9; i++) {
        path.push(i);
        backtrack(i + 1, path, sum + i); // Avoid repeats by using i+1
        path.pop();
      }
    };
    
    backtrack(1, [], 0);
    return result;
  };
  
  console.log(combinationSum3(3, 7)); // [[1,2,4]]
  console.log(combinationSum3(3, 9)); // [[1,2,6],[1,3,5],[2,3,4]]
  console.log(combinationSum3(4, 1)); // []