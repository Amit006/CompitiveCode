

const isMagic = (A) => {
  if (A < 10) return A === 1 ? 1 : 0;
        return this.solve(this.sumOfdigit(A));

}

const sumOfdigit = (A) => {
  if (A < 10) return A;
  return parseInt(A % 10) + this.sumOfdigit(parseInt(A / 10));
};

console.log(isMagic(19)); // Output: 1
console.log(isMagic(20)); // Output: 0