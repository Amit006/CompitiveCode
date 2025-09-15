var removeDuplicates = function(nums) {
    const hashMap = new Map();

    for(const n of nums){
        hashMap.set(n, (hashMap.get(n) || 0 )+1) 
    }

    return hashMap.size;
};

const input = [1,1,2];
console.log(removeDuplicates([1,1,2]));