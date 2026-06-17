const processStr = (s, k) => {

  
    let virtualLen = 0;
    for (const c of s) {
        if (c === '*') { if (virtualLen > 0) virtualLen--; }
        else if (c === '#') { if (virtualLen > 0) virtualLen *= 2; }
        else if (c === '%') { /* no size change */ }
        else { virtualLen++; }
    }

    if (k >= virtualLen) return ".";

    let target = k;
    let len = virtualLen; // shrink len as we undo operations

    for (let i = s.length - 1; i >= 0; i--) {
        const c = s[i];

        if (c === '*') {
            if (target >= len) return ".";
            len++;  // restore the popped element back

        } else if (c === '#') {
            const half = len / 2;        // pre-double size
            if (target >= half) target -= half;  // second half mirrors first
            len = half;                  // shrink back to pre-double

        } else if (c === '%') {
            target = len - 1 - target;  // undo reversal

        } else {
            // actual character: occupies index (len-1) in current virtual stack
            if (target === len - 1) return c;  // found it
            len--;  // this char is gone, shrink
        }
    }

    return ".";
};

console.log(processStr("a#b#c", 2)); // Output: "b"
console.log(processStr("a#b#c", 3)); // Output: "c"