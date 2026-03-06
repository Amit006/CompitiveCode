var checkOnesSegment = (s) => {
    let count = 0,
        flag = false;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "1") {
            if (!flag) {
                count++;
                flag = false;
            } else return false;
        } else if (s[i] === "0") {
            flag = true;
        }
    }

    return Boolean(count);
};

console.log(checkOnesSegment("1001"));
console.log(checkOnesSegment("1000"));
console.log(checkOnesSegment("1100111"));
// console.log(checkOnesSegment("110"));
