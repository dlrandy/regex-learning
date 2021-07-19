import { output } from './utils'
export default function plainText(){
  var str = `Cat
sat on
the hat.`;
  var regex = /.at/g
  // var regex = /......../g
  output(str,regex)
}