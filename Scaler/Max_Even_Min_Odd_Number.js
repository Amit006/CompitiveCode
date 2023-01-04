 function Solve(A){

    let maxEven = -4294967294;
    let minOdd  = 4294967294;
    A.forEach((element, index)=>{
        if(element % 2 == 0) maxEven = element >  maxEven ? element : maxEven;
        else 
            minOdd = element < minOdd ? element : minOdd; 
    });
    console.log(maxEven, minOdd)
 return maxEven -  minOdd;
}

let a = [ 74, 9, 51, 51, 75, 0, 35, 89, 96, 77 ];
let b = [ -98, 54, -52, 15, 23, -97, 12, -64, 52, 85 ];
let c = [ -15, -45, 43, 23, -63, 69, 35, 19, 37, -52 ];
Solve(a)
Solve(b)
Solve(c)