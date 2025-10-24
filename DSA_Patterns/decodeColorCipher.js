function decodeColorCipher(encrypted) {
    const colorToChar = {
        red: 'a',
        green: 'b',
        blue: 'c',
        yellow: 'd',
        orange: 'e',
        pink: 'f'
    };
    
    const colors = ["red", "green", "blue", "yellow", "orange", "pink"];
    const msg = encrypted.toLowerCase();
    let i = 0, result = '';

    while (i < msg.length) {
        let found = false;
        for (const color of colors) {
            if (msg.startsWith(color, i)) {
                result += colorToChar[color];
                i += color.length;
                found = true;
                break;
            }
        }
        if (!found) {
            throw new Error(`Invalid color code starting at position ${i}`);
        }
    }

    return result;
}

// Example usage:
const encryptedMessage = "RedYellowYellowPink";
console.log(decodeColorCipher(encryptedMessage)); // Output: adf
