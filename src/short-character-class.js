import { output } from './utils'
export default function plainText(){
 
  var str = `Aeiou $100 55.5%`;
 
  // var regex = /[a-zA-Z0-9]/g
  // var regex = /\w/g
  // var regex = /\d/g
  // var regex = /\s/g
  // var regex = /[^\w]/g
  // var regex = /[^\d]/g
  // var regex = /[^\s]/g
  // var regex = /[\W]/g
  var regex = /[\S]/g

  output(str,regex)
}