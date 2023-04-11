function doubleArray(arr,callback){
    const doubleArr = arr.map((num) =>{
        return callback(num)
    })
    return doubleArr
}

const originalArray = [1,2,3,4]
function callback(num){
    return num*2
}
const double = doubleArray(originalArray,callback)
console.log(double)