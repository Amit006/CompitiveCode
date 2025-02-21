
   
//   find the most frequent item and frequency from array
 
/*    input arr=[2,4,5,6,7,1,2,1,1]
   output { item:1,
            frequency:3
            } */
            
 var arr=[2,4,5,6,7,1,2,1,1] ;        
 
 const returnFrequentFrequncy = (arr) => {
     let countFrequncyObj = {
         
     };
     
     arr.forEach((num, index)=>{
         if(countFrequncyObj[num]){
             countFrequncyObj[num] =  countFrequncyObj[num]+1;
         } else {
             countFrequncyObj[num] = 1
         }
     })
     const frequncyValues= Object.values(countFrequncyObj);
     const frequncykeys= Object.keys(countFrequncyObj);
     let maxfrequncy = Math.max(...frequncyValues);
     let index = frequncyValues.findIndex(d=>d===maxfrequncy);
     
     return { 'item': maxfrequncy, frequency:frequncykeys[index] };
 }
 
 
 console.log(returnFrequentFrequncy(arr));