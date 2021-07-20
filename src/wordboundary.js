import { output } from './utils'
export default function plainText(){
 
  var str = `This history island is his, it is`;
  // var regex = /is/g
  // var regex = /is(?=\s)/g
  // var regex = /is(?=\s)?/g
  // var regex = /\bis/g
  // var regex = /\bis\b/g
  // var regex = /\Bis/g
  // var regex = /is\B/g
  var regex = /\Bis\B/g






console.log(str.replace(regex, 'area code: $1'),'--');
  output(str,regex)
}