


let input = "I'm amazing  and testing  backtracking concepts!";
let input2 = "Testing";

// we will try to generate all possible substrings by backtracking

let result = [];

// we need to generate all possible substrings length 3  which can defined dynamically
let substringLength = 3;

const backtrack = (start, path, str) => {
    // base case
    if (path.length === substringLength) {
        result.push(path);
        return;
    }
    for (let i = start; i < str.length; i++) {
        // choose
        path += str[i];
        // explore
        backtrack(i + 1, path, str);
        // un-choose
        path = path.slice(0, -1);
    }
};

backtrack(0, "", input2);

console.log(result);
