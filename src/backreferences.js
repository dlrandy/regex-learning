import { output } from './utils'
export default function plainText(){
 
// var str = `it was the the thing thing.`;
var str = `<b>Bold</b><i>italics</i>`;


//  var regex = /(the)/g
//  var regex = /(the)\s/g
//  var regex = /(the)\s?/g
//  var regex = /(the)\s?\1/g
//  var regex = /(the)\s?(?=\1)/g
//  var regex = /(\w+)\s?(?=\1)/g
var regex = /<(\w+)>(.*)<\/\1>/g;

console.log(str.replace(regex, '$2\n'),'--');
  output(str,regex)
}