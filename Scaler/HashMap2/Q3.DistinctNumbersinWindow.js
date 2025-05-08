

const distinctNumbersInWindow = (A, B) => {

    const n = A.length;
    const result = [];
    const map = new Map();
    
    for (let i = 0; i < B; i++) {
        map.set(A[i], (map.get(A[i]) || 0) + 1);
    }
    console.log("Map.size", map.size);
    // Push the size of the map (number of distinct elements) to the result array
    result.push(map.size);
    
    for (let i = B; i < n; i++) {
        map.set(A[i], (map.get(A[i]) || 0) + 1);
        if (map.get(A[i - B]) === 1) {
        map.delete(A[i - B]);
        } else {
        map.set(A[i - B], map.get(A[i - B]) - 1);
        }
        result.push(map.size);
    }
    
    return result;



}


let A=[1, 2, 1, 3, 4, 3],  B = 3;

// console.log(distinctNumbersInWindow(A, B)); // [3, 4, 4]
// Output: [3, 4, 4]


const  distinctNumbersInWindow2 = (A, B) => {

    const n = A.length;
    const result = [];

   for(let i = 0; i <= n - B; i++) {
        const window = A.slice(i, i + B);
        const distinctCount = new Set(window).size;
        result.push(distinctCount);
    }

   return result;
}


console.log(distinctNumbersInWindow2(A, B)); // [3, 4, 4]
// Output: [3, 4, 4]


// O(n^2) solution
const  distinctNumbersInWindow3 = (A, B) => {
    const n = A.length;
    const result = [];

   for(let i = 0; i <= n - B; i++) {
        const window = A.slice(i, i + B);
        const distinctCount = new Set(window).size;
        result.push(distinctCount);
    }

   return result;
}