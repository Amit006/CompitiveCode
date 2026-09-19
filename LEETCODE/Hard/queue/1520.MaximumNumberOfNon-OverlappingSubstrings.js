/**
 * @param {string} s
 * @return {string[]}
 */
var maxNumOfSubstrings = function(s) {
    const count = new Array(26).fill(0);
    const first = new Array(26).fill(-1);
    const last = new Array(26).fill(-1);

    const order = [];

    for (let i = 0; i < s.length; i++) {
        const c = s.charCodeAt(i) - 97;

        if (count[c] === 0) {
            first[c] = i;
            order.push(c);
        }

        count[c]++;
        last[c] = i;
    }

    const res = [];
    let queue = [];

    for (const c of order) {
        queue.unshift([first[c], last[c], count[c]]);

        let left = Infinity;
        let right = -Infinity;
        let total = 0;

        for (const [x, y, z] of queue) {
            total += z;
            left = Math.min(left, x);
            right = Math.max(right, y);

            if (total === right - left + 1) {
                break;
            }
        }

        if (total === right - left + 1) {
            res.push(s.substring(left, right + 1));
            queue = [];
        }
    }

    return res;
};


console.log(maxNumOfSubstrings("adefaddaccc"));