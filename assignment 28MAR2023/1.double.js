let double = arr.map((ele) => {
    return ele*2
})
function returnDouble(arr,callback){
    callback(arr)
}
let arr = [1,2,3,4,5]
console.log(returnDouble(arr,double))