// Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
// Output:
// [
//    "This    is    an",
//    "example  of text",
//    "justification.  "
// ]

const words = ["This", "is", "an", "example", "of", "text", "justification."];
const words_arry = ["What","must","be","acknowledgment","shall","be"];
const words_array_2 = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"];
const maxWidth = 16;

const Lines = words?.join(' ').length / maxWidth;
console.log(' Lines: ', (Lines )); 
console.log(' words_arry: ', (words_arry?.join(' ').length / maxWidth)); 
console.log(' words_array_2: ', (words_array_2?.join(' ').length / maxWidth)); 

var regex = /\./;
const numberOfLines = regex.test(Lines) ? Lines+1 :Lines;

for(let i = 0; i< numberOfLines ; i++){
    for ( let j=0; j<= maxWidth;j++){
        j+= words[i] + ' ';
    }

}
