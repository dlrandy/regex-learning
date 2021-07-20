import { output } from './utils'
export default function plainText(){
 
 
// var str = `12/1/16 
// 12-16-13`;
// var str = `12/1/16\n12-16-13`;

var str = `12/1/16
12-16-13
11/12/16
12-12-2016`;

 
// var regex = /12/;
// var regex = /12/g;
// var regex = /^12/g;
// var regex = /^12/gm;
var regex = /^12.+16/gm;
// var regex = /^12.+16$/gm;

console.log(regex.exec(str));
  output(str,regex)
}