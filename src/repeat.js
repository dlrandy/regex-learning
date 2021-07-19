import { output } from './utils'
export default function plainText(){
  // var str = `aaaaaaa`;
  // var regex = /a{4}/g
  // var regex = /a{4,}/g
  // var regex = /a{4,5}/g
  // var regex = /b{0,}/g
  // var regex = /b*/g
  // var regex = /b+/g
  // var regex = /a*/g
  // var regex = /a+/g
  // var regex = /a{1,}/g
  // var regex = /a{0,1}/g
  // var regex = /a?/g
  var str = `http://jjj.io
not a web address
http://
https://jjj.io more`;
// var regex = /https{0,1}:\/\//g
// var regex = /https?:\/\/.*/g
var regex = /https?:\/\/.{1,}/g

  output(str,regex)
}