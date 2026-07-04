
var maxNumberOfBalloons = function(text) {
    let arr = text.split('');
    let ans = 0;

    while (true) {
        let word = "balloon";

        for (let c of word) {
            let found = false;

            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === c) {
                    arr[i] = '#';
                    found = true;
                    break;
                }
            }

            if (!found) return ans;
        }

        ans++;
    }
};

console.log(maxNumberOfBalloons("nlaebolko")); // Output: 1
console.log(maxNumberOfBalloons("loonbalxballpoon")); // Output: 2