let  inputData  = {
    "data": {
        "products": [{
            "id": 1,
            "child_products": [{
                    "id": 2,
                    "child_products": [{
                        "id": 3,
                        "child_products": [{
                            "id": 4,
                            "child_products": []
                        }]
                    }]
                },
                {
                    "id": 5,
                    "child_products": [{
                        "id": 6,
                        "child_products": [{
                            "id": 7,
                            "child_products": []
                        }]
                    }]
                }
            ]
        }]
    }
};
// 1, 2, 3 ->
// 1 ,2, 3 -> 
// we have to print the labels  

 const reutrnLavelAndId = (data, lavel, storeLavelAndId) => {
    storeLavelAndId.push({ id:data?.id, lavel});
    lavel +=1; 
    if(data?.child_products?.length){
        for( let item of data.child_products){
        reutrnLavelAndId(item, lavel, storeLavelAndId);
        
     } 
    } else {lavel=1}
    return  storeLavelAndId;
 }

// console.log(' reutrnData : ', reutrnLavelAndId(inputData.data.products, 1,[]));

for(let j of inputData.data.products){
    console.log(reutrnLavelAndId(j, 1,[]));
}



