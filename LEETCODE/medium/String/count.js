
const toFind = 'abcd';
const infStr = 'abce';

const regex = new RegExp(toFind, "g");
const times  = infStr.match(regex);

console.log(' times: ', times?.length || 0 );
// console.log(' times: ', infStr.match(/abcd/g) );

