/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
    let sorted = new Int32Array(Array.from(new Set(arr))).sort();
    const indexMap = new Map();

    for (let j = 0; j < arr.length; j++) {
        indexMap.set(sorted[j], j + 1);
    }


    return arr.map(d => indexMap.get(d));
};

console.log(arrayRankTransform([40, 10, 20, 30])); // [4,1,2,3]