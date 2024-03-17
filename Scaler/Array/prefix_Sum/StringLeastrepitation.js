const string = "geeksforgeeks";
let index = -1;
let fnc = ' ';
 
if(string.length == 0){
console.log("EMPTY STRING");
}
 
for (let i of string) {
    console.log('string.split(i): ', string.split(i));
    if (string.split(i).length - 1 === 1) {
        fnc = i;
        break;
    } else {
        index += 1;
    }
}
if (index === string.length-1) {
    console.log("All characters are repeating.");
} else {
    console.log(`First non-repeating character is ${fnc}`);
}