/**
 * @param {string} num
 * @param {number|string|bigint} t
 * @return {string}
 */
var smallestNumber = function (num, t) {
  t = BigInt(t);

  const PRIMES = [2, 3, 5, 7]; // only primes a digit product can ever contain

  // DIGIT_FACTORS[d] = [e2, e3, e5, e7] — how many of each prime digit d contributes
  const DIGIT_FACTORS = {
    0: [0, 0, 0, 0], 1: [0, 0, 0, 0], 2: [1, 0, 0, 0], 3: [0, 1, 0, 0], 4: [2, 0, 0, 0],
    5: [0, 0, 1, 0], 6: [1, 1, 0, 0], 7: [0, 0, 0, 1], 8: [3, 0, 0, 0], 9: [0, 2, 0, 0],
  };

  const zero = () => [0, 0, 0, 0];
  const sub = (a, b) => a.map((v, i) => Math.max(0, v - b[i]));
  const covers = (need, have) => need.every((v, i) => have[i] >= v);

  function factorTarget(t) {
    const need = zero();
    PRIMES.forEach((p, i) => {
      const bp = BigInt(p);
      while (t % bp === 0n) { t /= bp; need[i]++; }
    });
    return [need, t === 1n]; // false if t has a prime factor other than 2,3,5,7
  }

  function factorsOf(str) {
    const f = zero();
    for (const ch of str) {
      const df = DIGIT_FACTORS[+ch];
      for (let i = 0; i < 4; i++) f[i] += df[i];
    }
    return f;
  }

  // Minimum digits 2-9 whose combined factors cover `need`.
  function minimalDigits(need) {
    const [n2, n3, n5, n7] = need;
    const counts = { 2: 0, 3: 0, 4: 0, 5: n5, 6: 0, 7: n7, 8: 0, 9: 0 };

    counts[8] = Math.floor(n2 / 3);
    let rem2 = n2 % 3;
    counts[9] = Math.floor(n3 / 2);
    counts[3] = n3 % 2;
    counts[4] = Math.floor(rem2 / 2);
    counts[2] = rem2 % 2;

    // Same digit count either way — pick the arrangement that's numerically smaller.
    if (counts[2] === 1 && counts[3] === 1) {
      counts[2] = 0; counts[3] = 0; counts[6] = 1;
    }
    if (counts[3] === 1 && counts[4] === 1) {
      counts[4] = 0; counts[3] = 0; counts[2] = 1; counts[6] = 1;
    }
    return counts;
  }

  const digitCount = (counts) => Object.values(counts).reduce((a, b) => a + b, 0);
  const render = (counts) => {
    let s = '';
    for (let d = 2; d <= 9; d++) s += String(d).repeat(counts[d] || 0);
    return s;
  };

  const [need, achievable] = factorTarget(t);
  if (!achievable) return "-1";

  const minCounts = minimalDigits(need);
  if (digitCount(minCounts) > num.length) return render(minCounts);

  const firstZero = num.indexOf('0');
  if (firstZero === -1 && covers(need, factorsOf(num))) return num;
  const usablePrefixEnd = firstZero === -1 ? num.length : firstZero;

  let prefixFactors = factorsOf(num);
  for (let i = num.length - 1; i >= 0; i--) {
    const d = +num[i];
    for (let k = 0; k < 4; k++) prefixFactors[k] -= DIGIT_FACTORS[d][k];
    const spaceAfter = num.length - 1 - i;
    if (i > usablePrefixEnd) continue;

    for (let bigger = d + 1; bigger <= 9; bigger++) {
      const stillNeeded = sub(sub(need, prefixFactors), DIGIT_FACTORS[bigger]);
      const tailCounts = minimalDigits(stillNeeded);
      const tailLen = digitCount(tailCounts);
      if (tailLen <= spaceAfter) {
        const padding = '1'.repeat(spaceAfter - tailLen);
        return num.slice(0, i) + bigger + padding + render(tailCounts);
      }
    }
  }

  const extendedCounts = minimalDigits(need);
  const padding = '1'.repeat(num.length + 1 - digitCount(extendedCounts));
  return padding + render(extendedCounts);
};

console.log(smallestNumber("123", 6)); // Output: "123"
console.log(smallestNumber("123", 12)); // Output: "126"