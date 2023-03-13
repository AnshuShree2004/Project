let input="https://www.google.com"
  let regx=/^(https?:\/\/)?([\da-z\.-]+\.[a-z\.]{2,6}|[\d\.]+)([\/:?=&#]{1}[\da-z\.-]+)*[\/\?]?$/igm

let toMatchInput = input.match(regx)
console.log(toMatchInput)
