/**
 * @param {string} s
 * @param {string} target
 * @return {string}
 */
var lexGreaterPermutation = function(s, target) {
    const n = s.length;

    const cnt = new Array(26).fill(0);

    for (const ch of s) {
        cnt[ch.charCodeAt(0) - 97]++;
    }

    let p = 0;

    while (p < n) {
        const c = target.charCodeAt(p) - 97;

        if (cnt[c] === 0) {
            break;
        }

        cnt[c]--;
        p++;
    }

    let i = p;

    while (i >= 0) {
        if (i < n) {
            const t = target.charCodeAt(i) - 97;
            let pick = -1;

            for (let c = t + 1; c < 26; c++) {
                if (cnt[c] > 0) {
                    pick = c;
                    break;
                }
            }

            if (pick >= 0) {
                cnt[pick]--;

                let tail = "";

                for (let c = 0; c < 26; c++) {
                    tail += String.fromCharCode(97 + c).repeat(cnt[c]);
                }

                cnt[pick]++;

                return target.slice(0, i)
                    + String.fromCharCode(97 + pick)
                    + tail;
            }
        }

        i--;

        if (i >= 0) {
            cnt[target.charCodeAt(i) - 97]++;
        }
    }

    return "";
};

console.log(lexGreaterPermutation("abc", "acb")); // Output: "bac"
console.log(lexGreaterPermutation("abc", "cba")); // Output: ""