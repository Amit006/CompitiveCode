let testData = {
  "a": {
    "b": {
      "c": {},
      "d": {
        "e": {
          "r": {
            "y": {
              "p": {
              }
            }
          }
        }
      },
      "f": {
        "g": {
          "h": {}
        }
      },
      "q": {
        "w": {
          "s": {
            "o": {
              "x": {}
            }
          }
        }
      }
    }
  }
}


function findDepestEnd(obj, indexArray, counter) {
	let temArr = Object.keys(obj);
  	let endFound = false;
  	if(temArr.length){
    temArr.forEach((dA, idx)=>{
    	if(Object.values(obj[dA]).length) {
      	counter = counter + 1
        findDepestEnd(obj[dA],indexArray, endFound ? 0 : counter)
      } else {
      	indexArray.push({[dA]: counter})
        endFound = true;
       }
   } );
} else 
	 return false;
}

let indexArr = [];
let counter = 0;
findDepestEnd(testData, indexArr, counter)
let max = [0];
let index = [0];

indexArr.forEach((data, idx) => {
	if(data[Object.keys(data)[0]] > max[0]  ){
  	max.splice(0,max.length,data[Object.keys(data)[0]]);
    index.splice(0,index.length, idx);
  } else if (data[Object.keys(data)[0]] == max[0] ){
  	max.push(data[Object.keys(data)[0]]);
    index.push(idx);
  }
});
console.log(index);
console.log(index.map((d)=>Object.keys(indexArr[d])).flat(1));



