// Input 1:
let A = [1, 2, 3, 4, 5];
// Output 1:
let B = [120, 60, 40, 30, 24];

//    const prefixSum = A.map((a,index)=>a* /(index? A[index-1] : 1));

//    console.log('prefix Sum:', prefixSum);
//    for(let i=0; i< A.length;i++) {

//    }
// [ 1, 2, 6, 12, 20 ]
// [ 120, 120, 60, 20, 5 ]

let N = A.length;
// prefix products
let pf = [A[0]];
for (let i = 1; i < N; i++) {
  pf.push(pf[i - 1] * A[i]);
}
console.log(" pf: ", pf);

// suffix products
let sf = Array(N).fill(1);
sf[N - 1] = A[N - 1];
for (let i = N - 2; i >= 0; i--) {
  sf[i] = sf[i + 1] * A[i];
}
console.log(" sf: ", sf);

// for i-th element, pf holds product of elements in left side
// sf holds product of elements in right side
// by ignoring i-th element find the remaining elements products
let products = [];
for (let i = 0; i < N; i++) {
  if (i == 0) {
    // If no left side elements
    products.push(sf[i + 1]);
  } else if (i == N-1) {
    // If no right side elements
    products.push(pf[i-1]);
  } else {
   let p = pf[i - 1] * sf[i + 1];
   products.push(p);
  }
  
}

console.log("products: ", products);
