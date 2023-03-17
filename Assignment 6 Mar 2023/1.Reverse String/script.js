function reverseString(str){
Return str.split(""). reverse().Join("");
}
function reverseStringWithDelay(str){
setTimeout(function(){
var reversedString=reverseString(str)
Console.log(reversedString)
},2000)
}
reverseStringWithDelay("Hello")
