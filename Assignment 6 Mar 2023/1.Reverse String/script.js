
function reverseString(str) {
  let reversedString=str.split('').reverse().join('')
console.log(reversedString);
}
let input="Hey girl,you are beautiful!"
setTimeout(reverseString(input),2000)
