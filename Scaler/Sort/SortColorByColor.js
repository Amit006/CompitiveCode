const sortColors  =  function(A){
    let low = 0;
    let mid = 0;
    let high = A.length - 1;

    while (mid <= high) {
       

        if (A[mid] === 0) {
            [A[mid], A[low]] = [A[low], A[mid]];
            low++;
            mid++;
        } else if (A[mid] === 1) {
            mid++;
        } else { // A[mid] === 2
           
            [A[mid], A[high]] = [A[high], A[mid]];
            high--;
            // Note: mid is not incremented here
        }
        console.log('mid:', mid,'-',A[mid], 'High:',high, '--', A[high]);
        console.log('A:',A);
    }
    return A;
}



// console.log(sortColors([0, 1, 2, 0, 1, 2])); // [0, 0, 1, 1, 2, 2]
console.log(sortColors([0, 2, 4, 6, -1, 3])); // [0, 0, 1, 1, 2, 2]