const pow = (x, n, c) => {
  if (B === 0) {
    return 1 % C;
  }

  // Recursive call: Calculate (A^(B/2)) % C
  let halfPower = this.pow(A, Math.floor(B / 2), C);

  // Calculate (A^B) % C based on whether B is even or odd
  let result;
  if (B % 2 === 0) {
    // If B is even: (A^B) % C = ((A^(B/2)) % C * (A^(B/2)) % C) % C
    result = (halfPower * halfPower) % C;
  } else {
    // If B is odd: (A^B) % C = (A * (A^(B/2)) % C * (A^(B/2)) % C) % C
    result = ((((A % C) * halfPower) % C) * halfPower) % C;
  }

  // Ensure the result is non-negative
  return (result + C) % C;
};
