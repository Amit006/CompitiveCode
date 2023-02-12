let array2 = [1,-2,-3,-4,1,5,6,7,8];
let array = [-8,1,-2,6,-3,7,-4,1,7,-2,8,-10];

for(let i=0; i<array.length-1; i++){
  	if(array[i] > array[i+1]){
    	swap(array[i+1], array[i], i)
      i=i-2;
    } 
}
function swap(a, b, i){
	array.splice(i,1,a)
  array.splice(i+1,1,b)
}

console.log(array)



let array2 = [1,-2,-3,-4,1,5,6,7,8];
let array = [-8,1,-2,6,-3,7,-4,1,7,-2,8,-10];
n ;
for(let i=0; i<array.length-1; i++){
		let pArrayIndex = []; 
  	if( (array[i] >= 0 && array[i+1] >=0) && array[i] > array[i+1]){
    	swap(array[i+1], array[i], i)
      i=i-2;
    } else if(pArrayIndex.length && array[i] >= 0 ){
    			pArrayIndex.forEach((d, idx)=>{
          if(array[d] > array[i])
          	swap(array[i],array[d] ,d);
          })
    } else if (array[i] >= 0){
    	pArrayIndex.push(array[i]);
    }
}
function swap(a, b, i){
	array.splice(i,1,a);
  array.splice(i+1,1,b);
}

console.log(array)