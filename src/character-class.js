import { output } from './utils'
export default function plainText(){
 
  var str = `cat mat bat Hat ?at 0at`;
// var regex = /.at/g
// var regex = /[cb]at/g
// var regex = /[^cb]at/g
// var regex = /[a-z]at/g
// var regex = /[a-zA-Z]at/g
// var regex = /[a-zA-Z0-9]at/g
  var regex = /[a-zA-Z0-9?]at/g

  output(str,regex)
}