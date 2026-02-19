 
 let lastCount =0;
 let n = 5;
 for(let i=0; i< n; i++){
    lastCount = lastCount ? lastCount+2 : 1;
    let row = "";
    for(let s=0; s< (n-(i+1)); s++){
        row += " ";
    }
    for(let j=0; j< lastCount; j++){
        row += "*";
    }
    console.log(row);
    
 }