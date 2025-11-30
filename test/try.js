const Intput = "good";

// ganerate all possiable pairs of k

const k = 3;
const genaretedAllPairs = [];
const  backtrack = ( str , start, result) =>{

        if(result.length === k ){
          genaretedAllPairs.push([...result]);
          return;
        }

        for(let i=start; i< str.length; i++){

            result.push(str[i]);
            backtrack(str, start+1, result);
            result.pop();
        }

  // return genaretedAllPairs;
}

console.log(backtrack(Intput.split(""), 0, []));
console.log(genaretedAllPairs);