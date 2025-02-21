const solve = (A, B) => {
  const result = [];

  for (let i = 0; i < A.length; i++) {
    if (this.isCenter(A, i, B)) {
      result.push(i);
    }
  }

  return result;
};

const isCenter = (A, centerIndex, B) => {
  const subarrayLength = 2 * B + 1;
  const startIndex = centerIndex - B;
  const endIndex = centerIndex + B;

  if (startIndex < 0 || endIndex >= A.length) {
    return false;
  }

  if (endIndex - startIndex + 1 !== subarrayLength) {
    return false;
  }

  // Check if the subarray is alternating
  for (let i = startIndex; i < endIndex; i++) {
    if (A[i] === A[i + 1]) {
      return false;
    }
  }

  return true;
};


//output 
const A = [1, 0, 1, 0, 1]
const B = 1;  
// Input 2:

const A1 = [0, 0, 0, 1, 1, 0, 1]
const B2 = 0 ;
