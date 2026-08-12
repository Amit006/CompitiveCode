/**
 * 1510. Stone Game IV
 *
 * Approach: win[i] = exists square s <= i with win[i - s] false (opponent
 * loses from the remainder).
 *
 * Time:  O(n sqrt n)
 * Space: O(n)
 *
 * @param {number} n
 * @return {boolean}
 */
var winnerSquareGame = function(n) {
    const win = new Uint8Array(n + 1);
    for (let i = 1; i <= n; i++) {
        for (let s = 1; s * s <= i; s++) {
            if (!win[i - s * s]) { win[i] = 1; break; }
        }
    }
    return win[n] === 1;
};

const n = 7;
console.log(winnerSquareGame(n)); // Output: true