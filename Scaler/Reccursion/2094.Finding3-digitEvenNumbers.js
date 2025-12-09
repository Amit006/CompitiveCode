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

console.log(findEvenNumbers([2, 1, 3, 0]));