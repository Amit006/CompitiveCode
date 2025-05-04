const { readFileSync } = require("fs");
const input = readFileSync(0, "utf8").trim().split("\n");

const firstLine = input[0].split(" ").map(Number);
const N = firstLine[0];
const M = firstLine[1];
const Q = firstLine[2];

let row_map = new Array(N + 1);
for (let i = 1; i <= N; i++) {
  row_map[i] = i;
}

let col_map = new Array(M + 1);
for (let j = 1; j <= M; j++) {
  col_map[j] = j;
}

const output = [];

for (let k = 1; k <= Q; k++) {
  const parts = input[k].split(" ").map(Number);
  const type = parts[0];
  if (type === 1) {
    const C1 = parts[1];
    const C2 = parts[2];
    [col_map[C1], col_map[C2]] = [col_map[C2], col_map[C1]];
  } else if (type === 2) {
    const R1 = parts[1];
    const R2 = parts[2];
    [row_map[R1], row_map[R2]] = [row_map[R2], row_map[R1]];
  } else if (type === 3 || type === 4) {
    const X1 = parts[1];
    const Y1 = parts[2];
    const X2 = parts[3];
    const Y2 = parts[4];

    const or1 = row_map[X1];
    const oc1 = col_map[Y1];
    const val1 = (or1 - 1) * M + oc1;

    const or2 = row_map[X2];
    const oc2 = col_map[Y2];
    const val2 = (or2 - 1) * M + oc2;

    if (type === 3) {
      output.push(val1 | val2);
    } else {
      output.push(val1 & val2);
    }
  }
}

console.log(output.join("\n"));
