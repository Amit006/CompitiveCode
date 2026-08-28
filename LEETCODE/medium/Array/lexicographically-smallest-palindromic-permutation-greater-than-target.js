/**
 * @param {string} s
 * @param {string} target
 * @return {string}
 */
var lexPalindromicPermutation = function(s, target) {
    const n = s.length;

    const freq = new Array(26).fill(0);

    for (const ch of s) {
        freq[ch.charCodeAt(0) - 97]++;
    }

    let middle = "";

    for (let i = 0; i < 26; i++) {
        if (freq[i] % 2 === 1) {
            if (middle !== "") {
                return "";
            }

            middle = String.fromCharCode(97 + i);
        }

        freq[i] = Math.floor(freq[i] / 2);
    }

    const halfLen = Math.floor(n / 2);

    const half = [];

    let matched = 0;

    while (matched < halfLen) {
        const c = target.charCodeAt(matched) - 97;

        if (freq[c] === 0) {
            break;
        }

        freq[c]--;
        half.push(String.fromCharCode(97 + c)
        );

        matched++;
    }

    let i = matched;

    while (i >= 0) {
        if (i < halfLen) {
            const start = target.charCodeAt(i) - 97 + 1;

            for (let c = start; c < 26; c++) {
                if (freq[c] === 0) {
                    continue;
                }
                freq[c]--;
                let suffix = "";
                for (let j = 0; j < 26; j++) {
                    suffix += String.fromCharCode(97 + j).repeat(freq[j]);
                }

                const left = half.slice(0, i).join("") + String.fromCharCode(97 + c) + suffix;

                const candidate = left + middle + [...left].reverse().join("");

                if (candidate > target) {
                    return candidate;
                }

                freq[c]++;
            }
        }

        if (i === halfLen) {
            const left = half.join("");

            const candidate = left + middle + [...left].reverse().join("");

            if (candidate > target) {
                return candidate;
            }
        }

        i--;

        if (i >= 0) {
            const c = half[i].charCodeAt(0) - 97;
            freq[c]++;
            half.pop();
        }
    }

    return "";
};

console.log(lexPalindromicPermutation("aabb", "abba")); // Output: "baab"
console.log(lexPalindromicPermutation("aabb", "baab")); // Output: ""
