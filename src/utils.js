export function output(str, regex, target = document.querySelector('pre')) {
  target.innerHTML = str.replace(regex, str=>`<span>${str}</span>`)
}