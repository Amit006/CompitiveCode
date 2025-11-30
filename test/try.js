const Intput = "good";

// ganerate all possiable pairs of k

const k = 3;
const genaretedAllPairs = [];
const  backtrack = ( str , result) =>{

        if(result.length === k )
        genaretedAllPairs.push(result);


        for(let i=0; i< str.length; i++){

            result.push(str[i]);
            backtrack(str.slice(i, str.length), result);
            result.pop();
        }
  return genaretedAllPairs;
}

console.log(backtrack(Intput, k));
