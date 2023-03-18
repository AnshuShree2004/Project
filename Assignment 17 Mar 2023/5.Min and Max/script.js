let arr=[5,2,7,1,3]
function minAndMax(arr){
    return {
        max:Math.max(...arr),
        min:Math.min(...arr),
    }
}
console.log(minAndMax(arr))
