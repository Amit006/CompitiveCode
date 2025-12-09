const Input = "good";
const Input2 = [2,1,3,0];

// generate all possible pairs of k

const k = 3;
const generatedAllPairs = [];
const  backtrack = ( str , start, result) =>{

        if(result.length === k ){
          generatedAllPairs.push([...result]);
          return;
        }

        for(let i=start; i< str.length; i++){

           if(result[result.length-1] && result[result.length-1] === str[i]) continue;
           
            result.push(str[i]);
            backtrack(str, i+1, result);
            result.pop();
        }

  return generatedAllPairs;
}

// console.log(backtrack(Input.split(""), 0, []));
// console.log(backtrack(Input2, 0, []));
// console.log(generatedAllPairs);


var findEvenNumbers = function (digits) {
    const cnt = new Array(10).fill(0);
    for (const d of digits) cnt[d]++;
    
    const res = [];

    function backtrack(pos, current, cnt) {
        if (pos === 3) {
            res.push(current);
            return;
        }

        for (let d = 0; d <= 9; d++) {
            if (cnt[d] === 0) continue;

            // no leading zero
            if (pos === 0 && d === 0) continue;

            // last digit must be even
            if (pos === 2 && (d & 1)) continue;

            cnt[d]--;
 
            backtrack(pos + 1, current * 10 + d, cnt);
            cnt[d]++;     // backtrack
       
        }
    }

    backtrack(0, 0, cnt);
    return res;
};

// console.log(findEvenNumbers([2, 1, 3, 0]));


 const stringList = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

    var letterCombinations = function(digits) {
        if(digits.length === 0) return [];

        const result = [];

        const backtrack = (index, path) => {
            if(path.length === digits.length){
                result.push(path);
                return;
            }

            const digit = digits[index];
            const letters = stringList[digit - 2]; 
            for(let i=0; i< letters.length; i++){
                backtrack(index + 1, path + letters[i]);
            }

        }

        backtrack(0, "");
        return result;
    }
    // console.log(letterCombinations("23")); 


// 22. Generate Parentheses 
var generateParenthesis = function(n) {
    const result = [];
    const backtrack = (open, close,path) => {
        if(path.length === n * 2){
            result.push(path);
            return;
        }
        console.log(open, close, path);
        for(let i = open ; i<n; i++){ 
            path+="(";
            open++;
            while(close <= open){
                path+=")";
                close++;
            }
            console.log("Adding ( ", open, close, path);
            backtrack(open, close, path);
        }

	}

	backtrack(0, 1,"");
	return result;
};
console.log(generateParenthesis(3));