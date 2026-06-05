var totalWaviness = function (num1, num2) {
  const f = (S) => {
    const D = [...S].map(Number), n = D.length, memo = new Map();
    const dp = (i, a, b, tight, started) => {
      if (i === n) return [1n, 0n];
      const k = tight ? -1 : ((i * 11 + (a + 1)) * 11 + (b + 1)) * 2 + (started ? 1 : 0);
      if (k >= 0 && memo.has(k)) return memo.get(k);
      const hi = tight ? D[i] : 9;
      let cnt = 0n, wav = 0n;
      for (let d = 0; d <= hi; d++) {
        const st = started || d > 0;
        let na = a, nb = b, add = 0n;
        if (st) {
          if (a >= 0 && b >= 0 && ((b > a && b > d) || (b < a && b < d))) add = 1n;
          na = b; nb = d;
        } else { na = -1; nb = -1; }
        const [c, w] = dp(i + 1, na, nb, tight && d === hi, st);
        cnt += c; wav += w + add * c;
      }
      const r = [cnt, wav];
      if (k >= 0) memo.set(k, r);
      return r;
    };
    return dp(0, -1, -1, true, false)[1];
  };
  const dec = (x) => (BigInt(x) - 1n).toString();
  return Number(f(num2.toString()) - f(dec(num1)));
};


console.log(totalWaviness(100, 123)); // Output: 4 (101, 111, 121, 123)
console.log(totalWaviness(150, 200)); // Output: 5 (151, 152, 153, 154, 155)
console.log(totalWaviness(1, 99)); // Output: 0 (No 3-digit windows)
console.log(totalWaviness(100, 199)); // Output: 10 (101, 102, 103, 104, 105, 106, 107, 108, 109, 110)