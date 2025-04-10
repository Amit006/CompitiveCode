

const ABModulo = (A, B) => {
   return Math.abs(A - B)
}

// tried to solve the problem using the brute force method but it was not working as expected.
const ABModulo_v0 = (A, B) => {
    let maxVal = Math.max(A, B);
    let minVal = Math.min(A,B);
    let IfDivisiable =  maxVal % minVal;
    if(IfDivisiable == 0) return minVal

    for (let i = minVal; i < maxVal; i++) {
       if((A % i)  == (B% i)){
        return i;
       }
       
    }
}


// console.log(ABModulo(5, 10)); // 5
// console.log(ABModulo(10, 5)); // 5
console.log(ABModulo(6816621, 8157697)); //  it has to be 1341076

// what should i fix 
// 1. the function should return the value of A % B
// 2. the function should return the value of B % A     
// 3. the function should return the value of A % B + B % A
// 4. the function should return the value of A % B - B % A\
// 5. the function should return the value of A % B * B % A
// canm
