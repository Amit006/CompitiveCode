/**
 * @param {string} s
 * @return {string[]}
 */
const removeInvalidParentheses = s => {
    const res = [];

    const fwd = (s, li, lj) => {
        let bal = 0;

        for (let i = li; i < s.length; i++) {
            bal += (s[i] === '(') - (s[i] === ')');
            if (bal >= 0) continue;

            for (let j = lj; j <= i; j++) 
                if (s[j] === ')' && (j === lj || s[j - 1] !== ')'))
                    fwd(s.slice(0, j) + s.slice(j + 1), i, j);
            
            return;
        }

        bwd(s, s.length - 1, s.length - 1);
    };

    const bwd = (s, ri, rj) => {
        let bal = 0;

        for (let i = ri; i > -1; i--) {
            bal += (s[i] === ')') - (s[i] === '('); 
            if (bal >= 0) continue;

            for (let j = rj; j >= i; j--) 
                if (s[j] === '(' && (j === rj || s[j + 1] !== '('))
                    bwd(s.slice(0, j) + s.slice(j + 1), i - 1, j - 1);

            return;
        }

        res.push(s);
    };

    fwd(s, 0, 0);

    return res;
};

console.log(removeInvalidParentheses("()())()")); // ["(())()", "()()()"]