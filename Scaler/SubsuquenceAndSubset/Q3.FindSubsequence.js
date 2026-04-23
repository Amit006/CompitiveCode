

const  findSubsequence = (A, B) => {
      let index =0;

        for(let char of B){
            if(A[index] === char){
                index++;
            }

            if(index == A.length) return "YES";
        }


        return "NO";
    }


    console.log(findSubsequence("apple", "appel"));



// bitmasking Approach
const  findSubsequenceBitmask = (A, B) => {
      if (A.length === 0) return "YES";
        if (A.length > B.length) return "NO";

        // Bitmask pre-check: if B is missing any letter A needs, impossible
        let requiredMask = 0, availableMask = 0;
        for (let i = 0; i < A.length; i++) {
            requiredMask |= 1 << (A.charCodeAt(i) - 97);
        }
        for (let i = 0; i < B.length; i++) {
            availableMask |= 1 << (B.charCodeAt(i) - 97);
        }
        if ((availableMask & requiredMask) !== requiredMask) return "NO";

        // Real check — two-pointer
        let index = 0;
        for (const char of B) {
            if (A[index] === char) {
                index++;
                if (index === A.length) return "YES";
            }
        }
        return "NO";
    }

    console.log(findSubsequenceBitmask("apple", "appel"));


    