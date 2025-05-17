const flatten = (value) => {
  if (value.length === 0) {
    return [];
  }
  return value.reduce((acc, current) => {
    return acc.concat(Array.isArray(current) ? flatten(current) : current);
  }, []);
};

const input = [1, 2, [3, 4], [5, [6, 7]]];
const output = flatten(input);
console.log(output); // [1, 2, 3, 4, 5, 6, 7]
