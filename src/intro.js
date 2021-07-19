import { output } from './utils'
export default function intro(){
  let str = `Is this This?`;

// let regex = new RegExp("is",'gi');
let regex = /is/gi;
// console.log(regex.test(str));
// console.log(regex.exec(str));
// console.log(regex.exec(str));
// regex.lastIndex = 0;
// console.log(regex.exec(str));
// console.log(regex.exec(str));
// console.log(str.match(regex));
// console.log(str.replace(regex, (s,i)=>{
//   console.log(s, i);
//   return 'XX'
// }));

console.log(str.search(regex));

output(str, regex, document.querySelector('pre'))
}

