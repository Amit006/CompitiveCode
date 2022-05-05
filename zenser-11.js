Promise.resolve(1).then((x) => x + 1).then((x) => { throw new Error('My Error') }).catch(() => 1).then((x) => x + 1)
.then((x) => console.log("Promise result: ", x)).catch(console.error)

let nestedArray = [1,2,[4,[3,"7",[1,2,3,4,5,"abc10"]]]];


Array.prototype.sumOfArray = function(lavel) {
  let sum = 0;
  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i])) {
      sum += this[i].sumOfArray(this[i], lavel);
    } else if (typeof this[i] != 'string') {
      sum += this[i];
    }
  }
  return sum;
}

console.log('SumOf Array: ', nestedArray.sumOfArray(1));


// console.log(nestedArray.sumOfArray(nestedArray, 0));


