import { output } from './utils'
export default function plainText(){
 
var str = `foo
foobar
foobaz
fooboo`;
 

  
  // var regex = /foo(bar|boo)/g
  // var regex = /foo(?=bar|boo)/g
  var regex = /foo(?!bar|boo)/g





console.log(str.replace(regex, 'area code: $1'),'--');
  output(str,regex)
}