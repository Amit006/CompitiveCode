const LittlePonnyAndMaximumElement = (A, B) => {
  let max = B;
  let count = 0;
  if (!A.includes(B)) return -1;
  for (let i = 0; i < A.length; i++) {
    if (A[i] > max) {
      count++;
    }
  }
  return count ? count : -1;
};
