

const oddEvenSubsequences = (A, B) => {
       let N = A.length;

        function dfs(i, sum){
            if(sum === B) return true;
            if(i === N) return false;

            // Option 1: include A[i]
            if(dfs(i+1, sum + A[i])) return true;

            // Option 2: skip A[i]
            if(dfs(i+1, sum)) return true;

            return false;
        }

      return dfs(0, 0) ? 1 : 0;
}


console.log(oddEvenSubsequences([1, 2, 3], 5));


// bitmasking Approach
const oddEvenSubsequencesBitmask = (A, B) => {
    const N = A.length;

        // Iterate over all subsets
        for(let mask = 0; mask < (1 << N); mask++){
            let sum = 0;

            for(let i = 0; i < N; i++){
                if(mask & (1 << i)){
                    sum += A[i];
                }
            }

            if(sum === B) return 1;
        }

        return 0;
}

console.log(oddEvenSubsequencesBitmask([1, 2, 3], 5));