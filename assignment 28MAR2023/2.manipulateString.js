function logstring(str){
    let upperLetter = str.toUpperCase()
    console.log('The manipulated string is :',upperLetter)
}
function manipulateString(str,callback){
    callback(str)
}
manipulateString('hello world',logstring)