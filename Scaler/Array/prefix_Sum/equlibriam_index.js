// Example Input
// Input 1:
// A=[-7, 1, 5, 2, -4, 3, 0]
// Input 2:

// A=[1,2,3]


// Example Output
// Output 1:
// 3
// Output 2:

// -1

 function Solve(A) {
        let rs  = A.reduce((a,b)=>a+b,0);
        let ls = 0;
   
        for(let i = 0; i < A.length; i++){
              rs = rs - A[i]
            if(ls===rs) return i;
            else ls = ls + A[i];
        }
        return -1;

    }

let A=[-7, 1, 5, 2, -4, 3, 0]   

Solve(A)