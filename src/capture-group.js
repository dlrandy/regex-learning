import { output } from './utils'
export default function plainText(){
 
// var str = `foo
// foobar
// foobaz
// fooboo`;
 

//   // var regex = /foo(bar|boo)/g
//   var regex = /foo(bar|boo)/g

var str = `800-456-7890
(555) 456-7890
4564567890`;

// var regex = /\(?(\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}/g;
var regex = /\(?(?:\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}/g;

console.log(str.replace(regex, 'area code: $1'),'--');
  output(str,regex)
}