 function solve(A){
   
           let ES = [];
           let OS = [];
           let count = 0;
           A.forEach((data, index) => {           
               if([0,2].includes(index%2)){
                   if(ES.length) ES.push(ES[index-1]+data);
                   else ES.push(data)
   
                   if(OS.length) OS.push(OS[index-1])
                   else OS.push(0)
               } else {
                if(OS.length) OS.push(OS[index-1]+data);
                else OS.push(data)
   
                if(ES.length) ES.push(ES[index-1])
                else ES.push(0)

               } 
   
           })
   
           for( let i = 0 ; i < A.length; i++ ){
               let evenSum = i ? (ES[i-1] + (OS[A.length -1] - OS[i]) ) : ES[ES.length-1];
               let oddSum = i ? (OS[i-1] + (ES[A.length -1] - ES[i]) ) : OS[OS.length-1];
   
               if(evenSum===oddSum) count= count + 1;
               
           }
   
};

solve([ 1, 2, 3, 7, 1, 2, 3 ])