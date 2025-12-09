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

// backtrack(0, "", input2);

// console.log(result);

// we will generate all possible permutation of string

let permutationResult = new Set();
let stringInput = "ABCBA";


const generatePermutations = (path, used, str) => {
    // base case
    if (path.length === str.length) {
        permutationResult.add(path);
        return;
    }

    for (let i = 0; i < str.length; i++) {
        if (used[i]) continue;
        // choose
        used[i] = true;
        path += str[i];
        // explore
        generatePermutations(path, used, str);
        // un-choose
        used[i] = false;
        path = path.slice(0, -1);
    }
    return permutationResult;
};

// console.log(generatePermutations("", Array(stringInput.length).fill(false), stringInput));
// console.log(generatePermutations([], [], NumInput));

// same  using stack
const generatePermutationsUsingStack = (str) => {
    let stack = [];
    let result = new Set();
    stack.push({ path: "", used: Array(str.length).fill(false) });

    while (stack.length > 0) {
        let { path, used } = stack.pop();

        if (path.length === str.length) {
            result.add(path);
            continue;
        }

        for (let i = 0; i < str.length; i++) {
            if (used[i]) continue;

            let newUsed = used.slice();
            newUsed[i] = true;
            stack.push({ path: path + str[i], used: newUsed });
        }
    }

    return result;
};

// console.log(generatePermutationsUsingStack(stringInput));

let NumInput = [2, 1, 3, 0];
let NumInput2 = [2,2,8,8,2];
const permutationResultEven = new Set();
const generateEvenPermutation = (start, path, list, k, resultSet) => {
    // base case
    if (path.length === k) {
        if (path[k-1] % 2 === 0) {
            resultSet.add(Number([...path].join('')));
        }
        return;
     }
        if(path[0] === 0 ) return;
        for (let i = start; i < list.length; i++) {
            
            // choose
            // if(path.includes(list[i])) continue;

            path.push(list[i]);

            // explore
            generateEvenPermutation(start, path, list, k, resultSet);

            // un-choose
            path.pop();
        }

    return [...resultSet].sort();
};

console.log(generateEvenPermutation(0, [], NumInput, 3, new Set()));
console.log(generateEvenPermutation(0, [], NumInput2, 3, new Set()));
